import React from 'react';
import './styles.css'

function Error({error}) {
  return (
    <div className='error-message'>
      {error}
    </div>
  )
}

export default Error