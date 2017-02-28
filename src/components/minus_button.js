import React from 'react';

const MinusButton = ({count, decreaseCount}) => {
  return(
    <button onClick={() => decreaseCount(count - 1)}>-</button>
  )
}

export default MinusButton;
