import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount:number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product:CartProductType) => void
    handleRemoveProductFromCart: (product: CartProductType)=> void
    handleCartQtyIncrease: (product: CartProductType) => void
    handleCartQtyDecrease: (product: CartProductType) =>void
    handleClearCart: () =>void
}
export const CartContext = createContext<CartContextType | null>(null)

interface Props{
    [propName: string]:any;
}
export const CartContextProvider = (props: Props) =>  {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    const [cartTotalAmount,setCartTotalAmount] = useState(0);

    console.log('qty', cartTotalQty)
    console.log('amount', cartTotalAmount)
    useEffect(() => {
        const cartItems:any = localStorage.getItem('storeCartItems')
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(cProducts)
    },[])

    useEffect(() => {
        const getTotals = () => {
            if(cartProducts){
                const {total,qty} = cartProducts?.reduce((acc, item)=>{
                    const itemTotal = item.price * item.quantity
                    acc.qty += item.quantity
                    acc.total += itemTotal
                    return acc
                },{
                    qty:0,
                    total:0
                })
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        }
        getTotals()
    },[cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType)=> {
        setCartProducts((prev)=>{
            let updatedCart;
            if(prev) {
                updatedCart = [...prev, product];
            }else{
                updatedCart =[product];
            }
            toast.success("product added to cart");
            localStorage.setItem('storeCartItems', JSON.stringify(updatedCart))
            return updatedCart;
        });
    },[]);

    const handleRemoveProductFromCart = useCallback((product:CartProductType)=> {
        if(cartProducts){
            const filterdProducts = cartProducts.filter((item)=> {
                return item.id !== product.id
            })
            setCartProducts(filterdProducts);
            toast.success("Product removed");
            localStorage.setItem("shopCartItems", JSON.stringify(filterdProducts))
        }
    },[cartProducts])

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updatedCart;
        if(product.quantity === 99) {
            return toast.error("Ooop! Maxium reached")
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item) => 
            item.id === product.id);
            if(existingIndex > -1) {
                updatedCart[existingIndex].quantity === 
                ++updatedCart[existingIndex].quantity
                setCartProducts(updatedCart)
                localStorage.setItem('storeCartItems', JSON.stringify(updatedCart))
            }
        }
    },[cartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        let updatedCart;
        if(product.quantity === 1) {
            return toast.error("Minimum reached")
        }
        if(cartProducts) {
            updatedCart =[...cartProducts]
            const existingIndex = cartProducts.findIndex((item) => 
            item.id === product.id);

            if(existingIndex > -1) {
                updatedCart[existingIndex].quantity === 
                --updatedCart[existingIndex].quantity
                setCartProducts(updatedCart)
                localStorage.setItem('storeCartItems', JSON.stringify(updatedCart))
            }
        }
    }, [cartProducts])

    const handleClearCart = useCallback(() =>{
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("storeCartItems", JSON.stringify(null))
    },[])
   


    const  value = {
        cartTotalQty,
        cartProducts,
        cartTotalAmount,
        handleAddProductToCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
        handleRemoveProductFromCart,
        
    
    }

    return <CartContext.Provider value={value} {...props} />
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(context === null){
        throw new Error("useCart must be used within  a CartContextProvider");
        
    }
    return context;
};
