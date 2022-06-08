import React from 'react';

function Error({error}) {
  return (
    <li className='error-message'>
      {error}
    </li>
  )
}

export default Error