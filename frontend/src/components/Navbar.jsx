import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='flex justify-between container p-4 ' >
      <Link to='/'>
      <h1 className='text-white  flex gap-2 font-bold text-2xl '>PRODUCT STORE <FaCartShopping className='mt-[5px]'/> </h1>
      </Link>
      
      <div className="button flex gap-4">
        <Link to='/create'>
        <button className='p-1 bg-slate-600 text-slate-200 rounded-md border border-slate-600 '><CiSquarePlus className='text-3xl'/></button></Link>
        <button className='p-1 bg-slate-600 text-slate-200 rounded-md border border-slate-600 '><CiLight  className='text-3xl'/></button>
      </div>
    </div>
  )
}

export default Navbar