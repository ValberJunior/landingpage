FROM ubuntu
WORKDIR /app

COPY . . 
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y npm && apt-get install -y nodejs && npm apt-get install react-scripts

WORKDIR /app


RUN npm install

ENTRYPOINT npm start