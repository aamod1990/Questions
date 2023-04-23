import Joi from 'joi';

export const create = Joi.object({
    field1: Joi.string().required(),
    field2: Joi.string().optional()
});