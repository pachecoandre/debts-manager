import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Customers from '../pages/Customers'
import Debts from '../pages/Debts'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Debts} exact={true} />
        <Route path="/customers" component={Customers} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
