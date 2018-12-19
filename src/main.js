import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './style.css'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin,faPinterest, faFacebookF, faGooglePlusSquare, faBity, faTrello, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'
library.add(faSignOutAlt, faPhoneVolume)
library.add(faTwitter,faGithub,faLinkedin,faPinterest,faFacebookF, faGooglePlusSquare,faBity, faTrello, faInstagram, faWhatsapp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
