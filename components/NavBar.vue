<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" :fixed="scroll">
      <div class="container">
        <b-navbar-brand href="/">
          <Logo />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Главная</b-nav-item>
            <b-nav-item-dropdown text="Игры" right>
              <b-dropdown-item
                v-for="(game, index) in games"
                :key="index"
                :to="game.url"
              >
                {{ game.title }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Франшизы" right>
              <b-dropdown-item href="#"> Игровые технологии </b-dropdown-item>
              <b-dropdown-item href="#">
                Школа изящных искусств
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Академия осознанных родителей
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'NavBar',
  components: {
    Logo,
  },
  props: {},
  data() {
    return {
      scroll: null,
    }
  },
  computed: {
    games() {
      return this.$store.state.games.games
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 56) {
        this.scroll = 'top'
      } else {
        this.scroll = null
      }
    },
  },
}
</script>
