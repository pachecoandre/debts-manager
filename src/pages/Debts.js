import React, { Component } from 'react'
import CustomersService from '../services/customers.service'
import Dropdown from '../components/Dropdown'
import Table from '../components/Table'
import EditModal from '../components/EditModal'

export default class DebtsPage extends Component {
  state = {
    customers: [],
    debts: [],
    debtUnderEdition: undefined
  }

  constructor() {
    super()
    this.service = new CustomersService()
  }

  componentDidMount() {
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

  handleDeleteDebt = (debtToRemove) => {
    this.setState((prevState) => ({
      debts: prevState.debts.filter((item) => item.id !== debtToRemove)
    }))
  }

  handleEditDebt = (debtToEdit) => {
    this.setState(() => {
      return ({ debtUnderEdition: debtToEdit })})
  }

  handleSaveChanges = (e) => {
    e.preventDefault()
    const customerName = this.state.debtUnderEdition.name
    const description = e.target.elements.description.value.trim()
    const value = e.target.elements.value.value
    this.setState((prevState) => ({
      debts: prevState.debts.map((item) => {
        if (item.id === this.state.debtUnderEdition.id) {
          item = { ...item, name: customerName, description, value }
        }
        return item
      }),
      debtUnderEdition: undefined
    }))
  }

  handleClearDebtUnderEdition = () => {
    this.setState(() => ({ debtUnderEdition: undefined }))
  }

  handleNewDebt = (e) => {
    e.preventDefault()
    const customerName = e.target.elements.customerName.value
    const description = e.target.elements.description.value.trim()
    const value = e.target.elements.value.value
    const debt = {
      id: this.state.debts.length + 1,
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

  render() {
    return (
      <div>
        <h2>Compras</h2>
        <form onSubmit={this.handleNewDebt}>
          <div className='inputbar'>
            Cliente
            <Dropdown customers={this.state.customers} inputName="customerName" />
            <input type="text" name="description" placeholder="Descrição"></input>
            <input type="number" name='value' placeholder="Valor" step="any" required></input>
            <button>Adicionar</button>
          </div>
        </form>
        <br />
        <Table
          debts={this.state.debts}
          handleDeleteDebt={this.handleDeleteDebt}
          handleEditDebt={this.handleEditDebt}
          handleClearDebtUnderEdition={this.handleClearDebtUnderEdition}
        />
        {this.state.debts.length > 0 ? '' : (<i>Nenhuma compra cadastrada</i>)}
        <EditModal
          customers={this.state.customers}
          handleSaveChanges={this.handleSaveChanges}
          debtUnderEdition={this.state.debtUnderEdition} 
          handleClearDebtUnderEdition={this.handleClearDebtUnderEdition}>          
        </EditModal>
      </div>
    )
  }
}