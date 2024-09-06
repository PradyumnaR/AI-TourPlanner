import MemberProfile from "./MemberProfile";
import NavLinks from "./Navlinks";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  //bg-base-300
  return (
    <div className='px-4 w-80 min-h-full py-12 grid grid-rows-[auto,1fr,auto]'>
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
}

export default Sidebar;
