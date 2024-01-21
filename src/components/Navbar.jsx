import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';


function Navbar() {

  const [products] = useContext(ProductContext);

  let distinc_category = products && products.reduce((acc, cv)=>[...acc,cv.category],[]);

  distinc_category = [...new Set(distinc_category)];

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},
    ${(Math.random()*255).toFixed()},
    ${(Math.random()*255).toFixed()})`
  }

  // console.log(color())

  return (
    <nav className='pt-5 w-[15%] h-screen bg-slate-300 text-gray-800 flex flex-col items-center '>
    <a className='py-2 px-5 mb-5 border border-sky-500 rounded-full text-sky-500  hover:bg-sky-500 hover:text-white hover:ease-in-out duration-500' href="/create">Add New Product</a>
    <hr className='h-px my-3 w-[80%] bg-black' />
    <h1 className=' mb-4 font-sans font-regular text-4xl w-[80%]'>Category</h1>
    <div className='w-[80%]'>

      {distinc_category.map((c,i)=>(
      <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center'><span style={{backgroundColor: color()}} className='mr-2 block w-4 h-4 rounded-full'></span>{c}</Link>
      ))}

      
      
    </div>
  </nav>
  )
}

export default Navbar