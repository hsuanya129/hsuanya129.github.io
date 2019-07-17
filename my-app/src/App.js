import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      textValue:'DefaultValue'
    }
    this.getText = this.getText.bind(this);
  
  }

  getText(event){
    this.setState({
      textValue:document.getElementById('textBox').value
    });
    event.preventDefault();
  }

  render(){
    return(
      <div className='App'>
        <p className='Text'>Welcome {this.state.textValue}</p>
        <form onSubmit={this.getText}>
          <input id='textBox' type='text' size="50  "></input><br/>
          <input className='Button' type='submit' value='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
