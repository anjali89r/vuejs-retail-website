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
          </v-flex>-->
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import axios from 'axios'
export default {
  name: "dhoti",
  head: {
    title: {
      inner: 'Buy Dhoti, Mundu and Kids Dhoti',
      separator: '|',
      complement: 'Buy Kerala Dhoti Online'
    },
      link: [
          { rel: 'canonical', href: 'https://ekatvacollections.com/products/dhoti', id: 'canonical' },
    ],
    meta: [
       { name: 'description', content: `Buy Dhoti, Mundu and kid's Dhoti from Ekatva. We are a wholesale merchant selling traditional kerala saree, dhoti and set mundu for discounted rates`,id: 'desc' },
        { name: 'twitter:title', content: 'Buy Dhoti, Mundu and Kids Dhoti | Buy Kerala Dhoti Online' },
        { n: 'twitter:description', c: 'Buy Dhoti, Mundu and kids Dhoti from Ekatva. We are a wholesale merchant selling traditional kerala saree, dhoti and set mundu for discounted rates'},
        { property: 'og:title', content: 'Buy Dhoti, Mundu and Kids Dhoti | Buy Kerala Dhoti Online' },
    ]
  },
  components: {
    VueGallerySlideshow
  },
  created() {

      axios.get('https://res.cloudinary.com/ddu4bac2x/image/list/dhothi.json')
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
          text: "Dhoti",
          disabled: true,
          href: "/products/dhoti"
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
.image {
  width: 250px;
  height: 250px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>
