import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 480px;
`;

export const ListItem = styled.li`
  color: #242323;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-shadow: 8px 8px 12px rgba(96, 95, 95, 0.3),
    -8px -8px 12px rgba(12, 11, 11, 0.04);
`;
