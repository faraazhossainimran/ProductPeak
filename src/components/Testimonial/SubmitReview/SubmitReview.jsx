import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SubmitReview = ({ productDetail, user }) => {
  console.log("review submit", user?.photoURL);
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      reviewFrom: user?.displayName,
      userEmail: user?.email,
      userImage: user?.photoURL,
    };
    axiosPublic
      .patch(`/product/review/${productDetail._id}`, reviewData)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Add Reviews</h1>
      <div className="">
        <div className="">
          <div className=""></div>
          <div className=" shrink-0 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="card card-compact bg-base-100 border-2">
              <div className="card-body">
                <div className="flex">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <h2 className="card-title ml-4 text-xl">{user?.displayName}</h2>
                </div>
              </div>
            </div>
              <div className="form-control mt-4">
                <textarea
                  {...register("reviewText")}
                  className="textarea textarea-bordered"
                  placeholder="Write a review"
                ></textarea>
              </div>
              <div className="form-control  mt-4">
                <input
                  {...register("reviewRating")}
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control  mt-4">
                <input
                  type="submit"
                  value="submit"
                  className="input input-bordered bg-black text-white text-lg"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitReview;
