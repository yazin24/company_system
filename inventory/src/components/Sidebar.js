import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import {FaPlusCircle} from 'react-icons/fa';
import {FaBox} from 'react-icons/fa';
import {FaTools} from 'react-icons/fa';
import { FaPenSquare } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div>
      <div className="flex bg-gray-900 h-screen w-52 text-white shadow-lg">
        <nav className=''>
          <ul>
            <li className='h-8 w-52 hover:bg-blue-500 p-8'><Link to='/'>
              <div className='flex items-center'>
                <div><FaHome className='text-xl mr-1' /></div>
                <div>Home</div>
              </div>
            </Link></li>
            <li className='h-8 w-52 hover:bg-blue-500 p-8'><Link to='/add'>
              <div className='flex items-center '>
                <div><FaPlusCircle className='text-xl mr-1' /></div>
                <div>Add Items</div>
              </div>
            </Link></li>
            <li className='h-8 w-52 hover:bg-blue-500 p-8'><Link to='/'>
              <div className='flex items-center '>
                <div><FaBox className='text-xl mr-1' /></div>
                <div>Purchase Order</div>
              </div>
            </Link></li>
            <li className='h-8 w-52 hover:bg-blue-500 p-8'><Link to='/'>
              <div className='flex items-center '>
                <div><FaTools className='text-xl mr-1' /></div>
                <div>Settings</div>
              </div>
            </Link></li>
            <li className='h-8 w-52 hover:bg-blue-500 p-8'><Link to='/'>
              <div className='flex items-center'>
                <div><FaPenSquare className='text-xl mr-1' /></div>
                <div>Update</div>
              </div>
            </Link></li>

          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar