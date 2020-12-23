import { Todo, TodoMongo } from "./todo.interface";

export function fromMongo(data: TodoMongo): Todo {
  return {
    name: data.name,
  };
}

export function toMongo(data: Todo): Omit<TodoMongo, "_id"> {
  return {
    name: data.name,
  };
}
