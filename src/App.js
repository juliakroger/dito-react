import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Timeline from './components/Timeline';


class App extends Component {
  state = {
    purchase: null,
  };

  compare = (first, second) => {
    const firstTimestamp = first.compra.timestamp;
    const secondTimestamp = second.compra.timestamp;
    if (firstTimestamp > secondTimestamp) return 1;
    else if (firstTimestamp < secondTimestamp) return -1;
    else return 0;
  };

  RefactorData = (data) => {
    let ShoppingPurchase = [];
    let ProductPurchase = [];
    data.forEach(event => {
      if (event.event === 'comprou-produto') ProductPurchase.push(event);
      else if (event.event === 'comprou') ShoppingPurchase.push({compra: event, produtos: []});
    });
    ShoppingPurchase.forEach(shopping => {
      ProductPurchase.forEach(product => {
        if (product.timestamp.slice(0, 10) === shopping.compra.timestamp.slice(0, 10)) shopping.produtos.push(product)
      })
    });
    ShoppingPurchase.sort(this.compare);
    this.setState({purchase: ShoppingPurchase})
  };

  componentWillMount() {
    axios.get('https://storage.googleapis.com/dito-questions/events.json')
        .then(res => this.RefactorData(res.data.events))
        .catch(error => console.log(error))
  }

  render() {
    return (
        <div>
          <Header/>
          <Timeline purchase={this.state.purchase}/>
        </div>
    );
  }
}

export default App;
