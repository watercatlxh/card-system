(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-3544a150"], {
        "3fd8": function(t, s, a) {
            "use strict";
            var n = a("60c4");
            a.n(n).a
        },
        "510f": function(t, s, a) {},
        "5ee5": function(t, s, a) {
            "use strict";
            a.r(s);
            var n = {
                    name: "HomeLink",
                    props: {
                        userInfo: {}
                    },
                    data: function() {
                        return {}
                    }
                },
                i = (a("3fd8"), a("e148"), a("2877")),
                r = Object(i.a)(n, (function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("el-card", {
                        staticClass: "my-card home-link-card"
                    }, [a("div", {
                        staticClass: "home-link"
                    }, [a("div", {
                        staticClass: "header"
                    }, [a("span", {
                        staticClass: "header-title"
                    }, [t._v("常用功能")])]), a("div", {
                        staticClass: "functions"
                    }, [a("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/system/set?tab=info"
                        }
                    }, [t._v("店铺信息")]), a("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/product/category"
                        }
                    }, [t._v("商品分类")]), a("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/product/list"
                        }
                    }, [t._v("商品列表")]), a("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/order/list"
                        }
                    }, [t._v("订单记录")]), a("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/order/analysis"
                        }
                    }, [t._v("收益统计")]), a("router-link", {
                        staticClass: "function",
                        attrs: {
                            to: "/admin/system/pay"
                        }
                    }, [t._v("支付渠道")])], 1)])])
                }), [], !1, null, "2e72c4c4", null);
            s.default = r.exports
        },
        "60c4": function(t, s, a) {},
        e148: function(t, s, a) {
            "use strict";
            var n = a("510f");
            a.n(n).a
        }
    }
]);