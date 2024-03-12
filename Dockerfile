FROM node:latest 
WORKDIR /user/src/app
COPY ["package.json","package-lock.json","next.config.js","tsconfig.json","./"]

COPY prisma .
RUN npm install
RUN npm i --save-dev prisma@latest
RUN npm i @prisma/client@latest
COPY . .
RUN npm run build


EXPOSE 3000

