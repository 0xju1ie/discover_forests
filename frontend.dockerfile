FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY frontend/package.json /app
RUN npm install
EXPOSE 3000
COPY . /app
CMD ["npm", "start"]

