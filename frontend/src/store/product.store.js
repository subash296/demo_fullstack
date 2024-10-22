import  { create } from 'zustand'
import axios from 'axios'

export  const useProductStore= create((set)=>({
    products :[],
    setProducts: (products)=>setProducts({products}),
    createProduct:async(newProduct)=>{
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return ({message:"please fill all the input fields",success:false})
        }
        const res=await axios.post('/api/products',newProduct) 
        console.log(`created product : ${res.data.data}`);
        
        set((state) => ({ products: [...state.products, res.data.data] }));
        return { success: true, message: "Product created successfully" };
    },
    fetchProducts:async()=>{
        const res=await axios.get('/api/products')
        set({products:res.data.data}) 
    },
    updateProduct:async(updatedProduct,id)=>{
        const res= await axios.put(`/api/products/${id}`,updatedProduct)
       
        if (!res.data.success) return { success: false, message: data.message };
        set((state)=>({
            products:state.products.map((product)=>(product._id===id ? res.data.data :product))
        }))
        console.log(res.data);
        
        return { success: true, message: res.data.message };

    },
    deleteProduct: async (id)=>{
        const res= await axios.delete(`/api/products/${id}`)
        if (!res.data.success) return { success: false, message: data.message };
        set((state)=>({products:state.products.filter((product)=>product._id!==id)}))
		return { success: true, message: res.data.message };
    }

}))

