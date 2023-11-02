import React from 'react';

const Navbar = () => {

  return (
    <header>
      <main className="navbar">
        <a href={"/home"}>Home</a>
        <a href={"/contact"}>Contact</a>
        <a href={"/about"}>About</a>
        <a href={"/brands"}>Brands</a>
        <a href={"/services"}>Services</a>
      </main>
      <div>
        <button className="btn">Login</button>
        <button className="btn">SignUp</button>
      </div>
    </header>
  )
}

export default Navbar