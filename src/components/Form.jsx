import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import CheckBox from './CheckBox';
import Selections from './Selections';
import TextArea from './TextArea';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <section id="descriptions">
          <Inputs
            htmlText="Nome"
            type="text"
            name="cardName"
            dataTestId="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />

          <TextArea
            htmlText="Descrição"
            name="cardDescription"
            dataTestId="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </section>

        <section id="attributes">
          <Inputs
            htmlText="Attr01"
            type="number"
            name="cardAttr1"
            dataTestId="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />

          <Inputs
            htmlText="Attr02"
            type="number"
            name="cardAttr2"
            dataTestId="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />

          <Inputs
            htmlText="Attr03"
            type="number"
            name="cardAttr3"
            dataTestId="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </section>

        <section id="features">
          <Inputs
            htmlText="Imagem"
            type="text"
            name="cardImage"
            dataTestId="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />

          <Selections
            htmlText="Raridade"
            name="cardRare"
            dataTestId="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          />

          { !hasTrunfo && <CheckBox
            htmlText="Super Trybe Trunfo"
            type="checkbox"
            name="cardTrunfo"
            dataTestId="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          /> }

          { hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p> }

          <input
            type="button"
            value="Salvar"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </section>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
