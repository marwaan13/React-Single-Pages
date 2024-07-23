
import LandingSvg from '../../assets/landing.svg'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const HeroSection = () => {
  return (
    <div className='flex items-center gap-4 justify-around w-[80%] mx-auto my-4'>
       <div className="textContainer w-[60%]">
       <h1 className='text-4xl font-bold my-3'>
            Build, Deploy and Product The Next Social Media App
        </h1>
        <p className='text-xs text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit perferendis quibusdam nesciunt ratione vitae. Soluta dolor, veniam quo praesentium necessitatibus sapiente debitis quidem itaque nesciunt consequuntur, qui architecto dignissimos.
        </p>

        
        <div className="flex items-center gap-4 w-[60%]">
            <Input placeholder='Enter Your Email' />
            <Button variant={'default'} className='my-4'>
            Subscribe
        </Button>

        </div>


       </div>


       <div className="imgContainer w-[40%]">
        <img src={LandingSvg} alt="" />
       </div>
    </div>
  )
}

export default HeroSection