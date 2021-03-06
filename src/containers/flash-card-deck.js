import React, { Component } from 'react';
import { connect } from 'react-redux';
import { skipCard } from './../actions/index';
import { bindActionCreators } from 'redux';

import FlashCard from './../components/flash-card';

class FlashCardDeck extends Component {
  renderDeck() {
    return (
      this.props.cardsData.map(card => {
        return (
          <FlashCard key={card.id} cardData={card} skipCard={this.props.skipCard} />
        );
      })
    )
  }

  render() {
    return (
      <div>
        {this.renderDeck()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardsData: state.cardsData,
    categories: state.categories
  }
}

// function to make actions available on props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    skipCard: skipCard
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardDeck);
