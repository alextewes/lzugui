import React, {useState} from 'react';
import {useFormik} from 'formik';
import {StyledForm, StyledLabel, StyledInput, StyledButton, StyledMessage, StyledCenterDiv} from '../styledComponents';

function StopComponent() {
    const [message, setMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            componentId: '',
        }, onSubmit: values => {
            fetch('http://localhost:8080/api/components/stop', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({
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

    const stopRuntime = () => {
        fetch('http://localhost:8080/api/components/stop-runtime', {
            method: 'POST'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                setMessage(data.message || 'Runtime stopped successfully');
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Error stopping runtime');
            });
    };

    return (
        <div>
            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledLabel htmlFor="componentId">Component ID</StyledLabel>
                <StyledInput id="componentId" name="componentId" type="text" onChange={formik.handleChange}
                             value={formik.values.componentId}/>

                <StyledButton type="submit">Stop Component</StyledButton>

            </StyledForm>
            <StyledCenterDiv>
                <StyledButton onClick={stopRuntime}>Stop Runtime</StyledButton>
                {message && <StyledMessage>{message}</StyledMessage>}
            </StyledCenterDiv>
        </div>
    );
}

export default StopComponent;
