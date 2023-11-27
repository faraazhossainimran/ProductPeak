import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const SignUP = () => {
  const {signUp, updateUserProfile} = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data)=> {
    console.log(data);
    signUp(data.email, data.password)
    .then(result=> {
      updateUserProfile(data.name, data.userPhoto)
      .then(result=> {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup done",
          showConfirmButton: false,
          timer: 1500
        });
      })
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">SignUp</h1>
          </div>
          <div className="card w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                {...register('name')}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                {...register('userPhoto')}
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register('email')}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register('password')}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="SignUp"/>
              </div>
            </form>
            <p>
              Already have an account? <Link to={'/login'}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
