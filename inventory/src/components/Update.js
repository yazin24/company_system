import React from 'react';
import axios from 'axios';

const Update = ({product}) => {

    //const []

  return (
    <div>
        <div>
            <form>
                <input type='text' placeholder='Item Name' required className='border border-2 border-blue-900 rounded shadow-md'/>
                <input type='number' placeholder='Opening Stock' required className='border border-2 border-blue-900 rounded shadow-md'/>
                <input type='number' placeholder='New Purchase' required className='border border-2 border-blue-900 rounded shadow-md'/>
                <input type='number' placeholder='Output' required className='border border-2 border-blue-900 rounded shadow-md'/>
                <button className='bg-blue-500 px-10 ml-2 rounded border border-blue-950 shadow-md'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update