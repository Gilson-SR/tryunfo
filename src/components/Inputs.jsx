import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { htmlText, type, name, dataTestId, onChange, value } = this.props;

    return (
      <div>
        <label htmlFor={ dataTestId }>{ htmlText }</label>
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </div>
    );
  }
}

export default Inputs;

Inputs.propTypes = {
  htmlText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
