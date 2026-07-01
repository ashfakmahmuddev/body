import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={`max-w-[1600px] mx-auto ${className}`}>{children}</div>
  )
}
