import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);

        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();

        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                
                 {this.context.authenticated ? <p>Authenticated</p> : <p>Log in</p>}
                
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    defaultValue={this.props.name}
                    ref={this.inputElementRef} />
            </Fragment>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);