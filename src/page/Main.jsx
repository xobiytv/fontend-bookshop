import React from 'react'
import Navbar from '../componets/Navbar'
import Hero from '../componets/Hero'
import Card from '../componets/Card'

export default function Main() {
    return (
        <div className='bg-[#333333] h-[100vh] '>

            <div className='px-12'>
                <Navbar />
            </div>
            <div className='px-16'>
                <Hero />
                <Card />
            </div>


        </div>
    )
}
