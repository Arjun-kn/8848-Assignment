import { useState } from "react";
import "../../src/style.scss";
import { BiSolidEdit } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
function Updated({ user, handleSaveEdit }) {
  const [editedData, setEditedData] = useState({
    name1: user.name1,
    age: user.age,
    gender: user.gender,
    company_name: user.company_name,
  });

  const [edit, setEdit] = useState(false);
  return (
    <tr className="trow">
      <td className="tdata">
        {edit ? (
          <input
            type="text"
            value={editedData.name1}
            onChange={(e) => {
              setEditedData({ ...editedData, name1: e.target.value });
            }}
          />
        ) : (
          user.name1
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="number"
            value={editedData.age}
            onChange={(e) => {
              setEditedData({ ...editedData, age: e.target.value });
            }}
          />
        ) : (
          user.age
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={editedData.gender}
            onChange={(e) => {
              setEditedData({ ...editedData, gender: e.target.value });
            }}
          />
        ) : (
          user.gender
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={editedData.company_name}
            onChange={(e) => {
              setEditedData({
                ...editedData,
                company_name: e.target.value,
              });
            }}
          />
        ) : (
          user.company_name
        )}
      </td>
      <td>
        {edit ? (
          <GrUpdate
            onClick={(e) => {
              handleSaveEdit(editedData);
              setEdit(false);
            }}
          >
            Update
          </GrUpdate>
        ) : (
          <BiSolidEdit onClick={(e) => setEdit(true)}>Edit</BiSolidEdit>
        )}
      </td>
    </tr>
  );
}

export default Updated;
