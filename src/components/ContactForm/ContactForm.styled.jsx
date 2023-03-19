import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-left: 30px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: #7b7979;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  text-shadow: 8px 8px 12px rgba(174, 172, 172, 0.3),
    -8px -8px 12px rgba(164, 162, 162, 0.06);
`;

export const Field = styled(FormikField)`
  height: 30px;
  padding: 3px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 8px 8px 12px rgba(143, 142, 142, 0.2),
    -8px -8px 12px rgba(27, 26, 26, 0.04);
`;

export const ErrorMessage = styled(FormikError)`
  color: #9a0374;
  font-weight: 500;
  font-size: 10px;
`;

export const AddContactBtn = styled.button`
  margin: 0;
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
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
