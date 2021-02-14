import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./home";

export const EntryPoint = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <div className="flex-1 p-2 bg-gray-100">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};
