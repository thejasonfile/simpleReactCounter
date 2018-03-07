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
    const { count } = this.state;
    return (
      <div>
        <Counter count={count} />
        <PlusButton count={count} increaseCount={(count) => this.setState(() => ({ count }))}/>
        <MinusButton count={count} decreaseCount={(count) => this.setState(() => ({ count }))}/>
      </div>
    );
  }
}

export default App;
