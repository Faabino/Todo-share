import { Todo, TodoMongo } from "./todo.interface";

export function fromMongo(data: TodoMongo): Todo {
  let list = null;
  if (data.list !== undefined) {
    list = data.list;
  }
  return {
    name: data.name,
    list,
  };
}

export function toMongo(data: Todo): Omit<TodoMongo, "_id"> {
  let list = null;
  if (data.list !== undefined) {
    list = data.list;
  }
  return {
    name: data.name,
    list: data.list,
  };
}
