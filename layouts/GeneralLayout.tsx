import React, { ReactNode } from 'react'
import { SideNavbar } from '../components/SideNavbar'

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideNavbar />
      <div className='lg:pl-[290px] h-screen mx-auto lg:ml-20 dark:bg-gray-800'>
        {children}
      </div>
    </section>
  )
}

export default GeneralLayout