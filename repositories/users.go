package repositories

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"linkdump/types"
)

type Users struct {
	db *sqlx.DB
}

func NewUserRepo(db *sqlx.DB) *Users {
	return &Users{
		db: db,
	}
}

func (r *Users) Insert(user *types.User) error {
	_, err := r.db.NamedExec(
		`
      insert into users(id, email, password, username, profile_picture, user_type)
      values(:id, :email, :password, :username, :profile_picture, :user_type)
    `,
		user,
	)
	if err != nil {
		return fmt.Errorf("Error while inserting new user: %w", err)
	}
	return nil
}

func (r *Users) UsernameIsAvailable(username string) (bool, error) {
	count := 0
	err := r.db.QueryRowx("select count(*) from users where username=$1", username).Scan(&count)
	if err != nil {
		return false, fmt.Errorf("Error while counting usernames: %w", err)
	}
	if count != 0 {
		return false, nil
	}
	return true, nil
}
