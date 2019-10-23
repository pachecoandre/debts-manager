import React, { Component } from 'react'
import CustomersService from '../services/customers.service'
import Dropdown from '../components/Dropdown'
import Table from '../components/Table'

export default class DebtsPage extends Component {
  state = {
    customers: [],
    debts: []
  }

  constructor() {
    super()
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

  handleNewGrocery = (e) => {
    e.preventDefault()
    const customerName = e.target.elements.customerName.value
    const description = e.target.elements.description.value.trim()
    const value = e.target.elements.value.value
    const debt = {
      id: this.state.debts.length,
      name: customerName,
      description,
      value
    }
    this.setState((prevState) => ({
      debts: prevState.debts.concat(debt)
    }))

    // clear inputs
    e.target.elements.description.value = ''
    e.target.elements.value.value = ''
  }

  handleDeleteGrocery = (groceryToRemove) => {
    this.setState((prevState) => ({
      debts: prevState.debts.filter((item) => item.id !== groceryToRemove)
    }))
  }

  render() {
    return (
      <div>
        <h2>Compras</h2>
        <form onSubmit={this.handleNewGrocery}>
          <div className='inputbar'>
            Cliente
            <Dropdown customers={this.state.customers} inputName="customerName" />
            <input type="text" name='description' placeholder="Descrição"></input>
            <input type="number" name='value' placeholder="Valor" step="any"></input>
            <button>Adicionar</button>
          </div>
        </form>
        <br />
        <Table debts={this.state.debts} handleDeleteGrocery={this.handleDeleteGrocery} />
      </div>
    )
  }
}