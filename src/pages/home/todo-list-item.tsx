import React from "react";
import { TodoItemType } from "../store/index";
import { formatTime } from "../../utils/time";
import { useStore } from "../../hooks/store";

export const TodoListItem: React.FC<TodoItemType> = ({
  id,
  title,
  time,
  isDone,
  detail,
}) => {
  const store = useStore();

  const handleCompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDone: boolean = e.target.checked;
    console.log("isDone: ", isDone);
    store.setTodoIsDone(id, isDone);
  };

  return (
    <li className="relative flex flex-col bg-white p-2 pt-4 pb-4 mb-2 rounded-lg shadow-md hover:shadow-lg">
      {isDone ? (
        <i className="absolute right-2 top-4 cursor-pointer text-green-500">
          Done
        </i>
      ) : (
        <i className="absolute right-2 top-4 cursor-pointer text-purple-500">
          In Progress
        </i>
      )}
      <h4 className="truncate text-base text-gray-700 pr-20">{title}</h4>
      <p className="pt-2 pb-4 text-gray-500">{detail}</p>
      <div className="flex flex-row justify-between items-center">
        <span className="text-blue-500 text-sm">{formatTime(time)}</span>
        <label className="">
          <input
            checked={isDone}
            onChange={handleCompleteChange}
            type="checkbox"
          />
          <span className="text-gray-500 pl-2">complete</span>
        </label>
      </div>
    </li>
  );
};
