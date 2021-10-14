import logo from './logo.svg';
import './App.css';

const api = {
  key: "c1fd1efddd642b9340c2638f7f678a4b",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type = "text"
            className = "search-bar"
            placeholder = "Search for a city or airport..."
            />
        </div>
        <div className="location-box">
          <div className="location"></div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
