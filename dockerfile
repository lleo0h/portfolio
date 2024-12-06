FROM node:lts

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm i
RUN npm run build

CMD [ "npm", "run", "start" ]