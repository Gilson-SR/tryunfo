import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { htmlText, name, dataTestId, onChange, value } = this.props;

    return (
      <div>
        <label htmlFor={ dataTestId }>{ htmlText }</label>
        <textarea
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </div>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  htmlText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
