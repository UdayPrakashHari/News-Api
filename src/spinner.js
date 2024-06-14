import React from 'react'
import Spinner from './spinner2.gif';
import './spinner.css';

const spinner = () => {
  return (
    <div className='spinner'><img src={Spinner} alt='download' /></div>
  )
}

export default spinner