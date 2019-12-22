<template>
  <div class="lower-bound">
    <v-container class="grey lighten-5">
      <v-row
        v-for="i in 2"
        :key="i"
        :class="n === 1 ? 'mb-6' : ''"
        no-gutters
      >
        <v-col
          v-for="k in 17"
          :key="k"
        >
          <v-card
            class="pa-2"
            outlined
            tile
            color="rgb(250, 250, 250)"
            v-if="i===1"
          >
            &nbsp; {{k - 1}}
          </v-card>
          <v-card
            class="pa-2"
            outlined
            tile
            v-else-if="k - 1 <= lb"
            color="#4DB6AC"
          >
            {{dat[k - 1]}}
          </v-card>
          <v-card
            class="pa-2"
            outlined
            tile
            color="#E57373"
            v-else-if="ub <= k - 1"
          >
            {{dat[k - 1]}}
          </v-card>
          <v-card
            class="pa-2"
            outlined
            tile
            v-else
          >
            {{dat[k - 1]}}
          </v-card>
        </v-col>
      </v-row>
      <br>
      <br>
      <v-card
        class="pa-2"
        outlined
        max-width="20%"
        v-if="x===-1"
        tile
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="input"
              required
            ></v-text-field>
            <v-btn color="primary" outlined @click="search">検索</v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        class="pa-2"
        outlined
        max-width="20%"
        v-else
        tile
      >
        <v-row>
          <v-list-item-title class="headline mb-1" style="margin: 4%">検索する数: {{ x }}</v-list-item-title>
          <v-btn v-if="ub - lb != 1" color="primary" outlined style="margin: 4%" @click="next">次へ</v-btn>

          <center>
            <span v-if="ub - lb == 1">
              <span v-if="dat[lb] == x">
                <v-icon style="margin-left: 50%">mdi-emoticon-happy</v-icon>
              </span>
              <span v-else>
                <v-icon style="margin-left: 50%">mdi-emoticon-sad</v-icon>
              </span>
            </span>
          </center>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LowerBound extends Vue {
  private dat: Array<number> = [
    0,
    1,
    3,
    4,
    5,
    6,
    7,
    10,
    11,
    15,
    22,
    22,
    22,
    24,
    50,
    58,
    100,
  ];

  private lb: number = 0;
  private ub: number = 16;
  private input: string = '';
  private x: number = -1;

  private search(): void {
    this.lb = 0;
    this.ub = 16;
    this.x = Number(this.input);
  }

  private next(): void {
    let mid = (this.ub + this.lb) / 2;
    if(this.dat[mid] <= this.x) this.lb = mid;
    else this.ub = mid;
  }
}
</script>

<style scoped>
</style>
