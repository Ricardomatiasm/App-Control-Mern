import React, { Component } from 'react';


class ClienteForm extends Component {

  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      telefono: '',
      direccion: '',
      cumpleaños: '',
      ocupacion: '',
      hobbie: '',
    };
    this.addCliente = this.addCliente.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
addCliente(e) {
  console.log(this.state);
  e.preventDefault();
  fetch('/clientes', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Accept': 'aplication/json',
      'Content-Type': 'application/json',
    }
  })
    .then(res =>  res.json())
    .then(data => {
      console.log(data);
      M.toast({html: 'Cliente Guardado'});
      this.setState({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        cumpleaños: '',
        ocupacion: '',
        hobbie: '',
      });
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="car-content">
        <div className="row">
          <form className="col s15" onSubmit={this.addCliente}>
              <div className="input-field col s3">
              <input name="nombre" onChange={this.handleChange}  value={this.state.nombre} placeholder="Nombre" id="nombre" type="text" className="validate" autoFocus />
              <input name="apellido" onChange={this.handleChange}  value={this.state.apellido} placeholder="Apellido" id="apellido" type="text" className="validate" autoFocus/>
              <input name="telefono" onChange={this.handleChange}  value={this.state.telefono} placeholder="Telefono" id="telefono" type="text" className="validate" autoFocus/>
              <input name="direccion" onChange={this.handleChange}  value={this.state.direccion} placeholder="Direccion" id="direccion" type="text" className="validate" autoFocus/>
              <input name="cumpleaños" onChange={this.handleChange}  value={this.state.cumpleaños} placeholder="Cumpleaños" id="cumpleaños" type="text" className="validate" autoFocus/>
              <input name="ocupacion" onChange={this.handleChange}  value={this.state.ocupacion} placeholder="Ocupacion" id="ocupacion" type="text" className="validate" autoFocus/>
              <input name="hobbie" onChange={this.handleChange}  value={this.state.hobbie} placeholder="Hobbie" id="hobbie" type="text" className="validate" autoFocus/>
              <button type="submit" className="btn light-blue darken-4">Guardar</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ClienteForm;