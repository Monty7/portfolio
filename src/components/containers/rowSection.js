import React from 'react'

import ArticleProject from '../articleProject'
import ArticlesText from '../../projects.js'

const renderAllRowArticles = ArticlesText.Org.map((org, index) => ( <ArticleProject key={index} projects={org.projects} orgName={org.name} /> )
    )

const RowSection = () => {

    return (
        <section id="wrapper">

           {renderAllRowArticles}
         
        </section>
    )
}

export default RowSection