import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Row, Spinner } from "reactstrap";
import { Redirect, useParams } from "react-router-dom";
function Profile() {
  const [user, setUser] = useState({});
  const { Id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${Id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Container>
        <Jumbotron>
          <Row className="d-flex justify-content-center align-items-center">
            <p
              style={{
                width: "100px",
                height: "100px",
                fontSize: "1.5em",
              }}
              className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
            >
              {user.company.name[0]}
            </p>
            <h1 className="display-3 col">{user.company.name}</h1>
            <p className="lead text-center col">
              {user.address.street},{user.address.suite},{user.address.city}
            </p>
            <h5>{user.phone}</h5>
            <h5>{user.website}</h5>
            <h5>{user.company.catchPhrase}</h5>
          </Row>
        </Jumbotron>
      </Container>
      <button><Redirect to="/" /></button>
    </div>
  );
}
export default Profile;
