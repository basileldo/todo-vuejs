if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const l=e=>o(e,n),c={module:{uri:n},exports:t,require:l};s[n]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-bb2e0bf1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"moz-todo-vue"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/app.17b62f7f.css",revision:null},{url:"/index.html",revision:"597ef178d9a4ce494cada26f58137e1e"},{url:"/js/app.b1d73133.js",revision:null},{url:"/js/chunk-vendors.57766f43.js",revision:null},{url:"/manifest.json",revision:"955198a814ae07f6b6c43bf84ba738d4"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
