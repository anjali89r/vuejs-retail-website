<template>
  <v-app>

    <div
    class="hide-overflow custom-toolbar"
    style="position: relative;"
  >
  <div class="header-top">

      <v-toolbar
      absolute
 color="white lighten-4"

      scroll-off-screen
      scroll-target="#scrolling-techniques"
    >


      <v-btn icon>
        <font-awesome-icon icon="phone-volume" /><span class="font-content icon-left">+919493764892</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
      </v-btn>

      <v-btn icon>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
      </v-btn>

      <v-btn icon>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }" />
      </v-btn>
    </v-toolbar>

  </div>


    <div
      id="scrolling-techniques"
      class="scroll-y"
      style="max-height: 500px;"
    >



        <v-content>
          <div>
    <v-toolbar >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
      <HelloWorld/>
    </v-content>

    </div>
  </div>


  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>

@media (max-width: 991px) {
  .header-top{
    display: none;
  }
}
</style>
