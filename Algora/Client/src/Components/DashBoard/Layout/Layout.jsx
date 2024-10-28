
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Loader from '../../Loader'

function DashboardLayout() {
  return (
    <>
    <div>
     
      <div className='flex'>
        <div className='sticky'>
            <Sidebar/>
        </div>
        <div className='w-full'>
      <Header/>
      <Outlet/>
        </div>
    </div>
    </div>

    </>
  )
}

export default DashboardLayout
