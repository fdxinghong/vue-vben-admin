import{u as s}from"./index-0b149b30.js";import _ from"./Drawer1-3a7da07b.js";import y from"./Drawer2-f5a98ebd.js";import E from"./Drawer3-c457c889.js";import A from"./Drawer4-b08d2c0a.js";import R from"./Drawer5-d0db4eff.js";import{P as k}from"./index-54a1c56e.js";import{d as B,a7 as t,_ as $,a8 as P,a9 as u,f as r,E as i}from"./vue-854c8149.js";import{ag as v}from"./antd-8c2f8f62.js";import{_ as W}from"./index-30e8b188.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./BasicForm-11438243.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./componentMap-b8757849.js";import"./useFormItem-628730b1.js";import"./RadioButtonGroup-b6b81251.js";import"./index-1db96177.js";import"./useWindowSizeFn-c30f42b0.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./uniqBy-2dfd8320.js";import"./useForm-611291c3.js";import"./useContentViewHeight-caa1c6ff.js";import"./onMountedOrActivated-1055dd3c.js";const b=B({components:{Alert:v,PageWrapper:k,Drawer1:_,Drawer2:y,Drawer3:E,Drawer4:A,Drawer5:R},setup(){const[e,{openDrawer:o,setDrawerProps:p}]=s(),[g,{openDrawer:f}]=s(),[d,{openDrawer:n}]=s(),[a,{openDrawer:m}]=s(),[w,{openDrawer:D}]=s();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),p({loading:!0}),setTimeout(()=>{p({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:a,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,p,g,f,d){const n=t("Alert"),a=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return $(),P(F,{title:"抽屉组件使用示例"},{default:u(()=>[r(n,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:u(()=>[i(" 打开Drawer ")]),_:1},8,["onClick"]),r(n,{message:"内外同时控制显示隐藏","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:u(()=>[i(" 打开Drawer ")]),_:1}),r(n,{message:"自适应高度/显示footer","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:u(()=>[i(" 打开Drawer ")]),_:1}),r(n,{message:"内外数据交互","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:e.send},{default:u(()=>[i(" 打开Drawer并传递数据 ")]),_:1},8,["onClick"]),r(n,{message:"详情页模式","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:u(()=>[i(" 打开详情Drawer ")]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}const pr=W(b,[["render",L]]);export{pr as default};
