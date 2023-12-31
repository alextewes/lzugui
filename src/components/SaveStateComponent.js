import React, { useState } from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledMessage } from '../styledComponents';

function SaveStateComponent() {
    const [message, setMessage] = useState(null);

    const formik = useFormik({
        initialValues: { filename: 'customState.json' },
        onSubmit: (values) => {
            fetch('http://localhost:8080/api/components/save-state', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
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
                    setMessage('Error saving state');
                });
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledLabel htmlFor="filename">Filename</StyledLabel>
            <StyledInput
                id="filename"
                name="filename"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.filename}
            />
            <StyledButton type="submit">Save State</StyledButton>
            {message && <StyledMessage>{message}</StyledMessage>}
        </StyledForm>
    );
}

export default SaveStateComponent;
