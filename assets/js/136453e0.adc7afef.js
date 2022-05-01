"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[991],{8464:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=t(5086),i=t(9126),r=(t(7711),t(4635)),o=["components"],s={title:"Garfish.channel",slug:"/api/channel",order:5},l=void 0,c={unversionedId:"guide/API/channel",id:"guide/API/channel",isDocsHomePage:!1,title:"Garfish.channel",description:"Garfish.channel \u7528\u4e8e\u5e94\u7528\u95f4\u7684\u901a\u4fe1\u3002\u5b83\u662f EventEmitter2 \u7684\u5b9e\u4f8b",source:"@site/docs/guide/API/channel.md",sourceDirName:"guide/API",slug:"/api/channel",permalink:"/api/channel",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/guide/API/channel.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651374080,formattedLastUpdatedAt:"2022/5/1",frontMatter:{title:"Garfish.channel",slug:"/api/channel",order:5},sidebar:"guide",previous:{title:"Garfish.loadApp",permalink:"/api/loadApp"},next:{title:"Garfish.router",permalink:"/api/router"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],u={toc:d};function h(n){var e=n.components,t=(0,i.Z)(n,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.channel")," \u7528\u4e8e\u5e94\u7528\u95f4\u7684\u901a\u4fe1\u3002\u5b83\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EventEmitter2/EventEmitter2"},"EventEmitter2")," \u7684\u5b9e\u4f8b"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6\nconst App = () => {\n  const handleLogin = (userInfo) => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// \u4e3b\u5e94\u7528\u89e6\u53d1\u76d1\u542c\u4e8b\u4ef6\napi.getLoginInfo.then((res) => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n")))}h.isMDXComponent=!0}}]);