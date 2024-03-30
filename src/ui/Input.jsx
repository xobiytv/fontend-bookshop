import React from 'react'

export default function Input({name, placeholder, type, onChange, inputClass}) {
  return (
    <div>
        
        <div className='w-full flex justify-center'>
            <input name={name} type={type} placeholder={placeholder} onChange={onChange} style={{ boxShadow: '0px 4px 18px 0px #3333330A'}} className={`w-10/12  border-[1px]  bg-white  rounded-md p-2 border-[#EBEBEB] ${inputClass}`}  />
        </div>
    </div>
  )
}
