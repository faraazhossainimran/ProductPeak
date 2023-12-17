import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Banner = () => {

  return (
    <div>
      <div
        className="hero md:h-[300px] mb-6 mt-4"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3kGYMNj/rodion-kutsaiev-0-VGG7cq-Tw-Co-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Explore Technologies</h1>
            <p className="mb-5">
            ProductPeek is your premier destination for discovering and sharing the latest and most innovative tech products. Dive into a community-driven platform where tech enthusiasts converge to explore, upvote, and review cutting-edge gadgets and technologies.
            </p>
            <button className="p-4 rounded-md bg-black text-white border-0 hover:bg-red"><Link to={'/signup'}>Get Started</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
