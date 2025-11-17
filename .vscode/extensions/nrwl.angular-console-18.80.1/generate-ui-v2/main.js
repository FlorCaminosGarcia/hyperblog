var Al=Object.defineProperty;var _l=Object.getOwnPropertyDescriptor;var g=(r,e,t,o)=>{for(var i=o>1?void 0:o?_l(e,t):e,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(o?s(e,t,i):s(i))||i);return o&&i&&Al(e,t,i),i};var os=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(e){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=e}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}};var ye=function(r,e,t,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},X=function(r,e,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!o:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(r):o?o.value:e.get(r)},Et,Kr,eo,dr,Ri,hr,to,st,pr,Ge,ro,is,ns=r=>typeof r=="boolean"?r:r?.capture??!1;var Rl=class{constructor(){this.__eventListeners=new Map,this.__captureEventListeners=new Map}addEventListener(e,t,o){if(t==null)return;let i=ns(o)?this.__captureEventListeners:this.__eventListeners,n=i.get(e);if(n===void 0)n=new Map,i.set(e,n);else if(n.has(t))return;let s=typeof o=="object"&&o?o:{};s.signal?.addEventListener("abort",()=>this.removeEventListener(e,t,o)),n.set(t,s??{})}removeEventListener(e,t,o){if(t==null)return;let i=ns(o)?this.__captureEventListeners:this.__eventListeners,n=i.get(e);n!==void 0&&(n.delete(t),n.size||i.delete(e))}dispatchEvent(e){let t=[this],o=this.__eventTargetParent;if(e.composed)for(;o;)t.push(o),o=o.__eventTargetParent;else for(;o&&o!==this.__host;)t.push(o),o=o.__eventTargetParent;let i=!1,n=!1,s=0,a=null,l=null,c=null,u=e.stopPropagation,p=e.stopImmediatePropagation;Object.defineProperties(e,{target:{get(){return a??l},...R},srcElement:{get(){return e.target},...R},currentTarget:{get(){return c},...R},eventPhase:{get(){return s},...R},composedPath:{value:()=>t,...R},stopPropagation:{value:()=>{i=!0,u.call(e)},...R},stopImmediatePropagation:{value:()=>{n=!0,p.call(e)},...R}});let m=(T,G,nt)=>{typeof T=="function"?T(e):typeof T?.handleEvent=="function"&&T.handleEvent(e),G.once&&nt.delete(T)},y=()=>(c=null,s=0,!e.defaultPrevented),A=t.slice().reverse();a=!this.__host||!e.composed?this:null;let k=T=>{for(l=this;l.__host&&T.includes(l.__host);)l=l.__host};for(let T of A){!a&&(!l||l===T.__host)&&k(A.slice(A.indexOf(T))),c=T,s=T===e.target?2:1;let G=T.__captureEventListeners.get(e.type);if(G){for(let[nt,je]of G)if(m(nt,je,G),n)return y()}if(i)return y()}let j=e.bubbles?t:[this];l=null;for(let T of j){!a&&(!l||T===l.__host)&&k(j.slice(0,j.indexOf(T)+1)),c=T,s=T===e.target?2:3;let G=T.__eventListeners.get(e.type);if(G){for(let[nt,je]of G)if(m(nt,je,G),n)return y()}if(i)return y()}return y()}},Oi=Rl;var R={__proto__:null};R.enumerable=!0;Object.freeze(R);var Ti=(Ge=class{constructor(e,t={}){if(Et.set(this,!1),Kr.set(this,!1),eo.set(this,!1),dr.set(this,!1),Ri.set(this,Date.now()),hr.set(this,!1),to.set(this,void 0),st.set(this,void 0),pr.set(this,void 0),this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,arguments.length===0)throw new Error("The type argument must be specified");if(typeof t!="object"||!t)throw new Error('The "options" argument must be an object');let{bubbles:o,cancelable:i,composed:n}=t;ye(this,Et,!!i,"f"),ye(this,Kr,!!o,"f"),ye(this,eo,!!n,"f"),ye(this,to,`${e}`,"f"),ye(this,st,null,"f"),ye(this,pr,!1,"f")}initEvent(e,t,o){throw new Error("Method not implemented.")}stopImmediatePropagation(){this.stopPropagation()}preventDefault(){ye(this,dr,!0,"f")}get target(){return X(this,st,"f")}get currentTarget(){return X(this,st,"f")}get srcElement(){return X(this,st,"f")}get type(){return X(this,to,"f")}get cancelable(){return X(this,Et,"f")}get defaultPrevented(){return X(this,Et,"f")&&X(this,dr,"f")}get timeStamp(){return X(this,Ri,"f")}composedPath(){return X(this,pr,"f")?[X(this,st,"f")]:[]}get returnValue(){return!X(this,Et,"f")||!X(this,dr,"f")}get bubbles(){return X(this,Kr,"f")}get composed(){return X(this,eo,"f")}get eventPhase(){return X(this,pr,"f")?Ge.AT_TARGET:Ge.NONE}get cancelBubble(){return X(this,hr,"f")}set cancelBubble(e){e&&ye(this,hr,!0,"f")}stopPropagation(){ye(this,hr,!0,"f")}get isTrusted(){return!1}},Et=new WeakMap,Kr=new WeakMap,eo=new WeakMap,dr=new WeakMap,Ri=new WeakMap,hr=new WeakMap,to=new WeakMap,st=new WeakMap,pr=new WeakMap,Ge.NONE=0,Ge.CAPTURING_PHASE=1,Ge.AT_TARGET=2,Ge.BUBBLING_PHASE=3,Ge);Object.defineProperties(Ti.prototype,{initEvent:R,stopImmediatePropagation:R,preventDefault:R,target:R,currentTarget:R,srcElement:R,type:R,cancelable:R,defaultPrevented:R,timeStamp:R,composedPath:R,returnValue:R,bubbles:R,composed:R,eventPhase:R,cancelBubble:R,stopPropagation:R,isTrusted:R});var ss=(is=class extends Ti{constructor(e,t={}){super(e,t),ro.set(this,void 0),ye(this,ro,t?.detail??null,"f")}initCustomEvent(e,t,o,i){throw new Error("Method not implemented.")}get detail(){return X(this,ro,"f")}},ro=new WeakMap,is);Object.defineProperties(ss.prototype,{detail:R});var Fi=Ti,Vi=ss;globalThis.Event??=Fi;globalThis.CustomEvent??=Vi;var as=new WeakMap,fr=r=>{let e=as.get(r);return e===void 0&&as.set(r,e=new Map),e},Ol=class extends Oi{constructor(){super(...arguments),this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(fr(this)).map(([e,t])=>({name:e,value:t}))}get shadowRoot(){return this.__shadowRootMode==="closed"?null:this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){return this.localName?.toUpperCase()}setAttribute(e,t){fr(this).set(e,String(t))}removeAttribute(e){fr(this).delete(e)}toggleAttribute(e,t){if(this.hasAttribute(e)){if(t===void 0||!t)return this.removeAttribute(e),!1}else return t===void 0||t?(this.setAttribute(e,""),!0):!1;return!0}hasAttribute(e){return fr(this).has(e)}attachShadow(e){let t={host:this};return this.__shadowRootMode=e.mode,e&&e.mode==="open"&&(this.__shadowRoot=t),t}attachInternals(){if(this.__internals!==null)throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let e=new os(this);return this.__internals=e,e}getAttribute(e){return fr(this).get(e)??null}};var Tl=class extends Ol{},Ii=Tl;globalThis.litServerRoot??=Object.defineProperty(new Ii,"localName",{get(){return"lit-server-root"}});var Fl=class{constructor(){this.__definitions=new Map}define(e,t){if(this.__definitions.has(e))if(process.env.NODE_ENV==="development")console.warn(`'CustomElementRegistry' already has "${e}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);else throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);t.__localName=e,this.__definitions.set(e,{ctor:t,observedAttributes:t.observedAttributes??[]})}get(e){return this.__definitions.get(e)?.ctor}},Vl=Fl;var ls=new Vl;var mr=globalThis,oo=mr.ShadowRoot&&(mr.ShadyCSS===void 0||mr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pi=Symbol(),cs=new WeakMap,gr=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Pi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(oo&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=cs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&cs.set(t,e))}return e}toString(){return this.cssText}},us=r=>new gr(typeof r=="string"?r:r+"",void 0,Pi),io=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new gr(t,r,Pi)},Li=(r,e)=>{oo?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),i=mr.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,r.appendChild(o)})},no=oo||mr.CSSStyleSheet===void 0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return us(t)})(r):r;var ds,Di,At=globalThis;(ds=At.customElements)!==null&&ds!==void 0||(At.customElements=ls);var hs=At.trustedTypes,Il=hs?hs.emptyScript:"",ps=At.reactiveElementPolyfillSupport,Ni={toAttribute(r,e){switch(e){case Boolean:r=r?Il:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},fs=(r,e)=>e!==r&&(e==e||r==r),Mi={attribute:!0,type:String,converter:Ni,reflect:!1,hasChanged:fs},Bi="finalized",Oe=class extends(globalThis.HTMLElement??Ii){constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=Mi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){let n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Mi}static finalize(){if(this.hasOwnProperty(Bi))return!1;this[Bi]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(no(i))}else e!==void 0&&t.push(no(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Li(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Mi){var i;let n=this.constructor._$Ep(e,o);if(n!==void 0&&o.reflect===!0){let s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Ni).toAttribute(t,o.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var o;let i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){let s=i.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:Ni;this._$El=n,this[n]=a.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||fs)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Oe[Bi]=!0,Oe.elementProperties=new Map,Oe.elementStyles=[],Oe.shadowRootOptions={mode:"open"},ps?.({ReactiveElement:Oe}),((Di=At.reactiveElementVersions)!==null&&Di!==void 0?Di:At.reactiveElementVersions=[]).push("1.6.3");var Hi,br=globalThis,_t=br.trustedTypes,ms=_t?_t.createPolicy("lit-html",{createHTML:r=>r}):void 0,so="$lit$",Te=`lit$${(Math.random()+"").slice(9)}$`,Gi="?"+Te,Pl=`<${Gi}>`,ct=br.document===void 0?{createTreeWalker:()=>({})}:document,xr=()=>ct.createComment(""),yr=r=>r===null||typeof r!="object"&&typeof r!="function",Cs=Array.isArray,Ss=r=>Cs(r)||typeof r?.[Symbol.iterator]=="function",ji=`[ 	
\f\r]`,vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gs=/-->/g,vs=/>/g,at=RegExp(`>|${ji}(?:([^\\s"'>=/]+)(${ji}*=${ji}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bs=/'/g,xs=/"/g,$s=/^(?:script|style|textarea|title)$/i,ks=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=ks(1),Ku=ks(2),ut=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),ys=new WeakMap,lt=ct.createTreeWalker(ct,129,null,!1);function Es(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ms!==void 0?ms.createHTML(e):e}var As=(r,e)=>{let t=r.length-1,o=[],i,n=e===2?"<svg>":"",s=vr;for(let a=0;a<t;a++){let l=r[a],c,u,p=-1,m=0;for(;m<l.length&&(s.lastIndex=m,u=s.exec(l),u!==null);)m=s.lastIndex,s===vr?u[1]==="!--"?s=gs:u[1]!==void 0?s=vs:u[2]!==void 0?($s.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=at):u[3]!==void 0&&(s=at):s===at?u[0]===">"?(s=i??vr,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?at:u[3]==='"'?xs:bs):s===xs||s===bs?s=at:s===gs||s===vs?s=vr:(s=at,i=void 0);let y=s===at&&r[a+1].startsWith("/>")?" ":"";n+=s===vr?l+Pl:p>=0?(o.push(c),l.slice(0,p)+so+l.slice(p)+Te+y):l+Te+(p===-2?(o.push(void 0),a):y)}return[Es(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),o]},wr=class r{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,s=0,a=e.length-1,l=this.parts,[c,u]=As(e,t);if(this.el=r.createElement(c,o),lt.currentNode=this.el.content,t===2){let p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(i=lt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let p=[];for(let m of i.getAttributeNames())if(m.endsWith(so)||m.startsWith(Te)){let y=u[s++];if(p.push(m),y!==void 0){let A=i.getAttribute(y.toLowerCase()+so).split(Te),k=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:k[2],strings:A,ctor:k[1]==="."?lo:k[1]==="?"?co:k[1]==="@"?uo:ht})}else l.push({type:6,index:n})}for(let m of p)i.removeAttribute(m)}if($s.test(i.tagName)){let p=i.textContent.split(Te),m=p.length-1;if(m>0){i.textContent=_t?_t.emptyScript:"";for(let y=0;y<m;y++)i.append(p[y],xr()),lt.nextNode(),l.push({type:2,index:++n});i.append(p[m],xr())}}}else if(i.nodeType===8)if(i.data===Gi)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(Te,p+1))!==-1;)l.push({type:7,index:n}),p+=Te.length-1}n++}}static createElement(e,t){let o=ct.createElement("template");return o.innerHTML=e,o}};function dt(r,e,t=r,o){var i,n,s,a;if(e===ut)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl,c=yr(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,o)),o!==void 0?((s=(a=t)._$Co)!==null&&s!==void 0?s:a._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=dt(r,l._$AS(r,e.values),l,o)),e}var ao=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:i}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:ct).importNode(o,!0);lt.currentNode=n;let s=lt.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Rt(s,s.nextSibling,this,e):c.type===1?u=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(u=new ho(s,this,e)),this._$AV.push(u),c=i[++l]}a!==c?.index&&(s=lt.nextNode(),a++)}return lt.currentNode=ct,n}v(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Rt=class r{constructor(e,t,o,i){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=dt(this,e,t),yr(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==ut&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ss(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&yr(this._$AH)?this._$AA.nextSibling.data=e:this.$(ct.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=wr.createElement(Es(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(o);else{let s=new ao(n,this),a=s.u(this.options);s.v(o),this.$(a),this._$AH=s}}_$AC(e){let t=ys.get(e.strings);return t===void 0&&ys.set(e.strings,t=new wr(e)),t}T(e){Cs(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let n of e)i===t.length?t.push(o=new r(this.k(xr()),this.k(xr()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ht=class{constructor(e,t,o,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){let n=this.strings,s=!1;if(n===void 0)e=dt(this,e,t,0),s=!yr(e)||e!==this._$AH&&e!==ut,s&&(this._$AH=e);else{let a=e,l,c;for(e=n[0],l=0;l<n.length-1;l++)c=dt(this,a[o+l],t,l),c===ut&&(c=this._$AH[l]),s||(s=!yr(c)||c!==this._$AH[l]),c===N?e=N:e!==N&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},lo=class extends ht{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},Ll=_t?_t.emptyScript:"",co=class extends ht{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,Ll):this.element.removeAttribute(this.name)}},uo=class extends ht{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=dt(this,e,t,0))!==null&&o!==void 0?o:N)===ut)return;let i=this._$AH,n=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},ho=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){dt(this,e)}},_s={O:so,P:Te,A:Gi,C:1,M:As,L:ao,R:Ss,D:dt,I:Rt,V:ht,H:co,N:uo,U:lo,F:ho},ws=br.litHtmlPolyfillSupport;ws?.(wr,Rt),((Hi=br.litHtmlVersions)!==null&&Hi!==void 0?Hi:br.litHtmlVersions=[]).push("2.8.0");var Rs=(r,e,t)=>{var o,i;let n=(o=t?.renderBefore)!==null&&o!==void 0?o:e,s=n._$litPart$;if(s===void 0){let a=(i=t?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new Rt(e.insertBefore(xr(),a),a,void 0,t??{})}return s._$AI(r),s};var zi,Ui;var C=class extends Oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ut}};C.finalized=!0,C._$litElement$=!0,(zi=globalThis.litElementHydrateSupport)===null||zi===void 0||zi.call(globalThis,{LitElement:C});var Os=globalThis.litElementPolyfillSupport;Os?.({LitElement:C});((Ui=globalThis.litElementVersions)!==null&&Ui!==void 0?Ui:globalThis.litElementVersions=[]).push("3.3.3");var E=r=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(r,e):((t,o)=>{let{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){customElements.define(t,s)}}})(r,e);var Dl=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},Ml=(r,e,t)=>{e.constructor.createProperty(t,r)};function _(r){return(e,t)=>t!==void 0?Ml(r,e,t):Dl(r,e)}function V(r){return _({...r,state:!0})}var qi,Ed=((qi=globalThis.HTMLSlotElement)===null||qi===void 0?void 0:qi.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function Y(r,e,t){return r?e():t?.()}var Ot=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o}};var se=class{constructor(e,t,o,i){var n;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){let s=t;this.context=s.context,this.callback=s.callback,this.subscribe=(n=s.subscribe)!==null&&n!==void 0&&n}else this.context=t,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ot(this.context,this.t,this.subscribe))}};var po=class{constructor(e){this.disposers=new Map,this.updateObservers=()=>{for(let[t,o]of this.disposers)t(this.o,o)},e!==void 0&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}addCallback(e,t){if(t){this.disposers.has(e)||this.disposers.set(e,()=>{this.disposers.delete(e)});let o=this.disposers.get(e);e(this.value,o)}else e(this.value)}clearCallbacks(){this.disposers.clear()}};var Wi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},we=class extends po{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new Wi(this.context))}};function Xi(r){return r?`${r.collectionName}:${r.generatorName}`:""}function Ts(r){return r?r.generatorName.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}function ze(r){if(r&&!(r.default===void 0||r.default===null))return Array.isArray(r.default)?r.default.map(e=>String(e)):r.type==="boolean"?!!r.default:String(r.default)??""}function mo(r,e){return!r&&!e?!0:Array.isArray(r)&&Array.isArray(e)?r.join(",")===e.join(","):r===e}function Fs(r,e){let t;return function(...o){clearTimeout(t),t=setTimeout(()=>{r.apply(this,o)},e)}.bind(r)}function Ue(r){return r.items?Array.isArray(r.items)?r.items:r.items.enum:[]}var go=class{constructor(e){this.payload=e;this.payloadType="request-validation"}},vo=class{constructor(e){this.payload=e;this.payloadType="copy-to-clipboard"}};var bo=Symbol("submitted");var Cr=Symbol("form-values"),xo=class{constructor(e){this.cwdValue=void 0;this.formValues={};this.validationResults={};this.debouncedRunGenerator=Fs(e=>this.runGenerator(e),500);this.validationListeners={};this.defaultValueListeners={};this.touchedListeners={};this.valueChangeListeners={};this.formValueListeners=[];this.icc=e.icc,this.submittedContextProvider=new we(e,{context:bo,initialValue:!1}),new we(e,{context:Cr,initialValue:this}),window.addEventListener("option-changed",t=>{t.detail&&this.handleOptionChange(t.detail)}),window.addEventListener("cwd-changed",async t=>{if(t.detail===void 0)return;let o=this.cwdValue===void 0;this.cwdValue=t.detail,!o&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&(this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.keys(this.validationResults).length===0&&this.debouncedRunGenerator(!0))})}getFormValues(){return this.formValues}async handleOptionChange(e){this.formValues={...this.formValues,[e.name]:e.value},this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.entries(this.validationListeners).forEach(([t,o])=>{o?.forEach(i=>i(this.validationResults[t]))}),e.isDefaultValue||(Object.keys(this.validationResults).length===0&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&this.debouncedRunGenerator(!0),this.touchedListeners[e.name]?.forEach(t=>t(!0))),this.defaultValueListeners[e.name]&&this.defaultValueListeners[e.name]?.forEach(t=>t(e.isDefaultValue))}async validate(e,t){if(!t)return{};let o=t.options,i={};Object.entries(e).forEach(([s,a])=>{let l=o.find(c=>c.name===s);l&&(l.pattern&&(new RegExp(l.pattern).test(String(a))||(i[s]=`Value should match the pattern '${l.pattern}'`)),l.isRequired&&(!a||Array.isArray(a)&&a.length===0)&&(i[s]="This field is required"))});let n=await this.icc.getValidationResults(e,t);return{...i,...n}}runGenerator(e=!1){let t=this.getSerializedFormValues();t.push("--no-interactive"),e&&t.push("--dry-run"),this.submittedContextProvider.setValue(!0),this.icc.postMessageToIde({payloadType:"run-generator",payload:{positional:Xi(this.icc.generatorSchema),flags:t,cwd:this.cwdValue?.toString()}})}copyCommandToClipboard(){let e=this.getSerializedFormValues(),o=`nx g ${Xi(this.icc.generatorSchema)} ${e.join(" ")}`;this.icc.editor==="vscode"?navigator.clipboard.writeText(o):this.icc.postMessageToIde(new vo(o))}getSerializedFormValues(){let e=[],t={...this.formValues,...this.icc.generatorSchema?.context?.fixedFormValues??{}};return Object.entries(t).forEach(([o,i])=>{let n=this.icc.generatorSchema?.options.find(l=>l.name===o),s=ze(n);if(mo(i,s))return;let a=i?.toString()??"";a.includes(" ")?a.includes('"')?e.push(`--${o}='${i}'`):e.push(`--${o}="${i}"`):e.push(`--${o}=${i}`)}),e}registerValidationListener(e,t){this.validationListeners[e]||(this.validationListeners[e]=[]),this.validationListeners[e].push(t)}registerDefaultValueListener(e,t){this.defaultValueListeners[e]||(this.defaultValueListeners[e]=[]),this.defaultValueListeners[e].push(t)}registerTouchedListener(e,t){this.touchedListeners[e]||(this.touchedListeners[e]=[]),this.touchedListeners[e].push(t)}registerValueChangeListener(e,t){this.valueChangeListeners[e]||(this.valueChangeListeners[e]=[]),this.valueChangeListeners[e].push(t)}registerFormValueListener(e){this.formValueListeners.push(e)}updateFormValuesFromIde(e){this.formValues={...this.formValues,...e},Object.entries(e).forEach(([t,o])=>{t==="cwd"&&typeof o=="string"&&(this.cwdValue=o),this.valueChangeListeners[t]?.forEach(i=>i(o))}),this.formValueListeners.forEach(t=>t(this.formValues))}};function L(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}function B(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)}var Yi=Symbol("editor"),z=r=>{class e extends r{constructor(...o){super(),new se(this,{context:Yi,callback:i=>{this.editor=i},subscribe:!0})}}return L([V(),B("design:type",String)],e.prototype,"editor",void 0),e};var yo=class extends z(C){render(){return d`
      <div
        tabindex="0"
        class="bg-badgeBackground text-badgeForeground focus:ring-focusBorder ${this.editorSpecificStyles()} flex flex-row gap-1 rounded p-2 pb-0 focus:outline-none"
        @keydown="${this.handleEnterKeyRemove}"
        data-cy="${this.fieldId}-item"
      >
        <p class="leading-none">${this.text}</p>
        <icon-element
          @click="${this.handleClickRemove}"
          icon="close"
          data-cy="${this.fieldId}-remove-button"
        ></icon-element>
      </div>
    `}editorSpecificStyles(){return this.editor==="intellij"?"border border-fieldBorder focus:ring-2":"focus:ring-1 focus:!ring-offset-1 focus:!ring-offset-background"}handleEnterKeyRemove(e){(e.key==="Enter"||e.key===" ")&&this.dispatchEvent(new CustomEvent("remove"))}handleClickRemove(){this.dispatchEvent(new CustomEvent("remove"))}createRenderRoot(){return this}};L([_(),B("design:type",String)],yo.prototype,"text",void 0);L([_(),B("design:type",String)],yo.prototype,"fieldId",void 0);yo=L([E("badge-element")],yo);var Sr=class extends z(C){constructor(){super(...arguments),this.message="",this.type="warning",this.dismissed=!1}dismiss(){this.dismissed=!0}render(){let e=this.type==="error"?"bg-bannerError":"bg-bannerWarning";return this.dismissed?d``:d`
      <div
        class="${e} text-bannerText mt-2 flex w-full flex-row rounded p-2 text-left opacity-80"
      >
        <p class="grow">${this.message}</p>
        <div @click="${this.dismiss}" class="px-2 py-1">
          ${this.editor==="intellij"?d`<icon-element
                icon="close"
                color="${getComputedStyle(this).getPropertyValue("--banner-text-color")}"
              ></icon-element>`:d`<icon-element icon="close"></icon-element>`}
        </div>
      </div>
    `}createRenderRoot(){return this}};L([_(),B("design:type",Object)],Sr.prototype,"message",void 0);L([_(),B("design:type",String)],Sr.prototype,"type",void 0);L([V(),B("design:type",Object)],Sr.prototype,"dismissed",void 0);Sr=L([E("banner-element")],Sr);var J="focus:ring-2 focus:ring-focusBorder focus:outline-none",Ce="bg-fieldBackground border border-fieldBorder",Se="px-2 py-1.5",qe=r=>r?"!ring-2 !ring-error focus:!ring-error":"",Vs=r=>r?"--border-width: 1; --field-border-color: var(--vscode-inputValidation-errorBorder); --focus-border-color: var(--vscode-inputValidation-errorBorder); --vscode-focusBorder: var(--vscode-inputValidation-errorBorder);":"";var ft=class extends z(C){constructor(){super(...arguments),this.appearance="primary",this.applyFillColor=!1,this.disabled=!1}render(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return this.appearance==="icon"?d`
        <vscode-button
          icon="${this.text}"
          ?disabled="${this.disabled}"
          aria-disabled="${this.disabled}"
          style="
          --vscode-button-background: none;
          --vscode-button-foreground: ${this.color??"var(--foreground-color)"};
          --vscode-button-hoverBackground: var(--field-nav-hover-color);"
          class="h-[1.25rem] w-[1.25rem]"
        >
        </vscode-button>
      `:d`<vscode-button
      ?secondary="${this.appearance==="secondary"}"
      ?disabled="${this.disabled}"
      aria-disabled="${this.disabled}"
      >${this.text}</vscode-button
    >`}renderIntellij(){if(this.appearance==="icon")return d`<div
        class="${this.disabled?"opacity-50 cursor-not-allowed":"hover:bg-fieldNavHoverBackground cursor-pointer"} rounded p-1"
      >
        <icon-element
          icon="${this.text}"
          color="${this.color}"
          ?applyFillColor="${this.applyFillColor}"
          ?disabled="${this.disabled}"
          aria-disabled="${this.disabled}"
        ></icon-element>
      </div>`;let e="whitespace-nowrap rounded px-4 py-1 transition-colors",t="";return this.appearance==="primary"?t=this.disabled?"bg-primary/60 text-white/60 cursor-not-allowed":"bg-primary text-white cursor-pointer hover:opacity-90 focus:!ring-offset-1 focus:!ring-offset-background":t=this.disabled?"border !border-fieldBorder text-foreground/40 cursor-not-allowed":"border !border-fieldBorder text-foreground cursor-pointer hover:opacity-90 focus:!border-focusBorder",d`<button
      class="${this.disabled?"":J} ${e} ${t}"
      ?disabled="${this.disabled}"
      aria-disabled="${this.disabled}"
    >
      ${this.text}
    </button>`}createRenderRoot(){return this}};L([_(),B("design:type",String)],ft.prototype,"text",void 0);L([_(),B("design:type",String)],ft.prototype,"appearance",void 0);L([_(),B("design:type",String)],ft.prototype,"color",void 0);L([_({type:Boolean}),B("design:type",Object)],ft.prototype,"applyFillColor",void 0);L([_({type:Boolean}),B("design:type",Object)],ft.prototype,"disabled",void 0);ft=L([E("button-element")],ft);var Tt=class extends z(C){constructor(){super(...arguments),this.color="",this.applyFillColor=!1,this.size=""}render(){if(this.editor==="intellij")return d`<img
        src="./icons/${this.icon}.svg"
        class="h-[${this.size??"1.25rem"}]"
        @load="${this.applyColorToSVG}"
      ></img>`;{let e="text-align: center;";return this.size?e+=` font-size: ${this.size};`:e+=" font-size: 0.9rem;",e+=` color: ${this.color};`,d`<span
        class="codicon codicon-${this.icon}"
        style="${e}"
      ></span>`}}async applyColorToSVG(){if(!this.color)return;let t=await(await fetch(`./icons/${this.icon}.svg`)).text(),i=new DOMParser().parseFromString(t,"image/svg+xml");i.querySelectorAll("path").forEach(a=>{this.applyFillColor&&a.setAttribute("fill",this.color),a.setAttribute("stroke",this.color)});let s=this.querySelector("img");s&&s.remove(),i.documentElement.classList.add("h-[1.25rem]"),this.appendChild(i.documentElement)}createRenderRoot(){return this}};L([_(),B("design:type",String)],Tt.prototype,"icon",void 0);L([_(),B("design:type",Object)],Tt.prototype,"color",void 0);L([_({type:Boolean}),B("design:type",Object)],Tt.prototype,"applyFillColor",void 0);L([_(),B("design:type",Object)],Tt.prototype,"size",void 0);Tt=L([E("icon-element")],Tt);var $r=Symbol("generatorContext"),wo=r=>{class e extends r{constructor(...i){super();new se(this,{context:$r,callback:n=>this.generatorContext=n,subscribe:!0})}}return g([V()],e.prototype,"generatorContext",2),e};var Co=class{constructor(e){this.host=e;this.pendingPluginValidationQueue=[];let t;try{t=acquireVsCodeApi()}catch{}this.editor=t?"vscode":"intellij",console.log("initializing ide communication for",this.editor),new we(e,{context:Yi,initialValue:this.editor}),this.generatorContextContextProvider=new we(e,{context:$r,initialValue:void 0}),t?this.setupVscodeCommunication(t):this.setupIntellijCommunication(),this.postMessageToIde({payloadType:"output-init"})}hostConnected(){}postMessageToIde(e){e.payloadType!=="request-validation"&&console.log("sending message to ide",e),this.postToIde(e)}async getValidationResults(e,t){let o=new Promise(i=>{this.pendingPluginValidationQueue.push(i)});return this.postMessageToIde(new go({formValues:e,schema:t})),await o}setupVscodeCommunication(e){window.addEventListener("message",t=>{let o=t.data;o&&(o.payloadType!=="validation-results"&&console.log("received message from vscode",o),this.handleInputMessage(o))}),this.postToIde=t=>e.postMessage(t)}setupIntellijCommunication(){window.intellijApi?.registerPostToWebviewCallback(e=>{if(e.payloadType==="styles"){this.setIntellijStyles(e.payload);return}this.handleInputMessage(e)}),this.postToIde=e=>{let t=JSON.stringify(e);window.intellijApi?.postToIde(t)}}handleInputMessage(e){switch(e.payloadType){case"generator":{this.generatorSchema=e.payload,this.generatorContextContextProvider.setValue(this.generatorSchema.context),this.host.requestUpdate();break}case"config":{this.configuration=e.payload,this.host.requestUpdate();break}case"banner":{this.banner=e.payload,this.host.requestUpdate();break}case"validation-results":{if(this.pendingPluginValidationQueue.length>0){let t=this.pendingPluginValidationQueue.shift();if(!t)break;t(e.payload)}break}case"update-form-values":{let t=this.host;t.formValuesService&&t.formValuesService.updateFormValuesFromIde(e.payload),this.host.requestUpdate();break}}}setIntellijStyles(e){let t=new CSSStyleSheet;t.replaceSync(`
    :root {
      --foreground-color: ${e.foregroundColor};
      --muted-foreground-color: ${e.mutedForegroundColor};
      --background-color: ${e.backgroundColor};
      --primary-color: ${e.primaryColor};
      --error-color: ${e.errorColor};
      --field-background-color: ${e.fieldBackgroundColor};
      --field-border-color: ${e.fieldBorderColor};
      --select-field-background-color: ${e.selectFieldBackgroundColor};
      --active-selection-background-color: ${e.activeSelectionBackgroundColor};
      --focus-border-color: ${e.focusBorderColor};
      --banner-warning-color: ${e.bannerWarningBackgroundColor};
      --banner-text-color: ${e.bannerTextColor};
      --badge-background-color: ${e.badgeBackgroundColor};
      --separator-color: ${e.separatorColor};
      --field-nav-hover-color: ${e.fieldNavHoverColor};
      --scrollbar-thumb-color: ${e.scrollbarThumbColor};
      font-family: ${e.fontFamily};
      font-size: ${e.fontSize};
    }
    `),document.adoptedStyleSheets=[t]}};var Fe=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Fe.trustedTypes===void 0&&(Fe.trustedTypes={createPolicy:(r,e)=>e});var Is={configurable:!1,enumerable:!1,writable:!1};Fe.FAST===void 0&&Reflect.defineProperty(Fe,"FAST",Object.assign({value:Object.create(null)},Is));var mt=Fe.FAST;if(mt.getById===void 0){let r=Object.create(null);Reflect.defineProperty(mt,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},Is))}var We=Object.freeze([]);function So(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var Qi=Fe.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(s){try{s.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function n(s){r.length<1&&Fe.requestAnimationFrame(i),r.push(s)}return Object.freeze({enqueue:n,process:i})}),Ps=Fe.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),Zi=Ps,kr=`fast-${Math.random().toString(36).substring(2,8)}`,Ji=`${kr}{`,$o=`}${kr}`,x=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(Zi!==Ps)throw new Error("The HTML policy can only be set once.");Zi=r},createHTML(r){return Zi.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(kr)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${kr}:`,""))},createInterpolationPlaceholder(r){return`${Ji}${r}${$o}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${kr}:${r}-->`},queueUpdate:Qi.enqueue,processUpdates:Qi.process,nextUpdate(){return new Promise(Qi.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var Ft=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,n=this.sub2;i!==void 0&&i.handleChange(o,e),n!==void 0&&n.handleChange(o,e)}else for(let i=0,n=t.length;i<n;++i)t[i].handleChange(o,e)}},Vt=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new Ft(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Ft(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var v=mt.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=x.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(c){let u=c.$fastController||e.get(c);return u===void 0&&(Array.isArray(c)?u=i(c):e.set(c,u=new Vt(c))),u}let s=So();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return o!==void 0&&o.watch(u,this.name),u[this.field]}setValue(u,p){let m=this.field,y=u[m];if(y!==p){u[m]=p;let A=u[this.callback];typeof A=="function"&&A.call(u,y,p),n(u).notify(this.name)}}}class l extends Ft{constructor(u,p,m=!1){super(u,p),this.binding=u,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,p){this.needsRefresh&&this.last!==null&&this.disconnect();let m=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let y=this.binding(u,p);return o=m,y}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,p){let m=this.last,y=n(u),A=m===null?this.first:{};if(A.propertySource=u,A.propertyName=p,A.notifier=y,y.subscribe(this,p),m!==null){if(!this.needsRefresh){let k;o=void 0,k=m.propertySource[m.propertyName],o=this,u===k&&(this.needsRefresh=!0)}m.next=A}this.last=A}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{let p=u;return p===void 0?{value:void 0,done:!0}:(u=u.next,{value:p,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:n,track(c,u){o!==void 0&&o.watch(c,u)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,u){n(c).notify(u)},defineProperty(c,u){typeof u=="string"&&(u=new a(u)),s(c).push(u),Reflect.defineProperty(c,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(p){u.setValue(this,p)}})},getAccessors:s,binding(c,u,p=this.isVolatileBinding(c)){return new l(c,u,p)},isVolatileBinding(c){return r.test(c.toString())}})});function $(r,e){v.defineProperty(r,e)}function Ds(r,e,t){return Object.assign({},t,{get:function(){return v.trackVolatile(),t.get.apply(this)}})}var Ls=mt.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),Xe=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Ls.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Ls.set(e)}};v.defineProperty(Xe.prototype,"index");v.defineProperty(Xe.prototype,"length");var Ye=Object.seal(new Xe);var It=class{constructor(){this.targetIndex=0}},Pt=class extends It{constructor(){super(...arguments),this.createPlaceholder=x.createInterpolationPlaceholder}},Lt=class extends It{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return x.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function Hl(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=v.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function jl(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function Gl(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function zl(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function Ul(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ql(r){x.setAttribute(this.target,this.targetName,r)}function Wl(r){x.setBooleanAttribute(this.target,this.targetName,r)}function Xl(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function Yl(r){this.target[this.targetName]=r}function Ql(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let n=0,s=i.length;n<s;++n){let a=i[n];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var gt=class extends Pt{constructor(e){super(),this.binding=e,this.bind=Hl,this.unbind=Gl,this.updateTarget=ql,this.isBindingVolatile=v.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Yl,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>x.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Wl;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=jl,this.unbind=Ul;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=Ql);break}}targetAtContent(){this.updateTarget=Xl,this.unbind=zl}createBehavior(e){return new Ki(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Ki=class{constructor(e,t,o,i,n,s,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=n,this.updateTarget=s,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Xe.setEvent(e);let t=this.binding(this.source,this.context);Xe.setEvent(null),t!==!0&&e.preventDefault()}};var en=null,tn=class r{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){en=this}static borrow(e){let t=en||new r;return t.directives=e,t.reset(),en=null,t}};function Zl(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(s=>typeof s=="string"?()=>s:(e=s.targetName||e,s.binding)),i=(s,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](s,a);return l},n=new gt(i);return n.targetName=e,n}var Jl=$o.length;function Ns(r,e){let t=e.split(Ji);if(t.length===1)return null;let o=[];for(let i=0,n=t.length;i<n;++i){let s=t[i],a=s.indexOf($o),l;if(a===-1)l=s;else{let c=parseInt(s.substring(0,a));o.push(r.directives[c]),l=s.substring(a+Jl)}l!==""&&o.push(l)}return o}function Ms(r,e,t=!1){let o=e.attributes;for(let i=0,n=o.length;i<n;++i){let s=o[i],a=s.value,l=Ns(r,a),c=null;l===null?t&&(c=new gt(()=>a),c.targetName=s.name):c=Zl(l),c!==null&&(e.removeAttributeNode(s),i--,n--,r.addFactory(c))}}function Kl(r,e,t){let o=Ns(r,e.textContent);if(o!==null){let i=e;for(let n=0,s=o.length;n<s;++n){let a=o[n],l=n===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function Bs(r,e){let t=r.content;document.adoptNode(t);let o=tn.borrow(e);Ms(o,r,!0);let i=o.behaviorFactories;o.reset();let n=x.createTemplateWalker(t),s;for(;s=n.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:Ms(o,s);break;case 3:Kl(o,s,n);break;case 8:x.isMarker(s)&&o.addFactory(e[x.extractDirectiveIndexFromMarker(s)])}let a=0;(x.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var rn=document.createRange(),ko=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,n;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let n=this.behaviors,s=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(s)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let n=0,s=o.length;n<s;++n){let a=o[n];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,n=o.length;i<n;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){rn.setStartBefore(e[0].firstChild),rn.setEndAfter(e[e.length-1].lastChild),rn.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],n=i.behaviors,s=i.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(s)}}}};var Eo=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,u=this.html;if(typeof u=="string"){c=document.createElement("template"),c.innerHTML=x.createHTML(u);let m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=u;let p=Bs(c,this.directives);this.fragment=p.fragment,this.viewBehaviorFactories=p.viewBehaviorFactories,this.hostBehaviorFactories=p.hostBehaviorFactories,this.targetOffset=p.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),n=x.createTemplateWalker(t),s=0,a=this.targetOffset,l=n.nextNode();for(let c=o.length;s<c;++s){let u=o[s],p=u.targetIndex;for(;l!==null;)if(a===p){i[s]=u.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let u=0,p=c.length;u<p;++u,++s)i[s]=c[u].createBehavior(e)}return new ko(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,Ye),i.appendTo(t),i}},ec=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ve(r,...e){let t=[],o="";for(let i=0,n=r.length-1;i<n;++i){let s=r[i],a=e[i];if(o+=s,a instanceof Eo){let l=a;a=()=>l}if(typeof a=="function"&&(a=new gt(a)),a instanceof Pt){let l=ec.exec(s);l!==null&&(a.targetName=l[2])}a instanceof It?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new Eo(o,t)}var D=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};D.create=(()=>{if(x.supportsAdoptedStyleSheets){let r=new Map;return e=>new on(e,r)}return r=>new nn(r)})();function sn(r){return r.map(e=>e instanceof D?sn(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function Hs(r){return r.map(e=>e instanceof D?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var Ao=Symbol("prependToAdoptedStyleSheets");function js(r){let e=[],t=[];return r.forEach(o=>(o[Ao]?e:t).push(o)),{prepend:e,append:t}}var Gs=(r,e)=>{let{prepend:t,append:o}=js(e);r.adoptedStyleSheets=[...t,...r.adoptedStyleSheets,...o]},zs=(r,e)=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(x.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Gs=(r,e)=>{let{prepend:t,append:o}=js(e);r.adoptedStyleSheets.splice(0,0,...t),r.adoptedStyleSheets.push(...o)},zs=(r,e)=>{for(let t of e){let o=r.adoptedStyleSheets.indexOf(t);o!==-1&&r.adoptedStyleSheets.splice(o,1)}}}catch{}var on=class extends D{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Hs(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=sn(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){Gs(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){zs(e,this.styleSheets),super.removeStylesFrom(e)}},tc=0;function rc(){return`fast-style-class-${++tc}`}var nn=class extends D{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Hs(e),this.styleSheets=sn(e),this.styleClass=rc()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let n=document.createElement("style");n.innerHTML=t[i],n.className=o,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var Er=Object.freeze({locate:So()}),Us={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},qs={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},_o=class r{constructor(e,t,o=t.toLowerCase(),i="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&n===void 0&&(this.converter=Us)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||x.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let n=this.converter;x.setAttribute(e,this.attribute,n!==void 0?n.toView(i):i);break;case"boolean":x.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(Er.locate(e));for(let i=0,n=t.length;i<n;++i){let s=t[i];if(s!==void 0)for(let a=0,l=s.length;a<l;++a){let c=s[a];typeof c=="string"?o.push(new r(e,c)):o.push(new r(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function w(r,e){let t;function o(i,n){arguments.length>1&&(t.property=n),Er.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var Ws={mode:"open"},Xs={},an=mt.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),$e=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=_o.collect(e,t.attributes),i=new Array(o.length),n={},s={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,n[c.name]=c,s[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=n,this.attributeLookup=s,this.shadowOptions=t.shadowOptions===void 0?Ws:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Ws),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Xs:Object.assign(Object.assign({},Xs),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?D.create(t.styles):t.styles instanceof D?t.styles:D.create([t.styles])}get isDefined(){return!!an.getByType(this.type)}define(e=customElements){let t=this.type;if(an.register(this)){let o=this.attributes,i=t.prototype;for(let n=0,s=o.length;n<s;++n)v.defineProperty(i,o[n]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};$e.forType=an.getByType;var Ys=new WeakMap,oc={bubbles:!0,composed:!0,cancelable:!0};function ln(r){return r.shadowRoot||Ys.get(r)||null}var Ro=class r extends Vt{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let n=e.attachShadow(o);o.mode==="closed"&&Ys.set(e,n)}let i=v.getAccessors(e);if(i.length>0){let n=this.boundObservables=Object.create(null);for(let s=0,a=i.length;s<a;++s){let l=i[s].name,c=e[l];c!==void 0&&(delete e[l],n[l]=c)}}}get isConnected(){return v.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,v.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=ln(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=ln(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let n=0;n<o;++n){let s=e[n];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),i.push(s))}if(this._isConnected){let n=this.element;for(let s=0;s<i.length;++s)i[s].bind(n,Ye)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,n=[];for(let s=0;s<i;++s){let a=e[s];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&n.push(a):o.set(a,l)}}if(this._isConnected){let s=this.element;for(let a=0;a<n.length;++a)n[a].unbind(s)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Ye);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,Ye);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},oc),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let n=0,s=i.length;n<s;++n){let a=i[n];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=ln(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||x.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=$e.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new r(e,o)}};function Qs(r){return class extends r{constructor(){super(),Ro.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var Qe=Object.assign(Qs(HTMLElement),{from(r){return Qs(r)},define(r,e){return new $e(r,e).define().type}});var Ze=class{createCSS(){return""}createBehavior(){}};function Zs(r,e){let t=[],o="",i=[];for(let n=0,s=r.length-1;n<s;++n){o+=r[n];let a=e[n];if(a instanceof Ze){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof D||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function H(r,...e){let{styles:t,behaviors:o}=Zs(r,e),i=D.create(t);return o.length&&i.withBehaviors(...o),i}var cn=class extends Ze{constructor(e,t){super(),this.behaviors=t,this.css="";let o=e.reduce((i,n)=>(typeof n=="string"?this.css+=n:i.push(n),i),[]);o.length&&(this.styles=D.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}};function un(r,...e){let{styles:t,behaviors:o}=Zs(r,e);return new cn(t,o)}var dn=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function ce(r){return new Lt("fast-ref",dn,r)}var Oo=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=v.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(We),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var hn=class extends Oo{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function To(r){return typeof r=="string"&&(r={property:r}),new Lt("fast-slotted",hn,r)}var Je=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},Fo=(r,e)=>Ve`
    <span
        part="end"
        ${ce("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${ce("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Vo=(r,e)=>Ve`
    <span
        part="start"
        ${ce("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${ce("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,hm=Ve`
    <span part="end" ${ce("endContainer")}>
        <slot
            name="end"
            ${ce("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,pm=Ve`
    <span part="start" ${ce("startContainer")}>
        <slot
            name="start"
            ${ce("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function f(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}var pn=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=pn.get(t);o===void 0&&pn.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=pn.get(e);if(t!==void 0)return t.get(r)});var vn=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,la(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new re(i,e,t))}};function Ar(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let n=0;n<o;++n)i=t[n],ca(i)||(e[i]=r[i]);return e}var ic=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new re(r,1,r)},transient(r){return new re(r,2,r)}}),fn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:ic.singleton})}),Js=new Map;function Ks(r){return e=>Reflect.getOwnMetadata(r,e)}var ea=null,O=Object.freeze({createContainer(r){return new _r(null,Object.assign({},fn.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:O.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(aa,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||O.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new _r(r,Object.assign({},fn.default,e,{parentLocator:O.findParentContainer})):ea||(ea=new _r(null,Object.assign({},fn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Ks("design:paramtypes"),getAnnotationParamtypes:Ks("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=Js.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=O.getDesignParamtypes(r),i=O.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let n=Object.getPrototypeOf(r);typeof n=="function"&&n!==Function.prototype?e=Ar(O.getDependencies(n)):e=[]}else e=Ar(i);else if(i===void 0)e=Ar(o);else{e=Ar(o);let n=i.length,s;for(let c=0;c<n;++c)s=i[c],s!==void 0&&(e[c]=s);let a=Object.keys(i);n=a.length;let l;for(let c=0;c<n;++c)l=a[c],ca(l)||(e[l]=i[l])}}else e=Ar(t);Js.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let n=this[i];if(n===void 0&&(n=(this instanceof HTMLElement?O.findResponsibleContainer(this):O.getOrCreateDOMContainer()).get(t),this[i]=n,o&&this instanceof Qe)){let a=this.$fastController,l=()=>{let u=O.findResponsibleContainer(this).get(t),p=this[i];u!==p&&(this[i]=n,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||ia,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,n=function(s,a,l){if(s==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)O.defineProperty(s,a,n,i);else{let c=O.getOrCreateAnnotationParamTypes(s);c[l]=n}};return n.$isInterface=!0,n.friendlyName=o??"(anonymous)",t!=null&&(n.register=function(s,a){return t(new vn(s,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=O.getOrCreateAnnotationParamTypes(e),n=r[0];n!==void 0&&(i[o]=n)}else if(t)O.defineProperty(e,t,r[0]);else{let i=o?O.getOrCreateAnnotationParamTypes(o.value):O.getOrCreateAnnotationParamTypes(e),n;for(let s=0;s<r.length;++s)n=r[s],n!==void 0&&(i[s]=n)}}},transient(r){return r.register=function(t){return vt.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=sc){return r.register=function(o){return vt.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),nc=O.createInterface("Container");function Do(r){return function(e){let t=function(o,i,n){O.inject(t)(o,i,n)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var vm=O.inject;var sc={scoped:!1};function ac(r){return function(e,t){t=!!t;let o=function(i,n,s){O.inject(o)(i,n,s)};return o.$isResolver=!0,o.resolve=function(i,n){return r(e,i,n,t)},o}}var bm=ac((r,e,t,o)=>t.getAll(r,o)),xm=Do((r,e,t)=>()=>t.get(r)),ym=Do((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function xn(r,e,t){O.inject(xn)(r,e,t)}xn.$isResolver=!0;xn.resolve=()=>{};var wm=Do((r,e,t)=>{let o=sa(r,e),i=new re(r,0,o);return t.registerResolver(r,i),o}),Cm=Do((r,e,t)=>sa(r,e));function sa(r,e){return e.getFactory(r).construct(e)}var re=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function ta(r){return this.get(r)}function lc(r,e){return e(r)}var bn=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map(ta,e)):o=new this.Type(...this.dependencies.map(ta,e),...t),this.transformers==null?o:this.transformers.reduce(lc,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},cc={$isResolver:!0,resolve(r,e){return e}};function Lo(r){return typeof r.register=="function"}function uc(r){return Lo(r)&&typeof r.registerInRequestor=="boolean"}function ra(r){return uc(r)&&r.registerInRequestor}function dc(r){return r.prototype!==void 0}var hc=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),aa="__DI_LOCATE_PARENT__",mn=new Map,_r=class r{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(nc,cc),e instanceof Node&&e.addEventListener(aa,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,n,s,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!na(t))if(Lo(t))t.register(this,a);else if(dc(t))vt.singleton(t,t).register(this);else for(o=Object.keys(t),n=0,s=o.length;n<s;++n)i=t[o[n]],na(i)&&(Lo(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){Io(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof re&&i.strategy===4?i.state.push(t):o.set(e,new re(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Io(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let n=ra(e)?this:o;return t?this.jitRegister(e,n):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Io(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=ra(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Io(e);let o=this,i=o,n;if(t){let s=We;for(;i!=null;)n=i.resolvers.get(e),n!=null&&(s=s.concat(oa(n,i,o))),i=i.parent;return s}else for(;i!=null;)if(n=i.resolvers.get(e),n==null){if(i=i.parent,i==null)return We}else return oa(n,i,o);return We}getFactory(e){let t=mn.get(e);if(t===void 0){if(pc(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);mn.set(e,t=new bn(e,O.getDependencies(e)))}return t}registerFactory(e,t){mn.set(e,t)}createChild(e){return new r(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(hc.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Lo(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},gn=new WeakMap;function la(r){return function(e,t,o){if(gn.has(o))return gn.get(o);let i=r(e,t,o);return gn.set(o,i),i}}var vt=Object.freeze({instance(r,e){return new re(r,0,e)},singleton(r,e){return new re(r,1,e)},transient(r,e){return new re(r,2,e)},callback(r,e){return new re(r,3,e)},cachedCallback(r,e){return new re(r,3,la(e))},aliasTo(r,e){return new re(e,5,r)}});function Io(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function oa(r,e,t){if(r instanceof re&&r.strategy===4){let o=r.state,i=o.length,n=new Array(i);for(;i--;)n[i]=o[i].resolve(e,t);return n}return[r.resolve(e,t)]}var ia="(anonymous)";function na(r){return typeof r=="object"&&r!==null||typeof r=="function"}var pc=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),Po={};function ca(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=Po[r];if(e!==void 0)return e;let t=r.length;if(t===0)return Po[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return Po[r]=!1;return Po[r]=!0}default:return!1}}function ua(r){return`${r.toLowerCase()}:presentation`}var Mo=new Map,Bo=Object.freeze({define(r,e,t){let o=ua(r);Mo.get(o)===void 0?Mo.set(o,e):Mo.set(o,!1),t.register(vt.instance(o,e))},forTag(r,e){let t=ua(r),o=Mo.get(t);return o===!1?O.findResponsibleContainer(e).get(t):o||null}}),No=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?D.create(t):t instanceof D?t:D.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var ke=class r extends Qe{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Bo.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new yn(this===r?class extends r{}:this,e,t)}};f([$],ke.prototype,"template",void 0);f([$],ke.prototype,"styles",void 0);function Rr(r,e,t){return typeof r=="function"?r(e,t):r}var yn=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,s=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new No(Rr(o.template,a,o),Rr(o.styles,a,o));a.definePresentation(l);let c=Rr(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:Rr(o.elementOptions,a,o),shadowOptions:c,attributes:Rr(o.attributes,a,o)})}})}};function ue(r,...e){let t=Er.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(r.prototype,n,Object.getOwnPropertyDescriptor(o.prototype,n))}),Er.locate(o).forEach(n=>t.push(n))})}function da(r,e){let t=r.length;for(;t--;)if(e(r[t],t,r))return t;return-1}function ha(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function pa(...r){return r.every(e=>e instanceof HTMLElement)}function fc(){let r=document.querySelector('meta[property="csp-nonce"]');return r?r.getAttribute("content"):null}var bt;function fa(){if(typeof bt=="boolean")return bt;if(!ha())return bt=!1,bt;let r=document.createElement("style"),e=fc();e!==null&&r.setAttribute("nonce",e),document.head.appendChild(r);try{r.sheet.insertRule("foo:focus-visible {color:inherit}",0),bt=!0}catch{bt=!1}finally{document.head.removeChild(r)}return bt}var ma;(function(r){r[r.alt=18]="alt",r[r.arrowDown=40]="arrowDown",r[r.arrowLeft=37]="arrowLeft",r[r.arrowRight=39]="arrowRight",r[r.arrowUp=38]="arrowUp",r[r.back=8]="back",r[r.backSlash=220]="backSlash",r[r.break=19]="break",r[r.capsLock=20]="capsLock",r[r.closeBracket=221]="closeBracket",r[r.colon=186]="colon",r[r.colon2=59]="colon2",r[r.comma=188]="comma",r[r.ctrl=17]="ctrl",r[r.delete=46]="delete",r[r.end=35]="end",r[r.enter=13]="enter",r[r.equals=187]="equals",r[r.equals2=61]="equals2",r[r.equals3=107]="equals3",r[r.escape=27]="escape",r[r.forwardSlash=191]="forwardSlash",r[r.function1=112]="function1",r[r.function10=121]="function10",r[r.function11=122]="function11",r[r.function12=123]="function12",r[r.function2=113]="function2",r[r.function3=114]="function3",r[r.function4=115]="function4",r[r.function5=116]="function5",r[r.function6=117]="function6",r[r.function7=118]="function7",r[r.function8=119]="function8",r[r.function9=120]="function9",r[r.home=36]="home",r[r.insert=45]="insert",r[r.menu=93]="menu",r[r.minus=189]="minus",r[r.minus2=109]="minus2",r[r.numLock=144]="numLock",r[r.numPad0=96]="numPad0",r[r.numPad1=97]="numPad1",r[r.numPad2=98]="numPad2",r[r.numPad3=99]="numPad3",r[r.numPad4=100]="numPad4",r[r.numPad5=101]="numPad5",r[r.numPad6=102]="numPad6",r[r.numPad7=103]="numPad7",r[r.numPad8=104]="numPad8",r[r.numPad9=105]="numPad9",r[r.numPadDivide=111]="numPadDivide",r[r.numPadDot=110]="numPadDot",r[r.numPadMinus=109]="numPadMinus",r[r.numPadMultiply=106]="numPadMultiply",r[r.numPadPlus=107]="numPadPlus",r[r.openBracket=219]="openBracket",r[r.pageDown=34]="pageDown",r[r.pageUp=33]="pageUp",r[r.period=190]="period",r[r.print=44]="print",r[r.quote=222]="quote",r[r.scrollLock=145]="scrollLock",r[r.shift=16]="shift",r[r.space=32]="space",r[r.tab=9]="tab",r[r.tilde=192]="tilde",r[r.windowsLeft=91]="windowsLeft",r[r.windowsOpera=219]="windowsOpera",r[r.windowsRight=92]="windowsRight"})(ma||(ma={}));var Dt="ArrowDown";var Mt="ArrowUp",Nt="Enter",Bt="Escape",Ht="Home",jt="End";var Gt=" ",zt="Tab";var Ho;(function(r){r.ltr="ltr",r.rtl="rtl"})(Ho||(Ho={}));function ga(r,e,t){return Math.min(Math.max(t,r),e)}function Or(r,e,t=0){return[e,t]=[e,t].sort((o,i)=>o-i),e<=r&&r<t}var mc=0;function Ut(r=""){return`${r}${mc++}`}var S;(function(r){r.Canvas="Canvas",r.CanvasText="CanvasText",r.LinkText="LinkText",r.VisitedText="VisitedText",r.ActiveText="ActiveText",r.ButtonFace="ButtonFace",r.ButtonText="ButtonText",r.Field="Field",r.FieldText="FieldText",r.Highlight="Highlight",r.HighlightText="HighlightText",r.GrayText="GrayText"})(S||(S={}));var I=class{};f([w({attribute:"aria-atomic"})],I.prototype,"ariaAtomic",void 0);f([w({attribute:"aria-busy"})],I.prototype,"ariaBusy",void 0);f([w({attribute:"aria-controls"})],I.prototype,"ariaControls",void 0);f([w({attribute:"aria-current"})],I.prototype,"ariaCurrent",void 0);f([w({attribute:"aria-describedby"})],I.prototype,"ariaDescribedby",void 0);f([w({attribute:"aria-details"})],I.prototype,"ariaDetails",void 0);f([w({attribute:"aria-disabled"})],I.prototype,"ariaDisabled",void 0);f([w({attribute:"aria-errormessage"})],I.prototype,"ariaErrormessage",void 0);f([w({attribute:"aria-flowto"})],I.prototype,"ariaFlowto",void 0);f([w({attribute:"aria-haspopup"})],I.prototype,"ariaHaspopup",void 0);f([w({attribute:"aria-hidden"})],I.prototype,"ariaHidden",void 0);f([w({attribute:"aria-invalid"})],I.prototype,"ariaInvalid",void 0);f([w({attribute:"aria-keyshortcuts"})],I.prototype,"ariaKeyshortcuts",void 0);f([w({attribute:"aria-label"})],I.prototype,"ariaLabel",void 0);f([w({attribute:"aria-labelledby"})],I.prototype,"ariaLabelledby",void 0);f([w({attribute:"aria-live"})],I.prototype,"ariaLive",void 0);f([w({attribute:"aria-owns"})],I.prototype,"ariaOwns",void 0);f([w({attribute:"aria-relevant"})],I.prototype,"ariaRelevant",void 0);f([w({attribute:"aria-roledescription"})],I.prototype,"ariaRoledescription",void 0);var va="form-associated-proxy",ba="ElementInternals",xa=ba in window&&"setFormValue"in window[ba].prototype,ya=new WeakMap;function jo(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return xa}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return We}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),x.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),x.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!xa)return null;let t=ya.get(this);return t||(t=this.attachInternals(),ya.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",va),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",va)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Nt:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return w({mode:"boolean"})(e.prototype,"disabled"),w({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),w({attribute:"current-value"})(e.prototype,"currentValue"),w(e.prototype,"name"),w({mode:"boolean"})(e.prototype,"required"),$(e.prototype,"value"),e}function wn(r){return pa(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var K=class extends ke{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),v.notify(this,"value")}get value(){var e;return v.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};f([$],K.prototype,"checked",void 0);f([$],K.prototype,"content",void 0);f([$],K.prototype,"defaultSelected",void 0);f([w({mode:"boolean"})],K.prototype,"disabled",void 0);f([w({attribute:"selected",mode:"boolean"})],K.prototype,"selectedAttribute",void 0);f([$],K.prototype,"selected",void 0);f([w({attribute:"value",mode:"fromView"})],K.prototype,"initialValue",void 0);var Ke=class{};f([$],Ke.prototype,"ariaChecked",void 0);f([$],Ke.prototype,"ariaPosInSet",void 0);f([$],Ke.prototype,"ariaSelected",void 0);f([$],Ke.prototype,"ariaSetSize",void 0);ue(Ke,I);ue(K,Je,Ke);var U=class r extends ke{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return v.track(this,"options"),this._options}set options(e){this._options=e,v.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,n=null;switch(o){case-1:{n=this.options.reduceRight((s,a,l)=>!s&&!a.disabled&&l<i?a:s,n);break}case 1:{n=this.options.reduce((s,a,l)=>!s&&!a.disabled&&l>i?a:s,n);break}}return this.options.indexOf(n)}handleChange(e,t){switch(t){case"selected":{r.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,r.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case Ht:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Dt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Mt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case jt:{e.preventDefault(),this.selectLastOption();break}case zt:return this.focusAndScrollOptionIntoView(),!0;case Nt:case Bt:return!0;case Gt:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),n=i>-1?i:e;this.selectedIndex=n,t===n&&this.selectedIndexChanged(t,n);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(r.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(n=>{let s=v.getNotifier(n);s.unsubscribe(this,"selected"),n.selected=i.includes(n),s.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=da(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,n)=>(wn(n)&&i.push(n),i),[]);let o=`${this.options.length}`;this.options.forEach((i,n)=>{i.id||(i.id=Ut("option-")),i.ariaPosInSet=`${n+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};U.slottedOptionFilter=r=>wn(r)&&!r.hidden;U.TYPE_AHEAD_TIMEOUT_MS=1e3;f([w({mode:"boolean"})],U.prototype,"disabled",void 0);f([$],U.prototype,"selectedIndex",void 0);f([$],U.prototype,"selectedOptions",void 0);f([$],U.prototype,"slottedOptions",void 0);f([$],U.prototype,"typeaheadBuffer",void 0);var de=class{};f([$],de.prototype,"ariaActiveDescendant",void 0);f([$],de.prototype,"ariaDisabled",void 0);f([$],de.prototype,"ariaExpanded",void 0);f([$],de.prototype,"ariaMultiSelectable",void 0);ue(de,I);ue(U,de);var et={above:"above",below:"below"};var Cn=class extends U{},Go=class extends jo(Cn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var xt={inline:"inline",list:"list",both:"both",none:"none"};var he=class extends Go{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Ut("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===xt.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===xt.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===xt.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),x.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return v.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,v.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return v.track(this,"value"),this._value}set value(e){var t,o,i;let n=`${this._value}`;if(this.$fastController.isConnected&&this.options){let s=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,l=(o=this.options[s])===null||o===void 0?void 0:o.text;this.selectedIndex=a!==l?s:this.selectedIndex,e=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||e}n!==e&&(this._value=e,super.valueChanged(n,e),v.notify(this,"value"))}clickHandler(e){let t=e.target.closest("option,[role=option]");if(!(this.disabled||t?.disabled)){if(this.open){if(e.composedPath()[0]===this.control)return;t&&(this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0))}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===xt.none)&&(this.filter="");let e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;let t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){let t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=ga(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;let t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?et.above:et.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===et.above?~~e.top:~~o}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=t.includes(o)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){let e=this.control.value.length;this.control.setSelectionRange(e,e)}};f([w({attribute:"autocomplete",mode:"fromView"})],he.prototype,"autocomplete",void 0);f([$],he.prototype,"maxHeight",void 0);f([w({attribute:"open",mode:"boolean"})],he.prototype,"open",void 0);f([w],he.prototype,"placeholder",void 0);f([w({attribute:"position"})],he.prototype,"positionAttribute",void 0);f([$],he.prototype,"position",void 0);var qt=class{};f([$],qt.prototype,"ariaAutoComplete",void 0);f([$],qt.prototype,"ariaControls",void 0);ue(qt,de);ue(he,Je,qt);var wa=(r,e)=>Ve`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${Vo(r,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,o)=>t.inputHandler(o.event)}"
                    @keyup="${(t,o)=>t.keyupHandler(o.event)}"
                    ${ce("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Fo(r,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${ce("listbox")}
        >
            <slot
                ${To({filter:U.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Tr(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Ca(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=Tr(t)}return!1}var Ee=document.createElement("div");function gc(r){return r instanceof Qe}var Fr=class{setProperty(e,t){x.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){x.queueUpdate(()=>this.target.removeProperty(e))}},$n=class extends Fr{constructor(e){super();let t=new CSSStyleSheet;t[Ao]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(D.create([t]))}},kn=class extends Fr{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},En=class extends Fr{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},zo=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),v.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),x.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),x.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};f([$],zo.prototype,"target",void 0);var An=class{constructor(e){this.target=e.style}setProperty(e,t){x.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){x.queueUpdate(()=>this.target.removeProperty(e))}},tt=class r{setProperty(e,t){r.properties[e]=t;for(let o of r.roots.values())yt.getOrCreate(r.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete r.properties[e];for(let t of r.roots.values())yt.getOrCreate(r.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=r;if(!t.has(e)){t.add(e);let o=yt.getOrCreate(this.normalizeRoot(e));for(let i in r.properties)o.setProperty(i,r.properties[i])}}static unregisterRoot(e){let{roots:t}=r;if(t.has(e)){t.delete(e);let o=yt.getOrCreate(r.normalizeRoot(e));for(let i in r.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===Ee?document:e}};tt.roots=new Set;tt.properties={};var Sn=new WeakMap,vc=x.supportsAdoptedStyleSheets?$n:zo,yt=Object.freeze({getOrCreate(r){if(Sn.has(r))return Sn.get(r);let e;return r===Ee?e=new tt:r instanceof Document?e=x.supportsAdoptedStyleSheets?new kn:new En:gc(r)?e=new vc(r):e=new An(r),Sn.set(r,e),e}});var ge=class r extends Ze{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=r.uniqueId(),r.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new r({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return r.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=oe.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof r&&(t=this.alias(t)),oe.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),oe.existsFor(e)&&oe.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ee,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!oe.existsFor(t)&&oe.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};ge.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();ge.tokensById=new Map;var _n=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){yt.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(oe.getOrCreate(t).get(e)))}remove(e,t){yt.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},Rn=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=v.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,Ye))}catch(e){console.error(e)}}},On=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),v.getNotifier(this).notify(e.id))}get(e){return v.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),v.getNotifier(this).notify(e.id)}all(){return this.values.entries()}},Vr=new WeakMap,Ir=new WeakMap,oe=class r{constructor(e){this.target=e,this.store=new On,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=ge.getTokenById(o);i&&(i.notify(this.target),this.updateCSSTokenReflection(t,i))}},Vr.set(e,this),v.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Qe?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Vr.get(e)||new r(e)}static existsFor(e){return Vr.has(e)}static findParent(e){if(Ee!==e.target){let t=Tr(e.target);for(;t!==null;){if(Vr.has(t))return Vr.get(t);t=Tr(t)}return r.getOrCreate(Ee)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==Ee?r.getOrCreate(Ee):null}while(o!==null);return null}get parent(){return Ir.get(this)||null}updateCSSTokenReflection(e,t){if(ge.isCSSDesignToken(t)){let o=this.parent,i=this.isReflecting(t);if(o){let n=o.get(t),s=e.get(t);n!==s&&!i?this.reflectToCSS(t):n===s&&i&&this.stopReflectToCSS(t)}else i||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=r.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){ge.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ge.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=r.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Ir.get(this).removeChild(this);for(let e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Ir.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));Ir.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),v.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i),e.updateCSSTokenReflection(e.store,o)}removeChild(e){let t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),v.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;let o=Ir.delete(e);for(let[i]of this.store.all())e.hydrate(i,e.getRaw(i)),e.updateCSSTokenReflection(e.store,i);return o}contains(e){return Ca(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),r.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),r.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=ge.getTokenById(t);o&&(this.hydrate(o,this.getRaw(o)),this.updateCSSTokenReflection(this.store,o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);ge.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new Rn(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};oe.cssCustomPropertyReflector=new _n;f([$],oe.prototype,"children",void 0);function bc(r){return ge.from(r)}var wt=Object.freeze({create:bc,notifyConnection(r){return!r.isConnected||!oe.existsFor(r)?!1:(oe.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!oe.existsFor(r)?!1:(oe.getOrCreate(r).unbind(),!0)},registerRoot(r=Ee){tt.registerRoot(r)},unregisterRoot(r=Ee){tt.unregisterRoot(r)}});var Tn=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Fn=new Map,Uo=new Map,Wt=null,Pr=O.createInterface(r=>r.cachedCallback(e=>(Wt===null&&(Wt=new qo(null,e)),Wt))),In=Object.freeze({tagFor(r){return Uo.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||O.findResponsibleContainer(r).get(Pr)},getOrCreate(r){if(!r)return Wt===null&&(Wt=O.getOrCreateDOMContainer().get(Pr)),Wt;let e=r.$$designSystem$$;if(e)return e;let t=O.getOrCreateDOMContainer(r);if(t.has(Pr,!1))return t.get(Pr);{let o=new qo(r,t);return t.register(vt.instance(Pr,o)),o}}});function xc(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var qo=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Tn.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,n=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(a,l,c){let u=xc(a,l,c),{name:p,callback:m,baseClass:y}=u,{type:A}=u,k=p,j=Fn.get(k),T=!0;for(;j;){let G=i(k,A,j);switch(G){case Tn.ignoreDuplicate:return;case Tn.definitionCallbackOnly:T=!1,j=void 0;break;default:k=G,j=Fn.get(k);break}}T&&((Uo.has(A)||A===ke)&&(A=class extends A{}),Fn.set(k,A),Uo.set(A,k),y&&Uo.set(y,k)),o.push(new Vn(t,k,A,n,m,T))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&wt.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},Vn=class{constructor(e,t,o,i,n,s){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=n,this.willDefine=s,this.definition=null}definePresentation(e){Bo.define(this.name,e,this.container)}defineElement(e){this.definition=new $e(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return In.tagFor(e)}};var Sa=(r,e)=>Ve`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Vo(r,e)}
        <span class="content" part="content">
            <slot ${To("content")}></slot>
        </span>
        ${Fo(r,e)}
    </template>
`;var Ie=class extends U{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=Or(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=Or(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=Or(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=Or(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Ht:{this.checkFirstOption(o);return}case Dt:{this.checkNextOption(o);return}case Mt:{this.checkPreviousOption(o);return}case jt:{this.checkLastOption(o);return}case zt:return this.focusAndScrollOptionIntoView(),!0;case Bt:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Gt:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&x.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};f([$],Ie.prototype,"activeIndex",void 0);f([w({mode:"boolean"})],Ie.prototype,"multiple",void 0);f([w({converter:qs})],Ie.prototype,"size",void 0);var Pn=class extends Ie{},Wo=class extends jo(Pn){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var ve=class extends Wo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ut("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,x.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return v.track(this,"value"),this._value}set value(e){var t,o,i,n,s,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let u=this._options.findIndex(y=>y.value===e),p=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,m=(s=(n=this._options[u])===null||n===void 0?void 0:n.value)!==null&&s!==void 0?s:null;(u===-1||p!==m)&&(e="",this.selectedIndex=u),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),v.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?et.above:et.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===et.above?~~e.top:~~o}get displayValue(){var e,t;return v.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{v.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{v.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,n)=>{var s;let a=(s=this.proxy)===null||s===void 0?void 0:s.options.item(n);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(U.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case Gt:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Ht:case jt:{e.preventDefault();break}case Nt:{e.preventDefault(),this.open=!this.open;break}case Bt:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case zt:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Dt||t===Mt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&v.notify(this,"displayValue")}};f([w({attribute:"open",mode:"boolean"})],ve.prototype,"open",void 0);f([Ds],ve.prototype,"collapsible",null);f([$],ve.prototype,"control",void 0);f([w({attribute:"position"})],ve.prototype,"positionAttribute",void 0);f([$],ve.prototype,"position",void 0);f([$],ve.prototype,"maxHeight",void 0);var Lr=class{};f([$],Lr.prototype,"ariaControls",void 0);ue(Lr,de);ue(ve,Je,Lr);var Ln=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){let{query:t}=this,o=this.constructListener(e);o.bind(t)(),t.addListener(o),this.listenerCache.set(e,o)}unbind(e){let t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}},Dr=class r extends Ln{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new r(e,t)}constructListener(e){let t=!1,o=this.styles;return function(){let{matches:n}=this;n&&!t?(e.$fastController.addStyles(o),t=n):!n&&t&&(e.$fastController.removeStyles(o),t=n)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}},Xt=Dr.with(window.matchMedia("(forced-colors)")),vv=Dr.with(window.matchMedia("(prefers-color-scheme: dark)")),bv=Dr.with(window.matchMedia("(prefers-color-scheme: light)"));var le="not-allowed";var yc=":host([hidden]){display:none}";function Pe(r){return`${yc}:host{display:${r}}`}var M=fa()?"focus-visible":"focus";function pe(r,e,t){return isNaN(r)||r<=e?e:r>=t?t:r}function Xo(r,e,t){return isNaN(r)||r<=e?0:r>=t?1:r/(t-e)}function rt(r,e,t){return isNaN(r)?e:e+r*(t-e)}function Dn(r){return r*(Math.PI/180)}function $a(r){return r*(180/Math.PI)}function ka(r){let e=Math.round(pe(r,0,255)).toString(16);return e.length===1?"0"+e:e}function Q(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:e+r*(t-e)}function Yo(r,e,t){if(r<=0)return e%360;if(r>=1)return t%360;let o=(e-t+360)%360,i=(t-e+360)%360;return o<=i?(e-o*r+360)%360:(e+o*r+360)%360}var Cb=Math.PI*2;function P(r,e){let t=Math.pow(10,e);return Math.round(r*t)/t}var Le=class r{constructor(e,t,o){this.h=e,this.s=t,this.l=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new r(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new r(P(this.h,e),P(this.s,e),P(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}};var Yt=class r{constructor(e,t,o){this.h=e,this.s=t,this.v=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.v)?new r(e.h,e.s,e.v):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new r(P(this.h,e),P(this.s,e),P(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}};var q=class r{constructor(e,t,o){this.l=e,this.a=t,this.b=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new r(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new r(P(this.l,e),P(this.a,e),P(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}};q.epsilon=216/24389;q.kappa=24389/27;var ot=class r{constructor(e,t,o){this.l=e,this.c=t,this.h=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.c)&&!isNaN(e.h)?new r(e.l,e.c,e.h):null}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new r(P(this.l,e),P(this.c,e),P(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}};var F=class r{constructor(e,t,o,i){this.r=e,this.g=t,this.b=o,this.a=typeof i=="number"&&!isNaN(i)?i:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new r(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(rt(this.r,0,255))},${Math.round(rt(this.g,0,255))},${Math.round(rt(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(rt(this.r,0,255))},${Math.round(rt(this.g,0,255))},${Math.round(rt(this.b,0,255))},${pe(this.a,0,1)})`}roundToPrecision(e){return new r(P(this.r,e),P(this.g,e),P(this.b,e),P(this.a,e))}clamp(){return new r(pe(this.r,0,1),pe(this.g,0,1),pe(this.b,0,1),pe(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return ka(rt(e,0,255))}};var ie=class r{constructor(e,t,o){this.x=e,this.y=t,this.z=o}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new r(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new r(P(this.x,e),P(this.y,e),P(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}};ie.whitePoint=new ie(.95047,1,1.08883);function Zo(r){return r.r*.2126+r.g*.7152+r.b*.0722}function Qo(r){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return Zo(new F(e(r.r),e(r.g),e(r.b),1))}var Ea=(r,e)=>(r+.05)/(e+.05);function Mn(r,e){let t=Qo(r),o=Qo(e);return t>o?Ea(t,o):Ea(o,t)}function De(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let n=(e+t)/2,s=0;return o!==0&&(s=o/(1-Math.abs(2*n-1))),new Le(i,s,n)}function Qt(r,e=1){let t=(1-Math.abs(2*r.l-1))*r.s,o=t*(1-Math.abs(r.h/60%2-1)),i=r.l-t/2,n=0,s=0,a=0;return r.h<60?(n=t,s=o,a=0):r.h<120?(n=o,s=t,a=0):r.h<180?(n=0,s=t,a=o):r.h<240?(n=0,s=o,a=t):r.h<300?(n=o,s=0,a=t):r.h<360&&(n=t,s=0,a=o),new F(n+i,s+i,a+i,e)}function Nn(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let n=0;return e!==0&&(n=o/e),new Yt(i,n,e)}function Aa(r,e=1){let t=r.s*r.v,o=t*(1-Math.abs(r.h/60%2-1)),i=r.v-t,n=0,s=0,a=0;return r.h<60?(n=t,s=o,a=0):r.h<120?(n=o,s=t,a=0):r.h<180?(n=0,s=t,a=o):r.h<240?(n=0,s=o,a=t):r.h<300?(n=o,s=0,a=t):r.h<360&&(n=t,s=0,a=o),new F(n+i,s+i,a+i,e)}function wc(r){let e=0,t=0;return r.h!==0&&(e=Math.cos(Dn(r.h))*r.c,t=Math.sin(Dn(r.h))*r.c),new q(r.l,e,t)}function Cc(r){let e=0;(Math.abs(r.b)>.001||Math.abs(r.a)>.001)&&(e=$a(Math.atan2(r.b,r.a))),e<0&&(e+=360);let t=Math.sqrt(r.a*r.a+r.b*r.b);return new ot(r.l,t,e)}function Sc(r){let e=(r.l+16)/116,t=e+r.a/500,o=e-r.b/200,i=Math.pow(t,3),n=Math.pow(e,3),s=Math.pow(o,3),a=0;i>q.epsilon?a=i:a=(116*t-16)/q.kappa;let l=0;r.l>q.epsilon*q.kappa?l=n:l=r.l/q.kappa;let c=0;return s>q.epsilon?c=s:c=(116*o-16)/q.kappa,a=ie.whitePoint.x*a,l=ie.whitePoint.y*l,c=ie.whitePoint.z*c,new ie(a,l,c)}function $c(r){function e(l){return l>q.epsilon?Math.pow(l,1/3):(q.kappa*l+16)/116}let t=e(r.x/ie.whitePoint.x),o=e(r.y/ie.whitePoint.y),i=e(r.z/ie.whitePoint.z),n=116*o-16,s=500*(t-o),a=200*(o-i);return new q(n,s,a)}function Jo(r){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}let t=e(r.r),o=e(r.g),i=e(r.b),n=t*.4124564+o*.3575761+i*.1804375,s=t*.2126729+o*.7151522+i*.072175,a=t*.0193339+o*.119192+i*.9503041;return new ie(n,s,a)}function Bn(r,e=1){function t(s){return s<=.0031308?s*12.92:1.055*Math.pow(s,1/2.4)-.055}let o=t(r.x*3.2404542-r.y*1.5371385-r.z*.4985314),i=t(r.x*-.969266+r.y*1.8760108+r.z*.041556),n=t(r.x*.0556434-r.y*.2040259+r.z*1.0572252);return new F(o,i,n,e)}function Mr(r){return $c(Jo(r))}function Ko(r,e=1){return Bn(Sc(r),e)}function Nr(r){return Cc(Mr(r))}function ei(r,e=1){return Ko(wc(r),e)}function Gn(r,e,t=18){let o=Nr(r),i=o.c+e*t;return i<0&&(i=0),ei(new ot(o.l,i,o.h))}function Hn(r,e){return r*e}function zn(r,e){return new F(Hn(r.r,e.r),Hn(r.g,e.g),Hn(r.b,e.b),1)}function jn(r,e){return r<.5?pe(2*e*r,0,1):pe(1-2*(1-e)*(1-r),0,1)}function Un(r,e){return new F(jn(r.r,e.r),jn(r.g,e.g),jn(r.b,e.b),1)}var _a;(function(r){r[r.Burn=0]="Burn",r[r.Color=1]="Color",r[r.Darken=2]="Darken",r[r.Dodge=3]="Dodge",r[r.Lighten=4]="Lighten",r[r.Multiply=5]="Multiply",r[r.Overlay=6]="Overlay",r[r.Screen=7]="Screen"})(_a||(_a={}));function kc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new F(Q(r,e.r,t.r),Q(r,e.g,t.g),Q(r,e.b,t.b),Q(r,e.a,t.a))}function Ec(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Le(Yo(r,e.h,t.h),Q(r,e.s,t.s),Q(r,e.l,t.l))}function Ac(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Yt(Yo(r,e.h,t.h),Q(r,e.s,t.s),Q(r,e.v,t.v))}function _c(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new ie(Q(r,e.x,t.x),Q(r,e.y,t.y),Q(r,e.z,t.z))}function Rc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new q(Q(r,e.l,t.l),Q(r,e.a,t.a),Q(r,e.b,t.b))}function Oc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new ot(Q(r,e.l,t.l),Q(r,e.c,t.c),Yo(r,e.h,t.h))}var ee;(function(r){r[r.RGB=0]="RGB",r[r.HSL=1]="HSL",r[r.HSV=2]="HSV",r[r.XYZ=3]="XYZ",r[r.LAB=4]="LAB",r[r.LCH=5]="LCH"})(ee||(ee={}));function Ct(r,e,t,o){if(isNaN(r)||r<=0)return t;if(r>=1)return o;switch(e){case ee.HSL:return Qt(Ec(r,De(t),De(o)));case ee.HSV:return Aa(Ac(r,Nn(t),Nn(o)));case ee.XYZ:return Bn(_c(r,Jo(t),Jo(o)));case ee.LAB:return Ko(Rc(r,Mr(t),Mr(o)));case ee.LCH:return ei(Oc(r,Nr(t),Nr(o)));default:return kc(r,t,o)}}var Ae=class r{constructor(e){if(e==null||e.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(e==null||e.length===0)throw new Error("The colors argument must be non-empty");let t=new Array(e.length);for(let o=0;o<e.length;o++)o===0?t[o]={color:e[o],position:0}:o===e.length-1?t[o]={color:e[o],position:1}:t[o]={color:e[o],position:o*(1/(e.length-1))};return new r(t)}getColor(e,t=ee.RGB){if(this.stops.length===1)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let o=0;for(let s=0;s<this.stops.length;s++)this.stops[s].position<=e&&(o=s);let i=o+1;i>=this.stops.length&&(i=this.stops.length-1);let n=(e-this.stops[o].position)*(1/(this.stops[i].position-this.stops[o].position));return Ct(n,t,this.stops[o].color,this.stops[i].color)}trim(e,t,o=ee.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new r([{color:this.getColor(e,o),position:0}]);let i=[];for(let a=0;a<this.stops.length;a++)this.stops[a].position>=e&&this.stops[a].position<=t&&i.push(this.stops[a]);if(i.length===0)return new r([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});let n=t-e,s=new Array(i.length);for(let a=0;a<i.length;a++)s[a]={color:i[a].color,position:(i[a].position-e)/n};return new r(s)}findNextColor(e,t,o=!1,i=ee.RGB,n=.005,s=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);let a=this.getColor(e,i),l=o?0:1,c=this.getColor(l,i);if(Mn(a,c)<=t)return l;let p=o?0:e,m=o?e:0,y=l,A=0;for(;A<=s;){y=Math.abs(m-p)/2+p;let k=this.getColor(y,i),j=Mn(a,k);if(Math.abs(j-t)<=n)return y;j>t?o?p=y:m=y:o?m=y:p=y,A++}return y}clone(){let e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new r(e)}sortColorScaleStops(e){return e.sort((t,o)=>{let i=t.position,n=o.position;return i<n?-1:i>n?1:0})}};var Tc=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function _e(r){let e=Tc.exec(r);if(e===null)return null;let t=e[1];if(t.length===3){let i=t.charAt(0),n=t.charAt(1),s=t.charAt(2);t=i.concat(i,n,n,s,s)}let o=parseInt(t,16);return isNaN(o)?null:new F(Xo((o&16711680)>>>16,0,255),Xo((o&65280)>>>8,0,255),Xo(o&255,0,255),1)}var Me=class r{constructor(e){this.config=Object.assign({},r.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(let o in e)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(e[o])||(this.config[o]=e[o],t=!0):e[o]!==this.config[o]&&(this.config[o]=e[o],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){let e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){let e=De(this.config.baseColor),o=new Ae([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),i=o.getColor(0),n=o.getColor(1),s=i,a=n;if(e.s>=this.config.saturationAdjustmentCutoff&&(s=Gn(s,this.config.saturationLight),a=Gn(a,this.config.saturationDark)),this.config.multiplyLight!==0){let l=zn(this.config.baseColor,s);s=Ct(this.config.multiplyLight,this.config.interpolationMode,s,l)}if(this.config.multiplyDark!==0){let l=zn(this.config.baseColor,a);a=Ct(this.config.multiplyDark,this.config.interpolationMode,a,l)}if(this.config.overlayLight!==0){let l=Un(this.config.baseColor,s);s=Ct(this.config.overlayLight,this.config.interpolationMode,s,l)}if(this.config.overlayDark!==0){let l=Un(this.config.baseColor,a);a=Ct(this.config.overlayDark,this.config.interpolationMode,a,l)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Ae([{position:0,color:this.config.baseColor},{position:1,color:a.clamp()}]):this.config.baseScalePosition>=1?new Ae([{position:0,color:s.clamp()},{position:1,color:this.config.baseColor}]):new Ae([{position:0,color:s.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:a.clamp()}]):new Ae([{position:0,color:s.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:a.clamp()}])}};Me.defaultPaletteConfig={baseColor:_e("#808080"),steps:11,interpolationMode:ee.RGB,scaleColorLight:new F(1,1,1,1),scaleColorDark:new F(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};Me.greyscalePaletteConfig={baseColor:_e("#808080"),steps:11,interpolationMode:ee.RGB,scaleColorLight:new F(1,1,1,1),scaleColorDark:new F(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};var gx={targetSize:63,spacing:4,scaleColorLight:Me.defaultPaletteConfig.scaleColorLight,scaleColorDark:Me.defaultPaletteConfig.scaleColorDark};var Br=class r{constructor(e){this.palette=[],this.config=Object.assign({},r.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);let t=.14,o=.06,i=new F(t,t,t,1),n=94,a=new Me(Object.assign(Object.assign({},Me.greyscalePaletteConfig),{baseColor:i,baseScalePosition:(1-t)*100/n,steps:e})).palette,l=Zo(this.config.baseColor),c=De(this.config.baseColor).l,u=(l+c)/2,m=this.matchRelativeLuminanceIndex(u,a)/(e-1),A=this.matchRelativeLuminanceIndex(t,a)/(e-1),k=De(this.config.baseColor),j=Qt(Le.fromObject({h:k.h,s:k.s,l:t})),T=Qt(Le.fromObject({h:k.h,s:k.s,l:o})),G=new Array(5);G[0]={position:0,color:new F(1,1,1,1)},G[1]={position:m,color:this.config.baseColor},G[2]={position:A,color:j},G[3]={position:.99,color:T},G[4]={position:1,color:new F(0,0,0,1)};let nt=new Ae(G);this.palette=new Array(e);for(let je=0;je<e;je++){let El=nt.getColor(je/(e-1),ee.RGB);this.palette[je]=El}}matchRelativeLuminanceIndex(e,t){let o=Number.MAX_VALUE,i=0,n=0,s=t.length;for(;n<s;n++){let a=Math.abs(Zo(t[n])-e);a<o&&(o=a,i=n)}return i}};Br.defaultPaletteConfig={baseColor:_e("#808080"),steps:94};function ti(r,e){let t=r.relativeLuminance>e.relativeLuminance?r:e,o=r.relativeLuminance>e.relativeLuminance?e:r;return(t.relativeLuminance+.05)/(o.relativeLuminance+.05)}var be=Object.freeze({create(r,e,t){return new ri(r,e,t)},from(r){return new ri(r.r,r.g,r.b)}});function Ra(r){let e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(let t in e)if(typeof e[t]!=typeof r[t])return!1;return!0}var ri=class r extends F{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=ti.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Qo(this)}static fromObject(e){return new r(e.r,e.g,e.b)}};function oi(r,e,t=0,o=r.length-1){if(o===t)return r[t];let i=Math.floor((o-t)/2)+t;return e(r[i])?oi(r,e,t,i):oi(r,e,i+1,o)}var Fc=(-.1+Math.sqrt(.21))/2;function Oa(r){return r.relativeLuminance<=Fc}function ae(r){return Oa(r)?-1:1}function Vc(r,e,t){return typeof r=="number"?Hr.from(be.create(r,e,t)):Hr.from(r)}function Ic(r){return Ra(r)?ii.from(r):ii.from(be.create(r.r,r.g,r.b))}var Hr=Object.freeze({create:Vc,from:Ic}),ii=class r{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,i){o===void 0&&(o=this.closestIndexOf(e));let n=this.swatches,s=this.lastIndex,a=o;i===void 0&&(i=ae(e));let l=c=>ti(e,c)>=t;return i===-1&&(n=this.reversedSwatches,a=s-a),oi(n,l,a,s)}get(e){return this.swatches[e]||this.swatches[pe(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(t!==-1)return this.closestIndexCache.set(e.relativeLuminance,t),t;let o=this.swatches.reduce((i,n)=>Math.abs(n.relativeLuminance-e.relativeLuminance)<Math.abs(i.relativeLuminance-e.relativeLuminance)?n:i);return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new r(e,Object.freeze(new Br({baseColor:F.fromObject(e)}).palette.map(t=>{let o=_e(t.toStringHexRGB());return be.create(o.r,o.g,o.b)})))}};function Ta(r,e,t,o,i,n,s,a,l){let c=r.source,u=e.closestIndexOf(t),p=Math.max(s,a,l),m=u>=p?-1:1,A=r.closestIndexOf(c),k=A+m*-1*o,j=k+m*i,T=k+m*n;return{rest:r.get(k),hover:r.get(A),active:r.get(j),focus:r.get(T)}}function Fa(r,e,t,o,i,n,s){let a=r.source,l=r.closestIndexOf(a),c=ae(e),u=l+(c===1?Math.min(o,i):Math.max(c*o,c*i)),p=r.colorContrast(e,t,u,c),m=r.closestIndexOf(p),y=m+c*Math.abs(o-i),A=c===1?o<i:c*o>c*i,k,j;return A?(k=m,j=y):(k=y,j=m),{rest:r.get(k),hover:r.get(j),active:r.get(k+c*n),focus:r.get(k+c*s)}}var qn=be.create(1,1,1),Va=be.create(0,0,0),Ia=be.from(_e("#808080")),Pa=be.from(_e("#DA1A5F"));function La(r,e){return r.contrast(qn)>=e?qn:Va}function Da(r,e,t,o,i,n){let s=r.closestIndexOf(e),a=Math.max(t,o,i,n),l=s>=a?-1:1;return{rest:r.get(s+l*t),hover:r.get(s+l*o),active:r.get(s+l*i),focus:r.get(s+l*n)}}function Ma(r,e,t,o,i,n){let s=ae(e),a=r.closestIndexOf(e);return{rest:r.get(a-s*t),hover:r.get(a-s*o),active:r.get(a-s*i),focus:r.get(a-s*n)}}function Na(r,e,t){let o=r.closestIndexOf(e);return r.get(o-(o<t?t*-1:t))}function Ba(r,e,t,o,i,n,s,a,l,c){let u=Math.max(t,o,i,n,s,a,l,c),p=r.closestIndexOf(e),m=p>=u?-1:1;return{rest:r.get(p+m*t),hover:r.get(p+m*o),active:r.get(p+m*i),focus:r.get(p+m*n)}}function Ha(r,e,t,o,i,n){let s=ae(e),a=r.closestIndexOf(r.colorContrast(e,4.5)),l=a+s*Math.abs(t-o),c=s===1?t<o:s*t>s*o,u,p;return c?(u=a,p=l):(u=l,p=a),{rest:r.get(u),hover:r.get(p),active:r.get(u+s*i),focus:r.get(u+s*n)}}function ja(r,e){return r.colorContrast(e,3.5)}function Ga(r,e,t){return r.colorContrast(t,3.5,r.closestIndexOf(r.source),ae(e)*-1)}function za(r,e){return r.colorContrast(e,14)}function Ua(r,e){return r.colorContrast(e,4.5)}function it(r){return be.create(r,r,r)}var qa={LightMode:1,DarkMode:.23};function Wa(r,e,t){return r.get(r.closestIndexOf(it(e))+t)}function Xa(r,e,t){let o=r.closestIndexOf(it(e))-t;return r.get(o-t)}function Ya(r,e){return r.get(r.closestIndexOf(it(e)))}function jr(r,e,t,o,i,n){return Math.max(r.closestIndexOf(it(e))+t,o,i,n)}function Qa(r,e,t,o,i,n){return r.get(jr(r,e,t,o,i,n))}function Za(r,e,t,o,i,n){return r.get(jr(r,e,t,o,i,n)+t)}function Ja(r,e,t,o,i,n){return r.get(jr(r,e,t,o,i,n)+t*2)}function Ka(r,e,t,o,i,n){let s=r.closestIndexOf(e),a=ae(e),l=s+a*t,c=l+a*(o-t),u=l+a*(i-t),p=l+a*(n-t);return{rest:r.get(l),hover:r.get(c),active:r.get(u),focus:r.get(p)}}function el(r,e,t){return r.get(r.closestIndexOf(e)+ae(e)*t)}var{create:h}=wt;function b(r){return wt.create({name:r,cssCustomPropertyName:null})}var ni=h("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),Wn=h("base-height-multiplier").withDefault(10),Wy=h("base-horizontal-spacing-multiplier").withDefault(3),Zt=h("base-layer-luminance").withDefault(qa.DarkMode),St=h("control-corner-radius").withDefault(4),Xn=h("density").withDefault(0),te=h("design-unit").withDefault(4),Xy=h("direction").withDefault(Ho.ltr),Jt=h("disabled-opacity").withDefault(.3),Ne=h("stroke-width").withDefault(1),fe=h("focus-stroke-width").withDefault(2),Kt=h("type-ramp-base-font-size").withDefault("14px"),er=h("type-ramp-base-line-height").withDefault("20px"),Yy=h("type-ramp-minus-1-font-size").withDefault("12px"),Qy=h("type-ramp-minus-1-line-height").withDefault("16px"),Zy=h("type-ramp-minus-2-font-size").withDefault("10px"),Jy=h("type-ramp-minus-2-line-height").withDefault("16px"),Ky=h("type-ramp-plus-1-font-size").withDefault("16px"),e0=h("type-ramp-plus-1-line-height").withDefault("24px"),t0=h("type-ramp-plus-2-font-size").withDefault("20px"),r0=h("type-ramp-plus-2-line-height").withDefault("28px"),o0=h("type-ramp-plus-3-font-size").withDefault("28px"),i0=h("type-ramp-plus-3-line-height").withDefault("36px"),n0=h("type-ramp-plus-4-font-size").withDefault("34px"),s0=h("type-ramp-plus-4-line-height").withDefault("44px"),a0=h("type-ramp-plus-5-font-size").withDefault("46px"),l0=h("type-ramp-plus-5-line-height").withDefault("56px"),c0=h("type-ramp-plus-6-font-size").withDefault("60px"),u0=h("type-ramp-plus-6-line-height").withDefault("72px"),d0=b("accent-fill-rest-delta").withDefault(0),Pc=b("accent-fill-hover-delta").withDefault(4),Lc=b("accent-fill-active-delta").withDefault(-5),Dc=b("accent-fill-focus-delta").withDefault(0),Mc=b("accent-foreground-rest-delta").withDefault(0),Nc=b("accent-foreground-hover-delta").withDefault(6),Bc=b("accent-foreground-active-delta").withDefault(-4),Hc=b("accent-foreground-focus-delta").withDefault(0),tr=b("neutral-fill-rest-delta").withDefault(7),rr=b("neutral-fill-hover-delta").withDefault(10),or=b("neutral-fill-active-delta").withDefault(5),tl=b("neutral-fill-focus-delta").withDefault(0),jc=b("neutral-fill-input-rest-delta").withDefault(0),Gc=b("neutral-fill-input-hover-delta").withDefault(0),zc=b("neutral-fill-input-active-delta").withDefault(0),Uc=b("neutral-fill-input-focus-delta").withDefault(0),qc=b("neutral-fill-stealth-rest-delta").withDefault(0),Wc=b("neutral-fill-stealth-hover-delta").withDefault(5),Xc=b("neutral-fill-stealth-active-delta").withDefault(3),Yc=b("neutral-fill-stealth-focus-delta").withDefault(0),Qc=b("neutral-fill-strong-rest-delta").withDefault(0),Zc=b("neutral-fill-strong-hover-delta").withDefault(8),Jc=b("neutral-fill-strong-active-delta").withDefault(-5),Kc=b("neutral-fill-strong-focus-delta").withDefault(0),ir=b("neutral-fill-layer-rest-delta").withDefault(3),eu=b("neutral-stroke-rest-delta").withDefault(25),tu=b("neutral-stroke-hover-delta").withDefault(40),ru=b("neutral-stroke-active-delta").withDefault(16),ou=b("neutral-stroke-focus-delta").withDefault(25),iu=b("neutral-stroke-divider-rest-delta").withDefault(8),nu=h("neutral-color").withDefault(Ia),Z=b("neutral-palette").withDefault(r=>Hr.from(nu.getValueFor(r))),su=h("accent-color").withDefault(Pa),Yn=b("accent-palette").withDefault(r=>Hr.from(su.getValueFor(r))),au=b("neutral-layer-card-container-recipe").withDefault({evaluate:r=>Wa(Z.getValueFor(r),Zt.getValueFor(r),ir.getValueFor(r))}),h0=h("neutral-layer-card-container").withDefault(r=>au.getValueFor(r).evaluate(r)),lu=b("neutral-layer-floating-recipe").withDefault({evaluate:r=>Xa(Z.getValueFor(r),Zt.getValueFor(r),ir.getValueFor(r))}),p0=h("neutral-layer-floating").withDefault(r=>lu.getValueFor(r).evaluate(r)),cu=b("neutral-layer-1-recipe").withDefault({evaluate:r=>Ya(Z.getValueFor(r),Zt.getValueFor(r))}),uu=h("neutral-layer-1").withDefault(r=>cu.getValueFor(r).evaluate(r)),du=b("neutral-layer-2-recipe").withDefault({evaluate:r=>Qa(Z.getValueFor(r),Zt.getValueFor(r),ir.getValueFor(r),tr.getValueFor(r),rr.getValueFor(r),or.getValueFor(r))}),f0=h("neutral-layer-2").withDefault(r=>du.getValueFor(r).evaluate(r)),hu=b("neutral-layer-3-recipe").withDefault({evaluate:r=>Za(Z.getValueFor(r),Zt.getValueFor(r),ir.getValueFor(r),tr.getValueFor(r),rr.getValueFor(r),or.getValueFor(r))}),m0=h("neutral-layer-3").withDefault(r=>hu.getValueFor(r).evaluate(r)),pu=b("neutral-layer-4-recipe").withDefault({evaluate:r=>Ja(Z.getValueFor(r),Zt.getValueFor(r),ir.getValueFor(r),tr.getValueFor(r),rr.getValueFor(r),or.getValueFor(r))}),g0=h("neutral-layer-4").withDefault(r=>pu.getValueFor(r).evaluate(r)),ne=h("fill-color").withDefault(r=>uu.getValueFor(r)),Gr;(function(r){r[r.normal=4.5]="normal",r[r.large=7]="large"})(Gr||(Gr={}));var si=h({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Ta(Yn.getValueFor(r),Z.getValueFor(r),e||ne.getValueFor(r),Pc.getValueFor(r),Lc.getValueFor(r),Dc.getValueFor(r),tr.getValueFor(r),rr.getValueFor(r),or.getValueFor(r))}),$t=h("accent-fill-rest").withDefault(r=>si.getValueFor(r).evaluate(r).rest),nr=h("accent-fill-hover").withDefault(r=>si.getValueFor(r).evaluate(r).hover),sr=h("accent-fill-active").withDefault(r=>si.getValueFor(r).evaluate(r).active),ai=h("accent-fill-focus").withDefault(r=>si.getValueFor(r).evaluate(r).focus),rl=r=>(e,t)=>La(t||$t.getValueFor(e),r),li=b("foreground-on-accent-recipe").withDefault({evaluate:(r,e)=>rl(Gr.normal)(r,e)}),ol=h("foreground-on-accent-rest").withDefault(r=>li.getValueFor(r).evaluate(r,$t.getValueFor(r))),il=h("foreground-on-accent-hover").withDefault(r=>li.getValueFor(r).evaluate(r,nr.getValueFor(r))),nl=h("foreground-on-accent-active").withDefault(r=>li.getValueFor(r).evaluate(r,sr.getValueFor(r))),sl=h("foreground-on-accent-focus").withDefault(r=>li.getValueFor(r).evaluate(r,ai.getValueFor(r))),ci=b("foreground-on-accent-large-recipe").withDefault({evaluate:(r,e)=>rl(Gr.large)(r,e)}),v0=h("foreground-on-accent-rest-large").withDefault(r=>ci.getValueFor(r).evaluate(r,$t.getValueFor(r))),b0=h("foreground-on-accent-hover-large").withDefault(r=>ci.getValueFor(r).evaluate(r,nr.getValueFor(r))),x0=h("foreground-on-accent-active-large").withDefault(r=>ci.getValueFor(r).evaluate(r,sr.getValueFor(r))),y0=h("foreground-on-accent-focus-large").withDefault(r=>ci.getValueFor(r).evaluate(r,ai.getValueFor(r))),fu=r=>(e,t)=>Fa(Yn.getValueFor(e),t||ne.getValueFor(e),r,Mc.getValueFor(e),Nc.getValueFor(e),Bc.getValueFor(e),Hc.getValueFor(e)),ui=h({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>fu(Gr.normal)(r,e)}),w0=h("accent-foreground-rest").withDefault(r=>ui.getValueFor(r).evaluate(r).rest),C0=h("accent-foreground-hover").withDefault(r=>ui.getValueFor(r).evaluate(r).hover),S0=h("accent-foreground-active").withDefault(r=>ui.getValueFor(r).evaluate(r).active),$0=h("accent-foreground-focus").withDefault(r=>ui.getValueFor(r).evaluate(r).focus),di=h({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Da(Z.getValueFor(r),e||ne.getValueFor(r),tr.getValueFor(r),rr.getValueFor(r),or.getValueFor(r),tl.getValueFor(r))}),k0=h("neutral-fill-rest").withDefault(r=>di.getValueFor(r).evaluate(r).rest),E0=h("neutral-fill-hover").withDefault(r=>di.getValueFor(r).evaluate(r).hover),A0=h("neutral-fill-active").withDefault(r=>di.getValueFor(r).evaluate(r).active),_0=h("neutral-fill-focus").withDefault(r=>di.getValueFor(r).evaluate(r).focus),hi=h({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Ma(Z.getValueFor(r),e||ne.getValueFor(r),jc.getValueFor(r),Gc.getValueFor(r),zc.getValueFor(r),Uc.getValueFor(r))}),al=h("neutral-fill-input-rest").withDefault(r=>hi.getValueFor(r).evaluate(r).rest),ll=h("neutral-fill-input-hover").withDefault(r=>hi.getValueFor(r).evaluate(r).hover),cl=h("neutral-fill-input-active").withDefault(r=>hi.getValueFor(r).evaluate(r).active),R0=h("neutral-fill-input-focus").withDefault(r=>hi.getValueFor(r).evaluate(r).focus),pi=h({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Ba(Z.getValueFor(r),e||ne.getValueFor(r),qc.getValueFor(r),Wc.getValueFor(r),Xc.getValueFor(r),Yc.getValueFor(r),tr.getValueFor(r),rr.getValueFor(r),or.getValueFor(r),tl.getValueFor(r))}),fi=h("neutral-fill-stealth-rest").withDefault(r=>pi.getValueFor(r).evaluate(r).rest),ul=h("neutral-fill-stealth-hover").withDefault(r=>pi.getValueFor(r).evaluate(r).hover),dl=h("neutral-fill-stealth-active").withDefault(r=>pi.getValueFor(r).evaluate(r).active),O0=h("neutral-fill-stealth-focus").withDefault(r=>pi.getValueFor(r).evaluate(r).focus),mi=h({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Ha(Z.getValueFor(r),e||ne.getValueFor(r),Qc.getValueFor(r),Zc.getValueFor(r),Jc.getValueFor(r),Kc.getValueFor(r))}),T0=h("neutral-fill-strong-rest").withDefault(r=>mi.getValueFor(r).evaluate(r).rest),F0=h("neutral-fill-strong-hover").withDefault(r=>mi.getValueFor(r).evaluate(r).hover),V0=h("neutral-fill-strong-active").withDefault(r=>mi.getValueFor(r).evaluate(r).active),I0=h("neutral-fill-strong-focus").withDefault(r=>mi.getValueFor(r).evaluate(r).focus),mu=b("neutral-fill-layer-recipe").withDefault({evaluate:(r,e)=>Na(Z.getValueFor(r),e||ne.getValueFor(r),ir.getValueFor(r))}),P0=h("neutral-fill-layer-rest").withDefault(r=>mu.getValueFor(r).evaluate(r)),gu=b("focus-stroke-outer-recipe").withDefault({evaluate:r=>ja(Z.getValueFor(r),ne.getValueFor(r))}),xe=h("focus-stroke-outer").withDefault(r=>gu.getValueFor(r).evaluate(r)),vu=b("focus-stroke-inner-recipe").withDefault({evaluate:r=>Ga(Yn.getValueFor(r),ne.getValueFor(r),xe.getValueFor(r))}),gi=h("focus-stroke-inner").withDefault(r=>vu.getValueFor(r).evaluate(r)),bu=b("neutral-foreground-hint-recipe").withDefault({evaluate:r=>Ua(Z.getValueFor(r),ne.getValueFor(r))}),L0=h("neutral-foreground-hint").withDefault(r=>bu.getValueFor(r).evaluate(r)),xu=b("neutral-foreground-recipe").withDefault({evaluate:r=>za(Z.getValueFor(r),ne.getValueFor(r))}),zr=h("neutral-foreground-rest").withDefault(r=>xu.getValueFor(r).evaluate(r)),vi=h({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:r=>Ka(Z.getValueFor(r),ne.getValueFor(r),eu.getValueFor(r),tu.getValueFor(r),ru.getValueFor(r),ou.getValueFor(r))}),hl=h("neutral-stroke-rest").withDefault(r=>vi.getValueFor(r).evaluate(r).rest),D0=h("neutral-stroke-hover").withDefault(r=>vi.getValueFor(r).evaluate(r).hover),M0=h("neutral-stroke-active").withDefault(r=>vi.getValueFor(r).evaluate(r).active),N0=h("neutral-stroke-focus").withDefault(r=>vi.getValueFor(r).evaluate(r).focus),yu=b("neutral-stroke-divider-recipe").withDefault({evaluate:(r,e)=>el(Z.getValueFor(r),e||ne.getValueFor(r),iu.getValueFor(r))}),B0=h("neutral-stroke-divider-rest").withDefault(r=>yu.getValueFor(r).evaluate(r)),pl=wt.create({name:"height-number",cssCustomPropertyName:null}).withDefault(r=>(Wn.getValueFor(r)+Xn.getValueFor(r))*te.getValueFor(r));var Be=un`(${Wn} + ${Xn}) * ${te}`;var wu="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",Cu="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",Qn=`box-shadow: ${wu}, ${Cu};`;var fl=(r,e)=>{let t=r.tagFor(K),o=r.name===r.tagFor(Ie)?"":".listbox";return H`
        ${o?"":Pe("inline-flex")}

        :host ${o} {
            background: ${ne};
            border: calc(${Ne} * 1px) solid ${hl};
            border-radius: calc(${St} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${te} * 1px) 0;
        }

        ${o?"":H`
            :host(:focus-within:not([disabled])) {
                border-color: ${xe};
                box-shadow: 0 0 0
                    calc((${fe} - ${Ne}) * 1px)
                    ${xe} inset;
            }

            :host([disabled]) ::slotted(*) {
                cursor: ${le};
                opacity: ${Jt};
                pointer-events: none;
            }
        `}

        ${o||":host([size])"} {
            max-height: calc(
                (var(--size) * ${Be} + (${te} * ${Ne} * 2)) * 1px
            );
            overflow-y: auto;
        }

        :host([size="0"]) ${o} {
            max-height: none;
        }
    `.withBehaviors(Xt(H`
                :host(:not([multiple]):${M}) ::slotted(${t}[aria-selected="true"]),
                :host([multiple]:${M}) ::slotted(${t}[aria-checked="true"]) {
                    border-color: ${S.ButtonText};
                    box-shadow: 0 0 0 calc(${fe} * 1px) inset ${S.HighlightText};
                }

                :host(:not([multiple]):${M}) ::slotted(${t}[aria-selected="true"]) {
                    background: ${S.Highlight};
                    color: ${S.HighlightText};
                    fill: currentcolor;
                }

                ::slotted(${t}[aria-selected="true"]:not([aria-checked="true"])) {
                    background: ${S.Highlight};
                    border-color: ${S.HighlightText};
                    color: ${S.HighlightText};
                }
            `))};var ml=(r,e)=>{let t=r.name===r.tagFor(ve);return H`
        ${Pe("inline-flex")}

        :host {
            --elevation: 14;
            background: ${al};
            border-radius: calc(${St} * 1px);
            border: calc(${Ne} * 1px) solid ${$t};
            box-sizing: border-box;
            color: ${zr};
            font-family: ${ni};
            height: calc(${Be} * 1px);
            position: relative;
            user-select: none;
            min-width: 250px;
            outline: none;
            vertical-align: top;
        }

        ${t?H`
            :host(:not([aria-haspopup])) {
                --elevation: 0;
                border: 0;
                height: auto;
                min-width: 0;
            }
        `:""}

        ${fl(r,e)}

        :host .listbox {
            ${Qn}
            border: none;
            display: flex;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        .control + .listbox {
            --stroke-size: calc(${te} * ${Ne} * 2);
            max-height: calc(
                (var(--listbox-max-height) * ${Be} + var(--stroke-size)) * 1px
            );
        }

        ${t?H`
            :host(:not([aria-haspopup])) .listbox {
                left: auto;
                position: static;
                z-index: auto;
            }
        `:""}

        .listbox[hidden] {
            display: none;
        }

        .control {
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            font-size: ${Kt};
            font-family: inherit;
            line-height: ${er};
            min-height: 100%;
            padding: 0 calc(${te} * 2.25px);
            width: 100%;
        }

        :host(:not([disabled]):hover) {
            background: ${ll};
            border-color: ${nr};
        }

        :host(:${M}) {
            border-color: ${xe};
        }

        :host(:not([size]):not([multiple]):not([open]):${M}),
        :host([multiple]:${M}),
        :host([size]:${M}) {
            box-shadow: 0 0 0 calc(${fe} * 1px) ${xe};
        }

        :host(:not([multiple]):not([size]):${M}) ::slotted(${r.tagFor(K)}[aria-selected="true"]:not([disabled])) {
            box-shadow: 0 0 0 calc(${fe} * 1px) inset ${gi};
            border-color: ${xe};
            background: ${ai};
            color: ${sl};
        }

        :host([disabled]) {
            cursor: ${le};
            opacity: ${Jt};
        }

        :host([disabled]) .control {
            cursor: ${le};
            user-select: none;
        }

        :host([disabled]:hover) {
            background: ${fi};
            color: ${zr};
            fill: currentcolor;
        }

        :host(:not([disabled])) .control:active {
            background: ${cl};
            border-color: ${sr};
            border-radius: calc(${St} * 1px);
        }

        :host([open][position="above"]) .listbox {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 0;
            bottom: calc(${Be} * 1px);
        }

        :host([open][position="below"]) .listbox {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 0;
            top: calc(${Be} * 1px);
        }

        .selected-value {
            flex: 1 1 auto;
            font-family: inherit;
            min-width: calc(var(--listbox-scroll-width, 0) - (${te} * 4) * 1px);
            overflow: hidden;
            text-align: start;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .indicator {
            flex: 0 0 auto;
            margin-inline-start: 1em;
        }

        slot[name="listbox"] {
            display: none;
            width: 100%;
        }

        :host([open]) slot[name="listbox"] {
            display: flex;
            position: absolute;
            ${Qn}
        }

        .end {
            margin-inline-start: auto;
        }

        .start,
        .end,
        .indicator,
        .select-indicator,
        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            fill: currentcolor;
            height: 1em;
            min-height: calc(${te} * 4px);
            min-width: calc(${te} * 4px);
            width: 1em;
        }

        ::slotted([role="option"]),
        ::slotted(option) {
            flex: 0 0 auto;
        }
    `.withBehaviors(Xt(H`
                :host(:not([disabled]):hover),
                :host(:not([disabled]):active) {
                    border-color: ${S.Highlight};
                }

                :host(:not([disabled]):${M}) {
                    background-color: ${S.ButtonFace};
                    box-shadow: 0 0 0 calc(${fe} * 1px) ${S.Highlight};
                    color: ${S.ButtonText};
                    fill: currentcolor;
                    forced-color-adjust: none;
                }

                :host(:not([disabled]):${M}) .listbox {
                    background: ${S.ButtonFace};
                }

                :host([disabled]) {
                    border-color: ${S.GrayText};
                    background-color: ${S.ButtonFace};
                    color: ${S.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                    forced-color-adjust: none;
                }

                :host([disabled]:hover) {
                    background: ${S.ButtonFace};
                }

                :host([disabled]) .control {
                    color: ${S.GrayText};
                    border-color: ${S.GrayText};
                }

                :host([disabled]) .control .select-indicator {
                    fill: ${S.GrayText};
                }

                :host(:${M}) ::slotted([aria-selected="true"][role="option"]),
                :host(:${M}) ::slotted(option[aria-selected="true"]),
                :host(:${M}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                    background: ${S.Highlight};
                    border-color: ${S.ButtonText};
                    box-shadow: 0 0 0 calc(${fe} * 1px) inset ${S.HighlightText};
                    color: ${S.HighlightText};
                    fill: currentcolor;
                }

                .start,
                .end,
                .indicator,
                .select-indicator,
                ::slotted(svg) {
                    color: ${S.ButtonText};
                    fill: currentcolor;
                }
            `))};var gl=(r,e)=>H`
    ${ml(r,e)}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${le};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${Kt};
        line-height: ${er};
        height: calc(100% - (${Ne} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${M},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`;var Zn=class extends he{maxHeightChanged(e,t){this.updateComputedStylesheet()}updateComputedStylesheet(){this.computedStylesheet&&this.$fastController.removeStyles(this.computedStylesheet);let e=Math.floor(this.maxHeight/pl.getValueFor(this)).toString();this.computedStylesheet=H`
            :host {
                --listbox-max-height: ${e};
            }
        `,this.$fastController.addStyles(this.computedStylesheet)}},Jn=Zn.compose({baseName:"combobox",baseClass:he,template:wa,styles:gl,shadowOptions:{delegatesFocus:!0},indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `});var vl=(r,e)=>H`
        ${Pe("inline-flex")} :host {
            align-items: center;
            font-family: ${ni};
            border-radius: calc(${St} * 1px);
            border: calc(${fe} * 1px) solid transparent;
            box-sizing: border-box;
            background: ${fi};
            color: ${zr};
            cursor: pointer;
            flex: 0 0 auto;
            fill: currentcolor;
            font-size: ${Kt};
            height: calc(${Be} * 1px);
            line-height: ${er};
            margin: 0 calc((${te} - ${fe}) * 1px);
            outline: none;
            overflow: hidden;
            padding: 0 1ch;
            user-select: none;
            white-space: nowrap;
        }

        :host(:not([disabled]):not([aria-selected="true"]):hover) {
            background: ${ul};
        }

        :host(:not([disabled]):not([aria-selected="true"]):active) {
            background: ${dl};
        }

        :host([aria-selected="true"]) {
            background: ${$t};
            color: ${ol};
        }

        :host(:not([disabled])[aria-selected="true"]:hover) {
            background: ${nr};
            color: ${il};
        }

        :host(:not([disabled])[aria-selected="true"]:active) {
            background: ${sr};
            color: ${nl};
        }

        :host([disabled]) {
            cursor: ${le};
            opacity: ${Jt};
        }

        .content {
            grid-column-start: 2;
            justify-self: start;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .start,
        .end,
        ::slotted(svg) {
            display: flex;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            height: calc(${te} * 4px);
            width: calc(${te} * 4px);
        }

        ::slotted([slot="end"]) {
            margin-inline-start: 1ch;
        }

        ::slotted([slot="start"]) {
            margin-inline-end: 1ch;
        }

        :host([aria-checked="true"][aria-selected="false"]) {
            border-color: ${xe};
        }

        :host([aria-checked="true"][aria-selected="true"]) {
            border-color: ${xe};
            box-shadow: 0 0 0 calc(${fe} * 2 * 1px) inset
                ${gi};
        }
    `.withBehaviors(Xt(H`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${S.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${S.Highlight};
                    color: ${S.HighlightText};
                }

                :host([disabled]),
                :host([disabled][aria-selected="false"]:hover) {
                    background: ${S.Canvas};
                    color: ${S.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host([aria-checked="true"][aria-selected="false"]) {
                    background: ${S.ButtonFace};
                    color: ${S.ButtonText};
                    border-color: ${S.ButtonText};
                }

                :host([aria-checked="true"][aria-selected="true"]),
                :host([aria-checked="true"][aria-selected="true"]:hover) {
                    background: ${S.Highlight};
                    color: ${S.HighlightText};
                    border-color: ${S.ButtonText};
                }
            `));var Kn=K.compose({baseName:"option",template:Sa,styles:vl});function bl(r){return In.getOrCreate(r).withPrefix("fast")}var xl="2.3rem",Su="100px",Ur="1",yl="0.25rem",$u="1rem",es="4",wl=()=>H`
  ${Pe("inline-flex")} :host {
    background: var(--select-field-background-color);
    box-sizing: border-box;
    color: var(--foreground-color);
    contain: contents;
    font-family: inherit;
    position: relative;
    user-select: none;
    min-width: ${Su};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${Ur} * 1px) solid var(--field-border-color);
    border-radius: ${yl};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  .listbox {
    background: var(--background-color);
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-radius: ${$u};
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${es} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${M}) .control {
    border-color: var(--focus-border-color);
  }
  :host(:not([disabled]):hover) {
    background: var(--select-field-background-color);
    border-color: var(--field-border-color);
  }
  :host(:${M}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--active-selection-background-color);
    border: calc(${Ur} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${le};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${le};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--select-field-background-color);
    color: var(--foreground-color);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:focus-within) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: ${xl};
  }
  :host([open][position='below']) .listbox {
    top: ${xl};
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${es} * 4px);
    min-width: calc(${es} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`,Cl=()=>H`
  ${Pe("inline-flex")} :host {
    font-family: inherit;
    border-radius: ${yl};
    border: calc(${Ur} * 1px) solid transparent;
    box-sizing: border-box;
    color: var(--foreground-color);
    cursor: pointer;
    fill: currentcolor;
    font-size: inherit;
    line-height: normal;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0.125rem 0.5rem 0.5rem;
    user-select: none;
    white-space: nowrap;
  }
  :host(:${M}) {
    border-color: var(--focus-border-color);
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([aria-selected='true']) {
    background: var(--active-selection-background-color);
    border: calc(${Ur} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):hover) {
    background: var(--active-selection-background-color);
    border: calc(${Ur} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${le};
    opacity: 0.4;
  }
  :host([disabled]:hover) {
    background-color: inherit;
  }
  .content {
    grid-column-start: 2;
    justify-self: start;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;var ts={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wr=r=>(...e)=>({_$litDirective$:r,values:e}),qr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Nw}=_s;var Sl=r=>r.strings===void 0;var Xr=(r,e)=>{var t,o;let i=r._$AN;if(i===void 0)return!1;for(let n of i)(o=(t=n)._$AO)===null||o===void 0||o.call(t,e,!1),Xr(n,e);return!0},bi=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},$l=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Au(e)}};function ku(r){this._$AN!==void 0?(bi(this),this._$AM=r,$l(this)):this._$AM=r}function Eu(r,e=!1,t=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let n=t;n<o.length;n++)Xr(o[n],!1),bi(o[n]);else o!=null&&(Xr(o,!1),bi(o));else Xr(this,r)}var Au=r=>{var e,t,o,i;r.type==ts.CHILD&&((e=(o=r)._$AP)!==null&&e!==void 0||(o._$AP=Eu),(t=(i=r)._$AQ)!==null&&t!==void 0||(i._$AQ=ku))},xi=class extends qr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),$l(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(Xr(this,e),bi(this))}setValue(e){if(Sl(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var yi=class extends xi{constructor(){super(...arguments),this.prevData={}}render(e){return N}update(e,[t]){var o;this.element!==e.element&&(this.element=e.element),this.host=((o=e.options)===null||o===void 0?void 0:o.host)||this.element,this.apply(t),this.groom(t),this.prevData={...t}}apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let n=e[i];n!==t[i]&&(o[i]=n)}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&(o[i]=void 0)}},Qw=Wr(yi),wi=class extends yi{constructor(){super(...arguments),this.eventData={}}apply(e){if(e)for(let t in e){let o=e[t];o!==this.eventData[t]&&this.applyEvent(t,o)}}applyEvent(e,t){let{prevData:o,element:i}=this;this.eventData[e]=t,o[e]&&i.removeEventListener(e,this,t),i.addEventListener(e,this,t)}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&this.groomEvent(i,t[i])}groomEvent(e,t){let{element:o}=this;delete this.eventData[e],o.removeEventListener(e,this,t)}handleEvent(e){let t=this.eventData[e.type];typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}disconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),n=e[o];t.removeEventListener(i,this,n)}}reconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),n=e[o];t.addEventListener(i,this,n)}}},Zw=Wr(wi),rs=class extends wi{apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let n=e[i];if(n===t[i])continue;let s=i.slice(1);switch(i[0]){case"@":this.eventData[s]=n,this.applyEvent(s,n);break;case".":o[s]=n;break;case"?":n?o.setAttribute(s,""):o.removeAttribute(s);break;default:n!=null?o.setAttribute(i,String(n)):o.removeAttribute(i);break}}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t){let n=i.slice(1);if(!e||!(i in e)&&o[n]===t[i])switch(i[0]){case"@":this.groomEvent(n,t[i]);break;case".":o[n]=void 0;break;case"?":o.removeAttribute(n);break;default:o.removeAttribute(i);break}}}},W=Wr(rs);var kl=r=>class extends r{render(){return d`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <label for="${this.fieldId}"
            >${this.option.name}${this.option.isRequired?"*":""}</label
          >
          <div class="mt-2 flex flex-row items-start gap-2">
            ${this.renderField()}
            <p class="text-mutedForeground self-center">
              ${this.option.description}
            </p>
            ${Y(this.shouldRenderError()&&typeof this.validation=="string",()=>d`<p
                class="text-sm text-error ${Y(this.editor==="intellij",()=>"mt-1")}"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>
              </div>`)}
          </div>
        </div>
      `}};var Ci=r=>{class e extends r{constructor(...i){super();this.touched=!1;this.isDefaultValue=!0;this.submitted=!1;new se(this,{context:Cr,callback:n=>{this.formValuesService=n,n.registerValidationListener(this.option.name,s=>this.validation=s),n.registerTouchedListener(this.option.name,s=>this.touched=s),n.registerDefaultValueListener(this.option.name,s=>this.isDefaultValue=s)},subscribe:!1}),new se(this,{context:bo,callback:n=>this.submitted=n,subscribe:!0}),new se(this,{context:$r,callback:n=>this.generatorContext=n,subscribe:!0})}getFormValues(){return this.formValuesService.getFormValues()}shouldRenderError(){return this.validation!==void 0&&this.validation!==!0&&(this.touched||this.submitted)}shouldRenderChanged(){return this.touched&&!this.isDefaultValue}createRenderRoot(){return this}}return g([V()],e.prototype,"validation",2),g([V()],e.prototype,"touched",2),g([V()],e.prototype,"isDefaultValue",2),g([V()],e.prototype,"submitted",2),g([V()],e.prototype,"generatorContext",2),e};var Si=r=>{class e extends r{getFieldNameForSubscription(){}connectedCallback(){super.connectedCallback?.();let o=this.getFieldNameForSubscription();o&&new se(this,{context:Cr,callback:i=>{i&&i.registerValueChangeListener(o,n=>{n!==void 0&&(this.setFieldValue(n),this.dispatchValue())})},subscribe:!0})}}return e};var me=r=>{class e extends Si(Ci(z(r))){dispatchValue(i){let n=ze(this.option),s=mo(i,n);this.dispatchEvent(new CustomEvent("option-changed",{bubbles:!0,composed:!0,detail:{name:this.option.name,value:i,isDefaultValue:s}}))}getFieldNameForSubscription(){return this.option?.name}updated(i){if(super.updated?.(i),i.has("value")&&this.value!==void 0){let n=this.value;delete this.value,this.setFieldValue(n)}}firstUpdated(i){if(super.updated(i),this.generatorContext){let a=this.generatorContext.prefillValues?.[this.option.name];if(a){this.setFieldValue(a),this.dispatchValue(a);return}}let n=ze(this.option);if(n){this.setFieldValue(n),this.dispatchValue(n);return}let s=this.getFormValues()[this.option.name];if(s){this.setFieldValue(s),this.dispatchValue(s);return}this.dispatchValue(void 0)}get fieldId(){return`${this.option.name}-field`}get ariaAttributes(){return{id:this.fieldId,"aria-invalid":`${this.shouldRenderError()}`,"aria-describedby":`${this.fieldId}-error`}}createRenderRoot(){return this}setFieldValue(i){throw new Error("Not implemented")}renderField(){throw new Error("Not implemented")}}return g([_()],e.prototype,"option",2),e};var $i=class extends kl(me(C)){renderField(){return this.editor==="intellij"?d`<input
        type="checkbox"
        class="form-checkbox ${Ce} checked:bg-primary ${J} h-5 w-5 rounded checked:border-transparent focus:ring-offset-0"
        @input="${this.handleChange}"
        ${W(this.ariaAttributes)}
      />`:d`<vscode-checkbox
        @change="${this.handleChange}"
        style="${this.shouldRenderError()?"--border-width: 1; --checkbox-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":""}"
        ${W(this.ariaAttributes)}
        ?invalid=${this.shouldRenderError()}
      ></vscode-checkbox>`}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-checkbox");t&&(t.checked=!!e)}handleChange(e){let t=e.target.checked;this.dispatchValue(t)}};$i=g([E("checkbox-field")],$i);var Re=r=>class extends r{render(){return d`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <div class="flex items-center gap-3">
            <label for="${this.fieldId}"
              >${this.option.name}${this.option.isRequired?"*":""}</label
            >
            ${Y(this.option["x-hint"],()=>d`
                <popover-element
                  class="flex items-start"
                  .content="${this.option["x-hint"]}"
                >
                  <icon-element class="flex items-start" icon="question">
                  </icon-element>
                </popover-element>
              `)}
          </div>
          <p class="text-mutedForeground mb-2">${this.option.description}</p>
          ${this.renderField()}
          ${Y(this.shouldRenderError()&&typeof this.validation=="string",()=>d`<p
                class="text-error ${Y(this.editor==="intellij",()=>"mt-1")} text-sm"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>`)}
        </div>
      `}};var Yr=class extends Re(me(C)){constructor(){super(...arguments);this.elements=[]}renderField(){return d`<div>
      <div class="flex flex-row gap-2">
        ${this.renderInputField()}
        <button-element
          text="Add"
          appearance="secondary"
          @click="${this.addValue}"
          data-cy="${this.fieldId}-add-button"
          class="flex items-center self-center"
          style="${this.shouldRenderError()?"--field-border-color: var(--error-color); --focus-border-color: var(--error-color);":""}"
        ></button-element>
      </div>
      <div class="mt-2">
        <p>${this.elements.length} items</p>
        <div class="mt-2 flex flex-row gap-4">
          ${this.elements.map((t,o)=>d`<badge-element
                text="${t}"
                fieldId="${this.fieldId}"
                @remove="${()=>this.removeValue(o)}"
              ></badge-element>`)}
        </div>
      </div>
    </div>`}renderInputField(){return this.editor==="intellij"?d` <input
        class="${Ce} ${J} ${Se} ${qe(this.shouldRenderError())})} grow rounded"
        type="text"
        @keydown="${this.handleEnterKeyAdd}"
        ${W(this.ariaAttributes)}
      />`:d`<vscode-textfield
        type="text"
        class="focus:border-focusBorder grow"
        @keydown="${this.handleEnterKeyAdd}"
        style="border-width: calc(var(--border-width) * 1px);"
        ?invalid=${this.shouldRenderError()}
        ${W(this.ariaAttributes)}
      ></vscode-textfield>`}get inputFieldSelector(){return this.editor==="intellij"?"input":"vscode-textfield"}handleEnterKeyAdd(t){t.key==="Enter"&&this.addValue()}addValue(){let t=this.querySelector(this.inputFieldSelector),o=t?.value;o&&(this.elements=[...this.elements,o],t.value="",this.dispatchValue(this.elements))}removeValue(t){let o=[...this.elements];o.splice(t,1),this.elements=o,this.dispatchValue(this.elements)}setFieldValue(t){typeof t=="string"?this.elements=t.split(","):Array.isArray(t)&&(this.elements=t)}};g([V()],Yr.prototype,"elements",2),Yr=g([E("array-field")],Yr);var ki=class extends Re(me(C)){renderField(){let e=this.shouldRenderError();return this.editor==="intellij"?d`
        <input
          class="${Ce} ${J} ${Se} ${qe(e)} rounded"
          type="text"
          @input="${this.handleChange}"
          ${W(this.ariaAttributes)}
        />
      `:d`
        <vscode-textfield
          type="text"
          @input="${this.handleChange}"
          style="border-width: calc(var(--border-width) * 1px);"
          class="focus:border-focusBorder w-full"
          ?invalid=${this.shouldRenderError()}
          ${W(this.ariaAttributes)}
        >
        </vscode-textfield>
      `}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-textfield");t&&(t.value=`${e}`)}};ki=g([E("input-field")],ki);function*He(r,e){if(r!==void 0){let t=0;for(let o of r)yield e(o,t++)}}var Qr=class extends Re(me(C)){constructor(){super(...arguments);this.selectedElements=[]}renderField(){return d`
      <div class="flex flex-col">
        ${this.renderSelectField()}
        <div class="mt-2">
          ${Y(this.selectedElements.length>0,()=>d`<p>Selected:</p>`)}
          <div class="mt-2 flex flex-row gap-4">
            ${this.selectedElements.map((t,o)=>d`<badge-element
                  text="${t}"
                  fieldId="${this.fieldId}"
                  @remove="${()=>this.removeValue(o)}"
                ></badge-element>`)}
          </div>
        </div>
      </div>
    `}renderSelectField(){if(this.editor==="intellij")return d`<select
        @change="${this.addValue}"
        class="bg-selectFieldBackground border-fieldBorder ${J} ${Se} ${qe(this.shouldRenderError())})} grow rounded border"
        ${W(this.ariaAttributes)}
      >
        <option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </option>
        ${He(this.extractItemOptions(this.option),t=>d`<option value="${t}" title="${t}">${t}</option>`)}
      </select>`;{let t=this.shouldRenderError();return d` <vscode-single-select
        @change="${this.addValue}"
        style="${Vs(t)}"
        ?invalid=${t}
        ${W(this.ariaAttributes)}
      >
        <vscode-option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </vscode-option>
        ${He(this.extractItemOptions(this.option),o=>d`<vscode-option value="${o}" title="${o}"
              >${o}</vscode-option
            >`)}
      </vscode-single-select>`}}removeValue(t){let o=[...this.selectedElements];o.splice(t,1),this.selectedElements=o,this.dispatchValue(this.selectedElements)}addValue(t){let o=t.target,i=o.value;i&&(this.selectedElements=[...this.selectedElements,i],o.value="",this.dispatchValue(this.selectedElements))}setFieldValue(t){let o=[];typeof t=="string"?o=t.split(","):Array.isArray(t)&&(o=t);let i=this.extractItemOptions(this.option);this.selectedElements=o.filter(n=>i.includes(n)),this.dispatchValue(this.selectedElements)}extractItemOptions(t){if(!t.items)return[];let o;return Array.isArray(t.items)?o=t.items:o=t.items.enum,o.filter(i=>!this.selectedElements.includes(i))}};g([V()],Qr.prototype,"selectedElements",2),Qr=g([E("multiselect-field")],Qr);var Ei=class extends Re(me(C)){renderField(){return this.editor==="intellij"?this.renderIntellij():this.renderVscode()}renderIntellij(){return d`
      <select
        @change="${this.handleChange}"
        class="form-select bg-selectFieldBackground border-fieldBorder ${J} ${Se} ${qe(this.shouldRenderError())} rounded border"
        ${W(this.ariaAttributes)}
      >
        ${Y(ze(this.option)===void 0,()=>d`<option value="">--</option>`)}
        ${He(Ue(this.option),e=>d`<option value="${e}" title="${e}">${e}</option>`)}
      </select>
    `}renderVscode(){let e=Ue(this.option),t=ze(this.option);return d`
      <vscode-single-select
        @change="${this.handleChange}"
        class="w-full"
        ?invalid=${this.shouldRenderError()}
        ${W(this.ariaAttributes)}
      >
        ${Y(t===void 0,()=>d`<vscode-option value="">--</vscode-option>`)}
        ${He(e,o=>d`<vscode-option value="${o}" title="${o}"
              >${o}</vscode-option
            >`)}
      </vscode-single-select>
    `}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"select":"vscode-single-select");t&&(t.value=e?`${e}`:"")}handleChange(e){let t=e.target.value;this.dispatchValue(t)}};Ei=g([E("select-field")],Ei);var Ai=class extends Re(me(C)){renderField(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return d`
      <vscode-single-select
        @change="${this.handleChange}"
        ${W(this.ariaAttributes)}
        ?invalid=${this.shouldRenderError()}
        class="w-full"
        filter="fuzzy"
        combobox
      >
        ${He(Ue(this.option),e=>d`<vscode-option value="${e}">${e}</vscode-option>`)}
      </vscode-single-select>
    `}renderIntellij(){return d`
      <intellij-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        ${W(this.ariaAttributes)}
      >
        ${He(Ue(this.option),e=>d`<intellij-option value="${e}">${e}</intellij-option>`)}
      </intellij-combobox>
    `}updated(){let e=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",t=this.renderRoot.querySelector(e);t&&(t.filterOptions=function(){(!this.autocomplete||this.autocomplete===xt.none)&&(this.filter="");let o=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().includes(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!o&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))})}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",o=this.renderRoot.querySelector(t);o&&customElements.whenDefined(t).then(()=>{o.value=e?`${e}`:""})}};Ai=g([E("autocomplete-field")],Ai);var ar=window?.navigator?.userAgent?.includes("Win")?"\\":"/",lr=class extends Si(wo(z(C))){constructor(){super(...arguments);this._path="";this.isEditable=!1}set path(t){this._path=t.startsWith(ar)?t.substring(1):t}get path(){return this._path}getFieldNameForSubscription(){return"cwd"}setFieldValue(t){console.log("setting cwd value",t),this.path=t}updated(t){if(super.updated(t),t.has("generatorContext")){let o=this.generatorContext?.prefillValues?.cwd;o&&(this.path=o,this.dispatchValue())}}toggleEdit(){this.isEditable=!this.isEditable,this.isEditable&&setTimeout(()=>{this.renderRoot.querySelector(this.editor==="vscode"?"vscode-textfield":"input")?.focus()},0)}confirmEdit(){this.path=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-textfield":"input")?.value||"",this.isEditable=!1,this.dispatchValue()}editToSegment(t){let o=this.path.split(ar);this.path=o.slice(0,t+1).join(ar),this.dispatchValue()}resetPath(){this.path="",this.isEditable=!1,this.dispatchValue()}render(){let t=this.path.split(ar),o=t.filter(i=>!!i).length>0;return d`
      <div
        data-cy="cwd-breadcrumb"
        class="text-mutedForeground flex flex-wrap items-center rounded py-2 text-sm leading-none"
      >
        <span class="pr-2"> Working Directory: </span>
        <span
          @click="${o?this.resetPath:()=>{}}"
          class="${o?"hover:text-primary cursor-pointer underline":""}"
        >
          {workspaceRoot}
        </span>
        <span class="mx-2">${ar}</span>
        ${this.isEditable?d`
              ${this.renderInlineEdit()}
              <icon-element
                @click="${this.toggleEdit}"
                icon="close"
                data-cy="inline-edit-cancel"
              ></icon-element>
              <icon-element
                @click="${this.confirmEdit}"
                icon="check"
                data-cy="inline-edit-confirm"
              ></icon-element>
            `:d`
              ${t.map((i,n)=>d`
                  <span
                    data-cy="cwd-breadcrumb-segment-${n}"
                    class="${n!==t.length-1?"underline cursor-pointer hover:text-primary":""}"
                    @click="${()=>this.editToSegment(n)}"
                    >${i}</span
                  >
                  ${n<t.length-1?d`<span class="mx-2">${ar}</span>`:""}
                `)}
              <button-element
                @click="${this.toggleEdit}"
                color="var(--muted-foreground-color)"
                .applyFillColor=${!1}
                appearance="icon"
                text="edit"
                class="self-center"
                data-cy="inline-edit-button"
              ></button-element>
            `}
      </div>
    `}renderInlineEdit(){return this.editor==="vscode"?d` <vscode-textfield
        type="text"
        .value="${this.path}"
        @keydown="${this.handleInlineEditKeydown}"
        data-cy="inline-edit-field"
        style="border-width: calc(var(--border-width) * 1px);"
        class="focus:border-focusBorder"
      >
      </vscode-textfield>`:d`
        <input
          class="${Ce} ${J} ${Se} cursor-pointer rounded"
          type="text"
          .value="${this.path}"
          @keydown="${this.handleInlineEditKeydown}"
          data-cy="inline-edit-field"
        />
      `}handleInlineEditKeydown(t){t.key==="Enter"&&this.confirmEdit(),t.key==="Escape"&&this.toggleEdit()}dispatchValue(){this.dispatchEvent(new CustomEvent("cwd-changed",{bubbles:!0,composed:!0,detail:this.path}))}createRenderRoot(){return this}};g([V()],lr.prototype,"_path",2),g([V()],lr.prototype,"isEditable",2),lr=g([E("cwd-breadcrumb")],lr);var kt=class extends wo(z(C)){constructor(){super(...arguments);this.showMore=!1}toggleShowMore(){this.showMore=!this.showMore}render(){let{optionsWithMetadata:t,numOfImportantOptions:o,numOfOtherOptions:i}=Ru(this.options,this.searchValue),n=this.showMore||!!this.searchValue||o===0,s=!!this.searchValue||i===0||o===0;return d`
      <div class="flex h-full w-full">
        <div
          class="border-separator ${this.editor==="intellij"?"hidden md:block":"max-sm:hidden md:w-64"} fixed h-full w-52 overflow-y-auto border-r-2 p-6"
        >
          ${this.renderOptionNav(t,n)}
        </div>
        <div
          class="${this.editor==="intellij"?"md:ml-52 md:p-6":"sm:ml-52 sm:p-6 md:ml-64"} w-full pt-6"
        >
          ${this.renderOptionsWithDivider(t,n,s)}
        </div>
      </div>
    `}renderOptionNav(t,o){return d`
      <ul>
        ${t.map(i=>{let n=this.searchValue&&!i.isInSearchResults,s=!o&&!i.isImportant;return d`<field-nav-item
            class="${n?"hidden":""}"
            .option="${i.option}"
            .greyedOut="${s}"
            @click=${a=>this.handleTreeClickEvent(a,s)}
          ></field-nav-item>`})}
      </ul>
    `}renderOptionsWithDivider(t,o,i){let n=(l,c=!1)=>{let u=_u(l.option);return d` <div
        class="${c?"hidden":""} mb-4"
        id="option-${l.option.name}"
      >
        ${u}
      </div>`};if(this.searchValue&&t.every(l=>!l.isInSearchResults))return d` <div class="flex flex-col">
        <div class="m-auto">
          Couldn't find any options matching "${this.searchValue}"
        </div>
        <button-element
          appearance="secondary"
          text="Clear Search"
          class="m-auto pt-2"
          @click=${()=>this.clearSearch()}
        ></button-element>

        <div></div>
      </div>`;if(this.searchValue)return d`<div>
        ${t.map(l=>n(l,!l.isInSearchResults))}
      </div>`;let s=t.filter(l=>l.isImportant),a=t.filter(l=>!l.isImportant);return d`
      ${s.map(l=>n(l,!1))}
      <show-more-divider
        .showMore=${this.showMore}
        @show-more=${this.toggleShowMore}
        class="${i?"hidden":""}"
      ></show-more-divider>
      ${a.map(l=>n(l,!o))}
    `}firstUpdated(){this.updateComplete.then(()=>{let t=Array.from(this.renderRoot.querySelectorAll("*")).find(o=>o.id.toLowerCase().endsWith("-field")&&o instanceof HTMLElement);t&&t.focus()})}handleTreeClickEvent(t,o){let i=t.target.innerText;o&&(this.showMore=!0),setTimeout(()=>{let n=this.querySelector(`#option-${i}`);if(!n)return;n.scrollIntoView({behavior:"smooth",block:"start"});let s=this.querySelector(`#${i}-field`);if(!s)return;let a=new IntersectionObserver(l=>{l[0].isIntersecting&&(s.focus(),a.disconnect())},{rootMargin:"0px",threshold:1});a.observe(n)},100)}clearSearch(){let t=new CustomEvent("clear-search",{});this.dispatchEvent(t)}createRenderRoot(){return this}};g([_()],kt.prototype,"options",2),g([_()],kt.prototype,"searchValue",2),g([V()],kt.prototype,"showMore",2),kt=g([E("field-list")],kt);var _u=r=>r.type==="boolean"?d` <checkbox-field .option=${r}></checkbox-field>`:r.type==="array"?r.items?d` <multiselect-field .option=${r}></multiselect-field> `:d` <array-field .option=${r}></array-field>`:r.items?Ue(r).length>10?d`<autocomplete-field .option=${r}></autocomplete-field>`:d` <select-field .option=${r}></select-field>`:d` <input-field .option=${r}></input-field>`,Ru=(r,e)=>{let t=r.map(o=>({option:o,isInSearchResults:!e||o.name.includes(e),isImportant:o.isRequired||o["x-priority"]==="important"}));return{optionsWithMetadata:t,numOfImportantOptions:t.filter(o=>o.isImportant).length,numOfOtherOptions:t.filter(o=>!o.isImportant).length}};var _i=class extends z(C){render(){return this.editor==="intellij"?d`
        <div class="relative inline-block w-full">
          <input
            class="${Ce} ${J} text-foreground w-full rounded px-2 py-2 pl-8 text-black"
            type="text"
            placeholder="Search..."
            @input="${this.handleInput}"
            id="search-bar"
          />
          <icon-element
            icon="search"
            class="absolute left-2 top-[0.7rem]"
          ></icon-element>
          <div class="absolute right-2 top-2.5">
            <kbd
              class="border-fieldBorder bg-selectFieldBackground whitespace-nowrap rounded-md border p-1 shadow"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </div>
      `:d`
        <vscode-textfield
          style="border-width: calc(var(--border-width)* 1px);"
          class="w-full"
          placeholder="Search..."
          type="text"
          @input="${this.handleInput}"
          id="search-bar"
        >
          <vscode-icon
            slot="content-before"
            name="search"
            title="search"
          ></vscode-icon>
          <div slot="content-after">
            <kbd class="bg-background whitespace-nowrap"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </vscode-textfield>
      `}clearSearch(){let e=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-textfield":"input");e&&(e.value="",e.dispatchEvent(new Event("input")))}getKeyboardShortcutSymbol(){return window.navigator.platform.toLowerCase().includes("mac")?"\u2318":"Ctrl "}createRenderRoot(){return this}handleInput(e){let t=new CustomEvent("search-input",{detail:e.target.value});this.dispatchEvent(t)}};_i=g([E("search-bar")],_i);var cr=class extends Ci(C){constructor(){super(...arguments);this.greyedOut=!1}render(){return d`
      <li
        data-cy="field-nav-item-${this.option.name}"
        @click="${this.handleTreeClickEvent}"
        class="${this.shouldRenderError()?"text-error":this.shouldRenderChanged()?"text-primary":this.greyedOut?"text-mutedForeground":"text-foreground"} hover:bg-fieldNavHoverBackground  cursor-pointer overflow-hidden 
          text-ellipsis"
      >
        ${this.option.name}
      </li>
    `}handleTreeClickEvent(){let t=new CustomEvent("click",{detail:this.option.name});this.dispatchEvent(t)}createRenderRoot(){return this}};g([_()],cr.prototype,"option",2),g([_()],cr.prototype,"greyedOut",2),cr=g([E("field-nav-item")],cr);var Zr=class extends z(C){constructor(){super(...arguments);this.showMore=!1}render(){return d`
      <div
        class="flex flex-row items-center space-x-4 pl-4"
        @click=${this.toggleShowMore}
        data-cy="show-more"
      >
        <hr
          class="grow h-0 ${this.editor==="intellij"?"border-separator":""}"
          style="${this.editor==="vscode"?"border-top: calc(var(--border-width) * 1px) solid var(--separator-color);":""}"
        />

        <div tabindex="0" aria-role="button" class="flex flex-row gap-2 leading-none focus:ring-1 focus:ring-focusBorder focus:outline-none" @keydown="${this.handleKeyEvent}">${this.showMore?"Show fewer options":"Show all options"} <icon-element icon="${this.showMore?"chevron-up":"chevron-down"}" class="self-center"></div>
      </div>
    `}handleKeyEvent(t){(t.key==="Enter"||t.key===" ")&&this.toggleShowMore(),t.key==="Tab"&&!t.shiftKey&&!this.showMore&&this.toggleShowMore()}toggleShowMore(){this.showMore=!this.showMore,this.dispatchEvent(new CustomEvent("show-more",{detail:this.showMore}))}createRenderRoot(){return this}};g([_()],Zr.prototype,"showMore",2),Zr=g([E("show-more-divider")],Zr);var ur=class extends C{constructor(){super();this.content="";this.isPopoverVisible=!1;this.addEventListener("mouseover",this.showTooltip),this.addEventListener("mouseout",this.hideTooltip)}showTooltip(){this.isPopoverVisible=!0}hideTooltip(){this.isPopoverVisible=!1}render(){return d`
      <div class="relative inline-block">
        <slot></slot>
        <div
          class="${this.isPopoverVisible?"block":"hidden"}  tooltip-content border-fieldBorder bg-badgeBackground text-foreground absolute left-0 z-10 w-max max-w-md whitespace-normal border p-1 shadow-md"
          data-cy="popover-content"
        >
          ${this.content}
        </div>
      </div>
    `}createRenderRoot(){return this}};g([_({type:String})],ur.prototype,"content",2),g([V()],ur.prototype,"isPopoverVisible",2),ur=g([E("popover-element")],ur);bl().register(Jn({prefix:"intellij",styles:wl,indicator:`<img
        src="./icons/chevron-down.svg"
        class="h-[1.25rem]"
      ></img>`}),Kn({prefix:"intellij",styles:Cl}));var Jr=class extends C{constructor(){super();this.searchValue="";this.rootStyles=io`
    --border-width: 1;
  `;this.icc=new Co(this),this.formValuesService=new xo(this),window.addEventListener("keydown",t=>this.handleGlobalKeyboardShortcuts(t))}render(){let t=this.icc.generatorSchema?.options;return d` <div
      class="text-foreground m-auto flex h-screen max-w-screen-xl flex-col p-6"
      style="${this.rootStyles}"
    >
      <div
        class="bg-background border-separator sticky top-0 z-50 w-full border-b-2 pb-3"
      >
        ${this.renderHeader()}
      </div>
      <div class="grow overflow-auto">
        ${!t||t.length===0?d`<p>No options</p>`:d` <field-list
              class="h-full"
              .options="${t}"
              .searchValue="${this.searchValue}"
              @clear-search="${()=>this.clearSearch()}"
            ></field-list>`}
      </div>
    </div>`}openNxDev(t){let o=document.createElement("a");o.href=t,o.target="_blank",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}fillWithCopilot(){this.icc.postMessageToIde({payloadType:"fill-with-copilot",payload:{generatorName:`${this.icc.generatorSchema?.collectionName}:${this.icc.generatorSchema?.generatorName}`,formValues:this.formValuesService.getFormValues()}})}createRenderRoot(){return this}renderHeader(){let t=this.icc.generatorSchema?.collectionName?.includes("@nx")||this.icc.generatorSchema?.collectionName?.includes("@nrwl"),o=`https://nx.dev/packages/${this.icc.generatorSchema?.collectionName?.replace("@nrwl/","")?.replace("@nx/","")}/generators/${this.icc.generatorSchema?.generatorName}`;return d`
      <div>
        <header class="flex items-center justify-between">
          <div class="flex flex-col flex-wrap items-start gap-2">
            <h1 class="text-xl font-bold leading-none" data-cy="title">
              ${Ts(this.icc.generatorSchema)}
            </h1>
            <h2
              class="inline-flex text-lg font-medium leading-none"
              data-cy="subtitle"
            >
              ${this.icc.generatorSchema?.collectionName}
              <popover-element
                class="flex items-center pl-2 text-base"
                .content="${this.icc.generatorSchema?.description}"
              >
                <icon-element class="flex items-start" icon="info">
                </icon-element>
              </popover-element>
            </h2>
          </div>

          <div class="flex shrink-0">
            ${Y(this.icc.editor==="vscode"&&this.icc.configuration?.hasCopilot,()=>d`
                <button-element
                  @click="${()=>this.fillWithCopilot()}"
                  title="Fill Generate UI with Copilot"
                  appearance="icon"
                  text="copilot"
                  class="self-center py-2 pl-3"
                >
                </button-element>
              `)}
            ${Y(t&&this.icc.editor==="vscode",()=>d`
                <button-element
                  @click="${()=>this.openNxDev(o)}"
                  title="Open generator documentation on nx.dev"
                  appearance="icon"
                  text="link-external"
                  class="self-center py-2 pl-3"
                >
                </button-element>
              `)}
            <button-element
              class="self-center py-2 pl-3"
              appearance="icon"
              text="copy"
              title="Copy generate command to clipboard"
              @click="${()=>this.formValuesService.copyCommandToClipboard()}"
              data-cy="copy-button"
            >
            </button-element>
            ${Y(!this.icc.configuration?.enableTaskExecutionDryRunOnChange,()=>d`
                <button-element
                  class="self-center py-2 pl-3 sm:hidden"
                  @click="${()=>this.formValuesService.runGenerator(!0)}"
                  text="debug"
                  appearance="icon"
                  title="Dry Run"
                >
                </button-element>
                <button-element
                  class="hidden py-2 pl-3 sm:block"
                  @click="${()=>this.formValuesService.runGenerator(!0)}"
                  text="Dry Run"
                  appearance="secondary"
                >
                </button-element>
              `)}

            <button-element
              class="py-2 pl-3"
              @click="${()=>this.formValuesService.runGenerator()}"
              text="Generate"
              data-cy="generate-button"
            >
            </button-element>
          </div>
        </header>
        ${Y(this.icc.banner,()=>d` <banner-element
              message="${this.icc.banner?.message}"
              type="${this.icc.banner?.type}"
            ></banner-element>`)}
        <div class="mt-5">
          <search-bar
            @search-input="${this.handleSearchValueChange}"
          ></search-bar>
          <cwd-breadcrumb></cwd-breadcrumb>
        </div>
      </div>
    `}handleSearchValueChange(t){this.searchValue=t.detail}clearSearch(){let t=this.renderRoot.querySelector("search-bar");t&&t.clearSearch()}handleGlobalKeyboardShortcuts(t){if(t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),t.shiftKey?this.formValuesService.runGenerator(!0):this.formValuesService.runGenerator()),t.key==="s"&&(t.metaKey||t.ctrlKey)){t.preventDefault();let o=this.renderRoot.querySelector('[id="search-bar"]');o&&o.focus()}}};g([V()],Jr.prototype,"searchValue",2),Jr=g([E("root-element")],Jr);export{Jr as Root};
/*! Bundled license information:

@lit-labs/ssr-dom-shim/lib/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-dom-shim/lib/events.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-dom-shim/index.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
