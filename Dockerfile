FROM node:8

# Create app directory (working directory for the application)
WORKDIR /usr/src/app

# Install deps
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["npm", "start"]

