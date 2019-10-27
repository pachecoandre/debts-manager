const axios = require('axios')

const getSwapiUsers = async () => {

   let nextPage = true;
   let url = 'https://swapi.co/api/people'
   let customers = []

   while (nextPage) {

      const response = await axios.get(url)
         .catch((error) => console.log(error))

      const recordsOnPage = response.data.results.map((element) => {
         return element.name
      })

      customers = [...customers, ...recordsOnPage]

      if (response.data.next) {
         url = response.data.next
      } else {
         nextPage = false
      }
   }
   console.log(customers)
   return customers
}

module.exports = { getSwapiUsers }