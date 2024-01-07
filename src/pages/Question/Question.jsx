import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Question = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const questionData = {
      ...data,
      email: user?.email,
      displayName: user?.displayName,
      photo: user?.photoURL,
    };
    axiosPublic.post("/discussion", questionData).then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Question added",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      navigate("/discussion");
    });
  };

  return (
    <div>
      <div
        className="hero py-6"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1597041725527-56ac19c3327a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Write and Submit Your Question
            </h1>
            <p className="text-xl">
              Ask questions, find support, and connect with the community.
            </p>
            <button className="btn mt-4">
              <Link to={"/discussion"}>Other Discussions</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="my-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <div className="card card-compact bg-base-100 border-2">
                  <div className="card-body">
                    <div className="flex">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                      <h2 className="card-title ml-4 text-xl">
                        {user?.displayName}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <textarea
                  {...register("question")}
                  className="textarea textarea-bordered"
                  placeholder="Your Question"
                ></textarea>
              </div>
              <input
                type="submit"
                value={"Submit"}
                className="btn bg-black text-white mt-6"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
