export const state = () => ({
  config: {
    container: 'xl',
    width: 1920,
    height: 1080,
    interval: 5000,
    background: '#ababab',
    controls: true,
    indicators: true,
    fade: true,
    style: 'text-shadow: 1px 1px 2px #333',
  },
  slides: [
    {
      caption: 'Игры',
      textHtml:
        '<p>Тут любое предложение перед ссылкой.</p> <a class="btn btn-outline-primary" href="/games">Подробнее</a>',
      imgSrc: 'https://picsum.photos/1920/1080/?image=52',
    },
    {
      caption: 'Еще один слайд',
      text: 'Слайд с текстом любым для информации',
      imgSrc: 'https://picsum.photos/1920/1080/?image=53',
    },
    {
      caption: 'Франшизы',
      textHtml: '<a href="/franchises">Подробнее</a>',
      imgSrc: 'https://picsum.photos/1920/1080/?image=54',
    },
  ],
})
