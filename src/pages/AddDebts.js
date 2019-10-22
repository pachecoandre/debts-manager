import React, { Component } from 'react'
import CustomersService from '../services/customers.service'
import Dropdown from '../components/Dropdown'

export default class DebtsPage extends Component {
  state = {
    customers: [],
    debts: []
  }

  constructor() {
    super()
    this.service = new CustomersService()
    console.log(this.state)
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

  handleNewDebt = (e) => {
    e.preventDefault()
    const customerName = e.target.elements.customerName.value
    const description = e.target.elements.description.value.trim()
    const debt = {
      name: customerName,
      description: description
    }
    console.log(debt)
    this.setState((prevState) => ({
      debts: prevState.debts.concat(debt)
    }))
  }

  render() {
    return (
      <div>
        <h2>Adicionar nova fruta</h2>
        <form onSubmit={this.handleNewDebt}>
          <div className='inputbar'>
            Frutas
          <Dropdown customers={this.state.customers} inputName="customerName" />
            Dívida
            <input type="text" name='description' placeholder="description"></input>
            <button>Adicionar</button>
          </div>
        </form>
        <br />
        {
          this.state.debts.map((item, index) => (
            <div key={index}>{item.name} - {item.description}</div>
          ))
        }
      </div>
    )
  }
}