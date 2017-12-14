# Example of server-side rendering with React.js and ParcelJS

Complete example of a React.js with server-side rendering and bundled with ParcelJS. It includes:

- React.js - UI library
- React Helmet - SEO library - Manage your <head> and page title
- React Router - URL Router
- Apollo Client - GraphQL client
- Communicate with GitHub GraphQL API as an example

## Development
In development, you don't have server-side rendering. All you need to do is `npm start`.

## Production
To run into production, you need to build first and then you can run the app using the express server.

 - `npm run build`
 - `node server`

 ## How is this working?
 There is two build: one for the browser using Parcel.js and one for Node.js using BabelJS.

 The parcel build is in dist/client and is a regular build just like you would do without server-side rendering.

 The Node.js build is in dist/client and is only transformed through BabelJS. It uses a babel plugin to ignore the file extensions that should not be executed through the server. You can add your own!
