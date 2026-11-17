
import React, { useEffect, useState } from "react";
import "./UserDashboard.css";

function UserDashboard() {

  // Store API data
  const [users, setUsers] = useState([]);

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search state
  const [search, setSearch] = useState("");

  // Fetch API data
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((error) => {
        setError("Unable to fetch user details");
        setLoading(false);
      });

  }, []);

  // Search users
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container">

      <h1>User Details</h1>
      <p className="subtitle">
        React API Integration using useEffect
      </p>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search user name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Loading Message */}
      {loading ? (

        <h2 className="loading">Loading Users...</h2>

      ) : error ? (

        <h2 className="error">{error}</h2>

      ) : filteredUsers.length === 0 ? (

        <h2 className="loading">No Users Found</h2>

      ) : (

        // Display API Data
        <div className="user-grid">

          {filteredUsers.map((user) => (

            <div className="user-card" key={user.id}>

              <h2>{user.name}</h2>

              <p><strong>ID:</strong> {user.id}</p>

              <p><strong>Username:</strong> {user.username}</p>

              <p><strong>Email:</strong> {user.email}</p>

              <p><strong>Phone:</strong> {user.phone}</p>

              <p><strong>Website:</strong> {user.website}</p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default UserDashboard;
