import { Collection, connect, Db, MongoClient } from "mongodb";
import { TodoMongo } from "../data/todo/todo.interface";

let db: Db;
let client: MongoClient | null = null;

export async function init(): Promise<void> {
  if (!process.env.MONGODB_URI) {
    throw new Error("db not found");
  }
  client = await connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  });
  db = client.db("Todo-share");
  console.log("db: ", db);
}

export async function getTodoCollection(): Promise<Collection<TodoMongo>> {
  if (!client) {
    await init();
  }
  return db.collection<TodoMongo>("todo");
}
