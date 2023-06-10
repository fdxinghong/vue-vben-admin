import{B as C}from"./BasicForm-11438243.js";import"./componentMap-b8757849.js";import"./RadioButtonGroup-b6b81251.js";import{C as b}from"./index-05f36017.js";import{b as E,_ as P}from"./index-30e8b188.js";import{P as F}from"./index-54a1c56e.js";import{d as v,k,a7 as a,_ as c,a8 as B,a9 as s,a0 as i,f as t,E as l}from"./vue-854c8149.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./antd-8c2f8f62.js";import"./uniqBy-2dfd8320.js";import"./index-1db96177.js";import"./useWindowSizeFn-c30f42b0.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./index-50ce603a.js";import"./useContentViewHeight-caa1c6ff.js";import"./onMountedOrActivated-1055dd3c.js";const $=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],D=v({components:{BasicForm:C,CollapseContainer:b,PageWrapper:F},setup(){const o=k(null),{createMessage:e}=E();return{formElRef:o,schemas:$,handleSubmit:r=>{e.success("click search,values:"+JSON.stringify(r))},setProps(r){const p=o.value;p&&p.setProps(r)}}}}),A={class:"mb-4"},S={class:"mb-4"};function g(o,e,r,p,w,W){const u=a("a-button"),m=a("BasicForm"),d=a("CollapseContainer"),f=a("PageWrapper");return c(),B(f,{title:"Ref操作示例"},{default:s(()=>[i("div",A,[t(u,{onClick:e[0]||(e[0]=n=>o.setProps({labelWidth:150})),class:"mr-2"},{default:s(()=>[l(" 更改labelWidth ")]),_:1}),t(u,{onClick:e[1]||(e[1]=n=>o.setProps({labelWidth:120})),class:"mr-2"},{default:s(()=>[l(" 还原labelWidth ")]),_:1}),t(u,{onClick:e[2]||(e[2]=n=>o.setProps({size:"large"})),class:"mr-2"},{default:s(()=>[l(" 更改Size ")]),_:1}),t(u,{onClick:e[3]||(e[3]=n=>o.setProps({size:"default"})),class:"mr-2"},{default:s(()=>[l(" 还原Size ")]),_:1}),t(u,{onClick:e[4]||(e[4]=n=>o.setProps({disabled:!0})),class:"mr-2"},{default:s(()=>[l(" 禁用表单 ")]),_:1}),t(u,{onClick:e[5]||(e[5]=n=>o.setProps({disabled:!1})),class:"mr-2"},{default:s(()=>[l(" 解除禁用 ")]),_:1}),t(u,{onClick:e[6]||(e[6]=n=>o.setProps({compact:!0})),class:"mr-2"},{default:s(()=>[l(" 紧凑表单 ")]),_:1}),t(u,{onClick:e[7]||(e[7]=n=>o.setProps({compact:!1})),class:"mr-2"},{default:s(()=>[l(" 还原正常间距 ")]),_:1}),t(u,{onClick:e[8]||(e[8]=n=>o.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[l(" 操作按钮位置 ")]),_:1})]),i("div",S,[t(u,{onClick:e[9]||(e[9]=n=>o.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[l(" 隐藏操作按钮 ")]),_:1}),t(u,{onClick:e[10]||(e[10]=n=>o.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[l(" 显示操作按钮 ")]),_:1}),t(u,{onClick:e[11]||(e[11]=n=>o.setProps({showResetButton:!1})),class:"mr-2"},{default:s(()=>[l(" 隐藏重置按钮 ")]),_:1}),t(u,{onClick:e[12]||(e[12]=n=>o.setProps({showResetButton:!0})),class:"mr-2"},{default:s(()=>[l(" 显示重置按钮 ")]),_:1}),t(u,{onClick:e[13]||(e[13]=n=>o.setProps({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[l(" 隐藏查询按钮 ")]),_:1}),t(u,{onClick:e[14]||(e[14]=n=>o.setProps({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[l(" 显示查询按钮 ")]),_:1}),t(u,{onClick:e[15]||(e[15]=n=>o.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:s(()=>[l(" 修改重置按钮 ")]),_:1}),t(u,{onClick:e[16]||(e[16]=n=>o.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[l(" 修改查询按钮 ")]),_:1})]),t(d,{title:"使用ref调用表单内部函数示例"},{default:s(()=>[t(m,{schemas:o.schemas,ref:"formElRef",labelWidth:100,onSubmit:o.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const x=P(D,[["render",g]]);export{x as default};
