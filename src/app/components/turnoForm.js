import React, { Component } from 'react';

class TurnoForm extends Component {

  constructor() {
    super();
    this.state = {
      fecha: '',
      hora: '',
      cliente: '',
      descripcion: ''
    };
    this.addTurno = this.addTurno.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTurno(e) {
    console.log(this.state);
    e.preventDefault();
    fetch('/turnos', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json',
      }
    }).then(res =>  res.json())
      .then(data => {
        console.log(data);
        M.toast({html: 'Turno Guardado'});
        this.setState({
          fecha: '',
          hora: '',
          cliente: '',
          descripcion: ''
        });
      }).catch(err => console.log(err));
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (

      <div className="card">
        <div className="card-content">
          <form className="col s15" onSubmit={this.addTurno}>
            <div className="row">
              <label>Fecha
                <input name="fecha" type="date"  onChange={this.handleChange} value={this.state.fecha} className="validate"/>
              </label>
              <label>Hora
                <input name="hora" type="text" placeholder="Hora" onChange={this.handleChange} value={this.state.hora} className="validate"/>
              </label>
              <label>Cliente
                <input name="cliente" type="text" placeholder="Cliente" onChange={this.handleChange} value={this.state.cliente} className="validate"/>
              </label>
              <label>Descripcion 
                <textarea name="descripcion" placeholder="Agregue Aqui Una Descripcion Del Trabajo a Realizar" type="text" onChange={this.handleChange} value={this.state.descripcion} className="validate"/>
              </label>
              </div>
            <button type="Submit" className="btn green darken-4">Guardar</button>
          </form>
        </div>
      </div>
    )
  }

}

export default TurnoForm;