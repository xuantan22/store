import React from 'react';
import { products } from '@/utils/products';
import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import ListRating from './ListRating';
interface IParams{
  productId?: string;
}
const Product = ({params}:{params: IParams}) => {
    console.log('params:', params);

    const product = products.find((item) => item.id === params.productId)
  return (
    <div>
        <Container>
          <ProductDetails product={product}/>
          <div className='flex flex-col mt-20 ga-4'>
            <div>Add Rating</div>
            <ListRating product={product}/>
          </div>
        </Container>
    </div>
  )
}

export default Product