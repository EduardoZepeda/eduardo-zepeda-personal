## help: print this help message
.PHONY: help
help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

## generate/webp: Generate portfolio images in webp
.PHONY: generate/webp
generate/webp:
	@echo 'Generating portfolio images in webp format'
	for f in ./public/images/*.jpg; do cwebp "$$f" -o "./public/portfolio/$$(basename -- "$$f" .jpg).webp"; done;
	for f in ./public/images/*.jpg; do cwebp -resize 400 0 "$$f" -o "./public/portfolio/$$(basename -- "$$f" .jpg)-400w.webp"; done;
	for f in ./public/images/*.jpg; do cwebp -resize 800 0 "$$f" -o "./public/portfolio/$$(basename -- "$$f" .jpg)-800w.webp"; done;
	for f in ./public/images/*.jpg; do cwebp -resize 1200 0 "$$f" -o "./public/portfolio/$$(basename -- "$$f" .jpg)-1200w.webp"; done;

## generate/jpg: Generate portfolio images in jpg
.PHONY: generate/jpg
generate/jpg:
	@echo 'Generating portfolio images in jpg format'
	for f in ./public/images/*.jpg; do cp "$$f" "./public/portfolio/$$(basename -- "$$f" .jpg).jpg"; done;
	for f in ./public/images/*.jpg; do convert "$$f" -resize 400x "./public/portfolio/$$(basename -- "$$f" .jpg)-400w.jpg"; done
	for f in ./public/images/*.jpg; do convert "$$f" -resize 800x "./public/portfolio/$$(basename -- "$$f" .jpg)-800w.jpg"; done
	for f in ./public/images/*.jpg; do convert "$$f" -resize 1200x "./public/portfolio/$$(basename -- "$$f" .jpg)-1200w.jpg"; done
