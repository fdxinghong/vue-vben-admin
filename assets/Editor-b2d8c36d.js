import{B as m}from"./BasicForm-11438243.js";import"./componentMap-b8757849.js";import"./RadioButtonGroup-b6b81251.js";import{C as u}from"./index-05f36017.js";import{b as l,_ as c}from"./index-30e8b188.js";import{M as d}from"./index-85ac047b.js";import{P as f}from"./index-54a1c56e.js";import{d as _,n as C,a7 as t,_ as h,a8 as b,a9 as a,f as s}from"./vue-854c8149.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./antd-8c2f8f62.js";import"./uniqBy-2dfd8320.js";import"./index-1db96177.js";import"./useWindowSizeFn-c30f42b0.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./index-50ce603a.js";import"./useRootSetting-d6b8a026.js";import"./onMountedOrActivated-1055dd3c.js";import"./useContentViewHeight-caa1c6ff.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:o})=>C(d,{value:e[o],onChange:r=>{e[o]=r}})}],k=_({components:{BasicForm:m,CollapseContainer:u,PageWrapper:f},setup(){const{createMessage:e}=l();return{schemas:g,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))}}}});function B(e,o,r,w,F,M){const n=t("BasicForm"),p=t("CollapseContainer"),i=t("PageWrapper");return h(),b(i,{title:"MarkDown组件嵌入Form示例"},{default:a(()=>[s(p,{title:"MarkDown表单"},{default:a(()=>[s(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const U=c(k,[["render",B]]);export{U as default};
