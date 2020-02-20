import React, {Component} from 'react'
import SectionName from './sectionNames'
import Technologies from './technologies'
import ProjectLinks from './links'



class ArticleProject extends Component {
    
    
    render(){
       
        const projectProperties = this.props.projects.map((project, index) => {
            
            return (
            <article className="block">
                <div className="inner_img_block">
                    <img alt={project.name} src={project.image} />
                </div>
                <div className="inner_text_block">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <h5>Technologies:</h5>
                    <ul>
                        <Technologies technologies={project.technologies} />
                    </ul>
                </div>
                <ProjectLinks gitLink={project.gitLink} liveLink={project.liveLink} />
            </article>
            )}
        )
        return(
            
            <div className="projectRow">
                <SectionName orgName={this.props.orgName}/>
                {projectProperties}
              
            </div>
        )
    }
}

export default ArticleProject