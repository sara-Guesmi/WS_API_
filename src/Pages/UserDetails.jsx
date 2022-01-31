import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const { id_user } = useParams();

  const getUser = async () => {
    setloading(true);
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id_user}`
      );
      setuser(response.data);
      setloading(false);
    } catch (error) {
      seterror(true);
      setloading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>can not get the user</h1>
      ) : (
        <h1>{user.name}</h1>
      )}
    </div>
  );
};

export default UserDetails;
