import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, qty = 1) => {
    const existItem = cartItems.find(item => item._id === product._id)
    
    if (existItem) {
      setCartItems(cartItems.map(item =>
        item._id === existItem._id ? { ...item, qty: item.qty + qty } : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, qty }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id)
    } else {
      setCartItems(cartItems.map(item =>
        item._id === id ? { ...item, qty } : item
      ))
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      cartTotal,
      cartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  )
}
