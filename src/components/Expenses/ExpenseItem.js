import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // ExpenseDate is splitted from ExpenseItem -> There is no hard rule for splitting but
  // the more the code becomes complex, the more the components become splitted
  // useState always returns an array with exactly two elements
  // first element: current state value
  // second element: the function that updates the value

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
