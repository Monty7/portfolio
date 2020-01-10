import React, {Component} from 'react'


class ArticleProject extends Component {

    render(){
        return(
        <article class="block">
        <div class="inner_img_block">
            <img src="honors_scholars_ani/images/honors_scholars.jpg" />
        </div>
        <div class="inner_text_block">
            <ArticleText technologies={['HTML/CSS', 'Ingeniux', 'JQuery', 'Green Sock']}/>
            <h4>Honors Scholars Animation</h4>
                <p>An animation for marketing Chicago-Kent's Honor Scholars program.  The animation feature was displayed on the old version of the website.</p>
                <h5>Technologies:</h5>
                <ul>
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