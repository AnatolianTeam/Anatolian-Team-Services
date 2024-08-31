"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7327],{31936:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=a(85893),n=a(11151);const c={title:"\ud83c\udd99 Update",description:"Fractal Hubble update guide.",image:"./img/Fractal-Service-Cover.jpg",keywords:["Fractal","Bitcoin","BTC","Service","installation"]},l="Fractal Update Guide",i={id:"Testnet/fractal/update",title:"\ud83c\udd99 Update",description:"Fractal Hubble update guide.",source:"@site/docs/Testnet/fractal/update.md",sourceDirName:"Testnet/fractal",slug:"/Testnet/fractal/update",permalink:"/docs/Testnet/fractal/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/fractal/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Fractal Hubble update guide.",image:"./img/Fractal-Service-Cover.jpg",keywords:["Fractal","Bitcoin","BTC","Service","installation"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/fractal/installation"},next:{title:"Galadriel",permalink:"/docs/Testnet/galadriel/"}},s={image:a(47909).Z},o=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,n.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fractal-update-guide",children:"Fractal Update Guide"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"cd $HOME\nsystemctl stop fractald\nrm -rf fractal\nwget https://github.com/fractal-bitcoin/fractald-release/releases/download/v0.1.6/fractald-0.1.6-x86_64-linux-gnu.tar.gz \ntar -zxvf fractald-0.1.6-x86_64-linux-gnu.tar.gz && mv fractald-0.1.6-x86_64-linux-gnu fractal && rm fractald-0.1.6-x86_64-linux-gnu.tar.gz \nsystemctl start fractald\njournalctl -u fractald -f -o cat\n"})})]})}function u(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},47909:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/Fractal-Service-Cover-089ac065318e2294afae34d0cf1e1963.jpg"},11151:(t,e,a)=>{a.d(e,{Z:()=>i,a:()=>l});var r=a(67294);const n={},c=r.createContext(n);function l(t){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:l(t.components),r.createElement(c.Provider,{value:e},t.children)}}}]);