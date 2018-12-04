import React, { Component } from 'react';

class TurnoTabla extends Component {
  constructor() {
    super();
    this.state = {
      turnos: []
    };
  }

deleteTurno(id) {

if(confirm('¿Esta seguro de querer eliminar el Turno?')) {
  fetch(`/turnos/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'aplication/json',
      'Content-Type': 'application/json'
      }
  }).then(res => res.json())
    .then(data => {
      console.log(data);
      M.toast({html: 'Turno Eliminado'});
      this.fetchTurno();
    });
}
}

updateTurno() {
  fetch(`/turnos/${id}`)
      .then(res =>  res.json())
      .then(data => {
        console.log(data);
        this.setState({
        fecha: data.fecha,
        hora: data.hora,
        cliente: data.cliente,
        descripcion: data.descripcion
        });
      });
}

componentDidMount() {
  this.fetchTurno();
}

fetchTurno() {
  fetch('/turnos').then(res => res.json())
    .then(data => {
      this.setState({turnos: data});
      console.log(this.state.turnos);
  });
}


render() {
  return(
  <div className="card">
    <div className="card-content">
      <table className="striped highlight centered">
        <thead><tr>
          <td>Fecha</td>
          <td>Hora</td>
          <td>Cliente</td>
          <td>Descripcion</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.turnos.map(turno => {
              return (
                <tr key={turno._id}>
                  <td>{turno.fecha}</td>
                  <td>{turno.hora}</td>
                  <td>{turno.cliente}</td>
                  <td>{turno.descripcion}</td>
                  <td><button className="btn light-blue darken-4" onClick={this.updateTurno} ><i className="material-icons">edit</i></button>
                  <button className="btn red darken-4" style={{margin: '2px'}} onClick={() => this.deleteTurno(turno._id)} ><i className="material-icons">delete</i></button>
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

export default TurnoTabla;