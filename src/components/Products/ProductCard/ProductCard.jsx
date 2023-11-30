import { Link } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import useProducts from "../../../hooks/useProducts";

const ProductCard = ({productCard}) => {
    const { productImage, _id, productName, voteCount, tags } = productCard;
    const [products] = useProducts()
    const upVoteHandler = (id) => {
      console.log('upvote clicked and id is', voteCount +1, id );
    }
    return (
        <div className="shadow-xl">
      <figure>
        <img
          src={productImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
            <Link to={`/product/${_id}`}>{productName}</Link>
          <div onClick={()=> {upVoteHandler(_id)}} className="badge border-6 py-4 text-green border-neutral-500"><AiFillCaretUp className="text-2xl mr-2" />{voteCount > 0 ? voteCount : 0}</div>
        </h2>
        <div className="card-actions p-2">
            {tags?.map((tag, index) => (
              <div key={index} className="badge badge-outline">{tag}</div>
            ))}
        </div>
      </div>
    </div>
    )
}

export default ProductCard