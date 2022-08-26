import React from 'react';
import PropTypes from 'prop-types';

class Selections extends React.Component {
  render() {
    const { htmlText, name, dataTestId, onChange, value } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>{htmlText}</label>
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </div>
    );
  }
}

export default Selections;

Selections.propTypes = {
  htmlText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
