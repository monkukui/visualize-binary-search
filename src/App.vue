<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item link to="/search-age">
          <v-list-item-action>
            <v-icon>mdi-owl</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>年齢当てゲーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/lower-bound">
          <v-list-item-action>
            <v-icon>mdi-panda</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>配列検索</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="cyan"
      dark
    >
        <v-toolbar-title class="headline text-uppercase">
          <span>BINARY</span>
          <span class="font-weight-light">SEARCH</span>
        </v-toolbar-title>
      <v-spacer />

      <v-toolbar-title>メニュー</v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
      color="cyan"
      app
    >
      <v-spacer />

      <span class="white--text">&copy; monkukui 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'LayoutsDemosBaselineFlipped',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
