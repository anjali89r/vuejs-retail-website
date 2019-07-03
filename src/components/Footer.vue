<template>
   <footer id="myFooter">
        <v-container>
            <v-layout row wrap>
                <v-flex sm4 class="myCols">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/manufacturing">Manufacturing</a></li>
                        <li><a target="_blank" href="https://www.amazon.in/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=ekatva-21&keywords=ekatva collections&index=aps&camp=3638&creative=24630&linkCode=ur2&linkId=8afafe302139f5384858f4e96090b958">Buy from Amazon</a></li>

                    </ul>
                </v-flex>
                <v-flex sm4 class="myCols">
                    <h5>Products</h5>
                    <ul>
                        <li><a href="/products/dhoti">Dhoti</a></li>
                        <li><a href="/products/set-mundu">Set Mundu</a></li>
                        <li><a href="/products/kerala-saree">Set Saree</a></li>

                    </ul>
                </v-flex>
                <v-flex sm4 class="myCols">
                    <h5>Contact Us</h5>
                    <ul>
                        <li>Ekatva Collections</li>
                        <li>Ottapalam,Kerala-679101</li>
                        <li><v-icon class="phone-style">local_post_office</v-icon> ekatvagms@gmail.com</li>
                        <li><v-icon class="phone-style">local_phone</v-icon>
                        <a href="tel:+918547775584">
                            <span> +91 8547775584</span></a></li>
                    </ul>

                    <!-- <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul> -->
                </v-flex>

            </v-layout>
        </v-container>
        <!-- <div class="social-networks">
             <v-btn icon>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
      </v-btn>
             <v-btn icon>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
      </v-btn>
            <v-btn icon>
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }" />
      </v-btn>
        </div> -->
        <div class="footer-copyright">
            <p>© 2019 Ekatva Collections </p>
        </div>
    </footer>
</template>
<script>
export default {
   name: 'myfooter'
}
</script>

<style scoped>
.phone-style{
    color: #fff;
}
#myFooter {
   margin-top: 20px;
	background-color: #000000;
	color:white;
}

#myFooter .footer-copyright{
	background-color: #000000;
	padding-top:3px;
	padding-bottom:3px;
	text-align: center;
}

#myFooter .footer-copyright p{
	margin:10px;
	color: #ccc;
}

#myFooter ul{
	list-style-type: none;
    padding-left: 0;
    line-height: 1.7;

}

#myFooter h5{
	font-size: 18px;
    color: white;
    font-weight: bold;
    margin-top: 30px;
}

#myFooter a, #myFooter li{
	color:#d2d1d1!important;
	text-decoration: none!important;
}

#myFooter a:hover, #myFooter a:focus, #myFooter li:hover{
	text-decoration: none!important;
	color:white!important;
}

/* #myFooter .myCols{
	text-align: center;
} */

#myFooter .social-networks{
	text-align: center;
	padding-top: 30px;
	padding-bottom: 38px;
}

#myFooter .social-networks a{
    font-size: 32px;
    margin-right: 5px;
    margin-left: 5px;
    color: #f9f9f9;
    padding: 10px;
    transition: 0.2s;
}

#myFooter .social-networks a:hover{
	text-decoration: none;

}

#myFooter .facebook:hover{
	color:#0077e2;
}

#myFooter .google:hover{
	color:#ef1a1a;
}

#myFooter .twitter:hover{
	color: #00aced;
}

@media screen and (max-width: 767px){
	#myFooter {
		text-align: center;
	}
}

.v-icon{
    font-size: 18px!important;
}
</style>

