
import './App.css';
import Bookings from './components/Bookings';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">American Airline Bookings</a>

        </div>
      </nav>
      <div className="row">
      <Bookings/>
      </div>

    </div>
  );
}

export default App;
