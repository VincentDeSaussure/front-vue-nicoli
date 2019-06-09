<template>
  <v-app>
    <div>
      <header>
          <v-layout row wrap>

            <v-flex xs6>
              <router-link tag="a" to="/">

              <h1>
                Charlotte Nicoli
              </h1>
              <v-img :src="IMAGE.CN" aspect-ratio="1" :height="imageHeight" position="center top" contain></v-img>
              </router-link>
            </v-flex>

            <v-flex xs2>
              <router-link tag="a" to="/cv">
              <v-img :src="IMAGE.CV" :height="imageHeight" contain></v-img>
              </router-link>
            </v-flex>

            <v-flex xs2>
              <router-link tag="a" to="/work">
              <v-img :src="IMAGE.WORK" :height="imageHeight" contain></v-img>
              </router-link>
            </v-flex>

            <v-flex xs2>
              <router-link tag="a" to="/contact">
              <v-img :src="IMAGE.CONTACT" :height="imageHeight" contain></v-img>
              </router-link>
            </v-flex>

          </v-layout>

      </header>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import IMAGE from "./models/imageSrc"
import URL from "./models/urlDeRedirection"
import FormulaireDuSeum from "./components/FormulaireDuSeum"


export default {
  name: 'App',
  data () {
    return {
      URL,
      IMAGE,
      imageHeight: "20vh"
    }
  }
}
</script>
<style>
  h1{
    opacity: 0;
    background: lightblue;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: #42b983;
  }
</style>
