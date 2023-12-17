import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "react-query";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../providers/AuthProvider";
import Reviews from "../../components/Testimonial/Reviews/Reviews";
import SubmitReview from "../../components/Testimonial/SubmitReview/SubmitReview";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const {
    isPending,
    error,
    data: productDetail,
  } = useQuery({
    queryKey: ["productDetail"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/product/${id}`);
      return response.data;
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  const reviews = productDetail?.reviews
  console.log('pro img', productDetail?.productOwnerImage);
  return (
    <>
      <div
        className="hero py-12"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/n1Rnxt0/shubham-dhage-f-QL1-DKNUQZw-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Details of {productDetail?.productName}
            </h1>
            <button className="btn">
              Total vote: {productDetail?.voteCount}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto m-4 md:m-0">
        <div className="grid md:grid-cols-3 md:gap-12  mt-12">
          <div className="md:col-span-2 m-4 md:m-0">
            <div className="card bg-base-100 border-2">
              <figure>
                <img src={productDetail?.productImage} alt="" />
              </figure>
              <div className="card-body">
                {/* <h2 className="card-title">Shoes!</h2> */}
                <p>{productDetail?.description}</p>
              </div>
            </div>
            {/* Testimonials */}
            <div className="">
              <h1 className="text-3xl font-semibold mt-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Product Reviews</h1>
              <Reviews reviews={reviews}></Reviews>
              <SubmitReview productDetail={productDetail} user={user}></SubmitReview>
            </div>
          </div>
          <div>
            <div className="card m-4 md:m-0 card-compact border-2">
              <div className="card-body">
                <h2 className="text-xl font-semibold">Author Information: </h2>
                <div className="flex">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={productDetail?.productOwnerImage || user?.photoURL} />
                    </div>
                  </div>
                  <h2 className="card-title ml-4">{productDetail?.productOwner}</h2>
                </div>
              </div>
            </div>
              <div className="m-4 md:m-0">
              <div className="card card-compact bg-base-100 border-2 mt-6">
              <div className="card-body">
                <h2 className="card-title">Product Tags</h2>
                <div className="card-actions p-2">
                  {productDetail?.tags? <>{productDetail?.tags?.map((tag, index) => (
                    <div key={index} className="">
                     #{tag}
                    </div>
                  ))}</> : <p className="text-lg">No Product tags for this product</p>}
                
                </div>
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
