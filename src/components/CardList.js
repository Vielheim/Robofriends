import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error("EERRROOOOORRRR");
    // }
    // for React, we need to provide a key={id} each time
    // for DOM manipulation so that under the hood, they know which Card is added/removed and can update easily
    // best if key is something that is unique, like id
    return (
        <div>
            { // JS syntax
                robots.map(
                    (user, idx) => {
                        return (<Card 
                            key={robots[idx].id} 
                            id={robots[idx].id} 
                            name={robots[idx].name} 
                            email={robots[idx].email}
                            />)
                    }
                )
            }
        </div>
    )
}

export default CardList;