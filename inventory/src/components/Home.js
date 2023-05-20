import React from 'react'
import {FaPen, FaTrash} from 'react-icons/fa';

const Home = () => {
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
                <tr>
                    <td className='text-center border border-gray-950'>sample item</td>
                    <td className='text-center border border-gray-950'>20 Bags</td>
                    <td className='text-center border border-gray-950'>2 Bags</td>
                    <td className='text-center border border-gray-950'>22 Bags</td>
                    <td className='text-center border border-gray-950'>3 Bags</td>
                    <td className='text-center border border-gray-950'>19 Bags</td>
                    <td className='text-center border border-gray-950'><button className='text-xs text-white bg-blue-700 m-1 rounded-md p-1'><FaPen/></button><button className='text-xs text-white bg-red-700 m-1 rounded-md p-1'><FaTrash/></button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home