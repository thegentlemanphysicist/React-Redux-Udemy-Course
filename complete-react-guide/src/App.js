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
    ]
  }
  
  switchNameHandler = (newName) =>{
    //console.log('was clicked');
    //DONT DO THIS this.state.persons[0].name = "KRULL!!!!";
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]})
  }

  userNameHandler = (event) => {
    this.setState({usernames: [
      {userName: "Chad"},
      {userName: "Stacy"},
      {userName: event.target.value }
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Krull.')}>Switch Name</button>
        <div>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Connan')}
          changed = {this.nameChangedHandler}> I code apps</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </div>
        
        <UserInput 
          changed ={this.userNameHandler}
          name = {this.state.usernames[2].userName} >
        </UserInput>
        <UserOutput userName = {this.state.usernames[0].userName} />
        <UserOutput userName = {this.state.usernames[1].userName} />
        <UserOutput userName = {this.state.usernames[2].userName} />
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'I am a react app'));
  }
}

export default App;
