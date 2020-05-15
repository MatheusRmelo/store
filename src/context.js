import React from 'react'


function ProductProvider(props){
    const ProductContext = React.createContext()
    return(
        <ProductContext.Provider value="hello from context">
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}