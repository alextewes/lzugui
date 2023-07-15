// styledComponents.js
import styled from 'styled-components';
import {Link} from "react-router-dom";

export const StyledHeader = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  background-color: #007BFF;
  color: white;
`;
export const StyledApp = styled.div`
  font-family: Arial, sans-serif;
`;

export const StyledNav = styled.nav`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #007BFF;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: lightskyblue;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  margin: 10px;
`;

export const StyledInput = styled.input`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const StyledButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.th`
  background-color: #007BFF;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const StyledTableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;