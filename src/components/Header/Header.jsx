import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const link = {
    padding: '5px',
    textDecoration: 'none'
  }

  return (
    <header>
      <nav>
        <NavLink style={link} exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink style={link} to="/counter" activeClassName="selected">Counter</NavLink>
        <NavLink style={link} to="/form" activeClassName="selected">Form</NavLink>
        <NavLink style={link} to="/posts" activeClassName="selected">Posts</NavLink>
        <NavLink style={link} to="/upload" activeClassName="selected">Upload</NavLink>
        <NavLink style={link} to="/tweet" activeClassName="selected">Tweet</NavLink>
      </nav>
    </header>
  )
}
