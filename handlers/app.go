package handlers

import (
	"github.com/labstack/echo/v4"
	"linkdump/ui"
	"linkdump/ui/layouts"
)

type AppHandler struct {
}

func NewAppHandler() *AppHandler {
	return &AppHandler{}
}

func (h *AppHandler) RenderLandingPage(c echo.Context) error {
	return layouts.Base(ui.LandingPage()).Render(c.Request().Context(), c.Response().Writer)
}
