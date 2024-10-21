import React,{useEffect} from 'react'
import PostCards from '../components/PostCards'
import { useProductStore } from '../store/product.store.js'
import { Link } from 'react-router-dom'
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HomePage() {
  const {fetchProducts,products}=useProductStore()
    
  
  useEffect(()=>{
    fetchProducts()
     
  },[])
    
  return (
    <>
    <div className='flex flex-wrap  w-full h-auto bg-gray-200 p-10 justify-evenly'>
    {products.map((product)=>( <PostCards key={product._id} product={product} />))}
    </div>
    <ToastContainer />
   
    {products.legth ===0 &&  <div className="message bg-inherit w-full text-center m-6">
    <p className='text-white text-xl '>No Products To Show <Link to='/create' className='text-blue-500 cursor-pointer hover:underline'>Create</Link> </p>
   </div>}

  
    
   
    </>
  )
}

export default HomePage