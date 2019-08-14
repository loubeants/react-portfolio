import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{Width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                <img src='https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170807747/83958935-dark-skin-man-with-afro-avatar-icon-image-vector-illustration-design.jpg'
                alt='avatar'
                className='avatar-img'
                />


                <div className='banner-text'>
                <h1>Full Stack Web Developer</h1>

                <hr/>

                <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Python | Java | MySQL | MongoDB</p>

                <div className='social-links'>

                    {/*Linkedin*/}
                    <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                    </a>

                    {/*Freecodecamp*/}
                    <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                    </a>

                    {/*GitHub*/}
                    <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-github-square"  aria-hidden="true"/>
                    </a>

                </div>
                </div>
                </Cell>

            </Grid>

            </div>
        )
    }
}

export default Landing;
