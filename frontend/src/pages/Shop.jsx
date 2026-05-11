import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/ui/Loader';
import EmptyState from '../components/ui/EmptyState';
import '../styles/product.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (res.ok) {
          setProducts(Array.isArray(data) ? data : []);
          setError('');
        } else {
          setError(data?.message || 'Unable to fetch products.');
        }
      } catch (error) {
        console.error(error);
        setError('Unable to fetch products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ['all', ...Array.from(unique)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    if (sortBy === 'price-low') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = result.sort((a, b) => (b.ratings || 0) - (a.ratings || 0));
    }

    return result;
  }, [products, search, category, sortBy]);

  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h2 className="section-title">All Products</h2>
          <p className="subtle-text">Browse by category, price, or rating.</p>
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
            aria-label="Search products"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {loading ? (
        <Loader label="Loading products" />
      ) : error ? (
        <EmptyState title="Could not load products" description={error} />
      ) : filteredProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try adjusting your search or filters."
        />
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
