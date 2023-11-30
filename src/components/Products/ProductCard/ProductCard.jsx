import { Link } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "react-query";

const ProductCard = ({ productCard }) => {
  const { productImage, _id, productName, voteCount, tags } = productCard;
  const [products] = useProducts();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const upVoteHandler = (id) => {
    // console.log( `/product/upvote/${id}?email=${user?.email}`);
    console.log("clicked");
    const {
      isPending,
      error,
      data: upVote,
      refetch,
    } = useQuery({
      queryKey: ["upVote"],
      queryFn: async () => {
        const response = await axiosPublic.patch(`/product/upVote/${id}?email=${user?.email}`);
        return response.data;
      },
    });
    if (isPending) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
  };
  return (
    <div className="shadow-xl">
      {/* {console.log("upvote", upVote)} */}
      <figure>
        <img src={productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/product/${_id}`}>{productName}</Link>
          <div
            onClick={() => {
              upVoteHandler(_id);
            }}
            className="badge border-6 py-4 text-green border-neutral-500"
          >
            <button>
              <AiFillCaretUp className="text-2xl mr-2" />
            </button>
            {voteCount > 0 ? voteCount : 0}
          </div>
        </h2>
        <div className="card-actions p-2">
          {tags?.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
