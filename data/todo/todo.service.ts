import { getTodoCollection } from "../../lib/getDatabase";
import { fromMongo, toMongo } from "./todo.dto";
import { Todo } from "./todo.interface";

export async function findTodo(): Promise<Todo[]> {
  const toDoCollection = await getTodoCollection();
  const todos = await toDoCollection.find().toArray();

  return todos.map(fromMongo);
}

export async function insertTodo(data: Todo): Promise<Todo | null> {
  const toDoCollection = await getTodoCollection();
  const result = await toDoCollection.insertOne(toMongo(data));
  const newTodo = await toDoCollection.findOne(result.insertedId);
  if (!newTodo) {
    return null;
  }
  return fromMongo(newTodo);
}
