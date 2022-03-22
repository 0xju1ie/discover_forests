FROM node:latest
WORKDIR /app
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN npm install
EXPOSE 3000
COPY ./frontend .
CMD ["npm", "start"]