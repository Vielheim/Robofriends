import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots'; // need to destructure because robots.js can contain multiple objects
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {

    // order of execution: 
    // constructor
    // componentMount
    // render
    // componentDidMount

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // update the state of robots here
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));

        // fetch does http fetch
        // when there is a change to state/virtual DOM, render() will be executed again
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
        if (this.state.robots.length === 0) {
            return <h1 className='f1 tc'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends!</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll> 
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
        // Scroll: scroll makes the cardlist of filtered robots scrollable
    }
}

export default App;


// STATE vs PROPS
/**
 * props are attributes or constants fed to child properties
 * states come from the parents and are mutable
 */