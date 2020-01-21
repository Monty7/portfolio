import React, {Component} from 'react'
import Technologies from './technologies'

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
                        <i className="fab fa-git-square" id="git"></i>
                    </a>
                    <a href={this.props.liveLink} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-link" id="link"></i>
                    </a>
                </p>
            </div>
        </article>
        )
    }
}

export default ArticleProject