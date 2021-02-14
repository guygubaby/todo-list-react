import { useContext } from "react";
import { TodoListStoreContext } from "../pages/store";

export const useStore = () => useContext(TodoListStoreContext);
