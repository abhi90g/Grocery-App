import React, { Component } from 'react';

export default class ItemBasket extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h1> Your Basket </h1>
                            </td>
                            <td>
                                <button> Empty Basket </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    <li>
                                        <label> Item : </label>
                                        <span> banana </span>
                                    </li>
                                    <li>
                                        <label> Quantity : </label>
                                        <span> 5 </span>
                                    </li>
                                    <li>
                                        <label> Category : </label>
                                        <span> Common Item </span>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <button> Remove </button>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}