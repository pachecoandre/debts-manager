import React, { Component } from 'react'
import CustomersService from '../services/customers.service'
import Dropdown from '../components/Dropdown'
import Table from '../components/Table'
import EditModal from '../components/EditModal'
import add from '../img/add.png'
import './Debts.css'

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
      return ({ debtUnderEdition: debtToEdit })
    })
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
      <div className="main">
        <div className="header"><h2>Compras</h2></div>
        <div className="input-bar-container">
          <form onSubmit={this.handleNewDebt}>
            <div className="input-bar">
              <div className="label">
                Cliente
                <Dropdown customers={this.state.customers} inputName="customerName" />
              </div>
              <div className="label">
                Descrição
                <input type="text" name="description" placeholder=""></input>
              </div>
              <div className="label">
                Valor
                <input type="number" name='value' placeholder="" step="any" required></input>
              </div>              
              <button className='add-button' type="submit"><img name="add-debt" alt="Enviar" src={add}></img></button>
            </div>
          </form>
        </div>
        <Table
          debts={this.state.debts}
          customers={this.state.customers}
          handleClearDebtUnderEdition={this.handleClearDebtUnderEdition}
          handleDeleteDebt={this.handleDeleteDebt}
          handleEditDebt={this.handleEditDebt}
          handleNewDebt={this.handleNewDebt}
          className="customer-table"
        />
        <div className="center-text">
          {this.state.debts.length > 0 ? '' : (<i>Nenhuma compra cadastrada</i>)}
        </div>
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