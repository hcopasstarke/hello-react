import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';

const Feminist = [
  "Men are idiots", 
  "I hate bras", 
  "pockets are friends", 
  "women in office", 
  "men can't communicate", 
  "sex work is work", 
  "no means no"
]

function getRandomNumber () {
  return Math.floor(Math.random() * 6 ) + 1
}

function getRandomStatement() {
  const RandomNumber = getRandomNumber() 
    return Feminist[RandomNumber]
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {RandomStatementArray: []}
  }

  componentDidMount() {
    this.popRandomStatementArray()
  } 

  popRandomStatementArray = () => {
    const newVar = [] 
    newVar[0] = getRandomStatement()
    newVar[1] = getRandomStatement()
    newVar[2] = getRandomStatement()

    this.setState( {
      RandomStatementArray: newVar
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Input banana = {this.state.RandomStatementArray[0]} />
            <Input banana = {this.state.RandomStatementArray[1]}  />
            <Input banana ={this.state.RandomStatementArray[2]}  />
          <br></br><button onClick = {this.popRandomStatementArray}>
             Click Me 
             </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
