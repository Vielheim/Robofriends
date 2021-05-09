// convention, React Components are capitalised

import React, {Component} from 'react'; // destructuring, can use Component straight in code
import './Hello.css';

class Hello extends Component {
    // default function is render
    render() {
        return (
            // JSX: allows us to write HTML-like syntax in JS
            // className is used instead of class 
            // {this.props.} --> placeholder to access properties
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}

export default Hello;
