import{B as d}from"./BasicTable-b3d05856.js";import"./componentMap-b8757849.js";import"./TableImg.vue_vue_type_style_index_0_lang-8978c499.js";import{E as f}from"./index-c4151ed7.js";import{c as _,d as m,j as E}from"./data-f0e0c731.js";import{b as C}from"./index-1db96177.js";import{P as F}from"./index-54a1c56e.js";import{d as B,a7 as t,_ as x,a8 as b,a9 as e,f as r,E as g}from"./vue-854c8149.js";import{_ as M}from"./index-30e8b188.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-b6b81251.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./BasicForm-11438243.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./uniqBy-2dfd8320.js";import"./useForm-611291c3.js";import"./useWindowSizeFn-c30f42b0.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";import"./useContentViewHeight-caa1c6ff.js";const A=B({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:F},setup(){function o({filename:s,bookType:n}){E({data:m,filename:s,write2excelOpts:{bookType:n}})}const[a,{openModal:p}]=C();return{defaultHeader:o,columns:_,data:m,register:a,openModal:p}}});function S(o,a,p,s,n,T){const i=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return x(),b(l,{title:"导出示例",content:"可以选择导出格式"},{default:e(()=>[r(u,{title:"基础表格",columns:o.columns,dataSource:o.data},{toolbar:e(()=>[r(i,{onClick:o.openModal},{default:e(()=>[g(" 导出 ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),r(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}const eo=M(A,[["render",S]]);export{eo as default};
