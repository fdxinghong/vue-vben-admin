var c=(e,a,o)=>new Promise((n,p)=>{var u=t=>{try{s(o.next(t))}catch(i){p(i)}},l=t=>{try{s(o.throw(t))}catch(i){p(i)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(u,l);s((o=o.apply(e,a)).next())});import{B as d}from"./BasicForm-11438243.js";import"./componentMap-b8757849.js";import{u as b}from"./useForm-611291c3.js";import"./RadioButtonGroup-b6b81251.js";import{b as f,_}from"./index-30e8b188.js";import{P}from"./index-54a1c56e.js";import{d as g,a7 as m,_ as F,a8 as h,a9 as C,f as B}from"./vue-854c8149.js";import"./FormItem.vue_vue_type_script_lang-330de07e.js";import"./index-05f36017.js";import"./index-50ce603a.js";import"./antd-8c2f8f62.js";import"./uniqBy-2dfd8320.js";import"./index-1db96177.js";import"./useWindowSizeFn-c30f42b0.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-2f48c496.js";import"./base64Conver-39fc0d26.js";import"./index-1f3e150b.js";import"./IconPicker.vue_vue_type_style_index_0_lang-e696d00b.js";import"./useCopyToClipboard-9eb2508f.js";import"./index-ac70e950.js";import"./useContentViewHeight-caa1c6ff.js";import"./onMountedOrActivated-1055dd3c.js";const r={span:8},v=[{field:"title",component:"Input",label:"标题",colProps:r,componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",colProps:r,required:!0},{field:"client",component:"Input",colProps:r,label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"weights",component:"InputNumber",label:"权重",colProps:r,subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"target",component:"InputTextArea",label:"目标描述",colProps:r,componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",colProps:r,componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"inviteer",component:"Input",label:"邀评人",colProps:{span:8},subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",colProps:{span:16},itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],x=g({name:"FormBasicPage",components:{BasicForm:d,PageWrapper:P},setup(){const{createMessage:e}=f(),[a,{validate:o,setProps:n}]=b({labelCol:{span:8},wrapperCol:{span:15},schemas:v,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"提交"},submitFunc:p});function p(){return c(this,null,function*(){try{yield o(),n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),e.success("提交成功！")},2e3)}catch(u){}})}return{register:a}}});function w(e,a,o,n,p,u){const l=m("BasicForm"),s=m("PageWrapper");return F(),h(s,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:C(()=>[B(l,{onRegister:e.register},null,8,["onRegister"])]),_:1})}const X=_(x,[["render",w],["__scopeId","data-v-391920c8"]]);export{X as default};
