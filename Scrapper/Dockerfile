FROM node:20-alpine3.15

WORKDIR /scraper

COPY package*.json ./

RUN npm install

COPY . .

RUN adduser -D iambigj
USER iambigj

CMD ["node", "./scraper/src/main.js"]
