import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// componentes ................

// Manera sencilla de crear componente
function Hello (props) {
  return <p>Componente mas sencillo</p>
}

// Añadiendo dinamismo mediante props
function Hello1 (props) {
  return <p>{props.title}</p>
}

// Utilizando arrow function 
const Hello2 = (props) => <p>{props.title}</p>

// Utilizando class EMC6
class Hello3 extends Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}

// props ...........................
// Las props son inmutables, no se puede modificar su valor. Debemos usar los componentes como funciones puras

class Text extends Component {
  render() {
    // inicializamos las props para tener un codigo mas limpio y ordenado
    const {
      arrayOfNumber,
      boolean,
      multiply,
      number,
      objectWithInfo,
      text,
      title
    } = this.props
    // controlamos lo que muestra la variable a traves de props boolean sea tru o false. Cuando a una props no se le pasa ningun valor por defecto sera true
    const textBoolean = boolean ? 'por defecto' : 'falso'
    const mapNumbers = arrayOfNumber.map(multiply)

    return <div>
              {title}
              <p>{text}</p>
              <p>{number}</p>
              <p>{textBoolean}</p>
              <p>{mapNumbers.join(', ')}</p>
              <p>{objectWithInfo.key}</p>
            </div>
  }
  // cuando hay varias props que no cogen en la misma linea se ponen en lineas diferentes y ordenadas alfabeticamente como en lineas 51 a 55
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a este curso</h1>
        </header>
        <Hello />
        <Hello1 title="Componente con dinamismo"/>
        <Hello2 title="Componente con Arrow function"/>
        <Hello3 title="Este componente se ha creado de la manera mas apropiada"/>
        <Text 
          arrayOfNumber={[3,5,6]}
          boolean
          multiply={(number) => number * 20 }
          number={2}
          objectWithInfo={{key: 'first Value', key2: 'other value'}}
          text="Soy un string"
          title={<h1>Esto es un titulo</h1>}
        />
      </div>
    );
  }
}

export default App;
