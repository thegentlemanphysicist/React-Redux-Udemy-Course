import React from 'react';

import classes from './Cockpit.css';
const cockpit = (props) => {

  const assignedClasses = [];
  let btnClasss = '';
  if (props.showPersons) {
    btnClasss = classes.Red;
  }
  if (props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.appTitle }</h1>
      <p className={assignedClasses.join(' ')}> This is really working!</p>
      <button 
        className={btnClasss}
        onClick={props.clicked}
      >Toggle Persons</button>
    </div>
  );
}

export default cockpit;



        // {/* Assignment 1      */}
        // {/* <UserInput 
        //   changed ={this.userNameHandler}
        //   name = {this.state.usernames[2].userName} >
        // </UserInput>
        // <UserOutput userName = {this.state.usernames[0].userName} />
        // <UserOutput userName = {this.state.usernames[1].userName} />
        // <UserOutput userName = {this.state.usernames[2].userName} />  */}

        // {/* Assignment 2 */}
        // {/* <Ass2Obj
        //   changed = {(event) => this.countCharacters(event)}
        //   content = {this.state.ass2content}
        //   length = {(this.state.charatersDisplayed)}
        //   />
        // <ValidationComponent textLength = {this.state.charatersDisplayed} />
        // {charComponents} */}
   