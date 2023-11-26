
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
const Login = () => {
    const {logIn} = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data)=> {
    console.log(data);
    logIn(data.email, data.password)
    .then(result=> {
      console.log(result.user);
    })
    .catch(error=> {
      console.log(error);
    })
  }
    return (
        <div>
                <div className="py-12">
      <div className="container mx-auto">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              </div>
              <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Login