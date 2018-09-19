import React, { Component } from 'react';
import Row from './table-rows';
import NoItemsInList from './no-items';

export default class ItemBasket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: props.itemList,
            removeItem: props.removeSingleItem
        }

    }

    getAllItemsInBasket(items, remove) {
        // console.log('getAllItemsInBasket - ', items)
        let removeThis = this.state.removeItem;

        return (
            Object.keys(items).map(function getAllItemsInBasket(itemid) {
                let item = items[itemid];
                return (
                    <Row
                        rowItem={item}
                        key={item.id}
                        removeSingleItem={removeThis}
                    />
                )
            })
        )
    }


    render() {
        let eachItem = this.state.list;
        let removeItem = this.state.removeSingleItem;
        let listOfItems = this.getAllItemsInBasket(eachItem, removeItem);


        return (
            <div className='basket'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'> <h1> Items in Basket </h1> </th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {(Object.keys(eachItem).length !== 0) ? listOfItems : <NoItemsInList />}
                    </tbody>
                </table>
            </div>
        )
    }
}


//  var t = {'6qdmmo2wt':{id: "6qdmmo2wt", itemName: "Apple", quantity: "1", selectedType: "separate"}, '7qi0qb7kg': {id: "7qi0qb7kg", itemName: "Apple", quantity: "1", selectedType: "separate"}, 'oksdgk6ro': {id: "oksdgk6ro", itemName: "Apple", quantity: "1", selectedType: "separate"}}