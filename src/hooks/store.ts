import { useContext } from "react";
import { TodoStoreContext } from "../pages/store/index";

export const useTodoStore = () => useContext(TodoStoreContext);
