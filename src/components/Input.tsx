import React from 'react'

const Input = ({type, name, value, className, inputClassName, apendIcon, prependIcon}:{name:string, value:string|number, className:string, inputClassName:string, type:string, apendIcon?:string, prependIcon?: string}) => {
  return (
    <div className={`${className} relative flex items-center`}>
    {prependIcon && <i className={`${prependIcon} text-2xl text-black absolute left-4`}/>}
    <input type={type} name={name} defaultValue={value} className={`${inputClassName} focus:ring-0 pls-plus focus-visible:outline-none rounded-md h-12 w-96 text-black px-4 flex items-center ${prependIcon? 'pl-12':''} ${apendIcon? 'pr-12':''}`} />
    {apendIcon && <i className={`${apendIcon} text-2xl text-black absolute right-4`}/>}
    </div>
  )
}

export default Input