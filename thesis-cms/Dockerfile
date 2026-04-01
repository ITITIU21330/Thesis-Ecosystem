FROM node:18-alpine
RUN apk add --no-cache build-base gcc autoconf automake libtool zlib-dev libpng-dev nasm vips-dev
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]