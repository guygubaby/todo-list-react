import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

interface NestedRouteProps {
  title: string;
  path: string;
  Component: React.FC;
}

export const NestedRoute: React.FC<NestedRouteProps> = ({
  title,
  path,
  Component,
}) => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path={path}>
        <div className="fixed top-0 left-0 bottom-0 w-full z-10 bg-gray-100">
          <header className="flex flex-row bg-white p-2 pt-6 pl-0">
            <span
              className="cursor-pointer block w-8 h-full pl-4"
              onClick={() => history.goBack()}
            >
              {"<"}
            </span>
            <span className=" flex-1 text-center">{title || path}</span>
          </header>
          <div className="p-2">
            <Component />
          </div>
        </div>
      </Route>
    </Switch>
  );
};
