import React, { Component } from 'react'
import CustomersService from '../services/customers.service'

export default class Customers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: []
    }
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
        {
          this.state.customers.map((item, index) => (
            <div key={index}>{index + 1} - {item}</div>
          ))
        }
      </div>
    )
  }
}