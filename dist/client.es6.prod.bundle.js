webpackJsonp([0],{101:function(t,n,o){"use strict";function r(N,k){if(!(N instanceof k))throw new TypeError("Cannot call a class as a function")}function s(N,k){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k&&("object"==typeof k||"function"==typeof k)?k:N}function p(N,k){if("function"!=typeof k&&null!==k)throw new TypeError("Super expression must either be null or a function, not "+typeof k);N.prototype=Object.create(k&&k.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(N,k):N.__proto__=k)}function d(N,k){var R={};for(var I in N)0<=k.indexOf(I)||Object.prototype.hasOwnProperty.call(N,I)&&(R[I]=N[I]);return R}function u(){}function c(N,k){var R={run:function(_){try{var M=N(k.getState(),_);(M!==R.props||R.error)&&(R.shouldComponentUpdate=!0,R.props=M,R.error=null)}catch(j){R.shouldComponentUpdate=!0,R.error=j}}};return R}var h=o(78),m=o.n(h),g=o(6),P=o.n(g),S=o(3),T=o.n(S),E=o(225),O=o(104);n.a=function(N){var k,R,I=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},_=I.getDisplayName,M=_===void 0?function(X){return"ConnectAdvanced("+X+")"}:_,j=I.methodName,q=j===void 0?"connectAdvanced":j,D=I.renderCountProp,U=D===void 0?void 0:D,K=I.shouldHandleStateChanges,W=!(K!==void 0)||K,A=I.storeKey,H=A===void 0?"store":A,F=I.withRef,L=F!==void 0&&F,Y=d(I,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),B=H+"Subscription",z=C++,G=(k={},k[H]=O.a,k[B]=O.b,k),V=(R={},R[B]=O.b,R);return function(Q){P()("function"==typeof Q,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(Q));var J=Q.displayName||Q.name||"Component",Z=M(J),$=w({},Y,{getDisplayName:M,methodName:q,renderCountProp:U,shouldHandleStateChanges:W,storeKey:H,withRef:L,displayName:Z,wrappedComponentName:J,WrappedComponent:Q}),ee=function(te){function ne(oe,re){r(this,ne);var se=s(this,te.call(this,oe,re));return se.version=z,se.state={},se.renderCount=0,se.store=oe[H]||re[H],se.propsMode=!!oe[H],se.setWrappedInstance=se.setWrappedInstance.bind(se),P()(se.store,"Could not find \""+H+"\" in either the context or props of "+("\""+Z+"\". Either wrap the root component in a <Provider>, ")+("or explicitly pass \""+H+"\" as a prop to \""+Z+"\".")),se.initSelector(),se.initSubscription(),se}return p(ne,te),ne.prototype.getChildContext=function(){var re,se=this.propsMode?null:this.subscription;return re={},re[B]=se||this.context[B],re},ne.prototype.componentDidMount=function(){W&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},ne.prototype.componentWillReceiveProps=function(re){this.selector.run(re)},ne.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},ne.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=u,this.store=null,this.selector.run=u,this.selector.shouldComponentUpdate=!1},ne.prototype.getWrappedInstance=function(){return P()(L,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+q+"() call."),this.wrappedInstance},ne.prototype.setWrappedInstance=function(re){this.wrappedInstance=re},ne.prototype.initSelector=function(){var re=N(this.store.dispatch,$);this.selector=c(re,this.store),this.selector.run(this.props)},ne.prototype.initSubscription=function(){if(W){var re=(this.propsMode?this.props:this.context)[B];this.subscription=new E.a(this.store,re,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},ne.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(v)):this.notifyNestedSubs()},ne.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},ne.prototype.isSubscribed=function(){return!!this.subscription&&this.subscription.isSubscribed()},ne.prototype.addExtraProps=function(re){if(!L&&!U&&!(this.propsMode&&this.subscription))return re;var se=w({},re);return L&&(se.ref=this.setWrappedInstance),U&&(se[U]=this.renderCount++),this.propsMode&&this.subscription&&(se[B]=this.subscription),se},ne.prototype.render=function(){var re=this.selector;if(re.shouldComponentUpdate=!1,re.error)throw re.error;else return o.i(S.createElement)(Q,this.addExtraProps(re.props))},ne}(S.Component);return ee.WrappedComponent=Q,ee.displayName=Z,ee.childContextTypes=V,ee.contextTypes=G,ee.propTypes=G,!1,m()(ee,Q)}};var w=Object.assign||function(N){for(var R,k=1;k<arguments.length;k++)for(var I in R=arguments[k],R)Object.prototype.hasOwnProperty.call(R,I)&&(N[I]=R[I]);return N},C=0,v={}},102:function(t,n,o){"use strict";function s(u){return null!==u.dependsOnOwnProps&&u.dependsOnOwnProps!==void 0?!!u.dependsOnOwnProps:1!==u.length}o(105);n.b=function(u){return function(l,h){function m(){return g}var g=u(l,h);return m.dependsOnOwnProps=!1,m}},n.a=function(u){return function(h,m){var g=m.displayName,P=function(T,E){return P.dependsOnOwnProps?P.mapToProps(T,E):P.mapToProps(T)};return P.dependsOnOwnProps=!0,P.mapToProps=function(T,E){P.mapToProps=u,P.dependsOnOwnProps=s(u);var O=P(T,E);return"function"==typeof O&&(P.mapToProps=O,P.dependsOnOwnProps=s(O),O=P(T,E)),!1,O},P}}},103:function(t,n,o){"use strict";var r=o(218),s=o(101),p=o(219);o.d(n,"a",function(){return r.a}),o.d(n,"b",function(){return p.a})},104:function(t,n,o){"use strict";var r=o(3),s=o.n(r);o.d(n,"b",function(){return p}),o.d(n,"a",function(){return d});var p=r.PropTypes.shape({trySubscribe:r.PropTypes.func.isRequired,tryUnsubscribe:r.PropTypes.func.isRequired,notifyNestedSubs:r.PropTypes.func.isRequired,isSubscribed:r.PropTypes.func.isRequired}),d=r.PropTypes.shape({subscribe:r.PropTypes.func.isRequired,dispatch:r.PropTypes.func.isRequired,getState:r.PropTypes.func.isRequired})},105:function(t,n,o){"use strict";var s=o(46),p=o(63)},119:function(t,n){"use strict";n.a=function(){for(var s=arguments.length,p=Array(s),d=0;d<s;d++)p[d]=arguments[d];if(0===p.length)return function(l){return l};if(1===p.length)return p[0];var u=p[p.length-1],c=p.slice(0,-1);return function(){return c.reduceRight(function(l,h){return h(l)},u.apply(void 0,arguments))}}},120:function(t,n,o){"use strict";function r(c,l,h){function m(){N===v&&(N=v.slice())}function g(){return C}function P(R){if("function"!=typeof R)throw new Error("Expected listener to be a function.");var I=!0;return m(),N.push(R),function(){if(I){I=!1,m();var M=N.indexOf(R);N.splice(M,1)}}}function S(R){if(!o.i(s.a)(R))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof R.type)throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");if(k)throw new Error("Reducers may not dispatch actions.");try{k=!0,C=w(C,R)}finally{k=!1}for(var I=v=N,_=0;_<I.length;_++)I[_]();return R}var O;if("function"==typeof l&&"undefined"==typeof h&&(h=l,l=void 0),"undefined"!=typeof h){if("function"!=typeof h)throw new Error("Expected the enhancer to be a function.");return h(r)(c,l)}if("function"!=typeof c)throw new Error("Expected the reducer to be a function.");var w=c,C=l,v=[],N=v,k=!1;return S({type:u.INIT}),O={dispatch:S,subscribe:P,getState:g,replaceReducer:function(R){if("function"!=typeof R)throw new Error("Expected the nextReducer to be a function.");w=R,S({type:u.INIT})}},O[d.a]=function(){var R;return R={subscribe:function(M){function j(){M.next&&M.next(g())}if("object"!=typeof M)throw new TypeError("Expected the observer to be an object.");j();var q=P(j);return{unsubscribe:q}}},R[d.a]=function(){return this},R},O}var s=o(46),p=o(258),d=o.n(p);o.d(n,"b",function(){return u}),n.a=r;var u={INIT:"@@redux/INIT"}},121:function(){"use strict"},122:function(t,n,o){"use strict";var r=o(3),s=o.n(r),p=o(39);n.a=(u)=>r.createElement("div",null,r.createElement("h1",null,"Welcome @ React TSX Starter KIT ;  ",u.slug),r.createElement("ul",null,r.createElement("li",null,r.createElement(p.Link,{to:"/"},"Home")),r.createElement("li",null,r.createElement(p.Link,{to:"/about"},"About"))))},125:function(t,n,o){"use strict";var r=o(3),s=o.n(r),p=o(39),d=o(263),u=o(261),c=o(103);n.a=(h)=>r.createElement(c.a,{store:h.store},r.createElement(p.Router,{history:p.browserHistory},r.createElement(p.Route,{path:"/",component:d.a}),r.createElement(p.Route,{path:"/about",component:u.a})))},126:function(t,n){"use strict";n.a=function(s=0,p){switch(p.type){case"INCREMENT":return s+1;case"DECREMENT":return s-1;default:return s;}}},145:function(t,n,o){"use strict";var s=o(79),p=o(148),d=o(149),l=s.a?s.a.toStringTag:void 0;n.a=function(h){return null==h?void 0===h?"[object Undefined]":"[object Null]":l&&l in Object(h)?o.i(p.a)(h):o.i(d.a)(h)}},146:function(t,n,o){"use strict";(function(r){var s="object"==typeof r&&r&&r.Object===Object&&r;n.a=s}).call(n,o(70))},147:function(t,n,o){"use strict";var r=o(150),s=o.i(r.a)(Object.getPrototypeOf,Object);n.a=s},148:function(t,n,o){"use strict";var s=o(79),p=Object.prototype,d=p.hasOwnProperty,u=p.toString,c=s.a?s.a.toStringTag:void 0;n.a=function(l){var h=d.call(l,c),m=l[c];try{l[c]=void 0}catch(S){}var P=u.call(l);return h?l[c]=m:delete l[c],P}},149:function(t,n){"use strict";var s=Object.prototype,p=s.toString;n.a=function(d){return p.call(d)}},150:function(t,n){"use strict";n.a=function(s,p){return function(d){return s(p(d))}}},151:function(t,n,o){"use strict";var r=o(146),s="object"==typeof self&&self&&self.Object===Object&&self,p=r.a||s||Function("return this")();n.a=p},152:function(t,n){"use strict";n.a=function(s){return null!=s&&"object"==typeof s}},218:function(t,n,o){"use strict";function r(P,S){if(!(P instanceof S))throw new TypeError("Cannot call a class as a function")}function s(P,S){if(!P)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&("object"==typeof S||"function"==typeof S)?S:P}function p(P,S){if("function"!=typeof S&&null!==S)throw new TypeError("Super expression must either be null or a function, not "+typeof S);P.prototype=Object.create(S&&S.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(P,S):P.__proto__=S)}var u=o(3),c=o.n(u),l=o(104),h=o(63);o.d(n,"a",function(){return g});var m=!1,g=function(P){function S(T,E){r(this,S);var O=s(this,P.call(this,T,E));return O.store=T.store,O}return p(S,P),S.prototype.getChildContext=function(){return{store:this.store,storeSubscription:null}},S.prototype.render=function(){return u.Children.only(this.props.children)},S}(u.Component);!1,g.propTypes={store:l.a.isRequired,children:u.PropTypes.element.isRequired},g.childContextTypes={store:l.a.isRequired,storeSubscription:l.b},g.displayName="Provider"},219:function(t,n,o){"use strict";function r(S,T){var E={};for(var O in S)0<=T.indexOf(O)||Object.prototype.hasOwnProperty.call(S,O)&&(E[O]=S[O]);return E}function s(S,T,E){for(var w,O=T.length-1;0<=O;O--)if(w=T[O](S),w)return w;return function(C,v){throw new Error("Invalid value of type "+typeof S+" for "+E+" argument when connecting component "+v.wrappedComponentName+".")}}function p(S,T){return S===T}var u=o(101),c=o(226),l=o(220),h=o(221),m=o(222),g=o(223),P=Object.assign||function(S){for(var E,T=1;T<arguments.length;T++)for(var O in E=arguments[T],E)Object.prototype.hasOwnProperty.call(E,O)&&(S[O]=E[O]);return S};n.a=function(){var S=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},T=S.connectHOC,E=T===void 0?u.a:T,O=S.mapStateToPropsFactories,w=O===void 0?h.a:O,C=S.mapDispatchToPropsFactories,v=C===void 0?l.a:C,N=S.mergePropsFactories,k=N===void 0?m.a:N,R=S.selectorFactory,I=R===void 0?g.a:R;return function(M,j,q){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},U=D.pure,W=D.areStatesEqual,A=W===void 0?p:W,H=D.areOwnPropsEqual,F=H===void 0?c.a:H,L=D.areStatePropsEqual,Y=L===void 0?c.a:L,B=D.areMergedPropsEqual,z=B===void 0?c.a:B,G=r(D,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),V=s(M,w,"mapStateToProps"),X=s(j,v,"mapDispatchToProps"),Q=s(q,k,"mergeProps");return E(I,P({methodName:"connect",getDisplayName:function(Z){return"Connect("+Z+")"},shouldHandleStateChanges:!!M,initMapStateToProps:V,initMapDispatchToProps:X,initMergeProps:Q,pure:!(U!==void 0)||U,areStatesEqual:A,areOwnPropsEqual:F,areStatePropsEqual:Y,areMergedPropsEqual:z},G))}}()},220:function(t,n,o){"use strict";var d=o(71),u=o(102);n.a=[function(c){return"function"==typeof c?o.i(u.a)(c,"mapDispatchToProps"):void 0},function(c){return c?void 0:o.i(u.b)(function(l){return{dispatch:l}})},function(c){return c&&"object"==typeof c?o.i(u.b)(function(l){return o.i(d.b)(c,l)}):void 0}]},221:function(t,n,o){"use strict";var p=o(102);n.a=[function(d){return"function"==typeof d?o.i(p.a)(d,"mapStateToProps"):void 0},function(d){return d?void 0:o.i(p.b)(function(){return{}})}]},222:function(t,n,o){"use strict";function r(l,h,m){return c({},m,l,h)}function s(l){return function(m,g){var P=g.displayName,S=g.pure,T=g.areMergedPropsEqual,E=!1,O;return function(C,v,N){var k=l(C,v,N);return E?(!S||!T(k,O))&&(O=k):(E=!0,O=k,!1),O}}}var u=o(105),c=Object.assign||function(l){for(var m,h=1;h<arguments.length;h++)for(var g in m=arguments[h],m)Object.prototype.hasOwnProperty.call(m,g)&&(l[g]=m[g]);return l};n.a=[function(l){return"function"==typeof l?s(l):void 0},function(l){return l?void 0:function(){return r}}]},223:function(t,n,o){"use strict";function r(c,l){var h={};for(var m in c)0<=l.indexOf(m)||Object.prototype.hasOwnProperty.call(c,m)&&(h[m]=c[m]);return h}function s(c,l,h,m){return function(P,S){return h(c(P,S),l(m,S),S)}}function p(c,l,h,m,g){function P(j,q){return k=j,R=q,I=c(k,R),_=l(m,R),M=h(I,_,R),N=!0,M}function S(){return I=c(k,R),l.dependsOnOwnProps&&(_=l(m,R)),M=h(I,_,R),M}function T(){return c.dependsOnOwnProps&&(I=c(k,R)),l.dependsOnOwnProps&&(_=l(m,R)),M=h(I,_,R),M}function E(){var j=c(k,R),q=!v(j,I);return I=j,q&&(M=h(I,_,R)),M}function O(j,q){var D=!C(q,R),U=!w(j,k);return k=j,R=q,D&&U?S():D?T():U?E():M}var w=g.areStatesEqual,C=g.areOwnPropsEqual,v=g.areStatePropsEqual,N=!1,k,R,I,_,M;return function(q,D){return N?O(q,D):P(q,D)}}o(224);n.a=function(c,l){var h=l.initMapStateToProps,m=l.initMapDispatchToProps,g=l.initMergeProps,P=r(l,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),S=h(c,P),T=m(c,P),E=g(c,P);var O=P.pure?p:s;return O(S,T,E,c,P)}},224:function(t,n,o){"use strict";var p=o(63)},225:function(t,n,o){"use strict";function r(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function s(){var c=[],l=[];return{clear:function(){l=p,c=p},notify:function(){for(var m=c=l,g=0;g<m.length;g++)m[g]()},subscribe:function(m){var g=!0;return l===c&&(l=c.slice()),l.push(m),function(){g&&c!==p&&(g=!1,l===c&&(l=c.slice()),l.splice(l.indexOf(m),1))}}}}o.d(n,"a",function(){return u});var p=null,d={notify:function(){}},u=function(){function c(l,h,m){r(this,c),this.store=l,this.parentSub=h,this.onStateChange=m,this.unsubscribe=null,this.listeners=d}return c.prototype.addNestedSub=function(h){return this.trySubscribe(),this.listeners.subscribe(h)},c.prototype.notifyNestedSubs=function(){this.listeners.notify()},c.prototype.isSubscribed=function(){return!!this.unsubscribe},c.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=s())},c.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=d)},c}()},226:function(t,n){"use strict";function r(d,u){return d===u?0!==d||0!==u||1/d==1/u:d!==d&&u!==u}n.a=function(d,u){if(r(d,u))return!0;if("object"!=typeof d||null===d||"object"!=typeof u||null===u)return!1;var c=Object.keys(d),l=Object.keys(u);if(c.length!==l.length)return!1;for(var h=0;h<c.length;h++)if(!p.call(u,c[h])||!r(d[c[h]],u[c[h]]))return!1;return!0};var p=Object.prototype.hasOwnProperty},254:function(t,n,o){"use strict";var s=o(119),p=Object.assign||function(d){for(var c,u=1;u<arguments.length;u++)for(var l in c=arguments[u],c)Object.prototype.hasOwnProperty.call(c,l)&&(d[l]=c[l]);return d}},255:function(t,n){"use strict";function r(p,d){return function(){return d(p.apply(void 0,arguments))}}n.a=function(p,d){if("function"==typeof p)return r(p,d);if("object"!=typeof p||null===p)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===p?"null":typeof p)+". Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");for(var u=Object.keys(p),c={},l=0;l<u.length;l++){var h=u[l],m=p[h];"function"==typeof m&&(c[h]=r(m,d))}return c}},256:function(t,n,o){"use strict";var u=o(120),c=o(46),l=o(121)},258:function(t,n,o){t.exports=o(259)},259:function(t,n,o){"use strict";(function(r,s){Object.defineProperty(n,"__esModule",{value:!0});var d=o(260),u=function(h){return h&&h.__esModule?h:{"default":h}}(d),c;c="undefined"==typeof self?"undefined"==typeof window?"undefined"==typeof r?s:r:window:self;var l=(0,u["default"])(c);n["default"]=l}).call(n,o(70),o(123)(t))},260:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(s){var p,d=s.Symbol;return"function"==typeof d?d.observable?p=d.observable:(p=d("observable"),d.observable=p):p="@@observable",p}},261:function(t,n,o){"use strict";var r=o(3),s=o.n(r),p=o(122);n.a=()=>r.createElement("div",null,r.createElement(p.a,{slug:"About"}),r.createElement("p",null,"On the about page"))},262:function(t,n){"use strict";n.a=function(){return{type:p}},n.b=function(){return{type:d}};const p="INCREMENT",d="DECREMENT"},263:function(t,n,o){"use strict";var p=o(3),d=o.n(p),u=o(103),c=o(122),l=o(262);class h extends p.Component{render(){return console.log("Home.props",this.props),p.createElement("div",null,p.createElement(c.a,{slug:"Home"}),p.createElement("div",null,p.createElement("p",null,"On the homepage."),p.createElement("h2",null,"Todos"),p.createElement("h3",null,"counter: ",this.props.counter),p.createElement("button",{onClick:this.props.increment},"Increment"),p.createElement("button",{onClick:this.props.decrement},"Decrement")))}}n.a=o.i(u.b)(function(m){return{counter:m}},function(m){return{increment:()=>m(o.i(l.a)()),decrement:()=>m(o.i(l.b)())}})(h)},264:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),s=o.n(r),p=o(40),d=o.n(p),u=o(125),c=o(71),l=o(126);o.i(p.render)(r.createElement(u.a,{store:o.i(c.a)(l.a,window.__PRELOADED_STATE__)}),document.getElementById("my-app"))},46:function(t,n,o){"use strict";var s=o(145),p=o(147),d=o(152),c=Function.prototype,l=Object.prototype,h=c.toString,m=l.hasOwnProperty,g=h.call(Object);n.a=function(P){if(!o.i(d.a)(P)||o.i(s.a)(P)!="[object Object]")return!1;var S=o.i(p.a)(P);if(null===S)return!0;var T=m.call(S,"constructor")&&S.constructor;return"function"==typeof T&&T instanceof T&&h.call(T)==g}},63:function(t,n){"use strict";n.a=function(s){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(s);try{throw new Error(s)}catch(p){}}},71:function(t,n,o){"use strict";var s=o(120),p=o(256),d=o(255),u=o(254),c=o(119),l=o(121);o.d(n,"a",function(){return s.a}),o.d(n,"b",function(){return d.a}),!1},79:function(t,n,o){"use strict";var r=o(151),s=r.a.Symbol;n.a=s}},[264]);