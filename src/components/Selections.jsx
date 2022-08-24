import React from 'react';
import PropTypes from 'prop-types';

class Selections extends React.Component {
  render() {
    const { htmlText, name, value, onChange, dataTestId } = this.props;
    return (
      <div>
        <label htmlFor={ name }>{htmlText}</label>
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          dataTestId={ dataTestId }
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
