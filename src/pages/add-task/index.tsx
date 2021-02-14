import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../../hooks/store";
import { TodoItemType } from "../store/index";

export const AddTask = () => {
  const store = useStore();
  const history = useHistory();

  const [formState, setFormState] = useState<TodoItemType>({
    id: Date.now(),
    time: Date.now(),
    title: "",
    detail: "",
    isDone: false,
  });

  const addTask = () => {
    console.log(formState);
    const { title, detail } = formState;
    const isInValide = !title || !detail;
    if (isInValide) {
      alert("please complete form");
      return;
    }
    store.addTodo(title, detail);
    history.goBack();
  };

  return (
    <form
      className="flex flex-col"
      action="/"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="mt-4 p-2 rounded-lg"
        placeholder="task title"
        type="text"
        value={formState.title}
        onChange={(e) => {
          const title = e.target.value;
          setFormState({
            ...formState,
            title,
          });
        }}
      />

      <textarea
        className="mt-4 p-2 rounded-lg"
        placeholder="task details here ..."
        cols={30}
        rows={10}
        value={formState.detail}
        onChange={(e) => {
          const detail = e.target.value;
          setFormState({
            ...formState,
            detail,
          });
        }}
      ></textarea>

      <button
        className="mt-6 p-2 bg-green-400 text-white rounded-3xl outline-none"
        type="submit"
        onClick={addTask}
      >
        Add Task
      </button>
    </form>
  );
};
