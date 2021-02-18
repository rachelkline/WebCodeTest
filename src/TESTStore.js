import React, { Component } from "react";
import products from "./data/stockProducts.json";

class ProductData extends React.Component {
    state = {
        products
    }

    onChange = (index, val) => {
        this.setState({
            products: this.state.products.map((product, i) => (
                i === index ? { ...product, count: val } : product
            ))
        })
    }

    createCart(cartItem) {
        // const products = this.props.products;
        const idMatch = products.filter(product => cartItem.key == product.itemNumber);
        console.log(idMatch);

        // {idMatch.map((product, i) => (
        //     <li
        //     key={i}>
        //         {product.name}
        //     </li>
        // ))}

        return <li className="grid border border-gray-200 gap-x-4 rounded shadow p-4" style={{ gridTemplateColumns: "1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr" }}
            key={cartItem.key}>
            <img src={idMatch[0].image} className="block w-full rounded shadow p-2 bg-white" />
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
            <div className="flex items-center justify-center">
                <input
                    type="number"
                    className="border border-gray-300 rounded w-24 text-lg px-2"
                    value={cartItem.count}
                />
            </div>

            <span className="flex items-center">=</span>
            <span
                className="flex items-center font-semibold text-green-500 text-xl"
                // name="totalValue"
                type="number"
            // onClick={this.handleCartTotals}
            // onChange={this.props.updateCart}
            // value={this.state.totalValue}
            >
                {/* ${this.state.totalValue} */}
                {/* ${this.state.newTotal} */}
                {/* x {this.state.amountValue}) */}
                {/* <br/> */}
                {/* ${this.state.totalValue} */}
                ${idMatch[0].price}
            </span>
            {/* <span>${idMatch[0].price}</span> */}
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
            <div>
                {/* <ul className="buyList">
                    {cartItems}
                </ul> */}
                <ul>
                    <ProductItemList
                        products={this.state.products}
                        onChange={this.onChange} />
                </ul>
                <div className="text-right font-semibold text-lg mt-4">
                    <Total products={this.state.products} />
                </div>
            </div>
        )
    }
};

const ProductItemList = ({ products, onChange }) => (
    <>
        {products.map((product, i) => (
            <li className="grid border border-gray-200 gap-x-4 rounded shadow p-4" style={{ gridTemplateColumns: "1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr" }}
                key={i}>
                <img src={product.image} className="block w-full rounded shadow p-2 bg-white" />
                <div className="flex flex-col flex-grow justify-center">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p>
                        {product.description}
                    </p>
                </div>
                <div className="font-semibold text-lg text-red-500 flex items-center justify-end">
                    ${product.price}
                </div>
                <span className="flex items-center font-semibold">x</span>
                <div className="flex items-center justify-center">
                    <input
                        type="text"
                        className="border border-gray-300 rounded w-24 text-lg px-2"
                        value={product.count}
                        onChange={e => onChange(i, parseInt(e.target.value) || 0)}
                    />
                </div>
                <span className="flex items-center">=</span>
                <span
                    className="flex items-center font-semibold text-green-500 text-xl"
                    // name="totalValue"
                    type="number"
                // onClick={this.handleCartTotals}
                // onChange={this.props.updateCart}
                // value={this.state.totalValue}
                >

                    ${product.price}
                </span>
                <div className="flex items-center justify-end">
                    <button type="button" className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </li>
        ))}
    </>
)

const ProductList = ({ products, onChange }) => (
    <>
        {products.map((product, i) => (
            <button
                className="flex flex-col appearance-none border border-gray-200 rounded w-48 p-4 m-2 justify-start items-center hover:bg-gray-100 relative"
                key={i}>
                <img src={product.image} className="block w-full rounded shadow p-2 bg-white" />
                <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">{product.name}</h4>
                <input
                    type="text"
                    value={product.count}
                    onChange={e => onChange(i, parseInt(e.target.value) || 0)}
                />

                <button type="button"
                    // onClick={props.handleClick}
                    className="absolute w-8 top-0.5 right-0.5 p-0.5 bg-white shadow rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgba(16, 185, 129)">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

            </button>
        ))}
    </>
);




const ProductTotal = ({ products }) => (
    <h3>
        Total: $
        {products.reduce((sum, i) => (
            sum += i.count * i.price
        ), 0)}
    </h3>
)

const Total = ({ products }) => (
    <h3>
        Total: $
        {products.reduce((sum, i) => (
            sum += i.count * i.price
        ), 0)}
    </h3>
)


export default ProductData;
