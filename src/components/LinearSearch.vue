<template>
  <div class="binary-search">
    <h1>線形探索</h1>
    <div v-if="!end">
      <h1>{{ lb }} 歳ですか??</h1>
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="2">
          <div class="my-2">
            <v-btn color="primary" @click="yes()">YES</v-btn>
          </div>
        </v-col>
        <v-col class="text-center" cols="12" sm="2">
          <div class="my-2">
            <v-btn color="primary" @click="no()">NO</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <h1>あなたの年齢は{{ lb }}ですね</h1>
      <v-btn color="primary" outlined @click="restart()">やり直す</v-btn>
    </div>

    <v-icon v-for="i of cnt" :key="i">mdi-fish</v-icon>

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
    this.cnt++;
    this.end = true;
  }
  private no(): void {
    this.cnt++;
    this.lb = this.lb + 1;
  }
  private restart(): void {
    this.lb = 0;
    this.ub = 100;
    this.cnt = 0;
    this.end = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
