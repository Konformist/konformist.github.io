define(['vue'], function (_vue) {
  'use strict';

  var _vue2 = _interopRequireDefault(_vue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _vue2.default.component('works', {
    template: '\n    <div class="frame-wrapper works">\n      <div class="sites-block">\n        <a class="site"\n          v-for="(site, index) in sites"\n          :href="site.link"\n          :key="index">\n          <div class="site-image" :style="addImageSrc(site.image)"></div>\n          <div class="site-title">{{ site.name }}</div>\n        </a>\n      </div>\n    </div>\n  ',
    data: function data() {
      return {
        sites: [{
          name: '"Тверской химико-технологический колледж"',
          link: 'https://thtk.1mcg.ru/',
          image: 'thtk.jpg'
        }, {
          name: 'Бонсай',
          link: 'https://bonsai.asia/',
          image: 'bonsai.png'
        }]
      };
    },
    methods: {
      addImageSrc: function addImageSrc(name) {
        return 'background-image: url(\'images/sites/' + name + '\');';
      }
    }
  });
});