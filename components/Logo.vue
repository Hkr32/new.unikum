<template>
  <img :src="logo" alt="Unikum" width="48" />
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      logo: require('~/assets/images/unikum-logo.png'),
    }
  },
}
</script>
