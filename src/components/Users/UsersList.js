import React from "react";
import Card from "../Card/Card";
import Wrapper from "../Helpers/Wrapper";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  // Remove a user from the list
  const onClickDeleteHandler = (event) => {
    console.log(event.target.id);
    props.onDeleteItem(event.target.id);
  };

  // Check if we have users in the list
  let hasUsers = false;
  if (props.users && props.users.length > 0) hasUsers = true;

  return (
    <Wrapper>
      {hasUsers === true && (
        <Card className={styles.users}>
          <ul>
            {props.users.map((user) => (
              <li
                key={user.id}
                onClick={onClickDeleteHandler}
                id={user.id}
                title="Click with the mouse to remove user"
              >
                {user.name} ({user.age} year)
              </li>
            ))}
          </ul>
        </Card>
      )}
    </Wrapper>
  );
};

export default UsersList;
