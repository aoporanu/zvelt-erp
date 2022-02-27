/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports, __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  e = e && e.hasOwnProperty("default") ? e["default"] : e, n = n && n.hasOwnProperty("default") ? n["default"] : n;

  var o,
      a,
      l,
      h,
      c,
      u,
      f,
      d,
      _,
      g,
      p,
      m,
      v,
      E,
      T,
      y,
      C,
      I,
      A,
      b,
      D,
      S,
      w,
      N,
      O,
      k,
      P = function (t) {
    var e = !1;

    function n(e) {
      var n = this,
          s = !1;
      return t(this).one(i.TRANSITION_END, function () {
        s = !0;
      }), setTimeout(function () {
        s || i.triggerTransitionEnd(n);
      }, e), this;
    }

    var i = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var n,
            i = e.getAttribute("data-target");
        i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));

        try {
          return t(document).find(i).length > 0 ? i : null;
        } catch (t) {
          return null;
        }
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var s in n) {
          if (Object.prototype.hasOwnProperty.call(n, s)) {
            var r = n[s],
                o = e[s],
                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
          }
        }

        var l;
      }
    };
    return e = ("undefined" == typeof window || !window.QUnit) && {
      end: "transitionend"
    }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
      bindType: e.end,
      delegateType: e.end,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }), i;
  }(e),
      L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
    CLOSE: "close" + h,
    CLOSED: "closed" + h,
    CLICK_DATA_API: "click" + h + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.close = function (t) {
      t = t || this._element;

      var e = this._getRootElement(t);

      this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      o.removeData(this._element, l), this._element = null;
    }, e._getRootElement = function (t) {
      var e = P.getSelectorFromElement(t),
          n = !1;
      return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = o.Event(u.CLOSE);
      return o(t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;
      o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
        return e._destroyElement(t, n);
      }).emulateTransitionEnd(150) : this._destroyElement(t);
    }, e._destroyElement = function (t) {
      o(t).detach().trigger(u.CLOSED).remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = o(this),
            i = n.data(l);
        i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
    return o.fn[a] = c, g._jQueryInterface;
  }, g),
      R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
    CLICK_DATA_API: "click" + E + T,
    FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
  }, k = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.toggle = function () {
      var t = !0,
          e = !0,
          n = p(this._element).closest(D)[0];

      if (n) {
        var i = p(this._element).find(S)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && p(this._element).hasClass(C)) t = !1;else {
            var s = p(n).find(w)[0];
            s && p(s).removeClass(C);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !p(this._element).hasClass(C), p(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C);
    }, e.dispose = function () {
      p.removeData(this._element, v), this._element = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = p(this).data(v);
        n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]();
      });
    }, s(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
    t.preventDefault();
    var e = t.target;
    p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
    var e = p(t.target).closest(N)[0];
    p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
    return p.fn[m] = y, k._jQueryInterface;
  }, k),
      j = function (t) {
    var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = t.fn[e],
        a = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    },
        l = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    },
        h = "next",
        c = "prev",
        u = "left",
        f = "right",
        d = {
      SLIDE: "slide" + i,
      SLID: "slid" + i,
      KEYDOWN: "keydown" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i,
      TOUCHEND: "touchend" + i,
      LOAD_DATA_API: "load" + i + ".data-api",
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        _ = "carousel",
        g = "active",
        p = "slide",
        m = "carousel-item-right",
        v = "carousel-item-left",
        E = "carousel-item-next",
        T = "carousel-item-prev",
        y = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    },
        C = function () {
      function o(e, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners();
      }

      var C = o.prototype;
      return C.next = function () {
        this._isSliding || this._slide(h);
      }, C.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
      }, C.prev = function () {
        this._isSliding || this._slide(c);
      }, C.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, C.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, C.to = function (e) {
        var n = this;
        this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];

        var i = this._getItemIndex(this._activeElement);

        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();
          var s = e > i ? h : c;

          this._slide(s, this._items[e]);
        }
      }, C.dispose = function () {
        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, C._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, C._addEventListeners = function () {
        var e = this;
        this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(d.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, C._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;

          case 39:
            t.preventDefault(), this.next();
        }
      }, C._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e);
      }, C._getItemByDirection = function (t, e) {
        var n = t === h,
            i = t === c,
            s = this._getItemIndex(e),
            r = this._items.length - 1;

        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
        var o = (s + (t === c ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, C._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
            r = t.Event(d.SLIDE, {
          relatedTarget: e,
          direction: n,
          from: s,
          to: i
        });

        return t(this._element).trigger(r), r;
      }, C._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);

          var n = this._indicatorsElement.children[this._getItemIndex(e)];

          n && t(n).addClass(g);
        }
      }, C._slide = function (e, n) {
        var i,
            s,
            r,
            o = this,
            a = t(this._element).find(y.ACTIVE_ITEM)[0],
            l = this._getItemIndex(a),
            c = n || a && this._getItemByDirection(e, a),
            _ = this._getItemIndex(c),
            C = Boolean(this._interval);

        if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
          this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
          var I = t.Event(d.SLID, {
            relatedTarget: c,
            direction: r,
            from: l,
            to: _
          });
          P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
            t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
              return t(o._element).trigger(I);
            }, 0);
          }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle();
        }
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = r({}, a, t(this).data());
          "object" == _typeof(e) && (s = r({}, s, e));
          var l = "string" == typeof e ? e : s.slide;
          if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof l) {
            if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
            i[l]();
          } else s.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (e) {
        var i = P.getSelectorFromElement(this);

        if (i) {
          var s = t(i)[0];

          if (s && t(s).hasClass(_)) {
            var a = r({}, t(s).data(), t(this).data()),
                l = this.getAttribute("data-slide-to");
            l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault();
          }
        }
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
      t(y.DATA_RIDE).each(function () {
        var e = t(this);

        C._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
      return t.fn[e] = o, C._jQueryInterface;
    }, C;
  }(e),
      H = function (t) {
    var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        o = t.fn[e],
        a = {
      toggle: !0,
      parent: ""
    },
        l = {
      toggle: "boolean",
      parent: "(string|element)"
    },
        h = {
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        c = "show",
        u = "collapse",
        f = "collapsing",
        d = "collapsed",
        _ = "width",
        g = "height",
        p = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
        m = function () {
      function i(e, n) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
          var r = i[s],
              o = P.getSelectorFromElement(r);
          null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r));
        }

        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      var o = i.prototype;
      return o.toggle = function () {
        t(this._element).hasClass(c) ? this.hide() : this.show();
      }, o.show = function () {
        var e,
            s,
            r = this;

        if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
          var o = t.Event(h.SHOW);

          if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
            e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));

            var a = this._getDimension();

            t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);

            var l = function l() {
              t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN);
            };

            if (P.supportsTransitionEnd()) {
              var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));

              t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px";
            } else l();
          }
        }
      }, o.hide = function () {
        var e = this;

        if (!this._isTransitioning && t(this._element).hasClass(c)) {
          var n = t.Event(h.HIDE);

          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();

            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0) for (var s = 0; s < this._triggerArray.length; s++) {
              var r = this._triggerArray[s],
                  o = P.getSelectorFromElement(r);
              if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1);
            }
            this.setTransitioning(!0);

            var a = function a() {
              e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN);
            };

            this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a();
          }
        }
      }, o.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, o.dispose = function () {
        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, o._getConfig = function (t) {
        return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t;
      }, o._getDimension = function () {
        return t(this._element).hasClass(_) ? _ : g;
      }, o._getParent = function () {
        var e = this,
            n = null;
        P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return t(n).find(s).each(function (t, n) {
          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, o._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(c);
          n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var n = P.getSelectorFromElement(e);
        return n ? t(n)[0] : null;
      }, i._jQueryInterface = function (e) {
        return this.each(function () {
          var s = t(this),
              o = s.data(n),
              l = r({}, a, s.data(), "object" == _typeof(e) && e);

          if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
            o[e]();
          }
        });
      }, s(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), i;
    }();

    return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var i = t(this),
          s = P.getSelectorFromElement(this);
      t(s).each(function () {
        var e = t(this),
            s = e.data(n) ? "toggle" : i.data();

        m._jQueryInterface.call(e, s);
      });
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = o, m._jQueryInterface;
    }, m;
  }(e),
      W = function (t) {
    var e = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = ".data-api",
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = {
      HIDE: "hide" + o,
      HIDDEN: "hidden" + o,
      SHOW: "show" + o,
      SHOWN: "shown" + o,
      CLICK: "click" + o,
      CLICK_DATA_API: "click" + o + a,
      KEYDOWN_DATA_API: "keydown" + o + a,
      KEYUP_DATA_API: "keyup" + o + a
    },
        u = "disabled",
        f = "show",
        d = "dropup",
        _ = "dropright",
        g = "dropleft",
        p = "dropdown-menu-right",
        m = "dropdown-menu-left",
        v = "position-static",
        E = '[data-toggle="dropdown"]',
        T = ".dropdown form",
        y = ".dropdown-menu",
        C = ".navbar-nav",
        I = ".dropdown-menu .dropdown-item:not(.disabled)",
        A = "top-start",
        b = "top-end",
        D = "bottom-start",
        S = "bottom-end",
        w = "right-start",
        N = "left-start",
        O = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent"
    },
        k = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)"
    },
        L = function () {
      function a(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }

      var l = a.prototype;
      return l.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(u)) {
          var e = a._getParentFromElement(this._element),
              i = t(this._menu).hasClass(f);

          if (a._clearMenus(), !i) {
            var s = {
              relatedTarget: this._element
            },
                r = t.Event(c.SHOW, s);

            if (t(e).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var o = this._element;
                t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig());
              }

              "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
            }
          }
        }
      }, l.dispose = function () {
        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, l.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, l._addEventListeners = function () {
        var e = this;
        t(this._element).on(c.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, l._getConfig = function (n) {
        return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, l._getMenuElement = function () {
        if (!this._menu) {
          var e = a._getParentFromElement(this._element);

          this._menu = t(e).find(y)[0];
        }

        return this._menu;
      }, l._getPlacement = function () {
        var e = t(this._element).parent(),
            n = D;
        return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n;
      }, l._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, l._getPopperConfig = function () {
        var t = this,
            e = {};
        return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
        } : e.offset = this._config.offset, {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i);

          if (n || (n = new a(this, "object" == _typeof(e) ? e : null), t(this).data(i, n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }, a._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
          var r = a._getParentFromElement(n[s]),
              o = t(n[s]).data(i),
              l = {
            relatedTarget: n[s]
          };

          if (o) {
            var h = o._menu;

            if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
              var u = t.Event(c.HIDE, l);
              t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
            }
          }
        }
      }, a._getParentFromElement = function (e) {
        var n,
            i = P.getSelectorFromElement(e);
        return i && (n = t(i)[0]), n || e.parentNode;
      }, a._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
          var n = a._getParentFromElement(this),
              i = t(n).hasClass(f);

          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var s = t(n).find(I).get();

            if (0 !== s.length) {
              var r = s.indexOf(e.target);
              38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
            }
          } else {
            if (27 === e.which) {
              var o = t(n).find(E)[0];
              t(o).trigger("focus");
            }

            t(this).trigger("click");
          }
        }
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return O;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return k;
        }
      }]), a;
    }();

    return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
      e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
    }).on(c.CLICK_DATA_API, T, function (t) {
      t.stopPropagation();
    }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
      return t.fn[e] = l, L._jQueryInterface;
    }, L;
  }(e),
      M = function (t) {
    var e = "modal",
        n = "bs.modal",
        i = "." + n,
        o = t.fn.modal,
        a = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        l = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
        h = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      FOCUSIN: "focusin" + i,
      RESIZE: "resize" + i,
      CLICK_DISMISS: "click.dismiss" + i,
      KEYDOWN_DISMISS: "keydown.dismiss" + i,
      MOUSEUP_DISMISS: "mouseup.dismiss" + i,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        c = "modal-scrollbar-measure",
        u = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        _ = "show",
        g = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
    },
        p = function () {
      function o(e, n) {
        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }

      var p = o.prototype;
      return p.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, p.show = function (e) {
        var n = this;

        if (!this._isTransitioning && !this._isShown) {
          P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
          var i = t.Event(h.SHOW, {
            relatedTarget: e
          });
          t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, p.hide = function (e) {
        var n = this;

        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = t.Event(h.HIDE);

          if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;
            var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
            s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(300) : this._hideModal();
          }
        }
      }, p.dispose = function () {
        t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, p.handleUpdate = function () {
        this._adjustDialog();
      }, p._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, p._showElement = function (e) {
        var n = this,
            i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();

        var s = t.Event(h.SHOWN, {
          relatedTarget: e
        }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s);
        };

        i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r();
      }, p._enforceFocus = function () {
        var e = this;
        t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
        });
      }, p._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
      }, p._setResizeEvent = function () {
        var e = this;
        this._isShown ? t(window).on(h.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(h.RESIZE);
      }, p._hideModal = function () {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN);
        });
      }, p._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, p._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(d) ? d : "";

        if (this._isShown && this._config.backdrop) {
          var s = P.supportsTransitionEnd() && i;
          if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
          if (!s) return void e();
          t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(_);

          var r = function r() {
            n._removeBackdrop(), e && e();
          };

          P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r();
        } else e && e();
      }, p._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, p._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, p._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, p._setScrollbar = function () {
        var e = this;

        if (this._isBodyOverflowing) {
          t(g.FIXED_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");
            t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(g.STICKY_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
          }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });
          var n = document.body.style.paddingRight,
              i = t("body").css("padding-right");
          t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, p._resetScrollbar = function () {
        t(g.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");
          "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");
          "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
        });
        var e = t("body").data("padding-right");
        "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
      }, p._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = c, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }, o._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = t(this).data(n),
              a = r({}, o.Default, t(this).data(), "object" == _typeof(e) && e);

          if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
            if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
            s[e](i);
          } else a.show && s.show(i);
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
      var i,
          s = this,
          o = P.getSelectorFromElement(this);
      o && (i = t(o)[0]);
      var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var l = t(i).one(h.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
          t(s).is(":visible") && s.focus();
        });
      });

      p._jQueryInterface.call(t(i), a, this);
    }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
      return t.fn.modal = o, p._jQueryInterface;
    }, p;
  }(e),
      U = function (t) {
    var e = "tooltip",
        i = "bs.tooltip",
        o = "." + i,
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    },
        c = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
        u = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    },
        f = "show",
        d = "out",
        _ = {
      HIDE: "hide" + o,
      HIDDEN: "hidden" + o,
      SHOW: "show" + o,
      SHOWN: "shown" + o,
      INSERTED: "inserted" + o,
      CLICK: "click" + o,
      FOCUSIN: "focusin" + o,
      FOCUSOUT: "focusout" + o,
      MOUSEENTER: "mouseenter" + o,
      MOUSELEAVE: "mouseleave" + o
    },
        g = "fade",
        p = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        E = "hover",
        T = "focus",
        y = "click",
        C = "manual",
        I = function () {
      function a(t, e) {
        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }

      var I = a.prototype;
      return I.enable = function () {
        this._isEnabled = !0;
      }, I.disable = function () {
        this._isEnabled = !1;
      }, I.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, I.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);
          i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, I.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, I.show = function () {
        var e = this;
        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
        var i = t.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(i);
          var s = t.contains(this.element.ownerDocument.documentElement, this.element);
          if (i.isDefaultPrevented() || !s) return;
          var r = this.getTipElement(),
              o = P.getUID(this.constructor.NAME);
          r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);

          var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              h = this._getAttachment(l);

          this.addAttachmentClass(h);
          var c = !1 === this.config.container ? document.body : t(this.config.container);
          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
            placement: h,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: v
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            },
            onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            }
          }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);

          var u = function u() {
            e.config.animation && e._fixTransition();
            var n = e._hoverState;
            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e);
          };

          P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
        }
      }, I.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            s = t.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };

        t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
      }, I.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, I.isWithContent = function () {
        return Boolean(this.getTitle());
      }, I.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, I.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, I.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p);
      }, I.setElementContent = function (e, n) {
        var i = this.config.html;
        "object" == _typeof(n) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
      }, I.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, I._getAttachment = function (t) {
        return c[t.toUpperCase()];
      }, I._setListeners = function () {
        var e = this;
        this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== C) {
            var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(s, e.config.selector, function (t) {
              return e._leave(t);
            });
          }
          t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = r({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, I._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));

        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, I._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.show();
        }, n.config.delay.show) : n.show());
      }, I._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, I._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }

        return !1;
      }, I._getConfig = function (n) {
        return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
          show: n.delay,
          hide: n.delay
        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, I._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }
        return t;
      }, I._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(l);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, I._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, I._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;
        null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i),
              s = "object" == _typeof(e) && e;

          if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return u;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "Event",
        get: function get() {
          return _;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return o;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), a;
    }();

    return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = a, I._jQueryInterface;
    }, I;
  }(e),
      x = function (t) {
    var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, U.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
        h = r({}, U.DefaultType, {
      content: "(string|element|function)"
    }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        _ = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      INSERTED: "inserted" + i,
      CLICK: "click" + i,
      FOCUSIN: "focusin" + i,
      FOCUSOUT: "focusout" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i
    },
        g = function (r) {
      var o, g;

      function p() {
        return r.apply(this, arguments) || this;
      }

      g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
      var m = p.prototype;
      return m.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, m.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-popover-" + e);
      }, m.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, m.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(f), this.getTitle());

        var n = this._getContent();

        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u);
      }, m._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, m._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(a);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, p._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = "object" == _typeof(e) ? e : null;

          if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(p, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return n;
        }
      }, {
        key: "Event",
        get: function get() {
          return _;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), p;
    }(U);

    return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      K = function (t) {
    var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        o = t.fn[e],
        a = {
      offset: 10,
      method: "auto",
      target: ""
    },
        l = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
        h = {
      ACTIVATE: "activate" + i,
      SCROLL: "scroll" + i,
      LOAD_DATA_API: "load" + i + ".data-api"
    },
        c = "dropdown-item",
        u = "active",
        f = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
        d = "offset",
        _ = "position",
        g = function () {
      function o(e, n) {
        var i = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }

      var g = o.prototype;
      return g.refresh = function () {
        var e = this,
            n = this._scrollElement === this._scrollElement.window ? d : _,
            i = "auto" === this._config.method ? n : this._config.method,
            s = i === _ ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
          var n,
              r = P.getSelectorFromElement(e);

          if (r && (n = t(r)[0]), n) {
            var o = n.getBoundingClientRect();
            if (o.width || o.height) return [t(n)[i]().top + s, r];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, g.dispose = function () {
        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, g._getConfig = function (n) {
        if ("string" != typeof (n = r({}, a, n)).target) {
          var i = t(n.target).attr("id");
          i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }

        return P.typeCheckConfig(e, n, l), n;
      }, g._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, g._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, g._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, g._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var s = this._offsets.length; s--;) {
            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
          }
        }
      }, g._activate = function (e) {
        this._activeTarget = e, this._clear();

        var n = this._selector.split(",");

        n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });
        var i = t(n.join(","));
        i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
          relatedTarget: e
        });
      }, g._clear = function () {
        t(this._selector).filter(f.ACTIVE).removeClass(u);
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n);

          if (i || (i = new o(this, "object" == _typeof(e) && e), t(this).data(n, i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(window).on(h.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);

        g._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      V = function (t) {
    var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      CLICK_DATA_API: "click.bs.tab.data-api"
    },
        o = "dropdown-menu",
        a = "active",
        l = "disabled",
        h = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        _ = "> li > .active",
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = function () {
      function n(t) {
        this._element = t;
      }

      var i = n.prototype;
      return i.show = function () {
        var e = this;

        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
          var n,
              i,
              s = t(this._element).closest(f)[0],
              o = P.getSelectorFromElement(this._element);

          if (s) {
            var h = "UL" === s.nodeName ? _ : d;
            i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
          }

          var c = t.Event(r.HIDE, {
            relatedTarget: this._element
          }),
              u = t.Event(r.SHOW, {
            relatedTarget: i
          });

          if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
            o && (n = t(o)[0]), this._activate(this._element, s);

            var g = function g() {
              var n = t.Event(r.HIDDEN, {
                relatedTarget: e._element
              }),
                  s = t.Event(r.SHOWN, {
                relatedTarget: i
              });
              t(i).trigger(n), t(e._element).trigger(s);
            };

            n ? this._activate(n, n.parentNode, g) : g();
          }
        }
      }, i.dispose = function () {
        t.removeData(this._element, e), this._element = null;
      }, i._activate = function (e, n, i) {
        var s = this,
            r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
            o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
            a = function a() {
          return s._transitionComplete(e, r, i);
        };

        r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a();
      }, i._transitionComplete = function (e, n, i) {
        if (n) {
          t(n).removeClass(c + " " + a);
          var s = t(n.parentNode).find(m)[0];
          s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }

        if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
          var r = t(e).closest(u)[0];
          r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0);
        }

        i && i();
      }, n._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this),
              r = s.data(e);

          if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
            if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
            r[i]();
          }
        });
      }, s(n, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }]), n;
    }();

    return t(document).on(r.CLICK_DATA_API, g, function (e) {
      e.preventDefault(), v._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
      return t.fn.tab = i, v._jQueryInterface;
    }, v;
  }(e);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */

"use strict";

!function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
          d = document.createEvent("MouseEvents");
      d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d);
    }
  }

  if (a.support.touch = "ontouchend" in document, a.support.touch) {
    var e,
        b = a.ui.mouse.prototype,
        c = b._mouseInit,
        d = b._mouseDestroy;
    b._touchStart = function (a) {
      var b = this;
      !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"));
    }, b._touchMove = function (a) {
      e && (this._touchMoved = !0, f(a, "mousemove"));
    }, b._touchEnd = function (a) {
      e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1);
    }, b._mouseInit = function () {
      var b = this;
      b.element.bind({
        touchstart: a.proxy(b, "_touchStart"),
        touchmove: a.proxy(b, "_touchMove"),
        touchend: a.proxy(b, "_touchEnd")
      }), c.call(b);
    }, b._mouseDestroy = function () {
      var b = this;
      b.element.unbind({
        touchstart: a.proxy(b, "_touchStart"),
        touchmove: a.proxy(b, "_touchMove"),
        touchend: a.proxy(b, "_touchEnd")
      }), d.call(b);
    };
  }
}(jQuery);
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */

!function (l, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (l) {
  "use strict";

  function e(e) {
    if (t.webkit && !e) return {
      height: 0,
      width: 0
    };

    if (!t.data.outer) {
      var o = {
        border: "none",
        "box-sizing": "content-box",
        height: "200px",
        margin: "0",
        padding: "0",
        width: "200px"
      };
      t.data.inner = l("<div>").css(l.extend({}, o)), t.data.outer = l("<div>").css(l.extend({
        left: "-1000px",
        overflow: "scroll",
        position: "absolute",
        top: "-1000px"
      }, o)).append(t.data.inner).appendTo("body");
    }

    return t.data.outer.scrollLeft(1e3).scrollTop(1e3), {
      height: Math.ceil(t.data.outer.offset().top - t.data.inner.offset().top || 0),
      width: Math.ceil(t.data.outer.offset().left - t.data.inner.offset().left || 0)
    };
  }

  function o() {
    var l = e(!0);
    return !(l.height || l.width);
  }

  function s(l) {
    var e = l.originalEvent;
    return e.axis && e.axis === e.HORIZONTAL_AXIS ? !1 : e.wheelDeltaX ? !1 : !0;
  }

  var r = !1,
      t = {
    data: {
      index: 0,
      name: "scrollbar"
    },
    macosx: /mac/i.test(navigator.platform),
    mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
    overlay: null,
    scroll: null,
    scrolls: [],
    webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
  };
  t.scrolls.add = function (l) {
    this.remove(l).push(l);
  }, t.scrolls.remove = function (e) {
    for (; l.inArray(e, this) >= 0;) {
      this.splice(l.inArray(e, this), 1);
    }

    return this;
  };

  var i = {
    autoScrollSize: !0,
    autoUpdate: !0,
    debug: !1,
    disableBodyScroll: !1,
    duration: 200,
    ignoreMobile: !1,
    ignoreOverlay: !1,
    scrollStep: 30,
    showArrows: !1,
    stepScrolling: !0,
    scrollx: null,
    scrolly: null,
    onDestroy: null,
    onInit: null,
    onScroll: null,
    onUpdate: null
  },
      n = function n(s) {
    t.scroll || (t.overlay = o(), t.scroll = e(), a(), l(window).resize(function () {
      var l = !1;

      if (t.scroll && (t.scroll.height || t.scroll.width)) {
        var o = e();
        (o.height !== t.scroll.height || o.width !== t.scroll.width) && (t.scroll = o, l = !0);
      }

      a(l);
    })), this.container = s, this.namespace = ".scrollbar_" + t.data.index++, this.options = l.extend({}, i, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, s.data(t.data.name, this), t.scrolls.add(this);
  };

  n.prototype = {
    destroy: function destroy() {
      if (this.wrapper) {
        this.container.removeData(t.data.name), t.scrolls.remove(this);
        var e = this.container.scrollLeft(),
            o = this.container.scrollTop();
        this.container.insertBefore(this.wrapper).css({
          height: "",
          margin: "",
          "max-height": ""
        }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), l(document).add("body").off(this.namespace), l.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container]);
      }
    },
    init: function init(e) {
      var o = this,
          r = this.container,
          i = this.containerWrapper || r,
          n = this.namespace,
          c = l.extend(this.options, e || {}),
          a = {
        x: this.scrollx,
        y: this.scrolly
      },
          d = this.wrapper,
          h = {
        scrollLeft: r.scrollLeft(),
        scrollTop: r.scrollTop()
      };
      if (t.mobile && c.ignoreMobile || t.overlay && c.ignoreOverlay || t.macosx && !t.webkit) return !1;
      if (d) i.css({
        height: "auto",
        "margin-bottom": -1 * t.scroll.height + "px",
        "margin-right": -1 * t.scroll.width + "px",
        "max-height": ""
      });else {
        if (this.wrapper = d = l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position", "absolute" == r.css("position") ? "absolute" : "relative").insertBefore(r).append(r), r.is("textarea") && (this.containerWrapper = i = l("<div>").insertBefore(r).append(r), d.addClass("scroll-textarea")), i.addClass("scroll-content").css({
          height: "auto",
          "margin-bottom": -1 * t.scroll.height + "px",
          "margin-right": -1 * t.scroll.width + "px",
          "max-height": ""
        }), r.on("scroll" + n, function (e) {
          l.isFunction(c.onScroll) && c.onScroll.call(o, {
            maxScroll: a.y.maxScrollOffset,
            scroll: r.scrollTop(),
            size: a.y.size,
            visible: a.y.visible
          }, {
            maxScroll: a.x.maxScrollOffset,
            scroll: r.scrollLeft(),
            size: a.x.size,
            visible: a.x.visible
          }), a.x.isVisible && a.x.scroll.bar.css("left", r.scrollLeft() * a.x.kx + "px"), a.y.isVisible && a.y.scroll.bar.css("top", r.scrollTop() * a.y.kx + "px");
        }), d.on("scroll" + n, function () {
          d.scrollTop(0).scrollLeft(0);
        }), c.disableBodyScroll) {
          var p = function p(l) {
            s(l) ? a.y.isVisible && a.y.mousewheel(l) : a.x.isVisible && a.x.mousewheel(l);
          };

          d.on("MozMousePixelScroll" + n, p), d.on("mousewheel" + n, p), t.mobile && d.on("touchstart" + n, function (e) {
            var o = e.originalEvent.touches && e.originalEvent.touches[0] || e,
                s = {
              pageX: o.pageX,
              pageY: o.pageY
            },
                t = {
              left: r.scrollLeft(),
              top: r.scrollTop()
            };
            l(document).on("touchmove" + n, function (l) {
              var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l;
              r.scrollLeft(t.left + s.pageX - e.pageX), r.scrollTop(t.top + s.pageY - e.pageY), l.preventDefault();
            }), l(document).on("touchend" + n, function () {
              l(document).off(n);
            });
          });
        }

        l.isFunction(c.onInit) && c.onInit.apply(this, [r]);
      }
      l.each(a, function (e, t) {
        var i = null,
            d = 1,
            h = "x" === e ? "scrollLeft" : "scrollTop",
            p = c.scrollStep,
            u = function u() {
          var l = r[h]();
          r[h](l + p), 1 == d && l + p >= f && (l = r[h]()), -1 == d && f >= l + p && (l = r[h]()), r[h]() == l && i && i();
        },
            f = 0;

        t.scroll || (t.scroll = o._getScroll(c["scroll" + e]).addClass("scroll-" + e), c.showArrows && t.scroll.addClass("scroll-element_arrows_visible"), t.mousewheel = function (l) {
          if (!t.isVisible || "x" === e && s(l)) return !0;
          if ("y" === e && !s(l)) return a.x.mousewheel(l), !0;
          var i = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
              n = t.size - t.visible - t.offset;
          return (i > 0 && n > f || 0 > i && f > 0) && (f += i, 0 > f && (f = 0), f > n && (f = n), o.scrollTo = o.scrollTo || {}, o.scrollTo[h] = f, setTimeout(function () {
            o.scrollTo && (r.stop().animate(o.scrollTo, 240, "linear", function () {
              f = r[h]();
            }), o.scrollTo = null);
          }, 1)), l.preventDefault(), !1;
        }, t.scroll.on("MozMousePixelScroll" + n, t.mousewheel).on("mousewheel" + n, t.mousewheel).on("mouseenter" + n, function () {
          f = r[h]();
        }), t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + n, function (s) {
          if (1 != s.which) return !0;
          d = 1;
          var n = {
            eventOffset: s["x" === e ? "pageX" : "pageY"],
            maxScrollValue: t.size - t.visible - t.offset,
            scrollbarOffset: t.scroll.bar.offset()["x" === e ? "left" : "top"],
            scrollbarSize: t.scroll.bar["x" === e ? "outerWidth" : "outerHeight"]()
          },
              a = 0,
              v = 0;
          return l(this).hasClass("scroll-arrow") ? (d = l(this).hasClass("scroll-arrow_more") ? 1 : -1, p = c.scrollStep * d, f = d > 0 ? n.maxScrollValue : 0) : (d = n.eventOffset > n.scrollbarOffset + n.scrollbarSize ? 1 : n.eventOffset < n.scrollbarOffset ? -1 : 0, p = Math.round(.75 * t.visible) * d, f = n.eventOffset - n.scrollbarOffset - (c.stepScrolling ? 1 == d ? n.scrollbarSize : 0 : Math.round(n.scrollbarSize / 2)), f = r[h]() + f / t.kx), o.scrollTo = o.scrollTo || {}, o.scrollTo[h] = c.stepScrolling ? r[h]() + p : f, c.stepScrolling && (i = function i() {
            f = r[h](), clearInterval(v), clearTimeout(a), a = 0, v = 0;
          }, a = setTimeout(function () {
            v = setInterval(u, 40);
          }, c.duration + 100)), setTimeout(function () {
            o.scrollTo && (r.animate(o.scrollTo, c.duration), o.scrollTo = null);
          }, 1), o._handleMouseDown(i, s);
        }), t.scroll.bar.on("mousedown" + n, function (s) {
          if (1 != s.which) return !0;
          var i = s["x" === e ? "pageX" : "pageY"],
              c = r[h]();
          return t.scroll.addClass("scroll-draggable"), l(document).on("mousemove" + n, function (l) {
            var o = parseInt((l["x" === e ? "pageX" : "pageY"] - i) / t.kx, 10);
            r[h](c + o);
          }), o._handleMouseDown(function () {
            t.scroll.removeClass("scroll-draggable"), f = r[h]();
          }, s);
        }));
      }), l.each(a, function (l, e) {
        var o = "scroll-scroll" + l + "_visible",
            s = "x" == l ? a.y : a.x;
        e.scroll.removeClass(o), s.scroll.removeClass(o), i.removeClass(o);
      }), l.each(a, function (e, o) {
        l.extend(o, "x" == e ? {
          offset: parseInt(r.css("left"), 10) || 0,
          size: r.prop("scrollWidth"),
          visible: d.width()
        } : {
          offset: parseInt(r.css("top"), 10) || 0,
          size: r.prop("scrollHeight"),
          visible: d.height()
        });
      }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), l.isFunction(c.onUpdate) && c.onUpdate.apply(this, [r]), l.each(a, function (l, e) {
        var o = "x" === l ? "left" : "top",
            s = "x" === l ? "outerWidth" : "outerHeight",
            t = "x" === l ? "width" : "height",
            i = parseInt(r.css(o), 10) || 0,
            n = e.size,
            a = e.visible + i,
            d = e.scroll.size[s]() + (parseInt(e.scroll.size.css(o), 10) || 0);
        c.autoScrollSize && (e.scrollbarSize = parseInt(d * a / n, 10), e.scroll.bar.css(t, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[s](), e.kx = (d - e.scrollbarSize) / (n - a) || 1, e.maxScrollOffset = n - a;
      }), r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll");
    },
    _getScroll: function _getScroll(e) {
      var o = {
        advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
        simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
      };
      return o[e] && (e = o[e]), e || (e = o.simple), e = "string" == typeof e ? l(e).appendTo(this.wrapper) : l(e), l.extend(e, {
        bar: e.find(".scroll-bar"),
        size: e.find(".scroll-element_size"),
        track: e.find(".scroll-element_track")
      }), e;
    },
    _handleMouseDown: function _handleMouseDown(e, o) {
      var s = this.namespace;
      return l(document).on("blur" + s, function () {
        l(document).add("body").off(s), e && e();
      }), l(document).on("dragstart" + s, function (l) {
        return l.preventDefault(), !1;
      }), l(document).on("mouseup" + s, function () {
        l(document).add("body").off(s), e && e();
      }), l("body").on("selectstart" + s, function (l) {
        return l.preventDefault(), !1;
      }), o && o.preventDefault(), !1;
    },
    _updateScroll: function _updateScroll(e, o) {
      var s = this.container,
          r = this.containerWrapper || s,
          i = "scroll-scroll" + e + "_visible",
          n = "x" === e ? this.scrolly : this.scrollx,
          c = parseInt(this.container.css("x" === e ? "left" : "top"), 10) || 0,
          a = this.wrapper,
          d = o.size,
          h = o.visible + c;
      o.isVisible = d - h > 1, o.isVisible ? (o.scroll.addClass(i), n.scroll.addClass(i), r.addClass(i)) : (o.scroll.removeClass(i), n.scroll.removeClass(i), r.removeClass(i)), "y" === e && (s.is("textarea") || h > d ? r.css({
        height: h + t.scroll.height + "px",
        "max-height": "none"
      }) : r.css({
        "max-height": h + t.scroll.height + "px"
      })), (o.size != s.prop("scrollWidth") || n.size != s.prop("scrollHeight") || o.visible != a.width() || n.visible != a.height() || o.offset != (parseInt(s.css("left"), 10) || 0) || n.offset != (parseInt(s.css("top"), 10) || 0)) && (l.extend(this.scrollx, {
        offset: parseInt(s.css("left"), 10) || 0,
        size: s.prop("scrollWidth"),
        visible: a.width()
      }), l.extend(this.scrolly, {
        offset: parseInt(s.css("top"), 10) || 0,
        size: this.container.prop("scrollHeight"),
        visible: a.height()
      }), this._updateScroll("x" === e ? "y" : "x", n));
    }
  };
  var c = n;
  l.fn.scrollbar = function (e, o) {
    return "string" != typeof e && (o = e, e = "init"), "undefined" == typeof o && (o = []), l.isArray(o) || (o = [o]), this.not("body, .scroll-wrapper").each(function () {
      var s = l(this),
          r = s.data(t.data.name);
      (r || "init" === e) && (r || (r = new c(s)), r[e] && r[e].apply(r, o));
    }), this;
  }, l.fn.scrollbar.options = i;

  var a = function () {
    var l = 0,
        e = 0;
    return function (o) {
      var s, i, n, c, d, h, p;

      for (s = 0; s < t.scrolls.length; s++) {
        c = t.scrolls[s], i = c.container, n = c.options, d = c.wrapper, h = c.scrollx, p = c.scrolly, (o || n.autoUpdate && d && d.is(":visible") && (i.prop("scrollWidth") != h.size || i.prop("scrollHeight") != p.size || d.width() != h.visible || d.height() != p.visible)) && (c.init(), n.debug && (window.console && console.log({
          scrollHeight: i.prop("scrollHeight") + ":" + c.scrolly.size,
          scrollWidth: i.prop("scrollWidth") + ":" + c.scrollx.size,
          visibleHeight: d.height() + ":" + c.scrolly.visible,
          visibleWidth: d.width() + ":" + c.scrollx.visible
        }, !0), e++));
      }

      r && e > 10 ? (window.console && console.log("Scroll updates exceed 10"), a = function a() {}) : (clearTimeout(l), l = setTimeout(a, 300));
    };
  }();

  window.angular && !function (l) {
    l.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
      var e = i;
      return {
        setOptions: function setOptions(o) {
          l.extend(e, o);
        },
        $get: function $get() {
          return {
            options: l.copy(e)
          };
        }
      };
    }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (l, e) {
      return {
        restrict: "AC",
        link: function link(o, s, r) {
          var t = e(r.jqueryScrollbar),
              i = t(o);
          s.scrollbar(i || l.options).on("$destroy", function () {
            s.scrollbar("destroy");
          });
        }
      };
    }]);
  }(window.angular);
});
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */

