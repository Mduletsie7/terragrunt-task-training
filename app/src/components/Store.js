import React from 'react'
import '../Store.css'

class Store extends React.Component {

    constructor() {
        super();
    }

    storeNotifications() {
        console.log("Store notifications called");
    }

    addProducts() {
        console.log("Add products called")
    }

    getProducts() {
        return (
            <table className='StoreProducts'>
                <th>
                    <tr>Name</tr>
                    <tr>Price</tr>
                    <tr>Quantity</tr>
                    <tr>Total</tr>
                </th>
            </table>
        )

    }
}

export default Store;