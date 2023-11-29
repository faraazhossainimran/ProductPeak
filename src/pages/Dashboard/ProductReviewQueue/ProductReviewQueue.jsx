import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "react-query";
import ProductReviewQueueTable from "./ProductReviewQueueTable";

const ProductReviewQueue = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    error,
    data: queueProducts,
    refetch,
  } = useQuery({
    queryKey: ["queueProducts"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/dashboard/queueProducts`);
      return response.data;
    },
  });
  
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {/* table start */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>View Details</th>
              <th>Accept</th>
              <th>Make Featured</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <>
      {queueProducts?.map((queueProduct) => (
        // <ProductReviewQueueTable
        //   refetch={refetch}
        //   queueProduct={queueProduct}
        // ></ProductReviewQueueTable>
        <>
          <ProductReviewQueueTable queueProduct={queueProduct}></ProductReviewQueueTable>
        </>
      ))}
    </>
          </tbody>
        </table>
      </div>
      {/* table end */}
    </div>
  );
};

export default ProductReviewQueue;
