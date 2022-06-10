import Cards from "./components/Cards/Cards.component";
import "./index.css";
function App() {
  return (
    <div className="App">
      <h1 className="header">Memory Game</h1>
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
