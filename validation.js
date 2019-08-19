const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}
module.exports.registerValidation = registerValidation;