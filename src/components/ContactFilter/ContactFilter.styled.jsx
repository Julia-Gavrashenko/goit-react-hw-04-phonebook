import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: #7b7979;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-shadow: 8px 8px 12px rgba(174, 172, 172, 0.3),
    -8px -8px 12px rgba(164, 162, 162, 0.06);
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-top: 15px;
  padding-left: 30px;
`;

export const FilterField = styled.input`
  height: 30px;
  padding: 3px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 8px 8px 12px rgba(143, 142, 142, 0.2),
    -8px -8px 12px rgba(27, 26, 26, 0.04);
`;
