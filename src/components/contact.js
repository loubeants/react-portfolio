import React, { Component } from 'react';
import { Grid, List, ListItem, Cell, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}> <h2>Loubeants Celestin</h2>
                        <img src='https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170807747/83958935-dark-skin-man-with-afro-avatar-icon-image-vector-illustration-design.jpg'
                            alt='avatar'
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum laboriosam nobis est totam natus dolorem illum placeat? Delectus facilis fugiat nostrum explicabo.</p>

                    </Cell>
                    <Cell col={6}> <h2> Contact Me</h2>
                        <hr />

                        <div className= 'contact-list'> 

                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px',fontFamily:'Merriweather'}}>
                                    <i className='fa fa-phone-square' aria-hidden= 'true'/>
                                    (917) 770-6312
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px',fontFamily:'Merriweather'}}>
                                    <i className='fa fa-envelope' aria-hidden= 'true'/>
                                    Loubeants@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px',fontFamily:'Merriweather'}}>
                                    <i className='fa fa-fax' aria-hidden= 'true'/>
                                    (917) 770-6312
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px',fontFamily:'Merriweather'}}>
                                    <i className='fa fa-skype' aria-hidden= 'true'/>
                                    MySkypeId
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>

                        </div>

                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Contact;
