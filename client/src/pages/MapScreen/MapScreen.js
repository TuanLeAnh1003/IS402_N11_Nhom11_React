import React, { useState, useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SceneView from "@arcgis/core/views/SceneView";
import Layer1Layer1Import from "../../api/layer1/layer1.geojson";
import Layer1Stairs1Import from '../../api/layer1/stairs1.geojson'
import layer1Decors_backImport from "../../api/layer1/decors/decors.geojson"
import layer1Decors_up_backImport from "../../api/layer1/decors/decors_up.geojson"
import layer1Decors_sharp_brick_backImport from "../../api/layer1/decors/decors_sharp_brick.geojson"
import layer1Decors_tomb_backImport from "../../api/layer1/decors/decors_tomb.geojson"

import Layer2Layer2Import from "../../api/layer2/layer2.geojson";
import Layer2Layer2InImport from "../../api/layer2/layer2_in.geojson";

// LAYER 3
import Layer3Layer3Import from "../../api/layer3/layer3.geojson";

// LAYER 4
import Layer4Layer4Import from "../../api/layer4/layer4.geojson";
import Layer4Layer4ColumnsImport from "../../api/layer4/layer4_columns/layer4_columns.geojson";
import layer4Layer4_windowBalconyPianoLeftImport from "../../api/layer4/layer4_window_balcony/window_balcony_piano.geojson"
import layer4Layer4_windowBalconyBigPianoLeftImport from "../../api/layer4/layer4_window_balcony/window_balcony_big_piano.geojson"
import layer4Layer4_windowBalconyDecorsLeftImport from "../../api/layer4/layer4_window_balcony/window_balcony_decors.geojson"
import layer4Stick_rightImport from "../../api/layer4/layer4_stick/stick_right.geojson"
import layer4MonkeyStick_rightImport from "../../api/layer4/layer4_stick/monkeystick_right.geojson"
import layer4WorkshipImport from "../../api/layer4/worshipphoto/workship.geojson"
import layer4RoodImport from "../../api/layer4/worshipphoto/rood.geojson"
import layer4PhotoImport from "../../api/layer4/worshipphoto/photo.geojson"
// Cổng chính
import Layer4Layer4ColumnsEntranceImport from "../../api/layer4/layer4_entrance/layer4_columnsEntrance.geojson";
import Layer4Layer4WallGateImport from "../../api/layer4/layer4_entrance/layer4_wallGate.geojson";
// Ban công cổng chính
import layer4Layer4_balcony_smallcrossbarImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_smallcrossbar.geojson";
import layer4Layer4_balcony_crossbarImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_crossbar.geojson";
import layer4Layer4_balcony_onbarImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_onbar.geojson";
import layer4Layer4_balconyImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony.geojson";
import layer4Layer4_balcony_glassImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_glass.geojson";
import { setDefaultOptions, loadModules } from "esri-loader";
import './MapScreen.css'
import { Link } from 'react-router-dom'

function MapScreen() {
  const mapRef = useRef();
  const temp = useRef();

  useEffect(() => {
    // setLayout("mapscreen")
    const view = loadModules([
      "esri/config",
      "esri/Map",
      "esri/layers/GeoJSONLayer",
      "esri/views/SceneView",
    ])
      .then(([esriConfig, Map, GeoJSONLayer, SceneView]) => {
        esriConfig.apiKey =
          "AAPK153dce9e0e644d6e8c3aa9d31e337885D9GGnN3i1YMijI1828DyCXRL2L2DjHT_Zc1-XOEbOGT0HIFYyvAdgxnqT59Lfmjm";
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
          },
        });

        const Layer1Decors_backImport = new GeoJSONLayer({
          url: layer1Decors_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.23,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Decors_up_backImport = new GeoJSONLayer({
          url: layer1Decors_up_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.14,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Decors_sharp_brick_backImport = new GeoJSONLayer({
          url: layer1Decors_sharp_brick_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.14,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Decors_tomb_backImport = new GeoJSONLayer({
          url: layer1Decors_tomb_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.38,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Stairs1 = new GeoJSONLayer({
          url: Layer1Stairs1Import,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.11,
                  material: {
                    color: "#666666",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2 = new GeoJSONLayer({
          url: Layer2Layer2Import,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2In = new GeoJSONLayer({
          url: Layer2Layer2InImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.12,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer3Layer3 = new GeoJSONLayer({
          url: Layer3Layer3Import,
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
          },
        });

        const Layer4Layer4 = new GeoJSONLayer({
          url: Layer4Layer4Import,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4Columns = new GeoJSONLayer({
          url: Layer4Layer4ColumnsImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "#aaa494",
                  },
                },
              ],
            },
          },
        });

        // Mẫu
        const layer4Layer4_windowBalconyPianoLeft = new GeoJSONLayer({
          url: layer4Layer4_windowBalconyPianoLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.39,
                  height: 0.24,
                  material: {
                    color: "#aaa494",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Layer4_windowBalconyBigPianoLeft = new GeoJSONLayer({
          url: layer4Layer4_windowBalconyBigPianoLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.2,
                  height: 0.97,
                  material: {
                    color: "#CBC5BC",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Layer4_windowBalconyDecorsLeft = new GeoJSONLayer({
          url: layer4Layer4_windowBalconyDecorsLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.001,
                  height: 0.13,
                  material: {
                    color: "#BEBEBE",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Stick_right = new GeoJSONLayer({
          url: layer4Stick_rightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.08,
                  width: 0.06,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4MonkeyStick_right = new GeoJSONLayer({
          url: layer4MonkeyStick_rightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.08,
                  width: 0.06,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Workship = new GeoJSONLayer({
          url: layer4WorkshipImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.09,
                  width: 0.06,
                  material: {
                    color: "#cdcdcd",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Rood = new GeoJSONLayer({
          url: layer4RoodImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 4.65,
                  width: 0.06,
                  material: {
                    color: "#cdcdcd",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Photo = new GeoJSONLayer({
          url: layer4PhotoImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 4.65,
                  width: 0.01,
                  material: {
                    color: [128, 128, 128, 0.5],
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        // --- Cổng chính ---
        // Cột cổng chính
        const Layer4Layer4ColumnsEntrance = new GeoJSONLayer({
          url: Layer4Layer4ColumnsEntranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.73,
                  material: {
                    color: "#c0c0bf",
                  },
                },
              ],
            },
          },
        });

        // Tường cổng chính
        const Layer4Layer4WallGate = new GeoJSONLayer({
          url: Layer4Layer4WallGateImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 12.02,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        // Ban công cổng chính
        const layer4Layer4_balcony_smallcrossbar = new GeoJSONLayer({
          url: layer4Layer4_balcony_smallcrossbarImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.07,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony_crossbar = new GeoJSONLayer({
          url: layer4Layer4_balcony_crossbarImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.16,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony_onbar = new GeoJSONLayer({
          url: layer4Layer4_balcony_onbarImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.05,
                  material: {
                    color: "#604732",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony = new GeoJSONLayer({
          url: layer4Layer4_balconyImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.72,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony_glass = new GeoJSONLayer({
          url: layer4Layer4_balcony_glassImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.9,
                  material: {
                    color: [218, 218, 218, 0.5],
                  },
                },
              ],
            },
          },
        });

        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation",
          layers: [
            layer1Layer1,
            Layer1Stairs1,
            Layer1Decors_backImport,
            Layer1Decors_up_backImport,
            Layer1Decors_sharp_brick_backImport,
            Layer1Decors_tomb_backImport,
            Layer2Layer2,
            Layer2Layer2In,
            layer3Layer3,
            Layer4Layer4,
            Layer4Layer4Columns,
            layer4Layer4_windowBalconyPianoLeft,
            layer4Layer4_windowBalconyBigPianoLeft,
            layer4Layer4_windowBalconyDecorsLeft,
            layer4Stick_right,
            layer4MonkeyStick_right,
            layer4Workship,
            layer4Rood,
            layer4Photo,
            Layer4Layer4ColumnsEntrance,
            Layer4Layer4WallGate,
            layer4Layer4_balcony_smallcrossbar,
            layer4Layer4_balcony_crossbar,
            layer4Layer4_balcony_onbar,
            layer4Layer4_balcony,
            layer4Layer4_balcony_glass,
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
        return view;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="map_screen">
      <div
        style={{
          height: "90vh"
        }}
        ref={mapRef}
      ></div>
      <div className="map_screen-popup">
        <h5>Xem Nhà hát TPHCM</h5>
        <p>Công Trường Lam Sơn, Bến Nghé, Quận 1</p>
        <div className="map_screen-popup--item">
          <h5>Xem thông tin tòa nhà</h5>
          <p>Là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.</p>
          <button>
            <Link to="/show" style={{ textDecoration: "none", color: "#fff" }}>
              Xem chương trình biểu diễn
            </Link>
          </button>
        </div>
        <div className="map_screen-popup--item">
          <h5>Đặt vé ngay</h5>
          <p>Giá vé tùy thuộc vào chương trình bạn xem và tùy thuộc vào chỗ ngồi.</p>
          <button>
            <Link to="/ticket" style={{ textDecoration: "none", color: "#fff" }}>
              Đặt vé
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapScreen;
