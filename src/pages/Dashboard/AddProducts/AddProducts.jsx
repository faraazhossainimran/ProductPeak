import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const AddProducts = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const productData = {
          ...data,
          productOwner: user?.displayName,
          productOwnerEmail: user?.email,
          productOwnerImage: user?.photoURL,
          productChecked: "no", 
          voteCount: 0
        };
        axiosPublic.post("/products", productData)
          .then((res) => {
            console.log(res.data);
          });
        console.log(data);
      };
  return (
    <div>
      <div className="">
        <div className="">
          <div className="card w-full">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                {...register('productName')}
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image*</span>
                </label>
                <input
                {...register('productImage')}
                  type="text"
                  placeholder="Product Image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description*</span>
                </label>
                <input
                {...register('description')}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                  <span className="label-text">Product Owner Information</span>
                </label>
              <div className="card card-compact bg-base-100 border-2">
              <div className="card-body">
                <div className="flex">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                  <h2 className=" ml-4 text-xl">Name: {user?.displayName}</h2>
                  <h2 className=" ml-4 text-xl">Email: {user?.email}</h2>
                  </div>
                </div>
              </div>
            </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value={"Add Product"}></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
