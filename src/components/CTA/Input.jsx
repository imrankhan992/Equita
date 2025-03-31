import React from 'react'

export const Input = ({value,type,className,placeholder}) => {
  return (
    <>
    <input type={type} value={value} placeholder={placeholder} className={className} />
    </>
  )
}
