import{B as u}from"./BasicForm-11438243.js";import"./componentMap-b8757849.js";import{u as i}from"./useForm-611291c3.js";import"./RadioButtonGroup-b6b81251.js";import{C as d}from"./index-05f36017.js";import{P as f}from"./index-54a1c56e.js";import{d as b,a7 as p,_ as C,a8 as P,a9 as l,f as t}from"./vue-854c8149.js";import{_ as h}from"./index-30e8b188.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./antd-8c2f8f62.js";import"./uniqBy-2dfd8320.js";import"./index-1db96177.js";import"./useWindowSizeFn-c30f42b0.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./index-50ce603a.js";import"./useContentViewHeight-caa1c6ff.js";import"./onMountedOrActivated-1055dd3c.js";const c=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function _(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const F=b({components:{BasicForm:u,CollapseContainer:d,PageWrapper:f},setup(){const[e]=i({labelWidth:120,schemas:c(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),n=[];for(let o=14;o<30;o++)n.push({field:"field"+o,component:"Input",label:"字段"+o,colProps:{span:8}});const[r]=i({labelWidth:120,schemas:[...c(),..._(),{field:"",component:"Divider",label:"更多字段"},...n],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:e,register1:r}}});function g(e,n,r,o,B,v){const a=p("BasicForm"),s=p("CollapseContainer"),m=p("PageWrapper");return C(),P(m,{title:"可折叠表单示例"},{default:l(()=>[t(s,{title:"基础收缩示例"},{default:l(()=>[t(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),t(s,{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:l(()=>[t(a,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}const Q=h(F,[["render",g]]);export{Q as default};
