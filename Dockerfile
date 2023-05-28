### STAGE 1: Build Environment ###
# Base image as "builder"
FROM node:16-alpine3.16 as builder

# Working directory
RUN mkdir /ng-app
WORKDIR /ng-app

# add /ng-app/node_modules/.bin to $PATH
ENV PATH /ng-app/node_modules/.bin:$PATH

# App dependencies
COPY package.json /ng-app/package.json
COPY package-lock.json /ng-app/package-lock.json
RUN npm ci
RUN npm install -g @angular/cli@11.1.2 --unsafe

# Add application
COPY . /ng-app

# Generate build
RUN $(npm bin)/ng build --configuration production --build-optimizer

### STAGE 2: Production ###

FROM nginx:1.17-alpine

## Copy our default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy artifcat build from the build environment
COPY --from=builder /ng-app/dist/work-with-family-ui /usr/share/nginx/html

# Expose port 80
EXPOSE 80