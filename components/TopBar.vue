<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <div class="container">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="tel:88008880000">8-800-888-00-00</b-nav-item>
        </b-navbar-nav>

        <b-collapse is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://www.facebook.com/unikumigri">
              <b-icon icon="facebook"></b-icon>
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/unikum_skills/">
              <b-icon icon="instagram"></b-icon>
            </b-nav-item>
            <b-nav-item
              href="https://www.youtube.com/channel/UCv5NHquPzpP2Y4VHzUPtkbA"
            >
              <b-icon icon="youtube"></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
}
</script>
