import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='grid border-r w-[20%] min-h-screen'>
         <h1 className="text-3xl font-bold text-blue-500">
                Softee.
        </h1>

        <Link to={'/dashboard/main'}>
            Main
        </Link>
        <Link to={'/dashboard/users'}>
            Users
        </Link>
        <Link to={'/dashboard/clients'}>
            Clients
        </Link>
        <Link to={'/dashboard/main'}>
            Main
        </Link>
    </div>
  )
}

export default Sidebar