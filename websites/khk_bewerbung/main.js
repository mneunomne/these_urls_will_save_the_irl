! function(a, b) {
    "function" == typeof define && define.amd ? define(["is"], function(c) {
        return a.is = b(c)
    }) : "object" == typeof exports ? module.exports = b(require("is_js")) : a.is = b(a.is)
}(this, function(a) {
    function b(a) {
        return function() {
            return !a.apply(null, i.call(arguments))
        }
    }

    function c(b) {
        return function() {
            var c = i.call(arguments),
                d = c.length;
            1 === d && a.array(c[0]) && (c = c[0], d = c.length);
            for (var e = 0; d > e; e++)
                if (!b.call(null, c[e])) return !1;
            return !0
        }
    }

    function d(b) {
        return function() {
            var c = i.call(arguments),
                d = c.length;
            1 === d && a.array(c[0]) && (c = c[0], d = c.length);
            for (var e = 0; d > e; e++)
                if (b.call(null, c[e])) return !0;
            return !1
        }
    }

    function e() {
        var e = a;
        for (var f in e)
            if (j.call(e, f) && a.function(e[f]))
                for (var g = e[f].api || ["not", "all", "any"], h = 0; h < g.length; h++) "not" === g[h] && (a.not[f] = b(a[f])), "all" === g[h] && (a.all[f] = c(a[f])), "any" === g[h] && (a.any[f] = d(a[f]))
    }
    var f = this || global,
        g = f.is;
    a = {}, a.VERSION = "0.7.3", a.not = {}, a.all = {}, a.any = {};
    var h = Object.prototype.toString,
        i = Array.prototype.slice,
        j = Object.prototype.hasOwnProperty;
    if (a.arguments = function(b) {
            return a.not.null(b) && ("[object Arguments]" === h.call(b) || "object" == typeof b && "callee" in b)
        }, a.array = Array.isArray || function(a) {
            return "[object Array]" === h.call(a)
        }, a.boolean = function(a) {
            return a === !0 || a === !1 || "[object Boolean]" === h.call(a)
        }, a.date = function(a) {
            return "[object Date]" === h.call(a)
        }, a.error = function(a) {
            return "[object Error]" === h.call(a)
        }, a.function = function(a) {
            return "[object Function]" === h.call(a) || "function" == typeof a
        }, a.nan = function(a) {
            return a !== a
        }, a.null = function(a) {
            return null === a || "[object Null]" === h.call(a)
        }, a.number = function(b) {
            return a.not.nan(b) && "[object Number]" === h.call(b)
        }, a.object = function(a) {
            var b = typeof a;
            return "function" === b || "object" === b && !!a
        }, a.json = function(a) {
            return "[object Object]" === h.call(a)
        }, a.regexp = function(a) {
            return "[object RegExp]" === h.call(a)
        }, a.sameType = function(b, c) {
            return a.nan(b) || a.nan(c) ? a.nan(b) === a.nan(c) : h.call(b) === h.call(c)
        }, a.sameType.api = ["not"], a.string = function(a) {
            return "[object String]" === h.call(a)
        }, a.char = function(b) {
            return a.string(b) && 1 === b.length
        }, a.undefined = function(a) {
            return void 0 === a
        }, a.empty = function(b) {
            if (a.object(b)) {
                var c = Object.getOwnPropertyNames(b).length;
                return 0 === c || 1 === c && a.array(b) || 2 === c && a.arguments(b) ? !0 : !1
            }
            return "" === b
        }, a.existy = function(a) {
            return null !== a && void 0 !== a
        }, a.truthy = function(b) {
            return a.existy(b) && b !== !1 && a.not.nan(b) && "" !== b && 0 !== b
        }, a.falsy = b(a.truthy), a.space = function(b) {
            if (a.char(b)) {
                var c = b.charCodeAt(0);
                return c > 8 && 14 > c || 32 === c
            }
            return !1
        }, "undefined" != typeof window) {
        var k = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
            l = "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || "",
            m = "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "";
        a.chrome = function() {
            return /chrome|chromium/i.test(k) && /google inc/.test(l)
        }, a.chrome.api = ["not"], a.firefox = function() {
            return /firefox/i.test(k)
        }, a.firefox.api = ["not"], a.ie = function(a) {
            return a ? a >= 11 ? "ActiveXObject" in window : new RegExp("msie " + a).test(k) : /msie/i.test(k) || "ActiveXObject" in window
        }, a.ie.api = ["not"], a.opera = function() {
            return /^Opera\//.test(k) || /\x20OPR\//.test(k)
        }, a.opera.api = ["not"], a.safari = function() {
            return /safari/i.test(k) && /apple computer/i.test(l)
        }, a.safari.api = ["not"], a.ios = function() {
            return a.iphone() || a.ipad() || a.ipod()
        }, a.ios.api = ["not"], a.iphone = function() {
            return /iphone/i.test(k)
        }, a.iphone.api = ["not"], a.ipad = function() {
            return /ipad/i.test(k)
        }, a.ipad.api = ["not"], a.ipod = function() {
            return /ipod/i.test(k)
        }, a.ipod.api = ["not"], a.android = function() {
            return /android/i.test(k)
        }, a.android.api = ["not"], a.androidPhone = function() {
            return /android/i.test(k) && /mobile/i.test(k)
        }, a.androidPhone.api = ["not"], a.androidTablet = function() {
            return /android/i.test(k) && !/mobile/i.test(k)
        }, a.androidTablet.api = ["not"], a.blackberry = function() {
            return /blackberry/i.test(k) || /BB10/i.test(k)
        }, a.blackberry.api = ["not"], a.desktop = function() {
            return a.not.mobile() && a.not.tablet()
        }, a.desktop.api = ["not"], a.linux = function() {
            return /linux/i.test(m)
        }, a.linux.api = ["not"], a.mac = function() {
            return /mac/i.test(m)
        }, a.mac.api = ["not"], a.windows = function() {
            return /win/i.test(m)
        }, a.windows.api = ["not"], a.windowsPhone = function() {
            return a.windows() && /phone/i.test(k)
        }, a.windowsPhone.api = ["not"], a.windowsTablet = function() {
            return a.windows() && a.not.windowsPhone() && /touch/i.test(k)
        }, a.windowsTablet.api = ["not"], a.mobile = function() {
            return a.iphone() || a.ipod() || a.androidPhone() || a.blackberry() || a.windowsPhone()
        }, a.mobile.api = ["not"], a.tablet = function() {
            return a.ipad() || a.androidTablet() || a.windowsTablet()
        }, a.tablet.api = ["not"], a.online = function() {
            return navigator.onLine
        }, a.online.api = ["not"], a.offline = b(a.online), a.offline.api = ["not"], a.touchDevice = function() {
            return "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch
        }, a.touchDevice.api = ["not"]
    }
    return a.propertyCount = function(b, c) {
        if (!a.object(b) || !a.number(c)) return !1;
        if (Object.keys) return Object.keys(b).length === c;
        var d, e = [];
        for (d in b) j.call(b, d) && e.push(d);
        return e.length === c
    }, a.propertyCount.api = ["not"], a.propertyDefined = function(b, c) {
        return a.object(b) && a.string(c) && c in b
    }, a.propertyDefined.api = ["not"], a.windowObject = function(a) {
        return "object" == typeof a && "setInterval" in a
    }, a.domNode = function(b) {
        return a.object(b) && b.nodeType > 0
    }, a.inArray = function(b, c) {
        if (a.not.array(c)) return !1;
        for (var d = 0; d < c.length; d++)
            if (c[d] === b) return !0;
        return !1
    }, a.inArray.api = ["not"], a.sorted = function(b) {
        if (a.not.array(b)) return !1;
        for (var c = 0; c < b.length; c++)
            if (b[c] > b[c + 1]) return !1;
        return !0
    }, e(), a.setRegexp = function(a, b) {
        for (var c in regexps) j.call(regexps, c) && b === c && (regexps[c] = a)
    }, a.setNamespace = function() {
        return f.is = g, this
    }, a
}),
function(a, b) {
    "use strict";

    function c(b, c) {
        this.element = b, this.settings = a.extend({}, e, c), this._defaults = e, this._name = d, this._popUp = null, this.init()
    }
    var d = "khkButtons",
        e = {
            propertyName: "value"
        };
    c.prototype = {
        init: function() {
            this._buttonScrollTop(), this._sharing(), this._personsByName()
        },
        _buttonScrollTop: function() {
            a(".to-top").on({
                click: function(b) {
                    b.preventDefault(), a("body, html").animate({
                        scrollTop: 0
                    }, 200)
                }
            })
        },
        _sharing: function() {
            var c = this,
                d = a(".button.sharing").not(".ic");
            d.on("click", function(d) {
                d.preventDefault();
                var e = a(this).attr("href"),
                    f = a(this).attr("title"),
                    g = "600",
                    h = "460",
                    i = "width=" + g + ",height=" + h;
                c._popUp = b.open(e, f, i), c._popUp.focus()
            })
        },
        _personsByName: function() {
            if (a(".uk_a_z_liste_menu").length > 0) {
                a("div.uk_a_z_liste_menu a").click(function(b) {
                    b.preventDefault();
                    var c = a(this).attr("href"),
                        d = c.indexOf("uk_az_liste_sprung_"),
                        e = "div." + c.substring(d);
                    location.hash = a(this).text(), "div.uk_az_liste_sprung_Alle" === e ? a("div.uk_a_z_listen_alpha_p").show(600) : (a("div.uk_a_z_listen_alpha_p").not(e).hide(600), a(e).show(600)), a(".current").removeClass("current"), a(this).addClass("current")
                }).first().trigger("click");
                var b = location.hash;
                b.length > 0 && a('div.uk_a_z_liste_menu a:contains("' + b.replace("#", "") + '")').trigger("click")
            }
        }
    }, a.fn[d] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + d) || a.data(this, "plugin_" + d, new c(this, b))
        }), this
    }
}(jQuery, window, document),
function(a, b) {
    "use strict";

    function c(b, c) {
        this.element = b, this.settings = a.extend({}, e, c), this._defaults = e, this._name = d, this.init()
    }
    var d = "khkNavigation",
        e = {
            delay: 500
        };
    c.prototype = {
        init: function() {
            this._calculateSize(), a(".nav-primary ul").first().append('<li class="searchfield"></li>'), a(".searchfield").first().html(a("#tx_indexedsearch_suche").clone()), this._attachEvents(), a.fn[d].setSubmenuPosition()
        },
        _attachEvents: function() {
            var c = this;
            a(".full .nav-item").each(function() {
                a(this).children(".level2").length > 0 && a(this).addClass("hasSub")
            });
            var d = "";
            a(".full .hasSub a").not(".level2 a").on({
                mouseenter: function(c) {
                    clearTimeout(b.menuTimeout), c.preventDefault(), a(".level2 .active").removeClass("active"), a(this).siblings(".level2").hasClass("open") === !1 ? (a(".full .level2.open").removeClass("open"), a(this).siblings(".level2").addClass("open"), a(this).toggleClass("active")) : (a(this).siblings(".active").removeClass("active"), a(this).toggleClass("active"))
                },
                mouseleave: function() {
                    a(this).removeClass("active"), b.menuTimeout = setTimeout(function() {
                        a(".open").removeClass("open"), a(".level2 .active").removeClass("active")
                    }, c.settings.delay)
                }
            }), a(".full .level2").on({
                mouseleave: function() {
                    a(this).hasClass("open") && (b.menuTimeout = setTimeout(function() {
                        a(".open").removeClass("open")
                    }, c.settings.delay)), a(this).parent().find("a").first().removeClass("text-" + d)
                },
                mouseenter: function() {
                    d = a(this).parent().find("a").attr("class"), clearTimeout(b.menuTimeout)
                }
            })
        },
        _calculateSize: function() {
            setTimeout(function() {
                a(".full .level2").not(".level2 .level2").each(function() {
                    var b = 0;
                    a(this).find("a").not(".level2 .level2 a").each(function() {
                        b += a(this).parent().outerHeight(!0)
                    }), a(this).css({
                        height: b
                    })
                })
            }, 500)
        }
    }, a.fn[d] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + d) || a.data(this, "plugin_" + d, new c(this, b))
        }), this
    }, a.fn[d].setSubmenuPosition = function() {
        return a(".full .hasSub").each(function() {
            if (a(this).children(".level2").not(".level2 .level2").css({
                    left: Math.round(a(this).find("a").position().left) - 12
                }), a(this).hasClass("ssssslast")) {
                var b = a(".hasSub.last"),
                    c = a(".hasSub.last a"),
                    d = c.width(),
                    e = b.width(),
                    f = (e - d) / 2,
                    g = 7;
                a(".hasSub.last .level2").not(".level2 .level2").css({
                    left: -a(".hasSub.last .level2").width() + g + d + f
                })
            }
        }), this
    }
}(jQuery, window, document),
function(a) {
    "use strict";

    function b(b, e) {
        this.element = b, this.settings = a.extend({}, d, e), this._defaults = d, this._name = c, this.init()
    }
    var c = "khkPagination",
        d = {
            debug: !1,
            items: ".event",
            pagination: "#BLAETTERPFEILE",
            nextLink: ".pagination:last a"
        };
    b.prototype = {
        init: function() {
            a("#eventlist_wrap").infinitescroll({
                navSelector: ".pagination_wrap",
                nextSelector: ".pagination:last a",
                itemSelector: "#eventlist_wrap",
                loading: {
                    finishedMsg: " ",
                    msgText: " …",
                    img: "data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw=="
                },
                debug: !1,
                dataType: "html",
                maxPage: 200,
                appendCallback: !0,
                contentSelector: "#eventlist_wrap",
                path: function() {
                    var b = a(".pagination:last a").attr("href");
                    return a(".pagination_wrap").remove(), b
                }
            }, function(b) {
                a(this).append(b)
            })
        }
    }, a.fn[c] = function(d) {
        return this.each(function() {
            a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
        }), this
    }
}(jQuery, window, document),
function(a, b, c) {
    "use strict";

    function d(b, c) {
        this.element = b, this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.init()
    }
    var e = "khkProjektor",
        f = {
            propertyName: "value"
        };
    d.prototype = {
        init: function() {
            a("body").append('<div id="overlay"><div class="button close">&times;</div><div class="overlay-content"></div></div>'), this._attachEvent()
        },
        _attachEvent: function() {
            var b = this,
                c = a(".projects").find(".project");
            c.find("a").on("click", function(c) {
                c.preventDefault(), b._fetchProject(a(this).attr("href"))
            });
            var d = is.desktop() ? "click" : "touchstart";
            a(".button.close").on(d, function(a) {
                a.preventDefault(), b._closeOverlay()
            })
        },
        _showOverlay: function() {
            a("#overlay").addClass("animated fadeIn"), a("body").css("overflow", "hidden"), a(b).trigger("resize"), a(c).on("keydown", function(b) {
                switch (b.keyCode) {
                    case 27:
                        a("#overlay").find(".close").trigger("click");
                        break;
                    case 37:
                        a(".artworks").find(".prev").trigger("click");
                        break;
                    case 39:
                        a(".artworks").find(".next").trigger("click")
                }
            })
        },
        _closeOverlay: function() {
            a("#overlay").removeClass("animated fadeIn").find(".overlay-content").empty(), a("body").css("overflow", "auto")
        },
        _fetchProject: function(b) {
            var c = this;
            a(".overlay-content").load(b + " .frame-default", function() {
                c._showOverlay()
            }, function() {
                console.log("failed to load" + b)
            })
        }
    }, a.fn[e] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + e) || a.data(this, "plugin_" + e, new d(this, b))
        }), this
    }
}(jQuery, window, document),
function(a, b, c) {
    "use strict";

    function d(b, c) {
        this.element = b, this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.init(), this._timer = null
    }
    var e = "khkResize",
        f = {
            propertyName: "value"
        };
    d.prototype = {
        init: function() {
            var c = this;
            a(b).on("resize", function() {
                "number" == typeof c._timer && clearTimeout(c._timer), c._timer = setTimeout(function() {
                    c._doResizeAction()
                }, 200)
            }), c._doResizeAction()
        },
        _doResizeAction: function() {
            console.log("RSZ"), a(b).width() > 670 && !is.mobile() ? (a.fn.khkNavigation.setSubmenuPosition(), a(".mobile").removeClass("mobile"), a("html, body").addClass("desktop")) : (a("html,body").addClass("mobile"), a(".desktop").removeClass("desktop")), this._scaleIframes(), a(c.body).trigger("sticky_kit:recalc")
        },
        _scaleIframes: function() {
            a(".video").find("iframe").css({
                height: Math.round(.5625 * a(".video").width())
            })
        }
    }, a.fn[e] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + e) || a.data(this, "plugin_" + e, new d(this, b))
        }), this
    }
}(jQuery, window, document),
function(a, b, c) {
    "use strict";

    function d(b, c) {
        this.element = b, this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.init()
    }
    var e = "khkLightbox",
        f = {
            propertyName: "value"
        };
    d.prototype = {
        init: function() {
            this.element = a('[onclick^="openPic"]'), this.element.length > 0 && a("body").append('<div id="overlay"><div class="button close">&times;</div><div class="overlay-content"></div></div>'), this._overwriteEvents()
        },
        _overwriteEvents: function() {
            var b = this,
                c = a(b.element);
            c.each(function() {
                var b = a(this).attr("onclick").split("width="),
                    c = b[1].split(",height=");
                a(this).data("h", b[1].split(",height=")[1].split(",")[0]), a(this).data("w", c[0])
            }).removeAttr("onclick"), c.on("click", function(c) {
                c.preventDefault(), b._fetchContent(a(this).attr("href"), a(this).data("w"), a(this).data("h"))
            });
            var d = is.desktop() ? "click" : "touchstart";
            a(".button.close").on(d, function(a) {
                a.preventDefault(), b._closeOverlay()
            })
        },
        _showOverlay: function() {
            a("#overlay").addClass("animated fadeIn"), a("body").css("overflow", "hidden"), a(b).trigger("resize"), a(c).on("keydown", function(b) {
                switch (b.keyCode) {
                    case 27:
                        a("#overlay").find(".close").trigger("click");
                        break;
                    case 37:
                        a(".artworks").find(".prev").trigger("click");
                        break;
                    case 39:
                        a(".artworks").find(".next").trigger("click")
                }
            })
        },
        _closeOverlay: function() {
            a("#overlay").removeClass("animated fadeIn").find(".overlay-content").empty(), a("body").css("overflow", "auto")
        },
        _fetchContent: function(b, c, d) {
            var e = this;
            "7000" === location.port && (b = "https://www.kunsthochschulekassel.de/" + b), a(".overlay-content").append('<iframe src="' + b + '" height="' + d + '" width="' + d + '" scrolling="no" frameborder="0"></iframe>');
            a(".overlay-content iframe").css({
                width: c,
                height: d
            });
            e._showOverlay()
        }
    }, a.fn[e] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + e) || a.data(this, "plugin_" + e, new d(this, b))
        }), this
    }
}(jQuery, window, document),
function(a, b) {
    "use strict";

    function c(b, c) {
        this.element = b, this.settings = a.extend({}, e, c), this._defaults = e, this._name = d, this.init()
    }
    var d = "khkColors",
        e = {
            color: [],
            colors: {
                values: ["rgb(0,0,0)", "rgb(75,75,80)", "rgb(0,170,240)", "rgb(95,220,40)", "rbg(255,110,30)"],
                names: ["black", "grey", "blue", "green", "orange"]
            },
            angles: [-30, -60, -120, -150],
            strokes: [2, 4, 8, 6],
            logos: ["black", "blue", "green", "orange"],
            favicons: ["black", "blue", "green", "orange"]
        };
    c.prototype = {
        init: function() {
            var c = this;
			
            a(".strokes").find("img").remove(), b.setInterval(function() {
                c._randomFavicon()
            }, 3e4), this._randomFavicon(), this._randomHeaderColor()
        },
        _randomHeaderColor: function() {
            var b, c = this._rnd_int(0, this.settings.colors.names.length),
                d = this.settings.colors.names[c];
            switch (c) {
                case 0:
                case 1:
                    b = "white";
                    break;
                default:
                    b = this._rnd_int(0, 10) >= 5 ? "white" : "black"
            }
			
			
			$('button.filter').addClass(d);
            a("header:not(.frame-default header)").removeAttr("class").addClass(d).data("clr", b), a("a").not(".i18n").addClass(d), a("a.i18n").addClass(b).css("color", b).on({
                mouseenter: function() {
                    a(this).css("color", b)
                }
            }), this._setLogo(b)
        },
        _injectStrokes: function() {
            for (var b = "", c = 0; 8 > c; c++) b += '<div class="stroke"><div></div></div>';
            a(".strokes .row").append(b), this._randomPattern();
            Math.round(10 * Math.random());
            a(".strokes").css({
                opacity: 0
            })
        },
        _randomPattern: function() {
            var b = this,
                c = b._rnd_value(b.settings.colors),
                d = 360 + b._rnd_value(b.settings.angles),
                e = b._rnd_value(b.settings.strokes);
				
            a(".stroke").each(function() {
                a(this).css({
                    "border-color": c,
                    "border-width": e + "px",
                    transform: "translateX(" + -1 * (a(this).index() + 1) * 2 + "px)"
                })
            }), a(".stroke:last-child").css({
                transform: "translateX(0)"
            }), 300 > d ? a(".stroke").addClass("neg").find("div").css({
                "border-top": e + "px solid " + c,
                transform: "rotate(" + d + "deg) translateX(-300px)"
            }) : a(".stroke").addClass("xneg").find("div").css({
                "border-top": e + "px solid " + c,
                transform: "rotate(" + d + "deg)",
                "transform-origin": "top right"
            })
        },
        _randomFavicon: function() {
            var b = this,
                c = a("link").filter('[rel$="icon"]'),
                d = b._rnd_value(b.settings.favicons),
                e = Math.abs(b._rnd_value(b.settings.angles)),
                f = "https://www.kunsthochschulekassel.de/fileadmin/templates/images/";
            c.remove();
			
            var g = '<link type="image/png" rel="shortcut icon"/>';
            a("head").append(g), c = a("link").filter('[rel$="icon"]'), c.attr("href", f + "fav" + e + d + ".png").attr("type", "image/png")
        },
        _setLogo: function(b) {
            a(".logo img").attr("src", "https://www.kunsthochschulekassel.de/fileadmin/templates/images/khk-logo-" + b + ".svg")
        },
        _rnd_value: function(a) {
            return a[Math.floor(Math.random() * a.length)]
        },
        _rnd_int: function(a, b) {
            return Math.floor(Math.random() * (b - a)) + a
        }
    }, a.fn[d] = function(b) {
			
        return this.each(function() {
            a.data(this, "plugin_" + d) || a.data(this, "plugin_" + d, new c(this, b))
        }), this
    }
}(jQuery, window, document),
function(a, b, c) {
    "use strict";

    function d(b, c) {
        this.element = b, this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this._evtType = is.mobile() ? "touchstart" : "click", this.init()
    }
    var e = "khkMobileNav",
        f = {
            propertyName: "value"
        };
    d.prototype = {
        init: function() {
            if (this._serveTheBurger(), a(".burger").show(), a("header .full, .i18n-and-search").addClass("m-hidden"), a(b).on({
                    orientationchange: function() {
                        a(".meat, .burger-content").css({
                            height: a(b).height() + 21,
                            width: a(b).width()
                        }), a(".row-5.event-list").length > 0 && a(".meat").css("height", a(".sidebar").height() + a(".meat").height())
                    },
                    resize: function() {
                        a(".meat").trigger("orientationchange")
                    }
                }), is.mobile()) {
                var d = "header",
                    e = a(d);
                if (a(".trigger .line").addClass(e.data("clr")), !e.length) return !0;
                var f = 0,
                    g = 0,
                    h = a(c),
                    i = 0,
                    j = a(b),
                    k = 0,
                    l = 0,
                    m = 0,
                    n = 0;
                j.on("scroll", function() {
                    f = e.outerHeight(), i = h.height(), k = j.height(), l = j.scrollTop(), n = m - l, g = parseInt(e.css("top")) + n, a(".home-slider").length > 0 && (l > 380 ? a(".home-slider").hide() : a(".home-slider").show()), 0 >= l ? e.css("top", 0) : n > 0 ? e.css("top", g > 0 ? 0 : g) : 0 > n && (l + k >= i - f ? e.css("top", (g = l + k - i) < 0 ? g : 0) : e.css("top", Math.abs(g) > f ? -f : g)), m = l
                })
            }
        },
        _serveTheBurger: function() {
            this._prettyPatties(), a(".burger-content").css({
                width: a(b).width()
            })
        },
        _prettyPatties: function() {
            var c = this,
                d = c._evtType;
            a("header").append('<div class="burger d-hidden"><div class="trigger"><span class="line"/><span class="line"/><span class="line"/></div> <div class="burger-content"><div class="meat"></div></div></div>');
            var e = a("nav:first");
            a(".burger").data("current", e.find(".current a")), a(".meat").append(e.find("ul:first").clone().addClass("salad")), a(".burger .node_26 .level2").remove(), a(".burger .nav-item").each(function() {
                a(this).find(".level2").length > 0 && a(this).addClass("hasSub")
            }), a(".burger .level2").removeAttr("style"), a(".salad").append('<li class="searchfield"></li>'), a(".salad .searchfield").html(a("#tx_indexedsearch_suche").clone()), a(".salad #tx_indexedsearch_suche").prepend("<span>" + a(".salad .sword").attr("placeholder") + "</span>"), a('<li class="i18nn"></li>').appendTo(".salad"), a(".i18nn").html(a(".i18n").clone().removeAttr("style")), a(".i18nn .i18n").removeAttr("style"), a(".trigger").on(d, function() {
                a(".burger, .trigger").toggleClass("open"), a(".burger-content").toggleClass("expand"), a("body").css(a(".burger").hasClass("open") === !0 ? {
                    overflow: "hidden",
                    position: "fixed"
                } : {
                    overflow: "auto",
                    position: "relative"
                })
            }), a('<div class="sub-trigger"></div>').insertBefore(a(".burger .hasSub .level2")), a(".sub-trigger").on(d, function() {
                a(this).siblings("div.level2").removeClass("closed").toggle(), a(this).toggleClass("chosen")
            }), a(".sub-trigger").trigger(d), a(".meat").css({
                height: a(b).height() - a("header").height()
            }), a(".row-5.event-list").length > 0 && a(".meat").css("height", a(".sidebar").height() + a(".meat").height()), this._fryTheBurger()
        },
        _fryTheBurger: function() {
            a("header h2").on({
                touchend: function() {
                    a(".trigger").trigger("touchstart")
                }
            }), a(".burger").show()
        }
    }, a.fn[e] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + e) || a.data(this, "plugin_" + e, new d(this, b))
        }), this
    }
}(jQuery, window, document),
function(a) {
    "use strict";

    function b(b, e) {
        this.element = b, this.settings = a.extend({}, d, e), this._defaults = d, this._name = c, this._dev = /localhost/i.test(location.hostname), this._assetsDir = this._dev ? "" : "fileadmin/templates/", this.init()
    }
    var c = "khkMobile",
        d = {
            propertyName: "value"
        };
    b.prototype = {
        init: function() {
            a('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, user-scalable=no"), this.burger(), this.grid(), this.footer(), this.home(), this.exceptions(), this.projects(), this.pageEvents(), this.pageNews(), this.pagePersons(), a(".sidebar").each(function() {
                a(this).children().length < 1 && a(this).remove()
            }), a(".browsebox, #BLAETTERPFEILE").find("a").each(function() {
                a(this).text(a(this).text().replace("Seite", ""))
            })
        },
        grid: function() {
            a('[class*="col-"]').each(function() {
                a(this).hasClass("col-1") ? a(this).addClass("m-col-1") : a(this).hasClass("col-2") ? a(this).addClass("m-col-2") : a(this).hasClass("col-3") ? a(this).addClass("m-col-3") : a(this).hasClass("col-4") ? a(this).addClass("m-col-4") : a(this).hasClass("col-5") ? a(this).addClass("m-col-4") : a(this).hasClass("col-6") ? a(this).addClass("m-col-4") : a(this).hasClass("col-7") ? a(this).addClass("m-col-4") : a(this).hasClass("col-8") && a(this).addClass("m-col-4")
            })
        },
        exceptions: function() {
            a("#c26 .event").find(".col-2:first").removeClass("m-col-2").addClass("m-col-4"), this._switchClasses(".home .sidebar.m-col-2", "m-col-2", "m-col-4"), this._switchClasses(".person-snippet .m-col-1", "m-col-1", "m-col-4"), this._switchClasses(".person-snippet .m-col-2", "m-col-2", "m-col-4"), this._switchClasses(".person-snippet .m-col-3", "m-col-3", "m-col-4"), a(".row.persons").not(":first").remove(), a(".nav-secondary").parent().addClass("m-hidden"), this._switchClasses(".news-teaser .col-2.m-col-2", "m-col-2", "m-col-4"), this._switchClasses(".news-teaser .col-3.m-col-3", "m-col-3", "m-col-4")
        },
        home: function() {
            this._hideOnMobile(".event-list .social-buttons"), this._switchClasses(".news-list", "m-col-3", "m-col-4"), this._hideOnMobile(".news.detail .sidebar, .nav-secondary"), a(".home-slider .slide").length > 0 ? (a(".home-slider").insertAfter("header"), a(".event-list").parent().addClass("transform"), a(".slide").each(function() {
                a(this).css({
                    "background-image": 'url("' + a(this).find("img").attr("src") + '")'
                }), a(this).find("img").remove()
            }), a(".home-slider .slides").cycle({
                slides: ".slide",
                next: ".ctrl.next",
                prev: ".ctrl.prev",
                pauseOnHover: !0,
                speed: 1e3,
                timeout: 5e3,
                log: !1,
                easing: "easeOutExpo"
            })) : a(".home_slider").remove()
        },
        pageEvents: function() {
            if (a(".home_slides").remove(), a(".row-5.event-list").length > 0) {
                var b = a(".sidebar").height(),
                    c = a(".meat");
                a(".sidebar").appendTo(".meat");
                var d = c.height() + b;
                c.css("height", d)
            }
            a("body").khkPagination()
        },
        pageNews: function() {
            a(".news .news-teaser").length > 0 && a(".filter").parent().hide()
        },
        pagePersons: function() {
            if (a("#personen").length > 0) {
                a(".filter").parent().hide(), a("div.uk_a_z_liste_menu a").on("touchstart", function(b) {
                    b.preventDefault();
                    var c = a(this).attr("href"),
                        d = c.indexOf("uk_az_liste_sprung_"),
                        e = "div." + c.substring(d);
                    location.hash = a(this).text(), "div.uk_az_liste_sprung_Alle" === e ? a("div.uk_a_z_listen_alpha_p").show(600) : (a("div.uk_a_z_listen_alpha_p").not(e).hide(600), a(e).show(600)), a(".current").removeClass("current"), a(this).addClass("current")
                });
                var b = location.hash;
                a("div.uk_a_z_listen_alpha_p").hide(10, function() {}), b.length > 0 && a('div.uk_a_z_liste_menu a:contains("' + b.replace("#", "") + '")').trigger("touchstart")
            }
        },
        footer: function() {
            this._switchClasses("footer .contact .col-1.m-col-1", "m-col-1", "m-col-4"), a(".to-top").on({
                touchstart: function(b) {
                    b.preventDefault(), a("body, html").animate({
                        scrollTop: 0
                    }, 200)
                }
            })
        },
        burger: function() {
            a("header").khkMobileNav()
        },
        projects: function() {
            a(".project").length < 13 ? (a(".ctrl").remove(), a(".projects").khkProjektor()) : a(".projects").cycle({
                slides: ".project",
                next: ".ctrl.next",
                prev: ".ctrl.prev",
                paused: !0,
                log: !1,
                speed: 200,
                easing: "easeOutSine",
                fx: "carousel",
                "carousel-visible": 3,
                "carousel-fluid": !0,
                "allow-wrap": !0,
                swipe: !0
            }).khkProjektor()
        },
        _switchClasses: function(b, c, d) {
            a(b).toggleClass(c + " " + d)
        },
        _hideOnMobile: function(b) {
            a(b).addClass("m-hidden")
        },
        _hideOnDesktop: function(b) {
            a(b).addClass("d-hidden")
        }
    }, a.fn[c] = function(d) {
        return this.each(function() {
            a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
        }), this
    }
}(jQuery, window, document);
var _iphone = navigator.userAgent.indexOf("iPhone") >= 0,
    _pad = navigator.userAgent.indexOf("iPad") >= 0,
    _android = navigator.userAgent.indexOf("/Android/i") >= 0 || null !== navigator.userAgent.match(/Android/i),
    _mobile = _iphone || _android;
