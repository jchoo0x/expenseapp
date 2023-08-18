import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // ExpenseDate is splitted from ExpenseItem -> There is no hard rule for splitting but
  // the more the code becomes complex, the more the components become splitted

  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
