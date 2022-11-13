import React, { useState, useEffect, useRef } from 'react'
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SceneView from "@arcgis/core/views/SceneView";
import Layer1Layer1Import from '../../api/layer1/layer1.geojson'
import Layer3Layer3FrontImport from '../../api/layer3/layer3_front/layer3_front.geojson'
import Layer3Layer3BackImport from '../../api/layer3/layer3_back/layer3_back.geojson'
import Layer3Layer3LeftImport from '../../api/layer3/layer3_left/layer3_left.geojson'
import Layer3Layer3RightImport from '../../api/layer3/layer3_right/layer3_right.geojson'
import { setDefaultOptions, loadModules } from 'esri-loader';

function MapScreen({ layout, setLayout }) {
    const mapRef = useRef()
    const temp = useRef()

    useEffect(() => {
        // setLayout("mapscreen")
        const view = loadModules(["esri/config", "esri/Map", "esri/layers/GeoJSONLayer", "esri/views/SceneView",])
            .then(([esriConfig, Map, GeoJSONLayer, SceneView]) => {
                esriConfig.apiKey = "AAPK153dce9e0e644d6e8c3aa9d31e337885D9GGnN3i1YMijI1828DyCXRL2L2DjHT_Zc1-XOEbOGT0HIFYyvAdgxnqT59Lfmjm";
                const layer1Layer1 = new GeoJSONLayer({
                    url: Layer1Layer1Import,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [
                                {
                                    type: "extrude",
                                    size: 1.98,
                                    material: {
                                        color: "#9f8c78",
                                    },
                                },
                            ],
                        },
                    }
                });

                const layer3Layer3Front = new GeoJSONLayer({
                    url: Layer3Layer3FrontImport,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [
                                {
                                    type: "extrude",
                                    size: 1.2,
                                    material: {
                                        color: "#C8C2BA",
                                    },
                                },
                            ],
                        },
                    }
                });

                const layer3Layer3Back = new GeoJSONLayer({
                    url: Layer3Layer3BackImport,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [
                                {
                                    type: "extrude",
                                    size: 1.2,
                                    material: {
                                        color: "#C8C2BA",
                                    },
                                },
                            ],
                        },
                    }
                });

                const layer3Layer3Left = new GeoJSONLayer({
                    url: Layer3Layer3LeftImport,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [
                                {
                                    type: "extrude",
                                    size: 1.2,
                                    material: {
                                        color: "#C8C2BA",
                                    },
                                },
                            ],
                        },
                    }
                });

                const layer3Layer3Right = new GeoJSONLayer({
                    url: Layer3Layer3RightImport,
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [
                                {
                                    type: "extrude",
                                    size: 1.2,
                                    material: {
                                        color: "#C8C2BA",
                                    },
                                },
                            ],
                        },
                    }
                });

                const map = new Map({
                    basemap: "topo-vector",
                    ground: "world-elevation",
                    layers: [
                        layer1Layer1,
                        layer3Layer3Front,
                        layer3Layer3Back,
                        layer3Layer3Left,
                        layer3Layer3Right,
                    ],
                });

                const view = new SceneView({
                    container: mapRef.current,
                    map: map,
                    camera: {
                        position: [106.70325054448642, 10.776740223222385, 1000],
                        heading: 0,
                        tilt: 0,
                    },
                });
                view.popup.defaultPopupTemplateEnabled = true;
                return view
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
        <div style={{
            height: "100vh",
            width: "100vw"
        }} ref={mapRef}></div>
    // }} ref={layout === "mapscreen" ? mapRef : temp}></div>
    )
}

export default MapScreen