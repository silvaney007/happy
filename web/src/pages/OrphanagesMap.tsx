import React from 'react';
import {Link} from "react-router-dom"
import {FiPlus} from "react-icons/fi"
import {Map, TileLayer} from "react-leaflet"
import mapTag from "../img/mapTag.svg"

import "../styles/pages/Orphanages-map.css"

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }

function orphanagesMap(){

    return  <div id="page-map">
    <aside>
      <header>
        <img src={mapTag} alt="happy"/>
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :) </p>
      </header>
      <footer>
        <strong>Aveiro</strong>
        <span>Portugal</span>
      </footer>
    </aside>
    <Map
      center={[41.2128429,-8.5590016]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      
       {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      
     <TileLayer 
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
      />

    </Map>

    <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

  </div>
}

export default orphanagesMap;