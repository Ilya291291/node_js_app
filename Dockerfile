FROM node:22

COPY . .

RUN npm ci

CMD ["node", "index.js"]