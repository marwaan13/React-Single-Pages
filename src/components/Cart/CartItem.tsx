import { ICartItem } from '@/types/cart'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addToCart } from '@/redux/slices/cartSlice'

const CartItem = ({item} : {item : ICartItem}) => {
    const dispatch= useDispatch<AppDispatch>()

    const handleAddToCart = () => {
        dispatch(addToCart(item))
    }

  return (
    <div className='border p-3 rounded-xl shadow-md'>
        <img src={item.img_url} alt="" className='rounded-xl' />
        <h1>{item.itemName}</h1>
        <p>${item.price}</p>

        <Button onClick={handleAddToCart} className='my-4'>Add to cart</Button>
    </div>
  )
}

export default CartItem