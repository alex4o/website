(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),f=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=f(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(N,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),N=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:u,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,d.default)({opacity:k?1:0,transition:A?"opacity "+y+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,W={transitionDelay:y+"ms"},H=(0,d.default)({opacity:this.state.imgLoaded?0:1},A&&W,{},o,{},u),C={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:S};if(h){var T=h,q=g(h);return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&W)}),q.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:C,imageVariants:T,generateSources:z}),q.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:C,imageVariants:T,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(T),l.default.createElement(N,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:w},q,{imageVariants:T}))}}))}if(m){var B=m,j=g(m),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},A&&W)}),j.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:C,imageVariants:B,generateSources:z}),j.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:C,imageVariants:B,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(B),l.default.createElement(N,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:B}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:x,sizes:V,fixed:c.default.oneOfType([x,c.default.arrayOf(x)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var W=A;t.default=W},NLiy:function(e,t,a){e.exports={main:"index-module--main--2LmOO",navigation:"index-module--navigation--3p_p9",logo:"index-module--logo--36y26"}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=(a("I/Ru"),a("ezAz"),a("9eSz"),a("vrFN")),o=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("fLNC")),d=a.n(o);var l=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children"]);return i.a.createElement("section",{className:d.a.linkButton},i.a.createElement(n.Link,a,i.a.createElement("span",{className:d.a.text},t),i.a.createElement("span",{className:d.a.line+" "+d.a.Right}),i.a.createElement("span",{className:d.a.line+" "+d.a.Top}),i.a.createElement("span",{className:d.a.line+" "+d.a.Left}),i.a.createElement("span",{className:d.a.line+" "+d.a.Bottom})))},c=a("tFV6"),f=a.n(c),u=a("NLiy"),p=a.n(u);t.default=function(){return i.a.createElement("main",{className:p.a.main},i.a.createElement(s.a,{title:"Home"}),i.a.createElement(f.a,{className:p.a.logo}),i.a.createElement("h1",null,"Aleksandar Bonin"),i.a.createElement("div",{className:p.a.navigation},i.a.createElement(l,{to:"/about"},"About me"),i.a.createElement(l,{to:"/blog"},"Blog")))}},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),o=a("xa9o"),d=a("yde8"),l=a("Wadk"),c=a("qDzq"),f=a("O1i0"),u=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return u(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(f(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(f(this,t)).has(e):a&&c(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),d=a("k5Iv"),l=a("SGlo"),c=a("BjK0"),f=a("O1i0"),u=a("O1i0"),p=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(c(e)){var t=g(e);return!0===t?m(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(f(this,"WeakMap"),e,t)}},v=e.exports=a("94Pd")("WeakMap",b,y,l,!0,!0);u&&p&&(d((r=l.getConstructor(b,"WeakMap")).prototype,y),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,i){if(c(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},fLNC:function(e,t,a){e.exports={linkButton:"button-module--link-button--3qtDz",text:"button-module--text--37XbJ",line:"button-module--line--2LXLz",Right:"button-module---right--1jR8O",Left:"button-module---left--H5JOm",Top:"button-module---top--rQWBb",Bottom:"button-module---bottom--3vZBG"}},tFV6:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,[r.createElement("g",{transform:"translate(0 -191.2)",key:0},[r.createElement("path",{d:"m49.22 191.8c-20.74 1.286-39.81 16.07-46.06 35.94-7.192 20.82 0.648 45.64 18.55 58.47 16.77 12.89 41.42 13.75 59.16 2.268 18.58-11.43 28.39-35.23 22.98-56.42-4.596-21-23.43-37.75-44.77-39.99-3.258-0.3932-6.577-0.4621-9.854-0.2713z",fill:"none",stroke:"#ea526f",strokeWidth:"1.009",className:"ZLcHdItS_0",key:0}),r.createElement("a",{fill:"#ffffff",key:1},r.createElement("path",{d:"m35.6 207.5-13.86 44.33h5.178l3.307-11.37h16.11l10.31 36.92h14.81c4.623 0 7.867-1.15 9.729-3.451 1.863-2.301 2.204-5.562 1.025-9.783-0.896-3.208-2.406-5.878-4.53-8.01-2.112-2.153-4.634-3.567-7.567-4.243 2.166-0.4222 3.6-1.489 4.301-3.198 0.7014-1.71 0.6485-4.01-0.1592-6.902-1.043-3.736-2.999-6.618-5.868-8.644-2.868-2.026-6.43-3.04-10.68-3.04h-9.478l-7.056-22.61zm2.772 5.909 5.21 17.19 1.361 4.871h-13.23zm12.12 21.96h8.261c2.726 0 4.917 0.591 6.574 1.773 1.675 1.182 2.845 2.965 3.511 5.351 0.672 2.406 0.5008 4.201-0.5137 5.383-1.002 1.161-2.866 1.741-5.592 1.741h-8.261zm5.429 19.44h8.952c3.002 0 5.42 0.7071 7.251 2.121 1.844 1.393 3.179 3.567 4.004 6.523 0.8194 2.934 0.7018 5.119-0.3524 6.554-1.042 1.414-3.064 2.121-6.066 2.121h-8.952z",fill:"#ffffff",stroke:"#ffffff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.076",className:"ZLcHdItS_1"}))]),r.createElement("style",{key:1},".ZLcHdItS_0{stroke-dasharray:330 332;stroke-dashoffset:331;animation:ZLcHdItS_draw 1000ms ease-out 0ms forwards;}.ZLcHdItS_1{fill-opacity:0;stroke-dasharray:426 428;stroke-dashoffset:427;animation:ZLcHdItS_draw 1800ms ease 200ms forwards;}@keyframes ZLcHdItS_draw{100%{stroke-dashoffset:0;fill-opacity: 0;}}@keyframes ZLcHdItS_fade{0%{stroke-opacity:1;}94.44444444444444%{stroke-opacity:1;}100%{stroke-opacity:0;}}")])}i.defaultProps={version:"1.1",viewBox:"0 0 105.8 105.8",id:"logo"},e.exports=i,i.default=i},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-index-js-e60b6b6e2e1d725016b8.js.map