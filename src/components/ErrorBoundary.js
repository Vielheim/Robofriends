// integrate error boundary into robofriends

import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // the try-catcher
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    // ideally, we want to use error boundary as a try-catch:
    // is some component fails, it will be caught
    // so error boundary will more likely be a wrapper (like scroll)
    render() {
        if (this.state.hasError) {
            return <h1>Error occured</h1>;
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary;

// if we throw error in cardlist, we will see the developmental error
// but for the end user they will see the <h1> error </h1>