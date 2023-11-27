  import { ImProfile } from "react-icons/im";
  import { FaList, FaCirclePlus  } from "react-icons/fa6";
  import { NavLink, Outlet } from "react-router-dom";
  import { AiFillBackward } from "react-icons/ai";
const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex ">
        {/* Dashboard sidebar */}
        <div className="w-64 min-h-screen bg-stone-100">
          <ul className="menu p-4">
                <li>
                  <NavLink to={"/dashboard/myProfile"}>
                  <ImProfile />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addProducts"}>
                  <FaCirclePlus />
                    Add Products
                  </NavLink>
                </li>
            
            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
              <AiFillBackward />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
