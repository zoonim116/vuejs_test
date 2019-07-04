require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';

import App from './components/App';
import router from './routes';

import store from './store';

const app = new Vue({
    el: '#app',
    components: { App },
    store,
    router
});
