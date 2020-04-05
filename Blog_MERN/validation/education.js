
const Validatior = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validationEducationInput(data) {

    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validatior.isEmpty(data.school)) {
        errors.school = 'School field is required';
    }

    if (Validatior.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required';
    }

    if (Validatior.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = 'Fieldofstudy field is required';
    }

    if (Validatior.isEmpty(data.from)) {
        errors.from = 'From data field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};