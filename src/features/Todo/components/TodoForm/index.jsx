import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-control/InputField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
            .required('Please enter title!')
            .min(5, 'Title is too short')
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })
    
    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if(onSubmit) {
            onSubmit(values);
        } 

        form.reset();
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            Todo Form
            <InputField label="Todo" name="title" form={form} />
        </form>
    );
}

export default TodoForm;