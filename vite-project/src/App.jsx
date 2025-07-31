import { useState } from 'react';

function MyButton({count, onClick}){
  

  return(
    <button onClick={onClick}>
      Click {count} times
    </button>
  )
}

export default function MyApp(){
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1);
  }

  return(
  <div>
      <h1>ボタンを押してね</h1>
    <MyButton count={count} onClick={handleClick} />

    <MyButton count={count} onClick={handleClick} />

  </div>
  )
}

