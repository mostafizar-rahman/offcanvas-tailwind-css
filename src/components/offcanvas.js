'use client'
import React, { useEffect } from 'react'

const Offcanvas = ({ setIsOffcanvaseActive, isOffcanvaseActive }) => {
    useEffect(() => {
        if (isOffcanvaseActive) {
            document.body.style.overflow = "hidden"
        }
        else{
            document.body.style.overflow = "auto"
        }
    }, [isOffcanvaseActive])
    return (
        <div className={`w-full min-h-screen h-full bg-blue-600 fixed ${isOffcanvaseActive ? "top-0" : "-top-full"} left-0 transition-all duration-700`}>
            <div className='w-full relative'>
                <button onClick={() => setIsOffcanvaseActive(false)} className='absolute right-2 top-2'>Close</button>
            </div>
            <div className='h-full w-full flex justify-center items-center'>
                <input type='text' placeholder='Search' />
            </div>
        </div>
    )
}

export default Offcanvas