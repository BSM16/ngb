// LazySizes
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
$(document).ready(function () {window.addEventListener("scroll",function(b){last_scroll_position=window.scrollY;if(new_scroll_position<last_scroll_position&&last_scroll_position>600){header.classList.remove("slideDown");header.classList.add("slideUp")}else{if(new_scroll_position>last_scroll_position){header.classList.remove("slideUp");header.classList.add("slideDown")}}new_scroll_position=last_scroll_position});$("a.g-profile,cite.user a").removeAttr("href");$(".arrowabjad").click(function(){$("#list-listnim").slideToggle()});$(".tamdl li").click(function(){var a=$(this).attr("class");if(a=="hanya_down"){$(this).css({background:"#F59B50",color:"#fff"});$(".hanya_stream").css({background:"#64AEED",color:"#333"});$("#stream_dl  ul").show();$(".streamx").hide();$(".streamxl").hide();$(".tamdl ul").show();$("#stream_dl h4").show();$("#stream_dl h4.streamx").hide()}else{if(a=="hanya_stream"){$(this).css({background:"#F59B50",color:"#fff"});$(".hanya_down").css({background:"#64AEED",color:"#333"});$("#stream_dl ul").hide();$(".streamx").show();$(".streamxl").show();$(".tamdl ul").show();$("#stream_dl h4:not(h4.streamx)").hide();$(".batch-dlcuy h4").show();$(".batch-dlcuy ul").show()}}});$(".itop").click(function(a){a.preventDefault();$("html, body").animate({scrollTop:0},"slow");return false});
$('#chatango_chat').click(function () {
		$.ajax({
			url: "https://rawcdn.githack.com/Arleth98/HTML/ff023c5a8cc99033d680b82c3fb5a2c3eeb01bce/-fly-chat.htm",
			type:"GET",
			success: function (data) {
				$('#chatango').css({
					'display': 'block'
				}).html(data);
			},
			error: function () {
				alert("Salah");
			}
		})
	})
});
$("img.related_img").each(function(){$(this).attr("src",$(this).attr("src").replace("s640","w120-h150-c"))});$("img.related_img").each(function(){$(this).attr("src",$(this).attr("src").replace("s1600","w120-h150-c"))});$(".coverx img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w125-h175-c/"))});
var new_scroll_position=0,last_scroll_position,header=document.getElementById("headerx");
function throttle(b,a){var c=undefined;var d=undefined;return function(){var e=+new Date();if(c&&e<c+a){clearTimeout(d);d=setTimeout(function(){c=e;b()},a)}else{c=e;b()}}}function onScroll(){if(window.pageYOffset){$$header.classList.add("is-active")}else{$$header.classList.remove("is-active")}}var $$header=document.querySelector("#headerx");window.addEventListener("scroll",throttle(onScroll,25));
if(typeof firstText=="undefined"){firstText="First"}if(typeof lastText=="undefined"){lastText="Last"}var noPage;var currentPage;var currentPageNo;var postLabel;pagecurrentg();function looppagecurrentg(f){var d="";pageNumber=parseInt(numPages/2);if(pageNumber==numPages-pageNumber){numPages=pageNumber*2+1}pageStart=currentPageNo-pageNumber;if(pageStart<1){pageStart=1}lastPageNo=parseInt(f/perPage)+1;if(lastPageNo-1==f/perPage){lastPageNo=lastPageNo-1}pageEnd=pageStart+numPages-1;if(pageEnd>lastPageNo){pageEnd=lastPageNo}d+="<span class='showpageOf'>Page "+currentPageNo+" of "+lastPageNo+"</span>";var e=parseInt(currentPageNo)-1;if(currentPageNo>1){if(currentPage=="page"){d+='<span class="showpage firstpage"><a href="'+home_page+'">'+firstText+"</a></span>"}else{d+='<span class="displaypageNum firstpage"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+firstText+"</a></span>"}}if(currentPageNo>2){if(currentPageNo==3){if(currentPage=="page"){d+='<span class="showpage"><a href="'+home_page+'">'+prevText+"</a></span>"}else{d+='<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+prevText+"</a></span>"}}else{if(currentPage=="page"){d+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+e+');return false">'+prevText+"</a></span>"}else{d+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+e+');return false">'+prevText+"</a></span>"}}}if(pageStart>1){if(currentPage=="page"){d+='<span class="displaypageNum"><a href="'+home_page+'">1</a></span>'}else{d+='<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>'}}if(pageStart>2){d+="<span class='showpagePoint'>...</span>"}for(var g=pageStart;g<=pageEnd;g++){if(currentPageNo==g){d+='<span class="showpagePoint">'+g+"</span>"}else{if(g==1){if(currentPage=="page"){d+='<span class="displaypageNum"><a href="'+home_page+'">1</a></span>'}else{d+='<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>'}}else{if(currentPage=="page"){d+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+g+');return false">'+g+"</a></span>"}else{d+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+g+');return false">'+g+"</a></span>"}}}}if(pageEnd<lastPageNo-1){d+="<span class='showpagePoint'>...</span>"}if(pageEnd<lastPageNo){if(currentPage=="page"){d+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+"</a></span>"}else{d+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+"</a></span>"}}var a=parseInt(currentPageNo)+1;if(currentPageNo<(lastPageNo-1)){if(currentPage=="page"){d+='<span class="displaypageNum"><a href="#" onclick="redirectpage('+a+');return false">'+nextText+"</a></span>"}else{d+='<span class="displaypageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+nextText+"</a></span>"}}if(currentPageNo<lastPageNo){if(currentPage=="page"){d+='<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastText+"</a></span>"}else{d+='<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastText+"</a></span>"}}var c=document.getElementsByName("pageArea");var b=document.getElementById("blog-pager");for(var h=0;h<c.length;h++){c[h].innerHTML=d}if(c&&c.length>0){d=""}if(b){b.innerHTML=d}}function totalcountdata(a){var c=a.feed;var b=parseInt(c.openSearch$totalResults.$t,10);looppagecurrentg(b)}function pagecurrentg(){var a=urlactivepage;if(a.indexOf("/search/label/")!=-1){if(a.indexOf("?updated-max")!=-1){postLabel=a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max"))}else{postLabel=a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max"))}}if(a.indexOf(".html")==-1){if(a.indexOf("/search/label/")==-1){currentPage="page";if(urlactivepage.indexOf("#PageNo=")!=-1){currentPageNo=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{currentPageNo=1}if(a.indexOf("q=")==-1){document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"><\/script>')}else{document.write('<script src="'+home_page+"feeds/posts/summary?q="+a.split("?")[1].split("q=")[1].split("&")[0]+'&alt=json-in-script&callback=totalcountdata"><\/script>')}}else{currentPage="label";if(a.indexOf("&max-results=")==-1){perPage=20}if(urlactivepage.indexOf("#PageNo=")!=-1){currentPageNo=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{currentPageNo=1}document.write('<script src="'+home_page+"feeds/posts/summary/-/"+postLabel+'?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')}}}function redirectpage(a){jsonstart=(a-1)*perPage;noPage=a;var b=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";if(urlactivepage.indexOf("?q=")==-1){c.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost")}else{c.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&alt=json-in-script&q="+urlactivepage.split("?")[1].split("q=")[1].split("&")[0]+"&callback=finddatepost")}b.appendChild(c)}function redirectlabel(a){jsonstart=(a-1)*perPage;noPage=a;var b=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.setAttribute("src",home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");b.appendChild(c)}function finddatepost(c){post=c.feed.entry[0];var a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);var d=encodeURIComponent(a);if(currentPage=="page"){if(urlactivepage.indexOf("?q=")==-1){var b="/search?updated-max="+d+"&max-results="+perPage+"#PageNo="+noPage}else{var b="/search?updated-max="+d+"&q="+urlactivepage.split("?")[1].split("q=")[1].split("&")[0]+"&max-results="+perPage+"#PageNo="+noPage}}else{var b="/search/label/"+postLabel+"?updated-max="+d+"&max-results="+perPage+"#PageNo="+noPage}location.href=b};
function getRandomInt(c,d){return Math.floor(Math.random()*(d-c+1))+c}function shuffleArray(f){var g=f.length,h,e;if(g===0){return false}while(--g){h=Math.floor(Math.random()*(g+1));e=f[g];f[g]=f[h];f[h]=e}return f}function x_randp(d){var c=getRandomInt(1,(d.feed.openSearch$totalResults.$t-x_ranres));document.write('<script src="'+x_homeresx+"/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index="+c+"&max-results="+x_ranres+'&callback=randomPosts"><\/script>')}function randomPosts(i){var l,n=document.getElementById(x_getid),j=shuffleArray(i.feed.entry),q="<h2>Recomended</h2><div>";for(var o=0,m=j.length;o<m;o++){for(var p=0,r=j[o].link.length;p<r;p++){l=(j[o].link[p].rel=="alternate")?j[o].link[p].href:"#"}q+='<a href="'+l+'">'+j[o].title.$t+"</a>"}n.innerHTML=q+"</div>"}document.write('<script src="'+x_homeresx+'/feeds/posts/summary?alt=json-in-script&max-results=0&callback=x_randp"><\/script>');
$(document).ready(function(){$('b[name="backgrund"]').before($("#iamgex-backgg").html());$("#iamgex-backgg").html("");$('b[name="coverxz"]').before($("#iamgex-cover").html());$("#iamgex-cover").html("");$('div[name="infromx"]').before($("#cuk-infromx").html());$("#cuk-infromx").html("");$('b[name="labelsxpost"]').before($("#show-labelsxpost").html());$("#show-labelsxpost").html("")});
'use strict';
var callbacks = {},
    defaults = {
       homeUrl: "https://nimegamibatch.blogspot.com/", // Url blog
       image: 'img/no-img-blogger.png', // Imagen por defecto
       className: '.wjs-section',
       localeDate: 'en-US', //Bahasa
       snippet: 0, 
       imgSize: 'w150-h200-c', 
};
var section = {
    'expReg': /[swh]\d{2,4}(?:-[swh]\d{2,4})?(?:-c)?/,
    'category': null,
    'max-results': 7,
    template: {
        default: '<div id="--random-post">' +
'<ul class="--item">' +
'<div class="--random-post">' +
'<div class="_wrapx">' +
	    '<ul class="--item">' +
	    '<li>' +
	    '<div class="--item">' +
	    '<div class="--label"><span>Complete</span></div>' +
	    '<a href="URL"><img src="IMG" /><h2><span>TITLE</span></h2></a>' +
	    '<span class="dett">TIME</span>' +
	    '</div>' +
	    '</li>' +
	    '</ul>' +
	    '</div>' +
	    '</div>' +
'</ul>' +
'</div>',
	  empty: '<p class="stns-alert">No se han encontrado entradas</p>'
    }
};

