import PropTypes from 'prop-types';
import {
  FilterLabel,
  FilterContainer,
  FilterField,
} from './ContactFilter.styled';

export const ContactFilter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find Contacts by name
        <FilterField type="text" value={filter} onChange={onChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
