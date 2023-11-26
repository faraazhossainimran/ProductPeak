import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Banner = () => {

  return (
    <div>
      <div
        className="hero md:h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/gTS38Db/alex-knight-2-EJCSULRw-C8-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Explore Technologies</h1>
            <p className="mb-5">
            ProductPeek is your premier destination for discovering and sharing the latest and most innovative tech products. Dive into a community-driven platform where tech enthusiasts converge to explore, upvote, and review cutting-edge gadgets and technologies.
            </p>
            <button className="btn btn-primary"><Link to={'/signup'}>Get Started</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
