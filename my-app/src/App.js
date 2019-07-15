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
    console.log(this.state.textValue)
    event.preventDefault();
  }

  render(){
    
    return(
      <div>
        <p id='welcome'>Welcome {this.state.textValue}</p>
        <form onSubmit={this.getText}>
          <input id='textBox' type='text' ></input>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
