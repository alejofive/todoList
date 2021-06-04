import React from 'react'
import './App.css';
import { FaEdit } from 'react-icons/fa';


const data = [
  { id: 0, Nombre: 'Alejandro', },
  { id: 1, Nombre: 'Maria', },
  { id: 2, Nombre: 'Pedro', },
  { id: 3, Nombre: 'Luis', },
  { id: 4, Nombre: 'Julio', },
  { id: 5, Nombre: 'Sidney', }
]

class App extends React.Component {
  state = {
    data: data,
    form: {
      Nombre: '',
      id: '',
    },
    formEditar: {
      Nombre: '',
      id: '',
    },
    posicion: -1
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  insertar = (e) => {
    e.preventDefault();
    if (this.state.form.Nombre.length == '') {
      alert('no puede ir vacio');
      return;
    }
    var valorNuevo = { ...this.state.form };
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista });
    this.setState({ form: { Nombre: '' } });

  };



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

  editar = (elemento) => {
    this.setState({ posicion: elemento.id, formEditar: { ...elemento } })
    console.log(this.state.formEditar)
    console.log(elemento)
  }

  cancelar = () => {
    this.setState({ posicion: - 1 })
  }

  handlEdit = (e) => {
    this.setState({
      formEditar: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  aceptar = () => {

    let dataNueva = [
      ...this.state.data.map(elemento => {
        if (elemento.id == this.state.posicion) {
          return {
            id: elemento.id,
            Nombre: this.state.formEditar.Nombre
          }
        }
        return elemento
      })
    ]
    this.setState({ data: dataNueva })
  }


  render() {
    return (
      <div className='center'>
        <section className='caja-big'>
          <div className='title'>
            <h1>Personas</h1>
          </div>

          <div>
            {this.state.data.map((elemento) => {
              if (elemento.id != this.state.posicion) {
                return (
                  <div className='caja-list'>
                    <p className='list-nombre'>{elemento.Nombre}</p>
                    <div className='botones'>
                      <button className='edit' onClick={() => this.editar(elemento)}><FaEdit /></button>
                      <button className='eliminar' onClick={() => this.eliminar(elemento)} >x</button>
                    </div>
                  </div>
                )
              } else {
                return (<div className='caja-list caja-list-edit'>
                  <input type="text" placeholder='' name='Nombre' value={this.state.formEditar.Nombre} onChange={(e) => this.handlEdit(e)} />
                  <div className='botones-edit'>
                    <button className='Aceptar' onClick={() => this.aceptar()} >Aceptar</button>
                    <button onClick={() => this.cancelar()} className='Cancelar'>Cancelar</button>
                  </div>
                </div>)
              }
            }
            )}
          </div>



          <form className="agregar" onSubmit={this.insertar}>
            <input type="text" name="Nombre" onChange={this.handleChange} placeholder="Ingrese un Nombre" value={this.state.form.Nombre} />
            <button type="submit">Submit</button>
          </form>


        </section>
      </div >
    );
  }
}

export default App;
