define(['vue', './components/about', './components/works', './components/skills'], function (_vue, _about, _works, _skills) {
  'use strict';

  var _vue2 = _interopRequireDefault(_vue);

  var _about2 = _interopRequireDefault(_about);

  var _works2 = _interopRequireDefault(_works);

  var _skills2 = _interopRequireDefault(_skills);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  new _vue2.default({
    el: '#app',
    template: '\n    <div class="body-wrapper">\n      <header>\n        <i class="material-icons burger-menu" @click="show.menu = !show.menu">menu</i>\n      </header>\n      <main>\n        <div class="frame-block">\n          <transition name="fade" mode="out-in">\n            <about v-if="frame === \'about\'" key="about"></about>\n            <works v-if="frame === \'works\'" key="works"></works>\n            <skills v-if="frame === \'skills\'" key="works"></skills>\n          </transition>\n        </div>\n        <nav class="sidebar" :class="show.menu ? \'visible\' : \'\'">\n          <ul class="lists-block">\n            <li class="list"\n              :class="frame === tab.name ? \'active\' : \'\'"\n              v-for="(tab, index) in tabs"\n              @click="frame = tab.name; show.menu = false"\n              :key="index"\n              >\n              {{ tab.text }}\n            </li>\n          </ul>\n        </nav>\n      </main>\n      <footer>\n        <div class="lists-block contacts">\n          <a class="list contact-email" href="mailto: konstantin.yakovlev.8888@gmail.com">\n            \u041C\u043E\u0439 email\n          </a>\n          <!-- <a class="github" href="https://github.com/Konformist"> -->\n          <!-- My GitHub Repo -->\n          <!-- </a> -->\n        </div>\n      </footer>\n    </div>\n  ',

    data: {
      tabs: [{
        name: 'about',
        text: 'Обо мне'
      }, {
        name: 'works',
        text: 'Портфолио'
      }, {
        name: 'skills',
        text: 'Навыки'
      }],
      frame: 'about',
      show: {
        menu: false
      }
    }
  });
});