function forEach(items, callback) {
    var i, item;
    for (i = 0; item = items[i++];)
        if (false === callback.call(item, i, item)) break;
    return items
}

function getCurrentData(element) {
    var name, value;
    var obj = {};
    for (name in section) {
        value = element.getAttribute("data-" + name);
        if (value) obj[name] = value
    }
    return obj
}

function temp(content, data) {
    var name;
    for (name in data) content = content.replace(new RegExp(name, "g"), data[name]);
    return content
}

function getLabel(element, data) {
    var name;
    var category = data.category;
    var callfix = category.replace(/[^A-Z0-9]/ig, '');
    var script = document.createElement("script");
    var src = defaults.homeUrl + "/feeds/posts/default?alt=json-in-script&callback=callbacks." + callfix;
    callbacks[callfix] = function(json) {
        var i, post;
        var html = "";
        var entry = json.feed.entry;
        if (entry)
            for (i = 0; post = entry[i++];) {
                var content = post.content;
                var summary = post.summary;
                var body = content ? content.$t : summary.$t;
                var img = post.media$thumbnail;
                var tempHtml = document.createElement("div");
                tempHtml.innerHTML = body;
                var imgHtml = tempHtml.querySelector("img");
                html += temp(data.template, {
                    IMG: (img ? img.url : imgHtml ? imgHtml.src : defaults.image).replace(section.expReg, defaults.imgSize),
                    TITLE: post.title.$t,
                    TIME: (new Date(post.published.$t)).toLocaleDateString(defaults.localeDate, {
                        month: "long",
                        day: "2-digit"
                    }),
                    SNIPPET: body.replace(/<[^>]*>?/g, "").substring(0, defaults.snippet) + "...",
                    URL: function() {
                        var i, link;
                        for (i = 0; link = post.link[i++];)
                            if (link.rel === "alternate") return link.href
                    }
                })
            } else html += section.template.empty;
        element.innerHTML = html
    };
    for (name in data)
        if (name !== "template") src += "&" + name + "=" + data[name];
    script.src = src;
    document.body.appendChild(script)
}
forEach(document.querySelectorAll(defaults.className), function(index, element) {
    var currentData = getCurrentData(element);
    if (currentData.category) {
        if (!currentData["max-results"]) currentData["max-results"] = section["max-results"];
        currentData.template = section.template["default"];
        getLabel(element, currentData)
    }
});
