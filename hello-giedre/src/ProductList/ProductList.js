import React from 'react'
import ProductCard from '/home/giedre/hello-giedre/src/ProductCard/ProductCard.js'

const productList = (props, index) => {
    const products = props.productList;
    const listItems = products.map((productCard, index) =>
        <ProductCard
            key={productCard.id}
            title={productCard.title}
            description={productCard.description}
            price={productCard.price}
            image={productCard.image}
            click={() => props.clicked(index)}
        />
    );

    return (
        <div className="row">
            {listItems}
        </div>
    )
};

export default productList;