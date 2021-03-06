import CodeMirror from "codemirror";
import "./addons/simple";

CodeMirror.defineSimpleMode("pragma", {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    { regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string" },
    // You can match multiple tokens at once. Note that the captured
    // groups must span the whole string in this case
    // {
    //   regex: /(function)(\s+)([a-z$][\w$]*)/,
    //   token: ["keyword", null, "variable-2"],
    // },
    // Rules are matched in the order in which they appear, so there is
    // no ambiguity between this one and the one above
    {
      regex: /(?:imprimir|leer)\b/,
      token: "keyword",
    },
    {
      regex: /(?:numero|texto|boleano)\b/,
      token: "keyword",
    },
    {
      regex: /(?:si|sino|fin|entonces)\b/,
      token: "keyword",
    },
    {
      regex: /(?:mientras|hacer|ejecutar|haz)\b/,
      token: "keyword",
    },
    { regex: /verdadero|falso/, token: "atom" },
    {
      regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
      token: "number",
    },
    { regex: /#.*/, token: "comment" },
    // { regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3" },
    // A next property will cause the mode to move to a different state
    // { regex: /\/\*/, token: "comment", next: "comment" },
    { regex: /[-+\/*=<>]+/, token: "operator" },
    // indent and dedent properties guide auto indentation
    // { regex: /[\{\[\(]/, indent: true },
    // { regex: /[\}\]\)]/, dedent: true },
    { regex: /[a-z$][\w$]*/, token: "variable" },
  ],
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "#",
  },
});

export default CodeMirror;
