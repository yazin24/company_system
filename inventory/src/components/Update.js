import React, { useState } from 'react';
import axios from 'axios';

const Update = ({ product }) => {
  const [itemName, setItemName] = useState(product.itemName);
  const [openingStock, setOpeningStock] = useState(product.openingStock);
  const [newPurchase, setNewPurchase] = useState(product.newPurchase);
  const [output, setOutput] = useState(product.output);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleOpeningStockChange = (event) => {
    setOpeningStock(event.target.value);
  };

  const handleNewPurchaseChange = (event) => {
    setNewPurchase(event.target.value);
  };

  const handleOutputChange = (event) => {
    setOutput(event.target.value);
  };

  const updateProduct = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      itemName,
      openingStock,
      newPurchase,
      output,
    };

    try {
      await axios.put(`http://localhost:2400/product/${product._id}`, updatedProduct);
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
            value={itemName}
            onChange={handleItemNameChange}
          />
          <input
            type='number'
            placeholder='Opening Stock'
            required
            className='border border-2 border-blue-900 rounded shadow-md'
            value={openingStock}
            onChange={handleOpeningStockChange}
          />
          <input
            type='number'
            placeholder='New Purchase'
            required
            className='border border-2 border-blue-900 rounded shadow-md'
            value={newPurchase}
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