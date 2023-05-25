import React, {useState, useEffect} from 'react'
import {FaPen, FaTrash} from 'react-icons/fa';
import axios from 'axios';
import Update from './Update';

const Home = () => {

    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const productData = async () => {
            try {
                const response = await axios.get('http://localhost:2400/product/list-products');
                setData(response.data);
            }catch(err) {
                console.error(err);
            }
        };
        productData();
    },[])

    const deleteProduct  = async (id) => {
        try {
            await axios.delete(`http://localhost:2400/product/${id}`);
            alert('Product has been deleted!')
            window.location.reload();
        }catch(err) {
            console.error(err)
        }
    };

    const selectProduct = (product) => {
        setSelectedProduct(product);
    };

  return (
    <div className='table-body'>
       {selectedProduct && <Update product={selectedProduct}/>}
        <table className='table w-full bg-white border border-gray-950 shadow-md ml-6 mt-2'>
            <thead className='bg-green-600 text-white'>
                <tr>
                    <th className='border border-gray-950'>Item</th>
                    <th className='border border-gray-950'>Opening Stock</th>
                    <th className='border border-gray-950'>New Purchase</th>
                    <th className='border border-gray-950'>Total Stock</th>
                    <th className='border border-gray-950'>Output</th>
                    <th className='border border-gray-950'>Ending Stock</th>
                    <th className='border border-gray-950'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                     <tr key = {item.id}>
                     <td className='text-center border border-gray-950'>{item.product_name}</td>
                     <td className='text-center border border-gray-950'>{item.opening_stock}</td>
                     <td className='text-center border border-gray-950'>{item.new_purchase}</td>
                     <td className='text-center border border-gray-950'>{item.total_stock}</td>
                     <td className='text-center border border-gray-950'>{item.output}</td>
                     <td className='text-center border border-gray-950'>{item.ending_stock}</td>
                     <td className='text-center border border-gray-950'><button className='text-xs text-white bg-blue-700 m-1 rounded-md p-1' onClick={()=> selectProduct(item)}><FaPen/></button><button className='text-xs text-white bg-red-700 m-1 rounded-md p-1' onClick={() => deleteProduct(item._id)}><FaTrash/></button></td>
                 </tr>
                ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default Home