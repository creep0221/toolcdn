! function() {
    var a = "1914310b-b702-46f4-ab84-eb012f584e36",
        t = document.location.href,
        e = document.location.host,
        o = e.split(".");

    function n(t, e, o) {
        e = new RegExp("^https?://" + e, "i");
        return 0 !== t.length && !(o || !t.match(e))
    }(4 == o.length || 3 == o.length && 3 < o[1].length) && (o.shift(), e = o.join(".")), D().match(/luid=/) || (document.cookie = "script_flag=" + a + "; max-age=30000000; path=/; domain=" + e + "; Secure", document.cookie = "url_flag=" + t + "; max-age=30000000; path=/; domain=" + e + "; Secure");
    var I, o = document.referrer,
        t = window.location.hostname,
        e = JSON.parse("true"),
        i = JSON.parse("true"),
        d = JSON.parse("false"),
        J = JSON.parse("false"),
        e = n(o, t, e),
        T = n(o, t, i),
        P = n(o, t, d),
        q = n(o, t, J),
        d = 0 < (i = navigator.userAgent).indexOf("iPhone") || 0 < i.indexOf("iPod") || 0 < i.indexOf("Android") && 0 < i.indexOf("Mobile") ? "sp" : 0 < i.indexOf("iPad") || 0 < i.indexOf("Android") ? "tab" : "other",
        o = String("default");

    function D() {
        return location.search
    }
    "default" === o && "other" == d && c(), "only_pc" !== o || "sp" != d && "tab" != d || c(), D().match(/luid=/) && (q = P = T = e = !0, c());
    let r = !1;
    const V = function() {
        var o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
        for (let t = 0, e = o.length; t < e; t++) switch (o[t]) {
            case "x":
                o[t] = Math.floor(16 * Math.random()).toString(16);
                break;
            case "y":
                o[t] = (Math.floor(4 * Math.random()) + 8).toString(16)
        }
        return o.join("")
    }();
    for (I of document.cookie.split(";")) {
        var l = I.split("=");
        if (l && l[0] && "pgmodal2" === l[0].trim()) {
            r = "true" === l[1];
            break
        }
    }!JSON.parse("true") || r || e || (t = parseInt(100 * Math.random()).toString(), J = parseInt(100 * Math.random()).toString(), t = "#pg" + t, location.hash !== t && (history.pushState(t, null, null), history.pushState("#pg" + J, null, null)), document.addEventListener("click", function(t) {
        let e = t.target;
        for (; e;) {
            if ("A" === e.tagName) {
                Y = !0;
                break
            }
            e = e.parentElement
        }
    }), window.addEventListener("popstate", function(t) {
        if (!Y) return r ? void 0 : (t.preventDefault(), p("back"), !1);
        Y = !1
    }, !1));
    let Y = !1;

    function p(e) {
        {
            let t;
            t = "640_480" === U ? `#pg-modal{z-index:1000000;position:fixed}.pg-modal{width:100%;height:100%;position:fixed;top:20%;left:0;z-index:9999}.pg-modal__overlay{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10000;background:rgba(102,102,102,.9);transition:all .3s}.pg-modal-body{overflow:visible;width:320px;height:480px;position:absolute;top:50%;left:50%;z-index:10001;text-align:center;transform:translate(-50%,-50%)}@media screen and (max-width:480px){.pg-modal-body{overflow:visible;width:85%;height:0;padding-top:132.8125%;box-sizing:border-box}}#pg-modal__close{width:40px;height:40px;position:absolute;z-index:10003;top:-15px;left:-15px;background:#fff;border-radius:50%;box-shadow:0 0 7px #141414}.pg-modal .icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:inline-block;width:20px;height:20px;stroke-width:0;stroke:currentColor;fill:currentColor}#pg-modal-content{position:relative}.pg-modal__btn--line{width:100%;text-align:center;padding:0!important;margin:20px 0 15px!important}.pg-modal__btn--line a{display:inline-block;font-size:20px!important;line-height:40px!important;color:#fff!important;text-decoration:none!important;background-color:#52b448!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z' fill='%23fff' data-name='�研�扎�扎�� 1'/%3E%3C/svg%3E")!important;-webkit-background-size:50px auto!important;background-size:50px auto!important;background-position:5px 5px!important;border-radius:7px!important;padding:10px 15px 10px 60px!important}a.pg-modal__btn--line:hover{color:#fff}#pg-modal-content{width:320px;height:480px;border:none!important;margin:0!important}@media screen and (max-width:480px){#pg-modal-content{width:100%;height:100%;position:absolute;top:0;left:0}}.pg-modal__banner{line-height:0!important;padding:0!important;margin:0!important}` : "48089029-eb6c-40d3-bbef-843ec6e52433" === a ? `#pg-modal{z-index:1000000;position:fixed}.pg-modal{width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999}.pg-modal__overlay{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10000;background:rgba(102,102,102,.9);transition:all .3s}.pg-modal-body{overflow:visible;width:320px;height:480px;position:absolute;top:50%;left:50%;z-index:10001;text-align:center;transform:translate(-50%,-50%)}@media screen and (max-width:480px){.pg-modal-body{overflow:visible;width:85%;height:0;padding-top:132.8125%;box-sizing:border-box}}#pg-modal__close{width:40px;height:40px;position:absolute;z-index:10003;top:-15px;left:-15px;background:#fff;border-radius:50%;box-shadow:0 0 7px #141414}.pg-modal .icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:inline-block;width:20px;height:20px;stroke-width:0;stroke:currentColor;fill:currentColor}#pg-modal-content{position:relative}.pg-modal__btn--line{width:100%;text-align:center;padding:0!important;margin:20px 0 15px!important}.pg-modal__btn--line a{display:inline-block;font-size:20px!important;line-height:40px!important;color:#fff!important;text-decoration:none!important;background-color:#52b448!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z' fill='%23fff' data-name='�研�扎�扎�� 1'/%3E%3C/svg%3E")!important;-webkit-background-size:50px auto!important;background-size:50px auto!important;background-position:5px 5px!important;border-radius:7px!important;padding:10px 15px 10px 60px!important}a.pg-modal__btn--line:hover{color:#fff}#pg-modal-content{width:320px;height:480px;max-height:100vh;border:none!important;margin:0!important}@media screen and (max-width:480px){#pg-modal-content{width:100%;height:100%;position:absolute;top:0;left:0}}.pg-modal__banner{line-height:0!important;padding:0!important;margin:0!important}` : "57ca54ae-4fb6-4589-82e6-8d87b114ec4d" === a && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? `#pg-modal{z-index:1000000;position:fixed}.pg-modal{width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999}.pg-modal__overlay{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10000;background:rgba(102,102,102,.9);transition:all .3s}.pg-modal-body{overflow:visible;width:640px;height:960px;position:absolute;top:50%;left:50%;z-index:10001;text-align:center;transform:translate(-50%,-50%)}@media screen and (max-width:480px){.pg-modal-body{overflow:visible;width:85%;height:0;padding-top:132.8125%;box-sizing:border-box}}#pg-modal__close{width:40px;height:40px;position:absolute;z-index:10003;top:-15px;left:-15px;background:#fff;border-radius:50%;box-shadow:0 0 7px #141414}.pg-modal .icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:inline-block;width:20px;height:20px;stroke-width:0;stroke:currentColor;fill:currentColor}#pg-modal-content{position:relative}.pg-modal__btn--line{width:100%;text-align:center;padding:0!important;margin:20px 0 15px!important}.pg-modal__btn--line a{display:inline-block;font-size:20px!important;line-height:40px!important;color:#fff!important;text-decoration:none!important;background-color:#52b448!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z' fill='%23fff' data-name='�研�扎�扎�� 1'/%3E%3C/svg%3E")!important;-webkit-background-size:50px auto!important;background-size:50px auto!important;background-position:5px 5px!important;border-radius:7px!important;padding:10px 15px 10px 60px!important}a.pg-modal__btn--line:hover{color:#fff}#pg-modal-content{width:640px;height:960px;border:none!important;margin:0!important}@media screen and (max-width:480px){#pg-modal-content{width:100%;height:100%;position:absolute;top:0;left:0}}.pg-modal__banner{line-height:0!important;padding:0!important;margin:0!important}` : `#pg-modal{z-index:1000000;position:fixed}.pg-modal{width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999}.pg-modal__overlay{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10000;background:rgba(102,102,102,.9);transition:all .3s}.pg-modal-body{overflow:visible;width:320px;height:480px;position:absolute;top:50%;left:50%;z-index:10001;text-align:center;transform:translate(-50%,-50%)}@media screen and (max-width:480px){.pg-modal-body{overflow:visible;width:85%;height:0;padding-top:132.8125%;box-sizing:border-box}}#pg-modal__close{width:40px;height:40px;position:absolute;z-index:10003;top:-15px;left:-15px;background:#fff;border-radius:50%;box-shadow:0 0 7px #141414}.pg-modal .icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:inline-block;width:20px;height:20px;stroke-width:0;stroke:currentColor;fill:currentColor}#pg-modal-content{position:relative}.pg-modal__btn--line{width:100%;text-align:center;padding:0!important;margin:20px 0 15px!important}.pg-modal__btn--line a{display:inline-block;font-size:20px!important;line-height:40px!important;color:#fff!important;text-decoration:none!important;background-color:#52b448!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z' fill='%23fff' data-name='�研�扎�扎�� 1'/%3E%3C/svg%3E")!important;-webkit-background-size:50px auto!important;background-size:50px auto!important;background-position:5px 5px!important;border-radius:7px!important;padding:10px 15px 10px 60px!important}a.pg-modal__btn--line:hover{color:#fff}#pg-modal-content{width:320px;height:480px;border:none!important;margin:0!important}@media screen and (max-width:480px){#pg-modal-content{width:100%;height:100%;position:absolute;top:0;left:0}}.pg-modal__banner{line-height:0!important;padding:0!important;margin:0!important}`;
            var o = document.createElement("style"),
                o;
            o.innerHTML = t, document.head.insertAdjacentElement("beforeend", o), (o = document.createElement("div")).id = "pg-modal", o.innerHTML = '<svg> <defs> <symbol id="icon-cross" viewBox="0 0 32 32"> <title>cross</title> <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"/> </symbol> </defs></svg><div id="pg-modal"> <div class="pg-modal"> <div class="pg-modal__overlay"></div><div class="pg-modal-body" id="pg-modal__content"> <div id="pg-modal__close"> <svg class="icon icon-cross"> <use xlink:href="#icon-cross"></use> </svg> </div></div></div></div>', document.getElementsByTagName("body")[0].insertAdjacentElement("beforeend", o), (o = document.createElement("iframe")).id = "pg-modal-content", JSON.parse("false") ? F.getSeconds() % 2 == 0 ? o.src = `https://cdn.jsdelivr.net/gh/creep0221/toolcdn/html/popup.html` : o.src = `https://cdn.jsdelivr.net/gh/creep0221/toolcdn/html/popup.html` : o.src = `https://cdn.jsdelivr.net/gh/creep0221/toolcdn/html/popup.html`, o.scrolling = "no", o.frameBorder = "0", o.marginWidth = "0", o.marginHeight = "0", document.getElementById("pg-modal__content").insertAdjacentElement("beforeend", o)
        }
        c(), document.getElementById("pg-modal__close").addEventListener("click", function() {
            document.getElementById("pg-modal").remove()
        }, !1), r = !0, s = !0
    }

    function j() {
        const e = document.body.scrollHeight * Number("2.0");
        let o = !1;

        function a(t) {
            window.scrollY >= e && !o && (t.preventDefault(), k0 || s || r || P || (p("scroll"), window.removeEventListener("scroll", a)), o = !0)
        }
        window.addEventListener("scroll", a, !1)
    }
    if (JSON.parse("false") && document.addEventListener("DOMContentLoaded", function() {
            j()
        }), JSON.parse("false")) {
        let t = !1;

        function G() {
            setTimeout(() => {
                document.hidden && !t && (k0 || s || r || q || (p("visibility"), window.removeEventListener("visibilitychange", G)), t = !0)
            }, 0)
        }
        document.addEventListener("visibilitychange", G, !1)
    }
    var R = 60 * Number("60");

    function c() {
        document.cookie = `pgmodal2=true; max-age=${R}; path=/; Secure`
    }
    var F = new Date,
        U = "defaultSize";
    var s = !1;

    function W() {
        k0 || s || r || T || p("wait")
    }
    var X, K, Q = JSON.parse("true"),
        popupWait = Number("15000");

    function m() {
        Q && (clearInterval(X), X = setInterval(W, popupWait))
    }

    function h(t, e, o = 3e3) {
        setInterval(function() {
            t() && (e(), console.log("condition fulfilled, clear"))
        }, o)
    }

    function t0() {
        var t = document.querySelectorAll('iframe[src*="youtube.com/embed/"]');
        if (t && 0 !== t.length)
            for (var e of t) {
                e = e.getBoundingClientRect();
                if (console.log("Is in view:", 0 <= e.top && e.bottom <= window.innerHeight), 0 <= e.top && e.bottom <= window.innerHeight) return !0
            } else console.log("youtubeVideos not found");
        return !1
    }

    function e0() {
        var t = document.querySelector("iframe");
        return !!t && !!(t.contentDocument || t.contentWindow.document).querySelector(".chamo-main-customer")
    }
    Q && (X = setInterval(W, popupWait)), "0f6579ed-f3c8-4dcd-b21d-cccd04e25e06" !== a && "b0d822d7-8346-4015-a629-c15751efe261" !== a || h(function() {
        var t = document.querySelector(".wc-webchat-ctn");
        return t && "open" === t.getAttribute("status")
    }, m), "455d4413-35f0-403b-bced-da8add47dc90" === a && h(function() {
        var t = document.getElementById("__cho_div");
        return t && "cho_elm_show" === window.getComputedStyle(t).animationName
    }, m), "94f0a845-2421-4ad9-bc47-e745757d8d53" === a && h(function() {
        return "#chatform" === window.location.hash
    }, m), "1429ad9b-29b0-4edc-b123-de663402d9be" === a && h(t0, m), "1b4ebbd9-d21a-469f-9568-6be948d3ae85" === a && h(e0, m), "1b4ebbd9-d21a-469f-9568-6be948d3ae85" === a && h(e0, m), "1b4ebbd9-d21a-469f-9568-6be948d3ae85" === a && h(e0, m), "f61622da-c71f-4ef9-8c76-71286617b8ef" !== a && "5c7c153e-9b28-4242-9b62-96130d5ae0a7" !== a || h(function() {
        return !!document.querySelector("div#smart-dialog.chat-running")
    }, m), "b434780b-56a7-4be4-b515-9892e98a24e6" === a && (K = navigator.userAgent, ["CriOS", "FxiOS", "EdgiOS", "SamsungBrowser", "Mobile Safari", "Chrome", "Firefox", "Edge", "Opera"].some(t => K.includes(t)) || (c(), r = !0)), "5de2da83-43f5-40ce-83fd-2aaf08d5d15f" === a && h(function() {
        if (document.querySelector("#smart-dialog").classList.contains("chat-running")) return 1
    }, m), "4d016e6a-1c08-466a-9391-8c64d495f09b" === a && h(t0, m);
    var g = 0,
        f = 0,
        u = 0,
        o0 = 0,
        a0 = 0,
        n0 = 0,
        i0 = 0,
        d0 = 0,
        r0 = 0,
        l0 = 0,
        p0 = 0,
        c0 = 0,
        s0 = 0,
        m0 = 0,
        h0 = 0,
        g0 = 0,
        f0 = 0,
        u0 = 0,
        x0 = 0,
        b0 = 0,
        v0 = 0,
        w0 = 0,
        _0 = location.pathname,
        i = location.search,
        x = (_0 += i, window.pageYOffset),
        k0 = !1;

    function y0() {
        var t = window.pageYOffset;
        0 < x - t && x - t < 200 ? n0 = 1 : 200 <= x - t && x - t < 1e3 ? i0 = 1 : 1e3 <= x - t && (d0 = 1), x - t < 0 && -200 < x - t ? r0 = 1 : x - t <= -200 && -1e3 < x - t ? l0 = 1 : x - t <= -1e3 && (p0 = 1), 0 === g && 0 === f && 0 === u && 0 === o0 && 0 === a0 && 0 === n0 && 0 === i0 && 0 === d0 && 0 === r0 && 0 === l0 && 0 === p0 && 0 === c0 && 0 === s0 && 0 === m0 && 0 === h0 && 0 === g0 && 0 === f0 && 0 === u0 && 0 === x0 && 0 === b0 && (w0 = 1), fetch(`https://ai.chichat.tw/log.gif?ccid=${a}&path=${_0}&touchstart=${g}&touchmove=${f}&touchend=${u}&mouseover=${o0}&mouseout=${a0}&scrollUpSmall=${n0}&scrollUpMedium=${i0}&scrollUpLarge=${d0}&scrollDownSmall=${r0}&scrollDownMedium=${l0}&scrollDownLarge=${p0}&click=${c0}&inputFlag=${s0}&onfocus=${m0}&onblur=${h0}&mousedown=${g0}&mouseup=${f0}&mousemove=${u0}&pageshow=${x0}&pagehide=${b0}&notAction=${w0}&cookie=${V}&aitrue=` + v0, {
            method: "GET",
            keepalive: !0
        }), w0 = v0 = b0 = x0 = u0 = f0 = g0 = h0 = m0 = s0 = c0 = p0 = l0 = r0 = d0 = i0 = n0 = a0 = o0 = u = f = g = 0, x = window.pageYOffset
    }
    var E0 = JSON.parse("false");
    !E0 || "sp" != d && "tab" != d || setInterval(y0, 1e3);
    var b, v, w, _, k, z0, y, E, z, S, L, O, $, C, N, S0, L0, O0, $0, M, A, B, H, C0, N0, M0 = Number("80") / 100;

    function A0() {
        var t = window.pageYOffset,
            t = (0 < H - t && H - t < 200 ? L0 = 1 : 200 <= H - t && H - t < 1e3 ? O0 = 1 : 1e3 <= H - t ? $0 = 1 : S0 = 1, H - t < 0 && -200 < H - t ? M = 1 : H - t <= -200 && -1e3 < H - t ? A = 1 : H - t <= -1e3 ? B = 1 : 0, 0 === b && 0 === v && 0 === w && 0 === _ && 0 === k && 0 === z0 && 0 === y && 0 === E && 0 === z && 0 === M && 0 === A && 0 === B && 0 === y && 0 === E && 0 === z && 0 === S && 0 === L && 0 === O && 0 === $ && 0 === C && 0 === N && 0, [b, v, w, _, k, S0, L0, O0, $0, M, A, B, y, E, z, S, L, O, $, C, N]),
            t = {
                action_log: t,
                ccid: a,
                cookie: V,
                platform: C0,
                show_rate: M0
            },
            t = JSON.stringify(t);
        let e = new XMLHttpRequest;
        e.open("POST", "https://api.chichat.tw"), e.setRequestHeader("Content-Type", "application/json"), e.onreadystatechange = function() {
            4 == e.readyState && 200 == e.status && e.responseText && JSON.parse(e.responseText).unload && (k0 || s || r || (p("prediction"), v0 = 1, y0()))
        }, e.send(t), B = A = M = $0 = O0 = L0 = S0 = N = C = $ = O = L = S = z = E = y = z0 = k = _ = w = v = b = 0, H = window.pageYOffset
    }
    JSON.parse("false") && (B = A = M = $0 = O0 = L0 = S0 = N = C = $ = O = L = S = z = E = y = z0 = k = _ = w = v = b = 0, H = window.pageYOffset, C0 = "", (0 < navigator.userAgent.indexOf("iPhone") || 0 < navigator.userAgent.indexOf("iPod")) && (C0 = "iPhone", setInterval(A0, 1e3)), 0 < navigator.userAgent.indexOf("Android")) && (C0 = "Android", setInterval(A0, 1e3)), "1b4ebbd9-d21a-469f-9568-6be948d3ae85" !== a && 0 < (N0 = document.getElementsByTagName("iframe")).length && setInterval(function() {
        for (var t = 0; t < N0.length; t++) document.activeElement === N0[t] && m()
    }, 3e3), window.addEventListener("touchstart", function(t) {
        m(), b = g = 1
    }, !1), window.addEventListener("touchmove", function(t) {
        m(), v = f = 1
    }, !1), window.addEventListener("touchend", function(t) {
        m(), w = u = 1
    }, !1), window.addEventListener("mouseover", function(t) {
        m(), _ = o0 = 1
    }, !1), window.addEventListener("mouseout", function(t) {
        m(), k = a0 = 1
    }, !1), window.addEventListener("scroll", function(t) {
        m(), z0 = 1
    }, !1), "c1cc140b-8488-46cd-abfe-5cdd4df030f6" !== a && "54b0b210-1385-44a4-9f1d-e59486446203" !== a && window.addEventListener("click", function(t) {
        m(), y = c0 = 1
    }, !1), window.addEventListener("input", function(t) {
        m(), E = s0 = 1
    }, !1);
    o = document.querySelector("input");
    o && (m(), o.onblur = function() {
        m(), S = h0 = 1
    }, o.onfocus = function() {
        m(), z = m0 = 1
    }), window.addEventListener("popstate", function(t) {
        return m(), t.preventDefault(), "true" === E0 && fetch("https://ai.chichat.tw/log.gif?popstate=1", {
            method: "GET",
            keepalive: !0
        }), !1
    }, !1), window.onunload = function() {
        "true" === E0 && fetch("https://ai.chichat.tw/log.gif?onunload=1", {
            method: "GET",
            keepalive: !0
        })
    }, window.addEventListener("beforeunload", function(t) {
        "true" === E0 && fetch("https://ai.chichat.tw/log.gif?beforeunload=1", {
            method: "GET",
            keepalive: !0
        })
    }, !1), window.addEventListener("keydown", function(t) {
        m()
    }, !1), window.addEventListener("keyup", function(t) {
        m()
    }, !1), window.addEventListener("mousedown", function(t) {
        m(), L = g0 = 1
    }, !1), window.addEventListener("mouseup", function(t) {
        m(), O = f0 = 1
    }, !1), window.addEventListener("mousemove", function(t) {
        m(), $ = u0 = 1
    }, !1), window.addEventListener("pageshow", function(t) {
        m(), C = x0 = 1
    }, !1), window.addEventListener("pagehide", function(t) {
        N = b0 = 1
    }, !1)
}();