import React, { useState } from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledMessage } from '../styledComponents';

function StopComponent() {
    const [message, setMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            componentId: '',
        },
        onSubmit: values => {
            fetch('http://localhost:8080/api/components/stop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    componentId: values.componentId,
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
                    setMessage('Error stopping component');
                });
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledLabel htmlFor="componentId">Component ID</StyledLabel>
            <StyledInput id="componentId" name="componentId" type="text" onChange={formik.handleChange} value={formik.values.componentId} />

            <StyledButton type="submit">Stop</StyledButton>

            {message && <StyledMessage>{message}</StyledMessage>}
        </StyledForm>
    );
}

export default StopComponent;
