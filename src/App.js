import React, {Component} from 'react';
import axios from 'axios';


class App extends Component {
  componentWillMount() {
    axios.get('https://storage.googleapis.com/dito-questions/events.json')
        .then(res => console.log(res))
        .catch(error => console.log(error))
  }

  render(){
    return (
        <div>

        </div>
    );
  }
}

export default App;
