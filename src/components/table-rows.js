import React from 'react';

const Row = (props) => {

    const removeItem = (e) => {
        e.preventDefault();
        props.removeSingleItem(props.rowItem.id)
    }


    return (
        <tr className='items'>
            <td className='item-detail'>
                <ul>
                    <li>
                        Name: {props.rowItem.itemName}
                    </li>
                    <li>
                        Quantity: {props.rowItem.quantity}
                    </li>
                    <li>
                        Category: {(props.rowItem.selectedType === 'common') ? 'Common Item' : 'Separate Item'}
                    </li>
                </ul>
            </td>
            <td>
                <button onClick={removeItem} className='item-remove' > Remove </button>
            </td>
        </tr>
    )
}

export default Row;
