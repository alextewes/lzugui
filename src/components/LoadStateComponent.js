import React, { useState } from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledButton, StyledMessage } from '../styledComponents';

function LoadStateComponent() {
    const [message, setMessage] = useState(null);

    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {
            fetch('http://localhost:8080/api/components/load-state', {
                method: 'POST',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    setMessage(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('Error loading state');
                });
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledButton type="submit">Load State</StyledButton>

            {message && <StyledMessage>{message}</StyledMessage>}
        </StyledForm>
    );
}

export default LoadStateComponent;
