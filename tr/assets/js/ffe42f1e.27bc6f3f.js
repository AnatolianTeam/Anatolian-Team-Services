"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7712],{25643:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var s=r(85893),a=r(11151);const t={title:"\ud83d\udcbe Installation",description:"Orbit Seromoni kat\u0131l\u0131m rehberi.",image:"./img/Orbit-Service-Cover.jpg",keywords:["Orbit","ao","veri","kurulum","rehber"],sidebar_position:1},l="Orbit G\xf6rev Rehberi",i={id:"Testnet/Arweave Ecosystem/orbit/installation",title:"\ud83d\udcbe Installation",description:"Orbit Seromoni kat\u0131l\u0131m rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/orbit/installation.md",sourceDirName:"Testnet/Arweave Ecosystem/orbit",slug:"/Testnet/Arweave Ecosystem/orbit/installation",permalink:"/tr/docs/Testnet/Arweave Ecosystem/orbit/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/orbit/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udcbe Installation",description:"Orbit Seromoni kat\u0131l\u0131m rehberi.",image:"./img/Orbit-Service-Cover.jpg",keywords:["Orbit","ao","veri","kurulum","rehber"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Orbit",permalink:"/tr/docs/Testnet/Arweave Ecosystem/orbit/"},next:{title:"Cosmos Ecosystem",permalink:"/tr/docs/category/cosmos-ecosystem"}},o={image:r(49973).Z},d=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"NodeJS ve NVM",id:"nodejs-ve-nvm",level:2},{value:"NodeJS Kurulumu",id:"nodejs-kurulumu",level:3},{value:"NVM Kurulumu",id:"nvm-kurulumu",level:3},{value:"AO Kurulumu",id:"ao-kurulumu",level:2},{value:"Price Feed Bot",id:"price-feed-bot",level:2},{value:"Process ID \xd6\u011frenme",id:"process-id-\xf6\u011frenme",level:3},{value:"0rbit-Price-Feed.lua Dosyas\u0131 Olu\u015fturma",id:"0rbit-price-feedlua-dosyas\u0131-olu\u015fturma",level:3},{value:"AOS \xc7al\u0131\u015ft\u0131rma",id:"aos-\xe7al\u0131\u015ft\u0131rma",level:3},{value:"\u0130\u015flemi Y\xfckleme",id:"i\u0307\u015flemi-y\xfckleme",level:3},{value:"Monit\xf6r\xfc \xc7al\u0131\u015ft\u0131rma",id:"monit\xf6r\xfc-\xe7al\u0131\u015ft\u0131rma",level:3},{value:"ETH Fiyat\u0131n\u0131 Kontrol Etme",id:"eth-fiyat\u0131n\u0131-kontrol-etme",level:3},{value:"Repo Klonlama",id:"repo-klonlama",level:3},{value:"NEWS Feed Bot",id:"news-feed-bot",level:2},{value:"Process ID \xd6\u011frenme",id:"process-id-\xf6\u011frenme-1",level:3},{value:"Creating 0rbit-News-Feed.lua File",id:"creating-0rbit-news-feedlua-file",level:3},{value:"AOS \xc7al\u0131\u015ft\u0131rma",id:"aos-\xe7al\u0131\u015ft\u0131rma-1",level:3},{value:"\u0130\u015flemi Y\xfckleme",id:"i\u0307\u015flemi-y\xfckleme-1",level:3},{value:"Monit\xf6r\xfc \xc7al\u0131\u015ft\u0131rma",id:"monit\xf6r\xfc-\xe7al\u0131\u015ft\u0131rma-1",level:3},{value:"News Feed Kontrol Etme",id:"news-feed-kontrol-etme",level:3},{value:"PR G\xf6nderme",id:"pr-g\xf6nderme",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"orbit-g\xf6rev-rehberi",children:"Orbit G\xf6rev Rehberi"}),"\n",(0,s.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"nodejs-ve-nvm",children:"NodeJS ve NVM"}),"\n",(0,s.jsx)(n.h3,{id:"nodejs-kurulumu",children:"NodeJS Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -\napt-get install -y nodejs\napt update -y && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nvm-kurulumu",children:"NVM Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nsource ~/.bashrc\nnvm install 22\nnvm use v22.2.0\nnpm install -g npm@latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ao-kurulumu",children:"AO Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm i -g https://get_ao.g8way.io\n"})}),"\n",(0,s.jsx)(n.h1,{id:"g\xf6revler",children:"G\xf6revler"}),"\n",(0,s.jsx)(n.h2,{id:"price-feed-bot",children:"Price Feed Bot"}),"\n",(0,s.jsx)(n.h3,{id:"process-id-\xf6\u011frenme",children:"Process ID \xd6\u011frenme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"aos orbit --cron 30-seconds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"0rbit-price-feedlua-dosyas\u0131-olu\u015fturma",children:"0rbit-Price-Feed.lua Dosyas\u0131 Olu\u015fturma"}),"\n",(0,s.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki de\u011ferlere Process ID (PID) ve GITHUB kullan\u0131c\u0131 ad\u0131n\u0131\u0131 yaz\u0131n."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PID=PROCESS_ID_NUMARANIZ\nGITHUB=GIHUB_KULLANICI_ADINIZ\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'tee $HOME/0rbit-Price-Feed.lua > /dev/null << EOF\n-- PID $PID\n\nlocal json = require("json")\n\n_ORBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\n\nfunction handleError(msg, errorMessage)\n    ao.send({\n        Target = msg.From,\n        Tags = {\n            Action = "Error",\n            ["Message-Id"] = msg.Id,\n            Error = errorMessage\n        }\n    })\nend\n\nHandlers.add("$GITHUB",\n    Handlers.utils.hasMatchingTag("Action", "Sponsored-Get-Request"),\n    function(msg)\n        local token = msg.Tags.Token\n        if not token then\n            handleError(msg, "Token not provided")\n            return\n        end\n        \n        local url = "https://api.coingecko.com/api/v3/simple/price?ids=" .. token .. "&vs_currencies=usd"\n        ao.send({\n            Target = _ORBIT,\n            Action = "Get-Real-Data",\n            Url = url\n        })\n        print("Pricefetch request sent for " .. token)\n    end\n)\n\nHandlers.add("ReceiveData",\n    Handlers.utils.hasMatchingTag("Action", "Receive-Response"),\n    function(msg)\n        print("Received data: " .. msg.Data)\n        local res = json.decode(msg.Data)\n        local token = msg.Tags.Token\n        if res[token] and res[token].usd then\n            ao.send({\n                Target = msg.From,\n                Tags = {\n                    Action = "Price-Response",\n                    ["Message-Id"] = msg.Id,\n                    Price = res[token].usd\n                }\n            })\n            print("Price of " .. token .. " is " .. res[token].usd)\n        else\n            handleError(msg, "Failed to fetch price")\n        end\n    end\n)\nEOF\n'})}),"\n",(0,s.jsx)(n.h3,{id:"aos-\xe7al\u0131\u015ft\u0131rma",children:"AOS \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"aos orbit --cron 30-seconds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"i\u0307\u015flemi-y\xfckleme",children:"\u0130\u015flemi Y\xfckleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:".load 0rbit-Price-Feed.lua\n"})}),"\n",(0,s.jsx)(n.h3,{id:"monit\xf6r\xfc-\xe7al\u0131\u015ft\u0131rma",children:"Monit\xf6r\xfc \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:".monitor\n"})}),"\n",(0,s.jsx)(n.h3,{id:"eth-fiyat\u0131n\u0131-kontrol-etme",children:"ETH Fiyat\u0131n\u0131 Kontrol Etme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'Send({ Target = ao.id, Action="Sponsored-Get-Request", Tags = { Token = "ethereum" }})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"repo-klonlama",children:"Repo Klonlama"}),"\n",(0,s.jsxs)(n.p,{children:["After cloning the ",(0,s.jsx)(n.a,{href:"https://github.com/0rbit-co/quest",children:"repo"}),", create a folder named ",(0,s.jsx)(n.code,{children:"price-feed-bot-GithubUsername"}),", add the image of the output of the last code and your ",(0,s.jsx)(n.code,{children:"0rbit-Price-Feed.lua"})," file.\n",(0,s.jsx)(n.a,{href:"https://github.com/0rbit-co/quest",children:"Repoyu"})," klonlad\u0131ktan sonra i\xe7erisine ",(0,s.jsx)(n.code,{children:"price-feed-bot-GithubUsername"})," ad\u0131nda klas\xf6r olu\u015fturup i\xe7erisine son kodun \xe7\u0131kt\u0131s\u0131na ait resmi ve ",(0,s.jsx)(n.code,{children:"0rbit-Price-Feed.lua"})," dosyan\u0131z\u0131 ekleyin"]}),"\n",(0,s.jsx)(n.h2,{id:"news-feed-bot",children:"NEWS Feed Bot"}),"\n",(0,s.jsx)(n.h3,{id:"process-id-\xf6\u011frenme-1",children:"Process ID \xd6\u011frenme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"aos 0rbitNewsFeed --cron 30-seconds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-0rbit-news-feedlua-file",children:"Creating 0rbit-News-Feed.lua File"}),"\n",(0,s.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki de\u011fere Process ID (PID)'nizi yaz\u0131n."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PID=PROCESS_ID_NUMARANIZ\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'tee $HOME/0rbit-News-Feed.lua > /dev/null << EOF\n-- ao.id $PID\n\nlocal json = require("json")\nlocal _0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\nlocal URL = "https://api.theblockbeats.news/v1/open-api/open-flash?size=5&page=1&type=push"\nReceivedData = ReceivedData or {}\n\nHandlers.add(\n    "Get-Request",\n    Handlers.utils.hasMatchingTag("Action", "Sponsored-Get-Request"),\n    function(msg)\n         Send({\n             Target = _0RBIT,\n             Action = "Get-Real-Data",\n             Url = URL\n        })\n        print("GET Request sent to the 0rbit process.")\n    end\n)\n\nHandlers.add(\n    "Receive-Data",\n    Handlers.utils.hasMatchingTag("Action", "Receive-Response"),\n    function(msg)\n        if not msg.Data then\n            print("No data received.")\n            return\n        end\n\n        local res = json.decode(msg.Data)\n\n        ReceivedData1 = res.data.data\n        local extractedData = {}\n        for k, v in ipairs(ReceivedData1) do\n                table.insert(extractedData, {\n                    title = v.title,\n                    description = v.content\n                })\n            ReceivedData = extractedData\n\n        end\n        print("Processed data: " .. json.encode(ReceivedData1))\n    end\n)\n\nlocal function getLatestData(msg)\n    local data = json.encode(ReceivedData)\n    Handlers.utils.reply(data)(msg)\n    print("Latest data sent: " .. data)\nend\n\nHandlers.add(\n    "GetLatestData",\n    Handlers.utils.hasMatchingTag("Action", "Get-Latest-Data"),\n    getLatestData\n)\n\nlocal function fetchNewsPeriodically()\n     Send({\n         Target = _0RBIT,\n         Action = "Get-Real-Data",\n         Url = URL\n     })\n    print("Periodic GET Request sent to the 0rbit process.")\nend\n\nHandlers.add(\n    "CronTick",\n    Handlers.utils.hasMatchingTag("Action", "Cron"),\n    fetchNewsPeriodically\n)\nEOF\n'})}),"\n",(0,s.jsx)(n.h3,{id:"aos-\xe7al\u0131\u015ft\u0131rma-1",children:"AOS \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"aos orbit --cron 30-seconds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"i\u0307\u015flemi-y\xfckleme-1",children:"\u0130\u015flemi Y\xfckleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:".load 0rbit-News-Feed.lua\n"})}),"\n",(0,s.jsx)(n.h3,{id:"monit\xf6r\xfc-\xe7al\u0131\u015ft\u0131rma-1",children:"Monit\xf6r\xfc \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:".monitor\n"})}),"\n",(0,s.jsx)(n.h3,{id:"news-feed-kontrol-etme",children:"News Feed Kontrol Etme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'Send({ Target = ao.id, Action="Sponsored-Get-Request"})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"pr-g\xf6nderme",children:"PR G\xf6nderme"}),"\n",(0,s.jsxs)(n.p,{children:["\u0130lk g\xf6revde klonlanan repo i\xe7erisinde bu sefer ",(0,s.jsx)(n.code,{children:"news-feed-bot-GithubUsername"})," ad\u0131nda bir klas\xf6r olu\u015fturup i\xe7erisine son kodun \xe7\u0131kt\u0131s\u0131na ait resmi ve ",(0,s.jsx)(n.code,{children:"0rbit-Price-Feed.lua"})," dosyan\u0131z\u0131 ekleyin."]}),"\n",(0,s.jsx)(n.p,{children:"Son olarak PR g\xf6nderin."})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},49973:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Orbit-Service-Cover-b3a7f3c4fddbf02fbb2d1ee3dc1c5196.jpg"},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var s=r(67294);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);