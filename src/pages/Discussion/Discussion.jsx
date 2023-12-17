import React from "react";
import { Link } from "react-router-dom";
import useDiscussion from "../../hooks/useDiscussion";
import DiscussionRow from "./DiscussionRow";

const Discussion = () => {
  const [discussion, isPending] = useDiscussion()
  console.log("from discussion", discussion?.length);
  return (
    <div>
      <div
        className="hero py-6"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/J59V22Y/felicia-buitenwerf-Qs-Zkak27-Jk-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Discussion
            </h1>
            <p className="text-xl">
              Ask questions, find support, and connect with the community.
            </p>
            <button className="btn mt-4"><Link to={"/question"}>Ask Your Question</Link></button>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                {/* <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr> */}
              </thead>
              <tbody>
                {/* row 1 */}
                
                {discussion?.map(dis => <DiscussionRow dis={dis}></DiscussionRow>)}

              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Discussion;
