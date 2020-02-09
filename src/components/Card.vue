<template>
    <div class="flip-card" :class="{'is-flipped': !card.isFaceDown}"> 
        <div class="card flip-card-inner" @click="$emit('turn-up', card)">
            <div v-if="card.isFaceDown" class="flip-card-front">
                <img :src="cardBack" alt="game card back">
            </div>
        
            <div v-else class="flip-card-back">
                <img  :src="cardImage" alt="game card image">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: ["card"],
    computed: {
        cardImage() {
            return require('@/assets/' + this.card.cardSource)
        },
        cardBack() {
            return require('@/assets/cardback.png');
        }
    }
}
</script>

<style scoped>

    /* card animations taken from sample at w3schools. not quite working as intended. abandoned due to lack of knowledge. */

    .flip-card {
    perspective: 1000px;
    }
    /* This container is needed to position the front and back side */
    .flip-card-inner {
    position: relative;
    transition: transform 0.4s;
    transform-style: preserve-3d;
    }
    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card.is-flipped .flip-card-inner {
        transform: rotateY(180deg);
    }
    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
    position: absolute;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
    }
    /* Style the back side */
    .flip-card-back {
    transform: rotateY(180deg);
    }


    .card {
        width: 17vmin;
        height: 17vmin;
    }
    img {
        border-radius: 10px;
        width: 100%;
    }
    .cardBack {
        border-radius: 10px;
        width: 17vmin;
        height: 17vmin;
        background-color: rgb(253, 81, 81);
    }
    .cardPlaceholder {
        width: 17vmin;
        height: 17vmin;
        background-color: white;
    }
</style>