import{N as c,O as u,P as f,R as l,U as s,V as M,W as g,X as h,_ as C,h as i,j as d,k as r,t as p,u as a,v as m}from"./chunk-7DPEPTNN.js";import"./chunk-OC64LIZX.js";var v=(()=>{let t=class{constructor(){this.title="countryApp"}},o=t;return(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275cmp=d({type:t,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"flex","container","mx-auto","py-5","lg:px-24","space-x-5"],[1,"basis-1/5"],[1,"hidden"]],template:function(e,w){e&1&&(p(0,"main",0),m(1,"shared-sidebar",1),p(2,"section"),m(3,"router-outlet",2),a()())},dependencies:[M,l]})})(),o})();var S=[{path:"about",component:g},{path:"contact",component:h},{path:"countries",loadChildren:()=>import("./countries.module-QF5MFIDV.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{let t=class{},o=t;return(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275mod=r({type:t})})(),(()=>{t.\u0275inj=i({imports:[s.forRoot(S),s]})})(),o})();var x=(()=>{let t=class{},o=t;return(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275mod=r({type:t,bootstrap:[v]})})(),(()=>{t.\u0275inj=i({imports:[f,C,b,c]})})(),o})();u().bootstrapModule(x).catch(o=>console.error(o));
