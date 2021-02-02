import Header from './components/header';
import RentalCards from './components/rentalCards'

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header>
        <img src={logo} alt="windbnb logo" />
      </header> */}
      <RentalCards />
    </div>
  );
}

export default App;
