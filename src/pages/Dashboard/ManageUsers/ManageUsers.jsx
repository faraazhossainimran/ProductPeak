import { useQuery } from "react-query";
import useUsers from "../../../hooks/useUsers";
import ManageUserTable from "./ManageUserTable";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic()
  const {
    isPending,
    error,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosPublic.get("/dashboard/manageUsers");
      return response.data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>User Name</th>
              <th>Email</th>
              <th>Make Modarator</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* {users.map(user=> <ManageUserTable)} */}
            {users?.map((user) => (
              <ManageUserTable refetch={refetch} user={user}></ManageUserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
