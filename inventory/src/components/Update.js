import React, { useState } from 'react';
import axios from 'axios';

const Update = ({ product }) => {
  const [product_name, setProduct_name] = useState(product.product_name);
  const [opening_stock, setOpening_stock] = useState(product.opening_stock);
  const [new_purchase, setNew_purchase] = useState(product.new_purchase);
  const [output, setOutput] = useState(product.output);

  const handleProductNameChange = (event) => {
    setProduct_name(event.target.value);
  };

  const handleOpeningStockChange = (event) => {
    setOpening_stock(event.target.value);
  };

  const handleNewPurchaseChange = (event) => {
    setNew_purchase(event.target.value);
  };

  const handleOutputChange = (event) => {
    setOutput(event.target.value);
  };

  const updateProduct = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      product_name,
      opening_stock,
      new_purchase,
      output,
    };

    try {
      await axios.put(`http://localhost:2400/product/update/${product.id}`, updatedProduct);
      alert('Product has been updated successfully!');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed to update product!');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={updateProduct}>
          <input
            type='text'
            placeholder='Item Name'
            required
            className='border border-2 border-blue-900 rounded shadow-md'
            value={product_name}
            onChange={handleProductNameChange}
          />
          <input
            type='number'
            placeholder='Opening Stock'
            required
            className='border border-2 border-blue-900 rounded shadow-md'
            value={opening_stock}
            onChange={handleOpeningStockChange}
          />
          <input
            type='number'
            placeholder='New Purchase'
            required
            className='border border-2 border-blue-900 rounded shadow-md'
            value={new_purchase}
            onChange={handleNewPurchaseChange}
          />
          <input
            type='number'
            placeholder='Output'
            required
            className='border border-2 border-blue-900 rounded shadow-md'
            value={output}
            onChange={handleOutputChange}
          />
          <button type='submit' className='bg-blue-500 px-10 ml-2 rounded border border-blue-950 shadow-md'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;