<template>
  <v-app>
    <div>
      <header>
        <h1>
          Charlotte Nicoli
        </h1>
        <v-img :src="IMAGE.CN" aspect-ratio="16:9" height="25vh"></v-img>
        <ul>
          <li>
            <v-img :src="IMAGE.CV" aspect-ratio="1" height="200"></v-img>
          </li>
          <li>
            <v-img :src="IMAGE.WORK" aspect-ratio="1" height="200"></v-img>
          </li>
          <li>
            <v-img :src="IMAGE.CONTACT" aspect-ratio="1" height="200"></v-img>
          </li>
        </ul>
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
      IMAGE
    }
  }
}
</script>
<style>
  h1{
    color: transparent;
    height: 5px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    width: 100px;
    margin: 0 0px;
    list-style-type: none;
  }
  a {
    color: #42b983;
  }
  img{
    padding: 10px;
  }
</style>
