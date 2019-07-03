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
                Ekatva provides a wide range of authentic Kuthampully handloom products like Kerala Saree, Dhoti, Set Mundu and Kasavu Salwar Material. Our designers work with weavers to manufacture most elegant material with an emphasis on the texture, thread and weave of the saree. Our products are weaved at Kuthampully which is known as weaver's village. In 1972, Kuthampully Handloom Industrial Cooperative Society was registered with 102 members. The tradition of Kuthampully handloom was started many years ago by a few weavers (Devengas) from Mysore who were asked to weave dresses for the Maharaja of Cochin. These weavers were the Devengas who are typically the South Indian weaver community. Now it has 814 members with own building in Kuthampully. In September 2011, the Kuthampully Saree got exclusive Intellectual Property rights through Geographical indication Act.
              </p>

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
              <strong>Our Weavers</strong>
            </h2>
          </v-flex>

          <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :lazy=true
      :src="item.srcXs"
    ></v-carousel-item>
  </v-carousel>
        </v-layout>
      </div>
    </section>
 <!--duplicate section -->
      <section>
      <v-container>
        <v-layout row wrap class="product-crumbs">
          <v-flex xs12>
            <h1>Manufacturing</h1>
            <v-divider></v-divider>
          </v-flex>

          <v-layout class="mt-30">
            <v-flex class="font-custom">
              <p>
                Our weavers have incorporated modern weaving techniques to meet current trends and make designer clothing. We work with weavers to design designer sarees which are unique for each occasion. Our products are known for its quality, durability and simplicity.
              </p>

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
              <strong>Our Products</strong>
            </h2>
          </v-flex>

          <v-carousel>
    <v-carousel-item
      v-for="(item,i) in seconditems"
      :key="i"
      :lazy=true
      :src="item.srcXs"
    ></v-carousel-item>
  </v-carousel>
        </v-layout>
      </div>
    </section>
<!-- end of duplicate section -->
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
               <h4> <div class="headline custom-line">About Ekatva</div></h4>
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
//import { Carousel, Slide } from "vue-carousel";
export default {
  name: "manufacturing",
   head: {
    title: {
      inner: `Kuthampully Handlooms WholeSale Merchant`,
      separator: '|',
      complement: 'Ekatva',
    meta: [
       { name: 'description', content: `Ekatva produces Kuthampully Handlooms and is wholesale merchant selling traditional kerala saree, dhoti and set mundu.` }
    ]
  }},
  // components: {
  //   Carousel,
  //   Slide
  // },
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
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477871/weaving/Ekatva001.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477871/weaving/Ekatva001.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477871/weaving/Ekatva001.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477871/weaving/Ekatva001.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477871/weaving/Ekatva001.jpg"
        },
        {
          name: "Saffron Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477874/weaving/Ekatva002.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477874/weaving/Ekatva002.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477874/weaving/Ekatva002.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477874/weaving/Ekatva002.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477874/weaving/Ekatva002.jpg"
        },

        {
          name: "Silver Kasavu Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477873/weaving/Ekatva003.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477873/weaving/Ekatva003.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477873/weaving/Ekatva003.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477873/weaving/Ekatva003.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477873/weaving/Ekatva003.jpg"
        },

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477856/weaving/Ekatva004.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477856/weaving/Ekatva004.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477856/weaving/Ekatva004.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477856/weaving/Ekatva004.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477856/weaving/Ekatva004.jpg"
        },

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477856/weaving/Ekatva005.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477856/weaving/Ekatva005.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477856/weaving/Ekatva005.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477856/weaving/Ekatva005.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477856/weaving/Ekatva005.jpg"
        }
        ,

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477861/weaving/Ekatva009.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477861/weaving/Ekatva009.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477861/weaving/Ekatva009.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477861/weaving/Ekatva009.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477861/weaving/Ekatva009.jpg"
        },
        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477862/weaving/Ekatva010.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477862/weaving/Ekatva010.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477862/weaving/Ekatva010.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477862/weaving/Ekatva010.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477862/weaving/Ekatva010.jpg"
        },
        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477860/weaving/Ekatva011.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477860/weaving/Ekatva011.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477860/weaving/Ekatva011.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477860/weaving/Ekatva011.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477860/weaving/Ekatva011.jpg"
        },
        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_852/v1546477862/weaving/Ekatva012.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_344/v1546477862/weaving/Ekatva012.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477862/weaving/Ekatva012.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_256/v1546477862/weaving/Ekatva012.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_300,w_284/v1546477862/weaving/Ekatva012.jpg"
        }

      ],
      seconditems: [
        {
          name: "Golden Kasavu Dhoti",
          tag: "cotton",

          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477863/weaving/Ekatva014.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_344/v1546477863/weaving/Ekatva014.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477863/weaving/Ekatva014.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_256/v1546477863/weaving/Ekatva014.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477863/weaving/Ekatva014.jpg"
        },
        {
          name: "Saffron Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477867/weaving/Ekatva017.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477867/weaving/Ekatva017.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477867/weaving/Ekatva017.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477867/weaving/Ekatva017.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477867/weaving/Ekatva017.jpg"
        },

        {
          name: "Silver Kasavu Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477869/weaving/Ekatva018.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_344/v1546477869/weaving/Ekatva018.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477869/weaving/Ekatva018.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_256/v1546477869/weaving/Ekatva018.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477869/weaving/Ekatva018.jpg"
        },

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477868/weaving/Ekatva019.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_344/v1546477868/weaving/Ekatva019.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477868/weaving/Ekatva019.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_256/v1546477868/weaving/Ekatva019.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477868/weaving/Ekatva019.jpg"
        },

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477866/weaving/Ekatva016.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_344/v1546477866/weaving/Ekatva016.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477866/weaving/Ekatva016.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_256/v1546477866/weaving/Ekatva016.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477866/weaving/Ekatva016.jpg"
        }
        ,

        {
          name: "Brown Color Dhoti",
          tag: "cotton",
          srcXs:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_852/v1546477871/weaving/Ekatva020.jpg",
          srcSm:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_344/v1546477871/weaving/Ekatva020.jpg",
          srcMd:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477871/weaving/Ekatva020.jpg",
          srcLg:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_256/v1546477871/weaving/Ekatva020.jpg",
          srcXl:
            "https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_500,w_284/v1546477871/weaving/Ekatva020.jpg"
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
