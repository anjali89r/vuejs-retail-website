<template>
  <v-app>
    <header id="header">
      <div class="header-top">
        <v-toolbar color="white">
          <v-btn icon href="https://wa.me/917558030904" class="hidden-sm-and-down">
            <font-awesome-icon icon="phone-volume"/>
            <span class="font-content icon-left">+917558030904</span>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon href="https://www.facebook.com/ektvaa">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
          </v-btn>

          <v-btn icon href>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }"/>
          </v-btn>

          <v-btn icon href="https://www.instagram.com/ekatvacollection/">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
          </v-btn>
        </v-toolbar>
      </div>
      <div class="main-menu">
        <v-navigation-drawer class="sideDrawer" v-model="sideNav" fixed temporary dark>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Home</router-link>
            </v-list-tile-title>
          </v-list-tile>

          <v-list-group prepend-icon="shopping_basket" value="true" no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>
                <router-link to="#">Products</router-link>
              </v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(item, i) in products" :key="i">
              <v-list-tile-title>
                <router-link :to="`/products/${item.to}`">{{ item.title }}</router-link>
              </v-list-tile-title>
              <!-- <v-list-tile-action>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-tile-action>-->
            </v-list-tile>
          </v-list-group>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="#">Blog</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/contact">Contact</router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-navigation-drawer>
        <v-toolbar class="main-toolbar">
          <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
          <img
            src="https://res.cloudinary.com/ddu4bac2x/image/upload/v1544884640/ekatvalogo.jpg"
            height="44px"
            width="44px"
          >

          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
              <router-link to="/">Home</router-link>
            </v-btn>
            <v-menu attach class="main-vmenu">
              <v-btn slot="activator" class="menu-btn">Products</v-btn>

              <v-list class="menu-list">
                <v-list-tile v-for="(item, index) in products" :key="index">
                  <v-list-tile-title>
                    <router-link :to="`/products/${item.to}`">{{ item.title }}</router-link>
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>

            <v-btn flat>Blog</v-btn>
            <v-btn flat>
              <router-link to="/contact">Contact</router-link>
            </v-btn>
            <v-btn flat>
              <router-link>About us</router-link>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </header>

    <!--products: Dhoti, Set Saree, Set Mundu, Salwar -->
    <v-content class="content-sec">
      <router-view></router-view>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",

  data: () => ({
    products: [
      { title: "Dhoti", to: "dhoti", icon: "people_outline" },
      { title: "Set Saree", to: "set-saree", icon: "people_outline" },
      { title: "Set Mundu", to: "set-mundu", icon: "people_outline" },
      { title: "Salwar", to: "salwar" }
    ],
    sideNav: null,
    items: [
      { title: "Home", icon: "dashboard", to: "/" },
      { title: "Products", icon: "dashboard", to: "#" },
      { title: "Blog", icon: "dashboard", to: "/blog" },
      { title: "Contact", icon: "question_answer" }
    ]
  }),
  components: {
    Footer
  }
};
</script>
<style scoped>
#header {
  transition: all 0.5s;
  z-index: 997;
  background: #fff;
}
.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon {
  color: #fff;
}
.main-menu .main-toolbar {
  background-color: #000;
}
.main-menu .main-toolbar .v-toolbar__title,
.main-menu .main-toolbar .v-toolbar__items .v-btn {
  font-size: 13px;
}
.main-menu .main-toolbar .v-toolbar__items .v-btn:hover,
.v-btn a:hover {
  color: #90d3f0;
}
.v-menu__content {
  top: 64px !important;
}
.menu-list .v-list__tile a {
  font-size: 13px;
  color: #ed620c;
  text-decoration: none;
}
.menu-list .v-list__tile a:hover {
  color: #914414;
}
.menu-list .v-list__tile {
  height: 35px !important;
}
.main-vmenu .v-btn {
  background-color: #000 !important;
}
a {
  font-size: 13px;
  color: #e48a17;
  text-decoration: none;
  font-weight: 800;
}
#header {
  position: fixed;
  width: 100%;
}
.content-sec {
  padding-top: 110px !important;
}
.v-navigation-drawer {
  margin-top: 110px !important;
  height: 200% !important;
  max-height: calc(200% - 0px) !important;
}

</style>
