import React, { useContext } from "react";
import { TodoItemContext } from "../store/ItemStore";
import styles from "../styles/DataContainer.module.css";


const DataContainer = () => {
  const {todoItems,deleteNewItem}=useContext(TodoItemContext)
  return (
    <div className={styles.dataContainer}>
      {todoItems.map((data) => (
        <div key={data.name} className={styles.innerContainer}>
          <div>{data.name}</div>

          <div>{data.date}</div>

          <button onClick={()=>deleteNewItem(data.name)} className="btn btn-danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DataContainer;
