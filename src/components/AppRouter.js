import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Customers from '../pages/Customers'
import Groceries from '../pages/Groceries'
import Header from './Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/groceries" component={Groceries} exact={true} />
        <Route path="/customers" component={Customers} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
