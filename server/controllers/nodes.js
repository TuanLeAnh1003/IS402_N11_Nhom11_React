import { NodeModel } from '../models/NodeModel.js';
import { SurfaceModel } from '../models/SurfaceModel.js';
import uuid from "uuid-v4";

export const getNodes = async (req, res) => {
    try {
        const nodes = await NodeModel.find().sort({ createdAt: "desc" });

        res.status(200).json(nodes);
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
};

export const getNodeById = async (req, res) => {
    try {
        const node = await NodeModel.findById(req.body.id);

        res.status(200).json(node);
    } catch (error) {

    }
}

export const createNode = async (req, res) => {
    try {
        // req.body.features.map((item,index) => {
        //     console.log(item);
        // })
        // const node = await NodeModel.create({
        //     x: 10.04945850382450,
        //     y: 10.04945850382450,
        //     z: 10.04945850382450,
        // });

        // res.status(200).json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }
};