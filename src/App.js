import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'; // need to destructure because robots.js can contain multiple objects
import SearchBox from './SearchBox'; 
import './App.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // how to have dynamic updates to the robot states:
    // pass this listener into the searchbox and update from there
    // note that we have to use the anonymous function way to allow the reference of App to be saved in the function
    // if the fn is passed to SearchBox, the 'this' in the function may not refer to App anymore
    onSearchChange = (event) => {
        // update searchField
        this.setState({searchField: event.target.value});
    }

    render() {
        // filter robots
        const filteredRobots = this.state.robots.filter(
            robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        )
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;


// STATE vs PROPS
/**
 * props are attributes or constants fed to child properties
 * states come from the parents and are mutable
 */