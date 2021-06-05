<template>
  <section>
    <b-container fluid="xl" class="mt-2">
      <h2 class="text-center py-2 h2">
        Что такое Образовательная платформа Уник-Ум skills?
      </h2>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body title="Это онлайн курсы в которых есть:">
              <b-card-text>
                <b-list-group flush>
                  <b-list-group-item
                    class="
                      d-flex
                      justify-content-start
                      align-items-center
                      border-0
                      mb-4
                    "
                  >
                    <b-icon
                      icon="patch-check"
                      font-scale="2"
                      class="text-primary"
                    ></b-icon>
                    <span class="ml-2">удобный интерфейс</span>
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      justify-content-start
                      align-items-center
                      border-0
                      mb-4
                    "
                  >
                    <b-icon
                      icon="patch-check"
                      font-scale="2"
                      class="text-primary"
                    ></b-icon>
                    <span class="ml-2">
                      индивидуальными траекториями развития
                    </span>
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      justify-content-start
                      align-items-center
                      border-0
                      mb-4
                    "
                  >
                    <b-icon
                      icon="patch-check"
                      font-scale="2"
                      class="text-primary"
                    ></b-icon>
                    <span class="ml-2">
                      оценка навыков и компетенций, которые приобретают ваши
                      ученики
                    </span>
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      justify-content-start
                      align-items-center
                      border-0
                      mb-4
                    "
                  >
                    <b-icon
                      icon="patch-check"
                      font-scale="2"
                      class="text-primary"
                    ></b-icon>
                    <span class="ml-2">
                      модераторы, поддерживающие вас в момент обучения
                    </span>
                  </b-list-group-item>
                </b-list-group>
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      avatar: require('~/assets/images/avatars/skuratova_130x130.jpg'),
      poster: require('~/assets/videos/main/game.png'),
    }
  },
  methods: {},
}
</script>
