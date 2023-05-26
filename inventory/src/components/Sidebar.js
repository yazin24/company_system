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
      <div className="whole-sidebar">
        <nav className=''>
          <ul>
            <li className=''><Link to='/'>
              <div className=''>
                <div><FaHome className='' /></div>
                <div>Home</div>
              </div>
            </Link></li>
            <li className=''><Link to='/add'>
              <div className=''>
                <div><FaPlusCircle className='' /></div>
                <div>Add Items</div>
              </div>
            </Link></li>
            <li className=''><Link to='/'>
              <div className=''>
                <div><FaBox className='' /></div>
                <div>Purchase Order</div>
              </div>
            </Link></li>
            <li className=''><Link to='/'>
              <div className=''>
                <div><FaTools className='' /></div>
                <div>Settings</div>
              </div>
            </Link></li>
            <li className=''><Link to='/'>
              <div className=''>
                <div><FaPenSquare className='' /></div>
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