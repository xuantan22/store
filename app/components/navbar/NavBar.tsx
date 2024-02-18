import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { Redressed } from 'next/font/google'
import CartCount from './CartCount'
import UserMenu from './UserMenu'
import SearchInput from './SearchInput'
const redressed = Redressed({subsets:['latin'], weight:['400']})
const NavBar = () => {
  return (
    <div className='
    sticky
    to-0
    w-full
    bg-slate-300
    z-20
    shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='
                flex
                items-center
                justify-between
                gap-1
                md-gap-0'>
                    <Link href={'/'} className={`${redressed.className}`}>XT-Shop</Link>
                    <SearchInput/>
                    <div className='flex items-center gap-8 md:gap-12'>
                        <CartCount/>
                        <UserMenu/>
                    </div>

                </div>
                    <div className='grid grid-cols-6
                    bg-slate-300 mt-6'>
                        <Link href={"/"} 
                        className='justify-self-center
                        hover:bg-slate-700 rounded-md
                        p-2'>
                            Home
                        </Link>

                        <Link href={"/contact"}  
                        className='justify-self-center
                        hover:bg-slate-700 rounded-md
                        p-2'>
                            Contact
                        </Link>

                        <Link href={"/Shippingpolicy"} 
                        className='justify-self-center 
                        hover:bg-slate-700 p-2
                        rounded-md'>
                            Shipping Policy
                        </Link>

                        <Link href={"/aboutus"} 
                        className='justify-self-center 
                        hover:bg-slate-700 rounded-md 
                        p-2'>
                            About Us
                        </Link>

                        <Link href={"/event"} 
                        className='justify-self-center
                        hover:bg-slate-700 rounded-md 
                        p-2 '>
                            Event
                        </Link>
    
                    </div>
            </Container>
        </div>
    </div>
  )
}

export default NavBar