import { ITask } from "./types/ITask";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseUrl}/tasks`);
  const todos = await response.json();

  return todos;
};
