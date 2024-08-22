import React from 'react';
import ShoppingCart from './ShoppingCart';


const App = () => {
  const sampleProducts = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  return (
    <div className='Section'>
      <ShoppingCart products={sampleProducts} />
      </div>
  );
};

export default App;