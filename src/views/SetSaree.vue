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
              <p><a href="https://www.amazon.in/slp/kerala-sarees/7aa836xfac385kq">Kerala sarees</a> are offered in cotton and silk fabrics and is continuously evolving in today’s trend time with modern and contemporary style. Our sarees follow standard specifications of saree - 6.25m length and 48inches length. Our weavers bring traditional quality and modern concepts in the most attractive manner in the texture of ekatva sarees and we bring the latest Kerala Saree designs.Our Kerala Kasavu Saree designs are unique and modern in style with works like mural,embroidery and handprints on the saree.</p>
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
</v-layout>
      </div>
      <v-container align-center>
        <v-layout align-center justify-center>
        <v-flex>
          <img class="image" v-for="(image, i) in images" :key='i' :src="image" @click="onClick(i)">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        </v-flex>
      </v-layout>
      </v-container>




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

import VueGallerySlideshow from 'vue-gallery-slideshow'
import axios from 'axios'
export default {
  name: "setsaree",
  head: {
    title: {
      inner: `Kerala Kasavu Saree `,
      separator: '| ',
      complement: 'Kerala Saree Wholesale Merchant',
    meta: [
       { name: 'description', content: `Latest Kerala Saree designs, unique amd modern styles from Ekatva. We are a wholesale merchant selling traditional kerala saree, dhoti and set mundu for discounted rates.` }
    ]
  }},
  components: {
    VueGallerySlideshow
  },
  created() {

      axios.get('https://res.cloudinary.com/ddu4bac2x/image/list/keralasaree.json')
          .then(({ data }) => {
            //console.log(data.resources);
            //this.setState({ videos: res.data.resources});
            //this.test = res.data
            this.images = data.resources.map(item => {
              return `https://res.cloudinary.com/ddu4bac2x/image/upload/v${item.version}/${item.public_id}.${item.format}`
            })

    });


  },
  data() {
    return {
      img: "section.jpg",
      images: {},
   index: null,
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
      ]
    };
  },
  methods: {
    onClick(i) {
        this.index = i;
      }

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
/* .v-responsive {
  height: 300px !important;
} */
.image {
  width: 250px;
  height: 250px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>
