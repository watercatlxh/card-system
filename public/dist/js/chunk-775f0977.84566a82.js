(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-775f0977"], {
        "967f": function(t, e, a) {
            "use strict";
            a.d(e, "f", (function() {
                return r
            })), a.d(e, "k", (function() {
                return n
            })), a.d(e, "g", (function() {
                return s
            })), a.d(e, "l", (function() {
                return i
            })), a.d(e, "d", (function() {
                return l
            })), a.d(e, "i", (function() {
                return p
            })), a.d(e, "j", (function() {
                return c
            })), a.d(e, "e", (function() {
                return m
            })), a.d(e, "h", (function() {
                return u
            })), a.d(e, "c", (function() {
                return d
            })), a.d(e, "a", (function() {
                return f
            })), a.d(e, "b", (function() {
                return _
            }));
            var o = a("41bb");

            function r(t) {
                return Object(o.a)({
                    url: "system/info",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function n(t) {
                return Object(o.a)({
                    url: "system/theme",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function s(t) {
                return Object(o.a)({
                    url: "system/order",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function i(t) {
                return Object(o.a)({
                    url: "system/vcode",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function l(t) {
                return Object(o.a)({
                    url: "system/email",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function p(t) {
                return Object(o.a)({
                    url: "system/sms",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function c(t) {
                return Object(o.a)({
                    url: "system/storage",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function m(t) {
                return Object(o.a)({
                    url: "system/email/test",
                    method: "post",
                    data: {
                        to: t
                    }
                })
            }

            function u(t) {
                return Object(o.a)({
                    url: "system/order/clean",
                    method: "post",
                    data: {
                        day: t
                    }
                })
            }

            function d(t) {
                return Object(o.a)({
                    url: "system/delete/orders",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }

            function f(t) {
                return Object(o.a)({
                    url: "system/delete/fund_records",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }

            function _(t) {
                return Object(o.a)({
                    url: "system/delete/logs",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }
        },
        daef: function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a("323e"),
                r = a.n(o),
                n = a("967f"),
                s = {
                    components: {
                        QuillEditor: a("bd60").a
                    },
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                app_name: "加载中",
                                app_title: "",
                                app_url: "",
                                app_url_api: "",
                                keywords: "",
                                description: "",
                                shop_ann: "",
                                shop_inventory: 0,
                                company: "",
                                shop_qq: "",
                                js_tj: "",
                                js_kf: ""
                            },
                            formRules: {
                                app_name: [{
                                    required: !0,
                                    message: "请输入网站名称",
                                    trigger: "blur"
                                }],
                                app_url: [{
                                    required: !0,
                                    message: "请输入网站地址",
                                    trigger: "blur"
                                }],
                                app_url_api: [{
                                    required: !0,
                                    message: "请输入网站API地址",
                                    trigger: "blur"
                                }],
                                keywords: [{
                                    required: !0,
                                    message: "请输入网站关键词",
                                    trigger: "blur"
                                }]
                            }
                        }
                    },
                    mounted: function() {
                        this.loadInfo()
                    },
                    watch: {
                        loading: function(t, e) {
                            t ? e || r.a.isStarted() || r.a.start() : r.a.done()
                        }
                    },
                    methods: {
                        loadInfo: function() {
                            var t = this;
                            this.loading = !0, Object(n.f)().then((function(e) {
                                Object.assign(t.form, e.data), t.$refs["editor-shop_ann"].setValue(t.form.shop_ann), t.$refs["editor-shop_ann_pop"].setValue(t.form.shop_ann_pop), t.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.loadInfo()
                        },
                        handleSubmit: function() {
                            var t = this;
                            this.$refs.form.validate((function(e) {
                                e && (t.loading = !0, t.form.shop_ann = t.$refs["editor-shop_ann"].getValue(), t.form.shop_ann_pop = t.$refs["editor-shop_ann_pop"].getValue(), Object(n.f)(t.form).then((function() {
                                    t.$notify({
                                        title: "提示",
                                        message: "修改设置成功",
                                        type: "success",
                                        duration: 3e3
                                    }), t.loading = !1
                                })).catch((function() {
                                    t.loading = !1
                                })))
                            }))
                        }
                    }
                },
                i = a("2877"),
                l = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: t.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: t.form,
                            "label-width": t.labelWidth,
                            rules: t.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [t._v("常规设置")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_name"
                        }
                    }, [a("span", [t._v("名称")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "网站名称"
                        },
                        model: {
                            value: t.form.app_name,
                            callback: function(e) {
                                t.$set(t.form, "app_name", e)
                            },
                            expression: "form.app_name"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_title"
                        }
                    }, [a("span", [t._v("标题")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "网站标题"
                        },
                        model: {
                            value: t.form.app_title,
                            callback: function(e) {
                                t.$set(t.form, "app_title", e)
                            },
                            expression: "form.app_title"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "shop_ann"
                        }
                    }, [a("span", [t._v("店铺公告")]), a("quill-editor", {
                        ref: "editor-shop_ann",
                        attrs: {
                            placeholder: "本说明将显示在商户首页"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "shop_ann_pop"
                        }
                    }, [a("span", [t._v("首页弹窗")]), a("quill-editor", {
                        ref: "editor-shop_ann_pop",
                        attrs: {
                            placeholder: "本说明将在商户首页弹窗"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [t._v("库存显示")]), a("el-radio-group", {
                        attrs: {
                            size: "small"
                        },
                        model: {
                            value: t.form.shop_inventory,
                            callback: function(e) {
                                t.$set(t.form, "shop_inventory", e)
                            },
                            expression: "form.shop_inventory"
                        }
                    }, [a("el-radio-button", {
                        attrs: {
                            label: 0
                        }
                    }, [t._v("大致范围")]), a("el-radio-button", {
                        attrs: {
                            label: 1
                        }
                    }, [t._v("实际库存")])], 1)], 1), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [t._v("网站设置")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_url"
                        }
                    }, [a("span", [t._v("网站地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "格式: http://example.com"
                        },
                        model: {
                            value: t.form.app_url,
                            callback: function(e) {
                                t.$set(t.form, "app_url", e)
                            },
                            expression: "form.app_url"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_url_api"
                        }
                    }, [a("span", [t._v("网站API地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "格式: http://api.example.com"
                        },
                        model: {
                            value: t.form.app_url_api,
                            callback: function(e) {
                                t.$set(t.form, "app_url_api", e)
                            },
                            expression: "form.app_url_api"
                        }
                    }), a("span", {
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [t._v("用于支付API通知，如主站开启5秒盾等，请在这里提供一个没有盾的地址，否则会造成通知失败")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "keywords"
                        }
                    }, [a("span", [t._v("关键词")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入网站关键词(keywords)"
                        },
                        model: {
                            value: t.form.keywords,
                            callback: function(e) {
                                t.$set(t.form, "keywords", e)
                            },
                            expression: "form.keywords"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "description"
                        }
                    }, [a("span", [t._v("描述")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入网站描述(description)"
                        },
                        model: {
                            value: t.form.description,
                            callback: function(e) {
                                t.$set(t.form, "description", e)
                            },
                            expression: "form.description"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "company"
                        }
                    }, [a("span", [t._v("底部版权")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "备案号以及版权号等信息"
                        },
                        model: {
                            value: t.form.company,
                            callback: function(e) {
                                t.$set(t.form, "company", e)
                            },
                            expression: "form.company"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "qq"
                        }
                    }, [a("span", [t._v("客服QQ")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入联系QQ"
                        },
                        model: {
                            value: t.form.shop_qq,
                            callback: function(e) {
                                t.$set(t.form, "shop_qq", e)
                            },
                            expression: "form.shop_qq"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "js_kf"
                        }
                    }, [a("span", [t._v("客服代码(QQ等)")]), a("el-input", {
                        attrs: {
                            type: "textarea",
                            placeholder: "请输入客服代码",
                            autosize: {
                                minRows: 3,
                                maxRows: 15
                            }
                        },
                        model: {
                            value: t.form.js_kf,
                            callback: function(e) {
                                t.$set(t.form, "js_kf", e)
                            },
                            expression: "form.js_kf"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "js_tj"
                        }
                    }, [a("span", [t._v("统计代码")]), a("el-input", {
                        attrs: {
                            type: "textarea",
                            placeholder: "请输入统计代码",
                            autosize: {
                                minRows: 3,
                                maxRows: 15
                            }
                        },
                        model: {
                            value: t.form.js_tj,
                            callback: function(e) {
                                t.$set(t.form, "js_tj", e)
                            },
                            expression: "form.js_tj"
                        }
                    })], 1)], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: t.handleResetForm
                        }
                    }, [t._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.loading
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.handleSubmit(e)
                            }
                        }
                    }, [t._v("保存更改")])], 1)], 1)
                }), [], !1, null, null, null);
            e.default = l.exports
        }
    }
]);