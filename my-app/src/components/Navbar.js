import React from 'react'
import reactLogo from './Images/react.png'

export default function Navbar(){
    return (
<header>
        <nav>
          <div className="left">
            <img src={reactLogo} width="40px" alt="react" />
            <h1>React Facts</h1>
          </div>
          <h1 className= "right">React Course - Project 1</h1>
        </nav>
      </header>
    )
}

