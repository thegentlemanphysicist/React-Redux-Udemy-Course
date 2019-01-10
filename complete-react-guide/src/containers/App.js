import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
// import UserInput from '../UserInput/UserInput';
// import UserOutput from '../UserOutput/UserOutput';
// import Ass2Obj from '../Assignment2Obj/Assignment2Obj'
// import ValidationComponent from '../ValidationComponent/ValidationComponent'
// import CharComponent from '../CharComponent/CharComponent'
// import charComponent from '../CharComponent/CharComponent';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[App.js] Inside Conmponent will mount");
  }
  componentDidMount() {
    console.log("[App.js] Inside Conmponent did mount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "UPDATE App.js Inside should component update",
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "UPDATE App.js Inside componentwillupdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("UPDATE App.js Inside componentDidUpdate");
  }

  state = {
    persons: [
      { id: "1", name: "Max", age: 0 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    usernames: [
      { userName: "Chad" },
      { userName: "Stacy" },
      { userName: "Chad2" }
    ],
    showPersons: false,
    toggleClicked: 0
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // Don't mutate the object directly
    // const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  userNameHandler = event => {
    this.setState({
      usernames: [
        { userName: "Chad" },
        { userName: "Stacy" },
        { userName: event.target.value }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons;  //Note persons is a pointer (the value it is pointing at can change)
    //Slice creates a copy of the date and helps prevent unstable apps
    //const persons = this.state.persons.slice();
    //Spread also works equivalent to slice
    const persons = [...this.state.persons];
    // splice removes one element from an array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    //prevents setState from breaking if we did toggleClicked: this.toggleClicked + 1
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  // countCharacters = (event) => {
  //   const contentEntered = event.target.value;
  //   const arrayOContent = contentEntered.split('');
  //   this.setState({
  //     charatersDisplayed: arrayOContent.length,
  //     ass2content: contentEntered,
  //     arrayOfContent: arrayOContent
  //   });
  // }

  // deletedCharacterHandler = (charIndex) => {
  //   const contentArray = [...this.state.arrayOfContent]
  //   contentArray.splice(charIndex,1);
  //   this.setState({
  //     charatersDisplayed: contentArray.length,
  //     arrayOfContent: contentArray,
  //     ass2content: contentArray.join('')
  //   })
  // }

  render() {
    console.log("[App.js] Inside Render");
    // pseudo selectors must be wrapped
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
