import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({img, title , id_p}) => {
  return (
    <>
    <Link  to={`/details/${id_p}`} className='flex justify-center items-center flex-col m-3 h-60 w-52 bg-white border border-zinc-300 rounded-xl'>
        <img className='h-[70%]' src={img} alt="" />
        <h4 id = "title-text" className='text-orange-500 hover:text-cyan-500'>{title}</h4>
    </Link>

</>
  )
}

export default Card