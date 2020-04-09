import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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

    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangeHandler(event, index)}>Test 01</Person></ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>

        <p className={assignedClasses.join(' ')}>This is really working!</p>
        
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;
