import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const ProjectLinks = (props) => {

    return(
        <div className="links">
            <p>
                <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa fa-git-square" icon={faGitSquare} />
                </a>
                <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa fa-link" icon={faLink} />
                </a>
            </p>
        </div>
    )
}

export default ProjectLinks

