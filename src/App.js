import React from 'react'
import './App.css';

const data = [
  { Nombre: 'Alejandro', },
  { Nombre: 'Maria', },
  { Nombre: 'Pedro', },
  { Nombre: 'Luis', },
  { Nombre: 'Julio', },
  { Nombre: 'Sidney', }
]

class App extends React.Component {
  state = {
    data: data,
    from: {
      Nombre: '',
    }
  }

  handlechge = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    var lista = this.state.data;
    lista.push(valorNuevo)
    this.setState({ data: lista })
  }

  eliminar = (dato) => {
    var opcion = window.confirm('realmente desea Eliminar ' + dato.Nombre);
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.Nombre == dato.Nombre) {
          lista.splice(contador, 1);
        }
        contador++
      });
      this.setState({ data: lista });
    }
  }

  render() {
    return (
      <div className='center'>
        <section className='caja-big'>
          <div className='title'>
            <h1>Personas </h1>
          </div>

          <div>
            {this.state.data.map((elemento) => (
              <div className='caja-list'>
                <p className='list-nombre'>{elemento.Nombre}</p>
                <button onClick={() => this.eliminar(elemento)} >x</button>
              </div>
            ))}
          </div>

          <div className='agregar'>
            <input type="text" name='Nombre' onChange={this.handlechge} placeholder='Ingrese un Nombre' />
            <button onClick={() => this.insertar()} >Sumit</button>
          </div>

        </section>
      </div >
    );
  }
}

export default App;
