import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="hero py-12 bg-base-200">
          
          <div className="hero-content flex-col lg:flex-row">
            
            <img
              src={user?.photoURL}
              className="max-w-sm rounded-lg shadow-2xl mr-12"
            />
            <div>
              <h1 className="text-3xl">Name: {user?.displayName}</h1>
              <h3 className="text-2xl mt-2">Email: {user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
