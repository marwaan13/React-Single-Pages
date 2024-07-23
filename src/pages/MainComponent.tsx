import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'

const MainComponent = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <div className="outlet flex-grow">
            <Outlet />
        </div>
        <footer className='text-center bg-slate-900 text-white p-3 rounded-t-xl'>
            Copy right &copy; Tiigsi Solutions {new Date().getFullYear()}
        </footer>
    </div>
  )
}

export default MainComponent