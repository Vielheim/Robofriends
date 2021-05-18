import React from 'react';

// manages children. wrap in a div and add styling where needed
const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'1px solid black', height:'500px'}}>
            {props.children};
        </div>
    )
}

export default Scroll;

// what <div style= {{}}> means:
// style = {} allows us to use JSX/javascript syntax in there
// and the additional {} means we are writing an object in there