import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Add = () => {

  const [product_name, setProduct_name] = useState('');
  const [opening_stock, setOpening_stock] = useState(0);
  const [new_purchase, setNew_purchase] = useState(0);
  const [total_stock, setTotal_stock] = useState(0);
  const [output, setOutput] = useState(0);
  const [ending_stock, setEndingStock] = useState(0);  

  const navigate = useNavigate();

  const handleAddProductName = (event) => {
    setProduct_name(event.target.value);
  }
  const handleAddOpeningStock = (event) => {
    setOpening_stock(event.target.value);
  }
  const handleAddNewPurchase = (event) => {
    setNew_purchase(event.target.value);
  }
  const handleAddTotalStock = (event) => {
    setTotal_stock(event.target.value);
  }
  const handleAddOutput = (event) => {
    setOutput(event.target.value);
  }
  const handleAddEndingStock = (event) => {
    setEndingStock(event.target.value);
  }

  const addProduct = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:2400/product/add-product', {product_name, opening_stock, new_purchase, total_stock, output, ending_stock});
      alert('Product has been Added Successfully!')
      navigate('/');
    }catch(err) {
      console.error(err)
    };
  };

  return (
    <div className='flex justify-center items-center bg-white ml-6 mt-2 mx-auto'>
      <form onSubmit={addProduct}>
        <input type='text' placeholder='Product Name' className='border border-2 border-blue-900 rounded shadow-md block mb-4' onChange={handleAddProductName}  required/>
        <input type='number' placeholder='Opening Stock' className='border border-2 border-blue-900 rounded shadow-md block mb-4' onChange={handleAddOpeningStock} required/>
        <input type='number' placeholder='New Purchase' className='border border-2 border-blue-900 rounded shadow-md block mb-4' onChange={handleAddNewPurchase} required/>
        <input type='number' placeholder='Total Stock' className='border border-2 border-blue-900 rounded shadow-md block mb-4' onChange={handleAddTotalStock} required/>
        <input type='number' placeholder='Output' className='border border-2 border-blue-900 rounded shadow-md block mb-4' onChange={handleAddOutput} required/>
        <input type='number' placeholder='Ending Stock' className='border border-2 border-blue-900 rounded shadow-md block mb-4' onChange={handleAddEndingStock} required/>
        <button type="submit" className="btn btn-success btn-sm">Primary</button>
      </form>
      </div>
  )
}

export default Add