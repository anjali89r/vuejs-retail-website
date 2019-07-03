<template>
  <div>
    <section>
      <v-container>
        <v-layout row wrap class="product-crumbs">
          <v-flex xs12>
            <h1>Kerala Kasavu Saree</h1>
            <v-breadcrumbs :items="crumbs" divider=">"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-flex>

          <v-layout class="mt-30">
            <v-flex class="font-custom">
              <p>Ekatva Kerala Kasavu Saree weave stories of latest styles keeping the age-old traditions intact. Our Kerala Set Sarees will make women look elegant and regal which are available in both traditional and modern styles. Our collection of Sarees speak deep-rooted in tradition and are weaved in Kuthampully Village, Kerala.</p>
              <p>Kerala sarees are offered in cotton and silk fabrics and is continuously evolving in today’s trend time with modern and contemporary style. Our sarees follow standard specifications of saree - 6.25m length and 48inches length. Our weavers bring traditional quality and modern concepts in the most attractive manner in the texture of ekatva sarees and we bring the latest Kerala Saree designs.Our Kerala Kasavu Saree designs are unique and modern in style with works like mural,embroidery and handprints on the saree.</p>
              <p>Kerala saree is specially known as the saree of either white or cream with kasavu (golden threads). The process
of making this saree involves the constant hardships of the weaver during all the steps of making it. Cotton yarns
are generally brought from the Salem regions of Tamilnadu and Sari threads from Surat. The cotton yarn of the
roll form are wound to the small pirns for the weft purpose and immersed in the kanji liquid for stiffness purpose.
Sari threads are wound to the small pirns for the design and weft purpose.
In case of the cotton yarn they are rolled on the beam and knotted to the previous yarns firmly by dipping the
fingers into the melted wax to avoid the slipperiness of the fingers. The yarns are then extended and the beam is
placed on the loom for weaving.</p>
<p>Sari threads from the bobbins are passed through the eyelets and rolled on to the warping beams. The eyelets
moves from one end to the other end of the warping frame, there by winding about three mona said in the local
language (i.e. one set of the top and the bottom threads of the warp). Thereby continuously changing the bobbins till the required length is obtained. The Sari threads are then knotted to the previous threads and in between dip the fingers in the melted wax for the strong knotting. The Sari threads are extended and applied with
wax from one end to the other for stiffness purpose. After the cotton yarn and the Sari threads are inserted and
tightened to the required length. The weaving process begins with the controlled mechanism of the Jacquard for
the insertion of the patterns.
Though weaving is done on the handlooms mostly, the saree woven on the power looms from the Erode and
Salem regions are brought to Kuthampully for the final works of the printing. The method followed is the screen
printing where the films of the designs are sent from Tirupur and the screens are set here. As per requirement,
the screen is cleaned properly with the wet cloth and then the colour paste made is spread evenly to imprint the
design on the fabric that is placed firmly to the table with the chalk powder and the sticker gum.
Most of the time the fabric observed is rough therefore they are sent through the calendering process to obtain
a smooth finish. The fabric is then folded, pressed and packed to be sold or exported to the places wherever the
Keralites live in the world.</p>
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
              <strong>Ekatva Kerala Sarees</strong>
            </h2>
          </v-flex>

          <carousel :scrollPerPage="true" :perPageCustom="[[300, 1], [480, 2], [768, 3]]">
            <slide v-for="item in items" :key="item.name">
              <v-card hover raised  v-if="$vuetify.breakpoint.xsAndDown">
                <v-img class="saree-img white--text" :alt="item.name" height="200px" :src="item.srcXs">
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
                <v-img class="saree-img white--text" height="200px" :alt="item.name" :src="item.srcSm">
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
                <v-img class="saree-img white--text" height="200px" :alt="item.name" :src="item.srcMd">
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
              <v-card hover raised v-else-if="$vuetify.breakpoint.lgAndDown" >
                <v-img class="saree-img white--text" height="200px" :alt="item.name" :src="item.srcLg">
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
              <v-card hover raised v-else>
                <v-img class="white--text saree-img" height="200px" :alt="item.name" :src="item.srcXl">

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
                <h4><div class="headline custom-line">About Ekatva</div></h4>
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
  name: "setsaree",
  head: {
    title: {
      inner: `Latest Kerala Saree`,
      separator: '|',
      complement: 'Kerala Saree Wholesale Merchant',
    meta: [
       { name: 'description', content: `Latest Kerala Saree designs, unique amd modern styles from Ekatva. We are a wholesale merchant selling traditional kerala saree, dhoti and set mundu for discounted rates.` }
    ]
  }},
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
          name: "Ekatva Rithu Collection",
          tag: "cotton",
          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1562105997/Saree/rithucollection.jpg",

          srcSm:
          "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_250,w_300/v1562105997/Saree/rithucollection.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcMd:
          "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_250,w_284/v1562105997/Saree/rithucollection.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_250,w_275/v1562105997/Saree/rithucollection.jpg",

            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544885095/Dhoti/ekatvadhothi.jpg",
          srcXl:
          "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1562105997/Saree/rithucollection.jpg"
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885095/Dhoti/ekatvadhothi.jpg"
        },
        {
          name: "Ekatva Rithu Collections 1",
          tag: "cotton",

          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1562107648/Saree/rithucollection2.jpg",

          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1562107648/Saree/rithucollection2.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1562107648/Saree/rithucollection2.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1562107648/Saree/rithucollection2.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544885496/Dhoti/silverkasavudhoti.jpg",
          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1562107648/Saree/rithucollection2.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544885496/Dhoti/silverkasavudhoti.jpg"
        },
        {
          name: "Ekatva Rithu Collections 2",
          tag: "cotton",
          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1562107359/Saree/rithucollection1.jpg",

          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1562107359/Saree/rithucollection1.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544887188/Dhoti/dhothiorange.jpg",
          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1562107359/Saree/rithucollection1.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothiorange.jpg",
          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1562107359/Saree/rithucollection1.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544887188/Dhoti/dhothiorange.jpg",
          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1562107359/Saree/rithucollection1.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothiorange.jpg"
        },
        {
          name: "Kerala Saree with mural print design",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1546397049/Saree/ekatvakeralasaree3.jpg",

          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546397049/Saree/ekatvakeralasaree3.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546397049/Saree/ekatvakeralasaree3.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546397049/Saree/ekatvakeralasaree3.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_250,w_284/v1546397049/Saree/ekatvakeralasaree3.jpg"
        },
        {
          name: "Kerala Saree with floral design print",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1546397114/Saree/ekatvakeralasaree4.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546397114/Saree/ekatvakeralasaree4.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546397114/Saree/ekatvakeralasaree4.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546397114/Saree/ekatvakeralasaree4.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546397114/Saree/ekatvakeralasaree4.jpg"
        }
        ,
        {
          name: "Kerala Saree with silver and blue kara",
          tag: "cotton",

          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1546397115/Saree/ekatvakeralasaree5.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544887188/Dhoti/dhothibrown.jpg",
          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546397115/Saree/ekatvakeralasaree5.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544887188/Dhoti/dhothibrown.jpg",
          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546397115/Saree/ekatvakeralasaree5.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothibrown.jpg",
          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546397115/Saree/ekatvakeralasaree5.jpg",
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544887188/Dhoti/dhothibrown.jpg",
          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546397115/Saree/ekatvakeralasaree5.jpg"
            // "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544887188/Dhoti/dhothibrown.jpg"
        },
        {
          name: "Kerala Saree with buddha print",
          tag: "cotton",
          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544886242/Saree/ekatvakeralasaree21.jpg",

          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544886242/Saree/ekatvakeralasaree21.jpg",

          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544886242/Saree/ekatvakeralasaree21.jpg",

          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544886242/Saree/ekatvakeralasaree21.jpg",

          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544886242/Saree/ekatvakeralasaree21.jpg"

        },
        {
          name: "Kerala Saree with green and orange kara",
          tag: "cotton",
          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544886244/Saree/ekatvakeralasaree20.jpg",

          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544886244/Saree/ekatvakeralasaree20.jpg",

          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544886244/Saree/ekatvakeralasaree20.jpg",

          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544886244/Saree/ekatvakeralasaree20.jpg",

          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544886244/Saree/ekatvakeralasaree20.jpg"

        },
        {
          name: "Kerala Saree with peacock print & blue kara",
          tag: "cotton",
          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1544886244/Saree/ekatvakeralasaree19.jpg",

          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1544886244/Saree/ekatvakeralasaree19.jpg",

          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544886244/Saree/ekatvakeralasaree19.jpg",

          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1544886244/Saree/ekatvakeralasaree19.jpg",

          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1544886244/Saree/ekatvakeralasaree19.jpg"

        },
        {
          name: "Kerala Saree with attached blouse",
          tag: "cotton",
          srcXs:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_379/v1546396979/Saree/ekatvakeralasaree18.jpg",

          srcSm:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546396979/Saree/ekatvakeralasaree18.jpg",

          srcMd:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546396979/Saree/ekatvakeralasaree18.jpg",

          srcLg:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546396979/Saree/ekatvakeralasaree18.jpg",

          srcXl:"https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546396979/Saree/ekatvakeralasaree18.jpg"

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
