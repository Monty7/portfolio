import React from 'react'


const SectionName = (props) => {
    return(
        <div className={`${props.orgName} project_name`} >
            <h2>{props.orgName}</h2>
           
        </div>
    )
}

export default SectionName