!function (t) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object") module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function t(e, i, n) {
    function a(r, s) {
      if (!i[r]) {
        if (!e[r]) {
          var l = undefined;
          if (!s && l) return require(r, !0);
          if (o) return o(r, !0);
          var u = new Error("Cannot find module '" + r + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var d = i[r] = {
          exports: {}
        };
        e[r][0].call(d.exports, function (t) {
          var i = e[r][1][t];
          return a(i || t);
        }, d, d.exports, t, e, i, n);
      }

      return i[r].exports;
    }

    for (var o = undefined, r = 0; r < n.length; r++) {
      a(n[r]);
    }

    return a;
  }({
    1: [function (t, e, i) {}, {}],
    2: [function (t, e, i) {
      var n = t(6);

      function a(t) {
        if (t) {
          var e = [0, 0, 0],
              i = 1,
              a = t.match(/^#([a-fA-F0-9]{3})$/i);

          if (a) {
            a = a[1];

            for (var o = 0; o < e.length; o++) {
              e[o] = parseInt(a[o] + a[o], 16);
            }
          } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
            a = a[1];

            for (o = 0; o < e.length; o++) {
              e[o] = parseInt(a.slice(2 * o, 2 * o + 2), 16);
            }
          } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (o = 0; o < e.length; o++) {
              e[o] = parseInt(a[o + 1]);
            }

            i = parseFloat(a[4]);
          } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (o = 0; o < e.length; o++) {
              e[o] = Math.round(2.55 * parseFloat(a[o + 1]));
            }

            i = parseFloat(a[4]);
          } else if (a = t.match(/(\w+)/)) {
            if ("transparent" == a[1]) return [0, 0, 0, 0];
            if (!(e = n[a[1]])) return;
          }

          for (o = 0; o < e.length; o++) {
            e[o] = d(e[o], 0, 255);
          }

          return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e;
        }
      }

      function o(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var i = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }

      function r(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var i = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }

      function u(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function d(t, e, i) {
        return Math.min(Math.max(e, t), i);
      }

      function c(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      e.exports = {
        getRgba: a,
        getHsla: o,
        getRgb: function getRgb(t) {
          var e = a(t);
          return e && e.slice(0, 3);
        },
        getHsl: function getHsl(t) {
          var e = o(t);
          return e && e.slice(0, 3);
        },
        getHwb: r,
        getAlpha: function getAlpha(t) {
          var e = a(t);
          {
            if (e) return e[3];
            if (e = o(t)) return e[3];
            if (e = r(t)) return e[3];
          }
        },
        hexString: function hexString(t) {
          return "#" + c(t[0]) + c(t[1]) + c(t[2]);
        },
        rgbString: function rgbString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return s(t, e);
          return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: s,
        percentString: function percentString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return l(t, e);
          var i = Math.round(t[0] / 255 * 100),
              n = Math.round(t[1] / 255 * 100),
              a = Math.round(t[2] / 255 * 100);
          return "rgb(" + i + "%, " + n + "%, " + a + "%)";
        },
        percentaString: l,
        hslString: function hslString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return u(t, e);
          return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: u,
        hwbString: function hwbString(t, e) {
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
          return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function keyword(t) {
          return h[t.slice(0, 3)];
        }
      };
      var h = {};

      for (var f in n) {
        h[n[f]] = f;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, i) {
      var n = t(5),
          a = t(2),
          o = function o(t) {
        return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        }, void ("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t);
        var e;
      };

      o.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return a.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
            var n = t[i] / 255;
            e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              i = t.luminosity();
          return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              i = (e[0] + t) % 360;
          return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var i = this,
              n = t,
              a = void 0 === e ? .5 : e,
              o = 2 * a - 1,
              r = i.alpha() - n.alpha(),
              s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              l = 1 - s;
          return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              i = new o(),
              n = this.values,
              a = i.values;

          for (var r in n) {
            n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
          }

          return i;
        }
      }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, o.prototype.getValues = function (t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) {
          i[t.charAt(n)] = e[t][n];
        }

        return 1 !== e.alpha && (i.a = e.alpha), i;
      }, o.prototype.setValues = function (t, e) {
        var i,
            a,
            o = this.values,
            r = this.spaces,
            s = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (i = 0; i < t.length; i++) {
            o[t][i] = e[t.charAt(i)];
          }

          l = e.a;
        } else if (void 0 !== e[r[t][0]]) {
          var u = r[t];

          for (i = 0; i < t.length; i++) {
            o[t][i] = e[u[i]];
          }

          l = e.alpha;
        }
        if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;

        for (i = 0; i < t.length; i++) {
          a = Math.max(0, Math.min(s[t][i], o[t][i])), o[t][i] = Math.round(a);
        }

        for (var d in r) {
          d !== t && (o[d] = n[t][d](o[t]));
        }

        return !0;
      }, o.prototype.setSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
      }, o.prototype.setChannel = function (t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, i) {
      function n(t) {
        var e,
            i,
            n = t[0] / 255,
            a = t[1] / 255,
            o = t[2] / 255,
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
        return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i];
      }

      function a(t) {
        var e,
            i,
            n = t[0],
            a = t[1],
            o = t[2],
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
      }

      function o(t) {
        var e = t[0],
            i = t[1],
            a = t[2];
        return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))];
      }

      function s(t) {
        var e,
            i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
      }

      function l(t) {
        return C[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
      }

      function d(t) {
        var e = u(t),
            i = e[0],
            n = e[1],
            a = e[2];
        return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
      }

      function c(t) {
        var e,
            i,
            n,
            a,
            o,
            r = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [o = 255 * l, o, o];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

        for (var u = 0; u < 3; u++) {
          (n = r + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
        }

        return a;
      }

      function h(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * n * (1 - i),
            s = 255 * n * (1 - i * o),
            l = 255 * n * (1 - i * (1 - o));
        n *= 255;

        switch (a) {
          case 0:
            return [n, l, r];

          case 1:
            return [s, n, r];

          case 2:
            return [r, n, l];

          case 3:
            return [r, s, n];

          case 4:
            return [l, r, n];

          case 5:
            return [n, r, s];
        }
      }

      function f(t) {
        var e,
            i,
            n,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;

        switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
          default:
          case 6:
          case 0:
            r = i, g = a, b = s;
            break;

          case 1:
            r = a, g = i, b = s;
            break;

          case 2:
            r = s, g = i, b = a;
            break;

          case 3:
            r = s, g = a, b = i;
            break;

          case 4:
            r = a, g = s, b = i;
            break;

          case 5:
            r = i, g = s, b = a;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function p(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
      }

      function m(t) {
        var e,
            i,
            n,
            a = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
        return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
      }

      function v(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
      }

      function x(t) {
        var e,
            i,
            n,
            a,
            o = t[0],
            r = t[1],
            s = t[2];
        return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
      }

      function y(t) {
        var e,
            i = t[0],
            n = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
      }

      function k(t) {
        return m(x(t));
      }

      function M(t) {
        var e,
            i = t[0],
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
      }

      function w(t) {
        return S[t];
      }

      e.exports = {
        rgb2hsl: n,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: u,
        rgb2lab: d,
        rgb2lch: function rgb2lch(t) {
          return y(d(t));
        },
        hsl2rgb: c,
        hsl2hsv: function hsl2hsv(t) {
          var e = t[0],
              i = t[1] / 100,
              n = t[2] / 100;
          if (0 === n) return [0, 0, 0];
          return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
        },
        hsl2hwb: function hsl2hwb(t) {
          return o(c(t));
        },
        hsl2cmyk: function hsl2cmyk(t) {
          return s(c(t));
        },
        hsl2keyword: function hsl2keyword(t) {
          return l(c(t));
        },
        hsv2rgb: h,
        hsv2hsl: function hsv2hsl(t) {
          var e,
              i,
              n = t[0],
              a = t[1] / 100,
              o = t[2] / 100;
          return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
        },
        hsv2hwb: function hsv2hwb(t) {
          return o(h(t));
        },
        hsv2cmyk: function hsv2cmyk(t) {
          return s(h(t));
        },
        hsv2keyword: function hsv2keyword(t) {
          return l(h(t));
        },
        hwb2rgb: f,
        hwb2hsl: function hwb2hsl(t) {
          return n(f(t));
        },
        hwb2hsv: function hwb2hsv(t) {
          return a(f(t));
        },
        hwb2cmyk: function hwb2cmyk(t) {
          return s(f(t));
        },
        hwb2keyword: function hwb2keyword(t) {
          return l(f(t));
        },
        cmyk2rgb: p,
        cmyk2hsl: function cmyk2hsl(t) {
          return n(p(t));
        },
        cmyk2hsv: function cmyk2hsv(t) {
          return a(p(t));
        },
        cmyk2hwb: function cmyk2hwb(t) {
          return o(p(t));
        },
        cmyk2keyword: function cmyk2keyword(t) {
          return l(p(t));
        },
        keyword2rgb: w,
        keyword2hsl: function keyword2hsl(t) {
          return n(w(t));
        },
        keyword2hsv: function keyword2hsv(t) {
          return a(w(t));
        },
        keyword2hwb: function keyword2hwb(t) {
          return o(w(t));
        },
        keyword2cmyk: function keyword2cmyk(t) {
          return s(w(t));
        },
        keyword2lab: function keyword2lab(t) {
          return d(w(t));
        },
        keyword2xyz: function keyword2xyz(t) {
          return u(w(t));
        },
        xyz2rgb: m,
        xyz2lab: v,
        xyz2lch: function xyz2lch(t) {
          return y(v(t));
        },
        lab2xyz: x,
        lab2rgb: k,
        lab2lch: y,
        lch2lab: M,
        lch2xyz: function lch2xyz(t) {
          return x(M(t));
        },
        lch2rgb: function lch2rgb(t) {
          return k(M(t));
        }
      };
      var S = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          C = {};

      for (var _ in S) {
        C[JSON.stringify(S[_])] = _;
      }
    }, {}],
    5: [function (t, e, i) {
      var n = t(4),
          a = function a() {
        return new u();
      };

      for (var o in n) {
        a[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e);
          };
        }(o);

        var r = /(\w+)2(\w+)/.exec(o),
            s = r[1],
            l = r[2];

        (a[s] = a[s] || {})[l] = a[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var i = n[t](e);
            if ("string" == typeof i || void 0 === i) return i;

            for (var a = 0; a < i.length; a++) {
              i[a] = Math.round(i[a]);
            }

            return i;
          };
        }(o);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var i = this.space,
              n = this.convs[i];
          e = a[i][t](n), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, {
      4: 4
    }],
    6: [function (t, e, i) {
      "use strict";

      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, i) {
      var n = t(29)();
      n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
      var a = t(49);

      for (var o in a) {
        a.hasOwnProperty(o) && n.plugins.register(a[o]);
      }

      n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      58: 58,
      8: 8,
      9: 9
    }],
    8: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, i) {
          return i.type = "bar", new t(e, i);
        };
      };
    }, {}],
    9: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, i) {
          return i.type = "bubble", new t(e, i);
        };
      };
    }, {}],
    10: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, i) {
          return i.type = "doughnut", new t(e, i);
        };
      };
    }, {}],
    11: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, i) {
          return i.type = "line", new t(e, i);
        };
      };
    }, {}],
    12: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, i) {
          return i.type = "polarArea", new t(e, i);
        };
      };
    }, {}],
    13: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, i) {
          return i.type = "radar", new t(e, i);
        };
      };
    }, {}],
    14: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Scatter = function (e, i) {
          return i.type = "scatter", new t(e, i);
        };
      };
    }, {}],
    15: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), n._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function title(t, e) {
              var i = "";
              return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i;
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({
          dataElementType: a.Rectangle,
          initialize: function initialize() {
            var e;
            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                i,
                n = this.getMeta().data;

            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) {
              this.updateElement(n[e], e, t);
            }
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                r = n.getMeta(),
                s = n.getDataset(),
                l = t.custom || {},
                u = a.options.elements.rectangle;
            t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
              datasetLabel: s.label,
              label: a.data.labels[e],
              borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
              backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
              borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
              borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
            }, n.updateElementGeometry(t, e, i), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, i) {
            var n = this,
                a = t._model,
                o = n.getValueScale(),
                r = o.getBasePixel(),
                s = o.isHorizontal(),
                l = n._ruler || n.getRuler(),
                u = n.calculateBarValuePixels(n.index, e),
                d = n.calculateBarIndexPixels(n.index, e, l);
            a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          _getStacks: function _getStacks(t) {
            var e,
                i,
                n = this.chart,
                a = this.getIndexScale().options.stacked,
                o = void 0 === t ? n.data.datasets.length : t + 1,
                r = [];

            for (e = 0; e < o; ++e) {
              (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
            }

            return r;
          },
          getStackCount: function getStackCount() {
            return this._getStacks().length;
          },
          getStackIndex: function getStackIndex(t, e) {
            var i = this._getStacks(t),
                n = void 0 !== e ? i.indexOf(e) : -1;

            return -1 === n ? i.length - 1 : n;
          },
          getRuler: function getRuler() {
            var t,
                e,
                i = this.getIndexScale(),
                n = this.getStackCount(),
                a = this.index,
                r = i.isHorizontal(),
                s = r ? i.left : i.top,
                l = s + (r ? i.width : i.height),
                u = [];

            for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
              u.push(i.getPixelForValue(null, t, a));
            }

            return {
              min: o.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                var i,
                    n,
                    a,
                    o,
                    r = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();

                for (a = 1, o = e.length; a < o; ++a) {
                  r = Math.min(r, e[a] - e[a - 1]);
                }

                for (a = 0, o = s.length; a < o; ++a) {
                  n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;
                }

                return r;
              }(i, u) : -1,
              pixels: u,
              start: s,
              end: l,
              stackCount: n,
              scale: i
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var i,
                n,
                a,
                o,
                r,
                s,
                l = this.chart,
                u = this.getMeta(),
                d = this.getValueScale(),
                c = l.data.datasets,
                h = d.getRightValue(c[t].data[e]),
                f = d.options.stacked,
                g = u.stack,
                p = 0;
            if (f || void 0 === f && void 0 !== g) for (i = 0; i < t; ++i) {
              (n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (p += a));
            }
            return o = d.getPixelForValue(p), {
              size: s = ((r = d.getPixelForValue(p + h)) - o) / 2,
              base: o,
              head: r,
              center: r + s / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, i) {
            var n,
                a,
                r,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                g,
                p,
                m,
                v,
                b,
                x,
                y,
                k = i.scale.options,
                M = "flex" === k.barThickness ? (h = e, g = k, m = (f = i).pixels, v = m[h], b = h > 0 ? m[h - 1] : null, x = h < m.length - 1 ? m[h + 1] : null, y = g.categoryPercentage, null === b && (b = v - (null === x ? f.end - v : x - v)), null === x && (x = v + v - b), p = v - (v - b) / 2 * y, {
              chunk: (x - b) / 2 * y / f.stackCount,
              ratio: g.barPercentage,
              start: p
            }) : (n = e, a = i, u = (r = k).barThickness, d = a.stackCount, c = a.pixels[n], o.isNullOrUndef(u) ? (s = a.min * r.categoryPercentage, l = r.barPercentage) : (s = u * d, l = 1), {
              chunk: s / d,
              ratio: l,
              start: c - s / 2
            }),
                w = this.getStackIndex(t, this.getMeta().stack),
                S = M.start + M.chunk * w + M.chunk / 2,
                C = Math.min(o.valueOrDefault(k.maxBarThickness, 1 / 0), M.chunk * M.ratio);
            return {
              base: S - C / 2,
              head: S + C / 2,
              center: S,
              size: C
            };
          },
          draw: function draw() {
            var t = this.chart,
                e = this.getValueScale(),
                i = this.getMeta().data,
                n = this.getDataset(),
                a = i.length,
                r = 0;

            for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
              isNaN(e.getRightValue(n.data[r])) || i[r].draw();
            }

            o.canvas.unclipArea(t.ctx);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;
            a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                r = this.chart.options.elements.rectangle;
            a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth);
          }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    16: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];
              return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: a.Point,
          update: function update(t) {
            var e = this,
                i = e.getMeta().data;
            o.each(i, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.getMeta(),
                o = t.custom || {},
                r = n.getScaleForId(a.xAxisID),
                s = n.getScaleForId(a.yAxisID),
                l = n._resolveElementOptions(t, e),
                u = n.getDataset().data[e],
                d = n.index,
                c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
                h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);

            t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              radius: i ? 0 : l.radius,
              skip: o.skip || isNaN(c) || isNaN(h),
              x: c,
              y: h
            }, t.pivot();
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                i = t._options;
            e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor)), e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor)), e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = t._model,
                i = t._options;
            e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius;
          },
          _resolveElementOptions: function _resolveElementOptions(t, e) {
            var i,
                n,
                a,
                r = this.chart,
                s = r.data.datasets[this.index],
                l = t.custom || {},
                u = r.options.elements.point,
                d = o.options.resolve,
                c = s.data[e],
                h = {},
                f = {
              chart: r,
              dataIndex: e,
              dataset: s,
              datasetIndex: this.index
            },
                g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];

            for (i = 0, n = g.length; i < n; ++i) {
              h[a = g[i]] = d([l[a], s[a], u[a]], f, e);
            }

            return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    17: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
              n = i.datasets,
              a = i.labels;
          if (n.length) for (var o = 0; o < n[0].data.length; ++o) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    s = a.data[n],
                    l = s && s.custom || {},
                    u = o.valueAtIndexOrDefault,
                    d = t.options.elements.arc;
                return {
                  text: i,
                  fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth),
                  hidden: isNaN(r.data[n]) || a.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var i,
                n,
                a,
                o = e.index,
                r = this.chart;

            for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
              (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
            }

            r.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var i = e.labels[t.index],
                  n = ": " + e.datasets[t.datasetIndex].data[t.index];
              return o.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
            }
          }
        }
      }), n._set("pie", o.clone(n.doughnut)), n._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: o.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, i = 0; i < t; ++i) {
              this.chart.isDatasetVisible(i) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = i.options,
                r = a.elements.arc,
                s = n.right - n.left - r.borderWidth,
                l = n.bottom - n.top - r.borderWidth,
                u = Math.min(s, l),
                d = {
              x: 0,
              y: 0
            },
                c = e.getMeta(),
                h = a.cutoutPercentage,
                f = a.circumference;

            if (f < 2 * Math.PI) {
              var g = a.rotation % (2 * Math.PI),
                  p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                  m = Math.cos(g),
                  v = Math.sin(g),
                  b = Math.cos(p),
                  x = Math.sin(p),
                  y = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  k = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  M = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  w = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  S = h / 100,
                  C = M ? -1 : Math.min(m * (m < 0 ? 1 : S), b * (b < 0 ? 1 : S)),
                  _ = w ? -1 : Math.min(v * (v < 0 ? 1 : S), x * (x < 0 ? 1 : S)),
                  D = y ? 1 : Math.max(m * (m > 0 ? 1 : S), b * (b > 0 ? 1 : S)),
                  I = k ? 1 : Math.max(v * (v > 0 ? 1 : S), x * (x > 0 ? 1 : S)),
                  P = .5 * (D - C),
                  A = .5 * (I - _);

              u = Math.min(s / P, l / A), d = {
                x: -.5 * (D + C),
                y: -.5 * (I + _)
              };
            }

            i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), o.each(c.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                r = a.chartArea,
                s = a.options,
                l = s.animation,
                u = (r.left + r.right) / 2,
                d = (r.top + r.bottom) / 2,
                c = s.rotation,
                h = s.rotation,
                f = n.getDataset(),
                g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                p = i && l.animateScale ? 0 : n.innerRadius,
                m = i && l.animateScale ? 0 : n.outerRadius,
                v = o.valueAtIndexOrDefault;
            o.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _model: {
                x: u + a.offsetX,
                y: d + a.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: g,
                outerRadius: m,
                innerRadius: p,
                label: v(f.label, e, a.data.labels[e])
              }
            });
            var b = t._model;
            this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                i = this.getMeta(),
                n = 0;
            return o.each(i.data, function (i, a) {
              t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
            }

            return n;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    18: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return o.valueOrDefault(t.showLine, e.showLines);
        }

        t.controllers.line = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          update: function update(t) {
            var i,
                n,
                a,
                r = this,
                s = r.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = r.chart.options,
                c = d.elements.line,
                h = r.getScaleForId(s.yAxisID),
                f = r.getDataset(),
                g = e(f, d);

            for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = {
              spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
              tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
              backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
            }, l.pivot()), i = 0, n = u.length; i < n; ++i) {
              r.updateElement(u[i], i, t);
            }

            for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) {
              u[i].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                a = t.custom || {};
            return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                a = t.custom || {};
            return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                a = t.custom || {};
            return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth) ? i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i;
          },
          updateElement: function updateElement(t, e, i) {
            var n,
                a,
                r = this,
                s = r.getMeta(),
                l = t.custom || {},
                u = r.getDataset(),
                d = r.index,
                c = u.data[e],
                h = r.getScaleForId(s.yAxisID),
                f = r.getScaleForId(s.xAxisID),
                g = r.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
              x: n,
              y: a,
              skip: l.skip || isNaN(n) || isNaN(a),
              radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
              pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: s.dataset._model ? s.dataset._model.tension : 0,
              steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
              hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, i) {
            var n,
                a,
                o,
                r = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                d = 0;

            if (l.options.stacked) {
              for (n = 0; n < i; n++) {
                if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                  var c = Number(l.getRightValue(a.data[e]));
                  c < 0 ? d += c || 0 : u += c || 0;
                }
              }

              var h = Number(l.getRightValue(t));
              return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h);
            }

            return l.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t,
                e,
                i,
                n,
                a = this.getMeta(),
                r = this.chart.chartArea,
                s = a.data || [];

            function l(t, e, i) {
              return Math.max(Math.min(t, i), e);
            }

            if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === a.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s);else for (t = 0, e = s.length; t < e; ++t) {
              i = s[t]._model, n = o.splineCurve(o.previousItem(s, t)._model, i, o.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
            }
            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) {
              (i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom);
            }
          },
          draw: function draw() {
            var t = this.chart,
                i = this.getMeta(),
                n = i.data || [],
                a = t.chartArea,
                r = n.length,
                s = 0;

            for (o.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), o.canvas.unclipArea(t.ctx); s < r; ++s) {
              n[s].draw(a);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;
            a.radius = n.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                r = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    19: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
              n = i.datasets,
              a = i.labels;
          if (n.length) for (var o = 0; o < n[0].data.length; ++o) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    s = a.data[n].custom || {},
                    l = o.valueAtIndexOrDefault,
                    u = t.options.elements.arc;
                return {
                  text: i,
                  fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor),
                  strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor),
                  lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth),
                  hidden: isNaN(r.data[n]) || a.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var i,
                n,
                a,
                o = e.index,
                r = this.chart;

            for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
              (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
            }

            r.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: o.noop,
          update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = e.getMeta(),
                r = i.options,
                s = r.elements.arc,
                l = Math.min(n.right - n.left, n.bottom - n.top);
            i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            for (var n = this, a = n.chart, r = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = n.getMeta(), m = 0; m < e; ++m) {
              isNaN(r.data[m]) || p.data[m].hidden || ++g;
            }

            var v = s.startAngle,
                b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                x = v + c * g,
                y = x + (t.hidden ? 0 : c),
                k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
            o.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: u,
              _model: {
                x: h,
                y: f,
                innerRadius: 0,
                outerRadius: i ? k : b,
                startAngle: i && l.animateRotate ? v : x,
                endAngle: i && l.animateRotate ? v : y,
                label: o.valueAtIndexOrDefault(d, e, d[e])
              }
            }), n.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                i = 0;
            return o.each(e.data, function (e, n) {
              isNaN(t.data[n]) || e.hidden || i++;
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    20: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          linkScales: o.noop,
          update: function update(t) {
            var e = this,
                i = e.getMeta(),
                n = i.dataset,
                a = i.data,
                r = n.custom || {},
                s = e.getDataset(),
                l = e.chart.options.elements.line,
                u = e.chart.scale;
            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(i.dataset, {
              _datasetIndex: e.index,
              _scale: u,
              _children: a,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
              }
            }), i.dataset.pivot(), o.each(a, function (i, n) {
              e.updateElement(i, n, t);
            }, e), e.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = t.custom || {},
                r = n.getDataset(),
                s = n.chart.scale,
                l = n.chart.options.elements.point,
                u = s.getPointPositionForValue(e, r.data[e]);
            void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: s,
              _model: {
                x: i ? s.xCenter : u.x,
                y: i ? s.yCenter : u.y,
                tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
              }
            }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();
            o.each(e.data, function (i, n) {
              var a = i._model,
                  r = o.splineCurve(o.previousItem(e.data, n, !0)._model, a, o.nextItem(e.data, n, !0)._model, a.tension);
              a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model;
            a.radius = i.hoverRadius ? i.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model,
                r = this.chart.options.elements.point;
            a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    21: [function (t, e, i) {
      "use strict";

      t(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, {
      25: 25
    }],
    22: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45);
      n._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: o.noop,
          onComplete: o.noop
        }
      }), e.exports = function (t) {
        t.Animation = a.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, i, n) {
            var a,
                o,
                r = this.animations;

            for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a) {
              if (r[a].chart === t) return void (r[a] = e);
            }

            r.push(e), 1 === r.length && this.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var e = o.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                i = 0;
            t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
            var n = Date.now();
            t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function advance(t) {
            for (var e, i, n = this.animations, a = 0; a < n.length;) {
              i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a;
            }
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function get() {
            return this;
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function get() {
            return this.chart;
          },
          set: function set(t) {
            this.chart = t;
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    23: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(28),
          r = t(30),
          s = t(48),
          l = t(31);

      e.exports = function (t) {
        function e(t) {
          return "top" === t || "bottom" === t;
        }

        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(e, i) {
            var o,
                r,
                l = this;
            (r = (o = (o = i) || {}).data = o.data || {}).datasets = r.datasets || [], r.labels = r.labels || [], o.options = a.configMerge(n.global, n[o.type], o.options || {}), i = o;
            var u = s.acquireContext(e, i),
                d = u && u.canvas,
                c = d && d.height,
                h = d && d.width;
            l.id = a.uid(), l.ctx = u, l.canvas = d, l.config = i, l.width = h, l.height = c, l.aspectRatio = c ? h / c : null, l.options = i.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", {
              get: function get() {
                return l.config.data;
              },
              set: function set(t) {
                l.config.data = t;
              }
            }), u && d ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.canvas.clear(this), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                o = i.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(n)));

            if ((e.width !== r || e.height !== s) && (n.width = e.width = r, n.height = e.height = s, n.style.width = r + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) {
              var u = {
                width: r,
                height: s
              };
              l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), i && (i.id = i.id || "scale");
          },
          buildOrUpdateScales: function buildOrUpdateScales() {
            var i = this,
                n = i.options,
                o = i.scales || {},
                r = [],
                s = Object.keys(o).reduce(function (t, e) {
              return t[e] = !1, t;
            }, {});
            n.scales && (r = r.concat((n.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (n.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), n.scale && r.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(r, function (n) {
              var r = n.options,
                  l = r.id,
                  u = a.valueOrDefault(r.type, n.dtype);
              e(r.position) !== e(n.dposition) && (r.position = n.dposition), s[l] = !0;
              var d = null;
              if (l in o && o[l].type === u) (d = o[l]).options = r, d.ctx = i.ctx, d.chart = i;else {
                var c = t.scaleService.getScaleConstructor(u);
                if (!c) return;
                d = new c({
                  id: l,
                  type: u,
                  options: r,
                  ctx: i.ctx,
                  chart: i
                }), o[d.id] = d;
              }
              d.mergeTicksOptions(), n.isDefault && (i.scale = d);
            }), a.each(s, function (t, e) {
              t || delete o[e];
            }), i.scales = o, t.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                i = [],
                n = [];
            return a.each(e.data.datasets, function (a, o) {
              var r = e.getDatasetMeta(o),
                  s = a.type || e.config.type;
              if (r.type && r.type !== s && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(o), r.controller.linkScales();else {
                var l = t.controllers[r.type];
                if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                r.controller = new l(e, o), n.push(r.controller);
              }
            }, e), n;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, i) {
              t.getDatasetMeta(i).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(e) {
            var i,
                n,
                o = this;

            if (e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            }), n = (i = o).options, a.each(i.scales, function (t) {
              r.removeBox(i, t);
            }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(o), !1 !== l.notify(o, "beforeUpdate")) {
              o.tooltip._data = o.data;
              var s = o.buildOrUpdateControllers();
              a.each(o.data.datasets, function (t, e) {
                o.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(s, function (t) {
                t.reset();
              }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], l.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                duration: e.duration,
                easing: e.easing,
                lazy: e.lazy
              } : o.render(e);
            }
          },
          updateLayout: function updateLayout() {
            !1 !== l.notify(this, "beforeLayout") && (r.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
                this.updateDataset(t);
              }

              l.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var e = this.getDatasetMeta(t),
                i = {
              meta: e,
              index: t
            };
            !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]));
          },
          render: function render(e) {
            var i = this;
            e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            });
            var n = e.duration,
                o = e.lazy;

            if (!1 !== l.notify(i, "beforeRender")) {
              var r = i.options.animation,
                  s = function s(t) {
                l.notify(i, "afterRender"), a.callback(r && r.onComplete, [t], i);
              };

              if (r && (void 0 !== n && 0 !== n || void 0 === n && 0 !== r.duration)) {
                var u = new t.Animation({
                  numSteps: (n || r.duration) / 16.66,
                  easing: e.easing || r.easing,
                  render: function render(t, e) {
                    var i = a.easing.effects[e.easing],
                        n = e.currentStep,
                        o = n / e.numSteps;
                    t.draw(i(o), o, n);
                  },
                  onAnimationProgress: r.onProgress,
                  onAnimationComplete: s
                });
                t.animationService.addAnimation(i, u, n, o);
              } else i.draw(), s(new t.Animation({
                numSteps: 0,
                chart: i
              }));

              return i;
            }
          },
          draw: function draw(t) {
            var e = this;
            e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) {
              this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            }

            this.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var e = this;

            if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
              for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) {
                e.isDatasetVisible(i) && e.drawDataset(i, t);
              }

              l.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, e) {
            var i = this.getDatasetMeta(t),
                n = {
              meta: i,
              index: t,
              easingValue: e
            };
            !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]));
          },
          _drawTooltip: function _drawTooltip(t) {
            var e = this.tooltip,
                i = {
              tooltip: e,
              easingValue: t
            };
            !1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]));
          },
          getElementAtEvent: function getElementAtEvent(t) {
            return o.modes.single(this, t);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            return o.modes.label(this, t, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            return o.modes["x-axis"](this, t, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e, i) {
            var n = o.modes[e];
            return "function" == typeof n ? n(this, t, i) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            return o.modes.dataset(this, t, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i || (i = e._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e]);
          },
          destroy: function destroy() {
            var e,
                i,
                n = this,
                o = n.canvas;

            for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) {
              n.destroyDatasetMeta(e);
            }

            o && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e);
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                i = function i() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (n) {
              s.addEventListener(t, n, i), e[n] = i;
            }), t.options.responsive && (i = function i() {
              t.resize();
            }, s.addEventListener(t, "resize", i), e.resize = i);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, i) {
              s.removeEventListener(t, i, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, i) {
            var n,
                a,
                o,
                r = i ? "setHoverStyle" : "removeHoverStyle";

            for (a = 0, o = t.length; a < o; ++a) {
              (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                i = e.tooltip;

            if (!1 !== l.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var n = e.handleEvent(t);
              i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]);
              var a = e._bufferedRequest;
              return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i.options || {},
                o = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), a.callback(n.onHover || n.hover.onHover, [t["native"], i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t["native"], i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
          }
        }), t.Controller = t;
      };
    }, {
      25: 25,
      28: 28,
      30: 30,
      31: 31,
      45: 45,
      48: 48
    }],
    24: [function (t, e, i) {
      "use strict";

      var n = t(45);

      e.exports = function (t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];

        function i(t, i) {
          var n = t._chartjs;

          if (n) {
            var a = n.listeners,
                o = a.indexOf(i);
            -1 !== o && a.splice(o, 1), a.length > 0 || (e.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, n.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                i = t.getDataset();
            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && i(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this.datasetElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this.dataElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;

            for (t = 0, e = n.length; t < e; ++t) {
              a[t] = a[t] || this.createMetaData(t);
            }

            i.dataset = i.dataset || this.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t,
                a,
                o = this,
                r = o.getDataset(),
                s = r.data || (r.data = []);
            o._data !== s && (o._data && i(o._data, o), a = o, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [a]
              }
            }), e.forEach(function (e) {
              var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  a = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function value() {
                  var e = Array.prototype.slice.call(arguments),
                      o = a.apply(this, e);
                  return n.each(t._chartjs.listeners, function (t) {
                    "function" == typeof t[i] && t[i].apply(t, e);
                  }), o;
                }
              });
            })), o._data = s), o.resyncElements();
          },
          update: n.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) {
              i[a].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;

            for (t.dataset && t.dataset.draw(); n < i; ++n) {
              e[n].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var i = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                o = t.custom || {},
                r = n.valueAtIndexOrDefault,
                s = t._model;
            s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                o = n.valueAtIndexOrDefault,
                r = n.getHoverColor,
                s = t._model;
            s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;
            n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
          },
          insertElements: function insertElements(t, e) {
            for (var i = 0; i < e; ++i) {
              this.addElementAndReset(t + i);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = n.inherits;
      };
    }, {
      45: 45
    }],
    25: [function (t, e, i) {
      "use strict";

      var n = t(45);
      e.exports = {
        _set: function _set(t, e) {
          return n.merge(this[t] || (this[t] = {}), e);
        }
      };
    }, {
      45: 45
    }],
    26: [function (t, e, i) {
      "use strict";

      var n = t(3),
          a = t(45);

      var o = function o(t) {
        a.extend(this, t), this.initialize.apply(this, arguments);
      };

      a.extend(o.prototype, {
        initialize: function initialize() {
          this.hidden = !1;
        },
        pivot: function pivot() {
          var t = this;
          return t._view || (t._view = a.clone(t._model)), t._start = {}, t;
        },
        transition: function transition(t) {
          var e = this,
              i = e._model,
              a = e._start,
              o = e._view;
          return i && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), function (t, e, i, a) {
            var o,
                r,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                g = Object.keys(i);

            for (o = 0, r = g.length; o < r; ++o) {
              if (d = i[s = g[o]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                if (t.hasOwnProperty(s) || (t[s] = l), (c = _typeof(d)) == _typeof(u = t[s])) if ("string" === c) {
                  if ((h = n(u)).valid && (f = n(d)).valid) {
                    e[s] = f.mix(h, a).rgbString();
                    continue;
                  }
                } else if ("number" === c && isFinite(u) && isFinite(d)) {
                  e[s] = u + (d - u) * a;
                  continue;
                }
                e[s] = d;
              }
            }
          }(a, o, i, t), e) : (e._view = i, e._start = null, e);
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return a.isNumber(this._model.x) && a.isNumber(this._model.y);
        }
      }), o.extend = a.inherits, e.exports = o;
    }, {
      3: 3,
      45: 45
    }],
    27: [function (t, e, i) {
      "use strict";

      var n = t(3),
          a = t(25),
          o = t(45);

      e.exports = function (t) {
        function e(t, e, i) {
          var n;
          return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
        }

        function i(t) {
          return null != t && "none" !== t;
        }

        function r(t, n, a) {
          var o = document.defaultView,
              r = t.parentNode,
              s = o.getComputedStyle(t)[n],
              l = o.getComputedStyle(r)[n],
              u = i(s),
              d = i(l),
              c = Number.POSITIVE_INFINITY;
          return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : "none";
        }

        o.configMerge = function () {
          return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, i, n, a) {
              var r = i[e] || {},
                  s = n[e];
              "scales" === e ? i[e] = o.scaleMerge(r, s) : "scale" === e ? i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, i, n, a);
            }
          });
        }, o.scaleMerge = function () {
          return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, i, n, a) {
              if ("xAxes" === e || "yAxes" === e) {
                var r,
                    s,
                    l,
                    u = n[e].length;

                for (i[e] || (i[e] = []), r = 0; r < u; ++r) {
                  l = n[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= i[e].length && i[e].push({}), !i[e][r].type || l.type && l.type !== i[e][r].type ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(i[e][r], l);
                }
              } else o._merger(e, i, n, a);
            }
          });
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
          var i = [];
          return o.each(t, function (t) {
            e(t) && i.push(t);
          }), i;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, i) {
          return t.findIndex(e, i);
        } : function (t, e, i) {
          i = void 0 === i ? t : i;

          for (var n = 0, a = t.length; n < a; ++n) {
            if (e.call(i, t[n], n, t)) return n;
          }

          return -1;
        }, o.findNextWhere = function (t, e, i) {
          o.isNullOrUndef(i) && (i = -1);

          for (var n = i + 1; n < t.length; n++) {
            var a = t[n];
            if (e(a)) return a;
          }
        }, o.findPreviousWhere = function (t, e, i) {
          o.isNullOrUndef(i) && (i = t.length);

          for (var n = i - 1; n >= 0; n--) {
            var a = t[n];
            if (e(a)) return a;
          }
        }, o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, i) {
          return Math.abs(t - e) < i;
        }, o.almostWhole = function (t, e) {
          var i = Math.round(t);
          return i - e < t && i + e > t;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          var e = Math.log(t) * Math.LOG10E,
              i = Math.round(e);
          return t === Math.pow(10, i) ? i : e;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var i = e.x - t.x,
              n = e.y - t.y,
              a = Math.sqrt(i * i + n * n),
              o = Math.atan2(n, i);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: a
          };
        }, o.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, o.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, i, n) {
          var a = t.skip ? e : t,
              o = e,
              r = i.skip ? e : i,
              s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
              l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              u = s / (s + l),
              d = l / (s + l),
              c = n * (u = isNaN(u) ? 0 : u),
              h = n * (d = isNaN(d) ? 0 : d);
          return {
            previous: {
              x: o.x - c * (r.x - a.x),
              y: o.y - c * (r.y - a.y)
            },
            next: {
              x: o.x + h * (r.x - a.x),
              y: o.y + h * (r.y - a.y)
            }
          };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              i,
              n,
              a,
              r,
              s,
              l,
              u,
              d,
              c = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              h = c.length;

          for (e = 0; e < h; ++e) {
            if (!(n = c[e]).model.skip) {
              if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) {
                var f = a.model.x - n.model.x;
                n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0;
              }

              !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
            }
          }

          for (e = 0; e < h - 1; ++e) {
            n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (o.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = r * l * n.deltaK, a.mK = s * l * n.deltaK)));
          }

          for (e = 0; e < h; ++e) {
            (n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
          }
        }, o.nextItem = function (t, e, i) {
          return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, i) {
          return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var i = Math.floor(o.log10(t)),
              n = t / Math.pow(10, i);
          return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
        }, o.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, o.getRelativePosition = function (t, e) {
          var i,
              n,
              a = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              s = r.getBoundingClientRect(),
              l = a.touches;
          l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
          var u = parseFloat(o.getStyle(r, "padding-left")),
              d = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = s.right - s.left - u - c,
              g = s.bottom - s.top - d - h;
          return {
            x: i = Math.round((i - s.left - u) / f * r.width / e.currentDevicePixelRatio),
            y: n = Math.round((n - s.top - d) / g * r.height / e.currentDevicePixelRatio)
          };
        }, o.getConstraintWidth = function (t) {
          return r(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return r(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientWidth;
          var i = parseInt(o.getStyle(e, "padding-left"), 10),
              n = parseInt(o.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - i - n,
              r = o.getConstraintWidth(t);
          return isNaN(r) ? a : Math.min(a, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientHeight;
          var i = parseInt(o.getStyle(e, "padding-top"), 10),
              n = parseInt(o.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - i - n,
              r = o.getConstraintHeight(t);
          return isNaN(r) ? a : Math.min(a, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t, e) {
          var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;

          if (1 !== i) {
            var n = t.canvas,
                a = t.height,
                o = t.width;
            n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px");
          }
        }, o.fontString = function (t, e, i) {
          return e + " " + t + "px " + i;
        }, o.longestText = function (t, e, i, n) {
          var a = (n = n || {}).data = n.data || {},
              r = n.garbageCollect = n.garbageCollect || [];
          n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
          var s = 0;
          o.each(i, function (e) {
            null != e && !0 !== o.isArray(e) ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function (e) {
              null == e || o.isArray(e) || (s = o.measureText(t, a, r, s, e));
            });
          });
          var l = r.length / 2;

          if (l > i.length) {
            for (var u = 0; u < l; u++) {
              delete a[r[u]];
            }

            r.splice(0, l);
          }

          return s;
        }, o.measureText = function (t, e, i, n, a) {
          var o = e[a];
          return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;
          return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.color = n ? function (t) {
          return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      25: 25,
      3: 3,
      45: 45
    }],
    28: [function (t, e, i) {
      "use strict";

      var n = t(45);

      function a(t, e) {
        return t["native"] ? {
          x: t.x,
          y: t.y
        } : n.getRelativePosition(t, e);
      }

      function o(t, e) {
        var i, n, a, o, r;

        for (n = 0, o = t.data.datasets.length; n < o; ++n) {
          if (t.isDatasetVisible(n)) for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
            var s = i.data[a];
            s._view.skip || e(s);
          }
        }
      }

      function r(t, e) {
        var i = [];
        return o(t, function (t) {
          t.inRange(e.x, e.y) && i.push(t);
        }), i;
      }

      function s(t, e, i, n) {
        var a = Number.POSITIVE_INFINITY,
            r = [];
        return o(t, function (t) {
          if (!i || t.inRange(e.x, e.y)) {
            var o = t.getCenterPoint(),
                s = n(e, o);
            s < a ? (r = [t], a = s) : s === a && r.push(t);
          }
        }), r;
      }

      function l(t) {
        var e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");
        return function (t, n) {
          var a = e ? Math.abs(t.x - n.x) : 0,
              o = i ? Math.abs(t.y - n.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
        };
      }

      function u(t, e, i) {
        var n = a(e, t);
        i.axis = i.axis || "x";
        var o = l(i.axis),
            u = i.intersect ? r(t, n) : s(t, n, !1, o),
            d = [];
        return u.length ? (t.data.datasets.forEach(function (e, i) {
          if (t.isDatasetVisible(i)) {
            var n = t.getDatasetMeta(i).data[u[0]._index];

            n && !n._view.skip && d.push(n);
          }
        }), d) : [];
      }

      e.exports = {
        modes: {
          single: function single(t, e) {
            var i = a(e, t),
                n = [];
            return o(t, function (t) {
              if (t.inRange(i.x, i.y)) return n.push(t), n;
            }), n.slice(0, 1);
          },
          label: u,
          index: u,
          dataset: function dataset(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || "xy";
            var o = l(i.axis),
                u = i.intersect ? r(t, n) : s(t, n, !1, o);
            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function xAxis(t, e) {
            return u(t, e, {
              intersect: !1
            });
          },
          point: function point(t, e) {
            return r(t, a(e, t));
          },
          nearest: function nearest(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || "xy";
            var o = l(i.axis),
                r = s(t, n, i.intersect, o);
            return r.length > 1 && r.sort(function (t, e) {
              var i = t.getArea() - e.getArea();
              return 0 === i && (i = t._datasetIndex - e._datasetIndex), i;
            }), r.slice(0, 1);
          },
          x: function x(t, e, i) {
            var n = a(e, t),
                r = [],
                s = !1;
            return o(t, function (t) {
              t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (r = []), r;
          },
          y: function y(t, e, i) {
            var n = a(e, t),
                r = [],
                s = !1;
            return o(t, function (t) {
              t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (r = []), r;
          }
        }
      };
    }, {
      45: 45
    }],
    29: [function (t, e, i) {
      "use strict";

      t(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function () {
        var t = function t(_t, e) {
          return this.construct(_t, e), this;
        };

        return t.Chart = t, t;
      };
    }, {
      25: 25
    }],
    30: [function (t, e, i) {
      "use strict";

      var n = t(45);

      function a(t, e) {
        return n.where(t, function (t) {
          return t.position === e;
        });
      }

      function o(t, e) {
        t.forEach(function (t, e) {
          return t._tmpIndex_ = e, t;
        }), t.sort(function (t, i) {
          var n = e ? i : t,
              a = e ? t : i;
          return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
        }), t.forEach(function (t) {
          delete t._tmpIndex_;
        });
      }

      e.exports = {
        defaults: {},
        addBox: function addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
        },
        removeBox: function removeBox(t, e) {
          var i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure: function configure(t, e, i) {
          for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) {
            n = a[r], i.hasOwnProperty(n) && (e[n] = i[n]);
          }
        },
        update: function update(t, e, i) {
          if (t) {
            var r = t.options.layout || {},
                s = n.options.toPadding(r.padding),
                l = s.left,
                u = s.right,
                d = s.top,
                c = s.bottom,
                h = a(t.boxes, "left"),
                f = a(t.boxes, "right"),
                g = a(t.boxes, "top"),
                p = a(t.boxes, "bottom"),
                m = a(t.boxes, "chartArea");
            o(h, !0), o(f, !1), o(g, !0), o(p, !1);
            var v = e - l - u,
                b = i - d - c,
                x = b / 2,
                y = (e - v / 2) / (h.length + f.length),
                k = (i - x) / (g.length + p.length),
                M = v,
                w = b,
                S = [];
            n.each(h.concat(f, g, p), function (t) {
              var e,
                  i = t.isHorizontal();
              i ? (e = t.update(t.fullWidth ? v : M, k), w -= e.height) : (e = t.update(y, w), M -= e.width), S.push({
                horizontal: i,
                minSize: e,
                box: t
              });
            });
            var C = 0,
                _ = 0,
                D = 0,
                I = 0;
            n.each(g.concat(p), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                C = Math.max(C, e.left), _ = Math.max(_, e.right);
              }
            }), n.each(h.concat(f), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                D = Math.max(D, e.top), I = Math.max(I, e.bottom);
              }
            });
            var P = l,
                A = u,
                T = d,
                F = c;
            n.each(h.concat(f), N), n.each(h, function (t) {
              P += t.width;
            }), n.each(f, function (t) {
              A += t.width;
            }), n.each(g.concat(p), N), n.each(g, function (t) {
              T += t.height;
            }), n.each(p, function (t) {
              F += t.height;
            }), n.each(h.concat(f), function (t) {
              var e = n.findNextWhere(S, function (e) {
                return e.box === t;
              }),
                  i = {
                left: 0,
                right: 0,
                top: T,
                bottom: F
              };
              e && t.update(e.minSize.width, w, i);
            }), P = l, A = u, T = d, F = c, n.each(h, function (t) {
              P += t.width;
            }), n.each(f, function (t) {
              A += t.width;
            }), n.each(g, function (t) {
              T += t.height;
            }), n.each(p, function (t) {
              F += t.height;
            });
            var O = Math.max(C - P, 0);
            P += O, A += Math.max(_ - A, 0);
            var R = Math.max(D - T, 0);
            T += R, F += Math.max(I - F, 0);
            var L = i - T - F,
                z = e - P - A;
            z === M && L === w || (n.each(h, function (t) {
              t.height = L;
            }), n.each(f, function (t) {
              t.height = L;
            }), n.each(g, function (t) {
              t.fullWidth || (t.width = z);
            }), n.each(p, function (t) {
              t.fullWidth || (t.width = z);
            }), w = L, M = z);
            var B = l + O,
                W = d + R;
            n.each(h.concat(g), V), B += M, W += w, n.each(f, V), n.each(p, V), t.chartArea = {
              left: P,
              top: T,
              right: P + M,
              bottom: T + w
            }, n.each(m, function (e) {
              e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(M, w);
            });
          }

          function N(t) {
            var e = n.findNextWhere(S, function (e) {
              return e.box === t;
            });
            if (e) if (t.isHorizontal()) {
              var i = {
                left: Math.max(P, C),
                right: Math.max(A, _),
                top: 0,
                bottom: 0
              };
              t.update(t.fullWidth ? v : M, b / 2, i);
            } else t.update(e.minSize.width, w);
          }

          function V(t) {
            t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? e - u : P + M, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = B, t.right = B + t.width, t.top = T, t.bottom = T + w, B = t.right);
          }
        }
      };
    }, {
      45: 45
    }],
    31: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45);
      n._set("global", {
        plugins: {}
      }), e.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function register(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            -1 === e.indexOf(t) && e.push(t);
          }), this._cacheId++;
        },
        unregister: function unregister(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            var i = e.indexOf(t);
            -1 !== i && e.splice(i, 1);
          }), this._cacheId++;
        },
        clear: function clear() {
          this._plugins = [], this._cacheId++;
        },
        count: function count() {
          return this._plugins.length;
        },
        getAll: function getAll() {
          return this._plugins;
        },
        notify: function notify(t, e, i) {
          var n,
              a,
              o,
              r,
              s,
              l = this.descriptors(t),
              u = l.length;

          for (n = 0; n < u; ++n) {
            if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
          }

          return !0;
        },
        descriptors: function descriptors(t) {
          var e = t.$plugins || (t.$plugins = {});
          if (e.id === this._cacheId) return e.descriptors;
          var i = [],
              o = [],
              r = t && t.config || {},
              s = r.options && r.options.plugins || {};
          return this._plugins.concat(r.plugins || []).forEach(function (t) {
            if (-1 === i.indexOf(t)) {
              var e = t.id,
                  r = s[e];
              !1 !== r && (!0 === r && (r = a.clone(n.global.plugins[e])), i.push(t), o.push({
                plugin: t,
                options: r || {}
              }));
            }
          }), e.descriptors = o, e.id = this._cacheId, o;
        },
        _invalidate: function _invalidate(t) {
          delete t.$plugins;
        }
      };
    }, {
      25: 25,
      45: 45
    }],
    32: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = t(34);

      function s(t) {
        var e,
            i,
            n = [];

        for (e = 0, i = t.length; e < i; ++e) {
          n.push(t[e].label);
        }

        return n;
      }

      function l(t, e, i) {
        var n = t.getPixelForTick(e);
        return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
      }

      n._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: r.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = function (t) {
        function e(t, e, i) {
          return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width;
        }

        function i(t) {
          var e = o.valueOrDefault,
              i = n.global,
              a = e(t.fontSize, i.defaultFontSize),
              r = e(t.fontStyle, i.defaultFontStyle),
              s = e(t.fontFamily, i.defaultFontFamily);
          return {
            size: a,
            style: r,
            family: s,
            font: o.fontString(a, r, s)
          };
        }

        function r(t) {
          return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, n.global.defaultFontSize));
        }

        t.Scale = a.extend({
          getPadding: function getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            };
          },
          getTicks: function getTicks() {
            return this._ticks;
          },
          mergeTicksOptions: function mergeTicksOptions() {
            var t = this.options.ticks;

            for (var e in !1 === t.minor && (t.minor = {
              display: !1
            }), !1 === t.major && (t.major = {
              display: !1
            }), t) {
              "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
            }
          },
          beforeUpdate: function beforeUpdate() {
            o.callback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, e, i) {
            var n,
                a,
                r,
                s,
                l,
                u,
                d = this;

            for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = o.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = r, n = 0, a = r.length; n < a; ++n) {
              s = r[n], (u = l[n]) ? u.label = s : l.push(u = {
                label: s,
                major: !1
              });
            }

            return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
          },
          afterUpdate: function afterUpdate() {
            o.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            o.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            o.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            o.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: o.noop,
          afterDataLimits: function afterDataLimits() {
            o.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            o.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: o.noop,
          afterBuildTicks: function afterBuildTicks() {
            o.callback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            o.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            o.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            o.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks,
                a = s(t._ticks),
                r = i(n);
            e.font = r.font;
            var l = n.minRotation || 0;
            if (a.length && t.options.display && t.isHorizontal()) for (var u, d = o.longestText(e, r.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) {
              var f = o.toRadians(l);

              if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                l--;
                break;
              }

              l++, c = u * d;
            }
            t.labelRotation = l;
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            o.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            o.callback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var t = this,
                n = t.minSize = {
              width: 0,
              height: 0
            },
                a = s(t._ticks),
                l = t.options,
                u = l.ticks,
                d = l.scaleLabel,
                c = l.gridLines,
                h = l.display,
                f = t.isHorizontal(),
                g = i(u),
                p = l.gridLines.tickMarkLength;

            if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, n.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) {
              var m = r(d) + o.options.toPadding(d.padding).height;
              f ? n.height += m : n.width += m;
            }

            if (u.display && h) {
              var v = o.longestText(t.ctx, g.font, a, t.longestTextCache),
                  b = o.numberOfLabelLines(a),
                  x = .5 * g.size,
                  y = t.options.ticks.padding;

              if (f) {
                t.longestLabelWidth = v;
                var k = o.toRadians(t.labelRotation),
                    M = Math.cos(k),
                    w = Math.sin(k) * v + g.size * b + x * (b - 1) + x;
                n.height = Math.min(t.maxHeight, n.height + w + y), t.ctx.font = g.font;
                var S = e(t.ctx, a[0], g.font),
                    C = e(t.ctx, a[a.length - 1], g.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? M * S + 3 : M * x + 3, t.paddingRight = "bottom" === l.position ? M * x + 3 : M * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3);
              } else u.mirror ? v = 0 : v += y + x, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2;
            }

            t.handleMargins(), t.width = n.width, t.height = n.height;
          },
          handleMargins: function handleMargins() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          },
          afterFit: function afterFit() {
            o.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            if (o.isNullOrUndef(t)) return NaN;
            if ("number" == typeof t && !isFinite(t)) return NaN;
            if (t) if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
          },
          getLabelForIndex: o.noop,
          getPixelForValue: o.noop,
          getValueForPixel: o.noop,
          getPixelForTick: function getPixelForTick(t) {
            var e = this,
                i = e.options.offset;

            if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                  a = n * t + e.paddingLeft;
              i && (a += n / 2);
              var o = e.left + Math.round(a);
              return o += e.isFullWidth() ? e.margins.left : 0;
            }

            var r = e.height - (e.paddingTop + e.paddingBottom);
            return e.top + t * (r / (e._ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                  n = e.left + Math.round(i);
              return n += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function getBaseValue() {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          },
          _autoSkip: function _autoSkip(t) {
            var e,
                i,
                n,
                a,
                r = this,
                s = r.isHorizontal(),
                l = r.options.ticks.minor,
                u = t.length,
                d = o.toRadians(r.labelRotation),
                c = Math.cos(d),
                h = r.longestLabelWidth * c,
                f = [];

            for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (r.width - (r.paddingLeft + r.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) {
              n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
            }

            return f;
          },
          draw: function draw(t) {
            var e = this,
                a = e.options;

            if (a.display) {
              var s = e.ctx,
                  u = n.global,
                  d = a.ticks.minor,
                  c = a.ticks.major || d,
                  h = a.gridLines,
                  f = a.scaleLabel,
                  g = 0 !== e.labelRotation,
                  p = e.isHorizontal(),
                  m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                  v = o.valueOrDefault(d.fontColor, u.defaultFontColor),
                  b = i(d),
                  x = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                  y = i(c),
                  k = h.drawTicks ? h.tickMarkLength : 0,
                  M = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                  w = i(f),
                  S = o.options.toPadding(f.padding),
                  C = o.toRadians(e.labelRotation),
                  _ = [],
                  D = e.options.gridLines.lineWidth,
                  I = "right" === a.position ? e.right : e.right - D - k,
                  P = "right" === a.position ? e.right + k : e.right,
                  A = "bottom" === a.position ? e.top + D : e.bottom - k - D,
                  T = "bottom" === a.position ? e.top + D + k : e.bottom + D;

              if (o.each(m, function (i, n) {
                if (!o.isNullOrUndef(i.label)) {
                  var r,
                      s,
                      c,
                      f,
                      v,
                      b,
                      x,
                      y,
                      M,
                      w,
                      S,
                      F,
                      O,
                      R,
                      L = i.label;
                  n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = o.valueAtIndexOrDefault(h.lineWidth, n), s = o.valueAtIndexOrDefault(h.color, n), c = o.valueOrDefault(h.borderDash, u.borderDash), f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                  var z = "middle",
                      B = "middle",
                      W = d.padding;

                  if (p) {
                    var N = k + W;
                    "bottom" === a.position ? (B = g ? "middle" : "top", z = g ? "right" : "center", R = e.top + N) : (B = g ? "middle" : "bottom", z = g ? "left" : "center", R = e.bottom - N);
                    var V = l(e, n, h.offsetGridLines && m.length > 1);
                    V < e.left && (s = "rgba(0,0,0,0)"), V += o.aliasPixel(r), O = e.getPixelForTick(n) + d.labelOffset, v = x = M = S = V, b = A, y = T, w = t.top, F = t.bottom + D;
                  } else {
                    var E,
                        H = "left" === a.position;
                    d.mirror ? (z = H ? "left" : "right", E = W) : (z = H ? "right" : "left", E = k + W), O = H ? e.right - E : e.left + E;
                    var j = l(e, n, h.offsetGridLines && m.length > 1);
                    j < e.top && (s = "rgba(0,0,0,0)"), j += o.aliasPixel(r), R = e.getPixelForTick(n) + d.labelOffset, v = I, x = P, M = t.left, S = t.right + D, b = y = w = F = j;
                  }

                  _.push({
                    tx1: v,
                    ty1: b,
                    tx2: x,
                    ty2: y,
                    x1: M,
                    y1: w,
                    x2: S,
                    y2: F,
                    labelX: O,
                    labelY: R,
                    glWidth: r,
                    glColor: s,
                    glBorderDash: c,
                    glBorderDashOffset: f,
                    rotation: -1 * C,
                    label: L,
                    major: i.major,
                    textBaseline: B,
                    textAlign: z
                  });
                }
              }), o.each(_, function (t) {
                if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                  s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? y.font : b.font, s.fillStyle = t.major ? x : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                  var i = t.label;
                  if (o.isArray(i)) for (var n = i.length, a = 1.5 * b.size, r = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) {
                    s.fillText("" + i[l], 0, r), r += a;
                  } else s.fillText(i, 0, 0);
                  s.restore();
                }
              }), f.display) {
                var F,
                    O,
                    R = 0,
                    L = r(f) / 2;
                if (p) F = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - L - S.bottom : e.top + L + S.top;else {
                  var z = "left" === a.position;
                  F = z ? e.left + L + S.top : e.right - L - S.top, O = e.top + (e.bottom - e.top) / 2, R = z ? -.5 * Math.PI : .5 * Math.PI;
                }
                s.save(), s.translate(F, O), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = M, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore();
              }

              if (h.drawBorder) {
                s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
                var B = e.left,
                    W = e.right + D,
                    N = e.top,
                    V = e.bottom + D,
                    E = o.aliasPixel(s.lineWidth);
                p ? (N = V = "top" === a.position ? e.bottom : e.top, N += E, V += E) : (B = W = "left" === a.position ? e.right : e.left, B += E, W += E), s.beginPath(), s.moveTo(B, N), s.lineTo(W, V), s.stroke();
              }
            }
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    }],
    33: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(30);

      e.exports = function (t) {
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, e, i) {
            this.constructors[t] = e, this.defaults[t] = a.clone(i);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(t) {
            return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
          },
          addScalesToLayout: function addScalesToLayout(t) {
            a.each(t.scales, function (e) {
              e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e);
            });
          }
        };
      };
    }, {
      25: 25,
      30: 30,
      45: 45
    }],
    34: [function (t, e, i) {
      "use strict";

      var n = t(45);
      e.exports = {
        formatters: {
          values: function values(t) {
            return n.isArray(t) ? t : "" + t;
          },
          linear: function linear(t, e, i) {
            var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
            var o = n.log10(Math.abs(a)),
                r = "";

            if (0 !== t) {
              var s = -1 * Math.floor(o);
              s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s);
            } else r = "0";

            return r;
          },
          logarithmic: function logarithmic(t, e, i) {
            var a = t / Math.pow(10, Math.floor(n.log10(t)));
            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : "";
          }
        }
      };
    }, {
      45: 45
    }],
    35: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45);
      n._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: o.noop,
            title: function title(t, e) {
              var i = "",
                  n = e.labels,
                  a = n ? n.length : 0;

              if (t.length > 0) {
                var o = t[0];
                o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index]);
              }

              return i;
            },
            afterTitle: o.noop,
            beforeBody: o.noop,
            beforeLabel: o.noop,
            label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "";
              return i && (i += ": "), i += t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: o.noop,
            afterBody: o.noop,
            beforeFooter: o.noop,
            footer: o.noop,
            afterFooter: o.noop
          }
        }
      }), e.exports = function (t) {
        function e(t, e) {
          var i = o.color(t);
          return i.alpha(e * i.alpha()).rgbaString();
        }

        function i(t, e) {
          return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function r(t) {
          var e = n.global,
              i = o.valueOrDefault;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
          };
        }

        t.Tooltip = a.extend({
          initialize: function initialize() {
            this._model = r(this._options), this._lastActive = [];
          },
          getTitle: function getTitle() {
            var t = this._options.callbacks,
                e = t.beforeTitle.apply(this, arguments),
                n = t.title.apply(this, arguments),
                a = t.afterTitle.apply(this, arguments),
                o = [];
            return o = i(o = i(o = i(o, e), n), a);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return o.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var n = this,
                a = n._options.callbacks,
                r = [];
            return o.each(t, function (t) {
              var o = {
                before: [],
                lines: [],
                after: []
              };
              i(o.before, a.beforeLabel.call(n, t, e)), i(o.lines, a.label.call(n, t, e)), i(o.after, a.afterLabel.call(n, t, e)), r.push(o);
            }), r;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return o.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this._options.callbacks,
                e = t.beforeFooter.apply(this, arguments),
                n = t.footer.apply(this, arguments),
                a = t.afterFooter.apply(this, arguments),
                o = [];
            return o = i(o = i(o = i(o, e), n), a);
          },
          update: function update(e) {
            var i,
                n,
                a,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                g,
                p,
                m,
                v,
                b,
                x,
                y,
                k,
                M,
                w,
                S = this,
                C = S._options,
                _ = S._model,
                D = S._model = r(C),
                I = S._active,
                P = S._data,
                A = {
              xAlign: _.xAlign,
              yAlign: _.yAlign
            },
                T = {
              x: _.x,
              y: _.y
            },
                F = {
              width: _.width,
              height: _.height
            },
                O = {
              x: _.caretX,
              y: _.caretY
            };

            if (I.length) {
              D.opacity = 1;
              var R = [],
                  L = [];
              O = t.Tooltip.positioners[C.position].call(S, I, S._eventPosition);
              var z = [];

              for (i = 0, n = I.length; i < n; ++i) {
                z.push((x = I[i], y = void 0, k = void 0, void 0, void 0, y = x._xScale, k = x._yScale || x._scale, M = x._index, w = x._datasetIndex, {
                  xLabel: y ? y.getLabelForIndex(M, w) : "",
                  yLabel: k ? k.getLabelForIndex(M, w) : "",
                  index: M,
                  datasetIndex: w,
                  x: x._model.x,
                  y: x._model.y
                }));
              }

              C.filter && (z = z.filter(function (t) {
                return C.filter(t, P);
              })), C.itemSort && (z = z.sort(function (t, e) {
                return C.itemSort(t, e, P);
              })), o.each(z, function (t) {
                R.push(C.callbacks.labelColor.call(S, t, S._chart)), L.push(C.callbacks.labelTextColor.call(S, t, S._chart));
              }), D.title = S.getTitle(z, P), D.beforeBody = S.getBeforeBody(z, P), D.body = S.getBody(z, P), D.afterBody = S.getAfterBody(z, P), D.footer = S.getFooter(z, P), D.x = Math.round(O.x), D.y = Math.round(O.y), D.caretPadding = C.caretPadding, D.labelColors = R, D.labelTextColors = L, D.dataPoints = z, A = function (t, e) {
                var i,
                    n,
                    a,
                    o,
                    r,
                    s = t._model,
                    l = t._chart,
                    u = t._chart.chartArea,
                    d = "center",
                    c = "center";
                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                var h = (u.left + u.right) / 2,
                    f = (u.top + u.bottom) / 2;
                "center" === c ? (i = function i(t) {
                  return t <= h;
                }, n = function n(t) {
                  return t > h;
                }) : (i = function i(t) {
                  return t <= e.width / 2;
                }, n = function n(t) {
                  return t >= l.width - e.width / 2;
                }), a = function a(t) {
                  return t + e.width + s.caretSize + s.caretPadding > l.width;
                }, o = function o(t) {
                  return t - e.width - s.caretSize - s.caretPadding < 0;
                }, r = function r(t) {
                  return t <= f ? "top" : "bottom";
                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
                var g = t._options;
                return {
                  xAlign: g.xAlign ? g.xAlign : d,
                  yAlign: g.yAlign ? g.yAlign : c
                };
              }(this, F = function (t, e) {
                var i = t._chart.ctx,
                    n = 2 * e.yPadding,
                    a = 0,
                    r = e.body,
                    s = r.reduce(function (t, e) {
                  return t + e.before.length + e.lines.length + e.after.length;
                }, 0);
                s += e.beforeBody.length + e.afterBody.length;
                var l = e.title.length,
                    u = e.footer.length,
                    d = e.titleFontSize,
                    c = e.bodyFontSize,
                    h = e.footerFontSize;
                n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0;

                var f = 0,
                    g = function g(t) {
                  a = Math.max(a, i.measureText(t).width + f);
                };

                return i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function (t) {
                  o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g);
                }), f = 0, i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), {
                  width: a += 2 * e.xPadding,
                  height: n
                };
              }(this, D)), a = D, s = F, l = A, u = S._chart, d = a.x, c = a.y, h = a.caretSize, f = a.caretPadding, g = a.cornerRadius, p = l.xAlign, m = l.yAlign, v = h + f, b = g + f, "right" === p ? d -= s.width : "center" === p && ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)), "top" === m ? c += v : c -= "bottom" === m ? s.height + v : s.height / 2, "center" === m ? "left" === p ? d += v : "right" === p && (d -= v) : "left" === p ? d -= b : "right" === p && (d += b), T = {
                x: d,
                y: c
              };
            } else D.opacity = 0;

            return D.xAlign = A.xAlign, D.yAlign = A.yAlign, D.x = T.x, D.y = T.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, S._model = D, e && C.custom && C.custom.call(S, D), S;
          },
          drawCaret: function drawCaret(t, e) {
            var i = this._chart.ctx,
                n = this._view,
                a = this.getCaretPosition(t, e, n);
            i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function getCaretPosition(t, e, i) {
            var n,
                a,
                o,
                r,
                s,
                l,
                u = i.caretSize,
                d = i.cornerRadius,
                c = i.xAlign,
                h = i.yAlign,
                f = t.x,
                g = t.y,
                p = e.width,
                m = e.height;
            if ("center" === h) s = g + m / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u);else if ("left" === c ? (n = (a = f + d + u) - u, o = a + u) : "right" === c ? (n = (a = f + p - d - u) - u, o = a + u) : (n = (a = i.caretX) - u, o = a + u), "top" === h) s = (r = g) - u, l = r;else {
              s = (r = g + m) + u, l = r;
              var v = o;
              o = n, n = v;
            }
            return {
              x1: n,
              x2: a,
              x3: o,
              y1: r,
              y2: s,
              y3: l
            };
          },
          drawTitle: function drawTitle(t, i, n, a) {
            var r = i.title;

            if (r.length) {
              n.textAlign = i._titleAlign, n.textBaseline = "top";
              var s,
                  l,
                  u = i.titleFontSize,
                  d = i.titleSpacing;

              for (n.fillStyle = e(i.titleFontColor, a), n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = r.length; s < l; ++s) {
                n.fillText(r[s], t.x, t.y), t.y += u + d, s + 1 === r.length && (t.y += i.titleMarginBottom - d);
              }
            }
          },
          drawBody: function drawBody(t, i, n, a) {
            var r = i.bodyFontSize,
                s = i.bodySpacing,
                l = i.body;
            n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily);

            var u = 0,
                d = function d(e) {
              n.fillText(e, t.x + u, t.y), t.y += r + s;
            };

            n.fillStyle = e(i.bodyFontColor, a), o.each(i.beforeBody, d);
            var c = i.displayColors;
            u = c ? r + 2 : 0, o.each(l, function (s, l) {
              var u = e(i.labelTextColors[l], a);
              n.fillStyle = u, o.each(s.before, d), o.each(s.lines, function (o) {
                c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), d(o);
              }), o.each(s.after, d);
            }), u = 0, o.each(i.afterBody, d), t.y -= s;
          },
          drawFooter: function drawFooter(t, i, n, a) {
            var r = i.footer;
            r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), o.each(r, function (e) {
              n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, i, n, a, o) {
            n.fillStyle = e(i.backgroundColor, o), n.strokeStyle = e(i.borderColor, o), n.lineWidth = i.borderWidth;
            var r = i.xAlign,
                s = i.yAlign,
                l = t.x,
                u = t.y,
                d = a.width,
                c = a.height,
                h = i.cornerRadius;
            n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === r && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === r && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var i = {
                width: e.width,
                height: e.height
              },
                  n = {
                x: e.x,
                y: e.y
              },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a));
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i._options;
            return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !o.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
              x: t.x,
              y: t.y
            }, i.update(!0), i.pivot())), e;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                i,
                n = 0,
                a = 0,
                o = 0;

            for (e = 0, i = t.length; e < i; ++e) {
              var r = t[e];

              if (r && r.hasValue()) {
                var s = r.tooltipPosition();
                n += s.x, a += s.y, ++o;
              }
            }

            return {
              x: Math.round(n / o),
              y: Math.round(a / o)
            };
          },
          nearest: function nearest(t, e) {
            var i,
                n,
                a,
                r = e.x,
                s = e.y,
                l = Number.POSITIVE_INFINITY;

            for (i = 0, n = t.length; i < n; ++i) {
              var u = t[i];

              if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    c = o.distanceBetweenPoints(e, d);
                c < l && (l = c, a = u);
              }
            }

            if (a) {
              var h = a.tooltipPosition();
              r = h.x, s = h.y;
            }

            return {
              x: r,
              y: s
            };
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    36: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45);
      n._set("global", {
        elements: {
          arc: {
            backgroundColor: n.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = a.extend({
        inLabelRange: function inLabelRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function inRange(t, e) {
          var i = this._view;

          if (i) {
            for (var n = o.getAngleFromPoint(i, {
              x: t,
              y: e
            }), a = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) {
              l += 2 * Math.PI;
            }

            for (; a > l;) {
              a -= 2 * Math.PI;
            }

            for (; a < s;) {
              a += 2 * Math.PI;
            }

            var u = a >= s && a <= l,
                d = r >= i.innerRadius && r <= i.outerRadius;
            return u && d;
          }

          return !1;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              i = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          };
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              i = e.startAngle,
              n = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    37: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = n.global;
      n._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: r.defaultColor,
            borderWidth: 3,
            borderColor: r.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              i,
              n,
              a = this._view,
              s = this._chart.ctx,
              l = a.spanGaps,
              u = this._children.slice(),
              d = r.elements.line,
              c = -1;

          for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || r.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) {
            e = u[t], i = o.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view), c = t));
          }

          s.stroke(), s.restore();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    38: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = n.global.defaultColor;

      function s(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }

      n._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: r,
            borderColor: r,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = a.extend({
        inRange: function inRange(t, e) {
          var i = this._view;
          return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
        },
        inLabelRange: s,
        inXRange: s,
        inYRange: function inYRange(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          };
        },
        draw: function draw(t) {
          var e = this._view,
              i = this._model,
              a = this._chart.ctx,
              s = e.pointStyle,
              l = e.radius,
              u = e.x,
              d = e.y,
              c = o.color,
              h = 0;
          e.skip || (a.strokeStyle = e.borderColor || r, a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || r, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(a, s, l, u, d));
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    39: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26);

      function o(t) {
        return void 0 !== t._view.width;
      }

      function r(t) {
        var e,
            i,
            n,
            a,
            r = t._view;

        if (o(t)) {
          var s = r.width / 2;
          e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), a = Math.max(r.y, r.base);
        } else {
          var l = r.height / 2;
          e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, a = r.y + l;
        }

        return {
          left: e,
          top: n,
          right: i,
          bottom: a
        };
      }

      n._set("global", {
        elements: {
          rectangle: {
            backgroundColor: n.global.defaultColor,
            borderColor: n.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              i,
              n,
              a,
              o,
              r,
              s = this._chart.ctx,
              l = this._view,
              u = l.borderWidth;

          if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, o = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), u) {
            var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                c = (u = u > d ? d : u) / 2,
                h = t + ("left" !== r ? c * a : 0),
                f = e + ("right" !== r ? -c * a : 0),
                g = i + ("top" !== r ? c * o : 0),
                p = n + ("bottom" !== r ? -c * o : 0);
            h !== f && (i = g, n = p), g !== p && (t = h, e = f);
          }

          s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
          var m = [[t, n], [t, i], [e, i], [e, n]],
              v = ["bottom", "left", "top", "right"].indexOf(r, 0);

          function b(t) {
            return m[(v + t) % 4];
          }

          -1 === v && (v = 0);
          var x = b(0);
          s.moveTo(x[0], x[1]);

          for (var y = 1; y < 4; y++) {
            x = b(y), s.lineTo(x[0], x[1]);
          }

          s.fill(), u && s.stroke();
        },
        height: function height() {
          var t = this._view;
          return t.base - t.y;
        },
        inRange: function inRange(t, e) {
          var i = !1;

          if (this._view) {
            var n = r(this);
            i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
          }

          return i;
        },
        inLabelRange: function inLabelRange(t, e) {
          if (!this._view) return !1;
          var i = r(this);
          return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom;
        },
        inXRange: function inXRange(t) {
          var e = r(this);
          return t >= e.left && t <= e.right;
        },
        inYRange: function inYRange(t) {
          var e = r(this);
          return t >= e.top && t <= e.bottom;
        },
        getCenterPoint: function getCenterPoint() {
          var t,
              e,
              i = this._view;
          return o(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
            x: t,
            y: e
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        }
      });
    }, {
      25: 25,
      26: 26
    }],
    40: [function (t, e, i) {
      "use strict";

      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    }],
    41: [function (t, e, i) {
      "use strict";

      var n = t(42);
      i = e.exports = {
        clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function roundedRect(t, e, i, n, a, o) {
          if (o) {
            var r = Math.min(o, n / 2),
                s = Math.min(o, a / 2);
            t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i);
          } else t.rect(e, i, n, a);
        },
        drawPoint: function drawPoint(t, e, i, n, a) {
          var o, r, s, l, u, d;

          if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
            if (!(isNaN(i) || i <= 0)) {
              switch (e) {
                default:
                  t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                  break;

                case "triangle":
                  t.beginPath(), u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + u / 3), t.lineTo(n + r / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();
                  break;

                case "rect":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                  break;

                case "rectRounded":
                  var c = i / Math.SQRT2,
                      h = n - c,
                      f = a - c,
                      g = Math.SQRT2 * i;
                  t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill();
                  break;

                case "rectRot":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();
                  break;

                case "cross":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                  break;

                case "crossRot":
                  t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                  break;

                case "star":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                  break;

                case "line":
                  t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                  break;

                case "dash":
                  t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath();
              }

              t.stroke();
            }
          } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
        },
        clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function unclipArea(t) {
          t.restore();
        },
        lineTo: function lineTo(t, e, i, n) {
          if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
          i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
        }
      };
      n.clear = i.clear, n.drawRoundedRectangle = function (t) {
        t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath();
      };
    }, {
      42: 42
    }],
    42: [function (t, e, i) {
      "use strict";

      var n,
          a = {
        noop: function noop() {},
        uid: (n = 0, function () {
          return n++;
        }),
        isNullOrUndef: function isNullOrUndef(t) {
          return null == t;
        },
        isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
        isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, i) {
          return a.valueOrDefault(a.isArray(t) ? t[e] : t, i);
        },
        callback: function callback(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e);
        },
        each: function each(t, e, i, n) {
          var o, r, s;
          if (a.isArray(t)) {
            if (r = t.length, n) for (o = r - 1; o >= 0; o--) {
              e.call(i, t[o], o);
            } else for (o = 0; o < r; o++) {
              e.call(i, t[o], o);
            }
          } else if (a.isObject(t)) for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) {
            e.call(i, t[s[o]], s[o]);
          }
        },
        arrayEquals: function arrayEquals(t, e) {
          var i, n, o, r;
          if (!t || !e || t.length !== e.length) return !1;

          for (i = 0, n = t.length; i < n; ++i) {
            if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
              if (!a.arrayEquals(o, r)) return !1;
            } else if (o !== r) return !1;
          }

          return !0;
        },
        clone: function clone(t) {
          if (a.isArray(t)) return t.map(a.clone);

          if (a.isObject(t)) {
            for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) {
              e[i[o]] = a.clone(t[i[o]]);
            }

            return e;
          }

          return t;
        },
        _merger: function _merger(t, e, i, n) {
          var o = e[t],
              r = i[t];
          a.isObject(o) && a.isObject(r) ? a.merge(o, r, n) : e[t] = a.clone(r);
        },
        _mergerIf: function _mergerIf(t, e, i) {
          var n = e[t],
              o = i[t];
          a.isObject(n) && a.isObject(o) ? a.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = a.clone(o));
        },
        merge: function merge(t, e, i) {
          var n,
              o,
              r,
              s,
              l,
              u = a.isArray(e) ? e : [e],
              d = u.length;
          if (!a.isObject(t)) return t;

          for (n = (i = i || {}).merger || a._merger, o = 0; o < d; ++o) {
            if (e = u[o], a.isObject(e)) for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) {
              n(r[l], t, e, i);
            }
          }

          return t;
        },
        mergeIf: function mergeIf(t, e) {
          return a.merge(t, e, {
            merger: a._mergerIf
          });
        },
        extend: function extend(t) {
          for (var e = function e(_e, i) {
            t[i] = _e;
          }, i = 1, n = arguments.length; i < n; ++i) {
            a.each(arguments[i], e);
          }

          return t;
        },
        inherits: function inherits(t) {
          var e = this,
              i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              n = function n() {
            this.constructor = i;
          };

          return n.prototype = e.prototype, i.prototype = new n(), i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i;
        }
      };
      e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, i) {
        return Array.prototype.indexOf.call(t, e, i);
      }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault;
    }, {}],
    43: [function (t, e, i) {
      "use strict";

      var n = t(42),
          a = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
        },
        easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
        },
        easeInBack: function easeInBack(t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        easeOutBack: function easeOutBack(t) {
          return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - a.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5;
        }
      };
      e.exports = {
        effects: a
      }, n.easingEffects = a;
    }, {
      42: 42
    }],
    44: [function (t, e, i) {
      "use strict";

      var n = t(42);
      e.exports = {
        toLineHeight: function toLineHeight(t, e) {
          var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!i || "normal" === i[1]) return 1.2 * e;

          switch (t = +i[2], i[3]) {
            case "px":
              return t;

            case "%":
              t /= 100;
          }

          return e * t;
        },
        toPadding: function toPadding(t) {
          var e, i, a, o;
          return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = i = a = o = +t || 0, {
            top: e,
            right: i,
            bottom: a,
            left: o,
            height: e + a,
            width: o + i
          };
        },
        resolve: function resolve(t, e, i) {
          var a, o, r;

          for (a = 0, o = t.length; a < o; ++a) {
            if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r;
          }
        }
      };
    }, {
      42: 42
    }],
    45: [function (t, e, i) {
      "use strict";

      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    }],
    46: [function (t, e, i) {
      e.exports = {
        acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
      };
    }, {}],
    47: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = "$chartjs",
          o = "chartjs-",
          r = o + "render-monitor",
          s = o + "render-animation",
          l = ["animationstart", "webkitAnimationStart"],
          u = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };

      function d(t, e) {
        var i = n.getStyle(t, e),
            a = i && i.match(/^(\d+)(\.\d+)?px$/);
        return a ? Number(a[1]) : void 0;
      }

      var c = !!function () {
        var t = !1;

        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (t) {}

        return t;
      }() && {
        passive: !0
      };

      function h(t, e, i) {
        t.addEventListener(e, i, c);
      }

      function f(t, e, i) {
        t.removeEventListener(e, i, c);
      }

      function g(t, e, i, n, a) {
        return {
          type: t,
          chart: e,
          "native": a || null,
          x: void 0 !== i ? i : null,
          y: void 0 !== n ? n : null
        };
      }

      function p(t, e, i) {
        var u,
            d,
            c,
            f,
            p,
            m,
            v,
            b,
            x = t[a] || (t[a] = {}),
            y = x.resizer = function (t) {
          var e = document.createElement("div"),
              i = o + "size-monitor",
              n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
          e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
          var a = e.childNodes[0],
              r = e.childNodes[1];

          e._reset = function () {
            a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6;
          };

          var s = function s() {
            e._reset(), t();
          };

          return h(a, "scroll", s.bind(a, "expand")), h(r, "scroll", s.bind(r, "shrink")), e;
        }((u = function u() {
          if (x.resizer) return e(g("resize", i));
        }, c = !1, f = [], function () {
          f = Array.prototype.slice.call(arguments), d = d || this, c || (c = !0, n.requestAnimFrame.call(window, function () {
            c = !1, u.apply(d, f);
          }));
        }));

        m = function m() {
          if (x.resizer) {
            var e = t.parentNode;
            e && e !== y.parentNode && e.insertBefore(y, e.firstChild), y._reset();
          }
        }, v = (p = t)[a] || (p[a] = {}), b = v.renderProxy = function (t) {
          t.animationName === s && m();
        }, n.each(l, function (t) {
          h(p, t, b);
        }), v.reflow = !!p.offsetParent, p.classList.add(r);
      }

      function m(t) {
        var e,
            i,
            o,
            s = t[a] || {},
            u = s.resizer;
        delete s.resizer, i = (e = t)[a] || {}, (o = i.renderProxy) && (n.each(l, function (t) {
          f(e, t, o);
        }), delete i.renderProxy), e.classList.remove(r), u && u.parentNode && u.parentNode.removeChild(u);
      }

      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function initialize() {
          var t,
              e,
              i,
              n = "from{opacity:0.99}to{opacity:1}";
          e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e));
        },
        acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t ? (function (t, e) {
            var i = t.style,
                n = t.getAttribute("height"),
                o = t.getAttribute("width");

            if (t[a] = {
              initial: {
                height: n,
                width: o,
                style: {
                  display: i.display,
                  height: i.height,
                  width: i.width
                }
              }
            }, i.display = i.display || "block", null === o || "" === o) {
              var r = d(t, "width");
              void 0 !== r && (t.width = r);
            }

            if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var s = d(t, "height");
              void 0 !== r && (t.height = s);
            }
          }(t, e), i) : null;
        },
        releaseContext: function releaseContext(t) {
          var e = t.canvas;

          if (e[a]) {
            var i = e[a].initial;
            ["height", "width"].forEach(function (t) {
              var a = i[t];
              n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
            }), n.each(i.style || {}, function (t, i) {
              e.style[i] = t;
            }), e.width = e.width, delete e[a];
          }
        },
        addEventListener: function addEventListener(t, e, i) {
          var o = t.canvas;

          if ("resize" !== e) {
            var r = i[a] || (i[a] = {});
            h(o, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) {
              var a, o, r, s;
              i((o = t, r = u[(a = e).type] || a.type, s = n.getRelativePosition(a, o), g(r, o, s.x, s.y, a)));
            });
          } else p(o, i, t);
        },
        removeEventListener: function removeEventListener(t, e, i) {
          var n = t.canvas;

          if ("resize" !== e) {
            var o = ((i[a] || {}).proxies || {})[t.id + "_" + e];
            o && f(n, e, o);
          } else m(n);
        }
      }, n.addEvent = h, n.removeEvent = f;
    }, {
      45: 45
    }],
    48: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = t(46),
          o = t(47),
          r = o._enabled ? o : a;
      e.exports = n.extend({
        initialize: function initialize() {},
        acquireContext: function acquireContext() {},
        releaseContext: function releaseContext() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {}
      }, r);
    }, {
      45: 45,
      46: 46,
      47: 47
    }],
    49: [function (t, e, i) {
      "use strict";

      e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52);
    }, {
      50: 50,
      51: 51,
      52: 52
    }],
    50: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);

      n._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      });

      var r = {
        dataset: function dataset(t) {
          var e = t.fill,
              i = t.chart,
              n = i.getDatasetMeta(e),
              a = n && i.isDatasetVisible(e) && n.dataset._children || [],
              o = a.length || 0;
          return o ? function (t, e) {
            return e < o && a[e]._view || null;
          } : null;
        },
        boundary: function boundary(t) {
          var e = t.boundary,
              i = e ? e.x : null,
              n = e ? e.y : null;
          return function (t) {
            return {
              x: null === i ? t.x : i,
              y: null === n ? t.y : n
            };
          };
        }
      };

      function s(t, e, i) {
        var n,
            a = t._model || {},
            o = a.fill;
        if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;

        switch (o) {
          case "bottom":
            return "start";

          case "top":
            return "end";

          case "zero":
            return "origin";

          case "origin":
          case "start":
          case "end":
            return o;

          default:
            return !1;
        }
      }

      function l(t) {
        var e,
            i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            o = null;
        if (isFinite(a)) return null;

        if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
          if (void 0 !== o.x && void 0 !== o.y) return o;
          if ("number" == typeof o && isFinite(o)) return {
            x: (e = n.isHorizontal()) ? o : null,
            y: e ? null : o
          };
        }

        return null;
      }

      function u(t, e, i) {
        var n,
            a = t[e].fill,
            o = [e];
        if (!i) return a;

        for (; !1 !== a && -1 === o.indexOf(a);) {
          if (!isFinite(a)) return a;
          if (!(n = t[a])) return !1;
          if (n.visible) return a;
          o.push(a), a = n.fill;
        }

        return !1;
      }

      function d(t) {
        return t && !t.skip;
      }

      function c(t, e, i, n, a) {
        var r;

        if (n && a) {
          for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) {
            o.canvas.lineTo(t, e[r - 1], e[r]);
          }

          for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) {
            o.canvas.lineTo(t, i[r], i[r - 1], !0);
          }
        }
      }

      e.exports = {
        id: "filler",
        afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
          var i,
              n,
              o,
              d,
              c,
              h,
              f,
              g = (t.data.datasets || []).length,
              p = e.propagate,
              m = [];

          for (n = 0; n < g; ++n) {
            d = null, (o = (i = t.getDatasetMeta(n)).dataset) && o._model && o instanceof a.Line && (d = {
              visible: t.isDatasetVisible(n),
              fill: s(o, n, g),
              chart: t,
              el: o
            }), i.$filler = d, m.push(d);
          }

          for (n = 0; n < g; ++n) {
            (d = m[n]) && (d.fill = u(m, n, p), d.boundary = l(d), d.mapper = (void 0, f = void 0, h = (c = d).fill, f = "dataset", !1 === h ? null : (isFinite(h) || (f = "boundary"), r[f](c))));
          }
        },
        beforeDatasetDraw: function beforeDatasetDraw(t, e) {
          var i = e.meta.$filler;

          if (i) {
            var a = t.ctx,
                r = i.el,
                s = r._view,
                l = r._children || [],
                u = i.mapper,
                h = s.backgroundColor || n.global.defaultColor;
            u && h && l.length && (o.canvas.clipArea(a, t.chartArea), function (t, e, i, n, a, o) {
              var r,
                  s,
                  l,
                  u,
                  h,
                  f,
                  g,
                  p = e.length,
                  m = n.spanGaps,
                  v = [],
                  b = [],
                  x = 0,
                  y = 0;

              for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r) {
                h = i(u = e[l = r % p]._view, l, n), f = d(u), g = d(h), f && g ? (x = v.push(u), y = b.push(h)) : x && y && (m ? (f && v.push(u), g && b.push(h)) : (c(t, v, b, x, y), x = y = 0, v = [], b = []));
              }

              c(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill();
            }(a, l, u, s, h, r._loop), o.canvas.unclipArea(a));
          }
        }
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    51: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = t(30),
          s = o.noop;

      function l(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
      }

      n._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var i = e.datasetIndex,
                n = this.chart,
                a = n.getDatasetMeta(i);
            a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return o.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                return {
                  text: e.label,
                  fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(i),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: i
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');

          for (var i = 0; i < t.data.datasets.length; i++) {
            e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
          }

          return e.push("</ul>"), e.join("");
        }
      });

      var u = a.extend({
        initialize: function initialize(t) {
          o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
        },
        beforeUpdate: s,
        update: function update(t, e, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: function buildLabels() {
          var t = this,
              e = t.options.labels || {},
              i = o.callback(e.generateLabels, [t.chart], t) || [];
          e.filter && (i = i.filter(function (i) {
            return e.filter(i, t.chart.data);
          })), t.options.reverse && i.reverse(), t.legendItems = i;
        },
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = e.display,
              r = t.ctx,
              s = n.global,
              u = o.valueOrDefault,
              d = u(i.fontSize, s.defaultFontSize),
              c = u(i.fontStyle, s.defaultFontStyle),
              h = u(i.fontFamily, s.defaultFontFamily),
              f = o.fontString(d, c, h),
              g = t.legendHitBoxes = [],
              p = t.minSize,
              m = t.isHorizontal();
          if (m ? (p.width = t.maxWidth, p.height = a ? 10 : 0) : (p.width = a ? 10 : 0, p.height = t.maxHeight), a) if (r.font = f, m) {
            var v = t.lineWidths = [0],
                b = t.legendItems.length ? d + i.padding : 0;
            r.textAlign = "left", r.textBaseline = "top", o.each(t.legendItems, function (e, n) {
              var a = l(i, d) + d / 2 + r.measureText(e.text).width;
              v[v.length - 1] + a + i.padding >= t.width && (b += d + i.padding, v[v.length] = t.left), g[n] = {
                left: 0,
                top: 0,
                width: a,
                height: d
              }, v[v.length - 1] += a + i.padding;
            }), p.height += b;
          } else {
            var x = i.padding,
                y = t.columnWidths = [],
                k = i.padding,
                M = 0,
                w = 0,
                S = d + x;
            o.each(t.legendItems, function (t, e) {
              var n = l(i, d) + d / 2 + r.measureText(t.text).width;
              w + S > p.height && (k += M + i.padding, y.push(M), M = 0, w = 0), M = Math.max(M, n), w += S, g[e] = {
                left: 0,
                top: 0,
                width: n,
                height: d
              };
            }), k += M, y.push(M), p.width += k;
          }
          t.width = p.width, t.height = p.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function draw() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = n.global,
              r = a.elements.line,
              s = t.width,
              u = t.lineWidths;

          if (e.display) {
            var d,
                c = t.ctx,
                h = o.valueOrDefault,
                f = h(i.fontColor, a.defaultFontColor),
                g = h(i.fontSize, a.defaultFontSize),
                p = h(i.fontStyle, a.defaultFontStyle),
                m = h(i.fontFamily, a.defaultFontFamily),
                v = o.fontString(g, p, m);
            c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
            var b = l(i, g),
                x = t.legendHitBoxes,
                y = t.isHorizontal();
            d = y ? {
              x: t.left + (s - u[0]) / 2,
              y: t.top + i.padding,
              line: 0
            } : {
              x: t.left + i.padding,
              y: t.top + i.padding,
              line: 0
            };
            var k = g + i.padding;
            o.each(t.legendItems, function (n, l) {
              var f,
                  p,
                  m,
                  v,
                  M,
                  w = c.measureText(n.text).width,
                  S = b + g / 2 + w,
                  C = d.x,
                  _ = d.y;
              y ? C + S >= s && (_ = d.y += k, d.line++, C = d.x = t.left + (s - u[d.line]) / 2) : _ + k > t.bottom && (C = d.x = C + t.columnWidths[d.line] + i.padding, _ = d.y = t.top + i.padding, d.line++), function (t, i, n) {
                if (!(isNaN(b) || b <= 0)) {
                  c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, r.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset), c.lineJoin = h(n.lineJoin, r.borderJoinStyle), c.lineWidth = h(n.lineWidth, r.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor);
                  var s = 0 === h(n.lineWidth, r.borderWidth);

                  if (c.setLineDash && c.setLineDash(h(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
                    var l = g * Math.SQRT2 / 2,
                        u = l / Math.SQRT2,
                        d = t + u,
                        f = i + u;
                    o.canvas.drawPoint(c, n.pointStyle, l, d, f);
                  } else s || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);

                  c.restore();
                }
              }(C, _, n), x[l].left = C, x[l].top = _, f = n, p = w, v = b + (m = g / 2) + C, M = _ + m, c.fillText(f.text, v, M), f.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v, M), c.lineTo(v + p, M), c.stroke()), y ? d.x += S + i.padding : d.y += k;
            });
          }
        },
        handleEvent: function handleEvent(t) {
          var e = this,
              i = e.options,
              n = "mouseup" === t.type ? "click" : t.type,
              a = !1;

          if ("mousemove" === n) {
            if (!i.onHover) return;
          } else {
            if ("click" !== n) return;
            if (!i.onClick) return;
          }

          var o = t.x,
              r = t.y;
          if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
            var u = s[l];

            if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
              if ("click" === n) {
                i.onClick.call(e, t["native"], e.legendItems[l]), a = !0;
                break;
              }

              if ("mousemove" === n) {
                i.onHover.call(e, t["native"], e.legendItems[l]), a = !0;
                break;
              }
            }
          }
          return a;
        }
      });

      function d(t, e) {
        var i = new u({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        r.configure(t, i, e), r.addBox(t, i), t.legend = i;
      }

      e.exports = {
        id: "legend",
        _element: u,
        beforeInit: function beforeInit(t) {
          var e = t.options.legend;
          e && d(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.legend,
              i = t.legend;
          e ? (o.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : d(t, e)) : i && (r.removeBox(t, i), delete t.legend);
        },
        afterEvent: function afterEvent(t, e) {
          var i = t.legend;
          i && i.handleEvent(e);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    }],
    52: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = t(30),
          s = o.noop;

      n._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      });

      var l = a.extend({
        initialize: function initialize(t) {
          o.extend(this, t), this.legendHitBoxes = [];
        },
        beforeUpdate: s,
        update: function update(t, e, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: s,
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = o.valueOrDefault,
              i = t.options,
              a = i.display,
              r = e(i.fontSize, n.global.defaultFontSize),
              s = t.minSize,
              l = o.isArray(i.text) ? i.text.length : 1,
              u = o.options.toLineHeight(i.lineHeight, r),
              d = a ? l * u + 2 * i.padding : 0;
          t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function draw() {
          var t = this,
              e = t.ctx,
              i = o.valueOrDefault,
              a = t.options,
              r = n.global;

          if (a.display) {
            var s,
                l,
                u,
                d = i(a.fontSize, r.defaultFontSize),
                c = i(a.fontStyle, r.defaultFontStyle),
                h = i(a.fontFamily, r.defaultFontFamily),
                f = o.fontString(d, c, h),
                g = o.options.toLineHeight(a.lineHeight, d),
                p = g / 2 + a.padding,
                m = 0,
                v = t.top,
                b = t.left,
                x = t.bottom,
                y = t.right;
            e.fillStyle = i(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (y - b) / 2, u = v + p, s = y - b) : (l = "left" === a.position ? b + p : y - p, u = v + (x - v) / 2, s = x - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
            var k = a.text;
            if (o.isArray(k)) for (var M = 0, w = 0; w < k.length; ++w) {
              e.fillText(k[w], 0, M, s), M += g;
            } else e.fillText(k, 0, 0, s);
            e.restore();
          }
        }
      });

      function u(t, e) {
        var i = new l({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i;
      }

      e.exports = {
        id: "title",
        _element: l,
        beforeInit: function beforeInit(t) {
          var e = t.options.title;
          e && u(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.title,
              i = t.titleBlock;
          e ? (o.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    }],
    53: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        var e = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e = this,
                i = e.getLabels();
            e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this,
                n = i.chart.data,
                a = i.isHorizontal();
            return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e) {
            var i,
                n = this,
                a = n.options.offset,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);

            if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
              t = i || t;
              var r = n.getLabels().indexOf(t);
              e = -1 !== r ? r : e;
            }

            if (n.isHorizontal()) {
              var s = n.width / o,
                  l = s * (e - n.minIndex);
              return a && (l += s / 2), n.left + Math.round(l);
            }

            var u = n.height / o,
                d = u * (e - n.minIndex);
            return a && (d += u / 2), n.top + Math.round(d);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e.options.offset,
                n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                a = e.isHorizontal(),
                o = (a ? e.width : e.height) / n;
            return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", e, {
          position: "bottom"
        });
      };
    }, {}],
    54: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: o.formatters.linear
          }
        },
            i = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                n = i.data.datasets,
                o = t.isHorizontal();

            function r(e) {
              return o ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null;
            var s = e.stacked;

            if (void 0 === s && a.each(n, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);
                i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              a.each(n, function (n, o) {
                var s = i.getDatasetMeta(o),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                void 0 === l[u] && (l[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = l[u].positiveValues,
                    c = l[u].negativeValues;
                i.isDatasetVisible(o) && r(s) && a.each(n.data, function (i, n) {
                  var a = +t.getRightValue(i);
                  isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a);
                });
              }), a.each(l, function (e) {
                var i = e.positiveValues.concat(e.negativeValues),
                    n = a.min(i),
                    o = a.max(i);
                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o);
              });
            } else a.each(n, function (e, n) {
              var o = i.getDatasetMeta(n);
              i.isDatasetVisible(n) && r(o) && a.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
              });
            });

            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t,
                e = this.options.ticks;
            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));else {
              var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
              t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)));
            }
            return t;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e = this,
                i = e.start,
                n = +e.getRightValue(t),
                a = e.end - i;
            return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e.isHorizontal(),
                n = i ? e.width : e.height,
                a = (i ? t - e.left : e.bottom - t) / n;
            return e.start + (e.end - e.start) * a;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", i, e);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    55: [function (t, e, i) {
      "use strict";

      var n = t(45);

      e.exports = function (t) {
        var e = n.noop;
        t.LinearScaleBase = t.Scale.extend({
          getRightValue: function getRightValue(e) {
            return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;

            if (e.beginAtZero) {
              var i = n.sign(t.min),
                  a = n.sign(t.max);
              i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0);
            }

            var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: e,
          handleDirectionalChanges: e,
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = t.getTickLimit(),
                a = {
              maxTicks: i = Math.max(2, i),
              min: e.min,
              max: e.max,
              stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
            },
                o = t.ticks = function (t, e) {
              var i,
                  a = [];
              if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var o = n.niceNum(e.max - e.min, !1);
                i = n.niceNum(o / (t.maxTicks - 1), !0);
              }
              var r = Math.floor(e.min / i) * i,
                  s = Math.ceil(e.max / i) * i;
              t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);
              var l = (s - r) / i;
              l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);
              var u = 1;
              i < 1 && (u = Math.pow(10, i.toString().length - 2), r = Math.round(r * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : r);

              for (var d = 1; d < l; ++d) {
                a.push(Math.round((r + d * i) * u) / u);
              }

              return a.push(void 0 !== t.max ? t.max : s), a;
            }(a, t);

            t.handleDirectionalChanges(), t.max = n.max(o), t.min = n.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {
      45: 45
    }],
    56: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.logarithmic
          }
        },
            i = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                a = i.data.datasets,
                o = t.isHorizontal();

            function r(e) {
              return o ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null, t.minNotZero = null;
            var s = e.stacked;

            if (void 0 === s && n.each(a, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);
                i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              n.each(a, function (a, o) {
                var s = i.getDatasetMeta(o),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                i.isDatasetVisible(o) && r(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function (e, i) {
                  var n = l[u],
                      a = +t.getRightValue(e);
                  isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
                }));
              }), n.each(l, function (e) {
                if (e.length > 0) {
                  var i = n.min(e),
                      a = n.max(e);
                  t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a);
                }
              });
            } else n.each(a, function (e, a) {
              var o = i.getDatasetMeta(a);
              i.isDatasetVisible(a) && r(o) && n.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || o.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
              });
            });

            this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks,
                i = n.valueOrDefault;
            t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1);
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = !t.isHorizontal(),
                a = {
              min: e.min,
              max: e.max
            },
                o = t.ticks = function (t, e) {
              var i,
                  a,
                  o = [],
                  r = n.valueOrDefault,
                  s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                  l = Math.floor(n.log10(e.max)),
                  u = Math.ceil(e.max / Math.pow(10, l));
              0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));

              for (var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1; o.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d, i < l || i === l && a < u;) {
                ;
              }

              var c = r(t.max, s);
              return o.push(c), o;
            }(a, t);

            t.max = n.max(o), t.min = n.min(o), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && o.reverse();
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          _getFirstTickValue: function _getFirstTickValue(t) {
            var e = Math.floor(n.log10(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
          },
          getPixelForValue: function getPixelForValue(e) {
            var i,
                a,
                o,
                r,
                s,
                l = this,
                u = l.options.ticks.reverse,
                d = n.log10,
                c = l._getFirstTickValue(l.minNotZero),
                h = 0;

            return e = +l.getRightValue(e), u ? (o = l.end, r = l.start, s = -1) : (o = l.start, r = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== o && (0 === o && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = c), 0 !== e && (h += i / (d(r) - d(o)) * (d(e) - d(o))), a += s * h), a;
          },
          getValueForPixel: function getValueForPixel(e) {
            var i,
                a,
                o,
                r,
                s = this,
                l = s.options.ticks.reverse,
                u = n.log10,
                d = s._getFirstTickValue(s.minNotZero);

            if (l ? (a = s.end, o = s.start) : (a = s.start, o = s.end), s.isHorizontal() ? (i = s.width, r = l ? s.right - e : e - s.left) : (i = s.height, r = l ? e - s.top : s.bottom - e), r !== a) {
              if (0 === a) {
                var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                r -= c, i -= c, a = d;
              }

              r *= u(o) - u(a), r /= i, r = Math.pow(10, u(a) + r);
            }

            return r;
          }
        });
        t.scaleService.registerScaleType("logarithmic", i, e);
      };
    }, {
      34: 34,
      45: 45
    }],
    57: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(34);

      e.exports = function (t) {
        var e = n.global,
            i = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: o.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        };

        function r(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function s(t) {
          var i = t.options.pointLabels,
              n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
              o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
              r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
          return {
            size: n,
            style: o,
            family: r,
            font: a.fontString(n, o, r)
          };
        }

        function l(t, e, i, n, a) {
          return t === n || t === a ? {
            start: e - i / 2,
            end: e + i / 2
          } : t < n || t > a ? {
            start: e - i - 5,
            end: e
          } : {
            start: e,
            end: e + i + 5
          };
        }

        function u(t, e, i, n) {
          if (a.isArray(e)) for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) {
            t.fillText(e[s], i.x, o), o += r;
          } else t.fillText(e, i.x, i.y);
        }

        function d(t) {
          return a.isNumber(t) ? t : 0;
        }

        var c = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var o = a.min([t.height, t.width]),
                r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
            t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                i = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
            a.each(e.data.datasets, function (o, r) {
              if (e.isDatasetVisible(r)) {
                var s = e.getDatasetMeta(r);
                a.each(o.data, function (e, a) {
                  var o = +t.getRightValue(e);
                  isNaN(o) || s.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n));
                });
              }
            }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t, e;
            this.options.pointLabels.display ? function (t) {
              var e,
                  i,
                  n,
                  o = s(t),
                  u = Math.min(t.height / 2, t.width / 2),
                  d = {
                r: t.width,
                l: 0,
                t: t.height,
                b: 0
              },
                  c = {};
              t.ctx.font = o.font, t._pointLabelSizes = [];
              var h,
                  f,
                  g,
                  p = r(t);

              for (e = 0; e < p; e++) {
                n = t.getPointPosition(e, u), h = t.ctx, f = o.size, g = t.pointLabels[e] || "", i = a.isArray(g) ? {
                  w: a.longestText(h, h.font, g),
                  h: g.length * f + 1.5 * (g.length - 1) * f
                } : {
                  w: h.measureText(g).width,
                  h: f
                }, t._pointLabelSizes[e] = i;
                var m = t.getIndexAngle(e),
                    v = a.toDegrees(m) % 360,
                    b = l(v, n.x, i.w, 0, 180),
                    x = l(v, n.y, i.h, 90, 270);
                b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), x.start < d.t && (d.t = x.start, c.t = m), x.end > d.b && (d.b = x.end, c.b = m);
              }

              t.setReductions(u, d, c);
            }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0));
          },
          setReductions: function setReductions(t, e, i) {
            var n = e.l / Math.sin(i.l),
                a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                o = -e.t / Math.cos(i.t),
                r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
            n = d(n), a = d(a), o = d(o), r = d(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r);
          },
          setCenterPoint: function setCenterPoint(t, e, i, n) {
            var a = this,
                o = a.width - e - a.drawingArea,
                r = t + a.drawingArea,
                s = i + a.drawingArea,
                l = a.height - n - a.drawingArea;
            a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / r(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var i = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
          },
          getPointPosition: function getPointPosition(t, e) {
            var i = this.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(i) * e) + this.xCenter,
              y: Math.round(Math.sin(i) * e) + this.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this.min,
                e = this.max;
            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
          },
          draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                o = i.ticks,
                l = a.valueOrDefault;

            if (i.display) {
              var d = t.ctx,
                  c = this.getIndexAngle(0),
                  h = l(o.fontSize, e.defaultFontSize),
                  f = l(o.fontStyle, e.defaultFontStyle),
                  g = l(o.fontFamily, e.defaultFontFamily),
                  p = a.fontString(h, f, g);
              a.each(t.ticks, function (i, s) {
                if (s > 0 || o.reverse) {
                  var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);

                  if (n.display && 0 !== s && function (t, e, i, n) {
                    var o = t.ctx;
                    if (o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();else {
                      var s = r(t);
                      if (0 === s) return;
                      o.beginPath();
                      var l = t.getPointPosition(0, i);
                      o.moveTo(l.x, l.y);

                      for (var u = 1; u < s; u++) {
                        l = t.getPointPosition(u, i), o.lineTo(l.x, l.y);
                      }

                      o.closePath(), o.stroke();
                    }
                  }(t, n, u, s), o.display) {
                    var f = l(o.fontColor, e.defaultFontColor);

                    if (d.font = p, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(c), o.showLabelBackdrop) {
                      var g = d.measureText(i).width;
                      d.fillStyle = o.backdropColor, d.fillRect(-g / 2 - o.backdropPaddingX, -u - h / 2 - o.backdropPaddingY, g + 2 * o.backdropPaddingX, h + 2 * o.backdropPaddingY);
                    }

                    d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore();
                  }
                }
              }), (i.angleLines.display || i.pointLabels.display) && function (t) {
                var i = t.ctx,
                    n = t.options,
                    o = n.angleLines,
                    l = n.pointLabels;
                i.lineWidth = o.lineWidth, i.strokeStyle = o.color;
                var d,
                    c,
                    h,
                    f,
                    g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                    p = s(t);
                i.textBaseline = "top";

                for (var m = r(t) - 1; m >= 0; m--) {
                  if (o.display) {
                    var v = t.getPointPosition(m, g);
                    i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath();
                  }

                  if (l.display) {
                    var b = t.getPointPosition(m, g + 5),
                        x = a.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                    i.font = p.font, i.fillStyle = x;
                    var y = t.getIndexAngle(m),
                        k = a.toDegrees(y);
                    i.textAlign = 0 === (f = k) || 180 === f ? "center" : f < 180 ? "left" : "right", d = k, c = t._pointLabelSizes[m], h = b, 90 === d || 270 === d ? h.y -= c.h / 2 : (d > 270 || d < 90) && (h.y -= c.h), u(i, t.pointLabels[m] || "", b, p.size);
                  }
                }
              }(t);
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", c, i);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    58: [function (t, e, i) {
      "use strict";

      var n = t(1);
      n = "function" == typeof n ? n : window.moment;
      var a = t(25),
          o = t(45),
          r = Number.MIN_SAFE_INTEGER || -9007199254740991,
          s = Number.MAX_SAFE_INTEGER || 9007199254740991,
          l = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [1, 2, 5, 10, 30]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [1, 2, 5, 10, 30]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [1, 2, 3, 6, 12]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [1, 2, 5]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [1, 2, 3, 4]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [1, 2, 3]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [1, 2, 3, 4]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
          u = Object.keys(l);

      function d(t, e) {
        return t - e;
      }

      function c(t) {
        var e,
            i,
            n,
            a = {},
            o = [];

        for (e = 0, i = t.length; e < i; ++e) {
          a[n = t[e]] || (a[n] = !0, o.push(n));
        }

        return o;
      }

      function h(t, e, i, n) {
        var a = function (t, e, i) {
          for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
            if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
              lo: null,
              hi: o
            };
            if (o[e] < i) r = n + 1;else {
              if (!(a[e] > i)) return {
                lo: a,
                hi: o
              };
              s = n - 1;
            }
          }

          return {
            lo: o,
            hi: null
          };
        }(t, e, i),
            o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = r[e] - o[e],
            l = s ? (i - o[e]) / s : 0,
            u = (r[n] - o[n]) * l;

        return o[n] + u;
      }

      function f(t, e) {
        var i = e.parser,
            a = e.parser || e.format;
        return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t);
      }

      function g(t, e) {
        if (o.isNullOrUndef(t)) return null;
        var i = e.options.time,
            n = f(e.getRightValue(t), i);
        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
      }

      function p(t) {
        for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e) {
          if (l[u[e]].common) return u[e];
        }
      }

      function m(t, e, i, a) {
        var r,
            d = a.time,
            c = d.unit || function (t, e, i, n) {
          var a,
              o,
              r,
              d = u.length;

          for (a = u.indexOf(t); a < d - 1; ++a) {
            if (r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return u[a];
          }

          return u[d - 1];
        }(d.minUnit, t, e, i),
            h = p(c),
            f = o.valueOrDefault(d.stepSize, d.unitStepSize),
            g = "week" === c && d.isoWeekday,
            m = a.ticks.major.enabled,
            v = l[c],
            b = n(t),
            x = n(e),
            y = [];

        for (f || (f = function (t, e, i, n) {
          var a,
              o,
              r,
              s = e - t,
              u = l[i],
              d = u.size,
              c = u.steps;
          if (!c) return Math.ceil(s / (n * d));

          for (a = 0, o = c.length; a < o && (r = c[a], !(Math.ceil(s / (d * r)) <= n)); ++a) {
            ;
          }

          return r;
        }(t, e, c, i)), g && (b = b.isoWeekday(g), x = x.isoWeekday(g)), b = b.startOf(g ? "day" : c), (x = x.startOf(g ? "day" : c)) < e && x.add(1, c), r = n(b), m && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (v.size * f)) * f, c)); r < x; r.add(f, c)) {
          y.push(+r);
        }

        return y.push(+r), y;
      }

      e.exports = function (t) {
        var e = t.Scale.extend({
          initialize: function initialize() {
            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
          },
          update: function update() {
            var e = this.options;
            return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments);
          },
          getRightValue: function getRightValue(e) {
            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e,
                i,
                a,
                l,
                u,
                h = this,
                f = h.chart,
                p = h.options.time,
                m = p.unit || "day",
                v = s,
                b = r,
                x = [],
                y = [],
                k = [];

            for (t = 0, i = f.data.labels.length; t < i; ++t) {
              k.push(g(f.data.labels[t], h));
            }

            for (t = 0, i = (f.data.datasets || []).length; t < i; ++t) {
              if (f.isDatasetVisible(t)) {
                if (l = f.data.datasets[t].data, o.isObject(l[0])) for (y[t] = [], e = 0, a = l.length; e < a; ++e) {
                  u = g(l[e], h), x.push(u), y[t][e] = u;
                } else x.push.apply(x, k), y[t] = k.slice(0);
              } else y[t] = [];
            }

            k.length && (k = c(k).sort(d), v = Math.min(v, k[0]), b = Math.max(b, k[k.length - 1])), x.length && (x = c(x).sort(d), v = Math.min(v, x[0]), b = Math.max(b, x[x.length - 1])), v = g(p.min, h) || v, b = g(p.max, h) || b, v = v === s ? +n().startOf(m) : v, b = b === r ? +n().endOf(m) + 1 : b, h.min = Math.min(v, b), h.max = Math.max(v + 1, b), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
              data: x,
              datasets: y,
              labels: k
            };
          },
          buildTicks: function buildTicks() {
            var t,
                e,
                i,
                a,
                o,
                r,
                s,
                d,
                c,
                v,
                b,
                x,
                y = this,
                k = y.min,
                M = y.max,
                w = y.options,
                S = w.time,
                C = [],
                _ = [];

            switch (w.ticks.source) {
              case "data":
                C = y._timestamps.data;
                break;

              case "labels":
                C = y._timestamps.labels;
                break;

              case "auto":
              default:
                C = m(k, M, y.getLabelCapacity(k), w);
            }

            for ("ticks" === w.bounds && C.length && (k = C[0], M = C[C.length - 1]), k = g(S.min, y) || k, M = g(S.max, y) || M, t = 0, e = C.length; t < e; ++t) {
              (i = C[t]) >= k && i <= M && _.push(i);
            }

            return y.min = k, y.max = M, y._unit = S.unit || function (t, e, i, a) {
              var o,
                  r,
                  s = n.duration(n(a).diff(n(i)));

              for (o = u.length - 1; o >= u.indexOf(e); o--) {
                if (r = u[o], l[r].common && s.as(r) >= t.length) return r;
              }

              return u[e ? u.indexOf(e) : 0];
            }(_, S.minUnit, y.min, y.max), y._majorUnit = p(y._unit), y._table = function (t, e, i, n) {
              if ("linear" === n || !t.length) return [{
                time: e,
                pos: 0
              }, {
                time: i,
                pos: 1
              }];
              var a,
                  o,
                  r,
                  s,
                  l,
                  u = [],
                  d = [e];

              for (a = 0, o = t.length; a < o; ++a) {
                (s = t[a]) > e && s < i && d.push(s);
              }

              for (d.push(i), a = 0, o = d.length; a < o; ++a) {
                l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                  time: s,
                  pos: a / (o - 1)
                });
              }

              return u;
            }(y._timestamps.data, k, M, w.distribution), y._offsets = (a = y._table, o = _, r = k, s = M, b = 0, x = 0, (d = w).offset && o.length && (d.time.min || (c = o.length > 1 ? o[1] : s, v = o[0], b = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2), d.time.max || (c = o[o.length - 1], v = o.length > 1 ? o[o.length - 2] : r, x = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2)), {
              left: b,
              right: x
            }), y._labelFormat = function (t, e) {
              var i,
                  n,
                  a,
                  o = t.length;

              for (i = 0; i < o; i++) {
                if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0);
              }

              return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
            }(y._timestamps.data, S), function (t, e) {
              var i,
                  a,
                  o,
                  r,
                  s = [];

              for (i = 0, a = t.length; i < a; ++i) {
                o = t[i], r = !!e && o === +n(o).startOf(e), s.push({
                  value: o,
                  major: r
                });
              }

              return s;
            }(_, y._majorUnit);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this.chart.data,
                n = this.options.time,
                a = i.labels && t < i.labels.length ? i.labels[t] : "",
                r = i.datasets[e].data[t];
            return o.isObject(r) && (a = this.getRightValue(r)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat);
          },
          tickFormatFunction: function tickFormatFunction(t, e, i, n) {
            var a = this.options,
                r = t.valueOf(),
                s = a.time.displayFormats,
                l = s[this._unit],
                u = this._majorUnit,
                d = s[u],
                c = t.clone().startOf(u).valueOf(),
                h = a.ticks.major,
                f = h.enabled && u && d && r === c,
                g = t.format(n || (f ? d : l)),
                p = f ? h : a.ticks.minor,
                m = o.valueOrDefault(p.callback, p.userCallback);
            return m ? m(g, e, i) : g;
          },
          convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                i,
                a = [];

            for (e = 0, i = t.length; e < i; ++e) {
              a.push(this.tickFormatFunction(n(t[e].value), e, t));
            }

            return a;
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a = h(e._table, "time", t, "pos");
            return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
          },
          getPixelForValue: function getPixelForValue(t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n);
          },
          getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                a = e._horizontal ? e.left : e.top,
                o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                r = h(e._table, "pos", o, "time");
            return n(r);
          },
          getLabelWidth: function getLabelWidth(t) {
            var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = o.toRadians(e.maxRotation),
                r = Math.cos(n),
                s = Math.sin(n);
            return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this,
                i = e.options.time.displayFormats.millisecond,
                a = e.tickFormatFunction(n(t), 0, [], i),
                o = e.getLabelWidth(a),
                r = e.isHorizontal() ? e.width : e.height,
                s = Math.floor(r / o);
            return s > 0 ? s : 1;
          }
        });
        t.scaleService.registerScaleType("time", e, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      1: 1,
      25: 25,
      45: 45
    }]
  }, {}, [7])(7);
});
/**
 * [Chart.PieceLabel.js]{@link https://github.com/emn178/Chart.PieceLabel.js}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017
 * @license MIT
 */

