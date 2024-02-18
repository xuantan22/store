'use client'

import { CartContextProvider } from "@/hooks/useCart";


interface CartroviderProps{
    children: React.ReactNode
}

const CartProvider:React.FC<CartroviderProps> = ({children}) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )
}
export default CartProvider;