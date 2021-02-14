import React from "react";
import { useHistory } from "react-router-dom";

export const AddTaskBtn = () => {
  const history = useHistory();
  const goToAddTaskPage = () => history.push("/add-task");

  return (
    <>
      <button
        className="fixed right-4 bottom-28 bg-indigo-600 w-8 h-8 rounded-full text-white flex justify-center items-center"
        onClick={goToAddTaskPage}
      >
        +
      </button>
    </>
  );
};
