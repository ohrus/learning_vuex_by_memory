<template>
  <div id="app">
    <div class="header">
      <h1 class="title">MEMORY</h1>
      <Score :player="1" :playerName="getPlayerOneName" class="scorecard1"/>
      <Score :player="2" :playerName="getPlayerTwoName" class="scorecard2"/>
    </div>
    <div class="game">
      <Gameboard />
    </div>
    <footer class="footer">
      <p>artwork by Theodore, Marianne, and Lawrence Milley</p>
      <p>source code available on <a href="">Github</a></p>
    </footer>
  </div>
</template>

<script>
import Gameboard from './components/Gameboard'
import Score from './components/Score'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Gameboard,
    Score
  },
  computed: mapGetters(['getPlayerOneName', 'getPlayerTwoName', 'getCurrentPlayer']),
  created() {
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: rgb(21, 0, 114);
  height: 100vh;
}

.header {
  display: grid;
  grid-template-columns: 60% 30%;
  grid-template-rows: repeat(2, 5vh);
  background-color: rgb(21, 0, 114);
  padding: 1.5vmin;
  grid-gap: 1vmin;
}

.title {
  font-family: 'Roboto', sans-serif;
  color: rgb(255, 248, 248);
  font-size: 10vmin;
  grid-row: 1/ span 2;
  justify-self: center;
  align-self: center;
}

.scorecard2 {
  grid-row: 2;
  grid-column: 2;
}

footer {
  margin: 1rem 1rem 0 0;
  text-align: right;
  font-size: 10px;
}

.game {
  width: 100%;
  margin: 0 auto;
}

a {
  color: white;
}
</style>
