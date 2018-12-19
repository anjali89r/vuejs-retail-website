<template>
<v-container fluid>

   <v-layout  row wrap>
      <v-flex xs12 class="text-center">
      <h1>CONTACT</h1>
      <hr>
      <p style="font-weight: bold;"><em>We would love to be a part of you !</em></p>
   </v-flex>
   </v-layout>
<v-layout row wrap>
   <v-flex xs12 md6 offset-md1 class="pad-sec">
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      solo
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      solo
    ></v-text-field>

        <v-textarea
          solo
          name="input-7-4"
          label="Your message"
          value=""
          full-width
        ></v-textarea>



    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
   </v-flex>
   <v-flex xs12 md5 class="pad-sec">
      <v-layout row>
         <v-flex xs1>
   <v-icon>place</v-icon>
</v-flex>
<v-flex xs6>
   <span>Ekatva, Kausthubham, IV st, Harinagar</span>
</v-flex>

      </v-layout>
<v-layout row wrap class="mt2">
   <v-flex xs1>
   <v-icon>local_phone</v-icon>
</v-flex>
<v-flex xs6>
   <span>+91 9447635674</span>
</v-flex>
</v-layout>
<v-layout row wrap class="mt2">
   <v-flex xs1>
   <v-icon>local_post_office</v-icon>
</v-flex>
<v-flex xs6>
   <span>eka@gmail.com</span>
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
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
.pad-sec{
   padding: 50px;
}
</style>

