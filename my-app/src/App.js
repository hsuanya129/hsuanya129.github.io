import React from 'react';
import './App.css';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      textValue:'DefaultValue'
    };
    this.textBox = React.createRef();
  }

  getText = (event) => {
    this.setState({
      textValue:this.textBox.current.value
    });
    event.preventDefault();
  }

  render(){
    return(
      <div className='App'>
        <p className='Text'>Welcome {this.state.textValue}</p>
        <form onSubmit={this.getText}>
          <input type='text' size="50" ref={this.textBox}></input><br/>
          <input className='Button' type='submit' value='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
