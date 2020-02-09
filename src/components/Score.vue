<template>
    <div class="scorecard">
        <h2 class="player-name" :class="{'current-player' : player === getCurrentPlayer}">{{ this.playerName }}</h2>
        <p v-if="player === 1" class="score">{{ getPlayerOneScore }}</p>
        <p v-if="player === 2" class="score">{{ getPlayerTwoScore }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Score',
    props: ['player', 'playerName'],
    computed: mapGetters(['getCurrentPlayer', 'getPlayerOneScore', 'getPlayerTwoScore'])
}

// 🟢🟢🟢
</script>

<style scoped>
    .scorecard {
        align-self: center;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    .player-name {
        font-family: 'Roboto', sans-serif;
        color: rgb(255, 248, 248);
        font-size: 5vmin;
        padding: 0.5vw;
        flex-grow: 1;
    }
    .score {
        font-size: 5vmin;
        color: rgb(255, 248, 248);
        font-family: 'Roboto', sans-serif;
        margin-left: 1rem;
        flex-grow: 1;
    }
    .current-player {
        color: rgb(253, 81, 81);
    }
    
</style>