// DeployComponent.jsx
import React from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../styledComponents';

function DeployComponent() {
    const formik = useFormik({
        initialValues: {
            componentJarPath: '',
            componentName: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledLabel htmlFor="componentJarPath">Component JAR Path</StyledLabel>
            <StyledInput id="componentJarPath" name="componentJarPath" type="text" onChange={formik.handleChange} value={formik.values.componentJarPath} />

            <StyledLabel htmlFor="componentName">Component Name</StyledLabel>
            <StyledInput id="componentName" name="componentName" type="text" onChange={formik.handleChange} value={formik.values.componentName} />

            <StyledButton type="submit">Deploy</StyledButton>
        </StyledForm>
    );
}

export default DeployComponent;
