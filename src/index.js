import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddItems from './components/add-items';
import ItemBasket from './components/item-basket';
import './styles/css/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemList: {}
        }
        this.itemAdded = this.itemAdded.bind(this);
        this.removeSingleItem = this.removeSingleItem.bind(this);
    }

    itemAdded(item) {
        let items = this.state.itemList;
        this.state.itemList[item.id] = item;
        this.itemsInList(items);
    }

    itemsInList(list) {
        this.setState({
            itemList: list
        });
    }

    removeSingleItem (itemId) {    
        let list = this.state.itemList;
        // console.log('removeSingleItem - ', list[itemId]);
        delete list[itemId];
        this.itemsInList(list);
      }

    render() {
        let listItems = this.state.itemList
        console.log(listItems);
        console.log(JSON.stringify(listItems));
        return (
            <div className='container'>
                <AddItems
                    itemAdded={this.itemAdded} />
                <ItemBasket
                    itemList={listItems}
                    removeSingleItem={this.removeSingleItem} />
            </div>
        )
    }



}

ReactDOM.render(<App />, document.querySelector('.root')); 