import React from 'react';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            branch: 'CSE'
        }
    }

    render() {
        return (
            <section>
                <h1>This is class component</h1>
                <p>The name is: {this.state.username}</p>
                <p>Branch: {this.state.branch}</p>
            </section>  
        )
    }
}

export default First;