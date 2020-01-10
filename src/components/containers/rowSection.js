import React from 'react'
import ArticleProject from '../articleProject'

const articlesText = [
    {
        name: "Honors Scholars Animation",
        description: "An animation for marketing Chicago-Kent's Honor Scholars program.  The animation feature was displayed on the old version of the website.",
        technologies: ['HTML/CSS', 'Ingeniux', 'JQuery', 'Green Sock']
    },
    {
        name: "GPA Calculator",
        description: "Originally created in Vanilla JavaScript by a different author on the old version of the website.  I re-created the GPA calculator using Jquery to be cross-compatible for browsers on the new website.",
        technologies: ["HTML/CSS/BootStrap", "JQuery", "Drupal"]
    },
    {
        name: "Intellectual Property Modal",
        description: "Created a partial modal to serve as a central portal for all of the different components of Chicago-Kent's Intellectual Property Law certficate program marketed towards prospective students.",
        technologies: ["HTML/CSS/Bootstrap", "JQuery", "Drupal"]
    },
    {
        name: "Chicago-Kent New Website Wireframe",
        description: "Created a wireframe for the home page of Chicago-kent's new website that launched September 2017 for the web development team in the main campus to reference.  There have been a few slight changes to the structure but most elements from the wireframe were inplemented.",
        technologies: ["Adobe Photoshop"]
    }
]

const renderAllRowArticles = () => {
    articlesText.map(article =>{
        <articleText name={article.name} description={article.description} technologies={article.technologies}/>
    })
}

const RowSection = () => {

    return (
        <section>
           {renderAllRowArticles()}
        </section>
    )
}

export default RowSection