!function () {
  function t() {
    this.drawDataset = this.drawDataset.bind(this);
  }

  "undefined" == typeof Chart ? console.warn("Can not find Chart object.") : (t.prototype.beforeDatasetsUpdate = function (t) {
    if (this.parseOptions(t) && "outside" === this.position) {
      var e = 1.5 * this.fontSize + 2;
      t.chartArea.top += e, t.chartArea.bottom -= e;
    }
  }, t.prototype.afterDatasetsDraw = function (t) {
    this.parseOptions(t) && (this.labelBounds = [], t.config.data.datasets.forEach(this.drawDataset));
  }, t.prototype.drawDataset = function (t) {
    for (var e = this.ctx, i = this.chartInstance, o = t._meta[Object.keys(t._meta)[0]], a = 0, s = 0; s < o.data.length; s++) {
      var r = o.data[s],
          n = r._view;

      if (0 !== n.circumference || this.showZero) {
        switch (this.render) {
          case "value":
            var h = t.data[s];
            this.format && (h = this.format(h)), h = h.toString();
            break;

          case "label":
            h = i.config.data.labels[s];
            break;

          case "image":
            h = this.images[s] ? this.loadImage(this.images[s]) : "";
            break;

          default:
            var l = n.circumference / this.options.circumference * 100;
            l = parseFloat(l.toFixed(this.precision)), this.showActualPercentages || 100 < (a += l) && (l -= a - 100, l = parseFloat(l.toFixed(this.precision))), h = l + "%";
        }

        if ("function" == typeof this.render && "object" == _typeof(h = this.render({
          label: i.config.data.labels[s],
          value: t.data[s],
          percentage: l,
          dataset: t,
          index: s
        })) && (h = this.loadImage(h)), !h) break;

        if (e.save(), e.beginPath(), e.font = Chart.helpers.fontString(this.fontSize, this.fontStyle, this.fontFamily), "outside" === this.position || "border" === this.position && "pie" === i.config.type) {
          var f,
              c = n.outerRadius / 2,
              p = this.fontSize + 2,
              d = n.startAngle + (n.endAngle - n.startAngle) / 2;

          if ("border" === this.position ? f = (n.outerRadius - c) / 2 + c : "outside" === this.position && (f = n.outerRadius - c + c + p), d = {
            x: n.x + Math.cos(d) * f,
            y: n.y + Math.sin(d) * f
          }, "outside" === this.position) {
            d.x = d.x < n.x ? d.x - p : d.x + p;
            var u = n.outerRadius + p;
          }
        } else c = n.innerRadius, d = r.tooltipPosition();

        if ("function" == typeof (p = this.fontColor) ? p = p({
          label: i.config.data.labels[s],
          value: t.data[s],
          percentage: l,
          text: h,
          backgroundColor: t.backgroundColor[s],
          dataset: t,
          index: s
        }) : "string" != typeof p && (p = p[s] || this.options.defaultFontColor), this.arc) u || (u = (c + n.outerRadius) / 2), e.fillStyle = p, e.textBaseline = "middle", this.drawArcText(h, u, n, this.overlap);else {
          c = this.measureText(h), n = d.x - c.width / 2, c = d.x + c.width / 2;
          var g = d.y - this.fontSize / 2,
              x = d.y + this.fontSize / 2;
          (this.overlap || ("outside" === this.position ? this.checkTextBound(n, c, g, x) : r.inRange(n, g) && r.inRange(n, x) && r.inRange(c, g) && r.inRange(c, x))) && this.fillText(h, d, p);
        }
        e.restore();
      }
    }
  }, t.prototype.parseOptions = function (t) {
    var e = t.options.pieceLabel;
    return !!e && (this.chartInstance = t, this.ctx = t.chart.ctx, this.options = t.config.options, this.render = e.render || e.mode, this.position = e.position || "default", this.arc = e.arc, this.format = e.format, this.precision = e.precision || 0, this.fontSize = e.fontSize || this.options.defaultFontSize, this.fontColor = e.fontColor || this.options.defaultFontColor, this.fontStyle = e.fontStyle || this.options.defaultFontStyle, this.fontFamily = e.fontFamily || this.options.defaultFontFamily, this.hasTooltip = t.tooltip._active && t.tooltip._active.length, this.showZero = e.showZero, this.overlap = e.overlap, this.images = e.images || [], this.showActualPercentages = e.showActualPercentages || !1, !0);
  }, t.prototype.checkTextBound = function (t, e, i, o) {
    for (var a = this.labelBounds, s = 0; s < a.length; ++s) {
      for (var r = a[s], n = [[t, i], [t, o], [e, i], [e, o]], h = 0; h < n.length; ++h) {
        var l = n[h][0],
            f = n[h][1];
        if (l >= r.left && l <= r.right && f >= r.top && f <= r.bottom) return !1;
      }

      for (n = [[r.left, r.top], [r.left, r.bottom], [r.right, r.top], [r.right, r.bottom]], h = 0; h < n.length; ++h) {
        if (l = n[h][0], f = n[h][1], l >= t && l <= e && f >= i && f <= o) return !1;
      }
    }

    return a.push({
      left: t,
      right: e,
      top: i,
      bottom: o
    }), !0;
  }, t.prototype.measureText = function (t) {
    return "object" == _typeof(t) ? {
      width: t.width,
      height: t.height
    } : this.ctx.measureText(t);
  }, t.prototype.fillText = function (t, e, i) {
    var o = this.ctx;
    "object" == _typeof(t) ? o.drawImage(t, e.x - t.width / 2, e.y - t.height / 2, t.width, t.height) : (o.fillStyle = i, o.textBaseline = "top", o.textAlign = "center", o.fillText(t, e.x, e.y - this.fontSize / 2));
  }, t.prototype.loadImage = function (t) {
    var e = new Image();
    return e.src = t.src, e.width = t.width, e.height = t.height, e;
  }, t.prototype.drawArcText = function (t, e, i, o) {
    var a = this.ctx,
        s = i.x,
        r = i.y,
        n = i.startAngle;
    i = i.endAngle, a.save(), a.translate(s, r), r = i - n;
    var h = n += Math.PI / 2;
    if (n += ((i += Math.PI / 2) - ((s = this.measureText(t)).width / e + n)) / 2, o || !(i - n > r)) if ("string" == typeof t) for (a.rotate(n), o = 0; o < t.length; o++) {
      n = t.charAt(o), s = a.measureText(n), a.save(), a.translate(0, -1 * e), a.fillText(n, 0, 0), a.restore(), a.rotate(s.width / e);
    } else a.rotate((h + i) / 2), a.translate(0, -1 * e), this.fillText(t, {
      x: 0,
      y: 0
    });
    a.restore();
  }, Chart.pluginService.register({
    beforeInit: function beforeInit(e) {
      e.pieceLabel = new t();
    },
    beforeDatasetsUpdate: function beforeDatasetsUpdate(t) {
      t.pieceLabel.beforeDatasetsUpdate(t);
    },
    afterDatasetsDraw: function afterDatasetsDraw(t) {
      t.pieceLabel.afterDatasetsDraw(t);
    }
  }));
}();
/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function (a, b, c) {
  (function (a) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
  })(function (d) {
    "use strict";

    var e = {},
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L = 0;
    f = function f() {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: !1,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: !1,
          enableHighlight: !0,
          highlightLighten: 1.4,
          tooltipSkipNull: !0,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: !1,
          numberFormatter: !1,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: !1,
          disableInteraction: !1
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: c,
          normalRangeMax: c,
          normalRangeColor: "#ccc",
          drawNormalOnTop: !1,
          chartRangeMin: c,
          chartRangeMax: c,
          chartRangeMinX: c,
          chartRangeMaxX: c,
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          zeroColor: c,
          nullColor: c,
          zeroAxis: !0,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          colorMap: c,
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {
            map: {
              "-1": "Loss",
              0: "Draw",
              1: "Win"
            }
          }
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: c,
          thresholdValue: 0,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          tooltipFormat: new h("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: c,
          tooltipFormat: new h("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: {
              r: "Range",
              p: "Performance",
              t: "Target"
            }
          }
        },
        pie: {
          offset: 0,
          sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        box: {
          raw: !1,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: !0,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: c,
          targetColor: "#4a2",
          chartRangeMax: c,
          chartRangeMin: c,
          tooltipFormat: new h("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      };
    }, E = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', g = function g() {
      var a, b;
      return a = function a() {
        this.init.apply(this, arguments);
      }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0](), arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a;
    }, d.SPFormatClass = h = g({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function init(a, b) {
        this.format = a, this.fclass = b;
      },
      render: function render(a, b, d) {
        var e = this,
            f = a,
            g,
            h,
            i,
            j,
            k;
        return this.format.replace(this.fre, function () {
          var a;
          return h = arguments[1], i = arguments[3], g = e.precre.exec(h), g ? (k = g[2], h = g[1]) : k = !1, j = f[h], j === c ? "" : i && b && b[i] ? (a = b[i], a.get ? b[i].get(j) || j : b[i][j] || j) : (n(j) && (d.get("numberFormatter") ? j = d.get("numberFormatter")(j) : j = s(j, k, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), j);
        });
      }
    }), d.spformat = function (a, b) {
      return new h(a, b);
    }, i = function i(a, b, c) {
      return a < b ? b : a > c ? c : a;
    }, j = function j(a, c) {
      var d;
      return c === 2 ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]);
    }, k = function k(a) {
      var b;

      switch (a) {
        case "undefined":
          a = c;
          break;

        case "null":
          a = null;
          break;

        case "true":
          a = !0;
          break;

        case "false":
          a = !1;
          break;

        default:
          b = parseFloat(a), a == b && (a = b);
      }

      return a;
    }, l = function l(a) {
      var b,
          c = [];

      for (b = a.length; b--;) {
        c[b] = k(a[b]);
      }

      return c;
    }, m = function m(a, b) {
      var c,
          d,
          e = [];

      for (c = 0, d = a.length; c < d; c++) {
        a[c] !== b && e.push(a[c]);
      }

      return e;
    }, n = function n(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }, s = function s(a, b, c, e, f) {
      var g, h;
      a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f);

      for (h = g - c; h > 0; h -= c) {
        a.splice(h, 0, e);
      }

      return a.join("");
    }, o = function o(a, b, c) {
      var d;

      for (d = b.length; d--;) {
        if (c && b[d] === null) continue;
        if (b[d] !== a) return !1;
      }

      return !0;
    }, p = function p(a) {
      var b = 0,
          c;

      for (c = a.length; c--;) {
        b += typeof a[c] == "number" ? a[c] : 0;
      }

      return b;
    }, r = function r(a) {
      return d.isArray(a) ? a : [a];
    }, q = function q(b) {
      var c;
      a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c[typeof a.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = b);
    }, d.fn.simpledraw = function (b, e, f, g) {
      var h, i;
      if (f && (h = this.data("_jqs_vcanvas"))) return h;
      if (d.fn.sparkline.canvas === !1) return !1;

      if (d.fn.sparkline.canvas === c) {
        var j = a.createElement("canvas");

        if (!j.getContext || !j.getContext("2d")) {
          if (!a.namespaces || !!a.namespaces.v) return d.fn.sparkline.canvas = !1, !1;
          a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function (a, b, c, d) {
            return new J(a, b, c);
          };
        } else d.fn.sparkline.canvas = function (a, b, c, d) {
          return new I(a, b, c, d);
        };
      }

      return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h;
    }, d.fn.cleardraw = function () {
      var a = this.data("_jqs_vcanvas");
      a && a.reset();
    }, d.RangeMapClass = t = g({
      init: function init(a) {
        var b,
            c,
            d = [];

        for (b in a) {
          a.hasOwnProperty(b) && typeof b == "string" && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = c[0].length === 0 ? -Infinity : parseFloat(c[0]), c[1] = c[1].length === 0 ? Infinity : parseFloat(c[1]), c[2] = a[b], d.push(c));
        }

        this.map = a, this.rangelist = d || !1;
      },
      get: function get(a) {
        var b = this.rangelist,
            d,
            e,
            f;
        if ((f = this.map[a]) !== c) return f;
        if (b) for (d = b.length; d--;) {
          e = b[d];
          if (e[0] <= a && e[1] >= a) return e[2];
        }
        return c;
      }
    }), d.range_map = function (a) {
      return new t(a);
    }, u = g({
      init: function init(a, b) {
        var c = d(a);
        this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight");
      },
      registerSparkline: function registerSparkline(a) {
        this.splist.push(a), this.over && this.updateDisplay();
      },
      registerCanvas: function registerCanvas(a) {
        var b = d(a.canvas);
        this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this));
      },
      reset: function reset(a) {
        this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c);
      },
      mouseclick: function mouseclick(a) {
        var b = d.Event("sparklineClick");
        b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b);
      },
      mouseenter: function mouseenter(b) {
        d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new v(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay();
      },
      mouseleave: function mouseleave() {
        d(a.body).unbind("mousemove.jqs");
        var b = this.splist,
            c = b.length,
            e = !1,
            f,
            g;
        this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null);

        for (g = 0; g < c; g++) {
          f = b[g], f.clearRegionHighlight() && (e = !0);
        }

        e && this.canvas.render();
      },
      mousemove: function mousemove(a) {
        this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay();
      },
      updateDisplay: function updateDisplay() {
        var a = this.splist,
            b = a.length,
            c = !1,
            e = this.$canvas.offset(),
            f = this.currentPageX - e.left,
            g = this.currentPageY - e.top,
            h,
            i,
            j,
            k,
            l;
        if (!this.over) return;

        for (j = 0; j < b; j++) {
          i = a[j], k = i.setRegionHighlight(this.currentEl, f, g), k && (c = !0);
        }

        if (c) {
          l = d.Event("sparklineRegionChange"), l.sparklines = this.splist, this.$el.trigger(l);

          if (this.tooltip) {
            h = "";

            for (j = 0; j < b; j++) {
              i = a[j], h += i.getCurrentRegionTooltip();
            }

            this.tooltip.setContent(h);
          }

          this.disableHighlight || this.canvas.render();
        }

        k === null && this.mouseleave();
      }
    }), v = g({
      sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
      init: function init(b) {
        var c = b.get("tooltipClassname", "jqstooltip"),
            e = this.sizeStyle,
            f;
        this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", {
          id: "jqssizetip",
          style: e,
          "class": c
        }), this.tooltip = d("<div/>", {
          id: "jqstooltip",
          "class": c
        }).appendTo(this.container), f = this.tooltip.offset(), this.offsetLeft = f.left, this.offsetTop = f.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims();
      },
      updateWindowDims: function updateWindowDims() {
        this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition();
      },
      getSize: function getSize(a) {
        this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove();
      },
      setContent: function setContent(a) {
        if (!a) {
          this.tooltip.css("visibility", "hidden"), this.hidden = !0;
          return;
        }

        this.getSize(a), this.tooltip.html(a).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        }), this.hidden && (this.hidden = !1, this.updatePosition());
      },
      updatePosition: function updatePosition(a, b) {
        if (a === c) {
          if (this.mousex === c) return;
          a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop;
        } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;

        if (!this.height || !this.width || this.hidden) return;
        b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({
          left: a,
          top: b
        });
      },
      remove: function remove() {
        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs");
      }
    }), F = function F() {
      q(E);
    }, d(F), K = [], d.fn.sparkline = function (b, e) {
      return this.each(function () {
        var f = new d.fn.sparkline.options(this, e),
            g = d(this),
            h,
            i;

        h = function h() {
          var e, h, i, j, k, l, m;

          if (b === "html" || b === c) {
            m = this.getAttribute(f.get("tagValuesAttribute"));
            if (m === c || m === null) m = g.html();
            e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
          } else e = b;

          h = f.get("width") === "auto" ? e.length * f.get("defaultPixelsPerValue") : f.get("width");

          if (f.get("height") === "auto") {
            if (!f.get("composite") || !d.data(this, "_jqs_vcanvas")) j = a.createElement("span"), j.innerHTML = "a", g.html(j), i = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null;
          } else i = f.get("height");

          f.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? f.get("composite") || k.reset() : (k = new u(this, f), d.data(this, "_jqs_mhandler", k)));

          if (f.get("composite") && !d.data(this, "_jqs_vcanvas")) {
            d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0));
            return;
          }

          l = new d.fn.sparkline[f.get("type")](this, e, f, h, i), l.render(), k && k.registerSparkline(l);
        };

        if (d(this).html() && !f.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
          if (!f.get("composite") && d.data(this, "_jqs_pending")) for (i = K.length; i; i--) {
            K[i - 1][0] == this && K.splice(i - 1, 1);
          }
          K.push([this, h]), d.data(this, "_jqs_pending", !0);
        } else h.call(this);
      });
    }, d.fn.sparkline.defaults = f(), d.sparkline_display_visible = function () {
      var a,
          b,
          c,
          e = [];

      for (b = 0, c = K.length; b < c; b++) {
        a = K[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (K[b][1].call(a), d.data(K[b][0], "_jqs_pending", !1), e.push(b)) : !d(a).closest("html").length && !d.data(a, "_jqs_pending") && (d.data(K[b][0], "_jqs_pending", !1), e.push(b));
      }

      for (b = e.length; b; b--) {
        K.splice(e[b - 1], 1);
      }
    }, d.fn.sparkline.options = g({
      init: function init(a, b) {
        var c, f, g, h;
        this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, f = d.fn.sparkline.defaults, g = f.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || g.tagOptionsPrefix), h = this.getTagSetting("type"), h === e ? c = f[b.type || g.type] : c = f[h], this.mergedOptions = d.extend({}, g, c, b);
      },
      getTagSetting: function getTagSetting(a) {
        var b = this.tagOptionsPrefix,
            d,
            f,
            g,
            h;
        if (b === !1 || b === c) return e;
        if (this.tagValCache.hasOwnProperty(a)) d = this.tagValCache.key;else {
          d = this.tag.getAttribute(b + a);
          if (d === c || d === null) d = e;else if (d.substr(0, 1) === "[") {
            d = d.substr(1, d.length - 2).split(",");

            for (f = d.length; f--;) {
              d[f] = k(d[f].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else if (d.substr(0, 1) === "{") {
            g = d.substr(1, d.length - 2).split(","), d = {};

            for (f = g.length; f--;) {
              h = g[f].split(":", 2), d[h[0].replace(/(^\s*)|(\s*$)/g, "")] = k(h[1].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else d = k(d);
          this.tagValCache.key = d;
        }
        return d;
      },
      get: function get(a, b) {
        var d = this.getTagSetting(a),
            f;
        return d !== e ? d : (f = this.mergedOptions[a]) === c ? b : f;
      }
    }), d.fn.sparkline._base = g({
      disabled: !1,
      init: function init(a, b, e, f, g) {
        this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c;
      },
      initTarget: function initTarget() {
        var a = !this.options.get("disableInteraction");
        (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0;
      },
      render: function render() {
        return this.disabled ? (this.el.innerHTML = "", !1) : !0;
      },
      getRegion: function getRegion(a, b) {},
      setRegionHighlight: function setRegionHighlight(a, b, d) {
        var e = this.currentRegion,
            f = !this.options.get("disableHighlight"),
            g;
        return b > this.canvasWidth || d > this.canvasHeight || b < 0 || d < 0 ? null : (g = this.getRegion(a, b, d), e !== g ? (e !== c && f && this.removeHighlight(), this.currentRegion = g, g !== c && f && this.renderHighlight(), !0) : !1);
      },
      clearRegionHighlight: function clearRegionHighlight() {
        return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1;
      },
      renderHighlight: function renderHighlight() {
        this.changeHighlight(!0);
      },
      removeHighlight: function removeHighlight() {
        this.changeHighlight(!1);
      },
      changeHighlight: function changeHighlight(a) {},
      getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var a = this.options,
            b = "",
            e = [],
            f,
            g,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t;
        if (this.currentRegion === c) return "";
        f = this.getCurrentRegionFields(), q = a.get("tooltipFormatter");
        if (q) return q(this, a, f);
        a.get("tooltipChartTitle") && (b += '<div class="jqs jqstitle">' + a.get("tooltipChartTitle") + "</div>\n"), g = this.options.get("tooltipFormat");
        if (!g) return "";
        d.isArray(g) || (g = [g]), d.isArray(f) || (f = [f]), m = this.options.get("tooltipFormatFieldlist"), n = this.options.get("tooltipFormatFieldlistKey");

        if (m && n) {
          o = [];

          for (l = f.length; l--;) {
            p = f[l][n], (t = d.inArray(p, m)) != -1 && (o[t] = f[l]);
          }

          f = o;
        }

        i = g.length, s = f.length;

        for (l = 0; l < i; l++) {
          r = g[l], typeof r == "string" && (r = new h(r)), j = r.fclass || "jqsfield";

          for (t = 0; t < s; t++) {
            if (!f[t].isNull || !a.get("tooltipSkipNull")) d.extend(f[t], {
              prefix: a.get("tooltipPrefix"),
              suffix: a.get("tooltipSuffix")
            }), k = r.render(f[t], a.get("tooltipValueLookups"), a), e.push('<div class="' + j + '">' + k + "</div>");
          }
        }

        return e.length ? b + e.join("\n") : "";
      },
      getCurrentRegionFields: function getCurrentRegionFields() {},
      calcHighlightColor: function calcHighlightColor(a, c) {
        var d = c.get("highlightColor"),
            e = c.get("highlightLighten"),
            f,
            g,
            h,
            j;
        if (d) return d;

        if (e) {
          f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);

          if (f) {
            h = [], g = a.length === 4 ? 16 : 1;

            for (j = 0; j < 3; j++) {
              h[j] = i(b.round(parseInt(f[j + 1], 16) * g * e), 0, 255);
            }

            return "rgb(" + h.join(",") + ")";
          }
        }

        return a;
      }
    }), w = {
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.target,
            e = this.regionShapes[b],
            f;
        e && (f = this.renderRegion(b, a), d.isArray(f) || d.isArray(e) ? (c.replaceWithShapes(e, f), this.regionShapes[b] = d.map(f, function (a) {
          return a.id;
        })) : (c.replaceWithShape(e, f), this.regionShapes[b] = f.id));
      },
      render: function render() {
        var a = this.values,
            b = this.target,
            c = this.regionShapes,
            e,
            f,
            g,
            h;
        if (!this.cls._super.render.call(this)) return;

        for (g = a.length; g--;) {
          e = this.renderRegion(g);
          if (e) {
            if (d.isArray(e)) {
              f = [];

              for (h = e.length; h--;) {
                e[h].append(), f.push(e[h].id);
              }

              c[g] = f;
            } else e.append(), c[g] = e.id;
          } else c[g] = null;
        }

        b.render();
      }
    }, d.fn.sparkline.line = x = g(d.fn.sparkline._base, {
      type: "line",
      init: function init(a, b, c, d, e) {
        x._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget();
      },
      getRegion: function getRegion(a, b, d) {
        var e,
            f = this.regionMap;

        for (e = f.length; e--;) {
          if (f[e] !== null && b >= f[e][0] && b <= f[e][1]) return f[e][2];
        }

        return c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.yvalues[a] === null,
          x: this.xvalues[a],
          y: this.yvalues[a],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: a
        };
      },
      renderHighlight: function renderHighlight() {
        var a = this.currentRegion,
            b = this.target,
            d = this.vertices[a],
            e = this.options,
            f = e.get("spotRadius"),
            g = e.get("highlightSpotColor"),
            h = e.get("highlightLineColor"),
            i,
            j;
        if (!d) return;
        f && g && (i = b.drawCircle(d[0], d[1], f, c, g), this.highlightSpotId = i.id, b.insertAfterShape(this.lastShapeId, i)), h && (j = b.drawLine(d[0], this.canvasTop, d[0], this.canvasTop + this.canvasHeight, h), this.highlightLineId = j.id, b.insertAfterShape(this.lastShapeId, j));
      },
      removeHighlight: function removeHighlight() {
        var a = this.target;
        this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null);
      },
      scanValues: function scanValues() {
        var a = this.values,
            c = a.length,
            d = this.xvalues,
            e = this.yvalues,
            f = this.yminmax,
            g,
            h,
            i,
            j,
            k;

        for (g = 0; g < c; g++) {
          h = a[g], i = typeof a[g] == "string", j = _typeof(a[g]) == "object" && a[g] instanceof Array, k = i && a[g].split(":"), i && k.length === 2 ? (d.push(Number(k[0])), e.push(Number(k[1])), f.push(Number(k[1]))) : j ? (d.push(h[0]), e.push(h[1]), f.push(h[1])) : (d.push(g), a[g] === null || a[g] === "null" ? e.push(null) : (e.push(Number(h)), f.push(Number(h))));
        }

        this.options.get("xvalues") && (d = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, f), this.miny = this.minyorg = b.min.apply(b, f), this.maxx = b.max.apply(b, d), this.minx = b.min.apply(b, d), this.xvalues = d, this.yvalues = e, this.yminmax = f;
      },
      processRangeOptions: function processRangeOptions() {
        var a = this.options,
            b = a.get("normalRangeMin"),
            d = a.get("normalRangeMax");
        b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"));
      },
      drawNormalRange: function drawNormalRange(a, d, e, f, g) {
        var h = this.options.get("normalRangeMin"),
            i = this.options.get("normalRangeMax"),
            j = d + b.round(e - e * ((i - this.miny) / g)),
            k = b.round(e * (i - h) / g);
        this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append();
      },
      render: function render() {
        var a = this.options,
            e = this.target,
            f = this.canvasWidth,
            g = this.canvasHeight,
            h = this.vertices,
            i = a.get("spotRadius"),
            j = this.regionMap,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            u,
            v,
            w,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K;
        if (!x._super.render.call(this)) return;
        this.scanValues(), this.processRangeOptions(), I = this.xvalues, J = this.yvalues;
        if (!this.yminmax.length || this.yvalues.length < 2) return;
        n = o = 0, k = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, l = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, m = this.yvalues.length - 1, i && (f < i * 4 || g < i * 4) && (i = 0);

        if (i) {
          G = a.get("highlightSpotColor") && !a.get("disableInteraction");
          if (G || a.get("minSpotColor") || a.get("spotColor") && J[m] === this.miny) g -= b.ceil(i);
          if (G || a.get("maxSpotColor") || a.get("spotColor") && J[m] === this.maxy) g -= b.ceil(i), n += b.ceil(i);
          if (G || (a.get("minSpotColor") || a.get("maxSpotColor")) && (J[0] === this.miny || J[0] === this.maxy)) o += b.ceil(i), f -= b.ceil(i);
          if (G || a.get("spotColor") || a.get("minSpotColor") || a.get("maxSpotColor") && (J[m] === this.miny || J[m] === this.maxy)) f -= b.ceil(i);
        }

        g--, a.get("normalRangeMin") !== c && !a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), q = [], r = [q], z = A = null, B = J.length;

        for (K = 0; K < B; K++) {
          s = I[K], v = I[K + 1], u = J[K], w = o + b.round((s - this.minx) * (f / k)), y = K < B - 1 ? o + b.round((v - this.minx) * (f / k)) : f, A = w + (y - w) / 2, j[K] = [z || 0, A, K], z = A, u === null ? K && (J[K - 1] !== null && (q = [], r.push(q)), h.push(null)) : (u < this.miny && (u = this.miny), u > this.maxy && (u = this.maxy), q.length || q.push([w, n + g]), p = [w, n + b.round(g - g * ((u - this.miny) / l))], q.push(p), h.push(p));
        }

        C = [], D = [], E = r.length;

        for (K = 0; K < E; K++) {
          q = r[K], q.length && (a.get("fillColor") && (q.push([q[q.length - 1][0], n + g]), D.push(q.slice(0)), q.pop()), q.length > 2 && (q[0] = [q[0][0], q[1][1]]), C.push(q));
        }

        E = D.length;

        for (K = 0; K < E; K++) {
          e.drawShape(D[K], a.get("fillColor"), a.get("fillColor")).append();
        }

        a.get("normalRangeMin") !== c && a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), E = C.length;

        for (K = 0; K < E; K++) {
          e.drawShape(C[K], a.get("lineColor"), c, a.get("lineWidth")).append();
        }

        if (i && a.get("valueSpots")) {
          F = a.get("valueSpots"), F.get === c && (F = new t(F));

          for (K = 0; K < B; K++) {
            H = F.get(J[K]), H && e.drawCircle(o + b.round((I[K] - this.minx) * (f / k)), n + b.round(g - g * ((J[K] - this.miny) / l)), i, c, H).append();
          }
        }

        i && a.get("spotColor") && J[m] !== null && e.drawCircle(o + b.round((I[I.length - 1] - this.minx) * (f / k)), n + b.round(g - g * ((J[m] - this.miny) / l)), i, c, a.get("spotColor")).append(), this.maxy !== this.minyorg && (i && a.get("minSpotColor") && (s = I[d.inArray(this.minyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.minyorg - this.miny) / l)), i, c, a.get("minSpotColor")).append()), i && a.get("maxSpotColor") && (s = I[d.inArray(this.maxyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.maxyorg - this.miny) / l)), i, c, a.get("maxSpotColor")).append())), this.lastShapeId = e.getLastShapeId(), this.canvasTop = n, e.render();
      }
    }), d.fn.sparkline.bar = y = g(d.fn.sparkline._base, w, {
      type: "bar",
      init: function init(a, e, f, g, h) {
        var j = parseInt(f.get("barWidth"), 10),
            n = parseInt(f.get("barSpacing"), 10),
            o = f.get("chartRangeMin"),
            p = f.get("chartRangeMax"),
            q = f.get("chartRangeClip"),
            r = Infinity,
            s = -Infinity,
            u,
            v,
            w,
            x,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R;

        y._super.init.call(this, a, e, f, g, h);

        for (A = 0, B = e.length; A < B; A++) {
          O = e[A], u = typeof O == "string" && O.indexOf(":") > -1;
          if (u || d.isArray(O)) J = !0, u && (O = e[A] = l(O.split(":"))), O = m(O, null), v = b.min.apply(b, O), w = b.max.apply(b, O), v < r && (r = v), w > s && (s = w);
        }

        this.stacked = J, this.regionShapes = {}, this.barWidth = j, this.barSpacing = n, this.totalBarWidth = j + n, this.width = g = e.length * j + (e.length - 1) * n, this.initTarget(), q && (H = o === c ? -Infinity : o, I = p === c ? Infinity : p), z = [], x = J ? [] : z;
        var S = [],
            T = [];

        for (A = 0, B = e.length; A < B; A++) {
          if (J) {
            K = e[A], e[A] = N = [], S[A] = 0, x[A] = T[A] = 0;

            for (L = 0, M = K.length; L < M; L++) {
              O = N[L] = q ? i(K[L], H, I) : K[L], O !== null && (O > 0 && (S[A] += O), r < 0 && s > 0 ? O < 0 ? T[A] += b.abs(O) : x[A] += O : x[A] += b.abs(O - (O < 0 ? s : r)), z.push(O));
            }
          } else O = q ? i(e[A], H, I) : e[A], O = e[A] = k(O), O !== null && z.push(O);
        }

        this.max = G = b.max.apply(b, z), this.min = F = b.min.apply(b, z), this.stackMax = s = J ? b.max.apply(b, S) : G, this.stackMin = r = J ? b.min.apply(b, z) : F, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < F) && (F = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > G) && (G = f.get("chartRangeMax")), this.zeroAxis = D = f.get("zeroAxis", !0), F <= 0 && G >= 0 && D ? E = 0 : D == 0 ? E = F : F > 0 ? E = F : E = G, this.xaxisOffset = E, C = J ? b.max.apply(b, x) + b.max.apply(b, T) : G - F, this.canvasHeightEf = D && F < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, F < E ? (Q = J && G >= 0 ? s : G, P = (Q - E) / C * this.canvasHeight, P !== b.ceil(P) && (this.canvasHeightEf -= 2, P = b.ceil(P))) : P = this.canvasHeight, this.yoffset = P, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.range = C;
      },
      getRegion: function getRegion(a, d, e) {
        var f = b.floor(d / this.totalBarWidth);
        return f < 0 || f >= this.values.length ? c : f;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion,
            b = r(this.values[a]),
            c = [],
            d,
            e;

        for (e = b.length; e--;) {
          d = b[e], c.push({
            isNull: d === null,
            value: d,
            color: this.calcColor(e, d, a),
            offset: a
          });
        }

        return c;
      },
      calcColor: function calcColor(a, b, e) {
        var f = this.colorMapByIndex,
            g = this.colorMapByValue,
            h = this.options,
            i,
            j;
        return this.stacked ? i = h.get("stackedBarColor") : i = b < 0 ? h.get("negBarColor") : h.get("barColor"), b === 0 && h.get("zeroColor") !== c && (i = h.get("zeroColor")), g && (j = g.get(b)) ? i = j : f && f.length > e && (i = f[e]), d.isArray(i) ? i[a % i.length] : i;
      },
      renderRegion: function renderRegion(a, e) {
        var f = this.values[a],
            g = this.options,
            h = this.xaxisOffset,
            i = [],
            j = this.range,
            k = this.stacked,
            l = this.target,
            m = a * this.totalBarWidth,
            n = this.canvasHeightEf,
            p = this.yoffset,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z;
        f = d.isArray(f) ? f : [f], w = f.length, x = f[0], t = o(null, f), z = o(h, f, !0);
        if (t) return g.get("nullColor") ? (s = e ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g), q = p > 0 ? p - 1 : p, l.drawRect(m, q, this.barWidth - 1, 0, s, s)) : c;
        u = p;

        for (v = 0; v < w; v++) {
          x = f[v];

          if (k && x === h) {
            if (!z || y) continue;
            y = !0;
          }

          j > 0 ? r = b.floor(n * (b.abs(x - h) / j)) + 1 : r = 1, x < h || x === h && p === 0 ? (q = u, u += r) : (q = p - r, p -= r), s = this.calcColor(v, x, a), e && (s = this.calcHighlightColor(s, g)), i.push(l.drawRect(m, q, this.barWidth - 1, r - 1, s, s));
        }

        return i.length === 1 ? i[0] : i;
      }
    }), d.fn.sparkline.tristate = z = g(d.fn.sparkline._base, w, {
      type: "tristate",
      init: function init(a, b, e, f, g) {
        var h = parseInt(e.get("barWidth"), 10),
            i = parseInt(e.get("barSpacing"), 10);
        z._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.initTarget();
      },
      getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.totalBarWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          color: this.calcColor(this.values[a], a),
          offset: a
        };
      },
      calcColor: function calcColor(a, b) {
        var c = this.values,
            d = this.options,
            e = this.colorMapByIndex,
            f = this.colorMapByValue,
            g,
            h;
        return f && (h = f.get(a)) ? g = h : e && e.length > b ? g = e[b] : c[b] < 0 ? g = d.get("negBarColor") : c[b] > 0 ? g = d.get("posBarColor") : g = d.get("zeroBarColor"), g;
      },
      renderRegion: function renderRegion(a, c) {
        var d = this.values,
            e = this.options,
            f = this.target,
            g,
            h,
            i,
            j,
            k,
            l;
        g = f.pixelHeight, i = b.round(g / 2), j = a * this.totalBarWidth, d[a] < 0 ? (k = i, h = i - 1) : d[a] > 0 ? (k = 0, h = i - 1) : (k = i - 1, h = 2), l = this.calcColor(d[a], a);
        if (l === null) return;
        return c && (l = this.calcHighlightColor(l, e)), f.drawRect(j, k, this.barWidth - 1, h - 1, l, l);
      }
    }), d.fn.sparkline.discrete = A = g(d.fn.sparkline._base, w, {
      type: "discrete",
      init: function init(a, e, f, g, h) {
        A._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = f.get("width") === "auto" ? e.length * 2 : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = f.get("lineHeight") === "auto" ? b.round(this.canvasHeight * .3) : f.get("lineHeight"));
      },
      getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.itemWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          offset: a
        };
      },
      renderRegion: function renderRegion(a, c) {
        var d = this.values,
            e = this.options,
            f = this.min,
            g = this.max,
            h = this.range,
            j = this.interval,
            k = this.target,
            l = this.canvasHeight,
            m = this.lineHeight,
            n = l - m,
            o,
            p,
            q,
            r;
        return p = i(d[a], f, g), r = a * j, o = b.round(n - n * ((p - f) / h)), q = e.get("thresholdColor") && p < e.get("thresholdValue") ? e.get("thresholdColor") : e.get("lineColor"), c && (q = this.calcHighlightColor(q, e)), k.drawLine(r, o, r, o + m, q);
      }
    }), d.fn.sparkline.bullet = B = g(d.fn.sparkline._base, {
      type: "bullet",
      init: function init(a, d, e, f, g) {
        var h, i, j;
        B._super.init.call(this, a, d, e, f, g), this.values = d = l(d), j = d.slice(), j[0] = j[0] === null ? j[2] : j[0], j[1] = d[1] === null ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), e.get("base") === c ? h = h < 0 ? h : 0 : h = e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = e.get("width") === "auto" ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget();
      },
      getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          fieldkey: a.substr(0, 1),
          value: this.values[a.substr(1)],
          region: a
        };
      },
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.valueShapes[b],
            d;
        delete this.shapes[c];

        switch (b.substr(0, 1)) {
          case "r":
            d = this.renderRange(b.substr(1), a);
            break;

          case "p":
            d = this.renderPerformance(a);
            break;

          case "t":
            d = this.renderTarget(a);
        }

        this.valueShapes[b] = d.id, this.shapes[d.id] = b, this.target.replaceWithShape(c, d);
      },
      renderRange: function renderRange(a, c) {
        var d = this.values[a],
            e = b.round(this.canvasWidth * ((d - this.min) / this.range)),
            f = this.options.get("rangeColors")[a - 2];
        return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f);
      },
      renderPerformance: function renderPerformance(a) {
        var c = this.values[1],
            d = b.round(this.canvasWidth * ((c - this.min) / this.range)),
            e = this.options.get("performanceColor");
        return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(this.canvasHeight * .3), d - 1, b.round(this.canvasHeight * .4) - 1, e, e);
      },
      renderTarget: function renderTarget(a) {
        var c = this.values[0],
            d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2),
            e = b.round(this.canvasHeight * .1),
            f = this.canvasHeight - e * 2,
            g = this.options.get("targetColor");
        return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g);
      },
      render: function render() {
        var a = this.values.length,
            b = this.target,
            c,
            d;
        if (!B._super.render.call(this)) return;

        for (c = 2; c < a; c++) {
          d = this.renderRange(c).append(), this.shapes[d.id] = "r" + c, this.valueShapes["r" + c] = d.id;
        }

        this.values[1] !== null && (d = this.renderPerformance().append(), this.shapes[d.id] = "p1", this.valueShapes.p1 = d.id), this.values[0] !== null && (d = this.renderTarget().append(), this.shapes[d.id] = "t0", this.valueShapes.t0 = d.id), b.render();
      }
    }), d.fn.sparkline.pie = C = g(d.fn.sparkline._base, {
      type: "pie",
      init: function init(a, c, e, f, g) {
        var h = 0,
            i;
        C._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), e.get("width") === "auto" && (this.width = this.height);
        if (c.length > 0) for (i = c.length; i--;) {
          h += c[i];
        }
        this.total = h, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          percent: this.values[a] / this.total * 100,
          color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
          offset: a
        };
      },
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
            c = this.renderSlice(b, a),
            d = this.valueShapes[b];
        delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b;
      },
      renderSlice: function renderSlice(a, d) {
        var e = this.target,
            f = this.options,
            g = this.radius,
            h = f.get("borderWidth"),
            i = f.get("offset"),
            j = 2 * b.PI,
            k = this.values,
            l = this.total,
            m = i ? 2 * b.PI * (i / 360) : 0,
            n,
            o,
            p,
            q,
            r;
        q = k.length;

        for (p = 0; p < q; p++) {
          n = m, o = m, l > 0 && (o = m + j * (k[p] / l));
          if (a === p) return r = f.get("sliceColors")[p % f.get("sliceColors").length], d && (r = this.calcHighlightColor(r, f)), e.drawPieSlice(g, g, g - h, n, o, c, r);
          m = o;
        }
      },
      render: function render() {
        var a = this.target,
            d = this.values,
            e = this.options,
            f = this.radius,
            g = e.get("borderWidth"),
            h,
            i;
        if (!C._super.render.call(this)) return;
        g && a.drawCircle(f, f, b.floor(f - g / 2), e.get("borderColor"), c, g).append();

        for (i = d.length; i--;) {
          d[i] && (h = this.renderSlice(i).append(), this.valueShapes[i] = h.id, this.shapes[h.id] = i);
        }

        a.render();
      }
    }), d.fn.sparkline.box = D = g(d.fn.sparkline._base, {
      type: "box",
      init: function init(a, b, c, e, f) {
        D._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = c.get("width") === "auto" ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1);
      },
      getRegion: function getRegion() {
        return 1;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = [{
          field: "lq",
          value: this.quartiles[0]
        }, {
          field: "med",
          value: this.quartiles[1]
        }, {
          field: "uq",
          value: this.quartiles[2]
        }];
        return this.loutlier !== c && a.push({
          field: "lo",
          value: this.loutlier
        }), this.routlier !== c && a.push({
          field: "ro",
          value: this.routlier
        }), this.lwhisker !== c && a.push({
          field: "lw",
          value: this.lwhisker
        }), this.rwhisker !== c && a.push({
          field: "rw",
          value: this.rwhisker
        }), a;
      },
      render: function render() {
        var a = this.target,
            d = this.values,
            e = d.length,
            f = this.options,
            g = this.canvasWidth,
            h = this.canvasHeight,
            i = f.get("chartRangeMin") === c ? b.min.apply(b, d) : f.get("chartRangeMin"),
            k = f.get("chartRangeMax") === c ? b.max.apply(b, d) : f.get("chartRangeMax"),
            l = 0,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w;
        if (!D._super.render.call(this)) return;
        if (f.get("raw")) f.get("showOutliers") && d.length > 5 ? (n = d[0], m = d[1], p = d[2], q = d[3], r = d[4], s = d[5], t = d[6]) : (m = d[0], p = d[1], q = d[2], r = d[3], s = d[4]);else {
          d.sort(function (a, b) {
            return a - b;
          }), p = j(d, 1), q = j(d, 2), r = j(d, 3), o = r - p;

          if (f.get("showOutliers")) {
            m = s = c;

            for (u = 0; u < e; u++) {
              m === c && d[u] > p - o * f.get("outlierIQR") && (m = d[u]), d[u] < r + o * f.get("outlierIQR") && (s = d[u]);
            }

            n = d[0], t = d[e - 1];
          } else m = d[0], s = d[e - 1];
        }
        this.quartiles = [p, q, r], this.lwhisker = m, this.rwhisker = s, this.loutlier = n, this.routlier = t, w = g / (k - i + 1), f.get("showOutliers") && (l = b.ceil(f.get("spotRadius")), g -= 2 * b.ceil(f.get("spotRadius")), w = g / (k - i + 1), n < m && a.drawCircle((n - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(), t > s && a.drawCircle((t - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()), a.drawRect(b.round((p - i) * w + l), b.round(h * .1), b.round((r - p) * w), b.round(h * .8), f.get("boxLineColor"), f.get("boxFillColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 2), b.round((p - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 4), b.round((m - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 2), b.round((r - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 4), b.round((s - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((q - i) * w + l), b.round(h * .1), b.round((q - i) * w + l), b.round(h * .9), f.get("medianColor")).append(), f.get("target") && (v = b.ceil(f.get("spotRadius")), a.drawLine(b.round((f.get("target") - i) * w + l), b.round(h / 2 - v), b.round((f.get("target") - i) * w + l), b.round(h / 2 + v), f.get("targetColor")).append(), a.drawLine(b.round((f.get("target") - i) * w + l - v), b.round(h / 2), b.round((f.get("target") - i) * w + l + v), b.round(h / 2), f.get("targetColor")).append()), a.render();
      }
    }), G = g({
      init: function init(a, b, c, d) {
        this.target = a, this.id = b, this.type = c, this.args = d;
      },
      append: function append() {
        return this.target.appendShape(this), this;
      }
    }), H = g({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function init(a, b, c) {
        if (!a) return;
        this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this);
      },
      drawLine: function drawLine(a, b, c, d, e, f) {
        return this.drawShape([[a, b], [c, d]], e, f);
      },
      drawShape: function drawShape(a, b, c, d) {
        return this._genShape("Shape", [a, b, c, d]);
      },
      drawCircle: function drawCircle(a, b, c, d, e, f) {
        return this._genShape("Circle", [a, b, c, d, e, f]);
      },
      drawPieSlice: function drawPieSlice(a, b, c, d, e, f, g) {
        return this._genShape("PieSlice", [a, b, c, d, e, f, g]);
      },
      drawRect: function drawRect(a, b, c, d, e, f) {
        return this._genShape("Rect", [a, b, c, d, e, f]);
      },
      getElement: function getElement() {
        return this.canvas;
      },
      getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      },
      reset: function reset() {
        alert("reset not implemented");
      },
      _insert: function _insert(a, b) {
        d(b).html(a);
      },
      _calculatePixelDims: function _calculatePixelDims(a, b, c) {
        var e;
        e = this._pxregex.exec(b), e ? this.pixelHeight = e[1] : this.pixelHeight = d(c).height(), e = this._pxregex.exec(a), e ? this.pixelWidth = e[1] : this.pixelWidth = d(c).width();
      },
      _genShape: function _genShape(a, b) {
        var c = L++;
        return b.unshift(c), new G(this, c, a, b);
      },
      appendShape: function appendShape(a) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function replaceWithShape(a, b) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function insertAfterShape(a, b) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function removeShapeId(a) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function getShapeAt(a, b, c) {
        alert("getShapeAt not implemented");
      },
      render: function render() {
        alert("render not implemented");
      }
    }), I = g(H, {
      init: function init(b, e, f, g) {
        I._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({
          display: "inline-block",
          width: b,
          height: e,
          verticalAlign: "top"
        }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        });
      },
      _getContext: function _getContext(a, b, d) {
        var e = this.canvas.getContext("2d");
        return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e;
      },
      reset: function reset() {
        var a = this._getContext();

        a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c;
      },
      _drawShape: function _drawShape(a, b, d, e, f) {
        var g = this._getContext(d, e, f),
            h,
            i;

        g.beginPath(), g.moveTo(b[0][0] + .5, b[0][1] + .5);

        for (h = 1, i = b.length; h < i; h++) {
          g.lineTo(b[h][0] + .5, b[h][1] + .5);
        }

        d !== c && g.stroke(), e !== c && g.fill(), this.targetX !== c && this.targetY !== c && g.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      },
      _drawCircle: function _drawCircle(a, d, e, f, g, h, i) {
        var j = this._getContext(g, h, i);

        j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill();
      },
      _drawPieSlice: function _drawPieSlice(a, b, d, e, f, g, h, i) {
        var j = this._getContext(h, i);

        j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      },
      _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b + d, c], [b + d, c + e], [b, c + e], [b, c]], f, g);
      },
      appendShape: function appendShape(a) {
        return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id;
      },
      replaceWithShape: function replaceWithShape(a, b) {
        var c = this.shapeseq,
            d;
        this.shapes[b.id] = b;

        for (d = c.length; d--;) {
          c[d] == a && (c[d] = b.id);
        }

        delete this.shapes[a];
      },
      replaceWithShapes: function replaceWithShapes(a, b) {
        var c = this.shapeseq,
            d = {},
            e,
            f,
            g;

        for (f = a.length; f--;) {
          d[a[f]] = !0;
        }

        for (f = c.length; f--;) {
          e = c[f], d[e] && (c.splice(f, 1), delete this.shapes[e], g = f);
        }

        for (f = b.length; f--;) {
          c.splice(g, 0, b[f].id), this.shapes[b[f].id] = b[f];
        }
      },
      insertAfterShape: function insertAfterShape(a, b) {
        var c = this.shapeseq,
            d;

        for (d = c.length; d--;) {
          if (c[d] === a) {
            c.splice(d + 1, 0, b.id), this.shapes[b.id] = b;
            return;
          }
        }
      },
      removeShapeId: function removeShapeId(a) {
        var b = this.shapeseq,
            c;

        for (c = b.length; c--;) {
          if (b[c] === a) {
            b.splice(c, 1);
            break;
          }
        }

        delete this.shapes[a];
      },
      getShapeAt: function getShapeAt(a, b, c) {
        return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId;
      },
      render: function render() {
        var a = this.shapeseq,
            b = this.shapes,
            c = a.length,
            d = this._getContext(),
            e,
            f,
            g;

        d.clearRect(0, 0, this.pixelWidth, this.pixelHeight);

        for (g = 0; g < c; g++) {
          e = a[g], f = b[e], this["_draw" + f.type].apply(this, f.args);
        }

        this.interact || (this.shapes = {}, this.shapeseq = []);
      }
    }), J = g(H, {
      init: function init(b, c, e) {
        var f;
        J._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: b,
          height: c,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = "";
      },
      _drawShape: function _drawShape(a, b, d, e, f) {
        var g = [],
            h,
            i,
            j,
            k,
            l,
            m,
            n;

        for (n = 0, m = b.length; n < m; n++) {
          g[n] = "" + b[n][0] + "," + b[n][1];
        }

        return h = g.splice(0, 1), f = f === c ? 1 : f, i = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', j = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', k = g[0] === g[g.length - 1] ? "x " : "", l = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + h + " l " + g.join(", ") + " " + k + 'e">' + " </v:shape>", l;
      },
      _drawCircle: function _drawCircle(a, b, d, e, f, g, h) {
        var i, j, k;
        return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + e * 2 + "px; height:" + e * 2 + 'px"></v:oval>', k;
      },
      _drawPieSlice: function _drawPieSlice(a, d, e, f, g, h, i, j) {
        var k, l, m, n, o, p, q, r;
        if (g === h) return "";
        h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f);

        if (l === n && m === o) {
          if (h - g < b.PI) return "";
          l = n = d + f, m = o = e;
        }

        return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e">' + " </v:shape>", r);
      },
      _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b, c + e], [b + d, c + e], [b + d, c], [b, c]], f, g);
      },
      reset: function reset() {
        this.group.innerHTML = "";
      },
      appendShape: function appendShape(a) {
        var b = this["_draw" + a.type].apply(this, a.args);
        return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id;
      },
      replaceWithShape: function replaceWithShape(a, b) {
        var c = d("#jqsshape" + a),
            e = this["_draw" + b.type].apply(this, b.args);
        c[0].outerHTML = e;
      },
      replaceWithShapes: function replaceWithShapes(a, b) {
        var c = d("#jqsshape" + a[0]),
            e = "",
            f = b.length,
            g;

        for (g = 0; g < f; g++) {
          e += this["_draw" + b[g].type].apply(this, b[g].args);
        }

        c[0].outerHTML = e;

        for (g = 1; g < a.length; g++) {
          d("#jqsshape" + a[g]).remove();
        }
      },
      insertAfterShape: function insertAfterShape(a, b) {
        var c = d("#jqsshape" + a),
            e = this["_draw" + b.type].apply(this, b.args);
        c[0].insertAdjacentHTML("afterEnd", e);
      },
      removeShapeId: function removeShapeId(a) {
        var b = d("#jqsshape" + a);
        this.group.removeChild(b[0]);
      },
      getShapeAt: function getShapeAt(a, b, c) {
        var d = a.id.substr(8);
        return d;
      },
      render: function render() {
        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0);
      }
    });
  });
})(document, Math);
/** * circles - v0.0.6 - 2015-11-27 * * Copyright (c) 2015 lugolabs * Licensed */


