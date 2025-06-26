# Lightweight Node base
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy manifests first so npm layer can be cached
COPY package*.json ./
RUN npm i --omit=dev && npm cache clean --force   # ← fast & simple

# Copy source last so code edits don’t bust the npm layer
COPY . .

CMD ["npm", "run", "dev"]
