FROM node:10
WORKDIR /build
COPY . .
RUN npm install
EXPOSE 5000
ENTRYPOINT ["node", "./server.js"]