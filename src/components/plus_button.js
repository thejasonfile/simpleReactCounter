import React from 'react';

const PlusButton = ({count, increaseCount}) => {
  return(
    <button onClick={() => increaseCount(count + 1)}>+</button>
  )
};

export default PlusButton;
