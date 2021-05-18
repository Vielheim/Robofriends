import React from 'react';

// Card can accept parameters: properties of the Component
// destructuring for easier usage
const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

// robohash: basically a web API that generates random images of robots
// ?200x200 fixes the size to 200px by 200px

// outer div: using tachyons classes: 
// tc: text centralised, light green backgrounds, dib (forgot), 
// br = border, pa = padding, ma = margins, grow = animation,
// bw2 = border weight, shadows

// to put JS syntax inside the HTML/JSX part, need to wrap in curly brackets
// same for the src part, have to wrap in curly braces, then the `` for placeholders (template strings)

export default Card;