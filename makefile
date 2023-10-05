# Variables
IMAGE_NAME := currency-exchange-rate-frontend-app
CONTAINER_NAME := currency-exchange-rate-frontend-container
PORT := 3000

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run:
	docker run --name $(CONTAINER_NAME) -p $(PORT):$(PORT) $(IMAGE_NAME)

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Remove the Docker container and image
clean:
	docker rm $(CONTAINER_NAME)
	docker rmi $(IMAGE_NAME)

# Build and run the Docker container
up: build run

# Stop and remove the Docker container
down: stop clean

# View logs from the Docker container
logs:
	docker logs $(CONTAINER_NAME)
