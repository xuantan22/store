'use client'
import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { AiOutlineGoogle } from 'react-icons/ai'
import Link from 'next/link'
const RegisterForm = () => {
  return (
    <>
    <Heading title='Sign in to E-shop'/>
    <Button 
    outline
    label='Sign up to Google'
    icon={AiOutlineGoogle}
    onClick={() => {}}/>
    <hr className='bg-slate-300 w-full h-px'/>
    <input 
        id="name"
        placeholder='Name'
        required
        className='w-full py-1
        outline-none border
        border-slate-500'/>
    <input 
        id='email' 
        placeholder='Email' 
        type='text'
        required
        className='w-full py-1 
        outline-none border 
        border-slate-500'></input>
    <input 
          id='password' 
          placeholder='Password' 
          type='password'
          required
          className='w-full py-1
          outline-none border  
          border-slate-500'></input>
    <Button label='Login' onClick={() => {}}/>
    <p>
        Already have an account?
        <Link className='underline' href={"/login"}>
        Login</Link>
    </p>
    </>
  )
}

export default RegisterForm