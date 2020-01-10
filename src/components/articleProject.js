import React, {Component} from 'react'


class ArticleProject extends Component {


    renderTechnologies(props){
         props.technologies.map(technology => {
             return (<li>technology</li>)
         })
    }

    render(props){



        return(
        <article class="block">
        <div class="inner_img_block">
            <img src="honors_scholars_ani/images/honors_scholars.jpg" />
        </div>
        <div class="inner_text_block">
            <h4>{props.name}</h4>
        <p>{props.description}</p>
                <h5>Technologies:</h5>
                <ul>
                    {this.renderTechnologies}
                    <li>HTML/CSS</li>
                    <li>Ingeniux</li>
                    <li>Jquery</li>
                    <li>Green Sock</li>
                </ul>
        </div>
        <div class="links">
            <p>
                <a href="https://bitbucket.org/Monty777/chicago-kent/src/master/Honors_Scholars_Animation/" target="_blank">
                    <i class="fab fa-git-square" id="git"></i>
                </a>
                <a href="honors_scholars_ani/index.html" target="_blank" id="honors_scholars_link" data-toggle="modal" data-target="#honors_scholars">
                    <i class="fas fa-link" id="link"></i>
                </a>
            </p>
        </div>
    </article>
        )
    }
}

export default ArticleProject