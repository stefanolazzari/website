import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Competenze from '../view/Competenze.vue'
import Cv from '../view/Cv.vue'
import Multidisciplinari from '../view/Multidisciplinari.vue'
import Contatti from '../view/Contatti.vue'
import Corsi from '../view/Corsi.vue'
// import { VueRouter } from 'vue-router' 
// import routes from './routes'


// 1. Define route components.
// These can be imported from other files
//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', 
  name: 'Home',
  component: Home 
},
  { path: '/competenze', 
  name: 'Competenze',
  component: Competenze 
},
{ path: '/cv', 
  name: 'Cv',
  component: Cv
},
{ path: '/Multidisciplinari',
  name: 'Multidisciplinari',
  component: Multidisciplinari 
},
{ path: '/contatti', 
  name: 'Contatti',
  component: Contatti 
},
{ path: '/corsi', 
  name: 'Corsi',
  component: Corsi 
},
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })



  export default router;