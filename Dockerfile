# Image source
FROM node:alpine

# Docker working directory
WORKDIR /app

RUN npm install -g npm@10.4.0

# Copying file into APP directory of docker
COPY package*.json ./

# Then install the NPM module with --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy current directory to APP folder
COPY . .

# Then build
RUN npm run build

# Declare env port value
ENV PORT = 3000

# Expose port 3000
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
