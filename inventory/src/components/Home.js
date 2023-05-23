import React, {useState, useEffect} from 'react'
import {FaPen, FaTrash} from 'react-icons/fa';
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);

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

  return (
    <div>
        <table className='table bg-white border border-gray-950 shadow-md ml-6 mt-24'>
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
                     <td className='text-center border border-gray-950'>{item.itemName}</td>
                     <td className='text-center border border-gray-950'>{item.openingStock}</td>
                     <td className='text-center border border-gray-950'>{item.newPurchase}</td>
                     <td className='text-center border border-gray-950'>{item.totalStock}</td>
                     <td className='text-center border border-gray-950'>{item.output}</td>
                     <td className='text-center border border-gray-950'>{item.endingStock}</td>
                     <td className='text-center border border-gray-950'><button className='text-xs text-white bg-blue-700 m-1 rounded-md p-1'><FaPen/></button><button className='text-xs text-white bg-red-700 m-1 rounded-md p-1'><FaTrash/></button></td>
                 </tr>
                ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default Home