import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './Charge'

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode: 'history'
});