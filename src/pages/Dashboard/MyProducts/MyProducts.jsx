import React, { useContext } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import MyProductTable from "./MyProductTable";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    error,
    data: myProducts,
    refetch
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/dashboard/myProducts/${user?.email}`
      );
      return response.data;
    },
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
          #
        </th> */}
              <th>Product name</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Update Product</th>
              <th>Delete Product</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((myProduct, index) => (
              <MyProductTable
              refetch={refetch}
                key={index}
                myProduct={myProduct}
              ></MyProductTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
