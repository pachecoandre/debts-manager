import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Customers from '../pages/Customers'
import Debts from '../pages/Debts'
import Header from './Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Debts} exact={true} />
        <Route path="/customers" component={Customers} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
