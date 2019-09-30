import React from 'react';
function Skills({ skill }) {
    return (
        <ul>
            <li>{skill.text}</li>
        </ul>
        // You don't need the fragment here. The UL is the one enclosing parent element
        // Also you can use <> </> as fragments instead of writing it out. :)
    )
};

export default Skills;

// Nice job doing a functional component!!