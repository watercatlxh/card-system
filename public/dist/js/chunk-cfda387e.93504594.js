(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-cfda387e"], {
        "881e": function(t, e, a) {
            "use strict";
            a.r(e);
            var s = (a("d3b7"), a("323e")),
                n = a.n(s),
                r = a("967f"),
                o = {
                    components: {},
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                mail_driver: "",
                                mail_smtp_host: "",
                                mail_smtp_port: "",
                                mail_smtp_username: "",
                                mail_smtp_password: "",
                                mail_smtp_from_address: "",
                                mail_smtp_from_name: "",
                                mail_smtp_encryption: "",
                                sendcloud_user: "",
                                sendcloud_key: "",
                                mail_send_order: 0,
                                mail_send_order_use_contact: 0
                            },
                            formRules: {},
                            testEmail: "",
                            sending: !1
                        }
                    },
                    watch: {
                        loading: function(t, e) {
                            t ? e || n.a.isStarted() || n.a.start() : n.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet(), this.testEmail = this.$store.state.user.userInfo.email
                    },
                    methods: {
                        getSet: function() {
                            var t = this;
                            this.loading = !0, Object(r.d)().then((function(e) {
                                Object.assign(t.form, e.data), t.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var t = this;
                            this.$refs.form.validate((function(e) {
                                e && (t.loading = !0, Object(r.d)(t.form).then((function() {
                                    t.loading = !1, t.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    t.loading = !1
                                })))
                            }))
                        },
                        handleEmailTest: function() {
                            var t = this;
                            this.sending = !0, Object(r.e)(this.testEmail).then((function(e) {
                                t.sending = !1, t.$alert(e.data, "发送成功", {
                                    type: "success"
                                })
                            })).finally((function() {
                                t.sending = !1
                            }))
                        }
                    }
                },
                i = a("2877"),
                l = Object(i.a)(o, (function() {
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
                    }, [t._v("邮件驱动")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [t._v("驱动")]), a("el-radio-group", {
                        model: {
                            value: t.form.mail_driver,
                            callback: function(e) {
                                t.$set(t.form, "mail_driver", e)
                            },
                            expression: "form.mail_driver"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: "smtp"
                        }
                    }), a("el-radio", {
                        attrs: {
                            label: "sendcloud"
                        }
                    })], 1)], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_from_address"
                        }
                    }, [a("span", [t._v("发件人地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "发件人地址"
                        },
                        model: {
                            value: t.form.mail_smtp_from_address,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_from_address", e)
                            },
                            expression: "form.mail_smtp_from_address"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_from_name"
                        }
                    }, [a("span", [t._v("发件人姓名")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "发件人姓名"
                        },
                        model: {
                            value: t.form.mail_smtp_from_name,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_from_name", e)
                            },
                            expression: "form.mail_smtp_from_name"
                        }
                    })], 1), "smtp" === t.form.mail_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_host"
                        }
                    }, [a("span", [t._v("服务器地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "服务器地址"
                        },
                        model: {
                            value: t.form.mail_smtp_host,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_host", e)
                            },
                            expression: "form.mail_smtp_host"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_port"
                        }
                    }, [a("span", [t._v("服务器端口")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "25(null)/465(ssl)/587(tls)"
                        },
                        model: {
                            value: t.form.mail_smtp_port,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_port", e)
                            },
                            expression: "form.mail_smtp_port"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_username"
                        }
                    }, [a("span", [t._v("用户名")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "用户名"
                        },
                        model: {
                            value: t.form.mail_smtp_username,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_username", e)
                            },
                            expression: "form.mail_smtp_username"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_password"
                        }
                    }, [a("span", [t._v("密码")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "密码"
                        },
                        model: {
                            value: t.form.mail_smtp_password,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_password", e)
                            },
                            expression: "form.mail_smtp_password"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_encryption"
                        }
                    }, [a("span", [t._v("加密")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "null/ssl/tls"
                        },
                        model: {
                            value: t.form.mail_smtp_encryption,
                            callback: function(e) {
                                t.$set(t.form, "mail_smtp_encryption", e)
                            },
                            expression: "form.mail_smtp_encryption"
                        }
                    })], 1)], 1) : t._e(), "sendcloud" === t.form.mail_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sendcloud_user"
                        }
                    }, [a("span", [t._v("User")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "User"
                        },
                        model: {
                            value: t.form.sendcloud_user,
                            callback: function(e) {
                                t.$set(t.form, "sendcloud_user", e)
                            },
                            expression: "form.sendcloud_user"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sendcloud_key"
                        }
                    }, [a("span", [t._v("Key")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "Key"
                        },
                        model: {
                            value: t.form.sendcloud_key,
                            callback: function(e) {
                                t.$set(t.form, "sendcloud_key", e)
                            },
                            expression: "form.sendcloud_key"
                        }
                    })], 1)], 1) : t._e(), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [t._v("测试发送")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "请输入邮箱"
                        },
                        model: {
                            value: t.testEmail,
                            callback: function(e) {
                                t.testEmail = e
                            },
                            expression: "testEmail"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-button", {
                        attrs: {
                            size: "small",
                            loading: t.sending
                        },
                        on: {
                            click: t.handleEmailTest
                        }
                    }, [t._v(t._s(t.sending ? "发送中" : "发送"))])], 1), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [t._v("邮件发送选项")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "发送卡密到买家邮箱",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: t.form.mail_send_order,
                            callback: function(e) {
                                t.$set(t.form, "mail_send_order", e)
                            },
                            expression: "form.mail_send_order"
                        }
                    }), a("span", {
                        staticClass: "tip",
                        staticStyle: {
                            display: "block",
                            "margin-top": "-12px"
                        }
                    }, [t._v("注意：需要买家额外填写收货邮箱")])], 1), t.form.mail_send_order ? a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "联系方式位邮箱时, 直接发送至联系方式邮箱",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: t.form.mail_send_order_use_contact,
                            callback: function(e) {
                                t.$set(t.form, "mail_send_order_use_contact", e)
                            },
                            expression: "form.mail_send_order_use_contact"
                        }
                    }), a("span", {
                        staticClass: "tip",
                        staticStyle: {
                            display: "block",
                            "margin-top": "-12px"
                        }
                    }, [t._v("无序额外填写收货邮箱, 直接发送至联系方式，如果联系方式不是邮箱则不发送")])], 1) : t._e()], 1), a("div", {
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
        },
        "967f": function(t, e, a) {
            "use strict";
            a.d(e, "f", (function() {
                return n
            })), a.d(e, "k", (function() {
                return r
            })), a.d(e, "g", (function() {
                return o
            })), a.d(e, "l", (function() {
                return i
            })), a.d(e, "d", (function() {
                return l
            })), a.d(e, "i", (function() {
                return m
            })), a.d(e, "j", (function() {
                return c
            })), a.d(e, "e", (function() {
                return d
            })), a.d(e, "h", (function() {
                return u
            })), a.d(e, "c", (function() {
                return p
            })), a.d(e, "a", (function() {
                return _
            })), a.d(e, "b", (function() {
                return f
            }));
            var s = a("41bb");

            function n(t) {
                return Object(s.a)({
                    url: "system/info",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function r(t) {
                return Object(s.a)({
                    url: "system/theme",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function o(t) {
                return Object(s.a)({
                    url: "system/order",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function i(t) {
                return Object(s.a)({
                    url: "system/vcode",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function l(t) {
                return Object(s.a)({
                    url: "system/email",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function m(t) {
                return Object(s.a)({
                    url: "system/sms",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function c(t) {
                return Object(s.a)({
                    url: "system/storage",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function d(t) {
                return Object(s.a)({
                    url: "system/email/test",
                    method: "post",
                    data: {
                        to: t
                    }
                })
            }

            function u(t) {
                return Object(s.a)({
                    url: "system/order/clean",
                    method: "post",
                    data: {
                        day: t
                    }
                })
            }

            function p(t) {
                return Object(s.a)({
                    url: "system/delete/orders",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }

            function _(t) {
                return Object(s.a)({
                    url: "system/delete/fund_records",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }

            function f(t) {
                return Object(s.a)({
                    url: "system/delete/logs",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }
        }
    }
]);