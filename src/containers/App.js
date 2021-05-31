import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots'; // need to destructure because robots.js can contain multiple objects
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

function App() {

    // ------------------------- Not applicable for hooks ----------------------
    // order of execution: 
    // constructor
    // componentMount
    // render
    // componentDidMount

    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }

    // componentDidMount() {
    //     // update the state of robots here
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({robots: users}));

    //     // fetch does http fetch
    //     // when there is a change to state/virtual DOM, render() will be executed again
    // }
    // ---------------------------------------------------------------------------

    // robots is the state, setRobots updates the state
    const [robots, setRobots] = useState([]); // initial state of the object
    const [searchField, setSearchField] = useState("");

    // side effects: everytime react wants to render, it will also run the side effects
    // it receives a second argument: the empty list
    // without it, useEffect will keep running because render keeps getting called
    // then when render gets called, it will fetch again via useEffect. --> infinite loop
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []) // <- only run useEffect when the stuff inside this list changes

    // how to have dynamic updates to the robot states:
    // pass this listener into the searchbox and update from there
    // note that we have to use the anonymous function way to allow the reference of App to be saved in the function
    // if the fn is passed to SearchBox, the 'this' in the function may not refer to App anymore
    const onSearchChange = (event) => {
        // update searchField
        setSearchField(event.target.value);
    }

    // filter robots
    const filteredRobots = robots.filter(
        robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
    )
    if (robots.length === 0) {
        return <h1 className='f1 tc'>Loading...</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends!</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll> 
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
    // Scroll: scroll makes the cardlist of filtered robots scrollable
}

export default App;


// STATE vs PROPS
/**
 * props are attributes or constants fed to child properties
 * states come from the parents and are mutable
 */