import React from 'react';
import PropTypes from 'prop-types'
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
    } = this.props

    return (
      <form>
        <section id="identification">
          <label htmlFor="nameInput">
            Nome
            <Inputs 
            type="text" 
            name="cardName" 
            id="nameInput" 
            data-testid="name-input" 
            value={ cardName }
            onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <TextArea
              id="description"
              name="cardDescription"
              rows="4"
              cols="50"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </section>
        <section id="attributes">
          <label htmlFor="attribute1">
            Attr01
            <Inputs
              type="number"
              name="cardAttr1"
              id="attribute1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attribute2">
            Attr02
            <Inputs
              type="number"
              name="cardAttr2"
              id="attribute2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attribute3">
            Attr03
            <Inputs
              type="number"
              name="cardAttr3"
              id="attribute3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </section>
        <section id="features">
          <label htmlFor="urlImage">
            Imagem
            <Inputs
              type="text"
              name="cardImage"
              id="urlImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="selectionRarity">
            Raridade
            <Selections
              name="cardRare"
              id="selectionRarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="checkBox">
            Super Trybe Trunfo
            { !hasTrunfo && <CheckBox
              type="checkbox"
              name="cardTrunfo"
              id="checkBox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            /> }

            { hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p> }
          </label>

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
}
