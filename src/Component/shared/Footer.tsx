import React from 'react'

function Footer() {
  return (
    <div className='absolute w-full m-auto p-4 bottom-0 border-t-2 border-white'>
        <div className='flex gap-4 '>
            <div>
                <div>Logo</div>
            </div>
            <div>
                <ul className='flex justify-center gap-4'>
                    <li>home </li>
                    <li>about</li>
                     <li>contact</li>
                </ul>
            </div>
        </div>
        <div className='text-sm flex justify-center'>All rights reserved</div>
    </div>
  )
}

export default Footer