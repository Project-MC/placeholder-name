import productsResolver from './products.resolvers.js';
// Constructing a resolvers array for GraphQL in this file so that
// all resolvers can be exported from here and clean up other files
// https://www.apollographql.com/docs/apollo-server/data/resolvers/
const resolvers = [productsResolver];
export default resolvers;
