import React from 'react'

class Color extends React.Component {
    // state
    constructor() {
        super();
        this.state = {
            name: "Alex",
            age: 27
        }
    }

    updateColor = () => {
        this.setState({
            name: "Smith",
            age: 36
        })
    }
    
    render() {
        return (
            <>
                <h1>Hi! This is {this.state.name}. I am {this.state.age} years old</h1>
                <button onClick={(this.updateColor)}>Change</button>
            </>
        )
    }
}

export default Color;