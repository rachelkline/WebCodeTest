import React, { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountValue: 1,
            totalValue: 0,
            newTotal: ''
        }
        this.createCart = this.createCart.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCartTotals = this.handleCartTotals.bind(this);
    }



    handleInputChange(e) {
        let value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
        console.log(value);
    }

    handleCartTotals(e) {
        let value = e.target.value;
        // const name = e.target.name;
        console.log(value);
        // console.log(name);
        // const cartAmount = this.state.amountValue;
        // let newTotal = (value * cartAmount)
        // console.log(newTotal)
    }



    // onclick(type) {
    //     this.setState(prevState => {
    //         return { amountValue: type == 'add' ? prevState.amountValue + 1 : prevState.amountValue - 1 }
    //     });
    // }



    // handleCartItems(e) {
    //     //if an item's unique key exists iin the cartItems array, don't render a new item on the buy list
    //     //instead, update the quantity
    //     var found = false;
    //     for(var i=0; i < cartItems.length; i++) {
    //         if(this.state.cartItems.id == e.currentTarget.id) {
    //             found = true;
    //             break;
    //         }
    //     }

    // }

    createCart(cartItem) {
        const products = this.props.products;
        const idMatch = products.filter(product => cartItem.key == product.itemNumber);
        console.log(idMatch);




        return <li className="grid border border-gray-200 gap-x-4 rounded shadow p-4" style={{ gridTemplateColumns: "1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr" }}
            key={cartItem.key}>
            {/* {cartItem.name} */}
            <img src={idMatch[0].image} alt="" className="p-2 rounded border border-gray-200" />
            <div className="flex flex-col flex-grow justify-center">
                <h3 className="font-semibold text-lg">{cartItem.name}</h3>
                <p>
                    {idMatch[0].description}
                </p>
            </div>

            <div className="font-semibold text-lg text-red-500 flex items-center justify-end">
                ${idMatch[0].price}
            </div>

            <span className="flex items-center font-semibold">x</span>

            <div className="flex items-center justify-center"
            // id="amountValue"
            // onChange={this.handleInputChange}
            // value={1}
            >
                <input
                    type="number"
                    name="amountValue"
                    className="border border-gray-300 rounded w-24 text-lg px-2"
                    onChange={this.handleInputChange}
                    onClick={this.handleCartTotals}
                    value={this.state.amountValue}
                />

                {/* <input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc' />
                {this.state.count}
                <input type='button' onClick={this.onclick.bind(this, 'sub')} value='Dec' /> */}
            </div>

            <span className="flex items-center">=</span>

            <span
                className="flex items-center font-semibold text-green-500 text-xl"
                name="totalValue"
                type="number"
                onClick={this.handleCartTotals}
            // onChange={this.props.updateCart}
                value={this.state.totalValue}
            >
                ${this.state.totalValue}
                {/* ${this.state.newTotal} */}
                {/* x {this.state.amountValue}) */}
                {/* <br/> */}
                {/* ${this.state.totalValue} */}
            </span>
            <span>${idMatch[0].price}</span>

            <div className="flex items-center justify-end">
                <button type="button" className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </li>

    }

    render() {
        var cartEntries = this.props.entries;
        var cartItems = cartEntries.map(this.createCart);
        return (
            <ul className="buyList">
                {cartItems}
            </ul>
        )
    }
}

export default Cart;