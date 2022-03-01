const { response } = require('express');
const EventSchema = require('../models/EventsModel');

const getEvent = async (req, res = response) => {
    const events = await EventSchema.find().populate('user', 'name');

    return res.status(200).json({
        ok: true,
        msg: 'getEvents',
        events
    });
}

const createEvent = async (req, res = response) => {
    const event = EventSchema(req.body);

    try {

        event.user = req.uid;
        const savedEvent = await event.save();

        return res.status(200).json({
            ok: true,
            msg: 'newEvent',
            event: savedEvent
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contact with the administrator'
        });
    }
}

const updateEvent = async (req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await EventSchema.findById(eventId);

        if(!event) {

            res.status(404).json({
                ok: false,
                msg: 'Event not found.'
            });
        }

        if(event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'You\'re not authorized to change this event'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        // const eventUpdated = await EventSchema.findByIdAndUpdate(eventId, newEvent); /* Return the old data */
        const eventUpdated = await EventSchema.findByIdAndUpdate(eventId, newEvent, {new: true}); /* Return the new data updated*/

        return res.status(200).json({
            ok: true,
            msg: 'updateEvent',
            event: eventUpdated
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Contact with the administrator.'
        });
    }
}

const deleteEvent = (req, res = response) => {
    return res.status(200).json({
        ok: true,
        msg: 'deleteEvent'
    });
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};