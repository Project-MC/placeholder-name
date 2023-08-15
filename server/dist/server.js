import http from 'http';
import app from './app.js';
import startApolloServer from './graphql/apollo.js';
const startServer = async () => {
    const PORT = process.env.PORT || 8000;
    const server = http.createServer(app);
    // future DB connections & setup below
    await startApolloServer();
    // await mongoConnect();
    server.listen(PORT, () => {
        console.log('Server listening on port: ' + PORT);
    });
};
startServer();
