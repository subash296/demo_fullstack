import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useProductStore } from '../store/product.store.js';
import { MdCancel } from "react-icons/md";
import { toast, ToastContainer} from 'react-toastify';

function PostCards({product}) {

  const{updateProduct,deleteProduct}=useProductStore()
  const[updatedProduct,setUpdatedProduct]=useState({
    name:product.name,
    price:product.price,
    image:product.image
  })
  const[display,setDisplay]=useState(false)
 function handleDisplay(e){
  e.preventDefault()
  setDisplay(false)
 }
  async function handleEdit(e){
    e.preventDefault()
    
    setDisplay(true)
    
    
  }

  async function handleUpdate(e,pid,updatesProduct){
    e.preventDefault()
    
   const {success,message}=await updateProduct(updatesProduct,pid)
   if (success) {
    toast.success('Product updated successfully!', {
      autoClose: 5000, // Duration in milliseconds
    });
  }
   console.log(`success:${success} message:${message}`);
  }
  async function handleDelete(e,pid){
      
    e.preventDefault()

   const {success,message}=await deleteProduct(pid)
   if (success) {
    toast.success('Product deleted successfully!', {
      autoClose: 5000, // Duration in milliseconds
    });
  }
   console.log(`success:${success} message:${message}`);

  }

   
  return (
    <>
    <div className="images-container basis-1/3  w-full bg-gray-200 mb-7 " >
        
        <div className="image-container  h-auto border border-black shadow-md rounded-lg pb-8 w-80 ">
          <img src={product.image} alt={product.name}  className='w-full h-44 object-cover rounded-t-lg '/>
          <p className='mt-5 text-3xl ml-3'>{product.name}</p>
          <p className='text-2xl mt-2 ml-3'>${product.price}</p>
          <button className='bg-green-400 p-3 rounded-lg text-2xl mx-3 mt-4' onClick={handleEdit}><FaRegEdit /></button>
          <button className='bg-red-500 p-3 rounded-lg text-white text-2xl mx-3 mt-4' onClick={(e)=>handleDelete(e,product._id)}><MdDeleteOutline /></button>
        </div>

    </div>
    {display  &&
    <div className='w-full h-full bg-black  z-10 flex justify-center items-center absolute top-0 left-0 opacity-90  '>
      <div className='absolute bg-slate-200 rounded-xl opacity-100 '>  
      <button className='relative top-1 left-[340px]  text-2xl py-2' onClick={handleDisplay}><MdCancel /></button>
      <form className='w-auto p-10 '>
          
            <input className='w-full my-5 px-5 py-2 rounded-lg text-black text-2xl focus:outline-none focus:border-none' type="text" name='name' value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}  placeholder='name..'/> <br />
            <input  className='w-full my-5 px-5 py-2 rounded-lg text-black text-2xl focus:outline-none focus:border-none' type="text" name='price' value={updatedProduct.price} onChange={(e)=>{setUpdatedProduct({...updatedProduct,price:e.target.value})}} placeholder='price..'/> <br />
            <input className='w-full my-5 px-5 py-2 rounded-lg text-black text-2xl focus:outline-none focus:border-none' type="text" name='image' value={updatedProduct.image} onChange={(e)=>{setUpdatedProduct({...updatedProduct,image:e.target.value})}} placeholder='image url..'/> <br />
            <button type='submit'  className='bg-blue-100 w-full rounded-lg py-1 text-xl'onClick={(e)=>handleUpdate(e,product._id,updatedProduct)}>SUBMIT</button>
        </form>
        </div>
    <ToastContainer />
    </div>
}
    </>
  )
}

export default PostCards