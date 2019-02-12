import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Course from "./containers/Course/Course";

import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{ textAlign: "left" }}>
            {/* Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links) */}
            {/* Add a simple navigation with two links => One leading to "Users", one leading to "Courses" */}
            {/* Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now) */}
            {/* Pass the course ID to the "Course" page and output it there */}
            {/* Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to
              manually parse them though!) */}

            <li>
              Load the "Course" component as a nested component of "Courses"
            </li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>
              Redirect requests to /all-courses to /courses (=> Your "Courses"
              page)
            </li>
          </ol>
          <li>
            <NavLink to="/users" exact>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" exact>
              Courses
            </NavLink>
          </li>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/course/:id/:title" exact component={Course} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" exact to="/courses" />
            <Route render={() => <h1>NOT FOUND</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
