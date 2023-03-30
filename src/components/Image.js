import React from "react";
import { Context } from "../Context";
import Proptypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({className, img}){

    // const [hovered, setHovered] = React.useState(false);
    const [hovered, ref] = useHover();
    const {toggleFav, addToCart, removeFromCart, cartItems} = React.useContext(Context);

    // const heartIcon = hovered && 
    // const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => {addToCart(img)}}></i>

    function heartIcon(){
        if(img.isFavorite){
           return (<i className="ri-heart-fill favorite" onClick={() => {toggleFav(img.id)}} ></i>);
        }
        else if (hovered){
            return (<i className="ri-heart-line favorite" onClick={() => {toggleFav(img.id)}} ></i>);
        }
    }

    function cartIcon(){

        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => {removeFromCart(img.id)}} ></i>
        } 
        else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => {addToCart(img)}}></i>
        }
    }

    return(
        <div className={`${className} image-container`}
        // onMouseEnter = {() => {
        //     setHovered(true);
        // }}
        // onMouseLeave = {() => {
        //     setHovered(false);
        // }}
        ref={ref}
        >
            <img src={`${img.url}`} className="image-grid" alt=""></img>
            {heartIcon()}
            {cartIcon()}
        </div>
    );
}

Image.propTypes = {
    className: Proptypes.string,
    img: Proptypes.shape({
        id: Proptypes.string.isRequired,
        url: Proptypes.string.isRequired,
        isFavorite: Proptypes.bool
    })
}

export default Image;