import { typeDefs as ScalarName } from "graphql-scalars";
import { Book } from "./schema/Book.graphql";

const schema = [...ScalarName, Book];
// const schema = [Book];

export default schema;
