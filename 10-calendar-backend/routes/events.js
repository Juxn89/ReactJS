const { Router } = require('express');
const { check } = require('express-validator');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const isDate = require('../helpers/isDate');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validateFields');

const route = Router();

route.use(validateJWT);

route.get('/', getEvent);

route.post('/', 
            [
                check('title', 'Title is required').not().isEmpty(),
                // check('start', 'Start date is required').isDate(),
                check('start', 'Start date is required').custom(isDate),
                check('end', 'End date is required').custom(isDate), // Custom validator
                validateFields
            ], 
            createEvent);

route.put('/:id', updateEvent);
route.delete('/:id', deleteEvent);

module.exports = route;