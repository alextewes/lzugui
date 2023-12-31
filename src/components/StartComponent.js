import React, { useState } from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledMessage } from '../styledComponents';

function StartComponent() {
    const [message, setMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            componentName: '',
        },
        onSubmit: values => {
            fetch('http://localhost:8080/api/components/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    componentName: values.componentName,
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setMessage(data.message);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('Error starting component');
                });
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>

            <StyledLabel htmlFor="componentName">Component Name</StyledLabel>
            <StyledInput id="componentName" name="componentName" type="text" onChange={formik.handleChange} value={formik.values.componentName} />

            <StyledButton type="submit">Start</StyledButton>

            {message && <StyledMessage>{message}</StyledMessage>}
        </StyledForm>
    );
}

export default StartComponent;
