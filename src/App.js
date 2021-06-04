import React from 'react';
import './App.css';
import { FaEdit } from 'react-icons/fa';

const data = [
  { id: 0, tarea: 'trabajo', completado: false },
  { id: 1, tarea: 'ejercicio', completado: false },
  { id: 2, tarea: 'tareas', completado: false },
  { id: 3, tarea: 'leer', completado: true },
  { id: 4, tarea: 'practicar futboll', completado: false },
  { id: 5, tarea: 'jugar', completado: false }
];

class App extends React.Component {
  state = {
    data: data,
    form: {
      tarea: '',
      id: '',
      completado: false
    },
    formEditar: {
      tarea: '',
      id: ''
    },
    posicion: -1,
    estado: 0
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  insertar = (e) => {
    e.preventDefault();
    if (this.state.form.tarea.length == '') {
      alert('no puede ir vacio');
      return;
    }
    var valorNuevo = { ...this.state.form };
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista });
    this.setState({ form: { tarea: '' } });
  };

  eliminar = (dato) => {
    var opcion = window.confirm('realmente desea Eliminar ' + dato.tarea);
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.tarea == dato.tarea) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  };

  editar = (elemento) => {
    this.setState({ posicion: elemento.id, formEditar: { ...elemento } });
    console.log(this.state.formEditar);
    console.log(elemento);
  };

  cancelar = () => {
    this.setState({ posicion: -1 });
  };

  handlEdit = (e) => {
    this.setState({
      formEditar: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  aceptar = () => {
    let dataNueva = [
      ...this.state.data.map((elemento) => {
        if (elemento.id == this.state.posicion) {
          return {
            id: elemento.id,
            tarea: this.state.formEditar.tarea
          };
        }
        return elemento;
      })
    ];
    this.setState({ data: dataNueva, posicion: -1 });
  };

  cambiar = (id) => {
    this.setState({
      data: [
        ...this.state.data.map((item) => {
          if (id == item.id) {
            return {
              ...item,
              completado: !item.completado
            };
          }
          return item;
        })
      ]
    });
  };

  cambiarEstado = (nuevoEstado) => {
    this.setState({ estado: nuevoEstado });
  }

  render() {
    return (
      <div className="center">
        <section className="caja-big">
          <div className="title">
            <h1>Tareas</h1>
          </div>

          <div>
            {this.state.data.map((elemento) => {
              if (this.state.estado == 1 && elemento.completado != false) {
                return null;
              } else if (this.state.estado == 2 && elemento.completado != true) {
                return null;
              }

              if (elemento.id != this.state.posicion) {
                return (
                  <div key={elemento.id} className={` ${elemento.completado ? 'completado' : ''} caja-list `}>
                    <div className="hola">
                      <input onChange={() => this.cambiar(elemento.id)} type="checkbox" checked={elemento.completado} />
                      <p className="list-tarea">{elemento.tarea}</p>
                    </div>
                    <div className="botones">
                      <button className="edit" onClick={() => this.editar(elemento)}>
                        <FaEdit />
                      </button>
                      <button className="eliminar" onClick={() => this.eliminar(elemento)}>
                        x
                      </button>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="caja-list caja-list-edit">
                    <input
                      type="text"
                      placeholder=""
                      name="tarea"
                      value={this.state.formEditar.tarea}
                      onChange={(e) => this.handlEdit(e)}
                    />
                    <div className="botones-edit">
                      <button className="Aceptar" onClick={() => this.aceptar()}>
                        Aceptar
                      </button>
                      <button onClick={() => this.cancelar()} className="Cancelar">
                        Cancelar
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div action="" className="seleccionar">
            <button onClick={() => this.cambiarEstado(0)} >todos</button>
            <button onClick={() => this.cambiarEstado(1)} >sin completar</button>
            <button onClick={() => this.cambiarEstado(2)}>completadas</button>
          </div>
          <form className="agregar" onSubmit={this.insertar}>
            <input
              type="text"
              name="tarea"
              onChange={this.handleChange}
              placeholder="Ingrese un tarea"
              value={this.state.form.tarea}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;