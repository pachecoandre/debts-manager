import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <NavLink to="/groceries" activeClassName="is-active" exact={true}>Compras</NavLink>
    <span> | </span>
    <NavLink to="/customers" activeClassName="is-active" exact={true}>Clientes</NavLink>
  </div>
)

export default Header