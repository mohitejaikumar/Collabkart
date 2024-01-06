FROM node:latest 
WORKDIR /user/src/app
COPY ["package.json","package-lock.json","next-env.d.ts","tsconfig.json","./"]

COPY prisma ./prisma/
COPY . .
RUN npm install

RUN npm run build


EXPOSE 3000

