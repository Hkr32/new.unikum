<template>
  <div>
    <Carousel :slides="slides" :config="config" />
    <Intro />
    <Games />
    <About />
    <Franchises />
    <Footer />
  </div>
</template>

<script>
import Carousel from '~/components/Carousel'
import Intro from '~/components/Main/Intro'
import Games from '~/components/Main/Games'
import About from '~/components/Main/About'
import Franchises from '~/components/Main/Franchises'
import Footer from '~/components/Footer'

export default {
  name: 'Main',
  components: {
    Carousel,
    Intro,
    Games,
    About,
    Franchises,
    Footer,
  },
  data() {
    return {}
  },
  computed: {
    config() {
      return this.$store.state.slides.main.config
    },
    slides() {
      return this.$store.state.slides.main.slides
    },
  },
}
</script>
