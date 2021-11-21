"use strict";

exports.__esModule = true;
exports.importEqualsTransformer = importEqualsTransformer;
exports.legacyModules = legacyModules;

var ts = _interopRequireWildcard(require("typescript"));

var _ast = require("./ast");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function updatePos(node) {
  // @ts-expect-error todo: modifying "readonly" property
  node.pos = 1; // @ts-expect-error todo: modifying "readonly" property

  node.end = 2;
  return node;
}

function importEqualsTransformer
/*opts?: Opts*/
() {
  function visitor(ctx) {
    const visitor = node => {
      if (ts.isImportEqualsDeclaration(node)) {
        if (node.moduleReference.kind === ts.SyntaxKind.ExternalModuleReference) {
          const importClause = ts.createImportClause(undefined, ts.createNamespaceImport(ts.createIdentifier(node.name.text)));
          const moduleSpecifier = ts.createLiteral( // @ts-expect-error todo(flow->ts)
          node.moduleReference.expression.text);
          const importNode = updatePos( //$todo Flow has problems when switching variables instead of literals
          ts.createImportDeclaration(undefined, undefined, //$todo Flow has problems when switching variables instead of literals
          updatePos(importClause), //$todo Flow has problems when switching variables instead of literals
          updatePos(moduleSpecifier)));
          return importNode;
        } else if (node.moduleReference.kind === ts.SyntaxKind.QualifiedName) {
          const varNode = updatePos( //$todo Flow has problems when switching variables instead of literals
          ts.createVariableStatement(node.modifiers, [ts.createVariableDeclaration(node.name, //$todo Flow has problems when switching variables instead of literals
          ts.createTypeQueryNode(node.moduleReference), undefined)]));
          return varNode;
        }
      }

      return ts.visitEachChild(node, visitor, ctx);
    };

    return visitor;
  }

  return ctx => {
    return sf => ts.visitNode(sf, visitor(ctx));
  };
}

function legacyModules() {
  function visitor(ctx) {
    const visitor = node => {
      (0, _ast.stripDetailsFromTree)(node);

      if (ts.isModuleDeclaration(node)) {
        if (node.name.kind === ts.SyntaxKind.Identifier) {
          // @ts-expect-error todo: modifying "readonly" property
          node.flags |= ts.NodeFlags.Namespace;
        }

        visitor(node.body);
        return node;
      }

      return ts.visitEachChild(node, visitor, ctx);
    };

    return visitor;
  }

  return ctx => {
    return sf => ts.visitNode(sf, visitor(ctx));
  };
}