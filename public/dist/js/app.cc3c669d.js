! function(t) {
    function e(e) {
        for (var a, i, s = e[0], c = e[1], l = e[2], d = 0, p = []; d < s.length; d++) i = s[d], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        for (u && u(e); p.length;) p.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], a = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (a = !1)
            }
            a && (r.splice(e--, 1), t = i(i.s = n[0]))
        }
        return t
    }
    var a = {},
        o = {
            app: 0
        },
        r = [];

    function i(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = a, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) i.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/dist/";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var l = 0; l < s.length; l++) e(s[l]);
    var u = c;
    r.push([0, "chunk-vendors"]), n()
}({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "0b1d": function(t, e, n) {
        "use strict";
        var a = n("c7fb");
        n.n(a).a
    },
    "121e": function(t, e, n) {
        "use strict";
        var a = n("20fa");
        n.n(a).a
    },
    "177a": function(t, e, n) {},
    "18a7": function(t, e, n) {
        "use strict";
        var a = n("e74f");
        n.n(a).a
    },
    "20fa": function(t, e, n) {},
    "3bae": function(t, e, n) {},
    "4ae2": function(t, e, n) {
        "use strict";
        var a = n("e197");
        n.n(a).a
    },
    "54e8": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e), n("e623"), n("e379"), n("5dc8"), n("37e1");
        var a = n("a026"),
            o = (n("d3b7"), n("0122")),
            r = n("f3f3"),
            i = (n("ed22"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    ref: "app",
                    class: {
                        "s-opacity-75": t.opacity
                    }
                }, [t.opacity ? a("img", {
                    staticStyle: {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        display: "inline-block",
                        cursor: "pointer"
                    },
                    attrs: {
                        src: n("d23f"),
                        alt: "关闭背景特效",
                        title: "关闭背景特效"
                    },
                    on: {
                        click: t.removeBackground
                    }
                }) : t._e(), a("header", {
                    staticClass: "gray-background"
                }, [a("div", {
                    staticClass: "header"
                }, [t.config.logo && t.config.logo.length ? a("a", {
                    attrs: {
                        href: "/",
                        target: "_blank"
                    }
                }, [a("img", {
                    staticClass: "logo",
                    attrs: {
                        src: t.config.logo,
                        alt: t.config.name
                    }
                })]) : a("a", {
                    staticClass: "header-title",
                    attrs: {
                        href: "/"
                    }
                }, [t._v(t._s(t.config.name))]), a("div", {
                    staticClass: "top-nav"
                }, [t.config.shop ? t._e() : a("a", {
                    staticClass: "header-btn",
                    attrs: {
                        href: "/"
                    }
                }, [t._v("首页")]), t.isMobile ? t._e() : [t.config.shop ? a("a", {
                    staticClass: "header-btn",
                    class: {
                        active: "buy" === t.topNav
                    },
                    on: {
                        click: function(e) {
                            return t.handleNavChange("buy")
                        }
                    }
                }, [t._v("购买商品")]) : t._e(), a("a", {
                    staticClass: "header-btn",
                    class: {
                        active: "record" === t.topNav
                    },
                    on: {
                        click: function(e) {
                            return t.handleNavChange("record")
                        }
                    }
                }, [t._v("查询记录")]), "shop" === t.PROJECT ? a("a", {
                    staticClass: "header-btn",
                    class: {
                        active: "report" === t.topNav
                    },
                    on: {
                        click: function(e) {
                            return t.handleNavChange("report")
                        }
                    }
                }, [t._v("投诉订单")]) : t._e()]], 2)])]), a("div", {
                    staticClass: "main"
                }, [t.isMobile ? ["buy" === t.topNav ? a("buy-view") : t._e(), "record" === t.topNav ? a("record-view") : t._e(), "shop" === t.PROJECT && "report" === t.topNav ? a("report-view") : t._e()] : t._e(), t.isMobile ? t._e() : [a("transition", {
                    attrs: {
                        name: "slide-fade"
                    }
                }, [a("buy-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "buy" === t.topNav,
                        expression: "topNav === 'buy'"
                    }]
                })], 1), a("transition", {
                    attrs: {
                        name: "slide-fade"
                    }
                }, [a("record-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "record" === t.topNav,
                        expression: "topNav === 'record'"
                    }]
                })], 1), a("transition", {
                    attrs: {
                        name: "slide-fade"
                    }
                }, [a("report-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "report" === t.topNav,
                        expression: "topNav === 'report'"
                    }]
                })], 1)], a("footer", [a("p", {
                    staticClass: "text"
                }, [a("a", {
                    on: {
                        click: t.devTest
                    }
                }, [t._v(t._s(t.cp_company))]), "shop_free" === t.PROJECT ? a("a", {
                    staticClass: "link",
                    staticStyle: {
                        float: "right"
                    },
                    attrs: {
                        href: t.cp_link,
                        target: "_blank"
                    }
                }, [a("i", {
                    staticClass: "icon iconfont"
                }, [t._v("")])]) : t._e()])])], 2), t.isMobile ? a("mu-bottom-nav", {
                    ref: "bottomNav",
                    staticClass: "white-background",
                    staticStyle: {
                        position: "fixed",
                        bottom: "0",
                        width: "100%"
                    },
                    attrs: {
                        value: t.bottomNav
                    },
                    on: {
                        change: t.handleBottomNavChange
                    }
                }, [t.config.shop ? a("mu-bottom-nav-item", {
                    attrs: {
                        value: "buy",
                        title: "商品购买",
                        icon: "add_shopping_cart"
                    }
                }) : t._e(), a("mu-bottom-nav-item", {
                    attrs: {
                        value: "record",
                        title: "订单查询",
                        icon: "search"
                    }
                }), "shop" === t.PROJECT ? a("mu-bottom-nav-item", {
                    attrs: {
                        value: "report",
                        title: "投诉订单",
                        icon: "report_problem"
                    }
                }) : t._e()], 1) : t._e()], 1)
            }),
            s = (n("4160"), n("c975"), n("b0c0"), n("b64b"), n("ac1f"), n("1276"), n("159b"), n("a15b"), n("4d63"), n("25f0"), n("5319"), n("ff81")),
            c = (n("466d"), {
                isDesktop: function() {
                    return window.innerWidth > 993
                },
                detectOs: function() {
                    var t = null;
                    return /NT 5./i.test(navigator.userAgent) ? t = /wow64|win64|ia64|x64/i.test(navigator.userAgent) ? "xp-64" : "xp-32" : /NT 6.|NT 7.|NT 8.|NT 9.|NT 10./i.test(navigator.userAgent) ? t = /wow64|win64|ia64|x64/i.test(navigator.userAgent) ? "vista-64" : "vista-32" : /iPhone|iPad|iPod/i.test(navigator.userAgent) ? t = "ios" : /Android/i.test(navigator.userAgent) ? t = "android" : /Macintosh/i.test(navigator.userAgent) && (t = "osx"), t
                },
                isMobile: function() {
                    return null !== navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)
                },
                isQQ: function() {
                    return / QQ\//i.test(navigator.userAgent)
                },
                isWechat: function() {
                    return /MicroMessenger/i.test(navigator.userAgent)
                }
            });
        window.nullfunc = console.log, Date.prototype.format = function(t) {
            t || (t = "yyyy-MM-dd hh:mm:ss");
            var e = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
            return t
        };
        var l = function() {
            function t(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                if (t && e)
                    if (void 0 !== n) {
                        var a = new Date;
                        a.setTime(a.getTime() + n), document.cookie = t + "=" + encodeURI(e) + "; expires=" + a.toUTCString() + "; path=/"
                    } else document.cookie = t + "=" + encodeURI(e) + "; path=/"
            }
            return {
                set: t,
                get: function(t) {
                    var e = ("; " + document.cookie).split("; " + t + "=");
                    if (e.length >= 2) return e.pop().split(";").shift()
                },
                del: function(e) {
                    t(e, "null", -1)
                }
            }
        }();

        function u(t) {
            t = t || 16;
            for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = e.length, a = "", o = 0; o < t; o++) a += e.charAt(Math.floor(Math.random() * n));
            return a
        }

        function d(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!t || "{" !== t[0]) return t;
            var n = null;
            try {
                n = JSON.parse(t)
            } catch (e) {
                return t
            }
            if (e) {
                if (!n.ops || !n.ops.length) return !1;
                if (1 === n.ops.length && "\n" === n.ops[0].insert) return !1
            }
            return '<div class="ql-snow"><div class="ql-editor quill-html">'.concat(new s.QuillDeltaToHtmlConverter(n.ops, {
                urlSanitizer: function(t) {
                    var e = t;
                    e = e.replace(/^\s*/gm, "");
                    return /^((https?|s?ftp|blob|mailto|tel|mqqapi):|#|\/|data:image\/)/.test(e) ? e : "unsafe:" + e
                }
            }).convert(), "</div></div>")
        }

        function p(t) {
            var e = document.createElement("div"),
                n = document.createTextNode(t);
            return e.appendChild(n), e.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }

        function f() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [];
            for (var a in t)
                if (t.hasOwnProperty(a))
                    if (t[a] && "object" === Object(o.a)(t[a])) !1 === e ? n.push(f(t[a], encodeURIComponent(a))) : n.push(f(t[a], e + "[" + encodeURIComponent(a) + "]"));
                    else {
                        var r = encodeURIComponent(null === t[a] || void 0 === t[a] ? "" : t[a]);
                        a = !1 === e ? encodeURIComponent(a) : e + "[" + encodeURIComponent(a) + "]", n.push(a + "=" + r)
                    } return n.join("&")
        }
        String.prototype.random = u;
        var h = (n("99af"), n("4de4"), n("caad"), n("b680"), n("2532"), n("ddb0"), n("96cf"), n("c964"));

        function m(t) {
            return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(t.trim())
        }

        function v(t) {
            return /^[0-9]+$/.test(t)
        }
        n("498a");
        var g = {
                name: "payway",
                props: {
                    value: {}
                },
                data: function() {
                    return {
                        pays: window.config.pays,
                        active: null
                    }
                },
                mounted: function() {
                    this.active = this.pays[0]
                },
                watch: {
                    value: function(t) {
                        this.active = t
                    },
                    active: function(t) {
                        this.$emit("input", t)
                    }
                }
            },
            _ = (n("756f"), n("2877")),
            C = Object(_.a)(g, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "ways-container"
                }, t._l(t.pays, (function(e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "payway",
                        class: {
                            checked: t.active === e
                        },
                        on: {
                            click: function(n) {
                                t.active = e
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.img,
                            alt: e.name
                        }
                    }), n("p", [t._v(t._s(e.name))])])
                })), 0)
            }), [], !1, null, "2fc8a47d", null).exports,
            b = {
                name: "buy-header",
                props: {
                    shop: {}
                },
                data: function() {
                    return {
                        PROJECT: "shop_free"
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        if (t.shop.ann_pop && t.shop.ann_pop.length) {
                            var e = t.renderDelta(t.shop.ann_pop, !0);
                            e && t.$alert({
                                message: e,
                                title: "店铺公告",
                                scrollable: !0
                            })
                        }
                    }))
                },
                methods: {
                    renderDelta: d,
                    handleHelp: function() {
                        window.open("http://wpa.qq.com/msgrd?v=1&uin=" + this.shop.qq + "&site=fakaxitong.com&menu=yes", "_blank")
                    }
                }
            },
            y = (n("4ae2"), Object(_.a)(b, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", ["shop" === t.PROJECT ? n("mu-card", {
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", {
                    staticClass: "shop-info"
                }, [n("mu-chip", {
                    attrs: {
                        color: "#fb4b4b",
                        "text-color": "#fff"
                    },
                    on: {
                        click: t.handleHelp
                    }
                }, [t._v("帮助")]), n("div", [n("span", {
                    staticClass: "title"
                }, [t._v("商家名称：")]), t._v(t._s(t.shop.name))]), n("div", [n("span", {
                    staticClass: "title"
                }, [t._v("商家ＱＱ：")]), n("a", {
                    staticClass: "qq",
                    attrs: {
                        href: "http://wpa.qq.com/msgrd?v=1&uin=" + t.shop.qq + "&site=fakaxitong.com&menu=yes",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.shop.qq)), n("i", {
                    staticClass: "icon iconfont"
                }, [t._v("")])])])], 1)], 1) : t._e(), t.renderDelta(t.shop.ann, !0) ? n("mu-card", {
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", {
                    staticClass: "shop-info"
                }, [n("div", [n("span", {
                    staticClass: "title"
                }, [t._v(t._s("shop" === t.PROJECT ? "商家公告：" : "公告："))])]), n("div", {
                    domProps: {
                        innerHTML: t._s(t.renderDelta(t.shop.ann))
                    }
                })])], 1) : t._e()], 1)
            }), [], !1, null, "696e6668", null)).exports,
            w = window.config.functions && window.config.functions.includes("product_manual"),
            x = {
                name: "ProductsList",
                props: ["categories", "category", "product"],
                data: function() {
                    return {
                        isMobile: c.isMobile(),
                        PRODUCT_MANUAL: w
                    }
                },
                methods: {
                    chooseCategory: function(t) {
                        this.$emit("update:category", t)
                    },
                    chooseProduct: function(t, e) {
                        var n = this;
                        return Object(h.a)(regeneratorRuntime.mark((function a() {
                            return regeneratorRuntime.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return n.$emit("update:category", t), a.next = 3, n.$nextTick();
                                    case 3:
                                        n.$emit("update:product", e);
                                    case 4:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }
                }
            },
            k = (n("bfe4"), n("8f4c"), Object(_.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: null === t.product,
                        expression: "product === null"
                    }]
                }, t._l(t.categories, (function(e) {
                    return n("mu-card", {
                        key: "category_list_" + e.id,
                        staticClass: "my-card white-background"
                    }, [n("mu-card-title", {
                        staticClass: "list-select-title",
                        attrs: {
                            title: e.name
                        }
                    }), t.isMobile ? n("mu-card-text", {
                        ref: "product",
                        refInFor: !0,
                        staticClass: "list-select list-select-mobile"
                    }, [n("table", [n("tbody", [e.password_open && !e.products ? n("tr", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("td", [n("mu-icon", {
                        attrs: {
                            value: "lock",
                            size: 12
                        }
                    }), t._v(" "), n("a", {
                        staticClass: "pass",
                        on: {
                            click: function(n) {
                                return t.chooseCategory(e)
                            }
                        }
                    }, [t._v("输入密码查看")]), e.progress ? n("mu-circular-progress", {
                        staticStyle: {
                            width: "100%",
                            "text-align": "center"
                        },
                        attrs: {
                            size: 40
                        }
                    }) : t._e()], 1)]) : t._e(), !e.password_open && e.products && 0 === e.products.length ? n("tr", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("td", [t._v(" 暂无商品 ")])]) : t._e(), t._l(e.products, (function(a) {
                        return n("tr", {
                            key: "product_" + e.id + "_" + a.id
                        }, [n("td", [n("div", [t._v(" " + t._s(a.name) + " "), a.password_open ? n("mu-icon", {
                            attrs: {
                                value: "lock",
                                size: 12
                            }
                        }) : t._e()], 1), n("div", {
                            staticClass: "count-mobile"
                        }, [n("mu-chip", {
                            attrs: {
                                color: "#00b5ff",
                                "text-color": "#fff"
                            }
                        }, [t._v("库存 " + t._s(a.count2))])], 1), t.PRODUCT_MANUAL ? n("div", {
                            staticClass: "delivery-mobile"
                        }, [0 === a.delivery ? n("mu-chip", {
                            attrs: {
                                color: "#00b5ff",
                                "text-color": "#fff"
                            }
                        }, [t._v("自动发货")]) : n("mu-chip", {
                            attrs: {
                                color: "#dd9f00",
                                "text-color": "#fff"
                            }
                        }, [t._v("手动充值")])], 1) : t._e(), n("div", {
                            staticClass: "price-mobile"
                        }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(a.price))))]), n("div", {
                            staticClass: "buy-btn-mobile"
                        }, [n("a", {
                            on: {
                                click: function(n) {
                                    return t.chooseProduct(e, a)
                                }
                            }
                        }, [t._v("购买")])])])])
                    }))], 2)])]) : n("mu-card-text", {
                        ref: "product",
                        refInFor: !0,
                        staticClass: "list-select list-select-pc"
                    }, [n("table", [n("thead", [n("tr", [n("th", {
                        staticStyle: {
                            width: "80%"
                        }
                    }, [t._v("商品名称")]), n("th", [t._v("单价")]), n("th", [t._v("库存")]), n("th", {
                        staticStyle: {
                            "text-align": "right"
                        },
                        attrs: {
                            width: "50"
                        }
                    }, [t._v("操作")])])]), n("tbody", [e.password_open && !e.products ? n("tr", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("td", {
                        attrs: {
                            colspan: "4"
                        }
                    }, [n("mu-icon", {
                        attrs: {
                            value: "lock",
                            size: 12
                        }
                    }), t._v(" "), n("a", {
                        staticClass: "pass",
                        on: {
                            click: function(n) {
                                return t.chooseCategory(e)
                            }
                        }
                    }, [t._v("输入密码查看")]), e.progress ? n("mu-circular-progress", {
                        staticStyle: {
                            width: "100%",
                            "text-align": "center"
                        },
                        attrs: {
                            size: 40
                        }
                    }) : t._e()], 1)]) : t._e(), !e.password_open && e.products && 0 === e.products.length ? n("tr", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("td", {
                        attrs: {
                            colspan: "4"
                        }
                    }, [t._v(" 暂无商品 ")])]) : t._e(), t._l(e.products, (function(a) {
                        return n("tr", {
                            key: "product_" + e.id + "_" + a.id
                        }, [n("td", [t._v(" " + t._s(a.name) + " "), a.password_open ? n("mu-icon", {
                            attrs: {
                                value: "lock",
                                size: 12
                            }
                        }) : t._e()], 1), n("td", [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(a.price))))]), n("td", [t._v(t._s(a.count2))]), n("td", {
                            staticStyle: {
                                "text-align": "right"
                            }
                        }, [n("a", {
                            on: {
                                click: function(n) {
                                    return t.chooseProduct(e, a)
                                }
                            }
                        }, [t._v("购买")])])])
                    }))], 2)])])], 1)
                })), 1), null !== t.product && t.product.id > 0 ? n("mu-card", {
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", [t.product.progress ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : n("div", [n("a", {
                    staticStyle: {
                        float: "right",
                        margin: "-14px -14px 0 0"
                    }
                }, [n("mu-button", {
                    attrs: {
                        color: "red",
                        icon: ""
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("update:product", null)
                        }
                    }
                }, [n("mu-icon", {
                    attrs: {
                        value: "close"
                    }
                })], 1)], 1), t._t("info")], 2)], 1)], 1) : t._e()], 1)
            }), [], !1, null, "26d7c333", null)).exports,
            A = {
                name: "ProductsDropdown",
                props: ["categories", "category", "product", "categoryErr", "productErr"],
                methods: {
                    chooseCategory: function(t) {
                        this.$emit("update:category", t)
                    },
                    chooseProduct: function(t) {
                        this.$emit("update:product", t)
                    }
                }
            },
            E = (n("57b8"), Object(_.a)(A, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("mu-card", {
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", [n("mu-select", {
                    ref: "category",
                    staticClass: "shop-select",
                    attrs: {
                        name: "category",
                        label: "请选择商品分类",
                        value: t.category,
                        filterable: t.categories.length > 10,
                        errorText: t.categoryErr
                    },
                    on: {
                        change: function(e) {
                            return t.chooseCategory(e)
                        }
                    }
                }, t._l(t.categories, (function(e) {
                    return n("mu-option", {
                        key: e.id,
                        attrs: {
                            value: e,
                            label: e.name
                        }
                    }, [e.password_open ? n("mu-icon", {
                        staticStyle: {
                            position: "absolute",
                            left: "2px"
                        },
                        attrs: {
                            value: "lock",
                            size: 12
                        }
                    }) : t._e(), t._v(" " + t._s(e.name) + " ")], 1)
                })), 1), t.category && t.category.progress ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : t._e(), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [t.category && t.category.products && t.category.products.length ? n("mu-select", {
                    ref: "product",
                    staticClass: "shop-select",
                    attrs: {
                        errorText: t.productErr,
                        filterable: t.categories.length > 10,
                        value: t.product,
                        name: "product_id",
                        label: "请选择商品"
                    },
                    on: {
                        change: function(e) {
                            return t.chooseProduct(e)
                        }
                    }
                }, t._l(t.category.products, (function(e) {
                    return n("mu-option", {
                        key: e.id,
                        attrs: {
                            value: e,
                            label: e.name
                        }
                    }, [e.password_open ? n("mu-icon", {
                        staticStyle: {
                            position: "absolute",
                            left: "2px"
                        },
                        attrs: {
                            value: "lock",
                            size: 12
                        }
                    }) : t._e(), t._v(" " + t._s(e.name) + " ")], 1)
                })), 1) : t._e()], 1), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [null !== t.product && t.product.id > 0 ? n("div", [t.product.progress ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : n("div", [n("div", {
                    staticClass: "label mu-text-field-label"
                }, [t._v(" 商品信息 ")]), t._t("info")], 2)], 1) : t._e()])], 1)], 1)], 1)
            }), [], !1, null, "6cdfab44", null)).exports,
            S = {
                name: "ProductsButton",
                props: ["categories", "category", "product", "categoryErr", "productErr"],
                methods: {
                    chooseCategory: function(t) {
                        this.$emit("update:category", t)
                    },
                    chooseProduct: function(t) {
                        this.$emit("update:product", t)
                    }
                }
            },
            T = (n("592d"), Object(_.a)(S, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("mu-card", {
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", [n("div", {
                    ref: "category",
                    staticClass: "button-select"
                }, [n("div", {
                    staticClass: "label mu-text-field-label"
                }, [t._v("请选择商品分类")]), t._l(t.categories, (function(e) {
                    return n("mu-ripple", {
                        key: e.id,
                        staticClass: "button-select-item",
                        class: {
                            checked: t.category === e
                        },
                        on: {
                            click: function(n) {
                                return t.chooseCategory(e)
                            }
                        }
                    }, [t._v(t._s(e.name) + " "), e.password_open ? n("mu-icon", {
                        attrs: {
                            value: "lock",
                            size: 12
                        }
                    }) : t._e()], 1)
                })), t.categoryErr ? n("div", {
                    staticClass: "input-help",
                    staticStyle: {
                        color: "#f44336"
                    }
                }, [n("div", [t._v(t._s(t.categoryErr))])]) : t._e()], 2), t.category && t.category.progress ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : t._e(), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [t.category && t.category.products && t.category.products.length ? n("div", {
                    ref: "product",
                    staticClass: "button-select"
                }, [n("div", {
                    staticClass: "label mu-text-field-label"
                }, [t._v("请选择商品")]), t._l(t.category.products, (function(e) {
                    return n("mu-ripple", {
                        key: e.id,
                        staticClass: "button-select-item",
                        class: {
                            checked: t.product === e
                        },
                        on: {
                            click: function(n) {
                                return t.chooseProduct(e)
                            }
                        }
                    }, [t._v(t._s(e.name) + " "), e.password_open ? n("mu-icon", {
                        attrs: {
                            value: "lock",
                            size: 12
                        }
                    }) : t._e()], 1)
                })), t.productErr ? n("div", {
                    staticClass: "input-help",
                    staticStyle: {
                        color: "#f44336"
                    }
                }, [n("div", [t._v(t._s(t.productErr))])]) : t._e()], 2) : t._e()]), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [null !== t.product && t.product.id > 0 ? n("div", [t.product.progress ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : n("div", [n("div", {
                    staticClass: "label mu-text-field-label"
                }, [t._v(" 商品信息 ")]), t._t("info")], 2)], 1) : t._e()])], 1)], 1)], 1)
            }), [], !1, null, "1d79e0c6", null)).exports,
            R = {
                name: "ProductsNull",
                props: ["product"]
            },
            I = (n("5ae7"), Object(_.a)(R, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("mu-card", {
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", [null !== t.product && t.product.id > 0 ? n("div", [t._t("info")], 2) : t._e()])], 1)], 1)
            }), [], !1, null, "724834ff", null)).exports;

        function M(t) {
            return !isNaN(t) && "1" === t[0] && 11 === t.length
        }
        var P, D = window.config.functions && window.config.functions.includes("mail_send_order"),
            $ = window.config.functions && window.config.functions.includes("mail_send_order_use_contact"),
            O = window.config.functions && window.config.functions.includes("sms_send_order"),
            N = window.config.functions && window.config.functions.includes("order_query_password"),
            F = {
                components: {
                    ProductsButton: T,
                    ProductsDropdown: E,
                    ProductsList: k,
                    ProductsNull: I,
                    BuyHeader: y,
                    Payway: C
                },
                data: function() {
                    var t = "shop",
                        e = window.config.theme.list_type || "button";
                    window.config.product && window.config.product.id > 0 && (t = "product", e = "null");
                    var n = window.config.theme.single_mode || "flow";
                    return {
                        config: window.config,
                        PROJECT: "shop_free",
                        shopType: t,
                        shop: window.config.shop,
                        showType: e,
                        singleMode: n,
                        MAIL_SEND_ORDER: D,
                        MAIL_SEND_ORDER_USE_CONTACT: $,
                        SMS_SEND_ORDER: O,
                        ORDER_QUERY_PASSWORD: N,
                        sms_send_order: window.config.sms_send_order,
                        submitting: !1,
                        fields: {
                            type: "any",
                            need_ext: !1,
                            ext: [],
                            values: [],
                            errors: []
                        },
                        category: null,
                        categories: [],
                        product: null,
                        showDiscountTip: !1,
                        buyCount: "1",
                        sendSms: !1,
                        smsTo: "",
                        sendMail: !1,
                        mailTo: "",
                        coupon: "",
                        contact: "",
                        query_password: "",
                        countErr: "",
                        couponErr: "",
                        contactErr: "",
                        queryPassErr: "",
                        smsErr: "",
                        mailErr: "",
                        couponInfo: null,
                        payway: null,
                        payConfirmShow: !1
                    }
                },
                computed: {
                    categoryErr: function() {
                        return this.category ? "" : "请选择商品分类"
                    },
                    productErr: function() {
                        return this.product ? "" : "请选择商品"
                    },
                    pricePer: function() {
                        var t = parseInt(this.buyCount),
                            e = this.product.price;
                        if (this.canPriceWhole)
                            for (var n = this.product.price_whole, a = n.length - 1; a >= 0; a--)
                                if (t >= parseInt(n[a][0])) {
                                    e = parseInt(n[a][1]);
                                    break
                                } return e
                    },
                    priceAll: function() {
                        var t = parseInt(this.buyCount) || 0;
                        return this.pricePer * t
                    },
                    renderPrice: function() {
                        var t = this.priceAll,
                            e = 0;
                        this.couponInfo && (0 === this.couponInfo.discount_type ? t >= this.couponInfo.discount_val && (e = this.couponInfo.discount_val) : 1 === this.couponInfo.discount_type && (e = Math.round(t * this.couponInfo.discount_val / 100)), t -= e);
                        var n = 0;
                        return 1 == +this.shop.fee_type && this.payway && ((n = Math.round(t * this.payway.fee / (1 - this.payway.fee))) > 0 && (t += n)), this.sendSms && (t += this.sms_send_order.sms_price), {
                            price: t,
                            fee: n,
                            discount: e
                        }
                    },
                    renderDiscount: function() {
                        if (!this.canPriceWhole) return "无";
                        var t = this.product.price_whole,
                            e = "";
                        return t.forEach((function(t) {
                            e += "满".concat(t[0], "件，每件￥").concat((t[1] / 100).toFixed(2), "<br>")
                        })), e
                    },
                    canPriceWhole: function() {
                        return this.product.price_whole && "object" === Object(o.a)(this.product.price_whole) && this.product.price_whole.length
                    },
                    showType_List_ShowList: function() {
                        return "list" === this.showType && null === this.product
                    }
                },
                watch: {
                    category: function(t) {
                        null === t && this.$refs.category && (this.$refs.category.isFocused = !1), this.handleCategoryChange(t)
                    },
                    product: function(t) {
                        null === t && this.$refs.product && (this.$refs.product.isFocused = !1), this.handleProductChange(t)
                    },
                    buyCount: function() {
                        this.checkCoupon()
                    }
                },
                mounted: function() {
                    this.shop ? ("product" === this.shopType ? (this.categories = this.config.categories, this.category = this.config.categories[0], this.product = this.config.product, this.product.password = function(t, e) {
                        e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
                        var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                    }("p"), this.product = this.config.product) : this.config.categories && this.config.categories.length ? (this.categories = this.config.categories, "dropdown" !== this.showType && "button" !== this.showType || 1 !== this.categories.length || this.categories[0].password_open || (this.category = this.categories[0])) : (this.categories = [{
                        id: -2,
                        name: "没有在售商品"
                    }], this.category = this.categories[0]), this.onContactInput(!1), this.onContactExtInput(!1)) : "buy" === window.$router.nav && window.$router.push("record")
                },
                methods: {
                    renderDelta: d,
                    handleCategoryChange: function(t) {
                        var e = this;
                        return Object(h.a)(regeneratorRuntime.mark((function n() {
                            var a;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if ("product" !== e.shopType) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (!(!t || t.id <= 0 || t.progress)) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 4:
                                        if (e.product = null, t.products) {
                                            n.next = 43;
                                            break
                                        }
                                        if (a = "", !t.password_open) {
                                            n.next = 19;
                                            break
                                        }
                                        return n.prev = 8, n.next = 11, e.$alert({
                                            message: "分类密码",
                                            title: "请输入分类密码",
                                            needInput: !0,
                                            cancelBtnTitle: "取消"
                                        });
                                    case 11:
                                        a = n.sent.input, n.next = 19;
                                        break;
                                    case 14:
                                        return n.prev = 14, n.t0 = n.catch(8), e.category = null, n.abrupt("return");
                                    case 19:
                                        return n.prev = 19, e.$set(t, "progress", !0), n.t1 = e, n.t2 = t, n.next = 25, e.$http.post("product", {
                                            category_id: t.id,
                                            password: a
                                        });
                                    case 25:
                                        if (n.t3 = n.sent.data, n.t1.$set.call(n.t1, n.t2, "products", n.t3), t.password = a, t.products && t.products.length) {
                                            n.next = 32;
                                            break
                                        }
                                        return t.products = [{
                                            id: -2,
                                            name: "此分类下没有商品"
                                        }], e.product = t.products[0], n.abrupt("return");
                                    case 32:
                                        n.next = 38;
                                        break;
                                    case 34:
                                        return n.prev = 34, n.t4 = n.catch(19), e.category = null, n.abrupt("return");
                                    case 38:
                                        return n.prev = 38, e.$set(t, "progress", !1), n.finish(38);
                                    case 41:
                                        n.next = 44;
                                        break;
                                    case 43:
                                        t.products.length || (t.products = [{
                                            id: -2,
                                            name: "此分类下没有商品"
                                        }]);
                                    case 44:
                                        "dropdown" !== e.showType && "button" !== e.showType || 1 !== t.products.length || t.products[0].password_open || (e.product = t.products[0]);
                                    case 45:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [8, 14],
                                [19, 34, 38, 41]
                            ])
                        })))()
                    },
                    handleProductChange: function(t) {
                        var e = this;
                        return Object(h.a)(regeneratorRuntime.mark((function n() {
                            var a;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t && !(t.id <= 0)) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (e.coupon = "", e.couponInfo = null, t.price_whole && "string" == typeof t.price_whole && "[" === t.price_whole[0] && (t.price_whole = JSON.parse(t.price_whole)), t.fields && "string" == typeof t.fields && "{" === t.fields[0] && (Object.assign(e.fields, JSON.parse(t.fields)), e.fields.values = new Array(e.fields.ext.length), e.fields.errors = new Array(e.fields.ext.length)), e.onContactInput(!1), e.onContactExtInput(!1), "product" === e.shopType) {
                                            n.next = 35;
                                            break
                                        }
                                        if (!t.password_open || void 0 !== t.password) {
                                            n.next = 35;
                                            break
                                        }
                                        return a = "", n.prev = 11, e.$set(t, "progress", !0), n.next = 15, e.$alert({
                                            message: "商品密码",
                                            title: "请输入商品密码",
                                            needInput: !0,
                                            cancelBtnTitle: "取消"
                                        });
                                    case 15:
                                        a = n.sent.input, n.next = 23;
                                        break;
                                    case 18:
                                        return n.prev = 18, n.t0 = n.catch(11), e.$set(t, "progress", !1), e.product = null, n.abrupt("return");
                                    case 23:
                                        return n.prev = 23, n.next = 26, e.$http.post("product/password", {
                                            product_id: t.id,
                                            password: a
                                        });
                                    case 26:
                                        t.password = a, n.next = 32;
                                        break;
                                    case 29:
                                        n.prev = 29, n.t1 = n.catch(23), e.product = null;
                                    case 32:
                                        return n.prev = 32, e.$set(t, "progress", !1), n.finish(32);
                                    case 35:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [11, 18],
                                [23, 29, 32, 35]
                            ])
                        })))()
                    },
                    showDiscount: function(t) {
                        var e = "";
                        t.price_whole.forEach((function(t) {
                            e += "满".concat(t[0], "件，每件￥").concat((t[1] / 100).toFixed(2), "<br>")
                        })), this.$alert(e, "批发优惠")
                    },
                    onCountInput: function() {
                        this.buyCount = this.buyCount ? parseInt(this.buyCount) : 0, this.buyCount < this.product.buy_min ? this.countErr = "该商品最少购买".concat(this.product.buy_min, "件，请重新选择") : this.buyCount > this.product.buy_max ? this.countErr = "该商品限购".concat(this.product.buy_max, "件，请重新选择") : this.countErr = ""
                    },
                    onCouponChange: function(t) {
                        var e = this;
                        if (this.coupon = "string" == typeof t ? t : t.target.value, !this.coupon || !this.coupon.length) return this.couponErr = "", void(this.couponInfo = null);
                        this.submitting = !0, this.$http.post("coupon", {
                            category_id: this.category.id,
                            product_id: this.product.id,
                            coupon: this.coupon
                        }).then((function(t) {
                            e.couponInfo = t.data, e.checkCoupon()
                        })).catch((function() {
                            e.couponInfo = null, e.couponErr = "优惠券信息无效"
                        })).finally((function() {
                            e.submitting = !1
                        }))
                    },
                    checkCoupon: function() {
                        this.couponErr = "", this.couponInfo && 0 === this.couponInfo.discount_type && this.priceAll < this.couponInfo.discount_val && (this.couponErr = "商品金额满￥".concat((this.couponInfo.discount_val / 100).toFixed(2), "可用"))
                    },
                    onContactExtInput: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = !0;
                        if (this.fields.need_ext)
                            for (var n = 0; n < this.fields.values.length; n++) this.fields.values[n] || !1 === t ? this.fields.errors[n] = null : (this.fields.errors[n] = "请填写 ".concat(this.fields.ext[n]), e = !1);
                        return e
                    },
                    onContactInput: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (!this.contact && !1 === t) return this.contactErr = "", !0;
                        if ("any" === this.fields.type) {
                            if (!this.contact) return this.contactErr = "请填写您的联系信息，如QQ、邮箱、手机号等等，用于查询订单", !1;
                            if (this.contact.length < 6) return this.contactErr = "联系信息至少为6位", !1
                        } else if ("email" === this.fields.type) {
                            if (!this.contact) return this.contactErr = "请填写您的邮箱，用于查询订单", !1;
                            if (!m(this.contact)) return this.contactErr = "输入的邮箱格式不正确", !1
                        } else if ("mobile" === this.fields.type) {
                            if (!this.contact) return this.contactErr = "请填写您的手机号码，用于查询订单", !1;
                            if (!M(this.contact)) return this.contactErr = "输入的手机号格式不正确", !1
                        } else if ("qq" === this.fields.type) {
                            if (!this.contact) return this.contactErr = "请填写您的QQ号码，用于查询订单", !1;
                            if (this.contact.length < 5 || this.contact.length > 11 || !v(this.contact)) return this.contactErr = "输入的QQ号码格式不正确", !1
                        }
                        return this.contactErr = "", !0
                    },
                    onQueryPasswordInput: function() {
                        if (!this.query_password) return this.queryPassErr = "请输入订单查询密码", !1;
                        if (this.query_password.length < 6) return this.queryPassErr = "查询密码至少为6位", !1;
                        return ["123456", "password", "12345678", "qwerty", "123456789", "12345", "1234", "111111", "1234567", "dragon", "123123", "baseball", "abc123", "football", "monkey", "letmein", "696969", "shadow", "master", "666666", "qwertyuiop", "123321", "mustang", "1234567890", "michael", "654321", "pussy", "superman", "1qaz2wsx", "7777777", "fuckyou", "121212", "000000", "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", "hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", "iloveyou", "fuckme", "2000", "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "asshole", "computer", "michelle", "jessica", "pepper", "1111", "zxcvbn", "555555", "11111111", "131313", "freedom", "777777", "pass", "fuck", "maggie", "159753", "aaaaaa", "ginger", "princess", "joshua", "cheese", "amanda", "summer", "love", "ashley", "6969", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "987654321", "dallas", "austin", "thunder", "taylor", "matrix", "minecraft"].includes(this.query_password) ? (this.queryPassErr = "当前查询密码存在安全风险，请更换", !1) : (this.queryPassErr = "", !0)
                    },
                    onSmsInput: function() {
                        return this.smsTo ? M(this.smsTo) ? (this.smsErr = "", !0) : (this.smsErr = "输入的手机号格式不正确", !1) : (this.smsErr = "请填写需要接受订单信息的手机号码", !1)
                    },
                    onMailInput: function() {
                        return this.mailTo ? m(this.mailTo) ? (this.mailErr = "", !0) : (this.mailErr = "输入的邮箱格式不正确", !1) : (this.mailErr = "请填写需要接受订单信息的邮箱", !1)
                    },
                    onSendSmsChange: function(t) {
                        t && !this.smsTo && M(this.contact) && (this.smsTo = this.contact)
                    },
                    onSendMailChange: function(t) {
                        t && !this.mailTo && m(this.contact) && (this.mailTo = this.contact)
                    },
                    calcContactExt: function() {
                        for (var t = {}, e = 0; e < this.fields.ext.length; e++) t[this.fields.ext[e]] = this.fields.values[e];
                        return this.sendSms && (t._mobile = this.smsTo), this.sendMail && (t._mail = this.mailTo), $ && m(this.contact) && (t._mail = this.contact), JSON.stringify(t)
                    },
                    handlePay: function() {
                        var t = this;
                        return Object(h.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(parseInt(t.buyCount) < 1)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert("请输入正确的购买数量"));
                                    case 2:
                                        if (!(parseInt(t.product.count) <= 0)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert("当前商品已售罄"));
                                    case 4:
                                        if (t.onCountInput(), !t.countErr) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.countErr));
                                    case 8:
                                        if (!t.couponErr) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.couponErr));
                                    case 11:
                                        if (!(parseInt(t.product.count) < parseInt(t.buyCount))) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert("当前商品库存不足，请调整购买数目"));
                                    case 13:
                                        if (!1 !== t.onContactInput()) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.contactErr, "联系方式无效"));
                                    case 15:
                                        if (!N || !1 !== t.onQueryPasswordInput()) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.contactErr, "订单查询密码无效"));
                                    case 17:
                                        if (!t.sendSms || !1 !== t.onSmsInput()) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.smsErr, "手机号无效"));
                                    case 19:
                                        if (!t.sendMail || !1 !== t.onMailInput()) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.mailErr, "邮箱无效"));
                                    case 21:
                                        if (!1 !== t.onContactExtInput()) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.abrupt("return", t.$alert(t.fields.errors.filter((function(t) {
                                            return !!t
                                        })).join("<br>"), "联系信息无效"));
                                    case 23:
                                    case 27:
                                        e.next = 32;
                                        break;
                                    case 29:
                                        return e.prev = 29, e.t0 = e.catch(24), e.abrupt("return");
                                    case 32:
                                        t.payConfirmShow = !0;
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [24, 29]
                            ])
                        })))()
                    },
                    showWarningTip: function() {
                        var t = this;
                        return Object(h.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return '\n      <div style="display: block;">\n      本站仅提供自动发货服务，不做任何商品售后<br>\n      发现假卡或欺诈，请于<strong style="color: red">当天来发卡平台投诉</strong>,\n      过期概不受理<br>\n      (下单后请于15分钟内完成支付)</div>\n      ', e.abrupt("return", t.$alert({
                                            message: '\n      <div style="display: block;">\n      本站仅提供自动发货服务，不做任何商品售后<br>\n      发现假卡或欺诈，请于<strong style="color: red">当天来发卡平台投诉</strong>,\n      过期概不受理<br>\n      (下单后请于15分钟内完成支付)</div>\n      ',
                                            title: "重要声明",
                                            cancelBtnTitle: "返回",
                                            submitBtnTitle: "继续购买"
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    confirmPay: function() {
                        var t = this;
                        return Object(h.a)(regeneratorRuntime.mark((function e() {
                            var n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!window.config.captcha.scene.shop.buy) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, t.$captcha.refresh();
                                    case 4:
                                        return e.next = 6, t.$captcha.verify();
                                    case 6:
                                        e.next = 14;
                                        break;
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(1), "cancel" !== e.t0.message && t.$alert(e.t0.message || "请重新验证", "验证码验证失败").finally((function() {
                                            t.$captcha.focus()
                                        })), e.abrupt("return");
                                    case 14:
                                        return (n = l.get("customer")) && 32 === n.length || (n = u(32), l.set("customer", n, 2592e6)), a = window.config.url + "/api/shop/buy?category_id=".concat(t.category.id, "&product_id=").concat(t.product.id), t.category.password && (a += "&category_password=" + encodeURIComponent(t.category.password)), t.product.password && (a += "&product_password=" + encodeURIComponent(t.product.password)), t.coupon && (a += "&coupon=" + encodeURIComponent(t.coupon)), a += "&count=".concat(t.buyCount), a += "&contact=".concat(encodeURIComponent(t.contact), "&contact_ext=").concat(encodeURIComponent(t.calcContactExt())), N && (a += "&query_password=".concat(encodeURIComponent(t.query_password))), a += "&customer=".concat(n, "&pay_id=").concat(t.payway.id), window.config.captcha.scene.shop.buy && (a += "&" + f(t.$captcha.value, "captcha")), window.open(a, "_blank"), "flow" === t.singleMode && (t.payConfirmShow = !1), e.prev = 27, e.next = 30, t.$alert({
                                            message: "请在弹出的窗口中完成付款",
                                            title: "提示",
                                            cancelBtnTitle: "返回",
                                            submitBtnTitle: "已付款，查询订单"
                                        });
                                    case 30:
                                        return window.$router.push("record", {
                                            tab: "cookie"
                                        }), e.next = 33, t.$nextTick();
                                    case 33:
                                        window.vm.$emit("goRecordCookie"), e.next = 39;
                                        break;
                                    case 36:
                                        e.prev = 36, e.t1 = e.catch(27);
                                    case 39:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 9],
                                [27, 36]
                            ])
                        })))()
                    }
                }
            },
            B = (n("121e"), n("0b1d"), Object(_.a)(F, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.shop ? n("div", {
                    staticClass: "content"
                }, [n("buy-header", {
                    attrs: {
                        shop: t.shop
                    }
                }), "flex" === t.singleMode && t.payConfirmShow ? t._e() : n("products-" + t.showType, {
                    tag: "component",
                    attrs: {
                        categories: t.categories,
                        category: t.category,
                        product: t.product,
                        categoryErr: t.categoryErr,
                        productErr: t.productErr
                    },
                    on: {
                        "update:category": function(e) {
                            t.category = e
                        },
                        "update:product": function(e) {
                            t.product = e
                        }
                    }
                }, [t.product ? n("div", {
                    attrs: {
                        slot: "info"
                    },
                    slot: "info"
                }, ["flow" === t.singleMode ? n("div", {
                    staticClass: "product-flow"
                }, [n("div", [("list" === t.showType || "product" === t.shopType) && t.categories && t.categories.length ? n("div", [n("input", {
                    attrs: {
                        type: "hidden",
                        name: "category_id",
                        title: "category_id"
                    },
                    domProps: {
                        value: t.category.id
                    }
                }), n("span", {
                    staticClass: "title"
                }, [t._v("商品分类：")]), n("span", [t._v(t._s(t.category.name))])]) : t._e(), "list" !== t.showType && "product" !== t.shopType || !t.product ? t._e() : n("div", [n("input", {
                    attrs: {
                        type: "hidden",
                        name: "product_id",
                        title: "product_id"
                    },
                    domProps: {
                        value: t.product.id
                    }
                }), n("span", {
                    staticClass: "title"
                }, [t._v("商品名称：")]), n("span", [t._v(t._s(t.product.name))])]), n("div", {
                    staticClass: "info-item"
                }, [n("p", [n("span", {
                    staticClass: "title"
                }, [t._v("单价：")]), n("span", {
                    staticClass: "val"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.product.price))))])]), n("p", [n("span", {
                    staticClass: "title"
                }, [t._v("库存：")]), n("span", {
                    staticClass: "val"
                }, [t._v(t._s(t.product.count2))])])]), n("div", {
                    staticClass: "info-item"
                }, [t.canPriceWhole ? n("p", [n("span", {
                    staticClass: "title"
                }, [t._v("批发价：")]), n("span", {
                    staticClass: "val"
                }, [n("a", {
                    staticStyle: {
                        cursor: "pointer"
                    },
                    on: {
                        mouseover: function(e) {
                            t.showDiscountTip = !0
                        },
                        mouseleave: function(e) {
                            t.showDiscountTip = !1
                        },
                        click: function(e) {
                            return t.showDiscount(t.product)
                        }
                    }
                }, [t._v("点击查看")]), t.showDiscountTip ? n("div", {
                    staticClass: "discount-tip",
                    domProps: {
                        innerHTML: t._s(t.renderDiscount)
                    }
                }) : t._e()])]) : t._e(), t.product.support_coupon ? n("p", [n("span", {
                    staticClass: "title"
                }, [t._v("优惠券：")]), n("span", {
                    staticClass: "val"
                }, [t._v(t._s(t.product.support_coupon ? "支持" : "不可用"))])]) : t._e()]), n("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.renderDelta(t.product.description))
                    }
                })]), n("mu-text-field", {
                    staticClass: "buy-count",
                    staticStyle: {
                        width: "64px"
                    },
                    attrs: {
                        name: "count",
                        type: "number",
                        errorText: t.countErr,
                        labelFloat: "",
                        label: "购买数目"
                    },
                    on: {
                        input: t.onCountInput
                    },
                    model: {
                        value: t.buyCount,
                        callback: function(e) {
                            t.buyCount = e
                        },
                        expression: "buyCount"
                    }
                }), n("div", {
                    staticClass: "price-item equal-with-mu",
                    staticStyle: {
                        "vertical-align": "top"
                    }
                }, [n("span", {
                    staticClass: "money"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.price))))]), t.renderPrice.discount ? n("span", {
                    staticClass: "money-discount"
                }, [t._v("（已优惠" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.discount))) + "）")]) : t._e(), t.renderPrice.fee ? n("span", {
                    staticClass: "money-fee"
                }, [t._v("（手续费" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.fee))) + "）")]) : t._e()]), "email" === t.fields.type ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "email",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系邮箱",
                        placeholder: "请输入邮箱，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                }) : "mobile" === t.fields.type ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "mobile",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系手机号",
                        placeholder: "请输入手机号，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                }) : "qq" === t.fields.type ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "qq",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系QQ",
                        placeholder: "请输入QQ号码，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                }) : n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "contact",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系方式",
                        placeholder: "可以输入QQ、邮箱、手机号等等，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                }), t.ORDER_QUERY_PASSWORD ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "query_password",
                        errorText: t.queryPassErr,
                        type: "text",
                        label: "查询密码",
                        placeholder: "请输入订单查询密码"
                    },
                    on: {
                        input: t.onQueryPasswordInput
                    },
                    model: {
                        value: t.query_password,
                        callback: function(e) {
                            t.query_password = e
                        },
                        expression: "query_password"
                    }
                }) : t._e(), t.fields.need_ext ? n("div", t._l(t.fields.ext, (function(e, a) {
                    return n("div", {
                        key: "custom_field_" + a
                    }, [n("mu-text-field", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            errorText: t.fields.errors[a],
                            type: "text",
                            label: t.fields.ext[a]
                        },
                        on: {
                            input: t.onContactExtInput
                        },
                        model: {
                            value: t.fields.values[a],
                            callback: function(e) {
                                t.$set(t.fields.values, a, e)
                            },
                            expression: "fields.values[index]"
                        }
                    })], 1)
                })), 0) : t._e(), t.product.support_coupon ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "coupon",
                        autocomplete: "off",
                        errorText: t.couponErr,
                        type: "text",
                        label: "优惠券",
                        placeholder: "请输入优惠券(没有可不填)"
                    },
                    on: {
                        change: t.onCouponChange
                    },
                    model: {
                        value: t.coupon,
                        callback: function(e) {
                            t.coupon = e
                        },
                        expression: "coupon"
                    }
                }) : t._e(), t.SMS_SEND_ORDER || t.MAIL_SEND_ORDER && !t.MAIL_SEND_ORDER_USE_CONTACT ? n("div", {
                    staticClass: "label mu-text-field-label"
                }, [t._v("附加服务 ")]) : t._e(), t.SMS_SEND_ORDER ? n("div", {
                    staticStyle: {
                        margin: "0 0 0 -2px"
                    }
                }, [n("mu-checkbox", {
                    attrs: {
                        label: "短信通知订单结果" + (t.sms_send_order.sms_price ? "（￥" + t.sms_send_order.sms_price / 100 + "）" : "")
                    },
                    on: {
                        change: t.onSendSmsChange
                    },
                    model: {
                        value: t.sendSms,
                        callback: function(e) {
                            t.sendSms = e
                        },
                        expression: "sendSms"
                    }
                })], 1) : t._e(), t.MAIL_SEND_ORDER && !t.MAIL_SEND_ORDER_USE_CONTACT ? n("div", {
                    staticStyle: {
                        margin: "0 0 8px -2px"
                    }
                }, [n("mu-checkbox", {
                    attrs: {
                        label: "邮件通知订单结果"
                    },
                    on: {
                        change: t.onSendMailChange
                    },
                    model: {
                        value: t.sendMail,
                        callback: function(e) {
                            t.sendMail = e
                        },
                        expression: "sendMail"
                    }
                })], 1) : t._e(), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [t.sendSms ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "mobile",
                        errorText: t.smsErr,
                        type: "text",
                        label: "接收订单手机号",
                        placeholder: "请输入手机号，用于接收订单短信"
                    },
                    on: {
                        input: t.onSmsInput
                    },
                    model: {
                        value: t.smsTo,
                        callback: function(e) {
                            t.smsTo = e
                        },
                        expression: "smsTo"
                    }
                }) : t._e()], 1), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [t.sendMail ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "email",
                        errorText: t.mailErr,
                        type: "text",
                        label: "接收订单邮箱",
                        placeholder: "请输入邮箱，用于接收订单邮件"
                    },
                    on: {
                        input: t.onMailInput
                    },
                    model: {
                        value: t.mailTo,
                        callback: function(e) {
                            t.mailTo = e
                        },
                        expression: "mailTo"
                    }
                }) : t._e()], 1), n("div", {
                    staticClass: "pay-way-item"
                }, [n("div", {
                    staticClass: "label mu-text-field-label"
                }, [t._v("支付方式")]), n("payway", {
                    model: {
                        value: t.payway,
                        callback: function(e) {
                            t.payway = e
                        },
                        expression: "payway"
                    }
                }), n("div", {
                    staticClass: "pay-btn-container"
                }, [n("mu-button", {
                    staticClass: "btn-pay",
                    attrs: {
                        disabled: t.submitting
                    },
                    on: {
                        click: t.handlePay
                    }
                }, [t._v(" " + t._s(t.submitting ? "加载中" : "立即购买") + " ")])], 1)], 1)], 1) : t._e(), "flex" === t.singleMode ? n("div", {
                    staticClass: "product-flex"
                }, [n("div", {
                    staticClass: "product-info"
                }, [n("div", {
                    staticClass: "product-name"
                }, [n("h2", [t._v(t._s(t.product.name))])]), n("div", {
                    staticClass: "info-item price-container"
                }, [n("div", {
                    staticClass: "info-title"
                }, [t._v("商品单价：")]), n("div", {
                    staticClass: "info-val price"
                }, [t._v(" " + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.product.price))) + " ")]), t.canPriceWhole ? n("div", {
                    staticClass: "price-whole-container"
                }, [n("div", {
                    staticClass: "info-title"
                }, [t._v("批发优惠：")]), n("div", {
                    staticClass: "info-val"
                }, [n("a", {
                    staticStyle: {
                        cursor: "pointer"
                    },
                    on: {
                        mouseover: function(e) {
                            t.showDiscountTip = !0
                        },
                        mouseleave: function(e) {
                            t.showDiscountTip = !1
                        },
                        click: function(e) {
                            return t.showDiscount(t.product)
                        }
                    }
                }, [t._v("点击查看")]), t.showDiscountTip ? n("div", {
                    staticClass: "discount-tip",
                    domProps: {
                        innerHTML: t._s(t.renderDiscount)
                    }
                }) : t._e()])]) : t._e()]), n("div", {
                    staticClass: "info-item delivery-item"
                }, [n("div", {
                    staticClass: "info-title"
                }, [t._v("发货方式：")]), n("div", {
                    staticClass: "info-val info-delivery"
                }, [0 === t.product.delivery ? n("mu-chip", {
                    attrs: {
                        color: "#00b5ff",
                        "text-color": "#fff"
                    }
                }, [t._v("自动发货")]) : n("mu-chip", {
                    attrs: {
                        color: "#dd9f00",
                        "text-color": "#fff"
                    }
                }, [t._v("手动充值")])], 1)]), n("div", {
                    staticClass: "info-item input-item"
                }, ["email" === t.fields.type ? n("div", {
                    staticClass: "input-fields"
                }, [n("mu-text-field", {
                    attrs: {
                        name: "email",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系邮箱",
                        placeholder: "请输入邮箱，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                })], 1) : "mobile" === t.fields.type ? n("div", {
                    staticClass: "input-fields"
                }, [n("mu-text-field", {
                    attrs: {
                        name: "mobile",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系手机号",
                        placeholder: "请输入手机号，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                })], 1) : "qq" === t.fields.type ? n("div", {
                    staticClass: "input-fields"
                }, [n("mu-text-field", {
                    attrs: {
                        name: "qq",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系QQ",
                        placeholder: "请输入QQ号码，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                })], 1) : n("div", {
                    staticClass: "input-fields"
                }, [n("mu-text-field", {
                    attrs: {
                        name: "contact",
                        errorText: t.contactErr,
                        type: "text",
                        label: "联系方式",
                        placeholder: "可以输入QQ、邮箱、手机号等等，用于查询订单"
                    },
                    on: {
                        input: t.onContactInput
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                })], 1), t.ORDER_QUERY_PASSWORD ? n("div", {
                    staticClass: "input-fields"
                }, [n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "query_password",
                        errorText: t.queryPassErr,
                        type: "text",
                        label: "查询密码",
                        placeholder: "请输入订单查询密码"
                    },
                    on: {
                        input: t.onQueryPasswordInput
                    },
                    model: {
                        value: t.query_password,
                        callback: function(e) {
                            t.query_password = e
                        },
                        expression: "query_password"
                    }
                })], 1) : t._e(), t.fields.need_ext ? n("div", {
                    staticClass: "input-fields"
                }, t._l(t.fields.ext, (function(e, a) {
                    return n("div", {
                        key: "custom_field_" + a
                    }, [n("mu-text-field", {
                        attrs: {
                            errorText: t.fields.errors[a],
                            type: "text",
                            label: t.fields.ext[a]
                        },
                        on: {
                            input: t.onContactExtInput
                        },
                        model: {
                            value: t.fields.values[a],
                            callback: function(e) {
                                t.$set(t.fields.values, a, e)
                            },
                            expression: "fields.values[index]"
                        }
                    })], 1)
                })), 0) : t._e(), t.product.support_coupon ? n("div", {
                    staticClass: "input-coupon"
                }, [n("mu-text-field", {
                    attrs: {
                        name: "coupon",
                        autocomplete: "off",
                        errorText: t.couponErr,
                        type: "text",
                        label: "优惠券",
                        placeholder: "请输入优惠券(没有可不填)"
                    },
                    on: {
                        change: t.onCouponChange
                    },
                    model: {
                        value: t.coupon,
                        callback: function(e) {
                            t.coupon = e
                        },
                        expression: "coupon"
                    }
                })], 1) : t._e(), n("div", {
                    staticClass: "input-count"
                }, [n("mu-text-field", {
                    staticClass: "buy-count",
                    attrs: {
                        name: "count",
                        type: "number",
                        autocomplete: "off",
                        errorText: t.countErr,
                        placeholder: "请输入购买数量",
                        label: "购买数量"
                    },
                    on: {
                        input: t.onCountInput
                    },
                    model: {
                        value: t.buyCount,
                        callback: function(e) {
                            t.buyCount = t._n(e)
                        },
                        expression: "buyCount"
                    }
                }), n("span", {
                    staticClass: "count-left"
                }, [t._v("库存 "), n("span", {
                    staticStyle: {
                        color: "#e70602"
                    }
                }, [t._v(t._s(t.product.count2))])])], 1), t.SMS_SEND_ORDER ? n("div", {
                    staticStyle: {
                        margin: "4px 0 0 -2px"
                    }
                }, [n("mu-checkbox", {
                    attrs: {
                        label: "短信通知订单结果（￥" + t.sms_send_order.sms_price / 100 + "）"
                    },
                    on: {
                        change: t.onSendSmsChange
                    },
                    model: {
                        value: t.sendSms,
                        callback: function(e) {
                            t.sendSms = e
                        },
                        expression: "sendSms"
                    }
                })], 1) : t._e(), t.MAIL_SEND_ORDER && !t.MAIL_SEND_ORDER_USE_CONTACT ? n("div", {
                    staticStyle: {
                        margin: "4px 0 0 -2px"
                    }
                }, [n("mu-checkbox", {
                    attrs: {
                        label: "邮件通知订单结果（免费)"
                    },
                    on: {
                        change: t.onSendMailChange
                    },
                    model: {
                        value: t.sendMail,
                        callback: function(e) {
                            t.sendMail = e
                        },
                        expression: "sendMail"
                    }
                })], 1) : t._e(), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [t.sendSms ? n("div", {
                    staticClass: "info-item delivery-item"
                }, [n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "mobile",
                        errorText: t.smsErr,
                        type: "text",
                        label: "接收订单手机号",
                        placeholder: "请输入手机号，用于接收订单短信"
                    },
                    on: {
                        input: t.onSmsInput
                    },
                    model: {
                        value: t.smsTo,
                        callback: function(e) {
                            t.smsTo = e
                        },
                        expression: "smsTo"
                    }
                })], 1) : t._e()]), n("transition", {
                    attrs: {
                        name: "top-slide"
                    }
                }, [t.sendMail ? n("div", {
                    staticClass: "info-item delivery-item"
                }, [n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        name: "email",
                        errorText: t.mailErr,
                        type: "text",
                        label: "接收订单邮箱",
                        placeholder: "请输入邮箱，用于接收订单邮件"
                    },
                    on: {
                        input: t.onMailInput
                    },
                    model: {
                        value: t.mailTo,
                        callback: function(e) {
                            t.mailTo = e
                        },
                        expression: "mailTo"
                    }
                })], 1) : t._e()])], 1), n("div", {
                    staticClass: "info-item"
                }, [n("div", {
                    staticClass: "info-title"
                }, [t._v("商品总价：")]), n("div", {
                    staticClass: "info-val"
                }, [n("div", {
                    staticClass: "money-total"
                }, [n("span", {
                    staticClass: "money"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.price))))]), t.renderPrice.discount ? n("span", {
                    staticClass: "money-discount"
                }, [t._v("（已优惠" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.discount))) + "）")]) : t._e(), t.renderPrice.fee ? n("span", {
                    staticClass: "money-fee"
                }, [t._v("（手续费" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.fee))) + "）")]) : t._e()])])]), n("div", {
                    staticClass: "pay-btn-container"
                }, [n("mu-button", {
                    staticClass: "btn-pay",
                    attrs: {
                        disabled: t.submitting
                    },
                    on: {
                        click: t.handlePay
                    }
                }, [t._v(" " + t._s(t.submitting ? "加载中" : "立即购买") + " ")]), "list" === t.showType ? n("mu-button", {
                    staticClass: "btn-cancel",
                    on: {
                        click: function(e) {
                            t.product = null
                        }
                    }
                }, [t._v("返回")]) : t._e()], 1)]), n("div", {
                    staticClass: "product-gap"
                }), n("div", {
                    staticClass: "product-description"
                }, [n("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.renderDelta(t.product.description))
                    }
                })])]) : t._e()]) : t._e()]), "flex" !== t.singleMode || !t.product || t.showType_List_ShowList || t.payConfirmShow ? t._e() : n("mu-card", {
                    staticClass: "my-card white-background description-mobile"
                }, [n("div", {
                    staticClass: "mu-card-text"
                }, [t.product.progress ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : n("div", [n("div", {
                    staticClass: "description-title"
                }, [n("h3", [t._v("商品说明")])]), n("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.renderDelta(t.product.description))
                    }
                })])], 1)]), "flex" === t.singleMode && t.product && t.payConfirmShow ? n("mu-card", {
                    staticClass: "my-card white-background pay-confirm-card"
                }, [n("mu-card-text", ["list" === t.showType ? n("a", {
                    staticStyle: {
                        float: "right",
                        margin: "-14px -14px 0 0"
                    }
                }, [n("mu-button", {
                    attrs: {
                        color: "red",
                        icon: ""
                    },
                    on: {
                        click: function(e) {
                            t.payConfirmShow = !1
                        }
                    }
                }, [n("mu-icon", {
                    attrs: {
                        value: "close"
                    }
                })], 1)], 1) : t._e(), n("div", {
                    staticClass: "confirm-title"
                }, [n("h3", [t._v("购买确认")])]), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("购买商品：")]), t._v(t._s(t.product.name))]), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("商品单价：")]), n("span", {
                    staticClass: "money"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.pricePer))))]), t.pricePer !== t.product.price ? n("span", {
                    staticClass: "money-fee"
                }, [t._v("（批发优惠）")]) : t._e()]), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("购买件数：")]), t._v(t._s(t.buyCount))]), t.renderPrice.discount ? n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("优惠金额：")]), n("span", {
                    staticClass: "money"
                }, [t._v("优惠券抵扣 " + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.discount))))])]) : t._e(), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("支付金额：")]), n("span", {
                    staticClass: "money"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.price))))]), t.renderPrice.fee ? n("span", {
                    staticClass: "money-fee"
                }, [t._v("（手续费" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.fee))) + "）")]) : t._e()]), n("payway", {
                    model: {
                        value: t.payway,
                        callback: function(e) {
                            t.payway = e
                        },
                        expression: "payway"
                    }
                }), n("div", {
                    staticClass: "confirm-btn-container"
                }, [n("mu-button", {
                    staticClass: "btn-confirm",
                    attrs: {
                        primary: "",
                        disabled: t.$captcha.loading
                    },
                    on: {
                        click: t.confirmPay
                    }
                }, [t._v(t._s(t.$captcha.loading ? "加载中" : "确定支付"))]), n("mu-button", {
                    staticClass: "btn-cancel",
                    on: {
                        click: function(e) {
                            t.payConfirmShow = !1
                        }
                    }
                }, [t._v("返回")])], 1)], 1)], 1) : t._e(), "flow" === t.singleMode && t.product && t.payway ? n("mu-dialog", {
                    attrs: {
                        open: t.payConfirmShow,
                        title: "购买确认"
                    },
                    on: {
                        close: function(e) {
                            t.payConfirmShow = !1
                        }
                    }
                }, [n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("购买商品：")]), t._v(t._s(t.product.name))]), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("商品单价：")]), n("span", {
                    staticClass: "money"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.pricePer))))]), t.pricePer !== t.product.price ? n("span", {
                    staticClass: "money-fee"
                }, [t._v("（批发优惠）")]) : t._e()]), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("购买件数：")]), t._v(t._s(t.buyCount))]), t.renderPrice.discount ? n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("优惠金额：")]), n("span", {
                    staticClass: "money"
                }, [t._v("优惠券抵扣 " + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.discount))))])]) : t._e(), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("支付金额：")]), n("span", {
                    staticClass: "money"
                }, [t._v(t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.price))))]), t.renderPrice.fee ? n("span", {
                    staticClass: "money-fee"
                }, [t._v("（手续费" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(t.renderPrice.fee))) + "）")]) : t._e()]), n("p", {
                    staticClass: "confirm-item"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("支付方式：")]), t._v(t._s(t.payway.name))]), n("mu-button", {
                    attrs: {
                        slot: "actions",
                        flat: ""
                    },
                    on: {
                        click: function(e) {
                            t.payConfirmShow = !1
                        }
                    },
                    slot: "actions"
                }, [t._v("取消")]), n("mu-button", {
                    attrs: {
                        slot: "actions",
                        flat: "",
                        primary: "",
                        disabled: t.$captcha.loading
                    },
                    on: {
                        click: t.confirmPay
                    },
                    slot: "actions"
                }, [t._v(t._s(t.$captcha.loading ? "加载中" : "确定支付"))])], 1) : t._e()], 1) : n("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v(" 当前店铺无商品 ")])
            }), [], !1, null, "f02cddf8", null)).exports,
            j = (n("d81d"), n("841c"), {
                STATUS_UN: {
                    id: 0,
                    name: "投诉待处理",
                    type: "info"
                },
                STATUS_ING: {
                    id: 1,
                    name: "投诉处理中",
                    type: "primary"
                },
                STATUS_APPROVE: {
                    id: 2,
                    name: "已退款",
                    type: "success"
                },
                STATUS_DENIED: {
                    id: 3,
                    name: "投诉失败",
                    type: "warning"
                },
                STATUS_CANCEL: {
                    id: 4,
                    name: "投诉已撤销",
                    type: "info"
                },
                get: function(t) {
                    for (var e in this)
                        if (this.hasOwnProperty(e) && this[e].id === t) return this[e];
                    return {
                        id: t,
                        type: "danger",
                        name: "未知状态"
                    }
                }
            }),
            U = window.config.functions && window.config.functions.includes("order_query_password"),
            q = {
                data: function() {
                    return {
                        STATUS_UNPAY: 0,
                        STATUS_PAID: 1,
                        STATUS_SUCCESS: 2,
                        STATUS_FROZEN: 3,
                        STATUS_REFUND: 4,
                        COMPLAINT_STATUS: j,
                        PROJECT: "shop_free",
                        loading: !1,
                        loaded: !1,
                        columns: [{
                            title: "时间",
                            width: 140,
                            name: "created_at",
                            align: "center"
                        }, {
                            title: "订单",
                            width: 160,
                            name: "order_no",
                            align: "center"
                        }, {
                            title: "数目/金额",
                            width: 100,
                            name: "count"
                        }, {
                            title: "订单信息",
                            width: 120,
                            name: "iron"
                        }],
                        order_no: "",
                        contact: "",
                        query_password: "",
                        list: [],
                        list_bak: {
                            cookie: [],
                            order_no: [],
                            contact: []
                        },
                        tab: ""
                    }
                },
                mounted: function() {
                    var t = this;
                    return Object(h.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    window.$router.query.tab ? t.tab = window.$router.query.tab : t.tab = "contact", window.vm.$on("goRecordCookie", (function() {
                                        t.tab = "cookie", t.handleSearch()
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                beforeDestroy: function() {
                    window.vm.$off("goRecordCookie")
                },
                methods: {
                    handleChangeTab: function(t) {
                        "cookie" === this.tab ? this.list_bak.cookie = this.list : "order_no" === this.tab ? this.list_bak.order_no = this.list : "contact" === this.tab && (this.list_bak.contact = this.list), this.tab = t, window.$router.push(window.$router.nav, {
                            tab: t
                        }), this.loaded = !1, this.loading = !1, "cookie" === this.tab ? this.list = this.list_bak.cookie : "order_no" === this.tab ? this.list = this.list_bak.order_no : "contact" === this.tab && (this.list = this.list_bak.contact)
                    },
                    onOrderNoChange: function(t) {
                        this.order_no = t.target ? t.target.value : t
                    },
                    onContactChange: function(t) {
                        this.contact = t.target ? t.target.value : t
                    },
                    handleSearch: function(t) {
                        var e = this;
                        return Object(h.a)(regeneratorRuntime.mark((function t() {
                            var n, a, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.order_no = e.order_no.trim(), e.contact = e.contact.trim(), "order_no" !== (n = e.tab)) {
                                            t.next = 7;
                                            break
                                        }
                                        if (19 === e.order_no.length) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return", e.$alert("请输入19位订单号进行查询"));
                                    case 6:
                                        e.list_bak.order_no = [];
                                    case 7:
                                        if ("contact" !== n) {
                                            t.next = 26;
                                            break
                                        }
                                        if (!(e.contact.length < 6)) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return", e.$alert("输入的联系方式格式不正确"));
                                    case 10:
                                        if (!U) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.next = 13, e.$nextTick();
                                    case 13:
                                        return t.prev = 13, t.next = 16, e.$alert({
                                            message: "请输入购买时填写的订单查询密码",
                                            title: "查询密码",
                                            cancelBtnTitle: "取消",
                                            needInput: !0,
                                            inputErrorText: "订单查询密码"
                                        });
                                    case 16:
                                        a = t.sent, o = a.input, e.query_password = o, t.next = 25;
                                        break;
                                    case 21:
                                        return t.prev = 21, t.t0 = t.catch(13), e.$alert("您没有输入订单查询密码，无法搜索订单<br>若您忘记密码，请及时联系客服"), t.abrupt("return");
                                    case 25:
                                        e.list_bak.contact = [];
                                    case 26:
                                        if (!window.config.captcha.scene.shop.search) {
                                            t.next = 40;
                                            break
                                        }
                                        return t.prev = 27, t.next = 30, e.$captcha.refresh();
                                    case 30:
                                        return t.next = 32, e.$captcha.verify();
                                    case 32:
                                        t.next = 40;
                                        break;
                                    case 35:
                                        return t.prev = 35, t.t1 = t.catch(27), "cancel" !== t.t1.message && e.$alert(t.t1.message || "请重新验证", "验证码验证失败").finally((function() {
                                            e.$captcha.focus()
                                        })), t.abrupt("return");
                                    case 40:
                                        e.list = [], e.loading = !0, e.$http.post("record/get", {
                                            type: n,
                                            order_no: e.order_no,
                                            contact: e.contact,
                                            query_password: e.query_password,
                                            captcha: e.$captcha.value
                                        }).then((function(t) {
                                            n === e.tab && (t.data.list && (e.list = t.data.list), e.loading = !1, e.loaded = !0, t.data.msg && e.$alert({
                                                message: t.data.msg,
                                                submitBtnTitle: "我已知晓"
                                            }))
                                        })).catch((function() {
                                            e.loading = !1, e.loaded = !1
                                        }));
                                    case 43:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [13, 21],
                                [27, 35]
                            ])
                        })))()
                    },
                    showCardDetail: function(t) {
                        t && t.length ? this.$alert({
                            message: '<div><textarea title="卡号列表" rows="6" style="width: 100%" readonly>' + p(t.map((function(t) {
                                return t.card ? t.card.card : "未知卡密#" + t.card_id
                            })).join("\r\n")) + "</textarea><span>由于安全原因订单商品详情不予显示</span></div>",
                            title: "卡密详情",
                            scrollable: !0
                        }) : this.$alert("该订单无卡密信息 或 卡密信息已隐藏")
                    },
                    renderOrderSendStatus: function(t) {
                        return 1 === t.status ? 100 === t.send_status ? "未发货" : 101 === t.send_status ? "正在处理" : 102 === t.send_status ? "已发货" : 103 === t.send_status ? "发货失败" : "未发货" : "UNKNOWN"
                    },
                    handleShowPaidTip: function(t) {
                        return 100 === t.send_status ? this.$alert("此订单暂未发货，请耐心等待") : 101 === t.send_status ? this.$alert("此订单正在处理中，请耐心等待") : 102 === t.send_status ? this.$alert("此订单已成功发货，有疑问请联系店铺客服") : 103 === t.send_status ? this.$alert("此订单发货失败，请联系店铺客服") : void this.$alert("此商品库存不足，请联系店铺客服补货")
                    },
                    handleReport: function(t) {
                        window.vm.$emit("goReport", {
                            order_no: t.order_no
                        }), window.$router.push("report", {
                            order_no: t.order_no
                        })
                    },
                    handleShowReport: function(t) {
                        window.vm.$emit("goReportInfo", {
                            info: t.order_no
                        }), window.$router.push("report", {
                            info: t.order_no
                        })
                    }
                }
            },
            L = (n("83bb"), Object(_.a)(q, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "content"
                }, [n("div", {
                    staticClass: "record-title",
                    staticStyle: {
                        "margin-top": "-4px"
                    }
                }, [t._v("订单查询方式：")]), n("mu-tabs", {
                    staticClass: "record-tabs",
                    attrs: {
                        value: t.tab
                    },
                    on: {
                        change: t.handleChangeTab
                    }
                }, [n("mu-tab", {
                    attrs: {
                        value: "cookie"
                    }
                }, [t._v("浏览器缓存")]), n("mu-tab", {
                    attrs: {
                        value: "order_no"
                    }
                }, [t._v("订单号")]), n("mu-tab", {
                    attrs: {
                        value: "contact"
                    }
                }, [t._v("联系方式")])], 1), n("mu-card", {
                    staticClass: "my-card white-background",
                    staticStyle: {
                        "margin-bottom": "24px"
                    }
                }, [n("mu-card-text", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "cookie" === t.tab,
                        expression: "tab === 'cookie'"
                    }]
                }, [t._v(" 订单提交时浏览器会自动保存您的订单信息，不同浏览器可能显示结果不同。"), n("br"), n("p", {
                    staticClass: "text-center",
                    staticStyle: {
                        "margin-top": "9px"
                    }
                }, [n("mu-button", {
                    staticClass: "record-input-btn",
                    attrs: {
                        disabled: t.$captcha.loading
                    },
                    on: {
                        click: t.handleSearch
                    }
                }, [t._v(t._s(t.$captcha.loading ? "加载中" : "查询") + " ")])], 1), t._v(" 订单查询仅能查询最近购买的数据。 ")]), n("mu-card-text", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "order_no" === t.tab,
                        expression: "tab === 'order_no'"
                    }]
                }, [n("mu-text-field", {
                    staticClass: "record-input",
                    attrs: {
                        name: "order_no",
                        type: "text",
                        label: "订单号",
                        placeholder: "请输入订单号"
                    },
                    on: {
                        input: function(e) {
                            t.loaded = !1
                        }
                    },
                    model: {
                        value: t.order_no,
                        callback: function(e) {
                            t.order_no = e
                        },
                        expression: "order_no"
                    }
                }), n("div", {
                    staticClass: "equal-with-mu"
                }, [n("mu-button", {
                    staticClass: "record-input-btn",
                    attrs: {
                        disabled: t.$captcha.loading
                    },
                    on: {
                        click: t.handleSearch,
                        change: t.onOrderNoChange
                    }
                }, [t._v(t._s(t.$captcha.loading ? "加载中" : "查询") + " ")])], 1), t._v(" 订单查询仅能查询最近购买的数据。 ")], 1), n("mu-card-text", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "contact" === t.tab,
                        expression: "tab === 'contact'"
                    }]
                }, [n("mu-text-field", {
                    staticClass: "record-input",
                    attrs: {
                        name: "contact",
                        type: "text",
                        label: "联系方式",
                        placeholder: "购买时填写的联系方式"
                    },
                    on: {
                        input: function(e) {
                            t.loaded = !1
                        }
                    },
                    model: {
                        value: t.contact,
                        callback: function(e) {
                            t.contact = e
                        },
                        expression: "contact"
                    }
                }), n("div", {
                    staticClass: "equal-with-mu"
                }, [n("mu-button", {
                    staticClass: "record-input-btn",
                    attrs: {
                        disabled: t.$captcha.loading
                    },
                    on: {
                        click: t.handleSearch,
                        change: t.onContactChange
                    }
                }, [t._v(t._s(t.$captcha.loading ? "加载中" : "查询") + " ")])], 1), t._v(" 订单查询仅能查询最近购买的数据。 ")], 1)], 1), n("mu-card", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.loading || t.list.length || t.loaded,
                        expression: "loading || list.length || loaded"
                    }],
                    staticClass: "my-card white-background"
                }, [n("mu-card-text", [t.loading ? n("mu-circular-progress", {
                    staticStyle: {
                        width: "100%",
                        "text-align": "center"
                    },
                    attrs: {
                        size: 40
                    }
                }) : t._e(), n("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !(t.loading || t.list && 0 !== t.list.length),
                        expression: "!loading && (!list || list.length === 0)"
                    }]
                }, [t._v("没有订单记录")]), t._l(t.list, (function(e) {
                    return n("table", {
                        key: e.id,
                        staticClass: "cx_tab",
                        attrs: {
                            width: "100%",
                            border: "1",
                            cellspacing: "0",
                            cellpadding: "10"
                        }
                    }, [n("tbody", [e.product_name ? n("tr", [n("th", {
                        attrs: {
                            scope: "row",
                            width: "260"
                        }
                    }, [t._v("商品名称")]), n("td", [t._v(t._s(e.product_name))])]) : t._e(), n("tr", [n("th", {
                        attrs: {
                            scope: "row",
                            width: "260"
                        }
                    }, [t._v("下单时间")]), n("td", [t._v(t._s(e.created_at))])]), n("tr", [n("th", {
                        attrs: {
                            scope: "row"
                        }
                    }, [t._v("订单号")]), n("td", [t._v(t._s(e.order_no))])]), n("tr", [n("th", {
                        attrs: {
                            scope: "row"
                        }
                    }, [t._v("订单数目")]), n("td", [t._v(t._s(e.count) + " (" + t._s(t._f("moneyFormatterFilter")(t._f("moneyFilter")(e.paid))) + ")")])]), n("tr", [n("th", {
                        attrs: {
                            scope: "row"
                        }
                    }, [t._v("订单信息")]), n("td", {
                        staticClass: "over-ellipsis"
                    }, [e.status === t.STATUS_SUCCESS || e.status === t.STATUS_FROZEN ? n("a", {
                        staticClass: "cursor-pointer",
                        staticStyle: {
                            "line-height": "24px",
                            "text-decoration": "underline"
                        },
                        attrs: {
                            target: "_blank",
                            href: "/pay/result/" + e.order_no
                        }
                    }, [t._v("查看卡密 ")]) : e.status === t.STATUS_UNPAY ? n("span", {
                        staticStyle: {
                            "line-height": "24px"
                        }
                    }, [t._v("未支付 "), n("a", {
                        staticClass: "cursor-pointer",
                        attrs: {
                            target: "_blank",
                            href: "/pay/" + e.order_no
                        }
                    }, [t._v("支付")])]) : e.status === t.STATUS_PAID ? n("a", {
                        staticClass: "cursor-pointer",
                        staticStyle: {
                            "line-height": "24px"
                        },
                        on: {
                            click: function(n) {
                                return t.handleShowPaidTip(e)
                            }
                        }
                    }, [t._v(t._s(t.renderOrderSendStatus(e)))]) : e.status === t.STATUS_REFUND ? n("span", {
                        staticStyle: {
                            "line-height": "24px"
                        }
                    }, [t._v("已退款")]) : n("span", {
                        staticStyle: {
                            "line-height": "24px"
                        }
                    }, [t._v("未知状态")]), "shop" === t.PROJECT ? [e.complaint ? t._e() : n("mu-chip", {
                        attrs: {
                            color: "#fb4b4b",
                            "text-color": "#fff"
                        },
                        on: {
                            click: function(n) {
                                return t.handleReport(e)
                            }
                        }
                    }, [t._v("投诉 ")]), e.complaint ? n("mu-chip", {
                        attrs: {
                            color: "#03a9f4",
                            "text-color": "#fff"
                        },
                        on: {
                            click: function(n) {
                                return t.handleShowReport(e)
                            }
                        }
                    }, [t._v("查看投诉 ")]) : t._e()] : t._e()], 2)]), e.contact ? n("tr", [n("th", {
                        attrs: {
                            scope: "row"
                        }
                    }, [t._v("联系信息")]), n("td", [t._v(t._s(e.contact))])]) : t._e(), e.contact_ext ? n("tr", [n("th", {
                        attrs: {
                            scope: "row"
                        }
                    }, [t._v("附加信息")]), n("td", [t._v(t._s(e.contact_ext))])]) : t._e()])])
                }))], 2)], 1)], 1)
            }), [], !1, null, "03fca660", null)).exports;
        P = a.default.extend({
            template: "<div>disabled</div>"
        });
        var Q = window.config.company,
            G = {
                components: {
                    BuyView: B,
                    RecordView: L,
                    ReportView: P
                },
                data: function() {
                    return {
                        config: window.config,
                        PROJECT: "shop_free",
                        opacity: !1,
                        isMobile: c.isMobile(),
                        topNav: "",
                        bottomNav: "",
                        cp_company: Q
                    }
                },
                created: function() {
                    var t = this,
                        e = [];
                    e = ["buy", "record"], window.$router = {
                        nav: "",
                        query: {},
                        push: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this.parse(t, e);
                            "buy" === n ? location.hash && history.replaceState(null, null, location.pathname) : window.location.hash = "/" + n, document.body.scrollTop = 0
                        },
                        parse: function(n) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = n.indexOf("?");
                            for (-1 !== o && (n.substring(o + 1).split("&").forEach((function(t) {
                                    var e = t.split("=");
                                    e.length && (a[e[0]] = e[1])
                                })), n = n.substring(0, o));
                                "/" === n.substring(0, 1);) n = n.substring(1);
                            var r = e.indexOf(n); - 1 === r && (n = "buy"), this.query = a, this.nav = n, t.topNav = n, t.bottomNav = n;
                            var i = ["购买商品", "查询记录", "投诉订单"][r];
                            return window.config.shop && window.config.shop.name && (0 === r ? i = window.config.shop.name : i += " - " + window.config.shop.name), window.document.title = i, Object.keys(a).length && (n += "?" + f(a)), n
                        }
                    }, window.addEventListener("hashchange", (function(t) {
                        var e = location.href.indexOf("#"),
                            n = -1 !== e ? location.href.substring(e + 1) : "buy";
                        window.$router.parse(n)
                    }));
                    var n = location.href.indexOf("#"),
                        a = -1 !== n ? location.href.substring(n + 1) : "buy";
                    window.$router.push(a)
                },
                mounted: function() {
                    if (this.config.shop && this.config.theme.show_background && this.config.theme.background && this.config.theme.background.length > 2) {
                        var t = document.getElementById("bkg");
                        t.style.height = document.body.clientHeight + 60, t.style.backgroundImage = "url(".concat(p(this.config.theme.background), ")"), this.isMobile && (t.style.backgroundSize = "auto"), this.opacity = !0
                    }
                    window.addEventListener("resize", this.resizeHandler)
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.resizeHandler)
                },
                methods: {
                    resizeHandler: function() {
                        if (this.isMobile) {
                            var t = this.$refs.bottomNav.$el;
                            document.documentElement.clientHeight <= 3 * window.screen.availHeight / 4 ? (t.style.position = "absolute", t.style.marginTop = "-.5rem", t.style.display = "none") : (t.style.position = "fixed", t.style.display = "block")
                        }
                    },
                    handleNavChange: function(t) {
                        this.topNav = t, this.bottomNav = t, window.$router.push(t)
                    },
                    handleBottomNavChange: function(t) {
                        this.topNav = t, this.bottomNav = t, window.$router.push(t)
                    },
                    removeBackground: function() {
                        var t = document.getElementById("bkg");
                        t.parentNode.removeChild(t), this.opacity = !1
                    },
                    devTest: function() {
                        this.devCount = this.devCount ? this.devCount + 1 : 1, this.devCount >= 2 && this.removeBackground()
                    }
                }
            },
            V = (n("18a7"), Object(_.a)(G, i, [], !1, null, null, null)).exports,
            z = {
                data: function() {
                    var t = {
                        show: !1,
                        title: "提示",
                        message: "",
                        needInput: !1,
                        input: "",
                        inputErrorText: "请先填写",
                        cancelBtnTitle: "",
                        submitBtnTitle: "确定",
                        cancelCallback: null,
                        successCallback: null,
                        scrollable: !1
                    };
                    return {
                        initData: t,
                        dialog: Object.assign({}, t),
                        errText: ""
                    }
                },
                created: function() {
                    window.vm.$on("alert", this.show)
                },
                beforeDestroy: function() {
                    window.vm.$off("alert")
                },
                methods: {
                    show: function(t) {
                        var e = Object.assign({}, this.initData);
                        this.dialog = Object.assign(e, t), this.dialog.show = !0
                    },
                    handleCancel: function() {
                        this.dialog.show = !1, this.dialog.cancelCallback && this.dialog.cancelCallback(new Error("cancel"))
                    },
                    handleSubmit: function() {
                        this.dialog.needInput && this.dialog.input.length < 1 ? this.errText = this.dialog.inputErrorText : (this.dialog.show = !1, this.dialog.successCallback && this.dialog.successCallback(this.dialog))
                    }
                }
            },
            Z = Object(_.a)(z, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("mu-dialog", {
                    attrs: {
                        open: t.dialog.show,
                        title: t.dialog.title,
                        scrollable: t.dialog.scrollable
                    },
                    on: {
                        close: t.handleCancel
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.dialog.message)
                    }
                }), t.dialog.needInput ? n("mu-text-field", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        type: "text",
                        errorText: t.errText
                    },
                    on: {
                        input: function(e) {
                            t.errText = ""
                        }
                    },
                    model: {
                        value: t.dialog.input,
                        callback: function(e) {
                            t.$set(t.dialog, "input", e)
                        },
                        expression: "dialog.input"
                    }
                }) : t._e(), n("mu-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.dialog.cancelBtnTitle.length,
                        expression: "dialog.cancelBtnTitle.length"
                    }],
                    attrs: {
                        slot: "actions",
                        flat: ""
                    },
                    on: {
                        click: t.handleCancel
                    },
                    slot: "actions"
                }, [t._v(t._s(t.dialog.cancelBtnTitle) + " ")]), n("mu-button", {
                    attrs: {
                        slot: "actions",
                        flat: "",
                        primary: ""
                    },
                    on: {
                        click: t.handleSubmit
                    },
                    slot: "actions"
                }, [t._v(t._s(t.dialog.submitBtnTitle))])], 1)
            }), [], !1, null, null, null).exports;
        n("f7ef");
        var Y = {
                name: "Captcha",
                props: {
                    driver: {
                        type: String
                    },
                    mode: {
                        type: String,
                        default: "input"
                    },
                    config: {}
                },
                data: function() {
                    return {
                        loading: !1,
                        code: {
                            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAMSURBVAiZYzh9+jQABMYCYqKpOacAAAAASUVORK5CYII=",
                            input: "",
                            key: ""
                        },
                        geetest: {
                            elementId: "gee-embed-",
                            bindId: "gee-btn-",
                            config: window.config.captcha.config,
                            validate: null
                        },
                        popupDialogVisible: !1,
                        value: null
                    }
                },
                beforeMount: function() {
                    "code" === this.driver || "geetest" === this.driver && (this.geetest.elementId = "gee-embed-" + parseInt(99999 * Math.random()), this.geetest.bindId = "gee-btn-" + parseInt(99999 * Math.random()))
                },
                methods: {
                    refresh: function() {
                        var t = this;
                        return Object(h.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.loading = !0, e.prev = 1, e.next = 4, t.refresh_internal();
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        throw e.prev = 6, e.t0 = e.catch(1), e.t0;
                                    case 9:
                                        return e.prev = 9, t.loading = !1, e.finish(9);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6, 9, 12]
                            ])
                        })))()
                    },
                    refresh_internal: function() {
                        var t = this;
                        return Object(h.a)(regeneratorRuntime.mark((function e() {
                            var n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("code" !== t.driver) {
                                            e.next = 10;
                                            break
                                        }
                                        return t.code.input = "", e.next = 4, t.$http.get("//".concat(window.API_HOST, "/captcha/api?t=").concat(Math.random()));
                                    case 4:
                                        n = e.sent, t.code.img = n.img, t.code.key = n.key, t.focus(), e.next = 26;
                                        break;
                                    case 10:
                                        if ("geetest" !== t.driver) {
                                            e.next = 21;
                                            break
                                        }
                                        return t.geetest.validate = null, (a = document.getElementById(t.geetest.elementId)) && (a.innerHTML = ""), e.next = 16, window.$http.get("captcha?t=" + Math.random());
                                    case 16:
                                        return t.geetest.config = e.sent, e.next = 19, new Promise((function(e, n) {
                                            try {
                                                var a = setTimeout((function() {
                                                    if (t.loading) {
                                                        var e = document.getElementById(t.geetest.elementId);
                                                        e && (e.innerHTML = ""), n(new Error("加载验证码超时"))
                                                    }
                                                }), 5e3);
                                                window.initGeetest({
                                                    gt: t.geetest.config.gt,
                                                    challenge: t.geetest.config.challenge,
                                                    product: "popup",
                                                    offline: !t.geetest.config.success
                                                }, (function(o) {
                                                    o.onReady((function() {
                                                        clearTimeout(a), e()
                                                    })), o.onError((function() {
                                                        clearTimeout(a), n(new Error("加载验证码超时"))
                                                    })), o.onSuccess((function() {
                                                        t.geetest.validate = o.getValidate(), t.handleValidate(), t.handlePopupSubmit()
                                                    })), window.errors || (window.errors = []), document.getElementById(t.geetest.elementId) && (o.appendTo("#" + t.geetest.elementId), o.bindOn && o.bindOn("#" + t.geetest.bindId)), t.geetest.obj = o
                                                }))
                                            } catch (t) {
                                                n(new Error("验证码初始化失败: " + t))
                                            }
                                        }));
                                    case 19:
                                        e.next = 26;
                                        break;
                                    case 21:
                                        if ("recaptcha" !== t.driver) {
                                            e.next = 25;
                                            break
                                        }
                                        e.next = 26;
                                        break;
                                    case 25:
                                        throw new Error("unimplemented");
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    verify: function() {
                        var t = this;
                        return new Promise((function(e, n) {
                            "code" === t.driver ? t.code.input && t.code.input.length ? e() : "input" === t.mode ? n(new Error("请输入验证码")) : (t.popupDialogVisible = !0, t.$nextTick().then((function() {
                                t.focus()
                            })), t._verify_promise = {
                                resolve: e,
                                reject: n
                            }) : "geetest" === t.driver ? t.geetest.validate ? e() : "input" === t.mode ? n(new Error("请先完成验证")) : (t.popupDialogVisible = !0, t._verify_promise = {
                                resolve: e,
                                reject: n
                            }) : "recaptcha" === t.driver && n(new Error("unimplemented"))
                        }))
                    },
                    focus: function() {
                        "code" === this.driver && this.$refs.code && this.$refs.code.focus()
                    },
                    handleValidate: function() {
                        this.value = "unimplemented", "code" === this.driver ? this.value = {
                            code: this.code.input,
                            key: this.code.key
                        } : "geetest" === this.driver ? this.value = {
                            a: this.geetest.config.key,
                            b: this.geetest.validate.geetest_challenge,
                            c: this.geetest.validate.geetest_validate,
                            d: this.geetest.validate.geetest_seccode
                        } : this.driver, this.$emit("input", this.value)
                    },
                    onPopupDialogClosed: function() {
                        this.handlePopupCancel()
                    },
                    handlePopupCancel: function() {
                        this._verify_promise && (this.popupDialogVisible = !1, this._verify_promise.reject(new Error("cancel")), delete this._verify_promise)
                    },
                    handlePopupSubmit: function() {
                        this._verify_promise && (this.popupDialogVisible = !1, this._verify_promise.resolve(), delete this._verify_promise)
                    }
                }
            },
            H = {
                components: {
                    Layout: V,
                    Alert: Z,
                    Captcha: (n("5915"), Object(_.a)(Y, (function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return "input" === t.mode ? n("div", ["code" === t.driver ? n("el-input", {
                            ref: "code",
                            staticClass: "captcha-code-input",
                            attrs: {
                                type: "text",
                                placeholder: "请输入验证码"
                            },
                            on: {
                                input: t.handleValidate
                            },
                            model: {
                                value: t.code.input,
                                callback: function(e) {
                                    t.$set(t.code, "input", e)
                                },
                                expression: "code.input"
                            }
                        }, [n("img", {
                            staticClass: "captcha-pulse",
                            class: {
                                loading: t.loading
                            },
                            attrs: {
                                slot: "append",
                                alt: "captcha",
                                src: t.code.img,
                                title: "更换验证码"
                            },
                            on: {
                                click: t.refresh
                            },
                            slot: "append"
                        })]) : "geetest" === t.driver ? n("div", [n("div", {
                            staticClass: "captcha-geetest-container captcha-pulse",
                            class: {
                                loading: t.loading
                            },
                            attrs: {
                                id: t.geetest.elementId
                            }
                        }), n("button", {
                            staticStyle: {
                                display: "none"
                            },
                            attrs: {
                                id: t.geetest.bindId
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.handleValidate(e)
                                }
                            }
                        })]) : n("div", [n("h1", [t._v("UNKNOWN CAPTCHA DRIVER")])])], 1) : n("div", [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.popupDialogVisible,
                                expression: "popupDialogVisible"
                            }],
                            staticClass: "captcha-popup-background"
                        }), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.popupDialogVisible,
                                expression: "popupDialogVisible"
                            }],
                            staticClass: "captcha-popup-dialog"
                        }, [n("div", {
                            staticClass: "captcha-popup-dialog__body"
                        }, ["code" === t.driver ? n("el-input", {
                            ref: "code",
                            staticClass: "captcha-code-input",
                            attrs: {
                                type: "text",
                                placeholder: "请输入验证码"
                            },
                            on: {
                                input: t.handleValidate
                            },
                            model: {
                                value: t.code.input,
                                callback: function(e) {
                                    t.$set(t.code, "input", e)
                                },
                                expression: "code.input"
                            }
                        }, [n("img", {
                            staticClass: "captcha-pulse",
                            class: {
                                loading: t.loading
                            },
                            attrs: {
                                slot: "append",
                                alt: "captcha",
                                src: t.code.img,
                                title: "更换验证码"
                            },
                            on: {
                                click: t.refresh
                            },
                            slot: "append"
                        })]) : "geetest" === t.driver ? n("div", [n("div", {
                            staticClass: "captcha-geetest-container captcha-pulse",
                            class: {
                                loading: t.loading
                            },
                            attrs: {
                                id: t.geetest.elementId
                            }
                        }), n("button", {
                            staticStyle: {
                                display: "none"
                            },
                            attrs: {
                                id: t.geetest.bindId
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.handleValidate(e)
                                }
                            }
                        })]) : n("div", [n("h1", [t._v("UNKNOWN CAPTCHA DRIVER")])]), n("div", {
                            staticClass: "captcha-popup-dialog__action"
                        }, [n("el-button", {
                            attrs: {
                                disabled: t.loading
                            },
                            on: {
                                click: t.handlePopupCancel
                            }
                        }, [t._v("取消")]), "code" === t.driver ? n("el-button", {
                            staticStyle: {
                                "margin-left": "8px"
                            },
                            attrs: {
                                disabled: t.loading
                            },
                            on: {
                                click: t.handlePopupSubmit
                            }
                        }, [t._v(" 确认 ")]) : t._e()], 1)], 1)])])
                    }), [], !1, null, null, null)).exports
                },
                data: function() {
                    return {
                        IE9: void 0 === document.createElement("div").style.transition,
                        config: window.config,
                        captcha: Object(r.a)({
                            value: null
                        }, window.config.captcha)
                    }
                },
                beforeMount: function() {
                    a.default.prototype.$alert = this.alert, a.default.prototype.$captcha = {
                        loading: !1
                    }, window.$alert = this.alert
                },
                mounted: function() {
                    a.default.prototype.$captcha = this.$refs.captcha
                },
                methods: {
                    alert: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "提示",
                            a = {};
                        return a = "object" === Object(o.a)(t) ? t : {
                            message: t,
                            title: n
                        }, new Promise((function(t, n) {
                            e.$refs.alert.show(Object(r.a)(Object(r.a)({}, a), {}, {
                                successCallback: t,
                                cancelCallback: n
                            }))
                        }))
                    }
                }
            },
            W = Object(_.a)(H, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.IE9 ? n("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("p", {
                    staticStyle: {
                        color: "red"
                    }
                }, [t._v(" 您正在使用不受支持的浏览器，请更新至最新浏览器。 ")]), t._m(0)]) : t._e(), n("layout"), n("alert", {
                    ref: "alert"
                }), n("captcha", {
                    ref: "captcha",
                    attrs: {
                        driver: t.captcha.driver,
                        mode: "popup",
                        config: t.captcha.config
                    },
                    model: {
                        value: t.captcha.value,
                        callback: function(e) {
                            t.$set(t.captcha, "value", e)
                        },
                        expression: "captcha.value"
                    }
                })], 1)
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("p", [t._v("推荐浏览器： "), n("a", {
                    attrs: {
                        href: "https://www.google.cn/intl/zh-CN_ALL/chrome/",
                        target: "_blank"
                    }
                }, [t._v("Chrome")]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://www.mozilla.org/zh-CN/firefox/",
                        target: "_blank"
                    }
                }, [t._v("FireFox")]), t._v(" "), n("a", {
                    attrs: {
                        href: "http://browser.qq.com/",
                        target: "_blank"
                    }
                }, [n("del", [t._v("QQ浏览器")])])])
            }], !1, null, null, null).exports,
            J = (n("07ac"), n("bc3a")),
            X = n.n(J);
        X.a.defaults.withCredentials = !0;
        window.API_HOST = location.host;
        var K = X.a.create({
            baseURL: "/api/shop/",
            timeout: 15e3,
            transformRequest: [function(t) {
                return t && t.constructor !== window.FormData && (t = f(t)), t
            }]
        });
        K.interceptors.request.use((function(t) {
            return t.headers["X-XSRF-TOKEN"] = u(32), t.headers["X-Requested-With"] = "XMLHttpRequest", t
        }), (function(t) {
            Promise.reject(t)
        })), K.interceptors.response.use((function(t) {
            return t.data
        }), (function(t) {
            var e = t.message;
            if (t.response) {
                var n = t.response.data;
                n.exception ? (e = n.exception, n.message && (e += "<br>" + n.message)) : n.errors ? e = Object.values(n.errors).map((function(t) {
                    return t[0]
                })).join("<br>") : n.message && (e = n.message)
            }
            return window.vm.$emit("alert", {
                title: "错误",
                message: e,
                data: t.response.data || null
            }), Promise.reject(t)
        }));
        var tt = K,
            et = n("2cf9"),
            nt = n.n(et),
            at = n("0867"),
            ot = n.n(at),
            rt = n("955d"),
            it = n.n(rt),
            st = n("4778"),
            ct = n.n(st),
            lt = n("0aa5"),
            ut = n.n(lt),
            dt = n("f370"),
            pt = n.n(dt),
            ft = n("5c9c"),
            ht = n.n(ft),
            mt = n("ddbf"),
            vt = n.n(mt),
            gt = n("d3b71"),
            _t = n.n(gt),
            Ct = n("96bb"),
            bt = n.n(Ct),
            yt = n("15be"),
            wt = n.n(yt),
            xt = n("4ca0"),
            kt = n.n(xt),
            At = n("5cde"),
            Et = n.n(At),
            St = (n("97a6"), n("e1e6"), n("d09c")),
            Tt = n.n(St);
        a.default.use(Et.a), a.default.use(kt.a), a.default.use(wt.a), a.default.use(bt.a), a.default.use(_t.a), a.default.use(vt.a), a.default.use(ht.a), a.default.use(pt.a), a.default.use(ut.a), a.default.use(ct.a), a.default.use(it.a), a.default.use(ot.a), a.default.use(nt.a), a.default.use(Tt.a), a.default.filter("moneyFilter", (function(t) {
            return null == t ? 0 : parseInt(t) !== t ? t : (t / 100).toFixed(2)
        })), a.default.filter("moneyFormatterFilter", (function(t) {
            return null == t ? "￥0.00" : -1 === (t + "").indexOf(".") ? t : "￥" + t
        })), a.default.filter("moneyDigitalFilter", (function(t) {
            return null == t ? "0.00" : -1 === (t + "").indexOf(".") ? t : t.replace(/\d(?=(?:\d{3})+\b)/g, "$&,")
        })), a.default.filter("formatDate", (function(t) {
            return new Date(t).format("yyyy-MM-dd")
        })), n("c86f"), n("bf3b"), n("54e8"), n("177a"), n("be35"), n("cad7"), n("6408");
        var Rt = {
                props: {
                    title: {},
                    placeholder: {},
                    disabled: {
                        default: !1
                    },
                    readonly: {
                        default: !1
                    },
                    value: {}
                },
                data: function() {
                    return {
                        type: "text",
                        focused: !1,
                        inputValue: this.value
                    }
                },
                watch: {
                    value: function(t) {
                        this.inputValue = t
                    }
                },
                methods: {
                    handleInput: function(t) {
                        this.$emit("input", t)
                    },
                    handleChange: function(t) {
                        this.$emit("change", t)
                    },
                    handleFocus: function(t) {
                        this.focused = !0, this.$emit("focus", t)
                    },
                    handleBlur: function(t) {
                        this.focused = !1, this.$emit("blur", t)
                    },
                    focus: function() {
                        this.$refs.input.focus()
                    }
                }
            },
            It = (n("9ba2"), Object(_.a)(Rt, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "el-input-group el-input-group--prepend"
                }, [n("mu-text-field", {
                    ref: "input",
                    staticClass: "el-input__inner",
                    attrs: {
                        type: t.type,
                        disabled: t.disabled,
                        readonly: t.readonly,
                        placeholder: t.placeholder
                    },
                    on: {
                        input: t.handleInput,
                        focus: t.handleFocus,
                        blur: t.handleBlur,
                        change: t.handleChange
                    },
                    model: {
                        value: t.inputValue,
                        callback: function(e) {
                            t.inputValue = e
                        },
                        expression: "inputValue"
                    }
                }), t.$slots.append ? n("div", {
                    staticClass: "el-input-group__append"
                }, [t._t("append")], 2) : t._e()], 1)
            }), [], !1, null, null, null)).exports,
            Mt = {
                name: "ElButton",
                props: {
                    disabled: {
                        default: !1
                    }
                }
            },
            Pt = Object(_.a)(Mt, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("mu-button", {
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("click")
                        }
                    }
                }, [t.$slots.default ? n("span", [t._t("default")], 2) : t._e()])
            }), [], !1, null, null, null).exports;
        window.$http = tt, a.default.prototype.$http = tt, a.default.config.productionTip = !1, a.default.component("ElInput", It), a.default.component("ElButton", Pt), new a.default({
            el: "#app",
            render: function(t) {
                return window.vm = this, t(W)
            }
        });
        try {
            document.getElementById("progress").parentNode.removeChild(document.getElementById("progress"))
        } catch (t) {}
    },
    "57b8": function(t, e, n) {
        "use strict";
        var a = n("3bae");
        n.n(a).a
    },
    5915: function(t, e, n) {
        "use strict";
        var a = n("df4a");
        n.n(a).a
    },
    "592d": function(t, e, n) {
        "use strict";
        var a = n("ed6d");
        n.n(a).a
    },
    "5ae7": function(t, e, n) {
        "use strict";
        var a = n("770f");
        n.n(a).a
    },
    6052: function(t, e, n) {},
    6408: function(t, e, n) {},
    "717e": function(t, e, n) {},
    "756f": function(t, e, n) {
        "use strict";
        var a = n("6052");
        n.n(a).a
    },
    7571: function(t, e, n) {},
    "770f": function(t, e, n) {},
    "83bb": function(t, e, n) {
        "use strict";
        var a = n("717e");
        n.n(a).a
    },
    "8f4c": function(t, e, n) {
        "use strict";
        var a = n("7571");
        n.n(a).a
    },
    "9ba2": function(t, e, n) {
        "use strict";
        var a = n("dfa1");
        n.n(a).a
    },
    bdda: function(t, e, n) {},
    be35: function(t, e, n) {},
    bf3b: function(t, e, n) {},
    bfe4: function(t, e, n) {
        "use strict";
        var a = n("bdda");
        n.n(a).a
    },
    c7fb: function(t, e, n) {},
    c86f: function(t, e, n) {},
    cad7: function(t, e, n) {},
    d23f: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEU5MzI0MENBOTU5MTFFMTlDODJBMUFDMUNFRTQ4RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEU5MzI0MERBOTU5MTFFMTlDODJBMUFDMUNFRTQ4RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRTkzMjQwQUE5NTkxMUUxOUM4MkExQUMxQ0VFNDhENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRTkzMjQwQkE5NTkxMUUxOUM4MkExQUMxQ0VFNDhENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppeu3HEAAAIjSURBVHjaYmFgYDgGxKwM1AG/WYAEOxCzUMlARiaQqQzUA/9BBj6jooEMIAMf4ZLk4eFm6OnufNDa2vKAiYkJRc7d3e31mtUrnxkZGnxFN/AkLgN//frFwM/Px1RVVW145crl76yskLiLjYl+umPHTjVTUxOxL18+s6MEIhAbAfFcqOEYQFBAgOHho0ccvLy8nGfOnH4wceLEL4sXL9EByZmYGD85d+4c9///CDeADOQF4ilAbIDLpQIC/AwvXrzkZWdnV4QKPXZwsLt38OBhQXRPgVz1GYg34QvoDx8+MtTX1VyB8e/cufXi0CEMw8CAGUo/B2IrIBbBpighIe7plCnT9IDMT9++fX0tLi4pwMLCdOPAgYMCSN4Fgb8wA38AMSi2bJETOSMwQPz8fF6uWLFK69+/f/8tzM2flJdXMCopyd3JysrVZ2VhvHH8+EmBP3/+YBgIAg+BWAiIdZDDbvbMmX9//Pj509nJ4dO58xe4QTG/e/cePkVFhTupqak6e3bvfvHw0WNOmIGM6OEPxBNhEQRKJgZ6ul++fvvGdu36DTZkhcLCQgyGBoZvz50/J/zu3XuUWEYHJkDcDsRiZGSUX8xYBEFZ8SkQWwAxB4kG/mXGIXEfaqgaNBgoNhAE7gHxaSCWAmJ5ahgIAqDQPgRNUtpAzEapgeCABuLz0EIEZDAoh/DjUPuPmYTweQ0Ngm1AfAukGYg5oSX+Xyj+DRBgAI3Zt2PANreFAAAAAElFTkSuQmCCLyogIHx4R3YwMHxmMTY3NzJmOTYzYTg2NjEyM2QyMGVkYjJhMjk3MTUxNSAqLw=="
    },
    df4a: function(t, e, n) {},
    dfa1: function(t, e, n) {},
    e197: function(t, e, n) {},
    e74f: function(t, e, n) {},
    ed22: function(module, exports) {
        ! function copyright() {}()},
    ed6d: function(t, e, n) {},
    f7ef: function(t, e, n) {
        n("c975"), n("ac1f"), n("5319");
        var a = n("62f5");
        ! function(t) {
            "use strict";
            if (void 0 === t) throw new Error("Geetest requires browser environment");
            var e = t.document,
                n = t.Math,
                o = e.getElementsByTagName("head")[0];

            function r(t) {
                this._obj = t
            }

            function i(t) {
                var e = this;
                new r(t)._each((function(t, n) {
                    e[t] = n
                }))
            }
            r.prototype = {
                _each: function(t) {
                    var e = this._obj;
                    for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
                    return this
                }
            }, i.prototype = {
                api_server: "api.geetest.com",
                protocol: "http://",
                typePath: "/gettype.php",
                fallback_config: {
                    slide: {
                        static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                        type: "slide",
                        slide: "/static/js/geetest.0.0.0.js"
                    },
                    fullpage: {
                        static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                        type: "fullpage",
                        fullpage: "/static/js/fullpage.0.0.0.js"
                    }
                },
                _get_fallback_config: function() {
                    var t = this;
                    return s(t.type) ? t.fallback_config[t.type] : t.new_captcha ? t.fallback_config.fullpage : t.fallback_config.slide
                },
                _extend: function(t) {
                    var e = this;
                    new r(t)._each((function(t, n) {
                        e[t] = n
                    }))
                }
            };
            var s = function(t) {
                    return "string" == typeof t
                },
                c = function(t) {
                    return "object" === a(t) && null !== t
                },
                l = function(t) {
                    return "function" == typeof t
                },
                u = /Mobi/i.test(navigator.userAgent) ? 3 : 0,
                d = {},
                p = {},
                f = function() {
                    var t = new Date,
                        e = t.getFullYear(),
                        n = t.getMonth() + 1,
                        a = t.getDate(),
                        o = t.getHours(),
                        r = t.getMinutes(),
                        i = t.getSeconds();
                    return n >= 1 && n <= 9 && (n = "0" + n), a >= 0 && a <= 9 && (a = "0" + a), o >= 0 && o <= 9 && (o = "0" + o), r >= 0 && r <= 9 && (r = "0" + r), i >= 0 && i <= 9 && (i = "0" + i), e + "-" + n + "-" + a + " " + o + ":" + r + ":" + i
                },
                h = function() {
                    return parseInt(1e4 * n.random()) + (new Date).valueOf()
                },
                m = function(t, n) {
                    var a = e.createElement("script");
                    a.charset = "UTF-8", a.async = !0, a.onerror = function() {
                        n(!0)
                    };
                    var r = !1;
                    a.onload = a.onreadystatechange = function() {
                        r || a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (r = !0, setTimeout((function() {
                            n(!1)
                        }), 0))
                    }, a.src = t, o.appendChild(a)
                },
                v = function(t, e, n, a) {
                    e = function(t) {
                        return t.replace(/^https?:\/\/|\/$/g, "")
                    }(e);
                    var o = function(t) {
                        return 0 !== (t = t.replace(/\/+/g, "/")).indexOf("/") && (t = "/" + t), t
                    }(n) + function(t) {
                        if (!t) return "";
                        var e = "?";
                        return new r(t)._each((function(t, n) {
                            (s(n) || function(t) {
                                return "number" == typeof t
                            }(n) || function(t) {
                                return "boolean" == typeof t
                            }(n)) && (e = e + encodeURIComponent(t) + "=" + encodeURIComponent(n) + "&")
                        })), "?" === e && (e = ""), e.replace(/&$/, "")
                    }(a);
                    return e && (o = t + e + o), o
                },
                g = function(t, e, n, a, o, r, i) {
                    ! function s(c) {
                        var l = v(n, a[c], o, r);
                        m(l, (function(r) {
                            if (r)
                                if (c >= a.length - 1) {
                                    if (i(!0), e) {
                                        t.error_code = 508;
                                        var l = n + a[c] + o;
                                        _(t, l)
                                    }
                                } else s(c + 1);
                            else i(!1)
                        }))
                    }(0)
                },
                _ = function(t, e) {
                    g(t, !1, t.protocol, ["monitor.geetest.com"], "/monitor/send", {
                        time: f(),
                        captcha_id: t.gt,
                        challenge: t.challenge,
                        pt: u,
                        exception_url: e,
                        error_code: t.error_code
                    }, (function(t) {}))
                },
                C = function(t, e) {
                    var n = {
                        networkError: "ç½‘ç»œé”™è¯¯",
                        gtTypeError: "gtå­—æ®µä¸æ˜¯å­—ç¬¦ä¸²ç±»åž‹"
                    };
                    if ("function" != typeof e.onError) throw new Error(n[t]);
                    e.onError(n[t])
                };
            (t.Geetest || e.getElementById("gt_lib")) && (p.slide = "loaded"), t.initGeetest = function(e, n) {
                var a = new i(e);
                e.https ? a.protocol = "https://" : e.protocol || (a.protocol = t.location.protocol + "//"), "050cffef4ae57b5d5e529fea9540b0d1" !== e.gt && "3bd38408ae4af923ed36e13819b14d42" !== e.gt || (a.apiserver = "yumchina.geetest.com/", a.api_server = "yumchina.geetest.com"), c(e.getType) && a._extend(e.getType),
                    function(e, n, a, o) {
                        if (c(a.getLib)) return a._extend(a.getLib), void o(a);
                        if (a.offline) o(a._get_fallback_config());
                        else {
                            var r = "geetest_" + h();
                            t[r] = function(e) {
                                "success" == e.status ? o(e.data) : e.status ? o(a._get_fallback_config()) : o(e), t[r] = void 0;
                                try {
                                    delete t[r]
                                } catch (t) {}
                            }, g(a, !0, a.protocol, e, n, {
                                gt: a.gt,
                                callback: r
                            }, (function(t) {
                                t && o(a._get_fallback_config())
                            }))
                        }
                    }([a.api_server || a.apiserver], a.typePath, a, (function(e) {
                        var o = e.type,
                            r = function() {
                                a._extend(e), n(new t.Geetest(a))
                            };
                        d[o] = d[o] || [];
                        var i = p[o] || "init";
                        "init" === i ? (p[o] = "loading", d[o].push(r), g(a, !0, a.protocol, e.static_servers || e.domains, e[o] || e.path, null, (function(t) {
                            if (t) p[o] = "fail", C("networkError", a);
                            else {
                                p[o] = "loaded";
                                for (var e = d[o], n = 0, r = e.length; n < r; n += 1) {
                                    var i = e[n];
                                    l(i) && i()
                                }
                                d[o] = []
                            }
                        }))) : "loaded" === i ? r() : "fail" === i ? C("networkError", a) : "loading" === i && d[o].push(r)
                    }))
            }
        }(window)
    }
});