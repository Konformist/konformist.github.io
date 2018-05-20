define(['vue'], function (_vue) {
  'use strict';

  var _vue2 = _interopRequireDefault(_vue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _vue2.default.component('about', {
    template: '\n    <div class="frame-wrapper about">\n      <div class="about-image" style="background-image: \'{{ photo }}\';"></div>\n      <div class="about-info">\n        {{ info }}\n      </div>\n    </div>\n  ',

    data: function data() {
      return {
        photo: '',
        info: '\n        \u0417\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 Frontend\'\u0430 \u0441\u0430\u0439\u0442\u043E\u0432.\n        \u0423\u0432\u043B\u0435\u043A\u0430\u044E\u0441\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439.\n        \u0417\u043D\u0430\u043A\u043E\u043C \u0441 Unix \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 (FreeBSD, Linux-\u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u044B).\n      '
      };
    }
  });
});