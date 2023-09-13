import React, { useState } from 'react';
import { useFormik } from 'formik';
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledMessage } from '../styledComponents';

function DeployComponent() {
    const [message, setMessage] = useState('');
    const formik = useFormik({
        initialValues: {
            componentJarPath: '',
            componentName: '',
        },
        onSubmit: values => {
            fetch('http://localhost:8080/api/components/deploy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then(response => {
                    if(response.ok) {
                        setMessage(`Component with name "${values.componentName}" deployed successfully`);
                    } else {
                        throw new Error('Error deploying component');
                    }
                })
                .catch(error => {
                    console.error(error);
                    setMessage('Error deploying component');
                });
        },
    });

    return (
        <div>
            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledLabel htmlFor="componentJarPath">Component JAR Path</StyledLabel>
                <StyledInput
                    id="componentJarPath"
                    name="componentJarPath"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.componentJarPath}
                />

                <StyledLabel htmlFor="componentName">Component Name</StyledLabel>
                <StyledInput
                    id="componentName"
                    name="componentName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.componentName}
                />

                <StyledButton type="submit">Deploy</StyledButton>
            </StyledForm>

            {message && <StyledMessage>{message}</StyledMessage>}
        </div>
    );
}

export default DeployComponent;
