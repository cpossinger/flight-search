# Base image
FROM node

# Make folder to put our files in
RUN mkdir -p /flight-search/backend

# Set working directory so that all subsequent command runs in this folder
WORKDIR /flight-search/backend

# Copy package json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy our app
COPY . .

EXPOSE 3000

# Command to run our app
CMD [ "npm", "start" ]
