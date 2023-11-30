import { useQuery } from "react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const manageUserTable = ({user}) => {
    console.log(user);
    const {userName, userEmail, _id} = user;
    const MakeModarator = (id) => {
        const {
            isPending,
            error,
            data: manageUser,
            refetch,
          } = useQuery({
            queryKey: ["manageUser"],
            queryFn: async () => {
              const response = await useAxiosPublic.patch(`/dashboard/manageUsers/${id}`);
              return response.data;
            },
          });
          
          if (isPending) return "Loading...";
          if (error) return "An error has occurred: " + error.message;
    }
    return (
        <>
             <tr className="text-md">
              <td>{userName}</td>
              <td>{userEmail}</td>
              <td><button onClick={()=> {MakeModarator(_id)}}>Yes</button></td>
              <td>Yes</td>
            </tr>
        </>
    )
}

export default manageUserTable