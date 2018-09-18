import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddItems from './components/add-items';
import ItemBasket from './components/item-basket';
// import './styles/scss/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    itemAdded(item) {

        console.log('item - ', item);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <AddItems
                    itemAdded = {this.itemAdded} />
                <ItemBasket />
            </div>
        )
    }



}

ReactDOM.render(<App />, document.querySelector('.root')); 