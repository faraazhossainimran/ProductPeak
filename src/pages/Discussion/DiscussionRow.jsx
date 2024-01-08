import React from "react";
import { Link } from "react-router-dom";

const DiscussionRow = ({dis}) => {
    const {name, email, question, _id, photo} = dis
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-semibold text-[18px]"><Link to={`/discussion/${_id}`}>{name}</Link></div>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        <td>
          <p className="text-[18px] font-semibold">{question}</p>
          <div>
          <button><Link to={`/discussion/${_id}`}>0 Reply</Link></button>
          </div>
          {/* <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
        </td>
      </tr>
    </div>
  );
};

export default DiscussionRow;
