<template>
  <div>
    <section>
      <v-container>
        <v-layout row wrap class="product-crumbs">
          <v-flex xs12>
            <h1>Manufacturing</h1>
            <v-breadcrumbs :items="crumbs" divider=">"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-flex>

          <v-layout class="mt-30">
            <v-flex class="font-custom">
              <p>
                Ekatva dhoti is one of the most pious pieces of clothing worn by Indian men on auspicious occasions. We produce special quality dhoties
                for men with border works and shirt matching colours. It is made from pure cotton fabric and is available in various lengths and
                thicknesses. Our dhoti's are weaved in Kuthampully Village in Thrissur district,Kerala.The Kuthampully dhotis have two inch coloured borders on them and are available in two colours- white and cream. It has a
                length of 4 metres and width of 50 inches. The wedding set dhoti's come with special gold and silver jari thread work. Our desginers works with weavers to get best quality products for our patrons.We sell our products in various retail store and is available only through Amazon.
              </p>
              <p>Dhoti usually has a line of comparatively thicker cloth woven into it near the border called the kara.Our dhoti kara can be coloured and comes in various sizes. We also design dhoti's with double coloured and ornamental kara. For more occasions like weddings, a dhoti has a golden embroidery known as kasavu. The wearer highlights the 'kara' by carefully folding the end of the mundu. The kara generally appears on the right-hand side of the person, though styles with the kara on the left side are prevalent.</p>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </section>

    <section>
      <div class="container pad-no">
        <v-layout column wrap class="my-5">
          <v-flex xs12 sm4 class="my-3">
            <h2 class="headline horizontal-line">
              <strong>Ekatva Dhotis</strong>
            </h2>
          </v-flex>

          <carousel :scrollPerPage="true" :perPageCustom="[[300, 1], [480, 2], [768, 3]]">
            <slide v-for="item in items" :key="item.name">
              <v-card hover raised v-if="$vuetify.breakpoint.xsAndDown">
                <v-img class="white--text" height="200px" :alt="item.name" :src="item.srcXs">
                  <!-- //:src="item.image" -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div class="card-content">
                    <h4>{{item.name}}</h4>
                  </div>
                </v-card-title>
              </v-card>
              <v-card hover raised v-else-if="$vuetify.breakpoint.smAndDown">
                <v-img class="white--text" height="200px" :alt="item.name" :src="item.srcSm">
                  <!-- //:src="item.image" -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div class="card-content">
                    <h4>{{item.name}}</h4>
                  </div>
                </v-card-title>
              </v-card>
              <v-card hover raised v-else-if="$vuetify.breakpoint.mdAndDown">
                <v-img class="white--text" height="200px" :alt="item.name" :src="item.srcMd">
                  <!-- //:src="item.image" -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div class="card-content">
                    <h4>{{item.name}}</h4>
                  </div>
                </v-card-title>
              </v-card>
              <v-card hover raised v-else-if="$vuetify.breakpoint.lgAndDown">
                <v-img class="white--text" height="200px" :alt="item.name" :src="item.srcLg">
                  <!-- //:src="item.image" -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div class="card-content">
                    <h4>{{item.name}}</h4>
                  </div>
                </v-card-title>
              </v-card>
              <v-card hover raised v-else-if="$vuetify.breakpoint.xlAndDown">
                <v-img class="white--text" height="200px" :alt="item.name" :src="item.srcXl">
                  <!-- //:src="item.image" -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div class="card-content">
                    <h4>{{item.name}}</h4>
                  </div>
                </v-card-title>
              </v-card>
            </slide>
          </carousel>
        </v-layout>
      </div>
    </section>
    <section>
      <v-parallax :src="require(`@/assets/${img}`)" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            Our wide range of clothing is available in retail and wholesale across India.
          </div>
            Contact Us to know more.
          <v-btn class="contact-btn mt-5" dark href="/contact">Contact Us</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout">
                <div class="headline custom-line">About Ekatva</div>
              </v-card-title>
              <v-card-text class="font-custom">
                <p>Ekatva Collections brings to you a unique selection of traditional
                  <strong>Kerala handloom and ethnic products</strong> to our patrons. Kerala traditional wear has always had a special place in the hearts of fashion conscious Indian women and men.
                </p>

                <p>Our weavers design the most elegant clothes with an emphasis on the texture, thread and weave. Ekatva products are weaved from the traditional cotton weaver's
                  <strong>Kuthampully</strong> village located in Thiruvilwamala Grama Panchayat of Thrissur district of Kerala. Traditional handloom is part and parcel of the village life in Kuthampully in Thrissur district. The forefathers of Kuthampully came from Mysore about 500 years ago, to weave clothes for the erstwhile dynasty of Cochin and they never returned to their native place. They followed the traditional path in the early days and the different kinds of attires they created, like the kasavu double dhoti, veshti and set mundu became popular. Later on, embroidery techniques were deftly applied on traditional Kuthampully sarees to produce designer ones. We design designers saree also as per request which is unique to the occasion and with all contemporary and modern style.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- <v-flex xs12>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout">
                <div class="headline custom-line">Kuthampully Handloom</div>
              </v-card-title>
              <v-card-text class="font-custom">
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>-->
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "manufacturing",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      img: "section.jpg",

      crumbs: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },

        {
          text: "Manufacturing",
          disabled: true,
          href: "/manufacturing"
        }
      ],

      items: [
        {
          name: "Golden Kasavu Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885095/Dhoti/ekatvadhothi.jpg"
        },
        {
          name: "Saffron Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544887188/Dhoti/dhothiorange.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544887188/Dhoti/dhothiorange.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothiorange.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544887188/Dhoti/dhothiorange.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothiorange.jpg"
        },

        {
          name: "Silver Kasavu Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885496/Dhoti/silverkasavudhoti.jpg"
        },

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544887188/Dhoti/dhothibrown.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544887188/Dhoti/dhothibrown.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothibrown.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544887188/Dhoti/dhothibrown.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothibrown.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
h2.horizontal-line {
  /* overflow: hidden; */
  text-align: center;
}

h2.horizontal-line:before,
h2.horizontal-line:after {
  background-color: #e48a17;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 35%;
}

h2.horizontal-line:before {
  right: 0.5em;
  margin-left: -50%;
}

h2.horizontal-line:after {
  left: 0.5em;
  margin-right: -50%;
}
.v-responsive {
  height: 300px !important;
}
</style>
