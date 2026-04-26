import React from 'react'

const Navbar = () => {
  return (
    <div className='flex-row w-full m-auto p-4'>
        <nav className='flex items-center justify-center'>
            <div className='text-2xl'>SudoZen Logs</div>
            <div >
              <ul className='flex gap-4 p-4'>
                <li >home</li>
                <li>pages</li>
                <li>about</li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar