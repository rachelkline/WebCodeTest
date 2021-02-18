import React, { Component, useEffect, useState } from "react";
import products from "./data/stockProducts.json";
import './App.css';
// import StockProducts from './StockProducts.jsx';
import NewBuyList from './potentials/NewBuyList.js';
// import StockProduct from './StockProduct.js';
// import BuyList from './BuyList';
import TestProducts from './potentials/TestProducts';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products,
      inCart: false,
      // cart: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick(e) {
    const id = e.currentTarget.id;
    console.log(id);
    // console.log("CLICKED")
  };


  //BASICALLY
  //IF the selected 'button' has a 'inCart' value of false, 

  onClick = products => {
    let selectedButton = products.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.products[0].label;


  if(selectedButton === false) {
    this.setState({ products, inCart: true });
  } else {
    this.setState({ products, inCart: false });
  }
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
              <TestProducts
                products={products}
                handleClick={this.handleClick}
                onClick={this.onClick} />
            </div>
          </div>
          

          {/* <StockProducts /> */}
{/* 
          <div className="w-full mt-4">
            <h1 className="font-semibold text-2xl">Products</h1>

            <div className="flex border border-gray-200 p-2 rounded mt-2 overflow-x-auto">
              {this.state.products.map(product => (


                <StockProduct
                  id={product.itemNumber}
                  key={product.itemNumber}
                  name={product.name}
                  image={product.image}
                  in_cart={product.in_cart}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </div> */}
          {/* <BuyList /> */}
          <NewBuyList
            products={products}
          />


          {/* {this.state.products.map(product => (


            <NewBuyList
              id={product.itemNumber}
              key={product.itemNumber}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))} */}
        </div>


        <div className="text-right font-semibold text-lg mt-4">
          Total:
          <span className="text-xl ml-2">$0.00</span>
        </div>
      </div>
    );
  }
}

export default App;
