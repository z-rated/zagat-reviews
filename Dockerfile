FROM node:12.0.0

RUN mkdir -p /

WORKDIR /

COPY . /

RUN npm install

EXPOSE 4500

CMD [ "npm", "run", "react-dev" ]
CMD [ "node", "server/index.js" ]
