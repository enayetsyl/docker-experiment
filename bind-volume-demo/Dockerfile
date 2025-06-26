FROM node:20-alpine           

WORKDIR /usr/src/app

# 1️⃣ copy manifests so npm layer is cache-friendly
COPY package*.json ./
RUN npm i && npm cache clean --force

# 2️⃣ copy source last; editing code doesn’t bust npm layer
COPY . .

CMD ["npm", "run", "dev"]      # nodemon starts Express
