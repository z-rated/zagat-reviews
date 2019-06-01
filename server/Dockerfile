FROM node:12.0.0

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install express

RUN npm install cors

RUN npm install body-parser

RUN npm install mysql

RUN npm install faker

EXPOSE 4500

# CMD [ "ls" ]
CMD [ "node", "index.js" ]
