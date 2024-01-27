package handlers

import (
	"github.com/labstack/echo/v4"
  "linkdump/ui/components"
)

type AppHandler struct {
}

func NewAppHandler() *AppHandler {
	return &AppHandler{}
}

func (h *AppHandler) RenderLandingPage(c echo.Context) error {
  return components.Hello("Bozo").Render(c.Request().Context(), c.Response().Writer)
}
