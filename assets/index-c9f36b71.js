var $e=Object.defineProperty,je=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ce=(e,t,a)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))Ue.call(t,a)&&ce(e,a,t[a]);if(re)for(var a of re(t))me.call(t,a)&&ce(e,a,t[a]);return e},ie=(e,t)=>je(e,Pe(t));var oe=(e,t,a)=>new Promise((y,T)=>{var K=k=>{try{p(a.next(k))}catch(E){T(E)}},s=k=>{try{p(a.throw(k))}catch(E){T(E)}},p=k=>k.done?y(k.value):Promise.resolve(k.value).then(K,s);p((a=a.apply(e,t)).next())});import{an as Ve,d as Ae,k as Le,ak as He,e as M,w as j,_ as I,$ as U,u as i,R as Re,ab as $,a8 as G,a9 as m,E as de,a1 as ue,a2 as he,f as C,F as Q,aa as Xe,ad as Ye,ag as ze,B as Je,n as We,r as fe,J as Y,s as V,o as Ge,t as ye,A as pe,ac as qe,i as Qe}from"./vue-854c8149.js";import{ar as Ze,j as et,u as tt,I as Z,as as ge,z as nt,l as q,at,ad as lt,au as st,a7 as rt,$ as ct,X as ke,v as it}from"./index-30e8b188.js";import{b as ot,S as dt}from"./index-05f36017.js";import{A as ut,b5 as ht,b6 as ft,b7 as yt,b8 as pt,b9 as gt,c as kt,o as Se,F as St,l as Kt,ba as bt,bb as xt,bc as At,i as Lt,bd as Ct,W as Et,be as Tt,bf as _t,X as vt,L as ee,J as Bt,a1 as wt,az as Ft,aQ as Ke,ar as Nt}from"./antd-8c2f8f62.js";import{u as Dt}from"./useContextMenu-8ad532dd.js";var It=200;function Mt(e,t,a,y){var T=-1,K=yt,s=!0,p=e.length,k=[],E=t.length;if(!p)return k;a&&(t=ut(t,ht(a))),y?(K=pt,s=!1):t.length>=It&&(K=gt,s=!1,t=new ft(t));e:for(;++T<p;){var S=e[T],u=a==null?S:a(S);if(S=y||S!==0?S:0,s&&u===u){for(var n=E;n--;)if(t[n]===u)continue e;k.push(S)}else K(t,u,y)||k.push(S)}return k}var Ot=kt(function(e,t){return Se(e)?Mt(e,St(t,1,Se,!0)):[]});const $t=Ot;var jt="[object String]";function Pt(e){return typeof e=="string"||!Kt(e)&&bt(e)&&xt(e)==jt}function te(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,y)=>a+te(e,y),""):Object.keys(t).reduce((a,y)=>a+(t[y]?te(e,y):""),""):""}function Ut(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${te(t,a)}`)}function Ce(e){return[Ut(`${Ze}-${e}`)]}const be=Symbol(),xe=Symbol();function mt(e,t){if(!Lt(e)||e[xe])return e;const{values:a,required:y,default:T,type:K,validator:s}=e,p=a||s?k=>{let E=!1,S=[];if(a&&(S=[...a,T],E||(E=S.includes(k))),s&&(E||(E=s(k))),!E&&S.length>0){const u=[...new Set(S)].map(n=>JSON.stringify(n)).join(", ");Ve(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${u}], got value ${JSON.stringify(k)}.`)}return E}:void 0;return{type:typeof K=="object"&&Object.getOwnPropertySymbols(K).includes(be)?K[be]:K,required:!!y,default:T,validator:p,[xe]:!0}}const Vt=e=>At(Object.entries(e).map(([t,a])=>[t,mt(a,t)]));var v=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(v||{});const Ht=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],Rt=Vt({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:[Array,Object],default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1},treeWrapperClassName:String}),Xt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Yt=Ae({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:t}){const a=e,y=Le(""),[T]=Ce("tree-header"),K=He(),{t:s}=et(),p=M(()=>{const n=K.headerTitle||a.title;return["mr-1","w-full",{["ml-5"]:n}]}),k=M(()=>{const{checkable:n}=a,r=[{label:s("component.tree.expandAll"),value:v.EXPAND_ALL},{label:s("component.tree.unExpandAll"),value:v.UN_EXPAND_ALL,divider:n}];return n?[{label:s("component.tree.selectAll"),value:v.SELECT_ALL},{label:s("component.tree.unSelectAll"),value:v.UN_SELECT_ALL,divider:n},...r,{label:s("component.tree.checkStrictly"),value:v.CHECK_STRICTLY},{label:s("component.tree.checkUnStrictly"),value:v.CHECK_UN_STRICTLY}]:r});function E(n){var o,h,d,c;const{key:r}=n;switch(r){case v.SELECT_ALL:(o=a.checkAll)==null||o.call(a,!0);break;case v.UN_SELECT_ALL:(h=a.checkAll)==null||h.call(a,!1);break;case v.EXPAND_ALL:(d=a.expandAll)==null||d.call(a,!0);break;case v.UN_EXPAND_ALL:(c=a.expandAll)==null||c.call(a,!1);break;case v.CHECK_STRICTLY:t("strictly-change",!1);break;case v.CHECK_UN_STRICTLY:t("strictly-change",!0);break}}function S(n){t("search",n)}const u=tt(S,200);return j(()=>y.value,n=>{u(n)}),j(()=>a.searchText,n=>{n!==y.value&&(y.value=n)}),(n,r)=>(I(),U("div",{class:he([i(T)(),"flex px-2 py-1.5 items-center"])},[i(K).headerTitle?Re(n.$slots,"headerTitle",{key:0}):$("",!0),!i(K).headerTitle&&n.title?(I(),G(i(ot),{key:1,helpMessage:n.helpMessage},{default:m(()=>[de(ue(n.title),1)]),_:1},8,["helpMessage"])):$("",!0),n.search||n.toolbar?(I(),U("div",Xt,[n.search?(I(),U("div",{key:0,class:he(i(p))},[C(i(Ct),{placeholder:i(s)("common.searchText"),size:"small",allowClear:"",value:y.value,"onUpdate:value":r[0]||(r[0]=o=>y.value=o)},null,8,["placeholder","value"])],2)):$("",!0),n.toolbar?(I(),G(i(vt),{key:1,onClick:r[1]||(r[1]=Je(()=>{},["prevent"]))},{overlay:m(()=>[C(i(Et),{onClick:E},{default:m(()=>[(I(!0),U(Q,null,Xe(i(k),o=>(I(),U(Q,{key:o.value},[C(i(Tt),Ye(ze({key:o.value})),{default:m(()=>[de(ue(o.label),1)]),_:2},1040),o.divider?(I(),G(i(_t),{key:0})):$("",!0)],64))),128))]),_:1})]),default:m(()=>[C(Z,{icon:"ion:ellipsis-vertical"})]),_:1})):$("",!0)])):$("",!0)],2))}}),zt=({icon:e})=>e?Pt(e)?We(Z,{icon:e,class:"mr-1"}):Z:null;function Jt(e,t){function a(u){const n=[],r=u||i(e),{key:o,children:h}=i(t);if(!h||!o)return n;for(let d=0;d<r.length;d++){const c=r[d];n.push(c[o]);const g=c[h];g&&g.length&&n.push(...a(g))}return n}function y(u){const n=[],r=u||i(e),{key:o,children:h}=i(t);if(!h||!o)return n;for(let d=0;d<r.length;d++){const c=r[d];c.disabled!==!0&&c.selectable!==!1&&n.push(c[o]);const g=c[h];g&&g.length&&n.push(...y(g))}return n}function T(u,n){const r=[],o=n||i(e),{key:h,children:d}=i(t);if(!d||!h)return r;for(let c=0;c<o.length;c++){const g=o[c],_=g[d];u===g[h]?(r.push(g[h]),_&&_.length&&r.push(...a(_))):_&&_.length&&r.push(...T(u,_))}return r}function K(u,n,r){if(!u)return;const o=r||i(e),{key:h,children:d}=i(t);if(!(!d||!h))for(let c=0;c<o.length;c++){const g=o[c],_=g[d];if(g[h]===u){o[c]=O(O({},o[c]),n);break}else _&&_.length&&K(u,n,g[d])}}function s(u=1,n,r=1){if(!u)return[];const o=[],h=n||i(e)||[];for(let d=0;d<h.length;d++){const c=h[d],{key:g,children:_}=i(t),z=g?c[g]:"",P=_?c[_]:[];o.push(z),P&&P.length&&r<u&&(r+=1,o.push(...s(u,P,r)))}return o}function p({parentKey:u=null,node:n,push:r="push"}){const o=ee(i(e));if(!u){o[r](n),e.value=o;return}const{key:h,children:d}=i(t);!d||!h||(ge(o,c=>{if(c[h]===u)return c[d]=c[d]||[],c[d][r](n),!0}),e.value=o)}function k({parentKey:u=null,list:n,push:r="push"}){const o=ee(i(e));if(!(!n||n.length<1))if(u){const{key:h,children:d}=i(t);if(!d||!h)return;ge(o,c=>{if(c[h]===u){c[d]=c[d]||[];for(let g=0;g<n.length;g++)c[d][r](n[g]);return e.value=o,!0}})}else{for(let h=0;h<n.length;h++)o[r](n[h]);e.value=o;return}}function E(u,n){if(!u)return;const r=n||i(e),{key:o,children:h}=i(t);if(!(!h||!o))for(let d=0;d<r.length;d++){const c=r[d],g=c[h];if(c[o]===u){r.splice(d,1);break}else g&&g.length&&E(u,c[h])}}function S(u,n,r){if(!u&&u!==0)return null;const o=n||i(e),{key:h,children:d}=i(t);if(h)return o.forEach(c=>{if(r!=null&&r.key||(r==null?void 0:r.key)===0)return r;if(c[h]===u){r=c;return}c[d]&&c[d].length&&(r=S(u,c[d],r))}),r||null}return{deleteNodeByKey:E,insertNodeByKey:p,insertNodesByKey:k,filterByLevel:s,updateNodeByKey:K,getAllKeys:a,getChildrenKeys:T,getEnabledKeys:y,getSelectedNode:S}}function Wt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Qe(e)}const nn=Ae({name:"BasicTree",inheritAttrs:!1,props:Rt,emits:Ht,setup(e,{attrs:t,slots:a,emit:y,expose:T}){const[K]=Ce("tree"),s=fe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=fe({startSearch:!1,searchText:"",searchData:[]}),k=Le([]),[E]=Dt(),S=M(()=>{const{fieldNames:l}=e;return O({children:"children",title:"title",key:"key"},l)}),u=M(()=>{let l=ie(O(O({blockNode:!0},t),e),{expandedKeys:s.expandedKeys,selectedKeys:s.selectedKeys,checkedKeys:s.checkedKeys,checkStrictly:s.checkStrictly,fieldNames:i(S),"onUpdate:expandedKeys":f=>{s.expandedKeys=f,y("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{s.selectedKeys=f,y("update:selectedKeys",f)},onCheck:(f,A)=>{let b=Y(s.checkedKeys);if(nt(b)&&p.startSearch){const L=A.node.eventKey;b=$t(b,z(L)),A.checked&&b.push(L),s.checkedKeys=b}else s.checkedKeys=f;const x=Y(s.checkedKeys);y("update:value",x),y("check",x,A)},onRightClick:_e});return Bt(l,"treeData","class")}),n=M(()=>p.startSearch?p.searchData:i(k)),r=M(()=>!n.value||n.value.length===0),{deleteNodeByKey:o,insertNodeByKey:h,insertNodesByKey:d,filterByLevel:c,updateNodeByKey:g,getAllKeys:_,getChildrenKeys:z,getEnabledKeys:P,getSelectedNode:Ee}=Jt(k,S);function Te(l,f){return!f&&e.renderIcon&&q(e.renderIcon)?e.renderIcon(l):f}function _e(A){return oe(this,arguments,function*({event:l,node:f}){var F;const{rightMenuList:b=[],beforeRightClick:x}=e;let L={event:l,items:[]};if(x&&q(x)){let B=yield x(f,l);Array.isArray(B)?L.items=B:Object.assign(L,B)}else L.items=b;(F=L.items)!=null&&F.length&&(L.items=L.items.filter(B=>!B.hidden),E(L))})}function H(l){s.expandedKeys=l}function ve(){return s.expandedKeys}function ne(l){s.selectedKeys=l}function Be(){return s.selectedKeys}function ae(l){s.checkedKeys=l}function we(){return s.checkedKeys}function le(l){s.checkedKeys=l?P():[]}function J(l){s.expandedKeys=l?_():[]}function Fe(l){s.checkStrictly=l}j(()=>e.searchValue,l=>{l!==p.searchText&&(p.searchText=l)},{immediate:!0}),j(()=>e.treeData,l=>{l&&W(p.searchText)});function W(l){if(l!==p.searchText&&(p.searchText=l),y("update:searchValue",l),!l){p.startSearch=!1;return}const{filterFn:f,checkable:A,expandOnSearch:b,checkOnSearch:x,selectedOnSearch:L}=i(e);p.startSearch=!0;const{title:F,key:B}=i(S),N=[];if(p.searchData=at(i(k),w=>{var R,X;const D=f?f(l,w,i(S)):(X=(R=w[F])==null?void 0:R.includes(l))!=null?X:!1;return D&&N.push(w[B]),D},i(S)),b){const w=lt(p.searchData).map(D=>D[B]);w&&w.length&&H(w)}x&&A&&N.length&&ae(N),L&&N.length&&ne(N)}function Ne(l,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!s.expandedKeys.includes(l))H([...s.expandedKeys,l]);else{const A=[...s.expandedKeys],b=A.findIndex(x=>x===l);b!==-1&&A.splice(b,1),H(A)}}V(()=>{k.value=e.treeData}),Ge(()=>{const l=parseInt(e.defaultExpandLevel);l>0?s.expandedKeys=c(l):e.defaultExpandAll&&J(!0)}),V(()=>{s.expandedKeys=e.expandedKeys}),V(()=>{s.selectedKeys=e.selectedKeys}),V(()=>{s.checkedKeys=e.checkedKeys}),j(()=>e.value,()=>{s.checkedKeys=Y(e.value||[])},{immediate:!0}),j(()=>s.checkedKeys,()=>{const l=Y(s.checkedKeys);y("update:value",l),y("change",l)}),V(()=>{s.checkStrictly=e.checkStrictly});const De={setExpandedKeys:H,getExpandedKeys:ve,setSelectedKeys:ne,getSelectedKeys:Be,setCheckedKeys:ae,getCheckedKeys:we,insertNodeByKey:h,insertNodesByKey:d,deleteNodeByKey:o,updateNodeByKey:g,getSelectedNode:Ee,checkAll:le,expandAll:J,filterByLevel:l=>{s.expandedKeys=c(l)},setSearchValue:l=>{W(l)},getSearchValue:()=>p.searchText};function Ie(l){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((A,b)=>{var L;let x=!0;return q(A.show)?x=(L=A.show)==null?void 0:L.call(A,l):ke(A.show)&&(x=A.show),x?C("span",{key:b,class:K("action")},[A.render(l)]):null})}const Me=M(()=>{const l=ee(n.value);return st(l,(f,A)=>{var se;const b=p.searchText,{highlight:x}=i(e),{title:L,key:F,children:B}=i(S),N=Te(f,f.icon),w=Nt(f,L),D=b?w.indexOf(b):-1,R=p.startSearch&&!ct(b)&&x&&D!==-1,X=`color: ${ke(x)?"#f50":x}`,Oe=R?C("span",{class:(se=i(u))!=null&&se.blockNode?`${K("content")}`:""},[C("span",null,[w.substr(0,D)]),C("span",{style:X},[b]),C("span",null,[w.substr(D+b.length)])]):w;return f[L]=C("span",{class:`${K("title")} pl-2`,onClick:Ne.bind(null,f[F],f[B])},[a!=null&&a.title?it(a,"title",f):C(Q,null,[N&&C(zt,{icon:N},null),Oe,C("span",{class:K("actions")},[Ie(f)])])]),f}),l});return T(De),()=>{let l;const{title:f,helpMessage:A,toolbar:b,search:x,checkable:L}=e,F=f||b||x||a.headerTitle,B={height:"calc(100% - 38px)"};return C("div",{class:[K(),"h-full",t.class]},[F&&C(Yt,{checkable:L,checkAll:le,expandAll:J,title:f,search:x,toolbar:b,helpMessage:A,onStrictlyChange:Fe,onSearch:W,searchText:p.searchText},Wt(l=rt(a))?l:{default:()=>[l]}),C(wt,{wrapperClassName:i(e.treeWrapperClassName),spinning:i(e.loading),tip:"加载中..."},{default:()=>[ye(C(dt,{style:B},{default:()=>[C(Ft,qe(i(u),{showIcon:!1,treeData:Me.value}),null)]}),[[pe,!i(r)]]),ye(C(Ke,{image:Ke.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[pe,i(r)]])]})])}}});export{nn as _};
