import { action, computed, observable } from "mobx";
import { createContext } from "react";

export interface TodoItemType {
  id: number;
  title: string;
  detail: string;
  time: number;
  isDone: boolean;
}

class TodoListStoreImpl {
  @observable todoList: TodoItemType[] = [
    {
      id: Date.now(),
      title: "learn mobx",
      detail: "learn mobx with react hooks",
      time: Date.now(),
      isDone: false,
    },
    {
      id: Date.now() + 1000,
      title: "learn tailwind css",
      detail: "learn how to use tailwind css",
      time: Date.now() + 1000,
      isDone: true,
    },
  ];

  @computed get leftCount() {
    return this.todoList.filter((todo) => !todo.isDone).length;
  }

  @computed get sortedTodoList() {
    return this.todoList.sort((p, n) => {
      const pNum = p.isDone ? 1 : 0;
      const nNum = n.isDone ? 1 : 0;
      return pNum - nNum;
    });
  }

  @action
  addTodo(title: string, detail: string, isDone?: boolean) {
    const todo: TodoItemType = {
      id: Date.now(),
      title,
      detail,
      time: Date.now(),
      isDone: isDone || false,
    };
    this.todoList.push(todo);
  }

  @action
  setTodoIsDone(id: number, isDone: boolean) {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todoList[index].isDone = isDone;
    }
  }
}

export const TodoListStoreContext = createContext(new TodoListStoreImpl());
