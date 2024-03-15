import styles from "../styles/WelcomeMessage.module.css";
import React, { useContext } from "react";
import { TodoItemContext } from "../store/ItemStore";


const WelcomeMsg = () => {
  const {todoItems}=useContext(TodoItemContext)
  return (
    todoItems.length === 0 && <h4 className={styles.Welcome}>Enjoy Your Day</h4>
  );
};

export default WelcomeMsg;
