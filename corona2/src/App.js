import './App.css';
import Test from './components/Test.js';
import { Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <Map center = {[0,0]} zoom = {4}>
        <TileLayer url = "https://x{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>
      </Map>
    </div>
  );
}

export default App;
