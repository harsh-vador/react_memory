import items from "../../constants";
import Card from "../Card/Card.component";

function Cards() {
  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default Cards;
