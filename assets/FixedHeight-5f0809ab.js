import{B as c}from"./BasicTable-b3d05856.js";import"./componentMap-b8757849.js";import{H as d}from"./TableImg.vue_vue_type_style_index_0_lang-8978c499.js";import{u as _}from"./useTable-b518702d.js";import{getCustomHeaderColumns as u}from"./tableData-1f27fe0e.js";import{d as f}from"./table-78a0911c.js";import{a as B}from"./index-05f36017.js";import{d as H,a7 as e,_ as o,$ as s,f as a,a9 as C,E as i,F as g,a8 as k}from"./vue-854c8149.js";import{aV as F}from"./antd-8c2f8f62.js";import{_ as h}from"./index-30e8b188.js";import"./useFormItem-628730b1.js";import"./RadioButtonGroup-b6b81251.js";import"./index-1db96177.js";import"./useWindowSizeFn-c30f42b0.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./BasicForm-11438243.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./uniqBy-2dfd8320.js";import"./useForm-611291c3.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";import"./select-b8851bfa.js";import"./index-50ce603a.js";const T=H({components:{BasicTable:c,FormOutlined:F,BasicHelp:B,HeaderCell:d},setup(){const[t]=_({title:"定高/头部自定义",api:f,columns:u(),canResize:!1,scroll:{y:100}});return{registerTable:t}}}),b={class:"p-4"},x={key:0};function y(t,$,O,R,V,v){const m=e("BasicHelp"),p=e("FormOutlined"),n=e("HeaderCell"),l=e("BasicTable");return o(),s("div",b,[a(l,{onRegister:t.registerTable},{headerCell:C(({column:r})=>[r.key==="name"?(o(),s("span",x,[i(" 姓名 "),a(m,{class:"ml-2",text:"headerHelpMessage方式2"})])):r.key==="address"?(o(),s(g,{key:1},[i(" 地址 "),a(p,{class:"ml-2"})],64)):(o(),k(n,{key:2,column:r},null,8,["column"]))]),_:1},8,["onRegister"])])}const me=h(T,[["render",y]]);export{me as default};
