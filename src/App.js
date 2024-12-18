import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import React, {Component} from 'react';

class App extends Component {
    constructor() {
      super();
      this.state = { status: true }
    }

    toggleMounting = () => {
      this.setState({ status: !this.state.status })
    }

    render() {
      return (
        <>
          <button onClick={this.toggleMounting}>Toggle Mounting</button>
          <br />
          {this.state.status && <Counter />}

          <Timer />
        </>
      )
    }
}

export default App;
