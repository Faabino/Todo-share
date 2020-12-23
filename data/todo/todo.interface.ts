import { ObjectId } from "mongodb";

export interface Todo {
  name: string;
  list?: [] | null;
}

export type TodoMongo = Todo & { _id: ObjectId };
