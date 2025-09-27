const Joi = require('joi');
const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['personal', 'work', 'other'],
    }
})

const validateEvent = (event) => {
    const categoryEnum = ['personal', 'work', 'other'];
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().allow(''),
        date: Joi.date().required(),
        category: Joi.string().valid(...categoryEnum).required()
    });
    return schema.validate(event);
}

const Event = mongoose.model('Event', eventSchema);

exports.Event = Event;
exports.validate = validateEvent;