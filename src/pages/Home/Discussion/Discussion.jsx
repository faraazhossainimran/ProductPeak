import React from "react";
import { Link } from "react-router-dom";

const Discussion = () => {
  return (
    <div className="text-center text-white mx-auto my-12 p-12 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <h1 className="text-2xl font-semibold">Discussions</h1>
      <p className="text-md my-2">Ask questions, find support, and connect with the community.</p>
      <button className="btn mt-4"><Link to={'/question'}>Ask Question</Link></button>
    </div>
  );
};

export default Discussion;
