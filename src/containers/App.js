import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots'; // need to destructure because robots.js can contain multiple objects
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
import {connect} from 'react-redux';

import {requestRobots, setSearchField} from "../actions";

// we will take state.searchRobots.searchField
// and pass it as a props into App
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// dispatch is what triggers the action
// and used to send actions
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) // works only with redux-thunk middleware
    }
}
// redux thunk middleware will catch actions that return functions

class App extends Component {

    // order of execution: 
    // constructor
    // componentMount
    // render
    // componentDidMount

    // with redux, we don't need searchField anymore
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: []
    //     }
    // }

    componentDidMount() {
        // update the state of robots here
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users}));

        // fetch does http fetch
        // when there is a change to state/virtual DOM, render() will be executed again

        // redux:
        this.props.onRequestRobots();
    }

    // we don't need onSearchChange with redux now
    // how to have dynamic updates to the robot states:
    // pass this listener into the searchbox and update from there
    // note that we have to use the anonymous function way to allow the reference of App to be saved in the function
    // if the fn is passed to SearchBox, the 'this' in the function may not refer to App anymore
    // onSearchChange = (event) => {
    //     // update searchField
    //     this.setState({searchField: event.target.value});
    // }

    render() {
        const {searchField, onSearchChange, isPending, robots} = this.props;
        // filter robots
        const filteredRobots = robots.filter(
            robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
        )
        if (isPending) {
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
}

// connect is a higher order function
// takes App and then exports
export default connect(mapStateToProps, mapDispatchToProps)(App);


// STATE vs PROPS
/**
 * props are attributes or constants fed to child properties
 * states come from the parents and are mutable
 */