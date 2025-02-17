FROM node:16.19.0

COPY . /Reja
WORKDIR /Reja
CMD npm install && node server.js

# DOCEKRFILE => DOCKER IMAGE => direct docker: DOCKER CONTAINER
# DOCEKRFILE => DOCKER IMAGE => docker-compose: DOCKER CONTAINER