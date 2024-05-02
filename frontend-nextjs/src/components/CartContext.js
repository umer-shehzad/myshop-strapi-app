"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [navReload, setNavReload] = useState(1);

    useEffect(() => {
        console.log("I am useEffect from app/layout.js");
    }, [])

    const addToCart = (item, qty, price) => {
        let newCart = cart; 
        for (let index = 0; index < qty; index++) {
            newCart.push([item, price]);
        }
        setCart(newCart);
        setNavReload(Math.random())
    }

    const removeFromCart = (item, qty) => {
        let newCart = cart; 
        let index = newCart.indexOf(item);
        newCart.splice(index, 1); 
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]); 
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);