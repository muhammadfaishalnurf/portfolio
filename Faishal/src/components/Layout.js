import React from 'react'

const Layout = ({children, className=""}) => {
  return (
<<<<<<< HEAD
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
=======
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
>>>>>>> a0e01898150a7644ce66a7ac9e0b2e9d9b331733
       {children}
    </div>
  )
}

export default Layout