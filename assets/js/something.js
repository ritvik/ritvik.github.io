/*!
 * Minimal Mistakes Jekyll Theme 4.17.2 by Michael Rose
 * Copyright 2013-2019 Michael Rose - mademistakes.com | @mmistakes
 * Licensed under MIT
 */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t, n) {
        n = n || ue;
        var r, o, i = n.createElement("script");
        if (i.text = e, t)
            for (r in Ce) o = t[r] || t.getAttribute && t.getAttribute(r), o && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }

    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[me.call(e)] || "object" : typeof e
    }

    function o(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return xe(e) || we(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function a(e, t, n) {
        return xe(t) ? Ee.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? Ee.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? Ee.grep(e, function(e) {
            return pe.call(t, e) > -1 !== n
        }) : Ee.filter(t, e, n)
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var t = {};
        return Ee.each(e.match(qe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function f(e, t, n, r) {
        var o;
        try {
            e && xe(o = e.promise) ? o.call(e).done(t).fail(n) : e && xe(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        ue.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), Ee.ready()
    }

    function p(e, t) {
        return t.toUpperCase()
    }

    function h(e) {
        return e.replace(Be, "ms-").replace($e, p)
    }

    function m() {
        this.expando = Ee.expando + m.uid++
    }

    function g(e) {
        return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : Ue.test(e) ? JSON.parse(e) : e
    }

    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Xe, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = g(n)
                } catch (o) {}
                We.set(e, t, n)
            } else n = void 0;
        return n
    }

    function y(e, t, n, r) {
        var o, i, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return Ee.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (Ee.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (Ee.cssNumber[t] || "px" !== l && +u) && Ye.exec(Ee.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) Ee.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
            c = 2 * c, Ee.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }

    function b(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            o = tt[r];
        return o ? o : (t = n.body.appendChild(n.createElement(r)), o = Ee.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), tt[r] = o, o)
    }

    function x(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; a > i; i++) r = e[i], r.style && (n = r.style.display, t ? ("none" === n && (o[i] = ze.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && Je(r) && (o[i] = b(r))) : "none" !== n && (o[i] = "none", ze.set(r, "display", n)));
        for (i = 0; a > i; i++) null != o[i] && (e[i].style.display = o[i]);
        return e
    }

    function w(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? Ee.merge([e], n) : n
    }

    function C(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
    }

    function T(e, t, n, o, i) {
        for (var a, s, u, l, c, f, d = t.createDocumentFragment(), p = [], h = 0, m = e.length; m > h; h++)
            if (a = e[h], a || 0 === a)
                if ("object" === r(a)) Ee.merge(p, a.nodeType ? [a] : a);
                else if (at.test(a)) {
            for (s = s || d.appendChild(t.createElement("div")), u = (rt.exec(a) || ["", ""])[1].toLowerCase(), l = it[u] || it._default, s.innerHTML = l[1] + Ee.htmlPrefilter(a) + l[2], f = l[0]; f--;) s = s.lastChild;
            Ee.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(a));
        for (d.textContent = "", h = 0; a = p[h++];)
            if (o && Ee.inArray(a, o) > -1) i && i.push(a);
            else if (c = Ke(a), s = w(d.appendChild(a), "script"), c && C(s), n)
            for (f = 0; a = s[f++];) ot.test(a.type || "") && n.push(a);
        return d
    }

    function E() {
        return !0
    }

    function S() {
        return !1
    }

    function k(e, t) {
        return e === A() == ("focus" === t)
    }

    function A() {
        try {
            return ue.activeElement
        } catch (e) {}
    }

    function N(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) N(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = S;
        else if (!o) return e;
        return 1 === i && (a = o, o = function(e) {
            return Ee().off(e), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = Ee.guid++)), e.each(function() {
            Ee.event.add(this, t, o, r, n)
        })
    }

    function j(e, t, n) {
        return n ? (ze.set(e, t, !1), void Ee.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, i = ze.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (i.length)(Ee.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (i = ce.call(arguments), ze.set(this, t, i), r = n(this, t), this[t](), o = ze.get(this, t), i !== o || r ? ze.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                } else i.length && (ze.set(this, t, {
                    value: Ee.event.trigger(Ee.extend(i[0], Ee.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void(void 0 === ze.get(e, t) && Ee.event.add(e, t, E))
    }

    function I(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ee(e).children("tbody")[0] || e : e
    }

    function L(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function D(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function O(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (ze.hasData(e) && (i = ze.access(e), a = ze.set(t, i), l = i.events)) {
                delete a.handle, a.events = {};
                for (o in l)
                    for (n = 0, r = l[o].length; r > n; n++) Ee.event.add(t, o, l[o][n])
            }
            We.hasData(e) && (s = We.access(e), u = Ee.extend({}, s), We.set(t, u))
        }
    }

    function H(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && nt.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function P(e, t, r, o) {
        t = fe.apply([], t);
        var i, a, s, u, l, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            m = xe(h);
        if (m || d > 1 && "string" == typeof h && !be.checkClone && dt.test(h)) return e.each(function(n) {
            var i = e.eq(n);
            m && (t[0] = h.call(this, n, i.html())), P(i, t, r, o)
        });
        if (d && (i = T(t, e[0].ownerDocument, !1, e, o), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || o)) {
            for (s = Ee.map(w(i, "script"), L), u = s.length; d > f; f++) l = i, f !== p && (l = Ee.clone(l, !0, !0), u && Ee.merge(s, w(l, "script"))), r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, Ee.map(s, D), f = 0; u > f; f++) l = s[f], ot.test(l.type || "") && !ze.access(l, "globalEval") && Ee.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Ee._evalUrl && !l.noModule && Ee._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : n(l.textContent.replace(pt, ""), l, c))
        }
        return e
    }

    function q(e, t, n) {
        for (var r, o = t ? Ee.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || Ee.cleanData(w(r)), r.parentNode && (n && Ke(r) && C(w(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function M(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || mt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || Ke(e) || (a = Ee.style(e, t)), !be.pixelBoxStyles() && ht.test(a) && gt.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function _(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function R(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
            if (e = vt[n] + t, e in yt) return e
    }

    function B(e) {
        var t = Ee.cssProps[e] || bt[e];
        return t ? t : e in yt ? e : bt[e] = R(e) || e
    }

    function $(e, t, n) {
        var r = Ye.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function F(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; 4 > a; a += 2) "margin" === n && (u += Ee.css(e, n + Ve[a], !0, o)), r ? ("content" === n && (u -= Ee.css(e, "padding" + Ve[a], !0, o)), "margin" !== n && (u -= Ee.css(e, "border" + Ve[a] + "Width", !0, o))) : (u += Ee.css(e, "padding" + Ve[a], !0, o), "padding" !== n ? u += Ee.css(e, "border" + Ve[a] + "Width", !0, o) : s += Ee.css(e, "border" + Ve[a] + "Width", !0, o));
        return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
    }

    function z(e, t, n) {
        var r = mt(e),
            o = !be.boxSizingReliable() || n,
            i = o && "border-box" === Ee.css(e, "boxSizing", !1, r),
            a = i,
            s = M(e, t, r),
            u = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ht.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!be.boxSizingReliable() && i || "auto" === s || !parseFloat(s) && "inline" === Ee.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === Ee.css(e, "boxSizing", !1, r), a = u in e, a && (s = e[u])), s = parseFloat(s) || 0, s + F(e, t, n || (i ? "border" : "content"), a, r, s) + "px"
    }

    function W(e, t, n, r, o) {
        return new W.prototype.init(e, t, n, r, o)
    }

    function U() {
        St && (ue.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, Ee.fx.interval), Ee.fx.tick())
    }

    function X() {
        return e.setTimeout(function() {
            Et = void 0
        }), Et = Date.now()
    }

    function Q(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ve[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Y(e, t, n) {
        for (var r, o = (K.tweeners[t] || []).concat(K.tweeners["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function V(e, t, n) {
        var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            m = e.nodeType && Je(e),
            g = ze.get(e, "fxshow");
        n.queue || (a = Ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, Ee.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (o = t[r], kt.test(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[r]) continue;
                    m = !0
                }
                p[r] = g && g[r] || Ee.style(e, r)
            }
        if (u = !Ee.isEmptyObject(t), u || !Ee.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = g && g.display, null == l && (l = ze.get(e, "display")), c = Ee.css(e, "display"), "none" === c && (l ? c = l : (x([e], !0), l = e.style.display || l, c = Ee.css(e, "display"), x([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Ee.css(e, "float") && (u || (d.done(function() {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in p) u || (g ? "hidden" in g && (m = g.hidden) : g = ze.access(e, "fxshow", {
                display: l
            }), i && (g.hidden = !m), m && x([e], !0), d.done(function() {
                m || x([e]), ze.remove(e, "fxshow");
                for (r in p) Ee.style(e, r, p[r])
            })), u = Y(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
        }
    }

    function G(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = h(n), o = t[r], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Ee.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function K(e, t, n) {
        var r, o, i = 0,
            a = K.prefilters.length,
            s = Ee.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var t = Et || X(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(i);
                return s.notifyWith(e, [l, i, n]), 1 > i && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: Ee.extend({}, t),
                opts: Ee.extend(!0, {
                    specialEasing: {},
                    easing: Ee.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Et || X(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (G(c, l.opts.specialEasing); a > i; i++)
            if (r = K.prefilters[i].call(l, e, c, l.opts)) return xe(r.stop) && (Ee._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return Ee.map(c, Y, l), xe(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ee.fx.timer(Ee.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function Z(e) {
        var t = e.match(qe) || [];
        return t.join(" ")
    }

    function J(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ee(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(qe) || [] : []
    }

    function te(e, t, n, o) {
        var i;
        if (Array.isArray(t)) Ee.each(t, function(t, r) {
            n || _t.test(e) ? o(e, r) : te(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o)
        });
        else if (n || "object" !== r(t)) o(e, t);
        else
            for (i in t) te(e + "[" + i + "]", t[i], n, o)
    }

    function ne(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(qe) || [];
            if (xe(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function re(e, t, n, r) {
        function o(s) {
            var u;
            return i[s] = !0, Ee.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
            }), u
        }
        var i = {},
            a = e === Gt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function oe(e, t) {
        var n, r, o = Ee.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Ee.extend(!0, e, r), e
    }

    function ie(e, t, n) {
        for (var r, o, i, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in n) i = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
    }

    function ae(e, t, n, r) {
        var o, i, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
            if (a = l[u + " " + i] || l["* " + i], !a)
                for (o in l)
                    if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var se = [],
        ue = e.document,
        le = Object.getPrototypeOf,
        ce = se.slice,
        fe = se.concat,
        de = se.push,
        pe = se.indexOf,
        he = {},
        me = he.toString,
        ge = he.hasOwnProperty,
        ve = ge.toString,
        ye = ve.call(Object),
        be = {},
        xe = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        we = function(e) {
            return null != e && e === e.window
        },
        Ce = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        Te = "3.4.1",
        Ee = function(e, t) {
            return new Ee.fn.init(e, t)
        },
        Se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Ee.fn = Ee.prototype = {
        jquery: Te,
        constructor: Ee,
        length: 0,
        toArray: function() {
            return ce.call(this)
        },
        get: function(e) {
            return null == e ? ce.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = Ee.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return Ee.each(this, e)
        },
        map: function(e) {
            return this.pushStack(Ee.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ce.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: de,
        sort: se.sort,
        splice: se.splice
    }, Ee.extend = Ee.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || xe(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (Ee.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || Ee.isPlainObject(n) ? n : {}, o = !1, a[t] = Ee.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Ee.extend({
        expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return e && "[object Object]" === me.call(e) ? (t = le(e)) ? (n = ge.call(t, "constructor") && t.constructor, "function" == typeof n && ve.call(n) === ye) : !0 : !1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            n(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (o(e))
                for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Se, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (o(Object(e)) ? Ee.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : pe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (o(e))
                for (r = e.length; r > a; a++) i = t(e[a], a, n), null != i && s.push(i);
            else
                for (a in e) i = t(e[a], a, n), null != i && s.push(i);
            return fe.apply([], s)
        },
        guid: 1,
        support: be
    }), "function" == typeof Symbol && (Ee.fn[Symbol.iterator] = se[Symbol.iterator]), Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        he["[object " + t + "]"] = t.toLowerCase()
    });
    var ke = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, u, l, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== O && D(t), t = t || O, P)) {
                if (11 !== h && (u = be.exec(e)))
                    if (o = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (d && (a = d.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = u[3]) && C.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                    }
                if (C.qsa && !Q[e + " "] && (!q || !q.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, d = t, 1 === h && fe.test(e)) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(Te, Ee) : t.setAttribute("id", s = B), l = k(e), i = l.length; i--;) l[i] = "#" + s + " " + p(l[i]);
                        c = l.join(","), d = xe.test(e) && f(t.parentNode) || t
                    }
                    try {
                        return J.apply(n, d.querySelectorAll(c)), n
                    } catch (m) {
                        Q(e, !0)
                    } finally {
                        s === B && t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function o(e) {
            var t = O.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
            }
        }

        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = z++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, o);
                return !1
            } : function(t, n, u) {
                var l, c, f, d = [F, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[B] || (t[B] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[i]) && l[0] === F && l[1] === s) return d[2] = l[2];
                                if (c[i] = d, d[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r
        }

        function v(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
            return a
        }

        function y(e, t, n, o, i, a) {
            return o && !o[B] && (o = y(o)), i && !i[B] && (i = y(i, a)), r(function(r, a, s, u) {
                var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    m = r || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? m : v(m, d, e, s, u),
                    b = n ? i || (r ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, u), o)
                    for (l = v(b, p), o(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            i(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = i ? te(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, u) : J.apply(a, b)
            })
        }

        function b(e) {
            for (var t, n, r, o = e.length, i = T.relative[e[0].type], a = i || T.relative[" "], s = i ? 1 : 0, u = h(function(e) {
                    return e === t
                }, a, !0), l = h(function(e) {
                    return te(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var o = !i && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, o
                }]; o > s; s++)
                if (n = T.relative[e[s].type]) c = [h(m(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; o > r && !T.relative[e[r].type]; r++);
                        return y(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && b(e.slice(s, r)), o > r && b(e = e.slice(r)), o > r && p(e))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function x(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, d, p = 0,
                        h = "0",
                        m = r && [],
                        g = [],
                        y = j,
                        b = r || i && T.find.TAG("*", l),
                        x = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (j = a === O || a || l); h !== w && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (f = 0, a || c.ownerDocument === O || (D(c), s = !P); d = e[f++];)
                                if (d(c, a || O, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (F = x)
                        }
                        o && ((c = !d && c) && p--, r && m.push(c))
                    }
                    if (p += h, o && h !== p) {
                        for (f = 0; d = n[f++];) d(m, g, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = K.call(u));
                            g = v(g)
                        }
                        J.apply(u, g), l && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (F = x, j = y), m
                };
            return o ? r(a) : a
        }
        var w, C, T, E, S, k, A, N, j, I, L, D, O, H, P, q, M, _, R, B = "sizzle" + 1 * new Date,
            $ = e.document,
            F = 0,
            z = 0,
            W = n(),
            U = n(),
            X = n(),
            Q = n(),
            Y = function(e, t) {
                return e === t && (L = !0), 0
            },
            V = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            Z = G.push,
            J = G.push,
            ee = G.slice,
            te = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            ie = "\\[" + re + "*(" + oe + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            ae = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(re + "+", "g"),
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp(re + "|>"),
            de = new RegExp(ae),
            pe = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /HTML$/i,
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Ce = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ee = function(e, t) {
                return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Se = function() {
                D()
            },
            ke = h(function(e) {
                return e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(G = ee.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (Ae) {
            J = {
                apply: G.length ? function(e, t) {
                    Z.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, S = t.isXML = function(e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !me.test(t || n && n.nodeName || "HTML")
        }, D = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, H = O.documentElement, P = !S(O), $ !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), C.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = o(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = ye.test(O.getElementsByClassName), C.getById = o(function(e) {
                return H.appendChild(e).id = B, !O.getElementsByName || !O.getElementsByName(B).length
            }), C.getById ? (T.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if (n = i.getAttributeNode("id"), n && n.value === e) return [i];
                        for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                            if (n = i.getAttributeNode("id"), n && n.value === e) return [i]
                    }
                    return []
                }
            }), T.find.TAG = C.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, T.find.CLASS = C.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
            }, M = [], q = [], (C.qsa = ye.test(O.querySelectorAll)) && (o(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + B + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || q.push(".#.+[+~]")
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + re + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), H.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (C.matchesSelector = ye.test(_ = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                C.disconnectedMatch = _.call(e, "*"), _.call(e, "[s!='']:x"), M.push("!=", ae)
            }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = ye.test(H.compareDocumentPosition), R = t || ye.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === $ && R($, e) ? -1 : t === O || t.ownerDocument === $ && R($, t) ? 1 : I ? te(I, e) - te(I, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return L = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    s = [e],
                    u = [t];
                if (!o || !i) return e === O ? -1 : t === O ? 1 : o ? -1 : i ? 1 : I ? te(I, e) - te(I, t) : 0;
                if (o === i) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === $ ? -1 : u[r] === $ ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && D(e), C.matchesSelector && P && !Q[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n))) try {
                var r = _.call(e, n);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (o) {
                Q(n, !0)
            }
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && D(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== r ? r : C.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(Te, Ee)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (L = !C.detectDuplicates, I = !C.sortStable && e.slice(0), e.sort(Y), L) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return I = null, e
        }, E = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += E(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Ce).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, d, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            b = !1;
                        if (g) {
                            if (i) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (d = g, f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === F && l[1], b = p && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [F, p, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === F && l[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [F, b]), d !== t)););
                            return b -= o, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[B] ? i(n) : i.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = te(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = A(e.replace(ue, "$1"));
                    return o[B] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, Ce),
                        function(t) {
                            return (t.textContent || E(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: l(!1),
                disabled: l(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = u(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, k = t.tokenize = function(e, n) {
            var r, o, i, a, s, u, l, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                r && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
        }, A = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = X[e + " "];
            if (!i) {
                for (t || (t = k(e)), n = t.length; n--;) i = b(t[n]), i[B] ? r.push(i) : o.push(i);
                i = X(e, x(o, r)), i.selector = e
            }
            return i
        }, N = t.select = function(e, t, n, r) {
            var o, i, a, s, u, l = "function" == typeof e && e,
                c = !r && k(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && P && T.relative[i[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Ce), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Ce), xe.test(i[0].type) && f(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && p(i), !e) return J.apply(n, r), n;
                        break
                    }
            }
            return (l || A(e, c))(r, t, !P, n, !t || xe.test(e) && f(t.parentNode) || t), n
        }, C.sortStable = B.split("").sort(Y).join("") === B, C.detectDuplicates = !!L, D(), C.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(ne, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Ee.find = ke, Ee.expr = ke.selectors, Ee.expr[":"] = Ee.expr.pseudos, Ee.uniqueSort = Ee.unique = ke.uniqueSort, Ee.text = ke.getText, Ee.isXMLDoc = ke.isXML, Ee.contains = ke.contains, Ee.escapeSelector = ke.escape;
    var Ae = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && Ee(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        Ne = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        je = Ee.expr.match.needsContext,
        Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Ee.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ee.find.matchesSelector(r, e) ? [r] : [] : Ee.find.matches(e, Ee.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Ee.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(Ee(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (Ee.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; r > t; t++) Ee.find(e, o[t], n);
            return r > 1 ? Ee.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && je.test(e) ? Ee(e) : e || [], !1).length
        }
    });
    var Le, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Oe = Ee.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || Le, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof Ee ? t[0] : t, Ee.merge(this, Ee.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ue, !0)), Ie.test(r[1]) && Ee.isPlainObject(t))
                        for (r in t) xe(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return o = ue.getElementById(r[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : xe(e) ? void 0 !== n.ready ? n.ready(e) : e(Ee) : Ee.makeArray(e, this)
        };
    Oe.prototype = Ee.fn, Le = Ee(ue);
    var He = /^(?:parents|prev(?:Until|All))/,
        Pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Ee.fn.extend({
        has: function(e) {
            var t = Ee(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Ee.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && Ee(e);
            if (!je.test(e))
                for (; o > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(i.length > 1 ? Ee.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.call(Ee(e), this[0]) : pe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ee.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Ae(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Ae(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ae(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ae(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Ae(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Ae(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ne((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ne(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (i(e, "template") && (e = e.content || e), Ee.merge([], e.childNodes))
        }
    }, function(e, t) {
        Ee.fn[e] = function(n, r) {
            var o = Ee.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Ee.filter(r, o)), this.length > 1 && (Pe[e] || Ee.uniqueSort(o), He.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var qe = /[^\x20\t\r\n\f]+/g;
    Ee.Callbacks = function(e) {
        e = "string" == typeof e ? u(e) : Ee.extend({}, e);
        var t, n, o, i, a = [],
            s = [],
            l = -1,
            c = function() {
                for (i = i || e.once, o = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            f = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function o(t) {
                        Ee.each(t, function(t, n) {
                            xe(n) ? e.unique && f.has(n) || a.push(n) : n && n.length && "string" !== r(n) && o(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return Ee.each(arguments, function(e, t) {
                        for (var n;
                            (n = Ee.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? Ee.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return i = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = s = [], n || t || (a = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, Ee.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", Ee.Callbacks("memory"), Ee.Callbacks("memory"), 2],
                    ["resolve", "done", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return Ee.Deferred(function(t) {
                            Ee.each(n, function(n, r) {
                                var o = xe(e[r[4]]) && e[r[4]];
                                i[r[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && xe(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, o) {
                        function i(t, n, r, o) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(a > t)) {
                                            if (e = r.apply(s, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, xe(f) ? o ? f.call(e, i(a, n, l, o), i(a, n, c, o)) : (a++, f.call(e, i(a, n, l, o), i(a, n, c, o), i(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, u = [e]), (o || n.resolveWith)(s, u))
                                        }
                                    },
                                    d = o ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? d() : (Ee.Deferred.getStackHook && (d.stackTrace = Ee.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return Ee.Deferred(function(e) {
                            n[0][3].add(i(0, e, xe(o) ? o : l, e.notifyWith)), n[1][3].add(i(0, e, xe(t) ? t : l)), n[2][3].add(i(0, e, xe(r) ? r : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Ee.extend(e, o) : o
                    }
                },
                i = {};
            return Ee.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                o[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[t[0] + "With"] = a.fireWith
            }), o.promise(i), t && t.call(i, i), i
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = ce.call(arguments),
                i = Ee.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = arguments.length > 1 ? ce.call(arguments) : n, --t || i.resolveWith(r, o)
                    }
                };
            if (1 >= t && (f(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || xe(o[n] && o[n].then))) return i.then();
            for (; n--;) f(o[n], a(n), i.reject);
            return i.promise()
        }
    });
    var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Ee.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Me.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Ee.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var _e = Ee.Deferred();
    Ee.fn.ready = function(e) {
        return _e.then(e)["catch"](function(e) {
            Ee.readyException(e)
        }), this
    }, Ee.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --Ee.readyWait : Ee.isReady) || (Ee.isReady = !0, e !== !0 && --Ee.readyWait > 0 || _e.resolveWith(ue, [Ee]))
        }
    }), Ee.ready.then = _e.then, "complete" === ue.readyState || "loading" !== ue.readyState && !ue.documentElement.doScroll ? e.setTimeout(Ee.ready) : (ue.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Re = function(e, t, n, o, i, a, s) {
            var u = 0,
                l = e.length,
                c = null == n;
            if ("object" === r(n)) {
                i = !0;
                for (u in n) Re(e, t, u, n[u], !0, a, s)
            } else if (void 0 !== o && (i = !0, xe(o) || (s = !0), c && (s ? (t.call(e, o), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(Ee(e), n)
                })), t))
                for (; l > u; u++) t(e[u], n, s ? o : o.call(e[u], u, t(e[u], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : a
        },
        Be = /^-ms-/,
        $e = /-([a-z])/g,
        Fe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    m.uid = 1, m.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[h(t)] = n;
            else
                for (r in t) o[h(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in r ? [t] : t.match(qe) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || Ee.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !Ee.isEmptyObject(t)
        }
    };
    var ze = new m,
        We = new m,
        Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Xe = /[A-Z]/g;
    Ee.extend({
        hasData: function(e) {
            return We.hasData(e) || ze.hasData(e)
        },
        data: function(e, t, n) {
            return We.access(e, t, n)
        },
        removeData: function(e, t) {
            We.remove(e, t)
        },
        _data: function(e, t, n) {
            return ze.access(e, t, n)
        },
        _removeData: function(e, t) {
            ze.remove(e, t)
        }
    }), Ee.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = We.get(i), 1 === i.nodeType && !ze.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = h(r.slice(5)), v(i, r, o[r])));
                    ze.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                We.set(this, e)
            }) : Re(this, function(t) {
                var n;
                if (i && void 0 === t) {
                    if (n = We.get(i, e), void 0 !== n) return n;
                    if (n = v(i, e), void 0 !== n) return n
                } else this.each(function() {
                    We.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                We.remove(this, e)
            })
        }
    }), Ee.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ze.get(e, t), n && (!r || Array.isArray(n) ? r = ze.access(e, t, Ee.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Ee.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = Ee._queueHooks(e, t),
                a = function() {
                    Ee.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ze.get(e, n) || ze.access(e, n, {
                empty: Ee.Callbacks("once memory").add(function() {
                    ze.remove(e, [t + "queue", n])
                })
            })
        }
    }), Ee.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Ee.queue(this, e, t);
                Ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Ee.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = Ee.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ze.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ye = new RegExp("^(?:([+-])=|)(" + Qe + ")([a-z%]*)$", "i"),
        Ve = ["Top", "Right", "Bottom", "Left"],
        Ge = ue.documentElement,
        Ke = function(e) {
            return Ee.contains(e.ownerDocument, e)
        },
        Ze = {
            composed: !0
        };
    Ge.getRootNode && (Ke = function(e) {
        return Ee.contains(e.ownerDocument, e) || e.getRootNode(Ze) === e.ownerDocument
    });
    var Je = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Ke(e) && "none" === Ee.css(e, "display")
        },
        et = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        },
        tt = {};
    Ee.fn.extend({
        show: function() {
            return x(this, !0)
        },
        hide: function() {
            return x(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Je(this) ? Ee(this).show() : Ee(this).hide()
            })
        }
    });
    var nt = /^(?:checkbox|radio)$/i,
        rt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ot = /^$|^module$|\/(?:java|ecma)script/i,
        it = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    it.optgroup = it.option, it.tbody = it.tfoot = it.colgroup = it.caption = it.thead, it.th = it.td;
    var at = /<|&#?\w+;/;
    ! function() {
        var e = ue.createDocumentFragment(),
            t = e.appendChild(ue.createElement("div")),
            n = ue.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), be.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", be.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var st = /^key/,
        ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        lt = /^([^.]*)(?:\.(.+)|)/;
    Ee.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, m, g = ze.get(e);
            if (g)
                for (n.handler && (i = n, n = i.handler, o = i.selector), o && Ee.find.matchesSelector(Ge, o), n.guid || (n.guid = Ee.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                        return "undefined" != typeof Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(qe) || [""], l = t.length; l--;) s = lt.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = Ee.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = Ee.event.special[p] || {}, c = Ee.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && Ee.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), Ee.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, m, g = ze.hasData(e) && ze.get(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(qe) || [""], l = t.length; l--;)
                    if (s = lt.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = Ee.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Ee.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) Ee.event.remove(e, p + t[l], n, r, !0);
                Ee.isEmptyObject(u) && ze.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = Ee.event.fix(e),
                u = new Array(arguments.length),
                l = (ze.get(this, "events") || {})[s.type] || [],
                c = Ee.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = Ee.event.handlers.call(this, s, l), t = 0;
                    (o = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && i.namespace !== !1 && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, r = ((Ee.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                        for (i = [], a = {}, n = 0; u > n; n++) r = t[n], o = r.selector + " ", void 0 === a[o] && (a[o] = r.needsContext ? Ee(o, this).index(l) > -1 : Ee.find(o, this, null, [l]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(Ee.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: xe(t) ? function() {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[Ee.expando] ? e : new Ee.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return nt.test(t.type) && t.click && i(t, "input") && j(t, "click", E), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return nt.test(t.type) && t.click && i(t, "input") && j(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return nt.test(t.type) && t.click && i(t, "input") && ze.get(t, "click") || i(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Ee.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Ee.Event = function(e, t) {
        return this instanceof Ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? E : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[Ee.expando] = !0)) : new Ee.Event(e, t)
    }, Ee.Event.prototype = {
        constructor: Ee.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Ee.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && st.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ut.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Ee.event.addProp), Ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        Ee.event.special[e] = {
            setup: function() {
                return j(this, e, k), !1
            },
            trigger: function() {
                return j(this, e), !0
            },
            delegateType: t
        }
    }), Ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === r || Ee.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Ee.fn.extend({
        on: function(e, t, n, r) {
            return N(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return N(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Ee(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = S), this.each(function() {
                Ee.event.remove(this, e, n, t)
            })
        }
    });
    var ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ft = /<script|<style|<link/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ee.extend({
        htmlPrefilter: function(e) {
            return e.replace(ct, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0),
                u = Ke(e);
            if (!(be.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ee.isXMLDoc(e)))
                for (a = w(s), i = w(e), r = 0, o = i.length; o > r; r++) H(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || w(e), a = a || w(s), r = 0, o = i.length; o > r; r++) O(i[r], a[r]);
                else O(e, s);
            return a = w(s, "script"), a.length > 0 && C(a, !u && w(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, o = Ee.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Fe(n)) {
                    if (t = n[ze.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? Ee.event.remove(n, r) : Ee.removeEvent(n, r, t.handle);
                        n[ze.expando] = void 0
                    }
                    n[We.expando] && (n[We.expando] = void 0)
                }
        }
    }), Ee.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return Re(this, function(e) {
                return void 0 === e ? Ee.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = I(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = I(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ee.cleanData(w(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Ee.clone(this, e, t)
            })
        },
        html: function(e) {
            return Re(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ft.test(e) && !it[(rt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Ee.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Ee.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return P(this, arguments, function(t) {
                var n = this.parentNode;
                Ee.inArray(this, e) < 0 && (Ee.cleanData(w(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Ee.fn[e] = function(e) {
            for (var n, r = [], o = Ee(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), Ee(o[a])[t](n), de.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ht = new RegExp("^(" + Qe + ")(?!px)[a-z%]+$", "i"),
        mt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        gt = new RegExp(Ve.join("|"), "i");
    ! function() {
        function t() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ge.appendChild(u).appendChild(l);
                var t = e.getComputedStyle(l);
                r = "1%" !== t.top, s = 12 === n(t.marginLeft), l.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), l.style.position = "absolute", i = 12 === n(l.offsetWidth / 3), Ge.removeChild(u), l = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, i, a, s, u = ue.createElement("div"),
            l = ue.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", be.clearCloneStyle = "content-box" === l.style.backgroundClip, Ee.extend(be, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), s
            },
            scrollboxSize: function() {
                return t(), i
            }
        }))
    }();
    var vt = ["Webkit", "Moz", "ms"],
        yt = ue.createElement("div").style,
        bt = {},
        xt = /^(none|table(?!-c[ea]).+)/,
        wt = /^--/,
        Ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tt = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    Ee.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = M(e, "opacity");
                        return "" === n ? "1" : n
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = h(t),
                    u = wt.test(t),
                    l = e.style;
                return u || (t = B(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t] : (i = typeof n, "string" === i && (o = Ye.exec(n)) && o[1] && (n = y(e, t, o), i = "number"), null != n && n === n && ("number" !== i || u || (n += o && o[3] || (Ee.cssNumber[s] ? "" : "px")), be.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = h(t),
                u = wt.test(t);
            return u || (t = B(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = M(e, t, r)), "normal" === o && t in Tt && (o = Tt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }), Ee.each(["height", "width"], function(e, t) {
        Ee.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? !xt.test(Ee.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, r) : et(e, Ct, function() {
                    return z(e, t, r)
                }) : void 0
            },
            set: function(e, n, r) {
                var o, i = mt(e),
                    a = !be.scrollboxSize() && "absolute" === i.position,
                    s = a || r,
                    u = s && "border-box" === Ee.css(e, "boxSizing", !1, i),
                    l = r ? F(e, t, r, u, i) : 0;
                return u && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - F(e, t, "border", !1, i) - .5)), l && (o = Ye.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = Ee.css(e, t)), $(e, n, l)
            }
        }
    }), Ee.cssHooks.marginLeft = _(be.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - et(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), Ee.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Ee.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Ve[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, "margin" !== e && (Ee.cssHooks[e + t].set = $)
    }), Ee.fn.extend({
        css: function(e, t) {
            return Re(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = mt(e), o = t.length; o > a; a++) i[t[a]] = Ee.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? Ee.style(e, t, n) : Ee.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Ee.Tween = W, W.prototype = {
        constructor: W,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || Ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Ee.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = W.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Ee.cssHooks[e.prop] && null == e.elem.style[B(e.prop)] ? e.elem[e.prop] = e.now : Ee.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ee.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Ee.fx = W.prototype.init, Ee.fx.step = {};
    var Et, St, kt = /^(?:toggle|show|hide)$/,
        At = /queueHooks$/;
    Ee.Animation = Ee.extend(K, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, Ye.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                xe(e) ? (t = e, e = ["*"]) : e = e.match(qe);
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(t)
            },
            prefilters: [V],
            prefilter: function(e, t) {
                t ? K.prefilters.unshift(e) : K.prefilters.push(e)
            }
        }), Ee.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Ee.extend({}, e) : {
                complete: n || !n && t || xe(e) && e,
                duration: e,
                easing: n && t || t && !xe(t) && t
            };
            return Ee.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Ee.fx.speeds ? r.duration = Ee.fx.speeds[r.duration] : r.duration = Ee.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                xe(r.old) && r.old.call(this), r.queue && Ee.dequeue(this, r.queue)
            }, r
        }, Ee.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Je).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = Ee.isEmptyObject(e),
                    i = Ee.speed(t, n, r),
                    a = function() {
                        var t = K(this, Ee.extend({}, e), i);
                        (o || ze.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = Ee.timers,
                        a = ze.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && At.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || Ee.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ze.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = Ee.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Ee.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Ee.each(["toggle", "show", "hide"], function(e, t) {
            var n = Ee.fn[t];
            Ee.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Q(t, !0), e, r, o)
            }
        }), Ee.each({
            slideDown: Q("show"),
            slideUp: Q("hide"),
            slideToggle: Q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Ee.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Ee.timers = [], Ee.fx.tick = function() {
            var e, t = 0,
                n = Ee.timers;
            for (Et = Date.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Ee.fx.stop(), Et = void 0
        }, Ee.fx.timer = function(e) {
            Ee.timers.push(e), Ee.fx.start()
        }, Ee.fx.interval = 13, Ee.fx.start = function() {
            St || (St = !0, U())
        }, Ee.fx.stop = function() {
            St = null
        }, Ee.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Ee.fn.delay = function(t, n) {
            return t = Ee.fx ? Ee.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var o = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = ue.createElement("input"),
                t = ue.createElement("select"),
                n = t.appendChild(ue.createElement("option"));
            e.type = "checkbox", be.checkOn = "" !== e.value, be.optSelected = n.selected, e = ue.createElement("input"), e.value = "t", e.type = "radio", be.radioValue = "t" === e.value
        }();
    var Nt, jt = Ee.expr.attrHandle;
    Ee.fn.extend({
        attr: function(e, t) {
            return Re(this, Ee.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Ee.removeAttr(this, e)
            })
        }
    }), Ee.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? Ee.prop(e, t, n) : (1 === i && Ee.isXMLDoc(e) || (o = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? Nt : void 0)), void 0 !== n ? null === n ? void Ee.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = Ee.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!be.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(qe);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), Nt = {
        set: function(e, t, n) {
            return t === !1 ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = jt[t] || Ee.find.attr;
        jt[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = jt[a], jt[a] = o, o = null != n(e, t, r) ? a : null, jt[a] = i), o
        }
    });
    var It = /^(?:input|select|textarea|button)$/i,
        Lt = /^(?:a|area)$/i;
    Ee.fn.extend({
        prop: function(e, t) {
            return Re(this, Ee.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Ee.propFix[e] || e]
            })
        }
    }), Ee.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && Ee.isXMLDoc(e) || (t = Ee.propFix[t] || t, o = Ee.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = Ee.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : It.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), be.optSelected || (Ee.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Ee.propFix[this.toLowerCase()] = this
    }), Ee.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (xe(e)) return this.each(function(t) {
                Ee(this).addClass(e.call(this, t, J(this)))
            });
            if (t = ee(e), t.length)
                for (; n = this[u++];)
                    if (o = J(n), r = 1 === n.nodeType && " " + Z(o) + " ") {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z(r), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (xe(e)) return this.each(function(t) {
                Ee(this).removeClass(e.call(this, t, J(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (t = ee(e), t.length)
                for (; n = this[u++];)
                    if (o = J(n), r = 1 === n.nodeType && " " + Z(o) + " ") {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        s = Z(r), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : xe(e) ? this.each(function(n) {
                Ee(this).toggleClass(e.call(this, n, J(this), t), t)
            }) : this.each(function() {
                var t, o, i, a;
                if (r)
                    for (o = 0, i = Ee(this), a = ee(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = J(this), t && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ze.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + Z(J(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Dt = /\r/g;
    Ee.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0]; {
                if (arguments.length) return r = xe(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, Ee(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = Ee.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = Ee.valHooks[o.type] || Ee.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
            }
        }
    }), Ee.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Ee.find.attr(e, "value");
                    return null != t ? t : Z(Ee.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : o.length;
                    for (r = 0 > a ? l : s ? a : 0; l > r; r++)
                        if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = Ee(n).val(), s) return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = Ee.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = Ee.inArray(Ee.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), Ee.each(["radio", "checkbox"], function() {
        Ee.valHooks[this] = {
            set: function(e, t) {
                return Array.isArray(t) ? e.checked = Ee.inArray(Ee(e).val(), t) > -1 : void 0
            }
        }, be.checkOn || (Ee.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), be.focusin = "onfocusin" in e;
    var Ot = /^(?:focusinfocus|focusoutblur)$/,
        Ht = function(e) {
            e.stopPropagation()
        };
    Ee.extend(Ee.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, u, l, c, f, d, p = [r || ue],
                h = ge.call(t, "type") ? t.type : t,
                m = ge.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || ue, 3 !== r.nodeType && 8 !== r.nodeType && !Ot.test(h + Ee.event.triggered) && (h.indexOf(".") > -1 && (m = h.split("."), h = m.shift(), m.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Ee.expando] ? t : new Ee.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Ee.makeArray(n, [t]), f = Ee.event.special[h] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!o && !f.noBubble && !we(r)) {
                    for (u = f.delegateType || h, Ot.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || ue) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0;
                    (a = p[i++]) && !t.isPropagationStopped();) d = a, t.type = i > 1 ? u : f.bindType || h, c = (ze.get(a, "events") || {})[t.type] && ze.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Fe(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Fe(r) || l && xe(r[h]) && !we(r) && (s = r[l], s && (r[l] = null), Ee.event.triggered = h, t.isPropagationStopped() && d.addEventListener(h, Ht), r[h](), t.isPropagationStopped() && d.removeEventListener(h, Ht), Ee.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = Ee.extend(new Ee.Event, n, {
                type: e,
                isSimulated: !0
            });
            Ee.event.trigger(r, null, t)
        }
    }), Ee.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                Ee.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Ee.event.trigger(e, t, n, !0) : void 0
        }
    }), be.focusin || Ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Ee.event.simulate(t, e.target, Ee.event.fix(e))
        };
        Ee.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = ze.access(r, t);
                o || r.addEventListener(e, n, !0), ze.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = ze.access(r, t) - 1;
                o ? ze.access(r, t, o) : (r.removeEventListener(e, n, !0), ze.remove(r, t))
            }
        }
    });
    var Pt = e.location,
        qt = Date.now(),
        Mt = /\?/;
    Ee.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Ee.error("Invalid XML: " + t), n
    };
    var _t = /\[\]$/,
        Rt = /\r?\n/g,
        Bt = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
    Ee.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                var n = xe(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !Ee.isPlainObject(e)) Ee.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) te(n, e[n], t, o);
        return r.join("&")
    }, Ee.fn.extend({
        serialize: function() {
            return Ee.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Ee.prop(this, "elements");
                return e ? Ee.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Ee(this).is(":disabled") && $t.test(this.nodeName) && !Bt.test(e) && (this.checked || !nt.test(e))
            }).map(function(e, t) {
                var n = Ee(this).val();
                return null == n ? null : Array.isArray(n) ? Ee.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Rt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Rt, "\r\n")
                }
            }).get()
        }
    });
    var Ft = /%20/g,
        zt = /#.*$/,
        Wt = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qt = /^(?:GET|HEAD)$/,
        Yt = /^\/\//,
        Vt = {},
        Gt = {},
        Kt = "*/".concat("*"),
        Zt = ue.createElement("a");
    Zt.href = Pt.href, Ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pt.href,
            type: "GET",
            isLocal: Xt.test(Pt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
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
                "text json": JSON.parse,
                "text xml": Ee.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? oe(oe(e, Ee.ajaxSettings), t) : oe(Ee.ajaxSettings, e)
        },
        ajaxPrefilter: ne(Vt),
        ajaxTransport: ne(Gt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, d, p, x, w, C = n;
                c || (c = !0, u && e.clearTimeout(u), o = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (x = ie(h, T, r)), x = ae(h, x, T, l), l ? (h.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (Ee.lastModified[i] = w), w = T.getResponseHeader("etag"), w && (Ee.etag[i] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, p = x.error, l = !p)) : (p = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", l ? v.resolveWith(m, [d, C, T]) : v.rejectWith(m, [T, C, p]), T.statusCode(b), b = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [T, h, l ? d : p]), y.fireWith(m, [T, C]), f && (g.trigger("ajaxComplete", [T, h]), --Ee.active || Ee.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, i, a, s, u, l, c, f, d, p, h = Ee.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? Ee(m) : Ee.event,
                v = Ee.Deferred(),
                y = Ee.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                C = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ut.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return o && o.abort(t), r(0, t), this
                    }
                };
            if (v.promise(T), h.url = ((t || h.url || Pt.href) + "").replace(Yt, Pt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(qe) || [""], null == h.crossDomain) {
                l = ue.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Zt.protocol + "//" + Zt.host != l.protocol + "//" + l.host
                } catch (E) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = Ee.param(h.data, h.traditional)), re(Vt, h, n, T), c) return T;
            f = Ee.event && h.global, f && 0 === Ee.active++ && Ee.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qt.test(h.type), i = h.url.replace(zt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Mt.test(i) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (i = i.replace(Wt, "$1"), p = (Mt.test(i) ? "&" : "?") + "_=" + qt++ + p), h.url = i + p), h.ifModified && (Ee.lastModified[i] && T.setRequestHeader("If-Modified-Since", Ee.lastModified[i]), Ee.etag[i] && T.setRequestHeader("If-None-Match", Ee.etag[i])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(m, T, h) === !1 || c)) return T.abort();
            if (C = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), o = re(Gt, h, n, T)) {
                if (T.readyState = 1, f && g.trigger("ajaxSend", [T, h]), c) return T;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, o.send(x, r)
                } catch (E) {
                    if (c) throw E;
                    r(-1, E)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return Ee.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Ee.get(e, void 0, t, "script")
        }
    }), Ee.each(["get", "post"], function(e, t) {
        Ee[t] = function(e, n, r, o) {
            return xe(n) && (o = o || r, r = n, n = void 0), Ee.ajax(Ee.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, Ee.isPlainObject(e) && e))
        }
    }), Ee._evalUrl = function(e, t) {
        return Ee.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                Ee.globalEval(e, t)
            }
        })
    }, Ee.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (xe(e) && (e = e.call(this[0])), t = Ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return xe(e) ? this.each(function(t) {
                Ee(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Ee(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = xe(e);
            return this.each(function(n) {
                Ee(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                Ee(this).replaceWith(this.childNodes)
            }), this
        }
    }), Ee.expr.pseudos.hidden = function(e) {
        return !Ee.expr.pseudos.visible(e)
    }, Ee.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Ee.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Jt = {
            0: 200,
            1223: 204
        },
        en = Ee.ajaxSettings.xhr();
    be.cors = !!en && "withCredentials" in en, be.ajax = en = !!en, Ee.ajaxTransport(function(t) {
        var n, r;
        return be.cors || en && !t.crossDomain ? {
            send: function(o, i) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (a in o) s.setRequestHeader(a, o[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Jt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n) throw u
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), Ee.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), Ee.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return Ee.globalEval(e), e
            }
        }
    }), Ee.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Ee.ajaxTransport("script", function(e) {
        if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
                send: function(r, o) {
                    t = Ee("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), ue.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var tn = [],
        nn = /(=)\?(?=&|$)|\?\?/;
    Ee.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tn.pop() || Ee.expando + "_" + qt++;
            return this[e] = !0, e
        }
    }), Ee.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (nn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = xe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nn, "$1" + o) : t.jsonp !== !1 && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || Ee.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === i ? Ee(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, tn.push(o)), a && xe(i) && i(a[0]), a = i = void 0
        }), "script") : void 0
    }), be.createHTMLDocument = function() {
        var e = ue.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Ee.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, o, i;
        return t || (be.createHTMLDocument ? (t = ue.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ue.location.href, t.head.appendChild(r)) : t = ue), o = Ie.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = T([e], t, i), i && i.length && Ee(i).remove(), Ee.merge([], o.childNodes))
    }, Ee.fn.load = function(e, t, n) {
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = Z(e.slice(s)), e = e.slice(0, s)), xe(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Ee.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? Ee("<div>").append(Ee.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, Ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Ee.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Ee.expr.pseudos.animated = function(e) {
        return Ee.grep(Ee.timers, function(t) {
            return e === t.elem
        }).length
    }, Ee.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l, c = Ee.css(e, "position"),
                f = Ee(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), i = Ee.css(e, "top"), u = Ee.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), xe(t) && (t = t.call(e, n, Ee.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, Ee.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Ee.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === Ee.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ee.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && (o = Ee(e).offset(), o.top += Ee.css(e, "borderTopWidth", !0), o.left += Ee.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - Ee.css(r, "marginTop", !0),
                    left: t.left - o.left - Ee.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === Ee.css(e, "position");) e = e.offsetParent;
                return e || Ge
            })
        }
    }), Ee.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        Ee.fn[e] = function(r) {
            return Re(this, function(e, r, o) {
                var i;
                return we(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o ? i ? i[t] : e[r] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
            }, e, r, arguments.length)
        }
    }), Ee.each(["top", "left"], function(e, t) {
        Ee.cssHooks[t] = _(be.pixelPosition, function(e, n) {
            return n ? (n = M(e, t), ht.test(n) ? Ee(e).position()[t] + "px" : n) : void 0
        })
    }), Ee.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Ee.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Ee.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (o === !0 || i === !0 ? "margin" : "border");
                return Re(this, function(t, n, o) {
                    var i;
                    return we(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? Ee.css(t, n, s) : Ee.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }), Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        Ee.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Ee.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Ee.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Ee.proxy = function(e, t) {
        var n, r, o;
        return "string" == typeof t && (n = e[t], t = e, e = n), xe(e) ? (r = ce.call(arguments, 2), o = function() {
            return e.apply(t || this, r.concat(ce.call(arguments)))
        }, o.guid = e.guid = e.guid || Ee.guid++, o) : void 0
    }, Ee.holdReady = function(e) {
        e ? Ee.readyWait++ : Ee.ready(!0)
    }, Ee.isArray = Array.isArray, Ee.parseJSON = JSON.parse, Ee.nodeName = i, Ee.isFunction = xe, Ee.isWindow = we, Ee.camelCase = h, Ee.type = r, Ee.now = Date.now, Ee.isNumeric = function(e) {
        var t = Ee.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Ee
    });
    var rn = e.jQuery,
        on = e.$;
    return Ee.noConflict = function(t) {
        return e.$ === Ee && (e.$ = on), t && e.jQuery === Ee && (e.jQuery = rn), Ee
    }, t || (e.jQuery = e.$ = Ee), Ee
}),
function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                i = document.createElement("div");
            i.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", r.appendChild(i.childNodes[1])
        }
        return t && e.extend(n, t), this.each(function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var r = ".fitvidsignore";
            n.ignore && (r = r + ", " + n.ignore);
            var o = e(this).find(t.join(","));
            o = o.not("object object"), o = o.not(r), o.each(function(t) {
                var n = e(this);
                if (!(n.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length)) {
                    n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9), n.attr("width", 16));
                    var o = "object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height(),
                        i = isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10),
                        a = o / i;
                    if (!n.attr("id")) {
                        var s = "fitvid" + t;
                        n.attr("id", s)
                    }
                    n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), n.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), $(document).ready(function() {
        function e() {
            u = n.width() - t.width(), l = n.children().length, c = s[l - 1], c > u ? (n.children().last().prependTo(r), l -= 1, e()) : u > s[l] && (r.children().first().appendTo(n), l += 1, e()), t.attr("count", o - l), l === o ? t.addClass("hidden") : t.removeClass("hidden")
        }
        var t = $("nav.greedy-nav .greedy-nav__toggle"),
            n = $("nav.greedy-nav .visible-links"),
            r = $("nav.greedy-nav .hidden-links"),
            o = 0,
            i = 0,
            a = 1e3,
            s = [];
        n.children().outerWidth(function(e, t) {
            i += t, o += 1, s.push(i)
        });
        var u, l, c, f;
        $(window).resize(function() {
            e()
        }), t.on("click", function() {
            r.toggleClass("hidden"), $(this).toggleClass("close"), clearTimeout(f)
        }), r.on("mouseleave", function() {
            f = setTimeout(function() {
                r.addClass("hidden"), t.toggleClass("close")
            }, a)
        }).on("mouseenter", function() {
            clearTimeout(f)
        }), e()
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(e) {
        var t, n, r, o, i, a, s = "Close",
            u = "BeforeClose",
            l = "AfterClose",
            c = "BeforeAppend",
            f = "MarkupParse",
            d = "Open",
            p = "Change",
            h = "mfp",
            m = "." + h,
            g = "mfp-ready",
            v = "mfp-removing",
            y = "mfp-prevent-close",
            b = function() {},
            x = !!window.jQuery,
            w = e(window),
            C = function(e, n) {
                t.ev.on(h + e + m, n)
            },
            T = function(t, n, r, o) {
                var i = document.createElement("div");
                return i.className = "mfp-" + t, r && (i.innerHTML = r), o ? n && n.appendChild(i) : (i = e(i), n && i.appendTo(n)), i
            },
            E = function(n, r) {
                t.ev.triggerHandler(h + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
            },
            S = function(n) {
                return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
            },
            k = function() {
                e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
            },
            A = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var n = navigator.appVersion;
                t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = A(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document), t.popupsCache = {}
            },
            open: function(n) {
                var o;
                if (n.isObj === !1) {
                    t.items = n.items.toArray(), t.index = 0;
                    var a, s = n.items;
                    for (o = 0; o < s.length; o++)
                        if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) {
                            t.index = o;
                            break
                        }
                } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
                if (t.isOpen) return void t.updateItemHTML();
                t.types = [], i = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = T("bg").on("click" + m, function() {
                    t.close()
                }), t.wrap = T("wrap").attr("tabindex", -1).on("click" + m, function(e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = T("container", t.wrap)), t.contentContainer = T("content"), t.st.preloader && (t.preloader = T("preloader", t.container, t.st.tLoading));
                var u = e.magnificPopup.modules;
                for (o = 0; o < u.length; o++) {
                    var l = u[o];
                    l = l.charAt(0).toUpperCase() + l.slice(1), t["init" + l].call(t)
                }
                E("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (C(f, function(e, t, n, r) {
                    n.close_replaceWith = S(r.type)
                }), i += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (i += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: r.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && r.on("keyup" + m, function(e) {
                    27 === e.keyCode && t.close()
                }), w.on("resize" + m, function() {
                    t.updateSize()
                }), t.st.closeOnContentClick || (i += " mfp-auto-cursor"), i && t.wrap.addClass(i);
                var c = t.wH = w.height(),
                    p = {};
                if (t.fixedContentPos && t._hasScrollBar(c)) {
                    var h = t._getScrollbarSize();
                    h && (p.marginRight = h)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
                var v = t.st.mainClass;
                return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), E("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                    t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), r.on("focusin" + m, t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(c), E(d), n
            },
            close: function() {
                t.isOpen && (E(u), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                E(s);
                var n = v + " " + g + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
                }
                r.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, E(l)
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        r = window.innerHeight * n;
                    t.wrap.css("height", r), t.wH = r
                } else t.wH = e || w.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), E("Resize")
            },
            updateItemHTML: function() {
                var n = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
                var r = n.type;
                if (E("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                    var i = t.st[r] ? t.st[r].markup : !1;
                    E("FirstMarkupParse", i), i ? t.currTemplate[r] = e(i) : t.currTemplate[r] = !0
                }
                o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
                var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
                t.appendContent(a, r), n.preloaded = !0, E(p, n), o = n.type, t.container.prepend(t.contentContainer), E("AfterChange")
            },
            appendContent: function(e, n) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", E(c), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(n) {
                var r, o = t.items[n];
                if (o.tagName ? o = {
                        el: e(o)
                    } : (r = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var i = t.types, a = 0; a < i.length; a++)
                        if (o.el.hasClass("mfp-" + i[a])) {
                            r = i[a];
                            break
                        }
                    o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = r || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, E("ElementParse", o), t.items[n]
            },
            addGroup: function(e, n) {
                var r = function(r) {
                    r.mfpEl = this, t._openClick(r, e, n)
                };
                n || (n = {});
                var o = "click.magnificPopup";
                n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, r)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, r) : (n.items = e, e.off(o).on(o, r)))
            },
            _openClick: function(n, r, o) {
                var i = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
                if (i || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                    var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                    if (a)
                        if (e.isFunction(a)) {
                            if (!a.call(t)) return !0
                        } else if (w.width() < a) return !0;
                    n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = r.find(o.delegate)), t.open(o)
                }
            },
            updateStatus: function(e, r) {
                if (t.preloader) {
                    n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                    var o = {
                        status: e,
                        text: r
                    };
                    E("UpdateStatus", o), e = o.status, r = o.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), n = e
                }
            },
            _checkIfClose: function(n) {
                if (!e(n).hasClass(y)) {
                    var r = t.st.closeOnContentClick,
                        o = t.st.closeOnBgClick;
                    if (r && o) return !0;
                    if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                    if (n === t.content[0] || e.contains(t.content[0], n)) {
                        if (r) return !0
                    } else if (o && e.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || w.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(n) {
                return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, n, r) {
                var o;
                r.data && (n = e.extend(r.data, n)), E(f, [t, n, r]), e.each(n, function(n, r) {
                    if (void 0 === r || r === !1) return !0;
                    if (o = n.split("_"), o.length > 1) {
                        var i = t.find(m + "-" + o[0]);
                        if (i.length > 0) {
                            var a = o[1];
                            "replaceWith" === a ? i[0] !== r[0] && i.replaceWith(r) : "img" === a ? i.is("img") ? i.attr("src", r) : i.replaceWith(e("<img>").attr("src", r).attr("class", i.attr("class"))) : i.attr(o[1], r)
                        }
                    } else t.find(m + "-" + n).html(r)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(t, n) {
                return k(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, n) {
                n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, e.fn.magnificPopup = function(n) {
            k();
            var r = e(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var o, i = x ? r.data("magnificPopup") : r[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    i.items ? o = i.items[a] : (o = r, i.delegate && (o = o.find(i.delegate)), o = o.eq(a)), t._openClick({
                        mfpEl: o
                    }, r, i)
                } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else n = e.extend(!0, {}, n), x ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
            return r
        };
        var N, j, I, L = "inline",
            D = function() {
                I && (j.after(I.addClass(N)).detach(), I = null)
            };
        e.magnificPopup.registerModule(L, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(L), C(s + "." + L, function() {
                        D()
                    })
                },
                getInline: function(n, r) {
                    if (D(), n.src) {
                        var o = t.st.inline,
                            i = e(n.src);
                        if (i.length) {
                            var a = i[0].parentNode;
                            a && a.tagName && (j || (N = o.hiddenClass, j = T(N), N = "mfp-" + N), I = i.after(j).detach().removeClass(N)), t.updateStatus("ready")
                        } else t.updateStatus("error", o.tNotFound), i = e("<div>");
                        return n.inlineElement = i, i
                    }
                    return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
                }
            }
        });
        var O, H = "ajax",
            P = function() {
                O && e(document.body).removeClass(O)
            },
            q = function() {
                P(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(H, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(H), O = t.st.ajax.cursor, C(s + "." + H, q), C("BeforeChange." + H, q)
                },
                getAjax: function(n) {
                    O && e(document.body).addClass(O), t.updateStatus("loading");
                    var r = e.extend({
                        url: n.src,
                        success: function(r, o, i) {
                            var a = {
                                data: r,
                                xhr: i
                            };
                            E("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, P(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(g)
                            }, 16), t.updateStatus("ready"), E("AjaxContentAdded")
                        },
                        error: function() {
                            P(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(r), ""
                }
            }
        });
        var M, _ = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var r = t.st.image.titleSrc;
            if (r) {
                if (e.isFunction(r)) return r.call(t, n);
                if (n.el) return n.el.attr(r) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var n = t.st.image,
                        r = ".image";
                    t.types.push("image"), C(d + r, function() {
                        "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                    }), C(s + r, function() {
                        n.cursor && e(document.body).removeClass(n.cursor), w.off("resize" + m)
                    }), C("Resize" + r, t.resizeImage), t.isLowIE && C("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var n = 0;
                        t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, M && clearInterval(M), e.isCheckingImgSize = !1, E("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var n = 0,
                        r = e.img[0],
                        o = function(i) {
                            M && clearInterval(M), M = setInterval(function() {
                                return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(M), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                            }, i)
                        };
                    o(1)
                },
                getImage: function(n, r) {
                    var o = 0,
                        i = function() {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, E("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(i, 100) : a()))
                        },
                        a = function() {
                            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        s = t.st.image,
                        u = r.find(".mfp-img");
                    if (u.length) {
                        var l = document.createElement("img");
                        l.className = "mfp-img", n.el && n.el.find("img").length && (l.alt = n.el.find("img").attr("alt")), n.img = e(l).on("load.mfploader", i).on("error.mfploader", a), l.src = n.src, u.is("img") && (n.img = n.img.clone()), l = n.img[0], l.naturalWidth > 0 ? n.hasSize = !0 : l.width || (n.hasSize = !1)
                    }
                    return t._parseMarkup(r, {
                        title: _(n),
                        img_replaceWith: n.img
                    }, n), t.resizeImage(), n.hasSize ? (M && clearInterval(M), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r)
                }
            }
        });
        var R, B = function() {
            return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
        };
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, n = t.st.zoom,
                        r = ".zoom";
                    if (n.enabled && t.supportsTransition) {
                        var o, i, a = n.duration,
                            l = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    r = "all " + n.duration / 1e3 + "s " + n.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    i = "transition";
                                return o["-webkit-" + i] = o["-moz-" + i] = o["-o-" + i] = o[i] = r, t.css(o), t
                            },
                            c = function() {
                                t.content.css("visibility", "visible")
                            };
                        C("BuildControls" + r, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                                i = l(e), i.css(t._getOffset()), t.wrap.append(i), o = setTimeout(function() {
                                    i.css(t._getOffset(!0)), o = setTimeout(function() {
                                        c(), setTimeout(function() {
                                            i.remove(), e = i = null, E("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), C(u + r, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                    if (e = t._getItemToZoom(), !e) return;
                                    i = l(e)
                                }
                                i.css(t._getOffset(!0)), t.wrap.append(i), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    i.css(t._getOffset())
                                }, 16)
                            }
                        }), C(s + r, function() {
                            t._allowZoom() && (c(), i && i.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return t.currItem.hasSize ? t.currItem.img : !1
                },
                _getOffset: function(n) {
                    var r;
                    r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var o = r.offset(),
                        i = parseInt(r.css("padding-top"), 10),
                        a = parseInt(r.css("padding-bottom"), 10);
                    o.top -= e(window).scrollTop() - i;
                    var s = {
                        width: r.width(),
                        height: (x ? r.innerHeight() : r[0].offsetHeight) - a - i
                    };
                    return B() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
                }
            }
        });
        var $ = "iframe",
            F = "//about:blank",
            z = function(e) {
                if (t.currTemplate[$]) {
                    var n = t.currTemplate[$].find("iframe");
                    n.length && (e || (n[0].src = F), t.isIE8 && n.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule($, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push($), C("BeforeChange", function(e, t, n) {
                        t !== n && (t === $ ? z() : n === $ && z(!0))
                    }), C(s + "." + $, function() {
                        z()
                    })
                },
                getIframe: function(n, r) {
                    var o = n.src,
                        i = t.st.iframe;
                    e.each(i.patterns, function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var a = {};
                    return i.srcAction && (a[i.srcAction] = o), t._parseMarkup(r, a, n), t.updateStatus("ready"), r
                }
            }
        });
        var W = function(e) {
                var n = t.items.length;
                return e > n - 1 ? e - n : 0 > e ? n + e : e
            },
            U = function(e, t, n) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var n = t.st.gallery,
                        o = ".mfp-gallery";
                    return t.direction = !0, n && n.enabled ? (i += " mfp-gallery", C(d + o, function() {
                        n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), r.on("keydown" + o, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), C("UpdateStatus" + o, function(e, n) {
                        n.text && (n.text = U(n.text, t.currItem.index, t.items.length))
                    }), C(f + o, function(e, r, o, i) {
                        var a = t.items.length;
                        o.counter = a > 1 ? U(n.tCounter, i.index, a) : ""
                    }), C("BuildControls" + o, function() {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var r = n.arrowMarkup,
                                o = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                i = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                            o.click(function() {
                                t.prev()
                            }), i.click(function() {
                                t.next()
                            }), t.container.append(o.add(i))
                        }
                    }), C(p + o, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void C(s + o, function() {
                        r.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    t.direction = !0, t.index = W(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = W(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, n = t.st.gallery.preload,
                        r = Math.min(n[0], t.items.length),
                        o = Math.min(n[1], t.items.length);
                    for (e = 1; e <= (t.direction ? o : r); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? r : o); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(n) {
                    if (n = W(n), !t.items[n].preloaded) {
                        var r = t.items[n];
                        r.parsed || (r = t.parseEl(n)), E("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            r.hasSize = !0
                        }).on("error.mfploader", function() {
                            r.hasSize = !0, r.loadError = !0, E("LazyLoadError", r)
                        }).attr("src", r.src)), r.preloaded = !0
                    }
                }
            }
        });
        var X = "retina";
        e.magnificPopup.registerModule(X, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + X, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), C("ElementParse." + X, function(t, r) {
                            r.src = e.replaceSrc(r, n)
                        }))
                    }
                }
            }
        }), k()
    }),
    function(e, t) {
        "$:nomunge";
        var n, r = e.jQuery || e.Cowboy || (e.Cowboy = {});
        r.throttle = n = function(e, n, o, i) {
            function a() {
                function r() {
                    u = +new Date, o.apply(l, f)
                }

                function a() {
                    s = t
                }
                var l = this,
                    c = +new Date - u,
                    f = arguments;
                i && !s && r(), s && clearTimeout(s), i === t && c > e ? r() : n !== !0 && (s = setTimeout(i ? a : r, i === t ? e - c : e))
            }
            var s, u = 0;
            return "boolean" != typeof n && (i = o, o = n, n = t), r.guid && (a.guid = o.guid = o.guid || r.guid++), a
        }, r.debounce = function(e, r, o) {
            return o === t ? n(e, r, !1) : n(e, o, r !== !1)
        }
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
    }("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(e) {
        "use strict";
        var t = {
                ignore: "[data-scroll-ignore]",
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                speedAsDuration: !1,
                durationMax: null,
                durationMin: null,
                clip: !0,
                offset: 0,
                easing: "easeInOutCubic",
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0
            },
            n = function() {
                return "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype
            },
            r = function() {
                var e = {};
                return Array.prototype.forEach.call(arguments, function(t) {
                    for (var n in t) {
                        if (!t.hasOwnProperty(n)) return;
                        e[n] = t[n]
                    }
                }), e
            },
            o = function(t) {
                return !!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches)
            },
            i = function(t) {
                return parseInt(e.getComputedStyle(t).height, 10)
            },
            a = function(e) {
                "#" === e.charAt(0) && (e = e.substr(1));
                for (var t, n = String(e), r = n.length, o = -1, i = "", a = n.charCodeAt(0); ++o < r;) {
                    if (t = n.charCodeAt(o), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                    i += t >= 1 && 31 >= t || 127 == t || 0 === o && t >= 48 && 57 >= t || 1 === o && t >= 48 && 57 >= t && 45 === a ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(o) : "\\" + n.charAt(o)
                }
                return "#" + i
            },
            s = function(e, t) {
                var n;
                return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
            },
            u = function() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
            },
            l = function(t, n, r, o) {
                var i = 0;
                if (t.offsetParent)
                    do i += t.offsetTop, t = t.offsetParent; while (t);
                return i = Math.max(i - n - r, 0), o && (i = Math.min(i, u() - e.innerHeight)), i
            },
            c = function(e) {
                return e ? i(e) + e.offsetTop : 0
            },
            f = function(e, t) {
                var n = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
                return t.durationMax && n > t.durationMax ? t.durationMax : t.durationMin && n < t.durationMin ? t.durationMin : parseInt(n, 10)
            },
            d = function(t) {
                if (history.replaceState && t.updateURL && !history.state) {
                    var n = e.location.hash;
                    n = n ? n : "", history.replaceState({
                        smoothScroll: JSON.stringify(t),
                        anchor: n ? n : e.pageYOffset
                    }, document.title, n ? n : e.location.href)
                }
            },
            p = function(e, t, n) {
                t || history.pushState && n.updateURL && history.pushState({
                    smoothScroll: JSON.stringify(n),
                    anchor: e.id
                }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
            },
            h = function(t, n, r) {
                0 === t && document.body.focus(), r || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
            },
            m = function(t, n, r, o) {
                if (n.emitEvents && "function" == typeof e.CustomEvent) {
                    var i = new CustomEvent(t, {
                        bubbles: !0,
                        detail: {
                            anchor: r,
                            toggle: o
                        }
                    });
                    document.dispatchEvent(i)
                }
            },
            g = function(i, g) {
                var v, y, b, x, w, C, T = {};
                T.cancelScroll = function(e) {
                    cancelAnimationFrame(C), C = null, e || m("scrollCancel", v)
                }, T.animateScroll = function(n, o, i) {
                    T.cancelScroll();
                    var a = r(v || t, i || {}),
                        d = "[object Number]" === Object.prototype.toString.call(n),
                        g = d || !n.tagName ? null : n;
                    if (d || g) {
                        var y = e.pageYOffset;
                        a.header && !x && (x = document.querySelector(a.header));
                        var b, w, E, S = c(x),
                            k = d ? n : l(g, S, parseInt("function" == typeof a.offset ? a.offset(n, o) : a.offset, 10), a.clip),
                            A = k - y,
                            N = u(),
                            j = 0,
                            I = f(A, a),
                            L = function(t, r) {
                                var i = e.pageYOffset;
                                return t == r || i == r || (r > y && e.innerHeight + i) >= N ? (T.cancelScroll(!0), h(n, r, d), m("scrollStop", a, n, o), b = null, C = null, !0) : void 0
                            },
                            D = function(t) {
                                b || (b = t), j += t - b, w = 0 === I ? 0 : j / I, w = w > 1 ? 1 : w, E = y + A * s(a, w), e.scrollTo(0, Math.floor(E)), L(E, k) || (C = e.requestAnimationFrame(D), b = t)
                            };
                        0 === e.pageYOffset && e.scrollTo(0, 0), p(n, d, a), m("scrollStart", a, n, o), T.cancelScroll(!0), e.requestAnimationFrame(D)
                    }
                };
                var E = function(t) {
                        if (!o(v) && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (b = t.target.closest(i), b && "a" === b.tagName.toLowerCase() && !t.target.closest(v.ignore) && b.hostname === e.location.hostname && b.pathname === e.location.pathname && /#/.test(b.href))) {
                            var n = a(b.hash),
                                r = v.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
                            r = r || "#top" !== n ? r : document.documentElement, r && (t.preventDefault(), d(v), T.animateScroll(r, b))
                        }
                    },
                    S = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(v)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(a(history.state.anchor))) || T.animateScroll(t, null, {
                                updateURL: !1
                            })
                        }
                    };
                return T.destroy = function() {
                    v && (document.removeEventListener("click", E, !1), e.removeEventListener("popstate", S, !1), T.cancelScroll(), v = null, y = null, b = null, x = null, w = null, C = null)
                }, T.init = function(o) {
                    if (!n()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    T.destroy(), v = r(t, o || {}), x = v.header ? document.querySelector(v.header) : null, document.addEventListener("click", E, !1), v.updateURL && v.popstate && e.addEventListener("popstate", S, !1)
                }, T.init(g), T
            };
        return g
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(e) : e.Gumshoe = t(e)
    }("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(e) {
        "use strict";
        var t = {
                navClass: "active",
                contentClass: "active",
                nested: !1,
                nestedClass: "active",
                offset: 0,
                reflow: !1,
                events: !0
            },
            n = function() {
                var e = {};
                return Array.prototype.forEach.call(arguments, function(t) {
                    for (var n in t) {
                        if (!t.hasOwnProperty(n)) return;
                        e[n] = t[n]
                    }
                }), e
            },
            r = function(e, t, n) {
                if (n.settings.events) {
                    var r = new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: n
                    });
                    t.dispatchEvent(r)
                }
            },
            o = function(e) {
                var t = 0;
                if (e.offsetParent)
                    for (; e;) t += e.offsetTop, e = e.offsetParent;
                return t >= 0 ? t : 0
            },
            i = function(e) {
                e && e.sort(function(e, t) {
                    var n = o(e.content),
                        r = o(t.content);
                    return r > n ? -1 : 1
                })
            },
            a = function(e) {
                return "function" == typeof e.offset ? parseFloat(e.offset()) : parseFloat(e.offset)
            },
            s = function() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
            },
            u = function(t, n, r) {
                var o = t.getBoundingClientRect(),
                    i = a(n);
                return r ? parseInt(o.bottom, 10) < (e.innerHeight || document.documentElement.clientHeight) : parseInt(o.top, 10) <= i
            },
            l = function() {
                return e.innerHeight + e.pageYOffset >= s()
            },
            c = function(e, t) {
                return !(!l() || !u(e.content, t, !0))
            },
            f = function(e, t) {
                var n = e[e.length - 1];
                if (c(n, t)) return n;
                for (var r = e.length - 1; r >= 0; r--)
                    if (u(e[r].content, t)) return e[r]
            },
            d = function(e, t) {
                if (t.nested) {
                    var n = e.parentNode.closest("li");
                    n && (n.classList.remove(t.nestedClass), d(n, t))
                }
            },
            p = function(e, t) {
                if (e) {
                    var n = e.nav.closest("li");
                    n && (n.classList.remove(t.navClass), e.content.classList.remove(t.contentClass), d(n, t), r("gumshoeDeactivate", n, {
                        link: e.nav,
                        content: e.content,
                        settings: t
                    }))
                }
            },
            h = function(e, t) {
                if (t.nested) {
                    var n = e.parentNode.closest("li");
                    n && (n.classList.add(t.nestedClass), h(n, t))
                }
            },
            m = function(e, t) {
                if (e) {
                    var n = e.nav.closest("li");
                    n && (n.classList.add(t.navClass), e.content.classList.add(t.contentClass), h(n, t), r("gumshoeActivate", n, {
                        link: e.nav,
                        content: e.content,
                        settings: t
                    }))
                }
            },
            g = function(r, o) {
                var a, s, u, l, c, d = {};
                d.setup = function() {
                    a = document.querySelectorAll(r), s = [], Array.prototype.forEach.call(a, function(e) {
                        var t = document.getElementById(decodeURIComponent(e.hash.substr(1)));
                        t && s.push({
                            nav: e,
                            content: t
                        })
                    }), i(s)
                }, d.detect = function() {
                    var e = f(s, c);
                    return e ? void(u && e.content === u.content || (p(u, c), m(e, c), u = e)) : void(u && (p(u, c), u = null))
                };
                var h = function(t) {
                        l && e.cancelAnimationFrame(l), l = e.requestAnimationFrame(d.detect)
                    },
                    g = function(t) {
                        l && e.cancelAnimationFrame(l), l = e.requestAnimationFrame(function() {
                            i(s), d.detect()
                        })
                    };
                d.destroy = function() {
                    u && p(u, c), e.removeEventListener("scroll", h, !1), c.reflow && e.removeEventListener("resize", g, !1), s = null, a = null, u = null, l = null, c = null
                };
                var v = function() {
                    c = n(t, o || {}), d.setup(), d.detect(), e.addEventListener("scroll", h, !1), c.reflow && e.addEventListener("resize", g, !1)
                };
                return v(), d
            };
        return g
    }), $(document).ready(function() {
        $("#main").fitVids();
        var e = function() {
            var e = 0 === $(".author__urls-wrapper button").length ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
            e ? $(".sidebar").addClass("sticky") : $(".sidebar").removeClass("sticky")
        };
        e(), $(window).resize(function() {
            e()
        }), $(".author__urls-wrapper button").on("click", function() {
            $(".author__urls").toggleClass("is--visible"), $(".author__urls-wrapper button").toggleClass("open")
        }), $(document).keyup(function(e) {
            27 === e.keyCode && $(".initial-content").hasClass("is--hidden") && ($(".search-content").toggleClass("is--visible"), $(".initial-content").toggleClass("is--hidden"))
        }), $(".search__toggle").on("click", function() {
            $(".search-content").toggleClass("is--visible"), $(".initial-content").toggleClass("is--hidden"), setTimeout(function() {
                $(".search-content input").focus()
            }, 400)
        });
        new SmoothScroll('a[href*="#"]', {
            offset: 20,
            speed: 400,
            speedAsDuration: !0,
            durationMax: 500
        });
        if ($("nav.toc").length > 0) {
            new Gumshoe("nav.toc a", {
                navClass: "active",
                contentClass: "active",
                nested: !1,
                nestedClass: "active",
                offset: 20,
                reflow: !0,
                events: !0
            })
        }
        $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup"), $(".image-popup").magnificPopup({
            type: "image",
            tLoading: "Loading image #%curr%...",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
            },
            removalDelay: 500,
            mainClass: "mfp-zoom-in",
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        }), $(".page__content").find("h1, h2, h3, h4, h5, h6").each(function() {
            var e = $(this).attr("id");
            if (e) {
                var t = document.createElement("a");
                t.className = "header-link", t.href = "#" + e, t.innerHTML = '<span class="sr-only">Permalink</span><i class="fa fa-link"></i>', t.title = "Permalink", $(this).append(t)
            }
        })
    });