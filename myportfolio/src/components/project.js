import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }


    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is Node.js</h1></div>
      )
    }else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is React</h1></div>
            )
    }else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is MongoDB</h1></div>
            )
    }else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is Python</h1></div>
            )
    }else if(this.state.activeTab === 4) {
        return(
            <div><h1>This is Java</h1></div>
        )
    }

    }
    render() {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
              <Tab>NODE.JS</Tab>
              <Tab>REACT</Tab>
              <Tab>MONGODB</Tab>
              <Tab>PYTHON</Tab>
              <Tab>JAVA</Tab>
            </Tabs>

            <section className="project-grid">
                {this.toggleCategories()}
            </section>
            </div>
        )
    }
}

export default Project;