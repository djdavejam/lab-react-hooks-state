import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3>{product.name} (${product.price})</h3>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button data-testid={`product-${product.id}`} onClick={() => addToCart(product.name)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;