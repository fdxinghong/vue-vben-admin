var E=Object.defineProperty;var _=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))g.call(t,o)&&f(e,o,t[o]);if(_)for(var o of _(t))k.call(t,o)&&f(e,o,t[o]);return e};import x from"./Step1-ace0c137.js";import R from"./Step2-c0cfecfa.js";import V from"./Step3-7f4d507f.js";import{P as y}from"./index-54a1c56e.js";import{bu as u}from"./antd-8c2f8f62.js";import{d as D,k as $,r as w,H as W,a7 as n,_ as a,a8 as s,a9 as v,a0 as h,f as r,t as i,A as m,ab as F}from"./vue-854c8149.js";import{_ as b}from"./index-30e8b188.js";import"./BasicForm-11438243.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./componentMap-b8757849.js";import"./useFormItem-628730b1.js";import"./RadioButtonGroup-b6b81251.js";import"./index-1db96177.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./useWindowSizeFn-c30f42b0.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./uniqBy-2dfd8320.js";import"./useForm-611291c3.js";import"./data-6b084658.js";import"./useContentViewHeight-caa1c6ff.js";import"./onMountedOrActivated-1055dd3c.js";const H=D({name:"FormStepPage",components:{Step1:x,Step2:R,Step3:V,PageWrapper:y,[u.name]:u,[u.Step.name]:u.Step},setup(){const e=$(0),t=w({initSetp2:!1,initSetp3:!1});function o(p){e.value++,t.initSetp2=!0}function c(){e.value--}function l(p){e.value++,t.initSetp3=!0}function d(){e.value=0,t.initSetp2=!1,t.initSetp3=!1}return S({current:e,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},W(t))}});const I={class:"step-form-form"},j={class:"mt-5"};function q(e,t,o,c,l,d){const p=n("a-step"),B=n("a-steps"),C=n("Step1"),N=n("Step2"),P=n("Step3"),A=n("PageWrapper");return a(),s(A,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:v(()=>[h("div",I,[r(B,{current:e.current},{default:v(()=>[r(p,{title:"填写转账信息"}),r(p,{title:"确认转账信息"}),r(p,{title:"完成"})]),_:1},8,["current"])]),h("div",j,[i(r(C,{onNext:e.handleStep1Next},null,8,["onNext"]),[[m,e.current===0]]),e.initSetp2?i((a(),s(N,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[m,e.current===1]]):F("",!0),e.initSetp3?i((a(),s(P,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[m,e.current===2]]):F("",!0)])]),_:1})}const Se=b(H,[["render",q],["__scopeId","data-v-c7580c9f"]]);export{Se as default};
