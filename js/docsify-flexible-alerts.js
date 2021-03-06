/*!
 * docsify-plugin-flexible-alerts
 * v1.0.2
 * https://github.com/zanfab/docsify-plugin-flexible-alerts#readme
 * (c) 2019 Fabian Zankl
 * MIT license
 */
! function() {
    "use strict";

    function g(t) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var e;
    ! function(t, e) {
        void 0 === e && (e = {});
        var o = e.insertAt;
        if (t && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = document.createElement("style");
            a.type = "text/css", "top" === o && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
        }
    }('@import url("https://use.fontawesome.com/releases/v5.6.3/css/solid.css");@import url("https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css");.alert{display:block;position:relative;word-wrap:break-word;word-break:break-word;padding:.75rem 1.25rem!important;margin-bottom:2rem!important;margin-top:2rem!important;}.alert>*{max-width:100%}.alert+.alert{margin-top:-.25rem!important}.alert:before{content:unset!important}.alert p{margin-top:.5rem;margin-bottom:.5rem}.alert i{margin-right:.5rem}.alert .title{font-weight:600;margin:0}.alert>:first-child{margin-top:0}.alert>:last-child{margin-bottom:0}.alert.callout{border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem;background:#fff}.alert.callout.warning{border-left-color:#f0ad4e!important}.alert.callout.warning .title{color:#f0ad4e}.alert.callout.tip{border-left-color:#28a745!important}.alert.callout.tip .title{color:#28a745}.alert.callout.info{border-left-color:#17a2b8!important}.alert.callout.info .title{color:#17a2b8}.alert.callout.danger{border-left-color:#dc3545!important}.alert.callout.danger .title{color:#dc3545}.alert.flat{border-radius:25px;color:#383d41;background-color:#e2e3e5;border:1px solid #d6d8db}.alert.flat.info{color:#02587f;background-color:#cdeefd;border-color:#b8e7fc}.alert.flat.info .title{color:#01354d}.alert.flat.tip{color:#285b2a;background-color:#dbefdc;border-color:#cde9ce}.alert.flat.tip .title{color:#18381a}.alert.flat.warning{color:#852d12;background-color:#ffddd3;border-color:#ffd0c1}.alert.flat.warning .title{color:#581e0c}.alert.flat.danger{color:#7f231c;background-color:#fdd9d7;border-color:#fccac7}.alert.flat.danger .title{color:#551713}'), e = {
        style: "callout",
        note: {
            label: "Note",
            icon: "fas fa-info-circle",
            className: "info"
        },
        tip: {
            label: "Tip",
            icon: "fas fa-lightbulb",
            className: "tip"
        },
        warning: {
            label: "Warning",
            icon: "fas fa-exclamation-triangle",
            className: "warning"
        },
        danger: {
            label: "Attention",
            icon: "fas fa-ban",
            className: "danger"
        }
    }, window.$docsify = window.$docsify || {}, window.$docsify.plugins = [].concat(function(t, b) {
        var m = function t(e, o) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                for (var a in o) try {
                    o[a].constructor === Object && r < 1 ? e[a] = t(e[a], o[a], r + 1) : e[a] = o[a]
                } catch (t) {
                    e[a] = o[a]
                }
                return e
            }(e, b.config["flexible-alerts"]),
            p = function(t, e, o, r) {
                var a = (t || "").match(new RegExp("".concat(e, ":(([\\s\\w\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]*))")));
                return a ? r ? r(a[1]) : a[1] : r ? r(o) : o
            };
        t.afterEach(function(t, e) {
            e(t.replace(/<\s*blockquote[^>]*>(?:<p>|[\S\n]*)?\[!(\w*)((?:\|[\w*:[\s\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*)*?)\]([\s\S]*?)(?:<\/p>)?<\s*\/\s*blockquote>/g, function(t, e, o, r) {
                var a = m[e.toLowerCase()];
                if (!a) return t;
                var l = p(o, "style", m.style),
                    n = p(o, "iconVisibility", "visible", function(t) {
                        return "hidden" !== t
                    }),
                    c = p(o, "labelVisibility", "visible", function(t) {
                        return "hidden" !== t
                    }),
                    i = p(o, "label", a.label),
                    d = p(o, "icon", a.icon),
                    s = p(o, "className", a.className);
                if ("object" === g(i)) {
                    var f = Object.keys(i).filter(function(t) {
                        return -1 < b.route.path.indexOf(t)
                    });
                    f && 0 < f.length ? i = i[f[0]] : n = c = !1
                }
                var u = '<i class="'.concat(d, '"></i>');
                return '<div class="alert '.concat(l, " ").concat(s, '">\n            <p class="title">\n                ').concat(n ? u : "", "\n                ").concat(c ? i : "", "\n            </p>\n            <p>").concat(r, "</p>\n          </div>")
            }))
        })
    }, window.$docsify.plugins)
}();
//# sourceMappingURL=docsify-plugin-flexible-alerts.min.js.map