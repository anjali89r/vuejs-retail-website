<template>
  <div>
    <section>
      <v-container>
        <v-layout row wrap class="product-crumbs">
          <v-flex xs12>
            <h1>Buy Khadi Kurta for Men from Ekatva</h1>
            <v-breadcrumbs :items="crumbs" divider=">"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-flex>

          <v-layout class="mt-30">
            <v-flex class="font-custom">
              <p>Ekatva brings unique Khadi clothes online which are a century-old cloth creating technique with its origins in India. Khadi Kurta for Men are woven from cotton and may also include silk, or wool, which are all spun into yarn on a spinning wheel called a charkha. It is a versatile fabric, cool in summer and warm in winter. Ekatva sells Khadi short Kurtas and long kurtas through retail and wholesale. These Khadi Kurtas are also available online from <a href="https://www.amazon.in/Ekatva-Mens-Khadi-Kurta-Blue/dp/B07Y1BZPCL">Amazon</a> or contact through Whatsapp to buy.</p>
              <p>Ekatva kurta, whether long or short, goes well with a dhoti or denim jeans and is an Indian traditional garment. Khadi Cotton Kurtas gives an exceptional look to the wearer and provide perfect wear for all weather conditions. We provide men's kurta available in long and short variations in a wide range of colours and styles. </p>
              <p><a href="https://www.myntra.com/khadi-men">Khadi kurta</a> has a mandarin collar, button placket, long sleeves, and regular weave type. These kurtas are a great way to show off your style paired with jeans and dhotis. </p>

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
              <strong>Khadi kurta Online</strong>
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
            Contact Us through WhatsApp or call to get price & order online.
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
  name: "khadikurta",
  head: {
    title: {
      inner: 'Khadi Kurta for Men',
      separator: '|',
      complement: 'Buy Khadi Clothings for Men'
    },
      link: [
          { rel: 'canonical', href: 'https://ekatvacollections.com/products/khadi-kurta-for-men', id: 'canonical' },
    ],
    meta: [
       { name: 'description', content: `Discover and buy a wide variety of khadi kurta for men online from by Ekatva.Enjoy Free Shipping in India`,id: 'desc' },
        { name: 'twitter:title', content: 'Khadi Kurta for Men | Buy Khadi Clothings for Men' },
        { n: 'twitter:description', c: 'Discover and buy a wide variety of khadi kurta for men online from by Ekatva.Enjoy Free Shipping in India'},
        { property: 'og:title', content: 'Khadi Kurta for Men | Buy Khadi Clothings for Men' },
    ]
  },
  components: {
    VueGallerySlideshow
  },
  created() {

      axios.get('https://res.cloudinary.com/ddu4bac2x/image/list/khadikurta.json')
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
          text: "Khadi Kurta",
          disabled: true,
          href: "/products/khadi-kurta-for-men"
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
