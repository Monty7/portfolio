import React, {Component} from 'react'
import Technologies from './technologies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class ArticleProject extends Component {
    
    render(){
        return(

        <article className="block">
            <div className="inner_img_block">
                <img alt={this.props.name}
                src={this.props.image} />
            </div>
            <div className="inner_text_block">
                <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
                    <h5>Technologies:</h5>
                    <ul>
                        <Technologies technologies={this.props.technologies} />
                    </ul>
            </div>
            <div className="links">
                <p>
                    <a href={this.props.gitLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fa fa-git-square" icon={faGitSquare} />
                    </a>
                    <a href={this.props.liveLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fa fa-link" icon={faLink} />
                        <i className="fas fa-link" id="link"></i>
                    </a>
                </p>
            </div>
        </article>
        )
    }
}

export default ArticleProject