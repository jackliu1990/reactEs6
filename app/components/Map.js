/**
 * Created by liufeng on 2017/7/10.
 */
import React from 'react';
import ol from 'openlayers';

import 'openlayers/css/ol.css';
import '../styles/map.less';

class Map extends React.Component{
    componentDidMount(){
        let map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([37.41, 8.82]),
                zoom: 4,
            })
        });
    }
    render(){
        return(
            <div id="map"></div>
        )
    }
}

export default Map;