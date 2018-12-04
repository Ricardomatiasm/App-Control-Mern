import React, { Component } from 'react';

class Productos extends Component {

render() {
  return(
<div>
    <div className="">
    <h1 className="card-panel purple darken-4">Catalogos On-Line</h1>
    </div>
    <div>
      <ul className="collection with-header">
      <li className="collection-header z-depth-4"><h4>Tresemme</h4></li>
      <li className="collection-item"><div>Shampoo<a target="blank" href="https://www.tresemme.com/ar/productos/shampoo.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      <li className="collection-item"><div>Acondicionador<a target="blank" href="https://www.tresemme.com/ar/productos/acondicionador.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      <li className="collection-item"><div>Spray para el cabello<a target="blank" href="https://www.tresemme.com/ar/productos/spray-para-el-cabello.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      <li className="collection-item"><div>Cremas para el cabello <a target="blank" href="https://www.tresemme.com/ar/productos/cremas-para-peinar.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      <li className="collection-item"><div>Gel para el cabello<a target="blank" href="https://www.tresemme.com/ar/productos/gel-para-el-cabello.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      <li className="collection-item"><div>Otros rroductos para peinar<a target="blank" href="https://www.tresemme.com/ar/productos/otros-productos-para-peinar.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      <li className="collection-item"><div>Tratamientos<a target="blank" href="https://www.tresemme.com/ar/productos/otros-tratamientos-para-el-cabello.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
       </ul>
    </div>
    <div>
      <ul className="collection with-header">
      <li className="collection-header z-depth-4"><h4>Wella</h4></li>
      <li className="collection-item"><div>Catalogo<a target="blank" href="https://www.wella.com/professional/es-ES/home" className="secondary-content"><i className="material-icons">send</i></a></div></li>
       </ul>
    </div>
    <div>
      <ul className="collection with-header">
      <li className="collection-header z-depth-4"><h4>L Oreal</h4></li>
      <li className="collection-item"><div>Catalogo<a target="blank" href="https://www.lorealparis-ar.com.ar/" className="secondary-content"><i className="material-icons">send</i></a></div></li>
       </ul>
    </div>
</div>
  )
}



}
export default Productos;