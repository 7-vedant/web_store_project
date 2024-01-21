import axios from '../utils/axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link , useParams} from 'react-router-dom'
import Loding from './Loding';
// import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants';


const Card_details = () => {

  const [product , setproduct] = useState(null)

  const {id} = useParams();
  const getsingelproduct = async ()=>{
    try{
      const {data} = await axios.get(`/products/${id}`);
      setproduct(data)
    }catch (e){
      console.log(e)
    }
  };

  useEffect(()=>{
    getsingelproduct()
  },[])

  return product ? ( 
    <div className='w-[80%] m-auto py-[10%] h-full text-black flex justify-around items-center'>
       <img className='h-[60vh]' src={product.image} alt="" />
       <div>
       <h4 className='text-4xl font-semibold text-zinc-800 w-[80vh]'>{product.title}</h4>
       <h4 className='text-2xl text-orange-600 font-semibold mt-3'>{product.price}$</h4>
       <h3 className='font-semibold text-zinc-500'>{product.category}</h3>
       <p className='text-zinc-700 mt-5 mb-5 w-[80vh]'>{product.description}</p>
       <div className='w-[23vh] flex justify-between '>
       <Link className='bg-lime-500 hover:bg-lime-700 hover:ease-in-out py-2 px-3 rounded-md  text-white' > Edit </Link>
       <Link className='bg-red-500 hover:bg-red-700 py-2 px-3 rounded-md text-white'> Delete </Link>
       </div>
       </div>
    </div> ):(<Loding/>
  )
}

export default Card_details