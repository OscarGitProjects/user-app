import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../Modal/ErrorModal";

const AddUser = (props) => {
  // useState
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();

  // Handlers
  // Submit of form
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Validate input
    if (userName.trim().length === 0 || age.length === 0 || +age < 0) {
      console.log("Invalid input");

      setError({
        title: "Invalid input",
        message: "You have to input a valid name and a positive age",
      });
      return;
    }

    console.log("UserName: " + userName + ", Age: " + age);

    props.onAddUser(userName, age);

    // Clear input
    setUserName("");
    setAge(0);
  };

  // Change users name
  const onChangeUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  // Change users age
  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  // Resets error
  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={clearErrorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={userName}
            type="text"
            id="username"
            name="username"
            onChange={onChangeUserNameHandler}
            title="Enter a username"
            placeholder="Username"
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            type="number"
            id="age"
            name="age"
            onChange={onChangeAgeHandler}
            title="Enter a positive age"
            placeholder="Age"
          ></input>

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
