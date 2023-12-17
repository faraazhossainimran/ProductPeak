import { Link } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "react-query";

const ProductCard = ({ productCard }) => {
  const { productImage, _id, productName, voteCount, tags, productOwner } = productCard;
  const [products] = useProducts();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const upVoteHandler = (id) => {
    const voteData = {
      // votedid: id,
      votedEmail: user?.email,
      votedDisplayName: user?.displayName,
      votedPhoto: user?.photoURL,
    };
    const {
      isPending,
      error,
      data: upVote,
      refetch,
    } = useQuery({
      queryKey: ["upVote"],
      queryFn: async () => {
        const response = await axiosPublic.patch(`/product/upVote/${id}`, voteData);
        refetch()
       
        return response.data;
      },
      
    });
  };


  return (
    // <div className="shadow-xl">
    //   {/* {console.log("upvote", upVote)} */}
    //   <figure>
    //     <img src={productImage} alt="Shoes" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       <Link to={`/product/${_id}`}>{productName}</Link>
    //       <div
    //         onClick={() => {
    //           upVoteHandler(_id);
    //         }}
    //         className="badge border-6 py-4 text-green border-neutral-500"
    //       >
    //         <button>
    //           <AiFillCaretUp className="text-2xl mr-2" />
    //         </button>
    //         {voteCount > 0 ? voteCount : 0}
    //       </div>
    //     </h2>
    //     <div className="card-actions p-2">
    //       {tags?.map((tag, index) => (
    //         <div key={index} className="badge badge-outline">
    //           {tag}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="card card-side flex flex-row border-2 ">
        <figure className="object-cover">
          {/* { console.log("update", upVote.length)} */}
          <img src={productImage} alt="Movie" className="w-[150px] h-full" />
        </figure>
        <div className="card-body">
          <div className="flex">
            <div className="">
              <h2 className="text-xl">
              <Link to={`/product/${_id}`}>
                {productName.length > 16
                  ? `${productName.slice(0, 16)}...`
                  : productName}
              </Link>
              </h2>
              <p className="text-md">Author: {productOwner}</p>
            </div>

            <div
              onClick={() => {
                upVoteHandler(_id);
              }}
              className="text-md flex items-center ml-auto"
            >
              <button className="border-2 p-1">
                <AiFillCaretUp className="text-2xl text-center" />
                <p className="text-sm">{voteCount > 0 ? voteCount : 0}</p>
              </button>
            </div>
          </div>

          <div className="card-actions">
            {/* <button className="btn btn-primary">Watch</button> */}
            <div className="flex">
              {tags?.map((tag, index) => (
                <div key={index} className="mr-3">
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
