import Vuex from 'vuex';
import Vue from 'vue';
import memory from './modules/memory';


//Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        memory
    }
})
