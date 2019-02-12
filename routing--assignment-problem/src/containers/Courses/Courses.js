import React, { Component } from "react";
// import Course from "../Course/Course";
import { NavLink } from "react-router-dom";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  onClickHandler = id => {
    {
      console.log("The course id is" + id);
    }
    // <Course />;
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <NavLink
                to={"/course/" + course.id + "/" + course.title}
                key={course.id}
              >
                <article
                  className="Course"

                  //onClick={this.onClickHandler(course.id)}
                >
                  {course.title}
                </article>
              </NavLink>
            );
          })}
        </section>
        
      </div>
    );
  }
}

export default Courses;
