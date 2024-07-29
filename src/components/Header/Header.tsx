import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {

    const cartState = useSelector((state : RootState) => state.cart)

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
            <Link to={"/cart"} className='text-black hover:text-blue-700'>
                Cart
            </Link>

            <div className="cartContainer relative">
                <CiShoppingCart className='text-4xl font-bold' />
                <div className="count bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs absolute -top-2 -right-2">
                    {cartState.data.length}
                </div>
            </div>
         

            <Button>
                Dashboard
            </Button>
         
        </div>
    </div>
  )
}

export default Header