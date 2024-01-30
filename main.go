package main

import (
	"fmt"
	"linkdump/db"
	"linkdump/handlers"
	"linkdump/repositories"
	"log/slog"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/jwtauth/v5"
	"github.com/joho/godotenv"
)

func main() {
	if os.Getenv("ENV") != "PROD" {
		err := godotenv.Load()
		if err != nil {
			panic(err)
		}
	}
	postgresPool := db.GetPostgresPool()
	tokenAuth := jwtauth.New("HS256", []byte(os.Getenv("JWT_SECRET")), nil)
	textHandler := slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{})
	logger := slog.New(textHandler)
	usersRepo := repositories.NewUserRepo(postgresPool)
	authHandler := handlers.NewAuthHandler(usersRepo, logger, tokenAuth)
	r := chi.NewRouter()
	r.Route("/auth", func(r chi.Router) {
		r.Post("/register", authHandler.Register)
		r.Post("/login", authHandler.Login)
	})
  fmt.Println("Server started on port 8080")
	err := http.ListenAndServe(":8080", r)
	if err != nil {
		panic(err)
	}
}
