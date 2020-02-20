import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const ProjectLinks = (props) => {
    console.log(props.liveLink)
    if(props.liveLink === "//drive.google.com/open?id=1Xf0uFXgqrD_gknIkxsXrhWGMs-NYlaDi"){
        return(
            <div className="links">
                <p>    
                    <Link to={props.liveLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fa fa-link" icon={faLink} />
                    </Link>
                </p>
            </div>
        )
    } else {
        return (
            <div className="links">
                <p>
                    <Link to={props.gitLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fa fa-git-square" icon={faGitSquare} />
                    </Link>
            
                    <Link to={props.liveLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fa fa-link" icon={faLink} />
                    </Link>
                </p>
            </div>
        )
    }
}



export default ProjectLinks

