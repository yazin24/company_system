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
      <div className="flex flex-col bg-gray-800 h-screen w-64">
        <nav className='flex flex-grow'>
          <ul>
            <li className='flex items-center text-white ml-12 mt-24 hover:text-green-400'><Link to='/'>
              <div className='flex flex-row'>
                <div><FaHome className='text-2xl mr-2' /></div>
                <div>Home</div>
              </div>
            </Link></li>
            <li className='flex items-center text-white ml-12 mt-10 hover:text-green-400'><Link to='/'>
              <div className='flex flex-row'>
                <div><FaPlusCircle className='text-2xl mr-2' /></div>
                <div>Add Items</div>
              </div>
            </Link></li>
            <li className='flex items-center text-white ml-12 mt-10 hover:text-green-400'><Link to='/'>
              <div className='flex flex-row'>
                <div><FaBox className='text-2xl mr-2' /></div>
                <div>Purchase Order</div>
              </div>
            </Link></li>
            <li className='flex items-center text-white ml-12 mt-10 hover:text-green-400'><Link to='/'>
              <div className='flex flex-row'>
                <div><FaTools className='text-2xl mr-2' /></div>
                <div>Settings</div>
              </div>
            </Link></li>
            <li className='flex items-center text-white ml-12 mt-10 hover:text-green-400'><Link to='/'>
              <div className='flex flex-row'>
                <div><FaPenSquare className='text-2xl mr-2' /></div>
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