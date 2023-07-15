// StatusComponent.jsx
import React from 'react';
import { StyledTable, StyledTableHeader, StyledTableData, StyledTableRow } from '../styledComponents';

// Mocked data
const statuses = [
    { id: 1, name: 'Component 1', status: 'running' },
    { id: 2, name: 'Component 2', status: 'stopped' },
    { id: 3, name: 'Component 3', status: 'running' },
];

function StatusComponent() {
    return (
        <StyledTable>
            <thead>
            <StyledTableRow>
                <StyledTableHeader>ID</StyledTableHeader>
                <StyledTableHeader>Name</StyledTableHeader>
                <StyledTableHeader>Status</StyledTableHeader>
            </StyledTableRow>
            </thead>
            <tbody>
            {statuses.map((status) => (
                <StyledTableRow key={status.id}>
                    <StyledTableData>{status.id}</StyledTableData>
                    <StyledTableData>{status.name}</StyledTableData>
                    <StyledTableData>{status.status}</StyledTableData>
                </StyledTableRow>
            ))}
            </tbody>
        </StyledTable>
    );
}

export default StatusComponent;
