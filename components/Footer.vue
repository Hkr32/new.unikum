<template>
  <footer class="pt-4">
    <b-container fluid="xl">
      <b-row>
        <b-col>
          <Logo />
          <b-link href="tel:88008880000">8-800-888-00-00</b-link>
        </b-col>
        <b-col>rezerv</b-col>
        <b-col>
          <h6>Игры</h6>
          <b-list-group flush>
            <b-list-group-item
              v-for="(game, index) in games"
              :key="index"
              :to="game.url"
            >
              {{ game.title }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <h6>Франшизы</h6>
          <b-list-group flush>
            <b-list-group-item
              v-for="(franchise, index) in franchises"
              :key="index"
              :to="franchise.url"
            >
              {{ franchise.title }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
    <div
      type="dark"
      variant="dark"
      class="text-center py-2 bg-secondary text-white-50"
    >
      © 2021 Уник-Ум Все права защищены
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'Footer',
  components: {
    Logo,
  },
  data() {
    return {}
  },
  computed: {
    games() {
      return this.$store.state.games.games
    },
    franchises() {
      return this.$store.state.franchises.franchises
    },
  },
}
</script>
