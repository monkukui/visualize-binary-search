<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>年齢当てゲーム</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://twitter.com/monkukui2"
        target="_blank"
        text
      >
        <v-icon>mdi-emoticon-happy</v-icon>
        <span class="mr-2">monkukui</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
