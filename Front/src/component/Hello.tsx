import React from 'react'
import type { use_ts } from '../types/types';


const Hello = ({example} : use_ts) => {

    const contents = example;

  return (
    <div>
        {contents}
    </div>
  )

}

export default Hello