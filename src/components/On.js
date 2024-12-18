import React from 'react'

class On extends React.Component{
    constructor() {
        super();
        this.state = {
            isOn : true
        }
    }

    toggleBtn = () => {
        this.setState({
            isOn: !this.state.isOn
        }) 
    }

    render() {
        return (
            <button onClick={this.toggleBtn}>
                {this.state.isOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default On;