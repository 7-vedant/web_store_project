import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import Loding from './Loding';
import { useLocation } from 'react-router-dom';
import axios from '../utils/axios';
import { useEffect, useState } from 'react';
// import Category from './Category';


const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);

  // let filteredProducts = products && products;

  const [filteredProducts, setfilteredProducts] = useState(null)

  const getproductscategory = async ()=>{
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!filteredProducts) setfilteredProducts(products)
    if (category != "undefined") getproductscategory()
  }, [category, products]);
  
  console.log(filteredProducts);

  return products ? (

    <>
    <Navbar/>
    <div className=' w-[85%]  flex flex-wrap h-screen overflow-x-hidden overflow-y-auto '>
    
        {filteredProducts && filteredProducts.map((p,i)=>(
          <Card key={i} id_p={p.id} title ={p.title} img = {p.image} />
        ) )}
  
    </div>
    </>
  ):( 
  <Loding/> )
  
}

export default Home