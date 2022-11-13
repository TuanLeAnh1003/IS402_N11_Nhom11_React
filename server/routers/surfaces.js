import express from 'express';
import { getSurfaces, createSurface, getSurfaceByName, getSurfaceByName2 } from '../controllers/surfaces.js';

const router = express.Router();

router.get('/', getSurfaces)

router.post('/getSurfaceByName', getSurfaceByName)

router.post('/getSurfaceByName2', getSurfaceByName2)

router.post('/createSurface', createSurface)

export default router