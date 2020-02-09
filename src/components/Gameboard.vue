<template>
    <div class="gameboard">
        <div :key="card.cardNumber" v-for="card in allCards">
          <Card v-if="!gameOver" :card="card" v-on:turn-up="turnFaceUp(card)"/>
          <h2 v-else class="winner">{{ winner ? getWinner : `nobody` }} WINS!</h2>
        </div>
    </div>
</template>

<script>
import Card from './Card'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Gameboard',
  methods: {
    ...mapActions(['incrementNumberSelected', 'addToSelectedCards','increaseScore', 'resetNumberSelected', 'resetSelected', 'removeFromBoard', 'flipFaceDown', 'toggleTurn', 'shuffleCards', 'toggleGameOver']),
    turnFaceUp(card) {
      if (this.getNumberSelected === 2) return;
      if (!card.isFaceDown) return;
      if (!card.matched) card.isFaceDown = !card.isFaceDown;
      this.incrementNumberSelected();

      // add card to selected cards to compare
      this.addToSelectedCards(card);

      // if match
      if (this.getNumberSelected === 2) {
        if (this.cardsMatch) {
          setTimeout(() => { 
            this.removeFromBoard(card.cardSource);
            this.resetNumberSelected();
            this.resetSelected();
            this.increaseScore(this.getCurrentPlayer);
            // check if game over
            if (this.getPlayerOneScore + this.getPlayerTwoScore === (this.allCards.length / 2)) {
              this.toggleGameOver();
              let winner = this.getWinner;
              winner ? window.console.log(winner) : window.console.log('tie');
            }
          }, 1500);
        } else {
          setTimeout(() => { 
            this.flipFaceDown()
            this.resetNumberSelected();
            this.resetSelected();
            this.toggleTurn();
          }, 1500);
        }
      } 
    }
  },
  components: {
    Card,
  },
  computed: mapGetters(['allCards','getCurrentPlayer', 'getNumberSelected', 'getSelectedCards','cardsMatch', 'getPlayerOneScore', 'getPlayerOneName', 'getPlayerOneTurn', 'getPlayerTwoScore', 'getPlayerTwoName', 'getPlayerTwoTurn', 'getCurrentPlayerName', 'gameOver', 'getWinner']),
  created() {
    this.shuffleCards()
  }
}
</script>

<style scoped>
  .gameboard {
    display: grid;
    grid-template-columns: repeat(4, 17vmin);
    grid-gap: 1rem;
    flex-grow: 10;
    justify-content: center;
    margin-top: 2rem;
  }
  .hidden {
    display: none;
  }
  .winner {
    color: rgb(253, 81, 81);
    text-align: center;
  }

</style>
