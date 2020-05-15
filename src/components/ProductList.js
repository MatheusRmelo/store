import React, { useState } from 'react'
import Product from './Product'
import Title from './Title'
import { storeProducts, detailProduct } from '../data'
export default function ProductList(){
    const [products, setProducts ] = useState(storeProducts)
    const [detailProduct, setDetailProduct] = useState(detailProduct)
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="Seus" title="Produtos" />
                    <div className="row">
                        
                    </div>
                </div>
                <Product />
            </div>
        </React.Fragment>
        
    )
}