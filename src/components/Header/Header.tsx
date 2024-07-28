import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='flex items-center justify-around p-3'>
        <div className="logo">
       <Link to={"/"}>
       <h1 className="text-3xl font-bold text-blue-500">
                Softee.
        </h1>
        </Link>
        </div>

        <div className="menus flex items-center gap-4">
            <Link to={"/signin"} className='text-black hover:text-blue-700'>
                Sign In
            </Link>
            <Link to={"/signin"} className='text-black hover:text-blue-700'>
                Sign up
            </Link>
            <Link to={"/todo"} className='text-black hover:text-blue-700'>
                Todo app
            </Link>
         

            <Button>
                Dashboard
            </Button>
         
        </div>
    </div>
  )
}

export default Header