import React from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({item}) {

    const {removeFromCart} = React.useContext(Context);
    // const [hovered, setHovered] = React.useState(false);
    const [hovered, ref] = useHover();

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">
            <i 
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
            >
            </i>
            <img src={item.url} width="130px" alt={`${item.id}`} />
            <p>$5.99</p>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
}

export default CartItem;