import React from "react";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import UserCard from "./UserCard";
import axios from "axios";
import "./UserList.css"

function UserList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="userList">
          {list.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
    </div>
  );
}

export default UserList;
