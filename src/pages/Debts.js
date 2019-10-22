import React, { Component } from 'react'
import CustomersService from '../services/customers.service'
import { Link } from 'react-router-dom'

export default class DebtsPage extends Component {
  state = {
    debts: [{ name: 'Batatinha', description: 'Dívida de batatas' }]
  }
  constructor(props) {
    super(props)    
    this.service = new CustomersService()
  }

  async componentDidMount() {
    this.getCustomers()
  }

  async getCustomers() {
    const response = await this.service.getUsers()
    let names = []
    for (let i = 0; i < response.data.length; i++) {
      names.push(response.data[i].name)
    }
    this.setState(() => ({ customers: names }))
  }

  render() {
    return (
      <div>
        <h2>Dívidas</h2>
        {
          this.state.debts.map((item, index) => (
          <p key={index}>{item.name} - {item.description}</p>
          ))
        }
        <Link to='/add-debt'>Adicionar</Link>
      </div>
    )
  }
}