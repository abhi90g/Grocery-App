import React from 'react';

const Row = (props) => {

    const removeItem = (e) => {
        e.preventDefault();
        props.removeSingleItem(props.rowItem.id)
    }


    return (
        <tr>
            <td>
                <ul>
                    <li>
                        Name: {props.rowItem.itemName}
                    </li>
                    <li>
                        Quantity: {props.rowItem.quantity}
                    </li>
                    <li>
                        Category: {props.rowItem.selectedType}
                    </li>
                </ul>
            </td>
            <td>
                <button onClick={removeItem} > Remove </button>
            </td>
        </tr>
    )
}

export default Row;
