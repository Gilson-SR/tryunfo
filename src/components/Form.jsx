import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <section>
          <label htmlFor="nameInput">Nome</label>
          <input type="text" name="" id="nameInput" data-testid="name-input" />

          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="textArea"
            rows="4"
            cols="50"
            data-testid="description-input"
          />
        </section>
        <section id="attributes">
          <label htmlFor="attribute1">Attr01</label>
          <input
            type="number"
            name="attr1"
            id="attribute1"
            data-testid="attr1-input"
          />

          <label htmlFor="attribute2">Attr02</label>
          <input
            type="number"
            name="attr2"
            id="attribute2"
            data-testid="attr2-input"
          />

          <label htmlFor="attribute3">Attr03</label>
          <input
            type="number"
            name="attr3"
            id="attribute3"
            data-testid="attr3-input"
          />
        </section>
        <section>
          <label htmlFor="urlImage">Imagem</label>
          <input
            type="text"
            name="imagem"
            id="urlImage"
            data-testid="image-input"
          />

          <label htmlFor="selectionRarity">Raridade</label>
          <select name="raridade" id="selectionRarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>

          <input
            htmlText="Super Trybe Trunfo"
            type="checkbox"
            name="checkbox"
            id="checkBox"
            data-testid="trunfo-input"
          />

          <input type="button" value="Salvar" data-testid="save-button" />
        </section>
      </form>
    );
  }
}

export default Form;
