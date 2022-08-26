import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const { htmlText, type, name, dataTestId, onChange, checked } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestId }>{htmlText}</label>
        <input
          type={ type }
          name={ name }
          checked={ checked }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </div>
    );
  }
}

export default CheckBox;

CheckBox.propTypes = {
  htmlText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
