
const Validatior = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validationExperienceInput(data) {

    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validatior.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validatior.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }

    if (Validatior.isEmpty(data.from)) {
        errors.from = 'From data field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};