import { Router } from 'express';
import { validator } from '../validations/validator';
import testController from '../controllers/test.controller';
import { create } from '../validations/test.validator';
const router = Router()
//router.post('/', validator.body(create), testController.post);
//router.get('/', testController.get);


export default router;