_mobile = !1, Number.prototype.map = function(a, b, c, d) {
    return (this - a) * (d - c) / (b - a) + c
}, $(window).on("hashchange", function() {
    location.hash.search("dev") > 0 && ($('link[href*="main.css"]').remove(), $("head").append('<link rel="stylesheet" href="/fileadmin/templates/styles/typo.css" type="text/css">'))
}).trigger("hashchange"), $(".no-js").toggleClass("no-js js"), $(function() {
    is.mobile() && $("html,body").addClass("mobile"), (is.iphone() || is.ipod()) && $("html,body").addClass("iphone mobile"), (is.androidPhone() || is.androidTablet()) && $("html,body").addClass("android"), is.ipad() && $("html,body").addClass("pad"), (is.mobile || is.tablet()) && $('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, user-scalable=no"), is.desktop() && $("html,body").addClass("desktop"), $("header").khkColors(), is.not.mobile() ? ($("footer .col-6 ul").not("li ul").addClass("col-1"), $("footer a").each(function() {
        $(this).text($(this).text().replace(" / ", "/ ").replace(" + ", "+ "))
    }), $("header").khkNavigation().khkButtons(), $(".slider, .home_slides").remove(), $(".home-slider .slide").length > 0 ? ($(".event-list").parent().addClass("transform"), $(".slide").each(function() {
        $(this).css({
            "background-image": 'url("' + $(this).find("img").attr("src") + '")'
        }), $(this).find("img").remove(), $(this).find(".caption").appendTo($(this).find(".text"))
    }), $(".home-slider .slides").cycle({
        slides: ".slide",
        next: ".ctrl.next",
        prev: ".ctrl.prev",
        pauseOnHover: !0,
        speed: 1e3,
        timeout: 5e3,
        log: !1,
        easing: "easeOutExpo"
    })) : $(".home_slider").remove(), $(".projects").length >= 1 && $(".project").length < 13 ? ($(".ctrl").remove(), $(".projects").khkProjektor()) : $(".projects").cycle({
        slides: ".project",
        next: ".ctrl.next",
        prev: ".ctrl.prev",
        paused: !0,
        log: !1,
        speed: 200,
        easing: "easeOutSine",
        fx: "carousel",
        "carousel-visible": 3,
        "carousel-fluid": !0,
        "allow-wrap": !1
    }).khkProjektor(), $(".event-list").khkPagination(), $(".nav-primary").parent().stick_in_parent({
        parent: "body",
        spacer: !1
    }), $(".tx-indexedsearch-browsebox").first().remove(), $(".browsebox, #BLAETTERPFEILEILE").find("a").each(function() {
        $(this).text($(this).text().replace("Seite", ""))
    }), $("#c410, #c411, #c412, #c413, #c414, #c395").length > 0 && $("#c410, #c411, #c412, #c413, #c414, #c395").parent(".col-4").removeClass("col-4").addClass("col-6"), $(".news.detail .small").removeClass("small").addClass("more"), $(window).khkResize().khkLightbox().trigger("resize"), $(".content img").each(function() {
        var a = $(this).width() / $(this).height();
		if(1 > a){ $(this).parent().parent().css("max-width","50%");}
        $(this).data("aspect-ratio", a), $(this).css(a > 1 ? {
            width: "100%",
            height: "auto"
        } : 1 > a ? {
            "max-width": "100%",
            position: "relative",
            left: "0%",
            transform: "translateX(0%)"
        } : {
            maxWidth: "100%",
            height: "auto"
        })
    })) : $("body").khkMobile().khkResize(), $(window).trigger("resize")
});

