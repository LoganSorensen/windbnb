import Header from './components/header';
import RentalCards from './components/rentalCards'
import Filters from './components/filters';

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <div className='body-blackout' id='body-blackout'></div>

      <Header />
      <Filters />
      <RentalCards />
      
    </div>
  );
}

export default App;
