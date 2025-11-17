let t,e,o,r;var n,a,h,c,p,u,g,f,m,v,b,w,_={602:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isWide=e.isFullWidth=e.isAmbiguous=void 0,e.isAmbiguous=t=>161===t||164===t||167===t||168===t||170===t||173===t||174===t||t>=176&&t<=180||t>=182&&t<=186||t>=188&&t<=191||198===t||208===t||215===t||216===t||t>=222&&t<=225||230===t||t>=232&&t<=234||236===t||237===t||240===t||242===t||243===t||t>=247&&t<=250||252===t||254===t||257===t||273===t||275===t||283===t||294===t||295===t||299===t||t>=305&&t<=307||312===t||t>=319&&t<=322||324===t||t>=328&&t<=331||333===t||338===t||339===t||358===t||359===t||363===t||462===t||464===t||466===t||468===t||470===t||472===t||474===t||476===t||593===t||609===t||708===t||711===t||t>=713&&t<=715||717===t||720===t||t>=728&&t<=731||733===t||735===t||t>=768&&t<=879||t>=913&&t<=929||t>=931&&t<=937||t>=945&&t<=961||t>=963&&t<=969||1025===t||t>=1040&&t<=1103||1105===t||8208===t||t>=8211&&t<=8214||8216===t||8217===t||8220===t||8221===t||t>=8224&&t<=8226||t>=8228&&t<=8231||8240===t||8242===t||8243===t||8245===t||8251===t||8254===t||8308===t||8319===t||t>=8321&&t<=8324||8364===t||8451===t||8453===t||8457===t||8467===t||8470===t||8481===t||8482===t||8486===t||8491===t||8531===t||8532===t||t>=8539&&t<=8542||t>=8544&&t<=8555||t>=8560&&t<=8569||8585===t||t>=8592&&t<=8601||8632===t||8633===t||8658===t||8660===t||8679===t||8704===t||8706===t||8707===t||8711===t||8712===t||8715===t||8719===t||8721===t||8725===t||8730===t||t>=8733&&t<=8736||8739===t||8741===t||t>=8743&&t<=8748||8750===t||t>=8756&&t<=8759||8764===t||8765===t||8776===t||8780===t||8786===t||8800===t||8801===t||t>=8804&&t<=8807||8810===t||8811===t||8814===t||8815===t||8834===t||8835===t||8838===t||8839===t||8853===t||8857===t||8869===t||8895===t||8978===t||t>=9312&&t<=9449||t>=9451&&t<=9547||t>=9552&&t<=9587||t>=9600&&t<=9615||t>=9618&&t<=9621||9632===t||9633===t||t>=9635&&t<=9641||9650===t||9651===t||9654===t||9655===t||9660===t||9661===t||9664===t||9665===t||t>=9670&&t<=9672||9675===t||t>=9678&&t<=9681||t>=9698&&t<=9701||9711===t||9733===t||9734===t||9737===t||9742===t||9743===t||9756===t||9758===t||9792===t||9794===t||9824===t||9825===t||t>=9827&&t<=9829||t>=9831&&t<=9834||9836===t||9837===t||9839===t||9886===t||9887===t||9919===t||t>=9926&&t<=9933||t>=9935&&t<=9939||t>=9941&&t<=9953||9955===t||9960===t||9961===t||t>=9963&&t<=9969||9972===t||t>=9974&&t<=9977||9979===t||9980===t||9982===t||9983===t||10045===t||t>=10102&&t<=10111||t>=11094&&t<=11097||t>=12872&&t<=12879||t>=57344&&t<=63743||t>=65024&&t<=65039||65533===t||t>=127232&&t<=127242||t>=127248&&t<=127277||t>=127280&&t<=127337||t>=127344&&t<=127373||127375===t||127376===t||t>=127387&&t<=127404||t>=917760&&t<=917999||t>=983040&&t<=1048573||t>=1048576&&t<=1114109,e.isFullWidth=t=>12288===t||t>=65281&&t<=65376||t>=65504&&t<=65510,e.isWide=t=>t>=4352&&t<=4447||8986===t||8987===t||9001===t||9002===t||t>=9193&&t<=9196||9200===t||9203===t||9725===t||9726===t||9748===t||9749===t||t>=9800&&t<=9811||9855===t||9875===t||9889===t||9898===t||9899===t||9917===t||9918===t||9924===t||9925===t||9934===t||9940===t||9962===t||9970===t||9971===t||9973===t||9978===t||9981===t||9989===t||9994===t||9995===t||10024===t||10060===t||10062===t||t>=10067&&t<=10069||10071===t||t>=10133&&t<=10135||10160===t||10175===t||11035===t||11036===t||11088===t||11093===t||t>=11904&&t<=11929||t>=11931&&t<=12019||t>=12032&&t<=12245||t>=12272&&t<=12287||t>=12289&&t<=12350||t>=12353&&t<=12438||t>=12441&&t<=12543||t>=12549&&t<=12591||t>=12593&&t<=12686||t>=12688&&t<=12771||t>=12783&&t<=12830||t>=12832&&t<=12871||t>=12880&&t<=19903||t>=19968&&t<=42124||t>=42128&&t<=42182||t>=43360&&t<=43388||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65040&&t<=65049||t>=65072&&t<=65106||t>=65108&&t<=65126||t>=65128&&t<=65131||t>=94176&&t<=94180||94192===t||94193===t||t>=94208&&t<=100343||t>=100352&&t<=101589||t>=101632&&t<=101640||t>=110576&&t<=110579||t>=110581&&t<=110587||110589===t||110590===t||t>=110592&&t<=110882||110898===t||t>=110928&&t<=110930||110933===t||t>=110948&&t<=110951||t>=110960&&t<=111355||126980===t||127183===t||127374===t||t>=127377&&t<=127386||t>=127488&&t<=127490||t>=127504&&t<=127547||t>=127552&&t<=127560||127568===t||127569===t||t>=127584&&t<=127589||t>=127744&&t<=127776||t>=127789&&t<=127797||t>=127799&&t<=127868||t>=127870&&t<=127891||t>=127904&&t<=127946||t>=127951&&t<=127955||t>=127968&&t<=127984||127988===t||t>=127992&&t<=128062||128064===t||t>=128066&&t<=128252||t>=128255&&t<=128317||t>=128331&&t<=128334||t>=128336&&t<=128359||128378===t||128405===t||128406===t||128420===t||t>=128507&&t<=128591||t>=128640&&t<=128709||128716===t||t>=128720&&t<=128722||t>=128725&&t<=128727||t>=128732&&t<=128735||128747===t||128748===t||t>=128756&&t<=128764||t>=128992&&t<=129003||129008===t||t>=129292&&t<=129338||t>=129340&&t<=129349||t>=129351&&t<=129535||t>=129648&&t<=129660||t>=129664&&t<=129672||t>=129680&&t<=129725||t>=129727&&t<=129733||t>=129742&&t<=129755||t>=129760&&t<=129768||t>=129776&&t<=129784||t>=131072&&t<=196605||t>=196608&&t<=262141},6047:(t,e,o)=>{o(602)}},C={};function $(t){var e=C[t];if(void 0!==e)return e.exports;var o=C[t]={exports:{}};return _[t](o,o.exports,$),o.exports}$.d=(t,e)=>{for(var o in e)$.o(e,o)&&!$.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},$.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Object.defineProperty($,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(t){}});var x=((n=x||{}).GitHub="github",n.GitLab="gitlab",n.Bitbucket="bitbucket",n.AzureDevOps="azureDevOps",n),A=((a=A||{}).BitbucketServer="bitbucket-server",a.GitHubEnterprise="github-enterprise",a.CloudGitHubEnterprise="cloud-github-enterprise",a.GitLabSelfHosted="gitlab-self-hosted",a.CloudGitLabSelfHosted="cloud-gitlab-self-hosted",a.AzureDevOpsServer="azure-devops-server",a),S=((h=S||{}).Jira="jira",h.Linear="linear",h.Trello="trello",h);function P(t,e){return null==e?`command:${t}`:`command:${t}?${encodeURIComponent("string"==typeof e?e:JSON.stringify(e))}`}let IpcCall=class IpcCall{constructor(t,e,o=!1){this.scope=t,this.reset=o,this.method=`${t}/${e}`}is(t){return t.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(t,e,o){super(t,e,o),this.response=new IpcNotification(this.scope,`${e}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let E=new IpcRequest("core","webview/ready"),T=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let O=new IpcRequest("core","promos/applicable"),D=new IpcCommand("core","configuration/update"),B=new IpcCommand("core","telemetry/sendEvent"),U=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let F=new IpcCommand("core","webview/focus/didChange"),q=new IpcNotification("core","webview/visibility/didChange"),j=new IpcNotification("core","configuration/didChange"),V="settings",Z=new IpcRequest(V,"configuration/preview"),W=new IpcNotification(V,"didOpenAnchor"),G=new IpcNotification(V,"didChangeAccount"),Y=new IpcNotification(V,"didChangeIssueIntegrationConnected");let context_request_event_s=class context_request_event_s extends Event{constructor(t,e,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=o,this.subscribe=r??!1}};let s=class s{constructor(t,e,o,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context)?(this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1):(this.context=e,this.callback=o,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};let i=class i extends value_notifier_s{constructor(t,e,o){super(void 0!==e.context?e.initialValue:o),this.onContextRequest=t=>{if(t.context!==this.context)return;let e=t.contextTarget??t.composedPath()[0];e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context||(t.contextTarget??t.composedPath()[0])===this.host)return;let e=new Set;for(let[t,{consumerHost:o}]of this.subscriptions)e.has(t)||(e.add(t),o.dispatchEvent(new context_request_event_s(this.context,o,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function J(t){let e=.001*performance.now(),o=Math.floor(e),r=Math.floor(e%1*1e9);return void 0!==t&&(o-=t[0],(r-=t[1])<0&&(o--,r+=1e9)),[o,r]}$(6047);var K=((c=K||{})[c.Hash=35]="Hash",c[c.Slash=47]="Slash",c[c.Digit0=48]="Digit0",c[c.Digit1=49]="Digit1",c[c.Digit2=50]="Digit2",c[c.Digit3=51]="Digit3",c[c.Digit4=52]="Digit4",c[c.Digit5=53]="Digit5",c[c.Digit6=54]="Digit6",c[c.Digit7=55]="Digit7",c[c.Digit8=56]="Digit8",c[c.Digit9=57]="Digit9",c[c.Backslash=92]="Backslash",c[c.A=65]="A",c[c.B=66]="B",c[c.C=67]="C",c[c.D=68]="D",c[c.E=69]="E",c[c.F=70]="F",c[c.Z=90]="Z",c[c.a=97]="a",c[c.b=98]="b",c[c.c=99]="c",c[c.d=100]="d",c[c.e=101]="e",c[c.f=102]="f",c[c.z=122]="z",c),Q=((p=Q||{}).AngleBracketLeftHeavy="❰",p.AngleBracketRightHeavy="❱",p.ArrowBack="↩",p.ArrowDown="↓",p.ArrowDownUp="⇵",p.ArrowDropRight="⤷",p.ArrowHeadRight="➤",p.ArrowLeft="←",p.ArrowLeftDouble="⇐",p.ArrowLeftRight="↔",p.ArrowLeftRightDouble="⇔",p.ArrowLeftRightDoubleStrike="⇎",p.ArrowLeftRightLong="⟷",p.ArrowRight="→",p.ArrowRightDouble="⇒",p.ArrowRightHollow="⇨",p.ArrowUp="↑",p.ArrowUpDown="⇅",p.ArrowUpRight="↗",p.ArrowsHalfLeftRight="⇋",p.ArrowsHalfRightLeft="⇌",p.ArrowsLeftRight="⇆",p.ArrowsRightLeft="⇄",p.Asterisk="∗",p.Bullseye="◎",p.Check="✔",p.Dash="—",p.Dot="•",p.Ellipsis="…",p.EnDash="–",p.Envelope="✉",p.EqualsTriple="≡",p.Flag="⚑",p.FlagHollow="⚐",p.MiddleEllipsis="⋯",p.MuchLessThan="≪",p.MuchGreaterThan="≫",p.Pencil="✎",p.Space=" ",p.SpaceThin=" ",p.SpaceThinnest=" ",p.SquareWithBottomShadow="❏",p.SquareWithTopShadow="❐",p.Warning="⚠",p.ZeroWidthSpace="​",p);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var X=((u=X||{}).File="file",u.Git="git",u.GitHub="github",u.GitLens="gitlens",u.GitLensAIMarkdown="gitlens-ai-markdown",u.PRs="pr",u.Remote="vscode-remote",u.Vsls="vsls",u.VslsScc="vsls-scc",u.Virtual="vscode-vfs",u);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let tt="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links";Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${tt}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${tt}`,graph:`https://gitkraken.com/solutions/commit-graph?${tt}`,launchpad:`https://gitkraken.com/solutions/launchpad?${tt}`,platform:`https://gitkraken.com/devex?${tt}`,pricing:`https://gitkraken.com/gitlens/pricing?${tt}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${tt}`,security:`https://help.gitkraken.com/gitlens/security?${tt}`,workspaces:`https://gitkraken.com/solutions/workspaces?${tt}`,cli:`https://gitkraken.com/cli?${tt}`,browserExtension:`https://gitkraken.com/browser-extension?${tt}`,desktop:`https://gitkraken.com/git-client?${tt}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${tt}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${tt}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tt}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${tt}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${tt}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${tt}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tt}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tt}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${tt}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tt}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tt}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tt}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${tt}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${tt}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${tt}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${tt}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tt}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tt}`});let te=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ti=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,to=new Map,tr=new Map;function ts(e,o,r,n=!0){o=o??void 0;let a=`${r??""}:${o}`,h=to.get(a);if(null==h){let e,c=function(t){if(null==t)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let e=ti.exec(t);if(e?.groups!=null){let{dateStyle:t,timeStyle:o}=e.groups;return{localeMatcher:"best fit",dateStyle:t||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:e}of t.matchAll(te))if(null!=e){for(let[t,r]of Object.entries(e))if(null!=r)switch(t){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);e=null==r?t:"system"===r?void 0:[r],h=new Intl.DateTimeFormat(e,c),n&&to.set(a,h)}if(null==o||ti.test(o))return h.format(e);let c=h.formatToParts(e);return o.replace(te,(o,a,h,p,u,g,f,m,v,b,w,_,C,$,x)=>{if(null!=a)return a.substring(1,a.length-1);for(let[o,a]of Object.entries(x)){if(null==a)continue;let h=c.find(t=>t.type===o);if("Do"===a&&h?.type==="day")return function(t){let e=t%100;return`${t}${tn[(e-20)%10]??tn[e]??tn[0]}`}(Number(h.value));if("a"===a&&h?.type==="dayPeriod"){let o=(function(e){let o=`${r??""}:time:${e}`,a=to.get(o);if(null==a){let h;h=null==r?t:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(h,{localeMatcher:"best fit",timeStyle:e}),n&&to.set(o,a)}return a})("short").formatToParts(e).find(t=>"dayPeriod"===t.type);return` ${(o??h)?.value??""}`}return h?.value??""}return""})}let tn=["th","st","nd","rd"];function ta(e,o){null==e&&(e="decimal");let r=`${o??""}:${e}`,n=tr.get(r);if(null==n){let a,h={localeMatcher:"best fit",style:e};a=null==o?t:"system"===o?void 0:[o],n=new Intl.NumberFormat(a,h),tr.set(r,n)}return n.format}function tl(t){let[e,o]=J(t);return 1e3*e+Math.floor(o/1e6)}function th(t,o,r){let n;if(null==r)return e??=ta(),`${e(o)} ${t}${1===o?"":"s"}`;let a=1===o?t:r.plural??`${t}s`;return r.only?a:(0===o?n=r.zero??o:!1===r.format?n=o:null!=r.format?n=r.format(o):(e??=ta(),n=e(o)),`${n}${r.infix??" "}${a}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var tc=((g=tc||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g);let td=["accessToken","password","token"],tp=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(t,e,o=!1){if(null!=t.sanitizeKeys)for(let e of td)t.sanitizeKeys.add(e);else t.sanitizeKeys=new Set(td);this.provider=t,this._isDebugging=o,this.logLevel=e}enabled(t){return this.level>=tu(t)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(t){this._logLevel=t,this.level=tu(this._logLevel),"off"===t?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(t,...e){let o;this.level<4&&!this.isDebugging||("string"==typeof t?o=t:(o=e.shift(),null!=t&&(o=`${t.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,e)}`))}error(t,e,...o){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==e||"string"==typeof e?e:`${e.prefix} ${o.shift()??""}`)){let e=t instanceof Error?t.stack:void 0;if(e){let t=/.*\s*?at\s(.+?)\s/.exec(e);null!=t&&(r=t[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=t?`
${String(t)}`:""}`)}}log(t,...e){let o;this.level<3&&!this.isDebugging||("string"==typeof t?o=t:(o=e.shift(),null!=t&&(o=`${t.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,e)}`))}warn(t,...e){let o;this.level<2&&!this.isDebugging||("string"==typeof t?o=t:(o=e.shift(),null!=t&&(o=`${t.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,e)}`))}showOutputChannel(t){this.output?.show?.(t)}toLoggable(t,e){if("object"!=typeof t)return String(t);if(Array.isArray(t))return`[${t.map(t=>this.toLoggable(t,e)).join(", ")}]`;let o=this.provider.toLoggable?.(t);if(null!=o)return o;try{return JSON.stringify(t,(t,o)=>this.provider.sanitizeKeys.has(t)?`<${t}>`:(null!=e&&(o=e(t,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(t,o)),o))}catch{return"<error>"}}toLoggableParams(t,e){if(0===e.length||t&&this.level<4&&!this.isDebugging)return"";let o=e.map(t=>this.toLoggable(t)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function tu(t){switch(t){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tg=new WeakMap,tf={enabled:t=>tp.enabled(t)||tp.isDebugging,log:(t,e,o,...r)=>{switch(t){case"error":tp.error(void 0,e,o,...r);break;case"warn":tp.warn(e,o,...r);break;case"info":tp.log(e,o,...r);break;default:tp.debug(e,o,...r)}}},tm=0x40000000-1;function tv(){let t=0;return{get current(){return t},next:function(){return t===tm&&(t=0),++t},reset:function(){t=0}}}let tb=tv(),ty=new Map;function tw(t,e){return null==e?`[${t.toString(16).padStart(13)}]`:`[${e.toString(16).padStart(5)} \u2192 ${t.toString(16).padStart(5)}]`}function t_(t,e){if(null!=e&&"boolean"!=typeof e)return{scopeId:e.scopeId,prevScopeId:e.prevScopeId,prefix:`${e.prefix}${t}`};let o=e?tb.current:void 0,r=tb.next();return{scopeId:r,prevScopeId:o,prefix:`${tw(r,o)} ${t}`}}let LoggerContext=class LoggerContext{constructor(t){this.scope=t_(t,void 0),tp.configure({name:t,createChannel:function(t){return{name:t,appendLine:tp.isDebugging?function(){}:function(t){}}}},"off",!1)}log(t,...e){"string"==typeof t?tp.log(this.scope,t,...e):tp.log(t,e.shift(),...e)}};let tC="home";new IpcRequest(tC,"launchpad/summary"),new IpcRequest(tC,"overview/active"),new IpcRequest(tC,"overview/inactive"),new IpcRequest(tC,"overviewFilter"),new IpcCommand(tC,"overview/repository/change"),new IpcNotification(tC,"overview/repository/didChange"),new IpcCommand(tC,"previewEnabled/toggle"),new IpcCommand(tC,"section/collapse"),new IpcCommand(tC,"walkthrough/dismiss"),new IpcNotification(tC,"ai/allAccess/didChange"),new IpcNotification(tC,"mcp/didChange"),new IpcCommand(tC,"ai/allAccess/dismiss"),new IpcCommand(tC,"overview/filter/set"),new IpcCommand(tC,"openInGraph"),new IpcNotification(tC,"repositories/didCompleteDiscovering"),new IpcNotification(tC,"previewEnabled/didChange"),new IpcNotification(tC,"repository/wip/didChange"),new IpcNotification(tC,"repositories/didChange"),new IpcNotification(tC,"walkthroughProgress/didChange"),new IpcNotification(tC,"integrations/didChange"),new IpcNotification(tC,"launchpad/didChange");let t$=new IpcNotification(tC,"subscription/didChange");new IpcNotification(tC,"org/settings/didChange"),new IpcNotification(tC,"home/ownerFilter/didChange"),new IpcNotification(tC,"account/didFocus");let tx="graph";new IpcCommand(tx,"chooseRepository"),new IpcCommand(tx,"dblclick"),new IpcCommand(tx,"dblclick"),new IpcCommand(tx,"avatars/get"),new IpcCommand(tx,"refs/metadata/get"),new IpcCommand(tx,"rows/get"),new IpcCommand(tx,"pullRequest/openDetails"),new IpcCommand(tx,"search/openInView"),new IpcCommand(tx,"columns/update"),new IpcCommand(tx,"refs/update/visibility"),new IpcCommand(tx,"filters/update/excludeTypes"),new IpcCommand(tx,"configuration/update"),new IpcCommand(tx,"search/update/mode"),new IpcCommand(tx,"filters/update/includedRefs"),new IpcCommand(tx,"selection/update"),new IpcRequest(tx,"jumpToHead"),new IpcRequest(tx,"chooseRef"),new IpcRequest(tx,"rows/ensure"),new IpcRequest(tx,"search/history/get"),new IpcRequest(tx,"search/history/store"),new IpcRequest(tx,"search/history/delete"),new IpcRequest(tx,"counts"),new IpcRequest(tx,"row/hover/get"),new IpcRequest(tx,"search"),new IpcNotification(tx,"repositories/integration/didChange"),new IpcNotification(tx,"didChange",!0),new IpcNotification(tx,"configuration/didChange");let tk=new IpcNotification(tx,"subscription/didChange");new IpcNotification(tx,"org/settings/didChange"),new IpcNotification(tx,"avatars/didChange"),new IpcNotification(tx,"mcp/didChange"),new IpcNotification(tx,"branchState/didChange"),new IpcNotification(tx,"refs/didChangeMetadata"),new IpcNotification(tx,"columns/didChange"),new IpcNotification(tx,"scrollMarkers/didChange"),new IpcNotification(tx,"refs/didChangeVisibility"),new IpcNotification(tx,"rows/didChange"),new IpcNotification(tx,"rows/stats/didChange"),new IpcNotification(tx,"selection/didChange"),new IpcNotification(tx,"workingTree/didChange"),new IpcNotification(tx,"didSearch"),new IpcNotification(tx,"didFetch"),new IpcNotification(tx,"featurePreview/didStart");let tA="timeline";new IpcRequest(tA,"ref/choose"),new IpcRequest(tA,"path/choose"),new IpcCommand(tA,"point/open"),new IpcCommand(tA,"config/update"),new IpcCommand(tA,"scope/update");let tS=new IpcNotification(tA,"didChange");let PromosContext=class PromosContext{constructor(t){this.disposables=[],this._promos=new Map,this.ipc=t,this.disposables.push(this.ipc.onReceiveMessage(t=>{(t$.is(t)||tk.is(t)||tS.is(t))&&this._promos.clear()}))}async getApplicablePromo(t,e){let o=`${t}|${e}`,r=this._promos.get(o);return null==r&&(r=this.ipc.sendRequest(O,{plan:t,location:e}).then(t=>t.promo,()=>void 0),this._promos.set(o,r)),await r}dispose(){this.disposables.forEach(t=>t.dispose())}};let TelemetryContext=class TelemetryContext{constructor(t){this.disposables=[],this.ipc=t}sendEvent(t){this.ipc.sendCommand(B,t)}dispose(){this.disposables.forEach(t=>t.dispose())}};function tL(t){return(t=t.toString().toLowerCase()).includes("ms")?parseFloat(t):t.includes("s")?1e3*parseFloat(t):parseFloat(t)}function tP(t,e){return new Promise(o=>{t.addEventListener(e,function r(n){n.target===t&&(t.removeEventListener(e,r),o())})})}(v||(v={})).on=function(t,e,o,r){let n=!1;if("string"==typeof t){let a=function(e){let r=e?.target?.closest(t);null!=r&&o(e,r)};return document.addEventListener(e,a,r??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(e,a,r??!0))}}}let a=function(t){o(t,this)};return t.addEventListener(e,a,r??!1),{dispose:()=>{n||(n=!0,t.removeEventListener(e,a,r??!1))}}};var tE=Uint8Array,tM=Uint16Array,tT=Int32Array,tR=new tE([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tO=new tE([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tD=new tE([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tI=function(t,e){for(var o=new tM(31),r=0;r<31;++r)o[r]=e+=1<<t[r-1];for(var n=new tT(o[30]),r=1;r<30;++r)for(var a=o[r];a<o[r+1];++a)n[a]=a-o[r]<<5|r;return{b:o,r:n}},tN=tI(tR,2),tH=tN.b,tz=tN.r;tH[28]=258,tz[258]=28;var tB=tI(tO,0),tU=tB.b;tB.r;for(var tF=new tM(32768),tq=0;tq<32768;++tq){var tj=(43690&tq)>>1|(21845&tq)<<1;tj=(61680&(tj=(52428&tj)>>2|(13107&tj)<<2))>>4|(3855&tj)<<4,tF[tq]=((65280&tj)>>8|(255&tj)<<8)>>1}for(var tV=function(t,e,o){for(var r,n=t.length,a=0,h=new tM(e);a<n;++a)t[a]&&++h[t[a]-1];var c=new tM(e);for(a=1;a<e;++a)c[a]=c[a-1]+h[a-1]<<1;if(o){r=new tM(1<<e);var p=15-e;for(a=0;a<n;++a)if(t[a])for(var u=a<<4|t[a],g=e-t[a],f=c[t[a]-1]++<<g,m=f|(1<<g)-1;f<=m;++f)r[tF[f]>>p]=u}else for(a=0,r=new tM(n);a<n;++a)t[a]&&(r[a]=tF[c[t[a]-1]++]>>15-t[a]);return r},tZ=new tE(288),tq=0;tq<144;++tq)tZ[tq]=8;for(var tq=144;tq<256;++tq)tZ[tq]=9;for(var tq=256;tq<280;++tq)tZ[tq]=7;for(var tq=280;tq<288;++tq)tZ[tq]=8;for(var tW=new tE(32),tq=0;tq<32;++tq)tW[tq]=5;var tG=tV(tZ,9,1),tY=tV(tW,5,1),tJ=function(t){for(var e=t[0],o=1;o<t.length;++o)t[o]>e&&(e=t[o]);return e},tK=function(t,e,o){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(7&e)&o},tQ=function(t,e){var o=e/8|0;return(t[o]|t[o+1]<<8|t[o+2]<<16)>>(7&e)},tX=function(t,e,o){return(null==e||e<0)&&(e=0),(null==o||o>t.length)&&(o=t.length),new tE(t.subarray(e,o))},t1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],t2=function(t,e,o){var r=Error(e||t1[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,t2),!o)throw r;return r},t0=function(t,e,o,r){var n=t.length,a=r?r.length:0;if(!n||e.f&&!e.l)return o||new tE(0);var h=!o,c=h||2!=e.i,p=e.i;h&&(o=new tE(3*n));var u=function(t){var e=o.length;if(t>e){var r=new tE(Math.max(2*e,t));r.set(o),o=r}},g=e.f||0,f=e.p||0,m=e.b||0,v=e.l,b=e.d,w=e.m,_=e.n,C=8*n;do{if(!v){g=tK(t,f,1);var $=tK(t,f+1,3);if(f+=3,$)if(1==$)v=tG,b=tY,w=9,_=5;else if(2==$){var x=tK(t,f,31)+257,A=tK(t,f+10,15)+4,S=x+tK(t,f+5,31)+1;f+=14;for(var P=new tE(S),E=new tE(19),T=0;T<A;++T)E[tD[T]]=tK(t,f+3*T,7);f+=3*A;for(var O=tJ(E),D=(1<<O)-1,B=tV(E,O,1),T=0;T<S;){var U=B[tK(t,f,D)];f+=15&U;var F=U>>4;if(F<16)P[T++]=F;else{var q=0,j=0;for(16==F?(j=3+tK(t,f,3),f+=2,q=P[T-1]):17==F?(j=3+tK(t,f,7),f+=3):18==F&&(j=11+tK(t,f,127),f+=7);j--;)P[T++]=q}}var V=P.subarray(0,x),Z=P.subarray(x);w=tJ(V),_=tJ(Z),v=tV(V,w,1),b=tV(Z,_,1)}else t2(1);else{var F=((f+7)/8|0)+4,W=t[F-4]|t[F-3]<<8,G=F+W;if(G>n){p&&t2(0);break}c&&u(m+W),o.set(t.subarray(F,G),m),e.b=m+=W,e.p=f=8*G,e.f=g;continue}if(f>C){p&&t2(0);break}}c&&u(m+131072);for(var Y=(1<<w)-1,J=(1<<_)-1,K=f;;K=f){var q=v[tQ(t,f)&Y],Q=q>>4;if((f+=15&q)>C){p&&t2(0);break}if(q||t2(2),Q<256)o[m++]=Q;else if(256==Q){K=f,v=null;break}else{var X=Q-254;if(Q>264){var T=Q-257,tt=tR[T];X=tK(t,f,(1<<tt)-1)+tH[T],f+=tt}var te=b[tQ(t,f)&J],ti=te>>4;te||t2(3),f+=15&te;var Z=tU[ti];if(ti>3){var tt=tO[ti];Z+=tQ(t,f)&(1<<tt)-1,f+=tt}if(f>C){p&&t2(0);break}c&&u(m+131072);var to=m+X;if(m<Z){var tr=a-Z,ts=Math.min(Z,to);for(tr+m<0&&t2(3);m<ts;++m)o[m]=r[tr+m]}for(;m<to;++m)o[m]=o[m-Z]}}e.l=v,e.p=K,e.b=m,e.f=g,v&&(g=1,e.m=w,e.d=b,e.n=_)}while(!g)return m!=o.length&&h?tX(o,0,m):o.subarray(0,m)},t3=new tE(0),t5="undefined"!=typeof TextDecoder&&new TextDecoder;try{t5.decode(t3,{stream:!0})}catch{}var t8=function(t){for(var e="",o=0;;){var r=t[o++],n=(r>127)+(r>223)+(r>239);if(o+n>t.length)return{s:e,r:tX(t,o-1)};n?3==n?e+=String.fromCharCode(55296|(r=((15&r)<<18|(63&t[o++])<<12|(63&t[o++])<<6|63&t[o++])-65536)>>10,56320|1023&r):1&n?e+=String.fromCharCode((31&r)<<6|63&t[o++]):e+=String.fromCharCode((15&r)<<12|(63&t[o++])<<6|63&t[o++]):e+=String.fromCharCode(r)}};function t9(t,e){if(e){for(var o="",r=0;r<t.length;r+=16384)o+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return o}if(t5)return t5.decode(t);var n=t8(t),a=n.s,o=n.r;return o.length&&t2(8),a}"function"==typeof queueMicrotask&&queueMicrotask;let t7=/\(([\s\S]*)\)/,t4=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,t6=/\s?=.*$/;function et(t,e=!1){let o,r,n,a,h,c=0,p=!1,u=!1,g=!0;null!=t&&({args:o,if:r,enter:n,exit:a,prefix:h,logThreshold:c=0,scoped:p=!0,singleLine:u=!1,timed:g=!0}=t),c>0&&(u=!0,g=!0),g&&(p=!0);let f=tp.isDebugging,m=e?tp.debug:tp.log,v=f?"debug":"info";return(t,e,b)=>{let w,_;if("function"==typeof b.value?(w=b.value,_="value"):"function"==typeof b.get&&(w=b.get,_="get"),null==w||null==_)throw Error("Not supported");let C=!1!==o?function(t){if("function"!=typeof t)throw Error("Not supported");if(0===t.length)return[];let e=Function.prototype.toString.call(t),o=(e=(e=e.replace(t4,"")||e).slice(0,e.indexOf("{"))).indexOf("("),r=e.indexOf(")");o=o>=0?o+1:0,r=r>0?r:e.indexOf("="),e=e.slice(o,r),e=`(${e})`;let n=t7.exec(e);return null!=n?n[1].split(",").map(t=>t.trim().replace(t6,"")):[]}(w):[];b[_]=function(...t){var b,_;let $,x;if(!f&&!tp.enabled(v)||null!=r&&!r.apply(this,t))return w.apply(this,t);let A=tb.current,S=tb.next(),P=this!=null?function(t){let e;if("function"==typeof t){if(null==(e=t.prototype?.constructor))return t.name}else e=t.constructor;let o=e?.name??"",r=o.indexOf("_");-1!==r&&(o=o.substring(r+1));let n=tg.get(e);return n?.(t,o)??o}(this):void 0,E=P?p?`${tw(S,A)} ${P}.${e}`:`${P}.${e}`:e;null!=h&&(E=h({id:S,instance:this,instanceName:P??"",name:e,prefix:E},...t)),p&&(b={scopeId:S,prevScopeId:A,prefix:E},b={prevScopeId:tb.current,...b},ty.set(S,b),$=b);let T=null!=n?n(...t):"";if(!1===o||0===t.length)x="",u||m.call(tp,`${E}${T}`);else{let e,r,n,a;x="";let h=-1;for(a of t){if(r=C[++h],null!=(e=o?.[h])){if("boolean"==typeof e)continue;if(x.length>0&&(x+=", "),"string"==typeof e){x+=e;continue}n=String(e(a))}else x.length>0&&(x+=", "),n=tp.toLoggable(a);x+=r?`${r}=${n}`:n}u||m.call(tp,x?`${E}${T}(${x})`:`${E}${T}`)}if(u||g||null!=a){let e,o=g?J():void 0,r=t=>{let e=void 0!==o?` [${tl(o)}ms]`:"";u?tp.error(t,x?`${E}${T}(${x})`:`${E}${T}`,$?.exitDetails?`failed${$.exitDetails}${e}`:`failed${e}`):tp.error(t,E,$?.exitDetails?`failed${$.exitDetails}${e}`:`failed${e}`),p&&ty.delete(S)};try{e=w.apply(this,t)}catch(t){throw r(t),t}let n=t=>{let e,r,n,h;if(null!=o?(e=tl(o))>500?(r=tp.warn,n=` [*${e}ms] (slow)`):(r=m,n=` [${e}ms]`):(n="",r=m),null!=a)if("function"==typeof a)try{h=a(t)}catch(t){h=`@log.exit error: ${t}`}else!0===a&&(h=`returned ${tp.toLoggable(t)}`);else $?.exitFailed?(h=$.exitFailed,r=(t,...e)=>tp.error(null,t,...e)):h="completed";u?(0===c||e>c)&&r.call(tp,x?`${E}${T}(${x}) ${h}${$?.exitDetails||""}${n}`:`${E}${T} ${h}${$?.exitDetails||""}${n}`):r.call(tp,x?`${E}(${x}) ${h}${$?.exitDetails||""}${n}`:`${E} ${h}${$?.exitDetails||""}${n}`),p&&ty.delete(S)};return null!=e&&null!=(_=e)&&(_ instanceof Promise||"function"==typeof _?.then)?e.then(n,r):n(e),e}return w.apply(this,t)}}}(()=>{let t;var e,o,r={975:t=>{function e(t){if("string"!=typeof t)throw TypeError("Path must be a string. Received "+JSON.stringify(t))}function o(t,e){for(var o,r="",n=0,a=-1,h=0,c=0;c<=t.length;++c){if(c<t.length)o=t.charCodeAt(c);else{if(47===o)break;o=47}if(47===o){if(a===c-1||1===h);else if(a!==c-1&&2===h){if(r.length<2||2!==n||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var p=r.lastIndexOf("/");if(p!==r.length-1){-1===p?(r="",n=0):n=(r=r.slice(0,p)).length-1-r.lastIndexOf("/"),a=c,h=0;continue}}else if(2===r.length||1===r.length){r="",n=0,a=c,h=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(a+1,c):r=t.slice(a+1,c),n=c-a-1;a=c,h=0}else 46===o&&-1!==h?++h:h=-1}return r}var r={resolve:function(){for(var t,r,n="",a=!1,h=arguments.length-1;h>=-1&&!a;h--)h>=0?t=arguments[h]:(void 0===r&&(r=process.cwd()),t=r),e(t),0!==t.length&&(n=t+"/"+n,a=47===t.charCodeAt(0));return n=o(n,!a),a?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return".";var r=47===t.charCodeAt(0),n=47===t.charCodeAt(t.length-1);return 0!==(t=o(t,!r)).length||r||(t="."),t.length>0&&n&&(t+="/"),r?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var t,o=0;o<arguments.length;++o){var n=arguments[o];e(n),n.length>0&&(void 0===t?t=n:t+="/"+n)}return void 0===t?".":r.normalize(t)},relative:function(t,o){if(e(t),e(o),t===o||(t=r.resolve(t))===(o=r.resolve(o)))return"";for(var n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var a=t.length,h=a-n,c=1;c<o.length&&47===o.charCodeAt(c);++c);for(var p=o.length-c,u=h<p?h:p,g=-1,f=0;f<=u;++f){if(f===u){if(p>u){if(47===o.charCodeAt(c+f))return o.slice(c+f+1);if(0===f)return o.slice(c+f)}else h>u&&(47===t.charCodeAt(n+f)?g=f:0===f&&(g=0));break}var m=t.charCodeAt(n+f);if(m!==o.charCodeAt(c+f))break;47===m&&(g=f)}var v="";for(f=n+g+1;f<=a;++f)f!==a&&47!==t.charCodeAt(f)||(0===v.length?v+="..":v+="/..");return v.length>0?v+o.slice(c+g):(c+=g,47===o.charCodeAt(c)&&++c,o.slice(c))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return".";for(var o=t.charCodeAt(0),r=47===o,n=-1,a=!0,h=t.length-1;h>=1;--h)if(47===(o=t.charCodeAt(h))){if(!a){n=h;break}}else a=!1;return -1===n?r?"/":".":r&&1===n?"//":t.slice(0,n)},basename:function(t,o){if(void 0!==o&&"string"!=typeof o)throw TypeError('"ext" argument must be a string');e(t);var r,n=0,a=-1,h=!0;if(void 0!==o&&o.length>0&&o.length<=t.length){if(o.length===t.length&&o===t)return"";var c=o.length-1,p=-1;for(r=t.length-1;r>=0;--r){var u=t.charCodeAt(r);if(47===u){if(!h){n=r+1;break}}else -1===p&&(h=!1,p=r+1),c>=0&&(u===o.charCodeAt(c)?-1==--c&&(a=r):(c=-1,a=p))}return n===a?a=p:-1===a&&(a=t.length),t.slice(n,a)}for(r=t.length-1;r>=0;--r)if(47===t.charCodeAt(r)){if(!h){n=r+1;break}}else -1===a&&(h=!1,a=r+1);return -1===a?"":t.slice(n,a)},extname:function(t){e(t);for(var o=-1,r=0,n=-1,a=!0,h=0,c=t.length-1;c>=0;--c){var p=t.charCodeAt(c);if(47!==p)-1===n&&(a=!1,n=c+1),46===p?-1===o?o=c:1!==h&&(h=1):-1!==o&&(h=-1);else if(!a){r=c+1;break}}return -1===o||-1===n||0===h||1===h&&o===n-1&&o===r+1?"":t.slice(o,n)},format:function(t){var e,o;if(null===t||"object"!=typeof t)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return e=t.dir||t.root,o=t.base||(t.name||"")+(t.ext||""),e?e===t.root?e+o:e+"/"+o:o},parse:function(t){e(t);var o={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return o;var r,n=t.charCodeAt(0),a=47===n;a?(o.root="/",r=1):r=0;for(var h=-1,c=0,p=-1,u=!0,g=t.length-1,f=0;g>=r;--g)if(47!==(n=t.charCodeAt(g)))-1===p&&(u=!1,p=g+1),46===n?-1===h?h=g:1!==f&&(f=1):-1!==h&&(f=-1);else if(!u){c=g+1;break}return -1===h||-1===p||0===f||1===f&&h===p-1&&h===c+1?-1!==p&&(o.base=o.name=0===c&&a?t.slice(1,p):t.slice(c,p)):(0===c&&a?(o.name=t.slice(1,h),o.base=t.slice(1,p)):(o.name=t.slice(c,h),o.base=t.slice(c,p)),o.ext=t.slice(h,p)),c>0?o.dir=t.slice(0,c-1):a&&(o.dir="/"),o},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,t.exports=r}},n={};function a(t){var e=n[t];if(void 0!==e)return e.exports;var o=n[t]={exports:{}};return r[t](o,o.exports,a),o.exports}a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var h={};(a.r(h),a.d(h,{URI:()=>l,Utils:()=>o}),"object"==typeof process)?t="win32"===process.platform:"object"==typeof navigator&&(t=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,p=/^\//,u=/^\/\//;function g(t,e){if(!t.scheme&&e)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);if(t.scheme&&!c.test(t.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(t.path){if(t.authority){if(!p.test(t.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(u.test(t.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(t){return t instanceof l||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString}scheme;authority;path;query;fragment;constructor(t,e,o,r,n,a=!1){"object"==typeof t?(this.scheme=t.scheme||"",this.authority=t.authority||"",this.path=t.path||"",this.query=t.query||"",this.fragment=t.fragment||""):(this.scheme=t||a?t:"file",this.authority=e||"",this.path=function(t,e){switch(t){case"https":case"http":case"file":e?"/"!==e[0]&&(e="/"+e):e="/"}return e}(this.scheme,o||""),this.query=r||"",this.fragment=n||"",g(this,a))}get fsPath(){return C(this,!1)}with(t){if(!t)return this;let{scheme:e,authority:o,path:r,query:n,fragment:a}=t;return void 0===e?e=this.scheme:null===e&&(e=""),void 0===o?o=this.authority:null===o&&(o=""),void 0===r?r=this.path:null===r&&(r=""),void 0===n?n=this.query:null===n&&(n=""),void 0===a?a=this.fragment:null===a&&(a=""),e===this.scheme&&o===this.authority&&r===this.path&&n===this.query&&a===this.fragment?this:new d(e,o,r,n,a)}static parse(t,e=!1){let o=f.exec(t);return o?new d(o[2]||"",A(o[4]||""),A(o[5]||""),A(o[7]||""),A(o[9]||""),e):new d("","","","","")}static file(e){let o="";if(t&&(e=e.replace(/\\/g,"/")),"/"===e[0]&&"/"===e[1]){let t=e.indexOf("/",2);-1===t?(o=e.substring(2),e="/"):(o=e.substring(2,t),e=e.substring(t)||"/")}return new d("file",o,e,"","")}static from(t){let e=new d(t.scheme,t.authority,t.path,t.query,t.fragment);return g(e,!0),e}toString(t=!1){return $(this,t)}toJSON(){return this}static revive(t){if(t){if(t instanceof l)return t;{let e=new d(t);return e._formatted=t.external,e._fsPath=t._sep===m?t.fsPath:null,e}}return t}};let m=t?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=C(this,!1)),this._fsPath}toString(t=!1){return t?$(this,!0):(this._formatted||(this._formatted=$(this,!1)),this._formatted)}toJSON(){let t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=m),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t}};let v={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function w(t,e,o){let r,n=-1;for(let a=0;a<t.length;a++){let h=t.charCodeAt(a);if(h>=97&&h<=122||h>=65&&h<=90||h>=48&&h<=57||45===h||46===h||95===h||126===h||e&&47===h||o&&91===h||o&&93===h||o&&58===h)-1!==n&&(r+=encodeURIComponent(t.substring(n,a)),n=-1),void 0!==r&&(r+=t.charAt(a));else{void 0===r&&(r=t.substr(0,a));let e=v[h];void 0!==e?(-1!==n&&(r+=encodeURIComponent(t.substring(n,a)),n=-1),r+=e):-1===n&&(n=a)}}return -1!==n&&(r+=encodeURIComponent(t.substring(n))),void 0!==r?r:t}function _(t){let e;for(let o=0;o<t.length;o++){let r=t.charCodeAt(o);35===r||63===r?(void 0===e&&(e=t.substr(0,o)),e+=v[r]):void 0!==e&&(e+=t[o])}return void 0!==e?e:t}function C(e,o){let r;return r=e.authority&&e.path.length>1&&"file"===e.scheme?`//${e.authority}${e.path}`:47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&90>=e.path.charCodeAt(1)||e.path.charCodeAt(1)>=97&&122>=e.path.charCodeAt(1))&&58===e.path.charCodeAt(2)?o?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,t&&(r=r.replace(/\//g,"\\")),r}function $(t,e){let o=e?_:w,r="",{scheme:n,authority:a,path:h,query:c,fragment:p}=t;if(n&&(r+=n,r+=":"),(a||"file"===n)&&(r+="/",r+="/"),a){let t=a.indexOf("@");if(-1!==t){let e=a.substr(0,t);a=a.substr(t+1),-1===(t=e.lastIndexOf(":"))?r+=o(e,!1,!1):(r+=o(e.substr(0,t),!1,!1),r+=":",r+=o(e.substr(t+1),!1,!0)),r+="@"}-1===(t=(a=a.toLowerCase()).lastIndexOf(":"))?r+=o(a,!1,!0):(r+=o(a.substr(0,t),!1,!0),r+=a.substr(t))}if(h){if(h.length>=3&&47===h.charCodeAt(0)&&58===h.charCodeAt(2)){let t=h.charCodeAt(1);t>=65&&t<=90&&(h=`/${String.fromCharCode(t+32)}:${h.substr(3)}`)}else if(h.length>=2&&58===h.charCodeAt(1)){let t=h.charCodeAt(0);t>=65&&t<=90&&(h=`${String.fromCharCode(t+32)}:${h.substr(2)}`)}r+=o(h,!0,!1)}return c&&(r+="?",r+=o(c,!1,!1)),p&&(r+="#",r+=e?p:w(p,!1,!1)),r}let x=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function A(t){return t.match(x)?t.replace(x,t=>(function t(e){try{return decodeURIComponent(e)}catch{return e.length>3?e.substr(0,3)+t(e.substr(3)):e}})(t)):t}var S=a(975);let P=S.posix||S;(e=o||(o={})).joinPath=function(t,...e){return t.with({path:P.join(t.path,...e)})},e.resolvePath=function(t,...e){let o=t.path,r=!1;"/"!==o[0]&&(o="/"+o,r=!0);let n=P.resolve(o,...e);return r&&"/"===n[0]&&!t.authority&&(n=n.substring(1)),t.with({path:n})},e.dirname=function(t){if(0===t.path.length||"/"===t.path)return t;let e=P.dirname(t.path);return 1===e.length&&46===e.charCodeAt(0)&&(e=""),t.with({path:e})},e.basename=function(t){return P.basename(t.path)},e.extname=function(t){return P.extname(t.path)},b=h})();let{URI:ee,Utils:ei}=b;function eo(t,e){return JSON.parse(t,(t,o)=>(function(t,e,o){let r=function(t){if("object"!=typeof t||null==t)return;let e=t.__ipc;if(null!=e)switch(e){case"date":return"number"==typeof t.value?t:void 0;case"promise":return"object"==typeof t.value&&"string"==typeof t.value.id&&"string"==typeof t.value.method?t:void 0;case"uri":return"object"==typeof t.value&&"string"==typeof t.value?.scheme?t:void 0;default:return}}(e);if(null==r)return e;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return o(r.value);case"uri":return ee.revive(r.value)}})(0,o,e))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(t,e,...o){let r;if(this._stopped=!1,this.logScope=null!=t&&"string"!=typeof t?t:t_(t??"",!1),r="boolean"==typeof e?.log?e.log?{}:void 0:e?.log??{},this.logLevel=e?.logLevel??"info",this.logProvider=e?.provider??tf,this._time=J(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[t,e]=J(this._time);return 1e3*t+Math.floor(e/1e6)}log(t){this.logCore(t,!1)}restart(t){this.logCore(t,!0),this._time=J(),this._stopped=!1}stop(t){this._stopped||(this.restart(t),this._stopped=!0)}logCore(t,e){if(!this.logProvider.enabled(this.logLevel))return;if(!e)return void this.logProvider.log(this.logLevel,this.logScope,`${t?.message??""}${t?.suffix??""}`);let[o,r]=J(this._time),n=1e3*o+Math.floor(r/1e6),a=t?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${n}ms]${t?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(t,e,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==e?t:[t,e]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(t){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let e=this.listeners.iterator(),o=e.next();!o.done;o=e.next())this._deliveryQueue.push([o.value,t]);for(;this._deliveryQueue.size>0;){let[t,e]=this._deliveryQueue.shift();try{"function"==typeof t?t(e):t[0].call(t[1],e)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let er={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(t){this.element=t,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,e){let o=new events_Node(t);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(e){let t=this._last;this._last=o,o.prev=t,t.next=o}else{let t=this._first;this._first=o,o.next=t,t.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===events_Node.Undefined)return;let t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==events_Node.Undefined&&t.next!==events_Node.Undefined){let e=t.prev;e.next=t.next,t.next.prev=e}else t.prev===events_Node.Undefined&&t.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):t.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):t.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let t,e=this._first;return{next:function(){return e===events_Node.Undefined?er:(null==t?t={done:!1,value:e.element}:t.value=e.element,e=e.next,t)}}}toArray(){let t=[];for(let e=this._first;e!==events_Node.Undefined;e=e.next)t.push(e.element);return t}};var es=Object.defineProperty,en=Object.getOwnPropertyDescriptor,ea=(t,e,o,r)=>{for(var n,a=r>1?void 0:r?en(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&es(e,o,a),a};function el(){return o??=acquireVsCodeApi()}let eh=tv();function ec(){return`webview:${eh.next()}`}let ed=class{constructor(t){this.appName=t,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=el(),this._disposable=v.on(window,"message",t=>this.onMessageReceived(t))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){var e,o,r,n;let a=ty.get(tb.current),h=t.data,c=function(t,e,...o){return(e?.provider??tf).enabled(e?.logLevel??"info")?new Stopwatch(t,e,...o):void 0}(t_(`(e=${h.id}|${h.method})`,a),{log:!1,logLevel:"debug"});if(h.compressed&&h.params instanceof Uint8Array){if("deflate"===h.compressed)try{h.params=t9((e=h.params,t0(e,{i:2},void 0,void 0)))}catch(t){h.params=t9(h.params)}else h.params=t9(h.params);c?.restart({message:`\u2022 decompressed (${h.compressed}) serialized params`})}if("string"==typeof h.params?(h.params=eo(h.params,t=>this.getResponsePromise(t.method,t.id)),c?.stop({message:`\u2022 deserialized params`})):null==h.params?c?.stop({message:`\u2022 no params`}):c?.stop({message:`\u2022 invalid params`}),o=` \u2022 ipc (host -> webview) duration=${Date.now()-h.timestamp}ms`,null!=a&&(null!=a.exitDetails&&null!=o?a.exitDetails+=o:a.exitDetails=o),null!=h.completionId){let t=(r=h.method,n=h.completionId,`${r}|${n}`);this._pendingHandlers.get(t)?.(h);return}this._onReceiveMessage.fire(h)}deserializeIpcData(t){return eo(t,t=>this.getResponsePromise(t.method,t.id))}sendCommand(t,e){let o=ec();this.postMessage({id:o,scope:t.scope,method:t.method,params:e,compressed:!1,timestamp:Date.now()})}async sendRequest(t,e){let o=ec(),r=this.getResponsePromise(t.response.method,o);return this.postMessage({id:o,scope:t.scope,method:t.method,params:e,compressed:!1,timestamp:Date.now(),completionId:o}),r}getResponsePromise(t,e){return new Promise((o,r)=>{var n,a;let h,c=(n=t,a=e,`${n}|${a}`);function p(){clearTimeout(h),h=void 0,this._pendingHandlers.delete(c)}h=setTimeout(()=>{p.call(this),r(Error(`Timed out waiting for completion of ${c}`))},(tp.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,t=>{if(p.call(this),t.method===U.method){let e=t.params;"rejected"===e.status?queueMicrotask(()=>r(Error(e.reason))):queueMicrotask(()=>o(e.value))}else queueMicrotask(()=>o(t.params))})})}setPersistedState(t){this._api.setState(t)}updatePersistedState(t){let e=this._api.getState();null!=e&&"object"==typeof e?(e={...e,...t},this._api.setState(e)):e=t,this.setPersistedState(e)}postMessage(t){this._api.postMessage(t)}};function ep(t,e){let o=Math.pow(10,e);return Math.round(t*o)/o}ea([et({args:{0:t=>`${t.data.id}|${t.data.method}`}},!0)],ed.prototype,"onMessageReceived",1),ea([et({args:{0:t=>t.method,1:!1}},!0)],ed.prototype,"sendCommand",1),ea([et({args:{0:t=>t.method,1:!1,2:!1}},!0)],ed.prototype,"sendRequest",1),ea([et({args:{0:t=>`${t.id}, method=${t.method}`}},!0)],ed.prototype,"postMessage",1),ed=ea([(f=t=>`${t.appName}(HostIpc)`,t=>void tg.set(t,f))],ed);let RGBA=class RGBA{constructor(t,e,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,t)),this.g=0|Math.min(255,Math.max(0,e)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ep(Math.max(Math.min(1,r),0),3)}static equals(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a}};let HSLA=class HSLA{constructor(t,e,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=ep(Math.max(Math.min(1,e),0),3),this.l=ep(Math.max(Math.min(1,o),0),3),this.a=ep(Math.max(Math.min(1,r),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.l===e.l&&t.a===e.a}static fromRGBA(t){let e=t.r/255,o=t.g/255,r=t.b/255,n=t.a,a=Math.max(e,o,r),h=Math.min(e,o,r),c=0,p=0,u=(h+a)/2,g=a-h;if(g>0){switch(p=Math.min(u<=.5?g/(2*u):g/(2-2*u),1),a){case e:c=(o-r)/g+6*(o<r);break;case o:c=(r-e)/g+2;break;case r:c=(e-o)/g+4}c*=60,c=Math.round(c)}return new HSLA(c,p,u,n)}static _hue2rgb(t,e,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?t+(e-t)*6*o:o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t}static toRGBA(t){let e,o,r,n=t.h/360,{s:a,l:h,a:c}=t;if(0===a)e=o=r=h;else{let t=h<.5?h*(1+a):h+a-h*a,c=2*h-t;e=HSLA._hue2rgb(c,t,n+1/3),o=HSLA._hue2rgb(c,t,n),r=HSLA._hue2rgb(c,t,n-1/3)}return new RGBA(Math.round(255*e),Math.round(255*o),Math.round(255*r),c)}};let HSVA=class HSVA{constructor(t,e,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=ep(Math.max(Math.min(1,e),0),3),this.v=ep(Math.max(Math.min(1,o),0),3),this.a=ep(Math.max(Math.min(1,r),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.v===e.v&&t.a===e.a}static fromRGBA(t){let e=t.r/255,o=t.g/255,r=t.b/255,n=Math.max(e,o,r),a=n-Math.min(e,o,r);return new HSVA(Math.round(60*(0===a?0:n===e?((o-r)/a%6+6)%6:n===o?(r-e)/a+2:(e-o)/a+4)),0===n?0:a/n,n,t.a)}static toRGBA(t){let{h:e,s:o,v:r,a:n}=t,a=r*o,h=a*(1-Math.abs(e/60%2-1)),c=r-a,[p,u,g]=[0,0,0];return e<60?(p=a,u=h):e<120?(p=h,u=a):e<180?(u=a,g=h):e<240?(u=h,g=a):e<300?(p=h,g=a):e<=360&&(p=a,g=h),new RGBA(p=Math.round((p+c)*255),u=Math.round((u+c)*255),g=Math.round((g+c)*255),n)}};function eu(t,e){return e.getPropertyValue(t).trim()}let Color=class Color{static from(t){return t instanceof Color?t:parseColor(t)||Color.red}static fromCssVariable(t,e){return parseColor(eu(t,e))||Color.red}static fromHex(t){return parseHexColor(t)||Color.red}static equals(t,e){return!t&&!e||!!t&&!!e&&t.equals(e)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(t){if(t)if(t instanceof RGBA)this.rgba=t;else if(t instanceof HSLA)this._hsla=t,this.rgba=HSLA.toRGBA(t);else if(t instanceof HSVA)this._hsva=t,this.rgba=HSVA.toRGBA(t);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(t){return null!=t&&!!t&&RGBA.equals(this.rgba,t.rgba)&&HSLA.equals(this.hsla,t.hsla)&&HSVA.equals(this.hsva,t.hsva)}getRelativeLuminance(){return ep(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(t){let e=t/255;return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}luminance(t){return luminance(this,t)}getContrastRatio(t){let e=this.getRelativeLuminance(),o=t.getRelativeLuminance();return e>o?(e+.05)/(o+.05):(o+.05)/(e+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(t){return this.getRelativeLuminance()>t.getRelativeLuminance()}isDarkerThan(t){return this.getRelativeLuminance()<t.getRelativeLuminance()}lighten(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:e,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(e,o,r,n*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let e=t.rgba,o=this.rgba.a,r=e.a,n=o+r*(1-o);return n<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*o/n+e.r*r*(1-o)/n,this.rgba.g*o/n+e.g*r*(1-o)/n,this.rgba.b*o/n+e.b*r*(1-o)/n,n))}mix(t,e){return mixColors(this,t,e)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:e,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(t.rgba.r-n*(t.rgba.r-e),t.rgba.g-n*(t.rgba.g-o),t.rgba.b-n*(t.rgba.b-r),1))}flatten(...t){let e=t.reduceRight((t,e)=>Color._flatten(e,t));return Color._flatten(this,e)}static _flatten(t,e){let o=1-t.rgba.a;return new Color(new RGBA(o*e.rgba.r+t.rgba.a*t.rgba.r,o*e.rgba.g+t.rgba.a*t.rgba.g,o*e.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(t){return t.isOpaque()?`#${eg(t.rgba.r)}${eg(t.rgba.g)}${eg(t.rgba.b)}`:`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${Number(t.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(t,e,o){if(t.isLighterThan(e))return t;o=o||.5;let r=t.getRelativeLuminance(),n=e.getRelativeLuminance();return o=o*(n-r)/n,t.lighten(o)}static getDarkerColor(t,e,o){if(t.isDarkerThan(e))return t;o=o||.5;let r=t.getRelativeLuminance(),n=e.getRelativeLuminance();return o=o*(r-n)/r,t.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function eg(t){let e=t.toString(16);return 2!==e.length?`0${e}`:e}let ef=new Emitter,em=ef.event;function ev(t){let e=document.documentElement,o=window.getComputedStyle(e),r=document.body.classList,n=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),a=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),h=eu("--vscode-editor-background",o),c=eu("--vscode-editor-foreground",o);return c||(c=eu("--vscode-foreground",o)),{colors:{background:h,foreground:c},computedStyle:o,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==t}}let App=class App{constructor(t){let e;this.appName=t;let o=[],r=ev();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(r),o.push(em(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(t),this.log("opening..."),this._api=el(),this._hostIpc=new ed(this.appName),o.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),o.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),o.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){let t=this.getState();this.state.timestamp>=(t?.timestamp??0)?this._api.setState(this.state):this.state=t}o.push(((e=new MutationObserver(t=>{ef.fire(ev(t))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&o.push(this._hostIpc.onReceiveMessage(t=>{switch(!0){case F.is(t):window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));break;case q.is(t):window.dispatchEvent(new CustomEvent(t.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(t)}})),this.sendRequest(E,{bootstrap:!1}),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),o.push(v.on(window,"pagehide",()=>{o?.forEach(t=>t.dispose()),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=void 0})),o.push(v.on(window,"gl-telemetry-fired",t=>{this._telemetry.sendEvent(t.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(t=>{t.href===t.title&&t.removeAttribute("title")}),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let t=function(t,e,o){let r,n,a,h,c,p,u,g,f,m,v=0,b="leading"===(p??="trailing")||"both"===p,w="trailing"===p||"both"===p;function _(){if(null!=r){v=Date.now();let e=r,o=m;return m=void 0,r=void 0,a=t.apply(o,e)}}function C(){null!=h&&(clearTimeout(h),h=void 0)}function $(){null!=c&&(clearTimeout(c),c=void 0)}function x(){C(),$(),m=void 0,r=void 0,n=void 0,v=0}function A(...t){if(g?.aborted)return;let e=Date.now();null!=f&&null!=r?r=f(r,t):(m=this,r=t);let o=null==h&&null==c;n=e,C();let p=Date.now();if(n=p,h=setTimeout(()=>{var t;let e,o;h=void 0,e=(t=Date.now())-(n??0),o=t-v,(null==n||e>=150||e<0||null!=u&&o>=u)&&w&&_(),x()},150),null!=u&&!c){let t=u-(p-v);t>0?c=setTimeout(()=>{c=void 0,w&&null!=r&&_(),v=Date.now()},t):(w&&null!=r&&_(),x())}return b&&o?_():a}return A.cancel=x,A.flush=function(){return C(),$(),_()},A.pending=function(){return null!=h||null!=c},g?.addEventListener("abort",x,{once:!0}),A}(t=>{this.sendCommand(T,t)},0);this.bindDisposables.push(v.on(document,"focusin",e=>{let o=e.composedPath().some(t=>"INPUT"===t.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,t({focused:!0,inputFocused:o}))}),v.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,t({focused:!1,inputFocused:!1}))}))}log(t,...e){this._logger.log(t,...e)}getState(){return this._api.getState()}sendCommand(t,e){this._hostIpc.sendCommand(t,e)}sendRequest(t,e){return this._hostIpc.sendRequest(t,e)}setState(t){this._api.setState(t)}};let eb=globalThis,ey=eb.ShadowRoot&&(void 0===eb.ShadyCSS||eb.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ew=Symbol(),e_=new WeakMap;let css_tag_n=class css_tag_n{constructor(t,e,o){if(this._$cssResult$=!0,o!==ew)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ey&&void 0===t){let o=void 0!==e&&1===e.length;o&&(t=e_.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&e_.set(e,t))}return t}toString(){return this.cssText}};let eC=t=>new css_tag_n("string"==typeof t?t:t+"",void 0,ew),e$=(t,...e)=>new css_tag_n(1===t.length?t[0]:e.reduce((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]),t,ew),ex=ey?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return eC(e)})(t):t,{is:ek,defineProperty:eA,getOwnPropertyDescriptor:eS,getOwnPropertyNames:eL,getOwnPropertySymbols:eP,getPrototypeOf:eE}=Object,eM=globalThis,eT=eM.trustedTypes,eR=eT?eT.emptyScript:"",eO=eM.reactiveElementPolyfillSupport,eD={toAttribute(t,e){switch(e){case Boolean:t=t?eR:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},eI=(t,e)=>!ek(t,e),eN={attribute:!0,type:String,converter:eD,reflect:!1,useDefault:!1,hasChanged:eI};Symbol.metadata??=Symbol("metadata"),eM.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=eN){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&eA(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){let{get:r,set:n}=eS(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){let a=r?.call(this);n?.call(this,e),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??eN}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=eE(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...eL(t),...eP(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,o]of e)this.elementProperties.set(t,o)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let o of new Set(t.flat(1/0).reverse()))e.unshift(ex(o));else void 0!==t&&e.push(ex(t));return e}static _$Eu(t,e){let o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(ey)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let o of e){let e=document.createElement("style"),r=eb.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){let o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:eD).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){let o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=o.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:eD;this._$Em=r;let a=n.fromAttribute(e,t.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){let r=this.constructor,n=this[t];if(!(((o??=r.getPropertyOptions(t)).hasChanged??eI)(n,e)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:n},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,o]of t){let{wrapped:t}=o,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,o,r)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,eO?.({ReactiveElement:y}),(eM.reactiveElementVersions??=[]).push("2.1.1");let eH=globalThis,ez=eH.trustedTypes,eB=ez?ez.createPolicy("lit-html",{createHTML:t=>t}):void 0,eU="$lit$",eF=`lit$${Math.random().toFixed(9).slice(2)}$`,eq="?"+eF,ej=`<${eq}>`,eV=document,eZ=()=>eV.createComment(""),eW=t=>null===t||"object"!=typeof t&&"function"!=typeof t,eG=Array.isArray,eY=t=>eG(t)||"function"==typeof t?.[Symbol.iterator],eJ=`[ 	
\f\r]`,eK=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eQ=/-->/g,eX=/>/g,e1=RegExp(`>|${eJ}(?:([^\\s"'>=/]+)(${eJ}*=${eJ}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e2=/'/g,e0=/"/g,e3=/^(?:script|style|textarea|title)$/i,e5=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),e8=e5(1),e9=(e5(2),e5(3),Symbol.for("lit-noChange")),e7=Symbol.for("lit-nothing"),e4=new WeakMap,e6=eV.createTreeWalker(eV,129);function it(t,e){if(!eG(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==eB?eB.createHTML(e):e}let ie=(t,e)=>{let o=t.length-1,r=[],n,a=2===e?"<svg>":3===e?"<math>":"",h=eK;for(let e=0;e<o;e++){let o=t[e],c,p,u=-1,g=0;for(;g<o.length&&(h.lastIndex=g,null!==(p=h.exec(o)));)g=h.lastIndex,h===eK?"!--"===p[1]?h=eQ:void 0!==p[1]?h=eX:void 0!==p[2]?(e3.test(p[2])&&(n=RegExp("</"+p[2],"g")),h=e1):void 0!==p[3]&&(h=e1):h===e1?">"===p[0]?(h=n??eK,u=-1):void 0===p[1]?u=-2:(u=h.lastIndex-p[2].length,c=p[1],h=void 0===p[3]?e1:'"'===p[3]?e0:e2):h===e0||h===e2?h=e1:h===eQ||h===eX?h=eK:(h=e1,n=void 0);let f=h===e1&&t[e+1].startsWith("/>")?" ":"";a+=h===eK?o+ej:u>=0?(r.push(c),o.slice(0,u)+eU+o.slice(u)+eF+f):o+eF+(-2===u?e:f)}return[it(t,a+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};let N=class N{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,a=0,h=t.length-1,c=this.parts,[p,u]=ie(t,e);if(this.el=N.createElement(p,o),e6.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=e6.nextNode())&&c.length<h;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(eU)){let e=u[a++],o=r.getAttribute(t).split(eF),h=/([.?@])?(.*)/.exec(e);c.push({type:1,index:n,name:h[2],strings:o,ctor:"."===h[1]?H:"?"===h[1]?I:"@"===h[1]?L:k}),r.removeAttribute(t)}else t.startsWith(eF)&&(c.push({type:6,index:n}),r.removeAttribute(t));if(e3.test(r.tagName)){let t=r.textContent.split(eF),e=t.length-1;if(e>0){r.textContent=ez?ez.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],eZ()),e6.nextNode(),c.push({type:2,index:++n});r.append(t[e],eZ())}}}else if(8===r.nodeType)if(r.data===eq)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(eF,t+1));)c.push({type:7,index:n}),t+=eF.length-1}n++}}static createElement(t,e){let o=eV.createElement("template");return o.innerHTML=t,o}};function ii(t,e,o=t,r){if(e===e9)return e;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=eW(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t))._$AT(t,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(e=ii(t,n._$AS(t,e.values),n,r)),e}let M=class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??eV).importNode(e,!0);e6.currentNode=r;let n=e6.nextNode(),a=0,h=0,c=o[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new R(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new z(n,this,t)),this._$AV.push(e),c=o[++h]}a!==c?.index&&(n=e6.nextNode(),a++)}return e6.currentNode=eV,r}p(t){let e=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=e7,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){eW(t=ii(this,t,e))?t===e7||null==t||""===t?(this._$AH!==e7&&this._$AR(),this._$AH=e7):t!==this._$AH&&t!==e9&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):eY(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==e7&&eW(this._$AH)?this._$AA.nextSibling.data=t:this.T(eV.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=N.createElement(it(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{let t=new M(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=e4.get(t.strings);return void 0===e&&e4.set(t.strings,e=new N(t)),e}k(t){eG(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,r=0;for(let n of t)r===e.length?e.push(o=new R(this.O(eZ()),this.O(eZ()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,n){this.type=1,this._$AH=e7,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=e7}_$AI(t,e=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!eW(t=ii(this,t,e,0))||t!==this._$AH&&t!==e9)&&(this._$AH=t);else{let r,h,c=t;for(t=n[0],r=0;r<n.length-1;r++)(h=ii(this,c[o+r],e,r))===e9&&(h=this._$AH[r]),a||=!eW(h)||h!==this._$AH[r],h===e7?t=e7:t!==e7&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}a&&!r&&this.j(t)}j(t){t===e7?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===e7?void 0:t}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==e7)}};let L=class L extends k{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){if((t=ii(this,t,e,0)??e7)===e9)return;let o=this._$AH,r=t===e7&&o!==e7||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==e7&&(o===e7||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let z=class z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ii(this,t)}};let io=eH.litHtmlPolyfillSupport;io?.(N,R),(eH.litHtmlVersions??=[]).push("3.3.1");let ir=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{let r=o?.renderBefore??e,n=r._$litPart$;if(void 0===n){let t=o?.renderBefore??null;r._$litPart$=n=new R(e.insertBefore(eZ(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return e9}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,ir.litElementHydrateSupport?.({LitElement:lit_element_i});let is=ir.litElementPolyfillSupport;is?.({LitElement:lit_element_i}),(ir.litElementVersions??=[]).push("4.2.1");let ia=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},il={attribute:!0,type:String,converter:eD,reflect:!1,hasChanged:eI};function ih(t){return(e,o)=>{let r;return"object"==typeof o?((t=il,e,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),a.set(o.name,t),"accessor"===r){let{name:r}=o;return{set(o){let n=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];e.call(this,o),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)})(t,e,o):(r=e.hasOwnProperty(o),e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0)}}let ic=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o);function id(t,e){return(o,r,n)=>{let a=e=>e.renderRoot?.querySelector(t)??null;if(e){let t,{get:e,set:h}="object"==typeof r?o:n??(t=Symbol(),{get(){return this[t]},set(e){this[t]=e}});return ic(o,r,{get(){let t=e.call(this);return void 0===t&&(null!==(t=a(this))||this.hasUpdated)&&h.call(this,t),t}})}return ic(o,r,{get(){return a(this)}})}}var ip=((m=ip||{})[m.VerificationRequired=-1]="VerificationRequired",m[m.Community=0]="Community",m[m.DeprecatedPreview=1]="DeprecatedPreview",m[m.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",m[m.Trial=3]="Trial",m[m.TrialExpired=4]="TrialExpired",m[m.TrialReactivationEligible=5]="TrialReactivationEligible",m[m.Paid=6]="Paid",m);let iu=["student","pro","advanced","teams","enterprise"],ig=e$`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;e$`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${ig}
	}
`;let im=e$`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`;e$`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,e$`
	:focus-visible {
		${im}
	}
`;let iv=e$`
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
`;e$`
	* {
		box-sizing: border-box;
	}
`;let ib=e$`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${im}
	}
	a:hover {
		text-decoration: underline;
	}
`,iy=e$`
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
`;e$`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let iw=new WeakMap;function i_(t,e){return function(o,r,n){let a=iw.get(o.constructor);null==a&&iw.set(o.constructor,a=[]),a.push({method:n.value,keys:Array.isArray(t)?t:[t],afterFirstUpdate:e?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(t,e,o){let r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:e});return this.dispatchEvent(r),r}update(t){let e=iw.get(this.constructor);if(null!=e)for(let{keys:o,method:r,afterFirstUpdate:n}of e){if(n&&!this.hasUpdated)continue;let e=o.filter(e=>t.has(e));e.length&&r.call(this,e)}super.update(t)}};var iC=e$`
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
`;let i$=new Set,ix=new Map,ik="ltr",iA="en",iS="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(iS){let t=new MutationObserver(iP);ik=document.documentElement.dir||"ltr",iA=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iL(...t){t.map(t=>{let e=t.$code.toLowerCase();ix.has(e)?ix.set(e,Object.assign(Object.assign({},ix.get(e)),t)):ix.set(e,t),r||(r=t)}),iP()}function iP(){iS&&(ik=document.documentElement.dir||"ltr",iA=document.documentElement.lang||navigator.language),[...i$.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){i$.add(this.host)}hostDisconnected(){i$.delete(this.host)}dir(){return`${this.host.dir||ik}`.toLowerCase()}lang(){return`${this.host.lang||iA}`.toLowerCase()}getTranslationData(t){var e,o;let r=new Intl.Locale(t.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),a=null!=(o=null==(e=null==r?void 0:r.region)?void 0:e.toLowerCase())?o:"",h=ix.get(`${n}-${a}`),c=ix.get(n);return{locale:r,language:n,region:a,primary:h,secondary:c}}exists(t,e){var o;let{primary:n,secondary:a}=this.getTranslationData(null!=(o=e.lang)?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!n&&!!n[t]||!!a&&!!a[t]||!!e.includeFallback&&!!r&&!!r[t]}term(t,...e){let o,{primary:n,secondary:a}=this.getTranslationData(this.lang());if(n&&n[t])o=n[t];else if(a&&a[t])o=a[t];else{if(!r||!r[t])return String(t);o=r[t]}return"function"==typeof o?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var iE={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};iL(iE);var iM=class extends LocalizeController{};iL(iE);var iT=e$`
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
`,iR=Object.defineProperty,iO=Object.defineProperties,iD=Object.getOwnPropertyDescriptor,iI=Object.getOwnPropertyDescriptors,iN=Object.getOwnPropertySymbols,iH=Object.prototype.hasOwnProperty,iz=Object.prototype.propertyIsEnumerable,iB=t=>{throw TypeError(t)},iU=(t,e,o)=>e in t?iR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,iF=(t,e)=>{for(var o in e||(e={}))iH.call(e,o)&&iU(t,o,e[o]);if(iN)for(var o of iN(e))iz.call(e,o)&&iU(t,o,e[o]);return t},iq=(t,e,o,r)=>{for(var n,a=r>1?void 0:r?iD(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&iR(e,o,a),a},ij=(t,e,o)=>e.has(t)||iB("Cannot "+o),iV=class extends lit_element_i{constructor(){let t;super(),(t=w).has(this)?iB("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,iF({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let r=customElements.get(t);if(!r){try{customElements.define(t,e,o)}catch(r){customElements.define(t,class extends e{},o)}return}let n=" (unknown version)",a=n;if("version"in e&&e.version&&(n=" v"+e.version),"version"in r&&r.version&&(a=" v"+r.version),n&&a&&n===a)return}attributeChangedCallback(t,e,o){let r,n;if(ij(this,r=w,"read from private field"),n?!n.call(this):!r.get(this)){let t,e;this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),ij(this,t=w,"write to private field"),e?e.call(this,!0):t.set(this,!0)}super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&null==this[o]&&(this[o]=e)})}};w=new WeakMap,iV.version="2.20.1",iV.dependencies={},iq([ih()],iV.prototype,"dir",2),iq([ih()],iV.prototype,"lang",2);let iZ=Math.min,iW=Math.max,iG=Math.round,iY=Math.floor,iJ=t=>({x:t,y:t}),iK={left:"right",right:"left",bottom:"top",top:"bottom"},iQ={start:"end",end:"start"};function iX(t,e){return"function"==typeof t?t(e):t}function i1(t){return t.split("-")[0]}function i2(t){return t.split("-")[1]}function i0(t){return"x"===t?"y":"x"}function i3(t){return"y"===t?"height":"width"}let i5=new Set(["top","bottom"]);function i8(t){return i5.has(i1(t))?"y":"x"}function i9(t){return t.replace(/start|end/g,t=>iQ[t])}let i7=["left","right"],i4=["right","left"],i6=["top","bottom"],ot=["bottom","top"];function oe(t){return t.replace(/left|right|bottom|top/g,t=>iK[t])}function oi(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function oo(t){let{x:e,y:o,width:r,height:n}=t;return{width:r,height:n,top:o,left:e,right:e+r,bottom:o+n,x:e,y:o}}function or(t,e,o){let r,{reference:n,floating:a}=t,h=i8(e),c=i0(i8(e)),p=i3(c),u=i1(e),g="y"===h,f=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,v=n[p]/2-a[p]/2;switch(u){case"top":r={x:f,y:n.y-a.height};break;case"bottom":r={x:f,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:m};break;case"left":r={x:n.x-a.width,y:m};break;default:r={x:n.x,y:n.y}}switch(i2(e)){case"start":r[c]-=v*(o&&g?-1:1);break;case"end":r[c]+=v*(o&&g?-1:1)}return r}let os=async(t,e,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:h}=o,c=a.filter(Boolean),p=await (null==h.isRTL?void 0:h.isRTL(e)),u=await h.getElementRects({reference:t,floating:e,strategy:n}),{x:g,y:f}=or(u,r,p),m=r,v={},b=0;for(let o=0;o<c.length;o++){let{name:a,fn:w}=c[o],{x:_,y:C,data:$,reset:x}=await w({x:g,y:f,initialPlacement:r,placement:m,strategy:n,middlewareData:v,rects:u,platform:h,elements:{reference:t,floating:e}});g=null!=_?_:g,f=null!=C?C:f,v={...v,[a]:{...v[a],...$}},x&&b<=50&&(b++,"object"==typeof x&&(x.placement&&(m=x.placement),x.rects&&(u=!0===x.rects?await h.getElementRects({reference:t,floating:e,strategy:n}):x.rects),{x:g,y:f}=or(u,m,p)),o=-1)}return{x:g,y:f,placement:m,strategy:n,middlewareData:v}};async function on(t,e){var o;void 0===e&&(e={});let{x:r,y:n,platform:a,rects:h,elements:c,strategy:p}=t,{boundary:u="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:m=!1,padding:v=0}=iX(e,t),b=oi(v),w=c[m?"floating"===f?"reference":"floating":f],_=oo(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(w)))||o?w:w.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:u,rootBoundary:g,strategy:p})),C="floating"===f?{x:r,y:n,width:h.floating.width,height:h.floating.height}:h.reference,$=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),x=await (null==a.isElement?void 0:a.isElement($))&&await (null==a.getScale?void 0:a.getScale($))||{x:1,y:1},A=oo(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:C,offsetParent:$,strategy:p}):C);return{top:(_.top-A.top+b.top)/x.y,bottom:(A.bottom-_.bottom+b.bottom)/x.y,left:(_.left-A.left+b.left)/x.x,right:(A.right-_.right+b.right)/x.x}}let oa=new Set(["left","top"]);async function ol(t,e){let{placement:o,platform:r,elements:n}=t,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),h=i1(o),c=i2(o),p="y"===i8(o),u=oa.has(h)?-1:1,g=a&&p?-1:1,f=iX(e,t),{mainAxis:m,crossAxis:v,alignmentAxis:b}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&"number"==typeof b&&(v="end"===c?-1*b:b),p?{x:v*g,y:m*u}:{x:m*u,y:v*g}}function oh(){return"undefined"!=typeof window}function oc(t){return ou(t)?(t.nodeName||"").toLowerCase():"#document"}function od(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function op(t){var e;return null==(e=(ou(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function ou(t){return!!oh()&&(t instanceof Node||t instanceof od(t).Node)}function og(t){return!!oh()&&(t instanceof Element||t instanceof od(t).Element)}function of(t){return!!oh()&&(t instanceof HTMLElement||t instanceof od(t).HTMLElement)}function om(t){return!!oh()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof od(t).ShadowRoot)}let ov=new Set(["inline","contents"]);function ob(t){let{overflow:e,overflowX:o,overflowY:r,display:n}=oP(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!ov.has(n)}let oy=new Set(["table","td","th"]),ow=[":popover-open",":modal"];function o_(t){return ow.some(e=>{try{return t.matches(e)}catch{return!1}})}let oC=["transform","translate","scale","rotate","perspective"],o$=["transform","translate","scale","rotate","perspective","filter"],ox=["paint","layout","strict","content"];function ok(t){let e=oA(),o=og(t)?oP(t):t;return oC.some(t=>!!o[t]&&"none"!==o[t])||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||o$.some(t=>(o.willChange||"").includes(t))||ox.some(t=>(o.contain||"").includes(t))}function oA(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let oS=new Set(["html","body","#document"]);function oL(t){return oS.has(oc(t))}function oP(t){return od(t).getComputedStyle(t)}function oE(t){return og(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function oM(t){if("html"===oc(t))return t;let e=t.assignedSlot||t.parentNode||om(t)&&t.host||op(t);return om(e)?e.host:e}function oT(t,e,o){var r;void 0===e&&(e=[]),void 0===o&&(o=!0);let n=function t(e){let o=oM(e);return oL(o)?e.ownerDocument?e.ownerDocument.body:e.body:of(o)&&ob(o)?o:t(o)}(t),a=n===(null==(r=t.ownerDocument)?void 0:r.body),h=od(n);if(a){let t=oR(h);return e.concat(h,h.visualViewport||[],ob(n)?n:[],t&&o?oT(t):[])}return e.concat(n,oT(n,[],o))}function oR(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function oO(t){let e=oP(t),o=parseFloat(e.width)||0,r=parseFloat(e.height)||0,n=of(t),a=n?t.offsetWidth:o,h=n?t.offsetHeight:r,c=iG(o)!==a||iG(r)!==h;return c&&(o=a,r=h),{width:o,height:r,$:c}}function oD(t){return og(t)?t:t.contextElement}function oI(t){let e=oD(t);if(!of(e))return iJ(1);let o=e.getBoundingClientRect(),{width:r,height:n,$:a}=oO(e),h=(a?iG(o.width):o.width)/r,c=(a?iG(o.height):o.height)/n;return h&&Number.isFinite(h)||(h=1),c&&Number.isFinite(c)||(c=1),{x:h,y:c}}let oN=iJ(0);function oH(t){let e=od(t);return oA()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:oN}function oz(t,e,o,r){var n;void 0===e&&(e=!1),void 0===o&&(o=!1);let a=t.getBoundingClientRect(),h=oD(t),c=iJ(1);e&&(r?og(r)&&(c=oI(r)):c=oI(t));let p=(void 0===(n=o)&&(n=!1),r&&(!n||r===od(h))&&n)?oH(h):iJ(0),u=(a.left+p.x)/c.x,g=(a.top+p.y)/c.y,f=a.width/c.x,m=a.height/c.y;if(h){let t=od(h),e=r&&og(r)?od(r):r,o=t,n=oR(o);for(;n&&r&&e!==o;){let t=oI(n),e=n.getBoundingClientRect(),r=oP(n),a=e.left+(n.clientLeft+parseFloat(r.paddingLeft))*t.x,h=e.top+(n.clientTop+parseFloat(r.paddingTop))*t.y;u*=t.x,g*=t.y,f*=t.x,m*=t.y,u+=a,g+=h,n=oR(o=od(n))}}return oo({width:f,height:m,x:u,y:g})}function oB(t,e){let o=oE(t).scrollLeft;return e?e.left+o:oz(op(t)).left+o}function oU(t,e){let o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-oB(t,o),y:o.top+e.scrollTop}}let oF=new Set(["absolute","fixed"]);function oq(t,e,o){var r;let n;if("viewport"===e)n=function(t,e){let o=od(t),r=op(t),n=o.visualViewport,a=r.clientWidth,h=r.clientHeight,c=0,p=0;if(n){a=n.width,h=n.height;let t=oA();(!t||t&&"fixed"===e)&&(c=n.offsetLeft,p=n.offsetTop)}let u=oB(r);if(u<=0){let t=r.ownerDocument,e=t.body,o=getComputedStyle(e),n="CSS1Compat"===t.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,h=Math.abs(r.clientWidth-e.clientWidth-n);h<=25&&(a-=h)}else u<=25&&(a+=u);return{width:a,height:h,x:c,y:p}}(t,o);else if("document"===e){let e,o,a,h,c,p,u;r=op(t),e=op(r),o=oE(r),a=r.ownerDocument.body,h=iW(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),c=iW(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),p=-o.scrollLeft+oB(r),u=-o.scrollTop,"rtl"===oP(a).direction&&(p+=iW(e.clientWidth,a.clientWidth)-h),n={width:h,height:c,x:p,y:u}}else if(og(e)){let t,r,a,h,c,p;r=(t=oz(e,!0,"fixed"===o)).top+e.clientTop,a=t.left+e.clientLeft,h=of(e)?oI(e):iJ(1),c=e.clientWidth*h.x,p=e.clientHeight*h.y,n={width:c,height:p,x:a*h.x,y:r*h.y}}else{let o=oH(t);n={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return oo(n)}function oj(t){return"static"===oP(t).position}function oV(t,e){if(!of(t)||"fixed"===oP(t).position)return null;if(e)return e(t);let o=t.offsetParent;return op(t)===o&&(o=o.ownerDocument.body),o}function oZ(t,e){var o;let r=od(t);if(o_(t))return r;if(!of(t)){let e=oM(t);for(;e&&!oL(e);){if(og(e)&&!oj(e))return e;e=oM(e)}return r}let n=oV(t,e);for(;n&&(o=n,oy.has(oc(o)))&&oj(n);)n=oV(n,e);return n&&oL(n)&&oj(n)&&!ok(n)?r:n||function(t){let e=oM(t);for(;of(e)&&!oL(e);){if(ok(e))return e;if(o_(e))break;e=oM(e)}return null}(t)||r}let oW=async function(t){let e=this.getOffsetParent||oZ,o=this.getDimensions,r=await o(t.floating);return{reference:function(t,e,o){let r=of(e),n=op(e),a="fixed"===o,h=oz(t,!0,a,e),c={scrollLeft:0,scrollTop:0},p=iJ(0);if(r||!r&&!a)if(("body"!==oc(e)||ob(n))&&(c=oE(e)),r){let t=oz(e,!0,a,e);p.x=t.x+e.clientLeft,p.y=t.y+e.clientTop}else n&&(p.x=oB(n));a&&!r&&n&&(p.x=oB(n));let u=!n||r||a?iJ(0):oU(n,c);return{x:h.left+c.scrollLeft-p.x-u.x,y:h.top+c.scrollTop-p.y-u.y,width:h.width,height:h.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},oG={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:r,strategy:n}=t,a="fixed"===n,h=op(r),c=!!e&&o_(e.floating);if(r===h||c&&a)return o;let p={scrollLeft:0,scrollTop:0},u=iJ(1),g=iJ(0),f=of(r);if((f||!f&&!a)&&(("body"!==oc(r)||ob(h))&&(p=oE(r)),of(r))){let t=oz(r);u=oI(r),g.x=t.x+r.clientLeft,g.y=t.y+r.clientTop}let m=!h||f||a?iJ(0):oU(h,p);return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-p.scrollLeft*u.x+g.x+m.x,y:o.y*u.y-p.scrollTop*u.y+g.y+m.y}},getDocumentElement:op,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:r,strategy:n}=t,a=[..."clippingAncestors"===o?o_(e)?[]:function(t,e){let o=e.get(t);if(o)return o;let r=oT(t,[],!1).filter(t=>og(t)&&"body"!==oc(t)),n=null,a="fixed"===oP(t).position,h=a?oM(t):t;for(;og(h)&&!oL(h);){let e=oP(h),o=ok(h);o||"fixed"!==e.position||(n=null),(a?!o&&!n:!o&&"static"===e.position&&!!n&&oF.has(n.position)||ob(h)&&!o&&function t(e,o){let r=oM(e);return!(r===o||!og(r)||oL(r))&&("fixed"===oP(r).position||t(r,o))}(t,h))?r=r.filter(t=>t!==h):n=e,h=oM(h)}return e.set(t,r),r}(e,this._c):[].concat(o),r],h=a[0],c=a.reduce((t,o)=>{let r=oq(e,o,n);return t.top=iW(r.top,t.top),t.right=iZ(r.right,t.right),t.bottom=iZ(r.bottom,t.bottom),t.left=iW(r.left,t.left),t},oq(e,h,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:oZ,getElementRects:oW,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:o}=oO(t);return{width:e,height:o}},getScale:oI,isElement:og,isRTL:function(t){return"rtl"===oP(t).direction}};function oY(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}let oJ=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,r;let n,a,{placement:h,rects:c,platform:p,elements:u}=e,{apply:g=()=>{},...f}=iX(t,e),m=await on(e,f),v=i1(h),b=i2(h),w="y"===i8(h),{width:_,height:C}=c.floating;"top"===v||"bottom"===v?(n=v,a=b===(await (null==p.isRTL?void 0:p.isRTL(u.floating))?"start":"end")?"left":"right"):(a=v,n="end"===b?"top":"bottom");let $=C-m.top-m.bottom,x=_-m.left-m.right,A=iZ(C-m[n],$),S=iZ(_-m[a],x),P=!e.middlewareData.shift,E=A,T=S;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(T=x),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(E=$),P&&!b){let t=iW(m.left,0),e=iW(m.right,0),o=iW(m.top,0),r=iW(m.bottom,0);w?T=_-2*(0!==t||0!==e?t+e:iW(m.left,m.right)):E=C-2*(0!==o||0!==r?o+r:iW(m.top,m.bottom))}await g({...e,availableWidth:T,availableHeight:E});let O=await p.getDimensions(u.floating);return _!==O.width||C!==O.height?{reset:{rects:!0}}:{}}}},oK=t=>(...e)=>({_$litDirective$:t,values:e});let directive_i=class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};let oQ=oK(class extends directive_i{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let o=t.element.classList;for(let t of this.st)t in e||(o.remove(t),this.st.delete(t));for(let t in e){let r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return e9}});function oX(t){var e=t;for(let t=e;t;t=o1(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=o1(e);t;t=o1(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if("contents"!==e.display&&("static"!==e.position||ok(e)||"BODY"===t.tagName))return t}return null}function o1(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var o2=class extends iV{constructor(){super(...arguments),this.localize=new iM(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,n=0,a=0,h=0,c=0,p=0,u=0,g=0;o?t.top<e.top?(r=t.left,n=t.bottom,a=t.right,h=t.bottom,c=e.left,p=e.top,u=e.right,g=e.top):(r=e.left,n=e.bottom,a=e.right,h=e.bottom,c=t.left,p=t.top,u=t.right,g=t.top):t.left<e.left?(r=t.right,n=t.top,a=e.left,h=e.top,c=t.right,p=t.bottom,u=e.left,g=e.bottom):(r=e.right,n=e.top,a=t.left,h=t.top,c=e.right,p=e.bottom,u=t.left,g=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${g}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else{var t;this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,o,r){let n;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:h=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:p="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,g=oD(t),f=a||h?[...g?oT(g):[],...oT(e)]:[];f.forEach(t=>{a&&t.addEventListener("scroll",o,{passive:!0}),h&&t.addEventListener("resize",o)});let m=g&&p?function(t,e){let o,r=null,n=op(t);function a(){var t;clearTimeout(o),null==(t=r)||t.disconnect(),r=null}return!function h(c,p){void 0===c&&(c=!1),void 0===p&&(p=1),a();let u=t.getBoundingClientRect(),{left:g,top:f,width:m,height:v}=u;if(c||e(),!m||!v)return;let b={rootMargin:-iY(f)+"px "+-iY(n.clientWidth-(g+m))+"px "+-iY(n.clientHeight-(f+v))+"px "+-iY(g)+"px",threshold:iW(0,iZ(1,p))||1},w=!0;function _(e){let r=e[0].intersectionRatio;if(r!==p){if(!w)return h();r?h(!1,r):o=setTimeout(()=>{h(!1,1e-7)},1e3)}1!==r||oY(u,t.getBoundingClientRect())||h(),w=!1}try{r=new IntersectionObserver(_,{...b,root:n.ownerDocument})}catch{r=new IntersectionObserver(_,b)}r.observe(t)}(!0),a}(g,o):null,v=-1,b=null;c&&(b=new ResizeObserver(t=>{let[r]=t;r&&r.target===g&&b&&(b.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var t;null==(t=b)||t.observe(e)})),o()}),g&&!u&&b.observe(g),b.observe(e));let w=u?oz(t):null;return u&&function e(){let r=oz(t);w&&!oY(w,r)&&o(),w=r,n=requestAnimationFrame(e)}(),o(),()=>{var t;f.forEach(t=>{a&&t.removeEventListener("scroll",o),h&&t.removeEventListener("resize",o)}),null==m||m(),null==(t=b)||t.disconnect(),b=null,u&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,e,o,r,n,a;let h,c,p,u;if(!this.active||!this.anchorEl)return;let g=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(e){var o,r;let{x:n,y:a,placement:h,middlewareData:c}=e,p=await ol(e,t);return h===(null==(o=c.offset)?void 0:o.placement)&&null!=(r=c.arrow)&&r.alignmentOffset?{}:{x:n+p.x,y:a+p.y,data:{...p,placement:h}}}}];this.sync?g.push(oJ({apply:({rects:t})=>{let e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&g.push({name:"flip",options:e={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var o,r,n,a,h,c,p,u;let g,f,m,{placement:v,middlewareData:b,rects:w,initialPlacement:_,platform:C,elements:$}=t,{mainAxis:x=!0,crossAxis:A=!0,fallbackPlacements:S,fallbackStrategy:P="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:T=!0,...O}=iX(e,t);if(null!=(o=b.arrow)&&o.alignmentOffset)return{};let D=i1(v),B=i8(_),U=i1(_)===_,F=await (null==C.isRTL?void 0:C.isRTL($.floating)),q=S||(U||!T?[oe(_)]:(g=oe(_),[i9(_),g,i9(g)])),j="none"!==E;!S&&j&&q.push(...(f=i2(_),m=function(t,e,o){switch(t){case"top":case"bottom":if(o)return e?i4:i7;return e?i7:i4;case"left":case"right":return e?i6:ot;default:return[]}}(i1(_),"start"===E,F),f&&(m=m.map(t=>t+"-"+f),T&&(m=m.concat(m.map(i9)))),m));let V=[_,...q],Z=await on(t,O),W=[],G=(null==(r=b.flip)?void 0:r.overflows)||[];if(x&&W.push(Z[D]),A){let t,e,o,r,n=(c=v,p=w,void 0===(u=F)&&(u=!1),t=i2(c),o=i3(e=i0(i8(c))),r="x"===e?t===(u?"end":"start")?"right":"left":"start"===t?"bottom":"top",p.reference[o]>p.floating[o]&&(r=oe(r)),[r,oe(r)]);W.push(Z[n[0]],Z[n[1]])}if(G=[...G,{placement:v,overflows:W}],!W.every(t=>t<=0)){let t=((null==(n=b.flip)?void 0:n.index)||0)+1,e=V[t];if(e&&("alignment"!==A||B===i8(e)||G.every(t=>i8(t.placement)!==B||t.overflows[0]>0)))return{data:{index:t,overflows:G},reset:{placement:e}};let o=null==(a=G.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:a.placement;if(!o)switch(P){case"bestFit":{let t=null==(h=G.filter(t=>{if(j){let e=i8(t.placement);return e===B||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:h[0];t&&(o=t);break}case"initialPlacement":o=_}if(v!==o)return{reset:{placement:o}}}return{}}}),this.shift&&g.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(t){let{x:e,y:r,placement:n}=t,{mainAxis:a=!0,crossAxis:h=!1,limiter:c={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...p}=iX(o,t),u={x:e,y:r},g=await on(t,p),f=i8(i1(n)),m=i0(f),v=u[m],b=u[f];if(a){let t="y"===m?"top":"left",e="y"===m?"bottom":"right",o=v+g[t],r=v-g[e];v=iW(o,iZ(v,r))}if(h){let t="y"===f?"top":"left",e="y"===f?"bottom":"right",o=b+g[t],r=b-g[e];b=iW(o,iZ(b,r))}let w=c.fn({...t,[m]:v,[f]:b});return{...w,data:{x:w.x-e,y:w.y-r,enabled:{[m]:a,[f]:h}}}}}),this.autoSize?g.push(oJ({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:h={element:this.arrowEl,padding:this.arrowPadding},async fn(t){let{x:e,y:o,placement:r,rects:n,platform:a,elements:c,middlewareData:p}=t,{element:u,padding:g=0}=iX(h,t)||{};if(null==u)return{};let f=oi(g),m={x:e,y:o},v=i0(i8(r)),b=i3(v),w=await a.getDimensions(u),_="y"===v,C=_?"clientHeight":"clientWidth",$=n.reference[b]+n.reference[v]-m[v]-n.floating[b],x=m[v]-n.reference[v],A=await (null==a.getOffsetParent?void 0:a.getOffsetParent(u)),S=A?A[C]:0;S&&await (null==a.isElement?void 0:a.isElement(A))||(S=c.floating[C]||n.floating[b]);let P=S/2-w[b]/2-1,E=iZ(f[_?"top":"left"],P),T=iZ(f[_?"bottom":"right"],P),O=S-w[b]-T,D=S/2-w[b]/2+($/2-x/2),B=iW(E,iZ(D,O)),U=!p.arrow&&null!=i2(r)&&D!==B&&n.reference[b]/2-(D<E?E:T)-w[b]/2<0,F=U?D<E?D-E:D-O:0;return{[v]:m[v]+F,data:{[v]:B,centerOffset:D-B-F,...U&&{alignmentOffset:F}},reset:U}}});let f="absolute"===this.strategy?t=>oG.getOffsetParent(t,oX):oG.getOffsetParent;(r=this.anchorEl,n=this.popup,a={placement:this.placement,middleware:g,strategy:this.strategy,platform:iO(iF({},oG),iI({getOffsetParent:f}))},c=new Map,u={...(p={platform:oG,...a}).platform,_c:c},os(r,n,{...p,platform:u})).then(({x:t,y:e,middlewareData:o,placement:r})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){let t=o.arrow.x,e=o.arrow.y,r="",h="",c="",p="";if("start"===this.arrowPlacement){let o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?o:"",p=n?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":o,p=n?o:"",c="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(p="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(p="number"==typeof t?`${t}px`:"",r="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:r,right:h,bottom:c,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return e8`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oQ({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${oQ({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?e8`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};o2.styles=[iT,iC],iq([id(".popup")],o2.prototype,"popup",2),iq([id(".popup__arrow")],o2.prototype,"arrowEl",2),iq([ih()],o2.prototype,"anchor",2),iq([ih({type:Boolean,reflect:!0})],o2.prototype,"active",2),iq([ih({reflect:!0})],o2.prototype,"placement",2),iq([ih({reflect:!0})],o2.prototype,"strategy",2),iq([ih({type:Number})],o2.prototype,"distance",2),iq([ih({type:Number})],o2.prototype,"skidding",2),iq([ih({type:Boolean})],o2.prototype,"arrow",2),iq([ih({attribute:"arrow-placement"})],o2.prototype,"arrowPlacement",2),iq([ih({attribute:"arrow-padding",type:Number})],o2.prototype,"arrowPadding",2),iq([ih({type:Boolean})],o2.prototype,"flip",2),iq([ih({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],o2.prototype,"flipFallbackPlacements",2),iq([ih({attribute:"flip-fallback-strategy"})],o2.prototype,"flipFallbackStrategy",2),iq([ih({type:Object})],o2.prototype,"flipBoundary",2),iq([ih({attribute:"flip-padding",type:Number})],o2.prototype,"flipPadding",2),iq([ih({type:Boolean})],o2.prototype,"shift",2),iq([ih({type:Object})],o2.prototype,"shiftBoundary",2),iq([ih({attribute:"shift-padding",type:Number})],o2.prototype,"shiftPadding",2),iq([ih({attribute:"auto-size"})],o2.prototype,"autoSize",2),iq([ih()],o2.prototype,"sync",2),iq([ih({type:Object})],o2.prototype,"autoSizeBoundary",2),iq([ih({attribute:"auto-size-padding",type:Number})],o2.prototype,"autoSizePadding",2),iq([ih({attribute:"hover-bridge",type:Boolean})],o2.prototype,"hoverBridge",2),o2.define("sl-popup");var o0=Object.defineProperty,o3=Object.getOwnPropertyDescriptor,o5=(t,e,o,r)=>{for(var n,a=r>1?void 0:r?o3(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&o0(e,o,a),a};let o8=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=t=>{this.open&&this.hasTrigger("focus")&&(t.relatedTarget&&this.contains(t.relatedTarget)||this.hide())},this.handleTriggerClick=t=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(t.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handlePopupBlur=t=>{let e=t.composedPath();e.includes(this)||e.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=t=>{let e=t.composedPath();e.includes(this)||e.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=tL(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),t)}},this.handleMouseOut=t=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=t.composedPath();if(e[e.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=tL(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(t){for(let e of o8.openPopovers)e===t||e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINS||e.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),o8.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return e8`<sl-popup
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
		</sl-popup>`}async show(t){if((null==this._triggeredBy||"hover"!==t)&&(this._triggeredBy=t),!this.open)return o8.closeOthers(this),this.open=!0,o8.openPopovers.add(this),tP(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,o8.openPopovers.delete(this),tP(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(t){return this.trigger.split(" ").includes(t)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};o8.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},o8.openPopovers=new Set,o8.styles=[iy,e$`
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
		`],o5([id("#popover")],o8.prototype,"body",2),o5([id("sl-popup")],o8.prototype,"popup",2),o5([ih({reflect:!0})],o8.prototype,"placement",2),o5([ih({type:Object})],o8.prototype,"anchor",2),o5([ih({reflect:!0,type:Boolean})],o8.prototype,"disabled",2),o5([ih({type:Number})],o8.prototype,"distance",2),o5([ih({reflect:!0,type:Boolean})],o8.prototype,"open",2),o5([ih({reflect:!0,type:Boolean})],o8.prototype,"arrow",2),o5([ih({type:Number})],o8.prototype,"skidding",2),o5([ih()],o8.prototype,"trigger",2),o5([ih({type:Boolean})],o8.prototype,"hoist",2),o5([ih({reflect:!0})],o8.prototype,"appearance",2),o5([i_("open",{afterFirstUpdate:!0})],o8.prototype,"handleOpenChange",1),o5([i_(["distance","hoist","placement","skidding"])],o8.prototype,"handleOptionsChange",1),o5([i_("disabled")],o8.prototype,"handleDisabledChange",1),o8=o5([ia("gl-popover")],o8);var o9=new Map,o7=new WeakMap;function o4(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function o6(t,e){o9.set(t,null!=e?e:{keyframes:[],options:{duration:0}})}function rt(t,e,o){let r=o7.get(t);if(null==r?void 0:r[e])return o4(r[e],o.dir);let n=o9.get(e);return n?o4(n,o.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(t){if(super(t),this.it=e7,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===e7||null==t)return this._t=void 0,this.it=t;if(t===e9)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let re=oK(unsafe_html_e);var ri=e$`
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
`;function ro(t,e){return new Promise(o=>{t.addEventListener(e,function r(n){n.target===t&&(t.removeEventListener(e,r),o())})})}function rr(t,e,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let n=t.animate(e,iO(iF({},o),iI({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration})));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})})}function rs(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function rn(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function ra(t,e){let o=iF({waitUntilFirstUpdate:!1},e);return(e,r)=>{let{update:n}=e,a=Array.isArray(t)?t:[t];e.update=function(t){a.forEach(e=>{if(t.has(e)){let n=t.get(e),a=this[e];n!==a&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](n,a)}}),n.call(this,t)}}}var rl=class extends iV{constructor(){super(),this.localize=new iM(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=rs(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=rs(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await rn(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:o}=rt(this,"tooltip.show",{dir:this.localize.dir()});await rr(this.popup.popup,e,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await rn(this.body);let{keyframes:t,options:o}=rt(this,"tooltip.hide",{dir:this.localize.dir()});await rr(this.popup.popup,t,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ro(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ro(this,"sl-after-hide")}render(){return e8`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oQ({tooltip:!0,"tooltip--open":this.open})}
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
    `}};rl.styles=[iT,ri],rl.dependencies={"sl-popup":o2},iq([id("slot:not([name])")],rl.prototype,"defaultSlot",2),iq([id(".tooltip__body")],rl.prototype,"body",2),iq([id("sl-popup")],rl.prototype,"popup",2),iq([ih()],rl.prototype,"content",2),iq([ih()],rl.prototype,"placement",2),iq([ih({type:Boolean,reflect:!0})],rl.prototype,"disabled",2),iq([ih({type:Number})],rl.prototype,"distance",2),iq([ih({type:Boolean,reflect:!0})],rl.prototype,"open",2),iq([ih({type:Number})],rl.prototype,"skidding",2),iq([ih()],rl.prototype,"trigger",2),iq([ih({type:Boolean})],rl.prototype,"hoist",2),iq([ra("open",{waitUntilFirstUpdate:!0})],rl.prototype,"handleOpenChange",1),iq([ra(["content","distance","hoist","placement","skidding"])],rl.prototype,"handleOptionsChange",1),iq([ra("disabled")],rl.prototype,"handleDisabledChange",1),o6("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),o6("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),rl.define("sl-tooltip");var rh=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,rd=(t,e,o,r)=>{for(var n,a=r>1?void 0:r?rc(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&rh(e,o,a),a};o6("tooltip.show",null),o6("tooltip.hide",null);let rp=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(t=>{for(let e of t)if("attributes"===e.type&&"data-current-placement"===e.attributeName){let t=e.target.getAttribute("data-current-placement");t?this.setAttribute("data-current-placement",t):this.removeAttribute("data-current-placement")}});let t=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;t&&this.observer.observe(t,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var t;return e8`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??e7}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${t=this.content,t?.includes(`
`)?re(t.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):t}</slot>
			</div>
		</sl-tooltip>`}};rp.styles=e$`
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
	`,rd([ih()],rp.prototype,"content",2),rd([ih({reflect:!0})],rp.prototype,"placement",2),rd([ih({type:Boolean})],rp.prototype,"disabled",2),rd([ih({type:Number})],rp.prototype,"distance",2),rd([ih({type:Boolean})],rp.prototype,"hoist",2),rp=rd([ia("gl-tooltip")],rp);let{I:ru}={M:eU,P:eF,A:eq,C:1,L:ie,R:M,D:eY,V:ii,I:R,H:k,N:I,U:L,B:H,F:z},rg=(t,e)=>{let o=t._$AN;if(void 0===o)return!1;for(let t of o)t._$AO?.(e,!1),rg(t,e);return!0},rf=t=>{let e,o;do{if(void 0===(e=t._$AM))break;(o=e._$AN).delete(t),t=e}while(0===o?.size)},rm=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),ry(e)}};function rv(t){void 0!==this._$AN?(rf(this),this._$AM=t,rm(this)):this._$AM=t}function rb(t,e=!1,o=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(r))for(let t=o;t<r.length;t++)rg(r[t],!1),rf(r[t]);else null!=r&&(rg(r,!1),rf(r));else rg(this,t)}let ry=t=>{2==t.type&&(t._$AP??=rb,t._$AQ??=rv)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),rm(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(rg(this,t),rf(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let rw=t=>null!==t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...t){return t.find(t=>!rw(t))??e9}update(t,e){let o=this._$Cbt,r=o.length;this._$Cbt=e;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){let h=e[t];if(!rw(h))return this._$Cwt=t,h;t<r&&h===o[t]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(h).then(async t=>{for(;a.get();)await a.get();let e=n.deref();if(void 0!==e){let o=e._$Cbt.indexOf(h);o>-1&&o<e._$Cwt&&(e._$Cwt=o,e.setValue(t))}}))}return e9}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let r_=oK(until_c);var rC=Object.defineProperty,r$=Object.getOwnPropertyDescriptor,rx=(t,e,o,r)=>{for(var n,a=r>1?void 0:r?r$(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&rC(e,o,a),a};let rk=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(t){this._hasPromo=t}render(){return e8`${r_(this.promoPromise?.then(t=>this.renderPromo(t)),e7)}`}renderPromo(t){if(!t?.content?.webview){this.hasPromo=!1;return}let e=t.content.webview;switch(this.type){case"icon":return e8`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(e.info)return this.hasPromo=!0,e8`<p class="promo" part="text">${re(e.info.html)}</p>`;break;case"link":if(e.link)return this.hasPromo=!0,e8`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(t)}"
						title="${e.link.title??e7}"
						>${re(e.link.html)}</a
					>`}return this.hasPromo=!1,e7}getCommandUrl(t){let e;return t?.content?.webview?.link?.command?.startsWith("command:")&&(e=t.content.webview.link.command.substring(8)),P(e??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};rk.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rk.styles=[e$`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${im}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],rx([id('a,button,[tabindex="0"]')],rk.prototype,"_focusable",2),rx([ih({type:Object})],rk.prototype,"promoPromise",2),rx([ih({type:Object})],rk.prototype,"source",2),rx([ih({reflect:!0,type:String})],rk.prototype,"type",2),rx([ih({type:Boolean,reflect:!0,attribute:"has-promo"})],rk.prototype,"hasPromo",1),rk=rx([ia("gl-promo")],rk);var rA=Object.defineProperty,rS=Object.getOwnPropertyDescriptor,rL=(t,e,o,r)=>{for(var n,a=r>1?void 0:r?rS(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&rA(e,o,a),a};let rP=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var t,e;return null==this.subscription?0:(t=this.subscription,e=t.plan.effective.expiresOn,(null!=e?function(t,e,o,r){let n=("number"==typeof e?e:e.getTime())-("number"==typeof t?t:t.getTime()),a=r??Math.floor;switch(o){case"days":return a(n/864e5);case"hours":return a(n/36e5);case"minutes":return a(n/6e4);case"seconds":return a(n/1e3);default:return n}}(Date.now(),new Date(e),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return e8`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let t=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===ip.VerificationRequired)return e8`${t} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var e,o;if(e=this.subscription.plan.actual.id,iu.includes(e)||this.cloud&&null!=this.subscription.account)return e8`${t} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(o=this.subscription).state?o.state===ip.Trial:o.plan.actual.id!==o.plan.effective.id)return e8`${t} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return t}renderPopoverHeader(){let t=e8`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===ip.Paid?e8`<div class="popup-header">${t}</div>`:this.cloud?this.preview?e8`<div class="popup-header">
					${t}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:e8`<div class="popup-header">
				${t}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?e8`<div class="popup-header">
				${t}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:e8`<div class="popup-header">
			${t}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let t;if(null==this.subscription)return e7;switch(this.state){case ip.Paid:var e;t=e8`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${P("gitlens.showAccountView")}"
							>${e=this.subscription?.plan.actual.id??"pro",`GitLens ${function(t){switch(t){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(e)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case ip.VerificationRequired:t=e8`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${P("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${P("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case ip.Trial:{let e=this.daysRemaining;t=e8`<p>
						You have
						<strong>${e<1?"<1 day":th("day",e,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case ip.TrialExpired:t=e8`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(e8`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case ip.TrialReactivationEligible:t=e8`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${th("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${P("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${th("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:t=e8`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return e8`<div class="popup-content">${t}</div>`}renderStartTrialActions(){return e8`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${P("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${P("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(t){return e8`<div class="actions">
			${t??e7}
			<gl-button
				density="tight"
				href="${P("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return e8`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};rP.styles=[iv,ib,e$`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus-visible {
				${eC(im)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],rL([ih({type:Boolean})],rP.prototype,"cloud",2),rL([ih({reflect:!0})],rP.prototype,"placement",2),rL([ih({type:Boolean})],rP.prototype,"preview",2),rL([function({context:t,subscribe:e}){return(o,r)=>{"object"==typeof r?r.addInitializer(function(){new s(this,{context:t,callback:t=>{o.set.call(this,t)},subscribe:e})}):o.constructor.addInitializer(o=>{new s(o,{context:t,callback:t=>{o[r]=t},subscribe:e})})}}({context:"promos"})],rP.prototype,"promos",2),rL([ih({type:Object})],rP.prototype,"source",2),rL([ih({attribute:!1})],rP.prototype,"subscription",2),rP=rL([ia("gl-feature-badge")],rP);var rE=Object.defineProperty,rM=Object.getOwnPropertyDescriptor;let rT=class extends lit_element_i{render(){return e8`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				style="mix-blend-mode:soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				style="mix-blend-mode:soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};rT.styles=[e$`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}
		`],rT=((t,e,o,r)=>{for(var n,a=r>1?void 0:r?rM(e,o):e,h=t.length-1;h>=0;h--)(n=t[h])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&rE(e,o,a),a})([ia("gitlens-logo")],rT);let rR=new Date().getTimezoneOffset()/60*100,rO=new Date(`Wed Jul 25 2018 19:18:00 GMT${rR>=0?"-":"+"}${String(Math.abs(rR)).padStart(4,"0")}`);let SettingsApp=class SettingsApp extends App{constructor(){super("SettingsApp"),this._scopes=null,this._activeSection="general",this._changes=Object.create(null),this._sections=new Map,this._updating=!1}onInitialize(){let t=document.getElementById("scopes");if(null!=t&&this.state.scopes.length>1){for(let[e,o]of this.state.scopes){let r=document.createElement("option");r.value=e,r.innerHTML=o,this.state.scope===e&&(r.selected=!0),t.appendChild(r)}t.parentElement.parentElement.classList.remove("hidden"),this._scopes=t}let e=83,o=document.querySelector(".hero__area--sticky");for(let t of(null!=o&&(e=o.clientHeight),this._observer=new IntersectionObserver(this.onObserver.bind(this),{rootMargin:`-${e}px 0px 0px 0px`}),document.querySelectorAll("section[id]>.section__header")))this._sections.set(t.parentElement.id,!1),this._observer.observe(t);for(let t of document.querySelectorAll("[data-setting]"))for(let e of(t.title||"checkbox"!==t.type||(t.title=`Setting name: "gitlens.${t.name}"`),document.querySelectorAll(`label[for="${t.id}"]`)))e.title||(e.title=`Setting name: "gitlens.${t.name}"`)}onBind(){let t=super.onBind?.()??[];return t.push(v.on("input[type=checkbox][data-setting]","change",(t,e)=>this.onInputChecked(e)),v.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(t,e)=>this.onInputBlurred(e)),v.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(t,e)=>this.onInputFocused(e)),v.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(t,e)=>this.onInputChanged(e)),v.on("button[data-setting-clear]","click",(t,e)=>this.onButtonClicked(e)),v.on("select[data-setting]","change",(t,e)=>this.onInputSelected(e)),v.on(".token[data-token]","mousedown",(t,e)=>this.onTokenMouseDown(e,t)),v.on(".section--collapsible>.section__header","click",(t,e)=>this.onSectionHeaderClicked(e,t)),v.on(".setting--expandable .setting__expander","click",(t,e)=>this.onSettingExpanderCicked(e,t)),v.on('a[data-action="jump"]',"mousedown",t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()}),v.on('a[data-action="jump"]',"click",(t,e)=>this.onJumpToLinkClicked(e,t)),v.on("[data-action]","mousedown",t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()}),v.on("[data-action]","click",(t,e)=>this.onActionLinkClicked(e,t))),t}onMessageReceived(t){switch(!0){case W.is(t):this.scrollToAnchor(t.params.anchor,t.params.scrollBehavior);break;case j.is(t):this.state.config=t.params.config,this.state.customSettings=t.params.customSettings,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState();break;case G.is(t):this.state.hasAccount=t.params.hasAccount,this.setState(this.state),this.renderAutolinkIntegration();break;case Y.is(t):t.params.integrationId===S.Jira?this.state.hasConnectedJira=t.params.connected:t.params.integrationId===S.Linear&&(this.state.hasConnectedLinear=t.params.connected),this.setState(this.state),this.renderAutolinkIntegration();break;default:super.onMessageReceived?.(t)}}applyChanges(){this.sendCommand(D,{changes:{...this._changes},removes:Object.keys(this._changes).filter(t=>void 0===this._changes[t]),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return null!=this._scopes?this._scopes.options[this._scopes.selectedIndex].value:"user"}onInputBlurred(t){this.log(`onInputBlurred(${t.name}): value=${t.value})`);let e=document.getElementById(`${t.name}.popup`);null!=e&&e.classList.add("hidden");let o=t.value;if((null==o||0===o.length)&&void 0===(o=t.dataset.defaultValue)&&(o=null),"arrayObject"===t.dataset.settingType){let e=t.name.split("."),r=e[0],n=parseInt(e[1],10),a=e.slice(2),h=this.getSettingValue(r);if(null==o&&(void 0===h||h?.length===0))void 0!==h&&(this._changes[r]=void 0);else{let e=(h=h??[])[n];(null!=o||null==o&&void 0!==e)&&(void 0===e&&(e=Object.create(null),h[n]=e),rI(e,a.join("."),"number"===t.type&&null!=o?Number(o):o),this._changes[r]=h)}}else this._changes[t.name]="number"===t.type&&null!=o?Number(o):o;this.applyChanges()}onButtonClicked(t){if("arrayObject"===t.dataset.settingType){let e=t.name.split("."),o=e[0],r=this.getSettingValue(o);if(void 0===r)return;let n=parseInt(e[1],10);null!=r[n]&&(r.splice(n,1),this._changes[o]=r.length?r:void 0,this.applyChanges())}}onInputChanged(t){if(!this._updating)for(let e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){if(!this._updating){switch(this.log(`onInputChecked(${t.name}): checked=${t.checked}, value=${t.value})`),t.dataset.settingType){case"object":{let e=t.name.split("."),o=e.splice(0,1)[0],r=this.getSettingValue(o)??Object.create(null);t.checked?rI(r,e.join("."),rN(t.value)):rI(r,e.join("."),!1),this._changes[o]=r;break}case"array":{let e=this.getSettingValue(t.name)??[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{let o=e.indexOf(t.value);-1!==o&&e.splice(o,1)}this._changes[t.name]=e}break}case"arrayObject":{let e=t.name.split("."),o=e[0],r=parseInt(e[1],10),n=e.slice(2),a=this.getSettingValue(o)??[],h=a[r]??Object.create(null);void 0===a[r]&&(a[r]=h),t.checked?rI(a[r],n.join("."),rN(t.value)):rI(a[r],n.join("."),!1),this._changes[o]=a;break}case"custom":this._changes[t.name]=t.checked;break;default:t.checked?this._changes[t.name]=rN(t.value):this._changes[t.name]=null!=t.dataset.valueOff&&t.dataset.valueOff}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`onInputFocused(${t.name}): value=${t.value}`);let e=document.getElementById(`${t.name}.popup`);if(null!=e){if(0===e.childElementCount){let t=document.querySelector("#token-popup")?.content.cloneNode(!0);null!=t&&e.appendChild(t)}e.classList.remove("hidden")}}onInputSelected(t){if(t===this._scopes||this._updating)return;let e=t.options[t.selectedIndex].value;this.log(`onInputSelected(${t.name}): value=${e}`),this._changes[t.name]=rD(e),this.applyChanges()}onTokenMouseDown(t,e){if(this._updating)return;this.log(`onTokenMouseDown(${t.id})`);let o=t.closest(".setting");if(null==o)return;let r=o.querySelector("input[type=text], input:not([type])");if(null==r)return;let n=`\${${t.dataset.token}}`,a=r.selectionStart;null!=a?(r.value=`${r.value.substring(0,a)}${n}${r.value.substring(r.selectionEnd??a)}`,a+=n.length):a=r.value.length,r.focus(),r.setSelectionRange(a,a),a===r.value.length&&(r.scrollLeft=r.scrollWidth),setTimeout(()=>this.onInputChanged(r),0),setTimeout(()=>r.focus(),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}scrollToAnchor(t,e,o){o=83;let r=document.querySelector(".hero__area--sticky");null!=r&&(o=r.clientHeight);let n=document.getElementById(t);null!=n&&this.scrollTo(n,e,o)}scrollTo(t,e,o){let r=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(o??0);window.scrollTo({top:r,behavior:e??"smooth"});let n=()=>{null!=this._scrollTimer&&clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(()=>{(window.removeEventListener("scroll",n),2>Math.abs(r-(t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(o??0))))?t.focus({preventScroll:!0}):this.scrollTo(t,e,o)},50)};window.addEventListener("scroll",n,!1)}evaluateStateExpression(t,e){let o=!1;for(let r of t.trim().split("&")){let[t,n,a]=function(t){let[e,o,r]=t.trim().split(/([=+!])/);return[e.trim(),void 0!==o?o.trim():"=",void 0!==r?r.trim():r]}(r);switch(n){case"=":{let r=e[t];void 0===r&&(void 0===(r=this.getSettingValue(t))||null===r&&"string"!=typeof a)&&(r=!1),o=void 0!==a?a===String(r):!!r;break}case"!":{let r=e[t];void 0===r&&(void 0===(r=this.getSettingValue(t))||null===r&&"string"!=typeof a)&&(r=!1),o=void 0!==a?a!==String(r):!r;break}case"+":if(void 0!==a){let e=this.getSettingValue(t);o=void 0!==e&&e.includes(a.toString())}}if(!o)break}return o}getCustomSettingValue(t){return this.state.customSettings?.[t]}getSettingValue(t){var e;let o=this.getCustomSettingValue(t);return null!=o?o:(e=this.state.config,t.split(".").reduce((t={},e)=>null==t?void 0:t[e],e))}updateState(){var e;let{version:o}=this.state;document.getElementById("version").textContent=o;let r=document.activeElement?.id;this.renderAutolinkIntegration(),this.renderAutolinks(),r?.startsWith("autolinks.")&&queueMicrotask(()=>{document.getElementById(r)?.focus()}),this._updating=!0,t="string"==typeof(e=this.state.config.defaultDateLocale)?"system"===e||0===e.trim().length?void 0:[e]:e??void 0,to.clear(),tr.clear();try{for(let t of document.querySelectorAll("input[type=checkbox][data-setting]"))if("custom"===t.dataset.settingType)t.checked=this.getCustomSettingValue(t.name)??!1;else if("array"===t.dataset.settingType)t.checked=(this.getSettingValue(t.name)??[]).includes(t.value);else if(null!=t.dataset.valueOff){let e=this.getSettingValue(t.name);t.checked=t.dataset.valueOff!==e,t.indeterminate=null===e}else t.checked=this.getSettingValue(t.name)??!1;for(let t of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))t.value=this.getSettingValue(t.name)??"";for(let t of document.querySelectorAll("select[data-setting]")){let e=this.getSettingValue(t.name),o=t.querySelector(`option[value='${e}']`);null!=o&&(o.selected=!0)}for(let t of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(t)}finally{this._updating=!1}let n=function t(e,o){let r={};for(let n in e){let a=e[n];Array.isArray(a)||("object"==typeof a?Object.assign(r,t(a,void 0===o?n:`${o}.${n}`)):r[void 0===o?n:`${o}.${n}`]=a)}return r}(this.state.config);if(null!=this.state.customSettings)for(let[t,e]of Object.entries(this.state.customSettings))n[t]=e;this.setVisibility(n),this.setEnablement(n)}setAdditionalSettings(t){if(t){for(let[e,o]of t.trim().split(",").map(t=>{let[e,o]=t.split("=");return[e,rD(o)]}))this._changes[e]=o}}setEnablement(t){for(let e of document.querySelectorAll("[data-enablement]")){let o=!this.evaluateStateExpression(e.dataset.enablement,t);if(o?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=o;else{let t=e.querySelector("input,select");if(null==t)continue;t.disabled=o}}}setVisibility(t){for(let e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){let o=t.dataset.settingPreviewType;switch(o){case"date":if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),!e){let o=t.dataset.settingPreviewDefaultLookup;null!=o&&(e=this.getSettingValue(o)),null==e&&(e=t.dataset.settingPreviewDefault)}t.innerText=null==e?"":ts(rO,e,void 0,!1);break;case"date-locale":{void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=void 0);let o=this.getSettingValue(t.dataset.settingPreviewDefault)??"MMMM Do, YYYY h:mma";try{t.innerText=ts(rO,o,e,!1)}catch(e){t.innerText=e.message}break}case"commit":case"commit-uncommitted":if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),!e&&null==(e=t.dataset.settingPreviewDefault)){let o=t.dataset.settingPreviewDefaultLookup;null!=o&&(e=this.getSettingValue(o))}if(null==e){t.innerText="";return}this.sendRequest(Z,{key:t.dataset.settingPreview,type:o,format:e}).then(e=>{t.innerText=e.preview??""})}}onObserver(t,e){let o;for(let e of t)this._sections.set(e.target.parentElement.id,e.isIntersecting);for(let[t,e]of this._sections.entries())if(e){o=t;break}if(void 0===o){if(1!==t.length)return;let e=t[0];if(null==e.boundingClientRect||null==e.rootBounds)return;if(o=e.target.parentElement.id,e.boundingClientRect.top>=e.rootBounds.bottom){let t=[...this._sections.keys()],e=t.indexOf(o);if(e<=0)return;o=t[e-1]}}this._activeSection!==o&&(void 0!==this._activeSection&&this.toggleJumpLink(this._activeSection,!1),this._activeSection=o,this.toggleJumpLink(this._activeSection,!0))}onActionLinkClicked(t,e){switch(t.dataset.action){case"collapse":for(let t of document.querySelectorAll(".section--collapsible"))t.classList.add("collapsed");document.querySelector('[data-action="collapse"]').classList.add("hidden"),document.querySelector('[data-action="expand"]').classList.remove("hidden");break;case"expand":for(let t of document.querySelectorAll(".section--collapsible"))t.classList.remove("collapsed");document.querySelector('[data-action="collapse"]').classList.remove("hidden"),document.querySelector('[data-action="expand"]').classList.add("hidden");break;case"show":if(t.dataset.actionTarget)for(let e of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))e.classList.remove("hidden"),e.querySelector("input,select,textarea,button")?.focus();break;case"hide":if(t.dataset.actionTarget)for(let e of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))e.classList.add("hidden")}e.preventDefault(),e.stopPropagation()}onJumpToLinkClicked(t,e){let o=t.getAttribute("href");if(null==o)return;let r=o.substring(1);this.scrollToAnchor(r,"smooth"),e.stopPropagation(),e.preventDefault()}onSectionHeaderClicked(t,e){e.target.matches("a, input, label, i.icon__info")||t.parentElement.classList.toggle("collapsed")}onSettingExpanderCicked(t,e){t.parentElement.parentElement.classList.toggle("expanded")}toggleJumpLink(t,e){let o=document.querySelector(`a.sidebar__jump-link[href="#${t}"]`);null!=o&&o.classList.toggle("active",e)}renderAutolinkIntegration(){let t=document.querySelector('[data-component="autolink-integration"]');if(null==t)return;let{hasAccount:e,hasConnectedJira:o,hasConnectedLinear:r}=this.state,n=`<a href="${P("gitlens.plus.cloudIntegrations.connect",{integrationIds:["jira"],source:{source:"settings",detail:{action:"connect",integration:"jira"}}})}">Connect to Jira Cloud</a> &mdash; ${e?"":"sign up and "}get access to automatic rich Jira autolinks.`;e&&o&&(n='<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Jira connected &mdash; automatic rich Jira autolinks are enabled.');let a=`<a href="${P("gitlens.plus.cloudIntegrations.connect",{integrationIds:["linear"],source:{source:"settings",detail:{action:"connect",integration:"linear"}}})}">Connect to Linear</a> &mdash; ${e?"":"sign up and "}get access to automatic rich Linear autolinks.`;e&&r&&(a='<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Linear connected &mdash; automatic rich Linear autolinks are enabled.'),t.innerHTML=`${n}<br/>${a}`}renderAutolinks(){let t=document.querySelector('[data-component="autolinks"]');if(null==t)return;let e=()=>`
			<div class="setting__hint">
				<span style="line-height: 2rem">
					<i class="icon icon--sm icon__info"></i> Matches prefixes that are followed by a reference value within commit messages.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The URL must contain a <code>&lt;num&gt;</code> for the reference value to be included in the link.
				</span>
			</div>
		`,o=(t,o,r=!1,n=!0)=>`
			<div class="setting${r?' hidden" data-region="autolink':""}">
				<div class="setting__group">
					<div class="setting__input setting__input--short setting__input--with-actions">
						<label for="autolinks.${t}.prefix">Prefix</label>
						<input
							id="autolinks.${t}.prefix"
							name="autolinks.${t}.prefix"
							placeholder="TICKET-"
							data-setting
							data-setting-type="arrayObject"
							${o?.prefix?`value="${encodeURIComponent(o.prefix)}"`:""}
						>
						<div class="setting__input-actions">
							<div class="toggle-button">
								<input
									id="autolinks.${t}.ignoreCase"
									name="autolinks.${t}.ignoreCase"
									type="checkbox"
									class="toggle-button__control"
									data-setting
									data-setting-type="arrayObject"
									${o?.ignoreCase?"checked":""}
								>
								<label class="toggle-button__label" for="autolinks.${t}.ignoreCase" title="Case-sensitive" aria-label="Case-sensitive">Aa</label>
							</div>
							<div class="toggle-button">
								<input
									id="autolinks.${t}.alphanumeric"
									name="autolinks.${t}.alphanumeric"
									type="checkbox"
									class="toggle-button__control"
									data-setting
									data-setting-type="arrayObject"
									${o?.alphanumeric?"checked":""}
								>
								<label class="toggle-button__label" for="autolinks.${t}.alphanumeric" title="Alphanumeric" aria-label="Alphanumeric">a1</label>
							</div>
						</div>
					</div>
					<div class="setting__input setting__input--long setting__input--centered">
						<label for="autolinks.${t}.url">URL</label>
						<input
							id="autolinks.${t}.url"
							name="autolinks.${t}.url"
							type="text"
							placeholder="https://example.com/TICKET?q=&lt;num&gt;"
							data-setting
							data-setting-type="arrayObject"
							${o?.url?`value="${encodeURIComponent(o.url)}"`:""}
						>
						${r?`
							<button
								class="button button--compact button--flat-subtle"
								type="button"
								data-action="hide"
								data-action-target="autolink"
								title="Delete"
								aria-label="Delete"
							><i class="codicon codicon-close"></i></button>
						`:`
							<button
								id="autolinks.${t}.delete"
								name="autolinks.${t}.delete"
								class="button button--compact button--flat-subtle"
								type="button"
								data-setting-type="arrayObject"
								data-setting-clear
								title="Delete"
								aria-label="Delete"
							><i class="codicon codicon-close"></i></button>
						`}
					</div>
				</div>
				${n&&r?e():""}
			</div>
		`,r=[],n=(this.state.config.autolinks?.length||0)>0;n&&this.state.config.autolinks?.forEach((t,e)=>r.push(o(e,t))),r.push(o(this.state.config.autolinks?.length??0,void 0,!0,!n)),n&&r.push(e()),t.innerHTML=r.join("")}};function rD(t){return"true"===t||"false"!==t&&("null"===t?null:t)}function rI(t,e,o){let r=e.split("."),n=r.length,a=n-1,h=-1,c=t;for(;null!=c&&++h<n;){let t=r[h],e=o;if(h!==a){let o=c[t];e="object"==typeof o?o:{}}c[t]=e,c=c[t]}return t}function rN(t){switch(t){case"on":return!0;case"null":return null;case"undefined":return;default:return t}}new SettingsApp;export{SettingsApp};