(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-d2bd86ee", "chunk-3544a150"], {
        "0127": function(t, e, i) {
            var n = i("b2de"),
                r = i("76be"),
                a = n.each,
                o = n.isObject,
                s = n.isArray,
                l = "series\0";

            function u(t) {
                return t instanceof Array ? t : null == t ? [] : [t]
            }

            function c(t) {
                return o(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
            }
            var h = 0;

            function d(t, e) {
                return t && t.hasOwnProperty(e)
            }
            e.normalizeToArray = u, e.defaultEmphasis = function(t, e, i) {
                if (t) {
                    t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
                    for (var n = 0, r = i.length; n < r; n++) {
                        var a = i[n];
                        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
                    }
                }
            }, e.TEXT_STYLE_OPTIONS = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"], e.getDataItemValue = function(t) {
                return !o(t) || s(t) || t instanceof Date ? t : t.value
            }, e.isDataItemOption = function(t) {
                return o(t) && !(t instanceof Array)
            }, e.mappingToExists = function(t, e) {
                e = (e || []).slice();
                var i = n.map(t || [], (function(t, e) {
                    return {
                        exist: t
                    }
                }));
                return a(e, (function(t, n) {
                    if (o(t)) {
                        for (var r = 0; r < i.length; r++)
                            if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void(e[n] = null);
                        for (r = 0; r < i.length; r++) {
                            var a = i[r].exist;
                            if (!(i[r].option || null != a.id && null != t.id || null == t.name || c(t) || c(a) || a.name !== t.name + "")) return i[r].option = t, void(e[n] = null)
                        }
                    }
                })), a(e, (function(t, e) {
                    if (o(t)) {
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n].exist;
                            if (!i[n].option && !c(r) && null == t.id) {
                                i[n].option = t;
                                break
                            }
                        }
                        n >= i.length && i.push({
                            option: t
                        })
                    }
                })), i
            }, e.makeIdAndName = function(t) {
                var e = n.createHashMap();
                a(t, (function(t, i) {
                    var n = t.exist;
                    n && e.set(n.id, t)
                })), a(t, (function(t, i) {
                    var r = t.option;
                    n.assert(!r || null == r.id || !e.get(r.id) || e.get(r.id) === t, "id duplicates: " + (r && r.id)), r && null != r.id && e.set(r.id, t), !t.keyInfo && (t.keyInfo = {})
                })), a(t, (function(t, i) {
                    var n = t.exist,
                        r = t.option,
                        a = t.keyInfo;
                    if (o(r)) {
                        if (a.name = null != r.name ? r.name + "" : n ? n.name : l + i, n) a.id = n.id;
                        else if (null != r.id) a.id = r.id + "";
                        else {
                            var s = 0;
                            do {
                                a.id = "\0" + a.name + "\0" + s++
                            } while (e.get(a.id))
                        }
                        e.set(a.id, t)
                    }
                }))
            }, e.isNameSpecified = function(t) {
                var e = t.name;
                return !(!e || !e.indexOf(l))
            }, e.isIdInner = c, e.compressBatches = function(t, e) {
                var i = {},
                    n = {};
                return r(t || [], i), r(e || [], n, i), [a(i), a(n)];

                function r(t, e, i) {
                    for (var n = 0, r = t.length; n < r; n++)
                        for (var a = t[n].seriesId, o = u(t[n].dataIndex), s = i && i[a], l = 0, c = o.length; l < c; l++) {
                            var h = o[l];
                            s && s[h] ? s[h] = null : (e[a] || (e[a] = {}))[h] = 1
                        }
                }

                function a(t, e) {
                    var i = [];
                    for (var n in t)
                        if (t.hasOwnProperty(n) && null != t[n])
                            if (e) i.push(+n);
                            else {
                                var r = a(t[n], !0);
                                r.length && i.push({
                                    seriesId: n,
                                    dataIndex: r
                                })
                            } return i
                }
            }, e.queryDataIndex = function(t, e) {
                return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? n.isArray(e.dataIndex) ? n.map(e.dataIndex, (function(e) {
                    return t.indexOfRawIndex(e)
                })) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? n.isArray(e.name) ? n.map(e.name, (function(e) {
                    return t.indexOfName(e)
                })) : t.indexOfName(e.name) : void 0
            }, e.makeInner = function() {
                var t = "__\0ec_inner_" + h++ + "_" + Math.random().toFixed(5);
                return function(e) {
                    return e[t] || (e[t] = {})
                }
            }, e.parseFinder = function(t, e, i) {
                if (n.isString(e)) {
                    var r = {};
                    r[e + "Index"] = 0, e = r
                }
                var o = i && i.defaultMainType;
                !o || d(e, o + "Index") || d(e, o + "Id") || d(e, o + "Name") || (e[o + "Index"] = 0);
                var s = {};
                return a(e, (function(r, a) {
                    if (r = e[a], "dataIndex" !== a && "dataIndexInside" !== a) {
                        var o = a.match(/^(\w+)(Index|Id|Name)$/) || [],
                            l = o[1],
                            u = (o[2] || "").toLowerCase();
                        if (!(!l || !u || null == r || "index" === u && "none" === r || i && i.includeMainTypes && n.indexOf(i.includeMainTypes, l) < 0)) {
                            var c = {
                                mainType: l
                            };
                            "index" === u && "all" === r || (c[u] = r);
                            var h = t.queryComponents(c);
                            s[l + "Models"] = h, s[l + "Model"] = h[0]
                        }
                    } else s[a] = r
                })), s
            }, e.setAttribute = function(t, e, i) {
                t.setAttribute ? t.setAttribute(e, i) : t[e] = i
            }, e.getAttribute = function(t, e) {
                return t.getAttribute ? t.getAttribute(e) : t[e]
            }, e.getTooltipRenderMode = function(t) {
                return "auto" === t ? r.domSupported ? "html" : "richText" : t || "html"
            }, e.groupData = function(t, e) {
                var i = n.createHashMap(),
                    r = [];
                return n.each(t, (function(t) {
                    var n = e(t);
                    (i.get(n) || (r.push(n), i.set(n, []))).push(t)
                })), {
                    keys: r,
                    buckets: i
                }
            }
        },
        "0186": function(t, e, i) {
            "use strict";
            var n = i("df08");
            i.n(n).a
        },
        "0238": function(t, e, i) {
            var n = i("b2de"),
                r = i("95ac"),
                a = i("56ab"),
                o = i("cfb8").SOURCE_FORMAT_ORIGINAL,
                s = i("25cc").getDimensionTypeByAxis,
                l = i("0127").getDataItemValue,
                u = i("2c57"),
                c = i("2fac").getCoordSysInfoBySeries,
                h = i("fa21"),
                d = i("2b02").enableDataStack,
                f = i("7d81").makeSeriesEncodeForAxisCoordSys;

            function p(t) {
                if (t.sourceFormat === o) {
                    var e = function(t) {
                        var e = 0;
                        for (; e < t.length && null == t[e];) e++;
                        return t[e]
                    }(t.data || []);
                    return null != e && !n.isArray(l(e))
                }
            }
            var g = function(t, e, i) {
                i = i || {}, h.isInstance(t) || (t = h.seriesDataToSource(t));
                var o, l = e.get("coordinateSystem"),
                    g = u.get(l),
                    v = c(e);
                v && (o = n.map(v.coordSysDims, (function(t) {
                    var e = {
                            name: t
                        },
                        i = v.axisMap.get(t);
                    if (i) {
                        var n = i.get("type");
                        e.type = s(n)
                    }
                    return e
                }))), o || (o = g && (g.getDimensionsInfo ? g.getDimensionsInfo() : g.dimensions.slice()) || ["x", "y"]);
                var m, y, x = a(t, {
                    coordDimensions: o,
                    generateCoord: i.generateCoord,
                    encodeDefaulter: i.useEncodeDefaulter ? n.curry(f, o, e) : null
                });
                v && n.each(x, (function(t, e) {
                    var i = t.coordDim,
                        n = v.categoryAxisMap.get(i);
                    n && (null == m && (m = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (y = !0)
                })), y || null == m || (x[m].otherDims.itemName = 0);
                var _ = d(e, x),
                    b = new r(x, e);
                b.setCalculationInfo(_);
                var w = null != m && p(t) ? function(t, e, i, n) {
                    return n === m ? i : this.defaultDimValueGetter(t, e, i, n)
                } : null;
                return b.hasItemOption = !1, b.initData(t, null, w), b
            };
            t.exports = g
        },
        "02c6": function(t, e, i) {
            var n = i("cb05").normalizeRadian,
                r = 2 * Math.PI;
            e.containStroke = function(t, e, i, a, o, s, l, u, c) {
                if (0 === l) return !1;
                var h = l;
                u -= t, c -= e;
                var d = Math.sqrt(u * u + c * c);
                if (d - h > i || d + h < i) return !1;
                if (Math.abs(a - o) % r < 1e-4) return !0;
                if (s) {
                    var f = a;
                    a = n(o), o = n(f)
                } else a = n(a), o = n(o);
                a > o && (o += r);
                var p = Math.atan2(c, u);
                return p < 0 && (p += r), p >= a && p <= o || p + r >= a && p + r <= o
            }
        },
        "0328": function(t, e, i) {
            var n = i("56b7"),
                r = i("ea92"),
                a = i("b2de"),
                o = i("0127"),
                s = i("e2dc").getPercentWithPrecision,
                l = i("7bf8"),
                u = i("31c0").retrieveRawAttr,
                c = i("7d81").makeSeriesEncodeForNameBased,
                h = i("e22d"),
                d = n.extendSeriesModel({
                    type: "series.pie",
                    init: function(t) {
                        d.superApply(this, "init", arguments), this.legendVisualProvider = new h(a.bind(this.getData, this), a.bind(this.getRawData, this)), this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
                    },
                    mergeOption: function(t) {
                        d.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
                    },
                    getInitialData: function(t, e) {
                        return r(this, {
                            coordDimensions: ["value"],
                            encodeDefaulter: a.curry(c, this)
                        })
                    },
                    _createSelectableList: function() {
                        for (var t = this.getRawData(), e = t.mapDimension("value"), i = [], n = 0, r = t.count(); n < r; n++) i.push({
                            name: t.getName(n),
                            value: t.get(e, n),
                            selected: u(t, n, "selected")
                        });
                        return i
                    },
                    getDataParams: function(t) {
                        var e = this.getData(),
                            i = d.superCall(this, "getDataParams", t),
                            n = [];
                        return e.each(e.mapDimension("value"), (function(t) {
                            n.push(t)
                        })), i.percent = s(n, t, e.hostModel.get("percentPrecision")), i.$vars.push("percent"), i
                    },
                    _defaultLabelLine: function(t) {
                        o.defaultEmphasis(t, "labelLine", ["show"]);
                        var e = t.labelLine,
                            i = t.emphasis.labelLine;
                        e.show = e.show && t.label.show, i.show = i.show && t.emphasis.label.show
                    },
                    defaultOption: {
                        zlevel: 0,
                        z: 2,
                        legendHoverLink: !0,
                        hoverAnimation: !0,
                        center: ["50%", "50%"],
                        radius: [0, "75%"],
                        clockwise: !0,
                        startAngle: 90,
                        minAngle: 0,
                        minShowLabelAngle: 0,
                        selectedOffset: 10,
                        hoverOffset: 10,
                        avoidLabelOverlap: !0,
                        percentPrecision: 2,
                        stillShowZeroSum: !0,
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: null,
                        height: null,
                        label: {
                            rotate: !1,
                            show: !0,
                            position: "outer",
                            alignTo: "none",
                            margin: "25%",
                            bleedMargin: 10,
                            distanceToLabelLine: 5
                        },
                        labelLine: {
                            show: !0,
                            length: 15,
                            length2: 15,
                            smooth: !1,
                            lineStyle: {
                                width: 1,
                                type: "solid"
                            }
                        },
                        itemStyle: {
                            borderWidth: 1
                        },
                        animationType: "expansion",
                        animationTypeUpdate: "transition",
                        animationEasing: "cubicOut"
                    }
                });
            a.mixin(d, l);
            var f = d;
            t.exports = f
        },
        "03c1": function(t, e, i) {
            var n = i("b2de"),
                r = {
                    getMin: function(t) {
                        var e = this.option,
                            i = t || null == e.rangeStart ? e.min : e.rangeStart;
                        return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !n.eqNaN(i) && (i = this.axis.scale.parse(i)), i
                    },
                    getMax: function(t) {
                        var e = this.option,
                            i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                        return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !n.eqNaN(i) && (i = this.axis.scale.parse(i)), i
                    },
                    getNeedCrossZero: function() {
                        var t = this.option;
                        return null == t.rangeStart && null == t.rangeEnd && !t.scale
                    },
                    getCoordSysModel: n.noop,
                    setRange: function(t, e) {
                        this.option.rangeStart = t, this.option.rangeEnd = e
                    },
                    resetRange: function() {
                        this.option.rangeStart = this.option.rangeEnd = null
                    }
                };
            t.exports = r
        },
        "0520": function(t, e) {
            t.exports = {
                getBoxLayoutParams: function() {
                    return {
                        left: this.get("left"),
                        top: this.get("top"),
                        right: this.get("right"),
                        bottom: this.get("bottom"),
                        width: this.get("width"),
                        height: this.get("height")
                    }
                }
            }
        },
        "055a": function(t, e, i) {
            var n = i("b2de"),
                r = i("2882"),
                a = i("a16b"),
                o = function(t) {
                    for (var e in t = t || {}, r.call(this, t), t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    this._children = [], this.__storage = null, this.__dirty = !0
                };
            o.prototype = {
                constructor: o,
                isGroup: !0,
                type: "group",
                silent: !1,
                children: function() {
                    return this._children.slice()
                },
                childAt: function(t) {
                    return this._children[t]
                },
                childOfName: function(t) {
                    for (var e = this._children, i = 0; i < e.length; i++)
                        if (e[i].name === t) return e[i]
                },
                childCount: function() {
                    return this._children.length
                },
                add: function(t) {
                    return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
                },
                addBefore: function(t, e) {
                    if (t && t !== this && t.parent !== this && e && e.parent === this) {
                        var i = this._children,
                            n = i.indexOf(e);
                        n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                    }
                    return this
                },
                _doAdd: function(t) {
                    t.parent && t.parent.remove(t), t.parent = this;
                    var e = this.__storage,
                        i = this.__zr;
                    e && e !== t.__storage && (e.addToStorage(t), t instanceof o && t.addChildrenToStorage(e)), i && i.refresh()
                },
                remove: function(t) {
                    var e = this.__zr,
                        i = this.__storage,
                        r = this._children,
                        a = n.indexOf(r, t);
                    return a < 0 || (r.splice(a, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(i)), e && e.refresh()), this
                },
                removeAll: function() {
                    var t, e, i = this._children,
                        n = this.__storage;
                    for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(n)), t.parent = null;
                    return i.length = 0, this
                },
                eachChild: function(t, e) {
                    for (var i = this._children, n = 0; n < i.length; n++) {
                        var r = i[n];
                        t.call(e, r, n)
                    }
                    return this
                },
                traverse: function(t, e) {
                    for (var i = 0; i < this._children.length; i++) {
                        var n = this._children[i];
                        t.call(e, n), "group" === n.type && n.traverse(t, e)
                    }
                    return this
                },
                addChildrenToStorage: function(t) {
                    for (var e = 0; e < this._children.length; e++) {
                        var i = this._children[e];
                        t.addToStorage(i), i instanceof o && i.addChildrenToStorage(t)
                    }
                },
                delChildrenFromStorage: function(t) {
                    for (var e = 0; e < this._children.length; e++) {
                        var i = this._children[e];
                        t.delFromStorage(i), i instanceof o && i.delChildrenFromStorage(t)
                    }
                },
                dirty: function() {
                    return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
                },
                getBoundingRect: function(t) {
                    for (var e = null, i = new a(0, 0, 0, 0), n = t || this._children, r = [], o = 0; o < n.length; o++) {
                        var s = n[o];
                        if (!s.ignore && !s.invisible) {
                            var l = s.getBoundingRect(),
                                u = s.getLocalTransform(r);
                            u ? (i.copy(l), i.applyTransform(u), (e = e || i.clone()).union(i)) : (e = e || l.clone()).union(l)
                        }
                    }
                    return e || i
                }
            }, n.inherits(o, r);
            var s = o;
            t.exports = s
        },
        "096b": function(t, e, i) {
            var n = i("b2de"),
                r = i("e2dc"),
                a = i("542f"),
                o = i("1976"),
                s = i("446b"),
                l = s.prototype,
                u = Math.ceil,
                c = Math.floor,
                h = 1e3,
                d = 6e4,
                f = 60 * d,
                p = 24 * f,
                g = s.extend({
                    type: "time",
                    getLabel: function(t) {
                        var e = this._stepLvl,
                            i = new Date(t);
                        return a.formatTime(e[0], i, this.getSetting("useUTC"))
                    },
                    niceExtent: function(t) {
                        var e = this._extent;
                        if (e[0] === e[1] && (e[0] -= p, e[1] += p), e[1] === -1 / 0 && e[0] === 1 / 0) {
                            var i = new Date;
                            e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - p
                        }
                        this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                        var n = this._interval;
                        t.fixMin || (e[0] = r.round(c(e[0] / n) * n)), t.fixMax || (e[1] = r.round(u(e[1] / n) * n))
                    },
                    niceTicks: function(t, e, i) {
                        t = t || 10;
                        var n = this._extent,
                            a = n[1] - n[0],
                            s = a / t;
                        null != e && s < e && (s = e), null != i && s > i && (s = i);
                        var l = v.length,
                            h = function(t, e, i, n) {
                                for (; i < n;) {
                                    var r = i + n >>> 1;
                                    t[r][1] < e ? i = r + 1 : n = r
                                }
                                return i
                            }(v, s, 0, l),
                            d = v[Math.min(h, l - 1)],
                            f = d[1];
                        if ("year" === d[0]) {
                            var p = a / f;
                            f *= r.nice(p / t, !0)
                        }
                        var g = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
                            m = [Math.round(u((n[0] - g) / f) * f + g), Math.round(c((n[1] - g) / f) * f + g)];
                        o.fixExtent(m, n), this._stepLvl = d, this._interval = f, this._niceExtent = m
                    },
                    parse: function(t) {
                        return +r.parseDate(t)
                    }
                });
            n.each(["contain", "normalize"], (function(t) {
                g.prototype[t] = function(e) {
                    return l[t].call(this, this.parse(e))
                }
            }));
            var v = [
                ["hh:mm:ss", h],
                ["hh:mm:ss", 5e3],
                ["hh:mm:ss", 1e4],
                ["hh:mm:ss", 15e3],
                ["hh:mm:ss", 3e4],
                ["hh:mm\nMM-dd", d],
                ["hh:mm\nMM-dd", 5 * d],
                ["hh:mm\nMM-dd", 10 * d],
                ["hh:mm\nMM-dd", 15 * d],
                ["hh:mm\nMM-dd", 30 * d],
                ["hh:mm\nMM-dd", f],
                ["hh:mm\nMM-dd", 2 * f],
                ["hh:mm\nMM-dd", 6 * f],
                ["hh:mm\nMM-dd", 12 * f],
                ["MM-dd\nyyyy", p],
                ["MM-dd\nyyyy", 2 * p],
                ["MM-dd\nyyyy", 3 * p],
                ["MM-dd\nyyyy", 4 * p],
                ["MM-dd\nyyyy", 5 * p],
                ["MM-dd\nyyyy", 6 * p],
                ["week", 7 * p],
                ["MM-dd\nyyyy", 10 * p],
                ["week", 14 * p],
                ["week", 21 * p],
                ["month", 31 * p],
                ["week", 42 * p],
                ["month", 62 * p],
                ["week", 70 * p],
                ["quarter", 95 * p],
                ["month", 31 * p * 4],
                ["month", 31 * p * 5],
                ["half-year", 380 * p / 2],
                ["month", 31 * p * 8],
                ["month", 31 * p * 10],
                ["year", 380 * p]
            ];
            g.create = function(t) {
                return new g({
                    useUTC: t.ecModel.get("useUTC")
                })
            };
            var m = g;
            t.exports = m
        },
        "0b19": function(t, e) {
            var i = {
                    average: function(t) {
                        for (var e = 0, i = 0, n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
                        return 0 === i ? NaN : e / i
                    },
                    sum: function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) e += t[i] || 0;
                        return e
                    },
                    max: function(t) {
                        for (var e = -1 / 0, i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
                        return isFinite(e) ? e : NaN
                    },
                    min: function(t) {
                        for (var e = 1 / 0, i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
                        return isFinite(e) ? e : NaN
                    },
                    nearest: function(t) {
                        return t[0]
                    }
                },
                n = function(t, e) {
                    return Math.round(t.length / 2)
                };
            t.exports = function(t) {
                return {
                    seriesType: t,
                    modifyOutputEnd: !0,
                    reset: function(t, e, r) {
                        var a = t.getData(),
                            o = t.get("sampling"),
                            s = t.coordinateSystem;
                        if ("cartesian2d" === s.type && o) {
                            var l, u = s.getBaseAxis(),
                                c = s.getOtherAxis(u),
                                h = u.getExtent(),
                                d = h[1] - h[0],
                                f = Math.round(a.count() / d);
                            f > 1 && ("string" == typeof o ? l = i[o] : "function" == typeof o && (l = o), l && t.setData(a.downSample(a.mapDimension(c.dim), 1 / f, l, n)))
                        }
                    }
                }
            }
        },
        "0bbe": function(t, e, i) {
            var n = i("b2de"),
                r = i("81e8"),
                a = i("a16b"),
                o = i("4592").calculateTextPosition,
                s = r.extendShape({
                    type: "triangle",
                    shape: {
                        cx: 0,
                        cy: 0,
                        width: 0,
                        height: 0
                    },
                    buildPath: function(t, e) {
                        var i = e.cx,
                            n = e.cy,
                            r = e.width / 2,
                            a = e.height / 2;
                        t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath()
                    }
                }),
                l = r.extendShape({
                    type: "diamond",
                    shape: {
                        cx: 0,
                        cy: 0,
                        width: 0,
                        height: 0
                    },
                    buildPath: function(t, e) {
                        var i = e.cx,
                            n = e.cy,
                            r = e.width / 2,
                            a = e.height / 2;
                        t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath()
                    }
                }),
                u = r.extendShape({
                    type: "pin",
                    shape: {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    buildPath: function(t, e) {
                        var i = e.x,
                            n = e.y,
                            r = e.width / 5 * 3,
                            a = Math.max(r, e.height),
                            o = r / 2,
                            s = o * o / (a - o),
                            l = n - a + o + s,
                            u = Math.asin(s / o),
                            c = Math.cos(u) * o,
                            h = Math.sin(u),
                            d = Math.cos(u),
                            f = .6 * o,
                            p = .7 * o;
                        t.moveTo(i - c, l + s), t.arc(i, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(i + c - h * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - c + h * f, l + s + d * f, i - c, l + s), t.closePath()
                    }
                }),
                c = r.extendShape({
                    type: "arrow",
                    shape: {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    buildPath: function(t, e) {
                        var i = e.height,
                            n = e.width,
                            r = e.x,
                            a = e.y,
                            o = n / 3 * 2;
                        t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath()
                    }
                }),
                h = {
                    line: r.Line,
                    rect: r.Rect,
                    roundRect: r.Rect,
                    square: r.Rect,
                    circle: r.Circle,
                    diamond: l,
                    pin: u,
                    arrow: c,
                    triangle: s
                },
                d = {
                    line: function(t, e, i, n, r) {
                        r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
                    },
                    rect: function(t, e, i, n, r) {
                        r.x = t, r.y = e, r.width = i, r.height = n
                    },
                    roundRect: function(t, e, i, n, r) {
                        r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
                    },
                    square: function(t, e, i, n, r) {
                        var a = Math.min(i, n);
                        r.x = t, r.y = e, r.width = a, r.height = a
                    },
                    circle: function(t, e, i, n, r) {
                        r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
                    },
                    diamond: function(t, e, i, n, r) {
                        r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
                    },
                    pin: function(t, e, i, n, r) {
                        r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
                    },
                    arrow: function(t, e, i, n, r) {
                        r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
                    },
                    triangle: function(t, e, i, n, r) {
                        r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
                    }
                },
                f = {};
            n.each(h, (function(t, e) {
                f[e] = new t
            }));
            var p = r.extendShape({
                type: "symbol",
                shape: {
                    symbolType: "",
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                calculateTextPosition: function(t, e, i) {
                    var n = o(t, e, i),
                        r = this.shape;
                    return r && "pin" === r.symbolType && "inside" === e.textPosition && (n.y = i.y + .4 * i.height), n
                },
                buildPath: function(t, e, i) {
                    var n = e.symbolType;
                    if ("none" !== n) {
                        var r = f[n];
                        r || (r = f[n = "rect"]), d[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i)
                    }
                }
            });

            function g(t, e) {
                if ("image" !== this.type) {
                    var i = this.style,
                        n = this.shape;
                    n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1)
                }
            }
            e.createSymbol = function(t, e, i, n, o, s, l) {
                var u, c = 0 === t.indexOf("empty");
                return c && (t = t.substr(5, 1).toLowerCase() + t.substr(6)), (u = 0 === t.indexOf("image://") ? r.makeImage(t.slice(8), new a(e, i, n, o), l ? "center" : "cover") : 0 === t.indexOf("path://") ? r.makePath(t.slice(7), {}, new a(e, i, n, o), l ? "center" : "cover") : new p({
                    shape: {
                        symbolType: t,
                        x: e,
                        y: i,
                        width: n,
                        height: o
                    }
                })).__isEmptyBrush = c, u.setColor = g, u.setColor(s), u
            }
        },
        "0bec": function(t, e, i) {
            var n = i("b2de").map,
                r = i("9554"),
                a = i("2b02").isDimensionStacked;
            t.exports = function(t) {
                return {
                    seriesType: t,
                    plan: r(),
                    reset: function(t) {
                        var e = t.getData(),
                            i = t.coordinateSystem,
                            r = t.pipelineContext.large;
                        if (i) {
                            var o = n(i.dimensions, (function(t) {
                                    return e.mapDimension(t)
                                })).slice(0, 2),
                                s = o.length,
                                l = e.getCalculationInfo("stackResultDimension");
                            return a(e, o[0]) && (o[0] = l), a(e, o[1]) && (o[1] = l), s && {
                                progress: function(t, e) {
                                    for (var n = t.end - t.start, a = r && new Float32Array(n * s), l = t.start, u = 0, c = [], h = []; l < t.end; l++) {
                                        var d;
                                        if (1 === s) {
                                            var f = e.get(o[0], l);
                                            d = !isNaN(f) && i.dataToPoint(f, null, h)
                                        } else {
                                            f = c[0] = e.get(o[0], l);
                                            var p = c[1] = e.get(o[1], l);
                                            d = !isNaN(f) && !isNaN(p) && i.dataToPoint(c, null, h)
                                        }
                                        r ? (a[u++] = d ? d[0] : NaN, a[u++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [NaN, NaN])
                                    }
                                    r && e.setLayout("symbolPoints", a)
                                }
                            }
                        }
                    }
                }
            }
        },
        "0cd7": function(t, e) {
            function i() {
                this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this)
            }

            function n(t, e) {
                return {
                    target: t,
                    topTarget: e && e.topTarget
                }
            }
            i.prototype = {
                constructor: i,
                _dragStart: function(t) {
                    var e = t.target;
                    e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(n(e, t), "dragstart", t.event))
                },
                _drag: function(t) {
                    var e = this._draggingTarget;
                    if (e) {
                        var i = t.offsetX,
                            r = t.offsetY,
                            a = i - this._x,
                            o = r - this._y;
                        this._x = i, this._y = r, e.drift(a, o, t), this.dispatchToElement(n(e, t), "drag", t.event);
                        var s = this.findHover(i, r, e).target,
                            l = this._dropTarget;
                        this._dropTarget = s, e !== s && (l && s !== l && this.dispatchToElement(n(l, t), "dragleave", t.event), s && s !== l && this.dispatchToElement(n(s, t), "dragenter", t.event))
                    }
                },
                _dragEnd: function(t) {
                    var e = this._draggingTarget;
                    e && (e.dragging = !1), this.dispatchToElement(n(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(n(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
                }
            };
            var r = i;
            t.exports = r
        },
        "0dfd": function(t, e, i) {
            var n = new(i("4ff5"))(50);

            function r() {
                var t = this.__cachedImgObj;
                this.onload = this.onerror = this.__cachedImgObj = null;
                for (var e = 0; e < t.pending.length; e++) {
                    var i = t.pending[e],
                        n = i.cb;
                    n && n(this, i.cbPayload), i.hostEl.dirty()
                }
                t.pending.length = 0
            }

            function a(t) {
                return t && t.width && t.height
            }
            e.findExistImage = function(t) {
                if ("string" == typeof t) {
                    var e = n.get(t);
                    return e && e.image
                }
                return t
            }, e.createOrUpdateImage = function(t, e, i, o, s) {
                if (t) {
                    if ("string" == typeof t) {
                        if (e && e.__zrImageSrc === t || !i) return e;
                        var l = n.get(t),
                            u = {
                                hostEl: i,
                                cb: o,
                                cbPayload: s
                            };
                        return l ? !a(e = l.image) && l.pending.push(u) : ((e = new Image).onload = e.onerror = r, n.put(t, e.__cachedImgObj = {
                            image: e,
                            pending: [u]
                        }), e.src = e.__zrImageSrc = t), e
                    }
                    return t
                }
                return e
            }, e.isImageReady = a
        },
        "0e1c": function(t, e, i) {
            var n = i("bb87"),
                r = i("0e35"),
                a = i("83e1"),
                o = i("3b07"),
                s = n.extend({
                    makeElOption: function(t, e, i, n, o) {
                        var s = i.axis,
                            c = s.grid,
                            h = n.get("type"),
                            d = l(c, s).getOtherAxis(s).getGlobalExtent(),
                            f = s.toGlobalCoord(s.dataToCoord(e, !0));
                        if (h && "none" !== h) {
                            var p = r.buildElStyle(n),
                                g = u[h](s, f, d);
                            g.style = p, t.graphicKey = g.type, t.pointer = g
                        }
                        var v = a.layout(c.model, i);
                        r.buildCartesianSingleLabelElOption(e, t, v, i, n, o)
                    },
                    getHandleTransform: function(t, e, i) {
                        var n = a.layout(e.axis.grid.model, e, {
                            labelInside: !1
                        });
                        return n.labelMargin = i.get("handle.margin"), {
                            position: r.getTransformedPosition(e.axis, t, n),
                            rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
                        }
                    },
                    updateHandleTransform: function(t, e, i, n) {
                        var r = i.axis,
                            a = r.grid,
                            o = r.getGlobalExtent(!0),
                            s = l(a, r).getOtherAxis(r).getGlobalExtent(),
                            u = "x" === r.dim ? 0 : 1,
                            c = t.position;
                        c[u] += e[u], c[u] = Math.min(o[1], c[u]), c[u] = Math.max(o[0], c[u]);
                        var h = (s[1] + s[0]) / 2,
                            d = [h, h];
                        d[u] = c[u];
                        return {
                            position: c,
                            rotation: t.rotation,
                            cursorPoint: d,
                            tooltipOption: [{
                                verticalAlign: "middle"
                            }, {
                                align: "center"
                            }][u]
                        }
                    }
                });

            function l(t, e) {
                var i = {};
                return i[e.dim + "AxisIndex"] = e.index, t.getCartesian(i)
            }
            var u = {
                line: function(t, e, i) {
                    return {
                        type: "Line",
                        subPixelOptimize: !0,
                        shape: r.makeLineShape([e, i[0]], [e, i[1]], c(t))
                    }
                },
                shadow: function(t, e, i) {
                    var n = Math.max(1, t.getBandWidth()),
                        a = i[1] - i[0];
                    return {
                        type: "Rect",
                        shape: r.makeRectShape([e - n / 2, i[0]], [n, a], c(t))
                    }
                }
            };

            function c(t) {
                return "x" === t.dim ? 0 : 1
            }
            o.registerAxisPointerClass("CartesianAxisPointer", s);
            var h = s;
            t.exports = h
        },
        "0e35": function(t, e, i) {
            var n = i("b2de"),
                r = i("81e8"),
                a = i("4592"),
                o = i("542f"),
                s = i("6b25"),
                l = i("8d1f"),
                u = i("517a");

            function c(t, e, i, n, r) {
                var s = h(i.get("value"), e.axis, e.ecModel, i.get("seriesDataIndices"), {
                        precision: i.get("label.precision"),
                        formatter: i.get("label.formatter")
                    }),
                    l = i.getModel("label"),
                    u = o.normalizeCssArray(l.get("padding") || 0),
                    c = l.getFont(),
                    d = a.getBoundingRect(s, c),
                    f = r.position,
                    p = d.width + u[1] + u[3],
                    g = d.height + u[0] + u[2],
                    v = r.align;
                "right" === v && (f[0] -= p), "center" === v && (f[0] -= p / 2);
                var m = r.verticalAlign;
                "bottom" === m && (f[1] -= g), "middle" === m && (f[1] -= g / 2),
                    function(t, e, i, n) {
                        var r = n.getWidth(),
                            a = n.getHeight();
                        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, a) - i, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
                    }(f, p, g, n);
                var y = l.get("backgroundColor");
                y && "auto" !== y || (y = e.get("axisLine.lineStyle.color")), t.label = {
                    shape: {
                        x: 0,
                        y: 0,
                        width: p,
                        height: g,
                        r: l.get("borderRadius")
                    },
                    position: f.slice(),
                    style: {
                        text: s,
                        textFont: c,
                        textFill: l.getTextColor(),
                        textPosition: "inside",
                        textPadding: u,
                        fill: y,
                        stroke: l.get("borderColor") || "transparent",
                        lineWidth: l.get("borderWidth") || 0,
                        shadowBlur: l.get("shadowBlur"),
                        shadowColor: l.get("shadowColor"),
                        shadowOffsetX: l.get("shadowOffsetX"),
                        shadowOffsetY: l.get("shadowOffsetY")
                    },
                    z2: 10
                }
            }

            function h(t, e, i, r, a) {
                t = e.scale.parse(t);
                var o = e.scale.getLabel(t, {
                        precision: a.precision
                    }),
                    s = a.formatter;
                if (s) {
                    var u = {
                        value: l.getAxisRawValue(e, t),
                        axisDimension: e.dim,
                        axisIndex: e.index,
                        seriesData: []
                    };
                    n.each(r, (function(t) {
                        var e = i.getSeriesByIndex(t.seriesIndex),
                            n = t.dataIndexInside,
                            r = e && e.getDataParams(n);
                        r && u.seriesData.push(r)
                    })), n.isString(s) ? o = s.replace("{value}", o) : n.isFunction(s) && (o = s(u))
                }
                return o
            }

            function d(t, e, i) {
                var n = s.create();
                return s.rotate(n, n, i.rotation), s.translate(n, n, i.position), r.applyTransform([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n)
            }
            e.buildElStyle = function(t) {
                var e, i = t.get("type"),
                    n = t.getModel(i + "Style");
                return "line" === i ? (e = n.getLineStyle()).fill = null : "shadow" === i && ((e = n.getAreaStyle()).stroke = null), e
            }, e.buildLabelElOption = c, e.getValueLabel = h, e.getTransformedPosition = d, e.buildCartesianSingleLabelElOption = function(t, e, i, n, r, a) {
                var o = u.innerTextLayout(i.rotation, 0, i.labelDirection);
                i.labelMargin = r.get("label.margin"), c(e, n, r, a, {
                    position: d(n.axis, t, i),
                    align: o.textAlign,
                    verticalAlign: o.textVerticalAlign
                })
            }, e.makeLineShape = function(t, e, i) {
                return {
                    x1: t[i = i || 0],
                    y1: t[1 - i],
                    x2: e[i],
                    y2: e[1 - i]
                }
            }, e.makeRectShape = function(t, e, i) {
                return {
                    x: t[i = i || 0],
                    y: t[1 - i],
                    width: e[i],
                    height: e[1 - i]
                }
            }, e.makeSectorShape = function(t, e, i, n, r, a) {
                return {
                    cx: t,
                    cy: e,
                    r0: i,
                    r: n,
                    startAngle: r,
                    endAngle: a,
                    clockwise: !0
                }
            }
        },
        "102c": function(t, e, i) {
            var n = i("df91"),
                r = n.create,
                a = n.distSquare,
                o = Math.pow,
                s = Math.sqrt,
                l = 1e-8,
                u = 1e-4,
                c = s(3),
                h = 1 / 3,
                d = r(),
                f = r(),
                p = r();

            function g(t) {
                return t > -l && t < l
            }

            function v(t) {
                return t > l || t < -l
            }

            function m(t, e, i, n, r) {
                var a = 1 - r;
                return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)
            }

            function y(t, e, i, n) {
                var r = 1 - n;
                return r * (r * t + 2 * n * e) + n * n * i
            }
            e.cubicAt = m, e.cubicDerivativeAt = function(t, e, i, n, r) {
                var a = 1 - r;
                return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)
            }, e.cubicRootAt = function(t, e, i, n, r, a) {
                var l = n + 3 * (e - i) - t,
                    u = 3 * (i - 2 * e + t),
                    d = 3 * (e - t),
                    f = t - r,
                    p = u * u - 3 * l * d,
                    v = u * d - 9 * l * f,
                    m = d * d - 3 * u * f,
                    y = 0;
                if (g(p) && g(v))
                    if (g(u)) a[0] = 0;
                    else {
                        var x = -d / u;
                        x >= 0 && x <= 1 && (a[y++] = x)
                    }
                else {
                    var _ = v * v - 4 * p * m;
                    if (g(_)) {
                        var b = v / p,
                            w = (x = -u / l + b, -b / 2);
                        x >= 0 && x <= 1 && (a[y++] = x), w >= 0 && w <= 1 && (a[y++] = w)
                    } else if (_ > 0) {
                        var S = s(_),
                            C = p * u + 1.5 * l * (-v + S),
                            M = p * u + 1.5 * l * (-v - S);
                        (x = (-u - ((C = C < 0 ? -o(-C, h) : o(C, h)) + (M = M < 0 ? -o(-M, h) : o(M, h)))) / (3 * l)) >= 0 && x <= 1 && (a[y++] = x)
                    } else {
                        var T = (2 * p * u - 3 * l * v) / (2 * s(p * p * p)),
                            I = Math.acos(T) / 3,
                            A = s(p),
                            D = Math.cos(I),
                            k = (x = (-u - 2 * A * D) / (3 * l), w = (-u + A * (D + c * Math.sin(I))) / (3 * l), (-u + A * (D - c * Math.sin(I))) / (3 * l));
                        x >= 0 && x <= 1 && (a[y++] = x), w >= 0 && w <= 1 && (a[y++] = w), k >= 0 && k <= 1 && (a[y++] = k)
                    }
                }
                return y
            }, e.cubicExtrema = function(t, e, i, n, r) {
                var a = 6 * i - 12 * e + 6 * t,
                    o = 9 * e + 3 * n - 3 * t - 9 * i,
                    l = 3 * e - 3 * t,
                    u = 0;
                if (g(o)) {
                    if (v(a)) {
                        var c = -l / a;
                        c >= 0 && c <= 1 && (r[u++] = c)
                    }
                } else {
                    var h = a * a - 4 * o * l;
                    if (g(h)) r[0] = -a / (2 * o);
                    else if (h > 0) {
                        var d = s(h),
                            f = (c = (-a + d) / (2 * o), (-a - d) / (2 * o));
                        c >= 0 && c <= 1 && (r[u++] = c), f >= 0 && f <= 1 && (r[u++] = f)
                    }
                }
                return u
            }, e.cubicSubdivide = function(t, e, i, n, r, a) {
                var o = (e - t) * r + t,
                    s = (i - e) * r + e,
                    l = (n - i) * r + i,
                    u = (s - o) * r + o,
                    c = (l - s) * r + s,
                    h = (c - u) * r + u;
                a[0] = t, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = c, a[6] = l, a[7] = n
            }, e.cubicProjectPoint = function(t, e, i, n, r, o, l, c, h, g, v) {
                var y, x, _, b, w, S = .005,
                    C = 1 / 0;
                d[0] = h, d[1] = g;
                for (var M = 0; M < 1; M += .05) f[0] = m(t, i, r, l, M), f[1] = m(e, n, o, c, M), (b = a(d, f)) < C && (y = M, C = b);
                C = 1 / 0;
                for (var T = 0; T < 32 && !(S < u); T++) x = y - S, _ = y + S, f[0] = m(t, i, r, l, x), f[1] = m(e, n, o, c, x), b = a(f, d), x >= 0 && b < C ? (y = x, C = b) : (p[0] = m(t, i, r, l, _), p[1] = m(e, n, o, c, _), w = a(p, d), _ <= 1 && w < C ? (y = _, C = w) : S *= .5);
                return v && (v[0] = m(t, i, r, l, y), v[1] = m(e, n, o, c, y)), s(C)
            }, e.quadraticAt = y, e.quadraticDerivativeAt = function(t, e, i, n) {
                return 2 * ((1 - n) * (e - t) + n * (i - e))
            }, e.quadraticRootAt = function(t, e, i, n, r) {
                var a = t - 2 * e + i,
                    o = 2 * (e - t),
                    l = t - n,
                    u = 0;
                if (g(a)) {
                    if (v(o)) {
                        var c = -l / o;
                        c >= 0 && c <= 1 && (r[u++] = c)
                    }
                } else {
                    var h = o * o - 4 * a * l;
                    if (g(h))(c = -o / (2 * a)) >= 0 && c <= 1 && (r[u++] = c);
                    else if (h > 0) {
                        var d = s(h),
                            f = (c = (-o + d) / (2 * a), (-o - d) / (2 * a));
                        c >= 0 && c <= 1 && (r[u++] = c), f >= 0 && f <= 1 && (r[u++] = f)
                    }
                }
                return u
            }, e.quadraticExtremum = function(t, e, i) {
                var n = t + i - 2 * e;
                return 0 === n ? .5 : (t - e) / n
            }, e.quadraticSubdivide = function(t, e, i, n, r) {
                var a = (e - t) * n + t,
                    o = (i - e) * n + e,
                    s = (o - a) * n + a;
                r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
            }, e.quadraticProjectPoint = function(t, e, i, n, r, o, l, c, h) {
                var g, v = .005,
                    m = 1 / 0;
                d[0] = l, d[1] = c;
                for (var x = 0; x < 1; x += .05) {
                    f[0] = y(t, i, r, x), f[1] = y(e, n, o, x);
                    var _ = a(d, f);
                    _ < m && (g = x, m = _)
                }
                m = 1 / 0;
                for (var b = 0; b < 32 && !(v < u); b++) {
                    var w = g - v,
                        S = g + v;
                    if (f[0] = y(t, i, r, w), f[1] = y(e, n, o, w), _ = a(f, d), w >= 0 && _ < m) g = w, m = _;
                    else {
                        p[0] = y(t, i, r, S), p[1] = y(e, n, o, S);
                        var C = a(p, d);
                        S <= 1 && C < m ? (g = S, m = C) : v *= .5
                    }
                }
                return h && (h[0] = y(t, i, r, g), h[1] = y(e, n, o, g)), s(m)
            }
        },
        1579: function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("56b7")),
                r = i("b2de"),
                a = i("0bbe").createSymbol,
                o = i("81e8"),
                s = i("8145").makeBackground,
                l = i("1f1f"),
                u = r.curry,
                c = r.each,
                h = o.Group,
                d = n.extendComponentView({
                    type: "legend.plain",
                    newlineDisabled: !1,
                    init: function() {
                        this.group.add(this._contentGroup = new h), this._backgroundEl, this.group.add(this._selectorGroup = new h), this._isFirstRender = !0
                    },
                    getContentGroup: function() {
                        return this._contentGroup
                    },
                    getSelectorGroup: function() {
                        return this._selectorGroup
                    },
                    render: function(t, e, i) {
                        var n = this._isFirstRender;
                        if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
                            var a = t.get("align"),
                                o = t.get("orient");
                            a && "auto" !== a || (a = "right" === t.get("left") && "vertical" === o ? "right" : "left");
                            var u = t.get("selector", !0),
                                c = t.get("selectorPosition", !0);
                            !u || c && "auto" !== c || (c = "horizontal" === o ? "end" : "start"), this.renderInner(a, t, e, i, u, o, c);
                            var h = t.getBoxLayoutParams(),
                                d = {
                                    width: i.getWidth(),
                                    height: i.getHeight()
                                },
                                f = t.get("padding"),
                                p = l.getLayoutRect(h, d, f),
                                g = this.layoutInner(t, a, p, n, u, c),
                                v = l.getLayoutRect(r.defaults({
                                    width: g.width,
                                    height: g.height
                                }, h), d, f);
                            this.group.attr("position", [v.x - g.x, v.y - g.y]), this.group.add(this._backgroundEl = s(g, t))
                        }
                    },
                    resetInner: function() {
                        this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll()
                    },
                    renderInner: function(t, e, i, n, a, o, s) {
                        var l = this.getContentGroup(),
                            d = r.createHashMap(),
                            f = e.get("selectedMode"),
                            m = [];
                        i.eachRawSeries((function(t) {
                            !t.get("legendHoverLink") && m.push(t.id)
                        })), c(e.getData(), (function(r, a) {
                            var o = r.get("name");
                            if (this.newlineDisabled || "" !== o && "\n" !== o) {
                                var s = i.getSeriesByName(o)[0];
                                if (!d.get(o))
                                    if (s) {
                                        var c = s.getData(),
                                            y = c.getVisual("color"),
                                            x = c.getVisual("borderColor");
                                        "function" == typeof y && (y = y(s.getDataParams(0))), "function" == typeof x && (x = x(s.getDataParams(0)));
                                        var _ = c.getVisual("legendSymbol") || "roundRect",
                                            b = c.getVisual("symbol");
                                        this._createItem(o, a, r, e, _, b, t, y, x, f).on("click", u(p, o, null, n, m)).on("mouseover", u(g, s.name, null, n, m)).on("mouseout", u(v, s.name, null, n, m)), d.set(o, !0)
                                    } else i.eachRawSeries((function(i) {
                                        if (!d.get(o) && i.legendVisualProvider) {
                                            var s = i.legendVisualProvider;
                                            if (!s.containName(o)) return;
                                            var l = s.indexOfName(o),
                                                c = s.getItemVisual(l, "color"),
                                                h = s.getItemVisual(l, "borderColor");
                                            this._createItem(o, a, r, e, "roundRect", null, t, c, h, f).on("click", u(p, null, o, n, m)).on("mouseover", u(g, null, o, n, m)).on("mouseout", u(v, null, o, n, m)), d.set(o, !0)
                                        }
                                    }), this)
                            } else l.add(new h({
                                newline: !0
                            }))
                        }), this), a && this._createSelector(a, e, n, o, s)
                    },
                    _createSelector: function(t, e, i, n, r) {
                        var a = this.getSelectorGroup();
                        c(t, (function(t) {
                            ! function(t) {
                                var n = t.type,
                                    r = new o.Text({
                                        style: {
                                            x: 0,
                                            y: 0,
                                            align: "center",
                                            verticalAlign: "middle"
                                        },
                                        onclick: function() {
                                            i.dispatchAction({
                                                type: "all" === n ? "legendAllSelect" : "legendInverseSelect"
                                            })
                                        }
                                    });
                                a.add(r);
                                var s = e.getModel("selectorLabel"),
                                    l = e.getModel("emphasis.selectorLabel");
                                o.setLabelStyle(r.style, r.hoverStyle = {}, s, l, {
                                    defaultText: t.title,
                                    isRectText: !1
                                }), o.setHoverStyle(r)
                            }(t)
                        }))
                    },
                    _createItem: function(t, e, i, n, s, l, u, c, d, p) {
                        var g = n.get("itemWidth"),
                            v = n.get("itemHeight"),
                            m = n.get("inactiveColor"),
                            y = n.get("inactiveBorderColor"),
                            x = n.get("symbolKeepAspect"),
                            _ = n.getModel("itemStyle"),
                            b = n.isSelected(t),
                            w = new h,
                            S = i.getModel("textStyle"),
                            C = i.get("icon"),
                            M = i.getModel("tooltip"),
                            T = M.parentModel,
                            I = a(s = C || s, 0, 0, g, v, b ? c : m, null == x || x);
                        if (w.add(f(I, s, _, d, y, b)), !C && l && (l !== s || "none" === l)) {
                            var A = .8 * v;
                            "none" === l && (l = "circle");
                            var D = a(l, (g - A) / 2, (v - A) / 2, A, A, b ? c : m, null == x || x);
                            w.add(f(D, l, _, d, y, b))
                        }
                        var k = "left" === u ? g + 5 : -5,
                            P = u,
                            O = n.get("formatter"),
                            L = t;
                        "string" == typeof O && O ? L = O.replace("{name}", null != t ? t : "") : "function" == typeof O && (L = O(t)), w.add(new o.Text({
                            style: o.setTextStyle({}, S, {
                                text: L,
                                x: k,
                                y: v / 2,
                                textFill: b ? S.getTextColor() : m,
                                textAlign: P,
                                textVerticalAlign: "middle"
                            })
                        }));
                        var E = new o.Rect({
                            shape: w.getBoundingRect(),
                            invisible: !0,
                            tooltip: M.get("show") ? r.extend({
                                content: t,
                                formatter: T.get("formatter", !0) || function() {
                                    return t
                                },
                                formatterParams: {
                                    componentType: "legend",
                                    legendIndex: n.componentIndex,
                                    name: t,
                                    $vars: ["name"]
                                }
                            }, M.option) : null
                        });
                        return w.add(E), w.eachChild((function(t) {
                            t.silent = !0
                        })), E.silent = !p, this.getContentGroup().add(w), o.setHoverStyle(w), w.__legendDataIndex = e, w
                    },
                    layoutInner: function(t, e, i, n, r, a) {
                        var o = this.getContentGroup(),
                            s = this.getSelectorGroup();
                        l.box(t.get("orient"), o, t.get("itemGap"), i.width, i.height);
                        var u = o.getBoundingRect(),
                            c = [-u.x, -u.y];
                        if (r) {
                            l.box("horizontal", s, t.get("selectorItemGap", !0));
                            var h = s.getBoundingRect(),
                                d = [-h.x, -h.y],
                                f = t.get("selectorButtonGap", !0),
                                p = t.getOrient().index,
                                g = 0 === p ? "width" : "height",
                                v = 0 === p ? "height" : "width",
                                m = 0 === p ? "y" : "x";
                            "end" === a ? d[p] += u[g] + f : c[p] += h[g] + f, d[1 - p] += u[v] / 2 - h[v] / 2, s.attr("position", d), o.attr("position", c);
                            var y = {
                                x: 0,
                                y: 0
                            };
                            return y[g] = u[g] + f + h[g], y[v] = Math.max(u[v], h[v]), y[m] = Math.min(0, h[m] + d[1 - p]), y
                        }
                        return o.attr("position", c), this.group.getBoundingRect()
                    },
                    remove: function() {
                        this.getContentGroup().removeAll(), this._isFirstRender = !0
                    }
                });

            function f(t, e, i, n, r, a) {
                var o;
                return "line" !== e && e.indexOf("empty") < 0 ? (o = i.getItemStyle(), t.style.stroke = n, a || (o.stroke = r)) : o = i.getItemStyle(["borderWidth", "borderColor"]), t.setStyle(o)
            }

            function p(t, e, i, n) {
                v(t, e, i, n), i.dispatchAction({
                    type: "legendToggleSelect",
                    name: null != t ? t : e
                }), g(t, e, i, n)
            }

            function g(t, e, i, n) {
                var r = i.getZr().storage.getDisplayList()[0];
                r && r.useHoverLayer || i.dispatchAction({
                    type: "highlight",
                    seriesName: t,
                    name: e,
                    excludeSeriesId: n
                })
            }

            function v(t, e, i, n) {
                var r = i.getZr().storage.getDisplayList()[0];
                r && r.useHoverLayer || i.dispatchAction({
                    type: "downplay",
                    seriesName: t,
                    name: e,
                    excludeSeriesId: n
                })
            }
            t.exports = d
        },
        1751: function(t, e, i) {
            var n = i("b2de"),
                r = i("0127").makeInner,
                a = i("ace3"),
                o = i("cf6c"),
                s = n.each,
                l = n.curry,
                u = r();

            function c(t, e, i, r, a) {
                var o = t.axis;
                if (!o.scale.isBlank() && o.containData(e))
                    if (t.involveSeries) {
                        var s = h(e, t),
                            l = s.payloadBatch,
                            u = s.snapToValue;
                        l[0] && null == a.seriesIndex && n.extend(a, l[0]), !r && t.snap && o.containData(u) && null != u && (e = u), i.showPointer(t, e, l, a), i.showTooltip(t, s, u)
                    } else i.showPointer(t, e)
            }

            function h(t, e) {
                var i = e.axis,
                    n = i.dim,
                    r = t,
                    a = [],
                    o = Number.MAX_VALUE,
                    l = -1;
                return s(e.seriesModels, (function(e, u) {
                    var c, h, d = e.getData().mapDimension(n, !0);
                    if (e.getAxisTooltipData) {
                        var f = e.getAxisTooltipData(d, t, i);
                        h = f.dataIndices, c = f.nestestValue
                    } else {
                        if (!(h = e.getData().indicesOfNearest(d[0], t, "category" === i.type ? .5 : null)).length) return;
                        c = e.getData().get(d[0], h[0])
                    }
                    if (null != c && isFinite(c)) {
                        var p = t - c,
                            g = Math.abs(p);
                        g <= o && ((g < o || p >= 0 && l < 0) && (o = g, l = p, r = c, a.length = 0), s(h, (function(t) {
                            a.push({
                                seriesIndex: e.seriesIndex,
                                dataIndexInside: t,
                                dataIndex: e.getData().getRawIndex(t)
                            })
                        })))
                    }
                })), {
                    payloadBatch: a,
                    snapToValue: r
                }
            }

            function d(t, e, i, n) {
                t[e.key] = {
                    value: i,
                    payloadBatch: n
                }
            }

            function f(t, e, i, n) {
                var r = i.payloadBatch,
                    o = e.axis,
                    s = o.model,
                    l = e.axisPointerModel;
                if (e.triggerTooltip && r.length) {
                    var u = e.coordSys.model,
                        c = a.makeKey(u),
                        h = t.map[c];
                    h || (h = t.map[c] = {
                        coordSysId: u.id,
                        coordSysIndex: u.componentIndex,
                        coordSysType: u.type,
                        coordSysMainType: u.mainType,
                        dataByAxis: []
                    }, t.list.push(h)), h.dataByAxis.push({
                        axisDim: o.dim,
                        axisIndex: s.componentIndex,
                        axisType: s.type,
                        axisId: s.id,
                        value: n,
                        valueLabelOpt: {
                            precision: l.get("label.precision"),
                            formatter: l.get("label.formatter")
                        },
                        seriesDataIndices: r.slice()
                    })
                }
            }

            function p(t, e, i) {
                var r = i.getZr(),
                    a = "axisPointerLastHighlights",
                    o = u(r)[a] || {},
                    l = u(r)[a] = {};
                s(t, (function(t, e) {
                    var i = t.axisPointerModel.option;
                    "show" === i.status && s(i.seriesDataIndices, (function(t) {
                        var e = t.seriesIndex + " | " + t.dataIndex;
                        l[e] = t
                    }))
                }));
                var c = [],
                    h = [];
                n.each(o, (function(t, e) {
                    !l[e] && h.push(t)
                })), n.each(l, (function(t, e) {
                    !o[e] && c.push(t)
                })), h.length && i.dispatchAction({
                    type: "downplay",
                    escapeConnect: !0,
                    batch: h
                }), c.length && i.dispatchAction({
                    type: "highlight",
                    escapeConnect: !0,
                    batch: c
                })
            }

            function g(t) {
                var e = t.axis.model,
                    i = {},
                    n = i.axisDim = t.axis.dim;
                return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex, i.axisName = i[n + "AxisName"] = e.name, i.axisId = i[n + "AxisId"] = e.id, i
            }

            function v(t) {
                return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
            }
            t.exports = function(t, e, i) {
                var r = t.currTrigger,
                    a = [t.x, t.y],
                    u = t,
                    h = t.dispatchAction || n.bind(i.dispatchAction, i),
                    m = e.getComponent("axisPointer").coordSysAxesInfo;
                if (m) {
                    v(a) && (a = o({
                        seriesIndex: u.seriesIndex,
                        dataIndex: u.dataIndex
                    }, e).point);
                    var y = v(a),
                        x = u.axesInfo,
                        _ = m.axesInfo,
                        b = "leave" === r || v(a),
                        w = {},
                        S = {},
                        C = {
                            list: [],
                            map: {}
                        },
                        M = {
                            showPointer: l(d, S),
                            showTooltip: l(f, C)
                        };
                    s(m.coordSysMap, (function(t, e) {
                        var i = y || t.containPoint(a);
                        s(m.coordSysAxesInfo[e], (function(t, e) {
                            var n = t.axis,
                                r = function(t, e) {
                                    for (var i = 0; i < (t || []).length; i++) {
                                        var n = t[i];
                                        if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n
                                    }
                                }(x, t);
                            if (!b && i && (!x || r)) {
                                var o = r && r.value;
                                null != o || y || (o = n.pointToData(a)), null != o && c(t, o, M, !1, w)
                            }
                        }))
                    }));
                    var T = {};
                    return s(_, (function(t, e) {
                            var i = t.linkGroup;
                            i && !S[e] && s(i.axesInfo, (function(e, n) {
                                var r = S[n];
                                if (e !== t && r) {
                                    var a = r.value;
                                    i.mapper && (a = t.axis.scale.parse(i.mapper(a, g(e), g(t)))), T[t.key] = a
                                }
                            }))
                        })), s(T, (function(t, e) {
                            c(_[e], t, M, !0, w)
                        })),
                        function(t, e, i) {
                            var n = i.axesInfo = [];
                            s(e, (function(e, i) {
                                var r = e.axisPointerModel.option,
                                    a = t[i];
                                a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && n.push({
                                    axisDim: e.axis.dim,
                                    axisIndex: e.axis.model.componentIndex,
                                    value: r.value
                                })
                            }))
                        }(S, _, w),
                        function(t, e, i, n) {
                            if (!v(e) && t.list.length) {
                                var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
                                n({
                                    type: "showTip",
                                    escapeConnect: !0,
                                    x: e[0],
                                    y: e[1],
                                    tooltipOption: i.tooltipOption,
                                    position: i.position,
                                    dataIndexInside: r.dataIndexInside,
                                    dataIndex: r.dataIndex,
                                    seriesIndex: r.seriesIndex,
                                    dataByCoordSys: t.list
                                })
                            } else n({
                                type: "hideTip"
                            })
                        }(C, a, t, h), p(_, h, i), w
                }
            }
        },
        "177a": function(t, e, i) {
            var n = i("3caf").extend({
                type: "circle",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0
                },
                buildPath: function(t, e, i) {
                    i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
                }
            });
            t.exports = n
        },
        1829: function(t, e) {
            var i = Math.log(2);

            function n(t, e, r, a, o, s) {
                var l = a + "-" + o,
                    u = t.length;
                if (s.hasOwnProperty(l)) return s[l];
                if (1 === e) {
                    var c = Math.round(Math.log((1 << u) - 1 & ~o) / i);
                    return t[r][c]
                }
                for (var h = a | 1 << r, d = r + 1; a & 1 << d;) d++;
                for (var f = 0, p = 0, g = 0; p < u; p++) {
                    var v = 1 << p;
                    v & o || (f += (g % 2 ? -1 : 1) * t[r][p] * n(t, e - 1, d, h, o | v, s), g++)
                }
                return s[l] = f, f
            }
            e.buildTransformer = function(t, e) {
                var i = [
                        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
                        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
                        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
                        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
                        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
                        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
                        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
                        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
                    ],
                    r = {},
                    a = n(i, 8, 0, 0, 0, r);
                if (0 !== a) {
                    for (var o = [], s = 0; s < 8; s++)
                        for (var l = 0; l < 8; l++) null == o[l] && (o[l] = 0), o[l] += ((s + l) % 2 ? -1 : 1) * n(i, 7, 0 === s ? 1 : 0, 1 << s, 1 << l, r) / a * e[s];
                    return function(t, e, i) {
                        var n = e * o[6] + i * o[7] + 1;
                        t[0] = (e * o[0] + i * o[1] + o[2]) / n, t[1] = (e * o[3] + i * o[4] + o[5]) / n
                    }
                }
            }
        },
        "18a6": function(t, e, i) {
            var n = i("31c0").retrieveRawValue,
                r = i("542f"),
                a = r.getTooltipMarker,
                o = r.formatTpl,
                s = i("0127").getTooltipRenderMode,
                l = /\{@(.+?)\}/g,
                u = {
                    getDataParams: function(t, e) {
                        var i = this.getData(e),
                            n = this.getRawValue(t, e),
                            r = i.getRawIndex(t),
                            o = i.getName(t),
                            l = i.getRawDataItem(t),
                            u = i.getItemVisual(t, "color"),
                            c = i.getItemVisual(t, "borderColor"),
                            h = this.ecModel.getComponent("tooltip"),
                            d = h && h.get("renderMode"),
                            f = s(d),
                            p = this.mainType,
                            g = "series" === p,
                            v = i.userOutput;
                        return {
                            componentType: p,
                            componentSubType: this.subType,
                            componentIndex: this.componentIndex,
                            seriesType: g ? this.subType : null,
                            seriesIndex: this.seriesIndex,
                            seriesId: g ? this.id : null,
                            seriesName: g ? this.name : null,
                            name: o,
                            dataIndex: r,
                            data: l,
                            dataType: e,
                            value: n,
                            color: u,
                            borderColor: c,
                            dimensionNames: v ? v.dimensionNames : null,
                            encode: v ? v.encode : null,
                            marker: a({
                                color: u,
                                renderMode: f
                            }),
                            $vars: ["seriesName", "name", "value"]
                        }
                    },
                    getFormattedLabel: function(t, e, i, r, a) {
                        e = e || "normal";
                        var s = this.getData(i),
                            u = s.getItemModel(t),
                            c = this.getDataParams(t, i);
                        null != r && c.value instanceof Array && (c.value = c.value[r]);
                        var h = u.get("normal" === e ? [a || "label", "formatter"] : [e, a || "label", "formatter"]);
                        return "function" == typeof h ? (c.status = e, c.dimensionIndex = r, h(c)) : "string" == typeof h ? o(h, c).replace(l, (function(e, i) {
                            var r = i.length;
                            return "[" === i.charAt(0) && "]" === i.charAt(r - 1) && (i = +i.slice(1, r - 1)), n(s, t, i)
                        })) : void 0
                    },
                    getRawValue: function(t, e) {
                        return n(this.getData(e), t)
                    },
                    formatTooltip: function() {}
                };
            t.exports = u
        },
        "18c4": function(t, e, i) {
            var n = i("ebea")([
                    ["fill", "color"],
                    ["stroke", "borderColor"],
                    ["lineWidth", "borderWidth"],
                    ["opacity"],
                    ["shadowBlur"],
                    ["shadowOffsetX"],
                    ["shadowOffsetY"],
                    ["shadowColor"],
                    ["textPosition"],
                    ["textAlign"]
                ]),
                r = {
                    getItemStyle: function(t, e) {
                        var i = n(this, t, e),
                            r = this.getBorderLineDash();
                        return r && (i.lineDash = r), i
                    },
                    getBorderLineDash: function() {
                        var t = this.get("borderType");
                        return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
                    }
                };
            t.exports = r
        },
        1953: function(t, e, i) {
            var n = i("b2de"),
                r = i("81e8"),
                a = i("517a"),
                o = i("3b07"),
                s = i("83e1"),
                l = ["axisLine", "axisTickLabel", "axisName"],
                u = ["splitArea", "splitLine", "minorSplitLine"],
                c = o.extend({
                    type: "cartesianAxis",
                    axisPointerClass: "CartesianAxisPointer",
                    render: function(t, e, i, o) {
                        this.group.removeAll();
                        var h = this._axisGroup;
                        if (this._axisGroup = new r.Group, this.group.add(this._axisGroup), t.get("show")) {
                            var d = t.getCoordSysModel(),
                                f = s.layout(d, t),
                                p = new a(t, f);
                            n.each(l, p.add, p), this._axisGroup.add(p.getGroup()), n.each(u, (function(e) {
                                t.get(e + ".show") && this["_" + e](t, d)
                            }), this), r.groupTransition(h, this._axisGroup, t), c.superCall(this, "render", t, e, i, o)
                        }
                    },
                    remove: function() {
                        this._splitAreaColors = null
                    },
                    _splitLine: function(t, e) {
                        var i = t.axis;
                        if (!i.scale.isBlank()) {
                            var a = t.getModel("splitLine"),
                                o = a.getModel("lineStyle"),
                                s = o.get("color");
                            s = n.isArray(s) ? s : [s];
                            for (var l = e.coordinateSystem.getRect(), u = i.isHorizontal(), c = 0, h = i.getTicksCoords({
                                    tickModel: a
                                }), d = [], f = [], p = o.getLineStyle(), g = 0; g < h.length; g++) {
                                var v = i.toGlobalCoord(h[g].coord);
                                u ? (d[0] = v, d[1] = l.y, f[0] = v, f[1] = l.y + l.height) : (d[0] = l.x, d[1] = v, f[0] = l.x + l.width, f[1] = v);
                                var m = c++ % s.length,
                                    y = h[g].tickValue;
                                this._axisGroup.add(new r.Line({
                                    anid: null != y ? "line_" + h[g].tickValue : null,
                                    subPixelOptimize: !0,
                                    shape: {
                                        x1: d[0],
                                        y1: d[1],
                                        x2: f[0],
                                        y2: f[1]
                                    },
                                    style: n.defaults({
                                        stroke: s[m]
                                    }, p),
                                    silent: !0
                                }))
                            }
                        }
                    },
                    _minorSplitLine: function(t, e) {
                        var i = t.axis,
                            n = t.getModel("minorSplitLine").getModel("lineStyle"),
                            a = e.coordinateSystem.getRect(),
                            o = i.isHorizontal(),
                            s = i.getMinorTicksCoords();
                        if (s.length)
                            for (var l = [], u = [], c = n.getLineStyle(), h = 0; h < s.length; h++)
                                for (var d = 0; d < s[h].length; d++) {
                                    var f = i.toGlobalCoord(s[h][d].coord);
                                    o ? (l[0] = f, l[1] = a.y, u[0] = f, u[1] = a.y + a.height) : (l[0] = a.x, l[1] = f, u[0] = a.x + a.width, u[1] = f), this._axisGroup.add(new r.Line({
                                        anid: "minor_line_" + s[h][d].tickValue,
                                        subPixelOptimize: !0,
                                        shape: {
                                            x1: l[0],
                                            y1: l[1],
                                            x2: u[0],
                                            y2: u[1]
                                        },
                                        style: c,
                                        silent: !0
                                    }))
                                }
                    },
                    _splitArea: function(t, e) {
                        var i = t.axis;
                        if (!i.scale.isBlank()) {
                            var a = t.getModel("splitArea"),
                                o = a.getModel("areaStyle"),
                                s = o.get("color"),
                                l = e.coordinateSystem.getRect(),
                                u = i.getTicksCoords({
                                    tickModel: a,
                                    clamp: !0
                                });
                            if (u.length) {
                                var c = s.length,
                                    h = this._splitAreaColors,
                                    d = n.createHashMap(),
                                    f = 0;
                                if (h)
                                    for (var p = 0; p < u.length; p++) {
                                        var g = h.get(u[p].tickValue);
                                        if (null != g) {
                                            f = (g + (c - 1) * p) % c;
                                            break
                                        }
                                    }
                                var v = i.toGlobalCoord(u[0].coord),
                                    m = o.getAreaStyle();
                                for (s = n.isArray(s) ? s : [s], p = 1; p < u.length; p++) {
                                    var y, x, _, b, w = i.toGlobalCoord(u[p].coord);
                                    i.isHorizontal() ? (y = v, x = l.y, _ = w - y, b = l.height, v = y + _) : (y = l.x, x = v, _ = l.width, v = x + (b = w - x));
                                    var S = u[p - 1].tickValue;
                                    null != S && d.set(S, f), this._axisGroup.add(new r.Rect({
                                        anid: null != S ? "area_" + S : null,
                                        shape: {
                                            x: y,
                                            y: x,
                                            width: _,
                                            height: b
                                        },
                                        style: n.defaults({
                                            fill: s[f]
                                        }, m),
                                        silent: !0
                                    })), f = (f + 1) % c
                                }
                                this._splitAreaColors = d
                            }
                        }
                    }
                });
            c.extend({
                type: "xAxis"
            }), c.extend({
                type: "yAxis"
            })
        },
        1976: function(t, e, i) {
            var n = i("e2dc"),
                r = n.round;

            function a(t) {
                return n.getPrecisionSafe(t) + 2
            }

            function o(t, e, i) {
                t[e] = Math.max(Math.min(t[e], i[1]), i[0])
            }

            function s(t, e) {
                !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), o(t, 0, e), o(t, 1, e), t[0] > t[1] && (t[0] = t[1])
            }
            e.intervalScaleNiceTicks = function(t, e, i, o) {
                var l = {},
                    u = t[1] - t[0],
                    c = l.interval = n.nice(u / e, !0);
                null != i && c < i && (c = l.interval = i), null != o && c > o && (c = l.interval = o);
                var h = l.intervalPrecision = a(c);
                return s(l.niceTickExtent = [r(Math.ceil(t[0] / c) * c, h), r(Math.floor(t[1] / c) * c, h)], t), l
            }, e.getIntervalPrecision = a, e.fixExtent = s
        },
        "1ed3": function(t, e, i) {
            var n = i("31c0").retrieveRawValue;
            e.getDefaultLabel = function(t, e) {
                var i = t.mapDimension("defaultedLabel", !0),
                    r = i.length;
                if (1 === r) return n(t, e, i[0]);
                if (r) {
                    for (var a = [], o = 0; o < i.length; o++) {
                        var s = n(t, e, i[o]);
                        a.push(s)
                    }
                    return a.join(" ")
                }
            }
        },
        "1f1f": function(t, e, i) {
            var n = i("b2de"),
                r = i("a16b"),
                a = i("e2dc").parsePercent,
                o = i("542f"),
                s = n.each,
                l = ["left", "right", "top", "bottom", "width", "height"],
                u = [
                    ["width", "left", "right"],
                    ["height", "top", "bottom"]
                ];

            function c(t, e, i, n, r) {
                var a = 0,
                    o = 0;
                null == n && (n = 1 / 0), null == r && (r = 1 / 0);
                var s = 0;
                e.eachChild((function(l, u) {
                    var c, h, d = l.position,
                        f = l.getBoundingRect(),
                        p = e.childAt(u + 1),
                        g = p && p.getBoundingRect();
                    if ("horizontal" === t) {
                        var v = f.width + (g ? -g.x + f.x : 0);
                        (c = a + v) > n || l.newline ? (a = 0, c = v, o += s + i, s = f.height) : s = Math.max(s, f.height)
                    } else {
                        var m = f.height + (g ? -g.y + f.y : 0);
                        (h = o + m) > r || l.newline ? (a += s + i, o = 0, h = m, s = f.width) : s = Math.max(s, f.width)
                    }
                    l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = c + i : o = h + i)
                }))
            }
            var h = c,
                d = n.curry(c, "vertical"),
                f = n.curry(c, "horizontal");

            function p(t, e, i) {
                i = o.normalizeCssArray(i || 0);
                var n = e.width,
                    s = e.height,
                    l = a(t.left, n),
                    u = a(t.top, s),
                    c = a(t.right, n),
                    h = a(t.bottom, s),
                    d = a(t.width, n),
                    f = a(t.height, s),
                    p = i[2] + i[0],
                    g = i[1] + i[3],
                    v = t.aspect;
                switch (isNaN(d) && (d = n - c - g - l), isNaN(f) && (f = s - h - p - u), null != v && (isNaN(d) && isNaN(f) && (v > n / s ? d = .8 * n : f = .8 * s), isNaN(d) && (d = v * f), isNaN(f) && (f = d / v)), isNaN(l) && (l = n - c - d - g), isNaN(u) && (u = s - h - f - p), t.left || t.right) {
                    case "center":
                        l = n / 2 - d / 2 - i[3];
                        break;
                    case "right":
                        l = n - d - g
                }
                switch (t.top || t.bottom) {
                    case "middle":
                    case "center":
                        u = s / 2 - f / 2 - i[0];
                        break;
                    case "bottom":
                        u = s - f - p
                }
                l = l || 0, u = u || 0, isNaN(d) && (d = n - g - l - (c || 0)), isNaN(f) && (f = s - p - u - (h || 0));
                var m = new r(l + i[3], u + i[0], d, f);
                return m.margin = i, m
            }

            function g(t, e) {
                return e && t && s(l, (function(i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                })), t
            }
            e.LOCATION_PARAMS = l, e.HV_NAMES = u, e.box = h, e.vbox = d, e.hbox = f, e.getAvailableSize = function(t, e, i) {
                var n = e.width,
                    r = e.height,
                    s = a(t.x, n),
                    l = a(t.y, r),
                    u = a(t.x2, n),
                    c = a(t.y2, r);
                return (isNaN(s) || isNaN(parseFloat(t.x))) && (s = 0), (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = n), (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0), (isNaN(c) || isNaN(parseFloat(t.y2))) && (c = r), i = o.normalizeCssArray(i || 0), {
                    width: Math.max(u - s - i[1] - i[3], 0),
                    height: Math.max(c - l - i[0] - i[2], 0)
                }
            }, e.getLayoutRect = p, e.positionElement = function(t, e, i, a, o) {
                var s = !o || !o.hv || o.hv[0],
                    l = !o || !o.hv || o.hv[1],
                    u = o && o.boundingMode || "all";
                if (s || l) {
                    var c;
                    if ("raw" === u) c = "group" === t.type ? new r(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
                    else if (c = t.getBoundingRect(), t.needLocalTransform()) {
                        var h = t.getLocalTransform();
                        (c = c.clone()).applyTransform(h)
                    }
                    e = p(n.defaults({
                        width: c.width,
                        height: c.height
                    }, e), i, a);
                    var d = t.position,
                        f = s ? e.x - c.x : 0,
                        g = l ? e.y - c.y : 0;
                    t.attr("position", "raw" === u ? [f, g] : [d[0] + f, d[1] + g])
                }
            }, e.sizeCalculable = function(t, e) {
                return null != t[u[e][0]] || null != t[u[e][1]] && null != t[u[e][2]]
            }, e.mergeLayoutParam = function(t, e, i) {
                !n.isObject(i) && (i = {});
                var r = i.ignoreSize;
                !n.isArray(r) && (r = [r, r]);
                var a = l(u[0], 0),
                    o = l(u[1], 1);

                function l(i, n) {
                    var a = {},
                        o = 0,
                        l = {},
                        u = 0;
                    if (s(i, (function(e) {
                            l[e] = t[e]
                        })), s(i, (function(t) {
                            c(e, t) && (a[t] = l[t] = e[t]), h(a, t) && o++, h(l, t) && u++
                        })), r[n]) return h(e, i[1]) ? l[i[2]] = null : h(e, i[2]) && (l[i[1]] = null), l;
                    if (2 !== u && o) {
                        if (o >= 2) return a;
                        for (var d = 0; d < i.length; d++) {
                            var f = i[d];
                            if (!c(a, f) && c(t, f)) {
                                a[f] = t[f];
                                break
                            }
                        }
                        return a
                    }
                    return l
                }

                function c(t, e) {
                    return t.hasOwnProperty(e)
                }

                function h(t, e) {
                    return null != t[e] && "auto" !== t[e]
                }

                function d(t, e, i) {
                    s(t, (function(t) {
                        e[t] = i[t]
                    }))
                }
                d(u[0], t, a), d(u[1], t, o)
            }, e.getLayoutParams = function(t) {
                return g({}, t)
            }, e.copyLayoutParams = g
        },
        "1f2e": function(t, e) {
            var i = 1;
            "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
            var n = i;
            e.debugMode = 0, e.devicePixelRatio = n
        },
        "20fe": function(t, e, i) {
            var n = i("b2de").createHashMap;
            t.exports = function(t) {
                return {
                    getTargetSeries: function(e) {
                        var i = {},
                            r = n();
                        return e.eachSeriesByType(t, (function(t) {
                            t.__paletteScope = i, r.set(t.uid, t)
                        })), r
                    },
                    reset: function(t, e) {
                        var i = t.getRawData(),
                            n = {},
                            r = t.getData();
                        r.each((function(t) {
                            var e = r.getRawIndex(t);
                            n[e] = t
                        })), i.each((function(e) {
                            var a, o = n[e],
                                s = null != o && r.getItemVisual(o, "color", !0),
                                l = null != o && r.getItemVisual(o, "borderColor", !0);
                            if (s && l || (a = i.getItemModel(e)), !s) {
                                var u = a.get("itemStyle.color") || t.getColorFromPalette(i.getName(e) || e + "", t.__paletteScope, i.count());
                                null != o && r.setItemVisual(o, "color", u)
                            }
                            if (!l) {
                                var c = a.get("itemStyle.borderColor");
                                null != o && r.setItemVisual(o, "borderColor", c)
                            }
                        }))
                    }
                }
            }
        },
        "22a0": function(t, e, i) {
            var n = i("e27b"),
                r = i("df91").applyTransform,
                a = n.CMD,
                o = [
                    [],
                    [],
                    []
                ],
                s = Math.sqrt,
                l = Math.atan2;
            t.exports = function(t, e) {
                var i, n, u, c, h, d = t.data,
                    f = a.M,
                    p = a.C,
                    g = a.L,
                    v = a.R,
                    m = a.A,
                    y = a.Q;
                for (u = 0, c = 0; u < d.length;) {
                    switch (i = d[u++], c = u, n = 0, i) {
                        case f:
                        case g:
                            n = 1;
                            break;
                        case p:
                            n = 3;
                            break;
                        case y:
                            n = 2;
                            break;
                        case m:
                            var x = e[4],
                                _ = e[5],
                                b = s(e[0] * e[0] + e[1] * e[1]),
                                w = s(e[2] * e[2] + e[3] * e[3]),
                                S = l(-e[1] / w, e[0] / b);
                            d[u] *= b, d[u++] += x, d[u] *= w, d[u++] += _, d[u++] *= b, d[u++] *= w, d[u++] += S, d[u++] += S, c = u += 2;
                            break;
                        case v:
                            C[0] = d[u++], C[1] = d[u++], r(C, C, e), d[c++] = C[0], d[c++] = C[1], C[0] += d[u++], C[1] += d[u++], r(C, C, e), d[c++] = C[0], d[c++] = C[1]
                    }
                    for (h = 0; h < n; h++) {
                        var C = o[h];
                        C[0] = d[u++], C[1] = d[u++], r(C, C, e), d[c++] = C[0], d[c++] = C[1]
                    }
                }
            }
        },
        "243b": function(t, e, i) {
            var n = i("3caf"),
                r = i("d402"),
                a = n.extend({
                    type: "polygon",
                    shape: {
                        points: null,
                        smooth: !1,
                        smoothConstraint: null
                    },
                    buildPath: function(t, e) {
                        r.buildPath(t, e, !0)
                    }
                });
            t.exports = a
        },
        "24e7": function(t, e, i) {
            var n = i("df91").distance;

            function r(t, e, i, n, r, a, o) {
                var s = .5 * (i - t),
                    l = .5 * (n - e);
                return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
            }
            t.exports = function(t, e) {
                for (var i = t.length, a = [], o = 0, s = 1; s < i; s++) o += n(t[s - 1], t[s]);
                var l = o / 2;
                for (l = l < i ? i : l, s = 0; s < l; s++) {
                    var u, c, h, d = s / (l - 1) * (e ? i : i - 1),
                        f = Math.floor(d),
                        p = d - f,
                        g = t[f % i];
                    e ? (u = t[(f - 1 + i) % i], c = t[(f + 1) % i], h = t[(f + 2) % i]) : (u = t[0 === f ? f : f - 1], c = t[f > i - 2 ? i - 1 : f + 1], h = t[f > i - 3 ? i - 1 : f + 2]);
                    var v = p * p,
                        m = p * v;
                    a.push([r(u[0], g[0], c[0], h[0], p, v, m), r(u[1], g[1], c[1], h[1], p, v, m)])
                }
                return a
            }
        },
        2541: function(t, e, i) {
            var n = i("b2de"),
                r = n.retrieve2,
                a = n.retrieve3,
                o = n.each,
                s = n.normalizeCssArray,
                l = n.isString,
                u = n.isObject,
                c = i("4592"),
                h = i("8cc0"),
                d = i("0dfd"),
                f = i("e843"),
                p = i("3550"),
                g = p.ContextCachedBy,
                v = p.WILL_BE_RESTORED,
                m = c.DEFAULT_FONT,
                y = {
                    left: 1,
                    right: 1,
                    center: 1
                },
                x = {
                    top: 1,
                    bottom: 1,
                    middle: 1
                },
                _ = [
                    ["textShadowBlur", "shadowBlur", 0],
                    ["textShadowOffsetX", "shadowOffsetX", 0],
                    ["textShadowOffsetY", "shadowOffsetY", 0],
                    ["textShadowColor", "shadowColor", "transparent"]
                ],
                b = {},
                w = {};

            function S(t) {
                if (t) {
                    t.font = c.makeFont(t);
                    var e = t.textAlign;
                    "middle" === e && (e = "center"), t.textAlign = null == e || y[e] ? e : "left";
                    var i = t.textVerticalAlign || t.textBaseline;
                    "center" === i && (i = "middle"), t.textVerticalAlign = null == i || x[i] ? i : "top", t.textPadding && (t.textPadding = s(t.textPadding))
                }
            }

            function C(t, e, i, n, r) {
                if (i && e.textRotation) {
                    var a = e.textOrigin;
                    "center" === a ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r)
                }
            }

            function M(t, e, i, n, o, s, l, u) {
                var c = n.rich[i.styleName] || {};
                c.text = i.text;
                var h = i.textVerticalAlign,
                    d = s + o / 2;
                "top" === h ? d = s + i.height / 2 : "bottom" === h && (d = s + o - i.height / 2), !i.isLineHolder && T(c) && I(t, e, c, "right" === u ? l - i.width : "center" === u ? l - i.width / 2 : l, d - i.height / 2, i.width, i.height);
                var f = i.textPadding;
                f && (l = E(l, u, f), d -= i.height / 2 - f[2] - i.textHeight / 2), k(e, "shadowBlur", a(c.textShadowBlur, n.textShadowBlur, 0)), k(e, "shadowColor", c.textShadowColor || n.textShadowColor || "transparent"), k(e, "shadowOffsetX", a(c.textShadowOffsetX, n.textShadowOffsetX, 0)), k(e, "shadowOffsetY", a(c.textShadowOffsetY, n.textShadowOffsetY, 0)), k(e, "textAlign", u), k(e, "textBaseline", "middle"), k(e, "font", i.font || m);
                var p = P(c.textStroke || n.textStroke, v),
                    g = O(c.textFill || n.textFill),
                    v = r(c.textStrokeWidth, n.textStrokeWidth);
                p && (k(e, "lineWidth", v), k(e, "strokeStyle", p), e.strokeText(i.text, l, d)), g && (k(e, "fillStyle", g), e.fillText(i.text, l, d))
            }

            function T(t) {
                return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)
            }

            function I(t, e, i, n, r, a, o) {
                var s = i.textBackgroundColor,
                    c = i.textBorderWidth,
                    f = i.textBorderColor,
                    p = l(s);
                if (k(e, "shadowBlur", i.textBoxShadowBlur || 0), k(e, "shadowColor", i.textBoxShadowColor || "transparent"), k(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), k(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), p || c && f) {
                    e.beginPath();
                    var g = i.textBorderRadius;
                    g ? h.buildPath(e, {
                        x: n,
                        y: r,
                        width: a,
                        height: o,
                        r: g
                    }) : e.rect(n, r, a, o), e.closePath()
                }
                if (p)
                    if (k(e, "fillStyle", s), null != i.fillOpacity) {
                        var v = e.globalAlpha;
                        e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = v
                    } else e.fill();
                else if (u(s)) {
                    var m = s.image;
                    (m = d.createOrUpdateImage(m, null, t, A, s)) && d.isImageReady(m) && e.drawImage(m, n, r, a, o)
                }
                c && f && (k(e, "lineWidth", c), k(e, "strokeStyle", f), null != i.strokeOpacity ? (v = e.globalAlpha, e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = v) : e.stroke())
            }

            function A(t, e) {
                e.image = t
            }

            function D(t, e, i, n) {
                var r = i.x || 0,
                    a = i.y || 0,
                    o = i.textAlign,
                    s = i.textVerticalAlign;
                if (n) {
                    var l = i.textPosition;
                    if (l instanceof Array) r = n.x + L(l[0], n.width), a = n.y + L(l[1], n.height);
                    else {
                        var u = e && e.calculateTextPosition ? e.calculateTextPosition(b, i, n) : c.calculateTextPosition(b, i, n);
                        r = u.x, a = u.y, o = o || u.textAlign, s = s || u.textVerticalAlign
                    }
                    var h = i.textOffset;
                    h && (r += h[0], a += h[1])
                }
                return (t = t || {}).baseX = r, t.baseY = a, t.textAlign = o, t.textVerticalAlign = s, t
            }

            function k(t, e, i) {
                return t[e] = f(t, e, i), t[e]
            }

            function P(t, e) {
                return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
            }

            function O(t) {
                return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
            }

            function L(t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }

            function E(t, e, i) {
                return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
            }
            e.normalizeTextStyle = function(t) {
                return S(t), o(t.rich, S), t
            }, e.renderText = function(t, e, i, n, r, a) {
                n.rich ? function(t, e, i, n, r, a) {
                    a !== v && (e.__attrCachedBy = g.NONE);
                    var o = t.__textCotentBlock;
                    o && !t.__dirtyText || (o = t.__textCotentBlock = c.parseRichText(i, n)),
                        function(t, e, i, n, r) {
                            var a = i.width,
                                o = i.outerWidth,
                                s = i.outerHeight,
                                l = n.textPadding,
                                u = D(w, t, n, r),
                                h = u.baseX,
                                d = u.baseY,
                                f = u.textAlign,
                                p = u.textVerticalAlign;
                            C(e, n, r, h, d);
                            var g = c.adjustTextX(h, o, f),
                                v = c.adjustTextY(d, s, p),
                                m = g,
                                y = v;
                            l && (m += l[3], y += l[0]);
                            var x = m + a;
                            T(n) && I(t, e, n, g, v, o, s);
                            for (var _ = 0; _ < i.lines.length; _++) {
                                for (var b, S = i.lines[_], A = S.tokens, k = A.length, P = S.lineHeight, O = S.width, L = 0, E = m, R = x, N = k - 1; L < k && (!(b = A[L]).textAlign || "left" === b.textAlign);) M(t, e, b, n, P, y, E, "left"), O -= b.width, E += b.width, L++;
                                for (; N >= 0 && "right" === (b = A[N]).textAlign;) M(t, e, b, n, P, y, R, "right"), O -= b.width, R -= b.width, N--;
                                for (E += (a - (E - m) - (x - R) - O) / 2; L <= N;) b = A[L], M(t, e, b, n, P, y, E + b.width / 2, "center"), E += b.width, L++;
                                y += P
                            }
                        }(t, e, o, n, r)
                }(t, e, i, n, r, a) : function(t, e, i, n, r, a) {
                    "use strict";
                    var o, s = T(n),
                        l = !1,
                        u = e.__attrCachedBy === g.PLAIN_TEXT;
                    a !== v ? (a && (o = a.style, l = !s && u && o), e.__attrCachedBy = s ? g.NONE : g.PLAIN_TEXT) : u && (e.__attrCachedBy = g.NONE);
                    var h = n.font || m;
                    l && h === (o.font || m) || (e.font = h);
                    var d = t.__computedFont;
                    t.__styleFont !== h && (t.__styleFont = h, d = t.__computedFont = e.font);
                    var p = n.textPadding,
                        y = n.textLineHeight,
                        x = t.__textCotentBlock;
                    x && !t.__dirtyText || (x = t.__textCotentBlock = c.parsePlainText(i, d, p, y, n.truncate));
                    var b = x.outerHeight,
                        S = x.lines,
                        M = x.lineHeight,
                        A = D(w, t, n, r),
                        k = A.baseX,
                        L = A.baseY,
                        R = A.textAlign || "left",
                        N = A.textVerticalAlign;
                    C(e, n, r, k, L);
                    var B = c.adjustTextY(L, b, N),
                        z = k,
                        F = B;
                    if (s || p) {
                        var V = c.getWidth(i, d);
                        p && (V += p[1] + p[3]);
                        var H = c.adjustTextX(k, V, R);
                        s && I(t, e, n, H, B, V, b), p && (z = E(k, R, p), F += p[0])
                    }
                    e.textAlign = R, e.textBaseline = "middle", e.globalAlpha = n.opacity || 1;
                    for (var W = 0; W < _.length; W++) {
                        var G = _[W],
                            U = G[0],
                            Y = G[1],
                            j = n[U];
                        l && j === o[U] || (e[Y] = f(e, Y, j || G[2]))
                    }
                    F += M / 2;
                    var X = n.textStrokeWidth,
                        q = l ? o.textStrokeWidth : null,
                        Z = !l || X !== q,
                        $ = !l || Z || n.textStroke !== o.textStroke,
                        K = P(n.textStroke, X),
                        Q = O(n.textFill);
                    if (K && (Z && (e.lineWidth = X), $ && (e.strokeStyle = K)), Q && (l && n.textFill === o.textFill || (e.fillStyle = Q)), 1 === S.length) K && e.strokeText(S[0], z, F), Q && e.fillText(S[0], z, F);
                    else
                        for (W = 0; W < S.length; W++) K && e.strokeText(S[W], z, F), Q && e.fillText(S[W], z, F), F += M
                }(t, e, i, n, r, a)
            }, e.getBoxPosition = D, e.getStroke = P, e.getFill = O, e.parsePercent = L, e.needDrawText = function(t, e) {
                return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
            }
        },
        "25a2": function(t, e) {
            t.exports = function(t) {
                var e = t.findComponents({
                    mainType: "legend"
                });
                e && e.length && t.filterSeries((function(t) {
                    for (var i = 0; i < e.length; i++)
                        if (!e[i].isSelected(t.name)) return !1;
                    return !0
                }))
            }
        },
        "25cc": function(t, e, i) {
            var n = i("b2de"),
                r = n.each,
                a = n.createHashMap,
                o = ((n.assert, i("b1e6")).__DEV__, a(["tooltip", "label", "itemName", "itemId", "seriesName"]));

            function s(t, e) {
                return t.hasOwnProperty(e) || (t[e] = []), t[e]
            }
            e.OTHER_DIMENSIONS = o, e.summarizeDimensions = function(t) {
                var e = {},
                    i = e.encode = {},
                    n = a(),
                    l = [],
                    u = [],
                    c = e.userOutput = {
                        dimensionNames: t.dimensions.slice(),
                        encode: {}
                    };
                r(t.dimensions, (function(e) {
                    var r = t.getDimensionInfo(e),
                        a = r.coordDim;
                    if (a) {
                        var h = r.coordDimIndex;
                        s(i, a)[h] = e, r.isExtraCoord || (n.set(a, 1), function(t) {
                            return !("ordinal" === t || "time" === t)
                        }(r.type) && (l[0] = e), s(c.encode, a)[h] = r.index), r.defaultTooltip && u.push(e)
                    }
                    o.each((function(t, e) {
                        var n = s(i, e),
                            a = r.otherDims[e];
                        null != a && !1 !== a && (n[a] = r.name)
                    }))
                }));
                var h = [],
                    d = {};
                n.each((function(t, e) {
                    var n = i[e];
                    d[e] = n[0], h = h.concat(n)
                })), e.dataDimsOnCoord = h, e.encodeFirstDimNotExtra = d;
                var f = i.label;
                f && f.length && (l = f.slice());
                var p = i.tooltip;
                return p && p.length ? u = p.slice() : u.length || (u = l.slice()), i.defaultedLabel = l, i.defaultedTooltip = u, e
            }, e.getDimensionTypeByAxis = function(t) {
                return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
            }
        },
        2641: function(t, e, i) {
            "use strict";
            var n = i("48d1");
            i.n(n).a
        },
        2882: function(t, e, i) {
            var n = i("b37e"),
                r = i("3efa"),
                a = i("f101"),
                o = i("5771"),
                s = i("b2de"),
                l = function(t) {
                    a.call(this, t), r.call(this, t), o.call(this, t), this.id = t.id || n()
                };
            l.prototype = {
                type: "element",
                name: "",
                __zr: null,
                ignore: !1,
                clipPath: null,
                isGroup: !1,
                drift: function(t, e) {
                    switch (this.draggable) {
                        case "horizontal":
                            e = 0;
                            break;
                        case "vertical":
                            t = 0
                    }
                    var i = this.transform;
                    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
                },
                beforeUpdate: function() {},
                afterUpdate: function() {},
                update: function() {
                    this.updateTransform()
                },
                traverse: function(t, e) {},
                attrKV: function(t, e) {
                    if ("position" === t || "scale" === t || "origin" === t) {
                        if (e) {
                            var i = this[t];
                            i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                        }
                    } else this[t] = e
                },
                hide: function() {
                    this.ignore = !0, this.__zr && this.__zr.refresh()
                },
                show: function() {
                    this.ignore = !1, this.__zr && this.__zr.refresh()
                },
                attr: function(t, e) {
                    if ("string" == typeof t) this.attrKV(t, e);
                    else if (s.isObject(t))
                        for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                    return this.dirty(!1), this
                },
                setClipPath: function(t) {
                    var e = this.__zr;
                    e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
                },
                removeClipPath: function() {
                    var t = this.clipPath;
                    t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
                },
                addSelfToZr: function(t) {
                    this.__zr = t;
                    var e = this.animators;
                    if (e)
                        for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
                    this.clipPath && this.clipPath.addSelfToZr(t)
                },
                removeSelfFromZr: function(t) {
                    this.__zr = null;
                    var e = this.animators;
                    if (e)
                        for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
                    this.clipPath && this.clipPath.removeSelfFromZr(t)
                }
            }, s.mixin(l, o), s.mixin(l, a), s.mixin(l, r);
            var u = l;
            t.exports = u
        },
        2960: function(t, e, i) {
            var n = i("b2de"),
                r = i("f9df");

            function a(t, e, i) {
                for (var n = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
                    var s = t.charCodeAt(o) - 64,
                        l = t.charCodeAt(o + 1) - 64;
                    s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), r = s += r, a = l += a, n.push([s / i, l / i])
                }
                return n
            }
            t.exports = function(t) {
                return function(t) {
                    if (!t.UTF8Encoding) return t;
                    var e = t.UTF8Scale;
                    null == e && (e = 1024);
                    for (var i = t.features, n = 0; n < i.length; n++)
                        for (var r = i[n].geometry, o = r.coordinates, s = r.encodeOffsets, l = 0; l < o.length; l++) {
                            var u = o[l];
                            if ("Polygon" === r.type) o[l] = a(u, s[l], e);
                            else if ("MultiPolygon" === r.type)
                                for (var c = 0; c < u.length; c++) {
                                    var h = u[c];
                                    u[c] = a(h, s[l][c], e)
                                }
                        }
                    t.UTF8Encoding = !1
                }(t), n.map(n.filter(t.features, (function(t) {
                    return t.geometry && t.properties && t.geometry.coordinates.length > 0
                })), (function(t) {
                    var e = t.properties,
                        i = t.geometry,
                        a = i.coordinates,
                        o = [];
                    "Polygon" === i.type && o.push({
                        type: "polygon",
                        exterior: a[0],
                        interiors: a.slice(1)
                    }), "MultiPolygon" === i.type && n.each(a, (function(t) {
                        t[0] && o.push({
                            type: "polygon",
                            exterior: t[0],
                            interiors: t.slice(1)
                        })
                    }));
                    var s = new r(e.name, o, e.cp);
                    return s.properties = e, s
                }))
            }
        },
        "29bd": function(t, e, i) {
            var n = i("b2de"),
                r = n.createHashMap,
                a = n.each;

            function o(t) {
                a(t, (function(e, i) {
                    var n = [],
                        r = [NaN, NaN],
                        a = [e.stackResultDimension, e.stackedOverDimension],
                        o = e.data,
                        s = e.isStackedByIndex,
                        l = o.map(a, (function(a, l, u) {
                            var c, h, d = o.get(e.stackedDimension, u);
                            if (isNaN(d)) return r;
                            s ? h = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
                            for (var f = NaN, p = i - 1; p >= 0; p--) {
                                var g = t[p];
                                if (s || (h = g.data.rawIndexOf(g.stackedByDimension, c)), h >= 0) {
                                    var v = g.data.getByRawIndex(g.stackResultDimension, h);
                                    if (d >= 0 && v > 0 || d <= 0 && v < 0) {
                                        d += v, f = v;
                                        break
                                    }
                                }
                            }
                            return n[0] = d, n[1] = f, n
                        }));
                    o.hostModel.setData(l), e.data = l
                }))
            }
            t.exports = function(t) {
                var e = r();
                t.eachSeries((function(t) {
                    var i = t.get("stack");
                    if (i) {
                        var n = e.get(i) || e.set(i, []),
                            r = t.getData(),
                            a = {
                                stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                                stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                                stackedDimension: r.getCalculationInfo("stackedDimension"),
                                stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                                isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                                data: r,
                                seriesModel: t
                            };
                        if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                        n.length && r.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(a)
                    }
                })), e.each(o)
            }
        },
        "2a6d": function(t, e, i) {
            var n = i("56b7").extendComponentModel({
                type: "axisPointer",
                coordSysAxesInfo: null,
                defaultOption: {
                    show: "auto",
                    triggerOn: null,
                    zlevel: 0,
                    z: 50,
                    type: "line",
                    snap: !1,
                    triggerTooltip: !0,
                    value: null,
                    status: null,
                    link: [],
                    animation: null,
                    animationDurationUpdate: 200,
                    lineStyle: {
                        color: "#aaa",
                        width: 1,
                        type: "solid"
                    },
                    shadowStyle: {
                        color: "rgba(150,150,150,0.3)"
                    },
                    label: {
                        show: !0,
                        formatter: null,
                        precision: "auto",
                        margin: 3,
                        color: "#fff",
                        padding: [5, 7, 5, 7],
                        backgroundColor: "auto",
                        borderColor: null,
                        borderWidth: 0,
                        shadowBlur: 3,
                        shadowColor: "#aaa"
                    },
                    handle: {
                        show: !1,
                        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                        size: 45,
                        margin: 50,
                        color: "#333",
                        shadowBlur: 3,
                        shadowColor: "#aaa",
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                        throttle: 40
                    }
                }
            });
            t.exports = n
        },
        "2b02": function(t, e, i) {
            var n = i("b2de"),
                r = n.each,
                a = n.isString;

            function o(t, e) {
                return !!e && e === t.getCalculationInfo("stackedDimension")
            }
            e.enableDataStack = function(t, e, i) {
                var n, o, s, l, u = (i = i || {}).byIndex,
                    c = i.stackedCoordDimension,
                    h = !(!t || !t.get("stack"));
                if (r(e, (function(t, i) {
                        a(t) && (e[i] = t = {
                            name: t
                        }), h && !t.isExtraCoord && (u || n || !t.ordinalMeta || (n = t), o || "ordinal" === t.type || "time" === t.type || c && c !== t.coordDim || (o = t))
                    })), !o || u || n || (u = !0), o) {
                    s = "__\0ecstackresult", l = "__\0ecstackedover", n && (n.createInvertedIndices = !0);
                    var d = o.coordDim,
                        f = o.type,
                        p = 0;
                    r(e, (function(t) {
                        t.coordDim === d && p++
                    })), e.push({
                        name: s,
                        coordDim: d,
                        coordDimIndex: p,
                        type: f,
                        isExtraCoord: !0,
                        isCalculationCoord: !0
                    }), p++, e.push({
                        name: l,
                        coordDim: l,
                        coordDimIndex: p,
                        type: f,
                        isExtraCoord: !0,
                        isCalculationCoord: !0
                    })
                }
                return {
                    stackedDimension: o && o.name,
                    stackedByDimension: n && n.name,
                    isStackedByIndex: u,
                    stackedOverDimension: l,
                    stackResultDimension: s
                }
            }, e.isDimensionStacked = o, e.getStackedDimension = function(t, e) {
                return o(t, e) ? t.getCalculationInfo("stackResultDimension") : e
            }
        },
        "2b96": function(t, e, i) {
            var n = i("b2de"),
                r = i("852d");

            function a(t) {
                this._zr = t.getZr(), this._show = !1, this._hideTimeout
            }
            a.prototype = {
                constructor: a,
                _enterable: !0,
                update: function() {},
                show: function(t) {
                    this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
                },
                setContent: function(t, e, i) {
                    this.el && this._zr.remove(this.el);
                    for (var n = {}, a = t, o = "{marker", s = a.indexOf(o); s >= 0;) {
                        var l = a.indexOf("|}"),
                            u = a.substr(s + o.length, l - s - o.length);
                        u.indexOf("sub") > -1 ? n["marker" + u] = {
                            textWidth: 4,
                            textHeight: 4,
                            textBorderRadius: 2,
                            textBackgroundColor: e[u],
                            textOffset: [3, 0]
                        } : n["marker" + u] = {
                            textWidth: 10,
                            textHeight: 10,
                            textBorderRadius: 5,
                            textBackgroundColor: e[u]
                        }, s = (a = a.substr(l + 1)).indexOf("{marker")
                    }
                    this.el = new r({
                        style: {
                            rich: n,
                            text: t,
                            textLineHeight: 20,
                            textBackgroundColor: i.get("backgroundColor"),
                            textBorderRadius: i.get("borderRadius"),
                            textFill: i.get("textStyle.color"),
                            textPadding: i.get("padding")
                        },
                        z: i.get("z")
                    }), this._zr.add(this.el);
                    var c = this;
                    this.el.on("mouseover", (function() {
                        c._enterable && (clearTimeout(c._hideTimeout), c._show = !0), c._inContent = !0
                    })), this.el.on("mouseout", (function() {
                        c._enterable && c._show && c.hideLater(c._hideDelay), c._inContent = !1
                    }))
                },
                setEnterable: function(t) {
                    this._enterable = t
                },
                getSize: function() {
                    var t = this.el.getBoundingRect();
                    return [t.width, t.height]
                },
                moveTo: function(t, e) {
                    this.el && this.el.attr("position", [t, e])
                },
                hide: function() {
                    this.el && this.el.hide(), this._show = !1
                },
                hideLater: function(t) {
                    !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(n.bind(this.hide, this), t)) : this.hide())
                },
                isShow: function() {
                    return this._show
                },
                getOuterSize: function() {
                    var t = this.getSize();
                    return {
                        width: t[0],
                        height: t[1]
                    }
                }
            };
            var o = a;
            t.exports = o
        },
        "2c33": function(t, e, i) {
            var n = i("b2de"),
                r = n.each,
                a = n.map,
                o = i("e2dc"),
                s = o.linearMap,
                l = o.getPixelPrecision,
                u = o.round,
                c = i("52cd"),
                h = c.createAxisTicks,
                d = c.createAxisLabels,
                f = c.calculateCategoryInterval,
                p = [0, 1],
                g = function(t, e, i) {
                    this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
                };

            function v(t, e) {
                var i = (t[1] - t[0]) / e / 2;
                t[0] += i, t[1] -= i
            }

            function m(t, e, i, n) {
                var a = e.length;
                if (t.onBand && !i && a) {
                    var o, s, l = t.getExtent();
                    if (1 === a) e[0].coord = l[0], o = e[1] = {
                        coord: l[0]
                    };
                    else {
                        var c = e[a - 1].tickValue - e[0].tickValue,
                            h = (e[a - 1].coord - e[0].coord) / c;
                        r(e, (function(t) {
                            t.coord -= h / 2
                        })), s = 1 + t.scale.getExtent()[1] - e[a - 1].tickValue, o = {
                            coord: e[a - 1].coord + h * s
                        }, e.push(o)
                    }
                    var d = l[0] > l[1];
                    f(e[0].coord, l[0]) && (n ? e[0].coord = l[0] : e.shift()), n && f(l[0], e[0].coord) && e.unshift({
                        coord: l[0]
                    }), f(l[1], o.coord) && (n ? o.coord = l[1] : e.pop()), n && f(o.coord, l[1]) && e.push({
                        coord: l[1]
                    })
                }

                function f(t, e) {
                    return t = u(t), e = u(e), d ? t > e : t < e
                }
            }
            g.prototype = {
                constructor: g,
                contain: function(t) {
                    var e = this._extent,
                        i = Math.min(e[0], e[1]),
                        n = Math.max(e[0], e[1]);
                    return t >= i && t <= n
                },
                containData: function(t) {
                    return this.scale.contain(t)
                },
                getExtent: function() {
                    return this._extent.slice()
                },
                getPixelPrecision: function(t) {
                    return l(t || this.scale.getExtent(), this._extent)
                },
                setExtent: function(t, e) {
                    var i = this._extent;
                    i[0] = t, i[1] = e
                },
                dataToCoord: function(t, e) {
                    var i = this._extent,
                        n = this.scale;
                    return t = n.normalize(t), this.onBand && "ordinal" === n.type && v(i = i.slice(), n.count()), s(t, p, i, e)
                },
                coordToData: function(t, e) {
                    var i = this._extent,
                        n = this.scale;
                    this.onBand && "ordinal" === n.type && v(i = i.slice(), n.count());
                    var r = s(t, i, p, e);
                    return this.scale.scale(r)
                },
                pointToData: function(t, e) {},
                getTicksCoords: function(t) {
                    var e = (t = t || {}).tickModel || this.getTickModel(),
                        i = h(this, e).ticks,
                        n = a(i, (function(t) {
                            return {
                                coord: this.dataToCoord(t),
                                tickValue: t
                            }
                        }), this);
                    return m(this, n, e.get("alignWithLabel"), t.clamp), n
                },
                getMinorTicksCoords: function() {
                    if ("ordinal" === this.scale.type) return [];
                    var t = this.model.getModel("minorTick").get("splitNumber");
                    t > 0 && t < 100 || (t = 5);
                    var e = this.scale.getMinorTicks(t);
                    return a(e, (function(t) {
                        return a(t, (function(t) {
                            return {
                                coord: this.dataToCoord(t),
                                tickValue: t
                            }
                        }), this)
                    }), this)
                },
                getViewLabels: function() {
                    return d(this).labels
                },
                getLabelModel: function() {
                    return this.model.getModel("axisLabel")
                },
                getTickModel: function() {
                    return this.model.getModel("axisTick")
                },
                getBandWidth: function() {
                    var t = this._extent,
                        e = this.scale.getExtent(),
                        i = e[1] - e[0] + (this.onBand ? 1 : 0);
                    0 === i && (i = 1);
                    var n = Math.abs(t[1] - t[0]);
                    return Math.abs(n) / i
                },
                isHorizontal: null,
                getRotate: null,
                calculateCategoryInterval: function() {
                    return f(this)
                }
            };
            var y = g;
            t.exports = y
        },
        "2c57": function(t, e, i) {
            var n = i("b2de"),
                r = {};

            function a() {
                this._coordinateSystems = []
            }
            a.prototype = {
                constructor: a,
                create: function(t, e) {
                    var i = [];
                    n.each(r, (function(n, r) {
                        var a = n.create(t, e);
                        i = i.concat(a || [])
                    })), this._coordinateSystems = i
                },
                update: function(t, e) {
                    n.each(this._coordinateSystems, (function(i) {
                        i.update && i.update(t, e)
                    }))
                },
                getCoordinateSystems: function() {
                    return this._coordinateSystems.slice()
                }
            }, a.register = function(t, e) {
                r[t] = e
            }, a.get = function(t) {
                return r[t]
            };
            var o = a;
            t.exports = o
        },
        "2ce5": function(t, e, i) {
            var n = i("102c");
            e.containStroke = function(t, e, i, r, a, o, s, l, u, c, h) {
                if (0 === u) return !1;
                var d = u;
                return !(h > e + d && h > r + d && h > o + d && h > l + d || h < e - d && h < r - d && h < o - d && h < l - d || c > t + d && c > i + d && c > a + d && c > s + d || c < t - d && c < i - d && c < a - d && c < s - d) && n.cubicProjectPoint(t, e, i, r, a, o, s, l, c, h, null) <= d / 2
            }
        },
        "2d19": function(t, e) {
            function i(t, e, i, n) {
                var r = e + 1;
                if (r === i) return 1;
                if (n(t[r++], t[e]) < 0) {
                    for (; r < i && n(t[r], t[r - 1]) < 0;) r++;
                    ! function(t, e, i) {
                        i--;
                        for (; e < i;) {
                            var n = t[e];
                            t[e++] = t[i], t[i--] = n
                        }
                    }(t, e, r)
                } else
                    for (; r < i && n(t[r], t[r - 1]) >= 0;) r++;
                return r - e
            }

            function n(t, e, i, n, r) {
                for (n === e && n++; n < i; n++) {
                    for (var a, o = t[n], s = e, l = n; s < l;) r(o, t[a = s + l >>> 1]) < 0 ? l = a : s = a + 1;
                    var u = n - s;
                    switch (u) {
                        case 3:
                            t[s + 3] = t[s + 2];
                        case 2:
                            t[s + 2] = t[s + 1];
                        case 1:
                            t[s + 1] = t[s];
                            break;
                        default:
                            for (; u > 0;) t[s + u] = t[s + u - 1], u--
                    }
                    t[s] = o
                }
            }

            function r(t, e, i, n, r, a) {
                var o = 0,
                    s = 0,
                    l = 1;
                if (a(t, e[i + r]) > 0) {
                    for (s = n - r; l < s && a(t, e[i + r + l]) > 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                    l > s && (l = s), o += r, l += r
                } else {
                    for (s = r + 1; l < s && a(t, e[i + r - l]) <= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                    l > s && (l = s);
                    var u = o;
                    o = r - l, l = r - u
                }
                for (o++; o < l;) {
                    var c = o + (l - o >>> 1);
                    a(t, e[i + c]) > 0 ? o = c + 1 : l = c
                }
                return l
            }

            function a(t, e, i, n, r, a) {
                var o = 0,
                    s = 0,
                    l = 1;
                if (a(t, e[i + r]) < 0) {
                    for (s = r + 1; l < s && a(t, e[i + r - l]) < 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                    l > s && (l = s);
                    var u = o;
                    o = r - l, l = r - u
                } else {
                    for (s = n - r; l < s && a(t, e[i + r + l]) >= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                    l > s && (l = s), o += r, l += r
                }
                for (o++; o < l;) {
                    var c = o + (l - o >>> 1);
                    a(t, e[i + c]) < 0 ? l = c : o = c + 1
                }
                return l
            }

            function o(t, e) {
                var i, n, o = 7,
                    s = 0;
                t.length;
                var l = [];

                function u(o) {
                    var l = i[o],
                        u = n[o],
                        d = i[o + 1],
                        f = n[o + 1];
                    n[o] = u + f, o === s - 3 && (i[o + 1] = i[o + 2], n[o + 1] = n[o + 2]), s--;
                    var p = a(t[d], t, l, u, 0, e);
                    l += p, 0 !== (u -= p) && (0 !== (f = r(t[l + u - 1], t, d, f, f - 1, e)) && (u <= f ? c(l, u, d, f) : h(l, u, d, f)))
                }

                function c(i, n, s, u) {
                    var c = 0;
                    for (c = 0; c < n; c++) l[c] = t[i + c];
                    var h = 0,
                        d = s,
                        f = i;
                    if (t[f++] = t[d++], 0 != --u)
                        if (1 !== n) {
                            for (var p, g, v, m = o;;) {
                                p = 0, g = 0, v = !1;
                                do {
                                    if (e(t[d], l[h]) < 0) {
                                        if (t[f++] = t[d++], g++, p = 0, 0 == --u) {
                                            v = !0;
                                            break
                                        }
                                    } else if (t[f++] = l[h++], p++, g = 0, 1 == --n) {
                                        v = !0;
                                        break
                                    }
                                } while ((p | g) < m);
                                if (v) break;
                                do {
                                    if (0 !== (p = a(t[d], l, h, n, 0, e))) {
                                        for (c = 0; c < p; c++) t[f + c] = l[h + c];
                                        if (f += p, h += p, (n -= p) <= 1) {
                                            v = !0;
                                            break
                                        }
                                    }
                                    if (t[f++] = t[d++], 0 == --u) {
                                        v = !0;
                                        break
                                    }
                                    if (0 !== (g = r(l[h], t, d, u, 0, e))) {
                                        for (c = 0; c < g; c++) t[f + c] = t[d + c];
                                        if (f += g, d += g, 0 === (u -= g)) {
                                            v = !0;
                                            break
                                        }
                                    }
                                    if (t[f++] = l[h++], 1 == --n) {
                                        v = !0;
                                        break
                                    }
                                    m--
                                } while (p >= 7 || g >= 7);
                                if (v) break;
                                m < 0 && (m = 0), m += 2
                            }
                            if ((o = m) < 1 && (o = 1), 1 === n) {
                                for (c = 0; c < u; c++) t[f + c] = t[d + c];
                                t[f + u] = l[h]
                            } else {
                                if (0 === n) throw new Error;
                                for (c = 0; c < n; c++) t[f + c] = l[h + c]
                            }
                        } else {
                            for (c = 0; c < u; c++) t[f + c] = t[d + c];
                            t[f + u] = l[h]
                        }
                    else
                        for (c = 0; c < n; c++) t[f + c] = l[h + c]
                }

                function h(i, n, s, u) {
                    var c = 0;
                    for (c = 0; c < u; c++) l[c] = t[s + c];
                    var h = i + n - 1,
                        d = u - 1,
                        f = s + u - 1,
                        p = 0,
                        g = 0;
                    if (t[f--] = t[h--], 0 != --n)
                        if (1 !== u) {
                            for (var v = o;;) {
                                var m = 0,
                                    y = 0,
                                    x = !1;
                                do {
                                    if (e(l[d], t[h]) < 0) {
                                        if (t[f--] = t[h--], m++, y = 0, 0 == --n) {
                                            x = !0;
                                            break
                                        }
                                    } else if (t[f--] = l[d--], y++, m = 0, 1 == --u) {
                                        x = !0;
                                        break
                                    }
                                } while ((m | y) < v);
                                if (x) break;
                                do {
                                    if (0 !== (m = n - a(l[d], t, i, n, n - 1, e))) {
                                        for (n -= m, g = (f -= m) + 1, p = (h -= m) + 1, c = m - 1; c >= 0; c--) t[g + c] = t[p + c];
                                        if (0 === n) {
                                            x = !0;
                                            break
                                        }
                                    }
                                    if (t[f--] = l[d--], 1 == --u) {
                                        x = !0;
                                        break
                                    }
                                    if (0 !== (y = u - r(t[h], l, 0, u, u - 1, e))) {
                                        for (u -= y, g = (f -= y) + 1, p = (d -= y) + 1, c = 0; c < y; c++) t[g + c] = l[p + c];
                                        if (u <= 1) {
                                            x = !0;
                                            break
                                        }
                                    }
                                    if (t[f--] = t[h--], 0 == --n) {
                                        x = !0;
                                        break
                                    }
                                    v--
                                } while (m >= 7 || y >= 7);
                                if (x) break;
                                v < 0 && (v = 0), v += 2
                            }
                            if ((o = v) < 1 && (o = 1), 1 === u) {
                                for (g = (f -= n) + 1, p = (h -= n) + 1, c = n - 1; c >= 0; c--) t[g + c] = t[p + c];
                                t[f] = l[d]
                            } else {
                                if (0 === u) throw new Error;
                                for (p = f - (u - 1), c = 0; c < u; c++) t[p + c] = l[c]
                            }
                        } else {
                            for (g = (f -= n) + 1, p = (h -= n) + 1, c = n - 1; c >= 0; c--) t[g + c] = t[p + c];
                            t[f] = l[d]
                        }
                    else
                        for (p = f - (u - 1), c = 0; c < u; c++) t[p + c] = l[c]
                }
                i = [], n = [], this.mergeRuns = function() {
                    for (; s > 1;) {
                        var t = s - 2;
                        if (t >= 1 && n[t - 1] <= n[t] + n[t + 1] || t >= 2 && n[t - 2] <= n[t] + n[t - 1]) n[t - 1] < n[t + 1] && t--;
                        else if (n[t] > n[t + 1]) break;
                        u(t)
                    }
                }, this.forceMergeRuns = function() {
                    for (; s > 1;) {
                        var t = s - 2;
                        t > 0 && n[t - 1] < n[t + 1] && t--, u(t)
                    }
                }, this.pushRun = function(t, e) {
                    i[s] = t, n[s] = e, s += 1
                }
            }
            t.exports = function(t, e, r, a) {
                r || (r = 0), a || (a = t.length);
                var s = a - r;
                if (!(s < 2)) {
                    var l = 0;
                    if (s < 32) return void n(t, r, a, r + (l = i(t, r, a, e)), e);
                    var u = new o(t, e),
                        c = function(t) {
                            for (var e = 0; t >= 32;) e |= 1 & t, t >>= 1;
                            return t + e
                        }(s);
                    do {
                        if ((l = i(t, r, a, e)) < c) {
                            var h = s;
                            h > c && (h = c), n(t, r, r + h, r + l, e), l = h
                        }
                        u.pushRun(r, l), u.mergeRuns(), s -= l, r += l
                    } while (0 !== s);
                    u.forceMergeRuns()
                }
            }
        },
        "2f1f": function(t, e, i) {
            var n = i("b2de"),
                r = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"];
            var a = function(t) {
                n.each(r, (function(e) {
                    this[e] = n.bind(t[e], t)
                }), this)
            };
            t.exports = a
        },
        "2fac": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = n.createHashMap,
                a = (n.retrieve, n.each);

            function o(t) {
                this.coordSysName = t, this.coordSysDims = [], this.axisMap = r(), this.categoryAxisMap = r(), this.firstCategoryDimIndex = null
            }
            var s = {
                cartesian2d: function(t, e, i, n) {
                    var r = t.getReferringComponents("xAxis")[0],
                        a = t.getReferringComponents("yAxis")[0];
                    e.coordSysDims = ["x", "y"], i.set("x", r), i.set("y", a), l(r) && (n.set("x", r), e.firstCategoryDimIndex = 0), l(a) && (n.set("y", a), e.firstCategoryDimIndex, e.firstCategoryDimIndex = 1)
                },
                singleAxis: function(t, e, i, n) {
                    var r = t.getReferringComponents("singleAxis")[0];
                    e.coordSysDims = ["single"], i.set("single", r), l(r) && (n.set("single", r), e.firstCategoryDimIndex = 0)
                },
                polar: function(t, e, i, n) {
                    var r = t.getReferringComponents("polar")[0],
                        a = r.findAxisModel("radiusAxis"),
                        o = r.findAxisModel("angleAxis");
                    e.coordSysDims = ["radius", "angle"], i.set("radius", a), i.set("angle", o), l(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), l(o) && (n.set("angle", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
                },
                geo: function(t, e, i, n) {
                    e.coordSysDims = ["lng", "lat"]
                },
                parallel: function(t, e, i, n) {
                    var r = t.ecModel,
                        o = r.getComponent("parallel", t.get("parallelIndex")),
                        s = e.coordSysDims = o.dimensions.slice();
                    a(o.parallelAxisIndex, (function(t, a) {
                        var o = r.getComponent("parallelAxis", t),
                            u = s[a];
                        i.set(u, o), l(o) && null == e.firstCategoryDimIndex && (n.set(u, o), e.firstCategoryDimIndex = a)
                    }))
                }
            };

            function l(t) {
                return "category" === t.get("type")
            }
            e.getCoordSysInfoBySeries = function(t) {
                var e = t.get("coordinateSystem"),
                    i = new o(e),
                    n = s[e];
                if (n) return n(t, i, i.axisMap, i.categoryAxisMap), i
            }
        },
        "30ca": function(t, e, i) {
            var n = i("e27b"),
                r = i("51281"),
                a = i("2ce5"),
                o = i("52e5"),
                s = i("02c6"),
                l = i("cb05").normalizeRadian,
                u = i("102c"),
                c = i("9ced"),
                h = n.CMD,
                d = 2 * Math.PI;

            function f(t, e) {
                return Math.abs(t - e) < 1e-4
            }
            var p = [-1, -1, -1],
                g = [-1, -1];

            function v() {
                var t = g[0];
                g[0] = g[1], g[1] = t
            }

            function m(t, e, i, n, r, a, o, s, l, c) {
                if (c > e && c > n && c > a && c > s || c < e && c < n && c < a && c < s) return 0;
                var h = u.cubicRootAt(e, n, a, s, c, p);
                if (0 === h) return 0;
                for (var d, f, m = 0, y = -1, x = 0; x < h; x++) {
                    var _ = p[x],
                        b = 0 === _ || 1 === _ ? .5 : 1;
                    u.cubicAt(t, i, r, o, _) < l || (y < 0 && (y = u.cubicExtrema(e, n, a, s, g), g[1] < g[0] && y > 1 && v(), d = u.cubicAt(e, n, a, s, g[0]), y > 1 && (f = u.cubicAt(e, n, a, s, g[1]))), 2 === y ? _ < g[0] ? m += d < e ? b : -b : _ < g[1] ? m += f < d ? b : -b : m += s < f ? b : -b : _ < g[0] ? m += d < e ? b : -b : m += s < d ? b : -b)
                }
                return m
            }

            function y(t, e, i, n, r, a, o, s) {
                if (s > e && s > n && s > a || s < e && s < n && s < a) return 0;
                var l = u.quadraticRootAt(e, n, a, s, p);
                if (0 === l) return 0;
                var c = u.quadraticExtremum(e, n, a);
                if (c >= 0 && c <= 1) {
                    for (var h = 0, d = u.quadraticAt(e, n, a, c), f = 0; f < l; f++) {
                        var g = 0 === p[f] || 1 === p[f] ? .5 : 1,
                            v = u.quadraticAt(t, i, r, p[f]);
                        v < o || (p[f] < c ? h += d < e ? g : -g : h += a < d ? g : -g)
                    }
                    return h
                }
                return g = 0 === p[0] || 1 === p[0] ? .5 : 1, (v = u.quadraticAt(t, i, r, p[0])) < o ? 0 : a < e ? g : -g
            }

            function x(t, e, i, n, r, a, o, s) {
                if ((s -= e) > i || s < -i) return 0;
                var u = Math.sqrt(i * i - s * s);
                p[0] = -u, p[1] = u;
                var c = Math.abs(n - r);
                if (c < 1e-4) return 0;
                if (c % d < 1e-4) {
                    n = 0, r = d;
                    var h = a ? 1 : -1;
                    return o >= p[0] + t && o <= p[1] + t ? h : 0
                }
                a ? (u = n, n = l(r), r = l(u)) : (n = l(n), r = l(r)), n > r && (r += d);
                for (var f = 0, g = 0; g < 2; g++) {
                    var v = p[g];
                    if (v + t > o) {
                        var m = Math.atan2(s, v);
                        h = a ? 1 : -1, m < 0 && (m = d + m), (m >= n && m <= r || m + d >= n && m + d <= r) && (m > Math.PI / 2 && m < 1.5 * Math.PI && (h = -h), f += h)
                    }
                }
                return f
            }

            function _(t, e, i, n, l) {
                for (var u = 0, d = 0, p = 0, g = 0, v = 0, _ = 0; _ < t.length;) {
                    var b = t[_++];
                    switch (b === h.M && _ > 1 && (i || (u += c(d, p, g, v, n, l))), 1 === _ && (g = d = t[_], v = p = t[_ + 1]), b) {
                        case h.M:
                            d = g = t[_++], p = v = t[_++];
                            break;
                        case h.L:
                            if (i) {
                                if (r.containStroke(d, p, t[_], t[_ + 1], e, n, l)) return !0
                            } else u += c(d, p, t[_], t[_ + 1], n, l) || 0;
                            d = t[_++], p = t[_++];
                            break;
                        case h.C:
                            if (i) {
                                if (a.containStroke(d, p, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, n, l)) return !0
                            } else u += m(d, p, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], n, l) || 0;
                            d = t[_++], p = t[_++];
                            break;
                        case h.Q:
                            if (i) {
                                if (o.containStroke(d, p, t[_++], t[_++], t[_], t[_ + 1], e, n, l)) return !0
                            } else u += y(d, p, t[_++], t[_++], t[_], t[_ + 1], n, l) || 0;
                            d = t[_++], p = t[_++];
                            break;
                        case h.A:
                            var w = t[_++],
                                S = t[_++],
                                C = t[_++],
                                M = t[_++],
                                T = t[_++],
                                I = t[_++];
                            _ += 1;
                            var A = 1 - t[_++],
                                D = Math.cos(T) * C + w,
                                k = Math.sin(T) * M + S;
                            _ > 1 ? u += c(d, p, D, k, n, l) : (g = D, v = k);
                            var P = (n - w) * M / C + w;
                            if (i) {
                                if (s.containStroke(w, S, M, T, T + I, A, e, P, l)) return !0
                            } else u += x(w, S, M, T, T + I, A, P, l);
                            d = Math.cos(T + I) * C + w, p = Math.sin(T + I) * M + S;
                            break;
                        case h.R:
                            if (g = d = t[_++], v = p = t[_++], D = g + t[_++], k = v + t[_++], i) {
                                if (r.containStroke(g, v, D, v, e, n, l) || r.containStroke(D, v, D, k, e, n, l) || r.containStroke(D, k, g, k, e, n, l) || r.containStroke(g, k, g, v, e, n, l)) return !0
                            } else u += c(D, v, D, k, n, l), u += c(g, k, g, v, n, l);
                            break;
                        case h.Z:
                            if (i) {
                                if (r.containStroke(d, p, g, v, e, n, l)) return !0
                            } else u += c(d, p, g, v, n, l);
                            d = g, p = v
                    }
                }
                return i || f(p, v) || (u += c(d, p, g, v, n, l) || 0), 0 !== u
            }
            e.contain = function(t, e, i) {
                return _(t, 0, !1, e, i)
            }, e.containStroke = function(t, e, i, n) {
                return _(t, e, !0, i, n)
            }
        },
        "30fe": function(t, e) {
            var i = "";
            "undefined" != typeof navigator && (i = navigator.platform || "");
            var n = {
                color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
                gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
                textStyle: {
                    fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                blendMode: null,
                animation: "auto",
                animationDuration: 1e3,
                animationDurationUpdate: 300,
                animationEasing: "exponentialOut",
                animationEasingUpdate: "cubicOut",
                animationThreshold: 2e3,
                progressiveThreshold: 3e3,
                progressive: 400,
                hoverLayerThreshold: 3e3,
                useUTC: !1
            };
            t.exports = n
        },
        "317f": function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de"),
                a = i("81e8");
            i("8a5a"), i("be69"), n.extendComponentView({
                type: "grid",
                render: function(t, e) {
                    this.group.removeAll(), t.get("show") && this.group.add(new a.Rect({
                        shape: t.coordinateSystem.getRect(),
                        style: r.defaults({
                            fill: t.get("backgroundColor")
                        }, t.getItemStyle()),
                        silent: !0,
                        z2: -1
                    }))
                }
            }), n.registerPreprocessor((function(t) {
                t.xAxis && t.yAxis && !t.grid && (t.grid = {})
            }))
        },
        "31c0": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = (n.isTypedArray, n.extend),
                a = (n.assert, n.each),
                o = n.isObject,
                s = i("0127"),
                l = s.getDataItemValue,
                u = s.isDataItemOption,
                c = i("e2dc").parseDate,
                h = i("fa21"),
                d = i("cfb8"),
                f = d.SOURCE_FORMAT_TYPED_ARRAY,
                p = d.SOURCE_FORMAT_ARRAY_ROWS,
                g = d.SOURCE_FORMAT_ORIGINAL,
                v = d.SOURCE_FORMAT_OBJECT_ROWS;

            function m(t, e) {
                h.isInstance(t) || (t = h.seriesDataToSource(t)), this._source = t;
                var i = this._data = t.data,
                    n = t.sourceFormat;
                n === f && (this._offset = 0, this._dimSize = e, this._data = i);
                var a = x[n === p ? n + "_" + t.seriesLayoutBy : n];
                r(this, a)
            }
            var y = m.prototype;
            y.pure = !1, y.persistent = !0, y.getSource = function() {
                return this._source
            };
            var x = {
                arrayRows_column: {
                    pure: !0,
                    count: function() {
                        return Math.max(0, this._data.length - this._source.startIndex)
                    },
                    getItem: function(t) {
                        return this._data[t + this._source.startIndex]
                    },
                    appendData: w
                },
                arrayRows_row: {
                    pure: !0,
                    count: function() {
                        var t = this._data[0];
                        return t ? Math.max(0, t.length - this._source.startIndex) : 0
                    },
                    getItem: function(t) {
                        t += this._source.startIndex;
                        for (var e = [], i = this._data, n = 0; n < i.length; n++) {
                            var r = i[n];
                            e.push(r ? r[t] : null)
                        }
                        return e
                    },
                    appendData: function() {
                        throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                    }
                },
                objectRows: {
                    pure: !0,
                    count: _,
                    getItem: b,
                    appendData: w
                },
                keyedColumns: {
                    pure: !0,
                    count: function() {
                        var t = this._source.dimensionsDefine[0].name,
                            e = this._data[t];
                        return e ? e.length : 0
                    },
                    getItem: function(t) {
                        for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
                            var r = this._data[i[n].name];
                            e.push(r ? r[t] : null)
                        }
                        return e
                    },
                    appendData: function(t) {
                        var e = this._data;
                        a(t, (function(t, i) {
                            for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) n.push(t[r])
                        }))
                    }
                },
                original: {
                    count: _,
                    getItem: b,
                    appendData: w
                },
                typedArray: {
                    persistent: !1,
                    pure: !0,
                    count: function() {
                        return this._data ? this._data.length / this._dimSize : 0
                    },
                    getItem: function(t, e) {
                        t -= this._offset, e = e || [];
                        for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
                        return e
                    },
                    appendData: function(t) {
                        this._data = t
                    },
                    clean: function() {
                        this._offset += this.count(), this._data = null
                    }
                }
            };

            function _() {
                return this._data.length
            }

            function b(t) {
                return this._data[t]
            }

            function w(t) {
                for (var e = 0; e < t.length; e++) this._data.push(t[e])
            }
            var S = {
                arrayRows: C,
                objectRows: function(t, e, i, n) {
                    return null != i ? t[n] : t
                },
                keyedColumns: C,
                original: function(t, e, i, n) {
                    var r = l(t);
                    return null != i && r instanceof Array ? r[i] : r
                },
                typedArray: C
            };

            function C(t, e, i, n) {
                return null != i ? t[i] : t
            }
            var M = {
                arrayRows: T,
                objectRows: function(t, e, i, n) {
                    return I(t[e], this._dimensionInfos[e])
                },
                keyedColumns: T,
                original: function(t, e, i, n) {
                    var r = t && (null == t.value ? t : t.value);
                    return !this._rawData.pure && u(t) && (this.hasItemOption = !0), I(r instanceof Array ? r[n] : r, this._dimensionInfos[e])
                },
                typedArray: function(t, e, i, n) {
                    return t[n]
                }
            };

            function T(t, e, i, n) {
                return I(t[n], this._dimensionInfos[e])
            }

            function I(t, e) {
                var i = e && e.type;
                if ("ordinal" === i) {
                    var n = e && e.ordinalMeta;
                    return n ? n.parseAndCollect(t) : t
                }
                return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +c(t)), null == t || "" === t ? NaN : +t
            }
            e.DefaultDataProvider = m, e.defaultDimValueGetters = M, e.retrieveRawValue = function(t, e, i) {
                if (t) {
                    var n = t.getRawDataItem(e);
                    if (null != n) {
                        var r, a, o = t.getProvider().getSource().sourceFormat,
                            s = t.getDimensionInfo(i);
                        return s && (r = s.name, a = s.index), S[o](n, e, a, r)
                    }
                }
            }, e.retrieveRawAttr = function(t, e, i) {
                if (t) {
                    var n = t.getProvider().getSource().sourceFormat;
                    if (n === g || n === v) {
                        var r = t.getRawDataItem(e);
                        return n !== g || o(r) || (r = null), r ? r[i] : void 0
                    }
                }
            }
        },
        3303: function(t, e, i) {
            var n = i("b2de"),
                r = i("a16b"),
                a = i("a670");

            function o(t) {
                a.call(this, t)
            }
            o.prototype = {
                constructor: o,
                type: "cartesian2d",
                dimensions: ["x", "y"],
                getBaseAxis: function() {
                    return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
                },
                containPoint: function(t) {
                    var e = this.getAxis("x"),
                        i = this.getAxis("y");
                    return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
                },
                containData: function(t) {
                    return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
                },
                dataToPoint: function(t, e, i) {
                    var n = this.getAxis("x"),
                        r = this.getAxis("y");
                    return (i = i || [])[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), i
                },
                clampData: function(t, e) {
                    var i = this.getAxis("x").scale,
                        n = this.getAxis("y").scale,
                        r = i.getExtent(),
                        a = n.getExtent(),
                        o = i.parse(t[0]),
                        s = n.parse(t[1]);
                    return (e = e || [])[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
                },
                pointToData: function(t, e) {
                    var i = this.getAxis("x"),
                        n = this.getAxis("y");
                    return (e = e || [])[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), e
                },
                getOtherAxis: function(t) {
                    return this.getAxis("x" === t.dim ? "y" : "x")
                },
                getArea: function() {
                    var t = this.getAxis("x").getGlobalExtent(),
                        e = this.getAxis("y").getGlobalExtent(),
                        i = Math.min(t[0], t[1]),
                        n = Math.min(e[0], e[1]),
                        a = Math.max(t[0], t[1]) - i,
                        o = Math.max(e[0], e[1]) - n;
                    return new r(i, n, a, o)
                }
            }, n.inherits(o, a);
            var s = o;
            t.exports = s
        },
        "347b": function(t, e, i) {
            var n = i("b2de"),
                r = i("81e8"),
                a = i("45d9");

            function o(t, e, i, n) {
                var r = e.getData(),
                    a = this.dataIndex,
                    o = r.getName(a),
                    l = e.get("selectedOffset");
                n.dispatchAction({
                    type: "pieToggleSelect",
                    from: t,
                    name: o,
                    seriesId: e.id
                }), r.each((function(t) {
                    s(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), l, i)
                }))
            }

            function s(t, e, i, n, r) {
                var a = (e.startAngle + e.endAngle) / 2,
                    o = i ? n : 0,
                    s = [Math.cos(a) * o, Math.sin(a) * o];
                r ? t.animate().when(200, {
                    position: s
                }).start("bounceOut") : t.attr("position", s)
            }

            function l(t, e) {
                r.Group.call(this);
                var i = new r.Sector({
                        z2: 2
                    }),
                    n = new r.Polyline,
                    a = new r.Text;
                this.add(i), this.add(n), this.add(a), this.updateData(t, e, !0)
            }
            var u = l.prototype;
            u.updateData = function(t, e, i) {
                var a = this.childAt(0),
                    o = this.childAt(1),
                    l = this.childAt(2),
                    u = t.hostModel,
                    c = t.getItemModel(e),
                    h = t.getItemLayout(e),
                    d = n.extend({}, h);
                d.label = null;
                var f = u.getShallow("animationTypeUpdate");
                i ? (a.setShape(d), "scale" === u.getShallow("animationType") ? (a.shape.r = h.r0, r.initProps(a, {
                    shape: {
                        r: h.r
                    }
                }, u, e)) : (a.shape.endAngle = h.startAngle, r.updateProps(a, {
                    shape: {
                        endAngle: h.endAngle
                    }
                }, u, e))) : "expansion" === f ? a.setShape(d) : r.updateProps(a, {
                    shape: d
                }, u, e);
                var p = t.getItemVisual(e, "color");
                a.useStyle(n.defaults({
                    lineJoin: "bevel",
                    fill: p
                }, c.getModel("itemStyle").getItemStyle())), a.hoverStyle = c.getModel("emphasis.itemStyle").getItemStyle();
                var g = c.getShallow("cursor");
                g && a.attr("cursor", g), s(this, t.getItemLayout(e), u.isSelected(null, e), u.get("selectedOffset"), u.get("animation"));
                var v = !i && "transition" === f;
                this._updateLabel(t, e, v), this.highDownOnUpdate = c.get("hoverAnimation") && u.isAnimationEnabled() ? function(t, e) {
                    "emphasis" === e ? (o.ignore = o.hoverIgnore, l.ignore = l.hoverIgnore, a.stopAnimation(!0), a.animateTo({
                        shape: {
                            r: h.r + u.get("hoverOffset")
                        }
                    }, 300, "elasticOut")) : (o.ignore = o.normalIgnore, l.ignore = l.normalIgnore, a.stopAnimation(!0), a.animateTo({
                        shape: {
                            r: h.r
                        }
                    }, 300, "elasticOut"))
                } : null, r.setHoverStyle(this)
            }, u._updateLabel = function(t, e, i) {
                var n = this.childAt(1),
                    a = this.childAt(2),
                    o = t.hostModel,
                    s = t.getItemModel(e),
                    l = t.getItemLayout(e).label,
                    u = t.getItemVisual(e, "color");
                if (!l || isNaN(l.x) || isNaN(l.y)) a.ignore = a.normalIgnore = a.hoverIgnore = n.ignore = n.normalIgnore = n.hoverIgnore = !0;
                else {
                    var c = {
                            points: l.linePoints || [
                                [l.x, l.y],
                                [l.x, l.y],
                                [l.x, l.y]
                            ]
                        },
                        h = {
                            x: l.x,
                            y: l.y
                        };
                    i ? (r.updateProps(n, {
                        shape: c
                    }, o, e), r.updateProps(a, {
                        style: h
                    }, o, e)) : (n.attr({
                        shape: c
                    }), a.attr({
                        style: h
                    })), a.attr({
                        rotation: l.rotation,
                        origin: [l.x, l.y],
                        z2: 10
                    });
                    var d = s.getModel("label"),
                        f = s.getModel("emphasis.label"),
                        p = s.getModel("labelLine"),
                        g = s.getModel("emphasis.labelLine");
                    u = t.getItemVisual(e, "color"), r.setLabelStyle(a.style, a.hoverStyle = {}, d, f, {
                        labelFetcher: t.hostModel,
                        labelDataIndex: e,
                        defaultText: l.text,
                        autoColor: u,
                        useInsideStyle: !!l.inside
                    }, {
                        textAlign: l.textAlign,
                        textVerticalAlign: l.verticalAlign,
                        opacity: t.getItemVisual(e, "opacity")
                    }), a.ignore = a.normalIgnore = !d.get("show"), a.hoverIgnore = !f.get("show"), n.ignore = n.normalIgnore = !p.get("show"), n.hoverIgnore = !g.get("show"), n.setStyle({
                        stroke: u,
                        opacity: t.getItemVisual(e, "opacity")
                    }), n.setStyle(p.getModel("lineStyle").getLineStyle()), n.hoverStyle = g.getModel("lineStyle").getLineStyle();
                    var v = p.get("smooth");
                    v && !0 === v && (v = .4), n.setShape({
                        smooth: v
                    })
                }
            }, n.inherits(l, r.Group);
            var c = a.extend({
                type: "pie",
                init: function() {
                    var t = new r.Group;
                    this._sectorGroup = t
                },
                render: function(t, e, i, r) {
                    if (!r || r.from !== this.uid) {
                        var a = t.getData(),
                            s = this._data,
                            u = this.group,
                            c = e.get("animation"),
                            h = !s,
                            d = t.get("animationType"),
                            f = t.get("animationTypeUpdate"),
                            p = n.curry(o, this.uid, t, c, i),
                            g = t.get("selectedMode");
                        if (a.diff(s).add((function(t) {
                                var e = new l(a, t);
                                h && "scale" !== d && e.eachChild((function(t) {
                                    t.stopAnimation(!0)
                                })), g && e.on("click", p), a.setItemGraphicEl(t, e), u.add(e)
                            })).update((function(t, e) {
                                var i = s.getItemGraphicEl(e);
                                h || "transition" === f || i.eachChild((function(t) {
                                    t.stopAnimation(!0)
                                })), i.updateData(a, t), i.off("click"), g && i.on("click", p), u.add(i), a.setItemGraphicEl(t, i)
                            })).remove((function(t) {
                                var e = s.getItemGraphicEl(t);
                                u.remove(e)
                            })).execute(), c && a.count() > 0 && (h ? "scale" !== d : "transition" !== f)) {
                            for (var v = a.getItemLayout(0), m = 1; isNaN(v.startAngle) && m < a.count(); ++m) v = a.getItemLayout(m);
                            var y = Math.max(i.getWidth(), i.getHeight()) / 2,
                                x = n.bind(u.removeClipPath, u);
                            u.setClipPath(this._createClipPath(v.cx, v.cy, y, v.startAngle, v.clockwise, x, t, h))
                        } else u.removeClipPath();
                        this._data = a
                    }
                },
                dispose: function() {},
                _createClipPath: function(t, e, i, n, a, o, s, l) {
                    var u = new r.Sector({
                        shape: {
                            cx: t,
                            cy: e,
                            r0: 0,
                            r: i,
                            startAngle: n,
                            endAngle: n,
                            clockwise: a
                        }
                    });
                    return (l ? r.initProps : r.updateProps)(u, {
                        shape: {
                            endAngle: n + (a ? 1 : -1) * Math.PI * 2
                        }
                    }, s, o), u
                },
                containPoint: function(t, e) {
                    var i = e.getData().getItemLayout(0);
                    if (i) {
                        var n = t[0] - i.cx,
                            r = t[1] - i.cy,
                            a = Math.sqrt(n * n + r * r);
                        return a <= i.r && a >= i.r0
                    }
                }
            });
            t.exports = c
        },
        "34de": function(t, e, i) {
            var n = i("b2de"),
                r = i("76be"),
                a = i("055a"),
                o = i("2d19");

            function s(t, e) {
                return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
            }
            var l = function() {
                this._roots = [], this._displayList = [], this._displayListLen = 0
            };
            l.prototype = {
                constructor: l,
                traverse: function(t, e) {
                    for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
                },
                getDisplayList: function(t, e) {
                    return e = e || !1, t && this.updateDisplayList(e), this._displayList
                },
                updateDisplayList: function(t) {
                    this._displayListLen = 0;
                    for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++) this._updateAndAddDisplayable(e[n], null, t);
                    i.length = this._displayListLen, r.canvasSupported && o(i, s)
                },
                _updateAndAddDisplayable: function(t, e, i) {
                    if (!t.ignore || i) {
                        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                        var n = t.clipPath;
                        if (n) {
                            e = e ? e.slice() : [];
                            for (var r = n, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
                        }
                        if (t.isGroup) {
                            for (var o = t._children, s = 0; s < o.length; s++) {
                                var l = o[s];
                                t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i)
                            }
                            t.__dirty = !1
                        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                    }
                },
                addRoot: function(t) {
                    t.__storage !== this && (t instanceof a && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
                },
                delRoot: function(t) {
                    if (null == t) {
                        for (var e = 0; e < this._roots.length; e++) {
                            var i = this._roots[e];
                            i instanceof a && i.delChildrenFromStorage(this)
                        }
                        return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                    }
                    if (t instanceof Array) {
                        e = 0;
                        for (var r = t.length; e < r; e++) this.delRoot(t[e])
                    } else {
                        var o = n.indexOf(this._roots, t);
                        o >= 0 && (this.delFromStorage(t), this._roots.splice(o, 1), t instanceof a && t.delChildrenFromStorage(this))
                    }
                },
                addToStorage: function(t) {
                    return t && (t.__storage = this, t.dirty(!1)), this
                },
                delFromStorage: function(t) {
                    return t && (t.__storage = null), this
                },
                dispose: function() {
                    this._renderList = this._roots = null
                },
                displayableSortFunc: s
            };
            var u = l;
            t.exports = u
        },
        3550: function(t, e) {
            e.ContextCachedBy = {
                NONE: 0,
                STYLE_BIND: 1,
                PLAIN_TEXT: 2
            }, e.WILL_BE_RESTORED = 9
        },
        "36b0": function(t, e, i) {
            var n = i("b2de"),
                r = i("cb89"),
                a = i("73a1"),
                o = i("76be"),
                s = i("542f"),
                l = n.each,
                u = s.toCamelCase,
                c = ["", "-webkit-", "-moz-", "-o-"];

            function h(t) {
                var e = "cubic-bezier(0.23, 1, 0.32, 1)",
                    i = "left " + t + "s " + e + ",top " + t + "s " + e;
                return n.map(c, (function(t) {
                    return t + "transition:" + i
                })).join(";")
            }

            function d(t) {
                var e = [],
                    i = t.get("transitionDuration"),
                    n = t.get("backgroundColor"),
                    a = t.getModel("textStyle"),
                    c = t.get("padding");
                return i && e.push(h(i)), n && (o.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + r.toHex(n)), e.push("filter:alpha(opacity=70)"))), l(["width", "color", "radius"], (function(i) {
                    var n = "border-" + i,
                        r = u(n),
                        a = t.get(r);
                    null != a && e.push(n + ":" + a + ("color" === i ? "" : "px"))
                })), e.push(function(t) {
                    var e = [],
                        i = t.get("fontSize"),
                        n = t.getTextColor();
                    return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), l(["decoration", "align"], (function(i) {
                        var n = t.get(i);
                        n && e.push("text-" + i + ":" + n)
                    })), e.join(";")
                }(a)), null != c && e.push("padding:" + s.normalizeCssArray(c).join("px ") + "px"), e.join(";") + ";"
            }

            function f(t, e) {
                if (o.wxa) return null;
                var i = document.createElement("div"),
                    n = this._zr = e.getZr();
                this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
                var r = this;
                i.onmouseenter = function() {
                    r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
                }, i.onmousemove = function(e) {
                    if (e = e || window.event, !r._enterable) {
                        var i = n.handler;
                        a.normalizeEvent(t, e, !0), i.dispatch("mousemove", e)
                    }
                }, i.onmouseleave = function() {
                    r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
                }
            }
            f.prototype = {
                constructor: f,
                _enterable: !0,
                update: function() {
                    var t = this._container,
                        e = t.currentStyle || document.defaultView.getComputedStyle(t),
                        i = t.style;
                    "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
                },
                show: function(t) {
                    clearTimeout(this._hideTimeout);
                    var e = this.el;
                    e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + d(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
                },
                setContent: function(t) {
                    this.el.innerHTML = null == t ? "" : t
                },
                setEnterable: function(t) {
                    this._enterable = t
                },
                getSize: function() {
                    var t = this.el;
                    return [t.clientWidth, t.clientHeight]
                },
                moveTo: function(t, e) {
                    var i, n = this._zr;
                    n && n.painter && (i = n.painter.getViewportRootOffset()) && (t += i.offsetLeft, e += i.offsetTop);
                    var r = this.el.style;
                    r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
                },
                hide: function() {
                    this.el.style.display = "none", this._show = !1
                },
                hideLater: function(t) {
                    !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(n.bind(this.hide, this), t)) : this.hide())
                },
                isShow: function() {
                    return this._show
                },
                getOuterSize: function() {
                    var t = this.el.clientWidth,
                        e = this.el.clientHeight;
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        var i = document.defaultView.getComputedStyle(this.el);
                        i && (t += parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), e += parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
                    }
                    return {
                        width: t,
                        height: e
                    }
                }
            };
            var p = f;
            t.exports = p
        },
        3855: function(t, e, i) {
            var n = i("b2de"),
                r = n.each,
                a = n.map,
                o = n.isFunction,
                s = n.createHashMap,
                l = n.noop,
                u = i("6f05").createTask,
                c = i("fab7").getUID,
                h = i("c6e5"),
                d = i("2f1f"),
                f = i("0127").normalizeToArray;

            function p(t, e, i, n) {
                this.ecInstance = t, this.api = e, this.unfinished, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n), this._stageTaskMap = s()
            }
            var g = p.prototype;

            function v(t, e, i, n, a) {
                var o;

                function s(t, e) {
                    return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
                }
                a = a || {}, r(e, (function(e, r) {
                    if (!a.visualType || a.visualType === e.visualType) {
                        var l = t._stageTaskMap.get(e.uid),
                            u = l.seriesTaskMap,
                            c = l.overallTask;
                        if (c) {
                            var h, d = c.agentStubMap;
                            d.each((function(t) {
                                s(a, t) && (t.dirty(), h = !0)
                            })), h && c.dirty(), m(c, n);
                            var f = t.getPerformArgs(c, a.block);
                            d.each((function(t) {
                                t.perform(f)
                            })), o |= c.perform(f)
                        } else u && u.each((function(r, l) {
                            s(a, r) && r.dirty();
                            var u = t.getPerformArgs(r, a.block);
                            u.skip = !e.performRawSeries && i.isSeriesFiltered(r.context.model), m(r, n), o |= r.perform(u)
                        }))
                    }
                })), t.unfinished |= o
            }
            g.restoreData = function(t, e) {
                t.restoreData(e), this._stageTaskMap.each((function(t) {
                    var e = t.overallTask;
                    e && e.dirty()
                }))
            }, g.getPerformArgs = function(t, e) {
                if (t.__pipeline) {
                    var i = this._pipelineMap.get(t.__pipeline.id),
                        n = i.context,
                        r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex ? i.step : null,
                        a = n && n.modDataCount;
                    return {
                        step: r,
                        modBy: null != a ? Math.ceil(a / r) : null,
                        modDataCount: a
                    }
                }
            }, g.getPipeline = function(t) {
                return this._pipelineMap.get(t)
            }, g.updateStreamModes = function(t, e) {
                var i = this._pipelineMap.get(t.uid),
                    n = t.getData().count(),
                    r = i.progressiveEnabled && e.incrementalPrepareRender && n >= i.threshold,
                    a = t.get("large") && n >= t.get("largeThreshold"),
                    o = "mod" === t.get("progressiveChunkMode") ? n : null;
                t.pipelineContext = i.context = {
                    progressiveRender: r,
                    modDataCount: o,
                    large: a
                }
            }, g.restorePipelines = function(t) {
                var e = this,
                    i = e._pipelineMap = s();
                t.eachSeries((function(t) {
                    var n = t.getProgressive(),
                        r = t.uid;
                    i.set(r, {
                        id: r,
                        head: null,
                        tail: null,
                        threshold: t.getProgressiveThreshold(),
                        progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
                        blockIndex: -1,
                        step: Math.round(n || 700),
                        count: 0
                    }), A(e, t, t.dataTask)
                }))
            }, g.prepareStageTasks = function() {
                var t = this._stageTaskMap,
                    e = this.ecInstance.getModel(),
                    i = this.api;
                r(this._allHandlers, (function(n) {
                    var r = t.get(n.uid) || t.set(n.uid, []);
                    n.reset && function(t, e, i, n, r) {
                        var a = i.seriesTaskMap || (i.seriesTaskMap = s()),
                            o = e.seriesType,
                            l = e.getTargetSeries;

                        function c(i) {
                            var o = i.uid,
                                s = a.get(o) || a.set(o, u({
                                    plan: S,
                                    reset: C,
                                    count: I
                                }));
                            s.context = {
                                model: i,
                                ecModel: n,
                                api: r,
                                useClearVisual: e.isVisual && !e.isLayout,
                                plan: e.plan,
                                reset: e.reset,
                                scheduler: t
                            }, A(t, i, s)
                        }
                        e.createOnAllSeries ? n.eachRawSeries(c) : o ? n.eachRawSeriesByType(o, c) : l && l(n, r).each(c);
                        var h = t._pipelineMap;
                        a.each((function(t, e) {
                            h.get(e) || (t.dispose(), a.removeKey(e))
                        }))
                    }(this, n, r, e, i), n.overallReset && y(this, n, r, e, i)
                }), this)
            }, g.prepareView = function(t, e, i, n) {
                var r = t.renderTask,
                    a = r.context;
                a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, A(this, e, r)
            }, g.performDataProcessorTasks = function(t, e) {
                v(this, this._dataProcessorHandlers, t, e, {
                    block: !0
                })
            }, g.performVisualTasks = function(t, e, i) {
                v(this, this._visualHandlers, t, e, i)
            }, g.performSeriesTasks = function(t) {
                var e;
                t.eachSeries((function(t) {
                    e |= t.dataTask.perform()
                })), this.unfinished |= e
            }, g.plan = function() {
                this._pipelineMap.each((function(t) {
                    var e = t.tail;
                    do {
                        if (e.__block) {
                            t.blockIndex = e.__idxInPipeline;
                            break
                        }
                        e = e.getUpstream()
                    } while (e)
                }))
            };
            var m = g.updatePayload = function(t, e) {
                "remain" !== e && (t.context.payload = e)
            };

            function y(t, e, i, n, a) {
                var o = i.overallTask = i.overallTask || u({
                    reset: x
                });
                o.context = {
                    ecModel: n,
                    api: a,
                    overallReset: e.overallReset,
                    scheduler: t
                };
                var l = o.agentStubMap = o.agentStubMap || s(),
                    c = e.seriesType,
                    h = e.getTargetSeries,
                    d = !0,
                    f = e.modifyOutputEnd;

                function p(e) {
                    var i = e.uid,
                        n = l.get(i);
                    n || (n = l.set(i, u({
                        reset: _,
                        onDirty: w
                    })), o.dirty()), n.context = {
                        model: e,
                        overallProgress: d,
                        modifyOutputEnd: f
                    }, n.agent = o, n.__block = d, A(t, e, n)
                }
                c ? n.eachRawSeriesByType(c, p) : h ? h(n, a).each(p) : (d = !1, r(n.getSeries(), p));
                var g = t._pipelineMap;
                l.each((function(t, e) {
                    g.get(e) || (t.dispose(), o.dirty(), l.removeKey(e))
                }))
            }

            function x(t) {
                t.overallReset(t.ecModel, t.api, t.payload)
            }

            function _(t, e) {
                return t.overallProgress && b
            }

            function b() {
                this.agent.dirty(), this.getDownstream().dirty()
            }

            function w() {
                this.agent && this.agent.dirty()
            }

            function S(t) {
                return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
            }

            function C(t) {
                t.useClearVisual && t.data.clearAllVisual();
                var e = t.resetDefines = f(t.reset(t.model, t.ecModel, t.api, t.payload));
                return e.length > 1 ? a(e, (function(t, e) {
                    return T(e)
                })) : M
            }
            var M = T(0);

            function T(t) {
                return function(e, i) {
                    var n = i.data,
                        r = i.resetDefines[t];
                    if (r && r.dataEach)
                        for (var a = e.start; a < e.end; a++) r.dataEach(n, a);
                    else r && r.progress && r.progress(e, n)
                }
            }

            function I(t) {
                return t.data.count()
            }

            function A(t, e, i) {
                var n = e.uid,
                    r = t._pipelineMap.get(n);
                !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, i.__pipeline = r
            }

            function D(t) {
                k = null;
                try {
                    t(P, O)
                } catch (t) {}
                return k
            }
            p.wrapStageHandler = function(t, e) {
                return o(t) && (t = {
                    overallReset: t,
                    seriesType: D(t)
                }), t.uid = c("stageHandler"), e && (t.visualType = e), t
            };
            var k, P = {},
                O = {};

            function L(t, e) {
                for (var i in e.prototype) t[i] = l
            }
            L(P, h), L(O, d), P.eachSeriesByType = P.eachRawSeriesByType = function(t) {
                k = t
            }, P.eachComponent = function(t) {
                "series" === t.mainType && t.subType && (k = t.subType)
            };
            var E = p;
            t.exports = E
        },
        3905: function(t, e, i) {
            var n = i("b2de"),
                r = i("56b7"),
                a = i("81e8"),
                o = i("1f1f").getLayoutRect;
            r.extendComponentModel({
                type: "title",
                layoutMode: {
                    type: "box",
                    ignoreSize: !0
                },
                defaultOption: {
                    zlevel: 0,
                    z: 6,
                    show: !0,
                    text: "",
                    target: "blank",
                    subtext: "",
                    subtarget: "blank",
                    left: 0,
                    top: 0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "#ccc",
                    borderWidth: 0,
                    padding: 5,
                    itemGap: 10,
                    textStyle: {
                        fontSize: 18,
                        fontWeight: "bolder",
                        color: "#333"
                    },
                    subtextStyle: {
                        color: "#aaa"
                    }
                }
            }), r.extendComponentView({
                type: "title",
                render: function(t, e, i) {
                    if (this.group.removeAll(), t.get("show")) {
                        var r = this.group,
                            s = t.getModel("textStyle"),
                            l = t.getModel("subtextStyle"),
                            u = t.get("textAlign"),
                            c = n.retrieve2(t.get("textBaseline"), t.get("textVerticalAlign")),
                            h = new a.Text({
                                style: a.setTextStyle({}, s, {
                                    text: t.get("text"),
                                    textFill: s.getTextColor()
                                }, {
                                    disableBox: !0
                                }),
                                z2: 10
                            }),
                            d = h.getBoundingRect(),
                            f = t.get("subtext"),
                            p = new a.Text({
                                style: a.setTextStyle({}, l, {
                                    text: f,
                                    textFill: l.getTextColor(),
                                    y: d.height + t.get("itemGap"),
                                    textVerticalAlign: "top"
                                }, {
                                    disableBox: !0
                                }),
                                z2: 10
                            }),
                            g = t.get("link"),
                            v = t.get("sublink"),
                            m = t.get("triggerEvent", !0);
                        h.silent = !g && !m, p.silent = !v && !m, g && h.on("click", (function() {
                            window.open(g, "_" + t.get("target"))
                        })), v && p.on("click", (function() {
                            window.open(v, "_" + t.get("subtarget"))
                        })), h.eventData = p.eventData = m ? {
                            componentType: "title",
                            componentIndex: t.componentIndex
                        } : null, r.add(h), f && r.add(p);
                        var y = r.getBoundingRect(),
                            x = t.getBoxLayoutParams();
                        x.width = y.width, x.height = y.height;
                        var _ = o(x, {
                            width: i.getWidth(),
                            height: i.getHeight()
                        }, t.get("padding"));
                        u || ("middle" === (u = t.get("left") || t.get("right")) && (u = "center"), "right" === u ? _.x += _.width : "center" === u && (_.x += _.width / 2)), c || ("center" === (c = t.get("top") || t.get("bottom")) && (c = "middle"), "bottom" === c ? _.y += _.height : "middle" === c && (_.y += _.height / 2), c = c || "top"), r.attr("position", [_.x, _.y]);
                        var b = {
                            textAlign: u,
                            textVerticalAlign: c
                        };
                        h.setStyle(b), p.setStyle(b), y = r.getBoundingRect();
                        var w = _.margin,
                            S = t.getItemStyle(["color", "opacity"]);
                        S.fill = t.get("backgroundColor");
                        var C = new a.Rect({
                            shape: {
                                x: y.x - w[3],
                                y: y.y - w[0],
                                width: y.width + w[1] + w[3],
                                height: y.height + w[0] + w[2],
                                r: t.get("borderRadius")
                            },
                            style: S,
                            subPixelOptimize: !0,
                            silent: !0
                        });
                        r.add(C)
                    }
                }
            })
        },
        "3b07": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("56b7")),
                r = i("ace3"),
                a = n.extendComponentView({
                    type: "axis",
                    _axisPointer: null,
                    axisPointerClass: null,
                    render: function(t, e, i, n) {
                        this.axisPointerClass && r.fixValue(t), a.superApply(this, "render", arguments), o(this, t, e, i, n, !0)
                    },
                    updateAxisPointer: function(t, e, i, n, r) {
                        o(this, t, e, i, n, !1)
                    },
                    remove: function(t, e) {
                        var i = this._axisPointer;
                        i && i.remove(e), a.superApply(this, "remove", arguments)
                    },
                    dispose: function(t, e) {
                        s(this, e), a.superApply(this, "dispose", arguments)
                    }
                });

            function o(t, e, i, n, o, l) {
                var u = a.getAxisPointerClass(t.axisPointerClass);
                if (u) {
                    var c = r.getAxisPointerModel(e);
                    c ? (t._axisPointer || (t._axisPointer = new u)).render(e, c, n, l) : s(t, n)
                }
            }

            function s(t, e, i) {
                var n = t._axisPointer;
                n && n.dispose(e, i), t._axisPointer = null
            }
            var l = [];
            a.registerAxisPointerClass = function(t, e) {
                l[t] = e
            }, a.getAxisPointerClass = function(t) {
                return t && l[t]
            };
            var u = a;
            t.exports = u
        },
        "3b4b": function(t, e, i) {
            var n = i("d2f8"),
                r = i("a16b"),
                a = i("b2de"),
                o = i("0dfd");

            function s(t) {
                n.call(this, t)
            }
            s.prototype = {
                constructor: s,
                type: "image",
                brush: function(t, e) {
                    var i = this.style,
                        n = i.image;
                    i.bind(t, this, e);
                    var r = this._image = o.createOrUpdateImage(n, this._image, this, this.onload);
                    if (r && o.isImageReady(r)) {
                        var a = i.x || 0,
                            s = i.y || 0,
                            l = i.width,
                            u = i.height,
                            c = r.width / r.height;
                        if (null == l && null != u ? l = u * c : null == u && null != l ? u = l / c : null == l && null == u && (l = r.width, u = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
                            var h = i.sx || 0,
                                d = i.sy || 0;
                            t.drawImage(r, h, d, i.sWidth, i.sHeight, a, s, l, u)
                        } else if (i.sx && i.sy) {
                            var f = l - (h = i.sx),
                                p = u - (d = i.sy);
                            t.drawImage(r, h, d, f, p, a, s, l, u)
                        } else t.drawImage(r, a, s, l, u);
                        null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
                    }
                },
                getBoundingRect: function() {
                    var t = this.style;
                    return this._rect || (this._rect = new r(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
                }
            }, a.inherits(s, n);
            var l = s;
            t.exports = l
        },
        "3b71": function(t, e, i) {
            var n = i("3caf"),
                r = i("8eec"),
                a = n.extend({
                    type: "sector",
                    shape: {
                        cx: 0,
                        cy: 0,
                        r0: 0,
                        r: 0,
                        startAngle: 0,
                        endAngle: 2 * Math.PI,
                        clockwise: !0
                    },
                    brush: r(n.prototype.brush),
                    buildPath: function(t, e) {
                        var i = e.cx,
                            n = e.cy,
                            r = Math.max(e.r0 || 0, 0),
                            a = Math.max(e.r, 0),
                            o = e.startAngle,
                            s = e.endAngle,
                            l = e.clockwise,
                            u = Math.cos(o),
                            c = Math.sin(o);
                        t.moveTo(u * r + i, c * r + n), t.lineTo(u * a + i, c * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t.closePath()
                    }
                });
            t.exports = a
        },
        "3b8a": function(t, e, i) {
            var n = i("0127"),
                r = n.makeInner,
                a = n.normalizeToArray,
                o = r();
            var s = {
                clearColorPalette: function() {
                    o(this).colorIdx = 0, o(this).colorNameMap = {}
                },
                getColorFromPalette: function(t, e, i) {
                    var n = o(e = e || this),
                        r = n.colorIdx || 0,
                        s = n.colorNameMap = n.colorNameMap || {};
                    if (s.hasOwnProperty(t)) return s[t];
                    var l = a(this.get("color", !0)),
                        u = this.get("colorLayer", !0),
                        c = null != i && u ? function(t, e) {
                            for (var i = t.length, n = 0; n < i; n++)
                                if (t[n].length > e) return t[n];
                            return t[i - 1]
                        }(u, i) : l;
                    if ((c = c || l) && c.length) {
                        var h = c[r];
                        return t && (s[t] = h), n.colorIdx = (r + 1) % c.length, h
                    }
                }
            };
            t.exports = s
        },
        "3c57": function(t, e, i) {
            var n = i("b2de"),
                r = i("e62d0"),
                a = i("fab7"),
                o = i("8dab"),
                s = o.enableClassManagement,
                l = o.parseClassType,
                u = i("0127").makeInner,
                c = i("1f1f"),
                h = i("0520"),
                d = u(),
                f = r.extend({
                    type: "component",
                    id: "",
                    name: "",
                    mainType: "",
                    subType: "",
                    componentIndex: 0,
                    defaultOption: null,
                    ecModel: null,
                    dependentModels: [],
                    uid: null,
                    layoutMode: null,
                    $constructor: function(t, e, i, n) {
                        r.call(this, t, e, i, n), this.uid = a.getUID("ec_cpt_model")
                    },
                    init: function(t, e, i, n) {
                        this.mergeDefaultAndTheme(t, i)
                    },
                    mergeDefaultAndTheme: function(t, e) {
                        var i = this.layoutMode,
                            r = i ? c.getLayoutParams(t) : {},
                            a = e.getTheme();
                        n.merge(t, a.get(this.mainType)), n.merge(t, this.getDefaultOption()), i && c.mergeLayoutParam(t, r, i)
                    },
                    mergeOption: function(t, e) {
                        n.merge(this.option, t, !0);
                        var i = this.layoutMode;
                        i && c.mergeLayoutParam(this.option, t, i)
                    },
                    optionUpdated: function(t, e) {},
                    getDefaultOption: function() {
                        var t = d(this);
                        if (!t.defaultOption) {
                            for (var e = [], i = this.constructor; i;) {
                                var r = i.prototype.defaultOption;
                                r && e.push(r), i = i.superClass
                            }
                            for (var a = {}, o = e.length - 1; o >= 0; o--) a = n.merge(a, e[o], !0);
                            t.defaultOption = a
                        }
                        return t.defaultOption
                    },
                    getReferringComponents: function(t) {
                        return this.ecModel.queryComponents({
                            mainType: t,
                            index: this.get(t + "Index", !0),
                            id: this.get(t + "Id", !0)
                        })
                    }
                });
            s(f, {
                registerWhenExtend: !0
            }), a.enableSubTypeDefaulter(f), a.enableTopologicalTravel(f, (function(t) {
                var e = [];
                return n.each(f.getClassesByMainType(t), (function(t) {
                    e = e.concat(t.prototype.dependencies || [])
                })), e = n.map(e, (function(t) {
                    return l(t).main
                })), "dataset" !== t && n.indexOf(e, "dataset") <= 0 && e.unshift("dataset"), e
            })), n.mixin(f, h);
            var p = f;
            t.exports = p
        },
        "3caf": function(t, e, i) {
            var n = i("d2f8"),
                r = i("b2de"),
                a = i("e27b"),
                o = i("30ca"),
                s = i("4e20").prototype.getCanvasPattern,
                l = Math.abs,
                u = new a(!0);

            function c(t) {
                n.call(this, t), this.path = null
            }
            c.prototype = {
                constructor: c,
                type: "path",
                __dirtyPath: !0,
                strokeContainThreshold: 5,
                segmentIgnoreThreshold: 0,
                subPixelOptimize: !1,
                brush: function(t, e) {
                    var i, n = this.style,
                        r = this.path || u,
                        a = n.hasStroke(),
                        o = n.hasFill(),
                        l = n.fill,
                        c = n.stroke,
                        h = o && !!l.colorStops,
                        d = a && !!c.colorStops,
                        f = o && !!l.image,
                        p = a && !!c.image;
                    n.bind(t, this, e), this.setTransform(t), this.__dirty && (h && (i = i || this.getBoundingRect(), this._fillGradient = n.getGradient(t, l, i)), d && (i = i || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, c, i))), h ? t.fillStyle = this._fillGradient : f && (t.fillStyle = s.call(l, t)), d ? t.strokeStyle = this._strokeGradient : p && (t.strokeStyle = s.call(c, t));
                    var g = n.lineDash,
                        v = n.lineDashOffset,
                        m = !!t.setLineDash,
                        y = this.getGlobalScale();
                    if (r.setScale(y[0], y[1], this.segmentIgnoreThreshold), this.__dirtyPath || g && !m && a ? (r.beginPath(t), g && !m && (r.setLineDash(g), r.setLineDashOffset(v)), this.buildPath(r, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o)
                        if (null != n.fillOpacity) {
                            var x = t.globalAlpha;
                            t.globalAlpha = n.fillOpacity * n.opacity, r.fill(t), t.globalAlpha = x
                        } else r.fill(t);
                    g && m && (t.setLineDash(g), t.lineDashOffset = v), a && (null != n.strokeOpacity ? (x = t.globalAlpha, t.globalAlpha = n.strokeOpacity * n.opacity, r.stroke(t), t.globalAlpha = x) : r.stroke(t)), g && m && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
                },
                buildPath: function(t, e, i) {},
                createPathProxy: function() {
                    this.path = new a
                },
                getBoundingRect: function() {
                    var t = this._rect,
                        e = this.style,
                        i = !t;
                    if (i) {
                        var n = this.path;
                        n || (n = this.path = new a), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                    }
                    if (this._rect = t, e.hasStroke()) {
                        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                        if (this.__dirty || i) {
                            r.copy(t);
                            var o = e.lineWidth,
                                s = e.strokeNoScale ? this.getLineScale() : 1;
                            e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), s > 1e-10 && (r.width += o / s, r.height += o / s, r.x -= o / s / 2, r.y -= o / s / 2)
                        }
                        return r
                    }
                    return t
                },
                contain: function(t, e) {
                    var i = this.transformCoordToLocal(t, e),
                        n = this.getBoundingRect(),
                        r = this.style;
                    if (t = i[0], e = i[1], n.contain(t, e)) {
                        var a = this.path.data;
                        if (r.hasStroke()) {
                            var s = r.lineWidth,
                                l = r.strokeNoScale ? this.getLineScale() : 1;
                            if (l > 1e-10 && (r.hasFill() || (s = Math.max(s, this.strokeContainThreshold)), o.containStroke(a, s / l, t, e))) return !0
                        }
                        if (r.hasFill()) return o.contain(a, t, e)
                    }
                    return !1
                },
                dirty: function(t) {
                    null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
                },
                animateShape: function(t) {
                    return this.animate("shape", t)
                },
                attrKV: function(t, e) {
                    "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : n.prototype.attrKV.call(this, t, e)
                },
                setShape: function(t, e) {
                    var i = this.shape;
                    if (i) {
                        if (r.isObject(t))
                            for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                        else i[t] = e;
                        this.dirty(!0)
                    }
                    return this
                },
                getLineScale: function() {
                    var t = this.transform;
                    return t && l(t[0] - 1) > 1e-10 && l(t[3] - 1) > 1e-10 ? Math.sqrt(l(t[0] * t[3] - t[2] * t[1])) : 1
                }
            }, c.extend = function(t) {
                var e = function(e) {
                    c.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                    var i = t.shape;
                    if (i) {
                        this.shape = this.shape || {};
                        var n = this.shape;
                        for (var r in i) !n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r])
                    }
                    t.init && t.init.call(this, e)
                };
                for (var i in r.inherits(e, c), t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
                return e
            }, r.inherits(c, n);
            var h = c;
            t.exports = h
        },
        "3ce9": function(t, e, i) {
            var n = i("b2de"),
                r = n.createHashMap,
                a = n.isObject,
                o = n.map;

            function s(t) {
                this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
            }
            s.createByAxisModel = function(t) {
                var e = t.option,
                    i = e.data,
                    n = i && o(i, c);
                return new s({
                    categories: n,
                    needCollect: !n,
                    deduplication: !1 !== e.dedplication
                })
            };
            var l = s.prototype;

            function u(t) {
                return t._map || (t._map = r(t.categories))
            }

            function c(t) {
                return a(t) && null != t.value ? t.value : t + ""
            }
            l.getOrdinal = function(t) {
                return u(this).get(t)
            }, l.parseAndCollect = function(t) {
                var e, i = this._needCollect;
                if ("string" != typeof t && !i) return t;
                if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
                var n = u(this);
                return null == (e = n.get(t)) && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN), e
            };
            var h = s;
            t.exports = h
        },
        "3efa": function(t, e) {
            var i = Array.prototype.slice,
                n = function(t) {
                    this._$handlers = {}, this._$eventProcessor = t
                };

            function r(t, e, i, n, r, a) {
                var o = t._$handlers;
                if ("function" == typeof i && (r = n, n = i, i = null), !n || !e) return t;
                i = function(t, e) {
                    var i = t._$eventProcessor;
                    return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e
                }(t, i), o[e] || (o[e] = []);
                for (var s = 0; s < o[e].length; s++)
                    if (o[e][s].h === n) return t;
                var l = {
                        h: n,
                        one: a,
                        query: i,
                        ctx: r || t,
                        callAtLast: n.zrEventfulCallAtLast
                    },
                    u = o[e].length - 1,
                    c = o[e][u];
                return c && c.callAtLast ? o[e].splice(u, 0, l) : o[e].push(l), t
            }
            n.prototype = {
                constructor: n,
                one: function(t, e, i, n) {
                    return r(this, t, e, i, n, !0)
                },
                on: function(t, e, i, n) {
                    return r(this, t, e, i, n, !1)
                },
                isSilent: function(t) {
                    var e = this._$handlers;
                    return !e[t] || !e[t].length
                },
                off: function(t, e) {
                    var i = this._$handlers;
                    if (!t) return this._$handlers = {}, this;
                    if (e) {
                        if (i[t]) {
                            for (var n = [], r = 0, a = i[t].length; r < a; r++) i[t][r].h !== e && n.push(i[t][r]);
                            i[t] = n
                        }
                        i[t] && 0 === i[t].length && delete i[t]
                    } else delete i[t];
                    return this
                },
                trigger: function(t) {
                    var e = this._$handlers[t],
                        n = this._$eventProcessor;
                    if (e) {
                        var r = arguments,
                            a = r.length;
                        a > 3 && (r = i.call(r, 1));
                        for (var o = e.length, s = 0; s < o;) {
                            var l = e[s];
                            if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
                            else {
                                switch (a) {
                                    case 1:
                                        l.h.call(l.ctx);
                                        break;
                                    case 2:
                                        l.h.call(l.ctx, r[1]);
                                        break;
                                    case 3:
                                        l.h.call(l.ctx, r[1], r[2]);
                                        break;
                                    default:
                                        l.h.apply(l.ctx, r)
                                }
                                l.one ? (e.splice(s, 1), o--) : s++
                            }
                        }
                    }
                    return n && n.afterTrigger && n.afterTrigger(t), this
                },
                triggerWithContext: function(t) {
                    var e = this._$handlers[t],
                        n = this._$eventProcessor;
                    if (e) {
                        var r = arguments,
                            a = r.length;
                        a > 4 && (r = i.call(r, 1, r.length - 1));
                        for (var o = r[r.length - 1], s = e.length, l = 0; l < s;) {
                            var u = e[l];
                            if (n && n.filter && null != u.query && !n.filter(t, u.query)) l++;
                            else {
                                switch (a) {
                                    case 1:
                                        u.h.call(o);
                                        break;
                                    case 2:
                                        u.h.call(o, r[1]);
                                        break;
                                    case 3:
                                        u.h.call(o, r[1], r[2]);
                                        break;
                                    default:
                                        u.h.apply(o, r)
                                }
                                u.one ? (e.splice(l, 1), s--) : l++
                            }
                        }
                    }
                    return n && n.afterTrigger && n.afterTrigger(t), this
                }
            };
            var a = n;
            t.exports = a
        },
        "3f2c": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = (i("4160"), i("5530")),
                r = i("323e"),
                a = i.n(r),
                o = i("2f62"),
                s = i("41bb");

            function l(t) {
                return Object(s.a)({
                    url: "dashboard",
                    method: "get",
                    params: t
                })
            }
            var u = i("26fe"),
                c = i("1045"),
                h = i("56b7"),
                d = i.n(h);
            i("9cef"), i("a7a0"), i("3905"), i("457d"), i("965c"), i("64eb"), i("ac1f"), i("5319"), i("53ca");
            var f = function(t) {
                    t.resizeHandler = function(t, e, i) {
                        var n, r, a, o, s, l = function l() {
                            var u = +new Date - o;
                            u < e && u > 0 ? n = setTimeout(l, e - u) : (n = null, i || (s = t.apply(a, r), n || (a = r = null)))
                        };
                        return function() {
                            for (var r = arguments.length, u = new Array(r), c = 0; c < r; c++) u[c] = arguments[c];
                            a = this, o = +new Date;
                            var h = i && !n;
                            return n || (n = setTimeout(l, e)), h && (s = t.apply(a, u), a = u = null), s
                        }
                    }((function() {
                        t.chart && t.chart.resize()
                    }), 500)
                },
                p = function(t) {
                    t.chart && (t.chart.dispose(), t.chart = null)
                },
                g = function(t) {
                    return parseInt(t) !== t ? t : (t / 100).toFixed(2)
                },
                v = {
                    name: "PayPieChart",
                    props: {
                        className: {
                            type: String,
                            default: "chart"
                        },
                        width: {
                            type: String,
                            default: "100%"
                        },
                        height: {
                            type: String,
                            default: "240px"
                        },
                        autoResize: {
                            type: Boolean,
                            default: !0
                        },
                        Statistic: {}
                    },
                    data: function() {
                        return {
                            chart: null
                        }
                    },
                    computed: {
                        pieData: function() {
                            var t = [],
                                e = [],
                                i = [],
                                n = this.Statistic.data,
                                r = this.Statistic.limit ? this.Statistic.limit : 6,
                                a = 0;
                            for (var o in n)
                                if (n.hasOwnProperty(o) && (t.push(o), i.push({
                                        name: o,
                                        value: n[o][0]
                                    }), e.push({
                                        name: o,
                                        value: g(n[o][1])
                                    })), ++a >= r) break;
                            return {
                                xLabels: t,
                                sumData: e,
                                countData: i
                            }
                        }
                    },
                    mounted: function() {
                        f(this)
                    },
                    beforeDestroy: function() {
                        p(this)
                    },
                    methods: {
                        initChart: function() {
                            this.chart = d.a.init(this.$el, "light"), this.chart.setOption({
                                tooltip: {
                                    trigger: "item",
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    orient: "vertical",
                                    x: "left",
                                    data: this.pieData.xLabels
                                },
                                calculable: !0,
                                series: [{
                                    name: "支付金额",
                                    type: "pie",
                                    radius: [0, "40%"],
                                    label: {
                                        normal: {
                                            show: !1
                                        },
                                        emphasis: {
                                            show: !1
                                        }
                                    },
                                    data: this.pieData.sumData
                                }, {
                                    name: "支付笔数",
                                    type: "pie",
                                    radius: ["70%", "90%"],
                                    label: {
                                        normal: {
                                            show: !1
                                        },
                                        emphasis: {
                                            show: !1
                                        }
                                    },
                                    data: this.pieData.countData
                                }]
                            })
                        },
                        updateChart: function() {
                            this.chart ? (this.chart.setOption({
                                legend: {
                                    data: this.pieData.xLabels
                                },
                                series: [{
                                    data: this.pieData.sumData
                                }, {
                                    data: this.pieData.countData
                                }]
                            }), this.chart.resize()) : this.initChart()
                        }
                    }
                },
                m = i("2877"),
                y = Object(m.a)(v, (function() {
                    var t = this,
                        e = t.$createElement;
                    return (t._self._c || e)("div", {
                        class: t.className,
                        style: {
                            height: t.height,
                            width: t.width
                        }
                    })
                }), [], !1, null, null, null).exports,
                x = (i("76bd"), {
                    name: "OrderLineChart",
                    props: {
                        className: {
                            type: String,
                            default: "chart"
                        },
                        height: {
                            type: String,
                            default: "240px"
                        },
                        autoResize: {
                            type: Boolean,
                            default: !0
                        },
                        data: {
                            type: Object
                        }
                    },
                    data: function() {
                        return {
                            chart: null
                        }
                    },
                    computed: {
                        ChartData: function() {
                            var t = [],
                                e = [],
                                i = [],
                                n = [],
                                r = this.data.data,
                                a = new Date;
                            for (30 === this.data.day ? a.setMonth(a.getMonth() - 1) : a.setDate(a.getDate() - this.data.day + 1); a <= Date.now(); a.setDate(a.getDate() + 1)) {
                                var o = a.format("yyyy-MM-dd");
                                t.push(a.format("MM-dd")), r && r.hasOwnProperty(o) ? (e.push(r[o][0]), i.push(g(r[o][1])), n.push(g(r[o][2]))) : (e.push(0), i.push(g(0)), n.push(g(0)))
                            }
                            return {
                                x: t,
                                number: e,
                                paid: i,
                                profit: n
                            }
                        }
                    },
                    mounted: function() {
                        f(this)
                    },
                    beforeDestroy: function() {
                        p(this)
                    },
                    methods: {
                        initChart: function() {
                            this.chart = d.a.init(this.$el, "macarons"), this.chart.setOption({
                                title: {
                                    text: "最近" + (30 === this.data.day ? "1个月" : this.data.day + "日") + "趋势",
                                    textStyle: {
                                        fontSize: 12,
                                        fontWeight: "light"
                                    }
                                },
                                grid: {
                                    top: 0,
                                    left: 0,
                                    right: 16,
                                    bottom: 0,
                                    containLabel: !0
                                },
                                legend: {
                                    left: 88,
                                    data: [{
                                        name: "成交笔数 (笔)",
                                        icon: "rect",
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: "light"
                                        }
                                    }, {
                                        name: "成交金额 (元)",
                                        icon: "rect",
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: "light"
                                        }
                                    }, {
                                        name: "利润金额 (元)",
                                        icon: "rect",
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: "light"
                                        }
                                    }],
                                    selectedMode: "single"
                                },
                                tooltip: {
                                    trigger: "axis",
                                    backgroundColor: "hsla(0,0%,100%,.9)",
                                    extraCssText: "box-shadow: 0 4px 16px 0 rgba(97,131,155,.15);padding: 10px 10px 6px;",
                                    formatter: '<span class="charts-tooltip-name">{a}</span><br/><span class="charts-tooltip-value">{c}</span><br/><span class="charts-tooltip-title">{b}</span>',
                                    axisPointer: {
                                        type: "line"
                                    }
                                },
                                xAxis: {
                                    data: this.ChartData.x,
                                    boundaryGap: !1,
                                    splitLine: {
                                        show: !1
                                    }
                                },
                                yAxis: {
                                    show: !1,
                                    splitLine: {
                                        show: !0
                                    }
                                },
                                series: [{
                                    name: "成交笔数 (笔)",
                                    smooth: !0,
                                    type: "line",
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(2, 197, 233, 0.2)",
                                            lineStyle: {
                                                color: "rgba(2, 197, 233, 0.2)"
                                            },
                                            areaStyle: {
                                                color: "rgba(99,194,255, 0.6)"
                                            }
                                        }
                                    },
                                    data: this.ChartData.number,
                                    animationDuration: 1e3,
                                    animationEasing: "quadraticOut"
                                }, {
                                    name: "成交金额 (元)",
                                    smooth: !0,
                                    type: "line",
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(2, 197, 233, 0.2)",
                                            lineStyle: {
                                                color: "rgba(2, 197, 233, 0.2)"
                                            },
                                            areaStyle: {
                                                color: "rgba(99,194,255, 0.6)"
                                            }
                                        }
                                    },
                                    data: this.ChartData.paid,
                                    animationDuration: 1e3,
                                    animationEasing: "quadraticOut"
                                }, {
                                    name: "利润金额 (元)",
                                    smooth: !0,
                                    type: "line",
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(2, 197, 233, 0.2)",
                                            lineStyle: {
                                                color: "rgba(2, 197, 233, 0.2)"
                                            },
                                            areaStyle: {
                                                color: "rgba(99,194,255, 0.6)"
                                            }
                                        }
                                    },
                                    data: this.ChartData.profit,
                                    animationDuration: 1e3,
                                    animationEasing: "quadraticOut"
                                }]
                            }, !0)
                        },
                        updateChart: function() {
                            this.chart ? (this.chart.setOption({
                                title: {
                                    text: "最近" + (30 === this.data.day ? "1个月" : this.data.day + "日") + "趋势"
                                },
                                xAxis: {
                                    data: this.ChartData.x
                                },
                                series: [{
                                    data: this.ChartData.number
                                }, {
                                    data: this.ChartData.paid
                                }, {
                                    data: this.ChartData.profit
                                }]
                            }), this.chart.resize()) : this.initChart()
                        }
                    }
                }),
                _ = {
                    name: "HomeOrderChart",
                    components: {
                        OrderLineChart: (i("ff76"), Object(m.a)(x, (function() {
                            var t = this,
                                e = t.$createElement;
                            return (t._self._c || e)("div", {
                                class: t.className,
                                style: {
                                    height: t.height
                                }
                            })
                        }), [], !1, null, null, null)).exports
                    },
                    props: {
                        userInfo: {},
                        data: {},
                        dashboard: {}
                    },
                    data: function() {
                        return {
                            activeName: "order"
                        }
                    },
                    mounted: function() {},
                    methods: {
                        resizeHandler: function() {
                            this.$refs.chart.resizeHandler()
                        },
                        updateChart: function() {
                            this.$refs.chart.updateChart()
                        }
                    }
                },
                b = (i("2641"), Object(m.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("el-card", {
                        staticClass: "my-card home-report"
                    }, [t._t("header"), i("el-tabs", {
                        attrs: {
                            type: "border-card"
                        },
                        model: {
                            value: t.activeName,
                            callback: function(e) {
                                t.activeName = e
                            },
                            expression: "activeName"
                        }
                    }, [i("el-tab-pane", {
                        attrs: {
                            name: "order"
                        }
                    }, [i("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [i("i", {
                        staticClass: "el-icon-s-data"
                    }), t._v(" 今日交易")]), i("div", {
                        staticClass: "body-amount"
                    }, [i("div", {
                        staticClass: "body-balance",
                        staticStyle: {
                            flex: "0.7"
                        }
                    }, [i("div", {
                        staticClass: "amount-title"
                    }, [t._v("成交 (笔)")]), i("div", {
                        staticClass: "balance-money"
                    }, [t._v(t._s(t.dashboard.today.count))])]), i("div", {
                        staticClass: "body-balance"
                    }, [i("div", {
                        staticClass: "amount-title"
                    }, [t._v("成交 (元)")]), i("div", {
                        staticClass: "balance-money"
                    }, [t._v(t._s(t._f("moneyFilter")(t.dashboard.today.paid)))])]), i("div", {
                        staticClass: "body-balance"
                    }, [i("div", {
                        staticClass: "amount-title"
                    }, [t._v("利润 (元)")]), i("div", {
                        staticClass: "balance-money"
                    }, [t._v(t._s(t._f("moneyFilter")(t.dashboard.today.profit)))])])])]), i("el-tab-pane", {
                        attrs: {
                            name: "income",
                            label: "昨日"
                        }
                    }, [i("div", {
                        staticClass: "body-amount"
                    }, [i("div", {
                        staticClass: "body-balance",
                        staticStyle: {
                            flex: "0.7"
                        }
                    }, [i("div", {
                        staticClass: "amount-title"
                    }, [t._v("成交 (笔)")]), i("div", {
                        staticClass: "balance-money"
                    }, [t._v(t._s(t.dashboard.yesterday.count))])]), i("div", {
                        staticClass: "body-balance"
                    }, [i("div", {
                        staticClass: "amount-title"
                    }, [t._v("成交 (元)")]), i("div", {
                        staticClass: "balance-money"
                    }, [t._v(t._s(t._f("moneyFilter")(t.dashboard.yesterday.paid)))])]), i("div", {
                        staticClass: "body-balance"
                    }, [i("div", {
                        staticClass: "amount-title"
                    }, [t._v("利润 (元)")]), i("div", {
                        staticClass: "balance-money"
                    }, [t._v(t._s(t._f("moneyFilter")(t.dashboard.yesterday.profit)))])])])])], 1), i("div", {
                        staticStyle: {
                            margin: "0 8px 8px 0"
                        }
                    }, [i("order-line-chart", {
                        ref: "chart",
                        attrs: {
                            data: t.data,
                            height: "170px"
                        }
                    })], 1)], 2)
                }), [], !1, null, null, null)).exports,
                w = {
                    name: "HomeAccount",
                    props: {
                        userInfo: {},
                        loginInfo: {},
                        _project: {
                            default: "admin_free"
                        }
                    },
                    data: function() {
                        return {
                            showVerifyRoute: !(!window.config.user_verify || !window.config.user_verify.open && 0 !== window.config.user_verify.show_in_withdraw)
                        }
                    }
                },
                S = (i("bdc8"), Object(m.a)(w, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("el-card", {
                        staticClass: "my-card"
                    }, [i("div", {
                        staticClass: "home-account-top"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "label"
                    }, [t._v("店铺名称：")]), i("div", {
                        staticClass: "value"
                    }, [t._v(t._s(t.userInfo.shop_name))])]), i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "label"
                    }, [t._v("登录账号：")]), i("div", {
                        staticClass: "value"
                    }, [t._v(t._s(t.userInfo.email))])]), i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "label"
                    }, [t._v("最近登录：")]), i("div", {
                        staticClass: "value"
                    }, [t._v(t._s(t.loginInfo ? t.loginInfo.created_at : "暂无记录"))])]), i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "label"
                    }, [t._v("登录地址：")]), i("div", {
                        staticClass: "value"
                    }, [t._v(" " + t._s(t.loginInfo ? t.loginInfo.ip : "暂无记录") + " "), i("router-link", {
                        staticClass: "el-button--text",
                        staticStyle: {
                            "margin-left": "8px"
                        },
                        attrs: {
                            to: "/" + ("merchant" === t._project ? "m/shop" : "admin/system") + "/logs"
                        }
                    }, [t._v("查看更多")])], 1)]), i("div", {
                        staticClass: "action"
                    }, ["merchant" === t._project ? i("el-dropdown", {
                        attrs: {
                            trigger: "click",
                            "show-timeout": 0,
                            "hide-timeout": 0,
                            placement: "bottom-start"
                        }
                    }, [i("el-button", [t._v(" 账户管理"), i("i", {
                        staticClass: "el-icon-arrow-down el-icon--right"
                    })]), i("el-dropdown-menu", {
                        staticClass: "home-top-info-el-dropdown-menu",
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [i("router-link", {
                        attrs: {
                            to: "/m/shop/info"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "regular/info-circle"
                        }
                    }), t._v(" 编辑信息 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/m/user/security"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "regular/shield-alt"
                        }
                    }), t._v(" 修改密码 ")], 1)], 1), t.showVerifyRoute ? i("router-link", {
                        attrs: {
                            to: "/m/user/verify"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "id-card"
                        }
                    }), t._v(" 实名认证 ")], 1)], 1) : t._e()], 1)], 1) : t._e(), "admin_free" === t._project ? i("el-dropdown", {
                        attrs: {
                            trigger: "click",
                            "show-timeout": 0,
                            "hide-timeout": 0,
                            placement: "bottom-start"
                        }
                    }, [i("el-button", [t._v(" 网站设置"), i("i", {
                        staticClass: "el-icon-arrow-down el-icon--right"
                    })]), i("el-dropdown-menu", {
                        staticClass: "home-top-info-el-dropdown-menu",
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [i("router-link", {
                        attrs: {
                            to: "/admin/system/set?tab=info"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "regular/info-circle"
                        }
                    }), t._v(" 常规设置 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/admin/system/set?tab=theme"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "cog"
                        }
                    }), t._v(" 主题设置 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/admin/system/set?tab=order"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "bars"
                        }
                    }), t._v(" 订单设置 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/admin/system/set?tab=email"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "regular/envelope"
                        }
                    }), t._v(" 邮件设置 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/admin/system/set?tab=vcode"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "cog"
                        }
                    }), t._v(" 验证码 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/admin/system/set?tab=storage"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "light/file-alt"
                        }
                    }), t._v(" 文件储存 ")], 1)], 1), i("router-link", {
                        attrs: {
                            to: "/admin/system/security"
                        }
                    }, [i("el-dropdown-item", [i("icon", {
                        attrs: {
                            name: "regular/shield-alt"
                        }
                    }), t._v(" 修改密码 ")], 1)], 1)], 1)], 1) : t._e()], 1)])])
                }), [], !1, null, "23ad6455", null)).exports,
                C = {
                    components: {
                        HomeLink: i("5ee5").default,
                        HomeOrderChart: b,
                        HomeAccount: S,
                        payPieChart: y
                    },
                    data: function() {
                        return {
                            processBar: {
                                load: 0,
                                need: 0
                            },
                            dashboard: {
                                today: {
                                    count: 0,
                                    income: 0,
                                    profit: 0
                                },
                                yesterday: {
                                    count: 0,
                                    income: 0,
                                    profit: 0
                                },
                                complaints_count: 0,
                                complaints_24hours: 0,
                                need_ship_count: 0,
                                login: {
                                    created_at: "加载中",
                                    ip: "加载中"
                                }
                            },
                            orderStat: {
                                day: 7,
                                data: []
                            },
                            payStat: {
                                day: 7,
                                data: {}
                            }
                        }
                    },
                    computed: Object(n.a)({}, Object(o.mapGetters)(["userInfo"])),
                    watch: {
                        processBar: {
                            handler: function(t) {
                                t.load < t.need ? a.a.isStarted() ? a.a.inc() : a.a.start() : a.a.done()
                            },
                            deep: !0
                        }
                    },
                    mounted: function() {
                        window.bus.$on("app-resize", this.resizeHandler), this.initData()
                    },
                    beforeDestroy: function() {
                        window.bus.$off("app-resize", this.resizeHandler)
                    },
                    methods: {
                        resizeHandler: function() {
                            var t = this;
                            ["order-chart", "pay-pie-chart"].forEach((function(e) {
                                t.$refs[e] && t.$refs[e].resizeHandler()
                            }))
                        },
                        initData: function() {
                            var t = this;
                            this.processBar.need++, l().then((function(e) {
                                Object.assign(t.dashboard, e.data), t.$nextTick((function() {
                                    t.getOrderStat(), t.getPayStat()
                                })), t.processBar.load++
                            }))
                        },
                        reloadDashBoard: function() {
                            var t = this;
                            this.processBar.need++, l().then((function(e) {
                                Object.assign(t.dashboard, e.data), t.processBar.load++
                            }))
                        },
                        getOrderStat: function() {
                            var t = this;
                            this.processBar.need++, Object(c.m)({
                                day: this.orderStat.day
                            }).then((function(e) {
                                t.orderStat.data = e.data, t.$nextTick((function() {
                                    t.$refs["order-chart"] && t.$refs["order-chart"].updateChart()
                                })), t.processBar.load++
                            }))
                        },
                        getPayStat: function() {
                            var t = this;
                            this.processBar.need++, Object(u.b)({
                                day: this.payStat.day
                            }).then((function(e) {
                                t.payStat.data = e.data, t.$nextTick((function() {
                                    t.$refs["pay-pie-chart"] && t.$refs["pay-pie-chart"].updateChart()
                                })), t.processBar.load++
                            }))
                        }
                    }
                },
                M = (i("7103"), i("0186"), Object(m.a)(C, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        ref: "container",
                        staticClass: "app-container"
                    }, [i("el-row", {
                        staticClass: "home-row row-reverse",
                        attrs: {
                            type: "flex"
                        }
                    }, [t.dashboard.complaints_count ? i("el-col", {
                        staticClass: "home-notice-2",
                        attrs: {
                            span: 24
                        }
                    }, [i("el-alert", {
                        staticClass: "my-card todo-overview",
                        attrs: {
                            title: "投诉通知",
                            type: "warning"
                        }
                    }, [i("div", [i("span", {
                        staticClass: "info"
                    }, [t._v("目前您有 "), i("span", {
                        staticClass: "red-text"
                    }, [t._v(t._s(t.dashboard.complaints_count))]), t._v(" 条投诉待处理， ")]), i("span", {
                        staticClass: "info"
                    }, [t._v("其中 "), i("span", {
                        staticClass: "red-text"
                    }, [t._v(t._s(t.dashboard.complaints_24hours))]), t._v(" 条已超过24小时 ")]), i("router-link", {
                        staticClass: "info",
                        staticStyle: {
                            color: "#409EFF"
                        },
                        attrs: {
                            to: "/admin/shop/complaint"
                        }
                    }, [t._v("去处理")])], 1)])], 1) : t._e(), t.dashboard.need_ship_count ? i("el-col", {
                        staticClass: "home-notice-2",
                        attrs: {
                            span: 24
                        }
                    }, [i("el-alert", {
                        staticClass: "my-card todo-overview",
                        attrs: {
                            title: "未发货订单通知",
                            type: "warning"
                        }
                    }, [i("div", [i("span", {
                        staticClass: "info"
                    }, [t._v("目前您有 "), i("span", {
                        staticClass: "red-text"
                    }, [t._v(t._s(t.dashboard.need_ship_count))]), t._v(" 个订单由于库存不足没有发货， ")]), i("router-link", {
                        staticClass: "info",
                        staticStyle: {
                            color: "#409EFF"
                        },
                        attrs: {
                            to: "/admin/order/list?status=paid"
                        }
                    }, [t._v("去处理")])], 1)])], 1) : t._e(), i("el-col", {
                        staticClass: "col-home-right",
                        attrs: {
                            xl: 6,
                            lg: 12
                        }
                    }, [i("el-row", {
                        staticClass: "home-row",
                        attrs: {
                            type: "flex"
                        }
                    }, [i("el-col", {
                        staticClass: "col-home-account",
                        attrs: {
                            lg: 24,
                            md: 12,
                            xs: 24
                        }
                    }, [i("home-account", {
                        staticClass: "home-account",
                        attrs: {
                            userInfo: t.userInfo,
                            loginInfo: t.dashboard.login
                        }
                    })], 1), i("el-col", {
                        staticClass: "col-home-link",
                        attrs: {
                            lg: 24,
                            md: 12,
                            xs: 24
                        }
                    }, [i("home-link", {
                        staticClass: "home-link"
                    })], 1)], 1)], 1), i("el-col", {
                        staticClass: "col-home-left",
                        attrs: {
                            xl: 18,
                            lg: 12
                        }
                    }, [i("el-row", {
                        staticClass: "home-row",
                        attrs: {
                            type: "flex"
                        }
                    }, [t.dashboard.complaints_count ? i("el-col", {
                        staticClass: "home-notice-1",
                        attrs: {
                            span: 24
                        }
                    }, [i("el-alert", {
                        staticClass: "my-card todo-overview",
                        attrs: {
                            title: "投诉通知",
                            type: "warning"
                        }
                    }, [i("div", [i("span", {
                        staticClass: "info"
                    }, [t._v("目前您有 "), i("span", {
                        staticClass: "red-text"
                    }, [t._v(t._s(t.dashboard.complaints_count))]), t._v(" 条投诉待处理， ")]), i("span", {
                        staticClass: "info"
                    }, [t._v("其中 "), i("span", {
                        staticClass: "red-text"
                    }, [t._v(t._s(t.dashboard.complaints_24hours))]), t._v(" 条已超过24小时 ")]), i("router-link", {
                        staticClass: "info",
                        staticStyle: {
                            color: "#409EFF"
                        },
                        attrs: {
                            to: "/admin/shop/complaint"
                        }
                    }, [t._v("去处理")])], 1)])], 1) : t._e(), t.dashboard.need_ship_count ? i("el-col", {
                        staticClass: "home-notice-1",
                        attrs: {
                            span: 24
                        }
                    }, [i("el-alert", {
                        staticClass: "my-card todo-overview",
                        attrs: {
                            title: "未发货订单通知",
                            type: "warning"
                        }
                    }, [i("div", [i("span", {
                        staticClass: "info"
                    }, [t._v("目前您有 "), i("span", {
                        staticClass: "red-text"
                    }, [t._v(t._s(t.dashboard.need_ship_count))]), t._v(" 个订单由于库存不足没有发货， ")]), i("router-link", {
                        staticClass: "info",
                        staticStyle: {
                            color: "#409EFF"
                        },
                        attrs: {
                            to: "/admin/order/list?status=paid"
                        }
                    }, [t._v("去处理")])], 1)])], 1) : t._e(), i("el-col", {
                        staticClass: "col-home-left-chart",
                        attrs: {
                            md: 12,
                            xs: 24
                        }
                    }, [i("home-order-chart", {
                        ref: "order-chart",
                        staticStyle: {
                            height: "308px"
                        },
                        attrs: {
                            data: t.orderStat,
                            userInfo: t.userInfo,
                            dashboard: t.dashboard
                        }
                    }, [i("el-select", {
                        staticClass: "order-chart-day",
                        attrs: {
                            slot: "header",
                            placeholder: "请选择",
                            value: ""
                        },
                        on: {
                            change: t.getOrderStat
                        },
                        slot: "header",
                        model: {
                            value: t.orderStat.day,
                            callback: function(e) {
                                t.$set(t.orderStat, "day", e)
                            },
                            expression: "orderStat.day"
                        }
                    }, [i("el-option", {
                        attrs: {
                            label: "7天",
                            value: 7
                        }
                    }), i("el-option", {
                        attrs: {
                            label: "15天",
                            value: 15
                        }
                    }), i("el-option", {
                        attrs: {
                            label: "1个月",
                            value: 30
                        }
                    })], 1)], 1)], 1), i("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [i("el-card", {
                        staticClass: "my-card card-mobile-padding"
                    }, [i("div", {
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }, [i("span", {
                        staticStyle: {
                            "line-height": "28px"
                        }
                    }, [t._v("支付方式")]), t._v(" "), i("el-select", {
                        staticStyle: {
                            width: "90px"
                        },
                        attrs: {
                            placeholder: "请选择",
                            value: "",
                            size: "mini"
                        },
                        on: {
                            change: t.getPayStat
                        },
                        model: {
                            value: t.payStat.day,
                            callback: function(e) {
                                t.$set(t.payStat, "day", e)
                            },
                            expression: "payStat.day"
                        }
                    }, [i("el-option", {
                        attrs: {
                            label: "今日",
                            value: 1
                        }
                    }), i("el-option", {
                        attrs: {
                            label: "7天",
                            value: 7
                        }
                    }), i("el-option", {
                        attrs: {
                            label: "15天",
                            value: 15
                        }
                    }), i("el-option", {
                        attrs: {
                            label: "1个月",
                            value: 30
                        }
                    })], 1), i("a", {
                        staticClass: "icon-btn",
                        staticStyle: {
                            "line-height": "28px",
                            float: "right"
                        },
                        on: {
                            click: t.getPayStat
                        }
                    }, [i("icon", {
                        attrs: {
                            name: "light/sync"
                        }
                    })], 1)], 1), i("pay-pie-chart", {
                        ref: "pay-pie-chart",
                        attrs: {
                            Statistic: t.payStat
                        }
                    })], 1)], 1)], 1)], 1)], 1)], 1)
                }), [], !1, null, "fcaaa07c", null));
            e.default = M.exports
        },
        "3f83": function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de");
            t.exports = function(t, e) {
                r.each(e, (function(e) {
                    e.update = "updateView", n.registerAction(e, (function(i, n) {
                        var r = {};
                        return n.eachComponent({
                            mainType: "series",
                            subType: t,
                            query: i
                        }, (function(t) {
                            t[e.method] && t[e.method](i.name, i.dataIndex);
                            var n = t.getData();
                            n.each((function(e) {
                                var i = n.getName(e);
                                r[i] = t.isSelected(i) || !1
                            }))
                        })), {
                            name: i.name,
                            selected: r,
                            seriesId: i.seriesId
                        }
                    }))
                }))
            }
        },
        "3f86": function(t, e, i) {
            var n = i("b37e"),
                r = i("76be"),
                a = i("b2de"),
                o = i("a4e7"),
                s = i("34de"),
                l = i("96eb"),
                u = i("bf51"),
                c = i("be54"),
                h = !r.canvasSupported,
                d = {
                    canvas: l
                },
                f = {};
            var p = function(t, e, i) {
                i = i || {}, this.dom = e, this.id = t;
                var n = this,
                    l = new s,
                    f = i.renderer;
                if (h) {
                    if (!d.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                    f = "vml"
                } else f && d[f] || (f = "canvas");
                var p = new d[f](e, l, i, t);
                this.storage = l, this.painter = p;
                var g = r.node || r.worker ? null : new c(p.getViewportRoot(), p.root);
                this.handler = new o(l, p, g, p.root), this.animation = new u({
                    stage: {
                        update: a.bind(this.flush, this)
                    }
                }), this.animation.start(), this._needsRefresh;
                var v = l.delFromStorage,
                    m = l.addToStorage;
                l.delFromStorage = function(t) {
                    v.call(l, t), t && t.removeSelfFromZr(n)
                }, l.addToStorage = function(t) {
                    m.call(l, t), t.addSelfToZr(n)
                }
            };
            p.prototype = {
                constructor: p,
                getId: function() {
                    return this.id
                },
                add: function(t) {
                    this.storage.addRoot(t), this._needsRefresh = !0
                },
                remove: function(t) {
                    this.storage.delRoot(t), this._needsRefresh = !0
                },
                configLayer: function(t, e) {
                    this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
                },
                setBackgroundColor: function(t) {
                    this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
                },
                refreshImmediately: function() {
                    this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1
                },
                refresh: function() {
                    this._needsRefresh = !0
                },
                flush: function() {
                    var t;
                    this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
                },
                addHover: function(t, e) {
                    if (this.painter.addHover) {
                        var i = this.painter.addHover(t, e);
                        return this.refreshHover(), i
                    }
                },
                removeHover: function(t) {
                    this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
                },
                clearHover: function() {
                    this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
                },
                refreshHover: function() {
                    this._needsRefreshHover = !0
                },
                refreshHoverImmediately: function() {
                    this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
                },
                resize: function(t) {
                    t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
                },
                clearAnimation: function() {
                    this.animation.clear()
                },
                getWidth: function() {
                    return this.painter.getWidth()
                },
                getHeight: function() {
                    return this.painter.getHeight()
                },
                pathToImage: function(t, e) {
                    return this.painter.pathToImage(t, e)
                },
                setCursorStyle: function(t) {
                    this.handler.setCursorStyle(t)
                },
                findHover: function(t, e) {
                    return this.handler.findHover(t, e)
                },
                on: function(t, e, i) {
                    this.handler.on(t, e, i)
                },
                off: function(t, e) {
                    this.handler.off(t, e)
                },
                trigger: function(t, e) {
                    this.handler.trigger(t, e)
                },
                clear: function() {
                    this.storage.delRoot(), this.painter.clear()
                },
                dispose: function() {
                    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null,
                        function(t) {
                            delete f[t]
                        }(this.id)
                }
            }, e.version = "4.2.0", e.init = function(t, e) {
                var i = new p(n(), t, e);
                return f[i.id] = i, i
            }, e.dispose = function(t) {
                if (t) t.dispose();
                else {
                    for (var e in f) f.hasOwnProperty(e) && f[e].dispose();
                    f = {}
                }
                return this
            }, e.getInstance = function(t) {
                return f[t]
            }, e.registerPainter = function(t, e) {
                d[t] = e
            }
        },
        "3fd8": function(t, e, i) {
            "use strict";
            var n = i("60c4");
            i.n(n).a
        },
        4188: function(t, e, i) {
            var n = i("3caf"),
                r = n.extend({
                    type: "compound",
                    shape: {
                        paths: null
                    },
                    _updatePathDirty: function() {
                        for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
                        this.__dirtyPath = t, this.__dirty = this.__dirty || t
                    },
                    beforeBrush: function() {
                        this._updatePathDirty();
                        for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1], t[i].segmentIgnoreThreshold)
                    },
                    buildPath: function(t, e) {
                        for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0)
                    },
                    afterBrush: function() {
                        for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
                    },
                    getBoundingRect: function() {
                        return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
                    }
                });
            t.exports = r
        },
        "446b": function(t, e, i) {
            var n = i("e2dc"),
                r = i("542f"),
                a = i("63e4"),
                o = i("1976"),
                s = n.round,
                l = a.extend({
                    type: "interval",
                    _interval: 0,
                    _intervalPrecision: 2,
                    setExtent: function(t, e) {
                        var i = this._extent;
                        isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
                    },
                    unionExtent: function(t) {
                        var e = this._extent;
                        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
                    },
                    getInterval: function() {
                        return this._interval
                    },
                    setInterval: function(t) {
                        this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = o.getIntervalPrecision(t)
                    },
                    getTicks: function(t) {
                        var e = this._interval,
                            i = this._extent,
                            n = this._niceExtent,
                            r = this._intervalPrecision,
                            a = [];
                        if (!e) return a;
                        i[0] < n[0] && (t ? a.push(s(n[0] - e)) : a.push(i[0]));
                        for (var o = n[0]; o <= n[1] && (a.push(o), (o = s(o + e, r)) !== a[a.length - 1]);)
                            if (a.length > 1e4) return [];
                        var l = a.length ? a[a.length - 1] : n[1];
                        return i[1] > l && (t ? a.push(l + e) : a.push(i[1])), a
                    },
                    getMinorTicks: function(t) {
                        for (var e = this.getTicks(!0), i = [], r = this.getExtent(), a = 1; a < e.length; a++) {
                            for (var o = e[a], s = e[a - 1], l = 0, u = [], c = (o - s) / t; l < t - 1;) {
                                var h = n.round(s + (l + 1) * c);
                                h > r[0] && h < r[1] && u.push(h), l++
                            }
                            i.push(u)
                        }
                        return i
                    },
                    getLabel: function(t, e) {
                        if (null == t) return "";
                        var i = e && e.precision;
                        return null == i ? i = n.getPrecisionSafe(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = s(t, i, !0), r.addCommas(t)
                    },
                    niceTicks: function(t, e, i) {
                        t = t || 5;
                        var n = this._extent,
                            r = n[1] - n[0];
                        if (isFinite(r)) {
                            r < 0 && (r = -r, n.reverse());
                            var a = o.intervalScaleNiceTicks(n, t, e, i);
                            this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
                        }
                    },
                    niceExtent: function(t) {
                        var e = this._extent;
                        if (e[0] === e[1])
                            if (0 !== e[0]) {
                                var i = e[0];
                                t.fixMax || (e[1] += i / 2), e[0] -= i / 2
                            } else e[1] = 1;
                        var n = e[1] - e[0];
                        isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                        var r = this._interval;
                        t.fixMin || (e[0] = s(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = s(Math.ceil(e[1] / r) * r))
                    }
                });
            l.create = function() {
                return new l
            };
            var u = l;
            t.exports = u
        },
        "457d": function(t, e, i) {
            var n = i("56b7");
            i("5b35"), i("ef2e"), i("1579");
            var r = i("25a2"),
                a = i("3c57");
            n.registerProcessor(n.PRIORITY.PROCESSOR.SERIES_FILTER, r), a.registerSubTypeDefaulter("legend", (function() {
                return "plain"
            }))
        },
        4592: function(t, e, i) {
            var n = i("a16b"),
                r = i("0dfd"),
                a = i("b2de"),
                o = a.getContext,
                s = a.extend,
                l = a.retrieve2,
                u = a.retrieve3,
                c = a.trim,
                h = {},
                d = 0,
                f = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
                p = "12px sans-serif",
                g = {};

            function v(t, e) {
                var i = t + ":" + (e = e || p);
                if (h[i]) return h[i];
                for (var n = (t + "").split("\n"), r = 0, a = 0, o = n.length; a < o; a++) r = Math.max(I(n[a], e).width, r);
                return d > 5e3 && (d = 0, h = {}), d++, h[i] = r, r
            }

            function m(t, e, i, r, a, o, s) {
                var l = A(t, e, a, o, s),
                    u = v(t, e);
                a && (u += a[1] + a[3]);
                var c = l.outerHeight,
                    h = x(0, u, i),
                    d = _(0, c, r),
                    f = new n(h, d, u, c);
                return f.lineHeight = l.lineHeight, f
            }

            function y(t, e, i, r, a, o, s, l) {
                var u = D(t, {
                        rich: s,
                        truncate: l,
                        font: e,
                        textAlign: i,
                        textPadding: a,
                        textLineHeight: o
                    }),
                    c = u.outerWidth,
                    h = u.outerHeight,
                    d = x(0, c, i),
                    f = _(0, h, r);
                return new n(d, f, c, h)
            }

            function x(t, e, i) {
                return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
            }

            function _(t, e, i) {
                return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t
            }

            function b(t, e, i) {
                var n = e.textPosition,
                    r = e.textDistance,
                    a = i.x,
                    o = i.y;
                r = r || 0;
                var s = i.height,
                    l = i.width,
                    u = s / 2,
                    c = "left",
                    h = "top";
                switch (n) {
                    case "left":
                        a -= r, o += u, c = "right", h = "middle";
                        break;
                    case "right":
                        a += r + l, o += u, h = "middle";
                        break;
                    case "top":
                        a += l / 2, o -= r, c = "center", h = "bottom";
                        break;
                    case "bottom":
                        a += l / 2, o += s + r, c = "center";
                        break;
                    case "inside":
                        a += l / 2, o += u, c = "center", h = "middle";
                        break;
                    case "insideLeft":
                        a += r, o += u, h = "middle";
                        break;
                    case "insideRight":
                        a += l - r, o += u, c = "right", h = "middle";
                        break;
                    case "insideTop":
                        a += l / 2, o += r, c = "center";
                        break;
                    case "insideBottom":
                        a += l / 2, o += s - r, c = "center", h = "bottom";
                        break;
                    case "insideTopLeft":
                        a += r, o += r;
                        break;
                    case "insideTopRight":
                        a += l - r, o += r, c = "right";
                        break;
                    case "insideBottomLeft":
                        a += r, o += s - r, h = "bottom";
                        break;
                    case "insideBottomRight":
                        a += l - r, o += s - r, c = "right", h = "bottom"
                }
                return (t = t || {}).x = a, t.y = o, t.textAlign = c, t.textVerticalAlign = h, t
            }

            function w(t, e, i, n, r) {
                if (!e) return "";
                var a = (t + "").split("\n");
                r = S(e, i, n, r);
                for (var o = 0, s = a.length; o < s; o++) a[o] = C(a[o], r);
                return a.join("\n")
            }

            function S(t, e, i, n) {
                (n = s({}, n)).font = e, i = l(i, "..."), n.maxIterations = l(n.maxIterations, 2);
                var r = n.minChar = l(n.minChar, 0);
                n.cnCharWidth = v("国", e);
                var a = n.ascCharWidth = v("a", e);
                n.placeholder = l(n.placeholder, "");
                for (var o = t = Math.max(0, t - 1), u = 0; u < r && o >= a; u++) o -= a;
                var c = v(i, e);
                return c > o && (i = "", c = 0), o = t - c, n.ellipsis = i, n.ellipsisWidth = c, n.contentWidth = o, n.containerWidth = t, n
            }

            function C(t, e) {
                var i = e.containerWidth,
                    n = e.font,
                    r = e.contentWidth;
                if (!i) return "";
                var a = v(t, n);
                if (a <= i) return t;
                for (var o = 0;; o++) {
                    if (a <= r || o >= e.maxIterations) {
                        t += e.ellipsis;
                        break
                    }
                    var s = 0 === o ? M(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
                    a = v(t = t.substr(0, s), n)
                }
                return "" === t && (t = e.placeholder), t
            }

            function M(t, e, i, n) {
                for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
                    var s = t.charCodeAt(a);
                    r += 0 <= s && s <= 127 ? i : n
                }
                return a
            }

            function T(t) {
                return v("国", t)
            }

            function I(t, e) {
                return g.measureText(t, e)
            }

            function A(t, e, i, n, r) {
                null != t && (t += "");
                var a = l(n, T(e)),
                    o = t ? t.split("\n") : [],
                    s = o.length * a,
                    u = s,
                    c = !0;
                if (i && (u += i[0] + i[2]), t && r) {
                    c = !1;
                    var h = r.outerHeight,
                        d = r.outerWidth;
                    if (null != h && u > h) t = "", o = [];
                    else if (null != d)
                        for (var f = S(d - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
                                minChar: r.minChar,
                                placeholder: r.placeholder
                            }), p = 0, g = o.length; p < g; p++) o[p] = C(o[p], f)
                }
                return {
                    lines: o,
                    height: s,
                    outerHeight: u,
                    lineHeight: a,
                    canCacheByTextString: c
                }
            }

            function D(t, e) {
                var i = {
                    lines: [],
                    width: 0,
                    height: 0
                };
                if (null != t && (t += ""), !t) return i;
                for (var n, a = f.lastIndex = 0; null != (n = f.exec(t));) {
                    var o = n.index;
                    o > a && k(i, t.substring(a, o)), k(i, n[2], n[1]), a = f.lastIndex
                }
                a < t.length && k(i, t.substring(a, t.length));
                var s = i.lines,
                    c = 0,
                    h = 0,
                    d = [],
                    p = e.textPadding,
                    g = e.truncate,
                    m = g && g.outerWidth,
                    y = g && g.outerHeight;
                p && (null != m && (m -= p[1] + p[3]), null != y && (y -= p[0] + p[2]));
                for (var x = 0; x < s.length; x++) {
                    for (var _ = s[x], b = 0, S = 0, C = 0; C < _.tokens.length; C++) {
                        var M = _.tokens[C],
                            I = M.styleName && e.rich[M.styleName] || {},
                            A = M.textPadding = I.textPadding,
                            D = M.font = I.font || e.font,
                            P = M.textHeight = l(I.textHeight, T(D));
                        if (A && (P += A[0] + A[2]), M.height = P, M.lineHeight = u(I.textLineHeight, e.textLineHeight, P), M.textAlign = I && I.textAlign || e.textAlign, M.textVerticalAlign = I && I.textVerticalAlign || "middle", null != y && c + M.lineHeight > y) return {
                            lines: [],
                            width: 0,
                            height: 0
                        };
                        M.textWidth = v(M.text, D);
                        var O = I.textWidth,
                            L = null == O || "auto" === O;
                        if ("string" == typeof O && "%" === O.charAt(O.length - 1)) M.percentWidth = O, d.push(M), O = 0;
                        else {
                            if (L) {
                                O = M.textWidth;
                                var E = I.textBackgroundColor,
                                    R = E && E.image;
                                R && (R = r.findExistImage(R), r.isImageReady(R) && (O = Math.max(O, R.width * P / R.height)))
                            }
                            var N = A ? A[1] + A[3] : 0;
                            O += N;
                            var B = null != m ? m - S : null;
                            null != B && B < O && (!L || B < N ? (M.text = "", M.textWidth = O = 0) : (M.text = w(M.text, B - N, D, g.ellipsis, {
                                minChar: g.minChar
                            }), M.textWidth = v(M.text, D), O = M.textWidth + N))
                        }
                        S += M.width = O, I && (b = Math.max(b, M.lineHeight))
                    }
                    _.width = S, _.lineHeight = b, c += b, h = Math.max(h, S)
                }
                for (i.outerWidth = i.width = l(e.textWidth, h), i.outerHeight = i.height = l(e.textHeight, c), p && (i.outerWidth += p[1] + p[3], i.outerHeight += p[0] + p[2]), x = 0; x < d.length; x++) {
                    var z = (M = d[x]).percentWidth;
                    M.width = parseInt(z, 10) / 100 * h
                }
                return i
            }

            function k(t, e, i) {
                for (var n = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
                    var s = r[o],
                        l = {
                            styleName: i,
                            text: s,
                            isLineHolder: !s && !n
                        };
                    if (o) a.push({
                        tokens: [l]
                    });
                    else {
                        var u = (a[a.length - 1] || (a[0] = {
                                tokens: []
                            })).tokens,
                            c = u.length;
                        1 === c && u[0].isLineHolder ? u[0] = l : (s || !c || n) && u.push(l)
                    }
                }
            }
            g.measureText = function(t, e) {
                var i = o();
                return i.font = e || p, i.measureText(t)
            }, e.DEFAULT_FONT = p, e.$override = function(t, e) {
                g[t] = e
            }, e.getWidth = v, e.getBoundingRect = function(t, e, i, n, r, a, o, s) {
                return o ? y(t, e, i, n, r, a, o, s) : m(t, e, i, n, r, a, s)
            }, e.adjustTextX = x, e.adjustTextY = _, e.calculateTextPosition = b, e.adjustTextPositionOnRect = function(t, e, i) {
                return b({}, {
                    textPosition: t,
                    textDistance: i
                }, e)
            }, e.truncateText = w, e.getLineHeight = T, e.measureText = I, e.parsePlainText = A, e.parseRichText = D, e.makeFont = function(t) {
                var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
                return e && c(e) || t.textFont || t.font
            }
        },
        "45d9": function(t, e, i) {
            var n = i("b2de").each,
                r = i("055a"),
                a = i("fab7"),
                o = i("8dab"),
                s = i("0127"),
                l = i("81e8"),
                u = i("6f05").createTask,
                c = i("9554"),
                h = s.makeInner(),
                d = c();

            function f() {
                this.group = new r, this.uid = a.getUID("viewChart"), this.renderTask = u({
                    plan: m,
                    reset: y
                }), this.renderTask.context = {
                    view: this
                }
            }
            f.prototype = {
                type: "chart",
                init: function(t, e) {},
                render: function(t, e, i, n) {},
                highlight: function(t, e, i, n) {
                    v(t.getData(), n, "emphasis")
                },
                downplay: function(t, e, i, n) {
                    v(t.getData(), n, "normal")
                },
                remove: function(t, e) {
                    this.group.removeAll()
                },
                dispose: function() {},
                incrementalPrepareRender: null,
                incrementalRender: null,
                updateTransform: null,
                filterForExposedEvent: null
            };
            var p = f.prototype;

            function g(t, e, i) {
                if (t && (t.trigger(e, i), t.isGroup && !l.isHighDownDispatcher(t)))
                    for (var n = 0, r = t.childCount(); n < r; n++) g(t.childAt(n), e, i)
            }

            function v(t, e, i) {
                var r = s.queryDataIndex(t, e),
                    a = e && null != e.highlightKey ? l.getHighlightDigit(e.highlightKey) : null;
                null != r ? n(s.normalizeToArray(r), (function(e) {
                    g(t.getItemGraphicEl(e), i, a)
                })) : t.eachItemGraphicEl((function(t) {
                    g(t, i, a)
                }))
            }

            function m(t) {
                return d(t.model)
            }

            function y(t) {
                var e = t.model,
                    i = t.ecModel,
                    n = t.api,
                    r = t.payload,
                    a = e.pipelineContext.progressiveRender,
                    o = t.view,
                    s = r && h(r).updateMethod,
                    l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
                return "render" !== l && o[l](e, i, n, r), x[l]
            }
            p.updateView = p.updateLayout = p.updateVisual = function(t, e, i, n) {
                this.render(t, e, i, n)
            }, o.enableClassExtend(f, ["dispose"]), o.enableClassManagement(f, {
                registerWhenExtend: !0
            }), f.markUpdateMethod = function(t, e) {
                h(t).updateMethod = e
            };
            var x = {
                    incrementalPrepareRender: {
                        progress: function(t, e) {
                            e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
                        }
                    },
                    render: {
                        forceFirstProgress: !0,
                        progress: function(t, e) {
                            e.view.render(e.model, e.ecModel, e.api, e.payload)
                        }
                    }
                },
                _ = f;
            t.exports = _
        },
        4823: function(t, e, i) {
            var n = i("b2de"),
                r = i("84cd"),
                a = function(t, e, i, n, a, o) {
                    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = o || !1, r.call(this, a)
                };
            a.prototype = {
                constructor: a
            }, n.inherits(a, r);
            var o = a;
            t.exports = o
        },
        "48a4": function(t, e, i) {
            var n = i("e2dc"),
                r = n.parsePercent,
                a = n.linearMap,
                o = i("1f1f"),
                s = i("6a88"),
                l = i("b2de"),
                u = 2 * Math.PI,
                c = Math.PI / 180;

            function h(t, e) {
                return o.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                })
            }
            t.exports = function(t, e, i, n) {
                e.eachSeriesByType(t, (function(t) {
                    var e = t.getData(),
                        n = e.mapDimension("value"),
                        o = h(t, i),
                        d = t.get("center"),
                        f = t.get("radius");
                    l.isArray(f) || (f = [0, f]), l.isArray(d) || (d = [d, d]);
                    var p = r(o.width, i.getWidth()),
                        g = r(o.height, i.getHeight()),
                        v = Math.min(p, g),
                        m = r(d[0], p) + o.x,
                        y = r(d[1], g) + o.y,
                        x = r(f[0], v / 2),
                        _ = r(f[1], v / 2),
                        b = -t.get("startAngle") * c,
                        w = t.get("minAngle") * c,
                        S = 0;
                    e.each(n, (function(t) {
                        !isNaN(t) && S++
                    }));
                    var C = e.getSum(n),
                        M = Math.PI / (C || S) * 2,
                        T = t.get("clockwise"),
                        I = t.get("roseType"),
                        A = t.get("stillShowZeroSum"),
                        D = e.getDataExtent(n);
                    D[0] = 0;
                    var k = u,
                        P = 0,
                        O = b,
                        L = T ? 1 : -1;
                    if (e.each(n, (function(t, i) {
                            var n;
                            if (isNaN(t)) e.setItemLayout(i, {
                                angle: NaN,
                                startAngle: NaN,
                                endAngle: NaN,
                                clockwise: T,
                                cx: m,
                                cy: y,
                                r0: x,
                                r: I ? NaN : _,
                                viewRect: o
                            });
                            else {
                                (n = "area" !== I ? 0 === C && A ? M : t * M : u / S) < w ? (n = w, k -= w) : P += t;
                                var r = O + L * n;
                                e.setItemLayout(i, {
                                    angle: n,
                                    startAngle: O,
                                    endAngle: r,
                                    clockwise: T,
                                    cx: m,
                                    cy: y,
                                    r0: x,
                                    r: I ? a(t, D, [x, _]) : _,
                                    viewRect: o
                                }), O = r
                            }
                        })), k < u && S)
                        if (k <= .001) {
                            var E = u / S;
                            e.each(n, (function(t, i) {
                                if (!isNaN(t)) {
                                    var n = e.getItemLayout(i);
                                    n.angle = E, n.startAngle = b + L * i * E, n.endAngle = b + L * (i + 1) * E
                                }
                            }))
                        } else M = k / P, O = b, e.each(n, (function(t, i) {
                            if (!isNaN(t)) {
                                var n = e.getItemLayout(i),
                                    r = n.angle === w ? w : t * M;
                                n.startAngle = O, n.endAngle = O + L * r, O += L * r
                            }
                        }));
                    s(t, _, o.width, o.height, o.x, o.y)
                }))
            }
        },
        "48d1": function(t, e, i) {},
        "4e20": function(t, e) {
            var i = function(t, e) {
                this.image = t, this.repeat = e, this.type = "pattern"
            };
            i.prototype.getCanvasPattern = function(t) {
                return t.createPattern(this.image, this.repeat || "repeat")
            };
            var n = i;
            t.exports = n
        },
        "4f54": function(t, e, i) {
            var n = i("b2de"),
                r = i("63e4"),
                a = i("e2dc"),
                o = i("446b"),
                s = r.prototype,
                l = o.prototype,
                u = a.getPrecisionSafe,
                c = a.round,
                h = Math.floor,
                d = Math.ceil,
                f = Math.pow,
                p = Math.log,
                g = r.extend({
                    type: "log",
                    base: 10,
                    $constructor: function() {
                        r.apply(this, arguments), this._originalScale = new o
                    },
                    getTicks: function(t) {
                        var e = this._originalScale,
                            i = this._extent,
                            r = e.getExtent();
                        return n.map(l.getTicks.call(this, t), (function(t) {
                            var n = a.round(f(this.base, t));
                            return n = t === i[0] && e.__fixMin ? v(n, r[0]) : n, n = t === i[1] && e.__fixMax ? v(n, r[1]) : n
                        }), this)
                    },
                    getMinorTicks: l.getMinorTicks,
                    getLabel: l.getLabel,
                    scale: function(t) {
                        return t = s.scale.call(this, t), f(this.base, t)
                    },
                    setExtent: function(t, e) {
                        var i = this.base;
                        t = p(t) / p(i), e = p(e) / p(i), l.setExtent.call(this, t, e)
                    },
                    getExtent: function() {
                        var t = this.base,
                            e = s.getExtent.call(this);
                        e[0] = f(t, e[0]), e[1] = f(t, e[1]);
                        var i = this._originalScale,
                            n = i.getExtent();
                        return i.__fixMin && (e[0] = v(e[0], n[0])), i.__fixMax && (e[1] = v(e[1], n[1])), e
                    },
                    unionExtent: function(t) {
                        this._originalScale.unionExtent(t);
                        var e = this.base;
                        t[0] = p(t[0]) / p(e), t[1] = p(t[1]) / p(e), s.unionExtent.call(this, t)
                    },
                    unionExtentFromData: function(t, e) {
                        this.unionExtent(t.getApproximateExtent(e))
                    },
                    niceTicks: function(t) {
                        t = t || 10;
                        var e = this._extent,
                            i = e[1] - e[0];
                        if (!(i === 1 / 0 || i <= 0)) {
                            var n = a.quantity(i);
                            for (t / i * n <= .5 && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
                            var r = [a.round(d(e[0] / n) * n), a.round(h(e[1] / n) * n)];
                            this._interval = n, this._niceExtent = r
                        }
                    },
                    niceExtent: function(t) {
                        l.niceExtent.call(this, t);
                        var e = this._originalScale;
                        e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
                    }
                });

            function v(t, e) {
                return c(t, u(e))
            }
            n.each(["contain", "normalize"], (function(t) {
                g.prototype[t] = function(e) {
                    return e = p(e) / p(this.base), s[t].call(this, e)
                }
            })), g.create = function() {
                return new g
            };
            var m = g;
            t.exports = m
        },
        "4f94": function(t, e, i) {
            var n = i("9ced");

            function r(t, e) {
                return Math.abs(t - e) < 1e-8
            }
            e.contain = function(t, e, i) {
                var a = 0,
                    o = t[0];
                if (!o) return !1;
                for (var s = 1; s < t.length; s++) {
                    var l = t[s];
                    a += n(o[0], o[1], l[0], l[1], e, i), o = l
                }
                var u = t[0];
                return r(o[0], u[0]) && r(o[1], u[1]) || (a += n(o[0], o[1], u[0], u[1], e, i)), 0 !== a
            }
        },
        "4ff5": function(t, e) {
            var i = function() {
                    this.head = null, this.tail = null, this._len = 0
                },
                n = i.prototype;
            n.insert = function(t) {
                var e = new r(t);
                return this.insertEntry(e), e
            }, n.insertEntry = function(t) {
                this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
            }, n.remove = function(t) {
                var e = t.prev,
                    i = t.next;
                e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
            }, n.len = function() {
                return this._len
            }, n.clear = function() {
                this.head = this.tail = null, this._len = 0
            };
            var r = function(t) {
                    this.value = t, this.next, this.prev
                },
                a = function(t) {
                    this._list = new i, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
                },
                o = a.prototype;
            o.put = function(t, e) {
                var i = this._list,
                    n = this._map,
                    a = null;
                if (null == n[t]) {
                    var o = i.len(),
                        s = this._lastRemovedEntry;
                    if (o >= this._maxSize && o > 0) {
                        var l = i.head;
                        i.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l
                    }
                    s ? s.value = e : s = new r(e), s.key = t, i.insertEntry(s), n[t] = s
                }
                return a
            }, o.get = function(t) {
                var e = this._map[t],
                    i = this._list;
                if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
            }, o.clear = function() {
                this._list.clear(), this._map = {}
            };
            var s = a;
            t.exports = s
        },
        "510f": function(t, e, i) {},
        51281: function(t, e) {
            e.containStroke = function(t, e, i, n, r, a, o) {
                if (0 === r) return !1;
                var s, l = r;
                if (o > e + l && o > n + l || o < e - l && o < n - l || a > t + l && a > i + l || a < t - l && a < i - l) return !1;
                if (t === i) return Math.abs(a - t) <= l / 2;
                var u = (s = (e - n) / (t - i)) * a - o + (t * n - i * e) / (t - i);
                return u * u / (s * s + 1) <= l / 2 * l / 2
            }
        },
        "517a": function(t, e, i) {
            var n = i("b2de"),
                r = n.retrieve,
                a = n.defaults,
                o = n.extend,
                s = n.each,
                l = (n.map, i("542f")),
                u = i("81e8"),
                c = i("e62d0"),
                h = i("e2dc"),
                d = h.isRadianAroundZero,
                f = h.remRadian,
                p = i("0bbe").createSymbol,
                g = i("6b25"),
                v = i("df91").applyTransform,
                m = i("8d1f").shouldShowAllLabels,
                y = Math.PI,
                x = function(t, e) {
                    this.opt = e, this.axisModel = t, a(e, {
                        labelOffset: 0,
                        nameDirection: 1,
                        tickDirection: 1,
                        labelDirection: 1,
                        silent: !0
                    }), this.group = new u.Group;
                    var i = new u.Group({
                        position: e.position.slice(),
                        rotation: e.rotation
                    });
                    i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
                };
            x.prototype = {
                constructor: x,
                hasBuilder: function(t) {
                    return !!_[t]
                },
                add: function(t) {
                    _[t].call(this)
                },
                getGroup: function() {
                    return this.group
                }
            };
            var _ = {
                    axisLine: function() {
                        var t = this.opt,
                            e = this.axisModel;
                        if (e.get("axisLine.show")) {
                            var i = this.axisModel.axis.getExtent(),
                                n = this._transform,
                                r = [i[0], 0],
                                a = [i[1], 0];
                            n && (v(r, r, n), v(a, a, n));
                            var l = o({
                                lineCap: "round"
                            }, e.getModel("axisLine.lineStyle").getLineStyle());
                            this.group.add(new u.Line({
                                anid: "line",
                                subPixelOptimize: !0,
                                shape: {
                                    x1: r[0],
                                    y1: r[1],
                                    x2: a[0],
                                    y2: a[1]
                                },
                                style: l,
                                strokeContainThreshold: t.strokeContainThreshold || 5,
                                silent: !0,
                                z2: 1
                            }));
                            var c = e.get("axisLine.symbol"),
                                h = e.get("axisLine.symbolSize"),
                                d = e.get("axisLine.symbolOffset") || 0;
                            if ("number" == typeof d && (d = [d, d]), null != c) {
                                "string" == typeof c && (c = [c, c]), "string" != typeof h && "number" != typeof h || (h = [h, h]);
                                var f = h[0],
                                    g = h[1];
                                s([{
                                    rotate: t.rotation + Math.PI / 2,
                                    offset: d[0],
                                    r: 0
                                }, {
                                    rotate: t.rotation - Math.PI / 2,
                                    offset: d[1],
                                    r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                                }], (function(e, i) {
                                    if ("none" !== c[i] && null != c[i]) {
                                        var n = p(c[i], -f / 2, -g / 2, f, g, l.stroke, !0),
                                            a = e.r + e.offset,
                                            o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                                        n.attr({
                                            rotation: e.rotate,
                                            position: o,
                                            silent: !0,
                                            z2: 11
                                        }), this.group.add(n)
                                    }
                                }), this)
                            }
                        }
                    },
                    axisTickLabel: function() {
                        var t = this.axisModel,
                            e = this.opt,
                            i = function(t, e, i) {
                                var n = e.axis,
                                    r = e.getModel("axisTick");
                                if (r.get("show") && !n.scale.isBlank()) {
                                    for (var o = r.getModel("lineStyle"), s = i.tickDirection * r.get("length"), l = A(n.getTicksCoords(), t._transform, s, a(o.getLineStyle(), {
                                            stroke: e.get("axisLine.lineStyle.color")
                                        }), "ticks"), u = 0; u < l.length; u++) t.group.add(l[u]);
                                    return l
                                }
                            }(this, t, e),
                            n = function(t, e, i) {
                                var n = e.axis;
                                if (r(i.axisLabelShow, e.get("axisLabel.show")) && !n.scale.isBlank()) {
                                    var a = e.getModel("axisLabel"),
                                        o = a.get("margin"),
                                        l = n.getViewLabels(),
                                        h = (r(i.labelRotate, a.get("rotate")) || 0) * y / 180,
                                        d = w(i.rotation, h, i.labelDirection),
                                        f = e.getCategories && e.getCategories(!0),
                                        p = [],
                                        g = C(e),
                                        v = e.get("triggerEvent");
                                    return s(l, (function(r, s) {
                                        var l = r.tickValue,
                                            h = r.formattedLabel,
                                            m = r.rawLabel,
                                            y = a;
                                        f && f[l] && f[l].textStyle && (y = new c(f[l].textStyle, a, e.ecModel));
                                        var x = y.getTextColor() || e.get("axisLine.lineStyle.color"),
                                            _ = [n.dataToCoord(l), i.labelOffset + i.labelDirection * o],
                                            w = new u.Text({
                                                anid: "label_" + l,
                                                position: _,
                                                rotation: d.rotation,
                                                silent: g,
                                                z2: 10
                                            });
                                        u.setTextStyle(w.style, y, {
                                            text: h,
                                            textAlign: y.getShallow("align", !0) || d.textAlign,
                                            textVerticalAlign: y.getShallow("verticalAlign", !0) || y.getShallow("baseline", !0) || d.textVerticalAlign,
                                            textFill: "function" == typeof x ? x("category" === n.type ? m : "value" === n.type ? l + "" : l, s) : x
                                        }), v && (w.eventData = b(e), w.eventData.targetType = "axisLabel", w.eventData.value = m), t._dumbGroup.add(w), w.updateTransform(), p.push(w), t.group.add(w), w.decomposeTransform()
                                    })), p
                                }
                            }(this, t, e);
                        (function(t, e, i) {
                            if (!m(t.axis)) {
                                var n = t.get("axisLabel.showMinLabel"),
                                    r = t.get("axisLabel.showMaxLabel");
                                i = i || [];
                                var a = (e = e || [])[0],
                                    o = e[1],
                                    s = e[e.length - 1],
                                    l = e[e.length - 2],
                                    u = i[0],
                                    c = i[1],
                                    h = i[i.length - 1],
                                    d = i[i.length - 2];
                                !1 === n ? (M(a), M(u)) : T(a, o) && (n ? (M(o), M(c)) : (M(a), M(u))), !1 === r ? (M(s), M(h)) : T(l, s) && (r ? (M(l), M(d)) : (M(s), M(h)))
                            }
                        })(t, n, i),
                        function(t, e, i) {
                            var n = e.axis,
                                r = e.getModel("minorTick");
                            if (r.get("show") && !n.scale.isBlank()) {
                                var o = n.getMinorTicksCoords();
                                if (o.length)
                                    for (var s = r.getModel("lineStyle"), l = i.tickDirection * r.get("length"), u = a(s.getLineStyle(), a(e.getModel("axisTick").getLineStyle(), {
                                            stroke: e.get("axisLine.lineStyle.color")
                                        })), c = 0; c < o.length; c++)
                                        for (var h = A(o[c], t._transform, l, u, "minorticks_" + c), d = 0; d < h.length; d++) t.group.add(h[d])
                            }
                        }(this, t, e)
                    },
                    axisName: function() {
                        var t = this.opt,
                            e = this.axisModel,
                            i = r(t.axisName, e.get("name"));
                        if (i) {
                            var n, a, s = e.get("nameLocation"),
                                c = t.nameDirection,
                                h = e.getModel("nameTextStyle"),
                                d = e.get("nameGap") || 0,
                                f = this.axisModel.axis.getExtent(),
                                p = f[0] > f[1] ? -1 : 1,
                                g = ["start" === s ? f[0] - p * d : "end" === s ? f[1] + p * d : (f[0] + f[1]) / 2, I(s) ? t.labelOffset + c * d : 0],
                                v = e.get("nameRotate");
                            null != v && (v = v * y / 180), I(s) ? n = w(t.rotation, null != v ? v : t.rotation, c) : (n = S(t, s, v || 0, f), null != (a = t.axisNameAvailableWidth) && (a = Math.abs(a / Math.sin(n.rotation)), !isFinite(a) && (a = null)));
                            var m = h.getFont(),
                                x = e.get("nameTruncate", !0) || {},
                                _ = x.ellipsis,
                                M = r(t.nameTruncateMaxWidth, x.maxWidth, a),
                                T = null != _ && null != M ? l.truncateText(i, M, m, _, {
                                    minChar: 2,
                                    placeholder: x.placeholder
                                }) : i,
                                A = e.get("tooltip", !0),
                                D = e.mainType,
                                k = {
                                    componentType: D,
                                    name: i,
                                    $vars: ["name"]
                                };
                            k[D + "Index"] = e.componentIndex;
                            var P = new u.Text({
                                anid: "name",
                                __fullText: i,
                                __truncatedText: T,
                                position: g,
                                rotation: n.rotation,
                                silent: C(e),
                                z2: 1,
                                tooltip: A && A.show ? o({
                                    content: i,
                                    formatter: function() {
                                        return i
                                    },
                                    formatterParams: k
                                }, A) : null
                            });
                            u.setTextStyle(P.style, h, {
                                text: T,
                                textFont: m,
                                textFill: h.getTextColor() || e.get("axisLine.lineStyle.color"),
                                textAlign: h.get("align") || n.textAlign,
                                textVerticalAlign: h.get("verticalAlign") || n.textVerticalAlign
                            }), e.get("triggerEvent") && (P.eventData = b(e), P.eventData.targetType = "axisName", P.eventData.name = i), this._dumbGroup.add(P), P.updateTransform(), this.group.add(P), P.decomposeTransform()
                        }
                    }
                },
                b = x.makeAxisEventDataBase = function(t) {
                    var e = {
                        componentType: t.mainType,
                        componentIndex: t.componentIndex
                    };
                    return e[t.mainType + "Index"] = t.componentIndex, e
                },
                w = x.innerTextLayout = function(t, e, i) {
                    var n, r, a = f(e - t);
                    return d(a) ? (r = i > 0 ? "top" : "bottom", n = "center") : d(a - y) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = a > 0 && a < y ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                        rotation: a,
                        textAlign: n,
                        textVerticalAlign: r
                    }
                };

            function S(t, e, i, n) {
                var r, a, o = f(i - t.rotation),
                    s = n[0] > n[1],
                    l = "start" === e && !s || "start" !== e && s;
                return d(o - y / 2) ? (a = l ? "bottom" : "top", r = "center") : d(o - 1.5 * y) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = o < 1.5 * y && o > y / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
                    rotation: o,
                    textAlign: r,
                    textVerticalAlign: a
                }
            }
            var C = x.isLabelSilent = function(t) {
                var e = t.get("tooltip");
                return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
            };

            function M(t) {
                t && (t.ignore = !0)
            }

            function T(t, e, i) {
                var n = t && t.getBoundingRect().clone(),
                    r = e && e.getBoundingRect().clone();
                if (n && r) {
                    var a = g.identity([]);
                    return g.rotate(a, a, -t.rotation), n.applyTransform(g.mul([], a, t.getLocalTransform())), r.applyTransform(g.mul([], a, e.getLocalTransform())), n.intersect(r)
                }
            }

            function I(t) {
                return "middle" === t || "center" === t
            }

            function A(t, e, i, n, r) {
                for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
                    var c = t[l].coord;
                    o[0] = c, o[1] = 0, s[0] = c, s[1] = i, e && (v(o, o, e), v(s, s, e));
                    var h = new u.Line({
                        anid: r + "_" + t[l].tickValue,
                        subPixelOptimize: !0,
                        shape: {
                            x1: o[0],
                            y1: o[1],
                            x2: s[0],
                            y2: s[1]
                        },
                        style: n,
                        z2: 2,
                        silent: !0
                    });
                    a.push(h)
                }
                return a
            }
            var D = x;
            t.exports = D
        },
        "52cd": function(t, e, i) {
            var n = i("b2de"),
                r = i("4592"),
                a = i("0127").makeInner,
                o = i("8d1f"),
                s = o.makeLabelFormatter,
                l = o.getOptionCategoryInterval,
                u = o.shouldShowAllLabels,
                c = a();

            function h(t, e) {
                var i, r, a = d(t, "labels"),
                    o = l(e);
                return f(a, o) || (n.isFunction(o) ? i = v(t, o) : (r = "auto" === o ? function(t) {
                    var e = c(t).autoInterval;
                    return null != e ? e : c(t).autoInterval = t.calculateCategoryInterval()
                }(t) : o, i = g(t, r)), p(a, o, {
                    labels: i,
                    labelCategoryInterval: r
                }))
            }

            function d(t, e) {
                return c(t)[e] || (c(t)[e] = [])
            }

            function f(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i].key === e) return t[i].value
            }

            function p(t, e, i) {
                return t.push({
                    key: e,
                    value: i
                }), i
            }

            function g(t, e, i) {
                var n = s(t),
                    r = t.scale,
                    a = r.getExtent(),
                    o = t.getLabelModel(),
                    l = [],
                    c = Math.max((e || 0) + 1, 1),
                    h = a[0],
                    d = r.count();
                0 !== h && c > 1 && d / c > 2 && (h = Math.round(Math.ceil(h / c) * c));
                var f = u(t),
                    p = o.get("showMinLabel") || f,
                    g = o.get("showMaxLabel") || f;
                p && h !== a[0] && m(a[0]);
                for (var v = h; v <= a[1]; v += c) m(v);

                function m(t) {
                    l.push(i ? t : {
                        formattedLabel: n(t),
                        rawLabel: r.getLabel(t),
                        tickValue: t
                    })
                }
                return g && v - c !== a[1] && m(a[1]), l
            }

            function v(t, e, i) {
                var r = t.scale,
                    a = s(t),
                    o = [];
                return n.each(r.getTicks(), (function(t) {
                    var n = r.getLabel(t);
                    e(t, n) && o.push(i ? t : {
                        formattedLabel: a(t),
                        rawLabel: n,
                        tickValue: t
                    })
                })), o
            }
            e.createAxisLabels = function(t) {
                return "category" === t.type ? function(t) {
                    var e = t.getLabelModel(),
                        i = h(t, e);
                    return !e.get("show") || t.scale.isBlank() ? {
                        labels: [],
                        labelCategoryInterval: i.labelCategoryInterval
                    } : i
                }(t) : function(t) {
                    var e = t.scale.getTicks(),
                        i = s(t);
                    return {
                        labels: n.map(e, (function(e, n) {
                            return {
                                formattedLabel: i(e, n),
                                rawLabel: t.scale.getLabel(e),
                                tickValue: e
                            }
                        }))
                    }
                }(t)
            }, e.createAxisTicks = function(t, e) {
                return "category" === t.type ? function(t, e) {
                    var i, r, a = d(t, "ticks"),
                        o = l(e),
                        s = f(a, o);
                    if (s) return s;
                    if (e.get("show") && !t.scale.isBlank() || (i = []), n.isFunction(o)) i = v(t, o, !0);
                    else if ("auto" === o) {
                        var u = h(t, t.getLabelModel());
                        r = u.labelCategoryInterval, i = n.map(u.labels, (function(t) {
                            return t.tickValue
                        }))
                    } else i = g(t, r = o, !0);
                    return p(a, o, {
                        ticks: i,
                        tickCategoryInterval: r
                    })
                }(t, e) : {
                    ticks: t.scale.getTicks()
                }
            }, e.calculateCategoryInterval = function(t) {
                var e = function(t) {
                        var e = t.getLabelModel();
                        return {
                            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
                            labelRotate: e.get("rotate") || 0,
                            font: e.getFont()
                        }
                    }(t),
                    i = s(t),
                    n = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
                    a = t.scale,
                    o = a.getExtent(),
                    l = a.count();
                if (o[1] - o[0] < 1) return 0;
                var u = 1;
                l > 40 && (u = Math.max(1, Math.floor(l / 40)));
                for (var h = o[0], d = t.dataToCoord(h + 1) - t.dataToCoord(h), f = Math.abs(d * Math.cos(n)), p = Math.abs(d * Math.sin(n)), g = 0, v = 0; h <= o[1]; h += u) {
                    var m, y, x = r.getBoundingRect(i(h), e.font, "center", "top");
                    m = 1.3 * x.width, y = 1.3 * x.height, g = Math.max(g, m, 7), v = Math.max(v, y, 7)
                }
                var _ = g / f,
                    b = v / p;
                isNaN(_) && (_ = 1 / 0), isNaN(b) && (b = 1 / 0);
                var w = Math.max(0, Math.floor(Math.min(_, b))),
                    S = c(t.model),
                    C = t.getExtent(),
                    M = S.lastAutoInterval,
                    T = S.lastTickCount;
                return null != M && null != T && Math.abs(M - w) <= 1 && Math.abs(T - l) <= 1 && M > w && S.axisExtend0 === C[0] && S.axisExtend1 === C[1] ? w = M : (S.lastTickCount = l, S.lastAutoInterval = w, S.axisExtend0 = C[0], S.axisExtend1 = C[1]), w
            }
        },
        "52e5": function(t, e, i) {
            var n = i("102c").quadraticProjectPoint;
            e.containStroke = function(t, e, i, r, a, o, s, l, u) {
                if (0 === s) return !1;
                var c = s;
                return !(u > e + c && u > r + c && u > o + c || u < e - c && u < r - c && u < o - c || l > t + c && l > i + c && l > a + c || l < t - c && l < i - c && l < a - c) && n(t, e, i, r, a, o, l, u, null) <= c / 2
            }
        },
        "542f": function(t, e, i) {
            var n = i("b2de"),
                r = i("4592"),
                a = i("e2dc");
            var o = n.normalizeCssArray,
                s = /([&<>"'])/g,
                l = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };

            function u(t) {
                return null == t ? "" : (t + "").replace(s, (function(t, e) {
                    return l[e]
                }))
            }
            var c = ["a", "b", "c", "d", "e", "f", "g"],
                h = function(t, e) {
                    return "{" + t + (null == e ? "" : e) + "}"
                };

            function d(t, e) {
                return "0000".substr(0, e - (t += "").length) + t
            }
            var f = r.truncateText;
            e.addCommas = function(t) {
                return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
            }, e.toCamelCase = function(t, e) {
                return t = (t || "").toLowerCase().replace(/-(.)/g, (function(t, e) {
                    return e.toUpperCase()
                })), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
            }, e.normalizeCssArray = o, e.encodeHTML = u, e.formatTpl = function(t, e, i) {
                n.isArray(e) || (e = [e]);
                var r = e.length;
                if (!r) return "";
                for (var a = e[0].$vars || [], o = 0; o < a.length; o++) {
                    var s = c[o];
                    t = t.replace(h(s), h(s, 0))
                }
                for (var l = 0; l < r; l++)
                    for (var d = 0; d < a.length; d++) {
                        var f = e[l][a[d]];
                        t = t.replace(h(c[d], l), i ? u(f) : f)
                    }
                return t
            }, e.formatTplSimple = function(t, e, i) {
                return n.each(e, (function(e, n) {
                    t = t.replace("{" + n + "}", i ? u(e) : e)
                })), t
            }, e.getTooltipMarker = function(t, e) {
                var i = (t = n.isString(t) ? {
                        color: t,
                        extraCssText: e
                    } : t || {}).color,
                    r = t.type,
                    a = (e = t.extraCssText, t.renderMode || "html"),
                    o = t.markerId || "X";
                return i ? "html" === a ? "subItem" === r ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + u(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + u(i) + ";" + (e || "") + '"></span>' : {
                    renderMode: a,
                    content: "{marker" + o + "|}  ",
                    style: {
                        color: i
                    }
                } : ""
            }, e.formatTime = function(t, e, i) {
                "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
                var n = a.parseDate(e),
                    r = i ? "UTC" : "",
                    o = n["get" + r + "FullYear"](),
                    s = n["get" + r + "Month"]() + 1,
                    l = n["get" + r + "Date"](),
                    u = n["get" + r + "Hours"](),
                    c = n["get" + r + "Minutes"](),
                    h = n["get" + r + "Seconds"](),
                    f = n["get" + r + "Milliseconds"]();
                return t = t.replace("MM", d(s, 2)).replace("M", s).replace("yyyy", o).replace("yy", o % 100).replace("dd", d(l, 2)).replace("d", l).replace("hh", d(u, 2)).replace("h", u).replace("mm", d(c, 2)).replace("m", c).replace("ss", d(h, 2)).replace("s", h).replace("SSS", d(f, 3))
            }, e.capitalFirst = function(t) {
                return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
            }, e.truncateText = f, e.getTextBoundingRect = function(t) {
                return r.getBoundingRect(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)
            }, e.getTextRect = function(t, e, i, n, a, o, s, l) {
                return r.getBoundingRect(t, e, i, n, a, l, o, s)
            }
        },
        "56ab": function(t, e, i) {
            var n = i("a711");
            t.exports = function(t, e) {
                return n((e = e || {}).coordDimensions || [], t, {
                    dimsDef: e.dimensionsDefine || t.dimensionsDefine,
                    encodeDef: e.encodeDefine || t.encodeDefine,
                    dimCount: e.dimensionsCount,
                    encodeDefaulter: e.encodeDefaulter,
                    generateCoord: e.generateCoord,
                    generateCoordCount: e.generateCoordCount
                })
            }
        },
        "56b7": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("3f86")),
                r = i("b2de"),
                a = i("cb89"),
                o = i("76be"),
                s = i("2d19"),
                l = i("3efa"),
                u = i("c6e5"),
                c = i("2f1f"),
                h = i("2c57"),
                d = i("6ca3"),
                f = i("de55"),
                p = i("29bd"),
                g = i("3c57"),
                v = i("dc95"),
                m = i("71b5"),
                y = i("45d9"),
                x = i("81e8"),
                _ = i("0127"),
                b = i("773e").throttle,
                w = i("86a2"),
                S = i("d420"),
                C = i("c58a"),
                M = i("3855"),
                T = i("bb24"),
                I = i("e559");
            i("9b1e");
            var A = i("cef3"),
                D = r.assert,
                k = r.each,
                P = r.isFunction,
                O = r.isObject,
                L = g.parseClassType,
                E = {
                    PROCESSOR: {
                        FILTER: 1e3,
                        SERIES_FILTER: 800,
                        STATISTIC: 5e3
                    },
                    VISUAL: {
                        LAYOUT: 1e3,
                        PROGRESSIVE_LAYOUT: 1100,
                        GLOBAL: 2e3,
                        CHART: 3e3,
                        POST_CHART_LAYOUT: 3500,
                        COMPONENT: 4e3,
                        BRUSH: 5e3
                    }
                },
                R = "__flagInMainProcess",
                N = "__optionUpdated",
                B = /^[a-zA-Z0-9_]+$/;

            function z(t, e) {
                return function(i, n, r) {
                    e || !this._disposed ? (i = i && i.toLowerCase(), l.prototype[t].call(this, i, n, r)) : this.id
                }
            }

            function F() {
                l.call(this)
            }

            function V(t, e, i) {
                i = i || {}, "string" == typeof e && (e = ct[e]), this.id, this.group, this._dom = t;
                var a = this._zr = n.init(t, {
                    renderer: i.renderer || "canvas",
                    devicePixelRatio: i.devicePixelRatio,
                    width: i.width,
                    height: i.height
                });
                this._throttledZrFlush = b(r.bind(a.flush, a), 17), (e = r.clone(e)) && f(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new h;
                var o = this._api = function(t) {
                    var e = t._coordSysMgr;
                    return r.extend(new c(t), {
                        getCoordinateSystems: r.bind(e.getCoordinateSystems, e),
                        getComponentByElement: function(e) {
                            for (; e;) {
                                var i = e.__ecComponentInfo;
                                if (null != i) return t._model.getComponent(i.mainType, i.index);
                                e = e.parent
                            }
                        }
                    })
                }(this);

                function u(t, e) {
                    return t.__prio - e.__prio
                }
                s(ut, u), s(ot, u), this._scheduler = new M(this, o, ot, ut), l.call(this, this._ecEventProcessor = new nt), this._messageCenter = new F, this._initEvents(), this.resize = r.bind(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this),
                    function(t, e) {
                        t.on("rendered", (function() {
                            e.trigger("rendered"), !t.animation.isFinished() || e[N] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
                        }))
                    }(a, this), r.setAsPrimitive(this)
            }
            F.prototype.on = z("on", !0), F.prototype.off = z("off", !0), F.prototype.one = z("one", !0), r.mixin(F, l);
            var H = V.prototype;

            function W(t, e, i) {
                if (this._disposed) this.id;
                else {
                    var n, r = this._model,
                        a = this._coordSysMgr.getCoordinateSystems();
                    e = _.parseFinder(r, e);
                    for (var o = 0; o < a.length; o++) {
                        var s = a[o];
                        if (s[t] && null != (n = s[t](r, e, i))) return n
                    }
                }
            }
            H._onframe = function() {
                if (!this._disposed) {
                    var t = this._scheduler;
                    if (this[N]) {
                        var e = this[N].silent;
                        this[R] = !0, U(this), G.update.call(this), this[R] = !1, this[N] = !1, q.call(this, e), Z.call(this, e)
                    } else if (t.unfinished) {
                        var i = 1,
                            n = this._model,
                            r = this._api;
                        t.unfinished = !1;
                        do {
                            var a = +new Date;
                            t.performSeriesTasks(n), t.performDataProcessorTasks(n), j(this, n), t.performVisualTasks(n), J(this, this._model, r, "remain"), i -= +new Date - a
                        } while (i > 0 && t.unfinished);
                        t.unfinished || this._zr.flush()
                    }
                }
            }, H.getDom = function() {
                return this._dom
            }, H.getZr = function() {
                return this._zr
            }, H.setOption = function(t, e, i) {
                if (this._disposed) this.id;
                else {
                    var n;
                    if (O(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[R] = !0, !this._model || e) {
                        var r = new d(this._api),
                            a = this._theme,
                            o = this._model = new u;
                        o.scheduler = this._scheduler, o.init(null, null, a, r)
                    }
                    this._model.setOption(t, st), i ? (this[N] = {
                        silent: n
                    }, this[R] = !1) : (U(this), G.update.call(this), this._zr.flush(), this[N] = !1, this[R] = !1, q.call(this, n), Z.call(this, n))
                }
            }, H.setTheme = function() {}, H.getModel = function() {
                return this._model
            }, H.getOption = function() {
                return this._model && this._model.getOption()
            }, H.getWidth = function() {
                return this._zr.getWidth()
            }, H.getHeight = function() {
                return this._zr.getHeight()
            }, H.getDevicePixelRatio = function() {
                return this._zr.painter.dpr || window.devicePixelRatio || 1
            }, H.getRenderedCanvas = function(t) {
                if (o.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t)
            }, H.getSvgDataUrl = function() {
                if (o.svgSupported) {
                    var t = this._zr,
                        e = t.storage.getDisplayList();
                    return r.each(e, (function(t) {
                        t.stopAnimation(!0)
                    })), t.painter.pathToDataUrl()
                }
            }, H.getDataURL = function(t) {
                if (!this._disposed) {
                    var e = (t = t || {}).excludeComponents,
                        i = this._model,
                        n = [],
                        r = this;
                    k(e, (function(t) {
                        i.eachComponent({
                            mainType: t
                        }, (function(t) {
                            var e = r._componentsMap[t.__viewId];
                            e.group.ignore || (n.push(e), e.group.ignore = !0)
                        }))
                    }));
                    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
                    return k(n, (function(t) {
                        t.group.ignore = !1
                    })), a
                }
                this.id
            }, H.getConnectedDataURL = function(t) {
                if (this._disposed) this.id;
                else if (o.canvasSupported) {
                    var e = this.group,
                        i = Math.min,
                        a = Math.max,
                        s = 1 / 0;
                    if (ft[e]) {
                        var l = s,
                            u = s,
                            c = -s,
                            h = -s,
                            d = [],
                            f = t && t.pixelRatio || 1;
                        r.each(dt, (function(n, o) {
                            if (n.group === e) {
                                var s = n.getRenderedCanvas(r.clone(t)),
                                    f = n.getDom().getBoundingClientRect();
                                l = i(f.left, l), u = i(f.top, u), c = a(f.right, c), h = a(f.bottom, h), d.push({
                                    dom: s,
                                    left: f.left,
                                    top: f.top
                                })
                            }
                        }));
                        var p = (c *= f) - (l *= f),
                            g = (h *= f) - (u *= f),
                            v = r.createCanvas();
                        v.width = p, v.height = g;
                        var m = n.init(v);
                        return t.connectedBackgroundColor && m.add(new x.Rect({
                            shape: {
                                x: 0,
                                y: 0,
                                width: p,
                                height: g
                            },
                            style: {
                                fill: t.connectedBackgroundColor
                            }
                        })), k(d, (function(t) {
                            var e = new x.Image({
                                style: {
                                    x: t.left * f - l,
                                    y: t.top * f - u,
                                    image: t.dom
                                }
                            });
                            m.add(e)
                        })), m.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"))
                    }
                    return this.getDataURL(t)
                }
            }, H.convertToPixel = r.curry(W, "convertToPixel"), H.convertFromPixel = r.curry(W, "convertFromPixel"), H.containPixel = function(t, e) {
                if (!this._disposed) {
                    var i, n = this._model;
                    return t = _.parseFinder(n, t), r.each(t, (function(t, n) {
                        n.indexOf("Models") >= 0 && r.each(t, (function(t) {
                            var r = t.coordinateSystem;
                            if (r && r.containPoint) i |= !!r.containPoint(e);
                            else if ("seriesModels" === n) {
                                var a = this._chartsMap[t.__viewId];
                                a && a.containPoint && (i |= a.containPoint(e, t))
                            }
                        }), this)
                    }), this), !!i
                }
                this.id
            }, H.getVisual = function(t, e) {
                var i = this._model,
                    n = (t = _.parseFinder(i, t, {
                        defaultMainType: "series"
                    })).seriesModel.getData(),
                    r = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
                return null != r ? n.getItemVisual(r, e) : n.getVisual(e)
            }, H.getViewOfComponentModel = function(t) {
                return this._componentsMap[t.__viewId]
            }, H.getViewOfSeriesModel = function(t) {
                return this._chartsMap[t.__viewId]
            };
            var G = {
                prepareAndUpdate: function(t) {
                    U(this), G.update.call(this, t)
                },
                update: function(t) {
                    var e = this._model,
                        i = this._api,
                        n = this._zr,
                        r = this._coordSysMgr,
                        s = this._scheduler;
                    if (e) {
                        s.restoreData(e, t), s.performSeriesTasks(e), r.create(e, i), s.performDataProcessorTasks(e, t), j(this, e), r.update(e, i), K(e), s.performVisualTasks(e, t), Q(this, e, i, t);
                        var l = e.get("backgroundColor") || "transparent";
                        if (o.canvasSupported) n.setBackgroundColor(l);
                        else {
                            var u = a.parse(l);
                            l = a.stringify(u, "rgb"), 0 === u[3] && (l = "transparent")
                        }
                        tt(e, i)
                    }
                },
                updateTransform: function(t) {
                    var e = this._model,
                        i = this,
                        n = this._api;
                    if (e) {
                        var a = [];
                        e.eachComponent((function(r, o) {
                            var s = i.getViewOfComponentModel(o);
                            if (s && s.__alive)
                                if (s.updateTransform) {
                                    var l = s.updateTransform(o, e, n, t);
                                    l && l.update && a.push(s)
                                } else a.push(s)
                        }));
                        var o = r.createHashMap();
                        e.eachSeries((function(r) {
                            var a = i._chartsMap[r.__viewId];
                            if (a.updateTransform) {
                                var s = a.updateTransform(r, e, n, t);
                                s && s.update && o.set(r.uid, 1)
                            } else o.set(r.uid, 1)
                        })), K(e), this._scheduler.performVisualTasks(e, t, {
                            setDirty: !0,
                            dirtyMap: o
                        }), J(i, e, n, t, o), tt(e, this._api)
                    }
                },
                updateView: function(t) {
                    var e = this._model;
                    e && (y.markUpdateMethod(t, "updateView"), K(e), this._scheduler.performVisualTasks(e, t, {
                        setDirty: !0
                    }), Q(this, this._model, this._api, t), tt(e, this._api))
                },
                updateVisual: function(t) {
                    G.update.call(this, t)
                },
                updateLayout: function(t) {
                    G.update.call(this, t)
                }
            };

            function U(t) {
                var e = t._model,
                    i = t._scheduler;
                i.restorePipelines(e), i.prepareStageTasks(), $(t, "component", e, i), $(t, "chart", e, i), i.plan()
            }

            function Y(t, e, i, n, a) {
                var o = t._model;
                if (n) {
                    var s = {};
                    s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
                    var l = {
                        mainType: n,
                        query: s
                    };
                    a && (l.subType = a);
                    var u = i.excludeSeriesId;
                    null != u && (u = r.createHashMap(_.normalizeToArray(u))), o && o.eachComponent(l, (function(e) {
                        u && null != u.get(e.id) || c(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId])
                    }), t)
                } else k(t._componentsViews.concat(t._chartsViews), c);

                function c(n) {
                    n && n.__alive && n[e] && n[e](n.__model, o, t._api, i)
                }
            }

            function j(t, e) {
                var i = t._chartsMap,
                    n = t._scheduler;
                e.eachSeries((function(t) {
                    n.updateStreamModes(t, i[t.__viewId])
                }))
            }

            function X(t, e) {
                var i = t.type,
                    n = t.escapeConnect,
                    a = rt[i],
                    o = a.actionInfo,
                    s = (o.update || "update").split(":"),
                    l = s.pop();
                s = null != s[0] && L(s[0]), this[R] = !0;
                var u = [t],
                    c = !1;
                t.batch && (c = !0, u = r.map(t.batch, (function(e) {
                    return (e = r.defaults(r.extend({}, e), t)).batch = null, e
                })));
                var h, d = [],
                    f = "highlight" === i || "downplay" === i;
                k(u, (function(t) {
                    (h = (h = a.action(t, this._model, this._api)) || r.extend({}, t)).type = o.event || h.type, d.push(h), f ? Y(this, l, t, "series") : s && Y(this, l, t, s.main, s.sub)
                }), this), "none" === l || f || s || (this[N] ? (U(this), G.update.call(this, t), this[N] = !1) : G[l].call(this, t)), h = c ? {
                    type: o.event || i,
                    escapeConnect: n,
                    batch: d
                } : d[0], this[R] = !1, !e && this._messageCenter.trigger(h.type, h)
            }

            function q(t) {
                for (var e = this._pendingActions; e.length;) {
                    var i = e.shift();
                    X.call(this, i, t)
                }
            }

            function Z(t) {
                !t && this.trigger("updated")
            }

            function $(t, e, i, n) {
                for (var r = "component" === e, a = r ? t._componentsViews : t._chartsViews, o = r ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < a.length; u++) a[u].__alive = !1;

                function c(t) {
                    var e = "_ec_" + t.id + "_" + t.type,
                        u = o[e];
                    if (!u) {
                        var c = L(t.type);
                        (u = new(r ? m.getClass(c.main, c.sub) : y.getClass(c.sub))).init(i, l), o[e] = u, a.push(u), s.add(u.group)
                    }
                    t.__viewId = u.__id = e, u.__alive = !0, u.__model = t, u.group.__ecComponentInfo = {
                        mainType: t.mainType,
                        index: t.componentIndex
                    }, !r && n.prepareView(u, t, i, l)
                }
                for (r ? i.eachComponent((function(t, e) {
                        "series" !== t && c(e)
                    })) : i.eachSeries(c), u = 0; u < a.length;) {
                    var h = a[u];
                    h.__alive ? u++ : (!r && h.renderTask.dispose(), s.remove(h.group), h.dispose(i, l), a.splice(u, 1), delete o[h.__id], h.__id = h.group.__ecComponentInfo = null)
                }
            }

            function K(t) {
                t.clearColorPalette(), t.eachSeries((function(t) {
                    t.clearColorPalette()
                }))
            }

            function Q(t, e, i, n) {
                (function(t, e, i, n, r) {
                    k(r || t._componentsViews, (function(t) {
                        var r = t.__model;
                        t.render(r, e, i, n), it(r, t)
                    }))
                })(t, e, i, n), k(t._chartsViews, (function(t) {
                    t.__alive = !1
                })), J(t, e, i, n), k(t._chartsViews, (function(t) {
                    t.__alive || t.remove(e, i)
                }))
            }

            function J(t, e, i, n, r) {
                var a, s = t._scheduler;
                e.eachSeries((function(e) {
                        var i = t._chartsMap[e.__viewId];
                        i.__alive = !0;
                        var o = i.renderTask;
                        s.updatePayload(o, n), r && r.get(e.uid) && o.dirty(), a |= o.perform(s.getPerformArgs(o)), i.group.silent = !!e.get("silent"), it(e, i),
                            function(t, e) {
                                var i = t.get("blendMode") || null;
                                e.group.traverse((function(t) {
                                    t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable((function(t) {
                                        t.setStyle("blend", i)
                                    }))
                                }))
                            }(e, i)
                    })), s.unfinished |= a,
                    function(t, e) {
                        var i = t._zr.storage,
                            n = 0;
                        i.traverse((function(t) {
                            n++
                        })), n > e.get("hoverLayerThreshold") && !o.node && e.eachSeries((function(e) {
                            if (!e.preventUsingHoverLayer) {
                                var i = t._chartsMap[e.__viewId];
                                i.__alive && i.group.traverse((function(t) {
                                    t.useHoverLayer = !0
                                }))
                            }
                        }))
                    }(t, e), S(t._zr.dom, e)
            }

            function tt(t, e) {
                k(lt, (function(i) {
                    i(t, e)
                }))
            }
            H.resize = function(t) {
                if (this._disposed) this.id;
                else {
                    this._zr.resize(t);
                    var e = this._model;
                    if (this._loadingFX && this._loadingFX.resize(), e) {
                        var i = e.resetOption("media"),
                            n = t && t.silent;
                        this[R] = !0, i && U(this), G.update.call(this), this[R] = !1, q.call(this, n), Z.call(this, n)
                    }
                }
            }, H.showLoading = function(t, e) {
                if (this._disposed) this.id;
                else if (O(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), ht[t]) {
                    var i = ht[t](this._api, e),
                        n = this._zr;
                    this._loadingFX = i, n.add(i)
                }
            }, H.hideLoading = function() {
                this._disposed ? this.id : (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)
            }, H.makeActionFromEvent = function(t) {
                var e = r.extend({}, t);
                return e.type = at[t.type], e
            }, H.dispatchAction = function(t, e) {
                this._disposed ? this.id : (O(e) || (e = {
                    silent: !!e
                }), rt[t.type] && this._model && (this[R] ? this._pendingActions.push(t) : (X.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && o.browser.weChat && this._throttledZrFlush(), q.call(this, e.silent), Z.call(this, e.silent))))
            }, H.appendData = function(t) {
                if (this._disposed) this.id;
                else {
                    var e = t.seriesIndex;
                    this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0
                }
            }, H.on = z("on", !1), H.off = z("off", !1), H.one = z("one", !1);
            var et = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];

            function it(t, e) {
                var i = t.get("z"),
                    n = t.get("zlevel");
                e.group.traverse((function(t) {
                    "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
                }))
            }

            function nt() {
                this.eventInfo
            }
            H._initEvents = function() {
                k(et, (function(t) {
                    var e = function(e) {
                        var i, n = this.getModel(),
                            a = e.target;
                        if ("globalout" === t) i = {};
                        else if (a && null != a.dataIndex) {
                            var o = a.dataModel || n.getSeriesByIndex(a.seriesIndex);
                            i = o && o.getDataParams(a.dataIndex, a.dataType, a) || {}
                        } else a && a.eventData && (i = r.extend({}, a.eventData));
                        if (i) {
                            var s = i.componentType,
                                l = i.componentIndex;
                            "markLine" !== s && "markPoint" !== s && "markArea" !== s || (s = "series", l = i.seriesIndex);
                            var u = s && null != l && n.getComponent(s, l),
                                c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                            i.event = e, i.type = t, this._ecEventProcessor.eventInfo = {
                                targetEl: a,
                                packedEvent: i,
                                model: u,
                                view: c
                            }, this.trigger(t, i)
                        }
                    };
                    e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
                }), this), k(at, (function(t, e) {
                    this._messageCenter.on(e, (function(t) {
                        this.trigger(e, t)
                    }), this)
                }), this)
            }, H.isDisposed = function() {
                return this._disposed
            }, H.clear = function() {
                this._disposed ? this.id : this.setOption({
                    series: []
                }, !0)
            }, H.dispose = function() {
                if (this._disposed) this.id;
                else {
                    this._disposed = !0, _.setAttribute(this.getDom(), vt, "");
                    var t = this._api,
                        e = this._model;
                    k(this._componentsViews, (function(i) {
                        i.dispose(e, t)
                    })), k(this._chartsViews, (function(i) {
                        i.dispose(e, t)
                    })), this._zr.dispose(), delete dt[this.id]
                }
            }, r.mixin(V, l), nt.prototype = {
                constructor: nt,
                normalizeQuery: function(t) {
                    var e = {},
                        i = {},
                        n = {};
                    if (r.isString(t)) {
                        var a = L(t);
                        e.mainType = a.main || null, e.subType = a.sub || null
                    } else {
                        var o = ["Index", "Name", "Id"],
                            s = {
                                name: 1,
                                dataIndex: 1,
                                dataType: 1
                            };
                        r.each(t, (function(t, r) {
                            for (var a = !1, l = 0; l < o.length; l++) {
                                var u = o[l],
                                    c = r.lastIndexOf(u);
                                if (c > 0 && c === r.length - u.length) {
                                    var h = r.slice(0, c);
                                    "data" !== h && (e.mainType = h, e[u.toLowerCase()] = t, a = !0)
                                }
                            }
                            s.hasOwnProperty(r) && (i[r] = t, a = !0), a || (n[r] = t)
                        }))
                    }
                    return {
                        cptQuery: e,
                        dataQuery: i,
                        otherQuery: n
                    }
                },
                filter: function(t, e, i) {
                    var n = this.eventInfo;
                    if (!n) return !0;
                    var r = n.targetEl,
                        a = n.packedEvent,
                        o = n.model,
                        s = n.view;
                    if (!o || !s) return !0;
                    var l = e.cptQuery,
                        u = e.dataQuery;
                    return c(l, o, "mainType") && c(l, o, "subType") && c(l, o, "index", "componentIndex") && c(l, o, "name") && c(l, o, "id") && c(u, a, "name") && c(u, a, "dataIndex") && c(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));

                    function c(t, e, i, n) {
                        return null == t[i] || e[n || i] === t[i]
                    }
                },
                afterTrigger: function() {
                    this.eventInfo = null
                }
            };
            var rt = {},
                at = {},
                ot = [],
                st = [],
                lt = [],
                ut = [],
                ct = {},
                ht = {},
                dt = {},
                ft = {},
                pt = new Date - 0,
                gt = new Date - 0,
                vt = "_echarts_instance_";

            function mt(t) {
                ft[t] = !1
            }
            var yt = mt;

            function xt(t) {
                return dt[_.getAttribute(t, vt)]
            }

            function _t(t, e) {
                ct[t] = e
            }

            function bt(t) {
                st.push(t)
            }

            function wt(t, e) {
                Mt(ot, t, e, 1e3)
            }

            function St(t, e, i) {
                "function" == typeof e && (i = e, e = "");
                var n = O(t) ? t.type : [t, t = {
                    event: e
                }][0];
                t.event = (t.event || n).toLowerCase(), e = t.event, D(B.test(n) && B.test(e)), rt[n] || (rt[n] = {
                    action: i,
                    actionInfo: t
                }), at[e] = n
            }

            function Ct(t, e) {
                Mt(ut, t, e, 3e3, "visual")
            }

            function Mt(t, e, i, n, r) {
                (P(e) || O(e)) && (i = e, e = n);
                var a = M.wrapStageHandler(i, r);
                return a.__prio = e, a.__raw = i, t.push(a), a
            }

            function Tt(t, e) {
                ht[t] = e
            }
            Ct(2e3, w), bt(f), wt(900, p), Tt("default", C), St({
                type: "highlight",
                event: "highlight",
                update: "highlight"
            }, r.noop), St({
                type: "downplay",
                event: "downplay",
                update: "downplay"
            }, r.noop), _t("light", T), _t("dark", I);
            e.version = "4.6.0", e.dependencies = {
                zrender: "4.2.0"
            }, e.PRIORITY = E, e.init = function(t, e, i) {
                var n = xt(t);
                if (n) return n;
                var r = new V(t, e, i);
                return r.id = "ec_" + pt++, dt[r.id] = r, _.setAttribute(t, vt, r.id),
                    function(t) {
                        var e = "__connectUpdateStatus";

                        function i(t, i) {
                            for (var n = 0; n < t.length; n++) {
                                t[n][e] = i
                            }
                        }
                        k(at, (function(n, r) {
                            t._messageCenter.on(r, (function(n) {
                                if (ft[t.group] && 0 !== t[e]) {
                                    if (n && n.escapeConnect) return;
                                    var r = t.makeActionFromEvent(n),
                                        a = [];
                                    k(dt, (function(e) {
                                        e !== t && e.group === t.group && a.push(e)
                                    })), i(a, 0), k(a, (function(t) {
                                        1 !== t[e] && t.dispatchAction(r)
                                    })), i(a, 2)
                                }
                            }))
                        }))
                    }(r), r
            }, e.connect = function(t) {
                if (r.isArray(t)) {
                    var e = t;
                    t = null, k(e, (function(e) {
                        null != e.group && (t = e.group)
                    })), t = t || "g_" + gt++, k(e, (function(e) {
                        e.group = t
                    }))
                }
                return ft[t] = !0, t
            }, e.disConnect = mt, e.disconnect = yt, e.dispose = function(t) {
                "string" == typeof t ? t = dt[t] : t instanceof V || (t = xt(t)), t instanceof V && !t.isDisposed() && t.dispose()
            }, e.getInstanceByDom = xt, e.getInstanceById = function(t) {
                return dt[t]
            }, e.registerTheme = _t, e.registerPreprocessor = bt, e.registerProcessor = wt, e.registerPostUpdate = function(t) {
                lt.push(t)
            }, e.registerAction = St, e.registerCoordinateSystem = function(t, e) {
                h.register(t, e)
            }, e.getCoordinateSystemDimensions = function(t) {
                var e = h.get(t);
                if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
            }, e.registerLayout = function(t, e) {
                Mt(ut, t, e, 1e3, "layout")
            }, e.registerVisual = Ct, e.registerLoading = Tt, e.extendComponentModel = function(t) {
                return g.extend(t)
            }, e.extendComponentView = function(t) {
                return m.extend(t)
            }, e.extendSeriesModel = function(t) {
                return v.extend(t)
            }, e.extendChartView = function(t) {
                return y.extend(t)
            }, e.setCanvasCreator = function(t) {
                r.$override("createCanvas", t)
            }, e.registerMap = function(t, e, i) {
                A.registerMap(t, e, i)
            }, e.getMap = function(t) {
                var e = A.retrieveMap(t);
                return e && e[0] && {
                    geoJson: e[0].geoJSON,
                    specialAreas: e[0].specialAreas
                }
            }, e.dataTool = {};
            var It = i("d4be");
            ! function() {
                for (var t in It) It.hasOwnProperty(t) && (e[t] = It[t])
            }()
        },
        5771: function(t, e, i) {
            var n = i("c73f"),
                r = i("5810"),
                a = i("b2de"),
                o = a.isString,
                s = a.isFunction,
                l = a.isObject,
                u = a.isArrayLike,
                c = a.indexOf,
                h = function() {
                    this.animators = []
                };

            function d(t, e, i, n, r, a, l, u) {
                o(n) ? (a = r, r = n, n = 0) : s(r) ? (a = r, r = "linear", n = 0) : s(n) ? (a = n, n = 0) : s(i) ? (a = i, i = 500) : i || (i = 500), t.stopAnimation(), f(t, "", t, e, i, n, u);
                var c = t.animators.slice(),
                    h = c.length;

                function d() {
                    --h || a && a()
                }
                h || a && a();
                for (var p = 0; p < c.length; p++) c[p].done(d).start(r, l)
            }

            function f(t, e, i, n, r, a, o) {
                var s = {},
                    c = 0;
                for (var h in n) n.hasOwnProperty(h) && (null != i[h] ? l(n[h]) && !u(n[h]) ? f(t, e ? e + "." + h : h, i[h], n[h], r, a, o) : (o ? (s[h] = i[h], p(t, e, h, n[h])) : s[h] = n[h], c++) : null == n[h] || o || p(t, e, h, n[h]));
                c > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
            }

            function p(t, e, i, n) {
                if (e) {
                    var r = {};
                    r[e] = {}, r[e][i] = n, t.attr(r)
                } else t.attr(i, n)
            }
            h.prototype = {
                constructor: h,
                animate: function(t, e) {
                    var i, a = !1,
                        o = this,
                        s = this.__zr;
                    if (t) {
                        var l = t.split("."),
                            u = o;
                        a = "shape" === l[0];
                        for (var h = 0, d = l.length; h < d; h++) u && (u = u[l[h]]);
                        u && (i = u)
                    } else i = o;
                    if (i) {
                        var f = o.animators,
                            p = new n(i, e);
                        return p.during((function(t) {
                            o.dirty(a)
                        })).done((function() {
                            f.splice(c(f, p), 1)
                        })), f.push(p), s && s.animation.addAnimator(p), p
                    }
                    r('Property "' + t + '" is not existed in element ' + o.id)
                },
                stopAnimation: function(t) {
                    for (var e = this.animators, i = e.length, n = 0; n < i; n++) e[n].stop(t);
                    return e.length = 0, this
                },
                animateTo: function(t, e, i, n, r, a) {
                    d(this, t, e, i, n, r, a)
                },
                animateFrom: function(t, e, i, n, r, a) {
                    d(this, t, e, i, n, r, a, !0)
                }
            };
            var g = h;
            t.exports = g
        },
        5810: function(t, e, i) {
            var n = function() {};
            1 === i("1f2e").debugMode && (n = console.error);
            var r = n;
            t.exports = r
        },
        "5b35": function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de"),
                a = i("e62d0"),
                o = i("0127").isNameSpecified,
                s = i("9934").legend.selector,
                l = {
                    all: {
                        type: "all",
                        title: r.clone(s.all)
                    },
                    inverse: {
                        type: "inverse",
                        title: r.clone(s.inverse)
                    }
                },
                u = n.extendComponentModel({
                    type: "legend.plain",
                    dependencies: ["series"],
                    layoutMode: {
                        type: "box",
                        ignoreSize: !0
                    },
                    init: function(t, e, i) {
                        this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}, this._updateSelector(t)
                    },
                    mergeOption: function(t) {
                        u.superCall(this, "mergeOption", t), this._updateSelector(t)
                    },
                    _updateSelector: function(t) {
                        var e = t.selector;
                        !0 === e && (e = t.selector = ["all", "inverse"]), r.isArray(e) && r.each(e, (function(t, i) {
                            r.isString(t) && (t = {
                                type: t
                            }), e[i] = r.merge(t, l[t.type])
                        }))
                    },
                    optionUpdated: function() {
                        this._updateData(this.ecModel);
                        var t = this._data;
                        if (t[0] && "single" === this.get("selectedMode")) {
                            for (var e = !1, i = 0; i < t.length; i++) {
                                var n = t[i].get("name");
                                if (this.isSelected(n)) {
                                    this.select(n), e = !0;
                                    break
                                }
                            }!e && this.select(t[0].get("name"))
                        }
                    },
                    _updateData: function(t) {
                        var e = [],
                            i = [];
                        t.eachRawSeries((function(n) {
                            var r, a = n.name;
                            if (i.push(a), n.legendVisualProvider) {
                                var s = n.legendVisualProvider.getAllNames();
                                t.isSeriesFiltered(n) || (i = i.concat(s)), s.length ? e = e.concat(s) : r = !0
                            } else r = !0;
                            r && o(n) && e.push(n.name)
                        })), this._availableNames = i;
                        var n = this.get("data") || e,
                            s = r.map(n, (function(t) {
                                return "string" != typeof t && "number" != typeof t || (t = {
                                    name: t
                                }), new a(t, this, this.ecModel)
                            }), this);
                        this._data = s
                    },
                    getData: function() {
                        return this._data
                    },
                    select: function(t) {
                        var e = this.option.selected;
                        if ("single" === this.get("selectedMode")) {
                            var i = this._data;
                            r.each(i, (function(t) {
                                e[t.get("name")] = !1
                            }))
                        }
                        e[t] = !0
                    },
                    unSelect: function(t) {
                        "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
                    },
                    toggleSelected: function(t) {
                        var e = this.option.selected;
                        e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
                    },
                    allSelect: function() {
                        var t = this._data,
                            e = this.option.selected;
                        r.each(t, (function(t) {
                            e[t.get("name", !0)] = !0
                        }))
                    },
                    inverseSelect: function() {
                        var t = this._data,
                            e = this.option.selected;
                        r.each(t, (function(t) {
                            var i = t.get("name", !0);
                            e.hasOwnProperty(i) || (e[i] = !0), e[i] = !e[i]
                        }))
                    },
                    isSelected: function(t) {
                        var e = this.option.selected;
                        return !(e.hasOwnProperty(t) && !e[t]) && r.indexOf(this._availableNames, t) >= 0
                    },
                    getOrient: function() {
                        return "vertical" === this.get("orient") ? {
                            index: 1,
                            name: "vertical"
                        } : {
                            index: 0,
                            name: "horizontal"
                        }
                    },
                    defaultOption: {
                        zlevel: 0,
                        z: 4,
                        show: !0,
                        orient: "horizontal",
                        left: "center",
                        top: 0,
                        align: "auto",
                        backgroundColor: "rgba(0,0,0,0)",
                        borderColor: "#ccc",
                        borderRadius: 0,
                        borderWidth: 0,
                        padding: 5,
                        itemGap: 10,
                        itemWidth: 25,
                        itemHeight: 14,
                        inactiveColor: "#ccc",
                        inactiveBorderColor: "#ccc",
                        itemStyle: {
                            borderWidth: 0
                        },
                        textStyle: {
                            color: "#333"
                        },
                        selectedMode: !0,
                        selector: !1,
                        selectorLabel: {
                            show: !0,
                            borderRadius: 10,
                            padding: [3, 5, 3, 5],
                            fontSize: 12,
                            fontFamily: " sans-serif",
                            color: "#666",
                            borderWidth: 1,
                            borderColor: "#666"
                        },
                        emphasis: {
                            selectorLabel: {
                                show: !0,
                                color: "#eee",
                                backgroundColor: "#666"
                            }
                        },
                        selectorPosition: "auto",
                        selectorItemGap: 7,
                        selectorButtonGap: 10,
                        tooltip: {
                            show: !1
                        }
                    }
                }),
                c = u;
            t.exports = c
        },
        "5d88": function(t, e, i) {
            var n = i("b2de"),
                r = i("63e4"),
                a = i("3ce9"),
                o = r.prototype,
                s = r.extend({
                    type: "ordinal",
                    init: function(t, e) {
                        t && !n.isArray(t) || (t = new a({
                            categories: t
                        })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
                    },
                    parse: function(t) {
                        return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
                    },
                    contain: function(t) {
                        return t = this.parse(t), o.contain.call(this, t) && null != this._ordinalMeta.categories[t]
                    },
                    normalize: function(t) {
                        return o.normalize.call(this, this.parse(t))
                    },
                    scale: function(t) {
                        return Math.round(o.scale.call(this, t))
                    },
                    getTicks: function() {
                        for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
                        return t
                    },
                    getLabel: function(t) {
                        if (!this.isBlank()) return this._ordinalMeta.categories[t]
                    },
                    count: function() {
                        return this._extent[1] - this._extent[0] + 1
                    },
                    unionExtentFromData: function(t, e) {
                        this.unionExtent(t.getApproximateExtent(e))
                    },
                    getOrdinalMeta: function() {
                        return this._ordinalMeta
                    },
                    niceTicks: n.noop,
                    niceExtent: n.noop
                });
            s.create = function() {
                return new s
            };
            var l = s;
            t.exports = l
        },
        "5ee5": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = {
                    name: "HomeLink",
                    props: {
                        userInfo: {}
                    },
                    data: function() {
                        return {}
                    }
                },
                r = (i("3fd8"), i("e148"), i("2877")),
                a = Object(r.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("el-card", {
                        staticClass: "my-card home-link-card"
                    }, [i("div", {
                        staticClass: "home-link"
                    }, [i("div", {
                        staticClass: "header"
                    }, [i("span", {
                        staticClass: "header-title"
                    }, [t._v("常用功能")])]), i("div", {
                        staticClass: "functions"
                    }, [i("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/system/set?tab=info"
                        }
                    }, [t._v("店铺信息")]), i("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/product/category"
                        }
                    }, [t._v("商品分类")]), i("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/product/list"
                        }
                    }, [t._v("商品列表")]), i("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/order/list"
                        }
                    }, [t._v("订单记录")]), i("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/order/analysis"
                        }
                    }, [t._v("收益统计")]), i("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/system/pay"
                        }
                    }, [t._v("支付渠道")])], 1)])])
                }), [], !1, null, "2e72c4c4", null);
            e.default = a.exports
        },
        "60c4": function(t, e, i) {},
        "60e1": function(t, e, i) {},
        "63e4": function(t, e, i) {
            var n = i("8dab");

            function r(t) {
                this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
            }
            r.prototype.parse = function(t) {
                return t
            }, r.prototype.getSetting = function(t) {
                return this._setting[t]
            }, r.prototype.contain = function(t) {
                var e = this._extent;
                return t >= e[0] && t <= e[1]
            }, r.prototype.normalize = function(t) {
                var e = this._extent;
                return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
            }, r.prototype.scale = function(t) {
                var e = this._extent;
                return t * (e[1] - e[0]) + e[0]
            }, r.prototype.unionExtent = function(t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
            }, r.prototype.unionExtentFromData = function(t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, r.prototype.getExtent = function() {
                return this._extent.slice()
            }, r.prototype.setExtent = function(t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
            }, r.prototype.isBlank = function() {
                return this._isBlank
            }, r.prototype.setBlank = function(t) {
                this._isBlank = t
            }, r.prototype.getLabel = null, n.enableClassExtend(r), n.enableClassManagement(r, {
                registerWhenExtend: !0
            });
            var a = r;
            t.exports = a
        },
        "67de": function(t, e, i) {
            var n = i("b2de"),
                r = {
                    show: !0,
                    zlevel: 0,
                    z: 0,
                    inverse: !1,
                    name: "",
                    nameLocation: "end",
                    nameRotate: null,
                    nameTruncate: {
                        maxWidth: null,
                        ellipsis: "...",
                        placeholder: "."
                    },
                    nameTextStyle: {},
                    nameGap: 15,
                    silent: !1,
                    triggerEvent: !1,
                    tooltip: {
                        show: !1
                    },
                    axisPointer: {},
                    axisLine: {
                        show: !0,
                        onZero: !0,
                        onZeroAxisIndex: null,
                        lineStyle: {
                            color: "#333",
                            width: 1,
                            type: "solid"
                        },
                        symbol: ["none", "none"],
                        symbolSize: [10, 15]
                    },
                    axisTick: {
                        show: !0,
                        inside: !1,
                        length: 5,
                        lineStyle: {
                            width: 1
                        }
                    },
                    axisLabel: {
                        show: !0,
                        inside: !1,
                        rotate: 0,
                        showMinLabel: null,
                        showMaxLabel: null,
                        margin: 8,
                        fontSize: 12
                    },
                    splitLine: {
                        show: !0,
                        lineStyle: {
                            color: ["#ccc"],
                            width: 1,
                            type: "solid"
                        }
                    },
                    splitArea: {
                        show: !1,
                        areaStyle: {
                            color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
                        }
                    }
                },
                a = {};
            a.categoryAxis = n.merge({
                boundaryGap: !0,
                deduplication: null,
                splitLine: {
                    show: !1
                },
                axisTick: {
                    alignWithLabel: !1,
                    interval: "auto"
                },
                axisLabel: {
                    interval: "auto"
                }
            }, r), a.valueAxis = n.merge({
                boundaryGap: [0, 0],
                splitNumber: 5,
                minorTick: {
                    show: !1,
                    splitNumber: 5,
                    length: 3,
                    lineStyle: {}
                },
                minorSplitLine: {
                    show: !1,
                    lineStyle: {
                        color: "#eee",
                        width: 1
                    }
                }
            }, r), a.timeAxis = n.defaults({
                scale: !0,
                min: "dataMin",
                max: "dataMax"
            }, a.valueAxis), a.logAxis = n.defaults({
                scale: !0,
                logBase: 10
            }, a.valueAxis);
            var o = a;
            t.exports = o
        },
        "6a88": function(t, e, i) {
            var n = i("4592"),
                r = i("e2dc").parsePercent,
                a = Math.PI / 180;

            function o(t, e, i, n, r, a, o, s, l, u) {
                function c(e, i, n, r) {
                    for (var a = e; a < i && !(t[a].y + n > l + o); a++)
                        if (t[a].y += n, a > e && a + 1 < i && t[a + 1].y > t[a].y + t[a].height) return void h(a, n / 2);
                    h(i - 1, n / 2)
                }

                function h(e, i) {
                    for (var n = e; n >= 0 && !(t[n].y - i < l) && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
                }

                function d(t, e, i, n, r, a) {
                    for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)
                        if ("none" === t[s].labelAlignTo) {
                            var u = Math.abs(t[s].y - n),
                                c = t[s].len,
                                h = t[s].len2,
                                d = u < r + c ? Math.sqrt((r + c + h) * (r + c + h) - u * u) : Math.abs(t[s].x - i);
                            e && d >= o && (d = o - 10), !e && d <= o && (d = o + 10), t[s].x = i + d * a, o = d
                        }
                }
                t.sort((function(t, e) {
                    return t.y - e.y
                }));
                for (var f, p = 0, g = t.length, v = [], m = [], y = 0; y < g; y++) {
                    if ("outer" === t[y].position && "labelLine" === t[y].labelAlignTo) {
                        var x = t[y].x - u;
                        t[y].linePoints[1][0] += x, t[y].x = u
                    }(f = t[y].y - p) < 0 && c(y, g, -f), p = t[y].y + t[y].height
                }
                for (o - p < 0 && h(g - 1, p - o), y = 0; y < g; y++) t[y].y >= i ? m.push(t[y]) : v.push(t[y]);
                d(v, !1, e, i, n, r), d(m, !0, e, i, n, r)
            }

            function s(t, e, i, r, a, s, u, c) {
                for (var h = [], d = [], f = Number.MAX_VALUE, p = -Number.MAX_VALUE, g = 0; g < t.length; g++) l(t[g]) || (t[g].x < e ? (f = Math.min(f, t[g].x), h.push(t[g])) : (p = Math.max(p, t[g].x), d.push(t[g])));
                for (o(d, e, i, r, 1, 0, s, 0, c, p), o(h, e, i, r, -1, 0, s, 0, c, f), g = 0; g < t.length; g++) {
                    var v = t[g];
                    if (!l(v)) {
                        var m = v.linePoints;
                        if (m) {
                            var y, x = "edge" === v.labelAlignTo,
                                _ = v.textRect.width;
                            (y = x ? v.x < e ? m[2][0] - v.labelDistance - u - v.labelMargin : u + a - v.labelMargin - m[2][0] - v.labelDistance : v.x < e ? v.x - u - v.bleedMargin : u + a - v.x - v.bleedMargin) < v.textRect.width && (v.text = n.truncateText(v.text, y, v.font), "edge" === v.labelAlignTo && (_ = n.getWidth(v.text, v.font)));
                            var b = m[1][0] - m[2][0];
                            x ? v.x < e ? m[2][0] = u + v.labelMargin + _ + v.labelDistance : m[2][0] = u + a - v.labelMargin - _ - v.labelDistance : (v.x < e ? m[2][0] = v.x + v.labelDistance : m[2][0] = v.x - v.labelDistance, m[1][0] = m[2][0] + b), m[1][1] = m[2][1] = v.y
                        }
                    }
                }
            }

            function l(t) {
                return "center" === t.position
            }
            t.exports = function(t, e, i, o, l, u) {
                var c, h, d = t.getData(),
                    f = [],
                    p = !1,
                    g = (t.get("minShowLabelAngle") || 0) * a;
                d.each((function(a) {
                    var o = d.getItemLayout(a),
                        s = d.getItemModel(a),
                        u = s.getModel("label"),
                        v = u.get("position") || s.get("emphasis.label.position"),
                        m = u.get("distanceToLabelLine"),
                        y = u.get("alignTo"),
                        x = r(u.get("margin"), i),
                        _ = u.get("bleedMargin"),
                        b = u.getFont(),
                        w = s.getModel("labelLine"),
                        S = w.get("length");
                    S = r(S, i);
                    var C = w.get("length2");
                    if (C = r(C, i), !(o.angle < g)) {
                        var M, T, I, A, D = (o.startAngle + o.endAngle) / 2,
                            k = Math.cos(D),
                            P = Math.sin(D);
                        c = o.cx, h = o.cy;
                        var O, L = t.getFormattedLabel(a, "normal") || d.getName(a),
                            E = n.getBoundingRect(L, b, A, "top"),
                            R = "inside" === v || "inner" === v;
                        if ("center" === v) M = o.cx, T = o.cy, A = "center";
                        else {
                            var N = (R ? (o.r + o.r0) / 2 * k : o.r * k) + c,
                                B = (R ? (o.r + o.r0) / 2 * P : o.r * P) + h;
                            if (M = N + 3 * k, T = B + 3 * P, !R) {
                                var z = N + k * (S + e - o.r),
                                    F = B + P * (S + e - o.r),
                                    V = z + (k < 0 ? -1 : 1) * C;
                                M = "edge" === y ? k < 0 ? l + x : l + i - x : V + (k < 0 ? -m : m), T = F, I = [
                                    [N, B],
                                    [z, F],
                                    [V, F]
                                ]
                            }
                            A = R ? "center" : "edge" === y ? k > 0 ? "right" : "left" : k > 0 ? "left" : "right"
                        }
                        var H = u.get("rotate");
                        O = "number" == typeof H ? H * (Math.PI / 180) : H ? k < 0 ? -D + Math.PI : -D : 0, p = !!O, o.label = {
                            x: M,
                            y: T,
                            position: v,
                            height: E.height,
                            len: S,
                            len2: C,
                            linePoints: I,
                            textAlign: A,
                            verticalAlign: "middle",
                            rotation: O,
                            inside: R,
                            labelDistance: m,
                            labelAlignTo: y,
                            labelMargin: x,
                            bleedMargin: _,
                            textRect: E,
                            text: L,
                            font: b
                        }, R || f.push(o.label)
                    }
                })), !p && t.get("avoidLabelOverlap") && s(f, c, h, e, i, o, l, u)
            }
        },
        "6b25": function(t, e) {
            var i = "undefined" == typeof Float32Array ? Array : Float32Array;

            function n() {
                var t = new i(6);
                return r(t), t
            }

            function r(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }

            function a(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }
            e.create = n, e.identity = r, e.copy = a, e.mul = function(t, e, i) {
                var n = e[0] * i[0] + e[2] * i[1],
                    r = e[1] * i[0] + e[3] * i[1],
                    a = e[0] * i[2] + e[2] * i[3],
                    o = e[1] * i[2] + e[3] * i[3],
                    s = e[0] * i[4] + e[2] * i[5] + e[4],
                    l = e[1] * i[4] + e[3] * i[5] + e[5];
                return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
            }, e.translate = function(t, e, i) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
            }, e.rotate = function(t, e, i) {
                var n = e[0],
                    r = e[2],
                    a = e[4],
                    o = e[1],
                    s = e[3],
                    l = e[5],
                    u = Math.sin(i),
                    c = Math.cos(i);
                return t[0] = n * c + o * u, t[1] = -n * u + o * c, t[2] = r * c + s * u, t[3] = -r * u + c * s, t[4] = c * a + u * l, t[5] = c * l - u * a, t
            }, e.scale = function(t, e, i) {
                var n = i[0],
                    r = i[1];
                return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
            }, e.invert = function(t, e) {
                var i = e[0],
                    n = e[2],
                    r = e[4],
                    a = e[1],
                    o = e[3],
                    s = e[5],
                    l = i * o - a * n;
                return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
            }, e.clone = function(t) {
                var e = n();
                return a(e, t), e
            }
        },
        "6c7e": function(t, e, i) {
            var n = i("3caf"),
                r = i("df91"),
                a = i("102c"),
                o = a.quadraticSubdivide,
                s = a.cubicSubdivide,
                l = a.quadraticAt,
                u = a.cubicAt,
                c = a.quadraticDerivativeAt,
                h = a.cubicDerivativeAt,
                d = [];

            function f(t, e, i) {
                var n = t.cpx2,
                    r = t.cpy2;
                return null === n || null === r ? [(i ? h : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? h : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? c : l)(t.x1, t.cpx1, t.x2, e), (i ? c : l)(t.y1, t.cpy1, t.y2, e)]
            }
            var p = n.extend({
                type: "bezier-curve",
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    cpx1: 0,
                    cpy1: 0,
                    percent: 1
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function(t, e) {
                    var i = e.x1,
                        n = e.y1,
                        r = e.x2,
                        a = e.y2,
                        l = e.cpx1,
                        u = e.cpy1,
                        c = e.cpx2,
                        h = e.cpy2,
                        f = e.percent;
                    0 !== f && (t.moveTo(i, n), null == c || null == h ? (f < 1 && (o(i, l, r, f, d), l = d[1], r = d[2], o(n, u, a, f, d), u = d[1], a = d[2]), t.quadraticCurveTo(l, u, r, a)) : (f < 1 && (s(i, l, c, r, f, d), l = d[1], c = d[2], r = d[3], s(n, u, h, a, f, d), u = d[1], h = d[2], a = d[3]), t.bezierCurveTo(l, u, c, h, r, a)))
                },
                pointAt: function(t) {
                    return f(this.shape, t, !1)
                },
                tangentAt: function(t) {
                    var e = f(this.shape, t, !0);
                    return r.normalize(e, e)
                }
            });
            t.exports = p
        },
        "6ca2": function(t, e, i) {
            var n = i("8031");

            function r(t) {
                this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
            }
            r.prototype = {
                constructor: r,
                step: function(t, e) {
                    if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e;
                    else {
                        var i = (t - this._startTime - this._pausedTime) / this._life;
                        if (!(i < 0)) {
                            i = Math.min(i, 1);
                            var r = this.easing,
                                a = "string" == typeof r ? n[r] : r,
                                o = "function" == typeof a ? a(i) : i;
                            return this.fire("frame", o), 1 === i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                        }
                    }
                },
                restart: function(t) {
                    var e = (t - this._startTime - this._pausedTime) % this._life;
                    this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
                },
                fire: function(t, e) {
                    this[t = "on" + t] && this[t](this._target, e)
                },
                pause: function() {
                    this._paused = !0
                },
                resume: function() {
                    this._paused = !1
                }
            };
            var a = r;
            t.exports = a
        },
        "6ca3": function(t, e, i) {
            var n = i("b2de"),
                r = i("0127"),
                a = i("3c57"),
                o = n.each,
                s = n.clone,
                l = n.map,
                u = n.merge,
                c = /^(min|max)?(.+)$/;

            function h(t) {
                this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
            }

            function d(t, e, i) {
                var r, a, s = [],
                    l = [],
                    u = t.timeline;
                if (t.baseOption && (a = t.baseOption), (u || t.options) && (a = a || {}, s = (t.options || []).slice()), t.media) {
                    a = a || {};
                    var c = t.media;
                    o(c, (function(t) {
                        t && t.option && (t.query ? l.push(t) : r || (r = t))
                    }))
                }
                return a || (a = t), a.timeline || (a.timeline = u), o([a].concat(s).concat(n.map(l, (function(t) {
                    return t.option
                }))), (function(t) {
                    o(e, (function(e) {
                        e(t, i)
                    }))
                })), {
                    baseOption: a,
                    timelineOptions: s,
                    mediaDefault: r,
                    mediaList: l
                }
            }

            function f(t, e, i) {
                var r = {
                        width: e,
                        height: i,
                        aspectratio: e / i
                    },
                    a = !0;
                return n.each(t, (function(t, e) {
                    var i = e.match(c);
                    if (i && i[1] && i[2]) {
                        var n = i[1],
                            o = i[2].toLowerCase();
                        (function(t, e, i) {
                            return "min" === i ? t >= e : "max" === i ? t <= e : t === e
                        })(r[o], t, n) || (a = !1)
                    }
                })), a
            }

            function p(t, e) {
                o(e = e || {}, (function(e, i) {
                    if (null != e) {
                        var n = t[i];
                        if (a.hasClass(i)) {
                            e = r.normalizeToArray(e), n = r.normalizeToArray(n);
                            var o = r.mappingToExists(n, e);
                            t[i] = l(o, (function(t) {
                                return t.option && t.exist ? u(t.exist, t.option, !0) : t.exist || t.option
                            }))
                        } else t[i] = u(n, e, !0)
                    }
                }))
            }
            h.prototype = {
                constructor: h,
                setOption: function(t, e) {
                    t && n.each(r.normalizeToArray(t.series), (function(t) {
                        t && t.data && n.isTypedArray(t.data) && n.setAsPrimitive(t.data)
                    })), t = s(t);
                    var i = this._optionBackup,
                        a = d.call(this, t, e, !i);
                    this._newBaseOption = a.baseOption, i ? (p(i.baseOption, a.baseOption), a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a
                },
                mountOption: function(t) {
                    var e = this._optionBackup;
                    return this._timelineOptions = l(e.timelineOptions, s), this._mediaList = l(e.mediaList, s), this._mediaDefault = s(e.mediaDefault), this._currentMediaIndices = [], s(t ? e.baseOption : this._newBaseOption)
                },
                getTimelineOption: function(t) {
                    var e, i = this._timelineOptions;
                    if (i.length) {
                        var n = t.getComponent("timeline");
                        n && (e = s(i[n.getCurrentIndex()], !0))
                    }
                    return e
                },
                getMediaOption: function(t) {
                    var e = this._api.getWidth(),
                        i = this._api.getHeight(),
                        n = this._mediaList,
                        r = this._mediaDefault,
                        a = [],
                        o = [];
                    if (!n.length && !r) return o;
                    for (var u = 0, c = n.length; u < c; u++) f(n[u].query, e, i) && a.push(u);
                    return !a.length && r && (a = [-1]), a.length && ! function(t, e) {
                        return t.join(",") === e.join(",")
                    }(a, this._currentMediaIndices) && (o = l(a, (function(t) {
                        return s(-1 === t ? r.option : n[t].option)
                    }))), this._currentMediaIndices = a, o
                }
            };
            var g = h;
            t.exports = g
        },
        "6e36": function(t, e, i) {
            var n = i("b2de"),
                r = i("0bbe").createSymbol,
                a = i("81e8"),
                o = i("e2dc").parsePercent,
                s = i("1ed3").getDefaultLabel;

            function l(t, e, i) {
                a.Group.call(this), this.updateData(t, e, i)
            }
            var u = l.prototype,
                c = l.getSymbolSize = function(t, e) {
                    var i = t.getItemVisual(e, "symbolSize");
                    return i instanceof Array ? i.slice() : [+i, +i]
                };

            function h(t) {
                return [t[0] / 2, t[1] / 2]
            }

            function d(t, e) {
                this.parent.drift(t, e)
            }
            u._createSymbol = function(t, e, i, n, a) {
                this.removeAll();
                var o = e.getItemVisual(i, "color"),
                    s = r(t, -1, -1, 2, 2, o, a);
                s.attr({
                    z2: 100,
                    culling: !0,
                    scale: h(n)
                }), s.drift = d, this._symbolType = t, this.add(s)
            }, u.stopSymbolAnimation = function(t) {
                this.childAt(0).stopAnimation(t)
            }, u.getSymbolPath = function() {
                return this.childAt(0)
            }, u.getScale = function() {
                return this.childAt(0).scale
            }, u.highlight = function() {
                this.childAt(0).trigger("emphasis")
            }, u.downplay = function() {
                this.childAt(0).trigger("normal")
            }, u.setZ = function(t, e) {
                var i = this.childAt(0);
                i.zlevel = t, i.z = e
            }, u.setDraggable = function(t) {
                var e = this.childAt(0);
                e.draggable = t, e.cursor = t ? "move" : e.cursor
            }, u.updateData = function(t, e, i) {
                this.silent = !1;
                var n = t.getItemVisual(e, "symbol") || "circle",
                    r = t.hostModel,
                    o = c(t, e),
                    s = n !== this._symbolType;
                if (s) {
                    var l = t.getItemVisual(e, "symbolKeepAspect");
                    this._createSymbol(n, t, e, o, l)
                } else {
                    var u = this.childAt(0);
                    u.silent = !1, a.updateProps(u, {
                        scale: h(o)
                    }, r, e)
                }
                if (this._updateCommon(t, e, o, i), s) {
                    u = this.childAt(0);
                    var d = i && i.fadeIn,
                        f = {
                            scale: u.scale.slice()
                        };
                    d && (f.style = {
                        opacity: u.style.opacity
                    }), u.scale = [0, 0], d && (u.style.opacity = 0), a.initProps(u, f, r, e)
                }
                this._seriesModel = r
            };
            var f = ["itemStyle"],
                p = ["emphasis", "itemStyle"],
                g = ["label"],
                v = ["emphasis", "label"];

            function m(t, e) {
                if (!this.incremental && !this.useHoverLayer)
                    if ("emphasis" === e) {
                        var i = this.__symbolOriginalScale,
                            n = i[1] / i[0],
                            r = {
                                scale: [Math.max(1.1 * i[0], i[0] + 3), Math.max(1.1 * i[1], i[1] + 3 * n)]
                            };
                        this.animateTo(r, 400, "elasticOut")
                    } else "normal" === e && this.animateTo({
                        scale: this.__symbolOriginalScale
                    }, 400, "elasticOut")
            }
            u._updateCommon = function(t, e, i, r) {
                var l = this.childAt(0),
                    u = t.hostModel,
                    c = t.getItemVisual(e, "color");
                "image" !== l.type ? l.useStyle({
                    strokeNoScale: !0
                }) : l.setStyle({
                    opacity: null,
                    shadowBlur: null,
                    shadowOffsetX: null,
                    shadowOffsetY: null,
                    shadowColor: null
                });
                var d = r && r.itemStyle,
                    y = r && r.hoverItemStyle,
                    x = r && r.symbolRotate,
                    _ = r && r.symbolOffset,
                    b = r && r.labelModel,
                    w = r && r.hoverLabelModel,
                    S = r && r.hoverAnimation,
                    C = r && r.cursorStyle;
                if (!r || t.hasItemOption) {
                    var M = r && r.itemModel ? r.itemModel : t.getItemModel(e);
                    d = M.getModel(f).getItemStyle(["color"]), y = M.getModel(p).getItemStyle(), x = M.getShallow("symbolRotate"), _ = M.getShallow("symbolOffset"), b = M.getModel(g), w = M.getModel(v), S = M.getShallow("hoverAnimation"), C = M.getShallow("cursor")
                } else y = n.extend({}, y);
                var T = l.style;
                l.attr("rotation", (x || 0) * Math.PI / 180 || 0), _ && l.attr("position", [o(_[0], i[0]), o(_[1], i[1])]), C && l.attr("cursor", C), l.setColor(c, r && r.symbolInnerColor), l.setStyle(d);
                var I = t.getItemVisual(e, "opacity");
                null != I && (T.opacity = I);
                var A = t.getItemVisual(e, "liftZ"),
                    D = l.__z2Origin;
                null != A ? null == D && (l.__z2Origin = l.z2, l.z2 += A) : null != D && (l.z2 = D, l.__z2Origin = null);
                var k = r && r.useNameLabel;
                a.setLabelStyle(T, y, b, w, {
                    labelFetcher: u,
                    labelDataIndex: e,
                    defaultText: function(e, i) {
                        return k ? t.getName(e) : s(t, e)
                    },
                    isRectText: !0,
                    autoColor: c
                }), l.__symbolOriginalScale = h(i), l.hoverStyle = y, l.highDownOnUpdate = S && u.isAnimationEnabled() ? m : null, a.setHoverStyle(l)
            }, u.fadeOut = function(t, e) {
                var i = this.childAt(0);
                this.silent = i.silent = !0, (!e || !e.keepLabel) && (i.style.text = null), a.updateProps(i, {
                    style: {
                        opacity: 0
                    },
                    scale: [0, 0]
                }, this._seriesModel, this.dataIndex, t)
            }, n.inherits(l, a.Group);
            var y = l;
            t.exports = y
        },
        "6f05": function(t, e, i) {
            var n = i("b2de"),
                r = (n.assert, n.isArray);

            function a(t) {
                t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
            }
            i("b1e6").__DEV__;
            var o = a.prototype;
            o.perform = function(t) {
                var e, i = this._upstream,
                    n = t && t.skip;
                if (this._dirty && i) {
                    var a = this.context;
                    a.data = a.outputData = i.context.outputData
                }
                this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !n && (e = this._plan(this.context));
                var o, s = d(this._modBy),
                    u = this._modDataCount || 0,
                    c = d(t && t.modBy),
                    h = t && t.modDataCount || 0;

                function d(t) {
                    return !(t >= 1) && (t = 1), t
                }
                s === c && u === h || (e = "reset"), (this._dirty || "reset" === e) && (this._dirty = !1, o = function(t, e) {
                    var i, n;
                    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null, !e && t._reset && ((i = t._reset(t.context)) && i.progress && (n = i.forceFirstProgress, i = i.progress), r(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
                    var a = t._downstream;
                    return a && a.dirty(), n
                }(this, n)), this._modBy = c, this._modDataCount = h;
                var f = t && t.step;
                if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
                    var p = this._dueIndex,
                        g = Math.min(null != f ? this._dueIndex + f : 1 / 0, this._dueEnd);
                    if (!n && (o || p < g)) {
                        var v = this._progress;
                        if (r(v))
                            for (var m = 0; m < v.length; m++) l(this, v[m], p, g, c, h);
                        else l(this, v, p, g, c, h)
                    }
                    this._dueIndex = g;
                    var y = null != this._settedOutputEnd ? this._settedOutputEnd : g;
                    this._outputDueEnd = y
                } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
                return this.unfinished()
            };
            var s = function() {
                var t, e, i, n, r, a = {
                    reset: function(l, u, c, h) {
                        e = l, t = u, i = c, n = h, r = Math.ceil(n / i), a.next = i > 1 && n > 0 ? s : o
                    }
                };
                return a;

                function o() {
                    return e < t ? e++ : null
                }

                function s() {
                    var a = e % r * i + Math.ceil(e / r),
                        o = e >= t ? null : a < n ? a : e;
                    return e++, o
                }
            }();

            function l(t, e, i, n, r, a) {
                s.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
                    start: i,
                    end: n,
                    count: n - i,
                    next: s.next
                }, t.context)
            }
            o.dirty = function() {
                this._dirty = !0, this._onDirty && this._onDirty(this.context)
            }, o.unfinished = function() {
                return this._progress && this._dueIndex < this._dueEnd
            }, o.pipe = function(t) {
                (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
            }, o.dispose = function() {
                this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
            }, o.getUpstream = function() {
                return this._upstream
            }, o.getDownstream = function() {
                return this._downstream
            }, o.setOutputEnd = function(t) {
                this._outputDueEnd = this._settedOutputEnd = t
            }, e.createTask = function(t) {
                return new a(t)
            }
        },
        7103: function(t, e, i) {
            "use strict";
            var n = i("9949");
            i.n(n).a
        },
        "71b5": function(t, e, i) {
            var n = i("055a"),
                r = i("fab7"),
                a = i("8dab"),
                o = function() {
                    this.group = new n, this.uid = r.getUID("viewComponent")
                },
                s = o.prototype = {
                    constructor: o,
                    init: function(t, e) {},
                    render: function(t, e, i, n) {},
                    dispose: function() {},
                    filterForExposedEvent: null
                };
            s.updateView = s.updateLayout = s.updateVisual = function(t, e, i, n) {}, a.enableClassExtend(o), a.enableClassManagement(o, {
                registerWhenExtend: !0
            });
            var l = o;
            t.exports = l
        },
        7286: function(t, e, i) {
            var n = i("b2de"),
                r = i("76be"),
                a = (0, i("0127").makeInner)(),
                o = n.each;

            function s(t, e) {
                function i(i, n) {
                    t.on(i, (function(i) {
                        var r = function(t) {
                            var e = {
                                    showTip: [],
                                    hideTip: []
                                },
                                i = function(n) {
                                    var r = e[n.type];
                                    r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n))
                                };
                            return {
                                dispatchAction: i,
                                pendings: e
                            }
                        }(e);
                        o(a(t).records, (function(t) {
                                t && n(t, i, r.dispatchAction)
                            })),
                            function(t, e) {
                                var i, n = t.showTip.length,
                                    r = t.hideTip.length;
                                n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, e.dispatchAction(i))
                            }(r.pendings, e)
                    }))
                }
                a(t).initialized || (a(t).initialized = !0, i("click", n.curry(u, "click")), i("mousemove", n.curry(u, "mousemove")), i("globalout", l))
            }

            function l(t, e, i) {
                t.handler("leave", null, i)
            }

            function u(t, e, i, n) {
                e.handler(t, i, n)
            }
            e.register = function(t, e, i) {
                if (!r.node) {
                    var n = e.getZr();
                    a(n).records || (a(n).records = {}), s(n, e), (a(n).records[t] || (a(n).records[t] = {})).handler = i
                }
            }, e.unregister = function(t, e) {
                if (!r.node) {
                    var i = e.getZr();
                    (a(i).records || {})[t] && (a(i).records[t] = null)
                }
            }
        },
        "73a1": function(t, e, i) {
            var n = i("3efa");
            e.Dispatcher = n;
            var r = i("76be"),
                a = i("1829").buildTransformer,
                o = "undefined" != typeof window && !!window.addEventListener,
                s = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                l = "___zrEVENTSAVED",
                u = [];

            function c(t, e, i, n) {
                return i = i || {}, n || !r.canvasSupported ? h(t, e, i) : r.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : h(t, e, i), i
            }

            function h(t, e, i) {
                if (t.getBoundingClientRect && r.domSupported) {
                    var n = e.clientX,
                        a = e.clientY;
                    if ("CANVAS" === t.nodeName.toUpperCase()) {
                        var o = t.getBoundingClientRect();
                        return i.zrX = n - o.left, void(i.zrY = a - o.top)
                    }
                    var s = t[l] || (t[l] = {}),
                        c = d(function(t, e) {
                            var i = e.markers;
                            if (i) return i;
                            i = e.markers = [];
                            for (var n = ["left", "right"], r = ["top", "bottom"], a = 0; a < 4; a++) {
                                var o = document.createElement("div"),
                                    s = o.style,
                                    l = a % 2,
                                    u = (a >> 1) % 2;
                                s.cssText = ["position:absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "width:0", "height:0", n[l] + ":0", r[u] + ":0", n[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(o), i.push(o)
                            }
                            return i
                        }(t, s), s);
                    if (c) return c(u, n, a), i.zrX = u[0], void(i.zrY = u[1])
                }
                i.zrX = i.zrY = 0
            }

            function d(t, e) {
                for (var i = e.transformer, n = e.srcCoords, r = !0, o = [], s = [], l = 0; l < 4; l++) {
                    var u = t[l].getBoundingClientRect(),
                        c = 2 * l,
                        h = u.left,
                        d = u.top;
                    o.push(h, d), r &= n && h === n[c] && d === n[c + 1], s.push(t[l].offsetLeft, t[l].offsetTop)
                }
                return r ? i : (e.srcCoords = o, e.transformer = a(o, s))
            }

            function f(t) {
                return t || window.event
            }
            var p = o ? function(t) {
                t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
            } : function(t) {
                t.returnValue = !1, t.cancelBubble = !0
            };
            e.clientToLocal = c, e.getNativeEvent = f, e.normalizeEvent = function(t, e, i) {
                if (null != (e = f(e)).zrX) return e;
                var n = e.type;
                if (n && n.indexOf("touch") >= 0) {
                    var r = "touchend" !== n ? e.targetTouches[0] : e.changedTouches[0];
                    r && c(t, r, e, i)
                } else c(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
                var a = e.button;
                return null == e.which && void 0 !== a && s.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }, e.addEventListener = function(t, e, i, n) {
                o ? t.addEventListener(e, i, n) : t.attachEvent("on" + e, i)
            }, e.removeEventListener = function(t, e, i, n) {
                o ? t.removeEventListener(e, i, n) : t.detachEvent("on" + e, i)
            }, e.stop = p, e.isMiddleOrRightButtonOnMouseUpDown = function(t) {
                return 2 === t.which || 3 === t.which
            }, e.notLeftMouse = function(t) {
                return t.which > 1
            }
        },
        "73f9": function(t, e, i) {
            var n = i("e843"),
                r = i("3550").ContextCachedBy,
                a = [
                    ["shadowBlur", 0],
                    ["shadowOffsetX", 0],
                    ["shadowOffsetY", 0],
                    ["shadowColor", "#000"],
                    ["lineCap", "butt"],
                    ["lineJoin", "miter"],
                    ["miterLimit", 10]
                ],
                o = function(t) {
                    this.extendFrom(t, !1)
                };

            function s(t, e, i) {
                var n = null == e.x ? 0 : e.x,
                    r = null == e.x2 ? 1 : e.x2,
                    a = null == e.y ? 0 : e.y,
                    o = null == e.y2 ? 0 : e.y2;
                return e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, t.createLinearGradient(n, a, r, o)
            }

            function l(t, e, i) {
                var n = i.width,
                    r = i.height,
                    a = Math.min(n, r),
                    o = null == e.x ? .5 : e.x,
                    s = null == e.y ? .5 : e.y,
                    l = null == e.r ? .5 : e.r;
                return e.global || (o = o * n + i.x, s = s * r + i.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l)
            }
            for (var u = o.prototype = {
                    constructor: o,
                    fill: "#000",
                    stroke: null,
                    opacity: 1,
                    fillOpacity: null,
                    strokeOpacity: null,
                    lineDash: null,
                    lineDashOffset: 0,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    lineWidth: 1,
                    strokeNoScale: !1,
                    text: null,
                    font: null,
                    textFont: null,
                    fontStyle: null,
                    fontWeight: null,
                    fontSize: null,
                    fontFamily: null,
                    textTag: null,
                    textFill: "#000",
                    textStroke: null,
                    textWidth: null,
                    textHeight: null,
                    textStrokeWidth: 0,
                    textLineHeight: null,
                    textPosition: "inside",
                    textRect: null,
                    textOffset: null,
                    textAlign: null,
                    textVerticalAlign: null,
                    textDistance: 5,
                    textShadowColor: "transparent",
                    textShadowBlur: 0,
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 0,
                    textBoxShadowColor: "transparent",
                    textBoxShadowBlur: 0,
                    textBoxShadowOffsetX: 0,
                    textBoxShadowOffsetY: 0,
                    transformText: !1,
                    textRotation: 0,
                    textOrigin: null,
                    textBackgroundColor: null,
                    textBorderColor: null,
                    textBorderWidth: 0,
                    textBorderRadius: 0,
                    textPadding: null,
                    rich: null,
                    truncate: null,
                    blend: null,
                    bind: function(t, e, i) {
                        var o = this,
                            s = i && i.style,
                            l = !s || t.__attrCachedBy !== r.STYLE_BIND;
                        t.__attrCachedBy = r.STYLE_BIND;
                        for (var u = 0; u < a.length; u++) {
                            var c = a[u],
                                h = c[0];
                            (l || o[h] !== s[h]) && (t[h] = n(t, h, o[h] || c[1]))
                        }
                        if ((l || o.fill !== s.fill) && (t.fillStyle = o.fill), (l || o.stroke !== s.stroke) && (t.strokeStyle = o.stroke), (l || o.opacity !== s.opacity) && (t.globalAlpha = null == o.opacity ? 1 : o.opacity), (l || o.blend !== s.blend) && (t.globalCompositeOperation = o.blend || "source-over"), this.hasStroke()) {
                            var d = o.lineWidth;
                            t.lineWidth = d / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                        }
                    },
                    hasFill: function() {
                        var t = this.fill;
                        return null != t && "none" !== t
                    },
                    hasStroke: function() {
                        var t = this.stroke;
                        return null != t && "none" !== t && this.lineWidth > 0
                    },
                    extendFrom: function(t, e) {
                        if (t)
                            for (var i in t) !t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
                    },
                    set: function(t, e) {
                        "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
                    },
                    clone: function() {
                        var t = new this.constructor;
                        return t.extendFrom(this, !0), t
                    },
                    getGradient: function(t, e, i) {
                        for (var n = ("radial" === e.type ? l : s)(t, e, i), r = e.colorStops, a = 0; a < r.length; a++) n.addColorStop(r[a].offset, r[a].color);
                        return n
                    }
                }, c = 0; c < a.length; c++) {
                var h = a[c];
                h[0] in u || (u[h[0]] = h[1])
            }
            o.getGradient = u.getGradient;
            var d = o;
            t.exports = d
        },
        "74a8": function(t, e) {
            var i = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
                setTimeout(t, 16)
            };
            t.exports = i
        },
        7635: function(t, e, i) {
            var n = i("2b02").isDimensionStacked,
                r = i("b2de").map;
            e.prepareDataCoordInfo = function(t, e, i) {
                var a, o = t.getBaseAxis(),
                    s = t.getOtherAxis(o),
                    l = function(t, e) {
                        var i = 0,
                            n = t.scale.getExtent();
                        return "start" === e ? i = n[0] : "end" === e ? i = n[1] : n[0] > 0 ? i = n[0] : n[1] < 0 && (i = n[1]), i
                    }(s, i),
                    u = o.dim,
                    c = s.dim,
                    h = e.mapDimension(c),
                    d = e.mapDimension(u),
                    f = "x" === c || "radius" === c ? 1 : 0,
                    p = r(t.dimensions, (function(t) {
                        return e.mapDimension(t)
                    })),
                    g = e.getCalculationInfo("stackResultDimension");
                return (a |= n(e, p[0])) && (p[0] = g), (a |= n(e, p[1])) && (p[1] = g), {
                    dataDimsForPoint: p,
                    valueStart: l,
                    valueAxisDim: c,
                    baseAxisDim: u,
                    stacked: !!a,
                    valueDim: h,
                    baseDim: d,
                    baseDataOffset: f,
                    stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
                }
            }, e.getStackedOnPoint = function(t, e, i, n) {
                var r = NaN;
                t.stacked && (r = i.get(i.getCalculationInfo("stackedOverDimension"), n)), isNaN(r) && (r = t.valueStart);
                var a = t.baseDataOffset,
                    o = [];
                return o[a] = i.get(t.baseDim, n), o[1 - a] = r, e.dataToPoint(o)
            }
        },
        "76bd": function(t, e, i) {
            var n = i("56b7");
            i("aa21"), i("9891");
            var r = i("e342"),
                a = i("0bec"),
                o = i("0b19");
            i("317f"), n.registerVisual(r("line", "circle", "line")), n.registerLayout(a("line")), n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC, o("line"))
        },
        "76be": function(t, e) {
            var i = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
                browser: {},
                os: {},
                node: !1,
                wxa: !0,
                canvasSupported: !0,
                svgSupported: !1,
                touchEventsSupported: !0,
                domSupported: !1
            } : "undefined" == typeof document && "undefined" != typeof self ? {
                browser: {},
                os: {},
                node: !1,
                worker: !0,
                canvasSupported: !0,
                domSupported: !1
            } : "undefined" == typeof navigator ? {
                browser: {},
                os: {},
                node: !0,
                worker: !1,
                canvasSupported: !0,
                svgSupported: !0,
                domSupported: !1
            } : function(t) {
                var e = {},
                    i = t.match(/Firefox\/([\d.]+)/),
                    n = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
                    r = t.match(/Edge\/([\d.]+)/),
                    a = /micromessenger/i.test(t);
                return i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), r && (e.edge = !0, e.version = r[1]), a && (e.weChat = !0), {
                    browser: e,
                    os: {},
                    node: !1,
                    canvasSupported: !!document.createElement("canvas").getContext,
                    svgSupported: "undefined" != typeof SVGRect,
                    touchEventsSupported: "ontouchstart" in window && !e.ie && !e.edge,
                    pointerEventsSupported: "onpointerdown" in window && (e.edge || e.ie && e.version >= 11),
                    domSupported: "undefined" != typeof document
                }
            }(navigator.userAgent);
            t.exports = i
        },
        "773e": function(t, e) {
            var i = "\0__throttleOriginMethod",
                n = "\0__throttleRate",
                r = "\0__throttleType";

            function a(t, e, i) {
                var n, r, a, o, s, l = 0,
                    u = 0,
                    c = null;

                function h() {
                    u = (new Date).getTime(), c = null, t.apply(a, o || [])
                }
                e = e || 0;
                var d = function() {
                    n = (new Date).getTime(), a = this, o = arguments;
                    var t = s || e,
                        d = s || i;
                    s = null, r = n - (d ? l : u) - t, clearTimeout(c), d ? c = setTimeout(h, t) : r >= 0 ? h() : c = setTimeout(h, -r), l = n
                };
                return d.clear = function() {
                    c && (clearTimeout(c), c = null)
                }, d.debounceNextCall = function(t) {
                    s = t
                }, d
            }
            e.throttle = a, e.createOrUpdate = function(t, e, o, s) {
                var l = t[e];
                if (l) {
                    var u = l[i] || l,
                        c = l[r];
                    if (l[n] !== o || c !== s) {
                        if (null == o || !s) return t[e] = u;
                        (l = t[e] = a(u, o, "debounce" === s))[i] = u, l[r] = s, l[n] = o
                    }
                    return l
                }
            }, e.clear = function(t, e) {
                var n = t[e];
                n && n[i] && (t[e] = n[i])
            }
        },
        "7b27": function(t, e, i) {
            var n = i("3caf"),
                r = i("e27b"),
                a = i("22a0"),
                o = Math.sqrt,
                s = Math.sin,
                l = Math.cos,
                u = Math.PI,
                c = function(t) {
                    return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                },
                h = function(t, e) {
                    return (t[0] * e[0] + t[1] * e[1]) / (c(t) * c(e))
                },
                d = function(t, e) {
                    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(h(t, e))
                };

            function f(t, e, i, n, r, a, c, f, p, g, v) {
                var m = p * (u / 180),
                    y = l(m) * (t - i) / 2 + s(m) * (e - n) / 2,
                    x = -1 * s(m) * (t - i) / 2 + l(m) * (e - n) / 2,
                    _ = y * y / (c * c) + x * x / (f * f);
                _ > 1 && (c *= o(_), f *= o(_));
                var b = (r === a ? -1 : 1) * o((c * c * (f * f) - c * c * (x * x) - f * f * (y * y)) / (c * c * (x * x) + f * f * (y * y))) || 0,
                    w = b * c * x / f,
                    S = b * -f * y / c,
                    C = (t + i) / 2 + l(m) * w - s(m) * S,
                    M = (e + n) / 2 + s(m) * w + l(m) * S,
                    T = d([1, 0], [(y - w) / c, (x - S) / f]),
                    I = [(y - w) / c, (x - S) / f],
                    A = [(-1 * y - w) / c, (-1 * x - S) / f],
                    D = d(I, A);
                h(I, A) <= -1 && (D = u), h(I, A) >= 1 && (D = 0), 0 === a && D > 0 && (D -= 2 * u), 1 === a && D < 0 && (D += 2 * u), v.addData(g, C, M, c, f, T, D, m, a)
            }
            var p = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
                g = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;

            function v(t, e) {
                var i = function(t) {
                    if (!t) return new r;
                    for (var e, i = 0, n = 0, a = i, o = n, s = new r, l = r.CMD, u = t.match(p), c = 0; c < u.length; c++) {
                        for (var h, d = u[c], v = d.charAt(0), m = d.match(g) || [], y = m.length, x = 0; x < y; x++) m[x] = parseFloat(m[x]);
                        for (var _ = 0; _ < y;) {
                            var b, w, S, C, M, T, I, A = i,
                                D = n;
                            switch (v) {
                                case "l":
                                    i += m[_++], n += m[_++], h = l.L, s.addData(h, i, n);
                                    break;
                                case "L":
                                    i = m[_++], n = m[_++], h = l.L, s.addData(h, i, n);
                                    break;
                                case "m":
                                    i += m[_++], n += m[_++], h = l.M, s.addData(h, i, n), a = i, o = n, v = "l";
                                    break;
                                case "M":
                                    i = m[_++], n = m[_++], h = l.M, s.addData(h, i, n), a = i, o = n, v = "L";
                                    break;
                                case "h":
                                    i += m[_++], h = l.L, s.addData(h, i, n);
                                    break;
                                case "H":
                                    i = m[_++], h = l.L, s.addData(h, i, n);
                                    break;
                                case "v":
                                    n += m[_++], h = l.L, s.addData(h, i, n);
                                    break;
                                case "V":
                                    n = m[_++], h = l.L, s.addData(h, i, n);
                                    break;
                                case "C":
                                    h = l.C, s.addData(h, m[_++], m[_++], m[_++], m[_++], m[_++], m[_++]), i = m[_ - 2], n = m[_ - 1];
                                    break;
                                case "c":
                                    h = l.C, s.addData(h, m[_++] + i, m[_++] + n, m[_++] + i, m[_++] + n, m[_++] + i, m[_++] + n), i += m[_ - 2], n += m[_ - 1];
                                    break;
                                case "S":
                                    b = i, w = n;
                                    var k = s.len(),
                                        P = s.data;
                                    e === l.C && (b += i - P[k - 4], w += n - P[k - 3]), h = l.C, A = m[_++], D = m[_++], i = m[_++], n = m[_++], s.addData(h, b, w, A, D, i, n);
                                    break;
                                case "s":
                                    b = i, w = n, k = s.len(), P = s.data, e === l.C && (b += i - P[k - 4], w += n - P[k - 3]), h = l.C, A = i + m[_++], D = n + m[_++], i += m[_++], n += m[_++], s.addData(h, b, w, A, D, i, n);
                                    break;
                                case "Q":
                                    A = m[_++], D = m[_++], i = m[_++], n = m[_++], h = l.Q, s.addData(h, A, D, i, n);
                                    break;
                                case "q":
                                    A = m[_++] + i, D = m[_++] + n, i += m[_++], n += m[_++], h = l.Q, s.addData(h, A, D, i, n);
                                    break;
                                case "T":
                                    b = i, w = n, k = s.len(), P = s.data, e === l.Q && (b += i - P[k - 4], w += n - P[k - 3]), i = m[_++], n = m[_++], h = l.Q, s.addData(h, b, w, i, n);
                                    break;
                                case "t":
                                    b = i, w = n, k = s.len(), P = s.data, e === l.Q && (b += i - P[k - 4], w += n - P[k - 3]), i += m[_++], n += m[_++], h = l.Q, s.addData(h, b, w, i, n);
                                    break;
                                case "A":
                                    S = m[_++], C = m[_++], M = m[_++], T = m[_++], I = m[_++], f(A = i, D = n, i = m[_++], n = m[_++], T, I, S, C, M, h = l.A, s);
                                    break;
                                case "a":
                                    S = m[_++], C = m[_++], M = m[_++], T = m[_++], I = m[_++], f(A = i, D = n, i += m[_++], n += m[_++], T, I, S, C, M, h = l.A, s)
                            }
                        }
                        "z" !== v && "Z" !== v || (h = l.Z, s.addData(h), i = a, n = o), e = h
                    }
                    return s.toStatic(), s
                }(t);
                return (e = e || {}).buildPath = function(t) {
                    if (t.setData) {
                        t.setData(i.data);
                        var e = t.getContext();
                        e && t.rebuildPath(e)
                    } else e = t, i.rebuildPath(e)
                }, e.applyTransform = function(t) {
                    a(i, t), this.dirty(!0)
                }, e
            }
            e.createFromString = function(t, e) {
                return new n(v(t, e))
            }, e.extendFromString = function(t, e) {
                return n.extend(v(t, e))
            }, e.mergePath = function(t, e) {
                for (var i = [], r = t.length, a = 0; a < r; a++) {
                    var o = t[a];
                    o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), i.push(o.path)
                }
                var s = new n(e);
                return s.createPathProxy(), s.buildPath = function(t) {
                    t.appendPath(i);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, s
            }
        },
        "7bf8": function(t, e, i) {
            var n = i("b2de"),
                r = {
                    updateSelectedMap: function(t) {
                        this._targetList = n.isArray(t) ? t.slice() : [], this._selectTargetMap = n.reduce(t || [], (function(t, e) {
                            return t.set(e.name, e), t
                        }), n.createHashMap())
                    },
                    select: function(t, e) {
                        var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                        "single" === this.get("selectedMode") && this._selectTargetMap.each((function(t) {
                            t.selected = !1
                        })), i && (i.selected = !0)
                    },
                    unSelect: function(t, e) {
                        var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                        i && (i.selected = !1)
                    },
                    toggleSelected: function(t, e) {
                        var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                        if (null != i) return this[i.selected ? "unSelect" : "select"](t, e), i.selected
                    },
                    isSelected: function(t, e) {
                        var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                        return i && i.selected
                    }
                };
            t.exports = r
        },
        "7cb6": function(t, e, i) {
            var n = i("b2de"),
                r = i("2c33"),
                a = function(t, e, i, n, a) {
                    r.call(this, t, e, i), this.type = n || "value", this.position = a || "bottom"
                };
            a.prototype = {
                constructor: a,
                index: 0,
                getAxesOnZeroOf: null,
                model: null,
                isHorizontal: function() {
                    var t = this.position;
                    return "top" === t || "bottom" === t
                },
                getGlobalExtent: function(t) {
                    var e = this.getExtent();
                    return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
                },
                getOtherAxis: function() {
                    this.grid.getOtherAxis()
                },
                pointToData: function(t, e) {
                    return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
                },
                toLocalCoord: null,
                toGlobalCoord: null
            }, n.inherits(a, r);
            var o = a;
            t.exports = o
        },
        "7d81": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("0127")),
                r = n.makeInner,
                a = n.getDataItemValue,
                o = i("b2de"),
                s = o.createHashMap,
                l = o.each,
                u = o.map,
                c = o.isArray,
                h = o.isString,
                d = o.isObject,
                f = o.isTypedArray,
                p = o.isArrayLike,
                g = o.extend,
                v = (o.assert, i("fa21")),
                m = i("cfb8"),
                y = m.SOURCE_FORMAT_ORIGINAL,
                x = m.SOURCE_FORMAT_ARRAY_ROWS,
                _ = m.SOURCE_FORMAT_OBJECT_ROWS,
                b = m.SOURCE_FORMAT_KEYED_COLUMNS,
                w = m.SOURCE_FORMAT_UNKNOWN,
                S = m.SOURCE_FORMAT_TYPED_ARRAY,
                C = m.SERIES_LAYOUT_BY_ROW,
                M = {
                    Must: 1,
                    Might: 2,
                    Not: 3
                },
                T = r();

            function I(t, e, i, n, r) {
                if (!t) return {
                    dimensionsDefine: A(r)
                };
                var o, s;
                if (e === x) "auto" === n || null == n ? D((function(t) {
                    null != t && "-" !== t && (h(t) ? null == s && (s = 1) : s = 0)
                }), i, t, 10) : s = n ? 1 : 0, r || 1 !== s || (r = [], D((function(t, e) {
                    r[e] = null != t ? t : ""
                }), i, t)), o = r ? r.length : i === C ? t.length : t[0] ? t[0].length : null;
                else if (e === _) r || (r = function(t) {
                    var e, i = 0;
                    for (; i < t.length && !(e = t[i++]););
                    if (e) {
                        var n = [];
                        return l(e, (function(t, e) {
                            n.push(e)
                        })), n
                    }
                }(t));
                else if (e === b) r || (r = [], l(t, (function(t, e) {
                    r.push(e)
                })));
                else if (e === y) {
                    var u = a(t[0]);
                    o = c(u) && u.length || 1
                }
                return {
                    startIndex: s,
                    dimensionsDefine: A(r),
                    dimensionsDetectCount: o
                }
            }

            function A(t) {
                if (t) {
                    var e = s();
                    return u(t, (function(t, i) {
                        if (null == (t = g({}, d(t) ? t : {
                                name: t
                            })).name) return t;
                        t.name += "", null == t.displayName && (t.displayName = t.name);
                        var n = e.get(t.name);
                        return n ? t.name += "-" + n.count++ : e.set(t.name, {
                            count: 1
                        }), t
                    }))
                }
            }

            function D(t, e, i, n) {
                if (null == n && (n = 1 / 0), e === C)
                    for (var r = 0; r < i.length && r < n; r++) t(i[r] ? i[r][0] : null, r);
                else {
                    var a = i[0] || [];
                    for (r = 0; r < a.length && r < n; r++) t(a[r], r)
                }
            }

            function k(t) {
                var e = t.option;
                if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
            }

            function P(t, e, i, n, r, o) {
                var s, l, u;
                if (f(t)) return M.Not;
                if (n) {
                    var p = n[o];
                    d(p) ? (l = p.name, u = p.type) : h(p) && (l = p)
                }
                if (null != u) return "ordinal" === u ? M.Must : M.Not;
                if (e === x)
                    if (i === C) {
                        for (var g = t[o], v = 0; v < (g || []).length && v < 5; v++)
                            if (null != (s = T(g[r + v]))) return s
                    } else
                        for (v = 0; v < t.length && v < 5; v++) {
                            var m = t[r + v];
                            if (m && null != (s = T(m[o]))) return s
                        } else if (e === _) {
                            if (!l) return M.Not;
                            for (v = 0; v < t.length && v < 5; v++) {
                                var w = t[v];
                                if (w && null != (s = T(w[l]))) return s
                            }
                        } else if (e === b) {
                    if (!l) return M.Not;
                    if (!(g = t[l]) || f(g)) return M.Not;
                    for (v = 0; v < g.length && v < 5; v++)
                        if (null != (s = T(g[v]))) return s
                } else if (e === y)
                    for (v = 0; v < t.length && v < 5; v++) {
                        w = t[v];
                        var S = a(w);
                        if (!c(S)) return M.Not;
                        if (null != (s = T(S[o]))) return s
                    }

                function T(t) {
                    var e = h(t);
                    return null != t && isFinite(t) && "" !== t ? e ? M.Might : M.Not : e && "-" !== t ? M.Must : void 0
                }
                return M.Not
            }
            e.BE_ORDINAL = M, e.detectSourceFormat = function(t) {
                var e = t.option.source,
                    i = w;
                if (f(e)) i = S;
                else if (c(e)) {
                    0 === e.length && (i = x);
                    for (var n = 0, r = e.length; n < r; n++) {
                        var a = e[n];
                        if (null != a) {
                            if (c(a)) {
                                i = x;
                                break
                            }
                            if (d(a)) {
                                i = _;
                                break
                            }
                        }
                    }
                } else if (d(e)) {
                    for (var o in e)
                        if (e.hasOwnProperty(o) && p(e[o])) {
                            i = b;
                            break
                        }
                } else if (null != e) throw new Error("Invalid data");
                T(t).sourceFormat = i
            }, e.getSource = function(t) {
                return T(t).source
            }, e.resetSourceDefaulter = function(t) {
                T(t).datasetMap = s()
            }, e.prepareSource = function(t) {
                var e = t.option,
                    i = e.data,
                    n = f(i) ? S : y,
                    r = !1,
                    a = e.seriesLayoutBy,
                    o = e.sourceHeader,
                    s = e.dimensions,
                    l = k(t);
                if (l) {
                    var u = l.option;
                    i = u.source, n = T(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions
                }
                var c = I(i, n, a, o, s);
                T(t).source = new v({
                    data: i,
                    fromDataset: r,
                    seriesLayoutBy: a,
                    sourceFormat: n,
                    dimensionsDefine: c.dimensionsDefine,
                    startIndex: c.startIndex,
                    dimensionsDetectCount: c.dimensionsDetectCount,
                    encodeDefine: e.encode
                })
            }, e.makeSeriesEncodeForAxisCoordSys = function(t, e, i) {
                var n = {},
                    r = k(e);
                if (!r || !t) return n;
                var a, o, s = [],
                    u = [],
                    c = e.ecModel,
                    h = T(c).datasetMap,
                    f = r.uid + "_" + i.seriesLayoutBy;
                t = t.slice(), l(t, (function(e, i) {
                    !d(e) && (t[i] = {
                        name: e
                    }), "ordinal" === e.type && null == a && (a = i, o = v(t[i])), n[e.name] = []
                }));
                var p = h.get(f) || h.set(f, {
                    categoryWayDim: o,
                    valueWayDim: 0
                });

                function g(t, e, i) {
                    for (var n = 0; n < i; n++) t.push(e + n)
                }

                function v(t) {
                    var e = t.dimsDef;
                    return e ? e.length : 1
                }
                return l(t, (function(t, e) {
                    var i = t.name,
                        r = v(t);
                    if (null == a) {
                        var o = p.valueWayDim;
                        g(n[i], o, r), g(u, o, r), p.valueWayDim += r
                    } else a === e ? (g(n[i], 0, r), g(s, 0, r)) : (o = p.categoryWayDim, g(n[i], o, r), g(u, o, r), p.categoryWayDim += r)
                })), s.length && (n.itemName = s), u.length && (n.seriesName = u), n
            }, e.makeSeriesEncodeForNameBased = function(t, e, i) {
                var n = {};
                if (!k(t)) return n;
                var r, a = e.sourceFormat,
                    o = e.dimensionsDefine;
                a !== _ && a !== b || l(o, (function(t, e) {
                    "name" === (d(t) ? t.name : t) && (r = e)
                }));
                var s = function() {
                    for (var t = {}, n = {}, s = [], l = 0, u = Math.min(5, i); l < u; l++) {
                        var c = P(e.data, a, e.seriesLayoutBy, o, e.startIndex, l);
                        s.push(c);
                        var h = c === M.Not;
                        if (h && null == t.v && l !== r && (t.v = l), (null == t.n || t.n === t.v || !h && s[t.n] === M.Not) && (t.n = l), d(t) && s[t.n] !== M.Not) return t;
                        h || (c === M.Might && null == n.v && l !== r && (n.v = l), null != n.n && n.n !== n.v || (n.n = l))
                    }

                    function d(t) {
                        return null != t.v && null != t.n
                    }
                    return d(t) ? t : d(n) ? n : null
                }();
                if (s) {
                    n.value = s.v;
                    var u = null != r ? r : s.n;
                    n.itemName = [u], n.seriesName = [u]
                }
                return n
            }, e.guessOrdinal = function(t, e) {
                return P(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
            }
        },
        "7f8a": function(t, e, i) {
            var n = i("7635"),
                r = n.prepareDataCoordInfo,
                a = n.getStackedOnPoint;
            t.exports = function(t, e, i, n, o, s, l, u) {
                for (var c = function(t, e) {
                        var i = [];
                        return e.diff(t).add((function(t) {
                            i.push({
                                cmd: "+",
                                idx: t
                            })
                        })).update((function(t, e) {
                            i.push({
                                cmd: "=",
                                idx: e,
                                idx1: t
                            })
                        })).remove((function(t) {
                            i.push({
                                cmd: "-",
                                idx: t
                            })
                        })).execute(), i
                    }(t, e), h = [], d = [], f = [], p = [], g = [], v = [], m = [], y = r(o, e, l), x = r(s, t, u), _ = 0; _ < c.length; _++) {
                    var b = c[_],
                        w = !0;
                    switch (b.cmd) {
                        case "=":
                            var S = t.getItemLayout(b.idx),
                                C = e.getItemLayout(b.idx1);
                            (isNaN(S[0]) || isNaN(S[1])) && (S = C.slice()), h.push(S), d.push(C), f.push(i[b.idx]), p.push(n[b.idx1]), m.push(e.getRawIndex(b.idx1));
                            break;
                        case "+":
                            var M = b.idx;
                            h.push(o.dataToPoint([e.get(y.dataDimsForPoint[0], M), e.get(y.dataDimsForPoint[1], M)])), d.push(e.getItemLayout(M).slice()), f.push(a(y, o, e, M)), p.push(n[M]), m.push(e.getRawIndex(M));
                            break;
                        case "-":
                            M = b.idx;
                            var T = t.getRawIndex(M);
                            T !== M ? (h.push(t.getItemLayout(M)), d.push(s.dataToPoint([t.get(x.dataDimsForPoint[0], M), t.get(x.dataDimsForPoint[1], M)])), f.push(i[M]), p.push(a(x, s, t, M)), m.push(T)) : w = !1
                    }
                    w && (g.push(b), v.push(v.length))
                }
                v.sort((function(t, e) {
                    return m[t] - m[e]
                }));
                var I = [],
                    A = [],
                    D = [],
                    k = [],
                    P = [];
                for (_ = 0; _ < v.length; _++) M = v[_], I[_] = h[M], A[_] = d[M], D[_] = f[M], k[_] = p[M], P[_] = g[M];
                return {
                    current: I,
                    next: A,
                    stackedOnCurrent: D,
                    stackedOnNext: k,
                    status: P
                }
            }
        },
        8031: function(t, e) {
            var i = {
                    linear: function(t) {
                        return t
                    },
                    quadraticIn: function(t) {
                        return t * t
                    },
                    quadraticOut: function(t) {
                        return t * (2 - t)
                    },
                    quadraticInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    cubicIn: function(t) {
                        return t * t * t
                    },
                    cubicOut: function(t) {
                        return --t * t * t + 1
                    },
                    cubicInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    quarticIn: function(t) {
                        return t * t * t * t
                    },
                    quarticOut: function(t) {
                        return 1 - --t * t * t * t
                    },
                    quarticInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    quinticIn: function(t) {
                        return t * t * t * t * t
                    },
                    quinticOut: function(t) {
                        return --t * t * t * t * t + 1
                    },
                    quinticInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    sinusoidalIn: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    sinusoidalOut: function(t) {
                        return Math.sin(t * Math.PI / 2)
                    },
                    sinusoidalInOut: function(t) {
                        return .5 * (1 - Math.cos(Math.PI * t))
                    },
                    exponentialIn: function(t) {
                        return 0 === t ? 0 : Math.pow(1024, t - 1)
                    },
                    exponentialOut: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    exponentialInOut: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    },
                    circularIn: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    circularOut: function(t) {
                        return Math.sqrt(1 - --t * t)
                    },
                    circularInOut: function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    elasticIn: function(t) {
                        var e, i = .1;
                        return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
                    },
                    elasticOut: function(t) {
                        var e, i = .1;
                        return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
                    },
                    elasticInOut: function(t) {
                        var e, i = .1,
                            n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    backIn: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    backOut: function(t) {
                        var e = 1.70158;
                        return --t * t * ((e + 1) * t + e) + 1
                    },
                    backInOut: function(t) {
                        var e = 2.5949095;
                        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                    },
                    bounceIn: function(t) {
                        return 1 - i.bounceOut(1 - t)
                    },
                    bounceOut: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    bounceInOut: function(t) {
                        return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
                    }
                },
                n = i;
            t.exports = n
        },
        8101: function(t, e, i) {
            var n = i("81e8"),
                r = i("6e36"),
                a = i("b2de").isObject;

            function o(t) {
                this.group = new n.Group, this._symbolCtor = t || r
            }
            var s = o.prototype;

            function l(t, e, i, n) {
                return e && !isNaN(e[0]) && !isNaN(e[1]) && !(n.isIgnore && n.isIgnore(i)) && !(n.clipShape && !n.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(i, "symbol")
            }

            function u(t) {
                return null == t || a(t) || (t = {
                    isIgnore: t
                }), t || {}
            }

            function c(t) {
                var e = t.hostModel;
                return {
                    itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
                    hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
                    symbolRotate: e.get("symbolRotate"),
                    symbolOffset: e.get("symbolOffset"),
                    hoverAnimation: e.get("hoverAnimation"),
                    labelModel: e.getModel("label"),
                    hoverLabelModel: e.getModel("emphasis.label"),
                    cursorStyle: e.get("cursor")
                }
            }
            s.updateData = function(t, e) {
                e = u(e);
                var i = this.group,
                    r = t.hostModel,
                    a = this._data,
                    o = this._symbolCtor,
                    s = c(t);
                a || i.removeAll(), t.diff(a).add((function(n) {
                    var r = t.getItemLayout(n);
                    if (l(t, r, n, e)) {
                        var a = new o(t, n, s);
                        a.attr("position", r), t.setItemGraphicEl(n, a), i.add(a)
                    }
                })).update((function(u, c) {
                    var h = a.getItemGraphicEl(c),
                        d = t.getItemLayout(u);
                    l(t, d, u, e) ? (h ? (h.updateData(t, u, s), n.updateProps(h, {
                        position: d
                    }, r)) : (h = new o(t, u)).attr("position", d), i.add(h), t.setItemGraphicEl(u, h)) : i.remove(h)
                })).remove((function(t) {
                    var e = a.getItemGraphicEl(t);
                    e && e.fadeOut((function() {
                        i.remove(e)
                    }))
                })).execute(), this._data = t
            }, s.isPersistent = function() {
                return !0
            }, s.updateLayout = function() {
                var t = this._data;
                t && t.eachItemGraphicEl((function(e, i) {
                    var n = t.getItemLayout(i);
                    e.attr("position", n)
                }))
            }, s.incrementalPrepareUpdate = function(t) {
                this._seriesScope = c(t), this._data = null, this.group.removeAll()
            }, s.incrementalUpdate = function(t, e, i) {
                function n(t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0)
                }
                i = u(i);
                for (var r = t.start; r < t.end; r++) {
                    var a = e.getItemLayout(r);
                    if (l(e, a, r, i)) {
                        var o = new this._symbolCtor(e, r, this._seriesScope);
                        o.traverse(n), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o)
                    }
                }
            }, s.remove = function(t) {
                var e = this.group,
                    i = this._data;
                i && t ? i.eachItemGraphicEl((function(t) {
                    t.fadeOut((function() {
                        e.remove(t)
                    }))
                })) : e.removeAll()
            };
            var h = o;
            t.exports = h
        },
        8145: function(t, e, i) {
            var n = i("1f1f"),
                r = n.getLayoutRect,
                a = n.box,
                o = n.positionElement,
                s = i("542f"),
                l = i("81e8");
            e.layout = function(t, e, i) {
                var n = e.getBoxLayoutParams(),
                    s = e.get("padding"),
                    l = {
                        width: i.getWidth(),
                        height: i.getHeight()
                    },
                    u = r(n, l, s);
                a(e.get("orient"), t, e.get("itemGap"), u.width, u.height), o(t, n, l, s)
            }, e.makeBackground = function(t, e) {
                var i = s.normalizeCssArray(e.get("padding")),
                    n = e.getItemStyle(["color", "opacity"]);
                return n.fill = e.get("backgroundColor"), t = new l.Rect({
                    shape: {
                        x: t.x - i[3],
                        y: t.y - i[0],
                        width: t.width + i[1] + i[3],
                        height: t.height + i[0] + i[2],
                        r: e.get("borderRadius")
                    },
                    style: n,
                    silent: !0,
                    z2: -1
                })
            }
        },
        8172: function(t, e, i) {
            var n = i("3caf"),
                r = i("df91"),
                a = i("8eec"),
                o = r.min,
                s = r.max,
                l = r.scaleAndAdd,
                u = r.copy,
                c = [],
                h = [],
                d = [];

            function f(t) {
                return isNaN(t[0]) || isNaN(t[1])
            }

            function p(t, e, i, n, r, a, o, s, l, u, c) {
                return "none" !== u && u ? g.apply(this, arguments) : v.apply(this, arguments)
            }

            function g(t, e, i, n, r, a, o, s, l, c, p) {
                for (var g = 0, v = i, m = 0; m < n; m++) {
                    var y = e[v];
                    if (v >= r || v < 0) break;
                    if (f(y)) {
                        if (p) {
                            v += a;
                            continue
                        }
                        break
                    }
                    if (v === i) t[a > 0 ? "moveTo" : "lineTo"](y[0], y[1]);
                    else if (l > 0) {
                        var x = e[g],
                            _ = "y" === c ? 1 : 0,
                            b = (y[_] - x[_]) * l;
                        u(h, x), h[_] = x[_] + b, u(d, y), d[_] = y[_] - b, t.bezierCurveTo(h[0], h[1], d[0], d[1], y[0], y[1])
                    } else t.lineTo(y[0], y[1]);
                    g = v, v += a
                }
                return m
            }

            function v(t, e, i, n, a, p, g, v, m, y, x) {
                for (var _ = 0, b = i, w = 0; w < n; w++) {
                    var S = e[b];
                    if (b >= a || b < 0) break;
                    if (f(S)) {
                        if (x) {
                            b += p;
                            continue
                        }
                        break
                    }
                    if (b === i) t[p > 0 ? "moveTo" : "lineTo"](S[0], S[1]), u(h, S);
                    else if (m > 0) {
                        var C = b + p,
                            M = e[C];
                        if (x)
                            for (; M && f(e[C]);) M = e[C += p];
                        var T = .5,
                            I = e[_];
                        if (!(M = e[C]) || f(M)) u(d, S);
                        else {
                            var A, D;
                            if (f(M) && !x && (M = S), r.sub(c, M, I), "x" === y || "y" === y) {
                                var k = "x" === y ? 0 : 1;
                                A = Math.abs(S[k] - I[k]), D = Math.abs(S[k] - M[k])
                            } else A = r.dist(S, I), D = r.dist(S, M);
                            l(d, S, c, -m * (1 - (T = D / (D + A))))
                        }
                        o(h, h, v), s(h, h, g), o(d, d, v), s(d, d, g), t.bezierCurveTo(h[0], h[1], d[0], d[1], S[0], S[1]), l(h, S, c, m * T)
                    } else t.lineTo(S[0], S[1]);
                    _ = b, b += p
                }
                return w
            }

            function m(t, e) {
                var i = [1 / 0, 1 / 0],
                    n = [-1 / 0, -1 / 0];
                if (e)
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
                    }
                return {
                    min: e ? i : n,
                    max: e ? n : i
                }
            }
            var y = n.extend({
                    type: "ec-polyline",
                    shape: {
                        points: [],
                        smooth: 0,
                        smoothConstraint: !0,
                        smoothMonotone: null,
                        connectNulls: !1
                    },
                    style: {
                        fill: null,
                        stroke: "#000"
                    },
                    brush: a(n.prototype.brush),
                    buildPath: function(t, e) {
                        var i = e.points,
                            n = 0,
                            r = i.length,
                            a = m(i, e.smoothConstraint);
                        if (e.connectNulls) {
                            for (; r > 0 && f(i[r - 1]); r--);
                            for (; n < r && f(i[n]); n++);
                        }
                        for (; n < r;) n += p(t, i, n, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
                    }
                }),
                x = n.extend({
                    type: "ec-polygon",
                    shape: {
                        points: [],
                        stackedOnPoints: [],
                        smooth: 0,
                        stackedOnSmooth: 0,
                        smoothConstraint: !0,
                        smoothMonotone: null,
                        connectNulls: !1
                    },
                    brush: a(n.prototype.brush),
                    buildPath: function(t, e) {
                        var i = e.points,
                            n = e.stackedOnPoints,
                            r = 0,
                            a = i.length,
                            o = e.smoothMonotone,
                            s = m(i, e.smoothConstraint),
                            l = m(n, e.smoothConstraint);
                        if (e.connectNulls) {
                            for (; a > 0 && f(i[a - 1]); a--);
                            for (; r < a && f(i[r]); r++);
                        }
                        for (; r < a;) {
                            var u = p(t, i, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                            p(t, n, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += u + 1, t.closePath()
                        }
                    }
                });
            e.Polyline = y, e.Polygon = x
        },
        "81e8": function(t, e, i) {
            var n = i("b2de"),
                r = i("7b27"),
                a = i("cb89"),
                o = i("6b25"),
                s = i("df91"),
                l = i("3caf"),
                u = i("f101"),
                c = i("3b4b");
            e.Image = c;
            var h = i("055a");
            e.Group = h;
            var d = i("852d");
            e.Text = d;
            var f = i("177a");
            e.Circle = f;
            var p = i("3b71");
            e.Sector = p;
            var g = i("bf4c");
            e.Ring = g;
            var v = i("243b");
            e.Polygon = v;
            var m = i("ee6d");
            e.Polyline = m;
            var y = i("8dc2");
            e.Rect = y;
            var x = i("8da8");
            e.Line = x;
            var _ = i("6c7e");
            e.BezierCurve = _;
            var b = i("9d7f");
            e.Arc = b;
            var w = i("4188");
            e.CompoundPath = w;
            var S = i("4823");
            e.LinearGradient = S;
            var C = i("e43f");
            e.RadialGradient = C;
            var M = i("a16b");
            e.BoundingRect = M;
            var T = i("be89");
            e.IncrementalDisplayable = T;
            var I = i("8503"),
                A = Math.max,
                D = Math.min,
                k = {},
                P = "emphasis",
                O = "normal",
                L = 1,
                E = {},
                R = {};

            function N(t, e) {
                R[t] = e
            }

            function B(t, e, i, n) {
                var a = r.createFromString(t, e);
                return i && ("center" === n && (i = z(i, a.getBoundingRect())), V(a, i)), a
            }

            function z(t, e) {
                var i, n = e.width / e.height,
                    r = t.height * n;
                return r <= t.width ? i = t.height : i = (r = t.width) / n, {
                    x: t.x + t.width / 2 - r / 2,
                    y: t.y + t.height / 2 - i / 2,
                    width: r,
                    height: i
                }
            }
            var F = r.mergePath;

            function V(t, e) {
                if (t.applyTransform) {
                    var i = t.getBoundingRect().calculateTransform(e);
                    t.applyTransform(i)
                }
            }
            var H = I.subPixelOptimize;

            function W(t) {
                return null != t && "none" !== t
            }
            var G = n.createHashMap(),
                U = 0;

            function Y(t) {
                var e = t.__hoverStl;
                if (e && !t.__highlighted) {
                    var i = t.__zr,
                        n = t.useHoverLayer && i && "canvas" === i.painter.type;
                    if (t.__highlighted = n ? "layer" : "plain", !(t.isGroup || !i && t.useHoverLayer)) {
                        var r = t,
                            a = t.style;
                        n && (a = (r = i.addHover(t)).style), st(a), n || function(t) {
                            if (t.__hoverStlDirty) {
                                t.__hoverStlDirty = !1;
                                var e = t.__hoverStl;
                                if (e) {
                                    var i = t.__cachedNormalStl = {};
                                    t.__cachedNormalZ2 = t.z2;
                                    var n = t.style;
                                    for (var r in e) null != e[r] && (i[r] = n[r]);
                                    i.fill = n.fill, i.stroke = n.stroke
                                } else t.__cachedNormalStl = t.__cachedNormalZ2 = null
                            }
                        }(r), a.extendFrom(e), j(a, e, "fill"), j(a, e, "stroke"), ot(a), n || (t.dirty(!1), t.z2 += 1)
                    }
                }
            }

            function j(t, e, i) {
                !W(e[i]) && W(t[i]) && (t[i] = function(t) {
                    if ("string" != typeof t) return t;
                    var e = G.get(t);
                    return e || (e = a.lift(t, -.1), U < 1e4 && (G.set(t, e), U++)), e
                }(t[i]))
            }

            function X(t) {
                var e = t.__highlighted;
                if (e && (t.__highlighted = !1, !t.isGroup))
                    if ("layer" === e) t.__zr && t.__zr.removeHover(t);
                    else {
                        var i = t.style,
                            n = t.__cachedNormalStl;
                        n && (st(i), t.setStyle(n), ot(i));
                        var r = t.__cachedNormalZ2;
                        null != r && t.z2 - r == 1 && (t.z2 = r)
                    }
            }

            function q(t, e, i) {
                var n, r = O,
                    a = O;
                t.__highlighted && (r = P, n = !0), e(t, i), t.__highlighted && (a = P, n = !0), t.isGroup && t.traverse((function(t) {
                    !t.isGroup && e(t, i)
                })), n && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a)
            }

            function Z(t, e) {
                e = t.__hoverStl = !1 !== e && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, X(t), Y(t))
            }

            function $(t) {
                !tt(this, t) && !this.__highByOuter && q(this, Y)
            }

            function K(t) {
                !tt(this, t) && !this.__highByOuter && q(this, X)
            }

            function Q(t) {
                this.__highByOuter |= 1 << (t || 0), q(this, Y)
            }

            function J(t) {
                !(this.__highByOuter &= ~(1 << (t || 0))) && q(this, X)
            }

            function tt(t, e) {
                return t.__highDownSilentOnTouch && e.zrByTouch
            }

            function et(t, e) {
                var i = !1 === e;
                if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !i || t.__highDownDispatcher) {
                    var n = i ? "off" : "on";
                    t[n]("mouseover", $)[n]("mouseout", K), t[n]("emphasis", Q)[n]("normal", J), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !i
                }
            }

            function it(t, e, i, r, a) {
                return nt(t, e, r, a), i && n.extend(t, i), t
            }

            function nt(t, e, i, r) {
                if ((i = i || k).isRectText) {
                    var a;
                    i.getTextPosition ? a = i.getTextPosition(e, r) : "outside" === (a = e.getShallow("position") || (r ? null : "inside")) && (a = "top"), t.textPosition = a, t.textOffset = e.getShallow("offset");
                    var o = e.getShallow("rotate");
                    null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = n.retrieve2(e.getShallow("distance"), r ? null : 5)
                }
                var s, l = e.ecModel,
                    u = l && l.option.textStyle,
                    c = function(t) {
                        var e;
                        for (; t && t !== t.ecModel;) {
                            var i = (t.option || k).rich;
                            if (i)
                                for (var n in e = e || {}, i) i.hasOwnProperty(n) && (e[n] = 1);
                            t = t.parentModel
                        }
                        return e
                    }(e);
                if (c)
                    for (var h in s = {}, c)
                        if (c.hasOwnProperty(h)) {
                            var d = e.getModel(["rich", h]);
                            rt(s[h] = {}, d, u, i, r)
                        } return t.rich = s, rt(t, e, u, i, r, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t
            }

            function rt(t, e, i, r, a, o) {
                i = !a && i || k, t.textFill = at(e.getShallow("color"), r) || i.color, t.textStroke = at(e.getShallow("textBorderColor"), r) || i.textBorderColor, t.textStrokeWidth = n.retrieve2(e.getShallow("textBorderWidth"), i.textBorderWidth), a || (o && (t.insideRollbackOpt = r, ot(t)), null == t.textFill && (t.textFill = r.autoColor)), t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && r.disableBox || (t.textBackgroundColor = at(e.getShallow("backgroundColor"), r), t.textPadding = e.getShallow("padding"), t.textBorderColor = at(e.getShallow("borderColor"), r), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY
            }

            function at(t, e) {
                return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
            }

            function ot(t) {
                var e, i = t.textPosition,
                    n = t.insideRollbackOpt;
                if (n && null == t.textFill) {
                    var r = n.autoColor,
                        a = n.isRectText,
                        o = n.useInsideStyle,
                        s = !1 !== o && (!0 === o || a && i && "string" == typeof i && i.indexOf("inside") >= 0),
                        l = !s && null != r;
                    (s || l) && (e = {
                        textFill: t.textFill,
                        textStroke: t.textStroke,
                        textStrokeWidth: t.textStrokeWidth
                    }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = r)
                }
                t.insideRollback = e
            }

            function st(t) {
                var e = t.insideRollback;
                e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
            }

            function lt(t, e, i, n, r, a) {
                if ("function" == typeof r && (a = r, r = null), n && n.isAnimationEnabled()) {
                    var o = t ? "Update" : "",
                        s = n.getShallow("animationDuration" + o),
                        l = n.getShallow("animationEasing" + o),
                        u = n.getShallow("animationDelay" + o);
                    "function" == typeof u && (u = u(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(i, s, u || 0, l, a, !!a) : (e.stopAnimation(), e.attr(i), a && a())
                } else e.stopAnimation(), e.attr(i), a && a()
            }

            function ut(t, e, i, n, r) {
                lt(!0, t, e, i, n, r)
            }

            function ct(t, e, i) {
                return e && !n.isArrayLike(e) && (e = u.getLocalTransform(e)), i && (e = o.invert([], e)), s.applyTransform([], t, e)
            }

            function ht(t, e, i, n, r, a, o, s) {
                var l = i - t,
                    u = n - e,
                    c = o - r,
                    h = s - a,
                    d = dt(c, h, l, u);
                if (function(t) {
                        return t <= 1e-6 && t >= -1e-6
                    }(d)) return !1;
                var f = t - r,
                    p = e - a,
                    g = dt(f, p, l, u) / d;
                if (g < 0 || g > 1) return !1;
                var v = dt(f, p, c, h) / d;
                return !(v < 0 || v > 1)
            }

            function dt(t, e, i, n) {
                return t * n - i * e
            }
            N("circle", f), N("sector", p), N("ring", g), N("polygon", v), N("polyline", m), N("rect", y), N("line", x), N("bezierCurve", _), N("arc", b), e.Z2_EMPHASIS_LIFT = 1, e.CACHED_LABEL_STYLE_PROPERTIES = {
                color: "textFill",
                textBorderColor: "textStroke",
                textBorderWidth: "textStrokeWidth"
            }, e.extendShape = function(t) {
                return l.extend(t)
            }, e.extendPath = function(t, e) {
                return r.extendFromString(t, e)
            }, e.registerShape = N, e.getShapeClass = function(t) {
                if (R.hasOwnProperty(t)) return R[t]
            }, e.makePath = B, e.makeImage = function(t, e, i) {
                var n = new c({
                    style: {
                        image: t,
                        x: e.x,
                        y: e.y,
                        width: e.width,
                        height: e.height
                    },
                    onload: function(t) {
                        if ("center" === i) {
                            var r = {
                                width: t.width,
                                height: t.height
                            };
                            n.setStyle(z(e, r))
                        }
                    }
                });
                return n
            }, e.mergePath = F, e.resizePath = V, e.subPixelOptimizeLine = function(t) {
                return I.subPixelOptimizeLine(t.shape, t.shape, t.style), t
            }, e.subPixelOptimizeRect = function(t) {
                return I.subPixelOptimizeRect(t.shape, t.shape, t.style), t
            }, e.subPixelOptimize = H, e.setElementHoverStyle = Z, e.setHoverStyle = function(t, e) {
                et(t, !0), q(t, Z, e)
            }, e.setAsHighDownDispatcher = et, e.isHighDownDispatcher = function(t) {
                return !(!t || !t.__highDownDispatcher)
            }, e.getHighlightDigit = function(t) {
                var e = E[t];
                return null == e && L <= 32 && (e = E[t] = L++), e
            }, e.setLabelStyle = function(t, e, i, r, a, o, s) {
                var l, u = (a = a || k).labelFetcher,
                    c = a.labelDataIndex,
                    h = a.labelDimIndex,
                    d = i.getShallow("show"),
                    f = r.getShallow("show");
                (d || f) && (u && (l = u.getFormattedLabel(c, "normal", null, h)), null == l && (l = n.isFunction(a.defaultText) ? a.defaultText(c, a) : a.defaultText));
                var p = d ? l : null,
                    g = f ? n.retrieve2(u ? u.getFormattedLabel(c, "emphasis", null, h) : null, l) : null;
                null == p && null == g || (it(t, i, o, a), it(e, r, s, a, !0)), t.text = p, e.text = g
            }, e.modifyLabelStyle = function(t, e, i) {
                var r = t.style;
                e && (st(r), t.setStyle(e), ot(r)), r = t.__hoverStl, i && r && (st(r), n.extend(r, i), ot(r))
            }, e.setTextStyle = it, e.setText = function(t, e, i) {
                var n, r = {
                    isRectText: !0
                };
                !1 === i ? n = !0 : r.autoColor = i, nt(t, e, r, n)
            }, e.getFont = function(t, e) {
                var i = e && e.getModel("textStyle");
                return n.trim([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "))
            }, e.updateProps = ut, e.initProps = function(t, e, i, n, r) {
                lt(!1, t, e, i, n, r)
            }, e.getTransform = function(t, e) {
                for (var i = o.identity([]); t && t !== e;) o.mul(i, t.getLocalTransform(), i), t = t.parent;
                return i
            }, e.applyTransform = ct, e.transformDirection = function(t, e, i) {
                var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                    r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                    a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
                return a = ct(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
            }, e.groupTransition = function(t, e, i, r) {
                if (t && e) {
                    var a = function(t) {
                        var e = {};
                        return t.traverse((function(t) {
                            !t.isGroup && t.anid && (e[t.anid] = t)
                        })), e
                    }(t);
                    e.traverse((function(t) {
                        if (!t.isGroup && t.anid) {
                            var e = a[t.anid];
                            if (e) {
                                var n = o(t);
                                t.attr(o(e)), ut(t, n, i, t.dataIndex)
                            }
                        }
                    }))
                }

                function o(t) {
                    var e = {
                        position: s.clone(t.position),
                        rotation: t.rotation
                    };
                    return t.shape && (e.shape = n.extend({}, t.shape)), e
                }
            }, e.clipPointsByRect = function(t, e) {
                return n.map(t, (function(t) {
                    var i = t[0];
                    i = A(i, e.x), i = D(i, e.x + e.width);
                    var n = t[1];
                    return n = A(n, e.y), [i, n = D(n, e.y + e.height)]
                }))
            }, e.clipRectByRect = function(t, e) {
                var i = A(t.x, e.x),
                    n = D(t.x + t.width, e.x + e.width),
                    r = A(t.y, e.y),
                    a = D(t.y + t.height, e.y + e.height);
                if (n >= i && a >= r) return {
                    x: i,
                    y: r,
                    width: n - i,
                    height: a - r
                }
            }, e.createIcon = function(t, e, i) {
                var r = (e = n.extend({
                    rectHover: !0
                }, e)).style = {
                    strokeNoScale: !0
                };
                if (i = i || {
                        x: -1,
                        y: -1,
                        width: 2,
                        height: 2
                    }, t) return 0 === t.indexOf("image://") ? (r.image = t.slice(8), n.defaults(r, i), new c(e)) : B(t.replace("path://", ""), e, i, "center")
            }, e.linePolygonIntersect = function(t, e, i, n, r) {
                for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
                    var s = r[a];
                    if (ht(t, e, i, n, s[0], s[1], o[0], o[1])) return !0;
                    o = s
                }
            }, e.lineLineIntersect = ht
        },
        "83e1": function(t, e, i) {
            var n = i("b2de");
            e.layout = function(t, e, i) {
                i = i || {};
                var r = t.coordinateSystem,
                    a = e.axis,
                    o = {},
                    s = a.getAxesOnZeroOf()[0],
                    l = a.position,
                    u = s ? "onZero" : l,
                    c = a.dim,
                    h = r.getRect(),
                    d = [h.x, h.x + h.width, h.y, h.y + h.height],
                    f = {
                        left: 0,
                        right: 1,
                        top: 0,
                        bottom: 1,
                        onZero: 2
                    },
                    p = e.get("offset") || 0,
                    g = "x" === c ? [d[2] - p, d[3] + p] : [d[0] - p, d[1] + p];
                if (s) {
                    var v = s.toGlobalCoord(s.dataToCoord(0));
                    g[f.onZero] = Math.max(Math.min(v, g[1]), g[0])
                }
                o.position = ["y" === c ? g[f[u]] : d[0], "x" === c ? g[f[u]] : d[3]], o.rotation = Math.PI / 2 * ("x" === c ? 0 : 1), o.labelDirection = o.tickDirection = o.nameDirection = {
                    top: -1,
                    bottom: 1,
                    left: -1,
                    right: 1
                } [l], o.labelOffset = s ? g[f[l]] - g[f.onZero] : 0, e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), n.retrieve(i.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
                var m = e.get("axisLabel.rotate");
                return o.labelRotate = "top" === u ? -m : m, o.z2 = 1, o
            }
        },
        "84cd": function(t, e) {
            var i = function(t) {
                this.colorStops = t || []
            };
            i.prototype = {
                constructor: i,
                addColorStop: function(t, e) {
                    this.colorStops.push({
                        offset: t,
                        color: e
                    })
                }
            };
            var n = i;
            t.exports = n
        },
        8503: function(t, e) {
            var i = Math.round;

            function n(t, e, n) {
                var r = i(2 * t);
                return (r + i(e)) % 2 == 0 ? r / 2 : (r + (n ? 1 : -1)) / 2
            }
            e.subPixelOptimizeLine = function(t, e, r) {
                var a = r && r.lineWidth;
                if (e && a) {
                    var o = e.x1,
                        s = e.x2,
                        l = e.y1,
                        u = e.y2;
                    i(2 * o) === i(2 * s) ? t.x1 = t.x2 = n(o, a, !0) : (t.x1 = o, t.x2 = s), i(2 * l) === i(2 * u) ? t.y1 = t.y2 = n(l, a, !0) : (t.y1 = l, t.y2 = u)
                }
            }, e.subPixelOptimizeRect = function(t, e, i) {
                var r = i && i.lineWidth;
                if (e && r) {
                    var a = e.x,
                        o = e.y,
                        s = e.width,
                        l = e.height;
                    t.x = n(a, r, !0), t.y = n(o, r, !0), t.width = Math.max(n(a + s, r, !1) - t.x, 0 === s ? 0 : 1), t.height = Math.max(n(o + l, r, !1) - t.y, 0 === l ? 0 : 1)
                }
            }, e.subPixelOptimize = n
        },
        "852d": function(t, e, i) {
            var n = i("d2f8"),
                r = i("b2de"),
                a = i("4592"),
                o = i("2541"),
                s = i("3550").ContextCachedBy,
                l = function(t) {
                    n.call(this, t)
                };
            l.prototype = {
                constructor: l,
                type: "text",
                brush: function(t, e) {
                    var i = this.style;
                    this.__dirty && o.normalizeTextStyle(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
                    var n = i.text;
                    null != n && (n += ""), o.needDrawText(n, i) ? (this.setTransform(t), o.renderText(this, t, n, i, null, e), this.restoreTransform(t)) : t.__attrCachedBy = s.NONE
                },
                getBoundingRect: function() {
                    var t = this.style;
                    if (this.__dirty && o.normalizeTextStyle(t, !0), !this._rect) {
                        var e = t.text;
                        null != e ? e += "" : e = "";
                        var i = a.getBoundingRect(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                        if (i.x += t.x || 0, i.y += t.y || 0, o.getStroke(t.textStroke, t.textStrokeWidth)) {
                            var n = t.textStrokeWidth;
                            i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n
                        }
                        this._rect = i
                    }
                    return this._rect
                }
            }, r.inherits(l, n);
            var u = l;
            t.exports = u
        },
        "86a2": function(t, e, i) {
            var n = i("84cd"),
                r = i("b2de").isFunction,
                a = {
                    createOnAllSeries: !0,
                    performRawSeries: !0,
                    reset: function(t, e) {
                        var i = t.getData(),
                            a = (t.visualColorAccessPath || "itemStyle.color").split("."),
                            o = t.get(a),
                            s = !r(o) || o instanceof n ? null : o;
                        o && !s || (o = t.getColorFromPalette(t.name, null, e.getSeriesCount())), i.setVisual("color", o);
                        var l = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),
                            u = t.get(l);
                        if (i.setVisual("borderColor", u), !e.isSeriesFiltered(t)) {
                            s && i.each((function(e) {
                                i.setItemVisual(e, "color", s(t.getDataParams(e)))
                            }));
                            return {
                                dataEach: i.hasItemOption ? function(t, e) {
                                    var i = t.getItemModel(e),
                                        n = i.get(a, !0),
                                        r = i.get(l, !0);
                                    null != n && t.setItemVisual(e, "color", n), null != r && t.setItemVisual(e, "borderColor", r)
                                } : null
                            }
                        }
                    }
                };
            t.exports = a
        },
        8778: function(t, e, i) {
            var n = i("56b7").extendComponentModel({
                type: "tooltip",
                dependencies: ["axisPointer"],
                defaultOption: {
                    zlevel: 0,
                    z: 60,
                    show: !0,
                    showContent: !0,
                    trigger: "item",
                    triggerOn: "mousemove|click",
                    alwaysShowContent: !1,
                    displayMode: "single",
                    renderMode: "auto",
                    confine: !1,
                    showDelay: 0,
                    hideDelay: 100,
                    transitionDuration: .4,
                    enterable: !1,
                    backgroundColor: "rgba(50,50,50,0.7)",
                    borderColor: "#333",
                    borderRadius: 4,
                    borderWidth: 0,
                    padding: 5,
                    extraCssText: "",
                    axisPointer: {
                        type: "line",
                        axis: "auto",
                        animation: "auto",
                        animationDurationUpdate: 200,
                        animationEasingUpdate: "exponentialOut",
                        crossStyle: {
                            color: "#999",
                            width: 1,
                            type: "dashed",
                            textStyle: {}
                        }
                    },
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    }
                }
            });
            t.exports = n
        },
        "8a5a": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = n.isObject,
                a = n.each,
                o = n.map,
                s = n.indexOf,
                l = (n.retrieve, i("1f1f")).getLayoutRect,
                u = i("8d1f"),
                c = u.createScaleByModel,
                h = u.ifAxisCrossZero,
                d = u.niceScaleExtent,
                f = u.estimateLabelUnionRect,
                p = i("3303"),
                g = i("7cb6"),
                v = i("2c57"),
                m = i("2b02").getStackedDimension;

            function y(t, e, i) {
                return t.getCoordSysModel() === e
            }

            function x(t, e, i) {
                this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this.model = t
            }
            i("e369");
            var _ = x.prototype;

            function b(t, e, i, n) {
                i.getAxesOnZeroOf = function() {
                    return r ? [r] : []
                };
                var r, a = t[e],
                    o = i.model,
                    s = o.get("axisLine.onZero"),
                    l = o.get("axisLine.onZeroAxisIndex");
                if (s) {
                    if (null != l) w(a[l]) && (r = a[l]);
                    else
                        for (var u in a)
                            if (a.hasOwnProperty(u) && w(a[u]) && !n[c(a[u])]) {
                                r = a[u];
                                break
                            } r && (n[c(r)] = !0)
                }

                function c(t) {
                    return t.dim + "_" + t.index
                }
            }

            function w(t) {
                return t && "category" !== t.type && "time" !== t.type && h(t)
            }
            _.type = "grid", _.axisPointerEnabled = !0, _.getRect = function() {
                return this._rect
            }, _.update = function(t, e) {
                var i = this._axesMap;
                this._updateScale(t, this.model), a(i.x, (function(t) {
                    d(t.scale, t.model)
                })), a(i.y, (function(t) {
                    d(t.scale, t.model)
                }));
                var n = {};
                a(i.x, (function(t) {
                    b(i, "y", t, n)
                })), a(i.y, (function(t) {
                    b(i, "x", t, n)
                })), this.resize(this.model, e)
            }, _.resize = function(t, e, i) {
                var n = l(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                });
                this._rect = n;
                var r = this._axesList;

                function o() {
                    a(r, (function(t) {
                        var e = t.isHorizontal(),
                            i = e ? [0, n.width] : [0, n.height],
                            r = t.inverse ? 1 : 0;
                        t.setExtent(i[r], i[1 - r]),
                            function(t, e) {
                                var i = t.getExtent(),
                                    n = i[0] + i[1];
                                t.toGlobalCoord = "x" === t.dim ? function(t) {
                                    return t + e
                                } : function(t) {
                                    return n - t + e
                                }, t.toLocalCoord = "x" === t.dim ? function(t) {
                                    return t - e
                                } : function(t) {
                                    return n - t + e
                                }
                            }(t, e ? n.x : n.y)
                    }))
                }
                o(), !i && t.get("containLabel") && (a(r, (function(t) {
                    if (!t.model.get("axisLabel.inside")) {
                        var e = f(t);
                        if (e) {
                            var i = t.isHorizontal() ? "height" : "width",
                                r = t.model.get("axisLabel.margin");
                            n[i] -= e[i] + r, "top" === t.position ? n.y += e.height + r : "left" === t.position && (n.x += e.width + r)
                        }
                    }
                })), o())
            }, _.getAxis = function(t, e) {
                var i = this._axesMap[t];
                if (null != i) {
                    if (null == e)
                        for (var n in i)
                            if (i.hasOwnProperty(n)) return i[n];
                    return i[e]
                }
            }, _.getAxes = function() {
                return this._axesList.slice()
            }, _.getCartesian = function(t, e) {
                if (null != t && null != e) {
                    var i = "x" + t + "y" + e;
                    return this._coordsMap[i]
                }
                r(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
                for (var n = 0, a = this._coordsList; n < a.length; n++)
                    if (a[n].getAxis("x").index === t || a[n].getAxis("y").index === e) return a[n]
            }, _.getCartesians = function() {
                return this._coordsList.slice()
            }, _.convertToPixel = function(t, e, i) {
                var n = this._findConvertTarget(t, e);
                return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
            }, _.convertFromPixel = function(t, e, i) {
                var n = this._findConvertTarget(t, e);
                return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
            }, _._findConvertTarget = function(t, e) {
                var i, n, r = e.seriesModel,
                    a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
                    o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
                    l = e.gridModel,
                    u = this._coordsList;
                if (r) i = r.coordinateSystem, s(u, i) < 0 && (i = null);
                else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex);
                else if (a) n = this.getAxis("x", a.componentIndex);
                else if (o) n = this.getAxis("y", o.componentIndex);
                else if (l) {
                    l.coordinateSystem === this && (i = this._coordsList[0])
                }
                return {
                    cartesian: i,
                    axis: n
                }
            }, _.containPoint = function(t) {
                var e = this._coordsList[0];
                if (e) return e.containPoint(t)
            }, _._initCartesian = function(t, e, i) {
                var n = {
                        left: !1,
                        right: !1,
                        top: !1,
                        bottom: !1
                    },
                    r = {
                        x: {},
                        y: {}
                    },
                    o = {
                        x: 0,
                        y: 0
                    };
                if (e.eachComponent("xAxis", s("x"), this), e.eachComponent("yAxis", s("y"), this), !o.x || !o.y) return this._axesMap = {}, void(this._axesList = []);

                function s(e) {
                    return function(i, a) {
                        if (y(i, t)) {
                            var s = i.get("position");
                            "x" === e ? "top" !== s && "bottom" !== s && (s = n.bottom ? "top" : "bottom") : "left" !== s && "right" !== s && (s = n.left ? "right" : "left"), n[s] = !0;
                            var l = new g(e, c(i), [0, 0], i.get("type"), s),
                                u = "category" === l.type;
                            l.onBand = u && i.get("boundaryGap"), l.inverse = i.get("inverse"), i.axis = l, l.model = i, l.grid = this, l.index = a, this._axesList.push(l), r[e][a] = l, o[e]++
                        }
                    }
                }
                this._axesMap = r, a(r.x, (function(e, i) {
                    a(r.y, (function(n, r) {
                        var a = "x" + i + "y" + r,
                            o = new p(a);
                        o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(n)
                    }), this)
                }), this)
            }, _._updateScale = function(t, e) {
                function i(t, e, i) {
                    a(t.mapDimension(e.dim, !0), (function(i) {
                        e.scale.unionExtentFromData(t, m(t, i))
                    }))
                }
                a(this._axesList, (function(t) {
                    t.scale.setExtent(1 / 0, -1 / 0)
                })), t.eachSeries((function(n) {
                    if (M(n)) {
                        var r = C(n, t),
                            a = r[0],
                            o = r[1];
                        if (!y(a, e) || !y(o, e)) return;
                        var s = this.getCartesian(a.componentIndex, o.componentIndex),
                            l = n.getData(),
                            u = s.getAxis("x"),
                            c = s.getAxis("y");
                        "list" === l.type && (i(l, u), i(l, c))
                    }
                }), this)
            }, _.getTooltipAxes = function(t) {
                var e = [],
                    i = [];
                return a(this.getCartesians(), (function(n) {
                    var r = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(),
                        a = n.getOtherAxis(r);
                    s(e, r) < 0 && e.push(r), s(i, a) < 0 && i.push(a)
                })), {
                    baseAxes: e,
                    otherAxes: i
                }
            };
            var S = ["xAxis", "yAxis"];

            function C(t, e) {
                return o(S, (function(e) {
                    return t.getReferringComponents(e)[0]
                }))
            }

            function M(t) {
                return "cartesian2d" === t.get("coordinateSystem")
            }
            x.create = function(t, e) {
                var i = [];
                return t.eachComponent("grid", (function(n, r) {
                    var a = new x(n, t, e);
                    a.name = "grid_" + r, a.resize(n, e, !0), n.coordinateSystem = a, i.push(a)
                })), t.eachSeries((function(t) {
                    if (M(t)) {
                        var e = C(t),
                            i = e[0],
                            n = e[1],
                            r = i.getCoordSysModel().coordinateSystem;
                        t.coordinateSystem = r.getCartesian(i.componentIndex, n.componentIndex)
                    }
                })), i
            }, x.dimensions = x.prototype.dimensions = p.prototype.dimensions, v.register("cartesian2d", x);
            var T = x;
            t.exports = T
        },
        "8cc0": function(t, e) {
            e.buildPath = function(t, e) {
                var i, n, r, a, o, s = e.x,
                    l = e.y,
                    u = e.width,
                    c = e.height,
                    h = e.r;
                u < 0 && (s += u, u = -u), c < 0 && (l += c, c = -c), "number" == typeof h ? i = n = r = a = h : h instanceof Array ? 1 === h.length ? i = n = r = a = h[0] : 2 === h.length ? (i = r = h[0], n = a = h[1]) : 3 === h.length ? (i = h[0], n = a = h[1], r = h[2]) : (i = h[0], n = h[1], r = h[2], a = h[3]) : i = n = r = a = 0, i + n > u && (i *= u / (o = i + n), n *= u / o), r + a > u && (r *= u / (o = r + a), a *= u / o), n + r > c && (n *= c / (o = n + r), r *= c / o), i + a > c && (i *= c / (o = i + a), a *= c / o), t.moveTo(s + i, l), t.lineTo(s + u - n, l), 0 !== n && t.arc(s + u - n, l + n, n, -Math.PI / 2, 0), t.lineTo(s + u, l + c - r), 0 !== r && t.arc(s + u - r, l + c - r, r, 0, Math.PI / 2), t.lineTo(s + a, l + c), 0 !== a && t.arc(s + a, l + c - a, a, Math.PI / 2, Math.PI), t.lineTo(s, l + i), 0 !== i && t.arc(s + i, l + i, i, Math.PI, 1.5 * Math.PI)
            }
        },
        "8cf9": function(t, e, i) {
            var n = i("b2de"),
                r = i("0238"),
                a = i("8d1f"),
                o = i("03c1"),
                s = i("e62d0"),
                l = i("1f1f");
            l.getLayoutRect, e.getLayoutRect = l.getLayoutRect;
            var u = i("2b02"),
                c = u.enableDataStack,
                h = u.isDimensionStacked,
                d = u.getStackedDimension,
                f = i("a711");
            e.completeDimensions = f;
            var p = i("56ab");
            e.createDimensions = p;
            var g = i("0bbe");
            e.createSymbol = g.createSymbol;
            var v = {
                isDimensionStacked: h,
                enableDataStack: c,
                getStackedDimension: d
            };
            e.createList = function(t) {
                return r(t.getSource(), t)
            }, e.dataStack = v, e.createScale = function(t, e) {
                var i = e;
                s.isInstance(e) || (i = new s(e), n.mixin(i, o));
                var r = a.createScaleByModel(i);
                return r.setExtent(t[0], t[1]), a.niceScaleExtent(r, i), r
            }, e.mixinAxisModelCommonMethods = function(t) {
                n.mixin(t, o)
            }
        },
        "8d1f": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = i("5d88"),
                a = i("446b"),
                o = i("63e4"),
                s = i("e2dc"),
                l = i("c527"),
                u = l.prepareLayoutBarSeries,
                c = l.makeColumnLayout,
                h = l.retrieveColumnLayout,
                d = i("a16b");

            function f(t, e) {
                var i, r, a, o = t.type,
                    l = e.getMin(),
                    h = e.getMax(),
                    d = null != l,
                    f = null != h,
                    g = t.getExtent();
                "ordinal" === o ? i = e.getCategories().length : (r = e.get("boundaryGap"), n.isArray(r) || (r = [r || 0, r || 0]), "boolean" == typeof r[0] && (r = [0, 0]), r[0] = s.parsePercent(r[0], 1), r[1] = s.parsePercent(r[1], 1), a = g[1] - g[0] || Math.abs(g[0])), null == l && (l = "ordinal" === o ? i ? 0 : NaN : g[0] - r[0] * a), null == h && (h = "ordinal" === o ? i ? i - 1 : NaN : g[1] + r[1] * a), "dataMin" === l ? l = g[0] : "function" == typeof l && (l = l({
                    min: g[0],
                    max: g[1]
                })), "dataMax" === h ? h = g[1] : "function" == typeof h && (h = h({
                    min: g[0],
                    max: g[1]
                })), (null == l || !isFinite(l)) && (l = NaN), (null == h || !isFinite(h)) && (h = NaN), t.setBlank(n.eqNaN(l) || n.eqNaN(h) || "ordinal" === o && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (l > 0 && h > 0 && !d && (l = 0), l < 0 && h < 0 && !f && (h = 0));
                var v = e.ecModel;
                if (v && "time" === o) {
                    var m, y = u("bar", v);
                    if (n.each(y, (function(t) {
                            m |= t.getBaseAxis() === e.axis
                        })), m) {
                        var x = c(y),
                            _ = p(l, h, e, x);
                        l = _.min, h = _.max
                    }
                }
                return [l, h]
            }

            function p(t, e, i, r) {
                var a = i.axis.getExtent(),
                    o = a[1] - a[0],
                    s = h(r, i.axis);
                if (void 0 === s) return {
                    min: t,
                    max: e
                };
                var l = 1 / 0;
                n.each(s, (function(t) {
                    l = Math.min(t.offset, l)
                }));
                var u = -1 / 0;
                n.each(s, (function(t) {
                    u = Math.max(t.offset + t.width, u)
                })), l = Math.abs(l), u = Math.abs(u);
                var c = l + u,
                    d = e - t,
                    f = d / (1 - (l + u) / o) - d;
                return {
                    min: t -= f * (l / c),
                    max: e += f * (u / c)
                }
            }

            function g(t) {
                var e = t.getLabelModel().get("formatter"),
                    i = "category" === t.type ? t.scale.getExtent()[0] : null;
                return "string" == typeof e ? e = function(e) {
                    return function(i) {
                        return i = t.scale.getLabel(i), e.replace("{value}", null != i ? i : "")
                    }
                }(e) : "function" == typeof e ? function(n, r) {
                    return null != i && (r = n - i), e(v(t, n), r)
                } : function(e) {
                    return t.scale.getLabel(e)
                }
            }

            function v(t, e) {
                return "category" === t.type ? t.scale.getLabel(e) : e
            }

            function m(t, e) {
                var i = e * Math.PI / 180,
                    n = t.plain(),
                    r = n.width,
                    a = n.height,
                    o = r * Math.cos(i) + a * Math.sin(i),
                    s = r * Math.sin(i) + a * Math.cos(i);
                return new d(n.x, n.y, o, s)
            }

            function y(t) {
                var e = t.get("interval");
                return null == e ? "auto" : e
            }
            i("096b"), i("4f54"), e.getScaleExtent = f, e.niceScaleExtent = function(t, e) {
                var i = f(t, e),
                    n = null != e.getMin(),
                    r = null != e.getMax(),
                    a = e.get("splitNumber");
                "log" === t.type && (t.base = e.get("logBase"));
                var o = t.type;
                t.setExtent(i[0], i[1]), t.niceExtent({
                    splitNumber: a,
                    fixMin: n,
                    fixMax: r,
                    minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
                    maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
                });
                var s = e.get("interval");
                null != s && t.setInterval && t.setInterval(s)
            }, e.createScaleByModel = function(t, e) {
                if (e = e || t.get("type")) switch (e) {
                    case "category":
                        return new r(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
                    case "value":
                        return new a;
                    default:
                        return (o.getClass(e) || a).create(t)
                }
            }, e.ifAxisCrossZero = function(t) {
                var e = t.scale.getExtent(),
                    i = e[0],
                    n = e[1];
                return !(i > 0 && n > 0 || i < 0 && n < 0)
            }, e.makeLabelFormatter = g, e.getAxisRawValue = v, e.estimateLabelUnionRect = function(t) {
                var e = t.model,
                    i = t.scale;
                if (e.get("axisLabel.show") && !i.isBlank()) {
                    var n, r, a = "category" === t.type,
                        o = i.getExtent();
                    a ? r = i.count() : r = (n = i.getTicks()).length;
                    var s, l = t.getLabelModel(),
                        u = g(t),
                        c = 1;
                    r > 40 && (c = Math.ceil(r / 40));
                    for (var h = 0; h < r; h += c) {
                        var d = u(n ? n[h] : o[0] + h),
                            f = m(l.getTextRect(d), l.get("rotate") || 0);
                        s ? s.union(f) : s = f
                    }
                    return s
                }
            }, e.getOptionCategoryInterval = y, e.shouldShowAllLabels = function(t) {
                return "category" === t.type && 0 === y(t.getLabelModel())
            }
        },
        "8d63": function(t, e, i) {
            var n = i("df91"),
                r = i("102c"),
                a = Math.min,
                o = Math.max,
                s = Math.sin,
                l = Math.cos,
                u = 2 * Math.PI,
                c = n.create(),
                h = n.create(),
                d = n.create();
            var f = [],
                p = [];
            e.fromPoints = function(t, e, i) {
                if (0 !== t.length) {
                    var n, r = t[0],
                        s = r[0],
                        l = r[0],
                        u = r[1],
                        c = r[1];
                    for (n = 1; n < t.length; n++) r = t[n], s = a(s, r[0]), l = o(l, r[0]), u = a(u, r[1]), c = o(c, r[1]);
                    e[0] = s, e[1] = u, i[0] = l, i[1] = c
                }
            }, e.fromLine = function(t, e, i, n, r, s) {
                r[0] = a(t, i), r[1] = a(e, n), s[0] = o(t, i), s[1] = o(e, n)
            }, e.fromCubic = function(t, e, i, n, s, l, u, c, h, d) {
                var g, v = r.cubicExtrema,
                    m = r.cubicAt,
                    y = v(t, i, s, u, f);
                for (h[0] = 1 / 0, h[1] = 1 / 0, d[0] = -1 / 0, d[1] = -1 / 0, g = 0; g < y; g++) {
                    var x = m(t, i, s, u, f[g]);
                    h[0] = a(x, h[0]), d[0] = o(x, d[0])
                }
                for (y = v(e, n, l, c, p), g = 0; g < y; g++) {
                    var _ = m(e, n, l, c, p[g]);
                    h[1] = a(_, h[1]), d[1] = o(_, d[1])
                }
                h[0] = a(t, h[0]), d[0] = o(t, d[0]), h[0] = a(u, h[0]), d[0] = o(u, d[0]), h[1] = a(e, h[1]), d[1] = o(e, d[1]), h[1] = a(c, h[1]), d[1] = o(c, d[1])
            }, e.fromQuadratic = function(t, e, i, n, s, l, u, c) {
                var h = r.quadraticExtremum,
                    d = r.quadraticAt,
                    f = o(a(h(t, i, s), 1), 0),
                    p = o(a(h(e, n, l), 1), 0),
                    g = d(t, i, s, f),
                    v = d(e, n, l, p);
                u[0] = a(t, s, g), u[1] = a(e, l, v), c[0] = o(t, s, g), c[1] = o(e, l, v)
            }, e.fromArc = function(t, e, i, r, a, o, f, p, g) {
                var v = n.min,
                    m = n.max,
                    y = Math.abs(a - o);
                if (y % u < 1e-4 && y > 1e-4) return p[0] = t - i, p[1] = e - r, g[0] = t + i, void(g[1] = e + r);
                if (c[0] = l(a) * i + t, c[1] = s(a) * r + e, h[0] = l(o) * i + t, h[1] = s(o) * r + e, v(p, c, h), m(g, c, h), (a %= u) < 0 && (a += u), (o %= u) < 0 && (o += u), a > o && !f ? o += u : a < o && f && (a += u), f) {
                    var x = o;
                    o = a, a = x
                }
                for (var _ = 0; _ < o; _ += Math.PI / 2) _ > a && (d[0] = l(_) * i + t, d[1] = s(_) * r + e, v(p, d, p), m(g, d, g))
            }
        },
        "8da8": function(t, e, i) {
            var n = i("3caf"),
                r = i("8503").subPixelOptimizeLine,
                a = {},
                o = n.extend({
                    type: "line",
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0,
                        percent: 1
                    },
                    style: {
                        stroke: "#000",
                        fill: null
                    },
                    buildPath: function(t, e) {
                        var i, n, o, s;
                        this.subPixelOptimize ? (r(a, e, this.style), i = a.x1, n = a.y1, o = a.x2, s = a.y2) : (i = e.x1, n = e.y1, o = e.x2, s = e.y2);
                        var l = e.percent;
                        0 !== l && (t.moveTo(i, n), l < 1 && (o = i * (1 - l) + o * l, s = n * (1 - l) + s * l), t.lineTo(o, s))
                    },
                    pointAt: function(t) {
                        var e = this.shape;
                        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
                    }
                });
            t.exports = o
        },
        "8dab": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = "___EC__COMPONENT__CONTAINER___";

            function a(t) {
                var e = {
                    main: "",
                    sub: ""
                };
                return t && (t = t.split("."), e.main = t[0] || "", e.sub = t[1] || ""), e
            }

            function o(t) {
                n.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
            }
            var s = 0;

            function l(t, e) {
                var i = n.slice(arguments, 2);
                return this.superClass.prototype[e].apply(t, i)
            }

            function u(t, e, i) {
                return this.superClass.prototype[e].apply(t, i)
            }
            e.parseClassType = a, e.enableClassExtend = function(t, e) {
                t.$constructor = t, t.extend = function(t) {
                    var e = this,
                        i = function() {
                            t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                        };
                    return n.extend(i.prototype, t), i.extend = this.extend, i.superCall = l, i.superApply = u, n.inherits(i, this), i.superClass = e, i
                }
            }, e.enableClassCheck = function(t) {
                var e = ["__\0is_clz", s++, Math.random().toFixed(3)].join("_");
                t.prototype[e] = !0, t.isInstance = function(t) {
                    return !(!t || !t[e])
                }
            }, e.enableClassManagement = function(t, e) {
                e = e || {};
                var i = {};
                if (t.registerClass = function(t, e) {
                        if (e)
                            if (o(e), (e = a(e)).sub) {
                                if (e.sub !== r)(function(t) {
                                    var e = i[t.main];
                                    return e && e[r] || ((e = i[t.main] = {})[r] = !0), e
                                }(e))[e.sub] = t
                            } else i[e.main] = t;
                        return t
                    }, t.getClass = function(t, e, n) {
                        var a = i[t];
                        if (a && a[r] && (a = e ? a[e] : null), n && !a) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                        return a
                    }, t.getClassesByMainType = function(t) {
                        t = a(t);
                        var e = [],
                            o = i[t.main];
                        return o && o[r] ? n.each(o, (function(t, i) {
                            i !== r && e.push(t)
                        })) : e.push(o), e
                    }, t.hasClass = function(t) {
                        return t = a(t), !!i[t.main]
                    }, t.getAllClassMainTypes = function() {
                        var t = [];
                        return n.each(i, (function(e, i) {
                            t.push(i)
                        })), t
                    }, t.hasSubTypes = function(t) {
                        t = a(t);
                        var e = i[t.main];
                        return e && e[r]
                    }, t.parseClassType = a, e.registerWhenExtend) {
                    var s = t.extend;
                    s && (t.extend = function(e) {
                        var i = s.call(this, e);
                        return t.registerClass(i, e.type)
                    })
                }
                return t
            }, e.setReadOnly = function(t, e) {}
        },
        "8dc2": function(t, e, i) {
            var n = i("3caf"),
                r = i("8cc0"),
                a = i("8503").subPixelOptimizeRect,
                o = {},
                s = n.extend({
                    type: "rect",
                    shape: {
                        r: 0,
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    buildPath: function(t, e) {
                        var i, n, s, l;
                        this.subPixelOptimize ? (a(o, e, this.style), i = o.x, n = o.y, s = o.width, l = o.height, o.r = e.r, e = o) : (i = e.x, n = e.y, s = e.width, l = e.height), e.r ? r.buildPath(t, e) : t.rect(i, n, s, l), t.closePath()
                    }
                });
            t.exports = s
        },
        "8eb5": function(t, e, i) {
            var n = i("df91"),
                r = n.min,
                a = n.max,
                o = n.scale,
                s = n.distance,
                l = n.add,
                u = n.clone,
                c = n.sub;
            t.exports = function(t, e, i, n) {
                var h, d, f, p, g = [],
                    v = [],
                    m = [],
                    y = [];
                if (n) {
                    f = [1 / 0, 1 / 0], p = [-1 / 0, -1 / 0];
                    for (var x = 0, _ = t.length; x < _; x++) r(f, f, t[x]), a(p, p, t[x]);
                    r(f, f, n[0]), a(p, p, n[1])
                }
                for (x = 0, _ = t.length; x < _; x++) {
                    var b = t[x];
                    if (i) h = t[x ? x - 1 : _ - 1], d = t[(x + 1) % _];
                    else {
                        if (0 === x || x === _ - 1) {
                            g.push(u(t[x]));
                            continue
                        }
                        h = t[x - 1], d = t[x + 1]
                    }
                    c(v, d, h), o(v, v, e);
                    var w = s(b, h),
                        S = s(b, d),
                        C = w + S;
                    0 !== C && (w /= C, S /= C), o(m, v, -w), o(y, v, S);
                    var M = l([], b, m),
                        T = l([], b, y);
                    n && (a(M, M, f), r(M, M, p), a(T, T, f), r(T, T, p)), g.push(M), g.push(T)
                }
                return i && g.push(g.shift()), g
            }
        },
        "8eec": function(t, e, i) {
            var n = i("76be"),
                r = [
                    ["shadowBlur", 0],
                    ["shadowColor", "#000"],
                    ["shadowOffsetX", 0],
                    ["shadowOffsetY", 0]
                ];
            t.exports = function(t) {
                return n.browser.ie && n.browser.version >= 11 ? function() {
                    var e, i = this.__clipPaths,
                        n = this.style;
                    if (i)
                        for (var a = 0; a < i.length; a++) {
                            var o = i[a],
                                s = o && o.shape,
                                l = o && o.type;
                            if (s && ("sector" === l && s.startAngle === s.endAngle || "rect" === l && (!s.width || !s.height))) {
                                for (var u = 0; u < r.length; u++) r[u][2] = n[r[u][0]], n[r[u][0]] = r[u][1];
                                e = !0;
                                break
                            }
                        }
                    if (t.apply(this, arguments), e)
                        for (u = 0; u < r.length; u++) n[r[u][0]] = r[u][2]
                } : t
            }
        },
        "901f": function(t, e, i) {
            var n = i("b2de");
            var r = function(t) {
                null != t && n.extend(this, t), this.otherDims = {}
            };
            t.exports = r
        },
        9554: function(t, e, i) {
            var n = i("0127").makeInner;
            t.exports = function() {
                var t = n();
                return function(e) {
                    var i = t(e),
                        n = e.pipelineContext,
                        r = i.large,
                        a = i.progressiveRender,
                        o = i.large = n.large,
                        s = i.progressiveRender = n.progressiveRender;
                    return !!(r ^ o || a ^ s) && "reset"
                }
            }
        },
        "95ac": function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = i("e62d0"),
                a = i("bc82"),
                o = i("fa21"),
                s = i("31c0"),
                l = s.defaultDimValueGetters,
                u = s.DefaultDataProvider,
                c = i("25cc").summarizeDimensions,
                h = i("901f"),
                d = n.isObject,
                f = "undefined",
                p = {
                    float: typeof Float64Array === f ? Array : Float64Array,
                    int: typeof Int32Array === f ? Array : Int32Array,
                    ordinal: Array,
                    number: Array,
                    time: Array
                },
                g = typeof Uint32Array === f ? Array : Uint32Array,
                v = typeof Int32Array === f ? Array : Int32Array,
                m = typeof Uint16Array === f ? Array : Uint16Array;

            function y(t) {
                return t._rawCount > 65535 ? g : m
            }

            function x(t) {
                var e = t.constructor;
                return e === Array ? t.slice() : new e(t)
            }
            var _ = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
                b = ["_extent", "_approximateExtent", "_rawExtent"];

            function w(t, e) {
                n.each(_.concat(e.__wrappedMethods || []), (function(i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                })), t.__wrappedMethods = e.__wrappedMethods, n.each(b, (function(i) {
                    t[i] = n.clone(e[i])
                })), t._calculationInfo = n.extend(e._calculationInfo)
            }
            var S = function(t, e) {
                    t = t || ["x", "y"];
                    for (var i = {}, r = [], a = {}, o = 0; o < t.length; o++) {
                        var s = t[o];
                        n.isString(s) ? s = new h({
                            name: s
                        }) : s instanceof h || (s = new h(s));
                        var l = s.name;
                        s.type = s.type || "float", s.coordDim || (s.coordDim = l, s.coordDimIndex = 0), s.otherDims = s.otherDims || {}, r.push(l), i[l] = s, s.index = o, s.createInvertedIndices && (a[l] = [])
                    }
                    this.dimensions = r, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = c(this), this._invertedIndicesMap = a, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput
                },
                C = S.prototype;

            function M(t, e, i, n, r) {
                var a = p[e.type],
                    o = n - 1,
                    s = e.name,
                    l = t[s][o];
                if (l && l.length < i) {
                    for (var u = new a(Math.min(r - o * i, i)), c = 0; c < l.length; c++) u[c] = l[c];
                    t[s][o] = u
                }
                for (var h = n * i; h < r; h += i) t[s].push(new a(Math.min(r - h, i)))
            }

            function T(t) {
                var e = t._invertedIndicesMap;
                n.each(e, (function(i, n) {
                    var r = t._dimensionInfos[n].ordinalMeta;
                    if (r) {
                        i = e[n] = new v(r.categories.length);
                        for (var a = 0; a < i.length; a++) i[a] = -1;
                        for (a = 0; a < t._count; a++) i[t.get(n, a)] = a
                    }
                }))
            }

            function I(t, e, i) {
                var n;
                if (null != e) {
                    var r = t._chunkSize,
                        a = Math.floor(i / r),
                        o = i % r,
                        s = t.dimensions[e],
                        l = t._storage[s][a];
                    if (l) {
                        n = l[o];
                        var u = t._dimensionInfos[s].ordinalMeta;
                        u && u.categories.length && (n = u.categories[n])
                    }
                }
                return n
            }

            function A(t) {
                return t
            }

            function D(t) {
                return t < this._count && t >= 0 ? this._indices[t] : -1
            }

            function k(t, e) {
                var i = t._idList[e];
                return null == i && (i = I(t, t._idDimIdx, e)), null == i && (i = "e\0\0" + e), i
            }

            function P(t) {
                return n.isArray(t) || (t = [t]), t
            }

            function O(t, e) {
                var i = t.dimensions,
                    r = new S(n.map(i, t.getDimensionInfo, t), t.hostModel);
                w(r, t);
                for (var a = r._storage = {}, o = t._storage, s = 0; s < i.length; s++) {
                    var l = i[s];
                    o[l] && (n.indexOf(e, l) >= 0 ? (a[l] = L(o[l]), r._rawExtent[l] = [1 / 0, -1 / 0], r._extent[l] = null) : a[l] = o[l])
                }
                return r
            }

            function L(t) {
                for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = x(t[i]);
                return e
            }
            C.type = "list", C.hasItemOption = !0, C.getDimension = function(t) {
                return "number" != typeof t && (isNaN(t) || this._dimensionInfos.hasOwnProperty(t)) || (t = this.dimensions[t]), t
            }, C.getDimensionInfo = function(t) {
                return this._dimensionInfos[this.getDimension(t)]
            }, C.getDimensionsOnCoord = function() {
                return this._dimensionsSummary.dataDimsOnCoord.slice()
            }, C.mapDimension = function(t, e) {
                var i = this._dimensionsSummary;
                if (null == e) return i.encodeFirstDimNotExtra[t];
                var n = i.encode[t];
                return !0 === e ? (n || []).slice() : n && n[e]
            }, C.initData = function(t, e, i) {
                (o.isInstance(t) || n.isArrayLike(t)) && (t = new u(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = l[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._dimValueGetterArrayRows = l.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
            }, C.getProvider = function() {
                return this._rawData
            }, C.appendData = function(t) {
                var e = this._rawData,
                    i = this.count();
                e.appendData(t);
                var n = e.count();
                e.persistent || (n += i), this._initDataFromProvider(i, n)
            }, C.appendValues = function(t, e) {
                for (var i = this._chunkSize, n = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, c = 0; c < a; c++) {
                    var h = r[c];
                    o[h] || (o[h] = [1 / 0, -1 / 0]), n[h] || (n[h] = []), M(n, this._dimensionInfos[h], i, u, l), this._chunkCount = n[h].length
                }
                for (var d = new Array(a), f = s; f < l; f++) {
                    for (var p = f - s, g = Math.floor(f / i), v = f % i, m = 0; m < a; m++) {
                        h = r[m];
                        var y = this._dimValueGetterArrayRows(t[p] || d, h, p, m);
                        n[h][g][v] = y;
                        var x = o[h];
                        y < x[0] && (x[0] = y), y > x[1] && (x[1] = y)
                    }
                    e && (this._nameList[f] = e[p])
                }
                this._rawCount = this._count = l, this._extent = {}, T(this)
            }, C._initDataFromProvider = function(t, e) {
                if (!(t >= e)) {
                    for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, c = this._idList, h = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; p < s; p++) {
                        var g = o[p];
                        h[g] || (h[g] = [1 / 0, -1 / 0]);
                        var v = l[g];
                        0 === v.otherDims.itemName && (i = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), M(a, v, n, f, e), this._chunkCount = a[g].length
                    }
                    for (var m = new Array(s), y = t; y < e; y++) {
                        m = r.getItem(y, m);
                        for (var x = Math.floor(y / n), _ = y % n, b = 0; b < s; b++) {
                            var w = a[g = o[b]][x],
                                S = this._dimValueGetter(m, g, y, b);
                            w[_] = S;
                            var C = h[g];
                            S < C[0] && (C[0] = S), S > C[1] && (C[1] = S)
                        }
                        if (!r.pure) {
                            var I = u[y];
                            if (m && null == I)
                                if (null != m.name) u[y] = I = m.name;
                                else if (null != i) {
                                var A = o[i],
                                    D = a[A][x];
                                if (D) {
                                    I = D[_];
                                    var k = l[A].ordinalMeta;
                                    k && k.categories.length && (I = k.categories[I])
                                }
                            }
                            var P = null == m ? null : m.id;
                            null == P && null != I && (d[I] = d[I] || 0, P = I, d[I] > 0 && (P += "__ec__" + d[I]), d[I]++), null != P && (c[y] = P)
                        }
                    }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, T(this)
                }
            }, C.count = function() {
                return this._count
            }, C.getIndices = function() {
                var t = this._indices;
                if (t) {
                    var e = t.constructor,
                        i = this._count;
                    if (e === Array) {
                        r = new e(i);
                        for (var n = 0; n < i; n++) r[n] = t[n]
                    } else r = new e(t.buffer, 0, i)
                } else {
                    var r = new(e = y(this))(this.count());
                    for (n = 0; n < r.length; n++) r[n] = n
                }
                return r
            }, C.get = function(t, e) {
                if (!(e >= 0 && e < this._count)) return NaN;
                var i = this._storage;
                if (!i[t]) return NaN;
                e = this.getRawIndex(e);
                var n = Math.floor(e / this._chunkSize),
                    r = e % this._chunkSize;
                return i[t][n][r]
            }, C.getByRawIndex = function(t, e) {
                if (!(e >= 0 && e < this._rawCount)) return NaN;
                var i = this._storage[t];
                if (!i) return NaN;
                var n = Math.floor(e / this._chunkSize),
                    r = e % this._chunkSize;
                return i[n][r]
            }, C._getFast = function(t, e) {
                var i = Math.floor(e / this._chunkSize),
                    n = e % this._chunkSize;
                return this._storage[t][i][n]
            }, C.getValues = function(t, e) {
                var i = [];
                n.isArray(t) || (e = t, t = this.dimensions);
                for (var r = 0, a = t.length; r < a; r++) i.push(this.get(t[r], e));
                return i
            }, C.hasValue = function(t) {
                for (var e = this._dimensionsSummary.dataDimsOnCoord, i = 0, n = e.length; i < n; i++)
                    if (isNaN(this.get(e[i], t))) return !1;
                return !0
            }, C.getDataExtent = function(t) {
                t = this.getDimension(t);
                var e = [1 / 0, -1 / 0];
                if (!this._storage[t]) return e;
                var i, n = this.count();
                if (!this._indices) return this._rawExtent[t].slice();
                if (i = this._extent[t]) return i.slice();
                for (var r = (i = e)[0], a = i[1], o = 0; o < n; o++) {
                    var s = this._getFast(t, this.getRawIndex(o));
                    s < r && (r = s), s > a && (a = s)
                }
                return i = [r, a], this._extent[t] = i, i
            }, C.getApproximateExtent = function(t) {
                return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
            }, C.setApproximateExtent = function(t, e) {
                e = this.getDimension(e), this._approximateExtent[e] = t.slice()
            }, C.getCalculationInfo = function(t) {
                return this._calculationInfo[t]
            }, C.setCalculationInfo = function(t, e) {
                d(t) ? n.extend(this._calculationInfo, t) : this._calculationInfo[t] = e
            }, C.getSum = function(t) {
                var e = 0;
                if (this._storage[t])
                    for (var i = 0, n = this.count(); i < n; i++) {
                        var r = this.get(t, i);
                        isNaN(r) || (e += r)
                    }
                return e
            }, C.getMedian = function(t) {
                var e = [];
                this.each(t, (function(t, i) {
                    isNaN(t) || e.push(t)
                }));
                var i = [].concat(e).sort((function(t, e) {
                        return t - e
                    })),
                    n = this.count();
                return 0 === n ? 0 : n % 2 == 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2
            }, C.rawIndexOf = function(t, e) {
                var i = (t && this._invertedIndicesMap[t])[e];
                return null == i || isNaN(i) ? -1 : i
            }, C.indexOfName = function(t) {
                for (var e = 0, i = this.count(); e < i; e++)
                    if (this.getName(e) === t) return e;
                return -1
            }, C.indexOfRawIndex = function(t) {
                if (t >= this._rawCount || t < 0) return -1;
                if (!this._indices) return t;
                var e = this._indices,
                    i = e[t];
                if (null != i && i < this._count && i === t) return t;
                for (var n = 0, r = this._count - 1; n <= r;) {
                    var a = (n + r) / 2 | 0;
                    if (e[a] < t) n = a + 1;
                    else {
                        if (!(e[a] > t)) return a;
                        r = a - 1
                    }
                }
                return -1
            }, C.indicesOfNearest = function(t, e, i) {
                var n = [];
                if (!this._storage[t]) return n;
                null == i && (i = 1 / 0);
                for (var r = 1 / 0, a = -1, o = 0, s = 0, l = this.count(); s < l; s++) {
                    var u = e - this.get(t, s),
                        c = Math.abs(u);
                    c <= i && ((c < r || c === r && u >= 0 && a < 0) && (r = c, a = u, o = 0), u === a && (n[o++] = s))
                }
                return n.length = o, n
            }, C.getRawIndex = A, C.getRawDataItem = function(t) {
                if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
                for (var e = [], i = 0; i < this.dimensions.length; i++) {
                    var n = this.dimensions[i];
                    e.push(this.get(n, t))
                }
                return e
            }, C.getName = function(t) {
                var e = this.getRawIndex(t);
                return this._nameList[e] || I(this, this._nameDimIdx, e) || ""
            }, C.getId = function(t) {
                return k(this, this.getRawIndex(t))
            }, C.each = function(t, e, i, r) {
                "use strict";
                if (this._count) {
                    "function" == typeof t && (r = i, i = e, e = t, t = []), i = i || r || this;
                    for (var a = (t = n.map(P(t), this.getDimension, this)).length, o = 0; o < this.count(); o++) switch (a) {
                        case 0:
                            e.call(i, o);
                            break;
                        case 1:
                            e.call(i, this.get(t[0], o), o);
                            break;
                        case 2:
                            e.call(i, this.get(t[0], o), this.get(t[1], o), o);
                            break;
                        default:
                            for (var s = 0, l = []; s < a; s++) l[s] = this.get(t[s], o);
                            l[s] = o, e.apply(i, l)
                    }
                }
            }, C.filterSelf = function(t, e, i, r) {
                "use strict";
                if (this._count) {
                    "function" == typeof t && (r = i, i = e, e = t, t = []), i = i || r || this, t = n.map(P(t), this.getDimension, this);
                    for (var a = this.count(), o = new(y(this))(a), s = [], l = t.length, u = 0, c = t[0], h = 0; h < a; h++) {
                        var d, f = this.getRawIndex(h);
                        if (0 === l) d = e.call(i, h);
                        else if (1 === l) {
                            var p = this._getFast(c, f);
                            d = e.call(i, p, h)
                        } else {
                            for (var g = 0; g < l; g++) s[g] = this._getFast(c, f);
                            s[g] = h, d = e.apply(i, s)
                        }
                        d && (o[u++] = f)
                    }
                    return u < a && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? D : A, this
                }
            }, C.selectRange = function(t) {
                "use strict";
                if (this._count) {
                    var e = [];
                    for (var i in t) t.hasOwnProperty(i) && e.push(i);
                    var n = e.length;
                    if (n) {
                        var r = this.count(),
                            a = new(y(this))(r),
                            o = 0,
                            s = e[0],
                            l = t[s][0],
                            u = t[s][1],
                            c = !1;
                        if (!this._indices) {
                            var h = 0;
                            if (1 === n) {
                                for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++)
                                    for (var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; v < g; v++) {
                                        var m = p[v];
                                        (m >= l && m <= u || isNaN(m)) && (a[o++] = h), h++
                                    }
                                c = !0
                            } else if (2 === n) {
                                d = this._storage[s];
                                var x = this._storage[e[1]],
                                    _ = t[e[1]][0],
                                    b = t[e[1]][1];
                                for (f = 0; f < this._chunkCount; f++) {
                                    p = d[f];
                                    var w = x[f];
                                    for (g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; v < g; v++) {
                                        m = p[v];
                                        var S = w[v];
                                        (m >= l && m <= u || isNaN(m)) && (S >= _ && S <= b || isNaN(S)) && (a[o++] = h), h++
                                    }
                                }
                                c = !0
                            }
                        }
                        if (!c)
                            if (1 === n)
                                for (v = 0; v < r; v++) {
                                    var C = this.getRawIndex(v);
                                    ((m = this._getFast(s, C)) >= l && m <= u || isNaN(m)) && (a[o++] = C)
                                } else
                                    for (v = 0; v < r; v++) {
                                        var M = !0;
                                        for (C = this.getRawIndex(v), f = 0; f < n; f++) {
                                            var T = e[f];
                                            ((m = this._getFast(i, C)) < t[T][0] || m > t[T][1]) && (M = !1)
                                        }
                                        M && (a[o++] = this.getRawIndex(v))
                                    }
                        return o < r && (this._indices = a), this._count = o, this._extent = {}, this.getRawIndex = this._indices ? D : A, this
                    }
                }
            }, C.mapArray = function(t, e, i, n) {
                "use strict";
                "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
                var r = [];
                return this.each(t, (function() {
                    r.push(e && e.apply(this, arguments))
                }), i), r
            }, C.map = function(t, e, i, r) {
                "use strict";
                i = i || r || this;
                var a = O(this, t = n.map(P(t), this.getDimension, this));
                a._indices = this._indices, a.getRawIndex = a._indices ? D : A;
                for (var o = a._storage, s = [], l = this._chunkSize, u = t.length, c = this.count(), h = [], d = a._rawExtent, f = 0; f < c; f++) {
                    for (var p = 0; p < u; p++) h[p] = this.get(t[p], f);
                    h[u] = f;
                    var g = e && e.apply(i, h);
                    if (null != g) {
                        "object" != typeof g && (s[0] = g, g = s);
                        for (var v = this.getRawIndex(f), m = Math.floor(v / l), y = v % l, x = 0; x < g.length; x++) {
                            var _ = t[x],
                                b = g[x],
                                w = d[_],
                                S = o[_];
                            S && (S[m][y] = b), b < w[0] && (w[0] = b), b > w[1] && (w[1] = b)
                        }
                    }
                }
                return a
            }, C.downSample = function(t, e, i, n) {
                for (var r = O(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), c = this._chunkSize, h = r._rawExtent[t], d = new(y(this))(u), f = 0, p = 0; p < u; p += s) {
                    s > u - p && (s = u - p, o.length = s);
                    for (var g = 0; g < s; g++) {
                        var v = this.getRawIndex(p + g),
                            m = Math.floor(v / c),
                            x = v % c;
                        o[g] = l[m][x]
                    }
                    var _ = i(o),
                        b = this.getRawIndex(Math.min(p + n(o, _) || 0, u - 1)),
                        w = b % c;
                    l[Math.floor(b / c)][w] = _, _ < h[0] && (h[0] = _), _ > h[1] && (h[1] = _), d[f++] = b
                }
                return r._count = f, r._indices = d, r.getRawIndex = D, r
            }, C.getItemModel = function(t) {
                var e = this.hostModel;
                return new r(this.getRawDataItem(t), e, e && e.ecModel)
            }, C.diff = function(t) {
                var e = this;
                return new a(t ? t.getIndices() : [], this.getIndices(), (function(e) {
                    return k(t, e)
                }), (function(t) {
                    return k(e, t)
                }))
            }, C.getVisual = function(t) {
                var e = this._visual;
                return e && e[t]
            }, C.setVisual = function(t, e) {
                if (d(t))
                    for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
                else this._visual = this._visual || {}, this._visual[t] = e
            }, C.setLayout = function(t, e) {
                if (d(t))
                    for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]);
                else this._layout[t] = e
            }, C.getLayout = function(t) {
                return this._layout[t]
            }, C.getItemLayout = function(t) {
                return this._itemLayouts[t]
            }, C.setItemLayout = function(t, e, i) {
                this._itemLayouts[t] = i ? n.extend(this._itemLayouts[t] || {}, e) : e
            }, C.clearItemLayouts = function() {
                this._itemLayouts.length = 0
            }, C.getItemVisual = function(t, e, i) {
                var n = this._itemVisuals[t],
                    r = n && n[e];
                return null != r || i ? r : this.getVisual(e)
            }, C.setItemVisual = function(t, e, i) {
                var n = this._itemVisuals[t] || {},
                    r = this.hasItemVisual;
                if (this._itemVisuals[t] = n, d(e))
                    for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a], r[a] = !0);
                else n[e] = i, r[e] = !0
            }, C.clearAllVisual = function() {
                this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
            };
            var E = function(t) {
                t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
            };
            C.setItemGraphicEl = function(t, e) {
                var i = this.hostModel;
                e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(E, e)), this._graphicEls[t] = e
            }, C.getItemGraphicEl = function(t) {
                return this._graphicEls[t]
            }, C.eachItemGraphicEl = function(t, e) {
                n.each(this._graphicEls, (function(i, n) {
                    i && t && t.call(e, i, n)
                }))
            }, C.cloneShallow = function(t) {
                if (!t) {
                    var e = n.map(this.dimensions, this.getDimensionInfo, this);
                    t = new S(e, this.hostModel)
                }
                if (t._storage = this._storage, w(t, this), this._indices) {
                    var i = this._indices.constructor;
                    t._indices = new i(this._indices)
                } else t._indices = null;
                return t.getRawIndex = t._indices ? D : A, t
            }, C.wrapMethod = function(t, e) {
                var i = this[t];
                "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
                    var t = i.apply(this, arguments);
                    return e.apply(this, [t].concat(n.slice(arguments)))
                })
            }, C.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], C.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
            var R = S;
            t.exports = R
        },
        "96eb": function(t, e, i) {
            var n = i("1f2e").devicePixelRatio,
                r = i("b2de"),
                a = i("5810"),
                o = i("a16b"),
                s = i("2d19"),
                l = i("fd9f"),
                u = i("74a8"),
                c = i("3b4b"),
                h = i("76be"),
                d = 1e5,
                f = 314159;

            function p(t) {
                return parseInt(t, 10)
            }
            var g = new o(0, 0, 0, 0),
                v = new o(0, 0, 0, 0);
            var m = function(t, e, i) {
                this.type = "canvas";
                var a = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = i = r.extend({}, i || {}), this.dpr = i.devicePixelRatio || n, this._singleCanvas = a, this.root = t;
                var o = t.style;
                o && (o["-webkit-tap-highlight-color"] = "transparent", o["-webkit-user-select"] = o["user-select"] = o["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
                var s = this._zlevelList = [],
                    u = this._layers = {};
                if (this._layerConfig = {}, this._needsManuallyCompositing = !1, a) {
                    var c = t.width,
                        h = t.height;
                    null != i.width && (c = i.width), null != i.height && (h = i.height), this.dpr = i.devicePixelRatio || 1, t.width = c * this.dpr, t.height = h * this.dpr, this._width = c, this._height = h;
                    var d = new l(t, this, this.dpr);
                    d.__builtin__ = !0, d.initContext(), u[f] = d, d.zlevel = f, s.push(f), this._domRoot = t
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var p = this._domRoot = function(t, e) {
                        var i = document.createElement("div");
                        return i.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
                    }(this._width, this._height);
                    t.appendChild(p)
                }
                this._hoverlayer = null, this._hoverElements = []
            };
            m.prototype = {
                constructor: m,
                getType: function() {
                    return "canvas"
                },
                isSingleCanvas: function() {
                    return this._singleCanvas
                },
                getViewportRoot: function() {
                    return this._domRoot
                },
                getViewportRootOffset: function() {
                    var t = this.getViewportRoot();
                    if (t) return {
                        offsetLeft: t.offsetLeft || 0,
                        offsetTop: t.offsetTop || 0
                    }
                },
                refresh: function(t) {
                    var e = this.storage.getDisplayList(!0),
                        i = this._zlevelList;
                    this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n],
                            a = this._layers[r];
                        if (!a.__builtin__ && a.refresh) {
                            var o = 0 === n ? this._backgroundColor : null;
                            a.refresh(o)
                        }
                    }
                    return this.refreshHover(), this
                },
                addHover: function(t, e) {
                    if (!t.__hoverMir) {
                        var i = new t.constructor({
                            style: t.style,
                            shape: t.shape,
                            z: t.z,
                            z2: t.z2,
                            silent: t.silent
                        });
                        return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i
                    }
                },
                removeHover: function(t) {
                    var e = t.__hoverMir,
                        i = this._hoverElements,
                        n = r.indexOf(i, e);
                    n >= 0 && i.splice(n, 1), t.__hoverMir = null
                },
                clearHover: function(t) {
                    for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                        var n = e[i].__from;
                        n && (n.__hoverMir = null)
                    }
                    e.length = 0
                },
                refreshHover: function() {
                    var t = this._hoverElements,
                        e = t.length,
                        i = this._hoverlayer;
                    if (i && i.clear(), e) {
                        s(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(d));
                        var n = {};
                        i.ctx.save();
                        for (var r = 0; r < e;) {
                            var a = t[r],
                                o = a.__from;
                            o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                        }
                        i.ctx.restore()
                    }
                },
                getHoverLayer: function() {
                    return this.getLayer(d)
                },
                _paintList: function(t, e, i) {
                    if (this._redrawId === i) {
                        e = e || !1, this._updateLayerStatus(t);
                        var n = this._doPaintList(t, e);
                        if (this._needsManuallyCompositing && this._compositeManually(), !n) {
                            var r = this;
                            u((function() {
                                r._paintList(t, e, i)
                            }))
                        }
                    }
                },
                _compositeManually: function() {
                    var t = this.getLayer(f).ctx,
                        e = this._domRoot.width,
                        i = this._domRoot.height;
                    t.clearRect(0, 0, e, i), this.eachBuiltinLayer((function(n) {
                        n.virtual && t.drawImage(n.dom, 0, 0, e, i)
                    }))
                },
                _doPaintList: function(t, e) {
                    for (var i = [], n = 0; n < this._zlevelList.length; n++) {
                        var a = this._zlevelList[n],
                            o = this._layers[a];
                        o.__builtin__ && o !== this._hoverlayer && (o.__dirty || e) && i.push(o)
                    }
                    for (var s = !0, l = 0; l < i.length; l++) {
                        var u = (o = i[l]).ctx,
                            c = {};
                        u.save();
                        var d = e ? o.__startIndex : o.__drawIndex,
                            f = !e && o.incremental && Date.now,
                            p = f && Date.now(),
                            g = o.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                        if (o.__startIndex === o.__endIndex) o.clear(!1, g);
                        else if (d === o.__startIndex) {
                            var v = t[d];
                            v.incremental && v.notClear && !e || o.clear(!1, g)
                        } - 1 === d && (d = o.__startIndex);
                        for (var m = d; m < o.__endIndex; m++) {
                            var y = t[m];
                            if (this._doPaintEl(y, o, e, c), y.__dirty = y.__dirtyText = !1, f)
                                if (Date.now() - p > 15) break
                        }
                        o.__drawIndex = m, o.__drawIndex < o.__endIndex && (s = !1), c.prevElClipPaths && u.restore(), u.restore()
                    }
                    return h.wxa && r.each(this._layers, (function(t) {
                        t && t.ctx && t.ctx.draw && t.ctx.draw()
                    })), s
                },
                _doPaintEl: function(t, e, i, n) {
                    var r = e.ctx,
                        a = t.transform;
                    if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || ! function(t, e, i) {
                            return g.copy(t.getBoundingRect()), t.transform && g.applyTransform(t.transform), v.width = e, v.height = i, !g.intersect(v)
                        }(t, this._width, this._height))) {
                        var o = t.__clipPaths,
                            s = n.prevElClipPaths;
                        s && ! function(t, e) {
                            if (t === e) return !1;
                            if (!t || !e || t.length !== e.length) return !0;
                            for (var i = 0; i < t.length; i++)
                                if (t[i] !== e[i]) return !0;
                            return !1
                        }(o, s) || (s && (r.restore(), n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), function(t, e) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e)
                            }
                        }(o, r), n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
                    }
                },
                getLayer: function(t, e) {
                    this._singleCanvas && !this._needsManuallyCompositing && (t = f);
                    var i = this._layers[t];
                    return i || ((i = new l("zr_" + t, this, this.dpr)).zlevel = t, i.__builtin__ = !0, this._layerConfig[t] && r.merge(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i
                },
                insertLayer: function(t, e) {
                    var i = this._layers,
                        n = this._zlevelList,
                        r = n.length,
                        o = null,
                        s = -1,
                        l = this._domRoot;
                    if (i[t]) a("ZLevel " + t + " has been used already");
                    else if (function(t) {
                            return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
                        }(e)) {
                        if (r > 0 && t > n[0]) {
                            for (s = 0; s < r - 1 && !(n[s] < t && n[s + 1] > t); s++);
                            o = i[n[s]]
                        }
                        if (n.splice(s + 1, 0, t), i[t] = e, !e.virtual)
                            if (o) {
                                var u = o.dom;
                                u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)
                            } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom)
                    } else a("Layer of zlevel " + t + " is not valid")
                },
                eachLayer: function(t, e) {
                    var i, n, r = this._zlevelList;
                    for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i)
                },
                eachBuiltinLayer: function(t, e) {
                    var i, n, r, a = this._zlevelList;
                    for (r = 0; r < a.length; r++) n = a[r], (i = this._layers[n]).__builtin__ && t.call(e, i, n)
                },
                eachOtherLayer: function(t, e) {
                    var i, n, r, a = this._zlevelList;
                    for (r = 0; r < a.length; r++) n = a[r], (i = this._layers[n]).__builtin__ || t.call(e, i, n)
                },
                getLayers: function() {
                    return this._layers
                },
                _updateLayerStatus: function(t) {
                    function e(t) {
                        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
                    }
                    if (this.eachBuiltinLayer((function(t, e) {
                            t.__dirty = t.__used = !1
                        })), this._singleCanvas)
                        for (var i = 1; i < t.length; i++) {
                            var n = t[i];
                            if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
                                this._needsManuallyCompositing = !0;
                                break
                            }
                        }
                    var r = null,
                        o = 0;
                    for (i = 0; i < t.length; i++) {
                        var s, l = (n = t[i]).zlevel;
                        n.incremental ? ((s = this.getLayer(l + .001, this._needsManuallyCompositing)).incremental = !0, o = 1) : s = this.getLayer(l + (o > 0 ? .01 : 0), this._needsManuallyCompositing), s.__builtin__ || a("ZLevel " + l + " has been used by unkown layer " + s.id), s !== r && (s.__used = !0, s.__startIndex !== i && (s.__dirty = !0), s.__startIndex = i, s.incremental ? s.__drawIndex = -1 : s.__drawIndex = i, e(i), r = s), n.__dirty && (s.__dirty = !0, s.incremental && s.__drawIndex < 0 && (s.__drawIndex = i))
                    }
                    e(i), this.eachBuiltinLayer((function(t, e) {
                        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
                    }))
                },
                clear: function() {
                    return this.eachBuiltinLayer(this._clearLayer), this
                },
                _clearLayer: function(t) {
                    t.clear()
                },
                setBackgroundColor: function(t) {
                    this._backgroundColor = t
                },
                configLayer: function(t, e) {
                    if (e) {
                        var i = this._layerConfig;
                        i[t] ? r.merge(i[t], e, !0) : i[t] = e;
                        for (var n = 0; n < this._zlevelList.length; n++) {
                            var a = this._zlevelList[n];
                            if (a === t || a === t + .01) {
                                var o = this._layers[a];
                                r.merge(o, i[t], !0)
                            }
                        }
                    }
                },
                delLayer: function(t) {
                    var e = this._layers,
                        i = this._zlevelList,
                        n = e[t];
                    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(r.indexOf(i, t), 1))
                },
                resize: function(t, e) {
                    if (this._domRoot.style) {
                        var i = this._domRoot;
                        i.style.display = "none";
                        var n = this._opts;
                        if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width !== t || e !== this._height) {
                            for (var a in i.style.width = t + "px", i.style.height = e + "px", this._layers) this._layers.hasOwnProperty(a) && this._layers[a].resize(t, e);
                            r.each(this._progressiveLayers, (function(i) {
                                i.resize(t, e)
                            })), this.refresh(!0)
                        }
                        this._width = t, this._height = e
                    } else {
                        if (null == t || null == e) return;
                        this._width = t, this._height = e, this.getLayer(f).resize(t, e)
                    }
                    return this
                },
                clearLayer: function(t) {
                    var e = this._layers[t];
                    e && e.clear()
                },
                dispose: function() {
                    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
                },
                getRenderedCanvas: function(t) {
                    if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[f].dom;
                    var e = new l("image", this, t.pixelRatio || this.dpr);
                    if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                        this.refresh();
                        var i = e.dom.width,
                            n = e.dom.height,
                            r = e.ctx;
                        this.eachLayer((function(t) {
                            t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                        }))
                    } else
                        for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                            var u = o[s];
                            this._doPaintEl(u, e, !0, a)
                        }
                    return e.dom
                },
                getWidth: function() {
                    return this._width
                },
                getHeight: function() {
                    return this._height
                },
                _getSize: function(t) {
                    var e = this._opts,
                        i = ["width", "height"][t],
                        n = ["clientWidth", "clientHeight"][t],
                        r = ["paddingLeft", "paddingTop"][t],
                        a = ["paddingRight", "paddingBottom"][t];
                    if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
                    var o = this.root,
                        s = document.defaultView.getComputedStyle(o);
                    return (o[n] || p(s[i]) || p(o.style[i])) - (p(s[r]) || 0) - (p(s[a]) || 0) | 0
                },
                pathToImage: function(t, e) {
                    e = e || this.dpr;
                    var i = document.createElement("canvas"),
                        n = i.getContext("2d"),
                        r = t.getBoundingRect(),
                        a = t.style,
                        o = a.shadowBlur * e,
                        s = a.shadowOffsetX * e,
                        l = a.shadowOffsetY * e,
                        u = a.hasStroke() ? a.lineWidth : 0,
                        h = Math.max(u / 2, -s + o),
                        d = Math.max(u / 2, s + o),
                        f = Math.max(u / 2, -l + o),
                        p = Math.max(u / 2, l + o),
                        g = r.width + h + d,
                        v = r.height + f + p;
                    i.width = g * e, i.height = v * e, n.scale(e, e), n.clearRect(0, 0, g, v), n.dpr = e;
                    var m = {
                        position: t.position,
                        rotation: t.rotation,
                        scale: t.scale
                    };
                    t.position = [h - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
                    var y = new c({
                        style: {
                            x: 0,
                            y: 0,
                            image: i
                        }
                    });
                    return null != m.position && (y.position = t.position = m.position), null != m.rotation && (y.rotation = t.rotation = m.rotation), null != m.scale && (y.scale = t.scale = m.scale), y
                }
            };
            var y = m;
            t.exports = y
        },
        9891: function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = i("8101"),
                a = i("6e36"),
                o = i("7f8a"),
                s = i("81e8"),
                l = i("0127"),
                u = i("8172"),
                c = u.Polyline,
                h = u.Polygon,
                d = i("45d9"),
                f = i("7635"),
                p = f.prepareDataCoordInfo,
                g = f.getStackedOnPoint,
                v = i("ba86"),
                m = v.createGridClipPath,
                y = v.createPolarClipPath;

            function x(t, e) {
                if (t.length === e.length) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i],
                            r = e[i];
                        if (n[0] !== r[0] || n[1] !== r[1]) return
                    }
                    return !0
                }
            }

            function _(t) {
                return "number" == typeof t ? t : t ? .5 : 0
            }

            function b(t, e, i) {
                if (!i.valueDim) return [];
                for (var n = [], r = 0, a = e.count(); r < a; r++) n.push(g(i, t, e, r));
                return n
            }

            function w(t, e, i) {
                for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
                    var s = t[o + 1],
                        l = t[o];
                    a.push(l);
                    var u = [];
                    switch (i) {
                        case "end":
                            u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);
                            break;
                        case "middle":
                            var c = (l[r] + s[r]) / 2,
                                h = [];
                            u[r] = h[r] = c, u[1 - r] = l[1 - r], h[1 - r] = s[1 - r], a.push(u), a.push(h);
                            break;
                        default:
                            u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
                    }
                }
                return t[o] && a.push(t[o]), a
            }

            function S(t, e) {
                var i = t.getVisual("visualMeta");
                if (i && i.length && t.count() && "cartesian2d" === e.type) {
                    for (var r, a, o = i.length - 1; o >= 0; o--) {
                        var l = i[o].dimension,
                            u = t.dimensions[l],
                            c = t.getDimensionInfo(u);
                        if ("x" === (r = c && c.coordDim) || "y" === r) {
                            a = i[o];
                            break
                        }
                    }
                    if (a) {
                        var h = e.getAxis(r),
                            d = n.map(a.stops, (function(t) {
                                return {
                                    coord: h.toGlobalCoord(h.dataToCoord(t.value)),
                                    color: t.color
                                }
                            })),
                            f = d.length,
                            p = a.outerColors.slice();
                        f && d[0].coord > d[f - 1].coord && (d.reverse(), p.reverse());
                        var g = d[0].coord - 10,
                            v = d[f - 1].coord + 10,
                            m = v - g;
                        if (m < .001) return "transparent";
                        n.each(d, (function(t) {
                            t.offset = (t.coord - g) / m
                        })), d.push({
                            offset: f ? d[f - 1].offset : .5,
                            color: p[1] || "transparent"
                        }), d.unshift({
                            offset: f ? d[0].offset : .5,
                            color: p[0] || "transparent"
                        });
                        var y = new s.LinearGradient(0, 0, 0, 0, d, !0);
                        return y[r] = g, y[r + "2"] = v, y
                    }
                }
            }

            function C(t, e, i) {
                var r = t.get("showAllSymbol"),
                    a = "auto" === r;
                if (!r || a) {
                    var o = i.getAxesByScale("ordinal")[0];
                    if (o && (!a || !M(o, e))) {
                        var s = e.mapDimension(o.dim),
                            l = {};
                        return n.each(o.getViewLabels(), (function(t) {
                                l[t.tickValue] = 1
                            })),
                            function(t) {
                                return !l.hasOwnProperty(e.get(s, t))
                            }
                    }
                }
            }

            function M(t, e) {
                var i = t.getExtent(),
                    n = Math.abs(i[1] - i[0]) / t.scale.count();
                isNaN(n) && (n = 0);
                for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), s = 0; s < r; s += o)
                    if (1.5 * a.getSymbolSize(e, s)[t.isHorizontal() ? 1 : 0] > n) return !1;
                return !0
            }

            function T(t, e, i) {
                if ("cartesian2d" === t.type) {
                    var n = t.getBaseAxis().isHorizontal(),
                        r = m(t, e, i);
                    if (!i.get("clip", !0)) {
                        var a = r.shape,
                            o = Math.max(a.width, a.height);
                        n ? (a.y -= o, a.height += 2 * o) : (a.x -= o, a.width += 2 * o)
                    }
                    return r
                }
                return y(t, e, i)
            }
            var I = d.extend({
                type: "line",
                init: function() {
                    var t = new s.Group,
                        e = new r;
                    this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
                },
                render: function(t, e, i) {
                    var r = t.coordinateSystem,
                        a = this.group,
                        o = t.getData(),
                        s = t.getModel("lineStyle"),
                        l = t.getModel("areaStyle"),
                        u = o.mapArray(o.getItemLayout),
                        c = "polar" === r.type,
                        h = this._coordSys,
                        d = this._symbolDraw,
                        f = this._polyline,
                        g = this._polygon,
                        v = this._lineGroup,
                        m = t.get("animation"),
                        y = !l.isEmpty(),
                        M = l.get("origin"),
                        I = b(r, o, p(r, o, M)),
                        A = t.get("showSymbol"),
                        D = A && !c && C(t, o, r),
                        k = this._data;
                    k && k.eachItemGraphicEl((function(t, e) {
                        t.__temp && (a.remove(t), k.setItemGraphicEl(e, null))
                    })), A || d.remove(), a.add(v);
                    var P, O = !c && t.get("step");
                    r && r.getArea && t.get("clip", !0) && (null != (P = r.getArea()).width ? (P.x -= .1, P.y -= .1, P.width += .2, P.height += .2) : P.r0 && (P.r0 -= .5, P.r1 += .5)), this._clipShapeForSymbol = P, f && h.type === r.type && O === this._step ? (y && !g ? g = this._newPolygon(u, I, r, m) : g && !y && (v.remove(g), g = this._polygon = null), v.setClipPath(T(r, !1, t)), A && d.updateData(o, {
                        isIgnore: D,
                        clipShape: P
                    }), o.eachItemGraphicEl((function(t) {
                        t.stopAnimation(!0)
                    })), x(this._stackedOnPoints, I) && x(this._points, u) || (m ? this._updateAnimation(o, I, r, i, O, M) : (O && (u = w(u, r, O), I = w(I, r, O)), f.setShape({
                        points: u
                    }), g && g.setShape({
                        points: u,
                        stackedOnPoints: I
                    })))) : (A && d.updateData(o, {
                        isIgnore: D,
                        clipShape: P
                    }), O && (u = w(u, r, O), I = w(I, r, O)), f = this._newPolyline(u, r, m), y && (g = this._newPolygon(u, I, r, m)), v.setClipPath(T(r, !0, t)));
                    var L = S(o, r) || o.getVisual("color");
                    f.useStyle(n.defaults(s.getLineStyle(), {
                        fill: "none",
                        stroke: L,
                        lineJoin: "bevel"
                    }));
                    var E = t.get("smooth");
                    if (E = _(t.get("smooth")), f.setShape({
                            smooth: E,
                            smoothMonotone: t.get("smoothMonotone"),
                            connectNulls: t.get("connectNulls")
                        }), g) {
                        var R = o.getCalculationInfo("stackedOnSeries"),
                            N = 0;
                        g.useStyle(n.defaults(l.getAreaStyle(), {
                            fill: L,
                            opacity: .7,
                            lineJoin: "bevel"
                        })), R && (N = _(R.get("smooth"))), g.setShape({
                            smooth: E,
                            stackedOnSmooth: N,
                            smoothMonotone: t.get("smoothMonotone"),
                            connectNulls: t.get("connectNulls")
                        })
                    }
                    this._data = o, this._coordSys = r, this._stackedOnPoints = I, this._points = u, this._step = O, this._valueOrigin = M
                },
                dispose: function() {},
                highlight: function(t, e, i, n) {
                    var r = t.getData(),
                        o = l.queryDataIndex(r, n);
                    if (!(o instanceof Array) && null != o && o >= 0) {
                        var s = r.getItemGraphicEl(o);
                        if (!s) {
                            var u = r.getItemLayout(o);
                            if (!u) return;
                            if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(u[0], u[1])) return;
                            (s = new a(r, o)).position = u, s.setZ(t.get("zlevel"), t.get("z")), s.ignore = isNaN(u[0]) || isNaN(u[1]), s.__temp = !0, r.setItemGraphicEl(o, s), s.stopSymbolAnimation(!0), this.group.add(s)
                        }
                        s.highlight()
                    } else d.prototype.highlight.call(this, t, e, i, n)
                },
                downplay: function(t, e, i, n) {
                    var r = t.getData(),
                        a = l.queryDataIndex(r, n);
                    if (null != a && a >= 0) {
                        var o = r.getItemGraphicEl(a);
                        o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
                    } else d.prototype.downplay.call(this, t, e, i, n)
                },
                _newPolyline: function(t) {
                    var e = this._polyline;
                    return e && this._lineGroup.remove(e), e = new c({
                        shape: {
                            points: t
                        },
                        silent: !0,
                        z2: 10
                    }), this._lineGroup.add(e), this._polyline = e, e
                },
                _newPolygon: function(t, e) {
                    var i = this._polygon;
                    return i && this._lineGroup.remove(i), i = new h({
                        shape: {
                            points: t,
                            stackedOnPoints: e
                        },
                        silent: !0
                    }), this._lineGroup.add(i), this._polygon = i, i
                },
                _updateAnimation: function(t, e, i, n, r, a) {
                    var l = this._polyline,
                        u = this._polygon,
                        c = t.hostModel,
                        h = o(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, a),
                        d = h.current,
                        f = h.stackedOnCurrent,
                        p = h.next,
                        g = h.stackedOnNext;
                    r && (d = w(h.current, i, r), f = w(h.stackedOnCurrent, i, r), p = w(h.next, i, r), g = w(h.stackedOnNext, i, r)), l.shape.__points = h.current, l.shape.points = d, s.updateProps(l, {
                        shape: {
                            points: p
                        }
                    }, c), u && (u.setShape({
                        points: d,
                        stackedOnPoints: f
                    }), s.updateProps(u, {
                        shape: {
                            points: p,
                            stackedOnPoints: g
                        }
                    }, c));
                    for (var v = [], m = h.status, y = 0; y < m.length; y++) {
                        if ("=" === m[y].cmd) {
                            var x = t.getItemGraphicEl(m[y].idx1);
                            x && v.push({
                                el: x,
                                ptIdx: y
                            })
                        }
                    }
                    l.animators && l.animators.length && l.animators[0].during((function() {
                        for (var t = 0; t < v.length; t++) {
                            v[t].el.attr("position", l.shape.__points[v[t].ptIdx])
                        }
                    }))
                },
                remove: function(t) {
                    var e = this.group,
                        i = this._data;
                    this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl((function(t, n) {
                        t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
                    })), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
                }
            });
            t.exports = I
        },
        9934: function(t, e) {
            t.exports = {
                legend: {
                    selector: {
                        all: "全选",
                        inverse: "反选"
                    }
                },
                toolbox: {
                    brush: {
                        title: {
                            rect: "矩形选择",
                            polygon: "圈选",
                            lineX: "横向选择",
                            lineY: "纵向选择",
                            keep: "保持选择",
                            clear: "清除选择"
                        }
                    },
                    dataView: {
                        title: "数据视图",
                        lang: ["数据视图", "关闭", "刷新"]
                    },
                    dataZoom: {
                        title: {
                            zoom: "区域缩放",
                            back: "区域缩放还原"
                        }
                    },
                    magicType: {
                        title: {
                            line: "切换为折线图",
                            bar: "切换为柱状图",
                            stack: "切换为堆叠",
                            tiled: "切换为平铺"
                        }
                    },
                    restore: {
                        title: "还原"
                    },
                    saveAsImage: {
                        title: "保存为图片",
                        lang: ["右键另存为图片"]
                    }
                },
                series: {
                    typeNames: {
                        pie: "饼图",
                        bar: "柱状图",
                        line: "折线图",
                        scatter: "散点图",
                        effectScatter: "涟漪散点图",
                        radar: "雷达图",
                        tree: "树图",
                        treemap: "矩形树图",
                        boxplot: "箱型图",
                        candlestick: "K线图",
                        k: "K线图",
                        heatmap: "热力图",
                        map: "地图",
                        parallel: "平行坐标图",
                        lines: "线图",
                        graph: "关系图",
                        sankey: "桑基图",
                        funnel: "漏斗图",
                        gauge: "仪表盘图",
                        pictorialBar: "象形柱图",
                        themeRiver: "主题河流图",
                        sunburst: "旭日图"
                    }
                },
                aria: {
                    general: {
                        withTitle: "这是一个关于“{title}”的图表。",
                        withoutTitle: "这是一个图表，"
                    },
                    series: {
                        single: {
                            prefix: "",
                            withName: "图表类型是{seriesType}，表示{seriesName}。",
                            withoutName: "图表类型是{seriesType}。"
                        },
                        multiple: {
                            prefix: "它由{seriesCount}个图表系列组成。",
                            withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                            withoutName: "第{seriesId}个系列是一个{seriesType}，",
                            separator: {
                                middle: "；",
                                end: "。"
                            }
                        }
                    },
                    data: {
                        allData: "其数据是——",
                        partialData: "其中，前{displayCnt}项是——",
                        withName: "{name}的数据是{value}",
                        withoutName: "{value}",
                        separator: {
                            middle: "，",
                            end: ""
                        }
                    }
                }
            }
        },
        9949: function(t, e, i) {},
        "9af42": function(t, e, i) {
            var n = i("2541"),
                r = i("a16b"),
                a = i("3550").WILL_BE_RESTORED,
                o = new r,
                s = function() {};
            s.prototype = {
                constructor: s,
                drawRectText: function(t, e) {
                    var i = this.style;
                    e = i.textRect || e, this.__dirty && n.normalizeTextStyle(i, !0);
                    var r = i.text;
                    if (null != r && (r += ""), n.needDrawText(r, i)) {
                        t.save();
                        var s = this.transform;
                        i.transformText ? this.setTransform(t) : s && (o.copy(e), o.applyTransform(s), e = o), n.renderText(this, t, r, i, e, a), t.restore()
                    }
                }
            };
            var l = s;
            t.exports = l
        },
        "9b1e": function(t, e, i) {
            var n = i("3c57"),
                r = i("71b5"),
                a = i("7d81").detectSourceFormat,
                o = i("cfb8").SERIES_LAYOUT_BY_COLUMN;
            n.extend({
                type: "dataset",
                defaultOption: {
                    seriesLayoutBy: o,
                    sourceHeader: null,
                    dimensions: null,
                    source: null
                },
                optionUpdated: function() {
                    a(this)
                }
            }), r.extend({
                type: "dataset"
            })
        },
        "9b57": function(t, e, i) {
            var n = i("ebea")([
                    ["lineWidth", "width"],
                    ["stroke", "color"],
                    ["opacity"],
                    ["shadowBlur"],
                    ["shadowOffsetX"],
                    ["shadowOffsetY"],
                    ["shadowColor"]
                ]),
                r = {
                    getLineStyle: function(t) {
                        var e = n(this, t);
                        return e.lineDash = this.getLineDash(e.lineWidth), e
                    },
                    getLineDash: function(t) {
                        null == t && (t = 1);
                        var e = this.get("type"),
                            i = Math.max(t, 2),
                            n = 4 * t;
                        return "solid" !== e && null != e && ("dashed" === e ? [n, n] : [i, i])
                    }
                };
            t.exports = r
        },
        "9ced": function(t, e) {
            t.exports = function(t, e, i, n, r, a) {
                if (a > e && a > n || a < e && a < n) return 0;
                if (n === e) return 0;
                var o = n < e ? 1 : -1,
                    s = (a - e) / (n - e);
                1 !== s && 0 !== s || (o = n < e ? .5 : -.5);
                var l = s * (i - t) + t;
                return l === r ? 1 / 0 : l > r ? o : 0
            }
        },
        "9cef": function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de");
            i("0328"), i("347b");
            var a = i("3f83"),
                o = i("20fe"),
                s = i("48a4"),
                l = i("c817");
            a("pie", [{
                type: "pieToggleSelect",
                event: "pieselectchanged",
                method: "toggleSelected"
            }, {
                type: "pieSelect",
                event: "pieselected",
                method: "select"
            }, {
                type: "pieUnSelect",
                event: "pieunselected",
                method: "unSelect"
            }]), n.registerVisual(o("pie")), n.registerLayout(r.curry(s, "pie")), n.registerProcessor(l("pie"))
        },
        "9d7f": function(t, e, i) {
            var n = i("3caf").extend({
                type: "arc",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !0
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function(t, e) {
                    var i = e.cx,
                        n = e.cy,
                        r = Math.max(e.r, 0),
                        a = e.startAngle,
                        o = e.endAngle,
                        s = e.clockwise,
                        l = Math.cos(a),
                        u = Math.sin(a);
                    t.moveTo(l * r + i, u * r + n), t.arc(i, n, r, a, o, !s)
                }
            });
            t.exports = n
        },
        a16b: function(t, e, i) {
            var n = i("df91"),
                r = i("6b25"),
                a = n.applyTransform,
                o = Math.min,
                s = Math.max;

            function l(t, e, i, n) {
                i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
            }
            l.prototype = {
                constructor: l,
                union: function(t) {
                    var e = o(t.x, this.x),
                        i = o(t.y, this.y);
                    this.width = s(t.x + t.width, this.x + this.width) - e, this.height = s(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
                },
                applyTransform: function() {
                    var t = [],
                        e = [],
                        i = [],
                        n = [];
                    return function(r) {
                        if (r) {
                            t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, a(t, t, r), a(e, e, r), a(i, i, r), a(n, n, r), this.x = o(t[0], e[0], i[0], n[0]), this.y = o(t[1], e[1], i[1], n[1]);
                            var l = s(t[0], e[0], i[0], n[0]),
                                u = s(t[1], e[1], i[1], n[1]);
                            this.width = l - this.x, this.height = u - this.y
                        }
                    }
                }(),
                calculateTransform: function(t) {
                    var e = this,
                        i = t.width / e.width,
                        n = t.height / e.height,
                        a = r.create();
                    return r.translate(a, a, [-e.x, -e.y]), r.scale(a, a, [i, n]), r.translate(a, a, [t.x, t.y]), a
                },
                intersect: function(t) {
                    if (!t) return !1;
                    t instanceof l || (t = l.create(t));
                    var e = this,
                        i = e.x,
                        n = e.x + e.width,
                        r = e.y,
                        a = e.y + e.height,
                        o = t.x,
                        s = t.x + t.width,
                        u = t.y,
                        c = t.y + t.height;
                    return !(n < o || s < i || a < u || c < r)
                },
                contain: function(t, e) {
                    var i = this;
                    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
                },
                clone: function() {
                    return new l(this.x, this.y, this.width, this.height)
                },
                copy: function(t) {
                    this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                },
                plain: function() {
                    return {
                        x: this.x,
                        y: this.y,
                        width: this.width,
                        height: this.height
                    }
                }
            }, l.create = function(t) {
                return new l(t.x, t.y, t.width, t.height)
            };
            var u = l;
            t.exports = u
        },
        a4345: function(t, e, i) {
            var n = i("73a1"),
                r = function() {
                    this._track = []
                };

            function a(t) {
                var e = t[1][0] - t[0][0],
                    i = t[1][1] - t[0][1];
                return Math.sqrt(e * e + i * i)
            }
            r.prototype = {
                constructor: r,
                recognize: function(t, e, i) {
                    return this._doTrack(t, e, i), this._recognize(t)
                },
                clear: function() {
                    return this._track.length = 0, this
                },
                _doTrack: function(t, e, i) {
                    var r = t.touches;
                    if (r) {
                        for (var a = {
                                points: [],
                                touches: [],
                                target: e,
                                event: t
                            }, o = 0, s = r.length; o < s; o++) {
                            var l = r[o],
                                u = n.clientToLocal(i, l, {});
                            a.points.push([u.zrX, u.zrY]), a.touches.push(l)
                        }
                        this._track.push(a)
                    }
                },
                _recognize: function(t) {
                    for (var e in o)
                        if (o.hasOwnProperty(e)) {
                            var i = o[e](this._track, t);
                            if (i) return i
                        }
                }
            };
            var o = {
                    pinch: function(t, e) {
                        var i = t.length;
                        if (i) {
                            var n = (t[i - 1] || {}).points,
                                r = (t[i - 2] || {}).points || n;
                            if (r && r.length > 1 && n && n.length > 1) {
                                var o = a(n) / a(r);
                                !isFinite(o) && (o = 1), e.pinchScale = o;
                                var s = function(t) {
                                    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
                                }(n);
                                return e.pinchX = s[0], e.pinchY = s[1], {
                                    type: "pinch",
                                    target: t[0].target,
                                    event: e
                                }
                            }
                        }
                    }
                },
                s = r;
            t.exports = s
        },
        a48d: function(t, e, i) {
            var n = i("b2de"),
                r = i("0127"),
                a = n.each,
                o = n.isObject,
                s = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];

            function l(t) {
                var e = t && t.itemStyle;
                if (e)
                    for (var i = 0, r = s.length; i < r; i++) {
                        var a = s[i],
                            o = e.normal,
                            l = e.emphasis;
                        o && o[a] && (t[a] = t[a] || {}, t[a].normal ? n.merge(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), l && l[a] && (t[a] = t[a] || {}, t[a].emphasis ? n.merge(t[a].emphasis, l[a]) : t[a].emphasis = l[a], l[a] = null)
                    }
            }

            function u(t, e, i) {
                if (t && t[e] && (t[e].normal || t[e].emphasis)) {
                    var r = t[e].normal,
                        a = t[e].emphasis;
                    r && (i ? (t[e].normal = t[e].emphasis = null, n.defaults(t[e], r)) : t[e] = r), a && (t.emphasis = t.emphasis || {}, t.emphasis[e] = a)
                }
            }

            function c(t) {
                u(t, "itemStyle"), u(t, "lineStyle"), u(t, "areaStyle"), u(t, "label"), u(t, "labelLine"), u(t, "upperLabel"), u(t, "edgeLabel")
            }

            function h(t, e) {
                var i = o(t) && t[e],
                    n = o(i) && i.textStyle;
                if (n)
                    for (var a = 0, s = r.TEXT_STYLE_OPTIONS.length; a < s; a++) e = r.TEXT_STYLE_OPTIONS[a], n.hasOwnProperty(e) && (i[e] = n[e])
            }

            function d(t) {
                t && (c(t), h(t, "label"), t.emphasis && h(t.emphasis, "label"))
            }

            function f(t) {
                return n.isArray(t) ? t : t ? [t] : []
            }

            function p(t) {
                return (n.isArray(t) ? t[0] : t) || {}
            }
            t.exports = function(t, e) {
                a(f(t.series), (function(t) {
                    o(t) && function(t) {
                        if (o(t)) {
                            l(t), c(t), h(t, "label"), h(t, "upperLabel"), h(t, "edgeLabel"), t.emphasis && (h(t.emphasis, "label"), h(t.emphasis, "upperLabel"), h(t.emphasis, "edgeLabel"));
                            var e = t.markPoint;
                            e && (l(e), d(e));
                            var i = t.markLine;
                            i && (l(i), d(i));
                            var r = t.markArea;
                            r && d(r);
                            var a = t.data;
                            if ("graph" === t.type) {
                                a = a || t.nodes;
                                var s = t.links || t.edges;
                                if (s && !n.isTypedArray(s))
                                    for (var f = 0; f < s.length; f++) d(s[f]);
                                n.each(t.categories, (function(t) {
                                    c(t)
                                }))
                            }
                            if (a && !n.isTypedArray(a))
                                for (f = 0; f < a.length; f++) d(a[f]);
                            if ((e = t.markPoint) && e.data) {
                                var p = e.data;
                                for (f = 0; f < p.length; f++) d(p[f])
                            }
                            if ((i = t.markLine) && i.data) {
                                var g = i.data;
                                for (f = 0; f < g.length; f++) n.isArray(g[f]) ? (d(g[f][0]), d(g[f][1])) : d(g[f])
                            }
                            "gauge" === t.type ? (h(t, "axisLabel"), h(t, "title"), h(t, "detail")) : "treemap" === t.type ? (u(t.breadcrumb, "itemStyle"), n.each(t.levels, (function(t) {
                                c(t)
                            }))) : "tree" === t.type && c(t.leaves)
                        }
                    }(t)
                }));
                var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
                e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), a(i, (function(e) {
                    a(f(t[e]), (function(t) {
                        t && (h(t, "axisLabel"), h(t.axisPointer, "label"))
                    }))
                })), a(f(t.parallel), (function(t) {
                    var e = t && t.parallelAxisDefault;
                    h(e, "axisLabel"), h(e && e.axisPointer, "label")
                })), a(f(t.calendar), (function(t) {
                    u(t, "itemStyle"), h(t, "dayLabel"), h(t, "monthLabel"), h(t, "yearLabel")
                })), a(f(t.radar), (function(t) {
                    h(t, "name")
                })), a(f(t.geo), (function(t) {
                    o(t) && (d(t), a(f(t.regions), (function(t) {
                        d(t)
                    })))
                })), a(f(t.timeline), (function(t) {
                    d(t), u(t, "label"), u(t, "itemStyle"), u(t, "controlStyle", !0);
                    var e = t.data;
                    n.isArray(e) && n.each(e, (function(t) {
                        n.isObject(t) && (u(t, "label"), u(t, "itemStyle"))
                    }))
                })), a(f(t.toolbox), (function(t) {
                    u(t, "iconStyle"), a(t.feature, (function(t) {
                        u(t, "iconStyle")
                    }))
                })), h(p(t.axisPointer), "label"), h(p(t.tooltip).axisPointer, "label")
            }
        },
        a4e7: function(t, e, i) {
            var n = i("b2de"),
                r = i("df91"),
                a = i("0cd7"),
                o = i("3efa"),
                s = i("73a1"),
                l = i("a4345"),
                u = "silent";

            function c() {
                s.stop(this.event)
            }

            function h() {}
            h.prototype.dispose = function() {};
            var d = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
                f = function(t, e, i, n) {
                    o.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new h, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, a.call(this), this.setHandlerProxy(i)
                };

            function p(t, e, i) {
                if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                    for (var n, r = t; r;) {
                        if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
                        r.silent && (n = !0), r = r.parent
                    }
                    return !n || u
                }
                return !1
            }

            function g(t, e, i) {
                var n = t.painter;
                return e < 0 || e > n.getWidth() || i < 0 || i > n.getHeight()
            }
            f.prototype = {
                constructor: f,
                setHandlerProxy: function(t) {
                    this.proxy && this.proxy.dispose(), t && (n.each(d, (function(e) {
                        t.on && t.on(e, this[e], this)
                    }), this), t.handler = this), this.proxy = t
                },
                mousemove: function(t) {
                    var e = t.zrX,
                        i = t.zrY,
                        n = g(this, e, i),
                        r = this._hovered,
                        a = r.target;
                    a && !a.__zr && (a = (r = this.findHover(r.x, r.y)).target);
                    var o = this._hovered = n ? {
                            x: e,
                            y: i
                        } : this.findHover(e, i),
                        s = o.target,
                        l = this.proxy;
                    l.setCursor && l.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(o, "mousemove", t), s && s !== a && this.dispatchToElement(o, "mouseover", t)
                },
                mouseout: function(t) {
                    var e = t.zrEventControl,
                        i = t.zrIsToLocalDOM;
                    "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !i && this.trigger("globalout", {
                        type: "globalout",
                        event: t
                    })
                },
                resize: function(t) {
                    this._hovered = {}
                },
                dispatch: function(t, e) {
                    var i = this[t];
                    i && i.call(this, e)
                },
                dispose: function() {
                    this.proxy.dispose(), this.storage = this.proxy = this.painter = null
                },
                setCursorStyle: function(t) {
                    var e = this.proxy;
                    e.setCursor && e.setCursor(t)
                },
                dispatchToElement: function(t, e, i) {
                    var n = (t = t || {}).target;
                    if (!n || !n.silent) {
                        for (var r = "on" + e, a = function(t, e, i) {
                                return {
                                    type: t,
                                    event: i,
                                    target: e.target,
                                    topTarget: e.topTarget,
                                    cancelBubble: !1,
                                    offsetX: i.zrX,
                                    offsetY: i.zrY,
                                    gestureEvent: i.gestureEvent,
                                    pinchX: i.pinchX,
                                    pinchY: i.pinchY,
                                    pinchScale: i.pinchScale,
                                    wheelDelta: i.zrDelta,
                                    zrByTouch: i.zrByTouch,
                                    which: i.which,
                                    stop: c
                                }
                            }(e, t, i); n && (n[r] && (a.cancelBubble = n[r].call(n, a)), n.trigger(e, a), n = n.parent, !a.cancelBubble););
                        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer((function(t) {
                            "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
                        })))
                    }
                },
                findHover: function(t, e, i) {
                    for (var n = this.storage.getDisplayList(), r = {
                            x: t,
                            y: e
                        }, a = n.length - 1; a >= 0; a--) {
                        var o;
                        if (n[a] !== i && !n[a].ignore && (o = p(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), o !== u)) {
                            r.target = n[a];
                            break
                        }
                    }
                    return r
                },
                processGesture: function(t, e) {
                    this._gestureMgr || (this._gestureMgr = new l);
                    var i = this._gestureMgr;
                    "start" === e && i.clear();
                    var n = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
                    if ("end" === e && i.clear(), n) {
                        var r = n.type;
                        t.gestureEvent = r, this.dispatchToElement({
                            target: n.target
                        }, r, n.event)
                    }
                }
            }, n.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], (function(t) {
                f.prototype[t] = function(e) {
                    var i, n, a = e.zrX,
                        o = e.zrY,
                        s = g(this, a, o);
                    if ("mouseup" === t && s || (n = (i = this.findHover(a, o)).target), "mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n;
                    else if ("mouseup" === t) this._upEl = n;
                    else if ("click" === t) {
                        if (this._downEl !== this._upEl || !this._downPoint || r.dist(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                        this._downPoint = null
                    }
                    this.dispatchToElement(i, t, e)
                }
            })), n.mixin(f, o), n.mixin(f, a);
            var v = f;
            t.exports = v
        },
        a670: function(t, e, i) {
            var n = i("b2de");

            function r(t) {
                return this._axes[t]
            }
            var a = function(t) {
                this._axes = {}, this._dimList = [], this.name = t || ""
            };
            a.prototype = {
                constructor: a,
                type: "cartesian",
                getAxis: function(t) {
                    return this._axes[t]
                },
                getAxes: function() {
                    return n.map(this._dimList, r, this)
                },
                getAxesByScale: function(t) {
                    return t = t.toLowerCase(), n.filter(this.getAxes(), (function(e) {
                        return e.scale.type === t
                    }))
                },
                addAxis: function(t) {
                    var e = t.dim;
                    this._axes[e] = t, this._dimList.push(e)
                },
                dataToCoord: function(t) {
                    return this._dataCoordConvert(t, "dataToCoord")
                },
                coordToData: function(t) {
                    return this._dataCoordConvert(t, "coordToData")
                },
                _dataCoordConvert: function(t, e) {
                    for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                        var a = i[r],
                            o = this._axes[a];
                        n[a] = o[e](t[a])
                    }
                    return n
                }
            };
            var o = a;
            t.exports = o
        },
        a711: function(t, e, i) {
            var n = i("b2de"),
                r = n.createHashMap,
                a = n.each,
                o = n.isString,
                s = n.defaults,
                l = n.extend,
                u = n.isObject,
                c = n.clone,
                h = i("0127").normalizeToArray,
                d = i("7d81"),
                f = d.guessOrdinal,
                p = d.BE_ORDINAL,
                g = i("fa21"),
                v = i("25cc").OTHER_DIMENSIONS,
                m = i("901f");

            function y(t, e, i) {
                if (i || null != e.get(t)) {
                    for (var n = 0; null != e.get(t + n);) n++;
                    t += n
                }
                return e.set(t, !0), t
            }
            var x = function(t, e, i) {
                g.isInstance(e) || (e = g.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
                for (var n = (i.dimsDef || []).slice(), d = r(), x = r(), _ = [], b = function(t, e, i, n) {
                        var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
                        return a(e, (function(t) {
                            var e = t.dimsDef;
                            e && (r = Math.max(r, e.length))
                        })), r
                    }(e, t, n, i.dimCount), w = 0; w < b; w++) {
                    var S = n[w] = l({}, u(n[w]) ? n[w] : {
                            name: n[w]
                        }),
                        C = S.name,
                        M = _[w] = new m;
                    null != C && null == d.get(C) && (M.name = M.displayName = C, d.set(C, w)), null != S.type && (M.type = S.type), null != S.displayName && (M.displayName = S.displayName)
                }
                var T = i.encodeDef;
                !T && i.encodeDefaulter && (T = i.encodeDefaulter(e, b)), (T = r(T)).each((function(t, e) {
                    if (1 === (t = h(t).slice()).length && !o(t[0]) && t[0] < 0) T.set(e, !1);
                    else {
                        var i = T.set(e, []);
                        a(t, (function(t, n) {
                            o(t) && (t = d.get(t)), null != t && t < b && (i[n] = t, A(_[t], e, n))
                        }))
                    }
                }));
                var I = 0;

                function A(t, e, i) {
                    null != v.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, x.set(e, !0))
                }
                a(t, (function(t, e) {
                    var i, n, r;
                    if (o(t)) i = t, t = {};
                    else {
                        i = t.name;
                        var l = t.ordinalMeta;
                        t.ordinalMeta = null, (t = c(t)).ordinalMeta = l, n = t.dimsDef, r = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
                    }
                    var d = T.get(i);
                    if (!1 !== d) {
                        if (!(d = h(d)).length)
                            for (var f = 0; f < (n && n.length || 1); f++) {
                                for (; I < _.length && null != _[I].coordDim;) I++;
                                I < _.length && d.push(I++)
                            }
                        a(d, (function(e, a) {
                            var o = _[e];
                            if (A(s(o, t), i, a), null == o.name && n) {
                                var l = n[a];
                                !u(l) && (l = {
                                    name: l
                                }), o.name = o.displayName = l.name, o.defaultTooltip = l.defaultTooltip
                            }
                            r && s(o.otherDims, r)
                        }))
                    }
                }));
                var D = i.generateCoord,
                    k = i.generateCoordCount,
                    P = null != k;
                k = D ? k || 1 : 0;
                for (var O = D || "value", L = 0; L < b; L++) {
                    null == (M = _[L] = _[L] || new m).coordDim && (M.coordDim = y(O, x, P), M.coordDimIndex = 0, (!D || k <= 0) && (M.isExtraCoord = !0), k--), null == M.name && (M.name = y(M.coordDim, d)), null != M.type || f(e, L, M.name) !== p.Must && (!M.isExtraCoord || null == M.otherDims.itemName && null == M.otherDims.seriesName) || (M.type = "ordinal")
                }
                return _
            };
            t.exports = x
        },
        a7a0: function(t, e, i) {
            var n = i("56b7");
            i("bac3"), i("8778"), i("a9ff"), n.registerAction({
                type: "showTip",
                event: "showTip",
                update: "tooltip:manuallyShowTip"
            }, (function() {})), n.registerAction({
                type: "hideTip",
                event: "hideTip",
                update: "tooltip:manuallyHideTip"
            }, (function() {}))
        },
        a9ff: function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de"),
                a = i("76be"),
                o = i("36b0"),
                s = i("2b96"),
                l = i("542f"),
                u = i("e2dc"),
                c = i("81e8"),
                h = i("cf6c"),
                d = i("1f1f"),
                f = i("e62d0"),
                p = i("7286"),
                g = i("8d1f"),
                v = i("0e35"),
                m = i("0127").getTooltipRenderMode,
                y = r.bind,
                x = r.each,
                _ = u.parsePercent,
                b = new c.Rect({
                    shape: {
                        x: -1,
                        y: -1,
                        width: 2,
                        height: 2
                    }
                }),
                w = n.extendComponentView({
                    type: "tooltip",
                    init: function(t, e) {
                        if (!a.node) {
                            var i, n = t.getComponent("tooltip").get("renderMode");
                            this._renderMode = m(n), "html" === this._renderMode ? (i = new o(e.getDom(), e), this._newLine = "<br/>") : (i = new s(e), this._newLine = "\n"), this._tooltipContent = i
                        }
                    },
                    render: function(t, e, i) {
                        if (!a.node) {
                            this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                            var n = this._tooltipContent;
                            n.update(), n.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
                        }
                    },
                    _initGlobalListener: function() {
                        var t = this._tooltipModel.get("triggerOn");
                        p.register("itemTooltip", this._api, y((function(e, i, n) {
                            "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(i, n) : "leave" === e && this._hide(n))
                        }), this))
                    },
                    _keepShow: function() {
                        var t = this._tooltipModel,
                            e = this._ecModel,
                            i = this._api;
                        if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                            var n = this;
                            clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout((function() {
                                !i.isDisposed() && n.manuallyShowTip(t, e, i, {
                                    x: n._lastX,
                                    y: n._lastY
                                })
                            }))
                        }
                    },
                    manuallyShowTip: function(t, e, i, n) {
                        if (n.from !== this.uid && !a.node) {
                            var r = C(n, i);
                            this._ticket = "";
                            var o = n.dataByCoordSys;
                            if (n.tooltip && null != n.x && null != n.y) {
                                var s = b;
                                s.position = [n.x, n.y], s.update(), s.tooltip = n.tooltip, this._tryShow({
                                    offsetX: n.x,
                                    offsetY: n.y,
                                    target: s
                                }, r)
                            } else if (o) this._tryShow({
                                offsetX: n.x,
                                offsetY: n.y,
                                position: n.position,
                                event: {},
                                dataByCoordSys: n.dataByCoordSys,
                                tooltipOption: n.tooltipOption
                            }, r);
                            else if (null != n.seriesIndex) {
                                if (this._manuallyAxisShowTip(t, e, i, n)) return;
                                var l = h(n, e),
                                    u = l.point[0],
                                    c = l.point[1];
                                null != u && null != c && this._tryShow({
                                    offsetX: u,
                                    offsetY: c,
                                    position: n.position,
                                    target: l.el,
                                    event: {}
                                }, r)
                            } else null != n.x && null != n.y && (i.dispatchAction({
                                type: "updateAxisPointer",
                                x: n.x,
                                y: n.y
                            }), this._tryShow({
                                offsetX: n.x,
                                offsetY: n.y,
                                position: n.position,
                                target: i.getZr().findHover(n.x, n.y).target,
                                event: {}
                            }, r))
                        }
                    },
                    manuallyHideTip: function(t, e, i, n) {
                        var r = this._tooltipContent;
                        !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, n.from !== this.uid && this._hide(C(n, i))
                    },
                    _manuallyAxisShowTip: function(t, e, i, n) {
                        var r = n.seriesIndex,
                            a = n.dataIndex,
                            o = e.getComponent("axisPointer").coordSysAxesInfo;
                        if (null != r && null != a && null != o) {
                            var s = e.getSeriesByIndex(r);
                            if (s)
                                if ("axis" === (t = S([s.getData().getItemModel(a), s, (s.coordinateSystem || {}).model, t])).get("trigger")) return i.dispatchAction({
                                    type: "updateAxisPointer",
                                    seriesIndex: r,
                                    dataIndex: a,
                                    position: n.position
                                }), !0
                        }
                    },
                    _tryShow: function(t, e) {
                        var i = t.target;
                        if (this._tooltipModel) {
                            this._lastX = t.offsetX, this._lastY = t.offsetY;
                            var n = t.dataByCoordSys;
                            n && n.length ? this._showAxisTooltip(n, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e))
                        }
                    },
                    _showOrMove: function(t, e) {
                        var i = t.get("showDelay");
                        e = r.bind(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e()
                    },
                    _showAxisTooltip: function(t, e) {
                        var i = this._ecModel,
                            n = this._tooltipModel,
                            a = [e.offsetX, e.offsetY],
                            o = [],
                            s = [],
                            u = S([e.tooltipOption, n]),
                            c = this._renderMode,
                            h = this._newLine,
                            d = {};
                        x(t, (function(t) {
                            x(t.dataByAxis, (function(t) {
                                var e = i.getComponent(t.axisDim + "Axis", t.axisIndex),
                                    n = t.value,
                                    a = [];
                                if (e && null != n) {
                                    var u = v.getValueLabel(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
                                    r.each(t.seriesDataIndices, (function(o) {
                                        var l = i.getSeriesByIndex(o.seriesIndex),
                                            h = o.dataIndexInside,
                                            f = l && l.getDataParams(h);
                                        if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = g.getAxisRawValue(e.axis, n), f.axisValueLabel = u, f) {
                                            s.push(f);
                                            var p, v = l.formatTooltip(h, !0, null, c);
                                            if (r.isObject(v)) {
                                                p = v.html;
                                                var m = v.markers;
                                                r.merge(d, m)
                                            } else p = v;
                                            a.push(p)
                                        }
                                    }));
                                    var f = u;
                                    "html" !== c ? o.push(a.join(h)) : o.push((f ? l.encodeHTML(f) + h : "") + a.join(h))
                                }
                            }))
                        }), this), o.reverse(), o = o.join(this._newLine + this._newLine);
                        var f = e.position;
                        this._showOrMove(u, (function() {
                            this._updateContentNotChangedOnAxis(t) ? this._updatePosition(u, f, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(u, o, s, Math.random(), a[0], a[1], f, void 0, d)
                        }))
                    },
                    _showSeriesItemTooltip: function(t, e, i) {
                        var n = this._ecModel,
                            a = e.seriesIndex,
                            o = n.getSeriesByIndex(a),
                            s = e.dataModel || o,
                            l = e.dataIndex,
                            u = e.dataType,
                            c = s.getData(),
                            h = S([c.getItemModel(l), s, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
                            d = h.get("trigger");
                        if (null == d || "item" === d) {
                            var f, p, g = s.getDataParams(l, u),
                                v = s.formatTooltip(l, !1, u, this._renderMode);
                            r.isObject(v) ? (f = v.html, p = v.markers) : (f = v, p = null);
                            var m = "item_" + s.name + "_" + l;
                            this._showOrMove(h, (function() {
                                this._showTooltipContent(h, f, g, m, t.offsetX, t.offsetY, t.position, t.target, p)
                            })), i({
                                type: "showTip",
                                dataIndexInside: l,
                                dataIndex: c.getRawIndex(l),
                                seriesIndex: a,
                                from: this.uid
                            })
                        }
                    },
                    _showComponentItemTooltip: function(t, e, i) {
                        var n = e.tooltip;
                        if ("string" == typeof n) {
                            n = {
                                content: n,
                                formatter: n
                            }
                        }
                        var r = new f(n, this._tooltipModel, this._ecModel),
                            a = r.get("content"),
                            o = Math.random();
                        this._showOrMove(r, (function() {
                            this._showTooltipContent(r, a, r.get("formatterParams") || {}, o, t.offsetX, t.offsetY, t.position, e)
                        })), i({
                            type: "showTip",
                            from: this.uid
                        })
                    },
                    _showTooltipContent: function(t, e, i, n, r, a, o, s, u) {
                        if (this._ticket = "", t.get("showContent") && t.get("show")) {
                            var c = this._tooltipContent,
                                h = t.get("formatter");
                            o = o || t.get("position");
                            var d = e;
                            if (h && "string" == typeof h) d = l.formatTpl(h, i, !0);
                            else if ("function" == typeof h) {
                                var f = y((function(e, n) {
                                    e === this._ticket && (c.setContent(n, u, t), this._updatePosition(t, o, r, a, c, i, s))
                                }), this);
                                this._ticket = n, d = h(i, n, f)
                            }
                            c.setContent(d, u, t), c.show(t), this._updatePosition(t, o, r, a, c, i, s)
                        }
                    },
                    _updatePosition: function(t, e, i, n, a, o, s) {
                        var l = this._api.getWidth(),
                            u = this._api.getHeight();
                        e = e || t.get("position");
                        var c = a.getSize(),
                            h = t.get("align"),
                            f = t.get("verticalAlign"),
                            p = s && s.getBoundingRect().clone();
                        if (s && p.applyTransform(s.transform), "function" == typeof e && (e = e([i, n], o, a.el, p, {
                                viewSize: [l, u],
                                contentSize: c.slice()
                            })), r.isArray(e)) i = _(e[0], l), n = _(e[1], u);
                        else if (r.isObject(e)) {
                            e.width = c[0], e.height = c[1];
                            var g = d.getLayoutRect(e, {
                                width: l,
                                height: u
                            });
                            i = g.x, n = g.y, h = null, f = null
                        } else if ("string" == typeof e && s) {
                            var v = function(t, e, i) {
                                var n = i[0],
                                    r = i[1],
                                    a = 0,
                                    o = 0,
                                    s = e.width,
                                    l = e.height;
                                switch (t) {
                                    case "inside":
                                        a = e.x + s / 2 - n / 2, o = e.y + l / 2 - r / 2;
                                        break;
                                    case "top":
                                        a = e.x + s / 2 - n / 2, o = e.y - r - 5;
                                        break;
                                    case "bottom":
                                        a = e.x + s / 2 - n / 2, o = e.y + l + 5;
                                        break;
                                    case "left":
                                        a = e.x - n - 5, o = e.y + l / 2 - r / 2;
                                        break;
                                    case "right":
                                        a = e.x + s + 5, o = e.y + l / 2 - r / 2
                                }
                                return [a, o]
                            }(e, p, c);
                            i = v[0], n = v[1]
                        } else v = function(t, e, i, n, r, a, o) {
                            var s = i.getOuterSize(),
                                l = s.width,
                                u = s.height;
                            return null != a && (t + l + a > n ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e]
                        }(i, n, a, l, u, h ? null : 20, f ? null : 20), i = v[0], n = v[1];
                        h && (i -= M(h) ? c[0] / 2 : "right" === h ? c[0] : 0), f && (n -= M(f) ? c[1] / 2 : "bottom" === f ? c[1] : 0), t.get("confine") && (v = function(t, e, i, n, r) {
                            var a = i.getOuterSize(),
                                o = a.width,
                                s = a.height;
                            return t = Math.min(t + o, n) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
                        }(i, n, a, l, u), i = v[0], n = v[1]), a.moveTo(i, n)
                    },
                    _updateContentNotChangedOnAxis: function(t) {
                        var e = this._lastDataByCoordSys,
                            i = !!e && e.length === t.length;
                        return i && x(e, (function(e, n) {
                            var r = e.dataByAxis || {},
                                a = (t[n] || {}).dataByAxis || [];
                            (i &= r.length === a.length) && x(r, (function(t, e) {
                                var n = a[e] || {},
                                    r = t.seriesDataIndices || [],
                                    o = n.seriesDataIndices || [];
                                (i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === o.length) && x(r, (function(t, e) {
                                    var n = o[e];
                                    i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex
                                }))
                            }))
                        })), this._lastDataByCoordSys = t, !!i
                    },
                    _hide: function(t) {
                        this._lastDataByCoordSys = null, t({
                            type: "hideTip",
                            from: this.uid
                        })
                    },
                    dispose: function(t, e) {
                        a.node || (this._tooltipContent.hide(), p.unregister("itemTooltip", e))
                    }
                });

            function S(t) {
                for (var e = t.pop(); t.length;) {
                    var i = t.pop();
                    i && (f.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {
                        formatter: i
                    }), e = new f(i, e, e.ecModel))
                }
                return e
            }

            function C(t, e) {
                return t.dispatchAction || r.bind(e.dispatchAction, e)
            }

            function M(t) {
                return "center" === t || "middle" === t
            }
            t.exports = w
        },
        aa21: function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("0238")),
                r = i("dc95").extend({
                    type: "series.line",
                    dependencies: ["grid", "polar"],
                    getInitialData: function(t, e) {
                        return n(this.getSource(), this, {
                            useEncodeDefaulter: !0
                        })
                    },
                    defaultOption: {
                        zlevel: 0,
                        z: 2,
                        coordinateSystem: "cartesian2d",
                        legendHoverLink: !0,
                        hoverAnimation: !0,
                        clip: !0,
                        label: {
                            position: "top"
                        },
                        lineStyle: {
                            width: 2,
                            type: "solid"
                        },
                        step: !1,
                        smooth: !1,
                        smoothMonotone: null,
                        symbol: "emptyCircle",
                        symbolSize: 4,
                        symbolRotate: null,
                        showSymbol: !0,
                        showAllSymbol: "auto",
                        connectNulls: !1,
                        sampling: "none",
                        animationEasing: "linear",
                        progressive: 0,
                        hoverLayerThreshold: 1 / 0
                    }
                });
            t.exports = r
        },
        ace3: function(t, e, i) {
            var n = i("b2de"),
                r = i("e62d0"),
                a = n.each,
                o = n.curry;

            function s(t, e, i, o, s, l) {
                var u = e.getModel("axisPointer"),
                    c = {};
                a(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], (function(t) {
                    c[t] = n.clone(u.get(t))
                })), c.snap = "category" !== t.type && !!l, "cross" === u.get("type") && (c.type = "line");
                var h = c.label || (c.label = {});
                if (null == h.show && (h.show = !1), "cross" === s) {
                    var d = u.get("label.show");
                    if (h.show = null == d || d, !l) {
                        var f = c.lineStyle = u.get("crossStyle");
                        f && n.defaults(h, f.textStyle)
                    }
                }
                return t.model.getModel("axisPointer", new r(c, i, o))
            }

            function l(t, e) {
                for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {
                    var a = t[r] || {};
                    if (u(a[n + "AxisId"], i.id) || u(a[n + "AxisIndex"], i.componentIndex) || u(a[n + "AxisName"], i.name)) return r
                }
            }

            function u(t, e) {
                return "all" === t || n.isArray(t) && n.indexOf(t, e) >= 0 || t === e
            }

            function c(t) {
                var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
                return e && e.axesInfo[d(t)]
            }

            function h(t) {
                return !!t.get("handle.show")
            }

            function d(t) {
                return t.type + "||" + t.id
            }
            e.collect = function(t, e) {
                var i = {
                    axesInfo: {},
                    seriesInvolved: !1,
                    coordSysAxesInfo: {},
                    coordSysMap: {}
                };
                return function(t, e, i) {
                    var n = e.getComponent("tooltip"),
                        r = e.getComponent("axisPointer"),
                        u = r.get("link", !0) || [],
                        c = [];
                    a(i.getCoordinateSystems(), (function(i) {
                        if (i.axisPointerEnabled) {
                            var f = d(i.model),
                                p = t.coordSysAxesInfo[f] = {};
                            t.coordSysMap[f] = i;
                            var g = i.model.getModel("tooltip", n);
                            if (a(i.getAxes(), o(x, !1, null)), i.getTooltipAxes && n && g.get("show")) {
                                var v = "axis" === g.get("trigger"),
                                    m = "cross" === g.get("axisPointer.type"),
                                    y = i.getTooltipAxes(g.get("axisPointer.axis"));
                                (v || m) && a(y.baseAxes, o(x, !m || "cross", v)), m && a(y.otherAxes, o(x, "cross", !1))
                            }
                        }

                        function x(n, a, o) {
                            var f = o.model.getModel("axisPointer", r),
                                v = f.get("show");
                            if (v && ("auto" !== v || n || h(f))) {
                                null == a && (a = f.get("triggerTooltip"));
                                var m = (f = n ? s(o, g, r, e, n, a) : f).get("snap"),
                                    y = d(o.model),
                                    x = a || m || "category" === o.type,
                                    _ = t.axesInfo[y] = {
                                        key: y,
                                        axis: o,
                                        coordSys: i,
                                        axisPointerModel: f,
                                        triggerTooltip: a,
                                        involveSeries: x,
                                        snap: m,
                                        useHandle: h(f),
                                        seriesModels: []
                                    };
                                p[y] = _, t.seriesInvolved |= x;
                                var b = l(u, o);
                                if (null != b) {
                                    var w = c[b] || (c[b] = {
                                        axesInfo: {}
                                    });
                                    w.axesInfo[y] = _, w.mapper = u[b].mapper, _.linkGroup = w
                                }
                            }
                        }
                    }))
                }(i, t, e), i.seriesInvolved && function(t, e) {
                    e.eachSeries((function(e) {
                        var i = e.coordinateSystem,
                            n = e.get("tooltip.trigger", !0),
                            r = e.get("tooltip.show", !0);
                        i && "none" !== n && !1 !== n && "item" !== n && !1 !== r && !1 !== e.get("axisPointer.show", !0) && a(t.coordSysAxesInfo[d(i.model)], (function(t) {
                            var n = t.axis;
                            i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
                        }))
                    }), this)
                }(i, t), i
            }, e.fixValue = function(t) {
                var e = c(t);
                if (e) {
                    var i = e.axisPointerModel,
                        n = e.axis.scale,
                        r = i.option,
                        a = i.get("status"),
                        o = i.get("value");
                    null != o && (o = n.parse(o));
                    var s = h(i);
                    null == a && (r.status = s ? "show" : "hide");
                    var l = n.getExtent().slice();
                    l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
                }
            }, e.getAxisInfo = c, e.getAxisPointerModel = function(t) {
                var e = c(t);
                return e && e.axisPointerModel
            }, e.makeKey = d
        },
        b1e6: function(t, e, i) {
            (function(t) {
                var i;
                "undefined" != typeof window ? i = window.__DEV__ : void 0 !== t && (i = t.__DEV__), void 0 === i && (i = !0);
                var n = i;
                e.__DEV__ = n
            }).call(this, i("c8ba"))
        },
        b2de: function(t, e) {
            var i = {
                    "[object Function]": 1,
                    "[object RegExp]": 1,
                    "[object Date]": 1,
                    "[object Error]": 1,
                    "[object CanvasGradient]": 1,
                    "[object CanvasPattern]": 1,
                    "[object Image]": 1,
                    "[object Canvas]": 1
                },
                n = {
                    "[object Int8Array]": 1,
                    "[object Uint8Array]": 1,
                    "[object Uint8ClampedArray]": 1,
                    "[object Int16Array]": 1,
                    "[object Uint16Array]": 1,
                    "[object Int32Array]": 1,
                    "[object Uint32Array]": 1,
                    "[object Float32Array]": 1,
                    "[object Float64Array]": 1
                },
                r = Object.prototype.toString,
                a = Array.prototype,
                o = a.forEach,
                s = a.filter,
                l = a.slice,
                u = a.map,
                c = a.reduce,
                h = {};

            function d(t) {
                if (null == t || "object" != typeof t) return t;
                var e = t,
                    a = r.call(t);
                if ("[object Array]" === a) {
                    if (!C(t)) {
                        e = [];
                        for (var o = 0, s = t.length; o < s; o++) e[o] = d(t[o])
                    }
                } else if (n[a]) {
                    if (!C(t)) {
                        var l = t.constructor;
                        if (t.constructor.from) e = l.from(t);
                        else
                            for (e = new l(t.length), o = 0, s = t.length; o < s; o++) e[o] = d(t[o])
                    }
                } else if (!i[a] && !C(t) && !w(t))
                    for (var u in e = {}, t) t.hasOwnProperty(u) && (e[u] = d(t[u]));
                return e
            }

            function f(t, e, i) {
                if (!_(e) || !_(t)) return i ? d(e) : t;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = t[n],
                            a = e[n];
                        !_(a) || !_(r) || x(a) || x(r) || w(a) || w(r) || b(a) || b(r) || C(a) || C(r) ? !i && n in t || (t[n] = d(e[n])) : f(r, a, i)
                    } return t
            }

            function p(t, e, i) {
                for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
                return t
            }
            var g, v = function() {
                return h.createCanvas()
            };

            function m(t, e, i) {
                if (t && e)
                    if (t.forEach && t.forEach === o) t.forEach(e, i);
                    else if (t.length === +t.length)
                    for (var n = 0, r = t.length; n < r; n++) e.call(i, t[n], n, t);
                else
                    for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
            }

            function y(t, e) {
                var i = l.call(arguments, 2);
                return function() {
                    return t.apply(e, i.concat(l.call(arguments)))
                }
            }

            function x(t) {
                return "[object Array]" === r.call(t)
            }

            function _(t) {
                var e = typeof t;
                return "function" === e || !!t && "object" === e
            }

            function b(t) {
                return !!i[r.call(t)]
            }

            function w(t) {
                return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
            }
            h.createCanvas = function() {
                return document.createElement("canvas")
            };
            var S = "__ec_primitive__";

            function C(t) {
                return t[S]
            }

            function M(t) {
                var e = x(t);
                this.data = {};
                var i = this;

                function n(t, n) {
                    e ? i.set(t, n) : i.set(n, t)
                }
                t instanceof M ? t.each(n) : t && m(t, n)
            }
            M.prototype = {
                constructor: M,
                get: function(t) {
                    return this.data.hasOwnProperty(t) ? this.data[t] : null
                },
                set: function(t, e) {
                    return this.data[t] = e
                },
                each: function(t, e) {
                    for (var i in void 0 !== e && (t = y(t, e)), this.data) this.data.hasOwnProperty(i) && t(this.data[i], i)
                },
                removeKey: function(t) {
                    delete this.data[t]
                }
            }, e.$override = function(t, e) {
                "createCanvas" === t && (g = null), h[t] = e
            }, e.clone = d, e.merge = f, e.mergeAll = function(t, e) {
                for (var i = t[0], n = 1, r = t.length; n < r; n++) i = f(i, t[n], e);
                return i
            }, e.extend = function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }, e.defaults = p, e.createCanvas = v, e.getContext = function() {
                return g || (g = v().getContext("2d")), g
            }, e.indexOf = function(t, e) {
                if (t) {
                    if (t.indexOf) return t.indexOf(e);
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i
                }
                return -1
            }, e.inherits = function(t, e) {
                var i = t.prototype;

                function n() {}
                for (var r in n.prototype = e.prototype, t.prototype = new n, i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
                t.prototype.constructor = t, t.superClass = e
            }, e.mixin = function(t, e, i) {
                p(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, i)
            }, e.isArrayLike = function(t) {
                if (t) return "string" != typeof t && "number" == typeof t.length
            }, e.each = m, e.map = function(t, e, i) {
                if (t && e) {
                    if (t.map && t.map === u) return t.map(e, i);
                    for (var n = [], r = 0, a = t.length; r < a; r++) n.push(e.call(i, t[r], r, t));
                    return n
                }
            }, e.reduce = function(t, e, i, n) {
                if (t && e) {
                    if (t.reduce && t.reduce === c) return t.reduce(e, i, n);
                    for (var r = 0, a = t.length; r < a; r++) i = e.call(n, i, t[r], r, t);
                    return i
                }
            }, e.filter = function(t, e, i) {
                if (t && e) {
                    if (t.filter && t.filter === s) return t.filter(e, i);
                    for (var n = [], r = 0, a = t.length; r < a; r++) e.call(i, t[r], r, t) && n.push(t[r]);
                    return n
                }
            }, e.find = function(t, e, i) {
                if (t && e)
                    for (var n = 0, r = t.length; n < r; n++)
                        if (e.call(i, t[n], n, t)) return t[n]
            }, e.bind = y, e.curry = function(t) {
                var e = l.call(arguments, 1);
                return function() {
                    return t.apply(this, e.concat(l.call(arguments)))
                }
            }, e.isArray = x, e.isFunction = function(t) {
                return "function" == typeof t
            }, e.isString = function(t) {
                return "[object String]" === r.call(t)
            }, e.isObject = _, e.isBuiltInObject = b, e.isTypedArray = function(t) {
                return !!n[r.call(t)]
            }, e.isDom = w, e.eqNaN = function(t) {
                return t != t
            }, e.retrieve = function(t) {
                for (var e = 0, i = arguments.length; e < i; e++)
                    if (null != arguments[e]) return arguments[e]
            }, e.retrieve2 = function(t, e) {
                return null != t ? t : e
            }, e.retrieve3 = function(t, e, i) {
                return null != t ? t : null != e ? e : i
            }, e.slice = function() {
                return Function.call.apply(l, arguments)
            }, e.normalizeCssArray = function(t) {
                if ("number" == typeof t) return [t, t, t, t];
                var e = t.length;
                return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
            }, e.assert = function(t, e) {
                if (!t) throw new Error(e)
            }, e.trim = function(t) {
                return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }, e.setAsPrimitive = function(t) {
                t[S] = !0
            }, e.isPrimitive = C, e.createHashMap = function(t) {
                return new M(t)
            }, e.concatArray = function(t, e) {
                for (var i = new t.constructor(t.length + e.length), n = 0; n < t.length; n++) i[n] = t[n];
                var r = t.length;
                for (n = 0; n < e.length; n++) i[n + r] = e[n];
                return i
            }, e.noop = function() {}
        },
        b37e: function(t, e) {
            var i = 2311;
            t.exports = function() {
                return i++
            }
        },
        b96b: function(t, e, i) {
            var n = i("4592"),
                r = i("81e8"),
                a = ["textStyle", "color"],
                o = {
                    getTextColor: function(t) {
                        var e = this.ecModel;
                        return this.getShallow("color") || (!t && e ? e.get(a) : null)
                    },
                    getFont: function() {
                        return r.getFont({
                            fontStyle: this.getShallow("fontStyle"),
                            fontWeight: this.getShallow("fontWeight"),
                            fontSize: this.getShallow("fontSize"),
                            fontFamily: this.getShallow("fontFamily")
                        }, this.ecModel)
                    },
                    getTextRect: function(t) {
                        return n.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"))
                    }
                };
            t.exports = o
        },
        ba86: function(t, e, i) {
            var n = i("81e8"),
                r = i("e2dc").round;

            function a(t, e, i) {
                var r = t.getArea(),
                    a = t.getBaseAxis().isHorizontal(),
                    o = r.x,
                    s = r.y,
                    l = r.width,
                    u = r.height,
                    c = i.get("lineStyle.width") || 2;
                o -= c / 2, s -= c / 2, l += c, u += c;
                var h = new n.Rect({
                    shape: {
                        x: o,
                        y: s,
                        width: l,
                        height: u
                    }
                });
                return e && (h.shape[a ? "width" : "height"] = 0, n.initProps(h, {
                    shape: {
                        width: l,
                        height: u
                    }
                }, i)), h
            }

            function o(t, e, i) {
                var a = t.getArea(),
                    o = new n.Sector({
                        shape: {
                            cx: r(t.cx, 1),
                            cy: r(t.cy, 1),
                            r0: r(a.r0, 1),
                            r: r(a.r, 1),
                            startAngle: a.startAngle,
                            endAngle: a.endAngle,
                            clockwise: a.clockwise
                        }
                    });
                return e && (o.shape.endAngle = a.startAngle, n.initProps(o, {
                    shape: {
                        endAngle: a.endAngle
                    }
                }, i)), o
            }
            e.createGridClipPath = a, e.createPolarClipPath = o, e.createClipPath = function(t, e, i) {
                return t ? "polar" === t.type ? o(t, e, i) : "cartesian2d" === t.type ? a(t, e, i) : null : null
            }
        },
        bac3: function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de"),
                a = i("ace3"),
                o = i("1751");
            i("2a6d"), i("cbbd"), i("0e1c"), n.registerPreprocessor((function(t) {
                if (t) {
                    (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
                    var e = t.axisPointer.link;
                    e && !r.isArray(e) && (t.axisPointer.link = [e])
                }
            })), n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC, (function(t, e) {
                t.getComponent("axisPointer").coordSysAxesInfo = a.collect(t, e)
            })), n.registerAction({
                type: "updateAxisPointer",
                event: "updateAxisPointer",
                update: ":updateAxisPointer"
            }, o)
        },
        bb24: function(t, e) {
            var i = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
                n = {
                    color: i,
                    colorLayer: [
                        ["#37A2DA", "#ffd85c", "#fd7b5f"],
                        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
                        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], i
                    ]
                };
            t.exports = n
        },
        bb87: function(t, e, i) {
            var n = i("b2de"),
                r = i("8dab"),
                a = i("81e8"),
                o = i("ace3"),
                s = i("73a1"),
                l = i("773e"),
                u = (0, i("0127").makeInner)(),
                c = n.clone,
                h = n.bind;

            function d() {}

            function f(t, e, i, n) {
                p(u(i).lastProp, n) || (u(i).lastProp = n, e ? a.updateProps(i, n, t) : (i.stopAnimation(), i.attr(n)))
            }

            function p(t, e) {
                if (n.isObject(t) && n.isObject(e)) {
                    var i = !0;
                    return n.each(e, (function(e, n) {
                        i = i && p(t[n], e)
                    })), !!i
                }
                return t === e
            }

            function g(t, e) {
                t[e.get("label.show") ? "show" : "hide"]()
            }

            function v(t) {
                return {
                    position: t.position.slice(),
                    rotation: t.rotation || 0
                }
            }

            function m(t, e, i) {
                var n = e.get("z"),
                    r = e.get("zlevel");
                t && t.traverse((function(t) {
                    "group" !== t.type && (null != n && (t.z = n), null != r && (t.zlevel = r), t.silent = i)
                }))
            }
            d.prototype = {
                _group: null,
                _lastGraphicKey: null,
                _handle: null,
                _dragging: !1,
                _lastValue: null,
                _lastStatus: null,
                _payloadInfo: null,
                animationThreshold: 15,
                render: function(t, e, i, r) {
                    var o = e.get("value"),
                        s = e.get("status");
                    if (this._axisModel = t, this._axisPointerModel = e, this._api = i, r || this._lastValue !== o || this._lastStatus !== s) {
                        this._lastValue = o, this._lastStatus = s;
                        var l = this._group,
                            u = this._handle;
                        if (!s || "hide" === s) return l && l.hide(), void(u && u.hide());
                        l && l.show(), u && u.show();
                        var c = {};
                        this.makeElOption(c, o, t, e, i);
                        var h = c.graphicKey;
                        h !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = h;
                        var d = this._moveAnimation = this.determineAnimation(t, e);
                        if (l) {
                            var p = n.curry(f, e, d);
                            this.updatePointerEl(l, c, p, e), this.updateLabelEl(l, c, p, e)
                        } else l = this._group = new a.Group, this.createPointerEl(l, c, t, e), this.createLabelEl(l, c, t, e), i.getZr().add(l);
                        m(l, e, !0), this._renderHandle(o)
                    }
                },
                remove: function(t) {
                    this.clear(t)
                },
                dispose: function(t) {
                    this.clear(t)
                },
                determineAnimation: function(t, e) {
                    var i = e.get("animation"),
                        n = t.axis,
                        r = "category" === n.type,
                        a = e.get("snap");
                    if (!a && !r) return !1;
                    if ("auto" === i || null == i) {
                        var s = this.animationThreshold;
                        if (r && n.getBandWidth() > s) return !0;
                        if (a) {
                            var l = o.getAxisInfo(t).seriesDataCount,
                                u = n.getExtent();
                            return Math.abs(u[0] - u[1]) / l > s
                        }
                        return !1
                    }
                    return !0 === i
                },
                makeElOption: function(t, e, i, n, r) {},
                createPointerEl: function(t, e, i, n) {
                    var r = e.pointer;
                    if (r) {
                        var o = u(t).pointerEl = new a[r.type](c(e.pointer));
                        t.add(o)
                    }
                },
                createLabelEl: function(t, e, i, n) {
                    if (e.label) {
                        var r = u(t).labelEl = new a.Rect(c(e.label));
                        t.add(r), g(r, n)
                    }
                },
                updatePointerEl: function(t, e, i) {
                    var n = u(t).pointerEl;
                    n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
                        shape: e.pointer.shape
                    }))
                },
                updateLabelEl: function(t, e, i, n) {
                    var r = u(t).labelEl;
                    r && (r.setStyle(e.label.style), i(r, {
                        shape: e.label.shape,
                        position: e.label.position
                    }), g(r, n))
                },
                _renderHandle: function(t) {
                    if (!this._dragging && this.updateHandleTransform) {
                        var e, i = this._axisPointerModel,
                            r = this._api.getZr(),
                            o = this._handle,
                            u = i.getModel("handle"),
                            c = i.get("status");
                        if (!u.get("show") || !c || "hide" === c) return o && r.remove(o), void(this._handle = null);
                        this._handle || (e = !0, o = this._handle = a.createIcon(u.get("icon"), {
                            cursor: "move",
                            draggable: !0,
                            onmousemove: function(t) {
                                s.stop(t.event)
                            },
                            onmousedown: h(this._onHandleDragMove, this, 0, 0),
                            drift: h(this._onHandleDragMove, this),
                            ondragend: h(this._onHandleDragEnd, this)
                        }), r.add(o)), m(o, i, !1);
                        o.setStyle(u.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
                        var d = u.get("size");
                        n.isArray(d) || (d = [d, d]), o.attr("scale", [d[0] / 2, d[1] / 2]), l.createOrUpdate(this, "_doDispatchAxisPointer", u.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, e)
                    }
                },
                _moveHandleToValue: function(t, e) {
                    f(this._axisPointerModel, !e && this._moveAnimation, this._handle, v(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
                },
                _onHandleDragMove: function(t, e) {
                    var i = this._handle;
                    if (i) {
                        this._dragging = !0;
                        var n = this.updateHandleTransform(v(i), [t, e], this._axisModel, this._axisPointerModel);
                        this._payloadInfo = n, i.stopAnimation(), i.attr(v(n)), u(i).lastProp = null, this._doDispatchAxisPointer()
                    }
                },
                _doDispatchAxisPointer: function() {
                    if (this._handle) {
                        var t = this._payloadInfo,
                            e = this._axisModel;
                        this._api.dispatchAction({
                            type: "updateAxisPointer",
                            x: t.cursorPoint[0],
                            y: t.cursorPoint[1],
                            tooltipOption: t.tooltipOption,
                            axesInfo: [{
                                axisDim: e.axis.dim,
                                axisIndex: e.componentIndex
                            }]
                        })
                    }
                },
                _onHandleDragEnd: function(t) {
                    if (this._dragging = !1, this._handle) {
                        var e = this._axisPointerModel.get("value");
                        this._moveHandleToValue(e), this._api.dispatchAction({
                            type: "hideTip"
                        })
                    }
                },
                getHandleTransform: null,
                updateHandleTransform: null,
                clear: function(t) {
                    this._lastValue = null, this._lastStatus = null;
                    var e = t.getZr(),
                        i = this._group,
                        n = this._handle;
                    e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null)
                },
                doClear: function() {},
                buildLabel: function(t, e, i) {
                    return {
                        x: t[i = i || 0],
                        y: t[1 - i],
                        width: e[i],
                        height: e[1 - i]
                    }
                }
            }, d.prototype.constructor = d, r.enableClassExtend(d);
            var y = d;
            t.exports = y
        },
        bc82: function(t, e) {
            function i(t) {
                return t
            }

            function n(t, e, n, r, a) {
                this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = r || i, this.context = a
            }

            function r(t, e, i, n, r) {
                for (var a = 0; a < t.length; a++) {
                    var o = "_ec_" + r[n](t[a], a),
                        s = e[o];
                    null == s ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
                }
            }
            n.prototype = {
                constructor: n,
                add: function(t) {
                    return this._add = t, this
                },
                update: function(t) {
                    return this._update = t, this
                },
                remove: function(t) {
                    return this._remove = t, this
                },
                execute: function() {
                    var t = this._old,
                        e = this._new,
                        i = {},
                        n = [],
                        a = [];
                    for (r(t, {}, n, "_oldKeyGetter", this), r(e, i, a, "_newKeyGetter", this), u = 0; u < t.length; u++) {
                        var o = n[u],
                            s = i[o];
                        if (null != s) {
                            var l = s.length;
                            l ? (1 === l && (i[o] = null), s = s.shift()) : i[o] = null, this._update && this._update(s, u)
                        } else this._remove && this._remove(u)
                    }
                    for (var u = 0; u < a.length; u++)
                        if (o = a[u], i.hasOwnProperty(o)) {
                            if (null == (s = i[o])) continue;
                            if (s.length) {
                                var c = 0;
                                for (l = s.length; c < l; c++) this._add && this._add(s[c])
                            } else this._add && this._add(s)
                        }
                }
            };
            var a = n;
            t.exports = a
        },
        bdc8: function(t, e, i) {
            "use strict";
            var n = i("d83a");
            i.n(n).a
        },
        be54: function(t, e, i) {
            var n = i("73a1"),
                r = n.addEventListener,
                a = n.removeEventListener,
                o = n.normalizeEvent,
                s = n.getNativeEvent,
                l = i("b2de"),
                u = i("3efa"),
                c = i("76be"),
                h = c.domSupported,
                d = function() {
                    var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
                        e = {
                            pointerdown: 1,
                            pointerup: 1,
                            pointermove: 1,
                            pointerout: 1
                        },
                        i = l.map(t, (function(t) {
                            var i = t.replace("mouse", "pointer");
                            return e.hasOwnProperty(i) ? i : t
                        }));
                    return {
                        mouse: t,
                        touch: ["touchstart", "touchend", "touchmove"],
                        pointer: i
                    }
                }(),
                f = ["mousemove", "mouseup"],
                p = ["pointermove", "pointerup"];

            function g(t) {
                return "mousewheel" === t && c.browser.firefox ? "DOMMouseScroll" : t
            }

            function v(t) {
                var e = t.pointerType;
                return "pen" === e || "touch" === e
            }

            function m(t) {
                t && (t.zrByTouch = !0)
            }

            function y(t, e) {
                var i = !1;
                do {
                    e = e && e.parentNode
                } while (e && 9 !== e.nodeType && !(i = e === t.painterRoot));
                return i
            }

            function x(t, e) {
                this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
            }
            var _ = x.prototype;
            _.stopPropagation = _.stopImmediatePropagation = _.preventDefault = l.noop;
            var b = {
                mousedown: function(t) {
                    t = o(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t)
                },
                mousemove: function(t) {
                    t = o(this.dom, t);
                    var e = this._mayPointerCapture;
                    !e || t.zrX === e[0] && t.zrY === e[1] || I(this, !0), this.trigger("mousemove", t)
                },
                mouseup: function(t) {
                    t = o(this.dom, t), I(this, !1), this.trigger("mouseup", t)
                },
                mouseout: function(t) {
                    t = o(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");
                    var e = t.toElement || t.relatedTarget;
                    t.zrIsToLocalDOM = y(this, e), this.trigger("mouseout", t)
                },
                touchstart: function(t) {
                    m(t = o(this.dom, t)), this._lastTouchMoment = new Date, this.handler.processGesture(t, "start"), b.mousemove.call(this, t), b.mousedown.call(this, t)
                },
                touchmove: function(t) {
                    m(t = o(this.dom, t)), this.handler.processGesture(t, "change"), b.mousemove.call(this, t)
                },
                touchend: function(t) {
                    m(t = o(this.dom, t)), this.handler.processGesture(t, "end"), b.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && b.click.call(this, t)
                },
                pointerdown: function(t) {
                    b.mousedown.call(this, t)
                },
                pointermove: function(t) {
                    v(t) || b.mousemove.call(this, t)
                },
                pointerup: function(t) {
                    b.mouseup.call(this, t)
                },
                pointerout: function(t) {
                    v(t) || b.mouseout.call(this, t)
                }
            };
            l.each(["click", "mousewheel", "dblclick", "contextmenu"], (function(t) {
                b[t] = function(e) {
                    e = o(this.dom, e), this.trigger(t, e)
                }
            }));
            var w = {
                pointermove: function(t) {
                    v(t) || w.mousemove.call(this, t)
                },
                pointerup: function(t) {
                    w.mouseup.call(this, t)
                },
                mousemove: function(t) {
                    this.trigger("mousemove", t)
                },
                mouseup: function(t) {
                    var e = this._pointerCapturing;
                    I(this, !1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t))
                }
            };

            function S(t, e) {
                var i = e.domHandlers;
                c.pointerEventsSupported ? l.each(d.pointer, (function(n) {
                    M(e, n, (function(e) {
                        i[n].call(t, e)
                    }))
                })) : (c.touchEventsSupported && l.each(d.touch, (function(n) {
                    M(e, n, (function(r) {
                        i[n].call(t, r),
                            function(t) {
                                t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout((function() {
                                    t.touching = !1, t.touchTimer = null
                                }), 700)
                            }(e)
                    }))
                })), l.each(d.mouse, (function(n) {
                    M(e, n, (function(r) {
                        r = s(r), e.touching || i[n].call(t, r)
                    }))
                })))
            }

            function C(t, e) {
                function i(i) {
                    M(e, i, (function(n) {
                        n = s(n), y(t, n.target) || (n = function(t, e) {
                            return o(t.dom, new x(t, e), !0)
                        }(t, n), e.domHandlers[i].call(t, n))
                    }), {
                        capture: !0
                    })
                }
                c.pointerEventsSupported ? l.each(p, i) : c.touchEventsSupported || l.each(f, i)
            }

            function M(t, e, i, n) {
                t.mounted[e] = i, t.listenerOpts[e] = n, r(t.domTarget, g(e), i, n)
            }

            function T(t) {
                var e = t.mounted;
                for (var i in e) e.hasOwnProperty(i) && a(t.domTarget, g(i), e[i], t.listenerOpts[i]);
                t.mounted = {}
            }

            function I(t, e) {
                if (t._mayPointerCapture = null, h && t._pointerCapturing ^ e) {
                    t._pointerCapturing = e;
                    var i = t._globalHandlerScope;
                    e ? C(t, i) : T(i)
                }
            }

            function A(t, e) {
                this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = !1
            }

            function D(t, e) {
                u.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new A(t, b), h && (this._globalHandlerScope = new A(document, w)), this._pointerCapturing = !1, this._mayPointerCapture = null, S(this, this._localHandlerScope)
            }
            var k = D.prototype;
            k.dispose = function() {
                T(this._localHandlerScope), h && T(this._globalHandlerScope)
            }, k.setCursor = function(t) {
                this.dom.style && (this.dom.style.cursor = t || "default")
            }, l.mixin(D, u);
            var P = D;
            t.exports = P
        },
        be69: function(t, e, i) {
            i("f4f4"), i("1953")
        },
        be89: function(t, e, i) {
            var n = i("b2de").inherits,
                r = i("d2f8"),
                a = i("a16b");

            function o(t) {
                r.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
            }
            o.prototype.incremental = !0, o.prototype.clearDisplaybles = function() {
                this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
            }, o.prototype.addDisplayable = function(t, e) {
                e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
            }, o.prototype.addDisplayables = function(t, e) {
                e = e || !1;
                for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e)
            }, o.prototype.eachPendingDisplayable = function(t) {
                for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
                for (e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
            }, o.prototype.update = function() {
                this.updateTransform();
                for (var t = this._cursor; t < this._displayables.length; t++) {
                    var e = this._displayables[t];
                    e.parent = this, e.update(), e.parent = null
                }
                for (t = 0; t < this._temporaryDisplayables.length; t++)(e = this._temporaryDisplayables[t]).parent = this, e.update(), e.parent = null
            }, o.prototype.brush = function(t, e) {
                for (var i = this._cursor; i < this._displayables.length; i++) {
                    var n = this._displayables[i];
                    n.beforeBrush && n.beforeBrush(t), n.brush(t, i === this._cursor ? null : this._displayables[i - 1]), n.afterBrush && n.afterBrush(t)
                }
                for (this._cursor = i, i = 0; i < this._temporaryDisplayables.length; i++)(n = this._temporaryDisplayables[i]).beforeBrush && n.beforeBrush(t), n.brush(t, 0 === i ? null : this._temporaryDisplayables[i - 1]), n.afterBrush && n.afterBrush(t);
                this._temporaryDisplayables = [], this.notClear = !0
            };
            var s = [];
            o.prototype.getBoundingRect = function() {
                if (!this._rect) {
                    for (var t = new a(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                        var i = this._displayables[e],
                            n = i.getBoundingRect().clone();
                        i.needLocalTransform() && n.applyTransform(i.getLocalTransform(s)), t.union(n)
                    }
                    this._rect = t
                }
                return this._rect
            }, o.prototype.contain = function(t, e) {
                var i = this.transformCoordToLocal(t, e);
                if (this.getBoundingRect().contain(i[0], i[1]))
                    for (var n = 0; n < this._displayables.length; n++) {
                        if (this._displayables[n].contain(t, e)) return !0
                    }
                return !1
            }, n(o, r);
            var l = o;
            t.exports = l
        },
        bf4c: function(t, e, i) {
            var n = i("3caf").extend({
                type: "ring",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    r0: 0
                },
                buildPath: function(t, e) {
                    var i = e.cx,
                        n = e.cy,
                        r = 2 * Math.PI;
                    t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
                }
            });
            t.exports = n
        },
        bf51: function(t, e, i) {
            var n = i("b2de"),
                r = i("73a1").Dispatcher,
                a = i("74a8"),
                o = i("c73f"),
                s = function(t) {
                    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, r.call(this)
                };
            s.prototype = {
                constructor: s,
                addClip: function(t) {
                    this._clips.push(t)
                },
                addAnimator: function(t) {
                    t.animation = this;
                    for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
                },
                removeClip: function(t) {
                    var e = n.indexOf(this._clips, t);
                    e >= 0 && this._clips.splice(e, 1)
                },
                removeAnimator: function(t) {
                    for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
                    t.animation = null
                },
                _update: function() {
                    for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; o < n; o++) {
                        var s = i[o],
                            l = s.step(t, e);
                        l && (r.push(l), a.push(s))
                    }
                    for (o = 0; o < n;) i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
                    for (n = r.length, o = 0; o < n; o++) a[o].fire(r[o]);
                    this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
                },
                _startLoop: function() {
                    var t = this;
                    this._running = !0, a((function e() {
                        t._running && (a(e), !t._paused && t._update())
                    }))
                },
                start: function() {
                    this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
                },
                stop: function() {
                    this._running = !1
                },
                pause: function() {
                    this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
                },
                resume: function() {
                    this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
                },
                clear: function() {
                    this._clips = []
                },
                isFinished: function() {
                    return !this._clips.length
                },
                animate: function(t, e) {
                    var i = new o(t, (e = e || {}).loop, e.getter, e.setter);
                    return this.addAnimator(i), i
                }
            }, n.mixin(s, r);
            var l = s;
            t.exports = l
        },
        c10c: function(t, e, i) {
            var n = i("ebea")([
                    ["fill", "color"],
                    ["shadowBlur"],
                    ["shadowOffsetX"],
                    ["shadowOffsetY"],
                    ["opacity"],
                    ["shadowColor"]
                ]),
                r = {
                    getAreaStyle: function(t, e) {
                        return n(this, t, e)
                    }
                };
            t.exports = r
        },
        c527: function(t, e, i) {
            var n = i("b2de"),
                r = i("e2dc").parsePercent,
                a = i("2b02").isDimensionStacked,
                o = i("9554"),
                s = "__ec_stack_",
                l = "undefined" != typeof Float32Array ? Float32Array : Array;

            function u(t) {
                return t.get("stack") || s + t.seriesIndex
            }

            function c(t) {
                return t.dim + t.index
            }

            function h(t, e) {
                var i = [];
                return e.eachSeriesByType(t, (function(t) {
                    v(t) && !m(t) && i.push(t)
                })), i
            }

            function d(t) {
                var e = function(t) {
                        var e = {};
                        n.each(t, (function(t) {
                            var i = t.coordinateSystem.getBaseAxis();
                            if ("time" === i.type || "value" === i.type)
                                for (var n = t.getData(), r = i.dim + "_" + i.index, a = n.mapDimension(i.dim), o = 0, s = n.count(); o < s; ++o) {
                                    var l = n.get(a, o);
                                    e[r] ? e[r].push(l) : e[r] = [l]
                                }
                        }));
                        var i = [];
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                var a = e[r];
                                if (a) {
                                    a.sort((function(t, e) {
                                        return t - e
                                    }));
                                    for (var o = null, s = 1; s < a.length; ++s) {
                                        var l = a[s] - a[s - 1];
                                        l > 0 && (o = null === o ? l : Math.min(o, l))
                                    }
                                    i[r] = o
                                }
                            } return i
                    }(t),
                    i = [];
                return n.each(t, (function(t) {
                    var n, a = t.coordinateSystem.getBaseAxis(),
                        o = a.getExtent();
                    if ("category" === a.type) n = a.getBandWidth();
                    else if ("value" === a.type || "time" === a.type) {
                        var s = a.dim + "_" + a.index,
                            l = e[s],
                            h = Math.abs(o[1] - o[0]),
                            d = a.scale.getExtent(),
                            f = Math.abs(d[1] - d[0]);
                        n = l ? h / f * l : h
                    } else {
                        var p = t.getData();
                        n = Math.abs(o[1] - o[0]) / p.count()
                    }
                    var g = r(t.get("barWidth"), n),
                        v = r(t.get("barMaxWidth"), n),
                        m = r(t.get("barMinWidth") || 1, n),
                        y = t.get("barGap"),
                        x = t.get("barCategoryGap");
                    i.push({
                        bandWidth: n,
                        barWidth: g,
                        barMaxWidth: v,
                        barMinWidth: m,
                        barGap: y,
                        barCategoryGap: x,
                        axisKey: c(a),
                        stackId: u(t)
                    })
                })), f(i)
            }

            function f(t) {
                var e = {};
                n.each(t, (function(t, i) {
                    var n = t.axisKey,
                        r = t.bandWidth,
                        a = e[n] || {
                            bandWidth: r,
                            remainedWidth: r,
                            autoWidthCount: 0,
                            categoryGap: "20%",
                            gap: "30%",
                            stacks: {}
                        },
                        o = a.stacks;
                    e[n] = a;
                    var s = t.stackId;
                    o[s] || a.autoWidthCount++, o[s] = o[s] || {
                        width: 0,
                        maxWidth: 0
                    };
                    var l = t.barWidth;
                    l && !o[s].width && (o[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);
                    var u = t.barMaxWidth;
                    u && (o[s].maxWidth = u);
                    var c = t.barMinWidth;
                    c && (o[s].minWidth = c);
                    var h = t.barGap;
                    null != h && (a.gap = h);
                    var d = t.barCategoryGap;
                    null != d && (a.categoryGap = d)
                }));
                var i = {};
                return n.each(e, (function(t, e) {
                    i[e] = {};
                    var a = t.stacks,
                        o = t.bandWidth,
                        s = r(t.categoryGap, o),
                        l = r(t.gap, 1),
                        u = t.remainedWidth,
                        c = t.autoWidthCount,
                        h = (u - s) / (c + (c - 1) * l);
                    h = Math.max(h, 0), n.each(a, (function(t) {
                        var e = t.maxWidth,
                            i = t.minWidth;
                        if (t.width) n = t.width, e && (n = Math.min(n, e)), i && (n = Math.max(n, i)), t.width = n, u -= n + l * n, c--;
                        else {
                            var n = h;
                            e && e < n && (n = Math.min(e, u)), i && i > n && (n = i), n !== h && (t.width = n, u -= n + l * n, c--)
                        }
                    })), h = (u - s) / (c + (c - 1) * l), h = Math.max(h, 0);
                    var d, f = 0;
                    n.each(a, (function(t, e) {
                        t.width || (t.width = h), d = t, f += t.width * (1 + l)
                    })), d && (f -= d.width * l);
                    var p = -f / 2;
                    n.each(a, (function(t, n) {
                        i[e][n] = i[e][n] || {
                            bandWidth: o,
                            offset: p,
                            width: t.width
                        }, p += t.width * (1 + l)
                    }))
                })), i
            }

            function p(t, e, i) {
                if (t && e) {
                    var n = t[c(e)];
                    return null != n && null != i && (n = n[u(i)]), n
                }
            }
            var g = {
                seriesType: "bar",
                plan: o(),
                reset: function(t) {
                    if (v(t) && m(t)) {
                        var e = t.getData(),
                            i = t.coordinateSystem,
                            n = i.getBaseAxis(),
                            r = i.getOtherAxis(n),
                            a = e.mapDimension(r.dim),
                            o = e.mapDimension(n.dim),
                            s = r.isHorizontal(),
                            u = s ? 0 : 1,
                            c = p(d([t]), n, t).width;
                        return c > .5 || (c = .5), {
                            progress: function(t, e) {
                                var h, d = t.count,
                                    f = new l(2 * d),
                                    p = new l(d),
                                    g = [],
                                    v = [],
                                    m = 0,
                                    x = 0;
                                for (; null != (h = t.next());) v[u] = e.get(a, h), v[1 - u] = e.get(o, h), g = i.dataToPoint(v, null, g), f[m++] = g[0], f[m++] = g[1], p[x++] = h;
                                e.setLayout({
                                    largePoints: f,
                                    largeDataIndices: p,
                                    barWidth: c,
                                    valueAxisStart: y(n, r, !1),
                                    valueAxisHorizontal: s
                                })
                            }
                        }
                    }
                }
            };

            function v(t) {
                return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
            }

            function m(t) {
                return t.pipelineContext && t.pipelineContext.large
            }

            function y(t, e, i) {
                return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0))
            }
            e.getLayoutOnAxis = function(t) {
                var e = [],
                    i = t.axis,
                    r = "axis0";
                if ("category" === i.type) {
                    for (var a = i.getBandWidth(), o = 0; o < t.count; o++) e.push(n.defaults({
                        bandWidth: a,
                        axisKey: r,
                        stackId: s + o
                    }, t));
                    var l = f(e),
                        u = [];
                    for (o = 0; o < t.count; o++) {
                        var c = l[r][s + o];
                        c.offsetCenter = c.offset + c.width / 2, u.push(c)
                    }
                    return u
                }
            }, e.prepareLayoutBarSeries = h, e.makeColumnLayout = d, e.retrieveColumnLayout = p, e.layout = function(t, e) {
                var i = h(t, e),
                    r = d(i),
                    o = {},
                    s = {};
                n.each(i, (function(t) {
                    var e = t.getData(),
                        i = t.coordinateSystem,
                        n = i.getBaseAxis(),
                        l = u(t),
                        h = r[c(n)][l],
                        d = h.offset,
                        f = h.width,
                        p = i.getOtherAxis(n),
                        g = t.get("barMinHeight") || 0;
                    o[l] = o[l] || [], s[l] = s[l] || [], e.setLayout({
                        bandWidth: h.bandWidth,
                        offset: d,
                        size: f
                    });
                    for (var v = e.mapDimension(p.dim), m = e.mapDimension(n.dim), x = a(e, v), _ = p.isHorizontal(), b = y(n, p, x), w = 0, S = e.count(); w < S; w++) {
                        var C = e.get(v, w),
                            M = e.get(m, w);
                        if (!isNaN(C) && !isNaN(M)) {
                            var T, I, A, D, k = C >= 0 ? "p" : "n",
                                P = b;
                            if (x && (o[l][M] || (o[l][M] = {
                                    p: b,
                                    n: b
                                }), P = o[l][M][k]), _) {
                                var O = i.dataToPoint([C, M]);
                                T = P, I = O[1] + d, A = O[0] - b, D = f, Math.abs(A) < g && (A = (A < 0 ? -1 : 1) * g), x && (o[l][M][k] += A)
                            } else T = (O = i.dataToPoint([M, C]))[0] + d, I = P, A = f, D = O[1] - b, Math.abs(D) < g && (D = (D <= 0 ? -1 : 1) * g), x && (o[l][M][k] += D);
                            e.setItemLayout(w, {
                                x: T,
                                y: I,
                                width: A,
                                height: D
                            })
                        }
                    }
                }), this)
            }, e.largeLayout = g
        },
        c58a: function(t, e, i) {
            var n = i("b2de"),
                r = i("81e8"),
                a = Math.PI;
            t.exports = function(t, e) {
                e = e || {}, n.defaults(e, {
                    text: "loading",
                    color: "#c23531",
                    textColor: "#000",
                    maskColor: "rgba(255, 255, 255, 0.8)",
                    zlevel: 0
                });
                var i = new r.Rect({
                        style: {
                            fill: e.maskColor
                        },
                        zlevel: e.zlevel,
                        z: 1e4
                    }),
                    o = new r.Arc({
                        shape: {
                            startAngle: -a / 2,
                            endAngle: -a / 2 + .1,
                            r: 10
                        },
                        style: {
                            stroke: e.color,
                            lineCap: "round",
                            lineWidth: 5
                        },
                        zlevel: e.zlevel,
                        z: 10001
                    }),
                    s = new r.Rect({
                        style: {
                            fill: "none",
                            text: e.text,
                            textPosition: "right",
                            textDistance: 10,
                            textFill: e.textColor
                        },
                        zlevel: e.zlevel,
                        z: 10001
                    });
                o.animateShape(!0).when(1e3, {
                    endAngle: 3 * a / 2
                }).start("circularInOut"), o.animateShape(!0).when(1e3, {
                    startAngle: 3 * a / 2
                }).delay(300).start("circularInOut");
                var l = new r.Group;
                return l.add(o), l.add(s), l.add(i), l.resize = function() {
                    var e = t.getWidth() / 2,
                        n = t.getHeight() / 2;
                    o.setShape({
                        cx: e,
                        cy: n
                    });
                    var r = o.shape.r;
                    s.setShape({
                        x: e - r,
                        y: n - r,
                        width: 2 * r,
                        height: 2 * r
                    }), i.setShape({
                        x: 0,
                        y: 0,
                        width: t.getWidth(),
                        height: t.getHeight()
                    })
                }, l.resize(), l
            }
        },
        c6e5: function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = n.each,
                a = n.filter,
                o = n.map,
                s = n.isArray,
                l = n.indexOf,
                u = n.isObject,
                c = n.isString,
                h = n.createHashMap,
                d = n.assert,
                f = n.clone,
                p = n.merge,
                g = n.extend,
                v = n.mixin,
                m = i("0127"),
                y = i("e62d0"),
                x = i("3c57"),
                _ = i("30fe"),
                b = i("3b8a"),
                w = i("7d81").resetSourceDefaulter,
                S = "\0_ec_inner",
                C = y.extend({
                    init: function(t, e, i, n) {
                        i = i || {}, this.option = null, this._theme = new y(i), this._optionManager = n
                    },
                    setOption: function(t, e) {
                        d(!(S in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
                    },
                    resetOption: function(t) {
                        var e = !1,
                            i = this._optionManager;
                        if (!t || "recreate" === t) {
                            var n = i.mountOption("recreate" === t);
                            this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : M.call(this, n), e = !0
                        }
                        if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                            var a = i.getTimelineOption(this);
                            a && (this.mergeOption(a), e = !0)
                        }
                        if (!t || "recreate" === t || "media" === t) {
                            var o = i.getMediaOption(this, this._api);
                            o.length && r(o, (function(t) {
                                this.mergeOption(t, e = !0)
                            }), this)
                        }
                        return e
                    },
                    mergeOption: function(t) {
                        var e = this.option,
                            i = this._componentsMap,
                            n = [];
                        w(this), r(t, (function(t, i) {
                            null != t && (x.hasClass(i) ? i && n.push(i) : e[i] = null == e[i] ? f(t) : p(e[i], t, !0))
                        })), x.topologicalTravel(n, x.getAllClassMainTypes(), (function(n, a) {
                            var o = m.normalizeToArray(t[n]),
                                s = m.mappingToExists(i.get(n), o);
                            m.makeIdAndName(s), r(s, (function(t, e) {
                                var i = t.option;
                                u(i) && (t.keyInfo.mainType = n, t.keyInfo.subType = function(t, e, i) {
                                    return e.type ? e.type : i ? i.subType : x.determineSubType(t, e)
                                }(n, i, t.exist))
                            }));
                            var l = T(i, a);
                            e[n] = [], i.set(n, []), r(s, (function(t, r) {
                                var a = t.exist,
                                    o = t.option;
                                if (d(u(o) || a, "Empty component definition"), o) {
                                    var s = x.getClass(n, t.keyInfo.subType, !0);
                                    if (a && a.constructor === s) a.name = t.keyInfo.name, a.mergeOption(o, this), a.optionUpdated(o, !1);
                                    else {
                                        var c = g({
                                            dependentModels: l,
                                            componentIndex: r
                                        }, t.keyInfo);
                                        a = new s(o, this, this, c), g(a, c), a.init(o, this, this, c), a.optionUpdated(null, !0)
                                    }
                                } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                                i.get(n)[r] = a, e[n][r] = a.option
                            }), this), "series" === n && I(this, i.get("series"))
                        }), this), this._seriesIndicesMap = h(this._seriesIndices = this._seriesIndices || [])
                    },
                    getOption: function() {
                        var t = f(this.option);
                        return r(t, (function(e, i) {
                            if (x.hasClass(i)) {
                                for (var n = (e = m.normalizeToArray(e)).length - 1; n >= 0; n--) m.isIdInner(e[n]) && e.splice(n, 1);
                                t[i] = e
                            }
                        })), delete t[S], t
                    },
                    getTheme: function() {
                        return this._theme
                    },
                    getComponent: function(t, e) {
                        var i = this._componentsMap.get(t);
                        if (i) return i[e || 0]
                    },
                    queryComponents: function(t) {
                        var e = t.mainType;
                        if (!e) return [];
                        var i, n = t.index,
                            r = t.id,
                            u = t.name,
                            c = this._componentsMap.get(e);
                        if (!c || !c.length) return [];
                        if (null != n) s(n) || (n = [n]), i = a(o(n, (function(t) {
                            return c[t]
                        })), (function(t) {
                            return !!t
                        }));
                        else if (null != r) {
                            var h = s(r);
                            i = a(c, (function(t) {
                                return h && l(r, t.id) >= 0 || !h && t.id === r
                            }))
                        } else if (null != u) {
                            var d = s(u);
                            i = a(c, (function(t) {
                                return d && l(u, t.name) >= 0 || !d && t.name === u
                            }))
                        } else i = c.slice();
                        return A(i, t)
                    },
                    findComponents: function(t) {
                        var e = t.query,
                            i = t.mainType,
                            n = function(t) {
                                var e = i + "Index",
                                    n = i + "Id",
                                    r = i + "Name";
                                return !t || null == t[e] && null == t[n] && null == t[r] ? null : {
                                    mainType: i,
                                    index: t[e],
                                    id: t[n],
                                    name: t[r]
                                }
                            }(e);
                        return function(e) {
                            return t.filter ? a(e, t.filter) : e
                        }(A(n ? this.queryComponents(n) : this._componentsMap.get(i), t))
                    },
                    eachComponent: function(t, e, i) {
                        var n = this._componentsMap;
                        if ("function" == typeof t) i = e, e = t, n.each((function(t, n) {
                            r(t, (function(t, r) {
                                e.call(i, n, t, r)
                            }))
                        }));
                        else if (c(t)) r(n.get(t), e, i);
                        else if (u(t)) {
                            var a = this.findComponents(t);
                            r(a, e, i)
                        }
                    },
                    getSeriesByName: function(t) {
                        var e = this._componentsMap.get("series");
                        return a(e, (function(e) {
                            return e.name === t
                        }))
                    },
                    getSeriesByIndex: function(t) {
                        return this._componentsMap.get("series")[t]
                    },
                    getSeriesByType: function(t) {
                        var e = this._componentsMap.get("series");
                        return a(e, (function(e) {
                            return e.subType === t
                        }))
                    },
                    getSeries: function() {
                        return this._componentsMap.get("series").slice()
                    },
                    getSeriesCount: function() {
                        return this._componentsMap.get("series").length
                    },
                    eachSeries: function(t, e) {
                        r(this._seriesIndices, (function(i) {
                            var n = this._componentsMap.get("series")[i];
                            t.call(e, n, i)
                        }), this)
                    },
                    eachRawSeries: function(t, e) {
                        r(this._componentsMap.get("series"), t, e)
                    },
                    eachSeriesByType: function(t, e, i) {
                        r(this._seriesIndices, (function(n) {
                            var r = this._componentsMap.get("series")[n];
                            r.subType === t && e.call(i, r, n)
                        }), this)
                    },
                    eachRawSeriesByType: function(t, e, i) {
                        return r(this.getSeriesByType(t), e, i)
                    },
                    isSeriesFiltered: function(t) {
                        return null == this._seriesIndicesMap.get(t.componentIndex)
                    },
                    getCurrentSeriesIndices: function() {
                        return (this._seriesIndices || []).slice()
                    },
                    filterSeries: function(t, e) {
                        I(this, a(this._componentsMap.get("series"), t, e))
                    },
                    restoreData: function(t) {
                        var e = this._componentsMap;
                        I(this, e.get("series"));
                        var i = [];
                        e.each((function(t, e) {
                            i.push(e)
                        })), x.topologicalTravel(i, x.getAllClassMainTypes(), (function(i, n) {
                            r(e.get(i), (function(e) {
                                ("series" !== i || ! function(t, e) {
                                    if (e) {
                                        var i = e.seiresIndex,
                                            n = e.seriesId,
                                            r = e.seriesName;
                                        return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r
                                    }
                                }(e, t)) && e.restoreData()
                            }))
                        }))
                    }
                });

            function M(t) {
                t = t, this.option = {}, this.option[S] = 1, this._componentsMap = h({
                        series: []
                    }), this._seriesIndices, this._seriesIndicesMap,
                    function(t, e) {
                        var i = t.color && !t.colorLayer;
                        r(e, (function(e, n) {
                            "colorLayer" === n && i || x.hasClass(n) || ("object" == typeof e ? t[n] = t[n] ? p(t[n], e, !1) : f(e) : null == t[n] && (t[n] = e))
                        }))
                    }(t, this._theme.option), p(t, _, !1), this.mergeOption(t)
            }

            function T(t, e) {
                s(e) || (e = e ? [e] : []);
                var i = {};
                return r(e, (function(e) {
                    i[e] = (t.get(e) || []).slice()
                })), i
            }

            function I(t, e) {
                t._seriesIndicesMap = h(t._seriesIndices = o(e, (function(t) {
                    return t.componentIndex
                })) || [])
            }

            function A(t, e) {
                return e.hasOwnProperty("subType") ? a(t, (function(t) {
                    return t.subType === e.subType
                })) : t
            }
            v(C, b);
            var D = C;
            t.exports = D
        },
        c73f: function(t, e, i) {
            var n = i("6ca2"),
                r = i("cb89"),
                a = i("b2de").isArrayLike,
                o = Array.prototype.slice;

            function s(t, e) {
                return t[e]
            }

            function l(t, e, i) {
                t[e] = i
            }

            function u(t, e, i) {
                return (e - t) * i + t
            }

            function c(t, e, i) {
                return i > .5 ? e : t
            }

            function h(t, e, i, n, r) {
                var a = t.length;
                if (1 === r)
                    for (var o = 0; o < a; o++) n[o] = u(t[o], e[o], i);
                else {
                    var s = a && t[0].length;
                    for (o = 0; o < a; o++)
                        for (var l = 0; l < s; l++) n[o][l] = u(t[o][l], e[o][l], i)
                }
            }

            function d(t, e, i) {
                var n = t.length,
                    r = e.length;
                if (n !== r)
                    if (n > r) t.length = r;
                    else
                        for (var a = n; a < r; a++) t.push(1 === i ? e[a] : o.call(e[a]));
                var s = t[0] && t[0].length;
                for (a = 0; a < t.length; a++)
                    if (1 === i) isNaN(t[a]) && (t[a] = e[a]);
                    else
                        for (var l = 0; l < s; l++) isNaN(t[a][l]) && (t[a][l] = e[a][l])
            }

            function f(t, e, i) {
                if (t === e) return !0;
                var n = t.length;
                if (n !== e.length) return !1;
                if (1 === i) {
                    for (var r = 0; r < n; r++)
                        if (t[r] !== e[r]) return !1
                } else {
                    var a = t[0].length;
                    for (r = 0; r < n; r++)
                        for (var o = 0; o < a; o++)
                            if (t[r][o] !== e[r][o]) return !1
                }
                return !0
            }

            function p(t, e, i, n, r, a, o, s, l) {
                var u = t.length;
                if (1 === l)
                    for (var c = 0; c < u; c++) s[c] = g(t[c], e[c], i[c], n[c], r, a, o);
                else {
                    var h = t[0].length;
                    for (c = 0; c < u; c++)
                        for (var d = 0; d < h; d++) s[c][d] = g(t[c][d], e[c][d], i[c][d], n[c][d], r, a, o)
                }
            }

            function g(t, e, i, n, r, a, o) {
                var s = .5 * (i - t),
                    l = .5 * (n - e);
                return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
            }

            function v(t) {
                if (a(t)) {
                    var e = t.length;
                    if (a(t[0])) {
                        for (var i = [], n = 0; n < e; n++) i.push(o.call(t[n]));
                        return i
                    }
                    return o.call(t)
                }
                return t
            }

            function m(t) {
                return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
            }

            function y(t, e, i, o, s, l) {
                var v = t._getter,
                    y = t._setter,
                    x = "spline" === e,
                    _ = o.length;
                if (_) {
                    var b, w = o[0].value,
                        S = a(w),
                        C = !1,
                        M = !1,
                        T = S ? function(t) {
                            var e = t[t.length - 1].value;
                            return a(e && e[0]) ? 2 : 1
                        }(o) : 0;
                    o.sort((function(t, e) {
                        return t.time - e.time
                    })), b = o[_ - 1].time;
                    for (var I = [], A = [], D = o[0].value, k = !0, P = 0; P < _; P++) {
                        I.push(o[P].time / b);
                        var O = o[P].value;
                        if (S && f(O, D, T) || !S && O === D || (k = !1), D = O, "string" == typeof O) {
                            var L = r.parse(O);
                            L ? (O = L, C = !0) : M = !0
                        }
                        A.push(O)
                    }
                    if (l || !k) {
                        var E = A[_ - 1];
                        for (P = 0; P < _ - 1; P++) S ? d(A[P], E, T) : !isNaN(A[P]) || isNaN(E) || M || C || (A[P] = E);
                        S && d(v(t._target, s), E, T);
                        var R, N, B, z, F, V = 0,
                            H = 0;
                        if (C) var W = [0, 0, 0, 0];
                        var G = new n({
                            target: t._target,
                            life: b,
                            loop: t._loop,
                            delay: t._delay,
                            onframe: function(t, e) {
                                var i;
                                if (e < 0) i = 0;
                                else if (e < H) {
                                    for (i = Math.min(V + 1, _ - 1); i >= 0 && !(I[i] <= e); i--);
                                    i = Math.min(i, _ - 2)
                                } else {
                                    for (i = V; i < _ && !(I[i] > e); i++);
                                    i = Math.min(i - 1, _ - 2)
                                }
                                V = i, H = e;
                                var n = I[i + 1] - I[i];
                                if (0 !== n)
                                    if (R = (e - I[i]) / n, x)
                                        if (B = A[i], N = A[0 === i ? i : i - 1], z = A[i > _ - 2 ? _ - 1 : i + 1], F = A[i > _ - 3 ? _ - 1 : i + 2], S) p(N, B, z, F, R, R * R, R * R * R, v(t, s), T);
                                        else {
                                            if (C) r = p(N, B, z, F, R, R * R, R * R * R, W, 1), r = m(W);
                                            else {
                                                if (M) return c(B, z, R);
                                                r = g(N, B, z, F, R, R * R, R * R * R)
                                            }
                                            y(t, s, r)
                                        }
                                else if (S) h(A[i], A[i + 1], R, v(t, s), T);
                                else {
                                    var r;
                                    if (C) h(A[i], A[i + 1], R, W, 1), r = m(W);
                                    else {
                                        if (M) return c(A[i], A[i + 1], R);
                                        r = u(A[i], A[i + 1], R)
                                    }
                                    y(t, s, r)
                                }
                            },
                            ondestroy: i
                        });
                        return e && "spline" !== e && (G.easing = e), G
                    }
                }
            }
            var x = function(t, e, i, n) {
                this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || s, this._setter = n || l, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
            x.prototype = {
                when: function(t, e) {
                    var i = this._tracks;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (!i[n]) {
                                i[n] = [];
                                var r = this._getter(this._target, n);
                                if (null == r) continue;
                                0 !== t && i[n].push({
                                    time: 0,
                                    value: v(r)
                                })
                            }
                            i[n].push({
                                time: t,
                                value: e[n]
                            })
                        } return this
                },
                during: function(t) {
                    return this._onframeList.push(t), this
                },
                pause: function() {
                    for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
                    this._paused = !0
                },
                resume: function() {
                    for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
                    this._paused = !1
                },
                isPaused: function() {
                    return !!this._paused
                },
                _doneCallback: function() {
                    this._tracks = {}, this._clipList.length = 0;
                    for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this)
                },
                start: function(t, e) {
                    var i, n = this,
                        r = 0,
                        a = function() {
                            --r || n._doneCallback()
                        };
                    for (var o in this._tracks)
                        if (this._tracks.hasOwnProperty(o)) {
                            var s = y(this, t, a, this._tracks[o], o, e);
                            s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s)
                        } if (i) {
                        var l = i.onframe;
                        i.onframe = function(t, e) {
                            l(t, e);
                            for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e)
                        }
                    }
                    return r || this._doneCallback(), this
                },
                stop: function(t) {
                    for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                        var r = e[n];
                        t && r.onframe(this._target, 1), i && i.removeClip(r)
                    }
                    e.length = 0
                },
                delay: function(t) {
                    return this._delay = t, this
                },
                done: function(t) {
                    return t && this._doneList.push(t), this
                },
                getClips: function() {
                    return this._clipList
                }
            };
            var _ = x;
            t.exports = _
        },
        c817: function(t, e) {
            t.exports = function(t) {
                return {
                    seriesType: t,
                    reset: function(t, e) {
                        var i = e.findComponents({
                            mainType: "legend"
                        });
                        if (i && i.length) {
                            var n = t.getData();
                            n.filterSelf((function(t) {
                                for (var e = n.getName(t), r = 0; r < i.length; r++)
                                    if (!i[r].isSelected(e)) return !1;
                                return !0
                            }))
                        }
                    }
                }
            }
        },
        cb05: function(t, e) {
            var i = 2 * Math.PI;
            e.normalizeRadian = function(t) {
                return (t %= i) < 0 && (t += i), t
            }
        },
        cb89: function(t, e, i) {
            var n = i("4ff5"),
                r = {
                    transparent: [0, 0, 0, 0],
                    aliceblue: [240, 248, 255, 1],
                    antiquewhite: [250, 235, 215, 1],
                    aqua: [0, 255, 255, 1],
                    aquamarine: [127, 255, 212, 1],
                    azure: [240, 255, 255, 1],
                    beige: [245, 245, 220, 1],
                    bisque: [255, 228, 196, 1],
                    black: [0, 0, 0, 1],
                    blanchedalmond: [255, 235, 205, 1],
                    blue: [0, 0, 255, 1],
                    blueviolet: [138, 43, 226, 1],
                    brown: [165, 42, 42, 1],
                    burlywood: [222, 184, 135, 1],
                    cadetblue: [95, 158, 160, 1],
                    chartreuse: [127, 255, 0, 1],
                    chocolate: [210, 105, 30, 1],
                    coral: [255, 127, 80, 1],
                    cornflowerblue: [100, 149, 237, 1],
                    cornsilk: [255, 248, 220, 1],
                    crimson: [220, 20, 60, 1],
                    cyan: [0, 255, 255, 1],
                    darkblue: [0, 0, 139, 1],
                    darkcyan: [0, 139, 139, 1],
                    darkgoldenrod: [184, 134, 11, 1],
                    darkgray: [169, 169, 169, 1],
                    darkgreen: [0, 100, 0, 1],
                    darkgrey: [169, 169, 169, 1],
                    darkkhaki: [189, 183, 107, 1],
                    darkmagenta: [139, 0, 139, 1],
                    darkolivegreen: [85, 107, 47, 1],
                    darkorange: [255, 140, 0, 1],
                    darkorchid: [153, 50, 204, 1],
                    darkred: [139, 0, 0, 1],
                    darksalmon: [233, 150, 122, 1],
                    darkseagreen: [143, 188, 143, 1],
                    darkslateblue: [72, 61, 139, 1],
                    darkslategray: [47, 79, 79, 1],
                    darkslategrey: [47, 79, 79, 1],
                    darkturquoise: [0, 206, 209, 1],
                    darkviolet: [148, 0, 211, 1],
                    deeppink: [255, 20, 147, 1],
                    deepskyblue: [0, 191, 255, 1],
                    dimgray: [105, 105, 105, 1],
                    dimgrey: [105, 105, 105, 1],
                    dodgerblue: [30, 144, 255, 1],
                    firebrick: [178, 34, 34, 1],
                    floralwhite: [255, 250, 240, 1],
                    forestgreen: [34, 139, 34, 1],
                    fuchsia: [255, 0, 255, 1],
                    gainsboro: [220, 220, 220, 1],
                    ghostwhite: [248, 248, 255, 1],
                    gold: [255, 215, 0, 1],
                    goldenrod: [218, 165, 32, 1],
                    gray: [128, 128, 128, 1],
                    green: [0, 128, 0, 1],
                    greenyellow: [173, 255, 47, 1],
                    grey: [128, 128, 128, 1],
                    honeydew: [240, 255, 240, 1],
                    hotpink: [255, 105, 180, 1],
                    indianred: [205, 92, 92, 1],
                    indigo: [75, 0, 130, 1],
                    ivory: [255, 255, 240, 1],
                    khaki: [240, 230, 140, 1],
                    lavender: [230, 230, 250, 1],
                    lavenderblush: [255, 240, 245, 1],
                    lawngreen: [124, 252, 0, 1],
                    lemonchiffon: [255, 250, 205, 1],
                    lightblue: [173, 216, 230, 1],
                    lightcoral: [240, 128, 128, 1],
                    lightcyan: [224, 255, 255, 1],
                    lightgoldenrodyellow: [250, 250, 210, 1],
                    lightgray: [211, 211, 211, 1],
                    lightgreen: [144, 238, 144, 1],
                    lightgrey: [211, 211, 211, 1],
                    lightpink: [255, 182, 193, 1],
                    lightsalmon: [255, 160, 122, 1],
                    lightseagreen: [32, 178, 170, 1],
                    lightskyblue: [135, 206, 250, 1],
                    lightslategray: [119, 136, 153, 1],
                    lightslategrey: [119, 136, 153, 1],
                    lightsteelblue: [176, 196, 222, 1],
                    lightyellow: [255, 255, 224, 1],
                    lime: [0, 255, 0, 1],
                    limegreen: [50, 205, 50, 1],
                    linen: [250, 240, 230, 1],
                    magenta: [255, 0, 255, 1],
                    maroon: [128, 0, 0, 1],
                    mediumaquamarine: [102, 205, 170, 1],
                    mediumblue: [0, 0, 205, 1],
                    mediumorchid: [186, 85, 211, 1],
                    mediumpurple: [147, 112, 219, 1],
                    mediumseagreen: [60, 179, 113, 1],
                    mediumslateblue: [123, 104, 238, 1],
                    mediumspringgreen: [0, 250, 154, 1],
                    mediumturquoise: [72, 209, 204, 1],
                    mediumvioletred: [199, 21, 133, 1],
                    midnightblue: [25, 25, 112, 1],
                    mintcream: [245, 255, 250, 1],
                    mistyrose: [255, 228, 225, 1],
                    moccasin: [255, 228, 181, 1],
                    navajowhite: [255, 222, 173, 1],
                    navy: [0, 0, 128, 1],
                    oldlace: [253, 245, 230, 1],
                    olive: [128, 128, 0, 1],
                    olivedrab: [107, 142, 35, 1],
                    orange: [255, 165, 0, 1],
                    orangered: [255, 69, 0, 1],
                    orchid: [218, 112, 214, 1],
                    palegoldenrod: [238, 232, 170, 1],
                    palegreen: [152, 251, 152, 1],
                    paleturquoise: [175, 238, 238, 1],
                    palevioletred: [219, 112, 147, 1],
                    papayawhip: [255, 239, 213, 1],
                    peachpuff: [255, 218, 185, 1],
                    peru: [205, 133, 63, 1],
                    pink: [255, 192, 203, 1],
                    plum: [221, 160, 221, 1],
                    powderblue: [176, 224, 230, 1],
                    purple: [128, 0, 128, 1],
                    red: [255, 0, 0, 1],
                    rosybrown: [188, 143, 143, 1],
                    royalblue: [65, 105, 225, 1],
                    saddlebrown: [139, 69, 19, 1],
                    salmon: [250, 128, 114, 1],
                    sandybrown: [244, 164, 96, 1],
                    seagreen: [46, 139, 87, 1],
                    seashell: [255, 245, 238, 1],
                    sienna: [160, 82, 45, 1],
                    silver: [192, 192, 192, 1],
                    skyblue: [135, 206, 235, 1],
                    slateblue: [106, 90, 205, 1],
                    slategray: [112, 128, 144, 1],
                    slategrey: [112, 128, 144, 1],
                    snow: [255, 250, 250, 1],
                    springgreen: [0, 255, 127, 1],
                    steelblue: [70, 130, 180, 1],
                    tan: [210, 180, 140, 1],
                    teal: [0, 128, 128, 1],
                    thistle: [216, 191, 216, 1],
                    tomato: [255, 99, 71, 1],
                    turquoise: [64, 224, 208, 1],
                    violet: [238, 130, 238, 1],
                    wheat: [245, 222, 179, 1],
                    white: [255, 255, 255, 1],
                    whitesmoke: [245, 245, 245, 1],
                    yellow: [255, 255, 0, 1],
                    yellowgreen: [154, 205, 50, 1]
                };

            function a(t) {
                return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
            }

            function o(t) {
                return t < 0 ? 0 : t > 1 ? 1 : t
            }

            function s(t) {
                return t.length && "%" === t.charAt(t.length - 1) ? a(parseFloat(t) / 100 * 255) : a(parseInt(t, 10))
            }

            function l(t) {
                return t.length && "%" === t.charAt(t.length - 1) ? o(parseFloat(t) / 100) : o(parseFloat(t))
            }

            function u(t, e, i) {
                return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function c(t, e, i) {
                return t + (e - t) * i
            }

            function h(t, e, i, n, r) {
                return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t
            }

            function d(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
            }
            var f = new n(20),
                p = null;

            function g(t, e) {
                p && d(p, e), p = f.put(t, p || e.slice())
            }

            function v(t, e) {
                if (t) {
                    e = e || [];
                    var i = f.get(t);
                    if (i) return d(e, i);
                    var n = (t += "").replace(/ /g, "").toLowerCase();
                    if (n in r) return d(e, r[n]), g(t, e), e;
                    if ("#" !== n.charAt(0)) {
                        var a = n.indexOf("("),
                            o = n.indexOf(")");
                        if (-1 !== a && o + 1 === n.length) {
                            var u = n.substr(0, a),
                                c = n.substr(a + 1, o - (a + 1)).split(","),
                                p = 1;
                            switch (u) {
                                case "rgba":
                                    if (4 !== c.length) return void h(e, 0, 0, 0, 1);
                                    p = l(c.pop());
                                case "rgb":
                                    return 3 !== c.length ? void h(e, 0, 0, 0, 1) : (h(e, s(c[0]), s(c[1]), s(c[2]), p), g(t, e), e);
                                case "hsla":
                                    return 4 !== c.length ? void h(e, 0, 0, 0, 1) : (c[3] = l(c[3]), m(c, e), g(t, e), e);
                                case "hsl":
                                    return 3 !== c.length ? void h(e, 0, 0, 0, 1) : (m(c, e), g(t, e), e);
                                default:
                                    return
                            }
                        }
                        h(e, 0, 0, 0, 1)
                    } else {
                        if (4 === n.length) {
                            var v = parseInt(n.substr(1), 16);
                            return v >= 0 && v <= 4095 ? (h(e, (3840 & v) >> 4 | (3840 & v) >> 8, 240 & v | (240 & v) >> 4, 15 & v | (15 & v) << 4, 1), g(t, e), e) : void h(e, 0, 0, 0, 1)
                        }
                        if (7 === n.length) return (v = parseInt(n.substr(1), 16)) >= 0 && v <= 16777215 ? (h(e, (16711680 & v) >> 16, (65280 & v) >> 8, 255 & v, 1), g(t, e), e) : void h(e, 0, 0, 0, 1)
                    }
                }
            }

            function m(t, e) {
                var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
                    n = l(t[1]),
                    r = l(t[2]),
                    o = r <= .5 ? r * (n + 1) : r + n - r * n,
                    s = 2 * r - o;
                return h(e = e || [], a(255 * u(s, o, i + 1 / 3)), a(255 * u(s, o, i)), a(255 * u(s, o, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
            }

            function y(t, e, i) {
                if (e && e.length && t >= 0 && t <= 1) {
                    i = i || [];
                    var n = t * (e.length - 1),
                        r = Math.floor(n),
                        s = Math.ceil(n),
                        l = e[r],
                        u = e[s],
                        h = n - r;
                    return i[0] = a(c(l[0], u[0], h)), i[1] = a(c(l[1], u[1], h)), i[2] = a(c(l[2], u[2], h)), i[3] = o(c(l[3], u[3], h)), i
                }
            }
            var x = y;

            function _(t, e, i) {
                if (e && e.length && t >= 0 && t <= 1) {
                    var n = t * (e.length - 1),
                        r = Math.floor(n),
                        s = Math.ceil(n),
                        l = v(e[r]),
                        u = v(e[s]),
                        h = n - r,
                        d = w([a(c(l[0], u[0], h)), a(c(l[1], u[1], h)), a(c(l[2], u[2], h)), o(c(l[3], u[3], h))], "rgba");
                    return i ? {
                        color: d,
                        leftIndex: r,
                        rightIndex: s,
                        value: n
                    } : d
                }
            }
            var b = _;

            function w(t, e) {
                if (t && t.length) {
                    var i = t[0] + "," + t[1] + "," + t[2];
                    return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
                }
            }
            e.parse = v, e.lift = function(t, e) {
                var i = v(t);
                if (i) {
                    for (var n = 0; n < 3; n++) i[n] = e < 0 ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
                    return w(i, 4 === i.length ? "rgba" : "rgb")
                }
            }, e.toHex = function(t) {
                var e = v(t);
                if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
            }, e.fastLerp = y, e.fastMapToColor = x, e.lerp = _, e.mapToColor = b, e.modifyHSL = function(t, e, i, n) {
                if (t = v(t)) return t = function(t) {
                    if (t) {
                        var e, i, n = t[0] / 255,
                            r = t[1] / 255,
                            a = t[2] / 255,
                            o = Math.min(n, r, a),
                            s = Math.max(n, r, a),
                            l = s - o,
                            u = (s + o) / 2;
                        if (0 === l) e = 0, i = 0;
                        else {
                            i = u < .5 ? l / (s + o) : l / (2 - s - o);
                            var c = ((s - n) / 6 + l / 2) / l,
                                h = ((s - r) / 6 + l / 2) / l,
                                d = ((s - a) / 6 + l / 2) / l;
                            n === s ? e = d - h : r === s ? e = 1 / 3 + c - d : a === s && (e = 2 / 3 + h - c), e < 0 && (e += 1), e > 1 && (e -= 1)
                        }
                        var f = [360 * e, i, u];
                        return null != t[3] && f.push(t[3]), f
                    }
                }(t), null != e && (t[0] = function(t) {
                    return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
                }(e)), null != i && (t[1] = l(i)), null != n && (t[2] = l(n)), w(m(t), "rgba")
            }, e.modifyAlpha = function(t, e) {
                if ((t = v(t)) && null != e) return t[3] = o(e), w(t, "rgba")
            }, e.stringify = w
        },
        cbbd: function(t, e, i) {
            var n = i("56b7"),
                r = i("7286"),
                a = n.extendComponentView({
                    type: "axisPointer",
                    render: function(t, e, i) {
                        var n = e.getComponent("tooltip"),
                            a = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
                        r.register("axisPointer", i, (function(t, e, i) {
                            "none" !== a && ("leave" === t || a.indexOf(t) >= 0) && i({
                                type: "updateAxisPointer",
                                currTrigger: t,
                                x: e && e.offsetX,
                                y: e && e.offsetY
                            })
                        }))
                    },
                    remove: function(t, e) {
                        r.unregister(e.getZr(), "axisPointer"), a.superApply(this._model, "remove", arguments)
                    },
                    dispose: function(t, e) {
                        r.unregister("axisPointer", e), a.superApply(this._model, "dispose", arguments)
                    }
                }),
                o = a;
            t.exports = o
        },
        cc5e: function(t, e, i) {
            var n = i("055a"),
                r = i("3b4b"),
                a = i("852d"),
                o = i("177a"),
                s = i("8dc2"),
                l = i("f965"),
                u = i("8da8"),
                c = i("3caf"),
                h = i("243b"),
                d = i("ee6d"),
                f = i("4823"),
                p = i("73f9"),
                g = i("6b25"),
                v = i("7b27").createFromString,
                m = i("b2de"),
                y = m.isString,
                x = m.extend,
                _ = m.defaults,
                b = m.trim,
                w = m.each,
                S = /[\s,]+/;

            function C(t) {
                y(t) && (t = (new DOMParser).parseFromString(t, "text/xml"));
                for (9 === t.nodeType && (t = t.firstChild);
                    "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
                return t
            }

            function M() {
                this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
            }
            M.prototype.parse = function(t, e) {
                e = e || {};
                var i = C(t);
                if (!i) throw new Error("Illegal svg");
                var r = new n;
                this._root = r;
                var a = i.getAttribute("viewBox") || "",
                    o = parseFloat(i.getAttribute("width") || e.width),
                    l = parseFloat(i.getAttribute("height") || e.height);
                isNaN(o) && (o = null), isNaN(l) && (l = null), P(i, r, null, !0);
                for (var u, c, h = i.firstChild; h;) this._parseNode(h, r), h = h.nextSibling;
                if (a) {
                    var d = b(a).split(S);
                    d.length >= 4 && (u = {
                        x: parseFloat(d[0] || 0),
                        y: parseFloat(d[1] || 0),
                        width: parseFloat(d[2]),
                        height: parseFloat(d[3])
                    })
                }
                if (u && null != o && null != l && (c = N(u, o, l), !e.ignoreViewBox)) {
                    var f = r;
                    (r = new n).add(f), f.scale = c.scale.slice(), f.position = c.position.slice()
                }
                return e.ignoreRootClip || null == o || null == l || r.setClipPath(new s({
                    shape: {
                        x: 0,
                        y: 0,
                        width: o,
                        height: l
                    }
                })), {
                    root: r,
                    width: o,
                    height: l,
                    viewBoxRect: u,
                    viewBoxTransform: c
                }
            }, M.prototype._parseNode = function(t, e) {
                var i, n = t.nodeName.toLowerCase();
                if ("defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0), this._isDefine) {
                    var r = I[n];
                    if (r) {
                        var a = r.call(this, t),
                            o = t.getAttribute("id");
                        o && (this._defs[o] = a)
                    }
                } else(r = T[n]) && (i = r.call(this, t, e), e.add(i));
                for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
                "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
            }, M.prototype._parseText = function(t, e) {
                if (1 === t.nodeType) {
                    var i = t.getAttribute("dx") || 0,
                        n = t.getAttribute("dy") || 0;
                    this._textX += parseFloat(i), this._textY += parseFloat(n)
                }
                var r = new a({
                    style: {
                        text: t.textContent,
                        transformText: !0
                    },
                    position: [this._textX || 0, this._textY || 0]
                });
                A(e, r), P(t, r, this._defs);
                var o = r.style.fontSize;
                o && o < 9 && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= o / 9, r.scale[1] *= o / 9);
                var s = r.getBoundingRect();
                return this._textX += s.width, e.add(r), r
            };
            var T = {
                    g: function(t, e) {
                        var i = new n;
                        return A(e, i), P(t, i, this._defs), i
                    },
                    rect: function(t, e) {
                        var i = new s;
                        return A(e, i), P(t, i, this._defs), i.setShape({
                            x: parseFloat(t.getAttribute("x") || 0),
                            y: parseFloat(t.getAttribute("y") || 0),
                            width: parseFloat(t.getAttribute("width") || 0),
                            height: parseFloat(t.getAttribute("height") || 0)
                        }), i
                    },
                    circle: function(t, e) {
                        var i = new o;
                        return A(e, i), P(t, i, this._defs), i.setShape({
                            cx: parseFloat(t.getAttribute("cx") || 0),
                            cy: parseFloat(t.getAttribute("cy") || 0),
                            r: parseFloat(t.getAttribute("r") || 0)
                        }), i
                    },
                    line: function(t, e) {
                        var i = new u;
                        return A(e, i), P(t, i, this._defs), i.setShape({
                            x1: parseFloat(t.getAttribute("x1") || 0),
                            y1: parseFloat(t.getAttribute("y1") || 0),
                            x2: parseFloat(t.getAttribute("x2") || 0),
                            y2: parseFloat(t.getAttribute("y2") || 0)
                        }), i
                    },
                    ellipse: function(t, e) {
                        var i = new l;
                        return A(e, i), P(t, i, this._defs), i.setShape({
                            cx: parseFloat(t.getAttribute("cx") || 0),
                            cy: parseFloat(t.getAttribute("cy") || 0),
                            rx: parseFloat(t.getAttribute("rx") || 0),
                            ry: parseFloat(t.getAttribute("ry") || 0)
                        }), i
                    },
                    polygon: function(t, e) {
                        var i = t.getAttribute("points");
                        i && (i = D(i));
                        var n = new h({
                            shape: {
                                points: i || []
                            }
                        });
                        return A(e, n), P(t, n, this._defs), n
                    },
                    polyline: function(t, e) {
                        var i = new c;
                        A(e, i), P(t, i, this._defs);
                        var n = t.getAttribute("points");
                        return n && (n = D(n)), new d({
                            shape: {
                                points: n || []
                            }
                        })
                    },
                    image: function(t, e) {
                        var i = new r;
                        return A(e, i), P(t, i, this._defs), i.setStyle({
                            image: t.getAttribute("xlink:href"),
                            x: t.getAttribute("x"),
                            y: t.getAttribute("y"),
                            width: t.getAttribute("width"),
                            height: t.getAttribute("height")
                        }), i
                    },
                    text: function(t, e) {
                        var i = t.getAttribute("x") || 0,
                            r = t.getAttribute("y") || 0,
                            a = t.getAttribute("dx") || 0,
                            o = t.getAttribute("dy") || 0;
                        this._textX = parseFloat(i) + parseFloat(a), this._textY = parseFloat(r) + parseFloat(o);
                        var s = new n;
                        return A(e, s), P(t, s, this._defs), s
                    },
                    tspan: function(t, e) {
                        var i = t.getAttribute("x"),
                            r = t.getAttribute("y");
                        null != i && (this._textX = parseFloat(i)), null != r && (this._textY = parseFloat(r));
                        var a = t.getAttribute("dx") || 0,
                            o = t.getAttribute("dy") || 0,
                            s = new n;
                        return A(e, s), P(t, s, this._defs), this._textX += a, this._textY += o, s
                    },
                    path: function(t, e) {
                        var i = t.getAttribute("d") || "",
                            n = v(i);
                        return A(e, n), P(t, n, this._defs), n
                    }
                },
                I = {
                    lineargradient: function(t) {
                        var e = parseInt(t.getAttribute("x1") || 0, 10),
                            i = parseInt(t.getAttribute("y1") || 0, 10),
                            n = parseInt(t.getAttribute("x2") || 10, 10),
                            r = parseInt(t.getAttribute("y2") || 0, 10),
                            a = new f(e, i, n, r);
                        return function(t, e) {
                            var i = t.firstChild;
                            for (; i;) {
                                if (1 === i.nodeType) {
                                    var n = i.getAttribute("offset");
                                    n = n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
                                    var r = i.getAttribute("stop-color") || "#000000";
                                    e.addColorStop(n, r)
                                }
                                i = i.nextSibling
                            }
                        }(t, a), a
                    },
                    radialgradient: function(t) {}
                };

            function A(t, e) {
                t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), _(e.__inheritedStyle, t.__inheritedStyle))
            }

            function D(t) {
                for (var e = b(t).split(S), i = [], n = 0; n < e.length; n += 2) {
                    var r = parseFloat(e[n]),
                        a = parseFloat(e[n + 1]);
                    i.push([r, a])
                }
                return i
            }
            var k = {
                fill: "fill",
                stroke: "stroke",
                "stroke-width": "lineWidth",
                opacity: "opacity",
                "fill-opacity": "fillOpacity",
                "stroke-opacity": "strokeOpacity",
                "stroke-dasharray": "lineDash",
                "stroke-dashoffset": "lineDashOffset",
                "stroke-linecap": "lineCap",
                "stroke-linejoin": "lineJoin",
                "stroke-miterlimit": "miterLimit",
                "font-family": "fontFamily",
                "font-size": "fontSize",
                "font-style": "fontStyle",
                "font-weight": "fontWeight",
                "text-align": "textAlign",
                "alignment-baseline": "textBaseline"
            };

            function P(t, e, i, n) {
                var r = e.__inheritedStyle || {},
                    a = "text" === e.type;
                if (1 === t.nodeType && (function(t, e) {
                        var i = t.getAttribute("transform");
                        if (i) {
                            i = i.replace(/,/g, " ");
                            var n = null,
                                r = [];
                            i.replace(E, (function(t, e, i) {
                                r.push(e, i)
                            }));
                            for (var a = r.length - 1; a > 0; a -= 2) {
                                var o = r[a],
                                    s = r[a - 1];
                                switch (n = n || g.create(), s) {
                                    case "translate":
                                        o = b(o).split(S), g.translate(n, n, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                                        break;
                                    case "scale":
                                        o = b(o).split(S), g.scale(n, n, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                                        break;
                                    case "rotate":
                                        o = b(o).split(S), g.rotate(n, n, parseFloat(o[0]));
                                        break;
                                    case "skew":
                                        o = b(o).split(S);
                                        break;
                                    case "matrix":
                                        o = b(o).split(S), n[0] = parseFloat(o[0]), n[1] = parseFloat(o[1]), n[2] = parseFloat(o[2]), n[3] = parseFloat(o[3]), n[4] = parseFloat(o[4]), n[5] = parseFloat(o[5])
                                }
                            }
                            e.setLocalTransform(n)
                        }
                    }(t, e), x(r, function(t) {
                        var e = t.getAttribute("style"),
                            i = {};
                        if (!e) return i;
                        var n, r = {};
                        R.lastIndex = 0;
                        for (; null != (n = R.exec(e));) r[n[1]] = n[2];
                        for (var a in k) k.hasOwnProperty(a) && null != r[a] && (i[k[a]] = r[a]);
                        return i
                    }(t)), !n))
                    for (var o in k)
                        if (k.hasOwnProperty(o)) {
                            var s = t.getAttribute(o);
                            null != s && (r[k[o]] = s)
                        } var l = a ? "textFill" : "fill",
                    u = a ? "textStroke" : "stroke";
                e.style = e.style || new p;
                var c = e.style;
                null != r.fill && c.set(l, L(r.fill, i)), null != r.stroke && c.set(u, L(r.stroke, i)), w(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], (function(t) {
                    var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
                    null != r[t] && c.set(e, parseFloat(r[t]))
                })), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), w(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], (function(t) {
                    null != r[t] && c.set(t, r[t])
                })), r.lineDash && (e.style.lineDash = b(r.lineDash).split(S)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r
            }
            var O = /url\(\s*#(.*?)\)/;

            function L(t, e) {
                var i = e && t && t.match(O);
                return i ? e[b(i[1])] : t
            }
            var E = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g;
            var R = /([^\s:;]+)\s*:\s*([^:;]+)/g;

            function N(t, e, i) {
                var n = e / t.width,
                    r = i / t.height,
                    a = Math.min(n, r);
                return {
                    scale: [a, a],
                    position: [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2]
                }
            }
            e.parseXML = C, e.makeViewBoxTransform = N, e.parseSVG = function(t, e) {
                return (new M).parse(t, e)
            }
        },
        cef3: function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = n.createHashMap,
                a = n.isString,
                o = n.isArray,
                s = n.each,
                l = (n.assert, i("cc5e")).parseXML,
                u = r(),
                c = {
                    registerMap: function(t, e, i) {
                        var n;
                        return o(e) ? n = e : e.svg ? n = [{
                            type: "svg",
                            source: e.svg,
                            specialAreas: e.specialAreas
                        }] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [{
                            type: "geoJSON",
                            source: e,
                            specialAreas: i
                        }]), s(n, (function(t) {
                            var e = t.type;
                            "geoJson" === e && (e = t.type = "geoJSON"), (0, h[e])(t)
                        })), u.set(t, n)
                    },
                    retrieveMap: function(t) {
                        return u.get(t)
                    }
                },
                h = {
                    geoJSON: function(t) {
                        var e = t.source;
                        t.geoJSON = a(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
                    },
                    svg: function(t) {
                        t.svgXML = l(t.source)
                    }
                };
            t.exports = c
        },
        cf6c: function(t, e, i) {
            var n = i("b2de"),
                r = i("0127");
            t.exports = function(t, e) {
                var i, a = [],
                    o = t.seriesIndex;
                if (null == o || !(i = e.getSeriesByIndex(o))) return {
                    point: []
                };
                var s = i.getData(),
                    l = r.queryDataIndex(s, t);
                if (null == l || l < 0 || n.isArray(l)) return {
                    point: []
                };
                var u = s.getItemGraphicEl(l),
                    c = i.coordinateSystem;
                if (i.getTooltipPosition) a = i.getTooltipPosition(l) || [];
                else if (c && c.dataToPoint) a = c.dataToPoint(s.getValues(n.map(c.dimensions, (function(t) {
                    return s.mapDimension(t)
                })), l, !0)) || [];
                else if (u) {
                    var h = u.getBoundingRect().clone();
                    h.applyTransform(u.transform), a = [h.x + h.width / 2, h.y + h.height / 2]
                }
                return {
                    point: a,
                    el: u
                }
            }
        },
        cfb8: function(t, e) {
            e.SOURCE_FORMAT_ORIGINAL = "original", e.SOURCE_FORMAT_ARRAY_ROWS = "arrayRows", e.SOURCE_FORMAT_OBJECT_ROWS = "objectRows", e.SOURCE_FORMAT_KEYED_COLUMNS = "keyedColumns", e.SOURCE_FORMAT_UNKNOWN = "unknown", e.SOURCE_FORMAT_TYPED_ARRAY = "typedArray", e.SERIES_LAYOUT_BY_COLUMN = "column", e.SERIES_LAYOUT_BY_ROW = "row"
        },
        d2f8: function(t, e, i) {
            var n = i("b2de"),
                r = i("73f9"),
                a = i("2882"),
                o = i("9af42");

            function s(t) {
                for (var e in t = t || {}, a.call(this, t), t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
                this.style = new r(t.style, this), this._rect = null, this.__clipPaths = null
            }
            s.prototype = {
                constructor: s,
                type: "displayable",
                __dirty: !0,
                invisible: !1,
                z: 0,
                z2: 0,
                zlevel: 0,
                draggable: !1,
                dragging: !1,
                silent: !1,
                culling: !1,
                cursor: "pointer",
                rectHover: !1,
                progressive: !1,
                incremental: !1,
                globalScaleRatio: 1,
                beforeBrush: function(t) {},
                afterBrush: function(t) {},
                brush: function(t, e) {},
                getBoundingRect: function() {},
                contain: function(t, e) {
                    return this.rectContain(t, e)
                },
                traverse: function(t, e) {
                    t.call(e, this)
                },
                rectContain: function(t, e) {
                    var i = this.transformCoordToLocal(t, e);
                    return this.getBoundingRect().contain(i[0], i[1])
                },
                dirty: function() {
                    this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
                },
                animateStyle: function(t) {
                    return this.animate("style", t)
                },
                attrKV: function(t, e) {
                    "style" !== t ? a.prototype.attrKV.call(this, t, e) : this.style.set(e)
                },
                setStyle: function(t, e) {
                    return this.style.set(t, e), this.dirty(!1), this
                },
                useStyle: function(t) {
                    return this.style = new r(t, this), this.dirty(!1), this
                },
                calculateTextPosition: null
            }, n.inherits(s, a), n.mixin(s, o);
            var l = s;
            t.exports = l
        },
        d402: function(t, e, i) {
            var n = i("24e7"),
                r = i("8eb5");
            e.buildPath = function(t, e, i) {
                var a = e.points,
                    o = e.smooth;
                if (a && a.length >= 2) {
                    if (o && "spline" !== o) {
                        var s = r(a, o, i, e.smoothConstraint);
                        t.moveTo(a[0][0], a[0][1]);
                        for (var l = a.length, u = 0; u < (i ? l : l - 1); u++) {
                            var c = s[2 * u],
                                h = s[2 * u + 1],
                                d = a[(u + 1) % l];
                            t.bezierCurveTo(c[0], c[1], h[0], h[1], d[0], d[1])
                        }
                    } else {
                        "spline" === o && (a = n(a, i)), t.moveTo(a[0][0], a[0][1]), u = 1;
                        for (var f = a.length; u < f; u++) t.lineTo(a[u][0], a[u][1])
                    }
                    i && t.closePath()
                }
            }
        },
        d420: function(t, e, i) {
            var n = i("b2de"),
                r = i("9934"),
                a = i("31c0").retrieveRawValue;
            t.exports = function(t, e) {
                var i = e.getModel("aria");
                if (i.get("show"))
                    if (i.get("description")) t.setAttribute("aria-label", i.get("description"));
                    else {
                        var o = 0;
                        e.eachSeries((function(t, e) {
                            ++o
                        }), this);
                        var s, l = i.get("data.maxCount") || 10,
                            u = i.get("series.maxCount") || 10,
                            c = Math.min(o, u);
                        if (!(o < 1)) {
                            var h = function() {
                                var t = e.getModel("title").option;
                                return t && t.length && (t = t[0]), t && t.text
                            }();
                            s = h ? f(p("general.withTitle"), {
                                title: h
                            }) : p("general.withoutTitle");
                            var d = [];
                            s += f(p(o > 1 ? "series.multiple.prefix" : "series.single.prefix"), {
                                seriesCount: o
                            }), e.eachSeries((function(t, e) {
                                if (e < c) {
                                    var i, n = t.get("name"),
                                        r = "series." + (o > 1 ? "multiple" : "single") + ".";
                                    i = f(i = p(n ? r + "withName" : r + "withoutName"), {
                                        seriesId: t.seriesIndex,
                                        seriesName: t.get("name"),
                                        seriesType: g(t.subType)
                                    });
                                    var s = t.getData();
                                    window.data = s, s.count() > l ? i += f(p("data.partialData"), {
                                        displayCnt: l
                                    }) : i += p("data.allData");
                                    for (var u = [], h = 0; h < s.count(); h++)
                                        if (h < l) {
                                            var v = s.getName(h),
                                                m = a(s, h);
                                            u.push(f(p(v ? "data.withName" : "data.withoutName"), {
                                                name: v,
                                                value: m
                                            }))
                                        } i += u.join(p("data.separator.middle")) + p("data.separator.end"), d.push(i)
                                }
                            })), s += d.join(p("series.multiple.separator.middle")) + p("series.multiple.separator.end"), t.setAttribute("aria-label", s)
                        }
                    }

                function f(t, e) {
                    if ("string" != typeof t) return t;
                    var i = t;
                    return n.each(e, (function(t, e) {
                        i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
                    })), i
                }

                function p(t) {
                    var e = i.get(t);
                    if (null == e) {
                        for (var n = t.split("."), a = r.aria, o = 0; o < n.length; ++o) a = a[n[o]];
                        return a
                    }
                    return e
                }

                function g(t) {
                    return r.series.typeNames[t] || "自定义图"
                }
            }
        },
        d4be: function(t, e, i) {
            var n = i("3f86");
            e.zrender = n;
            var r = i("6b25");
            e.matrix = r;
            var a = i("df91");
            e.vector = a;
            var o = i("b2de"),
                s = i("cb89");
            e.color = s;
            var l = i("81e8"),
                u = i("e2dc");
            e.number = u;
            var c = i("542f");
            e.format = c;
            var h = i("773e");
            h.throttle, e.throttle = h.throttle;
            var d = i("8cf9");
            e.helper = d;
            var f = i("2960");
            e.parseGeoJSON = f;
            var p = i("95ac");
            e.List = p;
            var g = i("e62d0");
            e.Model = g;
            var v = i("2c33");
            e.Axis = v;
            var m = i("76be");
            e.env = m;
            var y = f,
                x = {};
            o.each(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], (function(t) {
                x[t] = o[t]
            }));
            var _ = {};
            o.each(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "registerShape", "getShapeClass", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], (function(t) {
                _[t] = l[t]
            })), e.parseGeoJson = y, e.util = x, e.graphic = _
        },
        d4d0: function(t, e, i) {
            var n = i("b2de"),
                r = i("67de"),
                a = i("3c57"),
                o = i("1f1f"),
                s = o.getLayoutParams,
                l = o.mergeLayoutParam,
                u = i("3ce9"),
                c = ["value", "category", "time", "log"];
            t.exports = function(t, e, i, o) {
                n.each(c, (function(a) {
                    e.extend({
                        type: t + "Axis." + a,
                        mergeDefaultAndTheme: function(e, r) {
                            var o = this.layoutMode,
                                u = o ? s(e) : {},
                                c = r.getTheme();
                            n.merge(e, c.get(a + "Axis")), n.merge(e, this.getDefaultOption()), e.type = i(t, e), o && l(e, u, o)
                        },
                        optionUpdated: function() {
                            "category" === this.option.type && (this.__ordinalMeta = u.createByAxisModel(this))
                        },
                        getCategories: function(t) {
                            var e = this.option;
                            if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories
                        },
                        getOrdinalMeta: function() {
                            return this.__ordinalMeta
                        },
                        defaultOption: n.mergeAll([{}, r[a + "Axis"], o], !0)
                    })
                })), a.registerSubTypeDefaulter(t + "Axis", n.curry(i, t))
            }
        },
        d83a: function(t, e, i) {},
        dc95: function(t, e, i) {
            var n = (i("b1e6").__DEV__, i("b2de")),
                r = i("76be"),
                a = i("542f"),
                o = a.formatTime,
                s = a.encodeHTML,
                l = a.addCommas,
                u = a.getTooltipMarker,
                c = i("0127"),
                h = i("3c57"),
                d = i("3b8a"),
                f = i("18a6"),
                p = i("1f1f"),
                g = p.getLayoutParams,
                v = p.mergeLayoutParam,
                m = i("6f05").createTask,
                y = i("7d81"),
                x = y.prepareSource,
                _ = y.getSource,
                b = i("31c0").retrieveRawValue,
                w = c.makeInner(),
                S = h.extend({
                    type: "series.__base__",
                    seriesIndex: 0,
                    coordinateSystem: null,
                    defaultOption: null,
                    legendVisualProvider: null,
                    visualColorAccessPath: "itemStyle.color",
                    visualBorderColorAccessPath: "itemStyle.borderColor",
                    layoutMode: null,
                    init: function(t, e, i, n) {
                        this.seriesIndex = this.componentIndex, this.dataTask = m({
                            count: M,
                            reset: T
                        }), this.dataTask.context = {
                            model: this
                        }, this.mergeDefaultAndTheme(t, i), x(this);
                        var r = this.getInitialData(t, i);
                        A(r, this), this.dataTask.context.data = r, w(this).dataBeforeProcessed = r, C(this)
                    },
                    mergeDefaultAndTheme: function(t, e) {
                        var i = this.layoutMode,
                            r = i ? g(t) : {},
                            a = this.subType;
                        h.hasClass(a) && (a += "Series"), n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), c.defaultEmphasis(t, "label", ["show"]), this.fillDataTextStyle(t.data), i && v(t, r, i)
                    },
                    mergeOption: function(t, e) {
                        t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                        var i = this.layoutMode;
                        i && v(this.option, t, i), x(this);
                        var r = this.getInitialData(t, e);
                        A(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, w(this).dataBeforeProcessed = r, C(this)
                    },
                    fillDataTextStyle: function(t) {
                        if (t && !n.isTypedArray(t))
                            for (var e = ["show"], i = 0; i < t.length; i++) t[i] && t[i].label && c.defaultEmphasis(t[i], "label", e)
                    },
                    getInitialData: function() {},
                    appendData: function(t) {
                        this.getRawData().appendData(t.data)
                    },
                    getData: function(t) {
                        var e = k(this);
                        if (e) {
                            var i = e.context.data;
                            return null == t ? i : i.getLinkedData(t)
                        }
                        return w(this).data
                    },
                    setData: function(t) {
                        var e = k(this);
                        if (e) {
                            var i = e.context;
                            i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t)
                        }
                        w(this).data = t
                    },
                    getSource: function() {
                        return _(this)
                    },
                    getRawData: function() {
                        return w(this).dataBeforeProcessed
                    },
                    getBaseAxis: function() {
                        var t = this.coordinateSystem;
                        return t && t.getBaseAxis && t.getBaseAxis()
                    },
                    formatTooltip: function(t, e, i, r) {
                        var a = this,
                            h = "html" === (r = r || "html") ? "<br/>" : "\n",
                            d = "richText" === r,
                            f = {},
                            p = 0;
                        var g = this.getData(),
                            v = g.mapDimension("defaultedTooltip", !0),
                            m = v.length,
                            y = this.getRawValue(t),
                            x = n.isArray(y),
                            _ = g.getItemVisual(t, "color");
                        n.isObject(_) && _.colorStops && (_ = (_.colorStops[0] || {}).color), _ = _ || "transparent";
                        var w = (m > 1 || x && !m ? function(i) {
                                var c = n.reduce(i, (function(t, e, i) {
                                        var n = g.getDimensionInfo(i);
                                        return t | (n && !1 !== n.tooltip && null != n.displayName)
                                    }), 0),
                                    h = [];

                                function m(t, i) {
                                    var n = g.getDimensionInfo(i);
                                    if (n && !1 !== n.otherDims.tooltip) {
                                        var v = n.type,
                                            m = "sub" + a.seriesIndex + "at" + p,
                                            y = u({
                                                color: _,
                                                type: "subItem",
                                                renderMode: r,
                                                markerId: m
                                            }),
                                            x = "string" == typeof y ? y : y.content,
                                            b = (c ? x + s(n.displayName || "-") + ": " : "") + s("ordinal" === v ? t + "" : "time" === v ? e ? "" : o("yyyy/MM/dd hh:mm:ss", t) : l(t));
                                        b && h.push(b), d && (f[m] = _, ++p)
                                    }
                                }
                                v.length ? n.each(v, (function(e) {
                                    m(b(g, t, e), e)
                                })) : n.each(i, m);
                                var y = c ? d ? "\n" : "<br/>" : "",
                                    x = y + h.join(y || ", ");
                                return {
                                    renderMode: r,
                                    content: x,
                                    style: f
                                }
                            }(y) : function(t) {
                                return {
                                    renderMode: r,
                                    content: s(l(t)),
                                    style: f
                                }
                            }(m ? b(g, t, v[0]) : x ? y[0] : y)).content,
                            S = a.seriesIndex + "at" + p,
                            C = u({
                                color: _,
                                type: "item",
                                renderMode: r,
                                markerId: S
                            });
                        f[S] = _, ++p;
                        var M = g.getName(t),
                            T = this.name;
                        c.isNameSpecified(this) || (T = ""), T = T ? s(T) + (e ? ": " : h) : "";
                        var I = "string" == typeof C ? C : C.content;
                        return {
                            html: e ? I + T + w : T + I + (M ? s(M) + ": " + w : w),
                            markers: f
                        }
                    },
                    isAnimationEnabled: function() {
                        if (r.node) return !1;
                        var t = this.getShallow("animation");
                        return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
                    },
                    restoreData: function() {
                        this.dataTask.dirty()
                    },
                    getColorFromPalette: function(t, e, i) {
                        var n = this.ecModel,
                            r = d.getColorFromPalette.call(this, t, e, i);
                        return r || (r = n.getColorFromPalette(t, e, i)), r
                    },
                    coordDimToDataDim: function(t) {
                        return this.getRawData().mapDimension(t, !0)
                    },
                    getProgressive: function() {
                        return this.get("progressive")
                    },
                    getProgressiveThreshold: function() {
                        return this.get("progressiveThreshold")
                    },
                    getAxisTooltipData: null,
                    getTooltipPosition: null,
                    pipeTask: null,
                    preventIncremental: null,
                    pipelineContext: null
                });

            function C(t) {
                var e = t.name;
                c.isNameSpecified(t) || (t.name = function(t) {
                    var e = t.getRawData(),
                        i = e.mapDimension("seriesName", !0),
                        r = [];
                    return n.each(i, (function(t) {
                        var i = e.getDimensionInfo(t);
                        i.displayName && r.push(i.displayName)
                    })), r.join(" ")
                }(t) || e)
            }

            function M(t) {
                return t.model.getRawData().count()
            }

            function T(t) {
                var e = t.model;
                return e.setData(e.getRawData().cloneShallow()), I
            }

            function I(t, e) {
                t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
            }

            function A(t, e) {
                n.each(t.CHANGABLE_METHODS, (function(i) {
                    t.wrapMethod(i, n.curry(D, e))
                }))
            }

            function D(t) {
                var e = k(t);
                e && e.setOutputEnd(this.count())
            }

            function k(t) {
                var e = (t.ecModel || {}).scheduler,
                    i = e && e.getPipeline(t.uid);
                if (i) {
                    var n = i.currentTask;
                    if (n) {
                        var r = n.agentStubMap;
                        r && (n = r.get(t.uid))
                    }
                    return n
                }
            }
            n.mixin(S, f), n.mixin(S, d);
            var P = S;
            t.exports = P
        },
        de55: function(t, e, i) {
            var n = i("b2de"),
                r = n.each,
                a = n.isArray,
                o = n.isObject,
                s = i("a48d"),
                l = i("0127").normalizeToArray;

            function u(t) {
                r(c, (function(e) {
                    e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
                }))
            }
            var c = [
                    ["x", "left"],
                    ["y", "top"],
                    ["x2", "right"],
                    ["y2", "bottom"]
                ],
                h = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"];
            t.exports = function(t, e) {
                s(t, e), t.series = l(t.series), r(t.series, (function(t) {
                    if (o(t)) {
                        var e = t.type;
                        if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
                        else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);
                        else if ("gauge" === e) {
                            var i = function(t, e) {
                                e = e.split(",");
                                for (var i = t, n = 0; n < e.length && null != (i = i && i[e[n]]); n++);
                                return i
                            }(t, "pointer.color");
                            null != i && function(t, e, i, n) {
                                e = e.split(",");
                                for (var r, a = t, o = 0; o < e.length - 1; o++) null == a[r = e[o]] && (a[r] = {}), a = a[r];
                                (n || null == a[e[o]]) && (a[e[o]] = i)
                            }(t, "itemStyle.color", i)
                        }
                        u(t)
                    }
                })), t.dataRange && (t.visualMap = t.dataRange), r(h, (function(e) {
                    var i = t[e];
                    i && (a(i) || (i = [i]), r(i, (function(t) {
                        u(t)
                    })))
                }))
            }
        },
        df08: function(t, e, i) {},
        df91: function(t, e) {
            var i = "undefined" == typeof Float32Array ? Array : Float32Array;

            function n(t) {
                return Math.sqrt(a(t))
            }
            var r = n;

            function a(t) {
                return t[0] * t[0] + t[1] * t[1]
            }
            var o = a;

            function s(t, e) {
                return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
            }
            var l = s;

            function u(t, e) {
                return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
            }
            var c = u;
            e.create = function(t, e) {
                var n = new i(2);
                return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
            }, e.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, e.clone = function(t) {
                var e = new i(2);
                return e[0] = t[0], e[1] = t[1], e
            }, e.set = function(t, e, i) {
                return t[0] = e, t[1] = i, t
            }, e.add = function(t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
            }, e.scaleAndAdd = function(t, e, i, n) {
                return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
            }, e.sub = function(t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
            }, e.len = n, e.length = r, e.lenSquare = a, e.lengthSquare = o, e.mul = function(t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
            }, e.div = function(t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
            }, e.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, e.scale = function(t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t
            }, e.normalize = function(t, e) {
                var i = n(e);
                return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
            }, e.distance = s, e.dist = l, e.distanceSquare = u, e.distSquare = c, e.negate = function(t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, e.lerp = function(t, e, i, n) {
                return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
            }, e.applyTransform = function(t, e, i) {
                var n = e[0],
                    r = e[1];
                return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
            }, e.min = function(t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
            }, e.max = function(t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
            }
        },
        e148: function(t, e, i) {
            "use strict";
            var n = i("510f");
            i.n(n).a
        },
        e22d: function(t, e) {
            var i = function(t, e) {
                this.getAllNames = function() {
                    var t = e();
                    return t.mapArray(t.getName)
                }, this.containName = function(t) {
                    return e().indexOfName(t) >= 0
                }, this.indexOfName = function(e) {
                    return t().indexOfName(e)
                }, this.getItemVisual = function(e, i) {
                    return t().getItemVisual(e, i)
                }
            };
            t.exports = i
        },
        e27b: function(t, e, i) {
            var n = i("102c"),
                r = i("df91"),
                a = i("8d63"),
                o = i("a16b"),
                s = i("1f2e").devicePixelRatio,
                l = {
                    M: 1,
                    L: 2,
                    C: 3,
                    Q: 4,
                    A: 5,
                    Z: 6,
                    R: 7
                },
                u = [],
                c = [],
                h = [],
                d = [],
                f = Math.min,
                p = Math.max,
                g = Math.cos,
                v = Math.sin,
                m = Math.sqrt,
                y = Math.abs,
                x = "undefined" != typeof Float32Array,
                _ = function(t) {
                    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
                };
            _.prototype = {
                constructor: _,
                _xi: 0,
                _yi: 0,
                _x0: 0,
                _y0: 0,
                _ux: 0,
                _uy: 0,
                _len: 0,
                _lineDash: null,
                _dashOffset: 0,
                _dashIdx: 0,
                _dashSum: 0,
                setScale: function(t, e, i) {
                    i = i || 0, this._ux = y(i / s / t) || 0, this._uy = y(i / s / e) || 0
                },
                getContext: function() {
                    return this._ctx
                },
                beginPath: function(t) {
                    return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
                },
                moveTo: function(t, e) {
                    return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
                },
                lineTo: function(t, e) {
                    var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                    return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
                },
                bezierCurveTo: function(t, e, i, n, r, a) {
                    return this.addData(l.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this
                },
                quadraticCurveTo: function(t, e, i, n) {
                    return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
                },
                arc: function(t, e, i, n, r, a) {
                    return this.addData(l.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = g(r) * i + t, this._yi = v(r) * i + e, this
                },
                arcTo: function(t, e, i, n, r) {
                    return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
                },
                rect: function(t, e, i, n) {
                    return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
                },
                closePath: function() {
                    this.addData(l.Z);
                    var t = this._ctx,
                        e = this._x0,
                        i = this._y0;
                    return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
                },
                fill: function(t) {
                    t && t.fill(), this.toStatic()
                },
                stroke: function(t) {
                    t && t.stroke(), this.toStatic()
                },
                setLineDash: function(t) {
                    if (t instanceof Array) {
                        this._lineDash = t, this._dashIdx = 0;
                        for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                        this._dashSum = e
                    }
                    return this
                },
                setLineDashOffset: function(t) {
                    return this._dashOffset = t, this
                },
                len: function() {
                    return this._len
                },
                setData: function(t) {
                    var e = t.length;
                    this.data && this.data.length === e || !x || (this.data = new Float32Array(e));
                    for (var i = 0; i < e; i++) this.data[i] = t[i];
                    this._len = e
                },
                appendPath: function(t) {
                    t instanceof Array || (t = [t]);
                    for (var e = t.length, i = 0, n = this._len, r = 0; r < e; r++) i += t[r].len();
                    for (x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i)), r = 0; r < e; r++)
                        for (var a = t[r].data, o = 0; o < a.length; o++) this.data[n++] = a[o];
                    this._len = n
                },
                addData: function(t) {
                    if (this._saveData) {
                        var e = this.data;
                        this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                        for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                        this._prevCmd = t
                    }
                },
                _expandData: function() {
                    if (!(this.data instanceof Array)) {
                        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                        this.data = t
                    }
                },
                _needsDash: function() {
                    return this._lineDash
                },
                _dashedLineTo: function(t, e) {
                    var i, n, r = this._dashSum,
                        a = this._dashOffset,
                        o = this._lineDash,
                        s = this._ctx,
                        l = this._xi,
                        u = this._yi,
                        c = t - l,
                        h = e - u,
                        d = m(c * c + h * h),
                        g = l,
                        v = u,
                        y = o.length;
                    for (a < 0 && (a = r + a), g -= (a %= r) * (c /= d), v -= a * (h /= d); c > 0 && g <= t || c < 0 && g >= t || 0 === c && (h > 0 && v <= e || h < 0 && v >= e);) g += c * (i = o[n = this._dashIdx]), v += h * i, this._dashIdx = (n + 1) % y, c > 0 && g < l || c < 0 && g > l || h > 0 && v < u || h < 0 && v > u || s[n % 2 ? "moveTo" : "lineTo"](c >= 0 ? f(g, t) : p(g, t), h >= 0 ? f(v, e) : p(v, e));
                    c = g - t, h = v - e, this._dashOffset = -m(c * c + h * h)
                },
                _dashedBezierTo: function(t, e, i, r, a, o) {
                    var s, l, u, c, h, d = this._dashSum,
                        f = this._dashOffset,
                        p = this._lineDash,
                        g = this._ctx,
                        v = this._xi,
                        y = this._yi,
                        x = n.cubicAt,
                        _ = 0,
                        b = this._dashIdx,
                        w = p.length,
                        S = 0;
                    for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += .1) l = x(v, t, i, a, s + .1) - x(v, t, i, a, s), u = x(y, e, r, o, s + .1) - x(y, e, r, o, s), _ += m(l * l + u * u);
                    for (; b < w && !((S += p[b]) > f); b++);
                    for (s = (S - f) / _; s <= 1;) c = x(v, t, i, a, s), h = x(y, e, r, o, s), b % 2 ? g.moveTo(c, h) : g.lineTo(c, h), s += p[b] / _, b = (b + 1) % w;
                    b % 2 != 0 && g.lineTo(a, o), l = a - c, u = o - h, this._dashOffset = -m(l * l + u * u)
                },
                _dashedQuadraticTo: function(t, e, i, n) {
                    var r = i,
                        a = n;
                    i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
                },
                toStatic: function() {
                    var t = this.data;
                    t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
                },
                getBoundingRect: function() {
                    u[0] = u[1] = h[0] = h[1] = Number.MAX_VALUE, c[0] = c[1] = d[0] = d[1] = -Number.MAX_VALUE;
                    for (var t = this.data, e = 0, i = 0, n = 0, s = 0, f = 0; f < t.length;) {
                        var p = t[f++];
                        switch (1 === f && (n = e = t[f], s = i = t[f + 1]), p) {
                            case l.M:
                                e = n = t[f++], i = s = t[f++], h[0] = n, h[1] = s, d[0] = n, d[1] = s;
                                break;
                            case l.L:
                                a.fromLine(e, i, t[f], t[f + 1], h, d), e = t[f++], i = t[f++];
                                break;
                            case l.C:
                                a.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], h, d), e = t[f++], i = t[f++];
                                break;
                            case l.Q:
                                a.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], h, d), e = t[f++], i = t[f++];
                                break;
                            case l.A:
                                var m = t[f++],
                                    y = t[f++],
                                    x = t[f++],
                                    _ = t[f++],
                                    b = t[f++],
                                    w = t[f++] + b;
                                f += 1;
                                var S = 1 - t[f++];
                                1 === f && (n = g(b) * x + m, s = v(b) * _ + y), a.fromArc(m, y, x, _, b, w, S, h, d), e = g(w) * x + m, i = v(w) * _ + y;
                                break;
                            case l.R:
                                n = e = t[f++], s = i = t[f++];
                                var C = t[f++],
                                    M = t[f++];
                                a.fromLine(n, s, n + C, s + M, h, d);
                                break;
                            case l.Z:
                                e = n, i = s
                        }
                        r.min(u, u, h), r.max(c, c, d)
                    }
                    return 0 === f && (u[0] = u[1] = c[0] = c[1] = 0), new o(u[0], u[1], c[0] - u[0], c[1] - u[1])
                },
                rebuildPath: function(t) {
                    for (var e, i, n, r, a, o, s = this.data, u = this._ux, c = this._uy, h = this._len, d = 0; d < h;) {
                        var f = s[d++];
                        switch (1 === d && (e = n = s[d], i = r = s[d + 1]), f) {
                            case l.M:
                                e = n = s[d++], i = r = s[d++], t.moveTo(n, r);
                                break;
                            case l.L:
                                a = s[d++], o = s[d++], (y(a - n) > u || y(o - r) > c || d === h - 1) && (t.lineTo(a, o), n = a, r = o);
                                break;
                            case l.C:
                                t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1];
                                break;
                            case l.Q:
                                t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1];
                                break;
                            case l.A:
                                var p = s[d++],
                                    m = s[d++],
                                    x = s[d++],
                                    _ = s[d++],
                                    b = s[d++],
                                    w = s[d++],
                                    S = s[d++],
                                    C = s[d++],
                                    M = x > _ ? x : _,
                                    T = x > _ ? 1 : x / _,
                                    I = x > _ ? _ / x : 1,
                                    A = b + w;
                                Math.abs(x - _) > .001 ? (t.translate(p, m), t.rotate(S), t.scale(T, I), t.arc(0, 0, M, b, A, 1 - C), t.scale(1 / T, 1 / I), t.rotate(-S), t.translate(-p, -m)) : t.arc(p, m, M, b, A, 1 - C), 1 === d && (e = g(b) * x + p, i = v(b) * _ + m), n = g(A) * x + p, r = v(A) * _ + m;
                                break;
                            case l.R:
                                e = n = s[d], i = r = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]);
                                break;
                            case l.Z:
                                t.closePath(), n = e, r = i
                        }
                    }
                }
            }, _.CMD = l;
            var b = _;
            t.exports = b
        },
        e2dc: function(t, e, i) {
            var n = i("b2de"),
                r = 1e-4;
            var a = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;

            function o(t) {
                if (0 === t) return 0;
                var e = Math.floor(Math.log(t) / Math.LN10);
                return t / Math.pow(10, e) >= 10 && e++, e
            }
            e.linearMap = function(t, e, i, n) {
                var r = e[1] - e[0],
                    a = i[1] - i[0];
                if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
                if (n)
                    if (r > 0) {
                        if (t <= e[0]) return i[0];
                        if (t >= e[1]) return i[1]
                    } else {
                        if (t >= e[0]) return i[0];
                        if (t <= e[1]) return i[1]
                    }
                else {
                    if (t === e[0]) return i[0];
                    if (t === e[1]) return i[1]
                }
                return (t - e[0]) / r * a + i[0]
            }, e.parsePercent = function(t, e) {
                switch (t) {
                    case "center":
                    case "middle":
                        t = "50%";
                        break;
                    case "left":
                    case "top":
                        t = "0%";
                        break;
                    case "right":
                    case "bottom":
                        t = "100%"
                }
                return "string" == typeof t ? function(t) {
                    return t.replace(/^\s+|\s+$/g, "")
                }(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
            }, e.round = function(t, e, i) {
                return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t
            }, e.asc = function(t) {
                return t.sort((function(t, e) {
                    return t - e
                })), t
            }, e.getPrecision = function(t) {
                if (t = +t, isNaN(t)) return 0;
                for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
            }, e.getPrecisionSafe = function(t) {
                var e = t.toString(),
                    i = e.indexOf("e");
                if (i > 0) {
                    var n = +e.slice(i + 1);
                    return n < 0 ? -n : 0
                }
                var r = e.indexOf(".");
                return r < 0 ? 0 : e.length - 1 - r
            }, e.getPixelPrecision = function(t, e) {
                var i = Math.log,
                    n = Math.LN10,
                    r = Math.floor(i(t[1] - t[0]) / n),
                    a = Math.round(i(Math.abs(e[1] - e[0])) / n),
                    o = Math.min(Math.max(-r + a, 0), 20);
                return isFinite(o) ? o : 20
            }, e.getPercentWithPrecision = function(t, e, i) {
                if (!t[e]) return 0;
                var r = n.reduce(t, (function(t, e) {
                    return t + (isNaN(e) ? 0 : e)
                }), 0);
                if (0 === r) return 0;
                for (var a = Math.pow(10, i), o = n.map(t, (function(t) {
                        return (isNaN(t) ? 0 : t) / r * a * 100
                    })), s = 100 * a, l = n.map(o, (function(t) {
                        return Math.floor(t)
                    })), u = n.reduce(l, (function(t, e) {
                        return t + e
                    }), 0), c = n.map(o, (function(t, e) {
                        return t - l[e]
                    })); u < s;) {
                    for (var h = Number.NEGATIVE_INFINITY, d = null, f = 0, p = c.length; f < p; ++f) c[f] > h && (h = c[f], d = f);
                    ++l[d], c[d] = 0, ++u
                }
                return l[e] / a
            }, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = function(t) {
                var e = 2 * Math.PI;
                return (t % e + e) % e
            }, e.isRadianAroundZero = function(t) {
                return t > -r && t < r
            }, e.parseDate = function(t) {
                if (t instanceof Date) return t;
                if ("string" == typeof t) {
                    var e = a.exec(t);
                    if (!e) return new Date(NaN);
                    if (e[8]) {
                        var i = +e[4] || 0;
                        return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
                    }
                    return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
                }
                return null == t ? new Date(NaN) : new Date(Math.round(t))
            }, e.quantity = function(t) {
                return Math.pow(10, o(t))
            }, e.quantityExponent = o, e.nice = function(t, e) {
                var i = o(t),
                    n = Math.pow(10, i),
                    r = t / n;
                return t = (e ? r < 1.5 ? 1 : r < 2.5 ? 2 : r < 4 ? 3 : r < 7 ? 5 : 10 : r < 1 ? 1 : r < 2 ? 2 : r < 3 ? 3 : r < 5 ? 5 : 10) * n, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
            }, e.quantile = function(t, e) {
                var i = (t.length - 1) * e + 1,
                    n = Math.floor(i),
                    r = +t[n - 1],
                    a = i - n;
                return a ? r + a * (t[n] - r) : r
            }, e.reformIntervals = function(t) {
                t.sort((function(t, e) {
                    return function t(e, i, n) {
                        return e.interval[n] < i.interval[n] || e.interval[n] === i.interval[n] && (e.close[n] - i.close[n] == (n ? -1 : 1) || !n && t(e, i, 1))
                    }(t, e, 0) ? -1 : 1
                }));
                for (var e = -1 / 0, i = 1, n = 0; n < t.length;) {
                    for (var r = t[n].interval, a = t[n].close, o = 0; o < 2; o++) r[o] <= e && (r[o] = e, a[o] = o ? 1 : 1 - i), e = r[o], i = a[o];
                    r[0] === r[1] && a[0] * a[1] != 1 ? t.splice(n, 1) : n++
                }
                return t
            }, e.isNumeric = function(t) {
                return t - parseFloat(t) >= 0
            }
        },
        e342: function(t, e, i) {
            var n = i("b2de").isFunction;
            t.exports = function(t, e, i) {
                return {
                    seriesType: t,
                    performRawSeries: !0,
                    reset: function(t, r, a) {
                        var o = t.getData(),
                            s = t.get("symbol"),
                            l = t.get("symbolSize"),
                            u = t.get("symbolKeepAspect"),
                            c = n(s),
                            h = n(l),
                            d = c || h,
                            f = !c && s ? s : e,
                            p = h ? null : l;
                        if (o.setVisual({
                                legendSymbol: i || f,
                                symbol: f,
                                symbolSize: p,
                                symbolKeepAspect: u
                            }), !r.isSeriesFiltered(t)) return {
                            dataEach: o.hasItemOption || d ? function(e, i) {
                                if (d) {
                                    var n = t.getRawValue(i),
                                        r = t.getDataParams(i);
                                    c && e.setItemVisual(i, "symbol", s(n, r)), h && e.setItemVisual(i, "symbolSize", l(n, r))
                                }
                                if (e.hasItemOption) {
                                    var a = e.getItemModel(i),
                                        o = a.getShallow("symbol", !0),
                                        u = a.getShallow("symbolSize", !0),
                                        f = a.getShallow("symbolKeepAspect", !0);
                                    null != o && e.setItemVisual(i, "symbol", o), null != u && e.setItemVisual(i, "symbolSize", u), null != f && e.setItemVisual(i, "symbolKeepAspect", f)
                                }
                            } : null
                        }
                    }
                }
            }
        },
        e369: function(t, e, i) {
            i("f4f4");
            var n = i("3c57").extend({
                type: "grid",
                dependencies: ["xAxis", "yAxis"],
                layoutMode: "box",
                coordinateSystem: null,
                defaultOption: {
                    show: !1,
                    zlevel: 0,
                    z: 0,
                    left: "10%",
                    top: 60,
                    right: "10%",
                    bottom: 60,
                    containLabel: !1,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    borderColor: "#ccc"
                }
            });
            t.exports = n
        },
        e43f: function(t, e, i) {
            var n = i("b2de"),
                r = i("84cd"),
                a = function(t, e, i, n, a) {
                    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = a || !1, r.call(this, n)
                };
            a.prototype = {
                constructor: a
            }, n.inherits(a, r);
            var o = a;
            t.exports = o
        },
        e559: function(t, e) {
            var i = "#eee",
                n = function() {
                    return {
                        axisLine: {
                            lineStyle: {
                                color: i
                            }
                        },
                        axisTick: {
                            lineStyle: {
                                color: i
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: i
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: "dashed",
                                color: "#aaa"
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: i
                            }
                        }
                    }
                },
                r = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
                a = {
                    color: r,
                    backgroundColor: "#333",
                    tooltip: {
                        axisPointer: {
                            lineStyle: {
                                color: i
                            },
                            crossStyle: {
                                color: i
                            },
                            label: {
                                color: "#000"
                            }
                        }
                    },
                    legend: {
                        textStyle: {
                            color: i
                        }
                    },
                    textStyle: {
                        color: i
                    },
                    title: {
                        textStyle: {
                            color: i
                        }
                    },
                    toolbox: {
                        iconStyle: {
                            normal: {
                                borderColor: i
                            }
                        }
                    },
                    dataZoom: {
                        textStyle: {
                            color: i
                        }
                    },
                    visualMap: {
                        textStyle: {
                            color: i
                        }
                    },
                    timeline: {
                        lineStyle: {
                            color: i
                        },
                        itemStyle: {
                            normal: {
                                color: r[1]
                            }
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: i
                                }
                            }
                        },
                        controlStyle: {
                            normal: {
                                color: i,
                                borderColor: i
                            }
                        }
                    },
                    timeAxis: n(),
                    logAxis: n(),
                    valueAxis: n(),
                    categoryAxis: n(),
                    line: {
                        symbol: "circle"
                    },
                    graph: {
                        color: r
                    },
                    gauge: {
                        title: {
                            textStyle: {
                                color: i
                            }
                        }
                    },
                    candlestick: {
                        itemStyle: {
                            normal: {
                                color: "#FD1050",
                                color0: "#0CF49B",
                                borderColor: "#FD1050",
                                borderColor0: "#0CF49B"
                            }
                        }
                    }
                };
            a.categoryAxis.splitLine.show = !1;
            var o = a;
            t.exports = o
        },
        e62d0: function(t, e, i) {
            var n = i("b2de"),
                r = i("76be"),
                a = i("0127").makeInner,
                o = i("8dab"),
                s = o.enableClassExtend,
                l = o.enableClassCheck,
                u = i("9b57"),
                c = i("c10c"),
                h = i("b96b"),
                d = i("18c4"),
                f = n.mixin,
                p = a();

            function g(t, e, i) {
                this.parentModel = e, this.ecModel = i, this.option = t
            }

            function v(t, e, i) {
                for (var n = 0; n < e.length && (!e[n] || null != (t = t && "object" == typeof t ? t[e[n]] : null)); n++);
                return null == t && i && (t = i.get(e)), t
            }

            function m(t, e) {
                var i = p(t).getParent;
                return i ? i.call(t, e) : t.parentModel
            }
            g.prototype = {
                constructor: g,
                init: null,
                mergeOption: function(t) {
                    n.merge(this.option, t, !0)
                },
                get: function(t, e) {
                    return null == t ? this.option : v(this.option, this.parsePath(t), !e && m(this, t))
                },
                getShallow: function(t, e) {
                    var i = this.option,
                        n = null == i ? i : i[t],
                        r = !e && m(this, t);
                    return null == n && r && (n = r.getShallow(t)), n
                },
                getModel: function(t, e) {
                    var i;
                    return new g(null == t ? this.option : v(this.option, t = this.parsePath(t)), e = e || (i = m(this, t)) && i.getModel(t), this.ecModel)
                },
                isEmpty: function() {
                    return null == this.option
                },
                restoreData: function() {},
                clone: function() {
                    return new(0, this.constructor)(n.clone(this.option))
                },
                setReadOnly: function(t) {},
                parsePath: function(t) {
                    return "string" == typeof t && (t = t.split(".")), t
                },
                customizeGetParent: function(t) {
                    p(this).getParent = t
                },
                isAnimationEnabled: function() {
                    if (!r.node) {
                        if (null != this.option.animation) return !!this.option.animation;
                        if (this.parentModel) return this.parentModel.isAnimationEnabled()
                    }
                }
            }, s(g), l(g), f(g, u), f(g, c), f(g, h), f(g, d);
            var y = g;
            t.exports = y
        },
        e843: function(t, e) {
            var i = {
                shadowBlur: 1,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                textShadowBlur: 1,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textBoxShadowBlur: 1,
                textBoxShadowOffsetX: 1,
                textBoxShadowOffsetY: 1
            };
            t.exports = function(t, e, n) {
                return i.hasOwnProperty(e) ? n * t.dpr : n
            }
        },
        ea92: function(t, e, i) {
            var n = i("56ab"),
                r = i("95ac"),
                a = i("b2de"),
                o = a.extend,
                s = a.isArray;
            t.exports = function(t, e, i) {
                e = s(e) && {
                    coordDimensions: e
                } || o({}, e);
                var a = t.getSource(),
                    l = n(a, e),
                    u = new r(l, t);
                return u.initData(a, i), u
            }
        },
        ebea: function(t, e, i) {
            var n = i("b2de");
            t.exports = function(t) {
                for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
                return function(e, i, r) {
                    for (var a = {}, o = 0; o < t.length; o++) {
                        var s = t[o][1];
                        if (!(i && n.indexOf(i, s) >= 0 || r && n.indexOf(r, s) < 0)) {
                            var l = e.getShallow(s);
                            null != l && (a[t[o][0]] = l)
                        }
                    }
                    return a
                }
            }
        },
        ee6d: function(t, e, i) {
            var n = i("3caf"),
                r = i("d402"),
                a = n.extend({
                    type: "polyline",
                    shape: {
                        points: null,
                        smooth: !1,
                        smoothConstraint: null
                    },
                    style: {
                        stroke: "#000",
                        fill: null
                    },
                    buildPath: function(t, e) {
                        r.buildPath(t, e, !1)
                    }
                });
            t.exports = a
        },
        ef2e: function(t, e, i) {
            var n = i("56b7"),
                r = i("b2de");

            function a(t, e, i) {
                var n, a = {},
                    o = "toggleSelected" === t;
                return i.eachComponent("legend", (function(i) {
                    o && null != n ? i[n ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? i[t]() : (i[t](e.name), n = i.isSelected(e.name));
                    var s = i.getData();
                    r.each(s, (function(t) {
                        var e = t.get("name");
                        if ("\n" !== e && "" !== e) {
                            var n = i.isSelected(e);
                            a.hasOwnProperty(e) ? a[e] = a[e] && n : a[e] = n
                        }
                    }))
                })), "allSelect" === t || "inverseSelect" === t ? {
                    selected: a
                } : {
                    name: e.name,
                    selected: a
                }
            }
            n.registerAction("legendToggleSelect", "legendselectchanged", r.curry(a, "toggleSelected")), n.registerAction("legendAllSelect", "legendselectall", r.curry(a, "allSelect")), n.registerAction("legendInverseSelect", "legendinverseselect", r.curry(a, "inverseSelect")), n.registerAction("legendSelect", "legendselected", r.curry(a, "select")), n.registerAction("legendUnSelect", "legendunselected", r.curry(a, "unSelect"))
        },
        f101: function(t, e, i) {
            var n = i("6b25"),
                r = i("df91"),
                a = n.identity,
                o = 5e-5;

            function s(t) {
                return t > o || t < -o
            }
            var l = function(t) {
                    (t = t || {}).position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
                },
                u = l.prototype;
            u.transform = null, u.needLocalTransform = function() {
                return s(this.rotation) || s(this.position[0]) || s(this.position[1]) || s(this.scale[0] - 1) || s(this.scale[1] - 1)
            };
            var c = [];
            u.updateTransform = function() {
                var t = this.parent,
                    e = t && t.transform,
                    i = this.needLocalTransform(),
                    r = this.transform;
                if (i || e) {
                    r = r || n.create(), i ? this.getLocalTransform(r) : a(r), e && (i ? n.mul(r, t.transform, r) : n.copy(r, t.transform)), this.transform = r;
                    var o = this.globalScaleRatio;
                    if (null != o && 1 !== o) {
                        this.getGlobalScale(c);
                        var s = c[0] < 0 ? -1 : 1,
                            l = c[1] < 0 ? -1 : 1,
                            u = ((c[0] - s) * o + s) / c[0] || 0,
                            h = ((c[1] - l) * o + l) / c[1] || 0;
                        r[0] *= u, r[1] *= u, r[2] *= h, r[3] *= h
                    }
                    this.invTransform = this.invTransform || n.create(), n.invert(this.invTransform, r)
                } else r && a(r)
            }, u.getLocalTransform = function(t) {
                return l.getLocalTransform(this, t)
            }, u.setTransform = function(t) {
                var e = this.transform,
                    i = t.dpr || 1;
                e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
            }, u.restoreTransform = function(t) {
                var e = t.dpr || 1;
                t.setTransform(e, 0, 0, e, 0, 0)
            };
            var h = [],
                d = n.create();
            u.setLocalTransform = function(t) {
                if (t) {
                    var e = t[0] * t[0] + t[1] * t[1],
                        i = t[2] * t[2] + t[3] * t[3],
                        n = this.position,
                        r = this.scale;
                    s(e - 1) && (e = Math.sqrt(e)), s(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), n[0] = t[4], n[1] = t[5], r[0] = e, r[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e)
                }
            }, u.decomposeTransform = function() {
                if (this.transform) {
                    var t = this.parent,
                        e = this.transform;
                    t && t.transform && (n.mul(h, t.invTransform, e), e = h);
                    var i = this.origin;
                    i && (i[0] || i[1]) && (d[4] = i[0], d[5] = i[1], n.mul(h, e, d), h[4] -= i[0], h[5] -= i[1], e = h), this.setLocalTransform(e)
                }
            }, u.getGlobalScale = function(t) {
                var e = this.transform;
                return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
            }, u.transformCoordToLocal = function(t, e) {
                var i = [t, e],
                    n = this.invTransform;
                return n && r.applyTransform(i, i, n), i
            }, u.transformCoordToGlobal = function(t, e) {
                var i = [t, e],
                    n = this.transform;
                return n && r.applyTransform(i, i, n), i
            }, l.getLocalTransform = function(t, e) {
                a(e = e || []);
                var i = t.origin,
                    r = t.scale || [1, 1],
                    o = t.rotation || 0,
                    s = t.position || [0, 0];
                return i && (e[4] -= i[0], e[5] -= i[1]), n.scale(e, e, r), o && n.rotate(e, e, o), i && (e[4] += i[0], e[5] += i[1]), e[4] += s[0], e[5] += s[1], e
            };
            var f = l;
            t.exports = f
        },
        f4f4: function(t, e, i) {
            var n = i("b2de"),
                r = i("3c57"),
                a = i("d4d0"),
                o = i("03c1"),
                s = r.extend({
                    type: "cartesian2dAxis",
                    axis: null,
                    init: function() {
                        s.superApply(this, "init", arguments), this.resetRange()
                    },
                    mergeOption: function() {
                        s.superApply(this, "mergeOption", arguments), this.resetRange()
                    },
                    restoreData: function() {
                        s.superApply(this, "restoreData", arguments), this.resetRange()
                    },
                    getCoordSysModel: function() {
                        return this.ecModel.queryComponents({
                            mainType: "grid",
                            index: this.option.gridIndex,
                            id: this.option.gridId
                        })[0]
                    }
                });

            function l(t, e) {
                return e.type || (e.data ? "category" : "value")
            }
            n.merge(s.prototype, o);
            var u = {
                offset: 0
            };
            a("x", s, l, u), a("y", s, l, u);
            var c = s;
            t.exports = c
        },
        f965: function(t, e, i) {
            var n = i("3caf").extend({
                type: "ellipse",
                shape: {
                    cx: 0,
                    cy: 0,
                    rx: 0,
                    ry: 0
                },
                buildPath: function(t, e) {
                    var i = .5522848,
                        n = e.cx,
                        r = e.cy,
                        a = e.rx,
                        o = e.ry,
                        s = a * i,
                        l = o * i;
                    t.moveTo(n - a, r), t.bezierCurveTo(n - a, r - l, n - s, r - o, n, r - o), t.bezierCurveTo(n + s, r - o, n + a, r - l, n + a, r), t.bezierCurveTo(n + a, r + l, n + s, r + o, n, r + o), t.bezierCurveTo(n - s, r + o, n - a, r + l, n - a, r), t.closePath()
                }
            });
            t.exports = n
        },
        f9df: function(t, e, i) {
            var n = i("a16b"),
                r = i("8d63"),
                a = i("df91"),
                o = i("4f94");

            function s(t, e, i) {
                if (this.name = t, this.geometries = e, i) i = [i[0], i[1]];
                else {
                    var n = this.getBoundingRect();
                    i = [n.x + n.width / 2, n.y + n.height / 2]
                }
                this.center = i
            }
            s.prototype = {
                constructor: s,
                properties: null,
                getBoundingRect: function() {
                    var t = this._rect;
                    if (t) return t;
                    for (var e = Number.MAX_VALUE, i = [e, e], o = [-e, -e], s = [], l = [], u = this.geometries, c = 0; c < u.length; c++)
                        if ("polygon" === u[c].type) {
                            var h = u[c].exterior;
                            r.fromPoints(h, s, l), a.min(i, i, s), a.max(o, o, l)
                        } return 0 === c && (i[0] = i[1] = o[0] = o[1] = 0), this._rect = new n(i[0], i[1], o[0] - i[0], o[1] - i[1])
                },
                contain: function(t) {
                    var e = this.getBoundingRect(),
                        i = this.geometries;
                    if (!e.contain(t[0], t[1])) return !1;
                    t: for (var n = 0, r = i.length; n < r; n++)
                        if ("polygon" === i[n].type) {
                            var a = i[n].exterior,
                                s = i[n].interiors;
                            if (o.contain(a, t[0], t[1])) {
                                for (var l = 0; l < (s ? s.length : 0); l++)
                                    if (o.contain(s[l])) continue t;
                                return !0
                            }
                        }
                    return !1
                },
                transformTo: function(t, e, i, r) {
                    var o = this.getBoundingRect(),
                        s = o.width / o.height;
                    i ? r || (r = i / s) : i = s * r;
                    for (var l = new n(t, e, i, r), u = o.calculateTransform(l), c = this.geometries, h = 0; h < c.length; h++)
                        if ("polygon" === c[h].type) {
                            for (var d = c[h].exterior, f = c[h].interiors, p = 0; p < d.length; p++) a.applyTransform(d[p], d[p], u);
                            for (var g = 0; g < (f ? f.length : 0); g++)
                                for (p = 0; p < f[g].length; p++) a.applyTransform(f[g][p], f[g][p], u)
                        }(o = this._rect). copy(l), this.center = [o.x + o.width / 2, o.y + o.height / 2]
                },
                cloneShallow: function(t) {
                    null == t && (t = this.name);
                    var e = new s(t, this.geometries, this.center);
                    return e._rect = this._rect, e.transformTo = null, e
                }
            };
            var l = s;
            t.exports = l
        },
        fa21: function(t, e, i) {
            var n = i("b2de"),
                r = n.createHashMap,
                a = n.isTypedArray,
                o = i("8dab").enableClassCheck,
                s = i("cfb8"),
                l = s.SOURCE_FORMAT_ORIGINAL,
                u = s.SERIES_LAYOUT_BY_COLUMN,
                c = s.SOURCE_FORMAT_UNKNOWN,
                h = s.SOURCE_FORMAT_TYPED_ARRAY,
                d = s.SOURCE_FORMAT_KEYED_COLUMNS;

            function f(t) {
                this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === d ? {} : []), this.sourceFormat = t.sourceFormat || c, this.seriesLayoutBy = t.seriesLayoutBy || u, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && r(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
            }
            f.seriesDataToSource = function(t) {
                return new f({
                    data: t,
                    sourceFormat: a(t) ? h : l,
                    fromDataset: !1
                })
            }, o(f);
            var p = f;
            t.exports = p
        },
        fab7: function(t, e, i) {
            var n = i("b2de"),
                r = i("8dab").parseClassType,
                a = 0;
            e.getUID = function(t) {
                return [t || "", a++, Math.random().toFixed(5)].join("_")
            }, e.enableSubTypeDefaulter = function(t) {
                var e = {};
                return t.registerSubTypeDefaulter = function(t, i) {
                    t = r(t), e[t.main] = i
                }, t.determineSubType = function(i, n) {
                    var a = n.type;
                    if (!a) {
                        var o = r(i).main;
                        t.hasSubTypes(i) && e[o] && (a = e[o](n))
                    }
                    return a
                }, t
            }, e.enableTopologicalTravel = function(t, e) {
                function i(t) {
                    var i = {},
                        a = [];
                    return n.each(t, (function(o) {
                        var s = r(i, o),
                            l = function(t, e) {
                                var i = [];
                                return n.each(t, (function(t) {
                                    n.indexOf(e, t) >= 0 && i.push(t)
                                })), i
                            }(s.originalDeps = e(o), t);
                        s.entryCount = l.length, 0 === s.entryCount && a.push(o), n.each(l, (function(t) {
                            n.indexOf(s.predecessor, t) < 0 && s.predecessor.push(t);
                            var e = r(i, t);
                            n.indexOf(e.successor, t) < 0 && e.successor.push(o)
                        }))
                    })), {
                        graph: i,
                        noEntryList: a
                    }
                }

                function r(t, e) {
                    return t[e] || (t[e] = {
                        predecessor: [],
                        successor: []
                    }), t[e]
                }
                t.topologicalTravel = function(t, e, r, a) {
                    if (t.length) {
                        var o = i(e),
                            s = o.graph,
                            l = o.noEntryList,
                            u = {};
                        for (n.each(t, (function(t) {
                                u[t] = !0
                            })); l.length;) {
                            var c = l.pop(),
                                h = s[c],
                                d = !!u[c];
                            d && (r.call(a, c, h.originalDeps.slice()), delete u[c]), n.each(h.successor, d ? p : f)
                        }
                        n.each(u, (function() {
                            throw new Error("Circle dependency may exists")
                        }))
                    }

                    function f(t) {
                        s[t].entryCount--, 0 === s[t].entryCount && l.push(t)
                    }

                    function p(t) {
                        u[t] = !0, f(t)
                    }
                }
            }
        },
        fd9f: function(t, e, i) {
            var n = i("b2de"),
                r = i("1f2e").devicePixelRatio,
                a = i("73f9"),
                o = i("4e20");

            function s() {
                return !1
            }

            function l(t, e, i) {
                var r = n.createCanvas(),
                    a = e.getWidth(),
                    o = e.getHeight(),
                    s = r.style;
                return s && (s.position = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s.height = o + "px", r.setAttribute("data-zr-dom-id", t)), r.width = a * i, r.height = o * i, r
            }
            var u = function(t, e, i) {
                var a;
                i = i || r, "string" == typeof t ? a = l(t, e, i) : n.isObject(t) && (t = (a = t).id), this.id = t, this.dom = a;
                var o = a.style;
                o && (a.onselectstart = s, o["-webkit-user-select"] = "none", o["user-select"] = "none", o["-webkit-touch-callout"] = "none", o["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", o.padding = 0, o.margin = 0, o["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
            };
            u.prototype = {
                constructor: u,
                __dirty: !0,
                __used: !1,
                __drawIndex: 0,
                __startIndex: 0,
                __endIndex: 0,
                incremental: !1,
                getElementCount: function() {
                    return this.__endIndex - this.__startIndex
                },
                initContext: function() {
                    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
                },
                createBackBuffer: function() {
                    var t = this.dpr;
                    this.domBack = l("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
                },
                resize: function(t, e) {
                    var i = this.dpr,
                        n = this.dom,
                        r = n.style,
                        a = this.domBack;
                    r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 !== i && this.ctxBack.scale(i, i))
                },
                clear: function(t, e) {
                    var i, n = this.dom,
                        r = this.ctx,
                        s = n.width,
                        l = n.height,
                        u = (e = e || this.clearColor, this.motionBlur && !t),
                        c = this.lastFrameAlpha,
                        h = this.dpr;
                    if (u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, s / h, l / h)), r.clearRect(0, 0, s, l), e && "transparent" !== e && (e.colorStops ? (i = e.__canvasGradient || a.getGradient(r, e, {
                            x: 0,
                            y: 0,
                            width: s,
                            height: l
                        }), e.__canvasGradient = i) : e.image && (i = o.prototype.getCanvasPattern.call(e, r)), r.save(), r.fillStyle = i || e, r.fillRect(0, 0, s, l), r.restore()), u) {
                        var d = this.domBack;
                        r.save(), r.globalAlpha = c, r.drawImage(d, 0, 0, s, l), r.restore()
                    }
                }
            };
            var c = u;
            t.exports = c
        },
        ff76: function(t, e, i) {
            "use strict";
            var n = i("60e1");
            i.n(n).a
        }
    }
]);