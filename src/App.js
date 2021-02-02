import RentalCards from './components/rentalCards'

import "./styles/index.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="windbnb logo" />
      </header>
      <RentalCards />
    </div>
  );
}

export default App;
