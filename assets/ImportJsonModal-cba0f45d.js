var y=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var h=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))M.call(o,a)&&h(e,a,o[a]);if(_)for(var a of _(o))J.call(o,a)&&h(e,a,o[a]);return e},i=(e,o)=>E(e,I(o));import{u as U}from"./useFormDesignState-c29500c0.js";import{f as g,g as j}from"./index-c92844ee.js";import{C as D,M as F}from"./index-bcbbe6dd.js";import{b as O,_ as S}from"./index-30e8b188.js";import{d as k,r as w,H as B,a7 as r,_ as N,a8 as x,a9 as n,f as l,E as u,a0 as C,a3 as $,a4 as T}from"./vue-854c8149.js";import{aG as V,O as A}from"./antd-8c2f8f62.js";import"./useWindowSizeFn-c30f42b0.js";const K=k({name:"ImportJsonModal",components:{CodeEditor:D,Upload:V,Modal:A},setup(){const{createMessage:e}=O(),o=w({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=U(),d=()=>{o.visible=!1},m=()=>{o.visible=!0},p=()=>{try{const s=JSON.parse(o.json);s.schemas&&g(s.schemas,t=>{j(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),d(),e.success("导入成功")}catch(s){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:p,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){o.json=this.result,p()},!1},handleCancel:d,showModal:m},B(o)),{MODE:F})}});const L=e=>($("data-v-9e92932d"),e=e(),T(),e),R=L(()=>C("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(e,o,a,d,m,p){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),b=r("Modal");return N(),x(b,{title:"JSON数据",visible:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,C("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["visible","onOk","onCancel"])}const ee=S(K,[["render",G],["__scopeId","data-v-9e92932d"]]);export{ee as default};
