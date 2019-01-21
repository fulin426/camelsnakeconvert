import React, { Component } from 'react';
import '../App.css';
import InputForm from './inputForm';
import NavBar from './navBar';
import Instructions from './instructions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      snake_case: '',
      camelCase: '',
    }
  }

  convertToCamel(event) {
    const snake_case = event.target.value;
    //convert value to camelCase
    let split = snake_case.split('_');
    //the first letter is not capitalized
    let result = [split[0]];
    for (let i=1; i<split.length; i++) {
      //slice first letter then capitalize then add on rest of word
      result.push(split[i].slice(0,1).toUpperCase() + split[i].slice(1));
    }
    const camelCase = result.join('');
    this.setState({
      snake_case: snake_case,
      camelCase: camelCase
    });
  }

  convertToSnake(event) {
    const camelCase = event.target.value;
    //convert value to snake_case
    let split = camelCase.split('');
    let result = [];
    for (let i=0; i<split.length; i++) {
      if (split[i] !== split[i].toLowerCase()) {
        result.push(`_${split[i].toLowerCase()}`);
      } else {
        result.push(split[i]);
      }
    }
    const snake_case = result.join('');
    this.setState({
      snake_case: snake_case,
      camelCase: camelCase
    });
  }

  render() {
    return(
      <div>
        <NavBar />
        <InputForm
          convertToCamel={e => this.convertToCamel(e)}
          convertToSnake={e => this.convertToSnake(e)}
          snake_case={this.state.snake_case}
          camelCase={this.state.camelCase}
        />
        <Instructions />
      </div>
    );
  }
}

export default App;
