import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <NavLink to="/debts" activeClassName="is-active" exact={true}>Dívidas</NavLink>
    <span> | </span>
    <NavLink to="/add-debt" activeClassName="is-active" exact={true}>Adicionar Dívidas</NavLink>
    <span> | </span>
    <NavLink to="/customers" activeClassName="is-active" exact={true}>Clientes</NavLink>
  </div>
)

export default Header