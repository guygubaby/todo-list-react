import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export interface TodoItemType {
  id: number;
  title: string;
  detail: string;
  time: number;
  isDone: boolean;
}

class TodoListStoreImpl {
  constructor() {
    makeAutoObservable(this);
  }

  todoList: TodoItemType[] = [
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

  get leftCount() {
    return this.todoList.filter((todo) => !todo.isDone).length;
  }

  get sortedTodoList() {
    return this.todoList.sort((p, n) => {
      const pNum = p.isDone ? 1 : 0;
      const nNum = n.isDone ? 1 : 0;
      return pNum - nNum;
    });
  }

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

  setTodoIsDone(id: number, isDone: boolean) {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todoList[index].isDone = isDone;
    }
  }
}

export const todoStore = new TodoListStoreImpl();
export const TodoStoreContext = createContext<TodoListStoreImpl>(todoStore);
