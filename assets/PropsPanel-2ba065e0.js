import C from"./FormProps-ef000427.js";import y from"./FormItemProps-6d088b81.js";import b from"./ComponentProps-28223f8c.js";import v from"./FormItemColumnProps-1252126d.js";import{u as k}from"./useFormDesignState-c29500c0.js";import{c}from"./formItemConfig-b128d98c.js";import{ae as F,by as g}from"./antd-8c2f8f62.js";import{d as T,e as $,a7 as t,_ as e,$ as I,f as s,a9 as r,a8 as n,R as K}from"./vue-854c8149.js";import{_ as B}from"./index-30e8b188.js";import"./formItemPropsConfig-b7147abd.js";import"./RuleProps-02000dd8.js";import"./index-c92844ee.js";import"./RadioButtonGroup-b6b81251.js";import"./useFormItem-628730b1.js";import"./FormOptions-9c80a15d.js";import"./componentMap-b8757849.js";import"./index-1db96177.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./useWindowSizeFn-c30f42b0.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";const E=T({name:"PropsPanel",components:{FormProps:C,FormItemProps:y,ComponentProps:b,ComponentColumnProps:v,Tabs:F,TabPane:g},setup(){const{formConfig:o}=k(),m=$(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}});function S(o,m,i,a,w,A){const u=t("FormProps"),p=t("TabPane"),_=t("FormItemProps"),f=t("ComponentColumnProps"),l=t("ComponentProps"),P=t("Tabs");return e(),I("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:r(()=>[(e(),n(p,{key:1,tab:"表单"},{default:r(()=>[s(u)]),_:1})),(e(),n(p,{key:2,tab:"控件"},{default:r(()=>[s(_)]),_:1})),(e(),n(p,{key:3,tab:"栅格"},{default:r(()=>[s(f)]),_:1})),(e(),n(p,{key:4,tab:"组件"},{default:r(()=>[o.slotProps?K(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(e(),n(l,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const po=B(E,[["render",S],["__scopeId","data-v-7c69978a"]]);export{po as default};
