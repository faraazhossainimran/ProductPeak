import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "react-query";

const ProductDetails = () => {
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
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Details of {productDetail.productName}</h1>
            <button className="btn btn-primary">{productDetail.voteCount}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
