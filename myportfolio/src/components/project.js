import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }


    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} styles={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '176px', background:
                            'url(https://www.brihaspatitech.com/wp-content/uploads/2017/01/Node-Js-Development.png)'
                    }}>Node Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum laboriosam nobis est totam natus dolorem illum placeat? Delectus facilis fugiat nostrum explicabo.
</CardText>

                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Python</h1></div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div><h1>This is Java</h1></div>
            )
        }

    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>NODE.JS</Tab>
                    <Tab>REACT</Tab>
                    <Tab>MONGODB</Tab>
                    <Tab>PYTHON</Tab>
                    <Tab>JAVA</Tab>
                </Tabs>

                <section className="project-grid">
                    <Grid className="project-grid"></Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </section>
            </div>
        )
    }
}

export default Project;