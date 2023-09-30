import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "./Updated";
function List() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user",
          {
            headers: {
              Authorization: "token eb33bed41ebc137:348f33df4a5e962",
            },
          }
        );
        setUsers(response.data.message.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name1.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //..............................................................................
  // Edit functionality

  const handleSaveEdit = (user) => {
    let response = fetch(
      `https://assignment.8848digitalerp.com/api/resource/Assignment/${user.name1}`,

      {
        method: "PUT",

        headers: {
          Authorization: "token eb33bed41ebc137:348f33df4a5e962",
        },

        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const updatedUsers = users.map((u) =>
          u.name1 === res.data.name ? res.data : u
        );

        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  };

  const displayedUsers = searchQuery ? filteredUsers : users;
  return (
    <div className="list-conatainer">
      <div className="heading">
        <img src="https://frappe.io/files/8848-digital-logo.jpg" alt="" />
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search Name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user, index) => (
            <Update
              key={user.name1}
              user={user}
              handleSaveEdit={handleSaveEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
