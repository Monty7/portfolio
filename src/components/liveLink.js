import React from 'react'
import {Route, Link} from "react-router-dom"
import PDFViewer from './PDFViewer/PDFViewer'
import PDFJSBackend from '../backends/pdfjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const LiveLink = (props) => {
    {/*<Link to={<PDFViewer backend={PDFJSBackend} src='/CK-wireframe.pdf' />} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="fa fa-link" icon={faLink} /> </Link>*/}
    if(props.liveLink === "/CK-wireframe-full.pdf"){
    return( <Link to='/wireframe'>
                <FontAwesomeIcon className="fa fa-link" icon={faLink} />
            </Link>
        )
    }else{
        return(
            <Link to={props.liveLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa fa-link" icon={faLink} />
            </Link>
        )
    }

}

export default LiveLink