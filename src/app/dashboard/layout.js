import Sidebar from "@/components/Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";

function DashboardLayout({ children }) {
  return (
    <div className='drawer lg:drawer-open h-full bg-travel bg-cover bg-center'>
      <input type='checkbox' id='dashboard-drawer' className='drawer-toggle' />
      <div className='drawer-content overflow-scroll px-8 py-12 pl-5'>
        <label
          htmlFor='dashboard-drawer'
          className='drawer-button lg:hidden fixed top-6 right-6'
        >
          <FaBarsStaggered className='w-8 h-8 text-primary' />
        </label>
        <div className='h-full'>{children}</div>
      </div>
      <div className='drawer-sidebar hover:shadow-2xl'>
        <label
          htmlFor='dashboard-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}

export default DashboardLayout;
