import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../containers/Home'
import { Layout } from '../containers/Layout'
import Login from '../containers/Login'
import { NotFound } from '../containers/NotFound'
import { Registro } from '../containers/Registro'



function App() {
  return (
    <BrowserRouter>
    <Layout> 
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Registro}/>
        <Route component={NotFound}/>

      </Switch>
    </Layout>
      
    </BrowserRouter>
  )
}

export {App}
