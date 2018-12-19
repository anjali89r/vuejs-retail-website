<template>
  <div class="about">
    <section>
      <v-parallax
        src="https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_1200/v1544832365/keralasaree.jpg"
        height="400"
      >
        <v-layout column justify-center class="white--text jumbo-head">
          <!-- <img :src="require(`@/assets/${img}`)" alt="Vuetify.js" height="200"> -->
          <h1 class="mb-2 display-1 text-xs-left">Kerala Handloom</h1>
          <div class="subheading mb-3 text-xs-left">Kerala Saree,Dhoti & Set Mundu...</div>
          <!-- <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"

            >
              Get Started
          </v-btn>-->
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-48">
        <v-flex xs12 sm4 class="my-3">
          <h2 class="headline horizontal-line">
            <strong>Explore Our Products</strong>
          </h2>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-sm>
            <v-layout row wrap align-center>
              <v-flex xs12 sm6 md4>
                <v-card hover raised>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="//res.cloudinary.com/ddglp4e0g/image/upload/v1541781402/ekatva/setmundu2.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div class="text-center card-content">
                      <h3>Sarees</h3>
                      <p>Sarees with kasavu border</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat>
                      <a class="orange-link" href="/products/set-saree">Learn more</a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-card hover raised>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="//res.cloudinary.com/ddu4bac2x/image/upload/c_scale,e_vibrance:64,h_200,w_268/v1544842490/homepage/setmundu.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div class="text-center card-content">
                      <h3>Set Mundu</h3>
                      <p>Authentic Kerala Mundu Set</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat>
                      <a class="orange-link" href="/products/set-mundu">Learn more</a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-card hover raised>
                  <v-img
                    class="white--text"
                    height="200px"
                    aspect-ratio="1"
                    src="https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,h_200,w_268/v1544839633/homepage/ekatvadhothi.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div class="text-center card-content">
                      <h3>Dhoti</h3>
                      <p>Pure cotton handloom Mundu</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat>
                      <a class="orange-link" href="/products/dhoti">Learn more</a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-card hover raised>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="//res.cloudinary.com/ddu4bac2x/image/upload/c_scale,e_vibrance:64,h_200,w_268/v1544842490/homepage/setmundu.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div class="text-center card-content">
                      <h3>Salwar</h3>
                      <p>Authentic Kerala Mundu Set</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat>
                      <a class="orange-link" href="/products/set-mundu">Learn more</a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax
        src="https://res.cloudinary.com/ddu4bac2x/image/upload/c_scale,w_1136/v1544825279/homepage/ekatvacollections.jpg"
        height="400"
      >
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-3 text-xs-center display-1"
          >Our wide range of clothing is available in retail and wholesale across India.</div>Contact Us to know more
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
                <p>
                  Ekatva Collections brings to you a unique selection of traditional
                  <strong>Kerala handloom and ethnic products</strong> to our patrons. Kerala traditional wear has always had a special place in the hearts of fashion conscious Indian women and men.
                </p>

                <p>
                  Our weavers design the most elegant clothes with an emphasis on the texture, thread and weave. Ekatva products are weaved from the traditional cotton weaver's
                  <strong>Kuthampully</strong> village located in Thiruvilwamala Grama Panchayat of Thrissur district of Kerala. Traditional handloom is part and parcel of the village life in Kuthampully in Thrissur district. The forefathers of Kuthampully came from Mysore about 500 years ago, to weave clothes for the erstwhile dynasty of Cochin and they never returned to their native place. They followed the traditional path in the early days and the different kinds of attires they created, like the kasavu double dhoti, veshti and set mundu became popular. Later on, embroidery techniques were deftly applied on traditional Kuthampully sarees to produce designer ones. We design designers saree also as per request which is unique to the occasion and with all contemporary and modern style.
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
                <p>Kuthampully is a traditional cotton weaver's village located on the banks of the river Bharathapuzha in the Thrissur district of Kerala. In 1972, Kuthampully Handloom Industrial Cooperative Society was registered with 102 members. The tradition of Kuthampully handloom was started many years ago by a few weavers (Devengas) from Mysore who were asked to weave dresses for the Maharaja of Cochin. These weavers were the Devengas who are typically the South Indian weaver community. Now it has 814 members with own building in Kuthampully. In September 2011, the Kuthampully Saree got exclusive Intellectual Property rights through Geographical indication Act.</p>
                <p>At present, there are about 800 families who are still engaged in the weaving process of Kuthampully handloom. They are gentle, warm and quiet and are catering to Malayali's all around the world. Every house has its own handloom machine. The Kuthampully sarees is the traditional dress of Kerala for many years now. The sarees are different from the regular sarees because of the golden embroidery. The texture of the saree depends on the type of thread, thickness and style of weaving. The Kuthuampully village is well known for its Kasavu sarees, mundu, set sarees and dhotis. The products are known for its quality, durability and simplicity.</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      img:
        "https://res.cloudinary.com/ddu4bac2x/image/upload/v1544825279/homepage/ekatvacollections.jpg"
    };
  }
};
</script>
<style scoped>
.jumbo-head h1,
.jumbo-head .subheading {
  letter-spacing: 7px !important;
  margin-left: 75px;
  font-weight: 800;
  /* font-style: italic; */
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

.theme--light.v-card {
  background-color: #635f540a;
}
.card-content h3,
.card-content p {
  letter-spacing: 3px;
}
.card-content p {
  margin-bottom: 0px;
}
.my-48 {
  margin-top: 48px;
}
</style>
