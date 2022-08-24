import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const { htmlText, name, type, value, onChange, dataTestId } = this.props;
    return (
      <div>
        <label htmlFor={ name }>{htmlText}</label>
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          dataTestId={ dataTestId }
        />
      </div>
    );
  }
}

export default CheckBox;

CheckBox.propTypes = {
  htmlText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};