import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "react-query";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
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

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/mzfThy3/aron-visuals-b-ZZp1-Pm-HI0-E-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Details of {productDetail?.productName}
            </h1>
            <button className="btn btn-primary">
              {productDetail?.voteCount}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-12 mx-[200px] mt-12">
          <div className="col-span-2">
            <div className="card bg-base-100 border-2">
              <figure>
                <img src={productDetail?.productImage} alt="Shoes" />
              </figure>
              <div className="card-body">
                {/* <h2 className="card-title">Shoes!</h2> */}
                <p>{productDetail?.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-96 bg-base-100 border-2">
              <div className="card-body">
                  <h2 className="text-xl font-semibold">Author Information: </h2>
                <div className="flex">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <h2 className="card-title ml-4">{user?.displayName}</h2>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 border-2 mt-6">
              <div className="card-body">
                <h2 className="card-title">Product Tags</h2>
                <div className="card-actions p-2">
                  {productDetail?.tags?.map((tag, index) => (
                    <div key={index} className="badge badge-outline">
                      {tag}
                    </div>
                  ))}
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
