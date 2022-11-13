import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        },
        z: {
            type: Number,
            required: true
        },
        seq: {
            type: Number,
            required: true
        }
    },
    { collection: "nodes" }
);

export const NodeModel = mongoose.model("Nodes", schema);
