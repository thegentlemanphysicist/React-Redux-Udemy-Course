import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    usernames: [
      {userName: "Chad"},
      {userName: "Stacy"},
      {userName: "Chad2"}
    ],
    showPersons: false
  }
  
  // switchNameHandler = (newName) =>{
  //   //console.log('was clicked');
  //   //DONT DO THIS this.state.persons[0].name = "KRULL!!!!";
  //   this.setState({persons: [
  //     {name: newName, age: 28},
  //     {name: 'Manu', age: 29},
  //     {name: 'Stephanie', age: 27}
  //   ]})
  // }

  nameChangedHandler = (event, id) => {
    this.setState({persons: [
      {id: 'asdfa', name: 'Max', age: 28},
      {id: 'asfdasdfa',name: event.target.value, age: 29},
      {id: 'adsasdfa',name: 'Stephanie', age: 26}
    ]})
  }

  userNameHandler = (event) => {
    this.setState({usernames: [
      {userName: "Chad"},
      {userName: "Stacy"},
      {userName: event.target.value }
    ]})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;  //Note persons is a pointer (the value it is pointing at can change)
    //Slice creates a copy of the date and helps prevent unstable apps
    //const persons = this.state.persons.slice();
    //Spread also works equivalent to slice
    const persons =[...this.state.persons];
    // splice removes one element from an array
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} 
            age = {person.age} 
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event,person.id)}
            />
          })}
        {/* <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Connan')}
          changed = {this.nameChangedHandler}> I code apps</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} /> */}
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}

        {/*         
        <UserInput 
          changed ={this.userNameHandler}
          name = {this.state.usernames[2].userName} >
        </UserInput>
        <UserOutput userName = {this.state.usernames[0].userName} />
        <UserOutput userName = {this.state.usernames[1].userName} />
        <UserOutput userName = {this.state.usernames[2].userName} /> 
        */}
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'I am a react app'));
  }
}

export default App;
