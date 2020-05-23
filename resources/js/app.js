require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Vuetify from "vuetify";
Vue.use(VueRouter);
Vue.use(Vuetify);
var axios = require('axios')

import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Items from './components/Items.vue';
import CreateItem from './components/CreateItem.vue';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/example', component: ExampleComponent },
    { path: '/items', component: Items },
    { path: '/item/create-item', component: CreateItem }
]

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    Vuetify,
    render: h => h(app)
}).$mount('#app');