!function (a, b) {
  "object" == ( false ? 0 : _typeof(exports)) ? module.exports = b() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
    setTimeout(a, 1e3 / 60);
  },
      b = function b(a) {
    var b = a.id;

    if (this._el = document.getElementById(b), null !== this._el) {
      this._radius = a.radius || 10, this._duration = void 0 === a.duration ? 500 : a.duration, this._value = 0, this._maxValue = a.maxValue || 100, this._text = void 0 === a.text ? function (a) {
        return this.htmlifyNumber(a);
      } : a.text, this._strokeWidth = a.width || 10, this._colors = a.colors || ["#EEE", "#F00"], this._svg = null, this._movingPath = null, this._wrapContainer = null, this._textContainer = null, this._wrpClass = a.wrpClass || "circles-wrp", this._textClass = a.textClass || "circles-text", this._valClass = a.valueStrokeClass || "circles-valueStroke", this._maxValClass = a.maxValueStrokeClass || "circles-maxValueStroke", this._styleWrapper = a.styleWrapper === !1 ? !1 : !0, this._styleText = a.styleText === !1 ? !1 : !0;
      var c = Math.PI / 180 * 270;
      this._start = -Math.PI / 180 * 90, this._startPrecise = this._precise(this._start), this._circ = c - this._start, this._generate().update(a.value || 0);
    }
  };

  return b.prototype = {
    VERSION: "0.0.6",
    _generate: function _generate() {
      return this._svgSize = 2 * this._radius, this._radiusAdjusted = this._radius - this._strokeWidth / 2, this._generateSvg()._generateText()._generateWrapper(), this._el.innerHTML = "", this._el.appendChild(this._wrapContainer), this;
    },
    _setPercentage: function _setPercentage(a) {
      this._movingPath.setAttribute("d", this._calculatePath(a, !0)), this._textContainer.innerHTML = this._getText(this.getValueFromPercent(a));
    },
    _generateWrapper: function _generateWrapper() {
      return this._wrapContainer = document.createElement("div"), this._wrapContainer.className = this._wrpClass, this._styleWrapper && (this._wrapContainer.style.position = "relative", this._wrapContainer.style.display = "inline-block"), this._wrapContainer.appendChild(this._svg), this._wrapContainer.appendChild(this._textContainer), this;
    },
    _generateText: function _generateText() {
      if (this._textContainer = document.createElement("div"), this._textContainer.className = this._textClass, this._styleText) {
        var a = {
          position: "absolute",
          top: 0,
          left: 0,
          textAlign: "center",
          width: "100%",
          fontSize: .7 * this._radius + "px",
          height: this._svgSize + "px",
          lineHeight: this._svgSize + "px"
        };

        for (var b in a) {
          this._textContainer.style[b] = a[b];
        }
      }

      return this._textContainer.innerHTML = this._getText(0), this;
    },
    _getText: function _getText(a) {
      return this._text ? (void 0 === a && (a = this._value), a = parseFloat(a.toFixed(2)), "function" == typeof this._text ? this._text.call(this, a) : this._text) : "";
    },
    _generateSvg: function _generateSvg() {
      return this._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._svg.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this._svg.setAttribute("width", this._svgSize), this._svg.setAttribute("height", this._svgSize), this._generatePath(100, !1, this._colors[0], this._maxValClass)._generatePath(1, !0, this._colors[1], this._valClass), this._movingPath = this._svg.getElementsByTagName("path")[1], this;
    },
    _generatePath: function _generatePath(a, b, c, d) {
      var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return e.setAttribute("fill", "transparent"), e.setAttribute("stroke", c), e.setAttribute("stroke-width", this._strokeWidth), e.setAttribute("d", this._calculatePath(a, b)), e.setAttribute("class", d), this._svg.appendChild(e), this;
    },
    _calculatePath: function _calculatePath(a, b) {
      var c = this._start + a / 100 * this._circ,
          d = this._precise(c);

      return this._arc(d, b);
    },
    _arc: function _arc(a, b) {
      var c = a - .001,
          d = a - this._startPrecise < Math.PI ? 0 : 1;
      return ["M", this._radius + this._radiusAdjusted * Math.cos(this._startPrecise), this._radius + this._radiusAdjusted * Math.sin(this._startPrecise), "A", this._radiusAdjusted, this._radiusAdjusted, 0, d, 1, this._radius + this._radiusAdjusted * Math.cos(c), this._radius + this._radiusAdjusted * Math.sin(c), b ? "" : "Z"].join(" ");
    },
    _precise: function _precise(a) {
      return Math.round(1e3 * a) / 1e3;
    },
    htmlifyNumber: function htmlifyNumber(a, b, c) {
      b = b || "circles-integer", c = c || "circles-decimals";
      var d = (a + "").split("."),
          e = '<span class="' + b + '">' + d[0] + "</span>";
      return d.length > 1 && (e += '.<span class="' + c + '">' + d[1].substring(0, 2) + "</span>"), e;
    },
    updateRadius: function updateRadius(a) {
      return this._radius = a, this._generate().update(!0);
    },
    updateWidth: function updateWidth(a) {
      return this._strokeWidth = a, this._generate().update(!0);
    },
    updateColors: function updateColors(a) {
      this._colors = a;

      var b = this._svg.getElementsByTagName("path");

      return b[0].setAttribute("stroke", a[0]), b[1].setAttribute("stroke", a[1]), this;
    },
    getPercent: function getPercent() {
      return 100 * this._value / this._maxValue;
    },
    getValueFromPercent: function getValueFromPercent(a) {
      return this._maxValue * a / 100;
    },
    getValue: function getValue() {
      return this._value;
    },
    getMaxValue: function getMaxValue() {
      return this._maxValue;
    },
    update: function update(b, c) {
      if (b === !0) return this._setPercentage(this.getPercent()), this;
      if (this._value == b || isNaN(b)) return this;
      void 0 === c && (c = this._duration);
      var d,
          e,
          f,
          g,
          h = this,
          i = h.getPercent(),
          j = 1;
      return this._value = Math.min(this._maxValue, Math.max(0, b)), c ? (d = h.getPercent(), e = d > i, j += d % 1, f = Math.floor(Math.abs(d - i) / j), g = c / f, function k(b) {
        if (e ? i += j : i -= j, e && i >= d || !e && d >= i) return void a(function () {
          h._setPercentage(d);
        });
        a(function () {
          h._setPercentage(i);
        });
        var c = Date.now(),
            f = c - b;
        f >= g ? k(c) : setTimeout(function () {
          k(Date.now());
        }, g - f);
      }(Date.now()), this) : (this._setPercentage(this.getPercent()), this);
    }
  }, b.create = function (a) {
    return new b(a);
  }, b;
});
"use strict";

