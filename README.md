# Her Way Forward

## General Installation
* Install [NodeJS] (https://nodejs.org/en/download/) (v18+), globally. This will also install `npm`.

## Client
### React with Vite
Vite is a powerful bundler that offers a React template out of the box.

### Installation (run only the 1st time)
* Navigate to `client` folder and run `npm install`.
### Usage
The following npm scripts drive the client:
* `npm start` - Start of dev server.
* Open browser to `http://localhost:5173/` url.
### Termination
`Ctrl/Cmd + C` to terminate the terminal.

## BFF
### Installation (run only the 1st time)
* Navigate to `bff` folder and run `npm install`.

### Usage
The following npm scripts drive the client:
* `npm start` - Start of bff.
* Open browser to `http://localhost:3001/content` url.
### Termination
`Ctrl/Cmd + C` to terminate the terminal.

## CMS
### Start CMS
* Open Docker Desktop
* Run in a terminal `docker run -p 8080:8080 --name websight-cms --rm --mount source=segment-store-repository,target=/websight/launcher/repository europe-docker.pkg.dev/websight-io/public/websight-cms-starter:1.23.0`
The instance has been initiated successfully and CMS is accessible at `http://localhost:8080`.
### Termination
On the dashboard of Docker Desktop click on `Stop` to stop the container from running.