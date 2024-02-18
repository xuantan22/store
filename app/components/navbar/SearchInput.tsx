import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";

const SearchInput = () => {
  return (
    <div className='border 
    px-4 py-1 items-center
    justify-center grid grid-cols-5
    max-w-[300px] rounded-3xl bg-white '>
        <div className='cursor-pointer
        border-r-2 border-slate-500
        bg-white
        '>
            <LiaSearchSolid/>
        </div>
        <div>
            <input placeholder='enter'
            className='outline-none px-4 
            rounded-r-3xl'/>
        </div>
    </div>
  )
}

export default SearchInput