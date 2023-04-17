import React from 'react'
import Form from '../basic/Form'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='bg-slate-50 h-screen'>
        <Navbar />
        <div className='container flex flex-col items-center justify-around h-96'>
            <h1 className='font-bold text-3xl text-zinc-950'>Download youtube Videos in MP3</h1>
          <Form />
        </div>
    </div>
  )
}

export default Header