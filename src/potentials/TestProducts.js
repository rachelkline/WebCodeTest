import React, { Component } from "react";

class TestProducts extends Component {
    constructor(props) {
        super(props);
    }


    render(props) {
        const products = this.props.products;
        // console.log(this.state.in_cart)
        console.log(products);
        return(
            <>
            {products.map(product => (

            
          <button
            className="flex flex-col appearance-none border border-gray-200 rounded w-48 p-4 m-2 justify-start items-center hover:bg-gray-100 relative" 
            key={product.itemNumber}
            id={product.itemNumber}
            onClick={this.props.onClick}
          >
            <img src={product.image} className="block w-full rounded shadow p-2 bg-white" />
            <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">{product.name}</h4>
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
        )
    }
}

export default TestProducts