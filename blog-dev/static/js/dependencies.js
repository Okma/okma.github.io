! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = fa.type(a);
        return "function" !== c && !fa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fa.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (pa.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function(a) {
            return _.call(b, a) > -1 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = {};
        return fa.each(a.match(va) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready()
    }

    function h() {
        this.expando = fa.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c)
                } catch (a) {}
                Aa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return fa.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (fa.cssNumber[b] ? "" : "px"),
            k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, fa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function k(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
    }

    function l(a, b) {
        for (var c = 0, d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"))
    }

    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)
            if (f = a[p], f || 0 === f)
                if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
                else if (La.test(f)) {
            for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;) g = g.lastChild;
            fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = ""
        } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; f = o[p++];)
            if (d && fa.inArray(f, d) > -1) e && e.push(f);
            else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c)
            for (m = 0; f = g[m++];) Ja.test(f.type || "") && c.push(f);
        return n
    }

    function n() {
        return !0
    }

    function o() {
        return !1
    }

    function p() {
        try {
            return X.activeElement
        } catch (a) {}
    }

    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) q(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = o;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return fa().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function() {
            fa.event.add(this, b, e, d, c)
        })
    }

    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function s(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function t(a) {
        var b = Sa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
            }
            Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({}, h), Aa.set(b, i))
        }
    }

    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e, f, g, h, i, j, l = 0,
            n = a.length,
            o = n - 1,
            p = b[0],
            q = fa.isFunction(p);
        if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)) return a.each(function(e) {
            var f = a.eq(e);
            q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d)
        });
        if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) i = e, l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
            if (h)
                for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++) i = g[l], Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")))
        }
        return a
    }

    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
            d = fa.css(c[0], "display");
        return c.detach(), d
    }

    function z(a) {
        var b = X,
            c = Va[a];
        return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c), c
    }

    function A(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ya(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), c && !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function B(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function C(a) {
        if (a in db) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--;)
            if (a = cb[c] + b, a in db) return a
    }

    function D(a, b, c) {
        var d = Ea.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
        return g
    }

    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ya(a),
            g = "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = A(a, b, f), (0 > e || null == e) && (e = a.style[b]), Xa.test(e)) return e;
            d = g && (da.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = za.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), "none" === c && e || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e)
    }

    function I() {
        return a.setTimeout(function() {
            eb = void 0
        }), eb = fa.now()
    }

    function J(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Fa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function L(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ga(a),
            p = za.get(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], gb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || fa.style(a, d)
            } else j = void 0;
        if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function() {
                fa(a).hide()
            }), l.done(function() {
                var b;
                za.remove(a, "fxshow");
                for (b in m) fa.style(a, b, m[b])
            });
            for (d in m) g = K(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function M(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function N(a, b, c) {
        var d, e, f = 0,
            g = N.prefilters.length,
            h = fa.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, {
                    specialEasing: {},
                    easing: fa.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: eb || I(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++)
            if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
        return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function O(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function P(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(va) || [];
            if (fa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fa.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Ab;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function R(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d), a
    }

    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function T(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b, function(b, e) {
            c || Eb.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else
            for (e in b) U(a + "[" + e + "]", b[e], c, d)
    }

    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var W = [],
        X = a.document,
        Y = W.slice,
        Z = W.concat,
        $ = W.push,
        _ = W.indexOf,
        aa = {},
        ba = aa.toString,
        ca = aa.hasOwnProperty,
        da = {},
        ea = "2.2.4",
        fa = function(a, b) {
            return new fa.fn.init(a, b)
        },
        ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ha = /^-ms-/,
        ia = /-([\da-z])/gi,
        ja = function(a, b) {
            return b.toUpperCase()
        };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function(a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return fa.each(this, a)
        },
        map: function(a) {
            return this.pushStack(fa.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: $,
        sort: W.sort,
        splice: W.splice
    }, fa.extend = fa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
            if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || ca.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ha, "ms-").replace(ia, ja)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (b.call(a[e], e, a[e]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ga, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : _.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; e > g; g++) f = b(a[g], g, d), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, d), null != f && h.push(f);
            return Z.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a) ? (d = Y.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(Y.call(arguments)))
            }, e.guid = a.guid = a.guid || fa.guid++, e) : void 0
        },
        now: Date.now,
        support: da
    }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        aa["[object " + b + "]"] = b.toLowerCase()
    });
    var ka = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if (e = j[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)), c
                    } catch (a) {} finally {
                        h === N && b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)
                                if (m(k, g || G, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            wa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (a) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            }, G) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [P, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ua, va),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return pa.test(a.nodeName)
                },
                input: function(a) {
                    return oa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
    var la = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && fa(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ma = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        na = fa.expr.match.needsContext,
        oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        pa = /^.[^:#\[\.,]*$/;
    fa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, fa.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (fa.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) fa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length
        }
    });
    var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        sa = fa.fn.init = function(a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || qa, "string" == typeof a) {
                if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b))
                        for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = X, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
        };
    sa.prototype = fa.fn, qa = fa(X);
    var ta = /^(?:parents|prev(?:Until|All))/,
        ua = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fa.fn.extend({
        has: function(a) {
            var b = fa(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (fa.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return la(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return la(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return la(a, "nextSibling")
        },
        prevAll: function(a) {
            return la(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return la(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return la(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ma((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ma(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    }, function(a, b) {
        fa.fn[a] = function(c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var va = /\S+/g;
    fa.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : fa.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function() {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            },
            k = {
                add: function() {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function b(c) {
                        fa.each(c, function(c, d) {
                            fa.isFunction(d) ? a.unique && k.has(d) || g.push(d) : d && d.length && "string" !== fa.type(d) && b(d)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function() {
                    return fa.each(arguments, function(a, b) {
                        for (var c;
                            (c = fa.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function(a) {
                    return a ? fa.inArray(a, g) > -1 : g.length > 0
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return e = h = [], g = c = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return e = h = [], c || (g = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, fa.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fa.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return fa.Deferred(function(c) {
                            fa.each(b, function(b, f) {
                                var g = fa.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? fa.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, fa.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = Y.call(arguments),
                g = f.length,
                h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fa.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var wa;
    fa.fn.ready = function(a) {
        return fa.ready.promise().done(a), this
    }, fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fa.readyWait++ : fa.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
        }
    }), fa.ready.promise = function(b) {
        return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))), wa.promise(b)
    }, fa.ready.promise();
    var xa = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === fa.type(c)) {
                e = !0;
                for (h in c) xa(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(fa(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        ya = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    h.uid = 1, h.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!ya(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, ya(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(va) || [])), c = d.length;
                    for (; c--;) delete f[d[c]]
                }(void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !fa.isEmptyObject(b)
        }
    };
    var za = new h,
        Aa = new h,
        Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ca = /[A-Z]/g;
    fa.extend({
        hasData: function(a) {
            return Aa.hasData(a) || za.hasData(a)
        },
        data: function(a, b, c) {
            return Aa.access(a, b, c)
        },
        removeData: function(a, b) {
            Aa.remove(a, b)
        },
        _data: function(a, b, c) {
            return za.access(a, b, c)
        },
        _removeData: function(a, b) {
            za.remove(a, b)
        }
    }), fa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
                    za.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                Aa.set(this, a)
            }) : xa(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else d = fa.camelCase(a), this.each(function() {
                    var c = Aa.get(this, d);
                    Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                Aa.remove(this, a)
            })
        }
    }), fa.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fa._queueHooks(a, b),
                g = function() {
                    fa.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return za.get(a, c) || za.access(a, c, {
                empty: fa.Callbacks("once memory").add(function() {
                    za.remove(a, [b + "queue", c])
                })
            })
        }
    }), fa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fa.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = fa.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = za.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
        Fa = ["Top", "Right", "Bottom", "Left"],
        Ga = function(a, b) {
            return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        },
        Ha = /^(?:checkbox|radio)$/i,
        Ia = /<([\w:-]+)/,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ka.optgroup = Ka.option, Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead, Ka.th = Ka.td;
    var La = /<|&#?\w+;/;
    ! function() {
        var a = X.createDocumentFragment(),
            b = a.appendChild(X.createElement("div")),
            c = X.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var Ma = /^key/,
        Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Oa = /^([^.]*)(?:\.(.+)|)/;
    fa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(va) || [""], j = b.length; j--;) h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fa.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(va) || [""], j = b.length; j--;)
                    if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && za.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [],
                h = Y.call(arguments),
                i = (za.get(this, "events") || {})[a.type] || [],
                j = fa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fa.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, fa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, fa.Event = function(a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n : o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
    }, fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = n, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = n, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fa.fn.extend({
        on: function(a, b, c, d) {
            return q(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return q(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = o), this.each(function() {
                fa.event.remove(this, a, c, b)
            })
        }
    });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Qa = /<script|<style|<link/i,
        Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Sa = /^true\/(.*)/,
        Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function(a) {
            return a.replace(Pa, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = fa.contains(a.ownerDocument, a);
            if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
                else u(a, h);
            return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (ya(c)) {
                    if (b = c[za.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                        c[za.expando] = void 0
                    }
                    c[Aa.expando] && (c[Aa.expando] = void 0)
                }
        }
    }), fa.fn.extend({
        domManip: w,
        detach: function(a) {
            return x(this, a, !0)
        },
        remove: function(a) {
            return x(this, a)
        },
        text: function(a) {
            return xa(this, function(a) {
                return void 0 === a ? fa.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return w(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return w(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return w(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return fa.clone(this, a, b)
            })
        },
        html: function(a) {
            return xa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = fa.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return w(this, arguments, function(b) {
                var c = this.parentNode;
                fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fa.fn[a] = function(a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), $.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ua, Va = {
            HTML: "block",
            BODY: "block"
        },
        Wa = /^margin/,
        Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
        Ya = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Za = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        $a = X.documentElement;
    ! function() {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", $a.appendChild(g);
            var b = a.getComputedStyle(h);
            c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, $a.removeChild(g)
        }
        var c, d, e, f, g = X.createElement("div"),
            h = X.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            pixelMarginRight: function() {
                return null == d && b(), e
            },
            reliableMarginLeft: function() {
                return null == d && b(), f
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild(X.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", $a.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), $a.removeChild(g), h.removeChild(c), b
            }
        }))
    }();
    var _a = /^(none|table(?!-c[ea]).+)/,
        ab = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cb = ["Webkit", "O", "Moz", "ms"],
        db = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b),
                    i = a.style;
                return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in bb && (e = bb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), fa.each(["height", "width"], function(a, b) {
        fa.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ya(a),
                    g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), D(a, c, g)
            }
        }
    }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function(a, b) {
        return b ? Za(a, {
            display: "inline-block"
        }, A, [a, "marginRight"]) : void 0
    }), fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Wa.test(a) || (fa.cssHooks[a + b].set = D)
    }), fa.fn.extend({
        css: function(a, b) {
            return xa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (fa.isArray(b)) {
                    for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return G(this, !0)
        },
        hide: function() {
            return G(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ga(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }), fa.Tween = H, H.prototype = {
        constructor: H,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = H.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fa.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, fa.fx = H.prototype.init, fa.fx.step = {};
    var eb, fb, gb = /^(?:toggle|show|hide)$/,
        hb = /queueHooks$/;
    fa.Animation = fa.extend(N, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return j(c.elem, a, Ea.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(va);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
            },
            prefilters: [L],
            prefilter: function(a, b) {
                b ? N.prefilters.unshift(a) : N.prefilters.push(a)
            }
        }), fa.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? fa.extend({}, a) : {
                complete: c || !c && b || fa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fa.isFunction(b) && b
            };
            return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
            }, d
        }, fa.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Ga).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = fa.isEmptyObject(a),
                    f = fa.speed(b, c, d),
                    g = function() {
                        var b = N(this, fa.extend({}, a), f);
                        (e || za.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = fa.timers,
                        g = za.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || fa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = za.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = fa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fa.each(["toggle", "show", "hide"], function(a, b) {
            var c = fa.fn[b];
            fa.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
            }
        }), fa.each({
            slideDown: J("show"),
            slideUp: J("hide"),
            slideToggle: J("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            fa.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fa.timers = [], fa.fx.tick = function() {
            var a, b = 0,
                c = fa.timers;
            for (eb = fa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || fa.fx.stop(), eb = void 0
        }, fa.fx.timer = function(a) {
            fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
        }, fa.fx.interval = 13, fa.fx.start = function() {
            fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval))
        }, fa.fx.stop = function() {
            a.clearInterval(fb), fb = null
        }, fa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fa.fn.delay = function(b, c) {
            return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = X.createElement("input"),
                b = X.createElement("select"),
                c = b.appendChild(X.createElement("option"));
            a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", da.radioValue = "t" === a.value
        }();
    var ib, jb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function(a, b) {
            return xa(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fa.removeAttr(this, a)
            })
        }
    }), fa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(va);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ib = {
        set: function(a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function(a, b, d) {
            var e, f;
            return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, jb[b] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function(a, b) {
            return xa(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fa.propFix[a] || a]
            })
        }
    }), fa.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), da.optSelected || (fa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fa.propFix[this.toLowerCase()] = this
    });
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).addClass(a.call(this, b, O(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).removeClass(a.call(this, b, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                fa(this).toggleClass(a.call(this, c, O(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = O(this), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;
    fa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = fa.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)) : void 0
        }
    }), fa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = fa.find.attr(a, "value");
                    return null != b ? b : fa.trim(fa.text(a)).replace(ob, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), fa.each(["radio", "checkbox"], function() {
        fa.valHooks[this] = {
            set: function(a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0
            }
        }, da.checkOn || (fa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || X],
                n = ca.call(b, "type") ? b.type : b,
                o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !pb.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0
            });
            fa.event.trigger(d, null, b)
        }
    }), fa.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0
        }
    }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), da.focusin = "onfocusin" in a, da.focusin || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            fa.event.simulate(b, a.target, fa.event.fix(a))
        };
        fa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = za.access(d, b);
                e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = za.access(d, b) - 1;
                e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = fa.now(),
        sb = /\?/;
    fa.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, fa.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (a) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
    };
    var tb = /#.*$/,
        ub = /([?&])_=[^&]*/,
        vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        xb = /^(?:GET|HEAD)$/,
        yb = /^\/\//,
        zb = {},
        Ab = {},
        Bb = "*/".concat("*"),
        Cb = X.createElement("a");
    Cb.href = qb.href, fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: wb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
        },
        ajaxPrefilter: P(zb),
        ajaxTransport: P(Ab),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                p = fa.Deferred(),
                q = fa.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!h)
                                for (h = {}; b = vb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || qb.href) + "").replace(tb, "").replace(yb, qb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [""], null == m.crossDomain) {
                j = X.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host
                } catch (a) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(zb, m, c, w), 2 === u) return w;
            k = fa.event && m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !xb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (sb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = ub.test(f) ? f.replace(ub, "$1_=" + rb++) : f + (sb.test(f) ? "&" : "?") + "_=" + rb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (e = Q(Ab, m, c, w)) {
                if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (a) {
                    if (!(2 > u)) throw a;
                    d(-1, a)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return fa.get(a, void 0, b, "script")
        }
    }), fa.each(["get", "post"], function(a, b) {
        fa[b] = function(a, c, d, e) {
            return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, fa.isPlainObject(a) && a))
        }
    }), fa._evalUrl = function(a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, fa.fn.extend({
        wrapAll: function(a) {
            var b;
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = fa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fa.isFunction(a);
            return this.each(function(c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fa.expr.filters.hidden = function(a) {
        return !fa.expr.filters.visible(a)
    }, fa.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Db = /%20/g,
        Eb = /\[\]$/,
        Fb = /\r?\n/g,
        Gb = /^(?:submit|button|image|reset|file)$/i,
        Hb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(Db, "+")
    }, fa.fn.extend({
        serialize: function() {
            return fa.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Ha.test(a))
            }).map(function(a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Fb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Fb, "\r\n")
                }
            }).get()
        }
    }), fa.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    };
    var Ib = {
            0: 200,
            1223: 204
        },
        Jb = fa.ajaxSettings.xhr();
    da.cors = !!Jb && "withCredentials" in Jb, da.ajax = Jb = !!Jb, fa.ajaxTransport(function(b) {
        var c, d;
        return da.cors || Jb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ib[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (a) {
                    if (c) throw a
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return fa.globalEval(a), a
            }
        }
    }), fa.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), X.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Kb = [],
        Lb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Kb.pop() || fa.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), fa.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Lb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Lb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || fa.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Kb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), fa.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || X;
        var d = oa.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
    };
    var Mb = fa.fn.load;
    fa.fn.load = function(a, b, c) {
        if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fa.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), fa.expr.filters.animated = function(a) {
        return fa.grep(fa.timers, function(b) {
            return a === b.elem
        }).length
    }, fa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"),
                l = fa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                fa.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === fa.css(a, "position");) a = a.offsetParent;
                return a || $a
            })
        }
    }), fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        fa.fn[a] = function(d) {
            return xa(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), fa.each(["top", "left"], function(a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function(a, c) {
            return c ? (c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0
        })
    }), fa.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            fa.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return xa(this, function(b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), fa.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fa
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return fa.noConflict = function(b) {
        return a.$ === fa && (a.$ = Ob), b && a.jQuery === fa && (a.jQuery = Nb), fa
    }, b || (a.jQuery = a.$ = fa), fa
}), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(a) {
            return a < 10 ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; c < f; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; c < f; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; d < c; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b) {
        "use strict";
        var c = a.History = a.History || {},
            d = a.jQuery;
        if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            bind: function(a, b, c) {
                d(a).bind(b, c)
            },
            trigger: function(a, b, c) {
                d(a).trigger(b, c)
            },
            extractEventData: function(a, c, d) {
                var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                return e
            },
            onDomLoad: function(a) {
                d(a)
            }
        }, "undefined" != typeof c.init && c.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.document,
            d = a.setTimeout || d,
            e = a.clearTimeout || e,
            f = a.setInterval || f,
            g = a.History = a.History || {};
        if ("undefined" != typeof g.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        g.initHtml4 = function() {
            return "undefined" == typeof g.initHtml4.initialized && (g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function(a) {
                var b, c = g.getHashByIndex();
                return b = a === c
            }, g.isHashEqual = function(a, b) {
                return a = encodeURIComponent(a).replace(/%25/g, "%"), b = encodeURIComponent(b).replace(/%25/g, "%"), a === b
            }, g.saveHash = function(a) {
                return !g.isLastHash(a) && (g.savedHashes.push(a), !0)
            }, g.getHashByIndex = function(a) {
                var b = null;
                return b = "undefined" == typeof a ? g.savedHashes[g.savedHashes.length - 1] : a < 0 ? g.savedHashes[g.savedHashes.length + a] : g.savedHashes[a]
            }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function(a, b, c) {
                var d, e = g.getHashByState(a);
                return d = {
                    discardedState: a,
                    backState: c,
                    forwardState: b
                }, g.discardedStates[e] = d, !0
            }, g.discardHash = function(a, b, c) {
                var d = {
                    discardedHash: a,
                    backState: c,
                    forwardState: b
                };
                return g.discardedHashes[a] = d, !0
            }, g.discardedState = function(a) {
                var b, c = g.getHashByState(a);
                return b = g.discardedStates[c] || !1
            }, g.discardedHash = function(a) {
                var b = g.discardedHashes[a] || !1;
                return b
            }, g.recycleState = function(a) {
                var b = g.getHashByState(a);
                return g.discardedState(a) && delete g.discardedStates[b], !0
            }, g.emulated.hashChange && (g.hashChangeInit = function() {
                g.checkerFunction = null;
                var b, d, e, h, i = "",
                    j = Boolean(g.getHash());
                return g.isInternetExplorer() ? (b = "historyjs-iframe", d = c.createElement("iframe"), d.setAttribute("id", b), d.setAttribute("src", "#"), d.style.display = "none", c.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), e = "", h = !1, g.checkerFunction = function() {
                    if (h) return !1;
                    h = !0;
                    var b = g.getHash(),
                        c = g.getHash(d.contentWindow.document);
                    return b !== i ? (i = b, c !== b && (e = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = g.escapeHash(b)), g.Adapter.trigger(a, "hashchange")) : c !== e && (e = c, j && "" === c ? g.back() : g.setHash(c, !1)), h = !1, !0
                }) : g.checkerFunction = function() {
                    var b = g.getHash() || "";
                    return b !== i && (i = b, g.Adapter.trigger(a, "hashchange")), !0
                }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
            }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function(b) {
                var c, d = b && b.newURL || g.getLocationHref(),
                    e = g.getHashByUrl(d),
                    f = null,
                    h = null;
                return g.isLastHash(e) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(e), e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (f = g.extractState(g.getFullUrl(e || g.getLocationHref()), !0), g.isLastSavedState(f) ? (g.busy(!1), !1) : (h = g.getHashByState(f), c = g.discardedState(f), c ? (g.getHashByIndex(-2) === g.getHashByState(c.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(f.data, f.title, encodeURI(f.url), !1), !0))))
            }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (e !== !1 && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                g.busy(!0);
                var f = g.createStateObject(b, c, d),
                    h = g.getHashByState(f),
                    i = g.getState(!1),
                    j = g.getHashByState(i),
                    k = g.getHash(),
                    l = g.expectedStateId == f.id;
                return g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), h === j ? (g.busy(!1), !1) : (g.saveState(f), l || g.Adapter.trigger(a, "statechange"), !g.isHashEqual(h, k) && !g.isHashEqual(h, g.getShortUrl(g.getLocationHref())) && g.setHash(h, !1), g.busy(!1), !0)
            }, g.replaceState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (e !== !1 && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                g.busy(!0);
                var f = g.createStateObject(b, c, d),
                    h = g.getHashByState(f),
                    i = g.getState(!1),
                    j = g.getHashByState(i),
                    k = g.getStateByIndex(-2);
                return g.discardState(i, f, k), h === j ? (g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), g.saveState(f), g.Adapter.trigger(a, "statechange"), g.busy(!1)) : g.pushState(f.data, f.title, f.url, !1), !0
            }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
                g.Adapter.trigger(a, "hashchange")
            }), void 0)
        }, "undefined" != typeof g.init && g.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.console || b,
            d = a.document,
            e = a.navigator,
            f = a.sessionStorage || !1,
            g = a.setTimeout,
            h = a.clearTimeout,
            i = a.setInterval,
            j = a.clearInterval,
            k = a.JSON,
            l = a.alert,
            m = a.History = a.History || {},
            n = a.history;
        try {
            f.setItem("TEST", "1"), f.removeItem("TEST")
        } catch (a) {
            f = !1
        }
        if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, "undefined" != typeof m.init) throw new Error("History.js Core has already been loaded...");
        m.init = function(a) {
            return "undefined" != typeof m.Adapter && ("undefined" != typeof m.initCore && m.initCore(), "undefined" != typeof m.initHtml4 && m.initHtml4(), !0)
        }, m.initCore = function(o) {
            if ("undefined" != typeof m.initCore.initialized) return !1;
            if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function() {
                    var a, b = m.intervalList;
                    if ("undefined" != typeof b && null !== b) {
                        for (a = 0; a < b.length; a++) j(b[a]);
                        m.intervalList = null
                    }
                }, m.debug = function() {
                    (m.options.debug || !1) && m.log.apply(m, arguments)
                }, m.log = function() {
                    var a, b, e, f, g, h = "undefined" != typeof c && "undefined" != typeof c.log && "undefined" != typeof c.log.apply,
                        i = d.getElementById("log");
                    for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; b < e; ++b) {
                        if (g = arguments[b], "object" == typeof g && "undefined" != typeof k) try {
                            g = k.stringify(g)
                        } catch (a) {}
                        a += "\n" + g + "\n"
                    }
                    return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
                }, m.getInternetExplorerMajorVersion = function() {
                    var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                        for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                            (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                        return a > 4 && a
                    }();
                    return a
                }, m.isInternetExplorer = function() {
                    var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                    return a
                }, m.options.html4Mode ? m.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : m.emulated = {
                    pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                    hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
                }, m.enabled = !m.emulated.pushState, m.bugs = {
                    setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
                }, m.isEmptyObject = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }, m.cloneObject = function(a) {
                    var b, c;
                    return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
                }, m.getRootUrl = function() {
                    var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                    return d.location.port && (a += ":" + d.location.port), a += "/"
                }, m.getBaseHref = function() {
                    var a = d.getElementsByTagName("base"),
                        b = null,
                        c = "";
                    return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
                }, m.getBaseUrl = function() {
                    var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                    return a
                }, m.getPageUrl = function() {
                    var a, b = m.getState(!1, !1),
                        c = (b || {}).url || m.getLocationHref();
                    return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                        return /\./.test(a) ? a : a + "/"
                    })
                }, m.getBasePageUrl = function() {
                    var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                        return /[^\/]$/.test(a) ? "" : a
                    }).replace(/\/+$/, "") + "/";
                    return a
                }, m.getFullUrl = function(a, b) {
                    var c = a,
                        d = a.substring(0, 1);
                    return b = "undefined" == typeof b || b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
                }, m.getShortUrl = function(a) {
                    var b = a,
                        c = m.getBaseUrl(),
                        d = m.getRootUrl();
                    return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, m.getLocationHref = function(a) {
                    return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : a.URL.indexOf("#") == -1 && a.location.href.indexOf("#") != -1 ? a.location.href : a.URL || a.location.href
                }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                    m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
                }, m.getState = function(a, b) {
                    "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0);
                    var c = m.getLastSavedState();
                    return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
                }, m.getIdByState = function(a) {
                    var b, c = m.extractId(a.url);
                    if (!c)
                        if (b = m.getStateString(a), "undefined" != typeof m.stateToId[b]) c = m.stateToId[b];
                        else if ("undefined" != typeof m.store.stateToId[b]) c = m.store.stateToId[b];
                    else {
                        for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof m.idToState[c] || "undefined" != typeof m.store.idToState[c];);
                        m.stateToId[b] = c, m.idToState[c] = a
                    }
                    return c
                }, m.normalizeState = function(a) {
                    var b, c;
                    return a && "object" == typeof a || (a = {}), "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
                }, m.createStateObject = function(a, b, c) {
                    var d = {
                        data: a,
                        title: b,
                        url: c
                    };
                    return d = m.normalizeState(d)
                }, m.getStateById = function(a) {
                    a = String(a);
                    var c = m.idToState[a] || m.store.idToState[a] || b;
                    return c
                }, m.getStateString = function(a) {
                    var b, c, d;
                    return b = m.normalizeState(a), c = {
                        data: b.data,
                        title: a.title,
                        url: a.url
                    }, d = k.stringify(c)
                }, m.getStateId = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.id
                }, m.getHashByState = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.hash
                }, m.extractId = function(a) {
                    var b, c, d, e;
                    return e = a.indexOf("#") != -1 ? a.split("#")[0] : a, c = /(.*)\&_suid=([0-9]+)$/.exec(e), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
                }, m.isTraditionalAnchor = function(a) {
                    var b = !/[\/\?\.]/.test(a);
                    return b
                }, m.extractState = function(a, b) {
                    var c, d, e = null;
                    return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))), e
                }, m.getIdByUrl = function(a) {
                    var c = m.urlToId[a] || m.store.urlToId[a] || b;
                    return c
                }, m.getLastSavedState = function() {
                    return m.savedStates[m.savedStates.length - 1] || b
                }, m.getLastStoredState = function() {
                    return m.storedStates[m.storedStates.length - 1] || b
                }, m.hasUrlDuplicate = function(a) {
                    var b, c = !1;
                    return b = m.extractState(a.url), c = b && b.id !== a.id
                }, m.storeState = function(a) {
                    return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
                }, m.isLastSavedState = function(a) {
                    var b, c, d, e = !1;
                    return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
                }, m.saveState = function(a) {
                    return !m.isLastSavedState(a) && (m.savedStates.push(m.cloneObject(a)), !0)
                }, m.getStateByIndex = function(a) {
                    var b = null;
                    return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : a < 0 ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
                }, m.getCurrentIndex = function() {
                    var a = null;
                    return a = m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
                }, m.getHash = function(a) {
                    var b, c = m.getLocationHref(a);
                    return b = m.getHashByUrl(c)
                }, m.unescapeHash = function(a) {
                    var b = m.normalizeHash(a);
                    return b = decodeURIComponent(b)
                }, m.normalizeHash = function(a) {
                    var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return b
                }, m.setHash = function(a, b) {
                    var c, e;
                    return b !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.setHash,
                        args: arguments,
                        queue: b
                    }), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
                }, m.escapeHash = function(b) {
                    var c = m.normalizeHash(b);
                    return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
                }, m.getHashByUrl = function(a) {
                    var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return b = m.unescapeHash(b)
                }, m.setTitle = function(a) {
                    var b, c = a.title;
                    c || (b = m.getStateByIndex(0), b && b.url === a.url && (c = b.title || m.options.initialTitle));
                    try {
                        d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (a) {}
                    return d.title = c, m
                }, m.queues = [], m.busy = function(a) {
                    if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                        h(m.busy.timeout);
                        var b = function() {
                            var a, c, d;
                            if (!m.busy.flag)
                                for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                        };
                        m.busy.timeout = g(b, m.options.busyDelay)
                    }
                    return m.busy.flag
                }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                    return a.callback.apply(a.scope || m, a.args || [])
                }, m.pushQueue = function(a) {
                    return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
                }, m.queue = function(a, b) {
                    return "function" == typeof a && (a = {
                        callback: a
                    }), "undefined" != typeof b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
                }, m.clearQueue = function() {
                    return m.busy.flag = !1, m.queues = [], m
                }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                    return m.stateChanged = !0, m.doubleCheckClear(), m
                }, m.doubleCheckClear = function() {
                    return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
                }, m.doubleCheck = function(a) {
                    return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                        return m.doubleCheckClear(), m.stateChanged || a(), !0
                    }, m.options.doubleCheckInterval)), m
                }, m.safariStatePoll = function() {
                    var b, c = m.extractState(m.getLocationHref());
                    if (!m.isLastSavedState(c)) return b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
                }, m.back = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.back,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.back(!1)
                    }), n.go(-1), !0)
                }, m.forward = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.forward,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.forward(!1)
                    }), n.go(1), !0)
                }, m.go = function(a, b) {
                    var c;
                    if (a > 0)
                        for (c = 1; c <= a; ++c) m.forward(b);
                    else {
                        if (!(a < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (c = -1; c >= a; --c) m.back(b)
                    }
                    return m
                }, m.emulated.pushState) {
                var p = function() {};
                m.pushState = m.pushState || p, m.replaceState = m.replaceState || p
            } else m.onPopState = function(b, c) {
                var d, e, f = !1,
                    g = !1;
                return m.doubleCheckComplete(), d = m.getHash(), d ? (e = m.extractState(d || m.getLocationHref(), !0), e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (f = m.Adapter.extractEventData("state", b, c) || !1, g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()), g || (g = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(g) ? (m.busy(!1), !1) : (m.storeState(g), m.saveState(g), m.setTitle(g), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
            if (f) {
                try {
                    m.store = k.parse(f.getItem("History.store")) || {}
                } catch (a) {
                    m.store = {}
                }
                m.normalizeStore()
            } else m.store = {}, m.normalizeStore();
            m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function() {
                var a, b, c;
                try {
                    a = k.parse(f.getItem("History.store")) || {}
                } catch (b) {
                    a = {}
                }
                a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
                for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
                for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
                m.store = a, m.normalizeStore(), c = k.stringify(a);
                try {
                    f.setItem("History.store", c)
                } catch (a) {
                    if (a.code !== DOMException.QUOTA_EXCEEDED_ERR) throw a;
                    f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
                }
            }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), "Apple Computer, Inc." !== e.vendor && "Mozilla" !== (e.appCodeName || "") || (m.Adapter.bind(a, "hashchange", function() {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function() {
                m.Adapter.trigger(a, "hashchange")
            })))
        }, (!m.options || !m.options.delayInit) && m.init()
    }(window), ! function(a, b) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
    }("undefined" != typeof window ? window : this, function() {
        function a() {}
        var b = a.prototype;
        return b.on = function(a, b) {
            if (a && b) {
                var c = this._events = this._events || {},
                    d = c[a] = c[a] || [];
                return -1 == d.indexOf(b) && d.push(b), this
            }
        }, b.once = function(a, b) {
            if (a && b) {
                this.on(a, b);
                var c = this._onceEvents = this._onceEvents || {},
                    d = c[a] = c[a] || {};
                return d[b] = !0, this
            }
        }, b.off = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = c.indexOf(b);
                return -1 != d && c.splice(d, 1), this
            }
        }, b.emitEvent = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = 0,
                    e = c[d];
                b = b || [];
                for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                    var g = f && f[e];
                    g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
                }
                return this
            }
        }, a
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) {
            return b(a, c)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter)
    }(window, function(a, b) {
        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function d(a) {
            var b = [];
            if (Array.isArray(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function e(a, b, f) {
            return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new e(a, b, f)
        }

        function f(a) {
            this.img = a
        }

        function g(a, b) {
            this.url = a, this.element = b, this.img = new Image
        }
        var h = a.jQuery,
            i = a.console;
        e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, e.prototype.addElementImages = function(a) {
            "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
            var b = a.nodeType;
            if (b && j[b]) {
                for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                    var e = c[d];
                    this.addImage(e)
                }
                if ("string" == typeof this.options.background) {
                    var f = a.querySelectorAll(this.options.background);
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        this.addElementBackgroundImages(g)
                    }
                }
            }
        };
        var j = {
            1: !0,
            9: !0,
            11: !0
        };
        return e.prototype.addElementBackgroundImages = function(a) {
            var b = getComputedStyle(a);
            if (b)
                for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                    var e = d && d[2];
                    e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
                }
        }, e.prototype.addImage = function(a) {
            var b = new f(a);
            this.images.push(b)
        }, e.prototype.addBackground = function(a, b) {
            var c = new g(a, b);
            this.images.push(c)
        }, e.prototype.check = function() {
            function a(a, c, d) {
                setTimeout(function() {
                    b.progress(a, c, d)
                })
            }
            var b = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(b) {
                b.once("progress", a), b.check()
            }) : void this.complete()
        }, e.prototype.progress = function(a, b, c) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b)
        }, e.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var b = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[b](this)
            }
        }, f.prototype = Object.create(b.prototype), f.prototype.check = function() {
            var a = this.getIsImageComplete();
            return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, f.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, f.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emitEvent("progress", [this, this.img, b])
        }, f.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, f.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, f.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, f.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, g.prototype = Object.create(f.prototype), g.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var a = this.getIsImageComplete();
            a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, g.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, g.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emitEvent("progress", [this, this.element, b])
        }, e.makeJQueryPlugin = function(b) {
            b = b || a.jQuery, b && (h = b, h.fn.imagesLoaded = function(a, b) {
                var c = new e(this, a, b);
                return c.jqDeferred.promise(h(this))
            })
        }, e.makeJQueryPlugin(), e
    }), ! function(a, b) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(c) {
            return b(a, c)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("jquery")) : a.jQueryBridget = b(a, a.jQuery)
    }(window, function(a, b) {
        "use strict";

        function c(c, f, h) {
            function i(a, b, d) {
                var e, f = "$()." + c + '("' + b + '")';
                return a.each(function(a, i) {
                    var j = h.data(i, c);
                    if (!j) return void g(c + " not initialized. Cannot call methods, i.e. " + f);
                    var k = j[b];
                    if (!k || "_" == b.charAt(0)) return void g(f + " is not a valid method");
                    var l = k.apply(j, d);
                    e = void 0 === e ? l : e
                }), void 0 !== e ? e : a
            }

            function j(a, b) {
                a.each(function(a, d) {
                    var e = h.data(d, c);
                    e ? (e.option(b), e._init()) : (e = new f(d, b), h.data(d, c, e))
                })
            }
            h = h || b || a.jQuery, h && (f.prototype.option || (f.prototype.option = function(a) {
                h.isPlainObject(a) && (this.options = h.extend(!0, this.options, a))
            }), h.fn[c] = function(a) {
                if ("string" == typeof a) {
                    var b = e.call(arguments, 1);
                    return i(this, a, b)
                }
                return j(this, a), this
            }, d(h))
        }

        function d(a) {
            !a || a && a.bridget || (a.bridget = c)
        }
        var e = Array.prototype.slice,
            f = a.console,
            g = "undefined" == typeof f ? function() {} : function(a) {
                f.error(a)
            };
        return d(b || a.jQuery), c
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
    }("undefined" != typeof window ? window : this, function() {
        function a() {}
        var b = a.prototype;
        return b.on = function(a, b) {
            if (a && b) {
                var c = this._events = this._events || {},
                    d = c[a] = c[a] || [];
                return -1 == d.indexOf(b) && d.push(b), this
            }
        }, b.once = function(a, b) {
            if (a && b) {
                this.on(a, b);
                var c = this._onceEvents = this._onceEvents || {},
                    d = c[a] = c[a] || {};
                return d[b] = !0, this
            }
        }, b.off = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = c.indexOf(b);
                return -1 != d && c.splice(d, 1), this
            }
        }, b.emitEvent = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = 0,
                    e = c[d];
                b = b || [];
                for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                    var g = f && f[e];
                    g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
                }
                return this
            }
        }, a
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return b()
        }) : "object" == typeof module && module.exports ? module.exports = b() : a.getSize = b()
    }(window, function() {
        "use strict";

        function a(a) {
            var b = parseFloat(a),
                c = -1 == a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function b() {}

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0; j > b; b++) {
                var c = i[b];
                a[c] = 0
            }
            return a
        }

        function d(a) {
            var b = getComputedStyle(a);
            return b || h("Style returned " + b + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), b
        }

        function e() {
            if (!k) {
                k = !0;
                var b = document.createElement("div");
                b.style.width = "200px", b.style.padding = "1px 2px 3px 4px", b.style.borderStyle = "solid", b.style.borderWidth = "1px 2px 3px 4px", b.style.boxSizing = "border-box";
                var c = document.body || document.documentElement;
                c.appendChild(b);
                var e = d(b);
                f.isBoxSizeOuter = g = 200 == a(e.width), c.removeChild(b)
            }
        }

        function f(b) {
            if (e(), "string" == typeof b && (b = document.querySelector(b)), b && "object" == typeof b && b.nodeType) {
                var f = d(b);
                if ("none" == f.display) return c();
                var h = {};
                h.width = b.offsetWidth, h.height = b.offsetHeight;
                for (var k = h.isBorderBox = "border-box" == f.boxSizing, l = 0; j > l; l++) {
                    var m = i[l],
                        n = f[m],
                        o = parseFloat(n);
                    h[m] = isNaN(o) ? 0 : o
                }
                var p = h.paddingLeft + h.paddingRight,
                    q = h.paddingTop + h.paddingBottom,
                    r = h.marginLeft + h.marginRight,
                    s = h.marginTop + h.marginBottom,
                    t = h.borderLeftWidth + h.borderRightWidth,
                    u = h.borderTopWidth + h.borderBottomWidth,
                    v = k && g,
                    w = a(f.width);
                w !== !1 && (h.width = w + (v ? 0 : p + t));
                var x = a(f.height);
                return x !== !1 && (h.height = x + (v ? 0 : q + u)), h.innerWidth = h.width - (p + t), h.innerHeight = h.height - (q + u), h.outerWidth = h.width + r, h.outerHeight = h.height + s, h
            }
        }
        var g, h = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            j = i.length,
            k = !1;
        return f
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", b) : "object" == typeof module && module.exports ? module.exports = b() : a.matchesSelector = b()
    }(window, function() {
        "use strict";
        var a = function() {
            var a = Element.prototype;
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d + "MatchesSelector";
                if (a[e]) return e
            }
        }();
        return function(b, c) {
            return b[a](c)
        }
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(c) {
            return b(a, c)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.matchesSelector)
    }(window, function(a, b) {
        var c = {};
        c.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, c.modulo = function(a, b) {
            return (a % b + b) % b
        }, c.makeArray = function(a) {
            var b = [];
            if (Array.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, c.removeFrom = function(a, b) {
            var c = a.indexOf(b); - 1 != c && a.splice(c, 1)
        }, c.getParent = function(a, c) {
            for (; a != document.body;)
                if (a = a.parentNode, b(a, c)) return a
        }, c.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, c.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, c.filterFindElements = function(a, d) {
            a = c.makeArray(a);
            var e = [];
            return a.forEach(function(a) {
                if (a instanceof HTMLElement) {
                    if (!d) return void e.push(a);
                    b(a, d) && e.push(a);
                    for (var c = a.querySelectorAll(d), f = 0; f < c.length; f++) e.push(c[f])
                }
            }), e
        }, c.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, c.docReady = function(a) {
            var b = document.readyState;
            "complete" == b || "interactive" == b ? a() : document.addEventListener("DOMContentLoaded", a)
        }, c.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var d = a.console;
        return c.htmlInit = function(b, e) {
            c.docReady(function() {
                var f = c.toDashed(e),
                    g = "data-" + f,
                    h = document.querySelectorAll("[" + g + "]"),
                    i = document.querySelectorAll(".js-" + f),
                    j = c.makeArray(h).concat(c.makeArray(i)),
                    k = g + "-options",
                    l = a.jQuery;
                j.forEach(function(a) {
                    var c, f = a.getAttribute(g) || a.getAttribute(k);
                    try {
                        c = f && JSON.parse(f)
                    } catch (b) {
                        return void(d && d.error("Error parsing " + g + " on " + a.className + ": " + b))
                    }
                    var h = new b(a, c);
                    l && l.data(a, e, h)
                })
            })
        }, c
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("ev-emitter"), require("get-size")) : (a.Outlayer = {}, a.Outlayer.Item = b(a.EvEmitter, a.getSize))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function d(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function e(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var f = document.documentElement.style,
            g = "string" == typeof f.transition ? "transition" : "WebkitTransition",
            h = "string" == typeof f.transform ? "transform" : "WebkitTransform",
            i = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[g],
            j = {
                transform: h,
                transition: g,
                transitionDuration: g + "Duration",
                transitionProperty: g + "Property",
                transitionDelay: g + "Delay"
            },
            k = d.prototype = Object.create(a.prototype);
        k.constructor = d, k._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, k.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, k.getSize = function() {
            this.size = b(this.element)
        }, k.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = j[c] || c;
                b[d] = a[c]
            }
        }, k.getPosition = function() {
            var a = getComputedStyle(this.element),
                b = this.layout._getOption("originLeft"),
                c = this.layout._getOption("originTop"),
                d = a[b ? "left" : "right"],
                e = a[c ? "top" : "bottom"],
                f = this.layout.size,
                g = -1 != d.indexOf("%") ? parseFloat(d) / 100 * f.width : parseInt(d, 10),
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * f.height : parseInt(e, 10);
            g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= b ? f.paddingLeft : f.paddingRight, h -= c ? f.paddingTop : f.paddingBottom, this.position.x = g, this.position.y = h
        }, k.layoutPosition = function() {
            var a = this.layout.size,
                b = {},
                c = this.layout._getOption("originLeft"),
                d = this.layout._getOption("originTop"),
                e = c ? "paddingLeft" : "paddingRight",
                f = c ? "left" : "right",
                g = c ? "right" : "left",
                h = this.position.x + a[e];
            b[f] = this.getXValue(h), b[g] = "";
            var i = d ? "paddingTop" : "paddingBottom",
                j = d ? "top" : "bottom",
                k = d ? "bottom" : "top",
                l = this.position.y + a[i];
            b[j] = this.getYValue(l), b[k] = "", this.css(b), this.emitEvent("layout", [this])
        }, k.getXValue = function(a) {
            var b = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !b ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, k.getYValue = function(a) {
            var b = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && b ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, k._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, k.getTranslate = function(a, b) {
            var c = this.layout._getOption("originLeft"),
                d = this.layout._getOption("originTop");
            return a = c ? a : -a, b = d ? b : -b, "translate3d(" + a + "px, " + b + "px, 0)"
        }, k.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, k.moveTo = k._transitionTo, k.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, k._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, k.transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var l = "opacity," + e(h);
        k.enableTransition = function() {
            if (!this.isTransitioning) {
                var a = this.layout.options.transitionDuration;
                a = "number" == typeof a ? a + "ms" : a, this.css({
                    transitionProperty: l,
                    transitionDuration: a,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(i, this, !1)
            }
        }, k.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, k.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var m = {
            "-webkit-transform": "transform"
        };
        k.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    d = m[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                    var e = b.onEnd[d];
                    e.call(this), delete b.onEnd[d]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, k.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(i, this, !1), this.isTransitioning = !1
        }, k._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var n = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return k.removeTransitionStyles = function() {
            this.css(n)
        }, k.stagger = function(a) {
            a = isNaN(a) ? 0 : a, this.staggerDelay = a + "ms"
        }, k.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, k.remove = function() {
            return g && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, k.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, k.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, k.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, k.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, k.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, k.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a, b) {
            var c = d.getQueryElement(a);
            if (!c) return void(i && i.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, j && (this.$element = j(this.element)), this.options = d.extend({}, this.constructor.defaults), this.option(b);
            var e = ++l;
            this.element.outlayerGUID = e, m[e] = this, this._create();
            var f = this._getOption("initLayout");
            f && this.layout()
        }

        function g(a) {
            function b() {
                a.apply(this, arguments)
            }
            return b.prototype = Object.create(a.prototype), b.prototype.constructor = b, b
        }

        function h(a) {
            if ("number" == typeof a) return a;
            var b = a.match(/(^\d*\.?\d*)(\w*)/),
                c = b && b[1],
                d = b && b[2];
            if (!c.length) return 0;
            c = parseFloat(c);
            var e = o[d] || 1;
            return c * e
        }
        var i = a.console,
            j = a.jQuery,
            k = function() {},
            l = 0,
            m = {};
        f.namespace = "outlayer", f.Item = e, f.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var n = f.prototype;
        d.extend(n, b.prototype), n.option = function(a) {
            d.extend(this.options, a)
        }, n._getOption = function(a) {
            var b = this.constructor.compatOptions[a];
            return b && void 0 !== this.options[b] ? this.options[b] : this.options[a]
        }, f.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, n._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), d.extend(this.element.style, this.options.containerStyle);
            var a = this._getOption("resize");
            a && this.bindResize()
        }, n.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, n._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0; e < b.length; e++) {
                var f = b[e],
                    g = new c(f, this);
                d.push(g)
            }
            return d
        }, n._filterFindItemElements = function(a) {
            return d.filterFindElements(a, this.options.itemSelector)
        }, n.getItemElements = function() {
            return this.items.map(function(a) {
                return a.element
            })
        }, n.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = this._getOption("layoutInstant"),
                b = void 0 !== a ? a : !this._isLayoutInited;
            this.layoutItems(this.items, b), this._isLayoutInited = !0
        }, n._init = n.layout, n._resetLayout = function() {
            this.getSize()
        }, n.getSize = function() {
            this.size = c(this.element)
        }, n._getMeasurement = function(a, b) {
            var d, e = this.options[a];
            e ? ("string" == typeof e ? d = this.element.querySelector(e) : e instanceof HTMLElement && (d = e), this[a] = d ? c(d)[b] : e) : this[a] = 0
        }, n.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, n._getItemsForLayout = function(a) {
            return a.filter(function(a) {
                return !a.isIgnored
            })
        }, n._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                var c = [];
                a.forEach(function(a) {
                    var d = this._getItemLayoutPosition(a);
                    d.item = a, d.isInstant = b || a.isLayoutInstant, c.push(d)
                }, this), this._processLayoutQueue(c)
            }
        }, n._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, n._processLayoutQueue = function(a) {
            this.updateStagger(), a.forEach(function(a, b) {
                this._positionItem(a.item, a.x, a.y, a.isInstant, b)
            }, this)
        }, n.updateStagger = function() {
            var a = this.options.stagger;
            return null === a || void 0 === a ? void(this.stagger = 0) : (this.stagger = h(a), this.stagger)
        }, n._positionItem = function(a, b, c, d, e) {
            d ? a.goTo(b, c) : (a.stagger(e * this.stagger), a.moveTo(b, c))
        }, n._postLayout = function() {
            this.resizeContainer()
        }, n.resizeContainer = function() {
            var a = this._getOption("resizeContainer");
            if (a) {
                var b = this._getContainerSize();
                b && (this._setContainerMeasure(b.width, !0), this._setContainerMeasure(b.height, !1))
            }
        }, n._getContainerSize = k, n._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, n._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g == f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            var g = 0;
            b.forEach(function(b) {
                b.once(a, d)
            })
        }, n.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), j)
                if (this.$element = this.$element || j(this.element), b) {
                    var e = j.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, n.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, n.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, n.stamp = function(a) {
            a = this._find(a), a && (this.stamps = this.stamps.concat(a), a.forEach(this.ignore, this))
        }, n.unstamp = function(a) {
            a = this._find(a), a && a.forEach(function(a) {
                d.removeFrom(this.stamps, a), this.unignore(a)
            }, this)
        }, n._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d.makeArray(a)) : void 0
        }, n._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, n._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, n._manageStamp = k, n._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                d = this._boundingRect,
                e = c(a),
                f = {
                    left: b.left - d.left - e.marginLeft,
                    top: b.top - d.top - e.marginTop,
                    right: d.right - b.right - e.marginRight,
                    bottom: d.bottom - b.bottom - e.marginBottom
                };
            return f
        }, n.handleEvent = d.handleEvent, n.bindResize = function() {
            a.addEventListener("resize", this), this.isResizeBound = !0
        }, n.unbindResize = function() {
            a.removeEventListener("resize", this), this.isResizeBound = !1
        }, n.onresize = function() {
            this.resize()
        }, d.debounceMethod(f, "onresize", 100), n.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, n.needsResizeLayout = function() {
            var a = c(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, n.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, n.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, n.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, n.reveal = function(a) {
            if (this._emitCompleteOnItems("reveal", a), a && a.length) {
                var b = this.updateStagger();
                a.forEach(function(a, c) {
                    a.stagger(c * b), a.reveal()
                })
            }
        }, n.hide = function(a) {
            if (this._emitCompleteOnItems("hide", a), a && a.length) {
                var b = this.updateStagger();
                a.forEach(function(a, c) {
                    a.stagger(c * b), a.hide()
                })
            }
        }, n.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, n.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, n.getItem = function(a) {
            for (var b = 0; b < this.items.length; b++) {
                var c = this.items[b];
                if (c.element == a) return c
            }
        }, n.getItems = function(a) {
            a = d.makeArray(a);
            var b = [];
            return a.forEach(function(a) {
                var c = this.getItem(a);
                c && b.push(c)
            }, this), b
        }, n.remove = function(a) {
            var b = this.getItems(a);
            this._emitCompleteOnItems("remove", b), b && b.length && b.forEach(function(a) {
                a.remove(), d.removeFrom(this.items, a)
            }, this)
        }, n.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "", this.items.forEach(function(a) {
                a.destroy()
            }), this.unbindResize();
            var b = this.element.outlayerGUID;
            delete m[b], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
        }, f.data = function(a) {
            a = d.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && m[b]
        }, f.create = function(a, b) {
            var c = g(f);
            return c.defaults = d.extend({}, f.defaults), d.extend(c.defaults, b), c.compatOptions = d.extend({}, f.compatOptions), c.namespace = a, c.data = f.data, c.Item = g(e), d.htmlInit(c, a), j && j.bridget && j.bridget(a, c), c
        };
        var o = {
            ms: 1,
            s: 1e3
        };
        return f.Item = e, f
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window, function(a, b) {
        var c = a.create("masonry");
        return c.compatOptions.fitWidth = "isFitWidth", c.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var a = 0; a < this.cols; a++) this.colYs.push(0);
            this.maxY = 0
        }, c.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, c.prototype.getContainerWidth = function() {
            var a = this._getOption("fitWidth"),
                c = a ? this.element.parentNode : this.element,
                d = b(c);
            this.containerWidth = d && d.innerWidth
        }, c.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                c = b && 1 > b ? "round" : "ceil",
                d = Math[c](a.size.outerWidth / this.columnWidth);
            d = Math.min(d, this.cols);
            for (var e = this._getColGroup(d), f = Math.min.apply(Math, e), g = e.indexOf(f), h = {
                    x: this.columnWidth * g,
                    y: f
                }, i = f + a.size.outerHeight, j = this.cols + 1 - e.length, k = 0; j > k; k++) this.colYs[g + k] = i;
            return h
        }, c.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, c.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this._getOption("originLeft"),
                f = e ? d.left : d.right,
                g = f + c.outerWidth,
                h = Math.floor(f / this.columnWidth);
            h = Math.max(0, h);
            var i = Math.floor(g / this.columnWidth);
            i -= g % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i);
            for (var j = this._getOption("originTop"), k = (j ? d.top : d.bottom) + c.outerHeight, l = h; i >= l; l++) this.colYs[l] = Math.max(k, this.colYs[l])
        }, c.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (a.width = this._getContainerFitWidth()), a
        }, c.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, c.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a != this.containerWidth
        }, c
    }),
    function(a) {
        "use strict";
        a.fn.fitVids = function(b) {
            var c = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var d = document.head || document.getElementsByTagName("head")[0],
                    e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    f = document.createElement("div");
                f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>", d.appendChild(f.childNodes[1])
            }
            return b && a.extend(c, b), this.each(function() {
                var b = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                c.customSelector && b.push(c.customSelector);
                var d = ".fitvidsignore";
                c.ignore && (d = d + ", " + c.ignore);
                var e = a(this).find(b.join(","));
                e = e.not("object object"), e = e.not(d), e.each(function() {
                    var b = a(this);
                    if (!(b.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                        b.css("height") || b.css("width") || !isNaN(b.attr("height")) && !isNaN(b.attr("width")) || (b.attr("height", 9), b.attr("width", 16));
                        var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                            e = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                            f = c / e;
                        if (!b.attr("name")) {
                            var g = "fitvid" + a.fn.fitVids._count;
                            b.attr("name", g), a.fn.fitVids._count++
                        }
                        b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * f + "%"), b.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }, a.fn.fitVids._count = 0
    }(window.jQuery || window.Zepto),
    function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.NProgress = b()
    }(this, function() {
        function a(a, b, c) {
            return a < b ? b : a > c ? c : a
        }

        function b(a) {
            return 100 * (-1 + a)
        }

        function c(a, c, d) {
            var e;
            return e = "translate3d" === j.positionUsing ? {
                transform: "translate3d(" + b(a) + "%,0,0)"
            } : "translate" === j.positionUsing ? {
                transform: "translate(" + b(a) + "%,0)"
            } : {
                "margin-left": b(a) + "%"
            }, e.transition = "all " + c + "ms " + d, e
        }

        function d(a, b) {
            var c = "string" == typeof a ? a : g(a);
            return c.indexOf(" " + b + " ") >= 0
        }

        function e(a, b) {
            var c = g(a),
                e = c + b;
            d(c, b) || (a.className = e.substring(1))
        }

        function f(a, b) {
            var c, e = g(a);
            d(a, b) && (c = e.replace(" " + b + " ", " "), a.className = c.substring(1, c.length - 1))
        }

        function g(a) {
            return (" " + (a.className || "") + " ").replace(/\s+/gi, " ")
        }

        function h(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        var i = {};
        i.version = "0.2.0";
        var j = i.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        i.configure = function(a) {
                var b, c;
                for (b in a) c = a[b], void 0 !== c && a.hasOwnProperty(b) && (j[b] = c);
                return this
            }, i.status = null, i.set = function(b) {
                var d = i.isStarted();
                b = a(b, j.minimum, 1), i.status = 1 === b ? null : b;
                var e = i.render(!d),
                    f = e.querySelector(j.barSelector),
                    g = j.speed,
                    h = j.easing;
                return e.offsetWidth, k(function(a) {
                    "" === j.positionUsing && (j.positionUsing = i.getPositioningCSS()), l(f, c(b, g, h)), 1 === b ? (l(e, {
                        transition: "none",
                        opacity: 1
                    }), e.offsetWidth, setTimeout(function() {
                        l(e, {
                            transition: "all " + g + "ms linear",
                            opacity: 0
                        }), setTimeout(function() {
                            i.remove(), a()
                        }, g)
                    }, g)) : setTimeout(a, g)
                }), this
            }, i.isStarted = function() {
                return "number" == typeof i.status
            }, i.start = function() {
                i.status || i.set(0);
                var a = function() {
                    setTimeout(function() {
                        i.status && (i.trickle(), a())
                    }, j.trickleSpeed)
                };
                return j.trickle && a(), this
            }, i.done = function(a) {
                return a || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this
            }, i.inc = function(b) {
                var c = i.status;
                return c ? ("number" != typeof b && (b = (1 - c) * a(Math.random() * c, .1, .95)), c = a(c + b, 0, .994), i.set(c)) : i.start()
            }, i.trickle = function() {
                return i.inc(Math.random() * j.trickleRate)
            },
            function() {
                var a = 0,
                    b = 0;
                i.promise = function(c) {
                    return c && "resolved" !== c.state() ? (0 === b && i.start(), a++, b++, c.always(function() {
                        b--, 0 === b ? (a = 0, i.done()) : i.set((a - b) / a)
                    }), this) : this
                }
            }(), i.render = function(a) {
                if (i.isRendered()) return document.getElementById("nprogress");
                e(document.documentElement, "nprogress-busy");
                var c = document.createElement("div");
                c.id = "nprogress", c.innerHTML = j.template;
                var d, f = c.querySelector(j.barSelector),
                    g = a ? "-100" : b(i.status || 0),
                    k = document.querySelector(j.parent);
                return l(f, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + g + "%,0,0)"
                }), j.showSpinner || (d = c.querySelector(j.spinnerSelector), d && h(d)), k != document.body && e(k, "nprogress-custom-parent"), k.appendChild(c), c
            }, i.remove = function() {
                f(document.documentElement, "nprogress-busy"), f(document.querySelector(j.parent), "nprogress-custom-parent");
                var a = document.getElementById("nprogress");
                a && h(a)
            }, i.isRendered = function() {
                return !!document.getElementById("nprogress")
            }, i.getPositioningCSS = function() {
                var a = document.body.style,
                    b = "WebkitTransform" in a ? "Webkit" : "MozTransform" in a ? "Moz" : "msTransform" in a ? "ms" : "OTransform" in a ? "O" : "";
                return b + "Perspective" in a ? "translate3d" : b + "Transform" in a ? "translate" : "margin"
            };
        var k = function() {
                function a() {
                    var c = b.shift();
                    c && c(a)
                }
                var b = [];
                return function(c) {
                    b.push(c), 1 == b.length && a()
                }
            }(),
            l = function() {
                function a(a) {
                    return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(a, b) {
                        return b.toUpperCase()
                    })
                }

                function b(a) {
                    var b = document.body.style;
                    if (a in b) return a;
                    for (var c, d = e.length, f = a.charAt(0).toUpperCase() + a.slice(1); d--;)
                        if (c = e[d] + f, c in b) return c;
                    return a
                }

                function c(c) {
                    return c = a(c), f[c] || (f[c] = b(c))
                }

                function d(a, b, d) {
                    b = c(b), a.style[b] = d
                }
                var e = ["Webkit", "O", "Moz", "ms"],
                    f = {};
                return function(a, b) {
                    var c, e, f = arguments;
                    if (2 == f.length)
                        for (c in b) e = b[c], void 0 !== e && b.hasOwnProperty(c) && d(a, c, e);
                    else d(a, f[1], f[2])
                }
            }();
        return i
    }), ! function(a) {
        "use strict";

        function b(a) {
            var b, c, d = [];
            if ("number" == typeof a) d.push(a);
            else {
                c = a.split(",");
                for (var e = 0; e < c.length; e++)
                    if (b = c[e].split("-"), 2 === b.length)
                        for (var f = parseInt(b[0], 10); f <= b[1]; f++) d.push(f);
                    else 1 === b.length && d.push(parseInt(b[0], 10))
            }
            return d
        }
        var c = {};
        a.fn.gist = function(d) {
            return this.each(function() {
                function e(c) {
                    var d, e, f, g, h;
                    c && c.div ? (c.stylesheet && (0 === c.stylesheet.indexOf("<link") ? c.stylesheet = c.stylesheet.replace(/\\/g, "").match(/href=\"([^\s]*)\"/)[1] : 0 !== c.stylesheet.indexOf("http") && (0 !== c.stylesheet.indexOf("/") && (c.stylesheet = "/" + c.stylesheet), c.stylesheet = "https://gist.github.com" + c.stylesheet)), c.stylesheet && 0 === a('link[href="' + c.stylesheet + '"]').length && (d = document.createElement("link"), e = document.getElementsByTagName("head")[0], d.type = "text/css", d.rel = "stylesheet", d.href = c.stylesheet, e.insertBefore(d, e.firstChild)), h = a(c.div), h.removeAttr("id"), s.html("").append(h), m && (g = b(m), h.find("td.line-data").css({
                        width: "100%"
                    }), h.find(".js-file-line").each(function(b) {
                        -1 !== a.inArray(b + 1, g) && a(this).css({
                            "background-color": "rgb(255, 255, 204)"
                        })
                    })), k && (f = b(k), h.find(".js-file-line").each(function(b) {
                        -1 === a.inArray(b + 1, f) && a(this).parent().remove()
                    })), n && (h.find(".gist-meta").remove(), h.find(".gist-data").css("border-bottom", "0px"), h.find(".gist-file").css("border-bottom", "1px solid #ddd")), o && h.find(".js-line-number").remove()) : s.html("Failed loading gist " + i)
                }

                function f(a) {
                    s.html("Failed loading gist " + i + ": " + a)
                }

                function g() {
                    "function" == typeof d && d()
                }
                var h, i, j, k, l, m, n, o, p, q, r, s = a(this),
                    t = {};
                return s.css("display", "block"), h = s.data("gist-id") || "", j = s.data("gist-file"), n = s.data("gist-hide-footer") === !0, o = s.data("gist-hide-line-numbers") === !0, k = s.data("gist-line"), m = s.data("gist-highlight-line"), q = s.data("gist-show-spinner") === !0, p = !q && (void 0 === s.data("gist-show-loading") || s.data("gist-show-loading")), j && (t.file = j), !!h && (i = "https://gist.github.com/" + h + ".json", r = s.data("gist-enable-cache") === !0 || c[i], l = "Loading gist " + i + (t.file ? ", file: " + t.file : "") + "...", p && s.html(l), q && s.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="' + l + '" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'), void a.ajax({
                    url: i,
                    data: t,
                    dataType: "jsonp",
                    timeout: 2e4,
                    beforeSend: function() {
                        if (r) {
                            if (c[i]) return c[i].then(function(a) {
                                e(a), g()
                            }, function(a) {
                                f(a)
                            }), !1;
                            c[i] = a.Deferred()
                        }
                    },
                    success: function(a) {
                        r && c[i] && c[i].resolve(a), e(a)
                    },
                    error: function(a, b) {
                        f(b)
                    },
                    complete: function() {
                        g()
                    }
                }))
            })
        }, a(function() {
            a("[data-gist-id]").gist()
        })
    }(jQuery);