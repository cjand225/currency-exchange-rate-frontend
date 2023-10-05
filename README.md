# Currency Exchange Rate Web Application (Frontend)

This is the frontend part of the Currency Exchange Rate Web Application built using Next.js.

## Getting Started

Follow these steps to set up and run the Next.js frontend locally.

```bash
# Clone the Repository:
git clone https://github.com/your-username/currency-exchange-rate.git
cd currency-exchange-rate

# Install Dependencies:
npm install

# Run the Development Server:
npm run dev

# Open the Application:
Visit http://localhost:3000 in your web browser to access the application.

```

## Usage

The Currency Exchange Rate Web Application allows you to fetch and display currency exchange rates based on specified parameters. Here's how to use the application:

1. Enter the required parameters:

   - **From Currency**: Select the source currency (e.g., USD or EUR).
   - **To Currency**: Select the target currency (e.g., CAD).
   - **Start Date**: Choose the start date for the exchange rate data (YYYY-MM-DD).
   - **End Date**: Choose the end date for the exchange rate data (YYYY-MM-DD).

2. Click the "Search" button to retrieve the exchange rate data.

3. The exchange rate data for the specified date range will be displayed in a user-friendly table format.

## Docker Support

If you prefer running the Next.js frontend using Docker, you can utilize the provided Dockerfile and Docker Compose configuration:

```bash
# Build the Docker Image:
docker build -t currency-exchange-frontend .

# Run the Docker Container:
docker run -d -p 3000:3000 currency-exchange-frontend

# Access the Application:
Visit http://localhost:3000 in your web browser to interact with the application.
```

## Deployment

For deploying the Next.js frontend in a production environment, you can follow standard deployment practices for Next.js applications. This can include using services like Vercel, Netlify, or hosting the application on your own server.

## Makefile

A Makefile is also provided for convenience. You can use the make commands for building, starting, stopping the containers, and more. View the Makefile for available commands.

```sh
make <command>
```

Replace `<command>` with the desired make command from the Makefile.
