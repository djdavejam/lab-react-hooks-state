import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
      <DarkModeToggle isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <label>Filter by Category:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="NonExistent">NonExistent</option>
        </select>
      </label>
      <ProductList category={category} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;