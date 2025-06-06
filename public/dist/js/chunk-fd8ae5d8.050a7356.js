(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-fd8ae5d8"], {
        "967f": function(t, e, s) {
            "use strict";
            s.d(e, "f", (function() {
                return o
            })), s.d(e, "k", (function() {
                return r
            })), s.d(e, "g", (function() {
                return i
            })), s.d(e, "l", (function() {
                return n
            })), s.d(e, "d", (function() {
                return c
            })), s.d(e, "i", (function() {
                return _
            })), s.d(e, "j", (function() {
                return l
            })), s.d(e, "e", (function() {
                return m
            })), s.d(e, "h", (function() {
                return u
            })), s.d(e, "c", (function() {
                return d
            })), s.d(e, "a", (function() {
                return p
            })), s.d(e, "b", (function() {
                return f
            }));
            var a = s("41bb");

            function o(t) {
                return Object(a.a)({
                    url: "system/info",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function r(t) {
                return Object(a.a)({
                    url: "system/theme",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function i(t) {
                return Object(a.a)({
                    url: "system/order",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function n(t) {
                return Object(a.a)({
                    url: "system/vcode",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function c(t) {
                return Object(a.a)({
                    url: "system/email",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function _(t) {
                return Object(a.a)({
                    url: "system/sms",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function l(t) {
                return Object(a.a)({
                    url: "system/storage",
                    method: t ? "post" : "get",
                    data: t
                })
            }

            function m(t) {
                return Object(a.a)({
                    url: "system/email/test",
                    method: "post",
                    data: {
                        to: t
                    }
                })
            }

            function u(t) {
                return Object(a.a)({
                    url: "system/order/clean",
                    method: "post",
                    data: {
                        day: t
                    }
                })
            }

            function d(t) {
                return Object(a.a)({
                    url: "system/delete/orders",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }

            function p(t) {
                return Object(a.a)({
                    url: "system/delete/fund_records",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }

            function f(t) {
                return Object(a.a)({
                    url: "system/delete/logs",
                    method: "post",
                    data: {
                        date: t
                    }
                })
            }
        },
        a1c4: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = s("323e"),
                o = s.n(a),
                r = s("967f"),
                i = {
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
                        loading: function(t, e) {
                            t ? e || o.a.isStarted() || o.a.start() : o.a.done()
                        }
                    },
                    mounted: function() {
                        this.getSet()
                    },
                    methods: {
                        getSet: function() {
                            var t = this;
                            this.loading = !0, Object(r.j)().then((function(e) {
                                Object.assign(t.form, e.data), t.loading = !1
                            }))
                        },
                        handleResetForm: function() {
                            this.getSet()
                        },
                        handleSubmit: function() {
                            var t = this;
                            this.$refs.form.validate((function(e) {
                                e && (t.loading = !0, Object(r.j)(t.form).then((function() {
                                    t.loading = !1, t.$notify({
                                        title: "操作成功",
                                        message: "配置保存成功",
                                        type: "success"
                                    })
                                })).catch((function() {
                                    t.loading = !1
                                })))
                            }))
                        }
                    }
                },
                n = s("2877"),
                c = Object(n.a)(i, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("el-card", [s("el-form", {
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
                    }, [s("h2", {
                        staticClass: "title"
                    }, [t._v("存储驱动")]), s("el-alert", {
                        attrs: {
                            title: "请根据实际情况配置存储引擎，合理做好站点下载分流。建议尽量使用云存储服务，同时保证文件访问协议与网站访问协议一致！",
                            type: "warning"
                        }
                    }), s("el-form-item", {
                        staticClass: "item-container"
                    }, [s("span", [t._v("驱动")]), s("el-radio-group", {
                        model: {
                            value: t.form.storage_driver,
                            callback: function(e) {
                                t.$set(t.form, "storage_driver", e)
                            },
                            expression: "form.storage_driver"
                        }
                    }, [s("el-radio", {
                        attrs: {
                            label: "local"
                        }
                    }, [t._v("本地")]), s("el-radio", {
                        attrs: {
                            label: "s3"
                        }
                    }, [t._v("AWS S3")]), s("el-radio", {
                        attrs: {
                            label: "oss"
                        }
                    }, [t._v("阿里云OSS")]), s("el-radio", {
                        attrs: {
                            label: "qiniu"
                        }
                    }, [t._v("七牛云储存")])], 1)], 1), "local" === t.form.storage_driver ? s("div", {
                        staticClass: "item-container"
                    }, [s("span", {
                        staticClass: "tip"
                    }, [t._v("请确保"), s("code", [t._v("/storage")]), t._v("目录已经配置写入权限")])]) : t._e(), "s3" === t.form.storage_driver ? s("div", [s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_access_key"
                        }
                    }, [s("span", [t._v("AccessKey (访问密钥)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 AccessKey (访问密钥)"
                        },
                        model: {
                            value: t.form.storage_s3_access_key,
                            callback: function(e) {
                                t.$set(t.form, "storage_s3_access_key", e)
                            },
                            expression: "form.storage_s3_access_key"
                        }
                    })], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_secret_key"
                        }
                    }, [s("span", [t._v("SecretKey (安全密钥)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 SecretKey (安全密钥)"
                        },
                        model: {
                            value: t.form.storage_s3_secret_key,
                            callback: function(e) {
                                t.$set(t.form, "storage_s3_secret_key", e)
                            },
                            expression: "form.storage_s3_secret_key"
                        }
                    })], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_region"
                        }
                    }, [s("span", [t._v("Region (存储区域)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Region (存储区域)"
                        },
                        model: {
                            value: t.form.storage_s3_region,
                            callback: function(e) {
                                t.$set(t.form, "storage_s3_region", e)
                            },
                            expression: "form.storage_s3_region"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("填写存储区域代码")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_s3_bucket"
                        }
                    }, [s("span", [t._v("Bucket (空间名称)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Bucket (空间名称)"
                        },
                        model: {
                            value: t.form.storage_s3_bucket,
                            callback: function(e) {
                                t.$set(t.form, "storage_s3_bucket", e)
                            },
                            expression: "form.storage_s3_bucket"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("填写存储空间名称，如：static")])], 1)], 1) : t._e(), "oss" === t.form.storage_driver ? s("div", [s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_access_key"
                        }
                    }, [s("span", [t._v("AccessKey (访问密钥)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 AccessKey (访问密钥)"
                        },
                        model: {
                            value: t.form.storage_oss_access_key,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_access_key", e)
                            },
                            expression: "form.storage_oss_access_key"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("可以在 [ 阿里云 > 个人中心 ] 设置并获取到访问密钥")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_secret_key"
                        }
                    }, [s("span", [t._v("SecretKey (安全密钥)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 SecretKey (安全密钥)"
                        },
                        model: {
                            value: t.form.storage_oss_secret_key,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_secret_key", e)
                            },
                            expression: "form.storage_oss_secret_key"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("可以在 [ 阿里云 > 个人中心 ] 设置并获取到安全密钥")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_bucket"
                        }
                    }, [s("span", [t._v("Bucket (空间名称)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Bucket (空间名称)"
                        },
                        model: {
                            value: t.form.storage_oss_bucket,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_bucket", e)
                            },
                            expression: "form.storage_oss_bucket"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("填写存储空间名称，如：xxx")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_endpoint"
                        }
                    }, [s("span", [t._v("Endpoint (节点域名)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Endpoint (节点域名)"
                        },
                        model: {
                            value: t.form.storage_oss_endpoint,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_endpoint", e)
                            },
                            expression: "form.storage_oss_endpoint"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("例如: oss-cn-hangzhou.aliyuncs.com")])], 1), s("el-form-item", {
                        staticClass: "item-container"
                    }, [s("el-switch", {
                        attrs: {
                            "inactive-text": "自定义域名",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: t.form.storage_oss_is_cname,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_is_cname", e)
                            },
                            expression: "form.storage_oss_is_cname"
                        }
                    }), s("br"), s("span", {
                        staticClass: "tip"
                    }, [t._v("开启此选项后, 请确认Endpoint为OSS绑定的CNAME域名")]), t._v(" "), s("br"), s("span", {
                        staticClass: "tip"
                    }, [t._v("开启此选项后, 可以使用CDN配置")])], 1), t.form.storage_oss_is_cname ? s("el-form-item", {
                        staticClass: "item-container"
                    }, [s("el-switch", {
                        attrs: {
                            "inactive-text": "开启SSL",
                            "active-value": 1,
                            "inactive-value": 0
                        },
                        model: {
                            value: t.form.storage_oss_is_ssl,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_is_ssl", e)
                            },
                            expression: "form.storage_oss_is_ssl"
                        }
                    })], 1) : t._e(), t.form.storage_oss_is_cname ? s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_oss_cdn_domain"
                        }
                    }, [s("span", [t._v("CDN Domain (CDN 域名)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 CDN Domain (CDN 域名)"
                        },
                        model: {
                            value: t.form.storage_oss_cdn_domain,
                            callback: function(e) {
                                t.$set(t.form, "storage_oss_cdn_domain", e)
                            },
                            expression: "form.storage_oss_cdn_domain"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("OSS绑定的CDN域名, 填写后将使用CDN")])], 1) : t._e()], 1) : t._e(), "qiniu" === t.form.storage_driver ? s("div", [s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_access_key"
                        }
                    }, [s("span", [t._v("AccessKey (访问密钥)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 AccessKey (访问密钥)"
                        },
                        model: {
                            value: t.form.storage_qiniu_access_key,
                            callback: function(e) {
                                t.$set(t.form, "storage_qiniu_access_key", e)
                            },
                            expression: "form.storage_qiniu_access_key"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("可以在 [ 七牛云 > 个人中心 ] 设置并获取到访问密钥")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_secret_key"
                        }
                    }, [s("span", [t._v("SecretKey (安全密钥)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 SecretKey (安全密钥)"
                        },
                        model: {
                            value: t.form.storage_qiniu_secret_key,
                            callback: function(e) {
                                t.$set(t.form, "storage_qiniu_secret_key", e)
                            },
                            expression: "form.storage_qiniu_secret_key"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("可以在 [ 七牛云 > 个人中心 ] 设置并获取到安全密钥")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_bucket"
                        }
                    }, [s("span", [t._v("Bucket (空间名称)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Bucket (空间名称)"
                        },
                        model: {
                            value: t.form.storage_qiniu_bucket,
                            callback: function(e) {
                                t.$set(t.form, "storage_qiniu_bucket", e)
                            },
                            expression: "form.storage_qiniu_bucket"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("填写存储空间名称，如：static")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_domains_default"
                        }
                    }, [s("span", [t._v("Domain (七牛域名)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 Domain (七牛域名)"
                        },
                        model: {
                            value: t.form.storage_qiniu_domains_default,
                            callback: function(e) {
                                t.$set(t.form, "storage_qiniu_domains_default", e)
                            },
                            expression: "form.storage_qiniu_domains_default"
                        }
                    }), s("span", {
                        staticClass: "tip"
                    }, [t._v("例如: xxxxx.com1.z0.glb.clouddn.com")])], 1), s("el-form-item", {
                        staticClass: "item-container",
                        attrs: {
                            prop: "storage_qiniu_domains_https"
                        }
                    }, [s("span", [t._v("HTTPS Domain (HTTPS域名)")]), s("el-input", {
                        attrs: {
                            type: "text",
                            placeholder: "请输入 HTTPS Domain (HTTPS域名)"
                        },
                        model: {
                            value: t.form.storage_qiniu_domains_https,
                            callback: function(e) {
                                t.$set(t.form, "storage_qiniu_domains_https", e)
                            },
                            expression: "form.storage_qiniu_domains_https"
                        }
                    })], 1)], 1) : t._e()], 1), s("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            "margin-top": "24px"
                        }
                    }, [s("el-button", {
                        on: {
                            click: t.handleResetForm
                        }
                    }, [t._v("刷新")]), s("el-button", {
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
            e.default = c.exports
        }
    }
]);