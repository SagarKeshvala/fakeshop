import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const ProductListing = () => {

    const products = useSelector((state) => state);

    return (
        <div className='ui grid container'>
            <Product/>
        </div>
    )
}

export default ProductListing;