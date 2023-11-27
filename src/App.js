import "./App.css";
import { Location } from "./components/location";
import { locations } from "./static/data";

function App() {
  return (
    <div className="App">
      <h1>Driver App</h1>
      <h2>Company name</h2>
      <h3>Pick a location</h3>
      <div className="location-container">
        {locations.map((location, index) => (
          <Location location={location} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
