import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user: { name, id } }) => {
  return (
    <div>
      <h2>{id}</h2>
      <h1> {name}</h1>
      <Link to={`/users/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default UserCard;
