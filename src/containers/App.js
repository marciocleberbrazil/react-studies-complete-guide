import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Marcio", age: 40 },
      { id: 2, name: "Nurgul", age: 32 },
      { id: 3, name: "Dejam", age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  swichNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 40 },
        { name: "Nurgul", age: 32 },
        { name: "Dejam", age: 28 }
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangeHandler = (event, personIndex) => {
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
    let persons = null;

    

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }
    
    return (
      <div className={classes.App}>
        
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />

        {persons}
      </div>
    );
  }
}

export default App;
