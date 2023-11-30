import useUsers from "../../../hooks/useUsers";
import ManageUserTable from "./ManageUserTable";
const ManageUsers = () => {
  const [users] = useUsers();
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
            {users?.map(user => <ManageUserTable user={user}></ManageUserTable>)}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
