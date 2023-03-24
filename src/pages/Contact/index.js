import React from 'react';
import './style.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Contact = () => {
    console.log(process.env.REACT_APP_API_KEY)
    const center=['48.912259', '2.384049'];
    const url = `https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <section className='about__section'>
            <article className='about__section__article'>

            </article>
            <article>
                <MapContainer
                    center={center}
                    zoom={15}
                    style={{ width:'400px', height:'400px'}}
                >
                    <TileLayer
                    url={url}
                    attribution='Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>' />
                </MapContainer>
            </article>
        </section>
    );
};

export default Contact;