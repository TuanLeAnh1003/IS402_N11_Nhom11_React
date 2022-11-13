import express from 'express';
import { getNodes, createNode, getNodeById } from '../controllers/nodes.js';

const router = express.Router();

router.get('/', getNodes)

router.post('/getNodeById', getNodeById)

router.post('/createNode', createNode)

export default router