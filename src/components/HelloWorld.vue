<template>
  <div>
    <section>
      <v-container>
        <v-layout row wrap class="product-crumbs">
          <v-flex xs12>
            <h1>Dhoti</h1>
            <v-breadcrumbs :items="crumbs" divider=">"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-flex>

          <v-layout class="mt-30">
            <v-flex class="font-custom">
              <p>
                Ekatva dhoti is one of the most pious pieces of clothing worn by Indian men on auspicious occasions. We produce special quality dhoties
                for gents with border works and shirt matching colours. It is made from pure cotton fabric and is available in various lengths and
                thicknesses. The Kuthampully dhotis have two inch coloured borders on them and are available in two colours- white and cream. It has a
                length of 4 metres and width of 50 inches. The wedding set dhoti's come with special gold and silver jari thread work.A Kuthampully
                dhoti is one of the most pious pieces of clothing worn by Indian men on auspicious occasions. We produce special quality dhoties for
                gents with border works and shirt matching colours. It is made from pure cotton fabric and is available in various lengths and
                thicknesses. The Kuthampully dhotis have two inch coloured borders on them and are available in two colours- white and cream. It has a
                length of 4 metres and width of 50 inches. The wedding set dhoti's come with special gold and silver jari thread work.
              </p>
              <p>
                A Kuthampully dhoti is one of the most pious pieces of clothing worn by Indian men on auspicious occasions. We produce special quality
                dhoties for gents with border works and shirt matching colours. It is made from pure cotton fabric and is available in various lengths
                and thicknesses. The Kuthampully dhotis have two inch coloured borders on them and are available in two colours- white and cream. It
                has a length of 4 metres and width of 50 inches. The wedding set dhoti's come with special gold and silver jari thread work
              </p>
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
              <strong>Ekatva Dhoti Products</strong>
            </h2>
          </v-flex>

          <carousel :scrollPerPage="true" :perPageCustom="[[300, 1], [480, 2], [768, 3]]">
            <slide v-for="item in items">
              <v-card hover raised>
                <v-img
                  class="white--text"
                  height="200px"
                  :alt="item.name"
                  :src="item.image"
                  :srcset="item.datasrc"
                  sizes="(max-width: 320px) 224px,
                        (max-width: 480px) 224px,
                        (max-width: 540px) 254px,
                        (max-width: 800px) 256px,
                        (max-width: 1264px) 284px,
                        379px"
                >
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
          <div
            class="headline white--text mb-3 text-xs-center"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <em>Kick-start your wardrobe today</em>
          <v-btn class="blue lighten-2 mt-5" dark large href="#">Contact Us</v-btn>
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
                <p>Ekatva Collections brings to you an unique selection of traditional
                  <strong>Kerala handloom and ethnic products</strong> to our patrons.Kerala traditional wear has always had a special place in the hearts of fashion conscious Indian women and men.
                </p>

                <p>Our weavers design the most elegant cloths with emphasis on the texture, thread and weave. Ekatva products are weaved from the traditional cotton weaver's
                  <strong>Kuthampully</strong> village located in Thiruvilwamala Grama Panchayat of Thrissur district of Kerala. Traditional handloom is part and parcel of the village life in Kuthampully in Thrissur district. The forefathers of Kuthampully came from Mysore about 500 years ago, to weave clothes for the erstwhile dynasty of Cochin and they never returned to their native place. They followed the traditional path in the early days and the different kinds of attires they created, like the kasavu double dhoti, veshti and set mundu became popular. Later on, embroidery techniques were deftly applied on traditional Kuthampully sarees to produce designer ones. The Kuthampully Sarees got exclusive Intellectual Property rights through Geographical Indication Act in the year 1972 with 102 members.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
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
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "dhoti",
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
          text: "Dhoti",
          disabled: true,
          href: "/products/dhoti"
        }
      ],

      items: [
        {
          name: "Golden Kasavu Dhoti",
          tag: "cotton",
          datasrc:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_288/v1544885095/Dhoti/ekatvadhothi.jpg 288w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544885095/Dhoti/ekatvadhothi.jpg 379w,        https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_224/v1544885095/Dhoti/ekatvadhothi.jpg 224w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_254/v1544885095/Dhoti/ekatvadhothi.jpg 254w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544885095/Dhoti/ekatvadhothi.jpg 256w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885095/Dhoti/ekatvadhothi.jpg 284w",
          image:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/v1544885301/Dhoti/goldenkasavudhothi.jpg"
        },
        {
          name: "Saffron Dhoti",
          tag: "kalamkari",
          datasrc:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_320/v1544887188/Dhoti/dhothiorange.jpg 320w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothiorange.jpg 480w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_248/v1544887188/Dhoti/dhothiorange.jpg 768w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_248/v1544887188/Dhoti/dhothiorange.jpg 800w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_284/v1544887188/Dhoti/dhothiorange.jpg 1024w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_284/v1544885095/Dhoti/ekatvadhothi.jpg 1200w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544887188/Dhoti/dhothiorange.jpg 1280w",
          image:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/v1544887188/Dhoti/dhothiorange.jpg"
        },
        {
          name: "Silver Kasavu Dhoti",
          tag: "Khaki",
          datasrc:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_320/v1544887188/Dhoti/silverkasavudhoti.jpg 320w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/silverkasavudhoti.jpg 480w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_248/v1544887188/Dhoti/silverkasavudhoti.jpg 768w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_248/v1544887188/Dhoti/silverkasavudhoti.jpg 800w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_284/v1544887188/Dhoti/silverkasavudhoti.jpg 1024w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_284/v1544885095/Dhoti/silverkasavudhoti.jpg 1200w,https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544887188/Dhoti/silverkasavudhoti.jpg 1280w",
          image:
            "//res.cloudinary.com/ddglp4e0g/image/upload/v1541781402/v1544887188/Dhoti/silverkasavudhoti.jpg"
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
