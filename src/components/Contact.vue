<template>
  <div>
    <b-container fluid>
    <b-row align-v="center">
      <b-col></b-col>
      <b-col>
        <b-row align-v="center">
        <b-col>
          <h2>Twitter</h2>
          <a v-bind:href="twitter"><img src="@/assets/twitter-brands.svg"></a>
        </b-col>
        <b-col>
           <h2>Github</h2>
           <a v-bind:href="github"><img src="@/assets/github-brands.svg"></a>
        </b-col>
        <b-col>
          <h2>Mail</h2>
          <a v-bind:href="email"><img src="@/assets/envelope-solid.svg"></a>
        </b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
    </b-container>


    
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      twitter: 'https://twitter.com/BahatiPhill',
      github: 'https://github.com/BahatiPhill',
      email: 'bahatiphill@pm.me',
    }
  }
}
</script>

<style scoped>
</style>
