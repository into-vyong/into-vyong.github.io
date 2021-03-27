"use strict";const e=(e,{timeout:t,...n}={})=>{const i=new AbortController,a=i.signal;return t?(setTimeout((()=>i.abort()),t),window.fetch(e,{signal:a,...n})):window.fetch(e,{...n})},t=(...t)=>{"https://blog.itswincer.com"==window.location.origin&&e(...t)};const n=()=>{const e=document,t=e.createElement("script"),n=document.getElementById("load-disqus");t.src=`https://${disqusUserName}.disqus.com/embed.js`,t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t),n.classList.toggle("hidden")},i=(t,i)=>{if(t.isIntersecting){let a=t.target;"DIV"===a.tagName?a.style.backgroundImage=`url(${a.dataset.src})`:"BUTTON"===a.tagName?(document.getElementById("load-disqus").onclick=n,console.log("Trying auto load disqus..."),e("https://disqus.com/next/config.json",{timeout:100}).then((()=>{n()})).catch((()=>console.log("Auto load disqus timeout.")))):a.src=a.dataset.src,a.classList.remove("lazy"),i.unobserve(a)}},a=e=>{try{return localStorage.getItem(e)}catch(e){return null}},r=()=>{document.documentElement.removeAttribute("data-theme"),(e=>{try{localStorage.removeItem(e)}catch(e){}})("theme")},s=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",o={dark:!0,light:!0},c={dark:"light",light:"dark"},l=()=>{let e=a("theme");if(o[e])e=c[e];else{if(null!==e)return;e=c[s()]}return((e,t)=>{try{localStorage.setItem(e,t)}catch(e){}})("theme",e),e},d=()=>{document.querySelector('.theme-switch input[type="checkbox"]').addEventListener("change",(()=>{(e=>{const t=e||a("theme");t===s()?r():o[t]?document.documentElement.setAttribute("data-theme",t):r()})(l())}))};class u{}u.self={},u.page=1,u.pageSize=8,u.Pages=()=>{u.self.pages=`${u.page}-${u.pageSize}`},u.Terms=e=>{u.self.terms||(u.self.terms=[]),u.self.terms.push(e)},u.Range=e=>{u.self.range=e},u.Q=e=>{u.self.q||(u.self.q=[]),u.self.q.push(e)},u.Clear=()=>{u.self={}},u.New=e=>{u.Clear(),e.split(" ").forEach((e=>{e.startsWith("tags:")||e.startsWith("category:")?u.Terms(e):e.startsWith("range:")?u.Range(e.slice(6)):u.Q(e)}))};class m{}m.url=new URL("https://api.itswincer.com/blog-search/v1/"),m.loadHTMLElement=()=>{window.location.pathname.startsWith("/search/")&&(m.hints=document.getElementById("search-hint"),m.items=document.getElementById("search-items"),m.results=document.getElementById("search-results"),m.item=document.getElementById("search-item-tempate").content,m.counts=document.getElementById("search-number"),m.prev=document.getElementById("search-prev"),m.next=document.getElementById("search-next"),m.search=document.getElementById("search-button"),m.input=document.getElementById("search-params"),m.input.onkeypress=m.CheckSearch,m.prev.onclick=m.clickPrev,m.next.onclick=m.clickNext,m.search.onclick=m.fetchResults)},m.constructParams=()=>{m.hints.style.display="none",m.results.style.display="block";const e=document.getElementById("search-params").value;u.New(e)},m.clearItemsChilds=()=>{let e=m.items;for(;e.firstChild;)e.removeChild(e.firstChild)},m.setPaginate=e=>{1==u.page?m.prev.style.display="none":m.prev.style.display="block",e.data.length<u.pageSize||u.page*u.pageSize==e.count?m.next.style.display="none":m.next.style.display="block"},m.fetchResults=async()=>{m.constructParams(),u.Pages(),m.url.search=new URLSearchParams(u.self).toString(),m.clearItemsChilds();let t=await e(m.url),n=await t.json();n.data.forEach((e=>{m.item.querySelector("#search-title").innerHTML=e.title,m.item.querySelector("#search-url").href=e.url,m.item.querySelector("#search-date").innerText=new Date(1e3*e.date).toISOString().split("T")[0],m.item.querySelector("#search-snippet").innerHTML=e.snippet+"...";let t=document.importNode(m.item,!0);m.items.appendChild(t)})),m.counts.innerText=n.count,m.setPaginate(n)},m.clickPrev=()=>{u.page--,m.fetchResults()},m.clickNext=()=>{u.page++,m.fetchResults()},m.CheckSearch=e=>{if(void 0!==e&&13!==(e.which||e.keyCode))return;u.page=1,m.fetchResults()};const p=m.loadHTMLElement;var g,h;window.ga_tid="UA-101362832-1",window.ga_api="https://divine-credit-5273.loerfy.workers.dev",g=void 0,h=function(e){function t(e,t){return{name:e,value:1<arguments.length&&void 0!==t?t:-1,delta:0,entries:[],id:"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),isFinal:!1}}function n(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}}function i(e){l=!e.persisted}function a(e,t){var n=1<arguments.length&&void 0!==t&&t;d||(addEventListener("pagehide",i),addEventListener("beforeunload",(function(){})),d=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:l})}),{capture:!0,once:n})}function r(e,t,n,i){var a;return function(){n&&t.isFinal&&n.disconnect(),0<=t.value&&(i||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(a||0),(t.delta||t.isFinal||void 0===a)&&(e(t),a=t.value))}}function s(){return void 0===o&&(o="hidden"===document.visibilityState?0:1/0,a((function(e){var t=e.timeStamp;return o=t}),!0)),{get timeStamp(){return o}}}var o,c,l=!1,d=!1;e.getCLS=function(e){function i(e){e.hadRecentInput||(c.value+=e.value,c.entries.push(e),s())}var s,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],c=t("CLS",0),l=n("layout-shift",i);l&&(s=r(e,c,l,o),a((function(e){var t=e.isUnloading;l.takeRecords().map(i),t&&(c.isFinal=!0),s()})))},e.getFCP=function(e){var i,a=t("FCP"),o=s(),c=n("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<o.timeStamp&&(a.value=e.startTime,a.isFinal=!0,a.entries.push(e),i())}));c&&(i=r(e,a,c))},e.getFID=function(e){function i(e){e.startTime<c.timeStamp&&(o.value=e.processingStart-e.startTime,o.entries.push(e),o.isFinal=!0,d())}var o=t("FID"),c=s(),l=n("first-input",i),d=r(e,o,l);l?a((function(){l.takeRecords().map(i),l.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,t){t.timeStamp<c.timeStamp&&(o.value=e,o.isFinal=!0,o.entries=[{entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+e}],d())}))},e.getLCP=function(e){function i(e){var t=e.startTime;t<u.timeStamp?(d.value=t,d.entries.push(e)):d.isFinal=!0,o()}var o,l=1<arguments.length&&void 0!==arguments[1]&&arguments[1],d=t("LCP"),u=s(),m=n("largest-contentful-paint",i);if(m){o=r(e,d,m,l);var p=function(){d.isFinal||(m.takeRecords().map(i),d.isFinal=!0,o())};(c=c||new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))).then(p),a(p,!0)}},e.getTTFB=function(e){var n,i=t("TTFB");n=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();i.value=i.delta=t.responseStart,i.entries=[t],i.isFinal=!0,e(i)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)},Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?h(exports):"function"==typeof define&&define.amd?define(["exports"],h):h((g="undefined"!=typeof globalThis?globalThis:g||self).webVitals={}),function(e,n,i){var a=void 0!==e,r=a&&!("onscroll"in e)||void 0!==i&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(i.userAgent);if(a&&!r){var s,o,c,l=e.requestIdleCallback||function(e){return setTimeout(e,1)},d=e.performance,u=e.screen,m=e.ga_api,p=function(e){return Math.random().toString(36).slice(-e)},g=function(e,t){return parseInt(Math.random()*(t-e+1)+e,10)},h=encodeURIComponent,f=Math.max,v=Date.now();"complete"===n.readyState?S():e.addEventListener("load",S)}function y(){try{var e,n,i=d.getEntriesByType("navigation")[0],a=d&&d.timing,r=function(e){return isNaN(e)||e==1/0||e<0?void 0:1e4<e?1e4:e.toFixed(0)};n="getEntriesByType"in d&&"getEntriesByName"in d&&i?(e=i).startTime:(e=a).navigationStart,o=["plt="+r(e.loadEventStart-n||0),"dns="+r(e.domainLookupEnd-e.domainLookupStart||0),"pdt="+r(e.responseEnd-e.responseStart||0),"rrt="+r(e.redirectEnd-e.redirectStart||0),"tcp="+r(e.connectEnd-e.connectStart||0),"srt="+r(e.responseStart-e.requestStart||0),"dit="+r(e.domInteractive-n||0),"clt="+r(e.domContentLoadedEventEnd-n||0)],t(m+"?"+p(g(5,8))+"="+p(g(7,12))+"&rx=perf&"+s.concat(o).join("&"),{referrerPolicy:"unsafe-url",credentials:"include"})}catch(e){}}function w(e){var n=e.name,i=e.delta,a=e.id;try{setTimeout((function(){var e;c=["ec="+h("Web Vitals"),"ea="+h(n),"ev="+(e=Math.round("CLS"===n?1e3*i:i),isNaN(e)||e==1/0||e<0?void 0:1e4<e?1e4:e),"el="+h(a)],t(m+"?"+p(g(5,10))+"="+p(g(6,11))+"&rx=event&"+s.concat(c).join("&"),{referrerPolicy:"unsafe-url",credentials:"include"})}),3500)}catch(e){}}function S(){l((function(){!function(){try{s=["ga="+e.ga_tid,"dt="+h(n.title),"de="+h(n.characterSet||n.charset),"dr="+h(n.referrer),"ul="+(i.language||i.browserLanguage||i.userLanguage),"sd="+u.colorDepth+"-bit","sr="+u.width+"x"+u.height,"vp="+f(n.documentElement.clientWidth,e.innerWidth||0)+"x"+f(n.documentElement.clientHeight,e.innerHeight||0),"z="+v],t(m+"?"+p(g(5,8))+"="+p(g(8,12))+"&rx=pv&"+s.join("&"),{referrerPolicy:"unsafe-url",credentials:"include"})}catch(e){}}();var a=e.webVitals;a.getCLS(w),a.getFID(w),a.getLCP(w),a.getFCP(w),a.getTTFB(w)})),"performance"in e&&setTimeout((function(){l(y)}),3500)}}(window,document,navigator),window.addEventListener("load",(()=>{d(),(()=>{const e=document.getElementById("menu"),t=document.getElementById("navbar");e.onclick=()=>{t.classList.toggle("expanded"),e.classList.toggle("expanded")}})(),(()=>{let e=[].slice.call(document.getElementsByClassName("lazy"));if("IntersectionObserver"in window){let t=new IntersectionObserver((function(e,n){e.forEach((e=>i(e,t)))}));e.forEach((function(e){t.observe(e)}))}})(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),p()}));
