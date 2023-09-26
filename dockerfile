# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code into the container
COPY . .

# Install project dependencies
RUN npm install

# Build the Next.js application for production
RUN npm run build

# Expose the port the Next.js application will run on
EXPOSE 3000

# Define the command to run the Next.js application
CMD ["npm", "start"]
