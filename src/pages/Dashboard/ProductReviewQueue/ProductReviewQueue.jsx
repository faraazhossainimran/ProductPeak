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
      <div className="overflow-x-auto">
        <table className="table">
            {console.log(queueProducts)}
          {/* head */}
          <thead>
            <tr>
              {/* <th>
          #
        </th> */}
              <th className="text-lg">Product name</th>
              <th className="text-lg">View Details</th>
              <th className="text-lg">Make Featured</th>
              <th className="text-lg">Accept</th>
              <th className="text-lg">Reject</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {queueProducts?.map((queueProduct) => (
              <ProductReviewQueueTable
                refetch={refetch}
                queueProduct={queueProduct}
              ></ProductReviewQueueTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReviewQueue;
