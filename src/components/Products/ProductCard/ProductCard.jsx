import { Link } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";

const ProductCard = ({productCard}) => {
    const { productImage, _id, productName, voteCount, tags } = productCard;
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
          <div className="badge badge-primary py-4"><AiFillCaretUp className="text-2xl mr-2" />{voteCount}</div>
        </h2>
        <div className="card-actions p-2">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">{tag}</div>
            ))}
        </div>
      </div>
    </div>
    )
}

export default ProductCard