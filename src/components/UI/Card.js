// Typically Card is some kind of container
import "./Card.css";

function Card(props) {
  // props.children is a reserved name
  // The value of this children prop will always be the content between opening and closing tag of your custom component
  // The content between opening and closing tags is available on props children inside of the card({props.children} below)
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
