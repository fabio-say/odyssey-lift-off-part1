const { ApolloServer, RedisCache } = require('apollo-server');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasouces/track-api');


const typeDefs = require('./schema');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI()
        };
    }
});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
