import{B as d}from"./BasicTable-b3d05856.js";import{T as f}from"./componentMap-b8757849.js";import"./TableImg.vue_vue_type_style_index_0_lang-8978c499.js";import{u as B}from"./useTable-b518702d.js";import{P as C}from"./index-54a1c56e.js";import{getBasicColumns as F}from"./tableData-1f27fe0e.js";import{d as b}from"./table-78a0911c.js";import{d as _,a7 as e,_ as u,a8 as s,a9 as n,f as g,a0 as E,a1 as T,ab as w}from"./vue-854c8149.js";import{_ as A}from"./index-30e8b188.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-b6b81251.js";import"./index-1db96177.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./useWindowSizeFn-c30f42b0.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./BasicForm-11438243.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./uniqBy-2dfd8320.js";import"./useForm-611291c3.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";import"./useContentViewHeight-caa1c6ff.js";import"./select-b8851bfa.js";const h=_({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function i(r){}function a(r){}return{registerTable:o,handleDelete:i,handleOpen:a}}});function k(o,i,a,r,x,y){const l=e("TableAction"),m=e("BasicTable"),c=e("PageWrapper");return u(),s(c,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:n(()=>[g(m,{onRegister:o.registerTable},{expandedRowRender:n(({record:t})=>[E("span",null,"No: "+T(t.no),1)]),bodyCell:n(({column:t,record:p})=>[t.key==="action"?(u(),s(l,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const ro=A(h,[["render",k]]);export{ro as default};
