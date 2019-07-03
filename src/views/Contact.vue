<template>
  <v-container>
    <v-layout row wrap class="product-crumbs">
      <v-flex xs12>
        <h1>Contact</h1>
        <v-breadcrumbs :items="crumbs" divider=">"></v-breadcrumbs>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="pad2">
      <v-flex xs12 md6>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" solo required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required solo></v-text-field>

          <v-textarea solo name="input-7-4" label="Your message" value full-width></v-textarea>

          <v-btn :disabled="!valid" @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12 md5 offset-md1 class="mt50">
        <v-layout row>
          <v-flex xs1>
            <v-icon color="red darken-2">place</v-icon>
          </v-flex>
          <v-flex xs6>
            <span>Ekatva Collections, Ottapalam,</span>
            <br/>
            <span>Kerala-679103</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt2">
          <v-flex xs1>
            <v-icon color="blue darken-2">local_phone</v-icon>
          </v-flex>
          <v-flex xs6>
            <a href="tel:+918547775584" class="hyperlink">
            <span>+91 8547775584</span>
            </a>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt2">
          <v-flex xs1>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" :style="{ color: 'green' }"/>
          </v-flex>
          <v-flex xs6>
            <a href="https://api.whatsapp.com/send?phone=918547775584" class="hyperlink"><span>+91 8547775584</span></a>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt2">
          <v-flex xs1>
            <v-icon color="teal darken-2">local_post_office</v-icon>
          </v-flex>
          <v-flex xs6>
            <a href="mailto:ekatvagms@gmail.com" class="hyperlink"><span>ekatvagms@gmail.com</span></a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import axios from 'axios'

export default {
  data: () => ({
    crumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Contact",
        disabled: true,
        href: "/contact"
      }
    ],
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.pad2 {
  padding-top: 40px;
}
@media (max-width: 959px) {
  .mt50 {
    margin-top: 50px;
  }
}
 .fa-whatsapp{
   font-size: 24px!important;
   color: rgba(0,0,0,0.54);
 }

</style>

