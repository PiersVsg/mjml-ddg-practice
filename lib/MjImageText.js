"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reverse = _interopRequireDefault(require("lodash/reverse"));

var _mjmlCore = require("mjml-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MjImageText = /*#__PURE__*/function (_BodyComponent) {
  _inherits(MjImageText, _BodyComponent);

  var _super = _createSuper(MjImageText);

  function MjImageText() {
    _classCallCheck(this, MjImageText);

    return _super.apply(this, arguments);
  }

  _createClass(MjImageText, [{
    key: "renderImage",

    /*
      We could obviously handle all the attributes accepted for Mj Section,
      Column, Image and Text, but let's keep it simple for this example.
    */
    value: function renderImage() {
      return "\n      <mj-column\n        ".concat(this.htmlAttributes({
        width: this.getAttribute('column-width'),
        'background-color': this.getAttribute('background-color')
      }), "\n      >\n        <mj-image\n          ").concat(this.htmlAttributes({
        padding: this.getAttribute('image-padding'),
        src: this.getAttribute('image-src'),
        width: this.getAttribute('image-width')
      }), "\n        >\n        </mj-image>\n    </mj-column>\n    ");
    }
  }, {
    key: "renderText",
    value: function renderText() {
      return "\n      <mj-column\n        ".concat(this.htmlAttributes({
        width: this.getAttribute('column-width'),
        'background-color': this.getAttribute('background-color')
      }), "\n      >\n        <mj-text\n          ").concat(this.htmlAttributes({
        color: this.getAttribute('color'),
        'font-size': this.getAttribute('font-size')
      }), "\n        >\n          ").concat(this.getContent(), "\n        </mj-text>\n      </mj-column>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var content = [this.renderText(), this.renderImage()];
      var orderedContent = this.getAttribute('image-position') === 'right' ? content : (0, _reverse["default"])(content);
      return this.renderMJML("\n\t\t\t<mj-section\n        ".concat(this.htmlAttributes({
        'background-color': this.getAttribute('background-color')
      }), "\n      >\n        ").concat(orderedContent, "\n\t\t\t</mj-section>\n\t\t"));
    }
  }]);

  return MjImageText;
}(_mjmlCore.BodyComponent);

exports["default"] = MjImageText;

_defineProperty(MjImageText, "endingTag", true);

_defineProperty(MjImageText, "dependencies", {
  'mj-image-text': [],
  'mj-body': ['mj-image-text'],
  'mj-wrapper': ['mj-image-text']
});

_defineProperty(MjImageText, "allowedAttributes", {
  'background-color': 'color',
  'image-position': 'enum(left,right)',
  'color': 'color',
  'font-size': 'unit(px)',
  'image-padding': 'unit(px){4}',
  'image-src': 'string',
  'image-width': 'unit(px,%)',
  'column-width': 'unit(px,%)'
});

_defineProperty(MjImageText, "defaultAttributes", {
  'background-color': null,
  'image-position': 'right',
  'color': 'white',
  'font-size': '10px',
  'image-padding': 0,
  'image-src': null,
  'image-width': null,
  'column-width': '50%'
});