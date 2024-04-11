function showCardText(card) {
    var cardText = card.querySelector('.card-text');
    if (cardText) {
      cardText.classList.add('show');
    }
  }
  
  function hideCardText(card) {
    var cardText = card.querySelector('.card-text');
    if (cardText) {
      cardText.classList.remove('show');
    }
  }
  