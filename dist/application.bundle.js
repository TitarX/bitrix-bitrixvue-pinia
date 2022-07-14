(function (exports,ui_vue3,ui_vue3_pinia) {
    'use strict';

    var statusStore = ui_vue3_pinia.defineStore('status', {
      state: function state() {
        return {
          lastAction: 'None'
        };
      },
      actions: {
        setAction: function setAction(action) {
          this.lastAction = action.toString();
        }
      }
    });

    var counterStore = ui_vue3_pinia.defineStore('counter', {
      state: function state() {
        return {
          counter: 0
        };
      },
      getters: {
        "double": function double() {
          return this.counter * 2;
        }
      },
      actions: {
        increaseCounter: function increaseCounter() {
          this.counter++;
          statusStore().setAction('Plus');
        },
        decreaseCounter: function decreaseCounter() {
          this.counter--;
          statusStore().setAction('Minus');
        },
        resetCounter: function resetCounter() {
          this.counter = 0;
          statusStore.setAction('Reset');
        }
      }
    });

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
    var Application = {
      computed: _objectSpread(_objectSpread({}, ui_vue3_pinia.mapState(counterStore, ['counter', 'double'])), {}, {
        lastAction: function lastAction() {
          return statusStore().lastAction;
        }
      }),
      methods: _objectSpread({}, ui_vue3_pinia.mapActions(counterStore, ['increaseCounter', 'decreaseCounter', 'resetCounter'])),
      // language=Vue
      template: "\n\t\t<div class=\"demo-header\">{{$Bitrix.Loc.getMessage('DEMO_PINIA_TITLE')}}</div>\n\t\t<div>\n\t\t\t<div>{{ $Bitrix.Loc.getMessage('DEMO_PINIA_COUNTER', {'#COUNTER#': this.counter, '#DOUBLE#': this.double}) }}</div> \n\t\t\t<div>{{ $Bitrix.Loc.getMessage('DEMO_PINIA_LAST_ACTION', {'#COUNTER#': this.lastAction}) }}</div> \n\t\t\t<div>\n\t\t\t\t<button @click=\"increaseCounter\">+</button>\n\t\t\t\t<button @click=\"decreaseCounter\">-</button>\n\t\t\t</div>\n\t\t</div>\n\t"
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

    var _store = /*#__PURE__*/new WeakMap();

    var _rootNode = /*#__PURE__*/new WeakMap();

    var _application = /*#__PURE__*/new WeakMap();

    var PiniaDemo = /*#__PURE__*/function () {
      function PiniaDemo(rootNode) {
        babelHelpers.classCallCheck(this, PiniaDemo);

        _classPrivateFieldInitSpec(this, _store, {
          writable: true,
          value: void 0
        });

        _classPrivateFieldInitSpec(this, _rootNode, {
          writable: true,
          value: void 0
        });

        _classPrivateFieldInitSpec(this, _application, {
          writable: true,
          value: void 0
        });

        babelHelpers.classPrivateFieldSet(this, _store, ui_vue3_pinia.createPinia());
        babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      }

      babelHelpers.createClass(PiniaDemo, [{
        key: "start",
        value: function start() {
          babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
            name: 'Pinia Application',
            components: {
              Application: Application
            },
            template: '<Application/>'
          }));
          babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
          babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
        }
      }, {
        key: "initStorageBeforeStartApplication",
        value: function initStorageBeforeStartApplication() {
          ui_vue3_pinia.setActivePinia(babelHelpers.classPrivateFieldGet(this, _store));
        }
      }, {
        key: "getCounterStore",
        value: function getCounterStore() {
          return counterStore;
        }
      }]);
      return PiniaDemo;
    }();

    exports.PiniaDemo = PiniaDemo;

}((this.BX = this.BX || {}),BX.Vue3,BX.Vue3.Pinia));
//# sourceMappingURL=application.bundle.js.map
