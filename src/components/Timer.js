import React, {Component} from 'react'

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 0
        }
    }

    tick = () => {
        this.setState({seconds: this.state.seconds + 1});
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        console.log("timer updated");
    }

    stopTimer = () => {
        clearInterval(this.id);
    }

    render() {
        return (
            <>
                <h1>{this.state.seconds}</h1>
                <button onClick={this.stopTimer}>Stop Timer</button>
            </>
        )
    }
}

export default Timer;