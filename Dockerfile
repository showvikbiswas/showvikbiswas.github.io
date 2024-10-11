# Use the latest stable Node.js image
FROM node:21-alpine3.18

# Install build dependencies required by sharp (libvips)
# RUN apk add --no-cache vips-dev python3 make g++ git
RUN apk --no-cache add g++ make py3-pip
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install Gatsby CLI globally and project dependencies with legacy peer deps
RUN npm install -g gatsby-cli
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port Gatsby will run on (default: 8000)
EXPOSE 8000

# Command to run the Gatsby development server
CMD ["npm", "run", "develop"]
