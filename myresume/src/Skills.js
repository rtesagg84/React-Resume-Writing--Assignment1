
import React from 'react'
function Skills({ skill }) {
    return (

        <React.Fragment>
            <ul>
            <li>{skill.text}</li>
            </ul> 
        </React.Fragment>
    )
}
export default Skills;
