import React, {useState, useEffect} from 'react'
import {FaPen, FaTrash} from 'react-icons/fa';
import axios from 'axios';
import Update from './Update';
import {useNavigate, Link} from 'react-router-dom';

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
            await axios.delete(`http://localhost:2400/product/delete/${id}`);
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
    <div className='whole-table mt-24'>
       {selectedProduct && <Update product={selectedProduct}/>}
        <table className='table-body shadow-lg ml-6'>
            <thead className='bg-green-500'>
                <tr>
                    <th className='border border-gray-900'>Product</th>
                    <th className='border border-gray-900'>Opening Stock</th>
                    <th className='border border-gray-900'>New Purchase</th>
                    <th className='border border-gray-900'>Total Stock</th>
                    <th className='border border-gray-900'>Output</th>
                    <th className='border border-gray-900'>Ending Stock</th>
                    <th className='border border-gray-900'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                     <tr key = {item.id}>
                     <td className='border border-gray-900 text-center'>{item.product_name}</td>
                     <td className='border border-gray-900 text-center'>{item.opening_stock}</td>
                     <td className='border border-gray-900 text-center'>{item.new_purchase}</td>
                     <td className='border border-gray-900 text-center'>{item.total_stock}</td>
                     <td className='border border-gray-900 text-center'>{item.output}</td>
                     <td className='border border-gray-900 text-center'>{item.ending_stock}</td>
                     <td className='border border-gray-900 text-center'><button className='bg-blue-700 p-1 rounded-sm -4 my-1 text-white' onClick={()=> selectProduct(item)}><FaPen/></button><button className='bg-red-700 p-1 rounded-sm ml-2 my-1 text-white' onClick={() => deleteProduct(item.id)}><FaTrash/></button></td>
                 </tr>
                ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default Home