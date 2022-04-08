import logo from './logo.svg';
import './App.css';
import Map2 from './components/Map.js';
import { Map, TileLayer} from 'react-leaflet';

function App() {
  return (
    <div className="App">
      <Map2 />
    </div>
  );
}

export default App;
