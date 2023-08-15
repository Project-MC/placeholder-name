import bodyParser from 'body-parser';
const { json } = bodyParser;
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import app from '../app.js';
import resolvers from './resolvers/index.resolvers.js';
const startApolloServer = async () => {
    const typeDefs = loadFilesSync('**/*', {
        extensions: ['graphql']
    });
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    });
    const server = new ApolloServer({
        schema
    });
    await server.start();
    app.use('/graphql', json(), expressMiddleware(server));
};
export default startApolloServer;
