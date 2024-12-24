import React, {Component, useState} from 'react'

class States extends Component {
    constructor() {
        super();
        this.state = {
            name: "Alex"
        }
        this.updateName = this.updateName.bind(this);
    }

    updateName() {
        this.setState({
            name: "Adam"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <button onClick={this.updateName}>Change Name</button>
            </>  
        )
    }
}

export default States;