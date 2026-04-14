FROM node:20-alpine

WORKDIR /app

RUN apk upgrade --no-cache

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:dev"]