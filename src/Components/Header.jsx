import React from 'react';
import './Header.css';
import { ImSpoonKnife } from "react-icons/im";

function Header() {
  return (
    <div className="header">

    <br/>
     <div className='login'>
        <button>Login</button>
        <button>signup</button>
    </div>
    {/* <div className='spoon'>
    <ImSpoonKnife />
    </div> */}
    <div className='Recipe'>
        <div className='spoon'>
            <ImSpoonKnife />
        </div>
        <h1>Recipe Act ReactJs</h1>
        <p>Let's have fun building this app together...</p>
    </div>
    </div>
  );
}

export default Header;

