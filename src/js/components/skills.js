'use strict';

import Vue from 'vue';

Vue.component('skills', {
  template: `
    <div class="frame-wrapper skills">
      <div class="skill">
        <div class="skill-title">Хорошо знаю:</div>
        <ul>
          <li v-for="tech in techesGood">{{ tech }}</li>
        </ul>
      </div>
      <div class="skill">
        <div class="skill-title">Не очень хорошо знаю:</div>
        <ul>
          <li v-for="tech in techesBadly">{{ tech }}</li>
        </ul>
      </div>
    </div>
  `,

  data: () => {
    return {
      techesGood: [
        'HTML5',
        'CSS3',
        'JS (es6)',
        'VueJS',
        'ReactJS',
        'GulpJS',
        'Git',
      ],
      techesBadly: [
        'AngularJS',
        'React Native',
        'NodeJS',
        'Webpack',
        'Java',
        'Kotlin',
      ],
    }
  },
});