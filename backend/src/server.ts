import * as dotenv from "dotenv";
import express from "express";
import { connectDatabase } from "./db/connection";
import { ApolloServer } from "@apollo/server";
// import { ApolloServer } from "apollo-server-express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { expressMiddleware } from "@apollo/server/express4";
import { config } from "./config";
import pkg from "body-parser";
const { json } = pkg;
import cors from "cors";
import schema from "./gql/index.schema";
import resolvers from "./gql/index.resolvers";

dotenv.config();
console.log(`Server.... ${process.env.NODE_ENV}`);

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

  //   server.applyMiddleware({
  //     app,
  //     cors: {
  //       origin: "*",
  //     },
  //     path: "/graphql",
  //   });

  // await new Promise<void>((resolve) =>
  //   // httpServer.listen(config.server.port, resolve)
  //   httpServer.listen({ port: 8888, resolve })
  // );

  // console.log(config);

  await new Promise<void>((resolve) =>
    httpServer.listen(config.server.port, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:8888/graphql`);

  //   app.get("/healthz", (req, res) => {
  //     console.log("HIT THE HEALTH");
  //     res.send('{"name":"John", "age":30, "car":null}');
  //   });
}

// Start server and pass in GQL schema / resolvers.
startApolloServer(schema, resolvers);
