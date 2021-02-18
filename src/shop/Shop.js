import React, { useState, useEffect } from 'react';
import items from '../data/stockProducts.json';
import Math from '../components/Math';

const Shop = () => {

    //make a varible called cart, set it to an empty array and setCart is what will manipulate the variable
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");

    //set the initial cart, count, and itemTotal total to 0
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);

    //dependency array so that every time something changes in cart, fire the function total()
    useEffect(
        () => {
            total();
            // itemTotaled();
        }, [cart]
    )


    //write a for loop to calculate the total value for each item in the cart 
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price
        }
        setCartTotal(totalVal)
    }

    // const itemTotaled = (el) => {
    //     let itemTotalValue = 0;
    //     for(let i = 0; i < cart.length; i++) {
    //         console.log(el[i].price * el[i].count)
    //     }
    //     // setItemTotal(itemTotalValue)
    // }

    //write a for loop to calculate the total value for duplicate items in the cart
    //if cart[i].id == el.id

    // const setItemTotal = (e, index) => {
    //     const {cartItems} = this.state;
    //     cartItems[i].price = e;
    //     this.setState({
    //         cartItems
    //     })
    // }

    //write a for loop to add items to the cart unless the unique id is already located in the cart
    //if it is, alert the user
    //if it is, update cart quantity
    const addToCart = (el) => {
        let addIt = true;
        let itemTotalCost = 0;
        for (let i = 0; i < cart.length; i++) {
            // itemTotalCost = (cart[i].count * cart[i].price);
            // setItemTotal(itemTotalCost);
            if (cart[i].id === el.id) addIt = false
        }
        //if addIt is true, add the item to the cart and set the alert to empty
        if (addIt) {
            setCart([...cart, el]);
            setCartCount(el.count++)
            // itemTotalCost = (el.count * el.price);
            
            // console.log(itemTotalCost);
            // setItemTotal(itemTotalCost);
            // console.log(el.count);

            // cartCount += 1;
            // console.log(cartCount);
            setAlert('')
        }
        else 
        setCart([...cart, el]);
        // put the item in the cart but don't render it
        setCartCount(el.count++);

        // itemTotalCost = (el.count * el.price);
        // setItemTotal(itemTotalCost)
        // console.log(itemTotalCost);

        setAlert(`${el.name} is already in your cart`)
        //else, don't add the item and set the alert to 'item is already in your cart'
        //else, +1 to itemTotal
    };

    // const handleChange = (e) => {
    //     let value = e.currentTarget.value;
    //     console.log(value);
    // }

    //filter out and return any cart item that is not equal to the element ID
    const removeFromCart = (el) => {
        let hardCopy = [...cart]
        hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
        setCart(hardCopy);
        setCartCount(el.count = 0);
        console.log(el.count);
        setAlert('');
    }

    //create a list to store all the products in the store
    const listItems = items.map((el) => (
        <button
            className="flex flex-col appearance-none border border-gray-200 rounded w-48 p-4 m-2 justify-start items-center hover:bg-gray-100 relative"
            key={el.id}>
            <img
                src={el.image}
                className="block w-full rounded shadow p-2 bg-white" />
            <h4 className="flex flex-1 items-center font-semibold leading-4 mt-2">{el.name}</h4>
            {/* ${el.price} */}
            {/* <input type="submit" value='add' onClick={() => addToCart(el)} /> */}
            <button type="submit"
            value='add'
            onClick={() => addToCart(el)}
                className="absolute w-8 top-0.5 right-0.5 p-0.5 bg-white shadow rounded-full bg-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgba(16, 185, 129)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </button>
    ));

    //create a list item that will append whenever an item is added to the cart
    const cartItems = cart.map((el) => (
        <li
            className="grid border border-gray-200 gap-x-4 rounded shadow p-4" style={{ gridTemplateColumns: "1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr" }}
            key={el.id}>
            <img src={el.image} className="block w-full rounded shadow p-2 bg-white" />
            <div className="flex flex-col flex-grow justify-center">
                <h3 className="font-semibold text-lg">{el.name}</h3>
                <p>
                    {el.description}
                </p>
            </div>
            <div className="font-semibold text-lg text-red-500 flex items-center justify-end">${el.price}</div>
            <span className="flex items-center font-semibold">x</span>
            <div className="flex items-center justify-center">
                <input
                    type="number"
                    className="border border-gray-300 rounded w-24 text-lg px-2"
                    min="1"
                    // onChange={(e) => setItemTotal(e, i)}
                    // onClick={() => handleChange()}
                    // value='count'
                    value={el.count}
                />
            </div>

            <span className="flex items-center">=</span>
            <span
                className="flex items-center font-semibold text-green-500 text-xl"
                type="number"
            >
                ${el.price}
                {/* ${itemTotal} */}
            </span>
            <div className="flex items-center justify-end">
                <input type="submit" 
                className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2"
                value='remove' 
                onClick={() => removeFromCart(el)} />
            </div>

        </li>
    ));

    return (
        <div className="p-10 m-auto bg-blue-50 min-h-screen">
            <div className="border border-gray-300 rounded-lg w-full bg-white p-10 shadow-lg">
                <h1 className="m-0 p-0 text-2xl font-semibold">Restaurant Order System</h1>
                <hr className="my-3 border border-0 border-t-1 border-gray-200" />
            Select products below to add to the ordering guide
            <div className="w-full mt-4">
                    <h1 className="font-semibold text-2xl">Products</h1>
                </div>
                <div className="flex border border-gray-200 p-2 rounded mt-2 overflow-x-auto">
                    {listItems}
                </div>

                <br />

                

                <h1 className="font-semibold text-2xl">Buy List</h1>
                <br />
                <ul>{cartItems}</ul>
                
                </div>
                <div className="text-right font-semibold text-lg mt-4">Total: ${cartTotal}</div>
                {/* <div>Alert Message: {alert}</div> */}
            
        </div>);
};

export default Shop;