import { SurfaceModel } from '../models/SurfaceModel.js';
import { NodeModel } from '../models/NodeModel.js';
import uuid from "uuid-v4";

export const getSurfaces = async (req, res) => {
    try {
        const surfaces = await SurfaceModel.find().sort({ createdAt: "desc" });

        res.status(200).json(surfaces);
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
};

export const getSurfaceByName = async (req, res) => {
    try {
        const surface = await SurfaceModel.find({
            name: req.body.name
        })

        res.status(200).json(surface)
    } catch (error) {
        
    }
}

export const getSurfaceByName2 = async (req, res) => {
    try {
        const surface = await SurfaceModel.find({
            name: req.body.name
        })

        let temp = []

        await surface[0].arrNodes.map(async (node) => {
            const nodeApi = await NodeModel.find({
                _id: node
            })

            temp.push([
                nodeApi[0].x, nodeApi[0].y, nodeApi[0].z, nodeApi[0].seq
            ])

            if (temp.length === surface[0].arrNodes.length) {
                temp.sort((a, b) => a[3] - b[3])
                let temp2 = []
                temp.map((item) => {temp2.push(item.slice(0,3))})
                const geojson = {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            properties: {
                                "Building name": surface[0].name,
                                height: surface[0].height,
                                color: surface[0].color,
                                idb: "1"
                            },
                            geometry: {
                                type: "Polygon",
                                coordinates: [temp2]
                            },
                            id: surface[0]._id
                        }
                    ]
                }
                res.status(200).json(geojson)
            }
        })


    } catch (error) {
        
    }
}


export const createSurface = async (req, res) => {
    try {
        await req.body.features.map(async (item, index) => {
            const arrNodes = []

            await item.geometry.coordinates[0].map(async (it, ind) => {
                const node = await NodeModel.create({
                    x: it[0],
                    y: it[1],
                    z: it[2],
                    seq: ind
                }).then((res) => {
                    arrNodes.push(res._id)
                })

                if (arrNodes.length === item.geometry.coordinates[0].length) {
                    console.log("ĐÃ tạo surface thứ: ", index);
                    const surface = await SurfaceModel.create({
                        name: item.properties["Building name"],
                        arrNodes: arrNodes,
                        color: item.properties.color,
                        height: item.properties.height
                    })
                }
            })
        })
    } catch (err) {
        res.status(500).json(err);
    }
};