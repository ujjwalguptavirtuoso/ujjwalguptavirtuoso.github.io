/*! For license information please see main.0a287a79.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, n, t) => {
        var r = t(43),
          a = t(853);
        function l(e) {
          for (
            var n =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              t = 1;
            t < arguments.length;
            t++
          )
            n += "&args[]=" + encodeURIComponent(arguments[t]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, n) {
          u(e, n), u(e + "Capture", n);
        }
        function u(e, n) {
          for (o[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, n, t, r, a, l, i) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var n = e[0];
            g[n] = new m(n, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, n, t, r) {
          var a = g.hasOwnProperty(n) ? g[n] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < n.length) ||
              ("o" !== n[0] && "O" !== n[0]) ||
              ("n" !== n[1] && "N" !== n[1])) &&
            ((function (e, n, t, r) {
              if (
                null === n ||
                "undefined" === typeof n ||
                (function (e, n, t, r) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, r)
              )
                return !0;
              if (r) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, a, r) && (t = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(n) &&
                (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
              : ((n = a.attributeName),
                (r = a.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t =
                      3 === (a = a.type) || (4 === a && !0 === t)
                        ? ""
                        : "" + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(v, y);
            g[n] = new m(n, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var n = e.replace(v, y);
              g[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(v, y);
            g[n] = new m(
              n,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          N = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var O,
          F = Object.assign;
        function D(e) {
          if (void 0 === O)
            try {
              throw Error();
            } catch (t) {
              var n = t.stack.trim().match(/\n( *(at )?)/);
              O = (n && n[1]) || "";
            }
          return "\n" + O + e;
        }
        var A = !1;
        function U(e, n) {
          if (!e || A) return "";
          A = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (u) {
                  r = u;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case N:
              return "Profiler";
            case j:
              return "StrictMode";
            case P:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = n.displayName || n.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case z:
                return null !== (n = e.displayName || null)
                  ? n
                  : H(e.type) || "Memo";
              case I:
                (n = e._payload), (e = e._init);
                try {
                  return H(e(n));
                } catch (t) {}
            }
          return null;
        }
        function V(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (n.displayName || "Context") + ".Consumer";
            case 10:
              return (n._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ""),
                n.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return n;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(n);
            case 8:
              return n === j ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof n)
                return n.displayName || n.name || null;
              if ("string" === typeof n) return n;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === n || "radio" === n)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = $(e) ? "checked" : "value",
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                r = "" + e[n];
              if (
                !e.hasOwnProperty(n) &&
                "undefined" !== typeof t &&
                "function" === typeof t.get &&
                "function" === typeof t.set
              ) {
                var a = t.get,
                  l = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== t && (n.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function K(e, n) {
          var t = n.checked;
          return F({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function J(e, n) {
          var t = null == n.defaultValue ? "" : n.defaultValue,
            r = null != n.checked ? n.checked : n.defaultChecked;
          (t = W(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: t,
              controlled:
                "checkbox" === n.type || "radio" === n.type
                  ? null != n.checked
                  : null != n.value,
            });
        }
        function Y(e, n) {
          null != (n = n.checked) && b(e, "checked", n, !1);
        }
        function X(e, n) {
          Y(e, n);
          var t = W(n.value),
            r = n.type;
          if (null != t)
            "number" === r
              ? ((0 === t && "" === e.value) || e.value != t) &&
                (e.value = "" + t)
              : e.value !== "" + t && (e.value = "" + t);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          n.hasOwnProperty("value")
            ? ee(e, n.type, t)
            : n.hasOwnProperty("defaultValue") &&
              ee(e, n.type, W(n.defaultValue)),
            null == n.checked &&
              null != n.defaultChecked &&
              (e.defaultChecked = !!n.defaultChecked);
        }
        function Z(e, n, t) {
          if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== n.value && null !== n.value)
              )
            )
              return;
            (n = "" + e._wrapperState.initialValue),
              t || n === e.value || (e.value = n),
              (e.defaultValue = n);
          }
          "" !== (t = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ("number" === n && q(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
            for (t = 0; t < e.length; t++)
              (a = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== a && (e[t].selected = a),
                a && r && (e[t].defaultSelected = !0);
          } else {
            for (t = "" + W(t), n = null, a = 0; a < e.length; a++) {
              if (e[a].value === t)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== n || e[a].disabled || (n = e[a]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function re(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(l(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(l(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ""), (t = n);
          }
          e._wrapperState = { initialValue: W(t) };
        }
        function le(e, n) {
          var t = W(n.value),
            r = W(n.defaultValue);
          null != t &&
            ((t = "" + t) !== e.value && (e.value = t),
            null == n.defaultValue &&
              e.defaultValue !== t &&
              (e.defaultValue = t)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue &&
            "" !== n &&
            null !== n &&
            (e.value = n);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, n) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(n)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, n) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = n;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + n.valueOf().toString() + "</svg>",
                    n = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, n);
                  });
                }
              : ce);
        function fe(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, n, t) {
          return null == n || "boolean" === typeof n || "" === n
            ? ""
            : t ||
              "number" !== typeof n ||
              0 === n ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + n).trim()
            : n + "px";
        }
        function ge(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var r = 0 === t.indexOf("--"),
                a = me(t, n[t], r);
              "float" === t && (t = "cssFloat"),
                r ? e.setProperty(t, a) : (e[t] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[n] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, n) {
          if (n) {
            if (
              ve[e] &&
              (null != n.children || null != n.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(l(60));
              if (
                "object" !== typeof n.dangerouslySetInnerHTML ||
                !("__html" in n.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != n.style && "object" !== typeof n.style)
              throw Error(l(62));
          }
        }
        function be(e, n) {
          if (-1 === e.indexOf("-")) return "string" === typeof n.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          je = null;
        function Ne(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(l(280));
            var n = e.stateNode;
            n && ((n = ka(n)), xe(e.stateNode, e.type, n));
          }
        }
        function Ce(e) {
          Se ? (je ? je.push(e) : (je = [e])) : (Se = e);
        }
        function Ee() {
          if (Se) {
            var e = Se,
              n = je;
            if (((je = Se = null), Ne(e), n))
              for (e = 0; e < n.length; e++) Ne(n[e]);
          }
        }
        function _e(e, n) {
          return e(n);
        }
        function Pe() {}
        var Te = !1;
        function ze(e, n, t) {
          if (Te) return e(n, t);
          Te = !0;
          try {
            return _e(e, n, t);
          } finally {
            (Te = !1), (null !== Se || null !== je) && (Pe(), Ee());
          }
        }
        function Ie(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = ka(t);
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" !== typeof t) throw Error(l(231, n, typeof t));
          return t;
        }
        var Le = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Le = !1;
          }
        function Re(e, n, t, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Oe = !1,
          Fe = null,
          De = !1,
          Ae = null,
          Ue = {
            onError: function (e) {
              (Oe = !0), (Fe = e);
            },
          };
        function Be(e, n, t, r, a, l, i, o, s) {
          (Oe = !1), (Fe = null), Re.apply(Ue, arguments);
        }
        function He(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (He(e) !== e) throw Error(l(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = He(e))) throw Error(l(188));
                return n !== e ? null : e;
              }
              for (var t = e, r = n; ; ) {
                var a = t.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    t = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === t) return We(a), e;
                    if (i === r) return We(a), n;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (t.return !== r.return) (t = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === t) {
                      (o = !0), (t = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (t = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === t) {
                        (o = !0), (t = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (t = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (t.alternate !== r) throw Error(l(190));
              }
              if (3 !== t.tag) throw Error(l(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = Qe(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var Ge = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          en = a.unstable_UserBlockingPriority,
          nn = a.unstable_NormalPriority,
          tn = a.unstable_LowPriority,
          rn = a.unstable_IdlePriority,
          an = null,
          ln = null;
        var on = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((sn(e) / un) | 0)) | 0;
              },
          sn = Math.log,
          un = Math.LN2;
        var cn = 64,
          dn = 4194304;
        function fn(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & t;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = fn(o)) : 0 !== (l &= i) && (r = fn(l));
          } else 0 !== (i = t & ~a) ? (r = fn(i)) : 0 !== l && (r = fn(l));
          if (0 === r) return 0;
          if (
            0 !== n &&
            n !== r &&
            0 === (n & a) &&
            ((a = r & -r) >= (l = n & -n) || (16 === a && 0 !== (4194240 & l)))
          )
            return n;
          if ((0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= r; 0 < n; )
              (a = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~a);
          return r;
        }
        function hn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function mn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gn() {
          var e = cn;
          return 0 === (4194240 & (cn <<= 1)) && (cn = 64), e;
        }
        function vn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function yn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - on(n))] = t);
        }
        function bn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var r = 31 - on(t),
              a = 1 << r;
            (a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a);
          }
        }
        var wn = 0;
        function kn(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xn,
          Sn,
          jn,
          Nn,
          Cn,
          En = !1,
          _n = [],
          Pn = null,
          Tn = null,
          zn = null,
          In = new Map(),
          Ln = new Map(),
          Mn = [],
          Rn =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function On(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pn = null;
              break;
            case "dragenter":
            case "dragleave":
              Tn = null;
              break;
            case "mouseover":
            case "mouseout":
              zn = null;
              break;
            case "pointerover":
            case "pointerout":
              In.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ln.delete(n.pointerId);
          }
        }
        function Fn(e, n, t, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== n && null !== (n = ba(n)) && Sn(n),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              null !== a && -1 === n.indexOf(a) && n.push(a),
              e);
        }
        function Dn(e) {
          var n = ya(e.target);
          if (null !== n) {
            var t = He(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = Ve(t)))
                  return (
                    (e.blockedOn = n),
                    void Cn(e.priority, function () {
                      jn(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function An(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
              return null !== (n = ba(t)) && Sn(n), (e.blockedOn = t), !1;
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            (we = r), t.target.dispatchEvent(r), (we = null), n.shift();
          }
          return !0;
        }
        function Un(e, n, t) {
          An(e) && t.delete(n);
        }
        function Bn() {
          (En = !1),
            null !== Pn && An(Pn) && (Pn = null),
            null !== Tn && An(Tn) && (Tn = null),
            null !== zn && An(zn) && (zn = null),
            In.forEach(Un),
            Ln.forEach(Un);
        }
        function Hn(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            En ||
              ((En = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bn)));
        }
        function Vn(e) {
          function n(n) {
            return Hn(n, e);
          }
          if (0 < _n.length) {
            Hn(_n[0], e);
            for (var t = 1; t < _n.length; t++) {
              var r = _n[t];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pn && Hn(Pn, e),
              null !== Tn && Hn(Tn, e),
              null !== zn && Hn(zn, e),
              In.forEach(n),
              Ln.forEach(n),
              t = 0;
            t < Mn.length;
            t++
          )
            (r = Mn[t]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mn.length && null === (t = Mn[0]).blockedOn; )
            Dn(t), null === t.blockedOn && Mn.shift();
        }
        var Wn = w.ReactCurrentBatchConfig,
          $n = !0;
        function Qn(e, n, t, r) {
          var a = wn,
            l = Wn.transition;
          Wn.transition = null;
          try {
            (wn = 1), qn(e, n, t, r);
          } finally {
            (wn = a), (Wn.transition = l);
          }
        }
        function Gn(e, n, t, r) {
          var a = wn,
            l = Wn.transition;
          Wn.transition = null;
          try {
            (wn = 4), qn(e, n, t, r);
          } finally {
            (wn = a), (Wn.transition = l);
          }
        }
        function qn(e, n, t, r) {
          if ($n) {
            var a = Jn(e, n, t, r);
            if (null === a) Wr(e, n, r, Kn, t), On(e, r);
            else if (
              (function (e, n, t, r, a) {
                switch (n) {
                  case "focusin":
                    return (Pn = Fn(Pn, e, n, t, r, a)), !0;
                  case "dragenter":
                    return (Tn = Fn(Tn, e, n, t, r, a)), !0;
                  case "mouseover":
                    return (zn = Fn(zn, e, n, t, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return In.set(l, Fn(In.get(l) || null, e, n, t, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Ln.set(l, Fn(Ln.get(l) || null, e, n, t, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, n, t, r)
            )
              r.stopPropagation();
            else if ((On(e, r), 4 & n && -1 < Rn.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && xn(l),
                  null === (l = Jn(e, n, t, r)) && Wr(e, n, r, Kn, t),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, n, r, null, t);
          }
        }
        var Kn = null;
        function Jn(e, n, t, r) {
          if (((Kn = null), null !== (e = ya((e = ke(r))))))
            if (null === (n = He(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = Ve(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated)
                return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Kn = e), null;
        }
        function Yn(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case rn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xn = null,
          Zn = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = Zn,
            r = t.length,
            a = "value" in Xn ? Xn.value : Xn.textContent,
            l = a.length;
          for (e = 0; e < r && t[e] === a[e]; e++);
          var i = r - e;
          for (n = 1; n <= i && t[r - n] === a[l - n]; n++);
          return (et = a.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rt() {
          return !0;
        }
        function at() {
          return !1;
        }
        function lt(e) {
          function n(n, t, r, a, l) {
            for (var i in ((this._reactName = n),
            (this._targetInst = r),
            (this.type = t),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rt
                : at),
              (this.isPropagationStopped = at),
              this
            );
          }
          return (
            F(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rt));
              },
              persist: function () {},
              isPersistent: rt,
            }),
            n
          );
        }
        var it,
          ot,
          st,
          ut = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ct = lt(ut),
          dt = F({}, ut, { view: 0, detail: 0 }),
          ft = lt(dt),
          pt = F({}, dt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Nt,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== st &&
                    (st && "mousemove" === e.type
                      ? ((it = e.screenX - st.screenX),
                        (ot = e.screenY - st.screenY))
                      : (ot = it = 0),
                    (st = e)),
                  it);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ot;
            },
          }),
          ht = lt(pt),
          mt = lt(F({}, pt, { dataTransfer: 0 })),
          gt = lt(F({}, dt, { relatedTarget: 0 })),
          vt = lt(
            F({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yt = F({}, ut, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bt = lt(yt),
          wt = lt(F({}, ut, { data: 0 })),
          kt = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xt = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          St = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function jt(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = St[e]) && !!n[e];
        }
        function Nt() {
          return jt;
        }
        var Ct = F({}, dt, {
            key: function (e) {
              if (e.key) {
                var n = kt[e.key] || e.key;
                if ("Unidentified" !== n) return n;
              }
              return "keypress" === e.type
                ? 13 === (e = tt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xt[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Nt,
            charCode: function (e) {
              return "keypress" === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Et = lt(Ct),
          _t = lt(
            F({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pt = lt(
            F({}, dt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nt,
            })
          ),
          Tt = lt(
            F({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          zt = F({}, pt, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          It = lt(zt),
          Lt = [9, 13, 27, 32],
          Mt = c && "CompositionEvent" in window,
          Rt = null;
        c && "documentMode" in document && (Rt = document.documentMode);
        var Ot = c && "TextEvent" in window && !Rt,
          Ft = c && (!Mt || (Rt && 8 < Rt && 11 >= Rt)),
          Dt = String.fromCharCode(32),
          At = !1;
        function Ut(e, n) {
          switch (e) {
            case "keyup":
              return -1 !== Lt.indexOf(n.keyCode);
            case "keydown":
              return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bt(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Ht = !1;
        var Vt = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wt(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!Vt[e.type] : "textarea" === n;
        }
        function $t(e, n, t, r) {
          Ce(r),
            0 < (n = Qr(n, "onChange")).length &&
              ((t = new ct("onChange", "change", null, t, r)),
              e.push({ event: t, listeners: n }));
        }
        var Qt = null,
          Gt = null;
        function qt(e) {
          Dr(e, 0);
        }
        function Kt(e) {
          if (G(wa(e))) return e;
        }
        function Jt(e, n) {
          if ("change" === e) return n;
        }
        var Yt = !1;
        if (c) {
          var Xt;
          if (c) {
            var Zt = "oninput" in document;
            if (!Zt) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zt = "function" === typeof er.oninput);
            }
            Xt = Zt;
          } else Xt = !1;
          Yt = Xt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Qt && (Qt.detachEvent("onpropertychange", tr), (Gt = Qt = null));
        }
        function tr(e) {
          if ("value" === e.propertyName && Kt(Gt)) {
            var n = [];
            $t(n, Gt, e, ke(e)), ze(qt, n);
          }
        }
        function rr(e, n, t) {
          "focusin" === e
            ? (nr(), (Gt = t), (Qt = n).attachEvent("onpropertychange", tr))
            : "focusout" === e && nr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kt(Gt);
        }
        function lr(e, n) {
          if ("click" === e) return Kt(n);
        }
        function ir(e, n) {
          if ("input" === e || "change" === e) return Kt(n);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              };
        function sr(e, n) {
          if (or(e, n)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            r = Object.keys(n);
          if (t.length !== r.length) return !1;
          for (r = 0; r < t.length; r++) {
            var a = t[r];
            if (!d.call(n, a) || !or(e[a], n[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, n) {
          var t,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((t = e + r.textContent.length), e <= n && t >= n))
                return { node: r, offset: n - e };
              e = t;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? dr(e, n.parentNode)
                  : "contains" in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function fr() {
          for (var e = window, n = q(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = "string" === typeof n.contentWindow.location.href;
            } catch (r) {
              t = !1;
            }
            if (!t) break;
            n = q((e = n.contentWindow).document);
          }
          return n;
        }
        function pr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (("input" === n &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === n ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var n = fr(),
            t = e.focusedElem,
            r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            dr(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && pr(t))
              if (
                ((n = r.start),
                void 0 === (e = r.end) && (e = n),
                "selectionStart" in t)
              )
                (t.selectionStart = n),
                  (t.selectionEnd = Math.min(e, t.value.length));
              else if (
                (e =
                  ((n = t.ownerDocument || document) && n.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = t.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(t, l));
                var i = cr(t, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((n = n.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(n), e.extend(i.node, i.offset))
                    : (n.setEnd(i.node, i.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < n.length;
              t++
            )
              ((e = n[t]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, n, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          br ||
            null == gr ||
            gr !== q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, "onSelect")).length &&
                ((n = new ct("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = gr))));
        }
        function kr(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t["Webkit" + e] = "webkit" + n),
            (t["Moz" + e] = "moz" + n),
            t
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          jr = {};
        function Nr(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var n,
            t = xr[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in jr) return (Sr[e] = t[n]);
          return e;
        }
        c &&
          ((jr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Cr = Nr("animationend"),
          Er = Nr("animationiteration"),
          _r = Nr("animationstart"),
          Pr = Nr("transitionend"),
          Tr = new Map(),
          zr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, n) {
          Tr.set(e, n), s(n, [e]);
        }
        for (var Lr = 0; Lr < zr.length; Lr++) {
          var Mr = zr[Lr];
          Ir(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Ir(Cr, "onAnimationEnd"),
          Ir(Er, "onAnimationIteration"),
          Ir(_r, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function Fr(e, n, t) {
          var r = e.type || "unknown-event";
          (e.currentTarget = t),
            (function (e, n, t, r, a, i, o, s, u) {
              if ((Be.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(l(198));
                var c = Fe;
                (Oe = !1), (Fe = null), De || ((De = !0), (Ae = c));
              }
            })(r, n, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (n)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, o, u), (l = s);
                }
            }
          }
          if (De) throw ((e = Ae), (De = !1), (Ae = null), e);
        }
        function Ar(e, n) {
          var t = n[ma];
          void 0 === t && (t = n[ma] = new Set());
          var r = e + "__bubble";
          t.has(r) || (Vr(n, e, 2, !1), t.add(r));
        }
        function Ur(e, n, t) {
          var r = 0;
          n && (r |= 4), Vr(t, e, r, n);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (n) {
                "selectionchange" !== n &&
                  (Or.has(n) || Ur(n, !1, e), Ur(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[Br] || ((n[Br] = !0), Ur("selectionchange", !1, n));
          }
        }
        function Vr(e, n, t, r) {
          switch (Yn(n)) {
            case 1:
              var a = Qn;
              break;
            case 4:
              a = Gn;
              break;
            default:
              a = qn;
          }
          (t = a.bind(null, n, t, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(n, t, { capture: !0, passive: a })
                : e.addEventListener(n, t, !0)
              : void 0 !== a
              ? e.addEventListener(n, t, { passive: a })
              : e.addEventListener(n, t, !1);
        }
        function Wr(e, n, t, r, a) {
          var l = r;
          if (0 === (1 & n) && 0 === (2 & n) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          ze(function () {
            var r = l,
              a = ke(t),
              i = [];
            e: {
              var o = Tr.get(e);
              if (void 0 !== o) {
                var s = ct,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tt(t)) break e;
                  case "keydown":
                  case "keyup":
                    s = Et;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gt);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gt);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gt;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = ht;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mt;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pt;
                    break;
                  case Cr:
                  case Er:
                  case _r:
                    s = vt;
                    break;
                  case Pr:
                    s = Tt;
                    break;
                  case "scroll":
                    s = ft;
                    break;
                  case "wheel":
                    s = It;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bt;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = _t;
                }
                var c = 0 !== (4 & n),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ie(h, f)) &&
                        c.push($r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, t, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  t === we ||
                  !(u = t.relatedTarget || t.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = t.relatedTarget || t.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = ht),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = _t),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(m, h + "leave", s, t, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, t, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Gr(p)) h++;
                    for (p = 0, m = f; m; m = Gr(m)) p++;
                    for (; 0 < h - p; ) (c = Gr(c)), h--;
                    for (; 0 < p - h; ) (f = Gr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Gr(c)), (f = Gr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(i, o, s, c, !1),
                  null !== u && null !== d && qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var g = Jt;
              else if (Wt(o))
                if (Yt) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? $t(i, g, t, a)
                  : (v && v(e, o, r),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wt(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, t, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, t, a);
              }
              var y;
              if (Mt)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Ht
                  ? Ut(e, t) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === t.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ft &&
                  "ko" !== t.locale &&
                  (Ht || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Ht && (y = nt())
                    : ((Zn = "value" in (Xn = a) ? Xn.value : Xn.textContent),
                      (Ht = !0))),
                0 < (v = Qr(r, b)).length &&
                  ((b = new wt(b, e, null, t, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bt(t)) && (b.data = y))),
                (y = Ot
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return Bt(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((At = !0), Dt);
                        case "textInput":
                          return (e = n.data) === Dt && At ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Ht)
                        return "compositionend" === e || (!Mt && Ut(e, n))
                          ? ((e = nt()), (et = Zn = Xn = null), (Ht = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case "compositionend":
                          return Ft && "ko" !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wt("onBeforeInput", "beforeinput", null, t, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(i, n);
          });
        }
        function $r(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Qr(e, n) {
          for (var t = n + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Ie(e, t)) && r.unshift($r(e, l, a)),
              null != (l = Ie(e, n)) && r.push($r(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, n, t, r, a) {
          for (var l = n._reactName, i = []; null !== t && t !== r; ) {
            var o = t,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Ie(t, l)) && i.unshift($r(t, s, o))
                : a || (null != (s = Ie(t, l)) && i.push($r(t, s, o)))),
              (t = t.return);
          }
          0 !== i.length && e.push({ event: n, listeners: i });
        }
        var Kr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Jr, "");
        }
        function Xr(e, n, t) {
          if (((n = Yr(n)), Yr(e) !== n && t)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          na = null;
        function ta(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof n.children ||
            "number" === typeof n.children ||
            ("object" === typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, n) {
          var t = n,
            r = 0;
          do {
            var a = t.nextSibling;
            if ((e.removeChild(t), a && 8 === a.nodeType))
              if ("/$" === (t = a.data)) {
                if (0 === r) return e.removeChild(a), void Vn(n);
                r--;
              } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
            t = a;
          } while (t);
          Vn(n);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
              if ("/$" === n) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("$" === t || "$!" === t || "$?" === t) {
                if (0 === n) return e;
                n--;
              } else "/$" === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var n = e[fa];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[ha] || t[fa])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((t = e[fa])) return t;
                  e = ca(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function ja(e) {
          return { current: e };
        }
        function Na(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function Ca(e, n) {
          Sa++, (xa[Sa] = e.current), (e.current = n);
        }
        var Ea = {},
          _a = ja(Ea),
          Pa = ja(!1),
          Ta = Ea;
        function za(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Ea;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in t) l[a] = n[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ia(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Na(Pa), Na(_a);
        }
        function Ma(e, n, t) {
          if (_a.current !== Ea) throw Error(l(168));
          Ca(_a, n), Ca(Pa, t);
        }
        function Ra(e, n, t) {
          var r = e.stateNode;
          if (
            ((n = n.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return t;
          for (var a in (r = r.getChildContext()))
            if (!(a in n)) throw Error(l(108, V(e) || "Unknown", a));
          return F({}, t, r);
        }
        function Oa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ea),
            (Ta = _a.current),
            Ca(_a, e),
            Ca(Pa, Pa.current),
            !0
          );
        }
        function Fa(e, n, t) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          t
            ? ((e = Ra(e, n, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Na(Pa),
              Na(_a),
              Ca(_a, e))
            : Na(Pa),
            Ca(Pa, t);
        }
        var Da = null,
          Aa = !1,
          Ua = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ha() {
          if (!Ua && null !== Da) {
            Ua = !0;
            var e = 0,
              n = wn;
            try {
              var t = Da;
              for (wn = 1; e < t.length; e++) {
                var r = t[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Aa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Ge(Ze, Ha), a);
            } finally {
              (wn = n), (Ua = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          $a = null,
          Qa = 0,
          Ga = [],
          qa = 0,
          Ka = null,
          Ja = 1,
          Ya = "";
        function Xa(e, n) {
          (Va[Wa++] = Qa), (Va[Wa++] = $a), ($a = e), (Qa = n);
        }
        function Za(e, n, t) {
          (Ga[qa++] = Ja), (Ga[qa++] = Ya), (Ga[qa++] = Ka), (Ka = e);
          var r = Ja;
          e = Ya;
          var a = 32 - on(r) - 1;
          (r &= ~(1 << a)), (t += 1);
          var l = 32 - on(n) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ja = (1 << (32 - on(n) + a)) | (t << a) | r),
              (Ya = l + e);
          } else (Ja = (1 << l) | (t << a) | r), (Ya = e);
        }
        function el(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function nl(e) {
          for (; e === $a; )
            ($a = Va[--Wa]), (Va[Wa] = null), (Qa = Va[--Wa]), (Va[Wa] = null);
          for (; e === Ka; )
            (Ka = Ga[--qa]),
              (Ga[qa] = null),
              (Ya = Ga[--qa]),
              (Ga[qa] = null),
              (Ja = Ga[--qa]),
              (Ga[qa] = null);
        }
        var tl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, n) {
          var t = Iu(5, null, null, 0);
          (t.elementType = "DELETED"),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions)
              ? ((e.deletions = [t]), (e.flags |= 16))
              : n.push(t);
        }
        function ol(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !==
                  (n =
                    1 !== n.nodeType ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                      ? null
                      : n) &&
                ((e.stateNode = n), (tl = e), (rl = ua(n.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (tl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== Ka ? { id: Ja, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: t,
                  retryLane: 1073741824,
                }),
                ((t = Iu(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (tl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var n = rl;
            if (n) {
              var t = n;
              if (!ol(e, n)) {
                if (sl(e)) throw Error(l(418));
                n = ua(t.nextSibling);
                var r = tl;
                n && ol(e, n)
                  ? il(r, t)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (tl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (tl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          tl = e;
        }
        function dl(e) {
          if (e !== tl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n =
                "head" !== (n = e.type) &&
                "body" !== n &&
                !ta(e.type, e.memoizedProps)),
            n && (n = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; n; ) il(e, n), (n = ua(n.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ("/$" === t) {
                    if (0 === n) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = tl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = tl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function gl(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = F({}, n)), (e = e.defaultProps)))
              void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        var vl = ja(null),
          yl = null,
          bl = null,
          wl = null;
        function kl() {
          wl = bl = yl = null;
        }
        function xl(e) {
          var n = vl.current;
          Na(vl), (e._currentValue = n);
        }
        function Sl(e, n, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function jl(e, n) {
          (yl = e),
            (wl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & n) && (wo = !0), (e.firstContext = null));
        }
        function Nl(e) {
          var n = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: n, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return n;
        }
        var Cl = null;
        function El(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function _l(e, n, t, r) {
          var a = n.interleaved;
          return (
            null === a
              ? ((t.next = t), El(n))
              : ((t.next = a.next), (a.next = t)),
            (n.interleaved = t),
            Pl(e, r)
          );
        }
        function Pl(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n),
              null !== (t = e.alternate) && (t.childLanes |= n),
              (t = e),
              (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var Tl = !1;
        function zl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Il(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ll(e, n) {
          return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ml(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)),
              (r.pending = n),
              Pl(e, t)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((n.next = n), El(r))
              : ((n.next = a.next), (a.next = n)),
            (r.interleaved = n),
            Pl(e, t)
          );
        }
        function Rl(e, n, t) {
          if (
            null !== (n = n.updateQueue) &&
            ((n = n.shared), 0 !== (4194240 & t))
          ) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        function Ol(e, n) {
          var t = e.updateQueue,
            r = e.alternate;
          if (null !== r && t === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (t = t.next);
              } while (null !== t);
              null === l ? (a = l = n) : (l = l.next = n);
            } else a = l = n;
            return (
              (t = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n);
        }
        function Fl(e, n, t, r) {
          var a = e.updateQueue;
          Tl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = n), (p = t), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Tl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (n = a.shared.interleaved))
            ) {
              a = n;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== n);
            } else null === l && (a.shared.lanes = 0);
            (Fs |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Dl(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var r = e[n],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = t), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Al = new r.Component().refs;
        function Ul(e, n, t, r) {
          (t =
            null === (t = t(r, (n = e.memoizedState))) || void 0 === t
              ? n
              : F({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var Bl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = nu(),
              a = tu(e),
              l = Ll(r, a);
            (l.payload = n),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (n = Ml(e, l, a)) && (ru(n, e, a, r), Rl(n, e, a));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = nu(),
              a = tu(e),
              l = Ll(r, a);
            (l.tag = 1),
              (l.payload = n),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (n = Ml(e, l, a)) && (ru(n, e, a, r), Rl(n, e, a));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = nu(),
              r = tu(e),
              a = Ll(t, r);
            (a.tag = 2),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (n = Ml(e, a, r)) && (ru(n, e, r, t), Rl(n, e, r));
          },
        };
        function Hl(e, n, t, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !n.prototype ||
                !n.prototype.isPureReactComponent ||
                !sr(t, r) ||
                !sr(a, l);
        }
        function Vl(e, n, t) {
          var r = !1,
            a = Ea,
            l = n.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Nl(l))
              : ((a = Ia(n) ? Ta : _a.current),
                (l = (r = null !== (r = n.contextTypes) && void 0 !== r)
                  ? za(e, a)
                  : Ea)),
            (n = new n(t, l)),
            (e.memoizedState =
              null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = Bl),
            (e.stateNode = n),
            (n._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            n
          );
        }
        function Wl(e, n, t, r) {
          (e = n.state),
            "function" === typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, r),
            "function" === typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && Bl.enqueueReplaceState(n, n.state, null);
        }
        function $l(e, n, t, r) {
          var a = e.stateNode;
          (a.props = t), (a.state = e.memoizedState), (a.refs = Al), zl(e);
          var l = n.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Nl(l))
            : ((l = Ia(n) ? Ta : _a.current), (a.context = za(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = n.getDerivedStateFromProps) &&
              (Ul(e, n, l, t), (a.state = e.memoizedState)),
            "function" === typeof n.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((n = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              n !== a.state && Bl.enqueueReplaceState(a, a.state, null),
              Fl(e, t, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, n, t) {
          if (
            null !== (e = t.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(l(309));
                var r = t.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== n &&
                null !== n.ref &&
                "function" === typeof n.ref &&
                n.ref._stringRef === i
                ? n.ref
                : ((n = function (e) {
                    var n = a.refs;
                    n === Al && (n = a.refs = {}),
                      null === e ? delete n[i] : (n[i] = e);
                  }),
                  (n._stringRef = i),
                  n);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!t._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Gl(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(n).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ql(e) {
          return (0, e._init)(e._payload);
        }
        function Kl(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r; ) n(t, r), (r = r.sibling);
            return null;
          }
          function r(e, n) {
            for (e = new Map(); null !== n; )
              null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                (n = n.sibling);
            return e;
          }
          function a(e, n) {
            return ((e = Mu(e, n)).index = 0), (e.sibling = null), e;
          }
          function i(n, t, r) {
            return (
              (n.index = r),
              e
                ? null !== (r = n.alternate)
                  ? (r = r.index) < t
                    ? ((n.flags |= 2), t)
                    : r
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function o(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function s(e, n, t, r) {
            return null === n || 6 !== n.tag
              ? (((n = Du(t, e.mode, r)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function u(e, n, t, r) {
            var l = t.type;
            return l === S
              ? d(e, n, t.props.children, r, t.key)
              : null !== n &&
                (n.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === I &&
                    ql(l) === n.type))
              ? (((r = a(n, t.props)).ref = Ql(e, n, t)), (r.return = e), r)
              : (((r = Ru(t.type, t.key, t.props, null, e.mode, r)).ref = Ql(
                  e,
                  n,
                  t
                )),
                (r.return = e),
                r);
          }
          function c(e, n, t, r) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Au(t, e.mode, r)).return = e), n)
              : (((n = a(n, t.children || [])).return = e), n);
          }
          function d(e, n, t, r, l) {
            return null === n || 7 !== n.tag
              ? (((n = Ou(t, e.mode, r, l)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function f(e, n, t) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return ((n = Du("" + n, e.mode, t)).return = e), n;
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return (
                    ((t = Ru(n.type, n.key, n.props, null, e.mode, t)).ref = Ql(
                      e,
                      null,
                      n
                    )),
                    (t.return = e),
                    t
                  );
                case x:
                  return ((n = Au(n, e.mode, t)).return = e), n;
                case I:
                  return f(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || R(n))
                return ((n = Ou(n, e.mode, t, null)).return = e), n;
              Gl(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var a = null !== n ? n.key : null;
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return null !== a ? null : s(e, n, "" + t, r);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return t.key === a ? u(e, n, t, r) : null;
                case x:
                  return t.key === a ? c(e, n, t, r) : null;
                case I:
                  return p(e, n, (a = t._init)(t._payload), r);
              }
              if (ne(t) || R(t)) return null !== a ? null : d(e, n, t, r, null);
              Gl(e, t);
            }
            return null;
          }
          function h(e, n, t, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(n, (e = e.get(t) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case I:
                  return h(e, n, t, (0, r._init)(r._payload), a);
              }
              if (ne(r) || R(r))
                return d(n, (e = e.get(t) || null), r, a, null);
              Gl(n, r);
            }
            return null;
          }
          function m(a, l, o, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, o[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && n(a, d),
                (l = i(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === o.length) return t(a, d), al && Xa(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((l = i(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Xa(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (g = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return n(a, e);
                }),
              al && Xa(a, m),
              u
            );
          }
          function g(a, o, s, u) {
            var c = R(s);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = o, g = (o = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && n(a, m),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return t(a, m), al && Xa(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = i(y, o, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Xa(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return n(a, e);
                }),
              al && Xa(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            t(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === I &&
                            ql(u) === c.type)
                        ) {
                          t(r, c.sibling),
                            ((l = a(c, i.props)).ref = Ql(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        t(r, c);
                        break;
                      }
                      n(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((l = Ou(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Ru(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Ql(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case x:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          t(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        t(r, l);
                        break;
                      }
                      n(r, l), (l = l.sibling);
                    }
                    ((l = Au(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case I:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (ne(i)) return m(r, l, i, s);
              if (R(i)) return g(r, l, i, s);
              Gl(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (t(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (t(r, l), ((l = Du(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : t(r, l);
          };
        }
        var Jl = Kl(!0),
          Yl = Kl(!1),
          Xl = {},
          Zl = ja(Xl),
          ei = ja(Xl),
          ni = ja(Xl);
        function ti(e) {
          if (e === Xl) throw Error(l(174));
          return e;
        }
        function ri(e, n) {
          switch ((Ca(ni, n), Ca(ei, e), Ca(Zl, Xl), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : se(null, "");
              break;
            default:
              n = se(
                (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Na(Zl), Ca(Zl, n);
        }
        function ai() {
          Na(Zl), Na(ei), Na(ni);
        }
        function li(e) {
          ti(ni.current);
          var n = ti(Zl.current),
            t = se(n, e.type);
          n !== t && (Ca(ei, e), Ca(Zl, t));
        }
        function ii(e) {
          ei.current === e && (Na(Zl), Na(ei));
        }
        var oi = ja(0);
        function si(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (
                null !== t &&
                (null === (t = t.dehydrated) ||
                  "$?" === t.data ||
                  "$!" === t.data)
              )
                return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 !== (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var ui = [];
        function ci() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          fi = w.ReactCurrentBatchConfig,
          pi = 0,
          hi = null,
          mi = null,
          gi = null,
          vi = !1,
          yi = !1,
          bi = 0,
          wi = 0;
        function ki() {
          throw Error(l(321));
        }
        function xi(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!or(e[t], n[t])) return !1;
          return !0;
        }
        function Si(e, n, t, r, a, i) {
          if (
            ((pi = i),
            (hi = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = t(r, a)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = mi = null),
                (n.updateQueue = null),
                (di.current = so),
                (e = t(r, a));
            } while (yi);
          }
          if (
            ((di.current = lo),
            (n = null !== mi && null !== mi.next),
            (pi = 0),
            (gi = mi = hi = null),
            (vi = !1),
            n)
          )
            throw Error(l(300));
          return e;
        }
        function ji() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Ni() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Ci() {
          if (null === mi) {
            var e = hi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var n = null === gi ? hi.memoizedState : gi.next;
          if (null !== n) (gi = n), (mi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Ei(e, n) {
          return "function" === typeof n ? n(e) : n;
        }
        function _i(e) {
          var n = Ci(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = t.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (t.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((pi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (hi.lanes |= d),
                  (Fs |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, n.memoizedState) || (wo = !0),
              (n.memoizedState = r),
              (n.baseState = o),
              (n.baseQueue = u),
              (t.lastRenderedState = r);
          }
          if (null !== (e = t.interleaved)) {
            a = e;
            do {
              (i = a.lane), (hi.lanes |= i), (Fs |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function Pi(e) {
          var n = Ci(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var r = t.dispatch,
            a = t.pending,
            i = n.memoizedState;
          if (null !== a) {
            t.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, n.memoizedState) || (wo = !0),
              (n.memoizedState = i),
              null === n.baseQueue && (n.baseState = i),
              (t.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function zi(e, n) {
          var t = hi,
            r = Ci(),
            a = n(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            Vi(Mi.bind(null, t, r, e), [e]),
            r.getSnapshot !== n ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((t.flags |= 2048),
              Di(9, Li.bind(null, t, r, a, n), void 0, null),
              null === Ts)
            )
              throw Error(l(349));
            0 !== (30 & pi) || Ii(t, n, a);
          }
          return a;
        }
        function Ii(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = hi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (hi.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function Li(e, n, t, r) {
          (n.value = t), (n.getSnapshot = r), Ri(n) && Oi(e);
        }
        function Mi(e, n, t) {
          return t(function () {
            Ri(n) && Oi(e);
          });
        }
        function Ri(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !or(e, t);
          } catch (r) {
            return !0;
          }
        }
        function Oi(e) {
          var n = Pl(e, 1);
          null !== n && ru(n, e, 1, -1);
        }
        function Fi(e) {
          var n = Ni();
          return (
            "function" === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ei,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = no.bind(null, hi, e)),
            [n.memoizedState, e]
          );
        }
        function Di(e, n, t, r) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            null === (n = hi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (hi.updateQueue = n),
                (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Ai() {
          return Ci().memoizedState;
        }
        function Ui(e, n, t, r) {
          var a = Ni();
          (hi.flags |= e),
            (a.memoizedState = Di(1 | n, t, void 0, void 0 === r ? null : r));
        }
        function Bi(e, n, t, r) {
          var a = Ci();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((l = i.destroy), null !== r && xi(r, i.deps)))
              return void (a.memoizedState = Di(n, t, l, r));
          }
          (hi.flags |= e), (a.memoizedState = Di(1 | n, t, l, r));
        }
        function Hi(e, n) {
          return Ui(8390656, 8, e, n);
        }
        function Vi(e, n) {
          return Bi(2048, 8, e, n);
        }
        function Wi(e, n) {
          return Bi(4, 2, e, n);
        }
        function $i(e, n) {
          return Bi(4, 4, e, n);
        }
        function Qi(e, n) {
          return "function" === typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null !== n && void 0 !== n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function Gi(e, n, t) {
          return (
            (t = null !== t && void 0 !== t ? t.concat([e]) : null),
            Bi(4, 4, Qi.bind(null, n, e), t)
          );
        }
        function qi() {}
        function Ki(e, n) {
          var t = Ci();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && xi(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Ji(e, n) {
          var t = Ci();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && xi(n, r[1])
            ? r[0]
            : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Yi(e, n, t) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = t))
            : (or(t, n) ||
                ((t = gn()), (hi.lanes |= t), (Fs |= t), (e.baseState = !0)),
              n);
        }
        function Xi(e, n) {
          var t = wn;
          (wn = 0 !== t && 4 > t ? t : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), n();
          } finally {
            (wn = t), (fi.transition = r);
          }
        }
        function Zi() {
          return Ci().memoizedState;
        }
        function eo(e, n, t) {
          var r = tu(e);
          if (
            ((t = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            to(e))
          )
            ro(n, t);
          else if (null !== (t = _l(e, n, t, r))) {
            ru(t, e, r, nu()), ao(t, n, r);
          }
        }
        function no(e, n, t) {
          var r = tu(e),
            a = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (to(e)) ro(n, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = n.lastRenderedReducer)
            )
              try {
                var i = n.lastRenderedState,
                  o = l(i, t);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = n.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), El(n))
                      : ((a.next = s.next), (s.next = a)),
                    void (n.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (t = _l(e, n, a, r)) &&
              (ru(t, e, r, (a = nu())), ao(t, n, r));
          }
        }
        function to(e) {
          var n = e.alternate;
          return e === hi || (null !== n && n === hi);
        }
        function ro(e, n) {
          yi = vi = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n);
        }
        function ao(e, n, t) {
          if (0 !== (4194240 & t)) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        var lo = {
            readContext: Nl,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Nl,
            useCallback: function (e, n) {
              return (Ni().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: Nl,
            useEffect: Hi,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = null !== t && void 0 !== t ? t.concat([e]) : null),
                Ui(4194308, 4, Qi.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return Ui(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return Ui(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = Ni();
              return (
                (n = void 0 === n ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var r = Ni();
              return (
                (n = void 0 !== t ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, hi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ni().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: qi,
            useDeferredValue: function (e) {
              return (Ni().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                n = e[0];
              return (
                (e = Xi.bind(null, e[1])), (Ni().memoizedState = e), [n, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var r = hi,
                a = Ni();
              if (al) {
                if (void 0 === t) throw Error(l(407));
                t = t();
              } else {
                if (((t = n()), null === Ts)) throw Error(l(349));
                0 !== (30 & pi) || Ii(r, n, t);
              }
              a.memoizedState = t;
              var i = { value: t, getSnapshot: n };
              return (
                (a.queue = i),
                Hi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Di(9, Li.bind(null, r, i, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = Ni(),
                n = Ts.identifierPrefix;
              if (al) {
                var t = Ya;
                (n =
                  ":" +
                  n +
                  "R" +
                  (t = (Ja & ~(1 << (32 - on(Ja) - 1))).toString(32) + t)),
                  0 < (t = bi++) && (n += "H" + t.toString(32)),
                  (n += ":");
              } else n = ":" + n + "r" + (t = wi++).toString(32) + ":";
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Nl,
            useCallback: Ki,
            useContext: Nl,
            useEffect: Vi,
            useImperativeHandle: Gi,
            useInsertionEffect: Wi,
            useLayoutEffect: $i,
            useMemo: Ji,
            useReducer: _i,
            useRef: Ai,
            useState: function () {
              return _i(Ei);
            },
            useDebugValue: qi,
            useDeferredValue: function (e) {
              return Yi(Ci(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [_i(Ei)[0], Ci().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: zi,
            useId: Zi,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Nl,
            useCallback: Ki,
            useContext: Nl,
            useEffect: Vi,
            useImperativeHandle: Gi,
            useInsertionEffect: Wi,
            useLayoutEffect: $i,
            useMemo: Ji,
            useReducer: Pi,
            useRef: Ai,
            useState: function () {
              return Pi(Ei);
            },
            useDebugValue: qi,
            useDeferredValue: function (e) {
              var n = Ci();
              return null === mi
                ? (n.memoizedState = e)
                : Yi(n, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ei)[0], Ci().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: zi,
            useId: Zi,
            unstable_isNewReconciler: !1,
          };
        function uo(e, n) {
          try {
            var t = "",
              r = n;
            do {
              (t += B(r)), (r = r.return);
            } while (r);
            var a = t;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: n, stack: a, digest: null };
        }
        function co(e, n, t) {
          return {
            value: e,
            source: null,
            stack: null != t ? t : null,
            digest: null != n ? n : null,
          };
        }
        function fo(e, n) {
          try {
            console.error(n.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function ho(e, n, t) {
          ((t = Ll(-1, t)).tag = 3), (t.payload = { element: null });
          var r = n.value;
          return (
            (t.callback = function () {
              $s || (($s = !0), (Qs = r)), fo(0, n);
            }),
            t
          );
        }
        function mo(e, n, t) {
          (t = Ll(-1, t)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = n.value;
            (t.payload = function () {
              return r(a);
            }),
              (t.callback = function () {
                fo(0, n);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (t.callback = function () {
                fo(0, n),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            t
          );
        }
        function go(e, n, t) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(n, a);
          } else void 0 === (a = r.get(n)) && ((a = new Set()), r.set(n, a));
          a.has(t) || (a.add(t), (e = Cu.bind(null, e, n, t)), n.then(e, e));
        }
        function vo(e) {
          do {
            var n;
            if (
              ((n = 13 === e.tag) &&
                (n = null === (n = e.memoizedState) || null !== n.dehydrated),
              n)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, n, t, r, a) {
          return 0 === (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag &&
                    (null === t.alternate
                      ? (t.tag = 17)
                      : (((n = Ll(-1, 1)).tag = 2), Ml(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bo = w.ReactCurrentOwner,
          wo = !1;
        function ko(e, n, t, r) {
          n.child = null === e ? Yl(n, null, t, r) : Jl(n, e.child, t, r);
        }
        function xo(e, n, t, r, a) {
          t = t.render;
          var l = n.ref;
          return (
            jl(n, a),
            (r = Si(e, n, t, r, l, a)),
            (t = ji()),
            null === e || wo
              ? (al && t && el(n), (n.flags |= 1), ko(e, n, r, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                $o(e, n, a))
          );
        }
        function So(e, n, t, r, a) {
          if (null === e) {
            var l = t.type;
            return "function" !== typeof l ||
              Lu(l) ||
              void 0 !== l.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = Ru(t.type, null, r, n, n.mode, a)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = l), jo(e, n, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : sr)(i, r) &&
              e.ref === n.ref
            )
              return $o(e, n, a);
          }
          return (
            (n.flags |= 1),
            ((e = Mu(l, r)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function jo(e, n, t, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === n.ref) {
              if (((wo = !1), (n.pendingProps = r = l), 0 === (e.lanes & a)))
                return (n.lanes = e.lanes), $o(e, n, a);
              0 !== (131072 & e.flags) && (wo = !0);
            }
          }
          return Eo(e, n, t, r, a);
        }
        function No(e, n, t) {
          var r = n.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & n.mode))
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Ms, Ls),
                (Ls |= t);
            else {
              if (0 === (1073741824 & t))
                return (
                  (e = null !== l ? l.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (n.updateQueue = null),
                  Ca(Ms, Ls),
                  (Ls |= e),
                  null
                );
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : t),
                Ca(Ms, Ls),
                (Ls |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | t), (n.memoizedState = null))
              : (r = t),
              Ca(Ms, Ls),
              (Ls |= r);
          return ko(e, n, a, t), n.child;
        }
        function Co(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
        }
        function Eo(e, n, t, r, a) {
          var l = Ia(t) ? Ta : _a.current;
          return (
            (l = za(n, l)),
            jl(n, a),
            (t = Si(e, n, t, r, l, a)),
            (r = ji()),
            null === e || wo
              ? (al && r && el(n), (n.flags |= 1), ko(e, n, t, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                $o(e, n, a))
          );
        }
        function _o(e, n, t, r, a) {
          if (Ia(t)) {
            var l = !0;
            Oa(n);
          } else l = !1;
          if ((jl(n, a), null === n.stateNode))
            Wo(e, n), Vl(n, t, r), $l(n, t, r, a), (r = !0);
          else if (null === e) {
            var i = n.stateNode,
              o = n.memoizedProps;
            i.props = o;
            var s = i.context,
              u = t.contextType;
            "object" === typeof u && null !== u
              ? (u = Nl(u))
              : (u = za(n, (u = Ia(t) ? Ta : _a.current)));
            var c = t.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Wl(n, i, r, u)),
              (Tl = !1);
            var f = n.memoizedState;
            (i.state = f),
              Fl(n, r, i, a),
              (s = n.memoizedState),
              o !== r || f !== s || Pa.current || Tl
                ? ("function" === typeof c &&
                    (Ul(n, t, c, r), (s = n.memoizedState)),
                  (o = Tl || Hl(n, t, o, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (n.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = r),
                      (n.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (n.flags |= 4194308),
                  (r = !1));
          } else {
            (i = n.stateNode),
              Il(e, n),
              (o = n.memoizedProps),
              (u = n.type === n.elementType ? o : gl(n.type, o)),
              (i.props = u),
              (d = n.pendingProps),
              (f = i.context),
              "object" === typeof (s = t.contextType) && null !== s
                ? (s = Nl(s))
                : (s = za(n, (s = Ia(t) ? Ta : _a.current)));
            var p = t.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Wl(n, i, r, s)),
              (Tl = !1),
              (f = n.memoizedState),
              (i.state = f),
              Fl(n, r, i, a);
            var h = n.memoizedState;
            o !== d || f !== h || Pa.current || Tl
              ? ("function" === typeof p &&
                  (Ul(n, t, p, r), (h = n.memoizedState)),
                (u = Tl || Hl(n, t, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (n.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (n.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 1024),
                (r = !1));
          }
          return Po(e, n, t, r, l, a);
        }
        function Po(e, n, t, r, a, l) {
          Co(e, n);
          var i = 0 !== (128 & n.flags);
          if (!r && !i) return a && Fa(n, t, !1), $o(e, n, l);
          (r = n.stateNode), (bo.current = n);
          var o =
            i && "function" !== typeof t.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (n.flags |= 1),
            null !== e && i
              ? ((n.child = Jl(n, e.child, null, l)),
                (n.child = Jl(n, null, o, l)))
              : ko(e, n, o, l),
            (n.memoizedState = r.state),
            a && Fa(n, t, !0),
            n.child
          );
        }
        function To(e) {
          var n = e.stateNode;
          n.pendingContext
            ? Ma(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Ma(0, n.context, !1),
            ri(e, n.containerInfo);
        }
        function zo(e, n, t, r, a) {
          return pl(), hl(a), (n.flags |= 256), ko(e, n, t, r), n.child;
        }
        var Io,
          Lo,
          Mo,
          Ro,
          Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Do(e, n, t) {
          var r,
            a = n.pendingProps,
            i = oi.current,
            o = !1,
            s = 0 !== (128 & n.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (n.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(oi, 1 & i),
            null === e)
          )
            return (
              ul(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & n.mode)
                    ? (n.lanes = 1)
                    : "$!" === e.data
                    ? (n.lanes = 8)
                    : (n.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = n.mode),
                      (o = n.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Fu(s, a, 0, null)),
                      (e = Ou(e, a, t, null)),
                      (o.return = n),
                      (e.return = n),
                      (o.sibling = e),
                      (n.child = o),
                      (n.child.memoizedState = Fo(t)),
                      (n.memoizedState = Oo),
                      e)
                    : Ao(n, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, n, t, r, a, i, o) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), Uo(e, n, o, (r = co(Error(l(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = n.mode),
                    (r = Fu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ou(i, a, o, null)).flags |= 2),
                    (r.return = n),
                    (i.return = n),
                    (r.sibling = i),
                    (n.child = r),
                    0 !== (1 & n.mode) && Jl(n, e.child, null, o),
                    (n.child.memoizedState = Fo(o)),
                    (n.memoizedState = Oo),
                    i);
              if (0 === (1 & n.mode)) return Uo(e, n, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Uo(e, n, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), wo || s)) {
                if (null !== (r = Ts)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Pl(e, a), ru(r, e, a, -1));
                }
                return gu(), Uo(e, n, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((n.flags |= 128),
                  (n.child = e.child),
                  (n = _u.bind(null, e)),
                  (a._reactRetry = n),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (tl = n),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Ga[qa++] = Ja),
                    (Ga[qa++] = Ya),
                    (Ga[qa++] = Ka),
                    (Ja = e.id),
                    (Ya = e.overflow),
                    (Ka = n)),
                  (n = Ao(n, r.children)),
                  (n.flags |= 4096),
                  n);
            })(e, n, s, a, r, i, t);
          if (o) {
            (o = a.fallback), (s = n.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && n.child !== i
                ? (((a = n.child).childLanes = 0),
                  (a.pendingProps = u),
                  (n.deletions = null))
                : ((a = Mu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Mu(r, o))
                : ((o = Ou(o, s, t, null)).flags |= 2),
              (o.return = n),
              (a.return = n),
              (a.sibling = o),
              (n.child = a),
              (a = o),
              (o = n.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Fo(t)
                  : {
                      baseLanes: s.baseLanes | t,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~t),
              (n.memoizedState = Oo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Mu(o, { mode: "visible", children: a.children })),
            0 === (1 & n.mode) && (a.lanes = t),
            (a.return = n),
            (a.sibling = null),
            null !== e &&
              (null === (t = n.deletions)
                ? ((n.deletions = [e]), (n.flags |= 16))
                : t.push(e)),
            (n.child = a),
            (n.memoizedState = null),
            a
          );
        }
        function Ao(e, n) {
          return (
            ((n = Fu(
              { mode: "visible", children: n },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = n)
          );
        }
        function Uo(e, n, t, r) {
          return (
            null !== r && hl(r),
            Jl(n, e.child, null, t),
            ((e = Ao(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Bo(e, n, t) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n), Sl(e.return, n, t);
        }
        function Ho(e, n, t, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: a,
              })
            : ((l.isBackwards = n),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = t),
              (l.tailMode = a));
        }
        function Vo(e, n, t) {
          var r = n.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((ko(e, n, r.children, t), 0 !== (2 & (r = oi.current))))
            (r = (1 & r) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, t, n);
                else if (19 === e.tag) Bo(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(oi, r), 0 === (1 & n.mode))) n.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (t = n.child, a = null; null !== t; )
                  null !== (e = t.alternate) && null === si(e) && (a = t),
                    (t = t.sibling);
                null === (t = a)
                  ? ((a = n.child), (n.child = null))
                  : ((a = t.sibling), (t.sibling = null)),
                  Ho(n, !1, a, t, l);
                break;
              case "backwards":
                for (t = null, a = n.child, n.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    n.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = t), (t = a), (a = e);
                }
                Ho(n, !0, t, null, l);
                break;
              case "together":
                Ho(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function Wo(e, n) {
          0 === (1 & n.mode) &&
            null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function $o(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Fs |= n.lanes),
            0 === (t & n.childLanes))
          )
            return null;
          if (null !== e && n.child !== e.child) throw Error(l(153));
          if (null !== n.child) {
            for (
              t = Mu((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((t = t.sibling = Mu(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Qo(e, n) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                n = e.tail;
                for (var t = null; null !== n; )
                  null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case "collapsed":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Go(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n)
            for (var a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = t), n;
        }
        function qo(e, n, t) {
          var r = n.pendingProps;
          switch ((nl(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Go(n), null;
            case 1:
            case 17:
              return Ia(n.type) && La(), Go(n), null;
            case 3:
              return (
                (r = n.stateNode),
                ai(),
                Na(Pa),
                Na(_a),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) ||
                      ((n.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                Lo(e, n),
                Go(n),
                null
              );
            case 5:
              ii(n);
              var a = ti(ni.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                Mo(e, n, t, r, a),
                  e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(l(166));
                  return Go(n), null;
                }
                if (((e = ti(Zl.current)), dl(n))) {
                  (r = n.stateNode), (t = n.type);
                  var i = n.memoizedProps;
                  switch (
                    ((r[fa] = n), (r[pa] = i), (e = 0 !== (1 & n.mode)), t)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rr.length; a++) Ar(Rr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      J(r, i), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ar("invalid", r);
                  }
                  for (var s in (ye(t, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ar("scroll", r);
                    }
                  switch (t) {
                    case "input":
                      Q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (n.updateQueue = r), null !== r && (n.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(t)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === t
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(t, { is: r.is }))
                        : ((e = s.createElement(t)),
                          "select" === t &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, t)),
                    (e[fa] = n),
                    (e[pa] = r),
                    Io(e, n, !1, !1),
                    (n.stateNode = e);
                  e: {
                    switch (((s = be(t, r)), t)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rr.length; a++) Ar(Rr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = K(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (i in (ye(t, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== t || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ar("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (t) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? te(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              te(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (t) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return Go(n), null;
            case 6:
              if (e && null != n.stateNode) Ro(e, n, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === n.stateNode)
                  throw Error(l(166));
                if (((t = ti(ni.current)), ti(Zl.current), dl(n))) {
                  if (
                    ((r = n.stateNode),
                    (t = n.memoizedProps),
                    (r[fa] = n),
                    (i = r.nodeValue !== t) && null !== (e = tl))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  i && (n.flags |= 4);
                } else
                  ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(
                    r
                  ))[fa] = n),
                    (n.stateNode = r);
              }
              return Go(n), null;
            case 13:
              if (
                (Na(oi),
                (r = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & n.mode) &&
                  0 === (128 & n.flags)
                )
                  fl(), pl(), (n.flags |= 98560), (i = !1);
                else if (((i = dl(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = n.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = n;
                  } else
                    pl(),
                      0 === (128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4);
                  Go(n), (i = !1);
                } else null !== ll && (ou(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((n.child.flags |= 8192),
                    0 !== (1 & n.mode) &&
                      (null === e || 0 !== (1 & oi.current)
                        ? 0 === Rs && (Rs = 3)
                        : gu())),
                  null !== n.updateQueue && (n.flags |= 4),
                  Go(n),
                  null);
            case 4:
              return (
                ai(),
                Lo(e, n),
                null === e && Hr(n.stateNode.containerInfo),
                Go(n),
                null
              );
            case 10:
              return xl(n.type._context), Go(n), null;
            case 19:
              if ((Na(oi), null === (i = n.memoizedState))) return Go(n), null;
              if (((r = 0 !== (128 & n.flags)), null === (s = i.rendering)))
                if (r) Qo(i, !1);
                else {
                  if (0 !== Rs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (s = si(e))) {
                        for (
                          n.flags |= 128,
                            Qo(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((n.updateQueue = r), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            r = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = r),
                            ((i = t).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (t = t.sibling);
                        return Ca(oi, (1 & oi.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ye() > Vs &&
                    ((n.flags |= 128),
                    (r = !0),
                    Qo(i, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(s))) {
                    if (
                      ((n.flags |= 128),
                      (r = !0),
                      null !== (t = e.updateQueue) &&
                        ((n.updateQueue = t), (n.flags |= 4)),
                      Qo(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return Go(n), null;
                  } else
                    2 * Ye() - i.renderingStartTime > Vs &&
                      1073741824 !== t &&
                      ((n.flags |= 128),
                      (r = !0),
                      Qo(i, !1),
                      (n.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = n.child), (n.child = s))
                  : (null !== (t = i.last) ? (t.sibling = s) : (n.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((n = i.tail),
                  (i.rendering = n),
                  (i.tail = n.sibling),
                  (i.renderingStartTime = Ye()),
                  (n.sibling = null),
                  (t = oi.current),
                  Ca(oi, r ? (1 & t) | 2 : 1 & t),
                  n)
                : (Go(n), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== n.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (n.flags |= 8192),
                r && 0 !== (1 & n.mode)
                  ? 0 !== (1073741824 & Ls) &&
                    (Go(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : Go(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, n.tag));
        }
        function Ko(e, n) {
          switch ((nl(n), n.tag)) {
            case 1:
              return (
                Ia(n.type) && La(),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 3:
              return (
                ai(),
                Na(Pa),
                Na(_a),
                ci(),
                0 !== (65536 & (e = n.flags)) && 0 === (128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 5:
              return ii(n), null;
            case 13:
              if (
                (Na(oi),
                null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return Na(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return xl(n.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Io = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (Lo = function () {}),
          (Mo = function (e, n, t, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = n.stateNode), ti(Zl.current);
              var l,
                i = null;
              switch (t) {
                case "input":
                  (a = K(e, a)), (r = K(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(t, r), (t = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (t || (t = {}), (t[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (t || (t = {}), (t[l] = u[l]));
                    } else t || (i || (i = []), i.push(c, t)), (t = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ar("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              t && (i = i || []).push("style", t);
              var c = i;
              (n.updateQueue = c) && (n.flags |= 4);
            }
          }),
          (Ro = function (e, n, t, r) {
            t !== r && (n.flags |= 4);
          });
        var Jo = !1,
          Yo = !1,
          Xo = "function" === typeof WeakSet ? WeakSet : Set,
          Zo = null;
        function es(e, n) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (r) {
                Nu(e, n, r);
              }
            else t.current = null;
        }
        function ns(e, n, t) {
          try {
            t();
          } catch (r) {
            Nu(e, n, r);
          }
        }
        var ts = !1;
        function rs(e, n, t) {
          var r = n.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ns(n, t, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, n) {
          if (
            null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
          ) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function ls(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), "function" === typeof n ? n(e) : (n.current = e);
          }
        }
        function is(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), is(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[fa],
              delete n[pa],
              delete n[ma],
              delete n[ga],
              delete n[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType
                    ? (n = t.parentNode).insertBefore(e, t)
                    : (n = t).appendChild(e),
                  (null !== (t = t._reactRootContainer) && void 0 !== t) ||
                    null !== n.onclick ||
                    (n.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, n, t), e = e.sibling; null !== e; )
              us(e, n, t), (e = e.sibling);
        }
        function cs(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, n, t), e = e.sibling; null !== e; )
              cs(e, n, t), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, n, t) {
          for (t = t.child; null !== t; ) hs(e, n, t), (t = t.sibling);
        }
        function hs(e, n, t) {
          if (ln && "function" === typeof ln.onCommitFiberUnmount)
            try {
              ln.onCommitFiberUnmount(an, t);
            } catch (o) {}
          switch (t.tag) {
            case 5:
              Yo || es(t, n);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, n, t),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(t)
                        : e.removeChild(t))
                    : ds.removeChild(t.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (t = t.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, t)
                      : 1 === e.nodeType && sa(e, t),
                    Vn(e))
                  : sa(ds, t.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = t.stateNode.containerInfo),
                (fs = !0),
                ps(e, n, t),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yo &&
                null !== (r = t.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      ns(t, n, i),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, n, t);
              break;
            case 1:
              if (
                !Yo &&
                (es(t, n),
                "function" === typeof (r = t.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = t.memoizedProps),
                    (r.state = t.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Nu(t, n, o);
                }
              ps(e, n, t);
              break;
            case 21:
              ps(e, n, t);
              break;
            case 22:
              1 & t.mode
                ? ((Yo = (r = Yo) || null !== t.memoizedState),
                  ps(e, n, t),
                  (Yo = r))
                : ps(e, n, t);
              break;
            default:
              ps(e, n, t);
          }
        }
        function ms(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Xo()),
              n.forEach(function (n) {
                var r = Pu.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(r, r));
              });
          }
        }
        function gs(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              try {
                var i = e,
                  o = n,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(l(160));
                hs(i, o, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Nu(a, n, c);
              }
            }
          if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n; ) vs(n, e), (n = n.sibling);
        }
        function vs(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(n, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  Nu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Nu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(n, e), ys(e), 512 & r && null !== t && es(t, t.return);
              break;
            case 5:
              if (
                (gs(n, e),
                ys(e),
                512 & r && null !== t && es(t, t.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Nu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== t ? t.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      Y(a, i),
                      be(s, o);
                    var c = be(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? te(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? te(a, !!i.multiple, i.defaultValue, !0)
                              : te(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Nu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(n, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Nu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(n, e),
                ys(e),
                4 & r && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  Vn(n.containerInfo);
                } catch (g) {
                  Nu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(n, e), ys(e);
              break;
            case 13:
              gs(n, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Ye())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== t && null !== t.memoizedState),
                1 & e.mode
                  ? ((Yo = (c = Yo) || d), gs(n, e), (Yo = c))
                  : gs(n, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zo = e, d = e.child; null !== d; ) {
                    for (f = Zo = d; null !== Zo; ) {
                      switch (((h = (p = Zo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (t = p.return);
                            try {
                              (n = r),
                                (m.props = n.memoizedProps),
                                (m.state = n.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Nu(r, t, g);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zo = h)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (g) {
                        Nu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Nu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(n, e), ys(e), 4 & r && ms(e);
            case 21:
          }
        }
        function ys(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (os(t)) {
                    var r = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              Nu(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function bs(e, n, t) {
          (Zo = e), ws(e, n, t);
        }
        function ws(e, n, t) {
          for (var r = 0 !== (1 & e.mode); null !== Zo; ) {
            var a = Zo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Jo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Yo;
                o = Jo;
                var u = Yo;
                if (((Jo = i), (Yo = s) && !u))
                  for (Zo = a; null !== Zo; )
                    (s = (i = Zo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = i), (Zo = s))
                        : Ss(a);
                for (; null !== l; ) (Zo = l), ws(l, n, t), (l = l.sibling);
                (Zo = a), (Jo = o), (Yo = u);
              }
              ks(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Zo = l))
                : ks(e);
          }
        }
        function ks(e) {
          for (; null !== Zo; ) {
            var n = Zo;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo || as(5, n);
                      break;
                    case 1:
                      var r = n.stateNode;
                      if (4 & n.flags && !Yo)
                        if (null === t) r.componentDidMount();
                        else {
                          var a =
                            n.elementType === n.type
                              ? t.memoizedProps
                              : gl(n.type, t.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            t.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = n.updateQueue;
                      null !== i && Dl(n, i, r);
                      break;
                    case 3:
                      var o = n.updateQueue;
                      if (null !== o) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Dl(n, o, t);
                      }
                      break;
                    case 5:
                      var s = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = s;
                        var u = n.memoizedProps;
                        switch (n.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && t.focus();
                            break;
                          case "img":
                            u.src && (t.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var c = n.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vn(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Yo || (512 & n.flags && ls(n));
              } catch (p) {
                Nu(n, n.return, p);
              }
            }
            if (n === e) {
              Zo = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Zo = t);
              break;
            }
            Zo = n.return;
          }
        }
        function xs(e) {
          for (; null !== Zo; ) {
            var n = Zo;
            if (n === e) {
              Zo = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), (Zo = t);
              break;
            }
            Zo = n.return;
          }
        }
        function Ss(e) {
          for (; null !== Zo; ) {
            var n = Zo;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    as(4, n);
                  } catch (s) {
                    Nu(n, t, s);
                  }
                  break;
                case 1:
                  var r = n.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = n.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Nu(n, a, s);
                    }
                  }
                  var l = n.return;
                  try {
                    ls(n);
                  } catch (s) {
                    Nu(n, l, s);
                  }
                  break;
                case 5:
                  var i = n.return;
                  try {
                    ls(n);
                  } catch (s) {
                    Nu(n, i, s);
                  }
              }
            } catch (s) {
              Nu(n, n.return, s);
            }
            if (n === e) {
              Zo = null;
              break;
            }
            var o = n.sibling;
            if (null !== o) {
              (o.return = n.return), (Zo = o);
              break;
            }
            Zo = n.return;
          }
        }
        var js,
          Ns = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          Es = w.ReactCurrentOwner,
          _s = w.ReactCurrentBatchConfig,
          Ps = 0,
          Ts = null,
          zs = null,
          Is = 0,
          Ls = 0,
          Ms = ja(0),
          Rs = 0,
          Os = null,
          Fs = 0,
          Ds = 0,
          As = 0,
          Us = null,
          Bs = null,
          Hs = 0,
          Vs = 1 / 0,
          Ws = null,
          $s = !1,
          Qs = null,
          Gs = null,
          qs = !1,
          Ks = null,
          Js = 0,
          Ys = 0,
          Xs = null,
          Zs = -1,
          eu = 0;
        function nu() {
          return 0 !== (6 & Ps) ? Ye() : -1 !== Zs ? Zs : (Zs = Ye());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Is
            ? Is & -Is
            : null !== ml.transition
            ? (0 === eu && (eu = gn()), eu)
            : 0 !== (e = wn)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yn(e.type));
        }
        function ru(e, n, t, r) {
          if (50 < Ys) throw ((Ys = 0), (Xs = null), Error(l(185)));
          yn(e, t, r),
            (0 !== (2 & Ps) && e === Ts) ||
              (e === Ts && (0 === (2 & Ps) && (Ds |= t), 4 === Rs && su(e, Is)),
              au(e, r),
              1 === t &&
                0 === Ps &&
                0 === (1 & n.mode) &&
                ((Vs = Ye() + 500), Aa && Ha()));
        }
        function au(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (
              var t = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - on(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & t) && 0 === (o & r)) || (a[i] = hn(o, n))
                : s <= n && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, n);
          var r = pn(e, e === Ts ? Is : 0);
          if (0 === r)
            null !== t && qe(t),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((null != t && qe(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ba(e);
                  })(uu.bind(null, e))
                : Ba(uu.bind(null, e)),
                ia(function () {
                  0 === (6 & Ps) && Ha();
                }),
                (t = null);
            else {
              switch (kn(r)) {
                case 1:
                  t = Ze;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = rn;
              }
              t = Tu(t, lu.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function lu(e, n) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Ps))) throw Error(l(327));
          var t = e.callbackNode;
          if (Su() && e.callbackNode !== t) return null;
          var r = pn(e, e === Ts ? Is : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n) n = vu(e, r);
          else {
            n = r;
            var a = Ps;
            Ps |= 2;
            var i = mu();
            for (
              (Ts === e && Is === n) ||
              ((Ws = null), (Vs = Ye() + 500), pu(e, n));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            kl(),
              (Cs.current = i),
              (Ps = a),
              null !== zs ? (n = 0) : ((Ts = null), (Is = 0), (n = Rs));
          }
          if (0 !== n) {
            if (
              (2 === n && 0 !== (a = mn(e)) && ((r = a), (n = iu(e, a))),
              1 === n)
            )
              throw ((t = Os), pu(e, 0), su(e, r), au(e, Ye()), t);
            if (6 === n) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var r = 0; r < t.length; r++) {
                            var a = t[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                        (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (n = vu(e, r)) &&
                    0 !== (i = mn(e)) &&
                    ((r = i), (n = iu(e, i))),
                  1 === n))
              )
                throw ((t = Os), pu(e, 0), su(e, r), au(e, Ye()), t);
              switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  xu(e, Bs, Ws);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (n = Hs + 500 - Ye()))
                  ) {
                    if (0 !== pn(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      nu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, Bs, Ws), n);
                    break;
                  }
                  xu(e, Bs, Ws);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (n = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - on(r);
                    (i = 1 << o), (o = n[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ns(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, Bs, Ws), r);
                    break;
                  }
                  xu(e, Bs, Ws);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return au(e, Ye()), e.callbackNode === t ? lu.bind(null, e) : null;
        }
        function iu(e, n) {
          var t = Us;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, n).flags |= 256),
            2 !== (e = vu(e, n)) && ((n = Bs), (Bs = t), null !== n && ou(n)),
            e
          );
        }
        function ou(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function su(e, n) {
          for (
            n &= ~As,
              n &= ~Ds,
              e.suspendedLanes |= n,
              e.pingedLanes &= ~n,
              e = e.expirationTimes;
            0 < n;

          ) {
            var t = 31 - on(n),
              r = 1 << t;
            (e[t] = -1), (n &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ps)) throw Error(l(327));
          Su();
          var n = pn(e, 0);
          if (0 === (1 & n)) return au(e, Ye()), null;
          var t = vu(e, n);
          if (0 !== e.tag && 2 === t) {
            var r = mn(e);
            0 !== r && ((n = r), (t = iu(e, r)));
          }
          if (1 === t) throw ((t = Os), pu(e, 0), su(e, n), au(e, Ye()), t);
          if (6 === t) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            xu(e, Bs, Ws),
            au(e, Ye()),
            null
          );
        }
        function cu(e, n) {
          var t = Ps;
          Ps |= 1;
          try {
            return e(n);
          } finally {
            0 === (Ps = t) && ((Vs = Ye() + 500), Aa && Ha());
          }
        }
        function du(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & Ps) && Su();
          var n = Ps;
          Ps |= 1;
          var t = _s.transition,
            r = wn;
          try {
            if (((_s.transition = null), (wn = 1), e)) return e();
          } finally {
            (wn = r), (_s.transition = t), 0 === (6 & (Ps = n)) && Ha();
          }
        }
        function fu() {
          (Ls = Ms.current), Na(Ms);
        }
        function pu(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), aa(t)), null !== zs))
            for (t = zs.return; null !== t; ) {
              var r = t;
              switch ((nl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  ai(), Na(Pa), Na(_a), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Na(oi);
                  break;
                case 10:
                  xl(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              t = t.return;
            }
          if (
            ((Ts = e),
            (zs = e = Mu(e.current, null)),
            (Is = Ls = n),
            (Rs = 0),
            (Os = null),
            (As = Ds = Fs = 0),
            (Bs = Us = null),
            null !== Cl)
          ) {
            for (n = 0; n < Cl.length; n++)
              if (null !== (r = (t = Cl[n]).interleaved)) {
                t.interleaved = null;
                var a = r.next,
                  l = t.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                t.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function hu(e, n) {
          for (;;) {
            var t = zs;
            try {
              if ((kl(), (di.current = lo), vi)) {
                for (var r = hi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((pi = 0),
                (gi = mi = hi = null),
                (yi = !1),
                (bi = 0),
                (Es.current = null),
                null === t || null === t.return)
              ) {
                (Rs = 1), (Os = n), (zs = null);
                break;
              }
              e: {
                var i = e,
                  o = t.return,
                  s = t,
                  u = n;
                if (
                  ((n = Is),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vo(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      yo(h, o, s, 0, n),
                      1 & h.mode && go(i, c, n),
                      (u = c);
                    var m = (n = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (n.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & n)) {
                    go(i, c, n), gu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = vo(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yo(v, o, s, 0, n),
                      hl(uo(u, s));
                    break e;
                  }
                }
                (i = u = uo(u, s)),
                  4 !== Rs && (Rs = 2),
                  null === Us ? (Us = [i]) : Us.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (n &= -n),
                        (i.lanes |= n),
                        Ol(i, ho(0, u, n));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (n &= -n),
                          (i.lanes |= n),
                          Ol(i, mo(i, s, n));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ku(t);
            } catch (w) {
              (n = w), zs === t && null !== t && (zs = t = t.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cs.current;
          return (Cs.current = lo), null === e ? lo : e;
        }
        function gu() {
          (0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
            null === Ts ||
              (0 === (268435455 & Fs) && 0 === (268435455 & Ds)) ||
              su(Ts, Is);
        }
        function vu(e, n) {
          var t = Ps;
          Ps |= 2;
          var r = mu();
          for ((Ts === e && Is === n) || ((Ws = null), pu(e, n)); ; )
            try {
              yu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((kl(), (Ps = t), (Cs.current = r), null !== zs))
            throw Error(l(261));
          return (Ts = null), (Is = 0), Rs;
        }
        function yu() {
          for (; null !== zs; ) wu(zs);
        }
        function bu() {
          for (; null !== zs && !Ke(); ) wu(zs);
        }
        function wu(e) {
          var n = js(e.alternate, e, Ls);
          (e.memoizedProps = e.pendingProps),
            null === n ? ku(e) : (zs = n),
            (Es.current = null);
        }
        function ku(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = qo(t, n, Ls))) return void (zs = t);
            } else {
              if (null !== (t = Ko(t, n)))
                return (t.flags &= 32767), void (zs = t);
              if (null === e) return (Rs = 6), void (zs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (zs = n);
            zs = n = e;
          } while (null !== n);
          0 === Rs && (Rs = 5);
        }
        function xu(e, n, t) {
          var r = wn,
            a = _s.transition;
          try {
            (_s.transition = null),
              (wn = 1),
              (function (e, n, t, r) {
                do {
                  Su();
                } while (null !== Ks);
                if (0 !== (6 & Ps)) throw Error(l(327));
                t = e.finishedWork;
                var a = e.finishedLanes;
                if (null === t) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  t === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var a = 31 - on(t),
                        l = 1 << a;
                      (n[a] = 0), (r[a] = -1), (e[a] = -1), (t &= ~l);
                    }
                  })(e, i),
                  e === Ts && ((zs = Ts = null), (Is = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    qs ||
                    ((qs = !0),
                    Tu(nn, function () {
                      return Su(), null;
                    })),
                  (i = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || i)
                ) {
                  (i = _s.transition), (_s.transition = null);
                  var o = wn;
                  wn = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Es.current = null),
                    (function (e, n) {
                      if (((ea = $n), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var t = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (t =
                                ((t = e.ownerDocument) && t.defaultView) ||
                                window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              t = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                t.nodeType, i.nodeType;
                              } catch (k) {
                                t = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var h;
                                  f !== t ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break n;
                                  if (
                                    (p === t && ++c === a && (s = o),
                                    p === i && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              t =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (
                        na = { focusedElem: e, selectionRange: t },
                          $n = !1,
                          Zo = n;
                        null !== Zo;

                      )
                        if (
                          ((e = (n = Zo).child),
                          0 !== (1028 & n.subtreeFlags) && null !== e)
                        )
                          (e.return = n), (Zo = e);
                        else
                          for (; null !== Zo; ) {
                            n = Zo;
                            try {
                              var m = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = n.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          n.elementType === n.type
                                            ? g
                                            : gl(n.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = n.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (k) {
                              Nu(n, n.return, k);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Zo = e);
                              break;
                            }
                            Zo = n.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, t),
                    vs(t, e),
                    hr(na),
                    ($n = !!ea),
                    (na = ea = null),
                    (e.current = t),
                    bs(t, e, a),
                    Je(),
                    (Ps = s),
                    (wn = o),
                    (_s.transition = i);
                } else e.current = t;
                if (
                  (qs && ((qs = !1), (Ks = e), (Js = a)),
                  (i = e.pendingLanes),
                  0 === i && (Gs = null),
                  (function (e) {
                    if (ln && "function" === typeof ln.onCommitFiberRoot)
                      try {
                        ln.onCommitFiberRoot(
                          an,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (n) {}
                  })(t.stateNode),
                  au(e, Ye()),
                  null !== n)
                )
                  for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                    (a = n[t]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($s) throw (($s = !1), (e = Qs), (Qs = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Su(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xs
                      ? Ys++
                      : ((Ys = 0), (Xs = e))
                    : (Ys = 0),
                  Ha();
              })(e, n, t, r);
          } finally {
            (_s.transition = a), (wn = r);
          }
          return null;
        }
        function Su() {
          if (null !== Ks) {
            var e = kn(Js),
              n = _s.transition,
              t = wn;
            try {
              if (((_s.transition = null), (wn = 16 > e ? 16 : e), null === Ks))
                var r = !1;
              else {
                if (((e = Ks), (Ks = null), (Js = 0), 0 !== (6 & Ps)))
                  throw Error(l(331));
                var a = Ps;
                for (Ps |= 4, Zo = e.current; null !== Zo; ) {
                  var i = Zo,
                    o = i.child;
                  if (0 !== (16 & Zo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zo = c; null !== Zo; ) {
                          var d = Zo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zo = f);
                          else
                            for (; null !== Zo; ) {
                              var p = (d = Zo).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Zo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zo = p);
                                break;
                              }
                              Zo = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Zo = o);
                  else
                    e: for (; null !== Zo; ) {
                      if (0 !== (2048 & (i = Zo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zo = y);
                        break e;
                      }
                      Zo = i.return;
                    }
                }
                var b = e.current;
                for (Zo = b; null !== Zo; ) {
                  var w = (o = Zo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Zo = w);
                  else
                    e: for (o = b; null !== Zo; ) {
                      if (0 !== (2048 & (s = Zo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (x) {
                          Nu(s, s.return, x);
                        }
                      if (s === o) {
                        Zo = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Zo = k);
                        break e;
                      }
                      Zo = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  Ha(),
                  ln && "function" === typeof ln.onPostCommitFiberRoot)
                )
                  try {
                    ln.onPostCommitFiberRoot(an, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (wn = t), (_s.transition = n);
            }
          }
          return !1;
        }
        function ju(e, n, t) {
          (e = Ml(e, (n = ho(0, (n = uo(t, n)), 1)), 1)),
            (n = nu()),
            null !== e && (yn(e, 1, n), au(e, n));
        }
        function Nu(e, n, t) {
          if (3 === e.tag) ju(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                ju(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (n = Ml(n, (e = mo(n, (e = uo(t, e)), 1)), 1)),
                    (e = nu()),
                    null !== n && (yn(n, 1, e), au(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function Cu(e, n, t) {
          var r = e.pingCache;
          null !== r && r.delete(n),
            (n = nu()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Ts === e &&
              (Is & t) === t &&
              (4 === Rs ||
              (3 === Rs && (130023424 & Is) === Is && 500 > Ye() - Hs)
                ? pu(e, 0)
                : (As |= t)),
            au(e, n);
        }
        function Eu(e, n) {
          0 === n &&
            (0 === (1 & e.mode)
              ? (n = 1)
              : ((n = dn), 0 === (130023424 & (dn <<= 1)) && (dn = 4194304)));
          var t = nu();
          null !== (e = Pl(e, n)) && (yn(e, n, t), au(e, t));
        }
        function _u(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), Eu(e, t);
        }
        function Pu(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (t = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(n), Eu(e, t);
        }
        function Tu(e, n) {
          return Ge(e, n);
        }
        function zu(e, n, t, r) {
          (this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Iu(e, n, t, r) {
          return new zu(e, n, t, r);
        }
        function Lu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Iu(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function Ru(e, n, t, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Lu(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case S:
                return Ou(t.children, a, i, n);
              case j:
                (o = 8), (a |= 8);
                break;
              case N:
                return (
                  ((e = Iu(12, t, n, 2 | a)).elementType = N), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Iu(13, t, n, a)).elementType = P), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Iu(19, t, n, a)).elementType = T), (e.lanes = i), e
                );
              case L:
                return Fu(t, a, i, n);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      o = 10;
                      break e;
                    case E:
                      o = 9;
                      break e;
                    case _:
                      o = 11;
                      break e;
                    case z:
                      o = 14;
                      break e;
                    case I:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((n = Iu(o, t, n, a)).elementType = e),
            (n.type = r),
            (n.lanes = i),
            n
          );
        }
        function Ou(e, n, t, r) {
          return ((e = Iu(7, e, r, n)).lanes = t), e;
        }
        function Fu(e, n, t, r) {
          return (
            ((e = Iu(22, e, r, n)).elementType = L),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, n, t) {
          return ((e = Iu(6, e, null, n)).lanes = t), e;
        }
        function Au(e, n, t) {
          return (
            ((n = Iu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        function Uu(e, n, t, r, a) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vn(0)),
            (this.expirationTimes = vn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vn(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, n, t, r, a, l, i, o, s) {
          return (
            (e = new Uu(e, n, t, o, s)),
            1 === n ? ((n = 1), !0 === l && (n |= 8)) : (n = 0),
            (l = Iu(3, null, null, n)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            zl(l),
            e
          );
        }
        function Hu(e) {
          if (!e) return Ea;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (Ia(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (Ia(t)) return Ra(e, t, n);
          }
          return n;
        }
        function Vu(e, n, t, r, a, l, i, o, s) {
          return (
            ((e = Bu(t, r, !0, e, 0, l, 0, o, s)).context = Hu(null)),
            (t = e.current),
            ((l = Ll((r = nu()), (a = tu(t)))).callback =
              void 0 !== n && null !== n ? n : null),
            Ml(t, l, a),
            (e.current.lanes = a),
            yn(e, a, r),
            au(e, r),
            e
          );
        }
        function Wu(e, n, t, r) {
          var a = n.current,
            l = nu(),
            i = tu(a);
          return (
            (t = Hu(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = Ll(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (n.callback = r),
            null !== (e = Ml(a, n, i)) && (ru(e, a, i, l), Rl(e, a, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function Gu(e, n) {
          Qu(e, n), (e = e.alternate) && Qu(e, n);
        }
        js = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Pa.current) wo = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (wo = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        To(n), pl();
                        break;
                      case 5:
                        li(n);
                        break;
                      case 1:
                        Ia(n.type) && Oa(n);
                        break;
                      case 4:
                        ri(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = n.type._context,
                          a = n.memoizedProps.value;
                        Ca(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = n.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(oi, 1 & oi.current), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                            ? Do(e, n, t)
                            : (Ca(oi, 1 & oi.current),
                              null !== (e = $o(e, n, t)) ? e.sibling : null);
                        Ca(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (t & n.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vo(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (a = n.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), No(e, n, t);
                    }
                    return $o(e, n, t);
                  })(e, n, t)
                );
              wo = 0 !== (131072 & e.flags);
            }
          else (wo = !1), al && 0 !== (1048576 & n.flags) && Za(n, Qa, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              Wo(e, n), (e = n.pendingProps);
              var a = za(n, _a.current);
              jl(n, t), (a = Si(null, n, r, e, a, t));
              var i = ji();
              return (
                (n.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    Ia(r) ? ((i = !0), Oa(n)) : (i = !1),
                    (n.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    zl(n),
                    (a.updater = Bl),
                    (n.stateNode = a),
                    (a._reactInternals = n),
                    $l(n, r, e, t),
                    (n = Po(null, n, r, !0, i, t)))
                  : ((n.tag = 0),
                    al && i && el(n),
                    ko(null, n, a, t),
                    (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  (Wo(e, n),
                  (e = n.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (n.type = r),
                  (a = n.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === z) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    n = Eo(null, n, r, e, t);
                    break e;
                  case 1:
                    n = _o(null, n, r, e, t);
                    break e;
                  case 11:
                    n = xo(null, n, r, e, t);
                    break e;
                  case 14:
                    n = So(null, n, r, gl(r.type, e), t);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return n;
            case 0:
              return (
                (r = n.type),
                (a = n.pendingProps),
                Eo(e, n, r, (a = n.elementType === r ? a : gl(r, a)), t)
              );
            case 1:
              return (
                (r = n.type),
                (a = n.pendingProps),
                _o(e, n, r, (a = n.elementType === r ? a : gl(r, a)), t)
              );
            case 3:
              e: {
                if ((To(n), null === e)) throw Error(l(387));
                (r = n.pendingProps),
                  (a = (i = n.memoizedState).element),
                  Il(e, n),
                  Fl(n, r, null, t);
                var o = n.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (n.updateQueue.baseState = i),
                    (n.memoizedState = i),
                    256 & n.flags)
                  ) {
                    n = zo(e, n, r, t, (a = uo(Error(l(423)), n)));
                    break e;
                  }
                  if (r !== a) {
                    n = zo(e, n, r, t, (a = uo(Error(l(424)), n)));
                    break e;
                  }
                  for (
                    rl = ua(n.stateNode.containerInfo.firstChild),
                      tl = n,
                      al = !0,
                      ll = null,
                      t = Yl(n, null, r, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((pl(), r === a)) {
                    n = $o(e, n, t);
                    break e;
                  }
                  ko(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                li(n),
                null === e && ul(n),
                (r = n.type),
                (a = n.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                ta(r, a)
                  ? (o = null)
                  : null !== i && ta(r, i) && (n.flags |= 32),
                Co(e, n),
                ko(e, n, o, t),
                n.child
              );
            case 6:
              return null === e && ul(n), null;
            case 13:
              return Do(e, n, t);
            case 4:
              return (
                ri(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                null === e ? (n.child = Jl(n, null, r, t)) : ko(e, n, r, t),
                n.child
              );
            case 11:
              return (
                (r = n.type),
                (a = n.pendingProps),
                xo(e, n, r, (a = n.elementType === r ? a : gl(r, a)), t)
              );
            case 7:
              return ko(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return ko(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((r = n.type._context),
                  (a = n.pendingProps),
                  (i = n.memoizedProps),
                  (o = a.value),
                  Ca(vl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Pa.current) {
                      n = $o(e, n, t);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = n.child) && (i.return = n);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ll(-1, t & -t)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= t),
                              null !== (u = i.alternate) && (u.lanes |= t),
                              Sl(i.return, t, n),
                              (s.lanes |= t);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === n.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= t),
                          null !== (s = o.alternate) && (s.lanes |= t),
                          Sl(o, t, n),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === n) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                ko(e, n, a.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (a = n.type),
                (r = n.pendingProps.children),
                jl(n, t),
                (r = r((a = Nl(a)))),
                (n.flags |= 1),
                ko(e, n, r, t),
                n.child
              );
            case 14:
              return (
                (a = gl((r = n.type), n.pendingProps)),
                So(e, n, r, (a = gl(r.type, a)), t)
              );
            case 15:
              return jo(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (r = n.type),
                (a = n.pendingProps),
                (a = n.elementType === r ? a : gl(r, a)),
                Wo(e, n),
                (n.tag = 1),
                Ia(r) ? ((e = !0), Oa(n)) : (e = !1),
                jl(n, t),
                Vl(n, r, a),
                $l(n, r, a, t),
                Po(null, n, r, !0, e, t)
              );
            case 19:
              return Vo(e, n, t);
            case 22:
              return No(e, n, t);
          }
          throw Error(l(156, n.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, n, t, r, a) {
          var l = t._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = $u(i);
                o.call(e);
              };
            }
            Wu(n, i, e, a);
          } else
            i = (function (e, n, t, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = $u(i);
                    l.call(e);
                  };
                }
                var i = Vu(n, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = $u(s);
                  o.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Wu(n, s, t, r);
                }),
                s
              );
            })(t, n, e, a, r);
          return $u(i);
        }
        (Ju.prototype.render = Ku.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(l(409));
            Wu(e, n, null, null);
          }),
          (Ju.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                du(function () {
                  Wu(null, e, null, null);
                }),
                  (n[ha] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = Nn();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < Mn.length && 0 !== n && n < Mn[t].priority;
                t++
              );
              Mn.splice(t, 0, e), 0 === t && Dn(e);
            }
          }),
          (xn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = fn(n.pendingLanes);
                  0 !== t &&
                    (bn(n, 1 | t),
                    au(n, Ye()),
                    0 === (6 & Ps) && ((Vs = Ye() + 500), Ha()));
                }
                break;
              case 13:
                du(function () {
                  var n = Pl(e, 1);
                  if (null !== n) {
                    var t = nu();
                    ru(n, e, 1, t);
                  }
                }),
                  Gu(e, 1);
            }
          }),
          (Sn = function (e) {
            if (13 === e.tag) {
              var n = Pl(e, 134217728);
              if (null !== n) ru(n, e, 134217728, nu());
              Gu(e, 134217728);
            }
          }),
          (jn = function (e) {
            if (13 === e.tag) {
              var n = tu(e),
                t = Pl(e, n);
              if (null !== t) ru(t, e, n, nu());
              Gu(e, n);
            }
          }),
          (Nn = function () {
            return wn;
          }),
          (Cn = function (e, n) {
            var t = wn;
            try {
              return (wn = e), n();
            } finally {
              wn = t;
            }
          }),
          (xe = function (e, n, t) {
            switch (n) {
              case "input":
                if ((X(e, t), (n = t.name), "radio" === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(l(90));
                      G(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, t);
                break;
              case "select":
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (_e = cu),
          (Pe = du);
        var nc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Ce, Ee, cu],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (an = ac.inject(rc)), (ln = ac);
            } catch (ce) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Yu(n)) throw Error(l(200));
            return (function (e, n, t) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: n,
                implementation: t,
              };
            })(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Yu(e)) throw Error(l(299));
            var t = !1,
              r = "",
              a = qu;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (n = Bu(e, 1, !1, null, 0, t, 0, r, a)),
              (e[ha] = n.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Ku(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = $e(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return du(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!Xu(n)) throw Error(l(200));
            return ec(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Yu(e)) throw Error(l(405));
            var r = (null != t && t.hydratedSources) || null,
              a = !1,
              i = "",
              o = qu;
            if (
              (null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (n = Vu(n, null, e, 1, null != t ? t : null, a, 0, i, o)),
              (e[ha] = n.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (t = r[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, a])
                    : n.mutableSourceEagerHydrationData.push(t, a);
            return new Ju(n);
          }),
          (n.render = function (e, n, t) {
            if (!Xu(n)) throw Error(l(200));
            return ec(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = cu),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!Xu(t)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, n, t, !1, r);
          }),
          (n.version = "18.2.0-next-9e3b772b8-20220608");
      },
      391: (e, n, t) => {
        var r = t(950);
        (n.createRoot = r.createRoot), (n.hydrateRoot = r.hydrateRoot);
      },
      950: (e, n, t) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(730));
      },
      153: (e, n, t) => {
        var r = t(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, n, t) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== t && (u = "" + t),
          void 0 !== n.key && (u = "" + n.key),
          void 0 !== n.ref && (c = n.ref),
          n))
            i.call(n, r) && !s.hasOwnProperty(r) && (l[r] = n[r]);
          if (e && e.defaultProps)
            for (r in (n = e.defaultProps)) void 0 === l[r] && (l[r] = n[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (n.jsx = u), (n.jsxs = u);
      },
      202: (e, n) => {
        var t = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || h);
        }
        function y() {}
        function b(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, n) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, n, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          j = { key: !0, ref: !0, __self: !0, __source: !0 };
        function N(e, n, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != n)
            for (a in (void 0 !== n.ref && (o = n.ref),
            void 0 !== n.key && (i = "" + n.key),
            n))
              x.call(n, a) && !j.hasOwnProperty(a) && (l[a] = n[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: t,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === t;
        }
        var E = /\/+/g;
        function _(e, n) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })("" + e.key)
            : n.toString(36);
        }
        function P(e, n, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + _(s, 0) : l),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(E, "$&/") + "/"),
                  P(i, n, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  n.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + _((o = e[u]), u);
              s += P(o, n, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += P((o = o.value), n, a, (c = l + _(o, u++)), i);
          else if ("object" === o)
            throw (
              ((n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function T(e, n, t) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return n.call(t, e, a++);
            }),
            r
          );
        }
        function z(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          L = { transition: null },
          M = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (n.Children = {
          map: T,
          forEach: function (e, n, t) {
            T(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              T(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (n.Component = v),
          (n.Fragment = a),
          (n.Profiler = i),
          (n.PureComponent = b),
          (n.StrictMode = l),
          (n.Suspense = c),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (n.cloneElement = function (e, n, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((i = n.ref), (o = S.current)),
                void 0 !== n.key && (l = "" + n.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in n)
                x.call(n, u) &&
                  !j.hasOwnProperty(u) &&
                  (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = N),
          (n.createFactory = function (e) {
            var n = N.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (n.isValidElement = C),
          (n.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: z,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: d, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = n;
            }
          }),
          (n.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (n.useCallback = function (e, n) {
            return I.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return I.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return I.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return I.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return I.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return I.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return I.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return I.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (n.useState = function (e) {
            return I.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return I.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return I.current.useTransition();
          }),
          (n.version = "18.2.0");
      },
      43: (e, n, t) => {
        e.exports = t(202);
      },
      579: (e, n, t) => {
        e.exports = t(153);
      },
      234: (e, n) => {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var r = (t - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, n))) break e;
            (e[r] = n), (e[t] = a), (t = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, t))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = t), (r = u))
                  : ((e[r] = s), (e[o] = t), (r = o));
              else {
                if (!(u < a && 0 > l(c, t))) break e;
                (e[r] = c), (e[u] = t), (r = u);
              }
            }
          }
          return n;
        }
        function l(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          n.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          n.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var n = r(c); null !== n; ) {
            if (null === n.callback) a(c);
            else {
              if (!(n.startTime <= e)) break;
              a(c), (n.sortIndex = n.expirationTime), t(u, n);
            }
            n = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(x);
            else {
              var n = r(c);
              null !== n && M(k, n.startTime - e);
            }
        }
        function x(e, t) {
          (m = !1), g && ((g = !1), y(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(t), f = r(u);
              null !== f && (!(f.expirationTime > t) || (e && !P()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= t);
                (t = n.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(t);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && M(k, d.startTime - t), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          j = !1,
          N = null,
          C = -1,
          E = 5,
          _ = -1;
        function P() {
          return !(n.unstable_now() - _ < E);
        }
        function T() {
          if (null !== N) {
            var e = n.unstable_now();
            _ = e;
            var t = !0;
            try {
              t = N(!0, e);
            } finally {
              t ? S() : ((j = !1), (N = null));
            }
          } else j = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            I = z.port2;
          (z.port1.onmessage = T),
            (S = function () {
              I.postMessage(null);
            });
        } else
          S = function () {
            v(T, 0);
          };
        function L(e) {
          (N = e), j || ((j = !0), S());
        }
        function M(e, t) {
          C = v(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            m || h || ((m = !0), L(x));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, a, l) {
            var i = n.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  t(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(C), (C = -1)) : (g = !0), M(k, l - i)))
                : ((e.sortIndex = o), t(u, e), m || h || ((m = !0), L(x))),
              e
            );
          }),
          (n.unstable_shouldYield = P),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      853: (e, n, t) => {
        e.exports = t(234);
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var l = (n[r] = { exports: {} });
    return e[r](l, l.exports, t), l.exports;
  }
  (t.m = e),
    (() => {
      var e,
        n = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      t.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var l = Object.create(null);
        t.r(l);
        var i = {};
        e = e || [null, n({}), n([]), n(n)];
        for (
          var o = 2 & a && r;
          "object" == typeof o && !~e.indexOf(o);
          o = n(o)
        )
          Object.getOwnPropertyNames(o).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), t.d(l, i), l;
      };
    })(),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.f = {}),
    (t.e = (e) =>
      Promise.all(Object.keys(t.f).reduce((n, r) => (t.f[r](e, n), n), []))),
    (t.u = (e) => "static/js/" + e + ".851b5fd4.chunk.js"),
    (t.miniCssF = (e) => {}),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = {},
        n = "greenleaf:";
      t.l = (r, a, l, i) => {
        if (e[r]) e[r].push(a);
        else {
          var o, s;
          if (void 0 !== l)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == n + l
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((s = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            t.nc && o.setAttribute("nonce", t.nc),
            o.setAttribute("data-webpack", n + l),
            (o.src = r)),
            (e[r] = [a]);
          var f = (n, t) => {
              (o.onerror = o.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                o.parentNode && o.parentNode.removeChild(o),
                a && a.forEach((e) => e(t)),
                n)
              )
                return n(t);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = f.bind(null, o.onerror)),
            (o.onload = f.bind(null, o.onload)),
            s && document.head.appendChild(o);
        }
      };
    })(),
    (t.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.p = "/"),
    (() => {
      var e = { 792: 0 };
      t.f.j = (n, r) => {
        var a = t.o(e, n) ? e[n] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise((t, r) => (a = e[n] = [t, r]));
            r.push((a[2] = l));
            var i = t.p + t.u(n),
              o = new Error();
            t.l(
              i,
              (r) => {
                if (t.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (o.message =
                    "Loading chunk " + n + " failed.\n(" + l + ": " + i + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = l),
                    (o.request = i),
                    a[1](o);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = (n, r) => {
          var a,
            l,
            i = r[0],
            o = r[1],
            s = r[2],
            u = 0;
          if (i.some((n) => 0 !== e[n])) {
            for (a in o) t.o(o, a) && (t.m[a] = o[a]);
            if (s) s(t);
          }
          for (n && n(r); u < i.length; u++)
            (l = i[u]), t.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunkgreenleaf = self.webpackChunkgreenleaf || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e = t(43),
        n = t.t(e, 2),
        r = t(391),
        a = t(579);
      const l = function () {
        return (0, a.jsxs)("div", {
          className: "route-outer",
          children: [
            (0, a.jsxs)("h2", {
              className: "heading",
              id: "about",
              children: [
                "Hi, I am Ujjwal ",
                (0, a.jsx)("span", {
                  className: "wave",
                  children: "\ud83d\udc4b",
                }),
                "!",
              ],
            }),
            (0, a.jsx)("div", {
              className: "about-class",
              children:
                " I am a Computer Science graduate student at the University of Massachusetts Amherst and I hold an undergraduate degree from the Indian  Institute of Technology, Roorkee. I have 7+ years of experience as backend engineer working for Walmart Labs, Paytm, GE Healthcare and Virtusa. My dedication to the field extends beyond my work, as I regularly practice competitive programming on online platforms. I have been programming for 10 years since my sophomore days. ",
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("div", {
              className: "about-class",
              children:
                "I was part of the National Social Service (Awareness Cell) during my undergraduate years. I organized and participated in multiple street plays performed in the rural areas of India on sensitive issues like sanitation, women's education, and child labor. I have been an active musician for more than 15 years, playing instruments like guitar, piano, and trumpet, with a penchant for jazz and R&B music.",
            }),
            (0, a.jsxs)("div", {
              className: "skills",
              children: [
                (0, a.jsxs)("h3", {
                  children: [
                    "Tech Stack",
                    (0, a.jsx)("span", {
                      role: "img",
                      "aria-label": "Code",
                      className: "emoji",
                      children: "\ud83d\udcbb",
                    }),
                  ],
                }),
                (0, a.jsx)("hr", { className: "underline-heading" }),
                (0, a.jsxs)("div", {
                  className: "skill-section",
                  children: [
                    (0, a.jsx)("h5", {
                      className: "skill-heading",
                      children: "Languages",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/java.svg",
                      alt: "java",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/python.svg",
                      alt: "python",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/cpp.svg",
                      alt: "cpp",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/js.svg",
                      alt: "js",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/c.svg",
                      alt: "c",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/r.svg",
                      alt: "r",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/html.svg",
                      alt: "html",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/css.svg",
                      alt: "css",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "skill-section",
                  children: [
                    (0, a.jsx)("h5", {
                      className: "skill-heading",
                      children: "Frameworks/Libraries",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/kafka-svgrepo-com.svg",
                      alt: "kafka-svgrepo-com",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/spring.svg",
                      alt: "spring",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/bootstrap.svg",
                      alt: "bootstrap",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/git.svg",
                      alt: "git",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/single-spa.svg",
                      alt: "single-spa",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/gradle.svg",
                      alt: "gradle",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/maven.svg",
                      alt: "maven",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/spark.svg",
                      alt: "spark",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/angular.svg",
                      alt: "angular",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/react.svg",
                      alt: "react",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "skill-section",
                  children: [
                    (0, a.jsx)("h5", {
                      className: "skill-heading",
                      children: "Databases",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/mysql.svg",
                      alt: "mysql",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/postgres.svg",
                      alt: "postgres",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/elasticsearch.svg",
                      alt: "elasticsearch",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "skill-section",
                  children: [
                    (0, a.jsx)("h5", {
                      className: "skill-heading",
                      children: "Machine Learning",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/matplotlib.svg",
                      alt: "matplotlib",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/numpy.svg",
                      alt: "numpy",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/pandas.svg",
                      alt: "pandas",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/pytorch.svg",
                      alt: "pytorch",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/scikit-learn.svg",
                      alt: "scikit-learn.",
                    }),
                    (0, a.jsx)("img", {
                      className: "skill-logo",
                      src: "/assets/skills/tensorflow.svg",
                      alt: "tensorflow",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      const i = function () {
        return (0, a.jsxs)("div", {
          className: "route-outer",
          children: [
            (0, a.jsx)("h2", {
              className: "heading",
              id: "education",
              children: "Education",
            }),
            (0, a.jsx)("hr", {}),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/umass.png",
                      alt: "UMass Amherst",
                      className: "university-icon",
                    }),
                    (0, a.jsx)("div", {
                      className: "d-flex ms-2",
                      children: (0, a.jsx)("h7", {
                        children: "University of Massachusetts Amherst",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "Feb '24 - Dec '25" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("img", {
                      src: "/assets/images/university/umass.jpeg",
                      alt: "UMass Amherst",
                      className: "university-img left-align-media",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsxs)("div", {
                      className: "coursework",
                      children: [
                        (0, a.jsx)("b", {
                          children: "Master of Science in Computer Science",
                        }),
                        " (GPA: 4.0 / 4.0) ",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("b", { children: "Coursework:" }),
                        " Systems for Data Science,  System Defense and Test, Data Science Fundamentals, Machine Learning, Distributed and Operating Systems (Upcoming Semester)",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("a", { href: "/assets/files/UnofficialTranscript_UMassAmherst.pdf", children: "Download Transcript" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/IITRoorkeeLogo.png",
                      alt: "IIT Roorkee",
                      className: "university-icon",
                    }),
                    (0, a.jsx)("div", {
                      className: "d-flex ms-2",
                      children: (0, a.jsx)("h7", {
                        children:
                          "Indian Institute of Technology Roorkee",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "Jul '13 - May '17" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsxs)("div", {
                      className: "coursework",
                      children: [
                        (0, a.jsx)("b", {
                          children:
                            "Bachelor of Technology in Materials Science And Engineering",
                        }),
                        " (GPA: 7.5 / 10.0)",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("b", { children: "Coursework:" }),
                        " Data Structures and Algorithms, Computer Programming, Engineering Design Analysis, Introduction to Electronics, Numerical Methods, Linear Algebra",
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("img", {
                      src: "/assets/images/university/IITRoorkeeMainBuilding.jpeg",
                      alt: "IIT Roorkee",
                      className: "university-img-portrait",
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/CBSELogo.png",
                      alt: "CBSE",
                      className: "university-icon",
                    }),
                    (0, a.jsx)("div", {
                      className: "d-flex ms-2",
                      children: (0, a.jsx)("h7", {
                        children:
                          "Central Board of Secondary Education (CBSE)",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsxs)("div", {
                      className: "coursework",
                      children: [
                        "93.6% (Physics, Chemistry, Maths) in CBSE board examination conducted in 2012 and received Academic Achievement Award for the same ",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("br", {}),
                        "Secured an All India Rank of 4569 among 1.2 million students in JEE Advanced 2013 to secure admission at IIT Roorkee ",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("b", { children: "Coursework: " }),
                        "Mathematics, Physics, Chemistry, English and Economics",
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      const o = function () {
        return (0, a.jsxs)("div", {
          className: "route-outer",
          children: [
            (0, a.jsx)("h2", {
              className: "heading",
              id: "experience",
              children: "Industry Experience",
            }),
            (0, a.jsx)("hr", {}),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/WalmartLogo.png",
                      alt: "Walmart Labs",
                      className: "company-icon2",
                    }),
                    (0, a.jsxs)("div", {
                      className: "d-flex ms-2",
                      children: [
                        (0, a.jsx)("h5", { children: "Walmart Labs (Walmart Global Tech)" }),
                        (0, a.jsx)("p", {
                          className: "ms-1",
                          children: " - Senior Software Engineer",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "Oct '22 - Dec '24" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "work-project-content",
              children:
                "In October 2022, I began working as a Senior Software Engineer at Walmart Global Tech (previously Walmart Labs). In my first year, I developed an A/B testing framework to assess the performance of marketing campaigns, which served over 100 million ads. This initiative significantly informed Walmart’s ad-bidding algorithm and enhanced the Return on Ad Spend (RoAS) by 9% post-production. Going forward, I redesigned the backend architecture for Search Engine Marketing’s ad-bidding tool. By migrating the legacy Ruby on Rails code to a microservice-based architecture and integrating caching, BigQuery, and GraphQL, I successfully reduced latencies by 25%, thereby optimizing the tool's performance and efficiency. I also developed a back-end pipeline in Airflow to gather data from various data sources in Hive and aggregate it on a daily basis in BigQuery to present Search Engine Marketing's data on an interactive analytics dashboard.",
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/paytmLogo.png",
                      alt: "Citi",
                      className: "company-icon",
                    }),
                    (0, a.jsxs)("div", {
                      className: "d-flex ms-2",
                      children: [
                        (0, a.jsx)("h5", { children: "Paytm" }),
                        (0, a.jsx)("p", {
                          className: "ms-1",
                          children: " - Senior Software Engineer",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "Jul '19 - Sep '22" }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "work-project-content",
              children: [
                "I worked at Paytm (Payment Gateway) as a Senior Software engineer for more than 3 years. I was tasked with several critical initiatives that significantly improved system performance and system integrations. I implemented a rate-limiting mechanism for the settlements service using the token-bucket algorithm to meet rate-limited constraints set by bank channels. By leveraging cache to maintain and allocate tokens, I reduced transaction retry failures by ",
                (0, a.jsx)("b", { children: "70%. " }),
                "Additionally, I streamlined the daily merchant settlement cycle from 4 hours to 1.5 hours by developing a real-time consumer to store merchant state prior to processing, which improved the settlement timeline for over 15 million merchants.",
                (0, a.jsx)("br", {}),
                (0, a.jsx)("br", {}),
                "Furthermore, I implemented a summary accounting mechanism for handling hot partition transactions in databases asynchronously, which increased the request-serving capacity of the accounting service by 45%. I also led the engineering delivery for the NPCI (National Payment Corporation of India) qSPARC project, where I played a pivotal role in integrating Paytm’s payment network with the national metro (travel) payments network, efficiently handling traffic of more than 30,000 payments per minute.",
              ],
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/GEHealthcareLogo.png",
                      alt: "GE Healthcare",
                      className: "company-icon3",
                    }),
                    (0, a.jsxs)("div", {
                      className: "d-flex ms-2",
                      children: [
                        (0, a.jsx)("h5", { children: "GE Healthcare" }),
                        (0, a.jsx)("p", {
                          className: "ms-1",
                          children: " - Software Engineer",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "Feb '19 - Jun '19" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "work-project-content",
              children:
                "At GE Healthcare, I developed an extendable application called Click Tracer, designed to recreate the operator action sequence for MRI (Magnetic Resonance Imaging) systems. This tool was pivotal in diagnosing and addressing system usability issues, leading to an estimated 30% reduction in system crash complaints in production. ",
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/assets/images/logos/VirtusaLogo.png",
                      alt: "GE Healthcare",
                      className: "company-icon3",
                    }),
                    (0, a.jsxs)("div", {
                      className: "d-flex ms-2",
                      children: [
                        (0, a.jsx)("h5", { children: "Virtusa" }),
                        (0, a.jsx)("p", {
                          className: "ms-1",
                          children: " - Software Engineer",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("em", { children: "Jul '17 - Jan '19" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "work-project-content",
              children:
                "At Virtusa, I played a key role in the development of a visualization tool designed to group contextually related mobile-network infrastructure alerts, aimed at enhancing operational efficiency. By leveraging Kafka for data streaming and Druid for real-time analytics, this tool significantly reduced the Mean Time to Resolution from 6 hours to 2 hours.",
            }),
          ],
        });
      };
      const s = function () {
        return (0, a.jsxs)("div", {
          className: "route-outer",
          children: [
            (0, a.jsx)("h2", {
              className: "heading",
              id: "projects",
              children: "Projects",
            }),
            (0, a.jsx)("hr", {}),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      "ToneSense",
                      (0, a.jsx)("a", {
                        href: "https://github.com/Greenleaf20/ToneSense",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          className: "repo-img",
                          alt: "Github logo",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Feb '24" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "video-container left-align-media",
                      children: (0, a.jsx)("iframe", {
                        width: "420",
                        height: "315",
                        title: "tonesense",
                        src: "https://www.youtube.com/embed/ScrEfHBbiIw?mute=1",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "project-content-with-media",
                      children:
                        "I developed this application as a part of Hack(H)er413 2024 hackathon conducted at the University of Massachusetts Amherst. It is a web based application developed by  Angular, HTML, CSS and TypeScript to sense the sentiment behind text and audio into 28 different emotions. I used a Transformer based Wav2vec2 model for speech to text conversion and the roberta-base-go_emotions model for analyzing the sentiment behind a text.",
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsx)("h5", {
                    children: "Distributed Market",
                  }),
                }),
                (0, a.jsx)("em", { children: "Sep '24 - Dec '24" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "project-content",
              children:
                "I developed this application during the Distributed and Operating Systems course in Fall 2024. I desgined a distributed market where buyers, sellers and traders behave as different processes/servers and can handle concurrent requests from various clients using a thread-pool model. We made a fault tolerant system using replication techniques and selected a leader for them using a bully leader election algorithm. The requests from the frontend is sent to the leader which then maintained consistency between the replicas in order to handle failures gracefully. I also implemented leader failover by initiating re-election when the leader does not respond. I implemented a LRU cache following an eventual consistency model at the top level to cache the buy/sell requests which led to a decrease in latency and improvement in the performance of the system.",
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      "Prediction of Superconductors Temperature",
                      (0, a.jsx)("a", {
                        href: "https://github.com/ujjwalguptavirtuoso/spark-superconductor-critical-temp-prediction",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          alt: "Github logo",
                          className: "repo-img",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Feb '24 - May '24" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "project-content-with-media",
                      children:
                        "I developed this application during the Systems for Data Science course in Spring 2024. I designed a critical temperature prediction system using Python that analyzes historical data using PySpark. I used different batch sizes of data with Decision Tree Regressor, Random Forest Regressor and Gradient Boosted Tree Machine Learning models from SparkMLLib and PyTorch to predict the critical temperatures of the superconductors. Compared and analyzed the performance and latencies of different batch sizes with Spark.",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("iframe", {
                      width: "420",
                      height: "315",
                      className: "project-img right-align-media",
                      title: "super-conductor-temp-prediction",
                      src: "https://drive.google.com/file/d/1-eWCYPh_EgTtE0JouvYYrDS8OiR5Fuc_/preview",
                    }),
                  }),
                ],
              }),
            }),
           /* (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      "Elevation-based Navigation System (EleNa)",
                      (0, a.jsx)("a", {
                        href: "https://github.com/Greenleaf20/EleNa-Frontend",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          alt: "Github logo",
                          className: "repo-img",
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "https://github.com/Greenleaf20/EleNa-Backend",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          alt: "Github logo",
                          className: "repo-img",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Oct '22 - Dec '22" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("img", {
                      src: "/assets/images/projects/elena-view.png",
                      alt: "Elena view",
                      className: "project-img left-align-media",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "project-content-with-media",
                      children:
                        "I developed this application during the Theory and Practice of Software Engineering course in Fall 2022. I built a navigation system using React and JavaScript to suggest the path of minimum elevation gain between locations given by the user. I implemented Dijkstra's and A* algorithms to find a path that has the minimum elevation gain within a user-specified range of the distance of the shortest path. I also designed User Interface where user can pick the locations on the map and view the chosen path.",
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      "Student Cafeteria application",
                      (0, a.jsx)("a", {
                        href: "https://github.com/Greenleaf20/mess-application-frontend",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          className: "repo-img",
                          alt: "Github logo",
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "https://github.com/Greenleaf20/messiah-backend",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          className: "repo-img",
                          alt: "Github logo",
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "files/catering-application-report.pdf",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/pdf-no-bg.png",
                          className: "repo-img",
                          alt: "PDF logo",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Feb '20" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "project-content-with-media",
                      children:
                        "I developed this application during a campus wide Hackathon at the National Institute of Technology Tiruchirappalli in 2020. During this period, in the dining halls, caterers manually recorded and marked students' attendance using physical cards. This process proved inconvenient, as students occasionally forgot to bring their cards. Students consistently carried their phones, prompting us to develop a mobile application for meal check-ins at the dining halls. This not only ensured convenience for students but also facilitated easier attendance tracking for caterers. Moreover, it provided a valuable tool for analyzing food consumption patterns and minimizing wastage. I designed the application using React Native and Django. The application has a QR generator for the students and a corresponding scanner for the caterers. Both the parties had a dashboard where they can view/edit schedule correspondingly and also send/receive feedback. I also employed Holt-Winters forecasting for predicting food wastage.",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("img", {
                      src: "/assets/images/projects/mess-application/student-view/2.png",
                      alt: "Messiah view",
                      className: "project-img-portrait right-align-media",
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      "Reinforcement Learning based control of ball-beam system",
                      (0, a.jsx)("a", {
                        href: "https://ieeexplore.ieee.org/document/9342690",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/google-scholar-no-bg.png",
                          alt: "Paper link",
                          className: "repo-img",
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "/assets/files/Archana_Ganesh_Publication.pdf",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/pdf-no-bg.png",
                          className: "repo-img",
                          alt: "PDF logo",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Jan '20 - May '20" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("iframe", {
                      width: "420",
                      height: "315",
                      className: "project-img left-align-media",
                      id: "bbsystem",
                      title: "bbsystem",
                      src: "https://drive.google.com/file/d/1z0tq2JNfl9youDE47plMrfh3eNTEtQct/preview",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "project-content-with-media-less-space",
                      children:
                        "I worked on this project as part of my thesis when I pursued my Bachelor's degree in Instrumentation and Control Engineering with a minor in Computer Science. I chose this project as it is a perfect blend of both my degrees as I used Reinforcement Learning to control a ball and beam system. I developed a simulation environment of the servo based ball and beam system using Python and OpenAI gym. I trained the system using PPO2 and DDPG algorithms and was able to achieve a maximum reward of 0.99 on a scale of 0 to 1. The system was able to handle disturbances as well and was to able to stabilize. My work on this was published in the IEEE International Conference on Industrial and Information Systems in 2020.",
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      "Genome sequence analysis using Machine Learning",
                      (0, a.jsx)("a", {
                        href: "/assets/files/genome-analysis-manuscript.pdf",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/pdf-no-bg.png",
                          className: "repo-img",
                          alt: "PDF logo",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Dec '19 - May '20" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "project-content",
              children:
                "I was involved in this project when the COVID-19 had just started and was becoming a global threat. At the time, the virus was fairly new to the scientific world and the genome composition of it was relatively unknown. The goal of the project was to compare the genome of the Coronavirus with that of other respiratory diseases and draw knowledge from that. I trained LSTM, CNN and CNN-LSTM hybrid models on 8 respiratory diseases and achieved a maximum accuracy of 99.71%. I used this model to analyze the genome sequence of the Coronavirus by leveraging Transfer Learning.",
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsxs)("h5", {
                    children: [
                      " Uber Rides Analysis",
                      (0, a.jsx)("a", {
                        href: "https://github.com/Greenleaf20/CSOE17",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, a.jsx)("img", {
                          src: "/assets/images/projects/Github-Logo-No-Background.png",
                          className: "repo-img",
                          alt: "Github logo",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("em", { children: "Oct '19" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "project-content",
              children:
                "I created this application as a part of Big Data Analytics course in Fall 2019. I analyzed Uber rides data in New York City to determine how time and day influenced the frequency of the rides. I used MapReduce algorithm of Hadoop to process 4.3 million records and also used multi-threaded mapper classNamees to speed uf the process by 20%. The trends from this data could be useful for Uber and other ride-hailing services, enabling them to anticipate and optimize usage patterns effectively.",
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsx)("h5", {
                    children: " Railway Reservation System ",
                  }),
                }),
                (0, a.jsx)("em", { children: "Apr '18" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "project-content",
              children:
                "I developed a railway reservation system using C++ which had features that included train schedules, seat reservation, seat chart view and seat cancellation. I used linked list data structure of C++ and used Object Oriented programming concepts like Inheritance, Encapsulation and Abstraction to effectively handle sensitive data. Only the admin can view the all reservation details and cancel them. The users can only view their reservation and the seating chart. The operations done in the background during a reservation were abstracted from the users.",
            }),
            (0, a.jsxs)("div", {
              className: "d-flex justify-content-between",
              children: [
                (0, a.jsx)("div", {
                  className: "d-flex",
                  children: (0, a.jsx)("h5", { children: " Ping Pong game " }),
                }),
                (0, a.jsx)("em", { children: "Oct '16" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("div", {
                className: "row",
                children: [
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("div", {
                      className: "project-content-with-media",
                      children:
                        "I designed a multi player ping pong game as a web application using HTML, CSS and JavaScript. I developed the controllers for the game as a Mobile application and as Joystick. I developed the mobile application using Android Studio and it used gestures to control the paddle. I designed the Joystick using Arduino and the controller in it can be used to move the paddle.",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-6",
                    children: (0, a.jsx)("iframe", {
                      width: "420",
                      height: "315",
                      className: "project-img right-align-media",
                      id: "pingpong",
                      title: "pingpong",
                      src: "https://drive.google.com/file/d/1Pf2xXOjj4CIUUPqF0H1Ys3MLYypKkmPo/preview",
                    }),
                  }), 
                ],
              }), 
            }), */
          ],
        });
      };
      const u = function () {
        return (0, a.jsxs)("div", {
          className: "route-outer",
          children: [
            (0, a.jsx)("h2", {
              className: "heading",
              id: "research",
              children: "Research",
            }),
            (0, a.jsx)("hr", {}),
          ],
        });
      };
      const c = function () {
        return (0, a.jsxs)("div", {
          className: "route-outer",
          children: [
            (0, a.jsxs)("h2", {
              className: "heading",
              id: "social",
              children: [
                "Something fun about me! ",
                (0, a.jsx)("span", {
                  className: "smileface",
                  children: "\ud83d\ude0a",
                }),
                " ",
              ],
            }),
            (0, a.jsx)("hr", {}),
            (0, a.jsxs)("p", {
              children: [
                "I'm really passionate about music and in my free time I like to play, listen and compose music. I have been playing guitar for more than 15 years and have also tried my musical skills at piano and trumpet in the last 3 years. I have been a part of 2 rock bands and have won various competitions in the past few years. I am currently learning how to do jazz improvisation with trumpet and piano and also hope to take some formal training in jazz improvisation in future.",
              ],
            }),
            (0, a.jsxs)("div", {
              className: "social-pics-div",
              children: [
                (0, a.jsx)("img", {
                  className: "social-pics-l social-pics-size",
                  alt: "2021 reading challenge",
                  src: "/assets/images/social/Ujjwal_Guitar.png",
                }),
                (0, a.jsx)("img", {
                  className: "social-pics-p social-pics-size",
                  alt: "Jane Austen award",
                  src: "/assets/images/social/Ujjwal_trumpet.jpg",
                }),
              ],
            }),
          ],
        });
      };
      const d = function () {
          const [n, t] = (0, e.useState)(() => {
            const e = localStorage.getItem("darkMode");
            return !e || "true" === e;
          });
          (0, e.useEffect)(() => {
            localStorage.setItem("darkMode", n);
          }, [n]);
          const r = () => {
              t(!n);
            },
            [d, f] = (0, e.useState)("about"),
            p = (e) => {
              f(e);
            };
          return (0, a.jsxs)("div", {
            className: n ? "dark-mode" : "",
            children: [
              (0, a.jsx)("nav", {
                className: "navbar navbar-expand-sm bg-dark navbar-dark sticky",
                children: (0, a.jsxs)("div", {
                  className: "container-fluid",
                  children: [
                    (0, a.jsxs)("ul", {
                      className: "navbar-nav",
                      children: [
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("span", {
                            className: "nav-link active button trans",
                            onClick: () => p("about"),
                            children: "Ujjwal Gupta",
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("span", {
                            className: "nav-link button trans",
                            onClick: () => p("education"),
                            children: "Education",
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("span", {
                            className: "nav-link button trans",
                            onClick: () => p("experience"),
                            children: "Experience",
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("span", {
                            className: "nav-link button trans",
                            onClick: () => p("projects"),
                            children: "Projects",
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("a", {
                            className: "nav-link button trans",
                            href: "/assets/files/Ujjwal_Gupta_Resume.pdf",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Resume",
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("span", {
                            className: "nav-link button trans",
                            onClick: () => p("awards"),
                            children: "Research",
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "nav-item",
                          children: (0, a.jsx)("span", {
                            className: "nav-link button trans",
                            onClick: () => p("social"),
                            children: "Hobbies",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "d-flex justify-content-end align-items-center theme-slider-container",
                      children: (0, a.jsx)("div", {
                        className:
                          "flex flex-col justify-center ml-3 form-check form-switch",
                        children: (0, a.jsxs)("label", {
                          className: "relative cursor-pointer p-2",
                          htmlFor: "light-switch",
                          type: "button",
                          children: [
                            n &&
                              (0, a.jsxs)("svg", {
                                className: "dark:hidden",
                                width: "16",
                                height: "16",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "#C0C0C0",
                                onClick: r,
                                children: [
                                  (0, a.jsx)("path", {
                                    className: "fill-slate-300",
                                    d: "M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z",
                                  }),
                                  (0, a.jsx)("path", {
                                    className: "fill-slate-400",
                                    d: "M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z",
                                  }),
                                ],
                              }),
                            !n &&
                              (0, a.jsxs)("svg", {
                                className: "hidden dark:block",
                                width: "16",
                                height: "16",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "#C0C0C0",
                                onClick: r,
                                children: [
                                  (0, a.jsx)("path", {
                                    className: "fill-slate-400",
                                    d: "M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z",
                                  }),
                                  (0, a.jsx)("path", {
                                    className: "fill-slate-500",
                                    d: "M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "container mt-5",
                children: (0, a.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "col-sm-2 justify-content-center left-panel",
                      children: [
                        (0, a.jsx)("img", {
                          className: "fakeimg2 no-zoom",
                          src: "/assets/images/profile-pic-ujjwal.png",
                          alt: "Profile",
                        }),
                        (0, a.jsx)("h4", {
                          className: "mt-4",
                          children: "Ujjwal Gupta",
                        }),
                        (0, a.jsxs)("p", {
                          children: [
                            " Master of Science ",
                            (0, a.jsx)("br", {}),
                            " ",
                            (0, a.jsx)("a", {
                              href: "https://www.cics.umass.edu/",
                              className: "text-secondary",
                              target: "_blank",
                              rel: "noreferrer",
                              children:
                                "College of Information and Computer Sciences",
                            }),
                            " ",
                            (0, a.jsx)("br", {}),
                            " University of Massachusetts Amherst",
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          children: [
                            (0, a.jsx)("img", {
                              src: n
                                ? "/assets/images/svgs/location-logo-light.svg"
                                : "/assets/images/svgs/location-logo.svg",
                              id: "location",
                              alt: "location",
                            }),
                            " Amherst, MA, USA",
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          children: [
                            (0, a.jsx)("img", {
                              src: n
                                ? "/assets/images/svgs/email-logo-light.svg"
                                : "/assets/images/svgs/email-logo.svg",
                              className: "me-2",
                              id: "email",
                              alt: "email",
                            }),
                            "ugupta@umass.edu",
                          ],
                        }),
                        (0, a.jsx)("p", {
                          children: (0, a.jsxs)("a", {
                            href: "https://www.linkedin.com/in/ujjwal-gupta-b0422a8b/",
                            className: "text-secondary",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              (0, a.jsx)("img", {
                                src: n
                                  ? "/assets/images/svgs/linkedin-logo-light.svg"
                                  : "/assets/images/svgs/linkedin-logo.svg",
                                className: "me-2",
                                id: "linkedin",
                                alt: "linkedin",
                              }),
                              "ujjwal-gupta",
                            ],
                          }),
                        }),
                        (0, a.jsx)("p", {
                          children: (0, a.jsxs)("a", {
                            href: "https://scholar.google.com/citations?user=FQAmrN4AAAAJ&hl=en",
                            className: "text-secondary",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              (0, a.jsx)("img", {
                                src: n
                                  ? "/assets/images/svgs/scholar-logo-light.svg"
                                  : "/assets/images/svgs/scholar-logo.svg",
                                className: "me-2",
                                id: "google-scholar",
                                alt: "google-scholar",
                              }),
                              "Ujjwal Gupta",
                            ],
                          }),
                        }),
                        (0, a.jsx)("p", {
                          children: (0, a.jsxs)("a", {
                            href: "https://github.com/ujjwalguptavirtuoso",
                            className: "text-secondary",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              (0, a.jsx)("img", {
                                src: n
                                  ? "/assets/images/svgs/github-logo-light.svg"
                                  : "/assets/images/svgs/github-logo.svg",
                                className: "me-2",
                                id: "github",
                                alt: "github",
                              }),
                              "ujjwalguptavirtuoso",
                            ],
                          }),
                        }),
                        (0, a.jsx)("hr", { className: "d-sm-none" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "col-sm-9 ms-5",
                      children: [
                        "about" === d && (0, a.jsx)(l, {}),
                        "education" === d && (0, a.jsx)(i, {}),
                        "experience" === d && (0, a.jsx)(o, {}),
                        "projects" === d && (0, a.jsx)(s, {}),
                        "awards" === d && (0, a.jsx)(u, {}),
                        "social" === d && (0, a.jsx)(c, {}),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "mt-4 p-1 bg-dark text-white text-center",
                children: (0, a.jsxs)("p", {
                  className: "made-text",
                  children: [
                    "Made with ",
                    (0, a.jsx)("span", {
                      className: "heart",
                      children: "\u2665",
                    }),
                    " by Ujjwal.",
                  ],
                }),
              }),
            ],
          });
        },
        f = (e) => {
          e &&
            e instanceof Function &&
            t
              .e(453)
              .then(t.bind(t, 453))
              .then((n) => {
                let {
                  getCLS: t,
                  getFID: r,
                  getFCP: a,
                  getLCP: l,
                  getTTFB: i,
                } = n;
                t(e), r(e), a(e), l(e), i(e);
              });
        };
      var p,
        h = t(950),
        m = t.t(h, 2);
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          g.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(p || (p = {}));
      const v = "popstate";
      function y(e, n) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(n);
      }
      function b(e, n) {
        return { usr: e.state, key: e.key, idx: n };
      }
      function w(e, n, t, r) {
        return (
          void 0 === t && (t = null),
          g(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof n ? x(n) : n,
            {
              state: t,
              key: (n && n.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function k(e) {
        let { pathname: n = "/", search: t = "", hash: r = "" } = e;
        return (
          t && "?" !== t && (n += "?" === t.charAt(0) ? t : "?" + t),
          r && "#" !== r && (n += "#" === r.charAt(0) ? r : "#" + r),
          n
        );
      }
      function x(e) {
        let n = {};
        if (e) {
          let t = e.indexOf("#");
          t >= 0 && ((n.hash = e.substr(t)), (e = e.substr(0, t)));
          let r = e.indexOf("?");
          r >= 0 && ((n.search = e.substr(r)), (e = e.substr(0, r))),
            e && (n.pathname = e);
        }
        return n;
      }
      function S(e, n, t, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: l = !1 } = r,
          i = a.history,
          o = p.Pop,
          s = null,
          u = c();
        function c() {
          return (i.state || { idx: null }).idx;
        }
        function d() {
          o = p.Pop;
          let e = c(),
            n = null == e ? null : e - u;
          (u = e), s && s({ action: o, location: h.location, delta: n });
        }
        function f(e) {
          let n =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            t = "string" === typeof e ? e : k(e);
          return (
            (t = t.replace(/ $/, "%20")),
            y(
              n,
              "No window.location.(origin|href) available to create URL for href: " +
                t
            ),
            new URL(t, n)
          );
        }
        null == u && ((u = 0), i.replaceState(g({}, i.state, { idx: u }), ""));
        let h = {
          get action() {
            return o;
          },
          get location() {
            return e(a, i);
          },
          listen(e) {
            if (s)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(v, d),
              (s = e),
              () => {
                a.removeEventListener(v, d), (s = null);
              }
            );
          },
          createHref: (e) => n(a, e),
          createURL: f,
          encodeLocation(e) {
            let n = f(e);
            return { pathname: n.pathname, search: n.search, hash: n.hash };
          },
          push: function (e, n) {
            o = p.Push;
            let r = w(h.location, e, n);
            t && t(r, e), (u = c() + 1);
            let d = b(r, u),
              f = h.createHref(r);
            try {
              i.pushState(d, "", f);
            } catch (m) {
              if (m instanceof DOMException && "DataCloneError" === m.name)
                throw m;
              a.location.assign(f);
            }
            l && s && s({ action: o, location: h.location, delta: 1 });
          },
          replace: function (e, n) {
            o = p.Replace;
            let r = w(h.location, e, n);
            t && t(r, e), (u = c());
            let a = b(r, u),
              d = h.createHref(r);
            i.replaceState(a, "", d),
              l && s && s({ action: o, location: h.location, delta: 0 });
          },
          go: (e) => i.go(e),
        };
        return h;
      }
      var j;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(j || (j = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function N(e, n) {
        if ("/" === n) return e;
        if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
        let t = n.endsWith("/") ? n.length - 1 : n.length,
          r = e.charAt(t);
        return r && "/" !== r ? null : e.slice(t) || "/";
      }
      Error;
      const C = ["post", "put", "patch", "delete"],
        E = (new Set(C), ["get", ...C]);
      new Set(E), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      const P = e.createContext(null);
      const T = e.createContext(null);
      function z() {
        return null != e.useContext(T);
      }
      e.Component;
      n.startTransition;
      function I(n) {
        let {
          basename: t = "/",
          children: r = null,
          location: a,
          navigationType: l = p.Pop,
          navigator: i,
          static: o = !1,
          future: s,
        } = n;
        z() && y(!1);
        let u = t.replace(/^\/*/, "/"),
          c = e.useMemo(
            () => ({
              basename: u,
              navigator: i,
              static: o,
              future: _({ v7_relativeSplatPath: !1 }, s),
            }),
            [u, s, i, o]
          );
        "string" === typeof a && (a = x(a));
        let {
            pathname: d = "/",
            search: f = "",
            hash: h = "",
            state: m = null,
            key: g = "default",
          } = a,
          v = e.useMemo(() => {
            let e = N(d, u);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: f,
                    hash: h,
                    state: m,
                    key: g,
                  },
                  navigationType: l,
                };
          }, [u, d, f, h, m, g, l]);
        return null == v
          ? null
          : e.createElement(
              P.Provider,
              { value: c },
              e.createElement(T.Provider, { children: r, value: v })
            );
      }
      new Promise(() => {});
      e.Component;
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      try {
        window.__reactRouterVersion = "6";
      } catch (F) {}
      new Map();
      const L = n.startTransition;
      m.flushSync, n.useId;
      function M(n) {
        let { basename: t, children: r, future: a, window: l } = n,
          i = e.useRef();
        var o;
        null == i.current &&
          (i.current =
            (void 0 === (o = { window: l, v5Compat: !0 }) && (o = {}),
            S(
              function (e, n) {
                let { pathname: t, search: r, hash: a } = e.location;
                return w(
                  "",
                  { pathname: t, search: r, hash: a },
                  (n.state && n.state.usr) || null,
                  (n.state && n.state.key) || "default"
                );
              },
              function (e, n) {
                return "string" === typeof n ? n : k(n);
              },
              null,
              o
            )));
        let s = i.current,
          [u, c] = e.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = a || {},
          f = e.useCallback(
            (e) => {
              d && L ? L(() => c(e)) : c(e);
            },
            [c, d]
          );
        return (
          e.useLayoutEffect(() => s.listen(f), [s, f]),
          e.createElement(I, {
            basename: t,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: s,
            future: a,
          })
        );
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var R, O;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(R || (R = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(O || (O = {}));
      r
        .createRoot(document.getElementById("root"))
        .render(
          (0, a.jsx)(e.StrictMode, {
            children: (0, a.jsx)(M, { children: (0, a.jsx)(d, {}) }),
          })
        ),
        f();
    })();
})();
//# sourceMappingURL=main.0a287a79.js.map
