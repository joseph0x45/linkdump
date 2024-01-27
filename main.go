package main

import (
	"github.com/labstack/echo/v4"
	"linkdump/handlers"
)

func main() {
	handler := handlers.NewAppHandler()
	app := echo.New()

  app.Static("/static", "public")

	app.GET("/", handler.RenderLandingPage)
	app.Logger.Fatal(app.Start(":4000"))
}
