import React from "react";
import { TodoListItem } from "./todo-list-item";
import { HomeBadge } from "./badge";
import { AddTaskBtn } from "./add-task-btn";
import { AddTask } from "../add-task";
import { NestedRoute } from "../components/nested-route";
import { observer } from "mobx-react-lite";
import { useTodoStore } from "../../hooks/store";

export const Home = observer(() => {
  const store = useTodoStore();

  return (
    <section className="flex flex-col">
      <h1 className="text-black text-center pt-4 text-2xl pb-4">
        My Task <HomeBadge leftCount={store.leftCount} />
      </h1>
      <ul style={{ height: "86vh" }} className="overflow-y-scroll">
        {store.todoList.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </ul>

      <AddTaskBtn />

      <NestedRoute title="Add new Task" path="/add-task" Component={AddTask} />
    </section>
  );
});
