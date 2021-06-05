<template>
  <b-container :fluid="config.container">
    <b-carousel
      id="carousel"
      v-model="current"
      :fade="config.fade"
      :interval="config.interval"
      :controls="config.controls"
      :indicators="config.indicators"
      :background="config.background"
      :img-width="config.width"
      :img-height="config.height"
      :style="config.style"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :caption="slide.caption"
        :text="slide.text"
        :text-html="slide.textHtml"
        :img-src="slide.imgSrc"
      ></b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          container: 'xl',
          width: 1920,
          height: 1080,
          interval: 5000,
          background: '#ababab',
          controls: true,
          indicators: true,
          fade: true,
          style: 'text-shadow: 1px 1px 2px #333',
        }
      },
    },
    slides: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      current: 0,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
