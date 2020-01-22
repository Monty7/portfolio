import React from 'react'

import ArticleProject from '../articleProject'
import ImgWireframe from '../../img/CK-wireframe.jpg'
import ImgGPA from '../../img/GPA_Calc.jpg'
import ImgHS from '../../img/honors_scholars.jpg'
import ImgIP from '../../img/IP_modal.jpg'
import ImgTimeKeeper from '../../img/flatiron/timeKeeper.jpg'
import ImgGiftList from '../../img/flatiron/giftList.jpg'
import ImgNoteSaver from '../../img/flatiron/noteSaver.jpg'
const articlesText = { 
    Org: [
            {
            name: "Chicago-Kent",
            projects: [
                        {
                            name: "Honors Scholars Animation",
                            image: ImgHS,
                            description: "An animation for marketing Chicago-Kent's Honor Scholars program.  The animation feature was displayed on the old version of the website.",
                            technologies: ['HTML/CSS', 'Ingeniux', 'JQuery', 'Green Sock'],
                            gitLink: "https://github.com/Monty7/HonorsS_Animation",
                            liveLink: "https://monty7.github.io/HonorsS_Animation/"
                        },
                        {
                            name: "GPA Calculator",
                            image: ImgGPA,
                            description: "Originally created in Vanilla JavaScript by a different author on the old version of the website.  I re-created the GPA calculator using Jquery to be cross-compatible for browsers on the new website.",
                            technologies: ["HTML/CSS/BootStrap", "JQuery", "Drupal"],
                            gitLink: "https://github.com/Monty7/GPA_CALCULATOR",
                            liveLink: "https://monty7.github.io/GPA_CALCULATOR"
                        },
                        {
                            name: "Intellectual Property Modal",
                            image: ImgIP,
                            description: "Created a partial modal to serve as a central portal for all of the different components of Chicago-Kent's Intellectual Property Law certficate program marketed towards prospective students.",
                            technologies: ["HTML/CSS/Bootstrap", "JQuery", "Drupal"],
                            gitLink: "https://bitbucket.org/Monty777/chicago-kent/src/master/IP-modal/",
                            liveLink: "https://www.kentlaw.iit.edu/about/intellectual-property-law#box_ip_patent_hub"
                        },
                        {
                            name: "Chicago-Kent New Website Wireframe",
                            image: ImgWireframe,
                            description: "Created a wireframe for the home page of Chicago-kent's new website that launched September 2017 for the web development team in the main campus to reference.  There have been a few slight changes to the structure but most elements from the wireframe were inplemented.",
                            technologies: ["Adobe Photoshop"],
                            gitLink: "",
                            liveLink: "/img/CK-wireframe.pdf"
                        }
                    ]
                },
                {
                name: "Flatiron Projects",
                projects: [
                            {
                                name: "Time Keeper",
                                image: ImgTimeKeeper,
                                description: "An application that tracks time within a span of a month.",
                                technologies: ['HTML/CSS', 'Ruby On Rails', 'React', 'Redux'],
                                gitLink: "https://github.com/Monty7/timekeeper_react_frontend",
                                liveLink: "https://timekeeper-react.netlify.com/"
                            },
                            {
                                name: "Note Saver",
                                image: ImgNoteSaver,
                                description: "An application that save a user notes.",
                                technologies: ['Ruby', 'Sinatra'],
                                gitLink: "https://github.com/Monty7/Note_saver",
                                liveLink: "https://note-saver-heroku.herokuapp.com/"
                            },
                            {
                                name: "Gift List",
                                image: ImgGiftList,
                                description: "An application that allows a user to create a gift list and view other gift lists to potential purchase for other people.",
                                technologies: ['Ruby', 'Ruby On Rails', 'Bootstrap'],
                                gitLink: "https://github.com/Monty7/my_gift_list",
                                liveLink: "https://gift-list-heroku.herokuapp.com/"
                            }                           
                    ]
                }
            ]
}

const renderAllRowArticles = articlesText.Org.map((org, index) => ( <ArticleProject key={index} projects={org.projects} orgName={org.name} /> )
    )

const RowSection = () => {

    return (
        <section id="wrapper">

           {renderAllRowArticles}
         
        </section>
    )
}

export default RowSection