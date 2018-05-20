'use strict';

import Vue from 'vue';

Vue.component('works', {
  template: `
    <div class="frame-wrapper works">
      <div class="sites-block">
        <a class="site"
          v-for="(site, index) in sites"
          :href="site.link"
          :key="index">
          <div class="site-image" :style="addImageSrc(site.image)"></div>
          <div class="site-title">{{ site.name }}</div>
        </a>
      </div>
    </div>
  `,
  data: () => {
    return {
      sites: [
        {
          name: '"Тверской химико-технологический колледж"',
          link: 'https://thtk.1mcg.ru/',
          image: 'thtk.jpg',
        },
        {
          name: 'Бонсай',
          link: 'https://bonsai.asia/',
          image: 'bonsai.png',
        },
      ]
    }
  },
  methods: {
    addImageSrc(name) {
      return `background-image: url('images/sites/${name}');`;
    }
  }
});