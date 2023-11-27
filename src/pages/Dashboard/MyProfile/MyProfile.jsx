import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="m-4">
            <h1 className="text-4xl my-4">User information of {user?.displayName}</h1>
            <div className="card card-compact bg-base-100">
              <div className="my-4">
                <div className="flex">
                  <div className="">
                    <div className="w-[400px]">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl">Name: {user?.displayName}</h1>
            <h3 className="text-2xl mt-2">Email: {user?.email}</h3>
        </div>
    )
}

export default MyProfile