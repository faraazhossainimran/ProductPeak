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
    queryKey: ["myProducts"],
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
              <th className="text-lg">Product name</th>
              <th className="text-lg">Votes</th>
              <th className="text-lg">Status</th>
              <th className="text-lg">Update</th>
              <th className="text-lg">Delete</th>
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
