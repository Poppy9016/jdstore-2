// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/alert
//= require bootstrap/dropdown
//= require bootstrap/modal
//= require_tree .


$(document).on('click', '.number-spinner button', function () {
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;

	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});


!
function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, t),
        s.loaded = !0,
        s.exports
    }
    var i = {};
    return t.m = e,
    t.c = i,
    t.p = "",
    t(0)
} ([function(e, t, i) {
    e.exports = i(1)
},
function(e, t, i) {
    i(2),
    i(3),
    i(4),
    i(5),
    $(document).ready(function() {
        function e() {
            r.css("margin-top", "-" + c + "px"),
            s = !1,
            l.addClass("nav-bar-fixed"),
            n = $(".mi1scroll-pagination").fadeIn("500"),
            w(1 === $(".section-active").length ? $(".section-active") : $(".section-finish"))
        }
        function t(e, t) {
            if (!s && -1 === e && "up" === t) return l.removeClass("nav-bar-fixed"),
            n.fadeOut("500"),
            r.animate({
                "margin-top": 0
            },
            500),
            s = !0,
            !1;
            if (s && 1 === e && "down" === t) return r.animate({
                "margin-top": "-" + c + "px"
            },
            500,
            function() {
                n.fadeIn("500"),
                l.addClass("nav-bar-fixed")
            }),
            s = !1,
            !1;
            if (!o && e === d.length && "down" === t) {
                n.fadeOut("500");
                var i = parseInt(c) + parseInt($(".site-footer").outerHeight() + parseInt($(".section-next").outerHeight()) + parseInt($(".site-info").outerHeight())) + l.height() - 50;
                return r.animate({
                    "margin-top": "-" + i + "px"
                },
                500),
                o = !0,
                !1
            }
            return o && e === d.length - 2 && "up" === t ? (r.animate({
                "margin-top": "-" + c + "px"
            },
            500,
            function() {
                l.addClass("nav-bar-fixed"),
                n.fadeIn("500")
            }), o = !1, !1) : ("number" == typeof t && (e += t), !0)
        }
        function i(e, t) {
            var i = d.eq(e).find(".video");
            1 === i.length && h && (i.data("preload", !0), i[0].play()),
            3 !== e && m.removeClass("acvite");
            var n = e;
            "down" === t && (n += 1),
            "up" === t && (n -= 1),
            "number" == typeof t && (n += 1, x(n), n -= 1),
            x(n)
        }
        var n, s = !1,
        o = !1,
        a = $(".J_miOneScroller"),
        r = $("body").children().eq(0),
        l = $(".J_fixNarBar"),
        d = a.find(".section"),
        c = 0,
        u = !1,
        h = function() {
            return !! document.createElement("video").canPlayType
        } (),
        g = function(e) {
            var t = document.createElement("b");
            return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->",
            1 === t.getElementsByTagName("i").length
        },
        p = d.length,
        v = $(window).height(),
        f = $(window).width();
        c = a.offset().top;
        var m = $(".section-features"),
        w = function(e) {
            var t = parseInt(e.attr("data-num"));
            t === p ? e.addClass("section-active preload").prev().addClass("preload") : 1 === t ? e.addClass("section-active preload").next().addClass("preload") : (e.addClass("section-active preload").prev().addClass("preload"), e.next().addClass("preload"));
            var i = d.eq(t - 1).find(".video");
            1 === i.length && h && (i.data("preload", !0), i[0].play())
        },
        x = function(e) {
            var t = d.eq(e);
            t.addClass("preload");
            var i = t.find(".video");
            i && h && i.data("preload", !0)
        },
        S = !0,
        b = function(e) {
            $("#J_video").modal("show").one("hidden",
            function() {
                $(this).find(".modal-bd").empty()
            }).find(".modal-bd").miPlayer({
                showTitle: !1,
                autoPlay: !0,
                width: $(window).width(),
                height: $(window).height(),
                title: "",
                poster: "",
                videos: e
            })
        };
        $(".J_play").on("click",
        function() {
            var e = [];
            e.push($(this).data("path")),
            S ? $.getScript("http://c1.mifile.cn/f/i/miplayer/miPlayer.min.js",
            function() {
                b(e),
                S = !1
            }) : b(e)
        });
        var C = function() {
            $("#J_summary").hasClass("noscroll") ? m.hasClass("cur") ? m.removeClass("cur").css("height", "800px").find(".section-features-2").slideUp() : m.addClass("cur").css("height", "1600px").find(".section-features-2").slideDown() : m.hasClass("acvite") ? m.removeClass("acvite") : m.addClass("acvite")
        };
        $(".J_add").on("click",
        function() {
            C()
        }),
        $("#J_sliderCommit").slider({
            controls: !1,
            pager: !0,
            mode: "fade",
            pause: 1e3,
            auto: !1
        });
        var y = function() {
            d.height("800px"),
            v = "800px",
            $("#J_summary").addClass("summary-small noscroll"),
            w(d.eq(0)),
            d.visibleWatcher({
                onVisible: function(e, t) {
                    d.filter(function(e) {
                        return t + 1 >= e
                    }).addClass("preload");
                    var i = e.find(".video");
                    1 === i.length && h && (i.data("preload", !0), i[0].play())
                }
            }),
            $(window).scroll(function() {
                $("html").scrollTop() > a.offset().top || $("body").scrollTop() > a.offset().top ? window.ActiveXObject && !window.XMLHttpRequest ? l.removeClass("nav-bar-fixed") : l.addClass("nav-bar-fixed") : l.removeClass("nav-bar-fixed")
            })
        },
        T = function() {
            a.miOneScroll({
                sectionSelector: ".section",
                easing: "ease",
                duration: 1e3,
                quietPeriod: 400,
                direction: "fade",
                loop: !1,
                pagination: !0,
                keyboard: !0,
                updateURL: !0,
                onLoad: e,
                beforeMove: t,
                afterMove: i
            })
        };
        670 >= v || g(6) || g(7) || g(8) ? y() : (T(), (900 >= v || 1440 >= f) && ($("#J_summary").addClass("summary-small"), $(".ui-viewport").css("height", "400px")));
        var E = "",
        M = {
            slideWidth: f,
            auto: !0,
            speed: 1e3,
            infiniteLoop: !0,
            hideControlOnEnd: !0,
            startSlide: 0
        };
        setTimeout(function() {
            $("#J-slider").css("height", v).find(".slider").css("height", v),
            $(".section-index .ui-viewport").css("height", v),
            E = $("#J-slider").slider(M),
            window.isSlider = !0
        },
        4e3);
        var k = function() {
            u = !1;
            var e = $(window).height(),
            t = $(window).width();
            v >= 670 && 670 > e && location.reload(),
            670 > v && e >= 670 && location.reload(),
            900 >= e || 1440 >= t ? ($("#J_summary").addClass("summary-small"), $(".ui-viewport").css("height", "400px")) : ($("#J_summary").removeClass("summary-small"), $(".ui-viewport").css("height", "500px")),
            v = e,
            f = t,
            $("#J_video .modal-bd").css({
                width: f,
                height: v
            }),
            $("#J_sliderCommit").find(".slider").css("width", "100%"),
            $("#J-slider").css("height", v).find(".slider").attr("style", "height: " + v + "px; float: left; list-style: none; position: relative; width: " + t + "px;"),
            $(".section-index .ui-viewport").css("height", v),
            M.slideWidth = f,
            window.isSlider && setTimeout(function() {
                E.destroySlider(),
                E = $("#J-slider").slider(M)
            },
            500)
        };
        $(window).on("resize", k)
    })
},
function(e, t) { !
    function(e, t, i) {
        var n = {
            sectionSelector: ".section",
            easing: "ease",
            duration: 1e3,
            quietPeriod: 800,
            mode: "vertical",
            loop: !1,
            pagination: !0,
            keyboard: !0,
            updateURL: !1,
            onLoad: null,
            beforeMove: null,
            afterMove: null
        },
        s = function() {
            var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
            if ("" === e.transition) return ! 0;
            for (; t.length;) return t.pop() + "Transition" in e
        } ();
        e.fn.swipeEvents = function() {
            return this.each(function() {
                function t(e) {
                    var t = e.originalEvent.touches;
                    t && t.length && (n = t[0].pageX, s = t[0].pageY, o.on("touchmove", i))
                }
                function i(e) {
                    var t = e.originalEvent.touches;
                    if (t && t.length) {
                        var a = n - t[0].pageX,
                        r = s - t[0].pageY;
                        a >= 50 && o.trigger("swipeLeft"),
                        -50 >= a && o.trigger("swipeRight"),
                        r >= 50 && o.trigger("swipeUp"),
                        -50 >= r && o.trigger("swipeDown"),
                        (Math.abs(a) >= 50 || Math.abs(r) >= 50) && o.unbind("touchmove", i)
                    }
                }
                var n, s, o = e(this);
                o.on("touchstart", t)
            })
        },
        e.fn.miOneScroll = function(i) {
            function o(e, i) {
                var n = 0,
                s = "";
                if ("get" === e) {
                    if ("" !== t.location.hash) {
                        s = t.location.hash.split("#")[1];
                        for (var o = 0,
                        a = b.length; a > o; o += 1) if (s === b[o]) {
                            n = o;
                            break
                        }
                    }
                } else {
                    var r = "undefined" != typeof p.eq(i).data("anchor") ? p.eq(i).data("anchor") : "section" + (i + 1);
                    history.replaceState ? history.pushState({},
                    document.title, "#" + r) : location.hash = r
                }
                return n
            }
            function a(t, i) {
                var n = "horizontal" === g.mode ? w: x,
                a = -t * n + "px";
                p.removeClass("section-active section-finish").eq(t).addClass("section-active"),
                "fade" === g.mode ? p.eq(t).fadeIn(g.duration).siblings().fadeOut(g.duration / 2) : s ? h.css({
                    transform: "horizontal" === g.mode ? "translate3d(" + a + ", 0, 0)": "translate3d(0, " + a + ", 0)"
                }) : "horizontal" === g.mode ? h.animate({
                    left: a
                },
                g.duration,
                function() {
                    p.eq(t).addClass("section-finish section-done"),
                    "function" == typeof g.afterMove && g.afterMove(t, i)
                }) : h.animate({
                    top: a
                },
                g.duration,
                function() {
                    p.eq(t).addClass("section-finish section-done"),
                    "function" == typeof g.afterMove && g.afterMove(t, i)
                }),
                g.pagination && 0 !== i && e(".mi1scroll-pagination").children("li").removeClass("active").eq(t).addClass("active"),
                g.updateURL && 0 !== i && o("set", t),
                h.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function() {
                    p.eq(t).addClass("section-finish section-done"),
                    "function" == typeof g.afterMove && g.afterMove(t, i)
                })
            }
            function r(e) {
                var t = (new Date).getTime();
                t - f < g.quietPeriod + g.duration || (0 > e ? u.moveDown() : u.moveUp(), f = t)
            }
            function l() {
                w = e(t).width(),
                x = e(t).height(),
                d.css({
                    width: w,
                    height: x
                }),
                p.css({
                    width: w,
                    height: x
                }),
                "horizontal" === g.mode && h.css("width", w * p.length),
                0 !== v && u.moveTo(v)
            }
            var d, c, u = this,
            h = e(this),
            g = e.extend({},
            n, i),
            p = e(g.sectionSelector),
            v = 0,
            f = 0,
            m = null,
            w = e(t).width(),
            x = e(t).height(),
            S = "",
            b = [];
            return u.moveDown = function() {
                if (v < p.length - 1) {
                    if ("function" == typeof g.beforeMove && g.beforeMove(v + 1, "down") === !1) return ! 1;
                    v += 1,
                    a(v, "down")
                } else if (g.loop) {
                    if ("function" == typeof g.beforeMove && g.beforeMove(0, "down") === !1) return ! 1;
                    v = 0,
                    a(v, "down")
                } else if ("function" == typeof g.beforeMove && g.beforeMove(v + 1, "down") === !1) return ! 1;
                return v
            },
            u.moveUp = function() {
                if (v > 0) {
                    if ("function" == typeof g.beforeMove && g.beforeMove(v - 1, "up") === !1) return ! 1;
                    v -= 1,
                    a(v, "up")
                } else if (g.loop) {
                    if ("function" == typeof g.beforeMove && g.beforeMove(p.length - 1, "up") === !1) return ! 1;
                    v = p.length - 1,
                    a(v, "up")
                } else if ("function" == typeof g.beforeMove && g.beforeMove(v - 1, "up") === !1) return ! 1;
                return v
            },
            u.moveTo = function(e) {
                var t = v;
                return "function" == typeof g.beforeMove && g.beforeMove(v, e - v) === !1 ? !1 : (v = e > p.length - 1 || 0 > e ? 0 : e, a(v, e - t), v)
            },
            e("html, body").addClass("mi1scroll-container").css({
                margin: 0,
                height: "100%",
                overflow: "hidden"
            }),
            h.addClass("mi1scroll").wrap(e('<div class="mi1scroll-wrapper" />')),
            d = e(".mi1scroll-wrapper"),
            d.css({
                width: w,
                height: x
            }),
            p.css({
                width: w,
                height: x
            }),
            "fade" === g.mode ? (d.css({
                position: "relative"
            }), h.addClass("mi1scroll"), p.css({
                position: "absolute",
                left: "0",
                top: "0"
            }).hide()) : (s ? h.addClass("mi1scroll").css({
                transition: "all " + g.duration + "ms " + g.easing
            }) : (d.css({
                position: "relative"
            }), h.addClass("mi1scroll").css({
                position: "absolute",
                left: "0",
                top: "0"
            })), "horizontal" === g.mode && (h.css("width", w * p.length), p.css("float", "left"))),
            p.each(function(t) {
                var i = t + 1,
                n = "undefined" != typeof e(this).data("anchor") ? e(this).data("anchor") : "section" + i;
                e(this).attr({
                    "data-index": i
                }),
                b.push(n),
                S += "undefined" != typeof e(this).attr("data-title") ? '<li><a href="#' + n + '" data-index="' + i + '" data-title="' + e(this).attr("data-title") + '"><span class="dot">' + i + '</span><span class="title">' + e(this).attr("data-title") + "</span></a></li>": '<li><a href="#' + n + '" data-index="' + i + '"><span class="dot">' + i + "</span></a></li>"
            }),
            g.pagination && p.length > 1 && (e('<ol class="mi1scroll-pagination"></ol>').html(S).appendTo(d), e(".mi1scroll-pagination").find("a").on("click",
            function(t) {
                t.preventDefault(),
                u.moveTo(e(this).data("index") - 1)
            })),
            c = o("get"),
            g.updateURL && c > 0 && c < p.length ? (u.moveTo(c), p.eq(c).fadeIn(g.duration)) : (p.eq(0).removeClass("hide").show().addClass("section-finish section-done"), g.pagination && p.length > 1 && e(".mi1scroll-pagination li").first().addClass("active")),
            e(document).on("mousewheel DOMMouseScroll MozMousePixelScroll",
            function(e) {
                var t = e.originalEvent.wheelDelta || -e.originalEvent.detail || -e.originalEvent.deltaY;
                e.preventDefault(),
                "undefined" != typeof t && 0 !== t && r(t)
            }),
            h.swipeEvents().on({
                swipeDown: function() {
                    u.moveUp()
                },
                swipeUp: function() {
                    u.moveDown()
                }
            }),
            e(t).on("resize",
            function() {
                m && t.clearTimeout(m),
                m = t.setTimeout(function() {
                    l()
                },
                300)
            }),
            g.keyboard === !0 && e(document).on("keydown",
            function(e) {
                var t = e.target.tagName.toLowerCase();
                switch (e.which) {
                case 38:
                    "input" !== t && "textarea" !== t && u.moveUp();
                    break;
                case 40:
                    "input" !== t && "textarea" !== t && u.moveDown();
                    break;
                case 32:
                    "input" !== t && "textarea" !== t && u.moveDown();
                    break;
                case 33:
                    "input" !== t && "textarea" !== t && u.moveUp();
                    break;
                case 34:
                    "input" !== t && "textarea" !== t && u.moveDown();
                    break;
                case 36:
                    u.moveTo(1);
                    break;
                case 35:
                    u.moveTo(p.length);
                    break;
                default:
                    return
                }
            }),
            "function" == typeof g.onLoad && g.onLoad(),
            this
        }
    } (jQuery, window)
},
function(e, t) { !
    function(e) {
        function t(t) {
            function i() {
                for (var t = -1,
                i = e(document).scrollTop(), n = 0, s = d.length; s > n && i + a.viewport.height() > d[n]; n += 1) t += 1;
                return t
            }
            function n() {
                var t = i();
                l !== t && (l = t, r.filter(function(t) {
                    return l >= t && !e(this).hasClass(a.visibleClass)
                }).addClass(a.visibleClass).trigger("visible.visibleWatcher"), a.onVisible(r.eq(l), l))
            }
            function s() {
                r.each(function() {
                    var t = e(this).attr("data-offset") ? Number(e(this).attr("data-offset")) : a.offset,
                    i = t % 1 === 0 ? t: t * a.viewport.height();
                    d.push(e(this).offset().top + i)
                }),
                n(),
                a.onLoad()
            }
            var o, a, r = e(this),
            l = -1,
            d = [];
            o = {
                viewport: e(window),
                visibleClass: "is-visible",
                offset: 300,
                onLoad: e.noop,
                onVisible: e.noop
            },
            a = e.extend({},
            o, t),
            s(),
            a.viewport.on({
                "scroll.visibleWatcher": n,
                "resize.visibleWatcher": s
            })
        }
        e.fn.visibleWatcher = function(e) {
            return t.call(this, e),
            this
        }
    } (jQuery)
},
function(e, t) { !
    function(e) {
        var t = {},
        n = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "ui-wrapper",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "下一张",
            prevText: "上一张",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "开始",
            stopText: "停止",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: e.noop,
            onSlideBefore: e.noop,
            onSlideAfter: e.noop,
            onSlideNext: e.noop,
            onSlidePrev: e.noop,
            onSliderResize: e.noop
        };
        e.fn.slider = function(s) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                e(this).slider(s)
            }),
            this;
            var o = {},
            a = this;
            t.el = this;
            var r = e(window).width(),
            l = e(window).height(),
            d = function() {
                o.settings = e.extend({},
                n, s),
                o.settings.slideWidth = parseInt(o.settings.slideWidth),
                o.children = a.children(o.settings.slideSelector),
                o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length),
                o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length),
                o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)),
                o.active = {
                    index: o.settings.startSlide
                },
                o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1,
                o.carousel && (o.settings.preloadImages = "all"),
                o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin,
                o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin,
                o.working = !1,
                o.controls = {},
                o.interval = null,
                o.animProp = "vertical" == o.settings.mode ? "top": "left",
                o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode &&
                function() {
                    var e = document.createElement("div"),
                    t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in t) if (void 0 !== e.style[t[i]]) return o.cssPrefix = t[i].replace("Perspective", "").toLowerCase(),
                    o.animProp = "-" + o.cssPrefix + "-transform",
                    !0;
                    return ! 1
                } (),
                "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides),
                a.data("origStyle", a.attr("style")),
                a.children(o.settings.slideSelector).each(function() {
                    e(this).data("origStyle", e(this).attr("style"))
                }),
                c()
            },
            c = function() {
                a.wrap('<div class="' + o.settings.wrapperClass + '"><div class="ui-viewport"></div></div>'),
                o.viewport = a.parent(),
                o.loader = e('<div class="ui-loading" />'),
                o.viewport.prepend(o.loader),
                a.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%": "auto",
                    position: "relative"
                }),
                o.usingCSS && o.settings.easing ? a.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing");
                f();
                o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }),
                o.viewport.parent().css({
                    maxWidth: p()
                }),
                o.settings.pager || o.viewport.parent().css({
                    margin: "0 auto 0px"
                }),
                o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left": "none",
                    listStyle: "none",
                    position: "relative"
                }),
                o.children.css("width", v()),
                "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin),
                "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin),
                "fade" == o.settings.mode && (o.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: o.settings.slideZIndex,
                    display: "block"
                })),
                o.controls.el = e('<div class="ui-controls" />'),
                o.settings.captions && E(),
                o.active.last = o.settings.startSlide == m() - 1,
                o.settings.video && a.fitVids();
                var t = o.children.eq(o.settings.startSlide);
                "all" == o.settings.preloadImages && (t = o.children),
                o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && C(), o.settings.controls && y(), o.settings.auto && o.settings.autoControls && T(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)),
                u(t, h)
            },
            u = function(t, i) {
                var n = t.find("img, iframe").length;
                if (0 == n) return void i();
                var s = 0;
                t.find("img, iframe").each(function() {
                    e(this).one("load",
                    function() {++s == n && i()
                    }).each(function() {
                        this.complete && e(this).load()
                    })
                })
            },
            h = function() {
                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                    var t = "vertical" == o.settings.mode ? o.settings.minSlides: o.settings.maxSlides,
                    i = o.children.slice(0, t).clone().addClass("ui-clone"),
                    n = o.children.slice( - t).clone().addClass("ui-clone");
                    a.append(i).prepend(n)
                }
                o.loader.remove(),
                x(),
                "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0),
                o.viewport.height(g()),
                a.redrawSlider(),
                o.settings.onSliderLoad(o.active.index),
                o.initialized = !0,
                o.settings.responsive && e(window).bind("resize", U),
                o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && W(),
                o.settings.ticker && J(),
                o.settings.pager && q(o.settings.startSlide),
                o.settings.controls && L(),
                o.settings.touchEnabled && !o.settings.ticker && _()
            },
            g = function() {
                var t = 0,
                n = e();
                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight) if (o.carousel) {
                    var s = 1 == o.settings.moveSlides ? o.active.index: o.active.index * w();
                    for (n = o.children.eq(s), i = 1; i <= o.settings.maxSlides - 1; i++) n = n.add(s + i >= o.children.length ? o.children.eq(i - 1) : o.children.eq(s + i))
                } else n = o.children.eq(o.active.index);
                else n = o.children;
                return "vertical" == o.settings.mode ? (n.each(function(i) {
                    t += e(this).outerHeight()
                }), o.settings.slideMargin > 0 && (t += o.settings.slideMargin * (o.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
                    return e(this).outerHeight(!1)
                }).get()),
                "border-box" == o.viewport.css("box-sizing") ? t += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" == o.viewport.css("box-sizing") && (t += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))),
                t
            },
            p = function() {
                var e = "100%";
                return o.settings.slideWidth > 0 && (e = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin: o.settings.slideWidth),
                e
            },
            v = function() {
                var e = o.settings.slideWidth,
                t = o.viewport.width();
                return 0 == o.settings.slideWidth || o.settings.slideWidth > t && !o.carousel || "vertical" == o.settings.mode ? e = t: o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (t > o.maxThreshold || t < o.minThreshold && (e = (t - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)),
                e
            },
            f = function() {
                var e = 1;
                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0) if (o.viewport.width() < o.minThreshold) e = o.settings.minSlides;
                else if (o.viewport.width() > o.maxThreshold) e = o.settings.maxSlides;
                else {
                    var t = o.children.first().width() + o.settings.slideMargin;
                    e = Math.floor((o.viewport.width() + o.settings.slideMargin) / t)
                } else "vertical" == o.settings.mode && (e = o.settings.minSlides);
                return e
            },
            m = function() {
                var e = 0;
                if (o.settings.moveSlides > 0) if (o.settings.infiniteLoop) e = Math.ceil(o.children.length / w());
                else for (var t = 0,
                i = 0; t < o.children.length;)++e,
                t = i + f(),
                i += o.settings.moveSlides <= f() ? o.settings.moveSlides: f();
                else e = Math.ceil(o.children.length / f());
                return e
            },
            w = function() {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides: f()
            },
            x = function() {
                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                    if ("horizontal" == o.settings.mode) {
                        var e = o.children.last(),
                        t = e.position();
                        S( - (t.left - (o.viewport.width() - e.outerWidth())), "reset", 0)
                    } else if ("vertical" == o.settings.mode) {
                        var i = o.children.length - o.settings.minSlides,
                        t = o.children.eq(i).position();
                        S( - t.top, "reset", 0)
                    }
                } else {
                    var t = o.children.eq(o.active.index * w()).position();
                    o.active.index == m() - 1 && (o.active.last = !0),
                    void 0 != t && ("horizontal" == o.settings.mode ? S( - t.left, "reset", 0) : "vertical" == o.settings.mode && S( - t.top, "reset", 0))
                }
            },
            S = function(e, t, i, n) {
                if (o.usingCSS) {
                    var s = "vertical" == o.settings.mode ? "translate3d(0, " + e + "px, 0)": "translate3d(" + e + "px, 0, 0)";
                    a.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"),
                    "slide" == t ? (a.css(o.animProp, s), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function() {
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                        I()
                    })) : "reset" == t ? a.css(o.animProp, s) : "ticker" == t && (a.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), a.css(o.animProp, s), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function() {
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                        S(n.resetValue, "reset", 0),
                        H()
                    }))
                } else {
                    var r = {};
                    r[o.animProp] = e,
                    "slide" == t ? a.animate(r, i, o.settings.easing,
                    function() {
                        I()
                    }) : "reset" == t ? a.css(o.animProp, e) : "ticker" == t && a.animate(r, speed, "linear",
                    function() {
                        S(n.resetValue, "reset", 0),
                        H()
                    })
                }
            },
            b = function() {
                for (var t = "",
                i = m(), n = 0; i > n; n++) {
                    var s = "";
                    o.settings.buildPager && e.isFunction(o.settings.buildPager) ? (s = o.settings.buildPager(n), o.pagerEl.addClass("ui-custom-pager")) : (s = n + 1, o.pagerEl.addClass("ui-default-pager")),
                    t += '<div class="ui-pager-item"><a href="" data-slide-index="' + n + '" class="ui-pager-link">' + s + "</a></div>"
                }
                o.pagerEl.html(t)
            },
            C = function() {
                o.settings.pagerCustom ? o.pagerEl = e(o.settings.pagerCustom) : (o.pagerEl = e('<div class="ui-pager" />'), o.settings.pagerSelector ? e(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("ui-has-pager").append(o.pagerEl), b()),
                o.pagerEl.on("click", "a", z)
            },
            y = function() {
                o.controls.next = e('<a class="ui-next" href="">' + o.settings.nextText + "</a>"),
                o.controls.prev = e('<a class="ui-prev" href="">' + o.settings.prevText + "</a>"),
                o.controls.next.bind("click", M),
                o.controls.prev.bind("click", $),
                o.settings.nextSelector && e(o.settings.nextSelector).append(o.controls.next),
                o.settings.prevSelector && e(o.settings.prevSelector).append(o.controls.prev),
                o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = e('<div class="ui-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("ui-has-controls-direction").append(o.controls.directionEl))
            },
            T = function() {
                o.controls.start = e('<div class="ui-controls-auto-item"><a class="ui-start" href="">' + o.settings.startText + "</a></div>"),
                o.controls.stop = e('<div class="ui-controls-auto-item"><a class="ui-stop" href="">' + o.settings.stopText + "</a></div>"),
                o.controls.autoEl = e('<div class="ui-controls-auto" />'),
                o.controls.autoEl.on("click", ".ui-start", k),
                o.controls.autoEl.on("click", ".ui-stop", P),
                o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop),
                o.settings.autoControlsSelector ? e(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("ui-has-controls-auto").append(o.controls.autoEl),
                D(o.settings.autoStart ? "stop": "start")
            },
            E = function() {
                o.children.each(function(t) {
                    var i = e(this).find("img:first").attr("title");
                    void 0 != i && ("" + i).length && e(this).append('<div class="ui-caption"><span>' + i + "</span></div>")
                })
            },
            M = function(e) {
                o.settings.auto && a.stopAuto(),
                a.goToNextSlide(),
                e.preventDefault()
            },
            $ = function(e) {
                o.settings.auto && a.stopAuto(),
                a.goToPrevSlide(),
                e.preventDefault()
            },
            k = function(e) {
                a.startAuto(),
                e.preventDefault()
            },
            P = function(e) {
                a.stopAuto(),
                e.preventDefault()
            },
            z = function(t) {
                o.settings.auto && a.stopAuto();
                var i = e(t.currentTarget);
                if (void 0 !== i.attr("data-slide-index")) {
                    var n = parseInt(i.attr("data-slide-index"));
                    n != o.active.index && a.goToSlide(n),
                    t.preventDefault()
                }
            },
            q = function(t) {
                var i = o.children.length;
                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + i)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function(i, n) {
                    e(n).find("a").eq(t).addClass("active")
                }))
            },
            I = function() {
                if (o.settings.infiniteLoop) {
                    var e = "";
                    0 == o.active.index ? e = o.children.eq(0).position() : o.active.index == m() - 1 && o.carousel ? e = o.children.eq((m() - 1) * w()).position() : o.active.index == o.children.length - 1 && (e = o.children.eq(o.children.length - 1).position()),
                    e && ("horizontal" == o.settings.mode ? S( - e.left, "reset", 0) : "vertical" == o.settings.mode && S( - e.top, "reset", 0))
                }
                o.working = !1,
                o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
            },
            D = function(e) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[e]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.ui-" + e + ")").addClass("active"))
            },
            L = function() {
                1 == m() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == m() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            },
            W = function() {
                if (o.settings.autoDelay > 0) {
                    setTimeout(a.startAuto, o.settings.autoDelay)
                } else a.startAuto();
                o.settings.autoHover && a.hover(function() {
                    o.interval && (a.stopAuto(!0), o.autoPaused = !0)
                },
                function() {
                    o.autoPaused && (a.startAuto(!0), o.autoPaused = null)
                })
            },
            J = function() {
                var t = 0;
                if ("next" == o.settings.autoDirection) a.append(o.children.clone().addClass("ui-clone"));
                else {
                    a.prepend(o.children.clone().addClass("ui-clone"));
                    var i = o.children.first().position();
                    t = "horizontal" == o.settings.mode ? -i.left: -i.top
                }
                S(t, "reset", 0),
                o.settings.pager = !1,
                o.settings.controls = !1,
                o.settings.autoControls = !1,
                o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                    a.stop()
                },
                function() {
                    var t = 0;
                    o.children.each(function(i) {
                        t += "horizontal" == o.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                    });
                    var i = o.settings.speed / t,
                    n = "horizontal" == o.settings.mode ? "left": "top",
                    s = i * (t - Math.abs(parseInt(a.css(n))));
                    H(s)
                }),
                H()
            },
            H = function(e) {
                speed = e ? e: o.settings.speed;
                var t = {
                    left: 0,
                    top: 0
                },
                i = {
                    left: 0,
                    top: 0
                };
                "next" == o.settings.autoDirection ? t = a.find(".ui-clone").first().position() : i = o.children.first().position();
                var n = "horizontal" == o.settings.mode ? -t.left: -t.top,
                s = "horizontal" == o.settings.mode ? -i.left: -i.top,
                r = {
                    resetValue: s
                };
                S(n, "ticker", speed, r)
            },
            _ = function() {
                o.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                o.viewport.bind("touchstart", O)
            },
            O = function(e) {
                if (o.working) e.preventDefault();
                else {
                    o.touch.originalPos = a.position();
                    var t = e.originalEvent;
                    o.touch.start.x = t.changedTouches[0].pageX,
                    o.touch.start.y = t.changedTouches[0].pageY,
                    o.viewport.bind("touchmove", A),
                    o.viewport.bind("touchend", N)
                }
            },
            A = function(e) {
                var t = e.originalEvent,
                i = Math.abs(t.changedTouches[0].pageX - o.touch.start.x),
                n = Math.abs(t.changedTouches[0].pageY - o.touch.start.y);
                if (3 * i > n && o.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * n > i && o.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                    var s = 0;
                    if ("horizontal" == o.settings.mode) {
                        var a = t.changedTouches[0].pageX - o.touch.start.x;
                        s = o.touch.originalPos.left + a
                    } else {
                        var a = t.changedTouches[0].pageY - o.touch.start.y;
                        s = o.touch.originalPos.top + a
                    }
                    S(s, "reset", 0)
                }
            },
            N = function(e) {
                o.viewport.unbind("touchmove", A);
                var t = e.originalEvent,
                i = 0;
                if (o.touch.end.x = t.changedTouches[0].pageX, o.touch.end.y = t.changedTouches[0].pageY, "fade" == o.settings.mode) {
                    var n = Math.abs(o.touch.start.x - o.touch.end.x);
                    n >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
                } else {
                    var n = 0;
                    "horizontal" == o.settings.mode ? (n = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (n = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top),
                    !o.settings.infiniteLoop && (0 == o.active.index && n > 0 || o.active.last && 0 > n) ? S(i, "reset", 200) : Math.abs(n) >= o.settings.swipeThreshold ? (0 > n ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : S(i, "reset", 200)
                }
                o.viewport.unbind("touchend", N)
            },
            U = function(t) {
                if (o.initialized) {
                    var i = e(window).width(),
                    n = e(window).height(); (r != i || l != n) && (r = i, l = n, a.redrawSlider(), o.settings.onSliderResize.call(a, o.active.index))
                }
            };
            return a.goToSlide = function(t, i) {
                if (!o.working && o.active.index != t) if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > t ? m() - 1 : t >= m() ? 0 : t, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= m() - 1, o.settings.pager && q(o.active.index), o.settings.controls && L(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != g() && o.viewport.animate({
                    height: g()
                },
                o.settings.adaptiveHeightSpeed),
                o.children.filter(":visible").fadeOut(o.settings.speed).css({
                    zIndex: 0
                }),
                o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed,
                function() {
                    e(this).css("zIndex", o.settings.slideZIndex),
                    I()
                });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != g() && o.viewport.animate({
                        height: g()
                    },
                    o.settings.adaptiveHeightSpeed);
                    var n = 0,
                    s = {
                        left: 0,
                        top: 0
                    };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last) if ("horizontal" == o.settings.mode) {
                        var r = o.children.eq(o.children.length - 1);
                        s = r.position(),
                        n = o.viewport.width() - r.outerWidth()
                    } else {
                        var l = o.children.length - o.settings.minSlides;
                        s = o.children.eq(l).position()
                    } else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - w() : (m() - 1) * w() - (o.children.length - o.settings.maxSlides),
                        r = a.children(".ui-clone").eq(d);
                        s = r.position()
                    } else if ("next" == i && 0 == o.active.index) s = a.find("> .ui-clone").eq(o.settings.maxSlides).position(),
                    o.active.last = !1;
                    else if (t >= 0) {
                        var c = t * w();
                        s = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof s) {
                        var u = "horizontal" == o.settings.mode ? -(s.left - n) : -s.top;
                        S(u, "slide", o.settings.speed)
                    }
                }
            },
            a.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var e = parseInt(o.active.index) + 1;
                    a.goToSlide(e, "next")
                }
            },
            a.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 != o.active.index) {
                    var e = parseInt(o.active.index) - 1;
                    a.goToSlide(e, "prev")
                }
            },
            a.startAuto = function(e) {
                o.interval || (o.interval = setInterval(function() {
                    "next" == o.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
                },
                o.settings.pause), o.settings.autoControls && 1 != e && D("stop"))
            },
            a.stopAuto = function(e) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != e && D("start"))
            },
            a.getCurrentSlide = function() {
                return o.active.index
            },
            a.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            },
            a.getSlideCount = function() {
                return o.children.length
            },
            a.redrawSlider = function() {
                o.children.add(a.find(".ui-clone")).width(v()),
                o.viewport.css("height", g()),
                o.settings.ticker || x(),
                o.active.last && (o.active.index = m() - 1),
                o.active.index >= m() && (o.active.last = !0),
                o.settings.pager && !o.settings.pagerCustom && (b(), q(o.active.index))
            },
            a.destroySlider = function() {
                o.initialized && (o.initialized = !1, e(".ui-clone", this).remove(), o.children.each(function() {
                    void 0 != e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
                }), void 0 != e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), e(".ui-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && e(window).unbind("resize", U))
            },
            a.reloadSlider = function(e) {
                void 0 != e && (s = e),
                a.destroySlider(),
                d()
            },
            d(),
            this
        }
    } (jQuery)
},
function(e, t) {
    window.tarList = [];
    var i = window.tarList,
    n = function() {
        var e = $(window).scrollTop();
        for (var t in i) if (i.hasOwnProperty(t)) {
            var n = i[t],
            s = n.top;
            e > s ? n.callback(n, e) : n.reverse && n.reverse(n, e)
        }
    };
    $(window).on("scroll",
    function() {
        n()
    });
    var s = function() {
        return !! document.createElement("video").canPlayType
    } ();
    window.supportsVideo = s,
    $(function() {
        var e = $("#J_modalVideo");
        $(".J_videoBtn").click(function() {
            e.find(".modal-hd .title").text($(this).attr("data-video-title")).end().find(".modal-bd").html('<iframe width="880" height="536" src="//hd.mi.com/f/zt/hd/misc/youku.html?vid=' + $(this).attr("data-video") + '" frameborder="0" allowfullscreen></iframe>'),
            e.modal({
                show: !0,
                backdrop: "static"
            }),
            e.on("hide",
            function() {
                e.find(".modal-hd .title").empty(),
                e.find(".modal-bd").empty()
            })
        });
        var t = function() {
            var e = $(".J_headNav").offset().top + $(".J_headNav").height(),
            t = e;
            i.push({
                top: t,
                callback: function() {
                    $(".J_fixNarBar").addClass("nav-bar-fixed")
                },
                reverse: function() {
                    $(".J_fixNarBar").removeClass("nav-bar-fixed")
                }
            })
        };
        t(),
        $(".J_next").on({
            mouseenter: function() {
                if ($(this).addClass("hover"), s) {
                    var e = $(this).find("source").attr("data-src"),
                    t = $(this).find("source").attr("src");
                    void 0 === t ? ($(this).find("source").attr("src", e), $(this).find("video").load()[0].play()) : $(this).find("video")[0].play()
                }
            },
            mouseleave: function() {
                $(this).removeClass("hover")
            }
        })
    })
}]);
