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
      <div className="card-content" style={{marginLeft: 100, color: "#ffffff"}}>
      <h4>Añadir Cliente</h4>
        <div className="row">
          <form className="col s15" onSubmit={this.addCliente}>
             <div className="input-field col s3">
                <span style={{fontSize: 23}}>Nombre</span>
                <input name="nombre" onChange={this.handleChange}  value={this.state.nombre} placeholder="Nombre" id="nombre" type="text" className="validate" autoFocus />  
                <span style={{fontSize: 23}}>Apellido</span>
                <input name="apellido" onChange={this.handleChange}  value={this.state.apellido} placeholder="Apellido" id="apellido" type="text" className="validate" autoFocus/> 
                <span style={{fontSize: 23}}> Telefono</span> 
                <input name="telefono" onChange={this.handleChange}  value={this.state.telefono} placeholder="Telefono" id="telefono" type="text" className="validate" autoFocus/> 
                <span style={{fontSize: 23}}>Direccion</span>
                <input name="direccion" onChange={this.handleChange}  value={this.state.direccion} placeholder="Direccion" id="direccion" type="text" className="validate" autoFocus/> 
                <span style={{fontSize: 23}}>Cumpleaños</span>
                <input name="cumpleaños" onChange={this.handleChange}  value={this.state.cumpleaños} placeholder="Cumpleaños" id="cumpleaños" type="text" className="validate" autoFocus/> 
                <span style={{fontSize: 23}}>Ocupacion</span>
                <input name="ocupacion" onChange={this.handleChange}  value={this.state.ocupacion} placeholder="Ocupacion" id="ocupacion" type="text" className="validate" autoFocus/> 
                <span style={{fontSize: 23}}>Hobbie</span>
                <input name="hobbie" onChange={this.handleChange}  value={this.state.hobbie} placeholder="Hobbie" id="hobbie" type="text" className="validate" autoFocus/> 
              <button type="submit" className="btn light-blue darken-4">Guardar</button>
              </div>
          </form>
          <div style={{float: "right", position: "relative", bottom: 650, right: 200}}>
        <img style={{width: 600, height: 250}} src="data:image/jpeg;base64,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" />
        </div>
        </div>
      </div>
    )
  }
}

export default ClienteForm;