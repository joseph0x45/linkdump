package types

type User struct {
	ID             string `json:"id" db:"id"`
	Email          string `json:"email" db:"email"`
	Password       string `json:"password" db:"password"`
	Username       string `json:"username" db:"username"`
	ProfilePicture string `json:"profile_picture" db:"profile_picture"`
	UserType       string `json:"user_type" db:"user_type"`
}
