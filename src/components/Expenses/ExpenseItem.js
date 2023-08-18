import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // ExpenseDate is splitted from ExpenseItem -> There is no hard rule for splitting but
  // the more the code becomes complex, the more the components become splitted
  const [title, setTitle] = useState(props.title);
  // useState always returns an array with exactly two elements
  // first element: current state value
  // second element: the function that updates the value

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
