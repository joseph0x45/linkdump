package handlers

import (
	"encoding/json"
	"fmt"
	"github.com/go-chi/jwtauth/v5"
	"github.com/oklog/ulid/v2"
	"linkdump/pkg"
	"linkdump/repositories"
	"linkdump/types"
	"log/slog"
	"net/http"
)

type AuthHandler struct {
	users     *repositories.Users
	logger    *slog.Logger
	tokenAuth *jwtauth.JWTAuth
}

func NewAuthHandler(users *repositories.Users, logger *slog.Logger, tokenAuth *jwtauth.JWTAuth) *AuthHandler {
	return &AuthHandler{
		users:     users,
		logger:    logger,
		tokenAuth: tokenAuth,
	}
}

func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request) {
	payload := new(struct {
		Username string `json:"username"`
		Password string `json:"password"`
	})
	err := json.NewDecoder(r.Body).Decode(payload)
	if err != nil {
		h.logger.Error(fmt.Sprintf("Error while decoding payload: %s", err.Error()))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	usernameIsAvailable, err := h.users.UsernameIsAvailable(payload.Username)
	if err != nil {
		h.logger.Error(err.Error())
	}
	if !usernameIsAvailable {
		w.WriteHeader(http.StatusConflict)
		return
	}
	pwdHash, err := pkg.Hash(payload.Password)
	if err != nil {
		h.logger.Error(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	newUser := &types.User{
		ID:             ulid.Make().String(),
		Email:          "",
		Username:       payload.Username,
		Password:       pwdHash,
		ProfilePicture: "https://picsum.photos/200/300",
		UserType:       "regular",
	}
	err = h.users.Insert(newUser)
	if err != nil {
		h.logger.Error(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	_, tokenStr, err := h.tokenAuth.Encode(map[string]interface{}{
		"id":        newUser.ID,
		"username":  newUser.Username,
		"user_type": newUser.UserType,
	})
	if err != nil {
		h.logger.Error(fmt.Sprintf("Error while encoding auth token: %s", err.Error()))
		w.WriteHeader(http.StatusInternalServerError)
		w.Header().Set("X-CONTEXT", "TOKEN_ENCODING_FAILED")
		return
	}
	data, err := json.Marshal(map[string]interface{}{
		"data": map[string]string{
			"token": tokenStr,
		},
	})
	if err != nil {
		h.logger.Error(fmt.Sprintf("Error while marshalling response data: %s", err.Error()))
		w.WriteHeader(http.StatusInternalServerError)
		w.Header().Set("X-CONTEXT", "RESPONSE_MARSHALLING_FAILED")
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write(data)
	return
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {

}
