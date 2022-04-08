import {Map, TileLayer } from 'react-leaflet';
const Test = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/United States");
    console.log(response.json());
}

export default Test;
