# Docker-related variables
DOCKER_COMPOSE = docker-compose
DOCKER_BUILD = $(DOCKER_COMPOSE) build
DOCKER_RUN = $(DOCKER_COMPOSE) up
DOCKER_STOP = $(DOCKER_COMPOSE) down

# Next.js project name
NEXT_APP_NAME = currency-exchange-rate

# Development environment
ENV = development

# Makefile targets
.PHONY: build run stop

build:
	@echo "Building Next.js Docker container..."
	$(DOCKER_BUILD) --build-arg NODE_ENV=$(ENV) $(NEXT_APP_NAME)

run:
	@echo "Starting Next.js development server..."
	$(DOCKER_RUN) $(NEXT_APP_NAME)

stop:
	@echo "Stopping Next.js Docker container..."
	$(DOCKER_STOP)
