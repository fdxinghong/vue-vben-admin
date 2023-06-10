var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var J=(e,s,o)=>s in e?de(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,D=(e,s)=>{for(var o in s||(s={}))we.call(s,o)&&J(e,o,s[o]);if(G)for(var o of G(s))he.call(s,o)&&J(e,o,s[o]);return e},L=(e,s)=>fe(e,ge(s));var U=(e,s,o)=>new Promise((i,l)=>{var u=c=>{try{n(o.next(c))}catch(p){l(p)}},t=c=>{try{n(o.throw(c))}catch(p){l(p)}},n=c=>c.done?i(c.value):Promise.resolve(c.value).then(u,t);n((o=o.apply(e,s)).next())});import{j as Y,f as E,_ as I,p as V,s as ye,c as Z,r as me,l as x,t as ee,x as De,Z as te,w as Ce}from"./index-30e8b188.js";import{d as A,e as w,a7 as C,_ as d,$ as B,F as ke,R as f,a8 as S,a9 as h,E as R,a1 as T,ac as _,ab as P,a2 as $,af as oe,a0 as K,f as N,k,g as O,u as a,J as b,w as Q,q as se,v as $e,ae as W,t as ve,aa as be,ad as Be,ag as Pe,r as ne,s as Se}from"./vue-854c8149.js";import{b as Te,S as _e}from"./index-05f36017.js";import{bi as Oe,ac as Fe,G as He}from"./antd-8c2f8f62.js";const{t:X}=Y(),re={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:X("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:X("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Le=D({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},re),Ve=A({name:"BasicDrawerFooter",props:L(D({},re),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:o}=E("basic-drawer-footer"),i=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}});function l(){s("ok")}function u(){s("close")}return{handleOk:l,prefixCls:o,handleClose:u,getStyle:i}}});function Re(e,s,o,i,l,u){const t=C("a-button");return e.showFooter||e.$slots.footer?(d(),B("div",{key:0,class:$(e.prefixCls),style:oe(e.getStyle)},[e.$slots.footer?f(e.$slots,"footer",{key:1}):(d(),B(ke,{key:0},[f(e.$slots,"insertFooter"),e.showCancelBtn?(d(),S(t,_({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[R(T(e.cancelText),1)]),_:1},16,["onClick"])):P("",!0),f(e.$slots,"centerFooter"),e.showOkBtn?(d(),S(t,_({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[R(T(e.okText),1)]),_:1},16,["type","onClick","loading"])):P("",!0),f(e.$slots,"appendFooter")],64))],6)):P("",!0)}const Ne=I(Ve,[["render",Re]]),je=A({name:"BasicDrawerHeader",components:{BasicTitle:Te,ArrowLeftOutlined:Oe},props:{isDetail:V.bool,showDetailBack:V.bool,title:V.string},emits:["close"],setup(e,{emit:s}){const{prefixCls:o}=E("basic-drawer-header");function i(){s("close")}return{prefixCls:o,handleClose:i}}});const Ee={key:1};function Ie(e,s,o,i,l,u){const t=C("BasicTitle"),n=C("ArrowLeftOutlined");return e.isDetail?(d(),B("div",{key:1,class:$([e.prefixCls,`${e.prefixCls}--detail`])},[K("span",{class:$(`${e.prefixCls}__twrap`)},[e.showDetailBack?(d(),B("span",{key:0,onClick:s[0]||(s[0]=(...c)=>e.handleClose&&e.handleClose(...c))},[N(n,{class:$(`${e.prefixCls}__back`)},null,8,["class"])])):P("",!0),e.title?(d(),B("span",Ee,T(e.title),1)):P("",!0)],2),K("span",{class:$(`${e.prefixCls}__toolbar`)},[f(e.$slots,"titleToolbar")],2)],2)):(d(),S(t,{key:0,class:$(e.prefixCls)},{default:h(()=>[f(e.$slots,"title"),R(" "+T(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}const Ae=I(je,[["render",Ie]]),qe=A({components:{Drawer:Fe,ScrollContainer:_e,DrawerFooter:Ne,DrawerHeader:Ae},inheritAttrs:!1,props:Le,emits:["visible-change","ok","close","register"],setup(e,{emit:s}){const o=k(!1),i=ye(),l=k(null),{t:u}=Y(),{prefixVar:t,prefixCls:n}=E("basic-drawer"),c={setDrawerProps:ce,emitVisible:void 0},p=O();p&&s("register",c,p.uid);const m=w(()=>Z(b(e),a(l))),y=w(()=>{const r=L(D(D({placement:"right"},a(i)),a(m)),{visible:a(o)});r.title=void 0;const{isDetail:g,width:H,wrapClassName:M,getContainer:pe}=r;if(g){H||(r.width="100%");const z=`${n}__detail`;r.class=M?`${M} ${z}`:z,pe||(r.getContainer=`.${t}-layout-content`)}return r}),F=w(()=>D(D({},i),a(y))),q=w(()=>{const{footerHeight:r,showFooter:g}=a(y);return g&&r?me(r)?`${r}px`:`${r.replace("px","")}px`:"0px"}),ae=w(()=>({position:"relative",height:`calc(100% - ${a(q)})`})),le=w(()=>{var r;return!!((r=a(y))!=null&&r.loading)});Q(()=>e.visible,(r,g)=>{r!==g&&(o.value=r)},{deep:!0}),Q(()=>o.value,r=>{se(()=>{s("visible-change",r)})});function ie(r){return U(this,null,function*(){const{closeFunc:g}=a(y);if(s("close",r),g&&x(g)){const H=yield g();o.value=!H;return}o.value=!1})}function ce(r){l.value=Z(a(l)||{},r),Reflect.has(r,"visible")&&(o.value=!!r.visible)}function ue(){s("ok")}return{onClose:ie,t:u,prefixCls:n,getMergeProps:m,getScrollContentStyle:ae,getProps:y,getLoading:le,getBindValues:F,getFooterHeight:q,handleOk:ue}}});function Me(e,s,o,i,l,u){const t=C("DrawerHeader"),n=C("ScrollContainer"),c=C("DrawerFooter"),p=C("Drawer"),m=$e("loading");return d(),S(p,_({class:e.prefixCls,onClose:e.onClose},e.getBindValues),W({default:h(()=>[ve((d(),S(n,{style:oe(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[f(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[m,e.getLoading]]),N(c,_(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),W({_:2},[be(Object.keys(e.$slots),y=>({name:y,fn:h(F=>[f(e.$slots,y,Be(Pe(F||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[f(e.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[N(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[f(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["class","onClose"])}const ze=I(qe,[["render",Me]]),v=ne({}),j=ne({});function Qe(){if(!O())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=k(null),s=k(!1),o=k("");function i(t,n){ee(()=>{e.value=null,s.value=null,v[a(o)]=null}),!(a(s)&&De()&&t===a(e))&&(o.value=n,e.value=t,s.value=!0,t.emitVisible=(c,p)=>{j[p]=c})}const l=()=>{const t=a(e);return t||te("useDrawer instance is undefined!"),t},u={setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)},getVisible:w(()=>j[~~a(o)]),openDrawer:(t=!0,n,c=!0)=>{var m;if((m=l())==null||m.setDrawerProps({visible:t}),!n)return;if(c){v[a(o)]=null,v[a(o)]=b(n);return}He(b(v[a(o)]),b(n))||(v[a(o)]=b(n))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})}};return[i,u]}const We=e=>{const s=k(null),o=O(),i=k("");if(!O())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(s);if(!t){te("useDrawerInner instance is undefined!");return}return t},u=(t,n)=>{ee(()=>{s.value=null}),i.value=n,s.value=t,o==null||o.emit("register",t,n)};return Se(()=>{const t=v[a(i)];t&&(!e||!x(e)||se(()=>{e(t)}))}),[u,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({confirmLoading:t})},getVisible:w(()=>j[~~a(i)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)}}]},Xe=Ce(ze);export{Xe as B,We as a,Qe as u};
