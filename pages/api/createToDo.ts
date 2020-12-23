import { NextApiRequest, NextApiResponse } from "next";
import { insertTodo } from "../../data/todo/todo.service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  const newTodo = await insertTodo(req.body);
  res.redirect("/");
};
