var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
    if (decorator = decorators[i4])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js
var ElementInternalsShim = class ElementInternals {
  get shadowRoot() {
    return this.__host.__shadowRoot;
  }
  constructor(_host) {
    this.ariaAtomic = "";
    this.ariaAutoComplete = "";
    this.ariaBrailleLabel = "";
    this.ariaBrailleRoleDescription = "";
    this.ariaBusy = "";
    this.ariaChecked = "";
    this.ariaColCount = "";
    this.ariaColIndex = "";
    this.ariaColSpan = "";
    this.ariaCurrent = "";
    this.ariaDescription = "";
    this.ariaDisabled = "";
    this.ariaExpanded = "";
    this.ariaHasPopup = "";
    this.ariaHidden = "";
    this.ariaInvalid = "";
    this.ariaKeyShortcuts = "";
    this.ariaLabel = "";
    this.ariaLevel = "";
    this.ariaLive = "";
    this.ariaModal = "";
    this.ariaMultiLine = "";
    this.ariaMultiSelectable = "";
    this.ariaOrientation = "";
    this.ariaPlaceholder = "";
    this.ariaPosInSet = "";
    this.ariaPressed = "";
    this.ariaReadOnly = "";
    this.ariaRequired = "";
    this.ariaRoleDescription = "";
    this.ariaRowCount = "";
    this.ariaRowIndex = "";
    this.ariaRowSpan = "";
    this.ariaSelected = "";
    this.ariaSetSize = "";
    this.ariaSort = "";
    this.ariaValueMax = "";
    this.ariaValueMin = "";
    this.ariaValueNow = "";
    this.ariaValueText = "";
    this.role = "";
    this.form = null;
    this.labels = [];
    this.states = /* @__PURE__ */ new Set();
    this.validationMessage = "";
    this.validity = {};
    this.willValidate = true;
    this.__host = _host;
  }
  checkValidity() {
    console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true.");
    return true;
  }
  reportValidity() {
    return true;
  }
  setFormValue() {
  }
  setValidity() {
  }
};

