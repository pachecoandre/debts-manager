import axios from 'axios'

export default class CustomersService {

  async getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
    .catch((error) => console.log(error))
    return response
  }
}
