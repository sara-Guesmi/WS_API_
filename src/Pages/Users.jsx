import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../Components/UserCard";
import CircularProgress from "@mui/material/CircularProgress";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  // life cycle of the component
  // mount
  useEffect(async () => {
    // try + catch=> promiss in JS
    try {
      setLoading(true);
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLoading(false);
      setUsers(result.data);
    } catch (error) {
      setLoading(false);
      setErrors(true);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : errors ? (
        <h1>can not get users</h1>
      ) : (
        users.map((user) => <UserCard user={user} key={user.id} />)
      )}
    </div>
  );
};

export default Users;
