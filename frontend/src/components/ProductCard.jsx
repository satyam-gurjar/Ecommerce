import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import '../styles/product.css';

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlisted(stored.includes(product._id));
  }, [product._id]);

  const toggleWishlist = () => {
    const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updated = stored.includes(product._id)
      ? stored.filter((id) => id !== product._id)
      : [...stored, product._id];
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setWishlisted(updated.includes(product._id));
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-meta">
          <span>{product.category}</span>
          {product.ratings ? (
            <Badge variant="info">⭐ {product.ratings.toFixed(1)}</Badge>
          ) : (
            <span className="subtle-text">New</span>
          )}
        </div>
        <p className="price">₹{product.price}</p>
        <div className="product-actions">
          <Button to={`/product/${product._id}`} size="sm">View Details</Button>
          <button
            className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
            onClick={toggleWishlist}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
