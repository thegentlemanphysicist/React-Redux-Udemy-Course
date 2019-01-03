import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Ass2Obj from './Assignment2Obj/Assignment2Obj'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import charComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 29},
      {id: '3', name: 'Stephanie', age: 26}
    ],
    usernames: [
      {userName: "Chad"},
      {userName: "Stacy"},
      {userName: "Chad2"}
    ],
    showPersons: false,

    ass2content: '',
    charatersDisplayed: 0,
    arrayOfContent: []
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
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    // Don't mutate the object directly
    // const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
    // this.setState({persons: [
    //   {id: 'asdfa', name: 'Max', age: 28},
    //   {id: 'asfdasdfa',name: event.target.value, age: 29},
    //   {id: 'adsasdfa',name: 'Stephanie', age: 26}
    // ]});
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

  countCharacters = (event) => {
    const contentEntered = event.target.value;
    const arrayOContent = contentEntered.split('');
    this.setState({
      charatersDisplayed: arrayOContent.length,
      ass2content: contentEntered,
      arrayOfContent: arrayOContent
    });
  }

  deletedCharacterHandler = (charIndex) => {
    const contentArray = [...this.state.arrayOfContent]
    contentArray.splice(charIndex,1);
    this.setState({
      charatersDisplayed: contentArray.length,
      arrayOfContent: contentArray,
      ass2content: contentArray.join('')
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    // pseudo selectors must be wrapped
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
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    let charComponents = null;
    //if (this.state.charatersDisplayed>0){
      charComponents = (
        <div>
          {this.state.arrayOfContent.map((arrayelement, index) =>{
            return <CharComponent
            click = {() => this.deletedCharacterHandler(index)}
            char = {arrayelement}
            />
          })}
        </div>
      );

    //}
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}> This is really working!</p>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}

        {/* Assignment 1      */}
        {/* <UserInput 
          changed ={this.userNameHandler}
          name = {this.state.usernames[2].userName} >
        </UserInput>
        <UserOutput userName = {this.state.usernames[0].userName} />
        <UserOutput userName = {this.state.usernames[1].userName} />
        <UserOutput userName = {this.state.usernames[2].userName} />  */}

        {/* Assignment 2 */}
        {/* <Ass2Obj
          changed = {(event) => this.countCharacters(event)}
          content = {this.state.ass2content}
          length = {(this.state.charatersDisplayed)}
          />
        <ValidationComponent textLength = {this.state.charatersDisplayed} />
        {charComponents} */}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'I am a react app'));
  }
}

export default Radium(App);
