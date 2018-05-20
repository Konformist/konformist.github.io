'use strict';

import Vue from 'vue';

Vue.component('about', {
  template: `
    <div class="frame-wrapper about">
      <div class="about-image" style="background-image: '{{ photo }}';"></div>
      <div class="about-info">
        {{ info }}
      </div>
    </div>
  `,

  data: () => {
    return {
      photo: '',
      info: `
        Занимаюсь разработкой Frontend'а сайтов.
        Увлекаюсь мобильной разработкой.
        Знаком с Unix системами (FreeBSD, Linux-дистрибутивы).
      `,
    }
  },
});