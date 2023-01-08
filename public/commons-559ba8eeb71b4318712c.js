"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return v},S:function(){return j},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return s}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],u=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,m);return n.createElement(n.Fragment,null,n.createElement(u,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:s}=e,c=l(e,f);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=l(e,g);const s=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(h,o({},i,t,{sizes:s,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s})})),c):c};var b;h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=l(e,w);return t?n.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:r.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(y,o({},e)),n.createElement("noscript",null,n.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const x=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:i().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],L=new Set;let N,z;const I=function(e){let{as:t="div",image:r,style:i,backgroundColor:c,className:d,class:m,onStartLoad:u,onLoad:p,onError:f}=e,g=l(e,k);const{width:h,height:y,layout:b}=r,w=function(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(h,y,b),{style:v,className:E}=w,x=l(w,C),_=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const S=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,h,y);return(0,n.useEffect)((()=>{N||(N=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(I);if(z&&L.has(I))return;let t,n;return N.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;_.current&&(_.current.innerHTML=a(o({isLoading:!0,isLoaded:L.has(I),image:r},g)),L.has(I)||(t=requestAnimationFrame((()=>{_.current&&(n=l(_.current,I,L,i,u,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{L.has(I)&&z&&(_.current.innerHTML=z(o({isLoading:L.has(I),isLoaded:L.has(I),image:r},g)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},x,{style:o({},v,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:_,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},S=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));S.propTypes=_,S.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:x,width:T,height:T,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(M=S,function(e){let{src:t,__imageData:a,__error:r}=e,i=l(e,O);return r&&console.warn(r),a?n.createElement(M,o({image:a},i)):(console.warn("Image not loaded",t),null)});var M;j.displayName="StaticImage",j.propTypes=A},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let r=0;r<e.length;r++){const i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},4651:function(e,t,a){a.d(t,{O:function(){return n}});const n={primaryTeal:"#008CA0",black:"#012327",white:"#fff",darkTeal:"#015A6D",lightTeal:"#91D7DD",grey:"#9AA3AF"}},8571:function(e,t,a){a.d(t,{Z:function(){return M}});var n=a(7294),r=a(1883),i=a(9583),o=a(4405),l=a(2788);const s="#008CA0",c=l.default.nav.withConfig({displayName:"navBarElements__Nav",componentId:"sc-1cmybn-0"})(["background:",";transition:",";height:70px;display:flex;justify-content:center;position:sticky;top:0;z-index:999;opacity:0.97;@media screen and (max-width:960px){background:",";transition:0.8s all ease;}"],(e=>{let{active:t}=e;return t?"#fcfcfc":"linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"}),(e=>{let{active:t}=e;return t?"0.3s all ease":"0.4s all ease"}),(e=>{let{click:t}=e;return t?"#fff":"transparent"})),d=l.default.div.withConfig({displayName:"navBarElements__NavbarContainer",componentId:"sc-1cmybn-1"})(["display:flex;justify-content:space-between;height:70px;width:100%;max-width:1000px;"]),m=(0,l.default)(r.Link).withConfig({displayName:"navBarElements__NavLogo",componentId:"sc-1cmybn-2"})(["color:",';justify-self:flex-start;cursor:pointer;text-decoration:none;font-size:2rem;font-weight:bold;display:flex;align-items:center;font-family:"Arial",sans-serif;'],s),u=l.default.ul.withConfig({displayName:"navBarElements__NavMenu",componentId:"sc-1cmybn-3"})(["display:flex;align-items:center;list-style:none;text-align:center;@media screen and (max-width:960px){display:flex;flex-direction:column;width:100%;height:90vh;position:absolute;top:",";opacity:1;transition:all 0.2 ease;background:#fff;}"],(e=>{let{click:t}=e;return t?"100%":"-1000px"})),p=(0,l.default)(r.Link).withConfig({displayName:"navBarElements__NavLinks",componentId:"sc-1cmybn-4"})(["color:",';display:flex;align-items:center;text-decoration:none;padding:0.5rem 1rem;height:100%;font-family:"Arial",sans-serif;font-size:1.2rem;font-weight:bold;@media screen and (max-width:960px){text-align:center;padding:2rem;width:100%;display:table;}&:hover{color:',";transition:all 0.3 ease;}"],s,"#91D7DD"),f=l.default.li.withConfig({displayName:"navBarElements__NavItem",componentId:"sc-1cmybn-5"})(["height:80px;@media screen and (max-width:960px){width:100%;}"]),g=l.default.div.withConfig({displayName:"navBarElements__MobileIcon",componentId:"sc-1cmybn-6"})(["display:none;@media screen and (max-width:960px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,60%);font-size:1.8rem;cursor:pointer;}"]);var h=a(3723);const y=[{title:"PITCH IT",path:"/subEvents/latestEvent",cName:"dropdown-link"}];var b=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:i}=(0,n.useState)(!1),o=()=>{window.scrollY>=80?i(!0):i(!1)};return(0,n.useEffect)((()=>{o(),window.addEventListener("scroll",o)}),[]),n.createElement(n.Fragment,null,n.createElement("ul",{onClick:()=>t(!e),className:e?"dropdown-menu clicked":"dropdown-menu"},y.map(((e,i)=>n.createElement(w,{active:a,key:i},n.createElement(r.Link,{className:e.cName,to:e.path,onClick:()=>t(!1)},e.title))))))};const w=l.default.li.withConfig({displayName:"dropdownEvents__DropLi",componentId:"sc-1s7y48p-0"})(["  transition:",";background:",";cursor:pointer;border-radius:0px 0px 5px 5px;"],(e=>{let{active:t}=e;return t?"0.3s all ease":"0.4s all ease"}),(e=>{let{active:t}=e;return t?"#fcfcfc":"linear-gradient(to bottom, rgba(255,255,255,0.9), 0%, rgba(255,255,255,0) 100%)"}));var v=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:l}=(0,n.useState)(!1),s=()=>t(!e),{0:y,1:w}=(0,n.useState)(!1),v=()=>{window.scrollY>=80?l(!0):l(!1)};return(0,n.useEffect)((()=>{v(),window.addEventListener("scroll",v)}),[]),n.createElement(o.Pd.Provider,{value:{color:"#141414"}},n.createElement(c,{active:r,click:e},n.createElement(d,null,n.createElement(m,{to:"/"},n.createElement(h.S,{src:"../../images/marketyze_logo.png",loading:"eager",width:64,quality:95,formats:["auto","webp","avif"],alt:"",placeholder:"transparent",style:{marginRight:"0.5rem"},__imageData:a(8240)}),"MARKETYZE"),n.createElement(g,{onClick:s},e?n.createElement(i.aHS,null):n.createElement(i.Fm7,null)),n.createElement(u,{onClick:s,click:e},n.createElement(f,null,n.createElement(p,{to:"/aboutUs"},"About Us")),n.createElement(f,{onMouseEnter:()=>{window.innerWidth<960?w(!1):w(!0)},onMouseLeave:()=>{window.innerWidth,w(!1)}},n.createElement(p,{to:"/mainEvents"},"Events"),y&&n.createElement(b,null)),n.createElement(f,null,n.createElement(p,{to:"/programs"},"Programs")),n.createElement(f,null,n.createElement(p,{to:"/career"},"Career/Contact"))))))},E=a(4651);var x=()=>n.createElement(_,null,n.createElement(k,null,n.createElement(C,null,n.createElement(L,null,n.createElement(N,null,n.createElement(z,null,"General"),n.createElement(I,{to:"/aboutUs"},"About Us")),n.createElement(N,null,n.createElement(z,null,"Events"),n.createElement(I,{to:"/mainEvents"},"Overview"),n.createElement(I,{to:"/subEvents/latestEvent"},"PITCH IT")),n.createElement(N,null,n.createElement(z,null,"More"),n.createElement(I,{to:"/programs"},"Programs"),n.createElement(I,{to:"/career"},"Career/Contact")))),n.createElement(S,null,n.createElement(O,null,n.createElement(T,{to:"/"},n.createElement(h.S,{src:"../../images/White_logo.png",loading:"eager",width:65,quality:100,formats:["auto","webp","avif"],alt:"",placeholder:"transparent",style:{marginRight:"0.5rem"},__imageData:a(4924)}),"MARKETYZE"),n.createElement(W,null,"Marketyze © ",(new Date).getFullYear()," All rights reserved."),n.createElement(A,null,n.createElement(j,{href:"https://www.facebook.com/marketyzeca/",target:"_blank","aria-label":"Facebook"},n.createElement(i.Am9,null)),n.createElement(j,{href:"https://www.instagram.com/marketyze.ca/?hl=en",target:"_blank","aria-label":"Instagram"},n.createElement(i.Zf_,null)),n.createElement(j,{href:"https://ca.linkedin.com/company/marketyzeca",target:"_blank","aria-label":"Linkedin"},n.createElement(i.ltd,null)))))));const _=l.default.div.withConfig({displayName:"footerElements__FooterContainer",componentId:"sc-8u9b64-0"})(["font-family:'UsualExtraBold',sans-serif;background-color:",";"],E.O.darkTeal),k=l.default.div.withConfig({displayName:"footerElements__FooterWrap",componentId:"sc-8u9b64-1"})(["padding:48px 24px;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1100px;margin:0 auto;"]),C=l.default.div.withConfig({displayName:"footerElements__FooterLinksContainer",componentId:"sc-8u9b64-2"})(["display:flex;justify-content:center;@media screen and (max-width:820px){padding-top:32px;}"]),L=l.default.div.withConfig({displayName:"footerElements__FooterLinksWrapper",componentId:"sc-8u9b64-3"})(["display:flex;@media screen and (max-width:820px){flex-direction:column;}"]),N=l.default.div.withConfig({displayName:"footerElements__FooterLinkItems",componentId:"sc-8u9b64-4"})(["display:flex;flex-direction:column;align-items:flex-start;margin:16px;text-align:left;width:160px;box-sizing:border-box;color:#fff;@media screen and (max-width:420px){margin:0;padding:10px;width:100%;}"]),z=l.default.h1.withConfig({displayName:"footerElements__FooterLinkTitle",componentId:"sc-8u9b64-5"})(["font-size:14px;margin-bottom:16px;"]),I=(0,l.default)(r.Link).withConfig({displayName:"footerElements__FooterLink",componentId:"sc-8u9b64-6"})(["color:#fff;text-decoration:none;margin-bottom:0.5rem;font-size:14px;&:hover{color:",";transition:0.3s ease-out;}"],E.O.lightTeal),S=l.default.section.withConfig({displayName:"footerElements__SocialMedia",componentId:"sc-8u9b64-7"})(["max-width:1000px;width:100%;"]),O=l.default.div.withConfig({displayName:"footerElements__SocialMediaWrap",componentId:"sc-8u9b64-8"})(["display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:40px auto 0 auto;@media screen and (max-width:820px){flex-direction:column;}"]),T=(0,l.default)(r.Link).withConfig({displayName:"footerElements__SocialLogo",componentId:"sc-8u9b64-9"})(["color:#fff;justify-self:start;cursor:pointer;text-decoration:none;font-size:1.5rem;display:flex;align-items:center;margin-bottom:16px;font-weight:bold;"]),W=l.default.small.withConfig({displayName:"footerElements__WebsiteRights",componentId:"sc-8u9b64-10"})(["color:#fff;margin-bottom:16px;"]),A=l.default.div.withConfig({displayName:"footerElements__SocialIcons",componentId:"sc-8u9b64-11"})(["display:flex;justify-content:space-between;align-items:center;width:240px;"]),j=l.default.a.withConfig({displayName:"footerElements__SocialIconLink",componentId:"sc-8u9b64-12"})(["color:#fff;font-size:24px;"]);var M=e=>{let{children:t}=e;(0,r.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(v,null),n.createElement("main",null,t),n.createElement(x,null))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:i,title:o,children:l}=e;const{site:s}=(0,r.useStaticQuery)("63159454"),c=i||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?o+" | "+d:o),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:c}),l)}},4405:function(e,t,a){a.d(t,{w_:function(){return c},Pd:function(){return i}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(d,o({attr:o({},e.attr)},t),s(e.child))}}function d(e){var t=function(t){var a,r=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},8240:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/97201bf409cae158923cf03c9feed90c/f8500/marketyze_logo.png","srcSet":"/static/97201bf409cae158923cf03c9feed90c/520ec/marketyze_logo.png 16w,\\n/static/97201bf409cae158923cf03c9feed90c/ecb93/marketyze_logo.png 32w,\\n/static/97201bf409cae158923cf03c9feed90c/f8500/marketyze_logo.png 64w,\\n/static/97201bf409cae158923cf03c9feed90c/637d4/marketyze_logo.png 128w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/97201bf409cae158923cf03c9feed90c/92240/marketyze_logo.avif 16w,\\n/static/97201bf409cae158923cf03c9feed90c/5b555/marketyze_logo.avif 32w,\\n/static/97201bf409cae158923cf03c9feed90c/7a08f/marketyze_logo.avif 64w,\\n/static/97201bf409cae158923cf03c9feed90c/aea26/marketyze_logo.avif 128w","type":"image/avif","sizes":"(min-width: 64px) 64px, 100vw"},{"srcSet":"/static/97201bf409cae158923cf03c9feed90c/39f72/marketyze_logo.webp 16w,\\n/static/97201bf409cae158923cf03c9feed90c/66199/marketyze_logo.webp 32w,\\n/static/97201bf409cae158923cf03c9feed90c/1cda2/marketyze_logo.webp 64w,\\n/static/97201bf409cae158923cf03c9feed90c/c6b1d/marketyze_logo.webp 128w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":34}')},4924:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/bd534a516796364271876b359ae3db46/0368b/White_logo.png","srcSet":"/static/bd534a516796364271876b359ae3db46/37077/White_logo.png 16w,\\n/static/bd534a516796364271876b359ae3db46/535b9/White_logo.png 33w,\\n/static/bd534a516796364271876b359ae3db46/0368b/White_logo.png 65w,\\n/static/bd534a516796364271876b359ae3db46/14744/White_logo.png 130w","sizes":"(min-width: 65px) 65px, 100vw"},"sources":[{"srcSet":"/static/bd534a516796364271876b359ae3db46/f8876/White_logo.avif 16w,\\n/static/bd534a516796364271876b359ae3db46/d6ec6/White_logo.avif 33w,\\n/static/bd534a516796364271876b359ae3db46/47ba1/White_logo.avif 65w,\\n/static/bd534a516796364271876b359ae3db46/70e3d/White_logo.avif 130w","type":"image/avif","sizes":"(min-width: 65px) 65px, 100vw"},{"srcSet":"/static/bd534a516796364271876b359ae3db46/fbaad/White_logo.webp 16w,\\n/static/bd534a516796364271876b359ae3db46/012f9/White_logo.webp 33w,\\n/static/bd534a516796364271876b359ae3db46/74c7a/White_logo.webp 65w,\\n/static/bd534a516796364271876b359ae3db46/fbb26/White_logo.webp 130w","type":"image/webp","sizes":"(min-width: 65px) 65px, 100vw"}]},"width":65,"height":34}')}}]);
//# sourceMappingURL=commons-559ba8eeb71b4318712c.js.map