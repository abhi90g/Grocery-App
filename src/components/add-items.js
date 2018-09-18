import React, { Component } from 'react';

export default class AddItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: Math.random().toString(36).substr(2, 9),
            itemName: '',
            quantity: '1',
            selectedType: ''
        };

        this.handleChanges = this.handleChanges.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormReset = this.onFormReset.bind(this);
    }

    handleChanges(e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.props.itemAdded(this.state));
    }

    onFormReset(e) {
        e.preventDefault();
        this.setState ({
            id: Math.random().toString(36).substr(2, 9),
            itemName: '',
            quantity: '1',
            selectedType: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='addItemsToBasket'>
                        <h1> Add Grocery Items </h1>
                    </div>
                    <div>
                        <label> Item Name: </label>
                        <input
                            type='text'
                            name='itemName'
                            placeholder='Enter item name'
                            onChange={this.handleChanges}
                            value={this.state.itemName} required />
                    </div>
                    <div>
                        <label> Item Quantity: </label>
                        <input
                            type='number'
                            step='1'
                            name='quantity'
                            value={this.state.quantity}
                            onChange={this.handleChanges}
                            placeholder='Item quantity' />
                    </div>

                    <p className="category">Please select Item Category</p>
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name='selectedType'
                                    value="common"
                                    checked={this.state.selectedType === "common"}
                                    onChange={this.handleChanges} /> Common Item
                        </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name='selectedType'
                                    value="separate"
                                    checked={this.state.selectedType === "separate"}
                                    onChange={this.handleChanges} /> Separate Item
                        </label>
                        </li>
                    </ul>

                    <button type="submit"
                        className="submit-button"> Add To Basket </button>
                    <button 
                            onClick={this.onFormReset}
                            className="reset-button"> Reset </button>
                </form>
                {/* <pre>
                    <code>
                        <p>item id: {this.state.id}</p>
                        <p>item name: {this.state.itemName}</p>
                        <p>item quantity: {this.state.quantity}</p>
                        <p>category: {this.state.selectedType}</p>
                    </code>
                </pre> */}
            </div>
        );
    }



}