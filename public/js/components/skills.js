define(['vue'], function (_vue) {
  'use strict';

  var _vue2 = _interopRequireDefault(_vue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _vue2.default.component('skills', {
    template: '\n    <div class="frame-wrapper skills">\n      <div class="skill">\n        <div class="skill-title">\u0425\u043E\u0440\u043E\u0448\u043E \u0437\u043D\u0430\u044E:</div>\n        <ul>\n          <li v-for="tech in techesGood">{{ tech }}</li>\n        </ul>\n      </div>\n      <div class="skill">\n        <div class="skill-title">\u041D\u0435 \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0437\u043D\u0430\u044E:</div>\n        <ul>\n          <li v-for="tech in techesBadly">{{ tech }}</li>\n        </ul>\n      </div>\n    </div>\n  ',

    data: function data() {
      return {
        techesGood: ['HTML5', 'CSS3', 'JS (es6)', 'VueJS', 'ReactJS', 'GulpJS', 'Git'],
        techesBadly: ['AngularJS', 'React Native', 'NodeJS', 'Webpack', 'Java', 'Kotlin']
      };
    }
  });
});