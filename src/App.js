import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // useState
  const [users, setUsers] = useState([]);

  // handlers
  // Add a new user
  const onAddUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  // Delete user with id
  const onDeleteItemHandler = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      return updatedUsers;
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} onDeleteItem={onDeleteItemHandler} />
    </Wrapper>
  );
}

export default App;
