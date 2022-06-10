import "./Card.style.css";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.img} alt="" />
    </div>
  );
}

export default Card;
