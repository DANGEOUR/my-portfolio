import React from 'react'
function Navbar() {
  return (
    <nav className='nav'>
      <div className="logo">
        <h1 className='hover:cursor-pointer'><span className='text-yellow-600 font-bold  text-5xl'>S . </span><span className='text-white font-bold text-3xl hover:text-yellow-400'>Com</span></h1>
      </div>
      <div className="menu">
        <ul>
          <a href="#main">
            <li className="items hover:cursor-pointer hover:text-yellow-500 hover:underline home_ul">Home</li>
          </a>
          <a href="#service">
            <li className="items hover:cursor-pointer hover:text-yellow-500 hover:underline">About</li>
          </a>
          <a href="#tech">

            <li className="items hover:cursor-pointer hover:text-yellow-500 hover:underline">Skills</li>
          </a>
          <a href="#projects">

            <li className="items hover:cursor-pointer hover:text-yellow-500 hover:underline">Projects</li>
          </a>
        </ul>

      </div>
      <div className="btn hover:cursor-pointer p-5">
        <a href="./shaheer"><span className='text-xl text-yellow-500'>Get</span>  Cv</a>

      </div>
    </nav>
  )
}

export default Navbar



