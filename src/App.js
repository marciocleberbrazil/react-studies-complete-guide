import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, index)}>Test 01</Person>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
     <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

      {persons}
     </div>
    );
  }
}

export default App;
