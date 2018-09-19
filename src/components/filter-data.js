import React, { Component } from 'react';
import Modal from './modal'

export default class FilterGroceryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            data: props.data,
            items: []
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.filterList = this.filterList.bind(this);


    }

    showModal() {
        this.setState({ 
            show: true,
            items: Object.values(this.state.data).map(x => x.itemName) 
        });
    }

    hideModal() {
        this.setState({ show: false });
    }

    filterList(event) {
        let updatedList = Object.values(this.state.data).map(x => x.itemName)
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }

    render() {
        return (
            <div>
                <button onClick={this.showModal}
                    className='export-data-button'> Search Within List </button>

                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <div className="filter-list">
                        <form>
                            <fieldset className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Search"
                                    onChange={this.filterList}
                                />
                            </fieldset>
                        </form>
                        <div>
                            <ul className="list-group">
                                {this.state.items.map(function (item) {
                                    return (
                                        <li className="list-group-item" data-category={item}>
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}