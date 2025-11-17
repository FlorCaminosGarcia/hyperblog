let e,t,i,o,r,a,c,h,p;var g,f,m,b,v,w,_,x,C,S={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},5090:(e,t,i)=>{i.d(t,{FlowLayout:()=>FlowLayout,flow:()=>r}),i.r(t);let SizeCache=class SizeCache{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let i=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-i}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}};function o(e){return"horizontal"===e?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){(e="horizontal"===e?e:"vertical")!==this._direction&&(this._direction=e,this._sizeDim="horizontal"===e?"width":"height",this._secondarySizeDim="horizontal"===e?"height":"width",this._positionDim="horizontal"===e?"left":"top",this._secondaryPositionDim="horizontal"===e?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:i}=this;Object.assign(this._viewportSize,e),i!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[o(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let e=this._scrollPosition,{index:t,block:i}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:i||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,i=Math.min(this.items.length,Math.max(0,e.index)),o=this._getItemPosition(i)[this._positionDim],r=o;if("start"!==t){let e=this._getItemSize(i)[this._sizeDim];if("center"===t)r=o-.5*this._viewDim1+.5*e;else{let i=o-this._viewDim1+e;if("end"===t)r=i;else{let e=this._scrollPosition;r=Math.abs(e-o)<Math.abs(e-i)?o:i}}}return r+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(r)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(-1!==this._first&&-1!==this._last)for(let t=this._first;t<=this._last;t++)e.set(t,this._getItemPosition(t));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let i=this._last;for(;i>this._first&&Math.round(this._getItemPosition(i)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)i--;(t!==this._firstVisible||i!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=i,e&&e.emit&&this._sendVisibilityChangedMessage())}};let r=e=>Object.assign({type:FlowLayout},e);function a(e){return"horizontal"===e?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(e,t){let i=new Set;for(let r of(Object.keys(e).forEach(r=>{let a=Number(r);this._metricsCache.set(a,e[a]),this._childSizeCache.set(a,e[a][o(t)]),i.add(a),i.add(a+1)}),i)){let e=this._metricsCache.get(r)?.[a(t)]||0,i=this._metricsCache.get(r-1)?.["horizontal"===t?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(r,function(e,t){let i=[e,t].sort();return i[1]<=0?Math.min(...i):i[0]>=0?Math.max(...i):i[0]+i[1]}(e,i))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[a(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let i=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(i*t.averageChildSize+(i-1)*t.averageMarginSize)}{let i=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+i*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:i}=this._metricsCache;return 0===e?this._metricsCache.getMarginSize(0)??i:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(e,t);let i=this._getPhysicalItem(this._first),o=this._getPhysicalItem(this._last),r=i.pos;if(o.pos+this._metricsCache.getChildSize(this._last)<e||r>t)return this._calculateAnchor(e,t);let a=this._firstVisible-1,c=-1/0;for(;c<e;)c=this._getPhysicalItem(++a).pos+this._metricsCache.getChildSize(a);return a}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e,t,i=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:e}=this.pin;this._anchorIdx=e,this._anchorPos=this._getPosition(e)}if(e=this._scrollPosition-this._overhang,(t=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(e,t),this._anchorPos=this._getPosition(this._anchorIdx));let o=this._getSize(this._anchorIdx);void 0===o&&(this._stable=!1,o=this._getAverageSize());let r=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,a=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=r),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-a-o);let c=0;for(this._anchorPos+o+a<e&&(c=e-(this._anchorPos+o+a)),this._anchorPos-r>t&&(c=t-(this._anchorPos-r)),c&&(this._scrollPosition-=c,e-=c,t-=c,this._scrollError+=c),i.set(this._anchorIdx,{pos:this._anchorPos,size:o}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-r,this._physicalMax=this._anchorPos+o+a;this._physicalMin>e&&this._first>0;){let e=this._getSize(--this._first);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._first);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize),this._physicalMin-=e;let o=this._physicalMin;if(i.set(this._first,{pos:o,size:e}),this._physicalMin-=t,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<t&&this._last<this.items.length-1;){let e=this._getSize(++this._last);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._last);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize);let o=this._physicalMax;if(i.set(this._last,{pos:o,size:e}),this._physicalMax+=e+t,!this._stable&&!this._estimate)break}let h=this._calculateError();h&&(this._physicalMin-=h,this._physicalMax-=h,this._anchorPos-=h,this._scrollPosition-=h,i.forEach(e=>e.pos-=h),this._scrollError+=h),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}},6047:(e,t,i)=>{i(602)}},A={};function E(e){var t=A[e];if(void 0!==t)return t.exports;var i=A[e]={exports:{}};return S[e](i,i.exports,E),i.exports}E.d=(e,t)=>{for(var i in t)E.o(t,i)&&!E.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},E.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Object.defineProperty(E,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let P=globalThis,T=P.ShadowRoot&&(void 0===P.ShadyCSS||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O=Symbol(),D=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==O)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(T&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=D.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&D.set(t,e))}return e}toString(){return this.cssText}};let B=e=>new n("string"==typeof e?e:e+"",void 0,O),F=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,O),j=T?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return B(t)})(e):e,{is:U,defineProperty:q,getOwnPropertyDescriptor:V,getOwnPropertyNames:W,getOwnPropertySymbols:G,getPrototypeOf:K}=Object,Z=globalThis,Y=Z.trustedTypes,X=Y?Y.emptyScript:"",J=Z.reactiveElementPolyfillSupport,ee={toAttribute(e,t){switch(t){case Boolean:e=e?X:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ei=(e,t)=>!U(e,t),eo={attribute:!0,type:String,converter:ee,reflect:!1,useDefault:!1,hasChanged:ei};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=eo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&q(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=V(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let a=o?.call(this);r?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??eo}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=K(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...W(e),...G(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(j(i));else void 0!==e&&t.push(j(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(T)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=P.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:ee).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ee;this._$Em=o;let a=r.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){let o=this.constructor,r=this[e];if(!(((i??=o.getPropertyOptions(e)).hasChanged??ei)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,J?.({ReactiveElement:y}),(Z.reactiveElementVersions??=[]).push("2.1.1");let er=globalThis,es=er.trustedTypes,en=es?es.createPolicy("lit-html",{createHTML:e=>e}):void 0,ea="$lit$",el=`lit$${Math.random().toFixed(9).slice(2)}$`,ec="?"+el,eh=`<${ec}>`,ed=document,ep=()=>ed.createComment(""),eu=e=>null===e||"object"!=typeof e&&"function"!=typeof e,eg=Array.isArray,ef=e=>eg(e)||"function"==typeof e?.[Symbol.iterator],em=`[ 	
\f\r]`,eb=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ev=/-->/g,ey=/>/g,ew=RegExp(`>|${em}(?:([^\\s"'>=/]+)(${em}*=${em}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e_=/'/g,ex=/"/g,ek=/^(?:script|style|textarea|title)$/i,e$=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),eC=e$(1),eS=(e$(2),e$(3),Symbol.for("lit-noChange")),eA=Symbol.for("lit-nothing"),eE=new WeakMap,eP=ed.createTreeWalker(ed,129);function eR(e,t){if(!eg(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==en?en.createHTML(t):t}let eI=(e,t)=>{let i=e.length-1,o=[],r,a=2===t?"<svg>":3===t?"<math>":"",c=eb;for(let t=0;t<i;t++){let i=e[t],h,p,g=-1,f=0;for(;f<i.length&&(c.lastIndex=f,null!==(p=c.exec(i)));)f=c.lastIndex,c===eb?"!--"===p[1]?c=ev:void 0!==p[1]?c=ey:void 0!==p[2]?(ek.test(p[2])&&(r=RegExp("</"+p[2],"g")),c=ew):void 0!==p[3]&&(c=ew):c===ew?">"===p[0]?(c=r??eb,g=-1):void 0===p[1]?g=-2:(g=c.lastIndex-p[2].length,h=p[1],c=void 0===p[3]?ew:'"'===p[3]?ex:e_):c===ex||c===e_?c=ew:c===ev||c===ey?c=eb:(c=ew,r=void 0);let m=c===ew&&e[t+1].startsWith("/>")?" ":"";a+=c===eb?i+eh:g>=0?(o.push(h),i.slice(0,g)+ea+i.slice(g)+el+m):i+el+(-2===g?t:m)}return[eR(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let N=class N{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0,c=e.length-1,h=this.parts,[p,g]=eI(e,t);if(this.el=N.createElement(p,i),eP.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eP.nextNode())&&h.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(ea)){let t=g[a++],i=o.getAttribute(e).split(el),c=/([.?@])?(.*)/.exec(t);h.push({type:1,index:r,name:c[2],strings:i,ctor:"."===c[1]?H:"?"===c[1]?I:"@"===c[1]?L:k}),o.removeAttribute(e)}else e.startsWith(el)&&(h.push({type:6,index:r}),o.removeAttribute(e));if(ek.test(o.tagName)){let e=o.textContent.split(el),t=e.length-1;if(t>0){o.textContent=es?es.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],ep()),eP.nextNode(),h.push({type:2,index:++r});o.append(e[t],ep())}}}else if(8===o.nodeType)if(o.data===ec)h.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(el,e+1));)h.push({type:7,index:r}),e+=el.length-1}r++}}static createElement(e,t){let i=ed.createElement("template");return i.innerHTML=e,i}};function eT(e,t,i=e,o){if(t===eS)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,a=eu(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=eT(e,r._$AS(e,t.values),r,o)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??ed).importNode(t,!0);eP.currentNode=o;let r=eP.nextNode(),a=0,c=0,h=i[0];for(;void 0!==h;){if(a===h.index){let t;2===h.type?t=new R(r,r.nextSibling,this,e):1===h.type?t=new h.ctor(r,h.name,h.strings,this,e):6===h.type&&(t=new z(r,this,e)),this._$AV.push(t),h=i[++c]}a!==h?.index&&(r=eP.nextNode(),a++)}return eP.currentNode=ed,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=eA,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){eu(e=eT(this,e,t))?e===eA||null==e||""===e?(this._$AH!==eA&&this._$AR(),this._$AH=eA):e!==this._$AH&&e!==eS&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ef(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==eA&&eu(this._$AH)?this._$AA.nextSibling.data=e:this.T(ed.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=N.createElement(eR(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new M(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=eE.get(e.strings);return void 0===t&&eE.set(e.strings,t=new N(e)),t}k(e){eg(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new R(this.O(ep()),this.O(ep()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=eA,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=eA}_$AI(e,t=this,i,o){let r=this.strings,a=!1;if(void 0===r)(a=!eu(e=eT(this,e,t,0))||e!==this._$AH&&e!==eS)&&(this._$AH=e);else{let o,c,h=e;for(e=r[0],o=0;o<r.length-1;o++)(c=eT(this,h[i+o],t,o))===eS&&(c=this._$AH[o]),a||=!eu(c)||c!==this._$AH[o],c===eA?e=eA:e!==eA&&(e+=(c??"")+r[o+1]),this._$AH[o]=c}a&&!o&&this.j(e)}j(e){e===eA?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===eA?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==eA)}};let L=class L extends k{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=eT(this,e,t,0)??eA)===eS)return;let i=this._$AH,o=e===eA&&i!==eA||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==eA&&(i===eA||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eT(this,e)}};let ez=er.litHtmlPolyfillSupport;ez?.(N,R),(er.litHtmlVersions??=[]).push("3.3.1");let eM=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new R(t.insertBefore(ep(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eS}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eM.litElementHydrateSupport?.({LitElement:lit_element_i});let eO=eM.litElementPolyfillSupport;eO?.({LitElement:lit_element_i}),(eM.litElementVersions??=[]).push("4.2.1");let eL=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eD={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:ei};function eB(e){return(t,i)=>{let o;return"object"==typeof i?((e=eD,t,i)=>{let{kind:o,metadata:r}=i,a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,i):(o=t.hasOwnProperty(i),t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eN(e){return eB({...e,state:!0,attribute:!1})}let eF=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function ej(e,t){return(i,o,r)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:c}="object"==typeof o?i:r??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eF(i,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=a(this))||this.hasUpdated)&&c.call(this,e),e}})}return eF(i,o,{get(){return a(this)}})}}function eU(e,t,i){return e?t(e):i?.(e)}function eH(e){let t=.001*performance.now(),i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(o-=e[1])<0&&(i--,o+=1e9)),[i,o]}E(6047);var eq=((g=eq||{})[g.Hash=35]="Hash",g[g.Slash=47]="Slash",g[g.Digit0=48]="Digit0",g[g.Digit1=49]="Digit1",g[g.Digit2=50]="Digit2",g[g.Digit3=51]="Digit3",g[g.Digit4=52]="Digit4",g[g.Digit5=53]="Digit5",g[g.Digit6=54]="Digit6",g[g.Digit7=55]="Digit7",g[g.Digit8=56]="Digit8",g[g.Digit9=57]="Digit9",g[g.Backslash=92]="Backslash",g[g.A=65]="A",g[g.B=66]="B",g[g.C=67]="C",g[g.D=68]="D",g[g.E=69]="E",g[g.F=70]="F",g[g.Z=90]="Z",g[g.a=97]="a",g[g.b=98]="b",g[g.c=99]="c",g[g.d=100]="d",g[g.e=101]="e",g[g.f=102]="f",g[g.z=122]="z",g),eV=((f=eV||{}).AngleBracketLeftHeavy="❰",f.AngleBracketRightHeavy="❱",f.ArrowBack="↩",f.ArrowDown="↓",f.ArrowDownUp="⇵",f.ArrowDropRight="⤷",f.ArrowHeadRight="➤",f.ArrowLeft="←",f.ArrowLeftDouble="⇐",f.ArrowLeftRight="↔",f.ArrowLeftRightDouble="⇔",f.ArrowLeftRightDoubleStrike="⇎",f.ArrowLeftRightLong="⟷",f.ArrowRight="→",f.ArrowRightDouble="⇒",f.ArrowRightHollow="⇨",f.ArrowUp="↑",f.ArrowUpDown="⇅",f.ArrowUpRight="↗",f.ArrowsHalfLeftRight="⇋",f.ArrowsHalfRightLeft="⇌",f.ArrowsLeftRight="⇆",f.ArrowsRightLeft="⇄",f.Asterisk="∗",f.Bullseye="◎",f.Check="✔",f.Dash="—",f.Dot="•",f.Ellipsis="…",f.EnDash="–",f.Envelope="✉",f.EqualsTriple="≡",f.Flag="⚑",f.FlagHollow="⚐",f.MiddleEllipsis="⋯",f.MuchLessThan="≪",f.MuchGreaterThan="≫",f.Pencil="✎",f.Space=" ",f.SpaceThin=" ",f.SpaceThinnest=" ",f.SquareWithBottomShadow="❏",f.SquareWithTopShadow="❐",f.Warning="⚠",f.ZeroWidthSpace="​",f);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var eW=((m=eW||{}).File="file",m.Git="git",m.GitHub="github",m.GitLens="gitlens",m.GitLensAIMarkdown="gitlens-ai-markdown",m.PRs="pr",m.Remote="vscode-remote",m.Vsls="vsls",m.VslsScc="vsls-scc",m.Virtual="vscode-vfs",m);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let eG="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",eK=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${eG}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${eG}`,graph:`https://gitkraken.com/solutions/commit-graph?${eG}`,launchpad:`https://gitkraken.com/solutions/launchpad?${eG}`,platform:`https://gitkraken.com/devex?${eG}`,pricing:`https://gitkraken.com/gitlens/pricing?${eG}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${eG}`,security:`https://help.gitkraken.com/gitlens/security?${eG}`,workspaces:`https://gitkraken.com/solutions/workspaces?${eG}`,cli:`https://gitkraken.com/cli?${eG}`,browserExtension:`https://gitkraken.com/browser-extension?${eG}`,desktop:`https://gitkraken.com/git-client?${eG}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${eG}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${eG}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${eG}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${eG}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${eG}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${eG}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${eG}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`}),eZ=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,eY=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,eX=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],eJ=new Map,eQ=new Map,e0=["th","st","nd","rd"];function e1(t,i){null==t&&(t="decimal");let o=`${i??""}:${t}`,r=eQ.get(o);if(null==r){let a={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],a),eQ.set(o,r)}return r.format}function e2(e){let[t,i]=eH(e);return 1e3*t+Math.floor(i/1e6)}function e5(e,t,i){let r;if(null==i)return o??=e1(),`${o(t)} ${e}${1===t?"":"s"}`;let a=1===t?e:i.plural??`${e}s`;return i.only?a:(0===t?r=i.zero??t:!1===i.format?r=t:null!=i.format?r=i.format(t):(o??=e1(),r=o(t)),`${r}${i.infix??" "}${a}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let IpcCall=class IpcCall{constructor(e,t,i=!1){this.scope=e,this.reset=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i){super(e,t,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let e3=new IpcRequest("core","webview/ready"),e6=new IpcCommand("core","webview/focus/changed"),e7=new IpcCommand("core","command/execute"),e8=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let e9=new IpcCommand("core","telemetry/sendEvent"),e4=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let te=new IpcCommand("core","webview/focus/didChange"),tt=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let ti="commitDetails",to=`\0
\0`,tr=new IpcCommand(ti,"commit/suggestChanges"),ts=new IpcCommand(ti,"commit/actions/execute"),tn=new IpcCommand(ti,"file/actions/execute"),ta=new IpcCommand(ti,"file/open"),tl=new IpcCommand(ti,"file/openOnRemote"),tc=new IpcCommand(ti,"file/compareWorking"),th=new IpcCommand(ti,"file/comparePrevious"),td=new IpcCommand(ti,"file/stage"),tp=new IpcCommand(ti,"file/unstage"),tu=new IpcCommand(ti,"pickCommit"),tg=new IpcCommand(ti,"searchCommit"),tf=new IpcCommand(ti,"switchMode");new IpcCommand(ti,"autolinkSettings");let tm=new IpcCommand(ti,"pin"),tb=new IpcCommand(ti,"navigate"),tv=new IpcCommand(ti,"preferences/update"),ty=new IpcCommand(ti,"wip/createPatch"),tw=new IpcCommand(ti,"wip/changeReviewMode"),t_=new IpcCommand(ti,"wip/showCodeSuggestion"),tx=new IpcCommand(ti,"fetch"),tk=new IpcCommand(ti,"publish"),t$=new IpcCommand(ti,"push"),tC=new IpcCommand(ti,"pull"),tS=new IpcCommand(ti,"switch"),tA=new IpcCommand(ti,"openPullRequestChanges"),tE=new IpcCommand(ti,"openPullRequestComparison"),tP=new IpcCommand(ti,"openPullRequestOnRemote"),tR=new IpcCommand(ti,"openPullRequestDetails"),tI=new IpcRequest(ti,"explain"),tT=new IpcRequest(ti,"generate"),tz=new IpcRequest(ti,"reachability"),tM=new IpcNotification(ti,"didChange",!0),tO=new IpcNotification(ti,"didChange/wip");new IpcNotification(ti,"org/settings/didChange");let tL=new IpcNotification(ti,"didChange/account"),tD=new IpcNotification(ti,"didChange/patch"),tB=new IpcNotification(ti,"didChange/integrations");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=o??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tN({context:e}){return(t,i)=>{let o=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){let e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=a.set;r={...a,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,r)}}}function tF(e,t,i){let o,r,a,c,h,p,g,f,m,b,v=0;null!=i&&({edges:p,maxWait:g,signal:f,aggregator:m}=i);let w="leading"===(p??="trailing")||"both"===p,_="trailing"===p||"both"===p;function x(){if(null!=o){v=Date.now();let t=o,i=b;return b=void 0,o=void 0,a=e.apply(i,t)}}function C(){null!=c&&(clearTimeout(c),c=void 0)}function S(){null!=h&&(clearTimeout(h),h=void 0)}function A(){C(),S(),b=void 0,o=void 0,r=void 0,v=0}function E(...e){if(f?.aborted)return;let i=Date.now();null!=m&&null!=o?o=m(o,e):(b=this,o=e);let p=null==c&&null==h;r=i,C();let S=Date.now();if(r=S,c=setTimeout(()=>{var e;let i,o;c=void 0,i=(e=Date.now())-(r??0),o=e-v,(null==r||i>=t||i<0||null!=g&&o>=g)&&_&&x(),A()},t),null!=g&&!h){let e=g-(S-v);e>0?h=setTimeout(()=>{h=void 0,_&&null!=o&&x(),v=Date.now()},e):(_&&null!=o&&x(),A())}return w&&p?x():a}return E.cancel=A,E.flush=function(){return C(),S(),x()},E.pending=function(){return null!=c||null!=h},f?.addEventListener("abort",A,{once:!0}),E}let tj=new WeakMap;function tU(e,t){return function(i,o,r){let a=tj.get(i.constructor);null==a&&tj.set(i.constructor,a=[]),a.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){let t=tj.get(this.constructor);if(null!=t)for(let{keys:i,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};var tH=((b=tH||{})[b.Off=0]="Off",b[b.Error=1]="Error",b[b.Warn=2]="Warn",b[b.Info=3]="Info",b[b.Debug=4]="Debug",b);let tq=["accessToken","password","token"],tV=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){if(null!=e.sanitizeKeys)for(let t of tq)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tq);this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=tW(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tW(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let i;this.level<4&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...i){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let i;this.level<3&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let i;this.level<2&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,(e,i)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(i=t(e,i)),this.provider?.sanitizer!=null&&(i=this.provider.sanitizer(e,i)),i))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};function tW(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tG=new WeakMap,tK={enabled:e=>tV.enabled(e)||tV.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":tV.error(void 0,t,i,...o);break;case"warn":tV.warn(t,i,...o);break;case"info":tV.log(t,i,...o);break;default:tV.debug(t,i,...o)}}},tZ=0x40000000-1;function tY(){let e=0;return{get current(){return e},next:function(){return e===tZ&&(e=0),++e},reset:function(){e=0}}}let tX=tY(),tJ=new Map;function tQ(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function t0(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let i=t?tX.current:void 0,o=tX.next();return{scopeId:o,prevScopeId:i,prefix:`${tQ(o,i)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=t0(e,void 0),tV.configure({name:e,createChannel:function(e){return{name:e,appendLine:tV.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tV.log(this.scope,e,...t):tV.log(e,t.shift(),...t)}};let t1="home";new IpcRequest(t1,"launchpad/summary"),new IpcRequest(t1,"overview/active"),new IpcRequest(t1,"overview/inactive"),new IpcRequest(t1,"overviewFilter"),new IpcCommand(t1,"overview/repository/change"),new IpcNotification(t1,"overview/repository/didChange"),new IpcCommand(t1,"previewEnabled/toggle"),new IpcCommand(t1,"section/collapse"),new IpcCommand(t1,"walkthrough/dismiss"),new IpcNotification(t1,"ai/allAccess/didChange"),new IpcNotification(t1,"mcp/didChange"),new IpcCommand(t1,"ai/allAccess/dismiss"),new IpcCommand(t1,"overview/filter/set"),new IpcCommand(t1,"openInGraph"),new IpcNotification(t1,"repositories/didCompleteDiscovering"),new IpcNotification(t1,"previewEnabled/didChange"),new IpcNotification(t1,"repository/wip/didChange"),new IpcNotification(t1,"repositories/didChange"),new IpcNotification(t1,"walkthroughProgress/didChange"),new IpcNotification(t1,"integrations/didChange"),new IpcNotification(t1,"launchpad/didChange");let t2=new IpcNotification(t1,"subscription/didChange");new IpcNotification(t1,"org/settings/didChange"),new IpcNotification(t1,"home/ownerFilter/didChange"),new IpcNotification(t1,"account/didFocus");let t5="graph";new IpcCommand(t5,"chooseRepository"),new IpcCommand(t5,"dblclick"),new IpcCommand(t5,"dblclick"),new IpcCommand(t5,"avatars/get"),new IpcCommand(t5,"refs/metadata/get"),new IpcCommand(t5,"rows/get"),new IpcCommand(t5,"pullRequest/openDetails"),new IpcCommand(t5,"search/openInView"),new IpcCommand(t5,"columns/update"),new IpcCommand(t5,"refs/update/visibility"),new IpcCommand(t5,"filters/update/excludeTypes"),new IpcCommand(t5,"configuration/update"),new IpcCommand(t5,"search/update/mode"),new IpcCommand(t5,"filters/update/includedRefs"),new IpcCommand(t5,"selection/update"),new IpcRequest(t5,"jumpToHead"),new IpcRequest(t5,"chooseRef"),new IpcRequest(t5,"rows/ensure"),new IpcRequest(t5,"search/history/get"),new IpcRequest(t5,"search/history/store"),new IpcRequest(t5,"search/history/delete"),new IpcRequest(t5,"counts"),new IpcRequest(t5,"row/hover/get"),new IpcRequest(t5,"search"),new IpcNotification(t5,"repositories/integration/didChange"),new IpcNotification(t5,"didChange",!0),new IpcNotification(t5,"configuration/didChange");let t3=new IpcNotification(t5,"subscription/didChange");new IpcNotification(t5,"org/settings/didChange"),new IpcNotification(t5,"avatars/didChange"),new IpcNotification(t5,"mcp/didChange"),new IpcNotification(t5,"branchState/didChange"),new IpcNotification(t5,"refs/didChangeMetadata"),new IpcNotification(t5,"columns/didChange"),new IpcNotification(t5,"scrollMarkers/didChange"),new IpcNotification(t5,"refs/didChangeVisibility"),new IpcNotification(t5,"rows/didChange"),new IpcNotification(t5,"rows/stats/didChange"),new IpcNotification(t5,"selection/didChange"),new IpcNotification(t5,"workingTree/didChange"),new IpcNotification(t5,"didSearch"),new IpcNotification(t5,"didFetch"),new IpcNotification(t5,"featurePreview/didStart");let t6="timeline";new IpcRequest(t6,"ref/choose"),new IpcRequest(t6,"path/choose"),new IpcCommand(t6,"point/open"),new IpcCommand(t6,"config/update"),new IpcCommand(t6,"scope/update");let t7=new IpcNotification(t6,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(t2.is(e)||t3.is(e)||t7.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let i=`${e}|${t}`,o=this._promos.get(i);return null==o&&(o=this.ipc.sendRequest(e8,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(i,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(e9,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var t8=Uint8Array,t9=Uint16Array,t4=Int32Array,ie=new t8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ii=new t8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),io=new t8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ir=function(e,t){for(var i=new t9(31),o=0;o<31;++o)i[o]=t+=1<<e[o-1];for(var r=new t4(i[30]),o=1;o<30;++o)for(var a=i[o];a<i[o+1];++a)r[a]=a-i[o]<<5|o;return{b:i,r:r}},is=ir(ie,2),ia=is.b,il=is.r;ia[28]=258,il[258]=28;var ic=ir(ii,0),ih=ic.b;ic.r;for(var id=new t9(32768),ip=0;ip<32768;++ip){var iu=(43690&ip)>>1|(21845&ip)<<1;iu=(61680&(iu=(52428&iu)>>2|(13107&iu)<<2))>>4|(3855&iu)<<4,id[ip]=((65280&iu)>>8|(255&iu)<<8)>>1}for(var ig=function(e,t,i){for(var o,r=e.length,a=0,c=new t9(t);a<r;++a)e[a]&&++c[e[a]-1];var h=new t9(t);for(a=1;a<t;++a)h[a]=h[a-1]+c[a-1]<<1;if(i){o=new t9(1<<t);var p=15-t;for(a=0;a<r;++a)if(e[a])for(var g=a<<4|e[a],f=t-e[a],m=h[e[a]-1]++<<f,b=m|(1<<f)-1;m<=b;++m)o[id[m]>>p]=g}else for(a=0,o=new t9(r);a<r;++a)e[a]&&(o[a]=id[h[e[a]-1]++]>>15-e[a]);return o},im=new t8(288),ip=0;ip<144;++ip)im[ip]=8;for(var ip=144;ip<256;++ip)im[ip]=9;for(var ip=256;ip<280;++ip)im[ip]=7;for(var ip=280;ip<288;++ip)im[ip]=8;for(var ib=new t8(32),ip=0;ip<32;++ip)ib[ip]=5;var iv=ig(im,9,1),iy=ig(ib,5,1),iw=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},i_=function(e,t,i){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&i},ix=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(7&t)},ik=function(e,t,i){return(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length),new t8(e.subarray(t,i))},i$=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],iC=function(e,t,i){var o=Error(t||i$[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,iC),!i)throw o;return o},iS=function(e,t,i,o){var r=e.length,a=o?o.length:0;if(!r||t.f&&!t.l)return i||new t8(0);var c=!i,h=c||2!=t.i,p=t.i;c&&(i=new t8(3*r));var g=function(e){var t=i.length;if(e>t){var o=new t8(Math.max(2*t,e));o.set(i),i=o}},f=t.f||0,m=t.p||0,b=t.b||0,v=t.l,w=t.d,_=t.m,x=t.n,C=8*r;do{if(!v){f=i_(e,m,1);var S=i_(e,m+1,3);if(m+=3,S)if(1==S)v=iv,w=iy,_=9,x=5;else if(2==S){var A=i_(e,m,31)+257,E=i_(e,m+10,15)+4,P=A+i_(e,m+5,31)+1;m+=14;for(var T=new t8(P),O=new t8(19),D=0;D<E;++D)O[io[D]]=i_(e,m+3*D,7);m+=3*E;for(var B=iw(O),F=(1<<B)-1,j=ig(O,B,1),D=0;D<P;){var U=j[i_(e,m,F)];m+=15&U;var q=U>>4;if(q<16)T[D++]=q;else{var V=0,W=0;for(16==q?(W=3+i_(e,m,3),m+=2,V=T[D-1]):17==q?(W=3+i_(e,m,7),m+=3):18==q&&(W=11+i_(e,m,127),m+=7);W--;)T[D++]=V}}var G=T.subarray(0,A),K=T.subarray(A);_=iw(G),x=iw(K),v=ig(G,_,1),w=ig(K,x,1)}else iC(1);else{var q=((m+7)/8|0)+4,Z=e[q-4]|e[q-3]<<8,Y=q+Z;if(Y>r){p&&iC(0);break}h&&g(b+Z),i.set(e.subarray(q,Y),b),t.b=b+=Z,t.p=m=8*Y,t.f=f;continue}if(m>C){p&&iC(0);break}}h&&g(b+131072);for(var X=(1<<_)-1,J=(1<<x)-1,ee=m;;ee=m){var V=v[ix(e,m)&X],ei=V>>4;if((m+=15&V)>C){p&&iC(0);break}if(V||iC(2),ei<256)i[b++]=ei;else if(256==ei){ee=m,v=null;break}else{var eo=ei-254;if(ei>264){var D=ei-257,er=ie[D];eo=i_(e,m,(1<<er)-1)+ia[D],m+=er}var es=w[ix(e,m)&J],en=es>>4;es||iC(3),m+=15&es;var K=ih[en];if(en>3){var er=ii[en];K+=ix(e,m)&(1<<er)-1,m+=er}if(m>C){p&&iC(0);break}h&&g(b+131072);var ea=b+eo;if(b<K){var el=a-K,ec=Math.min(K,ea);for(el+b<0&&iC(3);b<ec;++b)i[b]=o[el+b]}for(;b<ea;++b)i[b]=i[b-K]}}t.l=v,t.p=ee,t.b=b,t.f=f,v&&(f=1,t.m=_,t.d=w,t.n=x)}while(!f)return b!=i.length&&c?ik(i,0,b):i.subarray(0,b)},iA=new t8(0),iE="undefined"!=typeof TextDecoder&&new TextDecoder;try{iE.decode(iA,{stream:!0})}catch{}var iP=function(e){for(var t="",i=0;;){var o=e[i++],r=(o>127)+(o>223)+(o>239);if(i+r>e.length)return{s:t,r:ik(e,i-1)};r?3==r?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536)>>10,56320|1023&o):1&r?t+=String.fromCharCode((31&o)<<6|63&e[i++]):t+=String.fromCharCode((15&o)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(o)}};function iR(e,t){if(t){for(var i="",o=0;o<e.length;o+=16384)i+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return i}if(iE)return iE.decode(e);var r=iP(e),a=r.s,i=r.r;return i.length&&iC(8),a}"function"==typeof queueMicrotask&&queueMicrotask;let iI=/\(([\s\S]*)\)/,iT=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,iz=/\s?=.*$/;function iM(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function iO(e,t=!1){let i,o,r,a,c,h=0,p=!1,g=!1,f=!0;null!=e&&({args:i,if:o,enter:r,exit:a,prefix:c,logThreshold:h=0,scoped:p=!0,singleLine:g=!1,timed:f=!0}=e),h>0&&(g=!0,f=!0),f&&(p=!0);let m=tV.isDebugging,b=t?tV.debug:tV.log,v=m?"debug":"info";return(e,t,w)=>{let _,x;if("function"==typeof w.value?(_=w.value,x="value"):"function"==typeof w.get&&(_=w.get,x="get"),null==_||null==x)throw Error("Not supported");let C=!1!==i?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(iT,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");i=i>=0?i+1:0,o=o>0?o:t.indexOf("="),t=t.slice(i,o),t=`(${t})`;let r=iI.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(iz,"")):[]}(_):[];w[x]=function(...e){var w;let x,S;if(!m&&!tV.enabled(v)||null!=o&&!o.apply(this,e))return _.apply(this,e);let A=tX.current,E=tX.next(),P=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",o=i.indexOf("_");-1!==o&&(i=i.substring(o+1));let r=tG.get(t);return r?.(e,i)??i}(this):void 0,T=P?p?`${tQ(E,A)} ${P}.${t}`:`${P}.${t}`:t;null!=c&&(T=c({id:E,instance:this,instanceName:P??"",name:t,prefix:T},...e)),p&&(w={scopeId:E,prevScopeId:A,prefix:T},w={prevScopeId:tX.current,...w},tJ.set(E,w),x=w);let O=null!=r?r(...e):"";if(!1===i||0===e.length)S="",g||b.call(tV,`${T}${O}`);else{let t,o,r,a;S="";let c=-1;for(a of e){if(o=C[++c],null!=(t=i?.[c])){if("boolean"==typeof t)continue;if(S.length>0&&(S+=", "),"string"==typeof t){S+=t;continue}r=String(t(a))}else S.length>0&&(S+=", "),r=tV.toLoggable(a);S+=o?`${o}=${r}`:r}g||b.call(tV,S?`${T}${O}(${S})`:`${T}${O}`)}if(g||f||null!=a){let t,i=f?eH():void 0,o=e=>{let t=void 0!==i?` [${e2(i)}ms]`:"";g?tV.error(e,S?`${T}${O}(${S})`:`${T}${O}`,x?.exitDetails?`failed${x.exitDetails}${t}`:`failed${t}`):tV.error(e,T,x?.exitDetails?`failed${x.exitDetails}${t}`:`failed${t}`),p&&tJ.delete(E)};try{t=_.apply(this,e)}catch(e){throw o(e),e}let r=e=>{let t,o,r,c;if(null!=i?(t=e2(i))>500?(o=tV.warn,r=` [*${t}ms] (slow)`):(o=b,r=` [${t}ms]`):(r="",o=b),null!=a)if("function"==typeof a)try{c=a(e)}catch(e){c=`@log.exit error: ${e}`}else!0===a&&(c=`returned ${tV.toLoggable(e)}`);else x?.exitFailed?(c=x.exitFailed,o=(e,...t)=>tV.error(null,e,...t)):c="completed";g?(0===h||t>h)&&o.call(tV,S?`${T}${O}(${S}) ${c}${x?.exitDetails||""}${r}`:`${T}${O} ${c}${x?.exitDetails||""}${r}`):o.call(tV,S?`${T}(${S}) ${c}${x?.exitDetails||""}${r}`:`${T} ${c}${x?.exitDetails||""}${r}`),p&&tJ.delete(E)};return null!=t&&iM(t)?t.then(r,o):r(t),t}return _.apply(this,e)}}}(()=>{let e;var t,i,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,o="",r=0,a=-1,c=0,h=0;h<=e.length;++h){if(h<e.length)i=e.charCodeAt(h);else{if(47===i)break;i=47}if(47===i){if(a===h-1||1===c);else if(a!==h-1&&2===c){if(o.length<2||2!==r||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var p=o.lastIndexOf("/");if(p!==o.length-1){-1===p?(o="",r=0):r=(o=o.slice(0,p)).length-1-o.lastIndexOf("/"),a=h,c=0;continue}}else if(2===o.length||1===o.length){o="",r=0,a=h,c=0;continue}}t&&(o.length>0?o+="/..":o="..",r=2)}else o.length>0?o+="/"+e.slice(a+1,h):o=e.slice(a+1,h),r=h-a-1;a=h,c=0}else 46===i&&-1!==c?++c:c=-1}return o}var o={resolve:function(){for(var e,o,r="",a=!1,c=arguments.length-1;c>=-1&&!a;c--)c>=0?e=arguments[c]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(r=e+"/"+r,a=47===e.charCodeAt(0));return r=i(r,!a),a?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!o)).length||o||(e="."),e.length>0&&r&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var r=arguments[i];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=o.resolve(e))===(i=o.resolve(i)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var a=e.length,c=a-r,h=1;h<i.length&&47===i.charCodeAt(h);++h);for(var p=i.length-h,g=c<p?c:p,f=-1,m=0;m<=g;++m){if(m===g){if(p>g){if(47===i.charCodeAt(h+m))return i.slice(h+m+1);if(0===m)return i.slice(h+m)}else c>g&&(47===e.charCodeAt(r+m)?f=m:0===m&&(f=0));break}var b=e.charCodeAt(r+m);if(b!==i.charCodeAt(h+m))break;47===b&&(f=m)}var v="";for(m=r+f+1;m<=a;++m)m!==a&&47!==e.charCodeAt(m)||(0===v.length?v+="..":v+="/..");return v.length>0?v+i.slice(h+f):(h+=f,47===i.charCodeAt(h)&&++h,i.slice(h))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),o=47===i,r=-1,a=!0,c=e.length-1;c>=1;--c)if(47===(i=e.charCodeAt(c))){if(!a){r=c;break}}else a=!1;return -1===r?o?"/":".":o&&1===r?"//":e.slice(0,r)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var o,r=0,a=-1,c=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var h=i.length-1,p=-1;for(o=e.length-1;o>=0;--o){var g=e.charCodeAt(o);if(47===g){if(!c){r=o+1;break}}else -1===p&&(c=!1,p=o+1),h>=0&&(g===i.charCodeAt(h)?-1==--h&&(a=o):(h=-1,a=p))}return r===a?a=p:-1===a&&(a=e.length),e.slice(r,a)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!c){r=o+1;break}}else -1===a&&(c=!1,a=o+1);return -1===a?"":e.slice(r,a)},extname:function(e){t(e);for(var i=-1,o=0,r=-1,a=!0,c=0,h=e.length-1;h>=0;--h){var p=e.charCodeAt(h);if(47!==p)-1===r&&(a=!1,r=h+1),46===p?-1===i?i=h:1!==c&&(c=1):-1!==i&&(c=-1);else if(!a){o=h+1;break}}return -1===i||-1===r||0===c||1===c&&i===r-1&&i===o+1?"":e.slice(i,r)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var o,r=e.charCodeAt(0),a=47===r;a?(i.root="/",o=1):o=0;for(var c=-1,h=0,p=-1,g=!0,f=e.length-1,m=0;f>=o;--f)if(47!==(r=e.charCodeAt(f)))-1===p&&(g=!1,p=f+1),46===r?-1===c?c=f:1!==m&&(m=1):-1!==c&&(m=-1);else if(!g){h=f+1;break}return -1===c||-1===p||0===m||1===m&&c===p-1&&c===h+1?-1!==p&&(i.base=i.name=0===h&&a?e.slice(1,p):e.slice(h,p)):(0===h&&a?(i.name=e.slice(1,c),i.base=e.slice(1,p)):(i.name=e.slice(h,c),i.base=e.slice(h,p)),i.ext=e.slice(c,p)),h>0?i.dir=e.slice(0,h-1):a&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,a),i.exports}a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};(a.r(c),a.d(c,{URI:()=>l,Utils:()=>i}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let h=/^\w[\w\d+.-]*$/,p=/^\//,g=/^\/\//;function f(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!h.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!p.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(g.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let m=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,i,o,r,a=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||a?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,i||""),this.query=o||"",this.fragment=r||"",f(this,a))}get fsPath(){return C(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:i,path:o,query:r,fragment:a}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===i?i=this.authority:null===i&&(i=""),void 0===o?o=this.path:null===o&&(o=""),void 0===r?r=this.query:null===r&&(r=""),void 0===a?a=this.fragment:null===a&&(a=""),t===this.scheme&&i===this.authority&&o===this.path&&r===this.query&&a===this.fragment?this:new d(t,i,o,r,a)}static parse(e,t=!1){let i=m.exec(e);return i?new d(i[2]||"",E(i[4]||""),E(i[5]||""),E(i[7]||""),E(i[9]||""),t):new d("","","","","")}static file(t){let i="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(i=t.substring(2),t="/"):(i=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",i,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return f(t,!0),t}toString(e=!1){return S(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===b?e.fsPath:null,t}}return e}};let b=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=C(this,!1)),this._fsPath}toString(e=!1){return e?S(this,!0):(this._formatted||(this._formatted=S(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=b),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let v={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function w(e,t,i){let o,r=-1;for(let a=0;a<e.length;a++){let c=e.charCodeAt(a);if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||45===c||46===c||95===c||126===c||t&&47===c||i&&91===c||i&&93===c||i&&58===c)-1!==r&&(o+=encodeURIComponent(e.substring(r,a)),r=-1),void 0!==o&&(o+=e.charAt(a));else{void 0===o&&(o=e.substr(0,a));let t=v[c];void 0!==t?(-1!==r&&(o+=encodeURIComponent(e.substring(r,a)),r=-1),o+=t):-1===r&&(r=a)}}return -1!==r&&(o+=encodeURIComponent(e.substring(r))),void 0!==o?o:e}function x(e){let t;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);35===o||63===o?(void 0===t&&(t=e.substr(0,i)),t+=v[o]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function C(t,i){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function S(e,t){let i=t?x:w,o="",{scheme:r,authority:a,path:c,query:h,fragment:p}=e;if(r&&(o+=r,o+=":"),(a||"file"===r)&&(o+="/",o+="/"),a){let e=a.indexOf("@");if(-1!==e){let t=a.substr(0,e);a=a.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=i(t,!1,!1):(o+=i(t.substr(0,e),!1,!1),o+=":",o+=i(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(a=a.toLowerCase()).lastIndexOf(":"))?o+=i(a,!1,!0):(o+=i(a.substr(0,e),!1,!0),o+=a.substr(e))}if(c){if(c.length>=3&&47===c.charCodeAt(0)&&58===c.charCodeAt(2)){let e=c.charCodeAt(1);e>=65&&e<=90&&(c=`/${String.fromCharCode(e+32)}:${c.substr(3)}`)}else if(c.length>=2&&58===c.charCodeAt(1)){let e=c.charCodeAt(0);e>=65&&e<=90&&(c=`${String.fromCharCode(e+32)}:${c.substr(2)}`)}o+=i(c,!0,!1)}return h&&(o+="?",o+=i(h,!1,!1)),p&&(o+="#",o+=t?p:w(p,!1,!1)),o}let A=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function E(e){return e.match(A)?e.replace(A,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var P=a(975);let T=P.posix||P;(t=i||(i={})).joinPath=function(e,...t){return e.with({path:T.join(e.path,...t)})},t.resolvePath=function(e,...t){let i=e.path,o=!1;"/"!==i[0]&&(i="/"+i,o=!0);let r=T.resolve(i,...t);return o&&"/"===r[0]&&!e.authority&&(r=r.substring(1)),e.with({path:r})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=T.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return T.basename(e.path)},t.extname=function(e){return T.extname(e.path)},_=c})();let{URI:iL,Utils:iD}=_;function iB(e,t){return JSON.parse(e,(e,i)=>(function(e,t,i){let o=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(t);if(null==o)return t;switch(o.__ipc){case"date":return new Date(o.value);case"promise":return i(o.value);case"uri":return iL.revive(o.value)}})(0,i,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:t0(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tK,this._time=eH(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=eH(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=eH(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[i,o]=eH(this._time),r=1e3*i+Math.floor(o/1e6),a=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${r}ms]${e?.suffix??""}`)}};function iN(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function iF(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}(x||(x={})).on=function(e,t,i,o){let r=!1;if("string"==typeof e){let a=function(t){let o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,a,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,a,o??!0))}}}let a=function(e){i(e,this)};return e.addEventListener(t,a,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,a,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ij={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?ij:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var iU=Object.defineProperty,iH=Object.getOwnPropertyDescriptor,iq=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?iH(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&iU(t,i,a),a};let iV=tY();function iW(){return`webview:${iV.next()}`}let iG=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=r??=acquireVsCodeApi(),this._disposable=x.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,i,o,r;let a=tJ.get(tX.current),c=e.data,h=function(e,t,...i){return(t?.provider??tK).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(t0(`(e=${c.id}|${c.method})`,a),{log:!1,logLevel:"debug"});if(c.compressed&&c.params instanceof Uint8Array){if("deflate"===c.compressed)try{c.params=iR((t=c.params,iS(t,{i:2},void 0,void 0)))}catch(e){c.params=iR(c.params)}else c.params=iR(c.params);h?.restart({message:`\u2022 decompressed (${c.compressed}) serialized params`})}if("string"==typeof c.params?(c.params=iB(c.params,e=>this.getResponsePromise(e.method,e.id)),h?.stop({message:`\u2022 deserialized params`})):null==c.params?h?.stop({message:`\u2022 no params`}):h?.stop({message:`\u2022 invalid params`}),i=` \u2022 ipc (host -> webview) duration=${Date.now()-c.timestamp}ms`,null!=a&&(null!=a.exitDetails&&null!=i?a.exitDetails+=i:a.exitDetails=i),null!=c.completionId){let e=(o=c.method,r=c.completionId,`${o}|${r}`);this._pendingHandlers.get(e)?.(c);return}this._onReceiveMessage.fire(c)}deserializeIpcData(e){return iB(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let i=iW();this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let i=iW(),o=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:i}),o}getResponsePromise(e,t){return new Promise((i,o)=>{var r,a;let c,h=(r=e,a=t,`${r}|${a}`);function p(){clearTimeout(c),c=void 0,this._pendingHandlers.delete(h)}c=setTimeout(()=>{p.call(this),o(Error(`Timed out waiting for completion of ${h}`))},(tV.isDebugging?60:5)*6e4),this._pendingHandlers.set(h,e=>{if(p.call(this),e.method===e4.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function iK(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}iq([iO({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],iG.prototype,"onMessageReceived",1),iq([iO({args:{0:e=>e.method,1:!1}},!0)],iG.prototype,"sendCommand",1),iq([iO({args:{0:e=>e.method,1:!1,2:!1}},!0)],iG.prototype,"sendRequest",1),iq([iO({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],iG.prototype,"postMessage",1),iG=iq([(v=e=>`${e.appName}(HostIpc)`,e=>void tG.set(e,v))],iG);let RGBA=class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=iK(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=iK(Math.max(Math.min(1,t),0),3),this.l=iK(Math.max(Math.min(1,i),0),3),this.a=iK(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=e.a,a=Math.max(t,i,o),c=Math.min(t,i,o),h=0,p=0,g=(c+a)/2,f=a-c;if(f>0){switch(p=Math.min(g<=.5?f/(2*g):f/(2-2*g),1),a){case t:h=(i-o)/f+6*(i<o);break;case i:h=(o-t)/f+2;break;case o:h=(t-i)/f+4}h*=60,h=Math.round(h)}return new HSLA(h,p,g,r)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,o,r=e.h/360,{s:a,l:c,a:h}=e;if(0===a)t=i=o=c;else{let e=c<.5?c*(1+a):c+a-c*a,h=2*c-e;t=HSLA._hue2rgb(h,e,r+1/3),i=HSLA._hue2rgb(h,e,r),o=HSLA._hue2rgb(h,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*o),h)}};let HSVA=class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=iK(Math.max(Math.min(1,t),0),3),this.v=iK(Math.max(Math.min(1,i),0),3),this.a=iK(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=Math.max(t,i,o),a=r-Math.min(t,i,o);return new HSVA(Math.round(60*(0===a?0:r===t?((i-o)/a%6+6)%6:r===i?(o-t)/a+2:(t-i)/a+4)),0===r?0:a/r,r,e.a)}static toRGBA(e){let{h:t,s:i,v:o,a:r}=e,a=o*i,c=a*(1-Math.abs(t/60%2-1)),h=o-a,[p,g,f]=[0,0,0];return t<60?(p=a,g=c):t<120?(p=c,g=a):t<180?(g=a,f=c):t<240?(g=c,f=a):t<300?(p=c,f=a):t<=360&&(p=a,f=c),new RGBA(p=Math.round((p+h)*255),g=Math.round((g+h)*255),f=Math.round((f+h)*255),r)}};function iZ(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(iZ(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return iK(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(t,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,o=t.a,r=i+o*(1-i);return r<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*i/r+t.r*o*(1-i)/r,this.rgba.g*i/r+t.g*o*(1-i)/r,this.rgba.b*i/r+t.b*o*(1-i)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${iY(e.rgba.r)}${iY(e.rgba.g)}${iY(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(r-o)/r,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(o-r)/o,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function iY(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let iX=new Emitter,iJ=iX.event;function iQ(e){let t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),a=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),c=iZ("--vscode-editor-background",i),h=iZ("--vscode-editor-foreground",i);return h||(h=iZ("--vscode-foreground",i)),{colors:{background:c,foreground:h},computedStyle:i,isLightTheme:r,isHighContrastTheme:a,isInitializing:null==e}}var i0=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,i2=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?i1(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&i0(t,i,a),a};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new iG(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let t=iQ();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(t),this.disposables.push(((e=new MutationObserver(e=>{iX.fire(iQ(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(iJ(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case te.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tt.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=tF(e=>{this._ipc.sendCommand(e6,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return eC`<slot></slot>`}};i2([eB({type:String})],GlAppHost.prototype,"name",2),i2([eB({type:String})],GlAppHost.prototype,"placement",2),i2([tN({context:"ipc"})],GlAppHost.prototype,"_ipc",2),i2([tN({context:"logger"})],GlAppHost.prototype,"_logger",2),i2([tN({context:"promos"})],GlAppHost.prototype,"_promos",2),i2([tN({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),i2([eB({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let{fromCharCode:i5}=String;new TextEncoder;let i3=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,i,o){this.host=e,this.ipc=i,this.logger=o,this._state=this.ipc.deserializeIpcData(i3.decode(function(e){let t=globalThis.atob(e),i=t.length,o=new Uint8Array(i),r=0,a=i-i%8;for(;r<a;r+=8)o[r]=t.charCodeAt(r),o[r+1]=t.charCodeAt(r+1),o[r+2]=t.charCodeAt(r+2),o[r+3]=t.charCodeAt(r+3),o[r+4]=t.charCodeAt(r+4),o[r+5]=t.charCodeAt(r+5),o[r+6]=t.charCodeAt(r+6),o[r+7]=t.charCodeAt(r+7);for(;r<i;r++)o[r]=t.charCodeAt(r);return o}(t))),this.logger?.log(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(e3,{bootstrap:!0});if(null!=e.state){let t=iM(e.state)?await e.state:e.state;this._state={...t,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}else this.ipc.sendRequest(e3,{bootstrap:!1})}};let CommitDetailsStateProvider=class CommitDetailsStateProvider extends StateProviderBase{get deferBootstrap(){return!0}createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMessageReceived(e){switch(!0){case tM.is(e):this._state={...e.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case tO.is(e):this._state={...this._state,wip:e.params.wip,inReview:e.params.inReview},this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case tD.is(e):this.onDraftStateChanged(this.host,e.params.inReview,!0);break;case tL.is(e):this._state={...this._state,hasAccount:e.params.hasAccount},this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case tB.is(e):this._state={...this._state,hasIntegrationsConnected:e.params.hasIntegrationsConnected},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}onDraftStateChanged(e,t,i=!1){t!==this._state.inReview&&(this._state={...this._state,inReview:t},this.provider.setValue(this._state,!0),e.requestUpdate(),i||this.ipc.sendCommand(tw,{inReview:t}))}switchMode(e){this._state={...this._state,mode:e},this.provider.setValue(this._state,!0),this.host.requestUpdate(),this.ipc.sendCommand(tf,{mode:e,repoPath:this._state.commit?.repoPath})}updatePreferences(e){this._state={...this._state,preferences:{...this._state.preferences,...e}},this.provider.setValue(this._state,!0),this.host.requestUpdate(),this.ipc.sendCommand(tv,e)}};let i6=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),i7=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var i8=Object.defineProperty,i9=Object.getOwnPropertyDescriptor,i4=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?i9(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&i8(t,i,a),a};function oe(e,t=""){return B(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let oi=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};oi.styles=F`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${oe(i6)}
		${oe(i7,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,i4([eB({reflect:!0})],oi.prototype,"icon",2),i4([eB({reflect:!0})],oi.prototype,"modifier",2),i4([eB({type:Number})],oi.prototype,"size",2),i4([eB({reflect:!0})],oi.prototype,"flip",2),i4([eB({reflect:!0})],oi.prototype,"rotate",2),oi=i4([eL("code-icon")],oi);let oo=F`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,or=F`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var os=Object.defineProperty,on=Object.getOwnPropertyDescriptor,oa=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?on(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&os(t,i,a),a};let ol=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return eC`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};ol.styles=[oo,or],oa([eB({type:Boolean})],ol.prototype,"pulse",2),ol=oa([eL("gl-indicator")],ol);var oc=Object.defineProperty,oh=Object.defineProperties,od=Object.getOwnPropertyDescriptor,op=Object.getOwnPropertyDescriptors,ou=Object.getOwnPropertySymbols,og=Object.prototype.hasOwnProperty,of=Object.prototype.propertyIsEnumerable,om=e=>{throw TypeError(e)},ob=(e,t,i)=>t in e?oc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ov=(e,t)=>{for(var i in t||(t={}))og.call(t,i)&&ob(e,i,t[i]);if(ou)for(var i of ou(t))of.call(t,i)&&ob(e,i,t[i]);return e},oy=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?od(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&oc(t,i,a),a},ow=(e,t,i)=>t.has(e)||om("Cannot "+i),o_=new Map,ox=new WeakMap;function ok(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function o$(e,t){o_.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function oC(e,t,i){let o=ox.get(e);if(null==o?void 0:o[t])return ok(o[t],i.dir);let r=o_.get(t);return r?ok(r,i.dir):{keyframes:[],options:{duration:0}}}let oS=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=eA,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===eA||null==e)return this._t=void 0,this.it=e;if(e===eS)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let oA=oS(unsafe_html_e);function oE(e){return e?.includes(`
`)?oA(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}var oP=F`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,oR=F`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let oI=new Set,oT=new Map,oz="ltr",oM="en",oO="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(oO){let e=new MutationObserver(oD);oz=document.documentElement.dir||"ltr",oM=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function oL(...e){e.map(e=>{let t=e.$code.toLowerCase();oT.has(t)?oT.set(t,Object.assign(Object.assign({},oT.get(t)),e)):oT.set(t,e),a||(a=e)}),oD()}function oD(){oO&&(oz=document.documentElement.dir||"ltr",oM=document.documentElement.lang||navigator.language),[...oI.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){oI.add(this.host)}hostDisconnected(){oI.delete(this.host)}dir(){return`${this.host.dir||oz}`.toLowerCase()}lang(){return`${this.host.lang||oM}`.toLowerCase()}getTranslationData(e){var t,i;let o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),a=null!=(i=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?i:"",c=oT.get(`${r}-${a}`),h=oT.get(r);return{locale:o,language:r,region:a,primary:c,secondary:h}}exists(e,t){var i;let{primary:o,secondary:r}=this.getTranslationData(null!=(i=t.lang)?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!r&&!!r[e]||!!t.includeFallback&&!!a&&!!a[e]}term(e,...t){let i,{primary:o,secondary:r}=this.getTranslationData(this.lang());if(o&&o[e])i=o[e];else if(r&&r[e])i=r[e];else{if(!a||!a[e])return String(e);i=a[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var oB={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};oL(oB);var oN=class extends LocalizeController{};oL(oB);var oF=F`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,oj=class extends lit_element_i{constructor(){let e;super(),(e=C).has(this)?om("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,ov({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch(o){customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",a=r;if("version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(a=" v"+o.version),r&&a&&r===a)return}attributeChangedCallback(e,t,i){let o,r;if(ow(this,o=C,"read from private field"),r?!r.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),ow(this,e=C,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};C=new WeakMap,oj.version="2.20.1",oj.dependencies={},oy([eB()],oj.prototype,"dir",2),oy([eB()],oj.prototype,"lang",2);let oU=Math.min,oH=Math.max,oq=Math.round,oV=Math.floor,oW=e=>({x:e,y:e}),oG={left:"right",right:"left",bottom:"top",top:"bottom"},oK={start:"end",end:"start"};function oZ(e,t){return"function"==typeof e?e(t):e}function oY(e){return e.split("-")[0]}function oX(e){return e.split("-")[1]}function oJ(e){return"x"===e?"y":"x"}function oQ(e){return"y"===e?"height":"width"}let o0=new Set(["top","bottom"]);function o1(e){return o0.has(oY(e))?"y":"x"}function o2(e){return e.replace(/start|end/g,e=>oK[e])}let o5=["left","right"],o3=["right","left"],o6=["top","bottom"],o7=["bottom","top"];function o8(e){return e.replace(/left|right|bottom|top/g,e=>oG[e])}function o9(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function o4(e){let{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function re(e,t,i){let o,{reference:r,floating:a}=e,c=o1(t),h=oJ(o1(t)),p=oQ(h),g=oY(t),f="y"===c,m=r.x+r.width/2-a.width/2,b=r.y+r.height/2-a.height/2,v=r[p]/2-a[p]/2;switch(g){case"top":o={x:m,y:r.y-a.height};break;case"bottom":o={x:m,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:b};break;case"left":o={x:r.x-a.width,y:b};break;default:o={x:r.x,y:r.y}}switch(oX(t)){case"start":o[h]-=v*(i&&f?-1:1);break;case"end":o[h]+=v*(i&&f?-1:1)}return o}let ri=async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:c}=i,h=a.filter(Boolean),p=await (null==c.isRTL?void 0:c.isRTL(t)),g=await c.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:m}=re(g,o,p),b=o,v={},w=0;for(let i=0;i<h.length;i++){let{name:a,fn:_}=h[i],{x:x,y:C,data:S,reset:A}=await _({x:f,y:m,initialPlacement:o,placement:b,strategy:r,middlewareData:v,rects:g,platform:c,elements:{reference:e,floating:t}});f=null!=x?x:f,m=null!=C?C:m,v={...v,[a]:{...v[a],...S}},A&&w<=50&&(w++,"object"==typeof A&&(A.placement&&(b=A.placement),A.rects&&(g=!0===A.rects?await c.getElementRects({reference:e,floating:t,strategy:r}):A.rects),{x:f,y:m}=re(g,b,p)),i=-1)}return{x:f,y:m,placement:b,strategy:r,middlewareData:v}};async function ro(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:a,rects:c,elements:h,strategy:p}=e,{boundary:g="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:b=!1,padding:v=0}=oZ(t,e),w=o9(v),_=h[b?"floating"===m?"reference":"floating":m],x=o4(await a.getClippingRect({element:null==(i=await (null==a.isElement?void 0:a.isElement(_)))||i?_:_.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:g,rootBoundary:f,strategy:p})),C="floating"===m?{x:o,y:r,width:c.floating.width,height:c.floating.height}:c.reference,S=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),A=await (null==a.isElement?void 0:a.isElement(S))&&await (null==a.getScale?void 0:a.getScale(S))||{x:1,y:1},E=o4(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:C,offsetParent:S,strategy:p}):C);return{top:(x.top-E.top+w.top)/A.y,bottom:(E.bottom-x.bottom+w.bottom)/A.y,left:(x.left-E.left+w.left)/A.x,right:(E.right-x.right+w.right)/A.x}}let rr=new Set(["left","top"]);async function rs(e,t){let{placement:i,platform:o,elements:r}=e,a=await (null==o.isRTL?void 0:o.isRTL(r.floating)),c=oY(i),h=oX(i),p="y"===o1(i),g=rr.has(c)?-1:1,f=a&&p?-1:1,m=oZ(t,e),{mainAxis:b,crossAxis:v,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return h&&"number"==typeof w&&(v="end"===h?-1*w:w),p?{x:v*f,y:b*g}:{x:b*g,y:v*f}}function rn(){return"undefined"!=typeof window}function ra(e){return rh(e)?(e.nodeName||"").toLowerCase():"#document"}function rl(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function rc(e){var t;return null==(t=(rh(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rh(e){return!!rn()&&(e instanceof Node||e instanceof rl(e).Node)}function rd(e){return!!rn()&&(e instanceof Element||e instanceof rl(e).Element)}function rp(e){return!!rn()&&(e instanceof HTMLElement||e instanceof rl(e).HTMLElement)}function ru(e){return!!rn()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof rl(e).ShadowRoot)}let rg=new Set(["inline","contents"]);function rf(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=rS(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!rg.has(r)}let rm=new Set(["table","td","th"]),rb=[":popover-open",":modal"];function rv(e){return rb.some(t=>{try{return e.matches(t)}catch{return!1}})}let ry=["transform","translate","scale","rotate","perspective"],rw=["transform","translate","scale","rotate","perspective","filter"],r_=["paint","layout","strict","content"];function rx(e){let t=rk(),i=rd(e)?rS(e):e;return ry.some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||rw.some(e=>(i.willChange||"").includes(e))||r_.some(e=>(i.contain||"").includes(e))}function rk(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let r$=new Set(["html","body","#document"]);function rC(e){return r$.has(ra(e))}function rS(e){return rl(e).getComputedStyle(e)}function rA(e){return rd(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rE(e){if("html"===ra(e))return e;let t=e.assignedSlot||e.parentNode||ru(e)&&e.host||rc(e);return ru(t)?t.host:t}function rP(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);let r=function e(t){let i=rE(t);return rC(i)?t.ownerDocument?t.ownerDocument.body:t.body:rp(i)&&rf(i)?i:e(i)}(e),a=r===(null==(o=e.ownerDocument)?void 0:o.body),c=rl(r);if(a){let e=rR(c);return t.concat(c,c.visualViewport||[],rf(r)?r:[],e&&i?rP(e):[])}return t.concat(r,rP(r,[],i))}function rR(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rI(e){let t=rS(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=rp(e),a=r?e.offsetWidth:i,c=r?e.offsetHeight:o,h=oq(i)!==a||oq(o)!==c;return h&&(i=a,o=c),{width:i,height:o,$:h}}function rT(e){return rd(e)?e:e.contextElement}function rz(e){let t=rT(e);if(!rp(t))return oW(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:a}=rI(t),c=(a?oq(i.width):i.width)/o,h=(a?oq(i.height):i.height)/r;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let rM=oW(0);function rO(e){let t=rl(e);return rk()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rM}function rL(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let a=e.getBoundingClientRect(),c=rT(e),h=oW(1);t&&(o?rd(o)&&(h=rz(o)):h=rz(e));let p=(void 0===(r=i)&&(r=!1),o&&(!r||o===rl(c))&&r)?rO(c):oW(0),g=(a.left+p.x)/h.x,f=(a.top+p.y)/h.y,m=a.width/h.x,b=a.height/h.y;if(c){let e=rl(c),t=o&&rd(o)?rl(o):o,i=e,r=rR(i);for(;r&&o&&t!==i;){let e=rz(r),t=r.getBoundingClientRect(),o=rS(r),a=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,c=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;g*=e.x,f*=e.y,m*=e.x,b*=e.y,g+=a,f+=c,r=rR(i=rl(r))}}return o4({width:m,height:b,x:g,y:f})}function rD(e,t){let i=rA(e).scrollLeft;return t?t.left+i:rL(rc(e)).left+i}function rB(e,t){let i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-rD(e,i),y:i.top+t.scrollTop}}let rN=new Set(["absolute","fixed"]);function rF(e,t,i){var o;let r;if("viewport"===t)r=function(e,t){let i=rl(e),o=rc(e),r=i.visualViewport,a=o.clientWidth,c=o.clientHeight,h=0,p=0;if(r){a=r.width,c=r.height;let e=rk();(!e||e&&"fixed"===t)&&(h=r.offsetLeft,p=r.offsetTop)}let g=rD(o);if(g<=0){let e=o.ownerDocument,t=e.body,i=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,c=Math.abs(o.clientWidth-t.clientWidth-r);c<=25&&(a-=c)}else g<=25&&(a+=g);return{width:a,height:c,x:h,y:p}}(e,i);else if("document"===t){let t,i,a,c,h,p,g;o=rc(e),t=rc(o),i=rA(o),a=o.ownerDocument.body,c=oH(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),h=oH(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight),p=-i.scrollLeft+rD(o),g=-i.scrollTop,"rtl"===rS(a).direction&&(p+=oH(t.clientWidth,a.clientWidth)-c),r={width:c,height:h,x:p,y:g}}else if(rd(t)){let e,o,a,c,h,p;o=(e=rL(t,!0,"fixed"===i)).top+t.clientTop,a=e.left+t.clientLeft,c=rp(t)?rz(t):oW(1),h=t.clientWidth*c.x,p=t.clientHeight*c.y,r={width:h,height:p,x:a*c.x,y:o*c.y}}else{let i=rO(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return o4(r)}function rj(e){return"static"===rS(e).position}function rU(e,t){if(!rp(e)||"fixed"===rS(e).position)return null;if(t)return t(e);let i=e.offsetParent;return rc(e)===i&&(i=i.ownerDocument.body),i}function rH(e,t){var i;let o=rl(e);if(rv(e))return o;if(!rp(e)){let t=rE(e);for(;t&&!rC(t);){if(rd(t)&&!rj(t))return t;t=rE(t)}return o}let r=rU(e,t);for(;r&&(i=r,rm.has(ra(i)))&&rj(r);)r=rU(r,t);return r&&rC(r)&&rj(r)&&!rx(r)?o:r||function(e){let t=rE(e);for(;rp(t)&&!rC(t);){if(rx(t))return t;if(rv(t))break;t=rE(t)}return null}(e)||o}let rq=async function(e){let t=this.getOffsetParent||rH,i=this.getDimensions,o=await i(e.floating);return{reference:function(e,t,i){let o=rp(t),r=rc(t),a="fixed"===i,c=rL(e,!0,a,t),h={scrollLeft:0,scrollTop:0},p=oW(0);if(o||!o&&!a)if(("body"!==ra(t)||rf(r))&&(h=rA(t)),o){let e=rL(t,!0,a,t);p.x=e.x+t.clientLeft,p.y=e.y+t.clientTop}else r&&(p.x=rD(r));a&&!o&&r&&(p.x=rD(r));let g=!r||o||a?oW(0):rB(r,h);return{x:c.left+h.scrollLeft-p.x-g.x,y:c.top+h.scrollTop-p.y-g.y,width:c.width,height:c.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},rV={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e,a="fixed"===r,c=rc(o),h=!!t&&rv(t.floating);if(o===c||h&&a)return i;let p={scrollLeft:0,scrollTop:0},g=oW(1),f=oW(0),m=rp(o);if((m||!m&&!a)&&(("body"!==ra(o)||rf(c))&&(p=rA(o)),rp(o))){let e=rL(o);g=rz(o),f.x=e.x+o.clientLeft,f.y=e.y+o.clientTop}let b=!c||m||a?oW(0):rB(c,p);return{width:i.width*g.x,height:i.height*g.y,x:i.x*g.x-p.scrollLeft*g.x+f.x+b.x,y:i.y*g.y-p.scrollTop*g.y+f.y+b.y}},getDocumentElement:rc,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,a=[..."clippingAncestors"===i?rv(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let o=rP(e,[],!1).filter(e=>rd(e)&&"body"!==ra(e)),r=null,a="fixed"===rS(e).position,c=a?rE(e):e;for(;rd(c)&&!rC(c);){let t=rS(c),i=rx(c);i||"fixed"!==t.position||(r=null),(a?!i&&!r:!i&&"static"===t.position&&!!r&&rN.has(r.position)||rf(c)&&!i&&function e(t,i){let o=rE(t);return!(o===i||!rd(o)||rC(o))&&("fixed"===rS(o).position||e(o,i))}(e,c))?o=o.filter(e=>e!==c):r=t,c=rE(c)}return t.set(e,o),o}(t,this._c):[].concat(i),o],c=a[0],h=a.reduce((e,i)=>{let o=rF(t,i,r);return e.top=oH(o.top,e.top),e.right=oU(o.right,e.right),e.bottom=oU(o.bottom,e.bottom),e.left=oH(o.left,e.left),e},rF(t,c,r));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:rH,getElementRects:rq,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=rI(e);return{width:t,height:i}},getScale:rz,isElement:rd,isRTL:function(e){return"rtl"===rS(e).direction}};function rW(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let rG=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;let r,a,{placement:c,rects:h,platform:p,elements:g}=t,{apply:f=()=>{},...m}=oZ(e,t),b=await ro(t,m),v=oY(c),w=oX(c),_="y"===o1(c),{width:x,height:C}=h.floating;"top"===v||"bottom"===v?(r=v,a=w===(await (null==p.isRTL?void 0:p.isRTL(g.floating))?"start":"end")?"left":"right"):(a=v,r="end"===w?"top":"bottom");let S=C-b.top-b.bottom,A=x-b.left-b.right,E=oU(C-b[r],S),P=oU(x-b[a],A),T=!t.middlewareData.shift,O=E,D=P;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(D=A),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(O=S),T&&!w){let e=oH(b.left,0),t=oH(b.right,0),i=oH(b.top,0),o=oH(b.bottom,0);_?D=x-2*(0!==e||0!==t?e+t:oH(b.left,b.right)):O=C-2*(0!==i||0!==o?i+o:oH(b.top,b.bottom))}await f({...t,availableWidth:D,availableHeight:O});let B=await p.getDimensions(g.floating);return x!==B.width||C!==B.height?{reset:{rects:!0}}:{}}}},rK=oS(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return eS}});function rZ(e){var t=e;for(let e=t;e;e=rY(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=rY(t);e;e=rY(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||rx(t)||"BODY"===e.tagName))return e}return null}function rY(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var rX=class extends oj{constructor(){super(...arguments),this.localize=new oN(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,a=0,c=0,h=0,p=0,g=0,f=0;i?e.top<t.top?(o=e.left,r=e.bottom,a=e.right,c=e.bottom,h=t.left,p=t.top,g=t.right,f=t.top):(o=t.left,r=t.bottom,a=t.right,c=t.bottom,h=e.left,p=e.top,g=e.right,f=e.top):e.left<t.left?(o=e.right,r=e.top,a=t.left,c=t.top,h=e.right,p=e.bottom,g=t.left,f=t.bottom):(o=t.right,r=t.top,a=e.left,c=e.top,h=t.right,p=t.bottom,g=e.left,f=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,o){let r;void 0===o&&(o={});let{ancestorScroll:a=!0,ancestorResize:c=!0,elementResize:h="function"==typeof ResizeObserver,layoutShift:p="function"==typeof IntersectionObserver,animationFrame:g=!1}=o,f=rT(e),m=a||c?[...f?rP(f):[],...rP(t)]:[];m.forEach(e=>{a&&e.addEventListener("scroll",i,{passive:!0}),c&&e.addEventListener("resize",i)});let b=f&&p?function(e,t){let i,o=null,r=rc(e);function a(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return!function c(h,p){void 0===h&&(h=!1),void 0===p&&(p=1),a();let g=e.getBoundingClientRect(),{left:f,top:m,width:b,height:v}=g;if(h||t(),!b||!v)return;let w={rootMargin:-oV(m)+"px "+-oV(r.clientWidth-(f+b))+"px "+-oV(r.clientHeight-(m+v))+"px "+-oV(f)+"px",threshold:oH(0,oU(1,p))||1},_=!0;function x(t){let o=t[0].intersectionRatio;if(o!==p){if(!_)return c();o?c(!1,o):i=setTimeout(()=>{c(!1,1e-7)},1e3)}1!==o||rW(g,e.getBoundingClientRect())||c(),_=!1}try{o=new IntersectionObserver(x,{...w,root:r.ownerDocument})}catch{o=new IntersectionObserver(x,w)}o.observe(e)}(!0),a}(f,i):null,v=-1,w=null;h&&(w=new ResizeObserver(e=>{let[o]=e;o&&o.target===f&&w&&(w.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var e;null==(e=w)||e.observe(t)})),i()}),f&&!g&&w.observe(f),w.observe(t));let _=g?rL(e):null;return g&&function t(){let o=rL(e);_&&!rW(_,o)&&i(),_=o,r=requestAnimationFrame(t)}(),i(),()=>{var e;m.forEach(e=>{a&&e.removeEventListener("scroll",i),c&&e.removeEventListener("resize",i)}),null==b||b(),null==(e=w)||e.disconnect(),w=null,g&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i,o,r,a;let c,h,p,g;if(!this.active||!this.anchorEl)return;let f=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,o;let{x:r,y:a,placement:c,middlewareData:h}=t,p=await rs(t,e);return c===(null==(i=h.offset)?void 0:i.placement)&&null!=(o=h.arrow)&&o.alignmentOffset?{}:{x:r+p.x,y:a+p.y,data:{...p,placement:c}}}}];this.sync?f.push(rG({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&f.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,o,r,a,c,h,p,g;let f,m,b,{placement:v,middlewareData:w,rects:_,initialPlacement:x,platform:C,elements:S}=e,{mainAxis:A=!0,crossAxis:E=!0,fallbackPlacements:P,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:D=!0,...B}=oZ(t,e);if(null!=(i=w.arrow)&&i.alignmentOffset)return{};let F=oY(v),j=o1(x),U=oY(x)===x,q=await (null==C.isRTL?void 0:C.isRTL(S.floating)),V=P||(U||!D?[o8(x)]:(f=o8(x),[o2(x),f,o2(f)])),W="none"!==O;!P&&W&&V.push(...(m=oX(x),b=function(e,t,i){switch(e){case"top":case"bottom":if(i)return t?o3:o5;return t?o5:o3;case"left":case"right":return t?o6:o7;default:return[]}}(oY(x),"start"===O,q),m&&(b=b.map(e=>e+"-"+m),D&&(b=b.concat(b.map(o2)))),b));let G=[x,...V],K=await ro(e,B),Z=[],Y=(null==(o=w.flip)?void 0:o.overflows)||[];if(A&&Z.push(K[F]),E){let e,t,i,o,r=(h=v,p=_,void 0===(g=q)&&(g=!1),e=oX(h),i=oQ(t=oJ(o1(h))),o="x"===t?e===(g?"end":"start")?"right":"left":"start"===e?"bottom":"top",p.reference[i]>p.floating[i]&&(o=o8(o)),[o,o8(o)]);Z.push(K[r[0]],K[r[1]])}if(Y=[...Y,{placement:v,overflows:Z}],!Z.every(e=>e<=0)){let e=((null==(r=w.flip)?void 0:r.index)||0)+1,t=G[e];if(t&&("alignment"!==E||j===o1(t)||Y.every(e=>o1(e.placement)!==j||e.overflows[0]>0)))return{data:{index:e,overflows:Y},reset:{placement:t}};let i=null==(a=Y.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!i)switch(T){case"bestFit":{let e=null==(c=Y.filter(e=>{if(W){let t=o1(e.placement);return t===j||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:c[0];e&&(i=e);break}case"initialPlacement":i=x}if(v!==i)return{reset:{placement:i}}}return{}}}),this.shift&&f.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:r}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...p}=oZ(i,e),g={x:t,y:o},f=await ro(e,p),m=o1(oY(r)),b=oJ(m),v=g[b],w=g[m];if(a){let e="y"===b?"top":"left",t="y"===b?"bottom":"right",i=v+f[e],o=v-f[t];v=oH(i,oU(v,o))}if(c){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",i=w+f[e],o=w-f[t];w=oH(i,oU(w,o))}let _=h.fn({...e,[b]:v,[m]:w});return{..._,data:{x:_.x-t,y:_.y-o,enabled:{[b]:a,[m]:c}}}}}),this.autoSize?f.push(rG({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&f.push({name:"arrow",options:c={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:i,placement:o,rects:r,platform:a,elements:h,middlewareData:p}=e,{element:g,padding:f=0}=oZ(c,e)||{};if(null==g)return{};let m=o9(f),b={x:t,y:i},v=oJ(o1(o)),w=oQ(v),_=await a.getDimensions(g),x="y"===v,C=x?"clientHeight":"clientWidth",S=r.reference[w]+r.reference[v]-b[v]-r.floating[w],A=b[v]-r.reference[v],E=await (null==a.getOffsetParent?void 0:a.getOffsetParent(g)),P=E?E[C]:0;P&&await (null==a.isElement?void 0:a.isElement(E))||(P=h.floating[C]||r.floating[w]);let T=P/2-_[w]/2-1,O=oU(m[x?"top":"left"],T),D=oU(m[x?"bottom":"right"],T),B=P-_[w]-D,F=P/2-_[w]/2+(S/2-A/2),j=oH(O,oU(F,B)),U=!p.arrow&&null!=oX(o)&&F!==j&&r.reference[w]/2-(F<O?O:D)-_[w]/2<0,q=U?F<O?F-O:F-B:0;return{[v]:b[v]+q,data:{[v]:j,centerOffset:F-j-q,...U&&{alignmentOffset:q}},reset:U}}});let m="absolute"===this.strategy?e=>rV.getOffsetParent(e,rZ):rV.getOffsetParent;(o=this.anchorEl,r=this.popup,a={placement:this.placement,middleware:f,strategy:this.strategy,platform:oh(ov({},rV),op({getOffsetParent:m}))},h=new Map,g={...(p={platform:rV,...a}).platform,_c:h},ri(o,r,{...p,platform:g})).then(({x:e,y:t,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,o="",c="",h="",p="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",c=r?i:"",p=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=r?"":i,p=r?i:"",h="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(p="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(p="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:c,bottom:h,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return eC`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${rK({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${rK({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?eC`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function rJ(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function rQ(e,t,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,oh(ov({},i),op({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:i.duration})));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function r0(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function r1(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function r2(e,t){let i=ov({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:r}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let r=e.get(t),a=this[t];r!==a&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,a)}}),r.call(this,e)}}}rX.styles=[oF,oR],oy([ej(".popup")],rX.prototype,"popup",2),oy([ej(".popup__arrow")],rX.prototype,"arrowEl",2),oy([eB()],rX.prototype,"anchor",2),oy([eB({type:Boolean,reflect:!0})],rX.prototype,"active",2),oy([eB({reflect:!0})],rX.prototype,"placement",2),oy([eB({reflect:!0})],rX.prototype,"strategy",2),oy([eB({type:Number})],rX.prototype,"distance",2),oy([eB({type:Number})],rX.prototype,"skidding",2),oy([eB({type:Boolean})],rX.prototype,"arrow",2),oy([eB({attribute:"arrow-placement"})],rX.prototype,"arrowPlacement",2),oy([eB({attribute:"arrow-padding",type:Number})],rX.prototype,"arrowPadding",2),oy([eB({type:Boolean})],rX.prototype,"flip",2),oy([eB({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],rX.prototype,"flipFallbackPlacements",2),oy([eB({attribute:"flip-fallback-strategy"})],rX.prototype,"flipFallbackStrategy",2),oy([eB({type:Object})],rX.prototype,"flipBoundary",2),oy([eB({attribute:"flip-padding",type:Number})],rX.prototype,"flipPadding",2),oy([eB({type:Boolean})],rX.prototype,"shift",2),oy([eB({type:Object})],rX.prototype,"shiftBoundary",2),oy([eB({attribute:"shift-padding",type:Number})],rX.prototype,"shiftPadding",2),oy([eB({attribute:"auto-size"})],rX.prototype,"autoSize",2),oy([eB()],rX.prototype,"sync",2),oy([eB({type:Object})],rX.prototype,"autoSizeBoundary",2),oy([eB({attribute:"auto-size-padding",type:Number})],rX.prototype,"autoSizePadding",2),oy([eB({attribute:"hover-bridge",type:Boolean})],rX.prototype,"hoverBridge",2);var r5=class extends oj{constructor(){super(),this.localize=new oN(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=r0(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=r0(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await r1(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:i}=oC(this,"tooltip.show",{dir:this.localize.dir()});await rQ(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await r1(this.body);let{keyframes:e,options:i}=oC(this,"tooltip.hide",{dir:this.localize.dir()});await rQ(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,rJ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rJ(this,"sl-after-hide")}render(){return eC`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${rK({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};r5.styles=[oF,oP],r5.dependencies={"sl-popup":rX},oy([ej("slot:not([name])")],r5.prototype,"defaultSlot",2),oy([ej(".tooltip__body")],r5.prototype,"body",2),oy([ej("sl-popup")],r5.prototype,"popup",2),oy([eB()],r5.prototype,"content",2),oy([eB()],r5.prototype,"placement",2),oy([eB({type:Boolean,reflect:!0})],r5.prototype,"disabled",2),oy([eB({type:Number})],r5.prototype,"distance",2),oy([eB({type:Boolean,reflect:!0})],r5.prototype,"open",2),oy([eB({type:Number})],r5.prototype,"skidding",2),oy([eB()],r5.prototype,"trigger",2),oy([eB({type:Boolean})],r5.prototype,"hoist",2),oy([r2("open",{waitUntilFirstUpdate:!0})],r5.prototype,"handleOpenChange",1),oy([r2(["content","distance","hoist","placement","skidding"])],r5.prototype,"handleOptionsChange",1),oy([r2("disabled")],r5.prototype,"handleDisabledChange",1),o$("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),o$("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),r5.define("sl-tooltip");var r3=Object.defineProperty,r6=Object.getOwnPropertyDescriptor,r7=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?r6(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&r3(t,i,a),a};o$("tooltip.show",null),o$("tooltip.hide",null);let r8=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){return eC`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??eA}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${oE(this.content)}</slot>
			</div>
		</sl-tooltip>`}};r8.styles=F`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,r7([eB()],r8.prototype,"content",2),r7([eB({reflect:!0})],r8.prototype,"placement",2),r7([eB({type:Boolean})],r8.prototype,"disabled",2),r7([eB({type:Number})],r8.prototype,"distance",2),r7([eB({type:Boolean})],r8.prototype,"hoist",2),r8=r7([eL("gl-tooltip")],r8);let r9=F`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var r4=Object.defineProperty,se=Object.getOwnPropertyDescriptor,si=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?se(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&r4(t,i,a),a};let so=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?eC`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:eC`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:eA:eC`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${eU(this.behind>0,()=>eC`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${eU(this.ahead>0,()=>eC`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${eU(this.working>0,()=>eC`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};function sr(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}function ss(e){return JSON.stringify(e)}function sn(e,t,i,o=!1,r){let a={name:"",relativePath:"",children:new Map,descendants:[]},c=e.reduce((e,o)=>{let r=e,a="";for(let e of t(o)){a=i(a,e),r.children??=new Map;let t=r.children.get(e);null==t&&(t={name:e,relativePath:a,parent:r,children:void 0,descendants:void 0},r.children.set(e,t)),r.descendants??=[],r.descendants.push(o),r=t}return r.value=o,e},a);return o&&(c=function e(t,i,o=!0,r){if(null==t.children)return t;let a=[...t.children.values()];for(let t of a)e(t,i,!1,r);if(!o&&null==t.value&&1===a.length){let e=a[0];if((null==e.value||r?.(e.value))&&(t.name=i(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value,null!=t.children))for(let e of t.children.values())e.parent=t}return t}(c,i,!0,r)),c}so.styles=[r9,F`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],si([eB({type:Number})],so.prototype,"ahead",2),si([eB({type:Number})],so.prototype,"behind",2),si([eB({type:Number})],so.prototype,"working",2),si([eB({type:Boolean,attribute:"always-show"})],so.prototype,"alwaysShow",2),si([eB({type:Boolean})],so.prototype,"outlined",2),si([eB({type:Boolean})],so.prototype,"colorized",2),si([eB({type:Boolean})],so.prototype,"missingUpstream",2),so=si([eL("gl-tracking-pill")],so);let sa=F`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;F`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${sa}
	}
`;let sl=F`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,sc=F`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;F`
	:focus-visible {
		${sl}
	}
`;let sh=F`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;F`
	* {
		box-sizing: border-box;
	}
`,F`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${sl}
	}
	a:hover {
		text-decoration: underline;
	}
`;let sd=F`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;F`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var sp=Object.defineProperty,su=Object.getOwnPropertyDescriptor,sg=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?su(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&sp(t,i,a),a};let sf=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return eC`<div class="progress-bar"></div>`}};sf.styles=F`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,sg([eB({reflect:!0})],sf.prototype,"mode",2),sg([eB({type:Boolean})],sf.prototype,"active",2),sg([eB()],sf.prototype,"position",2),sf=sg([eL("progress-indicator")],sf);var sm=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,sv=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?sb(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&sm(t,i,a),a};let sy=class extends lit_element_i{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?eC`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:eC`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return eC`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};sy.styles=[sd,F`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
			}

			.subtitle::slotted(*) {
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],sv([eB({type:Boolean,reflect:!0})],sy.prototype,"collapsable",2),sv([eB({type:Boolean,reflect:!0})],sy.prototype,"expanded",2),sv([eB({type:Boolean,reflect:!0})],sy.prototype,"loading",2),sy=sv([eL("webview-pane")],sy);let sw=navigator?.userAgentData?.platform,s_=navigator.userAgent;"Linux"===sw||s_.includes("Linux");let sx="macOS"===sw||s_.includes("Macintosh");function sk(){return sx?"⌥":"Alt"}"Windows"===sw||s_.includes("Windows");var s$=Object.defineProperty,sC=Object.getOwnPropertyDescriptor,sS=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?sC(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&s$(t,i,a),a};let sA=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1,this.handleLinkKeydown=e=>{this.effectiveHref||" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.target.click())}}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${sk()}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return eC`
			<gl-tooltip hoist content="${this.effectiveTooltip??eA}">
				<a
					role="${!this.effectiveHref?"button":eA}"
					type="${!this.effectiveHref?"button":eA}"
					aria-label="${this.effectiveLabel??eA}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??eA}
					tabindex="0"
					@keydown=${this.handleLinkKeydown}
				>
					<code-icon part="icon" icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};sA.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sA.styles=F`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: var(--action-item-foreground, var(--vscode-icon-foreground));
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${sl}
		}

		:host(:hover),
		:host(:focus-within) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			text-decoration: none;
		}
		a:focus {
			outline: none;
		}
		a:is(:hover, :focus, :active) {
			text-decoration: none;
		}
	`,sS([eB()],sA.prototype,"href",2),sS([eB({attribute:"alt-href"})],sA.prototype,"altHref",2),sS([eB()],sA.prototype,"label",2),sS([eB({attribute:"alt-label"})],sA.prototype,"altLabel",2),sS([eB()],sA.prototype,"icon",2),sS([eB({attribute:"alt-icon"})],sA.prototype,"altIcon",2),sS([eB({type:Boolean})],sA.prototype,"disabled",2),sS([ej("a")],sA.prototype,"defaultFocusEl",2),sS([eN()],sA.prototype,"isAltKeyPressed",2),sA=sS([eL("action-item")],sA);var sE=Object.defineProperty,sP=Object.getOwnPropertyDescriptor,sR=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?sP(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&sE(t,i,a),a};let sI=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return eC`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let t=this.handleKeydown.bind(this),i=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",i),e.setAttribute("tabindex",0===o?"0":"-1"),this.actionNodes.length>=2&&e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes)return;let t=e.target,i=parseInt(t.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.actionNodes.length<2)return;let o=null;if("ArrowLeft"===e.key){let e=1===i?this.actionNodes.length-1:i-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=i===this.actionNodes.length?0:i;o=this.actionNodes[e]}null!=o&&o!==t&&(e.preventDefault(),e.stopPropagation(),t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};sI.styles=F`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,sR([(w={flatten:!0},(e,t)=>{let{slot:i,selector:o}=w??{},r="slot"+(i?`[name=${i}]`:":not([name])");return eF(e,t,{get(){let e=this.renderRoot?.querySelector(r),t=e?.assignedElements(w)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],sI.prototype,"actionNodes",2),sI=sR([eL("action-nav")],sI);var sT=E(5090);let{I:sz}={M:ea,P:el,A:ec,C:1,L:eI,R:M,D:ef,V:eT,I:R,H:k,N:I,U:L,B:H,F:z},sM=(e,t,i)=>{let o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i)i=new sz(o.insertBefore(document.createComment(""),r),o.insertBefore(document.createComment(""),r),e,e.options);else{let t=i._$AB.nextSibling,a=i._$AM,c=a!==e;if(c){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==a._$AU&&i._$AP(t)}if(t!==r||c){let e=i._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,r),e=t}}}return i},sO=(e,t,i=e)=>(e._$AI(t,i),e),sL={},sD=e=>{e._$AR(),e._$AA.remove()},sB=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),sB(e,t);return!0},sN=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},sF=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),sH(t)}};function sj(e){void 0!==this._$AN?(sN(this),this._$AM=e,sF(this)):this._$AM=e}function sU(e,t=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)sB(o[e],!1),sN(o[e]);else null!=o&&(sB(o,!1),sN(o));else sB(this,e)}let sH=e=>{2==e.type&&(e._$AP??=sU,e._$AQ??=sj)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),sF(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(sB(this,e),sN(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let sq=()=>new ref_h;let ref_h=class ref_h{};let sV=new WeakMap,sW=oS(class extends async_directive_f{render(e){return eA}update(e,[t]){let i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),eA}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=sV.get(t);void 0===i&&(i=new WeakMap,sV.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?sV.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function sG(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c}"function"==typeof SuppressedError&&SuppressedError;let sK=(e,t,i)=>{let o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},sZ=oS(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);let r=[],a=[],c=0;for(let t of e)r[c]=o?o(t,c):c,a[c]=i(t,c),c++;return{values:a,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){let r=e._$AH,{values:a,keys:c}=this.dt(t,i,o);if(!Array.isArray(r))return this.ut=c,a;let h=this.ut??=[],p=[],g,f,m=0,b=r.length-1,v=0,w=a.length-1;for(;m<=b&&v<=w;)if(null===r[m])m++;else if(null===r[b])b--;else if(h[m]===c[v])p[v]=sO(r[m],a[v]),m++,v++;else if(h[b]===c[w])p[w]=sO(r[b],a[w]),b--,w--;else if(h[m]===c[w])p[w]=sO(r[m],a[w]),sM(e,p[w+1],r[m]),m++,w--;else if(h[b]===c[v])p[v]=sO(r[b],a[v]),sM(e,r[m],r[b]),b--,v++;else if(void 0===g&&(g=sK(c,v,w),f=sK(h,m,b)),g.has(h[m]))if(g.has(h[b])){let t=f.get(c[v]),i=void 0!==t?r[t]:null;if(null===i){let t=sM(e,r[m]);sO(t,a[v]),p[v]=t}else p[v]=sO(i,a[v]),sM(e,r[m],i),r[t]=null;v++}else sD(r[b]),b--;else sD(r[m]),m++;for(;v<=w;){let t=sM(e,p[w+1]);sO(t,a[v]),p[v++]=t}for(;m<=b;){let e=r[m++];null!==e&&sD(e)}return this.ut=c,((e,t=sL)=>e._$AH=t)(e,p),eS}});let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(e){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(e){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(e,t){this._scrollTo("number"==typeof e&&"number"==typeof t?{left:e,top:t}:e)}scrollBy(e,t){let i="number"==typeof e&&"number"==typeof t?{left:e,top:t}:e;void 0!==i.top&&(i.top+=this.scrollTop),void 0!==i.left&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){null!==this._end&&this._end(),"smooth"===e.behavior?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=void 0===t?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=void 0===i?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),(null===this._destination||i!==this._destination.left||t!==this._destination.top)&&(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:e,scrollLeft:t}=this,{top:i,left:o}=this._destination;i=Math.min(i||0,this.maxScrollTop);let r=Math.abs((o=Math.min(o||0,this.maxScrollLeft))-t);1>Math.abs(i-e)&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let sY="undefined"!=typeof window?window.ResizeObserver:void 0,sX=Symbol("virtualizerRef"),sJ="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new sY(()=>this._hostElementSizeChanged()),this._childrenRO=new sY(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[sX]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=function(e,t=!1){let i=!1;return(function(e,t=!1){let i=[],o=t?e:s0(e);for(;null!==o;)i.push(o),o=s0(o);return i})(e,t).filter(e=>{if(i)return!1;let t=getComputedStyle(e);return i="fixed"===t.position,"visible"!==t.overflow})}(this._hostElement,e),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${sJ}]`);t||((t=document.createElement("div")).setAttribute(sJ,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(sJ,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||c;if("function"==typeof t&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,i;if("function"==typeof e.type){i=e.type;let o={...e};delete o.type,t=o}else t=e;void 0===i&&(c=i=(await Promise.resolve().then(E.bind(E,5090))).FlowLayout),this._layout=new i(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let e=window.performance.now(),t=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:i}}return null}_measureChildren(){let e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){let r=t[o],a=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[a]=i.call(this,r,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){var t;let i,{width:o,height:r}=e.getBoundingClientRect();return Object.assign({width:o,height:r},(t=e,{marginTop:sQ((i=window.getComputedStyle(t)).marginTop),marginRight:sQ(i.marginRight),marginBottom:sQ(i.marginBottom),marginLeft:sQ(i.marginLeft)}))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){"scroll"===e.type&&(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(e){"stateChanged"===e.type?this._updateDOM(e):"visibilityChanged"===e.type?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):"unpinned"===e.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(sJ)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let o,r,a,c,h=e.getBoundingClientRect();o=0,r=0,a=window.innerHeight,c=window.innerWidth;let p=this._clippingAncestors.map(e=>e.getBoundingClientRect());for(let e of(p.unshift(h),p))o=Math.max(o,e.top),r=Math.max(r,e.left),a=Math.min(a,e.bottom),c=Math.min(c,e.right);let g=t.getBoundingClientRect(),f={left:h.left-g.left,top:h.top-g.top},m={width:t.scrollWidth,height:t.scrollHeight},b=o-h.top+e.scrollTop,v=r-h.left+e.scrollLeft;i.viewportSize={width:Math.max(0,c-r),height:Math.max(0,a-o)},i.viewportScroll={top:b,left:v},i.totalScrollSize=m,i.offsetWithinScroller=f}}_sizeHostElement(e){let t=e&&null!==e.width?Math.min(82e5,e.width):0,i=e&&null!==e.height?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${i}px)`;else{let e=this._hostElement.style;e.minWidth=t?`${t}px`:"100%",e.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:i,height:o,xOffset:r,yOffset:a},c)=>{let h=this._children[c-this._first];h&&(h.style.position="absolute",h.style.boxSizing="border-box",h.style.transform=`translate(${t}px, ${e}px)`,void 0!==i&&(h.style.width=i+"px"),void 0!==o&&(h.style.height=o+"px"),h.style.left=void 0===r?null:r+"px",h.style.top=void 0===a?null:a+"px")})}async _adjustRange(e){let{_first:t,_last:i,_firstVisible:o,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-o})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),"smooth"===e.behavior){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function sQ(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function s0(e){if(null!==e.assignedSlot)return e.assignedSlot;if(null!==e.parentElement)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}let s1=e=>e,s2=(e,t)=>eC`${t}: ${JSON.stringify(e,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>s2(e,t+this._first),this._keyFunction=(e,t)=>s1(e,t+this._first),this._items=[],2!==e.type)throw Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return sZ(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?eS:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let i=e.parentNode;this._makeVirtualizer(i,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(e,i)=>t(e,i+this._first)),i&&(this._keyFunction=(e,t)=>i(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:i,scroller:o,items:r}=t;this._virtualizer=new Virtualizer({hostElement:e,layout:i,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){let i=e.parentNode;i&&1===i.nodeType&&(i.addEventListener("rangeChanged",e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let s5=oS(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=s2,this.keyFunction=s1,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:i,layout:o,scroller:r}=this;return eC`${s5({items:e,renderItem:t,keyFunction:i,layout:o,scroller:r})}`}element(e){return this[sX]?.element(e)}get layoutComplete(){return this[sX]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};sG([eB({attribute:!1})],LitVirtualizer.prototype,"items",void 0),sG([eB()],LitVirtualizer.prototype,"renderItem",void 0),sG([eB()],LitVirtualizer.prototype,"keyFunction",void 0),sG([eB({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),sG([eB({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);let s3={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var s6=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s8=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?s7(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&s6(t,i,a),a};let s9=class extends lit_element_i{get statusName(){return this.status?s3[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return eC`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};s9.styles=[F`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],s8([eB()],s9.prototype,"status",2),s8([eN()],s9.prototype,"statusName",1),s9=s8([eL("gl-git-status")],s9),F`
		:host {
			display: block;
			height: 100%;
		}
	`;let s4=[sh,F`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			cursor: pointer;
			/* Reduced containment to allow tooltips to escape */
			contain: layout;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* Focused state - when the item is the active descendant in the tree */
		:host([focused]) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true'][focused]) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		/* Inactive focus state - when the item would be focused but container doesn't have focus */
		/* In VS Code, inactive focus shows the selection background without the outline */
		:host([focused-inactive]) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		@media (prefers-reduced-motion: reduce) {
			.node--connector::before {
				transition: none;
			}
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover'][focused]) .node--connector::before,
		:host-context([guides='onHover'][focused-inactive]) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.8rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions,
		:host([focused]) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host([focused-inactive]) .actions {
			color: var(--vscode-list-inactiveSelectionIconForeground, var(--vscode-icon-foreground));
		}

		:host(:not(:hover):not(:focus-within):not([focused]):not([focused-inactive])) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}

		/* High Contrast Mode Support */
		@media (forced-colors: active) {
			:host {
				forced-color-adjust: none;
			}

			:host([focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			:host([aria-selected='true']) {
				background-color: Highlight;
				color: HighlightText;
			}

			:host([aria-selected='true'][focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			.checkbox {
				border: 1px solid CanvasText;
			}

			.checkbox:has(:checked) {
				background-color: Highlight;
				border-color: CanvasText;
			}

			.node--connector::before {
				border-color: CanvasText;
				opacity: 1;
			}
		}
	`];var ne=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,no=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?ni(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&ne(t,i,a),a};let nr=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.matched=!1,this.tabIndex=-1,this.selected=!1,this.focused=!1,this.focusedInactive=!1,this.onComponentClick=e=>{this.selectCore({dblClick:!1,altKey:e.altKey})}}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(e,t=!1){(e.has("expanded")||e.has("branch")||t)&&(this.branch?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return eA;let t=[];if(e>0)for(let i=0;i<e;i++)t.push(eC`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(eC`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?eC`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:eA}renderActions(){return eC`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return eC`<slot name="decorations" class="decorations"></slot>`}render(){return eC`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				tabindex=${this.tabIndex}
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
				@contextmenu=${this.onButtonContextMenu}
			>
				${eU(this.showIcon,()=>eC`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onButtonContextMenu(e){e.preventDefault(),e.stopPropagation();let t=new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(t)}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};nr.styles=s4,no([eB({type:Boolean})],nr.prototype,"branch",2),no([eB({type:Boolean})],nr.prototype,"expanded",2),no([eB({type:String})],nr.prototype,"path",2),no([eB({type:String,attribute:"parent-path"})],nr.prototype,"parentPath",2),no([eB({type:Boolean,attribute:"parent-expanded"})],nr.prototype,"parentExpanded",2),no([eB({type:Number})],nr.prototype,"level",2),no([eB({type:Number})],nr.prototype,"size",2),no([eB({type:Number})],nr.prototype,"position",2),no([eB({type:Boolean})],nr.prototype,"checkable",2),no([eB({type:Boolean})],nr.prototype,"checked",2),no([eB({type:Boolean})],nr.prototype,"disableCheck",2),no([eB({type:Boolean})],nr.prototype,"showIcon",2),no([eB({type:Boolean,reflect:!0})],nr.prototype,"matched",2),no([eB({type:Number})],nr.prototype,"tabIndex",2),no([eB({type:String,attribute:"vscode-context"})],nr.prototype,"vscodeContext",2),no([eN()],nr.prototype,"selected",2),no([eB({type:Boolean,reflect:!0})],nr.prototype,"focused",2),no([eB({type:Boolean,reflect:!0,attribute:"focused-inactive"})],nr.prototype,"focusedInactive",2),no([ej("#button")],nr.prototype,"buttonEl",2),nr=no([eL("gl-tree-item")],nr);var ns=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,na=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nn(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&ns(t,i,a),a};let nl=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0,this.filtered=!1,this.ariaLabel="Tree",this._focusedItemIndex=-1,this.virtualizerRef=sq(),this.scrollableRef=sq(),this._containerHasFocus=!1,this._actionButtonHasFocus=!1,this._scrolling=!1,this._typeAheadBuffer="",this._typeAheadTimeout=800,this._nodeMap=new Map,this._pathToIndexMap=new Map,this.handleContainerFocus=()=>{this._containerHasFocus=!0,this._focusedItemPath||(this._lastSelectedPath?(this._focusedItemPath=this._lastSelectedPath,this._focusedItemIndex=this.getItemIndex(this._lastSelectedPath)):this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0),this.requestUpdate())},this.handleContainerBlur=()=>{this._containerHasFocus=!1},this.handleFocusIn=e=>{let t=e.target;("ACTION-ITEM"===t.tagName?t:t.closest("action-item"))&&(this._actionButtonHasFocus=!0)},this.handleFocusOut=e=>{let t=e.target,i=e.relatedTarget,o="ACTION-ITEM"===t.tagName?t:t.closest("action-item"),r=i?.tagName==="ACTION-ITEM"?i:i?.closest("action-item");o&&!r&&(this._actionButtonHasFocus=!1)},this.handleContextMenu=e=>{let t=e.composedPath().find(e=>"GL-TREE-ITEM"===e.tagName);if(!t)return;let i=t.vscodeContext;if(!i)return;e.preventDefault(),e.stopPropagation(),this.dataset.vscodeContext=i;let o=new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(o),setTimeout(()=>{delete this.dataset.vscodeContext},100)},this.handleKeydown=e=>{if("Tab"===e.key&&e.composedPath().find(e=>"ACTION-ITEM"===e.tagName))if(e.shiftKey){e.preventDefault();let t=this.scrollableRef.value;t&&t.focus()}else{e.preventDefault();let t=document.activeElement;setTimeout(()=>{t&&"function"==typeof t.blur&&t.blur()},0)}},this.handleContainerKeydown=e=>{if(!this.treeItems?.length||this._actionButtonHasFocus)return;if("Tab"===e.key&&!e.shiftKey){if(this._focusedItemPath){let t=this.virtualizerRef.value;if(t){let i=Array.from(t.querySelectorAll("gl-tree-item")).find(e=>e.id===`tree-item-${this._focusedItemPath}`);if(i){let t=i.querySelector("action-item");t&&(e.preventDefault(),e.stopPropagation(),t.focus())}}}return}let t=this.getCurrentFocusedIndex(),i=t,o=!1;switch(e.key){case"Enter":case" ":e.preventDefault(),e.stopPropagation(),this.handleItemActivation(this.treeItems[t]);return;case"ArrowDown":i=Math.min(t+1,this.treeItems.length-1),o=!0;break;case"ArrowUp":i=Math.max(t-1,0),o=!0;break;case"Home":i=0,o=!0;break;case"End":i=this.treeItems.length-1,o=!0;break;case"ArrowLeft":case"ArrowRight":if(this.handleBranchToggle(e,this.treeItems[t]))return;if("ArrowRight"===e.key)i=Math.min(t+1,this.treeItems.length-1);else{let e=this.treeItems[t];if(e.parentPath){let o=this.getItemIndex(e.parentPath);i=-1!==o?o:Math.max(t-1,0)}else i=Math.max(t-1,0)}o=!0;break;default:if(this.isPrintableCharacter(e.key)){e.preventDefault(),e.stopPropagation(),this.handleTypeAhead(e.key);return}}o&&(e.preventDefault(),e.stopPropagation(),this.focusItemAtIndex(i))}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("focusin",this.handleFocusIn,{capture:!0}),this.addEventListener("focusout",this.handleFocusOut,{capture:!0}),this.addEventListener("contextmenu",this.handleContextMenu)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("keydown",this.handleKeydown,{capture:!0}),this.removeEventListener("focusin",this.handleFocusIn,{capture:!0}),this.removeEventListener("focusout",this.handleFocusOut,{capture:!0}),this.removeEventListener("contextmenu",this.handleContextMenu),this._typeAheadTimer&&(clearTimeout(this._typeAheadTimer),this._typeAheadTimer=void 0),this._typeAheadBuffer=""}set model(e){let t;if(this._model!==e){if(this._model=e,this._nodeMap.clear(),null!=this._model){let e=this._model.length;t=this._model.reduce((t,i,o)=>(t.push(...nc(i,e,o+1,void 0,this._nodeMap)),t),[])}this.treeItems=t,this.buildPathToIndexMap(),this.treeItems?.length&&!this._focusedItemPath&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)}}get model(){return this._model}renderIcon(e){return null==e?eA:"string"==typeof e?eC`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?eA:eC`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?eA:t.map(t=>eC`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${i=>this.onTreeItemActionClicked(i,e,t,!1)}
				@dblclick=${i=>this.onTreeItemActionClicked(i,e,t,!0)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?eA:t.map(e=>"icon"===e.type?eC`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?eC`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){let t=this._lastSelectedPath===e.path,i=this._focusedItemPath===e.path,o=`tree-item-${e.path}`;return eC`<gl-tree-item
			id=${o}
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			.matched=${e.matched??!1}
			.selected=${t}
			.focused=${i&&this._containerHasFocus&&!this._actionButtonHasFocus}
			.focusedInactive=${i&&(!this._containerHasFocus||this._actionButtonHasFocus)}
			.tabIndex=${-1}
			.vscodeContext=${e.contextData}
			@gl-tree-item-select=${()=>this.onBeforeTreeItemSelected(e)}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${eU(null!=e.description,()=>eC`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}render(){if(!this.treeItems?.length)return eA;let e=this._focusedItemPath?`tree-item-${this._focusedItemPath}`:void 0;return eC`
			<div
				${sW(this.scrollableRef)}
				class="scrollable"
				tabindex="0"
				role="tree"
				aria-label=${this.ariaLabel}
				aria-multiselectable="false"
				aria-activedescendant=${e||eA}
				@keydown=${this.handleContainerKeydown}
				@focus=${this.handleContainerFocus}
				@blur=${this.handleContainerBlur}
			>
				<lit-virtualizer
					${sW(this.virtualizerRef)}
					.items=${this.treeItems}
					.keyFunction=${e=>e.path}
					.layout=${(0,sT.flow)({direction:"vertical"})}
					.renderItem=${e=>this.renderTreeItem(e)}
					.scroller=${!!this.scrollableRef.value}
				></lit-virtualizer>
			</div>
		`}findTreeNode(e){return this._nodeMap.get(e)}getItemIndex(e){return this._pathToIndexMap.get(e)??-1}rebuildFlattenedTree(){if(!this._model)return;let e=this._model.length,t=this._model.reduce((t,i,o)=>(t.push(...nc(i,e,o+1)),t),[]);this.treeItems=t,this.buildPathToIndexMap()}onBeforeTreeItemSelected(e){if(this._lastSelectedPath!==e.path&&(this._lastSelectedPath=e.path),this._focusedItemPath!==e.path&&(this._focusedItemPath=e.path,this._focusedItemIndex=this.getItemIndex(e.path)),e.branch){let t=this.findTreeNode(e.path);t&&(t.expanded=!t.expanded,this.rebuildFlattenedTree())}this.requestUpdate()}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,i,o=!1){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:i,dblClick:o,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}getCurrentFocusedIndex(){if(!this.treeItems?.length)return -1;if(this._focusedItemPath){let e=this.getItemIndex(this._focusedItemPath);if(-1!==e)return e}if(this._focusedItemIndex>=0&&this._focusedItemIndex<this.treeItems.length)return this._focusedItemIndex;if(this._lastSelectedPath){let e=this.getItemIndex(this._lastSelectedPath);if(-1!==e)return e}return 0}handleItemActivation(e){e&&(this.onBeforeTreeItemSelected(e),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),e))}handleBranchToggle(e,t){if(!t?.branch)return!1;let i="ArrowRight"===e.key,o="ArrowLeft"===e.key;if(i&&t.expanded||o&&!t.expanded)return!1;e.preventDefault(),e.stopPropagation();let r=this.findTreeNode(t.path);return!!r&&(r.expanded=!r.expanded,this.rebuildFlattenedTree(),this.requestUpdate(),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),t),!0)}focusItemAtIndex(e){let t=this.treeItems?.[e];t&&(this._focusedItemPath=t.path,this._focusedItemIndex=e,this._lastSelectedPath!==t.path&&(this._lastSelectedPath=t.path),this.requestUpdate(),this.scrollToItem(e))}scrollToItem(e){this._scrolling||(this._scrolling=!0,this.updateComplete.then(()=>{let t=this.virtualizerRef.value,i=this.scrollableRef.value;if(!t||!i){this._scrolling=!1;return}let o=()=>{i&&document.activeElement!==i&&i.focus(),this._scrolling=!1},r=0===e,a=e===(this.treeItems?.length??0)-1;r||a?requestAnimationFrame(()=>{r?i.scrollTop=0:i.scrollTop=i.scrollHeight,requestAnimationFrame(o)}):requestAnimationFrame(()=>{let i=t.scrollToIndex(e,"nearest");i&&"function"==typeof i.then?i.then(o):requestAnimationFrame(o)})}))}handleTypeAhead(e){this._typeAheadTimer&&clearTimeout(this._typeAheadTimer);let t=!this._typeAheadBuffer;this._typeAheadBuffer+=e.toLowerCase();let i=this.treeItems?.[this._focusedItemIndex],o=i?.label?.toLowerCase().startsWith(this._typeAheadBuffer),r=!1;if(t?r=!0:o||(r=!0),r){let e=this.findNextMatchingItem(this._typeAheadBuffer);-1!==e&&this.focusItemAtIndex(e)}this._typeAheadTimer=window.setTimeout(()=>{this._typeAheadBuffer="",this._typeAheadTimer=void 0},this._typeAheadTimeout)}buildPathToIndexMap(){if(this._pathToIndexMap.clear(),!this.treeItems)return;let e=0;for(let t of this.treeItems)this._pathToIndexMap.set(t.path,e++)}findNextMatchingItem(e){if(!this.treeItems?.length||!e)return -1;let t=e.toLowerCase(),i=this._focusedItemIndex,o=this.treeItems.length;for(let e=1;e<o;e++){let r=(i+e)%o;if(this.treeItems[r].label?.toLowerCase().startsWith(t))return r}return -1}isPrintableCharacter(e){return 1===e.length&&/^[a-zA-Z0-9\s\-_.]$/.test(e)}};function nc(e,t=1,i=1,o,r){r&&r.set(e.path,e);let a=[{...e,size:t,position:i,parentPath:o}],c=!1!==e.expanded;if(null!=e.children&&e.children.length>0&&c){let t=e.children.length;for(let i=0;i<t;i++)a.push(...nc(e.children[i],t,i+1,e.path,r))}return a}nl.styles=[sd,F`
			:host {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				overflow: hidden;
			}

			.scrollable {
				flex: 1;
				width: 100%;
				min-height: 0;
				overflow-y: auto;
				overflow-x: visible; /* Allow horizontal overflow for tooltips */
				outline: none;
			}

			.scrollable:focus-within {
				outline: none;
			}

			lit-virtualizer {
				display: block;
				width: 100%;
				height: 100%;
				/* Use layout containment instead of strict to avoid rendering issues */
				/* Removed paint containment to allow tooltips to escape */
				contain: layout;
			}

			gl-tree-item {
				width: 100%;
			}

			/* Dim non-matched items when filter is present */
			:host([filtered]) gl-tree-item:not([matched]) {
				opacity: 0.6;
			}
		`],na([eN()],nl.prototype,"treeItems",2),na([eB({reflect:!0})],nl.prototype,"guides",2),na([eB({type:Boolean,reflect:!0})],nl.prototype,"filtered",2),na([eB({type:String,attribute:"aria-label"})],nl.prototype,"ariaLabel",2),na([eN()],nl.prototype,"_containerHasFocus",2),na([eN()],nl.prototype,"_actionButtonHasFocus",2),na([eB({type:Array,attribute:!1})],nl.prototype,"model",1),nl=na([eL("gl-tree-generator")],nl);var nh=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,np=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nd(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nh(t,i,a),a};let GlDetailsBase=class GlDetailsBase extends lit_element_i{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this._filterMode="mixed",this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){let e=this.files?.length??0,t=e>0?e5("file",e):"Files";return`${t} changed`}renderFilterAction(){let e,t,i;if(null==this.searchContext)return eA;let o=this.searchContext.matchedFiles?.length??0,r=this.files?.length??0;switch(this._filterMode){case"off":e="filter",t=`Search matched ${o} of ${r} files
Click to highlight matching files`;break;case"mixed":e="filter-filled",t=`Search matched ${o} of ${r} files
Click to show only matching files`,i="filter-mode-mixed";break;case"matched":e="filter-filled",t=`Showing ${o} of ${r} files
Click to show all files`}return eC`<action-item
			data-action="filter-mode"
			class="${i??""}"
			label="${t}"
			icon="${e}"
			@click="${this.onToggleFilter}"
		></action-item>`}onToggleFilter(e){switch(e.preventDefault(),e.stopPropagation(),this._filterMode){case"off":this._filterMode="mixed";break;case"mixed":this._filterMode="matched";break;case"matched":this._filterMode="off"}}renderLayoutAction(){let e="tree",t="list-tree",i="View as Tree";switch(this.fileLayout){case"auto":e="list",t="gl-list-auto",i="View as List";break;case"list":e="tree",t="list-flat",i="View as Tree";break;case"tree":e="auto",t="list-tree",i="View as Auto"}return eC`<action-item
			data-action="files-layout"
			data-files-layout="${e}"
			label="${i}"
			icon="${t}"
		></action-item>`}renderChangedFiles(e,t){let i=this.files?.length??0,o=this.isTree(i),r=this.createTreeModel(e,this.files??[],o,this.isCompact);return eC`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats" style="opacity: 1">${t}</span>
				<action-nav slot="actions"> ${this.renderFilterAction()} ${this.renderLayoutAction()} </action-nav>
				${this.renderChangedFilesActions()}${this.renderTreeFileModel(r)}
			</webview-pane>
		`}renderChangedFilesActions(){}onShareWipChanges(e,t,i){if(!i)return;let o=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(o)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,i=!1,o=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,i,o);let r=[],a=[],c=[];for(let e of t)e.staged?a.push(e):c.push(e);return a.length||c.length?(a.length&&r.push({label:"Staged Changes",path:"/:staged:/",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,a,i,o,{level:2}),actions:this.getStagedActions()}),c.length&&r.push({label:"Unstaged Changes",path:"/:unstaged:/",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,c,i,o,{level:2}),actions:this.getUnstagedActions()})):r.push(...this.createFileTreeModel(e,t,i,o)),r}sortChildren(e){return e.sort((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:+(e.label>t.label)),e}createFileTreeModel(e,t,i=!1,o=!0,r={level:1}){void 0===r.level&&(r.level=1);let a=t;if("matched"===this._filterMode&&this.searchContext?.matchedFiles!=null){let e=new Set(this.searchContext.matchedFiles.map(e=>e.path));a=t.filter(t=>e.has(t.path))}if(!a.length)return[{label:"matched"===this._filterMode&&null!=this.searchContext?"No matching files":"No changes",path:"",level:r.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];let c=[];if(i){let e=sn(a,e=>e.path.split("/"),(...e)=>e.join("/"),o);if(null!=e.children)for(let t of e.children.values()){let e=this.walkFileTree(t,{level:r.level});c.push(e)}}else for(let e of a){let t=this.fileToTreeModel(e,{level:r.level,branch:!1},!0);c.push(t)}return this.sortChildren(c),c}walkFileTree(e,t={level:1}){let i;if(void 0===t.level&&(t.level=1),i=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let o=[];for(let i of e.children.values()){let e=this.walkFileTree(i,{...t,level:t.level+1});o.push(e)}o.length>0&&(this.sortChildren(o),i.branch=!0,i.children=o,o.some(e=>e.matched)&&(i.matched=!0))}return i}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}getFileContextData(e){}fileToTreeModel(e,t,i=!1,o="/"){let r=e.path.lastIndexOf(o),a=-1!==r?e.path.substring(r+1):e.path,c=i&&-1!==r?e.path.substring(0,r):"",h=this.searchContext?.matchedFiles?.find(t=>t.path===e.path)!=null;return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:a,description:`${!0===i?c:""}${"R"===e.status?` \u2190 ${e.originalPath}`:""}`,context:[e],actions:this.getFileActions(e,t),contextData:this.getFileContextData(e),matched:h,...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return eC`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			.filtered=${null!=this.searchContext&&"off"!==this._filterMode}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){let i=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(i)}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(i)}onOpenFileOnRemote(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(i)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(i)}onComparePrevious(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(i)}onMoreActions(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(i)}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(i)}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,i=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(i)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}};np([eB({type:Array})],GlDetailsBase.prototype,"files",2),np([eB({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),np([eB({type:Object})],GlDetailsBase.prototype,"preferences",2),np([eB({type:Object})],GlDetailsBase.prototype,"orgSettings",2),np([eB({type:Object})],GlDetailsBase.prototype,"searchContext",2),np([eN()],GlDetailsBase.prototype,"_filterMode",2),np([eB({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);var nu=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,nf=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?ng(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nu(t,i,a),a};let nm=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?eC`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??eA}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?eC`<gl-tooltip placement=${this.tooltipPlacement??eA}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?eC`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??eA}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:eC`<button
			class="control"
			role=${this.role??eA}
			aria-checked=${this.ariaChecked??eA}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};nm.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nm.styles=[sh,F`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${sc}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],nf([ej(".control")],nm.prototype,"control",2),nf([eB({reflect:!0})],nm.prototype,"appearance",2),nf([eB({type:Boolean,reflect:!0})],nm.prototype,"disabled",2),nf([eB({reflect:!0})],nm.prototype,"density",2),nf([eB({type:Boolean,reflect:!0})],nm.prototype,"full",2),nf([eB()],nm.prototype,"href",2),nf([eB()],nm.prototype,"tooltip",2),nf([eB()],nm.prototype,"tooltipPlacement",2),nf([eB({type:Boolean,reflect:!0})],nm.prototype,"truncate",2),nm=nf([eL("gl-button")],nm);let nb=F`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,nv=F`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;rX.define("sl-popup");var ny=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,n_=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nw(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&ny(t,i,a),a};let nx=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=iN(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let i=iN(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of nx.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),nx.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return eC`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return nx.closeOthers(this),this.open=!0,nx.openPopovers.add(this),iF(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,nx.openPopovers.delete(this),iF(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};nx.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nx.openPopovers=new Set,nx.styles=[sd,F`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],n_([ej("#popover")],nx.prototype,"body",2),n_([ej("sl-popup")],nx.prototype,"popup",2),n_([eB({reflect:!0})],nx.prototype,"placement",2),n_([eB({type:Object})],nx.prototype,"anchor",2),n_([eB({reflect:!0,type:Boolean})],nx.prototype,"disabled",2),n_([eB({type:Number})],nx.prototype,"distance",2),n_([eB({reflect:!0,type:Boolean})],nx.prototype,"open",2),n_([eB({reflect:!0,type:Boolean})],nx.prototype,"arrow",2),n_([eB({type:Number})],nx.prototype,"skidding",2),n_([eB()],nx.prototype,"trigger",2),n_([eB({type:Boolean})],nx.prototype,"hoist",2),n_([eB({reflect:!0})],nx.prototype,"appearance",2),n_([tU("open",{afterFirstUpdate:!0})],nx.prototype,"handleOpenChange",1),n_([tU(["distance","hoist","placement","skidding"])],nx.prototype,"handleOptionsChange",1),n_([tU("disabled")],nx.prototype,"handleDisabledChange",1),nx=n_([eL("gl-popover")],nx);var nk=Object.defineProperty,n$=Object.getOwnPropertyDescriptor,nC=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?n$(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nk(t,i,a),a};let nS=class extends lit_element_i{constructor(){super(...arguments),this.overlay="tooltip",this.icon="",this.disabled=!1}render(){return this.label?"popover"===this.overlay?eC`<gl-popover hoist
				>${this.renderContent()}
				<div slot="content">${oE(this.label)}</div></gl-popover
			>`:eC`<gl-tooltip hoist content="${this.label}">${this.renderContent()}</gl-tooltip>`:this.renderContent()}renderContent(){return eC`
			<a
				class="chip"
				part="base"
				role="${!this.href?"button":eA}"
				type="${!this.href?"button":eA}"
				?disabled=${this.disabled}
				href=${this.href??eA}
				slot=${"popover"===this.overlay?"anchor":eA}
			>
				<code-icon
					part="icon"
					icon="${this.icon}"
					modifier="${("loading"===this.icon?"spin":"")??eA}"
				></code-icon
				><slot></slot>
			</a>
		`}focus(e){this.defaultFocusEl.focus(e)}};function nA(e="autolink",t="merged"){let i,o;switch(e){case"issue":o="closed"===t?"merged":"opened",i="closed"===t?"pass":"issues";break;case"pr":switch(o=t,t){case"merged":i="git-merge";break;case"closed":i="git-pull-request-closed";break;default:i="git-pull-request"}break;default:o="opened",i="link"}return{icon:i,modifier:o}}nS.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nS.styles=[nb,nv,F`
			:host {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				vertical-align: text-bottom;
				border-radius: 0.5rem;
			}

			* {
				box-sizing: border-box;
			}

			:host(:focus-within) {
				${sl}
			}

			:host(:hover) {
				background-color: var(--vscode-toolbar-hoverBackground);
			}

			:host(:active) {
				background-color: var(--vscode-toolbar-activeBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				opacity: 0.5;
			}

			.chip {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				gap: 0.2rem;
				vertical-align: middle;
				color: inherit;
				min-width: 2rem;
				height: 2rem;
				color: inherit;
				padding: 0.2rem;
				text-decoration: none;
				cursor: pointer;
			}
			.chip:hover {
				text-decoration: none;
			}
			.chip:focus {
				outline: none;
			}

			a:not(.chip) {
				text-decoration: underline;
			}

			::slotted(*) {
				padding-inline-end: 0.2rem;
				vertical-align: middle;
				text-transform: var(--chip-text-transform, capitalize);
			}
		`],nC([eB()],nS.prototype,"href",2),nC([eB()],nS.prototype,"label",2),nC([eB()],nS.prototype,"overlay",2),nC([eB()],nS.prototype,"icon",2),nC([eB({type:Boolean})],nS.prototype,"disabled",2),nC([ej("a")],nS.prototype,"defaultFocusEl",2),nS=nC([eL("gl-action-chip")],nS);let nE=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>{let i=new Date(e);return isNaN(i.getTime())?new Date(parseInt(e,10)):i}});var nP=Object.defineProperty,nR=Object.getOwnPropertyDescriptor,nI=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nR(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nP(t,i,a),a};let nT=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(t,i,o,r=!0){i=i??void 0;let a=`${(void 0)??""}:${i}`,c=eJ.get(a);if(null==c){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=eY.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}let i={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eZ))if(null!=t){for(let[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":"DD"===o?i.day="2-digit":i.day="numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}}return i}(i);c=new Intl.DateTimeFormat(e,t),r&&eJ.set(a,c)}if(null==i||eY.test(i))return c.format(t);let h=c.formatToParts(t);return i.replace(eZ,(i,o,a,c,p,g,f,m,b,v,w,_,x,C,S)=>{if(null!=o)return o.substring(1,o.length-1);for(let[i,o]of Object.entries(S)){if(null==o)continue;let a=h.find(e=>e.type===i);if("Do"===o&&a?.type==="day")return function(e){let t=e%100;return`${e}${e0[(t-20)%10]??e0[t]??e0[0]}`}(Number(a.value));if("a"===o&&a?.type==="dayPeriod"){let i=(function(t){let i=`${(void 0)??""}:time:${t}`,o=eJ.get(i);null==o&&(o=new Intl.DateTimeFormat(e,{localeMatcher:"best fit",timeStyle:t}),r&&eJ.set(i,o));return o})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(i??a)?.value??""}`}return a?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?function(i,o){let r=("number"==typeof i?i:i.getTime())-new Date().getTime();for(let[i,o,a,c]of eX)if(Math.abs(r)>=o||1e3===o)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(r/a),i);return""}(this.date):this.absoluteDate}render(){return eC`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};nI([eB()],nT.prototype,"format",2),nI([eB({attribute:"date-style"})],nT.prototype,"dateStyle",2),nI([eB({converter:nE(),reflect:!0,attribute:!1})],nT.prototype,"date",2),nI([eB()],nT.prototype,"tooltip",2),nT=nI([eL("formatted-date")],nT);var nz=Object.defineProperty,nM=Object.getOwnPropertyDescriptor,nO=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nM(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nz(t,i,a),a};let nL=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?eC`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:eA}render(){let{icon:e,modifier:t}=nA(this.type,this.status);return this.compact?eC`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:eC`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:eA} ${this.renderDate()}</p>
			${eU(!0===this.details,()=>eC`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`)}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};nL.styles=F`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,nO([eB()],nL.prototype,"url",2),nO([eB()],nL.prototype,"name",2),nO([eB()],nL.prototype,"date",2),nO([eB()],nL.prototype,"dateFormat",2),nO([eB()],nL.prototype,"dateStyle",2),nO([eB()],nL.prototype,"status",2),nO([eB()],nL.prototype,"type",2),nO([eB()],nL.prototype,"identifier",2),nO([eB({type:Boolean,reflect:!0})],nL.prototype,"compact",2),nO([eB({type:Boolean})],nL.prototype,"details",2),nL=nO([eL("issue-pull-request")],nL);var nD=Object.defineProperty,nB=Object.getOwnPropertyDescriptor,nN=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nB(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nD(t,i,a),a};let nF=class extends lit_element_i{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}render(){let{icon:e,modifier:t}=nA(this.type,this.status);return eC`<gl-popover hoist>
			<gl-action-chip exportparts="icon" slot="anchor" icon=${e} class="chip--${t}"
				><span part="label">${this.identifier}</span></gl-action-chip
			>
			<div slot="content">
				<issue-pull-request
					type=${this.type}
					name=${this.name}
					url="${this.url}"
					identifier=${this.identifier}
					status=${this.status}
					.date=${this.date}
					.dateFormat=${this.dateFormat}
					.dateStyle=${this.dateStyle}
					?details=${this.details}
				></issue-pull-request>
			</div>
		</gl-popover>`}};nF.styles=F`
		:host {
			display: contents;
		}

		.chip--opened::part(icon) {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.chip--closed::part(icon) {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.chip--merged::part(icon) {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}
	`,nN([eB()],nF.prototype,"url",2),nN([eB()],nF.prototype,"name",2),nN([eB()],nF.prototype,"date",2),nN([eB()],nF.prototype,"dateFormat",2),nN([eB()],nF.prototype,"dateStyle",2),nN([eB()],nF.prototype,"status",2),nN([eB()],nF.prototype,"type",2),nN([eB()],nF.prototype,"identifier",2),nN([eB({type:Boolean})],nF.prototype,"details",2),nF=nN([eL("gl-autolink-chip")],nF);var nj=Object.defineProperty,nU=Object.getOwnPropertyDescriptor,nH=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nU(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nj(t,i,a),a};let nq=class extends lit_element_i{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?eC`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:eC`<code-icon icon="person" size="18"></code-icon>`}render(){return eC`
			<gl-tooltip>
				${eU(null!=this.url,()=>eC`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span><span class="name">${this.name}</span></a
						>`,()=>eC`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name">${this.name}</span></span
						>`)}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?eC`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:eA}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
		`}};nq.styles=F`
		:host {
			display: contents;
		}

		* {
			box-sizing: border-box;
		}

		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	`,nH([eB()],nq.prototype,"name",2),nH([eB()],nq.prototype,"url",2),nH([eB()],nq.prototype,"avatarUrl",2),nH([eB({type:Boolean,attribute:"show-avatar",reflect:!0})],nq.prototype,"showAvatar",2),nq=nH([eL("gl-commit-author")],nq);var nV=Object.defineProperty,nW=Object.getOwnPropertyDescriptor,nG=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nW(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nV(t,i,a),a};let nK=class extends lit_element_i{constructor(){super(...arguments),this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}get absoluteDate(){return this.dateElement.absoluteDate}get dateLabel(){return this.dateElement.dateLabel}render(){return eC`<code-icon icon="git-commit"></code-icon>
			<formatted-date
				.date=${this.date}
				.format=${this.dateFormat}
				.dateStyle=${this.dateStyle}
				.tooltip=${this.actionLabel??eA}
			></formatted-date>`}};nK.styles=F`
		:host {
			display: inline-flex;
			align-items: center;
			gap: 0.2rem;
			vertical-align: middle;
			font-size: inherit;
		}

		formatted-date::part(base) {
			white-space: nowrap;
		}
	`,nG([eB({converter:nE(),reflect:!0})],nK.prototype,"date",2),nG([eB()],nK.prototype,"dateFormat",2),nG([eB()],nK.prototype,"dateStyle",2),nG([eB({type:Boolean})],nK.prototype,"committer",2),nG([eB()],nK.prototype,"actionLabel",2),nG([ej("formatted-date")],nK.prototype,"dateElement",2),nK=nG([eL("gl-commit-date")],nK);var nZ=Object.defineProperty,nY=Object.getOwnPropertyDescriptor,nX=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?nY(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&nZ(t,i,a),a};let nJ=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","remove"]]]),nQ=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return nJ.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let i=this[e];return null==i?eA:eC`<span class="stat ${e}" aria-label="${i} ${e}"
			><span class="label">${this.renderSymbol(t)}${i}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?eC`<code-icon class="icon" icon="${t}"></code-icon>`:eC`<span>${e}</span>`}};nQ.styles=F`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		:host([appearance='pill']) {
			background-color: color-mix(
				in srgb,
				var(--vscode-sideBarSectionHeader-background) 90%,
				var(--vscode-foreground) 10%
			);
			border: 1px solid
				color-mix(in srgb, var(--vscode-sideBarSectionHeader-border) 100%, var(--vscode-foreground) 70%);
			border-radius: 0.4rem;
			gap: 0;
			padding: 0 0.8rem 0 0.6rem;
			white-space: nowrap;
			line-height: 1.5rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.9rem;
			margin-inline-end: 0.2rem;
		}

		/* Pill styles */
		:host([appearance='pill']) .stat {
			padding: 0;
			margin-inline-end: 0.8rem;
		}

		:host([appearance='pill']) .stat:last-child {
			margin-inline-end: 0;
		}

		:host([appearance='pill']) .icon {
			margin-inline-end: 0.3rem;
		}

		:host([appearance='pill']) .label {
			display: flex;
			align-items: center;
			gap: 0;
		}
	`,nX([eB({type:Number})],nQ.prototype,"added",2),nX([eB({type:Number})],nQ.prototype,"modified",2),nX([eB({type:Number})],nQ.prototype,"removed",2),nX([eB()],nQ.prototype,"symbol",2),nX([eB({reflect:!0})],nQ.prototype,"appearance",2),nQ=nX([eL("commit-stats")],nQ);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let n0=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!n0(e))??eS}update(e,t){let i=this._$Cbt,o=i.length;this._$Cbt=t;let r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let c=t[e];if(!n0(c))return this._$Cwt=e,c;e<o&&c===i[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(c).then(async e=>{for(;a.get();)await a.get();let t=r.deref();if(void 0!==t){let i=t._$Cbt.indexOf(c);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return eS}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let n1=oS(until_c);function n2(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var n5=n2(),n3={exec:()=>null};function n6(e,t=""){let i="string"==typeof e?e:e.source,o={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(n7.caret,"$1"),i=i.replace(e,r),o},getRegex:()=>new RegExp(i,t)};return o}var n7={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},n8=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,n9=/(?:[*+-]|\d{1,9}[.)])/,n4=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ae=n6(n4).replace(/bull/g,n9).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ai=n6(n4).replace(/bull/g,n9).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ao=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ar=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,as=n6(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ar).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),an=n6(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,n9).getRegex(),aa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",al=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ac=n6("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",al).replace("tag",aa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ah=n6(ao).replace("hr",n8).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",aa).getRegex(),ad={blockquote:n6(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ah).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:as,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:n8,html:ac,lheading:ae,list:an,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:ah,table:n3,text:/^[^\n]+/},ap=n6("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",n8).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",aa).getRegex(),au={...ad,lheading:ai,table:ap,paragraph:n6(ao).replace("hr",n8).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ap).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",aa).getRegex()},ag={...ad,html:n6(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",al).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:n3,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:n6(ao).replace("hr",n8).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ae).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},af=/^( {2,}|\\)\n(?!\s*$)/,am=/[\p{P}\p{S}]/u,ab=/[\s\p{P}\p{S}]/u,av=/[^\s\p{P}\p{S}]/u,ay=n6(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ab).getRegex(),aw=/(?!~)[\p{P}\p{S}]/u,a_=n6(/link|code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<!`)(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("code",/(?<!`)(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ax=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ak=n6(ax,"u").replace(/punct/g,am).getRegex(),a$=n6(ax,"u").replace(/punct/g,aw).getRegex(),aC="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",aS=n6(aC,"gu").replace(/notPunctSpace/g,av).replace(/punctSpace/g,ab).replace(/punct/g,am).getRegex(),aA=n6(aC,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,aw).getRegex(),aE=n6("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,av).replace(/punctSpace/g,ab).replace(/punct/g,am).getRegex(),aP=n6(/\\(punct)/,"gu").replace(/punct/g,am).getRegex(),aR=n6(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),aI=n6(al).replace("(?:--\x3e|$)","--\x3e").getRegex(),aT=n6("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",aI).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),az=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,aM=n6(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",az).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),aO=n6(/^!?\[(label)\]\[(ref)\]/).replace("label",az).replace("ref",ar).getRegex(),aL=n6(/^!?\[(ref)\](?:\[\])?/).replace("ref",ar).getRegex(),aD=n6("reflink|nolink(?!\\()","g").replace("reflink",aO).replace("nolink",aL).getRegex(),aB=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,aN={_backpedal:n3,anyPunctuation:aP,autolink:aR,blockSkip:a_,br:af,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:n3,emStrongLDelim:ak,emStrongRDelimAst:aS,emStrongRDelimUnd:aE,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:aM,nolink:aL,punctuation:ay,reflink:aO,reflinkSearch:aD,tag:aT,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:n3},aF={...aN,link:n6(/^!?\[(label)\]\((.*?)\)/).replace("label",az).getRegex(),reflink:n6(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",az).getRegex()},aj={...aN,emStrongRDelimAst:aA,emStrongLDelim:a$,url:n6(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",aB).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:n6(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",aB).getRegex()},aU={...aj,br:n6(af).replace("{2,}","*").getRegex(),text:n6(aj.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},aH={normal:ad,gfm:au,pedantic:ag},aq={normal:aN,gfm:aj,breaks:aU,pedantic:aF},aV={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},aW=e=>aV[e];function aG(e,t){if(t){if(n7.escapeTest.test(e))return e.replace(n7.escapeReplace,aW)}else if(n7.escapeTestNoEncode.test(e))return e.replace(n7.escapeReplaceNoEncode,aW);return e}function aK(e){try{e=encodeURI(e).replace(n7.percentDecode,"%")}catch{return null}return e}function aZ(e,t){let i=e.replace(n7.findPipe,(e,t,i)=>{let o=!1,r=t;for(;--r>=0&&"\\"===i[r];)o=!o;return o?"|":" |"}).split(n7.splitPipe),o=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;o<i.length;o++)i[o]=i[o].trim().replace(n7.slashPipe,"|");return i}function aY(e,t,i){let o=e.length;if(0===o)return"";let r=0;for(;r<o;){let a=e.charAt(o-r-1);if(a!==t||i)if(a!==t&&i)r++;else break;else r++}return e.slice(0,o-r)}function aX(e,t,i,o,r){let a=t.href,c=t.title||null,h=e[1].replace(r.other.outputLinkReplace,"$1");o.state.inLink=!0;let p={type:"!"===e[0].charAt(0)?"image":"link",raw:i,href:a,title:c,text:h,tokens:o.inlineTokens(h)};return o.state.inLink=!1,p}var aJ=class{options;rules;lexer;constructor(e){this.options=e||n5}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:aY(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],i=function(e,t,i){let o=e.match(i.other.indentCodeCompensation);if(null===o)return t;let r=o[1];return t.split(`
`).map(e=>{let t=e.match(i.other.beginningSpace);if(null===t)return e;let[o]=t;return o.length>=r.length?e.slice(r.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=aY(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:aY(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=aY(t[0],`
`).split(`
`),i="",o="",r=[];for(;e.length>0;){let t=!1,a=[],c;for(c=0;c<e.length;c++)if(this.rules.other.blockquoteStart.test(e[c]))a.push(e[c]),t=!0;else if(t)break;else a.push(e[c]);e=e.slice(c);let h=a.join(`
`),p=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${h}`:h,o=o?`${o}
${p}`:p;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,r,!0),this.lexer.state.top=g,0===e.length)break;let f=r.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let t=f.raw+`
`+e.join(`
`),a=this.blockquote(t);r[r.length-1]=a,i=i.substring(0,i.length-f.raw.length)+a.raw,o=o.substring(0,o.length-f.text.length)+a.text;break}if(f?.type==="list"){let t=f.raw+`
`+e.join(`
`),a=this.list(t);r[r.length-1]=a,i=i.substring(0,i.length-f.raw.length)+a.raw,o=o.substring(0,o.length-f.raw.length)+a.raw,e=t.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:r,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),o=i.length>1,r={type:"list",raw:"",ordered:o,start:o?+i.slice(0,-1):"",loose:!1,items:[]};i=o?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=o?i:"[*+-]");let a=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,o="",h="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let p=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),g=e.split(`
`,1)[0],f=!p.trim(),m=0;if(this.options.pedantic?(m=2,h=p.trimStart()):f?m=t[1].length+1:(m=(m=t[2].search(this.rules.other.nonSpaceChar))>4?1:m,h=p.slice(m),m+=t[1].length),f&&this.rules.other.blankLine.test(g)&&(o+=g+`
`,e=e.substring(g.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(m),i=this.rules.other.hrRegex(m),r=this.rules.other.fencesBeginRegex(m),a=this.rules.other.headingBeginRegex(m),c=this.rules.other.htmlBeginRegex(m);for(;e;){let b=e.split(`
`,1)[0],v;if(g=b,v=this.options.pedantic?g=g.replace(this.rules.other.listReplaceNesting,"  "):g.replace(this.rules.other.tabCharGlobal,"    "),r.test(g)||a.test(g)||c.test(g)||t.test(g)||i.test(g))break;if(v.search(this.rules.other.nonSpaceChar)>=m||!g.trim())h+=`
`+v.slice(m);else{if(f||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||r.test(p)||a.test(p)||i.test(p))break;h+=`
`+g}f||g.trim()||(f=!0),o+=b+`
`,e=e.substring(b.length+1),p=v.slice(m)}}r.loose||(c?r.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(c=!0));let b=null,v;this.options.gfm&&(b=this.rules.other.listIsTask.exec(h))&&(v="[ ] "!==b[0],h=h.replace(this.rules.other.listReplaceTask,"")),r.items.push({type:"list_item",raw:o,task:!!b,checked:v,loose:!1,text:h,tokens:[]}),r.raw+=o}let h=r.items.at(-1);if(!h)return;h.raw=h.raw.trimEnd(),h.text=h.text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){let t=r.items[e].tokens.filter(e=>"space"===e.type);r.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=aZ(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===o.length){for(let e of o)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<i.length;e++)a.header.push({text:i[e],tokens:this.lexer.inline(i[e]),header:!0,align:a.align[e]});for(let e of r)a.rows.push(aZ(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=aY(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let i=0;for(let t=0;t<e.length;t++)if("\\"===e[t])t++;else if("("===e[t])i++;else if(")"===e[t]&&--i<0)return t;return i>0?-2:-1}(t[2],0);if(-2===e)return;if(e>-1){let i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i.slice(1):i.slice(1,-1)),aX(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=t[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return aX(i,e,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!(!o||o[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!i||this.rules.inline.punctuation.exec(i))){let i=[...o[0]].length-1,r,a,c=i,h=0,p="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+i);null!=(o=p.exec(t));){if(!(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6]))continue;if(a=[...r].length,o[3]||o[4]){c+=a;continue}if((o[5]||o[6])&&i%3&&!((i+a)%3)){h+=a;continue}if((c-=a)>0)continue;a=Math.min(a,a+c+h);let t=[...o[0]][0].length,p=e.slice(0,i+o.index+t+a);if(Math.min(i,a)%2){let e=p.slice(1,-1);return{type:"em",raw:p,text:e,tokens:this.lexer.inlineTokens(e)}}let g=p.slice(2,-2);return{type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(e),o=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&o&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,i;return i="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,i;if("@"===t[2])i="mailto:"+(e=t[0]);else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0])e=t[0],i="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},aQ=class u{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||n5,this.options.tokenizer=this.options.tokenizer||new aJ,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:n7,block:aH.normal,inline:aq.normal};this.options.pedantic?(t.block=aH.pedantic,t.inline=aq.pedantic):this.options.gfm&&(t.block=aH.gfm,this.options.breaks?t.inline=aq.breaks:t.inline=aq.gfm),this.tokenizer.rules=t}static get rules(){return{block:aH,inline:aq}}static lex(e,t){return new u(t).lex(e)}static lexInline(e,t){return new u(t).inlineTokens(e)}lex(e){e=e.replace(n7.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){for(this.options.pedantic&&(e=e.replace(n7.tabCharGlobal,"    ").replace(n7.spaceLine,""));e;){let o;if(this.options.extensions?.block?.some(i=>!!(o=i.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let i=t.at(-1);1===o.raw.length&&void 0!==i?i.raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+o.raw,i.text+=`
`+o.text,this.inlineQueue.at(-1).src=i.text):t.push(o);continue}if((o=this.tokenizer.fences(e))||(o=this.tokenizer.heading(e))||(o=this.tokenizer.hr(e))||(o=this.tokenizer.blockquote(e))||(o=this.tokenizer.list(e))||(o=this.tokenizer.html(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+o.raw,i.text+=`
`+o.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},t.push(o));continue}if((o=this.tokenizer.table(e))||(o=this.tokenizer.lheading(e))){e=e.substring(o.raw.length),t.push(o);continue}let r=e;if(this.options.extensions?.startBlock){let t=1/0,i=e.slice(1),o;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(o=e.call({lexer:this},i))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(o=this.tokenizer.paragraph(r))){let a=t.at(-1);i&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(o),i=r.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let i=t.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i=e,o=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(i));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.anyPunctuation.exec(i));)i=i.slice(0,o.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(i));)i=i.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let r=!1,a="";for(;e;){let o;if(r||(a=""),r=!1,this.options.extensions?.inline?.some(i=>!!(o=i.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let i=t.at(-1);"text"===o.type&&i?.type==="text"?(i.raw+=o.raw,i.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,i,a))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let c=e;if(this.options.extensions?.startInline){let t=1/0,i=e.slice(1),o;this.options.extensions.startInline.forEach(e=>{"number"==typeof(o=e.call({lexer:this},i))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(c=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(c)){e=e.substring(o.raw.length),"_"!==o.raw.slice(-1)&&(a=o.raw.slice(-1)),r=!0;let i=t.at(-1);i?.type==="text"?(i.raw+=o.raw,i.text+=o.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},a0=class{options;parser;constructor(e){this.options=e||n5}space(e){return""}code({text:e,lang:t,escaped:i}){let o=(t||"").match(n7.notSpaceStart)?.[0],r=e.replace(n7.endingNewline,"")+`
`;return o?'<pre><code class="language-'+aG(o)+'">'+(i?r:aG(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:aG(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,o="";for(let t=0;t<e.items.length;t++){let i=e.items[t];o+=this.listitem(i)}let r=t?"ol":"ul";return"<"+r+(t&&1!==i?' start="'+i+'"':"")+`>
`+o+"</"+r+`>
`}listitem(e){let t="";if(e.task){let i=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=i+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=i+" "+aG(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):t+=i+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let t=0;t<e.header.length;t++)i+=this.tablecell(e.header[t]);t+=this.tablerow({text:i});let o="";for(let t=0;t<e.rows.length;t++){let r=e.rows[t];i="";for(let e=0;e<r.length;e++)i+=this.tablecell(r[e]);o+=this.tablerow({text:i})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${aG(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let o=this.parser.parseInline(i),r=aK(e);if(null===r)return o;let a='<a href="'+(e=r)+'"';return t&&(a+=' title="'+aG(t)+'"'),a+=">"+o+"</a>"}image({href:e,title:t,text:i,tokens:o}){o&&(i=this.parser.parseInline(o,this.parser.textRenderer));let r=aK(e);if(null===r)return aG(i);e=r;let a=`<img src="${e}" alt="${i}"`;return t&&(a+=` title="${aG(t)}"`),a+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:aG(e.text)}},a1=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},a2=class u{options;renderer;textRenderer;constructor(e){this.options=e||n5,this.options.renderer=this.options.renderer||new a0,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new a1}static parse(e,t){return new u(t).parse(e)}static parseInline(e,t){return new u(t).parseInline(e)}parse(e,t=!0){let i="";for(let o=0;o<e.length;o++){let r=e[o];if(this.options.extensions?.renderers?.[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(r.type)){i+=e||"";continue}}switch(r.type){case"space":i+=this.renderer.space(r);continue;case"hr":i+=this.renderer.hr(r);continue;case"heading":i+=this.renderer.heading(r);continue;case"code":i+=this.renderer.code(r);continue;case"table":i+=this.renderer.table(r);continue;case"blockquote":i+=this.renderer.blockquote(r);continue;case"list":i+=this.renderer.list(r);continue;case"html":i+=this.renderer.html(r);continue;case"def":i+=this.renderer.def(r);continue;case"paragraph":i+=this.renderer.paragraph(r);continue;case"text":{let a=r,c=this.renderer.text(a);for(;o+1<e.length&&"text"===e[o+1].type;)a=e[++o],c+=`
`+this.renderer.text(a);t?i+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):i+=c;continue}default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return i}parseInline(e,t=this.renderer){let i="";for(let o=0;o<e.length;o++){let r=e[o];if(this.options.extensions?.renderers?.[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){i+=e||"";continue}}switch(r.type){case"escape":case"text":i+=t.text(r);break;case"html":i+=t.html(r);break;case"link":i+=t.link(r);break;case"image":i+=t.image(r);break;case"strong":i+=t.strong(r);break;case"em":i+=t.em(r);break;case"codespan":i+=t.codespan(r);break;case"br":i+=t.br(r);break;case"del":i+=t.del(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return i}},a5=class{options;block;constructor(e){this.options=e||n5}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?aQ.lex:aQ.lexInline}provideParser(){return this.block?a2.parse:a2.parseInline}},a3=class{defaults=n2();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=a2;Renderer=a0;TextRenderer=a1;Lexer=aQ;Tokenizer=aJ;Hooks=a5;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let o of e)switch(i=i.concat(t.call(this,o)),o.type){case"table":for(let e of o.header)i=i.concat(this.walkTokens(e.tokens,t));for(let e of o.rows)for(let o of e)i=i.concat(this.walkTokens(o.tokens,t));break;case"list":i=i.concat(this.walkTokens(o.items,t));break;default:{let e=o;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(o=>{let r=e[o].flat(1/0);i=i.concat(this.walkTokens(r,t))}):e.tokens&&(i=i.concat(this.walkTokens(e.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let i=t.renderers[e.name];i?t.renderers[e.name]=function(...t){let o=e.renderer.apply(this,t);return!1===o&&(o=i.apply(this,t)),o}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let i=t[e.level];i?i.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),i.extensions=t),e.renderer){let t=this.defaults.renderer||new a0(this.defaults);for(let i in e.renderer){if(!(i in t))throw Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=e.renderer[i],r=t[i];t[i]=(...e)=>{let i=o.apply(t,e);return!1===i&&(i=r.apply(t,e)),i||""}}i.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new aJ(this.defaults);for(let i in e.tokenizer){if(!(i in t))throw Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=e.tokenizer[i],r=t[i];t[i]=(...e)=>{let i=o.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new a5;for(let i in e.hooks){if(!(i in t))throw Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=e.hooks[i],r=t[i];a5.passThroughHooks.has(i)?t[i]=e=>{if(this.defaults.async&&a5.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await o.call(t,e);return r.call(t,i)})();let a=o.call(t,e);return r.call(t,a)}:t[i]=(...e)=>{if(this.defaults.async)return(async()=>{let i=await o.apply(t,e);return!1===i&&(i=await r.apply(t,e)),i})();let i=o.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,o=e.walkTokens;i.walkTokens=function(e){let i=[];return i.push(o.call(this,e)),t&&(i=i.concat(t.call(this,e))),i}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return aQ.lex(e,t??this.defaults)}parser(e,t){return a2.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let o={...i},r={...this.defaults,...o},a=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===o.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=e),r.async)return(async()=>{let i=r.hooks?await r.hooks.preprocess(t):t,o=await (r.hooks?await r.hooks.provideLexer():e?aQ.lex:aQ.lexInline)(i,r),a=r.hooks?await r.hooks.processAllTokens(o):o;r.walkTokens&&await Promise.all(this.walkTokens(a,r.walkTokens));let c=await (r.hooks?await r.hooks.provideParser():e?a2.parse:a2.parseInline)(a,r);return r.hooks?await r.hooks.postprocess(c):c})().catch(a);try{r.hooks&&(t=r.hooks.preprocess(t));let i=(r.hooks?r.hooks.provideLexer():e?aQ.lex:aQ.lexInline)(t,r);r.hooks&&(i=r.hooks.processAllTokens(i)),r.walkTokens&&this.walkTokens(i,r.walkTokens);let o=(r.hooks?r.hooks.provideParser():e?a2.parse:a2.parseInline)(i,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(e){return a(e)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+aG(i.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(i);throw i}}},a6=new a3;function a7(e,t){return a6.parse(e,t)}a7.options=a7.setOptions=function(e){return a6.setOptions(e),a7.defaults=a6.defaults,n5=a7.defaults,a7},a7.getDefaults=n2,a7.defaults=n5,a7.use=function(...e){return a6.use(...e),a7.defaults=a6.defaults,n5=a7.defaults,a7},a7.walkTokens=function(e,t){return a6.walkTokens(e,t)},a7.parseInline=a6.parseInline,a7.Parser=a2,a7.parser=a2.parse,a7.Renderer=a0,a7.TextRenderer=a1,a7.Lexer=aQ,a7.lexer=aQ.lex,a7.Tokenizer=aJ,a7.Hooks=a5,a7.parse=a7,a7.options,a7.setOptions,a7.use,a7.walkTokens,a7.parseInline,a2.parse,aQ.lex;var a8=Object.defineProperty,a9=Object.getOwnPropertyDescriptor,a4=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?a9(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&a8(t,i,a),a};let le=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact",this.inline=!1}render(){return eC`${this.markdown?n1(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){let t,i,o,r;return this.inline?(h??=new a3({breaks:!1,gfm:!0,renderer:(i=0,o=!1,{image:function({text:e}){return e||""},paragraph:function({tokens:e}){return this.parser.parseInline(e)},list:function(e){o=e.ordered,i="number"==typeof e.start?e.start:1;let t="";for(let i of e.items)t+=r.call(this,i);return t},listitem:r=function(e){let t,r=this.parser.parse(e.tokens,!!e.loose);return e.task?t=e.checked?"☑":"☐":o?(t=`${i}.`,i++):t="•",`${t} ${r.trim()} `},link:function({tokens:e}){return this.parser.parseInline(e)},code:function({text:e}){return`<code>${function(e,t){if(t){if(/[&<>"']/.test(e))return e.replace(/[&<>"']/g,li)}else if(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/.test(e))return e.replace(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,li);return e}(e,!0)}</code>`},br:function(){return" "},html:function(){return""}})}),t=await h.parse(lc(e))):(p??=new a3({breaks:!0,gfm:!0,renderer:{image:function({href:e,title:t,text:i}){let o=[],r=[];return e&&({href:e,dimensions:o}=function(e){let t=[],i=e.split("|").map(e=>e.trim());e=i[0];let o=i[1];if(o){let e=/height=(\d+)/.exec(o),i=/width=(\d+)/.exec(o),r=e?e[1]:"",a=i?i[1]:"",c=isFinite(parseInt(a)),h=isFinite(parseInt(r));c&&t.push(`width="${a}"`),h&&t.push(`height="${r}"`)}return{href:e,dimensions:t}}(e),r.push(`src="${lh(e)}"`)),i&&r.push(`alt="${lh(i)}"`),t&&r.push(`title="${lh(t)}"`),o.length&&(r=r.concat(o)),`<img ${r.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},html:function({text:e}){return e.match(/^(<span[^>]+>)|(<\/\s*span>)$/)?e:""}}}),t=await p.parse(lc(e))),oA(t=function(e){let t,i=[],o=0,r=0;for(;null!==(t=ll.exec(e));){o<(r=t.index||0)&&i.push(e.substring(o,r)),o=(t.index||0)+t[0].length;let[,a,c]=t;i.push(a?`$(${c})`:function(e){let[,t,i]=ls.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${i?` modifier="${i}"`:""}></code-icon>`}({id:c}))}return o<e.length&&i.push(e.substring(o)),i.join("")}(t))}};le.styles=[nv,F`
			:host {
				display: contents;

				--markdown-compact-block-spacing: 8px;
				--markdown-list-spacing: 20px;
			}

			a,
			a code {
				text-decoration: none;
				color: var(--vscode-textLink-foreground);
			}

			a:hover,
			a:hover code {
				color: var(--vscode-textLink-activeForeground);
			}

			a:hover:not(.disabled) {
				cursor: pointer;
			}

			p,
			.code,
			ul,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin-inline: 0;
			}

			:where(:host([density='compact'])) p,
			:where(:host([density='compact'])) .code,
			:where(:host([density='compact'])) ul,
			:where(:host([density='compact'])) h1,
			:where(:host([density='compact'])) h2,
			:where(:host([density='compact'])) h3,
			:where(:host([density='compact'])) h4,
			:where(:host([density='compact'])) h5,
			:where(:host([density='compact'])) h6 {
				margin-block: var(--markdown-compact-block-spacing);
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1.1;
			}

			code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			code code-icon {
				color: inherit;
				font-size: inherit;
				vertical-align: middle;
			}

			p:first-child,
			.code:first-child,
			ul:first-child {
				margin-top: 0;
			}

			p:last-child,
			.code:last-child,
			ul:last-child {
				margin-bottom: 0;
			}

			/* MarkupContent Layout */
			ul {
				padding-left: var(--markdown-list-spacing);
			}
			ol {
				padding-left: var(--markdown-list-spacing);
			}

			li > p {
				margin-bottom: 0;
			}

			li > ul {
				margin-top: 0;
			}
=		`],a4([eB({type:String})],le.prototype,"markdown",2),a4([eB({type:String,reflect:!0})],le.prototype,"density",2),a4([eB({type:Boolean,reflect:!0})],le.prototype,"inline",2),le=a4([eL("gl-markdown")],le);let lt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},li=e=>lt[e],lo="[A-Za-z0-9-]+",lr="~[A-Za-z]+",ls=RegExp(`^(${lo})(${lr})?$`),ln=RegExp(`\\$\\(${lo}(?:${lr})?\\)`,"g"),la=RegExp(`\\\\${ln.source}`,"g"),ll=RegExp(`(\\\\)?\\$\\((${lo}(?:${lr})?)\\)`,"g");function lc(e){return e.replace(la,e=>`\\${e}`)}function lh(e){return e.replace(/"/g,"&quot;")}var ld=Object.defineProperty,lp=Object.getOwnPropertyDescriptor;let lu=class extends lit_element_i{render(){return eC`<slot></slot>`}};lu.styles=F`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,lu=((e,t,i,o)=>{for(var r,a=o>1?void 0:o?lp(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&ld(t,i,a),a})([eL("webview-pane-group")],lu);var lg=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,lm=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lf(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lg(t,i,a),a};let lb=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1,this.reachabilityState="idle"}get isStash(){return this.state?.commit?.stashNumber!=null}get shortSha(){return this.state?.commit?.shortSha??""}get commit(){return this._commit}set commit(e){this._commit=e,this.enrichedPromise=e?.enriched}get enriched(){return this._enriched}get enrichedPromise(){return this._enrichedPromise}set enrichedPromise(e){this._enrichedPromise!==e&&(this._enrichedPromise=e,this._enrichedPromise?.then(e=>this._enriched=e,()=>this._enriched=void 0))}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView()),e.has("state")&&(this.commit=this.state?.commit,e.get("state")?.commit?.sha!==this.state?.commit?.sha&&(this.reachabilityState="idle",this.reachability=void 0))}render(){return this.state?.commit==null?this.renderEmptyContent():eC`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
			</webview-pane-group>
		`}renderEmptyContent(){return eC`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Overview</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button density="compact" data-action="search-commit" tooltip="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderExplainChanges(){if(this.state?.orgSettings.ai!==!1)return eC`
			<gl-action-chip
				label=${this.isUncommitted?"Explain Working Changes":`Explain Changes in this ${this.isStash?"Stash":"Commit"}`}
				icon="sparkle"
				data-action="explain-commit"
				aria-busy="${this.explainBusy?"true":eA}"
				?disabled="${!!this.explainBusy||eA}"
				@click=${this.onExplainChanges}
				@keydown=${this.onExplainChanges}
				><span>explain</span></gl-action-chip
			>
		`}renderCommitMessage(){let e=this.state?.commit;if(null==e)return;let t=this._enriched?.formattedMessage??e.message,i=t.indexOf(to);return eC`
			<div class="section section--message">
				<div class="message-block-row">
					${eU(!this.isStash,()=>eC`
							<gl-commit-author
								name="${e.author.name}"
								url="${e.author.email?`mailto:${e.author.email}`:void 0}"
								.avatarUrl="${e.author.avatar??""}"
								.showAvatar="${this.preferences?.avatars??!0}"
							></gl-commit-author>
						`)}
					${this.renderExplainChanges()}
				</div>
				<div>
					<div class="message-block">
						${eU(-1===i,()=>eC`<p class="message-block__text scrollable" data-region="message">
									<strong>${oA(t)}</strong>
								</p>`,()=>eC`<p class="message-block__text scrollable" data-region="message">
									<strong>${oA(t.substring(0,i))}</strong><br /><span
										>${oA(t.substring(i+3))}</span
									>
								</p>`)}
					</div>
					<div class="message-block-row message-block-row--actions">
						${this.renderAutoLinksChips()}
						${eU(!this.isStash,()=>eC`
								<gl-commit-date
									.date=${e.author.date}
									.dateFormat="${this.preferences?.dateFormat??"absolute"}"
									.dateStyle="${this.preferences?.dateStyle??"relative"}"
									.actionLabel="${e.sha===l9?"Modified":"Committed"}"
								></gl-commit-date>
							`)}
					</div>
					<div class="message-block-row message-block-row--actions">${this.renderReachability()}</div>
				</div>
			</div>
		`}get autolinkState(){if(!this.state?.autolinksEnabled||this.isUncommitted)return;let e=new Map,t=new Map;if(this.state?.commit?.autolinks!=null)for(let i of this.state.commit.autolinks)e.set(i.id,{type:"autolink",value:i}),t.set(i.url,i.id);let i=this._enriched?.autolinkedIssues??this.state?.autolinkedIssues;if(null!=i)for(let o of i){if(null!=o.url){let i=t.get(o.url);null!=i&&e.delete(i)}e.set(o.id,{type:"issue",value:o})}let o=this._enriched?.associatedPullRequest??this.state?.pullRequest;if(null!=o){if(null!=o.url){let i=t.get(o.url);null!=i&&e.delete(i)}e.set(o.id,{type:"pr",value:o})}let r=[],a=[],c=[];for(let t of e.values())switch(t.type){case"autolink":r.push(t.value);break;case"issue":a.push(t.value);break;case"pr":c.push(t.value)}return{autolinks:r,issues:a,prs:c,size:e.size}}renderLearnAboutAutolinks(e=!1){let t=e?eA:eC`<span class="mq-hide-sm">Learn about autolinks</span>`,i=sr("gitlens.showSettingsPage!autolinks",{showOptions:{preserveFocus:!0}}),o=this.state?.hasIntegrationsConnected??!1,r="Configure autolinks to linkify external references, like Jira or Zendesk tickets, in commit messages.";return o||(r=`<a href="${i}">Configure autolinks</a> to linkify external references, like Jira or Zendesk tickets, in commit messages.

<a href="${sr("gitlens.plus.cloudIntegrations.connect",{source:{source:"inspect",detail:{action:"connect"}}})}">Connect an Integration</a> &mdash;`,this.state?.hasAccount||(r+=" sign up and"),r+=" to get access to automatic rich autolinks for services like Jira, GitHub, and more."),eC`<gl-action-chip
			href=${i}
			data-action="autolink-settings"
			icon="info"
			.label=${r}
			overlay=${o?"tooltip":"popover"}
			>${t}</gl-action-chip
		>`}renderAutoLinksChips(){let e=this.autolinkState;if(null==e)return this.renderLearnAboutAutolinks();let{autolinks:t,issues:i,prs:o,size:r}=e;return 0===r?this.renderLearnAboutAutolinks():eC`<div class="message-block-group">
			${this.renderLearnAboutAutolinks(!0)}
			${eU(t.length,()=>t.map(e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),eC`<gl-autolink-chip
						type="autolink"
						name="${t}"
						url="${e.url}"
						identifier="${e.prefix}${e.id}"
					></gl-autolink-chip>`}))}
			${eU(o.length,()=>o.map(e=>eC`<gl-autolink-chip
							type="pr"
							name="${e.title}"
							url="${e.url}"
							identifier="#${e.id}"
							status="${e.state}"
							.date=${e.updatedDate}
							.dateFormat="${this.state.preferences.dateFormat}"
							.dateStyle="${this.state.preferences.dateStyle}"
						></gl-autolink-chip>`))}
			${eU(i.length,()=>i.map(e=>eC`<gl-autolink-chip
							type="issue"
							name="${e.title}"
							url="${e.url}"
							identifier="${e.id}"
							status="${e.state}"
							.date=${e.closed?e.closedDate:e.createdDate}
							.dateFormat="${this.state.preferences.dateFormat}"
							.dateStyle="${this.state.preferences.dateStyle}"
						></gl-autolink-chip>`))}
		</div>`}renderReachability(){if(this.isUncommitted)return eA;if("loading"===this.reachabilityState)return eC`<gl-action-chip icon="loading" label="Loading branches and tags which contain this commit"
				>Loading...</gl-action-chip
			>`;if("error"===this.reachabilityState)return eC`<gl-action-chip
				class="error"
				icon="error"
				label="Failed to load branches and tags. Click to retry."
				overlay="tooltip"
				@click=${()=>this.dispatchEvent(new CustomEvent("refresh-reachability"))}
				><span class="mq-hide-sm">Failed to load</span></gl-action-chip
			>`;if("idle"===this.reachabilityState)return eC`<gl-action-chip
				icon="git-branch"
				label="Show which branches and tags contain this commit"
				overlay="tooltip"
				@click=${()=>this.dispatchEvent(new CustomEvent("load-reachability"))}
				><span class="mq-hide-sm">Show Branches &amp; Tags</span></gl-action-chip
			>`;if(null==this.reachability)return eA;let{refs:e}=this.reachability;if(!e.length)return eC`<gl-action-chip
				class="warning"
				icon="git-branch"
				label="Commit is not on any branch or tag"
				overlay="tooltip"
				><span class="mq-hide-sm">Not on any branch or tag</span></gl-action-chip
			>`;let t=e.filter(e=>"branch"===e.refType),i=e.filter(e=>"tag"===e.refType);return eC`<div class="reachability-summary">
			${this.renderReachabilityChip("branch",t)} ${this.renderReachabilityChip("tag",i)}
		</div>`}renderReachabilityChip(e,t){if(!t.length)return eA;let i="branch"===e?"git-branch":"tag",o=t.length,[r]=t;if(1===o){let e="branch"===r.refType?r.remote?"remote branch":"branch":"tag";return eC`<gl-action-chip
				icon="${i}"
				label="Commit on 1 ${e}: ${r.name}"
				overlay="tooltip"
				class="reachability-range-chip reachability-range-chip--${"branch"===r.refType?r.remote?"remote-branch":"local-branch":"tag"}${r.current?" reachability-range-chip--current":""}"
				>${r.name}</gl-action-chip
			>`}let a=t.at(-1);return eC`<gl-popover placement="bottom" trigger="hover focus click" class="reachability-range-chip-wrapper">
			<gl-action-chip
				slot="anchor"
				class="reachability-range-chip reachability-range-chip--range reachability-range-chip--${"branch"===e?"local-branch":"tag"}"
				><span class="reachability-range-chip__label">
					<code-icon icon="${i}"></code-icon>${r.name}
					<span class="reachability-range-chip__ellipsis">...</span>
					<code-icon icon="${i}"></code-icon>${a.name}
				</span>
				<span class="reachability-range-chip__count">+${o}</span></gl-action-chip
			>
			<div slot="content" class="reachability-popover">
				<div class="reachability-popover__header">
					Commit is on ${o} ${"branch"===e?"branches":"tags"}
				</div>
				<div class="reachability-popover__list scrollable">
					${t.map(t=>eC`<div
								class="reachability-list-item${t.current?" reachability-list-item--current":""}"
							>
								<code-icon
									icon="${"branch"===e?"git-branch":"tag"}"
									class="reachability-list-item__icon"
								></code-icon>
								<span class="reachability-list-item__label">${t.name}</span>
							</div>`)}
				</div>
			</div>
		</gl-popover>`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}renderCommitStats(e){if(e?.files==null)return;if("number"==typeof e.files)return eC`<commit-stats modified="${e.files}" symbol="icons" appearance="pill"></commit-stats>`;let{added:t,deleted:i,changed:o}=e.files;return eC`<commit-stats
			added="${t}"
			modified="${o}"
			removed="${i}"
			symbol="icons"
			appearance="pill"
		></commit-stats>`}getFileActions(e,t){let i=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(i.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||i.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"})),i}getFileContextData(e){if(!this.state?.commit)return;let t=this.state.commit;return ss({webviewItem:null!=t.stashNumber?"gitlens:file+stashed":"gitlens:file+committed",webviewItemValue:{type:"file",path:e.path,repoPath:t.repoPath,sha:t.sha,stashNumber:t.stashNumber,status:e.status}})}};lm([eB({type:Object})],lb.prototype,"state",2),lm([eN()],lb.prototype,"isStash",1),lm([eN()],lb.prototype,"shortSha",1),lm([eN()],lb.prototype,"explainBusy",2),lm([eB({type:Object})],lb.prototype,"explain",2),lm([eB({type:Object})],lb.prototype,"reachability",2),lm([eB({type:String})],lb.prototype,"reachabilityState",2),lm([eN()],lb.prototype,"_enriched",2),lb=lm([eL("gl-commit-details")],lb);var lv={408:(e,t)=>{var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.iterator,w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,x={};function C(e,t,i){this.props=e,this.context=t,this.refs=x,this.updater=i||w}function S(){}function A(e,t,i){this.props=e,this.context=t,this.refs=x,this.updater=i||w}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=C.prototype;var E=A.prototype=new S;E.constructor=A,_(E,C.prototype),E.isPureReactComponent=!0;var P=Array.isArray,T=Object.prototype.hasOwnProperty,O={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,o){var r,a={},c=null,h=null;if(null!=t)for(r in void 0!==t.ref&&(h=t.ref),void 0!==t.key&&(c=""+t.key),t)T.call(t,r)&&!D.hasOwnProperty(r)&&(a[r]=t[r]);var p=arguments.length-2;if(1===p)a.children=o;else if(1<p){for(var g=Array(p),f=0;f<p;f++)g[f]=arguments[f+2];a.children=g}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===a[r]&&(a[r]=p[r]);return{$$typeof:i,type:e,key:c,ref:h,props:a,_owner:O.current}}function F(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var j=/\/+/g;function U(e,t){var i,o;return"object"==typeof e&&null!==e&&null!=e.key?(i=""+e.key,o={"=":"=0",":":"=2"},"$"+i.replace(/[=:]/g,function(e){return o[e]})):t.toString(36)}function q(e,t,r){if(null==e)return e;var a=[],c=0;return function e(t,r,a,c,h){var p,g,f,m=typeof t;"undefined"!==m&&"boolean"!==m||(t=null);var b=!1;if(null===t)b=!0;else switch(m){case"string":case"number":b=!0;break;case"object":switch(t.$$typeof){case i:case o:b=!0}}if(b)return h=h(b=t),t=""===c?"."+U(b,0):c,P(h)?(a="",null!=t&&(a=t.replace(j,"$&/")+"/"),e(h,r,a,"",function(e){return e})):null!=h&&(F(h)&&(p=h,g=a+(!h.key||b&&b.key===h.key?"":(""+h.key).replace(j,"$&/")+"/")+t,h={$$typeof:i,type:p.type,key:g,ref:p.ref,props:p.props,_owner:p._owner}),r.push(h)),1;if(b=0,c=""===c?".":c+":",P(t))for(var w=0;w<t.length;w++){var _=c+U(m=t[w],w);b+=e(m,r,a,_,h)}else if("function"==typeof(_=null===(f=t)||"object"!=typeof f?null:"function"==typeof(f=v&&f[v]||f["@@iterator"])?f:null))for(t=_.call(t),w=0;!(m=t.next()).done;)b+=e(m=m.value,r,a,_=c+U(m,w++),h);else if("object"===m)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return b}(e,a,"","",function(e){return t.call(r,e,c++)}),a}function V(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var W={current:null},G={transition:null};t.Children={map:q,forEach:function(e,t,i){q(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return q(e,function(){t++}),t},toArray:function(e){return q(e,function(e){return e})||[]},only:function(e){if(!F(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=C,t.Fragment=r,t.Profiler=c,t.PureComponent=A,t.StrictMode=a,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:G,ReactCurrentOwner:O},t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_({},e.props),a=e.key,c=e.ref,h=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,h=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(g in t)T.call(t,g)&&!D.hasOwnProperty(g)&&(r[g]=void 0===t[g]&&void 0!==p?p[g]:t[g])}var g=arguments.length-2;if(1===g)r.children=o;else if(1<g){p=Array(g);for(var f=0;f<g;f++)p[f]=arguments[f+2];r.children=p}return{$$typeof:i,type:e.type,key:a,ref:c,props:r,_owner:h}},t.createContext=function(e){return(e={$$typeof:p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},t.createElement=B,t.createFactory=function(e){var t=B.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:g,render:e}},t.isValidElement=F,t.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:V}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=G.transition;G.transition={};try{e()}finally{G.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return W.current.useCallback(e,t)},t.useContext=function(e){return W.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return W.current.useDeferredValue(e)},t.useEffect=function(e,t){return W.current.useEffect(e,t)},t.useId=function(){return W.current.useId()},t.useImperativeHandle=function(e,t,i){return W.current.useImperativeHandle(e,t,i)},t.useInsertionEffect=function(e,t){return W.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return W.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return W.current.useMemo(e,t)},t.useReducer=function(e,t,i){return W.current.useReducer(e,t,i)},t.useRef=function(e){return W.current.useRef(e)},t.useState=function(e){return W.current.useState(e)},t.useSyncExternalStore=function(e,t,i){return W.current.useSyncExternalStore(e,t,i)},t.useTransition=function(){return W.current.useTransition()},t.version="18.2.0"},294:(e,t,i)=>{e.exports=i(408)}},ly={};function lw(e){var t=ly[e];if(void 0!==t)return t.exports;var i=ly[e]={exports:{}};return lv[e](i,i.exports,lw),i.exports}lw.d=(e,t)=>{for(var i in t)lw.o(t,i)&&!lw.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},lw.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l_={};(()=>{let e,t,i,o,r,a;lw.d(l_,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>tu,ud:()=>tb,wt:()=>tv,ne:()=>tw,Ku:()=>tk,FU:()=>tS,XO:()=>tD,Ze:()=>tB,K$:()=>tN,cX:()=>tW,Js:()=>tG,J9:()=>tK,si:()=>tz,sg:()=>tY,hW:()=>tX,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>ek,h4:()=>ex,kZ:()=>e_});let c=globalThis,h=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),g=new WeakMap;let s=class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(h&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=g.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&g.set(t,e))}return e}toString(){return this.cssText}};let f=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,p),m=h?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,i="";for(let t of e.cssRules)i+=t.cssText;return new s("string"==typeof(t=i)?t:t+"",void 0,p)})(e):e,{is:b,defineProperty:v,getOwnPropertyDescriptor:w,getOwnPropertyNames:_,getOwnPropertySymbols:x,getPrototypeOf:C}=Object,S=globalThis,A=S.trustedTypes,E=A?A.emptyScript:"",P=S.reactiveElementPolyfillSupport,T={toAttribute(e,t){switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},O=(e,t)=>!b(e,t),D={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),S.litPropertyMetadata??=new WeakMap;let $=class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=D){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&v(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=w(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let a=o?.call(this);r.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??D}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=C(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[..._(e),...x(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(m(i));else void 0!==e&&t.push(m(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(h)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=c.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:T).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:T;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){if(!((i??=this.constructor.getPropertyOptions(e)).hasChanged??O)(o?r:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$.elementProperties=new Map,$.finalized=new Map,P?.({ReactiveElement:$}),(S.reactiveElementVersions??=[]).push("2.0.0");let B=globalThis,F=B.trustedTypes,j=F?F.createPolicy("lit-html",{createHTML:e=>e}):void 0,U="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,V="?"+q,W=`<${V}>`,G=document,K=()=>G.createComment(""),Z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Y=Array.isArray,X=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,ei=/>/g,eo=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),er=/'/g,es=/"/g,en=/^(?:script|style|textarea|title)$/i,ea=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),el=ea(1),ec=(ea(2),Symbol.for("lit-noChange")),eh=Symbol.for("lit-nothing"),ed=new WeakMap,ep=G.createTreeWalker(G,129);function eu(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==j?j.createHTML(t):t}let Q=class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0,c=e.length-1,h=this.parts,[p,g]=((e,t)=>{let i=e.length-1,o=[],r,a=2===t?"<svg>":"",c=J;for(let t=0;t<i;t++){let i=e[t],h,p,g=-1,f=0;for(;f<i.length&&(c.lastIndex=f,null!==(p=c.exec(i)));)f=c.lastIndex,c===J?"!--"===p[1]?c=ee:void 0!==p[1]?c=ei:void 0!==p[2]?(en.test(p[2])&&(r=RegExp("</"+p[2],"g")),c=eo):void 0!==p[3]&&(c=eo):c===eo?">"===p[0]?(c=r??J,g=-1):void 0===p[1]?g=-2:(g=c.lastIndex-p[2].length,h=p[1],c=void 0===p[3]?eo:'"'===p[3]?es:er):c===es||c===er?c=eo:c===ee||c===ei?c=J:(c=eo,r=void 0);let m=c===eo&&e[t+1].startsWith("/>")?" ":"";a+=c===J?i+W:g>=0?(o.push(h),i.slice(0,g)+U+i.slice(g)+q+m):i+q+(-2===g?t:m)}return[eu(e,a+(e[i]||"<?>")+(2===t?"</svg>":"")),o]})(e,t);if(this.el=Q.createElement(p,i),ep.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ep.nextNode())&&h.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(U)){let t=g[a++],i=o.getAttribute(e).split(q),c=/([.?@])?(.*)/.exec(t);h.push({type:1,index:r,name:c[2],strings:i,ctor:"."===c[1]?it:"?"===c[1]?rt:"@"===c[1]?st:nt}),o.removeAttribute(e)}else e.startsWith(q)&&(h.push({type:6,index:r}),o.removeAttribute(e));if(en.test(o.tagName)){let e=o.textContent.split(q),t=e.length-1;if(t>0){o.textContent=F?F.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],K()),ep.nextNode(),h.push({type:2,index:++r});o.append(e[t],K())}}}else if(8===o.nodeType)if(o.data===V)h.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(q,e+1));)h.push({type:7,index:r}),e+=q.length-1}r++}}static createElement(e,t){let i=G.createElement("template");return i.innerHTML=e,i}};function eg(e,t,i=e,o){if(t===ec)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,a=Z(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=eg(e,r._$AS(e,t.values),r,o)),t}let et=class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??G).importNode(t,!0);ep.currentNode=o;let r=ep.nextNode(),a=0,c=0,h=i[0];for(;void 0!==h;){if(a===h.index){let t;2===h.type?t=new ot(r,r.nextSibling,this,e):1===h.type?t=new h.ctor(r,h.name,h.strings,this,e):6===h.type&&(t=new at(r,this,e)),this._$AV.push(t),h=i[++c]}a!==h?.index&&(r=ep.nextNode(),a++)}return ep.currentNode=G,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let ot=class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=eh,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let i;Z(e=eg(this,e,t))?e===eh||null==e||""===e?(this._$AH!==eh&&this._$AR(),this._$AH=eh):e!==this._$AH&&e!==ec&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Y(i=e)||"function"==typeof i?.[Symbol.iterator]?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==eh&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.$(G.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(eu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new et(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=ed.get(e.strings);return void 0===t&&ed.set(e.strings,t=new Q(e)),t}T(e){Y(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new ot(this.k(K()),this.k(K()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let nt=class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=eh,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=eh}_$AI(e,t=this,i,o){let r=this.strings,a=!1;if(void 0===r)(a=!Z(e=eg(this,e,t,0))||e!==this._$AH&&e!==ec)&&(this._$AH=e);else{let o,c,h=e;for(e=r[0],o=0;o<r.length-1;o++)(c=eg(this,h[i+o],t,o))===ec&&(c=this._$AH[o]),a||=!Z(c)||c!==this._$AH[o],c===eh?e=eh:e!==eh&&(e+=(c??"")+r[o+1]),this._$AH[o]=c}a&&!o&&this.j(e)}j(e){e===eh?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let it=class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===eh?void 0:e}};let rt=class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==eh)}};let st=class st extends nt{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=eg(this,e,t,0)??eh)===ec)return;let i=this._$AH,o=e===eh&&i!==eh||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==eh&&(i===eh||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let at=class at{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eg(this,e)}};let ef=B.litHtmlPolyfillSupport;ef?.(Q,ot),(B.litHtmlVersions??=[]).push("3.0.0");let ct=class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new ot(t.insertBefore(K(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ec}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});let em=globalThis.litElementPolyfillSupport;em?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");let eb={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:O};function ev(e){return(t,i)=>{let o;return"object"==typeof i?((e=eb,t,i)=>{let{kind:o,metadata:r}=i,a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,i):(o=t.hasOwnProperty(i),t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0)}}let ey=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function ew(e,t){return(i,o,r)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:c,set:h}="object"==typeof o?i:r??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return ey(i,o,{get(){if(t){let e=c.call(this);return void 0===e&&(e=a(this),h.call(this,e)),e}return a(this)}})}return ey(i,o,{get(){return a(this)}})}}let gt=class gt extends ct{};let e_=f`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ex=f``,ek=f`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,e$=Math.min,eC=Math.max,eS=Math.round,eA=(Math.floor,e=>({x:e,y:e})),eE={left:"right",right:"left",bottom:"top",top:"bottom"},eP={start:"end",end:"start"};function eR(e,t){return"function"==typeof e?e(t):e}function eI(e){return e.split("-")[0]}function eT(e){return e.split("-")[1]}function ez(e){return"x"===e?"y":"x"}function eM(e){return"y"===e?"height":"width"}function eO(e){return["top","bottom"].includes(eI(e))?"y":"x"}function eL(e){return e.replace(/start|end/g,e=>eP[e])}function eD(e){return e.replace(/left|right|bottom|top/g,e=>eE[e])}function eB(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eN(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function eF(e,t,i){let o,{reference:r,floating:a}=e,c=eO(t),h=ez(eO(t)),p=eM(h),g=eI(t),f="y"===c,m=r.x+r.width/2-a.width/2,b=r.y+r.height/2-a.height/2,v=r[p]/2-a[p]/2;switch(g){case"top":o={x:m,y:r.y-a.height};break;case"bottom":o={x:m,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:b};break;case"left":o={x:r.x-a.width,y:b};break;default:o={x:r.x,y:r.y}}switch(eT(t)){case"start":o[h]-=v*(i&&f?-1:1);break;case"end":o[h]+=v*(i&&f?-1:1)}return o}async function ej(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:a,rects:c,elements:h,strategy:p}=e,{boundary:g="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:b=!1,padding:v=0}=eR(t,e),w=eB(v),_=h[b?"floating"===m?"reference":"floating":m],x=eN(await a.getClippingRect({element:null==(i=await (null==a.isElement?void 0:a.isElement(_)))||i?_:_.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:g,rootBoundary:f,strategy:p})),C="floating"===m?{...c.floating,x:o,y:r}:c.reference,S=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),A=await (null==a.isElement?void 0:a.isElement(S))&&await (null==a.getScale?void 0:a.getScale(S))||{x:1,y:1},E=eN(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:C,offsetParent:S,strategy:p}):C);return{top:(x.top-E.top+w.top)/A.y,bottom:(E.bottom-x.bottom+w.bottom)/A.y,left:(x.left-E.left+w.left)/A.x,right:(E.right-x.right+w.right)/A.x}}function eU(e){return eV(e)?(e.nodeName||"").toLowerCase():"#document"}function eH(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function eq(e){var t;return null==(t=(eV(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eV(e){return e instanceof Node||e instanceof eH(e).Node}function eW(e){return e instanceof Element||e instanceof eH(e).Element}function eG(e){return e instanceof HTMLElement||e instanceof eH(e).HTMLElement}function eK(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eH(e).ShadowRoot)}function eZ(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=eQ(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(r)}function eY(e){let t=eX(),i=eQ(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some(e=>(i.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(i.contain||"").includes(e))}function eX(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eJ(e){return["html","body","#document"].includes(eU(e))}function eQ(e){return eH(e).getComputedStyle(e)}function e0(e){return eW(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function e1(e){if("html"===eU(e))return e;let t=e.assignedSlot||e.parentNode||eK(e)&&e.host||eq(e);return eK(t)?t.host:t}function e2(e){let t=eQ(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=eG(e),a=r?e.offsetWidth:i,c=r?e.offsetHeight:o,h=eS(i)!==a||eS(o)!==c;return h&&(i=a,o=c),{width:i,height:o,$:h}}function e5(e){return eW(e)?e:e.contextElement}function e3(e){let t=e5(e);if(!eG(t))return eA(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:a}=e2(t),c=(a?eS(i.width):i.width)/o,h=(a?eS(i.height):i.height)/r;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let e6=eA(0);function e7(e){let t=eH(e);return eX()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:e6}function e8(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let a=e.getBoundingClientRect(),c=e5(e),h=eA(1);t&&(o?eW(o)&&(h=e3(o)):h=e3(e));let p=(void 0===(r=i)&&(r=!1),!(!o||r&&o!==eH(c))&&r)?e7(c):eA(0),g=(a.left+p.x)/h.x,f=(a.top+p.y)/h.y,m=a.width/h.x,b=a.height/h.y;if(c){let e=eH(c),t=o&&eW(o)?eH(o):o,i=e.frameElement;for(;i&&o&&t!==e;){let e=e3(i),t=i.getBoundingClientRect(),o=eQ(i),r=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;g*=e.x,f*=e.y,m*=e.x,b*=e.y,g+=r,f+=a,i=eH(i).frameElement}}return eN({width:m,height:b,x:g,y:f})}function e9(e){return e8(eq(e)).left+e0(e).scrollLeft}function e4(e,t,i){var o;let r;if("viewport"===t)r=function(e,t){let i=eH(e),o=eq(e),r=i.visualViewport,a=o.clientWidth,c=o.clientHeight,h=0,p=0;if(r){a=r.width,c=r.height;let e=eX();(!e||e&&"fixed"===t)&&(h=r.offsetLeft,p=r.offsetTop)}return{width:a,height:c,x:h,y:p}}(e,i);else if("document"===t){let t,i,a,c,h,p,g;o=eq(e),t=eq(o),i=e0(o),a=o.ownerDocument.body,c=eC(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),h=eC(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight),p=-i.scrollLeft+e9(o),g=-i.scrollTop,"rtl"===eQ(a).direction&&(p+=eC(t.clientWidth,a.clientWidth)-c),r={width:c,height:h,x:p,y:g}}else if(eW(t)){let e,o,a,c;o=(e=e8(t,!0,"fixed"===i)).top+t.clientTop,a=e.left+t.clientLeft,c=eG(t)?e3(t):eA(1),r={width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:a*c.x,y:o*c.y}}else{let i=e7(e);r={...t,x:t.x-i.x,y:t.y-i.y}}return eN(r)}function te(e,t){return eG(e)&&"fixed"!==eQ(e).position?t?t(e):e.offsetParent:null}function tt(e,t){let i=eH(e);if(!eG(e))return i;let o=te(e,t);for(;o&&["table","td","th"].includes(eU(o))&&"static"===eQ(o).position;)o=te(o,t);return o&&("html"===eU(o)||"body"===eU(o)&&"static"===eQ(o).position&&!eY(o))?i:o||function(e){let t=e1(e);for(;eG(t)&&!eJ(t);){if(eY(t))return t;t=e1(t)}return null}(e)||i}let ti={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:i,strategy:o}=e,r=eG(i),a=eq(i);if(i===a)return t;let c={scrollLeft:0,scrollTop:0},h=eA(1),p=eA(0);if((r||!r&&"fixed"!==o)&&(("body"!==eU(i)||eZ(a))&&(c=e0(i)),eG(i))){let e=e8(i);h=e3(i),p.x=e.x+i.clientLeft,p.y=e.y+i.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-c.scrollLeft*h.x+p.x,y:t.y*h.y-c.scrollTop*h.y+p.y}},getDocumentElement:eq,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,a=[..."clippingAncestors"===i?function(e,t){let i=t.get(e);if(i)return i;let o=(function e(t,i,o){var r;void 0===i&&(i=[]),void 0===o&&(o=!0);let a=function e(t){let i=e1(t);return eJ(i)?t.ownerDocument?t.ownerDocument.body:t.body:eG(i)&&eZ(i)?i:e(i)}(t),c=a===(null==(r=t.ownerDocument)?void 0:r.body),h=eH(a);return c?i.concat(h,h.visualViewport||[],eZ(a)?a:[],h.frameElement&&o?e(h.frameElement):[]):i.concat(a,e(a,[],o))})(e,[],!1).filter(e=>eW(e)&&"body"!==eU(e)),r=null,a="fixed"===eQ(e).position,c=a?e1(e):e;for(;eW(c)&&!eJ(c);){let t=eQ(c),i=eY(c);i||"fixed"!==t.position||(r=null),(a?!i&&!r:!i&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||eZ(c)&&!i&&function e(t,i){let o=e1(t);return!(o===i||!eW(o)||eJ(o))&&("fixed"===eQ(o).position||e(o,i))}(e,c))?o=o.filter(e=>e!==c):r=t,c=e1(c)}return t.set(e,o),o}(t,this._c):[].concat(i),o],c=a[0],h=a.reduce((e,i)=>{let o=e4(t,i,r);return e.top=eC(o.top,e.top),e.right=e$(o.right,e.right),e.bottom=e$(o.bottom,e.bottom),e.left=eC(o.left,e.left),e},e4(t,c,r));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:tt,getElementRects:async function(e){let{reference:t,floating:i,strategy:o}=e,r=this.getOffsetParent||tt,a=this.getDimensions;return{reference:function(e,t,i){let o=eG(t),r=eq(t),a="fixed"===i,c=e8(e,!0,a,t),h={scrollLeft:0,scrollTop:0},p=eA(0);if(o||!o&&!a)if(("body"!==eU(t)||eZ(r))&&(h=e0(t)),o){let e=e8(t,!0,a,t);p.x=e.x+t.clientLeft,p.y=e.y+t.clientTop}else r&&(p.x=e9(r));return{x:c.left+h.scrollLeft-p.x,y:c.top+h.scrollTop-p.y,width:c.width,height:c.height}}(t,await r(i),o),floating:{x:0,y:0,...await a(i)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return e2(e)},getScale:e3,isElement:eW,isRTL:function(e){return"rtl"===eQ(e).direction}},to=f`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var tr,ts=function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c};let xe=class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ek,e_,to]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t,i,o,r;let a,c,h,p,g=[{name:"offset",options:6,async fn(e){let{x:t,y:i}=e,o=await async function(e,t){let{placement:i,platform:o,elements:r}=e,a=await (null==o.isRTL?void 0:o.isRTL(r.floating)),c=eI(i),h=eT(i),p="y"===eO(i),g=["left","top"].includes(c)?-1:1,f=a&&p?-1:1,m=eR(6,e),{mainAxis:b,crossAxis:v,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return h&&"number"==typeof w&&(v="end"===h?-1*w:w),p?{x:v*f,y:b*g}:{x:b*g,y:v*f}}(e,6);return{x:t+o.x,y:i+o.y,data:o}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,o,r,a,c,h;let p,g,f,{placement:m,middlewareData:b,rects:v,initialPlacement:w,platform:_,elements:x}=e,{mainAxis:C=!0,crossAxis:S=!0,fallbackPlacements:A,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:T=!0,...O}=eR(t,e);if(null!=(i=b.arrow)&&i.alignmentOffset)return{};let D=eI(m),B=eI(w)===w,F=await (null==_.isRTL?void 0:_.isRTL(x.floating)),j=A||(B||!T?[eD(w)]:(p=eD(w),[eL(w),p,eL(p)]));A||"none"===P||j.push(...(g=eT(w),f=function(e,t,i){let o=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":return i?t?r:o:t?o:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(eI(w),"start"===P,F),g&&(f=f.map(e=>e+"-"+g),T&&(f=f.concat(f.map(eL)))),f));let U=[w,...j],q=await ej(e,O),V=[],W=(null==(o=b.flip)?void 0:o.overflows)||[];if(C&&V.push(q[D]),S){let e,t,i,o,r=(void 0===(h=F)&&(h=!1),e=eT(m),i=eM(t=ez(eO(m))),o="x"===t?e===(h?"end":"start")?"right":"left":"start"===e?"bottom":"top",v.reference[i]>v.floating[i]&&(o=eD(o)),[o,eD(o)]);V.push(q[r[0]],q[r[1]])}if(W=[...W,{placement:m,overflows:V}],!V.every(e=>e<=0)){let e=((null==(r=b.flip)?void 0:r.index)||0)+1,t=U[e];if(t)return{data:{index:e,overflows:W},reset:{placement:t}};let i=null==(a=W.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!i)switch(E){case"bestFit":{let e=null==(c=W.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:c[0];e&&(i=e);break}case"initialPlacement":i=w}if(m!==i)return{reset:{placement:i}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:i,y:o,placement:r}=t,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...p}=eR(e,t),g={x:i,y:o},f=await ej(t,p),m=eO(eI(r)),b=ez(m),v=g[b],w=g[m];if(a){let e="y"===b?"bottom":"right";v=eC(v+f["y"===b?"top":"left"],e$(v,v-f[e]))}if(c){let e="y"===m?"bottom":"right";w=eC(w+f["y"===m?"top":"left"],e$(w,w-f[e]))}let _=h.fn({...t,[b]:v,[m]:w});return{..._,data:{x:_.x-i,y:_.y-o}}}}];this.arrowEl&&g.push({name:"arrow",options:a={element:this.arrowEl},async fn(e){let{x:t,y:i,placement:o,rects:r,platform:c,elements:h,middlewareData:p}=e,{element:g,padding:f=0}=eR(a,e)||{};if(null==g)return{};let m=eB(f),b={x:t,y:i},v=ez(eO(o)),w=eM(v),_=await c.getDimensions(g),x="y"===v,C=x?"clientHeight":"clientWidth",S=r.reference[w]+r.reference[v]-b[v]-r.floating[w],A=b[v]-r.reference[v],E=await (null==c.getOffsetParent?void 0:c.getOffsetParent(g)),P=E?E[C]:0;P&&await (null==c.isElement?void 0:c.isElement(E))||(P=h.floating[C]||r.floating[w]);let T=P/2-_[w]/2-1,O=e$(m[x?"top":"left"],T),D=e$(m[x?"bottom":"right"],T),B=P-_[w]-D,F=P/2-_[w]/2+(S/2-A/2),j=eC(O,e$(F,B)),U=!p.arrow&&null!=eT(o)&&F!=j&&r.reference[w]/2-(F<O?O:D)-_[w]/2<0,q=U?F<O?F-O:F-B:0;return{[v]:b[v]+q,data:{[v]:j,centerOffset:F-j-q,...U&&{alignmentOffset:q}},reset:U}}}),await (i=this.triggerEl,o=this.popoverEl,r={middleware:g,placement:this.placement},c=new Map,p={...(h={platform:ti,...r}).platform,_c:c},(async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:c}=i,h=a.filter(Boolean),p=await (null==c.isRTL?void 0:c.isRTL(t)),g=await c.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:m}=eF(g,o,p),b=o,v={},w=0;for(let i=0;i<h.length;i++){let{name:a,fn:_}=h[i],{x:x,y:C,data:S,reset:A}=await _({x:f,y:m,initialPlacement:o,placement:b,strategy:r,middlewareData:v,rects:g,platform:c,elements:{reference:e,floating:t}});f=null!=x?x:f,m=null!=C?C:m,v={...v,[a]:{...v[a],...S}},A&&w<=50&&(w++,"object"==typeof A&&(A.placement&&(b=A.placement),A.rects&&(g=!0===A.rects?await c.getElementRects({reference:e,floating:t,strategy:r}):A.rects),{x:f,y:m}=eF(g,b,p)),i=-1)}return{x:f,y:m,placement:b,strategy:r,middlewareData:v}})(i,o,{...h,platform:p})).then(({x:e,y:t,placement:i,middlewareData:o})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=o.arrow?.x,t=o.arrow?.y,r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[r]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?el`<div part="arrow" class="arrow"></div>`:""}render(){return el`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}};ts([ev({type:Boolean})],xe.prototype,"arrow",void 0),ts([ev({type:Boolean})],xe.prototype,"hover",void 0),ts([ev()],xe.prototype,"placement",void 0),ts([ev({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),ts([ev({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),ts([ew('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),ts([ew(".popover")],xe.prototype,"popoverEl",void 0),ts([ew(".arrow")],xe.prototype,"arrowEl",void 0),ts([ev({...void 0,state:!0,attribute:!1})],xe.prototype,"open",void 0);let tn=f`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;let $e=class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ek,e_,tn]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return el`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}};!function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);a>3&&c&&Object.defineProperty(t,i,c)}([ev({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);let ta=f`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;let Se=class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=ta}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return el`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}};!function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);a>3&&c&&Object.defineProperty(t,i,c)}([ev({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);let tl=new Set(["children","localName","ref","style","className"]),tc=new WeakMap,th=(e,t,i,o,r)=>{let a,c,h=r?.[t];void 0===h||i===o?(e[t]=i,null==i&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(a=tc.get(e))&&tc.set(e,a=new Map),c=a.get(h),void 0!==i?void 0===c?(a.set(h,c={handleEvent:i}),e.addEventListener(h,c)):c.handleEvent=i:void 0!==c&&(a.delete(h),e.removeEventListener(h,c)))},td=({react:e,tagName:t,elementClass:i,events:o,displayName:r})=>{let a=new Set(Object.keys(o??{})),c=e.forwardRef((r,c)=>{let h=e.useRef(null),p=e.useRef(null),g={},f={};for(let[e,t]of Object.entries(r))tl.has(e)?g["className"===e?"class":e]=t:a.has(e)||e in i.prototype?f[e]=t:g[e]=t;return e.useLayoutEffect(()=>{if(null!==p.current){for(let e in f)th(p.current,e,r[e],h.current?h.current[e]:void 0,o);h.current=r}}),e.useLayoutEffect(()=>{p.current?.removeAttribute("defer-hydration")},[]),g.suppressHydrationWarning=!0,e.createElement(t,{...g,ref:e=>{p.current=e,"function"==typeof c?c(e):null!==c&&(c.current=e)}})});return c.displayName=r??i.name,c};var tp=lw(294);let tu=td({react:tp,tagName:Se.elementName,elementClass:Se}),tg=f`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,tf=f`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var tm=function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c};let He=class He extends gt{static{this.styles=[ek,tg]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?el`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:el`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}};tm([ev()],He.prototype,"src",void 0),tm([ev()],He.prototype,"indicator",void 0);let Le=class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ek,tf]}render(){return el`<slot class="avatar-group" part="base"></slot>`}};let tb=td({react:tp,tagName:He.elementName,elementClass:He}),tv=td({react:tp,tagName:Le.elementName,elementClass:Le}),ty=f`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;let Be=class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=ty}static{this.elementName="gk-badge"}render(){return el`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}};!function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);a>3&&c&&Object.defineProperty(t,i,c)}([ev()],Be.prototype,"variant",void 0);let tw=td({react:tp,tagName:Be.elementName,elementClass:Be}),t_=f`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tx=function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c};let Ge=class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=t_}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return el`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}};tx([ev({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),tx([ev({reflect:!0})],Ge.prototype,"type",void 0),tx([ev()],Ge.prototype,"variant",void 0);let tk=td({react:tp,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),t$=f`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tC=function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c};let Je=class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ek,e_,t$]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return el`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>el`<span class="complexity-indicator__box"></span>`)}</div>`}};tC([ev({type:Number})],Je.prototype,"level",void 0),tC([ev()],Je.prototype,"label",void 0);let tS=td({react:tp,tagName:Je.elementName,elementClass:Je}),tA=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tE=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tP=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tR=new Map,tI=["th","st","nd","rd"];var tT=function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c};let po=class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ek]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(r,a){let c=("number"==typeof r?r:r.getTime())-(new Date).getTime();for(let[r,h,p,g]of tP){let f=Math.abs(c);if(f>=h||1e3===h)return a?(null==e&&(e=null!=o?o.resolvedOptions().locale:null!=i?i.resolvedOptions().locale:(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(f/p)}${g}`:(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),o.format(Math.round(c/p),r))):(null==i&&(i=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),i.format(Math.round(c/p),r))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return el`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,i,o,r=!0){let a=`${(void 0)??""}:${i=i??void 0}`,c=tR.get(a);if(null==c){let e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=tE.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}let i={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(tA))if(null!=t)for(let e in t){let o=t[e];if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}}return i}(i);c=new Intl.DateTimeFormat(t,e),r&&tR.set(a,c)}if(null==i||tE.test(i))return c.format(e);let h=c.formatToParts(e);return i.replace(tA,(i,o,a,c,p,g,f,m,b,v,w,_,x,C,S)=>{if(null!=o)return o.substring(1,o.length-1);for(let i in S){let o=S[i];if(null==o)continue;let a=h.find(e=>e.type===i);if("Do"===o&&"day"===a?.type)return function(e){let t=e%100;return`${e}${tI[(t-20)%10]??tI[t]??tI[0]}`}(Number(a.value));if("a"===o&&"dayPeriod"===a?.type){let i=(function(e){let i=`${(void 0)??""}:time:${e}`,o=tR.get(i);null==o&&(o=new Intl.DateTimeFormat(t,{localeMatcher:"best fit",timeStyle:e}),r&&tR.set(i,o));return o})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(i??a)?.value??""}`}return a?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}};tT([ev({converter:(r=navigator.language,{toAttribute:e=>e.toLocaleDateString(r),fromAttribute:e=>new Date(e)}),reflect:!0})],po.prototype,"date",void 0),tT([ev()],po.prototype,"format",void 0);let tz=td({react:tp,tagName:po.elementName,elementClass:po}),tM=f`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tO=f`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tL=f`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;let yo=class yo extends gt{static{this.styles=[ek,tL]}static{this.elementName="gk-focus-item"}render(){return el`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}};let vo=class vo extends gt{static{this.styles=[ek,tO]}static{this.elementName="gk-focus-row"}render(){return el`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}};let bo=class bo extends gt{static{this.styles=[ek,tO,tL,tM]}static{this.elementName="gk-focus-container"}render(){return el`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}};let tD=td({react:tp,tagName:yo.elementName,elementClass:yo}),tB=td({react:tp,tagName:vo.elementName,elementClass:vo}),tN=td({react:tp,tagName:bo.elementName,elementClass:bo});let $o=class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let tF=(a=class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let i in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.st?.has(i)&&this.it.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.it)e in t||(i.remove(e),this.it.delete(e));for(let e in t){let o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return ec}},(...e)=>({_$litDirective$:a,values:e})),tj=f`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var tU=function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c};let Ro=class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ek,e_,tj]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return el`<div class="field"><label class="${tF({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${tF({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${this.autocomplete??eh}" autocorrect="${this.autocorrect??eh}" class="input" ?disabled="${this.disabled}" id="input" name="${this.name??eh}" part="input" placeholder="${this.placeholder??eh}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}};tU([ev()],Ro.prototype,"autocomplete",void 0),tU([ev()],Ro.prototype,"autocorrect",void 0),tU([ev({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),tU([ev()],Ro.prototype,"label",void 0),tU([ev({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),tU([ev()],Ro.prototype,"name",void 0),tU([ev()],Ro.prototype,"placeholder",void 0),tU([ev({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),tU([ev({reflect:!0})],Ro.prototype,"type",void 0),tU([ev()],Ro.prototype,"value",void 0);let tH=f`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,tq=f`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,tV=f`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;let Mo=class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ek,tH]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let i=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(i)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),i=t.length,o=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?o=(o-1+i)%i:"ArrowDown"===e.key?o=(o+1)%i:"Home"===e.key?o=0:"End"===e.key&&(o=i-1),this._setCurrentItem(t[o]),t[o].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return el`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}};!function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);a>3&&c&&Object.defineProperty(t,i,c)}([(tr={flatten:!0},(e,t)=>{let{slot:i,selector:o}=tr??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ey(e,t,{get(){let e=this.renderRoot?.querySelector(r),t=e?.assignedElements(tr)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],Mo.prototype,"slotChildren",void 0);let Do=class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ek,tq]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return el`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}};!function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);a>3&&c&&Object.defineProperty(t,i,c)}([ev({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);let Ho=class Ho extends gt{static{this.styles=[ek,tV]}static{this.elementName="gk-menu-label"}render(){return el`<slot class="menu-label" part="base"></slot>`}};let tW=td({react:tp,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),tG=td({react:tp,tagName:Do.elementName,elementClass:Do}),tK=td({react:tp,tagName:Ho.elementName,elementClass:Ho}),tZ=f`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;let Bo=class Bo extends gt{static{this.styles=[ek,tZ]}static{this.elementName="gk-tag"}render(){return el`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}};!function(e,t,i,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(c=(a<3?r(c):a>3?r(t,i,c):r(t,i))||c);a>3&&c&&Object.defineProperty(t,i,c)}([ev()],Bo.prototype,"variant",void 0);let tY=td({react:tp,tagName:Bo.elementName,elementClass:Bo}),tX=td({react:tp,tagName:$e.elementName,elementClass:$e})})(),l_.Tn;var lx=l_.qE,lk=(l_.HE,l_.Ct,l_.zx),l$=(l_.M1,l_.sX,l_.D0,l_.fs,l_.Tw,l_.ud,l_.wt,l_.ne,l_.Ku,l_.FU,l_.XO,l_.Ze,l_.K$,l_.cX,l_.Js,l_.J9,l_.si,l_.sg,l_.hW,l_.II,l_.v2),lC=l_.sN,lS=(l_.Lb,l_.J2),lA=(l_.$$,l_.Vp,l_.u,l_.fW);l_.WV,l_.h4,l_.kZ;let lE="0000000000000000000000000000000000000000";var lP=Object.defineProperty,lR=Object.getOwnPropertyDescriptor,lI=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lR(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lP(t,i,a),a};let lT=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return eC`<div class="group"><slot></slot></div>`}};lT.styles=[sh,F`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],lI([eB({type:Boolean})],lT.prototype,"editor",2),lI([eB({reflect:!0})],lT.prototype,"layout",2),lI([eB({reflect:!0})],lT.prototype,"grouping",2),lT=lI([eL("button-container")],lT);let lz=F`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}

	.button-group {
		display: inline-flex;
		gap: 0.1rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) gl-button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.button-group > *:not(:last-child),
	.button-group > *:not(:last-child) gl-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;var lM=Object.defineProperty,lO=Object.getOwnPropertyDescriptor,lL=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lO(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lM(t,i,a),a};let lD=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return eC`<div class="skeleton" style=${e}></div>`}};lD.styles=F`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,lL([eB({type:Number})],lD.prototype,"lines",2),lD=lL([eL("skeleton-loader")],lD);let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return eC`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return eA;let t="tree",i="list-tree",o="View as Tree";switch(e){case"auto":t="list",i="gl-list-auto",o="View as List";break;case"list":t="tree",i="list-flat",o="View as Tree";break;case"tree":t="auto",i="list-tree",o="View as Auto"}return eC`<action-item data-switch-value="${t}" label="${o}" icon="${i}"></action-item>`}renderTreeView(e,t="none"){return eC`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,i=!1,o=2){let r=[];if(t){let t=sn(e,e=>e.path.split("/"),(...e)=>e.join("/"),i);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:o});r.push(t)}}else for(let t of e){let e=this.fileToTreeModel(t,{level:o,branch:!1},!0);r.push(e)}return r}walkFileTree(e,t={level:1}){let i;if(void 0===t.level&&(t.level=1),i=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let o=[];for(let i of e.children.values()){let e=this.walkFileTree(i,{...t,level:t.level+1});o.push(e)}o.length>0&&(i.branch=!0,i.children=o)}return i}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,i){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,i,o){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"gl-repository",label:e,description:o,context:[t],actions:this.getRepoActions(e,t,i),...i}}getFileActions(e,t){return[]}fileToTreeModel(e,t,i=!1,o="/"){let r=e.path.lastIndexOf(o),a=-1!==r?e.path.substring(r+1):e.path,c=i&&-1!==r?e.path.substring(0,r):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===i?c:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}};var lB=Object.defineProperty,lN=Object.getOwnPropertyDescriptor,lF=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lN(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lB(t,i,a),a};let lj=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=tF(this.onTitleInput,500),this.onDebounceDescriptionInput=tF(this.onDescriptionInput,500),lA(lx,lk,l$,lC,lS)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(e=>e?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,e])=>!1!==e.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return function(e,t){if(null==e)return 0;let i=0;for(let o of e)i+=t(o);return i}(this.createChanges,e=>e.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(e){let t=e.pendingRole,i=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=i.get(t);return eC`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${o} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${function*(e,t){if(void 0!==e){let i=0;for(let o of e)yield t(o,i++)}}(i,([i,o])=>eC`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,i)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===i?"is-active":""}"
										></code-icon>
										${o}
									</gk-menu-item>`)}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return eC`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${sZ(this.state.create.userSelections,e=>e.member.id,e=>this.renderUserSelection(e))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}let t=this.review?"Code Suggestion":"Cloud Patch",i=this.review?"Code Suggestions":"Cloud Patches";return eC`
			<div class="section section--action">
				${eU(this.state?.create?.creationError!=null,()=>eC` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${eU(!1===this.review,()=>eC`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`)}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${eU(this.state?.orgSettings.ai===!0&&this.state?.preferences.aiEnabled===!0,()=>eC`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`)}
				</div>

				${eU(this.generate?.error!=null,()=>eC`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`)}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${eU(!0===this.review,()=>eC`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${eU(this.state?.orgSettings.byob===!1,()=>eC`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${eK.cloudPatches}"
								title="Learn more about ${i}"
								aria-label="Learn more about ${i}"
								>${i}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>eC`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${eK.cloudPatches}"
								title="Learn more about ${i}"
								aria-label="Learn more about ${i}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return eC`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return eC`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${eU(null!=this.validityMessage,()=>eC`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${eU(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;let[t,i]=e.detail.context,o=e.detail.checked;"unstaged"===i&&(o=!!e.detail.checked||"staged");let r=this.getChangeForRepo(t);null==r||r.checked!==o&&(r.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:o}))}onTreeItemSelected(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);let e=[],t=this.createChanges.length>1,i=this.isTree(this.filesModified??0),o=this.isCompact;if(t)for(let t of this.createChanges){let r=this.getTreeForChange(t,!0,i,o);null!=r&&e.push(...r)}else{let t=this.createChanges[0],r=this.getTreeForChange(t,!1,i,o);null!=r&&e.push(...r)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,i=!1,o=!0){if(null==e.files||0===e.files.length)return;let r=[];if("wip"===e.type){let a=[],c=[];for(let t of e.files)t.staged?a.push(t):c.push(t);0===a.length||0===c.length?r.push(...this.renderFiles(e.files,i,o,t?2:1)):(c.length&&r.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(c,i,o,t?3:2)}),a.length&&r.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,i,o,t?3:2)}))}else r.push(...this.renderFiles(e.files,i,o));if(!t)return r;let a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=r,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let e=this.selectedChanges.reduce((e,[t,i])=>(e[t]=i,e),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,i){this.emit("gl-patch-create-update-selection",{selection:t,role:i});let o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){let i={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[i]:!0===e.staged?[i,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[i,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,i){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};lF([eB({type:Object})],lj.prototype,"state",2),lF([eB({type:Boolean})],lj.prototype,"review",2),lF([eB({type:Object})],lj.prototype,"generate",2),lF([eN()],lj.prototype,"generateBusy",2),lF([eN()],lj.prototype,"creationBusy",2),lF([ej("#title")],lj.prototype,"titleInput",2),lF([ej("#desc")],lj.prototype,"descInput",2),lF([ej("#generate-ai")],lj.prototype,"generateAiButton",2),lF([eN()],lj.prototype,"validityMessage",2),lj=lF([eL("gl-patch-create")],lj);var lU=Object.defineProperty,lH=Object.getOwnPropertyDescriptor,lq=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lH(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lU(t,i,a),a};let lV=class extends GlElement{get patchCreateState(){return{preferences:this.preferences,orgSettings:this.orgSettings,create:this.createState}}render(){return eC`<gl-patch-create
			.state=${this.patchCreateState}
			.generate=${this.generate}
			review
			@gl-patch-file-compare-working=${e=>{}}
			@gl-patch-create-update-metadata=${e=>{}}
		></gl-patch-create>`}};lV.styles=[lz,F`
			:host {
				flex: 1;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}

			gl-patch-create {
				height: 100%;
				display: block;
			}

			.pane-groups {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
			.pane-groups__group {
				min-height: 0;
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			.pane-groups__group webview-pane {
				flex: none;
			}
			.pane-groups__group webview-pane[expanded] {
				min-height: 0;
				flex: 1;
			}

			.pane-groups__group-fixed {
				flex: none;
			}
			.pane-groups__group-fixed webview-pane::part(content) {
				overflow: visible;
			}

			.section {
				padding: 0 var(--gitlens-scrollbar-gutter-width) 1.5rem var(--gitlens-gutter-width);
			}
			.section > :first-child {
				margin-top: 0;
			}
			.section > :last-child {
				margin-bottom: 0;
			}

			.section--action {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
			.section--action > :first-child {
				padding-top: 0;
			}

			/* TODO: these form styles should be moved to a common location */
			.message-input {
				padding-top: 0.8rem;
			}

			.message-input__control {
				flex: 1;
				border: 1px solid var(--vscode-input-border);
				background: var(--vscode-input-background);
				padding: 0.5rem;
				font-size: 1.3rem;
				line-height: 1.4;
				width: 100%;
				border-radius: 0.2rem;
				color: var(--vscode-input-foreground);
				font-family: inherit;
			}

			.message-input__control::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.message-input__control:invalid {
				border-color: var(--vscode-inputValidation-errorBorder);
				background-color: var(--vscode-inputValidation-errorBackground);
			}

			.message-input__control:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.message-input__control:disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			.message-input__control--text {
				overflow: hidden;
				white-space: nowrap;
				opacity: 0.7;
			}

			.message-input__action {
				flex: none;
			}

			.message-input__select {
				flex: 1;
				position: relative;
				display: flex;
				align-items: stretch;
			}
			.message-input__select-icon {
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}
			.message-input__select-caret {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}

			.message-input__select .message-input__control {
				box-sizing: border-box;
				appearance: none;
				padding-left: 2.4rem;
				padding-right: 2.4rem;
			}

			.message-input__menu {
				position: absolute;
				top: 0.8rem;
				right: 0;
			}

			.section--action > :first-child .message-input__menu {
				top: 0;
			}

			.message-input--group {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				gap: 0.6rem;
			}

			.message-input--with-menu {
				position: relative;
			}

			textarea.message-input__control {
				resize: vertical;
				min-height: 4rem;
				max-height: 40rem;
			}

			.user-selection-container {
				max-height: (2.4rem * 4);
				overflow: auto;
			}

			.user-selection {
				--gk-avatar-size: 2rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				height: 2.4rem;
			}
			.user-selection__avatar {
				flex: none;
			}

			.user-selection__info {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
			}

			.user-selection__name {
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-selection__actions {
				flex: none;
				color: var(--gk-button-ghost-color);
			}
			.user-selection__actions gk-button::part(base) {
				padding-right: 0;
				padding-block: 0.4rem;
			}

			.user-selection__actions gk-button code-icon {
				pointer-events: none;
			}

			.user-selection__check:not(.is-active) {
				opacity: 0;
			}

			.alert {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.8rem 1.2rem;
				line-height: 1.2;
				background-color: var(--color-alert-errorBackground);
				border-left: 0.3rem solid var(--color-alert-errorBorder);
				color: var(--color-alert-foreground);
			}

			.alert code-icon {
				margin-right: 0.4rem;
				vertical-align: baseline;
			}

			.alert__content {
				font-size: 1.2rem;
				line-height: 1.2;
				text-align: left;
				margin: 0;
			}
		`],lq([eB({type:Object})],lV.prototype,"orgSettings",2),lq([eB({type:Object})],lV.prototype,"preferences",2),lq([eB({type:Object})],lV.prototype,"generate",2),lq([eB({type:Object})],lV.prototype,"createState",2),lV=lq([eL("gl-inspect-patch")],lV);var lW=Object.defineProperty,lG=Object.getOwnPropertyDescriptor,lK=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lG(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lW(t,i,a),a};let lZ=class extends GlDetailsBase{constructor(){super(),this.tab="wip",this.experimentalComposerEnabled=!1,this.patchCreateMetadata={title:void 0,description:void 0},lA(lx)}get inReview(){return this.draftState?.inReview??!1}get isUnpublished(){let e=this.wip?.branch;return e?.upstream==null||!0===e.upstream.missing}get draftsEnabled(){return this.orgSettings?.drafts===!0}get filesCount(){return this.files?.length??0}get branchState(){let e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get patchCreateState(){let e=this.wip,t=e.repo.uri,i={type:"wip",repository:{name:e.repo.name,path:e.repo.path,uri:e.repo.uri},revision:{to:lE,from:"HEAD"},files:e.changes?.files??[],checked:!0};return{...this.patchCreateMetadata,changes:{[t]:i},creationError:void 0,visibility:"public",userSelections:void 0}}get codeSuggestions(){return this.wip?.codeSuggestions??[]}updated(e){super.updated(e),e.has("generate")&&(this.patchCreateMetadata={title:this.generate?.title??this.patchCreateMetadata.title,description:this.generate?.description??this.patchCreateMetadata.description})}get filesChangedPaneLabel(){return"Working Changes"}renderChangedFilesActions(){if(this.files?.length)return eC`<div class="section section--actions">
			<button-container>
				<gl-button
					full
					.href=${sr("gitlens.composeCommits",{repoPath:this.wip?.repo.path,source:"inspect"})}
					><code-icon icon="wand" slot="prefix"></code-icon>Compose Commits...<span slot="tooltip"
						><strong>Compose Commits</strong> (Preview)<br /><i
							>Automatically or interactively organize changes into meaningful commits</i
						></span
					></gl-button
				>
				<gl-button appearance="secondary" href="command:workbench.view.scm" tooltip="Commit via SCM"
					><code-icon rotate="45" icon="arrow-up"></code-icon
				></gl-button>
			</button-container>
		</div>`}renderSecondaryAction(e=!0){if(!this.draftsEnabled||this.inReview)return;let t="Share as Cloud Patch",o="create-patch",r=this.wip?.pullRequest;return r?.state==="opened"&&function(e,t){let o;return null==e&&null==t||null!=e&&null!=t&&0==(null==i&&(i=new Intl.Collator(void 0,{sensitivity:"accent"})),0===(o=i.compare(e,t))?0:o>0?1:-1)}(r.provider.domain,"github.com")?(this.inReview?(t="Close Suggestion for PR",o="end-patch-review"):(t="Suggest Changes for PR",o="start-patch-review"),(this.wip?.changes?.files.length??0)===0)?eC`
					<gl-button
						?full=${!e}
						appearance="secondary"
						data-action="${o}"
						@click=${()=>this.onToggleReviewMode(!this.inReview)}
						.tooltip=${e?t:void 0}
					>
						<code-icon icon="gl-code-suggestion" .slot=${!e?"prefix":eA}></code-icon
						>${!e?t:eA}
					</gl-button>
				`:eC`
				<gl-button
					?full=${!e}
					appearance="secondary"
					data-action="${o}"
					.tooltip=${e?t:void 0}
					@click=${()=>this.onToggleReviewMode(!this.inReview)}
				>
					<code-icon icon="gl-code-suggestion" .slot=${!e?"prefix":eA}></code-icon
					>${!e?t:eA}
				</gl-button>
				<gl-button
					appearance="secondary"
					density="compact"
					data-action="create-patch"
					tooltip="Share as Cloud Patch"
					@click=${()=>this.onDataActionClick("create-patch")}
				>
					<code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`:(this.wip?.changes?.files.length??0)!==0?eC`
			<gl-button
				?full=${!e}
				appearance="secondary"
				data-action="${o}"
				.tooltip=${e?t:void 0}
				@click=${()=>this.onDataActionClick(o)}
			>
				<code-icon icon="gl-cloud-patch-share" .slot=${!e?"prefix":eA}></code-icon
				>${!e?t:eA}
			</gl-button>
		`:void 0}renderPrimaryAction(){if(this.isUnpublished)return eC`
				<gl-button full data-action="publish-branch" @click=${()=>this.onDataActionClick("publish-branch")}>
					<code-icon icon="cloud-upload" slot="prefix"></code-icon>Publish Branch<span slot="tooltip"
						>Publish (push) <strong>${this.wip?.branch?.name}</strong> to
						${this.wip?.branch?.upstream?.name??"a remote"}</span
					>
				</gl-button>
			`;if(null==this.branchState)return;let{ahead:e,behind:t}=this.branchState;if(0===e&&0===t)return;let i=t>0?"Pull":e>0?"Push":"Fetch";return eC`
			<gl-button
				full
				data-action="${i.toLowerCase()}"
				@click=${()=>this.onDataActionClick(i.toLowerCase())}
			>
				<code-icon icon="${t>0?"repo-pull":e>0?"repo-push":"repo-fetch"}" slot="prefix"></code-icon> ${i}
				<gl-tracking-pill .ahead=${e} .behind=${t} slot="suffix"></gl-tracking-pill>
				<span slot="tooltip">${t>0?"Pull from":e>0?"Push to":"Fetch from"} <strong>${this.wip?.branch?.upstream?.name}</strong></span>
			</gl-button>
		`}renderActions(){let e=this.renderPrimaryAction(),t=this.renderSecondaryAction(null!=e);return null==e&&null==t?eA:eC`<div class="section section--actions">
			<button-container>${e}${t}</button-container>
		</div>`}renderSuggestedChanges(){return 0===this.codeSuggestions.length?eA:eC`
			<gl-tree>
				<gl-tree-item branch .expanded=${!0} .level=${0}>
					<code-icon slot="icon" icon="gl-code-suggestion"></code-icon>
					Code Suggestions
				</gl-tree-item>
				${sZ(this.codeSuggestions,e=>e.id,e=>eC`
						<gl-tree-item
							.expanded=${!0}
							.level=${1}
							@gl-tree-item-selected=${()=>this.onShowCodeSuggestion(e.id)}
						>
							<gk-avatar
								class="author-icon"
								src="${e.author.avatarUri}"
								title="${e.author.name} (author)"
							></gk-avatar>
							${e.title}
							<span slot="description"
								><formatted-date .date=${new Date(e.updatedAt)}></formatted-date
							></span>
						</gl-tree-item>
					`)}
			</gl-tree>
		`}renderPullRequest(){return this.wip?.pullRequest==null?eA:eC`
			<webview-pane
				collapsable
				flexible
				?expanded=${this.preferences?.pullRequestExpanded??!0}
				data-region="pullrequest-pane"
			>
				<span slot="title">Pull Request #${this.wip?.pullRequest?.id}</span>
				<action-nav slot="actions">
					<action-item
						label="Open Pull Request Changes"
						icon="diff-multiple"
						@click=${()=>this.onDataActionClick("open-pr-changes")}
					></action-item>
					<action-item
						label="Compare Pull Request"
						icon="compare-changes"
						@click=${()=>this.onDataActionClick("open-pr-compare")}
					></action-item>
					<action-item
						label="Open Pull Request on Remote"
						icon="globe"
						@click=${()=>this.onDataActionClick("open-pr-remote")}
					></action-item>
				</action-nav>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						identifier="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
						details
					></issue-pull-request>
				</div>
				${this.renderSuggestedChanges()}
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?eA:eC`
			<webview-pane collapsable>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}renderPatchCreation(){return this.inReview?eC`<gl-inspect-patch
			.orgSettings=${this.orgSettings}
			.preferences=${this.preferences}
			.generate=${this.generate}
			.createState=${this.patchCreateState}
			@gl-patch-create-patch=${e=>{this.dispatchEvent(new CustomEvent("gl-inspect-create-suggestions",{detail:e.detail}))}}
		></gl-inspect-patch>`:eA}render(){return null==this.wip?eA:eC`
			${this.renderActions()}
			<webview-pane-group flexible>
				${this.renderPullRequest()}
				${eU(!1===this.inReview,()=>this.renderChangedFiles("wip"))}${this.renderPatchCreation()}
			</webview-pane-group>
		`}getFileActions(e,t){let i={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[i,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[i,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getFileContextData(e){if(this.wip?.repo?.path)return ss({webviewItem:e.staged?"gitlens:file+staged":"gitlens:file+unstaged",webviewItemValue:{type:"file",path:e.path,repoPath:this.wip.repo.path,sha:lE,staged:e.staged,status:e.status}})}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}onToggleReviewMode(e){this.dispatchEvent(new CustomEvent("draft-state-changed",{detail:{inReview:e}}))}onShowCodeSuggestion(e){this.dispatchEvent(new CustomEvent("gl-show-code-suggestion",{detail:{id:e}}))}};lZ.styles=[F`
			:host {
				--gk-avatar-size: 1.6rem;
			}
		`],lK([eB({type:Object})],lZ.prototype,"wip",2),lK([eB({type:Object})],lZ.prototype,"draftState",2),lK([eB({type:Object})],lZ.prototype,"generate",2),lK([eB({type:Boolean})],lZ.prototype,"experimentalComposerEnabled",2),lK([eN()],lZ.prototype,"inReview",1),lK([eN()],lZ.prototype,"patchCreateMetadata",2),lZ=lK([eL("gl-wip-details")],lZ);let lY=F`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover,
	:host-context(.vscode-high-contrast-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active,
	:host-context(.vscode-high-contrast-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var lX=Object.defineProperty,lJ=Object.getOwnPropertyDescriptor,lQ=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?lJ(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&lX(t,i,a),a};let l0=class extends lit_element_i{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){let t=e.target,i=t.dataset.action;if(null!=i)if("commit-actions"===i){let i=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:i})}else this.fireEvent(i)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){let e=this.pinned?eC`Unpin this Commit<br />Restores Automatic Following`:eC`Pin this Commit<br />Suspends Automatic Following`,t="Forward",i="Back";return this.navigation?.hint&&(this.pinned?i+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),eC`
			<div class="group">
				${eU(!this.uncommitted,()=>eC`
						<gl-tooltip hoist>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="sha"
								@click=${this.handleAction}
							>
								<code-icon
									icon="${null!=this.stashNumber?"gl-stashes-view":"git-commit"}"
								></code-icon>
								<span class="sha" data-region="shortsha"
									>${null!=this.stashNumber?`#${this.stashNumber}`:this.shortSha}</span
								>
							</a>
							<span slot="content"
								>Copy ${null!=this.stashNumber?"Stash Name":"SHA"}<br />[${sk()}]
								Copy Message</span
							>
						</gl-tooltip>
					`)}
			</div>
			<div class="group">
				<gl-tooltip hoist
					><a
						class="commit-action${this.pinned?" is-active":""}"
						href="#"
						data-action="pin"
						@click=${this.handleAction}
						><code-icon
							icon="${this.pinned?"gl-pinned-filled":"pin"}"
							data-region="commit-pin"
						></code-icon></a
					><span slot="content">${e}</span></gl-tooltip
				>
				<gl-tooltip hoist content="${i}"
					><a
						class="commit-action${this.navigationState.back?"":" is-disabled"}"
						aria-disabled="${this.navigationState.back?"false":"true"}"
						href="#"
						data-action="back"
						@click=${this.handleAction}
						><code-icon icon="arrow-left" data-region="commit-back"></code-icon></a
				></gl-tooltip>
				${eU(this.navigationState.forward,()=>eC`
						<gl-tooltip hoist content="${t}"
							><a class="commit-action" href="#" data-action="forward" @click=${this.handleAction}
								><code-icon icon="arrow-right" data-region="commit-forward"></code-icon></a
						></gl-tooltip>
					`)}
				<!-- TODO: add a spacer -->
				${eU(this.uncommitted,()=>eC`
						<gl-tooltip hoist content="Open SCM view"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								@click=${this.handleAction}
								><code-icon icon="source-control"></code-icon></a
						></gl-tooltip>
					`)}
				<gl-tooltip hoist content="Open in Commit Graph"
					><a
						class="commit-action"
						href="#"
						data-action="commit-actions"
						data-action-type="graph"
						@click=${this.handleAction}
						><code-icon icon="gl-graph"></code-icon></a
				></gl-tooltip>
				${eU(!this.uncommitted,()=>eC`
						<gl-tooltip hoist content="Show Commit Actions"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="more"
								@click=${this.handleAction}
								><code-icon icon="kebab-vertical"></code-icon></a
						></gl-tooltip>
					`)}
			</div>
		`}};l0.styles=[lY,F`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				color: var(--color-alert-warningForeground);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],lQ([eB({type:Boolean,reflect:!0})],l0.prototype,"pinned",2),lQ([eB({type:Boolean})],l0.prototype,"uncommitted",2),lQ([eB({type:Object})],l0.prototype,"navigation",2),lQ([eB()],l0.prototype,"shortSha",2),lQ([eB()],l0.prototype,"stashNumber",2),l0=lQ([eL("gl-inspect-nav")],l0);var l1=Object.defineProperty,l2=Object.getOwnPropertyDescriptor,l5=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?l2(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&l1(t,i,a),a};let l3=class extends lit_element_i{render(){if(null==this.wip)return eA;let e=this.wip.changes,t=this.wip.branch;if(null==e||null==t)return eA;let i="git-pull-request";if(this.wip.pullRequest?.state)switch(this.wip.pullRequest?.state){case"merged":i="git-merge";break;case"closed":i="git-pull-request-closed"}return eC`
			<div class="group">
				${eU(null!=this.wip.pullRequest,()=>eC`<gl-popover hoist>
							<a href="#" class="commit-action" slot="anchor"
								><code-icon icon=${i} class="pr pr--${this.wip.pullRequest.state}"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div slot="content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									identifier="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									details
								></issue-pull-request>
							</div>
						</gl-popover>`)}
				<gl-tooltip hoist class="tooltip--overflowed">
					<a
						href="#"
						class="commit-action commit-action--overflowed"
						@click=${e=>this.handleAction(e,"switch")}
					>
						${eU(null==this.wip.pullRequest,()=>eC`<code-icon icon="git-branch"></code-icon>`)}<span class="branch">${t.name}</span><code-icon icon="chevron-down" size="10"></code-icon
					></a>
					<div slot="content">
						Switch to Another Branch...
						<hr />
						<code-icon icon="git-branch"></code-icon><span class="md-code">${this.wip.branch?.name}</span>
					</div>
				</gl-tooltip>
			</div>
			<div class="group">
				<gl-tooltip hoist content="Fetch">
					<a href="#" class="commit-action" @click=${e=>this.handleAction(e,"fetch")}
						><code-icon icon="repo-fetch"></code-icon></a
				></gl-tooltip>
			</div>
		`}handleAction(e,t){let i=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:i}}))}};l3.styles=[lY,F`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.tooltip--overflowed {
				min-width: 0;
			}

			.commit-action--overflowed {
				width: 100%;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],l5([eB({type:Object})],l3.prototype,"wip",2),l5([eB({type:Object})],l3.prototype,"preferences",2),l3=l5([eL("gl-status-nav")],l3);var l6=Object.defineProperty,l7=Object.getOwnPropertyDescriptor,l8=(e,t,i,o)=>{for(var r,a=o>1?void 0:o?l7(t,i):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(t,i,a):r(a))||a);return o&&a&&l6(t,i,a),a};let l9="0000000000000000000000000000000000000000",l4=class extends GlAppHost{constructor(){super(...arguments),this.draftState={inReview:!1},this.reachabilityState="idle",this.indentPreference=16}createRenderRoot(){return this}createStateProvider(e,t,i){return new CommitDetailsStateProvider(this,e,t,i)}get isUncommitted(){return this.state?.commit?.sha===l9}get isStash(){return this.state?.commit?.stashNumber!=null}get wipStatus(){let e=this.state?.wip;if(null==e)return;let t=e.branch;if(null==t)return;let i=e.changes,o=i?.files.length??0,r=t.tracking?.ahead??0,a=t.tracking?.behind??0;return{branch:e.repositoryCount>1?`${e.repo.name}:${t.name}`:t.name,upstream:t.upstream?.name,ahead:r,behind:a,working:e.changes?.files.length??0,status:a>0&&r>0?"both":a>0?"behind":r>0?"ahead":o>0?"working":void 0}}connectedCallback(){super.connectedCallback?.(),this.disposables.push(x.on("gl-inspect-nav","gl-commit-actions",e=>this.onCommitActions(e)),x.on("gl-status-nav","gl-branch-action",e=>this.onBranchAction(e.detail.action)),x.on('[data-action="pick-commit"]',"click",e=>this.onPickCommit(e)),x.on('[data-action="wip"]',"click",e=>this.onSwitchMode(e,"wip")),x.on('[data-action="details"]',"click",e=>this.onSwitchMode(e,"commit")),x.on('[data-action="search-commit"]',"click",e=>this.onSearchCommit(e)),x.on('[data-action="files-layout"]',"click",e=>this.onToggleFilesLayout(e)),x.on("gl-inspect-nav","gl-pin",()=>this.onTogglePin()),x.on("gl-inspect-nav","gl-back",()=>this.onNavigate("back")),x.on("gl-inspect-nav","gl-forward",()=>this.onNavigate("forward")),x.on('[data-action="create-patch"]',"click",e=>this.onCreatePatchFromWip(!0)),x.on('[data-region="pullrequest-pane"]',"expanded-change",e=>this.onExpandedChange(e.detail,"pullrequest")),x.on('[data-action="explain-commit"]',"click",e=>this.onExplainCommit(e)),x.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAiModel(e)),x.on("gl-wip-details","create-patch",e=>this.onCreatePatchFromWip(e.detail.checked)),x.on("gl-commit-details","file-open-on-remote",e=>this.onOpenFileOnRemote(e.detail)),x.on("gl-commit-details,gl-wip-details","file-open",e=>this.onOpenFile(e.detail)),x.on("gl-commit-details","file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),x.on("gl-commit-details,gl-wip-details","file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),x.on("gl-commit-details","file-more-actions",e=>this.onFileMoreActions(e.detail)),x.on("gl-wip-details","file-stage",e=>this.onStageFile(e.detail)),x.on("gl-wip-details","file-unstage",e=>this.onUnstageFile(e.detail)),x.on("gl-wip-details","data-action",e=>this.onBranchAction(e.detail.name)),x.on("gl-wip-details","gl-inspect-create-suggestions",e=>this.onSuggestChanges(e.detail)),x.on("gl-wip-details","gl-patch-generate-title",e=>this.onCreateGenerateTitle(e.detail)),x.on("gl-wip-details","gl-show-code-suggestion",e=>this.onShowCodeSuggestion(e.detail)),x.on("gl-wip-details","gl-patch-file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),x.on("gl-wip-details","gl-patch-file-open",e=>this.onOpenFile(e.detail)),x.on("gl-wip-details","gl-patch-file-stage",e=>this.onStageFile(e.detail)),x.on("gl-wip-details","gl-patch-file-unstage",e=>this.onUnstageFile(e.detail)),x.on("gl-wip-details","gl-patch-create-cancelled",()=>this.onDraftStateChanged(!1)),x.on("gl-status-nav,issue-pull-request","gl-issue-pull-request-details",()=>this.onBranchAction("open-pr-details")))}updated(e){e.has("state")&&(this.updateDocumentProperties(),this.state?.inReview!=null&&this.state.inReview!==this.draftState.inReview&&(this.draftState.inReview=this.state.inReview))}updateDocumentProperties(){let e=this.state?.preferences?.indent;e===this.indentPreference||(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}onSuggestChanges(e){this._ipc.sendCommand(tr,e)}onShowCodeSuggestion(e){this._ipc.sendCommand(t_,e)}renderTopInspect(){return this.state?.commit==null?eA:eC`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return this.state?.wip==null?eA:eC`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderRepoStatusContent(e){let t=this.wipStatus?.status;return eC`
			<code-icon icon="gl-repository-filled"></code-icon>
			${eU(this.wipStatus?.status!=null,()=>eC`<gl-tracking-pill
						class="inspect-header__tab-tracking"
						.ahead=${this.wipStatus.ahead}
						.behind=${this.wipStatus.behind}
						.working=${this.wipStatus.working}
						outlined
					></gl-tracking-pill>`)}
			${eU(null!=t,()=>eC`<gl-indicator
						class="inspect-header__tab-indicator inspect-header__tab-indicator--${t}"
					></gl-indicator>`)}
		`}renderWipTooltipContent(){return null==this.wipStatus?"Overview":eC`
			Overview of &nbsp;<code-icon icon="git-branch" size="12"></code-icon
			><span class="md-code">${this.wipStatus.branch}</span>
			${eU("both"===this.wipStatus.status,()=>eC`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${e5("commit",this.wipStatus.behind)} behind and
						${e5("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${eU("behind"===this.wipStatus.status,()=>eC`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${e5("commit",this.wipStatus.behind)} behind
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${eU("ahead"===this.wipStatus.status,()=>eC`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${e5("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code"> ${this.wipStatus.upstream??"origin"}</span>`)}
			${eU(this.wipStatus.working>0,()=>eC`<hr />
						${e5("working change",this.wipStatus.working)}`)}
		`}renderTopSection(){let e=this.state?.mode==="wip";return eC`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<gl-tooltip hoist>
						<button class="inspect-header__tab${!e?" is-active":""}" data-action="details">
							<code-icon icon="gl-inspect"></code-icon>
						</button>
						<span slot="content"
							>${this.state?.commit!=null?!this.isStash?eC`Inspect Commit
											<span class="md-code"
												><code-icon icon="git-commit"></code-icon> ${this.state.commit.shortSha}</span
											>`:eC`Inspect Stash
											<span class="md-code"
												><code-icon icon="gl-stashes-view"></code-icon> #${this.state.commit.stashNumber}</span
											>`:"Inspect"}${this.state?.pinned?eC`(pinned)
										<hr />
										Automatic following is suspended while pinned`:""}</span
						>
					</gl-tooltip>
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?" is-active":""}" data-action="wip">
							${this.renderRepoStatusContent(e)}
						</button>
						<span slot="content">${this.renderWipTooltipContent()}</span>
					</gl-tooltip>
				</nav>
				<div class="inspect-header__content">
					${eU(this.state?.mode!=="wip",()=>this.renderTopInspect(),()=>this.renderTopWip())}
				</div>
			</div>
		`}render(){let e=this.state?.wip;return eC`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${eU(this.state?.mode==="commit",()=>eC`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
								.searchContext=${this.state?.searchContext}
								.reachability=${this.reachability}
								.reachabilityState=${this.reachabilityState}
								@load-reachability=${()=>this.onLoadReachability()}
								@refresh-reachability=${()=>this.onRefreshReachability()}
							></gl-commit-details>`,()=>eC`<gl-wip-details
								.experimentalComposerEnabled=${this.state?.experimentalComposerEnabled}
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.generate=${this.generate}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
								.draftState=${this.draftState}
								@draft-state-changed=${e=>this.onDraftStateChanged(e.detail.inReview)}
							></gl-wip-details>`)}
				</main>
			</div>
		`}onDraftStateChanged(e,t=!1){e!==this.draftState.inReview&&(this.draftState={...this.draftState,inReview:e},this.requestUpdate("draftState"),t||this._ipc.sendCommand(tw,{inReview:e}))}onBranchAction(e){switch(e){case"pull":this._ipc.sendCommand(tC,void 0);break;case"push":this._ipc.sendCommand(t$,void 0);break;case"fetch":this._ipc.sendCommand(tx,void 0);break;case"publish-branch":this._ipc.sendCommand(tk,void 0);break;case"switch":this._ipc.sendCommand(tS,void 0);break;case"open-pr-changes":this._ipc.sendCommand(tA,void 0);break;case"open-pr-compare":this._ipc.sendCommand(tE,void 0);break;case"open-pr-remote":this._ipc.sendCommand(tP,void 0);break;case"open-pr-details":this._ipc.sendCommand(tR,void 0)}}onCreatePatchFromWip(e=!0){this.state?.wip?.changes!=null&&this._ipc.sendCommand(ty,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._ipc.sendCommand(e7,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.ai.switchProvider")}async onExplainCommit(e){try{let e=await this._ipc.sendRequest(tI,void 0);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:this.explain=e}catch(e){this.explain={error:{message:"Error retrieving content"}}}}async onLoadReachability(){if("loading"!==this.reachabilityState&&this.state?.commit!=null){this.reachabilityState="loading";try{let e=await this._ipc.sendRequest(tz,void 0);e.error?(this.reachabilityState="error",this.reachability=void 0):(this.reachabilityState="loaded",this.reachability={refs:e.refs})}catch{this.reachabilityState="error",this.reachability=void 0}}}onRefreshReachability(){this.reachabilityState="idle",this.reachability=void 0,this.onLoadReachability()}async onCreateGenerateTitle(e){try{let e=await this._ipc.sendRequest(tT,void 0);e.error?this.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?this.generate={title:e.title,description:e.description}:this.generate=void 0}catch(e){this.generate={error:{message:"Error retrieving content"}}}this.requestUpdate("generate")}onToggleFilesLayout(e){let t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;let i={...this.state.preferences?.files,layout:t??"auto"};this._stateProvider.updatePreferences({files:i})}onExpandedChange(e,t){let i;"pullrequest"===t&&(i={pullRequestExpanded:e.expanded}),null!=i&&this._stateProvider.updatePreferences(i)}onNavigate(e){this._ipc.sendCommand(tb,{direction:e})}onTogglePin(){this._ipc.sendCommand(tm,{pin:!this.state.pinned})}onPickCommit(e){this._ipc.sendCommand(tu,void 0)}onSearchCommit(e){this._ipc.sendCommand(tg,void 0)}onSwitchMode(e,t){this._stateProvider.switchMode(t)}onOpenFileOnRemote(e){this._ipc.sendCommand(tl,e)}onOpenFile(e){this._ipc.sendCommand(ta,e)}onCompareFileWithWorking(e){this._ipc.sendCommand(tc,e)}onCompareFileWithPrevious(e){this._ipc.sendCommand(th,e)}onFileMoreActions(e){this._ipc.sendCommand(tn,e)}onStageFile(e){this._ipc.sendCommand(td,e)}onUnstageFile(e){this._ipc.sendCommand(tp,e)}onCommitActions(e){this.state?.commit!==void 0&&this._ipc.sendCommand(ts,{action:e.detail.action,alt:e.detail.alt})}};l8([eN()],l4.prototype,"explain",2),l8([eN()],l4.prototype,"generate",2),l8([eN()],l4.prototype,"draftState",2),l8([eN()],l4.prototype,"reachability",2),l8([eN()],l4.prototype,"reachabilityState",2),l8([eN()],l4.prototype,"isUncommitted",1),l8([eN()],l4.prototype,"isStash",1),l4=l8([eL("gl-commit-details-app")],l4);export{l4 as GlCommitDetailsApp,l9 as uncommittedSha};