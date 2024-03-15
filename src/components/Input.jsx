import React, { useContext,useRef } from "react";
import { TodoItemContext } from "../store/ItemStore";
import style from "../styles/Input.module.css";
import { useState } from "react";

const Input = () => {
  const {addNewItem}=useContext(TodoItemContext)

  const todoNameElement=useRef()
  const todoDateElement=useRef()


  const handleAddButton = (e) => {
    e.preventDefault()
  
    const todoName=todoNameElement.current.value;
    const todoDate=todoDateElement.current.value;
    todoDateElement.current.value=""
    todoNameElement.current.value=""
    addNewItem(todoName,todoDate)
  };

  return (
    <div className={style["input-grp"]}>
     <form action="" onSubmit={handleAddButton}>
     <input
        type="text"
        ref={todoNameElement}
        placeholder="Enter a Task Here.."
      required/>
      <input
      ref={todoDateElement}
      type="date" required/>
      <button className="btn" >
        Add To List
      </button>
     </form>

    </div>
  );
};

export default Input;


// import React from "react";
// import style from "../styles/Input.module.css";
// import { useState } from "react";

// const Input = ({ onAddNew }) => {
//   const [item, setItem] = useState("");
//   const [date, setDate] = useState("");

//   const handleItem = (event) => {
//     if (event.target.value==='') {
//       alert("Please Fill The Date")
//     }
//     else{
//     setItem(event.target.value);

//     }  
  
//   };
//   const handleDate = (event) => {
//     if (event.target.value==='') {
//       alert("Please Fill The Date")
//     }
//     else{
// setDate(event.target.value);
//     }  };


//   const handleAddButton=()=>{
//       onAddNew(item, date);
//       setDate("");
//       setItem("");
//   }

//   return (
//     <div className={style["input-grp"]}>
//       <input
//         onChange={handleItem}
//         type="text"
// value={item}
//         placeholder="Enter a Task Here.."
//       />
//       <input onChange={handleDate}
//       value={date}
//       type="date" />
//       <button className="btn" onClick={handleAddButton}>Add</button>
//     </div>
//   );
// };

// export default Input;



