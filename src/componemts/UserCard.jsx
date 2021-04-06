import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserCard({ user }) {
  return (
    <Card style={{ width: "18rem", margin: "10px", borderRadius: "25 10" }}>
      <p
        style={{
          width: "50px",
          height: "50px",
          fontSize: "1.5em",
          marginLeft: "40%",
          marginTop: "10%",
        }}
        className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
      >
        {user.name[0]}
      </p>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Username: {user.username}
        </Card.Subtitle>
        <Card.Text>email: {user.email}</Card.Text>
        <Button variant="success" onClick={(e) => e.preventDefault()}>
          <Link to={`/profile/${user.id}`}>Go To Profile</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
