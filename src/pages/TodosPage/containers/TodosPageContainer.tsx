import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import { ITodo } from "../../../types";
import TodoItem from "../../../commonComponents/TodoItem/TodoItem";
import List from "../../../commonComponents/List/List";

const TodosPageContainer: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <List
      items={todos}
      renderItems={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPageContainer;
