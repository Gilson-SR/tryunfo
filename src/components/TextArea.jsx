import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { htmlText, name, value, onChange, dataTestId } = this.props;

    return (
      <div>
        <label htmlFor={ dataTestId }>{htmlText}</label>
        <textarea
          name={ name }
          value={ value }
          onChange={ onChange }
          dataTestId={ dataTestId }
        />
      </div>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  htmlText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
