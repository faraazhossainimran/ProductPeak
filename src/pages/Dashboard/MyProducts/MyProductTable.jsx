import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyProductTable = ({myProduct, refetch}) => {
    const {_id, productName, productImage, productChecked, voteCount} = myProduct;
    const axiosPublic = useAxiosPublic()
    const handleDelete=(id)=> {
        axiosPublic.delete(`/dashboard/myProducts/${id}`)
        .then(res=> {
            refetch()
            console.log(res.data);
        })
    }
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={productImage}
                  alt="Product Image"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
            </div>
          </div>
        </td>
        <td>{voteCount ? voteCount : 0}</td>
        <td>{productChecked === "no" ? "Pending" : "Accepted"}</td>
        <td>Update</td>
        <td><button onClick={()=> {handleDelete(_id)}}>Delete</button></td>
      </tr>
    </>
  );
};

export default MyProductTable;
