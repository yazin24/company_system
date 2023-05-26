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
    <div className='whole-table'>
       {selectedProduct && <Update product={selectedProduct}/>}
        <table className=''>
            <thead className=''>
                <tr>
                    <th className=''>Item</th>
                    <th className=''>Opening Stock</th>
                    <th className=''>New Purchase</th>
                    <th className=''>Total Stock</th>
                    <th className=''>Output</th>
                    <th className=''>Ending Stock</th>
                    <th className=''>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                     <tr key = {item.id}>
                     <td className=''>{item.product_name}</td>
                     <td className=''>{item.opening_stock}</td>
                     <td className=''>{item.new_purchase}</td>
                     <td className=''>{item.total_stock}</td>
                     <td className=''>{item.output}</td>
                     <td className=''>{item.ending_stock}</td>
                     <td className=''><button className='' onClick={()=> selectProduct(item)}><FaPen/></button><button className='' onClick={() => deleteProduct(item.id)}><FaTrash/></button></td>
                 </tr>
                ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default Home