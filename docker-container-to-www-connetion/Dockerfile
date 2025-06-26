FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g nodemon \
&& npm i

COPY . .

EXPOSE 5173

CMD ["nodemon", "--legacy-watch", "--exec", "vite", "dev", "--", "--host"]