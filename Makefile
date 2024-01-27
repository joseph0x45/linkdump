build:
	templ generate && go build -o ./app .

start-tailwind-compilation:
	@npx tailwindcss -i ./public/input.css -o ./public/output.css --watch

build-css:
	@npx tailwindcss -i ./public/input.css -o ./public/output.css
