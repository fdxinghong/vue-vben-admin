import{aG as _,w as f,_ as k}from"./index-30e8b188.js";import{d as a,k as r,o as m,_ as c,$ as C,R as O,a7 as s,a8 as v,a9 as i,f as b,a0 as x,a1 as S}from"./vue-854c8149.js";import{P as $}from"./index-54a1c56e.js";import"./antd-8c2f8f62.js";import"./useContentViewHeight-caa1c6ff.js";import"./useWindowSizeFn-c30f42b0.js";import"./onMountedOrActivated-1055dd3c.js";const B=a({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return _(n,()=>{t("clickOutside")}),m(()=>{t("mounted")}),(o,l)=>(c(),C("div",{ref_key:"wrap",ref:n},[O(o.$slots,"default")],512))}}),g=f(B),w=a({components:{ClickOutSide:g,PageWrapper:$},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function y(e,t,n,o,l,E){const u=s("ClickOutSide"),d=s("PageWrapper");return c(),v(d,{title:"点内外部触发事件"},{default:i(()=>[b(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:i(()=>[x("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},S(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}const j=k(w,[["render",y],["__scopeId","data-v-8fdebb4b"]]);export{j as default};
