import React, { Component } from 'react';


class ClienteTabla extends Component {

  constructor() {
    super();
      this.state = {
        clientes: [],
      };
      this.updateCliente = this.updateCliente.bind(this);
      this.deleteCliente = this.deleteCliente.bind(this);

  }

  deleteCliente(id) {
   if(confirm('¿Esta seguro querer eliminar el Cliente?')){
    fetch(`/clientes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({html: 'Cliente Eliminado'});
          this.fetchCliente();
        });
  }
}
  updateCliente(id) {
    fetch(`/clientes/${id}`)
      .then(res =>  res.json())
      .then(data => {
        console.log(data);
        this.setState({
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        direccion: data.direccion,
        cumpleaños: data.cumpleaños,
        ocupacion: data.ocupacion,
        hobbie: data.hobbie,
        _id:data._id,
        });
      });

  }

  componentDidMount() {
    this.fetchCliente();
  }
  fetchCliente() {
    fetch('/clientes')
      .then(res => res.json())
        .then(data => {
          this.setState({clientes: data});
          console.log(this.state.clientes);
        });
  }




render() {
  return(
    <div className="card" >
    <input type="search" name="search" /><i className="material-icons">search</i>
      <div className="card-content" >
        <table className="">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Cumpleaños</th>
                <th>Ocupacion</th>
                <th>Hobbie</th>
                <th>Botones</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.clientes.map(cliente => {
                    return (
                      <tr key={cliente._id}>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.direccion}</td>
                        <td>{cliente.cumpleaños}</td>
                        <td>{cliente.ocupacion}</td>
                        <td>{cliente.hobbie}</td>
                        <td><button className="btn light-blue darken-4" onClick={() => this.updateCliente(cliente._id)} ><i className="material-icons">edit</i></button>
                            <button className="btn red darken-4" style={{margin: '2px'}} onClick={() => this.deleteCliente(cliente._id)} ><i className="material-icons">delete</i></button>
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>
        </table>

      </div>
    </div>
  )
}








}

export default ClienteTabla;