import React, { Component } from 'react';

export default class AddItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
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

        let item = {
            id: Math.random().toString(36).substr(2, 9),
            itemName: this.state.itemName,
            quantity: this.state.quantity,
            selectedType: this.state.selectedType
        }
        this.props.itemAdded(item);

    }

    onFormReset(e) {
        e.preventDefault();
        this.setState({
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
                    <fieldset>
                        <legend className='header-text'> Add Grocery Items </legend>
                        <div className='item-name'>
                            <label className='item-name-text'> Item Name: </label>
                            <input
                                type='text'
                                name='itemName'
                                className='item-name-value'
                                placeholder='Enter item name'
                                onChange={this.handleChanges}
                                value={this.state.itemName} required />
                        </div>
                        <div className='item-quantity'>
                            <label className='item-quantity-text'> Item Quantity: </label>
                            <input
                                type='number'
                                step='1'
                                name='quantity'
                                className='item-quantity-value'
                                value={this.state.quantity}
                                onChange={this.handleChanges}
                                placeholder='Item quantity' />
                        </div>

                        <p className="item-category-text">Please select Item Category</p>
                        <ul className='category-list'>
                            <li className='category-entry'>
                                <label>
                                    <input
                                        type="radio"
                                        name='selectedType'
                                        value="common"
                                        className='catergory-name'
                                        checked={this.state.selectedType === "common"}
                                        onChange={this.handleChanges} /> Common Item
                                </label>
                            </li>

                            <li className='category-entry'>
                                <label>
                                    <input
                                        type="radio"
                                        name='selectedType'
                                        value="separate"
                                        className='category-name'
                                        checked={this.state.selectedType === "separate"}
                                        onChange={this.handleChanges} /> Separate Item
                                </label>
                            </li>
                        </ul>

                        <button type="submit"
                            className="add-to-basket"> Add To Basket </button>
                        <button
                            onClick={this.onFormReset}
                            className="reset-basket"> Reset </button>
                    </fieldset>
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