!function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (t) {
  function s(s) {
    var e = !1;
    return t('[data-notify="container"]').each(function (i, n) {
      var a = t(n),
          o = a.find('[data-notify="title"]').text().trim(),
          r = a.find('[data-notify="message"]').html().trim(),
          l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(),
          d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(),
          g = a.hasClass("alert-" + s.settings.type);
      return l && d && g && (e = !0), !e;
    }), e;
  }

  function e(e, n, a) {
    var o = {
      content: {
        message: "object" == _typeof(n) ? n.message : n,
        title: n.title ? n.title : "",
        icon: n.icon ? n.icon : "",
        url: n.url ? n.url : "#",
        target: n.target ? n.target : "-"
      }
    };
    a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, i, a), this._defaults = i, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
      start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
      end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
    }, "number" == typeof this.settings.offset && (this.settings.offset = {
      x: this.settings.offset,
      y: this.settings.offset
    }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init();
  }

  var i = {
    element: "body",
    position: null,
    type: "info",
    allow_dismiss: !0,
    allow_duplicates: !0,
    newest_on_top: !1,
    showProgressbar: !1,
    placement: {
      from: "top",
      align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 5e3,
    timer: 1e3,
    url_target: "_blank",
    mouse_over: null,
    animate: {
      enter: "animated fadeInDown",
      exit: "animated fadeOutUp"
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    icon_type: "class",
    template: '<div data-notify="container" class="col-10 col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
  };
  String.format = function () {
    for (var t = arguments[0], s = 1; s < arguments.length; s++) {
      t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]);
    }

    return t;
  }, t.extend(e.prototype, {
    init: function init() {
      var t = this;
      this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
        $ele: this.$ele,
        update: function update(s, e) {
          var i = {};
          "string" == typeof s ? i[s] = e : i = s;

          for (var n in i) {
            switch (n) {
              case "type":
                this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[n], this.$ele.addClass("alert-" + i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[n]);
                break;

              case "icon":
                var a = this.$ele.find('[data-notify="icon"]');
                "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(i[n]) : (a.is("img") || a.find("img"), a.attr("src", i[n]));
                break;

              case "progress":
                var o = t.settings.delay - t.settings.delay * (i[n] / 100);
                this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[n]).css("width", i[n] + "%");
                break;

              case "url":
                this.$ele.find('[data-notify="url"]').attr("href", i[n]);
                break;

              case "target":
                this.$ele.find('[data-notify="url"]').attr("target", i[n]);
                break;

              default:
                this.$ele.find('[data-notify="' + n + '"]').html(i[n]);
            }
          }

          var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
          t.reposition(r);
        },
        close: function close() {
          t.close();
        }
      };
    },
    buildNotify: function buildNotify() {
      var s = this.settings.content;
      this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove();
    },
    setIcon: function setIcon() {
      "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
    },
    styleDismiss: function styleDismiss() {
      this.$ele.find('[data-notify="dismiss"]').css({
        position: "absolute",
        right: "10px",
        top: "5px",
        zIndex: this.settings.z_index + 2
      });
    },
    styleURL: function styleURL() {
      this.$ele.find('[data-notify="url"]').css({
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: this.settings.z_index + 1
      });
    },
    placement: function placement() {
      var s = this,
          e = this.settings.offset.y,
          i = {
        display: "inline-block",
        margin: "0px auto",
        paddingLeft: "65px",
        position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
        transition: "all .5s ease-in-out",
        zIndex: this.settings.z_index
      },
          n = !1,
          a = this.settings;

      switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
        e = Math.max(e, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing));
      }), this.settings.newest_on_top === !0 && (e = this.settings.offset.y), i[this.settings.placement.from] = e + "px", this.settings.placement.align) {
        case "left":
        case "right":
          i[this.settings.placement.align] = this.settings.offset.x + "px";
          break;

        case "center":
          i.left = 0, i.right = 0;
      }

      this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, e) {
        s.$ele[0].style[e + "AnimationIterationCount"] = 1;
      }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(e)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () {
        n = !0;
      }).one(this.animations.end, function () {
        s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this);
      }), setTimeout(function () {
        n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this);
      }, 600);
    },
    bind: function bind() {
      var s = this;

      if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
        s.close();
      }), this.$ele.mouseover(function () {
        t(this).data("data-hover", "true");
      }).mouseout(function () {
        t(this).data("data-hover", "false");
      }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
        s.$ele.data("notify-delay", s.settings.delay);
        var e = setInterval(function () {
          var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;

          if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) {
            var i = (s.settings.delay - t) / s.settings.delay * 100;
            s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%");
          }

          t <= -s.settings.timer && (clearInterval(e), s.close());
        }, s.settings.timer);
      }
    },
    close: function close() {
      var s = this,
          e = parseInt(this.$ele.css(this.settings.placement.from)),
          i = !1;
      this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(e), t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () {
        i = !0;
      }).one(this.animations.end, function () {
        t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this);
      }), setTimeout(function () {
        i || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele));
      }, 600);
    },
    reposition: function reposition(s) {
      var e = this,
          i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
          n = this.$ele.nextAll(i);
      this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)), n.each(function () {
        t(this).css(e.settings.placement.from, s), s = parseInt(s) + parseInt(e.settings.spacing) + t(this).outerHeight();
      });
    }
  }), t.notify = function (t, s) {
    var i = new e(this, t, s);
    return i.notify;
  }, t.notifyDefaults = function (s) {
    return i = t.extend(!0, {}, i, s);
  }, t.notifyClose = function (s) {
    "warning" === s && (s = "danger"), "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click");
  }, t.notifyCloseExcept = function (s) {
    "warning" === s && (s = "danger"), "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click");
  };
});
"use strict";

