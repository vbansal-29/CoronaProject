import './App.css';
import Test from './components/Test.js';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  const location = [38.9072, -77.0369];
  const zoom = 12;

  return (
    <div className="App">
      <MapContainer center = {location} zoom = {zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
        <Marker position={location}></Marker>
      </MapContainer>
    </div>
  );
}

export default App;
