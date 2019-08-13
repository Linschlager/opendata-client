# OpenData Client
This project reads data from transport.opendata.ch and exposes a GraphQL API.

## Getting started
### Server
cd odc-server
`yarn` or `npm install`
`yarn start` or `npm run start` to start the server
_The server is now running on localhost:3000_

### React App
cd odc-app
`yarn` or `npm install`
`yarn dev` or `npm run dev` to start the local development server
_The development server is now running on localhost:1234_

## Known Bugs
- The opendata.ch api doesn't seem to be able to filter by type. It correctly forwards the request but the result isn't actually filtered.