function layoutsColors() {
  $(".sidebar").is("[data-background-color]") ? $("html").addClass("sidebar-color") : $("html").removeClass("sidebar-color"), $("body").is("[data-image]") ? $("body").css("background-image", 'url("' + $("body").attr("data-image") + '")') : $("body").css("background-image", "");
}

function legendClickCallback(a) {
  for (var e = (a = a || window.event).target || a.srcElement; "LI" !== e.nodeName;) {
    e = e.parentElement;
  }

  var s = e.parentElement,
      o = parseInt(s.classList[0].split("-")[0], 10),
      i = Chart.instances[o],
      n = Array.prototype.slice.call(s.children).indexOf(e);
  i.legend.options.onClick.call(i, a, i.legend.legendItems[n]), i.isDatasetVisible(n) ? e.classList.remove("hidden") : e.classList.add("hidden");
}

function readURL(a) {
  if (a.files && a.files[0]) {
    var e = new FileReader();
    e.onload = function (e) {
      $(a).parent(".input-file-image").find(".img-upload-preview").attr("src", e.target.result);
    }, e.readAsDataURL(a.files[0]);
  }
}

function showPassword(a) {
  var e = $(a).parent().find("input");
  "password" === e.attr("type") ? e.attr("type", "text") : e.attr("type", "password");
}

