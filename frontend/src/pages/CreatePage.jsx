import React, { useState } from 'react'
import { useProductStore } from '../store/product.store.js'
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreatePage() {
    const [newProduct,setNewProduct]=useState(
        {
            name:'',
            price:'',
            image:''
        }
    
    )
    const {createProduct}=useProductStore()    
    async function handleSubmit (e){
        e.preventDefault()
        const { success, message } = await createProduct(newProduct);
        if (success) {
            toast.success('Product created successfully!', {
              autoClose: 5000, // Duration in milliseconds
            });
          }
        
        console.log(`success :${success}, message:${message}`);
        setNewProduct({ name: "", price: "", image: "" });
        
    }
   
    
    
    
    
  return (
    <div className='flex items-center flex-col w- gap-20'>
        <h3 className='text-white text-4xl text-center font-semibold '>Create Page</h3>
        <div className='w-96 h-auto bg-slate-300  px-6 py-6 rounded-xl'>
        <form onSubmit={handleSubmit}className='w-full '>
            <input className='w-full my-5 px-5 py-2 rounded-lg text-black text-2xl focus:outline-none focus:border-none' type="text" name='name' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}  placeholder='name..'/> <br />
            <input  className='w-full my-5 px-5 py-2 rounded-lg text-black text-2xl focus:outline-none focus:border-none' type="text" name='price' value={newProduct.price} onChange={(e)=>{setNewProduct({...newProduct,price:e.target.value})}} placeholder='price..'/> <br />
            <input className='w-full my-5 px-5 py-2 rounded-lg text-black text-2xl focus:outline-none focus:border-none' type="text" name='image' value={newProduct.image} onChange={(e)=>{setNewProduct({...newProduct,image:e.target.value})}} placeholder='image url..'/> <br />
            <button type='submit'  className='bg-blue-100 w-full rounded-lg py-1 text-xl focus:outline-none focus:border-none'>SUBMIT</button>
        </form>
        </div>
        <ToastContainer />
    </div>
     
  )
}

export default CreatePage