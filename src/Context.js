import React from "react";

const Context = React.createContext();

function ContextProvider({children}){

    const [allPhotos, setAllPhotos] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then((resp) => resp.json()).then((resp) => setAllPhotos(resp));
    }, []);

    function toggleFav(id){
        const newPhotoAry = allPhotos.map((photo) => {

            if(photo.id === id){
                // console.log(id);
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }

            else{
                return photo
            }
        });
        setAllPhotos(newPhotoAry);
    }

    function addToCart(newItem){
        setCartItems((prev) => [
            ...prev,
            newItem
        ])
    }

    function removeFromCart(id){
        setCartItems((prev) => (prev.filter((item) => (item.id !== id))));
    }

    function emptyCart(){
        setCartItems([]);
    }

    return(
        <Context.Provider value={{
            allPhotos, 
            toggleFav, 
            cartItems, 
            addToCart, 
            removeFromCart,
            emptyCart
            }}>
            {children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};