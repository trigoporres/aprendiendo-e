import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    return ( <p>{this.props.title}</p>);
  }
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
      </div>
    );
  }
}

export default App;
