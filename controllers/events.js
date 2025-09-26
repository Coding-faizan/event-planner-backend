const { Event, validate } = require('../model/event');

const getEvents = async (req, res) => {
    try {

        const category = req.query.category;
        if (category) {
            const events = await Event.find({ category: category });
            return res.status(200).json(events);
        }

        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createEvent = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).json(error.details[0].message);

        const event = await Event.create(req.body);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateEvent = async (req, res) => {
    try {
        console.log('updateEvent called');
        const eventId = req.params.id;
        if (!eventId) return res.status(400).json({ message: "Event ID is required" });

        const { error } = validate(req.body);
        if (error) return res.status(400).json(error.details[0].message);

        const event = await Event.findByIdAndUpdate(eventId, req.body, { new: true });
        if (!event) return res.status(404).json({ message: "Event not found" });


        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        if (!eventId) return res.status(400).json({ message: "Event ID is required" });

        const event = await Event.findByIdAndDelete(eventId);
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}