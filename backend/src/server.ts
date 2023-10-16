import * as dotenv from "dotenv";
import express from "express";
import { connectDatabase } from "./db/connection";
import { ApolloServer } from "@apollo/server";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { config } from "./config";
import pkg from "body-parser";
const { json } = pkg;
import cors from "cors";
import schema from "./gql/index.schema";
import resolvers from "./gql/index.resolvers";

dotenv.config();

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();

  connectDatabase();

  interface MyContext {
    token?: String;
  }

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    //Attach GQL Server with Express
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    // cache: "bounded",
  });

  // Start the GraphQL server.
  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen(config.server.port, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:8888/graphql`);
}

// Start server and pass in GQL schema / resolvers.
startApolloServer(schema, resolvers);
