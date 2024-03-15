import { createContext } from "react";
import { useState, useReducer } from "react";

export const TodoItemContext = createContext([]);

const TodoItemContextProvider = ({children}) => {


    const reducer = (currState,action) => {
        let newTodoItems=currState
        if (action.type==="NEW_ITEM") {
         newTodoItems= [...currState,
              { name:action.payload.itemName, date: action.payload.itemDueDate },
            ]
        } else if(action.type==="DELETE_ITEM") {
          newTodoItems=currState.filter((dataItem) => dataItem.name !== action.payload.itemName)
        }
        return newTodoItems;
      };
      



    const [initialItem, dispatch] = useReducer(reducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName: itemName, itemDueDate: itemDueDate },
    };
    dispatch(newItemAction);

    // setInitialItem((prevItem) => [
    //   ...prevItem,
    //   { name: itemName, date: itemDueDate },
    // ]);
  };

  const deleteNewItem = (item) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: item },
    };
    dispatch(deleteItemAction);

    // setInitialItem(initialItem.filter((dataItem) => dataItem.name !== item));
  };

  return (
    <TodoItemContext.Provider>
      <TodoItemContext.Provider
        // since key value are same
        // value={{ todoItems: initialItem, addNewItem: addNewItem,deleteNewItem:deleteNewItem }}
        value={{ todoItems: initialItem, addNewItem, deleteNewItem }}
      >{children}</TodoItemContext.Provider>
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