$( ".sort-t" ).click(function() {
	  var type=$(this).attr( "data-sort");
	  var cat=$('.sort-c.selected').attr( "data-sort");
	   if(cat===undefined)cat='helper';
	  console.log(cat);
	$( "#eventlist_wrap div.event" ).slideUp('slow');
	$( ".list-persons div.person" ).slideUp('slow');
	
	   $( "#eventlist_wrap div."+cat+'.'+type ).slideDown('slow');
	   $( ".list-persons  div."+cat+'.'+type ).slideDown('slow');
	  $( ".sort-t.selected" ).removeClass("selected");
	   $( ".unsort-t.selected" ).removeClass("selected");
 	 $(this).addClass("selected");
	});
	
$( ".unsort-t" ).click(function() {	
	$(this).addClass("selected");
  var cat=$('.sort-c.selected').attr( "data-sort");
  if(cat===undefined)cat='helper';
	
	
	  $( "#eventlist_wrap div.event" ).slideUp('slow');
	  $( "#eventlist_wrap div."+cat ).slideDown('slow');
 	 $( ".list-persons  div.person" ).slideUp('slow');
 	    $( ".list-persons  div."+cat ).slideDown('slow');
	 $( ".sort-t.selected" ).removeClass("selected");
	  $( ".sort-t" ).removeClass("selected");
});



