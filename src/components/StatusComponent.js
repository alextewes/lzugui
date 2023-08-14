import React, { useEffect, useState } from 'react';
import { StyledTable, StyledTableHeader, StyledTableData, StyledTableRow } from '../styledComponents';

function StatusComponent() {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/components/status')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setStatuses(data);
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

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
            {statuses.map((status, index) => (
                <StyledTableRow key={index}>
                    <StyledTableData>{status.ID}</StyledTableData>
                    <StyledTableData>{status.name}</StyledTableData>
                    <StyledTableData>{status.state}</StyledTableData>
                </StyledTableRow>
            ))}

            </tbody>
        </StyledTable>
    );
}

export default StatusComponent;
