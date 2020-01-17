import React from 'react'
import ArticleProject from '../articleProject'

const articlesText = [
    {
        name: "Honors Scholars Animation",
        image: "honors_scholars_ani/images/honors_scholars.jpg",
        description: "An animation for marketing Chicago-Kent's Honor Scholars program.  The animation feature was displayed on the old version of the website.",
        technologies: ['HTML/CSS', 'Ingeniux', 'JQuery', 'Green Sock'],
        gitLink: "https://github.com/Monty7/HonorsS_Animation",
        liveLink: "https://monty7.github.io/HonorsS_Animation/"
    },
    {
        name: "GPA Calculator",
        image: "GPA_calc/img/GPA_Calc.jpg",
        description: "Originally created in Vanilla JavaScript by a different author on the old version of the website.  I re-created the GPA calculator using Jquery to be cross-compatible for browsers on the new website.",
        technologies: ["HTML/CSS/BootStrap", "JQuery", "Drupal"],
        gitLink: "",
        liveLink: ""
    },
    {
        name: "Intellectual Property Modal",
        image: "IP_modal/img/IP_modal.jpg",
        description: "Created a partial modal to serve as a central portal for all of the different components of Chicago-Kent's Intellectual Property Law certficate program marketed towards prospective students.",
        technologies: ["HTML/CSS/Bootstrap", "JQuery", "Drupal"],
        gitLink: "https://bitbucket.org/Monty777/chicago-kent/src/master/IP-modal/",
        liveLink: "https://www.kentlaw.iit.edu/about/intellectual-property-law#box_ip_patent_hub"
    },
    {
        name: "Chicago-Kent New Website Wireframe",
        image: "img/CK-wireframe.jpg",
        description: "Created a wireframe for the home page of Chicago-kent's new website that launched September 2017 for the web development team in the main campus to reference.  There have been a few slight changes to the structure but most elements from the wireframe were inplemented.",
        technologies: ["Adobe Photoshop"],
        gitLink: "",
        liveLink: ""
    }
]

const renderAllRowArticles = articlesText.map(article => ( <ArticleProject name={article.name} description={article.description} technologies={article.technologies}/> )
    )

const RowSection = () => {

    return (
        <section>
           
           {renderAllRowArticles}
         
        </section>
    )
}

export default RowSection