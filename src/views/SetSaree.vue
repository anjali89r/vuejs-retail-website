<template>
  <div>
    <section>
      <v-container>
        <v-layout row wrap class="product-crumbs">
          <v-flex xs12>
            <h1>Kerala Saree</h1>
            <v-breadcrumbs :items="crumbs" divider=">"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-flex>

          <v-layout class="mt-30">
            <v-flex class="font-custom">
              <p>Ekatva Kerala Saree weave stories of latest styles keeping the age-old traditions intact. Our Sarees will make women look elegant and regal which are available in both traditional and modern styles. Our collection of Sarees speak deep-rooted in tradition and are weaved in Kuthampully Village, Kerala.</p>
              <p>Ekatva Kerala Saree is offered in cotton and silk fabrics and is continuously evolving in today’s trend time with modern and contemporary style. Our sarees follow standard specifications of saree - 6.25m length and 48inches length. Our weavers bring traditional quality and modern concepts in the most attractive manner in the texture of ekatva sarees.</p>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </section>

    <section>
      <div class="container">
        <v-layout column wrap class="my-5">
          <v-flex xs12 sm4 class="my-3">
            <h2 class="headline horizontal-line">
              <strong>Ekatva Sarees</strong>
            </h2>
          </v-flex>

          <carousel :scrollPerPage="true" :perPageCustom="[[300, 1], [480, 2], [768, 3]]">
            <slide v-for="item in items">
              <v-card hover raised>
                <v-img class="white--text" height="200px" aspect-ratio="1" :src="item.image">
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
                    <h3>{{item.name}}</h3>
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
          </v-flex> -->
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "set-mundu",
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
          text: "Products",
          disabled: false,
          href: ""
        },
        {
          text: "Kerala Saree",
          disabled: true,
          href: "/products/kerala-saree"
        }
      ],

      items: [
        {
          name: "Golden Kasavu Dhoti",
          tag: "cotton",
          image:
            "//res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_1137/v1544885301/Dhoti/goldenkasavudhothi.jpg"
        },
        {
          name: "Silver Kasavu Dhoti",
          tag: "kalamkari",
          image:
            "//res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_200,w_200/v1544885496/Dhoti/silverkasavudhoti.jpg"
        },
        {
          name: "Milano",
          tag: "Khaki",
          image:
            "//res.cloudinary.com/ddglp4e0g/image/upload/v1541781402/ekatva/setmundu2.jpg"
        },
        {
          name: "Tsing Tao",
          tag: "Kasavu",
          image:
            "//res.cloudinary.com/ddglp4e0g/image/upload/v1532873694/ekatva/dress3.jpg"
        },
        {
          name: "Frances",
          tag: "Kanchi",
          image:
            "//res.cloudinary.com/ddglp4e0g/image/upload/v1532873694/ekatva/dress3.jpg"
        },
        {
          name: "Burma Superstar",
          tag: "kasavu",
          image:
            "//res.cloudinary.com/ddglp4e0g/image/upload/v1532873694/ekatva/dress3.jpg"
        },
        {
          name: "Salt and Straw",
          tag: "pattu",
          image:
            "//res.cloudinary.com/ddglp4e0g/image/upload/v1532873694/ekatva/dress3.jpg"
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
