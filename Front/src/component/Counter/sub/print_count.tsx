import React from 'react'
import type { use_ts } from '../../../types/types';

const Print_Counter = ({counter} : use_ts) => {

    const contents = counter;

  return (
    <>
      <div>
        {contents}
      </div>
    </>
  )

}

export default Print_Counter