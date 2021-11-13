"use strict";

exports.__esModule = true;
exports.functions = exports.node = exports.common = exports.relationships = exports.declarations = exports.identifiers = exports.basics = void 0;

var basics = _interopRequireWildcard(require("./basics"));

exports.basics = basics;

var identifiers = _interopRequireWildcard(require("./identifiers"));

exports.identifiers = identifiers;

var declarations = _interopRequireWildcard(require("./declarations"));

exports.declarations = declarations;

var relationships = _interopRequireWildcard(require("./relationships"));

exports.relationships = relationships;

var common = _interopRequireWildcard(require("./common"));

exports.common = common;

var node = _interopRequireWildcard(require("./node"));

exports.node = node;

var functions = _interopRequireWildcard(require("./function"));

exports.functions = functions;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }