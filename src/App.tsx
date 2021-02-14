import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { EntryPoint } from "./pages";

const App = observer(() => (
  <div className="App">
    <Router>
      <EntryPoint />
    </Router>
  </div>
));

export default App;
