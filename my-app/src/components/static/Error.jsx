import React from 'react';
import './styles.css'

function Error({error}) {
  return (
    <li className='error-message'>
      {error}
    </li>
  )
}

export default Error