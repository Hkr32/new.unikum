<template>
  <section>
    <b-container fluid="xl" class="mt-2">
      <h2 class="text-center py-2 h3">Узнать подробнее и купить игры</h2>
      <hr class="w-50" />
      <p class="text-center">
        Игры продаются в магазинах парнерах (ozon amazon wildberries)
      </p>
      <b-card-group columns>
        <b-card v-for="(game, index) in games" :key="index">
          <b-card-body class="text-center">
            <b-icon :icon="game.icon" font-scale="5"></b-icon>
            <b-card-title>{{ game.title }}</b-card-title>
            <b-card-sub-title>{{ game.description }}</b-card-sub-title>
            <b-button
              block
              variant="outline-primary"
              :to="game.url"
              class="mt-4"
            >
              Подробнее
            </b-button>
          </b-card-body>
        </b-card>
      </b-card-group>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Games',
  data() {
    return {}
  },
  computed: {
    games() {
      return this.$store.state.games.games
    },
  },
  methods: {},
}
</script>
