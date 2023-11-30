  import { ImProfile } from "react-icons/im";
  import { FaList, FaCirclePlus, FaFileCirclePlus  } from "react-icons/fa6";
  import { NavLink, Outlet } from "react-router-dom";
  import { AiFillBackward } from "react-icons/ai";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";
const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [role, setRole] = useState()
  const axiosPublic = useAxiosPublic()
  const {
    isPending,
    error,
    data: queueUser,
    refetch,
  } = useQuery({
    queryKey: ["queueUser"],
    queryFn: async () => {
      const response = await axiosPublic.get(`user/${user?.email}`);
      setRole(response.data)
      return role;
    },
  });
  
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="container mx-auto">
      <div className="flex ">
        {/* Dashboard sidebar */}
        {role?.admin && <>
          <div className="w-64 min-h-screen bg-stone-100">
          <ul className="menu p-4">
                <li>
                  <NavLink to={"/dashboard/myProfile"}>
                  <ImProfile />
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/statistics"}>
                  <FaCirclePlus />
                   Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageUsers"}>
                  <FaFileCirclePlus />
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageCoupons"}>
                  <FaFileCirclePlus />
                    Manage Coupons
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
        </>}
        {role?.modarator && <>
          <div className="w-64 min-h-screen bg-stone-100">
          <ul className="menu p-4">
                <li>
                  <NavLink to={"/dashboard/myProfile"}>
                  <ImProfile />
                    Modarator Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/productReviewQueue"}>
                  <FaCirclePlus />
                    Product Review Queue
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reportedContents"}>
                  <FaCirclePlus />
                    Reported Contents
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
        </>}
        {role?.productOwner && <>
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
                <li>
                  <NavLink to={"/dashboard/myProducts"}>
                  <FaFileCirclePlus />
                    My Products
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
        </>}
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
