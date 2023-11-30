import { useQuery } from "react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";

const manageUserTable = ({ user, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { userName, userEmail, _id, role } = user;
  const MakeModarator = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are making Modarator!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make modarator!",
    }).then((result) => {
      if (result.isConfirmed) {
        // refetch();
        Swal.fire({
          title: "Sucuess!",
          text: "Your request has been saved.",
          icon: "success",
        });
        axiosPublic.patch(`/dashboard/manageUsers/${id}`).then((res) => {
          refetch();
          console.log(res.data);
        });
      }
    });
  };
  const makeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are making Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        // refetch();
        Swal.fire({
          title: "Sucuess!",
          text: "Your request has been saved.",
          icon: "success",
        });
        axiosPublic.patch(`/dashboard/manageUsers/admin/${id}`).then((res) => {
          refetch();
          console.log(res.data);
        });
      }
    });
  };
  return (
    <>
      <tr className="text-md">
        <td>{userName}</td>
        <td>{userEmail}</td>
        <td>
          <button
            onClick={() => {
              MakeModarator(_id);
            }}
          >
            {role === "modarator" ? (
              <button disabled={true} className="btn btn-success">
                He's a Modarator
              </button>
            ) : (
              <button className="btn btn-success">Make Modarator</button>
            )}
          </button>
        </td>
        <td>
            {role === "admin" ? (
              <button disabled={true} className="btn btn-success">
                He's an Admin
              </button>
            ) : (
              <button
                onClick={() => {
                  makeAdmin(_id);
                }}
                className="btn btn-success"
              >
                Make a Admin
              </button>
            )}
        </td>
      </tr>
    </>
  );
};

export default manageUserTable;
