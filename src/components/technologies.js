import React from 'react'

const Technologies = (props) => {
    let allTech = props.technologies.map((tech, index) => <li key={index}>{tech}</li>)
    return(
        <ul>
            {allTech}
        </ul>
    )
}

export default Technologies