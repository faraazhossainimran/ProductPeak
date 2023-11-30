import { useQuery } from "react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductReviewQueueTable = ({ queueProduct, refetch }) => {
  const axiosPublic = useAxiosPublic()
  const handleViewDetails = (id) => {
    axiosPublic.get(`/dashboard/productReviewQueue/${id}`)
    .then(res => {
      // console.log(res.data);
    })
  }
  const handleAccept = (id) => {
    console.log(id);
    axiosPublic.patch(`/dashboard/productReviewQueue/${id}`)
    .then(res => {
      refetch()
      console.log("clicked");
      console.log(res.data);
    })
  }
  // const {
  //   isPending,
  //   error,
  //   data: productQueue,
  // } = useQuery({
  //   queryKey: ["productQueue"],
  //   queryFn: async () => {
  //     const response = await useAxiosPublic.get(`/dashboard/productReviewQueue/${id}`);
  //     return response.data;
  //   },
  // });
  // if (isPending) return "Loading...";
  // if (error) return "An error has occurred: " + error.message;
  return (
    <tr>

    <th>1</th>
    <th>
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img
            src={queueProduct?.productImage}
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
    </th>
    <td>{queueProduct?.productName}</td>
    <td><button onClick={()=> {handleViewDetails(queueProduct._id)}}><Link to={`/product/${queueProduct._id}` }>Check Product</Link></button></td>
    <td><button onClick={()=> {handleAccept(queueProduct._id)}}>Pending</button></td>
    <td>Pending</td>
    <td>Pending</td>
  </tr>
  );
};

export default ProductReviewQueueTable;
