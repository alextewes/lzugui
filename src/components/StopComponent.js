// StopComponent.jsx
import React from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../styledComponents';

function StopComponent() {
    const formik = useFormik({
        initialValues: {
            componentId: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledLabel htmlFor="componentId">Component ID</StyledLabel>
            <StyledInput id="componentId" name="componentId" type="text" onChange={formik.handleChange} value={formik.values.componentId} />

            <StyledButton type="submit">Stop</StyledButton>
        </StyledForm>
    );
}

export default StopComponent;
