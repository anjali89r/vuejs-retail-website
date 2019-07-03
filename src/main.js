import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import App from './App.vue'
import './style.css'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin,faPinterest, faFacebookF, faGooglePlusSquare, faBity, faTrello, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'
import VueAnalytics from 'vue-analytics'

import VueInstagram from 'vue-instagram'

Vue.use(VueInstagram)

library.add(faSignOutAlt, faPhoneVolume)
library.add(faTwitter,faGithub,faLinkedin,faPinterest,faFacebookF, faGooglePlusSquare,faBity, faTrello, faInstagram, faWhatsapp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
const isProd=process.env.NODE_ENV === 'production'
Vue.use(VueHead)
Vue.use(VueRouter)
Vue.use(VueAnalytics, {
  id:  ['UA-131421576-1', 'UA-131421576-2'],
  ecommerce: {
     enabled: true
   },
  router,
  autoTracking:{
    exception:true
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
