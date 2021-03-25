import React from 'react'
import Link from 'next/link'
import styles from '../styles/Products.module.css'
import fetch from 'isomorphic-unfetch'


const Products = (props) => {

    return (
        <div id={styles.product}>
            {
                props.products.map(product => (
                    <div className={styles.card} key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            <a><img src={product.image} alt={product.name} /></a>
                        </Link>
                        <div className={styles.content}>
                            <h3>
                                <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                                <a>{product.name}</a></Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={() => props.addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

Products.getInitialProps = async () => {
    const data = await fetch('https://60539ba845e4b300172920cd.mockapi.io/api/products');
    const result = await data.json();

    return {
        products: result
    }
}

export default Products;
