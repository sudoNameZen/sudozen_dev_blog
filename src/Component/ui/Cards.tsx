import React from 'react'

function Cards() {
  return (
    <div className=' max-w-[260px] max-h-[300px] border-white border-2 rounded-2xl'>
        <div className=' p-6 items-center justify-center'>
            <div className='text-2xl flex items-center justify-center'> here is heading</div>
            <div className='text-sm flex items-center justify-center'>here is small caption</div>
            <div>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, perspiciatis porro ab nobis veniam ea quo error veritatis doloremque sunt?</p>
            </div>
        </div>
    </div>
  )
}

export default Cards