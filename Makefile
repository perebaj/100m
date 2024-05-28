## run lint
.PHONY: lint
lint:
	npx eslint . --fix

## Install dependencies
.PHONY: install
install:
	npm install

## Run the app
.PHONY: run
run:
	npm run dev

## npm build
.PHONY: build
build:
	npm run build

## Display help for all targets
.PHONY: help
help:
	@awk '/^.PHONY: / { \
		msg = match(lastLine, /^## /); \
			if (msg) { \
				cmd = substr($$0, 9, 100); \
				msg = substr(lastLine, 4, 1000); \
				printf "  ${GREEN}%-30s${RESET} %s\n", cmd, msg; \
			} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
