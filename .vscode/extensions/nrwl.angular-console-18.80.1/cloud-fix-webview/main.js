var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
    if (decorator = decorators[i4])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/@xterm/xterm/lib/xterm.js
var require_xterm = __commonJS({
  "node_modules/@xterm/xterm/lib/xterm.js"(exports, module) {
    !function(e7, t7) {
      if ("object" == typeof exports && "object" == typeof module)
        module.exports = t7();
      else if ("function" == typeof define && define.amd)
        define([], t7);
      else {
        var i4 = t7();
        for (var s7 in i4)
          ("object" == typeof exports ? exports : e7)[s7] = i4[s7];
      }
    }(globalThis, () => (() => {
      "use strict";
      var e7 = { 4567: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.AccessibilityManager = void 0;
        const n8 = i5(9042), o7 = i5(9924), a3 = i5(844), h3 = i5(4725), c4 = i5(2585), l5 = i5(3656);
        let d3 = t8.AccessibilityManager = class extends a3.Disposable {
          constructor(e9, t9, i6, s9) {
            super(), this._terminal = e9, this._coreBrowserService = i6, this._renderService = s9, this._rowColumns = /* @__PURE__ */ new WeakMap(), this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "", this._accessibilityContainer = this._coreBrowserService.mainDocument.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = this._coreBrowserService.mainDocument.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
            for (let e10 = 0; e10 < this._terminal.rows; e10++)
              this._rowElements[e10] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e10]);
            if (this._topBoundaryFocusListener = (e10) => this._handleBoundaryFocus(e10, 0), this._bottomBoundaryFocusListener = (e10) => this._handleBoundaryFocus(e10, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions(), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = this._coreBrowserService.mainDocument.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this.register(new o7.TimeBasedDebouncer(this._renderRows.bind(this))), !this._terminal.element)
              throw new Error("Cannot enable accessibility before Terminal.open");
            this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this.register(this._terminal.onResize((e10) => this._handleResize(e10.rows))), this.register(this._terminal.onRender((e10) => this._refreshRows(e10.start, e10.end))), this.register(this._terminal.onScroll(() => this._refreshRows())), this.register(this._terminal.onA11yChar((e10) => this._handleChar(e10))), this.register(this._terminal.onLineFeed(() => this._handleChar("\n"))), this.register(this._terminal.onA11yTab((e10) => this._handleTab(e10))), this.register(this._terminal.onKey((e10) => this._handleKey(e10.key))), this.register(this._terminal.onBlur(() => this._clearLiveRegion())), this.register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this.register((0, l5.addDisposableDomListener)(document, "selectionchange", () => this._handleSelectionChange())), this.register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRows(), this.register((0, a3.toDisposable)(() => {
              this._accessibilityContainer.remove(), this._rowElements.length = 0;
            }));
          }
          _handleTab(e9) {
            for (let t9 = 0; t9 < e9; t9++)
              this._handleChar(" ");
          }
          _handleChar(e9) {
            this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e9 && (this._charsToAnnounce += e9) : this._charsToAnnounce += e9, "\n" === e9 && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += n8.tooMuchOutput)));
          }
          _clearLiveRegion() {
            this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
          }
          _handleKey(e9) {
            this._clearLiveRegion(), /\p{Control}/u.test(e9) || this._charsToConsume.push(e9);
          }
          _refreshRows(e9, t9) {
            this._liveRegionDebouncer.refresh(e9, t9, this._terminal.rows);
          }
          _renderRows(e9, t9) {
            const i6 = this._terminal.buffer, s9 = i6.lines.length.toString();
            for (let r5 = e9; r5 <= t9; r5++) {
              const e10 = i6.lines.get(i6.ydisp + r5), t10 = [], n9 = e10?.translateToString(true, void 0, void 0, t10) || "", o8 = (i6.ydisp + r5 + 1).toString(), a4 = this._rowElements[r5];
              a4 && (0 === n9.length ? (a4.innerText = "\xA0", this._rowColumns.set(a4, [0, 1])) : (a4.textContent = n9, this._rowColumns.set(a4, t10)), a4.setAttribute("aria-posinset", o8), a4.setAttribute("aria-setsize", s9));
            }
            this._announceCharacters();
          }
          _announceCharacters() {
            0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
          }
          _handleBoundaryFocus(e9, t9) {
            const i6 = e9.target, s9 = this._rowElements[0 === t9 ? 1 : this._rowElements.length - 2];
            if (i6.getAttribute("aria-posinset") === (0 === t9 ? "1" : `${this._terminal.buffer.lines.length}`))
              return;
            if (e9.relatedTarget !== s9)
              return;
            let r5, n9;
            if (0 === t9 ? (r5 = i6, n9 = this._rowElements.pop(), this._rowContainer.removeChild(n9)) : (r5 = this._rowElements.shift(), n9 = i6, this._rowContainer.removeChild(r5)), r5.removeEventListener("focus", this._topBoundaryFocusListener), n9.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t9) {
              const e10 = this._createAccessibilityTreeNode();
              this._rowElements.unshift(e10), this._rowContainer.insertAdjacentElement("afterbegin", e10);
            } else {
              const e10 = this._createAccessibilityTreeNode();
              this._rowElements.push(e10), this._rowContainer.appendChild(e10);
            }
            this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t9 ? -1 : 1), this._rowElements[0 === t9 ? 1 : this._rowElements.length - 2].focus(), e9.preventDefault(), e9.stopImmediatePropagation();
          }
          _handleSelectionChange() {
            if (0 === this._rowElements.length)
              return;
            const e9 = document.getSelection();
            if (!e9)
              return;
            if (e9.isCollapsed)
              return void (this._rowContainer.contains(e9.anchorNode) && this._terminal.clearSelection());
            if (!e9.anchorNode || !e9.focusNode)
              return void console.error("anchorNode and/or focusNode are null");
            let t9 = { node: e9.anchorNode, offset: e9.anchorOffset }, i6 = { node: e9.focusNode, offset: e9.focusOffset };
            if ((t9.node.compareDocumentPosition(i6.node) & Node.DOCUMENT_POSITION_PRECEDING || t9.node === i6.node && t9.offset > i6.offset) && ([t9, i6] = [i6, t9]), t9.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (t9 = { node: this._rowElements[0].childNodes[0], offset: 0 }), !this._rowContainer.contains(t9.node))
              return;
            const s9 = this._rowElements.slice(-1)[0];
            if (i6.node.compareDocumentPosition(s9) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (i6 = { node: s9, offset: s9.textContent?.length ?? 0 }), !this._rowContainer.contains(i6.node))
              return;
            const r5 = ({ node: e10, offset: t10 }) => {
              const i7 = e10 instanceof Text ? e10.parentNode : e10;
              let s10 = parseInt(i7?.getAttribute("aria-posinset"), 10) - 1;
              if (isNaN(s10))
                return console.warn("row is invalid. Race condition?"), null;
              const r6 = this._rowColumns.get(i7);
              if (!r6)
                return console.warn("columns is null. Race condition?"), null;
              let n10 = t10 < r6.length ? r6[t10] : r6.slice(-1)[0] + 1;
              return n10 >= this._terminal.cols && (++s10, n10 = 0), { row: s10, column: n10 };
            }, n9 = r5(t9), o8 = r5(i6);
            if (n9 && o8) {
              if (n9.row > o8.row || n9.row === o8.row && n9.column >= o8.column)
                throw new Error("invalid range");
              this._terminal.select(n9.column, n9.row, (o8.row - n9.row) * this._terminal.cols - n9.column + o8.column);
            }
          }
          _handleResize(e9) {
            this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
            for (let e10 = this._rowContainer.children.length; e10 < this._terminal.rows; e10++)
              this._rowElements[e10] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e10]);
            for (; this._rowElements.length > e9; )
              this._rowContainer.removeChild(this._rowElements.pop());
            this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
          }
          _createAccessibilityTreeNode() {
            const e9 = this._coreBrowserService.mainDocument.createElement("div");
            return e9.setAttribute("role", "listitem"), e9.tabIndex = -1, this._refreshRowDimensions(e9), e9;
          }
          _refreshRowsDimensions() {
            if (this._renderService.dimensions.css.cell.height) {
              this._accessibilityContainer.style.width = `${this._renderService.dimensions.css.canvas.width}px`, this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
              for (let e9 = 0; e9 < this._terminal.rows; e9++)
                this._refreshRowDimensions(this._rowElements[e9]);
            }
          }
          _refreshRowDimensions(e9) {
            e9.style.height = `${this._renderService.dimensions.css.cell.height}px`;
          }
        };
        t8.AccessibilityManager = d3 = s8([r4(1, c4.IInstantiationService), r4(2, h3.ICoreBrowserService), r4(3, h3.IRenderService)], d3);
      }, 3614: (e8, t8) => {
        function i5(e9) {
          return e9.replace(/\r?\n/g, "\r");
        }
        function s8(e9, t9) {
          return t9 ? "\x1B[200~" + e9 + "\x1B[201~" : e9;
        }
        function r4(e9, t9, r5, n9) {
          e9 = s8(e9 = i5(e9), r5.decPrivateModes.bracketedPasteMode && true !== n9.rawOptions.ignoreBracketedPasteMode), r5.triggerDataEvent(e9, true), t9.value = "";
        }
        function n8(e9, t9, i6) {
          const s9 = i6.getBoundingClientRect(), r5 = e9.clientX - s9.left - 10, n9 = e9.clientY - s9.top - 10;
          t9.style.width = "20px", t9.style.height = "20px", t9.style.left = `${r5}px`, t9.style.top = `${n9}px`, t9.style.zIndex = "1000", t9.focus();
        }
        Object.defineProperty(t8, "__esModule", { value: true }), t8.rightClickHandler = t8.moveTextAreaUnderMouseCursor = t8.paste = t8.handlePasteEvent = t8.copyHandler = t8.bracketTextForPaste = t8.prepareTextForTerminal = void 0, t8.prepareTextForTerminal = i5, t8.bracketTextForPaste = s8, t8.copyHandler = function(e9, t9) {
          e9.clipboardData && e9.clipboardData.setData("text/plain", t9.selectionText), e9.preventDefault();
        }, t8.handlePasteEvent = function(e9, t9, i6, s9) {
          e9.stopPropagation(), e9.clipboardData && r4(e9.clipboardData.getData("text/plain"), t9, i6, s9);
        }, t8.paste = r4, t8.moveTextAreaUnderMouseCursor = n8, t8.rightClickHandler = function(e9, t9, i6, s9, r5) {
          n8(e9, t9, i6), r5 && s9.rightClickSelect(e9), t9.value = s9.selectionText, t9.select();
        };
      }, 7239: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.ColorContrastCache = void 0;
        const s8 = i5(1505);
        t8.ColorContrastCache = class {
          constructor() {
            this._color = new s8.TwoKeyMap(), this._css = new s8.TwoKeyMap();
          }
          setCss(e9, t9, i6) {
            this._css.set(e9, t9, i6);
          }
          getCss(e9, t9) {
            return this._css.get(e9, t9);
          }
          setColor(e9, t9, i6) {
            this._color.set(e9, t9, i6);
          }
          getColor(e9, t9) {
            return this._color.get(e9, t9);
          }
          clear() {
            this._color.clear(), this._css.clear();
          }
        };
      }, 3656: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.addDisposableDomListener = void 0, t8.addDisposableDomListener = function(e9, t9, i5, s8) {
          e9.addEventListener(t9, i5, s8);
          let r4 = false;
          return { dispose: () => {
            r4 || (r4 = true, e9.removeEventListener(t9, i5, s8));
          } };
        };
      }, 3551: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Linkifier = void 0;
        const n8 = i5(3656), o7 = i5(8460), a3 = i5(844), h3 = i5(2585), c4 = i5(4725);
        let l5 = t8.Linkifier = class extends a3.Disposable {
          get currentLink() {
            return this._currentLink;
          }
          constructor(e9, t9, i6, s9, r5) {
            super(), this._element = e9, this._mouseService = t9, this._renderService = i6, this._bufferService = s9, this._linkProviderService = r5, this._linkCacheDisposables = [], this._isMouseOut = true, this._wasResized = false, this._activeLine = -1, this._onShowLinkUnderline = this.register(new o7.EventEmitter()), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this.register(new o7.EventEmitter()), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this.register((0, a3.getDisposeArrayDisposable)(this._linkCacheDisposables)), this.register((0, a3.toDisposable)(() => {
              this._lastMouseEvent = void 0, this._activeProviderReplies?.clear();
            })), this.register(this._bufferService.onResize(() => {
              this._clearCurrentLink(), this._wasResized = true;
            })), this.register((0, n8.addDisposableDomListener)(this._element, "mouseleave", () => {
              this._isMouseOut = true, this._clearCurrentLink();
            })), this.register((0, n8.addDisposableDomListener)(this._element, "mousemove", this._handleMouseMove.bind(this))), this.register((0, n8.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, n8.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
          }
          _handleMouseMove(e9) {
            this._lastMouseEvent = e9;
            const t9 = this._positionFromMouseEvent(e9, this._element, this._mouseService);
            if (!t9)
              return;
            this._isMouseOut = false;
            const i6 = e9.composedPath();
            for (let e10 = 0; e10 < i6.length; e10++) {
              const t10 = i6[e10];
              if (t10.classList.contains("xterm"))
                break;
              if (t10.classList.contains("xterm-hover"))
                return;
            }
            this._lastBufferCell && t9.x === this._lastBufferCell.x && t9.y === this._lastBufferCell.y || (this._handleHover(t9), this._lastBufferCell = t9);
          }
          _handleHover(e9) {
            if (this._activeLine !== e9.y || this._wasResized)
              return this._clearCurrentLink(), this._askForLink(e9, false), void (this._wasResized = false);
            this._currentLink && this._linkAtPosition(this._currentLink.link, e9) || (this._clearCurrentLink(), this._askForLink(e9, true));
          }
          _askForLink(e9, t9) {
            this._activeProviderReplies && t9 || (this._activeProviderReplies?.forEach((e10) => {
              e10?.forEach((e11) => {
                e11.link.dispose && e11.link.dispose();
              });
            }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e9.y);
            let i6 = false;
            for (const [s9, r5] of this._linkProviderService.linkProviders.entries())
              if (t9) {
                const t10 = this._activeProviderReplies?.get(s9);
                t10 && (i6 = this._checkLinkProviderResult(s9, e9, i6));
              } else
                r5.provideLinks(e9.y, (t10) => {
                  if (this._isMouseOut)
                    return;
                  const r6 = t10?.map((e10) => ({ link: e10 }));
                  this._activeProviderReplies?.set(s9, r6), i6 = this._checkLinkProviderResult(s9, e9, i6), this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(e9.y, this._activeProviderReplies);
                });
          }
          _removeIntersectingLinks(e9, t9) {
            const i6 = /* @__PURE__ */ new Set();
            for (let s9 = 0; s9 < t9.size; s9++) {
              const r5 = t9.get(s9);
              if (r5)
                for (let t10 = 0; t10 < r5.length; t10++) {
                  const s10 = r5[t10], n9 = s10.link.range.start.y < e9 ? 0 : s10.link.range.start.x, o8 = s10.link.range.end.y > e9 ? this._bufferService.cols : s10.link.range.end.x;
                  for (let e10 = n9; e10 <= o8; e10++) {
                    if (i6.has(e10)) {
                      r5.splice(t10--, 1);
                      break;
                    }
                    i6.add(e10);
                  }
                }
            }
          }
          _checkLinkProviderResult(e9, t9, i6) {
            if (!this._activeProviderReplies)
              return i6;
            const s9 = this._activeProviderReplies.get(e9);
            let r5 = false;
            for (let t10 = 0; t10 < e9; t10++)
              this._activeProviderReplies.has(t10) && !this._activeProviderReplies.get(t10) || (r5 = true);
            if (!r5 && s9) {
              const e10 = s9.find((e11) => this._linkAtPosition(e11.link, t9));
              e10 && (i6 = true, this._handleNewLink(e10));
            }
            if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !i6)
              for (let e10 = 0; e10 < this._activeProviderReplies.size; e10++) {
                const s10 = this._activeProviderReplies.get(e10)?.find((e11) => this._linkAtPosition(e11.link, t9));
                if (s10) {
                  i6 = true, this._handleNewLink(s10);
                  break;
                }
              }
            return i6;
          }
          _handleMouseDown() {
            this._mouseDownLink = this._currentLink;
          }
          _handleMouseUp(e9) {
            if (!this._currentLink)
              return;
            const t9 = this._positionFromMouseEvent(e9, this._element, this._mouseService);
            t9 && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t9) && this._currentLink.link.activate(e9, this._currentLink.link.text);
          }
          _clearCurrentLink(e9, t9) {
            this._currentLink && this._lastMouseEvent && (!e9 || !t9 || this._currentLink.link.range.start.y >= e9 && this._currentLink.link.range.end.y <= t9) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, a3.disposeArray)(this._linkCacheDisposables));
          }
          _handleNewLink(e9) {
            if (!this._lastMouseEvent)
              return;
            const t9 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
            t9 && this._linkAtPosition(e9.link, t9) && (this._currentLink = e9, this._currentLink.state = { decorations: { underline: void 0 === e9.link.decorations || e9.link.decorations.underline, pointerCursor: void 0 === e9.link.decorations || e9.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e9.link, this._lastMouseEvent), e9.link.decorations = {}, Object.defineProperties(e9.link.decorations, { pointerCursor: { get: () => this._currentLink?.state?.decorations.pointerCursor, set: (e10) => {
              this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== e10 && (this._currentLink.state.decorations.pointerCursor = e10, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", e10));
            } }, underline: { get: () => this._currentLink?.state?.decorations.underline, set: (t10) => {
              this._currentLink?.state && this._currentLink?.state?.decorations.underline !== t10 && (this._currentLink.state.decorations.underline = t10, this._currentLink.state.isHovered && this._fireUnderlineEvent(e9.link, t10));
            } } }), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e10) => {
              if (!this._currentLink)
                return;
              const t10 = 0 === e10.start ? 0 : e10.start + 1 + this._bufferService.buffer.ydisp, i6 = this._bufferService.buffer.ydisp + 1 + e10.end;
              if (this._currentLink.link.range.start.y >= t10 && this._currentLink.link.range.end.y <= i6 && (this._clearCurrentLink(t10, i6), this._lastMouseEvent)) {
                const e11 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                e11 && this._askForLink(e11, false);
              }
            })));
          }
          _linkHover(e9, t9, i6) {
            this._currentLink?.state && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t9, true), this._currentLink.state.decorations.pointerCursor && e9.classList.add("xterm-cursor-pointer")), t9.hover && t9.hover(i6, t9.text);
          }
          _fireUnderlineEvent(e9, t9) {
            const i6 = e9.range, s9 = this._bufferService.buffer.ydisp, r5 = this._createLinkUnderlineEvent(i6.start.x - 1, i6.start.y - s9 - 1, i6.end.x, i6.end.y - s9 - 1, void 0);
            (t9 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(r5);
          }
          _linkLeave(e9, t9, i6) {
            this._currentLink?.state && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t9, false), this._currentLink.state.decorations.pointerCursor && e9.classList.remove("xterm-cursor-pointer")), t9.leave && t9.leave(i6, t9.text);
          }
          _linkAtPosition(e9, t9) {
            const i6 = e9.range.start.y * this._bufferService.cols + e9.range.start.x, s9 = e9.range.end.y * this._bufferService.cols + e9.range.end.x, r5 = t9.y * this._bufferService.cols + t9.x;
            return i6 <= r5 && r5 <= s9;
          }
          _positionFromMouseEvent(e9, t9, i6) {
            const s9 = i6.getCoords(e9, t9, this._bufferService.cols, this._bufferService.rows);
            if (s9)
              return { x: s9[0], y: s9[1] + this._bufferService.buffer.ydisp };
          }
          _createLinkUnderlineEvent(e9, t9, i6, s9, r5) {
            return { x1: e9, y1: t9, x2: i6, y2: s9, cols: this._bufferService.cols, fg: r5 };
          }
        };
        t8.Linkifier = l5 = s8([r4(1, c4.IMouseService), r4(2, c4.IRenderService), r4(3, h3.IBufferService), r4(4, c4.ILinkProviderService)], l5);
      }, 9042: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.tooMuchOutput = t8.promptLabel = void 0, t8.promptLabel = "Terminal input", t8.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
      }, 3730: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.OscLinkProvider = void 0;
        const n8 = i5(511), o7 = i5(2585);
        let a3 = t8.OscLinkProvider = class {
          constructor(e9, t9, i6) {
            this._bufferService = e9, this._optionsService = t9, this._oscLinkService = i6;
          }
          provideLinks(e9, t9) {
            const i6 = this._bufferService.buffer.lines.get(e9 - 1);
            if (!i6)
              return void t9(void 0);
            const s9 = [], r5 = this._optionsService.rawOptions.linkHandler, o8 = new n8.CellData(), a4 = i6.getTrimmedLength();
            let c4 = -1, l5 = -1, d3 = false;
            for (let t10 = 0; t10 < a4; t10++)
              if (-1 !== l5 || i6.hasContent(t10)) {
                if (i6.loadCell(t10, o8), o8.hasExtendedAttrs() && o8.extended.urlId) {
                  if (-1 === l5) {
                    l5 = t10, c4 = o8.extended.urlId;
                    continue;
                  }
                  d3 = o8.extended.urlId !== c4;
                } else
                  -1 !== l5 && (d3 = true);
                if (d3 || -1 !== l5 && t10 === a4 - 1) {
                  const i7 = this._oscLinkService.getLinkData(c4)?.uri;
                  if (i7) {
                    const n9 = { start: { x: l5 + 1, y: e9 }, end: { x: t10 + (d3 || t10 !== a4 - 1 ? 0 : 1), y: e9 } };
                    let o9 = false;
                    if (!r5?.allowNonHttpProtocols)
                      try {
                        const e10 = new URL(i7);
                        ["http:", "https:"].includes(e10.protocol) || (o9 = true);
                      } catch (e10) {
                        o9 = true;
                      }
                    o9 || s9.push({ text: i7, range: n9, activate: (e10, t11) => r5 ? r5.activate(e10, t11, n9) : h3(0, t11), hover: (e10, t11) => r5?.hover?.(e10, t11, n9), leave: (e10, t11) => r5?.leave?.(e10, t11, n9) });
                  }
                  d3 = false, o8.hasExtendedAttrs() && o8.extended.urlId ? (l5 = t10, c4 = o8.extended.urlId) : (l5 = -1, c4 = -1);
                }
              }
            t9(s9);
          }
        };
        function h3(e9, t9) {
          if (confirm(`Do you want to navigate to ${t9}?

WARNING: This link could potentially be dangerous`)) {
            const e10 = window.open();
            if (e10) {
              try {
                e10.opener = null;
              } catch {
              }
              e10.location.href = t9;
            } else
              console.warn("Opening link blocked as opener could not be cleared");
          }
        }
        t8.OscLinkProvider = a3 = s8([r4(0, o7.IBufferService), r4(1, o7.IOptionsService), r4(2, o7.IOscLinkService)], a3);
      }, 6193: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.RenderDebouncer = void 0, t8.RenderDebouncer = class {
          constructor(e9, t9) {
            this._renderCallback = e9, this._coreBrowserService = t9, this._refreshCallbacks = [];
          }
          dispose() {
            this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          addRefreshCallback(e9) {
            return this._refreshCallbacks.push(e9), this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
          }
          refresh(e9, t9, i5) {
            this._rowCount = i5, e9 = void 0 !== e9 ? e9 : 0, t9 = void 0 !== t9 ? t9 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e9) : e9, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t9) : t9, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
          }
          _innerRefresh() {
            if (this._animationFrame = void 0, void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
              return void this._runRefreshCallbacks();
            const e9 = Math.max(this._rowStart, 0), t9 = Math.min(this._rowEnd, this._rowCount - 1);
            this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e9, t9), this._runRefreshCallbacks();
          }
          _runRefreshCallbacks() {
            for (const e9 of this._refreshCallbacks)
              e9(0);
            this._refreshCallbacks = [];
          }
        };
      }, 3236: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Terminal = void 0;
        const s8 = i5(3614), r4 = i5(3656), n8 = i5(3551), o7 = i5(9042), a3 = i5(3730), h3 = i5(1680), c4 = i5(3107), l5 = i5(5744), d3 = i5(2950), _2 = i5(1296), u3 = i5(428), f2 = i5(4269), v3 = i5(5114), p3 = i5(8934), g2 = i5(3230), m2 = i5(9312), S3 = i5(4725), C2 = i5(6731), b2 = i5(8055), w2 = i5(8969), y2 = i5(8460), E2 = i5(844), k2 = i5(6114), L2 = i5(8437), D = i5(2584), R2 = i5(7399), x2 = i5(5941), A2 = i5(9074), B2 = i5(2585), T2 = i5(5435), M2 = i5(4567), O = i5(779);
        class P2 extends w2.CoreTerminal {
          get onFocus() {
            return this._onFocus.event;
          }
          get onBlur() {
            return this._onBlur.event;
          }
          get onA11yChar() {
            return this._onA11yCharEmitter.event;
          }
          get onA11yTab() {
            return this._onA11yTabEmitter.event;
          }
          get onWillOpen() {
            return this._onWillOpen.event;
          }
          constructor(e9 = {}) {
            super(e9), this.browser = k2, this._keyDownHandled = false, this._keyDownSeen = false, this._keyPressHandled = false, this._unprocessedDeadKey = false, this._accessibilityManager = this.register(new E2.MutableDisposable()), this._onCursorMove = this.register(new y2.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onKey = this.register(new y2.EventEmitter()), this.onKey = this._onKey.event, this._onRender = this.register(new y2.EventEmitter()), this.onRender = this._onRender.event, this._onSelectionChange = this.register(new y2.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this.register(new y2.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onBell = this.register(new y2.EventEmitter()), this.onBell = this._onBell.event, this._onFocus = this.register(new y2.EventEmitter()), this._onBlur = this.register(new y2.EventEmitter()), this._onA11yCharEmitter = this.register(new y2.EventEmitter()), this._onA11yTabEmitter = this.register(new y2.EventEmitter()), this._onWillOpen = this.register(new y2.EventEmitter()), this._setup(), this._decorationService = this._instantiationService.createInstance(A2.DecorationService), this._instantiationService.setService(B2.IDecorationService, this._decorationService), this._linkProviderService = this._instantiationService.createInstance(O.LinkProviderService), this._instantiationService.setService(S3.ILinkProviderService, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(a3.OscLinkProvider)), this.register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this.register(this._inputHandler.onRequestRefreshRows((e10, t9) => this.refresh(e10, t9))), this.register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this.register(this._inputHandler.onRequestReset(() => this.reset())), this.register(this._inputHandler.onRequestWindowsOptionsReport((e10) => this._reportWindowsOptions(e10))), this.register(this._inputHandler.onColor((e10) => this._handleColorEvent(e10))), this.register((0, y2.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)), this.register((0, y2.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)), this.register((0, y2.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this.register((0, y2.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this.register(this._bufferService.onResize((e10) => this._afterResize(e10.cols, e10.rows))), this.register((0, E2.toDisposable)(() => {
              this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
            }));
          }
          _handleColorEvent(e9) {
            if (this._themeService)
              for (const t9 of e9) {
                let e10, i6 = "";
                switch (t9.index) {
                  case 256:
                    e10 = "foreground", i6 = "10";
                    break;
                  case 257:
                    e10 = "background", i6 = "11";
                    break;
                  case 258:
                    e10 = "cursor", i6 = "12";
                    break;
                  default:
                    e10 = "ansi", i6 = "4;" + t9.index;
                }
                switch (t9.type) {
                  case 0:
                    const s9 = b2.color.toColorRGB("ansi" === e10 ? this._themeService.colors.ansi[t9.index] : this._themeService.colors[e10]);
                    this.coreService.triggerDataEvent(`${D.C0.ESC}]${i6};${(0, x2.toRgbString)(s9)}${D.C1_ESCAPED.ST}`);
                    break;
                  case 1:
                    if ("ansi" === e10)
                      this._themeService.modifyColors((e11) => e11.ansi[t9.index] = b2.channels.toColor(...t9.color));
                    else {
                      const i7 = e10;
                      this._themeService.modifyColors((e11) => e11[i7] = b2.channels.toColor(...t9.color));
                    }
                    break;
                  case 2:
                    this._themeService.restoreColor(t9.index);
                }
              }
          }
          _setup() {
            super._setup(), this._customKeyEventHandler = void 0;
          }
          get buffer() {
            return this.buffers.active;
          }
          focus() {
            this.textarea && this.textarea.focus({ preventScroll: true });
          }
          _handleScreenReaderModeOptionChange(e9) {
            e9 ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(M2.AccessibilityManager, this)) : this._accessibilityManager.clear();
          }
          _handleTextAreaFocus(e9) {
            this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
          }
          blur() {
            return this.textarea?.blur();
          }
          _handleTextAreaBlur() {
            this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
          }
          _syncTextArea() {
            if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService)
              return;
            const e9 = this.buffer.ybase + this.buffer.y, t9 = this.buffer.lines.get(e9);
            if (!t9)
              return;
            const i6 = Math.min(this.buffer.x, this.cols - 1), s9 = this._renderService.dimensions.css.cell.height, r5 = t9.getWidth(i6), n9 = this._renderService.dimensions.css.cell.width * r5, o8 = this.buffer.y * this._renderService.dimensions.css.cell.height, a4 = i6 * this._renderService.dimensions.css.cell.width;
            this.textarea.style.left = a4 + "px", this.textarea.style.top = o8 + "px", this.textarea.style.width = n9 + "px", this.textarea.style.height = s9 + "px", this.textarea.style.lineHeight = s9 + "px", this.textarea.style.zIndex = "-5";
          }
          _initGlobal() {
            this._bindKeys(), this.register((0, r4.addDisposableDomListener)(this.element, "copy", (e10) => {
              this.hasSelection() && (0, s8.copyHandler)(e10, this._selectionService);
            }));
            const e9 = (e10) => (0, s8.handlePasteEvent)(e10, this.textarea, this.coreService, this.optionsService);
            this.register((0, r4.addDisposableDomListener)(this.textarea, "paste", e9)), this.register((0, r4.addDisposableDomListener)(this.element, "paste", e9)), k2.isFirefox ? this.register((0, r4.addDisposableDomListener)(this.element, "mousedown", (e10) => {
              2 === e10.button && (0, s8.rightClickHandler)(e10, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
            })) : this.register((0, r4.addDisposableDomListener)(this.element, "contextmenu", (e10) => {
              (0, s8.rightClickHandler)(e10, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
            })), k2.isLinux && this.register((0, r4.addDisposableDomListener)(this.element, "auxclick", (e10) => {
              1 === e10.button && (0, s8.moveTextAreaUnderMouseCursor)(e10, this.textarea, this.screenElement);
            }));
          }
          _bindKeys() {
            this.register((0, r4.addDisposableDomListener)(this.textarea, "keyup", (e9) => this._keyUp(e9), true)), this.register((0, r4.addDisposableDomListener)(this.textarea, "keydown", (e9) => this._keyDown(e9), true)), this.register((0, r4.addDisposableDomListener)(this.textarea, "keypress", (e9) => this._keyPress(e9), true)), this.register((0, r4.addDisposableDomListener)(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this.register((0, r4.addDisposableDomListener)(this.textarea, "compositionupdate", (e9) => this._compositionHelper.compositionupdate(e9))), this.register((0, r4.addDisposableDomListener)(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this.register((0, r4.addDisposableDomListener)(this.textarea, "input", (e9) => this._inputEvent(e9), true)), this.register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
          }
          open(e9) {
            if (!e9)
              throw new Error("Terminal requires a parent element.");
            if (e9.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService)
              return void (this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView));
            this._document = e9.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), e9.appendChild(this.element);
            const t9 = this._document.createDocumentFragment();
            this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), t9.appendChild(this._viewportElement), this._viewportScrollArea = this._document.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this.register((0, r4.addDisposableDomListener)(this.screenElement, "mousemove", (e10) => this.updateCursorStyle(e10))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), t9.appendChild(this.screenElement), this.textarea = this._document.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", o7.promptLabel), k2.isChromeOS || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._coreBrowserService = this.register(this._instantiationService.createInstance(v3.CoreBrowserService, this.textarea, e9.ownerDocument.defaultView ?? window, this._document ?? "undefined" != typeof window ? window.document : null)), this._instantiationService.setService(S3.ICoreBrowserService, this._coreBrowserService), this.register((0, r4.addDisposableDomListener)(this.textarea, "focus", (e10) => this._handleTextAreaFocus(e10))), this.register((0, r4.addDisposableDomListener)(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(u3.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(S3.ICharSizeService, this._charSizeService), this._themeService = this._instantiationService.createInstance(C2.ThemeService), this._instantiationService.setService(S3.IThemeService, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(f2.CharacterJoinerService), this._instantiationService.setService(S3.ICharacterJoinerService, this._characterJoinerService), this._renderService = this.register(this._instantiationService.createInstance(g2.RenderService, this.rows, this.screenElement)), this._instantiationService.setService(S3.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange((e10) => this._onRender.fire(e10))), this.onResize((e10) => this._renderService.resize(e10.cols, e10.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(d3.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this._mouseService = this._instantiationService.createInstance(p3.MouseService), this._instantiationService.setService(S3.IMouseService, this._mouseService), this.linkifier = this.register(this._instantiationService.createInstance(n8.Linkifier, this.screenElement)), this.element.appendChild(t9);
            try {
              this._onWillOpen.fire(this.element);
            } catch {
            }
            this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this.viewport = this._instantiationService.createInstance(h3.Viewport, this._viewportElement, this._viewportScrollArea), this.viewport.onRequestScrollLines((e10) => this.scrollLines(e10.amount, e10.suppressScrollEvent, 1)), this.register(this._inputHandler.onRequestSyncScrollBar(() => this.viewport.syncScrollArea())), this.register(this.viewport), this.register(this.onCursorMove(() => {
              this._renderService.handleCursorMove(), this._syncTextArea();
            })), this.register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this.register(this.onBlur(() => this._renderService.handleBlur())), this.register(this.onFocus(() => this._renderService.handleFocus())), this.register(this._renderService.onDimensionsChange(() => this.viewport.syncScrollArea())), this._selectionService = this.register(this._instantiationService.createInstance(m2.SelectionService, this.element, this.screenElement, this.linkifier)), this._instantiationService.setService(S3.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((e10) => this.scrollLines(e10.amount, e10.suppressScrollEvent))), this.register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this.register(this._selectionService.onRequestRedraw((e10) => this._renderService.handleSelectionChanged(e10.start, e10.end, e10.columnSelectMode))), this.register(this._selectionService.onLinuxMouseSelection((e10) => {
              this.textarea.value = e10, this.textarea.focus(), this.textarea.select();
            })), this.register(this._onScroll.event((e10) => {
              this.viewport.syncScrollArea(), this._selectionService.refresh();
            })), this.register((0, r4.addDisposableDomListener)(this._viewportElement, "scroll", () => this._selectionService.refresh())), this.register(this._instantiationService.createInstance(c4.BufferDecorationRenderer, this.screenElement)), this.register((0, r4.addDisposableDomListener)(this.element, "mousedown", (e10) => this._selectionService.handleMouseDown(e10))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(M2.AccessibilityManager, this)), this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", (e10) => this._handleScreenReaderModeOptionChange(e10))), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l5.OverviewRulerRenderer, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRulerWidth", (e10) => {
              !this._overviewRulerRenderer && e10 && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l5.OverviewRulerRenderer, this._viewportElement, this.screenElement)));
            }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
          }
          _createRenderer() {
            return this._instantiationService.createInstance(_2.DomRenderer, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
          }
          bindMouse() {
            const e9 = this, t9 = this.element;
            function i6(t10) {
              const i7 = e9._mouseService.getMouseReportCoords(t10, e9.screenElement);
              if (!i7)
                return false;
              let s10, r5;
              switch (t10.overrideType || t10.type) {
                case "mousemove":
                  r5 = 32, void 0 === t10.buttons ? (s10 = 3, void 0 !== t10.button && (s10 = t10.button < 3 ? t10.button : 3)) : s10 = 1 & t10.buttons ? 0 : 4 & t10.buttons ? 1 : 2 & t10.buttons ? 2 : 3;
                  break;
                case "mouseup":
                  r5 = 0, s10 = t10.button < 3 ? t10.button : 3;
                  break;
                case "mousedown":
                  r5 = 1, s10 = t10.button < 3 ? t10.button : 3;
                  break;
                case "wheel":
                  if (e9._customWheelEventHandler && false === e9._customWheelEventHandler(t10))
                    return false;
                  if (0 === e9.viewport.getLinesScrolled(t10))
                    return false;
                  r5 = t10.deltaY < 0 ? 0 : 1, s10 = 4;
                  break;
                default:
                  return false;
              }
              return !(void 0 === r5 || void 0 === s10 || s10 > 4) && e9.coreMouseService.triggerMouseEvent({ col: i7.col, row: i7.row, x: i7.x, y: i7.y, button: s10, action: r5, ctrl: t10.ctrlKey, alt: t10.altKey, shift: t10.shiftKey });
            }
            const s9 = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, n9 = { mouseup: (e10) => (i6(e10), e10.buttons || (this._document.removeEventListener("mouseup", s9.mouseup), s9.mousedrag && this._document.removeEventListener("mousemove", s9.mousedrag)), this.cancel(e10)), wheel: (e10) => (i6(e10), this.cancel(e10, true)), mousedrag: (e10) => {
              e10.buttons && i6(e10);
            }, mousemove: (e10) => {
              e10.buttons || i6(e10);
            } };
            this.register(this.coreMouseService.onProtocolChange((e10) => {
              e10 ? ("debug" === this.optionsService.rawOptions.logLevel && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(e10)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), 8 & e10 ? s9.mousemove || (t9.addEventListener("mousemove", n9.mousemove), s9.mousemove = n9.mousemove) : (t9.removeEventListener("mousemove", s9.mousemove), s9.mousemove = null), 16 & e10 ? s9.wheel || (t9.addEventListener("wheel", n9.wheel, { passive: false }), s9.wheel = n9.wheel) : (t9.removeEventListener("wheel", s9.wheel), s9.wheel = null), 2 & e10 ? s9.mouseup || (s9.mouseup = n9.mouseup) : (this._document.removeEventListener("mouseup", s9.mouseup), s9.mouseup = null), 4 & e10 ? s9.mousedrag || (s9.mousedrag = n9.mousedrag) : (this._document.removeEventListener("mousemove", s9.mousedrag), s9.mousedrag = null);
            })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, r4.addDisposableDomListener)(t9, "mousedown", (e10) => {
              if (e10.preventDefault(), this.focus(), this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(e10))
                return i6(e10), s9.mouseup && this._document.addEventListener("mouseup", s9.mouseup), s9.mousedrag && this._document.addEventListener("mousemove", s9.mousedrag), this.cancel(e10);
            })), this.register((0, r4.addDisposableDomListener)(t9, "wheel", (e10) => {
              if (!s9.wheel) {
                if (this._customWheelEventHandler && false === this._customWheelEventHandler(e10))
                  return false;
                if (!this.buffer.hasScrollback) {
                  const t10 = this.viewport.getLinesScrolled(e10);
                  if (0 === t10)
                    return;
                  const i7 = D.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (e10.deltaY < 0 ? "A" : "B");
                  let s10 = "";
                  for (let e11 = 0; e11 < Math.abs(t10); e11++)
                    s10 += i7;
                  return this.coreService.triggerDataEvent(s10, true), this.cancel(e10, true);
                }
                return this.viewport.handleWheel(e10) ? this.cancel(e10) : void 0;
              }
            }, { passive: false })), this.register((0, r4.addDisposableDomListener)(t9, "touchstart", (e10) => {
              if (!this.coreMouseService.areMouseEventsActive)
                return this.viewport.handleTouchStart(e10), this.cancel(e10);
            }, { passive: true })), this.register((0, r4.addDisposableDomListener)(t9, "touchmove", (e10) => {
              if (!this.coreMouseService.areMouseEventsActive)
                return this.viewport.handleTouchMove(e10) ? void 0 : this.cancel(e10);
            }, { passive: false }));
          }
          refresh(e9, t9) {
            this._renderService?.refreshRows(e9, t9);
          }
          updateCursorStyle(e9) {
            this._selectionService?.shouldColumnSelect(e9) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
          }
          _showCursor() {
            this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
          }
          scrollLines(e9, t9, i6 = 0) {
            1 === i6 ? (super.scrollLines(e9, t9, i6), this.refresh(0, this.rows - 1)) : this.viewport?.scrollLines(e9);
          }
          paste(e9) {
            (0, s8.paste)(e9, this.textarea, this.coreService, this.optionsService);
          }
          attachCustomKeyEventHandler(e9) {
            this._customKeyEventHandler = e9;
          }
          attachCustomWheelEventHandler(e9) {
            this._customWheelEventHandler = e9;
          }
          registerLinkProvider(e9) {
            return this._linkProviderService.registerLinkProvider(e9);
          }
          registerCharacterJoiner(e9) {
            if (!this._characterJoinerService)
              throw new Error("Terminal must be opened first");
            const t9 = this._characterJoinerService.register(e9);
            return this.refresh(0, this.rows - 1), t9;
          }
          deregisterCharacterJoiner(e9) {
            if (!this._characterJoinerService)
              throw new Error("Terminal must be opened first");
            this._characterJoinerService.deregister(e9) && this.refresh(0, this.rows - 1);
          }
          get markers() {
            return this.buffer.markers;
          }
          registerMarker(e9) {
            return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e9);
          }
          registerDecoration(e9) {
            return this._decorationService.registerDecoration(e9);
          }
          hasSelection() {
            return !!this._selectionService && this._selectionService.hasSelection;
          }
          select(e9, t9, i6) {
            this._selectionService.setSelection(e9, t9, i6);
          }
          getSelection() {
            return this._selectionService ? this._selectionService.selectionText : "";
          }
          getSelectionPosition() {
            if (this._selectionService && this._selectionService.hasSelection)
              return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
          }
          clearSelection() {
            this._selectionService?.clearSelection();
          }
          selectAll() {
            this._selectionService?.selectAll();
          }
          selectLines(e9, t9) {
            this._selectionService?.selectLines(e9, t9);
          }
          _keyDown(e9) {
            if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && false === this._customKeyEventHandler(e9))
              return false;
            const t9 = this.browser.isMac && this.options.macOptionIsMeta && e9.altKey;
            if (!t9 && !this._compositionHelper.keydown(e9))
              return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), false;
            t9 || "Dead" !== e9.key && "AltGraph" !== e9.key || (this._unprocessedDeadKey = true);
            const i6 = (0, R2.evaluateKeyboardEvent)(e9, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
            if (this.updateCursorStyle(e9), 3 === i6.type || 2 === i6.type) {
              const t10 = this.rows - 1;
              return this.scrollLines(2 === i6.type ? -t10 : t10), this.cancel(e9, true);
            }
            return 1 === i6.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e9) || (i6.cancel && this.cancel(e9, true), !i6.key || !!(e9.key && !e9.ctrlKey && !e9.altKey && !e9.metaKey && 1 === e9.key.length && e9.key.charCodeAt(0) >= 65 && e9.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = false, true) : (i6.key !== D.C0.ETX && i6.key !== D.C0.CR || (this.textarea.value = ""), this._onKey.fire({ key: i6.key, domEvent: e9 }), this._showCursor(), this.coreService.triggerDataEvent(i6.key, true), !this.optionsService.rawOptions.screenReaderMode || e9.altKey || e9.ctrlKey ? this.cancel(e9, true) : void (this._keyDownHandled = true))));
          }
          _isThirdLevelShift(e9, t9) {
            const i6 = e9.isMac && !this.options.macOptionIsMeta && t9.altKey && !t9.ctrlKey && !t9.metaKey || e9.isWindows && t9.altKey && t9.ctrlKey && !t9.metaKey || e9.isWindows && t9.getModifierState("AltGraph");
            return "keypress" === t9.type ? i6 : i6 && (!t9.keyCode || t9.keyCode > 47);
          }
          _keyUp(e9) {
            this._keyDownSeen = false, this._customKeyEventHandler && false === this._customKeyEventHandler(e9) || (function(e10) {
              return 16 === e10.keyCode || 17 === e10.keyCode || 18 === e10.keyCode;
            }(e9) || this.focus(), this.updateCursorStyle(e9), this._keyPressHandled = false);
          }
          _keyPress(e9) {
            let t9;
            if (this._keyPressHandled = false, this._keyDownHandled)
              return false;
            if (this._customKeyEventHandler && false === this._customKeyEventHandler(e9))
              return false;
            if (this.cancel(e9), e9.charCode)
              t9 = e9.charCode;
            else if (null === e9.which || void 0 === e9.which)
              t9 = e9.keyCode;
            else {
              if (0 === e9.which || 0 === e9.charCode)
                return false;
              t9 = e9.which;
            }
            return !(!t9 || (e9.altKey || e9.ctrlKey || e9.metaKey) && !this._isThirdLevelShift(this.browser, e9) || (t9 = String.fromCharCode(t9), this._onKey.fire({ key: t9, domEvent: e9 }), this._showCursor(), this.coreService.triggerDataEvent(t9, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, 0));
          }
          _inputEvent(e9) {
            if (e9.data && "insertText" === e9.inputType && (!e9.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
              if (this._keyPressHandled)
                return false;
              this._unprocessedDeadKey = false;
              const t9 = e9.data;
              return this.coreService.triggerDataEvent(t9, true), this.cancel(e9), true;
            }
            return false;
          }
          resize(e9, t9) {
            e9 !== this.cols || t9 !== this.rows ? super.resize(e9, t9) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
          }
          _afterResize(e9, t9) {
            this._charSizeService?.measure(), this.viewport?.syncScrollArea(true);
          }
          clear() {
            if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
              this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
              for (let e9 = 1; e9 < this.rows; e9++)
                this.buffer.lines.push(this.buffer.getBlankLine(L2.DEFAULT_ATTR_DATA));
              this._onScroll.fire({ position: this.buffer.ydisp, source: 0 }), this.viewport?.reset(), this.refresh(0, this.rows - 1);
            }
          }
          reset() {
            this.options.rows = this.rows, this.options.cols = this.cols;
            const e9 = this._customKeyEventHandler;
            this._setup(), super.reset(), this._selectionService?.reset(), this._decorationService.reset(), this.viewport?.reset(), this._customKeyEventHandler = e9, this.refresh(0, this.rows - 1);
          }
          clearTextureAtlas() {
            this._renderService?.clearTextureAtlas();
          }
          _reportFocus() {
            this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent(D.C0.ESC + "[I") : this.coreService.triggerDataEvent(D.C0.ESC + "[O");
          }
          _reportWindowsOptions(e9) {
            if (this._renderService)
              switch (e9) {
                case T2.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                  const e10 = this._renderService.dimensions.css.canvas.width.toFixed(0), t9 = this._renderService.dimensions.css.canvas.height.toFixed(0);
                  this.coreService.triggerDataEvent(`${D.C0.ESC}[4;${t9};${e10}t`);
                  break;
                case T2.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                  const i6 = this._renderService.dimensions.css.cell.width.toFixed(0), s9 = this._renderService.dimensions.css.cell.height.toFixed(0);
                  this.coreService.triggerDataEvent(`${D.C0.ESC}[6;${s9};${i6}t`);
              }
          }
          cancel(e9, t9) {
            if (this.options.cancelEvents || t9)
              return e9.preventDefault(), e9.stopPropagation(), false;
          }
        }
        t8.Terminal = P2;
      }, 9924: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.TimeBasedDebouncer = void 0, t8.TimeBasedDebouncer = class {
          constructor(e9, t9 = 1e3) {
            this._renderCallback = e9, this._debounceThresholdMS = t9, this._lastRefreshMs = 0, this._additionalRefreshRequested = false;
          }
          dispose() {
            this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
          }
          refresh(e9, t9, i5) {
            this._rowCount = i5, e9 = void 0 !== e9 ? e9 : 0, t9 = void 0 !== t9 ? t9 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e9) : e9, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t9) : t9;
            const s8 = Date.now();
            if (s8 - this._lastRefreshMs >= this._debounceThresholdMS)
              this._lastRefreshMs = s8, this._innerRefresh();
            else if (!this._additionalRefreshRequested) {
              const e10 = s8 - this._lastRefreshMs, t10 = this._debounceThresholdMS - e10;
              this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(() => {
                this._lastRefreshMs = Date.now(), this._innerRefresh(), this._additionalRefreshRequested = false, this._refreshTimeoutID = void 0;
              }, t10);
            }
          }
          _innerRefresh() {
            if (void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
              return;
            const e9 = Math.max(this._rowStart, 0), t9 = Math.min(this._rowEnd, this._rowCount - 1);
            this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e9, t9);
          }
        };
      }, 1680: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Viewport = void 0;
        const n8 = i5(3656), o7 = i5(4725), a3 = i5(8460), h3 = i5(844), c4 = i5(2585);
        let l5 = t8.Viewport = class extends h3.Disposable {
          constructor(e9, t9, i6, s9, r5, o8, h4, c5) {
            super(), this._viewportElement = e9, this._scrollArea = t9, this._bufferService = i6, this._optionsService = s9, this._charSizeService = r5, this._renderService = o8, this._coreBrowserService = h4, this.scrollBarWidth = 0, this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._wheelPartialScroll = 0, this._refreshAnimationFrame = null, this._ignoreNextScrollEvent = false, this._smoothScrollState = { startTime: 0, origin: -1, target: -1 }, this._onRequestScrollLines = this.register(new a3.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this.register((0, n8.addDisposableDomListener)(this._viewportElement, "scroll", this._handleScroll.bind(this))), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e10) => this._activeBuffer = e10.activeBuffer)), this._renderDimensions = this._renderService.dimensions, this.register(this._renderService.onDimensionsChange((e10) => this._renderDimensions = e10)), this._handleThemeChange(c5.colors), this.register(c5.onChangeColors((e10) => this._handleThemeChange(e10))), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.syncScrollArea())), setTimeout(() => this.syncScrollArea());
          }
          _handleThemeChange(e9) {
            this._viewportElement.style.backgroundColor = e9.background.css;
          }
          reset() {
            this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._coreBrowserService.window.requestAnimationFrame(() => this.syncScrollArea());
          }
          _refresh(e9) {
            if (e9)
              return this._innerRefresh(), void (null !== this._refreshAnimationFrame && this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));
            null === this._refreshAnimationFrame && (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
          }
          _innerRefresh() {
            if (this._charSizeService.height > 0) {
              this._currentRowHeight = this._renderDimensions.device.cell.height / this._coreBrowserService.dpr, this._currentDeviceCellHeight = this._renderDimensions.device.cell.height, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
              const e10 = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderDimensions.css.canvas.height);
              this._lastRecordedBufferHeight !== e10 && (this._lastRecordedBufferHeight = e10, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
            }
            const e9 = this._bufferService.buffer.ydisp * this._currentRowHeight;
            this._viewportElement.scrollTop !== e9 && (this._ignoreNextScrollEvent = true, this._viewportElement.scrollTop = e9), this._refreshAnimationFrame = null;
          }
          syncScrollArea(e9 = false) {
            if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
              return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e9);
            this._lastRecordedViewportHeight === this._renderService.dimensions.css.canvas.height && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.device.cell.height === this._currentDeviceCellHeight || this._refresh(e9);
          }
          _handleScroll(e9) {
            if (this._lastScrollTop = this._viewportElement.scrollTop, !this._viewportElement.offsetParent)
              return;
            if (this._ignoreNextScrollEvent)
              return this._ignoreNextScrollEvent = false, void this._onRequestScrollLines.fire({ amount: 0, suppressScrollEvent: true });
            const t9 = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
            this._onRequestScrollLines.fire({ amount: t9, suppressScrollEvent: true });
          }
          _smoothScroll() {
            if (this._isDisposed || -1 === this._smoothScrollState.origin || -1 === this._smoothScrollState.target)
              return;
            const e9 = this._smoothScrollPercent();
            this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(e9 * (this._smoothScrollState.target - this._smoothScrollState.origin)), e9 < 1 ? this._coreBrowserService.window.requestAnimationFrame(() => this._smoothScroll()) : this._clearSmoothScrollState();
          }
          _smoothScrollPercent() {
            return this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime ? Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0) : 1;
          }
          _clearSmoothScrollState() {
            this._smoothScrollState.startTime = 0, this._smoothScrollState.origin = -1, this._smoothScrollState.target = -1;
          }
          _bubbleScroll(e9, t9) {
            const i6 = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
            return !(t9 < 0 && 0 !== this._viewportElement.scrollTop || t9 > 0 && i6 < this._lastRecordedBufferHeight) || (e9.cancelable && e9.preventDefault(), false);
          }
          handleWheel(e9) {
            const t9 = this._getPixelsScrolled(e9);
            return 0 !== t9 && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, -1 === this._smoothScrollState.target ? this._smoothScrollState.target = this._viewportElement.scrollTop + t9 : this._smoothScrollState.target += t9, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t9, this._bubbleScroll(e9, t9));
          }
          scrollLines(e9) {
            if (0 !== e9)
              if (this._optionsService.rawOptions.smoothScrollDuration) {
                const t9 = e9 * this._currentRowHeight;
                this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target = this._smoothScrollState.origin + t9, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState();
              } else
                this._onRequestScrollLines.fire({ amount: e9, suppressScrollEvent: false });
          }
          _getPixelsScrolled(e9) {
            if (0 === e9.deltaY || e9.shiftKey)
              return 0;
            let t9 = this._applyScrollModifier(e9.deltaY, e9);
            return e9.deltaMode === WheelEvent.DOM_DELTA_LINE ? t9 *= this._currentRowHeight : e9.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t9 *= this._currentRowHeight * this._bufferService.rows), t9;
          }
          getBufferElements(e9, t9) {
            let i6, s9 = "";
            const r5 = [], n9 = t9 ?? this._bufferService.buffer.lines.length, o8 = this._bufferService.buffer.lines;
            for (let t10 = e9; t10 < n9; t10++) {
              const e10 = o8.get(t10);
              if (!e10)
                continue;
              const n10 = o8.get(t10 + 1)?.isWrapped;
              if (s9 += e10.translateToString(!n10), !n10 || t10 === o8.length - 1) {
                const e11 = document.createElement("div");
                e11.textContent = s9, r5.push(e11), s9.length > 0 && (i6 = e11), s9 = "";
              }
            }
            return { bufferElements: r5, cursorElement: i6 };
          }
          getLinesScrolled(e9) {
            if (0 === e9.deltaY || e9.shiftKey)
              return 0;
            let t9 = this._applyScrollModifier(e9.deltaY, e9);
            return e9.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t9 /= this._currentRowHeight + 0, this._wheelPartialScroll += t9, t9 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e9.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t9 *= this._bufferService.rows), t9;
          }
          _applyScrollModifier(e9, t9) {
            const i6 = this._optionsService.rawOptions.fastScrollModifier;
            return "alt" === i6 && t9.altKey || "ctrl" === i6 && t9.ctrlKey || "shift" === i6 && t9.shiftKey ? e9 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e9 * this._optionsService.rawOptions.scrollSensitivity;
          }
          handleTouchStart(e9) {
            this._lastTouchY = e9.touches[0].pageY;
          }
          handleTouchMove(e9) {
            const t9 = this._lastTouchY - e9.touches[0].pageY;
            return this._lastTouchY = e9.touches[0].pageY, 0 !== t9 && (this._viewportElement.scrollTop += t9, this._bubbleScroll(e9, t9));
          }
        };
        t8.Viewport = l5 = s8([r4(2, c4.IBufferService), r4(3, c4.IOptionsService), r4(4, o7.ICharSizeService), r4(5, o7.IRenderService), r4(6, o7.ICoreBrowserService), r4(7, o7.IThemeService)], l5);
      }, 3107: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferDecorationRenderer = void 0;
        const n8 = i5(4725), o7 = i5(844), a3 = i5(2585);
        let h3 = t8.BufferDecorationRenderer = class extends o7.Disposable {
          constructor(e9, t9, i6, s9, r5) {
            super(), this._screenElement = e9, this._bufferService = t9, this._coreBrowserService = i6, this._decorationService = s9, this._renderService = r5, this._decorationElements = /* @__PURE__ */ new Map(), this._altBufferIsActive = false, this._dimensionsChanged = false, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this.register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this.register(this._renderService.onDimensionsChange(() => {
              this._dimensionsChanged = true, this._queueRefresh();
            })), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
              this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
            })), this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this.register(this._decorationService.onDecorationRemoved((e10) => this._removeDecoration(e10))), this.register((0, o7.toDisposable)(() => {
              this._container.remove(), this._decorationElements.clear();
            }));
          }
          _queueRefresh() {
            void 0 === this._animationFrame && (this._animationFrame = this._renderService.addRefreshCallback(() => {
              this._doRefreshDecorations(), this._animationFrame = void 0;
            }));
          }
          _doRefreshDecorations() {
            for (const e9 of this._decorationService.decorations)
              this._renderDecoration(e9);
            this._dimensionsChanged = false;
          }
          _renderDecoration(e9) {
            this._refreshStyle(e9), this._dimensionsChanged && this._refreshXPosition(e9);
          }
          _createElement(e9) {
            const t9 = this._coreBrowserService.mainDocument.createElement("div");
            t9.classList.add("xterm-decoration"), t9.classList.toggle("xterm-decoration-top-layer", "top" === e9?.options?.layer), t9.style.width = `${Math.round((e9.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, t9.style.height = (e9.options.height || 1) * this._renderService.dimensions.css.cell.height + "px", t9.style.top = (e9.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px", t9.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
            const i6 = e9.options.x ?? 0;
            return i6 && i6 > this._bufferService.cols && (t9.style.display = "none"), this._refreshXPosition(e9, t9), t9;
          }
          _refreshStyle(e9) {
            const t9 = e9.marker.line - this._bufferService.buffers.active.ydisp;
            if (t9 < 0 || t9 >= this._bufferService.rows)
              e9.element && (e9.element.style.display = "none", e9.onRenderEmitter.fire(e9.element));
            else {
              let i6 = this._decorationElements.get(e9);
              i6 || (i6 = this._createElement(e9), e9.element = i6, this._decorationElements.set(e9, i6), this._container.appendChild(i6), e9.onDispose(() => {
                this._decorationElements.delete(e9), i6.remove();
              })), i6.style.top = t9 * this._renderService.dimensions.css.cell.height + "px", i6.style.display = this._altBufferIsActive ? "none" : "block", e9.onRenderEmitter.fire(i6);
            }
          }
          _refreshXPosition(e9, t9 = e9.element) {
            if (!t9)
              return;
            const i6 = e9.options.x ?? 0;
            "right" === (e9.options.anchor || "left") ? t9.style.right = i6 ? i6 * this._renderService.dimensions.css.cell.width + "px" : "" : t9.style.left = i6 ? i6 * this._renderService.dimensions.css.cell.width + "px" : "";
          }
          _removeDecoration(e9) {
            this._decorationElements.get(e9)?.remove(), this._decorationElements.delete(e9), e9.dispose();
          }
        };
        t8.BufferDecorationRenderer = h3 = s8([r4(1, a3.IBufferService), r4(2, n8.ICoreBrowserService), r4(3, a3.IDecorationService), r4(4, n8.IRenderService)], h3);
      }, 5871: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.ColorZoneStore = void 0, t8.ColorZoneStore = class {
          constructor() {
            this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
          }
          get zones() {
            return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
          }
          clear() {
            this._zones.length = 0, this._zonePoolIndex = 0;
          }
          addDecoration(e9) {
            if (e9.options.overviewRulerOptions) {
              for (const t9 of this._zones)
                if (t9.color === e9.options.overviewRulerOptions.color && t9.position === e9.options.overviewRulerOptions.position) {
                  if (this._lineIntersectsZone(t9, e9.marker.line))
                    return;
                  if (this._lineAdjacentToZone(t9, e9.marker.line, e9.options.overviewRulerOptions.position))
                    return void this._addLineToZone(t9, e9.marker.line);
                }
              if (this._zonePoolIndex < this._zonePool.length)
                return this._zonePool[this._zonePoolIndex].color = e9.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e9.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e9.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e9.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
              this._zones.push({ color: e9.options.overviewRulerOptions.color, position: e9.options.overviewRulerOptions.position, startBufferLine: e9.marker.line, endBufferLine: e9.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
            }
          }
          setPadding(e9) {
            this._linePadding = e9;
          }
          _lineIntersectsZone(e9, t9) {
            return t9 >= e9.startBufferLine && t9 <= e9.endBufferLine;
          }
          _lineAdjacentToZone(e9, t9, i5) {
            return t9 >= e9.startBufferLine - this._linePadding[i5 || "full"] && t9 <= e9.endBufferLine + this._linePadding[i5 || "full"];
          }
          _addLineToZone(e9, t9) {
            e9.startBufferLine = Math.min(e9.startBufferLine, t9), e9.endBufferLine = Math.max(e9.endBufferLine, t9);
          }
        };
      }, 5744: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.OverviewRulerRenderer = void 0;
        const n8 = i5(5871), o7 = i5(4725), a3 = i5(844), h3 = i5(2585), c4 = { full: 0, left: 0, center: 0, right: 0 }, l5 = { full: 0, left: 0, center: 0, right: 0 }, d3 = { full: 0, left: 0, center: 0, right: 0 };
        let _2 = t8.OverviewRulerRenderer = class extends a3.Disposable {
          get _width() {
            return this._optionsService.options.overviewRulerWidth || 0;
          }
          constructor(e9, t9, i6, s9, r5, o8, h4) {
            super(), this._viewportElement = e9, this._screenElement = t9, this._bufferService = i6, this._decorationService = s9, this._renderService = r5, this._optionsService = o8, this._coreBrowserService = h4, this._colorZoneStore = new n8.ColorZoneStore(), this._shouldUpdateDimensions = true, this._shouldUpdateAnchor = true, this._lastKnownBufferLength = 0, this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement);
            const c5 = this._canvas.getContext("2d");
            if (!c5)
              throw new Error("Ctx cannot be null");
            this._ctx = c5, this._registerDecorationListeners(), this._registerBufferChangeListeners(), this._registerDimensionChangeListeners(), this.register((0, a3.toDisposable)(() => {
              this._canvas?.remove();
            }));
          }
          _registerDecorationListeners() {
            this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, true))), this.register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, true)));
          }
          _registerBufferChangeListeners() {
            this.register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
              this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
            })), this.register(this._bufferService.onScroll(() => {
              this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
            }));
          }
          _registerDimensionChangeListeners() {
            this.register(this._renderService.onRender(() => {
              this._containerHeight && this._containerHeight === this._screenElement.clientHeight || (this._queueRefresh(true), this._containerHeight = this._screenElement.clientHeight);
            })), this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", () => this._queueRefresh(true))), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh(true))), this._queueRefresh(true);
          }
          _refreshDrawConstants() {
            const e9 = Math.floor(this._canvas.width / 3), t9 = Math.ceil(this._canvas.width / 3);
            l5.full = this._canvas.width, l5.left = e9, l5.center = t9, l5.right = e9, this._refreshDrawHeightConstants(), d3.full = 0, d3.left = 0, d3.center = l5.left, d3.right = l5.left + l5.center;
          }
          _refreshDrawHeightConstants() {
            c4.full = Math.round(2 * this._coreBrowserService.dpr);
            const e9 = this._canvas.height / this._bufferService.buffer.lines.length, t9 = Math.round(Math.max(Math.min(e9, 12), 6) * this._coreBrowserService.dpr);
            c4.left = t9, c4.center = t9, c4.right = t9;
          }
          _refreshColorZonePadding() {
            this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c4.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c4.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c4.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c4.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
          }
          _refreshCanvasDimensions() {
            this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
          }
          _refreshDecorations() {
            this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
            for (const e10 of this._decorationService.decorations)
              this._colorZoneStore.addDecoration(e10);
            this._ctx.lineWidth = 1;
            const e9 = this._colorZoneStore.zones;
            for (const t9 of e9)
              "full" !== t9.position && this._renderColorZone(t9);
            for (const t9 of e9)
              "full" === t9.position && this._renderColorZone(t9);
            this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
          }
          _renderColorZone(e9) {
            this._ctx.fillStyle = e9.color, this._ctx.fillRect(d3[e9.position || "full"], Math.round((this._canvas.height - 1) * (e9.startBufferLine / this._bufferService.buffers.active.lines.length) - c4[e9.position || "full"] / 2), l5[e9.position || "full"], Math.round((this._canvas.height - 1) * ((e9.endBufferLine - e9.startBufferLine) / this._bufferService.buffers.active.lines.length) + c4[e9.position || "full"]));
          }
          _queueRefresh(e9, t9) {
            this._shouldUpdateDimensions = e9 || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t9 || this._shouldUpdateAnchor, void 0 === this._animationFrame && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
              this._refreshDecorations(), this._animationFrame = void 0;
            }));
          }
        };
        t8.OverviewRulerRenderer = _2 = s8([r4(2, h3.IBufferService), r4(3, h3.IDecorationService), r4(4, o7.IRenderService), r4(5, h3.IOptionsService), r4(6, o7.ICoreBrowserService)], _2);
      }, 2950: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CompositionHelper = void 0;
        const n8 = i5(4725), o7 = i5(2585), a3 = i5(2584);
        let h3 = t8.CompositionHelper = class {
          get isComposing() {
            return this._isComposing;
          }
          constructor(e9, t9, i6, s9, r5, n9) {
            this._textarea = e9, this._compositionView = t9, this._bufferService = i6, this._optionsService = s9, this._coreService = r5, this._renderService = n9, this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
          }
          compositionstart() {
            this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
          }
          compositionupdate(e9) {
            this._compositionView.textContent = e9.data, this.updateCompositionElements(), setTimeout(() => {
              this._compositionPosition.end = this._textarea.value.length;
            }, 0);
          }
          compositionend() {
            this._finalizeComposition(true);
          }
          keydown(e9) {
            if (this._isComposing || this._isSendingComposition) {
              if (229 === e9.keyCode)
                return false;
              if (16 === e9.keyCode || 17 === e9.keyCode || 18 === e9.keyCode)
                return false;
              this._finalizeComposition(false);
            }
            return 229 !== e9.keyCode || (this._handleAnyTextareaChanges(), false);
          }
          _finalizeComposition(e9) {
            if (this._compositionView.classList.remove("active"), this._isComposing = false, e9) {
              const e10 = { start: this._compositionPosition.start, end: this._compositionPosition.end };
              this._isSendingComposition = true, setTimeout(() => {
                if (this._isSendingComposition) {
                  let t9;
                  this._isSendingComposition = false, e10.start += this._dataAlreadySent.length, t9 = this._isComposing ? this._textarea.value.substring(e10.start, e10.end) : this._textarea.value.substring(e10.start), t9.length > 0 && this._coreService.triggerDataEvent(t9, true);
                }
              }, 0);
            } else {
              this._isSendingComposition = false;
              const e10 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
              this._coreService.triggerDataEvent(e10, true);
            }
          }
          _handleAnyTextareaChanges() {
            const e9 = this._textarea.value;
            setTimeout(() => {
              if (!this._isComposing) {
                const t9 = this._textarea.value, i6 = t9.replace(e9, "");
                this._dataAlreadySent = i6, t9.length > e9.length ? this._coreService.triggerDataEvent(i6, true) : t9.length < e9.length ? this._coreService.triggerDataEvent(`${a3.C0.DEL}`, true) : t9.length === e9.length && t9 !== e9 && this._coreService.triggerDataEvent(t9, true);
              }
            }, 0);
          }
          updateCompositionElements(e9) {
            if (this._isComposing) {
              if (this._bufferService.buffer.isCursorInViewport) {
                const e10 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), t9 = this._renderService.dimensions.css.cell.height, i6 = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, s9 = e10 * this._renderService.dimensions.css.cell.width;
                this._compositionView.style.left = s9 + "px", this._compositionView.style.top = i6 + "px", this._compositionView.style.height = t9 + "px", this._compositionView.style.lineHeight = t9 + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                const r5 = this._compositionView.getBoundingClientRect();
                this._textarea.style.left = s9 + "px", this._textarea.style.top = i6 + "px", this._textarea.style.width = Math.max(r5.width, 1) + "px", this._textarea.style.height = Math.max(r5.height, 1) + "px", this._textarea.style.lineHeight = r5.height + "px";
              }
              e9 || setTimeout(() => this.updateCompositionElements(true), 0);
            }
          }
        };
        t8.CompositionHelper = h3 = s8([r4(2, o7.IBufferService), r4(3, o7.IOptionsService), r4(4, o7.ICoreService), r4(5, n8.IRenderService)], h3);
      }, 9806: (e8, t8) => {
        function i5(e9, t9, i6) {
          const s8 = i6.getBoundingClientRect(), r4 = e9.getComputedStyle(i6), n8 = parseInt(r4.getPropertyValue("padding-left")), o7 = parseInt(r4.getPropertyValue("padding-top"));
          return [t9.clientX - s8.left - n8, t9.clientY - s8.top - o7];
        }
        Object.defineProperty(t8, "__esModule", { value: true }), t8.getCoords = t8.getCoordsRelativeToElement = void 0, t8.getCoordsRelativeToElement = i5, t8.getCoords = function(e9, t9, s8, r4, n8, o7, a3, h3, c4) {
          if (!o7)
            return;
          const l5 = i5(e9, t9, s8);
          return l5 ? (l5[0] = Math.ceil((l5[0] + (c4 ? a3 / 2 : 0)) / a3), l5[1] = Math.ceil(l5[1] / h3), l5[0] = Math.min(Math.max(l5[0], 1), r4 + (c4 ? 1 : 0)), l5[1] = Math.min(Math.max(l5[1], 1), n8), l5) : void 0;
        };
      }, 9504: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.moveToCellSequence = void 0;
        const s8 = i5(2584);
        function r4(e9, t9, i6, s9) {
          const r5 = e9 - n8(e9, i6), a4 = t9 - n8(t9, i6), l5 = Math.abs(r5 - a4) - function(e10, t10, i7) {
            let s10 = 0;
            const r6 = e10 - n8(e10, i7), a5 = t10 - n8(t10, i7);
            for (let n9 = 0; n9 < Math.abs(r6 - a5); n9++) {
              const a6 = "A" === o7(e10, t10) ? -1 : 1, h4 = i7.buffer.lines.get(r6 + a6 * n9);
              h4?.isWrapped && s10++;
            }
            return s10;
          }(e9, t9, i6);
          return c4(l5, h3(o7(e9, t9), s9));
        }
        function n8(e9, t9) {
          let i6 = 0, s9 = t9.buffer.lines.get(e9), r5 = s9?.isWrapped;
          for (; r5 && e9 >= 0 && e9 < t9.rows; )
            i6++, s9 = t9.buffer.lines.get(--e9), r5 = s9?.isWrapped;
          return i6;
        }
        function o7(e9, t9) {
          return e9 > t9 ? "A" : "B";
        }
        function a3(e9, t9, i6, s9, r5, n9) {
          let o8 = e9, a4 = t9, h4 = "";
          for (; o8 !== i6 || a4 !== s9; )
            o8 += r5 ? 1 : -1, r5 && o8 > n9.cols - 1 ? (h4 += n9.buffer.translateBufferLineToString(a4, false, e9, o8), o8 = 0, e9 = 0, a4++) : !r5 && o8 < 0 && (h4 += n9.buffer.translateBufferLineToString(a4, false, 0, e9 + 1), o8 = n9.cols - 1, e9 = o8, a4--);
          return h4 + n9.buffer.translateBufferLineToString(a4, false, e9, o8);
        }
        function h3(e9, t9) {
          const i6 = t9 ? "O" : "[";
          return s8.C0.ESC + i6 + e9;
        }
        function c4(e9, t9) {
          e9 = Math.floor(e9);
          let i6 = "";
          for (let s9 = 0; s9 < e9; s9++)
            i6 += t9;
          return i6;
        }
        t8.moveToCellSequence = function(e9, t9, i6, s9) {
          const o8 = i6.buffer.x, l5 = i6.buffer.y;
          if (!i6.buffer.hasScrollback)
            return function(e10, t10, i7, s10, o9, l6) {
              return 0 === r4(t10, s10, o9, l6).length ? "" : c4(a3(e10, t10, e10, t10 - n8(t10, o9), false, o9).length, h3("D", l6));
            }(o8, l5, 0, t9, i6, s9) + r4(l5, t9, i6, s9) + function(e10, t10, i7, s10, o9, l6) {
              let d4;
              d4 = r4(t10, s10, o9, l6).length > 0 ? s10 - n8(s10, o9) : t10;
              const _3 = s10, u3 = function(e11, t11, i8, s11, o10, a4) {
                let h4;
                return h4 = r4(i8, s11, o10, a4).length > 0 ? s11 - n8(s11, o10) : t11, e11 < i8 && h4 <= s11 || e11 >= i8 && h4 < s11 ? "C" : "D";
              }(e10, t10, i7, s10, o9, l6);
              return c4(a3(e10, d4, i7, _3, "C" === u3, o9).length, h3(u3, l6));
            }(o8, l5, e9, t9, i6, s9);
          let d3;
          if (l5 === t9)
            return d3 = o8 > e9 ? "D" : "C", c4(Math.abs(o8 - e9), h3(d3, s9));
          d3 = l5 > t9 ? "D" : "C";
          const _2 = Math.abs(l5 - t9);
          return c4(function(e10, t10) {
            return t10.cols - e10;
          }(l5 > t9 ? e9 : o8, i6) + (_2 - 1) * i6.cols + 1 + ((l5 > t9 ? o8 : e9) - 1), h3(d3, s9));
        };
      }, 1296: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.DomRenderer = void 0;
        const n8 = i5(3787), o7 = i5(2550), a3 = i5(2223), h3 = i5(6171), c4 = i5(6052), l5 = i5(4725), d3 = i5(8055), _2 = i5(8460), u3 = i5(844), f2 = i5(2585), v3 = "xterm-dom-renderer-owner-", p3 = "xterm-rows", g2 = "xterm-fg-", m2 = "xterm-bg-", S3 = "xterm-focus", C2 = "xterm-selection";
        let b2 = 1, w2 = t8.DomRenderer = class extends u3.Disposable {
          constructor(e9, t9, i6, s9, r5, a4, l6, d4, f3, g3, m3, S4, w3) {
            super(), this._terminal = e9, this._document = t9, this._element = i6, this._screenElement = s9, this._viewportElement = r5, this._helperContainer = a4, this._linkifier2 = l6, this._charSizeService = f3, this._optionsService = g3, this._bufferService = m3, this._coreBrowserService = S4, this._themeService = w3, this._terminalClass = b2++, this._rowElements = [], this._selectionRenderModel = (0, c4.createSelectionRenderModel)(), this.onRequestRedraw = this.register(new _2.EventEmitter()).event, this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(p3), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(C2), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = (0, h3.createRenderDimensions)(), this._updateDimensions(), this.register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this.register(this._themeService.onChangeColors((e10) => this._injectCss(e10))), this._injectCss(this._themeService.colors), this._rowFactory = d4.createInstance(n8.DomRendererRowFactory, document), this._element.classList.add(v3 + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this.register(this._linkifier2.onShowLinkUnderline((e10) => this._handleLinkHover(e10))), this.register(this._linkifier2.onHideLinkUnderline((e10) => this._handleLinkLeave(e10))), this.register((0, u3.toDisposable)(() => {
              this._element.classList.remove(v3 + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
            })), this._widthCache = new o7.WidthCache(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
          }
          _updateDimensions() {
            const e9 = this._coreBrowserService.dpr;
            this.dimensions.device.char.width = this._charSizeService.width * e9, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e9), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e9), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e9), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
            for (const e10 of this._rowElements)
              e10.style.width = `${this.dimensions.css.canvas.width}px`, e10.style.height = `${this.dimensions.css.cell.height}px`, e10.style.lineHeight = `${this.dimensions.css.cell.height}px`, e10.style.overflow = "hidden";
            this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
            const t9 = `${this._terminalSelector} .${p3} span { display: inline-block; height: 100%; vertical-align: top;}`;
            this._dimensionsStyleElement.textContent = t9, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
          }
          _injectCss(e9) {
            this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
            let t9 = `${this._terminalSelector} .${p3} { color: ${e9.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
            t9 += `${this._terminalSelector} .${p3} .xterm-dim { color: ${d3.color.multiplyOpacity(e9.foreground, 0.5).css};}`, t9 += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
            const i6 = `blink_underline_${this._terminalClass}`, s9 = `blink_bar_${this._terminalClass}`, r5 = `blink_block_${this._terminalClass}`;
            t9 += `@keyframes ${i6} { 50% {  border-bottom-style: hidden; }}`, t9 += `@keyframes ${s9} { 50% {  box-shadow: none; }}`, t9 += `@keyframes ${r5} { 0% {  background-color: ${e9.cursor.css};  color: ${e9.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e9.cursor.css}; }}`, t9 += `${this._terminalSelector} .${p3}.${S3} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${i6} 1s step-end infinite;}${this._terminalSelector} .${p3}.${S3} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${s9} 1s step-end infinite;}${this._terminalSelector} .${p3}.${S3} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${r5} 1s step-end infinite;}${this._terminalSelector} .${p3} .xterm-cursor.xterm-cursor-block { background-color: ${e9.cursor.css}; color: ${e9.cursorAccent.css};}${this._terminalSelector} .${p3} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e9.cursor.css} !important; color: ${e9.cursorAccent.css} !important;}${this._terminalSelector} .${p3} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e9.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${p3} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e9.cursor.css} inset;}${this._terminalSelector} .${p3} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e9.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, t9 += `${this._terminalSelector} .${C2} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${C2} div { position: absolute; background-color: ${e9.selectionBackgroundOpaque.css};}${this._terminalSelector} .${C2} div { position: absolute; background-color: ${e9.selectionInactiveBackgroundOpaque.css};}`;
            for (const [i7, s10] of e9.ansi.entries())
              t9 += `${this._terminalSelector} .${g2}${i7} { color: ${s10.css}; }${this._terminalSelector} .${g2}${i7}.xterm-dim { color: ${d3.color.multiplyOpacity(s10, 0.5).css}; }${this._terminalSelector} .${m2}${i7} { background-color: ${s10.css}; }`;
            t9 += `${this._terminalSelector} .${g2}${a3.INVERTED_DEFAULT_COLOR} { color: ${d3.color.opaque(e9.background).css}; }${this._terminalSelector} .${g2}${a3.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${d3.color.multiplyOpacity(d3.color.opaque(e9.background), 0.5).css}; }${this._terminalSelector} .${m2}${a3.INVERTED_DEFAULT_COLOR} { background-color: ${e9.foreground.css}; }`, this._themeStyleElement.textContent = t9;
          }
          _setDefaultSpacing() {
            const e9 = this.dimensions.css.cell.width - this._widthCache.get("W", false, false);
            this._rowContainer.style.letterSpacing = `${e9}px`, this._rowFactory.defaultSpacing = e9;
          }
          handleDevicePixelRatioChange() {
            this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
          }
          _refreshRowElements(e9, t9) {
            for (let e10 = this._rowElements.length; e10 <= t9; e10++) {
              const e11 = this._document.createElement("div");
              this._rowContainer.appendChild(e11), this._rowElements.push(e11);
            }
            for (; this._rowElements.length > t9; )
              this._rowContainer.removeChild(this._rowElements.pop());
          }
          handleResize(e9, t9) {
            this._refreshRowElements(e9, t9), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
          }
          handleCharSizeChanged() {
            this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
          }
          handleBlur() {
            this._rowContainer.classList.remove(S3), this.renderRows(0, this._bufferService.rows - 1);
          }
          handleFocus() {
            this._rowContainer.classList.add(S3), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
          }
          handleSelectionChanged(e9, t9, i6) {
            if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e9, t9, i6), this.renderRows(0, this._bufferService.rows - 1), !e9 || !t9)
              return;
            this._selectionRenderModel.update(this._terminal, e9, t9, i6);
            const s9 = this._selectionRenderModel.viewportStartRow, r5 = this._selectionRenderModel.viewportEndRow, n9 = this._selectionRenderModel.viewportCappedStartRow, o8 = this._selectionRenderModel.viewportCappedEndRow;
            if (n9 >= this._bufferService.rows || o8 < 0)
              return;
            const a4 = this._document.createDocumentFragment();
            if (i6) {
              const i7 = e9[0] > t9[0];
              a4.appendChild(this._createSelectionElement(n9, i7 ? t9[0] : e9[0], i7 ? e9[0] : t9[0], o8 - n9 + 1));
            } else {
              const i7 = s9 === n9 ? e9[0] : 0, h4 = n9 === r5 ? t9[0] : this._bufferService.cols;
              a4.appendChild(this._createSelectionElement(n9, i7, h4));
              const c5 = o8 - n9 - 1;
              if (a4.appendChild(this._createSelectionElement(n9 + 1, 0, this._bufferService.cols, c5)), n9 !== o8) {
                const e10 = r5 === o8 ? t9[0] : this._bufferService.cols;
                a4.appendChild(this._createSelectionElement(o8, 0, e10));
              }
            }
            this._selectionContainer.appendChild(a4);
          }
          _createSelectionElement(e9, t9, i6, s9 = 1) {
            const r5 = this._document.createElement("div"), n9 = t9 * this.dimensions.css.cell.width;
            let o8 = this.dimensions.css.cell.width * (i6 - t9);
            return n9 + o8 > this.dimensions.css.canvas.width && (o8 = this.dimensions.css.canvas.width - n9), r5.style.height = s9 * this.dimensions.css.cell.height + "px", r5.style.top = e9 * this.dimensions.css.cell.height + "px", r5.style.left = `${n9}px`, r5.style.width = `${o8}px`, r5;
          }
          handleCursorMove() {
          }
          _handleOptionsChanged() {
            this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
          }
          clear() {
            for (const e9 of this._rowElements)
              e9.replaceChildren();
          }
          renderRows(e9, t9) {
            const i6 = this._bufferService.buffer, s9 = i6.ybase + i6.y, r5 = Math.min(i6.x, this._bufferService.cols - 1), n9 = this._optionsService.rawOptions.cursorBlink, o8 = this._optionsService.rawOptions.cursorStyle, a4 = this._optionsService.rawOptions.cursorInactiveStyle;
            for (let h4 = e9; h4 <= t9; h4++) {
              const e10 = h4 + i6.ydisp, t10 = this._rowElements[h4], c5 = i6.lines.get(e10);
              if (!t10 || !c5)
                break;
              t10.replaceChildren(...this._rowFactory.createRow(c5, e10, e10 === s9, o8, a4, r5, n9, this.dimensions.css.cell.width, this._widthCache, -1, -1));
            }
          }
          get _terminalSelector() {
            return `.${v3}${this._terminalClass}`;
          }
          _handleLinkHover(e9) {
            this._setCellUnderline(e9.x1, e9.x2, e9.y1, e9.y2, e9.cols, true);
          }
          _handleLinkLeave(e9) {
            this._setCellUnderline(e9.x1, e9.x2, e9.y1, e9.y2, e9.cols, false);
          }
          _setCellUnderline(e9, t9, i6, s9, r5, n9) {
            i6 < 0 && (e9 = 0), s9 < 0 && (t9 = 0);
            const o8 = this._bufferService.rows - 1;
            i6 = Math.max(Math.min(i6, o8), 0), s9 = Math.max(Math.min(s9, o8), 0), r5 = Math.min(r5, this._bufferService.cols);
            const a4 = this._bufferService.buffer, h4 = a4.ybase + a4.y, c5 = Math.min(a4.x, r5 - 1), l6 = this._optionsService.rawOptions.cursorBlink, d4 = this._optionsService.rawOptions.cursorStyle, _3 = this._optionsService.rawOptions.cursorInactiveStyle;
            for (let o9 = i6; o9 <= s9; ++o9) {
              const u4 = o9 + a4.ydisp, f3 = this._rowElements[o9], v4 = a4.lines.get(u4);
              if (!f3 || !v4)
                break;
              f3.replaceChildren(...this._rowFactory.createRow(v4, u4, u4 === h4, d4, _3, c5, l6, this.dimensions.css.cell.width, this._widthCache, n9 ? o9 === i6 ? e9 : 0 : -1, n9 ? (o9 === s9 ? t9 : r5) - 1 : -1));
            }
          }
        };
        t8.DomRenderer = w2 = s8([r4(7, f2.IInstantiationService), r4(8, l5.ICharSizeService), r4(9, f2.IOptionsService), r4(10, f2.IBufferService), r4(11, l5.ICoreBrowserService), r4(12, l5.IThemeService)], w2);
      }, 3787: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.DomRendererRowFactory = void 0;
        const n8 = i5(2223), o7 = i5(643), a3 = i5(511), h3 = i5(2585), c4 = i5(8055), l5 = i5(4725), d3 = i5(4269), _2 = i5(6171), u3 = i5(3734);
        let f2 = t8.DomRendererRowFactory = class {
          constructor(e9, t9, i6, s9, r5, n9, o8) {
            this._document = e9, this._characterJoinerService = t9, this._optionsService = i6, this._coreBrowserService = s9, this._coreService = r5, this._decorationService = n9, this._themeService = o8, this._workCell = new a3.CellData(), this._columnSelectMode = false, this.defaultSpacing = 0;
          }
          handleSelectionChanged(e9, t9, i6) {
            this._selectionStart = e9, this._selectionEnd = t9, this._columnSelectMode = i6;
          }
          createRow(e9, t9, i6, s9, r5, a4, h4, l6, _3, f3, p3) {
            const g2 = [], m2 = this._characterJoinerService.getJoinedCharacters(t9), S3 = this._themeService.colors;
            let C2, b2 = e9.getNoBgTrimmedLength();
            i6 && b2 < a4 + 1 && (b2 = a4 + 1);
            let w2 = 0, y2 = "", E2 = 0, k2 = 0, L2 = 0, D = false, R2 = 0, x2 = false, A2 = 0;
            const B2 = [], T2 = -1 !== f3 && -1 !== p3;
            for (let M2 = 0; M2 < b2; M2++) {
              e9.loadCell(M2, this._workCell);
              let b3 = this._workCell.getWidth();
              if (0 === b3)
                continue;
              let O = false, P2 = M2, I2 = this._workCell;
              if (m2.length > 0 && M2 === m2[0][0]) {
                O = true;
                const t10 = m2.shift();
                I2 = new d3.JoinedCellData(this._workCell, e9.translateToString(true, t10[0], t10[1]), t10[1] - t10[0]), P2 = t10[1] - 1, b3 = I2.getWidth();
              }
              const H2 = this._isCellInSelection(M2, t9), F = i6 && M2 === a4, W2 = T2 && M2 >= f3 && M2 <= p3;
              let U = false;
              this._decorationService.forEachDecorationAtCell(M2, t9, void 0, (e10) => {
                U = true;
              });
              let N2 = I2.getChars() || o7.WHITESPACE_CELL_CHAR;
              if (" " === N2 && (I2.isUnderline() || I2.isOverline()) && (N2 = "\xA0"), A2 = b3 * l6 - _3.get(N2, I2.isBold(), I2.isItalic()), C2) {
                if (w2 && (H2 && x2 || !H2 && !x2 && I2.bg === E2) && (H2 && x2 && S3.selectionForeground || I2.fg === k2) && I2.extended.ext === L2 && W2 === D && A2 === R2 && !F && !O && !U) {
                  I2.isInvisible() ? y2 += o7.WHITESPACE_CELL_CHAR : y2 += N2, w2++;
                  continue;
                }
                w2 && (C2.textContent = y2), C2 = this._document.createElement("span"), w2 = 0, y2 = "";
              } else
                C2 = this._document.createElement("span");
              if (E2 = I2.bg, k2 = I2.fg, L2 = I2.extended.ext, D = W2, R2 = A2, x2 = H2, O && a4 >= M2 && a4 <= P2 && (a4 = M2), !this._coreService.isCursorHidden && F && this._coreService.isCursorInitialized) {
                if (B2.push("xterm-cursor"), this._coreBrowserService.isFocused)
                  h4 && B2.push("xterm-cursor-blink"), B2.push("bar" === s9 ? "xterm-cursor-bar" : "underline" === s9 ? "xterm-cursor-underline" : "xterm-cursor-block");
                else if (r5)
                  switch (r5) {
                    case "outline":
                      B2.push("xterm-cursor-outline");
                      break;
                    case "block":
                      B2.push("xterm-cursor-block");
                      break;
                    case "bar":
                      B2.push("xterm-cursor-bar");
                      break;
                    case "underline":
                      B2.push("xterm-cursor-underline");
                  }
              }
              if (I2.isBold() && B2.push("xterm-bold"), I2.isItalic() && B2.push("xterm-italic"), I2.isDim() && B2.push("xterm-dim"), y2 = I2.isInvisible() ? o7.WHITESPACE_CELL_CHAR : I2.getChars() || o7.WHITESPACE_CELL_CHAR, I2.isUnderline() && (B2.push(`xterm-underline-${I2.extended.underlineStyle}`), " " === y2 && (y2 = "\xA0"), !I2.isUnderlineColorDefault()))
                if (I2.isUnderlineColorRGB())
                  C2.style.textDecorationColor = `rgb(${u3.AttributeData.toColorRGB(I2.getUnderlineColor()).join(",")})`;
                else {
                  let e10 = I2.getUnderlineColor();
                  this._optionsService.rawOptions.drawBoldTextInBrightColors && I2.isBold() && e10 < 8 && (e10 += 8), C2.style.textDecorationColor = S3.ansi[e10].css;
                }
              I2.isOverline() && (B2.push("xterm-overline"), " " === y2 && (y2 = "\xA0")), I2.isStrikethrough() && B2.push("xterm-strikethrough"), W2 && (C2.style.textDecoration = "underline");
              let $2 = I2.getFgColor(), j2 = I2.getFgColorMode(), z2 = I2.getBgColor(), K = I2.getBgColorMode();
              const q = !!I2.isInverse();
              if (q) {
                const e10 = $2;
                $2 = z2, z2 = e10;
                const t10 = j2;
                j2 = K, K = t10;
              }
              let V2, G, X, J = false;
              switch (this._decorationService.forEachDecorationAtCell(M2, t9, void 0, (e10) => {
                "top" !== e10.options.layer && J || (e10.backgroundColorRGB && (K = 50331648, z2 = e10.backgroundColorRGB.rgba >> 8 & 16777215, V2 = e10.backgroundColorRGB), e10.foregroundColorRGB && (j2 = 50331648, $2 = e10.foregroundColorRGB.rgba >> 8 & 16777215, G = e10.foregroundColorRGB), J = "top" === e10.options.layer);
              }), !J && H2 && (V2 = this._coreBrowserService.isFocused ? S3.selectionBackgroundOpaque : S3.selectionInactiveBackgroundOpaque, z2 = V2.rgba >> 8 & 16777215, K = 50331648, J = true, S3.selectionForeground && (j2 = 50331648, $2 = S3.selectionForeground.rgba >> 8 & 16777215, G = S3.selectionForeground)), J && B2.push("xterm-decoration-top"), K) {
                case 16777216:
                case 33554432:
                  X = S3.ansi[z2], B2.push(`xterm-bg-${z2}`);
                  break;
                case 50331648:
                  X = c4.channels.toColor(z2 >> 16, z2 >> 8 & 255, 255 & z2), this._addStyle(C2, `background-color:#${v3((z2 >>> 0).toString(16), "0", 6)}`);
                  break;
                default:
                  q ? (X = S3.foreground, B2.push(`xterm-bg-${n8.INVERTED_DEFAULT_COLOR}`)) : X = S3.background;
              }
              switch (V2 || I2.isDim() && (V2 = c4.color.multiplyOpacity(X, 0.5)), j2) {
                case 16777216:
                case 33554432:
                  I2.isBold() && $2 < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && ($2 += 8), this._applyMinimumContrast(C2, X, S3.ansi[$2], I2, V2, void 0) || B2.push(`xterm-fg-${$2}`);
                  break;
                case 50331648:
                  const e10 = c4.channels.toColor($2 >> 16 & 255, $2 >> 8 & 255, 255 & $2);
                  this._applyMinimumContrast(C2, X, e10, I2, V2, G) || this._addStyle(C2, `color:#${v3($2.toString(16), "0", 6)}`);
                  break;
                default:
                  this._applyMinimumContrast(C2, X, S3.foreground, I2, V2, G) || q && B2.push(`xterm-fg-${n8.INVERTED_DEFAULT_COLOR}`);
              }
              B2.length && (C2.className = B2.join(" "), B2.length = 0), F || O || U ? C2.textContent = y2 : w2++, A2 !== this.defaultSpacing && (C2.style.letterSpacing = `${A2}px`), g2.push(C2), M2 = P2;
            }
            return C2 && w2 && (C2.textContent = y2), g2;
          }
          _applyMinimumContrast(e9, t9, i6, s9, r5, n9) {
            if (1 === this._optionsService.rawOptions.minimumContrastRatio || (0, _2.treatGlyphAsBackgroundColor)(s9.getCode()))
              return false;
            const o8 = this._getContrastCache(s9);
            let a4;
            if (r5 || n9 || (a4 = o8.getColor(t9.rgba, i6.rgba)), void 0 === a4) {
              const e10 = this._optionsService.rawOptions.minimumContrastRatio / (s9.isDim() ? 2 : 1);
              a4 = c4.color.ensureContrastRatio(r5 || t9, n9 || i6, e10), o8.setColor((r5 || t9).rgba, (n9 || i6).rgba, a4 ?? null);
            }
            return !!a4 && (this._addStyle(e9, `color:${a4.css}`), true);
          }
          _getContrastCache(e9) {
            return e9.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
          }
          _addStyle(e9, t9) {
            e9.setAttribute("style", `${e9.getAttribute("style") || ""}${t9};`);
          }
          _isCellInSelection(e9, t9) {
            const i6 = this._selectionStart, s9 = this._selectionEnd;
            return !(!i6 || !s9) && (this._columnSelectMode ? i6[0] <= s9[0] ? e9 >= i6[0] && t9 >= i6[1] && e9 < s9[0] && t9 <= s9[1] : e9 < i6[0] && t9 >= i6[1] && e9 >= s9[0] && t9 <= s9[1] : t9 > i6[1] && t9 < s9[1] || i6[1] === s9[1] && t9 === i6[1] && e9 >= i6[0] && e9 < s9[0] || i6[1] < s9[1] && t9 === s9[1] && e9 < s9[0] || i6[1] < s9[1] && t9 === i6[1] && e9 >= i6[0]);
          }
        };
        function v3(e9, t9, i6) {
          for (; e9.length < i6; )
            e9 = t9 + e9;
          return e9;
        }
        t8.DomRendererRowFactory = f2 = s8([r4(1, l5.ICharacterJoinerService), r4(2, h3.IOptionsService), r4(3, l5.ICoreBrowserService), r4(4, h3.ICoreService), r4(5, h3.IDecorationService), r4(6, l5.IThemeService)], f2);
      }, 2550: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.WidthCache = void 0, t8.WidthCache = class {
          constructor(e9, t9) {
            this._flat = new Float32Array(256), this._font = "", this._fontSize = 0, this._weight = "normal", this._weightBold = "bold", this._measureElements = [], this._container = e9.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
            const i5 = e9.createElement("span");
            i5.classList.add("xterm-char-measure-element");
            const s8 = e9.createElement("span");
            s8.classList.add("xterm-char-measure-element"), s8.style.fontWeight = "bold";
            const r4 = e9.createElement("span");
            r4.classList.add("xterm-char-measure-element"), r4.style.fontStyle = "italic";
            const n8 = e9.createElement("span");
            n8.classList.add("xterm-char-measure-element"), n8.style.fontWeight = "bold", n8.style.fontStyle = "italic", this._measureElements = [i5, s8, r4, n8], this._container.appendChild(i5), this._container.appendChild(s8), this._container.appendChild(r4), this._container.appendChild(n8), t9.appendChild(this._container), this.clear();
          }
          dispose() {
            this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
          }
          clear() {
            this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
          }
          setFont(e9, t9, i5, s8) {
            e9 === this._font && t9 === this._fontSize && i5 === this._weight && s8 === this._weightBold || (this._font = e9, this._fontSize = t9, this._weight = i5, this._weightBold = s8, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${i5}`, this._measureElements[1].style.fontWeight = `${s8}`, this._measureElements[2].style.fontWeight = `${i5}`, this._measureElements[3].style.fontWeight = `${s8}`, this.clear());
          }
          get(e9, t9, i5) {
            let s8 = 0;
            if (!t9 && !i5 && 1 === e9.length && (s8 = e9.charCodeAt(0)) < 256) {
              if (-9999 !== this._flat[s8])
                return this._flat[s8];
              const t10 = this._measure(e9, 0);
              return t10 > 0 && (this._flat[s8] = t10), t10;
            }
            let r4 = e9;
            t9 && (r4 += "B"), i5 && (r4 += "I");
            let n8 = this._holey.get(r4);
            if (void 0 === n8) {
              let s9 = 0;
              t9 && (s9 |= 1), i5 && (s9 |= 2), n8 = this._measure(e9, s9), n8 > 0 && this._holey.set(r4, n8);
            }
            return n8;
          }
          _measure(e9, t9) {
            const i5 = this._measureElements[t9];
            return i5.textContent = e9.repeat(32), i5.offsetWidth / 32;
          }
        };
      }, 2223: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.TEXT_BASELINE = t8.DIM_OPACITY = t8.INVERTED_DEFAULT_COLOR = void 0;
        const s8 = i5(6114);
        t8.INVERTED_DEFAULT_COLOR = 257, t8.DIM_OPACITY = 0.5, t8.TEXT_BASELINE = s8.isFirefox || s8.isLegacyEdge ? "bottom" : "ideographic";
      }, 6171: (e8, t8) => {
        function i5(e9) {
          return 57508 <= e9 && e9 <= 57558;
        }
        function s8(e9) {
          return e9 >= 128512 && e9 <= 128591 || e9 >= 127744 && e9 <= 128511 || e9 >= 128640 && e9 <= 128767 || e9 >= 9728 && e9 <= 9983 || e9 >= 9984 && e9 <= 10175 || e9 >= 65024 && e9 <= 65039 || e9 >= 129280 && e9 <= 129535 || e9 >= 127462 && e9 <= 127487;
        }
        Object.defineProperty(t8, "__esModule", { value: true }), t8.computeNextVariantOffset = t8.createRenderDimensions = t8.treatGlyphAsBackgroundColor = t8.allowRescaling = t8.isEmoji = t8.isRestrictedPowerlineGlyph = t8.isPowerlineGlyph = t8.throwIfFalsy = void 0, t8.throwIfFalsy = function(e9) {
          if (!e9)
            throw new Error("value must not be falsy");
          return e9;
        }, t8.isPowerlineGlyph = i5, t8.isRestrictedPowerlineGlyph = function(e9) {
          return 57520 <= e9 && e9 <= 57527;
        }, t8.isEmoji = s8, t8.allowRescaling = function(e9, t9, r4, n8) {
          return 1 === t9 && r4 > Math.ceil(1.5 * n8) && void 0 !== e9 && e9 > 255 && !s8(e9) && !i5(e9) && !function(e10) {
            return 57344 <= e10 && e10 <= 63743;
          }(e9);
        }, t8.treatGlyphAsBackgroundColor = function(e9) {
          return i5(e9) || function(e10) {
            return 9472 <= e10 && e10 <= 9631;
          }(e9);
        }, t8.createRenderDimensions = function() {
          return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
        }, t8.computeNextVariantOffset = function(e9, t9, i6 = 0) {
          return (e9 - (2 * Math.round(t9) - i6)) % (2 * Math.round(t9));
        };
      }, 6052: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.createSelectionRenderModel = void 0;
        class i5 {
          constructor() {
            this.clear();
          }
          clear() {
            this.hasSelection = false, this.columnSelectMode = false, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
          }
          update(e9, t9, i6, s8 = false) {
            if (this.selectionStart = t9, this.selectionEnd = i6, !t9 || !i6 || t9[0] === i6[0] && t9[1] === i6[1])
              return void this.clear();
            const r4 = e9.buffers.active.ydisp, n8 = t9[1] - r4, o7 = i6[1] - r4, a3 = Math.max(n8, 0), h3 = Math.min(o7, e9.rows - 1);
            a3 >= e9.rows || h3 < 0 ? this.clear() : (this.hasSelection = true, this.columnSelectMode = s8, this.viewportStartRow = n8, this.viewportEndRow = o7, this.viewportCappedStartRow = a3, this.viewportCappedEndRow = h3, this.startCol = t9[0], this.endCol = i6[0]);
          }
          isCellSelected(e9, t9, i6) {
            return !!this.hasSelection && (i6 -= e9.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t9 >= this.startCol && i6 >= this.viewportCappedStartRow && t9 < this.endCol && i6 <= this.viewportCappedEndRow : t9 < this.startCol && i6 >= this.viewportCappedStartRow && t9 >= this.endCol && i6 <= this.viewportCappedEndRow : i6 > this.viewportStartRow && i6 < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i6 === this.viewportStartRow && t9 >= this.startCol && t9 < this.endCol || this.viewportStartRow < this.viewportEndRow && i6 === this.viewportEndRow && t9 < this.endCol || this.viewportStartRow < this.viewportEndRow && i6 === this.viewportStartRow && t9 >= this.startCol);
          }
        }
        t8.createSelectionRenderModel = function() {
          return new i5();
        };
      }, 456: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.SelectionModel = void 0, t8.SelectionModel = class {
          constructor(e9) {
            this._bufferService = e9, this.isSelectAllActive = false, this.selectionStartLength = 0;
          }
          clearSelection() {
            this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
          }
          get finalSelectionStart() {
            return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
          }
          get finalSelectionEnd() {
            if (this.isSelectAllActive)
              return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
            if (this.selectionStart) {
              if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                const e9 = this.selectionStart[0] + this.selectionStartLength;
                return e9 > this._bufferService.cols ? e9 % this._bufferService.cols == 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(e9 / this._bufferService.cols) - 1] : [e9 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e9 / this._bufferService.cols)] : [e9, this.selectionStart[1]];
              }
              if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
                const e9 = this.selectionStart[0] + this.selectionStartLength;
                return e9 > this._bufferService.cols ? [e9 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e9 / this._bufferService.cols)] : [Math.max(e9, this.selectionEnd[0]), this.selectionEnd[1]];
              }
              return this.selectionEnd;
            }
          }
          areSelectionValuesReversed() {
            const e9 = this.selectionStart, t9 = this.selectionEnd;
            return !(!e9 || !t9) && (e9[1] > t9[1] || e9[1] === t9[1] && e9[0] > t9[0]);
          }
          handleTrim(e9) {
            return this.selectionStart && (this.selectionStart[1] -= e9), this.selectionEnd && (this.selectionEnd[1] -= e9), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
          }
        };
      }, 428: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CharSizeService = void 0;
        const n8 = i5(2585), o7 = i5(8460), a3 = i5(844);
        let h3 = t8.CharSizeService = class extends a3.Disposable {
          get hasValidSize() {
            return this.width > 0 && this.height > 0;
          }
          constructor(e9, t9, i6) {
            super(), this._optionsService = i6, this.width = 0, this.height = 0, this._onCharSizeChange = this.register(new o7.EventEmitter()), this.onCharSizeChange = this._onCharSizeChange.event;
            try {
              this._measureStrategy = this.register(new d3(this._optionsService));
            } catch {
              this._measureStrategy = this.register(new l5(e9, t9, this._optionsService));
            }
            this.register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
          }
          measure() {
            const e9 = this._measureStrategy.measure();
            e9.width === this.width && e9.height === this.height || (this.width = e9.width, this.height = e9.height, this._onCharSizeChange.fire());
          }
        };
        t8.CharSizeService = h3 = s8([r4(2, n8.IOptionsService)], h3);
        class c4 extends a3.Disposable {
          constructor() {
            super(...arguments), this._result = { width: 0, height: 0 };
          }
          _validateAndSet(e9, t9) {
            void 0 !== e9 && e9 > 0 && void 0 !== t9 && t9 > 0 && (this._result.width = e9, this._result.height = t9);
          }
        }
        class l5 extends c4 {
          constructor(e9, t9, i6) {
            super(), this._document = e9, this._parentElement = t9, this._optionsService = i6, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
          }
          measure() {
            return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
          }
        }
        class d3 extends c4 {
          constructor(e9) {
            super(), this._optionsService = e9, this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
            const t9 = this._ctx.measureText("W");
            if (!("width" in t9 && "fontBoundingBoxAscent" in t9 && "fontBoundingBoxDescent" in t9))
              throw new Error("Required font metrics not supported");
          }
          measure() {
            this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
            const e9 = this._ctx.measureText("W");
            return this._validateAndSet(e9.width, e9.fontBoundingBoxAscent + e9.fontBoundingBoxDescent), this._result;
          }
        }
      }, 4269: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CharacterJoinerService = t8.JoinedCellData = void 0;
        const n8 = i5(3734), o7 = i5(643), a3 = i5(511), h3 = i5(2585);
        class c4 extends n8.AttributeData {
          constructor(e9, t9, i6) {
            super(), this.content = 0, this.combinedData = "", this.fg = e9.fg, this.bg = e9.bg, this.combinedData = t9, this._width = i6;
          }
          isCombined() {
            return 2097152;
          }
          getWidth() {
            return this._width;
          }
          getChars() {
            return this.combinedData;
          }
          getCode() {
            return 2097151;
          }
          setFromCharData(e9) {
            throw new Error("not implemented");
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        t8.JoinedCellData = c4;
        let l5 = t8.CharacterJoinerService = class e9 {
          constructor(e10) {
            this._bufferService = e10, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a3.CellData();
          }
          register(e10) {
            const t9 = { id: this._nextCharacterJoinerId++, handler: e10 };
            return this._characterJoiners.push(t9), t9.id;
          }
          deregister(e10) {
            for (let t9 = 0; t9 < this._characterJoiners.length; t9++)
              if (this._characterJoiners[t9].id === e10)
                return this._characterJoiners.splice(t9, 1), true;
            return false;
          }
          getJoinedCharacters(e10) {
            if (0 === this._characterJoiners.length)
              return [];
            const t9 = this._bufferService.buffer.lines.get(e10);
            if (!t9 || 0 === t9.length)
              return [];
            const i6 = [], s9 = t9.translateToString(true);
            let r5 = 0, n9 = 0, a4 = 0, h4 = t9.getFg(0), c5 = t9.getBg(0);
            for (let e11 = 0; e11 < t9.getTrimmedLength(); e11++)
              if (t9.loadCell(e11, this._workCell), 0 !== this._workCell.getWidth()) {
                if (this._workCell.fg !== h4 || this._workCell.bg !== c5) {
                  if (e11 - r5 > 1) {
                    const e12 = this._getJoinedRanges(s9, a4, n9, t9, r5);
                    for (let t10 = 0; t10 < e12.length; t10++)
                      i6.push(e12[t10]);
                  }
                  r5 = e11, a4 = n9, h4 = this._workCell.fg, c5 = this._workCell.bg;
                }
                n9 += this._workCell.getChars().length || o7.WHITESPACE_CELL_CHAR.length;
              }
            if (this._bufferService.cols - r5 > 1) {
              const e11 = this._getJoinedRanges(s9, a4, n9, t9, r5);
              for (let t10 = 0; t10 < e11.length; t10++)
                i6.push(e11[t10]);
            }
            return i6;
          }
          _getJoinedRanges(t9, i6, s9, r5, n9) {
            const o8 = t9.substring(i6, s9);
            let a4 = [];
            try {
              a4 = this._characterJoiners[0].handler(o8);
            } catch (e10) {
              console.error(e10);
            }
            for (let t10 = 1; t10 < this._characterJoiners.length; t10++)
              try {
                const i7 = this._characterJoiners[t10].handler(o8);
                for (let t11 = 0; t11 < i7.length; t11++)
                  e9._mergeRanges(a4, i7[t11]);
              } catch (e10) {
                console.error(e10);
              }
            return this._stringRangesToCellRanges(a4, r5, n9), a4;
          }
          _stringRangesToCellRanges(e10, t9, i6) {
            let s9 = 0, r5 = false, n9 = 0, a4 = e10[s9];
            if (a4) {
              for (let h4 = i6; h4 < this._bufferService.cols; h4++) {
                const i7 = t9.getWidth(h4), c5 = t9.getString(h4).length || o7.WHITESPACE_CELL_CHAR.length;
                if (0 !== i7) {
                  if (!r5 && a4[0] <= n9 && (a4[0] = h4, r5 = true), a4[1] <= n9) {
                    if (a4[1] = h4, a4 = e10[++s9], !a4)
                      break;
                    a4[0] <= n9 ? (a4[0] = h4, r5 = true) : r5 = false;
                  }
                  n9 += c5;
                }
              }
              a4 && (a4[1] = this._bufferService.cols);
            }
          }
          static _mergeRanges(e10, t9) {
            let i6 = false;
            for (let s9 = 0; s9 < e10.length; s9++) {
              const r5 = e10[s9];
              if (i6) {
                if (t9[1] <= r5[0])
                  return e10[s9 - 1][1] = t9[1], e10;
                if (t9[1] <= r5[1])
                  return e10[s9 - 1][1] = Math.max(t9[1], r5[1]), e10.splice(s9, 1), e10;
                e10.splice(s9, 1), s9--;
              } else {
                if (t9[1] <= r5[0])
                  return e10.splice(s9, 0, t9), e10;
                if (t9[1] <= r5[1])
                  return r5[0] = Math.min(t9[0], r5[0]), e10;
                t9[0] < r5[1] && (r5[0] = Math.min(t9[0], r5[0]), i6 = true);
              }
            }
            return i6 ? e10[e10.length - 1][1] = t9[1] : e10.push(t9), e10;
          }
        };
        t8.CharacterJoinerService = l5 = s8([r4(0, h3.IBufferService)], l5);
      }, 5114: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CoreBrowserService = void 0;
        const s8 = i5(844), r4 = i5(8460), n8 = i5(3656);
        class o7 extends s8.Disposable {
          constructor(e9, t9, i6) {
            super(), this._textarea = e9, this._window = t9, this.mainDocument = i6, this._isFocused = false, this._cachedIsFocused = void 0, this._screenDprMonitor = new a3(this._window), this._onDprChange = this.register(new r4.EventEmitter()), this.onDprChange = this._onDprChange.event, this._onWindowChange = this.register(new r4.EventEmitter()), this.onWindowChange = this._onWindowChange.event, this.register(this.onWindowChange((e10) => this._screenDprMonitor.setWindow(e10))), this.register((0, r4.forwardEvent)(this._screenDprMonitor.onDprChange, this._onDprChange)), this._textarea.addEventListener("focus", () => this._isFocused = true), this._textarea.addEventListener("blur", () => this._isFocused = false);
          }
          get window() {
            return this._window;
          }
          set window(e9) {
            this._window !== e9 && (this._window = e9, this._onWindowChange.fire(this._window));
          }
          get dpr() {
            return this.window.devicePixelRatio;
          }
          get isFocused() {
            return void 0 === this._cachedIsFocused && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
          }
        }
        t8.CoreBrowserService = o7;
        class a3 extends s8.Disposable {
          constructor(e9) {
            super(), this._parentWindow = e9, this._windowResizeListener = this.register(new s8.MutableDisposable()), this._onDprChange = this.register(new r4.EventEmitter()), this.onDprChange = this._onDprChange.event, this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this.register((0, s8.toDisposable)(() => this.clearListener()));
          }
          setWindow(e9) {
            this._parentWindow = e9, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
          }
          _setWindowResizeListener() {
            this._windowResizeListener.value = (0, n8.addDisposableDomListener)(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
          }
          _setDprAndFireIfDiffers() {
            this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
          }
          _updateDpr() {
            this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
          }
          clearListener() {
            this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
          }
        }
      }, 779: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.LinkProviderService = void 0;
        const s8 = i5(844);
        class r4 extends s8.Disposable {
          constructor() {
            super(), this.linkProviders = [], this.register((0, s8.toDisposable)(() => this.linkProviders.length = 0));
          }
          registerLinkProvider(e9) {
            return this.linkProviders.push(e9), { dispose: () => {
              const t9 = this.linkProviders.indexOf(e9);
              -1 !== t9 && this.linkProviders.splice(t9, 1);
            } };
          }
        }
        t8.LinkProviderService = r4;
      }, 8934: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.MouseService = void 0;
        const n8 = i5(4725), o7 = i5(9806);
        let a3 = t8.MouseService = class {
          constructor(e9, t9) {
            this._renderService = e9, this._charSizeService = t9;
          }
          getCoords(e9, t9, i6, s9, r5) {
            return (0, o7.getCoords)(window, e9, t9, i6, s9, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, r5);
          }
          getMouseReportCoords(e9, t9) {
            const i6 = (0, o7.getCoordsRelativeToElement)(window, e9, t9);
            if (this._charSizeService.hasValidSize)
              return i6[0] = Math.min(Math.max(i6[0], 0), this._renderService.dimensions.css.canvas.width - 1), i6[1] = Math.min(Math.max(i6[1], 0), this._renderService.dimensions.css.canvas.height - 1), { col: Math.floor(i6[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(i6[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(i6[0]), y: Math.floor(i6[1]) };
          }
        };
        t8.MouseService = a3 = s8([r4(0, n8.IRenderService), r4(1, n8.ICharSizeService)], a3);
      }, 3230: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.RenderService = void 0;
        const n8 = i5(6193), o7 = i5(4725), a3 = i5(8460), h3 = i5(844), c4 = i5(7226), l5 = i5(2585);
        let d3 = t8.RenderService = class extends h3.Disposable {
          get dimensions() {
            return this._renderer.value.dimensions;
          }
          constructor(e9, t9, i6, s9, r5, o8, l6, d4) {
            super(), this._rowCount = e9, this._charSizeService = s9, this._renderer = this.register(new h3.MutableDisposable()), this._pausedResizeTask = new c4.DebouncedIdleTask(), this._observerDisposable = this.register(new h3.MutableDisposable()), this._isPaused = false, this._needsFullRefresh = false, this._isNextRenderRedrawOnly = true, this._needsSelectionRefresh = false, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = { start: void 0, end: void 0, columnSelectMode: false }, this._onDimensionsChange = this.register(new a3.EventEmitter()), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this.register(new a3.EventEmitter()), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this.register(new a3.EventEmitter()), this.onRender = this._onRender.event, this._onRefreshRequest = this.register(new a3.EventEmitter()), this.onRefreshRequest = this._onRefreshRequest.event, this._renderDebouncer = new n8.RenderDebouncer((e10, t10) => this._renderRows(e10, t10), l6), this.register(this._renderDebouncer), this.register(l6.onDprChange(() => this.handleDevicePixelRatioChange())), this.register(o8.onResize(() => this._fullRefresh())), this.register(o8.buffers.onBufferActivate(() => this._renderer.value?.clear())), this.register(i6.onOptionChange(() => this._handleOptionsChanged())), this.register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this.register(r5.onDecorationRegistered(() => this._fullRefresh())), this.register(r5.onDecorationRemoved(() => this._fullRefresh())), this.register(i6.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio", "rescaleOverlappingGlyphs"], () => {
              this.clear(), this.handleResize(o8.cols, o8.rows), this._fullRefresh();
            })), this.register(i6.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(o8.buffer.y, o8.buffer.y, true))), this.register(d4.onChangeColors(() => this._fullRefresh())), this._registerIntersectionObserver(l6.window, t9), this.register(l6.onWindowChange((e10) => this._registerIntersectionObserver(e10, t9)));
          }
          _registerIntersectionObserver(e9, t9) {
            if ("IntersectionObserver" in e9) {
              const i6 = new e9.IntersectionObserver((e10) => this._handleIntersectionChange(e10[e10.length - 1]), { threshold: 0 });
              i6.observe(t9), this._observerDisposable.value = (0, h3.toDisposable)(() => i6.disconnect());
            }
          }
          _handleIntersectionChange(e9) {
            this._isPaused = void 0 === e9.isIntersecting ? 0 === e9.intersectionRatio : !e9.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
          }
          refreshRows(e9, t9, i6 = false) {
            this._isPaused ? this._needsFullRefresh = true : (i6 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e9, t9, this._rowCount));
          }
          _renderRows(e9, t9) {
            this._renderer.value && (e9 = Math.min(e9, this._rowCount - 1), t9 = Math.min(t9, this._rowCount - 1), this._renderer.value.renderRows(e9, t9), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e9, end: t9 }), this._onRender.fire({ start: e9, end: t9 }), this._isNextRenderRedrawOnly = true);
          }
          resize(e9, t9) {
            this._rowCount = t9, this._fireOnCanvasResize();
          }
          _handleOptionsChanged() {
            this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
          }
          _fireOnCanvasResize() {
            this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
          }
          hasRenderer() {
            return !!this._renderer.value;
          }
          setRenderer(e9) {
            this._renderer.value = e9, this._renderer.value && (this._renderer.value.onRequestRedraw((e10) => this.refreshRows(e10.start, e10.end, true)), this._needsSelectionRefresh = true, this._fullRefresh());
          }
          addRefreshCallback(e9) {
            return this._renderDebouncer.addRefreshCallback(e9);
          }
          _fullRefresh() {
            this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
          }
          clearTextureAtlas() {
            this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
          }
          handleDevicePixelRatioChange() {
            this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
          }
          handleResize(e9, t9) {
            this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.value?.handleResize(e9, t9)) : this._renderer.value.handleResize(e9, t9), this._fullRefresh());
          }
          handleCharSizeChanged() {
            this._renderer.value?.handleCharSizeChanged();
          }
          handleBlur() {
            this._renderer.value?.handleBlur();
          }
          handleFocus() {
            this._renderer.value?.handleFocus();
          }
          handleSelectionChanged(e9, t9, i6) {
            this._selectionState.start = e9, this._selectionState.end = t9, this._selectionState.columnSelectMode = i6, this._renderer.value?.handleSelectionChanged(e9, t9, i6);
          }
          handleCursorMove() {
            this._renderer.value?.handleCursorMove();
          }
          clear() {
            this._renderer.value?.clear();
          }
        };
        t8.RenderService = d3 = s8([r4(2, l5.IOptionsService), r4(3, o7.ICharSizeService), r4(4, l5.IDecorationService), r4(5, l5.IBufferService), r4(6, o7.ICoreBrowserService), r4(7, o7.IThemeService)], d3);
      }, 9312: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.SelectionService = void 0;
        const n8 = i5(9806), o7 = i5(9504), a3 = i5(456), h3 = i5(4725), c4 = i5(8460), l5 = i5(844), d3 = i5(6114), _2 = i5(4841), u3 = i5(511), f2 = i5(2585), v3 = String.fromCharCode(160), p3 = new RegExp(v3, "g");
        let g2 = t8.SelectionService = class extends l5.Disposable {
          constructor(e9, t9, i6, s9, r5, n9, o8, h4, d4) {
            super(), this._element = e9, this._screenElement = t9, this._linkifier = i6, this._bufferService = s9, this._coreService = r5, this._mouseService = n9, this._optionsService = o8, this._renderService = h4, this._coreBrowserService = d4, this._dragScrollAmount = 0, this._enabled = true, this._workCell = new u3.CellData(), this._mouseDownTimeStamp = 0, this._oldHasSelection = false, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this.register(new c4.EventEmitter()), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this.register(new c4.EventEmitter()), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this.register(new c4.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this.register(new c4.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (e10) => this._handleMouseMove(e10), this._mouseUpListener = (e10) => this._handleMouseUp(e10), this._coreService.onUserInput(() => {
              this.hasSelection && this.clearSelection();
            }), this._trimListener = this._bufferService.buffer.lines.onTrim((e10) => this._handleTrim(e10)), this.register(this._bufferService.buffers.onBufferActivate((e10) => this._handleBufferActivate(e10))), this.enable(), this._model = new a3.SelectionModel(this._bufferService), this._activeSelectionMode = 0, this.register((0, l5.toDisposable)(() => {
              this._removeMouseDownListeners();
            }));
          }
          reset() {
            this.clearSelection();
          }
          disable() {
            this.clearSelection(), this._enabled = false;
          }
          enable() {
            this._enabled = true;
          }
          get selectionStart() {
            return this._model.finalSelectionStart;
          }
          get selectionEnd() {
            return this._model.finalSelectionEnd;
          }
          get hasSelection() {
            const e9 = this._model.finalSelectionStart, t9 = this._model.finalSelectionEnd;
            return !(!e9 || !t9 || e9[0] === t9[0] && e9[1] === t9[1]);
          }
          get selectionText() {
            const e9 = this._model.finalSelectionStart, t9 = this._model.finalSelectionEnd;
            if (!e9 || !t9)
              return "";
            const i6 = this._bufferService.buffer, s9 = [];
            if (3 === this._activeSelectionMode) {
              if (e9[0] === t9[0])
                return "";
              const r5 = e9[0] < t9[0] ? e9[0] : t9[0], n9 = e9[0] < t9[0] ? t9[0] : e9[0];
              for (let o8 = e9[1]; o8 <= t9[1]; o8++) {
                const e10 = i6.translateBufferLineToString(o8, true, r5, n9);
                s9.push(e10);
              }
            } else {
              const r5 = e9[1] === t9[1] ? t9[0] : void 0;
              s9.push(i6.translateBufferLineToString(e9[1], true, e9[0], r5));
              for (let r6 = e9[1] + 1; r6 <= t9[1] - 1; r6++) {
                const e10 = i6.lines.get(r6), t10 = i6.translateBufferLineToString(r6, true);
                e10?.isWrapped ? s9[s9.length - 1] += t10 : s9.push(t10);
              }
              if (e9[1] !== t9[1]) {
                const e10 = i6.lines.get(t9[1]), r6 = i6.translateBufferLineToString(t9[1], true, 0, t9[0]);
                e10 && e10.isWrapped ? s9[s9.length - 1] += r6 : s9.push(r6);
              }
            }
            return s9.map((e10) => e10.replace(p3, " ")).join(d3.isWindows ? "\r\n" : "\n");
          }
          clearSelection() {
            this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
          }
          refresh(e9) {
            this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), d3.isLinux && e9 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
          }
          _refresh() {
            this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: 3 === this._activeSelectionMode });
          }
          _isClickInSelection(e9) {
            const t9 = this._getMouseBufferCoords(e9), i6 = this._model.finalSelectionStart, s9 = this._model.finalSelectionEnd;
            return !!(i6 && s9 && t9) && this._areCoordsInSelection(t9, i6, s9);
          }
          isCellInSelection(e9, t9) {
            const i6 = this._model.finalSelectionStart, s9 = this._model.finalSelectionEnd;
            return !(!i6 || !s9) && this._areCoordsInSelection([e9, t9], i6, s9);
          }
          _areCoordsInSelection(e9, t9, i6) {
            return e9[1] > t9[1] && e9[1] < i6[1] || t9[1] === i6[1] && e9[1] === t9[1] && e9[0] >= t9[0] && e9[0] < i6[0] || t9[1] < i6[1] && e9[1] === i6[1] && e9[0] < i6[0] || t9[1] < i6[1] && e9[1] === t9[1] && e9[0] >= t9[0];
          }
          _selectWordAtCursor(e9, t9) {
            const i6 = this._linkifier.currentLink?.link?.range;
            if (i6)
              return this._model.selectionStart = [i6.start.x - 1, i6.start.y - 1], this._model.selectionStartLength = (0, _2.getRangeLength)(i6, this._bufferService.cols), this._model.selectionEnd = void 0, true;
            const s9 = this._getMouseBufferCoords(e9);
            return !!s9 && (this._selectWordAt(s9, t9), this._model.selectionEnd = void 0, true);
          }
          selectAll() {
            this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
          }
          selectLines(e9, t9) {
            this._model.clearSelection(), e9 = Math.max(e9, 0), t9 = Math.min(t9, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e9], this._model.selectionEnd = [this._bufferService.cols, t9], this.refresh(), this._onSelectionChange.fire();
          }
          _handleTrim(e9) {
            this._model.handleTrim(e9) && this.refresh();
          }
          _getMouseBufferCoords(e9) {
            const t9 = this._mouseService.getCoords(e9, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
            if (t9)
              return t9[0]--, t9[1]--, t9[1] += this._bufferService.buffer.ydisp, t9;
          }
          _getMouseEventScrollAmount(e9) {
            let t9 = (0, n8.getCoordsRelativeToElement)(this._coreBrowserService.window, e9, this._screenElement)[1];
            const i6 = this._renderService.dimensions.css.canvas.height;
            return t9 >= 0 && t9 <= i6 ? 0 : (t9 > i6 && (t9 -= i6), t9 = Math.min(Math.max(t9, -50), 50), t9 /= 50, t9 / Math.abs(t9) + Math.round(14 * t9));
          }
          shouldForceSelection(e9) {
            return d3.isMac ? e9.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e9.shiftKey;
          }
          handleMouseDown(e9) {
            if (this._mouseDownTimeStamp = e9.timeStamp, (2 !== e9.button || !this.hasSelection) && 0 === e9.button) {
              if (!this._enabled) {
                if (!this.shouldForceSelection(e9))
                  return;
                e9.stopPropagation();
              }
              e9.preventDefault(), this._dragScrollAmount = 0, this._enabled && e9.shiftKey ? this._handleIncrementalClick(e9) : 1 === e9.detail ? this._handleSingleClick(e9) : 2 === e9.detail ? this._handleDoubleClick(e9) : 3 === e9.detail && this._handleTripleClick(e9), this._addMouseDownListeners(), this.refresh(true);
            }
          }
          _addMouseDownListeners() {
            this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
          }
          _removeMouseDownListeners() {
            this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
          }
          _handleIncrementalClick(e9) {
            this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e9));
          }
          _handleSingleClick(e9) {
            if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e9) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e9), !this._model.selectionStart)
              return;
            this._model.selectionEnd = void 0;
            const t9 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
            t9 && t9.length !== this._model.selectionStart[0] && 0 === t9.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
          }
          _handleDoubleClick(e9) {
            this._selectWordAtCursor(e9, true) && (this._activeSelectionMode = 1);
          }
          _handleTripleClick(e9) {
            const t9 = this._getMouseBufferCoords(e9);
            t9 && (this._activeSelectionMode = 2, this._selectLineAt(t9[1]));
          }
          shouldColumnSelect(e9) {
            return e9.altKey && !(d3.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
          }
          _handleMouseMove(e9) {
            if (e9.stopImmediatePropagation(), !this._model.selectionStart)
              return;
            const t9 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
            if (this._model.selectionEnd = this._getMouseBufferCoords(e9), !this._model.selectionEnd)
              return void this.refresh(true);
            2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e9), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
            const i6 = this._bufferService.buffer;
            if (this._model.selectionEnd[1] < i6.lines.length) {
              const e10 = i6.lines.get(this._model.selectionEnd[1]);
              e10 && 0 === e10.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
            }
            t9 && t9[0] === this._model.selectionEnd[0] && t9[1] === this._model.selectionEnd[1] || this.refresh(true);
          }
          _dragScroll() {
            if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
              this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
              const e9 = this._bufferService.buffer;
              this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e9.ydisp + this._bufferService.rows, e9.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e9.ydisp), this.refresh();
            }
          }
          _handleMouseUp(e9) {
            const t9 = e9.timeStamp - this._mouseDownTimeStamp;
            if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t9 < 500 && e9.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
              if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                const t10 = this._mouseService.getCoords(e9, this._element, this._bufferService.cols, this._bufferService.rows, false);
                if (t10 && void 0 !== t10[0] && void 0 !== t10[1]) {
                  const e10 = (0, o7.moveToCellSequence)(t10[0] - 1, t10[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                  this._coreService.triggerDataEvent(e10, true);
                }
              }
            } else
              this._fireEventIfSelectionChanged();
          }
          _fireEventIfSelectionChanged() {
            const e9 = this._model.finalSelectionStart, t9 = this._model.finalSelectionEnd, i6 = !(!e9 || !t9 || e9[0] === t9[0] && e9[1] === t9[1]);
            i6 ? e9 && t9 && (this._oldSelectionStart && this._oldSelectionEnd && e9[0] === this._oldSelectionStart[0] && e9[1] === this._oldSelectionStart[1] && t9[0] === this._oldSelectionEnd[0] && t9[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e9, t9, i6)) : this._oldHasSelection && this._fireOnSelectionChange(e9, t9, i6);
          }
          _fireOnSelectionChange(e9, t9, i6) {
            this._oldSelectionStart = e9, this._oldSelectionEnd = t9, this._oldHasSelection = i6, this._onSelectionChange.fire();
          }
          _handleBufferActivate(e9) {
            this.clearSelection(), this._trimListener.dispose(), this._trimListener = e9.activeBuffer.lines.onTrim((e10) => this._handleTrim(e10));
          }
          _convertViewportColToCharacterIndex(e9, t9) {
            let i6 = t9;
            for (let s9 = 0; t9 >= s9; s9++) {
              const r5 = e9.loadCell(s9, this._workCell).getChars().length;
              0 === this._workCell.getWidth() ? i6-- : r5 > 1 && t9 !== s9 && (i6 += r5 - 1);
            }
            return i6;
          }
          setSelection(e9, t9, i6) {
            this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e9, t9], this._model.selectionStartLength = i6, this.refresh(), this._fireEventIfSelectionChanged();
          }
          rightClickSelect(e9) {
            this._isClickInSelection(e9) || (this._selectWordAtCursor(e9, false) && this.refresh(true), this._fireEventIfSelectionChanged());
          }
          _getWordAt(e9, t9, i6 = true, s9 = true) {
            if (e9[0] >= this._bufferService.cols)
              return;
            const r5 = this._bufferService.buffer, n9 = r5.lines.get(e9[1]);
            if (!n9)
              return;
            const o8 = r5.translateBufferLineToString(e9[1], false);
            let a4 = this._convertViewportColToCharacterIndex(n9, e9[0]), h4 = a4;
            const c5 = e9[0] - a4;
            let l6 = 0, d4 = 0, _3 = 0, u4 = 0;
            if (" " === o8.charAt(a4)) {
              for (; a4 > 0 && " " === o8.charAt(a4 - 1); )
                a4--;
              for (; h4 < o8.length && " " === o8.charAt(h4 + 1); )
                h4++;
            } else {
              let t10 = e9[0], i7 = e9[0];
              0 === n9.getWidth(t10) && (l6++, t10--), 2 === n9.getWidth(i7) && (d4++, i7++);
              const s10 = n9.getString(i7).length;
              for (s10 > 1 && (u4 += s10 - 1, h4 += s10 - 1); t10 > 0 && a4 > 0 && !this._isCharWordSeparator(n9.loadCell(t10 - 1, this._workCell)); ) {
                n9.loadCell(t10 - 1, this._workCell);
                const e10 = this._workCell.getChars().length;
                0 === this._workCell.getWidth() ? (l6++, t10--) : e10 > 1 && (_3 += e10 - 1, a4 -= e10 - 1), a4--, t10--;
              }
              for (; i7 < n9.length && h4 + 1 < o8.length && !this._isCharWordSeparator(n9.loadCell(i7 + 1, this._workCell)); ) {
                n9.loadCell(i7 + 1, this._workCell);
                const e10 = this._workCell.getChars().length;
                2 === this._workCell.getWidth() ? (d4++, i7++) : e10 > 1 && (u4 += e10 - 1, h4 += e10 - 1), h4++, i7++;
              }
            }
            h4++;
            let f3 = a4 + c5 - l6 + _3, v4 = Math.min(this._bufferService.cols, h4 - a4 + l6 + d4 - _3 - u4);
            if (t9 || "" !== o8.slice(a4, h4).trim()) {
              if (i6 && 0 === f3 && 32 !== n9.getCodePoint(0)) {
                const t10 = r5.lines.get(e9[1] - 1);
                if (t10 && n9.isWrapped && 32 !== t10.getCodePoint(this._bufferService.cols - 1)) {
                  const t11 = this._getWordAt([this._bufferService.cols - 1, e9[1] - 1], false, true, false);
                  if (t11) {
                    const e10 = this._bufferService.cols - t11.start;
                    f3 -= e10, v4 += e10;
                  }
                }
              }
              if (s9 && f3 + v4 === this._bufferService.cols && 32 !== n9.getCodePoint(this._bufferService.cols - 1)) {
                const t10 = r5.lines.get(e9[1] + 1);
                if (t10?.isWrapped && 32 !== t10.getCodePoint(0)) {
                  const t11 = this._getWordAt([0, e9[1] + 1], false, false, true);
                  t11 && (v4 += t11.length);
                }
              }
              return { start: f3, length: v4 };
            }
          }
          _selectWordAt(e9, t9) {
            const i6 = this._getWordAt(e9, t9);
            if (i6) {
              for (; i6.start < 0; )
                i6.start += this._bufferService.cols, e9[1]--;
              this._model.selectionStart = [i6.start, e9[1]], this._model.selectionStartLength = i6.length;
            }
          }
          _selectToWordAt(e9) {
            const t9 = this._getWordAt(e9, true);
            if (t9) {
              let i6 = e9[1];
              for (; t9.start < 0; )
                t9.start += this._bufferService.cols, i6--;
              if (!this._model.areSelectionValuesReversed())
                for (; t9.start + t9.length > this._bufferService.cols; )
                  t9.length -= this._bufferService.cols, i6++;
              this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t9.start : t9.start + t9.length, i6];
            }
          }
          _isCharWordSeparator(e9) {
            return 0 !== e9.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e9.getChars()) >= 0;
          }
          _selectLineAt(e9) {
            const t9 = this._bufferService.buffer.getWrappedRangeForLine(e9), i6 = { start: { x: 0, y: t9.first }, end: { x: this._bufferService.cols - 1, y: t9.last } };
            this._model.selectionStart = [0, t9.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, _2.getRangeLength)(i6, this._bufferService.cols);
          }
        };
        t8.SelectionService = g2 = s8([r4(3, f2.IBufferService), r4(4, f2.ICoreService), r4(5, h3.IMouseService), r4(6, f2.IOptionsService), r4(7, h3.IRenderService), r4(8, h3.ICoreBrowserService)], g2);
      }, 4725: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.ILinkProviderService = t8.IThemeService = t8.ICharacterJoinerService = t8.ISelectionService = t8.IRenderService = t8.IMouseService = t8.ICoreBrowserService = t8.ICharSizeService = void 0;
        const s8 = i5(8343);
        t8.ICharSizeService = (0, s8.createDecorator)("CharSizeService"), t8.ICoreBrowserService = (0, s8.createDecorator)("CoreBrowserService"), t8.IMouseService = (0, s8.createDecorator)("MouseService"), t8.IRenderService = (0, s8.createDecorator)("RenderService"), t8.ISelectionService = (0, s8.createDecorator)("SelectionService"), t8.ICharacterJoinerService = (0, s8.createDecorator)("CharacterJoinerService"), t8.IThemeService = (0, s8.createDecorator)("ThemeService"), t8.ILinkProviderService = (0, s8.createDecorator)("LinkProviderService");
      }, 6731: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.ThemeService = t8.DEFAULT_ANSI_COLORS = void 0;
        const n8 = i5(7239), o7 = i5(8055), a3 = i5(8460), h3 = i5(844), c4 = i5(2585), l5 = o7.css.toColor("#ffffff"), d3 = o7.css.toColor("#000000"), _2 = o7.css.toColor("#ffffff"), u3 = o7.css.toColor("#000000"), f2 = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
        t8.DEFAULT_ANSI_COLORS = Object.freeze((() => {
          const e9 = [o7.css.toColor("#2e3436"), o7.css.toColor("#cc0000"), o7.css.toColor("#4e9a06"), o7.css.toColor("#c4a000"), o7.css.toColor("#3465a4"), o7.css.toColor("#75507b"), o7.css.toColor("#06989a"), o7.css.toColor("#d3d7cf"), o7.css.toColor("#555753"), o7.css.toColor("#ef2929"), o7.css.toColor("#8ae234"), o7.css.toColor("#fce94f"), o7.css.toColor("#729fcf"), o7.css.toColor("#ad7fa8"), o7.css.toColor("#34e2e2"), o7.css.toColor("#eeeeec")], t9 = [0, 95, 135, 175, 215, 255];
          for (let i6 = 0; i6 < 216; i6++) {
            const s9 = t9[i6 / 36 % 6 | 0], r5 = t9[i6 / 6 % 6 | 0], n9 = t9[i6 % 6];
            e9.push({ css: o7.channels.toCss(s9, r5, n9), rgba: o7.channels.toRgba(s9, r5, n9) });
          }
          for (let t10 = 0; t10 < 24; t10++) {
            const i6 = 8 + 10 * t10;
            e9.push({ css: o7.channels.toCss(i6, i6, i6), rgba: o7.channels.toRgba(i6, i6, i6) });
          }
          return e9;
        })());
        let v3 = t8.ThemeService = class extends h3.Disposable {
          get colors() {
            return this._colors;
          }
          constructor(e9) {
            super(), this._optionsService = e9, this._contrastCache = new n8.ColorContrastCache(), this._halfContrastCache = new n8.ColorContrastCache(), this._onChangeColors = this.register(new a3.EventEmitter()), this.onChangeColors = this._onChangeColors.event, this._colors = { foreground: l5, background: d3, cursor: _2, cursorAccent: u3, selectionForeground: void 0, selectionBackgroundTransparent: f2, selectionBackgroundOpaque: o7.color.blend(d3, f2), selectionInactiveBackgroundTransparent: f2, selectionInactiveBackgroundOpaque: o7.color.blend(d3, f2), ansi: t8.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache, halfContrastCache: this._halfContrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this.register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
          }
          _setTheme(e9 = {}) {
            const i6 = this._colors;
            if (i6.foreground = p3(e9.foreground, l5), i6.background = p3(e9.background, d3), i6.cursor = p3(e9.cursor, _2), i6.cursorAccent = p3(e9.cursorAccent, u3), i6.selectionBackgroundTransparent = p3(e9.selectionBackground, f2), i6.selectionBackgroundOpaque = o7.color.blend(i6.background, i6.selectionBackgroundTransparent), i6.selectionInactiveBackgroundTransparent = p3(e9.selectionInactiveBackground, i6.selectionBackgroundTransparent), i6.selectionInactiveBackgroundOpaque = o7.color.blend(i6.background, i6.selectionInactiveBackgroundTransparent), i6.selectionForeground = e9.selectionForeground ? p3(e9.selectionForeground, o7.NULL_COLOR) : void 0, i6.selectionForeground === o7.NULL_COLOR && (i6.selectionForeground = void 0), o7.color.isOpaque(i6.selectionBackgroundTransparent)) {
              const e10 = 0.3;
              i6.selectionBackgroundTransparent = o7.color.opacity(i6.selectionBackgroundTransparent, e10);
            }
            if (o7.color.isOpaque(i6.selectionInactiveBackgroundTransparent)) {
              const e10 = 0.3;
              i6.selectionInactiveBackgroundTransparent = o7.color.opacity(i6.selectionInactiveBackgroundTransparent, e10);
            }
            if (i6.ansi = t8.DEFAULT_ANSI_COLORS.slice(), i6.ansi[0] = p3(e9.black, t8.DEFAULT_ANSI_COLORS[0]), i6.ansi[1] = p3(e9.red, t8.DEFAULT_ANSI_COLORS[1]), i6.ansi[2] = p3(e9.green, t8.DEFAULT_ANSI_COLORS[2]), i6.ansi[3] = p3(e9.yellow, t8.DEFAULT_ANSI_COLORS[3]), i6.ansi[4] = p3(e9.blue, t8.DEFAULT_ANSI_COLORS[4]), i6.ansi[5] = p3(e9.magenta, t8.DEFAULT_ANSI_COLORS[5]), i6.ansi[6] = p3(e9.cyan, t8.DEFAULT_ANSI_COLORS[6]), i6.ansi[7] = p3(e9.white, t8.DEFAULT_ANSI_COLORS[7]), i6.ansi[8] = p3(e9.brightBlack, t8.DEFAULT_ANSI_COLORS[8]), i6.ansi[9] = p3(e9.brightRed, t8.DEFAULT_ANSI_COLORS[9]), i6.ansi[10] = p3(e9.brightGreen, t8.DEFAULT_ANSI_COLORS[10]), i6.ansi[11] = p3(e9.brightYellow, t8.DEFAULT_ANSI_COLORS[11]), i6.ansi[12] = p3(e9.brightBlue, t8.DEFAULT_ANSI_COLORS[12]), i6.ansi[13] = p3(e9.brightMagenta, t8.DEFAULT_ANSI_COLORS[13]), i6.ansi[14] = p3(e9.brightCyan, t8.DEFAULT_ANSI_COLORS[14]), i6.ansi[15] = p3(e9.brightWhite, t8.DEFAULT_ANSI_COLORS[15]), e9.extendedAnsi) {
              const s9 = Math.min(i6.ansi.length - 16, e9.extendedAnsi.length);
              for (let r5 = 0; r5 < s9; r5++)
                i6.ansi[r5 + 16] = p3(e9.extendedAnsi[r5], t8.DEFAULT_ANSI_COLORS[r5 + 16]);
            }
            this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
          }
          restoreColor(e9) {
            this._restoreColor(e9), this._onChangeColors.fire(this.colors);
          }
          _restoreColor(e9) {
            if (void 0 !== e9)
              switch (e9) {
                case 256:
                  this._colors.foreground = this._restoreColors.foreground;
                  break;
                case 257:
                  this._colors.background = this._restoreColors.background;
                  break;
                case 258:
                  this._colors.cursor = this._restoreColors.cursor;
                  break;
                default:
                  this._colors.ansi[e9] = this._restoreColors.ansi[e9];
              }
            else
              for (let e10 = 0; e10 < this._restoreColors.ansi.length; ++e10)
                this._colors.ansi[e10] = this._restoreColors.ansi[e10];
          }
          modifyColors(e9) {
            e9(this._colors), this._onChangeColors.fire(this.colors);
          }
          _updateRestoreColors() {
            this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
          }
        };
        function p3(e9, t9) {
          if (void 0 !== e9)
            try {
              return o7.css.toColor(e9);
            } catch {
            }
          return t9;
        }
        t8.ThemeService = v3 = s8([r4(0, c4.IOptionsService)], v3);
      }, 6349: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CircularList = void 0;
        const s8 = i5(8460), r4 = i5(844);
        class n8 extends r4.Disposable {
          constructor(e9) {
            super(), this._maxLength = e9, this.onDeleteEmitter = this.register(new s8.EventEmitter()), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this.register(new s8.EventEmitter()), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this.register(new s8.EventEmitter()), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
          }
          get maxLength() {
            return this._maxLength;
          }
          set maxLength(e9) {
            if (this._maxLength === e9)
              return;
            const t9 = new Array(e9);
            for (let i6 = 0; i6 < Math.min(e9, this.length); i6++)
              t9[i6] = this._array[this._getCyclicIndex(i6)];
            this._array = t9, this._maxLength = e9, this._startIndex = 0;
          }
          get length() {
            return this._length;
          }
          set length(e9) {
            if (e9 > this._length)
              for (let t9 = this._length; t9 < e9; t9++)
                this._array[t9] = void 0;
            this._length = e9;
          }
          get(e9) {
            return this._array[this._getCyclicIndex(e9)];
          }
          set(e9, t9) {
            this._array[this._getCyclicIndex(e9)] = t9;
          }
          push(e9) {
            this._array[this._getCyclicIndex(this._length)] = e9, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
          }
          recycle() {
            if (this._length !== this._maxLength)
              throw new Error("Can only recycle when the buffer is full");
            return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
          }
          get isFull() {
            return this._length === this._maxLength;
          }
          pop() {
            return this._array[this._getCyclicIndex(this._length-- - 1)];
          }
          splice(e9, t9, ...i6) {
            if (t9) {
              for (let i7 = e9; i7 < this._length - t9; i7++)
                this._array[this._getCyclicIndex(i7)] = this._array[this._getCyclicIndex(i7 + t9)];
              this._length -= t9, this.onDeleteEmitter.fire({ index: e9, amount: t9 });
            }
            for (let t10 = this._length - 1; t10 >= e9; t10--)
              this._array[this._getCyclicIndex(t10 + i6.length)] = this._array[this._getCyclicIndex(t10)];
            for (let t10 = 0; t10 < i6.length; t10++)
              this._array[this._getCyclicIndex(e9 + t10)] = i6[t10];
            if (i6.length && this.onInsertEmitter.fire({ index: e9, amount: i6.length }), this._length + i6.length > this._maxLength) {
              const e10 = this._length + i6.length - this._maxLength;
              this._startIndex += e10, this._length = this._maxLength, this.onTrimEmitter.fire(e10);
            } else
              this._length += i6.length;
          }
          trimStart(e9) {
            e9 > this._length && (e9 = this._length), this._startIndex += e9, this._length -= e9, this.onTrimEmitter.fire(e9);
          }
          shiftElements(e9, t9, i6) {
            if (!(t9 <= 0)) {
              if (e9 < 0 || e9 >= this._length)
                throw new Error("start argument out of range");
              if (e9 + i6 < 0)
                throw new Error("Cannot shift elements in list beyond index 0");
              if (i6 > 0) {
                for (let s10 = t9 - 1; s10 >= 0; s10--)
                  this.set(e9 + s10 + i6, this.get(e9 + s10));
                const s9 = e9 + t9 + i6 - this._length;
                if (s9 > 0)
                  for (this._length += s9; this._length > this._maxLength; )
                    this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
              } else
                for (let s9 = 0; s9 < t9; s9++)
                  this.set(e9 + s9 + i6, this.get(e9 + s9));
            }
          }
          _getCyclicIndex(e9) {
            return (this._startIndex + e9) % this._maxLength;
          }
        }
        t8.CircularList = n8;
      }, 1439: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.clone = void 0, t8.clone = function e9(t9, i5 = 5) {
          if ("object" != typeof t9)
            return t9;
          const s8 = Array.isArray(t9) ? [] : {};
          for (const r4 in t9)
            s8[r4] = i5 <= 1 ? t9[r4] : t9[r4] && e9(t9[r4], i5 - 1);
          return s8;
        };
      }, 8055: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.contrastRatio = t8.toPaddedHex = t8.rgba = t8.rgb = t8.css = t8.color = t8.channels = t8.NULL_COLOR = void 0;
        let i5 = 0, s8 = 0, r4 = 0, n8 = 0;
        var o7, a3, h3, c4, l5;
        function d3(e9) {
          const t9 = e9.toString(16);
          return t9.length < 2 ? "0" + t9 : t9;
        }
        function _2(e9, t9) {
          return e9 < t9 ? (t9 + 0.05) / (e9 + 0.05) : (e9 + 0.05) / (t9 + 0.05);
        }
        t8.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(e9) {
          e9.toCss = function(e10, t9, i6, s9) {
            return void 0 !== s9 ? `#${d3(e10)}${d3(t9)}${d3(i6)}${d3(s9)}` : `#${d3(e10)}${d3(t9)}${d3(i6)}`;
          }, e9.toRgba = function(e10, t9, i6, s9 = 255) {
            return (e10 << 24 | t9 << 16 | i6 << 8 | s9) >>> 0;
          }, e9.toColor = function(t9, i6, s9, r5) {
            return { css: e9.toCss(t9, i6, s9, r5), rgba: e9.toRgba(t9, i6, s9, r5) };
          };
        }(o7 || (t8.channels = o7 = {})), function(e9) {
          function t9(e10, t10) {
            return n8 = Math.round(255 * t10), [i5, s8, r4] = l5.toChannels(e10.rgba), { css: o7.toCss(i5, s8, r4, n8), rgba: o7.toRgba(i5, s8, r4, n8) };
          }
          e9.blend = function(e10, t10) {
            if (n8 = (255 & t10.rgba) / 255, 1 === n8)
              return { css: t10.css, rgba: t10.rgba };
            const a4 = t10.rgba >> 24 & 255, h4 = t10.rgba >> 16 & 255, c5 = t10.rgba >> 8 & 255, l6 = e10.rgba >> 24 & 255, d4 = e10.rgba >> 16 & 255, _3 = e10.rgba >> 8 & 255;
            return i5 = l6 + Math.round((a4 - l6) * n8), s8 = d4 + Math.round((h4 - d4) * n8), r4 = _3 + Math.round((c5 - _3) * n8), { css: o7.toCss(i5, s8, r4), rgba: o7.toRgba(i5, s8, r4) };
          }, e9.isOpaque = function(e10) {
            return 255 == (255 & e10.rgba);
          }, e9.ensureContrastRatio = function(e10, t10, i6) {
            const s9 = l5.ensureContrastRatio(e10.rgba, t10.rgba, i6);
            if (s9)
              return o7.toColor(s9 >> 24 & 255, s9 >> 16 & 255, s9 >> 8 & 255);
          }, e9.opaque = function(e10) {
            const t10 = (255 | e10.rgba) >>> 0;
            return [i5, s8, r4] = l5.toChannels(t10), { css: o7.toCss(i5, s8, r4), rgba: t10 };
          }, e9.opacity = t9, e9.multiplyOpacity = function(e10, i6) {
            return n8 = 255 & e10.rgba, t9(e10, n8 * i6 / 255);
          }, e9.toColorRGB = function(e10) {
            return [e10.rgba >> 24 & 255, e10.rgba >> 16 & 255, e10.rgba >> 8 & 255];
          };
        }(a3 || (t8.color = a3 = {})), function(e9) {
          let t9, a4;
          try {
            const e10 = document.createElement("canvas");
            e10.width = 1, e10.height = 1;
            const i6 = e10.getContext("2d", { willReadFrequently: true });
            i6 && (t9 = i6, t9.globalCompositeOperation = "copy", a4 = t9.createLinearGradient(0, 0, 1, 1));
          } catch {
          }
          e9.toColor = function(e10) {
            if (e10.match(/#[\da-f]{3,8}/i))
              switch (e10.length) {
                case 4:
                  return i5 = parseInt(e10.slice(1, 2).repeat(2), 16), s8 = parseInt(e10.slice(2, 3).repeat(2), 16), r4 = parseInt(e10.slice(3, 4).repeat(2), 16), o7.toColor(i5, s8, r4);
                case 5:
                  return i5 = parseInt(e10.slice(1, 2).repeat(2), 16), s8 = parseInt(e10.slice(2, 3).repeat(2), 16), r4 = parseInt(e10.slice(3, 4).repeat(2), 16), n8 = parseInt(e10.slice(4, 5).repeat(2), 16), o7.toColor(i5, s8, r4, n8);
                case 7:
                  return { css: e10, rgba: (parseInt(e10.slice(1), 16) << 8 | 255) >>> 0 };
                case 9:
                  return { css: e10, rgba: parseInt(e10.slice(1), 16) >>> 0 };
              }
            const h4 = e10.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
            if (h4)
              return i5 = parseInt(h4[1]), s8 = parseInt(h4[2]), r4 = parseInt(h4[3]), n8 = Math.round(255 * (void 0 === h4[5] ? 1 : parseFloat(h4[5]))), o7.toColor(i5, s8, r4, n8);
            if (!t9 || !a4)
              throw new Error("css.toColor: Unsupported css format");
            if (t9.fillStyle = a4, t9.fillStyle = e10, "string" != typeof t9.fillStyle)
              throw new Error("css.toColor: Unsupported css format");
            if (t9.fillRect(0, 0, 1, 1), [i5, s8, r4, n8] = t9.getImageData(0, 0, 1, 1).data, 255 !== n8)
              throw new Error("css.toColor: Unsupported css format");
            return { rgba: o7.toRgba(i5, s8, r4, n8), css: e10 };
          };
        }(h3 || (t8.css = h3 = {})), function(e9) {
          function t9(e10, t10, i6) {
            const s9 = e10 / 255, r5 = t10 / 255, n9 = i6 / 255;
            return 0.2126 * (s9 <= 0.03928 ? s9 / 12.92 : Math.pow((s9 + 0.055) / 1.055, 2.4)) + 0.7152 * (r5 <= 0.03928 ? r5 / 12.92 : Math.pow((r5 + 0.055) / 1.055, 2.4)) + 0.0722 * (n9 <= 0.03928 ? n9 / 12.92 : Math.pow((n9 + 0.055) / 1.055, 2.4));
          }
          e9.relativeLuminance = function(e10) {
            return t9(e10 >> 16 & 255, e10 >> 8 & 255, 255 & e10);
          }, e9.relativeLuminance2 = t9;
        }(c4 || (t8.rgb = c4 = {})), function(e9) {
          function t9(e10, t10, i6) {
            const s9 = e10 >> 24 & 255, r5 = e10 >> 16 & 255, n9 = e10 >> 8 & 255;
            let o8 = t10 >> 24 & 255, a5 = t10 >> 16 & 255, h4 = t10 >> 8 & 255, l6 = _2(c4.relativeLuminance2(o8, a5, h4), c4.relativeLuminance2(s9, r5, n9));
            for (; l6 < i6 && (o8 > 0 || a5 > 0 || h4 > 0); )
              o8 -= Math.max(0, Math.ceil(0.1 * o8)), a5 -= Math.max(0, Math.ceil(0.1 * a5)), h4 -= Math.max(0, Math.ceil(0.1 * h4)), l6 = _2(c4.relativeLuminance2(o8, a5, h4), c4.relativeLuminance2(s9, r5, n9));
            return (o8 << 24 | a5 << 16 | h4 << 8 | 255) >>> 0;
          }
          function a4(e10, t10, i6) {
            const s9 = e10 >> 24 & 255, r5 = e10 >> 16 & 255, n9 = e10 >> 8 & 255;
            let o8 = t10 >> 24 & 255, a5 = t10 >> 16 & 255, h4 = t10 >> 8 & 255, l6 = _2(c4.relativeLuminance2(o8, a5, h4), c4.relativeLuminance2(s9, r5, n9));
            for (; l6 < i6 && (o8 < 255 || a5 < 255 || h4 < 255); )
              o8 = Math.min(255, o8 + Math.ceil(0.1 * (255 - o8))), a5 = Math.min(255, a5 + Math.ceil(0.1 * (255 - a5))), h4 = Math.min(255, h4 + Math.ceil(0.1 * (255 - h4))), l6 = _2(c4.relativeLuminance2(o8, a5, h4), c4.relativeLuminance2(s9, r5, n9));
            return (o8 << 24 | a5 << 16 | h4 << 8 | 255) >>> 0;
          }
          e9.blend = function(e10, t10) {
            if (n8 = (255 & t10) / 255, 1 === n8)
              return t10;
            const a5 = t10 >> 24 & 255, h4 = t10 >> 16 & 255, c5 = t10 >> 8 & 255, l6 = e10 >> 24 & 255, d4 = e10 >> 16 & 255, _3 = e10 >> 8 & 255;
            return i5 = l6 + Math.round((a5 - l6) * n8), s8 = d4 + Math.round((h4 - d4) * n8), r4 = _3 + Math.round((c5 - _3) * n8), o7.toRgba(i5, s8, r4);
          }, e9.ensureContrastRatio = function(e10, i6, s9) {
            const r5 = c4.relativeLuminance(e10 >> 8), n9 = c4.relativeLuminance(i6 >> 8);
            if (_2(r5, n9) < s9) {
              if (n9 < r5) {
                const n10 = t9(e10, i6, s9), o9 = _2(r5, c4.relativeLuminance(n10 >> 8));
                if (o9 < s9) {
                  const t10 = a4(e10, i6, s9);
                  return o9 > _2(r5, c4.relativeLuminance(t10 >> 8)) ? n10 : t10;
                }
                return n10;
              }
              const o8 = a4(e10, i6, s9), h4 = _2(r5, c4.relativeLuminance(o8 >> 8));
              if (h4 < s9) {
                const n10 = t9(e10, i6, s9);
                return h4 > _2(r5, c4.relativeLuminance(n10 >> 8)) ? o8 : n10;
              }
              return o8;
            }
          }, e9.reduceLuminance = t9, e9.increaseLuminance = a4, e9.toChannels = function(e10) {
            return [e10 >> 24 & 255, e10 >> 16 & 255, e10 >> 8 & 255, 255 & e10];
          };
        }(l5 || (t8.rgba = l5 = {})), t8.toPaddedHex = d3, t8.contrastRatio = _2;
      }, 8969: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CoreTerminal = void 0;
        const s8 = i5(844), r4 = i5(2585), n8 = i5(4348), o7 = i5(7866), a3 = i5(744), h3 = i5(7302), c4 = i5(6975), l5 = i5(8460), d3 = i5(1753), _2 = i5(1480), u3 = i5(7994), f2 = i5(9282), v3 = i5(5435), p3 = i5(5981), g2 = i5(2660);
        let m2 = false;
        class S3 extends s8.Disposable {
          get onScroll() {
            return this._onScrollApi || (this._onScrollApi = this.register(new l5.EventEmitter()), this._onScroll.event((e9) => {
              this._onScrollApi?.fire(e9.position);
            })), this._onScrollApi.event;
          }
          get cols() {
            return this._bufferService.cols;
          }
          get rows() {
            return this._bufferService.rows;
          }
          get buffers() {
            return this._bufferService.buffers;
          }
          get options() {
            return this.optionsService.options;
          }
          set options(e9) {
            for (const t9 in e9)
              this.optionsService.options[t9] = e9[t9];
          }
          constructor(e9) {
            super(), this._windowsWrappingHeuristics = this.register(new s8.MutableDisposable()), this._onBinary = this.register(new l5.EventEmitter()), this.onBinary = this._onBinary.event, this._onData = this.register(new l5.EventEmitter()), this.onData = this._onData.event, this._onLineFeed = this.register(new l5.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onResize = this.register(new l5.EventEmitter()), this.onResize = this._onResize.event, this._onWriteParsed = this.register(new l5.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this.register(new l5.EventEmitter()), this._instantiationService = new n8.InstantiationService(), this.optionsService = this.register(new h3.OptionsService(e9)), this._instantiationService.setService(r4.IOptionsService, this.optionsService), this._bufferService = this.register(this._instantiationService.createInstance(a3.BufferService)), this._instantiationService.setService(r4.IBufferService, this._bufferService), this._logService = this.register(this._instantiationService.createInstance(o7.LogService)), this._instantiationService.setService(r4.ILogService, this._logService), this.coreService = this.register(this._instantiationService.createInstance(c4.CoreService)), this._instantiationService.setService(r4.ICoreService, this.coreService), this.coreMouseService = this.register(this._instantiationService.createInstance(d3.CoreMouseService)), this._instantiationService.setService(r4.ICoreMouseService, this.coreMouseService), this.unicodeService = this.register(this._instantiationService.createInstance(_2.UnicodeService)), this._instantiationService.setService(r4.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(u3.CharsetService), this._instantiationService.setService(r4.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(g2.OscLinkService), this._instantiationService.setService(r4.IOscLinkService, this._oscLinkService), this._inputHandler = this.register(new v3.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this.register((0, l5.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)), this.register(this._inputHandler), this.register((0, l5.forwardEvent)(this._bufferService.onResize, this._onResize)), this.register((0, l5.forwardEvent)(this.coreService.onData, this._onData)), this.register((0, l5.forwardEvent)(this.coreService.onBinary, this._onBinary)), this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom())), this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this.register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this.register(this._bufferService.onScroll((e10) => {
              this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
            })), this.register(this._inputHandler.onScroll((e10) => {
              this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
            })), this._writeBuffer = this.register(new p3.WriteBuffer((e10, t9) => this._inputHandler.parse(e10, t9))), this.register((0, l5.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed));
          }
          write(e9, t9) {
            this._writeBuffer.write(e9, t9);
          }
          writeSync(e9, t9) {
            this._logService.logLevel <= r4.LogLevelEnum.WARN && !m2 && (this._logService.warn("writeSync is unreliable and will be removed soon."), m2 = true), this._writeBuffer.writeSync(e9, t9);
          }
          input(e9, t9 = true) {
            this.coreService.triggerDataEvent(e9, t9);
          }
          resize(e9, t9) {
            isNaN(e9) || isNaN(t9) || (e9 = Math.max(e9, a3.MINIMUM_COLS), t9 = Math.max(t9, a3.MINIMUM_ROWS), this._bufferService.resize(e9, t9));
          }
          scroll(e9, t9 = false) {
            this._bufferService.scroll(e9, t9);
          }
          scrollLines(e9, t9, i6) {
            this._bufferService.scrollLines(e9, t9, i6);
          }
          scrollPages(e9) {
            this.scrollLines(e9 * (this.rows - 1));
          }
          scrollToTop() {
            this.scrollLines(-this._bufferService.buffer.ydisp);
          }
          scrollToBottom() {
            this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
          }
          scrollToLine(e9) {
            const t9 = e9 - this._bufferService.buffer.ydisp;
            0 !== t9 && this.scrollLines(t9);
          }
          registerEscHandler(e9, t9) {
            return this._inputHandler.registerEscHandler(e9, t9);
          }
          registerDcsHandler(e9, t9) {
            return this._inputHandler.registerDcsHandler(e9, t9);
          }
          registerCsiHandler(e9, t9) {
            return this._inputHandler.registerCsiHandler(e9, t9);
          }
          registerOscHandler(e9, t9) {
            return this._inputHandler.registerOscHandler(e9, t9);
          }
          _setup() {
            this._handleWindowsPtyOptionChange();
          }
          reset() {
            this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
          }
          _handleWindowsPtyOptionChange() {
            let e9 = false;
            const t9 = this.optionsService.rawOptions.windowsPty;
            t9 && void 0 !== t9.buildNumber && void 0 !== t9.buildNumber ? e9 = !!("conpty" === t9.backend && t9.buildNumber < 21376) : this.optionsService.rawOptions.windowsMode && (e9 = true), e9 ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
          }
          _enableWindowsWrappingHeuristics() {
            if (!this._windowsWrappingHeuristics.value) {
              const e9 = [];
              e9.push(this.onLineFeed(f2.updateWindowsModeWrappedState.bind(null, this._bufferService))), e9.push(this.registerCsiHandler({ final: "H" }, () => ((0, f2.updateWindowsModeWrappedState)(this._bufferService), false))), this._windowsWrappingHeuristics.value = (0, s8.toDisposable)(() => {
                for (const t9 of e9)
                  t9.dispose();
              });
            }
          }
        }
        t8.CoreTerminal = S3;
      }, 8460: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.runAndSubscribe = t8.forwardEvent = t8.EventEmitter = void 0, t8.EventEmitter = class {
          constructor() {
            this._listeners = [], this._disposed = false;
          }
          get event() {
            return this._event || (this._event = (e9) => (this._listeners.push(e9), { dispose: () => {
              if (!this._disposed) {
                for (let t9 = 0; t9 < this._listeners.length; t9++)
                  if (this._listeners[t9] === e9)
                    return void this._listeners.splice(t9, 1);
              }
            } })), this._event;
          }
          fire(e9, t9) {
            const i5 = [];
            for (let e10 = 0; e10 < this._listeners.length; e10++)
              i5.push(this._listeners[e10]);
            for (let s8 = 0; s8 < i5.length; s8++)
              i5[s8].call(void 0, e9, t9);
          }
          dispose() {
            this.clearListeners(), this._disposed = true;
          }
          clearListeners() {
            this._listeners && (this._listeners.length = 0);
          }
        }, t8.forwardEvent = function(e9, t9) {
          return e9((e10) => t9.fire(e10));
        }, t8.runAndSubscribe = function(e9, t9) {
          return t9(void 0), e9((e10) => t9(e10));
        };
      }, 5435: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.InputHandler = t8.WindowsOptionsReportType = void 0;
        const n8 = i5(2584), o7 = i5(7116), a3 = i5(2015), h3 = i5(844), c4 = i5(482), l5 = i5(8437), d3 = i5(8460), _2 = i5(643), u3 = i5(511), f2 = i5(3734), v3 = i5(2585), p3 = i5(1480), g2 = i5(6242), m2 = i5(6351), S3 = i5(5941), C2 = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, b2 = 131072;
        function w2(e9, t9) {
          if (e9 > 24)
            return t9.setWinLines || false;
          switch (e9) {
            case 1:
              return !!t9.restoreWin;
            case 2:
              return !!t9.minimizeWin;
            case 3:
              return !!t9.setWinPosition;
            case 4:
              return !!t9.setWinSizePixels;
            case 5:
              return !!t9.raiseWin;
            case 6:
              return !!t9.lowerWin;
            case 7:
              return !!t9.refreshWin;
            case 8:
              return !!t9.setWinSizeChars;
            case 9:
              return !!t9.maximizeWin;
            case 10:
              return !!t9.fullscreenWin;
            case 11:
              return !!t9.getWinState;
            case 13:
              return !!t9.getWinPosition;
            case 14:
              return !!t9.getWinSizePixels;
            case 15:
              return !!t9.getScreenSizePixels;
            case 16:
              return !!t9.getCellSizePixels;
            case 18:
              return !!t9.getWinSizeChars;
            case 19:
              return !!t9.getScreenSizeChars;
            case 20:
              return !!t9.getIconTitle;
            case 21:
              return !!t9.getWinTitle;
            case 22:
              return !!t9.pushTitle;
            case 23:
              return !!t9.popTitle;
            case 24:
              return !!t9.setWinLines;
          }
          return false;
        }
        var y2;
        !function(e9) {
          e9[e9.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e9[e9.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
        }(y2 || (t8.WindowsOptionsReportType = y2 = {}));
        let E2 = 0;
        class k2 extends h3.Disposable {
          getAttrData() {
            return this._curAttrData;
          }
          constructor(e9, t9, i6, s9, r5, h4, _3, f3, v4 = new a3.EscapeSequenceParser()) {
            super(), this._bufferService = e9, this._charsetService = t9, this._coreService = i6, this._logService = s9, this._optionsService = r5, this._oscLinkService = h4, this._coreMouseService = _3, this._unicodeService = f3, this._parser = v4, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new c4.StringToUtf32(), this._utf8Decoder = new c4.Utf8ToUtf32(), this._workCell = new u3.CellData(), this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = l5.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l5.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this.register(new d3.EventEmitter()), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this.register(new d3.EventEmitter()), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this.register(new d3.EventEmitter()), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this.register(new d3.EventEmitter()), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this.register(new d3.EventEmitter()), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this.register(new d3.EventEmitter()), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this.register(new d3.EventEmitter()), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this.register(new d3.EventEmitter()), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this.register(new d3.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this.register(new d3.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onScroll = this.register(new d3.EventEmitter()), this.onScroll = this._onScroll.event, this._onTitleChange = this.register(new d3.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onColor = this.register(new d3.EventEmitter()), this.onColor = this._onColor.event, this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, this._specialColors = [256, 257, 258], this.register(this._parser), this._dirtyRowTracker = new L2(this._bufferService), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e10) => this._activeBuffer = e10.activeBuffer)), this._parser.setCsiHandlerFallback((e10, t10) => {
              this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(e10), params: t10.toArray() });
            }), this._parser.setEscHandlerFallback((e10) => {
              this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(e10) });
            }), this._parser.setExecuteHandlerFallback((e10) => {
              this._logService.debug("Unknown EXECUTE code: ", { code: e10 });
            }), this._parser.setOscHandlerFallback((e10, t10, i7) => {
              this._logService.debug("Unknown OSC code: ", { identifier: e10, action: t10, data: i7 });
            }), this._parser.setDcsHandlerFallback((e10, t10, i7) => {
              "HOOK" === t10 && (i7 = i7.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(e10), action: t10, payload: i7 });
            }), this._parser.setPrintHandler((e10, t10, i7) => this.print(e10, t10, i7)), this._parser.registerCsiHandler({ final: "@" }, (e10) => this.insertChars(e10)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (e10) => this.scrollLeft(e10)), this._parser.registerCsiHandler({ final: "A" }, (e10) => this.cursorUp(e10)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (e10) => this.scrollRight(e10)), this._parser.registerCsiHandler({ final: "B" }, (e10) => this.cursorDown(e10)), this._parser.registerCsiHandler({ final: "C" }, (e10) => this.cursorForward(e10)), this._parser.registerCsiHandler({ final: "D" }, (e10) => this.cursorBackward(e10)), this._parser.registerCsiHandler({ final: "E" }, (e10) => this.cursorNextLine(e10)), this._parser.registerCsiHandler({ final: "F" }, (e10) => this.cursorPrecedingLine(e10)), this._parser.registerCsiHandler({ final: "G" }, (e10) => this.cursorCharAbsolute(e10)), this._parser.registerCsiHandler({ final: "H" }, (e10) => this.cursorPosition(e10)), this._parser.registerCsiHandler({ final: "I" }, (e10) => this.cursorForwardTab(e10)), this._parser.registerCsiHandler({ final: "J" }, (e10) => this.eraseInDisplay(e10, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (e10) => this.eraseInDisplay(e10, true)), this._parser.registerCsiHandler({ final: "K" }, (e10) => this.eraseInLine(e10, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (e10) => this.eraseInLine(e10, true)), this._parser.registerCsiHandler({ final: "L" }, (e10) => this.insertLines(e10)), this._parser.registerCsiHandler({ final: "M" }, (e10) => this.deleteLines(e10)), this._parser.registerCsiHandler({ final: "P" }, (e10) => this.deleteChars(e10)), this._parser.registerCsiHandler({ final: "S" }, (e10) => this.scrollUp(e10)), this._parser.registerCsiHandler({ final: "T" }, (e10) => this.scrollDown(e10)), this._parser.registerCsiHandler({ final: "X" }, (e10) => this.eraseChars(e10)), this._parser.registerCsiHandler({ final: "Z" }, (e10) => this.cursorBackwardTab(e10)), this._parser.registerCsiHandler({ final: "`" }, (e10) => this.charPosAbsolute(e10)), this._parser.registerCsiHandler({ final: "a" }, (e10) => this.hPositionRelative(e10)), this._parser.registerCsiHandler({ final: "b" }, (e10) => this.repeatPrecedingCharacter(e10)), this._parser.registerCsiHandler({ final: "c" }, (e10) => this.sendDeviceAttributesPrimary(e10)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (e10) => this.sendDeviceAttributesSecondary(e10)), this._parser.registerCsiHandler({ final: "d" }, (e10) => this.linePosAbsolute(e10)), this._parser.registerCsiHandler({ final: "e" }, (e10) => this.vPositionRelative(e10)), this._parser.registerCsiHandler({ final: "f" }, (e10) => this.hVPosition(e10)), this._parser.registerCsiHandler({ final: "g" }, (e10) => this.tabClear(e10)), this._parser.registerCsiHandler({ final: "h" }, (e10) => this.setMode(e10)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (e10) => this.setModePrivate(e10)), this._parser.registerCsiHandler({ final: "l" }, (e10) => this.resetMode(e10)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (e10) => this.resetModePrivate(e10)), this._parser.registerCsiHandler({ final: "m" }, (e10) => this.charAttributes(e10)), this._parser.registerCsiHandler({ final: "n" }, (e10) => this.deviceStatus(e10)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (e10) => this.deviceStatusPrivate(e10)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (e10) => this.softReset(e10)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (e10) => this.setCursorStyle(e10)), this._parser.registerCsiHandler({ final: "r" }, (e10) => this.setScrollRegion(e10)), this._parser.registerCsiHandler({ final: "s" }, (e10) => this.saveCursor(e10)), this._parser.registerCsiHandler({ final: "t" }, (e10) => this.windowOptions(e10)), this._parser.registerCsiHandler({ final: "u" }, (e10) => this.restoreCursor(e10)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (e10) => this.insertColumns(e10)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (e10) => this.deleteColumns(e10)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (e10) => this.selectProtected(e10)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (e10) => this.requestMode(e10, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (e10) => this.requestMode(e10, false)), this._parser.setExecuteHandler(n8.C0.BEL, () => this.bell()), this._parser.setExecuteHandler(n8.C0.LF, () => this.lineFeed()), this._parser.setExecuteHandler(n8.C0.VT, () => this.lineFeed()), this._parser.setExecuteHandler(n8.C0.FF, () => this.lineFeed()), this._parser.setExecuteHandler(n8.C0.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(n8.C0.BS, () => this.backspace()), this._parser.setExecuteHandler(n8.C0.HT, () => this.tab()), this._parser.setExecuteHandler(n8.C0.SO, () => this.shiftOut()), this._parser.setExecuteHandler(n8.C0.SI, () => this.shiftIn()), this._parser.setExecuteHandler(n8.C1.IND, () => this.index()), this._parser.setExecuteHandler(n8.C1.NEL, () => this.nextLine()), this._parser.setExecuteHandler(n8.C1.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new g2.OscHandler((e10) => (this.setTitle(e10), this.setIconName(e10), true))), this._parser.registerOscHandler(1, new g2.OscHandler((e10) => this.setIconName(e10))), this._parser.registerOscHandler(2, new g2.OscHandler((e10) => this.setTitle(e10))), this._parser.registerOscHandler(4, new g2.OscHandler((e10) => this.setOrReportIndexedColor(e10))), this._parser.registerOscHandler(8, new g2.OscHandler((e10) => this.setHyperlink(e10))), this._parser.registerOscHandler(10, new g2.OscHandler((e10) => this.setOrReportFgColor(e10))), this._parser.registerOscHandler(11, new g2.OscHandler((e10) => this.setOrReportBgColor(e10))), this._parser.registerOscHandler(12, new g2.OscHandler((e10) => this.setOrReportCursorColor(e10))), this._parser.registerOscHandler(104, new g2.OscHandler((e10) => this.restoreIndexedColor(e10))), this._parser.registerOscHandler(110, new g2.OscHandler((e10) => this.restoreFgColor(e10))), this._parser.registerOscHandler(111, new g2.OscHandler((e10) => this.restoreBgColor(e10))), this._parser.registerOscHandler(112, new g2.OscHandler((e10) => this.restoreCursorColor(e10))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
            for (const e10 in o7.CHARSETS)
              this._parser.registerEscHandler({ intermediates: "(", final: e10 }, () => this.selectCharset("(" + e10)), this._parser.registerEscHandler({ intermediates: ")", final: e10 }, () => this.selectCharset(")" + e10)), this._parser.registerEscHandler({ intermediates: "*", final: e10 }, () => this.selectCharset("*" + e10)), this._parser.registerEscHandler({ intermediates: "+", final: e10 }, () => this.selectCharset("+" + e10)), this._parser.registerEscHandler({ intermediates: "-", final: e10 }, () => this.selectCharset("-" + e10)), this._parser.registerEscHandler({ intermediates: ".", final: e10 }, () => this.selectCharset("." + e10)), this._parser.registerEscHandler({ intermediates: "/", final: e10 }, () => this.selectCharset("/" + e10));
            this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((e10) => (this._logService.error("Parsing error: ", e10), e10)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new m2.DcsHandler((e10, t10) => this.requestStatusString(e10, t10)));
          }
          _preserveStack(e9, t9, i6, s9) {
            this._parseStack.paused = true, this._parseStack.cursorStartX = e9, this._parseStack.cursorStartY = t9, this._parseStack.decodedLength = i6, this._parseStack.position = s9;
          }
          _logSlowResolvingAsync(e9) {
            this._logService.logLevel <= v3.LogLevelEnum.WARN && Promise.race([e9, new Promise((e10, t9) => setTimeout(() => t9("#SLOW_TIMEOUT"), 5e3))]).catch((e10) => {
              if ("#SLOW_TIMEOUT" !== e10)
                throw e10;
              console.warn("async parser handler taking longer than 5000 ms");
            });
          }
          _getCurrentLinkId() {
            return this._curAttrData.extended.urlId;
          }
          parse(e9, t9) {
            let i6, s9 = this._activeBuffer.x, r5 = this._activeBuffer.y, n9 = 0;
            const o8 = this._parseStack.paused;
            if (o8) {
              if (i6 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t9))
                return this._logSlowResolvingAsync(i6), i6;
              s9 = this._parseStack.cursorStartX, r5 = this._parseStack.cursorStartY, this._parseStack.paused = false, e9.length > b2 && (n9 = this._parseStack.position + b2);
            }
            if (this._logService.logLevel <= v3.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e9 ? ` "${e9}"` : ` "${Array.prototype.map.call(e9, (e10) => String.fromCharCode(e10)).join("")}"`), "string" == typeof e9 ? e9.split("").map((e10) => e10.charCodeAt(0)) : e9), this._parseBuffer.length < e9.length && this._parseBuffer.length < b2 && (this._parseBuffer = new Uint32Array(Math.min(e9.length, b2))), o8 || this._dirtyRowTracker.clearRange(), e9.length > b2)
              for (let t10 = n9; t10 < e9.length; t10 += b2) {
                const n10 = t10 + b2 < e9.length ? t10 + b2 : e9.length, o9 = "string" == typeof e9 ? this._stringDecoder.decode(e9.substring(t10, n10), this._parseBuffer) : this._utf8Decoder.decode(e9.subarray(t10, n10), this._parseBuffer);
                if (i6 = this._parser.parse(this._parseBuffer, o9))
                  return this._preserveStack(s9, r5, o9, t10), this._logSlowResolvingAsync(i6), i6;
              }
            else if (!o8) {
              const t10 = "string" == typeof e9 ? this._stringDecoder.decode(e9, this._parseBuffer) : this._utf8Decoder.decode(e9, this._parseBuffer);
              if (i6 = this._parser.parse(this._parseBuffer, t10))
                return this._preserveStack(s9, r5, t10, 0), this._logSlowResolvingAsync(i6), i6;
            }
            this._activeBuffer.x === s9 && this._activeBuffer.y === r5 || this._onCursorMove.fire();
            const a4 = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h4 = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            h4 < this._bufferService.rows && this._onRequestRefreshRows.fire(Math.min(h4, this._bufferService.rows - 1), Math.min(a4, this._bufferService.rows - 1));
          }
          print(e9, t9, i6) {
            let s9, r5;
            const n9 = this._charsetService.charset, o8 = this._optionsService.rawOptions.screenReaderMode, a4 = this._bufferService.cols, h4 = this._coreService.decPrivateModes.wraparound, d4 = this._coreService.modes.insertMode, u4 = this._curAttrData;
            let f3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && i6 - t9 > 0 && 2 === f3.getWidth(this._activeBuffer.x - 1) && f3.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, u4);
            let v4 = this._parser.precedingJoinState;
            for (let g3 = t9; g3 < i6; ++g3) {
              if (s9 = e9[g3], s9 < 127 && n9) {
                const e10 = n9[String.fromCharCode(s9)];
                e10 && (s9 = e10.charCodeAt(0));
              }
              const t10 = this._unicodeService.charProperties(s9, v4);
              r5 = p3.UnicodeService.extractWidth(t10);
              const i7 = p3.UnicodeService.extractShouldJoin(t10), m3 = i7 ? p3.UnicodeService.extractWidth(v4) : 0;
              if (v4 = t10, o8 && this._onA11yChar.fire((0, c4.stringFromCodePoint)(s9)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + r5 - m3 > a4) {
                if (h4) {
                  const e10 = f3;
                  let t11 = this._activeBuffer.x - m3;
                  for (this._activeBuffer.x = m3, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), f3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), m3 > 0 && f3 instanceof l5.BufferLine && f3.copyCellsFrom(e10, t11, 0, m3, false); t11 < a4; )
                    e10.setCellFromCodepoint(t11++, 0, 1, u4);
                } else if (this._activeBuffer.x = a4 - 1, 2 === r5)
                  continue;
              }
              if (i7 && this._activeBuffer.x) {
                const e10 = f3.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
                f3.addCodepointToCell(this._activeBuffer.x - e10, s9, r5);
                for (let e11 = r5 - m3; --e11 >= 0; )
                  f3.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, u4);
              } else if (d4 && (f3.insertCells(this._activeBuffer.x, r5 - m3, this._activeBuffer.getNullCell(u4)), 2 === f3.getWidth(a4 - 1) && f3.setCellFromCodepoint(a4 - 1, _2.NULL_CELL_CODE, _2.NULL_CELL_WIDTH, u4)), f3.setCellFromCodepoint(this._activeBuffer.x++, s9, r5, u4), r5 > 0)
                for (; --r5; )
                  f3.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, u4);
            }
            this._parser.precedingJoinState = v4, this._activeBuffer.x < a4 && i6 - t9 > 0 && 0 === f3.getWidth(this._activeBuffer.x) && !f3.hasContent(this._activeBuffer.x) && f3.setCellFromCodepoint(this._activeBuffer.x, 0, 1, u4), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          registerCsiHandler(e9, t9) {
            return "t" !== e9.final || e9.prefix || e9.intermediates ? this._parser.registerCsiHandler(e9, t9) : this._parser.registerCsiHandler(e9, (e10) => !w2(e10.params[0], this._optionsService.rawOptions.windowOptions) || t9(e10));
          }
          registerDcsHandler(e9, t9) {
            return this._parser.registerDcsHandler(e9, new m2.DcsHandler(t9));
          }
          registerEscHandler(e9, t9) {
            return this._parser.registerEscHandler(e9, t9);
          }
          registerOscHandler(e9, t9) {
            return this._parser.registerOscHandler(e9, new g2.OscHandler(t9));
          }
          bell() {
            return this._onRequestBell.fire(), true;
          }
          lineFeed() {
            return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
          }
          carriageReturn() {
            return this._activeBuffer.x = 0, true;
          }
          backspace() {
            if (!this._coreService.decPrivateModes.reverseWraparound)
              return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
            if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
              this._activeBuffer.x--;
            else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
              this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
              const e9 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              e9.hasWidth(this._activeBuffer.x) && !e9.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
            }
            return this._restrictCursor(), true;
          }
          tab() {
            if (this._activeBuffer.x >= this._bufferService.cols)
              return true;
            const e9 = this._activeBuffer.x;
            return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e9), true;
          }
          shiftOut() {
            return this._charsetService.setgLevel(1), true;
          }
          shiftIn() {
            return this._charsetService.setgLevel(0), true;
          }
          _restrictCursor(e9 = this._bufferService.cols - 1) {
            this._activeBuffer.x = Math.min(e9, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          _setCursor(e9, t9) {
            this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e9, this._activeBuffer.y = this._activeBuffer.scrollTop + t9) : (this._activeBuffer.x = e9, this._activeBuffer.y = t9), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          _moveCursor(e9, t9) {
            this._restrictCursor(), this._setCursor(this._activeBuffer.x + e9, this._activeBuffer.y + t9);
          }
          cursorUp(e9) {
            const t9 = this._activeBuffer.y - this._activeBuffer.scrollTop;
            return t9 >= 0 ? this._moveCursor(0, -Math.min(t9, e9.params[0] || 1)) : this._moveCursor(0, -(e9.params[0] || 1)), true;
          }
          cursorDown(e9) {
            const t9 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
            return t9 >= 0 ? this._moveCursor(0, Math.min(t9, e9.params[0] || 1)) : this._moveCursor(0, e9.params[0] || 1), true;
          }
          cursorForward(e9) {
            return this._moveCursor(e9.params[0] || 1, 0), true;
          }
          cursorBackward(e9) {
            return this._moveCursor(-(e9.params[0] || 1), 0), true;
          }
          cursorNextLine(e9) {
            return this.cursorDown(e9), this._activeBuffer.x = 0, true;
          }
          cursorPrecedingLine(e9) {
            return this.cursorUp(e9), this._activeBuffer.x = 0, true;
          }
          cursorCharAbsolute(e9) {
            return this._setCursor((e9.params[0] || 1) - 1, this._activeBuffer.y), true;
          }
          cursorPosition(e9) {
            return this._setCursor(e9.length >= 2 ? (e9.params[1] || 1) - 1 : 0, (e9.params[0] || 1) - 1), true;
          }
          charPosAbsolute(e9) {
            return this._setCursor((e9.params[0] || 1) - 1, this._activeBuffer.y), true;
          }
          hPositionRelative(e9) {
            return this._moveCursor(e9.params[0] || 1, 0), true;
          }
          linePosAbsolute(e9) {
            return this._setCursor(this._activeBuffer.x, (e9.params[0] || 1) - 1), true;
          }
          vPositionRelative(e9) {
            return this._moveCursor(0, e9.params[0] || 1), true;
          }
          hVPosition(e9) {
            return this.cursorPosition(e9), true;
          }
          tabClear(e9) {
            const t9 = e9.params[0];
            return 0 === t9 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t9 && (this._activeBuffer.tabs = {}), true;
          }
          cursorForwardTab(e9) {
            if (this._activeBuffer.x >= this._bufferService.cols)
              return true;
            let t9 = e9.params[0] || 1;
            for (; t9--; )
              this._activeBuffer.x = this._activeBuffer.nextStop();
            return true;
          }
          cursorBackwardTab(e9) {
            if (this._activeBuffer.x >= this._bufferService.cols)
              return true;
            let t9 = e9.params[0] || 1;
            for (; t9--; )
              this._activeBuffer.x = this._activeBuffer.prevStop();
            return true;
          }
          selectProtected(e9) {
            const t9 = e9.params[0];
            return 1 === t9 && (this._curAttrData.bg |= 536870912), 2 !== t9 && 0 !== t9 || (this._curAttrData.bg &= -536870913), true;
          }
          _eraseInBufferLine(e9, t9, i6, s9 = false, r5 = false) {
            const n9 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e9);
            n9.replaceCells(t9, i6, this._activeBuffer.getNullCell(this._eraseAttrData()), r5), s9 && (n9.isWrapped = false);
          }
          _resetBufferLine(e9, t9 = false) {
            const i6 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e9);
            i6 && (i6.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t9), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e9), i6.isWrapped = false);
          }
          eraseInDisplay(e9, t9 = false) {
            let i6;
            switch (this._restrictCursor(this._bufferService.cols), e9.params[0]) {
              case 0:
                for (i6 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i6), this._eraseInBufferLine(i6++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t9); i6 < this._bufferService.rows; i6++)
                  this._resetBufferLine(i6, t9);
                this._dirtyRowTracker.markDirty(i6);
                break;
              case 1:
                for (i6 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i6), this._eraseInBufferLine(i6, 0, this._activeBuffer.x + 1, true, t9), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(i6 + 1).isWrapped = false); i6--; )
                  this._resetBufferLine(i6, t9);
                this._dirtyRowTracker.markDirty(0);
                break;
              case 2:
                for (i6 = this._bufferService.rows, this._dirtyRowTracker.markDirty(i6 - 1); i6--; )
                  this._resetBufferLine(i6, t9);
                this._dirtyRowTracker.markDirty(0);
                break;
              case 3:
                const e10 = this._activeBuffer.lines.length - this._bufferService.rows;
                e10 > 0 && (this._activeBuffer.lines.trimStart(e10), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e10, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e10, 0), this._onScroll.fire(0));
            }
            return true;
          }
          eraseInLine(e9, t9 = false) {
            switch (this._restrictCursor(this._bufferService.cols), e9.params[0]) {
              case 0:
                this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t9);
                break;
              case 1:
                this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, t9);
                break;
              case 2:
                this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, t9);
            }
            return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
          }
          insertLines(e9) {
            this._restrictCursor();
            let t9 = e9.params[0] || 1;
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const i6 = this._activeBuffer.ybase + this._activeBuffer.y, s9 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r5 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s9 + 1;
            for (; t9--; )
              this._activeBuffer.lines.splice(r5 - 1, 1), this._activeBuffer.lines.splice(i6, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
          }
          deleteLines(e9) {
            this._restrictCursor();
            let t9 = e9.params[0] || 1;
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const i6 = this._activeBuffer.ybase + this._activeBuffer.y;
            let s9;
            for (s9 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, s9 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s9; t9--; )
              this._activeBuffer.lines.splice(i6, 1), this._activeBuffer.lines.splice(s9, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
          }
          insertChars(e9) {
            this._restrictCursor();
            const t9 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            return t9 && (t9.insertCells(this._activeBuffer.x, e9.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
          }
          deleteChars(e9) {
            this._restrictCursor();
            const t9 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            return t9 && (t9.deleteCells(this._activeBuffer.x, e9.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
          }
          scrollUp(e9) {
            let t9 = e9.params[0] || 1;
            for (; t9--; )
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          scrollDown(e9) {
            let t9 = e9.params[0] || 1;
            for (; t9--; )
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(l5.DEFAULT_ATTR_DATA));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          scrollLeft(e9) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t9 = e9.params[0] || 1;
            for (let e10 = this._activeBuffer.scrollTop; e10 <= this._activeBuffer.scrollBottom; ++e10) {
              const i6 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e10);
              i6.deleteCells(0, t9, this._activeBuffer.getNullCell(this._eraseAttrData())), i6.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          scrollRight(e9) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t9 = e9.params[0] || 1;
            for (let e10 = this._activeBuffer.scrollTop; e10 <= this._activeBuffer.scrollBottom; ++e10) {
              const i6 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e10);
              i6.insertCells(0, t9, this._activeBuffer.getNullCell(this._eraseAttrData())), i6.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          insertColumns(e9) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t9 = e9.params[0] || 1;
            for (let e10 = this._activeBuffer.scrollTop; e10 <= this._activeBuffer.scrollBottom; ++e10) {
              const i6 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e10);
              i6.insertCells(this._activeBuffer.x, t9, this._activeBuffer.getNullCell(this._eraseAttrData())), i6.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          deleteColumns(e9) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t9 = e9.params[0] || 1;
            for (let e10 = this._activeBuffer.scrollTop; e10 <= this._activeBuffer.scrollBottom; ++e10) {
              const i6 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e10);
              i6.deleteCells(this._activeBuffer.x, t9, this._activeBuffer.getNullCell(this._eraseAttrData())), i6.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          eraseChars(e9) {
            this._restrictCursor();
            const t9 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            return t9 && (t9.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e9.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
          }
          repeatPrecedingCharacter(e9) {
            const t9 = this._parser.precedingJoinState;
            if (!t9)
              return true;
            const i6 = e9.params[0] || 1, s9 = p3.UnicodeService.extractWidth(t9), r5 = this._activeBuffer.x - s9, n9 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(r5), o8 = new Uint32Array(n9.length * i6);
            let a4 = 0;
            for (let e10 = 0; e10 < n9.length; ) {
              const t10 = n9.codePointAt(e10) || 0;
              o8[a4++] = t10, e10 += t10 > 65535 ? 2 : 1;
            }
            let h4 = a4;
            for (let e10 = 1; e10 < i6; ++e10)
              o8.copyWithin(h4, 0, a4), h4 += a4;
            return this.print(o8, 0, h4), true;
          }
          sendDeviceAttributesPrimary(e9) {
            return e9.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(n8.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(n8.C0.ESC + "[?6c")), true;
          }
          sendDeviceAttributesSecondary(e9) {
            return e9.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(n8.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(n8.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e9.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(n8.C0.ESC + "[>83;40003;0c")), true;
          }
          _is(e9) {
            return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e9);
          }
          setMode(e9) {
            for (let t9 = 0; t9 < e9.length; t9++)
              switch (e9.params[t9]) {
                case 4:
                  this._coreService.modes.insertMode = true;
                  break;
                case 20:
                  this._optionsService.options.convertEol = true;
              }
            return true;
          }
          setModePrivate(e9) {
            for (let t9 = 0; t9 < e9.length; t9++)
              switch (e9.params[t9]) {
                case 1:
                  this._coreService.decPrivateModes.applicationCursorKeys = true;
                  break;
                case 2:
                  this._charsetService.setgCharset(0, o7.DEFAULT_CHARSET), this._charsetService.setgCharset(1, o7.DEFAULT_CHARSET), this._charsetService.setgCharset(2, o7.DEFAULT_CHARSET), this._charsetService.setgCharset(3, o7.DEFAULT_CHARSET);
                  break;
                case 3:
                  this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                  break;
                case 6:
                  this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                  break;
                case 7:
                  this._coreService.decPrivateModes.wraparound = true;
                  break;
                case 12:
                  this._optionsService.options.cursorBlink = true;
                  break;
                case 45:
                  this._coreService.decPrivateModes.reverseWraparound = true;
                  break;
                case 66:
                  this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                  break;
                case 9:
                  this._coreMouseService.activeProtocol = "X10";
                  break;
                case 1e3:
                  this._coreMouseService.activeProtocol = "VT200";
                  break;
                case 1002:
                  this._coreMouseService.activeProtocol = "DRAG";
                  break;
                case 1003:
                  this._coreMouseService.activeProtocol = "ANY";
                  break;
                case 1004:
                  this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
                  break;
                case 1005:
                  this._logService.debug("DECSET 1005 not supported (see #2507)");
                  break;
                case 1006:
                  this._coreMouseService.activeEncoding = "SGR";
                  break;
                case 1015:
                  this._logService.debug("DECSET 1015 not supported (see #2507)");
                  break;
                case 1016:
                  this._coreMouseService.activeEncoding = "SGR_PIXELS";
                  break;
                case 25:
                  this._coreService.isCursorHidden = false;
                  break;
                case 1048:
                  this.saveCursor();
                  break;
                case 1049:
                  this.saveCursor();
                case 47:
                case 1047:
                  this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                  break;
                case 2004:
                  this._coreService.decPrivateModes.bracketedPasteMode = true;
              }
            return true;
          }
          resetMode(e9) {
            for (let t9 = 0; t9 < e9.length; t9++)
              switch (e9.params[t9]) {
                case 4:
                  this._coreService.modes.insertMode = false;
                  break;
                case 20:
                  this._optionsService.options.convertEol = false;
              }
            return true;
          }
          resetModePrivate(e9) {
            for (let t9 = 0; t9 < e9.length; t9++)
              switch (e9.params[t9]) {
                case 1:
                  this._coreService.decPrivateModes.applicationCursorKeys = false;
                  break;
                case 3:
                  this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                  break;
                case 6:
                  this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                  break;
                case 7:
                  this._coreService.decPrivateModes.wraparound = false;
                  break;
                case 12:
                  this._optionsService.options.cursorBlink = false;
                  break;
                case 45:
                  this._coreService.decPrivateModes.reverseWraparound = false;
                  break;
                case 66:
                  this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                  break;
                case 9:
                case 1e3:
                case 1002:
                case 1003:
                  this._coreMouseService.activeProtocol = "NONE";
                  break;
                case 1004:
                  this._coreService.decPrivateModes.sendFocus = false;
                  break;
                case 1005:
                  this._logService.debug("DECRST 1005 not supported (see #2507)");
                  break;
                case 1006:
                case 1016:
                  this._coreMouseService.activeEncoding = "DEFAULT";
                  break;
                case 1015:
                  this._logService.debug("DECRST 1015 not supported (see #2507)");
                  break;
                case 25:
                  this._coreService.isCursorHidden = true;
                  break;
                case 1048:
                  this.restoreCursor();
                  break;
                case 1049:
                case 47:
                case 1047:
                  this._bufferService.buffers.activateNormalBuffer(), 1049 === e9.params[t9] && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                  break;
                case 2004:
                  this._coreService.decPrivateModes.bracketedPasteMode = false;
              }
            return true;
          }
          requestMode(e9, t9) {
            const i6 = this._coreService.decPrivateModes, { activeProtocol: s9, activeEncoding: r5 } = this._coreMouseService, o8 = this._coreService, { buffers: a4, cols: h4 } = this._bufferService, { active: c5, alt: l6 } = a4, d4 = this._optionsService.rawOptions, _3 = (e10) => e10 ? 1 : 2, u4 = e9.params[0];
            return f3 = u4, v4 = t9 ? 2 === u4 ? 4 : 4 === u4 ? _3(o8.modes.insertMode) : 12 === u4 ? 3 : 20 === u4 ? _3(d4.convertEol) : 0 : 1 === u4 ? _3(i6.applicationCursorKeys) : 3 === u4 ? d4.windowOptions.setWinLines ? 80 === h4 ? 2 : 132 === h4 ? 1 : 0 : 0 : 6 === u4 ? _3(i6.origin) : 7 === u4 ? _3(i6.wraparound) : 8 === u4 ? 3 : 9 === u4 ? _3("X10" === s9) : 12 === u4 ? _3(d4.cursorBlink) : 25 === u4 ? _3(!o8.isCursorHidden) : 45 === u4 ? _3(i6.reverseWraparound) : 66 === u4 ? _3(i6.applicationKeypad) : 67 === u4 ? 4 : 1e3 === u4 ? _3("VT200" === s9) : 1002 === u4 ? _3("DRAG" === s9) : 1003 === u4 ? _3("ANY" === s9) : 1004 === u4 ? _3(i6.sendFocus) : 1005 === u4 ? 4 : 1006 === u4 ? _3("SGR" === r5) : 1015 === u4 ? 4 : 1016 === u4 ? _3("SGR_PIXELS" === r5) : 1048 === u4 ? 1 : 47 === u4 || 1047 === u4 || 1049 === u4 ? _3(c5 === l6) : 2004 === u4 ? _3(i6.bracketedPasteMode) : 0, o8.triggerDataEvent(`${n8.C0.ESC}[${t9 ? "" : "?"}${f3};${v4}$y`), true;
            var f3, v4;
          }
          _updateAttrColor(e9, t9, i6, s9, r5) {
            return 2 === t9 ? (e9 |= 50331648, e9 &= -16777216, e9 |= f2.AttributeData.fromColorRGB([i6, s9, r5])) : 5 === t9 && (e9 &= -50331904, e9 |= 33554432 | 255 & i6), e9;
          }
          _extractColor(e9, t9, i6) {
            const s9 = [0, 0, -1, 0, 0, 0];
            let r5 = 0, n9 = 0;
            do {
              if (s9[n9 + r5] = e9.params[t9 + n9], e9.hasSubParams(t9 + n9)) {
                const i7 = e9.getSubParams(t9 + n9);
                let o8 = 0;
                do {
                  5 === s9[1] && (r5 = 1), s9[n9 + o8 + 1 + r5] = i7[o8];
                } while (++o8 < i7.length && o8 + n9 + 1 + r5 < s9.length);
                break;
              }
              if (5 === s9[1] && n9 + r5 >= 2 || 2 === s9[1] && n9 + r5 >= 5)
                break;
              s9[1] && (r5 = 1);
            } while (++n9 + t9 < e9.length && n9 + r5 < s9.length);
            for (let e10 = 2; e10 < s9.length; ++e10)
              -1 === s9[e10] && (s9[e10] = 0);
            switch (s9[0]) {
              case 38:
                i6.fg = this._updateAttrColor(i6.fg, s9[1], s9[3], s9[4], s9[5]);
                break;
              case 48:
                i6.bg = this._updateAttrColor(i6.bg, s9[1], s9[3], s9[4], s9[5]);
                break;
              case 58:
                i6.extended = i6.extended.clone(), i6.extended.underlineColor = this._updateAttrColor(i6.extended.underlineColor, s9[1], s9[3], s9[4], s9[5]);
            }
            return n9;
          }
          _processUnderline(e9, t9) {
            t9.extended = t9.extended.clone(), (!~e9 || e9 > 5) && (e9 = 1), t9.extended.underlineStyle = e9, t9.fg |= 268435456, 0 === e9 && (t9.fg &= -268435457), t9.updateExtended();
          }
          _processSGR0(e9) {
            e9.fg = l5.DEFAULT_ATTR_DATA.fg, e9.bg = l5.DEFAULT_ATTR_DATA.bg, e9.extended = e9.extended.clone(), e9.extended.underlineStyle = 0, e9.extended.underlineColor &= -67108864, e9.updateExtended();
          }
          charAttributes(e9) {
            if (1 === e9.length && 0 === e9.params[0])
              return this._processSGR0(this._curAttrData), true;
            const t9 = e9.length;
            let i6;
            const s9 = this._curAttrData;
            for (let r5 = 0; r5 < t9; r5++)
              i6 = e9.params[r5], i6 >= 30 && i6 <= 37 ? (s9.fg &= -50331904, s9.fg |= 16777216 | i6 - 30) : i6 >= 40 && i6 <= 47 ? (s9.bg &= -50331904, s9.bg |= 16777216 | i6 - 40) : i6 >= 90 && i6 <= 97 ? (s9.fg &= -50331904, s9.fg |= 16777224 | i6 - 90) : i6 >= 100 && i6 <= 107 ? (s9.bg &= -50331904, s9.bg |= 16777224 | i6 - 100) : 0 === i6 ? this._processSGR0(s9) : 1 === i6 ? s9.fg |= 134217728 : 3 === i6 ? s9.bg |= 67108864 : 4 === i6 ? (s9.fg |= 268435456, this._processUnderline(e9.hasSubParams(r5) ? e9.getSubParams(r5)[0] : 1, s9)) : 5 === i6 ? s9.fg |= 536870912 : 7 === i6 ? s9.fg |= 67108864 : 8 === i6 ? s9.fg |= 1073741824 : 9 === i6 ? s9.fg |= 2147483648 : 2 === i6 ? s9.bg |= 134217728 : 21 === i6 ? this._processUnderline(2, s9) : 22 === i6 ? (s9.fg &= -134217729, s9.bg &= -134217729) : 23 === i6 ? s9.bg &= -67108865 : 24 === i6 ? (s9.fg &= -268435457, this._processUnderline(0, s9)) : 25 === i6 ? s9.fg &= -536870913 : 27 === i6 ? s9.fg &= -67108865 : 28 === i6 ? s9.fg &= -1073741825 : 29 === i6 ? s9.fg &= 2147483647 : 39 === i6 ? (s9.fg &= -67108864, s9.fg |= 16777215 & l5.DEFAULT_ATTR_DATA.fg) : 49 === i6 ? (s9.bg &= -67108864, s9.bg |= 16777215 & l5.DEFAULT_ATTR_DATA.bg) : 38 === i6 || 48 === i6 || 58 === i6 ? r5 += this._extractColor(e9, r5, s9) : 53 === i6 ? s9.bg |= 1073741824 : 55 === i6 ? s9.bg &= -1073741825 : 59 === i6 ? (s9.extended = s9.extended.clone(), s9.extended.underlineColor = -1, s9.updateExtended()) : 100 === i6 ? (s9.fg &= -67108864, s9.fg |= 16777215 & l5.DEFAULT_ATTR_DATA.fg, s9.bg &= -67108864, s9.bg |= 16777215 & l5.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", i6);
            return true;
          }
          deviceStatus(e9) {
            switch (e9.params[0]) {
              case 5:
                this._coreService.triggerDataEvent(`${n8.C0.ESC}[0n`);
                break;
              case 6:
                const e10 = this._activeBuffer.y + 1, t9 = this._activeBuffer.x + 1;
                this._coreService.triggerDataEvent(`${n8.C0.ESC}[${e10};${t9}R`);
            }
            return true;
          }
          deviceStatusPrivate(e9) {
            if (6 === e9.params[0]) {
              const e10 = this._activeBuffer.y + 1, t9 = this._activeBuffer.x + 1;
              this._coreService.triggerDataEvent(`${n8.C0.ESC}[?${e10};${t9}R`);
            }
            return true;
          }
          softReset(e9) {
            return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = l5.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
          }
          setCursorStyle(e9) {
            const t9 = e9.params[0] || 1;
            switch (t9) {
              case 1:
              case 2:
                this._optionsService.options.cursorStyle = "block";
                break;
              case 3:
              case 4:
                this._optionsService.options.cursorStyle = "underline";
                break;
              case 5:
              case 6:
                this._optionsService.options.cursorStyle = "bar";
            }
            const i6 = t9 % 2 == 1;
            return this._optionsService.options.cursorBlink = i6, true;
          }
          setScrollRegion(e9) {
            const t9 = e9.params[0] || 1;
            let i6;
            return (e9.length < 2 || (i6 = e9.params[1]) > this._bufferService.rows || 0 === i6) && (i6 = this._bufferService.rows), i6 > t9 && (this._activeBuffer.scrollTop = t9 - 1, this._activeBuffer.scrollBottom = i6 - 1, this._setCursor(0, 0)), true;
          }
          windowOptions(e9) {
            if (!w2(e9.params[0], this._optionsService.rawOptions.windowOptions))
              return true;
            const t9 = e9.length > 1 ? e9.params[1] : 0;
            switch (e9.params[0]) {
              case 14:
                2 !== t9 && this._onRequestWindowsOptionsReport.fire(y2.GET_WIN_SIZE_PIXELS);
                break;
              case 16:
                this._onRequestWindowsOptionsReport.fire(y2.GET_CELL_SIZE_PIXELS);
                break;
              case 18:
                this._bufferService && this._coreService.triggerDataEvent(`${n8.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
                break;
              case 22:
                0 !== t9 && 2 !== t9 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t9 && 1 !== t9 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                break;
              case 23:
                0 !== t9 && 2 !== t9 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t9 && 1 !== t9 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
            }
            return true;
          }
          saveCursor(e9) {
            return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
          }
          restoreCursor(e9) {
            return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
          }
          setTitle(e9) {
            return this._windowTitle = e9, this._onTitleChange.fire(e9), true;
          }
          setIconName(e9) {
            return this._iconName = e9, true;
          }
          setOrReportIndexedColor(e9) {
            const t9 = [], i6 = e9.split(";");
            for (; i6.length > 1; ) {
              const e10 = i6.shift(), s9 = i6.shift();
              if (/^\d+$/.exec(e10)) {
                const i7 = parseInt(e10);
                if (D(i7))
                  if ("?" === s9)
                    t9.push({ type: 0, index: i7 });
                  else {
                    const e11 = (0, S3.parseColor)(s9);
                    e11 && t9.push({ type: 1, index: i7, color: e11 });
                  }
              }
            }
            return t9.length && this._onColor.fire(t9), true;
          }
          setHyperlink(e9) {
            const t9 = e9.split(";");
            return !(t9.length < 2) && (t9[1] ? this._createHyperlink(t9[0], t9[1]) : !t9[0] && this._finishHyperlink());
          }
          _createHyperlink(e9, t9) {
            this._getCurrentLinkId() && this._finishHyperlink();
            const i6 = e9.split(":");
            let s9;
            const r5 = i6.findIndex((e10) => e10.startsWith("id="));
            return -1 !== r5 && (s9 = i6[r5].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: s9, uri: t9 }), this._curAttrData.updateExtended(), true;
          }
          _finishHyperlink() {
            return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
          }
          _setOrReportSpecialColor(e9, t9) {
            const i6 = e9.split(";");
            for (let e10 = 0; e10 < i6.length && !(t9 >= this._specialColors.length); ++e10, ++t9)
              if ("?" === i6[e10])
                this._onColor.fire([{ type: 0, index: this._specialColors[t9] }]);
              else {
                const s9 = (0, S3.parseColor)(i6[e10]);
                s9 && this._onColor.fire([{ type: 1, index: this._specialColors[t9], color: s9 }]);
              }
            return true;
          }
          setOrReportFgColor(e9) {
            return this._setOrReportSpecialColor(e9, 0);
          }
          setOrReportBgColor(e9) {
            return this._setOrReportSpecialColor(e9, 1);
          }
          setOrReportCursorColor(e9) {
            return this._setOrReportSpecialColor(e9, 2);
          }
          restoreIndexedColor(e9) {
            if (!e9)
              return this._onColor.fire([{ type: 2 }]), true;
            const t9 = [], i6 = e9.split(";");
            for (let e10 = 0; e10 < i6.length; ++e10)
              if (/^\d+$/.exec(i6[e10])) {
                const s9 = parseInt(i6[e10]);
                D(s9) && t9.push({ type: 2, index: s9 });
              }
            return t9.length && this._onColor.fire(t9), true;
          }
          restoreFgColor(e9) {
            return this._onColor.fire([{ type: 2, index: 256 }]), true;
          }
          restoreBgColor(e9) {
            return this._onColor.fire([{ type: 2, index: 257 }]), true;
          }
          restoreCursorColor(e9) {
            return this._onColor.fire([{ type: 2, index: 258 }]), true;
          }
          nextLine() {
            return this._activeBuffer.x = 0, this.index(), true;
          }
          keypadApplicationMode() {
            return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
          }
          keypadNumericMode() {
            return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
          }
          selectDefaultCharset() {
            return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, o7.DEFAULT_CHARSET), true;
          }
          selectCharset(e9) {
            return 2 !== e9.length ? (this.selectDefaultCharset(), true) : ("/" === e9[0] || this._charsetService.setgCharset(C2[e9[0]], o7.CHARSETS[e9[1]] || o7.DEFAULT_CHARSET), true);
          }
          index() {
            return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
          }
          tabSet() {
            return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
          }
          reverseIndex() {
            if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
              const e9 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
              this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e9, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            } else
              this._activeBuffer.y--, this._restrictCursor();
            return true;
          }
          fullReset() {
            return this._parser.reset(), this._onRequestReset.fire(), true;
          }
          reset() {
            this._curAttrData = l5.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l5.DEFAULT_ATTR_DATA.clone();
          }
          _eraseAttrData() {
            return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
          }
          setgLevel(e9) {
            return this._charsetService.setgLevel(e9), true;
          }
          screenAlignmentPattern() {
            const e9 = new u3.CellData();
            e9.content = 1 << 22 | "E".charCodeAt(0), e9.fg = this._curAttrData.fg, e9.bg = this._curAttrData.bg, this._setCursor(0, 0);
            for (let t9 = 0; t9 < this._bufferService.rows; ++t9) {
              const i6 = this._activeBuffer.ybase + this._activeBuffer.y + t9, s9 = this._activeBuffer.lines.get(i6);
              s9 && (s9.fill(e9), s9.isWrapped = false);
            }
            return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
          }
          requestStatusString(e9, t9) {
            const i6 = this._bufferService.buffer, s9 = this._optionsService.rawOptions;
            return ((e10) => (this._coreService.triggerDataEvent(`${n8.C0.ESC}${e10}${n8.C0.ESC}\\`), true))('"q' === e9 ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : '"p' === e9 ? 'P1$r61;1"p' : "r" === e9 ? `P1$r${i6.scrollTop + 1};${i6.scrollBottom + 1}r` : "m" === e9 ? "P1$r0m" : " q" === e9 ? `P1$r${{ block: 2, underline: 4, bar: 6 }[s9.cursorStyle] - (s9.cursorBlink ? 1 : 0)} q` : "P0$r");
          }
          markRangeDirty(e9, t9) {
            this._dirtyRowTracker.markRangeDirty(e9, t9);
          }
        }
        t8.InputHandler = k2;
        let L2 = class {
          constructor(e9) {
            this._bufferService = e9, this.clearRange();
          }
          clearRange() {
            this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
          }
          markDirty(e9) {
            e9 < this.start ? this.start = e9 : e9 > this.end && (this.end = e9);
          }
          markRangeDirty(e9, t9) {
            e9 > t9 && (E2 = e9, e9 = t9, t9 = E2), e9 < this.start && (this.start = e9), t9 > this.end && (this.end = t9);
          }
          markAllDirty() {
            this.markRangeDirty(0, this._bufferService.rows - 1);
          }
        };
        function D(e9) {
          return 0 <= e9 && e9 < 256;
        }
        L2 = s8([r4(0, v3.IBufferService)], L2);
      }, 844: (e8, t8) => {
        function i5(e9) {
          for (const t9 of e9)
            t9.dispose();
          e9.length = 0;
        }
        Object.defineProperty(t8, "__esModule", { value: true }), t8.getDisposeArrayDisposable = t8.disposeArray = t8.toDisposable = t8.MutableDisposable = t8.Disposable = void 0, t8.Disposable = class {
          constructor() {
            this._disposables = [], this._isDisposed = false;
          }
          dispose() {
            this._isDisposed = true;
            for (const e9 of this._disposables)
              e9.dispose();
            this._disposables.length = 0;
          }
          register(e9) {
            return this._disposables.push(e9), e9;
          }
          unregister(e9) {
            const t9 = this._disposables.indexOf(e9);
            -1 !== t9 && this._disposables.splice(t9, 1);
          }
        }, t8.MutableDisposable = class {
          constructor() {
            this._isDisposed = false;
          }
          get value() {
            return this._isDisposed ? void 0 : this._value;
          }
          set value(e9) {
            this._isDisposed || e9 === this._value || (this._value?.dispose(), this._value = e9);
          }
          clear() {
            this.value = void 0;
          }
          dispose() {
            this._isDisposed = true, this._value?.dispose(), this._value = void 0;
          }
        }, t8.toDisposable = function(e9) {
          return { dispose: e9 };
        }, t8.disposeArray = i5, t8.getDisposeArrayDisposable = function(e9) {
          return { dispose: () => i5(e9) };
        };
      }, 1505: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.FourKeyMap = t8.TwoKeyMap = void 0;
        class i5 {
          constructor() {
            this._data = {};
          }
          set(e9, t9, i6) {
            this._data[e9] || (this._data[e9] = {}), this._data[e9][t9] = i6;
          }
          get(e9, t9) {
            return this._data[e9] ? this._data[e9][t9] : void 0;
          }
          clear() {
            this._data = {};
          }
        }
        t8.TwoKeyMap = i5, t8.FourKeyMap = class {
          constructor() {
            this._data = new i5();
          }
          set(e9, t9, s8, r4, n8) {
            this._data.get(e9, t9) || this._data.set(e9, t9, new i5()), this._data.get(e9, t9).set(s8, r4, n8);
          }
          get(e9, t9, i6, s8) {
            return this._data.get(e9, t9)?.get(i6, s8);
          }
          clear() {
            this._data.clear();
          }
        };
      }, 6114: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.isChromeOS = t8.isLinux = t8.isWindows = t8.isIphone = t8.isIpad = t8.isMac = t8.getSafariVersion = t8.isSafari = t8.isLegacyEdge = t8.isFirefox = t8.isNode = void 0, t8.isNode = "undefined" != typeof process && "title" in process;
        const i5 = t8.isNode ? "node" : navigator.userAgent, s8 = t8.isNode ? "node" : navigator.platform;
        t8.isFirefox = i5.includes("Firefox"), t8.isLegacyEdge = i5.includes("Edge"), t8.isSafari = /^((?!chrome|android).)*safari/i.test(i5), t8.getSafariVersion = function() {
          if (!t8.isSafari)
            return 0;
          const e9 = i5.match(/Version\/(\d+)/);
          return null === e9 || e9.length < 2 ? 0 : parseInt(e9[1]);
        }, t8.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(s8), t8.isIpad = "iPad" === s8, t8.isIphone = "iPhone" === s8, t8.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(s8), t8.isLinux = s8.indexOf("Linux") >= 0, t8.isChromeOS = /\bCrOS\b/.test(i5);
      }, 6106: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.SortedList = void 0;
        let i5 = 0;
        t8.SortedList = class {
          constructor(e9) {
            this._getKey = e9, this._array = [];
          }
          clear() {
            this._array.length = 0;
          }
          insert(e9) {
            0 !== this._array.length ? (i5 = this._search(this._getKey(e9)), this._array.splice(i5, 0, e9)) : this._array.push(e9);
          }
          delete(e9) {
            if (0 === this._array.length)
              return false;
            const t9 = this._getKey(e9);
            if (void 0 === t9)
              return false;
            if (i5 = this._search(t9), -1 === i5)
              return false;
            if (this._getKey(this._array[i5]) !== t9)
              return false;
            do {
              if (this._array[i5] === e9)
                return this._array.splice(i5, 1), true;
            } while (++i5 < this._array.length && this._getKey(this._array[i5]) === t9);
            return false;
          }
          *getKeyIterator(e9) {
            if (0 !== this._array.length && (i5 = this._search(e9), !(i5 < 0 || i5 >= this._array.length) && this._getKey(this._array[i5]) === e9))
              do {
                yield this._array[i5];
              } while (++i5 < this._array.length && this._getKey(this._array[i5]) === e9);
          }
          forEachByKey(e9, t9) {
            if (0 !== this._array.length && (i5 = this._search(e9), !(i5 < 0 || i5 >= this._array.length) && this._getKey(this._array[i5]) === e9))
              do {
                t9(this._array[i5]);
              } while (++i5 < this._array.length && this._getKey(this._array[i5]) === e9);
          }
          values() {
            return [...this._array].values();
          }
          _search(e9) {
            let t9 = 0, i6 = this._array.length - 1;
            for (; i6 >= t9; ) {
              let s8 = t9 + i6 >> 1;
              const r4 = this._getKey(this._array[s8]);
              if (r4 > e9)
                i6 = s8 - 1;
              else {
                if (!(r4 < e9)) {
                  for (; s8 > 0 && this._getKey(this._array[s8 - 1]) === e9; )
                    s8--;
                  return s8;
                }
                t9 = s8 + 1;
              }
            }
            return t9;
          }
        };
      }, 7226: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.DebouncedIdleTask = t8.IdleTaskQueue = t8.PriorityTaskQueue = void 0;
        const s8 = i5(6114);
        class r4 {
          constructor() {
            this._tasks = [], this._i = 0;
          }
          enqueue(e9) {
            this._tasks.push(e9), this._start();
          }
          flush() {
            for (; this._i < this._tasks.length; )
              this._tasks[this._i]() || this._i++;
            this.clear();
          }
          clear() {
            this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
          }
          _start() {
            this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
          }
          _process(e9) {
            this._idleCallback = void 0;
            let t9 = 0, i6 = 0, s9 = e9.timeRemaining(), r5 = 0;
            for (; this._i < this._tasks.length; ) {
              if (t9 = Date.now(), this._tasks[this._i]() || this._i++, t9 = Math.max(1, Date.now() - t9), i6 = Math.max(t9, i6), r5 = e9.timeRemaining(), 1.5 * i6 > r5)
                return s9 - t9 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s9 - t9))}ms`), void this._start();
              s9 = r5;
            }
            this.clear();
          }
        }
        class n8 extends r4 {
          _requestCallback(e9) {
            return setTimeout(() => e9(this._createDeadline(16)));
          }
          _cancelCallback(e9) {
            clearTimeout(e9);
          }
          _createDeadline(e9) {
            const t9 = Date.now() + e9;
            return { timeRemaining: () => Math.max(0, t9 - Date.now()) };
          }
        }
        t8.PriorityTaskQueue = n8, t8.IdleTaskQueue = !s8.isNode && "requestIdleCallback" in window ? class extends r4 {
          _requestCallback(e9) {
            return requestIdleCallback(e9);
          }
          _cancelCallback(e9) {
            cancelIdleCallback(e9);
          }
        } : n8, t8.DebouncedIdleTask = class {
          constructor() {
            this._queue = new t8.IdleTaskQueue();
          }
          set(e9) {
            this._queue.clear(), this._queue.enqueue(e9);
          }
          flush() {
            this._queue.flush();
          }
        };
      }, 9282: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.updateWindowsModeWrappedState = void 0;
        const s8 = i5(643);
        t8.updateWindowsModeWrappedState = function(e9) {
          const t9 = e9.buffer.lines.get(e9.buffer.ybase + e9.buffer.y - 1), i6 = t9?.get(e9.cols - 1), r4 = e9.buffer.lines.get(e9.buffer.ybase + e9.buffer.y);
          r4 && i6 && (r4.isWrapped = i6[s8.CHAR_DATA_CODE_INDEX] !== s8.NULL_CELL_CODE && i6[s8.CHAR_DATA_CODE_INDEX] !== s8.WHITESPACE_CELL_CODE);
        };
      }, 3734: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.ExtendedAttrs = t8.AttributeData = void 0;
        class i5 {
          constructor() {
            this.fg = 0, this.bg = 0, this.extended = new s8();
          }
          static toColorRGB(e9) {
            return [e9 >>> 16 & 255, e9 >>> 8 & 255, 255 & e9];
          }
          static fromColorRGB(e9) {
            return (255 & e9[0]) << 16 | (255 & e9[1]) << 8 | 255 & e9[2];
          }
          clone() {
            const e9 = new i5();
            return e9.fg = this.fg, e9.bg = this.bg, e9.extended = this.extended.clone(), e9;
          }
          isInverse() {
            return 67108864 & this.fg;
          }
          isBold() {
            return 134217728 & this.fg;
          }
          isUnderline() {
            return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
          }
          isBlink() {
            return 536870912 & this.fg;
          }
          isInvisible() {
            return 1073741824 & this.fg;
          }
          isItalic() {
            return 67108864 & this.bg;
          }
          isDim() {
            return 134217728 & this.bg;
          }
          isStrikethrough() {
            return 2147483648 & this.fg;
          }
          isProtected() {
            return 536870912 & this.bg;
          }
          isOverline() {
            return 1073741824 & this.bg;
          }
          getFgColorMode() {
            return 50331648 & this.fg;
          }
          getBgColorMode() {
            return 50331648 & this.bg;
          }
          isFgRGB() {
            return 50331648 == (50331648 & this.fg);
          }
          isBgRGB() {
            return 50331648 == (50331648 & this.bg);
          }
          isFgPalette() {
            return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
          }
          isBgPalette() {
            return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
          }
          isFgDefault() {
            return 0 == (50331648 & this.fg);
          }
          isBgDefault() {
            return 0 == (50331648 & this.bg);
          }
          isAttributeDefault() {
            return 0 === this.fg && 0 === this.bg;
          }
          getFgColor() {
            switch (50331648 & this.fg) {
              case 16777216:
              case 33554432:
                return 255 & this.fg;
              case 50331648:
                return 16777215 & this.fg;
              default:
                return -1;
            }
          }
          getBgColor() {
            switch (50331648 & this.bg) {
              case 16777216:
              case 33554432:
                return 255 & this.bg;
              case 50331648:
                return 16777215 & this.bg;
              default:
                return -1;
            }
          }
          hasExtendedAttrs() {
            return 268435456 & this.bg;
          }
          updateExtended() {
            this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
          }
          getUnderlineColor() {
            if (268435456 & this.bg && ~this.extended.underlineColor)
              switch (50331648 & this.extended.underlineColor) {
                case 16777216:
                case 33554432:
                  return 255 & this.extended.underlineColor;
                case 50331648:
                  return 16777215 & this.extended.underlineColor;
                default:
                  return this.getFgColor();
              }
            return this.getFgColor();
          }
          getUnderlineColorMode() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
          }
          isUnderlineColorRGB() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
          }
          isUnderlineColorPalette() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
          }
          isUnderlineColorDefault() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
          }
          getUnderlineStyle() {
            return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
          }
          getUnderlineVariantOffset() {
            return this.extended.underlineVariantOffset;
          }
        }
        t8.AttributeData = i5;
        class s8 {
          get ext() {
            return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
          }
          set ext(e9) {
            this._ext = e9;
          }
          get underlineStyle() {
            return this._urlId ? 5 : (469762048 & this._ext) >> 26;
          }
          set underlineStyle(e9) {
            this._ext &= -469762049, this._ext |= e9 << 26 & 469762048;
          }
          get underlineColor() {
            return 67108863 & this._ext;
          }
          set underlineColor(e9) {
            this._ext &= -67108864, this._ext |= 67108863 & e9;
          }
          get urlId() {
            return this._urlId;
          }
          set urlId(e9) {
            this._urlId = e9;
          }
          get underlineVariantOffset() {
            const e9 = (3758096384 & this._ext) >> 29;
            return e9 < 0 ? 4294967288 ^ e9 : e9;
          }
          set underlineVariantOffset(e9) {
            this._ext &= 536870911, this._ext |= e9 << 29 & 3758096384;
          }
          constructor(e9 = 0, t9 = 0) {
            this._ext = 0, this._urlId = 0, this._ext = e9, this._urlId = t9;
          }
          clone() {
            return new s8(this._ext, this._urlId);
          }
          isEmpty() {
            return 0 === this.underlineStyle && 0 === this._urlId;
          }
        }
        t8.ExtendedAttrs = s8;
      }, 9092: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Buffer = t8.MAX_BUFFER_SIZE = void 0;
        const s8 = i5(6349), r4 = i5(7226), n8 = i5(3734), o7 = i5(8437), a3 = i5(4634), h3 = i5(511), c4 = i5(643), l5 = i5(4863), d3 = i5(7116);
        t8.MAX_BUFFER_SIZE = 4294967295, t8.Buffer = class {
          constructor(e9, t9, i6) {
            this._hasScrollback = e9, this._optionsService = t9, this._bufferService = i6, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = o7.DEFAULT_ATTR_DATA.clone(), this.savedCharset = d3.DEFAULT_CHARSET, this.markers = [], this._nullCell = h3.CellData.fromCharData([0, c4.NULL_CELL_CHAR, c4.NULL_CELL_WIDTH, c4.NULL_CELL_CODE]), this._whitespaceCell = h3.CellData.fromCharData([0, c4.WHITESPACE_CELL_CHAR, c4.WHITESPACE_CELL_WIDTH, c4.WHITESPACE_CELL_CODE]), this._isClearing = false, this._memoryCleanupQueue = new r4.IdleTaskQueue(), this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new s8.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
          }
          getNullCell(e9) {
            return e9 ? (this._nullCell.fg = e9.fg, this._nullCell.bg = e9.bg, this._nullCell.extended = e9.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new n8.ExtendedAttrs()), this._nullCell;
          }
          getWhitespaceCell(e9) {
            return e9 ? (this._whitespaceCell.fg = e9.fg, this._whitespaceCell.bg = e9.bg, this._whitespaceCell.extended = e9.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new n8.ExtendedAttrs()), this._whitespaceCell;
          }
          getBlankLine(e9, t9) {
            return new o7.BufferLine(this._bufferService.cols, this.getNullCell(e9), t9);
          }
          get hasScrollback() {
            return this._hasScrollback && this.lines.maxLength > this._rows;
          }
          get isCursorInViewport() {
            const e9 = this.ybase + this.y - this.ydisp;
            return e9 >= 0 && e9 < this._rows;
          }
          _getCorrectBufferLength(e9) {
            if (!this._hasScrollback)
              return e9;
            const i6 = e9 + this._optionsService.rawOptions.scrollback;
            return i6 > t8.MAX_BUFFER_SIZE ? t8.MAX_BUFFER_SIZE : i6;
          }
          fillViewportRows(e9) {
            if (0 === this.lines.length) {
              void 0 === e9 && (e9 = o7.DEFAULT_ATTR_DATA);
              let t9 = this._rows;
              for (; t9--; )
                this.lines.push(this.getBlankLine(e9));
            }
          }
          clear() {
            this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new s8.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
          }
          resize(e9, t9) {
            const i6 = this.getNullCell(o7.DEFAULT_ATTR_DATA);
            let s9 = 0;
            const r5 = this._getCorrectBufferLength(t9);
            if (r5 > this.lines.maxLength && (this.lines.maxLength = r5), this.lines.length > 0) {
              if (this._cols < e9)
                for (let t10 = 0; t10 < this.lines.length; t10++)
                  s9 += +this.lines.get(t10).resize(e9, i6);
              let n9 = 0;
              if (this._rows < t9)
                for (let s10 = this._rows; s10 < t9; s10++)
                  this.lines.length < t9 + this.ybase && (this._optionsService.rawOptions.windowsMode || void 0 !== this._optionsService.rawOptions.windowsPty.backend || void 0 !== this._optionsService.rawOptions.windowsPty.buildNumber ? this.lines.push(new o7.BufferLine(e9, i6)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + n9 + 1 ? (this.ybase--, n9++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new o7.BufferLine(e9, i6)));
              else
                for (let e10 = this._rows; e10 > t9; e10--)
                  this.lines.length > t9 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
              if (r5 < this.lines.maxLength) {
                const e10 = this.lines.length - r5;
                e10 > 0 && (this.lines.trimStart(e10), this.ybase = Math.max(this.ybase - e10, 0), this.ydisp = Math.max(this.ydisp - e10, 0), this.savedY = Math.max(this.savedY - e10, 0)), this.lines.maxLength = r5;
              }
              this.x = Math.min(this.x, e9 - 1), this.y = Math.min(this.y, t9 - 1), n9 && (this.y += n9), this.savedX = Math.min(this.savedX, e9 - 1), this.scrollTop = 0;
            }
            if (this.scrollBottom = t9 - 1, this._isReflowEnabled && (this._reflow(e9, t9), this._cols > e9))
              for (let t10 = 0; t10 < this.lines.length; t10++)
                s9 += +this.lines.get(t10).resize(e9, i6);
            this._cols = e9, this._rows = t9, this._memoryCleanupQueue.clear(), s9 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
          }
          _batchedMemoryCleanup() {
            let e9 = true;
            this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e9 = false);
            let t9 = 0;
            for (; this._memoryCleanupPosition < this.lines.length; )
              if (t9 += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t9 > 100)
                return true;
            return e9;
          }
          get _isReflowEnabled() {
            const e9 = this._optionsService.rawOptions.windowsPty;
            return e9 && e9.buildNumber ? this._hasScrollback && "conpty" === e9.backend && e9.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
          }
          _reflow(e9, t9) {
            this._cols !== e9 && (e9 > this._cols ? this._reflowLarger(e9, t9) : this._reflowSmaller(e9, t9));
          }
          _reflowLarger(e9, t9) {
            const i6 = (0, a3.reflowLargerGetLinesToRemove)(this.lines, this._cols, e9, this.ybase + this.y, this.getNullCell(o7.DEFAULT_ATTR_DATA));
            if (i6.length > 0) {
              const s9 = (0, a3.reflowLargerCreateNewLayout)(this.lines, i6);
              (0, a3.reflowLargerApplyNewLayout)(this.lines, s9.layout), this._reflowLargerAdjustViewport(e9, t9, s9.countRemoved);
            }
          }
          _reflowLargerAdjustViewport(e9, t9, i6) {
            const s9 = this.getNullCell(o7.DEFAULT_ATTR_DATA);
            let r5 = i6;
            for (; r5-- > 0; )
              0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t9 && this.lines.push(new o7.BufferLine(e9, s9))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
            this.savedY = Math.max(this.savedY - i6, 0);
          }
          _reflowSmaller(e9, t9) {
            const i6 = this.getNullCell(o7.DEFAULT_ATTR_DATA), s9 = [];
            let r5 = 0;
            for (let n9 = this.lines.length - 1; n9 >= 0; n9--) {
              let h4 = this.lines.get(n9);
              if (!h4 || !h4.isWrapped && h4.getTrimmedLength() <= e9)
                continue;
              const c5 = [h4];
              for (; h4.isWrapped && n9 > 0; )
                h4 = this.lines.get(--n9), c5.unshift(h4);
              const l6 = this.ybase + this.y;
              if (l6 >= n9 && l6 < n9 + c5.length)
                continue;
              const d4 = c5[c5.length - 1].getTrimmedLength(), _2 = (0, a3.reflowSmallerGetNewLineLengths)(c5, this._cols, e9), u3 = _2.length - c5.length;
              let f2;
              f2 = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + u3) : Math.max(0, this.lines.length - this.lines.maxLength + u3);
              const v3 = [];
              for (let e10 = 0; e10 < u3; e10++) {
                const e11 = this.getBlankLine(o7.DEFAULT_ATTR_DATA, true);
                v3.push(e11);
              }
              v3.length > 0 && (s9.push({ start: n9 + c5.length + r5, newLines: v3 }), r5 += v3.length), c5.push(...v3);
              let p3 = _2.length - 1, g2 = _2[p3];
              0 === g2 && (p3--, g2 = _2[p3]);
              let m2 = c5.length - u3 - 1, S3 = d4;
              for (; m2 >= 0; ) {
                const e10 = Math.min(S3, g2);
                if (void 0 === c5[p3])
                  break;
                if (c5[p3].copyCellsFrom(c5[m2], S3 - e10, g2 - e10, e10, true), g2 -= e10, 0 === g2 && (p3--, g2 = _2[p3]), S3 -= e10, 0 === S3) {
                  m2--;
                  const e11 = Math.max(m2, 0);
                  S3 = (0, a3.getWrappedLineTrimmedLength)(c5, e11, this._cols);
                }
              }
              for (let t10 = 0; t10 < c5.length; t10++)
                _2[t10] < e9 && c5[t10].setCell(_2[t10], i6);
              let C2 = u3 - f2;
              for (; C2-- > 0; )
                0 === this.ybase ? this.y < t9 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + r5) - t9 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
              this.savedY = Math.min(this.savedY + u3, this.ybase + t9 - 1);
            }
            if (s9.length > 0) {
              const e10 = [], t10 = [];
              for (let e11 = 0; e11 < this.lines.length; e11++)
                t10.push(this.lines.get(e11));
              const i7 = this.lines.length;
              let n9 = i7 - 1, o8 = 0, a4 = s9[o8];
              this.lines.length = Math.min(this.lines.maxLength, this.lines.length + r5);
              let h4 = 0;
              for (let c6 = Math.min(this.lines.maxLength - 1, i7 + r5 - 1); c6 >= 0; c6--)
                if (a4 && a4.start > n9 + h4) {
                  for (let e11 = a4.newLines.length - 1; e11 >= 0; e11--)
                    this.lines.set(c6--, a4.newLines[e11]);
                  c6++, e10.push({ index: n9 + 1, amount: a4.newLines.length }), h4 += a4.newLines.length, a4 = s9[++o8];
                } else
                  this.lines.set(c6, t10[n9--]);
              let c5 = 0;
              for (let t11 = e10.length - 1; t11 >= 0; t11--)
                e10[t11].index += c5, this.lines.onInsertEmitter.fire(e10[t11]), c5 += e10[t11].amount;
              const l6 = Math.max(0, i7 + r5 - this.lines.maxLength);
              l6 > 0 && this.lines.onTrimEmitter.fire(l6);
            }
          }
          translateBufferLineToString(e9, t9, i6 = 0, s9) {
            const r5 = this.lines.get(e9);
            return r5 ? r5.translateToString(t9, i6, s9) : "";
          }
          getWrappedRangeForLine(e9) {
            let t9 = e9, i6 = e9;
            for (; t9 > 0 && this.lines.get(t9).isWrapped; )
              t9--;
            for (; i6 + 1 < this.lines.length && this.lines.get(i6 + 1).isWrapped; )
              i6++;
            return { first: t9, last: i6 };
          }
          setupTabStops(e9) {
            for (null != e9 ? this.tabs[e9] || (e9 = this.prevStop(e9)) : (this.tabs = {}, e9 = 0); e9 < this._cols; e9 += this._optionsService.rawOptions.tabStopWidth)
              this.tabs[e9] = true;
          }
          prevStop(e9) {
            for (null == e9 && (e9 = this.x); !this.tabs[--e9] && e9 > 0; )
              ;
            return e9 >= this._cols ? this._cols - 1 : e9 < 0 ? 0 : e9;
          }
          nextStop(e9) {
            for (null == e9 && (e9 = this.x); !this.tabs[++e9] && e9 < this._cols; )
              ;
            return e9 >= this._cols ? this._cols - 1 : e9 < 0 ? 0 : e9;
          }
          clearMarkers(e9) {
            this._isClearing = true;
            for (let t9 = 0; t9 < this.markers.length; t9++)
              this.markers[t9].line === e9 && (this.markers[t9].dispose(), this.markers.splice(t9--, 1));
            this._isClearing = false;
          }
          clearAllMarkers() {
            this._isClearing = true;
            for (let e9 = 0; e9 < this.markers.length; e9++)
              this.markers[e9].dispose(), this.markers.splice(e9--, 1);
            this._isClearing = false;
          }
          addMarker(e9) {
            const t9 = new l5.Marker(e9);
            return this.markers.push(t9), t9.register(this.lines.onTrim((e10) => {
              t9.line -= e10, t9.line < 0 && t9.dispose();
            })), t9.register(this.lines.onInsert((e10) => {
              t9.line >= e10.index && (t9.line += e10.amount);
            })), t9.register(this.lines.onDelete((e10) => {
              t9.line >= e10.index && t9.line < e10.index + e10.amount && t9.dispose(), t9.line > e10.index && (t9.line -= e10.amount);
            })), t9.register(t9.onDispose(() => this._removeMarker(t9))), t9;
          }
          _removeMarker(e9) {
            this._isClearing || this.markers.splice(this.markers.indexOf(e9), 1);
          }
        };
      }, 8437: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferLine = t8.DEFAULT_ATTR_DATA = void 0;
        const s8 = i5(3734), r4 = i5(511), n8 = i5(643), o7 = i5(482);
        t8.DEFAULT_ATTR_DATA = Object.freeze(new s8.AttributeData());
        let a3 = 0;
        class h3 {
          constructor(e9, t9, i6 = false) {
            this.isWrapped = i6, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e9);
            const s9 = t9 || r4.CellData.fromCharData([0, n8.NULL_CELL_CHAR, n8.NULL_CELL_WIDTH, n8.NULL_CELL_CODE]);
            for (let t10 = 0; t10 < e9; ++t10)
              this.setCell(t10, s9);
            this.length = e9;
          }
          get(e9) {
            const t9 = this._data[3 * e9 + 0], i6 = 2097151 & t9;
            return [this._data[3 * e9 + 1], 2097152 & t9 ? this._combined[e9] : i6 ? (0, o7.stringFromCodePoint)(i6) : "", t9 >> 22, 2097152 & t9 ? this._combined[e9].charCodeAt(this._combined[e9].length - 1) : i6];
          }
          set(e9, t9) {
            this._data[3 * e9 + 1] = t9[n8.CHAR_DATA_ATTR_INDEX], t9[n8.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e9] = t9[1], this._data[3 * e9 + 0] = 2097152 | e9 | t9[n8.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e9 + 0] = t9[n8.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t9[n8.CHAR_DATA_WIDTH_INDEX] << 22;
          }
          getWidth(e9) {
            return this._data[3 * e9 + 0] >> 22;
          }
          hasWidth(e9) {
            return 12582912 & this._data[3 * e9 + 0];
          }
          getFg(e9) {
            return this._data[3 * e9 + 1];
          }
          getBg(e9) {
            return this._data[3 * e9 + 2];
          }
          hasContent(e9) {
            return 4194303 & this._data[3 * e9 + 0];
          }
          getCodePoint(e9) {
            const t9 = this._data[3 * e9 + 0];
            return 2097152 & t9 ? this._combined[e9].charCodeAt(this._combined[e9].length - 1) : 2097151 & t9;
          }
          isCombined(e9) {
            return 2097152 & this._data[3 * e9 + 0];
          }
          getString(e9) {
            const t9 = this._data[3 * e9 + 0];
            return 2097152 & t9 ? this._combined[e9] : 2097151 & t9 ? (0, o7.stringFromCodePoint)(2097151 & t9) : "";
          }
          isProtected(e9) {
            return 536870912 & this._data[3 * e9 + 2];
          }
          loadCell(e9, t9) {
            return a3 = 3 * e9, t9.content = this._data[a3 + 0], t9.fg = this._data[a3 + 1], t9.bg = this._data[a3 + 2], 2097152 & t9.content && (t9.combinedData = this._combined[e9]), 268435456 & t9.bg && (t9.extended = this._extendedAttrs[e9]), t9;
          }
          setCell(e9, t9) {
            2097152 & t9.content && (this._combined[e9] = t9.combinedData), 268435456 & t9.bg && (this._extendedAttrs[e9] = t9.extended), this._data[3 * e9 + 0] = t9.content, this._data[3 * e9 + 1] = t9.fg, this._data[3 * e9 + 2] = t9.bg;
          }
          setCellFromCodepoint(e9, t9, i6, s9) {
            268435456 & s9.bg && (this._extendedAttrs[e9] = s9.extended), this._data[3 * e9 + 0] = t9 | i6 << 22, this._data[3 * e9 + 1] = s9.fg, this._data[3 * e9 + 2] = s9.bg;
          }
          addCodepointToCell(e9, t9, i6) {
            let s9 = this._data[3 * e9 + 0];
            2097152 & s9 ? this._combined[e9] += (0, o7.stringFromCodePoint)(t9) : 2097151 & s9 ? (this._combined[e9] = (0, o7.stringFromCodePoint)(2097151 & s9) + (0, o7.stringFromCodePoint)(t9), s9 &= -2097152, s9 |= 2097152) : s9 = t9 | 1 << 22, i6 && (s9 &= -12582913, s9 |= i6 << 22), this._data[3 * e9 + 0] = s9;
          }
          insertCells(e9, t9, i6) {
            if ((e9 %= this.length) && 2 === this.getWidth(e9 - 1) && this.setCellFromCodepoint(e9 - 1, 0, 1, i6), t9 < this.length - e9) {
              const s9 = new r4.CellData();
              for (let i7 = this.length - e9 - t9 - 1; i7 >= 0; --i7)
                this.setCell(e9 + t9 + i7, this.loadCell(e9 + i7, s9));
              for (let s10 = 0; s10 < t9; ++s10)
                this.setCell(e9 + s10, i6);
            } else
              for (let t10 = e9; t10 < this.length; ++t10)
                this.setCell(t10, i6);
            2 === this.getWidth(this.length - 1) && this.setCellFromCodepoint(this.length - 1, 0, 1, i6);
          }
          deleteCells(e9, t9, i6) {
            if (e9 %= this.length, t9 < this.length - e9) {
              const s9 = new r4.CellData();
              for (let i7 = 0; i7 < this.length - e9 - t9; ++i7)
                this.setCell(e9 + i7, this.loadCell(e9 + t9 + i7, s9));
              for (let e10 = this.length - t9; e10 < this.length; ++e10)
                this.setCell(e10, i6);
            } else
              for (let t10 = e9; t10 < this.length; ++t10)
                this.setCell(t10, i6);
            e9 && 2 === this.getWidth(e9 - 1) && this.setCellFromCodepoint(e9 - 1, 0, 1, i6), 0 !== this.getWidth(e9) || this.hasContent(e9) || this.setCellFromCodepoint(e9, 0, 1, i6);
          }
          replaceCells(e9, t9, i6, s9 = false) {
            if (s9)
              for (e9 && 2 === this.getWidth(e9 - 1) && !this.isProtected(e9 - 1) && this.setCellFromCodepoint(e9 - 1, 0, 1, i6), t9 < this.length && 2 === this.getWidth(t9 - 1) && !this.isProtected(t9) && this.setCellFromCodepoint(t9, 0, 1, i6); e9 < t9 && e9 < this.length; )
                this.isProtected(e9) || this.setCell(e9, i6), e9++;
            else
              for (e9 && 2 === this.getWidth(e9 - 1) && this.setCellFromCodepoint(e9 - 1, 0, 1, i6), t9 < this.length && 2 === this.getWidth(t9 - 1) && this.setCellFromCodepoint(t9, 0, 1, i6); e9 < t9 && e9 < this.length; )
                this.setCell(e9++, i6);
          }
          resize(e9, t9) {
            if (e9 === this.length)
              return 4 * this._data.length * 2 < this._data.buffer.byteLength;
            const i6 = 3 * e9;
            if (e9 > this.length) {
              if (this._data.buffer.byteLength >= 4 * i6)
                this._data = new Uint32Array(this._data.buffer, 0, i6);
              else {
                const e10 = new Uint32Array(i6);
                e10.set(this._data), this._data = e10;
              }
              for (let i7 = this.length; i7 < e9; ++i7)
                this.setCell(i7, t9);
            } else {
              this._data = this._data.subarray(0, i6);
              const t10 = Object.keys(this._combined);
              for (let i7 = 0; i7 < t10.length; i7++) {
                const s10 = parseInt(t10[i7], 10);
                s10 >= e9 && delete this._combined[s10];
              }
              const s9 = Object.keys(this._extendedAttrs);
              for (let t11 = 0; t11 < s9.length; t11++) {
                const i7 = parseInt(s9[t11], 10);
                i7 >= e9 && delete this._extendedAttrs[i7];
              }
            }
            return this.length = e9, 4 * i6 * 2 < this._data.buffer.byteLength;
          }
          cleanupMemory() {
            if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
              const e9 = new Uint32Array(this._data.length);
              return e9.set(this._data), this._data = e9, 1;
            }
            return 0;
          }
          fill(e9, t9 = false) {
            if (t9)
              for (let t10 = 0; t10 < this.length; ++t10)
                this.isProtected(t10) || this.setCell(t10, e9);
            else {
              this._combined = {}, this._extendedAttrs = {};
              for (let t10 = 0; t10 < this.length; ++t10)
                this.setCell(t10, e9);
            }
          }
          copyFrom(e9) {
            this.length !== e9.length ? this._data = new Uint32Array(e9._data) : this._data.set(e9._data), this.length = e9.length, this._combined = {};
            for (const t9 in e9._combined)
              this._combined[t9] = e9._combined[t9];
            this._extendedAttrs = {};
            for (const t9 in e9._extendedAttrs)
              this._extendedAttrs[t9] = e9._extendedAttrs[t9];
            this.isWrapped = e9.isWrapped;
          }
          clone() {
            const e9 = new h3(0);
            e9._data = new Uint32Array(this._data), e9.length = this.length;
            for (const t9 in this._combined)
              e9._combined[t9] = this._combined[t9];
            for (const t9 in this._extendedAttrs)
              e9._extendedAttrs[t9] = this._extendedAttrs[t9];
            return e9.isWrapped = this.isWrapped, e9;
          }
          getTrimmedLength() {
            for (let e9 = this.length - 1; e9 >= 0; --e9)
              if (4194303 & this._data[3 * e9 + 0])
                return e9 + (this._data[3 * e9 + 0] >> 22);
            return 0;
          }
          getNoBgTrimmedLength() {
            for (let e9 = this.length - 1; e9 >= 0; --e9)
              if (4194303 & this._data[3 * e9 + 0] || 50331648 & this._data[3 * e9 + 2])
                return e9 + (this._data[3 * e9 + 0] >> 22);
            return 0;
          }
          copyCellsFrom(e9, t9, i6, s9, r5) {
            const n9 = e9._data;
            if (r5)
              for (let r6 = s9 - 1; r6 >= 0; r6--) {
                for (let e10 = 0; e10 < 3; e10++)
                  this._data[3 * (i6 + r6) + e10] = n9[3 * (t9 + r6) + e10];
                268435456 & n9[3 * (t9 + r6) + 2] && (this._extendedAttrs[i6 + r6] = e9._extendedAttrs[t9 + r6]);
              }
            else
              for (let r6 = 0; r6 < s9; r6++) {
                for (let e10 = 0; e10 < 3; e10++)
                  this._data[3 * (i6 + r6) + e10] = n9[3 * (t9 + r6) + e10];
                268435456 & n9[3 * (t9 + r6) + 2] && (this._extendedAttrs[i6 + r6] = e9._extendedAttrs[t9 + r6]);
              }
            const o8 = Object.keys(e9._combined);
            for (let s10 = 0; s10 < o8.length; s10++) {
              const r6 = parseInt(o8[s10], 10);
              r6 >= t9 && (this._combined[r6 - t9 + i6] = e9._combined[r6]);
            }
          }
          translateToString(e9, t9, i6, s9) {
            t9 = t9 ?? 0, i6 = i6 ?? this.length, e9 && (i6 = Math.min(i6, this.getTrimmedLength())), s9 && (s9.length = 0);
            let r5 = "";
            for (; t9 < i6; ) {
              const e10 = this._data[3 * t9 + 0], i7 = 2097151 & e10, a4 = 2097152 & e10 ? this._combined[t9] : i7 ? (0, o7.stringFromCodePoint)(i7) : n8.WHITESPACE_CELL_CHAR;
              if (r5 += a4, s9)
                for (let e11 = 0; e11 < a4.length; ++e11)
                  s9.push(t9);
              t9 += e10 >> 22 || 1;
            }
            return s9 && s9.push(t9), r5;
          }
        }
        t8.BufferLine = h3;
      }, 4841: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.getRangeLength = void 0, t8.getRangeLength = function(e9, t9) {
          if (e9.start.y > e9.end.y)
            throw new Error(`Buffer range end (${e9.end.x}, ${e9.end.y}) cannot be before start (${e9.start.x}, ${e9.start.y})`);
          return t9 * (e9.end.y - e9.start.y) + (e9.end.x - e9.start.x + 1);
        };
      }, 4634: (e8, t8) => {
        function i5(e9, t9, i6) {
          if (t9 === e9.length - 1)
            return e9[t9].getTrimmedLength();
          const s8 = !e9[t9].hasContent(i6 - 1) && 1 === e9[t9].getWidth(i6 - 1), r4 = 2 === e9[t9 + 1].getWidth(0);
          return s8 && r4 ? i6 - 1 : i6;
        }
        Object.defineProperty(t8, "__esModule", { value: true }), t8.getWrappedLineTrimmedLength = t8.reflowSmallerGetNewLineLengths = t8.reflowLargerApplyNewLayout = t8.reflowLargerCreateNewLayout = t8.reflowLargerGetLinesToRemove = void 0, t8.reflowLargerGetLinesToRemove = function(e9, t9, s8, r4, n8) {
          const o7 = [];
          for (let a3 = 0; a3 < e9.length - 1; a3++) {
            let h3 = a3, c4 = e9.get(++h3);
            if (!c4.isWrapped)
              continue;
            const l5 = [e9.get(a3)];
            for (; h3 < e9.length && c4.isWrapped; )
              l5.push(c4), c4 = e9.get(++h3);
            if (r4 >= a3 && r4 < h3) {
              a3 += l5.length - 1;
              continue;
            }
            let d3 = 0, _2 = i5(l5, d3, t9), u3 = 1, f2 = 0;
            for (; u3 < l5.length; ) {
              const e10 = i5(l5, u3, t9), r5 = e10 - f2, o8 = s8 - _2, a4 = Math.min(r5, o8);
              l5[d3].copyCellsFrom(l5[u3], f2, _2, a4, false), _2 += a4, _2 === s8 && (d3++, _2 = 0), f2 += a4, f2 === e10 && (u3++, f2 = 0), 0 === _2 && 0 !== d3 && 2 === l5[d3 - 1].getWidth(s8 - 1) && (l5[d3].copyCellsFrom(l5[d3 - 1], s8 - 1, _2++, 1, false), l5[d3 - 1].setCell(s8 - 1, n8));
            }
            l5[d3].replaceCells(_2, s8, n8);
            let v3 = 0;
            for (let e10 = l5.length - 1; e10 > 0 && (e10 > d3 || 0 === l5[e10].getTrimmedLength()); e10--)
              v3++;
            v3 > 0 && (o7.push(a3 + l5.length - v3), o7.push(v3)), a3 += l5.length - 1;
          }
          return o7;
        }, t8.reflowLargerCreateNewLayout = function(e9, t9) {
          const i6 = [];
          let s8 = 0, r4 = t9[s8], n8 = 0;
          for (let o7 = 0; o7 < e9.length; o7++)
            if (r4 === o7) {
              const i7 = t9[++s8];
              e9.onDeleteEmitter.fire({ index: o7 - n8, amount: i7 }), o7 += i7 - 1, n8 += i7, r4 = t9[++s8];
            } else
              i6.push(o7);
          return { layout: i6, countRemoved: n8 };
        }, t8.reflowLargerApplyNewLayout = function(e9, t9) {
          const i6 = [];
          for (let s8 = 0; s8 < t9.length; s8++)
            i6.push(e9.get(t9[s8]));
          for (let t10 = 0; t10 < i6.length; t10++)
            e9.set(t10, i6[t10]);
          e9.length = t9.length;
        }, t8.reflowSmallerGetNewLineLengths = function(e9, t9, s8) {
          const r4 = [], n8 = e9.map((s9, r5) => i5(e9, r5, t9)).reduce((e10, t10) => e10 + t10);
          let o7 = 0, a3 = 0, h3 = 0;
          for (; h3 < n8; ) {
            if (n8 - h3 < s8) {
              r4.push(n8 - h3);
              break;
            }
            o7 += s8;
            const c4 = i5(e9, a3, t9);
            o7 > c4 && (o7 -= c4, a3++);
            const l5 = 2 === e9[a3].getWidth(o7 - 1);
            l5 && o7--;
            const d3 = l5 ? s8 - 1 : s8;
            r4.push(d3), h3 += d3;
          }
          return r4;
        }, t8.getWrappedLineTrimmedLength = i5;
      }, 5295: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferSet = void 0;
        const s8 = i5(8460), r4 = i5(844), n8 = i5(9092);
        class o7 extends r4.Disposable {
          constructor(e9, t9) {
            super(), this._optionsService = e9, this._bufferService = t9, this._onBufferActivate = this.register(new s8.EventEmitter()), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
          }
          reset() {
            this._normal = new n8.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new n8.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
          }
          get alt() {
            return this._alt;
          }
          get active() {
            return this._activeBuffer;
          }
          get normal() {
            return this._normal;
          }
          activateNormalBuffer() {
            this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
          }
          activateAltBuffer(e9) {
            this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e9), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
          }
          resize(e9, t9) {
            this._normal.resize(e9, t9), this._alt.resize(e9, t9), this.setupTabStops(e9);
          }
          setupTabStops(e9) {
            this._normal.setupTabStops(e9), this._alt.setupTabStops(e9);
          }
        }
        t8.BufferSet = o7;
      }, 511: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CellData = void 0;
        const s8 = i5(482), r4 = i5(643), n8 = i5(3734);
        class o7 extends n8.AttributeData {
          constructor() {
            super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new n8.ExtendedAttrs(), this.combinedData = "";
          }
          static fromCharData(e9) {
            const t9 = new o7();
            return t9.setFromCharData(e9), t9;
          }
          isCombined() {
            return 2097152 & this.content;
          }
          getWidth() {
            return this.content >> 22;
          }
          getChars() {
            return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, s8.stringFromCodePoint)(2097151 & this.content) : "";
          }
          getCode() {
            return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
          }
          setFromCharData(e9) {
            this.fg = e9[r4.CHAR_DATA_ATTR_INDEX], this.bg = 0;
            let t9 = false;
            if (e9[r4.CHAR_DATA_CHAR_INDEX].length > 2)
              t9 = true;
            else if (2 === e9[r4.CHAR_DATA_CHAR_INDEX].length) {
              const i6 = e9[r4.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
              if (55296 <= i6 && i6 <= 56319) {
                const s9 = e9[r4.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                56320 <= s9 && s9 <= 57343 ? this.content = 1024 * (i6 - 55296) + s9 - 56320 + 65536 | e9[r4.CHAR_DATA_WIDTH_INDEX] << 22 : t9 = true;
              } else
                t9 = true;
            } else
              this.content = e9[r4.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e9[r4.CHAR_DATA_WIDTH_INDEX] << 22;
            t9 && (this.combinedData = e9[r4.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e9[r4.CHAR_DATA_WIDTH_INDEX] << 22);
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        t8.CellData = o7;
      }, 643: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.WHITESPACE_CELL_CODE = t8.WHITESPACE_CELL_WIDTH = t8.WHITESPACE_CELL_CHAR = t8.NULL_CELL_CODE = t8.NULL_CELL_WIDTH = t8.NULL_CELL_CHAR = t8.CHAR_DATA_CODE_INDEX = t8.CHAR_DATA_WIDTH_INDEX = t8.CHAR_DATA_CHAR_INDEX = t8.CHAR_DATA_ATTR_INDEX = t8.DEFAULT_EXT = t8.DEFAULT_ATTR = t8.DEFAULT_COLOR = void 0, t8.DEFAULT_COLOR = 0, t8.DEFAULT_ATTR = 256 | t8.DEFAULT_COLOR << 9, t8.DEFAULT_EXT = 0, t8.CHAR_DATA_ATTR_INDEX = 0, t8.CHAR_DATA_CHAR_INDEX = 1, t8.CHAR_DATA_WIDTH_INDEX = 2, t8.CHAR_DATA_CODE_INDEX = 3, t8.NULL_CELL_CHAR = "", t8.NULL_CELL_WIDTH = 1, t8.NULL_CELL_CODE = 0, t8.WHITESPACE_CELL_CHAR = " ", t8.WHITESPACE_CELL_WIDTH = 1, t8.WHITESPACE_CELL_CODE = 32;
      }, 4863: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Marker = void 0;
        const s8 = i5(8460), r4 = i5(844);
        class n8 {
          get id() {
            return this._id;
          }
          constructor(e9) {
            this.line = e9, this.isDisposed = false, this._disposables = [], this._id = n8._nextId++, this._onDispose = this.register(new s8.EventEmitter()), this.onDispose = this._onDispose.event;
          }
          dispose() {
            this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), (0, r4.disposeArray)(this._disposables), this._disposables.length = 0);
          }
          register(e9) {
            return this._disposables.push(e9), e9;
          }
        }
        t8.Marker = n8, n8._nextId = 1;
      }, 7116: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.DEFAULT_CHARSET = t8.CHARSETS = void 0, t8.CHARSETS = {}, t8.DEFAULT_CHARSET = t8.CHARSETS.B, t8.CHARSETS[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" }, t8.CHARSETS.A = { "#": "\xA3" }, t8.CHARSETS.B = void 0, t8.CHARSETS[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" }, t8.CHARSETS.C = t8.CHARSETS[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t8.CHARSETS.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" }, t8.CHARSETS.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" }, t8.CHARSETS.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" }, t8.CHARSETS.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" }, t8.CHARSETS.E = t8.CHARSETS[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" }, t8.CHARSETS.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" }, t8.CHARSETS.H = t8.CHARSETS[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t8.CHARSETS["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
      }, 2584: (e8, t8) => {
        var i5, s8, r4;
        Object.defineProperty(t8, "__esModule", { value: true }), t8.C1_ESCAPED = t8.C1 = t8.C0 = void 0, function(e9) {
          e9.NUL = "\0", e9.SOH = "", e9.STX = "", e9.ETX = "", e9.EOT = "", e9.ENQ = "", e9.ACK = "", e9.BEL = "\x07", e9.BS = "\b", e9.HT = "	", e9.LF = "\n", e9.VT = "\v", e9.FF = "\f", e9.CR = "\r", e9.SO = "", e9.SI = "", e9.DLE = "", e9.DC1 = "", e9.DC2 = "", e9.DC3 = "", e9.DC4 = "", e9.NAK = "", e9.SYN = "", e9.ETB = "", e9.CAN = "", e9.EM = "", e9.SUB = "", e9.ESC = "\x1B", e9.FS = "", e9.GS = "", e9.RS = "", e9.US = "", e9.SP = " ", e9.DEL = "\x7F";
        }(i5 || (t8.C0 = i5 = {})), function(e9) {
          e9.PAD = "\x80", e9.HOP = "\x81", e9.BPH = "\x82", e9.NBH = "\x83", e9.IND = "\x84", e9.NEL = "\x85", e9.SSA = "\x86", e9.ESA = "\x87", e9.HTS = "\x88", e9.HTJ = "\x89", e9.VTS = "\x8A", e9.PLD = "\x8B", e9.PLU = "\x8C", e9.RI = "\x8D", e9.SS2 = "\x8E", e9.SS3 = "\x8F", e9.DCS = "\x90", e9.PU1 = "\x91", e9.PU2 = "\x92", e9.STS = "\x93", e9.CCH = "\x94", e9.MW = "\x95", e9.SPA = "\x96", e9.EPA = "\x97", e9.SOS = "\x98", e9.SGCI = "\x99", e9.SCI = "\x9A", e9.CSI = "\x9B", e9.ST = "\x9C", e9.OSC = "\x9D", e9.PM = "\x9E", e9.APC = "\x9F";
        }(s8 || (t8.C1 = s8 = {})), function(e9) {
          e9.ST = `${i5.ESC}\\`;
        }(r4 || (t8.C1_ESCAPED = r4 = {}));
      }, 7399: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.evaluateKeyboardEvent = void 0;
        const s8 = i5(2584), r4 = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
        t8.evaluateKeyboardEvent = function(e9, t9, i6, n8) {
          const o7 = { type: 0, cancel: false, key: void 0 }, a3 = (e9.shiftKey ? 1 : 0) | (e9.altKey ? 2 : 0) | (e9.ctrlKey ? 4 : 0) | (e9.metaKey ? 8 : 0);
          switch (e9.keyCode) {
            case 0:
              "UIKeyInputUpArrow" === e9.key ? o7.key = t9 ? s8.C0.ESC + "OA" : s8.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e9.key ? o7.key = t9 ? s8.C0.ESC + "OD" : s8.C0.ESC + "[D" : "UIKeyInputRightArrow" === e9.key ? o7.key = t9 ? s8.C0.ESC + "OC" : s8.C0.ESC + "[C" : "UIKeyInputDownArrow" === e9.key && (o7.key = t9 ? s8.C0.ESC + "OB" : s8.C0.ESC + "[B");
              break;
            case 8:
              o7.key = e9.ctrlKey ? "\b" : s8.C0.DEL, e9.altKey && (o7.key = s8.C0.ESC + o7.key);
              break;
            case 9:
              if (e9.shiftKey) {
                o7.key = s8.C0.ESC + "[Z";
                break;
              }
              o7.key = s8.C0.HT, o7.cancel = true;
              break;
            case 13:
              o7.key = e9.altKey ? s8.C0.ESC + s8.C0.CR : s8.C0.CR, o7.cancel = true;
              break;
            case 27:
              o7.key = s8.C0.ESC, e9.altKey && (o7.key = s8.C0.ESC + s8.C0.ESC), o7.cancel = true;
              break;
            case 37:
              if (e9.metaKey)
                break;
              a3 ? (o7.key = s8.C0.ESC + "[1;" + (a3 + 1) + "D", o7.key === s8.C0.ESC + "[1;3D" && (o7.key = s8.C0.ESC + (i6 ? "b" : "[1;5D"))) : o7.key = t9 ? s8.C0.ESC + "OD" : s8.C0.ESC + "[D";
              break;
            case 39:
              if (e9.metaKey)
                break;
              a3 ? (o7.key = s8.C0.ESC + "[1;" + (a3 + 1) + "C", o7.key === s8.C0.ESC + "[1;3C" && (o7.key = s8.C0.ESC + (i6 ? "f" : "[1;5C"))) : o7.key = t9 ? s8.C0.ESC + "OC" : s8.C0.ESC + "[C";
              break;
            case 38:
              if (e9.metaKey)
                break;
              a3 ? (o7.key = s8.C0.ESC + "[1;" + (a3 + 1) + "A", i6 || o7.key !== s8.C0.ESC + "[1;3A" || (o7.key = s8.C0.ESC + "[1;5A")) : o7.key = t9 ? s8.C0.ESC + "OA" : s8.C0.ESC + "[A";
              break;
            case 40:
              if (e9.metaKey)
                break;
              a3 ? (o7.key = s8.C0.ESC + "[1;" + (a3 + 1) + "B", i6 || o7.key !== s8.C0.ESC + "[1;3B" || (o7.key = s8.C0.ESC + "[1;5B")) : o7.key = t9 ? s8.C0.ESC + "OB" : s8.C0.ESC + "[B";
              break;
            case 45:
              e9.shiftKey || e9.ctrlKey || (o7.key = s8.C0.ESC + "[2~");
              break;
            case 46:
              o7.key = a3 ? s8.C0.ESC + "[3;" + (a3 + 1) + "~" : s8.C0.ESC + "[3~";
              break;
            case 36:
              o7.key = a3 ? s8.C0.ESC + "[1;" + (a3 + 1) + "H" : t9 ? s8.C0.ESC + "OH" : s8.C0.ESC + "[H";
              break;
            case 35:
              o7.key = a3 ? s8.C0.ESC + "[1;" + (a3 + 1) + "F" : t9 ? s8.C0.ESC + "OF" : s8.C0.ESC + "[F";
              break;
            case 33:
              e9.shiftKey ? o7.type = 2 : e9.ctrlKey ? o7.key = s8.C0.ESC + "[5;" + (a3 + 1) + "~" : o7.key = s8.C0.ESC + "[5~";
              break;
            case 34:
              e9.shiftKey ? o7.type = 3 : e9.ctrlKey ? o7.key = s8.C0.ESC + "[6;" + (a3 + 1) + "~" : o7.key = s8.C0.ESC + "[6~";
              break;
            case 112:
              o7.key = a3 ? s8.C0.ESC + "[1;" + (a3 + 1) + "P" : s8.C0.ESC + "OP";
              break;
            case 113:
              o7.key = a3 ? s8.C0.ESC + "[1;" + (a3 + 1) + "Q" : s8.C0.ESC + "OQ";
              break;
            case 114:
              o7.key = a3 ? s8.C0.ESC + "[1;" + (a3 + 1) + "R" : s8.C0.ESC + "OR";
              break;
            case 115:
              o7.key = a3 ? s8.C0.ESC + "[1;" + (a3 + 1) + "S" : s8.C0.ESC + "OS";
              break;
            case 116:
              o7.key = a3 ? s8.C0.ESC + "[15;" + (a3 + 1) + "~" : s8.C0.ESC + "[15~";
              break;
            case 117:
              o7.key = a3 ? s8.C0.ESC + "[17;" + (a3 + 1) + "~" : s8.C0.ESC + "[17~";
              break;
            case 118:
              o7.key = a3 ? s8.C0.ESC + "[18;" + (a3 + 1) + "~" : s8.C0.ESC + "[18~";
              break;
            case 119:
              o7.key = a3 ? s8.C0.ESC + "[19;" + (a3 + 1) + "~" : s8.C0.ESC + "[19~";
              break;
            case 120:
              o7.key = a3 ? s8.C0.ESC + "[20;" + (a3 + 1) + "~" : s8.C0.ESC + "[20~";
              break;
            case 121:
              o7.key = a3 ? s8.C0.ESC + "[21;" + (a3 + 1) + "~" : s8.C0.ESC + "[21~";
              break;
            case 122:
              o7.key = a3 ? s8.C0.ESC + "[23;" + (a3 + 1) + "~" : s8.C0.ESC + "[23~";
              break;
            case 123:
              o7.key = a3 ? s8.C0.ESC + "[24;" + (a3 + 1) + "~" : s8.C0.ESC + "[24~";
              break;
            default:
              if (!e9.ctrlKey || e9.shiftKey || e9.altKey || e9.metaKey)
                if (i6 && !n8 || !e9.altKey || e9.metaKey)
                  !i6 || e9.altKey || e9.ctrlKey || e9.shiftKey || !e9.metaKey ? e9.key && !e9.ctrlKey && !e9.altKey && !e9.metaKey && e9.keyCode >= 48 && 1 === e9.key.length ? o7.key = e9.key : e9.key && e9.ctrlKey && ("_" === e9.key && (o7.key = s8.C0.US), "@" === e9.key && (o7.key = s8.C0.NUL)) : 65 === e9.keyCode && (o7.type = 1);
                else {
                  const t10 = r4[e9.keyCode], i7 = t10?.[e9.shiftKey ? 1 : 0];
                  if (i7)
                    o7.key = s8.C0.ESC + i7;
                  else if (e9.keyCode >= 65 && e9.keyCode <= 90) {
                    const t11 = e9.ctrlKey ? e9.keyCode - 64 : e9.keyCode + 32;
                    let i8 = String.fromCharCode(t11);
                    e9.shiftKey && (i8 = i8.toUpperCase()), o7.key = s8.C0.ESC + i8;
                  } else if (32 === e9.keyCode)
                    o7.key = s8.C0.ESC + (e9.ctrlKey ? s8.C0.NUL : " ");
                  else if ("Dead" === e9.key && e9.code.startsWith("Key")) {
                    let t11 = e9.code.slice(3, 4);
                    e9.shiftKey || (t11 = t11.toLowerCase()), o7.key = s8.C0.ESC + t11, o7.cancel = true;
                  }
                }
              else
                e9.keyCode >= 65 && e9.keyCode <= 90 ? o7.key = String.fromCharCode(e9.keyCode - 64) : 32 === e9.keyCode ? o7.key = s8.C0.NUL : e9.keyCode >= 51 && e9.keyCode <= 55 ? o7.key = String.fromCharCode(e9.keyCode - 51 + 27) : 56 === e9.keyCode ? o7.key = s8.C0.DEL : 219 === e9.keyCode ? o7.key = s8.C0.ESC : 220 === e9.keyCode ? o7.key = s8.C0.FS : 221 === e9.keyCode && (o7.key = s8.C0.GS);
          }
          return o7;
        };
      }, 482: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Utf8ToUtf32 = t8.StringToUtf32 = t8.utf32ToString = t8.stringFromCodePoint = void 0, t8.stringFromCodePoint = function(e9) {
          return e9 > 65535 ? (e9 -= 65536, String.fromCharCode(55296 + (e9 >> 10)) + String.fromCharCode(e9 % 1024 + 56320)) : String.fromCharCode(e9);
        }, t8.utf32ToString = function(e9, t9 = 0, i5 = e9.length) {
          let s8 = "";
          for (let r4 = t9; r4 < i5; ++r4) {
            let t10 = e9[r4];
            t10 > 65535 ? (t10 -= 65536, s8 += String.fromCharCode(55296 + (t10 >> 10)) + String.fromCharCode(t10 % 1024 + 56320)) : s8 += String.fromCharCode(t10);
          }
          return s8;
        }, t8.StringToUtf32 = class {
          constructor() {
            this._interim = 0;
          }
          clear() {
            this._interim = 0;
          }
          decode(e9, t9) {
            const i5 = e9.length;
            if (!i5)
              return 0;
            let s8 = 0, r4 = 0;
            if (this._interim) {
              const i6 = e9.charCodeAt(r4++);
              56320 <= i6 && i6 <= 57343 ? t9[s8++] = 1024 * (this._interim - 55296) + i6 - 56320 + 65536 : (t9[s8++] = this._interim, t9[s8++] = i6), this._interim = 0;
            }
            for (let n8 = r4; n8 < i5; ++n8) {
              const r5 = e9.charCodeAt(n8);
              if (55296 <= r5 && r5 <= 56319) {
                if (++n8 >= i5)
                  return this._interim = r5, s8;
                const o7 = e9.charCodeAt(n8);
                56320 <= o7 && o7 <= 57343 ? t9[s8++] = 1024 * (r5 - 55296) + o7 - 56320 + 65536 : (t9[s8++] = r5, t9[s8++] = o7);
              } else
                65279 !== r5 && (t9[s8++] = r5);
            }
            return s8;
          }
        }, t8.Utf8ToUtf32 = class {
          constructor() {
            this.interim = new Uint8Array(3);
          }
          clear() {
            this.interim.fill(0);
          }
          decode(e9, t9) {
            const i5 = e9.length;
            if (!i5)
              return 0;
            let s8, r4, n8, o7, a3 = 0, h3 = 0, c4 = 0;
            if (this.interim[0]) {
              let s9 = false, r5 = this.interim[0];
              r5 &= 192 == (224 & r5) ? 31 : 224 == (240 & r5) ? 15 : 7;
              let n9, o8 = 0;
              for (; (n9 = 63 & this.interim[++o8]) && o8 < 4; )
                r5 <<= 6, r5 |= n9;
              const h4 = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, l6 = h4 - o8;
              for (; c4 < l6; ) {
                if (c4 >= i5)
                  return 0;
                if (n9 = e9[c4++], 128 != (192 & n9)) {
                  c4--, s9 = true;
                  break;
                }
                this.interim[o8++] = n9, r5 <<= 6, r5 |= 63 & n9;
              }
              s9 || (2 === h4 ? r5 < 128 ? c4-- : t9[a3++] = r5 : 3 === h4 ? r5 < 2048 || r5 >= 55296 && r5 <= 57343 || 65279 === r5 || (t9[a3++] = r5) : r5 < 65536 || r5 > 1114111 || (t9[a3++] = r5)), this.interim.fill(0);
            }
            const l5 = i5 - 4;
            let d3 = c4;
            for (; d3 < i5; ) {
              for (; !(!(d3 < l5) || 128 & (s8 = e9[d3]) || 128 & (r4 = e9[d3 + 1]) || 128 & (n8 = e9[d3 + 2]) || 128 & (o7 = e9[d3 + 3])); )
                t9[a3++] = s8, t9[a3++] = r4, t9[a3++] = n8, t9[a3++] = o7, d3 += 4;
              if (s8 = e9[d3++], s8 < 128)
                t9[a3++] = s8;
              else if (192 == (224 & s8)) {
                if (d3 >= i5)
                  return this.interim[0] = s8, a3;
                if (r4 = e9[d3++], 128 != (192 & r4)) {
                  d3--;
                  continue;
                }
                if (h3 = (31 & s8) << 6 | 63 & r4, h3 < 128) {
                  d3--;
                  continue;
                }
                t9[a3++] = h3;
              } else if (224 == (240 & s8)) {
                if (d3 >= i5)
                  return this.interim[0] = s8, a3;
                if (r4 = e9[d3++], 128 != (192 & r4)) {
                  d3--;
                  continue;
                }
                if (d3 >= i5)
                  return this.interim[0] = s8, this.interim[1] = r4, a3;
                if (n8 = e9[d3++], 128 != (192 & n8)) {
                  d3--;
                  continue;
                }
                if (h3 = (15 & s8) << 12 | (63 & r4) << 6 | 63 & n8, h3 < 2048 || h3 >= 55296 && h3 <= 57343 || 65279 === h3)
                  continue;
                t9[a3++] = h3;
              } else if (240 == (248 & s8)) {
                if (d3 >= i5)
                  return this.interim[0] = s8, a3;
                if (r4 = e9[d3++], 128 != (192 & r4)) {
                  d3--;
                  continue;
                }
                if (d3 >= i5)
                  return this.interim[0] = s8, this.interim[1] = r4, a3;
                if (n8 = e9[d3++], 128 != (192 & n8)) {
                  d3--;
                  continue;
                }
                if (d3 >= i5)
                  return this.interim[0] = s8, this.interim[1] = r4, this.interim[2] = n8, a3;
                if (o7 = e9[d3++], 128 != (192 & o7)) {
                  d3--;
                  continue;
                }
                if (h3 = (7 & s8) << 18 | (63 & r4) << 12 | (63 & n8) << 6 | 63 & o7, h3 < 65536 || h3 > 1114111)
                  continue;
                t9[a3++] = h3;
              }
            }
            return a3;
          }
        };
      }, 225: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.UnicodeV6 = void 0;
        const s8 = i5(1480), r4 = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], n8 = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
        let o7;
        t8.UnicodeV6 = class {
          constructor() {
            if (this.version = "6", !o7) {
              o7 = new Uint8Array(65536), o7.fill(1), o7[0] = 0, o7.fill(0, 1, 32), o7.fill(0, 127, 160), o7.fill(2, 4352, 4448), o7[9001] = 2, o7[9002] = 2, o7.fill(2, 11904, 42192), o7[12351] = 1, o7.fill(2, 44032, 55204), o7.fill(2, 63744, 64256), o7.fill(2, 65040, 65050), o7.fill(2, 65072, 65136), o7.fill(2, 65280, 65377), o7.fill(2, 65504, 65511);
              for (let e9 = 0; e9 < r4.length; ++e9)
                o7.fill(0, r4[e9][0], r4[e9][1] + 1);
            }
          }
          wcwidth(e9) {
            return e9 < 32 ? 0 : e9 < 127 ? 1 : e9 < 65536 ? o7[e9] : function(e10, t9) {
              let i6, s9 = 0, r5 = t9.length - 1;
              if (e10 < t9[0][0] || e10 > t9[r5][1])
                return false;
              for (; r5 >= s9; )
                if (i6 = s9 + r5 >> 1, e10 > t9[i6][1])
                  s9 = i6 + 1;
                else {
                  if (!(e10 < t9[i6][0]))
                    return true;
                  r5 = i6 - 1;
                }
              return false;
            }(e9, n8) ? 0 : e9 >= 131072 && e9 <= 196605 || e9 >= 196608 && e9 <= 262141 ? 2 : 1;
          }
          charProperties(e9, t9) {
            let i6 = this.wcwidth(e9), r5 = 0 === i6 && 0 !== t9;
            if (r5) {
              const e10 = s8.UnicodeService.extractWidth(t9);
              0 === e10 ? r5 = false : e10 > i6 && (i6 = e10);
            }
            return s8.UnicodeService.createPropertyValue(0, i6, r5);
          }
        };
      }, 5981: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.WriteBuffer = void 0;
        const s8 = i5(8460), r4 = i5(844);
        class n8 extends r4.Disposable {
          constructor(e9) {
            super(), this._action = e9, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = false, this._syncCalls = 0, this._didUserInput = false, this._onWriteParsed = this.register(new s8.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event;
          }
          handleUserInput() {
            this._didUserInput = true;
          }
          writeSync(e9, t9) {
            if (void 0 !== t9 && this._syncCalls > t9)
              return void (this._syncCalls = 0);
            if (this._pendingData += e9.length, this._writeBuffer.push(e9), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting)
              return;
            let i6;
            for (this._isSyncWriting = true; i6 = this._writeBuffer.shift(); ) {
              this._action(i6);
              const e10 = this._callbacks.shift();
              e10 && e10();
            }
            this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
          }
          write(e9, t9) {
            if (this._pendingData > 5e7)
              throw new Error("write data discarded, use flow control to avoid losing data");
            if (!this._writeBuffer.length) {
              if (this._bufferOffset = 0, this._didUserInput)
                return this._didUserInput = false, this._pendingData += e9.length, this._writeBuffer.push(e9), this._callbacks.push(t9), void this._innerWrite();
              setTimeout(() => this._innerWrite());
            }
            this._pendingData += e9.length, this._writeBuffer.push(e9), this._callbacks.push(t9);
          }
          _innerWrite(e9 = 0, t9 = true) {
            const i6 = e9 || Date.now();
            for (; this._writeBuffer.length > this._bufferOffset; ) {
              const e10 = this._writeBuffer[this._bufferOffset], s9 = this._action(e10, t9);
              if (s9) {
                const e11 = (e12) => Date.now() - i6 >= 12 ? setTimeout(() => this._innerWrite(0, e12)) : this._innerWrite(i6, e12);
                return void s9.catch((e12) => (queueMicrotask(() => {
                  throw e12;
                }), Promise.resolve(false))).then(e11);
              }
              const r5 = this._callbacks[this._bufferOffset];
              if (r5 && r5(), this._bufferOffset++, this._pendingData -= e10.length, Date.now() - i6 >= 12)
                break;
            }
            this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
          }
        }
        t8.WriteBuffer = n8;
      }, 5941: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.toRgbString = t8.parseColor = void 0;
        const i5 = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, s8 = /^[\da-f]+$/;
        function r4(e9, t9) {
          const i6 = e9.toString(16), s9 = i6.length < 2 ? "0" + i6 : i6;
          switch (t9) {
            case 4:
              return i6[0];
            case 8:
              return s9;
            case 12:
              return (s9 + s9).slice(0, 3);
            default:
              return s9 + s9;
          }
        }
        t8.parseColor = function(e9) {
          if (!e9)
            return;
          let t9 = e9.toLowerCase();
          if (0 === t9.indexOf("rgb:")) {
            t9 = t9.slice(4);
            const e10 = i5.exec(t9);
            if (e10) {
              const t10 = e10[1] ? 15 : e10[4] ? 255 : e10[7] ? 4095 : 65535;
              return [Math.round(parseInt(e10[1] || e10[4] || e10[7] || e10[10], 16) / t10 * 255), Math.round(parseInt(e10[2] || e10[5] || e10[8] || e10[11], 16) / t10 * 255), Math.round(parseInt(e10[3] || e10[6] || e10[9] || e10[12], 16) / t10 * 255)];
            }
          } else if (0 === t9.indexOf("#") && (t9 = t9.slice(1), s8.exec(t9) && [3, 6, 9, 12].includes(t9.length))) {
            const e10 = t9.length / 3, i6 = [0, 0, 0];
            for (let s9 = 0; s9 < 3; ++s9) {
              const r5 = parseInt(t9.slice(e10 * s9, e10 * s9 + e10), 16);
              i6[s9] = 1 === e10 ? r5 << 4 : 2 === e10 ? r5 : 3 === e10 ? r5 >> 4 : r5 >> 8;
            }
            return i6;
          }
        }, t8.toRgbString = function(e9, t9 = 16) {
          const [i6, s9, n8] = e9;
          return `rgb:${r4(i6, t9)}/${r4(s9, t9)}/${r4(n8, t9)}`;
        };
      }, 5770: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.PAYLOAD_LIMIT = void 0, t8.PAYLOAD_LIMIT = 1e7;
      }, 6351: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.DcsHandler = t8.DcsParser = void 0;
        const s8 = i5(482), r4 = i5(8742), n8 = i5(5770), o7 = [];
        t8.DcsParser = class {
          constructor() {
            this._handlers = /* @__PURE__ */ Object.create(null), this._active = o7, this._ident = 0, this._handlerFb = () => {
            }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
          }
          dispose() {
            this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
            }, this._active = o7;
          }
          registerHandler(e9, t9) {
            void 0 === this._handlers[e9] && (this._handlers[e9] = []);
            const i6 = this._handlers[e9];
            return i6.push(t9), { dispose: () => {
              const e10 = i6.indexOf(t9);
              -1 !== e10 && i6.splice(e10, 1);
            } };
          }
          clearHandler(e9) {
            this._handlers[e9] && delete this._handlers[e9];
          }
          setHandlerFallback(e9) {
            this._handlerFb = e9;
          }
          reset() {
            if (this._active.length)
              for (let e9 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e9 >= 0; --e9)
                this._active[e9].unhook(false);
            this._stack.paused = false, this._active = o7, this._ident = 0;
          }
          hook(e9, t9) {
            if (this.reset(), this._ident = e9, this._active = this._handlers[e9] || o7, this._active.length)
              for (let e10 = this._active.length - 1; e10 >= 0; e10--)
                this._active[e10].hook(t9);
            else
              this._handlerFb(this._ident, "HOOK", t9);
          }
          put(e9, t9, i6) {
            if (this._active.length)
              for (let s9 = this._active.length - 1; s9 >= 0; s9--)
                this._active[s9].put(e9, t9, i6);
            else
              this._handlerFb(this._ident, "PUT", (0, s8.utf32ToString)(e9, t9, i6));
          }
          unhook(e9, t9 = true) {
            if (this._active.length) {
              let i6 = false, s9 = this._active.length - 1, r5 = false;
              if (this._stack.paused && (s9 = this._stack.loopPosition - 1, i6 = t9, r5 = this._stack.fallThrough, this._stack.paused = false), !r5 && false === i6) {
                for (; s9 >= 0 && (i6 = this._active[s9].unhook(e9), true !== i6); s9--)
                  if (i6 instanceof Promise)
                    return this._stack.paused = true, this._stack.loopPosition = s9, this._stack.fallThrough = false, i6;
                s9--;
              }
              for (; s9 >= 0; s9--)
                if (i6 = this._active[s9].unhook(false), i6 instanceof Promise)
                  return this._stack.paused = true, this._stack.loopPosition = s9, this._stack.fallThrough = true, i6;
            } else
              this._handlerFb(this._ident, "UNHOOK", e9);
            this._active = o7, this._ident = 0;
          }
        };
        const a3 = new r4.Params();
        a3.addParam(0), t8.DcsHandler = class {
          constructor(e9) {
            this._handler = e9, this._data = "", this._params = a3, this._hitLimit = false;
          }
          hook(e9) {
            this._params = e9.length > 1 || e9.params[0] ? e9.clone() : a3, this._data = "", this._hitLimit = false;
          }
          put(e9, t9, i6) {
            this._hitLimit || (this._data += (0, s8.utf32ToString)(e9, t9, i6), this._data.length > n8.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
          }
          unhook(e9) {
            let t9 = false;
            if (this._hitLimit)
              t9 = false;
            else if (e9 && (t9 = this._handler(this._data, this._params), t9 instanceof Promise))
              return t9.then((e10) => (this._params = a3, this._data = "", this._hitLimit = false, e10));
            return this._params = a3, this._data = "", this._hitLimit = false, t9;
          }
        };
      }, 2015: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.EscapeSequenceParser = t8.VT500_TRANSITION_TABLE = t8.TransitionTable = void 0;
        const s8 = i5(844), r4 = i5(8742), n8 = i5(6242), o7 = i5(6351);
        class a3 {
          constructor(e9) {
            this.table = new Uint8Array(e9);
          }
          setDefault(e9, t9) {
            this.table.fill(e9 << 4 | t9);
          }
          add(e9, t9, i6, s9) {
            this.table[t9 << 8 | e9] = i6 << 4 | s9;
          }
          addMany(e9, t9, i6, s9) {
            for (let r5 = 0; r5 < e9.length; r5++)
              this.table[t9 << 8 | e9[r5]] = i6 << 4 | s9;
          }
        }
        t8.TransitionTable = a3;
        const h3 = 160;
        t8.VT500_TRANSITION_TABLE = function() {
          const e9 = new a3(4095), t9 = Array.apply(null, Array(256)).map((e10, t10) => t10), i6 = (e10, i7) => t9.slice(e10, i7), s9 = i6(32, 127), r5 = i6(0, 24);
          r5.push(25), r5.push.apply(r5, i6(28, 32));
          const n9 = i6(0, 14);
          let o8;
          for (o8 in e9.setDefault(1, 0), e9.addMany(s9, 0, 2, 0), n9)
            e9.addMany([24, 26, 153, 154], o8, 3, 0), e9.addMany(i6(128, 144), o8, 3, 0), e9.addMany(i6(144, 152), o8, 3, 0), e9.add(156, o8, 0, 0), e9.add(27, o8, 11, 1), e9.add(157, o8, 4, 8), e9.addMany([152, 158, 159], o8, 0, 7), e9.add(155, o8, 11, 3), e9.add(144, o8, 11, 9);
          return e9.addMany(r5, 0, 3, 0), e9.addMany(r5, 1, 3, 1), e9.add(127, 1, 0, 1), e9.addMany(r5, 8, 0, 8), e9.addMany(r5, 3, 3, 3), e9.add(127, 3, 0, 3), e9.addMany(r5, 4, 3, 4), e9.add(127, 4, 0, 4), e9.addMany(r5, 6, 3, 6), e9.addMany(r5, 5, 3, 5), e9.add(127, 5, 0, 5), e9.addMany(r5, 2, 3, 2), e9.add(127, 2, 0, 2), e9.add(93, 1, 4, 8), e9.addMany(s9, 8, 5, 8), e9.add(127, 8, 5, 8), e9.addMany([156, 27, 24, 26, 7], 8, 6, 0), e9.addMany(i6(28, 32), 8, 0, 8), e9.addMany([88, 94, 95], 1, 0, 7), e9.addMany(s9, 7, 0, 7), e9.addMany(r5, 7, 0, 7), e9.add(156, 7, 0, 0), e9.add(127, 7, 0, 7), e9.add(91, 1, 11, 3), e9.addMany(i6(64, 127), 3, 7, 0), e9.addMany(i6(48, 60), 3, 8, 4), e9.addMany([60, 61, 62, 63], 3, 9, 4), e9.addMany(i6(48, 60), 4, 8, 4), e9.addMany(i6(64, 127), 4, 7, 0), e9.addMany([60, 61, 62, 63], 4, 0, 6), e9.addMany(i6(32, 64), 6, 0, 6), e9.add(127, 6, 0, 6), e9.addMany(i6(64, 127), 6, 0, 0), e9.addMany(i6(32, 48), 3, 9, 5), e9.addMany(i6(32, 48), 5, 9, 5), e9.addMany(i6(48, 64), 5, 0, 6), e9.addMany(i6(64, 127), 5, 7, 0), e9.addMany(i6(32, 48), 4, 9, 5), e9.addMany(i6(32, 48), 1, 9, 2), e9.addMany(i6(32, 48), 2, 9, 2), e9.addMany(i6(48, 127), 2, 10, 0), e9.addMany(i6(48, 80), 1, 10, 0), e9.addMany(i6(81, 88), 1, 10, 0), e9.addMany([89, 90, 92], 1, 10, 0), e9.addMany(i6(96, 127), 1, 10, 0), e9.add(80, 1, 11, 9), e9.addMany(r5, 9, 0, 9), e9.add(127, 9, 0, 9), e9.addMany(i6(28, 32), 9, 0, 9), e9.addMany(i6(32, 48), 9, 9, 12), e9.addMany(i6(48, 60), 9, 8, 10), e9.addMany([60, 61, 62, 63], 9, 9, 10), e9.addMany(r5, 11, 0, 11), e9.addMany(i6(32, 128), 11, 0, 11), e9.addMany(i6(28, 32), 11, 0, 11), e9.addMany(r5, 10, 0, 10), e9.add(127, 10, 0, 10), e9.addMany(i6(28, 32), 10, 0, 10), e9.addMany(i6(48, 60), 10, 8, 10), e9.addMany([60, 61, 62, 63], 10, 0, 11), e9.addMany(i6(32, 48), 10, 9, 12), e9.addMany(r5, 12, 0, 12), e9.add(127, 12, 0, 12), e9.addMany(i6(28, 32), 12, 0, 12), e9.addMany(i6(32, 48), 12, 9, 12), e9.addMany(i6(48, 64), 12, 0, 11), e9.addMany(i6(64, 127), 12, 12, 13), e9.addMany(i6(64, 127), 10, 12, 13), e9.addMany(i6(64, 127), 9, 12, 13), e9.addMany(r5, 13, 13, 13), e9.addMany(s9, 13, 13, 13), e9.add(127, 13, 0, 13), e9.addMany([27, 156, 24, 26], 13, 14, 0), e9.add(h3, 0, 2, 0), e9.add(h3, 8, 5, 8), e9.add(h3, 6, 0, 6), e9.add(h3, 11, 0, 11), e9.add(h3, 13, 13, 13), e9;
        }();
        class c4 extends s8.Disposable {
          constructor(e9 = t8.VT500_TRANSITION_TABLE) {
            super(), this._transitions = e9, this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, this.initialState = 0, this.currentState = this.initialState, this._params = new r4.Params(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (e10, t9, i6) => {
            }, this._executeHandlerFb = (e10) => {
            }, this._csiHandlerFb = (e10, t9) => {
            }, this._escHandlerFb = (e10) => {
            }, this._errorHandlerFb = (e10) => e10, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this.register((0, s8.toDisposable)(() => {
              this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
            })), this._oscParser = this.register(new n8.OscParser()), this._dcsParser = this.register(new o7.DcsParser()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
          }
          _identifier(e9, t9 = [64, 126]) {
            let i6 = 0;
            if (e9.prefix) {
              if (e9.prefix.length > 1)
                throw new Error("only one byte as prefix supported");
              if (i6 = e9.prefix.charCodeAt(0), i6 && 60 > i6 || i6 > 63)
                throw new Error("prefix must be in range 0x3c .. 0x3f");
            }
            if (e9.intermediates) {
              if (e9.intermediates.length > 2)
                throw new Error("only two bytes as intermediates are supported");
              for (let t10 = 0; t10 < e9.intermediates.length; ++t10) {
                const s10 = e9.intermediates.charCodeAt(t10);
                if (32 > s10 || s10 > 47)
                  throw new Error("intermediate must be in range 0x20 .. 0x2f");
                i6 <<= 8, i6 |= s10;
              }
            }
            if (1 !== e9.final.length)
              throw new Error("final must be a single byte");
            const s9 = e9.final.charCodeAt(0);
            if (t9[0] > s9 || s9 > t9[1])
              throw new Error(`final must be in range ${t9[0]} .. ${t9[1]}`);
            return i6 <<= 8, i6 |= s9, i6;
          }
          identToString(e9) {
            const t9 = [];
            for (; e9; )
              t9.push(String.fromCharCode(255 & e9)), e9 >>= 8;
            return t9.reverse().join("");
          }
          setPrintHandler(e9) {
            this._printHandler = e9;
          }
          clearPrintHandler() {
            this._printHandler = this._printHandlerFb;
          }
          registerEscHandler(e9, t9) {
            const i6 = this._identifier(e9, [48, 126]);
            void 0 === this._escHandlers[i6] && (this._escHandlers[i6] = []);
            const s9 = this._escHandlers[i6];
            return s9.push(t9), { dispose: () => {
              const e10 = s9.indexOf(t9);
              -1 !== e10 && s9.splice(e10, 1);
            } };
          }
          clearEscHandler(e9) {
            this._escHandlers[this._identifier(e9, [48, 126])] && delete this._escHandlers[this._identifier(e9, [48, 126])];
          }
          setEscHandlerFallback(e9) {
            this._escHandlerFb = e9;
          }
          setExecuteHandler(e9, t9) {
            this._executeHandlers[e9.charCodeAt(0)] = t9;
          }
          clearExecuteHandler(e9) {
            this._executeHandlers[e9.charCodeAt(0)] && delete this._executeHandlers[e9.charCodeAt(0)];
          }
          setExecuteHandlerFallback(e9) {
            this._executeHandlerFb = e9;
          }
          registerCsiHandler(e9, t9) {
            const i6 = this._identifier(e9);
            void 0 === this._csiHandlers[i6] && (this._csiHandlers[i6] = []);
            const s9 = this._csiHandlers[i6];
            return s9.push(t9), { dispose: () => {
              const e10 = s9.indexOf(t9);
              -1 !== e10 && s9.splice(e10, 1);
            } };
          }
          clearCsiHandler(e9) {
            this._csiHandlers[this._identifier(e9)] && delete this._csiHandlers[this._identifier(e9)];
          }
          setCsiHandlerFallback(e9) {
            this._csiHandlerFb = e9;
          }
          registerDcsHandler(e9, t9) {
            return this._dcsParser.registerHandler(this._identifier(e9), t9);
          }
          clearDcsHandler(e9) {
            this._dcsParser.clearHandler(this._identifier(e9));
          }
          setDcsHandlerFallback(e9) {
            this._dcsParser.setHandlerFallback(e9);
          }
          registerOscHandler(e9, t9) {
            return this._oscParser.registerHandler(e9, t9);
          }
          clearOscHandler(e9) {
            this._oscParser.clearHandler(e9);
          }
          setOscHandlerFallback(e9) {
            this._oscParser.setHandlerFallback(e9);
          }
          setErrorHandler(e9) {
            this._errorHandler = e9;
          }
          clearErrorHandler() {
            this._errorHandler = this._errorHandlerFb;
          }
          reset() {
            this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
          }
          _preserveStack(e9, t9, i6, s9, r5) {
            this._parseStack.state = e9, this._parseStack.handlers = t9, this._parseStack.handlerPos = i6, this._parseStack.transition = s9, this._parseStack.chunkPos = r5;
          }
          parse(e9, t9, i6) {
            let s9, r5 = 0, n9 = 0, o8 = 0;
            if (this._parseStack.state)
              if (2 === this._parseStack.state)
                this._parseStack.state = 0, o8 = this._parseStack.chunkPos + 1;
              else {
                if (void 0 === i6 || 1 === this._parseStack.state)
                  throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                const t10 = this._parseStack.handlers;
                let n10 = this._parseStack.handlerPos - 1;
                switch (this._parseStack.state) {
                  case 3:
                    if (false === i6 && n10 > -1) {
                      for (; n10 >= 0 && (s9 = t10[n10](this._params), true !== s9); n10--)
                        if (s9 instanceof Promise)
                          return this._parseStack.handlerPos = n10, s9;
                    }
                    this._parseStack.handlers = [];
                    break;
                  case 4:
                    if (false === i6 && n10 > -1) {
                      for (; n10 >= 0 && (s9 = t10[n10](), true !== s9); n10--)
                        if (s9 instanceof Promise)
                          return this._parseStack.handlerPos = n10, s9;
                    }
                    this._parseStack.handlers = [];
                    break;
                  case 6:
                    if (r5 = e9[this._parseStack.chunkPos], s9 = this._dcsParser.unhook(24 !== r5 && 26 !== r5, i6), s9)
                      return s9;
                    27 === r5 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                    break;
                  case 5:
                    if (r5 = e9[this._parseStack.chunkPos], s9 = this._oscParser.end(24 !== r5 && 26 !== r5, i6), s9)
                      return s9;
                    27 === r5 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                }
                this._parseStack.state = 0, o8 = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = 15 & this._parseStack.transition;
              }
            for (let i7 = o8; i7 < t9; ++i7) {
              switch (r5 = e9[i7], n9 = this._transitions.table[this.currentState << 8 | (r5 < 160 ? r5 : h3)], n9 >> 4) {
                case 2:
                  for (let s10 = i7 + 1; ; ++s10) {
                    if (s10 >= t9 || (r5 = e9[s10]) < 32 || r5 > 126 && r5 < h3) {
                      this._printHandler(e9, i7, s10), i7 = s10 - 1;
                      break;
                    }
                    if (++s10 >= t9 || (r5 = e9[s10]) < 32 || r5 > 126 && r5 < h3) {
                      this._printHandler(e9, i7, s10), i7 = s10 - 1;
                      break;
                    }
                    if (++s10 >= t9 || (r5 = e9[s10]) < 32 || r5 > 126 && r5 < h3) {
                      this._printHandler(e9, i7, s10), i7 = s10 - 1;
                      break;
                    }
                    if (++s10 >= t9 || (r5 = e9[s10]) < 32 || r5 > 126 && r5 < h3) {
                      this._printHandler(e9, i7, s10), i7 = s10 - 1;
                      break;
                    }
                  }
                  break;
                case 3:
                  this._executeHandlers[r5] ? this._executeHandlers[r5]() : this._executeHandlerFb(r5), this.precedingJoinState = 0;
                  break;
                case 0:
                  break;
                case 1:
                  if (this._errorHandler({ position: i7, code: r5, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort)
                    return;
                  break;
                case 7:
                  const o9 = this._csiHandlers[this._collect << 8 | r5];
                  let a4 = o9 ? o9.length - 1 : -1;
                  for (; a4 >= 0 && (s9 = o9[a4](this._params), true !== s9); a4--)
                    if (s9 instanceof Promise)
                      return this._preserveStack(3, o9, a4, n9, i7), s9;
                  a4 < 0 && this._csiHandlerFb(this._collect << 8 | r5, this._params), this.precedingJoinState = 0;
                  break;
                case 8:
                  do {
                    switch (r5) {
                      case 59:
                        this._params.addParam(0);
                        break;
                      case 58:
                        this._params.addSubParam(-1);
                        break;
                      default:
                        this._params.addDigit(r5 - 48);
                    }
                  } while (++i7 < t9 && (r5 = e9[i7]) > 47 && r5 < 60);
                  i7--;
                  break;
                case 9:
                  this._collect <<= 8, this._collect |= r5;
                  break;
                case 10:
                  const c5 = this._escHandlers[this._collect << 8 | r5];
                  let l5 = c5 ? c5.length - 1 : -1;
                  for (; l5 >= 0 && (s9 = c5[l5](), true !== s9); l5--)
                    if (s9 instanceof Promise)
                      return this._preserveStack(4, c5, l5, n9, i7), s9;
                  l5 < 0 && this._escHandlerFb(this._collect << 8 | r5), this.precedingJoinState = 0;
                  break;
                case 11:
                  this._params.reset(), this._params.addParam(0), this._collect = 0;
                  break;
                case 12:
                  this._dcsParser.hook(this._collect << 8 | r5, this._params);
                  break;
                case 13:
                  for (let s10 = i7 + 1; ; ++s10)
                    if (s10 >= t9 || 24 === (r5 = e9[s10]) || 26 === r5 || 27 === r5 || r5 > 127 && r5 < h3) {
                      this._dcsParser.put(e9, i7, s10), i7 = s10 - 1;
                      break;
                    }
                  break;
                case 14:
                  if (s9 = this._dcsParser.unhook(24 !== r5 && 26 !== r5), s9)
                    return this._preserveStack(6, [], 0, n9, i7), s9;
                  27 === r5 && (n9 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                  break;
                case 4:
                  this._oscParser.start();
                  break;
                case 5:
                  for (let s10 = i7 + 1; ; s10++)
                    if (s10 >= t9 || (r5 = e9[s10]) < 32 || r5 > 127 && r5 < h3) {
                      this._oscParser.put(e9, i7, s10), i7 = s10 - 1;
                      break;
                    }
                  break;
                case 6:
                  if (s9 = this._oscParser.end(24 !== r5 && 26 !== r5), s9)
                    return this._preserveStack(5, [], 0, n9, i7), s9;
                  27 === r5 && (n9 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
              }
              this.currentState = 15 & n9;
            }
          }
        }
        t8.EscapeSequenceParser = c4;
      }, 6242: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.OscHandler = t8.OscParser = void 0;
        const s8 = i5(5770), r4 = i5(482), n8 = [];
        t8.OscParser = class {
          constructor() {
            this._state = 0, this._active = n8, this._id = -1, this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
            }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
          }
          registerHandler(e9, t9) {
            void 0 === this._handlers[e9] && (this._handlers[e9] = []);
            const i6 = this._handlers[e9];
            return i6.push(t9), { dispose: () => {
              const e10 = i6.indexOf(t9);
              -1 !== e10 && i6.splice(e10, 1);
            } };
          }
          clearHandler(e9) {
            this._handlers[e9] && delete this._handlers[e9];
          }
          setHandlerFallback(e9) {
            this._handlerFb = e9;
          }
          dispose() {
            this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
            }, this._active = n8;
          }
          reset() {
            if (2 === this._state)
              for (let e9 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e9 >= 0; --e9)
                this._active[e9].end(false);
            this._stack.paused = false, this._active = n8, this._id = -1, this._state = 0;
          }
          _start() {
            if (this._active = this._handlers[this._id] || n8, this._active.length)
              for (let e9 = this._active.length - 1; e9 >= 0; e9--)
                this._active[e9].start();
            else
              this._handlerFb(this._id, "START");
          }
          _put(e9, t9, i6) {
            if (this._active.length)
              for (let s9 = this._active.length - 1; s9 >= 0; s9--)
                this._active[s9].put(e9, t9, i6);
            else
              this._handlerFb(this._id, "PUT", (0, r4.utf32ToString)(e9, t9, i6));
          }
          start() {
            this.reset(), this._state = 1;
          }
          put(e9, t9, i6) {
            if (3 !== this._state) {
              if (1 === this._state)
                for (; t9 < i6; ) {
                  const i7 = e9[t9++];
                  if (59 === i7) {
                    this._state = 2, this._start();
                    break;
                  }
                  if (i7 < 48 || 57 < i7)
                    return void (this._state = 3);
                  -1 === this._id && (this._id = 0), this._id = 10 * this._id + i7 - 48;
                }
              2 === this._state && i6 - t9 > 0 && this._put(e9, t9, i6);
            }
          }
          end(e9, t9 = true) {
            if (0 !== this._state) {
              if (3 !== this._state)
                if (1 === this._state && this._start(), this._active.length) {
                  let i6 = false, s9 = this._active.length - 1, r5 = false;
                  if (this._stack.paused && (s9 = this._stack.loopPosition - 1, i6 = t9, r5 = this._stack.fallThrough, this._stack.paused = false), !r5 && false === i6) {
                    for (; s9 >= 0 && (i6 = this._active[s9].end(e9), true !== i6); s9--)
                      if (i6 instanceof Promise)
                        return this._stack.paused = true, this._stack.loopPosition = s9, this._stack.fallThrough = false, i6;
                    s9--;
                  }
                  for (; s9 >= 0; s9--)
                    if (i6 = this._active[s9].end(false), i6 instanceof Promise)
                      return this._stack.paused = true, this._stack.loopPosition = s9, this._stack.fallThrough = true, i6;
                } else
                  this._handlerFb(this._id, "END", e9);
              this._active = n8, this._id = -1, this._state = 0;
            }
          }
        }, t8.OscHandler = class {
          constructor(e9) {
            this._handler = e9, this._data = "", this._hitLimit = false;
          }
          start() {
            this._data = "", this._hitLimit = false;
          }
          put(e9, t9, i6) {
            this._hitLimit || (this._data += (0, r4.utf32ToString)(e9, t9, i6), this._data.length > s8.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
          }
          end(e9) {
            let t9 = false;
            if (this._hitLimit)
              t9 = false;
            else if (e9 && (t9 = this._handler(this._data), t9 instanceof Promise))
              return t9.then((e10) => (this._data = "", this._hitLimit = false, e10));
            return this._data = "", this._hitLimit = false, t9;
          }
        };
      }, 8742: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.Params = void 0;
        const i5 = 2147483647;
        class s8 {
          static fromArray(e9) {
            const t9 = new s8();
            if (!e9.length)
              return t9;
            for (let i6 = Array.isArray(e9[0]) ? 1 : 0; i6 < e9.length; ++i6) {
              const s9 = e9[i6];
              if (Array.isArray(s9))
                for (let e10 = 0; e10 < s9.length; ++e10)
                  t9.addSubParam(s9[e10]);
              else
                t9.addParam(s9);
            }
            return t9;
          }
          constructor(e9 = 32, t9 = 32) {
            if (this.maxLength = e9, this.maxSubParamsLength = t9, t9 > 256)
              throw new Error("maxSubParamsLength must not be greater than 256");
            this.params = new Int32Array(e9), this.length = 0, this._subParams = new Int32Array(t9), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e9), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
          }
          clone() {
            const e9 = new s8(this.maxLength, this.maxSubParamsLength);
            return e9.params.set(this.params), e9.length = this.length, e9._subParams.set(this._subParams), e9._subParamsLength = this._subParamsLength, e9._subParamsIdx.set(this._subParamsIdx), e9._rejectDigits = this._rejectDigits, e9._rejectSubDigits = this._rejectSubDigits, e9._digitIsSub = this._digitIsSub, e9;
          }
          toArray() {
            const e9 = [];
            for (let t9 = 0; t9 < this.length; ++t9) {
              e9.push(this.params[t9]);
              const i6 = this._subParamsIdx[t9] >> 8, s9 = 255 & this._subParamsIdx[t9];
              s9 - i6 > 0 && e9.push(Array.prototype.slice.call(this._subParams, i6, s9));
            }
            return e9;
          }
          reset() {
            this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
          }
          addParam(e9) {
            if (this._digitIsSub = false, this.length >= this.maxLength)
              this._rejectDigits = true;
            else {
              if (e9 < -1)
                throw new Error("values lesser than -1 are not allowed");
              this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e9 > i5 ? i5 : e9;
            }
          }
          addSubParam(e9) {
            if (this._digitIsSub = true, this.length)
              if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
                this._rejectSubDigits = true;
              else {
                if (e9 < -1)
                  throw new Error("values lesser than -1 are not allowed");
                this._subParams[this._subParamsLength++] = e9 > i5 ? i5 : e9, this._subParamsIdx[this.length - 1]++;
              }
          }
          hasSubParams(e9) {
            return (255 & this._subParamsIdx[e9]) - (this._subParamsIdx[e9] >> 8) > 0;
          }
          getSubParams(e9) {
            const t9 = this._subParamsIdx[e9] >> 8, i6 = 255 & this._subParamsIdx[e9];
            return i6 - t9 > 0 ? this._subParams.subarray(t9, i6) : null;
          }
          getSubParamsAll() {
            const e9 = {};
            for (let t9 = 0; t9 < this.length; ++t9) {
              const i6 = this._subParamsIdx[t9] >> 8, s9 = 255 & this._subParamsIdx[t9];
              s9 - i6 > 0 && (e9[t9] = this._subParams.slice(i6, s9));
            }
            return e9;
          }
          addDigit(e9) {
            let t9;
            if (this._rejectDigits || !(t9 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)
              return;
            const s9 = this._digitIsSub ? this._subParams : this.params, r4 = s9[t9 - 1];
            s9[t9 - 1] = ~r4 ? Math.min(10 * r4 + e9, i5) : e9;
          }
        }
        t8.Params = s8;
      }, 5741: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.AddonManager = void 0, t8.AddonManager = class {
          constructor() {
            this._addons = [];
          }
          dispose() {
            for (let e9 = this._addons.length - 1; e9 >= 0; e9--)
              this._addons[e9].instance.dispose();
          }
          loadAddon(e9, t9) {
            const i5 = { instance: t9, dispose: t9.dispose, isDisposed: false };
            this._addons.push(i5), t9.dispose = () => this._wrappedAddonDispose(i5), t9.activate(e9);
          }
          _wrappedAddonDispose(e9) {
            if (e9.isDisposed)
              return;
            let t9 = -1;
            for (let i5 = 0; i5 < this._addons.length; i5++)
              if (this._addons[i5] === e9) {
                t9 = i5;
                break;
              }
            if (-1 === t9)
              throw new Error("Could not dispose an addon that has not been loaded");
            e9.isDisposed = true, e9.dispose.apply(e9.instance), this._addons.splice(t9, 1);
          }
        };
      }, 8771: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferApiView = void 0;
        const s8 = i5(3785), r4 = i5(511);
        t8.BufferApiView = class {
          constructor(e9, t9) {
            this._buffer = e9, this.type = t9;
          }
          init(e9) {
            return this._buffer = e9, this;
          }
          get cursorY() {
            return this._buffer.y;
          }
          get cursorX() {
            return this._buffer.x;
          }
          get viewportY() {
            return this._buffer.ydisp;
          }
          get baseY() {
            return this._buffer.ybase;
          }
          get length() {
            return this._buffer.lines.length;
          }
          getLine(e9) {
            const t9 = this._buffer.lines.get(e9);
            if (t9)
              return new s8.BufferLineApiView(t9);
          }
          getNullCell() {
            return new r4.CellData();
          }
        };
      }, 3785: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferLineApiView = void 0;
        const s8 = i5(511);
        t8.BufferLineApiView = class {
          constructor(e9) {
            this._line = e9;
          }
          get isWrapped() {
            return this._line.isWrapped;
          }
          get length() {
            return this._line.length;
          }
          getCell(e9, t9) {
            if (!(e9 < 0 || e9 >= this._line.length))
              return t9 ? (this._line.loadCell(e9, t9), t9) : this._line.loadCell(e9, new s8.CellData());
          }
          translateToString(e9, t9, i6) {
            return this._line.translateToString(e9, t9, i6);
          }
        };
      }, 8285: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferNamespaceApi = void 0;
        const s8 = i5(8771), r4 = i5(8460), n8 = i5(844);
        class o7 extends n8.Disposable {
          constructor(e9) {
            super(), this._core = e9, this._onBufferChange = this.register(new r4.EventEmitter()), this.onBufferChange = this._onBufferChange.event, this._normal = new s8.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new s8.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
          }
          get active() {
            if (this._core.buffers.active === this._core.buffers.normal)
              return this.normal;
            if (this._core.buffers.active === this._core.buffers.alt)
              return this.alternate;
            throw new Error("Active buffer is neither normal nor alternate");
          }
          get normal() {
            return this._normal.init(this._core.buffers.normal);
          }
          get alternate() {
            return this._alternate.init(this._core.buffers.alt);
          }
        }
        t8.BufferNamespaceApi = o7;
      }, 7975: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.ParserApi = void 0, t8.ParserApi = class {
          constructor(e9) {
            this._core = e9;
          }
          registerCsiHandler(e9, t9) {
            return this._core.registerCsiHandler(e9, (e10) => t9(e10.toArray()));
          }
          addCsiHandler(e9, t9) {
            return this.registerCsiHandler(e9, t9);
          }
          registerDcsHandler(e9, t9) {
            return this._core.registerDcsHandler(e9, (e10, i5) => t9(e10, i5.toArray()));
          }
          addDcsHandler(e9, t9) {
            return this.registerDcsHandler(e9, t9);
          }
          registerEscHandler(e9, t9) {
            return this._core.registerEscHandler(e9, t9);
          }
          addEscHandler(e9, t9) {
            return this.registerEscHandler(e9, t9);
          }
          registerOscHandler(e9, t9) {
            return this._core.registerOscHandler(e9, t9);
          }
          addOscHandler(e9, t9) {
            return this.registerOscHandler(e9, t9);
          }
        };
      }, 7090: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.UnicodeApi = void 0, t8.UnicodeApi = class {
          constructor(e9) {
            this._core = e9;
          }
          register(e9) {
            this._core.unicodeService.register(e9);
          }
          get versions() {
            return this._core.unicodeService.versions;
          }
          get activeVersion() {
            return this._core.unicodeService.activeVersion;
          }
          set activeVersion(e9) {
            this._core.unicodeService.activeVersion = e9;
          }
        };
      }, 744: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.BufferService = t8.MINIMUM_ROWS = t8.MINIMUM_COLS = void 0;
        const n8 = i5(8460), o7 = i5(844), a3 = i5(5295), h3 = i5(2585);
        t8.MINIMUM_COLS = 2, t8.MINIMUM_ROWS = 1;
        let c4 = t8.BufferService = class extends o7.Disposable {
          get buffer() {
            return this.buffers.active;
          }
          constructor(e9) {
            super(), this.isUserScrolling = false, this._onResize = this.register(new n8.EventEmitter()), this.onResize = this._onResize.event, this._onScroll = this.register(new n8.EventEmitter()), this.onScroll = this._onScroll.event, this.cols = Math.max(e9.rawOptions.cols || 0, t8.MINIMUM_COLS), this.rows = Math.max(e9.rawOptions.rows || 0, t8.MINIMUM_ROWS), this.buffers = this.register(new a3.BufferSet(e9, this));
          }
          resize(e9, t9) {
            this.cols = e9, this.rows = t9, this.buffers.resize(e9, t9), this._onResize.fire({ cols: e9, rows: t9 });
          }
          reset() {
            this.buffers.reset(), this.isUserScrolling = false;
          }
          scroll(e9, t9 = false) {
            const i6 = this.buffer;
            let s9;
            s9 = this._cachedBlankLine, s9 && s9.length === this.cols && s9.getFg(0) === e9.fg && s9.getBg(0) === e9.bg || (s9 = i6.getBlankLine(e9, t9), this._cachedBlankLine = s9), s9.isWrapped = t9;
            const r5 = i6.ybase + i6.scrollTop, n9 = i6.ybase + i6.scrollBottom;
            if (0 === i6.scrollTop) {
              const e10 = i6.lines.isFull;
              n9 === i6.lines.length - 1 ? e10 ? i6.lines.recycle().copyFrom(s9) : i6.lines.push(s9.clone()) : i6.lines.splice(n9 + 1, 0, s9.clone()), e10 ? this.isUserScrolling && (i6.ydisp = Math.max(i6.ydisp - 1, 0)) : (i6.ybase++, this.isUserScrolling || i6.ydisp++);
            } else {
              const e10 = n9 - r5 + 1;
              i6.lines.shiftElements(r5 + 1, e10 - 1, -1), i6.lines.set(n9, s9.clone());
            }
            this.isUserScrolling || (i6.ydisp = i6.ybase), this._onScroll.fire(i6.ydisp);
          }
          scrollLines(e9, t9, i6) {
            const s9 = this.buffer;
            if (e9 < 0) {
              if (0 === s9.ydisp)
                return;
              this.isUserScrolling = true;
            } else
              e9 + s9.ydisp >= s9.ybase && (this.isUserScrolling = false);
            const r5 = s9.ydisp;
            s9.ydisp = Math.max(Math.min(s9.ydisp + e9, s9.ybase), 0), r5 !== s9.ydisp && (t9 || this._onScroll.fire(s9.ydisp));
          }
        };
        t8.BufferService = c4 = s8([r4(0, h3.IOptionsService)], c4);
      }, 7994: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CharsetService = void 0, t8.CharsetService = class {
          constructor() {
            this.glevel = 0, this._charsets = [];
          }
          reset() {
            this.charset = void 0, this._charsets = [], this.glevel = 0;
          }
          setgLevel(e9) {
            this.glevel = e9, this.charset = this._charsets[e9];
          }
          setgCharset(e9, t9) {
            this._charsets[e9] = t9, this.glevel === e9 && (this.charset = t9);
          }
        };
      }, 1753: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CoreMouseService = void 0;
        const n8 = i5(2585), o7 = i5(8460), a3 = i5(844), h3 = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (e9) => 4 !== e9.button && 1 === e9.action && (e9.ctrl = false, e9.alt = false, e9.shift = false, true) }, VT200: { events: 19, restrict: (e9) => 32 !== e9.action }, DRAG: { events: 23, restrict: (e9) => 32 !== e9.action || 3 !== e9.button }, ANY: { events: 31, restrict: (e9) => true } };
        function c4(e9, t9) {
          let i6 = (e9.ctrl ? 16 : 0) | (e9.shift ? 4 : 0) | (e9.alt ? 8 : 0);
          return 4 === e9.button ? (i6 |= 64, i6 |= e9.action) : (i6 |= 3 & e9.button, 4 & e9.button && (i6 |= 64), 8 & e9.button && (i6 |= 128), 32 === e9.action ? i6 |= 32 : 0 !== e9.action || t9 || (i6 |= 3)), i6;
        }
        const l5 = String.fromCharCode, d3 = { DEFAULT: (e9) => {
          const t9 = [c4(e9, false) + 32, e9.col + 32, e9.row + 32];
          return t9[0] > 255 || t9[1] > 255 || t9[2] > 255 ? "" : `\x1B[M${l5(t9[0])}${l5(t9[1])}${l5(t9[2])}`;
        }, SGR: (e9) => {
          const t9 = 0 === e9.action && 4 !== e9.button ? "m" : "M";
          return `\x1B[<${c4(e9, true)};${e9.col};${e9.row}${t9}`;
        }, SGR_PIXELS: (e9) => {
          const t9 = 0 === e9.action && 4 !== e9.button ? "m" : "M";
          return `\x1B[<${c4(e9, true)};${e9.x};${e9.y}${t9}`;
        } };
        let _2 = t8.CoreMouseService = class extends a3.Disposable {
          constructor(e9, t9) {
            super(), this._bufferService = e9, this._coreService = t9, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._onProtocolChange = this.register(new o7.EventEmitter()), this.onProtocolChange = this._onProtocolChange.event;
            for (const e10 of Object.keys(h3))
              this.addProtocol(e10, h3[e10]);
            for (const e10 of Object.keys(d3))
              this.addEncoding(e10, d3[e10]);
            this.reset();
          }
          addProtocol(e9, t9) {
            this._protocols[e9] = t9;
          }
          addEncoding(e9, t9) {
            this._encodings[e9] = t9;
          }
          get activeProtocol() {
            return this._activeProtocol;
          }
          get areMouseEventsActive() {
            return 0 !== this._protocols[this._activeProtocol].events;
          }
          set activeProtocol(e9) {
            if (!this._protocols[e9])
              throw new Error(`unknown protocol "${e9}"`);
            this._activeProtocol = e9, this._onProtocolChange.fire(this._protocols[e9].events);
          }
          get activeEncoding() {
            return this._activeEncoding;
          }
          set activeEncoding(e9) {
            if (!this._encodings[e9])
              throw new Error(`unknown encoding "${e9}"`);
            this._activeEncoding = e9;
          }
          reset() {
            this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
          }
          triggerMouseEvent(e9) {
            if (e9.col < 0 || e9.col >= this._bufferService.cols || e9.row < 0 || e9.row >= this._bufferService.rows)
              return false;
            if (4 === e9.button && 32 === e9.action)
              return false;
            if (3 === e9.button && 32 !== e9.action)
              return false;
            if (4 !== e9.button && (2 === e9.action || 3 === e9.action))
              return false;
            if (e9.col++, e9.row++, 32 === e9.action && this._lastEvent && this._equalEvents(this._lastEvent, e9, "SGR_PIXELS" === this._activeEncoding))
              return false;
            if (!this._protocols[this._activeProtocol].restrict(e9))
              return false;
            const t9 = this._encodings[this._activeEncoding](e9);
            return t9 && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t9) : this._coreService.triggerDataEvent(t9, true)), this._lastEvent = e9, true;
          }
          explainEvents(e9) {
            return { down: !!(1 & e9), up: !!(2 & e9), drag: !!(4 & e9), move: !!(8 & e9), wheel: !!(16 & e9) };
          }
          _equalEvents(e9, t9, i6) {
            if (i6) {
              if (e9.x !== t9.x)
                return false;
              if (e9.y !== t9.y)
                return false;
            } else {
              if (e9.col !== t9.col)
                return false;
              if (e9.row !== t9.row)
                return false;
            }
            return e9.button === t9.button && e9.action === t9.action && e9.ctrl === t9.ctrl && e9.alt === t9.alt && e9.shift === t9.shift;
          }
        };
        t8.CoreMouseService = _2 = s8([r4(0, n8.IBufferService), r4(1, n8.ICoreService)], _2);
      }, 6975: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.CoreService = void 0;
        const n8 = i5(1439), o7 = i5(8460), a3 = i5(844), h3 = i5(2585), c4 = Object.freeze({ insertMode: false }), l5 = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, origin: false, reverseWraparound: false, sendFocus: false, wraparound: true });
        let d3 = t8.CoreService = class extends a3.Disposable {
          constructor(e9, t9, i6) {
            super(), this._bufferService = e9, this._logService = t9, this._optionsService = i6, this.isCursorInitialized = false, this.isCursorHidden = false, this._onData = this.register(new o7.EventEmitter()), this.onData = this._onData.event, this._onUserInput = this.register(new o7.EventEmitter()), this.onUserInput = this._onUserInput.event, this._onBinary = this.register(new o7.EventEmitter()), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this.register(new o7.EventEmitter()), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, n8.clone)(c4), this.decPrivateModes = (0, n8.clone)(l5);
          }
          reset() {
            this.modes = (0, n8.clone)(c4), this.decPrivateModes = (0, n8.clone)(l5);
          }
          triggerDataEvent(e9, t9 = false) {
            if (this._optionsService.rawOptions.disableStdin)
              return;
            const i6 = this._bufferService.buffer;
            t9 && this._optionsService.rawOptions.scrollOnUserInput && i6.ybase !== i6.ydisp && this._onRequestScrollToBottom.fire(), t9 && this._onUserInput.fire(), this._logService.debug(`sending data "${e9}"`, () => e9.split("").map((e10) => e10.charCodeAt(0))), this._onData.fire(e9);
          }
          triggerBinaryEvent(e9) {
            this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e9}"`, () => e9.split("").map((e10) => e10.charCodeAt(0))), this._onBinary.fire(e9));
          }
        };
        t8.CoreService = d3 = s8([r4(0, h3.IBufferService), r4(1, h3.ILogService), r4(2, h3.IOptionsService)], d3);
      }, 9074: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.DecorationService = void 0;
        const s8 = i5(8055), r4 = i5(8460), n8 = i5(844), o7 = i5(6106);
        let a3 = 0, h3 = 0;
        class c4 extends n8.Disposable {
          get decorations() {
            return this._decorations.values();
          }
          constructor() {
            super(), this._decorations = new o7.SortedList((e9) => e9?.marker.line), this._onDecorationRegistered = this.register(new r4.EventEmitter()), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this.register(new r4.EventEmitter()), this.onDecorationRemoved = this._onDecorationRemoved.event, this.register((0, n8.toDisposable)(() => this.reset()));
          }
          registerDecoration(e9) {
            if (e9.marker.isDisposed)
              return;
            const t9 = new l5(e9);
            if (t9) {
              const e10 = t9.marker.onDispose(() => t9.dispose());
              t9.onDispose(() => {
                t9 && (this._decorations.delete(t9) && this._onDecorationRemoved.fire(t9), e10.dispose());
              }), this._decorations.insert(t9), this._onDecorationRegistered.fire(t9);
            }
            return t9;
          }
          reset() {
            for (const e9 of this._decorations.values())
              e9.dispose();
            this._decorations.clear();
          }
          *getDecorationsAtCell(e9, t9, i6) {
            let s9 = 0, r5 = 0;
            for (const n9 of this._decorations.getKeyIterator(t9))
              s9 = n9.options.x ?? 0, r5 = s9 + (n9.options.width ?? 1), e9 >= s9 && e9 < r5 && (!i6 || (n9.options.layer ?? "bottom") === i6) && (yield n9);
          }
          forEachDecorationAtCell(e9, t9, i6, s9) {
            this._decorations.forEachByKey(t9, (t10) => {
              a3 = t10.options.x ?? 0, h3 = a3 + (t10.options.width ?? 1), e9 >= a3 && e9 < h3 && (!i6 || (t10.options.layer ?? "bottom") === i6) && s9(t10);
            });
          }
        }
        t8.DecorationService = c4;
        class l5 extends n8.Disposable {
          get isDisposed() {
            return this._isDisposed;
          }
          get backgroundColorRGB() {
            return null === this._cachedBg && (this.options.backgroundColor ? this._cachedBg = s8.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
          }
          get foregroundColorRGB() {
            return null === this._cachedFg && (this.options.foregroundColor ? this._cachedFg = s8.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
          }
          constructor(e9) {
            super(), this.options = e9, this.onRenderEmitter = this.register(new r4.EventEmitter()), this.onRender = this.onRenderEmitter.event, this._onDispose = this.register(new r4.EventEmitter()), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = e9.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
          }
          dispose() {
            this._onDispose.fire(), super.dispose();
          }
        }
      }, 4348: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.InstantiationService = t8.ServiceCollection = void 0;
        const s8 = i5(2585), r4 = i5(8343);
        class n8 {
          constructor(...e9) {
            this._entries = /* @__PURE__ */ new Map();
            for (const [t9, i6] of e9)
              this.set(t9, i6);
          }
          set(e9, t9) {
            const i6 = this._entries.get(e9);
            return this._entries.set(e9, t9), i6;
          }
          forEach(e9) {
            for (const [t9, i6] of this._entries.entries())
              e9(t9, i6);
          }
          has(e9) {
            return this._entries.has(e9);
          }
          get(e9) {
            return this._entries.get(e9);
          }
        }
        t8.ServiceCollection = n8, t8.InstantiationService = class {
          constructor() {
            this._services = new n8(), this._services.set(s8.IInstantiationService, this);
          }
          setService(e9, t9) {
            this._services.set(e9, t9);
          }
          getService(e9) {
            return this._services.get(e9);
          }
          createInstance(e9, ...t9) {
            const i6 = (0, r4.getServiceDependencies)(e9).sort((e10, t10) => e10.index - t10.index), s9 = [];
            for (const t10 of i6) {
              const i7 = this._services.get(t10.id);
              if (!i7)
                throw new Error(`[createInstance] ${e9.name} depends on UNKNOWN service ${t10.id}.`);
              s9.push(i7);
            }
            const n9 = i6.length > 0 ? i6[0].index : t9.length;
            if (t9.length !== n9)
              throw new Error(`[createInstance] First service dependency of ${e9.name} at position ${n9 + 1} conflicts with ${t9.length} static arguments`);
            return new e9(...[...t9, ...s9]);
          }
        };
      }, 7866: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a4 = e9.length - 1; a4 >= 0; a4--)
              (r5 = e9[a4]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.traceCall = t8.setTraceLogger = t8.LogService = void 0;
        const n8 = i5(844), o7 = i5(2585), a3 = { trace: o7.LogLevelEnum.TRACE, debug: o7.LogLevelEnum.DEBUG, info: o7.LogLevelEnum.INFO, warn: o7.LogLevelEnum.WARN, error: o7.LogLevelEnum.ERROR, off: o7.LogLevelEnum.OFF };
        let h3, c4 = t8.LogService = class extends n8.Disposable {
          get logLevel() {
            return this._logLevel;
          }
          constructor(e9) {
            super(), this._optionsService = e9, this._logLevel = o7.LogLevelEnum.OFF, this._updateLogLevel(), this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), h3 = this;
          }
          _updateLogLevel() {
            this._logLevel = a3[this._optionsService.rawOptions.logLevel];
          }
          _evalLazyOptionalParams(e9) {
            for (let t9 = 0; t9 < e9.length; t9++)
              "function" == typeof e9[t9] && (e9[t9] = e9[t9]());
          }
          _log(e9, t9, i6) {
            this._evalLazyOptionalParams(i6), e9.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t9, ...i6);
          }
          trace(e9, ...t9) {
            this._logLevel <= o7.LogLevelEnum.TRACE && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e9, t9);
          }
          debug(e9, ...t9) {
            this._logLevel <= o7.LogLevelEnum.DEBUG && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e9, t9);
          }
          info(e9, ...t9) {
            this._logLevel <= o7.LogLevelEnum.INFO && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e9, t9);
          }
          warn(e9, ...t9) {
            this._logLevel <= o7.LogLevelEnum.WARN && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e9, t9);
          }
          error(e9, ...t9) {
            this._logLevel <= o7.LogLevelEnum.ERROR && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e9, t9);
          }
        };
        t8.LogService = c4 = s8([r4(0, o7.IOptionsService)], c4), t8.setTraceLogger = function(e9) {
          h3 = e9;
        }, t8.traceCall = function(e9, t9, i6) {
          if ("function" != typeof i6.value)
            throw new Error("not supported");
          const s9 = i6.value;
          i6.value = function(...e10) {
            if (h3.logLevel !== o7.LogLevelEnum.TRACE)
              return s9.apply(this, e10);
            h3.trace(`GlyphRenderer#${s9.name}(${e10.map((e11) => JSON.stringify(e11)).join(", ")})`);
            const t10 = s9.apply(this, e10);
            return h3.trace(`GlyphRenderer#${s9.name} return`, t10), t10;
          };
        };
      }, 7302: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.OptionsService = t8.DEFAULT_OPTIONS = void 0;
        const s8 = i5(8460), r4 = i5(844), n8 = i5(6114);
        t8.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: true, drawBoldTextInBrightColors: true, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: false, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1e3, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, rescaleOverlappingGlyphs: false, rightClickSelectsWord: n8.isMac, windowOptions: {}, windowsMode: false, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRulerWidth: 0 };
        const o7 = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
        class a3 extends r4.Disposable {
          constructor(e9) {
            super(), this._onOptionChange = this.register(new s8.EventEmitter()), this.onOptionChange = this._onOptionChange.event;
            const i6 = { ...t8.DEFAULT_OPTIONS };
            for (const t9 in e9)
              if (t9 in i6)
                try {
                  const s9 = e9[t9];
                  i6[t9] = this._sanitizeAndValidateOption(t9, s9);
                } catch (e10) {
                  console.error(e10);
                }
            this.rawOptions = i6, this.options = { ...i6 }, this._setupOptions(), this.register((0, r4.toDisposable)(() => {
              this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
            }));
          }
          onSpecificOptionChange(e9, t9) {
            return this.onOptionChange((i6) => {
              i6 === e9 && t9(this.rawOptions[e9]);
            });
          }
          onMultipleOptionChange(e9, t9) {
            return this.onOptionChange((i6) => {
              -1 !== e9.indexOf(i6) && t9();
            });
          }
          _setupOptions() {
            const e9 = (e10) => {
              if (!(e10 in t8.DEFAULT_OPTIONS))
                throw new Error(`No option with key "${e10}"`);
              return this.rawOptions[e10];
            }, i6 = (e10, i7) => {
              if (!(e10 in t8.DEFAULT_OPTIONS))
                throw new Error(`No option with key "${e10}"`);
              i7 = this._sanitizeAndValidateOption(e10, i7), this.rawOptions[e10] !== i7 && (this.rawOptions[e10] = i7, this._onOptionChange.fire(e10));
            };
            for (const t9 in this.rawOptions) {
              const s9 = { get: e9.bind(this, t9), set: i6.bind(this, t9) };
              Object.defineProperty(this.options, t9, s9);
            }
          }
          _sanitizeAndValidateOption(e9, i6) {
            switch (e9) {
              case "cursorStyle":
                if (i6 || (i6 = t8.DEFAULT_OPTIONS[e9]), !function(e10) {
                  return "block" === e10 || "underline" === e10 || "bar" === e10;
                }(i6))
                  throw new Error(`"${i6}" is not a valid value for ${e9}`);
                break;
              case "wordSeparator":
                i6 || (i6 = t8.DEFAULT_OPTIONS[e9]);
                break;
              case "fontWeight":
              case "fontWeightBold":
                if ("number" == typeof i6 && 1 <= i6 && i6 <= 1e3)
                  break;
                i6 = o7.includes(i6) ? i6 : t8.DEFAULT_OPTIONS[e9];
                break;
              case "cursorWidth":
                i6 = Math.floor(i6);
              case "lineHeight":
              case "tabStopWidth":
                if (i6 < 1)
                  throw new Error(`${e9} cannot be less than 1, value: ${i6}`);
                break;
              case "minimumContrastRatio":
                i6 = Math.max(1, Math.min(21, Math.round(10 * i6) / 10));
                break;
              case "scrollback":
                if ((i6 = Math.min(i6, 4294967295)) < 0)
                  throw new Error(`${e9} cannot be less than 0, value: ${i6}`);
                break;
              case "fastScrollSensitivity":
              case "scrollSensitivity":
                if (i6 <= 0)
                  throw new Error(`${e9} cannot be less than or equal to 0, value: ${i6}`);
                break;
              case "rows":
              case "cols":
                if (!i6 && 0 !== i6)
                  throw new Error(`${e9} must be numeric, value: ${i6}`);
                break;
              case "windowsPty":
                i6 = i6 ?? {};
            }
            return i6;
          }
        }
        t8.OptionsService = a3;
      }, 2660: function(e8, t8, i5) {
        var s8 = this && this.__decorate || function(e9, t9, i6, s9) {
          var r5, n9 = arguments.length, o8 = n9 < 3 ? t9 : null === s9 ? s9 = Object.getOwnPropertyDescriptor(t9, i6) : s9;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o8 = Reflect.decorate(e9, t9, i6, s9);
          else
            for (var a3 = e9.length - 1; a3 >= 0; a3--)
              (r5 = e9[a3]) && (o8 = (n9 < 3 ? r5(o8) : n9 > 3 ? r5(t9, i6, o8) : r5(t9, i6)) || o8);
          return n9 > 3 && o8 && Object.defineProperty(t9, i6, o8), o8;
        }, r4 = this && this.__param || function(e9, t9) {
          return function(i6, s9) {
            t9(i6, s9, e9);
          };
        };
        Object.defineProperty(t8, "__esModule", { value: true }), t8.OscLinkService = void 0;
        const n8 = i5(2585);
        let o7 = t8.OscLinkService = class {
          constructor(e9) {
            this._bufferService = e9, this._nextId = 1, this._entriesWithId = /* @__PURE__ */ new Map(), this._dataByLinkId = /* @__PURE__ */ new Map();
          }
          registerLink(e9) {
            const t9 = this._bufferService.buffer;
            if (void 0 === e9.id) {
              const i7 = t9.addMarker(t9.ybase + t9.y), s10 = { data: e9, id: this._nextId++, lines: [i7] };
              return i7.onDispose(() => this._removeMarkerFromLink(s10, i7)), this._dataByLinkId.set(s10.id, s10), s10.id;
            }
            const i6 = e9, s9 = this._getEntryIdKey(i6), r5 = this._entriesWithId.get(s9);
            if (r5)
              return this.addLineToLink(r5.id, t9.ybase + t9.y), r5.id;
            const n9 = t9.addMarker(t9.ybase + t9.y), o8 = { id: this._nextId++, key: this._getEntryIdKey(i6), data: i6, lines: [n9] };
            return n9.onDispose(() => this._removeMarkerFromLink(o8, n9)), this._entriesWithId.set(o8.key, o8), this._dataByLinkId.set(o8.id, o8), o8.id;
          }
          addLineToLink(e9, t9) {
            const i6 = this._dataByLinkId.get(e9);
            if (i6 && i6.lines.every((e10) => e10.line !== t9)) {
              const e10 = this._bufferService.buffer.addMarker(t9);
              i6.lines.push(e10), e10.onDispose(() => this._removeMarkerFromLink(i6, e10));
            }
          }
          getLinkData(e9) {
            return this._dataByLinkId.get(e9)?.data;
          }
          _getEntryIdKey(e9) {
            return `${e9.id};;${e9.uri}`;
          }
          _removeMarkerFromLink(e9, t9) {
            const i6 = e9.lines.indexOf(t9);
            -1 !== i6 && (e9.lines.splice(i6, 1), 0 === e9.lines.length && (void 0 !== e9.data.id && this._entriesWithId.delete(e9.key), this._dataByLinkId.delete(e9.id)));
          }
        };
        t8.OscLinkService = o7 = s8([r4(0, n8.IBufferService)], o7);
      }, 8343: (e8, t8) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.createDecorator = t8.getServiceDependencies = t8.serviceRegistry = void 0;
        const i5 = "di$target", s8 = "di$dependencies";
        t8.serviceRegistry = /* @__PURE__ */ new Map(), t8.getServiceDependencies = function(e9) {
          return e9[s8] || [];
        }, t8.createDecorator = function(e9) {
          if (t8.serviceRegistry.has(e9))
            return t8.serviceRegistry.get(e9);
          const r4 = function(e10, t9, n8) {
            if (3 !== arguments.length)
              throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
            !function(e11, t10, r5) {
              t10[i5] === t10 ? t10[s8].push({ id: e11, index: r5 }) : (t10[s8] = [{ id: e11, index: r5 }], t10[i5] = t10);
            }(r4, e10, n8);
          };
          return r4.toString = () => e9, t8.serviceRegistry.set(e9, r4), r4;
        };
      }, 2585: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.IDecorationService = t8.IUnicodeService = t8.IOscLinkService = t8.IOptionsService = t8.ILogService = t8.LogLevelEnum = t8.IInstantiationService = t8.ICharsetService = t8.ICoreService = t8.ICoreMouseService = t8.IBufferService = void 0;
        const s8 = i5(8343);
        var r4;
        t8.IBufferService = (0, s8.createDecorator)("BufferService"), t8.ICoreMouseService = (0, s8.createDecorator)("CoreMouseService"), t8.ICoreService = (0, s8.createDecorator)("CoreService"), t8.ICharsetService = (0, s8.createDecorator)("CharsetService"), t8.IInstantiationService = (0, s8.createDecorator)("InstantiationService"), function(e9) {
          e9[e9.TRACE = 0] = "TRACE", e9[e9.DEBUG = 1] = "DEBUG", e9[e9.INFO = 2] = "INFO", e9[e9.WARN = 3] = "WARN", e9[e9.ERROR = 4] = "ERROR", e9[e9.OFF = 5] = "OFF";
        }(r4 || (t8.LogLevelEnum = r4 = {})), t8.ILogService = (0, s8.createDecorator)("LogService"), t8.IOptionsService = (0, s8.createDecorator)("OptionsService"), t8.IOscLinkService = (0, s8.createDecorator)("OscLinkService"), t8.IUnicodeService = (0, s8.createDecorator)("UnicodeService"), t8.IDecorationService = (0, s8.createDecorator)("DecorationService");
      }, 1480: (e8, t8, i5) => {
        Object.defineProperty(t8, "__esModule", { value: true }), t8.UnicodeService = void 0;
        const s8 = i5(8460), r4 = i5(225);
        class n8 {
          static extractShouldJoin(e9) {
            return 0 != (1 & e9);
          }
          static extractWidth(e9) {
            return e9 >> 1 & 3;
          }
          static extractCharKind(e9) {
            return e9 >> 3;
          }
          static createPropertyValue(e9, t9, i6 = false) {
            return (16777215 & e9) << 3 | (3 & t9) << 1 | (i6 ? 1 : 0);
          }
          constructor() {
            this._providers = /* @__PURE__ */ Object.create(null), this._active = "", this._onChange = new s8.EventEmitter(), this.onChange = this._onChange.event;
            const e9 = new r4.UnicodeV6();
            this.register(e9), this._active = e9.version, this._activeProvider = e9;
          }
          dispose() {
            this._onChange.dispose();
          }
          get versions() {
            return Object.keys(this._providers);
          }
          get activeVersion() {
            return this._active;
          }
          set activeVersion(e9) {
            if (!this._providers[e9])
              throw new Error(`unknown Unicode version "${e9}"`);
            this._active = e9, this._activeProvider = this._providers[e9], this._onChange.fire(e9);
          }
          register(e9) {
            this._providers[e9.version] = e9;
          }
          wcwidth(e9) {
            return this._activeProvider.wcwidth(e9);
          }
          getStringCellWidth(e9) {
            let t9 = 0, i6 = 0;
            const s9 = e9.length;
            for (let r5 = 0; r5 < s9; ++r5) {
              let o7 = e9.charCodeAt(r5);
              if (55296 <= o7 && o7 <= 56319) {
                if (++r5 >= s9)
                  return t9 + this.wcwidth(o7);
                const i7 = e9.charCodeAt(r5);
                56320 <= i7 && i7 <= 57343 ? o7 = 1024 * (o7 - 55296) + i7 - 56320 + 65536 : t9 += this.wcwidth(i7);
              }
              const a3 = this.charProperties(o7, i6);
              let h3 = n8.extractWidth(a3);
              n8.extractShouldJoin(a3) && (h3 -= n8.extractWidth(i6)), t9 += h3, i6 = a3;
            }
            return t9;
          }
          charProperties(e9, t9) {
            return this._activeProvider.charProperties(e9, t9);
          }
        }
        t8.UnicodeService = n8;
      } }, t7 = {};
      function i4(s8) {
        var r4 = t7[s8];
        if (void 0 !== r4)
          return r4.exports;
        var n8 = t7[s8] = { exports: {} };
        return e7[s8].call(n8.exports, n8, n8.exports, i4), n8.exports;
      }
      var s7 = {};
      return (() => {
        var e8 = s7;
        Object.defineProperty(e8, "__esModule", { value: true }), e8.Terminal = void 0;
        const t8 = i4(9042), r4 = i4(3236), n8 = i4(844), o7 = i4(5741), a3 = i4(8285), h3 = i4(7975), c4 = i4(7090), l5 = ["cols", "rows"];
        class d3 extends n8.Disposable {
          constructor(e9) {
            super(), this._core = this.register(new r4.Terminal(e9)), this._addonManager = this.register(new o7.AddonManager()), this._publicOptions = { ...this._core.options };
            const t9 = (e10) => this._core.options[e10], i5 = (e10, t10) => {
              this._checkReadonlyOptions(e10), this._core.options[e10] = t10;
            };
            for (const e10 in this._core.options) {
              const s8 = { get: t9.bind(this, e10), set: i5.bind(this, e10) };
              Object.defineProperty(this._publicOptions, e10, s8);
            }
          }
          _checkReadonlyOptions(e9) {
            if (l5.includes(e9))
              throw new Error(`Option "${e9}" can only be set in the constructor`);
          }
          _checkProposedApi() {
            if (!this._core.optionsService.rawOptions.allowProposedApi)
              throw new Error("You must set the allowProposedApi option to true to use proposed API");
          }
          get onBell() {
            return this._core.onBell;
          }
          get onBinary() {
            return this._core.onBinary;
          }
          get onCursorMove() {
            return this._core.onCursorMove;
          }
          get onData() {
            return this._core.onData;
          }
          get onKey() {
            return this._core.onKey;
          }
          get onLineFeed() {
            return this._core.onLineFeed;
          }
          get onRender() {
            return this._core.onRender;
          }
          get onResize() {
            return this._core.onResize;
          }
          get onScroll() {
            return this._core.onScroll;
          }
          get onSelectionChange() {
            return this._core.onSelectionChange;
          }
          get onTitleChange() {
            return this._core.onTitleChange;
          }
          get onWriteParsed() {
            return this._core.onWriteParsed;
          }
          get element() {
            return this._core.element;
          }
          get parser() {
            return this._parser || (this._parser = new h3.ParserApi(this._core)), this._parser;
          }
          get unicode() {
            return this._checkProposedApi(), new c4.UnicodeApi(this._core);
          }
          get textarea() {
            return this._core.textarea;
          }
          get rows() {
            return this._core.rows;
          }
          get cols() {
            return this._core.cols;
          }
          get buffer() {
            return this._buffer || (this._buffer = this.register(new a3.BufferNamespaceApi(this._core))), this._buffer;
          }
          get markers() {
            return this._checkProposedApi(), this._core.markers;
          }
          get modes() {
            const e9 = this._core.coreService.decPrivateModes;
            let t9 = "none";
            switch (this._core.coreMouseService.activeProtocol) {
              case "X10":
                t9 = "x10";
                break;
              case "VT200":
                t9 = "vt200";
                break;
              case "DRAG":
                t9 = "drag";
                break;
              case "ANY":
                t9 = "any";
            }
            return { applicationCursorKeysMode: e9.applicationCursorKeys, applicationKeypadMode: e9.applicationKeypad, bracketedPasteMode: e9.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t9, originMode: e9.origin, reverseWraparoundMode: e9.reverseWraparound, sendFocusMode: e9.sendFocus, wraparoundMode: e9.wraparound };
          }
          get options() {
            return this._publicOptions;
          }
          set options(e9) {
            for (const t9 in e9)
              this._publicOptions[t9] = e9[t9];
          }
          blur() {
            this._core.blur();
          }
          focus() {
            this._core.focus();
          }
          input(e9, t9 = true) {
            this._core.input(e9, t9);
          }
          resize(e9, t9) {
            this._verifyIntegers(e9, t9), this._core.resize(e9, t9);
          }
          open(e9) {
            this._core.open(e9);
          }
          attachCustomKeyEventHandler(e9) {
            this._core.attachCustomKeyEventHandler(e9);
          }
          attachCustomWheelEventHandler(e9) {
            this._core.attachCustomWheelEventHandler(e9);
          }
          registerLinkProvider(e9) {
            return this._core.registerLinkProvider(e9);
          }
          registerCharacterJoiner(e9) {
            return this._checkProposedApi(), this._core.registerCharacterJoiner(e9);
          }
          deregisterCharacterJoiner(e9) {
            this._checkProposedApi(), this._core.deregisterCharacterJoiner(e9);
          }
          registerMarker(e9 = 0) {
            return this._verifyIntegers(e9), this._core.registerMarker(e9);
          }
          registerDecoration(e9) {
            return this._checkProposedApi(), this._verifyPositiveIntegers(e9.x ?? 0, e9.width ?? 0, e9.height ?? 0), this._core.registerDecoration(e9);
          }
          hasSelection() {
            return this._core.hasSelection();
          }
          select(e9, t9, i5) {
            this._verifyIntegers(e9, t9, i5), this._core.select(e9, t9, i5);
          }
          getSelection() {
            return this._core.getSelection();
          }
          getSelectionPosition() {
            return this._core.getSelectionPosition();
          }
          clearSelection() {
            this._core.clearSelection();
          }
          selectAll() {
            this._core.selectAll();
          }
          selectLines(e9, t9) {
            this._verifyIntegers(e9, t9), this._core.selectLines(e9, t9);
          }
          dispose() {
            super.dispose();
          }
          scrollLines(e9) {
            this._verifyIntegers(e9), this._core.scrollLines(e9);
          }
          scrollPages(e9) {
            this._verifyIntegers(e9), this._core.scrollPages(e9);
          }
          scrollToTop() {
            this._core.scrollToTop();
          }
          scrollToBottom() {
            this._core.scrollToBottom();
          }
          scrollToLine(e9) {
            this._verifyIntegers(e9), this._core.scrollToLine(e9);
          }
          clear() {
            this._core.clear();
          }
          write(e9, t9) {
            this._core.write(e9, t9);
          }
          writeln(e9, t9) {
            this._core.write(e9), this._core.write("\r\n", t9);
          }
          paste(e9) {
            this._core.paste(e9);
          }
          refresh(e9, t9) {
            this._verifyIntegers(e9, t9), this._core.refresh(e9, t9);
          }
          reset() {
            this._core.reset();
          }
          clearTextureAtlas() {
            this._core.clearTextureAtlas();
          }
          loadAddon(e9) {
            this._addonManager.loadAddon(this, e9);
          }
          static get strings() {
            return t8;
          }
          _verifyIntegers(...e9) {
            for (const t9 of e9)
              if (t9 === 1 / 0 || isNaN(t9) || t9 % 1 != 0)
                throw new Error("This API only accepts integers");
          }
          _verifyPositiveIntegers(...e9) {
            for (const t9 of e9)
              if (t9 && (t9 === 1 / 0 || isNaN(t9) || t9 % 1 != 0 || t9 < 0))
                throw new Error("This API only accepts positive integers");
          }
        }
        e8.Terminal = d3;
      })(), s7;
    })());
  }
});

// node_modules/@xterm/addon-fit/lib/addon-fit.js
var require_addon_fit = __commonJS({
  "node_modules/@xterm/addon-fit/lib/addon-fit.js"(exports, module) {
    !function(e7, t7) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t7() : "function" == typeof define && define.amd ? define([], t7) : "object" == typeof exports ? exports.FitAddon = t7() : e7.FitAddon = t7();
    }(self, () => (() => {
      "use strict";
      var e7 = {};
      return (() => {
        var t7 = e7;
        Object.defineProperty(t7, "__esModule", { value: true }), t7.FitAddon = void 0, t7.FitAddon = class {
          activate(e8) {
            this._terminal = e8;
          }
          dispose() {
          }
          fit() {
            const e8 = this.proposeDimensions();
            if (!e8 || !this._terminal || isNaN(e8.cols) || isNaN(e8.rows))
              return;
            const t8 = this._terminal._core;
            this._terminal.rows === e8.rows && this._terminal.cols === e8.cols || (t8._renderService.clear(), this._terminal.resize(e8.cols, e8.rows));
          }
          proposeDimensions() {
            if (!this._terminal)
              return;
            if (!this._terminal.element || !this._terminal.element.parentElement)
              return;
            const e8 = this._terminal._core, t8 = e8._renderService.dimensions;
            if (0 === t8.css.cell.width || 0 === t8.css.cell.height)
              return;
            const r4 = 0 === this._terminal.options.scrollback ? 0 : e8.viewport.scrollBarWidth, i4 = window.getComputedStyle(this._terminal.element.parentElement), o7 = parseInt(i4.getPropertyValue("height")), s7 = Math.max(0, parseInt(i4.getPropertyValue("width"))), n8 = window.getComputedStyle(this._terminal.element), l5 = o7 - (parseInt(n8.getPropertyValue("padding-top")) + parseInt(n8.getPropertyValue("padding-bottom"))), a3 = s7 - (parseInt(n8.getPropertyValue("padding-right")) + parseInt(n8.getPropertyValue("padding-left"))) - r4;
            return { cols: Math.max(2, Math.floor(a3 / t8.css.cell.width)), rows: Math.max(1, Math.floor(l5 / t8.css.cell.height)) };
          }
        };
      })(), e7;
    })());
  }
});

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
var EventShim = (_a = class Event2 {
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
var CustomEventShim = (_b = class CustomEvent2 extends EventShim {
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
  constructor(t7, e7, n8) {
    if (this._$cssResult$ = true, n8 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t7, this.t = e7;
  }
  get styleSheet() {
    let t7 = this.o;
    const s7 = this.t;
    if (e && void 0 === t7) {
      const e7 = void 0 !== s7 && 1 === s7.length;
      e7 && (t7 = n.get(s7)), void 0 === t7 && ((this.o = t7 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && n.set(s7, t7));
    }
    return t7;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t7) => new o("string" == typeof t7 ? t7 : t7 + "", void 0, s);
var i = (t7, ...e7) => {
  const n8 = 1 === t7.length ? t7[0] : e7.reduce((e8, s7, n9) => e8 + ((t8) => {
    if (true === t8._$cssResult$)
      return t8.cssText;
    if ("number" == typeof t8)
      return t8;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t8 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s7) + t7[n9 + 1], t7[0]);
  return new o(n8, t7, s);
};
var S = (s7, n8) => {
  e ? s7.adoptedStyleSheets = n8.map((t7) => t7 instanceof CSSStyleSheet ? t7 : t7.styleSheet) : n8.forEach((e7) => {
    const n9 = document.createElement("style"), o7 = t.litNonce;
    void 0 !== o7 && n9.setAttribute("nonce", o7), n9.textContent = e7.cssText, s7.appendChild(n9);
  });
};
var c = e || void 0 === t.CSSStyleSheet ? (t7) => t7 : (t7) => t7 instanceof CSSStyleSheet ? ((t8) => {
  let e7 = "";
  for (const s7 of t8.cssRules)
    e7 += s7.cssText;
  return r(e7);
})(t7) : t7;

// node_modules/@lit/reactive-element/node/reactive-element.js
var r2;
var h;
var o2 = globalThis;
null !== (r2 = o2.customElements) && void 0 !== r2 || (o2.customElements = customElements2);
var n2 = o2.trustedTypes;
var l = n2 ? n2.emptyScript : "";
var a = o2.reactiveElementPolyfillSupport;
var d = { toAttribute(t7, i4) {
  switch (i4) {
    case Boolean:
      t7 = t7 ? l : null;
      break;
    case Object:
    case Array:
      t7 = null == t7 ? t7 : JSON.stringify(t7);
  }
  return t7;
}, fromAttribute(t7, i4) {
  let s7 = t7;
  switch (i4) {
    case Boolean:
      s7 = null !== t7;
      break;
    case Number:
      s7 = null === t7 ? null : Number(t7);
      break;
    case Object:
    case Array:
      try {
        s7 = JSON.parse(t7);
      } catch (t8) {
        s7 = null;
      }
  }
  return s7;
} };
var u = (t7, i4) => i4 !== t7 && (i4 == i4 || t7 == t7);
var c2 = { attribute: true, type: String, converter: d, reflect: false, hasChanged: u };
var v = "finalized";
var p = class extends (globalThis.HTMLElement ?? HTMLElementShimWithRealType) {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t7) {
    var i4;
    this.finalize(), (null !== (i4 = this.h) && void 0 !== i4 ? i4 : this.h = []).push(t7);
  }
  static get observedAttributes() {
    this.finalize();
    const t7 = [];
    return this.elementProperties.forEach((i4, s7) => {
      const e7 = this._$Ep(s7, i4);
      void 0 !== e7 && (this._$Ev.set(e7, s7), t7.push(e7));
    }), t7;
  }
  static createProperty(t7, i4 = c2) {
    if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t7, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t7)) {
      const s7 = "symbol" == typeof t7 ? Symbol() : "__" + t7, e7 = this.getPropertyDescriptor(t7, s7, i4);
      void 0 !== e7 && Object.defineProperty(this.prototype, t7, e7);
    }
  }
  static getPropertyDescriptor(t7, i4, s7) {
    return { get() {
      return this[i4];
    }, set(e7) {
      const r4 = this[t7];
      this[i4] = e7, this.requestUpdate(t7, r4, s7);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t7) {
    return this.elementProperties.get(t7) || c2;
  }
  static finalize() {
    if (this.hasOwnProperty(v))
      return false;
    this[v] = true;
    const t7 = Object.getPrototypeOf(this);
    if (t7.finalize(), void 0 !== t7.h && (this.h = [...t7.h]), this.elementProperties = new Map(t7.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t8 = this.properties, i4 = [...Object.getOwnPropertyNames(t8), ...Object.getOwnPropertySymbols(t8)];
      for (const s7 of i4)
        this.createProperty(s7, t8[s7]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(t7) {
    const i4 = [];
    if (Array.isArray(t7)) {
      const e7 = new Set(t7.flat(1 / 0).reverse());
      for (const t8 of e7)
        i4.unshift(c(t8));
    } else
      void 0 !== t7 && i4.push(c(t7));
    return i4;
  }
  static _$Ep(t7, i4) {
    const s7 = i4.attribute;
    return false === s7 ? void 0 : "string" == typeof s7 ? s7 : "string" == typeof t7 ? t7.toLowerCase() : void 0;
  }
  _$Eu() {
    var t7;
    this._$E_ = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t7 = this.constructor.h) || void 0 === t7 || t7.forEach((t8) => t8(this));
  }
  addController(t7) {
    var i4, s7;
    (null !== (i4 = this._$ES) && void 0 !== i4 ? i4 : this._$ES = []).push(t7), void 0 !== this.renderRoot && this.isConnected && (null === (s7 = t7.hostConnected) || void 0 === s7 || s7.call(t7));
  }
  removeController(t7) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.splice(this._$ES.indexOf(t7) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t7, i4) => {
      this.hasOwnProperty(i4) && (this._$Ei.set(i4, this[i4]), delete this[i4]);
    });
  }
  createRenderRoot() {
    var t7;
    const i4 = null !== (t7 = this.shadowRoot) && void 0 !== t7 ? t7 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(i4, this.constructor.elementStyles), i4;
  }
  connectedCallback() {
    var t7;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
      var i4;
      return null === (i4 = t8.hostConnected) || void 0 === i4 ? void 0 : i4.call(t8);
    });
  }
  enableUpdating(t7) {
  }
  disconnectedCallback() {
    var t7;
    null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
      var i4;
      return null === (i4 = t8.hostDisconnected) || void 0 === i4 ? void 0 : i4.call(t8);
    });
  }
  attributeChangedCallback(t7, i4, s7) {
    this._$AK(t7, s7);
  }
  _$EO(t7, i4, s7 = c2) {
    var e7;
    const r4 = this.constructor._$Ep(t7, s7);
    if (void 0 !== r4 && true === s7.reflect) {
      const h3 = (void 0 !== (null === (e7 = s7.converter) || void 0 === e7 ? void 0 : e7.toAttribute) ? s7.converter : d).toAttribute(i4, s7.type);
      this._$El = t7, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
    }
  }
  _$AK(t7, i4) {
    var s7;
    const e7 = this.constructor, r4 = e7._$Ev.get(t7);
    if (void 0 !== r4 && this._$El !== r4) {
      const t8 = e7.getPropertyOptions(r4), h3 = "function" == typeof t8.converter ? { fromAttribute: t8.converter } : void 0 !== (null === (s7 = t8.converter) || void 0 === s7 ? void 0 : s7.fromAttribute) ? t8.converter : d;
      this._$El = r4, this[r4] = h3.fromAttribute(i4, t8.type), this._$El = null;
    }
  }
  requestUpdate(t7, i4, s7) {
    let e7 = true;
    void 0 !== t7 && (((s7 = s7 || this.constructor.getPropertyOptions(t7)).hasChanged || u)(this[t7], i4) ? (this._$AL.has(t7) || this._$AL.set(t7, i4), true === s7.reflect && this._$El !== t7 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t7, s7))) : e7 = false), !this.isUpdatePending && e7 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t8) {
      Promise.reject(t8);
    }
    const t7 = this.scheduleUpdate();
    return null != t7 && await t7, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t7;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t8, i5) => this[i5] = t8), this._$Ei = void 0);
    let i4 = false;
    const s7 = this._$AL;
    try {
      i4 = this.shouldUpdate(s7), i4 ? (this.willUpdate(s7), null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
        var i5;
        return null === (i5 = t8.hostUpdate) || void 0 === i5 ? void 0 : i5.call(t8);
      }), this.update(s7)) : this._$Ek();
    } catch (t8) {
      throw i4 = false, this._$Ek(), t8;
    }
    i4 && this._$AE(s7);
  }
  willUpdate(t7) {
  }
  _$AE(t7) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.forEach((t8) => {
      var i5;
      return null === (i5 = t8.hostUpdated) || void 0 === i5 ? void 0 : i5.call(t8);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t7)), this.updated(t7);
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
  shouldUpdate(t7) {
    return true;
  }
  update(t7) {
    void 0 !== this._$EC && (this._$EC.forEach((t8, i4) => this._$EO(i4, this[i4], t8)), this._$EC = void 0), this._$Ek();
  }
  updated(t7) {
  }
  firstUpdated(t7) {
  }
};
p[v] = true, p.elementProperties = /* @__PURE__ */ new Map(), p.elementStyles = [], p.shadowRootOptions = { mode: "open" }, null == a || a({ ReactiveElement: p }), (null !== (h = o2.reactiveElementVersions) && void 0 !== h ? h : o2.reactiveElementVersions = []).push("1.6.3");

// node_modules/lit-html/node/lit-html.js
var t2;
var i2 = globalThis;
var s2 = i2.trustedTypes;
var e2 = s2 ? s2.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0;
var o3 = "$lit$";
var n3 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n3;
var h2 = `<${l2}>`;
var r3 = void 0 === i2.document ? { createTreeWalker: () => ({}) } : document;
var u2 = () => r3.createComment("");
var d2 = (t7) => null === t7 || "object" != typeof t7 && "function" != typeof t7;
var c3 = Array.isArray;
var v2 = (t7) => c3(t7) || "function" == typeof (null == t7 ? void 0 : t7[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var x = (t7) => (i4, ...s7) => ({ _$litType$: t7, strings: i4, values: s7 });
var T = x(1);
var b = x(2);
var w = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
function P(t7, i4) {
  if (!Array.isArray(t7) || !t7.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e2 ? e2.createHTML(i4) : i4;
}
var V = (t7, i4) => {
  const s7 = t7.length - 1, e7 = [];
  let l5, r4 = 2 === i4 ? "<svg>" : "", u3 = f;
  for (let i5 = 0; i5 < s7; i5++) {
    const s8 = t7[i5];
    let d3, c4, v3 = -1, a3 = 0;
    for (; a3 < s8.length && (u3.lastIndex = a3, c4 = u3.exec(s8), null !== c4); )
      a3 = u3.lastIndex, u3 === f ? "!--" === c4[1] ? u3 = _ : void 0 !== c4[1] ? u3 = m : void 0 !== c4[2] ? (y.test(c4[2]) && (l5 = RegExp("</" + c4[2], "g")), u3 = p2) : void 0 !== c4[3] && (u3 = p2) : u3 === p2 ? ">" === c4[0] ? (u3 = null != l5 ? l5 : f, v3 = -1) : void 0 === c4[1] ? v3 = -2 : (v3 = u3.lastIndex - c4[2].length, d3 = c4[1], u3 = void 0 === c4[3] ? p2 : '"' === c4[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p2 : u3 === _ || u3 === m ? u3 = f : (u3 = p2, l5 = void 0);
    const x2 = u3 === p2 && t7[i5 + 1].startsWith("/>") ? " " : "";
    r4 += u3 === f ? s8 + h2 : v3 >= 0 ? (e7.push(d3), s8.slice(0, v3) + o3 + s8.slice(v3) + n3 + x2) : s8 + n3 + (-2 === v3 ? (e7.push(void 0), i5) : x2);
  }
  return [P(t7, r4 + (t7[s7] || "<?>") + (2 === i4 ? "</svg>" : "")), e7];
};
var N = class _N {
  constructor({ strings: t7, _$litType$: i4 }, e7) {
    let h3;
    this.parts = [];
    let r4 = 0, d3 = 0;
    const c4 = t7.length - 1, v3 = this.parts, [a3, f2] = V(t7, i4);
    if (this.el = _N.createElement(a3, e7), C.currentNode = this.el.content, 2 === i4) {
      const t8 = this.el.content, i5 = t8.firstChild;
      i5.remove(), t8.append(...i5.childNodes);
    }
    for (; null !== (h3 = C.nextNode()) && v3.length < c4; ) {
      if (1 === h3.nodeType) {
        if (h3.hasAttributes()) {
          const t8 = [];
          for (const i5 of h3.getAttributeNames())
            if (i5.endsWith(o3) || i5.startsWith(n3)) {
              const s7 = f2[d3++];
              if (t8.push(i5), void 0 !== s7) {
                const t9 = h3.getAttribute(s7.toLowerCase() + o3).split(n3), i6 = /([.?@])?(.*)/.exec(s7);
                v3.push({ type: 1, index: r4, name: i6[2], strings: t9, ctor: "." === i6[1] ? H : "?" === i6[1] ? L : "@" === i6[1] ? z : R });
              } else
                v3.push({ type: 6, index: r4 });
            }
          for (const i5 of t8)
            h3.removeAttribute(i5);
        }
        if (y.test(h3.tagName)) {
          const t8 = h3.textContent.split(n3), i5 = t8.length - 1;
          if (i5 > 0) {
            h3.textContent = s2 ? s2.emptyScript : "";
            for (let s7 = 0; s7 < i5; s7++)
              h3.append(t8[s7], u2()), C.nextNode(), v3.push({ type: 2, index: ++r4 });
            h3.append(t8[i5], u2());
          }
        }
      } else if (8 === h3.nodeType)
        if (h3.data === l2)
          v3.push({ type: 2, index: r4 });
        else {
          let t8 = -1;
          for (; -1 !== (t8 = h3.data.indexOf(n3, t8 + 1)); )
            v3.push({ type: 7, index: r4 }), t8 += n3.length - 1;
        }
      r4++;
    }
  }
  static createElement(t7, i4) {
    const s7 = r3.createElement("template");
    return s7.innerHTML = t7, s7;
  }
};
function S2(t7, i4, s7 = t7, e7) {
  var o7, n8, l5, h3;
  if (i4 === w)
    return i4;
  let r4 = void 0 !== e7 ? null === (o7 = s7._$Co) || void 0 === o7 ? void 0 : o7[e7] : s7._$Cl;
  const u3 = d2(i4) ? void 0 : i4._$litDirective$;
  return (null == r4 ? void 0 : r4.constructor) !== u3 && (null === (n8 = null == r4 ? void 0 : r4._$AO) || void 0 === n8 || n8.call(r4, false), void 0 === u3 ? r4 = void 0 : (r4 = new u3(t7), r4._$AT(t7, s7, e7)), void 0 !== e7 ? (null !== (l5 = (h3 = s7)._$Co) && void 0 !== l5 ? l5 : h3._$Co = [])[e7] = r4 : s7._$Cl = r4), void 0 !== r4 && (i4 = S2(t7, r4._$AS(t7, i4.values), r4, e7)), i4;
}
var M = class {
  constructor(t7, i4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t7) {
    var i4;
    const { el: { content: s7 }, parts: e7 } = this._$AD, o7 = (null !== (i4 = null == t7 ? void 0 : t7.creationScope) && void 0 !== i4 ? i4 : r3).importNode(s7, true);
    C.currentNode = o7;
    let n8 = C.nextNode(), l5 = 0, h3 = 0, u3 = e7[0];
    for (; void 0 !== u3; ) {
      if (l5 === u3.index) {
        let i5;
        2 === u3.type ? i5 = new k(n8, n8.nextSibling, this, t7) : 1 === u3.type ? i5 = new u3.ctor(n8, u3.name, u3.strings, this, t7) : 6 === u3.type && (i5 = new W(n8, this, t7)), this._$AV.push(i5), u3 = e7[++h3];
      }
      l5 !== (null == u3 ? void 0 : u3.index) && (n8 = C.nextNode(), l5++);
    }
    return C.currentNode = r3, o7;
  }
  v(t7) {
    let i4 = 0;
    for (const s7 of this._$AV)
      void 0 !== s7 && (void 0 !== s7.strings ? (s7._$AI(t7, s7, i4), i4 += s7.strings.length - 2) : s7._$AI(t7[i4])), i4++;
  }
};
var k = class _k {
  constructor(t7, i4, s7, e7) {
    var o7;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t7, this._$AB = i4, this._$AM = s7, this.options = e7, this._$Cp = null === (o7 = null == e7 ? void 0 : e7.isConnected) || void 0 === o7 || o7;
  }
  get _$AU() {
    var t7, i4;
    return null !== (i4 = null === (t7 = this._$AM) || void 0 === t7 ? void 0 : t7._$AU) && void 0 !== i4 ? i4 : this._$Cp;
  }
  get parentNode() {
    let t7 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === (null == t7 ? void 0 : t7.nodeType) && (t7 = i4.parentNode), t7;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t7, i4 = this) {
    t7 = S2(this, t7, i4), d2(t7) ? t7 === A || null == t7 || "" === t7 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t7 !== this._$AH && t7 !== w && this._(t7) : void 0 !== t7._$litType$ ? this.g(t7) : void 0 !== t7.nodeType ? this.$(t7) : v2(t7) ? this.T(t7) : this._(t7);
  }
  k(t7) {
    return this._$AA.parentNode.insertBefore(t7, this._$AB);
  }
  $(t7) {
    this._$AH !== t7 && (this._$AR(), this._$AH = this.k(t7));
  }
  _(t7) {
    this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t7 : this.$(r3.createTextNode(t7)), this._$AH = t7;
  }
  g(t7) {
    var i4;
    const { values: s7, _$litType$: e7 } = t7, o7 = "number" == typeof e7 ? this._$AC(t7) : (void 0 === e7.el && (e7.el = N.createElement(P(e7.h, e7.h[0]), this.options)), e7);
    if ((null === (i4 = this._$AH) || void 0 === i4 ? void 0 : i4._$AD) === o7)
      this._$AH.v(s7);
    else {
      const t8 = new M(o7, this), i5 = t8.u(this.options);
      t8.v(s7), this.$(i5), this._$AH = t8;
    }
  }
  _$AC(t7) {
    let i4 = E.get(t7.strings);
    return void 0 === i4 && E.set(t7.strings, i4 = new N(t7)), i4;
  }
  T(t7) {
    c3(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s7, e7 = 0;
    for (const o7 of t7)
      e7 === i4.length ? i4.push(s7 = new _k(this.k(u2()), this.k(u2()), this, this.options)) : s7 = i4[e7], s7._$AI(o7), e7++;
    e7 < i4.length && (this._$AR(s7 && s7._$AB.nextSibling, e7), i4.length = e7);
  }
  _$AR(t7 = this._$AA.nextSibling, i4) {
    var s7;
    for (null === (s7 = this._$AP) || void 0 === s7 || s7.call(this, false, true, i4); t7 && t7 !== this._$AB; ) {
      const i5 = t7.nextSibling;
      t7.remove(), t7 = i5;
    }
  }
  setConnected(t7) {
    var i4;
    void 0 === this._$AM && (this._$Cp = t7, null === (i4 = this._$AP) || void 0 === i4 || i4.call(this, t7));
  }
};
var R = class {
  constructor(t7, i4, s7, e7, o7) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t7, this.name = i4, this._$AM = e7, this.options = o7, s7.length > 2 || "" !== s7[0] || "" !== s7[1] ? (this._$AH = Array(s7.length - 1).fill(new String()), this.strings = s7) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t7, i4 = this, s7, e7) {
    const o7 = this.strings;
    let n8 = false;
    if (void 0 === o7)
      t7 = S2(this, t7, i4, 0), n8 = !d2(t7) || t7 !== this._$AH && t7 !== w, n8 && (this._$AH = t7);
    else {
      const e8 = t7;
      let l5, h3;
      for (t7 = o7[0], l5 = 0; l5 < o7.length - 1; l5++)
        h3 = S2(this, e8[s7 + l5], i4, l5), h3 === w && (h3 = this._$AH[l5]), n8 || (n8 = !d2(h3) || h3 !== this._$AH[l5]), h3 === A ? t7 = A : t7 !== A && (t7 += (null != h3 ? h3 : "") + o7[l5 + 1]), this._$AH[l5] = h3;
    }
    n8 && !e7 && this.j(t7);
  }
  j(t7) {
    t7 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t7 ? t7 : "");
  }
};
var H = class extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t7) {
    this.element[this.name] = t7 === A ? void 0 : t7;
  }
};
var I = s2 ? s2.emptyScript : "";
var L = class extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t7) {
    t7 && t7 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
var z = class extends R {
  constructor(t7, i4, s7, e7, o7) {
    super(t7, i4, s7, e7, o7), this.type = 5;
  }
  _$AI(t7, i4 = this) {
    var s7;
    if ((t7 = null !== (s7 = S2(this, t7, i4, 0)) && void 0 !== s7 ? s7 : A) === w)
      return;
    const e7 = this._$AH, o7 = t7 === A && e7 !== A || t7.capture !== e7.capture || t7.once !== e7.once || t7.passive !== e7.passive, n8 = t7 !== A && (e7 === A || o7);
    o7 && this.element.removeEventListener(this.name, this, e7), n8 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
  }
  handleEvent(t7) {
    var i4, s7;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s7 = null === (i4 = this.options) || void 0 === i4 ? void 0 : i4.host) && void 0 !== s7 ? s7 : this.element, t7) : this._$AH.handleEvent(t7);
  }
};
var W = class {
  constructor(t7, i4, s7) {
    this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s7;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t7) {
    S2(this, t7);
  }
};
var j = i2.litHtmlPolyfillSupport;
null == j || j(N, k), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
var B = (t7, i4, s7) => {
  var e7, o7;
  const n8 = null !== (e7 = null == s7 ? void 0 : s7.renderBefore) && void 0 !== e7 ? e7 : i4;
  let l5 = n8._$litPart$;
  if (void 0 === l5) {
    const t8 = null !== (o7 = null == s7 ? void 0 : s7.renderBefore) && void 0 !== o7 ? o7 : null;
    n8._$litPart$ = l5 = new k(i4.insertBefore(u2(), t8), t8, void 0, null != s7 ? s7 : {});
  }
  return l5._$AI(t7), l5;
};

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s3 = class extends p {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t7, e7;
    const i4 = super.createRenderRoot();
    return null !== (t7 = (e7 = this.renderOptions).renderBefore) && void 0 !== t7 || (e7.renderBefore = i4.firstChild), i4;
  }
  update(t7) {
    const i4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t7), this._$Do = B(i4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t7;
    super.connectedCallback(), null === (t7 = this._$Do) || void 0 === t7 || t7.setConnected(true);
  }
  disconnectedCallback() {
    var t7;
    super.disconnectedCallback(), null === (t7 = this._$Do) || void 0 === t7 || t7.setConnected(false);
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
var e3 = (e7) => (n8) => "function" == typeof n8 ? ((e8, n9) => (customElements.define(e8, n9), n9))(e7, n8) : ((e8, n9) => {
  const { kind: t7, elements: s7 } = n9;
  return { kind: t7, elements: s7, finisher(n10) {
    customElements.define(e8, n10);
  } };
})(e7, n8);

// node_modules/@lit/reactive-element/node/decorators/property.js
var i3 = (i4, e7) => "method" === e7.kind && e7.descriptor && !("value" in e7.descriptor) ? { ...e7, finisher(n8) {
  n8.createProperty(e7.key, i4);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e7.key, initializer() {
  "function" == typeof e7.initializer && (this[e7.key] = e7.initializer.call(this));
}, finisher(n8) {
  n8.createProperty(e7.key, i4);
} };
var e4 = (i4, e7, n8) => {
  e7.constructor.createProperty(n8, i4);
};
function n5(n8) {
  return (t7, o7) => void 0 !== o7 ? e4(n8, t7, o7) : i3(n8, t7);
}

// node_modules/@lit/reactive-element/node/decorators/state.js
function t3(t7) {
  return n5({ ...t7, state: true });
}

// node_modules/@lit/reactive-element/node/decorators/query-assigned-elements.js
var l4;
var n6 = null != (null === (l4 = globalThis.HTMLSlotElement) || void 0 === l4 ? void 0 : l4.prototype.assignedElements) ? (o7, l5) => o7.assignedElements(l5) : (o7, l5) => o7.assignedNodes(l5).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d3 = decorators[i4])
        r4 = (c4 < 3 ? d3(r4) : c4 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}

// node_modules/@lit-labs/context/lib/context-request-event.js
var s4 = class extends Event {
  constructor(s7, t7, e7) {
    super("context-request", { bubbles: true, composed: true }), this.context = s7, this.callback = t7, this.subscribe = e7;
  }
};

// node_modules/@lit-labs/context/lib/create-context.js
function n7(n8) {
  return n8;
}

// node_modules/@lit-labs/context/lib/controllers/context-consumer.js
var s5 = class {
  constructor(t7, s7, i4, h3) {
    var e7;
    if (this.subscribe = false, this.provided = false, this.value = void 0, this.t = (t8, s8) => {
      this.unsubscribe && (this.unsubscribe !== s8 && (this.provided = false, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = t8, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = true, this.callback && this.callback(t8, s8)), this.unsubscribe = s8;
    }, this.host = t7, void 0 !== s7.context) {
      const t8 = s7;
      this.context = t8.context, this.callback = t8.callback, this.subscribe = null !== (e7 = t8.subscribe) && void 0 !== e7 && e7;
    } else
      this.context = s7, this.callback = i4, this.subscribe = null != h3 && h3;
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new s4(this.context, this.t, this.subscribe));
  }
};

// node_modules/@lit-labs/context/lib/value-notifier.js
var t4 = class {
  constructor(t7) {
    this.disposers = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [t8, s7] of this.disposers)
        t8(this.o, s7);
    }, void 0 !== t7 && (this.value = t7);
  }
  get value() {
    return this.o;
  }
  set value(t7) {
    this.setValue(t7);
  }
  setValue(t7, s7 = false) {
    const i4 = s7 || !Object.is(t7, this.o);
    this.o = t7, i4 && this.updateObservers();
  }
  addCallback(t7, s7) {
    if (s7) {
      this.disposers.has(t7) || this.disposers.set(t7, () => {
        this.disposers.delete(t7);
      });
      const s8 = this.disposers.get(t7);
      t7(this.value, s8);
    } else
      t7(this.value);
  }
  clearCallbacks() {
    this.disposers.clear();
  }
};

// node_modules/@lit-labs/context/lib/controllers/context-provider.js
var s6 = class extends Event {
  constructor(t7) {
    super("context-provider", { bubbles: true, composed: true }), this.context = t7;
  }
};
var e6 = class extends t4 {
  constructor(t7, s7, e7) {
    super(void 0 !== s7.context ? s7.initialValue : e7), this.onContextRequest = (t8) => {
      t8.context === this.context && t8.composedPath()[0] !== this.host && (t8.stopPropagation(), this.addCallback(t8.callback, t8.subscribe));
    }, this.host = t7, void 0 !== s7.context ? this.context = s7.context : this.context = s7, this.attachListeners(), this.host.addController(this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new s6(this.context));
  }
};

// libs/shared/ui-components/dist/lib/contexts/editor-context.js
var editorContext = n7(Symbol("editor"));
var EditorContext = (superClass) => {
  class EditorContextElement extends superClass {
    constructor(...rest) {
      super();
      new s5(this, {
        context: editorContext,
        callback: (value) => {
          this.editor = value;
        },
        subscribe: true
      });
    }
  }
  __decorate([
    t3(),
    __metadata("design:type", String)
  ], EditorContextElement.prototype, "editor", void 0);
  return EditorContextElement;
};

// libs/shared/ui-components/dist/lib/components/badge.js
var Badge = class Badge2 extends EditorContext(s3) {
  render() {
    return T`
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
    `;
  }
  editorSpecificStyles() {
    if (this.editor === "intellij") {
      return "border border-fieldBorder focus:ring-2";
    } else {
      return "focus:ring-1 focus:!ring-offset-1 focus:!ring-offset-background";
    }
  }
  handleEnterKeyRemove(event) {
    if (event.key === "Enter" || event.key === " ") {
      this.dispatchEvent(new CustomEvent("remove"));
    }
  }
  handleClickRemove() {
    this.dispatchEvent(new CustomEvent("remove"));
  }
  createRenderRoot() {
    return this;
  }
};
__decorate([
  n5(),
  __metadata("design:type", String)
], Badge.prototype, "text", void 0);
__decorate([
  n5(),
  __metadata("design:type", String)
], Badge.prototype, "fieldId", void 0);
Badge = __decorate([
  e3("badge-element")
], Badge);

// libs/shared/ui-components/dist/lib/components/banner.js
var Banner = class Banner2 extends EditorContext(s3) {
  constructor() {
    super(...arguments);
    this.message = "";
    this.type = "warning";
    this.dismissed = false;
  }
  dismiss() {
    this.dismissed = true;
  }
  render() {
    const bannerClass = this.type === "error" ? "bg-bannerError" : "bg-bannerWarning";
    if (this.dismissed) {
      return T``;
    }
    return T`
      <div
        class="${bannerClass} text-bannerText mt-2 flex w-full flex-row rounded p-2 text-left opacity-80"
      >
        <p class="grow">${this.message}</p>
        <div @click="${this.dismiss}" class="px-2 py-1">
          ${this.editor === "intellij" ? T`<icon-element
                icon="close"
                color="${getComputedStyle(this).getPropertyValue("--banner-text-color")}"
              ></icon-element>` : T`<icon-element icon="close"></icon-element>`}
        </div>
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
};
__decorate([
  n5(),
  __metadata("design:type", Object)
], Banner.prototype, "message", void 0);
__decorate([
  n5(),
  __metadata("design:type", String)
], Banner.prototype, "type", void 0);
__decorate([
  t3(),
  __metadata("design:type", Object)
], Banner.prototype, "dismissed", void 0);
Banner = __decorate([
  e3("banner-element")
], Banner);

// libs/shared/ui-components/dist/lib/utils/ui-utils.js
var intellijFocusRing = "focus:ring-2 focus:ring-focusBorder focus:outline-none";

// libs/shared/ui-components/dist/lib/components/button.js
var Button = class Button2 extends EditorContext(s3) {
  constructor() {
    super(...arguments);
    this.appearance = "primary";
    this.applyFillColor = false;
    this.disabled = false;
  }
  render() {
    return this.editor === "vscode" ? this.renderVSCode() : this.renderIntellij();
  }
  renderVSCode() {
    if (this.appearance === "icon") {
      return T`
        <vscode-button
          icon="${this.text}"
          ?disabled="${this.disabled}"
          aria-disabled="${this.disabled}"
          style="
          --vscode-button-background: none;
          --vscode-button-foreground: ${this.color ?? "var(--foreground-color)"};
          --vscode-button-hoverBackground: var(--field-nav-hover-color);"
          class="h-[1.25rem] w-[1.25rem]"
        >
        </vscode-button>
      `;
    }
    return T`<vscode-button
      ?secondary="${this.appearance === "secondary"}"
      ?disabled="${this.disabled}"
      aria-disabled="${this.disabled}"
      >${this.text}</vscode-button
    >`;
  }
  renderIntellij() {
    if (this.appearance === "icon") {
      return T`<div
        class="${this.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-fieldNavHoverBackground cursor-pointer"} rounded p-1"
      >
        <icon-element
          icon="${this.text}"
          color="${this.color}"
          ?applyFillColor="${this.applyFillColor}"
          ?disabled="${this.disabled}"
          aria-disabled="${this.disabled}"
        ></icon-element>
      </div>`;
    }
    const baseClasses = "whitespace-nowrap rounded px-4 py-1 transition-colors";
    let buttonClasses = "";
    if (this.appearance === "primary") {
      buttonClasses = this.disabled ? "bg-primary/60 text-white/60 cursor-not-allowed" : "bg-primary text-white cursor-pointer hover:opacity-90 focus:!ring-offset-1 focus:!ring-offset-background";
    } else {
      buttonClasses = this.disabled ? "border !border-fieldBorder text-foreground/40 cursor-not-allowed" : "border !border-fieldBorder text-foreground cursor-pointer hover:opacity-90 focus:!border-focusBorder";
    }
    return T`<button
      class="${this.disabled ? "" : intellijFocusRing} ${baseClasses} ${buttonClasses}"
      ?disabled="${this.disabled}"
      aria-disabled="${this.disabled}"
    >
      ${this.text}
    </button>`;
  }
  createRenderRoot() {
    return this;
  }
};
__decorate([
  n5(),
  __metadata("design:type", String)
], Button.prototype, "text", void 0);
__decorate([
  n5(),
  __metadata("design:type", String)
], Button.prototype, "appearance", void 0);
__decorate([
  n5(),
  __metadata("design:type", String)
], Button.prototype, "color", void 0);
__decorate([
  n5({ type: Boolean }),
  __metadata("design:type", Object)
], Button.prototype, "applyFillColor", void 0);
__decorate([
  n5({ type: Boolean }),
  __metadata("design:type", Object)
], Button.prototype, "disabled", void 0);
Button = __decorate([
  e3("button-element")
], Button);

// libs/shared/ui-components/dist/lib/components/icon.js
var Icon = class Icon2 extends EditorContext(s3) {
  constructor() {
    super(...arguments);
    this.color = "";
    this.applyFillColor = false;
    this.size = "";
  }
  render() {
    if (this.editor === "intellij") {
      return T`<img
        src="./icons/${this.icon}.svg"
        class="h-[${this.size ?? "1.25rem"}]"
        @load="${this.applyColorToSVG}"
      ></img>`;
    } else {
      let spanStyle = "text-align: center;";
      if (this.size) {
        spanStyle += ` font-size: ${this.size};`;
      } else {
        spanStyle += " font-size: 0.9rem;";
      }
      spanStyle += ` color: ${this.color};`;
      return T`<span
        class="codicon codicon-${this.icon}"
        style="${spanStyle}"
      ></span>`;
    }
  }
  // we have to parse the svg file and forcefully update the color for intellij
  async applyColorToSVG() {
    if (!this.color) {
      return;
    }
    const svgResponse = await fetch(`./icons/${this.icon}.svg`);
    const svgData = await svgResponse.text();
    const parser = new DOMParser();
    const parsedSvg = parser.parseFromString(svgData, "image/svg+xml");
    const allPaths = parsedSvg.querySelectorAll("path");
    allPaths.forEach((path) => {
      if (this.applyFillColor) {
        path.setAttribute("fill", this.color);
      }
      path.setAttribute("stroke", this.color);
    });
    const imgElement = this.querySelector("img");
    if (imgElement) {
      imgElement.remove();
    }
    parsedSvg.documentElement.classList.add("h-[1.25rem]");
    this.appendChild(parsedSvg.documentElement);
  }
  createRenderRoot() {
    return this;
  }
};
__decorate([
  n5(),
  __metadata("design:type", String)
], Icon.prototype, "icon", void 0);
__decorate([
  n5(),
  __metadata("design:type", Object)
], Icon.prototype, "color", void 0);
__decorate([
  n5({ type: Boolean }),
  __metadata("design:type", Object)
], Icon.prototype, "applyFillColor", void 0);
__decorate([
  n5(),
  __metadata("design:type", Object)
], Icon.prototype, "size", void 0);
Icon = __decorate([
  e3("icon-element")
], Icon);

// libs/shared/cloud-fix-webview/src/terminal-component.ts
var import_xterm = __toESM(require_xterm());
var import_addon_fit = __toESM(require_addon_fit());
var TerminalComponent = class extends s3 {
  constructor() {
    super(...arguments);
    this.content = "";
    this.rows = 20;
    this.cols = 80;
    this.terminal = null;
    this.fitAddon = null;
    this.resizeObserver = null;
    this.themeObserver = null;
  }
  render() {
    return T`<div id="terminal-container"></div>`;
  }
  firstUpdated() {
    this.initializeTerminal();
  }
  updated(changedProperties) {
    if (changedProperties.has("content") && this.terminal) {
      this.updateContent();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.terminal) {
      this.terminal.dispose();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }
  initializeTerminal() {
    const container = this.shadowRoot?.getElementById("terminal-container");
    if (!container)
      return;
    this.createTerminalWithTheme();
    this.terminal.open(container);
    this.setupResizeObserver();
    this.setupThemeObserver();
    setTimeout(() => {
      this.fitTerminal();
      if (this.content) {
        this.updateContent();
      }
    }, 100);
  }
  createTerminalWithTheme() {
    const isDarkTheme = this.isDarkTheme();
    const theme = isDarkTheme ? this.getDarkTheme() : this.getLightTheme();
    this.terminal = new import_xterm.Terminal({
      theme,
      rows: this.rows,
      cols: this.cols,
      lineHeight: 1.5,
      scrollback: 5e3,
      convertEol: true,
      cursorBlink: false,
      cursorStyle: "block",
      cursorInactiveStyle: "none"
    });
    this.fitAddon = new import_addon_fit.FitAddon();
    this.terminal.loadAddon(this.fitAddon);
  }
  isDarkTheme() {
    const computedStyle = getComputedStyle(this);
    const bgColor = computedStyle.getPropertyValue("--vscode-editor-background") || "#1e1e1e";
    const rgb = this.parseColor(bgColor);
    if (rgb) {
      const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
      return luminance < 0.5;
    }
    return true;
  }
  parseColor(color) {
    const hexMatch = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (hexMatch) {
      return {
        r: parseInt(hexMatch[1], 16),
        g: parseInt(hexMatch[2], 16),
        b: parseInt(hexMatch[3], 16)
      };
    }
    const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[1]),
        g: parseInt(rgbMatch[2]),
        b: parseInt(rgbMatch[3])
      };
    }
    return null;
  }
  getDarkTheme() {
    const computedStyle = getComputedStyle(this);
    return {
      background: computedStyle.getPropertyValue("--vscode-panel-background") || "#1e1e1e",
      foreground: computedStyle.getPropertyValue("--vscode-terminal-foreground") || "#cccccc",
      cursor: computedStyle.getPropertyValue("--vscode-terminalCursor-foreground") || "#cccccc",
      selectionBackground: computedStyle.getPropertyValue(
        "--vscode-terminal-selectionBackground"
      ) || "#264f78",
      black: computedStyle.getPropertyValue("--vscode-terminal-ansiBlack") || "#000000",
      red: computedStyle.getPropertyValue("--vscode-terminal-ansiRed") || "#cd3131",
      green: computedStyle.getPropertyValue("--vscode-terminal-ansiGreen") || "#0dbc79",
      yellow: computedStyle.getPropertyValue("--vscode-terminal-ansiYellow") || "#e5e510",
      blue: computedStyle.getPropertyValue("--vscode-terminal-ansiBlue") || "#2472c8",
      magenta: computedStyle.getPropertyValue("--vscode-terminal-ansiMagenta") || "#bc3fbc",
      cyan: computedStyle.getPropertyValue("--vscode-terminal-ansiCyan") || "#11a8cd",
      white: computedStyle.getPropertyValue("--vscode-terminal-ansiWhite") || "#e5e5e5",
      brightBlack: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightBlack") || "#666666",
      brightRed: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightRed") || "#f14c4c",
      brightGreen: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightGreen") || "#23d18b",
      brightYellow: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightYellow") || "#f5f543",
      brightBlue: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightBlue") || "#3b8eea",
      brightMagenta: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightMagenta") || "#d670d6",
      brightCyan: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightCyan") || "#29b8db",
      brightWhite: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightWhite") || "#e5e5e5"
    };
  }
  getLightTheme() {
    const computedStyle = getComputedStyle(this);
    return {
      background: computedStyle.getPropertyValue("--vscode-panel-background") || "#ffffff",
      foreground: computedStyle.getPropertyValue("--vscode-terminal-foreground") || "#333333",
      cursor: computedStyle.getPropertyValue("--vscode-terminalCursor-foreground") || "#333333",
      selectionBackground: computedStyle.getPropertyValue(
        "--vscode-terminal-selectionBackground"
      ) || "#add6ff",
      black: computedStyle.getPropertyValue("--vscode-terminal-ansiBlack") || "#000000",
      red: computedStyle.getPropertyValue("--vscode-terminal-ansiRed") || "#cd3131",
      green: computedStyle.getPropertyValue("--vscode-terminal-ansiGreen") || "#00bc00",
      yellow: computedStyle.getPropertyValue("--vscode-terminal-ansiYellow") || "#949800",
      blue: computedStyle.getPropertyValue("--vscode-terminal-ansiBlue") || "#0451a5",
      magenta: computedStyle.getPropertyValue("--vscode-terminal-ansiMagenta") || "#bc05bc",
      cyan: computedStyle.getPropertyValue("--vscode-terminal-ansiCyan") || "#0598bc",
      white: computedStyle.getPropertyValue("--vscode-terminal-ansiWhite") || "#555555",
      brightBlack: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightBlack") || "#666666",
      brightRed: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightRed") || "#cd3131",
      brightGreen: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightGreen") || "#14ce14",
      brightYellow: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightYellow") || "#b5ba00",
      brightBlue: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightBlue") || "#0451a5",
      brightMagenta: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightMagenta") || "#bc05bc",
      brightCyan: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightCyan") || "#0598bc",
      brightWhite: computedStyle.getPropertyValue("--vscode-terminal-ansiBrightWhite") || "#a5a5a5"
    };
  }
  setupThemeObserver() {
    this.themeObserver = new MutationObserver(() => {
      this.updateTerminalTheme();
    });
    if (document.body) {
      this.themeObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["class", "data-vscode-theme-kind"]
      });
    }
    const hostObserver = new MutationObserver(() => {
      this.updateTerminalTheme();
    });
    hostObserver.observe(this, {
      attributes: true,
      attributeFilter: ["style"]
    });
  }
  updateTerminalTheme() {
    if (!this.terminal)
      return;
    const isDarkTheme = this.isDarkTheme();
    const theme = isDarkTheme ? this.getDarkTheme() : this.getLightTheme();
    this.terminal.options.theme = theme;
    this.terminal.refresh(0, this.terminal.rows - 1);
  }
  setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      if (this.terminal) {
        this.fitTerminal();
      }
    });
    this.resizeObserver.observe(this);
  }
  fitTerminal() {
    if (!this.fitAddon)
      return;
    this.fitAddon.fit();
  }
  updateContent() {
    if (!this.terminal || !this.content)
      return;
    this.terminal.clear();
    this.terminal.write(this.content);
  }
};
TerminalComponent.styles = i`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 300px;
      background-color: var(--vscode-panel-background, #1e1e1e);
      color: var(--vscode-terminal-foreground, #cccccc);
      font-family: var(
        --vscode-editor-font-family,
        'Menlo',
        'Monaco',
        'Courier New',
        monospace
      ) !important;
      font-size: var(--vscode-editor-font-size) !important;
    }

    .xterm-rows {
      font-size: var(--vscode-editor-font-size) !important;
    }

    #terminal-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      padding: 10px 20px;
    }

    .xterm {
      height: 100%;
      cursor: text;
      position: relative;
      user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
    }

    .xterm.focus,
    .xterm:focus {
      outline: none;
    }

    .xterm .xterm-helpers {
      position: absolute;
      top: 0;
      /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
      z-index: 5;
    }

    .xterm .xterm-helper-textarea {
      padding: 0;
      border: 0;
      margin: 0;
      /* Move textarea out of the screen to the far left, so that the cursor is not visible */
      position: absolute;
      opacity: 0;
      left: -9999em;
      top: 0;
      width: 0;
      height: 0;
      z-index: -5;
      /** Prevent wrapping so the IME appears against the textarea at the correct position */
      white-space: nowrap;
      overflow: hidden;
      resize: none;
    }

    .xterm .composition-view {
      /* TODO: Composition position got messed up somewhere */
      background: #000;
      color: #fff;
      display: none;
      position: absolute;
      white-space: nowrap;
      z-index: 1;
    }

    .xterm .composition-view.active {
      display: block;
    }

    .xterm .xterm-viewport {
      /* On OS X this is required in order for the scroll bar to appear fully opaque */
      background-color: #000;
      overflow-y: scroll;
      cursor: default;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100% !important;
    }

    .xterm .xterm-screen {
      position: relative;
      height: 100%;
    }

    .xterm .xterm-screen canvas {
      position: absolute;
      left: 0;
      top: 0;
    }

    .xterm-char-measure-element {
      display: inline-block;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: -9999em;
      line-height: normal;
    }

    .xterm.enable-mouse-events {
      /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
      cursor: default;
    }

    .xterm.xterm-cursor-pointer,
    .xterm .xterm-cursor-pointer {
      cursor: pointer;
    }

    .xterm.column-select.focus {
      /* Column selection mode */
      cursor: crosshair;
    }

    .xterm .xterm-accessibility:not(.debug),
    .xterm .xterm-message {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 10;
      color: transparent;
      pointer-events: none;
    }

    .xterm .xterm-accessibility-tree:not(.debug) *::selection {
      color: transparent;
    }

    .xterm .xterm-accessibility-tree {
      font-family: monospace;
      user-select: text;
      white-space: pre;
    }

    .xterm .xterm-accessibility-tree > div {
      transform-origin: left;
      width: fit-content;
    }

    .xterm .live-region {
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    .xterm-dim {
      /* Dim should not apply to background, so the opacity of the foreground color is applied
     * explicitly in the generated class and reset to 1 here */
      opacity: 1 !important;
    }

    .xterm-underline-1 {
      text-decoration: underline;
    }
    .xterm-underline-2 {
      text-decoration: double underline;
    }
    .xterm-underline-3 {
      text-decoration: wavy underline;
    }
    .xterm-underline-4 {
      text-decoration: dotted underline;
    }
    .xterm-underline-5 {
      text-decoration: dashed underline;
    }

    .xterm-overline {
      text-decoration: overline;
    }

    .xterm-overline.xterm-underline-1 {
      text-decoration: overline underline;
    }
    .xterm-overline.xterm-underline-2 {
      text-decoration: overline double underline;
    }
    .xterm-overline.xterm-underline-3 {
      text-decoration: overline wavy underline;
    }
    .xterm-overline.xterm-underline-4 {
      text-decoration: overline dotted underline;
    }
    .xterm-overline.xterm-underline-5 {
      text-decoration: overline dashed underline;
    }

    .xterm-strikethrough {
      text-decoration: line-through;
    }

    .xterm-screen .xterm-decoration-container .xterm-decoration {
      z-index: 6;
      position: absolute;
    }

    .xterm-screen
      .xterm-decoration-container
      .xterm-decoration.xterm-decoration-top-layer {
      z-index: 7;
    }

    .xterm-decoration-overview-ruler {
      z-index: 8;
      position: absolute;
      top: 0;
      right: 0;
      pointer-events: none;
    }

    .xterm-decoration-top {
      z-index: 2;
      position: relative;
    }

    /* Derived from vs/base/browser/ui/scrollbar/media/scrollbar.css */

    /* xterm.js customization: Override xterm's cursor style */
    .xterm .xterm-scrollable-element > .scrollbar {
      cursor: default;
    }

    /* Arrows */
    .xterm .xterm-scrollable-element > .scrollbar > .scra {
      cursor: pointer;
      font-size: 11px !important;
    }

    .xterm .xterm-scrollable-element > .visible {
      opacity: 1;

      /* Background rule added for IE9 - to allow clicks on dom node */
      background: rgba(0, 0, 0, 0);

      transition: opacity 100ms linear;
      /* In front of peek view */
      z-index: 11;
    }
    .xterm .xterm-scrollable-element > .invisible {
      opacity: 0;
      pointer-events: none;
    }
    .xterm .xterm-scrollable-element > .invisible.fade {
      transition: opacity 800ms linear;
    }

    /* Scrollable Content Inset Shadow */
    .xterm .xterm-scrollable-element > .shadow {
      position: absolute;
      display: none;
    }
    .xterm .xterm-scrollable-element > .shadow.top {
      display: block;
      top: 0;
      left: 3px;
      height: 3px;
      width: 100%;
      box-shadow: var(--vscode-scrollbar-shadow, #000) 0 6px 6px -6px inset;
    }
    .xterm .xterm-scrollable-element > .shadow.left {
      display: block;
      top: 3px;
      left: 0;
      height: 100%;
      width: 3px;
      box-shadow: var(--vscode-scrollbar-shadow, #000) 6px 0 6px -6px inset;
    }
    .xterm .xterm-scrollable-element > .shadow.top-left-corner {
      display: block;
      top: 0;
      left: 0;
      height: 3px;
      width: 3px;
    }
    .xterm .xterm-scrollable-element > .shadow.top.left {
      box-shadow: var(--vscode-scrollbar-shadow, #000) 6px 0 6px -6px inset;
    }

    .xterm .xterm-viewport::-webkit-scrollbar-thumb:active {
      background-color: var(--vscode-scrollbarSlider-activeBackground, #5a5a5a);
    }

    /* Hide the cursor */
    .xterm .xterm-cursor,
    .xterm .xterm-cursor-outline,
    .xterm .xterm-cursor-block {
      display: none !important;
      visibility: hidden !important;
    }
  `;
__decorateClass([
  n5({ type: String })
], TerminalComponent.prototype, "content", 2);
__decorateClass([
  n5({ type: Number })
], TerminalComponent.prototype, "rows", 2);
__decorateClass([
  n5({ type: Number })
], TerminalComponent.prototype, "cols", 2);
TerminalComponent = __decorateClass([
  e3("terminal-component")
], TerminalComponent);

// libs/shared/cloud-fix-webview/src/components/form-group.ts
var FormGroupElement = class extends EditorContext(s3) {
  constructor() {
    super(...arguments);
    this.variant = "vertical";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return this.editor === "vscode" ? this.renderVSCode() : this.renderIntellij();
  }
  renderVSCode() {
    return T`
      <vscode-form-group variant="${this.variant}">
        <slot></slot>
      </vscode-form-group>
    `;
  }
  renderIntellij() {
    const classes = this.variant === "vertical" ? "flex flex-col gap-2" : "flex items-center gap-4";
    return T`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
};
__decorateClass([
  n5({ type: String })
], FormGroupElement.prototype, "variant", 2);
FormGroupElement = __decorateClass([
  e3("form-group-element")
], FormGroupElement);

// libs/shared/cloud-fix-webview/src/components/label.ts
var LabelElement = class extends EditorContext(s3) {
  createRenderRoot() {
    return this;
  }
  render() {
    return this.editor === "vscode" ? this.renderVSCode() : this.renderIntellij();
  }
  renderVSCode() {
    return T`
      <vscode-label for="${this.for}">
        <slot></slot>
      </vscode-label>
    `;
  }
  renderIntellij() {
    return T`
      <label
        for="${this.for}"
        class="text-foreground block text-sm font-medium"
      >
        <slot></slot>
      </label>
    `;
  }
};
__decorateClass([
  n5({ type: String })
], LabelElement.prototype, "for", 2);
LabelElement = __decorateClass([
  e3("label-element")
], LabelElement);

// libs/shared/cloud-fix-webview/src/components/textarea.ts
var TextareaElement = class extends EditorContext(s3) {
  constructor() {
    super(...arguments);
    this.value = "";
    this.disabled = false;
    this.rows = 4;
    this.placeholder = "";
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return this.editor === "vscode" ? this.renderVSCode() : this.renderIntellij();
  }
  renderVSCode() {
    return T`
      <vscode-textarea
        value="${this.value}"
        ?disabled="${this.disabled}"
        rows="${this.rows}"
        placeholder="${this.placeholder}"
        @input="${this.handleInput}"
        class="w-full"
      ></vscode-textarea>
    `;
  }
  renderIntellij() {
    const disabledClasses = this.disabled ? "opacity-50 cursor-not-allowed" : "";
    return T`
      <textarea
        .value="${this.value}"
        ?disabled="${this.disabled}"
        rows="${this.rows}"
        placeholder="${this.placeholder}"
        class="text-foreground bg-fieldBackground border-fieldBorder focus:ring-focusBorder resize-vertical ${disabledClasses} w-full rounded border px-3 py-2 font-mono text-sm focus:outline-none focus:ring-1"
        @input="${this.handleInput}"
      ></textarea>
    `;
  }
  handleInput(e7) {
    const textarea = e7.target;
    this.value = textarea.value;
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        detail: { value: this.value },
        bubbles: true,
        composed: true
      })
    );
  }
};
__decorateClass([
  n5({ type: String })
], TextareaElement.prototype, "value", 2);
__decorateClass([
  n5({ type: Boolean })
], TextareaElement.prototype, "disabled", 2);
__decorateClass([
  n5({ type: Number })
], TextareaElement.prototype, "rows", 2);
__decorateClass([
  n5({ type: String })
], TextareaElement.prototype, "placeholder", 2);
TextareaElement = __decorateClass([
  e3("textarea-element")
], TextareaElement);

// libs/shared/cloud-fix-webview/src/nx-cloud-fix-component.ts
var NxCloudFixComponent = class extends EditorContext(s3) {
  constructor() {
    super();
    this.isTerminalExpanded = true;
    this.userCommitMessage = "";
    if (this.editor === "vscode") {
      if (!document.querySelector('link[href*="codicon.css"]')) {
        const codiconsLink = document.createElement("link");
        codiconsLink.rel = "stylesheet";
        codiconsLink.href = "https://unpkg.com/@vscode/codicons@0.0.36/dist/codicon.css";
        document.head.appendChild(codiconsLink);
      }
    }
  }
  createRenderRoot() {
    return this;
  }
  render() {
    if (!this.details) {
      return T`<div
        class="text-foreground flex h-[200px] items-center justify-center text-xl"
      >
        Loading...
      </div>`;
    }
    const { cipe, runGroup, terminalOutput } = this.details;
    const aiFix = runGroup.aiFix;
    if (!aiFix) {
      return T`<div class="mx-auto flex w-full flex-col pb-6">
        No AI fix available
      </div>`;
    }
    return T`
      <div class="mx-auto flex w-full flex-col pb-6">
        ${this.renderHeader(cipe, runGroup)}

        <div class="flex flex-col px-3">
          <div class="px-3 py-2 pb-9">
            ${!aiFix.failureClassification || aiFix.failureClassification === "code_change" ? T`
                  <p class="text-foreground m-0 leading-relaxed opacity-90">
                    Nx Cloud analyzes your failing CI tasks and automatically
                    generates fixes whenever possible. The AI examines the error
                    output, identifies the root cause, and suggests minimal code
                    changes to resolve the issue. Once generated, the fix is
                    verified by running the same task on Nx Cloud to ensure it
                    resolves the error.
                  </p>
                  <p
                    class="text-foreground m-0 mt-2 leading-relaxed opacity-90"
                  >
                    You can
                    <span
                      class="text-primary hover:text-primary cursor-pointer underline"
                      @click="${() => this.handleShowDiff()}"
                    >
                      review the resulting git diff of the suggested
                      changes</span
                    >&nbsp;and choose to apply or reject them.
                  </p>
                ` : T`
                  <p class="text-foreground m-0 leading-relaxed opacity-90">
                    Nx Cloud has analyzed your failing CI task and identified
                    the probable root cause. The analysis below explains why
                    this task failed and what type of issue was detected.
                  </p>
                `}
          </div>
          ${this.getFixSection(aiFix)}
          ${aiFix.suggestedFix && (!aiFix.failureClassification || aiFix.failureClassification === "code_change") ? T`<div class="pointer-events-none relative m-0 h-9">
                <div
                  class="bg-border absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2"
                ></div>
                <div
                  class="border-b-border absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-b-[10px] border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent"
                ></div>
              </div>` : ""}
          ${!aiFix.failureClassification || aiFix.failureClassification === "code_change" ? this.getStatusSection(aiFix) : ""}
          <div class="pointer-events-none relative m-0 h-9">
            <div
              class="bg-border absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2"
            ></div>
            <div
              class="border-b-border absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-b-[10px] border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent"
            ></div>
          </div>
          ${this.getTerminalSection(aiFix.taskIds[0], terminalOutput)}
        </div>

        <!-- Hidden pill-element to ensure Codicons CSS is loaded -->
        <pill-element style="display: none"></pill-element>
      </div>
    `;
  }
  renderHeader(cipe, runGroup) {
    return T`
      <div class="bg-background mx-3 flex justify-between p-3">
        <div class="flex w-full flex-col">
          <div class="flex w-full items-center justify-between">
            <h1
              class="text-foreground m-0 flex items-center gap-2 text-2xl font-semibold"
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="transparent"
                viewBox="0 0 24 24"
                id="nx-cloud-header-logo"
                class="stroke-foreground h-6 w-6 flex-shrink-0 fill-transparent"
              >
                <path
                  d="M22.167 7.167v-2.5a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 2.5 2.5h2.5m15-15c-2.76 0-5 2.24-5 5s-2.24 5-5 5-5 2.24-5 5m15-15V19.59a2.577 2.577 0 0 1-2.576 2.576H7.167"
                  stroke-width="2"
                ></path>
              </svg>
              Nx Cloud AI Fix
              ${this.editor === "intellij" && this.onOpenExternalLink ? T`<span
                    class="text-primary cursor-pointer hover:opacity-80"
                    @click="${() => this.onOpenExternalLink(cipe.cipeUrl)}"
                    title="View CI Pipeline Execution"
                  >
                    <icon-element icon="link-external"></icon-element>
                  </span>` : T`<a
                    class="text-primary cursor-pointer hover:opacity-80"
                    target="_blank"
                    href="${cipe.cipeUrl}"
                    title="View CI Pipeline Execution"
                  >
                    <icon-element icon="link-external"></icon-element>
                  </a>`}
            </h1>
            <div
              class="bg-secondary text-secondaryForeground flex items-center gap-1.5 rounded-[18px] px-4 py-2 text-sm font-semibold"
            >
              <icon-element icon="git-branch"></icon-element>
              ${this.editor === "intellij" && this.onOpenExternalLink && cipe.commitUrl ? T`<span
                    @click="${() => this.onOpenExternalLink(cipe.commitUrl)}"
                    class="cursor-pointer text-inherit no-underline hover:underline"
                  >
                    ${cipe.branch}
                  </span>` : T`<a
                    href="${cipe.commitUrl}"
                    target="_blank"
                    class="cursor-pointer text-inherit no-underline hover:underline"
                  >
                    ${cipe.branch}
                  </a>`}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  handleApply() {
    if (this.details && this.onApply) {
      const customMessage = this.userCommitMessage && this.userCommitMessage !== "" && this.userCommitMessage !== this.getDefaultCommitMessage() ? this.userCommitMessage : void 0;
      this.onApply(this.details, customMessage);
    }
  }
  getDefaultCommitMessage() {
    return this.details?.runGroup.aiFix?.suggestedFixDescription;
  }
  handleCommitMessageChange(e7) {
    this.userCommitMessage = e7.detail.value;
  }
  handleApplyLocally() {
    if (this.details && this.onApplyLocally && !this.details?.hasUncommittedChanges) {
      this.onApplyLocally(this.details);
    }
  }
  handleReject() {
    if (this.details && this.onReject) {
      this.onReject(this.details);
    }
  }
  handleShowDiff() {
    if (this.onShowDiff) {
      this.onShowDiff();
    }
  }
  renderFormattedText(text) {
    const parts = text.split(/(`[^`]*`)/g);
    return T`${parts.map((part) => {
      if (part.startsWith("`") && part.endsWith("`") && part.length > 1) {
        const code = part.slice(1, -1);
        if (code.length === 0) {
          return T`<code
            class="bg-fieldBackground rounded px-1 py-0.5 font-mono text-xs"
            >&nbsp;</code
          >`;
        }
        return T`<code
          class="bg-fieldBackground rounded px-1 py-0.5 font-mono text-xs"
          >${code}</code
        >`;
      }
      const textLines = part.split("\n");
      return textLines.map(
        (line, i4) => i4 === textLines.length - 1 ? line : T`${line}<br />`
      );
    })}`;
  }
  getTerminalSection(taskId, terminalOutput) {
    let displayTaskId = "";
    if (taskId.startsWith("nx-cloud record")) {
      displayTaskId = taskId;
    } else {
      displayTaskId = `nx run ${taskId}`;
    }
    return T`
      <div
        class="bg-background border-border ${this.isTerminalExpanded ? "expanded" : ""} relative m-0 flex flex-col overflow-hidden rounded-none border"
      >
        <div
          class="${this.isTerminalExpanded ? "border-b border-border" : "border-b border-transparent transition-colors duration-200"} flex cursor-pointer select-none items-center gap-3 p-4 px-5"
          @click="${() => this.isTerminalExpanded = !this.isTerminalExpanded}"
        >
          <icon-element
            icon="${this.isTerminalExpanded ? "chevron-down" : "chevron-right"}"
            class="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center"
          ></icon-element>
          <h2 class="m-0 flex items-center gap-2 text-base font-semibold">
            Original failing task output:
            <span class="font-mono">${displayTaskId}</span>
          </h2>
        </div>
        ${this.isTerminalExpanded ? T`
              <div
                class="flex h-[400px] min-h-[300px] flex-col overflow-hidden pb-5 pl-0 pr-5 pt-0"
              >
                <terminal-component
                  .content="${terminalOutput}"
                ></terminal-component>
              </div>
            ` : ""}
      </div>
    `;
  }
  createCreatingFixSection() {
    return T`
      <div
        class="border-border bg-background relative m-0 border p-6 text-center"
      >
        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
          <icon-element
            icon="loading"
            size="3rem"
            class="animate-spin-slow leading-none"
          ></icon-element>
        </div>
        <h2 class="text-foreground m-0 mb-2 text-lg font-semibold">
          Creating Fix<span
            class="loading-dots inline-block w-6 text-left"
          ></span>
        </h2>
        <p class="text-foreground m-0 text-sm opacity-80">
          Nx Cloud AI is analyzing the error and generating a fix.
        </p>
      </div>
    `;
  }
  getFixSection(aiFix) {
    const isEnvironmentIssue = aiFix.failureClassification && aiFix.failureClassification !== "code_change";
    if (aiFix.userAction === "REJECTED") {
      return T`
        <div
          class="border-border bg-background relative m-0 border p-6 text-center"
        >
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
            <icon-element
              icon="circle-slash"
              size="3rem"
              class="text-foreground leading-none opacity-70"
            ></icon-element>
          </div>
          <h2 class="text-foreground m-0 mb-2 text-lg font-semibold">
            Fix Rejected
          </h2>
          <p class="text-foreground m-0 text-sm opacity-80">
            You chose not to apply the suggested fix.
          </p>
        </div>
      `;
    }
    if (aiFix.userAction === "APPLIED") {
      return T`
        <div
          class="border-border bg-background relative m-0 border p-6 text-center"
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 flex-col items-center justify-center"
          >
            <icon-element
              icon="git-branch"
              size="3rem"
              class="text-success leading-none"
            ></icon-element>
          </div>
          <h2 class="text-foreground m-0 mb-2 text-lg font-semibold">
            Fix Applied
          </h2>
          <p class="text-foreground m-0 text-sm opacity-80">
            The suggested fix has been committed to your branch.
          </p>
        </div>
      `;
    }
    if (aiFix.userAction === "APPLIED_AUTOMATICALLY") {
      return T`
        <div
          class="border-border bg-background relative m-0 border p-6 text-center"
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 flex-col items-center justify-center"
          >
            <icon-element
              icon="git-branch"
              size="3rem"
              class="text-success leading-none"
            ></icon-element>
          </div>
          <h2 class="text-foreground m-0 mb-2 text-lg font-semibold">
            Fix Applied Automatically
          </h2>
          <p class="text-foreground m-0 text-sm opacity-80">
            The suggested fix has been automatically committed to your branch.
          </p>
        </div>
      `;
    }
    if (aiFix.userAction === "APPLIED_LOCALLY") {
      return T`
        <div
          class="border-border bg-background relative m-0 border p-6 text-center"
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 flex-col items-center justify-center"
          >
            <icon-element
              icon="git-branch"
              size="3rem"
              class="text-success leading-none"
            ></icon-element>
          </div>
          <h2 class="text-foreground m-0 mb-2 text-lg font-semibold">
            Fix Applied Locally
          </h2>
          <p class="text-foreground m-0 text-sm opacity-80">
            The suggested changes have been applied locally.
          </p>
        </div>
      `;
    }
    if (isEnvironmentIssue) {
      return T`
        <div class="border-border bg-background relative m-0 border">
          <div
            class="border-border relative flex items-start justify-between border-b p-4 px-5"
          >
            <div class="flex-1">
              <h2 class="m-0 flex items-center gap-3 text-base font-semibold">
                <icon-element icon="info"></icon-element>
                ${aiFix.failureClassification === "environment_state" ? "Environment Issue Detected" : "Issue Analysis"}
              </h2>
            </div>
          </div>
          <div class="px-4 py-1 pb-4">
            ${aiFix.suggestedFixReasoning ? T`<p class="text-foreground m-0 mb-3 text-sm opacity-90">
                  ${this.renderFormattedText(aiFix.suggestedFixReasoning)}
                </p>` : T`<p class="text-foreground m-0 mb-3 text-sm opacity-90">
                  Nx Cloud AI has analyzed this failure and determined it is not
                  caused by code changes. This may be due to environment issues,
                  external dependencies, or infrastructure problems.
                </p>`}
          </div>
        </div>
      `;
    }
    return T`
      <div class="border-border bg-background relative m-0 border">
        <div
          class="border-border relative flex items-start justify-between border-b p-4 px-5"
        >
          <div class="flex-1">
            <h2 class="m-0 flex items-center gap-3 text-base font-semibold">
              <icon-element icon="sparkle"></icon-element>
              ${aiFix.suggestedFix ? "Apply Suggested Fix" : "No Fix Created"}
            </h2>
          </div>
        </div>
        <div class="px-4 py-1 pb-4">
          ${aiFix.suggestedFixReasoning ? T`<p class="text-foreground m-0 mb-3 text-sm opacity-90">
                ${this.renderFormattedText(aiFix.suggestedFixReasoning)}
              </p>` : ""}
          ${aiFix.suggestedFix ? T`
                <form-group-element variant="vertical">
                  <label-element for="commit-message"
                    >Commit message</label-element
                  >
                  <textarea-element
                    .value="${this.userCommitMessage}"
                    placeholder="${this.getDefaultCommitMessage()}"
                    rows="3"
                    @value-changed="${this.handleCommitMessageChange}"
                  ></textarea-element>
                </form-group-element>
                <div class="mt-4 flex justify-end gap-2">
                  <button-element
                    text="Apply Fix"
                    appearance="primary"
                    @click="${() => this.handleApply()}"
                  ></button-element>
                  <button-element
                    text="Apply Fix Locally"
                    appearance="secondary"
                    ?disabled=${this.details?.hasUncommittedChanges}
                    title=${this.details?.hasUncommittedChanges ? "You have uncommitted changes. Please commit or stash them before applying the fix locally." : ""}
                    @click="${() => this.handleApplyLocally()}"
                  ></button-element>
                  <button-element
                    text="Reject"
                    appearance="secondary"
                    @click="${() => this.handleReject()}"
                  ></button-element>
                </div>
              ` : ""}
        </div>
      </div>
    `;
  }
  getStatusSection(aiFix) {
    const hasAiFix = !!aiFix.suggestedFix;
    const verificationStatus = aiFix.verificationStatus || aiFix.validationStatus;
    const suggestedFixStatus = aiFix.suggestedFixStatus;
    if (suggestedFixStatus) {
      if (suggestedFixStatus === "NOT_STARTED") {
        return this.createWaitingForFixSection();
      } else if (suggestedFixStatus === "IN_PROGRESS") {
        return this.createCreatingFixSection();
      } else if (suggestedFixStatus === "FAILED") {
        return this.createFixCreationFailedSection();
      } else if (suggestedFixStatus === "NOT_EXECUTABLE") {
        return this.createCancelledFixSection();
      } else if (suggestedFixStatus === "COMPLETED" && hasAiFix) {
      }
    } else {
      if (!hasAiFix && verificationStatus === "NOT_STARTED") {
        return this.createCreatingFixSection();
      }
      if (!hasAiFix && verificationStatus == "FAILED") {
        return this.createFixCreationFailedSection();
      }
    }
    if (!verificationStatus && hasAiFix) {
      return T``;
    }
    switch (verificationStatus) {
      case "IN_PROGRESS":
        return T`
          <div
            class="border-border bg-background relative m-0 border p-6 text-center"
          >
            <div class="mb-2 flex flex-col items-center justify-center gap-3">
              <icon-element
                icon="loading"
                size="3rem"
                class="animate-spin-slow leading-none"
              ></icon-element>
              <h2 class="text-foreground m-0 text-lg font-semibold">
                Verifying Fix<span
                  class="loading-dots inline-block w-6 text-left"
                ></span>
              </h2>
            </div>
            <p class="text-foreground m-0 text-sm opacity-80">
              Nx Cloud is verifying the fix. You can wait for verification to
              complete or apply the fix now if you're confident it's correct.
            </p>
          </div>
        `;
      case "COMPLETED":
        return T`
          <div
            class="border-border bg-background relative m-0 border p-6 text-center"
          >
            <div class="mb-2 flex flex-col items-center justify-center gap-3">
              <icon-element
                icon="verified"
                size="3rem"
                class="text-success leading-none"
              ></icon-element>
              <h2 class="text-foreground m-0 text-lg font-semibold">
                Fix Verified on Nx Cloud
              </h2>
            </div>
            <p class="text-foreground m-0 text-sm opacity-80">
              <span class="font-mono">${aiFix.taskIds[0]}</span> has been
              successfully re-run on Nx Cloud after applying the suggested
              changes. You can now commit the fix to your branch using the
              controls above.
            </p>
          </div>
        `;
      case "FAILED":
        return T`
          <div
            class="border-border bg-background relative m-0 border p-6 text-center"
          >
            <div class="mb-2 flex flex-col items-center justify-center gap-3">
              <icon-element
                icon="error"
                size="3rem"
                class="text-error leading-none"
              ></icon-element>
              <h2 class="text-foreground m-0 text-lg font-semibold">
                Fix Verification Failed
              </h2>
            </div>
            <p class="text-foreground m-0 text-sm opacity-80">
              The fix verification failed on Nx Cloud. You may still apply it if
              you believe it's correct/useful.
            </p>
          </div>
        `;
      default:
        return T``;
    }
  }
  createCancelledFixSection() {
    return T`
      <div
        class="border-border bg-background relative m-0 border p-6 text-center"
      >
        <div class="mb-2 flex flex-col items-center justify-center gap-3">
          <icon-element
            icon="circle-slash"
            size="3rem"
            class="text-error leading-none"
          ></icon-element>
          <h2 class="text-foreground m-0 text-lg font-semibold">
            Fix Creation Cancelled
          </h2>
        </div>
        <p class="text-foreground m-0 text-sm opacity-80">
          There were no fixes that were generated for this error.
        </p>
      </div>
    `;
  }
  createWaitingForFixSection() {
    return T`
      <div
        class="border-border bg-background relative m-0 border p-6 text-center"
      >
        <div class="mb-2 flex flex-col items-center justify-center gap-3">
          <icon-element
            icon="info"
            size="3rem"
            class="text-primary leading-none"
          ></icon-element>
          <h2 class="text-foreground m-0 text-lg font-semibold">
            Nx Cloud is preparing to generate a fix
          </h2>
        </div>
        <p class="text-foreground m-0 text-sm opacity-80">
          Nx Cloud is analyzing this run to see if a fix can be generated. This
          may take a moment. Please wait.
        </p>
      </div>
    `;
  }
  createFixCreationFailedSection() {
    return T`
      <div
        class="border-border bg-background relative m-0 border p-6 text-center"
      >
        <div class="mb-2 flex flex-col items-center justify-center gap-3">
          <icon-element
            icon="error"
            size="3rem"
            class="text-error leading-none"
          ></icon-element>
          <h2 class="text-foreground m-0 text-lg font-semibold">
            Fix Creation Failed
          </h2>
        </div>
        <p class="text-foreground m-0 text-sm opacity-80">
          Nx Cloud was unable to generate a fix for the error. You can try
          running the task again or investigate the issue manually on the Nx
          Cloud UI
        </p>
      </div>
    `;
  }
};
__decorateClass([
  n5({ type: Object })
], NxCloudFixComponent.prototype, "details", 2);
__decorateClass([
  n5({ type: Function })
], NxCloudFixComponent.prototype, "onApply", 2);
__decorateClass([
  n5({ type: Function })
], NxCloudFixComponent.prototype, "onReject", 2);
__decorateClass([
  n5({ type: Function })
], NxCloudFixComponent.prototype, "onApplyLocally", 2);
__decorateClass([
  n5({ type: Function })
], NxCloudFixComponent.prototype, "onShowDiff", 2);
__decorateClass([
  n5({ type: Function })
], NxCloudFixComponent.prototype, "onOpenExternalLink", 2);
__decorateClass([
  t3()
], NxCloudFixComponent.prototype, "isTerminalExpanded", 2);
__decorateClass([
  t3()
], NxCloudFixComponent.prototype, "userCommitMessage", 2);
NxCloudFixComponent = __decorateClass([
  e3("nx-cloud-fix-component")
], NxCloudFixComponent);
var PillElement = class extends s3 {
  constructor() {
    super();
    this.type = "info";
    const codiconsLink = document.createElement("link");
    codiconsLink.rel = "stylesheet";
    codiconsLink.href = "https://unpkg.com/@vscode/codicons@0.0.36/dist/codicon.css";
    this.appendChild(codiconsLink);
  }
  createRenderRoot() {
    return this;
  }
  render() {
    const baseClasses = "bg-badgeBackground text-badgeForeground text-xs font-medium box-border rounded-[18px] px-3 py-1 mr-2.5 font-semibold flex";
    const typeClasses = {
      success: "!bg-success/10 !text-success",
      warning: "!bg-warning/10 !text-warning",
      error: "!bg-error/10 !text-error",
      info: "!bg-primary/10 !text-primary"
    };
    const classes = `${baseClasses} ${typeClasses[this.type] || ""}`;
    if (!this.text) {
      return T`<div class="${classes}">
        <div class="flex h-full items-center justify-center gap-1">
          <slot></slot>
        </div>
      </div>`;
    }
    return T`<div class="${classes}"><span>${this.text}</span></div>`;
  }
};
__decorateClass([
  n5({ type: String })
], PillElement.prototype, "text", 2);
__decorateClass([
  n5({ type: String })
], PillElement.prototype, "type", 2);
PillElement = __decorateClass([
  e3("pill-element")
], PillElement);

// libs/shared/cloud-fix-webview/src/ide-communication.controller.ts
var IdeCommunicationController = class {
  constructor(host) {
    this.host = host;
    let vscode;
    try {
      vscode = acquireVsCodeApi();
    } catch (e7) {
    }
    this.editor = vscode ? "vscode" : "intellij";
    console.log("initializing ide communication for", this.editor);
    new e6(host, {
      context: editorContext,
      initialValue: this.editor
    });
    if (vscode) {
      this.setupVscodeCommunication(vscode);
    } else {
      this.setupIntellijCommunication();
    }
    if (globalThis.fixDetails) {
      this.details = globalThis.fixDetails;
    }
  }
  hostConnected() {
  }
  postMessageToIde(message) {
    this.postToIde(message);
  }
  setupVscodeCommunication(vscode) {
    window.addEventListener(
      "message",
      (event) => {
        const data = event.data;
        if (!data) {
          return;
        }
        this.handleInputMessage(data);
      }
    );
    this.postToIde = (message) => vscode.postMessage(message);
  }
  setupIntellijCommunication() {
    window.intellijApi?.registerPostToWebviewCallback(
      (message) => {
        this.handleInputMessage(message);
      }
    );
    this.postToIde = (message) => {
      const stringified = JSON.stringify(message);
      window.intellijApi?.postToIde(stringified);
    };
  }
  handleInputMessage(message) {
    switch (message.type) {
      case "update-details": {
        this.details = {
          ...this.details,
          ...message.details ?? {}
        };
        this.host.requestUpdate();
        break;
      }
      case "styles": {
        this.setIntellijStyles(message.payload);
        this.host.requestUpdate();
        break;
      }
    }
  }
  setIntellijStyles(styles) {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(`
    :root {
      --foreground-color: ${styles.foregroundColor};
      --muted-foreground-color: ${styles.mutedForegroundColor};
      --background-color: ${styles.backgroundColor};
      --primary-color: ${styles.primaryColor};
      --error-color: ${styles.errorColor};
      --field-background-color: ${styles.fieldBackgroundColor};
      --field-border-color: ${styles.fieldBorderColor};
      --select-field-background-color: ${styles.selectFieldBackgroundColor};
      --active-selection-background-color: ${styles.activeSelectionBackgroundColor};
      --focus-border-color: ${styles.focusBorderColor};
      --banner-warning-color: ${styles.bannerWarningBackgroundColor};
      --banner-text-color: ${styles.bannerTextColor};
      --badge-background-color: ${styles.badgeBackgroundColor};
      --badge-foreground-color: ${styles.badgeForegroundColor};
      --separator-color: ${styles.separatorColor};
      --field-nav-hover-color: ${styles.fieldNavHoverColor};
      --scrollbar-thumb-color: ${styles.scrollbarThumbColor};
      --success-color: ${styles.successColor};
      --warning-color: ${styles.warningColor};
      --hover-color: ${styles.hoverColor};
      --border-color: ${styles.borderColor};
      --secondary-color: ${styles.secondaryColor};
      --secondary-foreground-color: ${styles.secondaryForegroundColor};
      font-family: ${styles.fontFamily};
      font-size: ${styles.fontSize};
    }
    `);
    document.adoptedStyleSheets = [styleSheet];
  }
};

// libs/shared/cloud-fix-webview/src/main.ts
var Root = class extends s3 {
  constructor() {
    super();
    this.icc = new IdeCommunicationController(this);
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return T`
      <nx-cloud-fix-component
        .details=${this.icc.details}
        .onApply=${(_details, commitMessage) => this.handleApply(commitMessage)}
        .onApplyLocally=${() => this.handleApplyLocally()}
        .onReject=${() => this.handleReject()}
        .onShowDiff=${() => this.handleShowDiff()}
        .onOpenExternalLink=${(url) => this.handleOpenExternalLink(url)}
      ></nx-cloud-fix-component>
    `;
  }
  handleApply(commitMessage) {
    this.icc.postMessageToIde({ type: "apply", commitMessage });
  }
  handleApplyLocally() {
    this.icc.postMessageToIde({ type: "apply-locally" });
  }
  handleReject() {
    this.icc.postMessageToIde({ type: "reject" });
  }
  handleShowDiff() {
    this.icc.postMessageToIde({ type: "show-diff" });
  }
  handleOpenExternalLink(url) {
    this.icc.postMessageToIde({ type: "open-external-link", url });
  }
};
Root = __decorateClass([
  e3("root-nx-cloud-fix-element")
], Root);

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
*/
