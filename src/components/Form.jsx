import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <section>
            <label for="nameInput">Nome</label>
            <input type="text" name="" id="nameInput" data-testid="name-input" />

            <label for="descricao">Descrição</label>
            <textarea id="descricao" name="textArea" rows="4" cols="50" data-testid="description-input"></textarea>
        </section>
        <section id="atributos">
            <label for="atributo1">Attr01</label>
            <input type="number" name="attr1" id="atributo1" data-testid="attr1-input" />

            <label for="atributo2">Attr02</label>
            <input type="number" name="attr2" id="atributo2" data-testid="attr2-input" />

            <label for="atributo3">Attr03</label>
            <input type="number" name="attr3" id="atributo3" data-testid="attr3-input" />
        </section>
        <section>
            <label for="urlImage">Imagem</label>
            <input type="text" name="imagem" id="urlImage" data-testid="image-input" />

            <label for="selectionRaridade">Raridade</label>
            <select name="cars" id="cars">
                <option value="normal">Normal</option>
                <option value="raro">Raro</option>
                <option value="muito raro">Muito Raro</option>
            </select>

            <label for="checkBox">Super Trybe Trunfo</label>
            <input type="checkbox" name="checkbox" id="checkBox" data-testid="trunfo-input" />

            <input type="button" value="Salvar" data-testid="save-button" />
        </section>
      </form>
    );
  }
}

export default Form;
