import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  CardLink,
} from "reactstrap";

export const GhCard = (props) => {
  const { login, avatar_url, name, location, followers, following } =
    props.gitInfo;

  return (
    <Card className="card-container">
      <div className="img-container">
        <img className="avatar" src={avatar_url} alt="github avatar" />
      </div>
      <CardBody>
        <CardTitle className="login-container" tag="h3">
          {login}
        </CardTitle>
        <ListGroup flush>
          <ListGroupItem>Name: {name}</ListGroupItem>
          <ListGroupItem>Location: {location}</ListGroupItem>
          <ListGroupItem>Followers: {followers}</ListGroupItem>
          <ListGroupItem>following: {following}</ListGroupItem>
          <CardLink className="user-link" href={`https://github.com/${login}`}>
            GitHub page
          </CardLink>
        </ListGroup>
      </CardBody>
    </Card>
  );
};
