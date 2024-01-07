import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const DiscussionDetails = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div
        className="hero py-6"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Discussion Opened by {user?.displayName}
            </h1>
            <p className="text-xl">
              Ask questions, find support, and connect with the community.
            </p>
            <button className="btn mt-4">
              <Link to={"/question"}>Ask Your Question</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetails;
