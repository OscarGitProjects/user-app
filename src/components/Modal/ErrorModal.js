import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Wrapper from "../Helpers/Wrapper";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={styles.backdrop} onClick={props.onClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onClick}>
            Ok
          </Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
