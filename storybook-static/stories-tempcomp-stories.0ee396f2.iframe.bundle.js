"use strict";(self.webpackChunknext_storybook=self.webpackChunknext_storybook||[]).push([[940],{"./src/stories/tempcomp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,Primary:()=>Primary,Secondary:()=>Secondary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tempcomp_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const GetOTPButton=param=>{let{primary=!1,size="medium",backgroundColor,label,...props}=param;return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{style:{background:backgroundColor,color:"white",width:"14rem",height:"3rem",borderRadius:"1rem"},children:"GET OTP"})})},tempcomp=GetOTPButton;var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Secondary_parameters,_Secondary_parameters_docs,_Secondary_parameters1,_Warning_parameters,_Warning_parameters_docs,_Warning_parameters1,_Filled_parameters,_Filled_parameters_docs,_Filled_parameters1;GetOTPButton.__docgenInfo={description:"",methods:[],displayName:"GetOTPButton",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const tempcomp_stories={title:"Example/GetOTPButton",component:tempcomp,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:(0,dist.fn)()}},Primary={args:{primary:!0,label:"Button",backgroundColor:"orange"}},Secondary={args:{label:"Button",backgroundColor:"orange"}},Warning={args:{size:"large",label:"Button",backgroundColor:"red"}},Filled={args:{size:"small",label:"Button",backgroundColor:"#260f8a"}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: 'Button',\n    backgroundColor: 'orange'\n  }\n}",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary_parameters=Secondary.parameters)||void 0===_Secondary_parameters?void 0:_Secondary_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'Button',\n    backgroundColor: 'orange'\n  }\n}",...null===(_Secondary_parameters1=Secondary.parameters)||void 0===_Secondary_parameters1||null===(_Secondary_parameters_docs=_Secondary_parameters1.docs)||void 0===_Secondary_parameters_docs?void 0:_Secondary_parameters_docs.source}}},Warning.parameters={...Warning.parameters,docs:{...null===(_Warning_parameters=Warning.parameters)||void 0===_Warning_parameters?void 0:_Warning_parameters.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button',\n    backgroundColor: 'red'\n  }\n}",...null===(_Warning_parameters1=Warning.parameters)||void 0===_Warning_parameters1||null===(_Warning_parameters_docs=_Warning_parameters1.docs)||void 0===_Warning_parameters_docs?void 0:_Warning_parameters_docs.source}}},Filled.parameters={...Filled.parameters,docs:{...null===(_Filled_parameters=Filled.parameters)||void 0===_Filled_parameters?void 0:_Filled_parameters.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button',\n    backgroundColor: '#260f8a'\n  }\n}",...null===(_Filled_parameters1=Filled.parameters)||void 0===_Filled_parameters1||null===(_Filled_parameters_docs=_Filled_parameters1.docs)||void 0===_Filled_parameters_docs?void 0:_Filled_parameters_docs.source}}};const __namedExportsOrder=["Primary","Secondary","Warning","Filled"]},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function p(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&"key"!==b&&"ref"!==b&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=p,exports.jsxs=p},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);