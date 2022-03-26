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

  const onChangeUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            type="number"
            id="age"
            name="age"
            onChange={onChangeAgeHandler}
          ></input>

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;