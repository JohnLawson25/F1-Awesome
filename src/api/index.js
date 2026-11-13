import express from 'express';
export const router = express.Router();
import { driverRouter } from './drivers';

router('/drivers', driverRouter);