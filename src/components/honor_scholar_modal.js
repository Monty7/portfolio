import React, {Component} from 'react'

const HonorsScholars = () => {
    return (
        <div class="modal fade" id="honors_scholars" tabindex="-1" role="dialog" aria-labelledby="honors_scholarsLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="honors_scholarsLabel">Honors Scholars Animation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <div id="main-container">
                        <div id="main" class="wrapper clearfix">
                                
                            <h3>Bringing Together the Best Minds</h3>
                            {/*<!-----------------------------------------ANIMATION BEGINS HERE----------------------------------------------------------------------------------------------------------->*/}
                            
                            {/*<!-- Images STARTS-->*/}
                            <div class="container-fluid honors_scholars">
                            <div class="container_sch" style="position: relative; width: 450px;">
                                <div class="firstDiv images" style="position: relative; z-index: 1; display: inline-block; width: 112px; float: left; margin: 0;"><img class="noimgborder" height="137" src="honors_scholars_ani/images/John-Abramic.jpg" style="margin: 0;" width="112" /></div>
                                <div class="secondDiv images" style="position: relative; z-index: 1; display: inline-block; width: 112px; float: left; margin: 0;"><img class="noimgborder" height="137" src="honors_scholars_ani/images/Rachel-Moran.jpg" style="margin: 0;" width="112" /></div>
                                <div class="thirdDiv images" style="position: relative; z-index: 1; display: inline-block; width: 112px; float: left; margin: 0;"><img class="noimgborder" height="137" src="honors_scholars_ani/images/Darrin-Halcomb.jpg" style="margin: 0;" width="112" /></div>
                                <div class="fourthDiv images" style="position: relative; z-index: 1; display: inline-block; width: 112px; float: left; margin: 0; left: 0px;"><img class="noimgborder" height="137" src="honors_scholars_ani/images/Marjorie-Baltazar.jpg" style="margin: 0;" width="112" /></div>
                            </div>
                            {/*<!-- Images ENDS--> */}
                            
                            {/*<!-- First_text STARTS -->*/}
                            <div class="first_Q quotes" style="display: none; position: relative; font-size: 11px;">
                                <p class="quotes_p" style="position: absolute; left: 130px; width: 310px; z-index: 2;"><span class="name" style="font-weight: bold;">JOHN ABRAMIC '01 </span><br />
                                <span class="text bio_txt" style="position: absolute;"><br />
                                &ldquo;Beyond financial support, the program offers plenty of academic rigor: Honors Scholars work together on challenging research projects and collaborate with their faculty mentors and the dean on a range of legal scholarship.&rdquo;
                                    <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 56px; font-size: 11px;">biographical information</a>
                                    <a class="close_q" href="#" style="color: red; font-size: 11px; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none;">X&nbsp;CLOSE</a>
                                </span>
                                <span class="text q_txt" style="display: none; position: absolute; font-size: 9.5px;">Partner, Steptoe &amp; Johnson, LLP<br />
                                Honors paper: <span style="font-style: italic;">Thomson and Finnigan: Requiring the Corroboration of a Disinterested Witness' Testimony That Is Offered to Invalidate a Patent?</span><br />
                                Member, <span style="font-style: italic;">Chicago-Kent Law Review</span>.<br />
                                B.S. with honors, chemical engineering, Illinois Institute of Technology.<br />
                                Collegiate baseball player; graduated second in law school class.
                                <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 110px; right: 70px; font-size: 12px !important;">quote</a>
                                <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 110px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a>
                                </span>
                                </p>
                            </div>
                            {/*<!-- Second_text STARTS -->*/}
                            <div class="second_Q quotes" style="display: none; font-size: 11px; position: relative; width: 337px; z-index: 2;">
                                <p class="quotes_p" style="position: absolute; left: 137px; width: 310px;">
                                <span class="name" style="font-weight: bold;">RACHEL MORAN '08</span><br />
                                <span class="text bio_txt" style="position: absolute;">&ldquo;During law school, I had challenging opportunities outside the classroom, from interning with the Department of Justice, to working with self-represented litigants at the county courthouse, to researching privacy issues relating to New York's mandatory diabetes registry with Dean Krent.&rdquo;
                                    <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 56px; font-size: 11px;">biographical information</a>
                                    <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a>
                                </span>
                                <span class="text q_txt" style="display: none; position: absolute; font-size: 9.5px;">Assistant appellate defender, Office of the Illinois State Appellate Defender.<br />
                                Co-champion and Best Oral Advocate, 2008 National Moot Court Competition and 2008 National Ethics Trial Competition.<br />
                                Member, <span style="font-style: italic;">Chicago-Kent Law review</span>.<br />
                                B.A.,summa cum laude, political science, Houghton College.<br />
                                Summer internships: U.S. Army JAG Corps and U.S. Department of Justice.
                                    <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 70px; font-size: 11px;">quote</a>
                                    <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a>
                                </span>
                                </p>
                            </div>
                            {/*<!--Third_text STARTS -->*/}
                            <div class="third_Q" style="display: none; font-size: 11px; position: relative;">
                                <p class="quotes_p" style="position: absolute; z-index: 2;"><span class="name" style="font-weight: bold;">DARRIN HALCOMB '07</span> <br />
                                <span class="text bio_txt" style="position: absolute; width: 310px;"><br />
                                &ldquo;I was in a Ph.D. program in economics before I worked for the Fed, so academics were important to me. Chicago-Kent's reputation convinced me it would be a good fit for law school.&rdquo;
                                <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 56px; font-size: 11px;">biographical information</a>
                                <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a>
                                </span>
                                <span class="text q_txt" style="display: none; position: absolute; width: 305px; font-size: 9.5px;">Counsel (banking), Skadden, Arps, Slate, Meagher &amp; Flom LLP.<br />
                                Honors paper: Defamation and Anonymity on the Web.<br />
                                Member, Chicago-Kent Law Review.<br />
                                B.A., economics, Northwestern University; M.A., economics, Indiana University Bloomington.<br />
                                Former associate economist and speechwriter, <br />
                                Federal Reserve Bank of Chicago 
                                <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 70px; font-size: 11px;">quote</a>
                                <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a>
                                </span>
                                </p>
                            </div>
                            {/*<!-- Fourth_text STARTS -->*/}
                            <div class="fourth_Q" style="display: none; font-size: 11px; position: relative; width: 332px; z-index: 2;">
                                <p class="quotes_p" style="position: absolute; width: 310px;"><span class="name" style="font-weight: bold;">MARJORIE BALTAZAR '05</span> <br />
                                <span class="text bio_txt" style="position: absolute;"><br />
                                &ldquo;Through the Honors Scholars program, I have built an outstanding network of Chicago Kent Faculty and Honors Scholars alumni. Their scholarly input and perspectives have been a tremendous resource throughout my career.&rdquo;
                                <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 56px; font-size: 11px;">biographical information</a>
                                <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a>
                                </span>
                                <span class="text q_txt" style="display: none; position: absolute; font-size: 9.5px;">Associate (immigration and nationality law), Sidley Austin LLP; practice centers on business immigration.<br />
                                Honors paper analyzed the effect of the retroactive application of federal legislation on immigrants' rights.<br />
                                B.S., cum laude, psychology, University of California, San Diego.<br />
                                Took Comparative Constitutional Law, taught by Justice Antonin Scalia, while studying abroad at the University of Nice, France. 
                                <a class="bio_quo_link" href="#" style="float: right; position: absolute; top: 105px; right: 70px; font-size: 11px;">quote</a>
                                <a class="close_q" href="#" style="color: red; float: right; position: absolute; top: 105px; right: 1px; text-decoration: none; font-size: 11px;">X&nbsp;CLOSE</a></span>
                                </p>
                            </div>
                            <p><em>Click a photo above to meet an Honors Scholar</em></p>
                        </div>

                    {/*<!-------------------------------HONOR SCHOLARS ANIMATION ENDS HERE----------------------------------->*/}
                            
                        </div> {/*<!-- #main -->*/}
                        </div> {/*<!-- #main-container -->*/}

                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
    )
}