function changeContainer() {
  1 == showSignIn ? containerSignIn.css("display", "block") : containerSignIn.css("display", "none"), 1 == showSignUp ? containerSignUp.css("display", "block") : containerSignUp.css("display", "none");
}

$(".nav-search .input-group > input").focus(function (a) {
  $(this).parent().addClass("focus");
}).blur(function (a) {
  $(this).parent().removeClass("focus");
}), $(function () {
  $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), layoutsColors();
}), $(document).ready(function () {
  $(".btn-refresh-card").on("click", function () {
    var a = $(this).parents(".card");
    a.length && (a.addClass("is-loading"), setTimeout(function () {
      a.removeClass("is-loading");
    }, 3e3));
  });
  var a = $(".sidebar .scrollbar");
  a.length > 0 && a.scrollbar();
  var e = $(".main-panel .content-scroll");
  e.length > 0 && e.scrollbar();
  var s = $(".messages-scroll");
  s.length > 0 && s.scrollbar();
  var o = $(".tasks-scroll");
  o.length > 0 && o.scrollbar();
  var i = $(".quick-scroll");
  i.length > 0 && i.scrollbar();
  var n = $(".message-notif-scroll");
  n.length > 0 && n.scrollbar();
  var r = $(".notif-scroll");
  r.length > 0 && r.scrollbar();
  var l = $(".quick-actions-scroll");
  l.length > 0 && l.scrollbar();
  var t = $(".dropdown-user-scroll");
  t.length > 0 && t.scrollbar(), $(".scroll-bar").draggable(), $("#search-nav").on("shown.bs.collapse", function () {
    $(".nav-search .form-control").focus();
  });
  var c = !1,
      d = !1,
      g = !1,
      p = !1,
      h = 0,
      m = 0,
      u = 0,
      v = 0,
      f = 0,
      b = 0;

  if (!c) {
    (C = $(".sidenav-toggler")).on("click", function () {
      1 == h ? ($("html").removeClass("nav_open"), C.removeClass("toggled"), h = 0) : ($("html").addClass("nav_open"), C.addClass("toggled"), h = 1);
    }), c = !0;
  }

  if (!m) {
    var C = $(".quick-sidebar-toggler");
    C.on("click", function () {
      1 == h ? ($("html").removeClass("quick_sidebar_open"), $(".quick-sidebar-overlay").remove(), C.removeClass("toggled"), m = 0) : ($("html").addClass("quick_sidebar_open"), C.addClass("toggled"), $('<div class="quick-sidebar-overlay"></div>').insertAfter(".quick-sidebar"), m = 1);
    }), $(".wrapper").mouseup(function (a) {
      var e = $(".quick-sidebar");
      a.target.className == e.attr("class") || e.has(a.target).length || ($("html").removeClass("quick_sidebar_open"), $(".quick-sidebar-toggler").removeClass("toggled"), $(".quick-sidebar-overlay").remove(), m = 0);
    }), $(".close-quick-sidebar").on("click", function () {
      $("html").removeClass("quick_sidebar_open"), $(".quick-sidebar-toggler").removeClass("toggled"), $(".quick-sidebar-overlay").remove(), m = 0;
    }), m = !0;
  }

  if (!d) {
    var w = $(".topbar-toggler");
    w.on("click", function () {
      1 == u ? ($("html").removeClass("topbar_open"), w.removeClass("toggled"), u = 0) : ($("html").addClass("topbar_open"), w.addClass("toggled"), u = 1);
    }), d = !0;
  }

  if (!g) {
    var k = $(".toggle-sidebar");
    $(".wrapper").hasClass("sidebar_minimize") && (v = 1, k.addClass("toggled"), k.html('<i class="icon-options-vertical"></i>')), k.on("click", function () {
      1 == v ? ($(".wrapper").removeClass("sidebar_minimize"), k.removeClass("toggled"), k.html('<i class="icon-menu"></i>'), v = 0) : ($(".wrapper").addClass("sidebar_minimize"), k.addClass("toggled"), k.html('<i class="icon-options-vertical"></i>'), v = 1), $(window).resize();
    }), g = !0;
  }

  if (!p) {
    var _ = $(".page-sidebar-toggler");

    _.on("click", function () {
      1 == f ? ($("html").removeClass("pagesidebar_open"), _.removeClass("toggled"), f = 0) : ($("html").addClass("pagesidebar_open"), _.addClass("toggled"), f = 1);
    });

    $(".page-sidebar .back").on("click", function () {
      $("html").removeClass("pagesidebar_open"), _.removeClass("toggled"), f = 0;
    }), p = !0;
  }

  var y = $(".sidenav-overlay-toggler");
  $(".wrapper").hasClass("is-show") && (b = 1, y.addClass("toggled"), y.html('<i class="icon-options-vertical"></i>')), y.on("click", function () {
    1 == b ? ($(".wrapper").removeClass("is-show"), y.removeClass("toggled"), y.html('<i class="icon-menu"></i>'), b = 0) : ($(".wrapper").addClass("is-show"), y.addClass("toggled"), y.html('<i class="icon-options-vertical"></i>'), b = 1), $(window).resize();
  }), g = !0, $(".sidebar").hover(function () {
    $(".wrapper").hasClass("sidebar_minimize") && $(".wrapper").addClass("sidebar_minimize_hover");
  }, function () {
    $(".wrapper").hasClass("sidebar_minimize") && $(".wrapper").removeClass("sidebar_minimize_hover");
  }), $(".nav-item a").on("click", function () {
    $(this).parent().find(".collapse").hasClass("show") ? $(this).parent().removeClass("submenu") : $(this).parent().addClass("submenu");
  }), $(".messages-contact .user a").on("click", function () {
    $(".tab-chat").addClass("show-chat");
  }), $(".messages-wrapper .return").on("click", function () {
    $(".tab-chat").removeClass("show-chat");
  }), $('[data-select="checkbox"]').change(function () {
    var a = $(this).attr("data-target");
    $(a).prop("checked", $(this).prop("checked"));
  }), $(".form-group-default .form-control").focus(function () {
    $(this).parent().addClass("active");
  }).blur(function () {
    $(this).parent().removeClass("active");
  });
}), $('.input-file-image input[type="file"').change(function () {
  readURL(this);
}), $(".show-password").on("click", function () {
  showPassword(this);
});
var containerSignIn = $(".container-login"),
    containerSignUp = $(".container-signup"),
    showSignIn = !0,
    showSignUp = !1;
$("#show-signup").on("click", function () {
  showSignUp = !0, showSignIn = !1, changeContainer();
}), $("#show-signin").on("click", function () {
  showSignUp = !1, showSignIn = !0, changeContainer();
}), changeContainer(), $(".form-floating-label .form-control").keyup(function () {
  "" !== $(this).val() ? $(this).addClass("filled") : $(this).removeClass("filled");
});
"use strict"; // Setting Color


$(window).resize(function () {
  $(window).width();
});
$('.changeBodyBackgroundFullColor').on('click', function () {
  if ($(this).attr('data-color') == 'default') {
    $('body').removeAttr('data-background-full');
  } else {
    $('body').attr('data-background-full', $(this).attr('data-color'));
  }

  $(this).parent().find('.changeBodyBackgroundFullColor').removeClass("selected");
  $(this).addClass("selected");
  layoutsColors();
});
$('.changeLogoHeaderColor').on('click', function () {
  if ($(this).attr('data-color') == 'default') {
    $('.logo-header').removeAttr('data-background-color');
  } else {
    $('.logo-header').attr('data-background-color', $(this).attr('data-color'));
  }

  $(this).parent().find('.changeLogoHeaderColor').removeClass("selected");
  $(this).addClass("selected");
  customCheckColor();
  layoutsColors();
});
$('.changeTopBarColor').on('click', function () {
  if ($(this).attr('data-color') == 'default') {
    $('.main-header .navbar-header').removeAttr('data-background-color');
  } else {
    $('.main-header .navbar-header').attr('data-background-color', $(this).attr('data-color'));
  }

  $(this).parent().find('.changeTopBarColor').removeClass("selected");
  $(this).addClass("selected");
  layoutsColors();
});
$('.changeSideBarColor').on('click', function () {
  if ($(this).attr('data-color') == 'default') {
    $('.sidebar').removeAttr('data-background-color');
  } else {
    $('.sidebar').attr('data-background-color', $(this).attr('data-color'));
  }

  $(this).parent().find('.changeSideBarColor').removeClass("selected");
  $(this).addClass("selected");
  layoutsColors();
});
$('.changeBackgroundColor').on('click', function () {
  $('body').removeAttr('data-background-color');
  $('body').attr('data-background-color', $(this).attr('data-color'));
  $(this).parent().find('.changeBackgroundColor').removeClass("selected");
  $(this).addClass("selected");
});

function customCheckColor() {
  var logoHeader = $('.logo-header').attr('data-background-color');

  if (logoHeader !== "white") {
    $('.logo-header .navbar-brand').attr('src', '../assets/img/logo.svg');
  } else {
    $('.logo-header .navbar-brand').attr('src', '../assets/img/logo2.svg');
  }
}

var toggle_customSidebar = false,
    custom_open = 0;

if (!toggle_customSidebar) {
  var toggle = $('.custom-template .custom-toggle');
  toggle.on('click', function () {
    if (custom_open == 1) {
      $('.custom-template').removeClass('open');
      toggle.removeClass('toggled');
      custom_open = 0;
    } else {
      $('.custom-template').addClass('open');
      toggle.addClass('toggled');
      custom_open = 1;
    }
  });
  toggle_customSidebar = true;
}

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/app.js"],
/******/ 			["./resources/css/app.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;