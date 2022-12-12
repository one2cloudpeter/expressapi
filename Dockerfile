FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Install TypeScript
RUN npm install -g typescript

# Compile TypeScript code
RUN tsc

EXPOSE 8080

CMD ["npm", "start"]