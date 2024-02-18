import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import React from 'react'

interface SetQuantityProps{
    cartCounter? : boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}
const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'
const SetQuantity: React.FC<SetQuantityProps> = ({
    cartProduct, cartCounter, handleQtyDecrease, handleQtyIncrease
}) => {
  return (
    <div className='flex flex-row'>
        {cartCounter ? null : <div 
        className='font-semibold'>QUANTITY:</div>}
        <div className='flex gap-4 items-center'>
            <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
            {cartProduct.quantity}
            <button className={btnStyles} onClick={handleQtyIncrease}>+</button>

        </div>
    </div>
  )
}

export default SetQuantity