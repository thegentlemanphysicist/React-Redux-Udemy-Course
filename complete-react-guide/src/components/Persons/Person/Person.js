import React, { Component } from "react";
import PropTypes from "prop-types";

import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import { AuthContext } from "../../../containers/App";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }
  componentWillMount() {
    console.log("[Person.js] Inside Conmponent will mount");
  }
  componentDidMount() {
    console.log("[Person.js] Inside Conmponent did mount");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    } // this.focus();
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] Inside Render");

    return (
      <>
        {/* <AuthContext.Consumer>
          <p>I'm authenticated</p>
        </AuthContext.Consumer> */}
        {this.props.authenticated ? <p>I'm authenticated</p> : null}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.{" "}
        </p>
        <p onClick={this.props.click}>{this.props.children} </p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
    // return [
    //   <p key="1" onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old.{" "}
    //   </p>,
    //   <p key="2" onClick={this.props.click}>
    //     {this.props.children}{" "}
    //   </p>,
    //   <p key="3" onClick={this.props.click}>
    //     {this.props.children}{" "}
    //   </p>
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
