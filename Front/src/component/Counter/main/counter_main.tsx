import React, {useState} from 'react'
import Print_Counter from '../sub/print_count'
import Control_Button from '../sub/control_button'

export default function Counter_Main() {

  const [counter, setCounter] = useState<number>(0);
  
  return (
    <>
        <Print_Counter counter={counter}/>
        <Control_Button counter={counter} setCounter={setCounter}/>
    </>
  )
}
