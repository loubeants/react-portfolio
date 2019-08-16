import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src='https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170807747/83958935-dark-skin-man-with-afro-avatar-icon-image-vector-illustration-design.jpg'
                                alt='avatar'
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Loubeants Celestin</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr styles={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsa reiciendis. Fugiat, dignissimos alias quos ducimus unde temporibus libero cupiditate magnam expedita veritatis facilis animi exercitationem, quam fugit commodi reiciendis?</p>
                        <hr styles={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>4822 Spring Lake dr. Apt. Charlotte, NC 28212</p>
                        <h5>Phone</h5>
                        <p>(917)770-6312</p>
                        <h5>Email</h5>
                        <p>Loubeants@gmail.com</p>
                        <hr styles={{ borderTop: '5px solid #833fb2', width: '50%' }} />

                    </Cell>


                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2013}
                            endYear={2015}
                            schoolName="Central Piedmont Community College"
                            schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi modi voluptates reprehenderit sapiente fugiat nam natus eum ab distinctio quos consectetur in expedita sequi, quasi repudiandae debitis magni non?"
                        />
                        <Education
                            startYear={2015}
                            endYear={2019}
                            schoolName="University Of North Carolina At Charlotte"
                            schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi modi voluptates reprehenderit sapiente fugiat nam natus eum ab distinctio quos consectetur in expedita sequi, quasi repudiandae debitis magni non?"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Boot Camp"
                            jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi modi voluptates reprehenderit sapiente fugiat nam natus eum ab distinctio quos consectetur in expedita sequi, quasi repudiandae debitis magni non?"
                        />

                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Boot Camp"
                            jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi modi voluptates reprehenderit sapiente fugiat nam natus eum ab distinctio quos consectetur in expedita sequi, quasi repudiandae debitis magni non?"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills/>






                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;
