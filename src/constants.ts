import { View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { MapOptions } from 'ol/Map';
import { OSM } from 'ol/source';

export const API_URL = 'http://localhost:9966/petclinic';

// OpenLayers map options
export const mapOptions: MapOptions = {
  layers: [
    new TileLayer({ source: new OSM() }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
		maxZoom: 20
  }),
  target: 'map',
};
