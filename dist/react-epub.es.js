import gi, { useRef as Ht, useEffect as Kt, createContext as za, useContext as ja, useState as Pt, useMemo as ls, useReducer as Ma } from "react";
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function or(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ui = { exports: {} }, Dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Ua() {
  if (Cn)
    return Dr;
  Cn = 1;
  var n = gi, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, h) {
    var f, c = {}, w = null, m = null;
    h !== void 0 && (w = "" + h), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      r.call(u, f) && !s.hasOwnProperty(f) && (c[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: e, type: o, key: w, ref: m, props: c, _owner: i.current };
  }
  return Dr.Fragment = t, Dr.jsx = a, Dr.jsxs = a, Dr;
}
var Ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Wa() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    var n = gi, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), S = Symbol.iterator, N = "@@iterator";
    function p(d) {
      if (d === null || typeof d != "object")
        return null;
      var I = S && d[S] || d[N];
      return typeof I == "function" ? I : null;
    }
    var v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(d) {
      {
        for (var I = arguments.length, U = new Array(I > 1 ? I - 1 : 0), K = 1; K < I; K++)
          U[K - 1] = arguments[K];
        A("error", d, U);
      }
    }
    function A(d, I, U) {
      {
        var K = v.ReactDebugCurrentFrame, ce = K.getStackAddendum();
        ce !== "" && (I += "%s", U = U.concat([ce]));
        var ye = U.map(function(re) {
          return String(re);
        });
        ye.unshift("Warning: " + I), Function.prototype.apply.call(console[d], console, ye);
      }
    }
    var k = !1, b = !1, C = !1, T = !1, R = !1, z;
    z = Symbol.for("react.module.reference");
    function M(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === s || R || d === i || d === h || d === f || T || d === m || k || b || C || typeof d == "object" && d !== null && (d.$$typeof === w || d.$$typeof === c || d.$$typeof === a || d.$$typeof === o || d.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === z || d.getModuleId !== void 0));
    }
    function Y(d, I, U) {
      var K = d.displayName;
      if (K)
        return K;
      var ce = I.displayName || I.name || "";
      return ce !== "" ? U + "(" + ce + ")" : U;
    }
    function Z(d) {
      return d.displayName || "Context";
    }
    function te(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case o:
            var I = d;
            return Z(I) + ".Consumer";
          case a:
            var U = d;
            return Z(U._context) + ".Provider";
          case u:
            return Y(d, d.render, "ForwardRef");
          case c:
            var K = d.displayName || null;
            return K !== null ? K : te(d.type) || "Memo";
          case w: {
            var ce = d, ye = ce._payload, re = ce._init;
            try {
              return te(re(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, pe = 0, ve, de, fe, Se, je, Oe, be;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Ne() {
      {
        if (pe === 0) {
          ve = console.log, de = console.info, fe = console.warn, Se = console.error, je = console.group, Oe = console.groupCollapsed, be = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        pe++;
      }
    }
    function it() {
      {
        if (pe--, pe === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, d, {
              value: ve
            }),
            info: ge({}, d, {
              value: de
            }),
            warn: ge({}, d, {
              value: fe
            }),
            error: ge({}, d, {
              value: Se
            }),
            group: ge({}, d, {
              value: je
            }),
            groupCollapsed: ge({}, d, {
              value: Oe
            }),
            groupEnd: ge({}, d, {
              value: be
            })
          });
        }
        pe < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = v.ReactCurrentDispatcher, Ue;
    function De(d, I, U) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (ce) {
            var K = ce.stack.trim().match(/\n( *(at )?)/);
            Ue = K && K[1] || "";
          }
        return `
` + Ue + d;
      }
    }
    var Xe = !1, Me;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new Pe();
    }
    function qe(d, I) {
      if (!d || Xe)
        return "";
      {
        var U = Me.get(d);
        if (U !== void 0)
          return U;
      }
      var K;
      Xe = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = Ge.current, Ge.current = null, Ne();
      try {
        if (I) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (et) {
              K = et;
            }
            Reflect.construct(d, [], re);
          } else {
            try {
              re.call();
            } catch (et) {
              K = et;
            }
            d.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            K = et;
          }
          d();
        }
      } catch (et) {
        if (et && K && typeof et.stack == "string") {
          for (var se = et.stack.split(`
`), Ce = K.stack.split(`
`), Ee = se.length - 1, xe = Ce.length - 1; Ee >= 1 && xe >= 0 && se[Ee] !== Ce[xe]; )
            xe--;
          for (; Ee >= 1 && xe >= 0; Ee--, xe--)
            if (se[Ee] !== Ce[xe]) {
              if (Ee !== 1 || xe !== 1)
                do
                  if (Ee--, xe--, xe < 0 || se[Ee] !== Ce[xe]) {
                    var Ve = `
` + se[Ee].replace(" at new ", " at ");
                    return d.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", d.displayName)), typeof d == "function" && Me.set(d, Ve), Ve;
                  }
                while (Ee >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, Ge.current = ye, it(), Error.prepareStackTrace = ce;
      }
      var Ct = d ? d.displayName || d.name : "", Jt = Ct ? De(Ct) : "";
      return typeof d == "function" && Me.set(d, Jt), Jt;
    }
    function Ie(d, I, U) {
      return qe(d, !1);
    }
    function nt(d) {
      var I = d.prototype;
      return !!(I && I.isReactComponent);
    }
    function We(d, I, U) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return qe(d, nt(d));
      if (typeof d == "string")
        return De(d);
      switch (d) {
        case h:
          return De("Suspense");
        case f:
          return De("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            return Ie(d.render);
          case c:
            return We(d.type, I, U);
          case w: {
            var K = d, ce = K._payload, ye = K._init;
            try {
              return We(ye(ce), I, U);
            } catch {
            }
          }
        }
      return "";
    }
    var tt = Object.prototype.hasOwnProperty, Re = {}, Qe = v.ReactDebugCurrentFrame;
    function at(d) {
      if (d) {
        var I = d._owner, U = We(d.type, d._source, I ? I.type : null);
        Qe.setExtraStackFrame(U);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ht(d, I, U, K, ce) {
      {
        var ye = Function.call.bind(tt);
        for (var re in d)
          if (ye(d, re)) {
            var se = void 0;
            try {
              if (typeof d[re] != "function") {
                var Ce = Error((K || "React class") + ": " + U + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              se = d[re](I, re, K, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (at(ce), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", U, re, typeof se), at(null)), se instanceof Error && !(se.message in Re) && (Re[se.message] = !0, at(ce), y("Failed %s type: %s", U, se.message), at(null));
          }
      }
    }
    var ot = Array.isArray;
    function ze(d) {
      return ot(d);
    }
    function Ae(d) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, U = I && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return U;
      }
    }
    function dt(d) {
      try {
        return _t(d), !1;
      } catch {
        return !0;
      }
    }
    function _t(d) {
      return "" + d;
    }
    function gt(d) {
      if (dt(d))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(d)), _t(d);
    }
    var Ke = v.ReactCurrentOwner, Tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, ft, yt;
    yt = {};
    function Et(d) {
      if (tt.call(d, "ref")) {
        var I = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function rt(d) {
      if (tt.call(d, "key")) {
        var I = Object.getOwnPropertyDescriptor(d, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function pt(d, I) {
      if (typeof d.ref == "string" && Ke.current && I && Ke.current.stateNode !== I) {
        var U = te(Ke.current.type);
        yt[U] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(Ke.current.type), d.ref), yt[U] = !0);
      }
    }
    function Nt(d, I) {
      {
        var U = function() {
          mt || (mt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        U.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function x(d, I) {
      {
        var U = function() {
          ft || (ft = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        U.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var J = function(d, I, U, K, ce, ye, re) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: I,
        ref: U,
        props: re,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function ee(d, I, U, K, ce) {
      {
        var ye, re = {}, se = null, Ce = null;
        U !== void 0 && (gt(U), se = "" + U), rt(I) && (gt(I.key), se = "" + I.key), Et(I) && (Ce = I.ref, pt(I, ce));
        for (ye in I)
          tt.call(I, ye) && !Tt.hasOwnProperty(ye) && (re[ye] = I[ye]);
        if (d && d.defaultProps) {
          var Ee = d.defaultProps;
          for (ye in Ee)
            re[ye] === void 0 && (re[ye] = Ee[ye]);
        }
        if (se || Ce) {
          var xe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          se && Nt(re, xe), Ce && x(re, xe);
        }
        return J(d, se, Ce, ce, K, Ke.current, re);
      }
    }
    var ue = v.ReactCurrentOwner, B = v.ReactDebugCurrentFrame;
    function $(d) {
      if (d) {
        var I = d._owner, U = We(d.type, d._source, I ? I.type : null);
        B.setExtraStackFrame(U);
      } else
        B.setExtraStackFrame(null);
    }
    var g;
    g = !1;
    function X(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function _e() {
      {
        if (ue.current) {
          var d = te(ue.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function l(d) {
      {
        if (d !== void 0) {
          var I = d.fileName.replace(/^.*[\\\/]/, ""), U = d.lineNumber;
          return `

Check your code at ` + I + ":" + U + ".";
        }
        return "";
      }
    }
    var V = {};
    function H(d) {
      {
        var I = _e();
        if (!I) {
          var U = typeof d == "string" ? d : d.displayName || d.name;
          U && (I = `

Check the top-level render call using <` + U + ">.");
        }
        return I;
      }
    }
    function _(d, I) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var U = H(I);
        if (V[U])
          return;
        V[U] = !0;
        var K = "";
        d && d._owner && d._owner !== ue.current && (K = " It was passed a child from " + te(d._owner.type) + "."), $(d), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, K), $(null);
      }
    }
    function O(d, I) {
      {
        if (typeof d != "object")
          return;
        if (ze(d))
          for (var U = 0; U < d.length; U++) {
            var K = d[U];
            X(K) && _(K, I);
          }
        else if (X(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ce = p(d);
          if (typeof ce == "function" && ce !== d.entries)
            for (var ye = ce.call(d), re; !(re = ye.next()).done; )
              X(re.value) && _(re.value, I);
        }
      }
    }
    function q(d) {
      {
        var I = d.type;
        if (I == null || typeof I == "string")
          return;
        var U;
        if (typeof I == "function")
          U = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === c))
          U = I.propTypes;
        else
          return;
        if (U) {
          var K = te(I);
          ht(U, d.props, "prop", K, d);
        } else if (I.PropTypes !== void 0 && !g) {
          g = !0;
          var ce = te(I);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function me(d) {
      {
        for (var I = Object.keys(d.props), U = 0; U < I.length; U++) {
          var K = I[U];
          if (K !== "children" && K !== "key") {
            $(d), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), $(null);
            break;
          }
        }
        d.ref !== null && ($(d), y("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function oe(d, I, U, K, ce, ye) {
      {
        var re = M(d);
        if (!re) {
          var se = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = l(ce);
          Ce ? se += Ce : se += _e();
          var Ee;
          d === null ? Ee = "null" : ze(d) ? Ee = "array" : d !== void 0 && d.$$typeof === e ? (Ee = "<" + (te(d.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof d, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var xe = ee(d, I, U, ce, ye);
        if (xe == null)
          return xe;
        if (re) {
          var Ve = I.children;
          if (Ve !== void 0)
            if (K)
              if (ze(Ve)) {
                for (var Ct = 0; Ct < Ve.length; Ct++)
                  O(Ve[Ct], d);
                Object.freeze && Object.freeze(Ve);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              O(Ve, d);
        }
        return d === r ? me(xe) : q(xe), xe;
      }
    }
    function he(d, I, U) {
      return oe(d, I, U, !0);
    }
    function Te(d, I, U) {
      return oe(d, I, U, !1);
    }
    var xt = Te, Ye = he;
    Ar.Fragment = r, Ar.jsx = xt, Ar.jsxs = Ye;
  }()), Ar;
}
process.env.NODE_ENV === "production" ? Ui.exports = Ua() : Ui.exports = Wa();
var W = Ui.exports, Wi = { exports: {} }, hs = { exports: {} }, qa = void 0, fs = function(n) {
  return n !== qa && n !== null;
}, Va = fs, Ha = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, $a = function(n) {
  return Va(n) ? hasOwnProperty.call(Ha, typeof n) : !1;
}, Za = $a, Ga = function(n) {
  if (!Za(n))
    return !1;
  try {
    return n.constructor ? n.constructor.prototype === n : !1;
  } catch {
    return !1;
  }
}, Ya = Ga, Xa = function(n) {
  if (typeof n != "function" || !hasOwnProperty.call(n, "length"))
    return !1;
  try {
    if (typeof n.length != "number" || typeof n.call != "function" || typeof n.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Ya(n);
}, Ka = Xa, Ja = /^\s*class[\s{/}]/, Qa = Function.prototype.toString, eo = function(n) {
  return !(!Ka(n) || Ja.test(Qa.call(n)));
}, to = function() {
  var n = Object.assign, e;
  return typeof n != "function" ? !1 : (e = { foo: "raz" }, n(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
}, ki, An;
function ro() {
  return An || (An = 1, ki = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), ki;
}
var io = function() {
}, no = io(), Ji = function(n) {
  return n !== no && n !== null;
}, Ni, Sn;
function so() {
  if (Sn)
    return Ni;
  Sn = 1;
  var n = Ji, e = Object.keys;
  return Ni = function(t) {
    return e(n(t) ? Object(t) : t);
  }, Ni;
}
var Ri, Tn;
function ao() {
  return Tn || (Tn = 1, Ri = ro()() ? Object.keys : so()), Ri;
}
var Oi, kn;
function oo() {
  if (kn)
    return Oi;
  kn = 1;
  var n = Ji;
  return Oi = function(e) {
    if (!n(e))
      throw new TypeError("Cannot use null or undefined");
    return e;
  }, Oi;
}
var Ii, Nn;
function uo() {
  if (Nn)
    return Ii;
  Nn = 1;
  var n = ao(), e = oo(), t = Math.max;
  return Ii = function(r, i) {
    var s, a, o = t(arguments.length, 2), u;
    for (r = Object(e(r)), u = function(h) {
      try {
        r[h] = i[h];
      } catch (f) {
        s || (s = f);
      }
    }, a = 1; a < o; ++a)
      i = arguments[a], n(i).forEach(u);
    if (s !== void 0)
      throw s;
    return r;
  }, Ii;
}
var lo = to() ? Object.assign : uo(), ho = Ji, fo = Array.prototype.forEach, co = Object.create, po = function(n, e) {
  var t;
  for (t in n)
    e[t] = n[t];
}, vo = function(n) {
  var e = co(null);
  return fo.call(arguments, function(t) {
    ho(t) && po(Object(t), e);
  }), e;
}, Li = "razdwatrzy", go = function() {
  return typeof Li.contains != "function" ? !1 : Li.contains("dwa") === !0 && Li.contains("foo") === !1;
}, Bi, Rn;
function mo() {
  if (Rn)
    return Bi;
  Rn = 1;
  var n = String.prototype.indexOf;
  return Bi = function(e) {
    return n.call(this, e, arguments[1]) > -1;
  }, Bi;
}
var yo = go() ? String.prototype.contains : mo(), Jr = fs, On = eo, cs = lo, ds = vo, Ir = yo, bo = hs.exports = function(n, e) {
  var t, r, i, s, a;
  return arguments.length < 2 || typeof n != "string" ? (s = e, e = n, n = null) : s = arguments[2], Jr(n) ? (t = Ir.call(n, "c"), r = Ir.call(n, "e"), i = Ir.call(n, "w")) : (t = i = !0, r = !1), a = { value: e, configurable: t, enumerable: r, writable: i }, s ? cs(ds(s), a) : a;
};
bo.gs = function(n, e, t) {
  var r, i, s, a;
  return typeof n != "string" ? (s = t, t = e, e = n, n = null) : s = arguments[3], Jr(e) ? On(e) ? Jr(t) ? On(t) || (s = t, t = void 0) : t = void 0 : (s = e, e = t = void 0) : e = void 0, Jr(n) ? (r = Ir.call(n, "c"), i = Ir.call(n, "e")) : (r = !0, i = !1), a = { get: e, set: t, configurable: r, enumerable: i }, s ? cs(ds(s), a) : a;
};
var wo = hs.exports, _o = function(n) {
  if (typeof n != "function")
    throw new TypeError(n + " is not a function");
  return n;
};
(function(n, e) {
  var t = wo, r = _o, i = Function.prototype.apply, s = Function.prototype.call, a = Object.create, o = Object.defineProperty, u = Object.defineProperties, h = Object.prototype.hasOwnProperty, f = { configurable: !0, enumerable: !1, writable: !0 }, c, w, m, S, N, p, v;
  c = function(y, A) {
    var k;
    return r(A), h.call(this, "__ee__") ? k = this.__ee__ : (k = f.value = a(null), o(this, "__ee__", f), f.value = null), k[y] ? typeof k[y] == "object" ? k[y].push(A) : k[y] = [k[y], A] : k[y] = A, this;
  }, w = function(y, A) {
    var k, b;
    return r(A), b = this, c.call(this, y, k = function() {
      m.call(b, y, k), i.call(A, this, arguments);
    }), k.__eeOnceListener__ = A, this;
  }, m = function(y, A) {
    var k, b, C, T;
    if (r(A), !h.call(this, "__ee__"))
      return this;
    if (k = this.__ee__, !k[y])
      return this;
    if (b = k[y], typeof b == "object")
      for (T = 0; C = b[T]; ++T)
        (C === A || C.__eeOnceListener__ === A) && (b.length === 2 ? k[y] = b[T ? 0 : 1] : b.splice(T, 1));
    else
      (b === A || b.__eeOnceListener__ === A) && delete k[y];
    return this;
  }, S = function(y) {
    var A, k, b, C, T;
    if (h.call(this, "__ee__") && (C = this.__ee__[y], !!C))
      if (typeof C == "object") {
        for (k = arguments.length, T = new Array(k - 1), A = 1; A < k; ++A)
          T[A - 1] = arguments[A];
        for (C = C.slice(), A = 0; b = C[A]; ++A)
          i.call(b, this, T);
      } else
        switch (arguments.length) {
          case 1:
            s.call(C, this);
            break;
          case 2:
            s.call(C, this, arguments[1]);
            break;
          case 3:
            s.call(C, this, arguments[1], arguments[2]);
            break;
          default:
            for (k = arguments.length, T = new Array(k - 1), A = 1; A < k; ++A)
              T[A - 1] = arguments[A];
            i.call(C, this, T);
        }
  }, N = {
    on: c,
    once: w,
    off: m,
    emit: S
  }, p = {
    on: t(c),
    once: t(w),
    off: t(m),
    emit: t(S)
  }, v = u({}, p), n.exports = e = function(y) {
    return y == null ? a(v) : u(Object(y), p);
  }, e.methods = N;
})(Wi, Wi.exports);
var Eo = Wi.exports;
const qt = /* @__PURE__ */ or(Eo);
var ir = {}, nr = {};
function xo(n, e, t) {
  if (t === void 0 && (t = Array.prototype), n && typeof t.find == "function")
    return t.find.call(n, e);
  for (var r = 0; r < n.length; r++)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      var i = n[r];
      if (e.call(void 0, i, r, n))
        return i;
    }
}
function Qi(n, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(n) : n;
}
var ps = Qi({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(n) {
    return n === ps.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), vs = Qi({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(n) {
    return n === vs.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
nr.find = xo;
nr.freeze = Qi;
nr.MIME_TYPE = ps;
nr.NAMESPACE = vs;
var gs = nr, Mt = gs.find, Lr = gs.NAMESPACE;
function Co(n) {
  return n !== "";
}
function Do(n) {
  return n ? n.split(/[\t\n\f\r ]+/).filter(Co) : [];
}
function Ao(n, e) {
  return n.hasOwnProperty(e) || (n[e] = !0), n;
}
function In(n) {
  if (!n)
    return [];
  var e = Do(n);
  return Object.keys(e.reduce(Ao, {}));
}
function So(n) {
  return function(e) {
    return n && n.indexOf(e) !== -1;
  };
}
function Mr(n, e) {
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
}
function At(n, e) {
  var t = n.prototype;
  if (!(t instanceof e)) {
    let r = function() {
    };
    r.prototype = e.prototype, r = new r(), Mr(t, r), n.prototype = t = r;
  }
  t.constructor != n && (typeof n != "function" && console.error("unknown Class:" + n), t.constructor = n);
}
var St = {}, zt = St.ELEMENT_NODE = 1, wr = St.ATTRIBUTE_NODE = 2, ri = St.TEXT_NODE = 3, ms = St.CDATA_SECTION_NODE = 4, ys = St.ENTITY_REFERENCE_NODE = 5, To = St.ENTITY_NODE = 6, bs = St.PROCESSING_INSTRUCTION_NODE = 7, ws = St.COMMENT_NODE = 8, _s = St.DOCUMENT_NODE = 9, Es = St.DOCUMENT_TYPE_NODE = 10, Zt = St.DOCUMENT_FRAGMENT_NODE = 11, ko = St.NOTATION_NODE = 12, wt = {}, vt = {};
wt.INDEX_SIZE_ERR = (vt[1] = "Index size error", 1);
wt.DOMSTRING_SIZE_ERR = (vt[2] = "DOMString size error", 2);
var Dt = wt.HIERARCHY_REQUEST_ERR = (vt[3] = "Hierarchy request error", 3);
wt.WRONG_DOCUMENT_ERR = (vt[4] = "Wrong document", 4);
wt.INVALID_CHARACTER_ERR = (vt[5] = "Invalid character", 5);
wt.NO_DATA_ALLOWED_ERR = (vt[6] = "No data allowed", 6);
wt.NO_MODIFICATION_ALLOWED_ERR = (vt[7] = "No modification allowed", 7);
var xs = wt.NOT_FOUND_ERR = (vt[8] = "Not found", 8);
wt.NOT_SUPPORTED_ERR = (vt[9] = "Not supported", 9);
var Ln = wt.INUSE_ATTRIBUTE_ERR = (vt[10] = "Attribute in use", 10);
wt.INVALID_STATE_ERR = (vt[11] = "Invalid state", 11);
wt.SYNTAX_ERR = (vt[12] = "Syntax error", 12);
wt.INVALID_MODIFICATION_ERR = (vt[13] = "Invalid modification", 13);
wt.NAMESPACE_ERR = (vt[14] = "Invalid namespace", 14);
wt.INVALID_ACCESS_ERR = (vt[15] = "Invalid access", 15);
function lt(n, e) {
  if (e instanceof Error)
    var t = e;
  else
    t = this, Error.call(this, vt[n]), this.message = vt[n], Error.captureStackTrace && Error.captureStackTrace(this, lt);
  return t.code = n, e && (this.message = this.message + ": " + e), t;
}
lt.prototype = Error.prototype;
Mr(wt, lt);
function $t() {
}
$t.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(n) {
    return n >= 0 && n < this.length ? this[n] : null;
  },
  toString: function(n, e) {
    for (var t = [], r = 0; r < this.length; r++)
      yr(this[r], t, n, e);
    return t.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(n) {
    return Array.prototype.filter.call(this, n);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(n) {
    return Array.prototype.indexOf.call(this, n);
  }
};
function _r(n, e) {
  this._node = n, this._refresh = e, en(this);
}
function en(n) {
  var e = n._node._inc || n._node.ownerDocument._inc;
  if (n._inc !== e) {
    var t = n._refresh(n._node);
    if (Bs(n, "length", t.length), !n.$$length || t.length < n.$$length)
      for (var r = t.length; r in n; r++)
        Object.prototype.hasOwnProperty.call(n, r) && delete n[r];
    Mr(t, n), n._inc = e;
  }
}
_r.prototype.item = function(n) {
  return en(this), this[n] || null;
};
At(_r, $t);
function ii() {
}
function Cs(n, e) {
  for (var t = n.length; t--; )
    if (n[t] === e)
      return t;
}
function Bn(n, e, t, r) {
  if (r ? e[Cs(e, r)] = t : e[e.length++] = t, n) {
    t.ownerElement = n;
    var i = n.ownerDocument;
    i && (r && Ss(i, n, r), No(i, n, t));
  }
}
function Fn(n, e, t) {
  var r = Cs(e, t);
  if (r >= 0) {
    for (var i = e.length - 1; r < i; )
      e[r] = e[++r];
    if (e.length = i, n) {
      var s = n.ownerDocument;
      s && (Ss(s, n, t), t.ownerElement = null);
    }
  } else
    throw new lt(xs, new Error(n.tagName + "@" + t));
}
ii.prototype = {
  length: 0,
  item: $t.prototype.item,
  getNamedItem: function(n) {
    for (var e = this.length; e--; ) {
      var t = this[e];
      if (t.nodeName == n)
        return t;
    }
  },
  setNamedItem: function(n) {
    var e = n.ownerElement;
    if (e && e != this._ownerElement)
      throw new lt(Ln);
    var t = this.getNamedItem(n.nodeName);
    return Bn(this._ownerElement, this, n, t), t;
  },
  /* returns Node */
  setNamedItemNS: function(n) {
    var e = n.ownerElement, t;
    if (e && e != this._ownerElement)
      throw new lt(Ln);
    return t = this.getNamedItemNS(n.namespaceURI, n.localName), Bn(this._ownerElement, this, n, t), t;
  },
  /* returns Node */
  removeNamedItem: function(n) {
    var e = this.getNamedItem(n);
    return Fn(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(n, e) {
    var t = this.getNamedItemNS(n, e);
    return Fn(this._ownerElement, this, t), t;
  },
  getNamedItemNS: function(n, e) {
    for (var t = this.length; t--; ) {
      var r = this[t];
      if (r.localName == e && r.namespaceURI == n)
        return r;
    }
    return null;
  }
};
function Ds() {
}
Ds.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(n, e) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(n, e, t) {
    var r = new Ur();
    if (r.implementation = this, r.childNodes = new $t(), r.doctype = t || null, t && r.appendChild(t), e) {
      var i = r.createElementNS(n, e);
      r.appendChild(i);
    }
    return r;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(n, e, t) {
    var r = new mi();
    return r.name = n, r.nodeName = n, r.publicId = e || "", r.systemId = t || "", r;
  }
};
function Ze() {
}
Ze.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(n, e) {
    return ni(this, n, e);
  },
  replaceChild: function(n, e) {
    ni(this, n, e, ks), e && this.removeChild(e);
  },
  removeChild: function(n) {
    return Ts(this, n);
  },
  appendChild: function(n) {
    return this.insertBefore(n, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(n) {
    return qi(this.ownerDocument || this, this, n);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var n = this.firstChild; n; ) {
      var e = n.nextSibling;
      e && e.nodeType == ri && n.nodeType == ri ? (this.removeChild(e), n.appendData(e.data)) : (n.normalize(), n = e);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(n, e) {
    return this.ownerDocument.implementation.hasFeature(n, e);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(n) {
    for (var e = this; e; ) {
      var t = e._nsMap;
      if (t) {
        for (var r in t)
          if (Object.prototype.hasOwnProperty.call(t, r) && t[r] === n)
            return r;
      }
      e = e.nodeType == wr ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(n) {
    for (var e = this; e; ) {
      var t = e._nsMap;
      if (t && n in t && Object.prototype.hasOwnProperty.call(t, n))
        return t[n];
      e = e.nodeType == wr ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(n) {
    var e = this.lookupPrefix(n);
    return e == null;
  }
};
function As(n) {
  return n == "<" && "&lt;" || n == ">" && "&gt;" || n == "&" && "&amp;" || n == '"' && "&quot;" || "&#" + n.charCodeAt() + ";";
}
Mr(St, Ze);
Mr(St, Ze.prototype);
function Br(n, e) {
  if (e(n))
    return !0;
  if (n = n.firstChild)
    do
      if (Br(n, e))
        return !0;
    while (n = n.nextSibling);
}
function Ur() {
  this.ownerDocument = this;
}
function No(n, e, t) {
  n && n._inc++;
  var r = t.namespaceURI;
  r === Lr.XMLNS && (e._nsMap[t.prefix ? t.localName : ""] = t.value);
}
function Ss(n, e, t, r) {
  n && n._inc++;
  var i = t.namespaceURI;
  i === Lr.XMLNS && delete e._nsMap[t.prefix ? t.localName : ""];
}
function tn(n, e, t) {
  if (n && n._inc) {
    n._inc++;
    var r = e.childNodes;
    if (t)
      r[r.length++] = t;
    else {
      for (var i = e.firstChild, s = 0; i; )
        r[s++] = i, i = i.nextSibling;
      r.length = s, delete r[r.length];
    }
  }
}
function Ts(n, e) {
  var t = e.previousSibling, r = e.nextSibling;
  return t ? t.nextSibling = r : n.firstChild = r, r ? r.previousSibling = t : n.lastChild = t, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, tn(n.ownerDocument, n), e;
}
function Ro(n) {
  return n && (n.nodeType === Ze.DOCUMENT_NODE || n.nodeType === Ze.DOCUMENT_FRAGMENT_NODE || n.nodeType === Ze.ELEMENT_NODE);
}
function Oo(n) {
  return n && (Ut(n) || rn(n) || Gt(n) || n.nodeType === Ze.DOCUMENT_FRAGMENT_NODE || n.nodeType === Ze.COMMENT_NODE || n.nodeType === Ze.PROCESSING_INSTRUCTION_NODE);
}
function Gt(n) {
  return n && n.nodeType === Ze.DOCUMENT_TYPE_NODE;
}
function Ut(n) {
  return n && n.nodeType === Ze.ELEMENT_NODE;
}
function rn(n) {
  return n && n.nodeType === Ze.TEXT_NODE;
}
function Pn(n, e) {
  var t = n.childNodes || [];
  if (Mt(t, Ut) || Gt(e))
    return !1;
  var r = Mt(t, Gt);
  return !(e && r && t.indexOf(r) > t.indexOf(e));
}
function zn(n, e) {
  var t = n.childNodes || [];
  function r(s) {
    return Ut(s) && s !== e;
  }
  if (Mt(t, r))
    return !1;
  var i = Mt(t, Gt);
  return !(e && i && t.indexOf(i) > t.indexOf(e));
}
function Io(n, e, t) {
  if (!Ro(n))
    throw new lt(Dt, "Unexpected parent node type " + n.nodeType);
  if (t && t.parentNode !== n)
    throw new lt(xs, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !Oo(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    Gt(e) && n.nodeType !== Ze.DOCUMENT_NODE
  )
    throw new lt(
      Dt,
      "Unexpected node type " + e.nodeType + " for parent node type " + n.nodeType
    );
}
function Lo(n, e, t) {
  var r = n.childNodes || [], i = e.childNodes || [];
  if (e.nodeType === Ze.DOCUMENT_FRAGMENT_NODE) {
    var s = i.filter(Ut);
    if (s.length > 1 || Mt(i, rn))
      throw new lt(Dt, "More than one element or text in fragment");
    if (s.length === 1 && !Pn(n, t))
      throw new lt(Dt, "Element in fragment can not be inserted before doctype");
  }
  if (Ut(e) && !Pn(n, t))
    throw new lt(Dt, "Only one element can be added and only after doctype");
  if (Gt(e)) {
    if (Mt(r, Gt))
      throw new lt(Dt, "Only one doctype is allowed");
    var a = Mt(r, Ut);
    if (t && r.indexOf(a) < r.indexOf(t))
      throw new lt(Dt, "Doctype can only be inserted before an element");
    if (!t && a)
      throw new lt(Dt, "Doctype can not be appended since element is present");
  }
}
function ks(n, e, t) {
  var r = n.childNodes || [], i = e.childNodes || [];
  if (e.nodeType === Ze.DOCUMENT_FRAGMENT_NODE) {
    var s = i.filter(Ut);
    if (s.length > 1 || Mt(i, rn))
      throw new lt(Dt, "More than one element or text in fragment");
    if (s.length === 1 && !zn(n, t))
      throw new lt(Dt, "Element in fragment can not be inserted before doctype");
  }
  if (Ut(e) && !zn(n, t))
    throw new lt(Dt, "Only one element can be added and only after doctype");
  if (Gt(e)) {
    if (Mt(r, function(u) {
      return Gt(u) && u !== t;
    }))
      throw new lt(Dt, "Only one doctype is allowed");
    var a = Mt(r, Ut);
    if (t && r.indexOf(a) < r.indexOf(t))
      throw new lt(Dt, "Doctype can only be inserted before an element");
  }
}
function ni(n, e, t, r) {
  Io(n, e, t), n.nodeType === Ze.DOCUMENT_NODE && (r || Lo)(n, e, t);
  var i = e.parentNode;
  if (i && i.removeChild(e), e.nodeType === Zt) {
    var s = e.firstChild;
    if (s == null)
      return e;
    var a = e.lastChild;
  } else
    s = a = e;
  var o = t ? t.previousSibling : n.lastChild;
  s.previousSibling = o, a.nextSibling = t, o ? o.nextSibling = s : n.firstChild = s, t == null ? n.lastChild = a : t.previousSibling = a;
  do
    s.parentNode = n;
  while (s !== a && (s = s.nextSibling));
  return tn(n.ownerDocument || n, n), e.nodeType == Zt && (e.firstChild = e.lastChild = null), e;
}
function Bo(n, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = n, e.previousSibling = n.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : n.firstChild = e, n.lastChild = e, tn(n.ownerDocument, n, e), e;
}
Ur.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: _s,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(n, e) {
    if (n.nodeType == Zt) {
      for (var t = n.firstChild; t; ) {
        var r = t.nextSibling;
        this.insertBefore(t, e), t = r;
      }
      return n;
    }
    return ni(this, n, e), n.ownerDocument = this, this.documentElement === null && n.nodeType === zt && (this.documentElement = n), n;
  },
  removeChild: function(n) {
    return this.documentElement == n && (this.documentElement = null), Ts(this, n);
  },
  replaceChild: function(n, e) {
    ni(this, n, e, ks), n.ownerDocument = this, e && this.removeChild(e), Ut(n) && (this.documentElement = n);
  },
  // Introduced in DOM Level 2:
  importNode: function(n, e) {
    return Ls(this, n, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(n) {
    var e = null;
    return Br(this.documentElement, function(t) {
      if (t.nodeType == zt && t.getAttribute("id") == n)
        return e = t, !0;
    }), e;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(n) {
    var e = In(n);
    return new _r(this, function(t) {
      var r = [];
      return e.length > 0 && Br(t.documentElement, function(i) {
        if (i !== t && i.nodeType === zt) {
          var s = i.getAttribute("class");
          if (s) {
            var a = n === s;
            if (!a) {
              var o = In(s);
              a = e.every(So(o));
            }
            a && r.push(i);
          }
        }
      }), r;
    });
  },
  //document factory method:
  createElement: function(n) {
    var e = new sr();
    e.ownerDocument = this, e.nodeName = n, e.tagName = n, e.localName = n, e.childNodes = new $t();
    var t = e.attributes = new ii();
    return t._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var n = new yi();
    return n.ownerDocument = this, n.childNodes = new $t(), n;
  },
  createTextNode: function(n) {
    var e = new nn();
    return e.ownerDocument = this, e.appendData(n), e;
  },
  createComment: function(n) {
    var e = new sn();
    return e.ownerDocument = this, e.appendData(n), e;
  },
  createCDATASection: function(n) {
    var e = new an();
    return e.ownerDocument = this, e.appendData(n), e;
  },
  createProcessingInstruction: function(n, e) {
    var t = new un();
    return t.ownerDocument = this, t.tagName = t.nodeName = t.target = n, t.nodeValue = t.data = e, t;
  },
  createAttribute: function(n) {
    var e = new si();
    return e.ownerDocument = this, e.name = n, e.nodeName = n, e.localName = n, e.specified = !0, e;
  },
  createEntityReference: function(n) {
    var e = new on();
    return e.ownerDocument = this, e.nodeName = n, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(n, e) {
    var t = new sr(), r = e.split(":"), i = t.attributes = new ii();
    return t.childNodes = new $t(), t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.namespaceURI = n, r.length == 2 ? (t.prefix = r[0], t.localName = r[1]) : t.localName = e, i._ownerElement = t, t;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(n, e) {
    var t = new si(), r = e.split(":");
    return t.ownerDocument = this, t.nodeName = e, t.name = e, t.namespaceURI = n, t.specified = !0, r.length == 2 ? (t.prefix = r[0], t.localName = r[1]) : t.localName = e, t;
  }
};
At(Ur, Ze);
function sr() {
  this._nsMap = {};
}
sr.prototype = {
  nodeType: zt,
  hasAttribute: function(n) {
    return this.getAttributeNode(n) != null;
  },
  getAttribute: function(n) {
    var e = this.getAttributeNode(n);
    return e && e.value || "";
  },
  getAttributeNode: function(n) {
    return this.attributes.getNamedItem(n);
  },
  setAttribute: function(n, e) {
    var t = this.ownerDocument.createAttribute(n);
    t.value = t.nodeValue = "" + e, this.setAttributeNode(t);
  },
  removeAttribute: function(n) {
    var e = this.getAttributeNode(n);
    e && this.removeAttributeNode(e);
  },
  //four real opeartion method
  appendChild: function(n) {
    return n.nodeType === Zt ? this.insertBefore(n, null) : Bo(this, n);
  },
  setAttributeNode: function(n) {
    return this.attributes.setNamedItem(n);
  },
  setAttributeNodeNS: function(n) {
    return this.attributes.setNamedItemNS(n);
  },
  removeAttributeNode: function(n) {
    return this.attributes.removeNamedItem(n.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(n, e) {
    var t = this.getAttributeNodeNS(n, e);
    t && this.removeAttributeNode(t);
  },
  hasAttributeNS: function(n, e) {
    return this.getAttributeNodeNS(n, e) != null;
  },
  getAttributeNS: function(n, e) {
    var t = this.getAttributeNodeNS(n, e);
    return t && t.value || "";
  },
  setAttributeNS: function(n, e, t) {
    var r = this.ownerDocument.createAttributeNS(n, e);
    r.value = r.nodeValue = "" + t, this.setAttributeNode(r);
  },
  getAttributeNodeNS: function(n, e) {
    return this.attributes.getNamedItemNS(n, e);
  },
  getElementsByTagName: function(n) {
    return new _r(this, function(e) {
      var t = [];
      return Br(e, function(r) {
        r !== e && r.nodeType == zt && (n === "*" || r.tagName == n) && t.push(r);
      }), t;
    });
  },
  getElementsByTagNameNS: function(n, e) {
    return new _r(this, function(t) {
      var r = [];
      return Br(t, function(i) {
        i !== t && i.nodeType === zt && (n === "*" || i.namespaceURI === n) && (e === "*" || i.localName == e) && r.push(i);
      }), r;
    });
  }
};
Ur.prototype.getElementsByTagName = sr.prototype.getElementsByTagName;
Ur.prototype.getElementsByTagNameNS = sr.prototype.getElementsByTagNameNS;
At(sr, Ze);
function si() {
}
si.prototype.nodeType = wr;
At(si, Ze);
function Wr() {
}
Wr.prototype = {
  data: "",
  substringData: function(n, e) {
    return this.data.substring(n, n + e);
  },
  appendData: function(n) {
    n = this.data + n, this.nodeValue = this.data = n, this.length = n.length;
  },
  insertData: function(n, e) {
    this.replaceData(n, 0, e);
  },
  appendChild: function(n) {
    throw new Error(vt[Dt]);
  },
  deleteData: function(n, e) {
    this.replaceData(n, e, "");
  },
  replaceData: function(n, e, t) {
    var r = this.data.substring(0, n), i = this.data.substring(n + e);
    t = r + t + i, this.nodeValue = this.data = t, this.length = t.length;
  }
};
At(Wr, Ze);
function nn() {
}
nn.prototype = {
  nodeName: "#text",
  nodeType: ri,
  splitText: function(n) {
    var e = this.data, t = e.substring(n);
    e = e.substring(0, n), this.data = this.nodeValue = e, this.length = e.length;
    var r = this.ownerDocument.createTextNode(t);
    return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
  }
};
At(nn, Wr);
function sn() {
}
sn.prototype = {
  nodeName: "#comment",
  nodeType: ws
};
At(sn, Wr);
function an() {
}
an.prototype = {
  nodeName: "#cdata-section",
  nodeType: ms
};
At(an, Wr);
function mi() {
}
mi.prototype.nodeType = Es;
At(mi, Ze);
function Ns() {
}
Ns.prototype.nodeType = ko;
At(Ns, Ze);
function Rs() {
}
Rs.prototype.nodeType = To;
At(Rs, Ze);
function on() {
}
on.prototype.nodeType = ys;
At(on, Ze);
function yi() {
}
yi.prototype.nodeName = "#document-fragment";
yi.prototype.nodeType = Zt;
At(yi, Ze);
function un() {
}
un.prototype.nodeType = bs;
At(un, Ze);
function Os() {
}
Os.prototype.serializeToString = function(n, e, t) {
  return Is.call(n, e, t);
};
Ze.prototype.toString = Is;
function Is(n, e) {
  var t = [], r = this.nodeType == 9 && this.documentElement || this, i = r.prefix, s = r.namespaceURI;
  if (s && i == null) {
    var i = r.lookupPrefix(s);
    if (i == null)
      var a = [
        { namespace: s, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return yr(this, t, n, e, a), t.join("");
}
function jn(n, e, t) {
  var r = n.prefix || "", i = n.namespaceURI;
  if (!i || r === "xml" && i === Lr.XML || i === Lr.XMLNS)
    return !1;
  for (var s = t.length; s--; ) {
    var a = t[s];
    if (a.prefix === r)
      return a.namespace !== i;
  }
  return !0;
}
function Fi(n, e, t) {
  n.push(" ", e, '="', t.replace(/[<&"]/g, As), '"');
}
function yr(n, e, t, r, i) {
  if (i || (i = []), r)
    if (n = r(n), n) {
      if (typeof n == "string") {
        e.push(n);
        return;
      }
    } else
      return;
  switch (n.nodeType) {
    case zt:
      var s = n.attributes, a = s.length, v = n.firstChild, o = n.tagName;
      t = Lr.isHTML(n.namespaceURI) || t;
      var u = o;
      if (!t && !n.prefix && n.namespaceURI) {
        for (var h, f = 0; f < s.length; f++)
          if (s.item(f).name === "xmlns") {
            h = s.item(f).value;
            break;
          }
        if (!h)
          for (var c = i.length - 1; c >= 0; c--) {
            var w = i[c];
            if (w.prefix === "" && w.namespace === n.namespaceURI) {
              h = w.namespace;
              break;
            }
          }
        if (h !== n.namespaceURI)
          for (var c = i.length - 1; c >= 0; c--) {
            var w = i[c];
            if (w.namespace === n.namespaceURI) {
              w.prefix && (u = w.prefix + ":" + o);
              break;
            }
          }
      }
      e.push("<", u);
      for (var m = 0; m < a; m++) {
        var S = s.item(m);
        S.prefix == "xmlns" ? i.push({ prefix: S.localName, namespace: S.value }) : S.nodeName == "xmlns" && i.push({ prefix: "", namespace: S.value });
      }
      for (var m = 0; m < a; m++) {
        var S = s.item(m);
        if (jn(S, t, i)) {
          var N = S.prefix || "", p = S.namespaceURI;
          Fi(e, N ? "xmlns:" + N : "xmlns", p), i.push({ prefix: N, namespace: p });
        }
        yr(S, e, t, r, i);
      }
      if (o === u && jn(n, t, i)) {
        var N = n.prefix || "", p = n.namespaceURI;
        Fi(e, N ? "xmlns:" + N : "xmlns", p), i.push({ prefix: N, namespace: p });
      }
      if (v || t && !/^(?:meta|link|img|br|hr|input)$/i.test(o)) {
        if (e.push(">"), t && /^script$/i.test(o))
          for (; v; )
            v.data ? e.push(v.data) : yr(v, e, t, r, i.slice()), v = v.nextSibling;
        else
          for (; v; )
            yr(v, e, t, r, i.slice()), v = v.nextSibling;
        e.push("</", u, ">");
      } else
        e.push("/>");
      return;
    case _s:
    case Zt:
      for (var v = n.firstChild; v; )
        yr(v, e, t, r, i.slice()), v = v.nextSibling;
      return;
    case wr:
      return Fi(e, n.name, n.value);
    case ri:
      return e.push(
        n.data.replace(/[<&]/g, As).replace(/]]>/g, "]]&gt;")
      );
    case ms:
      return e.push("<![CDATA[", n.data, "]]>");
    case ws:
      return e.push("<!--", n.data, "-->");
    case Es:
      var y = n.publicId, A = n.systemId;
      if (e.push("<!DOCTYPE ", n.name), y)
        e.push(" PUBLIC ", y), A && A != "." && e.push(" ", A), e.push(">");
      else if (A && A != ".")
        e.push(" SYSTEM ", A, ">");
      else {
        var k = n.internalSubset;
        k && e.push(" [", k, "]"), e.push(">");
      }
      return;
    case bs:
      return e.push("<?", n.target, " ", n.data, "?>");
    case ys:
      return e.push("&", n.nodeName, ";");
    default:
      e.push("??", n.nodeName);
  }
}
function Ls(n, e, t) {
  var r;
  switch (e.nodeType) {
    case zt:
      r = e.cloneNode(!1), r.ownerDocument = n;
    case Zt:
      break;
    case wr:
      t = !0;
      break;
  }
  if (r || (r = e.cloneNode(!1)), r.ownerDocument = n, r.parentNode = null, t)
    for (var i = e.firstChild; i; )
      r.appendChild(Ls(n, i, t)), i = i.nextSibling;
  return r;
}
function qi(n, e, t) {
  var r = new e.constructor();
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = e[i];
      typeof s != "object" && s != r[i] && (r[i] = s);
    }
  switch (e.childNodes && (r.childNodes = new $t()), r.ownerDocument = n, r.nodeType) {
    case zt:
      var a = e.attributes, o = r.attributes = new ii(), u = a.length;
      o._ownerElement = r;
      for (var h = 0; h < u; h++)
        r.setAttributeNode(qi(n, a.item(h), !0));
      break;
    case wr:
      t = !0;
  }
  if (t)
    for (var f = e.firstChild; f; )
      r.appendChild(qi(n, f, t)), f = f.nextSibling;
  return r;
}
function Bs(n, e, t) {
  n[e] = t;
}
try {
  if (Object.defineProperty) {
    let n = function(e) {
      switch (e.nodeType) {
        case zt:
        case Zt:
          var t = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && t.push(n(e)), e = e.nextSibling;
          return t.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(_r.prototype, "length", {
      get: function() {
        return en(this), this.$$length;
      }
    }), Object.defineProperty(Ze.prototype, "textContent", {
      get: function() {
        return n(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case zt:
          case Zt:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), Bs = function(e, t, r) {
      e["$$" + t] = r;
    };
  }
} catch {
}
ir.DocumentType = mi;
ir.DOMException = lt;
ir.DOMImplementation = Ds;
ir.Element = sr;
ir.Node = Ze;
ir.NodeList = $t;
ir.XMLSerializer = Os;
var qr = {}, Fs = {};
(function(n) {
  var e = nr.freeze;
  n.XML_ENTITIES = e({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), n.HTML_ENTITIES = e({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), n.entityMap = n.HTML_ENTITIES;
})(Fs);
var ln = {}, Fr = nr.NAMESPACE, Vi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Mn = new RegExp("[\\-\\.0-9" + Vi.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), Un = new RegExp("^" + Vi.source + Mn.source + "*(?::" + Vi.source + Mn.source + "*)?$"), Sr = 0, Qt = 1, hr = 2, Tr = 3, fr = 4, cr = 5, kr = 6, Zr = 7;
function Er(n, e) {
  this.message = n, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, Er);
}
Er.prototype = new Error();
Er.prototype.name = Er.name;
function Ps() {
}
Ps.prototype = {
  parse: function(n, e, t) {
    var r = this.domBuilder;
    r.startDocument(), zs(e, e = {}), Fo(
      n,
      e,
      t,
      r,
      this.errorHandler
    ), r.endDocument();
  }
};
function Fo(n, e, t, r, i) {
  function s(ve) {
    if (ve > 65535) {
      ve -= 65536;
      var de = 55296 + (ve >> 10), fe = 56320 + (ve & 1023);
      return String.fromCharCode(de, fe);
    } else
      return String.fromCharCode(ve);
  }
  function a(ve) {
    var de = ve.slice(1, -1);
    return de in t ? t[de] : de.charAt(0) === "#" ? s(parseInt(de.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + ve), ve);
  }
  function o(ve) {
    if (ve > N) {
      var de = n.substring(N, ve).replace(/&#?\w+;/g, a);
      w && u(N), r.characters(de, 0, ve - N), N = ve;
    }
  }
  function u(ve, de) {
    for (; ve >= f && (de = c.exec(n)); )
      h = de.index, f = h + de[0].length, w.lineNumber++;
    w.columnNumber = ve - h + 1;
  }
  for (var h = 0, f = 0, c = /.*(?:\r\n?|\n)|.*$/g, w = r.locator, m = [{ currentNSMap: e }], S = {}, N = 0; ; ) {
    try {
      var p = n.indexOf("<", N);
      if (p < 0) {
        if (!n.substr(N).match(/^\s*$/)) {
          var v = r.doc, y = v.createTextNode(n.substr(N));
          v.appendChild(y), r.currentElement = y;
        }
        return;
      }
      switch (p > N && o(p), n.charAt(p + 1)) {
        case "/":
          var Y = n.indexOf(">", p + 3), A = n.substring(p + 2, Y).replace(/[ \t\n\r]+$/g, ""), k = m.pop();
          Y < 0 ? (A = n.substring(p + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + A + " is not complete:" + k.tagName), Y = p + 1 + A.length) : A.match(/\s</) && (A = A.replace(/[\s<].*/, ""), i.error("end tag name: " + A + " maybe not complete"), Y = p + 1 + A.length);
          var b = k.localNSMap, C = k.tagName == A, T = C || k.tagName && k.tagName.toLowerCase() == A.toLowerCase();
          if (T) {
            if (r.endElement(k.uri, k.localName, A), b)
              for (var R in b)
                Object.prototype.hasOwnProperty.call(b, R) && r.endPrefixMapping(R);
            C || i.fatalError("end tag name: " + A + " is not match the current start tagName:" + k.tagName);
          } else
            m.push(k);
          Y++;
          break;
        case "?":
          w && u(p), Y = Uo(n, p, r);
          break;
        case "!":
          w && u(p), Y = Mo(n, p, r, i);
          break;
        default:
          w && u(p);
          var z = new js(), M = m[m.length - 1].currentNSMap, Y = Po(n, p, z, M, a, i), Z = z.length;
          if (!z.closed && jo(n, Y, z.tagName, S) && (z.closed = !0, t.nbsp || i.warning("unclosed xml attribute")), w && Z) {
            for (var te = Wn(w, {}), ge = 0; ge < Z; ge++) {
              var pe = z[ge];
              u(pe.offset), pe.locator = Wn(w, {});
            }
            r.locator = te, qn(z, r, M) && m.push(z), r.locator = w;
          } else
            qn(z, r, M) && m.push(z);
          Fr.isHTML(z.uri) && !z.closed ? Y = zo(n, Y, z.tagName, a, r) : Y++;
      }
    } catch (ve) {
      if (ve instanceof Er)
        throw ve;
      i.error("element parse error: " + ve), Y = -1;
    }
    Y > N ? N = Y : o(Math.max(p, N) + 1);
  }
}
function Wn(n, e) {
  return e.lineNumber = n.lineNumber, e.columnNumber = n.columnNumber, e;
}
function Po(n, e, t, r, i, s) {
  function a(w, m, S) {
    t.attributeNames.hasOwnProperty(w) && s.fatalError("Attribute " + w + " redefined"), t.addValue(w, m, S);
  }
  for (var o, u, h = ++e, f = Sr; ; ) {
    var c = n.charAt(h);
    switch (c) {
      case "=":
        if (f === Qt)
          o = n.slice(e, h), f = Tr;
        else if (f === hr)
          f = Tr;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (f === Tr || f === Qt)
          if (f === Qt && (s.warning('attribute value must after "="'), o = n.slice(e, h)), e = h + 1, h = n.indexOf(c, e), h > 0)
            u = n.slice(e, h).replace(/&#?\w+;/g, i), a(o, u, e - 1), f = cr;
          else
            throw new Error("attribute value no end '" + c + "' match");
        else if (f == fr)
          u = n.slice(e, h).replace(/&#?\w+;/g, i), a(o, u, e), s.warning('attribute "' + o + '" missed start quot(' + c + ")!!"), e = h + 1, f = cr;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (f) {
          case Sr:
            t.setTagName(n.slice(e, h));
          case cr:
          case kr:
          case Zr:
            f = Zr, t.closed = !0;
          case fr:
          case Qt:
            break;
          case hr:
            t.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return s.error("unexpected end of input"), f == Sr && t.setTagName(n.slice(e, h)), h;
      case ">":
        switch (f) {
          case Sr:
            t.setTagName(n.slice(e, h));
          case cr:
          case kr:
          case Zr:
            break;
          case fr:
          case Qt:
            u = n.slice(e, h), u.slice(-1) === "/" && (t.closed = !0, u = u.slice(0, -1));
          case hr:
            f === hr && (u = o), f == fr ? (s.warning('attribute "' + u + '" missed quot(")!'), a(o, u.replace(/&#?\w+;/g, i), e)) : ((!Fr.isHTML(r[""]) || !u.match(/^(?:disabled|checked|selected)$/i)) && s.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'), a(u, u, e));
            break;
          case Tr:
            throw new Error("attribute value missed!!");
        }
        return h;
      case "":
        c = " ";
      default:
        if (c <= " ")
          switch (f) {
            case Sr:
              t.setTagName(n.slice(e, h)), f = kr;
              break;
            case Qt:
              o = n.slice(e, h), f = hr;
              break;
            case fr:
              var u = n.slice(e, h).replace(/&#?\w+;/g, i);
              s.warning('attribute "' + u + '" missed quot(")!!'), a(o, u, e);
            case cr:
              f = kr;
              break;
          }
        else
          switch (f) {
            case hr:
              t.tagName, (!Fr.isHTML(r[""]) || !o.match(/^(?:disabled|checked|selected)$/i)) && s.warning('attribute "' + o + '" missed value!! "' + o + '" instead2!!'), a(o, o, e), e = h, f = Qt;
              break;
            case cr:
              s.warning('attribute space is required"' + o + '"!!');
            case kr:
              f = Qt, e = h;
              break;
            case Tr:
              f = fr, e = h;
              break;
            case Zr:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    h++;
  }
}
function qn(n, e, t) {
  for (var r = n.tagName, i = null, c = n.length; c--; ) {
    var s = n[c], a = s.qName, o = s.value, w = a.indexOf(":");
    if (w > 0)
      var u = s.prefix = a.slice(0, w), h = a.slice(w + 1), f = u === "xmlns" && h;
    else
      h = a, u = null, f = a === "xmlns" && "";
    s.localName = h, f !== !1 && (i == null && (i = {}, zs(t, t = {})), t[f] = i[f] = o, s.uri = Fr.XMLNS, e.startPrefixMapping(f, o));
  }
  for (var c = n.length; c--; ) {
    s = n[c];
    var u = s.prefix;
    u && (u === "xml" && (s.uri = Fr.XML), u !== "xmlns" && (s.uri = t[u || ""]));
  }
  var w = r.indexOf(":");
  w > 0 ? (u = n.prefix = r.slice(0, w), h = n.localName = r.slice(w + 1)) : (u = null, h = n.localName = r);
  var m = n.uri = t[u || ""];
  if (e.startElement(m, h, r, n), n.closed) {
    if (e.endElement(m, h, r), i)
      for (u in i)
        Object.prototype.hasOwnProperty.call(i, u) && e.endPrefixMapping(u);
  } else
    return n.currentNSMap = t, n.localNSMap = i, !0;
}
function zo(n, e, t, r, i) {
  if (/^(?:script|textarea)$/i.test(t)) {
    var s = n.indexOf("</" + t + ">", e), a = n.substring(e + 1, s);
    if (/[&<]/.test(a))
      return /^script$/i.test(t) ? (i.characters(a, 0, a.length), s) : (a = a.replace(/&#?\w+;/g, r), i.characters(a, 0, a.length), s);
  }
  return e + 1;
}
function jo(n, e, t, r) {
  var i = r[t];
  return i == null && (i = n.lastIndexOf("</" + t + ">"), i < e && (i = n.lastIndexOf("</" + t)), r[t] = i), i < e;
}
function zs(n, e) {
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
}
function Mo(n, e, t, r) {
  var i = n.charAt(e + 2);
  switch (i) {
    case "-":
      if (n.charAt(e + 3) === "-") {
        var s = n.indexOf("-->", e + 4);
        return s > e ? (t.comment(n, e + 4, s - e - 4), s + 3) : (r.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (n.substr(e + 3, 6) == "CDATA[") {
        var s = n.indexOf("]]>", e + 9);
        return t.startCDATA(), t.characters(n, e + 9, s - e - 9), t.endCDATA(), s + 3;
      }
      var a = Wo(n, e), o = a.length;
      if (o > 1 && /!doctype/i.test(a[0][0])) {
        var u = a[1][0], h = !1, f = !1;
        o > 3 && (/^public$/i.test(a[2][0]) ? (h = a[3][0], f = o > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (f = a[3][0]));
        var c = a[o - 1];
        return t.startDTD(u, h, f), t.endDTD(), c.index + c[0].length;
      }
  }
  return -1;
}
function Uo(n, e, t) {
  var r = n.indexOf("?>", e);
  if (r) {
    var i = n.substring(e, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return i ? (i[0].length, t.processingInstruction(i[1], i[2]), r + 2) : -1;
  }
  return -1;
}
function js() {
  this.attributeNames = {};
}
js.prototype = {
  setTagName: function(n) {
    if (!Un.test(n))
      throw new Error("invalid tagName:" + n);
    this.tagName = n;
  },
  addValue: function(n, e, t) {
    if (!Un.test(n))
      throw new Error("invalid attribute:" + n);
    this.attributeNames[n] = this.length, this[this.length++] = { qName: n, value: e, offset: t };
  },
  length: 0,
  getLocalName: function(n) {
    return this[n].localName;
  },
  getLocator: function(n) {
    return this[n].locator;
  },
  getQName: function(n) {
    return this[n].qName;
  },
  getURI: function(n) {
    return this[n].uri;
  },
  getValue: function(n) {
    return this[n].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function Wo(n, e) {
  var t, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (i.lastIndex = e, i.exec(n); t = i.exec(n); )
    if (r.push(t), t[1])
      return r;
}
ln.XMLReader = Ps;
ln.ParseError = Er;
var qo = nr, hn = ir, Vn = Fs, Ms = ln, Vo = hn.DOMImplementation, Hn = qo.NAMESPACE, Ho = Ms.ParseError, $o = Ms.XMLReader;
function Us(n) {
  this.options = n || { locator: {} };
}
Us.prototype.parseFromString = function(n, e) {
  var t = this.options, r = new $o(), i = t.domBuilder || new Vr(), s = t.errorHandler, a = t.locator, o = t.xmlns || {}, u = /\/x?html?$/.test(e), h = u ? Vn.HTML_ENTITIES : Vn.XML_ENTITIES;
  return a && i.setDocumentLocator(a), r.errorHandler = Zo(s, i, a), r.domBuilder = t.domBuilder || i, u && (o[""] = Hn.HTML), o.xml = o.xml || Hn.XML, n && typeof n == "string" ? r.parse(n, o, h) : r.errorHandler.error("invalid doc source"), i.doc;
};
function Zo(n, e, t) {
  if (!n) {
    if (e instanceof Vr)
      return e;
    n = e;
  }
  var r = {}, i = n instanceof Function;
  t = t || {};
  function s(a) {
    var o = n[a];
    !o && i && (o = n.length == 2 ? function(u) {
      n(a, u);
    } : n), r[a] = o && function(u) {
      o("[xmldom " + a + "]	" + u + Hi(t));
    } || function() {
    };
  }
  return s("warning"), s("error"), s("fatalError"), r;
}
function Vr() {
  this.cdata = !1;
}
function dr(n, e) {
  e.lineNumber = n.lineNumber, e.columnNumber = n.columnNumber;
}
Vr.prototype = {
  startDocument: function() {
    this.doc = new Vo().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(n, e, t, r) {
    var i = this.doc, s = i.createElementNS(n, t || e), a = r.length;
    Gr(this, s), this.currentElement = s, this.locator && dr(this.locator, s);
    for (var o = 0; o < a; o++) {
      var n = r.getURI(o), u = r.getValue(o), t = r.getQName(o), h = i.createAttributeNS(n, t);
      this.locator && dr(r.getLocator(o), h), h.value = h.nodeValue = u, s.setAttributeNode(h);
    }
  },
  endElement: function(n, e, t) {
    var r = this.currentElement;
    r.tagName, this.currentElement = r.parentNode;
  },
  startPrefixMapping: function(n, e) {
  },
  endPrefixMapping: function(n) {
  },
  processingInstruction: function(n, e) {
    var t = this.doc.createProcessingInstruction(n, e);
    this.locator && dr(this.locator, t), Gr(this, t);
  },
  ignorableWhitespace: function(n, e, t) {
  },
  characters: function(n, e, t) {
    if (n = $n.apply(this, arguments), n) {
      if (this.cdata)
        var r = this.doc.createCDATASection(n);
      else
        var r = this.doc.createTextNode(n);
      this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(n) && this.doc.appendChild(r), this.locator && dr(this.locator, r);
    }
  },
  skippedEntity: function(n) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(n) {
    (this.locator = n) && (n.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(n, e, t) {
    n = $n.apply(this, arguments);
    var r = this.doc.createComment(n);
    this.locator && dr(this.locator, r), Gr(this, r);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(n, e, t) {
    var r = this.doc.implementation;
    if (r && r.createDocumentType) {
      var i = r.createDocumentType(n, e, t);
      this.locator && dr(this.locator, i), Gr(this, i), this.doc.doctype = i;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(n) {
    console.warn("[xmldom warning]	" + n, Hi(this.locator));
  },
  error: function(n) {
    console.error("[xmldom error]	" + n, Hi(this.locator));
  },
  fatalError: function(n) {
    throw new Ho(n, this.locator);
  }
};
function Hi(n) {
  if (n)
    return `
@` + (n.systemId || "") + "#[line:" + n.lineNumber + ",col:" + n.columnNumber + "]";
}
function $n(n, e, t) {
  return typeof n == "string" ? n.substr(e, t) : n.length >= e + t || e ? new java.lang.String(n, e, t) + "" : n;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(n) {
  Vr.prototype[n] = function() {
    return null;
  };
});
function Gr(n, e) {
  n.currentElement ? n.currentElement.appendChild(e) : n.doc.appendChild(e);
}
qr.__DOMHandler = Vr;
qr.DOMParser = Us;
qr.DOMImplementation = hn.DOMImplementation;
qr.XMLSerializer = hn.XMLSerializer;
var Ws = qr.DOMParser;
const fn = typeof window < "u" ? window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame : !1, Go = 1, Yo = 3, qs = typeof URL < "u" ? URL : typeof window < "u" ? window.URL || window.webkitURL || window.mozURL : void 0;
function bi() {
  var n = (/* @__PURE__ */ new Date()).getTime(), e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    var r = (n + Math.random() * 16) % 16 | 0;
    return n = Math.floor(n / 16), (t == "x" ? r : r & 7 | 8).toString(16);
  });
  return e;
}
function Xo() {
  return Math.max(
    document.documentElement.clientHeight,
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );
}
function Vs(n) {
  return !!(n && n.nodeType == 1);
}
function st(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Hs(n) {
  let e = parseFloat(n);
  return st(n) === !1 ? !1 : typeof n == "string" && n.indexOf(".") > -1 ? !0 : Math.floor(e) !== e;
}
function vr(n) {
  var e = ["Webkit", "webkit", "Moz", "O", "ms"], t = ["-webkit-", "-webkit-", "-moz-", "-o-", "-ms-"], r = n.toLowerCase(), i = e.length;
  if (typeof document > "u" || typeof document.body.style[r] < "u")
    return n;
  for (var s = 0; s < i; s++)
    if (typeof document.body.style[t[s] + r] < "u")
      return t[s] + r;
  return n;
}
function $s(n) {
  for (var e = 1, t = arguments.length; e < t; e++) {
    var r = arguments[e];
    for (var i in r)
      n[i] === void 0 && (n[i] = r[i]);
  }
  return n;
}
function bt(n) {
  var e = [].slice.call(arguments, 1);
  return e.forEach(function(t) {
    t && Object.getOwnPropertyNames(t).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }), n;
}
function Ko(n, e, t) {
  var r = xr(n, e, t);
  return e.splice(r, 0, n), r;
}
function xr(n, e, t, r, i) {
  var s = r || 0, a = i || e.length, o = parseInt(s + (a - s) / 2), u;
  return t || (t = function(h, f) {
    if (h > f)
      return 1;
    if (h < f)
      return -1;
    if (h == f)
      return 0;
  }), a - s <= 0 ? o : (u = t(e[o], n), a - s === 1 ? u >= 0 ? o : o + 1 : u === 0 ? o : u === -1 ? xr(n, e, t, o, a) : xr(n, e, t, s, o));
}
function ai(n, e, t, r, i) {
  var s = r || 0, a = i || e.length, o = parseInt(s + (a - s) / 2), u;
  return t || (t = function(h, f) {
    if (h > f)
      return 1;
    if (h < f)
      return -1;
    if (h == f)
      return 0;
  }), a - s <= 0 ? -1 : (u = t(e[o], n), a - s === 1 ? u === 0 ? o : -1 : u === 0 ? o : u === -1 ? ai(n, e, t, o, a) : ai(n, e, t, s, o));
}
function Qr(n) {
  var e = window.getComputedStyle(n), t = ["width", "paddingRight", "paddingLeft", "marginRight", "marginLeft", "borderRightWidth", "borderLeftWidth"], r = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth"], i = 0, s = 0;
  return t.forEach(function(a) {
    i += parseFloat(e[a]) || 0;
  }), r.forEach(function(a) {
    s += parseFloat(e[a]) || 0;
  }), {
    height: s,
    width: i
  };
}
function oi(n) {
  var e = window.getComputedStyle(n), t = ["paddingRight", "paddingLeft", "marginRight", "marginLeft", "borderRightWidth", "borderLeftWidth"], r = ["paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth"], i = 0, s = 0;
  return t.forEach(function(a) {
    i += parseFloat(e[a]) || 0;
  }), r.forEach(function(a) {
    s += parseFloat(e[a]) || 0;
  }), {
    height: s,
    width: i
  };
}
function $i(n) {
  let e, t = n.ownerDocument;
  if (n.nodeType == Node.TEXT_NODE) {
    let r = t.createRange();
    r.selectNodeContents(n), e = r.getBoundingClientRect();
  } else
    e = n.getBoundingClientRect();
  return e;
}
function ui() {
  var n = window.innerWidth, e = window.innerHeight;
  return {
    top: 0,
    left: 0,
    right: n,
    bottom: e,
    width: n,
    height: e
  };
}
function cn(n, e) {
  for (var t = n.parentNode, r = t.childNodes, i, s = -1, a = 0; a < r.length && (i = r[a], i.nodeType === e && s++, i != n); a++)
    ;
  return s;
}
function Jo(n) {
  return cn(n, Yo);
}
function Zs(n) {
  return cn(n, Go);
}
function Pr(n) {
  return ["xml", "opf", "ncx"].indexOf(n) > -1;
}
function Gs(n, e) {
  return new Blob([n], { type: e });
}
function li(n, e) {
  var t, r = Gs(n, e);
  return t = qs.createObjectURL(r), t;
}
function Ys(n) {
  return qs.revokeObjectURL(n);
}
function Zi(n, e) {
  var t, r;
  if (typeof n == "string")
    return t = btoa(n), r = "data:" + e + ";base64," + t, r;
}
function Xs(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Wt(n, e, t) {
  var r, i;
  return typeof DOMParser > "u" || t ? i = Ws : i = DOMParser, n.charCodeAt(0) === 65279 && (n = n.slice(1)), r = new i().parseFromString(n, e), r;
}
function Je(n, e) {
  var t;
  if (!n)
    throw new Error("No Element Provided");
  if (typeof n.querySelector < "u")
    return n.querySelector(e);
  if (t = n.getElementsByTagName(e), t.length)
    return t[0];
}
function Yt(n, e) {
  return typeof n.querySelector < "u" ? n.querySelectorAll(e) : n.getElementsByTagName(e);
}
function gr(n, e, t) {
  var r, i;
  if (typeof n.querySelector < "u") {
    e += "[";
    for (var s in t)
      e += s + "~='" + t[s] + "'";
    return e += "]", n.querySelector(e);
  } else if (r = n.getElementsByTagName(e), i = Array.prototype.slice.call(r, 0).filter(function(a) {
    for (var o in t)
      if (a.getAttribute(o) === t[o])
        return !0;
    return !1;
  }), i)
    return i[0];
}
function hi(n, e) {
  var t = n.ownerDocument || n;
  typeof t.createTreeWalker < "u" ? Ks(n, e, NodeFilter.SHOW_TEXT) : dn(n, function(r) {
    r && r.nodeType === 3 && e(r);
  });
}
function Ks(n, e, t) {
  var r = document.createTreeWalker(n, t, null, !1);
  let i;
  for (; i = r.nextNode(); )
    e(i);
}
function dn(n, e) {
  if (e(n))
    return !0;
  if (n = n.firstChild, n)
    do {
      if (dn(n, e))
        return !0;
      n = n.nextSibling;
    } while (n);
}
function Js(n) {
  return new Promise(function(e, t) {
    var r = new FileReader();
    r.readAsDataURL(n), r.onloadend = function() {
      e(r.result);
    };
  });
}
function Be() {
  this.resolve = null, this.reject = null, this.id = bi(), this.promise = new Promise((n, e) => {
    this.resolve = n, this.reject = e;
  }), Object.freeze(this);
}
function fi(n, e, t) {
  var r;
  if (typeof n.querySelector < "u" && (r = n.querySelector(`${e}[*|type="${t}"]`)), !r || r.length === 0) {
    r = Yt(n, e);
    for (var i = 0; i < r.length; i++)
      if (r[i].getAttributeNS("http://www.idpf.org/2007/ops", "type") === t || r[i].getAttribute("epub:type") === t)
        return r[i];
  } else
    return r;
}
function Gi(n) {
  for (var e = [], t = n.childNodes, r = 0; r < t.length; r++) {
    let i = t[r];
    i.nodeType === 1 && e.push(i);
  }
  return e;
}
function Yi(n) {
  for (var e = [n]; n; n = n.parentNode)
    e.unshift(n);
  return e;
}
function mr(n, e, t) {
  for (var r = [], i = n.childNodes, s = 0; s < i.length; s++) {
    let a = i[s];
    if (a.nodeType === 1 && a.nodeName.toLowerCase() === e) {
      if (t)
        return a;
      r.push(a);
    }
  }
  if (!t)
    return r;
}
function Qo(n, e) {
  let t;
  if (!(n === null || e === ""))
    for (t = n.parentNode; t.nodeType === 1; ) {
      if (t.tagName.toLowerCase() === e)
        return t;
      t = t.parentNode;
    }
}
class Qs {
  constructor() {
    this.collapsed = !1, this.commonAncestorContainer = void 0, this.endContainer = void 0, this.endOffset = void 0, this.startContainer = void 0, this.startOffset = void 0;
  }
  setStart(e, t) {
    this.startContainer = e, this.startOffset = t, this.endContainer ? this.commonAncestorContainer = this._commonAncestorContainer() : this.collapse(!0), this._checkCollapsed();
  }
  setEnd(e, t) {
    this.endContainer = e, this.endOffset = t, this.startContainer ? (this.collapsed = !1, this.commonAncestorContainer = this._commonAncestorContainer()) : this.collapse(!1), this._checkCollapsed();
  }
  collapse(e) {
    this.collapsed = !0, e ? (this.endContainer = this.startContainer, this.endOffset = this.startOffset, this.commonAncestorContainer = this.startContainer.parentNode) : (this.startContainer = this.endContainer, this.startOffset = this.endOffset, this.commonAncestorContainer = this.endOffset.parentNode);
  }
  selectNode(e) {
    let t = e.parentNode, r = Array.prototype.indexOf.call(t.childNodes, e);
    this.setStart(t, r), this.setEnd(t, r + 1);
  }
  selectNodeContents(e) {
    e.childNodes[e.childNodes - 1];
    let t = e.nodeType === 3 ? e.textContent.length : parent.childNodes.length;
    this.setStart(e, 0), this.setEnd(e, t);
  }
  _commonAncestorContainer(e, t) {
    var r = Yi(e || this.startContainer), i = Yi(t || this.endContainer);
    if (r[0] == i[0]) {
      for (var s = 0; s < r.length; s++)
        if (r[s] != i[s])
          return r[s - 1];
    }
  }
  _checkCollapsed() {
    this.startContainer === this.endContainer && this.startOffset === this.endOffset ? this.collapsed = !0 : this.collapsed = !1;
  }
  toString() {
  }
}
const eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RangeObject: Qs,
  blob2base64: Js,
  borders: oi,
  bounds: Qr,
  createBase64Url: Zi,
  createBlob: Gs,
  createBlobUrl: li,
  defaults: $s,
  defer: Be,
  documentHeight: Xo,
  extend: bt,
  filterChildren: mr,
  findChildren: Gi,
  getParentByTagName: Qo,
  indexOfElementNode: Zs,
  indexOfNode: cn,
  indexOfSorted: ai,
  indexOfTextNode: Jo,
  insert: Ko,
  isElement: Vs,
  isFloat: Hs,
  isNumber: st,
  isXml: Pr,
  locationOf: xr,
  nodeBounds: $i,
  parents: Yi,
  parse: Wt,
  prefixed: vr,
  qs: Je,
  qsa: Yt,
  qsp: gr,
  querySelectorByType: fi,
  requestAnimationFrame: fn,
  revokeBlobUrl: Ys,
  sprint: hi,
  treeWalker: Ks,
  type: Xs,
  uuid: bi,
  walk: dn,
  windowBounds: ui
}, Symbol.toStringTag, { value: "Module" }));
if (!ea)
  var ea = {
    cwd: function() {
      return "/";
    }
  };
function jt(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + n);
}
function Zn(n, e) {
  for (var t = "", r = -1, i = 0, s, a = 0; a <= n.length; ++a) {
    if (a < n.length)
      s = n.charCodeAt(a);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(r === a - 1 || i === 1))
        if (r !== a - 1 && i === 2) {
          if (t.length < 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              for (var o = t.length - 1, u = o; u >= 0 && t.charCodeAt(u) !== 47; --u)
                ;
              if (u !== o) {
                u === -1 ? t = "" : t = t.slice(0, u), r = a, i = 0;
                continue;
              }
            } else if (t.length === 2 || t.length === 1) {
              t = "", r = a, i = 0;
              continue;
            }
          }
          e && (t.length > 0 ? t += "/.." : t = "..");
        } else
          t.length > 0 ? t += "/" + n.slice(r + 1, a) : t = n.slice(r + 1, a);
      r = a, i = 0;
    } else
      s === 46 && i !== -1 ? ++i : i = -1;
  }
  return t;
}
function tu(n, e) {
  var t = e.dir || e.root, r = e.base || (e.name || "") + (e.ext || "");
  return t ? t === e.root ? t + r : t + n + r : r;
}
var ei = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", t = !1, r, i = arguments.length - 1; i >= -1 && !t; i--) {
      var s;
      i >= 0 ? s = arguments[i] : (r === void 0 && (r = ea.cwd()), s = r), jt(s), s.length !== 0 && (e = s + "/" + e, t = s.charCodeAt(0) === 47);
    }
    return e = Zn(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (jt(e), e.length === 0)
      return ".";
    var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
    return e = Zn(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && r && (e += "/"), t ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return jt(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, t = 0; t < arguments.length; ++t) {
      var r = arguments[t];
      jt(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
    }
    return e === void 0 ? "." : ei.normalize(e);
  },
  relative: function(e, t) {
    if (jt(e), jt(t), e === t || (e = ei.resolve(e), t = ei.resolve(t), e === t))
      return "";
    for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r)
      ;
    for (var i = e.length, s = i - r, a = 1; a < t.length && t.charCodeAt(a) === 47; ++a)
      ;
    for (var o = t.length, u = o - a, h = s < u ? s : u, f = -1, c = 0; c <= h; ++c) {
      if (c === h) {
        if (u > h) {
          if (t.charCodeAt(a + c) === 47)
            return t.slice(a + c + 1);
          if (c === 0)
            return t.slice(a + c);
        } else
          s > h && (e.charCodeAt(r + c) === 47 ? f = c : c === 0 && (f = 0));
        break;
      }
      var w = e.charCodeAt(r + c), m = t.charCodeAt(a + c);
      if (w !== m)
        break;
      w === 47 && (f = c);
    }
    var S = "";
    for (c = r + f + 1; c <= i; ++c)
      (c === i || e.charCodeAt(c) === 47) && (S.length === 0 ? S += ".." : S += "/..");
    return S.length > 0 ? S + t.slice(a + f) : (a += f, t.charCodeAt(a) === 47 && ++a, t.slice(a));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (jt(e), e.length === 0)
      return ".";
    for (var t = e.charCodeAt(0), r = t === 47, i = -1, s = !0, a = e.length - 1; a >= 1; --a)
      if (t = e.charCodeAt(a), t === 47) {
        if (!s) {
          i = a;
          break;
        }
      } else
        s = !1;
    return i === -1 ? r ? "/" : "." : r && i === 1 ? "//" : e.slice(0, i);
  },
  basename: function(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    jt(e);
    var r = 0, i = -1, s = !0, a;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e)
        return "";
      var o = t.length - 1, u = -1;
      for (a = e.length - 1; a >= 0; --a) {
        var h = e.charCodeAt(a);
        if (h === 47) {
          if (!s) {
            r = a + 1;
            break;
          }
        } else
          u === -1 && (s = !1, u = a + 1), o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (i = a) : (o = -1, i = u));
      }
      return r === i ? i = u : i === -1 && (i = e.length), e.slice(r, i);
    } else {
      for (a = e.length - 1; a >= 0; --a)
        if (e.charCodeAt(a) === 47) {
          if (!s) {
            r = a + 1;
            break;
          }
        } else
          i === -1 && (s = !1, i = a + 1);
      return i === -1 ? "" : e.slice(r, i);
    }
  },
  extname: function(e) {
    jt(e);
    for (var t = -1, r = 0, i = -1, s = !0, a = 0, o = e.length - 1; o >= 0; --o) {
      var u = e.charCodeAt(o);
      if (u === 47) {
        if (!s) {
          r = o + 1;
          break;
        }
        continue;
      }
      i === -1 && (s = !1, i = o + 1), u === 46 ? t === -1 ? t = o : a !== 1 && (a = 1) : t !== -1 && (a = -1);
    }
    return t === -1 || i === -1 || // We saw a non-dot character immediately before the dot
    a === 0 || // The (right-most) trimmed path component is exactly '..'
    a === 1 && t === i - 1 && t === r + 1 ? "" : e.slice(t, i);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError(
        'Parameter "pathObject" must be an object, not ' + typeof e
      );
    return tu("/", e);
  },
  parse: function(e) {
    jt(e);
    var t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    var r = e.charCodeAt(0), i = r === 47, s;
    i ? (t.root = "/", s = 1) : s = 0;
    for (var a = -1, o = 0, u = -1, h = !0, f = e.length - 1, c = 0; f >= s; --f) {
      if (r = e.charCodeAt(f), r === 47) {
        if (!h) {
          o = f + 1;
          break;
        }
        continue;
      }
      u === -1 && (h = !1, u = f + 1), r === 46 ? a === -1 ? a = f : c !== 1 && (c = 1) : a !== -1 && (c = -1);
    }
    return a === -1 || u === -1 || // We saw a non-dot character immediately before the dot
    c === 0 || // The (right-most) trimmed path component is exactly '..'
    c === 1 && a === u - 1 && a === o + 1 ? u !== -1 && (o === 0 && i ? t.base = t.name = e.slice(1, u) : t.base = t.name = e.slice(o, u)) : (o === 0 && i ? (t.name = e.slice(1, a), t.base = e.slice(1, u)) : (t.name = e.slice(o, a), t.base = e.slice(o, u)), t.ext = e.slice(a, u)), o > 0 ? t.dir = e.slice(0, o - 1) : i && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  posix: null
}, ru = ei;
const tr = /* @__PURE__ */ or(ru);
class Xt {
  constructor(e) {
    var t, r;
    t = e.indexOf("://"), t > -1 && (e = new URL(e).pathname), r = this.parse(e), this.path = e, this.isDirectory(e) ? this.directory = e : this.directory = r.dir + "/", this.filename = r.base, this.extension = r.ext.slice(1);
  }
  /**
   * Parse the path: https://nodejs.org/api/path.html#path_path_parse_path
   * @param	{string} what
   * @returns {object}
   */
  parse(e) {
    return tr.parse(e);
  }
  /**
   * @param	{string} what
   * @returns {boolean}
   */
  isAbsolute(e) {
    return tr.isAbsolute(e || this.path);
  }
  /**
   * Check if path ends with a directory
   * @param	{string} what
   * @returns {boolean}
   */
  isDirectory(e) {
    return e.charAt(e.length - 1) === "/";
  }
  /**
   * Resolve a path against the directory of the Path
   *
   * https://nodejs.org/api/path.html#path_path_resolve_paths
   * @param	{string} what
   * @returns {string} resolved
   */
  resolve(e) {
    return tr.resolve(this.directory, e);
  }
  /**
   * Resolve a path relative to the directory of the Path
   *
   * https://nodejs.org/api/path.html#path_path_relative_from_to
   * @param	{string} what
   * @returns {string} relative
   */
  relative(e) {
    var t = e && e.indexOf("://") > -1;
    return t ? e : tr.relative(this.directory, e);
  }
  splitPath(e) {
    return this.splitPathRe.exec(e).slice(1);
  }
  /**
   * Return the path string
   * @returns {string} path
   */
  toString() {
    return this.path;
  }
}
class Bt {
  constructor(e, t) {
    var r = e.indexOf("://") > -1, i = e, s;
    if (this.Url = void 0, this.href = e, this.protocol = "", this.origin = "", this.hash = "", this.hash = "", this.search = "", this.base = t, !r && t !== !1 && typeof t != "string" && window && window.location && (this.base = window.location.href), r || this.base)
      try {
        this.base ? this.Url = new URL(e, this.base) : this.Url = new URL(e), this.href = this.Url.href, this.protocol = this.Url.protocol, this.origin = this.Url.origin, this.hash = this.Url.hash, this.search = this.Url.search, i = this.Url.pathname + (this.Url.search ? this.Url.search : "");
      } catch {
        this.Url = void 0, this.base && (s = new Xt(this.base), i = s.resolve(i));
      }
    this.Path = new Xt(i), this.directory = this.Path.directory, this.filename = this.Path.filename, this.extension = this.Path.extension;
  }
  /**
   * @returns {Path}
   */
  path() {
    return this.Path;
  }
  /**
   * Resolves a relative path to a absolute url
   * @param {string} what
   * @returns {string} url
   */
  resolve(e) {
    var t = e.indexOf("://") > -1, r;
    return t ? e : (r = tr.resolve(this.directory, e), this.origin + r);
  }
  /**
   * Resolve a path relative to the url
   * @param {string} what
   * @returns {string} path
   */
  relative(e) {
    return tr.relative(e, this.directory);
  }
  /**
   * @returns {string}
   */
  toString() {
    return this.href;
  }
}
const pr = 1, Ot = 3, iu = 9;
class Fe {
  constructor(e, t, r) {
    var i;
    if (this.str = "", this.base = {}, this.spinePos = 0, this.range = !1, this.path = {}, this.start = null, this.end = null, !(this instanceof Fe))
      return new Fe(e, t, r);
    if (typeof t == "string" ? this.base = this.parseComponent(t) : typeof t == "object" && t.steps && (this.base = t), i = this.checkType(e), i === "string")
      return this.str = e, bt(this, this.parse(e));
    if (i === "range")
      return bt(this, this.fromRange(e, this.base, r));
    if (i === "node")
      return bt(this, this.fromNode(e, this.base, r));
    if (i === "EpubCFI" && e.path)
      return e;
    if (e)
      throw new TypeError("not a valid argument for EpubCFI");
    return this;
  }
  /**
   * Check the type of constructor input
   * @private
   */
  checkType(e) {
    return this.isCfiString(e) ? "string" : e && typeof e == "object" && (Xs(e) === "Range" || typeof e.startContainer < "u") ? "range" : e && typeof e == "object" && typeof e.nodeType < "u" ? "node" : e && typeof e == "object" && e instanceof Fe ? "EpubCFI" : !1;
  }
  /**
   * Parse a cfi string to a CFI object representation
   * @param {string} cfiStr
   * @returns {object} cfi
   */
  parse(e) {
    var t = {
      spinePos: -1,
      range: !1,
      base: {},
      path: {},
      start: null,
      end: null
    }, r, i, s;
    return typeof e != "string" ? { spinePos: -1 } : (e.indexOf("epubcfi(") === 0 && e[e.length - 1] === ")" && (e = e.slice(8, e.length - 1)), r = this.getChapterComponent(e), r ? (t.base = this.parseComponent(r), i = this.getPathComponent(e), t.path = this.parseComponent(i), s = this.getRange(e), s && (t.range = !0, t.start = this.parseComponent(s[0]), t.end = this.parseComponent(s[1])), t.spinePos = t.base.steps[1].index, t) : { spinePos: -1 });
  }
  parseComponent(e) {
    var t = {
      steps: [],
      terminal: {
        offset: null,
        assertion: null
      }
    }, r = e.split(":"), i = r[0].split("/"), s;
    return r.length > 1 && (s = r[1], t.terminal = this.parseTerminal(s)), i[0] === "" && i.shift(), t.steps = i.map((function(a) {
      return this.parseStep(a);
    }).bind(this)), t;
  }
  parseStep(e) {
    var t, r, i, s, a;
    if (s = e.match(/\[(.*)\]/), s && s[1] && (a = s[1]), r = parseInt(e), !isNaN(r))
      return r % 2 === 0 ? (t = "element", i = r / 2 - 1) : (t = "text", i = (r - 1) / 2), {
        type: t,
        index: i,
        id: a || null
      };
  }
  parseTerminal(e) {
    var t, r, i = e.match(/\[(.*)\]/);
    return i && i[1] ? (t = parseInt(e.split("[")[0]), r = i[1]) : t = parseInt(e), st(t) || (t = null), {
      offset: t,
      assertion: r
    };
  }
  getChapterComponent(e) {
    var t = e.split("!");
    return t[0];
  }
  getPathComponent(e) {
    var t = e.split("!");
    if (t[1])
      return t[1].split(",")[0];
  }
  getRange(e) {
    var t = e.split(",");
    return t.length === 3 ? [
      t[1],
      t[2]
    ] : !1;
  }
  getCharecterOffsetComponent(e) {
    var t = e.split(":");
    return t[1] || "";
  }
  joinSteps(e) {
    return e ? e.map(function(t) {
      var r = "";
      return t.type === "element" && (r += (t.index + 1) * 2), t.type === "text" && (r += 1 + 2 * t.index), t.id && (r += "[" + t.id + "]"), r;
    }).join("/") : "";
  }
  segmentString(e) {
    var t = "/";
    return t += this.joinSteps(e.steps), e.terminal && e.terminal.offset != null && (t += ":" + e.terminal.offset), e.terminal && e.terminal.assertion != null && (t += "[" + e.terminal.assertion + "]"), t;
  }
  /**
   * Convert CFI to a epubcfi(...) string
   * @returns {string} epubcfi
   */
  toString() {
    var e = "epubcfi(";
    return e += this.segmentString(this.base), e += "!", e += this.segmentString(this.path), this.range && this.start && (e += ",", e += this.segmentString(this.start)), this.range && this.end && (e += ",", e += this.segmentString(this.end)), e += ")", e;
  }
  /**
   * Compare which of two CFIs is earlier in the text
   * @returns {number} First is earlier = -1, Second is earlier = 1, They are equal = 0
   */
  compare(e, t) {
    var r, i, s, a;
    if (typeof e == "string" && (e = new Fe(e)), typeof t == "string" && (t = new Fe(t)), e.spinePos > t.spinePos)
      return 1;
    if (e.spinePos < t.spinePos)
      return -1;
    e.range ? (r = e.path.steps.concat(e.start.steps), s = e.start.terminal) : (r = e.path.steps, s = e.path.terminal), t.range ? (i = t.path.steps.concat(t.start.steps), a = t.start.terminal) : (i = t.path.steps, a = t.path.terminal);
    for (var o = 0; o < r.length; o++) {
      if (!r[o])
        return -1;
      if (!i[o] || r[o].index > i[o].index)
        return 1;
      if (r[o].index < i[o].index)
        return -1;
    }
    return r.length < i.length ? -1 : s.offset > a.offset ? 1 : s.offset < a.offset ? -1 : 0;
  }
  step(e) {
    var t = e.nodeType === Ot ? "text" : "element";
    return {
      id: e.id,
      tagName: e.tagName,
      type: t,
      index: this.position(e)
    };
  }
  filteredStep(e, t) {
    var r = this.filter(e, t), i;
    if (r)
      return i = r.nodeType === Ot ? "text" : "element", {
        id: r.id,
        tagName: r.tagName,
        type: i,
        index: this.filteredPosition(r, t)
      };
  }
  pathTo(e, t, r) {
    for (var i = {
      steps: [],
      terminal: {
        offset: null,
        assertion: null
      }
    }, s = e, a; s && s.parentNode && s.parentNode.nodeType != iu; )
      r ? a = this.filteredStep(s, r) : a = this.step(s), a && i.steps.unshift(a), s = s.parentNode;
    return t != null && t >= 0 && (i.terminal.offset = t, i.steps[i.steps.length - 1].type != "text" && i.steps.push({
      type: "text",
      index: 0
    })), i;
  }
  equalStep(e, t) {
    return !e || !t ? !1 : e.index === t.index && e.id === t.id && e.type === t.type;
  }
  /**
   * Create a CFI object from a Range
   * @param {Range} range
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */
  fromRange(e, t, r) {
    var i = {
      range: !1,
      base: {},
      path: {},
      start: null,
      end: null
    }, s = e.startContainer, a = e.endContainer, o = e.startOffset, u = e.endOffset, h = !1;
    if (r && (h = s.ownerDocument.querySelector("." + r) != null), typeof t == "string" ? (i.base = this.parseComponent(t), i.spinePos = i.base.steps[1].index) : typeof t == "object" && (i.base = t), e.collapsed)
      h && (o = this.patchOffset(s, o, r)), i.path = this.pathTo(s, o, r);
    else {
      i.range = !0, h && (o = this.patchOffset(s, o, r)), i.start = this.pathTo(s, o, r), h && (u = this.patchOffset(a, u, r)), i.end = this.pathTo(a, u, r), i.path = {
        steps: [],
        terminal: null
      };
      var f = i.start.steps.length, c;
      for (c = 0; c < f && this.equalStep(i.start.steps[c], i.end.steps[c]); c++)
        c === f - 1 ? i.start.terminal === i.end.terminal && (i.path.steps.push(i.start.steps[c]), i.range = !1) : i.path.steps.push(i.start.steps[c]);
      i.start.steps = i.start.steps.slice(i.path.steps.length), i.end.steps = i.end.steps.slice(i.path.steps.length);
    }
    return i;
  }
  /**
   * Create a CFI object from a Node
   * @param {Node} anchor
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */
  fromNode(e, t, r) {
    var i = {
      range: !1,
      base: {},
      path: {},
      start: null,
      end: null
    };
    return typeof t == "string" ? (i.base = this.parseComponent(t), i.spinePos = i.base.steps[1].index) : typeof t == "object" && (i.base = t), i.path = this.pathTo(e, null, r), i;
  }
  filter(e, t) {
    var r, i, s, a, o, u = !1;
    return e.nodeType === Ot ? (u = !0, s = e.parentNode, r = e.parentNode.classList.contains(t)) : (u = !1, r = e.classList.contains(t)), r && u ? (a = s.previousSibling, o = s.nextSibling, a && a.nodeType === Ot ? i = a : o && o.nodeType === Ot && (i = o), i || e) : r && !u ? !1 : e;
  }
  patchOffset(e, t, r) {
    if (e.nodeType != Ot)
      throw new Error("Anchor must be a text node");
    var i = e, s = t;
    for (e.parentNode.classList.contains(r) && (i = e.parentNode); i.previousSibling; ) {
      if (i.previousSibling.nodeType === pr)
        if (i.previousSibling.classList.contains(r))
          s += i.previousSibling.textContent.length;
        else
          break;
      else
        s += i.previousSibling.textContent.length;
      i = i.previousSibling;
    }
    return s;
  }
  normalizedMap(e, t, r) {
    var i = {}, s = -1, a, o = e.length, u, h;
    for (a = 0; a < o; a++)
      u = e[a].nodeType, u === pr && e[a].classList.contains(r) && (u = Ot), a > 0 && u === Ot && h === Ot ? i[a] = s : t === u && (s = s + 1, i[a] = s), h = u;
    return i;
  }
  position(e) {
    var t, r;
    return e.nodeType === pr ? (t = e.parentNode.children, t || (t = Gi(e.parentNode)), r = Array.prototype.indexOf.call(t, e)) : (t = this.textNodes(e.parentNode), r = t.indexOf(e)), r;
  }
  filteredPosition(e, t) {
    var r, i, s;
    return e.nodeType === pr ? (r = e.parentNode.children, s = this.normalizedMap(r, pr, t)) : (r = e.parentNode.childNodes, e.parentNode.classList.contains(t) && (e = e.parentNode, r = e.parentNode.childNodes), s = this.normalizedMap(r, Ot, t)), i = Array.prototype.indexOf.call(r, e), s[i];
  }
  stepsToXpath(e) {
    var t = [".", "*"];
    return e.forEach(function(r) {
      var i = r.index + 1;
      r.id ? t.push("*[position()=" + i + " and @id='" + r.id + "']") : r.type === "text" ? t.push("text()[" + i + "]") : t.push("*[" + i + "]");
    }), t.join("/");
  }
  /*
  
  	To get the last step if needed:
  
  	// Get the terminal step
  	lastStep = steps[steps.length-1];
  	// Get the query string
  	query = this.stepsToQuery(steps);
  	// Find the containing element
  	startContainerParent = doc.querySelector(query);
  	// Find the text node within that element
  	if(startContainerParent && lastStep.type == "text") {
  		container = startContainerParent.childNodes[lastStep.index];
  	}
  	*/
  stepsToQuerySelector(e) {
    var t = ["html"];
    return e.forEach(function(r) {
      var i = r.index + 1;
      r.id ? t.push("#" + r.id) : r.type === "text" || t.push("*:nth-child(" + i + ")");
    }), t.join(">");
  }
  textNodes(e, t) {
    return Array.prototype.slice.call(e.childNodes).filter(function(r) {
      return r.nodeType === Ot ? !0 : !!(t && r.classList.contains(t));
    });
  }
  walkToNode(e, t, r) {
    var i = t || document, s = i.documentElement, a, o, u = e.length, h;
    for (h = 0; h < u && (o = e[h], o.type === "element" ? o.id ? s = i.getElementById(o.id) : (a = s.children || Gi(s), s = a[o.index]) : o.type === "text" && (s = this.textNodes(s, r)[o.index]), !!s); h++)
      ;
    return s;
  }
  findNode(e, t, r) {
    var i = t || document, s, a;
    return !r && typeof i.evaluate < "u" ? (a = this.stepsToXpath(e), s = i.evaluate(a, i, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) : r ? s = this.walkToNode(e, i, r) : s = this.walkToNode(e, i), s;
  }
  fixMiss(e, t, r, i) {
    var s = this.findNode(e.slice(0, -1), r, i), a = s.childNodes, o = this.normalizedMap(a, Ot, i), u, h, f = e[e.length - 1].index;
    for (let c in o) {
      if (!o.hasOwnProperty(c))
        return;
      if (o[c] === f)
        if (u = a[c], h = u.textContent.length, t > h)
          t = t - h;
        else {
          u.nodeType === pr ? s = u.childNodes[0] : s = u;
          break;
        }
    }
    return {
      container: s,
      offset: t
    };
  }
  /**
   * Creates a DOM range representing a CFI
   * @param {document} _doc document referenced in the base
   * @param {string} [ignoreClass]
   * @return {Range}
   */
  toRange(e, t) {
    var r = e || document, i, s, a, o, u, h = this, f, c, w = t ? r.querySelector("." + t) != null : !1, m;
    if (typeof r.createRange < "u" ? i = r.createRange() : i = new Qs(), h.range ? (s = h.start, f = h.path.steps.concat(s.steps), o = this.findNode(f, r, w ? t : null), a = h.end, c = h.path.steps.concat(a.steps), u = this.findNode(c, r, w ? t : null)) : (s = h.path, f = h.path.steps, o = this.findNode(h.path.steps, r, w ? t : null)), o)
      try {
        s.terminal.offset != null ? i.setStart(o, s.terminal.offset) : i.setStart(o, 0);
      } catch {
        m = this.fixMiss(f, s.terminal.offset, r, w ? t : null), i.setStart(m.container, m.offset);
      }
    else
      return console.log("No startContainer found for", this.toString()), null;
    if (u)
      try {
        a.terminal.offset != null ? i.setEnd(u, a.terminal.offset) : i.setEnd(u, 0);
      } catch {
        m = this.fixMiss(c, h.end.terminal.offset, r, w ? t : null), i.setEnd(m.container, m.offset);
      }
    return i;
  }
  /**
   * Check if a string is wrapped with "epubcfi()"
   * @param {string} str
   * @returns {boolean}
   */
  isCfiString(e) {
    return typeof e == "string" && e.indexOf("epubcfi(") === 0 && e[e.length - 1] === ")";
  }
  generateChapterComponent(e, t, r) {
    var i = parseInt(t), s = (e + 1) * 2, a = "/" + s + "/";
    return a += (i + 1) * 2, r && (a += "[" + r + "]"), a;
  }
  /**
   * Collapse a CFI Range to a single CFI Position
   * @param {boolean} [toStart=false]
   */
  collapse(e) {
    this.range && (this.range = !1, e ? (this.path.steps = this.path.steps.concat(this.start.steps), this.path.terminal = this.start.terminal) : (this.path.steps = this.path.steps.concat(this.end.steps), this.path.terminal = this.end.terminal));
  }
}
class Ft {
  constructor(e) {
    this.context = e || this, this.hooks = [];
  }
  /**
   * Adds a function to be run before a hook completes
   * @example this.content.register(function(){...});
   */
  register() {
    for (var e = 0; e < arguments.length; ++e)
      if (typeof arguments[e] == "function")
        this.hooks.push(arguments[e]);
      else
        for (var t = 0; t < arguments[e].length; ++t)
          this.hooks.push(arguments[e][t]);
  }
  /**
   * Removes a function
   * @example this.content.deregister(function(){...});
   */
  deregister(e) {
    let t;
    for (let r = 0; r < this.hooks.length; r++)
      if (t = this.hooks[r], t === e) {
        this.hooks.splice(r, 1);
        break;
      }
  }
  /**
   * Triggers a hook to run all functions
   * @example this.content.trigger(args).then(function(){...});
   */
  trigger() {
    var e = arguments, t = this.context, r = [];
    return this.hooks.forEach(function(i) {
      try {
        var s = i.apply(t, e);
      } catch (a) {
        console.log(a);
      }
      s && typeof s.then == "function" && r.push(s);
    }), Promise.all(r);
  }
  // Adds a function to be run before a hook completes
  list() {
    return this.hooks;
  }
  clear() {
    return this.hooks = [];
  }
}
function ta(n, e) {
  var t, r, i = e.url, s = i.indexOf("://") > -1;
  n && (r = Je(n, "head"), t = Je(r, "base"), t || (t = n.createElement("base"), r.insertBefore(t, r.firstChild)), !s && window && window.location && (i = window.location.origin + i), t.setAttribute("href", i));
}
function nu(n, e) {
  var t, r, i = e.canonical;
  n && (t = Je(n, "head"), r = Je(t, "link[rel='canonical']"), r ? r.setAttribute("href", i) : (r = n.createElement("link"), r.setAttribute("rel", "canonical"), r.setAttribute("href", i), t.appendChild(r)));
}
function su(n, e) {
  var t, r, i = e.idref;
  n && (t = Je(n, "head"), r = Je(t, "link[property='dc.identifier']"), r ? r.setAttribute("content", i) : (r = n.createElement("meta"), r.setAttribute("name", "dc.identifier"), r.setAttribute("content", i), t.appendChild(r)));
}
function au(n, e) {
  var t = n.querySelectorAll("a[href]");
  if (t.length)
    for (var r = Je(n.ownerDocument, "base"), i = r ? r.getAttribute("href") : void 0, s = (function(o) {
      var u = o.getAttribute("href");
      if (u.indexOf("mailto:") !== 0) {
        var h = u.indexOf("://") > -1;
        if (h)
          o.setAttribute("target", "_blank");
        else {
          var f;
          try {
            f = new Bt(u, i);
          } catch {
          }
          o.onclick = function() {
            return f && f.hash ? e(f.Path.path + f.hash) : e(f ? f.Path.path : u), !1;
          };
        }
      }
    }).bind(this), a = 0; a < t.length; a++)
      s(t[a]);
}
function Gn(n, e, t) {
  return e.forEach(function(r, i) {
    r && t[i] && (r = r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), n = n.replace(new RegExp(r, "g"), t[i]));
  }), n;
}
function zr(n, e, t, r) {
  var i = typeof window < "u" ? window.URL : !1, s = i ? "blob" : "arraybuffer", a = new Be(), o = new XMLHttpRequest(), u = XMLHttpRequest.prototype, h;
  "overrideMimeType" in u || Object.defineProperty(u, "overrideMimeType", {
    value: function() {
    }
  }), t && (o.withCredentials = !0), o.onreadystatechange = c, o.onerror = f, o.open("GET", n, !0);
  for (h in r)
    o.setRequestHeader(h, r[h]);
  e == "json" && o.setRequestHeader("Accept", "application/json"), e || (e = new Xt(n).extension), e == "blob" && (o.responseType = s), Pr(e) && o.overrideMimeType("text/xml"), e == "binary" && (o.responseType = "arraybuffer"), o.send();
  function f(w) {
    a.reject(w);
  }
  function c() {
    if (this.readyState === XMLHttpRequest.DONE) {
      var w = !1;
      if ((this.responseType === "" || this.responseType === "document") && (w = this.responseXML), this.status === 200 || this.status === 0 || w) {
        var m;
        if (!this.response && !w)
          return a.reject({
            status: this.status,
            message: "Empty Response",
            stack: new Error().stack
          }), a.promise;
        if (this.status === 403)
          return a.reject({
            status: this.status,
            response: this.response,
            message: "Forbidden",
            stack: new Error().stack
          }), a.promise;
        w ? m = this.responseXML : Pr(e) ? m = Wt(this.response, "text/xml") : e == "xhtml" ? m = Wt(this.response, "application/xhtml+xml") : e == "html" || e == "htm" ? m = Wt(this.response, "text/html") : e == "json" ? m = JSON.parse(this.response) : e == "blob" ? i ? m = this.response : m = new Blob([this.response]) : m = this.response, a.resolve(m);
      } else
        a.reject({
          status: this.status,
          message: this.response,
          stack: new Error().stack
        });
    }
  }
  return a.promise;
}
class ou {
  constructor(e, t) {
    this.idref = e.idref, this.linear = e.linear === "yes", this.properties = e.properties, this.index = e.index, this.href = e.href, this.url = e.url, this.canonical = e.canonical, this.next = e.next, this.prev = e.prev, this.cfiBase = e.cfiBase, t ? this.hooks = t : (this.hooks = {}, this.hooks.serialize = new Ft(this), this.hooks.content = new Ft(this)), this.document = void 0, this.contents = void 0, this.output = void 0;
  }
  /**
   * Load the section from its url
   * @param  {method} [_request] a request method to use for loading
   * @return {document} a promise with the xml document
   */
  load(e) {
    var t = e || this.request || zr, r = new Be(), i = r.promise;
    return this.contents ? r.resolve(this.contents) : t(this.url).then((function(s) {
      return this.document = s, this.contents = s.documentElement, this.hooks.content.trigger(this.document, this);
    }).bind(this)).then((function() {
      r.resolve(this.contents);
    }).bind(this)).catch(function(s) {
      r.reject(s);
    }), i;
  }
  /**
   * Adds a base tag for resolving urls in the section
   * @private
   */
  base() {
    return ta(this.document, this);
  }
  /**
   * Render the contents of a section
   * @param  {method} [_request] a request method to use for loading
   * @return {string} output a serialized XML Document
   */
  render(e) {
    var t = new Be(), r = t.promise;
    return this.output, this.load(e).then((function(i) {
      var s = typeof navigator < "u" && navigator.userAgent || "", a = s.indexOf("Trident") >= 0, o;
      typeof XMLSerializer > "u" || a ? o = Ws : o = XMLSerializer;
      var u = new o();
      return this.output = u.serializeToString(i), this.output;
    }).bind(this)).then((function() {
      return this.hooks.serialize.trigger(this.output, this);
    }).bind(this)).then((function() {
      t.resolve(this.output);
    }).bind(this)).catch(function(i) {
      t.reject(i);
    }), r;
  }
  /**
   * Find a string in a section
   * @param  {string} _query The query string to find
   * @return {object[]} A list of matches, with form {cfi, excerpt}
   */
  find(e) {
    var t = this, r = [], i = e.toLowerCase(), s = function(a) {
      for (var o = a.textContent.toLowerCase(), u = t.document.createRange(), h, f, c = -1, w, m = 150; f != -1; )
        f = o.indexOf(i, c + 1), f != -1 && (u = t.document.createRange(), u.setStart(a, f), u.setEnd(a, f + i.length), h = t.cfiFromRange(u), a.textContent.length < m ? w = a.textContent : (w = a.textContent.substring(f - m / 2, f + m / 2), w = "..." + w + "..."), r.push({
          cfi: h,
          excerpt: w
        })), c = f;
    };
    return hi(t.document, function(a) {
      s(a);
    }), r;
  }
  /**
   * Search a string in multiple sequential Element of the section. If the document.createTreeWalker api is missed(eg: IE8), use `find` as a fallback.
   * @param  {string} _query The query string to search
   * @param  {int} maxSeqEle The maximum number of Element that are combined for search, default value is 5.
   * @return {object[]} A list of matches, with form {cfi, excerpt}
   */
  search(e, t = 5) {
    if (typeof document.createTreeWalker > "u")
      return this.find(e);
    let r = [];
    const i = 150, s = this, a = e.toLowerCase(), o = function(c) {
      const S = c.reduce((N, p) => N + p.textContent, "").toLowerCase().indexOf(a);
      if (S != -1) {
        const p = S + a.length;
        let v = 0, y = 0;
        if (S < c[0].length) {
          let A;
          for (; v < c.length - 1 && (y += c[v].length, !(p <= y)); )
            v += 1;
          let k = c[0], b = c[v], C = s.document.createRange();
          C.setStart(k, S);
          let T = c.slice(0, v).reduce((z, M) => z + M.textContent.length, 0);
          C.setEnd(b, T > p ? p : p - T), A = s.cfiFromRange(C);
          let R = c.slice(0, v + 1).reduce((z, M) => z + M.textContent, "");
          R.length > i && (R = R.substring(S - i / 2, S + i / 2), R = "..." + R + "..."), r.push({
            cfi: A,
            excerpt: R
          });
        }
      }
    }, u = document.createTreeWalker(s.document, NodeFilter.SHOW_TEXT, null, !1);
    let h, f = [];
    for (; h = u.nextNode(); )
      f.push(h), f.length == t && (o(f.slice(0, t)), f = f.slice(1, t));
    return f.length > 0 && o(f), r;
  }
  /**
  * Reconciles the current chapters layout properties with
  * the global layout properties.
  * @param {object} globalLayout  The global layout settings object, chapter properties string
  * @return {object} layoutProperties Object with layout properties
  */
  reconcileLayoutSettings(e) {
    var t = {
      layout: e.layout,
      spread: e.spread,
      orientation: e.orientation
    };
    return this.properties.forEach(function(r) {
      var i = r.replace("rendition:", ""), s = i.indexOf("-"), a, o;
      s != -1 && (a = i.slice(0, s), o = i.slice(s + 1), t[a] = o);
    }), t;
  }
  /**
   * Get a CFI from a Range in the Section
   * @param  {range} _range
   * @return {string} cfi an EpubCFI string
   */
  cfiFromRange(e) {
    return new Fe(e, this.cfiBase).toString();
  }
  /**
   * Get a CFI from an Element in the Section
   * @param  {element} el
   * @return {string} cfi an EpubCFI string
   */
  cfiFromElement(e) {
    return new Fe(e, this.cfiBase).toString();
  }
  /**
   * Unload the section document
   */
  unload() {
    this.document = void 0, this.contents = void 0, this.output = void 0;
  }
  destroy() {
    this.unload(), this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this.idref = void 0, this.linear = void 0, this.properties = void 0, this.index = void 0, this.href = void 0, this.url = void 0, this.next = void 0, this.prev = void 0, this.cfiBase = void 0;
  }
}
class uu {
  constructor() {
    this.spineItems = [], this.spineByHref = {}, this.spineById = {}, this.hooks = {}, this.hooks.serialize = new Ft(), this.hooks.content = new Ft(), this.hooks.content.register(ta), this.hooks.content.register(nu), this.hooks.content.register(su), this.epubcfi = new Fe(), this.loaded = !1, this.items = void 0, this.manifest = void 0, this.spineNodeIndex = void 0, this.baseUrl = void 0, this.length = void 0;
  }
  /**
   * Unpack items from a opf into spine items
   * @param  {Packaging} _package
   * @param  {method} resolver URL resolver
   * @param  {method} canonical Resolve canonical url
   */
  unpack(e, t, r) {
    this.items = e.spine, this.manifest = e.manifest, this.spineNodeIndex = e.spineNodeIndex, this.baseUrl = e.baseUrl || e.basePath || "", this.length = this.items.length, this.items.forEach((i, s) => {
      var a = this.manifest[i.idref], o;
      i.index = s, i.cfiBase = this.epubcfi.generateChapterComponent(this.spineNodeIndex, i.index, i.id), i.href && (i.url = t(i.href, !0), i.canonical = r(i.href)), a && (i.href = a.href, i.url = t(i.href, !0), i.canonical = r(i.href), a.properties.length && i.properties.push.apply(i.properties, a.properties)), i.linear === "yes" ? (i.prev = (function() {
        let u = i.index;
        for (; u > 0; ) {
          let h = this.get(u - 1);
          if (h && h.linear)
            return h;
          u -= 1;
        }
      }).bind(this), i.next = (function() {
        let u = i.index;
        for (; u < this.spineItems.length - 1; ) {
          let h = this.get(u + 1);
          if (h && h.linear)
            return h;
          u += 1;
        }
      }).bind(this)) : (i.prev = function() {
      }, i.next = function() {
      }), o = new ou(i, this.hooks), this.append(o);
    }), this.loaded = !0;
  }
  /**
   * Get an item from the spine
   * @param  {string|number} [target]
   * @return {Section} section
   * @example spine.get();
   * @example spine.get(1);
   * @example spine.get("chap1.html");
   * @example spine.get("#id1234");
   */
  get(e) {
    var t = 0;
    if (typeof e > "u")
      for (; t < this.spineItems.length; ) {
        let r = this.spineItems[t];
        if (r && r.linear)
          break;
        t += 1;
      }
    else
      this.epubcfi.isCfiString(e) ? t = new Fe(e).spinePos : typeof e == "number" || isNaN(e) === !1 ? t = e : typeof e == "string" && e.indexOf("#") === 0 ? t = this.spineById[e.substring(1)] : typeof e == "string" && (e = e.split("#")[0], t = this.spineByHref[e] || this.spineByHref[encodeURI(e)]);
    return this.spineItems[t] || null;
  }
  /**
   * Append a Section to the Spine
   * @private
   * @param  {Section} section
   */
  append(e) {
    var t = this.spineItems.length;
    return e.index = t, this.spineItems.push(e), this.spineByHref[decodeURI(e.href)] = t, this.spineByHref[encodeURI(e.href)] = t, this.spineByHref[e.href] = t, this.spineById[e.idref] = t, t;
  }
  /**
   * Prepend a Section to the Spine
   * @private
   * @param  {Section} section
   */
  prepend(e) {
    return this.spineByHref[e.href] = 0, this.spineById[e.idref] = 0, this.spineItems.forEach(function(t, r) {
      t.index = r;
    }), 0;
  }
  // insert(section, index) {
  //
  // };
  /**
   * Remove a Section from the Spine
   * @private
   * @param  {Section} section
   */
  remove(e) {
    var t = this.spineItems.indexOf(e);
    if (t > -1)
      return delete this.spineByHref[e.href], delete this.spineById[e.idref], this.spineItems.splice(t, 1);
  }
  /**
   * Loop over the Sections in the Spine
   * @return {method} forEach
   */
  each() {
    return this.spineItems.forEach.apply(this.spineItems, arguments);
  }
  /**
   * Find the first Section in the Spine
   * @return {Section} first section
   */
  first() {
    let e = 0;
    do {
      let t = this.get(e);
      if (t && t.linear)
        return t;
      e += 1;
    } while (e < this.spineItems.length);
  }
  /**
   * Find the last Section in the Spine
   * @return {Section} last section
   */
  last() {
    let e = this.spineItems.length - 1;
    do {
      let t = this.get(e);
      if (t && t.linear)
        return t;
      e -= 1;
    } while (e >= 0);
  }
  destroy() {
    this.each((e) => e.destroy()), this.spineItems = void 0, this.spineByHref = void 0, this.spineById = void 0, this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this.epubcfi = void 0, this.loaded = !1, this.items = void 0, this.manifest = void 0, this.spineNodeIndex = void 0, this.baseUrl = void 0, this.length = void 0;
  }
}
class pn {
  constructor(e) {
    this._q = [], this.context = e, this.tick = fn, this.running = !1, this.paused = !1;
  }
  /**
   * Add an item to the queue
   * @return {Promise}
   */
  enqueue() {
    var e, t, r, i = [].shift.call(arguments), s = arguments;
    if (!i)
      throw new Error("No Task Provided");
    return typeof i == "function" ? (e = new Be(), t = e.promise, r = {
      task: i,
      args: s,
      //"context"  : context,
      deferred: e,
      promise: t
    }) : r = {
      promise: i
    }, this._q.push(r), this.paused == !1 && !this.running && this.run(), r.promise;
  }
  /**
   * Run one item
   * @return {Promise}
   */
  dequeue() {
    var e, t, r;
    if (this._q.length && !this.paused) {
      if (e = this._q.shift(), t = e.task, t)
        return r = t.apply(this.context, e.args), r && typeof r.then == "function" ? r.then((function() {
          e.deferred.resolve.apply(this.context, arguments);
        }).bind(this), (function() {
          e.deferred.reject.apply(this.context, arguments);
        }).bind(this)) : (e.deferred.resolve.apply(this.context, r), e.promise);
      if (e.promise)
        return e.promise;
    } else
      return e = new Be(), e.deferred.resolve(), e.promise;
  }
  // Run All Immediately
  dump() {
    for (; this._q.length; )
      this.dequeue();
  }
  /**
   * Run all tasks sequentially, at convince
   * @return {Promise}
   */
  run() {
    return this.running || (this.running = !0, this.defered = new Be()), this.tick.call(window, () => {
      this._q.length ? this.dequeue().then((function() {
        this.run();
      }).bind(this)) : (this.defered.resolve(), this.running = void 0);
    }), this.paused == !0 && (this.paused = !1), this.defered.promise;
  }
  /**
   * Flush all, as quickly as possible
   * @return {Promise}
   */
  flush() {
    if (this.running)
      return this.running;
    if (this._q.length)
      return this.running = this.dequeue().then((function() {
        return this.running = void 0, this.flush();
      }).bind(this)), this.running;
  }
  /**
   * Clear all items in wait
   */
  clear() {
    this._q = [];
  }
  /**
   * Get the number of tasks in the queue
   * @return {number} tasks
   */
  length() {
    return this._q.length;
  }
  /**
   * Pause a running queue
   */
  pause() {
    this.paused = !0;
  }
  /**
   * End the queue
   */
  stop() {
    this._q = [], this.running = !1, this.paused = !0;
  }
}
const wi = "0.3", ti = ["keydown", "keyup", "keypressed", "mouseup", "mousedown", "mousemove", "click", "touchend", "touchstart", "touchmove"], le = {
  BOOK: {
    OPEN_FAILED: "openFailed"
  },
  CONTENTS: {
    EXPAND: "expand",
    RESIZE: "resize",
    SELECTED: "selected",
    SELECTED_RANGE: "selectedRange",
    LINK_CLICKED: "linkClicked"
  },
  LOCATIONS: {
    CHANGED: "changed"
  },
  MANAGERS: {
    RESIZE: "resize",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    ADDED: "added",
    SCROLL: "scroll",
    SCROLLED: "scrolled",
    REMOVED: "removed"
  },
  VIEWS: {
    AXIS: "axis",
    WRITING_MODE: "writingMode",
    LOAD_ERROR: "loaderror",
    RENDERED: "rendered",
    RESIZED: "resized",
    DISPLAYED: "displayed",
    SHOWN: "shown",
    HIDDEN: "hidden",
    MARK_CLICKED: "markClicked"
  },
  RENDITION: {
    STARTED: "started",
    ATTACHED: "attached",
    DISPLAYED: "displayed",
    DISPLAY_ERROR: "displayerror",
    RENDERED: "rendered",
    REMOVED: "removed",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    LOCATION_CHANGED: "locationChanged",
    RELOCATED: "relocated",
    MARK_CLICKED: "markClicked",
    SELECTED: "selected",
    LAYOUT: "layout"
  },
  LAYOUT: {
    UPDATED: "updated"
  },
  ANNOTATION: {
    ATTACH: "attach",
    DETACH: "detach"
  }
};
class ra {
  constructor(e, t, r) {
    this.spine = e, this.request = t, this.pause = r || 100, this.q = new pn(this), this.epubcfi = new Fe(), this._locations = [], this._locationsWords = [], this.total = 0, this.break = 150, this._current = 0, this._wordCounter = 0, this.currentLocation = "", this._currentCfi = "", this.processingTimeout = void 0;
  }
  /**
   * Load all of sections in the book to generate locations
   * @param  {int} chars how many chars to split on
   * @return {Promise<Array<string>>} locations
   */
  generate(e) {
    return e && (this.break = e), this.q.pause(), this.spine.each((function(t) {
      t.linear && this.q.enqueue(this.process.bind(this), t);
    }).bind(this)), this.q.run().then((function() {
      return this.total = this._locations.length - 1, this._currentCfi && (this.currentLocation = this._currentCfi), this._locations;
    }).bind(this));
  }
  createRange() {
    return {
      startContainer: void 0,
      startOffset: void 0,
      endContainer: void 0,
      endOffset: void 0
    };
  }
  process(e) {
    return e.load(this.request).then((function(t) {
      var r = new Be(), i = this.parse(t, e.cfiBase);
      return this._locations = this._locations.concat(i), e.unload(), this.processingTimeout = setTimeout(() => r.resolve(i), this.pause), r.promise;
    }).bind(this));
  }
  parse(e, t, r) {
    var i = [], s, a = e.ownerDocument, o = Je(a, "body"), u = 0, h, f = r || this.break, c = function(w) {
      var m = w.length, S, N = 0;
      if (w.textContent.trim().length === 0)
        return !1;
      for (u == 0 && (s = this.createRange(), s.startContainer = w, s.startOffset = 0), S = f - u, S > m && (u += m, N = m); N < m; )
        if (S = f - u, u === 0 && (N += 1, s = this.createRange(), s.startContainer = w, s.startOffset = N), N + S >= m)
          u += m - N, N = m;
        else {
          N += S, s.endContainer = w, s.endOffset = N;
          let p = new Fe(s, t).toString();
          i.push(p), u = 0;
        }
      h = w;
    };
    if (hi(o, c.bind(this)), s && s.startContainer && h) {
      s.endContainer = h, s.endOffset = h.length;
      let w = new Fe(s, t).toString();
      i.push(w), u = 0;
    }
    return i;
  }
  /**
   * Load all of sections in the book to generate locations
   * @param  {string} startCfi start position
   * @param  {int} wordCount how many words to split on
   * @param  {int} count result count
   * @return {object} locations
   */
  generateFromWords(e, t, r) {
    var i = e ? new Fe(e) : void 0;
    return this.q.pause(), this._locationsWords = [], this._wordCounter = 0, this.spine.each((function(s) {
      s.linear && (i ? s.index >= i.spinePos && this.q.enqueue(this.processWords.bind(this), s, t, i, r) : this.q.enqueue(this.processWords.bind(this), s, t, i, r));
    }).bind(this)), this.q.run().then((function() {
      return this._currentCfi && (this.currentLocation = this._currentCfi), this._locationsWords;
    }).bind(this));
  }
  processWords(e, t, r, i) {
    return i && this._locationsWords.length >= i ? Promise.resolve() : e.load(this.request).then((function(s) {
      var a = new Be(), o = this.parseWords(s, e, t, r), u = i - this._locationsWords.length;
      return this._locationsWords = this._locationsWords.concat(o.length >= i ? o.slice(0, u) : o), e.unload(), this.processingTimeout = setTimeout(() => a.resolve(o), this.pause), a.promise;
    }).bind(this));
  }
  //http://stackoverflow.com/questions/18679576/counting-words-in-string
  countWords(e) {
    return e = e.replace(/(^\s*)|(\s*$)/gi, ""), e = e.replace(/[ ]{2,}/gi, " "), e = e.replace(/\n /, `
`), e.split(" ").length;
  }
  parseWords(e, t, r, i) {
    var s = t.cfiBase, a = [], o = e.ownerDocument, u = Je(o, "body"), h = r, f = i ? i.spinePos !== t.index : !0, c;
    i && t.index === i.spinePos && (c = i.findNode(i.range ? i.path.steps.concat(i.start.steps) : i.path.steps, e.ownerDocument));
    var w = function(m) {
      if (!f)
        if (m === c)
          f = !0;
        else
          return !1;
      if (m.textContent.length < 10 && m.textContent.trim().length === 0)
        return !1;
      var S = this.countWords(m.textContent), N, p = 0;
      if (S === 0)
        return !1;
      for (N = h - this._wordCounter, N > S && (this._wordCounter += S, p = S); p < S; )
        if (N = h - this._wordCounter, p + N >= S)
          this._wordCounter += S - p, p = S;
        else {
          p += N;
          let v = new Fe(m, s);
          a.push({ cfi: v.toString(), wordCount: this._wordCounter }), this._wordCounter = 0;
        }
    };
    return hi(u, w.bind(this)), a;
  }
  /**
   * Get a location from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */
  locationFromCfi(e) {
    let t;
    return Fe.prototype.isCfiString(e) && (e = new Fe(e)), this._locations.length === 0 ? -1 : (t = xr(e, this._locations, this.epubcfi.compare), t > this.total ? this.total : t);
  }
  /**
   * Get a percentage position in locations from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */
  percentageFromCfi(e) {
    if (this._locations.length === 0)
      return null;
    var t = this.locationFromCfi(e);
    return this.percentageFromLocation(t);
  }
  /**
   * Get a percentage position from a location index
   * @param {number} location
   * @return {number}
   */
  percentageFromLocation(e) {
    return !e || !this.total ? 0 : e / this.total;
  }
  /**
   * Get an EpubCFI from location index
   * @param {number} loc
   * @return {EpubCFI} cfi
   */
  cfiFromLocation(e) {
    var t = -1;
    return typeof e != "number" && (e = parseInt(e)), e >= 0 && e < this._locations.length && (t = this._locations[e]), t;
  }
  /**
   * Get an EpubCFI from location percentage
   * @param {number} percentage
   * @return {EpubCFI} cfi
   */
  cfiFromPercentage(e) {
    let t;
    if (e > 1 && console.warn("Normalize cfiFromPercentage value to between 0 - 1"), e >= 1) {
      let r = new Fe(this._locations[this.total]);
      return r.collapse(), r.toString();
    }
    return t = Math.ceil(this.total * e), this.cfiFromLocation(t);
  }
  /**
   * Load locations from JSON
   * @param {json} locations
   */
  load(e) {
    return typeof e == "string" ? this._locations = JSON.parse(e) : this._locations = e, this.total = this._locations.length - 1, this._locations;
  }
  /**
   * Save locations to JSON
   * @return {json}
   */
  save() {
    return JSON.stringify(this._locations);
  }
  getCurrent() {
    return this._current;
  }
  setCurrent(e) {
    var t;
    if (typeof e == "string")
      this._currentCfi = e;
    else if (typeof e == "number")
      this._current = e;
    else
      return;
    this._locations.length !== 0 && (typeof e == "string" ? (t = this.locationFromCfi(e), this._current = t) : t = e, this.emit(le.LOCATIONS.CHANGED, {
      percentage: this.percentageFromLocation(t)
    }));
  }
  /**
   * Get the current location
   */
  get currentLocation() {
    return this._current;
  }
  /**
   * Set the current location
   */
  set currentLocation(e) {
    this.setCurrent(e);
  }
  /**
   * Locations length
   */
  length() {
    return this._locations.length;
  }
  destroy() {
    this.spine = void 0, this.request = void 0, this.pause = void 0, this.q.stop(), this.q = void 0, this.epubcfi = void 0, this._locations = void 0, this.total = void 0, this.break = void 0, this._current = void 0, this.currentLocation = void 0, this._currentCfi = void 0, clearTimeout(this.processingTimeout);
  }
}
qt(ra.prototype);
class lu {
  constructor(e) {
    this.packagePath = "", this.directory = "", this.encoding = "", e && this.parse(e);
  }
  /**
   * Parse the Container XML
   * @param  {document} containerDocument
   */
  parse(e) {
    var t;
    if (!e)
      throw new Error("Container File Not Found");
    if (t = Je(e, "rootfile"), !t)
      throw new Error("No RootFile Found");
    this.packagePath = t.getAttribute("full-path"), this.directory = tr.dirname(this.packagePath), this.encoding = e.xmlEncoding;
  }
  destroy() {
    this.packagePath = void 0, this.directory = void 0, this.encoding = void 0;
  }
}
class Yn {
  constructor(e) {
    this.manifest = {}, this.navPath = "", this.ncxPath = "", this.coverPath = "", this.spineNodeIndex = 0, this.spine = [], this.metadata = {}, e && this.parse(e);
  }
  /**
   * Parse OPF XML
   * @param  {document} packageDocument OPF XML
   * @return {object} parsed package parts
   */
  parse(e) {
    var t, r, i;
    if (!e)
      throw new Error("Package File Not Found");
    if (t = Je(e, "metadata"), !t)
      throw new Error("No Metadata Found");
    if (r = Je(e, "manifest"), !r)
      throw new Error("No Manifest Found");
    if (i = Je(e, "spine"), !i)
      throw new Error("No Spine Found");
    return this.manifest = this.parseManifest(r), this.navPath = this.findNavPath(r), this.ncxPath = this.findNcxPath(r, i), this.coverPath = this.findCoverPath(e), this.spineNodeIndex = Zs(i), this.spine = this.parseSpine(i, this.manifest), this.uniqueIdentifier = this.findUniqueIdentifier(e), this.metadata = this.parseMetadata(t), this.metadata.direction = i.getAttribute("page-progression-direction"), {
      metadata: this.metadata,
      spine: this.spine,
      manifest: this.manifest,
      navPath: this.navPath,
      ncxPath: this.ncxPath,
      coverPath: this.coverPath,
      spineNodeIndex: this.spineNodeIndex
    };
  }
  /**
   * Parse Metadata
   * @private
   * @param  {node} xml
   * @return {object} metadata
   */
  parseMetadata(e) {
    var t = {};
    return t.title = this.getElementText(e, "title"), t.creator = this.getElementText(e, "creator"), t.description = this.getElementText(e, "description"), t.pubdate = this.getElementText(e, "date"), t.publisher = this.getElementText(e, "publisher"), t.identifier = this.getElementText(e, "identifier"), t.language = this.getElementText(e, "language"), t.rights = this.getElementText(e, "rights"), t.modified_date = this.getPropertyText(e, "dcterms:modified"), t.layout = this.getPropertyText(e, "rendition:layout"), t.orientation = this.getPropertyText(e, "rendition:orientation"), t.flow = this.getPropertyText(e, "rendition:flow"), t.viewport = this.getPropertyText(e, "rendition:viewport"), t.media_active_class = this.getPropertyText(e, "media:active-class"), t.spread = this.getPropertyText(e, "rendition:spread"), t;
  }
  /**
   * Parse Manifest
   * @private
   * @param  {node} manifestXml
   * @return {object} manifest
   */
  parseManifest(e) {
    var t = {}, r = Yt(e, "item"), i = Array.prototype.slice.call(r);
    return i.forEach(function(s) {
      var a = s.getAttribute("id"), o = s.getAttribute("href") || "", u = s.getAttribute("media-type") || "", h = s.getAttribute("media-overlay") || "", f = s.getAttribute("properties") || "";
      t[a] = {
        href: o,
        // "url" : href,
        type: u,
        overlay: h,
        properties: f.length ? f.split(" ") : []
      };
    }), t;
  }
  /**
   * Parse Spine
   * @private
   * @param  {node} spineXml
   * @param  {Packaging.manifest} manifest
   * @return {object} spine
   */
  parseSpine(e, t) {
    var r = [], i = Yt(e, "itemref"), s = Array.prototype.slice.call(i);
    return s.forEach(function(a, o) {
      var u = a.getAttribute("idref"), h = a.getAttribute("properties") || "", f = h.length ? h.split(" ") : [], c = {
        id: a.getAttribute("id"),
        idref: u,
        linear: a.getAttribute("linear") || "yes",
        properties: f,
        // "href" : manifest[Id].href,
        // "url" :  manifest[Id].url,
        index: o
        // "cfiBase" : cfiBase
      };
      r.push(c);
    }), r;
  }
  /**
   * Find Unique Identifier
   * @private
   * @param  {node} packageXml
   * @return {string} Unique Identifier text
   */
  findUniqueIdentifier(e) {
    var t = e.documentElement.getAttribute("unique-identifier");
    if (!t)
      return "";
    var r = e.getElementById(t);
    return r && r.localName === "identifier" && r.namespaceURI === "http://purl.org/dc/elements/1.1/" && r.childNodes.length > 0 ? r.childNodes[0].nodeValue.trim() : "";
  }
  /**
   * Find TOC NAV
   * @private
   * @param {element} manifestNode
   * @return {string}
   */
  findNavPath(e) {
    var t = gr(e, "item", { properties: "nav" });
    return t ? t.getAttribute("href") : !1;
  }
  /**
   * Find TOC NCX
   * media-type="application/x-dtbncx+xml" href="toc.ncx"
   * @private
   * @param {element} manifestNode
   * @param {element} spineNode
   * @return {string}
   */
  findNcxPath(e, t) {
    var r = gr(e, "item", { "media-type": "application/x-dtbncx+xml" }), i;
    return r || (i = t.getAttribute("toc"), i && (r = e.querySelector(`#${i}`))), r ? r.getAttribute("href") : !1;
  }
  /**
   * Find the Cover Path
   * <item properties="cover-image" id="ci" href="cover.svg" media-type="image/svg+xml" />
   * Fallback for Epub 2.0
   * @private
   * @param  {node} packageXml
   * @return {string} href
   */
  findCoverPath(e) {
    var t = Je(e, "package");
    t.getAttribute("version");
    var r = gr(e, "item", { properties: "cover-image" });
    if (r)
      return r.getAttribute("href");
    var i = gr(e, "meta", { name: "cover" });
    if (i) {
      var s = i.getAttribute("content"), a = e.getElementById(s);
      return a ? a.getAttribute("href") : "";
    } else
      return !1;
  }
  /**
   * Get text of a namespaced element
   * @private
   * @param  {node} xml
   * @param  {string} tag
   * @return {string} text
   */
  getElementText(e, t) {
    var r = e.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", t), i;
    return !r || r.length === 0 ? "" : (i = r[0], i.childNodes.length ? i.childNodes[0].nodeValue : "");
  }
  /**
   * Get text by property
   * @private
   * @param  {node} xml
   * @param  {string} property
   * @return {string} text
   */
  getPropertyText(e, t) {
    var r = gr(e, "meta", { property: t });
    return r && r.childNodes.length ? r.childNodes[0].nodeValue : "";
  }
  /**
   * Load JSON Manifest
   * @param  {document} packageDocument OPF XML
   * @return {object} parsed package parts
   */
  load(e) {
    this.metadata = e.metadata;
    let t = e.readingOrder || e.spine;
    return this.spine = t.map((r, i) => (r.index = i, r.linear = r.linear || "yes", r)), e.resources.forEach((r, i) => {
      this.manifest[i] = r, r.rel && r.rel[0] === "cover" && (this.coverPath = r.href);
    }), this.spineNodeIndex = 0, this.toc = e.toc.map((r, i) => (r.label = r.title, r)), {
      metadata: this.metadata,
      spine: this.spine,
      manifest: this.manifest,
      navPath: this.navPath,
      ncxPath: this.ncxPath,
      coverPath: this.coverPath,
      spineNodeIndex: this.spineNodeIndex,
      toc: this.toc
    };
  }
  destroy() {
    this.manifest = void 0, this.navPath = void 0, this.ncxPath = void 0, this.coverPath = void 0, this.spineNodeIndex = void 0, this.spine = void 0, this.metadata = void 0;
  }
}
class Pi {
  constructor(e) {
    this.toc = [], this.tocByHref = {}, this.tocById = {}, this.landmarks = [], this.landmarksByType = {}, this.length = 0, e && this.parse(e);
  }
  /**
   * Parse out the navigation items
   * @param {document} xml navigation html / xhtml / ncx
   */
  parse(e) {
    let t = e.nodeType, r, i;
    t && (r = Je(e, "html"), i = Je(e, "ncx")), t ? r ? (this.toc = this.parseNav(e), this.landmarks = this.parseLandmarks(e)) : i && (this.toc = this.parseNcx(e)) : this.toc = this.load(e), this.length = 0, this.unpack(this.toc);
  }
  /**
   * Unpack navigation items
   * @private
   * @param  {array} toc
   */
  unpack(e) {
    for (var t, r = 0; r < e.length; r++)
      t = e[r], t.href && (this.tocByHref[t.href] = r), t.id && (this.tocById[t.id] = r), this.length++, t.subitems.length && this.unpack(t.subitems);
  }
  /**
   * Get an item from the navigation
   * @param  {string} target
   * @return {object} navItem
   */
  get(e) {
    var t;
    return e ? (e.indexOf("#") === 0 ? t = this.tocById[e.substring(1)] : e in this.tocByHref && (t = this.tocByHref[e]), this.getByIndex(e, t, this.toc)) : this.toc;
  }
  /**
   * Get an item from navigation subitems recursively by index
   * @param  {string} target
   * @param  {number} index
   * @param  {array} navItems
   * @return {object} navItem
   */
  getByIndex(e, t, r) {
    if (r.length === 0)
      return;
    const i = r[t];
    if (i && (e === i.id || e === i.href))
      return i;
    {
      let s;
      for (let a = 0; a < r.length && (s = this.getByIndex(e, t, r[a].subitems), !s); ++a)
        ;
      return s;
    }
  }
  /**
   * Get a landmark by type
   * List of types: https://idpf.github.io/epub-vocabs/structure/
   * @param  {string} type
   * @return {object} landmarkItem
   */
  landmark(e) {
    var t;
    return e ? (t = this.landmarksByType[e], this.landmarks[t]) : this.landmarks;
  }
  /**
   * Parse toc from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */
  parseNav(e) {
    var t = fi(e, "nav", "toc"), r = [];
    if (!t)
      return r;
    let i = mr(t, "ol", !0);
    return i && (r = this.parseNavList(i)), r;
  }
  /**
   * Parses lists in the toc
   * @param  {document} navListHtml
   * @param  {string} parent id
   * @return {array} navigation list
   */
  parseNavList(e, t) {
    const r = [];
    if (!e || !e.children)
      return r;
    for (let i = 0; i < e.children.length; i++) {
      const s = this.navItem(e.children[i], t);
      s && r.push(s);
    }
    return r;
  }
  /**
   * Create a navItem
   * @private
   * @param  {element} item
   * @return {object} navItem
   */
  navItem(e, t) {
    let r = e.getAttribute("id") || void 0, i = mr(e, "a", !0) || mr(e, "span", !0);
    if (!i)
      return;
    let s = i.getAttribute("href") || "";
    r || (r = s);
    let a = i.textContent || "", o = [], u = mr(e, "ol", !0);
    return u && (o = this.parseNavList(u, r)), {
      id: r,
      href: s,
      label: a,
      subitems: o,
      parent: t
    };
  }
  /**
   * Parse landmarks from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} landmarks list
   */
  parseLandmarks(e) {
    var t = fi(e, "nav", "landmarks"), r = t ? Yt(t, "li") : [], i = r.length, s, a = [], o;
    if (!r || i === 0)
      return a;
    for (s = 0; s < i; ++s)
      o = this.landmarkItem(r[s]), o && (a.push(o), this.landmarksByType[o.type] = s);
    return a;
  }
  /**
   * Create a landmarkItem
   * @private
   * @param  {element} item
   * @return {object} landmarkItem
   */
  landmarkItem(e) {
    let t = mr(e, "a", !0);
    if (!t)
      return;
    let r = t.getAttributeNS("http://www.idpf.org/2007/ops", "type") || void 0, i = t.getAttribute("href") || "", s = t.textContent || "";
    return {
      href: i,
      label: s,
      type: r
    };
  }
  /**
   * Parse from a Epub > 3.0 NC
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */
  parseNcx(e) {
    var t = Yt(e, "navPoint"), r = t.length, i, s = {}, a = [], o, u;
    if (!t || r === 0)
      return a;
    for (i = 0; i < r; ++i)
      o = this.ncxItem(t[i]), s[o.id] = o, o.parent ? (u = s[o.parent], u.subitems.push(o)) : a.push(o);
    return a;
  }
  /**
   * Create a ncxItem
   * @private
   * @param  {element} item
   * @return {object} ncxItem
   */
  ncxItem(e) {
    var t = e.getAttribute("id") || !1, r = Je(e, "content"), i = r.getAttribute("src"), s = Je(e, "navLabel"), a = s.textContent ? s.textContent : "", o = [], u = e.parentNode, h;
    return u && (u.nodeName === "navPoint" || u.nodeName.split(":").slice(-1)[0] === "navPoint") && (h = u.getAttribute("id")), {
      id: t,
      href: i,
      label: a,
      subitems: o,
      parent: h
    };
  }
  /**
   * Load Spine Items
   * @param  {object} json the items to be loaded
   * @return {Array} navItems
   */
  load(e) {
    return e.map((t) => (t.label = t.title, t.subitems = t.children ? this.load(t.children) : [], t));
  }
  /**
   * forEach pass through
   * @param  {Function} fn function to run on each item
   * @return {method} forEach loop
   */
  forEach(e) {
    return this.toc.forEach(e);
  }
}
var Nr = {
  application: {
    ecmascript: ["es", "ecma"],
    javascript: "js",
    ogg: "ogx",
    pdf: "pdf",
    postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
    "rdf+xml": "rdf",
    smil: ["smi", "smil"],
    "xhtml+xml": ["xhtml", "xht"],
    xml: ["xml", "xsl", "xsd", "opf", "ncx"],
    zip: "zip",
    "x-httpd-eruby": "rhtml",
    "x-latex": "latex",
    "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
    "x-object": "o",
    "x-shockwave-flash": ["swf", "swfl"],
    "x-silverlight": "scr",
    "epub+zip": "epub",
    "font-tdpfr": "pfr",
    "inkml+xml": ["ink", "inkml"],
    json: "json",
    "jsonml+json": "jsonml",
    "mathml+xml": "mathml",
    "metalink+xml": "metalink",
    mp4: "mp4s",
    // "oebps-package+xml" : "opf",
    "omdoc+xml": "omdoc",
    oxps: "oxps",
    "vnd.amazon.ebook": "azw",
    widget: "wgt",
    // "x-dtbncx+xml" : "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-otf": "otf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": ["ttf", "ttc"],
    "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
    "x-font-woff": "woff",
    "x-mobipocket-ebook": ["prc", "mobi"],
    "x-mspublisher": "pub",
    "x-nzb": "nzb",
    "x-tgif": "obj",
    "xaml+xml": "xaml",
    "xml-dtd": "dtd",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "internet-property-stream": "acx",
    "x-compress": "z",
    "x-compressed": "tgz",
    "x-gzip": "gz"
  },
  audio: {
    flac: "flac",
    midi: ["mid", "midi", "kar", "rmi"],
    mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
    mpegurl: "m3u",
    ogg: ["oga", "ogg", "spx"],
    "x-aiff": ["aif", "aiff", "aifc"],
    "x-ms-wma": "wma",
    "x-wav": "wav",
    adpcm: "adp",
    mp4: "mp4a",
    webm: "weba",
    "x-aac": "aac",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    mid: ["mid", "rmi"]
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: ["jpeg", "jpg", "jpe"],
    pcx: "pcx",
    png: "png",
    "svg+xml": ["svg", "svgz"],
    tiff: ["tiff", "tif"],
    "x-icon": "ico",
    bmp: "bmp",
    webp: "webp",
    "x-pict": ["pic", "pct"],
    "x-tga": "tga",
    "cis-cod": "cod"
  },
  text: {
    "cache-manifest": ["manifest", "appcache"],
    css: "css",
    csv: "csv",
    html: ["html", "htm", "shtml", "stm"],
    mathml: "mml",
    plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
    richtext: "rtx",
    "tab-separated-values": "tsv",
    "x-bibtex": "bib"
  },
  video: {
    mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
    mp4: ["mp4", "mp4v", "mpg4"],
    quicktime: ["qt", "mov"],
    ogg: "ogv",
    "vnd.mpegurl": ["mxu", "m4u"],
    "x-flv": "flv",
    "x-la-asf": ["lsf", "lsx"],
    "x-mng": "mng",
    "x-ms-asf": ["asf", "asx", "asr"],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: ["jpm", "jpgm"],
    mj2: ["mj2", "mjp2"],
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": ["uvu", "uvvu"],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv"
  }
}, hu = function() {
  var n, e, t, r, i = {};
  for (n in Nr)
    if (Nr.hasOwnProperty(n)) {
      for (e in Nr[n])
        if (Nr[n].hasOwnProperty(e))
          if (t = Nr[n][e], typeof t == "string")
            i[t] = n + "/" + e;
          else
            for (r = 0; r < t.length; r++)
              i[t[r]] = n + "/" + e;
    }
  return i;
}(), fu = "text/plain";
function cu(n) {
  return n && hu[n.split(".").pop().toLowerCase()] || fu;
}
const br = { lookup: cu };
class du {
  constructor(e, t) {
    this.settings = {
      replacements: t && t.replacements || "base64",
      archive: t && t.archive,
      resolver: t && t.resolver,
      request: t && t.request
    }, this.process(e);
  }
  /**
   * Process resources
   * @param {Manifest} manifest
   */
  process(e) {
    this.manifest = e, this.resources = Object.keys(e).map(function(t) {
      return e[t];
    }), this.replacementUrls = [], this.html = [], this.assets = [], this.css = [], this.urls = [], this.cssUrls = [], this.split(), this.splitUrls();
  }
  /**
   * Split resources by type
   * @private
   */
  split() {
    this.html = this.resources.filter(function(e) {
      if (e.type === "application/xhtml+xml" || e.type === "text/html")
        return !0;
    }), this.assets = this.resources.filter(function(e) {
      if (e.type !== "application/xhtml+xml" && e.type !== "text/html")
        return !0;
    }), this.css = this.resources.filter(function(e) {
      if (e.type === "text/css")
        return !0;
    });
  }
  /**
   * Convert split resources into Urls
   * @private
   */
  splitUrls() {
    this.urls = this.assets.map((function(e) {
      return e.href;
    }).bind(this)), this.cssUrls = this.css.map(function(e) {
      return e.href;
    });
  }
  /**
   * Create a url to a resource
   * @param {string} url
   * @return {Promise<string>} Promise resolves with url string
   */
  createUrl(e) {
    var t = new Bt(e), r = br.lookup(t.filename);
    return this.settings.archive ? this.settings.archive.createUrl(e, { base64: this.settings.replacements === "base64" }) : this.settings.replacements === "base64" ? this.settings.request(e, "blob").then((i) => Js(i)).then((i) => Zi(i, r)) : this.settings.request(e, "blob").then((i) => li(i, r));
  }
  /**
   * Create blob urls for all the assets
   * @return {Promise}         returns replacement urls
   */
  replacements() {
    if (this.settings.replacements === "none")
      return new Promise((function(t) {
        t(this.urls);
      }).bind(this));
    var e = this.urls.map((t) => {
      var r = this.settings.resolver(t);
      return this.createUrl(r).catch((i) => (console.error(i), null));
    });
    return Promise.all(e).then((t) => (this.replacementUrls = t.filter((r) => typeof r == "string"), t));
  }
  /**
   * Replace URLs in CSS resources
   * @private
   * @param  {Archive} [archive]
   * @param  {method} [resolver]
   * @return {Promise}
   */
  replaceCss(e, t) {
    var r = [];
    return e = e || this.settings.archive, t = t || this.settings.resolver, this.cssUrls.forEach((function(i) {
      var s = this.createCssFile(i, e, t).then((function(a) {
        var o = this.urls.indexOf(i);
        o > -1 && (this.replacementUrls[o] = a);
      }).bind(this));
      r.push(s);
    }).bind(this)), Promise.all(r);
  }
  /**
   * Create a new CSS file with the replaced URLs
   * @private
   * @param  {string} href the original css file
   * @return {Promise}  returns a BlobUrl to the new CSS file or a data url
   */
  createCssFile(e) {
    var t;
    if (tr.isAbsolute(e))
      return new Promise(function(a) {
        a();
      });
    var r = this.settings.resolver(e), i;
    this.settings.archive ? i = this.settings.archive.getText(r) : i = this.settings.request(r, "text");
    var s = this.urls.map((a) => {
      var o = this.settings.resolver(a), u = new Xt(r).relative(o);
      return u;
    });
    return i ? i.then((a) => (a = Gn(a, s, this.replacementUrls), this.settings.replacements === "base64" ? t = Zi(a, "text/css") : t = li(a, "text/css"), t), (a) => new Promise(function(o) {
      o();
    })) : new Promise(function(a) {
      a();
    });
  }
  /**
   * Resolve all resources URLs relative to an absolute URL
   * @param  {string} absolute to be resolved to
   * @param  {resolver} [resolver]
   * @return {string[]} array with relative Urls
   */
  relativeTo(e, t) {
    return t = t || this.settings.resolver, this.urls.map((function(r) {
      var i = t(r), s = new Xt(e).relative(i);
      return s;
    }).bind(this));
  }
  /**
   * Get a URL for a resource
   * @param  {string} path
   * @return {string} url
   */
  get(e) {
    var t = this.urls.indexOf(e);
    if (t !== -1)
      return this.replacementUrls.length ? new Promise((function(r, i) {
        r(this.replacementUrls[t]);
      }).bind(this)) : this.createUrl(e);
  }
  /**
   * Substitute urls in content, with replacements,
   * relative to a url if provided
   * @param  {string} content
   * @param  {string} [url]   url to resolve to
   * @return {string}         content with urls substituted
   */
  substitute(e, t) {
    var r;
    return t ? r = this.relativeTo(t) : r = this.urls, Gn(e, r, this.replacementUrls);
  }
  destroy() {
    this.settings = void 0, this.manifest = void 0, this.resources = void 0, this.replacementUrls = void 0, this.html = void 0, this.assets = void 0, this.css = void 0, this.urls = void 0, this.cssUrls = void 0;
  }
}
class zi {
  constructor(e) {
    this.pages = [], this.locations = [], this.epubcfi = new Fe(), this.firstPage = 0, this.lastPage = 0, this.totalPages = 0, this.toc = void 0, this.ncx = void 0, e && (this.pageList = this.parse(e)), this.pageList && this.pageList.length && this.process(this.pageList);
  }
  /**
   * Parse PageList Xml
   * @param  {document} xml
   */
  parse(e) {
    var t = Je(e, "html"), r = Je(e, "ncx");
    if (t)
      return this.parseNav(e);
    if (r)
      return this.parseNcx(e);
  }
  /**
   * Parse a Nav PageList
   * @private
   * @param  {node} navHtml
   * @return {PageList.item[]} list
   */
  parseNav(e) {
    var t = fi(e, "nav", "page-list"), r = t ? Yt(t, "li") : [], i = r.length, s, a = [], o;
    if (!r || i === 0)
      return a;
    for (s = 0; s < i; ++s)
      o = this.item(r[s]), a.push(o);
    return a;
  }
  parseNcx(e) {
    var t = [], r = 0, i, s, a, o = 0;
    if (s = Je(e, "pageList"), !s || (a = Yt(s, "pageTarget"), o = a.length, !a || a.length === 0))
      return t;
    for (r = 0; r < o; ++r)
      i = this.ncxItem(a[r]), t.push(i);
    return t;
  }
  ncxItem(e) {
    var t = Je(e, "navLabel"), r = Je(t, "text"), i = r.textContent, s = Je(e, "content"), a = s.getAttribute("src"), o = parseInt(i, 10);
    return {
      href: a,
      page: o
    };
  }
  /**
   * Page List Item
   * @private
   * @param  {node} item
   * @return {object} pageListItem
   */
  item(e) {
    var t = Je(e, "a"), r = t.getAttribute("href") || "", i = t.textContent || "", s = parseInt(i), a = r.indexOf("epubcfi"), o, u, h;
    return a != -1 ? (o = r.split("#"), u = o[0], h = o.length > 1 ? o[1] : !1, {
      cfi: h,
      href: r,
      packageUrl: u,
      page: s
    }) : {
      href: r,
      page: s
    };
  }
  /**
   * Process pageList items
   * @private
   * @param  {array} pageList
   */
  process(e) {
    e.forEach(function(t) {
      this.pages.push(t.page), t.cfi && this.locations.push(t.cfi);
    }, this), this.firstPage = parseInt(this.pages[0]), this.lastPage = parseInt(this.pages[this.pages.length - 1]), this.totalPages = this.lastPage - this.firstPage;
  }
  /**
   * Get a PageList result from a EpubCFI
   * @param  {string} cfi EpubCFI String
   * @return {number} page
   */
  pageFromCfi(e) {
    var t = -1;
    if (this.locations.length === 0)
      return -1;
    var r = ai(e, this.locations, this.epubcfi.compare);
    return r != -1 ? t = this.pages[r] : (r = xr(e, this.locations, this.epubcfi.compare), t = r - 1 >= 0 ? this.pages[r - 1] : this.pages[0], t !== void 0 || (t = -1)), t;
  }
  /**
   * Get an EpubCFI from a Page List Item
   * @param  {string | number} pg
   * @return {string} cfi
   */
  cfiFromPage(e) {
    var t = -1;
    typeof e != "number" && (e = parseInt(e));
    var r = this.pages.indexOf(e);
    return r != -1 && (t = this.locations[r]), t;
  }
  /**
   * Get a Page from Book percentage
   * @param  {number} percent
   * @return {number} page
   */
  pageFromPercentage(e) {
    var t = Math.round(this.totalPages * e);
    return t;
  }
  /**
   * Returns a value between 0 - 1 corresponding to the location of a page
   * @param  {number} pg the page
   * @return {number} percentage
   */
  percentageFromPage(e) {
    var t = (e - this.firstPage) / this.totalPages;
    return Math.round(t * 1e3) / 1e3;
  }
  /**
   * Returns a value between 0 - 1 corresponding to the location of a cfi
   * @param  {string} cfi EpubCFI String
   * @return {number} percentage
   */
  percentageFromCfi(e) {
    var t = this.pageFromCfi(e), r = this.percentageFromPage(t);
    return r;
  }
  /**
   * Destroy
   */
  destroy() {
    this.pages = void 0, this.locations = void 0, this.epubcfi = void 0, this.pageList = void 0, this.toc = void 0, this.ncx = void 0;
  }
}
class ia {
  constructor(e) {
    this.settings = e, this.name = e.layout || "reflowable", this._spread = e.spread !== "none", this._minSpreadWidth = e.minSpreadWidth || 800, this._evenSpreads = e.evenSpreads || !1, e.flow === "scrolled" || e.flow === "scrolled-continuous" || e.flow === "scrolled-doc" ? this._flow = "scrolled" : this._flow = "paginated", this.width = 0, this.height = 0, this.spreadWidth = 0, this.delta = 0, this.columnWidth = 0, this.gap = 0, this.divisor = 1, this.props = {
      name: this.name,
      spread: this._spread,
      flow: this._flow,
      width: 0,
      height: 0,
      spreadWidth: 0,
      delta: 0,
      columnWidth: 0,
      gap: 0,
      divisor: 1
    };
  }
  /**
   * Switch the flow between paginated and scrolled
   * @param  {string} flow paginated | scrolled
   * @return {string} simplified flow
   */
  flow(e) {
    return typeof e < "u" && (e === "scrolled" || e === "scrolled-continuous" || e === "scrolled-doc" ? this._flow = "scrolled" : this._flow = "paginated", this.update({ flow: this._flow })), this._flow;
  }
  /**
   * Switch between using spreads or not, and set the
   * width at which they switch to single.
   * @param  {string} spread "none" | "always" | "auto"
   * @param  {number} min integer in pixels
   * @return {boolean} spread true | false
   */
  spread(e, t) {
    return e && (this._spread = e !== "none", this.update({ spread: this._spread })), t >= 0 && (this._minSpreadWidth = t), this._spread;
  }
  /**
   * Calculate the dimensions of the pagination
   * @param  {number} _width  width of the rendering
   * @param  {number} _height height of the rendering
   * @param  {number} _gap    width of the gap between columns
   */
  calculate(e, t, r) {
    var i = 1, s = r || 0, a = e, o = t, u = Math.floor(a / 12), h, f, c, w;
    this._spread && a >= this._minSpreadWidth ? i = 2 : i = 1, this.name === "reflowable" && this._flow === "paginated" && !(r >= 0) && (s = u % 2 === 0 ? u : u - 1), this.name === "pre-paginated" && (s = 0), i > 1 ? (h = a / i - s, c = h + s) : (h = a, c = a), this.name === "pre-paginated" && i > 1 && (a = h), f = h * i + s, w = a, this.width = a, this.height = o, this.spreadWidth = f, this.pageWidth = c, this.delta = w, this.columnWidth = h, this.gap = s, this.divisor = i, this.update({
      width: a,
      height: o,
      spreadWidth: f,
      pageWidth: c,
      delta: w,
      columnWidth: h,
      gap: s,
      divisor: i
    });
  }
  /**
   * Apply Css to a Document
   * @param  {Contents} contents
   * @return {Promise}
   */
  format(e, t, r) {
    var i;
    return this.name === "pre-paginated" ? i = e.fit(this.columnWidth, this.height, t) : this._flow === "paginated" ? i = e.columns(this.width, this.height, this.columnWidth, this.gap, this.settings.direction) : r && r === "horizontal" ? i = e.size(null, this.height) : i = e.size(this.width, null), i;
  }
  /**
   * Count number of pages
   * @param  {number} totalLength
   * @param  {number} pageLength
   * @return {{spreads: Number, pages: Number}}
   */
  count(e, t) {
    let r, i;
    return this.name === "pre-paginated" ? (r = 1, i = 1) : this._flow === "paginated" ? (t = t || this.delta, r = Math.ceil(e / t), i = r * this.divisor) : (t = t || this.height, r = Math.ceil(e / t), i = r), {
      spreads: r,
      pages: i
    };
  }
  /**
   * Update props that have changed
   * @private
   * @param  {object} props
   */
  update(e) {
    if (Object.keys(e).forEach((t) => {
      this.props[t] === e[t] && delete e[t];
    }), Object.keys(e).length > 0) {
      let t = bt(this.props, e);
      this.emit(le.LAYOUT.UPDATED, t, e);
    }
  }
}
qt(ia.prototype);
class pu {
  constructor(e) {
    this.rendition = e, this._themes = {
      default: {
        rules: {},
        url: "",
        serialized: ""
      }
    }, this._overrides = {}, this._current = "default", this._injected = [], this.rendition.hooks.content.register(this.inject.bind(this)), this.rendition.hooks.content.register(this.overrides.bind(this));
  }
  /**
   * Add themes to be used by a rendition
   * @param {object | Array<object> | string}
   * @example themes.register("light", "http://example.com/light.css")
   * @example themes.register("light", { "body": { "color": "purple"}})
   * @example themes.register({ "light" : {...}, "dark" : {...}})
   */
  register() {
    if (arguments.length !== 0) {
      if (arguments.length === 1 && typeof arguments[0] == "object")
        return this.registerThemes(arguments[0]);
      if (arguments.length === 1 && typeof arguments[0] == "string")
        return this.default(arguments[0]);
      if (arguments.length === 2 && typeof arguments[1] == "string")
        return this.registerUrl(arguments[0], arguments[1]);
      if (arguments.length === 2 && typeof arguments[1] == "object")
        return this.registerRules(arguments[0], arguments[1]);
    }
  }
  /**
   * Add a default theme to be used by a rendition
   * @param {object | string} theme
   * @example themes.register("http://example.com/default.css")
   * @example themes.register({ "body": { "color": "purple"}})
   */
  default(e) {
    if (e) {
      if (typeof e == "string")
        return this.registerUrl("default", e);
      if (typeof e == "object")
        return this.registerRules("default", e);
    }
  }
  /**
   * Register themes object
   * @param {object} themes
   */
  registerThemes(e) {
    for (var t in e)
      e.hasOwnProperty(t) && (typeof e[t] == "string" ? this.registerUrl(t, e[t]) : this.registerRules(t, e[t]));
  }
  /**
   * Register a theme by passing its css as string
   * @param {string} name 
   * @param {string} css 
   */
  registerCss(e, t) {
    this._themes[e] = { serialized: t }, (this._injected[e] || e == "default") && this.update(e);
  }
  /**
   * Register a url
   * @param {string} name
   * @param {string} input
   */
  registerUrl(e, t) {
    var r = new Bt(t);
    this._themes[e] = { url: r.toString() }, (this._injected[e] || e == "default") && this.update(e);
  }
  /**
   * Register rule
   * @param {string} name
   * @param {object} rules
   */
  registerRules(e, t) {
    this._themes[e] = { rules: t }, (this._injected[e] || e == "default") && this.update(e);
  }
  /**
   * Select a theme
   * @param {string} name
   */
  select(e) {
    var t = this._current, r;
    this._current = e, this.update(e), r = this.rendition.getContents(), r.forEach((i) => {
      i.removeClass(t), i.addClass(e);
    });
  }
  /**
   * Update a theme
   * @param {string} name
   */
  update(e) {
    var t = this.rendition.getContents();
    t.forEach((r) => {
      this.add(e, r);
    });
  }
  /**
   * Inject all themes into contents
   * @param {Contents} contents
   */
  inject(e) {
    var t = [], r = this._themes, i;
    for (var s in r)
      r.hasOwnProperty(s) && (s === this._current || s === "default") && (i = r[s], (i.rules && Object.keys(i.rules).length > 0 || i.url && t.indexOf(i.url) === -1) && this.add(s, e), this._injected.push(s));
    this._current != "default" && e.addClass(this._current);
  }
  /**
   * Add Theme to contents
   * @param {string} name
   * @param {Contents} contents
   */
  add(e, t) {
    var r = this._themes[e];
    !r || !t || (r.url ? t.addStylesheet(r.url) : r.serialized ? (t.addStylesheetCss(r.serialized, e), r.injected = !0) : r.rules && (t.addStylesheetRules(r.rules, e), r.injected = !0));
  }
  /**
   * Add override
   * @param {string} name
   * @param {string} value
   * @param {boolean} priority
   */
  override(e, t, r) {
    var i = this.rendition.getContents();
    this._overrides[e] = {
      value: t,
      priority: r === !0
    }, i.forEach((s) => {
      s.css(e, this._overrides[e].value, this._overrides[e].priority);
    });
  }
  removeOverride(e) {
    var t = this.rendition.getContents();
    delete this._overrides[e], t.forEach((r) => {
      r.css(e);
    });
  }
  /**
   * Add all overrides
   * @param {Content} content
   */
  overrides(e) {
    var t = this._overrides;
    for (var r in t)
      t.hasOwnProperty(r) && e.css(r, t[r].value, t[r].priority);
  }
  /**
   * Adjust the font size of a rendition
   * @param {number} size
   */
  fontSize(e) {
    this.override("font-size", e);
  }
  /**
   * Adjust the font-family of a rendition
   * @param {string} f
   */
  font(e) {
    this.override("font-family", e, !0);
  }
  destroy() {
    this.rendition = void 0, this._themes = void 0, this._overrides = void 0, this._current = void 0, this._injected = void 0;
  }
}
class ci {
  constructor(e, t, r, i = !1) {
    this.layout = e, this.horizontal = r === "horizontal", this.direction = t || "ltr", this._dev = i;
  }
  /**
   * Find CFI pairs for entire section at once
   */
  section(e) {
    var t = this.findRanges(e), r = this.rangeListToCfiList(e.section.cfiBase, t);
    return r;
  }
  /**
   * Find CFI pairs for a page
   * @param {Contents} contents Contents from view
   * @param {string} cfiBase string of the base for a cfi
   * @param {number} start position to start at
   * @param {number} end position to end at
   */
  page(e, t, r, i) {
    var s = e && e.document ? e.document.body : !1, a;
    if (s) {
      if (a = this.rangePairToCfiPair(t, {
        start: this.findStart(s, r, i),
        end: this.findEnd(s, r, i)
      }), this._dev === !0) {
        let o = e.document, u = new Fe(a.start).toRange(o), h = new Fe(a.end).toRange(o), f = o.defaultView.getSelection(), c = o.createRange();
        f.removeAllRanges(), c.setStart(u.startContainer, u.startOffset), c.setEnd(h.endContainer, h.endOffset), f.addRange(c);
      }
      return a;
    }
  }
  /**
   * Walk a node, preforming a function on each node it finds
   * @private
   * @param {Node} root Node to walkToNode
   * @param {function} func walk function
   * @return {*} returns the result of the walk function
   */
  walk(e, t) {
    if (!(e && e.nodeType === Node.TEXT_NODE)) {
      var r = {
        acceptNode: function(u) {
          return u.data.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }, i = r.acceptNode;
      i.acceptNode = r.acceptNode;
      for (var s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, i, !1), a, o; (a = s.nextNode()) && (o = t(a), !o); )
        ;
      return o;
    }
  }
  findRanges(e) {
    for (var t = [], r = e.contents.scrollWidth(), i = Math.ceil(r / this.layout.spreadWidth), s = i * this.layout.divisor, a = this.layout.columnWidth, o = this.layout.gap, u, h, f = 0; f < s.pages; f++)
      u = (a + o) * f, h = a * (f + 1) + o * f, t.push({
        start: this.findStart(e.document.body, u, h),
        end: this.findEnd(e.document.body, u, h)
      });
    return t;
  }
  /**
   * Find Start Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findStart(e, t, r) {
    for (var i = [e], s, a, o = e; i.length; )
      if (s = i.shift(), a = this.walk(s, (u) => {
        var h, f, c, w, m;
        if (m = $i(u), this.horizontal && this.direction === "ltr") {
          if (h = this.horizontal ? m.left : m.top, f = this.horizontal ? m.right : m.bottom, h >= t && h <= r)
            return u;
          if (f > t)
            return u;
          o = u, i.push(u);
        } else if (this.horizontal && this.direction === "rtl") {
          if (h = m.left, f = m.right, f <= r && f >= t)
            return u;
          if (h < r)
            return u;
          o = u, i.push(u);
        } else {
          if (c = m.top, w = m.bottom, c >= t && c <= r)
            return u;
          if (w > t)
            return u;
          o = u, i.push(u);
        }
      }), a)
        return this.findTextStartRange(a, t, r);
    return this.findTextStartRange(o, t, r);
  }
  /**
   * Find End Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findEnd(e, t, r) {
    for (var i = [e], s, a = e, o; i.length; )
      if (s = i.shift(), o = this.walk(s, (u) => {
        var h, f, c, w, m;
        if (m = $i(u), this.horizontal && this.direction === "ltr") {
          if (h = Math.round(m.left), f = Math.round(m.right), h > r && a)
            return a;
          if (f > r)
            return u;
          a = u, i.push(u);
        } else if (this.horizontal && this.direction === "rtl") {
          if (h = Math.round(this.horizontal ? m.left : m.top), f = Math.round(this.horizontal ? m.right : m.bottom), f < t && a)
            return a;
          if (h < t)
            return u;
          a = u, i.push(u);
        } else {
          if (c = Math.round(m.top), w = Math.round(m.bottom), c > r && a)
            return a;
          if (w > r)
            return u;
          a = u, i.push(u);
        }
      }), o)
        return this.findTextEndRange(o, t, r);
    return this.findTextEndRange(a, t, r);
  }
  /**
   * Find Text Start Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findTextStartRange(e, t, r) {
    for (var i = this.splitTextNodeIntoRanges(e), s, a, o, u, h, f = 0; f < i.length; f++)
      if (s = i[f], a = s.getBoundingClientRect(), this.horizontal && this.direction === "ltr") {
        if (o = a.left, o >= t)
          return s;
      } else if (this.horizontal && this.direction === "rtl") {
        if (h = a.right, h <= r)
          return s;
      } else if (u = a.top, u >= t)
        return s;
    return i[0];
  }
  /**
   * Find Text End Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findTextEndRange(e, t, r) {
    for (var i = this.splitTextNodeIntoRanges(e), s, a, o, u, h, f, c, w = 0; w < i.length; w++) {
      if (a = i[w], o = a.getBoundingClientRect(), this.horizontal && this.direction === "ltr") {
        if (u = o.left, h = o.right, u > r && s)
          return s;
        if (h > r)
          return a;
      } else if (this.horizontal && this.direction === "rtl") {
        if (u = o.left, h = o.right, h < t && s)
          return s;
        if (u < t)
          return a;
      } else {
        if (f = o.top, c = o.bottom, f > r && s)
          return s;
        if (c > r)
          return a;
      }
      s = a;
    }
    return i[i.length - 1];
  }
  /**
   * Split up a text node into ranges for each word
   * @private
   * @param {Node} root root node
   * @param {string} [_splitter] what to split on
   * @return {Range[]}
   */
  splitTextNodeIntoRanges(e, t) {
    var r = [], i = e.textContent || "", s = i.trim(), a, o = e.ownerDocument, u = t || " ", h = s.indexOf(u);
    if (h === -1 || e.nodeType != Node.TEXT_NODE)
      return a = o.createRange(), a.selectNodeContents(e), [a];
    for (a = o.createRange(), a.setStart(e, 0), a.setEnd(e, h), r.push(a), a = !1; h != -1; )
      h = s.indexOf(u, h + 1), h > 0 && (a && (a.setEnd(e, h), r.push(a)), a = o.createRange(), a.setStart(e, h + 1));
    return a && (a.setEnd(e, s.length), r.push(a)), r;
  }
  /**
   * Turn a pair of ranges into a pair of CFIs
   * @private
   * @param {string} cfiBase base string for an EpubCFI
   * @param {object} rangePair { start: Range, end: Range }
   * @return {object} { start: "epubcfi(...)", end: "epubcfi(...)" }
   */
  rangePairToCfiPair(e, t) {
    var r = t.start, i = t.end;
    r.collapse(!0), i.collapse(!1);
    let s = new Fe(r, e).toString(), a = new Fe(i, e).toString();
    return {
      start: s,
      end: a
    };
  }
  rangeListToCfiList(e, t) {
    for (var r = [], i, s = 0; s < t.length; s++)
      i = this.rangePairToCfiPair(e, t[s]), r.push(i);
    return r;
  }
  /**
   * Set the axis for mapping
   * @param {string} axis horizontal | vertical
   * @return {boolean} is it horizontal?
   */
  axis(e) {
    return e && (this.horizontal = e === "horizontal"), this.horizontal;
  }
}
const na = typeof navigator < "u", vu = na && /Chrome/.test(navigator.userAgent), Xn = na && !vu && /AppleWebKit/.test(navigator.userAgent), gu = 1;
class vn {
  constructor(e, t, r, i) {
    this.epubcfi = new Fe(), this.document = e, this.documentElement = this.document.documentElement, this.content = t || this.document.body, this.window = this.document.defaultView, this._size = {
      width: 0,
      height: 0
    }, this.sectionIndex = i || 0, this.cfiBase = r || "", this.epubReadingSystem("epub.js", wi), this.called = 0, this.active = !0, this.listeners();
  }
  /**
  	* Get DOM events that are listened for and passed along
  	*/
  static get listenedEvents() {
    return ti;
  }
  /**
  	* Get or Set width
  	* @param {number} [w]
  	* @returns {number} width
  	*/
  width(e) {
    var t = this.content;
    return e && st(e) && (e = e + "px"), e && (t.style.width = e), parseInt(this.window.getComputedStyle(t).width);
  }
  /**
  	* Get or Set height
  	* @param {number} [h]
  	* @returns {number} height
  	*/
  height(e) {
    var t = this.content;
    return e && st(e) && (e = e + "px"), e && (t.style.height = e), parseInt(this.window.getComputedStyle(t).height);
  }
  /**
  	* Get or Set width of the contents
  	* @param {number} [w]
  	* @returns {number} width
  	*/
  contentWidth(e) {
    var t = this.content || this.document.body;
    return e && st(e) && (e = e + "px"), e && (t.style.width = e), parseInt(this.window.getComputedStyle(t).width);
  }
  /**
  	* Get or Set height of the contents
  	* @param {number} [h]
  	* @returns {number} height
  	*/
  contentHeight(e) {
    var t = this.content || this.document.body;
    return e && st(e) && (e = e + "px"), e && (t.style.height = e), parseInt(this.window.getComputedStyle(t).height);
  }
  /**
  	* Get the width of the text using Range
  	* @returns {number} width
  	*/
  textWidth() {
    let e, t, r = this.document.createRange(), i = this.content || this.document.body, s = oi(i);
    return r.selectNodeContents(i), e = r.getBoundingClientRect(), t = e.width, s && s.width && (t += s.width), Math.round(t);
  }
  /**
  	* Get the height of the text using Range
  	* @returns {number} height
  	*/
  textHeight() {
    let e, t, r = this.document.createRange(), i = this.content || this.document.body;
    return r.selectNodeContents(i), e = r.getBoundingClientRect(), t = e.bottom, Math.round(t);
  }
  /**
  	* Get documentElement scrollWidth
  	* @returns {number} width
  	*/
  scrollWidth() {
    var e = this.documentElement.scrollWidth;
    return e;
  }
  /**
  	* Get documentElement scrollHeight
  	* @returns {number} height
  	*/
  scrollHeight() {
    var e = this.documentElement.scrollHeight;
    return e;
  }
  /**
  	* Set overflow css style of the contents
  	* @param {string} [overflow]
  	*/
  overflow(e) {
    return e && (this.documentElement.style.overflow = e), this.window.getComputedStyle(this.documentElement).overflow;
  }
  /**
  	* Set overflowX css style of the documentElement
  	* @param {string} [overflow]
  	*/
  overflowX(e) {
    return e && (this.documentElement.style.overflowX = e), this.window.getComputedStyle(this.documentElement).overflowX;
  }
  /**
  	* Set overflowY css style of the documentElement
  	* @param {string} [overflow]
  	*/
  overflowY(e) {
    return e && (this.documentElement.style.overflowY = e), this.window.getComputedStyle(this.documentElement).overflowY;
  }
  /**
  	* Set Css styles on the contents element (typically Body)
  	* @param {string} property
  	* @param {string} value
  	* @param {boolean} [priority] set as "important"
  	*/
  css(e, t, r) {
    var i = this.content || this.document.body;
    return t ? i.style.setProperty(e, t, r ? "important" : "") : i.style.removeProperty(e), this.window.getComputedStyle(i)[e];
  }
  /**
  	* Get or Set the viewport element
  	* @param {object} [options]
  	* @param {string} [options.width]
  	* @param {string} [options.height]
  	* @param {string} [options.scale]
  	* @param {string} [options.minimum]
  	* @param {string} [options.maximum]
  	* @param {string} [options.scalable]
  	*/
  viewport(e) {
    var t = this.document.querySelector("meta[name='viewport']"), r = {
      width: void 0,
      height: void 0,
      scale: void 0,
      minimum: void 0,
      maximum: void 0,
      scalable: void 0
    }, i = [], s = {};
    if (t && t.hasAttribute("content")) {
      let a = t.getAttribute("content"), o = a.match(/width\s*=\s*([^,]*)/), u = a.match(/height\s*=\s*([^,]*)/), h = a.match(/initial-scale\s*=\s*([^,]*)/), f = a.match(/minimum-scale\s*=\s*([^,]*)/), c = a.match(/maximum-scale\s*=\s*([^,]*)/), w = a.match(/user-scalable\s*=\s*([^,]*)/);
      o && o.length && typeof o[1] < "u" && (r.width = o[1]), u && u.length && typeof u[1] < "u" && (r.height = u[1]), h && h.length && typeof h[1] < "u" && (r.scale = h[1]), f && f.length && typeof f[1] < "u" && (r.minimum = f[1]), c && c.length && typeof c[1] < "u" && (r.maximum = c[1]), w && w.length && typeof w[1] < "u" && (r.scalable = w[1]);
    }
    return s = $s(e || {}, r), e && (s.width && i.push("width=" + s.width), s.height && i.push("height=" + s.height), s.scale && i.push("initial-scale=" + s.scale), s.scalable === "no" ? (i.push("minimum-scale=" + s.scale), i.push("maximum-scale=" + s.scale), i.push("user-scalable=" + s.scalable)) : (s.scalable && i.push("user-scalable=" + s.scalable), s.minimum && i.push("minimum-scale=" + s.minimum), s.maximum && i.push("minimum-scale=" + s.maximum)), t || (t = this.document.createElement("meta"), t.setAttribute("name", "viewport"), this.document.querySelector("head").appendChild(t)), t.setAttribute("content", i.join(", ")), this.window.scrollTo(0, 0)), s;
  }
  /**
   * Event emitter for when the contents has expanded
   * @private
   */
  expand() {
    this.emit(le.CONTENTS.EXPAND);
  }
  /**
   * Add DOM listeners
   * @private
   */
  listeners() {
    this.imageLoadListeners(), this.mediaQueryListeners(), this.addEventListeners(), this.addSelectionListeners(), typeof ResizeObserver > "u" ? (this.resizeListeners(), this.visibilityListeners()) : this.resizeObservers(), this.linksHandler();
  }
  /**
   * Remove DOM listeners
   * @private
   */
  removeListeners() {
    this.removeEventListeners(), this.removeSelectionListeners(), this.observer && this.observer.disconnect(), clearTimeout(this.expanding);
  }
  /**
   * Check if size of contents has changed and
   * emit 'resize' event if it has.
   * @private
   */
  resizeCheck() {
    let e = this.textWidth(), t = this.textHeight();
    (e != this._size.width || t != this._size.height) && (this._size = {
      width: e,
      height: t
    }, this.onResize && this.onResize(this._size), this.emit(le.CONTENTS.RESIZE, this._size));
  }
  /**
   * Poll for resize detection
   * @private
   */
  resizeListeners() {
    clearTimeout(this.expanding), requestAnimationFrame(this.resizeCheck.bind(this)), this.expanding = setTimeout(this.resizeListeners.bind(this), 350);
  }
  /**
   * Listen for visibility of tab to change
   * @private
   */
  visibilityListeners() {
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" && this.active === !1 ? (this.active = !0, this.resizeListeners()) : (this.active = !1, clearTimeout(this.expanding));
    });
  }
  /**
   * Use css transitions to detect resize
   * @private
   */
  transitionListeners() {
    let e = this.content;
    e.style.transitionProperty = "font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height", e.style.transitionDuration = "0.001ms", e.style.transitionTimingFunction = "linear", e.style.transitionDelay = "0", this._resizeCheck = this.resizeCheck.bind(this), this.document.addEventListener("transitionend", this._resizeCheck);
  }
  /**
   * Listen for media query changes and emit 'expand' event
   * Adapted from: https://github.com/tylergaw/media-query-events/blob/master/js/mq-events.js
   * @private
   */
  mediaQueryListeners() {
    for (var e = this.document.styleSheets, t = (function(o) {
      o.matches && !this._expanding && setTimeout(this.expand.bind(this), 1);
    }).bind(this), r = 0; r < e.length; r += 1) {
      var i;
      try {
        i = e[r].cssRules;
      } catch {
        return;
      }
      if (!i)
        return;
      for (var s = 0; s < i.length; s += 1)
        if (i[s].media) {
          var a = this.window.matchMedia(i[s].media.mediaText);
          a.addListener(t);
        }
    }
  }
  /**
   * Use ResizeObserver to listen for changes in the DOM and check for resize
   * @private
   */
  resizeObservers() {
    this.observer = new ResizeObserver((e) => {
      requestAnimationFrame(this.resizeCheck.bind(this));
    }), this.observer.observe(this.document.documentElement);
  }
  /**
   * Use MutationObserver to listen for changes in the DOM and check for resize
   * @private
   */
  mutationObservers() {
    this.observer = new MutationObserver((t) => {
      this.resizeCheck();
    });
    let e = { attributes: !0, childList: !0, characterData: !0, subtree: !0 };
    this.observer.observe(this.document, e);
  }
  /**
   * Test if images are loaded or add listener for when they load
   * @private
   */
  imageLoadListeners() {
    for (var e = this.document.querySelectorAll("img"), t, r = 0; r < e.length; r++)
      t = e[r], typeof t.naturalWidth < "u" && t.naturalWidth === 0 && (t.onload = this.expand.bind(this));
  }
  /**
   * Listen for font load and check for resize when loaded
   * @private
   */
  fontLoadListeners() {
    !this.document || !this.document.fonts || this.document.fonts.ready.then((function() {
      this.resizeCheck();
    }).bind(this));
  }
  /**
   * Get the documentElement
   * @returns {element} documentElement
   */
  root() {
    return this.document ? this.document.documentElement : null;
  }
  /**
   * Get the location offset of a EpubCFI or an #id
   * @param {string | EpubCFI} target
   * @param {string} [ignoreClass] for the cfi
   * @returns { {left: Number, top: Number }
   */
  locationOf(e, t) {
    var r, i = { left: 0, top: 0 };
    if (!this.document)
      return i;
    if (this.epubcfi.isCfiString(e)) {
      let s = new Fe(e).toRange(this.document, t);
      if (s) {
        try {
          if (!s.endContainer || s.startContainer == s.endContainer && s.startOffset == s.endOffset) {
            let a = s.startContainer.textContent.indexOf(" ", s.startOffset);
            a == -1 && (a = s.startContainer.textContent.length), s.setEnd(s.startContainer, a);
          }
        } catch (a) {
          console.error("setting end offset to start container length failed", a);
        }
        if (s.startContainer.nodeType === Node.ELEMENT_NODE)
          r = s.startContainer.getBoundingClientRect(), i.left = r.left, i.top = r.top;
        else if (Xn) {
          let a = s.startContainer, o = new Range();
          try {
            a.nodeType === gu ? r = a.getBoundingClientRect() : s.startOffset + 2 < a.length ? (o.setStart(a, s.startOffset), o.setEnd(a, s.startOffset + 2), r = o.getBoundingClientRect()) : s.startOffset - 2 > 0 ? (o.setStart(a, s.startOffset - 2), o.setEnd(a, s.startOffset), r = o.getBoundingClientRect()) : r = a.parentNode.getBoundingClientRect();
          } catch (u) {
            console.error(u, u.stack);
          }
        } else
          r = s.getBoundingClientRect();
      }
    } else if (typeof e == "string" && e.indexOf("#") > -1) {
      let s = e.substring(e.indexOf("#") + 1), a = this.document.getElementById(s);
      if (a)
        if (Xn) {
          let o = new Range();
          o.selectNode(a), r = o.getBoundingClientRect();
        } else
          r = a.getBoundingClientRect();
    }
    return r && (i.left = r.left, i.top = r.top), i;
  }
  /**
   * Append a stylesheet link to the document head
   * @param {string} src url
   */
  addStylesheet(e) {
    return new Promise((function(t, r) {
      var i, s = !1;
      if (!this.document) {
        t(!1);
        return;
      }
      if (i = this.document.querySelector("link[href='" + e + "']"), i) {
        t(!0);
        return;
      }
      i = this.document.createElement("link"), i.type = "text/css", i.rel = "stylesheet", i.href = e, i.onload = i.onreadystatechange = function() {
        !s && (!this.readyState || this.readyState == "complete") && (s = !0, setTimeout(() => {
          t(!0);
        }, 1));
      }, this.document.head.appendChild(i);
    }).bind(this));
  }
  _getStylesheetNode(e) {
    var t;
    return e = "epubjs-inserted-css-" + (e || ""), this.document ? (t = this.document.getElementById(e), t || (t = this.document.createElement("style"), t.id = e, this.document.head.appendChild(t)), t) : !1;
  }
  /**
   * Append stylesheet css
   * @param {string} serializedCss
   * @param {string} key If the key is the same, the CSS will be replaced instead of inserted
   */
  addStylesheetCss(e, t) {
    if (!this.document || !e)
      return !1;
    var r;
    return r = this._getStylesheetNode(t), r.innerHTML = e, !0;
  }
  /**
   * Append stylesheet rules to a generate stylesheet
   * Array: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
   * Object: https://github.com/desirable-objects/json-to-css
   * @param {array | object} rules
   * @param {string} key If the key is the same, the CSS will be replaced instead of inserted
   */
  addStylesheetRules(e, t) {
    var r;
    if (!(!this.document || !e || e.length === 0))
      if (r = this._getStylesheetNode(t).sheet, Object.prototype.toString.call(e) === "[object Array]")
        for (var i = 0, s = e.length; i < s; i++) {
          var a = 1, o = e[i], u = e[i][0], h = "";
          Object.prototype.toString.call(o[1][0]) === "[object Array]" && (o = o[1], a = 0);
          for (var f = o.length; a < f; a++) {
            var c = o[a];
            h += c[0] + ":" + c[1] + (c[2] ? " !important" : "") + `;
`;
          }
          r.insertRule(u + "{" + h + "}", r.cssRules.length);
        }
      else
        Object.keys(e).forEach((m) => {
          const S = e[m];
          if (Array.isArray(S))
            S.forEach((N) => {
              const v = Object.keys(N).map((y) => `${y}:${N[y]}`).join(";");
              r.insertRule(`${m}{${v}}`, r.cssRules.length);
            });
          else {
            const p = Object.keys(S).map((v) => `${v}:${S[v]}`).join(";");
            r.insertRule(`${m}{${p}}`, r.cssRules.length);
          }
        });
  }
  /**
   * Append a script tag to the document head
   * @param {string} src url
   * @returns {Promise} loaded
   */
  addScript(e) {
    return new Promise((function(t, r) {
      var i, s = !1;
      if (!this.document) {
        t(!1);
        return;
      }
      i = this.document.createElement("script"), i.type = "text/javascript", i.async = !0, i.src = e, i.onload = i.onreadystatechange = function() {
        !s && (!this.readyState || this.readyState == "complete") && (s = !0, setTimeout(function() {
          t(!0);
        }, 1));
      }, this.document.head.appendChild(i);
    }).bind(this));
  }
  /**
   * Add a class to the contents container
   * @param {string} className
   */
  addClass(e) {
    var t;
    this.document && (t = this.content || this.document.body, t && t.classList.add(e));
  }
  /**
   * Remove a class from the contents container
   * @param {string} removeClass
   */
  removeClass(e) {
    var t;
    this.document && (t = this.content || this.document.body, t && t.classList.remove(e));
  }
  /**
   * Add DOM event listeners
   * @private
   */
  addEventListeners() {
    this.document && (this._triggerEvent = this.triggerEvent.bind(this), ti.forEach(function(e) {
      this.document.addEventListener(e, this._triggerEvent, { passive: !0 });
    }, this));
  }
  /**
   * Remove DOM event listeners
   * @private
   */
  removeEventListeners() {
    this.document && (ti.forEach(function(e) {
      this.document.removeEventListener(e, this._triggerEvent, { passive: !0 });
    }, this), this._triggerEvent = void 0);
  }
  /**
   * Emit passed browser events
   * @private
   */
  triggerEvent(e) {
    this.emit(e.type, e);
  }
  /**
   * Add listener for text selection
   * @private
   */
  addSelectionListeners() {
    this.document && (this._onSelectionChange = this.onSelectionChange.bind(this), this.document.addEventListener("selectionchange", this._onSelectionChange, { passive: !0 }));
  }
  /**
   * Remove listener for text selection
   * @private
   */
  removeSelectionListeners() {
    this.document && (this.document.removeEventListener("selectionchange", this._onSelectionChange, { passive: !0 }), this._onSelectionChange = void 0);
  }
  /**
   * Handle getting text on selection
   * @private
   */
  onSelectionChange(e) {
    this.selectionEndTimeout && clearTimeout(this.selectionEndTimeout), this.selectionEndTimeout = setTimeout((function() {
      var t = this.window.getSelection();
      this.triggerSelectedEvent(t);
    }).bind(this), 250);
  }
  /**
   * Emit event on text selection
   * @private
   */
  triggerSelectedEvent(e) {
    var t, r;
    e && e.rangeCount > 0 && (t = e.getRangeAt(0), t.collapsed || (r = new Fe(t, this.cfiBase).toString(), this.emit(le.CONTENTS.SELECTED, r), this.emit(le.CONTENTS.SELECTED_RANGE, t)));
  }
  /**
   * Get a Dom Range from EpubCFI
   * @param {EpubCFI} _cfi
   * @param {string} [ignoreClass]
   * @returns {Range} range
   */
  range(e, t) {
    var r = new Fe(e);
    return r.toRange(this.document, t);
  }
  /**
   * Get an EpubCFI from a Dom Range
   * @param {Range} range
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */
  cfiFromRange(e, t) {
    return new Fe(e, this.cfiBase, t).toString();
  }
  /**
   * Get an EpubCFI from a Dom node
   * @param {node} node
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */
  cfiFromNode(e, t) {
    return new Fe(e, this.cfiBase, t).toString();
  }
  // TODO: find where this is used - remove?
  map(e) {
    var t = new ci(e);
    return t.section();
  }
  /**
   * Size the contents to a given width and height
   * @param {number} [width]
   * @param {number} [height]
   */
  size(e, t) {
    var r = { scale: 1, scalable: "no" };
    this.layoutStyle("scrolling"), e >= 0 && (this.width(e), r.width = e, this.css("padding", "0 " + e / 12 + "px")), t >= 0 && (this.height(t), r.height = t), this.css("margin", "0"), this.css("box-sizing", "border-box"), this.viewport(r);
  }
  /**
   * Apply columns to the contents for pagination
   * @param {number} width
   * @param {number} height
   * @param {number} columnWidth
   * @param {number} gap
   */
  columns(e, t, r, i, s) {
    let a = vr("column-axis"), o = vr("column-gap"), u = vr("column-width"), h = vr("column-fill"), c = this.writingMode().indexOf("vertical") === 0 ? "vertical" : "horizontal";
    this.layoutStyle("paginated"), s === "rtl" && c === "horizontal" && this.direction(s), this.width(e), this.height(t), this.viewport({ width: e, height: t, scale: 1, scalable: "no" }), this.css("overflow-y", "hidden"), this.css("margin", "0", !0), c === "vertical" ? (this.css("padding-top", i / 2 + "px", !0), this.css("padding-bottom", i / 2 + "px", !0), this.css("padding-left", "20px"), this.css("padding-right", "20px"), this.css(a, "vertical")) : (this.css("padding-top", "20px"), this.css("padding-bottom", "20px"), this.css("padding-left", i / 2 + "px", !0), this.css("padding-right", i / 2 + "px", !0), this.css(a, "horizontal")), this.css("box-sizing", "border-box"), this.css("max-width", "inherit"), this.css(h, "auto"), this.css(o, i + "px"), this.css(u, r + "px"), this.css("-webkit-line-box-contain", "block glyphs replaced");
  }
  /**
   * Scale contents from center
   * @param {number} scale
   * @param {number} offsetX
   * @param {number} offsetY
   */
  scaler(e, t, r) {
    var i = "scale(" + e + ")", s = "";
    this.css("transform-origin", "top left"), (t >= 0 || r >= 0) && (s = " translate(" + (t || 0) + "px, " + (r || 0) + "px )"), this.css("transform", i + s);
  }
  /**
   * Fit contents into a fixed width and height
   * @param {number} width
   * @param {number} height
   */
  fit(e, t, r) {
    var i = this.viewport(), s = parseInt(i.width), a = parseInt(i.height), o = e / s, u = t / a, h = o < u ? o : u;
    if (this.layoutStyle("paginated"), this.width(s), this.height(a), this.overflow("hidden"), this.scaler(h, 0, 0), this.css("background-size", s * h + "px " + a * h + "px"), this.css("background-color", "transparent"), r && r.properties.includes("page-spread-left")) {
      var f = e - s * h;
      this.css("margin-left", f + "px");
    }
  }
  /**
   * Set the direction of the text
   * @param {string} [dir="ltr"] "rtl" | "ltr"
   */
  direction(e) {
    this.documentElement && (this.documentElement.style.direction = e);
  }
  mapPage(e, t, r, i, s) {
    var a = new ci(t, s);
    return a.page(this, e, r, i);
  }
  /**
   * Emit event when link in content is clicked
   * @private
   */
  linksHandler() {
    au(this.content, (e) => {
      this.emit(le.CONTENTS.LINK_CLICKED, e);
    });
  }
  /**
   * Set the writingMode of the text
   * @param {string} [mode="horizontal-tb"] "horizontal-tb" | "vertical-rl" | "vertical-lr"
   */
  writingMode(e) {
    let t = vr("writing-mode");
    return e && this.documentElement && (this.documentElement.style[t] = e), this.window.getComputedStyle(this.documentElement)[t] || "";
  }
  /**
   * Set the layoutStyle of the content
   * @param {string} [style="paginated"] "scrolling" | "paginated"
   * @private
   */
  layoutStyle(e) {
    return e && (this._layoutStyle = e, navigator.epubReadingSystem.layoutStyle = this._layoutStyle), this._layoutStyle || "paginated";
  }
  /**
   * Add the epubReadingSystem object to the navigator
   * @param {string} name
   * @param {string} version
   * @private
   */
  epubReadingSystem(e, t) {
    return navigator.epubReadingSystem = {
      name: e,
      version: t,
      layoutStyle: this.layoutStyle(),
      hasFeature: function(r) {
        switch (r) {
          case "dom-manipulation":
            return !0;
          case "layout-changes":
            return !0;
          case "touch-events":
            return !0;
          case "mouse-events":
            return !0;
          case "keyboard-events":
            return !0;
          case "spine-scripting":
            return !1;
          default:
            return !1;
        }
      }
    }, navigator.epubReadingSystem;
  }
  destroy() {
    this.removeListeners();
  }
}
qt(vn.prototype);
class mu {
  constructor(e) {
    this.rendition = e, this.highlights = [], this.underlines = [], this.marks = [], this._annotations = {}, this._annotationsBySectionIndex = {}, this.rendition.hooks.render.register(this.inject.bind(this)), this.rendition.hooks.unloaded.register(this.clear.bind(this));
  }
  /**
   * Add an annotation to store
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} [cb] Callback after annotation is added
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   * @returns {Annotation} annotation
   */
  add(e, t, r, i, s, a) {
    let o = encodeURI(t + e), h = new Fe(t).spinePos, f = new sa({
      type: e,
      cfiRange: t,
      data: r,
      sectionIndex: h,
      cb: i,
      className: s,
      styles: a
    });
    return this._annotations[o] = f, h in this._annotationsBySectionIndex ? this._annotationsBySectionIndex[h].push(o) : this._annotationsBySectionIndex[h] = [o], this.rendition.views().forEach((w) => {
      f.sectionIndex === w.index && f.attach(w);
    }), f;
  }
  /**
   * Remove an annotation from store
   * @param {EpubCFI} cfiRange EpubCFI range the annotation is attached to
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   */
  remove(e, t) {
    let r = encodeURI(e + t);
    if (r in this._annotations) {
      let i = this._annotations[r];
      if (t && i.type !== t)
        return;
      this.rendition.views().forEach((a) => {
        this._removeFromAnnotationBySectionIndex(i.sectionIndex, r), i.sectionIndex === a.index && i.detach(a);
      }), delete this._annotations[r];
    }
  }
  /**
   * Remove an annotations by Section Index
   * @private
   */
  _removeFromAnnotationBySectionIndex(e, t) {
    this._annotationsBySectionIndex[e] = this._annotationsAt(e).filter((r) => r !== t);
  }
  /**
   * Get annotations by Section Index
   * @private
   */
  _annotationsAt(e) {
    return this._annotationsBySectionIndex[e];
  }
  /**
   * Add a highlight to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is clicked
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   */
  highlight(e, t, r, i, s) {
    return this.add("highlight", e, t, r, i, s);
  }
  /**
   * Add a underline to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is clicked
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   */
  underline(e, t, r, i, s) {
    return this.add("underline", e, t, r, i, s);
  }
  /**
   * Add a mark to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is clicked
   */
  mark(e, t, r) {
    return this.add("mark", e, t, r);
  }
  /**
   * iterate over annotations in the store
   */
  each() {
    return this._annotations.forEach.apply(this._annotations, arguments);
  }
  /**
   * Hook for injecting annotation into a view
   * @param {View} view
   * @private
   */
  inject(e) {
    let t = e.index;
    t in this._annotationsBySectionIndex && this._annotationsBySectionIndex[t].forEach((i) => {
      this._annotations[i].attach(e);
    });
  }
  /**
   * Hook for removing annotation from a view
   * @param {View} view
   * @private
   */
  clear(e) {
    let t = e.index;
    t in this._annotationsBySectionIndex && this._annotationsBySectionIndex[t].forEach((i) => {
      this._annotations[i].detach(e);
    });
  }
  /**
   * [Not Implemented] Show annotations
   * @TODO: needs implementation in View
   */
  show() {
  }
  /**
   * [Not Implemented] Hide annotations
   * @TODO: needs implementation in View
   */
  hide() {
  }
}
class sa {
  constructor({
    type: e,
    cfiRange: t,
    data: r,
    sectionIndex: i,
    cb: s,
    className: a,
    styles: o
  }) {
    this.type = e, this.cfiRange = t, this.data = r, this.sectionIndex = i, this.mark = void 0, this.cb = s, this.className = a, this.styles = o;
  }
  /**
   * Update stored data
   * @param {object} data
   */
  update(e) {
    this.data = e;
  }
  /**
   * Add to a view
   * @param {View} view
   */
  attach(e) {
    let { cfiRange: t, data: r, type: i, mark: s, cb: a, className: o, styles: u } = this, h;
    return i === "highlight" ? h = e.highlight(t, r, a, o, u) : i === "underline" ? h = e.underline(t, r, a, o, u) : i === "mark" && (h = e.mark(t, r, a)), this.mark = h, this.emit(le.ANNOTATION.ATTACH, h), h;
  }
  /**
   * Remove from a view
   * @param {View} view
   */
  detach(e) {
    let { cfiRange: t, type: r } = this, i;
    return e && (r === "highlight" ? i = e.unhighlight(t) : r === "underline" ? i = e.ununderline(t) : r === "mark" && (i = e.unmark(t))), this.mark = void 0, this.emit(le.ANNOTATION.DETACH, i), i;
  }
  /**
   * [Not Implemented] Get text of an annotation
   * @TODO: needs implementation in contents
   */
  text() {
  }
}
qt(sa.prototype);
var Vt = {}, _i = {};
Object.defineProperty(_i, "__esModule", {
  value: !0
});
_i.createElement = aa;
function aa(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
_i.default = {
  createElement: aa
};
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.proxyMouse = oa;
Hr.clone = ua;
Hr.default = {
  proxyMouse: oa
};
function oa(n, e) {
  function t(a) {
    for (var o = e.length - 1; o >= 0; o--) {
      var u = e[o], h = a.clientX, f = a.clientY;
      if (a.touches && a.touches.length && (h = a.touches[0].clientX, f = a.touches[0].clientY), !!yu(u, n, h, f)) {
        u.dispatchEvent(ua(a));
        break;
      }
    }
  }
  if (n.nodeName === "iframe" || n.nodeName === "IFRAME")
    try {
      this.target = n.contentDocument;
    } catch {
      this.target = n;
    }
  else
    this.target = n;
  for (var r = ["mouseup", "mousedown", "click", "touchstart"], i = 0; i < r.length; i++) {
    var s = r[i];
    this.target.addEventListener(s, function(a) {
      return t(a);
    }, !1);
  }
}
function ua(n) {
  var e = Object.assign({}, n, { bubbles: !1 });
  try {
    return new MouseEvent(n.type, e);
  } catch {
    var t = document.createEvent("MouseEvents");
    return t.initMouseEvent(n.type, !1, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), t;
  }
}
function yu(n, e, t, r) {
  var i = e.getBoundingClientRect();
  function s(f, c, w) {
    var m = f.top - i.top, S = f.left - i.left, N = m + f.height, p = S + f.width;
    return m <= w && S <= c && N > w && p > c;
  }
  var a = n.getBoundingClientRect();
  if (!s(a, t, r))
    return !1;
  for (var o = n.getClientRects(), u = 0, h = o.length; u < h; u++)
    if (s(o[u], t, r))
      return !0;
  return !1;
}
var di, gn;
Object.defineProperty(Vt, "__esModule", {
  value: !0
});
var la = Vt.Underline = gn = Vt.Highlight = Vt.Mark = di = Vt.Pane = void 0, bu = function n(e, t, r) {
  e === null && (e = Function.prototype);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (i === void 0) {
    var s = Object.getPrototypeOf(e);
    return s === null ? void 0 : n(s, t, r);
  } else {
    if ("value" in i)
      return i.value;
    var a = i.get;
    return a === void 0 ? void 0 : a.call(r);
  }
}, Ei = function() {
  function n(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  };
}(), wu = _i, jr = ha(wu), _u = Hr, Eu = ha(_u);
function ha(n) {
  return n && n.__esModule ? n : { default: n };
}
function fa(n, e) {
  if (!n)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : n;
}
function ca(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e);
}
function xi(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
di = Vt.Pane = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.body;
    xi(this, n), this.target = e, this.element = jr.default.createElement("svg"), this.marks = [], this.element.style.position = "absolute", this.element.setAttribute("pointer-events", "none"), Eu.default.proxyMouse(this.target, this.marks), this.container = t, this.container.appendChild(this.element), this.render();
  }
  return Ei(n, [{
    key: "addMark",
    value: function(t) {
      var r = jr.default.createElement("g");
      return this.element.appendChild(r), t.bind(r, this.container), this.marks.push(t), t.render(), t;
    }
  }, {
    key: "removeMark",
    value: function(t) {
      var r = this.marks.indexOf(t);
      if (r !== -1) {
        var i = t.unbind();
        this.element.removeChild(i), this.marks.splice(r, 1);
      }
    }
  }, {
    key: "render",
    value: function() {
      Au(this.element, Du(this.target, this.container));
      var t = !0, r = !1, i = void 0;
      try {
        for (var s = this.marks[Symbol.iterator](), a; !(t = (a = s.next()).done); t = !0) {
          var o = a.value;
          o.render();
        }
      } catch (u) {
        r = !0, i = u;
      } finally {
        try {
          !t && s.return && s.return();
        } finally {
          if (r)
            throw i;
        }
      }
    }
  }]), n;
}();
var xu = Vt.Mark = function() {
  function n() {
    xi(this, n), this.element = null;
  }
  return Ei(n, [{
    key: "bind",
    value: function(t, r) {
      this.element = t, this.container = r;
    }
  }, {
    key: "unbind",
    value: function() {
      var t = this.element;
      return this.element = null, t;
    }
  }, {
    key: "render",
    value: function() {
    }
  }, {
    key: "dispatchEvent",
    value: function(t) {
      this.element && this.element.dispatchEvent(t);
    }
  }, {
    key: "getBoundingClientRect",
    value: function() {
      return this.element.getBoundingClientRect();
    }
  }, {
    key: "getClientRects",
    value: function() {
      for (var t = [], r = this.element.firstChild; r; )
        t.push(r.getBoundingClientRect()), r = r.nextSibling;
      return t;
    }
  }, {
    key: "filteredRanges",
    value: function() {
      var t = Array.from(this.range.getClientRects());
      return t.filter(function(r) {
        for (var i = 0; i < t.length; i++) {
          if (t[i] === r)
            return !0;
          var s = Su(t[i], r);
          if (s)
            return !1;
        }
        return !0;
      });
    }
  }]), n;
}(), Cu = gn = Vt.Highlight = function(n) {
  ca(e, n);
  function e(t, r, i, s) {
    xi(this, e);
    var a = fa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return a.range = t, a.className = r, a.data = i || {}, a.attributes = s || {}, a;
  }
  return Ei(e, [{
    key: "bind",
    value: function(r, i) {
      bu(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "bind", this).call(this, r, i);
      for (var s in this.data)
        this.data.hasOwnProperty(s) && (this.element.dataset[s] = this.data[s]);
      for (var s in this.attributes)
        this.attributes.hasOwnProperty(s) && this.element.setAttribute(s, this.attributes[s]);
      this.className && this.element.classList.add(this.className);
    }
  }, {
    key: "render",
    value: function() {
      for (; this.element.firstChild; )
        this.element.removeChild(this.element.firstChild);
      for (var r = this.element.ownerDocument.createDocumentFragment(), i = this.filteredRanges(), s = this.element.getBoundingClientRect(), a = this.container.getBoundingClientRect(), o = 0, u = i.length; o < u; o++) {
        var h = i[o], f = jr.default.createElement("rect");
        f.setAttribute("x", h.left - s.left + a.left), f.setAttribute("y", h.top - s.top + a.top), f.setAttribute("height", h.height), f.setAttribute("width", h.width), r.appendChild(f);
      }
      this.element.appendChild(r);
    }
  }]), e;
}(xu);
la = Vt.Underline = function(n) {
  ca(e, n);
  function e(t, r, i, s) {
    return xi(this, e), fa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, r, i, s));
  }
  return Ei(e, [{
    key: "render",
    value: function() {
      for (; this.element.firstChild; )
        this.element.removeChild(this.element.firstChild);
      for (var r = this.element.ownerDocument.createDocumentFragment(), i = this.filteredRanges(), s = this.element.getBoundingClientRect(), a = this.container.getBoundingClientRect(), o = 0, u = i.length; o < u; o++) {
        var h = i[o], f = jr.default.createElement("rect");
        f.setAttribute("x", h.left - s.left + a.left), f.setAttribute("y", h.top - s.top + a.top), f.setAttribute("height", h.height), f.setAttribute("width", h.width), f.setAttribute("fill", "none");
        var c = jr.default.createElement("line");
        c.setAttribute("x1", h.left - s.left + a.left), c.setAttribute("x2", h.left - s.left + a.left + h.width), c.setAttribute("y1", h.top - s.top + a.top + h.height - 1), c.setAttribute("y2", h.top - s.top + a.top + h.height - 1), c.setAttribute("stroke-width", 1), c.setAttribute("stroke", "black"), c.setAttribute("stroke-linecap", "square"), r.appendChild(f), r.appendChild(c);
      }
      this.element.appendChild(r);
    }
  }]), e;
}(Cu);
function Du(n, e) {
  var t = e.getBoundingClientRect(), r = n.getBoundingClientRect();
  return {
    top: r.top - t.top,
    left: r.left - t.left,
    height: n.scrollHeight,
    width: n.scrollWidth
  };
}
function Au(n, e) {
  n.style.setProperty("top", e.top + "px", "important"), n.style.setProperty("left", e.left + "px", "important"), n.style.setProperty("height", e.height + "px", "important"), n.style.setProperty("width", e.width + "px", "important");
}
function Su(n, e) {
  return e.right <= n.right && e.left >= n.left && e.top >= n.top && e.bottom <= n.bottom;
}
class da {
  constructor(e, t) {
    this.settings = bt({
      ignoreClass: "",
      axis: void 0,
      //options.layout && options.layout.props.flow === "scrolled" ? "vertical" : "horizontal",
      direction: void 0,
      width: 0,
      height: 0,
      layout: void 0,
      globalLayoutProperties: {},
      method: void 0,
      forceRight: !1,
      allowScriptedContent: !1,
      allowPopups: !1
    }, t || {}), this.id = "epubjs-view-" + bi(), this.section = e, this.index = e.index, this.element = this.container(this.settings.axis), this.added = !1, this.displayed = !1, this.rendered = !1, this.fixedWidth = 0, this.fixedHeight = 0, this.epubcfi = new Fe(), this.layout = this.settings.layout, this.pane = void 0, this.highlights = {}, this.underlines = {}, this.marks = {};
  }
  container(e) {
    var t = document.createElement("div");
    return t.classList.add("epub-view"), t.style.height = "0px", t.style.width = "0px", t.style.overflow = "hidden", t.style.position = "relative", t.style.display = "block", e && e == "horizontal" ? t.style.flex = "none" : t.style.flex = "initial", t;
  }
  create() {
    return this.iframe ? this.iframe : (this.element || (this.element = this.createContainer()), this.iframe = document.createElement("iframe"), this.iframe.id = this.id, this.iframe.scrolling = "no", this.iframe.style.overflow = "hidden", this.iframe.seamless = "seamless", this.iframe.style.border = "none", this.iframe.sandbox = "allow-same-origin", this.settings.allowScriptedContent && (this.iframe.sandbox += " allow-scripts"), this.settings.allowPopups && (this.iframe.sandbox += " allow-popups"), this.iframe.setAttribute("enable-annotation", "true"), this.resizing = !0, this.element.style.visibility = "hidden", this.iframe.style.visibility = "hidden", this.iframe.style.width = "0", this.iframe.style.height = "0", this._width = 0, this._height = 0, this.element.setAttribute("ref", this.index), this.added = !0, this.elementBounds = Qr(this.element), "srcdoc" in this.iframe ? this.supportsSrcdoc = !0 : this.supportsSrcdoc = !1, this.settings.method || (this.settings.method = this.supportsSrcdoc ? "srcdoc" : "write"), this.iframe);
  }
  render(e, t) {
    return this.create(), this.size(), this.sectionRender || (this.sectionRender = this.section.render(e)), this.sectionRender.then((function(r) {
      return this.load(r);
    }).bind(this)).then((function() {
      let r = this.contents.writingMode(), i;
      return this.settings.flow === "scrolled" ? i = r.indexOf("vertical") === 0 ? "horizontal" : "vertical" : i = r.indexOf("vertical") === 0 ? "vertical" : "horizontal", r.indexOf("vertical") === 0 && this.settings.flow === "paginated" && (this.layout.delta = this.layout.height), this.setAxis(i), this.emit(le.VIEWS.AXIS, i), this.setWritingMode(r), this.emit(le.VIEWS.WRITING_MODE, r), this.layout.format(this.contents, this.section, this.axis), this.addListeners(), new Promise((s, a) => {
        this.expand(), this.settings.forceRight && (this.element.style.marginLeft = this.width() + "px"), s();
      });
    }).bind(this), (function(r) {
      return this.emit(le.VIEWS.LOAD_ERROR, r), new Promise((i, s) => {
        s(r);
      });
    }).bind(this)).then((function() {
      this.emit(le.VIEWS.RENDERED, this.section);
    }).bind(this));
  }
  reset() {
    this.iframe && (this.iframe.style.width = "0", this.iframe.style.height = "0", this._width = 0, this._height = 0, this._textWidth = void 0, this._contentWidth = void 0, this._textHeight = void 0, this._contentHeight = void 0), this._needsReframe = !0;
  }
  // Determine locks base on settings
  size(e, t) {
    var r = e || this.settings.width, i = t || this.settings.height;
    this.layout.name === "pre-paginated" ? this.lock("both", r, i) : this.settings.axis === "horizontal" ? this.lock("height", r, i) : this.lock("width", r, i), this.settings.width = r, this.settings.height = i;
  }
  // Lock an axis to element dimensions, taking borders into account
  lock(e, t, r) {
    var i = oi(this.element), s;
    this.iframe ? s = oi(this.iframe) : s = { width: 0, height: 0 }, e == "width" && st(t) && (this.lockedWidth = t - i.width - s.width), e == "height" && st(r) && (this.lockedHeight = r - i.height - s.height), e === "both" && st(t) && st(r) && (this.lockedWidth = t - i.width - s.width, this.lockedHeight = r - i.height - s.height), this.displayed && this.iframe && this.expand();
  }
  // Resize a single axis based on content dimensions
  expand(e) {
    var t = this.lockedWidth, r = this.lockedHeight, i;
    !this.iframe || this._expanding || (this._expanding = !0, this.layout.name === "pre-paginated" ? (t = this.layout.columnWidth, r = this.layout.height) : this.settings.axis === "horizontal" ? (t = this.contents.textWidth(), t % this.layout.pageWidth > 0 && (t = Math.ceil(t / this.layout.pageWidth) * this.layout.pageWidth), this.settings.forceEvenPages && (i = t / this.layout.pageWidth, this.layout.divisor > 1 && this.layout.name === "reflowable" && i % 2 > 0 && (t += this.layout.pageWidth))) : this.settings.axis === "vertical" && (r = this.contents.textHeight(), this.settings.flow === "paginated" && r % this.layout.height > 0 && (r = Math.ceil(r / this.layout.height) * this.layout.height)), (this._needsReframe || t != this._width || r != this._height) && this.reframe(t, r), this._expanding = !1);
  }
  reframe(e, t) {
    var r;
    st(e) && (this.element.style.width = e + "px", this.iframe.style.width = e + "px", this._width = e), st(t) && (this.element.style.height = t + "px", this.iframe.style.height = t + "px", this._height = t);
    let i = this.prevBounds ? e - this.prevBounds.width : e, s = this.prevBounds ? t - this.prevBounds.height : t;
    r = {
      width: e,
      height: t,
      widthDelta: i,
      heightDelta: s
    }, this.pane && this.pane.render(), requestAnimationFrame(() => {
      let a;
      for (let o in this.marks)
        this.marks.hasOwnProperty(o) && (a = this.marks[o], this.placeMark(a.element, a.range));
    }), this.onResize(this, r), this.emit(le.VIEWS.RESIZED, r), this.prevBounds = r, this.elementBounds = Qr(this.element);
  }
  load(e) {
    var t = new Be(), r = t.promise;
    if (!this.iframe)
      return t.reject(new Error("No Iframe Available")), r;
    if (this.iframe.onload = (function(s) {
      this.onLoad(s, t);
    }).bind(this), this.settings.method === "blobUrl")
      this.blobUrl = li(e, "application/xhtml+xml"), this.iframe.src = this.blobUrl, this.element.appendChild(this.iframe);
    else if (this.settings.method === "srcdoc")
      this.iframe.srcdoc = e, this.element.appendChild(this.iframe);
    else {
      if (this.element.appendChild(this.iframe), this.document = this.iframe.contentDocument, !this.document)
        return t.reject(new Error("No Document Available")), r;
      if (this.iframe.contentDocument.open(), window.MSApp && MSApp.execUnsafeLocalFunction) {
        var i = this;
        MSApp.execUnsafeLocalFunction(function() {
          i.iframe.contentDocument.write(e);
        });
      } else
        this.iframe.contentDocument.write(e);
      this.iframe.contentDocument.close();
    }
    return r;
  }
  onLoad(e, t) {
    this.window = this.iframe.contentWindow, this.document = this.iframe.contentDocument, this.contents = new vn(this.document, this.document.body, this.section.cfiBase, this.section.index), this.rendering = !1;
    var r = this.document.querySelector("link[rel='canonical']");
    r ? r.setAttribute("href", this.section.canonical) : (r = this.document.createElement("link"), r.setAttribute("rel", "canonical"), r.setAttribute("href", this.section.canonical), this.document.querySelector("head").appendChild(r)), this.contents.on(le.CONTENTS.EXPAND, () => {
      this.displayed && this.iframe && (this.expand(), this.contents && this.layout.format(this.contents));
    }), this.contents.on(le.CONTENTS.RESIZE, (i) => {
      this.displayed && this.iframe && (this.expand(), this.contents && this.layout.format(this.contents));
    }), t.resolve(this.contents);
  }
  setLayout(e) {
    this.layout = e, this.contents && (this.layout.format(this.contents), this.expand());
  }
  setAxis(e) {
    this.settings.axis = e, e == "horizontal" ? this.element.style.flex = "none" : this.element.style.flex = "initial", this.size();
  }
  setWritingMode(e) {
    this.writingMode = e;
  }
  addListeners() {
  }
  removeListeners(e) {
  }
  display(e) {
    var t = new Be();
    return this.displayed ? t.resolve(this) : this.render(e).then((function() {
      this.emit(le.VIEWS.DISPLAYED, this), this.onDisplayed(this), this.displayed = !0, t.resolve(this);
    }).bind(this), function(r) {
      t.reject(r, this);
    }), t.promise;
  }
  show() {
    this.element.style.visibility = "visible", this.iframe && (this.iframe.style.visibility = "visible", this.iframe.style.transform = "translateZ(0)", this.iframe.offsetWidth, this.iframe.style.transform = null), this.emit(le.VIEWS.SHOWN, this);
  }
  hide() {
    this.element.style.visibility = "hidden", this.iframe.style.visibility = "hidden", this.stopExpanding = !0, this.emit(le.VIEWS.HIDDEN, this);
  }
  offset() {
    return {
      top: this.element.offsetTop,
      left: this.element.offsetLeft
    };
  }
  width() {
    return this._width;
  }
  height() {
    return this._height;
  }
  position() {
    return this.element.getBoundingClientRect();
  }
  locationOf(e) {
    this.iframe.getBoundingClientRect();
    var t = this.contents.locationOf(e, this.settings.ignoreClass);
    return {
      left: t.left,
      top: t.top
    };
  }
  onDisplayed(e) {
  }
  onResize(e, t) {
  }
  bounds(e) {
    return (e || !this.elementBounds) && (this.elementBounds = Qr(this.element)), this.elementBounds;
  }
  highlight(e, t = {}, r, i = "epubjs-hl", s = {}) {
    if (!this.contents)
      return;
    const a = Object.assign({ fill: "yellow", "fill-opacity": "0.3", "mix-blend-mode": "multiply" }, s);
    let o = this.contents.range(e), u = () => {
      this.emit(le.VIEWS.MARK_CLICKED, e, t);
    };
    t.epubcfi = e, this.pane || (this.pane = new di(this.iframe, this.element));
    let h = new gn(o, i, t, a), f = this.pane.addMark(h);
    return this.highlights[e] = { mark: f, element: f.element, listeners: [u, r] }, f.element.setAttribute("ref", i), f.element.addEventListener("click", u), f.element.addEventListener("touchstart", u), r && (f.element.addEventListener("click", r), f.element.addEventListener("touchstart", r)), f;
  }
  underline(e, t = {}, r, i = "epubjs-ul", s = {}) {
    if (!this.contents)
      return;
    const a = Object.assign({ stroke: "black", "stroke-opacity": "0.3", "mix-blend-mode": "multiply" }, s);
    let o = this.contents.range(e), u = () => {
      this.emit(le.VIEWS.MARK_CLICKED, e, t);
    };
    t.epubcfi = e, this.pane || (this.pane = new di(this.iframe, this.element));
    let h = new la(o, i, t, a), f = this.pane.addMark(h);
    return this.underlines[e] = { mark: f, element: f.element, listeners: [u, r] }, f.element.setAttribute("ref", i), f.element.addEventListener("click", u), f.element.addEventListener("touchstart", u), r && (f.element.addEventListener("click", r), f.element.addEventListener("touchstart", r)), f;
  }
  mark(e, t = {}, r) {
    if (!this.contents)
      return;
    if (e in this.marks)
      return this.marks[e];
    let i = this.contents.range(e);
    if (!i)
      return;
    let s = i.commonAncestorContainer, a = s.nodeType === 1 ? s : s.parentNode, o = (h) => {
      this.emit(le.VIEWS.MARK_CLICKED, e, t);
    };
    i.collapsed && s.nodeType === 1 ? (i = new Range(), i.selectNodeContents(s)) : i.collapsed && (i = new Range(), i.selectNodeContents(a));
    let u = this.document.createElement("a");
    return u.setAttribute("ref", "epubjs-mk"), u.style.position = "absolute", u.dataset.epubcfi = e, t && Object.keys(t).forEach((h) => {
      u.dataset[h] = t[h];
    }), r && (u.addEventListener("click", r), u.addEventListener("touchstart", r)), u.addEventListener("click", o), u.addEventListener("touchstart", o), this.placeMark(u, i), this.element.appendChild(u), this.marks[e] = { element: u, range: i, listeners: [o, r] }, a;
  }
  placeMark(e, t) {
    let r, i, s;
    if (this.layout.name === "pre-paginated" || this.settings.axis !== "horizontal") {
      let o = t.getBoundingClientRect();
      r = o.top, i = o.right;
    } else {
      let o = t.getClientRects(), u;
      for (var a = 0; a != o.length; a++)
        u = o[a], (!s || u.left < s) && (s = u.left, i = Math.ceil(s / this.layout.props.pageWidth) * this.layout.props.pageWidth - this.layout.gap / 2, r = u.top);
    }
    e.style.top = `${r}px`, e.style.left = `${i}px`;
  }
  unhighlight(e) {
    let t;
    e in this.highlights && (t = this.highlights[e], this.pane.removeMark(t.mark), t.listeners.forEach((r) => {
      r && (t.element.removeEventListener("click", r), t.element.removeEventListener("touchstart", r));
    }), delete this.highlights[e]);
  }
  ununderline(e) {
    let t;
    e in this.underlines && (t = this.underlines[e], this.pane.removeMark(t.mark), t.listeners.forEach((r) => {
      r && (t.element.removeEventListener("click", r), t.element.removeEventListener("touchstart", r));
    }), delete this.underlines[e]);
  }
  unmark(e) {
    let t;
    e in this.marks && (t = this.marks[e], this.element.removeChild(t.element), t.listeners.forEach((r) => {
      r && (t.element.removeEventListener("click", r), t.element.removeEventListener("touchstart", r));
    }), delete this.marks[e]);
  }
  destroy() {
    for (let e in this.highlights)
      this.unhighlight(e);
    for (let e in this.underlines)
      this.ununderline(e);
    for (let e in this.marks)
      this.unmark(e);
    this.blobUrl && Ys(this.blobUrl), this.displayed && (this.displayed = !1, this.removeListeners(), this.contents.destroy(), this.stopExpanding = !0, this.element.removeChild(this.iframe), this.pane && (this.pane.element.remove(), this.pane = void 0), this.iframe = void 0, this.contents = void 0, this._textWidth = null, this._textHeight = null, this._width = null, this._height = null);
  }
}
qt(da.prototype);
function Tu() {
  var n = "reverse", e = ku();
  return document.body.appendChild(e), e.scrollLeft > 0 ? n = "default" : typeof Element < "u" && Element.prototype.scrollIntoView ? (e.children[0].children[1].scrollIntoView(), e.scrollLeft < 0 && (n = "negative")) : (e.scrollLeft = 1, e.scrollLeft === 0 && (n = "negative")), document.body.removeChild(e), n;
}
function ku() {
  var n = document.createElement("div");
  n.dir = "rtl", n.style.position = "fixed", n.style.width = "1px", n.style.height = "1px", n.style.top = "0px", n.style.left = "0px", n.style.overflow = "hidden";
  var e = document.createElement("div");
  e.style.width = "2px";
  var t = document.createElement("span");
  t.style.width = "1px", t.style.display = "inline-block";
  var r = document.createElement("span");
  return r.style.width = "1px", r.style.display = "inline-block", e.appendChild(t), e.appendChild(r), n.appendChild(e), n;
}
function Nu(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var mn = Nu, Ru = typeof It == "object" && It && It.Object === Object && It, Ou = Ru, Iu = Ou, Lu = typeof self == "object" && self && self.Object === Object && self, Bu = Iu || Lu || Function("return this")(), pa = Bu, Fu = pa, Pu = function() {
  return Fu.Date.now();
}, zu = Pu, ju = /\s/;
function Mu(n) {
  for (var e = n.length; e-- && ju.test(n.charAt(e)); )
    ;
  return e;
}
var Uu = Mu, Wu = Uu, qu = /^\s+/;
function Vu(n) {
  return n && n.slice(0, Wu(n) + 1).replace(qu, "");
}
var Hu = Vu, $u = pa, Zu = $u.Symbol, va = Zu, Kn = va, ga = Object.prototype, Gu = ga.hasOwnProperty, Yu = ga.toString, Rr = Kn ? Kn.toStringTag : void 0;
function Xu(n) {
  var e = Gu.call(n, Rr), t = n[Rr];
  try {
    n[Rr] = void 0;
    var r = !0;
  } catch {
  }
  var i = Yu.call(n);
  return r && (e ? n[Rr] = t : delete n[Rr]), i;
}
var Ku = Xu, Ju = Object.prototype, Qu = Ju.toString;
function el(n) {
  return Qu.call(n);
}
var tl = el, Jn = va, rl = Ku, il = tl, nl = "[object Null]", sl = "[object Undefined]", Qn = Jn ? Jn.toStringTag : void 0;
function al(n) {
  return n == null ? n === void 0 ? sl : nl : Qn && Qn in Object(n) ? rl(n) : il(n);
}
var ol = al;
function ul(n) {
  return n != null && typeof n == "object";
}
var ll = ul, hl = ol, fl = ll, cl = "[object Symbol]";
function dl(n) {
  return typeof n == "symbol" || fl(n) && hl(n) == cl;
}
var pl = dl, vl = Hu, es = mn, gl = pl, ts = 0 / 0, ml = /^[-+]0x[0-9a-f]+$/i, yl = /^0b[01]+$/i, bl = /^0o[0-7]+$/i, wl = parseInt;
function _l(n) {
  if (typeof n == "number")
    return n;
  if (gl(n))
    return ts;
  if (es(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = es(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = vl(n);
  var t = yl.test(n);
  return t || bl.test(n) ? wl(n.slice(2), t ? 2 : 8) : ml.test(n) ? ts : +n;
}
var El = _l, xl = mn, ji = zu, rs = El, Cl = "Expected a function", Dl = Math.max, Al = Math.min;
function Sl(n, e, t) {
  var r, i, s, a, o, u, h = 0, f = !1, c = !1, w = !0;
  if (typeof n != "function")
    throw new TypeError(Cl);
  e = rs(e) || 0, xl(t) && (f = !!t.leading, c = "maxWait" in t, s = c ? Dl(rs(t.maxWait) || 0, e) : s, w = "trailing" in t ? !!t.trailing : w);
  function m(C) {
    var T = r, R = i;
    return r = i = void 0, h = C, a = n.apply(R, T), a;
  }
  function S(C) {
    return h = C, o = setTimeout(v, e), f ? m(C) : a;
  }
  function N(C) {
    var T = C - u, R = C - h, z = e - T;
    return c ? Al(z, s - R) : z;
  }
  function p(C) {
    var T = C - u, R = C - h;
    return u === void 0 || T >= e || T < 0 || c && R >= s;
  }
  function v() {
    var C = ji();
    if (p(C))
      return y(C);
    o = setTimeout(v, N(C));
  }
  function y(C) {
    return o = void 0, w && r ? m(C) : (r = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), h = 0, r = u = i = o = void 0;
  }
  function k() {
    return o === void 0 ? a : y(ji());
  }
  function b() {
    var C = ji(), T = p(C);
    if (r = arguments, i = this, u = C, T) {
      if (o === void 0)
        return S(u);
      if (c)
        return clearTimeout(o), o = setTimeout(v, e), m(u);
    }
    return o === void 0 && (o = setTimeout(v, e)), a;
  }
  return b.cancel = A, b.flush = k, b;
}
var ma = Sl;
const ya = /* @__PURE__ */ or(ma);
var Tl = ma, kl = mn, Nl = "Expected a function";
function Rl(n, e, t) {
  var r = !0, i = !0;
  if (typeof n != "function")
    throw new TypeError(Nl);
  return kl(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Tl(n, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
var Ol = Rl;
const Il = /* @__PURE__ */ or(Ol);
class Ll {
  constructor(e) {
    this.settings = e || {}, this.id = "epubjs-container-" + bi(), this.container = this.create(this.settings), this.settings.hidden && (this.wrapper = this.wrap(this.container));
  }
  /*
  * Creates an element to render to.
  * Resizes to passed width and height or to the elements size
  */
  create(e) {
    let t = e.height, r = e.width, i = e.overflow || !1, s = e.axis || "vertical", a = e.direction;
    bt(this.settings, e), e.height && st(e.height) && (t = e.height + "px"), e.width && st(e.width) && (r = e.width + "px");
    let o = document.createElement("div");
    return o.id = this.id, o.classList.add("epub-container"), o.style.wordSpacing = "0", o.style.lineHeight = "0", o.style.verticalAlign = "top", o.style.position = "relative", s === "horizontal" && (o.style.display = "flex", o.style.flexDirection = "row", o.style.flexWrap = "nowrap"), r && (o.style.width = r), t && (o.style.height = t), i && (i === "scroll" && s === "vertical" ? (o.style["overflow-y"] = i, o.style["overflow-x"] = "hidden") : i === "scroll" && s === "horizontal" ? (o.style["overflow-y"] = "hidden", o.style["overflow-x"] = i) : o.style.overflow = i), a && (o.dir = a, o.style.direction = a), a && this.settings.fullsize && (document.body.style.direction = a), o;
  }
  wrap(e) {
    var t = document.createElement("div");
    return t.style.visibility = "hidden", t.style.overflow = "hidden", t.style.width = "0", t.style.height = "0", t.appendChild(e), t;
  }
  getElement(e) {
    var t;
    if (Vs(e) ? t = e : typeof e == "string" && (t = document.getElementById(e)), !t)
      throw new Error("Not an Element");
    return t;
  }
  attachTo(e) {
    var t = this.getElement(e), r;
    if (t)
      return this.settings.hidden ? r = this.wrapper : r = this.container, t.appendChild(r), this.element = t, t;
  }
  getContainer() {
    return this.container;
  }
  onResize(e) {
    (!st(this.settings.width) || !st(this.settings.height)) && (this.resizeFunc = Il(e, 50), window.addEventListener("resize", this.resizeFunc, !1));
  }
  onOrientationChange(e) {
    this.orientationChangeFunc = e, window.addEventListener("orientationchange", this.orientationChangeFunc, !1);
  }
  size(e, t) {
    var r;
    let i = e || this.settings.width, s = t || this.settings.height;
    e === null ? (r = this.element.getBoundingClientRect(), r.width && (e = Math.floor(r.width), this.container.style.width = e + "px")) : st(e) ? this.container.style.width = e + "px" : this.container.style.width = e, t === null ? (r = r || this.element.getBoundingClientRect(), r.height && (t = r.height, this.container.style.height = t + "px")) : st(t) ? this.container.style.height = t + "px" : this.container.style.height = t, st(e) || (e = this.container.clientWidth), st(t) || (t = this.container.clientHeight), this.containerStyles = window.getComputedStyle(this.container), this.containerPadding = {
      left: parseFloat(this.containerStyles["padding-left"]) || 0,
      right: parseFloat(this.containerStyles["padding-right"]) || 0,
      top: parseFloat(this.containerStyles["padding-top"]) || 0,
      bottom: parseFloat(this.containerStyles["padding-bottom"]) || 0
    };
    let a = ui(), o = window.getComputedStyle(document.body), u = {
      left: parseFloat(o["padding-left"]) || 0,
      right: parseFloat(o["padding-right"]) || 0,
      top: parseFloat(o["padding-top"]) || 0,
      bottom: parseFloat(o["padding-bottom"]) || 0
    };
    return i || (e = a.width - u.left - u.right), (this.settings.fullsize && !s || !s) && (t = a.height - u.top - u.bottom), {
      width: e - this.containerPadding.left - this.containerPadding.right,
      height: t - this.containerPadding.top - this.containerPadding.bottom
    };
  }
  bounds() {
    let e;
    return this.container.style.overflow !== "visible" && (e = this.container && this.container.getBoundingClientRect()), !e || !e.width || !e.height ? ui() : e;
  }
  getSheet() {
    var e = document.createElement("style");
    return e.appendChild(document.createTextNode("")), document.head.appendChild(e), e.sheet;
  }
  addStyleRules(e, t) {
    var r = "#" + this.id + " ", i = "";
    this.sheet || (this.sheet = this.getSheet()), t.forEach(function(s) {
      for (var a in s)
        s.hasOwnProperty(a) && (i += a + ":" + s[a] + ";");
    }), this.sheet.insertRule(r + e + " {" + i + "}", 0);
  }
  axis(e) {
    e === "horizontal" ? (this.container.style.display = "flex", this.container.style.flexDirection = "row", this.container.style.flexWrap = "nowrap") : this.container.style.display = "block", this.settings.axis = e;
  }
  // orientation(orientation) {
  // 	if (orientation === "landscape") {
  //
  // 	} else {
  //
  // 	}
  //
  // 	this.orientation = orientation;
  // }
  direction(e) {
    this.container && (this.container.dir = e, this.container.style.direction = e), this.settings.fullsize && (document.body.style.direction = e), this.settings.dir = e;
  }
  overflow(e) {
    this.container && (e === "scroll" && this.settings.axis === "vertical" ? (this.container.style["overflow-y"] = e, this.container.style["overflow-x"] = "hidden") : e === "scroll" && this.settings.axis === "horizontal" ? (this.container.style["overflow-y"] = "hidden", this.container.style["overflow-x"] = e) : this.container.style.overflow = e), this.settings.overflow = e;
  }
  destroy() {
    this.element && (this.settings.hidden ? this.wrapper : this.container, this.element.contains(this.container) && this.element.removeChild(this.container), window.removeEventListener("resize", this.resizeFunc), window.removeEventListener("orientationChange", this.orientationChangeFunc));
  }
}
class Bl {
  constructor(e) {
    this.container = e, this._views = [], this.length = 0, this.hidden = !1;
  }
  all() {
    return this._views;
  }
  first() {
    return this._views[0];
  }
  last() {
    return this._views[this._views.length - 1];
  }
  indexOf(e) {
    return this._views.indexOf(e);
  }
  slice() {
    return this._views.slice.apply(this._views, arguments);
  }
  get(e) {
    return this._views[e];
  }
  append(e) {
    return this._views.push(e), this.container && this.container.appendChild(e.element), this.length++, e;
  }
  prepend(e) {
    return this._views.unshift(e), this.container && this.container.insertBefore(e.element, this.container.firstChild), this.length++, e;
  }
  insert(e, t) {
    return this._views.splice(t, 0, e), this.container && (t < this.container.children.length ? this.container.insertBefore(e.element, this.container.children[t]) : this.container.appendChild(e.element)), this.length++, e;
  }
  remove(e) {
    var t = this._views.indexOf(e);
    t > -1 && this._views.splice(t, 1), this.destroy(e), this.length--;
  }
  destroy(e) {
    e.displayed && e.destroy(), this.container && this.container.removeChild(e.element), e = null;
  }
  // Iterators
  forEach() {
    return this._views.forEach.apply(this._views, arguments);
  }
  clear() {
    var e, t = this.length;
    if (this.length) {
      for (var r = 0; r < t; r++)
        e = this._views[r], this.destroy(e);
      this._views = [], this.length = 0;
    }
  }
  find(e) {
    for (var t, r = this.length, i = 0; i < r; i++)
      if (t = this._views[i], t.displayed && t.section.index == e.index)
        return t;
  }
  displayed() {
    for (var e = [], t, r = this.length, i = 0; i < r; i++)
      t = this._views[i], t.displayed && e.push(t);
    return e;
  }
  show() {
    for (var e, t = this.length, r = 0; r < t; r++)
      e = this._views[r], e.displayed && e.show();
    this.hidden = !1;
  }
  hide() {
    for (var e, t = this.length, r = 0; r < t; r++)
      e = this._views[r], e.displayed && e.hide();
    this.hidden = !0;
  }
}
class pi {
  constructor(e) {
    this.name = "default", this.optsSettings = e.settings, this.View = e.view, this.request = e.request, this.renditionQueue = e.queue, this.q = new pn(this), this.settings = bt(this.settings || {}, {
      infinite: !0,
      hidden: !1,
      width: void 0,
      height: void 0,
      axis: void 0,
      writingMode: void 0,
      flow: "scrolled",
      ignoreClass: "",
      fullsize: void 0,
      allowScriptedContent: !1,
      allowPopups: !1
    }), bt(this.settings, e.settings || {}), this.viewSettings = {
      ignoreClass: this.settings.ignoreClass,
      axis: this.settings.axis,
      flow: this.settings.flow,
      layout: this.layout,
      method: this.settings.method,
      // srcdoc, blobUrl, write
      width: 0,
      height: 0,
      forceEvenPages: !0,
      allowScriptedContent: this.settings.allowScriptedContent,
      allowPopups: this.settings.allowPopups
    }, this.rendered = !1;
  }
  render(e, t) {
    let r = e.tagName;
    typeof this.settings.fullsize > "u" && r && (r.toLowerCase() == "body" || r.toLowerCase() == "html") && (this.settings.fullsize = !0), this.settings.fullsize && (this.settings.overflow = "visible", this.overflow = this.settings.overflow), this.settings.size = t, this.settings.rtlScrollType = Tu(), this.stage = new Ll({
      width: t.width,
      height: t.height,
      overflow: this.overflow,
      hidden: this.settings.hidden,
      axis: this.settings.axis,
      fullsize: this.settings.fullsize,
      direction: this.settings.direction
    }), this.stage.attachTo(e), this.container = this.stage.getContainer(), this.views = new Bl(this.container), this._bounds = this.bounds(), this._stageSize = this.stage.size(), this.viewSettings.width = this._stageSize.width, this.viewSettings.height = this._stageSize.height, this.stage.onResize(this.onResized.bind(this)), this.stage.onOrientationChange(this.onOrientationChange.bind(this)), this.addEventListeners(), this.layout && this.updateLayout(), this.rendered = !0;
  }
  addEventListeners() {
    var e;
    window.addEventListener("unload", (function(t) {
      this.destroy();
    }).bind(this)), this.settings.fullsize ? e = window : e = this.container, this._onScroll = this.onScroll.bind(this), e.addEventListener("scroll", this._onScroll);
  }
  removeEventListeners() {
    var e;
    this.settings.fullsize ? e = window : e = this.container, e.removeEventListener("scroll", this._onScroll), this._onScroll = void 0;
  }
  destroy() {
    clearTimeout(this.orientationTimeout), clearTimeout(this.resizeTimeout), clearTimeout(this.afterScrolled), this.clear(), this.removeEventListeners(), this.stage.destroy(), this.rendered = !1;
  }
  onOrientationChange(e) {
    let { orientation: t } = window;
    this.optsSettings.resizeOnOrientationChange && this.resize(), clearTimeout(this.orientationTimeout), this.orientationTimeout = setTimeout((function() {
      this.orientationTimeout = void 0, this.optsSettings.resizeOnOrientationChange && this.resize(), this.emit(le.MANAGERS.ORIENTATION_CHANGE, t);
    }).bind(this), 500);
  }
  onResized(e) {
    this.resize();
  }
  resize(e, t, r) {
    let i = this.stage.size(e, t);
    if (this.winBounds = ui(), this.orientationTimeout && this.winBounds.width === this.winBounds.height) {
      this._stageSize = void 0;
      return;
    }
    this._stageSize && this._stageSize.width === i.width && this._stageSize.height === i.height || (this._stageSize = i, this._bounds = this.bounds(), this.clear(), this.viewSettings.width = this._stageSize.width, this.viewSettings.height = this._stageSize.height, this.updateLayout(), this.emit(le.MANAGERS.RESIZED, {
      width: this._stageSize.width,
      height: this._stageSize.height
    }, r));
  }
  createView(e, t) {
    return new this.View(e, bt(this.viewSettings, { forceRight: t }));
  }
  handleNextPrePaginated(e, t, r) {
    let i;
    if (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
      if (e || t.index === 0)
        return;
      if (i = t.next(), i && !i.properties.includes("page-spread-left"))
        return r.call(this, i);
    }
  }
  display(e, t) {
    var r = new Be(), i = r.promise;
    (t === e.href || st(t)) && (t = void 0);
    var s = this.views.find(e);
    if (s && e && this.layout.name !== "pre-paginated") {
      let o = s.offset();
      if (this.settings.direction === "ltr")
        this.scrollTo(o.left, o.top, !0);
      else {
        let u = s.width();
        this.scrollTo(o.left + u, o.top, !0);
      }
      if (t) {
        let u = s.locationOf(t), h = s.width();
        this.moveTo(u, h);
      }
      return r.resolve(), i;
    }
    this.clear();
    let a = !1;
    return this.layout.name === "pre-paginated" && this.layout.divisor === 2 && e.properties.includes("page-spread-right") && (a = !0), this.add(e, a).then((function(o) {
      if (t) {
        let u = o.locationOf(t), h = o.width();
        this.moveTo(u, h);
      }
    }).bind(this), (o) => {
      r.reject(o);
    }).then((function() {
      return this.handleNextPrePaginated(a, e, this.add);
    }).bind(this)).then((function() {
      this.views.show(), r.resolve();
    }).bind(this)), i;
  }
  afterDisplayed(e) {
    this.emit(le.MANAGERS.ADDED, e);
  }
  afterResized(e) {
    this.emit(le.MANAGERS.RESIZE, e.section);
  }
  moveTo(e, t) {
    var r = 0, i = 0;
    this.isPaginated ? (r = Math.floor(e.left / this.layout.delta) * this.layout.delta, r + this.layout.delta > this.container.scrollWidth && (r = this.container.scrollWidth - this.layout.delta), i = Math.floor(e.top / this.layout.delta) * this.layout.delta, i + this.layout.delta > this.container.scrollHeight && (i = this.container.scrollHeight - this.layout.delta)) : i = e.top, this.settings.direction === "rtl" && (r = r + this.layout.delta, r = r - t), this.scrollTo(r, i, !0);
  }
  add(e, t) {
    var r = this.createView(e, t);
    return this.views.append(r), r.onDisplayed = this.afterDisplayed.bind(this), r.onResize = this.afterResized.bind(this), r.on(le.VIEWS.AXIS, (i) => {
      this.updateAxis(i);
    }), r.on(le.VIEWS.WRITING_MODE, (i) => {
      this.updateWritingMode(i);
    }), r.display(this.request);
  }
  append(e, t) {
    var r = this.createView(e, t);
    return this.views.append(r), r.onDisplayed = this.afterDisplayed.bind(this), r.onResize = this.afterResized.bind(this), r.on(le.VIEWS.AXIS, (i) => {
      this.updateAxis(i);
    }), r.on(le.VIEWS.WRITING_MODE, (i) => {
      this.updateWritingMode(i);
    }), r.display(this.request);
  }
  prepend(e, t) {
    var r = this.createView(e, t);
    return r.on(le.VIEWS.RESIZED, (i) => {
      this.counter(i);
    }), this.views.prepend(r), r.onDisplayed = this.afterDisplayed.bind(this), r.onResize = this.afterResized.bind(this), r.on(le.VIEWS.AXIS, (i) => {
      this.updateAxis(i);
    }), r.on(le.VIEWS.WRITING_MODE, (i) => {
      this.updateWritingMode(i);
    }), r.display(this.request);
  }
  counter(e) {
    this.settings.axis === "vertical" ? this.scrollBy(0, e.heightDelta, !0) : this.scrollBy(e.widthDelta, 0, !0);
  }
  // resizeView(view) {
  //
  // 	if(this.settings.globalLayoutProperties.layout === "pre-paginated") {
  // 		view.lock("both", this.bounds.width, this.bounds.height);
  // 	} else {
  // 		view.lock("width", this.bounds.width, this.bounds.height);
  // 	}
  //
  // };
  next() {
    var e, t;
    let r = this.settings.direction;
    if (this.views.length && (this.isPaginated && this.settings.axis === "horizontal" && (!r || r === "ltr") ? (this.scrollLeft = this.container.scrollLeft, t = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta, t <= this.container.scrollWidth ? this.scrollBy(this.layout.delta, 0, !0) : e = this.views.last().section.next()) : this.isPaginated && this.settings.axis === "horizontal" && r === "rtl" ? (this.scrollLeft = this.container.scrollLeft, this.settings.rtlScrollType === "default" ? (t = this.container.scrollLeft, t > 0 ? this.scrollBy(this.layout.delta, 0, !0) : e = this.views.last().section.next()) : (t = this.container.scrollLeft + this.layout.delta * -1, t > this.container.scrollWidth * -1 ? this.scrollBy(this.layout.delta, 0, !0) : e = this.views.last().section.next())) : this.isPaginated && this.settings.axis === "vertical" ? (this.scrollTop = this.container.scrollTop, this.container.scrollTop + this.container.offsetHeight < this.container.scrollHeight ? this.scrollBy(0, this.layout.height, !0) : e = this.views.last().section.next()) : e = this.views.last().section.next(), e)) {
      this.clear(), this.updateLayout();
      let i = !1;
      return this.layout.name === "pre-paginated" && this.layout.divisor === 2 && e.properties.includes("page-spread-right") && (i = !0), this.append(e, i).then((function() {
        return this.handleNextPrePaginated(i, e, this.append);
      }).bind(this), (s) => s).then((function() {
        !this.isPaginated && this.settings.axis === "horizontal" && this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" && this.scrollTo(this.container.scrollWidth, 0, !0), this.views.show();
      }).bind(this));
    }
  }
  prev() {
    var e, t;
    let r = this.settings.direction;
    if (this.views.length && (this.isPaginated && this.settings.axis === "horizontal" && (!r || r === "ltr") ? (this.scrollLeft = this.container.scrollLeft, t = this.container.scrollLeft, t > 0 ? this.scrollBy(-this.layout.delta, 0, !0) : e = this.views.first().section.prev()) : this.isPaginated && this.settings.axis === "horizontal" && r === "rtl" ? (this.scrollLeft = this.container.scrollLeft, this.settings.rtlScrollType === "default" ? (t = this.container.scrollLeft + this.container.offsetWidth, t < this.container.scrollWidth ? this.scrollBy(-this.layout.delta, 0, !0) : e = this.views.first().section.prev()) : (t = this.container.scrollLeft, t < 0 ? this.scrollBy(-this.layout.delta, 0, !0) : e = this.views.first().section.prev())) : this.isPaginated && this.settings.axis === "vertical" ? (this.scrollTop = this.container.scrollTop, this.container.scrollTop > 0 ? this.scrollBy(0, -this.layout.height, !0) : e = this.views.first().section.prev()) : e = this.views.first().section.prev(), e)) {
      this.clear(), this.updateLayout();
      let i = !1;
      return this.layout.name === "pre-paginated" && this.layout.divisor === 2 && typeof e.prev() != "object" && (i = !0), this.prepend(e, i).then((function() {
        var s;
        if (this.layout.name === "pre-paginated" && this.layout.divisor > 1 && (s = e.prev(), s))
          return this.prepend(s);
      }).bind(this), (s) => s).then((function() {
        this.isPaginated && this.settings.axis === "horizontal" && (this.settings.direction === "rtl" ? this.settings.rtlScrollType === "default" ? this.scrollTo(0, 0, !0) : this.scrollTo(this.container.scrollWidth * -1 + this.layout.delta, 0, !0) : this.scrollTo(this.container.scrollWidth - this.layout.delta, 0, !0)), this.views.show();
      }).bind(this));
    }
  }
  current() {
    var e = this.visible();
    return e.length ? e[e.length - 1] : null;
  }
  clear() {
    this.views && (this.views.hide(), this.scrollTo(0, 0, !0), this.views.clear());
  }
  currentLocation() {
    return this.updateLayout(), this.isPaginated && this.settings.axis === "horizontal" ? this.location = this.paginatedLocation() : this.location = this.scrolledLocation(), this.location;
  }
  scrolledLocation() {
    let e = this.visible(), t = this.container.getBoundingClientRect(), r = t.height < window.innerHeight ? t.height : window.innerHeight, i = t.width < window.innerWidth ? t.width : window.innerWidth, s = this.settings.axis === "vertical";
    this.settings.direction;
    let a = 0, o = 0;
    return this.settings.fullsize && (a = s ? window.scrollY : window.scrollX), e.map((h) => {
      let { index: f, href: c } = h.section, w = h.position(), m = h.width(), S = h.height(), N, p, v, y;
      s ? (N = a + t.top - w.top + o, p = N + r - o, y = this.layout.count(S, r).pages, v = r) : (N = a + t.left - w.left + o, p = N + i - o, y = this.layout.count(m, i).pages, v = i);
      let A = Math.ceil(N / v), k = [], b = Math.ceil(p / v);
      if (this.settings.direction === "rtl" && !s) {
        let R = A;
        A = y - b, b = y - R;
      }
      k = [];
      for (var C = A; C <= b; C++) {
        let R = C + 1;
        k.push(R);
      }
      let T = this.mapping.page(h.contents, h.section.cfiBase, N, p);
      return {
        index: f,
        href: c,
        pages: k,
        totalPages: y,
        mapping: T
      };
    });
  }
  paginatedLocation() {
    let e = this.visible(), t = this.container.getBoundingClientRect(), r = 0, i = 0;
    return this.settings.fullsize && (r = window.scrollX), e.map((a) => {
      let { index: o, href: u } = a.section, h, f = a.position(), c = a.width(), w, m, S;
      this.settings.direction === "rtl" ? (h = t.right - r, S = Math.min(Math.abs(h - f.left), this.layout.width) - i, m = f.width - (f.right - h) - i, w = m - S) : (h = t.left + r, S = Math.min(f.right - h, this.layout.width) - i, w = h - f.left + i, m = w + S), i += S;
      let N = this.mapping.page(a.contents, a.section.cfiBase, w, m), p = this.layout.count(c).pages, v = Math.floor(w / this.layout.pageWidth), y = [], A = Math.floor(m / this.layout.pageWidth);
      if (v < 0 && (v = 0, A = A + 1), this.settings.direction === "rtl") {
        let b = v;
        v = p - A, A = p - b;
      }
      for (var k = v + 1; k <= A; k++) {
        let b = k;
        y.push(b);
      }
      return {
        index: o,
        href: u,
        pages: y,
        totalPages: p,
        mapping: N
      };
    });
  }
  isVisible(e, t, r, i) {
    var s = e.position(), a = i || this.bounds();
    return this.settings.axis === "horizontal" && s.right > a.left - t && s.left < a.right + r ? !0 : this.settings.axis === "vertical" && s.bottom > a.top - t && s.top < a.bottom + r;
  }
  visible() {
    for (var e = this.bounds(), t = this.views.displayed(), r = t.length, i = [], s, a, o = 0; o < r; o++)
      a = t[o], s = this.isVisible(a, 0, 0, e), s === !0 && i.push(a);
    return i;
  }
  scrollBy(e, t, r) {
    let i = this.settings.direction === "rtl" ? -1 : 1;
    r && (this.ignore = !0), this.settings.fullsize ? window.scrollBy(e * i, t * i) : (e && (this.container.scrollLeft += e * i), t && (this.container.scrollTop += t)), this.scrolled = !0;
  }
  scrollTo(e, t, r) {
    r && (this.ignore = !0), this.settings.fullsize ? window.scrollTo(e, t) : (this.container.scrollLeft = e, this.container.scrollTop = t), this.scrolled = !0;
  }
  onScroll() {
    let e, t;
    this.settings.fullsize ? (e = window.scrollY, t = window.scrollX) : (e = this.container.scrollTop, t = this.container.scrollLeft), this.scrollTop = e, this.scrollLeft = t, this.ignore ? this.ignore = !1 : (this.emit(le.MANAGERS.SCROLL, {
      top: e,
      left: t
    }), clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout((function() {
      this.emit(le.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }).bind(this), 20));
  }
  bounds() {
    var e;
    return e = this.stage.bounds(), e;
  }
  applyLayout(e) {
    this.layout = e, this.updateLayout(), this.views && this.views.length > 0 && this.layout.name === "pre-paginated" && this.display(this.views.first().section);
  }
  updateLayout() {
    this.stage && (this._stageSize = this.stage.size(), this.isPaginated ? (this.layout.calculate(
      this._stageSize.width,
      this._stageSize.height,
      this.settings.gap
    ), this.settings.offset = this.layout.delta / this.layout.divisor) : this.layout.calculate(this._stageSize.width, this._stageSize.height), this.viewSettings.width = this.layout.width, this.viewSettings.height = this.layout.height, this.setLayout(this.layout));
  }
  setLayout(e) {
    this.viewSettings.layout = e, this.mapping = new ci(e.props, this.settings.direction, this.settings.axis), this.views && this.views.forEach(function(t) {
      t && t.setLayout(e);
    });
  }
  updateWritingMode(e) {
    this.writingMode = e;
  }
  updateAxis(e, t) {
    !t && e === this.settings.axis || (this.settings.axis = e, this.stage && this.stage.axis(e), this.viewSettings.axis = e, this.mapping && (this.mapping = new ci(this.layout.props, this.settings.direction, this.settings.axis)), this.layout && (e === "vertical" ? this.layout.spread("none") : this.layout.spread(this.layout.settings.spread)));
  }
  updateFlow(e, t = "auto") {
    let r = e === "paginated" || e === "auto";
    this.isPaginated = r, e === "scrolled-doc" || e === "scrolled-continuous" || e === "scrolled" ? this.updateAxis("vertical") : this.updateAxis("horizontal"), this.viewSettings.flow = e, this.settings.overflow ? this.overflow = this.settings.overflow : this.overflow = r ? "hidden" : t, this.stage && this.stage.overflow(this.overflow), this.updateLayout();
  }
  getContents() {
    var e = [];
    return this.views && this.views.forEach(function(t) {
      const r = t && t.contents;
      r && e.push(r);
    }), e;
  }
  direction(e = "ltr") {
    this.settings.direction = e, this.stage && this.stage.direction(e), this.viewSettings.direction = e, this.updateLayout();
  }
  isRendered() {
    return this.rendered;
  }
}
qt(pi.prototype);
const Fl = Math.PI / 2, Pl = {
  easeOutSine: function(n) {
    return Math.sin(n * Fl);
  },
  easeInOutSine: function(n) {
    return -0.5 * (Math.cos(Math.PI * n) - 1);
  },
  easeInOutQuint: function(n) {
    return (n /= 0.5) < 1 ? 0.5 * Math.pow(n, 5) : 0.5 * (Math.pow(n - 2, 5) + 2);
  },
  easeInCubic: function(n) {
    return Math.pow(n, 3);
  }
};
class Xi {
  constructor(e, t) {
    this.settings = bt({
      duration: 80,
      minVelocity: 0.2,
      minDistance: 10,
      easing: Pl.easeInCubic
    }, t || {}), this.supportsTouch = this.supportsTouch(), this.supportsTouch && this.setup(e);
  }
  setup(e) {
    this.manager = e, this.layout = this.manager.layout, this.fullsize = this.manager.settings.fullsize, this.fullsize ? (this.element = this.manager.stage.element, this.scroller = window, this.disableScroll()) : (this.element = this.manager.stage.container, this.scroller = this.element, this.element.style.WebkitOverflowScrolling = "touch"), this.manager.settings.offset = this.layout.width, this.manager.settings.afterScrolledTimeout = this.settings.duration * 2, this.isVertical = this.manager.settings.axis === "vertical", !(!this.manager.isPaginated || this.isVertical) && (this.touchCanceler = !1, this.resizeCanceler = !1, this.snapping = !1, this.scrollLeft, this.scrollTop, this.startTouchX = void 0, this.startTouchY = void 0, this.startTime = void 0, this.endTouchX = void 0, this.endTouchY = void 0, this.endTime = void 0, this.addListeners());
  }
  supportsTouch() {
    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  }
  disableScroll() {
    this.element.style.overflow = "hidden";
  }
  enableScroll() {
    this.element.style.overflow = "";
  }
  addListeners() {
    this._onResize = this.onResize.bind(this), window.addEventListener("resize", this._onResize), this._onScroll = this.onScroll.bind(this), this.scroller.addEventListener("scroll", this._onScroll), this._onTouchStart = this.onTouchStart.bind(this), this.scroller.addEventListener("touchstart", this._onTouchStart, { passive: !0 }), this.on("touchstart", this._onTouchStart), this._onTouchMove = this.onTouchMove.bind(this), this.scroller.addEventListener("touchmove", this._onTouchMove, { passive: !0 }), this.on("touchmove", this._onTouchMove), this._onTouchEnd = this.onTouchEnd.bind(this), this.scroller.addEventListener("touchend", this._onTouchEnd, { passive: !0 }), this.on("touchend", this._onTouchEnd), this._afterDisplayed = this.afterDisplayed.bind(this), this.manager.on(le.MANAGERS.ADDED, this._afterDisplayed);
  }
  removeListeners() {
    window.removeEventListener("resize", this._onResize), this._onResize = void 0, this.scroller.removeEventListener("scroll", this._onScroll), this._onScroll = void 0, this.scroller.removeEventListener("touchstart", this._onTouchStart, { passive: !0 }), this.off("touchstart", this._onTouchStart), this._onTouchStart = void 0, this.scroller.removeEventListener("touchmove", this._onTouchMove, { passive: !0 }), this.off("touchmove", this._onTouchMove), this._onTouchMove = void 0, this.scroller.removeEventListener("touchend", this._onTouchEnd, { passive: !0 }), this.off("touchend", this._onTouchEnd), this._onTouchEnd = void 0, this.manager.off(le.MANAGERS.ADDED, this._afterDisplayed), this._afterDisplayed = void 0;
  }
  afterDisplayed(e) {
    let t = e.contents;
    ["touchstart", "touchmove", "touchend"].forEach((r) => {
      t.on(r, (i) => this.triggerViewEvent(i, t));
    });
  }
  triggerViewEvent(e, t) {
    this.emit(e.type, e, t);
  }
  onScroll(e) {
    this.scrollLeft = this.fullsize ? window.scrollX : this.scroller.scrollLeft, this.scrollTop = this.fullsize ? window.scrollY : this.scroller.scrollTop;
  }
  onResize(e) {
    this.resizeCanceler = !0;
  }
  onTouchStart(e) {
    let { screenX: t, screenY: r } = e.touches[0];
    this.fullsize && this.enableScroll(), this.touchCanceler = !0, this.startTouchX || (this.startTouchX = t, this.startTouchY = r, this.startTime = this.now()), this.endTouchX = t, this.endTouchY = r, this.endTime = this.now();
  }
  onTouchMove(e) {
    let { screenX: t, screenY: r } = e.touches[0], i = Math.abs(r - this.endTouchY);
    this.touchCanceler = !0, !this.fullsize && i < 10 && (this.element.scrollLeft -= t - this.endTouchX), this.endTouchX = t, this.endTouchY = r, this.endTime = this.now();
  }
  onTouchEnd(e) {
    this.fullsize && this.disableScroll(), this.touchCanceler = !1;
    let t = this.wasSwiped();
    t !== 0 ? this.snap(t) : this.snap(), this.startTouchX = void 0, this.startTouchY = void 0, this.startTime = void 0, this.endTouchX = void 0, this.endTouchY = void 0, this.endTime = void 0;
  }
  wasSwiped() {
    let e = this.layout.pageWidth * this.layout.divisor, t = this.endTouchX - this.startTouchX, r = Math.abs(t), i = this.endTime - this.startTime, s = t / i, a = this.settings.minVelocity;
    if (r <= this.settings.minDistance || r >= e)
      return 0;
    if (s > a)
      return -1;
    if (s < -a)
      return 1;
  }
  needsSnap() {
    let e = this.scrollLeft, t = this.layout.pageWidth * this.layout.divisor;
    return e % t !== 0;
  }
  snap(e = 0) {
    let t = this.scrollLeft, r = this.layout.pageWidth * this.layout.divisor, i = Math.round(t / r) * r;
    return e && (i += e * r), this.smoothScrollTo(i);
  }
  smoothScrollTo(e) {
    const t = new Be(), r = this.scrollLeft, i = this.now(), s = this.settings.duration, a = this.settings.easing;
    this.snapping = !0;
    function o() {
      const u = this.now(), h = Math.min(1, (u - i) / s);
      if (a(h), this.touchCanceler || this.resizeCanceler) {
        this.resizeCanceler = !1, this.snapping = !1, t.resolve();
        return;
      }
      h < 1 ? (window.requestAnimationFrame(o.bind(this)), this.scrollTo(r + (e - r) * h, 0)) : (this.scrollTo(e, 0), this.snapping = !1, t.resolve());
    }
    return o.call(this), t.promise;
  }
  scrollTo(e = 0, t = 0) {
    this.fullsize ? window.scroll(e, t) : (this.scroller.scrollLeft = e, this.scroller.scrollTop = t);
  }
  now() {
    return "now" in window.performance ? performance.now() : (/* @__PURE__ */ new Date()).getTime();
  }
  destroy() {
    this.scroller && (this.fullsize && this.enableScroll(), this.removeListeners(), this.scroller = void 0);
  }
}
qt(Xi.prototype);
class zl extends pi {
  constructor(e) {
    super(e), this.name = "continuous", this.settings = bt(this.settings || {}, {
      infinite: !0,
      overflow: void 0,
      axis: void 0,
      writingMode: void 0,
      flow: "scrolled",
      offset: 500,
      offsetDelta: 250,
      width: void 0,
      height: void 0,
      snap: !1,
      afterScrolledTimeout: 10,
      allowScriptedContent: !1,
      allowPopups: !1
    }), bt(this.settings, e.settings || {}), e.settings.gap != "undefined" && e.settings.gap === 0 && (this.settings.gap = e.settings.gap), this.viewSettings = {
      ignoreClass: this.settings.ignoreClass,
      axis: this.settings.axis,
      flow: this.settings.flow,
      layout: this.layout,
      width: 0,
      height: 0,
      forceEvenPages: !1,
      allowScriptedContent: this.settings.allowScriptedContent,
      allowPopups: this.settings.allowPopups
    }, this.scrollTop = 0, this.scrollLeft = 0;
  }
  display(e, t) {
    return pi.prototype.display.call(this, e, t).then((function() {
      return this.fill();
    }).bind(this));
  }
  fill(e) {
    var t = e || new Be();
    return this.q.enqueue(() => this.check()).then((r) => {
      r ? this.fill(t) : t.resolve();
    }), t.promise;
  }
  moveTo(e) {
    var t = 0, r = 0;
    this.isPaginated ? (t = Math.floor(e.left / this.layout.delta) * this.layout.delta, t + this.settings.offsetDelta) : (r = e.top, e.top + this.settings.offsetDelta), (t > 0 || r > 0) && this.scrollBy(t, r, !0);
  }
  afterResized(e) {
    this.emit(le.MANAGERS.RESIZE, e.section);
  }
  // Remove Previous Listeners if present
  removeShownListeners(e) {
    e.onDisplayed = function() {
    };
  }
  add(e) {
    var t = this.createView(e);
    return this.views.append(t), t.on(le.VIEWS.RESIZED, (r) => {
      t.expanded = !0;
    }), t.on(le.VIEWS.AXIS, (r) => {
      this.updateAxis(r);
    }), t.on(le.VIEWS.WRITING_MODE, (r) => {
      this.updateWritingMode(r);
    }), t.onDisplayed = this.afterDisplayed.bind(this), t.onResize = this.afterResized.bind(this), t.display(this.request);
  }
  append(e) {
    var t = this.createView(e);
    return t.on(le.VIEWS.RESIZED, (r) => {
      t.expanded = !0;
    }), t.on(le.VIEWS.AXIS, (r) => {
      this.updateAxis(r);
    }), t.on(le.VIEWS.WRITING_MODE, (r) => {
      this.updateWritingMode(r);
    }), this.views.append(t), t.onDisplayed = this.afterDisplayed.bind(this), t;
  }
  prepend(e) {
    var t = this.createView(e);
    return t.on(le.VIEWS.RESIZED, (r) => {
      this.counter(r), t.expanded = !0;
    }), t.on(le.VIEWS.AXIS, (r) => {
      this.updateAxis(r);
    }), t.on(le.VIEWS.WRITING_MODE, (r) => {
      this.updateWritingMode(r);
    }), this.views.prepend(t), t.onDisplayed = this.afterDisplayed.bind(this), t;
  }
  counter(e) {
    this.settings.axis === "vertical" ? this.scrollBy(0, e.heightDelta, !0) : this.scrollBy(e.widthDelta, 0, !0);
  }
  update(e) {
    for (var t = this.bounds(), r = this.views.all(), i = r.length, s = typeof e < "u" ? e : this.settings.offset || 0, a, o, u = new Be(), h = [], f = 0; f < i; f++)
      if (o = r[f], a = this.isVisible(o, s, s, t), a === !0)
        if (o.displayed)
          o.show();
        else {
          let c = o.display(this.request).then(function(w) {
            w.show();
          }, (w) => {
            o.hide();
          });
          h.push(c);
        }
      else
        this.q.enqueue(o.destroy.bind(o)), clearTimeout(this.trimTimeout), this.trimTimeout = setTimeout((function() {
          this.q.enqueue(this.trim.bind(this));
        }).bind(this), 250);
    return h.length ? Promise.all(h).catch((c) => {
      u.reject(c);
    }) : (u.resolve(), u.promise);
  }
  check(e, t) {
    var r = new Be(), i = [], s = this.settings.axis === "horizontal", a = this.settings.offset || 0;
    e && s && (a = e), t && !s && (a = t);
    var o = this._bounds;
    let u = s ? this.scrollLeft : this.scrollTop, h = s ? Math.floor(o.width) : o.height, f = s ? this.container.scrollWidth : this.container.scrollHeight, c = this.writingMode && this.writingMode.indexOf("vertical") === 0 ? "vertical" : "horizontal", w = this.settings.rtlScrollType, m = this.settings.direction === "rtl";
    this.settings.fullsize ? (s && m && w === "negative" || !s && m && w === "default") && (u = u * -1) : (m && w === "default" && c === "horizontal" && (u = f - h - u), m && w === "negative" && c === "horizontal" && (u = u * -1));
    let S = () => {
      let A = this.views.first(), k = A && A.section.prev();
      k && i.push(this.prepend(k));
    }, N = () => {
      let A = this.views.last(), k = A && A.section.next();
      k && i.push(this.append(k));
    }, p = u + h + a, v = u - a;
    p >= f && N(), v < 0 && S();
    let y = i.map((A) => A.display(this.request));
    return i.length ? Promise.all(y).then(() => this.check()).then(() => this.update(a), (A) => A) : (this.q.enqueue((function() {
      this.update();
    }).bind(this)), r.resolve(!1), r.promise);
  }
  trim() {
    for (var e = new Be(), t = this.views.displayed(), r = t[0], i = t[t.length - 1], s = this.views.indexOf(r), a = this.views.indexOf(i), o = this.views.slice(0, s), u = this.views.slice(a + 1), h = 0; h < o.length - 1; h++)
      this.erase(o[h], o);
    for (var f = 1; f < u.length; f++)
      this.erase(u[f]);
    return e.resolve(), e.promise;
  }
  erase(e, t) {
    var r, i;
    this.settings.fullsize ? (r = window.scrollY, i = window.scrollX) : (r = this.container.scrollTop, i = this.container.scrollLeft);
    var s = e.bounds();
    this.views.remove(e), t && (this.settings.axis === "vertical" ? this.scrollTo(0, r - s.height, !0) : this.settings.direction === "rtl" ? this.settings.fullsize ? this.scrollTo(i + Math.floor(s.width), 0, !0) : this.scrollTo(i, 0, !0) : this.scrollTo(i - Math.floor(s.width), 0, !0));
  }
  addEventListeners(e) {
    window.addEventListener("unload", (function(t) {
      this.ignore = !0, this.destroy();
    }).bind(this)), this.addScrollListeners(), this.isPaginated && this.settings.snap && (this.snapper = new Xi(this, this.settings.snap && typeof this.settings.snap == "object" && this.settings.snap));
  }
  addScrollListeners() {
    var e;
    this.tick = fn;
    let t = this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" ? -1 : 1;
    this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0, this.settings.fullsize ? (e = window, this.scrollTop = window.scrollY * t, this.scrollLeft = window.scrollX * t) : (e = this.container, this.scrollTop = this.container.scrollTop, this.scrollLeft = this.container.scrollLeft), this._onScroll = this.onScroll.bind(this), e.addEventListener("scroll", this._onScroll), this._scrolled = ya(this.scrolled.bind(this), 30), this.didScroll = !1;
  }
  removeEventListeners() {
    var e;
    this.settings.fullsize ? e = window : e = this.container, e.removeEventListener("scroll", this._onScroll), this._onScroll = void 0;
  }
  onScroll() {
    let e, t, r = this.settings.direction === "rtl" && this.settings.rtlScrollType === "default" ? -1 : 1;
    this.settings.fullsize ? (e = window.scrollY * r, t = window.scrollX * r) : (e = this.container.scrollTop, t = this.container.scrollLeft), this.scrollTop = e, this.scrollLeft = t, this.ignore ? this.ignore = !1 : this._scrolled(), this.scrollDeltaVert += Math.abs(e - this.prevScrollTop), this.scrollDeltaHorz += Math.abs(t - this.prevScrollLeft), this.prevScrollTop = e, this.prevScrollLeft = t, clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout((function() {
      this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0;
    }).bind(this), 150), clearTimeout(this.afterScrolled), this.didScroll = !1;
  }
  scrolled() {
    this.q.enqueue((function() {
      return this.check();
    }).bind(this)), this.emit(le.MANAGERS.SCROLL, {
      top: this.scrollTop,
      left: this.scrollLeft
    }), clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout((function() {
      this.snapper && this.snapper.supportsTouch && this.snapper.needsSnap() || this.emit(le.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }).bind(this), this.settings.afterScrolledTimeout);
  }
  next() {
    let e = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;
    this.views.length && (this.isPaginated && this.settings.axis === "horizontal" ? this.scrollBy(e, 0, !0) : this.scrollBy(0, this.layout.height, !0), this.q.enqueue((function() {
      return this.check();
    }).bind(this)));
  }
  prev() {
    let e = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;
    this.views.length && (this.isPaginated && this.settings.axis === "horizontal" ? this.scrollBy(-e, 0, !0) : this.scrollBy(0, -this.layout.height, !0), this.q.enqueue((function() {
      return this.check();
    }).bind(this)));
  }
  updateFlow(e) {
    this.rendered && this.snapper && (this.snapper.destroy(), this.snapper = void 0), super.updateFlow(e, "scroll"), this.rendered && this.isPaginated && this.settings.snap && (this.snapper = new Xi(this, this.settings.snap && typeof this.settings.snap == "object" && this.settings.snap));
  }
  destroy() {
    super.destroy(), this.snapper && this.snapper.destroy();
  }
}
class yn {
  constructor(e, t) {
    this.settings = bt(this.settings || {}, {
      width: null,
      height: null,
      ignoreClass: "",
      manager: "default",
      view: "iframe",
      flow: null,
      layout: null,
      spread: null,
      minSpreadWidth: 800,
      stylesheet: null,
      resizeOnOrientationChange: !0,
      script: null,
      snap: !1,
      defaultDirection: "ltr",
      allowScriptedContent: !1,
      allowPopups: !1
    }), bt(this.settings, t), typeof this.settings.manager == "object" && (this.manager = this.settings.manager), this.book = e, this.hooks = {}, this.hooks.display = new Ft(this), this.hooks.serialize = new Ft(this), this.hooks.content = new Ft(this), this.hooks.unloaded = new Ft(this), this.hooks.layout = new Ft(this), this.hooks.render = new Ft(this), this.hooks.show = new Ft(this), this.hooks.content.register(this.handleLinks.bind(this)), this.hooks.content.register(this.passEvents.bind(this)), this.hooks.content.register(this.adjustImages.bind(this)), this.book.spine.hooks.content.register(this.injectIdentifier.bind(this)), this.settings.stylesheet && this.book.spine.hooks.content.register(this.injectStylesheet.bind(this)), this.settings.script && this.book.spine.hooks.content.register(this.injectScript.bind(this)), this.themes = new pu(this), this.annotations = new mu(this), this.epubcfi = new Fe(), this.q = new pn(this), this.location = void 0, this.q.enqueue(this.book.opened), this.starting = new Be(), this.started = this.starting.promise, this.q.enqueue(this.start);
  }
  /**
   * Set the manager function
   * @param {function} manager
   */
  setManager(e) {
    this.manager = e;
  }
  /**
   * Require the manager from passed string, or as a class function
   * @param  {string|object} manager [description]
   * @return {method}
   */
  requireManager(e) {
    var t;
    return typeof e == "string" && e === "default" ? t = pi : typeof e == "string" && e === "continuous" ? t = zl : t = e, t;
  }
  /**
   * Require the view from passed string, or as a class function
   * @param  {string|object} view
   * @return {view}
   */
  requireView(e) {
    var t;
    return typeof e == "string" && e === "iframe" ? t = da : t = e, t;
  }
  /**
   * Start the rendering
   * @return {Promise} rendering has started
   */
  start() {
    switch (!this.settings.layout && (this.book.package.metadata.layout === "pre-paginated" || this.book.displayOptions.fixedLayout === "true") && (this.settings.layout = "pre-paginated"), this.book.package.metadata.spread) {
      case "none":
        this.settings.spread = "none";
        break;
      case "both":
        this.settings.spread = !0;
        break;
    }
    this.manager || (this.ViewManager = this.requireManager(this.settings.manager), this.View = this.requireView(this.settings.view), this.manager = new this.ViewManager({
      view: this.View,
      queue: this.q,
      request: this.book.load.bind(this.book),
      settings: this.settings
    })), this.direction(this.book.package.metadata.direction || this.settings.defaultDirection), this.settings.globalLayoutProperties = this.determineLayoutProperties(this.book.package.metadata), this.flow(this.settings.globalLayoutProperties.flow), this.layout(this.settings.globalLayoutProperties), this.manager.on(le.MANAGERS.ADDED, this.afterDisplayed.bind(this)), this.manager.on(le.MANAGERS.REMOVED, this.afterRemoved.bind(this)), this.manager.on(le.MANAGERS.RESIZED, this.onResized.bind(this)), this.manager.on(le.MANAGERS.ORIENTATION_CHANGE, this.onOrientationChange.bind(this)), this.manager.on(le.MANAGERS.SCROLLED, this.reportLocation.bind(this)), this.emit(le.RENDITION.STARTED), this.starting.resolve();
  }
  /**
   * Call to attach the container to an element in the dom
   * Container must be attached before rendering can begin
   * @param  {element} element to attach to
   * @return {Promise}
   */
  attachTo(e) {
    return this.q.enqueue((function() {
      this.manager.render(e, {
        width: this.settings.width,
        height: this.settings.height
      }), this.emit(le.RENDITION.ATTACHED);
    }).bind(this));
  }
  /**
   * Display a point in the book
   * The request will be added to the rendering Queue,
   * so it will wait until book is opened, rendering started
   * and all other rendering tasks have finished to be called.
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */
  display(e) {
    return this.displaying && this.displaying.resolve(), this.q.enqueue(this._display, e);
  }
  /**
   * Tells the manager what to display immediately
   * @private
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */
  _display(e) {
    if (this.book) {
      this.epubcfi.isCfiString(e);
      var t = new Be(), r = t.promise, i;
      return this.displaying = t, this.book.locations.length() && Hs(e) && (e = this.book.locations.cfiFromPercentage(parseFloat(e))), i = this.book.spine.get(e), i ? (this.manager.display(i, e).then(() => {
        t.resolve(i), this.displaying = void 0, this.emit(le.RENDITION.DISPLAYED, i), this.reportLocation();
      }, (s) => {
        this.emit(le.RENDITION.DISPLAY_ERROR, s);
      }), r) : (t.reject(new Error("No Section Found")), r);
    }
  }
  /*
  	render(view, show) {
  
  		// view.onLayout = this.layout.format.bind(this.layout);
  		view.create();
  
  		// Fit to size of the container, apply padding
  		this.manager.resizeView(view);
  
  		// Render Chain
  		return view.section.render(this.book.request)
  			.then(function(contents){
  				return view.load(contents);
  			}.bind(this))
  			.then(function(doc){
  				return this.hooks.content.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				this.layout.format(view.contents);
  				return this.hooks.layout.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				return view.display();
  			}.bind(this))
  			.then(function(){
  				return this.hooks.render.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				if(show !== false) {
  					this.q.enqueue(function(view){
  						view.show();
  					}, view);
  				}
  				// this.map = new Map(view, this.layout);
  				this.hooks.show.trigger(view, this);
  				this.trigger("rendered", view.section);
  
  			}.bind(this))
  			.catch(function(e){
  				this.trigger("loaderror", e);
  			}.bind(this));
  
  	}
  	*/
  /**
   * Report what section has been displayed
   * @private
   * @param  {*} view
   */
  afterDisplayed(e) {
    e.on(le.VIEWS.MARK_CLICKED, (t, r) => this.triggerMarkEvent(t, r, e.contents)), this.hooks.render.trigger(e, this).then(() => {
      e.contents ? this.hooks.content.trigger(e.contents, this).then(() => {
        this.emit(le.RENDITION.RENDERED, e.section, e);
      }) : this.emit(le.RENDITION.RENDERED, e.section, e);
    });
  }
  /**
   * Report what has been removed
   * @private
   * @param  {*} view
   */
  afterRemoved(e) {
    this.hooks.unloaded.trigger(e, this).then(() => {
      this.emit(le.RENDITION.REMOVED, e.section, e);
    });
  }
  /**
   * Report resize events and display the last seen location
   * @private
   */
  onResized(e, t) {
    this.emit(le.RENDITION.RESIZED, {
      width: e.width,
      height: e.height
    }, t), this.location && this.location.start && this.display(t || this.location.start.cfi);
  }
  /**
   * Report orientation events and display the last seen location
   * @private
   */
  onOrientationChange(e) {
    this.emit(le.RENDITION.ORIENTATION_CHANGE, e);
  }
  /**
   * Move the Rendition to a specific offset
   * Usually you would be better off calling display()
   * @param {object} offset
   */
  moveTo(e) {
    this.manager.moveTo(e);
  }
  /**
   * Trigger a resize of the views
   * @param {number} [width]
   * @param {number} [height]
   * @param {string} [epubcfi] (optional)
   */
  resize(e, t, r) {
    e && (this.settings.width = e), t && (this.settings.height = t), this.manager.resize(e, t, r);
  }
  /**
   * Clear all rendered views
   */
  clear() {
    this.manager.clear();
  }
  /**
   * Go to the next "page" in the rendition
   * @return {Promise}
   */
  next() {
    return this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this));
  }
  /**
   * Go to the previous "page" in the rendition
   * @return {Promise}
   */
  prev() {
    return this.q.enqueue(this.manager.prev.bind(this.manager)).then(this.reportLocation.bind(this));
  }
  //-- http://www.idpf.org/epub/301/spec/epub-publications.html#meta-properties-rendering
  /**
   * Determine the Layout properties from metadata and settings
   * @private
   * @param  {object} metadata
   * @return {object} properties
   */
  determineLayoutProperties(e) {
    var t, r = this.settings.layout || e.layout || "reflowable", i = this.settings.spread || e.spread || "auto", s = this.settings.orientation || e.orientation || "auto", a = this.settings.flow || e.flow || "auto", o = e.viewport || "", u = this.settings.minSpreadWidth || e.minSpreadWidth || 800, h = this.settings.direction || e.direction || "ltr";
    return (this.settings.width === 0 || this.settings.width > 0) && (this.settings.height === 0 || this.settings.height > 0), t = {
      layout: r,
      spread: i,
      orientation: s,
      flow: a,
      viewport: o,
      minSpreadWidth: u,
      direction: h
    }, t;
  }
  /**
   * Adjust the flow of the rendition to paginated or scrolled
   * (scrolled-continuous vs scrolled-doc are handled by different view managers)
   * @param  {string} flow
   */
  flow(e) {
    var t = e;
    (e === "scrolled" || e === "scrolled-doc" || e === "scrolled-continuous") && (t = "scrolled"), (e === "auto" || e === "paginated") && (t = "paginated"), this.settings.flow = e, this._layout && this._layout.flow(t), this.manager && this._layout && this.manager.applyLayout(this._layout), this.manager && this.manager.updateFlow(t), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi));
  }
  /**
   * Adjust the layout of the rendition to reflowable or pre-paginated
   * @param  {object} settings
   */
  layout(e) {
    return e && (this._layout = new ia(e), this._layout.spread(e.spread, this.settings.minSpreadWidth), this._layout.on(le.LAYOUT.UPDATED, (t, r) => {
      this.emit(le.RENDITION.LAYOUT, t, r);
    })), this.manager && this._layout && this.manager.applyLayout(this._layout), this._layout;
  }
  /**
   * Adjust if the rendition uses spreads
   * @param  {string} spread none | auto (TODO: implement landscape, portrait, both)
   * @param  {int} [min] min width to use spreads at
   */
  spread(e, t) {
    this.settings.spread = e, t && (this.settings.minSpreadWidth = t), this._layout && this._layout.spread(e, t), this.manager && this.manager.isRendered() && this.manager.updateLayout();
  }
  /**
   * Adjust the direction of the rendition
   * @param  {string} dir
   */
  direction(e) {
    this.settings.direction = e || "ltr", this.manager && this.manager.direction(this.settings.direction), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi));
  }
  /**
   * Report the current location
   * @fires relocated
   * @fires locationChanged
   */
  reportLocation() {
    return this.q.enqueue((function() {
      requestAnimationFrame((function() {
        var r = this.manager.currentLocation();
        if (r && r.then && typeof r.then == "function")
          r.then((function(i) {
            let s = this.located(i);
            !s || !s.start || !s.end || (this.location = s, this.emit(le.RENDITION.LOCATION_CHANGED, {
              index: this.location.start.index,
              href: this.location.start.href,
              start: this.location.start.cfi,
              end: this.location.end.cfi,
              percentage: this.location.start.percentage
            }), this.emit(le.RENDITION.RELOCATED, this.location));
          }).bind(this));
        else if (r) {
          let i = this.located(r);
          if (!i || !i.start || !i.end)
            return;
          this.location = i, this.emit(le.RENDITION.LOCATION_CHANGED, {
            index: this.location.start.index,
            href: this.location.start.href,
            start: this.location.start.cfi,
            end: this.location.end.cfi,
            percentage: this.location.start.percentage
          }), this.emit(le.RENDITION.RELOCATED, this.location);
        }
      }).bind(this));
    }).bind(this));
  }
  /**
   * Get the Current Location object
   * @return {displayedLocation | promise} location (may be a promise)
   */
  currentLocation() {
    var e = this.manager.currentLocation();
    if (e && e.then && typeof e.then == "function")
      e.then((function(t) {
        return this.located(t);
      }).bind(this));
    else if (e)
      return this.located(e);
  }
  /**
   * Creates a Rendition#locationRange from location
   * passed by the Manager
   * @returns {displayedLocation}
   * @private
   */
  located(e) {
    if (!e.length)
      return {};
    let t = e[0], r = e[e.length - 1], i = {
      start: {
        index: t.index,
        href: t.href,
        cfi: t.mapping.start,
        displayed: {
          page: t.pages[0] || 1,
          total: t.totalPages
        }
      },
      end: {
        index: r.index,
        href: r.href,
        cfi: r.mapping.end,
        displayed: {
          page: r.pages[r.pages.length - 1] || 1,
          total: r.totalPages
        }
      }
    }, s = this.book.locations.locationFromCfi(t.mapping.start), a = this.book.locations.locationFromCfi(r.mapping.end);
    s != null && (i.start.location = s, i.start.percentage = this.book.locations.percentageFromLocation(s)), a != null && (i.end.location = a, i.end.percentage = this.book.locations.percentageFromLocation(a));
    let o = this.book.pageList.pageFromCfi(t.mapping.start), u = this.book.pageList.pageFromCfi(r.mapping.end);
    return o != -1 && (i.start.page = o), u != -1 && (i.end.page = u), r.index === this.book.spine.last().index && i.end.displayed.page >= i.end.displayed.total && (i.atEnd = !0), t.index === this.book.spine.first().index && i.start.displayed.page === 1 && (i.atStart = !0), i;
  }
  /**
   * Remove and Clean Up the Rendition
   */
  destroy() {
    this.manager && this.manager.destroy(), this.book = void 0;
  }
  /**
   * Pass the events from a view's Contents
   * @private
   * @param  {Contents} view contents
   */
  passEvents(e) {
    ti.forEach((t) => {
      e.on(t, (r) => this.triggerViewEvent(r, e));
    }), e.on(le.CONTENTS.SELECTED, (t) => this.triggerSelectedEvent(t, e));
  }
  /**
   * Emit events passed by a view
   * @private
   * @param  {event} e
   */
  triggerViewEvent(e, t) {
    this.emit(e.type, e, t);
  }
  /**
   * Emit a selection event's CFI Range passed from a a view
   * @private
   * @param  {string} cfirange
   */
  triggerSelectedEvent(e, t) {
    this.emit(le.RENDITION.SELECTED, e, t);
  }
  /**
   * Emit a markClicked event with the cfiRange and data from a mark
   * @private
   * @param  {EpubCFI} cfirange
   */
  triggerMarkEvent(e, t, r) {
    this.emit(le.RENDITION.MARK_CLICKED, e, t, r);
  }
  /**
   * Get a Range from a Visible CFI
   * @param  {string} cfi EpubCfi String
   * @param  {string} ignoreClass
   * @return {range}
   */
  getRange(e, t) {
    var r = new Fe(e), i = this.manager.visible().filter(function(s) {
      if (r.spinePos === s.index)
        return !0;
    });
    if (i.length)
      return i[0].contents.range(r, t);
  }
  /**
   * Hook to adjust images to fit in columns
   * @param  {Contents} contents
   * @private
   */
  adjustImages(e) {
    if (this._layout.name === "pre-paginated")
      return new Promise(function(s) {
        s();
      });
    let t = e.window.getComputedStyle(e.content, null), r = (e.content.offsetHeight - (parseFloat(t.paddingTop) + parseFloat(t.paddingBottom))) * 0.95, i = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
    return e.addStylesheetRules({
      img: {
        "max-width": (this._layout.columnWidth ? this._layout.columnWidth - i + "px" : "100%") + "!important",
        "max-height": r + "px!important",
        "object-fit": "contain",
        "page-break-inside": "avoid",
        "break-inside": "avoid",
        "box-sizing": "border-box"
      },
      svg: {
        "max-width": (this._layout.columnWidth ? this._layout.columnWidth - i + "px" : "100%") + "!important",
        "max-height": r + "px!important",
        "page-break-inside": "avoid",
        "break-inside": "avoid"
      }
    }), new Promise(function(s, a) {
      setTimeout(function() {
        s();
      }, 1);
    });
  }
  /**
   * Get the Contents object of each rendered view
   * @returns {Contents[]}
   */
  getContents() {
    return this.manager ? this.manager.getContents() : [];
  }
  /**
   * Get the views member from the manager
   * @returns {Views}
   */
  views() {
    return (this.manager ? this.manager.views : void 0) || [];
  }
  /**
   * Hook to handle link clicks in rendered content
   * @param  {Contents} contents
   * @private
   */
  handleLinks(e) {
    e && e.on(le.CONTENTS.LINK_CLICKED, (t) => {
      let r = this.book.path.relative(t);
      this.display(r);
    });
  }
  /**
   * Hook to handle injecting stylesheet before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectStylesheet(e, t) {
    let r = e.createElement("link");
    r.setAttribute("type", "text/css"), r.setAttribute("rel", "stylesheet"), r.setAttribute("href", this.settings.stylesheet), e.getElementsByTagName("head")[0].appendChild(r);
  }
  /**
   * Hook to handle injecting scripts before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectScript(e, t) {
    let r = e.createElement("script");
    r.setAttribute("type", "text/javascript"), r.setAttribute("src", this.settings.script), r.textContent = " ", e.getElementsByTagName("head")[0].appendChild(r);
  }
  /**
   * Hook to handle the document identifier before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectIdentifier(e, t) {
    let r = this.book.packaging.metadata.identifier, i = e.createElement("meta");
    i.setAttribute("name", "dc.relation.ispartof"), r && i.setAttribute("content", r), e.getElementsByTagName("head")[0].appendChild(i);
  }
}
qt(yn.prototype);
function rr(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ba = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(n, e) {
  (function(t) {
    n.exports = t();
  })(function() {
    return function t(r, i, s) {
      function a(h, f) {
        if (!i[h]) {
          if (!r[h]) {
            var c = typeof rr == "function" && rr;
            if (!f && c)
              return c(h, !0);
            if (o)
              return o(h, !0);
            var w = new Error("Cannot find module '" + h + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var m = i[h] = { exports: {} };
          r[h][0].call(m.exports, function(S) {
            var N = r[h][1][S];
            return a(N || S);
          }, m, m.exports, t, r, i, s);
        }
        return i[h].exports;
      }
      for (var o = typeof rr == "function" && rr, u = 0; u < s.length; u++)
        a(s[u]);
      return a;
    }({ 1: [function(t, r, i) {
      var s = t("./utils"), a = t("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      i.encode = function(u) {
        for (var h = [], f, c, w, m, S, N, p, v = 0, y = u.length, A = y, k = s.getTypeOf(u) !== "string"; v < u.length; )
          A = y - v, k ? (f = u[v++], c = v < y ? u[v++] : 0, w = v < y ? u[v++] : 0) : (f = u.charCodeAt(v++), c = v < y ? u.charCodeAt(v++) : 0, w = v < y ? u.charCodeAt(v++) : 0), m = f >> 2, S = (f & 3) << 4 | c >> 4, N = A > 1 ? (c & 15) << 2 | w >> 6 : 64, p = A > 2 ? w & 63 : 64, h.push(o.charAt(m) + o.charAt(S) + o.charAt(N) + o.charAt(p));
        return h.join("");
      }, i.decode = function(u) {
        var h, f, c, w, m, S, N, p = 0, v = 0, y = "data:";
        if (u.substr(0, y.length) === y)
          throw new Error("Invalid base64 input, it looks like a data url.");
        u = u.replace(/[^A-Za-z0-9+/=]/g, "");
        var A = u.length * 3 / 4;
        if (u.charAt(u.length - 1) === o.charAt(64) && A--, u.charAt(u.length - 2) === o.charAt(64) && A--, A % 1 !== 0)
          throw new Error("Invalid base64 input, bad content length.");
        var k;
        for (a.uint8array ? k = new Uint8Array(A | 0) : k = new Array(A | 0); p < u.length; )
          w = o.indexOf(u.charAt(p++)), m = o.indexOf(u.charAt(p++)), S = o.indexOf(u.charAt(p++)), N = o.indexOf(u.charAt(p++)), h = w << 2 | m >> 4, f = (m & 15) << 4 | S >> 2, c = (S & 3) << 6 | N, k[v++] = h, S !== 64 && (k[v++] = f), N !== 64 && (k[v++] = c);
        return k;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(t, r, i) {
      var s = t("./external"), a = t("./stream/DataWorker"), o = t("./stream/Crc32Probe"), u = t("./stream/DataLengthProbe");
      function h(f, c, w, m, S) {
        this.compressedSize = f, this.uncompressedSize = c, this.crc32 = w, this.compression = m, this.compressedContent = S;
      }
      h.prototype = {
        /**
         * Create a worker to get the uncompressed content.
         * @return {GenericWorker} the worker.
         */
        getContentWorker: function() {
          var f = new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")), c = this;
          return f.on("end", function() {
            if (this.streamInfo.data_length !== c.uncompressedSize)
              throw new Error("Bug : uncompressed data size mismatch");
          }), f;
        },
        /**
         * Create a worker to get the compressed content.
         * @return {GenericWorker} the worker.
         */
        getCompressedWorker: function() {
          return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        }
      }, h.createWorkerFrom = function(f, c, w) {
        return f.pipe(new o()).pipe(new u("uncompressedSize")).pipe(c.compressWorker(w)).pipe(new u("compressedSize")).withStreamInfo("compression", c);
      }, r.exports = h;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, r, i) {
      var s = t("./stream/GenericWorker");
      i.STORE = {
        magic: "\0\0",
        compressWorker: function() {
          return new s("STORE compression");
        },
        uncompressWorker: function() {
          return new s("STORE decompression");
        }
      }, i.DEFLATE = t("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, r, i) {
      var s = t("./utils");
      function a() {
        for (var f, c = [], w = 0; w < 256; w++) {
          f = w;
          for (var m = 0; m < 8; m++)
            f = f & 1 ? 3988292384 ^ f >>> 1 : f >>> 1;
          c[w] = f;
        }
        return c;
      }
      var o = a();
      function u(f, c, w, m) {
        var S = o, N = m + w;
        f = f ^ -1;
        for (var p = m; p < N; p++)
          f = f >>> 8 ^ S[(f ^ c[p]) & 255];
        return f ^ -1;
      }
      function h(f, c, w, m) {
        var S = o, N = m + w;
        f = f ^ -1;
        for (var p = m; p < N; p++)
          f = f >>> 8 ^ S[(f ^ c.charCodeAt(p)) & 255];
        return f ^ -1;
      }
      r.exports = function(c, w) {
        if (typeof c > "u" || !c.length)
          return 0;
        var m = s.getTypeOf(c) !== "string";
        return m ? u(w | 0, c, c.length, 0) : h(w | 0, c, c.length, 0);
      };
    }, { "./utils": 32 }], 5: [function(t, r, i) {
      i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
    }, {}], 6: [function(t, r, i) {
      var s = null;
      typeof Promise < "u" ? s = Promise : s = t("lie"), r.exports = {
        Promise: s
      };
    }, { lie: 37 }], 7: [function(t, r, i) {
      var s = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = t("pako"), o = t("./utils"), u = t("./stream/GenericWorker"), h = s ? "uint8array" : "array";
      i.magic = "\b\0";
      function f(c, w) {
        u.call(this, "FlateWorker/" + c), this._pako = null, this._pakoAction = c, this._pakoOptions = w, this.meta = {};
      }
      o.inherits(f, u), f.prototype.processChunk = function(c) {
        this.meta = c.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(h, c.data), !1);
      }, f.prototype.flush = function() {
        u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, f.prototype.cleanUp = function() {
        u.prototype.cleanUp.call(this), this._pako = null;
      }, f.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({
          raw: !0,
          level: this._pakoOptions.level || -1
          // default compression
        });
        var c = this;
        this._pako.onData = function(w) {
          c.push({
            data: w,
            meta: c.meta
          });
        };
      }, i.compressWorker = function(c) {
        return new f("Deflate", c);
      }, i.uncompressWorker = function() {
        return new f("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, r, i) {
      var s = t("../utils"), a = t("../stream/GenericWorker"), o = t("../utf8"), u = t("../crc32"), h = t("../signature"), f = function(v, y) {
        var A = "", k;
        for (k = 0; k < y; k++)
          A += String.fromCharCode(v & 255), v = v >>> 8;
        return A;
      }, c = function(v, y) {
        var A = v;
        return v || (A = y ? 16893 : 33204), (A & 65535) << 16;
      }, w = function(v) {
        return (v || 0) & 63;
      }, m = function(v, y, A, k, b, C) {
        var T = v.file, R = v.compression, z = C !== o.utf8encode, M = s.transformTo("string", C(T.name)), Y = s.transformTo("string", o.utf8encode(T.name)), Z = T.comment, te = s.transformTo("string", C(Z)), ge = s.transformTo("string", o.utf8encode(Z)), pe = Y.length !== T.name.length, ve = ge.length !== Z.length, de, fe, Se = "", je = "", Oe = "", be = T.dir, Le = T.date, Ne = {
          crc32: 0,
          compressedSize: 0,
          uncompressedSize: 0
        };
        (!y || A) && (Ne.crc32 = v.crc32, Ne.compressedSize = v.compressedSize, Ne.uncompressedSize = v.uncompressedSize);
        var it = 0;
        y && (it |= 8), !z && (pe || ve) && (it |= 2048);
        var Ge = 0, Ue = 0;
        be && (Ge |= 16), b === "UNIX" ? (Ue = 798, Ge |= c(T.unixPermissions, be)) : (Ue = 20, Ge |= w(T.dosPermissions)), de = Le.getUTCHours(), de = de << 6, de = de | Le.getUTCMinutes(), de = de << 5, de = de | Le.getUTCSeconds() / 2, fe = Le.getUTCFullYear() - 1980, fe = fe << 4, fe = fe | Le.getUTCMonth() + 1, fe = fe << 5, fe = fe | Le.getUTCDate(), pe && (je = // Version
        f(1, 1) + // NameCRC32
        f(u(M), 4) + // UnicodeName
        Y, Se += // Info-ZIP Unicode Path Extra Field
        "up" + // size
        f(je.length, 2) + // content
        je), ve && (Oe = // Version
        f(1, 1) + // CommentCRC32
        f(u(te), 4) + // UnicodeName
        ge, Se += // Info-ZIP Unicode Path Extra Field
        "uc" + // size
        f(Oe.length, 2) + // content
        Oe);
        var De = "";
        De += `
\0`, De += f(it, 2), De += R.magic, De += f(de, 2), De += f(fe, 2), De += f(Ne.crc32, 4), De += f(Ne.compressedSize, 4), De += f(Ne.uncompressedSize, 4), De += f(M.length, 2), De += f(Se.length, 2);
        var Xe = h.LOCAL_FILE_HEADER + De + M + Se, Me = h.CENTRAL_FILE_HEADER + // version made by (00: DOS)
        f(Ue, 2) + // file header (common to file and central directory)
        De + // file comment length
        f(te.length, 2) + // disk number start
        "\0\0\0\0" + // external file attributes
        f(Ge, 4) + // relative offset of local header
        f(k, 4) + // file name
        M + // extra field
        Se + // file comment
        te;
        return {
          fileRecord: Xe,
          dirRecord: Me
        };
      }, S = function(v, y, A, k, b) {
        var C = "", T = s.transformTo("string", b(k));
        return C = h.CENTRAL_DIRECTORY_END + // number of this disk
        "\0\0\0\0" + // total number of entries in the central directory on this disk
        f(v, 2) + // total number of entries in the central directory
        f(v, 2) + // size of the central directory   4 bytes
        f(y, 4) + // offset of start of central directory with respect to the starting disk number
        f(A, 4) + // .ZIP file comment length
        f(T.length, 2) + // .ZIP file comment
        T, C;
      }, N = function(v) {
        var y = "";
        return y = h.DATA_DESCRIPTOR + // crc-32                          4 bytes
        f(v.crc32, 4) + // compressed size                 4 bytes
        f(v.compressedSize, 4) + // uncompressed size               4 bytes
        f(v.uncompressedSize, 4), y;
      };
      function p(v, y, A, k) {
        a.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = A, this.encodeFileName = k, this.streamFiles = v, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      s.inherits(p, a), p.prototype.push = function(v) {
        var y = v.meta.percent || 0, A = this.entriesCount, k = this._sources.length;
        this.accumulate ? this.contentBuffer.push(v) : (this.bytesWritten += v.data.length, a.prototype.push.call(this, {
          data: v.data,
          meta: {
            currentFile: this.currentFile,
            percent: A ? (y + 100 * (A - k - 1)) / A : 100
          }
        }));
      }, p.prototype.openedSource = function(v) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = v.file.name;
        var y = this.streamFiles && !v.file.dir;
        if (y) {
          var A = m(v, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({
            data: A.fileRecord,
            meta: { percent: 0 }
          });
        } else
          this.accumulate = !0;
      }, p.prototype.closedSource = function(v) {
        this.accumulate = !1;
        var y = this.streamFiles && !v.file.dir, A = m(v, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(A.dirRecord), y)
          this.push({
            data: N(v),
            meta: { percent: 100 }
          });
        else
          for (this.push({
            data: A.fileRecord,
            meta: { percent: 0 }
          }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, p.prototype.flush = function() {
        for (var v = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
          this.push({
            data: this.dirRecords[y],
            meta: { percent: 100 }
          });
        var A = this.bytesWritten - v, k = S(this.dirRecords.length, A, v, this.zipComment, this.encodeFileName);
        this.push({
          data: k,
          meta: { percent: 100 }
        });
      }, p.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, p.prototype.registerPrevious = function(v) {
        this._sources.push(v);
        var y = this;
        return v.on("data", function(A) {
          y.processChunk(A);
        }), v.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), v.on("error", function(A) {
          y.error(A);
        }), this;
      }, p.prototype.resume = function() {
        if (!a.prototype.resume.call(this))
          return !1;
        if (!this.previous && this._sources.length)
          return this.prepareNextSource(), !0;
        if (!this.previous && !this._sources.length && !this.generatedError)
          return this.end(), !0;
      }, p.prototype.error = function(v) {
        var y = this._sources;
        if (!a.prototype.error.call(this, v))
          return !1;
        for (var A = 0; A < y.length; A++)
          try {
            y[A].error(v);
          } catch {
          }
        return !0;
      }, p.prototype.lock = function() {
        a.prototype.lock.call(this);
        for (var v = this._sources, y = 0; y < v.length; y++)
          v[y].lock();
      }, r.exports = p;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, r, i) {
      var s = t("../compressions"), a = t("./ZipFileWorker"), o = function(u, h) {
        var f = u || h, c = s[f];
        if (!c)
          throw new Error(f + " is not a valid compression method !");
        return c;
      };
      i.generateWorker = function(u, h, f) {
        var c = new a(h.streamFiles, f, h.platform, h.encodeFileName), w = 0;
        try {
          u.forEach(function(m, S) {
            w++;
            var N = o(S.options.compression, h.compression), p = S.options.compressionOptions || h.compressionOptions || {}, v = S.dir, y = S.date;
            S._compressWorker(N, p).withStreamInfo("file", {
              name: m,
              dir: v,
              date: y,
              comment: S.comment || "",
              unixPermissions: S.unixPermissions,
              dosPermissions: S.dosPermissions
            }).pipe(c);
          }), c.entriesCount = w;
        } catch (m) {
          c.error(m);
        }
        return c;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, r, i) {
      function s() {
        if (!(this instanceof s))
          return new s();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new s();
          for (var o in this)
            typeof this[o] != "function" && (a[o] = this[o]);
          return a;
        };
      }
      s.prototype = t("./object"), s.prototype.loadAsync = t("./load"), s.support = t("./support"), s.defaults = t("./defaults"), s.version = "3.10.1", s.loadAsync = function(a, o) {
        return new s().loadAsync(a, o);
      }, s.external = t("./external"), r.exports = s;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, r, i) {
      var s = t("./utils"), a = t("./external"), o = t("./utf8"), u = t("./zipEntries"), h = t("./stream/Crc32Probe"), f = t("./nodejsUtils");
      function c(w) {
        return new a.Promise(function(m, S) {
          var N = w.decompressed.getContentWorker().pipe(new h());
          N.on("error", function(p) {
            S(p);
          }).on("end", function() {
            N.streamInfo.crc32 !== w.decompressed.crc32 ? S(new Error("Corrupted zip : CRC32 mismatch")) : m();
          }).resume();
        });
      }
      r.exports = function(w, m) {
        var S = this;
        return m = s.extend(m || {}, {
          base64: !1,
          checkCRC32: !1,
          optimizedBinaryString: !1,
          createFolders: !1,
          decodeFileName: o.utf8decode
        }), f.isNode && f.isStream(w) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : s.prepareContent("the loaded zip file", w, !0, m.optimizedBinaryString, m.base64).then(function(N) {
          var p = new u(m);
          return p.load(N), p;
        }).then(function(p) {
          var v = [a.Promise.resolve(p)], y = p.files;
          if (m.checkCRC32)
            for (var A = 0; A < y.length; A++)
              v.push(c(y[A]));
          return a.Promise.all(v);
        }).then(function(p) {
          for (var v = p.shift(), y = v.files, A = 0; A < y.length; A++) {
            var k = y[A], b = k.fileNameStr, C = s.resolve(k.fileNameStr);
            S.file(C, k.decompressed, {
              binary: !0,
              optimizedBinaryString: !0,
              date: k.date,
              dir: k.dir,
              comment: k.fileCommentStr.length ? k.fileCommentStr : null,
              unixPermissions: k.unixPermissions,
              dosPermissions: k.dosPermissions,
              createFolders: m.createFolders
            }), k.dir || (S.file(C).unsafeOriginalName = b);
          }
          return v.zipComment.length && (S.comment = v.zipComment), S;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, r, i) {
      var s = t("../utils"), a = t("../stream/GenericWorker");
      function o(u, h) {
        a.call(this, "Nodejs stream input adapter for " + u), this._upstreamEnded = !1, this._bindStream(h);
      }
      s.inherits(o, a), o.prototype._bindStream = function(u) {
        var h = this;
        this._stream = u, u.pause(), u.on("data", function(f) {
          h.push({
            data: f,
            meta: {
              percent: 0
            }
          });
        }).on("error", function(f) {
          h.isPaused ? this.generatedError = f : h.error(f);
        }).on("end", function() {
          h.isPaused ? h._upstreamEnded = !0 : h.end();
        });
      }, o.prototype.pause = function() {
        return a.prototype.pause.call(this) ? (this._stream.pause(), !0) : !1;
      }, o.prototype.resume = function() {
        return a.prototype.resume.call(this) ? (this._upstreamEnded ? this.end() : this._stream.resume(), !0) : !1;
      }, r.exports = o;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, r, i) {
      var s = t("readable-stream").Readable, a = t("../utils");
      a.inherits(o, s);
      function o(u, h, f) {
        s.call(this, h), this._helper = u;
        var c = this;
        u.on("data", function(w, m) {
          c.push(w) || c._helper.pause(), f && f(m);
        }).on("error", function(w) {
          c.emit("error", w);
        }).on("end", function() {
          c.push(null);
        });
      }
      o.prototype._read = function() {
        this._helper.resume();
      }, r.exports = o;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, r, i) {
      r.exports = {
        /**
         * True if this is running in Nodejs, will be undefined in a browser.
         * In a browser, browserify won't include this file and the whole module
         * will be resolved an empty object.
         */
        isNode: typeof Buffer < "u",
        /**
         * Create a new nodejs Buffer from an existing content.
         * @param {Object} data the data to pass to the constructor.
         * @param {String} encoding the encoding to use.
         * @return {Buffer} a new Buffer.
         */
        newBufferFrom: function(s, a) {
          if (Buffer.from && Buffer.from !== Uint8Array.from)
            return Buffer.from(s, a);
          if (typeof s == "number")
            throw new Error('The "data" argument must not be a number');
          return new Buffer(s, a);
        },
        /**
         * Create a new nodejs Buffer with the specified size.
         * @param {Integer} size the size of the buffer.
         * @return {Buffer} a new Buffer.
         */
        allocBuffer: function(s) {
          if (Buffer.alloc)
            return Buffer.alloc(s);
          var a = new Buffer(s);
          return a.fill(0), a;
        },
        /**
         * Find out if an object is a Buffer.
         * @param {Object} b the object to test.
         * @return {Boolean} true if the object is a Buffer, false otherwise.
         */
        isBuffer: function(s) {
          return Buffer.isBuffer(s);
        },
        isStream: function(s) {
          return s && typeof s.on == "function" && typeof s.pause == "function" && typeof s.resume == "function";
        }
      };
    }, {}], 15: [function(t, r, i) {
      var s = t("./utf8"), a = t("./utils"), o = t("./stream/GenericWorker"), u = t("./stream/StreamHelper"), h = t("./defaults"), f = t("./compressedObject"), c = t("./zipObject"), w = t("./generate"), m = t("./nodejsUtils"), S = t("./nodejs/NodejsStreamInputAdapter"), N = function(b, C, T) {
        var R = a.getTypeOf(C), z, M = a.extend(T || {}, h);
        M.date = M.date || /* @__PURE__ */ new Date(), M.compression !== null && (M.compression = M.compression.toUpperCase()), typeof M.unixPermissions == "string" && (M.unixPermissions = parseInt(M.unixPermissions, 8)), M.unixPermissions && M.unixPermissions & 16384 && (M.dir = !0), M.dosPermissions && M.dosPermissions & 16 && (M.dir = !0), M.dir && (b = v(b)), M.createFolders && (z = p(b)) && y.call(this, z, !0);
        var Y = R === "string" && M.binary === !1 && M.base64 === !1;
        (!T || typeof T.binary > "u") && (M.binary = !Y);
        var Z = C instanceof f && C.uncompressedSize === 0;
        (Z || M.dir || !C || C.length === 0) && (M.base64 = !1, M.binary = !0, C = "", M.compression = "STORE", R = "string");
        var te = null;
        C instanceof f || C instanceof o ? te = C : m.isNode && m.isStream(C) ? te = new S(b, C) : te = a.prepareContent(b, C, M.binary, M.optimizedBinaryString, M.base64);
        var ge = new c(b, te, M);
        this.files[b] = ge;
      }, p = function(b) {
        b.slice(-1) === "/" && (b = b.substring(0, b.length - 1));
        var C = b.lastIndexOf("/");
        return C > 0 ? b.substring(0, C) : "";
      }, v = function(b) {
        return b.slice(-1) !== "/" && (b += "/"), b;
      }, y = function(b, C) {
        return C = typeof C < "u" ? C : h.createFolders, b = v(b), this.files[b] || N.call(this, b, null, {
          dir: !0,
          createFolders: C
        }), this.files[b];
      };
      function A(b) {
        return Object.prototype.toString.call(b) === "[object RegExp]";
      }
      var k = {
        /**
         * @see loadAsync
         */
        load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        /**
         * Call a callback function for each entry at this folder level.
         * @param {Function} cb the callback function:
         * function (relativePath, file) {...}
         * It takes 2 arguments : the relative path and the file.
         */
        forEach: function(b) {
          var C, T, R;
          for (C in this.files)
            R = this.files[C], T = C.slice(this.root.length, C.length), T && C.slice(0, this.root.length) === this.root && b(T, R);
        },
        /**
         * Filter nested files/folders with the specified function.
         * @param {Function} search the predicate to use :
         * function (relativePath, file) {...}
         * It takes 2 arguments : the relative path and the file.
         * @return {Array} An array of matching elements.
         */
        filter: function(b) {
          var C = [];
          return this.forEach(function(T, R) {
            b(T, R) && C.push(R);
          }), C;
        },
        /**
         * Add a file to the zip file, or search a file.
         * @param   {string|RegExp} name The name of the file to add (if data is defined),
         * the name of the file to find (if no data) or a regex to match files.
         * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
         * @param   {Object} o     File options
         * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
         * a file (when searching by string) or an array of files (when searching by regex).
         */
        file: function(b, C, T) {
          if (arguments.length === 1)
            if (A(b)) {
              var R = b;
              return this.filter(function(M, Y) {
                return !Y.dir && R.test(M);
              });
            } else {
              var z = this.files[this.root + b];
              return z && !z.dir ? z : null;
            }
          else
            b = this.root + b, N.call(this, b, C, T);
          return this;
        },
        /**
         * Add a directory to the zip file, or search.
         * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
         * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
         */
        folder: function(b) {
          if (!b)
            return this;
          if (A(b))
            return this.filter(function(z, M) {
              return M.dir && b.test(z);
            });
          var C = this.root + b, T = y.call(this, C), R = this.clone();
          return R.root = T.name, R;
        },
        /**
         * Delete a file, or a directory and all sub-files, from the zip
         * @param {string} name the name of the file to delete
         * @return {JSZip} this JSZip object
         */
        remove: function(b) {
          b = this.root + b;
          var C = this.files[b];
          if (C || (b.slice(-1) !== "/" && (b += "/"), C = this.files[b]), C && !C.dir)
            delete this.files[b];
          else
            for (var T = this.filter(function(z, M) {
              return M.name.slice(0, b.length) === b;
            }), R = 0; R < T.length; R++)
              delete this.files[T[R].name];
          return this;
        },
        /**
         * @deprecated This method has been removed in JSZip 3.0, please check the upgrade guide.
         */
        generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        /**
         * Generate the complete zip file as an internal stream.
         * @param {Object} options the options to generate the zip file :
         * - compression, "STORE" by default.
         * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
         * @return {StreamHelper} the streamed zip file.
         */
        generateInternalStream: function(b) {
          var C, T = {};
          try {
            if (T = a.extend(b || {}, {
              streamFiles: !1,
              compression: "STORE",
              compressionOptions: null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: "application/zip",
              encodeFileName: s.utf8encode
            }), T.type = T.type.toLowerCase(), T.compression = T.compression.toUpperCase(), T.type === "binarystring" && (T.type = "string"), !T.type)
              throw new Error("No output type specified.");
            a.checkSupport(T.type), (T.platform === "darwin" || T.platform === "freebsd" || T.platform === "linux" || T.platform === "sunos") && (T.platform = "UNIX"), T.platform === "win32" && (T.platform = "DOS");
            var R = T.comment || this.comment || "";
            C = w.generateWorker(this, T, R);
          } catch (z) {
            C = new o("error"), C.error(z);
          }
          return new u(C, T.type || "string", T.mimeType);
        },
        /**
         * Generate the complete zip file asynchronously.
         * @see generateInternalStream
         */
        generateAsync: function(b, C) {
          return this.generateInternalStream(b).accumulate(C);
        },
        /**
         * Generate the complete zip file asynchronously.
         * @see generateInternalStream
         */
        generateNodeStream: function(b, C) {
          return b = b || {}, b.type || (b.type = "nodebuffer"), this.generateInternalStream(b).toNodejsStream(C);
        }
      };
      r.exports = k;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, r, i) {
      r.exports = t("stream");
    }, { stream: void 0 }], 17: [function(t, r, i) {
      var s = t("./DataReader"), a = t("../utils");
      function o(u) {
        s.call(this, u);
        for (var h = 0; h < this.data.length; h++)
          u[h] = u[h] & 255;
      }
      a.inherits(o, s), o.prototype.byteAt = function(u) {
        return this.data[this.zero + u];
      }, o.prototype.lastIndexOfSignature = function(u) {
        for (var h = u.charCodeAt(0), f = u.charCodeAt(1), c = u.charCodeAt(2), w = u.charCodeAt(3), m = this.length - 4; m >= 0; --m)
          if (this.data[m] === h && this.data[m + 1] === f && this.data[m + 2] === c && this.data[m + 3] === w)
            return m - this.zero;
        return -1;
      }, o.prototype.readAndCheckSignature = function(u) {
        var h = u.charCodeAt(0), f = u.charCodeAt(1), c = u.charCodeAt(2), w = u.charCodeAt(3), m = this.readData(4);
        return h === m[0] && f === m[1] && c === m[2] && w === m[3];
      }, o.prototype.readData = function(u) {
        if (this.checkOffset(u), u === 0)
          return [];
        var h = this.data.slice(this.zero + this.index, this.zero + this.index + u);
        return this.index += u, h;
      }, r.exports = o;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, r, i) {
      var s = t("../utils");
      function a(o) {
        this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
      }
      a.prototype = {
        /**
         * Check that the offset will not go too far.
         * @param {string} offset the additional offset to check.
         * @throws {Error} an Error if the offset is out of bounds.
         */
        checkOffset: function(o) {
          this.checkIndex(this.index + o);
        },
        /**
         * Check that the specified index will not be too far.
         * @param {string} newIndex the index to check.
         * @throws {Error} an Error if the index is out of bounds.
         */
        checkIndex: function(o) {
          if (this.length < this.zero + o || o < 0)
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
        },
        /**
         * Change the index.
         * @param {number} newIndex The new index.
         * @throws {Error} if the new index is out of the data.
         */
        setIndex: function(o) {
          this.checkIndex(o), this.index = o;
        },
        /**
         * Skip the next n bytes.
         * @param {number} n the number of bytes to skip.
         * @throws {Error} if the new index is out of the data.
         */
        skip: function(o) {
          this.setIndex(this.index + o);
        },
        /**
         * Get the byte at the specified index.
         * @param {number} i the index to use.
         * @return {number} a byte.
         */
        byteAt: function() {
        },
        /**
         * Get the next number with a given byte size.
         * @param {number} size the number of bytes to read.
         * @return {number} the corresponding number.
         */
        readInt: function(o) {
          var u = 0, h;
          for (this.checkOffset(o), h = this.index + o - 1; h >= this.index; h--)
            u = (u << 8) + this.byteAt(h);
          return this.index += o, u;
        },
        /**
         * Get the next string with a given byte size.
         * @param {number} size the number of bytes to read.
         * @return {string} the corresponding string.
         */
        readString: function(o) {
          return s.transformTo("string", this.readData(o));
        },
        /**
         * Get raw data without conversion, <size> bytes.
         * @param {number} size the number of bytes to read.
         * @return {Object} the raw data, implementation specific.
         */
        readData: function() {
        },
        /**
         * Find the last occurrence of a zip signature (4 bytes).
         * @param {string} sig the signature to find.
         * @return {number} the index of the last occurrence, -1 if not found.
         */
        lastIndexOfSignature: function() {
        },
        /**
         * Read the signature (4 bytes) at the current position and compare it with sig.
         * @param {string} sig the expected signature
         * @return {boolean} true if the signature matches, false otherwise.
         */
        readAndCheckSignature: function() {
        },
        /**
         * Get the next date.
         * @return {Date} the date.
         */
        readDate: function() {
          var o = this.readInt(4);
          return new Date(Date.UTC(
            (o >> 25 & 127) + 1980,
            // year
            (o >> 21 & 15) - 1,
            // month
            o >> 16 & 31,
            // day
            o >> 11 & 31,
            // hour
            o >> 5 & 63,
            // minute
            (o & 31) << 1
          ));
        }
      }, r.exports = a;
    }, { "../utils": 32 }], 19: [function(t, r, i) {
      var s = t("./Uint8ArrayReader"), a = t("../utils");
      function o(u) {
        s.call(this, u);
      }
      a.inherits(o, s), o.prototype.readData = function(u) {
        this.checkOffset(u);
        var h = this.data.slice(this.zero + this.index, this.zero + this.index + u);
        return this.index += u, h;
      }, r.exports = o;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, r, i) {
      var s = t("./DataReader"), a = t("../utils");
      function o(u) {
        s.call(this, u);
      }
      a.inherits(o, s), o.prototype.byteAt = function(u) {
        return this.data.charCodeAt(this.zero + u);
      }, o.prototype.lastIndexOfSignature = function(u) {
        return this.data.lastIndexOf(u) - this.zero;
      }, o.prototype.readAndCheckSignature = function(u) {
        var h = this.readData(4);
        return u === h;
      }, o.prototype.readData = function(u) {
        this.checkOffset(u);
        var h = this.data.slice(this.zero + this.index, this.zero + this.index + u);
        return this.index += u, h;
      }, r.exports = o;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, r, i) {
      var s = t("./ArrayReader"), a = t("../utils");
      function o(u) {
        s.call(this, u);
      }
      a.inherits(o, s), o.prototype.readData = function(u) {
        if (this.checkOffset(u), u === 0)
          return new Uint8Array(0);
        var h = this.data.subarray(this.zero + this.index, this.zero + this.index + u);
        return this.index += u, h;
      }, r.exports = o;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, r, i) {
      var s = t("../utils"), a = t("../support"), o = t("./ArrayReader"), u = t("./StringReader"), h = t("./NodeBufferReader"), f = t("./Uint8ArrayReader");
      r.exports = function(c) {
        var w = s.getTypeOf(c);
        return s.checkSupport(w), w === "string" && !a.uint8array ? new u(c) : w === "nodebuffer" ? new h(c) : a.uint8array ? new f(s.transformTo("uint8array", c)) : new o(s.transformTo("array", c));
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, r, i) {
      i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(t, r, i) {
      var s = t("./GenericWorker"), a = t("../utils");
      function o(u) {
        s.call(this, "ConvertWorker to " + u), this.destType = u;
      }
      a.inherits(o, s), o.prototype.processChunk = function(u) {
        this.push({
          data: a.transformTo(this.destType, u.data),
          meta: u.meta
        });
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, r, i) {
      var s = t("./GenericWorker"), a = t("../crc32"), o = t("../utils");
      function u() {
        s.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      o.inherits(u, s), u.prototype.processChunk = function(h) {
        this.streamInfo.crc32 = a(h.data, this.streamInfo.crc32 || 0), this.push(h);
      }, r.exports = u;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, r, i) {
      var s = t("../utils"), a = t("./GenericWorker");
      function o(u) {
        a.call(this, "DataLengthProbe for " + u), this.propName = u, this.withStreamInfo(u, 0);
      }
      s.inherits(o, a), o.prototype.processChunk = function(u) {
        if (u) {
          var h = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = h + u.data.length;
        }
        a.prototype.processChunk.call(this, u);
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, r, i) {
      var s = t("../utils"), a = t("./GenericWorker"), o = 16 * 1024;
      function u(h) {
        a.call(this, "DataWorker");
        var f = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, h.then(function(c) {
          f.dataIsReady = !0, f.data = c, f.max = c && c.length || 0, f.type = s.getTypeOf(c), f.isPaused || f._tickAndRepeat();
        }, function(c) {
          f.error(c);
        });
      }
      s.inherits(u, a), u.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, u.prototype.resume = function() {
        return a.prototype.resume.call(this) ? (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, s.delay(this._tickAndRepeat, [], this)), !0) : !1;
      }, u.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, !(this.isPaused || this.isFinished) && (this._tick(), this.isFinished || (s.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, u.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var h = o, f = null, c = Math.min(this.max, this.index + h);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            f = this.data.substring(this.index, c);
            break;
          case "uint8array":
            f = this.data.subarray(this.index, c);
            break;
          case "array":
          case "nodebuffer":
            f = this.data.slice(this.index, c);
            break;
        }
        return this.index = c, this.push({
          data: f,
          meta: {
            percent: this.max ? this.index / this.max * 100 : 0
          }
        });
      }, r.exports = u;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, r, i) {
      function s(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
          data: [],
          end: [],
          error: []
        }, this.previous = null;
      }
      s.prototype = {
        /**
         * Push a chunk to the next workers.
         * @param {Object} chunk the chunk to push
         */
        push: function(a) {
          this.emit("data", a);
        },
        /**
         * End the stream.
         * @return {Boolean} true if this call ended the worker, false otherwise.
         */
        end: function() {
          if (this.isFinished)
            return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (a) {
            this.emit("error", a);
          }
          return !0;
        },
        /**
         * End the stream with an error.
         * @param {Error} e the error which caused the premature end.
         * @return {Boolean} true if this call ended the worker with an error, false otherwise.
         */
        error: function(a) {
          return this.isFinished ? !1 : (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
        },
        /**
         * Add a callback on an event.
         * @param {String} name the name of the event (data, end, error)
         * @param {Function} listener the function to call when the event is triggered
         * @return {GenericWorker} the current object for chainability
         */
        on: function(a, o) {
          return this._listeners[a].push(o), this;
        },
        /**
         * Clean any references when a worker is ending.
         */
        cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        },
        /**
         * Trigger an event. This will call registered callback with the provided arg.
         * @param {String} name the name of the event (data, end, error)
         * @param {Object} arg the argument to call the callback with.
         */
        emit: function(a, o) {
          if (this._listeners[a])
            for (var u = 0; u < this._listeners[a].length; u++)
              this._listeners[a][u].call(this, o);
        },
        /**
         * Chain a worker with an other.
         * @param {Worker} next the worker receiving events from the current one.
         * @return {worker} the next worker for chainability
         */
        pipe: function(a) {
          return a.registerPrevious(this);
        },
        /**
         * Same as `pipe` in the other direction.
         * Using an API with `pipe(next)` is very easy.
         * Implementing the API with the point of view of the next one registering
         * a source is easier, see the ZipFileWorker.
         * @param {Worker} previous the previous worker, sending events to this one
         * @return {Worker} the current worker for chainability
         */
        registerPrevious: function(a) {
          if (this.isLocked)
            throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
          var o = this;
          return a.on("data", function(u) {
            o.processChunk(u);
          }), a.on("end", function() {
            o.end();
          }), a.on("error", function(u) {
            o.error(u);
          }), this;
        },
        /**
         * Pause the stream so it doesn't send events anymore.
         * @return {Boolean} true if this call paused the worker, false otherwise.
         */
        pause: function() {
          return this.isPaused || this.isFinished ? !1 : (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        },
        /**
         * Resume a paused stream.
         * @return {Boolean} true if this call resumed the worker, false otherwise.
         */
        resume: function() {
          if (!this.isPaused || this.isFinished)
            return !1;
          this.isPaused = !1;
          var a = !1;
          return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
        },
        /**
         * Flush any remaining bytes as the stream is ending.
         */
        flush: function() {
        },
        /**
         * Process a chunk. This is usually the method overridden.
         * @param {Object} chunk the chunk to process.
         */
        processChunk: function(a) {
          this.push(a);
        },
        /**
         * Add a key/value to be added in the workers chain streamInfo once activated.
         * @param {String} key the key to use
         * @param {Object} value the associated value
         * @return {Worker} the current worker for chainability
         */
        withStreamInfo: function(a, o) {
          return this.extraStreamInfo[a] = o, this.mergeStreamInfo(), this;
        },
        /**
         * Merge this worker's streamInfo into the chain's streamInfo.
         */
        mergeStreamInfo: function() {
          for (var a in this.extraStreamInfo)
            Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
        },
        /**
         * Lock the stream to prevent further updates on the workers chain.
         * After calling this method, all calls to pipe will fail.
         */
        lock: function() {
          if (this.isLocked)
            throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        },
        /**
         *
         * Pretty print the workers chain.
         */
        toString: function() {
          var a = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + a : a;
        }
      }, r.exports = s;
    }, {}], 29: [function(t, r, i) {
      var s = t("../utils"), a = t("./ConvertWorker"), o = t("./GenericWorker"), u = t("../base64"), h = t("../support"), f = t("../external"), c = null;
      if (h.nodestream)
        try {
          c = t("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function w(p, v, y) {
        switch (p) {
          case "blob":
            return s.newBlob(s.transformTo("arraybuffer", v), y);
          case "base64":
            return u.encode(v);
          default:
            return s.transformTo(p, v);
        }
      }
      function m(p, v) {
        var y, A = 0, k = null, b = 0;
        for (y = 0; y < v.length; y++)
          b += v[y].length;
        switch (p) {
          case "string":
            return v.join("");
          case "array":
            return Array.prototype.concat.apply([], v);
          case "uint8array":
            for (k = new Uint8Array(b), y = 0; y < v.length; y++)
              k.set(v[y], A), A += v[y].length;
            return k;
          case "nodebuffer":
            return Buffer.concat(v);
          default:
            throw new Error("concat : unsupported type '" + p + "'");
        }
      }
      function S(p, v) {
        return new f.Promise(function(y, A) {
          var k = [], b = p._internalType, C = p._outputType, T = p._mimeType;
          p.on("data", function(R, z) {
            k.push(R), v && v(z);
          }).on("error", function(R) {
            k = [], A(R);
          }).on("end", function() {
            try {
              var R = w(C, m(b, k), T);
              y(R);
            } catch (z) {
              A(z);
            }
            k = [];
          }).resume();
        });
      }
      function N(p, v, y) {
        var A = v;
        switch (v) {
          case "blob":
          case "arraybuffer":
            A = "uint8array";
            break;
          case "base64":
            A = "string";
            break;
        }
        try {
          this._internalType = A, this._outputType = v, this._mimeType = y, s.checkSupport(A), this._worker = p.pipe(new a(A)), p.lock();
        } catch (k) {
          this._worker = new o("error"), this._worker.error(k);
        }
      }
      N.prototype = {
        /**
         * Listen a StreamHelper, accumulate its content and concatenate it into a
         * complete block.
         * @param {Function} updateCb the update callback.
         * @return Promise the promise for the accumulation.
         */
        accumulate: function(p) {
          return S(this, p);
        },
        /**
         * Add a listener on an event triggered on a stream.
         * @param {String} evt the name of the event
         * @param {Function} fn the listener
         * @return {StreamHelper} the current helper.
         */
        on: function(p, v) {
          var y = this;
          return p === "data" ? this._worker.on(p, function(A) {
            v.call(y, A.data, A.meta);
          }) : this._worker.on(p, function() {
            s.delay(v, arguments, y);
          }), this;
        },
        /**
         * Resume the flow of chunks.
         * @return {StreamHelper} the current helper.
         */
        resume: function() {
          return s.delay(this._worker.resume, [], this._worker), this;
        },
        /**
         * Pause the flow of chunks.
         * @return {StreamHelper} the current helper.
         */
        pause: function() {
          return this._worker.pause(), this;
        },
        /**
         * Return a nodejs stream for this helper.
         * @param {Function} updateCb the update callback.
         * @return {NodejsStreamOutputAdapter} the nodejs stream.
         */
        toNodejsStream: function(p) {
          if (s.checkSupport("nodestream"), this._outputType !== "nodebuffer")
            throw new Error(this._outputType + " is not supported by this method");
          return new c(this, {
            objectMode: this._outputType !== "nodebuffer"
          }, p);
        }
      }, r.exports = N;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, r, i) {
      if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        i.blob = !1;
      else {
        var s = new ArrayBuffer(0);
        try {
          i.blob = new Blob([s], {
            type: "application/zip"
          }).size === 0;
        } catch {
          try {
            var a = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder, o = new a();
            o.append(s), i.blob = o.getBlob("application/zip").size === 0;
          } catch {
            i.blob = !1;
          }
        }
      }
      try {
        i.nodestream = !!t("readable-stream").Readable;
      } catch {
        i.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(t, r, i) {
      for (var s = t("./utils"), a = t("./support"), o = t("./nodejsUtils"), u = t("./stream/GenericWorker"), h = new Array(256), f = 0; f < 256; f++)
        h[f] = f >= 252 ? 6 : f >= 248 ? 5 : f >= 240 ? 4 : f >= 224 ? 3 : f >= 192 ? 2 : 1;
      h[254] = h[254] = 1;
      var c = function(p) {
        var v, y, A, k, b, C = p.length, T = 0;
        for (k = 0; k < C; k++)
          y = p.charCodeAt(k), (y & 64512) === 55296 && k + 1 < C && (A = p.charCodeAt(k + 1), (A & 64512) === 56320 && (y = 65536 + (y - 55296 << 10) + (A - 56320), k++)), T += y < 128 ? 1 : y < 2048 ? 2 : y < 65536 ? 3 : 4;
        for (a.uint8array ? v = new Uint8Array(T) : v = new Array(T), b = 0, k = 0; b < T; k++)
          y = p.charCodeAt(k), (y & 64512) === 55296 && k + 1 < C && (A = p.charCodeAt(k + 1), (A & 64512) === 56320 && (y = 65536 + (y - 55296 << 10) + (A - 56320), k++)), y < 128 ? v[b++] = y : y < 2048 ? (v[b++] = 192 | y >>> 6, v[b++] = 128 | y & 63) : y < 65536 ? (v[b++] = 224 | y >>> 12, v[b++] = 128 | y >>> 6 & 63, v[b++] = 128 | y & 63) : (v[b++] = 240 | y >>> 18, v[b++] = 128 | y >>> 12 & 63, v[b++] = 128 | y >>> 6 & 63, v[b++] = 128 | y & 63);
        return v;
      }, w = function(p, v) {
        var y;
        for (v = v || p.length, v > p.length && (v = p.length), y = v - 1; y >= 0 && (p[y] & 192) === 128; )
          y--;
        return y < 0 || y === 0 ? v : y + h[p[y]] > v ? y : v;
      }, m = function(p) {
        var v, y, A, k, b = p.length, C = new Array(b * 2);
        for (y = 0, v = 0; v < b; ) {
          if (A = p[v++], A < 128) {
            C[y++] = A;
            continue;
          }
          if (k = h[A], k > 4) {
            C[y++] = 65533, v += k - 1;
            continue;
          }
          for (A &= k === 2 ? 31 : k === 3 ? 15 : 7; k > 1 && v < b; )
            A = A << 6 | p[v++] & 63, k--;
          if (k > 1) {
            C[y++] = 65533;
            continue;
          }
          A < 65536 ? C[y++] = A : (A -= 65536, C[y++] = 55296 | A >> 10 & 1023, C[y++] = 56320 | A & 1023);
        }
        return C.length !== y && (C.subarray ? C = C.subarray(0, y) : C.length = y), s.applyFromCharCode(C);
      };
      i.utf8encode = function(v) {
        return a.nodebuffer ? o.newBufferFrom(v, "utf-8") : c(v);
      }, i.utf8decode = function(v) {
        return a.nodebuffer ? s.transformTo("nodebuffer", v).toString("utf-8") : (v = s.transformTo(a.uint8array ? "uint8array" : "array", v), m(v));
      };
      function S() {
        u.call(this, "utf-8 decode"), this.leftOver = null;
      }
      s.inherits(S, u), S.prototype.processChunk = function(p) {
        var v = s.transformTo(a.uint8array ? "uint8array" : "array", p.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var y = v;
            v = new Uint8Array(y.length + this.leftOver.length), v.set(this.leftOver, 0), v.set(y, this.leftOver.length);
          } else
            v = this.leftOver.concat(v);
          this.leftOver = null;
        }
        var A = w(v), k = v;
        A !== v.length && (a.uint8array ? (k = v.subarray(0, A), this.leftOver = v.subarray(A, v.length)) : (k = v.slice(0, A), this.leftOver = v.slice(A, v.length))), this.push({
          data: i.utf8decode(k),
          meta: p.meta
        });
      }, S.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({
          data: i.utf8decode(this.leftOver),
          meta: {}
        }), this.leftOver = null);
      }, i.Utf8DecodeWorker = S;
      function N() {
        u.call(this, "utf-8 encode");
      }
      s.inherits(N, u), N.prototype.processChunk = function(p) {
        this.push({
          data: i.utf8encode(p.data),
          meta: p.meta
        });
      }, i.Utf8EncodeWorker = N;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, r, i) {
      var s = t("./support"), a = t("./base64"), o = t("./nodejsUtils"), u = t("./external");
      t("setimmediate");
      function h(p) {
        var v = null;
        return s.uint8array ? v = new Uint8Array(p.length) : v = new Array(p.length), c(p, v);
      }
      i.newBlob = function(p, v) {
        i.checkSupport("blob");
        try {
          return new Blob([p], {
            type: v
          });
        } catch {
          try {
            var y = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder, A = new y();
            return A.append(p), A.getBlob(v);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      function f(p) {
        return p;
      }
      function c(p, v) {
        for (var y = 0; y < p.length; ++y)
          v[y] = p.charCodeAt(y) & 255;
        return v;
      }
      var w = {
        /**
         * Transform an array of int into a string, chunk by chunk.
         * See the performances notes on arrayLikeToString.
         * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
         * @param {String} type the type of the array.
         * @param {Integer} chunk the chunk size.
         * @return {String} the resulting string.
         * @throws Error if the chunk is too big for the stack.
         */
        stringifyByChunk: function(p, v, y) {
          var A = [], k = 0, b = p.length;
          if (b <= y)
            return String.fromCharCode.apply(null, p);
          for (; k < b; )
            v === "array" || v === "nodebuffer" ? A.push(String.fromCharCode.apply(null, p.slice(k, Math.min(k + y, b)))) : A.push(String.fromCharCode.apply(null, p.subarray(k, Math.min(k + y, b)))), k += y;
          return A.join("");
        },
        /**
         * Call String.fromCharCode on every item in the array.
         * This is the naive implementation, which generate A LOT of intermediate string.
         * This should be used when everything else fail.
         * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
         * @return {String} the result.
         */
        stringifyByChar: function(p) {
          for (var v = "", y = 0; y < p.length; y++)
            v += String.fromCharCode(p[y]);
          return v;
        },
        applyCanBeUsed: {
          /**
           * true if the browser accepts to use String.fromCharCode on Uint8Array
           */
          uint8array: function() {
            try {
              return s.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch {
              return !1;
            }
          }(),
          /**
           * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
           */
          nodebuffer: function() {
            try {
              return s.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
            } catch {
              return !1;
            }
          }()
        }
      };
      function m(p) {
        var v = 65536, y = i.getTypeOf(p), A = !0;
        if (y === "uint8array" ? A = w.applyCanBeUsed.uint8array : y === "nodebuffer" && (A = w.applyCanBeUsed.nodebuffer), A)
          for (; v > 1; )
            try {
              return w.stringifyByChunk(p, y, v);
            } catch {
              v = Math.floor(v / 2);
            }
        return w.stringifyByChar(p);
      }
      i.applyFromCharCode = m;
      function S(p, v) {
        for (var y = 0; y < p.length; y++)
          v[y] = p[y];
        return v;
      }
      var N = {};
      N.string = {
        string: f,
        array: function(p) {
          return c(p, new Array(p.length));
        },
        arraybuffer: function(p) {
          return N.string.uint8array(p).buffer;
        },
        uint8array: function(p) {
          return c(p, new Uint8Array(p.length));
        },
        nodebuffer: function(p) {
          return c(p, o.allocBuffer(p.length));
        }
      }, N.array = {
        string: m,
        array: f,
        arraybuffer: function(p) {
          return new Uint8Array(p).buffer;
        },
        uint8array: function(p) {
          return new Uint8Array(p);
        },
        nodebuffer: function(p) {
          return o.newBufferFrom(p);
        }
      }, N.arraybuffer = {
        string: function(p) {
          return m(new Uint8Array(p));
        },
        array: function(p) {
          return S(new Uint8Array(p), new Array(p.byteLength));
        },
        arraybuffer: f,
        uint8array: function(p) {
          return new Uint8Array(p);
        },
        nodebuffer: function(p) {
          return o.newBufferFrom(new Uint8Array(p));
        }
      }, N.uint8array = {
        string: m,
        array: function(p) {
          return S(p, new Array(p.length));
        },
        arraybuffer: function(p) {
          return p.buffer;
        },
        uint8array: f,
        nodebuffer: function(p) {
          return o.newBufferFrom(p);
        }
      }, N.nodebuffer = {
        string: m,
        array: function(p) {
          return S(p, new Array(p.length));
        },
        arraybuffer: function(p) {
          return N.nodebuffer.uint8array(p).buffer;
        },
        uint8array: function(p) {
          return S(p, new Uint8Array(p.length));
        },
        nodebuffer: f
      }, i.transformTo = function(p, v) {
        if (v || (v = ""), !p)
          return v;
        i.checkSupport(p);
        var y = i.getTypeOf(v), A = N[y][p](v);
        return A;
      }, i.resolve = function(p) {
        for (var v = p.split("/"), y = [], A = 0; A < v.length; A++) {
          var k = v[A];
          k === "." || k === "" && A !== 0 && A !== v.length - 1 || (k === ".." ? y.pop() : y.push(k));
        }
        return y.join("/");
      }, i.getTypeOf = function(p) {
        if (typeof p == "string")
          return "string";
        if (Object.prototype.toString.call(p) === "[object Array]")
          return "array";
        if (s.nodebuffer && o.isBuffer(p))
          return "nodebuffer";
        if (s.uint8array && p instanceof Uint8Array)
          return "uint8array";
        if (s.arraybuffer && p instanceof ArrayBuffer)
          return "arraybuffer";
      }, i.checkSupport = function(p) {
        var v = s[p.toLowerCase()];
        if (!v)
          throw new Error(p + " is not supported by this platform");
      }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(p) {
        var v = "", y, A;
        for (A = 0; A < (p || "").length; A++)
          y = p.charCodeAt(A), v += "\\x" + (y < 16 ? "0" : "") + y.toString(16).toUpperCase();
        return v;
      }, i.delay = function(p, v, y) {
        setImmediate(function() {
          p.apply(y || null, v || []);
        });
      }, i.inherits = function(p, v) {
        var y = function() {
        };
        y.prototype = v.prototype, p.prototype = new y();
      }, i.extend = function() {
        var p = {}, v, y;
        for (v = 0; v < arguments.length; v++)
          for (y in arguments[v])
            Object.prototype.hasOwnProperty.call(arguments[v], y) && typeof p[y] > "u" && (p[y] = arguments[v][y]);
        return p;
      }, i.prepareContent = function(p, v, y, A, k) {
        var b = u.Promise.resolve(v).then(function(C) {
          var T = s.blob && (C instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(C)) !== -1);
          return T && typeof FileReader < "u" ? new u.Promise(function(R, z) {
            var M = new FileReader();
            M.onload = function(Y) {
              R(Y.target.result);
            }, M.onerror = function(Y) {
              z(Y.target.error);
            }, M.readAsArrayBuffer(C);
          }) : C;
        });
        return b.then(function(C) {
          var T = i.getTypeOf(C);
          return T ? (T === "arraybuffer" ? C = i.transformTo("uint8array", C) : T === "string" && (k ? C = a.decode(C) : y && A !== !0 && (C = h(C))), C) : u.Promise.reject(
            new Error("Can't read the data of '" + p + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
          );
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, r, i) {
      var s = t("./reader/readerFor"), a = t("./utils"), o = t("./signature"), u = t("./zipEntry"), h = t("./support");
      function f(c) {
        this.files = [], this.loadOptions = c;
      }
      f.prototype = {
        /**
         * Check that the reader is on the specified signature.
         * @param {string} expectedSignature the expected signature.
         * @throws {Error} if it is an other signature.
         */
        checkSignature: function(c) {
          if (!this.reader.readAndCheckSignature(c)) {
            this.reader.index -= 4;
            var w = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(w) + ", expected " + a.pretty(c) + ")");
          }
        },
        /**
         * Check if the given signature is at the given index.
         * @param {number} askedIndex the index to check.
         * @param {string} expectedSignature the signature to expect.
         * @return {boolean} true if the signature is here, false otherwise.
         */
        isSignature: function(c, w) {
          var m = this.reader.index;
          this.reader.setIndex(c);
          var S = this.reader.readString(4), N = S === w;
          return this.reader.setIndex(m), N;
        },
        /**
         * Read the end of the central directory.
         */
        readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var c = this.reader.readData(this.zipCommentLength), w = h.uint8array ? "uint8array" : "array", m = a.transformTo(w, c);
          this.zipComment = this.loadOptions.decodeFileName(m);
        },
        /**
         * Read the end of the Zip 64 central directory.
         * Not merged with the method readEndOfCentral :
         * The end of central can coexist with its Zip64 brother,
         * I don't want to read the wrong number of bytes !
         */
        readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var c = this.zip64EndOfCentralSize - 44, w = 0, m, S, N; w < c; )
            m = this.reader.readInt(2), S = this.reader.readInt(4), N = this.reader.readData(S), this.zip64ExtensibleData[m] = {
              id: m,
              length: S,
              value: N
            };
        },
        /**
         * Read the end of the Zip 64 central directory locator.
         */
        readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
            throw new Error("Multi-volumes zip are not supported");
        },
        /**
         * Read the local files, based on the offset read in the central part.
         */
        readLocalFiles: function() {
          var c, w;
          for (c = 0; c < this.files.length; c++)
            w = this.files[c], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
        },
        /**
         * Read the central directory.
         */
        readCentralDir: function() {
          var c;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); )
            c = new u({
              zip64: this.zip64
            }, this.loadOptions), c.readCentralPart(this.reader), this.files.push(c);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
            throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        },
        /**
         * Read the end of central directory.
         */
        readEndOfCentral: function() {
          var c = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
          if (c < 0) {
            var w = !this.isSignature(0, o.LOCAL_FILE_HEADER);
            throw w ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          }
          this.reader.setIndex(c);
          var m = c;
          if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, c = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), c < 0)
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(c), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var S = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (S += 20, S += 12 + this.zip64EndOfCentralSize);
          var N = m - S;
          if (N > 0)
            this.isSignature(m, o.CENTRAL_FILE_HEADER) || (this.reader.zero = N);
          else if (N < 0)
            throw new Error("Corrupted zip: missing " + Math.abs(N) + " bytes.");
        },
        prepareReader: function(c) {
          this.reader = s(c);
        },
        /**
         * Read a zip file and create ZipEntries.
         * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
         */
        load: function(c) {
          this.prepareReader(c), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        }
      }, r.exports = f;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, r, i) {
      var s = t("./reader/readerFor"), a = t("./utils"), o = t("./compressedObject"), u = t("./crc32"), h = t("./utf8"), f = t("./compressions"), c = t("./support"), w = 0, m = 3, S = function(p) {
        for (var v in f)
          if (Object.prototype.hasOwnProperty.call(f, v) && f[v].magic === p)
            return f[v];
        return null;
      };
      function N(p, v) {
        this.options = p, this.loadOptions = v;
      }
      N.prototype = {
        /**
         * say if the file is encrypted.
         * @return {boolean} true if the file is encrypted, false otherwise.
         */
        isEncrypted: function() {
          return (this.bitFlag & 1) === 1;
        },
        /**
         * say if the file has utf-8 filename/comment.
         * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
         */
        useUTF8: function() {
          return (this.bitFlag & 2048) === 2048;
        },
        /**
         * Read the local part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readLocalPart: function(p) {
          var v, y;
          if (p.skip(22), this.fileNameLength = p.readInt(2), y = p.readInt(2), this.fileName = p.readData(this.fileNameLength), p.skip(y), this.compressedSize === -1 || this.uncompressedSize === -1)
            throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (v = S(this.compressionMethod), v === null)
            throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
          this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, v, p.readData(this.compressedSize));
        },
        /**
         * Read the central part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readCentralPart: function(p) {
          this.versionMadeBy = p.readInt(2), p.skip(2), this.bitFlag = p.readInt(2), this.compressionMethod = p.readString(2), this.date = p.readDate(), this.crc32 = p.readInt(4), this.compressedSize = p.readInt(4), this.uncompressedSize = p.readInt(4);
          var v = p.readInt(2);
          if (this.extraFieldsLength = p.readInt(2), this.fileCommentLength = p.readInt(2), this.diskNumberStart = p.readInt(2), this.internalFileAttributes = p.readInt(2), this.externalFileAttributes = p.readInt(4), this.localHeaderOffset = p.readInt(4), this.isEncrypted())
            throw new Error("Encrypted zip are not supported");
          p.skip(v), this.readExtraFields(p), this.parseZIP64ExtraField(p), this.fileComment = p.readData(this.fileCommentLength);
        },
        /**
         * Parse the external file attributes and get the unix/dos permissions.
         */
        processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var p = this.versionMadeBy >> 8;
          this.dir = !!(this.externalFileAttributes & 16), p === w && (this.dosPermissions = this.externalFileAttributes & 63), p === m && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), !this.dir && this.fileNameStr.slice(-1) === "/" && (this.dir = !0);
        },
        /**
         * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
         * @param {DataReader} reader the reader to use.
         */
        parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var p = s(this.extraFields[1].value);
            this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = p.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = p.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = p.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = p.readInt(4));
          }
        },
        /**
         * Read the central part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readExtraFields: function(p) {
          var v = p.index + this.extraFieldsLength, y, A, k;
          for (this.extraFields || (this.extraFields = {}); p.index + 4 < v; )
            y = p.readInt(2), A = p.readInt(2), k = p.readData(A), this.extraFields[y] = {
              id: y,
              length: A,
              value: k
            };
          p.setIndex(v);
        },
        /**
         * Apply an UTF8 transformation if needed.
         */
        handleUTF8: function() {
          var p = c.uint8array ? "uint8array" : "array";
          if (this.useUTF8())
            this.fileNameStr = h.utf8decode(this.fileName), this.fileCommentStr = h.utf8decode(this.fileComment);
          else {
            var v = this.findExtraFieldUnicodePath();
            if (v !== null)
              this.fileNameStr = v;
            else {
              var y = a.transformTo(p, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(y);
            }
            var A = this.findExtraFieldUnicodeComment();
            if (A !== null)
              this.fileCommentStr = A;
            else {
              var k = a.transformTo(p, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(k);
            }
          }
        },
        /**
         * Find the unicode path declared in the extra field, if any.
         * @return {String} the unicode path, null otherwise.
         */
        findExtraFieldUnicodePath: function() {
          var p = this.extraFields[28789];
          if (p) {
            var v = s(p.value);
            return v.readInt(1) !== 1 || u(this.fileName) !== v.readInt(4) ? null : h.utf8decode(v.readData(p.length - 5));
          }
          return null;
        },
        /**
         * Find the unicode comment declared in the extra field, if any.
         * @return {String} the unicode comment, null otherwise.
         */
        findExtraFieldUnicodeComment: function() {
          var p = this.extraFields[25461];
          if (p) {
            var v = s(p.value);
            return v.readInt(1) !== 1 || u(this.fileComment) !== v.readInt(4) ? null : h.utf8decode(v.readData(p.length - 5));
          }
          return null;
        }
      }, r.exports = N;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, r, i) {
      var s = t("./stream/StreamHelper"), a = t("./stream/DataWorker"), o = t("./utf8"), u = t("./compressedObject"), h = t("./stream/GenericWorker"), f = function(S, N, p) {
        this.name = S, this.dir = p.dir, this.date = p.date, this.comment = p.comment, this.unixPermissions = p.unixPermissions, this.dosPermissions = p.dosPermissions, this._data = N, this._dataBinary = p.binary, this.options = {
          compression: p.compression,
          compressionOptions: p.compressionOptions
        };
      };
      f.prototype = {
        /**
         * Create an internal stream for the content of this object.
         * @param {String} type the type of each chunk.
         * @return StreamHelper the stream.
         */
        internalStream: function(S) {
          var N = null, p = "string";
          try {
            if (!S)
              throw new Error("No output type specified.");
            p = S.toLowerCase();
            var v = p === "string" || p === "text";
            (p === "binarystring" || p === "text") && (p = "string"), N = this._decompressWorker();
            var y = !this._dataBinary;
            y && !v && (N = N.pipe(new o.Utf8EncodeWorker())), !y && v && (N = N.pipe(new o.Utf8DecodeWorker()));
          } catch (A) {
            N = new h("error"), N.error(A);
          }
          return new s(N, p, "");
        },
        /**
         * Prepare the content in the asked type.
         * @param {String} type the type of the result.
         * @param {Function} onUpdate a function to call on each internal update.
         * @return Promise the promise of the result.
         */
        async: function(S, N) {
          return this.internalStream(S).accumulate(N);
        },
        /**
         * Prepare the content as a nodejs stream.
         * @param {String} type the type of each chunk.
         * @param {Function} onUpdate a function to call on each internal update.
         * @return Stream the stream.
         */
        nodeStream: function(S, N) {
          return this.internalStream(S || "nodebuffer").toNodejsStream(N);
        },
        /**
         * Return a worker for the compressed content.
         * @private
         * @param {Object} compression the compression object to use.
         * @param {Object} compressionOptions the options to use when compressing.
         * @return Worker the worker.
         */
        _compressWorker: function(S, N) {
          if (this._data instanceof u && this._data.compression.magic === S.magic)
            return this._data.getCompressedWorker();
          var p = this._decompressWorker();
          return this._dataBinary || (p = p.pipe(new o.Utf8EncodeWorker())), u.createWorkerFrom(p, S, N);
        },
        /**
         * Return a worker for the decompressed content.
         * @private
         * @return Worker the worker.
         */
        _decompressWorker: function() {
          return this._data instanceof u ? this._data.getContentWorker() : this._data instanceof h ? this._data : new a(this._data);
        }
      };
      for (var c = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, m = 0; m < c.length; m++)
        f.prototype[c[m]] = w;
      r.exports = f;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, r, i) {
      (function(s) {
        var a = s.MutationObserver || s.WebKitMutationObserver, o;
        if (a) {
          var u = 0, h = new a(S), f = s.document.createTextNode("");
          h.observe(f, {
            characterData: !0
          }), o = function() {
            f.data = u = ++u % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var c = new s.MessageChannel();
          c.port1.onmessage = S, o = function() {
            c.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? o = function() {
            var p = s.document.createElement("script");
            p.onreadystatechange = function() {
              S(), p.onreadystatechange = null, p.parentNode.removeChild(p), p = null;
            }, s.document.documentElement.appendChild(p);
          } : o = function() {
            setTimeout(S, 0);
          };
        var w, m = [];
        function S() {
          w = !0;
          for (var p, v, y = m.length; y; ) {
            for (v = m, m = [], p = -1; ++p < y; )
              v[p]();
            y = m.length;
          }
          w = !1;
        }
        r.exports = N;
        function N(p) {
          m.push(p) === 1 && !w && o();
        }
      }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(t, r, i) {
      var s = t("immediate");
      function a() {
      }
      var o = {}, u = ["REJECTED"], h = ["FULFILLED"], f = ["PENDING"];
      r.exports = c;
      function c(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, b !== a && N(this, b);
      }
      c.prototype.finally = function(b) {
        if (typeof b != "function")
          return this;
        var C = this.constructor;
        return this.then(T, R);
        function T(z) {
          function M() {
            return z;
          }
          return C.resolve(b()).then(M);
        }
        function R(z) {
          function M() {
            throw z;
          }
          return C.resolve(b()).then(M);
        }
      }, c.prototype.catch = function(b) {
        return this.then(null, b);
      }, c.prototype.then = function(b, C) {
        if (typeof b != "function" && this.state === h || typeof C != "function" && this.state === u)
          return this;
        var T = new this.constructor(a);
        if (this.state !== f) {
          var R = this.state === h ? b : C;
          m(T, R, this.outcome);
        } else
          this.queue.push(new w(T, b, C));
        return T;
      };
      function w(b, C, T) {
        this.promise = b, typeof C == "function" && (this.onFulfilled = C, this.callFulfilled = this.otherCallFulfilled), typeof T == "function" && (this.onRejected = T, this.callRejected = this.otherCallRejected);
      }
      w.prototype.callFulfilled = function(b) {
        o.resolve(this.promise, b);
      }, w.prototype.otherCallFulfilled = function(b) {
        m(this.promise, this.onFulfilled, b);
      }, w.prototype.callRejected = function(b) {
        o.reject(this.promise, b);
      }, w.prototype.otherCallRejected = function(b) {
        m(this.promise, this.onRejected, b);
      };
      function m(b, C, T) {
        s(function() {
          var R;
          try {
            R = C(T);
          } catch (z) {
            return o.reject(b, z);
          }
          R === b ? o.reject(b, new TypeError("Cannot resolve promise with itself")) : o.resolve(b, R);
        });
      }
      o.resolve = function(b, C) {
        var T = p(S, C);
        if (T.status === "error")
          return o.reject(b, T.value);
        var R = T.value;
        if (R)
          N(b, R);
        else {
          b.state = h, b.outcome = C;
          for (var z = -1, M = b.queue.length; ++z < M; )
            b.queue[z].callFulfilled(C);
        }
        return b;
      }, o.reject = function(b, C) {
        b.state = u, b.outcome = C;
        for (var T = -1, R = b.queue.length; ++T < R; )
          b.queue[T].callRejected(C);
        return b;
      };
      function S(b) {
        var C = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof C == "function")
          return function() {
            C.apply(b, arguments);
          };
      }
      function N(b, C) {
        var T = !1;
        function R(Z) {
          T || (T = !0, o.reject(b, Z));
        }
        function z(Z) {
          T || (T = !0, o.resolve(b, Z));
        }
        function M() {
          C(z, R);
        }
        var Y = p(M);
        Y.status === "error" && R(Y.value);
      }
      function p(b, C) {
        var T = {};
        try {
          T.value = b(C), T.status = "success";
        } catch (R) {
          T.status = "error", T.value = R;
        }
        return T;
      }
      c.resolve = v;
      function v(b) {
        return b instanceof this ? b : o.resolve(new this(a), b);
      }
      c.reject = y;
      function y(b) {
        var C = new this(a);
        return o.reject(C, b);
      }
      c.all = A;
      function A(b) {
        var C = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var T = b.length, R = !1;
        if (!T)
          return this.resolve([]);
        for (var z = new Array(T), M = 0, Y = -1, Z = new this(a); ++Y < T; )
          te(b[Y], Y);
        return Z;
        function te(ge, pe) {
          C.resolve(ge).then(ve, function(de) {
            R || (R = !0, o.reject(Z, de));
          });
          function ve(de) {
            z[pe] = de, ++M === T && !R && (R = !0, o.resolve(Z, z));
          }
        }
      }
      c.race = k;
      function k(b) {
        var C = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var T = b.length, R = !1;
        if (!T)
          return this.resolve([]);
        for (var z = -1, M = new this(a); ++z < T; )
          Y(b[z]);
        return M;
        function Y(Z) {
          C.resolve(Z).then(function(te) {
            R || (R = !0, o.resolve(M, te));
          }, function(te) {
            R || (R = !0, o.reject(M, te));
          });
        }
      }
    }, { immediate: 36 }], 38: [function(t, r, i) {
      var s = t("./lib/utils/common").assign, a = t("./lib/deflate"), o = t("./lib/inflate"), u = t("./lib/zlib/constants"), h = {};
      s(h, a, o, u), r.exports = h;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, r, i) {
      var s = t("./zlib/deflate"), a = t("./utils/common"), o = t("./utils/strings"), u = t("./zlib/messages"), h = t("./zlib/zstream"), f = Object.prototype.toString, c = 0, w = 4, m = 0, S = 1, N = 2, p = -1, v = 0, y = 8;
      function A(T) {
        if (!(this instanceof A))
          return new A(T);
        this.options = a.assign({
          level: p,
          method: y,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: v,
          to: ""
        }, T || {});
        var R = this.options;
        R.raw && R.windowBits > 0 ? R.windowBits = -R.windowBits : R.gzip && R.windowBits > 0 && R.windowBits < 16 && (R.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h(), this.strm.avail_out = 0;
        var z = s.deflateInit2(
          this.strm,
          R.level,
          R.method,
          R.windowBits,
          R.memLevel,
          R.strategy
        );
        if (z !== m)
          throw new Error(u[z]);
        if (R.header && s.deflateSetHeader(this.strm, R.header), R.dictionary) {
          var M;
          if (typeof R.dictionary == "string" ? M = o.string2buf(R.dictionary) : f.call(R.dictionary) === "[object ArrayBuffer]" ? M = new Uint8Array(R.dictionary) : M = R.dictionary, z = s.deflateSetDictionary(this.strm, M), z !== m)
            throw new Error(u[z]);
          this._dict_set = !0;
        }
      }
      A.prototype.push = function(T, R) {
        var z = this.strm, M = this.options.chunkSize, Y, Z;
        if (this.ended)
          return !1;
        Z = R === ~~R ? R : R === !0 ? w : c, typeof T == "string" ? z.input = o.string2buf(T) : f.call(T) === "[object ArrayBuffer]" ? z.input = new Uint8Array(T) : z.input = T, z.next_in = 0, z.avail_in = z.input.length;
        do {
          if (z.avail_out === 0 && (z.output = new a.Buf8(M), z.next_out = 0, z.avail_out = M), Y = s.deflate(z, Z), Y !== S && Y !== m)
            return this.onEnd(Y), this.ended = !0, !1;
          (z.avail_out === 0 || z.avail_in === 0 && (Z === w || Z === N)) && (this.options.to === "string" ? this.onData(o.buf2binstring(a.shrinkBuf(z.output, z.next_out))) : this.onData(a.shrinkBuf(z.output, z.next_out)));
        } while ((z.avail_in > 0 || z.avail_out === 0) && Y !== S);
        return Z === w ? (Y = s.deflateEnd(this.strm), this.onEnd(Y), this.ended = !0, Y === m) : (Z === N && (this.onEnd(m), z.avail_out = 0), !0);
      }, A.prototype.onData = function(T) {
        this.chunks.push(T);
      }, A.prototype.onEnd = function(T) {
        T === m && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = T, this.msg = this.strm.msg;
      };
      function k(T, R) {
        var z = new A(R);
        if (z.push(T, !0), z.err)
          throw z.msg || u[z.err];
        return z.result;
      }
      function b(T, R) {
        return R = R || {}, R.raw = !0, k(T, R);
      }
      function C(T, R) {
        return R = R || {}, R.gzip = !0, k(T, R);
      }
      i.Deflate = A, i.deflate = k, i.deflateRaw = b, i.gzip = C;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, r, i) {
      var s = t("./zlib/inflate"), a = t("./utils/common"), o = t("./utils/strings"), u = t("./zlib/constants"), h = t("./zlib/messages"), f = t("./zlib/zstream"), c = t("./zlib/gzheader"), w = Object.prototype.toString;
      function m(p) {
        if (!(this instanceof m))
          return new m(p);
        this.options = a.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ""
        }, p || {});
        var v = this.options;
        v.raw && v.windowBits >= 0 && v.windowBits < 16 && (v.windowBits = -v.windowBits, v.windowBits === 0 && (v.windowBits = -15)), v.windowBits >= 0 && v.windowBits < 16 && !(p && p.windowBits) && (v.windowBits += 32), v.windowBits > 15 && v.windowBits < 48 && (v.windowBits & 15 || (v.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
        var y = s.inflateInit2(
          this.strm,
          v.windowBits
        );
        if (y !== u.Z_OK)
          throw new Error(h[y]);
        this.header = new c(), s.inflateGetHeader(this.strm, this.header);
      }
      m.prototype.push = function(p, v) {
        var y = this.strm, A = this.options.chunkSize, k = this.options.dictionary, b, C, T, R, z, M, Y = !1;
        if (this.ended)
          return !1;
        C = v === ~~v ? v : v === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof p == "string" ? y.input = o.binstring2buf(p) : w.call(p) === "[object ArrayBuffer]" ? y.input = new Uint8Array(p) : y.input = p, y.next_in = 0, y.avail_in = y.input.length;
        do {
          if (y.avail_out === 0 && (y.output = new a.Buf8(A), y.next_out = 0, y.avail_out = A), b = s.inflate(y, u.Z_NO_FLUSH), b === u.Z_NEED_DICT && k && (typeof k == "string" ? M = o.string2buf(k) : w.call(k) === "[object ArrayBuffer]" ? M = new Uint8Array(k) : M = k, b = s.inflateSetDictionary(this.strm, M)), b === u.Z_BUF_ERROR && Y === !0 && (b = u.Z_OK, Y = !1), b !== u.Z_STREAM_END && b !== u.Z_OK)
            return this.onEnd(b), this.ended = !0, !1;
          y.next_out && (y.avail_out === 0 || b === u.Z_STREAM_END || y.avail_in === 0 && (C === u.Z_FINISH || C === u.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (T = o.utf8border(y.output, y.next_out), R = y.next_out - T, z = o.buf2string(y.output, T), y.next_out = R, y.avail_out = A - R, R && a.arraySet(y.output, y.output, T, R, 0), this.onData(z)) : this.onData(a.shrinkBuf(y.output, y.next_out))), y.avail_in === 0 && y.avail_out === 0 && (Y = !0);
        } while ((y.avail_in > 0 || y.avail_out === 0) && b !== u.Z_STREAM_END);
        return b === u.Z_STREAM_END && (C = u.Z_FINISH), C === u.Z_FINISH ? (b = s.inflateEnd(this.strm), this.onEnd(b), this.ended = !0, b === u.Z_OK) : (C === u.Z_SYNC_FLUSH && (this.onEnd(u.Z_OK), y.avail_out = 0), !0);
      }, m.prototype.onData = function(p) {
        this.chunks.push(p);
      }, m.prototype.onEnd = function(p) {
        p === u.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      };
      function S(p, v) {
        var y = new m(v);
        if (y.push(p, !0), y.err)
          throw y.msg || h[y.err];
        return y.result;
      }
      function N(p, v) {
        return v = v || {}, v.raw = !0, S(p, v);
      }
      i.Inflate = m, i.inflate = S, i.inflateRaw = N, i.ungzip = S;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, r, i) {
      var s = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      i.assign = function(u) {
        for (var h = Array.prototype.slice.call(arguments, 1); h.length; ) {
          var f = h.shift();
          if (f) {
            if (typeof f != "object")
              throw new TypeError(f + "must be non-object");
            for (var c in f)
              f.hasOwnProperty(c) && (u[c] = f[c]);
          }
        }
        return u;
      }, i.shrinkBuf = function(u, h) {
        return u.length === h ? u : u.subarray ? u.subarray(0, h) : (u.length = h, u);
      };
      var a = {
        arraySet: function(u, h, f, c, w) {
          if (h.subarray && u.subarray) {
            u.set(h.subarray(f, f + c), w);
            return;
          }
          for (var m = 0; m < c; m++)
            u[w + m] = h[f + m];
        },
        // Join array of chunks to single array.
        flattenChunks: function(u) {
          var h, f, c, w, m, S;
          for (c = 0, h = 0, f = u.length; h < f; h++)
            c += u[h].length;
          for (S = new Uint8Array(c), w = 0, h = 0, f = u.length; h < f; h++)
            m = u[h], S.set(m, w), w += m.length;
          return S;
        }
      }, o = {
        arraySet: function(u, h, f, c, w) {
          for (var m = 0; m < c; m++)
            u[w + m] = h[f + m];
        },
        // Join array of chunks to single array.
        flattenChunks: function(u) {
          return [].concat.apply([], u);
        }
      };
      i.setTyped = function(u) {
        u ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, a)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, o));
      }, i.setTyped(s);
    }, {}], 42: [function(t, r, i) {
      var s = t("./common"), a = !0, o = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        o = !1;
      }
      for (var u = new s.Buf8(256), h = 0; h < 256; h++)
        u[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
      u[254] = u[254] = 1, i.string2buf = function(c) {
        var w, m, S, N, p, v = c.length, y = 0;
        for (N = 0; N < v; N++)
          m = c.charCodeAt(N), (m & 64512) === 55296 && N + 1 < v && (S = c.charCodeAt(N + 1), (S & 64512) === 56320 && (m = 65536 + (m - 55296 << 10) + (S - 56320), N++)), y += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
        for (w = new s.Buf8(y), p = 0, N = 0; p < y; N++)
          m = c.charCodeAt(N), (m & 64512) === 55296 && N + 1 < v && (S = c.charCodeAt(N + 1), (S & 64512) === 56320 && (m = 65536 + (m - 55296 << 10) + (S - 56320), N++)), m < 128 ? w[p++] = m : m < 2048 ? (w[p++] = 192 | m >>> 6, w[p++] = 128 | m & 63) : m < 65536 ? (w[p++] = 224 | m >>> 12, w[p++] = 128 | m >>> 6 & 63, w[p++] = 128 | m & 63) : (w[p++] = 240 | m >>> 18, w[p++] = 128 | m >>> 12 & 63, w[p++] = 128 | m >>> 6 & 63, w[p++] = 128 | m & 63);
        return w;
      };
      function f(c, w) {
        if (w < 65537 && (c.subarray && o || !c.subarray && a))
          return String.fromCharCode.apply(null, s.shrinkBuf(c, w));
        for (var m = "", S = 0; S < w; S++)
          m += String.fromCharCode(c[S]);
        return m;
      }
      i.buf2binstring = function(c) {
        return f(c, c.length);
      }, i.binstring2buf = function(c) {
        for (var w = new s.Buf8(c.length), m = 0, S = w.length; m < S; m++)
          w[m] = c.charCodeAt(m);
        return w;
      }, i.buf2string = function(c, w) {
        var m, S, N, p, v = w || c.length, y = new Array(v * 2);
        for (S = 0, m = 0; m < v; ) {
          if (N = c[m++], N < 128) {
            y[S++] = N;
            continue;
          }
          if (p = u[N], p > 4) {
            y[S++] = 65533, m += p - 1;
            continue;
          }
          for (N &= p === 2 ? 31 : p === 3 ? 15 : 7; p > 1 && m < v; )
            N = N << 6 | c[m++] & 63, p--;
          if (p > 1) {
            y[S++] = 65533;
            continue;
          }
          N < 65536 ? y[S++] = N : (N -= 65536, y[S++] = 55296 | N >> 10 & 1023, y[S++] = 56320 | N & 1023);
        }
        return f(y, S);
      }, i.utf8border = function(c, w) {
        var m;
        for (w = w || c.length, w > c.length && (w = c.length), m = w - 1; m >= 0 && (c[m] & 192) === 128; )
          m--;
        return m < 0 || m === 0 ? w : m + u[c[m]] > w ? m : w;
      };
    }, { "./common": 41 }], 43: [function(t, r, i) {
      function s(a, o, u, h) {
        for (var f = a & 65535 | 0, c = a >>> 16 & 65535 | 0, w = 0; u !== 0; ) {
          w = u > 2e3 ? 2e3 : u, u -= w;
          do
            f = f + o[h++] | 0, c = c + f | 0;
          while (--w);
          f %= 65521, c %= 65521;
        }
        return f | c << 16 | 0;
      }
      r.exports = s;
    }, {}], 44: [function(t, r, i) {
      r.exports = {
        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        /* Return codes for the compression/decompression functions. Negative values
        * are errors, positive values are used for special but normal events.
        */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        //Z_MEM_ERROR:     -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,
        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,
        /* The deflate compression method */
        Z_DEFLATED: 8
        //Z_NULL:                 null // Use -1 or null inline, depending on var type
      };
    }, {}], 45: [function(t, r, i) {
      function s() {
        for (var u, h = [], f = 0; f < 256; f++) {
          u = f;
          for (var c = 0; c < 8; c++)
            u = u & 1 ? 3988292384 ^ u >>> 1 : u >>> 1;
          h[f] = u;
        }
        return h;
      }
      var a = s();
      function o(u, h, f, c) {
        var w = a, m = c + f;
        u ^= -1;
        for (var S = c; S < m; S++)
          u = u >>> 8 ^ w[(u ^ h[S]) & 255];
        return u ^ -1;
      }
      r.exports = o;
    }, {}], 46: [function(t, r, i) {
      var s = t("../utils/common"), a = t("./trees"), o = t("./adler32"), u = t("./crc32"), h = t("./messages"), f = 0, c = 1, w = 3, m = 4, S = 5, N = 0, p = 1, v = -2, y = -3, A = -5, k = -1, b = 1, C = 2, T = 3, R = 4, z = 0, M = 2, Y = 8, Z = 9, te = 15, ge = 8, pe = 29, ve = 256, de = ve + 1 + pe, fe = 30, Se = 19, je = 2 * de + 1, Oe = 15, be = 3, Le = 258, Ne = Le + be + 1, it = 32, Ge = 42, Ue = 69, De = 73, Xe = 91, Me = 103, Pe = 113, qe = 666, Ie = 1, nt = 2, We = 3, tt = 4, Re = 3;
      function Qe(l, V) {
        return l.msg = h[V], V;
      }
      function at(l) {
        return (l << 1) - (l > 4 ? 9 : 0);
      }
      function ht(l) {
        for (var V = l.length; --V >= 0; )
          l[V] = 0;
      }
      function ot(l) {
        var V = l.state, H = V.pending;
        H > l.avail_out && (H = l.avail_out), H !== 0 && (s.arraySet(l.output, V.pending_buf, V.pending_out, H, l.next_out), l.next_out += H, V.pending_out += H, l.total_out += H, l.avail_out -= H, V.pending -= H, V.pending === 0 && (V.pending_out = 0));
      }
      function ze(l, V) {
        a._tr_flush_block(l, l.block_start >= 0 ? l.block_start : -1, l.strstart - l.block_start, V), l.block_start = l.strstart, ot(l.strm);
      }
      function Ae(l, V) {
        l.pending_buf[l.pending++] = V;
      }
      function dt(l, V) {
        l.pending_buf[l.pending++] = V >>> 8 & 255, l.pending_buf[l.pending++] = V & 255;
      }
      function _t(l, V, H, _) {
        var O = l.avail_in;
        return O > _ && (O = _), O === 0 ? 0 : (l.avail_in -= O, s.arraySet(V, l.input, l.next_in, O, H), l.state.wrap === 1 ? l.adler = o(l.adler, V, O, H) : l.state.wrap === 2 && (l.adler = u(l.adler, V, O, H)), l.next_in += O, l.total_in += O, O);
      }
      function gt(l, V) {
        var H = l.max_chain_length, _ = l.strstart, O, q, me = l.prev_length, oe = l.nice_match, he = l.strstart > l.w_size - Ne ? l.strstart - (l.w_size - Ne) : 0, Te = l.window, xt = l.w_mask, Ye = l.prev, d = l.strstart + Le, I = Te[_ + me - 1], U = Te[_ + me];
        l.prev_length >= l.good_match && (H >>= 2), oe > l.lookahead && (oe = l.lookahead);
        do
          if (O = V, !(Te[O + me] !== U || Te[O + me - 1] !== I || Te[O] !== Te[_] || Te[++O] !== Te[_ + 1])) {
            _ += 2, O++;
            do
              ;
            while (Te[++_] === Te[++O] && Te[++_] === Te[++O] && Te[++_] === Te[++O] && Te[++_] === Te[++O] && Te[++_] === Te[++O] && Te[++_] === Te[++O] && Te[++_] === Te[++O] && Te[++_] === Te[++O] && _ < d);
            if (q = Le - (d - _), _ = d - Le, q > me) {
              if (l.match_start = V, me = q, q >= oe)
                break;
              I = Te[_ + me - 1], U = Te[_ + me];
            }
          }
        while ((V = Ye[V & xt]) > he && --H !== 0);
        return me <= l.lookahead ? me : l.lookahead;
      }
      function Ke(l) {
        var V = l.w_size, H, _, O, q, me;
        do {
          if (q = l.window_size - l.lookahead - l.strstart, l.strstart >= V + (V - Ne)) {
            s.arraySet(l.window, l.window, V, V, 0), l.match_start -= V, l.strstart -= V, l.block_start -= V, _ = l.hash_size, H = _;
            do
              O = l.head[--H], l.head[H] = O >= V ? O - V : 0;
            while (--_);
            _ = V, H = _;
            do
              O = l.prev[--H], l.prev[H] = O >= V ? O - V : 0;
            while (--_);
            q += V;
          }
          if (l.strm.avail_in === 0)
            break;
          if (_ = _t(l.strm, l.window, l.strstart + l.lookahead, q), l.lookahead += _, l.lookahead + l.insert >= be)
            for (me = l.strstart - l.insert, l.ins_h = l.window[me], l.ins_h = (l.ins_h << l.hash_shift ^ l.window[me + 1]) & l.hash_mask; l.insert && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[me + be - 1]) & l.hash_mask, l.prev[me & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = me, me++, l.insert--, !(l.lookahead + l.insert < be)); )
              ;
        } while (l.lookahead < Ne && l.strm.avail_in !== 0);
      }
      function Tt(l, V) {
        var H = 65535;
        for (H > l.pending_buf_size - 5 && (H = l.pending_buf_size - 5); ; ) {
          if (l.lookahead <= 1) {
            if (Ke(l), l.lookahead === 0 && V === f)
              return Ie;
            if (l.lookahead === 0)
              break;
          }
          l.strstart += l.lookahead, l.lookahead = 0;
          var _ = l.block_start + H;
          if ((l.strstart === 0 || l.strstart >= _) && (l.lookahead = l.strstart - _, l.strstart = _, ze(l, !1), l.strm.avail_out === 0) || l.strstart - l.block_start >= l.w_size - Ne && (ze(l, !1), l.strm.avail_out === 0))
            return Ie;
        }
        return l.insert = 0, V === m ? (ze(l, !0), l.strm.avail_out === 0 ? We : tt) : (l.strstart > l.block_start && (ze(l, !1), l.strm.avail_out === 0), Ie);
      }
      function mt(l, V) {
        for (var H, _; ; ) {
          if (l.lookahead < Ne) {
            if (Ke(l), l.lookahead < Ne && V === f)
              return Ie;
            if (l.lookahead === 0)
              break;
          }
          if (H = 0, l.lookahead >= be && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + be - 1]) & l.hash_mask, H = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart), H !== 0 && l.strstart - H <= l.w_size - Ne && (l.match_length = gt(l, H)), l.match_length >= be)
            if (_ = a._tr_tally(l, l.strstart - l.match_start, l.match_length - be), l.lookahead -= l.match_length, l.match_length <= l.max_lazy_match && l.lookahead >= be) {
              l.match_length--;
              do
                l.strstart++, l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + be - 1]) & l.hash_mask, H = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart;
              while (--l.match_length !== 0);
              l.strstart++;
            } else
              l.strstart += l.match_length, l.match_length = 0, l.ins_h = l.window[l.strstart], l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + 1]) & l.hash_mask;
          else
            _ = a._tr_tally(l, 0, l.window[l.strstart]), l.lookahead--, l.strstart++;
          if (_ && (ze(l, !1), l.strm.avail_out === 0))
            return Ie;
        }
        return l.insert = l.strstart < be - 1 ? l.strstart : be - 1, V === m ? (ze(l, !0), l.strm.avail_out === 0 ? We : tt) : l.last_lit && (ze(l, !1), l.strm.avail_out === 0) ? Ie : nt;
      }
      function ft(l, V) {
        for (var H, _, O; ; ) {
          if (l.lookahead < Ne) {
            if (Ke(l), l.lookahead < Ne && V === f)
              return Ie;
            if (l.lookahead === 0)
              break;
          }
          if (H = 0, l.lookahead >= be && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + be - 1]) & l.hash_mask, H = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart), l.prev_length = l.match_length, l.prev_match = l.match_start, l.match_length = be - 1, H !== 0 && l.prev_length < l.max_lazy_match && l.strstart - H <= l.w_size - Ne && (l.match_length = gt(l, H), l.match_length <= 5 && (l.strategy === b || l.match_length === be && l.strstart - l.match_start > 4096) && (l.match_length = be - 1)), l.prev_length >= be && l.match_length <= l.prev_length) {
            O = l.strstart + l.lookahead - be, _ = a._tr_tally(l, l.strstart - 1 - l.prev_match, l.prev_length - be), l.lookahead -= l.prev_length - 1, l.prev_length -= 2;
            do
              ++l.strstart <= O && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + be - 1]) & l.hash_mask, H = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart);
            while (--l.prev_length !== 0);
            if (l.match_available = 0, l.match_length = be - 1, l.strstart++, _ && (ze(l, !1), l.strm.avail_out === 0))
              return Ie;
          } else if (l.match_available) {
            if (_ = a._tr_tally(l, 0, l.window[l.strstart - 1]), _ && ze(l, !1), l.strstart++, l.lookahead--, l.strm.avail_out === 0)
              return Ie;
          } else
            l.match_available = 1, l.strstart++, l.lookahead--;
        }
        return l.match_available && (_ = a._tr_tally(l, 0, l.window[l.strstart - 1]), l.match_available = 0), l.insert = l.strstart < be - 1 ? l.strstart : be - 1, V === m ? (ze(l, !0), l.strm.avail_out === 0 ? We : tt) : l.last_lit && (ze(l, !1), l.strm.avail_out === 0) ? Ie : nt;
      }
      function yt(l, V) {
        for (var H, _, O, q, me = l.window; ; ) {
          if (l.lookahead <= Le) {
            if (Ke(l), l.lookahead <= Le && V === f)
              return Ie;
            if (l.lookahead === 0)
              break;
          }
          if (l.match_length = 0, l.lookahead >= be && l.strstart > 0 && (O = l.strstart - 1, _ = me[O], _ === me[++O] && _ === me[++O] && _ === me[++O])) {
            q = l.strstart + Le;
            do
              ;
            while (_ === me[++O] && _ === me[++O] && _ === me[++O] && _ === me[++O] && _ === me[++O] && _ === me[++O] && _ === me[++O] && _ === me[++O] && O < q);
            l.match_length = Le - (q - O), l.match_length > l.lookahead && (l.match_length = l.lookahead);
          }
          if (l.match_length >= be ? (H = a._tr_tally(l, 1, l.match_length - be), l.lookahead -= l.match_length, l.strstart += l.match_length, l.match_length = 0) : (H = a._tr_tally(l, 0, l.window[l.strstart]), l.lookahead--, l.strstart++), H && (ze(l, !1), l.strm.avail_out === 0))
            return Ie;
        }
        return l.insert = 0, V === m ? (ze(l, !0), l.strm.avail_out === 0 ? We : tt) : l.last_lit && (ze(l, !1), l.strm.avail_out === 0) ? Ie : nt;
      }
      function Et(l, V) {
        for (var H; ; ) {
          if (l.lookahead === 0 && (Ke(l), l.lookahead === 0)) {
            if (V === f)
              return Ie;
            break;
          }
          if (l.match_length = 0, H = a._tr_tally(l, 0, l.window[l.strstart]), l.lookahead--, l.strstart++, H && (ze(l, !1), l.strm.avail_out === 0))
            return Ie;
        }
        return l.insert = 0, V === m ? (ze(l, !0), l.strm.avail_out === 0 ? We : tt) : l.last_lit && (ze(l, !1), l.strm.avail_out === 0) ? Ie : nt;
      }
      function rt(l, V, H, _, O) {
        this.good_length = l, this.max_lazy = V, this.nice_length = H, this.max_chain = _, this.func = O;
      }
      var pt;
      pt = [
        /*      good lazy nice chain */
        new rt(0, 0, 0, 0, Tt),
        /* 0 store only */
        new rt(4, 4, 8, 4, mt),
        /* 1 max speed, no lazy matches */
        new rt(4, 5, 16, 8, mt),
        /* 2 */
        new rt(4, 6, 32, 32, mt),
        /* 3 */
        new rt(4, 4, 16, 16, ft),
        /* 4 lazy matches */
        new rt(8, 16, 32, 32, ft),
        /* 5 */
        new rt(8, 16, 128, 128, ft),
        /* 6 */
        new rt(8, 32, 128, 256, ft),
        /* 7 */
        new rt(32, 128, 258, 1024, ft),
        /* 8 */
        new rt(32, 258, 258, 4096, ft)
        /* 9 max compression */
      ];
      function Nt(l) {
        l.window_size = 2 * l.w_size, ht(l.head), l.max_lazy_match = pt[l.level].max_lazy, l.good_match = pt[l.level].good_length, l.nice_match = pt[l.level].nice_length, l.max_chain_length = pt[l.level].max_chain, l.strstart = 0, l.block_start = 0, l.lookahead = 0, l.insert = 0, l.match_length = l.prev_length = be - 1, l.match_available = 0, l.ins_h = 0;
      }
      function x() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(je * 2), this.dyn_dtree = new s.Buf16((2 * fe + 1) * 2), this.bl_tree = new s.Buf16((2 * Se + 1) * 2), ht(this.dyn_ltree), ht(this.dyn_dtree), ht(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(Oe + 1), this.heap = new s.Buf16(2 * de + 1), ht(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * de + 1), ht(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function J(l) {
        var V;
        return !l || !l.state ? Qe(l, v) : (l.total_in = l.total_out = 0, l.data_type = M, V = l.state, V.pending = 0, V.pending_out = 0, V.wrap < 0 && (V.wrap = -V.wrap), V.status = V.wrap ? Ge : Pe, l.adler = V.wrap === 2 ? 0 : 1, V.last_flush = f, a._tr_init(V), N);
      }
      function ee(l) {
        var V = J(l);
        return V === N && Nt(l.state), V;
      }
      function ue(l, V) {
        return !l || !l.state || l.state.wrap !== 2 ? v : (l.state.gzhead = V, N);
      }
      function B(l, V, H, _, O, q) {
        if (!l)
          return v;
        var me = 1;
        if (V === k && (V = 6), _ < 0 ? (me = 0, _ = -_) : _ > 15 && (me = 2, _ -= 16), O < 1 || O > Z || H !== Y || _ < 8 || _ > 15 || V < 0 || V > 9 || q < 0 || q > R)
          return Qe(l, v);
        _ === 8 && (_ = 9);
        var oe = new x();
        return l.state = oe, oe.strm = l, oe.wrap = me, oe.gzhead = null, oe.w_bits = _, oe.w_size = 1 << oe.w_bits, oe.w_mask = oe.w_size - 1, oe.hash_bits = O + 7, oe.hash_size = 1 << oe.hash_bits, oe.hash_mask = oe.hash_size - 1, oe.hash_shift = ~~((oe.hash_bits + be - 1) / be), oe.window = new s.Buf8(oe.w_size * 2), oe.head = new s.Buf16(oe.hash_size), oe.prev = new s.Buf16(oe.w_size), oe.lit_bufsize = 1 << O + 6, oe.pending_buf_size = oe.lit_bufsize * 4, oe.pending_buf = new s.Buf8(oe.pending_buf_size), oe.d_buf = 1 * oe.lit_bufsize, oe.l_buf = (1 + 2) * oe.lit_bufsize, oe.level = V, oe.strategy = q, oe.method = H, ee(l);
      }
      function $(l, V) {
        return B(l, V, Y, te, ge, z);
      }
      function g(l, V) {
        var H, _, O, q;
        if (!l || !l.state || V > S || V < 0)
          return l ? Qe(l, v) : v;
        if (_ = l.state, !l.output || !l.input && l.avail_in !== 0 || _.status === qe && V !== m)
          return Qe(l, l.avail_out === 0 ? A : v);
        if (_.strm = l, H = _.last_flush, _.last_flush = V, _.status === Ge)
          if (_.wrap === 2)
            l.adler = 0, Ae(_, 31), Ae(_, 139), Ae(_, 8), _.gzhead ? (Ae(
              _,
              (_.gzhead.text ? 1 : 0) + (_.gzhead.hcrc ? 2 : 0) + (_.gzhead.extra ? 4 : 0) + (_.gzhead.name ? 8 : 0) + (_.gzhead.comment ? 16 : 0)
            ), Ae(_, _.gzhead.time & 255), Ae(_, _.gzhead.time >> 8 & 255), Ae(_, _.gzhead.time >> 16 & 255), Ae(_, _.gzhead.time >> 24 & 255), Ae(_, _.level === 9 ? 2 : _.strategy >= C || _.level < 2 ? 4 : 0), Ae(_, _.gzhead.os & 255), _.gzhead.extra && _.gzhead.extra.length && (Ae(_, _.gzhead.extra.length & 255), Ae(_, _.gzhead.extra.length >> 8 & 255)), _.gzhead.hcrc && (l.adler = u(l.adler, _.pending_buf, _.pending, 0)), _.gzindex = 0, _.status = Ue) : (Ae(_, 0), Ae(_, 0), Ae(_, 0), Ae(_, 0), Ae(_, 0), Ae(_, _.level === 9 ? 2 : _.strategy >= C || _.level < 2 ? 4 : 0), Ae(_, Re), _.status = Pe);
          else {
            var me = Y + (_.w_bits - 8 << 4) << 8, oe = -1;
            _.strategy >= C || _.level < 2 ? oe = 0 : _.level < 6 ? oe = 1 : _.level === 6 ? oe = 2 : oe = 3, me |= oe << 6, _.strstart !== 0 && (me |= it), me += 31 - me % 31, _.status = Pe, dt(_, me), _.strstart !== 0 && (dt(_, l.adler >>> 16), dt(_, l.adler & 65535)), l.adler = 1;
          }
        if (_.status === Ue)
          if (_.gzhead.extra) {
            for (O = _.pending; _.gzindex < (_.gzhead.extra.length & 65535) && !(_.pending === _.pending_buf_size && (_.gzhead.hcrc && _.pending > O && (l.adler = u(l.adler, _.pending_buf, _.pending - O, O)), ot(l), O = _.pending, _.pending === _.pending_buf_size)); )
              Ae(_, _.gzhead.extra[_.gzindex] & 255), _.gzindex++;
            _.gzhead.hcrc && _.pending > O && (l.adler = u(l.adler, _.pending_buf, _.pending - O, O)), _.gzindex === _.gzhead.extra.length && (_.gzindex = 0, _.status = De);
          } else
            _.status = De;
        if (_.status === De)
          if (_.gzhead.name) {
            O = _.pending;
            do {
              if (_.pending === _.pending_buf_size && (_.gzhead.hcrc && _.pending > O && (l.adler = u(l.adler, _.pending_buf, _.pending - O, O)), ot(l), O = _.pending, _.pending === _.pending_buf_size)) {
                q = 1;
                break;
              }
              _.gzindex < _.gzhead.name.length ? q = _.gzhead.name.charCodeAt(_.gzindex++) & 255 : q = 0, Ae(_, q);
            } while (q !== 0);
            _.gzhead.hcrc && _.pending > O && (l.adler = u(l.adler, _.pending_buf, _.pending - O, O)), q === 0 && (_.gzindex = 0, _.status = Xe);
          } else
            _.status = Xe;
        if (_.status === Xe)
          if (_.gzhead.comment) {
            O = _.pending;
            do {
              if (_.pending === _.pending_buf_size && (_.gzhead.hcrc && _.pending > O && (l.adler = u(l.adler, _.pending_buf, _.pending - O, O)), ot(l), O = _.pending, _.pending === _.pending_buf_size)) {
                q = 1;
                break;
              }
              _.gzindex < _.gzhead.comment.length ? q = _.gzhead.comment.charCodeAt(_.gzindex++) & 255 : q = 0, Ae(_, q);
            } while (q !== 0);
            _.gzhead.hcrc && _.pending > O && (l.adler = u(l.adler, _.pending_buf, _.pending - O, O)), q === 0 && (_.status = Me);
          } else
            _.status = Me;
        if (_.status === Me && (_.gzhead.hcrc ? (_.pending + 2 > _.pending_buf_size && ot(l), _.pending + 2 <= _.pending_buf_size && (Ae(_, l.adler & 255), Ae(_, l.adler >> 8 & 255), l.adler = 0, _.status = Pe)) : _.status = Pe), _.pending !== 0) {
          if (ot(l), l.avail_out === 0)
            return _.last_flush = -1, N;
        } else if (l.avail_in === 0 && at(V) <= at(H) && V !== m)
          return Qe(l, A);
        if (_.status === qe && l.avail_in !== 0)
          return Qe(l, A);
        if (l.avail_in !== 0 || _.lookahead !== 0 || V !== f && _.status !== qe) {
          var he = _.strategy === C ? Et(_, V) : _.strategy === T ? yt(_, V) : pt[_.level].func(_, V);
          if ((he === We || he === tt) && (_.status = qe), he === Ie || he === We)
            return l.avail_out === 0 && (_.last_flush = -1), N;
          if (he === nt && (V === c ? a._tr_align(_) : V !== S && (a._tr_stored_block(_, 0, 0, !1), V === w && (ht(_.head), _.lookahead === 0 && (_.strstart = 0, _.block_start = 0, _.insert = 0))), ot(l), l.avail_out === 0))
            return _.last_flush = -1, N;
        }
        return V !== m ? N : _.wrap <= 0 ? p : (_.wrap === 2 ? (Ae(_, l.adler & 255), Ae(_, l.adler >> 8 & 255), Ae(_, l.adler >> 16 & 255), Ae(_, l.adler >> 24 & 255), Ae(_, l.total_in & 255), Ae(_, l.total_in >> 8 & 255), Ae(_, l.total_in >> 16 & 255), Ae(_, l.total_in >> 24 & 255)) : (dt(_, l.adler >>> 16), dt(_, l.adler & 65535)), ot(l), _.wrap > 0 && (_.wrap = -_.wrap), _.pending !== 0 ? N : p);
      }
      function X(l) {
        var V;
        return !l || !l.state ? v : (V = l.state.status, V !== Ge && V !== Ue && V !== De && V !== Xe && V !== Me && V !== Pe && V !== qe ? Qe(l, v) : (l.state = null, V === Pe ? Qe(l, y) : N));
      }
      function _e(l, V) {
        var H = V.length, _, O, q, me, oe, he, Te, xt;
        if (!l || !l.state || (_ = l.state, me = _.wrap, me === 2 || me === 1 && _.status !== Ge || _.lookahead))
          return v;
        for (me === 1 && (l.adler = o(l.adler, V, H, 0)), _.wrap = 0, H >= _.w_size && (me === 0 && (ht(_.head), _.strstart = 0, _.block_start = 0, _.insert = 0), xt = new s.Buf8(_.w_size), s.arraySet(xt, V, H - _.w_size, _.w_size, 0), V = xt, H = _.w_size), oe = l.avail_in, he = l.next_in, Te = l.input, l.avail_in = H, l.next_in = 0, l.input = V, Ke(_); _.lookahead >= be; ) {
          O = _.strstart, q = _.lookahead - (be - 1);
          do
            _.ins_h = (_.ins_h << _.hash_shift ^ _.window[O + be - 1]) & _.hash_mask, _.prev[O & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = O, O++;
          while (--q);
          _.strstart = O, _.lookahead = be - 1, Ke(_);
        }
        return _.strstart += _.lookahead, _.block_start = _.strstart, _.insert = _.lookahead, _.lookahead = 0, _.match_length = _.prev_length = be - 1, _.match_available = 0, l.next_in = he, l.input = Te, l.avail_in = oe, _.wrap = me, N;
      }
      i.deflateInit = $, i.deflateInit2 = B, i.deflateReset = ee, i.deflateResetKeep = J, i.deflateSetHeader = ue, i.deflate = g, i.deflateEnd = X, i.deflateSetDictionary = _e, i.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, r, i) {
      function s() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      }
      r.exports = s;
    }, {}], 48: [function(t, r, i) {
      var s = 30, a = 12;
      r.exports = function(u, h) {
        var f, c, w, m, S, N, p, v, y, A, k, b, C, T, R, z, M, Y, Z, te, ge, pe, ve, de, fe;
        f = u.state, c = u.next_in, de = u.input, w = c + (u.avail_in - 5), m = u.next_out, fe = u.output, S = m - (h - u.avail_out), N = m + (u.avail_out - 257), p = f.dmax, v = f.wsize, y = f.whave, A = f.wnext, k = f.window, b = f.hold, C = f.bits, T = f.lencode, R = f.distcode, z = (1 << f.lenbits) - 1, M = (1 << f.distbits) - 1;
        e:
          do {
            C < 15 && (b += de[c++] << C, C += 8, b += de[c++] << C, C += 8), Y = T[b & z];
            t:
              for (; ; ) {
                if (Z = Y >>> 24, b >>>= Z, C -= Z, Z = Y >>> 16 & 255, Z === 0)
                  fe[m++] = Y & 65535;
                else if (Z & 16) {
                  te = Y & 65535, Z &= 15, Z && (C < Z && (b += de[c++] << C, C += 8), te += b & (1 << Z) - 1, b >>>= Z, C -= Z), C < 15 && (b += de[c++] << C, C += 8, b += de[c++] << C, C += 8), Y = R[b & M];
                  r:
                    for (; ; ) {
                      if (Z = Y >>> 24, b >>>= Z, C -= Z, Z = Y >>> 16 & 255, Z & 16) {
                        if (ge = Y & 65535, Z &= 15, C < Z && (b += de[c++] << C, C += 8, C < Z && (b += de[c++] << C, C += 8)), ge += b & (1 << Z) - 1, ge > p) {
                          u.msg = "invalid distance too far back", f.mode = s;
                          break e;
                        }
                        if (b >>>= Z, C -= Z, Z = m - S, ge > Z) {
                          if (Z = ge - Z, Z > y && f.sane) {
                            u.msg = "invalid distance too far back", f.mode = s;
                            break e;
                          }
                          if (pe = 0, ve = k, A === 0) {
                            if (pe += v - Z, Z < te) {
                              te -= Z;
                              do
                                fe[m++] = k[pe++];
                              while (--Z);
                              pe = m - ge, ve = fe;
                            }
                          } else if (A < Z) {
                            if (pe += v + A - Z, Z -= A, Z < te) {
                              te -= Z;
                              do
                                fe[m++] = k[pe++];
                              while (--Z);
                              if (pe = 0, A < te) {
                                Z = A, te -= Z;
                                do
                                  fe[m++] = k[pe++];
                                while (--Z);
                                pe = m - ge, ve = fe;
                              }
                            }
                          } else if (pe += A - Z, Z < te) {
                            te -= Z;
                            do
                              fe[m++] = k[pe++];
                            while (--Z);
                            pe = m - ge, ve = fe;
                          }
                          for (; te > 2; )
                            fe[m++] = ve[pe++], fe[m++] = ve[pe++], fe[m++] = ve[pe++], te -= 3;
                          te && (fe[m++] = ve[pe++], te > 1 && (fe[m++] = ve[pe++]));
                        } else {
                          pe = m - ge;
                          do
                            fe[m++] = fe[pe++], fe[m++] = fe[pe++], fe[m++] = fe[pe++], te -= 3;
                          while (te > 2);
                          te && (fe[m++] = fe[pe++], te > 1 && (fe[m++] = fe[pe++]));
                        }
                      } else if (Z & 64) {
                        u.msg = "invalid distance code", f.mode = s;
                        break e;
                      } else {
                        Y = R[(Y & 65535) + (b & (1 << Z) - 1)];
                        continue r;
                      }
                      break;
                    }
                } else if (Z & 64)
                  if (Z & 32) {
                    f.mode = a;
                    break e;
                  } else {
                    u.msg = "invalid literal/length code", f.mode = s;
                    break e;
                  }
                else {
                  Y = T[(Y & 65535) + (b & (1 << Z) - 1)];
                  continue t;
                }
                break;
              }
          } while (c < w && m < N);
        te = C >> 3, c -= te, C -= te << 3, b &= (1 << C) - 1, u.next_in = c, u.next_out = m, u.avail_in = c < w ? 5 + (w - c) : 5 - (c - w), u.avail_out = m < N ? 257 + (N - m) : 257 - (m - N), f.hold = b, f.bits = C;
      };
    }, {}], 49: [function(t, r, i) {
      var s = t("../utils/common"), a = t("./adler32"), o = t("./crc32"), u = t("./inffast"), h = t("./inftrees"), f = 0, c = 1, w = 2, m = 4, S = 5, N = 6, p = 0, v = 1, y = 2, A = -2, k = -3, b = -4, C = -5, T = 8, R = 1, z = 2, M = 3, Y = 4, Z = 5, te = 6, ge = 7, pe = 8, ve = 9, de = 10, fe = 11, Se = 12, je = 13, Oe = 14, be = 15, Le = 16, Ne = 17, it = 18, Ge = 19, Ue = 20, De = 21, Xe = 22, Me = 23, Pe = 24, qe = 25, Ie = 26, nt = 27, We = 28, tt = 29, Re = 30, Qe = 31, at = 32, ht = 852, ot = 592, ze = 15, Ae = ze;
      function dt(B) {
        return (B >>> 24 & 255) + (B >>> 8 & 65280) + ((B & 65280) << 8) + ((B & 255) << 24);
      }
      function _t() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function gt(B) {
        var $;
        return !B || !B.state ? A : ($ = B.state, B.total_in = B.total_out = $.total = 0, B.msg = "", $.wrap && (B.adler = $.wrap & 1), $.mode = R, $.last = 0, $.havedict = 0, $.dmax = 32768, $.head = null, $.hold = 0, $.bits = 0, $.lencode = $.lendyn = new s.Buf32(ht), $.distcode = $.distdyn = new s.Buf32(ot), $.sane = 1, $.back = -1, p);
      }
      function Ke(B) {
        var $;
        return !B || !B.state ? A : ($ = B.state, $.wsize = 0, $.whave = 0, $.wnext = 0, gt(B));
      }
      function Tt(B, $) {
        var g, X;
        return !B || !B.state || (X = B.state, $ < 0 ? (g = 0, $ = -$) : (g = ($ >> 4) + 1, $ < 48 && ($ &= 15)), $ && ($ < 8 || $ > 15)) ? A : (X.window !== null && X.wbits !== $ && (X.window = null), X.wrap = g, X.wbits = $, Ke(B));
      }
      function mt(B, $) {
        var g, X;
        return B ? (X = new _t(), B.state = X, X.window = null, g = Tt(B, $), g !== p && (B.state = null), g) : A;
      }
      function ft(B) {
        return mt(B, Ae);
      }
      var yt = !0, Et, rt;
      function pt(B) {
        if (yt) {
          var $;
          for (Et = new s.Buf32(512), rt = new s.Buf32(32), $ = 0; $ < 144; )
            B.lens[$++] = 8;
          for (; $ < 256; )
            B.lens[$++] = 9;
          for (; $ < 280; )
            B.lens[$++] = 7;
          for (; $ < 288; )
            B.lens[$++] = 8;
          for (h(c, B.lens, 0, 288, Et, 0, B.work, { bits: 9 }), $ = 0; $ < 32; )
            B.lens[$++] = 5;
          h(w, B.lens, 0, 32, rt, 0, B.work, { bits: 5 }), yt = !1;
        }
        B.lencode = Et, B.lenbits = 9, B.distcode = rt, B.distbits = 5;
      }
      function Nt(B, $, g, X) {
        var _e, l = B.state;
        return l.window === null && (l.wsize = 1 << l.wbits, l.wnext = 0, l.whave = 0, l.window = new s.Buf8(l.wsize)), X >= l.wsize ? (s.arraySet(l.window, $, g - l.wsize, l.wsize, 0), l.wnext = 0, l.whave = l.wsize) : (_e = l.wsize - l.wnext, _e > X && (_e = X), s.arraySet(l.window, $, g - X, _e, l.wnext), X -= _e, X ? (s.arraySet(l.window, $, g - X, X, 0), l.wnext = X, l.whave = l.wsize) : (l.wnext += _e, l.wnext === l.wsize && (l.wnext = 0), l.whave < l.wsize && (l.whave += _e))), 0;
      }
      function x(B, $) {
        var g, X, _e, l, V, H, _, O, q, me, oe, he, Te, xt, Ye = 0, d, I, U, K, ce, ye, re, se, Ce = new s.Buf8(4), Ee, xe, Ve = (
          /* permutation of code lengths */
          [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
        );
        if (!B || !B.state || !B.output || !B.input && B.avail_in !== 0)
          return A;
        g = B.state, g.mode === Se && (g.mode = je), V = B.next_out, _e = B.output, _ = B.avail_out, l = B.next_in, X = B.input, H = B.avail_in, O = g.hold, q = g.bits, me = H, oe = _, se = p;
        e:
          for (; ; )
            switch (g.mode) {
              case R:
                if (g.wrap === 0) {
                  g.mode = je;
                  break;
                }
                for (; q < 16; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                if (g.wrap & 2 && O === 35615) {
                  g.check = 0, Ce[0] = O & 255, Ce[1] = O >>> 8 & 255, g.check = o(g.check, Ce, 2, 0), O = 0, q = 0, g.mode = z;
                  break;
                }
                if (g.flags = 0, g.head && (g.head.done = !1), !(g.wrap & 1) || /* check if zlib header allowed */
                (((O & 255) << 8) + (O >> 8)) % 31) {
                  B.msg = "incorrect header check", g.mode = Re;
                  break;
                }
                if ((O & 15) !== T) {
                  B.msg = "unknown compression method", g.mode = Re;
                  break;
                }
                if (O >>>= 4, q -= 4, re = (O & 15) + 8, g.wbits === 0)
                  g.wbits = re;
                else if (re > g.wbits) {
                  B.msg = "invalid window size", g.mode = Re;
                  break;
                }
                g.dmax = 1 << re, B.adler = g.check = 1, g.mode = O & 512 ? de : Se, O = 0, q = 0;
                break;
              case z:
                for (; q < 16; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                if (g.flags = O, (g.flags & 255) !== T) {
                  B.msg = "unknown compression method", g.mode = Re;
                  break;
                }
                if (g.flags & 57344) {
                  B.msg = "unknown header flags set", g.mode = Re;
                  break;
                }
                g.head && (g.head.text = O >> 8 & 1), g.flags & 512 && (Ce[0] = O & 255, Ce[1] = O >>> 8 & 255, g.check = o(g.check, Ce, 2, 0)), O = 0, q = 0, g.mode = M;
              case M:
                for (; q < 32; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                g.head && (g.head.time = O), g.flags & 512 && (Ce[0] = O & 255, Ce[1] = O >>> 8 & 255, Ce[2] = O >>> 16 & 255, Ce[3] = O >>> 24 & 255, g.check = o(g.check, Ce, 4, 0)), O = 0, q = 0, g.mode = Y;
              case Y:
                for (; q < 16; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                g.head && (g.head.xflags = O & 255, g.head.os = O >> 8), g.flags & 512 && (Ce[0] = O & 255, Ce[1] = O >>> 8 & 255, g.check = o(g.check, Ce, 2, 0)), O = 0, q = 0, g.mode = Z;
              case Z:
                if (g.flags & 1024) {
                  for (; q < 16; ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  g.length = O, g.head && (g.head.extra_len = O), g.flags & 512 && (Ce[0] = O & 255, Ce[1] = O >>> 8 & 255, g.check = o(g.check, Ce, 2, 0)), O = 0, q = 0;
                } else
                  g.head && (g.head.extra = null);
                g.mode = te;
              case te:
                if (g.flags & 1024 && (he = g.length, he > H && (he = H), he && (g.head && (re = g.head.extra_len - g.length, g.head.extra || (g.head.extra = new Array(g.head.extra_len)), s.arraySet(
                  g.head.extra,
                  X,
                  l,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  he,
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  re
                )), g.flags & 512 && (g.check = o(g.check, X, he, l)), H -= he, l += he, g.length -= he), g.length))
                  break e;
                g.length = 0, g.mode = ge;
              case ge:
                if (g.flags & 2048) {
                  if (H === 0)
                    break e;
                  he = 0;
                  do
                    re = X[l + he++], g.head && re && g.length < 65536 && (g.head.name += String.fromCharCode(re));
                  while (re && he < H);
                  if (g.flags & 512 && (g.check = o(g.check, X, he, l)), H -= he, l += he, re)
                    break e;
                } else
                  g.head && (g.head.name = null);
                g.length = 0, g.mode = pe;
              case pe:
                if (g.flags & 4096) {
                  if (H === 0)
                    break e;
                  he = 0;
                  do
                    re = X[l + he++], g.head && re && g.length < 65536 && (g.head.comment += String.fromCharCode(re));
                  while (re && he < H);
                  if (g.flags & 512 && (g.check = o(g.check, X, he, l)), H -= he, l += he, re)
                    break e;
                } else
                  g.head && (g.head.comment = null);
                g.mode = ve;
              case ve:
                if (g.flags & 512) {
                  for (; q < 16; ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  if (O !== (g.check & 65535)) {
                    B.msg = "header crc mismatch", g.mode = Re;
                    break;
                  }
                  O = 0, q = 0;
                }
                g.head && (g.head.hcrc = g.flags >> 9 & 1, g.head.done = !0), B.adler = g.check = 0, g.mode = Se;
                break;
              case de:
                for (; q < 32; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                B.adler = g.check = dt(O), O = 0, q = 0, g.mode = fe;
              case fe:
                if (g.havedict === 0)
                  return B.next_out = V, B.avail_out = _, B.next_in = l, B.avail_in = H, g.hold = O, g.bits = q, y;
                B.adler = g.check = 1, g.mode = Se;
              case Se:
                if ($ === S || $ === N)
                  break e;
              case je:
                if (g.last) {
                  O >>>= q & 7, q -= q & 7, g.mode = nt;
                  break;
                }
                for (; q < 3; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                switch (g.last = O & 1, O >>>= 1, q -= 1, O & 3) {
                  case 0:
                    g.mode = Oe;
                    break;
                  case 1:
                    if (pt(g), g.mode = Ue, $ === N) {
                      O >>>= 2, q -= 2;
                      break e;
                    }
                    break;
                  case 2:
                    g.mode = Ne;
                    break;
                  case 3:
                    B.msg = "invalid block type", g.mode = Re;
                }
                O >>>= 2, q -= 2;
                break;
              case Oe:
                for (O >>>= q & 7, q -= q & 7; q < 32; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                if ((O & 65535) !== (O >>> 16 ^ 65535)) {
                  B.msg = "invalid stored block lengths", g.mode = Re;
                  break;
                }
                if (g.length = O & 65535, O = 0, q = 0, g.mode = be, $ === N)
                  break e;
              case be:
                g.mode = Le;
              case Le:
                if (he = g.length, he) {
                  if (he > H && (he = H), he > _ && (he = _), he === 0)
                    break e;
                  s.arraySet(_e, X, l, he, V), H -= he, l += he, _ -= he, V += he, g.length -= he;
                  break;
                }
                g.mode = Se;
                break;
              case Ne:
                for (; q < 14; ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                if (g.nlen = (O & 31) + 257, O >>>= 5, q -= 5, g.ndist = (O & 31) + 1, O >>>= 5, q -= 5, g.ncode = (O & 15) + 4, O >>>= 4, q -= 4, g.nlen > 286 || g.ndist > 30) {
                  B.msg = "too many length or distance symbols", g.mode = Re;
                  break;
                }
                g.have = 0, g.mode = it;
              case it:
                for (; g.have < g.ncode; ) {
                  for (; q < 3; ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  g.lens[Ve[g.have++]] = O & 7, O >>>= 3, q -= 3;
                }
                for (; g.have < 19; )
                  g.lens[Ve[g.have++]] = 0;
                if (g.lencode = g.lendyn, g.lenbits = 7, Ee = { bits: g.lenbits }, se = h(f, g.lens, 0, 19, g.lencode, 0, g.work, Ee), g.lenbits = Ee.bits, se) {
                  B.msg = "invalid code lengths set", g.mode = Re;
                  break;
                }
                g.have = 0, g.mode = Ge;
              case Ge:
                for (; g.have < g.nlen + g.ndist; ) {
                  for (; Ye = g.lencode[O & (1 << g.lenbits) - 1], d = Ye >>> 24, I = Ye >>> 16 & 255, U = Ye & 65535, !(d <= q); ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  if (U < 16)
                    O >>>= d, q -= d, g.lens[g.have++] = U;
                  else {
                    if (U === 16) {
                      for (xe = d + 2; q < xe; ) {
                        if (H === 0)
                          break e;
                        H--, O += X[l++] << q, q += 8;
                      }
                      if (O >>>= d, q -= d, g.have === 0) {
                        B.msg = "invalid bit length repeat", g.mode = Re;
                        break;
                      }
                      re = g.lens[g.have - 1], he = 3 + (O & 3), O >>>= 2, q -= 2;
                    } else if (U === 17) {
                      for (xe = d + 3; q < xe; ) {
                        if (H === 0)
                          break e;
                        H--, O += X[l++] << q, q += 8;
                      }
                      O >>>= d, q -= d, re = 0, he = 3 + (O & 7), O >>>= 3, q -= 3;
                    } else {
                      for (xe = d + 7; q < xe; ) {
                        if (H === 0)
                          break e;
                        H--, O += X[l++] << q, q += 8;
                      }
                      O >>>= d, q -= d, re = 0, he = 11 + (O & 127), O >>>= 7, q -= 7;
                    }
                    if (g.have + he > g.nlen + g.ndist) {
                      B.msg = "invalid bit length repeat", g.mode = Re;
                      break;
                    }
                    for (; he--; )
                      g.lens[g.have++] = re;
                  }
                }
                if (g.mode === Re)
                  break;
                if (g.lens[256] === 0) {
                  B.msg = "invalid code -- missing end-of-block", g.mode = Re;
                  break;
                }
                if (g.lenbits = 9, Ee = { bits: g.lenbits }, se = h(c, g.lens, 0, g.nlen, g.lencode, 0, g.work, Ee), g.lenbits = Ee.bits, se) {
                  B.msg = "invalid literal/lengths set", g.mode = Re;
                  break;
                }
                if (g.distbits = 6, g.distcode = g.distdyn, Ee = { bits: g.distbits }, se = h(w, g.lens, g.nlen, g.ndist, g.distcode, 0, g.work, Ee), g.distbits = Ee.bits, se) {
                  B.msg = "invalid distances set", g.mode = Re;
                  break;
                }
                if (g.mode = Ue, $ === N)
                  break e;
              case Ue:
                g.mode = De;
              case De:
                if (H >= 6 && _ >= 258) {
                  B.next_out = V, B.avail_out = _, B.next_in = l, B.avail_in = H, g.hold = O, g.bits = q, u(B, oe), V = B.next_out, _e = B.output, _ = B.avail_out, l = B.next_in, X = B.input, H = B.avail_in, O = g.hold, q = g.bits, g.mode === Se && (g.back = -1);
                  break;
                }
                for (g.back = 0; Ye = g.lencode[O & (1 << g.lenbits) - 1], d = Ye >>> 24, I = Ye >>> 16 & 255, U = Ye & 65535, !(d <= q); ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                if (I && !(I & 240)) {
                  for (K = d, ce = I, ye = U; Ye = g.lencode[ye + ((O & (1 << K + ce) - 1) >> K)], d = Ye >>> 24, I = Ye >>> 16 & 255, U = Ye & 65535, !(K + d <= q); ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  O >>>= K, q -= K, g.back += K;
                }
                if (O >>>= d, q -= d, g.back += d, g.length = U, I === 0) {
                  g.mode = Ie;
                  break;
                }
                if (I & 32) {
                  g.back = -1, g.mode = Se;
                  break;
                }
                if (I & 64) {
                  B.msg = "invalid literal/length code", g.mode = Re;
                  break;
                }
                g.extra = I & 15, g.mode = Xe;
              case Xe:
                if (g.extra) {
                  for (xe = g.extra; q < xe; ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  g.length += O & (1 << g.extra) - 1, O >>>= g.extra, q -= g.extra, g.back += g.extra;
                }
                g.was = g.length, g.mode = Me;
              case Me:
                for (; Ye = g.distcode[O & (1 << g.distbits) - 1], d = Ye >>> 24, I = Ye >>> 16 & 255, U = Ye & 65535, !(d <= q); ) {
                  if (H === 0)
                    break e;
                  H--, O += X[l++] << q, q += 8;
                }
                if (!(I & 240)) {
                  for (K = d, ce = I, ye = U; Ye = g.distcode[ye + ((O & (1 << K + ce) - 1) >> K)], d = Ye >>> 24, I = Ye >>> 16 & 255, U = Ye & 65535, !(K + d <= q); ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  O >>>= K, q -= K, g.back += K;
                }
                if (O >>>= d, q -= d, g.back += d, I & 64) {
                  B.msg = "invalid distance code", g.mode = Re;
                  break;
                }
                g.offset = U, g.extra = I & 15, g.mode = Pe;
              case Pe:
                if (g.extra) {
                  for (xe = g.extra; q < xe; ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  g.offset += O & (1 << g.extra) - 1, O >>>= g.extra, q -= g.extra, g.back += g.extra;
                }
                if (g.offset > g.dmax) {
                  B.msg = "invalid distance too far back", g.mode = Re;
                  break;
                }
                g.mode = qe;
              case qe:
                if (_ === 0)
                  break e;
                if (he = oe - _, g.offset > he) {
                  if (he = g.offset - he, he > g.whave && g.sane) {
                    B.msg = "invalid distance too far back", g.mode = Re;
                    break;
                  }
                  he > g.wnext ? (he -= g.wnext, Te = g.wsize - he) : Te = g.wnext - he, he > g.length && (he = g.length), xt = g.window;
                } else
                  xt = _e, Te = V - g.offset, he = g.length;
                he > _ && (he = _), _ -= he, g.length -= he;
                do
                  _e[V++] = xt[Te++];
                while (--he);
                g.length === 0 && (g.mode = De);
                break;
              case Ie:
                if (_ === 0)
                  break e;
                _e[V++] = g.length, _--, g.mode = De;
                break;
              case nt:
                if (g.wrap) {
                  for (; q < 32; ) {
                    if (H === 0)
                      break e;
                    H--, O |= X[l++] << q, q += 8;
                  }
                  if (oe -= _, B.total_out += oe, g.total += oe, oe && (B.adler = g.check = /*UPDATE(state.check, put - _out, _out);*/
                  g.flags ? o(g.check, _e, oe, V - oe) : a(g.check, _e, oe, V - oe)), oe = _, (g.flags ? O : dt(O)) !== g.check) {
                    B.msg = "incorrect data check", g.mode = Re;
                    break;
                  }
                  O = 0, q = 0;
                }
                g.mode = We;
              case We:
                if (g.wrap && g.flags) {
                  for (; q < 32; ) {
                    if (H === 0)
                      break e;
                    H--, O += X[l++] << q, q += 8;
                  }
                  if (O !== (g.total & 4294967295)) {
                    B.msg = "incorrect length check", g.mode = Re;
                    break;
                  }
                  O = 0, q = 0;
                }
                g.mode = tt;
              case tt:
                se = v;
                break e;
              case Re:
                se = k;
                break e;
              case Qe:
                return b;
              case at:
              default:
                return A;
            }
        return B.next_out = V, B.avail_out = _, B.next_in = l, B.avail_in = H, g.hold = O, g.bits = q, (g.wsize || oe !== B.avail_out && g.mode < Re && (g.mode < nt || $ !== m)) && Nt(B, B.output, B.next_out, oe - B.avail_out), me -= B.avail_in, oe -= B.avail_out, B.total_in += me, B.total_out += oe, g.total += oe, g.wrap && oe && (B.adler = g.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
        g.flags ? o(g.check, _e, oe, B.next_out - oe) : a(g.check, _e, oe, B.next_out - oe)), B.data_type = g.bits + (g.last ? 64 : 0) + (g.mode === Se ? 128 : 0) + (g.mode === Ue || g.mode === be ? 256 : 0), (me === 0 && oe === 0 || $ === m) && se === p && (se = C), se;
      }
      function J(B) {
        if (!B || !B.state)
          return A;
        var $ = B.state;
        return $.window && ($.window = null), B.state = null, p;
      }
      function ee(B, $) {
        var g;
        return !B || !B.state || (g = B.state, !(g.wrap & 2)) ? A : (g.head = $, $.done = !1, p);
      }
      function ue(B, $) {
        var g = $.length, X, _e, l;
        return !B || !B.state || (X = B.state, X.wrap !== 0 && X.mode !== fe) ? A : X.mode === fe && (_e = 1, _e = a(_e, $, g, 0), _e !== X.check) ? k : (l = Nt(B, $, g, g), l ? (X.mode = Qe, b) : (X.havedict = 1, p));
      }
      i.inflateReset = Ke, i.inflateReset2 = Tt, i.inflateResetKeep = gt, i.inflateInit = ft, i.inflateInit2 = mt, i.inflate = x, i.inflateEnd = J, i.inflateGetHeader = ee, i.inflateSetDictionary = ue, i.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, r, i) {
      var s = t("../utils/common"), a = 15, o = 852, u = 592, h = 0, f = 1, c = 2, w = [
        /* Length codes 257..285 base */
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258,
        0,
        0
      ], m = [
        /* Length codes 257..285 extra */
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        16,
        72,
        78
      ], S = [
        /* Distance codes 0..29 base */
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577,
        0,
        0
      ], N = [
        /* Distance codes 0..29 extra */
        16,
        16,
        16,
        16,
        17,
        17,
        18,
        18,
        19,
        19,
        20,
        20,
        21,
        21,
        22,
        22,
        23,
        23,
        24,
        24,
        25,
        25,
        26,
        26,
        27,
        27,
        28,
        28,
        29,
        29,
        64,
        64
      ];
      r.exports = function(v, y, A, k, b, C, T, R) {
        var z = R.bits, M = 0, Y = 0, Z = 0, te = 0, ge = 0, pe = 0, ve = 0, de = 0, fe = 0, Se = 0, je, Oe, be, Le, Ne, it = null, Ge = 0, Ue, De = new s.Buf16(a + 1), Xe = new s.Buf16(a + 1), Me = null, Pe = 0, qe, Ie, nt;
        for (M = 0; M <= a; M++)
          De[M] = 0;
        for (Y = 0; Y < k; Y++)
          De[y[A + Y]]++;
        for (ge = z, te = a; te >= 1 && De[te] === 0; te--)
          ;
        if (ge > te && (ge = te), te === 0)
          return b[C++] = 1 << 24 | 64 << 16 | 0, b[C++] = 1 << 24 | 64 << 16 | 0, R.bits = 1, 0;
        for (Z = 1; Z < te && De[Z] === 0; Z++)
          ;
        for (ge < Z && (ge = Z), de = 1, M = 1; M <= a; M++)
          if (de <<= 1, de -= De[M], de < 0)
            return -1;
        if (de > 0 && (v === h || te !== 1))
          return -1;
        for (Xe[1] = 0, M = 1; M < a; M++)
          Xe[M + 1] = Xe[M] + De[M];
        for (Y = 0; Y < k; Y++)
          y[A + Y] !== 0 && (T[Xe[y[A + Y]]++] = Y);
        if (v === h ? (it = Me = T, Ue = 19) : v === f ? (it = w, Ge -= 257, Me = m, Pe -= 257, Ue = 256) : (it = S, Me = N, Ue = -1), Se = 0, Y = 0, M = Z, Ne = C, pe = ge, ve = 0, be = -1, fe = 1 << ge, Le = fe - 1, v === f && fe > o || v === c && fe > u)
          return 1;
        for (; ; ) {
          qe = M - ve, T[Y] < Ue ? (Ie = 0, nt = T[Y]) : T[Y] > Ue ? (Ie = Me[Pe + T[Y]], nt = it[Ge + T[Y]]) : (Ie = 32 + 64, nt = 0), je = 1 << M - ve, Oe = 1 << pe, Z = Oe;
          do
            Oe -= je, b[Ne + (Se >> ve) + Oe] = qe << 24 | Ie << 16 | nt | 0;
          while (Oe !== 0);
          for (je = 1 << M - 1; Se & je; )
            je >>= 1;
          if (je !== 0 ? (Se &= je - 1, Se += je) : Se = 0, Y++, --De[M] === 0) {
            if (M === te)
              break;
            M = y[A + T[Y]];
          }
          if (M > ge && (Se & Le) !== be) {
            for (ve === 0 && (ve = ge), Ne += Z, pe = M - ve, de = 1 << pe; pe + ve < te && (de -= De[pe + ve], !(de <= 0)); )
              pe++, de <<= 1;
            if (fe += 1 << pe, v === f && fe > o || v === c && fe > u)
              return 1;
            be = Se & Le, b[be] = ge << 24 | pe << 16 | Ne - C | 0;
          }
        }
        return Se !== 0 && (b[Ne + Se] = M - ve << 24 | 64 << 16 | 0), R.bits = ge, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(t, r, i) {
      r.exports = {
        2: "need dictionary",
        /* Z_NEED_DICT       2  */
        1: "stream end",
        /* Z_STREAM_END      1  */
        0: "",
        /* Z_OK              0  */
        "-1": "file error",
        /* Z_ERRNO         (-1) */
        "-2": "stream error",
        /* Z_STREAM_ERROR  (-2) */
        "-3": "data error",
        /* Z_DATA_ERROR    (-3) */
        "-4": "insufficient memory",
        /* Z_MEM_ERROR     (-4) */
        "-5": "buffer error",
        /* Z_BUF_ERROR     (-5) */
        "-6": "incompatible version"
        /* Z_VERSION_ERROR (-6) */
      };
    }, {}], 52: [function(t, r, i) {
      var s = t("../utils/common"), a = 4, o = 0, u = 1, h = 2;
      function f(x) {
        for (var J = x.length; --J >= 0; )
          x[J] = 0;
      }
      var c = 0, w = 1, m = 2, S = 3, N = 258, p = 29, v = 256, y = v + 1 + p, A = 30, k = 19, b = 2 * y + 1, C = 15, T = 16, R = 7, z = 256, M = 16, Y = 17, Z = 18, te = (
        /* extra bits for each length code */
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
      ), ge = (
        /* extra bits for each distance code */
        [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
      ), pe = (
        /* extra bits for each bit length code */
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
      ), ve = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], de = 512, fe = new Array((y + 2) * 2);
      f(fe);
      var Se = new Array(A * 2);
      f(Se);
      var je = new Array(de);
      f(je);
      var Oe = new Array(N - S + 1);
      f(Oe);
      var be = new Array(p);
      f(be);
      var Le = new Array(A);
      f(Le);
      function Ne(x, J, ee, ue, B) {
        this.static_tree = x, this.extra_bits = J, this.extra_base = ee, this.elems = ue, this.max_length = B, this.has_stree = x && x.length;
      }
      var it, Ge, Ue;
      function De(x, J) {
        this.dyn_tree = x, this.max_code = 0, this.stat_desc = J;
      }
      function Xe(x) {
        return x < 256 ? je[x] : je[256 + (x >>> 7)];
      }
      function Me(x, J) {
        x.pending_buf[x.pending++] = J & 255, x.pending_buf[x.pending++] = J >>> 8 & 255;
      }
      function Pe(x, J, ee) {
        x.bi_valid > T - ee ? (x.bi_buf |= J << x.bi_valid & 65535, Me(x, x.bi_buf), x.bi_buf = J >> T - x.bi_valid, x.bi_valid += ee - T) : (x.bi_buf |= J << x.bi_valid & 65535, x.bi_valid += ee);
      }
      function qe(x, J, ee) {
        Pe(
          x,
          ee[J * 2],
          ee[J * 2 + 1]
          /*.Len*/
        );
      }
      function Ie(x, J) {
        var ee = 0;
        do
          ee |= x & 1, x >>>= 1, ee <<= 1;
        while (--J > 0);
        return ee >>> 1;
      }
      function nt(x) {
        x.bi_valid === 16 ? (Me(x, x.bi_buf), x.bi_buf = 0, x.bi_valid = 0) : x.bi_valid >= 8 && (x.pending_buf[x.pending++] = x.bi_buf & 255, x.bi_buf >>= 8, x.bi_valid -= 8);
      }
      function We(x, J) {
        var ee = J.dyn_tree, ue = J.max_code, B = J.stat_desc.static_tree, $ = J.stat_desc.has_stree, g = J.stat_desc.extra_bits, X = J.stat_desc.extra_base, _e = J.stat_desc.max_length, l, V, H, _, O, q, me = 0;
        for (_ = 0; _ <= C; _++)
          x.bl_count[_] = 0;
        for (ee[x.heap[x.heap_max] * 2 + 1] = 0, l = x.heap_max + 1; l < b; l++)
          V = x.heap[l], _ = ee[ee[V * 2 + 1] * 2 + 1] + 1, _ > _e && (_ = _e, me++), ee[V * 2 + 1] = _, !(V > ue) && (x.bl_count[_]++, O = 0, V >= X && (O = g[V - X]), q = ee[V * 2], x.opt_len += q * (_ + O), $ && (x.static_len += q * (B[V * 2 + 1] + O)));
        if (me !== 0) {
          do {
            for (_ = _e - 1; x.bl_count[_] === 0; )
              _--;
            x.bl_count[_]--, x.bl_count[_ + 1] += 2, x.bl_count[_e]--, me -= 2;
          } while (me > 0);
          for (_ = _e; _ !== 0; _--)
            for (V = x.bl_count[_]; V !== 0; )
              H = x.heap[--l], !(H > ue) && (ee[H * 2 + 1] !== _ && (x.opt_len += (_ - ee[H * 2 + 1]) * ee[H * 2], ee[H * 2 + 1] = _), V--);
        }
      }
      function tt(x, J, ee) {
        var ue = new Array(C + 1), B = 0, $, g;
        for ($ = 1; $ <= C; $++)
          ue[$] = B = B + ee[$ - 1] << 1;
        for (g = 0; g <= J; g++) {
          var X = x[g * 2 + 1];
          X !== 0 && (x[g * 2] = Ie(ue[X]++, X));
        }
      }
      function Re() {
        var x, J, ee, ue, B, $ = new Array(C + 1);
        for (ee = 0, ue = 0; ue < p - 1; ue++)
          for (be[ue] = ee, x = 0; x < 1 << te[ue]; x++)
            Oe[ee++] = ue;
        for (Oe[ee - 1] = ue, B = 0, ue = 0; ue < 16; ue++)
          for (Le[ue] = B, x = 0; x < 1 << ge[ue]; x++)
            je[B++] = ue;
        for (B >>= 7; ue < A; ue++)
          for (Le[ue] = B << 7, x = 0; x < 1 << ge[ue] - 7; x++)
            je[256 + B++] = ue;
        for (J = 0; J <= C; J++)
          $[J] = 0;
        for (x = 0; x <= 143; )
          fe[x * 2 + 1] = 8, x++, $[8]++;
        for (; x <= 255; )
          fe[x * 2 + 1] = 9, x++, $[9]++;
        for (; x <= 279; )
          fe[x * 2 + 1] = 7, x++, $[7]++;
        for (; x <= 287; )
          fe[x * 2 + 1] = 8, x++, $[8]++;
        for (tt(fe, y + 1, $), x = 0; x < A; x++)
          Se[x * 2 + 1] = 5, Se[x * 2] = Ie(x, 5);
        it = new Ne(fe, te, v + 1, y, C), Ge = new Ne(Se, ge, 0, A, C), Ue = new Ne(new Array(0), pe, 0, k, R);
      }
      function Qe(x) {
        var J;
        for (J = 0; J < y; J++)
          x.dyn_ltree[J * 2] = 0;
        for (J = 0; J < A; J++)
          x.dyn_dtree[J * 2] = 0;
        for (J = 0; J < k; J++)
          x.bl_tree[J * 2] = 0;
        x.dyn_ltree[z * 2] = 1, x.opt_len = x.static_len = 0, x.last_lit = x.matches = 0;
      }
      function at(x) {
        x.bi_valid > 8 ? Me(x, x.bi_buf) : x.bi_valid > 0 && (x.pending_buf[x.pending++] = x.bi_buf), x.bi_buf = 0, x.bi_valid = 0;
      }
      function ht(x, J, ee, ue) {
        at(x), ue && (Me(x, ee), Me(x, ~ee)), s.arraySet(x.pending_buf, x.window, J, ee, x.pending), x.pending += ee;
      }
      function ot(x, J, ee, ue) {
        var B = J * 2, $ = ee * 2;
        return x[B] < x[$] || x[B] === x[$] && ue[J] <= ue[ee];
      }
      function ze(x, J, ee) {
        for (var ue = x.heap[ee], B = ee << 1; B <= x.heap_len && (B < x.heap_len && ot(J, x.heap[B + 1], x.heap[B], x.depth) && B++, !ot(J, ue, x.heap[B], x.depth)); )
          x.heap[ee] = x.heap[B], ee = B, B <<= 1;
        x.heap[ee] = ue;
      }
      function Ae(x, J, ee) {
        var ue, B, $ = 0, g, X;
        if (x.last_lit !== 0)
          do
            ue = x.pending_buf[x.d_buf + $ * 2] << 8 | x.pending_buf[x.d_buf + $ * 2 + 1], B = x.pending_buf[x.l_buf + $], $++, ue === 0 ? qe(x, B, J) : (g = Oe[B], qe(x, g + v + 1, J), X = te[g], X !== 0 && (B -= be[g], Pe(x, B, X)), ue--, g = Xe(ue), qe(x, g, ee), X = ge[g], X !== 0 && (ue -= Le[g], Pe(x, ue, X)));
          while ($ < x.last_lit);
        qe(x, z, J);
      }
      function dt(x, J) {
        var ee = J.dyn_tree, ue = J.stat_desc.static_tree, B = J.stat_desc.has_stree, $ = J.stat_desc.elems, g, X, _e = -1, l;
        for (x.heap_len = 0, x.heap_max = b, g = 0; g < $; g++)
          ee[g * 2] !== 0 ? (x.heap[++x.heap_len] = _e = g, x.depth[g] = 0) : ee[g * 2 + 1] = 0;
        for (; x.heap_len < 2; )
          l = x.heap[++x.heap_len] = _e < 2 ? ++_e : 0, ee[l * 2] = 1, x.depth[l] = 0, x.opt_len--, B && (x.static_len -= ue[l * 2 + 1]);
        for (J.max_code = _e, g = x.heap_len >> 1; g >= 1; g--)
          ze(x, ee, g);
        l = $;
        do
          g = x.heap[
            1
            /*SMALLEST*/
          ], x.heap[
            1
            /*SMALLEST*/
          ] = x.heap[x.heap_len--], ze(
            x,
            ee,
            1
            /*SMALLEST*/
          ), X = x.heap[
            1
            /*SMALLEST*/
          ], x.heap[--x.heap_max] = g, x.heap[--x.heap_max] = X, ee[l * 2] = ee[g * 2] + ee[X * 2], x.depth[l] = (x.depth[g] >= x.depth[X] ? x.depth[g] : x.depth[X]) + 1, ee[g * 2 + 1] = ee[X * 2 + 1] = l, x.heap[
            1
            /*SMALLEST*/
          ] = l++, ze(
            x,
            ee,
            1
            /*SMALLEST*/
          );
        while (x.heap_len >= 2);
        x.heap[--x.heap_max] = x.heap[
          1
          /*SMALLEST*/
        ], We(x, J), tt(ee, _e, x.bl_count);
      }
      function _t(x, J, ee) {
        var ue, B = -1, $, g = J[0 * 2 + 1], X = 0, _e = 7, l = 4;
        for (g === 0 && (_e = 138, l = 3), J[(ee + 1) * 2 + 1] = 65535, ue = 0; ue <= ee; ue++)
          $ = g, g = J[(ue + 1) * 2 + 1], !(++X < _e && $ === g) && (X < l ? x.bl_tree[$ * 2] += X : $ !== 0 ? ($ !== B && x.bl_tree[$ * 2]++, x.bl_tree[M * 2]++) : X <= 10 ? x.bl_tree[Y * 2]++ : x.bl_tree[Z * 2]++, X = 0, B = $, g === 0 ? (_e = 138, l = 3) : $ === g ? (_e = 6, l = 3) : (_e = 7, l = 4));
      }
      function gt(x, J, ee) {
        var ue, B = -1, $, g = J[0 * 2 + 1], X = 0, _e = 7, l = 4;
        for (g === 0 && (_e = 138, l = 3), ue = 0; ue <= ee; ue++)
          if ($ = g, g = J[(ue + 1) * 2 + 1], !(++X < _e && $ === g)) {
            if (X < l)
              do
                qe(x, $, x.bl_tree);
              while (--X !== 0);
            else
              $ !== 0 ? ($ !== B && (qe(x, $, x.bl_tree), X--), qe(x, M, x.bl_tree), Pe(x, X - 3, 2)) : X <= 10 ? (qe(x, Y, x.bl_tree), Pe(x, X - 3, 3)) : (qe(x, Z, x.bl_tree), Pe(x, X - 11, 7));
            X = 0, B = $, g === 0 ? (_e = 138, l = 3) : $ === g ? (_e = 6, l = 3) : (_e = 7, l = 4);
          }
      }
      function Ke(x) {
        var J;
        for (_t(x, x.dyn_ltree, x.l_desc.max_code), _t(x, x.dyn_dtree, x.d_desc.max_code), dt(x, x.bl_desc), J = k - 1; J >= 3 && x.bl_tree[ve[J] * 2 + 1] === 0; J--)
          ;
        return x.opt_len += 3 * (J + 1) + 5 + 5 + 4, J;
      }
      function Tt(x, J, ee, ue) {
        var B;
        for (Pe(x, J - 257, 5), Pe(x, ee - 1, 5), Pe(x, ue - 4, 4), B = 0; B < ue; B++)
          Pe(x, x.bl_tree[ve[B] * 2 + 1], 3);
        gt(x, x.dyn_ltree, J - 1), gt(x, x.dyn_dtree, ee - 1);
      }
      function mt(x) {
        var J = 4093624447, ee;
        for (ee = 0; ee <= 31; ee++, J >>>= 1)
          if (J & 1 && x.dyn_ltree[ee * 2] !== 0)
            return o;
        if (x.dyn_ltree[9 * 2] !== 0 || x.dyn_ltree[10 * 2] !== 0 || x.dyn_ltree[13 * 2] !== 0)
          return u;
        for (ee = 32; ee < v; ee++)
          if (x.dyn_ltree[ee * 2] !== 0)
            return u;
        return o;
      }
      var ft = !1;
      function yt(x) {
        ft || (Re(), ft = !0), x.l_desc = new De(x.dyn_ltree, it), x.d_desc = new De(x.dyn_dtree, Ge), x.bl_desc = new De(x.bl_tree, Ue), x.bi_buf = 0, x.bi_valid = 0, Qe(x);
      }
      function Et(x, J, ee, ue) {
        Pe(x, (c << 1) + (ue ? 1 : 0), 3), ht(x, J, ee, !0);
      }
      function rt(x) {
        Pe(x, w << 1, 3), qe(x, z, fe), nt(x);
      }
      function pt(x, J, ee, ue) {
        var B, $, g = 0;
        x.level > 0 ? (x.strm.data_type === h && (x.strm.data_type = mt(x)), dt(x, x.l_desc), dt(x, x.d_desc), g = Ke(x), B = x.opt_len + 3 + 7 >>> 3, $ = x.static_len + 3 + 7 >>> 3, $ <= B && (B = $)) : B = $ = ee + 5, ee + 4 <= B && J !== -1 ? Et(x, J, ee, ue) : x.strategy === a || $ === B ? (Pe(x, (w << 1) + (ue ? 1 : 0), 3), Ae(x, fe, Se)) : (Pe(x, (m << 1) + (ue ? 1 : 0), 3), Tt(x, x.l_desc.max_code + 1, x.d_desc.max_code + 1, g + 1), Ae(x, x.dyn_ltree, x.dyn_dtree)), Qe(x), ue && at(x);
      }
      function Nt(x, J, ee) {
        return x.pending_buf[x.d_buf + x.last_lit * 2] = J >>> 8 & 255, x.pending_buf[x.d_buf + x.last_lit * 2 + 1] = J & 255, x.pending_buf[x.l_buf + x.last_lit] = ee & 255, x.last_lit++, J === 0 ? x.dyn_ltree[ee * 2]++ : (x.matches++, J--, x.dyn_ltree[(Oe[ee] + v + 1) * 2]++, x.dyn_dtree[Xe(J) * 2]++), x.last_lit === x.lit_bufsize - 1;
      }
      i._tr_init = yt, i._tr_stored_block = Et, i._tr_flush_block = pt, i._tr_tally = Nt, i._tr_align = rt;
    }, { "../utils/common": 41 }], 53: [function(t, r, i) {
      function s() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      }
      r.exports = s;
    }, {}], 54: [function(t, r, i) {
      (function(s) {
        (function(a, o) {
          if (a.setImmediate)
            return;
          var u = 1, h = {}, f = !1, c = a.document, w;
          function m(R) {
            typeof R != "function" && (R = new Function("" + R));
            for (var z = new Array(arguments.length - 1), M = 0; M < z.length; M++)
              z[M] = arguments[M + 1];
            var Y = { callback: R, args: z };
            return h[u] = Y, w(u), u++;
          }
          function S(R) {
            delete h[R];
          }
          function N(R) {
            var z = R.callback, M = R.args;
            switch (M.length) {
              case 0:
                z();
                break;
              case 1:
                z(M[0]);
                break;
              case 2:
                z(M[0], M[1]);
                break;
              case 3:
                z(M[0], M[1], M[2]);
                break;
              default:
                z.apply(o, M);
                break;
            }
          }
          function p(R) {
            if (f)
              setTimeout(p, 0, R);
            else {
              var z = h[R];
              if (z) {
                f = !0;
                try {
                  N(z);
                } finally {
                  S(R), f = !1;
                }
              }
            }
          }
          function v() {
            w = function(R) {
              process.nextTick(function() {
                p(R);
              });
            };
          }
          function y() {
            if (a.postMessage && !a.importScripts) {
              var R = !0, z = a.onmessage;
              return a.onmessage = function() {
                R = !1;
              }, a.postMessage("", "*"), a.onmessage = z, R;
            }
          }
          function A() {
            var R = "setImmediate$" + Math.random() + "$", z = function(M) {
              M.source === a && typeof M.data == "string" && M.data.indexOf(R) === 0 && p(+M.data.slice(R.length));
            };
            a.addEventListener ? a.addEventListener("message", z, !1) : a.attachEvent("onmessage", z), w = function(M) {
              a.postMessage(R + M, "*");
            };
          }
          function k() {
            var R = new MessageChannel();
            R.port1.onmessage = function(z) {
              var M = z.data;
              p(M);
            }, w = function(z) {
              R.port2.postMessage(z);
            };
          }
          function b() {
            var R = c.documentElement;
            w = function(z) {
              var M = c.createElement("script");
              M.onreadystatechange = function() {
                p(z), M.onreadystatechange = null, R.removeChild(M), M = null;
              }, R.appendChild(M);
            };
          }
          function C() {
            w = function(R) {
              setTimeout(p, 0, R);
            };
          }
          var T = Object.getPrototypeOf && Object.getPrototypeOf(a);
          T = T && T.setTimeout ? T : a, {}.toString.call(a.process) === "[object process]" ? v() : y() ? A() : a.MessageChannel ? k() : c && "onreadystatechange" in c.createElement("script") ? b() : C(), T.setImmediate = m, T.clearImmediate = S;
        })(typeof self > "u" ? typeof s > "u" ? this : s : self);
      }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(ba);
var jl = ba.exports;
const Ml = /* @__PURE__ */ or(jl);
class Ul {
  constructor() {
    this.zip = void 0, this.urlCache = {}, this.checkRequirements();
  }
  /**
   * Checks to see if JSZip exists in global namspace,
   * Requires JSZip if it isn't there
   * @private
   */
  checkRequirements() {
    try {
      this.zip = new Ml();
    } catch {
      throw new Error("JSZip lib not loaded");
    }
  }
  /**
   * Open an archive
   * @param  {binary} input
   * @param  {boolean} [isBase64] tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */
  open(e, t) {
    return this.zip.loadAsync(e, { base64: t });
  }
  /**
   * Load and Open an archive
   * @param  {string} zipUrl
   * @param  {boolean} [isBase64] tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */
  openUrl(e, t) {
    return zr(e, "binary").then((function(r) {
      return this.zip.loadAsync(r, { base64: t });
    }).bind(this));
  }
  /**
   * Request a url from the archive
   * @param  {string} url  a url to request from the archive
   * @param  {string} [type] specify the type of the returned result
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  request(e, t) {
    var r = new Be(), i, s = new Xt(e);
    return t || (t = s.extension), t == "blob" ? i = this.getBlob(e) : i = this.getText(e), i ? i.then((function(a) {
      let o = this.handleResponse(a, t);
      r.resolve(o);
    }).bind(this)) : r.reject({
      message: "File not found in the epub: " + e,
      stack: new Error().stack
    }), r.promise;
  }
  /**
   * Handle the response from request
   * @private
   * @param  {any} response
   * @param  {string} [type]
   * @return {any} the parsed result
   */
  handleResponse(e, t) {
    var r;
    return t == "json" ? r = JSON.parse(e) : Pr(t) ? r = Wt(e, "text/xml") : t == "xhtml" ? r = Wt(e, "application/xhtml+xml") : t == "html" || t == "htm" ? r = Wt(e, "text/html") : r = e, r;
  }
  /**
   * Get a Blob from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {Blob}
   */
  getBlob(e, t) {
    var r = window.decodeURIComponent(e.substr(1)), i = this.zip.file(r);
    if (i)
      return t = t || br.lookup(i.name), i.async("uint8array").then(function(s) {
        return new Blob([s], { type: t });
      });
  }
  /**
   * Get Text from Archive by Url
   * @param  {string} url
   * @param  {string} [encoding]
   * @return {string}
   */
  getText(e, t) {
    var r = window.decodeURIComponent(e.substr(1)), i = this.zip.file(r);
    if (i)
      return i.async("string").then(function(s) {
        return s;
      });
  }
  /**
   * Get a base64 encoded result from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string} base64 encoded
   */
  getBase64(e, t) {
    var r = window.decodeURIComponent(e.substr(1)), i = this.zip.file(r);
    if (i)
      return t = t || br.lookup(i.name), i.async("base64").then(function(s) {
        return "data:" + t + ";base64," + s;
      });
  }
  /**
   * Create a Url from an unarchived item
   * @param  {string} url
   * @param  {object} [options.base64] use base64 encoding or blob url
   * @return {Promise} url promise with Url string
   */
  createUrl(e, t) {
    var r = new Be(), i = window.URL || window.webkitURL || window.mozURL, s, a, o = t && t.base64;
    return e in this.urlCache ? (r.resolve(this.urlCache[e]), r.promise) : (o ? (a = this.getBase64(e), a && a.then((function(u) {
      this.urlCache[e] = u, r.resolve(u);
    }).bind(this))) : (a = this.getBlob(e), a && a.then((function(u) {
      s = i.createObjectURL(u), this.urlCache[e] = s, r.resolve(s);
    }).bind(this))), a || r.reject({
      message: "File not found in the epub: " + e,
      stack: new Error().stack
    }), r.promise);
  }
  /**
   * Revoke Temp Url for a archive item
   * @param  {string} url url of the item in the archive
   */
  revokeUrl(e) {
    var t = window.URL || window.webkitURL || window.mozURL, r = this.urlCache[e];
    r && t.revokeObjectURL(r);
  }
  destroy() {
    var e = window.URL || window.webkitURL || window.mozURL;
    for (let t in this.urlCache)
      e.revokeObjectURL(t);
    this.zip = void 0, this.urlCache = {};
  }
}
var wa = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(n, e) {
  (function(t) {
    n.exports = t();
  })(function() {
    return function t(r, i, s) {
      function a(h, f) {
        if (!i[h]) {
          if (!r[h]) {
            var c = typeof rr == "function" && rr;
            if (!f && c)
              return c(h, !0);
            if (o)
              return o(h, !0);
            var w = new Error("Cannot find module '" + h + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var m = i[h] = { exports: {} };
          r[h][0].call(m.exports, function(S) {
            var N = r[h][1][S];
            return a(N || S);
          }, m, m.exports, t, r, i, s);
        }
        return i[h].exports;
      }
      for (var o = typeof rr == "function" && rr, u = 0; u < s.length; u++)
        a(s[u]);
      return a;
    }({ 1: [function(t, r, i) {
      (function(s) {
        var a = s.MutationObserver || s.WebKitMutationObserver, o;
        if (a) {
          var u = 0, h = new a(S), f = s.document.createTextNode("");
          h.observe(f, {
            characterData: !0
          }), o = function() {
            f.data = u = ++u % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var c = new s.MessageChannel();
          c.port1.onmessage = S, o = function() {
            c.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? o = function() {
            var p = s.document.createElement("script");
            p.onreadystatechange = function() {
              S(), p.onreadystatechange = null, p.parentNode.removeChild(p), p = null;
            }, s.document.documentElement.appendChild(p);
          } : o = function() {
            setTimeout(S, 0);
          };
        var w, m = [];
        function S() {
          w = !0;
          for (var p, v, y = m.length; y; ) {
            for (v = m, m = [], p = -1; ++p < y; )
              v[p]();
            y = m.length;
          }
          w = !1;
        }
        r.exports = N;
        function N(p) {
          m.push(p) === 1 && !w && o();
        }
      }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, r, i) {
      var s = t(1);
      function a() {
      }
      var o = {}, u = ["REJECTED"], h = ["FULFILLED"], f = ["PENDING"];
      r.exports = c;
      function c(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, b !== a && N(this, b);
      }
      c.prototype.catch = function(b) {
        return this.then(null, b);
      }, c.prototype.then = function(b, C) {
        if (typeof b != "function" && this.state === h || typeof C != "function" && this.state === u)
          return this;
        var T = new this.constructor(a);
        if (this.state !== f) {
          var R = this.state === h ? b : C;
          m(T, R, this.outcome);
        } else
          this.queue.push(new w(T, b, C));
        return T;
      };
      function w(b, C, T) {
        this.promise = b, typeof C == "function" && (this.onFulfilled = C, this.callFulfilled = this.otherCallFulfilled), typeof T == "function" && (this.onRejected = T, this.callRejected = this.otherCallRejected);
      }
      w.prototype.callFulfilled = function(b) {
        o.resolve(this.promise, b);
      }, w.prototype.otherCallFulfilled = function(b) {
        m(this.promise, this.onFulfilled, b);
      }, w.prototype.callRejected = function(b) {
        o.reject(this.promise, b);
      }, w.prototype.otherCallRejected = function(b) {
        m(this.promise, this.onRejected, b);
      };
      function m(b, C, T) {
        s(function() {
          var R;
          try {
            R = C(T);
          } catch (z) {
            return o.reject(b, z);
          }
          R === b ? o.reject(b, new TypeError("Cannot resolve promise with itself")) : o.resolve(b, R);
        });
      }
      o.resolve = function(b, C) {
        var T = p(S, C);
        if (T.status === "error")
          return o.reject(b, T.value);
        var R = T.value;
        if (R)
          N(b, R);
        else {
          b.state = h, b.outcome = C;
          for (var z = -1, M = b.queue.length; ++z < M; )
            b.queue[z].callFulfilled(C);
        }
        return b;
      }, o.reject = function(b, C) {
        b.state = u, b.outcome = C;
        for (var T = -1, R = b.queue.length; ++T < R; )
          b.queue[T].callRejected(C);
        return b;
      };
      function S(b) {
        var C = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof C == "function")
          return function() {
            C.apply(b, arguments);
          };
      }
      function N(b, C) {
        var T = !1;
        function R(Z) {
          T || (T = !0, o.reject(b, Z));
        }
        function z(Z) {
          T || (T = !0, o.resolve(b, Z));
        }
        function M() {
          C(z, R);
        }
        var Y = p(M);
        Y.status === "error" && R(Y.value);
      }
      function p(b, C) {
        var T = {};
        try {
          T.value = b(C), T.status = "success";
        } catch (R) {
          T.status = "error", T.value = R;
        }
        return T;
      }
      c.resolve = v;
      function v(b) {
        return b instanceof this ? b : o.resolve(new this(a), b);
      }
      c.reject = y;
      function y(b) {
        var C = new this(a);
        return o.reject(C, b);
      }
      c.all = A;
      function A(b) {
        var C = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var T = b.length, R = !1;
        if (!T)
          return this.resolve([]);
        for (var z = new Array(T), M = 0, Y = -1, Z = new this(a); ++Y < T; )
          te(b[Y], Y);
        return Z;
        function te(ge, pe) {
          C.resolve(ge).then(ve, function(de) {
            R || (R = !0, o.reject(Z, de));
          });
          function ve(de) {
            z[pe] = de, ++M === T && !R && (R = !0, o.resolve(Z, z));
          }
        }
      }
      c.race = k;
      function k(b) {
        var C = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var T = b.length, R = !1;
        if (!T)
          return this.resolve([]);
        for (var z = -1, M = new this(a); ++z < T; )
          Y(b[z]);
        return M;
        function Y(Z) {
          C.resolve(Z).then(function(te) {
            R || (R = !0, o.resolve(M, te));
          }, function(te) {
            R || (R = !0, o.reject(M, te));
          });
        }
      }
    }, { 1: 1 }], 3: [function(t, r, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = t(2));
      }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(t, r, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(E) {
        return typeof E;
      } : function(E) {
        return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
      };
      function a(E, L) {
        if (!(E instanceof L))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var u = o();
      function h() {
        try {
          if (!u || !u.open)
            return !1;
          var E = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), L = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!E || L) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(E, L) {
        E = E || [], L = L || {};
        try {
          return new Blob(E, L);
        } catch (F) {
          if (F.name !== "TypeError")
            throw F;
          for (var D = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, P = new D(), j = 0; j < E.length; j += 1)
            P.append(E[j]);
          return P.getBlob(L.type);
        }
      }
      typeof Promise > "u" && t(3);
      var c = Promise;
      function w(E, L) {
        L && E.then(function(D) {
          L(null, D);
        }, function(D) {
          L(D);
        });
      }
      function m(E, L, D) {
        typeof L == "function" && E.then(L), typeof D == "function" && E.catch(D);
      }
      function S(E) {
        return typeof E != "string" && (console.warn(E + " used as a key, but it is not a string."), E = String(E)), E;
      }
      function N() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var p = "local-forage-detect-blob-support", v = void 0, y = {}, A = Object.prototype.toString, k = "readonly", b = "readwrite";
      function C(E) {
        for (var L = E.length, D = new ArrayBuffer(L), P = new Uint8Array(D), j = 0; j < L; j++)
          P[j] = E.charCodeAt(j);
        return D;
      }
      function T(E) {
        return new c(function(L) {
          var D = E.transaction(p, b), P = f([""]);
          D.objectStore(p).put(P, "key"), D.onabort = function(j) {
            j.preventDefault(), j.stopPropagation(), L(!1);
          }, D.oncomplete = function() {
            var j = navigator.userAgent.match(/Chrome\/(\d+)/), F = navigator.userAgent.match(/Edge\//);
            L(F || !j || parseInt(j[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function R(E) {
        return typeof v == "boolean" ? c.resolve(v) : T(E).then(function(L) {
          return v = L, v;
        });
      }
      function z(E) {
        var L = y[E.name], D = {};
        D.promise = new c(function(P, j) {
          D.resolve = P, D.reject = j;
        }), L.deferredOperations.push(D), L.dbReady ? L.dbReady = L.dbReady.then(function() {
          return D.promise;
        }) : L.dbReady = D.promise;
      }
      function M(E) {
        var L = y[E.name], D = L.deferredOperations.pop();
        if (D)
          return D.resolve(), D.promise;
      }
      function Y(E, L) {
        var D = y[E.name], P = D.deferredOperations.pop();
        if (P)
          return P.reject(L), P.promise;
      }
      function Z(E, L) {
        return new c(function(D, P) {
          if (y[E.name] = y[E.name] || be(), E.db)
            if (L)
              z(E), E.db.close();
            else
              return D(E.db);
          var j = [E.name];
          L && j.push(E.version);
          var F = u.open.apply(u, j);
          L && (F.onupgradeneeded = function(G) {
            var Q = F.result;
            try {
              Q.createObjectStore(E.storeName), G.oldVersion <= 1 && Q.createObjectStore(p);
            } catch (ie) {
              if (ie.name === "ConstraintError")
                console.warn('The database "' + E.name + '" has been upgraded from version ' + G.oldVersion + " to version " + G.newVersion + ', but the storage "' + E.storeName + '" already exists.');
              else
                throw ie;
            }
          }), F.onerror = function(G) {
            G.preventDefault(), P(F.error);
          }, F.onsuccess = function() {
            var G = F.result;
            G.onversionchange = function(Q) {
              Q.target.close();
            }, D(G), M(E);
          };
        });
      }
      function te(E) {
        return Z(E, !1);
      }
      function ge(E) {
        return Z(E, !0);
      }
      function pe(E, L) {
        if (!E.db)
          return !0;
        var D = !E.db.objectStoreNames.contains(E.storeName), P = E.version < E.db.version, j = E.version > E.db.version;
        if (P && (E.version !== L && console.warn('The database "' + E.name + `" can't be downgraded from version ` + E.db.version + " to version " + E.version + "."), E.version = E.db.version), j || D) {
          if (D) {
            var F = E.db.version + 1;
            F > E.version && (E.version = F);
          }
          return !0;
        }
        return !1;
      }
      function ve(E) {
        return new c(function(L, D) {
          var P = new FileReader();
          P.onerror = D, P.onloadend = function(j) {
            var F = btoa(j.target.result || "");
            L({
              __local_forage_encoded_blob: !0,
              data: F,
              type: E.type
            });
          }, P.readAsBinaryString(E);
        });
      }
      function de(E) {
        var L = C(atob(E.data));
        return f([L], { type: E.type });
      }
      function fe(E) {
        return E && E.__local_forage_encoded_blob;
      }
      function Se(E) {
        var L = this, D = L._initReady().then(function() {
          var P = y[L._dbInfo.name];
          if (P && P.dbReady)
            return P.dbReady;
        });
        return m(D, E, E), D;
      }
      function je(E) {
        z(E);
        for (var L = y[E.name], D = L.forages, P = 0; P < D.length; P++) {
          var j = D[P];
          j._dbInfo.db && (j._dbInfo.db.close(), j._dbInfo.db = null);
        }
        return E.db = null, te(E).then(function(F) {
          return E.db = F, pe(E) ? ge(E) : F;
        }).then(function(F) {
          E.db = L.db = F;
          for (var G = 0; G < D.length; G++)
            D[G]._dbInfo.db = F;
        }).catch(function(F) {
          throw Y(E, F), F;
        });
      }
      function Oe(E, L, D, P) {
        P === void 0 && (P = 1);
        try {
          var j = E.db.transaction(E.storeName, L);
          D(null, j);
        } catch (F) {
          if (P > 0 && (!E.db || F.name === "InvalidStateError" || F.name === "NotFoundError"))
            return c.resolve().then(function() {
              if (!E.db || F.name === "NotFoundError" && !E.db.objectStoreNames.contains(E.storeName) && E.version <= E.db.version)
                return E.db && (E.version = E.db.version + 1), ge(E);
            }).then(function() {
              return je(E).then(function() {
                Oe(E, L, D, P - 1);
              });
            }).catch(D);
          D(F);
        }
      }
      function be() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      }
      function Le(E) {
        var L = this, D = {
          db: null
        };
        if (E)
          for (var P in E)
            D[P] = E[P];
        var j = y[D.name];
        j || (j = be(), y[D.name] = j), j.forages.push(L), L._initReady || (L._initReady = L.ready, L.ready = Se);
        var F = [];
        function G() {
          return c.resolve();
        }
        for (var Q = 0; Q < j.forages.length; Q++) {
          var ie = j.forages[Q];
          ie !== L && F.push(ie._initReady().catch(G));
        }
        var ne = j.forages.slice(0);
        return c.all(F).then(function() {
          return D.db = j.db, te(D);
        }).then(function(ae) {
          return D.db = ae, pe(D, L._defaultConfig.version) ? ge(D) : ae;
        }).then(function(ae) {
          D.db = j.db = ae, L._dbInfo = D;
          for (var we = 0; we < ne.length; we++) {
            var ke = ne[we];
            ke !== L && (ke._dbInfo.db = D.db, ke._dbInfo.version = D.version);
          }
        });
      }
      function Ne(E, L) {
        var D = this;
        E = S(E);
        var P = new c(function(j, F) {
          D.ready().then(function() {
            Oe(D._dbInfo, k, function(G, Q) {
              if (G)
                return F(G);
              try {
                var ie = Q.objectStore(D._dbInfo.storeName), ne = ie.get(E);
                ne.onsuccess = function() {
                  var ae = ne.result;
                  ae === void 0 && (ae = null), fe(ae) && (ae = de(ae)), j(ae);
                }, ne.onerror = function() {
                  F(ne.error);
                };
              } catch (ae) {
                F(ae);
              }
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function it(E, L) {
        var D = this, P = new c(function(j, F) {
          D.ready().then(function() {
            Oe(D._dbInfo, k, function(G, Q) {
              if (G)
                return F(G);
              try {
                var ie = Q.objectStore(D._dbInfo.storeName), ne = ie.openCursor(), ae = 1;
                ne.onsuccess = function() {
                  var we = ne.result;
                  if (we) {
                    var ke = we.value;
                    fe(ke) && (ke = de(ke));
                    var He = E(ke, we.key, ae++);
                    He !== void 0 ? j(He) : we.continue();
                  } else
                    j();
                }, ne.onerror = function() {
                  F(ne.error);
                };
              } catch (we) {
                F(we);
              }
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function Ge(E, L, D) {
        var P = this;
        E = S(E);
        var j = new c(function(F, G) {
          var Q;
          P.ready().then(function() {
            return Q = P._dbInfo, A.call(L) === "[object Blob]" ? R(Q.db).then(function(ie) {
              return ie ? L : ve(L);
            }) : L;
          }).then(function(ie) {
            Oe(P._dbInfo, b, function(ne, ae) {
              if (ne)
                return G(ne);
              try {
                var we = ae.objectStore(P._dbInfo.storeName);
                ie === null && (ie = void 0);
                var ke = we.put(ie, E);
                ae.oncomplete = function() {
                  ie === void 0 && (ie = null), F(ie);
                }, ae.onabort = ae.onerror = function() {
                  var He = ke.error ? ke.error : ke.transaction.error;
                  G(He);
                };
              } catch (He) {
                G(He);
              }
            });
          }).catch(G);
        });
        return w(j, D), j;
      }
      function Ue(E, L) {
        var D = this;
        E = S(E);
        var P = new c(function(j, F) {
          D.ready().then(function() {
            Oe(D._dbInfo, b, function(G, Q) {
              if (G)
                return F(G);
              try {
                var ie = Q.objectStore(D._dbInfo.storeName), ne = ie.delete(E);
                Q.oncomplete = function() {
                  j();
                }, Q.onerror = function() {
                  F(ne.error);
                }, Q.onabort = function() {
                  var ae = ne.error ? ne.error : ne.transaction.error;
                  F(ae);
                };
              } catch (ae) {
                F(ae);
              }
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function De(E) {
        var L = this, D = new c(function(P, j) {
          L.ready().then(function() {
            Oe(L._dbInfo, b, function(F, G) {
              if (F)
                return j(F);
              try {
                var Q = G.objectStore(L._dbInfo.storeName), ie = Q.clear();
                G.oncomplete = function() {
                  P();
                }, G.onabort = G.onerror = function() {
                  var ne = ie.error ? ie.error : ie.transaction.error;
                  j(ne);
                };
              } catch (ne) {
                j(ne);
              }
            });
          }).catch(j);
        });
        return w(D, E), D;
      }
      function Xe(E) {
        var L = this, D = new c(function(P, j) {
          L.ready().then(function() {
            Oe(L._dbInfo, k, function(F, G) {
              if (F)
                return j(F);
              try {
                var Q = G.objectStore(L._dbInfo.storeName), ie = Q.count();
                ie.onsuccess = function() {
                  P(ie.result);
                }, ie.onerror = function() {
                  j(ie.error);
                };
              } catch (ne) {
                j(ne);
              }
            });
          }).catch(j);
        });
        return w(D, E), D;
      }
      function Me(E, L) {
        var D = this, P = new c(function(j, F) {
          if (E < 0) {
            j(null);
            return;
          }
          D.ready().then(function() {
            Oe(D._dbInfo, k, function(G, Q) {
              if (G)
                return F(G);
              try {
                var ie = Q.objectStore(D._dbInfo.storeName), ne = !1, ae = ie.openKeyCursor();
                ae.onsuccess = function() {
                  var we = ae.result;
                  if (!we) {
                    j(null);
                    return;
                  }
                  E === 0 || ne ? j(we.key) : (ne = !0, we.advance(E));
                }, ae.onerror = function() {
                  F(ae.error);
                };
              } catch (we) {
                F(we);
              }
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function Pe(E) {
        var L = this, D = new c(function(P, j) {
          L.ready().then(function() {
            Oe(L._dbInfo, k, function(F, G) {
              if (F)
                return j(F);
              try {
                var Q = G.objectStore(L._dbInfo.storeName), ie = Q.openKeyCursor(), ne = [];
                ie.onsuccess = function() {
                  var ae = ie.result;
                  if (!ae) {
                    P(ne);
                    return;
                  }
                  ne.push(ae.key), ae.continue();
                }, ie.onerror = function() {
                  j(ie.error);
                };
              } catch (ae) {
                j(ae);
              }
            });
          }).catch(j);
        });
        return w(D, E), D;
      }
      function qe(E, L) {
        L = N.apply(this, arguments);
        var D = this.config();
        E = typeof E != "function" && E || {}, E.name || (E.name = E.name || D.name, E.storeName = E.storeName || D.storeName);
        var P = this, j;
        if (!E.name)
          j = c.reject("Invalid arguments");
        else {
          var F = E.name === D.name && P._dbInfo.db, G = F ? c.resolve(P._dbInfo.db) : te(E).then(function(Q) {
            var ie = y[E.name], ne = ie.forages;
            ie.db = Q;
            for (var ae = 0; ae < ne.length; ae++)
              ne[ae]._dbInfo.db = Q;
            return Q;
          });
          E.storeName ? j = G.then(function(Q) {
            if (Q.objectStoreNames.contains(E.storeName)) {
              var ie = Q.version + 1;
              z(E);
              var ne = y[E.name], ae = ne.forages;
              Q.close();
              for (var we = 0; we < ae.length; we++) {
                var ke = ae[we];
                ke._dbInfo.db = null, ke._dbInfo.version = ie;
              }
              var He = new c(function($e, ct) {
                var ut = u.open(E.name, ie);
                ut.onerror = function(Rt) {
                  var Cr = ut.result;
                  Cr.close(), ct(Rt);
                }, ut.onupgradeneeded = function() {
                  var Rt = ut.result;
                  Rt.deleteObjectStore(E.storeName);
                }, ut.onsuccess = function() {
                  var Rt = ut.result;
                  Rt.close(), $e(Rt);
                };
              });
              return He.then(function($e) {
                ne.db = $e;
                for (var ct = 0; ct < ae.length; ct++) {
                  var ut = ae[ct];
                  ut._dbInfo.db = $e, M(ut._dbInfo);
                }
              }).catch(function($e) {
                throw (Y(E, $e) || c.resolve()).catch(function() {
                }), $e;
              });
            }
          }) : j = G.then(function(Q) {
            z(E);
            var ie = y[E.name], ne = ie.forages;
            Q.close();
            for (var ae = 0; ae < ne.length; ae++) {
              var we = ne[ae];
              we._dbInfo.db = null;
            }
            var ke = new c(function(He, $e) {
              var ct = u.deleteDatabase(E.name);
              ct.onerror = function() {
                var ut = ct.result;
                ut && ut.close(), $e(ct.error);
              }, ct.onblocked = function() {
                console.warn('dropInstance blocked for database "' + E.name + '" until all open connections are closed');
              }, ct.onsuccess = function() {
                var ut = ct.result;
                ut && ut.close(), He(ut);
              };
            });
            return ke.then(function(He) {
              ie.db = He;
              for (var $e = 0; $e < ne.length; $e++) {
                var ct = ne[$e];
                M(ct._dbInfo);
              }
            }).catch(function(He) {
              throw (Y(E, He) || c.resolve()).catch(function() {
              }), He;
            });
          });
        }
        return w(j, L), j;
      }
      var Ie = {
        _driver: "asyncStorage",
        _initStorage: Le,
        _support: h(),
        iterate: it,
        getItem: Ne,
        setItem: Ge,
        removeItem: Ue,
        clear: De,
        length: Xe,
        key: Me,
        keys: Pe,
        dropInstance: qe
      };
      function nt() {
        return typeof openDatabase == "function";
      }
      var We = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tt = "~~local_forage_type~", Re = /^~~local_forage_type~([^~]+)~/, Qe = "__lfsc__:", at = Qe.length, ht = "arbf", ot = "blob", ze = "si08", Ae = "ui08", dt = "uic8", _t = "si16", gt = "si32", Ke = "ur16", Tt = "ui32", mt = "fl32", ft = "fl64", yt = at + ht.length, Et = Object.prototype.toString;
      function rt(E) {
        var L = E.length * 0.75, D = E.length, P, j = 0, F, G, Q, ie;
        E[E.length - 1] === "=" && (L--, E[E.length - 2] === "=" && L--);
        var ne = new ArrayBuffer(L), ae = new Uint8Array(ne);
        for (P = 0; P < D; P += 4)
          F = We.indexOf(E[P]), G = We.indexOf(E[P + 1]), Q = We.indexOf(E[P + 2]), ie = We.indexOf(E[P + 3]), ae[j++] = F << 2 | G >> 4, ae[j++] = (G & 15) << 4 | Q >> 2, ae[j++] = (Q & 3) << 6 | ie & 63;
        return ne;
      }
      function pt(E) {
        var L = new Uint8Array(E), D = "", P;
        for (P = 0; P < L.length; P += 3)
          D += We[L[P] >> 2], D += We[(L[P] & 3) << 4 | L[P + 1] >> 4], D += We[(L[P + 1] & 15) << 2 | L[P + 2] >> 6], D += We[L[P + 2] & 63];
        return L.length % 3 === 2 ? D = D.substring(0, D.length - 1) + "=" : L.length % 3 === 1 && (D = D.substring(0, D.length - 2) + "=="), D;
      }
      function Nt(E, L) {
        var D = "";
        if (E && (D = Et.call(E)), E && (D === "[object ArrayBuffer]" || E.buffer && Et.call(E.buffer) === "[object ArrayBuffer]")) {
          var P, j = Qe;
          E instanceof ArrayBuffer ? (P = E, j += ht) : (P = E.buffer, D === "[object Int8Array]" ? j += ze : D === "[object Uint8Array]" ? j += Ae : D === "[object Uint8ClampedArray]" ? j += dt : D === "[object Int16Array]" ? j += _t : D === "[object Uint16Array]" ? j += Ke : D === "[object Int32Array]" ? j += gt : D === "[object Uint32Array]" ? j += Tt : D === "[object Float32Array]" ? j += mt : D === "[object Float64Array]" ? j += ft : L(new Error("Failed to get type for BinaryArray"))), L(j + pt(P));
        } else if (D === "[object Blob]") {
          var F = new FileReader();
          F.onload = function() {
            var G = tt + E.type + "~" + pt(this.result);
            L(Qe + ot + G);
          }, F.readAsArrayBuffer(E);
        } else
          try {
            L(JSON.stringify(E));
          } catch (G) {
            console.error("Couldn't convert value into a JSON string: ", E), L(null, G);
          }
      }
      function x(E) {
        if (E.substring(0, at) !== Qe)
          return JSON.parse(E);
        var L = E.substring(yt), D = E.substring(at, yt), P;
        if (D === ot && Re.test(L)) {
          var j = L.match(Re);
          P = j[1], L = L.substring(j[0].length);
        }
        var F = rt(L);
        switch (D) {
          case ht:
            return F;
          case ot:
            return f([F], { type: P });
          case ze:
            return new Int8Array(F);
          case Ae:
            return new Uint8Array(F);
          case dt:
            return new Uint8ClampedArray(F);
          case _t:
            return new Int16Array(F);
          case Ke:
            return new Uint16Array(F);
          case gt:
            return new Int32Array(F);
          case Tt:
            return new Uint32Array(F);
          case mt:
            return new Float32Array(F);
          case ft:
            return new Float64Array(F);
          default:
            throw new Error("Unkown type: " + D);
        }
      }
      var J = {
        serialize: Nt,
        deserialize: x,
        stringToBuffer: rt,
        bufferToString: pt
      };
      function ee(E, L, D, P) {
        E.executeSql("CREATE TABLE IF NOT EXISTS " + L.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], D, P);
      }
      function ue(E) {
        var L = this, D = {
          db: null
        };
        if (E)
          for (var P in E)
            D[P] = typeof E[P] != "string" ? E[P].toString() : E[P];
        var j = new c(function(F, G) {
          try {
            D.db = openDatabase(D.name, String(D.version), D.description, D.size);
          } catch (Q) {
            return G(Q);
          }
          D.db.transaction(function(Q) {
            ee(Q, D, function() {
              L._dbInfo = D, F();
            }, function(ie, ne) {
              G(ne);
            });
          }, G);
        });
        return D.serializer = J, j;
      }
      function B(E, L, D, P, j, F) {
        E.executeSql(D, P, j, function(G, Q) {
          Q.code === Q.SYNTAX_ERR ? G.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [L.storeName], function(ie, ne) {
            ne.rows.length ? F(ie, Q) : ee(ie, L, function() {
              ie.executeSql(D, P, j, F);
            }, F);
          }, F) : F(G, Q);
        }, F);
      }
      function $(E, L) {
        var D = this;
        E = S(E);
        var P = new c(function(j, F) {
          D.ready().then(function() {
            var G = D._dbInfo;
            G.db.transaction(function(Q) {
              B(Q, G, "SELECT * FROM " + G.storeName + " WHERE key = ? LIMIT 1", [E], function(ie, ne) {
                var ae = ne.rows.length ? ne.rows.item(0).value : null;
                ae && (ae = G.serializer.deserialize(ae)), j(ae);
              }, function(ie, ne) {
                F(ne);
              });
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function g(E, L) {
        var D = this, P = new c(function(j, F) {
          D.ready().then(function() {
            var G = D._dbInfo;
            G.db.transaction(function(Q) {
              B(Q, G, "SELECT * FROM " + G.storeName, [], function(ie, ne) {
                for (var ae = ne.rows, we = ae.length, ke = 0; ke < we; ke++) {
                  var He = ae.item(ke), $e = He.value;
                  if ($e && ($e = G.serializer.deserialize($e)), $e = E($e, He.key, ke + 1), $e !== void 0) {
                    j($e);
                    return;
                  }
                }
                j();
              }, function(ie, ne) {
                F(ne);
              });
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function X(E, L, D, P) {
        var j = this;
        E = S(E);
        var F = new c(function(G, Q) {
          j.ready().then(function() {
            L === void 0 && (L = null);
            var ie = L, ne = j._dbInfo;
            ne.serializer.serialize(L, function(ae, we) {
              we ? Q(we) : ne.db.transaction(function(ke) {
                B(ke, ne, "INSERT OR REPLACE INTO " + ne.storeName + " (key, value) VALUES (?, ?)", [E, ae], function() {
                  G(ie);
                }, function(He, $e) {
                  Q($e);
                });
              }, function(ke) {
                if (ke.code === ke.QUOTA_ERR) {
                  if (P > 0) {
                    G(X.apply(j, [E, ie, D, P - 1]));
                    return;
                  }
                  Q(ke);
                }
              });
            });
          }).catch(Q);
        });
        return w(F, D), F;
      }
      function _e(E, L, D) {
        return X.apply(this, [E, L, D, 1]);
      }
      function l(E, L) {
        var D = this;
        E = S(E);
        var P = new c(function(j, F) {
          D.ready().then(function() {
            var G = D._dbInfo;
            G.db.transaction(function(Q) {
              B(Q, G, "DELETE FROM " + G.storeName + " WHERE key = ?", [E], function() {
                j();
              }, function(ie, ne) {
                F(ne);
              });
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function V(E) {
        var L = this, D = new c(function(P, j) {
          L.ready().then(function() {
            var F = L._dbInfo;
            F.db.transaction(function(G) {
              B(G, F, "DELETE FROM " + F.storeName, [], function() {
                P();
              }, function(Q, ie) {
                j(ie);
              });
            });
          }).catch(j);
        });
        return w(D, E), D;
      }
      function H(E) {
        var L = this, D = new c(function(P, j) {
          L.ready().then(function() {
            var F = L._dbInfo;
            F.db.transaction(function(G) {
              B(G, F, "SELECT COUNT(key) as c FROM " + F.storeName, [], function(Q, ie) {
                var ne = ie.rows.item(0).c;
                P(ne);
              }, function(Q, ie) {
                j(ie);
              });
            });
          }).catch(j);
        });
        return w(D, E), D;
      }
      function _(E, L) {
        var D = this, P = new c(function(j, F) {
          D.ready().then(function() {
            var G = D._dbInfo;
            G.db.transaction(function(Q) {
              B(Q, G, "SELECT key FROM " + G.storeName + " WHERE id = ? LIMIT 1", [E + 1], function(ie, ne) {
                var ae = ne.rows.length ? ne.rows.item(0).key : null;
                j(ae);
              }, function(ie, ne) {
                F(ne);
              });
            });
          }).catch(F);
        });
        return w(P, L), P;
      }
      function O(E) {
        var L = this, D = new c(function(P, j) {
          L.ready().then(function() {
            var F = L._dbInfo;
            F.db.transaction(function(G) {
              B(G, F, "SELECT key FROM " + F.storeName, [], function(Q, ie) {
                for (var ne = [], ae = 0; ae < ie.rows.length; ae++)
                  ne.push(ie.rows.item(ae).key);
                P(ne);
              }, function(Q, ie) {
                j(ie);
              });
            });
          }).catch(j);
        });
        return w(D, E), D;
      }
      function q(E) {
        return new c(function(L, D) {
          E.transaction(function(P) {
            P.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(j, F) {
              for (var G = [], Q = 0; Q < F.rows.length; Q++)
                G.push(F.rows.item(Q).name);
              L({
                db: E,
                storeNames: G
              });
            }, function(j, F) {
              D(F);
            });
          }, function(P) {
            D(P);
          });
        });
      }
      function me(E, L) {
        L = N.apply(this, arguments);
        var D = this.config();
        E = typeof E != "function" && E || {}, E.name || (E.name = E.name || D.name, E.storeName = E.storeName || D.storeName);
        var P = this, j;
        return E.name ? j = new c(function(F) {
          var G;
          E.name === D.name ? G = P._dbInfo.db : G = openDatabase(E.name, "", "", 0), E.storeName ? F({
            db: G,
            storeNames: [E.storeName]
          }) : F(q(G));
        }).then(function(F) {
          return new c(function(G, Q) {
            F.db.transaction(function(ie) {
              function ne(He) {
                return new c(function($e, ct) {
                  ie.executeSql("DROP TABLE IF EXISTS " + He, [], function() {
                    $e();
                  }, function(ut, Rt) {
                    ct(Rt);
                  });
                });
              }
              for (var ae = [], we = 0, ke = F.storeNames.length; we < ke; we++)
                ae.push(ne(F.storeNames[we]));
              c.all(ae).then(function() {
                G();
              }).catch(function(He) {
                Q(He);
              });
            }, function(ie) {
              Q(ie);
            });
          });
        }) : j = c.reject("Invalid arguments"), w(j, L), j;
      }
      var oe = {
        _driver: "webSQLStorage",
        _initStorage: ue,
        _support: nt(),
        iterate: g,
        getItem: $,
        setItem: _e,
        removeItem: l,
        clear: V,
        length: H,
        key: _,
        keys: O,
        dropInstance: me
      };
      function he() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Te(E, L) {
        var D = E.name + "/";
        return E.storeName !== L.storeName && (D += E.storeName + "/"), D;
      }
      function xt() {
        var E = "_localforage_support_test";
        try {
          return localStorage.setItem(E, !0), localStorage.removeItem(E), !1;
        } catch {
          return !0;
        }
      }
      function Ye() {
        return !xt() || localStorage.length > 0;
      }
      function d(E) {
        var L = this, D = {};
        if (E)
          for (var P in E)
            D[P] = E[P];
        return D.keyPrefix = Te(E, L._defaultConfig), Ye() ? (L._dbInfo = D, D.serializer = J, c.resolve()) : c.reject();
      }
      function I(E) {
        var L = this, D = L.ready().then(function() {
          for (var P = L._dbInfo.keyPrefix, j = localStorage.length - 1; j >= 0; j--) {
            var F = localStorage.key(j);
            F.indexOf(P) === 0 && localStorage.removeItem(F);
          }
        });
        return w(D, E), D;
      }
      function U(E, L) {
        var D = this;
        E = S(E);
        var P = D.ready().then(function() {
          var j = D._dbInfo, F = localStorage.getItem(j.keyPrefix + E);
          return F && (F = j.serializer.deserialize(F)), F;
        });
        return w(P, L), P;
      }
      function K(E, L) {
        var D = this, P = D.ready().then(function() {
          for (var j = D._dbInfo, F = j.keyPrefix, G = F.length, Q = localStorage.length, ie = 1, ne = 0; ne < Q; ne++) {
            var ae = localStorage.key(ne);
            if (ae.indexOf(F) === 0) {
              var we = localStorage.getItem(ae);
              if (we && (we = j.serializer.deserialize(we)), we = E(we, ae.substring(G), ie++), we !== void 0)
                return we;
            }
          }
        });
        return w(P, L), P;
      }
      function ce(E, L) {
        var D = this, P = D.ready().then(function() {
          var j = D._dbInfo, F;
          try {
            F = localStorage.key(E);
          } catch {
            F = null;
          }
          return F && (F = F.substring(j.keyPrefix.length)), F;
        });
        return w(P, L), P;
      }
      function ye(E) {
        var L = this, D = L.ready().then(function() {
          for (var P = L._dbInfo, j = localStorage.length, F = [], G = 0; G < j; G++) {
            var Q = localStorage.key(G);
            Q.indexOf(P.keyPrefix) === 0 && F.push(Q.substring(P.keyPrefix.length));
          }
          return F;
        });
        return w(D, E), D;
      }
      function re(E) {
        var L = this, D = L.keys().then(function(P) {
          return P.length;
        });
        return w(D, E), D;
      }
      function se(E, L) {
        var D = this;
        E = S(E);
        var P = D.ready().then(function() {
          var j = D._dbInfo;
          localStorage.removeItem(j.keyPrefix + E);
        });
        return w(P, L), P;
      }
      function Ce(E, L, D) {
        var P = this;
        E = S(E);
        var j = P.ready().then(function() {
          L === void 0 && (L = null);
          var F = L;
          return new c(function(G, Q) {
            var ie = P._dbInfo;
            ie.serializer.serialize(L, function(ne, ae) {
              if (ae)
                Q(ae);
              else
                try {
                  localStorage.setItem(ie.keyPrefix + E, ne), G(F);
                } catch (we) {
                  (we.name === "QuotaExceededError" || we.name === "NS_ERROR_DOM_QUOTA_REACHED") && Q(we), Q(we);
                }
            });
          });
        });
        return w(j, D), j;
      }
      function Ee(E, L) {
        if (L = N.apply(this, arguments), E = typeof E != "function" && E || {}, !E.name) {
          var D = this.config();
          E.name = E.name || D.name, E.storeName = E.storeName || D.storeName;
        }
        var P = this, j;
        return E.name ? j = new c(function(F) {
          E.storeName ? F(Te(E, P._defaultConfig)) : F(E.name + "/");
        }).then(function(F) {
          for (var G = localStorage.length - 1; G >= 0; G--) {
            var Q = localStorage.key(G);
            Q.indexOf(F) === 0 && localStorage.removeItem(Q);
          }
        }) : j = c.reject("Invalid arguments"), w(j, L), j;
      }
      var xe = {
        _driver: "localStorageWrapper",
        _initStorage: d,
        _support: he(),
        iterate: K,
        getItem: U,
        setItem: Ce,
        removeItem: se,
        clear: I,
        length: re,
        key: ce,
        keys: ye,
        dropInstance: Ee
      }, Ve = function(L, D) {
        return L === D || typeof L == "number" && typeof D == "number" && isNaN(L) && isNaN(D);
      }, Ct = function(L, D) {
        for (var P = L.length, j = 0; j < P; ) {
          if (Ve(L[j], D))
            return !0;
          j++;
        }
        return !1;
      }, Jt = Array.isArray || function(E) {
        return Object.prototype.toString.call(E) === "[object Array]";
      }, et = {}, En = {}, lr = {
        INDEXEDDB: Ie,
        WEBSQL: oe,
        LOCALSTORAGE: xe
      }, Na = [lr.INDEXEDDB._driver, lr.WEBSQL._driver, lr.LOCALSTORAGE._driver], $r = ["dropInstance"], Di = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat($r), Ra = {
        description: "",
        driver: Na.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Oa(E, L) {
        E[L] = function() {
          var D = arguments;
          return E.ready().then(function() {
            return E[L].apply(E, D);
          });
        };
      }
      function Ai() {
        for (var E = 1; E < arguments.length; E++) {
          var L = arguments[E];
          if (L)
            for (var D in L)
              L.hasOwnProperty(D) && (Jt(L[D]) ? arguments[0][D] = L[D].slice() : arguments[0][D] = L[D]);
        }
        return arguments[0];
      }
      var Ia = function() {
        function E(L) {
          a(this, E);
          for (var D in lr)
            if (lr.hasOwnProperty(D)) {
              var P = lr[D], j = P._driver;
              this[D] = j, et[j] || this.defineDriver(P);
            }
          this._defaultConfig = Ai({}, Ra), this._config = Ai({}, this._defaultConfig, L), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return E.prototype.config = function(D) {
          if ((typeof D > "u" ? "undefined" : s(D)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var P in D) {
              if (P === "storeName" && (D[P] = D[P].replace(/\W/g, "_")), P === "version" && typeof D[P] != "number")
                return new Error("Database version must be a number.");
              this._config[P] = D[P];
            }
            return "driver" in D && D.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof D == "string" ? this._config[D] : this._config;
        }, E.prototype.defineDriver = function(D, P, j) {
          var F = new c(function(G, Q) {
            try {
              var ie = D._driver, ne = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!D._driver) {
                Q(ne);
                return;
              }
              for (var ae = Di.concat("_initStorage"), we = 0, ke = ae.length; we < ke; we++) {
                var He = ae[we], $e = !Ct($r, He);
                if (($e || D[He]) && typeof D[He] != "function") {
                  Q(ne);
                  return;
                }
              }
              var ct = function() {
                for (var Cr = function(Fa) {
                  return function() {
                    var Pa = new Error("Method " + Fa + " is not implemented by the current driver"), xn = c.reject(Pa);
                    return w(xn, arguments[arguments.length - 1]), xn;
                  };
                }, Si = 0, Ba = $r.length; Si < Ba; Si++) {
                  var Ti = $r[Si];
                  D[Ti] || (D[Ti] = Cr(Ti));
                }
              };
              ct();
              var ut = function(Cr) {
                et[ie] && console.info("Redefining LocalForage driver: " + ie), et[ie] = D, En[ie] = Cr, G();
              };
              "_support" in D ? D._support && typeof D._support == "function" ? D._support().then(ut, Q) : ut(!!D._support) : ut(!0);
            } catch (Rt) {
              Q(Rt);
            }
          });
          return m(F, P, j), F;
        }, E.prototype.driver = function() {
          return this._driver || null;
        }, E.prototype.getDriver = function(D, P, j) {
          var F = et[D] ? c.resolve(et[D]) : c.reject(new Error("Driver not found."));
          return m(F, P, j), F;
        }, E.prototype.getSerializer = function(D) {
          var P = c.resolve(J);
          return m(P, D), P;
        }, E.prototype.ready = function(D) {
          var P = this, j = P._driverSet.then(function() {
            return P._ready === null && (P._ready = P._initDriver()), P._ready;
          });
          return m(j, D, D), j;
        }, E.prototype.setDriver = function(D, P, j) {
          var F = this;
          Jt(D) || (D = [D]);
          var G = this._getSupportedDrivers(D);
          function Q() {
            F._config.driver = F.driver();
          }
          function ie(we) {
            return F._extend(we), Q(), F._ready = F._initStorage(F._config), F._ready;
          }
          function ne(we) {
            return function() {
              var ke = 0;
              function He() {
                for (; ke < we.length; ) {
                  var $e = we[ke];
                  return ke++, F._dbInfo = null, F._ready = null, F.getDriver($e).then(ie).catch(He);
                }
                Q();
                var ct = new Error("No available storage method found.");
                return F._driverSet = c.reject(ct), F._driverSet;
              }
              return He();
            };
          }
          var ae = this._driverSet !== null ? this._driverSet.catch(function() {
            return c.resolve();
          }) : c.resolve();
          return this._driverSet = ae.then(function() {
            var we = G[0];
            return F._dbInfo = null, F._ready = null, F.getDriver(we).then(function(ke) {
              F._driver = ke._driver, Q(), F._wrapLibraryMethodsWithReady(), F._initDriver = ne(G);
            });
          }).catch(function() {
            Q();
            var we = new Error("No available storage method found.");
            return F._driverSet = c.reject(we), F._driverSet;
          }), m(this._driverSet, P, j), this._driverSet;
        }, E.prototype.supports = function(D) {
          return !!En[D];
        }, E.prototype._extend = function(D) {
          Ai(this, D);
        }, E.prototype._getSupportedDrivers = function(D) {
          for (var P = [], j = 0, F = D.length; j < F; j++) {
            var G = D[j];
            this.supports(G) && P.push(G);
          }
          return P;
        }, E.prototype._wrapLibraryMethodsWithReady = function() {
          for (var D = 0, P = Di.length; D < P; D++)
            Oa(this, Di[D]);
        }, E.prototype.createInstance = function(D) {
          return new E(D);
        }, E;
      }(), La = new Ia();
      r.exports = La;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(wa);
var Wl = wa.exports;
const is = /* @__PURE__ */ or(Wl);
class _a {
  constructor(e, t, r) {
    this.urlCache = {}, this.storage = void 0, this.name = e, this.requester = t || zr, this.resolver = r, this.online = !0, this.checkRequirements(), this.addListeners();
  }
  /**
   * Checks to see if localForage exists in global namspace,
   * Requires localForage if it isn't there
   * @private
   */
  checkRequirements() {
    try {
      let e;
      typeof is > "u" && (e = is), this.storage = e.createInstance({
        name: this.name
      });
    } catch {
      throw new Error("localForage lib not loaded");
    }
  }
  /**
   * Add online and offline event listeners
   * @private
   */
  addListeners() {
    this._status = this.status.bind(this), window.addEventListener("online", this._status), window.addEventListener("offline", this._status);
  }
  /**
   * Remove online and offline event listeners
   * @private
   */
  removeListeners() {
    window.removeEventListener("online", this._status), window.removeEventListener("offline", this._status), this._status = void 0;
  }
  /**
   * Update the online / offline status
   * @private
   */
  status(e) {
    let t = navigator.onLine;
    this.online = t, t ? this.emit("online", this) : this.emit("offline", this);
  }
  /**
   * Add all of a book resources to the store
   * @param  {Resources} resources  book resources
   * @param  {boolean} [force] force resaving resources
   * @return {Promise<object>} store objects
   */
  add(e, t) {
    let r = e.resources.map((i) => {
      let { href: s } = i, a = this.resolver(s), o = window.encodeURIComponent(a);
      return this.storage.getItem(o).then((u) => !u || t ? this.requester(a, "binary").then((h) => this.storage.setItem(o, h)) : u);
    });
    return Promise.all(r);
  }
  /**
   * Put binary data from a url to storage
   * @param  {string} url  a url to request from storage
   * @param  {boolean} [withCredentials]
   * @param  {object} [headers]
   * @return {Promise<Blob>}
   */
  put(e, t, r) {
    let i = window.encodeURIComponent(e);
    return this.storage.getItem(i).then((s) => s || this.requester(e, "binary", t, r).then((a) => this.storage.setItem(i, a)));
  }
  /**
   * Request a url
   * @param  {string} url  a url to request from storage
   * @param  {string} [type] specify the type of the returned result
   * @param  {boolean} [withCredentials]
   * @param  {object} [headers]
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  request(e, t, r, i) {
    return this.online ? this.requester(e, t, r, i).then((s) => (this.put(e), s)) : this.retrieve(e, t);
  }
  /**
   * Request a url from storage
   * @param  {string} url  a url to request from storage
   * @param  {string} [type] specify the type of the returned result
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  retrieve(e, t) {
    new Be();
    var r, i = new Xt(e);
    return t || (t = i.extension), t == "blob" ? r = this.getBlob(e) : r = this.getText(e), r.then((s) => {
      var a = new Be(), o;
      return s ? (o = this.handleResponse(s, t), a.resolve(o)) : a.reject({
        message: "File not found in storage: " + e,
        stack: new Error().stack
      }), a.promise;
    });
  }
  /**
   * Handle the response from request
   * @private
   * @param  {any} response
   * @param  {string} [type]
   * @return {any} the parsed result
   */
  handleResponse(e, t) {
    var r;
    return t == "json" ? r = JSON.parse(e) : Pr(t) ? r = Wt(e, "text/xml") : t == "xhtml" ? r = Wt(e, "application/xhtml+xml") : t == "html" || t == "htm" ? r = Wt(e, "text/html") : r = e, r;
  }
  /**
   * Get a Blob from Storage by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {Blob}
   */
  getBlob(e, t) {
    let r = window.encodeURIComponent(e);
    return this.storage.getItem(r).then(function(i) {
      if (i)
        return t = t || br.lookup(e), new Blob([i], { type: t });
    });
  }
  /**
   * Get Text from Storage by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string}
   */
  getText(e, t) {
    let r = window.encodeURIComponent(e);
    return t = t || br.lookup(e), this.storage.getItem(r).then(function(i) {
      var s = new Be(), a = new FileReader(), o;
      if (i)
        return o = new Blob([i], { type: t }), a.addEventListener("loadend", () => {
          s.resolve(a.result);
        }), a.readAsText(o, t), s.promise;
    });
  }
  /**
   * Get a base64 encoded result from Storage by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string} base64 encoded
   */
  getBase64(e, t) {
    let r = window.encodeURIComponent(e);
    return t = t || br.lookup(e), this.storage.getItem(r).then((i) => {
      var s = new Be(), a = new FileReader(), o;
      if (i)
        return o = new Blob([i], { type: t }), a.addEventListener("loadend", () => {
          s.resolve(a.result);
        }), a.readAsDataURL(o, t), s.promise;
    });
  }
  /**
   * Create a Url from a stored item
   * @param  {string} url
   * @param  {object} [options.base64] use base64 encoding or blob url
   * @return {Promise} url promise with Url string
   */
  createUrl(e, t) {
    var r = new Be(), i = window.URL || window.webkitURL || window.mozURL, s, a, o = t && t.base64;
    return e in this.urlCache ? (r.resolve(this.urlCache[e]), r.promise) : (o ? (a = this.getBase64(e), a && a.then((function(u) {
      this.urlCache[e] = u, r.resolve(u);
    }).bind(this))) : (a = this.getBlob(e), a && a.then((function(u) {
      s = i.createObjectURL(u), this.urlCache[e] = s, r.resolve(s);
    }).bind(this))), a || r.reject({
      message: "File not found in storage: " + e,
      stack: new Error().stack
    }), r.promise);
  }
  /**
   * Revoke Temp Url for a archive item
   * @param  {string} url url of the item in the store
   */
  revokeUrl(e) {
    var t = window.URL || window.webkitURL || window.mozURL, r = this.urlCache[e];
    r && t.revokeObjectURL(r);
  }
  destroy() {
    var e = window.URL || window.webkitURL || window.mozURL;
    for (let t in this.urlCache)
      e.revokeObjectURL(t);
    this.urlCache = {}, this.removeListeners();
  }
}
qt(_a.prototype);
class Mi {
  constructor(e) {
    this.interactive = "", this.fixedLayout = "", this.openToSpread = "", this.orientationLock = "", e && this.parse(e);
  }
  /**
   * Parse XML
   * @param  {document} displayOptionsDocument XML
   * @return {DisplayOptions} self
   */
  parse(e) {
    if (!e)
      return this;
    const t = Je(e, "display_options");
    return t ? (Yt(t, "option").forEach((i) => {
      let s = "";
      switch (i.childNodes.length && (s = i.childNodes[0].nodeValue), i.attributes.name.value) {
        case "interactive":
          this.interactive = s;
          break;
        case "fixed-layout":
          this.fixedLayout = s;
          break;
        case "open-to-spread":
          this.openToSpread = s;
          break;
        case "orientation-lock":
          this.orientationLock = s;
          break;
      }
    }), this) : this;
  }
  destroy() {
    this.interactive = void 0, this.fixedLayout = void 0, this.openToSpread = void 0, this.orientationLock = void 0;
  }
}
const ns = "META-INF/container.xml", ql = "META-INF/com.apple.ibooks.display-options.xml", Lt = {
  BINARY: "binary",
  BASE64: "base64",
  EPUB: "epub",
  OPF: "opf",
  MANIFEST: "json",
  DIRECTORY: "directory"
};
class bn {
  constructor(e, t) {
    typeof t > "u" && typeof e != "string" && !(e instanceof Blob) && !(e instanceof ArrayBuffer) && (t = e, e = void 0), this.settings = bt(this.settings || {}, {
      requestMethod: void 0,
      requestCredentials: void 0,
      requestHeaders: void 0,
      encoding: void 0,
      replacements: void 0,
      canonical: void 0,
      openAs: void 0,
      store: void 0
    }), bt(this.settings, t), this.opening = new Be(), this.opened = this.opening.promise, this.isOpen = !1, this.loading = {
      manifest: new Be(),
      spine: new Be(),
      metadata: new Be(),
      cover: new Be(),
      navigation: new Be(),
      pageList: new Be(),
      resources: new Be(),
      displayOptions: new Be()
    }, this.loaded = {
      manifest: this.loading.manifest.promise,
      spine: this.loading.spine.promise,
      metadata: this.loading.metadata.promise,
      cover: this.loading.cover.promise,
      navigation: this.loading.navigation.promise,
      pageList: this.loading.pageList.promise,
      resources: this.loading.resources.promise,
      displayOptions: this.loading.displayOptions.promise
    }, this.ready = Promise.all([
      this.loaded.manifest,
      this.loaded.spine,
      this.loaded.metadata,
      this.loaded.cover,
      this.loaded.navigation,
      this.loaded.resources,
      this.loaded.displayOptions
    ]), this.isRendered = !1, this.request = this.settings.requestMethod || zr, this.spine = new uu(), this.locations = new ra(this.spine, this.load.bind(this)), this.navigation = void 0, this.pageList = void 0, this.url = void 0, this.path = void 0, this.archived = !1, this.archive = void 0, this.storage = void 0, this.resources = void 0, this.rendition = void 0, this.container = void 0, this.packaging = void 0, this.displayOptions = void 0, this.settings.store && this.store(this.settings.store), e && this.open(e, this.settings.openAs).catch((r) => {
      var i = new Error("Cannot load book at " + e);
      this.emit(le.BOOK.OPEN_FAILED, i);
    });
  }
  /**
   * Open a epub or url
   * @param {string | ArrayBuffer} input Url, Path or ArrayBuffer
   * @param {string} [what="binary", "base64", "epub", "opf", "json", "directory"] force opening as a certain type
   * @returns {Promise} of when the book has been loaded
   * @example book.open("/path/to/book.epub")
   */
  open(e, t) {
    var r, i = t || this.determineType(e);
    return i === Lt.BINARY ? (this.archived = !0, this.url = new Bt("/", ""), r = this.openEpub(e)) : i === Lt.BASE64 ? (this.archived = !0, this.url = new Bt("/", ""), r = this.openEpub(e, i)) : i === Lt.EPUB ? (this.archived = !0, this.url = new Bt("/", ""), r = this.request(e, "binary", this.settings.requestCredentials, this.settings.requestHeaders).then(this.openEpub.bind(this))) : i == Lt.OPF ? (this.url = new Bt(e), r = this.openPackaging(this.url.Path.toString())) : i == Lt.MANIFEST ? (this.url = new Bt(e), r = this.openManifest(this.url.Path.toString())) : (this.url = new Bt(e), r = this.openContainer(ns).then(this.openPackaging.bind(this))), r;
  }
  /**
   * Open an archived epub
   * @private
   * @param  {binary} data
   * @param  {string} [encoding]
   * @return {Promise}
   */
  openEpub(e, t) {
    return this.unarchive(e, t || this.settings.encoding).then(() => this.openContainer(ns)).then((r) => this.openPackaging(r));
  }
  /**
   * Open the epub container
   * @private
   * @param  {string} url
   * @return {string} packagePath
   */
  openContainer(e) {
    return this.load(e).then((t) => (this.container = new lu(t), this.resolve(this.container.packagePath)));
  }
  /**
   * Open the Open Packaging Format Xml
   * @private
   * @param  {string} url
   * @return {Promise}
   */
  openPackaging(e) {
    return this.path = new Xt(e), this.load(e).then((t) => (this.packaging = new Yn(t), this.unpack(this.packaging)));
  }
  /**
   * Open the manifest JSON
   * @private
   * @param  {string} url
   * @return {Promise}
   */
  openManifest(e) {
    return this.path = new Xt(e), this.load(e).then((t) => (this.packaging = new Yn(), this.packaging.load(t), this.unpack(this.packaging)));
  }
  /**
   * Load a resource from the Book
   * @param  {string} path path to the resource to load
   * @return {Promise}     returns a promise with the requested resource
   */
  load(e) {
    var t = this.resolve(e);
    return this.archived ? this.archive.request(t) : this.request(t, null, this.settings.requestCredentials, this.settings.requestHeaders);
  }
  /**
   * Resolve a path to it's absolute position in the Book
   * @param  {string} path
   * @param  {boolean} [absolute] force resolving the full URL
   * @return {string}          the resolved path string
   */
  resolve(e, t) {
    if (e) {
      var r = e, i = e.indexOf("://") > -1;
      return i ? e : (this.path && (r = this.path.resolve(e)), t != !1 && this.url && (r = this.url.resolve(r)), r);
    }
  }
  /**
   * Get a canonical link to a path
   * @param  {string} path
   * @return {string} the canonical path string
   */
  canonical(e) {
    var t = e;
    return e ? (this.settings.canonical ? t = this.settings.canonical(e) : t = this.resolve(e, !0), t) : "";
  }
  /**
   * Determine the type of they input passed to open
   * @private
   * @param  {string} input
   * @return {string}  binary | directory | epub | opf
   */
  determineType(e) {
    var t, r, i;
    if (this.settings.encoding === "base64")
      return Lt.BASE64;
    if (typeof e != "string")
      return Lt.BINARY;
    if (t = new Bt(e), r = t.path(), i = r.extension, i && (i = i.replace(/\?.*$/, "")), !i)
      return Lt.DIRECTORY;
    if (i === "epub")
      return Lt.EPUB;
    if (i === "opf")
      return Lt.OPF;
    if (i === "json")
      return Lt.MANIFEST;
  }
  /**
   * unpack the contents of the Books packaging
   * @private
   * @param {Packaging} packaging object
   */
  unpack(e) {
    this.package = e, this.packaging.metadata.layout === "" ? this.load(this.url.resolve(ql)).then((t) => {
      this.displayOptions = new Mi(t), this.loading.displayOptions.resolve(this.displayOptions);
    }).catch((t) => {
      this.displayOptions = new Mi(), this.loading.displayOptions.resolve(this.displayOptions);
    }) : (this.displayOptions = new Mi(), this.loading.displayOptions.resolve(this.displayOptions)), this.spine.unpack(this.packaging, this.resolve.bind(this), this.canonical.bind(this)), this.resources = new du(this.packaging.manifest, {
      archive: this.archive,
      resolver: this.resolve.bind(this),
      request: this.request.bind(this),
      replacements: this.settings.replacements || (this.archived ? "blobUrl" : "base64")
    }), this.loadNavigation(this.packaging).then(() => {
      this.loading.navigation.resolve(this.navigation);
    }), this.packaging.coverPath && (this.cover = this.resolve(this.packaging.coverPath)), this.loading.manifest.resolve(this.packaging.manifest), this.loading.metadata.resolve(this.packaging.metadata), this.loading.spine.resolve(this.spine), this.loading.cover.resolve(this.cover), this.loading.resources.resolve(this.resources), this.loading.pageList.resolve(this.pageList), this.isOpen = !0, this.archived || this.settings.replacements && this.settings.replacements != "none" ? this.replacements().then(() => {
      this.loaded.displayOptions.then(() => {
        this.opening.resolve(this);
      });
    }).catch((t) => {
      console.error(t);
    }) : this.loaded.displayOptions.then(() => {
      this.opening.resolve(this);
    });
  }
  /**
   * Load Navigation and PageList from package
   * @private
   * @param {Packaging} packaging
   */
  loadNavigation(e) {
    let t = e.navPath || e.ncxPath, r = e.toc;
    return r ? new Promise((i, s) => {
      this.navigation = new Pi(r), e.pageList && (this.pageList = new zi(e.pageList)), i(this.navigation);
    }) : t ? this.load(t, "xml").then((i) => (this.navigation = new Pi(i), this.pageList = new zi(i), this.navigation)) : new Promise((i, s) => {
      this.navigation = new Pi(), this.pageList = new zi(), i(this.navigation);
    });
  }
  /**
   * Gets a Section of the Book from the Spine
   * Alias for `book.spine.get`
   * @param {string} target
   * @return {Section}
   */
  section(e) {
    return this.spine.get(e);
  }
  /**
   * Sugar to render a book to an element
   * @param  {element | string} element element or string to add a rendition to
   * @param  {object} [options]
   * @return {Rendition}
   */
  renderTo(e, t) {
    return this.rendition = new yn(this, t), this.rendition.attachTo(e), this.rendition;
  }
  /**
   * Set if request should use withCredentials
   * @param {boolean} credentials
   */
  setRequestCredentials(e) {
    this.settings.requestCredentials = e;
  }
  /**
   * Set headers request should use
   * @param {object} headers
   */
  setRequestHeaders(e) {
    this.settings.requestHeaders = e;
  }
  /**
   * Unarchive a zipped epub
   * @private
   * @param  {binary} input epub data
   * @param  {string} [encoding]
   * @return {Archive}
   */
  unarchive(e, t) {
    return this.archive = new Ul(), this.archive.open(e, t);
  }
  /**
   * Store the epubs contents
   * @private
   * @param  {binary} input epub data
   * @param  {string} [encoding]
   * @return {Store}
   */
  store(e) {
    let t = this.settings.replacements && this.settings.replacements !== "none", r = this.url, i = this.settings.requestMethod || zr.bind(this);
    return this.storage = new _a(e, i, this.resolve.bind(this)), this.request = this.storage.request.bind(this.storage), this.opened.then(() => {
      this.archived && (this.storage.requester = this.archive.request.bind(this.archive));
      let s = (a, o) => {
        o.output = this.resources.substitute(a, o.url);
      };
      this.resources.settings.replacements = t || "blobUrl", this.resources.replacements().then(() => this.resources.replaceCss()), this.storage.on("offline", () => {
        this.url = new Bt("/", ""), this.spine.hooks.serialize.register(s);
      }), this.storage.on("online", () => {
        this.url = r, this.spine.hooks.serialize.deregister(s);
      });
    }), this.storage;
  }
  /**
   * Get the cover url
   * @return {Promise<?string>} coverUrl
   */
  coverUrl() {
    return this.loaded.cover.then(() => this.cover ? this.archived ? this.archive.createUrl(this.cover) : this.cover : null);
  }
  /**
   * Load replacement urls
   * @private
   * @return {Promise} completed loading urls
   */
  replacements() {
    return this.spine.hooks.serialize.register((e, t) => {
      t.output = this.resources.substitute(e, t.url);
    }), this.resources.replacements().then(() => this.resources.replaceCss());
  }
  /**
   * Find a DOM Range for a given CFI Range
   * @param  {EpubCFI} cfiRange a epub cfi range
   * @return {Promise}
   */
  getRange(e) {
    var t = new Fe(e), r = this.spine.get(t.spinePos), i = this.load.bind(this);
    return r ? r.load(i).then(function(s) {
      var a = t.toRange(r.document);
      return a;
    }) : new Promise((s, a) => {
      a("CFI could not be found");
    });
  }
  /**
   * Generates the Book Key using the identifier in the manifest or other string provided
   * @param  {string} [identifier] to use instead of metadata identifier
   * @return {string} key
   */
  key(e) {
    var t = e || this.packaging.metadata.identifier || this.url.filename;
    return `epubjs:${wi}:${t}`;
  }
  /**
   * Destroy the Book and all associated objects
   */
  destroy() {
    this.opened = void 0, this.loading = void 0, this.loaded = void 0, this.ready = void 0, this.isOpen = !1, this.isRendered = !1, this.spine && this.spine.destroy(), this.locations && this.locations.destroy(), this.pageList && this.pageList.destroy(), this.archive && this.archive.destroy(), this.resources && this.resources.destroy(), this.container && this.container.destroy(), this.packaging && this.packaging.destroy(), this.rendition && this.rendition.destroy(), this.displayOptions && this.displayOptions.destroy(), this.spine = void 0, this.locations = void 0, this.pageList = void 0, this.archive = void 0, this.resources = void 0, this.container = void 0, this.packaging = void 0, this.rendition = void 0, this.navigation = void 0, this.url = void 0, this.path = void 0, this.archived = !1;
  }
}
qt(bn.prototype);
function ur(n, e) {
  return new bn(n, e);
}
ur.VERSION = wi;
typeof global < "u" && (global.EPUBJS_VERSION = wi);
ur.Book = bn;
ur.Rendition = yn;
ur.Contents = vn;
ur.CFI = Fe;
ur.utils = eu;
function ss(n) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      width: 50,
      height: 50,
      viewBox: "0 0 299 299",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: /* @__PURE__ */ W.jsx("path", { d: "M198.416 117.731L113.949 33.2638C112.599 31.8472 110.975 30.7194 109.176 29.9489C107.377 29.1783 105.441 28.781 103.484 28.781C101.527 28.781 99.5904 29.1783 97.7916 29.9489C95.9927 30.7194 94.369 31.8472 93.0189 33.2638C91.6023 34.6139 90.4746 36.2376 89.704 38.0364C88.9335 39.8353 88.5362 41.7718 88.5362 43.7288C88.5362 45.6857 88.9335 47.6223 89.704 49.4211C90.4746 51.22 91.6023 52.8436 93.0189 54.1938L177.486 138.661C178.903 140.011 180.031 141.635 180.801 143.434C181.572 145.233 181.969 147.169 181.969 149.126C181.969 151.083 181.572 153.02 180.801 154.819C180.031 156.617 178.903 158.241 177.486 159.591L92.2714 244.806C89.5421 247.591 88.0221 251.341 88.0418 255.24C88.0615 259.14 89.6193 262.874 92.3766 265.631C95.1339 268.388 98.868 269.946 102.767 269.966C106.667 269.986 110.416 268.466 113.201 265.736L197.669 181.269C215.609 163.329 215.609 134.924 198.416 117.731Z" })
    }
  );
}
function Vl(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 18,
      viewBox: "0 0 24 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M22.5 3H7.5C7.10218 3 6.72064 2.84196 6.43934 2.56066C6.15804 2.27936 6 1.89782 6 1.5C6 1.10218 6.15804 0.720645 6.43934 0.43934C6.72064 0.158036 7.10218 0 7.5 0H22.5C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5C24 1.89782 23.842 2.27936 23.5607 2.56066C23.2794 2.84196 22.8978 3 22.5 3Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M22.5 10.5H7.5C7.10218 10.5 6.72064 10.342 6.43934 10.0607C6.15804 9.77936 6 9.39782 6 9C6 8.60218 6.15804 8.22064 6.43934 7.93934C6.72064 7.65804 7.10218 7.5 7.5 7.5H22.5C22.8978 7.5 23.2794 7.65804 23.5607 7.93934C23.842 8.22064 24 8.60218 24 9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M22.5 18H7.5C7.10218 18 6.72064 17.842 6.43934 17.5607C6.15804 17.2794 6 16.8978 6 16.5C6 16.1022 6.15804 15.7206 6.43934 15.4393C6.72064 15.158 7.10218 15 7.5 15H22.5C22.8978 15 23.2794 15.158 23.5607 15.4393C23.842 15.7206 24 16.1022 24 16.5C24 16.8978 23.842 17.2794 23.5607 17.5607C23.2794 17.842 22.8978 18 22.5 18Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M1.5 10.5C2.32843 10.5 3 9.82843 3 9C3 8.17157 2.32843 7.5 1.5 7.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M1.5 18C2.32843 18 3 17.3284 3 16.5C3 15.6716 2.32843 15 1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18Z"
          }
        )
      ]
    }
  );
}
var Ea = { exports: {} }, Or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as;
function Hl() {
  if (as)
    return Or;
  as = 1;
  var n = gi, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, h) {
    var f, c = {}, w = null, m = null;
    h !== void 0 && (w = "" + h), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      r.call(u, f) && !s.hasOwnProperty(f) && (c[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: e, type: o, key: w, ref: m, props: c, _owner: i.current };
  }
  return Or.Fragment = t, Or.jsx = a, Or.jsxs = a, Or;
}
var Yr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function $l() {
  return os || (os = 1, process.env.NODE_ENV !== "production" && function() {
    var n = gi, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), S = Symbol.iterator, N = "@@iterator";
    function p(d) {
      if (d === null || typeof d != "object")
        return null;
      var I = S && d[S] || d[N];
      return typeof I == "function" ? I : null;
    }
    var v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(d) {
      {
        for (var I = arguments.length, U = new Array(I > 1 ? I - 1 : 0), K = 1; K < I; K++)
          U[K - 1] = arguments[K];
        A("error", d, U);
      }
    }
    function A(d, I, U) {
      {
        var K = v.ReactDebugCurrentFrame, ce = K.getStackAddendum();
        ce !== "" && (I += "%s", U = U.concat([ce]));
        var ye = U.map(function(re) {
          return String(re);
        });
        ye.unshift("Warning: " + I), Function.prototype.apply.call(console[d], console, ye);
      }
    }
    var k = !1, b = !1, C = !1, T = !1, R = !1, z;
    z = Symbol.for("react.module.reference");
    function M(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === s || R || d === i || d === h || d === f || T || d === m || k || b || C || typeof d == "object" && d !== null && (d.$$typeof === w || d.$$typeof === c || d.$$typeof === a || d.$$typeof === o || d.$$typeof === u || d.$$typeof === z || d.getModuleId !== void 0));
    }
    function Y(d, I, U) {
      var K = d.displayName;
      if (K)
        return K;
      var ce = I.displayName || I.name || "";
      return ce !== "" ? U + "(" + ce + ")" : U;
    }
    function Z(d) {
      return d.displayName || "Context";
    }
    function te(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case o:
            var I = d;
            return Z(I) + ".Consumer";
          case a:
            var U = d;
            return Z(U._context) + ".Provider";
          case u:
            return Y(d, d.render, "ForwardRef");
          case c:
            var K = d.displayName || null;
            return K !== null ? K : te(d.type) || "Memo";
          case w: {
            var ce = d, ye = ce._payload, re = ce._init;
            try {
              return te(re(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, pe = 0, ve, de, fe, Se, je, Oe, be;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Ne() {
      {
        if (pe === 0) {
          ve = console.log, de = console.info, fe = console.warn, Se = console.error, je = console.group, Oe = console.groupCollapsed, be = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        pe++;
      }
    }
    function it() {
      {
        if (pe--, pe === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, d, {
              value: ve
            }),
            info: ge({}, d, {
              value: de
            }),
            warn: ge({}, d, {
              value: fe
            }),
            error: ge({}, d, {
              value: Se
            }),
            group: ge({}, d, {
              value: je
            }),
            groupCollapsed: ge({}, d, {
              value: Oe
            }),
            groupEnd: ge({}, d, {
              value: be
            })
          });
        }
        pe < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = v.ReactCurrentDispatcher, Ue;
    function De(d, I, U) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (ce) {
            var K = ce.stack.trim().match(/\n( *(at )?)/);
            Ue = K && K[1] || "";
          }
        return `
` + Ue + d;
      }
    }
    var Xe = !1, Me;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new Pe();
    }
    function qe(d, I) {
      if (!d || Xe)
        return "";
      {
        var U = Me.get(d);
        if (U !== void 0)
          return U;
      }
      var K;
      Xe = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = Ge.current, Ge.current = null, Ne();
      try {
        if (I) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (et) {
              K = et;
            }
            Reflect.construct(d, [], re);
          } else {
            try {
              re.call();
            } catch (et) {
              K = et;
            }
            d.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            K = et;
          }
          d();
        }
      } catch (et) {
        if (et && K && typeof et.stack == "string") {
          for (var se = et.stack.split(`
`), Ce = K.stack.split(`
`), Ee = se.length - 1, xe = Ce.length - 1; Ee >= 1 && xe >= 0 && se[Ee] !== Ce[xe]; )
            xe--;
          for (; Ee >= 1 && xe >= 0; Ee--, xe--)
            if (se[Ee] !== Ce[xe]) {
              if (Ee !== 1 || xe !== 1)
                do
                  if (Ee--, xe--, xe < 0 || se[Ee] !== Ce[xe]) {
                    var Ve = `
` + se[Ee].replace(" at new ", " at ");
                    return d.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", d.displayName)), typeof d == "function" && Me.set(d, Ve), Ve;
                  }
                while (Ee >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, Ge.current = ye, it(), Error.prepareStackTrace = ce;
      }
      var Ct = d ? d.displayName || d.name : "", Jt = Ct ? De(Ct) : "";
      return typeof d == "function" && Me.set(d, Jt), Jt;
    }
    function Ie(d, I, U) {
      return qe(d, !1);
    }
    function nt(d) {
      var I = d.prototype;
      return !!(I && I.isReactComponent);
    }
    function We(d, I, U) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return qe(d, nt(d));
      if (typeof d == "string")
        return De(d);
      switch (d) {
        case h:
          return De("Suspense");
        case f:
          return De("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            return Ie(d.render);
          case c:
            return We(d.type, I, U);
          case w: {
            var K = d, ce = K._payload, ye = K._init;
            try {
              return We(ye(ce), I, U);
            } catch {
            }
          }
        }
      return "";
    }
    var tt = Object.prototype.hasOwnProperty, Re = {}, Qe = v.ReactDebugCurrentFrame;
    function at(d) {
      if (d) {
        var I = d._owner, U = We(d.type, d._source, I ? I.type : null);
        Qe.setExtraStackFrame(U);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ht(d, I, U, K, ce) {
      {
        var ye = Function.call.bind(tt);
        for (var re in d)
          if (ye(d, re)) {
            var se = void 0;
            try {
              if (typeof d[re] != "function") {
                var Ce = Error((K || "React class") + ": " + U + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              se = d[re](I, re, K, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (at(ce), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", U, re, typeof se), at(null)), se instanceof Error && !(se.message in Re) && (Re[se.message] = !0, at(ce), y("Failed %s type: %s", U, se.message), at(null));
          }
      }
    }
    var ot = Array.isArray;
    function ze(d) {
      return ot(d);
    }
    function Ae(d) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, U = I && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return U;
      }
    }
    function dt(d) {
      try {
        return _t(d), !1;
      } catch {
        return !0;
      }
    }
    function _t(d) {
      return "" + d;
    }
    function gt(d) {
      if (dt(d))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(d)), _t(d);
    }
    var Ke = v.ReactCurrentOwner, Tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, ft, yt;
    yt = {};
    function Et(d) {
      if (tt.call(d, "ref")) {
        var I = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function rt(d) {
      if (tt.call(d, "key")) {
        var I = Object.getOwnPropertyDescriptor(d, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function pt(d, I) {
      if (typeof d.ref == "string" && Ke.current && I && Ke.current.stateNode !== I) {
        var U = te(Ke.current.type);
        yt[U] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(Ke.current.type), d.ref), yt[U] = !0);
      }
    }
    function Nt(d, I) {
      {
        var U = function() {
          mt || (mt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        U.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function x(d, I) {
      {
        var U = function() {
          ft || (ft = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        U.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var J = function(d, I, U, K, ce, ye, re) {
      var se = {
        $$typeof: e,
        type: d,
        key: I,
        ref: U,
        props: re,
        _owner: ye
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function ee(d, I, U, K, ce) {
      {
        var ye, re = {}, se = null, Ce = null;
        U !== void 0 && (gt(U), se = "" + U), rt(I) && (gt(I.key), se = "" + I.key), Et(I) && (Ce = I.ref, pt(I, ce));
        for (ye in I)
          tt.call(I, ye) && !Tt.hasOwnProperty(ye) && (re[ye] = I[ye]);
        if (d && d.defaultProps) {
          var Ee = d.defaultProps;
          for (ye in Ee)
            re[ye] === void 0 && (re[ye] = Ee[ye]);
        }
        if (se || Ce) {
          var xe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          se && Nt(re, xe), Ce && x(re, xe);
        }
        return J(d, se, Ce, ce, K, Ke.current, re);
      }
    }
    var ue = v.ReactCurrentOwner, B = v.ReactDebugCurrentFrame;
    function $(d) {
      if (d) {
        var I = d._owner, U = We(d.type, d._source, I ? I.type : null);
        B.setExtraStackFrame(U);
      } else
        B.setExtraStackFrame(null);
    }
    var g;
    g = !1;
    function X(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function _e() {
      {
        if (ue.current) {
          var d = te(ue.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function l(d) {
      {
        if (d !== void 0) {
          var I = d.fileName.replace(/^.*[\\\/]/, ""), U = d.lineNumber;
          return `

Check your code at ` + I + ":" + U + ".";
        }
        return "";
      }
    }
    var V = {};
    function H(d) {
      {
        var I = _e();
        if (!I) {
          var U = typeof d == "string" ? d : d.displayName || d.name;
          U && (I = `

Check the top-level render call using <` + U + ">.");
        }
        return I;
      }
    }
    function _(d, I) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var U = H(I);
        if (V[U])
          return;
        V[U] = !0;
        var K = "";
        d && d._owner && d._owner !== ue.current && (K = " It was passed a child from " + te(d._owner.type) + "."), $(d), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, K), $(null);
      }
    }
    function O(d, I) {
      {
        if (typeof d != "object")
          return;
        if (ze(d))
          for (var U = 0; U < d.length; U++) {
            var K = d[U];
            X(K) && _(K, I);
          }
        else if (X(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ce = p(d);
          if (typeof ce == "function" && ce !== d.entries)
            for (var ye = ce.call(d), re; !(re = ye.next()).done; )
              X(re.value) && _(re.value, I);
        }
      }
    }
    function q(d) {
      {
        var I = d.type;
        if (I == null || typeof I == "string")
          return;
        var U;
        if (typeof I == "function")
          U = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === u || I.$$typeof === c))
          U = I.propTypes;
        else
          return;
        if (U) {
          var K = te(I);
          ht(U, d.props, "prop", K, d);
        } else if (I.PropTypes !== void 0 && !g) {
          g = !0;
          var ce = te(I);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function me(d) {
      {
        for (var I = Object.keys(d.props), U = 0; U < I.length; U++) {
          var K = I[U];
          if (K !== "children" && K !== "key") {
            $(d), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), $(null);
            break;
          }
        }
        d.ref !== null && ($(d), y("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function oe(d, I, U, K, ce, ye) {
      {
        var re = M(d);
        if (!re) {
          var se = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = l(ce);
          Ce ? se += Ce : se += _e();
          var Ee;
          d === null ? Ee = "null" : ze(d) ? Ee = "array" : d !== void 0 && d.$$typeof === e ? (Ee = "<" + (te(d.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof d, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var xe = ee(d, I, U, ce, ye);
        if (xe == null)
          return xe;
        if (re) {
          var Ve = I.children;
          if (Ve !== void 0)
            if (K)
              if (ze(Ve)) {
                for (var Ct = 0; Ct < Ve.length; Ct++)
                  O(Ve[Ct], d);
                Object.freeze && Object.freeze(Ve);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              O(Ve, d);
        }
        return d === r ? me(xe) : q(xe), xe;
      }
    }
    function he(d, I, U) {
      return oe(d, I, U, !0);
    }
    function Te(d, I, U) {
      return oe(d, I, U, !1);
    }
    var xt = Te, Ye = he;
    Yr.Fragment = r, Yr.jsx = xt, Yr.jsxs = Ye;
  }()), Yr;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Hl() : n.exports = $l();
})(Ea);
Ea.exports.jsx;
const xa = (n, e) => {
  const t = Ht(null);
  return Kt(() => {
    const r = (i) => {
      t.current && t.current.contains && !t.current.contains(i.target) && !Ki(e, i.target) && n && n(t.current);
    };
    return document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, []), t;
};
function Ki(n, e) {
  if (!n)
    return !1;
  if (Array.isArray(n)) {
    for (const t of n)
      if (Ki(t, e))
        return !0;
    return !1;
  } else if (typeof n == "string") {
    const t = document.querySelector(n);
    return !!(t != null && t.contains(e));
  } else if (n instanceof HTMLCollection || n instanceof NodeList) {
    for (let t = 0; t < n.length; t++) {
      const r = n[t];
      if (Ki(r, e))
        return !0;
    }
    return !1;
  } else if (n instanceof HTMLElement || n instanceof Element || n instanceof Node) {
    if (n instanceof Node) {
      const t = n.parentElement;
      return !!t && t.contains(e);
    }
    return n.contains(e);
  } else
    return !1;
}
const Ca = (n) => {
  Kt(() => {
    const e = () => {
      var t;
      (((t = document.activeElement) == null ? void 0 : t.tagName) === "IFRAME" || document.activeElement === document.body) && n();
    };
    return window.addEventListener("blur", e), () => {
      window.removeEventListener("blur", e);
    };
  }, []);
};
function Da(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number")
    r += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (e = 0; e < n.length; e++)
        n[e] && (t = Da(n[e])) && (r && (r += " "), r += t);
    else
      for (e in n)
        n[e] && (r && (r += " "), r += e);
  return r;
}
function er() {
  for (var n, e, t = 0, r = ""; t < arguments.length; )
    (n = arguments[t++]) && (e = Da(n)) && (r && (r += " "), r += e);
  return r;
}
const Aa = za({}), Zl = (n, e) => ({ ...n, ...e });
function Gl({ rendition: n, children: e, state: t, book: r, ...i }) {
  const [s, a] = t;
  return Kt(() => (n && (n == null || n.themes.fontSize(`${s.fontSize}%`), n == null || n.themes.default({
    body: {
      "font-family": s.fontFamily,
      color: s.theme.txt,
      background: s.theme.container
    },
    h2: {
      "font-family": s.fontFamily,
      color: s.theme.txt
    },
    p: {
      "font-family": s.fontFamily,
      color: s.theme.txt
    },
    a: {
      "font-family": s.fontFamily,
      color: `${s.theme.txt} !important`
    },
    li: {
      "font-family": s.fontFamily,
      color: s.theme.txt
    }
  })), (() => n == null ? void 0 : n.views().forEach((u) => u.pane ? u.pane.render() : null))(), () => {
  }), [n, s]), /* @__PURE__ */ W.jsx(
    Aa.Provider,
    {
      value: { setting: s, rendition: n, dispatch: a, book: r, ...i },
      children: e
    }
  );
}
const ar = () => ja(Aa);
function Yl({ navItem: n, rendition: e }) {
  var o, u;
  const [t, r] = Pt(!1), i = xa(() => {
    r(!1);
  });
  Ca(() => {
    r(!1);
  });
  const s = (u = (o = e == null ? void 0 : e.location) == null ? void 0 : o.start) == null ? void 0 : u.href, { setting: a } = ar();
  return /* @__PURE__ */ W.jsxs("div", { ref: i, className: "r_epub_header_chapter-menu", children: [
    /* @__PURE__ */ W.jsx(
      "div",
      {
        onClick: () => {
          r(!t);
        },
        className: "r_epub_header_chapter_btn",
        children: /* @__PURE__ */ W.jsx(Vl, { fill: a.theme.txt })
      }
    ),
    t && /* @__PURE__ */ W.jsx("div", { className: "r_epub_header_dropdown", children: n && n.length > 0 ? n.map((h, f) => /* @__PURE__ */ W.jsx(
      "div",
      {
        onClick: () => {
          e == null || e.display(h.href), r(!1);
        },
        className: er(
          "dropdown_item",
          s == h.href ? "active" : "not_active"
        ),
        children: h.label
      },
      "ghe" + f
    )) : /* @__PURE__ */ W.jsx("div", { className: er("no_text"), children: "No chapter found" }) })
  ] });
}
function Xl(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsxs("g", { clipPath: "url(#clip0_2014_266)", children: [
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M13.125 18L7.125 5.25L1.125 18",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M11.3625 14.25H2.88745",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M19.125 18.1875C20.7819 18.1875 22.125 17.0542 22.125 15.6562C22.125 14.2583 20.7819 13.125 19.125 13.125C17.4681 13.125 16.125 14.2583 16.125 15.6562C16.125 17.0542 17.4681 18.1875 19.125 18.1875Z",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M17.25 10.2187C17.8024 9.84207 18.4564 9.64259 19.125 9.64687C20.7844 9.64687 22.125 10.8187 22.125 12.2719V18",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ W.jsx("defs", { children: /* @__PURE__ */ W.jsx("clipPath", { id: "clip0_2014_266", children: /* @__PURE__ */ W.jsx("rect", { width: 24, height: 24, fill: "white" }) }) })
      ]
    }
  );
}
function Kl(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsx("g", { clipPath: "url(#clip0_2017_27)", children: /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6ZM18 10.8V13.2H6V10.8H18Z",
            fill: "black"
          }
        ) }),
        /* @__PURE__ */ W.jsx("defs", { children: /* @__PURE__ */ W.jsx("clipPath", { id: "clip0_2017_27", children: /* @__PURE__ */ W.jsx("rect", { width: 24, height: 24, fill: "white" }) }) })
      ]
    }
  );
}
function Jl(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsx("g", { clipPath: "url(#clip0_2016_25)", children: /* @__PURE__ */ W.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12 21.8182C17.4224 21.8182 21.8182 17.4224 21.8182 12C21.8182 6.57757 17.4224 2.18182 12 2.18182C6.57757 2.18182 2.18182 6.57757 2.18182 12C2.18182 17.4224 6.57757 21.8182 12 21.8182ZM13.0909 10.9091H17.4545V13.0909H13.0909V17.4545H10.9091V13.0909H6.54545V10.9091H10.9091V6.54545H13.0909V10.9091Z",
            fill: "black"
          }
        ) }),
        /* @__PURE__ */ W.jsx("defs", { children: /* @__PURE__ */ W.jsx("clipPath", { id: "clip0_2016_25", children: /* @__PURE__ */ W.jsx("rect", { width: 24, height: 24, fill: "white" }) }) })
      ]
    }
  );
}
function Ql(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsxs("g", { clipPath: "url(#clip0_2019_39)", children: [
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M15 12L3 24L15 36M33 12L45 24L33 36",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ W.jsx("defs", { children: /* @__PURE__ */ W.jsx("clipPath", { id: "clip0_2019_39", children: /* @__PURE__ */ W.jsx("rect", { width: 48, height: 48, fill: "white" }) }) })
      ]
    }
  );
}
function eh(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsxs("g", { clipPath: "url(#clip0_2019_33)", children: [
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M36 15L24 3L12 15M36 33L24 45L12 33",
              stroke: "black",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ W.jsx("defs", { children: /* @__PURE__ */ W.jsx("clipPath", { id: "clip0_2019_33", children: /* @__PURE__ */ W.jsx("rect", { width: 48, height: 48, fill: "white" }) }) })
      ]
    }
  );
}
const Sa = [
  {
    id: 0,
    bg: "#F8FAFD",
    container: "#FEFEFD",
    txt: "#333"
  },
  {
    id: 1,
    bg: "#F4E4C9",
    container: "#F5EDDC",
    txt: "#333"
  },
  {
    id: 2,
    bg: "#121212",
    container: "#1E1E1E",
    txt: "#eee"
  }
];
function th() {
  const [n, e] = Pt(!1), t = xa(() => {
    e(!1);
  });
  Ca(() => {
    e(!1);
  });
  const { setting: r, dispatch: i } = ar(), s = (a) => {
    const o = r.fontSize;
    a == "inc" && i({
      fontSize: Math.min(o + 10, 200)
    }), a == "dec" && i({
      fontSize: Math.max(o - 10, 50)
    });
  };
  return /* @__PURE__ */ W.jsxs("div", { ref: t, className: "r_epub_settings_dropdown_wrapper", children: [
    /* @__PURE__ */ W.jsx(
      "div",
      {
        className: "btn_icon",
        onClick: () => {
          e(!n);
        },
        children: /* @__PURE__ */ W.jsx(Xl, { stroke: r.theme.txt })
      }
    ),
    n && /* @__PURE__ */ W.jsxs("div", { className: "dropdown_wrapper", children: [
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_header ", children: "Background Color:" }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_content", children: Sa.map((a, o) => /* @__PURE__ */ W.jsx(
        "div",
        {
          style: { backgroundColor: a.bg },
          onClick: () => {
            i({ theme: a });
          },
          className: er(
            "color_item",
            r.theme.id == a.id && "active"
          )
        },
        "ghs" + o
      )) }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_gap" }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_header", children: "Font Size:" }),
      /* @__PURE__ */ W.jsxs("div", { className: "dropdown_content", children: [
        /* @__PURE__ */ W.jsx("div", { onClick: () => s("dec"), children: /* @__PURE__ */ W.jsx(Kl, { className: "font_size_icon" }) }),
        /* @__PURE__ */ W.jsx("div", { className: "font_size_txt", children: "Aa" }),
        /* @__PURE__ */ W.jsx("div", { onClick: () => s("inc"), children: /* @__PURE__ */ W.jsx(Jl, { className: "font_size_icon" }) })
      ] }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_gap" }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_header", children: "Font Family:" }),
      /* @__PURE__ */ W.jsxs("div", { className: "dropdown_content", children: [
        /* @__PURE__ */ W.jsx(
          "div",
          {
            onClick: () => {
              i({ fontFamily: "sans-serif" });
            },
            className: er(
              "font_item",
              r.fontFamily == "sans-serif" && "active"
            ),
            children: "Sans-Serif"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "div",
          {
            onClick: () => {
              i({ fontFamily: "serif" });
            },
            className: er(
              "font_item",
              r.fontFamily == "serif" && "active"
            ),
            children: "Serif"
          }
        )
      ] }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_gap" }),
      /* @__PURE__ */ W.jsx("div", { className: "dropdown_header", children: "Scroll Direction:" }),
      /* @__PURE__ */ W.jsxs("div", { className: "dropdown_content", children: [
        /* @__PURE__ */ W.jsx(
          "div",
          {
            className: er(
              "scroll_item",
              r.direction === "horizontal" && "active "
            ),
            onClick: () => {
              i({ direction: "horizontal" });
            },
            children: /* @__PURE__ */ W.jsx(Ql, { className: "icon" })
          }
        ),
        /* @__PURE__ */ W.jsx(
          "div",
          {
            className: er(
              "scroll_item",
              r.direction === "vertical" && "active"
            ),
            onClick: () => {
              i({ direction: "vertical" });
            },
            children: /* @__PURE__ */ W.jsx(eh, { className: "icon" })
          }
        )
      ] })
    ] })
  ] });
}
function rh(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M20.9999 21L16.6499 16.65",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ih(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsxs("g", { clipPath: "url(#clip0_2017_29)", children: [
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M1.5 1.5L22.5 22.5",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ W.jsx(
            "path",
            {
              d: "M1.5 22.5L22.5 1.5",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ W.jsx("defs", { children: /* @__PURE__ */ W.jsx("clipPath", { id: "clip0_2017_29", children: /* @__PURE__ */ W.jsx("rect", { width: 24, height: 24, fill: "white" }) }) })
      ]
    }
  );
}
var nh = function(n) {
  return function(e, t) {
    var r = Ht(!1);
    n(function() {
      return function() {
        r.current = !1;
      };
    }, []), n(function() {
      if (!r.current)
        r.current = !0;
      else
        return e();
    }, t);
  };
};
function wn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var r = t.call(n), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function sh(n, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return n.concat(s || Array.prototype.slice.call(e));
}
var Ci = function(n) {
  return typeof n == "function";
}, ah = function(n) {
  return typeof n == "boolean";
}, oh = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
const _n = oh;
function Xr(n) {
  _n && (Ci(n) || console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof n)));
  var e = Ht(n);
  e.current = ls(function() {
    return n;
  }, [n]);
  var t = Ht();
  return t.current || (t.current = function() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    return e.current.apply(this, r);
  }), t.current;
}
const uh = nh(Kt);
function vi(n) {
  var e = Ht(n);
  return e.current = n, e;
}
var lh = function(n) {
  _n && (Ci(n) || console.error("useUnmount expected parameter is a function, got ".concat(typeof n)));
  var e = vi(n);
  Kt(function() {
    return function() {
      e.current();
    };
  }, []);
};
const Ta = lh;
var hh = !!(typeof window < "u" && window.document && window.document.createElement);
const fh = hh;
function Kr(n, e) {
  if (fh) {
    if (!n)
      return e;
    var t;
    return Ci(n) ? t = n() : "current" in n ? t = n.current : t = n, t;
  }
}
function ch(n, e) {
  var t;
  _n && (Ci(n) || console.error("useDebounceFn expected parameter is a function, got ".concat(typeof n)));
  var r = vi(n), i = (t = e == null ? void 0 : e.wait) !== null && t !== void 0 ? t : 1e3, s = ls(function() {
    return ya(function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      return r.current.apply(r, sh([], wn(a), !1));
    }, i, e);
  }, []);
  return Ta(function() {
    s.cancel();
  }), {
    run: s,
    cancel: s.cancel,
    flush: s.flush
  };
}
function dh(n, e, t) {
  var r = wn(Pt({}), 2), i = r[0], s = r[1], a = ch(function() {
    s({});
  }, t).run;
  Kt(function() {
    return a();
  }, e), uh(n, [i]);
}
var ka = { exports: {} };
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function(n) {
  (function() {
    var e = typeof window < "u" && typeof window.document < "u" ? window.document : {}, t = n.exports, r = function() {
      for (var a, o = [
        [
          "requestFullscreen",
          "exitFullscreen",
          "fullscreenElement",
          "fullscreenEnabled",
          "fullscreenchange",
          "fullscreenerror"
        ],
        // New WebKit
        [
          "webkitRequestFullscreen",
          "webkitExitFullscreen",
          "webkitFullscreenElement",
          "webkitFullscreenEnabled",
          "webkitfullscreenchange",
          "webkitfullscreenerror"
        ],
        // Old WebKit
        [
          "webkitRequestFullScreen",
          "webkitCancelFullScreen",
          "webkitCurrentFullScreenElement",
          "webkitCancelFullScreen",
          "webkitfullscreenchange",
          "webkitfullscreenerror"
        ],
        [
          "mozRequestFullScreen",
          "mozCancelFullScreen",
          "mozFullScreenElement",
          "mozFullScreenEnabled",
          "mozfullscreenchange",
          "mozfullscreenerror"
        ],
        [
          "msRequestFullscreen",
          "msExitFullscreen",
          "msFullscreenElement",
          "msFullscreenEnabled",
          "MSFullscreenChange",
          "MSFullscreenError"
        ]
      ], u = 0, h = o.length, f = {}; u < h; u++)
        if (a = o[u], a && a[1] in e) {
          for (u = 0; u < a.length; u++)
            f[o[0][u]] = a[u];
          return f;
        }
      return !1;
    }(), i = {
      change: r.fullscreenchange,
      error: r.fullscreenerror
    }, s = {
      request: function(a, o) {
        return new Promise((function(u, h) {
          var f = (function() {
            this.off("change", f), u();
          }).bind(this);
          this.on("change", f), a = a || e.documentElement;
          var c = a[r.requestFullscreen](o);
          c instanceof Promise && c.then(f).catch(h);
        }).bind(this));
      },
      exit: function() {
        return new Promise((function(a, o) {
          if (!this.isFullscreen) {
            a();
            return;
          }
          var u = (function() {
            this.off("change", u), a();
          }).bind(this);
          this.on("change", u);
          var h = e[r.exitFullscreen]();
          h instanceof Promise && h.then(u).catch(o);
        }).bind(this));
      },
      toggle: function(a, o) {
        return this.isFullscreen ? this.exit() : this.request(a, o);
      },
      onchange: function(a) {
        this.on("change", a);
      },
      onerror: function(a) {
        this.on("error", a);
      },
      on: function(a, o) {
        var u = i[a];
        u && e.addEventListener(u, o, !1);
      },
      off: function(a, o) {
        var u = i[a];
        u && e.removeEventListener(u, o, !1);
      },
      raw: r
    };
    if (!r) {
      t ? n.exports = { isEnabled: !1 } : window.screenfull = { isEnabled: !1 };
      return;
    }
    Object.defineProperties(s, {
      isFullscreen: {
        get: function() {
          return !!e[r.fullscreenElement];
        }
      },
      element: {
        enumerable: !0,
        get: function() {
          return e[r.fullscreenElement];
        }
      },
      isEnabled: {
        enumerable: !0,
        get: function() {
          return !!e[r.fullscreenEnabled];
        }
      }
    }), t ? n.exports = s : window.screenfull = s;
  })();
})(ka);
var ph = ka.exports;
const kt = /* @__PURE__ */ or(ph);
var vh = function(n, e) {
  var t = e || {}, r = t.onExit, i = t.onEnter, s = t.pageFullscreen, a = s === void 0 ? !1 : s, o = ah(a) || !a ? {} : a, u = o.className, h = u === void 0 ? "ahooks-page-fullscreen" : u, f = o.zIndex, c = f === void 0 ? 999999 : f, w = vi(r), m = vi(i), S = wn(Pt(!1), 2), N = S[0], p = S[1], v = function(T) {
    var R, z;
    T ? (R = m.current) === null || R === void 0 || R.call(m) : (z = w.current) === null || z === void 0 || z.call(w);
  }, y = Xr(function() {
    if (kt.isEnabled) {
      var T = Kr(n);
      if (!kt.element)
        v(!1), p(!1), kt.off("change", y);
      else {
        var R = kt.element === T;
        v(R), p(R);
      }
    }
  }), A = function(T) {
    var R = Kr(n);
    if (R) {
      var z = document.getElementById(h);
      T ? (R.classList.add(h), z || (z = document.createElement("style"), z.setAttribute("id", h), z.textContent = `
          .`.concat(h, ` {
            position: fixed; left: 0; top: 0; right: 0; bottom: 0;
            width: 100% !important; height: 100% !important;
            z-index: `).concat(c, `;
          }`), R.appendChild(z))) : (R.classList.remove(h), z && z.remove()), N !== T && (v(T), p(T));
    }
  }, k = function() {
    var T = Kr(n);
    if (T) {
      if (a) {
        A(!0);
        return;
      }
      if (kt.isEnabled)
        try {
          kt.request(T), kt.on("change", y);
        } catch (R) {
          console.error(R);
        }
    }
  }, b = function() {
    var T = Kr(n);
    if (T) {
      if (a) {
        A(!1);
        return;
      }
      kt.isEnabled && kt.element === T && kt.exit();
    }
  }, C = function() {
    N ? b() : k();
  };
  return Ta(function() {
    kt.isEnabled && !a && kt.off("change", y);
  }), [N, {
    enterFullscreen: Xr(k),
    exitFullscreen: Xr(b),
    toggleFullscreen: Xr(C),
    isEnabled: kt.isEnabled
  }];
};
const gh = vh;
function mh() {
  const { book: n, rendition: e } = ar(), [t, r] = Pt(!1), [i, s] = Pt("");
  async function a(c) {
    const w = n == null ? void 0 : n.spine, m = await Promise.all(
      w.spineItems.map(async (S) => {
        await S.load(n == null ? void 0 : n.load.bind(n));
        const N = await S.find.bind(S, c)();
        return await S.unload.bind(S)(), N;
      })
    );
    return [].concat(...m);
  }
  const [o, u] = Pt(null);
  dh(
    () => {
      h();
    },
    [i],
    { wait: 500 }
  );
  const h = async () => {
    if (!i) {
      u(null);
      return;
    }
    const w = (await a(i)).map((m) => {
      var S;
      return {
        ...m,
        txt: (S = m == null ? void 0 : m.excerpt) == null ? void 0 : S.replace(i, `<span>${i}</span>`)
      };
    });
    u(w);
  }, { setting: f } = ar();
  return /* @__PURE__ */ W.jsxs("div", { className: "r_epub_search_wrapper", children: [
    /* @__PURE__ */ W.jsxs("div", { className: er("search_container", t && "active"), children: [
      /* @__PURE__ */ W.jsx(
        "div",
        {
          onClick: () => {
            r(!0);
          },
          children: /* @__PURE__ */ W.jsx(rh, { stroke: f.theme.txt })
        }
      ),
      t && /* @__PURE__ */ W.jsxs("div", { className: "search_input_wrapper  ", children: [
        /* @__PURE__ */ W.jsx(
          "input",
          {
            type: "text",
            className: "",
            value: i,
            placeholder: "search here...",
            style: { color: f.theme.txt },
            onChange: (c) => {
              s(c.target.value);
            },
            onKeyUp: (c) => {
              c.key == "Enter" && h();
            }
          }
        ),
        /* @__PURE__ */ W.jsx(
          "div",
          {
            className: "icon_wrapper",
            onClick: () => {
              r(!1), u(null), s("");
            },
            children: /* @__PURE__ */ W.jsx(ih, { stroke: f.theme.txt, className: "icon" })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ W.jsx("div", { className: "search_result_container", children: o.length > 0 ? o.map((c, w) => /* @__PURE__ */ W.jsx(
      "div",
      {
        className: "search_result_item",
        dangerouslySetInnerHTML: { __html: c.txt },
        onClick: () => {
          e == null || e.display(c.cfi);
        }
      },
      "dgs" + w
    )) : /* @__PURE__ */ W.jsx("div", { className: "no_text ", children: "No result found" }) })
  ] });
}
function yh(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M7.83333 2H3.16667C3.01343 1.99991 2.86169 2.03003 2.7201 2.08863C2.57851 2.14723 2.44987 2.23316 2.34152 2.34152C2.23316 2.44987 2.14723 2.57851 2.08863 2.7201C2.03003 2.86169 1.99991 3.01343 2 3.16667V7.83333C2 8.14275 2.12292 8.4395 2.34171 8.65829C2.5605 8.87708 2.85725 9 3.16667 9C3.47609 9 3.77283 8.87708 3.99162 8.65829C4.21042 8.4395 4.33333 8.14275 4.33333 7.83333V4.33333H7.83333C8.14275 4.33333 8.4395 4.21042 8.65829 3.99162C8.87708 3.77283 9 3.47609 9 3.16667C9 2.85725 8.87708 2.5605 8.65829 2.34171C8.4395 2.12292 8.14275 2 7.83333 2Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M20.6667 2H15.3333C14.9797 2 14.6406 2.12292 14.3905 2.34171C14.1405 2.5605 14 2.85725 14 3.16667C14 3.47609 14.1405 3.77283 14.3905 3.99162C14.6406 4.21042 14.9797 4.33333 15.3333 4.33333H19.3333V7.83333C19.3333 8.14275 19.4738 8.4395 19.7239 8.65829C19.9739 8.87708 20.313 9 20.6667 9C21.0203 9 21.3594 8.87708 21.6095 8.65829C21.8595 8.4395 22 8.14275 22 7.83333V3.16667C22.0001 3.01343 21.9657 2.86169 21.8987 2.7201C21.8317 2.57851 21.7335 2.44987 21.6097 2.34152C21.4859 2.23316 21.3388 2.14723 21.177 2.08863C21.0152 2.03003 20.8418 1.99991 20.6667 2Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M7.83333 19.3333H4.33333V15.3333C4.33333 14.9797 4.21042 14.6406 3.99162 14.3905C3.77283 14.1405 3.47609 14 3.16667 14C2.85725 14 2.5605 14.1405 2.34171 14.3905C2.12292 14.6406 2 14.9797 2 15.3333V20.6667C1.99991 20.8418 2.03003 21.0152 2.08863 21.177C2.14723 21.3388 2.23316 21.4859 2.34152 21.6097C2.44987 21.7335 2.57851 21.8317 2.7201 21.8987C2.86169 21.9657 3.01343 22.0001 3.16667 22H7.83333C8.14275 22 8.4395 21.8595 8.65829 21.6095C8.87708 21.3594 9 21.0203 9 20.6667C9 20.313 8.87708 19.9739 8.65829 19.7239C8.4395 19.4738 8.14275 19.3333 7.83333 19.3333Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M20.6667 14C20.4915 13.9999 20.3181 14.0343 20.1563 14.1013C19.9945 14.1683 19.8475 14.2665 19.7236 14.3903C19.5998 14.5141 19.5016 14.6612 19.4346 14.823C19.3677 14.9848 19.3332 15.1582 19.3333 15.3333V19.3333H15.3333C14.9797 19.3333 14.6406 19.4738 14.3905 19.7239C14.1405 19.9739 14 20.313 14 20.6667C14 21.0203 14.1405 21.3594 14.3905 21.6095C14.6406 21.8595 14.9797 22 15.3333 22H20.6667C20.8418 22.0001 21.0152 21.9657 21.177 21.8987C21.3388 21.8317 21.4859 21.7335 21.6097 21.6097C21.7335 21.4859 21.8317 21.3388 21.8987 21.177C21.9657 21.0152 22.0001 20.8418 22 20.6667V15.3333C22.0001 15.1582 21.9657 14.9848 21.8987 14.823C21.8317 14.6612 21.7335 14.5141 21.6097 14.3903C21.4859 14.2665 21.3388 14.1683 21.177 14.1013C21.0152 14.0343 20.8418 13.9999 20.6667 14Z"
          }
        )
      ]
    }
  );
}
function bh(n) {
  return /* @__PURE__ */ W.jsxs(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...n,
      children: [
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M7.83333 14H3.16667C2.85725 14 2.5605 14.1405 2.34171 14.3905C2.12292 14.6406 2 14.9797 2 15.3333C2 15.687 2.12292 16.0261 2.34171 16.2761C2.5605 16.5262 2.85725 16.6667 3.16667 16.6667H6.66667V20.6667C6.66667 21.0203 6.78958 21.3594 7.00838 21.6095C7.22717 21.8595 7.52391 22 7.83333 22C8.14275 22 8.4395 21.8595 8.65829 21.6095C8.87708 21.3594 9 21.0203 9 20.6667V15.3333C9.00009 15.1582 8.96997 14.9848 8.91137 14.823C8.85277 14.6612 8.76684 14.5141 8.65849 14.3903C8.55013 14.2665 8.42149 14.1683 8.2799 14.1013C8.13831 14.0343 7.98657 13.9999 7.83333 14Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M20.6667 14H15.3333C15.1582 13.9999 14.9848 14.0343 14.823 14.1013C14.6612 14.1683 14.5141 14.2665 14.3903 14.3903C14.2665 14.5141 14.1683 14.6612 14.1013 14.823C14.0343 14.9848 13.9999 15.1582 14 15.3333V20.6667C14 21.0203 14.1405 21.3594 14.3905 21.6095C14.6406 21.8595 14.9797 22 15.3333 22C15.687 22 16.0261 21.8595 16.2761 21.6095C16.5262 21.3594 16.6667 21.0203 16.6667 20.6667V16.6667H20.6667C21.0203 16.6667 21.3594 16.5262 21.6095 16.2761C21.8595 16.0261 22 15.687 22 15.3333C22 14.9797 21.8595 14.6406 21.6095 14.3905C21.3594 14.1405 21.0203 14 20.6667 14Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M15.3333 9H20.6667C21.0203 9 21.3594 8.87708 21.6095 8.65829C21.8595 8.4395 22 8.14275 22 7.83333C22 7.52391 21.8595 7.22717 21.6095 7.00838C21.3594 6.78958 21.0203 6.66667 20.6667 6.66667H16.6667V3.16667C16.6667 2.85725 16.5262 2.5605 16.2761 2.34171C16.0261 2.12292 15.687 2 15.3333 2C14.9797 2 14.6406 2.12292 14.3905 2.34171C14.1405 2.5605 14 2.85725 14 3.16667V7.83333C13.9999 7.98657 14.0343 8.13831 14.1013 8.2799C14.1683 8.42149 14.2665 8.55013 14.3903 8.65849C14.5141 8.76684 14.6612 8.85277 14.823 8.91137C14.9848 8.96997 15.1582 9.00009 15.3333 9Z"
          }
        ),
        /* @__PURE__ */ W.jsx(
          "path",
          {
            d: "M7.83333 2C7.6801 1.9999 7.52835 2.03432 7.38677 2.10129C7.24518 2.16826 7.11653 2.26647 7.00818 2.3903C6.89983 2.51413 6.8139 2.66116 6.7553 2.82297C6.6967 2.98478 6.66658 3.15821 6.66667 3.33333V7.33333H3.16667C2.85725 7.33333 2.5605 7.47381 2.34171 7.72386C2.12292 7.97391 2 8.31304 2 8.66667C2 9.02029 2.12292 9.35943 2.34171 9.60947C2.5605 9.85952 2.85725 10 3.16667 10H7.83333C7.98657 10.0001 8.13831 9.96568 8.2799 9.89871C8.42149 9.83174 8.55013 9.73353 8.65849 9.6097C8.76684 9.48586 8.85277 9.33884 8.91137 9.17703C8.96997 9.01522 9.00009 8.84179 9 8.66667V3.33333C9.00009 3.15821 8.96997 2.98478 8.91137 2.82297C8.85277 2.66116 8.76684 2.51413 8.65849 2.3903C8.55013 2.26647 8.42149 2.16826 8.2799 2.10129C8.13831 2.03432 7.98657 1.9999 7.83333 2Z"
          }
        )
      ]
    }
  );
}
function wh() {
  const [n, { toggleFullscreen: e }] = gh(document.body), { setting: t } = ar();
  return /* @__PURE__ */ W.jsx("div", { onClick: e, children: n ? /* @__PURE__ */ W.jsx(bh, { fill: t.theme.txt }) : /* @__PURE__ */ W.jsx(yh, { fill: t.theme.txt }) });
}
function _h(n, e, t) {
  const r = (t == null ? void 0 : t.returnFunction) || !1, i = e[n], s = Object.keys(e).filter((o) => o.includes(",")), a = s.flatMap((o) => o.split(",")).map((o) => o.trim());
  if (i)
    return typeof i == "function" && !r ? i() : i;
  {
    if (a.includes(n)) {
      const u = s.find((f) => f.includes(n)), h = e[u];
      return typeof h == "function" && !r ? h() : h;
    }
    const o = e[""];
    return typeof o == "function" && !r ? o() : o;
  }
}
function Eh(n) {
  const { rendition: e } = ar();
  Kt(() => {
    let t = !1;
    return e == null || e.on("selected", (r, i) => {
      const s = () => {
        t = !1, e == null || e.off("mouseup", s), n(r, i);
      };
      !t && (e == null || e.on("mouseup", s)), t = !0;
    }), () => {
    };
  }, [e]);
}
const us = (n, e) => {
  const t = n.getBoundingClientRect(), r = e ? e.getBoundingClientRect() : { left: 0, top: 0 }, i = t.left + r.left + (t.width - 297) / 2, s = t.right + r.left, a = t.top + r.top - 34, o = t.bottom + r.top;
  return { left: i, right: s, top: a, bottom: o };
};
function xh() {
  const {
    rendition: n,
    book: e,
    highlights: t,
    onDeleteHighlight: r,
    onNewHightlight: i,
    onUpdateHighlight: s,
    onShareQuote: a
  } = ar(), [o, u] = Pt(null), h = Ht(null), [f, c] = Pt("");
  Kt(() => {
    const k = n == null ? void 0 : n.annotations;
    Object.values((k == null ? void 0 : k._annotations) || {}).forEach((b) => {
      n == null || n.annotations.remove(b.cfiRange, b.type);
    }), t.forEach((b) => {
      n == null || n.annotations.highlight(
        b.cfi,
        { txt: b.txt, cfi: b.cfi, note: b.noteTxt || "" },
        (C) => {
          var z, M, Y, Z;
          const T = us(C.target), R = (M = (z = C.target) == null ? void 0 : z.dataset) == null ? void 0 : M.epubcfi;
          if (R) {
            h.current = R;
            const te = (Z = (Y = C.target) == null ? void 0 : Y.dataset) == null ? void 0 : Z.note;
            console.log(te), te ? (c(te), u({
              ...T,
              top: Math.max(T.top - 114, 0),
              left: Math.max(T.left + 23.5, 0),
              type: "update-note"
            })) : u({ ...T, type: "update-highlight" }), w();
          }
        }
      ), b.noteTxt && (n == null || n.annotations.mark(
        b.cfi,
        { txt: b.txt, cfi: b.cfi, noteTxt: f },
        (C) => {
          console.log(C);
        }
      ));
    });
  }, [t, n]);
  const w = () => {
    const k = () => {
      u(null), c(""), n == null || n.off("mouseup", k);
    };
    n == null || n.on("mouseup", k);
    const b = n == null ? void 0 : n.views(), C = b == null ? void 0 : b.container, T = () => {
      u(null), c(""), C == null || C.removeEventListener("scroll", T);
    };
    C == null || C.addEventListener("scroll", T);
  }, m = () => {
    var b, C;
    const k = n == null ? void 0 : n.getContents();
    Array.isArray(k) && ((C = (b = k == null ? void 0 : k[0].window) == null ? void 0 : b.getSelection()) == null || C.removeAllRanges());
  };
  Eh((k, b) => {
    var M;
    const C = (M = b.document.defaultView) == null ? void 0 : M.frameElement, T = b.window.getSelection(), R = T == null ? void 0 : T.getRangeAt(0), z = us(R, C);
    h.current = k, u({ ...z, type: "add-highlight" }), w();
  });
  const S = async () => {
    var b;
    const k = h.current;
    if (k) {
      const C = await ((b = await (e == null ? void 0 : e.getRange(k))) == null ? void 0 : b.toString()) || "";
      i == null || i({ txt: C, cfi: k }), m(), u(null), h.current = null;
    }
  }, N = () => {
    const k = h.current;
    k && (r == null || r(k), m(), u(null), h.current = null);
  }, p = async () => {
    var b;
    const k = h.current;
    if (f && k) {
      const C = await ((b = await (e == null ? void 0 : e.getRange(k))) == null ? void 0 : b.toString()) || "";
      i == null || i({ txt: C, cfi: k, noteTxt: f }), m(), u(null), h.current = null;
    }
  }, v = () => {
    o && u({
      ...o,
      type: "add-note",
      top: Math.max(o.top - 114, 0),
      left: Math.max(o.left + 23.5, 0)
    });
  }, y = async () => {
    var b;
    const k = h.current;
    if (k) {
      const C = await ((b = await (e == null ? void 0 : e.getRange(k))) == null ? void 0 : b.toString()) || "";
      a == null || a(C), m(), u(null), h.current = null;
    }
  }, A = async () => {
    const k = h.current;
    f && k && (s == null || s(k, f), m(), u(null), h.current = null);
  };
  return /* @__PURE__ */ W.jsxs("div", { className: "r_epub_popup_wrapper", children: [
    o && o.type == "add-highlight" && /* @__PURE__ */ W.jsx(
      "div",
      {
        className: "popup",
        style: { top: o == null ? void 0 : o.top, left: o == null ? void 0 : o.left },
        children: /* @__PURE__ */ W.jsxs("div", { className: "popup_btn_group ", children: [
          /* @__PURE__ */ W.jsx("button", { onClick: S, className: "popup_btn", children: "Highlight" }),
          /* @__PURE__ */ W.jsx("button", { onClick: v, className: "popup_btn", children: "Add Note" }),
          /* @__PURE__ */ W.jsx("button", { onClick: y, className: "popup_btn", children: "Share Quote" })
        ] })
      }
    ),
    o && o.type === "update-highlight" && /* @__PURE__ */ W.jsx(
      "div",
      {
        className: "popup",
        style: { top: o == null ? void 0 : o.top, left: o == null ? void 0 : o.left },
        children: /* @__PURE__ */ W.jsxs("div", { className: "popup_btn_group", children: [
          /* @__PURE__ */ W.jsx("button", { onClick: N, className: "popup_btn", children: "Delete" }),
          /* @__PURE__ */ W.jsx("button", { onClick: v, className: "popup_btn", children: "Add Note" }),
          /* @__PURE__ */ W.jsx("button", { onClick: y, className: "popup_btn", children: "Share Quote" })
        ] })
      }
    ),
    o && o.type === "add-note" && /* @__PURE__ */ W.jsx(
      "div",
      {
        className: "popup",
        style: { top: o == null ? void 0 : o.top, left: o == null ? void 0 : o.left },
        children: /* @__PURE__ */ W.jsxs("div", { className: "note_popup", children: [
          /* @__PURE__ */ W.jsx(
            "textarea",
            {
              placeholder: "write something here",
              className: "text_input",
              value: f,
              onChange: (k) => {
                c(k.target.value);
              }
            }
          ),
          /* @__PURE__ */ W.jsx("div", { className: "btn_wrap", children: /* @__PURE__ */ W.jsx("button", { onClick: p, className: "btn", children: "Add" }) })
        ] })
      }
    ),
    o && o.type === "update-note" && /* @__PURE__ */ W.jsx(
      "div",
      {
        style: { top: o == null ? void 0 : o.top, left: o == null ? void 0 : o.left },
        className: "popup",
        children: /* @__PURE__ */ W.jsxs("div", { className: "note_popup", children: [
          /* @__PURE__ */ W.jsx(
            "textarea",
            {
              placeholder: "write something here",
              className: "text_input",
              value: f,
              onChange: (k) => {
                c(k.target.value);
              }
            }
          ),
          /* @__PURE__ */ W.jsxs("div", { className: "btn_wrap", children: [
            /* @__PURE__ */ W.jsx("button", { onClick: N, className: "btn delete", children: "Delete" }),
            /* @__PURE__ */ W.jsx("button", { onClick: A, className: "btn", children: "Update" })
          ] })
        ] })
      }
    )
  ] });
}
const Ch = (n) => /* @__PURE__ */ W.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: "block",
      shapeRendering: "auto"
    },
    width: 40,
    height: 40,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    ...n,
    children: /* @__PURE__ */ W.jsx(
      "circle",
      {
        cx: 50,
        cy: 50,
        r: 32,
        strokeWidth: 8,
        stroke: "#1875b9",
        strokeDasharray: "50.26548245743669 50.26548245743669",
        fill: "none",
        strokeLinecap: "round",
        children: /* @__PURE__ */ W.jsx(
          "animateTransform",
          {
            attributeName: "transform",
            type: "rotate",
            repeatCount: "indefinite",
            dur: "1s",
            keyTimes: "0;1",
            values: "0 50 50;360 50 50"
          }
        )
      }
    )
  }
);
function Th({ epubSrc: n, highlights: e, ...t }) {
  const r = Ht(null), i = Ht(null), s = Ht(null), [a, o] = Pt(null), [u, h] = Pt(!0), [f, c] = Ma(Zl, {
    theme: Sa[0],
    fontSize: 100,
    fontFamily: "sans-serif",
    direction: "horizontal"
  });
  Kt(() => {
    var v, y;
    const S = ur(n);
    s.current = S;
    const N = r.current;
    i.current = S.renderTo(N, {
      width: "100%",
      height: "100%",
      ...Dh(f.direction)
    }), (v = i.current) == null || v.display(), S.loaded.navigation.then(function(A) {
      o(A.toc);
    });
    const p = () => {
      var A;
      return (A = i.current) == null ? void 0 : A.views().forEach((k) => k.pane ? k.pane.render() : null);
    };
    return (y = i.current) == null || y.on("rendered", () => {
      p();
    }), S.ready.then(() => {
      h(!1);
    }), () => {
      S.destroy();
    };
  }, [n, f.direction]);
  const w = () => {
    var S;
    (S = i.current) == null || S.next();
  }, m = () => {
    var S;
    (S = i.current) == null || S.prev();
  };
  return /* @__PURE__ */ W.jsxs(
    Gl,
    {
      state: [f, c],
      rendition: i.current,
      book: s.current,
      highlights: e,
      ...t,
      children: [
        /* @__PURE__ */ W.jsxs(
          "div",
          {
            style: { backgroundColor: f.theme.bg },
            className: "r_epub_root_wrapper",
            children: [
              /* @__PURE__ */ W.jsx(
                "div",
                {
                  className: "r_epub_header_wrapper",
                  style: { backgroundColor: f.theme.bg },
                  children: /* @__PURE__ */ W.jsxs("div", { className: "r_epub_header_container r_epub_container", children: [
                    /* @__PURE__ */ W.jsx(Yl, { navItem: a, rendition: i.current }),
                    /* @__PURE__ */ W.jsxs("div", { className: "r_epub_header_right ", children: [
                      /* @__PURE__ */ W.jsx(mh, {}),
                      /* @__PURE__ */ W.jsx(wh, {}),
                      /* @__PURE__ */ W.jsx(th, {})
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ W.jsx("div", { className: "r_epub_main_wrapper r_epub_container", children: /* @__PURE__ */ W.jsxs("div", { className: "r_epub_main_container", children: [
                /* @__PURE__ */ W.jsx(
                  "div",
                  {
                    style: { backgroundColor: f.theme.container },
                    className: "r_epub_viewer ",
                    ref: r
                  }
                ),
                f.direction === "horizontal" && /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
                  /* @__PURE__ */ W.jsx("div", { onClick: w, className: "r_epub_next_btn", children: /* @__PURE__ */ W.jsx(ss, { fill: f.theme.txt, className: "icon" }) }),
                  /* @__PURE__ */ W.jsx("div", { onClick: m, className: "r_epub_prev_btn", children: /* @__PURE__ */ W.jsx(ss, { fill: f.theme.txt, className: "icon" }) })
                ] }),
                u && /* @__PURE__ */ W.jsx("div", { className: "loading_wrapper", children: /* @__PURE__ */ W.jsx(Ch, {}) })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ W.jsx(xh, {})
      ]
    }
  );
}
const Dh = (n) => _h(n, {
  vertical: {
    manager: "continuous",
    flow: "scrolled-doc",
    minSpreadWidth: 99999
  },
  "": {}
});
export {
  Th as default
};
