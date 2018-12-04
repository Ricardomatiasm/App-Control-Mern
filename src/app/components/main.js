import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import TurnoForm from './turnoForm';
import ClienteForm from './clienteForm';
import ClienteTabla from './clienteTabla';
import TurnoTabla from './turnoTabla';




class Main extends Component {
render() {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/agregarClientes" component={ClienteForm} />
      <Route path="/agregarTurnos" component={TurnoForm} />
      <Route path="/verTurnos" component={TurnoTabla} />
      <Route path="/verClientes" component={ClienteTabla} />
    </Switch>

  );
}

}

export default Main;