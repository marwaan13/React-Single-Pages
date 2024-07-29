import CartItem from '@/components/Cart/CartItem'
import React, { useState } from 'react'

const Cart = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            itemName : "Iphone 12",
            price : 1200,
            img_url : "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        },

        {
            id : 2,
            itemName : "Iphone 13",
            price : 1400,
                    img_url : "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        },
        {
            id : 3,
            itemName : "S21 ULTRA",
            price : 890,
                    img_url : "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        }
    ])

  return (
    <div>
        <div className="items-container grid grid-cols-3 w-[60%] mx-auto gap-4">
            {products.map((item) => {
                return <CartItem item={item} key={item.id} />
            })}
        </div>
    </div>
  )
}

export default Cart