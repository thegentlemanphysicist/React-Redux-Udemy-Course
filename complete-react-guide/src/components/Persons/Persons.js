import React, {Component} from 'react';

import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }
  componentWillMount() {
    console.log('[Person.js] Inside Conmponent will mount');
  }
  componentDidMount() {
    console.log('[Person.js] Inside Conmponent did mount');
  }
  
  render () {
    console.log('[Person.js] Inside Render');
    return this.props.persons.map((person,index) =>{
      return <Person 
      click = {() => this.props.clicked(index)}
      name = {person.name} 
      age = {person.age} 
      key = {person.id}
      changed = {(event) => this.props.changed(event,person.id)}
      />
    });
  }
}

  export default Persons;