// node_modules/@lit-labs/ssr-dom-shim/lib/events.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _Event_cancelable;
var _Event_bubbles;
var _Event_composed;
var _Event_defaultPrevented;
var _Event_timestamp;
var _Event_propagationStopped;
var _Event_type;
var _Event_target;
var _Event_isBeingDispatched;
var _a;
var _CustomEvent_detail;
var _b;
var isCaptureEventListener = (options) => typeof options === "boolean" ? options : options?.capture ?? false;
var NONE = 0;
var CAPTURING_PHASE = 1;
var AT_TARGET = 2;
var BUBBLING_PHASE = 3;
var EventTargetShim = class EventTarget {
  constructor() {
    this.__eventListeners = /* @__PURE__ */ new Map();
    this.__captureEventListeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, callback, options) {
    if (callback === void 0 || callback === null) {
      return;
    }
    const eventListenersMap = isCaptureEventListener(options) ? this.__captureEventListeners : this.__eventListeners;
    let eventListeners = eventListenersMap.get(type);
    if (eventListeners === void 0) {
      eventListeners = /* @__PURE__ */ new Map();
      eventListenersMap.set(type, eventListeners);
    } else if (eventListeners.has(callback)) {
      return;
    }
    const normalizedOptions = typeof options === "object" && options ? options : {};
    normalizedOptions.signal?.addEventListener("abort", () => this.removeEventListener(type, callback, options));
    eventListeners.set(callback, normalizedOptions ?? {});
  }
  removeEventListener(type, callback, options) {
    if (callback === void 0 || callback === null) {
      return;
    }
    const eventListenersMap = isCaptureEventListener(options) ? this.__captureEventListeners : this.__eventListeners;
    const eventListeners = eventListenersMap.get(type);
    if (eventListeners !== void 0) {
      eventListeners.delete(callback);
      if (!eventListeners.size) {
        eventListenersMap.delete(type);
      }
    }
  }
  dispatchEvent(event) {
    const composedPath = [this];
    let parent = this.__eventTargetParent;
    if (event.composed) {
      while (parent) {
        composedPath.push(parent);
        parent = parent.__eventTargetParent;
      }
    } else {
      while (parent && parent !== this.__host) {
        composedPath.push(parent);
        parent = parent.__eventTargetParent;
      }
    }
    let stopPropagation = false;
    let stopImmediatePropagation = false;
    let eventPhase = NONE;
    let target = null;
    let tmpTarget = null;
    let currentTarget = null;
    const originalStopPropagation = event.stopPropagation;
    const originalStopImmediatePropagation = event.stopImmediatePropagation;
    Object.defineProperties(event, {
      target: {
        get() {
          return target ?? tmpTarget;
        },
        ...enumerableProperty
      },
      srcElement: {
        get() {
          return event.target;
        },
        ...enumerableProperty
      },
      currentTarget: {
        get() {
          return currentTarget;
        },
        ...enumerableProperty
      },
      eventPhase: {
        get() {
          return eventPhase;
        },
        ...enumerableProperty
      },
      composedPath: {
        value: () => composedPath,
        ...enumerableProperty
      },
      stopPropagation: {
        value: () => {
          stopPropagation = true;
          originalStopPropagation.call(event);
        },
        ...enumerableProperty
      },
      stopImmediatePropagation: {
        value: () => {
          stopImmediatePropagation = true;
          originalStopImmediatePropagation.call(event);
        },
        ...enumerableProperty
      }
    });
    const invokeEventListener = (listener, options, eventListenerMap) => {
      if (typeof listener === "function") {
        listener(event);
      } else if (typeof listener?.handleEvent === "function") {
        listener.handleEvent(event);
      }
      if (options.once) {
        eventListenerMap.delete(listener);
      }
    };
    const finishDispatch = () => {
      currentTarget = null;
      eventPhase = NONE;
      return !event.defaultPrevented;
    };
    const captureEventPath = composedPath.slice().reverse();
    target = !this.__host || !event.composed ? this : null;
    const retarget = (eventTargets) => {
      tmpTarget = this;
      while (tmpTarget.__host && eventTargets.includes(tmpTarget.__host)) {
        tmpTarget = tmpTarget.__host;
      }
    };
    for (const eventTarget of captureEventPath) {
      if (!target && (!tmpTarget || tmpTarget === eventTarget.__host)) {
        retarget(captureEventPath.slice(captureEventPath.indexOf(eventTarget)));
      }
      currentTarget = eventTarget;
      eventPhase = eventTarget === event.target ? AT_TARGET : CAPTURING_PHASE;
      const captureEventListeners = eventTarget.__captureEventListeners.get(event.type);
      if (captureEventListeners) {
        for (const [listener, options] of captureEventListeners) {
          invokeEventListener(listener, options, captureEventListeners);
          if (stopImmediatePropagation) {
            return finishDispatch();
          }
        }
      }
      if (stopPropagation) {
        return finishDispatch();
      }
    }
    const bubbleEventPath = event.bubbles ? composedPath : [this];
    tmpTarget = null;
    for (const eventTarget of bubbleEventPath) {
      if (!target && (!tmpTarget || eventTarget === tmpTarget.__host)) {
        retarget(bubbleEventPath.slice(0, bubbleEventPath.indexOf(eventTarget) + 1));
      }
      currentTarget = eventTarget;
      eventPhase = eventTarget === event.target ? AT_TARGET : BUBBLING_PHASE;
      const captureEventListeners = eventTarget.__eventListeners.get(event.type);
      if (captureEventListeners) {
        for (const [listener, options] of captureEventListeners) {
          invokeEventListener(listener, options, captureEventListeners);
          if (stopImmediatePropagation) {
            return finishDispatch();
          }
        }
      }
      if (stopPropagation) {
        return finishDispatch();
      }
    }
    return finishDispatch();
  }
};
var EventTargetShimWithRealType = EventTargetShim;
var enumerableProperty = { __proto__: null };
enumerableProperty.enumerable = true;
Object.freeze(enumerableProperty);
var EventShim = (_a = class Event {
  constructor(type, options = {}) {
    _Event_cancelable.set(this, false);
    _Event_bubbles.set(this, false);
    _Event_composed.set(this, false);
    _Event_defaultPrevented.set(this, false);
    _Event_timestamp.set(this, Date.now());
    _Event_propagationStopped.set(this, false);
    _Event_type.set(this, void 0);
    _Event_target.set(this, void 0);
    _Event_isBeingDispatched.set(this, void 0);
    this.NONE = NONE;
    this.CAPTURING_PHASE = CAPTURING_PHASE;
    this.AT_TARGET = AT_TARGET;
    this.BUBBLING_PHASE = BUBBLING_PHASE;
    if (arguments.length === 0)
      throw new Error(`The type argument must be specified`);
    if (typeof options !== "object" || !options) {
      throw new Error(`The "options" argument must be an object`);
    }
    const { bubbles, cancelable, composed } = options;
    __classPrivateFieldSet(this, _Event_cancelable, !!cancelable, "f");
    __classPrivateFieldSet(this, _Event_bubbles, !!bubbles, "f");
    __classPrivateFieldSet(this, _Event_composed, !!composed, "f");
    __classPrivateFieldSet(this, _Event_type, `${type}`, "f");
    __classPrivateFieldSet(this, _Event_target, null, "f");
    __classPrivateFieldSet(this, _Event_isBeingDispatched, false, "f");
  }
  initEvent(_type, _bubbles, _cancelable) {
    throw new Error("Method not implemented.");
  }
  stopImmediatePropagation() {
    this.stopPropagation();
  }
  preventDefault() {
    __classPrivateFieldSet(this, _Event_defaultPrevented, true, "f");
  }
  get target() {
    return __classPrivateFieldGet(this, _Event_target, "f");
  }
  get currentTarget() {
    return __classPrivateFieldGet(this, _Event_target, "f");
  }
  get srcElement() {
    return __classPrivateFieldGet(this, _Event_target, "f");
  }
  get type() {
    return __classPrivateFieldGet(this, _Event_type, "f");
  }
  get cancelable() {
    return __classPrivateFieldGet(this, _Event_cancelable, "f");
  }
  get defaultPrevented() {
    return __classPrivateFieldGet(this, _Event_cancelable, "f") && __classPrivateFieldGet(this, _Event_defaultPrevented, "f");
  }
  get timeStamp() {
    return __classPrivateFieldGet(this, _Event_timestamp, "f");
  }
  composedPath() {
    return __classPrivateFieldGet(this, _Event_isBeingDispatched, "f") ? [__classPrivateFieldGet(this, _Event_target, "f")] : [];
  }
  get returnValue() {
    return !__classPrivateFieldGet(this, _Event_cancelable, "f") || !__classPrivateFieldGet(this, _Event_defaultPrevented, "f");
  }
  get bubbles() {
    return __classPrivateFieldGet(this, _Event_bubbles, "f");
  }
  get composed() {
    return __classPrivateFieldGet(this, _Event_composed, "f");
  }
  get eventPhase() {
    return __classPrivateFieldGet(this, _Event_isBeingDispatched, "f") ? _a.AT_TARGET : _a.NONE;
  }
  get cancelBubble() {
    return __classPrivateFieldGet(this, _Event_propagationStopped, "f");
  }
  set cancelBubble(value) {
    if (value) {
      __classPrivateFieldSet(this, _Event_propagationStopped, true, "f");
    }
  }
  stopPropagation() {
    __classPrivateFieldSet(this, _Event_propagationStopped, true, "f");
  }
  get isTrusted() {
    return false;
  }
}, _Event_cancelable = /* @__PURE__ */ new WeakMap(), _Event_bubbles = /* @__PURE__ */ new WeakMap(), _Event_composed = /* @__PURE__ */ new WeakMap(), _Event_defaultPrevented = /* @__PURE__ */ new WeakMap(), _Event_timestamp = /* @__PURE__ */ new WeakMap(), _Event_propagationStopped = /* @__PURE__ */ new WeakMap(), _Event_type = /* @__PURE__ */ new WeakMap(), _Event_target = /* @__PURE__ */ new WeakMap(), _Event_isBeingDispatched = /* @__PURE__ */ new WeakMap(), _a.NONE = NONE, _a.CAPTURING_PHASE = CAPTURING_PHASE, _a.AT_TARGET = AT_TARGET, _a.BUBBLING_PHASE = BUBBLING_PHASE, _a);
Object.defineProperties(EventShim.prototype, {
  initEvent: enumerableProperty,
  stopImmediatePropagation: enumerableProperty,
  preventDefault: enumerableProperty,
  target: enumerableProperty,
  currentTarget: enumerableProperty,
  srcElement: enumerableProperty,
  type: enumerableProperty,
  cancelable: enumerableProperty,
  defaultPrevented: enumerableProperty,
  timeStamp: enumerableProperty,
  composedPath: enumerableProperty,
  returnValue: enumerableProperty,
  bubbles: enumerableProperty,
  composed: enumerableProperty,
  eventPhase: enumerableProperty,
  cancelBubble: enumerableProperty,
  stopPropagation: enumerableProperty,
  isTrusted: enumerableProperty
});
var CustomEventShim = (_b = class CustomEvent extends EventShim {
  constructor(type, options = {}) {
    super(type, options);
    _CustomEvent_detail.set(this, void 0);
    __classPrivateFieldSet(this, _CustomEvent_detail, options?.detail ?? null, "f");
  }
  initCustomEvent(_type, _bubbles, _cancelable, _detail) {
    throw new Error("Method not implemented.");
  }
  get detail() {
    return __classPrivateFieldGet(this, _CustomEvent_detail, "f");
  }
}, _CustomEvent_detail = /* @__PURE__ */ new WeakMap(), _b);
Object.defineProperties(CustomEventShim.prototype, {
  detail: enumerableProperty
});
var EventShimWithRealType = EventShim;
var CustomEventShimWithRealType = CustomEventShim;

