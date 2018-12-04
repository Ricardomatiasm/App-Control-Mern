import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/agregarClientes" ><i className="material-icons">contacts</i></Link>
          </li>
          <li>
            <Link to="/agregarTurnos" ><i className="material-icons">event</i></Link>
          </li>
          <li>
            <Link to="/verTurnos" >Turnos</Link>
          </li>
          <li>
            <Link to="/verClientes" >Clientes</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Header;