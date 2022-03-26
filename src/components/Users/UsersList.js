import React from "react";
import Card from "../Card/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} year)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
