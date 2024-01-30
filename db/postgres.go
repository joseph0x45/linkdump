package db

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"os"
)

func GetPostgresPool() *sqlx.DB {
	db, err := sqlx.Connect("postgres", os.Getenv("POSTGRES_URL"))
	if err != nil {
		panic(fmt.Sprintf("Error while connecting to database: %v", err))
	}
	return db
}
