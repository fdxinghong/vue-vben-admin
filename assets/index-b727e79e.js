import{B as c}from"./componentMap-b8757849.js";import{b as l,_ as d}from"./index-30e8b188.js";import{B as f}from"./BasicForm-11438243.js";import{u as g}from"./useForm-611291c3.js";import"./RadioButtonGroup-b6b81251.js";import{P as _}from"./index-54a1c56e.js";import{u as i}from"./upload-54916124.js";import{d as B,a7 as e,_ as C,a8 as h,a9 as A,f as a}from"./vue-854c8149.js";import{ag as p}from"./antd-8c2f8f62.js";import"./useFormItem-628730b1.js";import"./index-1db96177.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./useWindowSizeFn-c30f42b0.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./uniqBy-2dfd8320.js";import"./useContentViewHeight-caa1c6ff.js";import"./onMountedOrActivated-1055dd3c.js";const F=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:i}}],P=B({components:{BasicUpload:c,BasicForm:f,PageWrapper:_,[p.name]:p},setup(){const{createMessage:o}=l(),[r]=g({labelWidth:120,schemas:F,actionColOptions:{span:16}});return{handleChange:t=>{o.info(`已上传文件${JSON.stringify(t)}`)},uploadApi:i,register:r}}});function $(o,r,t,b,x,U){const s=e("a-alert"),m=e("BasicUpload"),n=e("BasicForm"),u=e("PageWrapper");return C(),h(u,{title:"上传组件示例"},{default:A(()=>[a(s,{message:"基础示例"}),a(m,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),a(s,{message:"嵌入表单,加入表单校验"}),a(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}const Y=d(P,[["render",$]]);export{Y as default};
