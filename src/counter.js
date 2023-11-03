import React from 'react';

const Counter = () => {
  const [number, setNumber] = React.useState(0);
  const increment = () => {
    setNumber(number+1);
  }
  const decrement = () => {
    setNumber(number-1);
  }
  return (
    <div >
    <p className='number'>{number}</p>
    <button onClick={increment}>increase the number</button>
    <button onClick={decrement}>decrease the number</button>
    </div>
  )
}

export default Counter