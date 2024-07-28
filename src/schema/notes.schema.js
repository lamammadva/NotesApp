const Joi = require('joi');


const notes = Joi.object({
    title:Joi.string().min(3).max(100).required()
    .regex(/^[A-Z]/, 'uppercase start'),
    description: Joi.string().min(5).max(500).required()
    .when('title', { 
        is: Joi.string().regex(/^[A-Z]/),
        then: Joi.string().min(10).message('Description must be at least 10 characters if title starts with uppercase')
    }),
})

module.exports = {
    notes
}