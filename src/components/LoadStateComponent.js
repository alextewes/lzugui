// LoadStateComponent.jsx
import React from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../styledComponents';

function LoadStateComponent() {
    const formik = useFormik({
        initialValues: {
            apiUrl: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledLabel htmlFor="apiUrl">API URL</StyledLabel>
            <StyledInput id="apiUrl" name="apiUrl" type="text" onChange={formik.handleChange} value={formik.values.apiUrl} />

            <StyledButton type="submit">Load State</StyledButton>
        </StyledForm>
    );
}

export default LoadStateComponent;
