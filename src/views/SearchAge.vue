<template>
  <div class="search-age">
    <v-container class="grey lighten-5">
      <v-row
        v-for="n in 1"
        :key="n"
        :class="n === 1 ? 'mb-6' : ''"
        no-gutters
      >
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <LinearSearch />
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <BinarySearch />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LinearSearch from '@/components/LinearSearch.vue';
import BinarySearch from '@/components/BinarySearch.vue';


export default {
  name: 'home',
  components: {
    HelloWorld,
    LinearSearch,
    BinarySearch,
  },
};
</script>

<style scoped>
</style>
