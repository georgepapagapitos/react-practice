import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const link = {
    padding: '5px'
  }

  return (
    <header>
      <nav>
        <NavLink style={link} to="/" activeClassName="home">Home</NavLink>
        <NavLink style={link} to="/counter" activeClassName="counter">Counter</NavLink>
        <NavLink style={link} to="/form" activeClassName="form">Form</NavLink>
        <NavLink style={link} to="/posts" activeClassName="posts">Posts</NavLink>
        <NavLink style={link} to="/upload" activeClassName="upload">Upload</NavLink>
      </nav>
    </header>
  )
}
