"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),l=new RegExp(i.source+r.source,"gu"),s=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,o=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];i&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),i=!1,l=o,o=!0,s++):o&&l&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=o,o=!1,i=!0):(i=n(c)===c&&r(c)!==c,l=o,o=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return x},P:function(){return E},S:function(){return D},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return m},h:function(){return s}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=l(e,u);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:s}=e,c=l(e,g);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=l(e,h);const s=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,o({},i,t,{sizes:s,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s})})),c):c};var w;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?n.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(y,o({},e)),n.createElement("noscript",null,n.createElement(y,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],_=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],z=new Set;let T,O;const F=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:f,onError:g}=e,h=l(e,S);const{width:b,height:y,layout:w}=r,v=c(b,y,w),{style:E,className:x}=v,k=l(v,I),_=(0,n.useRef)(),C=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(m=u);const N=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,b,y);return(0,n.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(C);if(O&&z.has(C))return;let t,n;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;_.current&&(_.current.innerHTML=a(o({isLoading:!0,isLoaded:z.has(C),image:r},h)),z.has(C)||(t=requestAnimationFrame((()=>{_.current&&(n=l(_.current,C,z,i,p,f,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{z.has(C)&&O&&(_.current.innerHTML=O(o({isLoading:z.has(C),isLoaded:z.has(C),image:r},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},k,{style:o({},E,i,{backgroundColor:d}),className:x+(m?" "+m:""),ref:_,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(F,e):null}));j.propTypes=L,j.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:r,__error:i}=t,s=l(t,A);return i&&console.warn(i),r?n.createElement(e,o({image:r},s)):(console.warn("Image not loaded",a),null)}}const P=M((function(e){let{as:t="div",className:a,class:r,style:i,image:s,loading:u="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=l(e,k);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),g=o({objectFit:b,objectPosition:y,backgroundColor:h},g);const{width:v,height:N,layout:L,images:S,placeholder:I,backgroundColor:z}=s,T=c(v,N,L),{style:O,className:F}=T,j=l(T,_),A={fallback:void 0,sources:[]};return S.fallback&&(A.fallback=o({},S.fallback,{srcSet:S.fallback.srcSet?C(S.fallback.srcSet):void 0})),S.sources&&(A.sources=S.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,o({},j,{style:o({},O,i,{backgroundColor:h}),className:F+(a?" "+a:"")}),n.createElement(f,{layout:L,width:v,height:N},n.createElement(E,o({},m(I,!1,L,v,N,z,b,y))),n.createElement(x,o({"data-gatsby-image-ssr":"",className:p},w,d("eager"===u,!1,A,u,g)))))})),R=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:N,width:R,height:R,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const D=M(j);D.displayName="StaticImage",D.propTypes=W},4651:function(e,t,a){a.d(t,{O:function(){return n}});const n={primaryTeal:"#008CA0",black:"#012327",white:"#F8FCFF",darkTeal:"#015A6D",lightTeal:"#91D7DD",grey:"#9AA3AF"}},5588:function(e,t,a){a.d(t,{Z:function(){return H}});var n=a(7294),r=a(1883),i=a(9583),o=a(4405),l=a(2788);const s="#008CA0",c=l.default.nav.withConfig({displayName:"navBarElements__Nav",componentId:"sc-1cmybn-0"})(["background:",";transition:",";height:60px;display:flex;justify-content:center;position:sticky;top:0;z-index:999;opacity:0.97;@media screen and (max-width:960px){background:",";}"],(e=>{let{active:t}=e;return t?"#F8FCFF":"linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"}),(e=>{let{active:t}=e;return t?"0.3s all ease":"0.4s all ease"}),(e=>{let{click:t}=e;return t?"#F8FCFF":(e=>{let{active:t}=e;return t?"#fcfcfc":"linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"})+";"})),d=l.default.div.withConfig({displayName:"navBarElements__NavbarContainer",componentId:"sc-1cmybn-1"})(["display:flex;justify-content:space-between;height:60px;width:100%;max-width:1000px;"]),m=(0,l.default)(r.Link).withConfig({displayName:"navBarElements__NavLogo",componentId:"sc-1cmybn-2"})(["color:",";justify-self:flex-start;cursor:pointer;text-decoration:none;font-size:1.7rem;font-weight:bold;display:flex;align-items:center;padding-left:3rem;font-family:'Lato',sans-serif;font-weight:700;"],s),u=l.default.ul.withConfig({displayName:"navBarElements__NavMenu",componentId:"sc-1cmybn-3"})(["display:flex;align-items:center;list-style:none;text-align:center;@media screen and (max-width:960px){display:flex;flex-direction:column;width:100%;height:100vh;position:absolute;transition:all 0.2s ease;top:60px;left:",";opacity:1;background:#fcfcfc;}"],(e=>{let{click:t}=e;return t?"0":"-100%"})),p=(0,l.default)(r.Link).withConfig({displayName:"navBarElements__NavLinks",componentId:"sc-1cmybn-4"})(["color:",";display:flex;align-items:center;text-decoration:none;padding:0.5rem 1.5rem;height:100%;@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');font-family:'Lato',sans-serif;font-weight:700;font-size:1rem;"],s),f=l.default.li.withConfig({displayName:"navBarElements__NavItem",componentId:"sc-1cmybn-5"})(["height:80px;@media screen and (max-width:960px){display:none;}"]),g=l.default.div.withConfig({displayName:"navBarElements__MobileIcon",componentId:"sc-1cmybn-6"})(["display:none;@media screen and (max-width:960px){display:flex;transition:all 0.8 ease;position:absolute;right:0;transform:translate(-100%,50%);font-size:2rem;cursor:pointer;}"]);var h=a(8032);const b=[{title:"PITCH IT",path:"/subEvents/latestEvent",cName:"dropdown-link"}];var y=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:i}=(0,n.useState)(!1),o=()=>{window.scrollY>=80?i(!0):i(!1)};return(0,n.useEffect)((()=>{o(),window.addEventListener("scroll",o)}),[]),n.createElement(n.Fragment,null,n.createElement("ul",{onClick:()=>t(!e),className:e?"dropdown-menu clicked":"dropdown-menu"},b.map(((e,i)=>n.createElement(w,{active:a,key:i},n.createElement(r.Link,{className:e.cName,to:e.path,onClick:()=>t(!1)},e.title))))))};const w=l.default.li.withConfig({displayName:"dropdownEvents__DropLi",componentId:"sc-1s7y48p-0"})(["  transition:",";background:",";cursor:pointer;border-radius:0px 0px 5px 5px;"],(e=>{let{active:t}=e;return t?"0.3s all ease":"0.4s all ease"}),(e=>{let{active:t}=e;return t?"#fcfcfc":"linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"}));var v=a(4651);var E=e=>{let{item:t}=e;const{0:a,1:r}=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(x,{onClick:t.subNav&&(()=>r(!a))},n.createElement("div",null,n.createElement(k,{to:t.path},t.title)),n.createElement("div",{style:{position:"relative",left:"4rem"}},t.subNav&&a?t.iconOpened:t.subNav?t.iconClosed:null)),a&&t.subNav.map(((e,t)=>n.createElement(_,{key:t},n.createElement(k,{style:{color:""+v.O.darkTeal},to:e.path},e.title)))))};const x=l.default.div.withConfig({displayName:"MobileSidebar__SidebarLink",componentId:"sc-qsjtg6-0"})(["display:none;@media screen and (max-width:960px){display:flex;color:",";font-family:'Lato',sans-serif;font-weight:700;justify-content:space-between;align-items:center;padding:50px;list-style:none;height:60px;text-decoration:none;font-size:1.5rem;}"],v.O.primaryTeal),k=(0,l.default)(r.Link).withConfig({displayName:"MobileSidebar__SidebarLabel",componentId:"sc-qsjtg6-1"})(["margin-left:16px;z-index:10;text-decoration:none;color:",";&:hover{cursor:pointer;color:",";}"],v.O.primaryTeal,v.O.lightTeal),_=l.default.div.withConfig({displayName:"MobileSidebar__DropdownLink",componentId:"sc-qsjtg6-2"})(["background:#fcfcfc;height:60px;font-family:'Lato',sans-serif;font-weight:700;padding-left:3rem;display:flex;align-items:center;color:",";font-size:1.5rem;&:hover{cursor:pointer;color:",";}"],v.O.darkTeal,v.O.lightTeal);var C=a(9352);const N=[{title:"About Us",path:"/aboutUs"},{title:"Events",path:"/mainEvents",iconClosed:n.createElement(C.ebp,null),iconOpened:n.createElement(C.Tvk,null),subNav:[{title:"PITCH IT",path:"/subEvents/latestEvent"}]},{title:"Our Team",path:"/ourTeam"},{},{title:"Career/Contact",path:"/career"}];var L=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:l}=(0,n.useState)(!1),{0:s,1:b}=(0,n.useState)(!1),w=()=>{window.scrollY>=80?l(!0):l(!1)};return(0,n.useEffect)((()=>{w(),window.addEventListener("scroll",w)}),[]),n.createElement(o.Pd.Provider,{value:{color:"#008CA0"}},n.createElement(c,{active:r,click:e},n.createElement(d,null,n.createElement(m,{to:"/"},n.createElement(h.S,{src:"../../images/marketyze_logo.png",loading:"eager",width:55,quality:95,formats:["auto","webp","avif"],alt:"",placeholder:"transparent",style:{marginRight:"0.5rem"},__imageData:a(7803)}),"MARKETYZE"),n.createElement(g,{onClick:()=>t(!e)},e?n.createElement(i.aHS,null):n.createElement(i.Fm7,null)),n.createElement(u,{click:e},n.createElement(f,null,n.createElement(p,{to:"/aboutUs"},"About Us")),n.createElement(f,{onMouseEnter:()=>{window.innerWidth<960?b(!1):b(!0)},onMouseLeave:()=>{window.innerWidth,b(!1)}},n.createElement(p,{to:"/mainEvents"},"Events"),s&&n.createElement(y,null)),n.createElement(f,null,n.createElement(p,{to:"/ourTeam"},"Our Team")),n.createElement(f,null,n.createElement(p,{to:"/career"},"Career/Contact")),N.map(((e,t)=>n.createElement(E,{item:e,key:t})))))))};var S=()=>n.createElement(I,null,n.createElement(z,null,n.createElement(T,null,n.createElement(O,null,n.createElement(F,null,n.createElement(j,null,"General"),n.createElement(A,{to:"/aboutUs"},"About Us")),n.createElement(F,null,n.createElement(j,null,"Events"),n.createElement(A,{to:"/mainEvents"},"Overview"),n.createElement(A,{to:"/subEvents/latestEvent"},"PITCH IT")),n.createElement(F,null,n.createElement(j,null,"More"),n.createElement(A,{to:"/programs"},"Programs"),n.createElement(A,{to:"/career"},"Career/Contact")))),n.createElement(M,null,n.createElement(P,null,n.createElement(R,{to:"/"},n.createElement(h.S,{src:"../../images/white_logo.png",loading:"eager",width:65,quality:100,formats:["auto","webp","avif"],alt:"",placeholder:"transparent",style:{marginRight:"0.5rem"},__imageData:a(7944)}),"MARKETYZE"),n.createElement(q,null,"Marketyze © ",(new Date).getFullYear()," All rights reserved."),n.createElement(W,null,n.createElement(D,{href:"https://www.facebook.com/marketyzeca/",target:"_blank","aria-label":"Facebook"},n.createElement(i.Am9,null)),n.createElement(D,{href:"https://www.instagram.com/marketyze.ca/?hl=en",target:"_blank","aria-label":"Instagram"},n.createElement(i.Zf_,null)),n.createElement(D,{href:"https://ca.linkedin.com/company/marketyzeca",target:"_blank","aria-label":"Linkedin"},n.createElement(i.ltd,null)))))));const I=l.default.div.withConfig({displayName:"footerElements__FooterContainer",componentId:"sc-8u9b64-0"})(["font-family:'Lato',sans-serif;background-color:",";"],v.O.darkTeal),z=l.default.div.withConfig({displayName:"footerElements__FooterWrap",componentId:"sc-8u9b64-1"})(["padding:48px 24px;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1100px;margin:0 auto;"]),T=l.default.div.withConfig({displayName:"footerElements__FooterLinksContainer",componentId:"sc-8u9b64-2"})(["display:flex;justify-content:center;@media screen and (max-width:820px){padding-top:32px;position:relative;left:2rem;}@media screen and (max-width:480px){left 0.5rem;}"]),O=l.default.div.withConfig({displayName:"footerElements__FooterLinksWrapper",componentId:"sc-8u9b64-3"})(["display:flex;@media screen and (max-width:820px){flex-direction:column;}"]),F=l.default.div.withConfig({displayName:"footerElements__FooterLinkItems",componentId:"sc-8u9b64-4"})(["display:flex;flex-direction:column;align-items:flex-start;margin:16px;text-align:left;width:160px;box-sizing:border-box;color:#fff;@media screen and (max-width:420px){margin:0;padding:10px;width:100%;}"]),j=l.default.h1.withConfig({displayName:"footerElements__FooterLinkTitle",componentId:"sc-8u9b64-5"})(["font-size:14px;margin-bottom:16px;"]),A=(0,l.default)(r.Link).withConfig({displayName:"footerElements__FooterLink",componentId:"sc-8u9b64-6"})(["color:#fff;text-decoration:none;margin-bottom:0.5rem;font-size:14px;&:hover{color:",";transition:0.3s ease-out;}"],v.O.lightTeal),M=l.default.section.withConfig({displayName:"footerElements__SocialMedia",componentId:"sc-8u9b64-7"})(["max-width:1000px;width:100%;"]),P=l.default.div.withConfig({displayName:"footerElements__SocialMediaWrap",componentId:"sc-8u9b64-8"})(["display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:40px auto 0 auto;@media screen and (max-width:820px){flex-direction:column;}"]),R=(0,l.default)(r.Link).withConfig({displayName:"footerElements__SocialLogo",componentId:"sc-8u9b64-9"})(["color:#fff;justify-self:start;cursor:pointer;text-decoration:none;font-size:1.5rem;display:flex;align-items:center;margin-bottom:16px;font-weight:bold;"]),q=l.default.small.withConfig({displayName:"footerElements__WebsiteRights",componentId:"sc-8u9b64-10"})(["color:#fff;margin-bottom:16px;"]),W=l.default.div.withConfig({displayName:"footerElements__SocialIcons",componentId:"sc-8u9b64-11"})(["display:flex;justify-content:space-between;align-items:center;width:240px;"]),D=l.default.a.withConfig({displayName:"footerElements__SocialIconLink",componentId:"sc-8u9b64-12"})(["color:#fff;font-size:24px;"]);var H=e=>{let{children:t}=e;(0,r.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(L,null),n.createElement("main",null,t),n.createElement(S,null))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:i,title:o,children:l}=e;const{site:s}=(0,r.useStaticQuery)("63159454"),c=i||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?o+" | "+d:o),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:c}),l)}},4405:function(e,t,a){a.d(t,{w_:function(){return c},Pd:function(){return i}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(d,o({attr:o({},e.attr)},t),s(e.child))}}function d(e){var t=function(t){var a,r=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},7944:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/bd534a516796364271876b359ae3db46/0368b/white_logo.png","srcSet":"/static/bd534a516796364271876b359ae3db46/37077/white_logo.png 16w,\\n/static/bd534a516796364271876b359ae3db46/535b9/white_logo.png 33w,\\n/static/bd534a516796364271876b359ae3db46/0368b/white_logo.png 65w,\\n/static/bd534a516796364271876b359ae3db46/14744/white_logo.png 130w","sizes":"(min-width: 65px) 65px, 100vw"},"sources":[{"srcSet":"/static/bd534a516796364271876b359ae3db46/f8876/white_logo.avif 16w,\\n/static/bd534a516796364271876b359ae3db46/d6ec6/white_logo.avif 33w,\\n/static/bd534a516796364271876b359ae3db46/47ba1/white_logo.avif 65w,\\n/static/bd534a516796364271876b359ae3db46/70e3d/white_logo.avif 130w","type":"image/avif","sizes":"(min-width: 65px) 65px, 100vw"},{"srcSet":"/static/bd534a516796364271876b359ae3db46/fbaad/white_logo.webp 16w,\\n/static/bd534a516796364271876b359ae3db46/012f9/white_logo.webp 33w,\\n/static/bd534a516796364271876b359ae3db46/74c7a/white_logo.webp 65w,\\n/static/bd534a516796364271876b359ae3db46/fbb26/white_logo.webp 130w","type":"image/webp","sizes":"(min-width: 65px) 65px, 100vw"}]},"width":65,"height":34}')},7803:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/97201bf409cae158923cf03c9feed90c/d937b/marketyze_logo.png","srcSet":"/static/97201bf409cae158923cf03c9feed90c/5d8d8/marketyze_logo.png 14w,\\n/static/97201bf409cae158923cf03c9feed90c/7e5e5/marketyze_logo.png 28w,\\n/static/97201bf409cae158923cf03c9feed90c/d937b/marketyze_logo.png 55w,\\n/static/97201bf409cae158923cf03c9feed90c/8ee40/marketyze_logo.png 110w","sizes":"(min-width: 55px) 55px, 100vw"},"sources":[{"srcSet":"/static/97201bf409cae158923cf03c9feed90c/25840/marketyze_logo.avif 14w,\\n/static/97201bf409cae158923cf03c9feed90c/81dca/marketyze_logo.avif 28w,\\n/static/97201bf409cae158923cf03c9feed90c/3537f/marketyze_logo.avif 55w,\\n/static/97201bf409cae158923cf03c9feed90c/4c30d/marketyze_logo.avif 110w","type":"image/avif","sizes":"(min-width: 55px) 55px, 100vw"},{"srcSet":"/static/97201bf409cae158923cf03c9feed90c/c07e9/marketyze_logo.webp 14w,\\n/static/97201bf409cae158923cf03c9feed90c/981e9/marketyze_logo.webp 28w,\\n/static/97201bf409cae158923cf03c9feed90c/a62a2/marketyze_logo.webp 55w,\\n/static/97201bf409cae158923cf03c9feed90c/83ca3/marketyze_logo.webp 110w","type":"image/webp","sizes":"(min-width: 55px) 55px, 100vw"}]},"width":55,"height":29}')}}]);
//# sourceMappingURL=commons-fbd0e0db8d2353a1112d.js.map