import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // useState
  const [users, setUsers] = useState([]);

  // functions
  const onAddUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
