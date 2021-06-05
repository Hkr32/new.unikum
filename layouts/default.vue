<template>
  <div>
    <TopBar />
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import TopBar from '~/components/TopBar'
import NavBar from '~/components/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    TopBar,
    NavBar,
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
