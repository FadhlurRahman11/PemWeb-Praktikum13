import{d as m,T as d,o as l,c,w as t,a,u as o,Z as p,b as e,e as u,n as f,f as _}from"./app-b9e19904.js";import{_ as w}from"./GuestLayout.vue_vue_type_script_setup_true_lang-179f0a83.js";import{_ as b,a as h,b as x}from"./TextInput.vue_vue_type_script_setup_true_lang-d7721618.js";import{P as g}from"./PrimaryButton-a85e8e71.js";import"./ApplicationLogo-cd497eef.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],P={class:"flex justify-end mt-4"},j=m({__name:"ConfirmPassword",setup(V){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset()}})};return(v,r)=>(l(),c(w,null,{default:t(()=>[a(o(p),{title:"Confirm Password"}),y,e("form",{onSubmit:_(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(x,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(g,{class:f(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[u(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1}))}});export{j as default};