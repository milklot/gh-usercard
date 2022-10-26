import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import { GhHeader } from "./components/GhHeader";
import { GhCard } from "./components/GhCard";

const initialState = {
  input: "",
  gitcard: [],
};

function App() {
  const [userState, setUserState] = useState(initialState);

  const handleChanges = (event) => {
    setUserState({
      ...userState,
      input: event.target.value,
    });
  };

  const fetchUser = (username) => {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        alert("Please enter valid username");
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchUser(userState.input)
      .then((res) => {
        setUserState({
          ...userState,
          gitcard: res.data,
        });
        console.log(userState);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser("milklot")
      .then((res) => {
        setUserState({
          gitcard: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <GhHeader />
      <Form className="user-div" onSubmit={onSubmit}>
        <FormGroup>
          <Label for="github-name" className="form-label">
            Search by a GitHub name
          </Label>
          <Input
            id="github-name"
            name="username"
            placeholder="enter GitHub name"
            type="text"
            onChange={handleChanges}
          />
        </FormGroup>
        <Button className="search-btn" onSubmit={onSubmit}>
          Search
        </Button>
      </Form>
      <GhCard gitInfo={userState.gitcard} />
    </div>
  );
}

export default App;
