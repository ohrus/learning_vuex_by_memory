import cards from './cards'

const state = {
    cardsMatch: false,
    gameOver: false,
    numberSelected: 0,
    selectedCards: [],
    cards: cards.cards,  // ... yup. i did that.
    players: [
      { name: 'PLAYER1', score: 0, turn: true, id: 1 },
      { name: 'PLAYER2', score: 0, turn: false, id: 2 },
    ],
    currentPlayer: 1
};

const getters = {
    allPlayers: (state) => state.players,
    getPlayerOneName: (state) => state.players[0].name,
    getPlayerOneScore: (state) => state.players[0].score,
    getPlayerOneTurn: (state) => state.players[0].turn,
    getPlayerTwoName: (state) => state.players[1].name,
    getPlayerTwoScore: (state) => state.players[1].score,
    getPlayerTwoTurn: (state) => state.players[1].turn,
    getCurrentPlayer: (state) => state.players.filter(player => player.turn === true)[0].id,
    getCurrentPlayerName: (state) => state.players.filter(player => player.turn === true)[0].name,
    allCards: (state) => state.cards,
    getSelectedCards: (state) => state.selectedCards,
    getNumberSelected: (state) => state.numberSelected,
    cardsMatch: (state) => state.selectedCards[0].cardSource == state.selectedCards[1].cardSource,
    gameOver: (state) => state.gameOver,
    getWinner: (state) => {
            if(state.players[0].score > state.players[1].score) {
                return state.players[0].name
            } else if(state.players[1].score > state.players[0].score) {
                return state.players[1].name
            } else {
                return false
            }
    }
};

const actions = {
    incrementNumberSelected( { commit } ) {
        commit('incrementNumberSelected');
    },
    addToSelectedCards( { commit }, card ) {
        commit('addToSelectedCards', card);
    },
    resetNumberSelected ( {commit} ) {
        commit('resetNumberSelected');
    },
    resetSelected ( {commit} ) {
        commit('resetSelected');
    },
    removeFromBoard( {commit}, src) {
        commit('removeFromBoard', src);
    },
    flipFaceDown( {commit}, selected) {
        commit('flipFaceDown', selected);
    },
    toggleFaceDown( {commit}, src) {
        commit('toggleFaceDown', src);
    },
    toggleTurn( {commit} ) {
      commit('toggleTurn');
    },
    increaseScore( {commit} , id) {
        commit('increaseScore', id);
    },
    shuffleCards( {commit} ) {
        commit('shuffleCards');
    },
    toggleGameOver( {commit} ) {
        commit('toggleGameOver');
    }
};

const mutations = {
    incrementNumberSelected: (state) => {
        state.numberSelected++;
    },
    addToSelectedCards: (state, card) => {
        state.selectedCards.push(card)
    },
    resetNumberSelected: (state) => {
        state.numberSelected = 0;
    },
    resetSelected: (state) => {
        state.selectedCards = [];
    },
    removeFromBoard: (state, src) => {
        state.cards.forEach(function(card) {
            if (card.cardSource === src) {
                card.matched = true;
            }
        });
        // window.console.log('matches removed!');
    },
    flipFaceDown: (state) => {
        state.cards.forEach(card => { if (!card.matched && !card.isFaceDown) card.isFaceDown = true } ); 
    },
    toggleTurn: (state) => state.players.forEach(player => {
      player.turn = !player.turn;
    }),
    increaseScore: (state, id) => state.players.find(player => player.id === id).score++,
    // uses the Fisher-Yates shuffle - https://medium.com/@oldwestaction/randomness-is-hard-e085decbcbb2
    shuffleCards: (state) => {
        for (var i = state.cards.length -1; i > 0; i--) {
            const swapIndex = Math.floor(Math.random() * (i + 1))
            const currentCard = state.cards[i]
            const cardToSwap = state.cards[swapIndex]
            state.cards[i] = cardToSwap
            state.cards[swapIndex] = currentCard
        }
    },
    toggleGameOver: (state) => {
        state.gameOver = !state.gameOver;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}