// node_modules/@lit-labs/ssr-dom-shim/index.js
globalThis.Event ??= EventShimWithRealType;
globalThis.CustomEvent ??= CustomEventShimWithRealType;
var attributes = /* @__PURE__ */ new WeakMap();
var attributesForElement = (element) => {
  let attrs = attributes.get(element);
  if (attrs === void 0) {
    attributes.set(element, attrs = /* @__PURE__ */ new Map());
  }
  return attrs;
};
var ElementShim = class Element extends EventTargetShimWithRealType {
  constructor() {
    super(...arguments);
    this.__shadowRootMode = null;
    this.__shadowRoot = null;
    this.__internals = null;
  }
  get attributes() {
    return Array.from(attributesForElement(this)).map(([name, value]) => ({
      name,
      value
    }));
  }
  get shadowRoot() {
    if (this.__shadowRootMode === "closed") {
      return null;
    }
    return this.__shadowRoot;
  }
  get localName() {
    return this.constructor.__localName;
  }
  get tagName() {
    return this.localName?.toUpperCase();
  }
  setAttribute(name, value) {
    attributesForElement(this).set(name, String(value));
  }
  removeAttribute(name) {
    attributesForElement(this).delete(name);
  }
  toggleAttribute(name, force) {
    if (this.hasAttribute(name)) {
      if (force === void 0 || !force) {
        this.removeAttribute(name);
        return false;
      }
    } else {
      if (force === void 0 || force) {
        this.setAttribute(name, "");
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  hasAttribute(name) {
    return attributesForElement(this).has(name);
  }
  attachShadow(init) {
    const shadowRoot = { host: this };
    this.__shadowRootMode = init.mode;
    if (init && init.mode === "open") {
      this.__shadowRoot = shadowRoot;
    }
    return shadowRoot;
  }
  attachInternals() {
    if (this.__internals !== null) {
      throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.`);
    }
    const internals = new ElementInternalsShim(this);
    this.__internals = internals;
    return internals;
  }
  getAttribute(name) {
    const value = attributesForElement(this).get(name);
    return value ?? null;
  }
};
var HTMLElementShim = class HTMLElement extends ElementShim {
};
var HTMLElementShimWithRealType = HTMLElementShim;
globalThis.litServerRoot ??= Object.defineProperty(new HTMLElementShimWithRealType(), "localName", {
  // Patch localName (and tagName) to return a unique name.
  get() {
    return "lit-server-root";
  }
});
var CustomElementRegistryShim = class CustomElementRegistry {
  constructor() {
    this.__definitions = /* @__PURE__ */ new Map();
  }
  define(name, ctor) {
    if (this.__definitions.has(name)) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`'CustomElementRegistry' already has "${name}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);
      } else {
        throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${name}" has already been used with this registry`);
      }
    }
    ctor.__localName = name;
    this.__definitions.set(name, {
      ctor,
      // Note it's important we read `observedAttributes` in case it is a getter
      // with side-effects, as is the case in Lit, where it triggers class
      // finalization.
      //
      // TODO(aomarks) To be spec compliant, we should also capture the
      // registration-time lifecycle methods like `connectedCallback`. For them
      // to be actually accessible to e.g. the Lit SSR element renderer, though,
      // we'd need to introduce a new API for accessing them (since `get` only
      // returns the constructor).
      observedAttributes: ctor.observedAttributes ?? []
    });
  }
  get(name) {
    const definition = this.__definitions.get(name);
    return definition?.ctor;
  }
};
var CustomElementRegistryShimWithRealType = CustomElementRegistryShim;
var customElements2 = new CustomElementRegistryShimWithRealType();

// node_modules/@lit/reactive-element/node/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var n = /* @__PURE__ */ new WeakMap();
var o = class {
  constructor(t3, e6, n7) {
    if (this._$cssResult$ = true, n7 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e6;
  }
  get styleSheet() {
    let t3 = this.o;
    const s4 = this.t;
    if (e && void 0 === t3) {
      const e6 = void 0 !== s4 && 1 === s4.length;
      e6 && (t3 = n.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && n.set(s4, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var i = (t3, ...e6) => {
  const n7 = 1 === t3.length ? t3[0] : e6.reduce((e7, s4, n8) => e7 + ((t4) => {
    if (true === t4._$cssResult$)
      return t4.cssText;
    if ("number" == typeof t4)
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t3[n8 + 1], t3[0]);
  return new o(n7, t3, s);
};
var S = (s4, n7) => {
  e ? s4.adoptedStyleSheets = n7.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n7.forEach((e6) => {
    const n8 = document.createElement("style"), o6 = t.litNonce;
    void 0 !== o6 && n8.setAttribute("nonce", o6), n8.textContent = e6.cssText, s4.appendChild(n8);
  });
};
var c = e || void 0 === t.CSSStyleSheet ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e6 = "";
  for (const s4 of t4.cssRules)
    e6 += s4.cssText;
  return r(e6);
})(t3) : t3;

// node_modules/@lit/reactive-element/node/reactive-element.js
var r2;
var h;
var o2 = globalThis;
null !== (r2 = o2.customElements) && void 0 !== r2 || (o2.customElements = customElements2);
var n2 = o2.trustedTypes;
var l = n2 ? n2.emptyScript : "";
var a = o2.reactiveElementPolyfillSupport;
var d = { toAttribute(t3, i4) {
  switch (i4) {
    case Boolean:
      t3 = t3 ? l : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, i4) {
  let s4 = t3;
  switch (i4) {
    case Boolean:
      s4 = null !== t3;
      break;
    case Number:
      s4 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t3);
      } catch (t4) {
        s4 = null;
      }
  }
  return s4;
} };
var u = (t3, i4) => i4 !== t3 && (i4 == i4 || t3 == t3);
var c2 = { attribute: true, type: String, converter: d, reflect: false, hasChanged: u };
var v = "finalized";
var p = class extends (globalThis.HTMLElement ?? HTMLElementShimWithRealType) {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t3) {
    var i4;
    this.finalize(), (null !== (i4 = this.h) && void 0 !== i4 ? i4 : this.h = []).push(t3);
  }
  static get observedAttributes() {
    this.finalize();
    const t3 = [];
    return this.elementProperties.forEach((i4, s4) => {
      const e6 = this._$Ep(s4, i4);
      void 0 !== e6 && (this._$Ev.set(e6, s4), t3.push(e6));
    }), t3;
  }
  static createProperty(t3, i4 = c2) {
    if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t3, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t3)) {
      const s4 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e6 = this.getPropertyDescriptor(t3, s4, i4);
      void 0 !== e6 && Object.defineProperty(this.prototype, t3, e6);
    }
  }
  static getPropertyDescriptor(t3, i4, s4) {
    return { get() {
      return this[i4];
    }, set(e6) {
      const r4 = this[t3];
      this[i4] = e6, this.requestUpdate(t3, r4, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) || c2;
  }
  static finalize() {
    if (this.hasOwnProperty(v))
      return false;
    this[v] = true;
    const t3 = Object.getPrototypeOf(this);
    if (t3.finalize(), void 0 !== t3.h && (this.h = [...t3.h]), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t4 = this.properties, i4 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
      for (const s4 of i4)
        this.createProperty(s4, t4[s4]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(t3) {
    const i4 = [];
    if (Array.isArray(t3)) {
      const e6 = new Set(t3.flat(1 / 0).reverse());
      for (const t4 of e6)
        i4.unshift(c(t4));
    } else
      void 0 !== t3 && i4.push(c(t3));
    return i4;
  }
  static _$Ep(t3, i4) {
    const s4 = i4.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  _$Eu() {
    var t3;
    this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
  }
  addController(t3) {
    var i4, s4;
    (null !== (i4 = this._$ES) && void 0 !== i4 ? i4 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s4 = t3.hostConnected) || void 0 === s4 || s4.call(t3));
  }
  removeController(t3) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.splice(this._$ES.indexOf(t3) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t3, i4) => {
      this.hasOwnProperty(i4) && (this._$Ei.set(i4, this[i4]), delete this[i4]);
    });
  }
  createRenderRoot() {
    var t3;
    const i4 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(i4, this.constructor.elementStyles), i4;
  }
  connectedCallback() {
    var t3;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
      var i4;
      return null === (i4 = t4.hostConnected) || void 0 === i4 ? void 0 : i4.call(t4);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var t3;
    null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
      var i4;
      return null === (i4 = t4.hostDisconnected) || void 0 === i4 ? void 0 : i4.call(t4);
    });
  }
  attributeChangedCallback(t3, i4, s4) {
    this._$AK(t3, s4);
  }
  _$EO(t3, i4, s4 = c2) {
    var e6;
    const r4 = this.constructor._$Ep(t3, s4);
    if (void 0 !== r4 && true === s4.reflect) {
      const h3 = (void 0 !== (null === (e6 = s4.converter) || void 0 === e6 ? void 0 : e6.toAttribute) ? s4.converter : d).toAttribute(i4, s4.type);
      this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
    }
  }
  _$AK(t3, i4) {
    var s4;
    const e6 = this.constructor, r4 = e6._$Ev.get(t3);
    if (void 0 !== r4 && this._$El !== r4) {
      const t4 = e6.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s4 = t4.converter) || void 0 === s4 ? void 0 : s4.fromAttribute) ? t4.converter : d;
      this._$El = r4, this[r4] = h3.fromAttribute(i4, t4.type), this._$El = null;
    }
  }
  requestUpdate(t3, i4, s4) {
    let e6 = true;
    void 0 !== t3 && (((s4 = s4 || this.constructor.getPropertyOptions(t3)).hasChanged || u)(this[t3], i4) ? (this._$AL.has(t3) || this._$AL.set(t3, i4), true === s4.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s4))) : e6 = false), !this.isUpdatePending && e6 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t3;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i5) => this[i5] = t4), this._$Ei = void 0);
    let i4 = false;
    const s4 = this._$AL;
    try {
      i4 = this.shouldUpdate(s4), i4 ? (this.willUpdate(s4), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i5;
        return null === (i5 = t4.hostUpdate) || void 0 === i5 ? void 0 : i5.call(t4);
      }), this.update(s4)) : this._$Ek();
    } catch (t4) {
      throw i4 = false, this._$Ek(), t4;
    }
    i4 && this._$AE(s4);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.forEach((t4) => {
      var i5;
      return null === (i5 = t4.hostUpdated) || void 0 === i5 ? void 0 : i5.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    void 0 !== this._$EC && (this._$EC.forEach((t4, i4) => this._$EO(i4, this[i4], t4)), this._$EC = void 0), this._$Ek();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
p[v] = true, p.elementProperties = /* @__PURE__ */ new Map(), p.elementStyles = [], p.shadowRootOptions = { mode: "open" }, null == a || a({ ReactiveElement: p }), (null !== (h = o2.reactiveElementVersions) && void 0 !== h ? h : o2.reactiveElementVersions = []).push("1.6.3");

// node_modules/lit-html/node/lit-html.js
var t2;
var i2 = globalThis;
var s2 = i2.trustedTypes;
var e2 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var o3 = "$lit$";
var n3 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n3;
var h2 = `<${l2}>`;
var r3 = void 0 === i2.document ? { createTreeWalker: () => ({}) } : document;
var u2 = () => r3.createComment("");
var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var c3 = Array.isArray;
var v2 = (t3) => c3(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var x = (t3) => (i4, ...s4) => ({ _$litType$: t3, strings: i4, values: s4 });
var T = x(1);
var b = x(2);
var w = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
function P(t3, i4) {
  if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e2 ? e2.createHTML(i4) : i4;
}
var V = (t3, i4) => {
  const s4 = t3.length - 1, e6 = [];
  let l5, r4 = 2 === i4 ? "<svg>" : "", u3 = f;
  for (let i5 = 0; i5 < s4; i5++) {
    const s5 = t3[i5];
    let d3, c4, v3 = -1, a3 = 0;
    for (; a3 < s5.length && (u3.lastIndex = a3, c4 = u3.exec(s5), null !== c4); )
      a3 = u3.lastIndex, u3 === f ? "!--" === c4[1] ? u3 = _ : void 0 !== c4[1] ? u3 = m : void 0 !== c4[2] ? (y.test(c4[2]) && (l5 = RegExp("</" + c4[2], "g")), u3 = p2) : void 0 !== c4[3] && (u3 = p2) : u3 === p2 ? ">" === c4[0] ? (u3 = null != l5 ? l5 : f, v3 = -1) : void 0 === c4[1] ? v3 = -2 : (v3 = u3.lastIndex - c4[2].length, d3 = c4[1], u3 = void 0 === c4[3] ? p2 : '"' === c4[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p2 : u3 === _ || u3 === m ? u3 = f : (u3 = p2, l5 = void 0);
    const x2 = u3 === p2 && t3[i5 + 1].startsWith("/>") ? " " : "";
    r4 += u3 === f ? s5 + h2 : v3 >= 0 ? (e6.push(d3), s5.slice(0, v3) + o3 + s5.slice(v3) + n3 + x2) : s5 + n3 + (-2 === v3 ? (e6.push(void 0), i5) : x2);
  }
  return [P(t3, r4 + (t3[s4] || "<?>") + (2 === i4 ? "</svg>" : "")), e6];
};
var N = class _N {
  constructor({ strings: t3, _$litType$: i4 }, e6) {
    let h3;
    this.parts = [];
    let r4 = 0, d3 = 0;
    const c4 = t3.length - 1, v3 = this.parts, [a3, f2] = V(t3, i4);
    if (this.el = _N.createElement(a3, e6), C.currentNode = this.el.content, 2 === i4) {
      const t4 = this.el.content, i5 = t4.firstChild;
      i5.remove(), t4.append(...i5.childNodes);
    }
    for (; null !== (h3 = C.nextNode()) && v3.length < c4; ) {
      if (1 === h3.nodeType) {
        if (h3.hasAttributes()) {
          const t4 = [];
          for (const i5 of h3.getAttributeNames())
            if (i5.endsWith(o3) || i5.startsWith(n3)) {
              const s4 = f2[d3++];
              if (t4.push(i5), void 0 !== s4) {
                const t5 = h3.getAttribute(s4.toLowerCase() + o3).split(n3), i6 = /([.?@])?(.*)/.exec(s4);
                v3.push({ type: 1, index: r4, name: i6[2], strings: t5, ctor: "." === i6[1] ? H : "?" === i6[1] ? L : "@" === i6[1] ? z : R });
              } else
                v3.push({ type: 6, index: r4 });
            }
          for (const i5 of t4)
            h3.removeAttribute(i5);
        }
        if (y.test(h3.tagName)) {
          const t4 = h3.textContent.split(n3), i5 = t4.length - 1;
          if (i5 > 0) {
            h3.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i5; s4++)
              h3.append(t4[s4], u2()), C.nextNode(), v3.push({ type: 2, index: ++r4 });
            h3.append(t4[i5], u2());
          }
        }
      } else if (8 === h3.nodeType)
        if (h3.data === l2)
          v3.push({ type: 2, index: r4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = h3.data.indexOf(n3, t4 + 1)); )
            v3.push({ type: 7, index: r4 }), t4 += n3.length - 1;
        }
      r4++;
    }
  }
  static createElement(t3, i4) {
    const s4 = r3.createElement("template");
    return s4.innerHTML = t3, s4;
  }
};
function S2(t3, i4, s4 = t3, e6) {
  var o6, n7, l5, h3;
  if (i4 === w)
    return i4;
  let r4 = void 0 !== e6 ? null === (o6 = s4._$Co) || void 0 === o6 ? void 0 : o6[e6] : s4._$Cl;
  const u3 = d2(i4) ? void 0 : i4._$litDirective$;
  return (null == r4 ? void 0 : r4.constructor) !== u3 && (null === (n7 = null == r4 ? void 0 : r4._$AO) || void 0 === n7 || n7.call(r4, false), void 0 === u3 ? r4 = void 0 : (r4 = new u3(t3), r4._$AT(t3, s4, e6)), void 0 !== e6 ? (null !== (l5 = (h3 = s4)._$Co) && void 0 !== l5 ? l5 : h3._$Co = [])[e6] = r4 : s4._$Cl = r4), void 0 !== r4 && (i4 = S2(t3, r4._$AS(t3, i4.values), r4, e6)), i4;
}
var M = class {
  constructor(t3, i4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    var i4;
    const { el: { content: s4 }, parts: e6 } = this._$AD, o6 = (null !== (i4 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i4 ? i4 : r3).importNode(s4, true);
    C.currentNode = o6;
    let n7 = C.nextNode(), l5 = 0, h3 = 0, u3 = e6[0];
    for (; void 0 !== u3; ) {
      if (l5 === u3.index) {
        let i5;
        2 === u3.type ? i5 = new k(n7, n7.nextSibling, this, t3) : 1 === u3.type ? i5 = new u3.ctor(n7, u3.name, u3.strings, this, t3) : 6 === u3.type && (i5 = new W(n7, this, t3)), this._$AV.push(i5), u3 = e6[++h3];
      }
      l5 !== (null == u3 ? void 0 : u3.index) && (n7 = C.nextNode(), l5++);
    }
    return C.currentNode = r3, o6;
  }
  v(t3) {
    let i4 = 0;
    for (const s4 of this._$AV)
      void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i4), i4 += s4.strings.length - 2) : s4._$AI(t3[i4])), i4++;
  }
};
var k = class _k {
  constructor(t3, i4, s4, e6) {
    var o6;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i4, this._$AM = s4, this.options = e6, this._$Cp = null === (o6 = null == e6 ? void 0 : e6.isConnected) || void 0 === o6 || o6;
  }
  get _$AU() {
    var t3, i4;
    return null !== (i4 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i4 ? i4 : this._$Cp;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === (null == t3 ? void 0 : t3.nodeType) && (t3 = i4.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i4 = this) {
    t3 = S2(this, t3, i4), d2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== w && this._(t3) : void 0 !== t3._$litType$ ? this.g(t3) : void 0 !== t3.nodeType ? this.$(t3) : v2(t3) ? this.T(t3) : this._(t3);
  }
  k(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  $(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.k(t3));
  }
  _(t3) {
    this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.$(r3.createTextNode(t3)), this._$AH = t3;
  }
  g(t3) {
    var i4;
    const { values: s4, _$litType$: e6 } = t3, o6 = "number" == typeof e6 ? this._$AC(t3) : (void 0 === e6.el && (e6.el = N.createElement(P(e6.h, e6.h[0]), this.options)), e6);
    if ((null === (i4 = this._$AH) || void 0 === i4 ? void 0 : i4._$AD) === o6)
      this._$AH.v(s4);
    else {
      const t4 = new M(o6, this), i5 = t4.u(this.options);
      t4.v(s4), this.$(i5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i4 = E.get(t3.strings);
    return void 0 === i4 && E.set(t3.strings, i4 = new N(t3)), i4;
  }
  T(t3) {
    c3(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s4, e6 = 0;
    for (const o6 of t3)
      e6 === i4.length ? i4.push(s4 = new _k(this.k(u2()), this.k(u2()), this, this.options)) : s4 = i4[e6], s4._$AI(o6), e6++;
    e6 < i4.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i4.length = e6);
  }
  _$AR(t3 = this._$AA.nextSibling, i4) {
    var s4;
    for (null === (s4 = this._$AP) || void 0 === s4 || s4.call(this, false, true, i4); t3 && t3 !== this._$AB; ) {
      const i5 = t3.nextSibling;
      t3.remove(), t3 = i5;
    }
  }
  setConnected(t3) {
    var i4;
    void 0 === this._$AM && (this._$Cp = t3, null === (i4 = this._$AP) || void 0 === i4 || i4.call(this, t3));
  }
};
var R = class {
  constructor(t3, i4, s4, e6, o6) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i4, this._$AM = e6, this.options = o6, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3, i4 = this, s4, e6) {
    const o6 = this.strings;
    let n7 = false;
    if (void 0 === o6)
      t3 = S2(this, t3, i4, 0), n7 = !d2(t3) || t3 !== this._$AH && t3 !== w, n7 && (this._$AH = t3);
    else {
      const e7 = t3;
      let l5, h3;
      for (t3 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
        h3 = S2(this, e7[s4 + l5], i4, l5), h3 === w && (h3 = this._$AH[l5]), n7 || (n7 = !d2(h3) || h3 !== this._$AH[l5]), h3 === A ? t3 = A : t3 !== A && (t3 += (null != h3 ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
    }
    n7 && !e6 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
  }
};
var H = class extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var I = s2 ? s2.emptyScript : "";
var L = class extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    t3 && t3 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
var z = class extends R {
  constructor(t3, i4, s4, e6, o6) {
    super(t3, i4, s4, e6, o6), this.type = 5;
  }
  _$AI(t3, i4 = this) {
    var s4;
    if ((t3 = null !== (s4 = S2(this, t3, i4, 0)) && void 0 !== s4 ? s4 : A) === w)
      return;
    const e6 = this._$AH, o6 = t3 === A && e6 !== A || t3.capture !== e6.capture || t3.once !== e6.once || t3.passive !== e6.passive, n7 = t3 !== A && (e6 === A || o6);
    o6 && this.element.removeEventListener(this.name, this, e6), n7 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var i4, s4;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s4 = null === (i4 = this.options) || void 0 === i4 ? void 0 : i4.host) && void 0 !== s4 ? s4 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var W = class {
  constructor(t3, i4, s4) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    S2(this, t3);
  }
};
var j = i2.litHtmlPolyfillSupport;
null == j || j(N, k), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
var B = (t3, i4, s4) => {
  var e6, o6;
  const n7 = null !== (e6 = null == s4 ? void 0 : s4.renderBefore) && void 0 !== e6 ? e6 : i4;
  let l5 = n7._$litPart$;
  if (void 0 === l5) {
    const t4 = null !== (o6 = null == s4 ? void 0 : s4.renderBefore) && void 0 !== o6 ? o6 : null;
    n7._$litPart$ = l5 = new k(i4.insertBefore(u2(), t4), t4, void 0, null != s4 ? s4 : {});
  }
  return l5._$AI(t3), l5;
};

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s3 = class extends p {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t3, e6;
    const i4 = super.createRenderRoot();
    return null !== (t3 = (e6 = this.renderOptions).renderBefore) && void 0 !== t3 || (e6.renderBefore = i4.firstChild), i4;
  }
  update(t3) {
    const i4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(i4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t3;
    super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
  }
  disconnectedCallback() {
    var t3;
    super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
  }
  render() {
    return w;
  }
};
s3.finalized = true, s3._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s3 });
var n4 = globalThis.litElementPolyfillSupport;
null == n4 || n4({ LitElement: s3 });
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

// node_modules/@lit/reactive-element/node/decorators/custom-element.js
var e3 = (e6) => (n7) => "function" == typeof n7 ? ((e7, n8) => (customElements.define(e7, n8), n8))(e6, n7) : ((e7, n8) => {
  const { kind: t3, elements: s4 } = n8;
  return { kind: t3, elements: s4, finisher(n9) {
    customElements.define(e7, n9);
  } };
})(e6, n7);

// node_modules/@lit/reactive-element/node/decorators/property.js
var i3 = (i4, e6) => "method" === e6.kind && e6.descriptor && !("value" in e6.descriptor) ? { ...e6, finisher(n7) {
  n7.createProperty(e6.key, i4);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e6.key, initializer() {
  "function" == typeof e6.initializer && (this[e6.key] = e6.initializer.call(this));
}, finisher(n7) {
  n7.createProperty(e6.key, i4);
} };
var e4 = (i4, e6, n7) => {
  e6.constructor.createProperty(n7, i4);
};
function n5(n7) {
  return (t3, o6) => void 0 !== o6 ? e4(n7, t3, o6) : i3(n7, t3);
}

// node_modules/@lit/reactive-element/node/decorators/query-assigned-elements.js
var l4;
var n6 = null != (null === (l4 = globalThis.HTMLSlotElement) || void 0 === l4 ? void 0 : l4.prototype.assignedElements) ? (o6, l5) => o6.assignedElements(l5) : (o6, l5) => o6.assignedNodes(l5).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

// libs/vscode/migrate-sidebar-webview/src/main.ts
var Root = class extends s3 {
  state = "default";
  migrateViewData;
  vscodeApi = acquireVsCodeApi();
  render() {
    if (this.state === "update-available") {
      return T`
        <p>
          A newer version of Nx is available:
          ${this.migrateViewData?.latestNxVersion.full} <br />
          Use the button below to start a guided migration using the Migrate UI.
          <a href="https://nx.dev/latest/react/cli/migrate">Learn more</a>
        </p>

        ${this.migrateViewData?.hasPendingChanges ? T`<p>
              Please commit or stash all changes first before starting a
              migration.
            </p>` : ""}
        <div style="display: flex; flex-direction: row; gap: 2px; width: 100%;">
          <vscode-button
            ?disabled="${this.migrateViewData?.hasPendingChanges}"
            @click="${() => {
        this.vscodeApi.postMessage({ type: "start-migration" });
      }}"
            style="width: 100%; ${this.migrateViewData?.hasPendingChanges ? "cursor: not-allowed;" : ""}"
            >Start Migration</vscode-button
          >
          <vscode-button
            icon="edit"
            secondary
            style="padding-right: 0px; padding-left: 3px; display: flex; ${this.migrateViewData?.hasPendingChanges ? "cursor: not-allowed;" : ""}"
            ?disabled="${this.migrateViewData?.hasPendingChanges}"
            @click="${() => {
        this.vscodeApi.postMessage({
          type: "start-migration",
          custom: true
        });
        this.title = "Customize Migration";
      }}"
          >
          </vscode-button>
        </div>
      `;
    } else if (this.state === "default") {
      return T` <p>
          You're on the latest Nx version:
          ${this.migrateViewData.currentNxVersion?.full}
        </p>
        <p>
          <a
            href=""
            @click="${() => {
        this.vscodeApi.postMessage({
          type: "start-migration",
          custom: true
        });
      }}"
            >Manually select a version to migrate to anyways
          </a>
        </p>`;
    } else if (this.state["in-progress"] === "default") {
      return T`
        <p>Migration in progress. Continue in the Migrate UI.</p>
        <vscode-button
          @click="${() => this.vscodeApi.postMessage({ type: "open" })}"
          >Open Migrate UI</vscode-button
        >
      `;
    } else if (this.state["in-progress"] === "pending-package-updates") {
      console.log("pending-package-updates");
      return T`<p>
          Updates were made to package.json. Please review them and confirm the
          changes.
        </p>
        <div style="display: flex; padding-bottom: 0.5rem;">
          <vscode-button
            secondary
            style="width: 100%"
            @click="${() => this.vscodeApi.postMessage({ type: "view-diff" })}"
            >View package.json changes</vscode-button
          >
        </div>
        <p>
          If the changes look good, then confirm to update packages and continue
          the migration.
        </p>
        <div style="display: flex; flex-direction: row; gap: 2px; width: 100%;">
          <vscode-button
            secondary
            icon="close"
            style="flex-grow: 1;"
            @click="${() => this.vscodeApi.postMessage({ type: "cancel-migration" })}"
            >Cancel</vscode-button
          >
          <vscode-button
            icon="check"
            style="flex-grow: 1;"
            @click="${() => this.vscodeApi.postMessage({ type: "confirm-changes" })}"
            >Yes, continue</vscode-button
          >
        </div> `;
    }
  }
};
__publicField(Root, "styles", i`
    a {
      color: var(--vscode-textLink-foreground);
    }
    a:hover {
      color: var(--vscode-textLink-activeForeground);
    }
  `);
__decorateClass([
  n5({ converter: (value) => JSON.parse(value) })
], Root.prototype, "state", 2);
__decorateClass([
  n5({ type: Object })
], Root.prototype, "migrateViewData", 2);
Root = __decorateClass([
  e3("root-element")
], Root);
export {
  Root
};
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
*/
