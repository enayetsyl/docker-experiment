FROM node:20-alpine
WORKDIR /usr/src/app

# 1️⃣ copy manifests first for npm cache
COPY package*.json ./
RUN npm i && npm cache clean --force

# 2️⃣ copy source last
COPY . .

CMD ["npm", "run", "dev"]