import { ObjectId } from "mongodb";

export interface Todo {
  name: string;
}

export type TodoMongo = Todo & { _id: ObjectId };
