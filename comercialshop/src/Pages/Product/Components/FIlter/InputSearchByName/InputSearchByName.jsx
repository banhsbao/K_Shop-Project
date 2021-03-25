import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputSearchByName = props => {
    const { form, name, label, disable } = props;
    const { errors, formState } = form;
    const hasError =formState.touched[name] && errors[name];
    return (
        <Controller
        id="txtSearch"
            name={name}
            control={form.control}
            as={TextField}
            label={label}
            disabled={disable}
            margin="normal"
            error={!!hasError}
            helperText={errors[name]?.message}
        />
    )
}

InputSearchByName.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disable: PropTypes.bool,
}

export default InputSearchByName
