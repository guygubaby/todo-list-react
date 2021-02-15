import React from "react";
import { todoStore, TodoStoreContext } from "./pages/store/index";
import { EntryPoint } from "./pages/index";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <TodoStoreContext.Provider value={todoStore}>
    <div className="App">
      <Router>
        <EntryPoint />
      </Router>
    </div>
  </TodoStoreContext.Provider>
);

export default App;
