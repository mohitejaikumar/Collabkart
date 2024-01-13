FROM node:latest 
WORKDIR /user/src/app
COPY ["package.json","package-lock.json","next-env.d.ts","tsconfig.json","./"]

COPY prisma ./prisma/
COPY . .
RUN npm install
RUN npm i --save-dev prisma@latest
RUN npm i @prisma/client@latest
RUN npm run build


EXPOSE 3000

