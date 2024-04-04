import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
// import Flavanoids from './Flavanoids';
// import Gamma from './Gamma';

const Header = (props) => {
  // const { setAction } = props;
  return (
    <div className='Header-Content'>
      <div>
        <Link className='Links' to='/Flavanoids'>Flavanoids Table</Link>
      </div>
      <div>
        <Link className='Links' to='/Gamma'>Gamma Table</Link>
      </div>
    </div>
  )
}

export default Header;