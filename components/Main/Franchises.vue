<template>
  <section>
    <b-container fluid="xl" class="mt-2">
      <h2 class="text-center py-2 h3">Что такое франшизы Уник-Ум?</h2>
      <hr class="w-50" />
      <p class="text-center">
        Мы создали для вас удобный, современный бизнес с минимальным входом. С
        нашими франшизами вы сможете быть в тренде и зарабатывать даже в
        небольшом городе.
      </p>
      <b-card-group deck>
        <b-card v-for="(franchise, index) in franchises" :key="index">
          <b-card-body class="text-center">
            <b-icon :icon="franchise.icon" font-scale="5"></b-icon>
            <b-card-title>{{ franchise.title }}</b-card-title>
            <b-card-sub-title>{{ franchise.description }}</b-card-sub-title>
            <b-button
              block
              variant="outline-info"
              :to="franchise.url"
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
  name: 'Franchises',
  data() {
    return {}
  },
  computed: {
    franchises() {
      return this.$store.state.franchises.franchises
    },
  },
  methods: {},
}
</script>
