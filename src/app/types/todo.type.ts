export type Todo = {
  id: number;
  title?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type createTodo = {
  title?: string;
};
