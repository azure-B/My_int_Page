import React from 'react'
import type { use_ts } from '../../../types/types';

export default function Up_Button( {counter, setCounter} : use_ts) {
  return (
    <>
      <div>
        <button onClick={()=>setCounter?.(counter+1)}> Count + 1 </button>
        <button onClick={()=>setCounter?.(counter-1)}> Count - 1 </button>
      </div> 
    </>
    )
}
