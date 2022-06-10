import { useState } from "react";
import Card from "../Card/Card.component";
import a from "../../assets/images/audi.png";
import b from "../../assets/images/bmw.jpeg";
import f from "../../assets/images/ferrari.png";
import l from "../../assets/images/lamborghini.png";
import m from "../../assets/images/Mercedes.png";
import p from "../../assets/images/porsche.png";
import r from "../../assets/images/rolls.jpeg";
import v from "../../assets/images/volvo.png";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: a, stat: "" },
      { id: 1, img: a, stat: "" },
      { id: 2, img: b, stat: "" },
      { id: 2, img: b, stat: "" },
      { id: 3, img: f, stat: "" },
      { id: 3, img: f, stat: "" },
      { id: 4, img: l, stat: "" },
      { id: 4, img: l, stat: "" },
      { id: 5, img: m, stat: "" },
      { id: 5, img: m, stat: "" },
      { id: 6, img: p, stat: "" },
      { id: 6, img: p, stat: "" },
      { id: 7, img: r, stat: "" },
      { id: 7, img: r, stat: "" },
      { id: 8, img: v, stat: "" },
      { id: 8, img: v, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }
  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }
  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
