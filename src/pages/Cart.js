import React from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart(){

    const [buttonText, setButtonText] = React.useState("Place Order");
    const {cartItems, emptyCart} = React.useContext(Context);
    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    const cartItemElements = cartItems.map((item) => (
        <CartItem key={item.id} item={item} ></CartItem>
    ))

    function placeOrder(){
        setButtonText("Ordering");
        setTimeout(() => {
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    }

    // console.log(cartItems);

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div>:
                <p>Cart is Empty</p>
            }
            
        </main>
    );
}

export default Cart;