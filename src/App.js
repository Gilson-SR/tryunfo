import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.buttonValidation());
  }

  validateDescriptions = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const initialValue = 0;

    if(
      cardName.length <= initialValue 
      || cardDescription.length <= initialValue
      || cardImage.length <= initialValue
      || cardRare.length <= initialValue
    ) {
      return false;
    }
    return true;
  }

  validateAttributes = () => {
    let { cardAttr1, cardAttr2, cardAttr3} = this.state;
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    const minAttribute = 0;
    const maxAttribute = 90;
    const totalAttribute = 210;

    if(
      cardAttr1 > maxAttribute
      || cardAttr2 > maxAttribute
      || cardAttr3 > maxAttribute
    ){
      return false;
    }

    if(
      cardAttr1 < minAttribute
      || cardAttr2 < minAttribute
      || cardAttr3 < minAttribute
    ){
      return false
    }

    if(
      cardAttr1 + cardAttr2 + cardAttr3 > totalAttribute
    ){
      return false;
    }

    return true;
  }

  buttonValidation = () => {
    const activatedButton = this.validateAttributes() && this.validateDescriptions();
    this.setState({ isSaveButtonDisabled: !activatedButton});
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.onInputChange }
          onInputChange={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
