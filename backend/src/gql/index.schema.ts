import { typeDefs as ScalarName } from "graphql-scalars";
import { Book } from "./schema/Book.graphql";

const schema = [...ScalarName, Book];

export default schema;
