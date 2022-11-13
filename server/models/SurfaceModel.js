import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        arrNodes: {
            type: 'array',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        color: {
            type: 'string',
            required: true
        },
        height: {
            type: 'number',
            required: true
        }
    },
    { collection: "surfaces" }
);

export const SurfaceModel = mongoose.model("Surface", schema);
