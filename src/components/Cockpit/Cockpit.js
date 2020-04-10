import React, { useEffect } from 'react';
import classes from './cockpit.css';


const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // http request...
        setTimeout(() => {
            alert('Mano!!');
        }, 1000);
    }, [props.persons]);

    const assignedClasses = [];
    let btnClass = '';

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>

            <p className={assignedClasses.join(' ')}>This is really working!</p>

            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;