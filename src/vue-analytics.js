import Vue from 'vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
   id:  ['UA-131421576-1', 'UA-131421576-2'],
   ecommerce: {
      enabled: true
    },
   router
});
