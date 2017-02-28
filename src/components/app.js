import React, { Component } from 'react';
import Counter from './counter';
import PlusButton from './plus_button';
import MinusButton from './minus_button';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {count: 0};
  }
  render() {

    return (
      <div>
        <Counter count={this.state.count} />
        <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>
        <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({count})}/>
      </div>
    );
  }
}

export default App;
