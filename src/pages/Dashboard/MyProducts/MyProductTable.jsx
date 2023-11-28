import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useProducts from "../../../hooks/useProducts";

const MyProductTable = ({ myProduct, refetch }) => {
  const { _id, productName, productImage, productChecked, voteCount } =
    myProduct;
    // const [products] = useProducts()
  const axiosPublic = useAxiosPublic();
  const handleDelete = (id) => {
    Swal.fire({
      title: `Delete ${productImage}?`,
      text: "You won't be able to back the product again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axiosPublic.delete(`/dashboard/myProducts/${id}`).then((res) => {
          refetch();
          console.log(res.data);
        });
      }
    });
  };
//   const handleUpdate = (id) => {
//     console.log("handle update", id);
//   }
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={productImage} alt="Product Image" />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg ">{productName}</div>
            </div>
          </div>
        </td>
        <td className="text-lg">{voteCount ? voteCount : 0}</td>
        <td className="text-lg">{productChecked === "no" ? "Pending" : "Accepted"}</td>
        <td className="text-lg"><button onClick={()=> {handleUpdate(_id)}}>Update</button></td>
        <td>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-square btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyProductTable;
