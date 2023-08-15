import http from 'http';
import app from './app.js';
import startApolloServer from './graphql/apollo.js';
import mongoConnect from './services/mongo.js';

const startServer = async () => {
  const PORT = process.env.PORT || 8000;
  // Creating server with node and passing in the Express object
  // Allows for using more node features than Express allows
  // While getting the benefits of Express too
  const server = http.createServer(app);

  // future DB connections & other setup below
  await startApolloServer();
  // await mongoConnect();

  server.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
  });
};

startServer();
