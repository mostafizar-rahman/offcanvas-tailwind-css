"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Offcanvas from './offcanvas'

const Header = () => {
  const [isOffcanvaseActive, setIsOffcanvaseActive] = useState(false)
  return (
    <div className='flex justify-between items-center'>
      <Link href={""} className='text-3xl font-bold'>Logo</Link>
      <div>
        <button onClick={()=> setIsOffcanvaseActive(true)} className='px-3 py-1 bg-blue-600'>Search</button>
      </div>
      <Offcanvas isOffcanvaseActive={isOffcanvaseActive} setIsOffcanvaseActive={setIsOffcanvaseActive} />
    </div>
  )
}

export default Header