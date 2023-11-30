import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const from = location?.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "",
          title: "You have succefully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="py-12">
        <div className="container mx-auto">
          <div className="hero-content flex-col">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Login</h1>
            </div>
            <div className="card md:w-[400px]">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
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
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center mb-4">
                Don't have any account?{" "}
                <Link to={"/signup"}>Register account</Link>
              </p>
              {/* <div className="divider mx-8">OR</div>
              <div className="form-control mx-8 mb-8">
                <button className="btn" onClick={handleGoogleLogin}>
                  <img
                    className="w-[37px]"
                    src="https://i.ibb.co/dBTSL19/icons8-google-48.png"
                  />
                  Login with Google
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
