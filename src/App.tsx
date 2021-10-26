import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

import UserPageContainer from "./pages/UsersPage/containers/UserPageContainer";
import UsersPageList from "./pages/UsersPageList/containers/UsersPageList";
import TodosPageContainer from "./pages/TodosPage/containers/TodosPageContainer";
import EventsExamplesContainer from "./pages/EventsExamplesPage/containers/EventsExamplesContainer";
import UserDetailsContainer from "./pages/UserDetails/containers/UserDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <div style={{ marginBottom: 15 }}>
        <NavLink to="/users" style={{ margin: "0 10px" }}>
          Users
        </NavLink>
        <NavLink to="/users-list" style={{ margin: "0 10px" }}>
          Users List
        </NavLink>
        <NavLink to="/todos" style={{ margin: "0 10px" }}>
          Todos
        </NavLink>
        <NavLink to="/events-examples" style={{ margin: "0 10px" }}>
          Events Examples
        </NavLink>
      </div>
      <Route path="/users" exact>
        <UserPageContainer />
      </Route>
      <Route path="/users-list" exact>
        <UsersPageList />
      </Route>
      <Route path="/todos" exact>
        <TodosPageContainer />
      </Route>
      <Route path="/events-examples" exact>
        <EventsExamplesContainer />
      </Route>
      <Route path="/users/:id">
        <UserDetailsContainer />
      </Route>
    </BrowserRouter>
  );
}

export default App;
