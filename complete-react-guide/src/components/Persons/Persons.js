import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[Persons.js] Inside Conmponent will mount");
  }
  componentDidMount() {
    console.log("[Persons.js] Inside Conmponent did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "UPDATE Persons.js Inside component will receive props",
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "UPDATE Persons.js Inside should component update",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );

  // return nextProps.persons !== this.props.persons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "UPDATE Persons.js Inside componentwillupdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("UPDATE Persons.js Inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] Inside Render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
