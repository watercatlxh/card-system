(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-14e8015a", "chunk-419fe948", "chunk-4db37efc", "chunk-1cbcdea1", "chunk-cfda387e", "chunk-775f0977", "chunk-520bbfda", "chunk-fd8ae5d8", "chunk-3821d039"], {
        "10b7": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("323e"),
                o = a.n(s),
                i = a("967f"),
                n = {
                    components: {},
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                order_clean_date: function() {
                                    var e = new Date;
                                    return e.setTime(e.getTime() - 2592e6), e
                                }(),
                                fund_record_clean_date: function() {
                                    var e = new Date;
                                    return e.setTime(e.getTime() - 2592e6), e
                                }(),
                                logs_clean_date: function() {
                                    var e = new Date;
                                    return e.setTime(e.getTime() - 2592e6), e
                                }()
                            },
                            formRules: {}
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getSet: function() {
                            var e = this;
                            this.loading = !0, order().then((function(t) {
                                Object.assign(e.form, t.data), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, order(e.form).then((function() {
                                    e.loading = !1, e.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        },
                        cleanOrder: function() {
                            var e = this,
                                t = this.form.order_clean_date.format("yyyy-MM-dd");
                            this.$confirm("是否要删除日期 ".concat(t, " 之前订单日志?")).then((function() {
                                Object(i.c)(t).then((function() {
                                    e.$notify({
                                        title: "成功",
                                        message: "".concat(t, " 之前订单日志已删除"),
                                        type: "success"
                                    })
                                }))
                            }))
                        },
                        clearFundRecord: function() {
                            var e = this,
                                t = this.form.fund_record_clean_date.format("yyyy-MM-dd");
                            this.$confirm("是否要删除日期 ".concat(t, " 之前收支日志?")).then((function() {
                                Object(i.a)(t).then((function() {
                                    e.$notify({
                                        title: "成功",
                                        message: "".concat(t, " 之前收支日志已删除"),
                                        type: "success"
                                    })
                                }))
                            }))
                        },
                        clearLogs: function() {
                            var e = this,
                                t = this.form.logs_clean_date.format("yyyy-MM-dd");
                            this.$confirm("是否要删除日期 ".concat(t, " 之前登录/操作日志?")).then((function() {
                                Object(i.b)(t).then((function() {
                                    e.$notify({
                                        title: "成功",
                                        message: "".concat(t, " 之前登录/操作日志已删除"),
                                        type: "success"
                                    })
                                }))
                            }))
                        }
                    }
                },
                r = a("2877"),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("数据清理")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "order_clean_date"
                        }
                    }, [a("span", [e._v("此日期之前订单日志")]), a("br"), a("el-date-picker", {
                        attrs: {
                            size: "small",
                            type: "date",
                            align: "right",
                            placeholder: "请选择日期"
                        },
                        model: {
                            value: e.form.order_clean_date,
                            callback: function(t) {
                                e.$set(e.form, "order_clean_date", t)
                            },
                            expression: "form.order_clean_date"
                        }
                    }), a("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: e.cleanOrder
                        }
                    }, [e._v("清理")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "fund_record_clean_date"
                        }
                    }, [a("span", [e._v("此日期之前收支日志")]), a("br"), a("el-date-picker", {
                        attrs: {
                            size: "small",
                            type: "date",
                            align: "right",
                            placeholder: "请选择日期"
                        },
                        model: {
                            value: e.form.fund_record_clean_date,
                            callback: function(t) {
                                e.$set(e.form, "fund_record_clean_date", t)
                            },
                            expression: "form.fund_record_clean_date"
                        }
                    }), a("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: e.clearFundRecord
                        }
                    }, [e._v("清理")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "logs_clean_date"
                        }
                    }, [a("span", [e._v("此日期之前登录日志/操作日志")]), a("br"), a("el-date-picker", {
                        attrs: {
                            size: "small",
                            type: "date",
                            align: "right",
                            placeholder: "请选择日期"
                        },
                        model: {
                            value: e.form.logs_clean_date,
                            callback: function(t) {
                                e.$set(e.form, "logs_clean_date", t)
                            },
                            expression: "form.logs_clean_date"
                        }
                    }), a("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: e.clearLogs
                        }
                    }, [e._v("清理")])], 1)], 1)], 1)
                }), [], !1, null, null, null);
            t.default = l.exports
        },
        2097: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("323e"),
                o = a.n(s),
                i = a("967f"),
                n = {
                    components: {},
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                vcode_driver: "code",
                                vcode_geetest_id: "",
                                vcode_geetest_key: "",
                                vcode_login_admin: 0,
                                vcode_shop_buy: 0,
                                vcode_shop_search: 0
                            },
                            formRules: {}
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet()
                    },
                    methods: {
                        getSet: function() {
                            var e = this;
                            this.loading = !0, Object(i.l)().then((function(t) {
                                Object.assign(e.form, t.data), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, Object(i.l)(e.form).then((function() {
                                    e.loading = !1, e.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        }
                    }
                },
                r = a("2877"),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("验证码驱动")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [e._v("驱动")]), a("el-radio-group", {
                        model: {
                            value: e.form.vcode_driver,
                            callback: function(t) {
                                e.$set(e.form, "vcode_driver", t)
                            },
                            expression: "form.vcode_driver"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: "code"
                        }
                    }, [e._v("普通验证码")]), a("el-radio", {
                        attrs: {
                            label: "geetest"
                        }
                    }, [e._v("Geetest")])], 1)], 1), "geetest" === e.form.vcode_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "vcode_geetest_id"
                        }
                    }, [a("span", [e._v("GEETEST_ID")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "GEETEST_ID"
                        },
                        model: {
                            value: e.form.vcode_geetest_id,
                            callback: function(t) {
                                e.$set(e.form, "vcode_geetest_id", t)
                            },
                            expression: "form.vcode_geetest_id"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "vcode_geetest_key"
                        }
                    }, [a("span", [e._v("GEETEST_KEY")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "GEETEST_KEY"
                        },
                        model: {
                            value: e.form.vcode_geetest_key,
                            callback: function(t) {
                                e.$set(e.form, "vcode_geetest_key", t)
                            },
                            expression: "form.vcode_geetest_key"
                        }
                    })], 1)], 1) : e._e(), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [e._v("后台验证码")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "后台登录验证码",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.vcode_login_admin,
                            callback: function(t) {
                                e.$set(e.form, "vcode_login_admin", t)
                            },
                            expression: "form.vcode_login_admin"
                        }
                    })], 1), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [e._v("店铺验证码")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "下单",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.vcode_shop_buy,
                            callback: function(t) {
                                e.$set(e.form, "vcode_shop_buy", t)
                            },
                            expression: "form.vcode_shop_buy"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "查询订单",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.vcode_shop_search,
                            callback: function(t) {
                                e.$set(e.form, "vcode_shop_search", t)
                            },
                            expression: "form.vcode_shop_search"
                        }
                    })], 1)], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1)], 1)
                }), [], !1, null, null, null);
            t.default = l.exports
        },
        "22d4": function(e, t, a) {},
        "28a0": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = (a("99af"), a("b680"), a("d3b7"), a("323e")),
                o = a.n(s),
                i = a("967f"),
                n = {
                    components: {},
                    data: function() {
                        var e = this.$store.state.app.isMobile;
                        return {
                            isMobile: e,
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                sms_api_id: "",
                                sms_api_key: "",
                                sms_send_order: 0,
                                sms_price: ""
                            },
                            sms: {
                                buyLink: "",
                                balance: ""
                            },
                            formRules: {},
                            rechargeDialogVisible: !1,
                            rechargeForm: {
                                payway: e ? "alipaywap" : "alipay",
                                amount: 10
                            }
                        }
                    },
                    computed: {
                        a: function() {
                            return decodeURIComponent("%68%74%74%70%73%3A%2F%2F%61%70%69%2E%68%69%73%2E%63%61%74%2F%61%70%69%2F%73%6D%73%2F%69%6E%66%6F")
                        },
                        b: function() {
                            return decodeURIComponent("%68%74%74%70%73%3A%2F%2F%61%70%69%2E%68%69%73%2E%63%61%74%2F%61%70%69%2F%73%6D%73%2F%72%65%67%69%73%74%65%72")
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet()
                    },
                    methods: {
                        moneyFilter: a("8b01").a,
                        getSet: function() {
                            var e = this;
                            this.loading = !0, Object(i.i)().then((function(t) {
                                Object.assign(e.form, t.data), e.form.sms_api_id && e.form.sms_api_key && e.handleLoadSmsInfo(), e.form.sms_price = (e.form.sms_price / 100).toFixed(2), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                if (t) {
                                    e.loading = !0;
                                    var a = Object.assign({}, e.form);
                                    a.sms_price = parseInt(100 * a.sms_price), Object(i.i)(a).then((function() {
                                        e.loading = !1, e.$notify({
                                            title: "操作成功",
                                            message: "配置保存成功",
                                            type: "success"
                                        })
                                    })).catch((function() {
                                        e.loading = !1
                                    }))
                                }
                            }))
                        },
                        handleApplySmsAccount: function() {
                            var e = this;
                            this.loading = !0, this.$http.post(this.b).then((function(t) {
                                e.form.sms_api_id = t.data.id, e.form.sms_api_key = t.data.key, Object.assign(e.sms, t.data), e.handleSubmit()
                            })).finally((function() {
                                e.loading = !1
                            }))
                        },
                        handleLoadSmsInfo: function() {
                            var e = this;
                            this.$http.post(this.a, {
                                id: this.form.sms_api_id,
                                key: this.form.sms_api_key
                            }).then((function(t) {
                                Object.assign(e.sms, t.data)
                            })).catch((function(t) {
                                e.sms.balance = t.message
                            }))
                        },
                        handleRecharge: function() {
                            var e = this;
                            this.$refs["form-recharge"].validate((function(t) {
                                t && (e.rechargeDialogVisible = !1, window.open("".concat(e.sms.buyLink, "/").concat(parseInt(100 * e.rechargeForm.amount), "/").concat(e.rechargeForm.payway), "_blank"))
                            }))
                        }
                    }
                },
                r = (a("4383"), a("2877")),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("短信通知")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sms_api_id"
                        }
                    }, [a("span", [e._v("API_ID")]), e.form.sms_api_id || e.loading ? e._e() : a("el-button", {
                        staticClass: "el-form-item-title-btn",
                        attrs: {
                            disabled: e.loading,
                            type: "text"
                        },
                        on: {
                            click: e.handleApplySmsAccount
                        }
                    }, [e._v("点击申请 ")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 API_ID"
                        },
                        model: {
                            value: e.form.sms_api_id,
                            callback: function(t) {
                                e.$set(e.form, "sms_api_id", t)
                            },
                            expression: "form.sms_api_id"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sms_api_key"
                        }
                    }, [a("span", [e._v("API_KEY")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 API_KEY"
                        },
                        model: {
                            value: e.form.sms_api_key,
                            callback: function(t) {
                                e.$set(e.form, "sms_api_key", t)
                            },
                            expression: "form.sms_api_key"
                        }
                    })], 1), e.form.sms_api_id && e.form.sms_api_key ? a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [e._v("短信余额")]), a("el-button", {
                        staticClass: "el-form-item-title-btn",
                        attrs: {
                            type: "text"
                        },
                        on: {
                            click: e.handleLoadSmsInfo
                        }
                    }, [e._v("刷新")]), e.sms.buyLink ? a("el-button", {
                        staticClass: "el-form-item-title-btn",
                        attrs: {
                            type: "text"
                        },
                        on: {
                            click: function(t) {
                                e.rechargeDialogVisible = !0
                            }
                        }
                    }, [e._v(" 充值 ")]) : e._e(), a("el-input", {
                        attrs: {
                            type: "text",
                            disabled: "",
                            placeholder: "加载中",
                            value: e.moneyFilter(e.sms.balance)
                        }
                    })], 1) : e._e(), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [e._v("短信发送选项")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "买家下单后, 发送卡密到买家手机号",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.sms_send_order,
                            callback: function(t) {
                                e.$set(e.form, "sms_send_order", t)
                            },
                            expression: "form.sms_send_order"
                        }
                    }), a("span", {
                        staticClass: "tip",
                        staticStyle: {
                            display: "block",
                            "margin-top": "-12px"
                        }
                    }, [e._v("注意：需要买家额外填写收货手机号")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sms_price"
                        }
                    }, [a("span", [e._v("短信单价")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 API_KEY"
                        },
                        model: {
                            value: e.form.sms_price,
                            callback: function(t) {
                                e.$set(e.form, "sms_price", t)
                            },
                            expression: "form.sms_price"
                        }
                    })], 1)], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1), a("el-dialog", {
                        attrs: {
                            title: "短信账户充值",
                            visible: e.rechargeDialogVisible,
                            "close-on-click-modal": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.rechargeDialogVisible = t
                            }
                        }
                    }, [a("el-form", {
                        ref: "form-recharge",
                        attrs: {
                            model: e.rechargeForm
                        }
                    }, [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "payway"
                        }
                    }, [a("span", {
                        staticStyle: {
                            display: "block"
                        }
                    }, [e._v("请选择支付方式")]), a("el-select", {
                        model: {
                            value: e.rechargeForm.payway,
                            callback: function(t) {
                                e.$set(e.rechargeForm, "payway", t)
                            },
                            expression: "rechargeForm.payway"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "支付宝",
                            value: e.isMobile ? "alipaywap" : "alipay"
                        }
                    }), a("el-option", {
                        attrs: {
                            label: "微信",
                            value: e.isMobile ? "wxwap" : "wx"
                        }
                    }), a("el-option", {
                        attrs: {
                            label: "手机QQ",
                            value: e.isMobile ? "qqwap" : "qq"
                        }
                    })], 1)], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "amount",
                            rules: [{
                                required: !0,
                                message: "请输入充值金额",
                                trigger: "change"
                            }, {
                                type: "number",
                                min: 1,
                                message: "最小限制为 1.00, 请重新输入",
                                trigger: "change"
                            }, {
                                type: "number",
                                max: 1e6,
                                message: "最大限制为 1000000.00, 请重新输入",
                                trigger: "change"
                            }]
                        }
                    }, [a("span", [e._v("请输入充值金额")]), a("el-input", {
                        attrs: {
                            type: "number"
                        },
                        on: {
                            input: function(t) {
                                return e.rechargeForm.amount = parseFloat(t)
                            }
                        },
                        model: {
                            value: e.rechargeForm.amount,
                            callback: function(t) {
                                e.$set(e.rechargeForm, "amount", t)
                            },
                            expression: "rechargeForm.amount"
                        }
                    })], 1)], 1), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(t) {
                                e.rechargeDialogVisible = !1
                            }
                        }
                    }, [e._v("取 消")]), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleRecharge
                        }
                    }, [e._v("确 定")])], 1)], 1)], 1)
                }), [], !1, null, "6e61ef4e", null);
            t.default = l.exports
        },
        "2b52": function(e, t, a) {
            "use strict";
            var s = a("22d4");
            a.n(s).a
        },
        4383: function(e, t, a) {
            "use strict";
            var s = a("7969");
            a.n(s).a
        },
        7969: function(e, t, a) {},
        "7db0": function(e, t, a) {
            "use strict";
            var s = a("23e7"),
                o = a("b727").find,
                i = a("44d2"),
                n = a("ae40"),
                r = "find",
                l = !0,
                c = n(r);
            r in [] && Array(1)[r]((function() {
                l = !1
            })), s({
                target: "Array",
                proto: !0,
                forced: l || !c
            }, {
                find: function(e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i(r)
        },
        "881e": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = (a("d3b7"), a("323e")),
                o = a.n(s),
                i = a("967f"),
                n = {
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
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet(), this.testEmail = this.$store.state.user.userInfo.email
                    },
                    methods: {
                        getSet: function() {
                            var e = this;
                            this.loading = !0, Object(i.d)().then((function(t) {
                                Object.assign(e.form, t.data), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, Object(i.d)(e.form).then((function() {
                                    e.loading = !1, e.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        },
                        handleEmailTest: function() {
                            var e = this;
                            this.sending = !0, Object(i.e)(this.testEmail).then((function(t) {
                                e.sending = !1, e.$alert(t.data, "发送成功", {
                                    type: "success"
                                })
                            })).finally((function() {
                                e.sending = !1
                            }))
                        }
                    }
                },
                r = a("2877"),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("邮件驱动")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [e._v("驱动")]), a("el-radio-group", {
                        model: {
                            value: e.form.mail_driver,
                            callback: function(t) {
                                e.$set(e.form, "mail_driver", t)
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
                    }, [a("span", [e._v("发件人地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "发件人地址"
                        },
                        model: {
                            value: e.form.mail_smtp_from_address,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_from_address", t)
                            },
                            expression: "form.mail_smtp_from_address"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_from_name"
                        }
                    }, [a("span", [e._v("发件人姓名")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "发件人姓名"
                        },
                        model: {
                            value: e.form.mail_smtp_from_name,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_from_name", t)
                            },
                            expression: "form.mail_smtp_from_name"
                        }
                    })], 1), "smtp" === e.form.mail_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_host"
                        }
                    }, [a("span", [e._v("服务器地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "服务器地址"
                        },
                        model: {
                            value: e.form.mail_smtp_host,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_host", t)
                            },
                            expression: "form.mail_smtp_host"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_port"
                        }
                    }, [a("span", [e._v("服务器端口")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "25(null)/465(ssl)/587(tls)"
                        },
                        model: {
                            value: e.form.mail_smtp_port,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_port", t)
                            },
                            expression: "form.mail_smtp_port"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_username"
                        }
                    }, [a("span", [e._v("用户名")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "用户名"
                        },
                        model: {
                            value: e.form.mail_smtp_username,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_username", t)
                            },
                            expression: "form.mail_smtp_username"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_password"
                        }
                    }, [a("span", [e._v("密码")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "密码"
                        },
                        model: {
                            value: e.form.mail_smtp_password,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_password", t)
                            },
                            expression: "form.mail_smtp_password"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "mail_smtp_encryption"
                        }
                    }, [a("span", [e._v("加密")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "null/ssl/tls"
                        },
                        model: {
                            value: e.form.mail_smtp_encryption,
                            callback: function(t) {
                                e.$set(e.form, "mail_smtp_encryption", t)
                            },
                            expression: "form.mail_smtp_encryption"
                        }
                    })], 1)], 1) : e._e(), "sendcloud" === e.form.mail_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sendcloud_user"
                        }
                    }, [a("span", [e._v("User")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "User"
                        },
                        model: {
                            value: e.form.sendcloud_user,
                            callback: function(t) {
                                e.$set(e.form, "sendcloud_user", t)
                            },
                            expression: "form.sendcloud_user"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "sendcloud_key"
                        }
                    }, [a("span", [e._v("Key")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "Key"
                        },
                        model: {
                            value: e.form.sendcloud_key,
                            callback: function(t) {
                                e.$set(e.form, "sendcloud_key", t)
                            },
                            expression: "form.sendcloud_key"
                        }
                    })], 1)], 1) : e._e(), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [e._v("测试发送")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "请输入邮箱"
                        },
                        model: {
                            value: e.testEmail,
                            callback: function(t) {
                                e.testEmail = t
                            },
                            expression: "testEmail"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-button", {
                        attrs: {
                            size: "small",
                            loading: e.sending
                        },
                        on: {
                            click: e.handleEmailTest
                        }
                    }, [e._v(e._s(e.sending ? "发送中" : "发送"))])], 1), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [e._v("邮件发送选项")]), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "发送卡密到买家邮箱",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.mail_send_order,
                            callback: function(t) {
                                e.$set(e.form, "mail_send_order", t)
                            },
                            expression: "form.mail_send_order"
                        }
                    }), a("span", {
                        staticClass: "tip",
                        staticStyle: {
                            display: "block",
                            "margin-top": "-12px"
                        }
                    }, [e._v("注意：需要买家额外填写收货邮箱")])], 1), e.form.mail_send_order ? a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "联系方式位邮箱时, 直接发送至联系方式邮箱",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.mail_send_order_use_contact,
                            callback: function(t) {
                                e.$set(e.form, "mail_send_order_use_contact", t)
                            },
                            expression: "form.mail_send_order_use_contact"
                        }
                    }), a("span", {
                        staticClass: "tip",
                        staticStyle: {
                            display: "block",
                            "margin-top": "-12px"
                        }
                    }, [e._v("无序额外填写收货邮箱, 直接发送至联系方式，如果联系方式不是邮箱则不发送")])], 1) : e._e()], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1)], 1)
                }), [], !1, null, null, null);
            t.default = l.exports
        },
        "967f": function(e, t, a) {
            "use strict";
            a.d(t, "f", (function() {
                return o
            })), a.d(t, "k", (function() {
                return i
            })), a.d(t, "g", (function() {
                return n
            })), a.d(t, "l", (function() {
                return r
            })), a.d(t, "d", (function() {
                return l
            })), a.d(t, "i", (function() {
                return c
            })), a.d(t, "j", (function() {
                return m
            })), a.d(t, "e", (function() {
                return d
            })), a.d(t, "h", (function() {
                return p
            })), a.d(t, "c", (function() {
                return u
            })), a.d(t, "a", (function() {
                return _
            })), a.d(t, "b", (function() {
                return f
            }));
            var s = a("41bb");

            function o(e) {
                return Object(s.a)({
                    url: "system/info",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function i(e) {
                return Object(s.a)({
                    url: "system/theme",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function n(e) {
                return Object(s.a)({
                    url: "system/order",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function r(e) {
                return Object(s.a)({
                    url: "system/vcode",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function l(e) {
                return Object(s.a)({
                    url: "system/email",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function c(e) {
                return Object(s.a)({
                    url: "system/sms",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function m(e) {
                return Object(s.a)({
                    url: "system/storage",
                    method: e ? "post" : "get",
                    data: e
                })
            }

            function d(e) {
                return Object(s.a)({
                    url: "system/email/test",
                    method: "post",
                    data: {
                        to: e
                    }
                })
            }

            function p(e) {
                return Object(s.a)({
                    url: "system/order/clean",
                    method: "post",
                    data: {
                        day: e
                    }
                })
            }

            function u(e) {
                return Object(s.a)({
                    url: "system/delete/orders",
                    method: "post",
                    data: {
                        date: e
                    }
                })
            }

            function _(e) {
                return Object(s.a)({
                    url: "system/delete/fund_records",
                    method: "post",
                    data: {
                        date: e
                    }
                })
            }

            function f(e) {
                return Object(s.a)({
                    url: "system/delete/logs",
                    method: "post",
                    data: {
                        date: e
                    }
                })
            }
        },
        "9af4": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("323e"),
                o = a.n(s),
                i = a("daef"),
                n = a("aefc"),
                r = a("881e"),
                l = a("28a0"),
                c = a("f2c9"),
                m = a("2097"),
                d = a("a1c4"),
                p = a("10b7"),
                u = {
                    info: !1,
                    theme: !1,
                    email: !1,
                    sms: !1,
                    order: !1,
                    vcode: !1,
                    security: !1,
                    storage: !1,
                    clean: !1,
                    other: !1
                },
                _ = {
                    components: {
                        setInfo: i.default,
                        setTheme: n.default,
                        setEmail: r.default,
                        setSms: l.default,
                        setOrder: c.default,
                        setVcode: m.default,
                        setStorage: d.default,
                        setClean: p.default
                    },
                    data: function() {
                        var e = this.$route.query.tab || "info",
                            t = Object.assign({}, u);
                        return t[e] = !0, {
                            loading: !1,
                            activeTab: e,
                            initialized: t
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        },
                        activeTab: function(e) {
                            o.a.isStarted() && o.a.done(), e && (this.$route.query.tab = e, window.history.pushState({}, 0, this.$route.path + "?tab=" + e), this.initialized[e] = !0)
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                f = (a("9fe2"), a("2877")),
                v = Object(f.a)(_, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-tabs", {
                        model: {
                            value: e.activeTab,
                            callback: function(t) {
                                e.activeTab = t
                            },
                            expression: "activeTab"
                        }
                    }, [a("el-tab-pane", {
                        attrs: {
                            label: "网站",
                            name: "info"
                        }
                    }, [e.initialized.info ? a("set-info") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "主题",
                            name: "theme"
                        }
                    }, [e.initialized.theme ? a("set-theme") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "订单",
                            name: "order"
                        }
                    }, [e.initialized.order ? a("set-order") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "邮件",
                            name: "email"
                        }
                    }, [e.initialized.email ? a("set-email") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "短信",
                            name: "sms"
                        }
                    }, [e.initialized.sms ? a("set-sms") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "验证码",
                            name: "vcode"
                        }
                    }, [e.initialized.vcode ? a("set-vcode") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "文件储存",
                            name: "storage"
                        }
                    }, [e.initialized.storage ? a("set-storage") : e._e()], 1), a("el-tab-pane", {
                        attrs: {
                            label: "数据清理",
                            name: "clean"
                        }
                    }, [e.initialized.clean ? a("set-clean") : e._e()], 1)], 1)], 1)
                }), [], !1, null, null, null);
            t.default = v.exports
        },
        "9fe2": function(e, t, a) {
            "use strict";
            var s = a("ca94");
            a.n(s).a
        },
        a1c4: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("323e"),
                o = a.n(s),
                i = a("967f"),
                n = {
                    components: {},
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                storage_driver: "",
                                storage_s3_access_key: "",
                                storage_s3_secret_key: "",
                                storage_s3_region: "",
                                storage_s3_bucket: "",
                                storage_oss_access_key: "",
                                storage_oss_secret_key: "",
                                storage_oss_bucket: "",
                                storage_oss_endpoint: "",
                                storage_oss_is_ssl: "",
                                storage_oss_is_cname: "",
                                storage_oss_cdn_domain: "",
                                storage_qiniu_access_key: "",
                                storage_qiniu_secret_key: "",
                                storage_qiniu_bucket: "",
                                storage_qiniu_domains_default: "",
                                storage_qiniu_domains_https: ""
                            },
                            formRules: {}
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet()
                    },
                    methods: {
                        getSet: function() {
                            var e = this;
                            this.loading = !0, Object(i.j)().then((function(t) {
                                Object.assign(e.form, t.data), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, Object(i.j)(e.form).then((function() {
                                    e.loading = !1, e.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        }
                    }
                },
                r = a("2877"),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("存储驱动")]), a("el-alert", {
                        attrs: {
                            title: "请根据实际情况配置存储引擎，合理做好站点下载分流。建议尽量使用云存储服务，同时保证文件访问协议与网站访问协议一致！",
                            type: "warning"
                        }
                    }), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [e._v("驱动")]), a("el-radio-group", {
                        model: {
                            value: e.form.storage_driver,
                            callback: function(t) {
                                e.$set(e.form, "storage_driver", t)
                            },
                            expression: "form.storage_driver"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: "local"
                        }
                    }, [e._v("本地")]), a("el-radio", {
                        attrs: {
                            label: "s3"
                        }
                    }, [e._v("AWS S3")]), a("el-radio", {
                        attrs: {
                            label: "oss"
                        }
                    }, [e._v("阿里云OSS")]), a("el-radio", {
                        attrs: {
                            label: "qiniu"
                        }
                    }, [e._v("七牛云储存")])], 1)], 1), "local" === e.form.storage_driver ? a("div", {
                        staticClass: "item-container"
                    }, [a("span", {
                        staticClass: "tip"
                    }, [e._v("请确保"), a("code", [e._v("/storage")]), e._v("目录已经配置写入权限")])]) : e._e(), "s3" === e.form.storage_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_access_key"
                        }
                    }, [a("span", [e._v("AccessKey (访问密钥)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 AccessKey (访问密钥)"
                        },
                        model: {
                            value: e.form.storage_s3_access_key,
                            callback: function(t) {
                                e.$set(e.form, "storage_s3_access_key", t)
                            },
                            expression: "form.storage_s3_access_key"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_secret_key"
                        }
                    }, [a("span", [e._v("SecretKey (安全密钥)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 SecretKey (安全密钥)"
                        },
                        model: {
                            value: e.form.storage_s3_secret_key,
                            callback: function(t) {
                                e.$set(e.form, "storage_s3_secret_key", t)
                            },
                            expression: "form.storage_s3_secret_key"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_region"
                        }
                    }, [a("span", [e._v("Region (存储区域)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Region (存储区域)"
                        },
                        model: {
                            value: e.form.storage_s3_region,
                            callback: function(t) {
                                e.$set(e.form, "storage_s3_region", t)
                            },
                            expression: "form.storage_s3_region"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("填写存储区域代码")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_bucket"
                        }
                    }, [a("span", [e._v("Bucket (空间名称)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Bucket (空间名称)"
                        },
                        model: {
                            value: e.form.storage_s3_bucket,
                            callback: function(t) {
                                e.$set(e.form, "storage_s3_bucket", t)
                            },
                            expression: "form.storage_s3_bucket"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("填写存储空间名称，如：static")])], 1)], 1) : e._e(), "oss" === e.form.storage_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_access_key"
                        }
                    }, [a("span", [e._v("AccessKey (访问密钥)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 AccessKey (访问密钥)"
                        },
                        model: {
                            value: e.form.storage_oss_access_key,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_access_key", t)
                            },
                            expression: "form.storage_oss_access_key"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("可以在 [ 阿里云 > 个人中心 ] 设置并获取到访问密钥")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_secret_key"
                        }
                    }, [a("span", [e._v("SecretKey (安全密钥)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 SecretKey (安全密钥)"
                        },
                        model: {
                            value: e.form.storage_oss_secret_key,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_secret_key", t)
                            },
                            expression: "form.storage_oss_secret_key"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("可以在 [ 阿里云 > 个人中心 ] 设置并获取到安全密钥")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_bucket"
                        }
                    }, [a("span", [e._v("Bucket (空间名称)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Bucket (空间名称)"
                        },
                        model: {
                            value: e.form.storage_oss_bucket,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_bucket", t)
                            },
                            expression: "form.storage_oss_bucket"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("填写存储空间名称，如：xxx")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_endpoint"
                        }
                    }, [a("span", [e._v("Endpoint (节点域名)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Endpoint (节点域名)"
                        },
                        model: {
                            value: e.form.storage_oss_endpoint,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_endpoint", t)
                            },
                            expression: "form.storage_oss_endpoint"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("例如: oss-cn-hangzhou.aliyuncs.com")])], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "自定义域名",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.storage_oss_is_cname,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_is_cname", t)
                            },
                            expression: "form.storage_oss_is_cname"
                        }
                    }), a("br"), a("span", {
                        staticClass: "tip"
                    }, [e._v("开启此选项后, 请确认Endpoint为OSS绑定的CNAME域名")]), e._v(" "), a("br"), a("span", {
                        staticClass: "tip"
                    }, [e._v("开启此选项后, 可以使用CDN配置")])], 1), e.form.storage_oss_is_cname ? a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "开启SSL",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.storage_oss_is_ssl,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_is_ssl", t)
                            },
                            expression: "form.storage_oss_is_ssl"
                        }
                    })], 1) : e._e(), e.form.storage_oss_is_cname ? a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_cdn_domain"
                        }
                    }, [a("span", [e._v("CDN Domain (CDN 域名)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 CDN Domain (CDN 域名)"
                        },
                        model: {
                            value: e.form.storage_oss_cdn_domain,
                            callback: function(t) {
                                e.$set(e.form, "storage_oss_cdn_domain", t)
                            },
                            expression: "form.storage_oss_cdn_domain"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("OSS绑定的CDN域名, 填写后将使用CDN")])], 1) : e._e()], 1) : e._e(), "qiniu" === e.form.storage_driver ? a("div", [a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_access_key"
                        }
                    }, [a("span", [e._v("AccessKey (访问密钥)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 AccessKey (访问密钥)"
                        },
                        model: {
                            value: e.form.storage_qiniu_access_key,
                            callback: function(t) {
                                e.$set(e.form, "storage_qiniu_access_key", t)
                            },
                            expression: "form.storage_qiniu_access_key"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("可以在 [ 七牛云 > 个人中心 ] 设置并获取到访问密钥")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_secret_key"
                        }
                    }, [a("span", [e._v("SecretKey (安全密钥)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 SecretKey (安全密钥)"
                        },
                        model: {
                            value: e.form.storage_qiniu_secret_key,
                            callback: function(t) {
                                e.$set(e.form, "storage_qiniu_secret_key", t)
                            },
                            expression: "form.storage_qiniu_secret_key"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("可以在 [ 七牛云 > 个人中心 ] 设置并获取到安全密钥")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_bucket"
                        }
                    }, [a("span", [e._v("Bucket (空间名称)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Bucket (空间名称)"
                        },
                        model: {
                            value: e.form.storage_qiniu_bucket,
                            callback: function(t) {
                                e.$set(e.form, "storage_qiniu_bucket", t)
                            },
                            expression: "form.storage_qiniu_bucket"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("填写存储空间名称，如：static")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_domains_default"
                        }
                    }, [a("span", [e._v("Domain (七牛域名)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Domain (七牛域名)"
                        },
                        model: {
                            value: e.form.storage_qiniu_domains_default,
                            callback: function(t) {
                                e.$set(e.form, "storage_qiniu_domains_default", t)
                            },
                            expression: "form.storage_qiniu_domains_default"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("例如: xxxxx.com1.z0.glb.clouddn.com")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_domains_https"
                        }
                    }, [a("span", [e._v("HTTPS Domain (HTTPS域名)")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 HTTPS Domain (HTTPS域名)"
                        },
                        model: {
                            value: e.form.storage_qiniu_domains_https,
                            callback: function(t) {
                                e.$set(e.form, "storage_qiniu_domains_https", t)
                            },
                            expression: "form.storage_qiniu_domains_https"
                        }
                    })], 1)], 1) : e._e()], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1)], 1)
                }), [], !1, null, null, null);
            t.default = l.exports
        },
        aefc: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = (a("7db0"), a("4160"), a("d81d"), a("b0c0"), a("b64b"), a("d3b7"), a("159b"), a("323e")),
                o = a.n(s),
                i = a("967f"),
                n = {
                    components: {},
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            themes: [],
                            theme: null,
                            form: {
                                shop_theme: ""
                            },
                            formRules: {}
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet()
                    },
                    methods: {
                        getSet: function() {
                            var e = this;
                            this.loading = !0, Object(i.k)().then((function(t) {
                                e.themes = t.data.themes, e.themes.forEach((function(e) {
                                    if (e.value = e.name, e.options && e.config)
                                        for (var t in e.options) e.options.hasOwnProperty(t) && e.config.hasOwnProperty(t) && (e.options[t].value = e.config[t])
                                })), e.form.shop_theme = t.data.default, e.theme = e.themes.find((function(t) {
                                    return t.name === e.form.shop_theme
                                }))
                            })).finally((function() {
                                e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, e.form.theme_config = {}, Object.keys(e.theme.options).map((function(t) {
                                    e.form.theme_config[t] = e.theme.options[t].value
                                })), e.form.theme_config = JSON.stringify(e.form.theme_config), Object(i.k)(e.form).then((function() {
                                    e.loading = !1, e.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        }
                    }
                },
                r = (a("2b52"), a("2877")),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("主题设置")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "shop_theme"
                        }
                    }, [a("span", {
                        staticStyle: {
                            display: "block"
                        }
                    }, [e._v("默认主题")]), a("el-select", {
                        staticClass: "theme-select",
                        on: {
                            change: function(t) {
                                e.form.shop_theme = e.theme.name
                            }
                        },
                        model: {
                            value: e.theme,
                            callback: function(t) {
                                e.theme = t
                            },
                            expression: "theme"
                        }
                    }, e._l(e.themes, (function(e) {
                        return a("el-option", {
                            key: "theme_" + e.id,
                            attrs: {
                                label: e.name + " - " + e.description,
                                value: e
                            }
                        })
                    })), 1)], 1), e.theme ? a("el-card", {
                        staticClass: "child-option"
                    }, [a("p", {
                        staticClass: "child-option-title"
                    }, [e._v("主题默认配置")]), e._l(e.theme.options, (function(t, s) {
                        return a("el-form-item", {
                            key: "theme_option_" + s,
                            staticClass: "item-container"
                        }, ["checkbox" !== t.type ? a("span", {
                            staticStyle: {
                                display: "block"
                            }
                        }, [e._v(e._s(t.label))]) : e._e(), "text" === t.type ? a("el-input", {
                            attrs: {
                                type: t.inputType || "text",
                                maxlength: t.size,
                                placeholder: t.placeholder || ""
                            },
                            model: {
                                value: t.value,
                                callback: function(a) {
                                    e.$set(t, "value", a)
                                },
                                expression: "option.value"
                            }
                        }) : e._e(), "textarea" === t.type ? a("el-input", {
                            attrs: {
                                type: "textarea",
                                maxlength: t.size,
                                rows: t.rows,
                                placeholder: t.placeholder || ""
                            },
                            model: {
                                value: t.value,
                                callback: function(a) {
                                    e.$set(t, "value", a)
                                },
                                expression: "option.value"
                            }
                        }) : e._e(), "checkbox" === t.type ? a("el-checkbox", {
                            attrs: {
                                "true-label": 1,
                                "false-label": 0
                            },
                            model: {
                                value: t.value,
                                callback: function(a) {
                                    e.$set(t, "value", a)
                                },
                                expression: "option.value"
                            }
                        }, [e._v(" " + e._s(t.label) + " ")]) : e._e(), "select" === t.type ? a("el-select", {
                            model: {
                                value: t.value,
                                callback: function(a) {
                                    e.$set(t, "value", a)
                                },
                                expression: "option.value"
                            }
                        }, e._l(t.values, (function(e, t) {
                            return a("el-option", {
                                key: "theme_option_" + s + "_" + t,
                                attrs: {
                                    value: t,
                                    label: e.label
                                }
                            })
                        })), 1) : e._e(), "radio" === t.type ? a("el-radio-group", {
                            model: {
                                value: t.value,
                                callback: function(a) {
                                    e.$set(t, "value", a)
                                },
                                expression: "option.value"
                            }
                        }, e._l(t.values, (function(t, o) {
                            return a("el-radio", {
                                key: "theme_option_" + s + "_" + o,
                                attrs: {
                                    label: o
                                }
                            }, [e._v(e._s(t.label) + " ")])
                        })), 1) : e._e()], 1)
                    }))], 2) : e._e()], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1)], 1)
                }), [], !1, null, "3e636e4e", null);
            t.default = l.exports
        },
        ca94: function(e, t, a) {},
        daef: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("323e"),
                o = a.n(s),
                i = a("967f"),
                n = {
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
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    methods: {
                        loadInfo: function() {
                            var e = this;
                            this.loading = !0, Object(i.f)().then((function(t) {
                                Object.assign(e.form, t.data), e.$refs["editor-shop_ann"].setValue(e.form.shop_ann), e.$refs["editor-shop_ann_pop"].setValue(e.form.shop_ann_pop), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.loadInfo()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, e.form.shop_ann = e.$refs["editor-shop_ann"].getValue(), e.form.shop_ann_pop = e.$refs["editor-shop_ann_pop"].getValue(), Object(i.f)(e.form).then((function() {
                                    e.$notify({
                                        title: "提示",
                                        message: "修改设置成功",
                                        type: "success",
                                        duration: 3e3
                                    }), e.loading = !1
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        }
                    }
                },
                r = a("2877"),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("常规设置")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_name"
                        }
                    }, [a("span", [e._v("名称")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "网站名称"
                        },
                        model: {
                            value: e.form.app_name,
                            callback: function(t) {
                                e.$set(e.form, "app_name", t)
                            },
                            expression: "form.app_name"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_title"
                        }
                    }, [a("span", [e._v("标题")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "网站标题"
                        },
                        model: {
                            value: e.form.app_title,
                            callback: function(t) {
                                e.$set(e.form, "app_title", t)
                            },
                            expression: "form.app_title"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "shop_ann"
                        }
                    }, [a("span", [e._v("店铺公告")]), a("quill-editor", {
                        ref: "editor-shop_ann",
                        attrs: {
                            placeholder: "本说明将显示在商户首页"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "shop_ann_pop"
                        }
                    }, [a("span", [e._v("首页弹窗")]), a("quill-editor", {
                        ref: "editor-shop_ann_pop",
                        attrs: {
                            placeholder: "本说明将在商户首页弹窗"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("span", [e._v("库存显示")]), a("el-radio-group", {
                        attrs: {
                            size: "small"
                        },
                        model: {
                            value: e.form.shop_inventory,
                            callback: function(t) {
                                e.$set(e.form, "shop_inventory", t)
                            },
                            expression: "form.shop_inventory"
                        }
                    }, [a("el-radio-button", {
                        attrs: {
                            label: 0
                        }
                    }, [e._v("大致范围")]), a("el-radio-button", {
                        attrs: {
                            label: 1
                        }
                    }, [e._v("实际库存")])], 1)], 1), a("h2", {
                        staticClass: "title",
                        staticStyle: {
                            "margin-top": "48px"
                        }
                    }, [e._v("网站设置")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_url"
                        }
                    }, [a("span", [e._v("网站地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "格式: http://example.com"
                        },
                        model: {
                            value: e.form.app_url,
                            callback: function(t) {
                                e.$set(e.form, "app_url", t)
                            },
                            expression: "form.app_url"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "app_url_api"
                        }
                    }, [a("span", [e._v("网站API地址")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "格式: http://api.example.com"
                        },
                        model: {
                            value: e.form.app_url_api,
                            callback: function(t) {
                                e.$set(e.form, "app_url_api", t)
                            },
                            expression: "form.app_url_api"
                        }
                    }), a("span", {
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [e._v("用于支付API通知，如主站开启5秒盾等，请在这里提供一个没有盾的地址，否则会造成通知失败")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "keywords"
                        }
                    }, [a("span", [e._v("关键词")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入网站关键词(keywords)"
                        },
                        model: {
                            value: e.form.keywords,
                            callback: function(t) {
                                e.$set(e.form, "keywords", t)
                            },
                            expression: "form.keywords"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "description"
                        }
                    }, [a("span", [e._v("描述")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入网站描述(description)"
                        },
                        model: {
                            value: e.form.description,
                            callback: function(t) {
                                e.$set(e.form, "description", t)
                            },
                            expression: "form.description"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "company"
                        }
                    }, [a("span", [e._v("底部版权")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "备案号以及版权号等信息"
                        },
                        model: {
                            value: e.form.company,
                            callback: function(t) {
                                e.$set(e.form, "company", t)
                            },
                            expression: "form.company"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "qq"
                        }
                    }, [a("span", [e._v("客服QQ")]), a("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入联系QQ"
                        },
                        model: {
                            value: e.form.shop_qq,
                            callback: function(t) {
                                e.$set(e.form, "shop_qq", t)
                            },
                            expression: "form.shop_qq"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "js_kf"
                        }
                    }, [a("span", [e._v("客服代码(QQ等)")]), a("el-input", {
                        attrs: {
                            type: "textarea",
                            placeholder: "请输入客服代码",
                            autosize: {
                                minRows: 3,
                                maxRows: 15
                            }
                        },
                        model: {
                            value: e.form.js_kf,
                            callback: function(t) {
                                e.$set(e.form, "js_kf", t)
                            },
                            expression: "form.js_kf"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "js_tj"
                        }
                    }, [a("span", [e._v("统计代码")]), a("el-input", {
                        attrs: {
                            type: "textarea",
                            placeholder: "请输入统计代码",
                            autosize: {
                                minRows: 3,
                                maxRows: 15
                            }
                        },
                        model: {
                            value: e.form.js_tj,
                            callback: function(t) {
                                e.$set(e.form, "js_tj", t)
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
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1)], 1)
                }), [], !1, null, null, null);
            t.default = l.exports
        },
        f2c9: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("323e"),
                o = a.n(s),
                i = a("967f"),
                n = {
                    components: {},
                    data: function() {
                        return {
                            loading: !1,
                            labelWidth: "0px",
                            form: {
                                order_query_day: 30,
                                order_pay_timeout_minutes: 5,
                                order_query_password_open: 0,
                                order_clean_unpay_open: 0,
                                order_clean_unpay_day: 7
                            },
                            formRules: {
                                order_query_day: [{
                                    required: !0,
                                    message: "请输入订单查询最长天数",
                                    trigger: "blur"
                                }],
                                order_pay_timeout_minutes: [{
                                    required: !0,
                                    message: "请输入订单支付超时分钟",
                                    trigger: "blur"
                                }]
                            }
                        }
                    },
                    watch: {
                        loading: function(e, t) {
                            e ? t || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet()
                    },
                    methods: {
                        getSet: function() {
                            var e = this;
                            this.loading = !0, Object(i.g)().then((function(t) {
                                Object.assign(e.form, t.data), e.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var e = this;
                            this.$refs.form.validate((function(t) {
                                t && (e.loading = !0, Object(i.g)(e.form).then((function() {
                                    e.loading = !1, e.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    e.loading = !1
                                })))
                            }))
                        },
                        clearOrder: function() {
                            var e = this;
                            this.$confirm("是否要删除 ".concat(this.form.order_clean_unpay_day, "天 前未支付订单?")).then((function() {
                                Object(i.h)(e.form.order_clean_unpay_day).then((function() {
                                    e.$notify({
                                        title: "成功",
                                        message: "".concat(e.form.order_clean_unpay_day, "天 前未支付订单已删除"),
                                        type: "success"
                                    })
                                }))
                            }))
                        }
                    }
                },
                r = a("2877"),
                l = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-card", [a("el-form", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading.body",
                            value: e.loading,
                            expression: "loading",
                            modifiers: {
                                body: !0
                            }
                        }],
                        ref: "form",
                        attrs: {
                            model: e.form,
                            "label-width": e.labelWidth,
                            rules: e.formRules
                        }
                    }, [a("h2", {
                        staticClass: "title"
                    }, [e._v("订单设置")]), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "order_pay_timeout_minutes"
                        }
                    }, [a("span", [e._v("订单支付超时(分钟)")]), a("el-input", {
                        attrs: {
                            type: "number",
                            placeholder: "请输入订单支付超时分钟"
                        },
                        model: {
                            value: e.form.order_pay_timeout_minutes,
                            callback: function(t) {
                                e.$set(e.form, "order_pay_timeout_minutes", t)
                            },
                            expression: "form.order_pay_timeout_minutes"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("支付超时后, 未支付订单将不再允许支付")])], 1), a("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "order_query_day"
                        }
                    }, [a("span", [e._v("订单查询最长天数")]), a("el-input", {
                        attrs: {
                            type: "number",
                            placeholder: "请输入订单查询最长天数"
                        },
                        model: {
                            value: e.form.order_query_day,
                            callback: function(t) {
                                e.$set(e.form, "order_query_day", t)
                            },
                            expression: "form.order_query_day"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("买家将无法查询超过此天数的订单")])], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "开启订单查询密码",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.order_query_password_open,
                            callback: function(t) {
                                e.$set(e.form, "order_query_password_open", t)
                            },
                            expression: "form.order_query_password_open"
                        }
                    })], 1), a("el-form-item", {
                        staticClass: "item-container"
                    }, [a("el-switch", {
                        attrs: {
                            "inactive-text": "清理未支付订单",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: e.form.order_clean_unpay_open,
                            callback: function(t) {
                                e.$set(e.form, "order_clean_unpay_open", t)
                            },
                            expression: "form.order_clean_unpay_open"
                        }
                    })], 1), a("el-form-item", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.form.order_clean_unpay_open,
                            expression: "form.order_clean_unpay_open"
                        }],
                        staticClass: "item-container",
                        attrs: {
                            prop: "order_clean_unpay_day",
                            rules: {
                                required: !0,
                                message: "请输入未支付订单保留天数",
                                trigger: "blur"
                            }
                        }
                    }, [a("span", [e._v("未支付订单保留天数")]), a("el-input", {
                        attrs: {
                            type: "number",
                            placeholder: "请输入未支付订单保留天数"
                        },
                        model: {
                            value: e.form.order_clean_unpay_day,
                            callback: function(t) {
                                e.$set(e.form, "order_clean_unpay_day", t)
                            },
                            expression: "form.order_clean_unpay_day"
                        }
                    }), a("span", {
                        staticClass: "tip"
                    }, [e._v("超过此天数的未支付订单将被删除")])], 1), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.form.order_clean_unpay_open,
                            expression: "form.order_clean_unpay_open"
                        }],
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [a("span", [e._v("注意: 本功能需要开启定时任务")]), a("code", {
                        staticStyle: {
                            display: "block"
                        }
                    }, [e._v(" * * * * * php 安装目录/artisan schedule:run;")]), a("br"), e._v(" 你也可以点此 "), a("el-button", {
                        attrs: {
                            size: "mini"
                        },
                        on: {
                            click: e.clearOrder
                        }
                    }, [e._v("手动清理")])], 1)], 1), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [a("el-button", {
                        on: {
                            click: e.handleResetForm
                        }
                    }, [e._v("刷新")]), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.handleSubmit(t)
                            }
                        }
                    }, [e._v("保存更改")])], 1)], 1)
                }), [], !1, null, null, null);
            t.default = l.exports
        }
    }
]);