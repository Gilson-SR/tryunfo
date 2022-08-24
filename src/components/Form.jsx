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
            <input
              type="number"
              name="attr1"
              id="attribute1"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attribute2">
            Attr02
            <input
              type="number"
              name="attr2"
              id="attribute2"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attribute3">
            Attr03
            <input
              type="number"
              name="attr3"
              id="attribute3"
              data-testid="attr3-input"
            />
          </label>
        </section>
        <section id="features">
          <label htmlFor="urlImage">
            Imagem
            <input
              type="text"
              name="imagem"
              id="urlImage"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="selectionRarity">
            Raridade
            <select
              name="raridade"
              id="selectionRarity"
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="checkBox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkBox"
              data-testid="trunfo-input"
            />
          </label>

          <input type="button" value="Salvar" data-testid="save-button" />
        </section>
      </form>
    );
  }
}

export default Form;
