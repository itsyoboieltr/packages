var mino=function(){"use strict";var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ge={},L={},m={},k={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseRotation=t.parseRotationName=t.Rotation=t.parsePiece=t.parsePieceName=t.isMinoPiece=t.Piece=void 0;var e;(function(i){i[i.Empty=0]="Empty",i[i.I=1]="I",i[i.L=2]="L",i[i.O=3]="O",i[i.Z=4]="Z",i[i.T=5]="T",i[i.J=6]="J",i[i.S=7]="S",i[i.Gray=8]="Gray"})(e=t.Piece||(t.Piece={}));function r(i){return i!==e.Empty&&i!==e.Gray}t.isMinoPiece=r;function n(i){switch(i){case e.I:return"I";case e.L:return"L";case e.O:return"O";case e.Z:return"Z";case e.T:return"T";case e.J:return"J";case e.S:return"S";case e.Gray:return"X";case e.Empty:return"_"}throw new Error("Unknown piece: ".concat(i))}t.parsePieceName=n;function o(i){switch(i.toUpperCase()){case"I":return e.I;case"L":return e.L;case"O":return e.O;case"Z":return e.Z;case"T":return e.T;case"J":return e.J;case"S":return e.S;case"X":case"GRAY":return e.Gray;case" ":case"_":case"EMPTY":return e.Empty}throw new Error("Unknown piece: ".concat(i))}t.parsePiece=o;var a;(function(i){i[i.Spawn=0]="Spawn",i[i.Right=1]="Right",i[i.Reverse=2]="Reverse",i[i.Left=3]="Left"})(a=t.Rotation||(t.Rotation={}));function f(i){switch(i){case a.Spawn:return"spawn";case a.Left:return"left";case a.Right:return"right";case a.Reverse:return"reverse"}throw new Error("Unknown rotation: ".concat(i))}t.parseRotationName=f;function u(i){switch(i.toLowerCase()){case"spawn":return a.Spawn;case"left":return a.Left;case"right":return a.Right;case"reverse":return a.Reverse}throw new Error("Unknown rotation: ".concat(i))}t.parseRotation=u})(k),Object.defineProperty(m,"__esModule",{value:!0}),m.getPieces=m.getBlocks=m.getBlockXYs=m.getBlockPositions=m.PlayField=m.InnerField=m.createInnerField=m.createNewInnerField=void 0;var y=k,v={Width:10,Height:23,PlayBlocks:23*10};function _e(){return new ae({})}m.createNewInnerField=_e;function Fe(t){for(var e=new ae({}),r=-1;r<v.Height;r+=1)for(var n=0;n<v.Width;n+=1){var o=t.at(n,r);e.setNumberAt(n,r,(0,y.parsePiece)(o))}return e}m.createInnerField=Fe;var ae=function(){function t(e){var r=e.field,n=r===void 0?t.create(v.PlayBlocks):r,o=e.garbage,a=o===void 0?t.create(v.Width):o;this.field=n,this.garbage=a}return t.create=function(e){return new ye({length:e})},t.prototype.fill=function(e){this.field.fill(e)},t.prototype.fillAll=function(e,r){this.field.fillAll(e,r)},t.prototype.canFill=function(e,r,n,o){var a=this,f=me(e,r,n,o);return f.every(function(u){var i=u[0],c=u[1];return 0<=i&&i<10&&0<=c&&c<v.Height&&a.getNumberAt(i,c)===y.Piece.Empty})},t.prototype.canFillAll=function(e){var r=this;return e.every(function(n){var o=n.x,a=n.y;return 0<=o&&o<10&&0<=a&&a<v.Height&&r.getNumberAt(o,a)===y.Piece.Empty})},t.prototype.isOnGround=function(e,r,n,o){return!this.canFill(e,r,n,o-1)},t.prototype.clearLine=function(){this.field.clearLine()},t.prototype.riseGarbage=function(){this.field.up(this.garbage),this.garbage.clearAll()},t.prototype.mirror=function(){this.field.mirror()},t.prototype.shiftToLeft=function(){this.field.shiftToLeft()},t.prototype.shiftToRight=function(){this.field.shiftToRight()},t.prototype.shiftToUp=function(){this.field.shiftToUp()},t.prototype.shiftToBottom=function(){this.field.shiftToBottom()},t.prototype.copy=function(){return new t({field:this.field.copy(),garbage:this.garbage.copy()})},t.prototype.equals=function(e){return this.field.equals(e.field)&&this.garbage.equals(e.garbage)},t.prototype.addNumber=function(e,r,n){0<=r?this.field.addOffset(e,r,n):this.garbage.addOffset(e,-(r+1),n)},t.prototype.setNumberFieldAt=function(e,r){this.field.setAt(e,r)},t.prototype.setNumberGarbageAt=function(e,r){this.garbage.setAt(e,r)},t.prototype.setNumberAt=function(e,r,n){return 0<=r?this.field.set(e,r,n):this.garbage.set(e,-(r+1),n)},t.prototype.getNumberAt=function(e,r){return 0<=r?this.field.get(e,r):this.garbage.get(e,-(r+1))},t.prototype.getNumberAtIndex=function(e,r){return r?this.getNumberAt(e%10,Math.floor(e/10)):this.getNumberAt(e%10,-(Math.floor(e/10)+1))},t.prototype.toFieldNumberArray=function(){return this.field.toArray()},t.prototype.toGarbageNumberArray=function(){return this.garbage.toArray()},t}();m.InnerField=ae;var ye=function(){function t(e){var r=e.pieces,n=e.length,o=n===void 0?v.PlayBlocks:n;r!==void 0?this.pieces=r:this.pieces=Array.from({length:o}).map(function(){return y.Piece.Empty}),this.length=o}return t.load=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=e.join("").trim();return t.loadInner(n)},t.loadMinify=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=e.join("").trim();return t.loadInner(n,n.length)},t.loadInner=function(e,r){var n=r!==void 0?r:e.length;if(n%10!==0)throw new Error("Num of blocks in field should be mod 10");for(var o=r!==void 0?new t({length:r}):new t({}),a=0;a<n;a+=1){var f=e[a];o.set(a%10,Math.floor((n-a-1)/10),(0,y.parsePiece)(f))}return o},t.prototype.get=function(e,r){return this.pieces[e+r*v.Width]},t.prototype.addOffset=function(e,r,n){this.pieces[e+r*v.Width]+=n},t.prototype.set=function(e,r,n){this.setAt(e+r*v.Width,n)},t.prototype.setAt=function(e,r){this.pieces[e]=r},t.prototype.fill=function(e){for(var r=e.type,n=e.rotation,o=e.x,a=e.y,f=V(r,n),u=0,i=f;u<i.length;u++){var c=i[u],d=[o+c[0],a+c[1]],p=d[0],g=d[1];this.set(p,g,r)}},t.prototype.fillAll=function(e,r){for(var n=0,o=e;n<o.length;n++){var a=o[n],f=a.x,u=a.y;this.set(f,u,r)}},t.prototype.clearLine=function(){for(var e=this.pieces.concat(),r=this.pieces.length/v.Width-1,n=r;0<=n;n-=1){var o=this.pieces.slice(n*v.Width,(n+1)*v.Width),a=o.every(function(i){return i!==y.Piece.Empty});if(a){var f=e.slice(0,n*v.Width),u=e.slice((n+1)*v.Width);e=f.concat(u,Array.from({length:v.Width}).map(function(){return y.Piece.Empty}))}}this.pieces=e},t.prototype.up=function(e){this.pieces=e.pieces.concat(this.pieces).slice(0,this.length)},t.prototype.mirror=function(){for(var e=[],r=0;r<this.pieces.length;r+=1){var n=this.pieces.slice(r*v.Width,(r+1)*v.Width);n.reverse();for(var o=0,a=n;o<a.length;o++){var f=a[o];e.push(f)}}this.pieces=e},t.prototype.shiftToLeft=function(){for(var e=this.pieces.length/10,r=0;r<e;r+=1){for(var n=0;n<v.Width-1;n+=1)this.pieces[n+r*v.Width]=this.pieces[n+1+r*v.Width];this.pieces[9+r*v.Width]=y.Piece.Empty}},t.prototype.shiftToRight=function(){for(var e=this.pieces.length/10,r=0;r<e;r+=1){for(var n=v.Width-1;1<=n;n-=1)this.pieces[n+r*v.Width]=this.pieces[n-1+r*v.Width];this.pieces[r*v.Width]=y.Piece.Empty}},t.prototype.shiftToUp=function(){var e=Array.from({length:10}).map(function(){return y.Piece.Empty});this.pieces=e.concat(this.pieces).slice(0,this.length)},t.prototype.shiftToBottom=function(){var e=Array.from({length:10}).map(function(){return y.Piece.Empty});this.pieces=this.pieces.slice(10,this.length).concat(e)},t.prototype.toArray=function(){return this.pieces.concat()},Object.defineProperty(t.prototype,"numOfBlocks",{get:function(){return this.pieces.length},enumerable:!1,configurable:!0}),t.prototype.copy=function(){return new t({pieces:this.pieces.concat(),length:this.length})},t.prototype.toShallowArray=function(){return this.pieces},t.prototype.clearAll=function(){this.pieces=this.pieces.map(function(){return y.Piece.Empty})},t.prototype.equals=function(e){if(this.pieces.length!==e.pieces.length)return!1;for(var r=0;r<this.pieces.length;r+=1)if(this.pieces[r]!==e.pieces[r])return!1;return!0},t}();m.PlayField=ye;function me(t,e,r,n){return V(t,e).map(function(o){return o[0]+=r,o[1]+=n,o})}m.getBlockPositions=me;function ke(t,e,r,n){return V(t,e).map(function(o){return{x:o[0]+r,y:o[1]+n}})}m.getBlockXYs=ke;function V(t,e){var r=be(t);switch(e){case y.Rotation.Spawn:return r;case y.Rotation.Left:return qe(r);case y.Rotation.Reverse:return Ne(r);case y.Rotation.Right:return Ie(r)}throw new Error("Unsupported block")}m.getBlocks=V;function be(t){switch(t){case y.Piece.I:return[[0,0],[-1,0],[1,0],[2,0]];case y.Piece.T:return[[0,0],[-1,0],[1,0],[0,1]];case y.Piece.O:return[[0,0],[1,0],[0,1],[1,1]];case y.Piece.L:return[[0,0],[-1,0],[1,0],[1,1]];case y.Piece.J:return[[0,0],[-1,0],[1,0],[-1,1]];case y.Piece.S:return[[0,0],[-1,0],[0,1],[1,1]];case y.Piece.Z:return[[0,0],[1,0],[0,1],[-1,1]]}throw new Error("Unsupported rotation")}m.getPieces=be;function Ie(t){return t.map(function(e){return[e[1],-e[0]]})}function qe(t){return t.map(function(e){return[-e[1],e[0]]})}function Ne(t){return t.map(function(e){return[-e[0],-e[1]]})}var G={};Object.defineProperty(G,"__esModule",{value:!0}),G.Buffer=void 0;var ce="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Se=function(){function t(e){e===void 0&&(e=""),this.values=e.split("").map(We)}return t.prototype.poll=function(e){for(var r=0,n=0;n<e;n+=1){var o=this.values.shift();if(o===void 0)throw new Error("Unexpected fumen");r+=o*Math.pow(t.tableLength,n)}return r},t.prototype.push=function(e,r){r===void 0&&(r=1);for(var n=e,o=0;o<r;o+=1)this.values.push(n%t.tableLength),n=Math.floor(n/t.tableLength)},t.prototype.merge=function(e){for(var r=0,n=e.values;r<n.length;r++){var o=n[r];this.values.push(o)}},t.prototype.isEmpty=function(){return this.values.length===0},Object.defineProperty(t.prototype,"length",{get:function(){return this.values.length},enumerable:!1,configurable:!0}),t.prototype.get=function(e){return this.values[e]},t.prototype.set=function(e,r){this.values[e]=r},t.prototype.toString=function(){return this.values.map(Be).join("")},t.tableLength=ce.length,t}();G.Buffer=Se;function We(t){return ce.indexOf(t)}function Be(t){return ce[t]}var I={},K=B&&B.__assign||function(){return K=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},K.apply(this,arguments)};Object.defineProperty(I,"__esModule",{value:!0}),I.createActionEncoder=I.createActionDecoder=void 0;var s=k;function U(t){return t!==0}var Ce=function(t,e,r){var n=e+r,o=n*t;function a(i){switch(i){case 0:return s.Piece.Empty;case 1:return s.Piece.I;case 2:return s.Piece.L;case 3:return s.Piece.O;case 4:return s.Piece.Z;case 5:return s.Piece.T;case 6:return s.Piece.J;case 7:return s.Piece.S;case 8:return s.Piece.Gray}throw new Error("Unexpected piece")}function f(i){switch(i){case 0:return s.Rotation.Reverse;case 1:return s.Rotation.Right;case 2:return s.Rotation.Spawn;case 3:return s.Rotation.Left}throw new Error("Unexpected rotation")}function u(i,c,d){var p=i%t,g=Math.floor(i/10),b=e-g-1;return c===s.Piece.O&&d===s.Rotation.Left?(p+=1,b-=1):c===s.Piece.O&&d===s.Rotation.Reverse?p+=1:c===s.Piece.O&&d===s.Rotation.Spawn?b-=1:c===s.Piece.I&&d===s.Rotation.Reverse?p+=1:c===s.Piece.I&&d===s.Rotation.Left||c===s.Piece.S&&d===s.Rotation.Spawn?b-=1:c===s.Piece.S&&d===s.Rotation.Right?p-=1:c===s.Piece.Z&&d===s.Rotation.Spawn?b-=1:c===s.Piece.Z&&d===s.Rotation.Left&&(p+=1),{x:p,y:b}}return{decode:function(i){var c=i,d=a(c%8);c=Math.floor(c/8);var p=f(c%4);c=Math.floor(c/4);var g=u(c%o,d,p);c=Math.floor(c/o);var b=U(c%2);c=Math.floor(c/2);var l=U(c%2);c=Math.floor(c/2);var w=U(c%2);c=Math.floor(c/2);var h=U(c%2);c=Math.floor(c/2);var O=!U(c%2);return{rise:b,mirror:l,colorize:w,comment:h,lock:O,piece:K(K({},g),{type:d,rotation:p})}}}};I.createActionDecoder=Ce;function D(t){return t?1:0}var Te=function(t,e,r){var n=e+r,o=n*t;function a(u){var i=u.type,c=u.rotation,d=u.x,p=u.y;return(0,s.isMinoPiece)(i)?i===s.Piece.O&&c===s.Rotation.Left?(d-=1,p+=1):i===s.Piece.O&&c===s.Rotation.Reverse?d-=1:i===s.Piece.O&&c===s.Rotation.Spawn?p+=1:i===s.Piece.I&&c===s.Rotation.Reverse?d-=1:i===s.Piece.I&&c===s.Rotation.Left||i===s.Piece.S&&c===s.Rotation.Spawn?p+=1:i===s.Piece.S&&c===s.Rotation.Right?d+=1:i===s.Piece.Z&&c===s.Rotation.Spawn?p+=1:i===s.Piece.Z&&c===s.Rotation.Left&&(d-=1):(d=0,p=22),(e-p-1)*t+d}function f(u){var i=u.type,c=u.rotation;if(!(0,s.isMinoPiece)(i))return 0;switch(c){case s.Rotation.Reverse:return 0;case s.Rotation.Right:return 1;case s.Rotation.Spawn:return 2;case s.Rotation.Left:return 3}throw new Error("No reachable")}return{encode:function(u){var i=u.lock,c=u.comment,d=u.colorize,p=u.mirror,g=u.rise,b=u.piece,l=D(!i);return l*=2,l+=D(c),l*=2,l+=D(d),l*=2,l+=D(p),l*=2,l+=D(g),l*=o,l+=a(b),l*=4,l+=f(b),l*=8,l+=b.type,l}}};I.createActionEncoder=Te;var Z={};Object.defineProperty(Z,"__esModule",{value:!0}),Z.createCommentParser=void 0;var ue=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",se=ue.length+1,xe=function(){return{decode:function(t){for(var e="",r=t,n=0;n<4;n+=1){var o=r%se;e+=ue[o],r=Math.floor(r/se)}return e},encode:function(t,e){return ue.indexOf(t)*Math.pow(se,e)}}};Z.createCommentParser=xe;var $={};Object.defineProperty($,"__esModule",{value:!0}),$.Quiz=void 0;var q=k,M;(function(t){t.Direct="direct",t.Swap="swap",t.Stock="stock"})(M||(M={}));var Qe=function(){function t(e){this.quiz=t.verify(e)}return Object.defineProperty(t.prototype,"next",{get:function(){var e=this.quiz.indexOf(")")+1,r=this.quiz[e];return r===void 0||r===";"?"":r},enumerable:!1,configurable:!0}),t.isQuizComment=function(e){return e.startsWith("#Q=")},t.create=function(e,r){var n=function(o,a){var f=function(u){return u||""};return new t("#Q=[".concat(f(o),"](").concat(f(a[0]),")").concat(f(a.substring(1))))};return r!==void 0?n(e,r):n(void 0,e)},t.trim=function(e){return e.trim().replace(/\s+/g,"")},Object.defineProperty(t.prototype,"least",{get:function(){var e=this.quiz.indexOf(")");return this.quiz.substr(e+1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"current",{get:function(){var e=this.quiz.indexOf("(")+1,r=this.quiz[e];return r===")"?"":r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hold",{get:function(){var e=this.quiz.indexOf("[")+1,r=this.quiz[e];return r==="]"?"":r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leastAfterNext2",{get:function(){var e=this.quiz.indexOf(")");return this.quiz[e+1]===";"?this.quiz.substr(e+1):this.quiz.substr(e+2)},enumerable:!1,configurable:!0}),t.prototype.getOperation=function(e){var r=(0,q.parsePieceName)(e),n=this.current;if(r===n)return M.Direct;var o=this.hold;if(r===o)return M.Swap;if(o===""){if(r===this.next)return M.Stock}else if(n===""&&r===this.next)return M.Direct;throw new Error("Unexpected hold piece in quiz: ".concat(this.quiz))},Object.defineProperty(t.prototype,"leastInActiveBag",{get:function(){var e=this.quiz.indexOf(";"),r=0<=e?this.quiz.substring(0,e):this.quiz,n=r.indexOf(")");return r[n+1]===";"?r.substr(n+1):r.substr(n+2)},enumerable:!1,configurable:!0}),t.verify=function(e){var r=this.trim(e);if(r.length===0||e==="#Q=[]()"||!e.startsWith("#Q="))return e;if(!r.match(/^#Q=\[[TIOSZJL]?]\([TIOSZJL]?\)[TIOSZJL]*;?.*$/i))throw new Error("Current piece doesn't exist, however next pieces exist: ".concat(e));return r},t.prototype.direct=function(){if(this.current===""){var e=this.leastAfterNext2;return new t("#Q=[".concat(this.hold,"](").concat(e[0],")").concat(e.substr(1)))}return new t("#Q=[".concat(this.hold,"](").concat(this.next,")").concat(this.leastAfterNext2))},t.prototype.swap=function(){if(this.hold==="")throw new Error("Cannot find hold piece: ".concat(this.quiz));var e=this.next;return new t("#Q=[".concat(this.current,"](").concat(e,")").concat(this.leastAfterNext2))},t.prototype.stock=function(){if(this.hold!==""||this.next==="")throw new Error("Cannot stock: ".concat(this.quiz));var e=this.leastAfterNext2,r=e[0]!==void 0?e[0]:"";return 1<e.length?new t("#Q=[".concat(this.current,"](").concat(r,")").concat(e.substr(1))):new t("#Q=[".concat(this.current,"](").concat(r,")"))},t.prototype.operate=function(e){switch(e){case M.Direct:return this.direct();case M.Swap:return this.swap();case M.Stock:return this.stock()}throw new Error("Unexpected operation")},t.prototype.format=function(){var e=this.nextIfEnd();if(e.quiz==="#Q=[]()")return new t("");var r=e.current,n=e.hold;if(r===""&&n!=="")return new t("#Q=[](".concat(n,")").concat(e.least));if(r===""){var o=e.least,a=o[0];return a===void 0?new t(""):a===";"?new t(o.substr(1)):new t("#Q=[](".concat(a,")").concat(o.substr(1)))}return e},t.prototype.getHoldPiece=function(){if(!this.canOperate())return q.Piece.Empty;var e=this.hold;return e===void 0||e===""||e===";"?q.Piece.Empty:(0,q.parsePiece)(e)},t.prototype.getNextPieces=function(e){if(!this.canOperate())return e!==void 0?Array.from({length:e}).map(function(){return q.Piece.Empty}):[];var r=(this.current+this.next+this.leastInActiveBag).substr(0,e);return e!==void 0&&r.length<e&&(r+=" ".repeat(e-r.length)),r.split("").map(function(n){return n===void 0||n===" "||n===";"?q.Piece.Empty:(0,q.parsePiece)(n)})},t.prototype.toString=function(){return this.quiz},t.prototype.canOperate=function(){var e=this.quiz;return e.startsWith("#Q=[]();")&&(e=this.quiz.substr(8)),e.startsWith("#Q=")&&e!=="#Q=[]()"},t.prototype.nextIfEnd=function(){return this.quiz.startsWith("#Q=[]();")?new t(this.quiz.substr(8)):this},t}();$.Quiz=Qe;var N={},ee=B&&B.__assign||function(){return ee=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},ee.apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0}),N.Mino=N.Field=void 0;var te=m,S=k;function fe(t){return t instanceof le?t.copy():le.from(t)}var je=function(){function t(e){this.field=e}return t.create=function(e,r){return new t(new te.InnerField({field:e!==void 0?te.PlayField.load(e):void 0,garbage:r!==void 0?te.PlayField.loadMinify(r):void 0}))},t.prototype.canFill=function(e){if(e===void 0)return!0;var r=fe(e);return this.field.canFillAll(r.positions())},t.prototype.canLock=function(e){return e===void 0?!0:this.canFill(e)?!this.canFill(ee(ee({},e),{y:e.y-1})):!1},t.prototype.fill=function(e,r){if(r===void 0&&(r=!1),e!==void 0){var n=fe(e);if(!r&&!this.canFill(n))throw Error("Cannot fill piece on field");return this.field.fillAll(n.positions(),(0,S.parsePiece)(n.type)),n}},t.prototype.put=function(e){if(e!==void 0){for(var r=fe(e);0<=r.y;r.y-=1)if(this.canLock(r))return this.fill(r),r;throw Error("Cannot put piece on field")}},t.prototype.clearLine=function(){this.field.clearLine()},t.prototype.at=function(e,r){return(0,S.parsePieceName)(this.field.getNumberAt(e,r))},t.prototype.set=function(e,r,n){this.field.setNumberAt(e,r,(0,S.parsePiece)(n))},t.prototype.copy=function(){return new t(this.field.copy())},t.prototype.str=function(e){e===void 0&&(e={});for(var r=e.reduced!==void 0?e.reduced:!0,n=e.separator!==void 0?e.separator:`
`,o=e.garbage===void 0||e.garbage?-1:0,a="",f=22;o<=f;f-=1){for(var u="",i=0;i<10;i+=1)u+=this.at(i,f);r&&u==="__________"||(r=!1,a+=u,f!==o&&(a+=n))}return a},t}();N.Field=je;var le=function(){function t(e,r,n,o){this.type=e,this.rotation=r,this.x=n,this.y=o}return t.from=function(e){return new t(e.type,e.rotation,e.x,e.y)},t.prototype.positions=function(){return(0,te.getBlockXYs)((0,S.parsePiece)(this.type),(0,S.parseRotation)(this.rotation),this.x,this.y).sort(function(e,r){return e.y===r.y?e.x-r.x:e.y-r.y})},t.prototype.operation=function(){return{type:this.type,rotation:this.rotation,x:this.x,y:this.y}},t.prototype.isValid=function(){try{(0,S.parsePiece)(this.type),(0,S.parseRotation)(this.rotation)}catch{return!1}return this.positions().every(function(e){var r=e.x,n=e.y;return 0<=r&&r<10&&0<=n&&n<23})},t.prototype.copy=function(){return new t(this.type,this.rotation,this.x,this.y)},t}();N.Mino=le,Object.defineProperty(L,"__esModule",{value:!0}),L.decode=L.extract=L.Page=void 0;var we=m,Ge=G,H=k,Ue=I,De=Z,Pe=$,de=N,Re=function(){function t(e,r,n,o,a,f){this.index=e,this.operation=n,this.comment=o,this.flags=a,this.refs=f,this._field=r.copy()}return Object.defineProperty(t.prototype,"field",{get:function(){return new de.Field(this._field.copy())},set:function(e){this._field=(0,we.createInnerField)(e)},enumerable:!1,configurable:!0}),t.prototype.mino=function(){return de.Mino.from(this.operation)},t}();L.Page=Re;var C={GarbageLine:1,Width:10};function Ee(t){var e=function(f,u){var i=u.trim().replace(/[?\s]+/g,"");return{version:f,data:i}},r=t,n=r.indexOf("&");0<=n&&(r=r.substring(0,n));{var o=t.match(/[vmd]115@/);if(o!=null&&o.index!==void 0){var a=r.substr(o.index+5);return e("115",a)}}{var o=t.match(/[vmd]110@/);if(o!=null&&o.index!==void 0){var a=r.substr(o.index+5);return e("110",a)}}throw new Error("Unsupported fumen version")}L.extract=Ee;function Ze(t){var e=Ee(t),r=e.version,n=e.data;switch(r){case"115":return Oe(n,23);case"110":return Oe(n,21)}throw new Error("Unsupported fumen version")}L.decode=Ze;function Oe(t,e){for(var r=e+C.GarbageLine,n=r*C.Width,o=new Ge.Buffer(t),a=function(F){for(var Q={changed:!0,field:F},j=0;j<n;){var ve=o.poll(2),Me=Math.floor(ve/n),ze=ve%n;Me===8&&ze===n-1&&(Q.changed=!1);for(var Le=0;Le<ze+1;Le+=1){var et=j%C.Width,tt=e-Math.floor(j/C.Width)-1;Q.field.addNumber(et,tt,Me-8),j+=1}}return Q},f=0,u=(0,we.createNewInnerField)(),i={repeatCount:-1,refIndex:{comment:0,field:0},quiz:void 0,lastCommentText:""},c=[],d=(0,Ue.createActionDecoder)(C.Width,e,C.GarbageLine),p=(0,De.createCommentParser)();!o.isEmpty();){var g=void 0;0<i.repeatCount?(g={field:u,changed:!1},i.repeatCount-=1):(g=a(u.copy()),g.changed||(i.repeatCount=o.poll(1)));var b=o.poll(3),l=d.decode(b),w=void 0;if(l.comment){for(var h=[],O=o.poll(2),E=0;E<Math.floor((O+3)/4);E+=1){var P=o.poll(5);h.push(P)}for(var _="",R=0,J=h;R<J.length;R++){var he=J[R];_+=p.decode(he)}var W=unescape(_.slice(0,O));i.lastCommentText=W,w={text:W},i.refIndex.comment=f;var z=w.text;if(Pe.Quiz.isQuizComment(z))try{i.quiz=new Pe.Quiz(z)}catch{i.quiz=void 0}else i.quiz=void 0}else f===0?w={text:""}:w={text:i.quiz!==void 0?i.quiz.format().toString():void 0,ref:i.refIndex.comment};var oe=!1;if(i.quiz!==void 0&&(oe=!0,i.quiz.canOperate()&&l.lock))if((0,H.isMinoPiece)(l.piece.type))try{var X=i.quiz.nextIfEnd(),Y=X.getOperation(l.piece.type);i.quiz=X.operate(Y)}catch{i.quiz=i.quiz.format()}else i.quiz=i.quiz.format();var A=void 0;l.piece.type!==H.Piece.Empty&&(A=l.piece);var x=void 0;g.changed||f===0?(x={},i.refIndex.field=f):x={ref:i.refIndex.field},c.push(new Re(f,g.field,A!==void 0?de.Mino.from({type:(0,H.parsePieceName)(A.type),rotation:(0,H.parseRotationName)(A.rotation),x:A.x,y:A.y}):void 0,w.text!==void 0?w.text:i.lastCommentText,{quiz:oe,lock:l.lock,mirror:l.mirror,colorize:l.colorize,rise:l.rise},{field:x.ref,comment:w.ref})),f+=1,l.lock&&((0,H.isMinoPiece)(l.piece.type)&&g.field.fill(l.piece),g.field.clearLine(),l.rise&&g.field.riseGarbage(),l.mirror&&g.field.mirror()),u=g.field}return c}var re={},pe=B&&B.__assign||function(){return pe=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},pe.apply(this,arguments)};Object.defineProperty(re,"__esModule",{value:!0}),re.encode=void 0;var Ae=m,ne=G,T=k,$e=I,He=Z,Je=$,ie={GarbageLine:1,Width:10};function Xe(t){for(var e=function(w,h){var O=Ye(w,h),E=O.changed,P=O.values;if(E)n.merge(P),r=-1;else if(r<0||n.get(r)===ne.Buffer.tableLength-1)n.merge(P),n.push(0),r=n.length-1;else if(n.get(r)<ne.Buffer.tableLength-1){var _=n.get(r);n.set(r,_+1)}},r=-1,n=new ne.Buffer,o=(0,Ae.createNewInnerField)(),a=(0,$e.createActionEncoder)(ie.Width,23,ie.GarbageLine),f=(0,He.createCommentParser)(),u="",i=void 0,c=function(w){var h=t[w];h.flags=h.flags?h.flags:{};var O=h.field,E=O!==void 0?(0,Ae.createInnerField)(O):o.copy();e(o,E);var P=h.comment!==void 0&&(w!==0||h.comment!=="")?h.comment:void 0,_=h.operation!==void 0?{type:(0,T.parsePiece)(h.operation.type),rotation:(0,T.parseRotation)(h.operation.rotation),x:h.operation.x,y:h.operation.y}:{type:T.Piece.Empty,rotation:T.Rotation.Reverse,x:0,y:22},R;if(P!==void 0?P.startsWith("#Q=")?i!==void 0&&i.format().toString()===P?R=void 0:(R=P,u=R,i=new Je.Quiz(P)):i!==void 0&&i.format().toString()===P?(R=void 0,u=P,i=void 0):(R=u!==P?P:void 0,u=u!==P?R:u,i=void 0):(R=void 0,i=void 0),i!==void 0&&i.canOperate()&&h.flags.lock)if((0,T.isMinoPiece)(_.type))try{var J=i.nextIfEnd(),he=J.getOperation(_.type);i=J.operate(he)}catch{i=i.format()}else i=i.format();var W=pe({lock:!0,colorize:w===0},h.flags),z={piece:_,rise:!!W.rise,mirror:!!W.mirror,colorize:!!W.colorize,lock:!!W.lock,comment:R!==void 0},oe=a.encode(z);if(n.push(oe,3),R!==void 0){var X=escape(h.comment),Y=Math.min(X.length,4095);n.push(Y,2);for(var A=0;A<Y;A+=4){for(var x=0,F=0;F<4;F+=1){var Q=A+F;if(Y<=Q)break;var j=X.charAt(Q);x+=f.encode(j,F)}n.push(x,5)}}else h.comment===void 0&&(u=void 0);z.lock&&((0,T.isMinoPiece)(z.piece.type)&&E.fill(z.piece),E.clearLine(),z.rise&&E.riseGarbage(),z.mirror&&E.mirror()),o=E},d=0;d<t.length;d+=1)c(d);var p=n.toString();if(p.length<41)return p;var g=[p.substr(0,42)],b=p.substring(42),l=b.match(/[\S]{1,47}/g)||[];return g.concat(l).join("?")}re.encode=Xe;function Ye(t,e){for(var r=23,n=r+1,o=n*ie.Width,a=new ne.Buffer,f=function(l,w){var h=r-w-1;return e.getNumberAt(l,h)-t.getNumberAt(l,h)+8},u=function(l,w){var h=l*o+w;a.push(h,2)},i=!0,c=f(0,0),d=-1,p=0;p<n;p+=1)for(var g=0;g<ie.Width;g+=1){var b=f(g,p);b!==c?(u(c,d),d=0,c=b):d+=1}return u(c,d),c===8&&d===o-1&&(i=!1),{changed:i,values:a}}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.encoder=t.decoder=t.Mino=t.Field=void 0;var e=L,r=re,n=N;Object.defineProperty(t,"Field",{enumerable:!0,get:function(){return n.Field}}),Object.defineProperty(t,"Mino",{enumerable:!0,get:function(){return n.Mino}}),t.decoder={decode:function(o){return(0,e.decode)(o)}},t.encoder={encode:function(o){return"v115@".concat((0,r.encode)(o))}}})(ge);function Ve(t){const e=t.field;let r=[];if(t.operation){const a=t.mino().positions();for(let f=0;f<4;++f){const u=a[f].x,i=a[f].y;r.push([u,i])}}const n=[];for(let o=0;o<20;o++){let a="";for(let f=0;f<10;f++){const u=e.at(f,o);t.operation&&r.find(i=>i[0]===f&&i[1]===o)?a+=t.mino().type.toLowerCase():a+=u}n.push(a)}return n}function Ke(t){return ge.decoder.decode(t).map(n=>({field:Ve(n),comment:n.comment}))}return Ke}();