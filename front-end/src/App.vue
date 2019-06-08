<template>
  <v-app>
    <div>
      <header>
          <v-layout row wrap>

            <v-flex xs12>
              <h1>
                Charlotte Nicoli
              </h1>
              <v-img :src="IMAGE.CN" aspect-ratio="1" height="20vh" position="center top" contain></v-img>
            </v-flex>

            <v-container>
              <v-flex xs12 id="menu">
                <ul>
                  <v-layout align-start justify-center row fill-height>
                    <v-flex xs4>
                      <li>
                        <v-img :src="IMAGE.CV" :height="imageHeight" contain></v-img>
                      </li>
                    </v-flex>
                    <v-flex xs4>
                      <li>
                        <v-img :src="IMAGE.WORK" :height="imageHeight" contain></v-img>
                      </li>
                    </v-flex>
                    <v-flex xs4>
                      <li>
                        <v-img :src="IMAGE.CONTACT" :height="imageHeight" contain></v-img>
                      </li>
                    </v-flex>
                  </v-layout>
                </ul>
              </v-flex>
            </v-container>

          </v-layout>

      </header>
    </div>

    <v-content>
      <formulaire-du-seum></formulaire-du-seum>
    </v-content>
  </v-app>
</template>

<script>
import IMAGE from "./models/imageSrc"
import URL from "./models/urlDeRedirection"
import FormulaireDuSeum from "./components/FormulaireDuSeum"


export default {
  name: 'App',
  components: {
    FormulaireDuSeum
  },
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
  #menu{
    margin-top: -10vh;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: #42b983;
  }
</style>