$( ".sort-c" ).click(function() {
	  var cat=$(this).attr( "data-sort");
	  var type=$('.sort-t.selected').attr( "data-sort");
	  if(type===undefined)type='helper';
	  console.log(cat.type);
	$( "#eventlist_wrap div.event" ).slideUp('slow');
	$( ".list-persons  div.person" ).slideUp('slow');
	
	   $( "#eventlist_wrap div."+cat+'.'+type ).slideDown('slow');
	     $( ".list-persons  div."+cat+'.'+type ).slideDown('slow');
	  $( ".sort-c.selected" ).removeClass("selected");
	   $( ".unsort-c.selected" ).removeClass("selected");
 	 $(this).addClass("selected");
	});
	
$( ".unsort-c" ).click(function() {	
	$(this).addClass("selected");
  var type=$('.sort-t.selected').attr( "data-sort");
   if(type===undefined)type='helper';
  $( "#eventlist_wrap div.event" ).slideUp('slow');
  $( "#eventlist_wrap div."+type ).slideDown('slow');
	 $( ".list-persons  div.person" ).slideUp('slow');
	    $( ".list-persons  div."+type ).slideDown('slow');
	 $( ".sort-c.selected" ).removeClass("selected");
	  $( ".sort-c" ).removeClass("selected");
});

