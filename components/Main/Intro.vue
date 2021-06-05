<template>
  <b-container fluid="xl" class="mt-2">
    <h1 class="text-center py-2 h2">Трансформационные игры</h1>
    <b-card-group deck>
      <b-card>
        <b-card-body>
          <b-row>
            <b-col cols="12" md="4">
              <b-avatar :src="avatar" size="8rem"></b-avatar>
            </b-col>
            <b-col cols="12" md="8">
              <b-card-title> Скуратова Екатерина </b-card-title>
              <b-card-sub-title class="mb-2">
                автор игровых технологий Уник-Ум
              </b-card-sub-title>
              <b-card-sub-title class="mb-2">
                автор Игровые технологии и Игропедагогика
              </b-card-sub-title>
            </b-col>
          </b-row>
          <b-card-text>
            Настольные психологические игры мы производим с 2015 года. Каждая
            игра формирует мышление и нацелена на развитие человека. В стоимость
            игры входит онлайн обучение. Игры динамично развиваются как в
            частном, так и в бизнес секторах. <br />Вы можете стать ведущим игр,
            вы можете открыть клуб по развитию мышления на основе наших игр.
            Подробнее об этом смотрите в видео
          </b-card-text>
        </b-card-body>
        <b-button block variant="outline-primary">Скачать</b-button>
      </b-card>

      <b-card>
        <b-card-body>
          <b-card-text>
            <video width="100%" controls="controls" :poster="poster">
              <source
                src="~/assets/videos/main/game.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
              Элемент video не поддерживается вашим браузером.
              <a href="~/assets/videos/main/game.mp4">Скачайте видео</a>.
            </video>
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      avatar: require('~/assets/images/avatars/skuratova_130x130.jpg'),
      poster: require('~/assets/videos/main/game.png'),
    }
  },
  methods: {},
}
</script>
