import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  color: #242323;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  text-shadow: 8px 8px 12px rgba(96, 95, 95, 0.3),
    -8px -8px 12px rgba(12, 11, 11, 0.04);
`;

export const ItemSpan = styled.div`
  margin-right: 20px;
`;

export const Item = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ItemButton = styled.button`
  margin: 0;
  margin-left: auto;
  width: 150px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: white;
  border-radius: 0.5rem;
  outline: none;
  color: #2f2f2f;
  font-weight: 700;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  text-shadow: 8px 8px 12px rgba(254, 253, 253, 0.3),
    -8px -8px 12px rgba(12, 11, 11, 0.04);
  transition: 0.2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(251, 249, 249, 0.8),
    -6px -6px 10px rgba(14, 13, 13, 0.2), 6px 6px 8px rgba(69, 68, 68, 0.075),
    6px 6px 10px rgba(5, 5, 5, 0.15);
  :hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.7),
      -2px -2px 4px rgba(255, 255, 255, 0.4),
      2px 2px 2px rgba(188, 186, 186, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
