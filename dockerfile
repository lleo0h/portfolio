FROM node:lts

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm i --force
RUN npm run build

CMD [ "npm", "run", "start" ]