'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePicker = exports.default = undefined;

var _Chrome = require('./components/chrome/Chrome');

Object.defineProperty(exports, 'ChromePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chrome).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chrome2.default;