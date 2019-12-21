<template>
  <div class="binary-search">
    <h1>二分探索</h1>
    <div v-if="!end">
      <h1>{{ Math.floor((ub + lb) / 2) }} 歳以上ですか??</h1>
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn small color="primary" @click="yes()">YES</v-btn>
          </div>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn small color="primary" @click="no()">NO</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <h1>あなたの年齢は{{ lb }}ですね</h1>
    </div>
    <v-icon v-for="i of cnt" :key="i">mdi-cat</v-icon>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BinarySearch extends Vue {
  private lb: number = 0;
  private ub: number = 100;
  private cnt: number = 0;
  private end: boolean = false;
  private yes(): void {
    this.lb = Math.floor((this.lb + this.ub) / 2);
    this.cnt++;
    if (this.ub - this.lb === 1) {
      this.end = true;
    }
  }
  private no(): void {
    this.ub = Math.floor((this.lb + this.ub) / 2);
    this.cnt++;
    if (this.ub - this.lb === 1) {
      this.end = true;
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
