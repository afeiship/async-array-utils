"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var asyncMap = exports.asyncMap = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(inArray, inCallback) {
    var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, index, item;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = inArray.entries()[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 16;
              break;
            }

            _step$value = _slicedToArray(_step.value, 2), index = _step$value[0], item = _step$value[1];
            _context.t0 = result;
            _context.next = 11;
            return inCallback(item, index);

          case 11:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 13:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t2 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 22:
            _context.prev = 22;
            _context.prev = 23;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 25:
            _context.prev = 25;

            if (!_didIteratorError) {
              _context.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context.finish(25);

          case 29:
            return _context.finish(22);

          case 30:
            return _context.abrupt("return", result);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 18, 22, 30], [23,, 25, 29]]);
  }));

  return function asyncMap(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var asyncEach = exports.asyncEach = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(inArray, inCallback) {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, index, item;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 3;
            _iterator2 = inArray.entries()[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 12;
              break;
            }

            _step2$value = _slicedToArray(_step2.value, 2), index = _step2$value[0], item = _step2$value[1];
            _context2.next = 9;
            return inCallback(item, index);

          case 9:
            _iteratorNormalCompletion2 = true;
            _context2.next = 5;
            break;

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 18:
            _context2.prev = 18;
            _context2.prev = 19;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 21:
            _context2.prev = 21;

            if (!_didIteratorError2) {
              _context2.next = 24;
              break;
            }

            throw _iteratorError2;

          case 24:
            return _context2.finish(21);

          case 25:
            return _context2.finish(18);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[3, 14, 18, 26], [19,, 21, 25]]);
  }));

  return function asyncEach(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var asyncFor = exports.asyncFor = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(inStart, inEnd, inCallback) {
    var array, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, index, item;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            array = arrayFromRange(inStart, inEnd);
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context3.prev = 4;
            _iterator3 = array.entries()[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context3.next = 13;
              break;
            }

            _step3$value = _slicedToArray(_step3.value, 2), index = _step3$value[0], item = _step3$value[1];
            _context3.next = 10;
            return inCallback(item, index);

          case 10:
            _iteratorNormalCompletion3 = true;
            _context3.next = 6;
            break;

          case 13:
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](4);
            _didIteratorError3 = true;
            _iteratorError3 = _context3.t0;

          case 19:
            _context3.prev = 19;
            _context3.prev = 20;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 22:
            _context3.prev = 22;

            if (!_didIteratorError3) {
              _context3.next = 25;
              break;
            }

            throw _iteratorError3;

          case 25:
            return _context3.finish(22);

          case 26:
            return _context3.finish(19);

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[4, 15, 19, 27], [20,, 22, 26]]);
  }));

  return function asyncFor(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

function arrayFromRange(inStart, inEnd) {
  var result = [];
  for (var i = inStart; i <= inEnd; i++) {
    result.push(i);
  }
  return result;
}