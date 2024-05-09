(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[293],{2729:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),c=new RegExp("\\d+"+a.source,"gu"),l=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),l=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,i=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];o&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),o=!1,s=i,i=!0,c++):i&&s&&n.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=i,i=!1,o=!0):(o=r(l)===l&&a(l)!==l,s=i,i=a(l)===l&&r(l)!==l)}return e})(e,o,l)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},2532:function(e,t,n){"use strict";n.d(t,{L:function(){return f},M:function(){return E},P:function(){return x},S:function(){return D},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return c}});var r=n(6540),a=(n(2729),n(5556)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,o,s,c){const l={};o&&(l.backgroundColor=o,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const m=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,n=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:c}=e,l=s(e,g);return r.createElement("img",i({},l,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:o}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=s(e,h);const c=o.sizes||(null==t?void 0:t.sizes),l=r.createElement(b,i({},o,t,{sizes:c,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:`${t}-${o}-${n}`,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:c})})),l):l};var y;b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,n=s(e,w);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(y=v.propTypes)?void 0:y.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],C=e=>e.replace(/\n/g,""),P=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},A={image:o().object.isRequired,alt:P},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],j=new Set;let $,z;const _=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:f,onError:g}=e,h=s(e,I);const{width:b,height:v,layout:y}=a,w=l(b,v,y),{style:x,className:E}=w,S=s(w,O),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);m&&(d=m);const P=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(y,b,v);return(0,r.useEffect)((()=>{$||($=n.e(108).then(n.bind(n,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(z&&j.has(C))return;let t,r;return $.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=n(i({isLoading:!0,isLoaded:j.has(C),image:a},h)),j.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,C,j,o,p,f,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{j.has(C)&&z&&(k.current.innerHTML=z(i({isLoading:j.has(C),isLoaded:j.has(C),image:a},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},S,{style:i({},x,o,{backgroundColor:u}),className:`${E}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));T.propTypes=A,T.displayName="GatsbyImage";const N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:n,__imageData:a,__error:o}=t,c=s(t,N);return o&&console.warn(o),a?r.createElement(e,i({image:a},c)):(console.warn("Image not loaded",n),null)}}const q=R((function(e){let{as:t="div",className:n,class:a,style:o,image:c,loading:m="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:b,objectPosition:v}=e,y=s(e,S);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),g=i({objectFit:b,objectPosition:v,backgroundColor:h},g);const{width:w,height:P,layout:A,images:I,placeholder:O,backgroundColor:j}=c,$=l(w,P,A),{style:z,className:_}=$,T=s($,k),N={fallback:void 0,sources:[]};return I.fallback&&(N.fallback=i({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(N.sources=I.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},T,{style:i({},z,o,{backgroundColor:h}),className:`${_}${n?` ${n}`:""}`}),r.createElement(f,{layout:A,width:w,height:P},r.createElement(x,i({},d(O,!1,A,w,P,j,b,v))),r.createElement(E,i({"data-gatsby-image-ssr":"",className:p},y,u("eager"===m,!1,N,m,g)))))})),L=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:P,width:L,height:L,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=M;const D=R(T);D.displayName="StaticImage",D.propTypes=M},3895:function(e,t,n){"use strict";var r=n(6540);t.A=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement("main",null,t))}},7528:function(e,t,n){"use strict";var r=n(6540),a=n(4810);t.A=function(e){var t,n;let{description:o,title:i,children:s}=e;const{site:c}=(0,a.GR)("63159454"),l=o||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?`${i} | ${u}`:i),r.createElement("meta",{name:"description",content:l}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:l}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:l}),s)}},6620:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Vr},default:function(){return Gr}});var r=n(6540),a=n(3895);var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var s=n(2833),c=n.n(s),l="-ms-",u="-moz-",d="-webkit-",m="comm",p="rule",f="decl",g="@import",h="@keyframes",b="@layer",v=Math.abs,y=String.fromCharCode,w=Object.assign;function x(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,n){return e.replace(t,n)}function k(e,t,n){return e.indexOf(t,n)}function C(e,t){return 0|e.charCodeAt(t)}function P(e,t,n){return e.slice(t,n)}function A(e){return e.length}function I(e){return e.length}function O(e,t){return t.push(e),e}function j(e,t){return e.filter((function(e){return!E(e,t)}))}var $=1,z=1,_=0,T=0,N=0,R="";function q(e,t,n,r,a,o,i,s){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:$,column:z,length:i,return:"",siblings:s}}function L(e,t){return w(q("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=L(e.root,{children:[e]});O(e,e.siblings)}function M(){return N=T>0?C(R,--T):0,z--,10===N&&(z=1,$--),N}function D(){return N=T<_?C(R,T++):0,z++,10===N&&(z=1,$++),N}function B(){return C(R,T)}function V(){return T}function G(e,t){return P(R,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return $=z=1,_=A(R=e),T=0,[]}function U(e){return R="",e}function Y(e){return x(G(T-1,Z(91===e?e+2:40===e?e+1:e)))}function J(e){for(;(N=B())&&N<33;)D();return W(e)>2||W(N)>3?"":" "}function Q(e,t){for(;--t&&D()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return G(e,V()+(t<6&&32==B()&&32==D()))}function Z(e){for(;D();)switch(N){case e:return T;case 34:case 39:34!==e&&39!==e&&Z(N);break;case 40:41===e&&Z(e);break;case 92:D()}return T}function K(e,t){for(;D()&&e+N!==57&&(e+N!==84||47!==B()););return"/*"+G(t,T-1)+"*"+y(47===e?e:D())}function X(e){for(;!W(B());)D();return G(e,T)}function ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function te(e,t,n,r){switch(e.type){case b:if(e.children.length)break;case g:case f:return e.return=e.return||e.value;case m:return"";case h:return e.return=e.value+"{"+ee(e.children,r)+"}";case p:if(!A(e.value=e.props.join(",")))return""}return A(n=ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function ne(e,t,n){switch(function(e,t){return 45^C(e,0)?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+u+e+l+e+e;case 5936:switch(C(e,t+11)){case 114:return d+e+l+S(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+l+S(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+l+S(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+l+e+e;case 6165:return d+e+l+"flex-"+e+e;case 5187:return d+e+S(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return d+e+l+"flex-item-"+S(e,/flex-|-self/g,"")+(E(e,/flex-|baseline/)?"":l+"grid-row-"+S(e,/flex-|-self/g,""))+e;case 4675:return d+e+l+"flex-line-pack"+S(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+l+S(e,"shrink","negative")+e;case 5292:return d+e+l+S(e,"basis","preferred-size")+e;case 6060:return d+"box-"+S(e,"-grow","")+d+e+l+S(e,"grow","positive")+e;case 4554:return d+S(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return S(S(S(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!E(e,/flex-|baseline/))return l+"grid-column-align"+P(e,t)+e;break;case 2592:case 3360:return l+S(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,E(e.props,/grid-\w+-end/)}))?~k(e+(n=n[t].value),"span",0)?e:l+S(e,"-start","")+e+l+"grid-row-span:"+(~k(n,"span",0)?E(n,/\d+/):+E(n,/\d+/)-+E(e,/\d+/))+";":l+S(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return E(e.props,/grid-\w+-start/)}))?e:l+S(S(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(C(e,t+1)){case 109:if(45!==C(e,t+4))break;case 102:return S(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+u+(108==C(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch",0)?ne(S(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return S(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,s){return l+n+":"+r+s+(a?l+n+"-span:"+(o?i:+i-+r)+s:"")+e}));case 4949:if(121===C(e,t+6))return S(e,":",":"+d)+e;break;case 6444:switch(C(e,45===C(e,14)?18:11)){case 120:return S(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===C(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+l+"$2box$3")+e;case 100:return S(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(e,"scroll-","scroll-snap-")+e}return e}function re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=ne(e.value,e.length,n));case h:return ee([L(e,{value:S(e.value,"@","@"+d)})],r);case p:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(L(e,{props:[S(t,/:(read-\w+)/,":"+u+"$1")]})),F(L(e,{props:[t]})),w(e,{props:j(n,r)});break;case"::placeholder":F(L(e,{props:[S(t,/:(plac\w+)/,":"+d+"input-$1")]})),F(L(e,{props:[S(t,/:(plac\w+)/,":"+u+"$1")]})),F(L(e,{props:[S(t,/:(plac\w+)/,l+"input-$1")]})),F(L(e,{props:[t]})),w(e,{props:j(n,r)})}return""}))}}function ae(e){return U(oe("",null,null,null,[""],e=H(e),0,[0],e))}function oe(e,t,n,r,a,o,i,s,c){for(var l=0,u=0,d=i,m=0,p=0,f=0,g=1,h=1,b=1,w=0,x="",E=a,P=o,I=r,j=x;h;)switch(f=w,w=D()){case 40:if(108!=f&&58==C(j,d-1)){-1!=k(j+=S(Y(w),"&","&\f"),"&\f",v(l?s[l-1]:0))&&(b=-1);break}case 34:case 39:case 91:j+=Y(w);break;case 9:case 10:case 13:case 32:j+=J(f);break;case 92:j+=Q(V()-1,7);continue;case 47:switch(B()){case 42:case 47:O(se(K(D(),V()),t,n,c),c);break;default:j+="/"}break;case 123*g:s[l++]=A(j)*b;case 125*g:case 59:case 0:switch(w){case 0:case 125:h=0;case 59+u:-1==b&&(j=S(j,/\f/g,"")),p>0&&A(j)-d&&O(p>32?ce(j+";",r,n,d-1,c):ce(S(j," ","")+";",r,n,d-2,c),c);break;case 59:j+=";";default:if(O(I=ie(j,t,n,l,u,a,s,x,E=[],P=[],d,o),o),123===w)if(0===u)oe(j,t,I,I,E,o,d,s,P);else switch(99===m&&110===C(j,3)?100:m){case 100:case 108:case 109:case 115:oe(e,I,I,r&&O(ie(e,I,I,0,0,a,s,x,a,E=[],d,P),P),a,P,d,s,r?E:P);break;default:oe(j,I,I,I,[""],P,0,s,P)}}l=u=p=0,g=b=1,x=j="",d=i;break;case 58:d=1+A(j),p=f;default:if(g<1)if(123==w)--g;else if(125==w&&0==g++&&125==M())continue;switch(j+=y(w),w*g){case 38:b=u>0?1:(j+="\f",-1);break;case 44:s[l++]=(A(j)-1)*b,b=1;break;case 64:45===B()&&(j+=Y(D())),m=B(),u=d=A(x=j+=X(V())),w++;break;case 45:45===f&&2==A(j)&&(g=0)}}return o}function ie(e,t,n,r,a,o,i,s,c,l,u,d){for(var m=a-1,f=0===a?o:[""],g=I(f),h=0,b=0,y=0;h<r;++h)for(var w=0,E=P(e,m+1,m=v(b=i[h])),k=e;w<g;++w)(k=x(b>0?f[w]+" "+E:S(E,/&\f/g,f[w])))&&(c[y++]=k);return q(e,t,n,0===a?p:s,c,l,u,d)}function se(e,t,n,r){return q(e,t,n,m,y(N),P(e,2,-2),0,r)}function ce(e,t,n,r,a){return q(e,t,n,f,P(e,0,r),P(e,r+1,-1),r,a)}var le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",de="active",me="data-styled-version",pe="6.1.11",fe="/*!sc*/\n",ge="undefined"!=typeof window&&"HTMLElement"in window,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),be={},ve=(new Set,Object.freeze([])),ye=Object.freeze({});function we(e,t,n){return void 0===n&&(n=ye),e.theme!==n.theme&&e.theme||t||n.theme}var xe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ee=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Se=/(^-|-$)/g;function ke(e){return e.replace(Ee,"-").replace(Se,"")}var Ce=/(a)(d)/gi,Pe=52,Ae=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ie(e){var t,n="";for(t=Math.abs(e);t>Pe;t=t/Pe|0)n=Ae(t%Pe)+n;return(Ae(t%Pe)+n).replace(Ce,"$1-$2")}var Oe,je=5381,$e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ze=function(e){return $e(je,e)};function _e(e){return Ie(ze(e)>>>0)}function Te(e){return e.displayName||e.name||"Component"}function Ne(e){return"string"==typeof e&&!0}var Re="function"==typeof Symbol&&Symbol.for,qe=Re?Symbol.for("react.memo"):60115,Le=Re?Symbol.for("react.forward_ref"):60112,Fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},De={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Be=((Oe={})[Le]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oe[qe]=De,Oe);function Ve(e){return("type"in(t=e)&&t.type.$$typeof)===qe?De:"$$typeof"in e?Be[e.$$typeof]:Fe;var t}var Ge=Object.defineProperty,We=Object.getOwnPropertyNames,He=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,Ye=Object.getPrototypeOf,Je=Object.prototype;function Qe(e,t,n){if("string"!=typeof t){if(Je){var r=Ye(t);r&&r!==Je&&Qe(e,r,n)}var a=We(t);He&&(a=a.concat(He(t)));for(var o=Ve(e),i=Ve(t),s=0;s<a.length;++s){var c=a[s];if(!(c in Me||n&&n[c]||i&&c in i||o&&c in o)){var l=Ue(t,c);try{Ge(e,c,l)}catch(e){}}}}return e}function Ze(e){return"function"==typeof e}function Ke(e){return"object"==typeof e&&"styledComponentId"in e}function Xe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function et(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function tt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nt(e,t,n){if(void 0===n&&(n=!1),!n&&!tt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nt(e[r],t[r]);else if(tt(t))for(var r in t)e[r]=nt(e[r],t[r]);return e}function rt(e,t){Object.defineProperty(e,"toString",{value:t})}function at(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ot=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw at(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(fe);return t},e}(),it=new Map,st=new Map,ct=1,lt=function(e){if(it.has(e))return it.get(e);for(;st.has(ct);)ct++;var t=ct++;return it.set(e,t),st.set(t,e),t},ut=function(e,t){ct=t+1,it.set(e,t),st.set(t,e)},dt="style[".concat(ue,"][").concat(me,'="').concat(pe,'"]'),mt=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pt=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ft=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),a=[],o=0,i=r.length;o<i;o++){var s=r[o].trim();if(s){var c=s.match(mt);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(ut(u,l),pt(e,u,c[3]),e.getTag().insertRules(l,a)),a.length=0}else a.push(s)}}};function gt(){return n.nc}var ht=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(ue,de),r.setAttribute(me,pe);var i=gt();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},bt=function(){function e(e){this.element=ht(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw at(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),vt=function(){function e(e){this.element=ht(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),wt=ge,xt={isServer:!ge,useCSSOMInjection:!he},Et=function(){function e(e,t,n){void 0===e&&(e=ye),void 0===t&&(t={});var r=this;this.options=o(o({},xt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ge&&wt&&(wt=!1,function(e){for(var t=document.querySelectorAll(dt),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ue)!==de&&(ft(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this)),rt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return st.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||0===i.length)return"continue";var s="".concat(ue,".g").concat(n,'[id="').concat(a,'"]'),c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(i).concat(s,'{content:"').concat(c,'"}').concat(fe)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return lt(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(o(o({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new yt(n):t?new bt(n):new vt(n)}(this.options),new ot(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(lt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(lt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(lt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),St=/&/g,kt=/^\s*\/\/.*$/gm;function Ct(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ct(e.children,t)),e}))}function Pt(e){var t,n,r,a=void 0===e?ye:e,o=a.options,i=void 0===o?ye:o,s=a.plugins,c=void 0===s?ve:s,l=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(St,n).replace(r,l))})),i.prefix&&u.push(re),u.push(te);var d=function(e,a,o,s){void 0===a&&(a=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(kt,""),l=ae(o||a?"".concat(o," ").concat(a," { ").concat(c," }"):c);i.namespace&&(l=Ct(l,i.namespace));var d,m,p,f=[];return ee(l,(d=u.concat((p=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&p(e)})),m=I(d),function(e,t,n,r){for(var a="",o=0;o<m;o++)a+=d[o](e,t,n,r)||"";return a})),f};return d.hash=c.length?c.reduce((function(e,t){return t.name||at(15),$e(e,t.name)}),je).toString():"",d}var At=new Et,It=Pt(),Ot=r.createContext({shouldForwardProp:void 0,styleSheet:At,stylis:It}),jt=(Ot.Consumer,r.createContext(void 0));function $t(){return(0,r.useContext)(Ot)}function zt(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],a=t[1],o=$t().styleSheet,i=(0,r.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,r.useMemo)((function(){return Pt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){c()(n,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}}),[e.shouldForwardProp,i,s]);return r.createElement(Ot.Provider,{value:l},r.createElement(jt.Provider,{value:s},e.children))}var _t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=It);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rt(this,(function(){throw at(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=It),this.name+e.hash},e}(),Tt=function(e){return e>="A"&&e<="Z"};function Nt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Tt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},qt=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Rt(o)&&(Array.isArray(o)&&o.isCss||Ze(o)?r.push("".concat(Nt(a),":"),o,";"):tt(o)?r.push.apply(r,i(i(["".concat(a," {")],qt(o),!1),["}"],!1)):r.push("".concat(Nt(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lt(e,t,n,r){return Rt(e)?[]:Ke(e)?[".".concat(e.styledComponentId)]:Ze(e)?!Ze(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Lt(e(t),t,n,r):e instanceof _t?n?(e.inject(n,r),[e.getName(r)]):[e]:tt(e)?qt(e):Array.isArray(e)?Array.prototype.concat.apply(ve,e.map((function(e){return Lt(e,t,n,r)}))):[e.toString()];var a}function Ft(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ze(n)&&!Ke(n))return!1}return!0}var Mt=ze(pe),Dt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ft(e),this.componentId=t,this.baseHash=$e(Mt,t),this.baseStyle=n,Et.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Xe(r,this.staticRulesId);else{var a=et(Lt(this.rules,e,t,n)),o=Ie($e(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Xe(r,o),this.staticRulesId=o}else{for(var s=$e(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u;else if(u){var d=et(Lt(u,e,t,n));s=$e(s,d+l),c+=d}}if(c){var m=Ie(s>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,n(c,".".concat(m),void 0,this.componentId)),r=Xe(r,m)}}return r},e}(),Bt=r.createContext(void 0);Bt.Consumer;var Vt={};new Set;function Gt(e,t,n){var a=Ke(e),i=e,s=!Ne(e),c=t.attrs,l=void 0===c?ve:c,u=t.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":ke(e);Vt[n]=(Vt[n]||0)+1;var r="".concat(n,"-").concat(_e(pe+n+Vt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,m=t.displayName,p=void 0===m?function(e){return Ne(e)?"styled.".concat(e):"Styled(".concat(Te(e),")")}(e):m,f=t.displayName&&t.componentId?"".concat(ke(t.displayName),"-").concat(t.componentId):t.componentId||d,g=a&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(a&&i.shouldForwardProp){var b=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(e,t){return b(e,t)&&v(e,t)}}else h=b}var y=new Dt(n,f,a?i.componentStyle:void 0);function w(e,t){return function(e,t,n){var a=e.attrs,i=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.styledComponentId,u=e.target,d=r.useContext(Bt),m=$t(),p=e.shouldForwardProp||m.shouldForwardProp,f=we(t,d,s)||ye,g=function(e,t,n){for(var r,a=o(o({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var s=Ze(r=e[i])?r(a):r;for(var c in s)a[c]="className"===c?Xe(a[c],s[c]):"style"===c?o(o({},a[c]),s[c]):s[c]}return t.className&&(a.className=Xe(a.className,t.className)),a}(a,t,f),h=g.as||u,b={};for(var v in g)void 0===g[v]||"$"===v[0]||"as"===v||"theme"===v&&g.theme===f||("forwardedAs"===v?b.as=g.forwardedAs:p&&!p(v,h)||(b[v]=g[v]));var y=function(e,t){var n=$t();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,g),w=Xe(c,l);return y&&(w+=" "+y),g.className&&(w+=" "+g.className),b[Ne(h)&&!xe.has(h)?"class":"className"]=w,b.ref=n,(0,r.createElement)(h,b)}(x,e,t)}w.displayName=p;var x=r.forwardRef(w);return x.attrs=g,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=h,x.foldedComponentIds=a?Xe(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=a?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)nt(e,a[r],!0);return e}({},i.defaultProps,e):e}}),rt(x,(function(){return".".concat(x.styledComponentId)})),s&&Qe(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Wt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Ht=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ze(e)||tt(e))return Ht(Lt(Wt(ve,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Lt(r):Ht(Lt(Wt(r,t)))}function Yt(e,t,n){if(void 0===n&&(n=ye),!t)throw at(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Ut.apply(void 0,i([r],a,!1)))};return r.attrs=function(r){return Yt(e,t,o(o({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Yt(e,t,o(o({},n),r))},r}var Jt=function(e){return Yt(Gt,e)},Qt=Jt;xe.forEach((function(e){Qt[e]=Jt(e)}));var Zt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ft(e),Et.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(et(Lt(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Et.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=gt(),r=et([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(me,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw at(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw at(2);var n=((t={})[ue]="",t[me]=pe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),a=gt();return a&&(n.nonce=a),[r.createElement("style",o({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Et({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw at(2);return r.createElement(zt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw at(3)}})(),"__sc-".concat(ue,"__");const Kt=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Ut.apply(void 0,i([e],t,!1)),s="sc-global-".concat(_e(JSON.stringify(a))),c=new Zt(a,s),l=function(e){var t=$t(),n=r.useContext(Bt),a=r.useRef(t.styleSheet.allocateGSInstance(s)).current;return t.styleSheet.server&&u(a,e,t.styleSheet,n,t.stylis),r.useLayoutEffect((function(){if(!t.styleSheet.server)return u(a,e,t.styleSheet,n,t.stylis),function(){return c.removeStyles(a,t.styleSheet)}}),[a,e,t.styleSheet,n,t.stylis]),null};function u(e,t,n,r,a){if(c.isStatic)c.renderStyles(e,be,n,a);else{var i=o(o({},t),{theme:we(t,r,l.defaultProps)});c.renderStyles(e,i,n,a)}}return r.memo(l)})`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  	font-family: "Montserrat", sans-serif;
	color: #343a40;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
    font-family: 'Tan Pearl';
	font-weight: normal;
	font-style: normal;
    font-display: swap;
    font-named-instance: 'Regular';
    src: url(/fonts/tan-pearl.otf) format("opentype");
}
`;var Xt=Kt,en=n(7528);function tn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function nn(){var e=tn(["\n          @media (min-width: ",") {\n            ","\n          }\n        "]);return nn=function(){return e},e}function rn(){var e=tn(["\n          @media (max-width: ",") {\n            ","\n          }\n        "]);return rn=function(){return e},e}function an(){var e=tn(["\n    @media (min-width: ",") and\n      (max-width: ",") {\n      ","\n    }\n  "]);return an=function(){return e},e}function on(){var e=tn(["\n    @media (min-width: ",") {\n      ","\n    }\n  "]);return on=function(){return e},e}function sn(){var e=tn(["\n    @media (max-width: ",") {\n      ","\n    }\n  "]);return sn=function(){return e},e}var cn={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function ln(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t[e]?t[e]:parseInt(e)?e:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}var un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,t=Object.keys(e).reduce((function(t,n){var r=e[n];return t.to[n]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(n,"') instead of old media.to.").concat(n," (Probably we'll deprecate it)")),Ut(rn(),r,Ut.apply(void 0,arguments))},t.from[n]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(n,"') instead of old media.from.").concat(n," (Probably we'll deprecate it)")),Ut(nn(),r,Ut.apply(void 0,arguments))},t}),{to:{},from:{}});return Object.assign({lessThan:function(t){return function(){return Ut(sn(),ln(t,e),Ut.apply(void 0,arguments))}},greaterThan:function(t){return function(){return Ut(on(),ln(t,e),Ut.apply(void 0,arguments))}},between:function(t,n){return function(){return Ut(an(),ln(t,e),ln(n,e),Ut.apply(void 0,arguments))}}},t)}(),dn=un;const mn=Qt.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60em;
  margin-bottom: 150px;


  ${dn.lessThan("large")`
    flex-direction: column;
    align-items: center;
    width: 80vw;
  `}

`,pn=Qt.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  color: #9c6644;
  text-align: center;
`,fn=Qt.p`
  font-size: 1.2rem;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;

`,gn=Qt.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2em;

  ${dn.lessThan("large")`
  `}
`,hn=Qt.div`
  display: flex;
  align-items: center;

  width: 10em;
  height: 3.5em;
  font-size: 1.1rem;
  text-align: center;

  border-radius: 10px;
  color: #9c6644;
  background-color: rgb(245, 237, 237);

  margin-bottom: 2em;

  ${dn.lessThan("large")`
    width: 8em;
  `}

`,bn=Qt.p`
  margin: 0 auto;
`;var vn=()=>r.createElement(mn,null,r.createElement(pn,null,"Como posso te ajudar"),r.createElement(fn,null,"A terapia permite dar suporte aos mais variados espectros da sua vida, desde enfrentar desafios emocionais como ansiedade e depressão até lidar com questões complexas de relacionamento, autoestima e desenvolvimento pessoal."),r.createElement(gn,null,r.createElement(hn,null,r.createElement(bn,null,"Ansiedade")),r.createElement(hn,null,r.createElement(bn,null,"Depressão")),r.createElement(hn,null,r.createElement(bn,null,"Estresse")),r.createElement(hn,null,r.createElement(bn,null,"Burnout")),r.createElement(hn,null,r.createElement(bn,null,"Relacionamentos")),r.createElement(hn,null,r.createElement(bn,null,"Questões ",r.createElement("br",null)," Familiares")),r.createElement(hn,null,r.createElement(bn,null,"Insônia")),r.createElement(hn,null,r.createElement(bn,null,"Auto-Estima ",r.createElement("br",null),"&",r.createElement("br",null)," Confiança")),r.createElement(hn,null,r.createElement(bn,null,"Desafios ",r.createElement("br",null),"Profissionais")),r.createElement(hn,null,r.createElement(bn,null,"Luto ",r.createElement("br",null),"&",r.createElement("br",null)," Perda")),r.createElement(fn,null,"Através do diálogo colaborativo e técnicas terapêuticas trabalharemos para identificar e compreender as origens dos desafios que você enfrenta, desenvolvendo estratégias para lidar com eles de maneira saudável e construtiva. Ao longo do processo terapêutico você aprenderá a cultivar uma maior autoconsciência, resiliência emocional e habilidades para promover mudanças positivas em sua vida."))),yn=n(2532);const wn=Qt.header`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 0.6em 0 1em 0;
`,xn=Qt.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;var En=()=>r.createElement(wn,null,r.createElement(xn,null,r.createElement(yn.S,{src:"../../images/logo-manuela-novo.png",loading:"eager",quality:100,formats:["auto","webp","avif"],alt:"Manuela Improta - Psicóloga Clínica",style:{},__imageData:n(7166)})));const Sn=Qt.a`
`,kn=Qt.button`
  background-color: #9c6644;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #D4A373;
  }

  &:focus {
    outline: none;
  }
`;var Cn=e=>{let{message:t,label:n,size:a="P"}=e;const o=`https://wa.me/71999889229?text=${encodeURIComponent(t)}`;return r.createElement(Sn,{href:o,target:"_blank",rel:"noopener noreferrer"},r.createElement(kn,null,n))};const Pn=Qt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 65em;

  padding-top: 50px;
  margin-bottom: 100px;

  ${dn.lessThan("large")`
    flex-direction: column;
    align-items: center;
    width: 80vw;

  `}

`,An=Qt.div`
  padding-top: 0;
  margin-left: 4em;
  color: #212529;
  width: 50em;

  ${dn.lessThan("medium")`
    width: 100%;
    margin-left: 0;
  `}

  ${dn.greaterThan("medium")`
    width: 40em;
    margin-left: 0;
  `}

`,In=Qt.h2`
  margin-top: 1em;
  margin-bottom: 0.4em;
  font-size: 2rem;
  font-family: 'Satisfy', cursive;
  color: #212529;

  ${dn.lessThan("large")`
    text-align: center;
  `}  
`,On=Qt.p`
  font-size: 1.4rem;
  margin: 0 auto;
  line-height: 1.5;

  ${dn.lessThan("large")`
    text-align: center;
    font-size: 1.2rem;
  `}
`,jn=Qt.div`
  margin-left: 1em;
  img {
    border-radius: 20px;
  }  
`,$n=Qt.div`  
  ${dn.lessThan("medium")`
    width: 60vw;
    margin: 0 auto;
  `}

  ${dn.between("medium","large")`
    width: 40vw;
  `}

  ${dn.greaterThan("large")`
    width: 20em;
  `}
`,zn=Qt.a`
  color: #9c6644;
  &:visited {
    color: #9c6644;
  }
`,_n=Qt.div`
  display: flex;
  flex-direction: column;

  ${dn.lessThan("large")`
    text-align: center;
  `}
`,Tn=Qt.div`
  margin-top: 1em;
  // ${dn.lessThan("medium")`
  //   width: 60vw;
  //   margin: 0 auto;
  // `}

  // ${dn.between("medium","large")`
  //   width: 30vw;
  //   margin: 0 auto;
  // `}

  // ${dn.greaterThan("large")`
  //   width: 30vw;
  //   margin: 0 auto;
  // `}

  // ${dn.greaterThan("medium")`
  //   margin-top: 1em;
  // `}

`,Nn=Qt.figcaption`
  font-size: 0.9rem;
  line-height: 1rem;
  margin-top: 0.2rem;
  text-align: center;
  font-style: italic;
  color: #6c757d;
`;var Rn=()=>{const e="Manuela Improta - Psicóloga Clínica e Pós-Graduanda em Psicologia Analítica",t=`https://wa.me/71999889229?text=${encodeURIComponent("Olá, acessei o seu site e gostaria de mais informações sobre a terapia")}`;return r.createElement(Pn,null,r.createElement(jn,null,r.createElement($n,null,r.createElement(yn.S,{src:"../../images/aboutImageProfile.png",loading:"eager",quality:100,formats:["auto","webp","avif"],alt:e,style:{height:"100%"},__imageData:n(9384)}),r.createElement(Nn,null,e))),r.createElement(_n,null,r.createElement(An,null,r.createElement(In,null,"Olá, eu sou Manuela Improta"),r.createElement(On,null,"Às vezes, o primeiro passo para buscar apoio emocional pode parecer desafiador, mas saiba que você não está sozinho(a). Estou aqui para oferecer um espaço seguro e acolhedor, onde podemos explorar juntos os desafios que você enfrenta. Sua jornada de autoconhecimento e bem-estar começa com um simples gesto: ",r.createElement(zn,{href:t,target:"_blank"},"enviar uma mensagem"),". Estou ansiosa para ouvir sua história e oferecer o suporte necessário para que você possa florescer.")),r.createElement(Tn,null,r.createElement(Cn,{label:"Enviar uma mensagem",message:"Olá, gostaria de ter mais detalhes sobre a terapia."}))))},qn=n(4634),Ln=n.n(qn),Fn=n(3693),Mn=n.n(Fn),Dn=n(1847),Bn=n.n(Dn),Vn=["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"];function Gn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Wn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Gn(Object(n),!0).forEach((function(t){Mn()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Hn=Qt(r.forwardRef((function(e,t){var n=e.children,a=e.iconAttrs,o=(e.iconVerticalAlign,e.iconViewBox),i=e.size,s=e.title,c=Bn()(e,Vn),l=Wn(Wn({viewBox:o,height:void 0!==e.height?e.height:i,width:void 0!==e.width?e.width:i,"aria-hidden":null==s?"true":void 0,focusable:"false",role:null!=s?"img":void 0},a),c);return r.createElement("svg",Ln()({},l,{ref:t}),s&&r.createElement("title",{key:"icon-title"},s),n)}))).withConfig({displayName:"StyledIconBase",componentId:"sc-ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],(function(e){return e.iconVerticalAlign})),Un=r.forwardRef((function(e,t){return r.createElement(Hn,Ln()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:t}),r.createElement("path",{d:"M3.516 7a3.5 3.5 0 1 1-3.5 3.5L0 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464 5.01 5.01 0 0 0-.497.578c.179-.028.362-.043.548-.043zm9 0a3.5 3.5 0 1 1-3.5 3.5L9 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464 5.01 5.01 0 0 0-.497.578c.179-.028.362-.043.549-.043z"}))}));Un.displayName="QuotesLeft";const Yn=Qt.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 60%;
  padding: 3em 0 1em 0;

  background-color: #E2D8CF;
  background-image: url(/images/sofa-background-bw.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
`,Jn=Qt.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  color: white;
`,Qn=Qt.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  ${dn.lessThan("medium")`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `}
`,Zn=Qt.div`
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-size: 1.1rem;
  width: 35vw;

  border-radius: 10px;
  margin-bottom: 2em;
  background-color: #797d62;

  ${dn.lessThan("medium")`
    width: 90%;
  `}
`,Kn=Qt.p`
  text-align: center;
  padding: 1em 3em; 
  line-height: 1.3rem;
  color: white;
`,Xn=Qt(Un)`
  width: 2em;
  margin-left: 0.5em;
  color: white;
`;var er=()=>r.createElement(Yn,null,r.createElement(Jn,null,"Depoimentos"),r.createElement(Qn,null,r.createElement(Zn,null,r.createElement(Xn,null),r.createElement(Kn,null,"A terapia transformou minha vida. Ela me ajuda a superar desafios emocionais que eu enfrentava há anos. Estou muito grata pelo apoio e orientação que recebi durante nosso tempo juntos. ",r.createElement("br",null)," - V.M.")),r.createElement(Zn,null,r.createElement(Xn,null),r.createElement(Kn,null,"As habilidades terapêuticas me permitiram explorar questões profundas e encontrar soluções para problemas que pareciam insuperáveis. Sinto-me mais forte e mais confiante graças às nossas sessões. ",r.createElement("br",null)," - A.F."))),r.createElement(Qn,null,r.createElement(Zn,null,r.createElement(Xn,null),r.createElement(Kn,null,"Encontrar a terapia foi um verdadeiro divisor de águas para mim. A atenção me ajudou a reconectar comigo mesma e a enfrentar meus medos de frente. Estou em um lugar muito melhor emocionalmente. ",r.createElement("br",null)," - M.B.")),r.createElement(Zn,null,r.createElement(Xn,null),r.createElement(Kn,null,"Depois de anos lutando contra a ansiedade, finalmente decidi procurar ajuda profissional. Estou tão feliz por ter seguido esse caminho. Sinto que tenho as ferramentas para lidar com minha ansiedade de forma saudável e construtiva. ",r.createElement("br",null)," - J.F."))));const tr=Qt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 100px 0 50px 0;
`,nr=Qt.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  color: #9c6644;

  ${dn.lessThan("large")`
    font-size: 1.2rem;
  `}
`,rr=Qt.div`
  width: 70%;

  ${dn.lessThan("medium")`
    width: 90%;
  `}

  p {
    max-width: 100%;
  }

  .faq-whats {
    color: #25d366;

    &:visited {
      color: #25d366;
    }
  
    &:hover {
      text-decoration: none;
    }
  }

  
`;var ar=r.forwardRef((function(e,t){return r.createElement(Hn,Ln()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:t}),r.createElement("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"}))}));ar.displayName="ArrowDownCircleFill";const or=Qt.div`
    $accordion-primary: #E2D8CF;
    $accordion-orange: #C5AC8E;

    color: $accordion-primary;
    margin-bottom: 10px;

    &::before {
        content: "";
        background-color: $accordion-orange;
        position: absolute;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        margin-left: -5px;
        width: 10px;
        height: 100%;
    }

    button {
        outline: none;
        padding: 20px;
        border: none;
        text-align: left;
        width: 100%;
        transition: 0.4s;
        font-size: 20px;
        font-weight: 500;
        background-color: #f5eded;
        font-family: $roboot;
        color: #343a40;
        cursor: pointer;

        &.active,
        &:hover {
            background-color: $accordion-orange;
            color: #C5AC8E;

            .arrow::before,
            .arrow::after {
                background: #fff;
            }
        }
    }

    .accordion-panel {
        padding: 0 18px;
        background-color: white;
        color: #444444;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
    }

    .arrow {
        position: absolute;
        top: 30px;
        right: 30px;

        &:before,
        &:after {
            position: relative;
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background: $accordion-orange;
            transition: 0.3s ease-in-out;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            left: 13px;
            top: -2px;
            transform: rotate(-45deg);
        }
    }

    &.collapsed {
        .accordion-panel {
            max-height: 0;
        }
    }

    &.uncollapsed {
        .accordion-panel {
            max-height: 500px;
        }

        .arrow::before {
            transform: rotate(-45deg);
        }

        .arrow::after {
            transform: rotate(45deg);
        }
    }
`,ir=Qt(ar)`
    width: 1em;
    color: #C5AC8E;
    margin-right: 1em;
`,sr=Qt.button``,cr=Qt.div`
    p {
        padding-top: 0.6em;
        line-height: 1.4rem;
      	color: #212529;
    }
    
`;var lr=e=>{let{title:t,content:n}=e;const{0:a,1:o}=(0,r.useState)(!1);return r.createElement(or,{className:"accordion "+(a?"uncollapsed":"collapsed")},r.createElement(sr,{onClick:()=>{o(!a)}},r.createElement(ir,{class:"arrow"}),t),r.createElement(cr,{className:"accordion-panel"},n))};var ur=()=>{const e=`https://wa.me/71999889229?text=${encodeURIComponent("Olá, acessei o seu site e gostaria de mais informações sobre a terapia")}`,t=[{title:r.createElement(r.Fragment,null,"De que forma a terapia pode me ajudar?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"A terapia pode ajudar a desenvolver habilidades de enfrentamento, melhorar o autoconhecimento, explorar questões subjacentes, oferecer suporte emocional, desenvolver relacionamentos saudáveis, definir metas e planos de ação, além de fornecer gerenciamento de crises."))},{title:r.createElement(r.Fragment,null,"Quais aspectos podemos tratar nas sessões?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"A terapia é indicada para qualquer pessoa que busque melhorar sua saúde mental, lidar com desafios emocionais ou encontrar crescimento pessoal. Isso inclui problemas como ansiedade, depressão, estresse, trauma, relacionamentos, autoestima, entre outros."))},{title:r.createElement(r.Fragment,null,"Quanto tempo dura cada sessão?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"A duração de cada sessão de terapia pode variar dependendo das necessidades individuais do cliente. Geralmente, elas duram em torno de 50 minutos."))},{title:r.createElement(r.Fragment,null,"Terapia online funciona?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"Sim, a terapia online pode ser eficaz para muitas pessoas. Ela oferece conveniência e acessibilidade, permitindo que você receba apoio terapêutico no conforto de sua própria casa. O processo é idêntico ao da terapia presencial, a diferença é que você pode fazer de qualquer lugar que você esteja, pelo celular, computador, tablet... etc."))},{title:r.createElement(r.Fragment,null,"Quero marcar uma sessão, como faço?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"Basta entrar em contato por meio dos botões disponíveis no site. Você será redirecionado automaticamente para meu whatsapp ",r.createElement("a",{class:"faq-whats",href:e,target:"_blank",rel:"noopener noreferrer"},"(71 99988-9229)")," e onde te passarei maiores detalhes."))},{title:r.createElement(r.Fragment,null,"Posso fazer as consultas por meio do meu plano de saúde?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"Meus atendimentos não tem vínculo com planos de saúde, mas você pode solicitar reembolso de acordo com a política do seu plano."))},{title:r.createElement(r.Fragment,null,"Como é realizado o pagamento?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"O pagamento acontece de forma antecipada adquirindo um pacote de sessões que o paciente utiliza durante o mês. Ele pode ser feito por meio de Transferência, Pix ou Boleto."))},{title:r.createElement(r.Fragment,null,"Qual o valor da consulta?"),content:r.createElement(r.Fragment,null,r.createElement("p",null,"O Conselho Federal de Psicologia (CRP) determina que os valores das sessões não sejam divulgados publicamente. Portanto, ao entrar em contato, forneço valores e informações adicionais sobre pacotes."))}];return r.createElement(tr,null,r.createElement(nr,null,"Dúvidas Frequentes"),r.createElement(rr,null,t.map(((e,t)=>r.createElement(lr,{key:t,title:e.title,content:e.content})))))};const dr=Qt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5em 0 10em 0;
`,mr=Qt.h2`
  font-size: 2rem;
  text-align: center;

  font-family: 'Tan Pearl', serif;
  color: #9c6644;
`,pr=Qt.h2`
  font-size: 2rem;
  margin-bottom: 1em;
  text-align: center;

  font-family: 'Tan Pearl', serif;
  color: #9c6644;
`,fr=Qt.div`
  width: 20em;
`;var gr=()=>r.createElement(dr,null,r.createElement(mr,null,"Lembre-se:"),r.createElement("br",null),r.createElement(pr,null,"sua jornada não precisa ser solitária"),r.createElement(fr,null,r.createElement(yn.S,{src:"../../images/ornament.png",loading:"eager",quality:100,formats:["auto","webp","avif"],style:{height:"100%",marginBottom:"2em"},__imageData:n(9099)})),r.createElement(Cn,{label:"Entrar em contato",message:"Olá, gostaria de ter mais detalhes sobre a terapia."})),hr=r.forwardRef((function(e,t){return r.createElement(Hn,Ln()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"}))}));hr.displayName="Instagram";var br=r.forwardRef((function(e,t){return r.createElement(Hn,Ln()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}))}));br.displayName="Email";var vr=r.forwardRef((function(e,t){return r.createElement(Hn,Ln()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:t}),r.createElement("path",{d:"M13.641 2.325A7.869 7.869 0 0 0 8.032 0C3.663 0 .107 3.556.107 7.928c0 1.397.366 2.763 1.059 3.963L.041 16l4.203-1.103a7.929 7.929 0 0 0 3.787.966h.003c4.369 0 7.928-3.556 7.928-7.928a7.887 7.887 0 0 0-2.322-5.609zm-5.607 12.2a6.583 6.583 0 0 1-3.356-.919l-.241-.144-2.494.653.666-2.431-.156-.25a6.537 6.537 0 0 1-1.009-3.506 6.599 6.599 0 0 1 6.594-6.591c1.759 0 3.416.688 4.659 1.931a6.554 6.554 0 0 1 1.928 4.662c-.003 3.637-2.959 6.594-6.591 6.594zm3.613-4.937c-.197-.1-1.172-.578-1.353-.644s-.313-.1-.447.1c-.131.197-.512.644-.628.778-.116.131-.231.15-.428.05s-.838-.309-1.594-.984c-.588-.525-.987-1.175-1.103-1.372s-.013-.306.088-.403c.091-.088.197-.231.297-.347s.131-.197.197-.331c.066-.131.034-.247-.016-.347s-.447-1.075-.609-1.472c-.159-.388-.325-.334-.447-.341-.116-.006-.247-.006-.378-.006s-.347.05-.528.247c-.181.197-.694.678-.694 1.653s.709 1.916.809 2.05c.1.131 1.397 2.134 3.384 2.991.472.203.841.325 1.128.419.475.15.906.128 1.247.078.381-.056 1.172-.478 1.338-.941s.166-.859.116-.941c-.047-.088-.178-.137-.378-.238z"}))}));vr.displayName="Whatsapp";const yr=Qt.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #B38A6A;
  height: 38vh;
`,wr=(Qt.div`
  width: 145px;
  height: 100px;
`,Qt.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`,Qt.span`
  margin-top: 0.5em;
`),xr=Qt.span`
  margin-top: 0.5em;
`,Er=Qt.div`
  text-align: center;
  margin-top: 1em;
`,Sr=Qt.h3`
  font-weight: bold;
`,kr=Qt.div`
  display: flex;
  flex-direction: column;
  height: 5em;
`,Cr=Qt.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Pr=Qt(br)`
  width: 2em;
  margin-right: 0.5em;
`,Ar=Qt(hr)`
  width: 1.5em;
  margin-right: 0.6em;

`,Ir=Qt(vr)`
  width: 1.5em;
`,Or=Qt.a`
  color: #000;

  &:visited {
    color: #000;
  }

  &:hover {
    color: #fff;
  }
`;var jr=()=>r.createElement(yr,null,r.createElement(yn.S,{src:"../../images/logo-m-brown.png",loading:"eager",quality:100,formats:["auto","webp","avif"],alt:"Manuela Improta - Psicóloga Clínica",__imageData:n(2219)}),r.createElement(wr,null,"Copyright © ",(new Date).getFullYear()," - Manuela Improta"),r.createElement(xr,null,"Psicóloga Clínica"),r.createElement(kr,null,r.createElement(Er,null,r.createElement(Sr,null,"Contato")),r.createElement(Cr,null,r.createElement(Or,{href:"mailto:manuelaimprotamdias@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(Pr,null)),r.createElement(Or,{href:"https://www.instagram.com/psimanuelaimprota/",target:"_blank",rel:"noopener noreferrer"},r.createElement(Ar,null)),r.createElement(Or,{href:"https://wa.me/71999889229?text=",rel:"noopener noreferrer"},r.createElement(Ir,null)))));const $r=Qt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(179, 138, 106);
  
  margin: 0 auto;
  width: 100%;
  height: 60%;
  padding: 4em 0;
`,zr=Qt.h2`
  text-align: center;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  line-height: 3.5rem;
  width: 60vw;
  margin-bottom: 1em;

  ${dn.lessThan("medium")`
    width: 85vw;
    font-size: 1.2rem;
    line-height: 2.2rem;
  `}
`,_r=Qt.div`
  width: 20em;
`;var Tr=()=>r.createElement($r,null,r.createElement(zr,null,"Ajudo você a cuidar da sua saúde mental e romper barreiras negativas que impedem de alcançar seus objetivos."),r.createElement(_r,null,r.createElement(yn.S,{src:"../../images/ornament-black.png",loading:"eager",quality:100,formats:["auto","webp","avif"],style:{height:"100%"},__imageData:n(8083)}))),Nr=r.forwardRef((function(e,t){return r.createElement(Hn,Ln()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 512 512"},e,{ref:t}),r.createElement("path",{fillRule:"evenodd",d:"M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"}))}));Nr.displayName="LogoWhatsapp";const Rr=Qt.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    width: 60px;
    height: 60px;
    
    bottom:40px;
    right:40px;

    background-color:#25d366;
    color:#FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index:100;

    &:hover {
        background-color: #40916c;
    }
`,qr=Qt(Nr)`
    width: 45px;
    height: 45px;

`;var Lr=()=>{const e=`https://wa.me/71999889229?text=${encodeURIComponent("Olá, gostaria de saber mais detalhes sobre a terapia.")}`;return r.createElement(Rr,{href:e,target:"_blank",rel:"noopener noreferrer"},r.createElement(qr,null))};const Fr=Qt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 4vh;
  padding-top: 1.5em;
`,Mr=Qt.p`
  font-size: 0.8rem;
  font-weight: bold;  
`,Dr=Qt.a`
  display: inline;

  color: #3a6ea5;

  &:visited {
    color: #3a6ea5;
  }

  &:hover {
    color: #004e98;
  }
`;var Br=()=>r.createElement(Fr,null,r.createElement(Mr,null,"Desenvolvido por ",r.createElement(Dr,{href:"https://wa.me/71992690760?text=Olá, vi o site de Manuela Improta e gostaria de fazer um orçamento para o meu.",rel:"noopener noreferrer"},"VM")));const Vr=()=>r.createElement(en.A,{title:"Home"});var Gr=()=>r.createElement(a.A,null,r.createElement(Xt,null),r.createElement(En,null),r.createElement(Tr,null),r.createElement(Rn,null),r.createElement(vn,null),r.createElement(er,null),r.createElement(ur,null),r.createElement(gr,null),r.createElement(jr,null),r.createElement(Lr,null),r.createElement(Br,null))},2833:function(e){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!s(l))return!1;var u=e[l],d=t[l];if(!1===(a=n?n.call(r,u,d,l):void 0)||void 0===a&&u!==d)return!1}return!0}},3693:function(e,t,n){var r=n(7736);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1847:function(e,t,n){var r=n(4893);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,n){var r=n(3738).default;e.exports=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,n){var r=n(3738).default,a=n(9045);e.exports=function(e){var t=a(e,"string");return"symbol"==r(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7166:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/28a7b19e294945cf03c03056ef124c68/2f080/logo-manuela-novo.png","srcSet":"/static/28a7b19e294945cf03c03056ef124c68/6df27/logo-manuela-novo.png 100w,\\n/static/28a7b19e294945cf03c03056ef124c68/d6e6c/logo-manuela-novo.png 200w,\\n/static/28a7b19e294945cf03c03056ef124c68/2f080/logo-manuela-novo.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/28a7b19e294945cf03c03056ef124c68/0c013/logo-manuela-novo.avif 100w,\\n/static/28a7b19e294945cf03c03056ef124c68/346dd/logo-manuela-novo.avif 200w,\\n/static/28a7b19e294945cf03c03056ef124c68/aaa13/logo-manuela-novo.avif 400w","type":"image/avif","sizes":"(min-width: 400px) 400px, 100vw"},{"srcSet":"/static/28a7b19e294945cf03c03056ef124c68/6d85d/logo-manuela-novo.webp 100w,\\n/static/28a7b19e294945cf03c03056ef124c68/70e27/logo-manuela-novo.webp 200w,\\n/static/28a7b19e294945cf03c03056ef124c68/2415d/logo-manuela-novo.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":82}')},9384:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#989898","images":{"fallback":{"src":"/static/bb5ceaa6c8d011749eaf902d8def5065/d6861/aboutImageProfile.png","srcSet":"/static/bb5ceaa6c8d011749eaf902d8def5065/1b8b7/aboutImageProfile.png 125w,\\n/static/bb5ceaa6c8d011749eaf902d8def5065/5a773/aboutImageProfile.png 250w,\\n/static/bb5ceaa6c8d011749eaf902d8def5065/d6861/aboutImageProfile.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/bb5ceaa6c8d011749eaf902d8def5065/56dc9/aboutImageProfile.avif 125w,\\n/static/bb5ceaa6c8d011749eaf902d8def5065/270d0/aboutImageProfile.avif 250w,\\n/static/bb5ceaa6c8d011749eaf902d8def5065/597c4/aboutImageProfile.avif 500w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/static/bb5ceaa6c8d011749eaf902d8def5065/82414/aboutImageProfile.webp 125w,\\n/static/bb5ceaa6c8d011749eaf902d8def5065/a28ff/aboutImageProfile.webp 250w,\\n/static/bb5ceaa6c8d011749eaf902d8def5065/4269e/aboutImageProfile.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":801}')},8083:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7d08e752aa110f7d0a3759433d648ded/53dbd/ornament-black.png","srcSet":"/static/7d08e752aa110f7d0a3759433d648ded/4a10d/ornament-black.png 100w,\\n/static/7d08e752aa110f7d0a3759433d648ded/11a63/ornament-black.png 200w,\\n/static/7d08e752aa110f7d0a3759433d648ded/53dbd/ornament-black.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/7d08e752aa110f7d0a3759433d648ded/75d4e/ornament-black.avif 100w,\\n/static/7d08e752aa110f7d0a3759433d648ded/12480/ornament-black.avif 200w,\\n/static/7d08e752aa110f7d0a3759433d648ded/f8c2a/ornament-black.avif 400w","type":"image/avif","sizes":"(min-width: 400px) 400px, 100vw"},{"srcSet":"/static/7d08e752aa110f7d0a3759433d648ded/45a96/ornament-black.webp 100w,\\n/static/7d08e752aa110f7d0a3759433d648ded/4e54c/ornament-black.webp 200w,\\n/static/7d08e752aa110f7d0a3759433d648ded/b4ad6/ornament-black.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":40}')},2219:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b88868","images":{"fallback":{"src":"/static/b6d31bc4861a5d375cb41919e974cb66/243dd/logo-m-brown.png","srcSet":"/static/b6d31bc4861a5d375cb41919e974cb66/f4d5d/logo-m-brown.png 36w,\\n/static/b6d31bc4861a5d375cb41919e974cb66/ec0ae/logo-m-brown.png 73w,\\n/static/b6d31bc4861a5d375cb41919e974cb66/243dd/logo-m-brown.png 145w","sizes":"(min-width: 145px) 145px, 100vw"},"sources":[{"srcSet":"/static/b6d31bc4861a5d375cb41919e974cb66/e281c/logo-m-brown.avif 36w,\\n/static/b6d31bc4861a5d375cb41919e974cb66/9ba82/logo-m-brown.avif 73w,\\n/static/b6d31bc4861a5d375cb41919e974cb66/b1e52/logo-m-brown.avif 145w","type":"image/avif","sizes":"(min-width: 145px) 145px, 100vw"},{"srcSet":"/static/b6d31bc4861a5d375cb41919e974cb66/27f1c/logo-m-brown.webp 36w,\\n/static/b6d31bc4861a5d375cb41919e974cb66/5bdb0/logo-m-brown.webp 73w,\\n/static/b6d31bc4861a5d375cb41919e974cb66/cfce7/logo-m-brown.webp 145w","type":"image/webp","sizes":"(min-width: 145px) 145px, 100vw"}]},"width":145,"height":100}')},9099:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f24abc216683a1e5713ee586b96f9ae3/53dbd/ornament.png","srcSet":"/static/f24abc216683a1e5713ee586b96f9ae3/4a10d/ornament.png 100w,\\n/static/f24abc216683a1e5713ee586b96f9ae3/11a63/ornament.png 200w,\\n/static/f24abc216683a1e5713ee586b96f9ae3/53dbd/ornament.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/f24abc216683a1e5713ee586b96f9ae3/75d4e/ornament.avif 100w,\\n/static/f24abc216683a1e5713ee586b96f9ae3/12480/ornament.avif 200w,\\n/static/f24abc216683a1e5713ee586b96f9ae3/f8c2a/ornament.avif 400w","type":"image/avif","sizes":"(min-width: 400px) 400px, 100vw"},{"srcSet":"/static/f24abc216683a1e5713ee586b96f9ae3/45a96/ornament.webp 100w,\\n/static/f24abc216683a1e5713ee586b96f9ae3/4e54c/ornament.webp 200w,\\n/static/f24abc216683a1e5713ee586b96f9ae3/b4ad6/ornament.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":40}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5209b0820d934e28a632.js.map