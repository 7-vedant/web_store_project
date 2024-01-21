import { useEffect, useState } from "react"
import React from 'react'
import { createContext } from "react";
import axios from "./axios";


export const ProductContext = createContext()

const Context = (props) => {

    const [products,setproducts] = useState(null);

    const getproducts = async()=>{
        try{
            const { data } = await axios("/products");
            setproducts(data);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getproducts();
    },[])

  return (
    <ProductContext.Provider value={[products,setproducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context