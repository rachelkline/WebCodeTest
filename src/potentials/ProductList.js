import React, { Component, useEffect, useState } from "react";
import products from '../data/stockProducts.json';
import ProductItems from './ProductItems';
import Cart from './Cart';
import ProductData from '../TESTStore';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // inCart: false,
            cartItems: [],
        };

        // this.addItem = this.addItem.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
        this.onClick = this.onClick.bind(this);
        this.itemClicked = this.itemClicked.bind(this);
    }



    itemClicked(e) {
        //on click, update count +1
        console.log("CLICKED");
        console.log(e.currentTarget.id)
        
    }

    onClick(e) {
        //on click, check to see if the item is already in the cart
        //if it is, update the count +1
        //it it's not, add it as a new item
        //if(products.filter(product => cartItem.key == product.itemNumber)) 
        //add 1 to count
        // {cartItem.count++
    //      }else{ make a new item}


        var newItem = {
            key: e.currentTarget.id,
            name: e.currentTarget.name,
            count: 1
        };
        this.setState((prevState) => {
            return {
                cartItems: prevState.cartItems.concat(newItem)
            };
        });
        e.preventDefault();
        console.log(this.state.cartItems);
    }

    updateCart(e) {
        let value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
        console.log(value)
    }

    render() {
        return (
            <div className="p-10 m-auto bg-blue-50 min-h-screen">
                <div className="border border-gray-300 rounded-lg w-full bg-white p-10 shadow-lg">
                    <h1 className="m-0 p-0 text-2xl font-semibold">Restaurant Order System</h1>
                    <hr className="my-3 border border-0 border-t-1 border-gray-200" />
            Select products below to add to the ordering guide
                <div className="w-full mt-4">
                        <h1 className="font-semibold text-2xl">Products</h1>

                        <div className="flex border border-gray-200 p-2 rounded mt-2 overflow-x-auto">
                            <ProductItems
                                products={products}
                                // handleClick={this.handleClick}
                                onClick={this.itemClicked}
                            />
                            
                        </div>
                        {/* <ProductData 
                        products={products}
                        onClick={this.onClick}/> */}
                    </div>
                    <ProductData 
                    updateCart={this.updateCart}
                    products={products}
                    entries={this.state.cartItems}/>
                        
                </div>
            </div>
        )
    }
}

export default ProductList;